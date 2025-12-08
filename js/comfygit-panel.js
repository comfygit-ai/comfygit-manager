import { app as Ft } from "../../scripts/app.js";
import { defineComponent as te, createElementBlock as o, openBlock as s, createCommentVNode as r, createElementVNode as e, renderSlot as Pe, createBlock as T, resolveDynamicComponent as Ns, normalizeClass as fe, withCtx as l, toDisplayString as a, createVNode as _, createTextVNode as h, computed as L, Fragment as W, renderList as ae, normalizeStyle as Lt, ref as y, onMounted as Oe, watch as ut, Teleport as et, withModifiers as Be, Transition as Po, createSlots as Kt, withKeys as wt, reactive as vs, onUnmounted as Cs, readonly as Ro, unref as Se, withDirectives as Re, vModelText as kt, vModelRadio as Pt, vModelCheckbox as ks, nextTick as As, vModelSelect as Dt, vModelDynamic as xs, TransitionGroup as Mo, createApp as Bs, h as Fs } from "vue";
const Do = { class: "panel-layout" }, Lo = {
  key: 0,
  class: "panel-layout-header"
}, zo = {
  key: 1,
  class: "panel-layout-search"
}, Uo = { class: "panel-layout-content" }, Oo = {
  key: 2,
  class: "panel-layout-footer"
}, No = /* @__PURE__ */ te({
  __name: "PanelLayout",
  setup(t) {
    return (c, n) => (s(), o("div", Do, [
      c.$slots.header ? (s(), o("div", Lo, [
        Pe(c.$slots, "header", {}, void 0, !0)
      ])) : r("", !0),
      c.$slots.search ? (s(), o("div", zo, [
        Pe(c.$slots, "search", {}, void 0, !0)
      ])) : r("", !0),
      e("div", Uo, [
        Pe(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (s(), o("div", Oo, [
        Pe(c.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), se = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [i, u] of c)
    n[i] = u;
  return n;
}, nt = /* @__PURE__ */ se(No, [["__scopeId", "data-v-21565df9"]]), Ao = {
  key: 0,
  class: "panel-title-prefix"
}, Bo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Fo = /* @__PURE__ */ te({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, n) => (s(), T(Ns(`h${t.level}`), {
      class: fe(["panel-title", t.variant])
    }, {
      default: l(() => [
        t.showPrefix ? (s(), o("span", Ao, a(t.prefix), 1)) : (s(), o("span", Bo)),
        Pe(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Vo = /* @__PURE__ */ se(Fo, [["__scopeId", "data-v-c3875efc"]]), Wo = ["title"], Go = ["width", "height"], jo = /* @__PURE__ */ te({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (s(), o("button", {
      class: "info-button",
      title: t.title,
      onClick: n[0] || (n[0] = (i) => c.$emit("click"))
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
      ])], 8, Go))
    ], 8, Wo));
  }
}), so = /* @__PURE__ */ se(jo, [["__scopeId", "data-v-6fc7f16d"]]), Ko = { class: "header-left" }, Ho = {
  key: 0,
  class: "header-actions"
}, qo = /* @__PURE__ */ te({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: fe(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Ko, [
        _(Vo, { "show-prefix": t.showPrefix }, {
          default: l(() => [
            h(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), T(so, {
          key: 0,
          onClick: n[0] || (n[0] = (i) => c.$emit("info-click"))
        })) : r("", !0)
      ]),
      c.$slots.actions ? (s(), o("div", Ho, [
        Pe(c.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), at = /* @__PURE__ */ se(qo, [["__scopeId", "data-v-55a62cd6"]]), Yo = {
  key: 0,
  class: "section-title-count"
}, Jo = {
  key: 1,
  class: "section-title-icon"
}, Xo = /* @__PURE__ */ te({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (s(), T(Ns(`h${t.level}`), {
      class: fe(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, {
      default: l(() => [
        Pe(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Yo, "(" + a(t.count) + ")", 1)) : r("", !0),
        t.clickable ? (s(), o("span", Jo, a(t.expanded ? "▼" : "▸"), 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ct = /* @__PURE__ */ se(Xo, [["__scopeId", "data-v-559361eb"]]), Qo = { class: "status-grid" }, Zo = { class: "status-grid__columns" }, en = { class: "status-grid__column" }, tn = { class: "status-grid__title" }, sn = { class: "status-grid__column status-grid__column--right" }, on = { class: "status-grid__title" }, nn = {
  key: 0,
  class: "status-grid__footer"
}, an = /* @__PURE__ */ te({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", Qo, [
      e("div", Zo, [
        e("div", en, [
          e("h4", tn, a(t.leftTitle), 1),
          Pe(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", sn, [
          e("h4", on, a(t.rightTitle), 1),
          Pe(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (s(), o("div", nn, [
        Pe(c.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), ln = /* @__PURE__ */ se(an, [["__scopeId", "data-v-73b7ba3f"]]), rn = {
  key: 0,
  class: "status-item__icon"
}, dn = {
  key: 1,
  class: "status-item__count"
}, cn = { class: "status-item__label" }, un = /* @__PURE__ */ te({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const c = t, n = L(() => `status-item--${c.variant}`);
    return (i, u) => (s(), o("div", {
      class: fe(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", rn, a(t.icon), 1)) : r("", !0),
      t.count !== void 0 ? (s(), o("span", dn, a(t.count), 1)) : r("", !0),
      e("span", cn, a(t.label), 1)
    ], 2));
  }
}), Et = /* @__PURE__ */ se(un, [["__scopeId", "data-v-6f929183"]]), mn = { class: "issue-card__header" }, vn = { class: "issue-card__icon" }, fn = { class: "issue-card__title" }, pn = {
  key: 0,
  class: "issue-card__content"
}, gn = {
  key: 0,
  class: "issue-card__description"
}, hn = {
  key: 1,
  class: "issue-card__items"
}, yn = {
  key: 2,
  class: "issue-card__actions"
}, wn = /* @__PURE__ */ te({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const c = t, n = L(() => `issue-card--${c.severity}`);
    return (i, u) => (s(), o("div", {
      class: fe(["issue-card", n.value])
    }, [
      e("div", mn, [
        e("span", vn, a(t.icon), 1),
        e("h4", fn, a(t.title), 1)
      ]),
      i.$slots.default || t.description ? (s(), o("div", pn, [
        t.description ? (s(), o("p", gn, a(t.description), 1)) : r("", !0),
        Pe(i.$slots, "default", {}, void 0, !0)
      ])) : r("", !0),
      t.items && t.items.length ? (s(), o("div", hn, [
        (s(!0), o(W, null, ae(t.items, (g, m) => (s(), o("div", {
          key: m,
          class: "issue-card__item"
        }, [
          u[0] || (u[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(g), 1)
        ]))), 128))
      ])) : r("", !0),
      i.$slots.actions ? (s(), o("div", yn, [
        Pe(i.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), ht = /* @__PURE__ */ se(wn, [["__scopeId", "data-v-df6aa348"]]), kn = ["type", "disabled"], bn = {
  key: 0,
  class: "spinner"
}, _n = /* @__PURE__ */ te({
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
    return (c, n) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: fe(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", bn)) : r("", !0),
      t.loading ? r("", !0) : Pe(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, kn));
  }
}), Q = /* @__PURE__ */ se(_n, [["__scopeId", "data-v-772abe47"]]), $n = { class: "empty-state" }, Cn = {
  key: 0,
  class: "empty-icon"
}, xn = { class: "empty-message" }, Sn = /* @__PURE__ */ te({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, n) => (s(), o("div", $n, [
      t.icon ? (s(), o("div", Cn, a(t.icon), 1)) : r("", !0),
      e("p", xn, a(t.message), 1),
      t.actionLabel ? (s(), T(Q, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => c.$emit("action"))
      }, {
        default: l(() => [
          h(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : r("", !0)
    ]));
  }
}), _t = /* @__PURE__ */ se(Sn, [["__scopeId", "data-v-4466284f"]]), In = /* @__PURE__ */ te({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: fe(["detail-label"]),
      style: Lt({ minWidth: t.minWidth })
    }, [
      Pe(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), ys = /* @__PURE__ */ se(In, [["__scopeId", "data-v-75e9eeb8"]]), En = /* @__PURE__ */ te({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: fe(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      Pe(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ls = /* @__PURE__ */ se(En, [["__scopeId", "data-v-2f186e4c"]]), Tn = { class: "detail-row" }, Pn = /* @__PURE__ */ te({
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
    return (c, n) => (s(), o("div", Tn, [
      _(ys, { "min-width": t.labelMinWidth }, {
        default: l(() => [
          h(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), T(Ls, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: l(() => [
          h(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Pe(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Ge = /* @__PURE__ */ se(Pn, [["__scopeId", "data-v-ef15664a"]]), Rn = { class: "modal-header" }, Mn = { class: "modal-body" }, Dn = { class: "status-section" }, Ln = {
  key: 0,
  class: "status-section"
}, zn = { class: "section-header-row" }, Un = {
  key: 0,
  class: "workflow-group"
}, On = { class: "workflow-group-header" }, Nn = { class: "workflow-group-title" }, An = { class: "workflow-list" }, Bn = { class: "workflow-name" }, Fn = { class: "workflow-issue" }, Vn = {
  key: 1,
  class: "workflow-group"
}, Wn = { class: "workflow-group-header" }, Gn = { class: "workflow-group-title" }, jn = { class: "workflow-list" }, Kn = { class: "workflow-name" }, Hn = { class: "workflow-issue" }, qn = {
  key: 2,
  class: "workflow-group"
}, Yn = { class: "workflow-group-header" }, Jn = { class: "workflow-group-title" }, Xn = { class: "workflow-list" }, Qn = { class: "workflow-name" }, Zn = {
  key: 3,
  class: "workflow-group"
}, ea = { class: "workflow-group-header" }, ta = { class: "workflow-group-title" }, sa = { class: "workflow-list" }, oa = { class: "workflow-name" }, na = {
  key: 4,
  class: "workflow-group"
}, aa = { class: "workflow-group-header" }, la = { class: "workflow-group-title" }, ia = { class: "workflow-list" }, ra = { class: "workflow-name" }, da = {
  key: 5,
  class: "workflow-group"
}, ca = { class: "workflow-group-title" }, ua = { class: "expand-icon" }, ma = {
  key: 0,
  class: "workflow-list"
}, va = { class: "workflow-name" }, fa = {
  key: 1,
  class: "status-section"
}, pa = {
  key: 0,
  class: "change-group"
}, ga = { class: "change-group-header" }, ha = { class: "change-group-title" }, ya = { class: "change-list" }, wa = { class: "node-name" }, ka = {
  key: 0,
  class: "dev-badge"
}, ba = {
  key: 1,
  class: "change-group"
}, _a = { class: "change-group-header" }, $a = { class: "change-group-title" }, Ca = { class: "change-list" }, xa = { class: "node-name" }, Sa = {
  key: 0,
  class: "dev-badge"
}, Ia = {
  key: 2,
  class: "change-group"
}, Ea = { class: "change-list" }, Ta = { class: "change-item" }, Pa = { class: "node-name" }, Ra = {
  key: 3,
  class: "change-group"
}, Ma = {
  key: 2,
  class: "status-section"
}, Da = { class: "section-header-row" }, La = {
  key: 0,
  class: "drift-item"
}, za = { class: "drift-list" }, Ua = {
  key: 0,
  class: "drift-list-more"
}, Oa = {
  key: 1,
  class: "drift-item"
}, Na = { class: "drift-list" }, Aa = {
  key: 0,
  class: "drift-list-more"
}, Ba = {
  key: 2,
  class: "drift-item"
}, Fa = { class: "drift-list" }, Va = { class: "version-actual" }, Wa = { class: "version-expected" }, Ga = {
  key: 0,
  class: "drift-list-more"
}, ja = {
  key: 3,
  class: "drift-item"
}, Ka = { class: "repair-action" }, Ha = {
  key: 3,
  class: "status-section"
}, qa = { class: "info-box" }, Ya = { class: "drift-list" }, Ja = {
  key: 0,
  class: "drift-list-more"
}, Xa = {
  key: 4,
  class: "status-section"
}, Qa = { class: "warning-box" }, Za = {
  key: 5,
  class: "empty-state-inline"
}, el = { class: "modal-actions" }, tl = /* @__PURE__ */ te({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(t) {
    const c = t, n = y(!1);
    Oe(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), ut(() => c.show, (b, f) => {
      console.log("StatusDetailModal show prop changed from", f, "to", b);
    }, { immediate: !0 });
    const i = L(() => {
      var b, f, C;
      return ((C = (f = (b = c.status) == null ? void 0 : b.workflows) == null ? void 0 : f.analyzed) == null ? void 0 : C.filter(
        (I) => I.status === "broken" && I.sync_state === "synced"
      )) || [];
    }), u = L(() => {
      var b, f, C;
      return ((C = (f = (b = c.status) == null ? void 0 : b.workflows) == null ? void 0 : f.analyzed) == null ? void 0 : C.filter(
        (I) => I.status === "broken" && I.sync_state !== "synced"
      )) || [];
    }), g = L(() => {
      var b, f, C;
      return ((C = (f = (b = c.status) == null ? void 0 : b.workflows) == null ? void 0 : f.synced) == null ? void 0 : C.filter((I) => {
        var R, A, E;
        const $ = (E = (A = (R = c.status) == null ? void 0 : R.workflows) == null ? void 0 : A.analyzed) == null ? void 0 : E.find((S) => S.name === I);
        return !$ || $.status !== "broken";
      })) || [];
    }), m = L(() => {
      var b, f, C, I, $;
      return (b = c.status) != null && b.workflows ? (((f = c.status.workflows.new) == null ? void 0 : f.length) ?? 0) > 0 || (((C = c.status.workflows.modified) == null ? void 0 : C.length) ?? 0) > 0 || (((I = c.status.workflows.deleted) == null ? void 0 : I.length) ?? 0) > 0 || ((($ = c.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), p = L(() => {
      var f, C, I;
      const b = (f = c.status) == null ? void 0 : f.git_changes;
      return b ? (((C = b.nodes_added) == null ? void 0 : C.length) ?? 0) > 0 || (((I = b.nodes_removed) == null ? void 0 : I.length) ?? 0) > 0 || b.workflow_changes || b.has_other_changes : !1;
    }), d = L(() => {
      var b, f, C, I, $, R;
      return !m.value && !p.value && ((f = (b = c.status) == null ? void 0 : b.comparison) == null ? void 0 : f.is_synced) && (((C = c.status) == null ? void 0 : C.missing_models_count) ?? 0) === 0 && (((R = ($ = (I = c.status) == null ? void 0 : I.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : R.length) ?? 0) === 0;
    }), v = L(() => {
      var f, C;
      const b = (C = (f = c.status) == null ? void 0 : f.git_changes) == null ? void 0 : C.workflow_changes;
      return b ? typeof b == "number" ? b : Object.keys(b).length : 0;
    });
    function w(b) {
      return typeof b == "string" ? b : b.name;
    }
    function k(b) {
      return typeof b == "object" && b.is_development === !0;
    }
    return (b, f) => {
      var C, I, $, R, A, E, S, Y, F, z, x, P, U, re, le, K, ee, q, O, N, M, ve;
      return s(), T(et, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: f[7] || (f[7] = (oe) => b.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: f[6] || (f[6] = Be(() => {
            }, ["stop"]))
          }, [
            e("div", Rn, [
              f[8] || (f[8] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: f[0] || (f[0] = (oe) => b.$emit("close"))
              }, "✕")
            ]),
            e("div", Mn, [
              e("div", Dn, [
                _(ct, { level: "4" }, {
                  default: l(() => [...f[9] || (f[9] = [
                    h("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                _(Ge, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              m.value ? (s(), o("div", Ln, [
                e("div", zn, [
                  _(ct, { level: "4" }, {
                    default: l(() => [...f[10] || (f[10] = [
                      h("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: f[1] || (f[1] = (oe) => b.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (s(), o("div", Un, [
                  e("div", On, [
                    f[11] || (f[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Nn, "BROKEN (COMMITTED) (" + a(i.value.length) + ")", 1)
                  ]),
                  e("div", An, [
                    (s(!0), o(W, null, ae(i.value, (oe) => (s(), o("div", {
                      key: oe.name,
                      class: "workflow-item"
                    }, [
                      e("span", Bn, a(oe.name), 1),
                      e("span", Fn, a(oe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                u.value.length ? (s(), o("div", Vn, [
                  e("div", Wn, [
                    f[12] || (f[12] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Gn, "BROKEN (UNCOMMITTED) (" + a(u.value.length) + ")", 1)
                  ]),
                  e("div", jn, [
                    (s(!0), o(W, null, ae(u.value, (oe) => (s(), o("div", {
                      key: oe.name,
                      class: "workflow-item"
                    }, [
                      e("span", Kn, a(oe.name), 1),
                      e("span", Hn, a(oe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (I = (C = t.status.workflows) == null ? void 0 : C.new) != null && I.length ? (s(), o("div", qn, [
                  e("div", Yn, [
                    f[13] || (f[13] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Jn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Xn, [
                    (s(!0), o(W, null, ae(t.status.workflows.new, (oe) => (s(), o("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", Qn, a(oe), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (R = ($ = t.status.workflows) == null ? void 0 : $.modified) != null && R.length ? (s(), o("div", Zn, [
                  e("div", ea, [
                    f[14] || (f[14] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", ta, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", sa, [
                    (s(!0), o(W, null, ae(t.status.workflows.modified, (oe) => (s(), o("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", oa, a(oe), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (E = (A = t.status.workflows) == null ? void 0 : A.deleted) != null && E.length ? (s(), o("div", na, [
                  e("div", aa, [
                    f[15] || (f[15] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", la, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", ia, [
                    (s(!0), o(W, null, ae(t.status.workflows.deleted, (oe) => (s(), o("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", ra, a(oe), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                g.value.length ? (s(), o("div", da, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: f[2] || (f[2] = (oe) => n.value = !n.value)
                  }, [
                    f[16] || (f[16] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", ca, "SYNCED (" + a(g.value.length) + ")", 1),
                    e("span", ua, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", ma, [
                    (s(!0), o(W, null, ae(g.value, (oe) => (s(), o("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", va, a(oe), 1)
                    ]))), 128))
                  ])) : r("", !0)
                ])) : r("", !0)
              ])) : r("", !0),
              p.value ? (s(), o("div", fa, [
                _(ct, { level: "4" }, {
                  default: l(() => [...f[17] || (f[17] = [
                    h("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (Y = (S = t.status.git_changes) == null ? void 0 : S.nodes_added) != null && Y.length ? (s(), o("div", pa, [
                  e("div", ga, [
                    f[18] || (f[18] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", ha, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", ya, [
                    (s(!0), o(W, null, ae(t.status.git_changes.nodes_added, (oe) => (s(), o("div", {
                      key: w(oe),
                      class: "change-item"
                    }, [
                      e("span", wa, a(w(oe)), 1),
                      k(oe) ? (s(), o("span", ka, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (z = (F = t.status.git_changes) == null ? void 0 : F.nodes_removed) != null && z.length ? (s(), o("div", ba, [
                  e("div", _a, [
                    f[19] || (f[19] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", $a, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Ca, [
                    (s(!0), o(W, null, ae(t.status.git_changes.nodes_removed, (oe) => (s(), o("div", {
                      key: w(oe),
                      class: "change-item"
                    }, [
                      e("span", xa, a(w(oe)), 1),
                      k(oe) ? (s(), o("span", Sa, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (x = t.status.git_changes) != null && x.workflow_changes ? (s(), o("div", Ia, [
                  f[20] || (f[20] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Ea, [
                    e("div", Ta, [
                      e("span", Pa, a(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : r("", !0),
                (P = t.status.git_changes) != null && P.has_other_changes ? (s(), o("div", Ra, [...f[21] || (f[21] = [
                  e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  e("div", { class: "change-list" }, [
                    e("div", { class: "change-item" }, [
                      e("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : r("", !0)
              ])) : r("", !0),
              (U = t.status.comparison) != null && U.is_synced ? r("", !0) : (s(), o("div", Ma, [
                e("div", Da, [
                  _(ct, { level: "4" }, {
                    default: l(() => [...f[22] || (f[22] = [
                      h("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: f[3] || (f[3] = (oe) => b.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                f[26] || (f[26] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (le = (re = t.status.comparison) == null ? void 0 : re.missing_nodes) != null && le.length ? (s(), o("div", La, [
                  _(Ge, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", za, [
                    (s(!0), o(W, null, ae(t.status.comparison.missing_nodes.slice(0, 10), (oe) => (s(), o("div", {
                      key: oe,
                      class: "drift-list-item"
                    }, " - " + a(oe), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", Ua, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (ee = (K = t.status.comparison) == null ? void 0 : K.extra_nodes) != null && ee.length ? (s(), o("div", Oa, [
                  _(Ge, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Na, [
                    (s(!0), o(W, null, ae(t.status.comparison.extra_nodes.slice(0, 10), (oe) => (s(), o("div", {
                      key: oe,
                      class: "drift-list-item"
                    }, " - " + a(oe), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", Aa, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (O = (q = t.status.comparison) == null ? void 0 : q.version_mismatches) != null && O.length ? (s(), o("div", Ba, [
                  _(Ge, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  e("div", Fa, [
                    (s(!0), o(W, null, ae(t.status.comparison.version_mismatches.slice(0, 10), (oe) => (s(), o("div", {
                      key: oe.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      h(a(oe.name) + ": ", 1),
                      e("span", Va, a(oe.actual), 1),
                      f[23] || (f[23] = h(" → ", -1)),
                      e("span", Wa, a(oe.expected), 1)
                    ]))), 128)),
                    t.status.comparison.version_mismatches.length > 10 ? (s(), o("div", Ga, " ... and " + a(t.status.comparison.version_mismatches.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                ((N = t.status.comparison) == null ? void 0 : N.packages_in_sync) === !1 ? (s(), o("div", ja, [
                  _(Ge, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : r("", !0),
                e("div", Ka, [
                  _(Q, {
                    variant: "warning",
                    loading: t.isRepairing,
                    onClick: f[4] || (f[4] = (oe) => b.$emit("repair"))
                  }, {
                    default: l(() => [...f[24] || (f[24] = [
                      h(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  f[25] || (f[25] = e("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ve = (M = t.status.comparison) == null ? void 0 : M.disabled_nodes) != null && ve.length ? (s(), o("div", Ha, [
                _(ct, { level: "4" }, {
                  default: l(() => [...f[27] || (f[27] = [
                    h("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", qa, [
                  f[28] || (f[28] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Ya, [
                  (s(!0), o(W, null, ae(t.status.comparison.disabled_nodes.slice(0, 10), (oe) => (s(), o("div", {
                    key: oe,
                    class: "drift-list-item"
                  }, " • " + a(oe), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", Ja, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : r("", !0)
                ])
              ])) : r("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", Xa, [
                _(ct, { level: "4" }, {
                  default: l(() => [...f[29] || (f[29] = [
                    h("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Qa, [
                  f[30] || (f[30] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                f[31] || (f[31] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : r("", !0),
              d.value ? (s(), o("div", Za, [...f[32] || (f[32] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : r("", !0)
            ]),
            e("div", el, [
              _(Q, {
                variant: "secondary",
                onClick: f[5] || (f[5] = (oe) => b.$emit("close"))
              }, {
                default: l(() => [...f[33] || (f[33] = [
                  h(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : r("", !0)
      ]);
    };
  }
}), sl = /* @__PURE__ */ se(tl, [["__scopeId", "data-v-e2b37122"]]), ol = { class: "health-section-header" }, nl = { class: "suggestions-content" }, al = { class: "suggestions-text" }, ll = { style: { "margin-top": "var(--cg-space-3)" } }, il = {
  key: 1,
  class: "no-issues-text"
}, rl = /* @__PURE__ */ te({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(t, { expose: c, emit: n }) {
    const i = t, u = y(!1), g = y(!1);
    function m() {
      u.value = !0;
    }
    function p() {
      u.value = !1, v("view-workflows");
    }
    function d() {
      u.value = !1, v("view-nodes");
    }
    const v = n, w = y(!1), k = y(!1);
    function b() {
      k.value = !0, v("repair-environment");
    }
    function f() {
      k.value = !1;
    }
    function C() {
      u.value = !1;
    }
    const I = L(() => {
      const q = i.status.workflows.analyzed || [], O = q.filter(
        (N) => N.unresolved_models_count > 0 || N.ambiguous_models_count > 0
      );
      return O.length === 0 && i.status.missing_models_count > 0 ? q.filter((N) => N.sync_state === "synced") : O;
    });
    function $() {
      const q = I.value;
      q.length !== 0 && (w.value = !0, v("repair-missing-models", q.map((O) => O.name)));
    }
    function R() {
      w.value = !1;
    }
    c({ resetRepairingState: R, resetRepairingEnvironmentState: f, closeDetailModal: C });
    const A = L(() => i.status.workflows.new.length > 0 || i.status.workflows.modified.length > 0 || i.status.workflows.deleted.length > 0), E = L(() => i.status.has_changes), S = L(() => {
      const q = i.status.git_changes;
      return q.nodes_added.length > 0 || q.nodes_removed.length > 0 || q.workflow_changes;
    }), Y = L(() => i.status.has_changes || A.value), F = L(() => Object.keys(i.status.git_changes.workflow_changes_detail).length), z = L(() => i.status.git_changes.has_other_changes), x = L(() => {
      var q;
      return ((q = i.status.workflows.analyzed) == null ? void 0 : q.filter((O) => O.status === "broken")) || [];
    }), P = L(() => {
      var q;
      return ((q = i.status.workflows.analyzed) == null ? void 0 : q.filter(
        (O) => O.has_path_sync_issues && !O.has_issues
      )) || [];
    }), U = L(() => x.value.length > 0), re = L(() => U.value || P.value.length > 0 || i.status.missing_models_count > 0 || !i.status.comparison.is_synced || i.status.has_legacy_manager), le = L(() => {
      const q = [];
      return i.status.workflows.new.length > 0 && q.push(`${i.status.workflows.new.length} new`), i.status.workflows.modified.length > 0 && q.push(`${i.status.workflows.modified.length} modified`), i.status.workflows.deleted.length > 0 && q.push(`${i.status.workflows.deleted.length} deleted`), q.length > 0 ? `${q.join(", ")} workflow${q.length === 1 && !q[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), K = L(() => {
      var N, M;
      const q = [], O = i.status.comparison;
      return (N = O.missing_nodes) != null && N.length && q.push(`${O.missing_nodes.length} missing node${O.missing_nodes.length === 1 ? "" : "s"}`), (M = O.extra_nodes) != null && M.length && q.push(`${O.extra_nodes.length} untracked node${O.extra_nodes.length === 1 ? "" : "s"}`), q.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${q.join(" and ")}.`;
    }), ee = L(() => {
      var N, M;
      const q = [], O = i.status.comparison;
      return (N = O.extra_nodes) != null && N.length && (O.extra_nodes.slice(0, 3).forEach((ve) => {
        q.push(`Untracked: ${ve}`);
      }), O.extra_nodes.length > 3 && q.push(`...and ${O.extra_nodes.length - 3} more untracked`)), (M = O.missing_nodes) != null && M.length && (O.missing_nodes.slice(0, 3).forEach((ve) => {
        q.push(`Missing: ${ve}`);
      }), O.missing_nodes.length > 3 && q.push(`...and ${O.missing_nodes.length - 3} more missing`)), q;
    });
    return (q, O) => (s(), o(W, null, [
      _(nt, null, {
        header: l(() => [
          _(at, { title: "STATUS" })
        ]),
        content: l(() => [
          i.setupState === "no_workspace" ? (s(), T(ht, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: l(() => [
              _(Q, {
                variant: "primary",
                size: "sm",
                onClick: O[0] || (O[0] = (N) => q.$emit("start-setup"))
              }, {
                default: l(() => [...O[13] || (O[13] = [
                  h(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "unmanaged" ? (s(), T(ht, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: l(() => [
              _(Q, {
                variant: "primary",
                size: "sm",
                onClick: O[1] || (O[1] = (N) => q.$emit("view-environments"))
              }, {
                default: l(() => [...O[14] || (O[14] = [
                  h(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "empty_workspace" ? (s(), T(ht, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: l(() => [
              _(Q, {
                variant: "primary",
                size: "sm",
                onClick: O[2] || (O[2] = (N) => q.$emit("create-environment"))
              }, {
                default: l(() => [...O[15] || (O[15] = [
                  h(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: O[4] || (O[4] = (N) => g.value = !0),
            onMouseleave: O[5] || (O[5] = (N) => g.value = !1)
          }, [
            e("div", ol, [
              _(ct, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: l(() => [...O[16] || (O[16] = [
                  h(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              _(Po, { name: "fade" }, {
                default: l(() => [
                  g.value ? (s(), T(Q, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: m
                  }, {
                    default: l(() => [...O[17] || (O[17] = [
                      h(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : r("", !0)
                ]),
                _: 1
              })
            ]),
            _(ln, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Kt({
              left: l(() => [
                t.status.workflows.new.length ? (s(), T(Et, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.modified.length ? (s(), T(Et, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.deleted.length ? (s(), T(Et, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : r("", !0),
                _(Et, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: A.value
                }, null, 8, ["count", "separator"])
              ]),
              right: l(() => [
                t.status.git_changes.nodes_added.length ? (s(), T(Et, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), T(Et, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.workflow_changes ? (s(), T(Et, {
                  key: 2,
                  icon: "●",
                  count: F.value,
                  label: F.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : r("", !0),
                z.value ? (s(), T(Et, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : r("", !0),
                E.value && !S.value && !z.value ? (s(), T(Et, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : r("", !0),
                E.value ? r("", !0) : (s(), T(Et, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              Y.value ? {
                name: "footer",
                fn: l(() => [
                  O[19] || (O[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", nl, [
                    e("span", al, a(le.value), 1),
                    _(Q, {
                      variant: "primary",
                      size: "sm",
                      onClick: O[3] || (O[3] = (N) => q.$emit("commit-changes"))
                    }, {
                      default: l(() => [...O[18] || (O[18] = [
                        h(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          t.status.is_detached_head ? (s(), T(ht, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: l(() => [
              _(Q, {
                variant: "primary",
                size: "sm",
                onClick: O[6] || (O[6] = (N) => q.$emit("create-branch"))
              }, {
                default: l(() => [...O[20] || (O[20] = [
                  h(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r("", !0),
          e("div", ll, [
            _(ct, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: l(() => [...O[21] || (O[21] = [
                h(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            re.value ? (s(), o(W, { key: 0 }, [
              x.value.length > 0 ? (s(), T(ht, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${x.value.length} workflow${x.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: x.value.map((N) => `${N.name} — ${N.issue_summary}`)
              }, {
                actions: l(() => [
                  _(Q, {
                    variant: "primary",
                    size: "sm",
                    onClick: O[7] || (O[7] = (N) => q.$emit("view-workflows"))
                  }, {
                    default: l(() => [...O[22] || (O[22] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : r("", !0),
              P.value.length > 0 ? (s(), T(ht, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${P.value.length} workflow${P.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: P.value.map((N) => `${N.name} — ${N.models_needing_path_sync_count} model path${N.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: l(() => [
                  _(Q, {
                    variant: "primary",
                    size: "sm",
                    onClick: O[8] || (O[8] = (N) => q.$emit("view-workflows"))
                  }, {
                    default: l(() => [...O[23] || (O[23] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : r("", !0),
              t.status.missing_models_count > 0 && !U.value ? (s(), T(ht, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: l(() => [
                  _(Q, {
                    variant: "primary",
                    size: "sm",
                    disabled: w.value,
                    onClick: $
                  }, {
                    default: l(() => [
                      h(a(w.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  _(Q, {
                    variant: "secondary",
                    size: "sm",
                    onClick: O[9] || (O[9] = (N) => q.$emit("view-workflows"))
                  }, {
                    default: l(() => [...O[24] || (O[24] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : r("", !0),
              t.status.comparison.is_synced ? r("", !0) : (s(), T(ht, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: K.value,
                items: ee.value
              }, {
                actions: l(() => [
                  _(Q, {
                    variant: "secondary",
                    size: "sm",
                    onClick: m
                  }, {
                    default: l(() => [...O[25] || (O[25] = [
                      h(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  _(Q, {
                    variant: "primary",
                    size: "sm",
                    onClick: O[10] || (O[10] = (N) => q.$emit("view-nodes"))
                  }, {
                    default: l(() => [...O[26] || (O[26] = [
                      h(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), T(ht, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: l(() => [
                  _(Q, {
                    variant: "primary",
                    size: "sm",
                    onClick: O[11] || (O[11] = (N) => q.$emit("view-nodes"))
                  }, {
                    default: l(() => [...O[27] || (O[27] = [
                      h(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : r("", !0)
            ], 64)) : Y.value ? (s(), o("span", il, "No issues")) : (s(), T(_t, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      _(sl, {
        show: u.value,
        status: t.status,
        "is-repairing": k.value,
        onClose: O[12] || (O[12] = (N) => u.value = !1),
        onNavigateWorkflows: p,
        onNavigateNodes: d,
        onRepair: b
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), dl = /* @__PURE__ */ se(rl, [["__scopeId", "data-v-55fcd77f"]]), cl = ["type", "value", "placeholder", "disabled"], ul = /* @__PURE__ */ te({
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
  setup(t, { expose: c, emit: n }) {
    const i = t, u = n, g = y(null);
    function m(p) {
      const d = p.target.value;
      u("update:modelValue", d);
    }
    return Oe(() => {
      i.autoFocus && g.value && g.value.focus();
    }), c({
      focus: () => {
        var p;
        return (p = g.value) == null ? void 0 : p.focus();
      },
      blur: () => {
        var p;
        return (p = g.value) == null ? void 0 : p.blur();
      }
    }), (p, d) => (s(), o("input", {
      ref_key: "inputRef",
      ref: g,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: fe(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: m,
      onKeyup: [
        d[0] || (d[0] = wt((v) => p.$emit("enter"), ["enter"])),
        d[1] || (d[1] = wt((v) => p.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (v) => p.$emit("focus")),
      onBlur: d[3] || (d[3] = (v) => p.$emit("blur"))
    }, null, 42, cl));
  }
}), bs = /* @__PURE__ */ se(ul, [["__scopeId", "data-v-0380d08f"]]), ml = { class: "branch-create-form" }, vl = { class: "form-actions" }, fl = /* @__PURE__ */ te({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, i = y(""), u = L(() => {
      const p = i.value.trim();
      return p.length > 0 && !p.startsWith("-") && !p.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(p);
    });
    function g() {
      u.value && (n("create", i.value.trim()), i.value = "");
    }
    function m() {
      i.value = "", n("cancel");
    }
    return (p, d) => (s(), o("div", ml, [
      _(bs, {
        modelValue: i.value,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => i.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: g,
        onEscape: m
      }, null, 8, ["modelValue"]),
      e("div", vl, [
        _(Q, {
          variant: "primary",
          size: "sm",
          disabled: !u.value,
          onClick: g
        }, {
          default: l(() => [...d[1] || (d[1] = [
            h(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        _(Q, {
          variant: "secondary",
          size: "sm",
          onClick: m
        }, {
          default: l(() => [...d[2] || (d[2] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), pl = /* @__PURE__ */ se(fl, [["__scopeId", "data-v-7c500394"]]), gl = { class: "branch-list-item__indicator" }, hl = { class: "branch-list-item__name" }, yl = {
  key: 0,
  class: "branch-list-item__actions"
}, wl = {
  key: 0,
  class: "branch-list-item__current-label"
}, kl = /* @__PURE__ */ te({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: fe(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, [
      e("span", gl, a(t.isCurrent ? "●" : "○"), 1),
      e("span", hl, a(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (s(), o("div", yl, [
        Pe(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", wl, " current ")) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), bl = /* @__PURE__ */ se(kl, [["__scopeId", "data-v-c6581a24"]]), _l = {
  key: 2,
  class: "branch-list"
}, $l = /* @__PURE__ */ te({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: c }) {
    const n = c, i = y(!1);
    function u(m) {
      n("create", m), g();
    }
    function g() {
      i.value = !1;
    }
    return (m, p) => (s(), T(nt, null, {
      header: l(() => [
        _(at, { title: "BRANCHES" }, {
          actions: l(() => [
            i.value ? r("", !0) : (s(), T(Q, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: p[0] || (p[0] = (d) => i.value = !0)
            }, {
              default: l(() => [...p[1] || (p[1] = [
                h(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: l(() => [
        i.value ? (s(), T(pl, {
          key: 0,
          onCreate: u,
          onCancel: g
        })) : r("", !0),
        t.branches.length === 0 ? (s(), T(_t, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", _l, [
          (s(!0), o(W, null, ae(t.branches, (d) => (s(), T(bl, {
            key: d.name,
            "branch-name": d.name,
            "is-current": d.is_current
          }, {
            actions: l(() => [
              d.is_current ? r("", !0) : (s(), T(Q, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (v) => m.$emit("delete", d.name)
              }, {
                default: l(() => [...p[2] || (p[2] = [
                  h(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              d.is_current ? r("", !0) : (s(), T(Q, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (v) => m.$emit("switch", d.name)
              }, {
                default: l(() => [...p[3] || (p[3] = [
                  h(" Switch ", -1)
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
}), Cl = /* @__PURE__ */ se($l, [["__scopeId", "data-v-86784ddd"]]), xl = { class: "commit-list" }, Sl = /* @__PURE__ */ te({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (s(), o("div", xl, [
      Pe(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Il = /* @__PURE__ */ se(Sl, [["__scopeId", "data-v-8c5ee761"]]), El = { class: "commit-hash" }, Tl = /* @__PURE__ */ te({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = L(() => c.hash.slice(0, c.length));
    return (i, u) => (s(), o("span", El, a(n.value), 1));
  }
}), oo = /* @__PURE__ */ se(Tl, [["__scopeId", "data-v-7c333cc6"]]), Pl = { class: "commit-message" }, Rl = { class: "commit-date" }, Ml = /* @__PURE__ */ te({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, i = c;
    function u() {
      n.clickable && i("click");
    }
    return (g, m) => (s(), o("div", {
      class: fe(["commit-item", { clickable: t.clickable }]),
      onClick: u
    }, [
      _(oo, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Pl, a(t.message), 1),
      e("span", Rl, a(t.relativeDate), 1),
      g.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: m[0] || (m[0] = Be(() => {
        }, ["stop"]))
      }, [
        Pe(g.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), Dl = /* @__PURE__ */ se(Ml, [["__scopeId", "data-v-dd7c621b"]]), Ll = /* @__PURE__ */ te({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (s(), T(nt, null, {
      header: l(() => [
        _(at, { title: "HISTORY" })
      ]),
      content: l(() => [
        t.commits.length === 0 ? (s(), T(_t, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), T(Il, { key: 1 }, {
          default: l(() => [
            (s(!0), o(W, null, ae(t.commits, (i) => (s(), T(Dl, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (u) => c.$emit("select", i)
            }, {
              actions: l(() => [
                _(Q, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (u) => c.$emit("checkout", i),
                  title: "Checkout this commit"
                }, {
                  default: l(() => [...n[0] || (n[0] = [
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
}), zl = /* @__PURE__ */ se(Ll, [["__scopeId", "data-v-981c3c64"]]), M5 = vs({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const D5 = [
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
  ...Array(12).fill(null).map((t, c) => ({
    name: `synced-workflow-${c + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + c,
    model_count: 1 + c % 3,
    sync_state: "synced"
  }))
], L5 = {
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
}, Ul = [
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
], z5 = [
  ...Ul,
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
function Xt() {
  return !1;
}
function Fe() {
  const t = y(!1), c = y(null);
  async function n(V, de) {
    var We;
    if (!((We = window.app) != null && We.api))
      throw new Error("ComfyUI API not available");
    const ke = await window.app.api.fetchApi(V, de);
    if (!ke.ok) {
      const _e = await ke.json().catch(() => ({}));
      throw new Error(_e.error || _e.message || `Request failed: ${ke.status}`);
    }
    return ke.json();
  }
  async function i(V = !1) {
    return n(V ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function u(V, de = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: V, allow_issues: de })
    });
  }
  async function g(V = 10, de = 0) {
    return n(`/v2/comfygit/log?limit=${V}&offset=${de}`);
  }
  async function m(V) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: V })
    });
  }
  async function p() {
    return n("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function d() {
    return n("/v2/comfygit/deploy/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function v(V) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: V, force: !0 })
    });
  }
  async function w() {
    return n("/v2/comfygit/branches");
  }
  async function k(V) {
    return n(`/v2/comfygit/commit/${V}`);
  }
  async function b(V, de = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: V, force: de })
    });
  }
  async function f(V, de = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: V, start_point: de })
    });
  }
  async function C(V, de = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: V, force: de })
    });
  }
  async function I(V, de = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(V)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: de })
    });
  }
  async function $() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const V = await i();
        return [{
          name: V.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + V.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: V.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: V.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function R(V, de) {
    const ke = { target_env: V };
    return de && (ke.workspace_path = de), n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ke)
    });
  }
  async function A() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function E(V) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function S() {
    return n("/v2/workspace/environments/create_status");
  }
  async function Y(V = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${V}`);
  }
  async function F(V) {
    return n(`/v2/workspace/environments/${V}`, {
      method: "DELETE"
    });
  }
  async function z(V = !1) {
    try {
      return n(V ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const de = await i(V), ke = [];
      return de.workflows.new.forEach((We) => {
        ke.push({ name: We, status: "new", missing_nodes: 0, missing_models: 0, path: We });
      }), de.workflows.modified.forEach((We) => {
        ke.push({ name: We, status: "modified", missing_nodes: 0, missing_models: 0, path: We });
      }), de.workflows.synced.forEach((We) => {
        ke.push({ name: We, status: "synced", missing_nodes: 0, missing_models: 0, path: We });
      }), ke;
    }
  }
  async function x(V) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(V)}/details`);
  }
  async function P(V) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(V)}/resolve`, {
      method: "POST"
    });
  }
  async function U(V, de, ke) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(V)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: de, install_models: ke })
    });
  }
  async function re(V, de, ke) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(V)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: de, importance: ke })
    });
  }
  async function le() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function K() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function ee(V) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(V)}`);
  }
  async function q(V) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: V })
    });
  }
  async function O(V, de) {
    return n(`/v2/workspace/models/${V}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: de })
    });
  }
  async function N(V, de) {
    return n(`/v2/workspace/models/${V}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: de })
    });
  }
  async function M(V) {
    return n(`/v2/workspace/models/${V}`, {
      method: "DELETE"
    });
  }
  async function ve(V) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function oe() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function be() {
    return n("/v2/workspace/models/directory");
  }
  async function Ce(V) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: V })
    });
  }
  async function Le(V) {
    try {
      const de = V ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(V)}` : "/v2/comfygit/config";
      return n(de);
    } catch {
      return {
        workspace_path: "~/comfygit",
        models_path: "~/comfygit/models",
        auto_sync_models: !0,
        confirm_destructive: !0,
        comfyui_extra_args: []
      };
    }
  }
  async function Ue(V, de) {
    const ke = de ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(de)}` : "/v2/comfygit/config";
    return n(ke, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function me(V, de) {
    try {
      const ke = new URLSearchParams();
      return V && ke.append("level", V), de && ke.append("lines", de.toString()), n(`/v2/comfygit/debug/logs?${ke}`);
    } catch {
      return [];
    }
  }
  async function ge(V, de) {
    try {
      const ke = new URLSearchParams();
      return V && ke.append("level", V), de && ke.append("lines", de.toString()), n(`/v2/workspace/debug/logs?${ke}`);
    } catch {
      return [];
    }
  }
  async function Me() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function ce() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function X(V, de) {
    try {
      const ke = new URLSearchParams();
      return V && ke.append("level", V), de && ke.append("lines", de.toString()), n(`/v2/workspace/debug/orchestrator-logs?${ke}`);
    } catch {
      return [];
    }
  }
  async function De() {
    return n("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function pe(V) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: V })
    });
  }
  async function Je() {
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
  async function tt(V) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(V)}/track-dev`, {
      method: "POST"
    });
  }
  async function st(V) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(V)}/install`, {
      method: "POST"
    });
  }
  async function Te(V) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(V)}/update`, {
      method: "POST"
    });
  }
  async function Xe(V) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(V)}`, {
      method: "DELETE"
    });
  }
  async function qe() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Qe(V, de) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: V, url: de })
    });
  }
  async function mt(V) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(V)}`, {
      method: "DELETE"
    });
  }
  async function $e(V, de, ke) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(V)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: de, push_url: ke })
    });
  }
  async function je(V, de) {
    const ke = {};
    return de && (ke["X-Git-Auth-Token"] = de), n(`/v2/comfygit/remotes/${encodeURIComponent(V)}/fetch`, {
      method: "POST",
      headers: ke
    });
  }
  async function it(V) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(V)}/status`);
    } catch {
      return null;
    }
  }
  async function Ye(V = "skip", de = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: V,
        remove_extra_nodes: de
      })
    });
  }
  async function ue(V, de) {
    const ke = de ? `/v2/comfygit/remotes/${encodeURIComponent(V)}/pull-preview?branch=${encodeURIComponent(de)}` : `/v2/comfygit/remotes/${encodeURIComponent(V)}/pull-preview`;
    return n(ke);
  }
  async function J(V, de = {}) {
    const ke = { "Content-Type": "application/json" };
    return de.authToken && (ke["X-Git-Auth-Token"] = de.authToken), n(`/v2/comfygit/remotes/${encodeURIComponent(V)}/pull`, {
      method: "POST",
      headers: ke,
      body: JSON.stringify({
        model_strategy: de.modelStrategy || "skip",
        force: de.force || !1,
        resolutions: de.resolutions
      })
    });
  }
  async function Z(V, de) {
    const ke = de ? `/v2/comfygit/remotes/${encodeURIComponent(V)}/push-preview?branch=${encodeURIComponent(de)}` : `/v2/comfygit/remotes/${encodeURIComponent(V)}/push-preview`;
    return n(ke);
  }
  async function D(V, de = {}) {
    const ke = { "Content-Type": "application/json" };
    return de.authToken && (ke["X-Git-Auth-Token"] = de.authToken), n(`/v2/comfygit/remotes/${encodeURIComponent(V)}/push`, {
      method: "POST",
      headers: ke,
      body: JSON.stringify({ force: de.force || !1 })
    });
  }
  async function G(V, de) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(V)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: de })
    });
  }
  async function ne(V) {
    const de = {
      success: 0,
      failed: []
    };
    for (const ke of V)
      try {
        await P(ke), de.success++;
      } catch (We) {
        de.failed.push({
          name: ke,
          error: We instanceof Error ? We.message : "Unknown error"
        });
      }
    return de;
  }
  async function xe(V) {
    var We;
    const de = new FormData();
    if (de.append("file", V), !((We = window.app) != null && We.api))
      throw new Error("ComfyUI API not available");
    const ke = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: de
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!ke.ok) {
      const _e = await ke.json().catch(() => ({}));
      throw new Error(_e.error || `Preview failed: ${ke.status}`);
    }
    return ke.json();
  }
  async function Ve(V) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(V)}`
    );
  }
  async function ft(V, de, ke, We) {
    var qs;
    const _e = new FormData();
    if (_e.append("file", V), _e.append("name", de), _e.append("model_strategy", ke), _e.append("torch_backend", We), !((qs = window.app) != null && qs.api))
      throw new Error("ComfyUI API not available");
    const ns = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: _e
    });
    if (!ns.ok) {
      const Ys = await ns.json().catch(() => ({}));
      throw new Error(Ys.message || Ys.error || `Import failed: ${ns.status}`);
    }
    return ns.json();
  }
  async function Ct() {
    return n("/v2/workspace/import/status");
  }
  async function rt(V) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: V })
    });
  }
  async function Ot(V, de, ke, We) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: V,
        name: de,
        model_strategy: ke,
        torch_backend: We
      })
    });
  }
  async function Nt() {
    return n("/v2/setup/status");
  }
  async function At(V) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function Ht() {
    return n("/v2/setup/initialize_status");
  }
  async function pt(V) {
    return n("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function Vt() {
    return n("/v2/comfygit/deploy/summary");
  }
  async function Bt() {
    return n("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function qt(V, de) {
    return n("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: V, save_key: de })
    });
  }
  async function ts() {
    return n("/v2/comfygit/deploy/runpod/volumes");
  }
  async function ss(V) {
    const de = V ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(V)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return n(de);
  }
  async function os(V) {
    return n("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function ie() {
    return n("/v2/comfygit/deploy/runpod/pods");
  }
  async function j(V) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(V)}`, {
      method: "DELETE"
    });
  }
  async function Ee(V) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(V)}/stop`, {
      method: "POST"
    });
  }
  async function Ze(V) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(V)}/start`, {
      method: "POST"
    });
  }
  async function gt(V) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(V)}/status`);
  }
  async function Rt(V) {
    return n("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: V })
    });
  }
  async function Mt(V = !1) {
    return n(V ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function xt() {
    return n("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function we() {
    return n("/v2/comfygit/deploy/custom/workers");
  }
  async function St(V) {
    return n("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function H(V) {
    return n(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(V)}`, {
      method: "DELETE"
    });
  }
  async function B(V) {
    return n("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function he() {
    return n("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function Ie(V) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/info`);
  }
  async function Ne(V) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances`);
  }
  async function Ke(V, de) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(de)
    });
  }
  async function lt(V, de) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances/${encodeURIComponent(de)}/start`, {
      method: "POST"
    });
  }
  async function It(V, de) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances/${encodeURIComponent(de)}/stop`, {
      method: "POST"
    });
  }
  async function Wt(V, de) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances/${encodeURIComponent(de)}`, {
      method: "DELETE"
    });
  }
  async function Gt(V) {
    return n("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: V })
    });
  }
  return {
    isLoading: t,
    error: c,
    getStatus: i,
    commit: u,
    getHistory: g,
    exportEnv: m,
    validateExport: p,
    validateDeploy: d,
    exportEnvWithForce: v,
    // Git Operations
    getBranches: w,
    getCommitDetail: k,
    checkout: b,
    createBranch: f,
    switchBranch: C,
    deleteBranch: I,
    // Environment Management
    getEnvironments: $,
    switchEnvironment: R,
    getSwitchProgress: A,
    createEnvironment: E,
    getCreateProgress: S,
    getComfyUIReleases: Y,
    deleteEnvironment: F,
    // Workflow Management
    getWorkflows: z,
    getWorkflowDetails: x,
    resolveWorkflow: P,
    installWorkflowDeps: U,
    setModelImportance: re,
    // Model Management
    getEnvironmentModels: le,
    getWorkspaceModels: K,
    getModelDetails: ee,
    openFileLocation: q,
    addModelSource: O,
    removeModelSource: N,
    deleteModel: M,
    downloadModel: ve,
    scanWorkspaceModels: oe,
    getModelsDirectory: be,
    setModelsDirectory: Ce,
    // Settings
    getConfig: Le,
    updateConfig: Ue,
    // Debug/Logs
    getEnvironmentLogs: me,
    getWorkspaceLogs: ge,
    getEnvironmentLogPath: Me,
    getWorkspaceLogPath: ce,
    getOrchestratorLogs: X,
    getOrchestratorLogPath: De,
    openFile: pe,
    // Node Management
    getNodes: Je,
    trackNodeAsDev: tt,
    installNode: st,
    updateNode: Te,
    uninstallNode: Xe,
    // Git Remotes
    getRemotes: qe,
    addRemote: Qe,
    removeRemote: mt,
    updateRemoteUrl: $e,
    fetchRemote: je,
    getRemoteSyncStatus: it,
    // Push/Pull
    getPullPreview: ue,
    pullFromRemote: J,
    getPushPreview: Z,
    pushToRemote: D,
    validateMerge: G,
    // Environment Sync
    syncEnvironmentManually: Ye,
    // Workflow Repair
    repairWorkflowModels: ne,
    // Import Operations
    previewTarballImport: xe,
    previewGitImport: rt,
    validateEnvironmentName: Ve,
    executeImport: ft,
    executeGitImport: Ot,
    getImportProgress: Ct,
    // First-Time Setup
    getSetupStatus: Nt,
    initializeWorkspace: At,
    getInitializeProgress: Ht,
    validatePath: pt,
    // Deploy Operations
    getDeploySummary: Vt,
    getDataCenters: Bt,
    testRunPodConnection: qt,
    getNetworkVolumes: ts,
    getRunPodGpuTypes: ss,
    deployToRunPod: os,
    getRunPodPods: ie,
    terminateRunPodPod: j,
    stopRunPodPod: Ee,
    startRunPodPod: Ze,
    getDeploymentStatus: gt,
    exportDeployPackage: Rt,
    getStoredRunPodKey: Mt,
    clearRunPodKey: xt,
    // Custom Worker Operations
    getCustomWorkers: we,
    addCustomWorker: St,
    removeCustomWorker: H,
    testWorkerConnection: B,
    scanForWorkers: he,
    getWorkerSystemInfo: Ie,
    getWorkerInstances: Ne,
    deployToWorker: Ke,
    startWorkerInstance: lt,
    stopWorkerInstance: It,
    terminateWorkerInstance: Wt,
    // Git Authentication
    testGitAuth: Gt
  };
}
async function as(t, c = {}, n = 5e3) {
  const i = new AbortController(), u = setTimeout(() => i.abort(), n);
  try {
    const g = await fetch(t, {
      ...c,
      signal: i.signal
    });
    return clearTimeout(u), g;
  } catch (g) {
    throw clearTimeout(u), g.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : g;
  }
}
function no() {
  const t = y(null);
  async function c() {
    try {
      const m = await as(
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
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const m = await as(
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
      const m = await as(
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
    if (!(await as(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function g() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await as(
      `http://127.0.0.1:${t.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: t,
    discoverControlPort: c,
    checkHealth: n,
    getStatus: i,
    restart: u,
    kill: g
  };
}
const Ol = { class: "base-modal-header" }, Nl = {
  key: 0,
  class: "base-modal-title"
}, Al = { class: "base-modal-body" }, Bl = {
  key: 0,
  class: "base-modal-loading"
}, Fl = {
  key: 1,
  class: "base-modal-error"
}, Vl = {
  key: 0,
  class: "base-modal-footer"
}, Wl = /* @__PURE__ */ te({
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
  setup(t, { emit: c }) {
    const n = t, i = c;
    function u() {
      n.closeOnOverlayClick && i("close");
    }
    function g(m) {
      m.key === "Escape" && n.showCloseButton && i("close");
    }
    return Oe(() => {
      document.addEventListener("keydown", g), document.body.style.overflow = "hidden";
    }), Cs(() => {
      document.removeEventListener("keydown", g), document.body.style.overflow = "";
    }), (m, p) => (s(), T(et, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: u
      }, [
        e("div", {
          class: fe(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: p[1] || (p[1] = Be(() => {
          }, ["stop"]))
        }, [
          e("div", Ol, [
            Pe(m.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", Nl, a(t.title), 1)) : r("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: p[0] || (p[0] = (d) => m.$emit("close"))
            }, [...p[2] || (p[2] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : r("", !0)
          ]),
          e("div", Al, [
            t.loading ? (s(), o("div", Bl, "Loading...")) : t.error ? (s(), o("div", Fl, a(t.error), 1)) : Pe(m.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          m.$slots.footer ? (s(), o("div", Vl, [
            Pe(m.$slots, "footer", {}, void 0, !0)
          ])) : r("", !0)
        ], 2)
      ])
    ]));
  }
}), He = /* @__PURE__ */ se(Wl, [["__scopeId", "data-v-8dab1081"]]), Gl = ["type", "disabled"], jl = {
  key: 0,
  class: "spinner"
}, Kl = /* @__PURE__ */ te({
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
    return (c, n) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: fe(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", jl)) : r("", !0),
      Pe(c.$slots, "default", {}, void 0, !0)
    ], 10, Gl));
  }
}), ye = /* @__PURE__ */ se(Kl, [["__scopeId", "data-v-f3452606"]]), Hl = {
  key: 0,
  class: "base-title-count"
}, ql = /* @__PURE__ */ te({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, n) => (s(), T(Ns(`h${t.level}`), {
      class: fe(["base-title", t.variant])
    }, {
      default: l(() => [
        Pe(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Hl, "(" + a(t.count) + ")", 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), cs = /* @__PURE__ */ se(ql, [["__scopeId", "data-v-5a01561d"]]), Yl = ["value", "disabled"], Jl = {
  key: 0,
  value: "",
  disabled: ""
}, Xl = ["value"], Ql = {
  key: 0,
  class: "base-select-error"
}, Zl = /* @__PURE__ */ te({
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
    function n(i) {
      return typeof i == "string" ? i : i.label;
    }
    return (i, u) => (s(), o("div", {
      class: fe(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: fe(["base-select", { error: !!t.error }]),
        onChange: u[0] || (u[0] = (g) => i.$emit("update:modelValue", g.target.value))
      }, [
        t.placeholder ? (s(), o("option", Jl, a(t.placeholder), 1)) : r("", !0),
        (s(!0), o(W, null, ae(t.options, (g) => (s(), o("option", {
          key: c(g),
          value: c(g)
        }, a(n(g)), 9, Xl))), 128))
      ], 42, Yl),
      t.error ? (s(), o("span", Ql, a(t.error), 1)) : r("", !0)
    ], 2));
  }
}), ei = /* @__PURE__ */ se(Zl, [["__scopeId", "data-v-7436d745"]]), ti = { class: "popover-header" }, si = { class: "popover-title" }, oi = { class: "popover-content" }, ni = {
  key: 0,
  class: "popover-actions"
}, ai = /* @__PURE__ */ te({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (s(), T(et, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Lt({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = Be(() => {
          }, ["stop"]))
        }, [
          e("div", ti, [
            e("h4", si, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", oi, [
            Pe(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (s(), o("div", ni, [
            Pe(c.$slots, "actions", {}, void 0, !0)
          ])) : r("", !0)
        ], 4)
      ])) : r("", !0)
    ]));
  }
}), $t = /* @__PURE__ */ se(ai, [["__scopeId", "data-v-42815ace"]]), li = { class: "detail-section" }, ii = {
  key: 0,
  class: "empty-message"
}, ri = { class: "model-header" }, di = { class: "model-name" }, ci = { class: "model-details" }, ui = { class: "model-row" }, mi = { class: "model-row" }, vi = { class: "label" }, fi = {
  key: 0,
  class: "model-row model-row-nodes"
}, pi = { class: "node-list" }, gi = ["onClick"], hi = {
  key: 1,
  class: "model-row"
}, yi = { class: "value" }, wi = {
  key: 2,
  class: "model-row"
}, ki = { class: "value error" }, bi = {
  key: 0,
  class: "model-actions"
}, _i = { class: "detail-section" }, $i = {
  key: 0,
  class: "empty-message"
}, Ci = { class: "node-name" }, xi = {
  key: 0,
  class: "node-version"
}, Si = /* @__PURE__ */ te({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getWorkflowDetails: u, setModelImportance: g, openFileLocation: m } = Fe(), p = y(null), d = y(!1), v = y(null), w = y(!1), k = y({}), b = y(!1), f = y(/* @__PURE__ */ new Set()), C = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function I(x) {
      switch (x) {
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
    function $(x) {
      switch (x) {
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
    function R(x) {
      if (!x.loaded_by || x.loaded_by.length === 0) return [];
      const P = x.hash || x.filename;
      return f.value.has(P) ? x.loaded_by : x.loaded_by.slice(0, 3);
    }
    function A(x) {
      return f.value.has(x);
    }
    function E(x) {
      f.value.has(x) ? f.value.delete(x) : f.value.add(x), f.value = new Set(f.value);
    }
    async function S() {
      d.value = !0, v.value = null;
      try {
        p.value = await u(n.workflowName);
      } catch (x) {
        v.value = x instanceof Error ? x.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function Y(x, P) {
      k.value[x] = P, w.value = !0;
    }
    async function F(x) {
      try {
        await m(x);
      } catch (P) {
        v.value = P instanceof Error ? P.message : "Failed to open file location";
      }
    }
    async function z() {
      if (!w.value) {
        i("close");
        return;
      }
      d.value = !0, v.value = null;
      try {
        for (const [x, P] of Object.entries(k.value))
          await g(n.workflowName, x, P);
        i("refresh"), i("close");
      } catch (x) {
        v.value = x instanceof Error ? x.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return Oe(S), (x, P) => (s(), o(W, null, [
      _(He, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: d.value,
        error: v.value || void 0,
        onClose: P[4] || (P[4] = (U) => i("close"))
      }, {
        body: l(() => [
          p.value ? (s(), o(W, { key: 0 }, [
            e("section", li, [
              _(cs, { variant: "section" }, {
                default: l(() => [
                  h("MODELS USED (" + a(p.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              p.value.models.length === 0 ? (s(), o("div", ii, " No models used in this workflow ")) : r("", !0),
              (s(!0), o(W, null, ae(p.value.models, (U) => {
                var re;
                return s(), o("div", {
                  key: U.hash || U.filename,
                  class: "model-card"
                }, [
                  e("div", ri, [
                    P[6] || (P[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", di, a(U.filename), 1)
                  ]),
                  e("div", ci, [
                    e("div", ui, [
                      P[7] || (P[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: fe(["value", I(U.status)])
                      }, a($(U.status)), 3)
                    ]),
                    e("div", mi, [
                      e("span", vi, [
                        P[8] || (P[8] = h(" Importance: ", -1)),
                        _(so, {
                          size: 14,
                          title: "About importance levels",
                          onClick: P[0] || (P[0] = (le) => b.value = !0)
                        })
                      ]),
                      _(ei, {
                        "model-value": k.value[U.filename] || U.importance,
                        options: C,
                        "onUpdate:modelValue": (le) => Y(U.filename, le)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    U.loaded_by && U.loaded_by.length > 0 ? (s(), o("div", fi, [
                      P[9] || (P[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", pi, [
                        (s(!0), o(W, null, ae(R(U), (le, K) => (s(), o("div", {
                          key: `${le.node_id}-${K}`,
                          class: "node-reference"
                        }, a(le.node_type) + " (Node #" + a(le.node_id) + ") ", 1))), 128)),
                        U.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (le) => E(U.hash || U.filename)
                        }, a(A(U.hash || U.filename) ? "▼ Show less" : `▶ View all (${U.loaded_by.length})`), 9, gi)) : r("", !0)
                      ])
                    ])) : r("", !0),
                    U.size_mb ? (s(), o("div", hi, [
                      P[10] || (P[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", yi, a(U.size_mb) + " MB", 1)
                    ])) : r("", !0),
                    U.has_category_mismatch ? (s(), o("div", wi, [
                      P[13] || (P[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", ki, [
                        P[11] || (P[11] = h(" In ", -1)),
                        e("code", null, a(U.actual_category) + "/", 1),
                        P[12] || (P[12] = h(" but loader needs ", -1)),
                        e("code", null, a((re = U.expected_categories) == null ? void 0 : re[0]) + "/", 1)
                      ])
                    ])) : r("", !0)
                  ]),
                  U.status !== "available" ? (s(), o("div", bi, [
                    U.status === "downloadable" ? (s(), T(ye, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: P[1] || (P[1] = (le) => i("resolve"))
                    }, {
                      default: l(() => [...P[14] || (P[14] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    })) : U.status === "category_mismatch" && U.file_path ? (s(), T(ye, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => F(U.file_path)
                    }, {
                      default: l(() => [...P[15] || (P[15] = [
                        h(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : U.status !== "path_mismatch" ? (s(), T(ye, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: P[2] || (P[2] = (le) => i("resolve"))
                    }, {
                      default: l(() => [...P[16] || (P[16] = [
                        h(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : r("", !0)
                  ])) : r("", !0)
                ]);
              }), 128))
            ]),
            e("section", _i, [
              _(cs, { variant: "section" }, {
                default: l(() => [
                  h("NODES USED (" + a(p.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              p.value.nodes.length === 0 ? (s(), o("div", $i, " No custom nodes used in this workflow ")) : r("", !0),
              (s(!0), o(W, null, ae(p.value.nodes, (U) => (s(), o("div", {
                key: U.name,
                class: "node-item"
              }, [
                e("span", {
                  class: fe(["node-status", U.status === "installed" ? "installed" : "missing"])
                }, a(U.status === "installed" ? "✓" : "✕"), 3),
                e("span", Ci, a(U.name), 1),
                U.version ? (s(), o("span", xi, "v" + a(U.version), 1)) : r("", !0)
              ]))), 128))
            ])
          ], 64)) : r("", !0)
        ]),
        footer: l(() => [
          _(ye, {
            variant: "secondary",
            onClick: P[3] || (P[3] = (U) => i("close"))
          }, {
            default: l(() => [...P[17] || (P[17] = [
              h(" Close ", -1)
            ])]),
            _: 1
          }),
          w.value ? (s(), T(ye, {
            key: 0,
            variant: "primary",
            onClick: z
          }, {
            default: l(() => [...P[18] || (P[18] = [
              h(" Save Changes ", -1)
            ])]),
            _: 1
          })) : r("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      _($t, {
        show: b.value,
        title: "Model Importance Levels",
        onClose: P[5] || (P[5] = (U) => b.value = !1)
      }, {
        content: l(() => [...P[19] || (P[19] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              h(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              h(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              h(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ii = /* @__PURE__ */ se(Si, [["__scopeId", "data-v-668728e6"]]), ze = vs({
  items: [],
  status: "idle"
});
let Tt = null;
function ao() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Is(t) {
  return ze.items.find((c) => c.id === t);
}
async function Qt() {
  if (ze.status === "downloading") return;
  const t = ze.items.find((c) => c.status === "queued");
  if (!t) {
    ze.status = "idle";
    return;
  }
  ze.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await Ei(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    ze.status = "idle", Qt();
  }
}
async function Ei(t) {
  return new Promise((c, n) => {
    Tt && (Tt.close(), Tt = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), u = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    Tt = u;
    let g = Date.now(), m = 0, p = !1;
    u.onmessage = (d) => {
      try {
        const v = JSON.parse(d.data);
        switch (v.type) {
          case "progress":
            t.downloaded = v.downloaded || 0, t.size = v.total || t.size;
            const w = Date.now(), k = (w - g) / 1e3;
            if (k > 0.5) {
              const b = t.downloaded - m;
              if (t.speed = b / k, g = w, m = t.downloaded, t.speed > 0 && t.size > 0) {
                const f = t.size - t.downloaded;
                t.eta = f / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            p = !0, u.close(), Tt = null, c();
            break;
          case "error":
            p = !0, u.close(), Tt = null, n(new Error(v.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, u.onerror = () => {
      u.close(), Tt = null, p || n(new Error("Connection lost"));
    };
  });
}
async function Ti() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const c = await t.json();
    if (!c.pending_downloads || c.pending_downloads.length === 0) return;
    for (const n of c.pending_downloads) {
      if (ze.items.some((u) => u.url === n.url && u.filename === n.filename))
        continue;
      const i = {
        id: ao(),
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
      ze.items.push(i);
    }
    console.log(`[ComfyGit] Loaded ${c.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function fs() {
  function t($) {
    for (const R of $) {
      if (ze.items.some(
        (S) => S.url === R.url && S.targetPath === R.targetPath && ["queued", "downloading", "paused", "completed"].includes(S.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${R.filename}`);
        continue;
      }
      const E = {
        id: ao(),
        workflow: R.workflow,
        filename: R.filename,
        url: R.url,
        targetPath: R.targetPath,
        size: R.size || 0,
        type: R.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      ze.items.push(E);
    }
    ze.status === "idle" && Qt();
  }
  async function c($) {
    const R = Is($);
    if (R) {
      if (R.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(R.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Tt && (Tt.close(), Tt = null), R.status = "failed", R.error = "Cancelled by user", ze.status = "idle", Qt();
      } else if (R.status === "queued") {
        const A = ze.items.findIndex((E) => E.id === $);
        A >= 0 && ze.items.splice(A, 1);
      }
    }
  }
  function n($) {
    const R = Is($);
    !R || R.status !== "failed" || (R.status = "queued", R.error = void 0, R.progress = 0, R.downloaded = 0, ze.status === "idle" && Qt());
  }
  function i($) {
    const R = Is($);
    !R || R.status !== "paused" || (R.status = "queued", ze.status === "idle" && Qt());
  }
  function u() {
    const $ = ze.items.filter((R) => R.status === "paused");
    for (const R of $)
      R.status = "queued";
    ze.status === "idle" && Qt();
  }
  function g($) {
    const R = ze.items.findIndex((A) => A.id === $);
    R >= 0 && ["completed", "failed", "paused"].includes(ze.items[R].status) && ze.items.splice(R, 1);
  }
  function m() {
    ze.items = ze.items.filter(($) => $.status !== "completed");
  }
  function p() {
    ze.items = ze.items.filter(($) => $.status !== "failed");
  }
  const d = L(
    () => ze.items.find(($) => $.status === "downloading")
  ), v = L(
    () => ze.items.filter(($) => $.status === "queued")
  ), w = L(
    () => ze.items.filter(($) => $.status === "completed")
  ), k = L(
    () => ze.items.filter(($) => $.status === "failed")
  ), b = L(
    () => ze.items.filter(($) => $.status === "paused")
  ), f = L(() => ze.items.length > 0), C = L(
    () => ze.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), I = L(
    () => ze.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Ro(ze),
    // Computed
    currentDownload: d,
    queuedItems: v,
    completedItems: w,
    failedItems: k,
    pausedItems: b,
    hasItems: f,
    activeCount: C,
    hasPaused: I,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: i,
    resumeAllPaused: u,
    removeItem: g,
    clearCompleted: m,
    clearFailed: p,
    loadPendingDownloads: Ti
  };
}
function lo() {
  const t = y(null), c = y(null), n = y([]), i = y([]), u = y(!1), g = y(null);
  async function m(A, E) {
    var Y;
    if (!((Y = window.app) != null && Y.api))
      throw new Error("ComfyUI API not available");
    const S = await window.app.api.fetchApi(A, E);
    if (!S.ok) {
      const F = await S.json().catch(() => ({})), z = F.error || F.message || `Request failed: ${S.status}`;
      throw new Error(z);
    }
    return S.json();
  }
  async function p(A) {
    u.value = !0, g.value = null;
    try {
      let E;
      return Xt() || (E = await m(
        `/v2/comfygit/workflow/${A}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = E, E;
    } catch (E) {
      const S = E instanceof Error ? E.message : "Unknown error occurred";
      throw g.value = S, E;
    } finally {
      u.value = !1;
    }
  }
  async function d(A, E, S, Y) {
    u.value = !0, g.value = null;
    try {
      let F;
      if (!Xt()) {
        const z = Object.fromEntries(E), x = Object.fromEntries(S), P = Y ? Array.from(Y) : [];
        F = await m(
          `/v2/comfygit/workflow/${A}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: z,
              model_choices: x,
              skipped_packages: P
            })
          }
        );
      }
      return c.value = F, F;
    } catch (F) {
      const z = F instanceof Error ? F.message : "Unknown error occurred";
      throw g.value = z, F;
    } finally {
      u.value = !1;
    }
  }
  async function v(A, E = 10) {
    u.value = !0, g.value = null;
    try {
      let S;
      return Xt() || (S = await m(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: A, limit: E })
        }
      )), n.value = S.results, S.results;
    } catch (S) {
      const Y = S instanceof Error ? S.message : "Unknown error occurred";
      throw g.value = Y, S;
    } finally {
      u.value = !1;
    }
  }
  async function w(A, E = 10) {
    u.value = !0, g.value = null;
    try {
      let S;
      return Xt() || (S = await m(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: A, limit: E })
        }
      )), i.value = S.results, S.results;
    } catch (S) {
      const Y = S instanceof Error ? S.message : "Unknown error occurred";
      throw g.value = Y, S;
    } finally {
      u.value = !1;
    }
  }
  const k = vs({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function b() {
    k.phase = "idle", k.currentFile = void 0, k.currentFileIndex = void 0, k.totalFiles = void 0, k.bytesDownloaded = void 0, k.bytesTotal = void 0, k.completedFiles = [], k.nodesToInstall = [], k.nodesInstalled = [], k.installError = void 0, k.needsRestart = void 0, k.error = void 0, k.nodeInstallProgress = void 0;
  }
  async function f(A) {
    k.phase = "installing", k.nodesInstalled = [], k.installError = void 0, k.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Xt(), await C(A);
    } catch (E) {
      const S = E instanceof Error ? E.message : "Failed to install nodes";
      throw k.installError = S, E;
    }
  }
  async function C(A) {
    var S;
    const E = await m(
      `/v2/comfygit/workflow/${A}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: k.nodesToInstall
        })
      }
    );
    if (k.nodeInstallProgress) {
      k.nodeInstallProgress.totalNodes = k.nodesToInstall.length;
      const Y = new Map(((S = E.failed) == null ? void 0 : S.map((F) => [F.node_id, F.error])) || []);
      for (let F = 0; F < k.nodesToInstall.length; F++) {
        const z = k.nodesToInstall[F], x = Y.get(z);
        k.nodeInstallProgress.completedNodes.push({
          node_id: z,
          success: !x,
          error: x
        });
      }
    }
    return k.nodesInstalled = E.nodes_installed, k.needsRestart = E.nodes_installed.length > 0, E.failed && E.failed.length > 0 && (k.installError = `${E.failed.length} package(s) failed to install`), E;
  }
  async function I(A, E, S) {
    b(), k.phase = "resolving", g.value = null;
    const Y = Object.fromEntries(E), F = Object.fromEntries(S);
    try {
      const z = await fetch(`/v2/comfygit/workflow/${A}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: Y,
          model_choices: F
        })
      });
      if (!z.ok)
        throw new Error(`Request failed: ${z.status}`);
      if (!z.body)
        throw new Error("No response body");
      const x = z.body.getReader(), P = new TextDecoder();
      let U = "";
      for (; ; ) {
        const { done: re, value: le } = await x.read();
        if (re) break;
        U += P.decode(le, { stream: !0 });
        const K = U.split(`

`);
        U = K.pop() || "";
        for (const ee of K) {
          if (!ee.trim()) continue;
          const q = ee.split(`
`);
          let O = "", N = "";
          for (const M of q)
            M.startsWith("event: ") ? O = M.slice(7) : M.startsWith("data: ") && (N = M.slice(6));
          if (N)
            try {
              const M = JSON.parse(N);
              $(O, M);
            } catch (M) {
              console.warn("Failed to parse SSE event:", M);
            }
        }
      }
    } catch (z) {
      const x = z instanceof Error ? z.message : "Unknown error occurred";
      throw g.value = x, k.error = x, k.phase = "error", z;
    }
  }
  function $(A, E) {
    switch (A) {
      case "batch_start":
        k.phase = "downloading", k.totalFiles = E.total;
        break;
      case "file_start":
        k.currentFile = E.filename, k.currentFileIndex = E.index, k.bytesDownloaded = 0, k.bytesTotal = void 0;
        break;
      case "file_progress":
        k.bytesDownloaded = E.downloaded, k.bytesTotal = E.total;
        break;
      case "file_complete":
        k.completedFiles.push({
          filename: E.filename,
          success: E.success,
          error: E.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        k.nodesToInstall = E.nodes_to_install || [], E.download_results && (k.completedFiles = E.download_results), k.phase = "complete";
        break;
      case "error":
        k.error = E.message, k.phase = "error", g.value = E.message;
        break;
    }
  }
  function R(A, E) {
    const { addToQueue: S } = fs(), Y = E.filter((F) => F.url && F.target_path).map((F) => ({
      workflow: A,
      filename: F.filename,
      url: F.url,
      targetPath: F.target_path,
      size: F.size || 0,
      type: "model"
    }));
    return Y.length > 0 && S(Y), Y.length;
  }
  return {
    // State
    result: t,
    appliedResult: c,
    searchResults: n,
    modelSearchResults: i,
    isLoading: u,
    error: g,
    progress: k,
    // Methods
    analyzeWorkflow: p,
    applyResolution: d,
    applyResolutionWithProgress: I,
    installNodes: f,
    searchNodes: v,
    searchModels: w,
    resetProgress: b,
    queueModelDownloads: R
  };
}
const Pi = { class: "resolution-stepper" }, Ri = { class: "stepper-header" }, Mi = ["onClick"], Di = {
  key: 0,
  class: "step-icon"
}, Li = {
  key: 1,
  class: "step-number"
}, zi = { class: "step-label" }, Ui = {
  key: 0,
  class: "step-connector"
}, Oi = { class: "stepper-content" }, Ni = /* @__PURE__ */ te({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: c }) {
    const n = t, i = c;
    function u(v) {
      var w;
      if ((w = n.stepStats) != null && w[v]) {
        const k = n.stepStats[v];
        return k.total > 0 && k.resolved === k.total;
      }
      return n.completedSteps.includes(v);
    }
    function g(v) {
      var w;
      if ((w = n.stepStats) != null && w[v]) {
        const k = n.stepStats[v];
        return k.resolved > 0 && k.resolved < k.total;
      }
      return !1;
    }
    function m(v) {
      return u(v) ? "state-complete" : g(v) ? "state-partial" : "state-pending";
    }
    function p(v) {
      return !1;
    }
    function d(v) {
      i("step-change", v);
    }
    return (v, w) => (s(), o("div", Pi, [
      e("div", Ri, [
        (s(!0), o(W, null, ae(t.steps, (k, b) => (s(), o("div", {
          key: k.id,
          class: fe(["step", {
            active: t.currentStep === k.id,
            completed: u(k.id),
            "in-progress": g(k.id),
            disabled: p(k.id)
          }]),
          onClick: (f) => d(k.id)
        }, [
          e("div", {
            class: fe(["step-indicator", m(k.id)])
          }, [
            u(k.id) ? (s(), o("span", Di, "✓")) : (s(), o("span", Li, a(b + 1), 1))
          ], 2),
          e("div", zi, a(k.label), 1),
          b < t.steps.length - 1 ? (s(), o("div", Ui)) : r("", !0)
        ], 10, Mi))), 128))
      ]),
      e("div", Oi, [
        Pe(v.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Ai = /* @__PURE__ */ se(Ni, [["__scopeId", "data-v-2a7b3af8"]]), Bi = /* @__PURE__ */ te({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = L(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), i = L(() => `confidence-${n.value}`), u = L(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (g, m) => (s(), o("span", {
      class: fe(["confidence-badge", i.value, t.size])
    }, a(u.value), 3));
  }
}), _s = /* @__PURE__ */ se(Bi, [["__scopeId", "data-v-17ec4b80"]]), Fi = { class: "node-info" }, Vi = { class: "node-info-text" }, Wi = { class: "item-body" }, Gi = {
  key: 0,
  class: "resolved-state"
}, ji = {
  key: 1,
  class: "multiple-options"
}, Ki = { class: "options-list" }, Hi = ["onClick"], qi = ["name", "value", "checked", "onChange"], Yi = { class: "option-content" }, Ji = { class: "option-header" }, Xi = { class: "option-package-id" }, Qi = {
  key: 0,
  class: "option-title"
}, Zi = { class: "option-meta" }, er = {
  key: 0,
  class: "installed-badge"
}, tr = { class: "action-buttons" }, sr = {
  key: 2,
  class: "unresolved"
}, or = {
  key: 0,
  class: "searching-state"
}, nr = { class: "options-list" }, ar = ["onClick"], lr = ["name", "value"], ir = { class: "option-content" }, rr = { class: "option-header" }, dr = { class: "option-package-id" }, cr = {
  key: 0,
  class: "option-description"
}, ur = { class: "option-meta" }, mr = {
  key: 0,
  class: "installed-badge"
}, vr = {
  key: 2,
  class: "unresolved-message"
}, fr = { class: "action-buttons" }, pr = /* @__PURE__ */ te({
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
  setup(t, { emit: c }) {
    const n = t, i = c;
    function u(d, v = 80) {
      return d.length <= v ? d : d.slice(0, v - 3) + "...";
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
    function p(d) {
      i("option-selected", d);
    }
    return (d, v) => (s(), o("div", {
      class: fe(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: g.value }])
    }, [
      e("div", Fi, [
        e("span", Vi, [
          v[7] || (v[7] = h("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: fe(["status-badge", m.value])
        }, a(t.statusLabel), 3)) : r("", !0)
      ]),
      e("div", Wi, [
        g.value ? (s(), o("div", Gi, [
          _(ye, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (w) => i("clear-choice"))
          }, {
            default: l(() => [...v[8] || (v[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", ji, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Ki, [
            (s(!0), o(W, null, ae(t.options, (w, k) => (s(), o("label", {
              key: w.package_id,
              class: fe(["option-card", { selected: t.selectedOptionIndex === k }]),
              onClick: (b) => p(k)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: k,
                checked: t.selectedOptionIndex === k,
                onChange: (b) => p(k)
              }, null, 40, qi),
              e("div", Yi, [
                e("div", Ji, [
                  e("span", Xi, a(w.package_id), 1),
                  _(_s, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                w.title && w.title !== w.package_id ? (s(), o("div", Qi, a(w.title), 1)) : r("", !0),
                e("div", Zi, [
                  w.is_installed ? (s(), o("span", er, "Already Installed")) : r("", !0)
                ])
              ])
            ], 10, Hi))), 128))
          ]),
          e("div", tr, [
            _(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[1] || (v[1] = (w) => i("search"))
            }, {
              default: l(() => [...v[9] || (v[9] = [
                h(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            _(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[2] || (v[2] = (w) => i("manual-entry"))
            }, {
              default: l(() => [...v[10] || (v[10] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            _(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (w) => i("mark-optional"))
            }, {
              default: l(() => [...v[11] || (v[11] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", sr, [
          t.isSearching ? (s(), o("div", or, [...v[13] || (v[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(W, { key: 1 }, [
            v[14] || (v[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", nr, [
              (s(!0), o(W, null, ae(t.searchResults.slice(0, 5), (w, k) => (s(), o("label", {
                key: w.package_id,
                class: "option-card",
                onClick: (b) => i("search-result-selected", w)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: k
                }, null, 8, lr),
                e("div", ir, [
                  e("div", rr, [
                    e("span", dr, a(w.package_id), 1),
                    _(_s, {
                      confidence: w.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  w.description ? (s(), o("div", cr, a(u(w.description)), 1)) : r("", !0),
                  e("div", ur, [
                    w.is_installed ? (s(), o("span", mr, "Already Installed")) : r("", !0)
                  ])
                ])
              ], 8, ar))), 128))
            ])
          ], 64)) : (s(), o("div", vr, [...v[15] || (v[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", fr, [
            _(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[4] || (v[4] = (w) => i("search"))
            }, {
              default: l(() => {
                var w;
                return [
                  h(a((w = t.searchResults) != null && w.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            _(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (w) => i("manual-entry"))
            }, {
              default: l(() => [...v[16] || (v[16] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            _(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (w) => i("mark-optional"))
            }, {
              default: l(() => [...v[17] || (v[17] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), gr = /* @__PURE__ */ se(pr, [["__scopeId", "data-v-c2997d1d"]]), hr = { class: "item-navigator" }, yr = { class: "nav-item-info" }, wr = ["title"], kr = { class: "nav-controls" }, br = { class: "nav-arrows" }, _r = ["disabled"], $r = ["disabled"], Cr = { class: "nav-position" }, xr = /* @__PURE__ */ te({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const n = c;
    return (i, u) => (s(), o("div", hr, [
      e("div", yr, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, wr)
      ]),
      e("div", kr, [
        e("div", br, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: u[0] || (u[0] = (g) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, _r),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: u[1] || (u[1] = (g) => n("next")),
            title: "Next item"
          }, " → ", 8, $r)
        ]),
        e("span", Cr, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), io = /* @__PURE__ */ se(xr, [["__scopeId", "data-v-74af7920"]]), Sr = ["type", "value", "placeholder", "disabled"], Ir = {
  key: 0,
  class: "base-input-error"
}, Er = /* @__PURE__ */ te({
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
    return (c, n) => (s(), o("div", {
      class: fe(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: fe(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          n[1] || (n[1] = wt((i) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = wt((i) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Sr),
      t.error ? (s(), o("span", Ir, a(t.error), 1)) : r("", !0)
    ], 2));
  }
}), bt = /* @__PURE__ */ se(Er, [["__scopeId", "data-v-9ba02cdc"]]), Tr = { class: "node-resolution-step" }, Pr = {
  key: 0,
  class: "auto-resolved-section"
}, Rr = { class: "section-header" }, Mr = { class: "stat-badge" }, Dr = { class: "resolved-packages-list" }, Lr = { class: "package-info" }, zr = { class: "package-id" }, Ur = { class: "node-count" }, Or = { class: "package-actions" }, Nr = {
  key: 0,
  class: "status-badge install"
}, Ar = {
  key: 1,
  class: "status-badge skip"
}, Br = ["onClick"], Fr = {
  key: 1,
  class: "section-divider"
}, Vr = { class: "step-header" }, Wr = { class: "stat-badge" }, Gr = {
  key: 1,
  class: "step-body"
}, jr = {
  key: 3,
  class: "empty-state"
}, Kr = { class: "node-modal-body" }, Hr = { class: "node-search-results-container" }, qr = {
  key: 0,
  class: "node-search-results"
}, Yr = ["onClick"], Jr = { class: "node-result-header" }, Xr = { class: "node-result-package-id" }, Qr = {
  key: 0,
  class: "node-result-description"
}, Zr = {
  key: 1,
  class: "node-empty-state"
}, ed = {
  key: 2,
  class: "node-empty-state"
}, td = {
  key: 3,
  class: "node-empty-state"
}, sd = { class: "node-manual-entry-modal" }, od = { class: "node-modal-body" }, nd = { class: "node-modal-actions" }, ad = /* @__PURE__ */ te({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: c }) {
    const n = t, i = c, { searchNodes: u } = lo(), g = y(0), m = y(!1), p = y(!1), d = y(""), v = y(""), w = y([]), k = y(!1), b = y(/* @__PURE__ */ new Map()), f = y(/* @__PURE__ */ new Set()), C = y(!1);
    function I() {
      C.value && N(), C.value = !1;
    }
    const $ = L(() => n.nodes[g.value]), R = L(() => n.nodes.filter((me) => n.nodeChoices.has(me.node_type)).length), A = L(() => $.value ? b.value.get($.value.node_type) || [] : []), E = L(() => $.value ? f.value.has($.value.node_type) : !1);
    ut($, async (me) => {
      var ge;
      me && ((ge = me.options) != null && ge.length || b.value.has(me.node_type) || f.value.has(me.node_type) || n.nodeChoices.has(me.node_type) || await S(me.node_type));
    }, { immediate: !0 });
    async function S(me) {
      f.value.add(me);
      try {
        const ge = await u(me, 5);
        b.value.set(me, ge);
      } catch {
        b.value.set(me, []);
      } finally {
        f.value.delete(me);
      }
    }
    const Y = L(() => n.autoResolvedPackages.filter((me) => !n.skippedPackages.has(me.package_id)).length);
    function F(me) {
      return n.skippedPackages.has(me);
    }
    function z(me) {
      i("package-skip", me);
    }
    const x = L(() => {
      var ge;
      if (!$.value) return "not-found";
      const me = n.nodeChoices.get($.value.node_type);
      if (me)
        switch (me.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (ge = $.value.options) != null && ge.length ? "ambiguous" : "not-found";
    }), P = L(() => {
      var ge;
      if (!$.value) return;
      const me = n.nodeChoices.get($.value.node_type);
      if (me)
        switch (me.action) {
          case "install":
            return me.package_id ? `→ ${me.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (ge = $.value.options) != null && ge.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function U(me) {
      me >= 0 && me < n.nodes.length && (g.value = me);
    }
    function re() {
      $.value && i("mark-optional", $.value.node_type);
    }
    function le() {
      $.value && i("skip", $.value.node_type);
    }
    function K(me) {
      $.value && i("option-selected", $.value.node_type, me);
    }
    function ee() {
      $.value && i("clear-choice", $.value.node_type);
    }
    function q() {
      $.value && (d.value = $.value.node_type, w.value = A.value, m.value = !0, be(d.value));
    }
    function O() {
      v.value = "", p.value = !0;
    }
    function N() {
      m.value = !1, d.value = "", w.value = [];
    }
    function M() {
      p.value = !1, v.value = "";
    }
    let ve = null;
    function oe() {
      ve && clearTimeout(ve), ve = setTimeout(() => {
        be(d.value);
      }, 300);
    }
    async function be(me) {
      if (!me.trim()) {
        w.value = [];
        return;
      }
      k.value = !0;
      try {
        w.value = await u(me, 10);
      } catch {
        w.value = [];
      } finally {
        k.value = !1;
      }
    }
    function Ce(me) {
      $.value && (i("manual-entry", $.value.node_type, me.package_id), N());
    }
    function Le(me) {
      $.value && i("manual-entry", $.value.node_type, me.package_id);
    }
    function Ue() {
      !$.value || !v.value.trim() || (i("manual-entry", $.value.node_type, v.value.trim()), M());
    }
    return (me, ge) => {
      var Me, ce;
      return s(), o("div", Tr, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", Pr, [
          e("div", Rr, [
            ge[6] || (ge[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", Mr, a(Y.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", Dr, [
            (s(!0), o(W, null, ae(t.autoResolvedPackages, (X) => (s(), o("div", {
              key: X.package_id,
              class: "resolved-package-item"
            }, [
              e("div", Lr, [
                e("code", zr, a(X.package_id), 1),
                e("span", Ur, a(X.node_types_count) + " node type" + a(X.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", Or, [
                F(X.package_id) ? (s(), o("span", Ar, " SKIPPED ")) : (s(), o("span", Nr, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (De) => z(X.package_id)
                }, a(F(X.package_id) ? "Include" : "Skip"), 9, Br)
              ])
            ]))), 128))
          ])
        ])) : r("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", Fr)) : r("", !0),
        t.nodes.length > 0 ? (s(), o(W, { key: 2 }, [
          e("div", Vr, [
            ge[7] || (ge[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", Wr, a(R.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          $.value ? (s(), T(io, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": g.value,
            "total-items": t.nodes.length,
            onPrev: ge[0] || (ge[0] = (X) => U(g.value - 1)),
            onNext: ge[1] || (ge[1] = (X) => U(g.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
          $.value ? (s(), o("div", Gr, [
            _(gr, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((Me = $.value.options) != null && Me.length),
              options: $.value.options,
              choice: (ce = t.nodeChoices) == null ? void 0 : ce.get($.value.node_type),
              status: x.value,
              "status-label": P.value,
              "search-results": A.value,
              "is-searching": E.value,
              onMarkOptional: re,
              onSkip: le,
              onManualEntry: O,
              onSearch: q,
              onOptionSelected: K,
              onClearChoice: ee,
              onSearchResultSelected: Le
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : r("", !0)
        ], 64)) : r("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", jr, [...ge[8] || (ge[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : r("", !0),
        (s(), T(et, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ge[4] || (ge[4] = Be((X) => C.value = !0, ["self"])),
            onMouseup: Be(I, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: ge[3] || (ge[3] = (X) => C.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                ge[9] || (ge[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: N
                }, "✕")
              ]),
              e("div", Kr, [
                _(bt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": ge[2] || (ge[2] = (X) => d.value = X),
                  placeholder: "Search by node type, package name...",
                  onInput: oe
                }, null, 8, ["modelValue"]),
                e("div", Hr, [
                  w.value.length > 0 ? (s(), o("div", qr, [
                    (s(!0), o(W, null, ae(w.value, (X) => (s(), o("div", {
                      key: X.package_id,
                      class: "node-search-result-item",
                      onClick: (De) => Ce(X)
                    }, [
                      e("div", Jr, [
                        e("code", Xr, a(X.package_id), 1),
                        X.match_confidence ? (s(), T(_s, {
                          key: 0,
                          confidence: X.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : r("", !0)
                      ]),
                      X.description ? (s(), o("div", Qr, a(X.description), 1)) : r("", !0)
                    ], 8, Yr))), 128))
                  ])) : k.value ? (s(), o("div", Zr, "Searching...")) : d.value ? (s(), o("div", ed, 'No packages found matching "' + a(d.value) + '"', 1)) : (s(), o("div", td, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : r("", !0)
        ])),
        (s(), T(et, { to: "body" }, [
          p.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Be(M, ["self"])
          }, [
            e("div", sd, [
              e("div", { class: "node-modal-header" }, [
                ge[10] || (ge[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: M
                }, "✕")
              ]),
              e("div", od, [
                _(bt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": ge[5] || (ge[5] = (X) => v.value = X),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", nd, [
                  _(ye, {
                    variant: "secondary",
                    onClick: M
                  }, {
                    default: l(() => [...ge[11] || (ge[11] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  _(ye, {
                    variant: "primary",
                    disabled: !v.value.trim(),
                    onClick: Ue
                  }, {
                    default: l(() => [...ge[12] || (ge[12] = [
                      h(" Add Package ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : r("", !0)
        ]))
      ]);
    };
  }
}), ld = /* @__PURE__ */ se(ad, [["__scopeId", "data-v-281581bc"]]), id = { class: "node-info" }, rd = { class: "node-info-text" }, dd = { class: "item-body" }, cd = {
  key: 0,
  class: "resolved-state"
}, ud = {
  key: 1,
  class: "multiple-options"
}, md = { class: "options-list" }, vd = ["onClick"], fd = ["name", "value", "checked", "onChange"], pd = { class: "option-content" }, gd = { class: "option-header" }, hd = { class: "option-filename" }, yd = { class: "option-meta" }, wd = { class: "option-size" }, kd = { class: "option-category" }, bd = { class: "option-path" }, _d = { class: "action-buttons" }, $d = {
  key: 2,
  class: "unresolved"
}, Cd = { class: "action-buttons" }, xd = /* @__PURE__ */ te({
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
  setup(t, { emit: c }) {
    const n = t, i = c, u = L(() => !!n.choice);
    L(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.action;
    }), L(() => {
      var d, v;
      return ((v = (d = n.choice) == null ? void 0 : d.selected_model) == null ? void 0 : v.filename) || "selected";
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
    function p(d) {
      if (!d) return "Unknown";
      const v = d / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, v) => (s(), o("div", {
      class: fe(["model-resolution-item", { resolved: u.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", id, [
        e("span", rd, [
          v[7] || (v[7] = h("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: fe(["status-badge", g.value])
        }, a(t.statusLabel), 3)) : r("", !0)
      ]),
      e("div", dd, [
        u.value ? (s(), o("div", cd, [
          _(ye, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (w) => i("clear-choice"))
          }, {
            default: l(() => [...v[8] || (v[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", ud, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", md, [
            (s(!0), o(W, null, ae(t.options, (w, k) => (s(), o("label", {
              key: w.model.hash,
              class: fe(["option-card", { selected: t.selectedOptionIndex === k }]),
              onClick: (b) => m(k)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: k,
                checked: t.selectedOptionIndex === k,
                onChange: (b) => m(k)
              }, null, 40, fd),
              e("div", pd, [
                e("div", gd, [
                  e("span", hd, a(w.model.filename), 1),
                  _(_s, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", yd, [
                  e("span", wd, a(p(w.model.size)), 1),
                  e("span", kd, a(w.model.category), 1)
                ]),
                e("div", bd, a(w.model.relative_path), 1)
              ])
            ], 10, vd))), 128))
          ]),
          e("div", _d, [
            _(ye, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (w) => i("search"))
            }, {
              default: l(() => [...v[9] || (v[9] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            _(ye, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (w) => i("download-url"))
            }, {
              default: l(() => [...v[10] || (v[10] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            _(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (w) => i("mark-optional"))
            }, {
              default: l(() => [...v[11] || (v[11] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", $d, [
          v[16] || (v[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Cd, [
            _(ye, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (w) => i("search"))
            }, {
              default: l(() => [...v[13] || (v[13] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            _(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (w) => i("download-url"))
            }, {
              default: l(() => [...v[14] || (v[14] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            _(ye, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (w) => i("mark-optional"))
            }, {
              default: l(() => [...v[15] || (v[15] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Sd = /* @__PURE__ */ se(xd, [["__scopeId", "data-v-8a82fefa"]]), Id = { class: "model-resolution-step" }, Ed = { class: "step-header" }, Td = { class: "step-info" }, Pd = { class: "step-title" }, Rd = { class: "step-description" }, Md = { class: "stat-badge" }, Dd = {
  key: 1,
  class: "step-body"
}, Ld = {
  key: 2,
  class: "empty-state"
}, zd = { class: "model-search-modal" }, Ud = { class: "model-modal-body" }, Od = {
  key: 0,
  class: "model-search-results"
}, Nd = ["onClick"], Ad = { class: "model-result-header" }, Bd = { class: "model-result-filename" }, Fd = { class: "model-result-meta" }, Vd = { class: "model-result-category" }, Wd = { class: "model-result-size" }, Gd = {
  key: 0,
  class: "model-result-path"
}, jd = {
  key: 1,
  class: "model-no-results"
}, Kd = {
  key: 2,
  class: "model-searching"
}, Hd = { class: "model-download-url-modal" }, qd = { class: "model-modal-body" }, Yd = { class: "model-input-group" }, Jd = { class: "model-input-group" }, Xd = { class: "model-modal-actions" }, Qd = /* @__PURE__ */ te({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(t, { emit: c }) {
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
    function i(N) {
      var M;
      return N && ((M = n[N]) == null ? void 0 : M[0]) || null;
    }
    const u = t, g = c, m = y(0), p = y(!1), d = y(!1), v = y(""), w = y(""), k = y(""), b = y([]), f = y(!1), C = L(() => u.models[m.value]), I = L(() => u.models.some((N) => N.is_download_intent)), $ = L(() => u.models.filter(
      (N) => u.modelChoices.has(N.filename) || N.is_download_intent
    ).length), R = L(() => {
      var M;
      if (!C.value) return "";
      const N = i((M = C.value.reference) == null ? void 0 : M.node_type);
      return N ? `${N}/${C.value.filename}` : "";
    }), A = L(() => {
      var M;
      if (!C.value) return "not-found";
      const N = u.modelChoices.get(C.value.filename);
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
      return C.value.is_download_intent ? "download" : (M = C.value.options) != null && M.length ? "ambiguous" : "not-found";
    }), E = L(() => {
      var M, ve;
      if (!C.value) return;
      const N = u.modelChoices.get(C.value.filename);
      if (N)
        switch (N.action) {
          case "select":
            return (M = N.selected_model) != null && M.filename ? `→ ${N.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return C.value.is_download_intent ? "Pending Download" : (ve = C.value.options) != null && ve.length ? `${C.value.options.length} matches` : "Not Found";
    });
    function S(N) {
      N >= 0 && N < u.models.length && (m.value = N);
    }
    function Y() {
      C.value && g("mark-optional", C.value.filename);
    }
    function F() {
      C.value && g("skip", C.value.filename);
    }
    function z(N) {
      C.value && g("option-selected", C.value.filename, N);
    }
    function x() {
      C.value && g("clear-choice", C.value.filename);
    }
    function P() {
      C.value && (v.value = C.value.filename, p.value = !0);
    }
    function U() {
      C.value && (w.value = C.value.download_source || "", k.value = C.value.target_path || R.value, d.value = !0);
    }
    function re() {
      p.value = !1, v.value = "", b.value = [];
    }
    function le() {
      d.value = !1, w.value = "", k.value = "";
    }
    function K() {
      f.value = !0, setTimeout(() => {
        f.value = !1;
      }, 300);
    }
    function ee(N) {
      C.value && re();
    }
    function q() {
      !C.value || !w.value.trim() || (g("download-url", C.value.filename, w.value.trim(), k.value.trim() || void 0), le());
    }
    function O(N) {
      if (!N) return "Unknown";
      const M = N / (1024 * 1024 * 1024);
      return M >= 1 ? `${M.toFixed(2)} GB` : `${(N / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (N, M) => {
      var ve, oe, be;
      return s(), o("div", Id, [
        e("div", Ed, [
          e("div", Td, [
            e("h3", Pd, a(I.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Rd, a(I.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Md, a($.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        C.value ? (s(), T(io, {
          key: 0,
          "item-name": C.value.filename,
          "current-index": m.value,
          "total-items": t.models.length,
          onPrev: M[0] || (M[0] = (Ce) => S(m.value - 1)),
          onNext: M[1] || (M[1] = (Ce) => S(m.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
        C.value ? (s(), o("div", Dd, [
          _(Sd, {
            filename: C.value.filename,
            "node-type": ((ve = C.value.reference) == null ? void 0 : ve.node_type) || "Unknown",
            "has-multiple-options": !!((oe = C.value.options) != null && oe.length),
            options: C.value.options,
            choice: (be = t.modelChoices) == null ? void 0 : be.get(C.value.filename),
            status: A.value,
            "status-label": E.value,
            onMarkOptional: Y,
            onSkip: F,
            onDownloadUrl: U,
            onSearch: P,
            onOptionSelected: z,
            onClearChoice: x
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", Ld, [...M[5] || (M[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), T(et, { to: "body" }, [
          p.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Be(re, ["self"])
          }, [
            e("div", zd, [
              e("div", { class: "model-modal-header" }, [
                M[6] || (M[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: re
                }, "✕")
              ]),
              e("div", Ud, [
                _(bt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": M[2] || (M[2] = (Ce) => v.value = Ce),
                  placeholder: "Search by filename, category...",
                  onInput: K
                }, null, 8, ["modelValue"]),
                b.value.length > 0 ? (s(), o("div", Od, [
                  (s(!0), o(W, null, ae(b.value, (Ce) => (s(), o("div", {
                    key: Ce.hash,
                    class: "model-search-result-item",
                    onClick: (Le) => ee()
                  }, [
                    e("div", Ad, [
                      e("code", Bd, a(Ce.filename), 1)
                    ]),
                    e("div", Fd, [
                      e("span", Vd, a(Ce.category), 1),
                      e("span", Wd, a(O(Ce.size)), 1)
                    ]),
                    Ce.relative_path ? (s(), o("div", Gd, a(Ce.relative_path), 1)) : r("", !0)
                  ], 8, Nd))), 128))
                ])) : v.value && !f.value ? (s(), o("div", jd, ' No models found matching "' + a(v.value) + '" ', 1)) : r("", !0),
                f.value ? (s(), o("div", Kd, "Searching...")) : r("", !0)
              ])
            ])
          ])) : r("", !0)
        ])),
        (s(), T(et, { to: "body" }, [
          d.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Be(le, ["self"])
          }, [
            e("div", Hd, [
              e("div", { class: "model-modal-header" }, [
                M[7] || (M[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: le
                }, "✕")
              ]),
              e("div", qd, [
                e("div", Yd, [
                  M[8] || (M[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  _(bt, {
                    modelValue: w.value,
                    "onUpdate:modelValue": M[3] || (M[3] = (Ce) => w.value = Ce),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Jd, [
                  M[9] || (M[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  _(bt, {
                    modelValue: k.value,
                    "onUpdate:modelValue": M[4] || (M[4] = (Ce) => k.value = Ce),
                    placeholder: R.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", Xd, [
                  _(ye, {
                    variant: "secondary",
                    onClick: le
                  }, {
                    default: l(() => [...M[10] || (M[10] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  _(ye, {
                    variant: "primary",
                    disabled: !w.value.trim() || !k.value.trim(),
                    onClick: q
                  }, {
                    default: l(() => [...M[11] || (M[11] = [
                      h(" Queue Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : r("", !0)
        ]))
      ]);
    };
  }
}), Zd = /* @__PURE__ */ se(Qd, [["__scopeId", "data-v-c6acbada"]]), ec = { class: "applying-step" }, tc = {
  key: 0,
  class: "phase-content"
}, sc = {
  key: 1,
  class: "phase-content"
}, oc = { class: "phase-description" }, nc = { class: "overall-progress" }, ac = { class: "progress-bar" }, lc = { class: "progress-label" }, ic = { class: "install-list" }, rc = { class: "install-icon" }, dc = { key: 0 }, cc = {
  key: 1,
  class: "spinner"
}, uc = { key: 2 }, mc = { key: 3 }, vc = {
  key: 0,
  class: "install-error"
}, fc = {
  key: 2,
  class: "phase-content"
}, pc = { class: "phase-header" }, gc = { class: "phase-title" }, hc = { class: "completion-summary" }, yc = {
  key: 0,
  class: "summary-item success"
}, wc = { class: "summary-text" }, kc = {
  key: 1,
  class: "summary-item error"
}, bc = { class: "summary-text" }, _c = {
  key: 2,
  class: "failed-list"
}, $c = { class: "failed-node-id" }, Cc = { class: "failed-error" }, xc = {
  key: 4,
  class: "summary-item success"
}, Sc = {
  key: 5,
  class: "restart-prompt"
}, Ic = {
  key: 3,
  class: "phase-content error"
}, Ec = { class: "error-message" }, Tc = /* @__PURE__ */ te({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const c = t, n = L(() => {
      var v, w;
      const p = ((v = c.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || c.progress.nodesToInstall.length;
      if (!p) return 0;
      const d = ((w = c.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.length) ?? 0;
      return Math.round(d / p * 100);
    }), i = L(() => {
      var p;
      return ((p = c.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.filter((d) => !d.success)) || [];
    }), u = L(() => i.value.length > 0);
    function g(p, d) {
      var w, k;
      const v = (w = c.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.find((b) => b.node_id === p);
      return v ? v.success ? "complete" : "failed" : ((k = c.progress.nodeInstallProgress) == null ? void 0 : k.currentIndex) === d ? "installing" : "pending";
    }
    function m(p) {
      var d, v;
      return (v = (d = c.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((w) => w.node_id === p)) == null ? void 0 : v.error;
    }
    return (p, d) => {
      var v, w, k, b;
      return s(), o("div", ec, [
        t.progress.phase === "resolving" ? (s(), o("div", tc, [...d[2] || (d[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", sc, [
          d[3] || (d[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", oc, " Installing " + a((((v = t.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + a(((w = t.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", nc, [
            e("div", ac, [
              e("div", {
                class: "progress-fill",
                style: Lt({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", lc, a(((k = t.progress.nodeInstallProgress) == null ? void 0 : k.completedNodes.length) ?? 0) + " / " + a(((b = t.progress.nodeInstallProgress) == null ? void 0 : b.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", ic, [
            (s(!0), o(W, null, ae(t.progress.nodesToInstall, (f, C) => (s(), o("div", {
              key: f,
              class: fe(["install-item", g(f, C)])
            }, [
              e("span", rc, [
                g(f, C) === "pending" ? (s(), o("span", dc, "○")) : g(f, C) === "installing" ? (s(), o("span", cc, "◌")) : g(f, C) === "complete" ? (s(), o("span", uc, "✓")) : g(f, C) === "failed" ? (s(), o("span", mc, "✗")) : r("", !0)
              ]),
              e("code", null, a(f), 1),
              m(f) ? (s(), o("span", vc, a(m(f)), 1)) : r("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", fc, [
          e("div", pc, [
            e("span", {
              class: fe(["phase-icon", u.value ? "warning" : "success"])
            }, a(u.value ? "⚠" : "✓"), 3),
            e("h3", gc, a(u.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", hc, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", yc, [
              d[4] || (d[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", wc, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : r("", !0),
            i.value.length > 0 ? (s(), o("div", kc, [
              d[5] || (d[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", bc, a(i.value.length) + " package" + a(i.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : r("", !0),
            i.value.length > 0 ? (s(), o("div", _c, [
              (s(!0), o(W, null, ae(i.value, (f) => (s(), o("div", {
                key: f.node_id,
                class: "failed-item"
              }, [
                e("code", $c, a(f.node_id), 1),
                e("span", Cc, a(f.error), 1)
              ]))), 128))
            ])) : r("", !0),
            i.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (f) => p.$emit("retry-failed"))
            }, " Retry Failed (" + a(i.value.length) + ") ", 1)) : r("", !0),
            u.value ? r("", !0) : (s(), o("div", xc, [...d[6] || (d[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", Sc, [
              d[7] || (d[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: d[1] || (d[1] = (f) => p.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : r("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", Ic, [
          d[9] || (d[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", Ec, a(t.progress.error), 1)
        ])) : r("", !0)
      ]);
    };
  }
}), Pc = /* @__PURE__ */ se(Tc, [["__scopeId", "data-v-5efaae58"]]), Rc = {
  key: 0,
  class: "loading-state"
}, Mc = {
  key: 1,
  class: "wizard-content"
}, Dc = {
  key: 0,
  class: "step-content"
}, Lc = { class: "analysis-summary" }, zc = { class: "analysis-header" }, Uc = { class: "summary-description" }, Oc = { class: "stats-grid" }, Nc = { class: "stat-card" }, Ac = { class: "stat-items" }, Bc = {
  key: 0,
  class: "stat-item success"
}, Fc = { class: "stat-count" }, Vc = {
  key: 1,
  class: "stat-item info"
}, Wc = { class: "stat-count" }, Gc = {
  key: 2,
  class: "stat-item warning"
}, jc = { class: "stat-count" }, Kc = {
  key: 3,
  class: "stat-item error"
}, Hc = { class: "stat-count" }, qc = { class: "stat-card" }, Yc = { class: "stat-items" }, Jc = { class: "stat-item success" }, Xc = { class: "stat-count" }, Qc = {
  key: 0,
  class: "stat-item info"
}, Zc = { class: "stat-count" }, eu = {
  key: 1,
  class: "stat-item warning"
}, tu = { class: "stat-count" }, su = {
  key: 2,
  class: "stat-item warning"
}, ou = { class: "stat-count" }, nu = {
  key: 3,
  class: "stat-item error"
}, au = { class: "stat-count" }, lu = {
  key: 0,
  class: "status-message warning"
}, iu = { class: "status-text" }, ru = {
  key: 1,
  class: "status-message info"
}, du = { class: "status-text" }, cu = {
  key: 2,
  class: "status-message info"
}, uu = { class: "status-text" }, mu = {
  key: 3,
  class: "status-message warning"
}, vu = { class: "status-text" }, fu = {
  key: 4,
  class: "status-message success"
}, pu = {
  key: 5,
  class: "category-mismatch-section"
}, gu = { class: "mismatch-list" }, hu = { class: "mismatch-path" }, yu = { class: "mismatch-target" }, wu = {
  key: 3,
  class: "step-content"
}, ku = { class: "review-summary" }, bu = { class: "review-stats" }, _u = { class: "review-stat" }, $u = { class: "stat-value" }, Cu = { class: "review-stat" }, xu = { class: "stat-value" }, Su = { class: "review-stat" }, Iu = { class: "stat-value" }, Eu = { class: "review-stat" }, Tu = { class: "stat-value" }, Pu = {
  key: 0,
  class: "review-section"
}, Ru = { class: "section-title" }, Mu = { class: "review-items" }, Du = { class: "item-name" }, Lu = { class: "item-choice" }, zu = {
  key: 0,
  class: "choice-badge install"
}, Uu = {
  key: 1,
  class: "choice-badge skip"
}, Ou = {
  key: 1,
  class: "review-section"
}, Nu = { class: "section-title" }, Au = { class: "review-items" }, Bu = { class: "item-name" }, Fu = { class: "item-choice" }, Vu = {
  key: 0,
  class: "choice-badge install"
}, Wu = {
  key: 1,
  class: "choice-badge optional"
}, Gu = {
  key: 2,
  class: "choice-badge skip"
}, ju = {
  key: 1,
  class: "choice-badge pending"
}, Ku = {
  key: 2,
  class: "review-section"
}, Hu = { class: "section-title" }, qu = { class: "review-items" }, Yu = { class: "item-name" }, Ju = { class: "item-choice" }, Xu = {
  key: 0,
  class: "choice-badge install"
}, Qu = {
  key: 1,
  class: "choice-badge download"
}, Zu = {
  key: 2,
  class: "choice-badge optional"
}, em = {
  key: 3,
  class: "choice-badge skip"
}, tm = {
  key: 4,
  class: "choice-badge skip"
}, sm = {
  key: 1,
  class: "choice-badge download"
}, om = {
  key: 2,
  class: "choice-badge pending"
}, nm = {
  key: 3,
  class: "no-choices"
}, am = /* @__PURE__ */ te({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, i = c, { analyzeWorkflow: u, applyResolution: g, installNodes: m, queueModelDownloads: p, progress: d, resetProgress: v } = lo(), { loadPendingDownloads: w } = fs(), { openFileLocation: k } = Fe(), b = y(null), f = y(!1), C = y(!1), I = y(null), $ = y("analysis"), R = y([]), A = y(/* @__PURE__ */ new Map()), E = y(/* @__PURE__ */ new Map()), S = y(/* @__PURE__ */ new Set()), Y = L(() => {
      const Z = [
        { id: "analysis", label: "Analysis" }
      ];
      return (z.value || U.value) && Z.push({ id: "nodes", label: "Nodes" }), (x.value || P.value) && Z.push({ id: "models", label: "Models" }), Z.push({ id: "review", label: "Review" }), $.value === "applying" && Z.push({ id: "applying", label: "Applying" }), Z;
    }), F = L(() => b.value ? b.value.stats.needs_user_input : !1), z = L(() => b.value ? b.value.nodes.unresolved.length > 0 || b.value.nodes.ambiguous.length > 0 : !1), x = L(() => b.value ? b.value.models.unresolved.length > 0 || b.value.models.ambiguous.length > 0 : !1), P = L(() => b.value ? b.value.stats.download_intents > 0 : !1), U = L(() => b.value ? b.value.stats.nodes_needing_installation > 0 : !1), re = L(() => b.value ? b.value.nodes.resolved.length : 0), le = L(() => b.value ? b.value.models.resolved.filter((Z) => Z.has_category_mismatch) : []), K = L(() => le.value.length > 0), ee = L(() => {
      if (!b.value) return [];
      const Z = b.value.nodes.resolved.filter((G) => !G.is_installed), D = /* @__PURE__ */ new Set();
      return Z.filter((G) => D.has(G.package.package_id) ? !1 : (D.add(G.package.package_id), !0));
    }), q = L(() => {
      if (!b.value) return [];
      const Z = b.value.nodes.resolved.filter((G) => !G.is_installed), D = /* @__PURE__ */ new Map();
      for (const G of Z) {
        const ne = D.get(G.package.package_id);
        ne ? ne.node_types_count++ : D.set(G.package.package_id, {
          package_id: G.package.package_id,
          title: G.package.title,
          node_types_count: 1
        });
      }
      return Array.from(D.values());
    }), O = L(() => ee.value.filter((Z) => !S.value.has(Z.package.package_id))), N = L(() => b.value ? b.value.models.resolved.filter((Z) => Z.match_type === "download_intent").map((Z) => ({
      filename: Z.reference.widget_value,
      reference: Z.reference,
      is_download_intent: !0,
      resolved_model: Z.model,
      download_source: Z.download_source,
      target_path: Z.target_path
    })) : []), M = L(() => {
      if (!b.value) return [];
      const Z = b.value.nodes.unresolved.map((G) => ({
        node_type: G.reference.node_type,
        reason: G.reason,
        is_unresolved: !0,
        options: void 0
      })), D = b.value.nodes.ambiguous.map((G) => ({
        node_type: G.reference.node_type,
        has_multiple_options: !0,
        options: G.options.map((ne) => ({
          package_id: ne.package.package_id,
          title: ne.package.title,
          match_confidence: ne.match_confidence,
          match_type: ne.match_type,
          is_installed: ne.is_installed
        }))
      }));
      return [...Z, ...D];
    }), ve = L(() => {
      if (!b.value) return [];
      const Z = b.value.models.unresolved.map((G) => ({
        filename: G.reference.widget_value,
        reference: G.reference,
        reason: G.reason,
        is_unresolved: !0,
        options: void 0
      })), D = b.value.models.ambiguous.map((G) => ({
        filename: G.reference.widget_value,
        reference: G.reference,
        has_multiple_options: !0,
        options: G.options.map((ne) => ({
          model: ne.model,
          match_confidence: ne.match_confidence,
          match_type: ne.match_type,
          has_download_source: ne.has_download_source
        }))
      }));
      return [...Z, ...D];
    }), oe = L(() => {
      const Z = ve.value, D = N.value.map((G) => ({
        filename: G.filename,
        reference: G.reference,
        is_download_intent: !0,
        resolved_model: G.resolved_model,
        download_source: G.download_source,
        target_path: G.target_path,
        options: void 0
      }));
      return [...Z, ...D];
    }), be = L(() => {
      let Z = O.value.length;
      for (const D of A.value.values())
        D.action === "install" && Z++;
      for (const D of E.value.values())
        D.action === "select" && Z++;
      return Z;
    }), Ce = L(() => {
      let Z = 0;
      for (const D of E.value.values())
        D.action === "download" && Z++;
      return Z;
    }), Le = L(() => {
      let Z = 0;
      for (const D of A.value.values())
        D.action === "optional" && Z++;
      for (const D of E.value.values())
        D.action === "optional" && Z++;
      return Z;
    }), Ue = L(() => {
      let Z = S.value.size;
      for (const D of A.value.values())
        D.action === "skip" && Z++;
      for (const D of E.value.values())
        D.action === "skip" && Z++;
      for (const D of M.value)
        A.value.has(D.node_type) || Z++;
      for (const D of ve.value)
        E.value.has(D.filename) || Z++;
      return Z;
    }), me = L(() => {
      const Z = {};
      if (Z.analysis = { resolved: 1, total: 1 }, z.value) {
        const D = M.value.length, G = M.value.filter(
          (ne) => A.value.has(ne.node_type)
        ).length;
        Z.nodes = { resolved: G, total: D };
      }
      if (x.value || P.value) {
        const D = oe.value.length, G = oe.value.filter(
          (ne) => E.value.has(ne.filename) || ne.is_download_intent
        ).length;
        Z.models = { resolved: G, total: D };
      }
      if (Z.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const D = d.totalFiles || 1, G = d.completedFiles.length;
        Z.applying = { resolved: G, total: D };
      }
      return Z;
    });
    function ge(Z) {
      $.value = Z;
    }
    function Me() {
      const Z = Y.value.findIndex((D) => D.id === $.value);
      Z > 0 && ($.value = Y.value[Z - 1].id);
    }
    function ce() {
      const Z = Y.value.findIndex((D) => D.id === $.value);
      Z < Y.value.length - 1 && ($.value = Y.value[Z + 1].id);
    }
    async function X() {
      f.value = !0, I.value = null;
      try {
        b.value = await u(n.workflowName);
      } catch (Z) {
        I.value = Z instanceof Error ? Z.message : "Failed to analyze workflow";
      } finally {
        f.value = !1;
      }
    }
    function De() {
      R.value.includes("analysis") || R.value.push("analysis"), z.value || U.value ? $.value = "nodes" : x.value || P.value ? $.value = "models" : $.value = "review";
    }
    function pe(Z) {
      A.value.set(Z, { action: "optional" });
    }
    function Je(Z) {
      A.value.set(Z, { action: "skip" });
    }
    function tt(Z, D) {
      var ne;
      const G = M.value.find((xe) => xe.node_type === Z);
      (ne = G == null ? void 0 : G.options) != null && ne[D] && A.value.set(Z, {
        action: "install",
        package_id: G.options[D].package_id
      });
    }
    function st(Z, D) {
      A.value.set(Z, {
        action: "install",
        package_id: D
      });
    }
    function Te(Z) {
      A.value.delete(Z);
    }
    function Xe(Z) {
      S.value.has(Z) ? S.value.delete(Z) : S.value.add(Z);
    }
    function qe(Z) {
      E.value.set(Z, { action: "optional" });
    }
    function Qe(Z) {
      E.value.set(Z, { action: "skip" });
    }
    function mt(Z, D) {
      var ne;
      const G = ve.value.find((xe) => xe.filename === Z);
      (ne = G == null ? void 0 : G.options) != null && ne[D] && E.value.set(Z, {
        action: "select",
        selected_model: G.options[D].model
      });
    }
    function $e(Z, D, G) {
      E.value.set(Z, {
        action: "download",
        url: D,
        target_path: G
      });
    }
    function je(Z) {
      E.value.delete(Z);
    }
    async function it(Z) {
      try {
        await k(Z);
      } catch (D) {
        I.value = D instanceof Error ? D.message : "Failed to open file location";
      }
    }
    async function Ye() {
      var Z;
      C.value = !0, I.value = null, v(), d.phase = "resolving", $.value = "applying";
      try {
        const D = await g(n.workflowName, A.value, E.value, S.value);
        D.models_to_download && D.models_to_download.length > 0 && p(n.workflowName, D.models_to_download);
        const G = [
          ...D.nodes_to_install || [],
          ...O.value.map((xe) => xe.package.package_id)
        ];
        d.nodesToInstall = [...new Set(G)], d.nodesToInstall.length > 0 && await m(n.workflowName), d.phase = "complete", await w();
        const ne = d.installError || ((Z = d.nodeInstallProgress) == null ? void 0 : Z.completedNodes.some((xe) => !xe.success));
        !d.needsRestart && !ne && setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1500);
      } catch (D) {
        I.value = D instanceof Error ? D.message : "Failed to apply resolution", d.error = I.value, d.phase = "error";
      } finally {
        C.value = !1;
      }
    }
    function ue() {
      i("refresh"), i("restart"), i("close");
    }
    async function J() {
      var D;
      const Z = ((D = d.nodeInstallProgress) == null ? void 0 : D.completedNodes.filter((G) => !G.success).map((G) => G.node_id)) || [];
      if (Z.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: Z.length
        }, d.nodesToInstall = Z, d.nodesInstalled = [], d.installError = void 0;
        try {
          await m(n.workflowName), d.phase = "complete";
        } catch (G) {
          d.error = G instanceof Error ? G.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return Oe(X), (Z, D) => (s(), T(He, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: f.value,
      error: I.value || void 0,
      "fixed-height": !0,
      onClose: D[1] || (D[1] = (G) => i("close"))
    }, {
      body: l(() => [
        f.value && !b.value ? (s(), o("div", Rc, [...D[2] || (D[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : b.value ? (s(), o("div", Mc, [
          _(Ai, {
            steps: Y.value,
            "current-step": $.value,
            "completed-steps": R.value,
            "step-stats": me.value,
            onStepChange: ge
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (s(), o("div", Dc, [
            e("div", Lc, [
              e("div", zc, [
                D[3] || (D[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", Uc, " Found " + a(b.value.stats.total_nodes) + " nodes and " + a(b.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Oc, [
                e("div", Nc, [
                  D[12] || (D[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Ac, [
                    re.value > 0 ? (s(), o("div", Bc, [
                      D[4] || (D[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Fc, a(re.value), 1),
                      D[5] || (D[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : r("", !0),
                    b.value.stats.packages_needing_installation > 0 ? (s(), o("div", Vc, [
                      D[6] || (D[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Wc, a(b.value.stats.packages_needing_installation), 1),
                      D[7] || (D[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : r("", !0),
                    b.value.nodes.ambiguous.length > 0 ? (s(), o("div", Gc, [
                      D[8] || (D[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", jc, a(b.value.nodes.ambiguous.length), 1),
                      D[9] || (D[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : r("", !0),
                    b.value.nodes.unresolved.length > 0 ? (s(), o("div", Kc, [
                      D[10] || (D[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Hc, a(b.value.nodes.unresolved.length), 1),
                      D[11] || (D[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : r("", !0)
                  ])
                ]),
                e("div", qc, [
                  D[23] || (D[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Yc, [
                    e("div", Jc, [
                      D[13] || (D[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Xc, a(b.value.models.resolved.length - b.value.stats.download_intents - b.value.stats.models_with_category_mismatch), 1),
                      D[14] || (D[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.stats.download_intents > 0 ? (s(), o("div", Qc, [
                      D[15] || (D[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Zc, a(b.value.stats.download_intents), 1),
                      D[16] || (D[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : r("", !0),
                    K.value ? (s(), o("div", eu, [
                      D[17] || (D[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", tu, a(le.value.length), 1),
                      D[18] || (D[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : r("", !0),
                    b.value.models.ambiguous.length > 0 ? (s(), o("div", su, [
                      D[19] || (D[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", ou, a(b.value.models.ambiguous.length), 1),
                      D[20] || (D[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : r("", !0),
                    b.value.models.unresolved.length > 0 ? (s(), o("div", nu, [
                      D[21] || (D[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", au, a(b.value.models.unresolved.length), 1),
                      D[22] || (D[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : r("", !0)
                  ])
                ])
              ]),
              F.value ? (s(), o("div", lu, [
                D[24] || (D[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", iu, a(M.value.length + ve.value.length) + " items need your input", 1)
              ])) : U.value ? (s(), o("div", ru, [
                D[25] || (D[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", du, a(b.value.stats.packages_needing_installation) + " package" + a(b.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(b.value.stats.nodes_needing_installation) + " node type" + a(b.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(P.value ? `, ${b.value.stats.download_intents} model${b.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : P.value ? (s(), o("div", cu, [
                D[26] || (D[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", uu, a(b.value.stats.download_intents) + " model" + a(b.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : K.value ? (s(), o("div", mu, [
                D[27] || (D[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", vu, a(le.value.length) + " model" + a(le.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", fu, [...D[28] || (D[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              K.value ? (s(), o("div", pu, [
                D[31] || (D[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", gu, [
                  (s(!0), o(W, null, ae(le.value, (G) => {
                    var ne, xe;
                    return s(), o("div", {
                      key: G.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", hu, a(G.actual_category) + "/" + a((ne = G.model) == null ? void 0 : ne.filename), 1),
                      D[30] || (D[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", yu, a((xe = G.expected_categories) == null ? void 0 : xe[0]) + "/", 1),
                      G.file_path ? (s(), T(ye, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Ve) => it(G.file_path)
                      }, {
                        default: l(() => [...D[29] || (D[29] = [
                          h(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : r("", !0)
                    ]);
                  }), 128))
                ])
              ])) : r("", !0)
            ])
          ])) : r("", !0),
          $.value === "nodes" ? (s(), T(ld, {
            key: 1,
            nodes: M.value,
            "node-choices": A.value,
            "auto-resolved-packages": q.value,
            "skipped-packages": S.value,
            onMarkOptional: pe,
            onSkip: Je,
            onOptionSelected: tt,
            onManualEntry: st,
            onClearChoice: Te,
            onPackageSkip: Xe
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : r("", !0),
          $.value === "models" ? (s(), T(Zd, {
            key: 2,
            models: oe.value,
            "model-choices": E.value,
            onMarkOptional: qe,
            onSkip: Qe,
            onOptionSelected: mt,
            onDownloadUrl: $e,
            onClearChoice: je
          }, null, 8, ["models", "model-choices"])) : r("", !0),
          $.value === "review" ? (s(), o("div", wu, [
            e("div", ku, [
              D[36] || (D[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", bu, [
                e("div", _u, [
                  e("span", $u, a(be.value), 1),
                  D[32] || (D[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Cu, [
                  e("span", xu, a(Ce.value), 1),
                  D[33] || (D[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Su, [
                  e("span", Iu, a(Le.value), 1),
                  D[34] || (D[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", Eu, [
                  e("span", Tu, a(Ue.value), 1),
                  D[35] || (D[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              q.value.length > 0 ? (s(), o("div", Pu, [
                e("h4", Ru, "Node Packages (" + a(q.value.length) + ")", 1),
                e("div", Mu, [
                  (s(!0), o(W, null, ae(q.value, (G) => (s(), o("div", {
                    key: G.package_id,
                    class: "review-item"
                  }, [
                    e("code", Du, a(G.package_id), 1),
                    e("div", Lu, [
                      S.value.has(G.package_id) ? (s(), o("span", Uu, "Skipped")) : (s(), o("span", zu, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : r("", !0),
              M.value.length > 0 ? (s(), o("div", Ou, [
                e("h4", Nu, "Node Choices (" + a(M.value.length) + ")", 1),
                e("div", Au, [
                  (s(!0), o(W, null, ae(M.value, (G) => {
                    var ne, xe, Ve, ft;
                    return s(), o("div", {
                      key: G.node_type,
                      class: "review-item"
                    }, [
                      e("code", Bu, a(G.node_type), 1),
                      e("div", Fu, [
                        A.value.has(G.node_type) ? (s(), o(W, { key: 0 }, [
                          ((ne = A.value.get(G.node_type)) == null ? void 0 : ne.action) === "install" ? (s(), o("span", Vu, a((xe = A.value.get(G.node_type)) == null ? void 0 : xe.package_id), 1)) : ((Ve = A.value.get(G.node_type)) == null ? void 0 : Ve.action) === "optional" ? (s(), o("span", Wu, " Optional ")) : ((ft = A.value.get(G.node_type)) == null ? void 0 : ft.action) === "skip" ? (s(), o("span", Gu, " Skip ")) : r("", !0)
                        ], 64)) : (s(), o("span", ju, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : r("", !0),
              oe.value.length > 0 ? (s(), o("div", Ku, [
                e("h4", Hu, "Models (" + a(oe.value.length) + ")", 1),
                e("div", qu, [
                  (s(!0), o(W, null, ae(oe.value, (G) => {
                    var ne, xe, Ve, ft, Ct, rt, Ot;
                    return s(), o("div", {
                      key: G.filename,
                      class: "review-item"
                    }, [
                      e("code", Yu, a(G.filename), 1),
                      e("div", Ju, [
                        E.value.has(G.filename) ? (s(), o(W, { key: 0 }, [
                          ((ne = E.value.get(G.filename)) == null ? void 0 : ne.action) === "select" ? (s(), o("span", Xu, a((Ve = (xe = E.value.get(G.filename)) == null ? void 0 : xe.selected_model) == null ? void 0 : Ve.filename), 1)) : ((ft = E.value.get(G.filename)) == null ? void 0 : ft.action) === "download" ? (s(), o("span", Qu, " Download ")) : ((Ct = E.value.get(G.filename)) == null ? void 0 : Ct.action) === "optional" ? (s(), o("span", Zu, " Optional ")) : ((rt = E.value.get(G.filename)) == null ? void 0 : rt.action) === "skip" ? (s(), o("span", em, " Skip ")) : ((Ot = E.value.get(G.filename)) == null ? void 0 : Ot.action) === "cancel_download" ? (s(), o("span", tm, " Cancel Download ")) : r("", !0)
                        ], 64)) : G.is_download_intent ? (s(), o("span", sm, " Pending Download ")) : (s(), o("span", om, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : r("", !0),
              ee.value.length === 0 && M.value.length === 0 && oe.value.length === 0 ? (s(), o("div", nm, " No dependencies need resolution. ")) : r("", !0)
            ])
          ])) : r("", !0),
          $.value === "applying" ? (s(), T(Pc, {
            key: 4,
            progress: Se(d),
            onRestart: ue,
            onRetryFailed: J
          }, null, 8, ["progress"])) : r("", !0)
        ])) : r("", !0)
      ]),
      footer: l(() => [
        $.value !== "analysis" && $.value !== "applying" ? (s(), T(ye, {
          key: 0,
          variant: "secondary",
          disabled: C.value,
          onClick: Me
        }, {
          default: l(() => [...D[37] || (D[37] = [
            h(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : r("", !0),
        D[41] || (D[41] = e("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || Se(d).phase === "complete" || Se(d).phase === "error" ? (s(), T(ye, {
          key: 1,
          variant: "secondary",
          onClick: D[0] || (D[0] = (G) => i("close"))
        }, {
          default: l(() => [
            h(a(Se(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : r("", !0),
        $.value === "analysis" ? (s(), T(ye, {
          key: 2,
          variant: "primary",
          disabled: f.value,
          onClick: De
        }, {
          default: l(() => [...D[38] || (D[38] = [
            h(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : r("", !0),
        $.value === "nodes" ? (s(), T(ye, {
          key: 3,
          variant: "primary",
          onClick: ce
        }, {
          default: l(() => [
            h(a(x.value || P.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : r("", !0),
        $.value === "models" ? (s(), T(ye, {
          key: 4,
          variant: "primary",
          onClick: ce
        }, {
          default: l(() => [...D[39] || (D[39] = [
            h(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : r("", !0),
        $.value === "review" ? (s(), T(ye, {
          key: 5,
          variant: "primary",
          disabled: C.value,
          loading: C.value,
          onClick: Ye
        }, {
          default: l(() => [...D[40] || (D[40] = [
            h(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : r("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), lm = /* @__PURE__ */ se(am, [["__scopeId", "data-v-6276cf1d"]]), im = { class: "search-input-wrapper" }, rm = ["value", "placeholder"], dm = /* @__PURE__ */ te({
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
    const n = t, i = c, u = y(null);
    let g;
    function m(d) {
      const v = d.target.value;
      n.debounce > 0 ? (clearTimeout(g), g = window.setTimeout(() => {
        i("update:modelValue", v);
      }, n.debounce)) : i("update:modelValue", v);
    }
    function p() {
      var d;
      i("update:modelValue", ""), i("clear"), (d = u.value) == null || d.focus();
    }
    return Oe(() => {
      n.autoFocus && u.value && u.value.focus();
    }), (d, v) => (s(), o("div", im, [
      e("input", {
        ref_key: "inputRef",
        ref: u,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: m,
        onKeyup: wt(p, ["escape"])
      }, null, 40, rm),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: p,
        title: "Clear search"
      }, " ✕ ")) : r("", !0)
    ]));
  }
}), cm = /* @__PURE__ */ se(dm, [["__scopeId", "data-v-266f857a"]]), um = { class: "search-bar" }, mm = /* @__PURE__ */ te({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, n) => (s(), o("div", um, [
      _(cm, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => c.$emit("update:modelValue", i)),
        onClear: n[1] || (n[1] = (i) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), es = /* @__PURE__ */ se(mm, [["__scopeId", "data-v-3d51bbfd"]]), vm = { class: "section-group" }, fm = {
  key: 0,
  class: "section-content"
}, pm = /* @__PURE__ */ te({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const n = t, i = c, u = y(n.initiallyExpanded);
    function g() {
      n.collapsible && (u.value = !u.value, i("toggle", u.value));
    }
    return (m, p) => (s(), o("section", vm, [
      _(ct, {
        count: t.count,
        clickable: t.collapsible,
        expanded: u.value,
        onClick: g
      }, {
        default: l(() => [
          h(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || u.value ? (s(), o("div", fm, [
        Pe(m.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), Ae = /* @__PURE__ */ se(pm, [["__scopeId", "data-v-c48e33ed"]]), gm = { class: "item-header" }, hm = {
  key: 0,
  class: "item-icon"
}, ym = { class: "item-info" }, wm = {
  key: 0,
  class: "item-title"
}, km = {
  key: 1,
  class: "item-subtitle"
}, bm = {
  key: 0,
  class: "item-details"
}, _m = {
  key: 1,
  class: "item-actions"
}, $m = /* @__PURE__ */ te({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, i = L(() => n.status ? `status-${n.status}` : "");
    return (u, g) => (s(), o("div", {
      class: fe(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: g[0] || (g[0] = (m) => t.clickable && u.$emit("click"))
    }, [
      e("div", gm, [
        u.$slots.icon ? (s(), o("span", hm, [
          Pe(u.$slots, "icon", {}, void 0, !0)
        ])) : r("", !0),
        e("div", ym, [
          u.$slots.title ? (s(), o("div", wm, [
            Pe(u.$slots, "title", {}, void 0, !0)
          ])) : r("", !0),
          u.$slots.subtitle ? (s(), o("div", km, [
            Pe(u.$slots, "subtitle", {}, void 0, !0)
          ])) : r("", !0)
        ])
      ]),
      u.$slots.details ? (s(), o("div", bm, [
        Pe(u.$slots, "details", {}, void 0, !0)
      ])) : r("", !0),
      u.$slots.actions ? (s(), o("div", _m, [
        Pe(u.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), ot = /* @__PURE__ */ se($m, [["__scopeId", "data-v-cc435e0e"]]), Cm = { class: "loading-state" }, xm = { class: "loading-message" }, Sm = /* @__PURE__ */ te({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, n) => (s(), o("div", Cm, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", xm, a(t.message), 1)
    ]));
  }
}), zt = /* @__PURE__ */ se(Sm, [["__scopeId", "data-v-ad8436c9"]]), Im = { class: "error-state" }, Em = { class: "error-message" }, Tm = /* @__PURE__ */ te({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, n) => (s(), o("div", Im, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Em, a(t.message), 1),
      t.retry ? (s(), T(Q, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => c.$emit("retry"))
      }, {
        default: l(() => [...n[1] || (n[1] = [
          h(" Retry ", -1)
        ])]),
        _: 1
      })) : r("", !0)
    ]));
  }
}), Ut = /* @__PURE__ */ se(Tm, [["__scopeId", "data-v-5397be48"]]), Pm = /* @__PURE__ */ te({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getWorkflows: u } = Fe();
    no();
    const g = y([]), m = y(!1), p = y(null), d = y(""), v = y(!0), w = y(!1), k = y(!1), b = y(!1), f = y(null), C = L(
      () => g.value.filter((O) => O.status === "broken")
    ), I = L(
      () => g.value.filter((O) => O.status === "new")
    ), $ = L(
      () => g.value.filter((O) => O.status === "modified")
    ), R = L(
      () => g.value.filter((O) => O.status === "synced")
    ), A = L(() => {
      if (!d.value.trim()) return g.value;
      const O = d.value.toLowerCase();
      return g.value.filter((N) => N.name.toLowerCase().includes(O));
    }), E = L(
      () => C.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), S = L(
      () => I.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), Y = L(
      () => $.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), F = L(
      () => R.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), z = L(
      () => w.value ? F.value : F.value.slice(0, 5)
    );
    async function x(O = !1) {
      m.value = !0, p.value = null;
      try {
        g.value = await u(O);
      } catch (N) {
        p.value = N instanceof Error ? N.message : "Failed to load workflows";
      } finally {
        m.value = !1;
      }
    }
    c({ loadWorkflows: x });
    function P(O) {
      f.value = O, k.value = !0;
    }
    function U(O) {
      f.value = O, b.value = !0;
    }
    function re() {
      i("refresh");
    }
    async function le() {
      b.value = !1, await x(!0);
    }
    async function K() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ee(O) {
      const N = [];
      return O.missing_nodes > 0 && N.push(`${O.missing_nodes} missing node${O.missing_nodes > 1 ? "s" : ""}`), O.missing_models > 0 && N.push(`${O.missing_models} missing model${O.missing_models > 1 ? "s" : ""}`), O.models_with_category_mismatch && O.models_with_category_mismatch > 0 && N.push(`${O.models_with_category_mismatch} model${O.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), O.pending_downloads && O.pending_downloads > 0 && N.push(`${O.pending_downloads} pending download${O.pending_downloads > 1 ? "s" : ""}`), N.length > 0 ? N.join(", ") : "Has issues";
    }
    function q(O) {
      const N = O.sync_state === "new" ? "New" : O.sync_state === "modified" ? "Modified" : O.sync_state === "synced" ? "Synced" : O.sync_state;
      return O.has_path_sync_issues && O.models_needing_path_sync && O.models_needing_path_sync > 0 ? `${O.models_needing_path_sync} model path${O.models_needing_path_sync > 1 ? "s" : ""} need${O.models_needing_path_sync === 1 ? "s" : ""} sync` : N || "Unknown";
    }
    return Oe(x), (O, N) => (s(), o(W, null, [
      _(nt, null, {
        header: l(() => [
          _(at, { title: "WORKFLOWS" })
        ]),
        search: l(() => [
          _(es, {
            modelValue: d.value,
            "onUpdate:modelValue": N[0] || (N[0] = (M) => d.value = M),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          m.value ? (s(), T(zt, {
            key: 0,
            message: "Loading workflows..."
          })) : p.value ? (s(), T(Ut, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: x
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            E.value.length ? (s(), T(Ae, {
              key: 0,
              title: "BROKEN",
              count: E.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(E.value, (M) => (s(), T(ot, {
                  key: M.name,
                  status: "broken"
                }, {
                  icon: l(() => [...N[7] || (N[7] = [
                    h("⚠", -1)
                  ])]),
                  title: l(() => [
                    h(a(M.name), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(ee(M)), 1)
                  ]),
                  actions: l(() => [
                    _(Q, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ve) => U(M.name)
                    }, {
                      default: l(() => [...N[8] || (N[8] = [
                        h(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => P(M.name)
                    }, {
                      default: l(() => [...N[9] || (N[9] = [
                        h(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            S.value.length ? (s(), T(Ae, {
              key: 1,
              title: "NEW",
              count: S.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(S.value, (M) => (s(), T(ot, {
                  key: M.name,
                  status: M.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: l(() => [
                    h(a(M.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: l(() => [
                    h(a(M.name), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(q(M)), 1)
                  ]),
                  actions: l(() => [
                    _(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => P(M.name)
                    }, {
                      default: l(() => [...N[10] || (N[10] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            Y.value.length ? (s(), T(Ae, {
              key: 2,
              title: "MODIFIED",
              count: Y.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(Y.value, (M) => (s(), T(ot, {
                  key: M.name,
                  status: M.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: l(() => [...N[11] || (N[11] = [
                    h("⚡", -1)
                  ])]),
                  title: l(() => [
                    h(a(M.name), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(q(M)), 1)
                  ]),
                  actions: l(() => [
                    _(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => P(M.name)
                    }, {
                      default: l(() => [...N[12] || (N[12] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            F.value.length ? (s(), T(Ae, {
              key: 3,
              title: "SYNCED",
              count: F.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: N[2] || (N[2] = (M) => v.value = M)
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(z.value, (M) => (s(), T(ot, {
                  key: M.name,
                  status: M.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: l(() => [
                    h(a(M.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: l(() => [
                    h(a(M.name), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(q(M)), 1)
                  ]),
                  actions: l(() => [
                    _(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => P(M.name)
                    }, {
                      default: l(() => [...N[13] || (N[13] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !w.value && F.value.length > 5 ? (s(), T(Q, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: N[1] || (N[1] = (M) => w.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: l(() => [
                    h(" View all " + a(F.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : r("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : r("", !0),
            A.value.length ? r("", !0) : (s(), T(_t, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k.value && f.value ? (s(), T(Ii, {
        key: 0,
        "workflow-name": f.value,
        onClose: N[3] || (N[3] = (M) => k.value = !1),
        onResolve: N[4] || (N[4] = (M) => U(f.value)),
        onRefresh: N[5] || (N[5] = (M) => i("refresh"))
      }, null, 8, ["workflow-name"])) : r("", !0),
      b.value && f.value ? (s(), T(lm, {
        key: 1,
        "workflow-name": f.value,
        onClose: le,
        onInstall: re,
        onRefresh: N[6] || (N[6] = (M) => i("refresh")),
        onRestart: K
      }, null, 8, ["workflow-name"])) : r("", !0)
    ], 64));
  }
}), Rm = /* @__PURE__ */ se(Pm, [["__scopeId", "data-v-fa3f076e"]]), Mm = /* @__PURE__ */ te({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: fe(["summary-bar", t.variant])
    }, [
      Pe(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ps = /* @__PURE__ */ se(Mm, [["__scopeId", "data-v-ccb7816e"]]), Dm = {
  key: 0,
  class: "model-details"
}, Lm = { class: "detail-section" }, zm = { class: "detail-row" }, Um = { class: "detail-value mono" }, Om = { class: "detail-row" }, Nm = { class: "detail-value mono" }, Am = { class: "detail-row" }, Bm = { class: "detail-value mono" }, Fm = { class: "detail-row" }, Vm = { class: "detail-value" }, Wm = { class: "detail-row" }, Gm = { class: "detail-value" }, jm = { class: "detail-row" }, Km = { class: "detail-value" }, Hm = { class: "detail-section" }, qm = { class: "section-header" }, Ym = {
  key: 0,
  class: "locations-list"
}, Jm = { class: "location-path mono" }, Xm = {
  key: 0,
  class: "location-modified"
}, Qm = ["onClick"], Zm = {
  key: 1,
  class: "empty-state"
}, ev = { class: "detail-section" }, tv = { class: "section-header" }, sv = {
  key: 0,
  class: "sources-list"
}, ov = { class: "source-type" }, nv = ["href"], av = ["disabled", "onClick"], lv = {
  key: 1,
  class: "empty-state"
}, iv = { class: "add-source-form" }, rv = ["disabled"], dv = {
  key: 2,
  class: "source-error"
}, cv = {
  key: 3,
  class: "source-success"
}, uv = /* @__PURE__ */ te({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: i, addModelSource: u, removeModelSource: g, openFileLocation: m } = Fe(), p = y(null), d = y(!0), v = y(null), w = y(""), k = y(!1), b = y(null), f = y(null), C = y(null), I = y(null);
    let $ = null;
    function R(x, P = "success", U = 2e3) {
      $ && clearTimeout($), I.value = { message: x, type: P }, $ = setTimeout(() => {
        I.value = null;
      }, U);
    }
    function A(x) {
      if (!x) return "Unknown";
      const P = 1024 * 1024 * 1024, U = 1024 * 1024;
      return x >= P ? `${(x / P).toFixed(1)} GB` : x >= U ? `${(x / U).toFixed(0)} MB` : `${(x / 1024).toFixed(0)} KB`;
    }
    function E(x) {
      navigator.clipboard.writeText(x), R("Copied to clipboard!");
    }
    async function S(x) {
      try {
        await m(x), R("Opening file location...");
      } catch {
        R("Failed to open location", "error");
      }
    }
    async function Y() {
      if (!(!w.value.trim() || !p.value)) {
        k.value = !0, f.value = null, C.value = null;
        try {
          await u(p.value.hash, w.value.trim()), C.value = "Source added successfully!", w.value = "", await z();
        } catch (x) {
          f.value = x instanceof Error ? x.message : "Failed to add source";
        } finally {
          k.value = !1;
        }
      }
    }
    async function F(x) {
      if (p.value) {
        b.value = x, f.value = null, C.value = null;
        try {
          await g(p.value.hash, x), R("Source removed"), await z();
        } catch (P) {
          f.value = P instanceof Error ? P.message : "Failed to remove source";
        } finally {
          b.value = null;
        }
      }
    }
    async function z() {
      d.value = !0, v.value = null;
      try {
        p.value = await i(n.identifier);
      } catch (x) {
        v.value = x instanceof Error ? x.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return Oe(z), (x, P) => {
      var U;
      return s(), o(W, null, [
        _(He, {
          title: `Model Details: ${((U = p.value) == null ? void 0 : U.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: v.value,
          onClose: P[5] || (P[5] = (re) => x.$emit("close"))
        }, {
          body: l(() => {
            var re, le, K, ee;
            return [
              p.value ? (s(), o("div", Dm, [
                e("section", Lm, [
                  e("div", zm, [
                    P[6] || (P[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", Um, a(p.value.hash || "Not computed"), 1),
                    p.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: P[0] || (P[0] = (q) => E(p.value.hash))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", Om, [
                    P[7] || (P[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", Nm, a(p.value.blake3 || "Not computed"), 1),
                    p.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: P[1] || (P[1] = (q) => E(p.value.blake3))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", Am, [
                    P[8] || (P[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", Bm, a(p.value.sha256 || "Not computed"), 1),
                    p.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: P[2] || (P[2] = (q) => E(p.value.sha256))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", Fm, [
                    P[9] || (P[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Vm, a(A(p.value.size)), 1)
                  ]),
                  e("div", Wm, [
                    P[10] || (P[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Gm, a(p.value.category), 1)
                  ]),
                  e("div", jm, [
                    P[11] || (P[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Km, a(p.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Hm, [
                  e("h4", qm, "Locations (" + a(((re = p.value.locations) == null ? void 0 : re.length) || 0) + ")", 1),
                  (le = p.value.locations) != null && le.length ? (s(), o("div", Ym, [
                    (s(!0), o(W, null, ae(p.value.locations, (q, O) => (s(), o("div", {
                      key: O,
                      class: "location-item"
                    }, [
                      e("span", Jm, a(q.path), 1),
                      q.modified ? (s(), o("span", Xm, "Modified: " + a(q.modified), 1)) : r("", !0),
                      q.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (N) => S(q.path)
                      }, " Open File Location ", 8, Qm)) : r("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", Zm, "No locations found"))
                ]),
                e("section", ev, [
                  e("h4", tv, "Download Sources (" + a(((K = p.value.sources) == null ? void 0 : K.length) || 0) + ")", 1),
                  (ee = p.value.sources) != null && ee.length ? (s(), o("div", sv, [
                    (s(!0), o(W, null, ae(p.value.sources, (q, O) => (s(), o("div", {
                      key: O,
                      class: "source-item"
                    }, [
                      e("span", ov, a(q.type) + ":", 1),
                      e("a", {
                        href: q.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(q.url), 9, nv),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: b.value === q.url,
                        onClick: (N) => F(q.url)
                      }, a(b.value === q.url ? "..." : "×"), 9, av)
                    ]))), 128))
                  ])) : (s(), o("div", lv, " No download sources configured ")),
                  e("div", iv, [
                    Re(e("input", {
                      "onUpdate:modelValue": P[3] || (P[3] = (q) => w.value = q),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [kt, w.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !w.value.trim() || k.value,
                      onClick: Y
                    }, a(k.value ? "Adding..." : "Add Source"), 9, rv)
                  ]),
                  f.value ? (s(), o("p", dv, a(f.value), 1)) : r("", !0),
                  C.value ? (s(), o("p", cv, a(C.value), 1)) : r("", !0)
                ])
              ])) : r("", !0)
            ];
          }),
          footer: l(() => [
            e("button", {
              class: "btn-secondary",
              onClick: P[4] || (P[4] = (re) => x.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), T(et, { to: "body" }, [
          I.value ? (s(), o("div", {
            key: 0,
            class: fe(["toast", I.value.type])
          }, a(I.value.message), 3)) : r("", !0)
        ]))
      ], 64);
    };
  }
}), Vs = /* @__PURE__ */ se(uv, [["__scopeId", "data-v-f15cbb56"]]), mv = /* @__PURE__ */ te({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: i, getStatus: u } = Fe(), g = y([]), m = y([]), p = y("production"), d = y(!1), v = y(null), w = y(""), k = y(!1), b = y(null);
    function f() {
      k.value = !1, n("navigate", "model-index");
    }
    const C = L(
      () => g.value.reduce((z, x) => z + (x.size || 0), 0)
    ), I = L(() => {
      if (!w.value.trim()) return g.value;
      const z = w.value.toLowerCase();
      return g.value.filter((x) => x.filename.toLowerCase().includes(z));
    }), $ = L(() => {
      if (!w.value.trim()) return m.value;
      const z = w.value.toLowerCase();
      return m.value.filter((x) => x.filename.toLowerCase().includes(z));
    }), R = L(() => {
      const z = {};
      for (const P of I.value) {
        const U = P.type || "other";
        z[U] || (z[U] = []), z[U].push(P);
      }
      const x = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(z).sort(([P], [U]) => {
        const re = x.indexOf(P), le = x.indexOf(U);
        return re >= 0 && le >= 0 ? re - le : re >= 0 ? -1 : le >= 0 ? 1 : P.localeCompare(U);
      }).map(([P, U]) => ({ type: P, models: U }));
    });
    function A(z) {
      if (!z) return "Unknown";
      const x = z / (1024 * 1024);
      return x >= 1024 ? `${(x / 1024).toFixed(1)} GB` : `${x.toFixed(0)} MB`;
    }
    function E(z) {
      b.value = z.hash || z.filename;
    }
    function S(z) {
      n("navigate", "model-index");
    }
    function Y(z) {
      alert(`Download functionality not yet implemented for ${z}`);
    }
    async function F() {
      d.value = !0, v.value = null;
      try {
        const z = await i();
        g.value = z, m.value = [];
        const x = await u();
        p.value = x.environment || "production";
      } catch (z) {
        v.value = z instanceof Error ? z.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return Oe(F), (z, x) => (s(), o(W, null, [
      _(nt, null, {
        header: l(() => [
          _(at, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (P) => k.value = !0)
          })
        ]),
        search: l(() => [
          _(es, {
            modelValue: w.value,
            "onUpdate:modelValue": x[1] || (x[1] = (P) => w.value = P),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          d.value ? (s(), T(zt, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (s(), T(Ut, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            g.value.length ? (s(), T(ps, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                h(" Total: " + a(g.value.length) + " models • " + a(A(C.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : r("", !0),
            (s(!0), o(W, null, ae(R.value, (P) => (s(), T(Ae, {
              key: P.type,
              title: P.type.toUpperCase(),
              count: P.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(P.models, (U) => (s(), T(ot, {
                  key: U.hash || U.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...x[4] || (x[4] = [
                    h("📦", -1)
                  ])]),
                  title: l(() => [
                    h(a(U.filename), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(A(U.size)), 1)
                  ]),
                  details: l(() => [
                    _(Ge, {
                      label: "Used by:",
                      value: (U.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    _(Ge, {
                      label: "Path:",
                      value: U.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    _(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (re) => E(U)
                    }, {
                      default: l(() => [...x[5] || (x[5] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            $.value.length ? (s(), T(Ae, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae($.value, (P) => (s(), T(ot, {
                  key: P.filename,
                  status: "broken"
                }, {
                  icon: l(() => [...x[6] || (x[6] = [
                    h("⚠", -1)
                  ])]),
                  title: l(() => [
                    h(a(P.filename), 1)
                  ]),
                  subtitle: l(() => [...x[7] || (x[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: l(() => {
                    var U;
                    return [
                      _(Ge, {
                        label: "Required by:",
                        value: ((U = P.workflow_names) == null ? void 0 : U.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: l(() => [
                    _(Q, {
                      variant: "primary",
                      size: "sm",
                      onClick: (U) => Y(P.filename)
                    }, {
                      default: l(() => [...x[8] || (x[8] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (U) => S(P.filename)
                    }, {
                      default: l(() => [...x[9] || (x[9] = [
                        h(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !I.value.length && !$.value.length ? (s(), T(_t, {
              key: 2,
              icon: "📭",
              message: w.value ? `No models match '${w.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      _($t, {
        show: k.value,
        title: "About Environment Models",
        onClose: x[2] || (x[2] = (P) => k.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            x[10] || (x[10] = h(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(p.value) + '"', 1),
            x[11] || (x[11] = h(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: l(() => [
          _(Q, {
            variant: "primary",
            onClick: f
          }, {
            default: l(() => [...x[12] || (x[12] = [
              h(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b.value ? (s(), T(Vs, {
        key: 0,
        identifier: b.value,
        onClose: x[3] || (x[3] = (P) => b.value = null)
      }, null, 8, ["identifier"])) : r("", !0)
    ], 64));
  }
}), vv = /* @__PURE__ */ se(mv, [["__scopeId", "data-v-cb4f12b3"]]), fv = {
  key: 0,
  class: "indexing-progress"
}, pv = { class: "progress-info" }, gv = { class: "progress-label" }, hv = { class: "progress-count" }, yv = { class: "progress-bar" }, wv = { class: "modal-content" }, kv = { class: "modal-header" }, bv = { class: "modal-body" }, _v = { class: "input-group" }, $v = { class: "current-path" }, Cv = { class: "input-group" }, xv = { class: "modal-footer" }, Sv = { class: "modal-content" }, Iv = { class: "modal-header" }, Ev = { class: "modal-body" }, Tv = { class: "input-group" }, Pv = { class: "input-group" }, Rv = { class: "modal-footer" }, Mv = /* @__PURE__ */ te({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: i,
      getModelsDirectory: u,
      setModelsDirectory: g
    } = Fe(), { addToQueue: m } = fs(), p = c, d = y([]), v = y(!1), w = y(!1), k = y(null), b = y(""), f = y(!1), C = y(null), I = y(!1), $ = y(null), R = y(""), A = y(!1), E = y(!1), S = y(""), Y = y(""), F = y(null), z = L(
      () => d.value.reduce((N, M) => N + (M.size || 0), 0)
    ), x = L(() => {
      if (!b.value.trim()) return d.value;
      const N = b.value.toLowerCase();
      return d.value.filter((M) => {
        const ve = M, oe = M.sha256 || ve.sha256_hash || "";
        return M.filename.toLowerCase().includes(N) || oe.toLowerCase().includes(N);
      });
    }), P = L(() => {
      const N = {};
      for (const ve of x.value) {
        const oe = ve.type || "other";
        N[oe] || (N[oe] = []), N[oe].push(ve);
      }
      const M = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(N).sort(([ve], [oe]) => {
        const be = M.indexOf(ve), Ce = M.indexOf(oe);
        return be >= 0 && Ce >= 0 ? be - Ce : be >= 0 ? -1 : Ce >= 0 ? 1 : ve.localeCompare(oe);
      }).map(([ve, oe]) => ({ type: ve, models: oe }));
    });
    function U(N) {
      if (!N) return "Unknown";
      const M = 1024 * 1024 * 1024, ve = 1024 * 1024;
      return N >= M ? `${(N / M).toFixed(1)} GB` : N >= ve ? `${(N / ve).toFixed(0)} MB` : `${(N / 1024).toFixed(0)} KB`;
    }
    function re(N) {
      C.value = N.hash || N.filename;
    }
    async function le() {
      w.value = !0, k.value = null;
      try {
        const N = await i();
        await q(), N.changes > 0 && console.log(`Scan complete: ${N.changes} changes detected`);
      } catch (N) {
        k.value = N instanceof Error ? N.message : "Failed to scan models";
      } finally {
        w.value = !1;
      }
    }
    async function K() {
      if (R.value.trim()) {
        A.value = !0, k.value = null;
        try {
          const N = await g(R.value.trim());
          $.value = N.path, I.value = !1, R.value = "", await q(), console.log(`Directory changed: ${N.models_indexed} models indexed`), p("refresh");
        } catch (N) {
          k.value = N instanceof Error ? N.message : "Failed to change directory";
        } finally {
          A.value = !1;
        }
      }
    }
    function ee() {
      if (!S.value.trim() || !Y.value.trim()) return;
      const N = Y.value.split("/").pop() || "model.safetensors";
      m([{
        workflow: "__manual__",
        filename: N,
        url: S.value.trim(),
        targetPath: Y.value.trim()
      }]), S.value = "", Y.value = "", E.value = !1;
    }
    async function q() {
      v.value = !0, k.value = null;
      try {
        d.value = await n();
      } catch (N) {
        k.value = N instanceof Error ? N.message : "Failed to load workspace models";
      } finally {
        v.value = !1;
      }
    }
    async function O() {
      try {
        const N = await u();
        $.value = N.path;
      } catch {
      }
    }
    return Oe(() => {
      q(), O();
    }), (N, M) => (s(), o(W, null, [
      _(nt, null, {
        header: l(() => [
          _(at, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: M[2] || (M[2] = (ve) => f.value = !0)
          }, {
            actions: l(() => [
              _(Q, {
                variant: "primary",
                size: "sm",
                disabled: w.value,
                onClick: le
              }, {
                default: l(() => [
                  h(a(w.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              _(Q, {
                variant: "primary",
                size: "sm",
                onClick: M[0] || (M[0] = (ve) => I.value = !0)
              }, {
                default: l(() => [...M[15] || (M[15] = [
                  h(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              _(Q, {
                variant: "primary",
                size: "sm",
                onClick: M[1] || (M[1] = (ve) => E.value = !0)
              }, {
                default: l(() => [...M[16] || (M[16] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  h(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          F.value ? (s(), o("div", fv, [
            e("div", pv, [
              e("span", gv, a(F.value.message), 1),
              e("span", hv, a(F.value.current) + "/" + a(F.value.total), 1)
            ]),
            e("div", yv, [
              e("div", {
                class: "progress-fill",
                style: Lt({ width: `${F.value.current / F.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : r("", !0),
          _(es, {
            modelValue: b.value,
            "onUpdate:modelValue": M[3] || (M[3] = (ve) => b.value = ve),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          v.value || F.value ? (s(), T(zt, {
            key: 0,
            message: F.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : k.value ? (s(), T(Ut, {
            key: 1,
            message: k.value,
            retry: !0,
            onRetry: q
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            d.value.length ? (s(), T(ps, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                h(" Total: " + a(d.value.length) + " models • " + a(U(z.value)), 1)
              ]),
              _: 1
            })) : r("", !0),
            (s(!0), o(W, null, ae(P.value, (ve) => (s(), T(Ae, {
              key: ve.type,
              title: ve.type.toUpperCase(),
              count: ve.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(ve.models, (oe) => (s(), T(ot, {
                  key: oe.sha256 || oe.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...M[17] || (M[17] = [
                    h("📦", -1)
                  ])]),
                  title: l(() => [
                    h(a(oe.filename), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(U(oe.size)), 1)
                  ]),
                  details: l(() => [
                    _(Ge, {
                      label: "Hash:",
                      value: oe.hash ? oe.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    _(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (be) => re(oe)
                    }, {
                      default: l(() => [...M[18] || (M[18] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            x.value.length ? r("", !0) : (s(), T(_t, {
              key: 1,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      _($t, {
        show: f.value,
        title: "About Workspace Model Index",
        onClose: M[4] || (M[4] = (ve) => f.value = !1)
      }, {
        content: l(() => [...M[19] || (M[19] = [
          e("p", null, [
            h(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            h(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      C.value ? (s(), T(Vs, {
        key: 0,
        identifier: C.value,
        onClose: M[5] || (M[5] = (ve) => C.value = null)
      }, null, 8, ["identifier"])) : r("", !0),
      (s(), T(et, { to: "body" }, [
        I.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: M[9] || (M[9] = Be((ve) => I.value = !1, ["self"]))
        }, [
          e("div", wv, [
            e("div", kv, [
              M[20] || (M[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: M[6] || (M[6] = (ve) => I.value = !1)
              }, "✕")
            ]),
            e("div", bv, [
              e("div", _v, [
                M[21] || (M[21] = e("label", null, "Current Directory", -1)),
                e("code", $v, a($.value || "Not set"), 1)
              ]),
              e("div", Cv, [
                M[22] || (M[22] = e("label", null, "New Directory Path", -1)),
                _(bt, {
                  modelValue: R.value,
                  "onUpdate:modelValue": M[7] || (M[7] = (ve) => R.value = ve),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              M[23] || (M[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", xv, [
              _(ye, {
                variant: "secondary",
                onClick: M[8] || (M[8] = (ve) => I.value = !1)
              }, {
                default: l(() => [...M[24] || (M[24] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              _(ye, {
                variant: "primary",
                disabled: !R.value.trim() || A.value,
                loading: A.value,
                onClick: K
              }, {
                default: l(() => [
                  h(a(A.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : r("", !0)
      ])),
      (s(), T(et, { to: "body" }, [
        E.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: M[14] || (M[14] = Be((ve) => E.value = !1, ["self"]))
        }, [
          e("div", Sv, [
            e("div", Iv, [
              M[25] || (M[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: M[10] || (M[10] = (ve) => E.value = !1)
              }, "✕")
            ]),
            e("div", Ev, [
              e("div", Tv, [
                M[26] || (M[26] = e("label", null, "Download URL", -1)),
                _(bt, {
                  modelValue: S.value,
                  "onUpdate:modelValue": M[11] || (M[11] = (ve) => S.value = ve),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", Pv, [
                M[27] || (M[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                _(bt, {
                  modelValue: Y.value,
                  "onUpdate:modelValue": M[12] || (M[12] = (ve) => Y.value = ve),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              M[28] || (M[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", Rv, [
              _(ye, {
                variant: "secondary",
                onClick: M[13] || (M[13] = (ve) => E.value = !1)
              }, {
                default: l(() => [...M[29] || (M[29] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              _(ye, {
                variant: "primary",
                disabled: !S.value.trim() || !Y.value.trim(),
                onClick: ee
              }, {
                default: l(() => [...M[30] || (M[30] = [
                  h(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : r("", !0)
      ]))
    ], 64));
  }
}), Dv = /* @__PURE__ */ se(Mv, [["__scopeId", "data-v-73b78d84"]]), Lv = { class: "node-details" }, zv = { class: "status-row" }, Uv = {
  key: 0,
  class: "detail-row"
}, Ov = { class: "value" }, Nv = { class: "detail-row" }, Av = { class: "value" }, Bv = {
  key: 1,
  class: "detail-row"
}, Fv = { class: "value mono" }, Vv = {
  key: 2,
  class: "detail-row"
}, Wv = ["href"], Gv = {
  key: 3,
  class: "detail-row"
}, jv = { class: "value mono small" }, Kv = { class: "detail-row" }, Hv = {
  key: 0,
  class: "value"
}, qv = {
  key: 1,
  class: "workflow-list"
}, Yv = /* @__PURE__ */ te({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, i = c, u = L(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), g = L(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), m = L(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (p, d) => (s(), T(He, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (v) => i("close"))
    }, {
      body: l(() => [
        e("div", Lv, [
          e("div", zv, [
            d[2] || (d[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: fe(["status-badge", u.value])
            }, a(g.value), 3)
          ]),
          t.node.version ? (s(), o("div", Uv, [
            d[3] || (d[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", Ov, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : r("", !0),
          e("div", Nv, [
            d[4] || (d[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", Av, a(m.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", Bv, [
            d[5] || (d[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", Fv, a(t.node.registry_id), 1)
          ])) : r("", !0),
          t.node.repository ? (s(), o("div", Vv, [
            d[7] || (d[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              h(a(t.node.repository) + " ", 1),
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
            ], 8, Wv)
          ])) : r("", !0),
          t.node.download_url ? (s(), o("div", Gv, [
            d[8] || (d[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", jv, a(t.node.download_url), 1)
          ])) : r("", !0),
          d[10] || (d[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Kv, [
            d[9] || (d[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", Hv, " Not used in any workflows ")) : (s(), o("div", qv, [
              (s(!0), o(W, null, ae(t.node.used_in_workflows, (v) => (s(), o("span", {
                key: v,
                class: "workflow-tag"
              }, a(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: l(() => [
        _(ye, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (v) => i("close"))
        }, {
          default: l(() => [...d[11] || (d[11] = [
            h(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Jv = /* @__PURE__ */ se(Yv, [["__scopeId", "data-v-b342f626"]]), Xv = { class: "dialog-message" }, Qv = {
  key: 0,
  class: "dialog-details"
}, Zv = {
  key: 1,
  class: "dialog-warning"
}, ef = /* @__PURE__ */ te({
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
    return (c, n) => (s(), T(He, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (i) => c.$emit("cancel"))
    }, {
      body: l(() => [
        e("p", Xv, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", Qv, [
          (s(!0), o(W, null, ae(t.details, (i, u) => (s(), o("div", {
            key: u,
            class: "detail-item"
          }, " • " + a(i), 1))), 128))
        ])) : r("", !0),
        t.warning ? (s(), o("p", Zv, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          h(" " + a(t.warning), 1)
        ])) : r("", !0)
      ]),
      footer: l(() => [
        _(ye, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (i) => c.$emit("cancel"))
        }, {
          default: l(() => [
            h(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), T(ye, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (i) => c.$emit("secondary"))
        }, {
          default: l(() => [
            h(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : r("", !0),
        _(ye, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (i) => c.$emit("confirm"))
        }, {
          default: l(() => [
            h(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Ws = /* @__PURE__ */ se(ef, [["__scopeId", "data-v-3670b9f5"]]), tf = { class: "mismatch-warning" }, sf = { class: "version-mismatch" }, of = { class: "version-actual" }, nf = { class: "version-expected" }, af = { key: 0 }, lf = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, rf = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, df = /* @__PURE__ */ te({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getNodes: u, trackNodeAsDev: g, installNode: m, uninstallNode: p } = Fe(), d = y({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), v = y(!1), w = y(null), k = y(""), b = y(!1), f = y(null), C = y(null), I = L(() => {
      if (!k.value.trim()) return d.value.nodes;
      const le = k.value.toLowerCase();
      return d.value.nodes.filter(
        (K) => {
          var ee, q;
          return K.name.toLowerCase().includes(le) || ((ee = K.description) == null ? void 0 : ee.toLowerCase().includes(le)) || ((q = K.repository) == null ? void 0 : q.toLowerCase().includes(le));
        }
      );
    }), $ = L(
      () => I.value.filter((le) => le.installed && le.tracked)
    ), R = L(
      () => I.value.filter((le) => !le.installed && le.tracked)
    ), A = L(
      () => I.value.filter((le) => le.installed && !le.tracked)
    );
    function E(le) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[le] || le;
    }
    const S = L(() => n.versionMismatches.length > 0);
    function Y(le) {
      return !le.used_in_workflows || le.used_in_workflows.length === 0 ? "Not used in any workflows" : le.used_in_workflows.length === 1 ? le.used_in_workflows[0] : `${le.used_in_workflows.length} workflows`;
    }
    function F(le) {
      f.value = le;
    }
    function z() {
      i("open-node-manager");
    }
    function x(le) {
      C.value = {
        title: "Track as Development Node",
        message: `Track "${le}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            v.value = !0;
            const K = await g(le);
            K.status === "success" ? (i("toast", `✓ Node "${le}" tracked as development`, "success"), await re()) : i("toast", `Failed to track node: ${K.message || "Unknown error"}`, "error");
          } catch (K) {
            i("toast", `Error tracking node: ${K instanceof Error ? K.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function P(le) {
      C.value = {
        title: "Remove Untracked Node",
        message: `Remove "${le}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          C.value = null;
          try {
            v.value = !0;
            const K = await p(le);
            K.status === "success" ? (i("toast", `✓ Node "${le}" removed`, "success"), await re()) : i("toast", `Failed to remove node: ${K.message || "Unknown error"}`, "error");
          } catch (K) {
            i("toast", `Error removing node: ${K instanceof Error ? K.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function U(le) {
      C.value = {
        title: "Install Missing Node",
        message: `Install "${le}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            v.value = !0;
            const K = await m(le);
            K.status === "success" ? (i("toast", `✓ Node "${le}" installed`, "success"), await re()) : i("toast", `Failed to install node: ${K.message || "Unknown error"}`, "error");
          } catch (K) {
            i("toast", `Error installing node: ${K instanceof Error ? K.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    async function re() {
      v.value = !0, w.value = null;
      try {
        d.value = await u();
      } catch (le) {
        w.value = le instanceof Error ? le.message : "Failed to load nodes";
      } finally {
        v.value = !1;
      }
    }
    return Oe(re), (le, K) => (s(), o(W, null, [
      _(nt, null, {
        header: l(() => [
          _(at, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: K[0] || (K[0] = (ee) => b.value = !0)
          }, {
            actions: l(() => [
              _(Q, {
                variant: "primary",
                size: "sm",
                onClick: z
              }, {
                default: l(() => [...K[7] || (K[7] = [
                  h(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          _(es, {
            modelValue: k.value,
            "onUpdate:modelValue": K[1] || (K[1] = (ee) => k.value = ee),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          v.value ? (s(), T(zt, {
            key: 0,
            message: "Loading nodes..."
          })) : w.value ? (s(), T(Ut, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: re
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            d.value.total_count ? (s(), T(ps, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                h(a(d.value.installed_count) + " installed ", 1),
                d.value.missing_count ? (s(), o(W, { key: 0 }, [
                  h(" • " + a(d.value.missing_count) + " missing", 1)
                ], 64)) : r("", !0),
                d.value.untracked_count ? (s(), o(W, { key: 1 }, [
                  h(" • " + a(d.value.untracked_count) + " untracked", 1)
                ], 64)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            S.value ? (s(), T(Ae, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: t.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                e("div", tf, [
                  K[8] || (K[8] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (s(!0), o(W, null, ae(t.versionMismatches, (ee) => (s(), T(ot, {
                  key: ee.name,
                  status: "warning"
                }, {
                  icon: l(() => [...K[9] || (K[9] = [
                    h("⚠", -1)
                  ])]),
                  title: l(() => [
                    h(a(ee.name), 1)
                  ]),
                  subtitle: l(() => [
                    e("span", sf, [
                      e("span", of, a(ee.actual), 1),
                      K[10] || (K[10] = e("span", { class: "version-arrow" }, "→", -1)),
                      e("span", nf, a(ee.expected), 1)
                    ])
                  ]),
                  actions: l(() => [
                    _(Q, {
                      variant: "warning",
                      size: "sm",
                      onClick: K[2] || (K[2] = (q) => i("repair-environment"))
                    }, {
                      default: l(() => [...K[11] || (K[11] = [
                        h(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            A.value.length ? (s(), T(Ae, {
              key: 2,
              title: "UNTRACKED",
              count: A.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(A.value, (ee) => (s(), T(ot, {
                  key: ee.name,
                  status: "warning"
                }, {
                  icon: l(() => [...K[12] || (K[12] = [
                    h("?", -1)
                  ])]),
                  title: l(() => [
                    h(a(ee.name), 1)
                  ]),
                  subtitle: l(() => [...K[13] || (K[13] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: l(() => [
                    _(Ge, {
                      label: "Used by:",
                      value: Y(ee)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    _(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (q) => F(ee)
                    }, {
                      default: l(() => [...K[14] || (K[14] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(Q, {
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => x(ee.name)
                    }, {
                      default: l(() => [...K[15] || (K[15] = [
                        h(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(Q, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (q) => P(ee.name)
                    }, {
                      default: l(() => [...K[16] || (K[16] = [
                        h(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            $.value.length ? (s(), T(Ae, {
              key: 3,
              title: "INSTALLED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae($.value, (ee) => (s(), T(ot, {
                  key: ee.name,
                  status: "synced"
                }, {
                  icon: l(() => [
                    h(a(ee.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: l(() => [
                    h(a(ee.name), 1)
                  ]),
                  subtitle: l(() => [
                    ee.version ? (s(), o("span", af, a(ee.source === "development" ? "" : "v") + a(ee.version), 1)) : (s(), o("span", lf, "version unknown")),
                    e("span", rf, " • " + a(E(ee.source)), 1)
                  ]),
                  details: l(() => [
                    _(Ge, {
                      label: "Used by:",
                      value: Y(ee)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    _(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (q) => F(ee)
                    }, {
                      default: l(() => [...K[17] || (K[17] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: z
                    }, {
                      default: l(() => [...K[18] || (K[18] = [
                        h(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            R.value.length ? (s(), T(Ae, {
              key: 4,
              title: "MISSING",
              count: R.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(R.value, (ee) => (s(), T(ot, {
                  key: ee.name,
                  status: "missing"
                }, {
                  icon: l(() => [...K[19] || (K[19] = [
                    h("!", -1)
                  ])]),
                  title: l(() => [
                    h(a(ee.name), 1)
                  ]),
                  subtitle: l(() => [...K[20] || (K[20] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: l(() => [
                    _(Ge, {
                      label: "Required by:",
                      value: Y(ee)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    _(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (q) => F(ee)
                    }, {
                      default: l(() => [...K[21] || (K[21] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(Q, {
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => U(ee.name)
                    }, {
                      default: l(() => [...K[22] || (K[22] = [
                        h(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !$.value.length && !R.value.length && !A.value.length ? (s(), T(_t, {
              key: 5,
              icon: "📭",
              message: k.value ? `No nodes match '${k.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      _($t, {
        show: b.value,
        title: "About Custom Nodes",
        onClose: K[4] || (K[4] = (ee) => b.value = !1)
      }, {
        content: l(() => [...K[23] || (K[23] = [
          e("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            h(" Tracked nodes available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            h(" Tracked nodes that need to be installed"),
            e("br"),
            e("strong", null, "Untracked:"),
            h(" Nodes on filesystem but not in manifest ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: l(() => [
          _(Q, {
            variant: "primary",
            onClick: K[3] || (K[3] = (ee) => b.value = !1)
          }, {
            default: l(() => [...K[24] || (K[24] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      f.value ? (s(), T(Jv, {
        key: 0,
        node: f.value,
        onClose: K[5] || (K[5] = (ee) => f.value = null)
      }, null, 8, ["node"])) : r("", !0),
      C.value ? (s(), T(Ws, {
        key: 1,
        title: C.value.title,
        message: C.value.message,
        warning: C.value.warning,
        "confirm-label": C.value.confirmLabel,
        destructive: C.value.destructive,
        onConfirm: C.value.onConfirm,
        onCancel: K[6] || (K[6] = (ee) => C.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : r("", !0)
    ], 64));
  }
}), cf = /* @__PURE__ */ se(df, [["__scopeId", "data-v-1555a802"]]);
function ro(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const uf = { class: "remote-url-display" }, mf = ["title"], vf = ["title"], ff = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, pf = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, gf = /* @__PURE__ */ te({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = y(!1), i = L(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const g = c.url.slice(0, Math.floor(c.maxLength * 0.6)), m = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${g}...${m}`;
    });
    async function u() {
      try {
        await navigator.clipboard.writeText(c.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy URL:", g);
      }
    }
    return (g, m) => (s(), o("div", uf, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(i.value), 9, mf),
      e("button", {
        class: fe(["copy-btn", { copied: n.value }]),
        onClick: u,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", pf, [...m[1] || (m[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", ff, [...m[0] || (m[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, vf)
    ]));
  }
}), hf = /* @__PURE__ */ se(gf, [["__scopeId", "data-v-7768a58d"]]), yf = { class: "remote-title" }, wf = {
  key: 0,
  class: "default-badge"
}, kf = {
  key: 1,
  class: "sync-badge"
}, bf = {
  key: 0,
  class: "ahead"
}, _f = {
  key: 1,
  class: "behind"
}, $f = {
  key: 1,
  class: "synced"
}, Cf = ["href"], xf = {
  key: 1,
  class: "remote-url-text"
}, Sf = /* @__PURE__ */ te({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const c = t, n = L(() => c.fetchingRemote === c.remote.name), i = L(() => c.remote.is_default), u = L(() => c.syncStatus && c.syncStatus.behind > 0), g = L(() => c.syncStatus && c.syncStatus.ahead > 0), m = L(() => c.remote.push_url !== c.remote.fetch_url), p = L(() => {
      const v = c.remote.fetch_url, w = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return w ? `https://${w[1]}/${w[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), d = L(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, w) => (s(), T(ot, {
      status: i.value ? "synced" : void 0
    }, Kt({
      icon: l(() => [
        h(a(i.value ? "🔗" : "🌐"), 1)
      ]),
      title: l(() => [
        e("div", yf, [
          e("span", null, a(t.remote.name), 1),
          i.value ? (s(), o("span", wf, "DEFAULT")) : r("", !0),
          t.syncStatus ? (s(), o("span", kf, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(W, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", bf, "↑" + a(t.syncStatus.ahead), 1)) : r("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", _f, "↓" + a(t.syncStatus.behind), 1)) : r("", !0)
            ], 64)) : (s(), o("span", $f, "✓ synced"))
          ])) : r("", !0)
        ])
      ]),
      subtitle: l(() => [
        p.value ? (s(), o("a", {
          key: 0,
          href: p.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: w[0] || (w[0] = Be(() => {
          }, ["stop"]))
        }, a(d.value), 9, Cf)) : (s(), o("span", xf, a(d.value), 1))
      ]),
      actions: l(() => [
        _(Q, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: w[1] || (w[1] = (k) => v.$emit("fetch", t.remote.name))
        }, {
          default: l(() => [...w[6] || (w[6] = [
            h(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        _(Q, {
          variant: u.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: w[2] || (w[2] = (k) => v.$emit("pull", t.remote.name))
        }, {
          default: l(() => [
            h(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        _(Q, {
          variant: g.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: w[3] || (w[3] = (k) => v.$emit("push", t.remote.name))
        }, {
          default: l(() => [
            h(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        _(Q, {
          variant: "secondary",
          size: "xs",
          onClick: w[4] || (w[4] = (k) => v.$emit("edit", t.remote.name))
        }, {
          default: l(() => [...w[7] || (w[7] = [
            h(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        i.value ? r("", !0) : (s(), T(Q, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: w[5] || (w[5] = (k) => v.$emit("remove", t.remote.name))
        }, {
          default: l(() => [...w[8] || (w[8] = [
            h(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      m.value ? {
        name: "details",
        fn: l(() => [
          t.remote.push_url !== t.remote.fetch_url ? (s(), T(Ge, {
            key: 0,
            label: "Push URL:"
          }, {
            default: l(() => [
              _(hf, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : r("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), If = /* @__PURE__ */ se(Sf, [["__scopeId", "data-v-8310f3a8"]]), Ef = ["for"], Tf = {
  key: 0,
  class: "base-form-field-required"
}, Pf = { class: "base-form-field-input" }, Rf = {
  key: 1,
  class: "base-form-field-error"
}, Mf = {
  key: 2,
  class: "base-form-field-hint"
}, Df = /* @__PURE__ */ te({
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
    const c = t, n = L(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, u) => (s(), o("div", {
      class: fe(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        h(a(t.label) + " ", 1),
        t.required ? (s(), o("span", Tf, "*")) : r("", !0)
      ], 8, Ef)) : r("", !0),
      e("div", Pf, [
        Pe(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", Rf, a(t.error), 1)) : t.hint ? (s(), o("span", Mf, a(t.hint), 1)) : r("", !0)
    ], 2));
  }
}), Es = /* @__PURE__ */ se(Df, [["__scopeId", "data-v-9a1cf296"]]), Lf = { class: "remote-form" }, zf = { class: "form-header" }, Uf = { class: "form-body" }, Of = {
  key: 0,
  class: "form-error"
}, Nf = { class: "form-actions" }, Af = /* @__PURE__ */ te({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, u = y({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), g = y(!1), m = y(null);
    ut(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      u.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const p = L(() => u.value.name.trim() !== "" && u.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!p.value || g.value)) {
        m.value = null, g.value = !0;
        try {
          i("submit", u.value);
        } catch (v) {
          m.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          g.value = !1;
        }
      }
    }
    return (v, w) => (s(), o("div", Lf, [
      e("div", zf, [
        _(ct, null, {
          default: l(() => [
            h(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Uf, [
        _(Es, {
          label: "Remote Name",
          required: ""
        }, {
          default: l(() => [
            _(bt, {
              modelValue: u.value.name,
              "onUpdate:modelValue": w[0] || (w[0] = (k) => u.value.name = k),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        _(Es, {
          label: "Fetch URL",
          required: ""
        }, {
          default: l(() => [
            _(bt, {
              modelValue: u.value.fetchUrl,
              "onUpdate:modelValue": w[1] || (w[1] = (k) => u.value.fetchUrl = k),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        _(Es, { label: "Push URL (optional)" }, {
          default: l(() => [
            _(bt, {
              modelValue: u.value.pushUrl,
              "onUpdate:modelValue": w[2] || (w[2] = (k) => u.value.pushUrl = k),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        m.value ? (s(), o("div", Of, a(m.value), 1)) : r("", !0)
      ]),
      e("div", Nf, [
        _(Q, {
          variant: "primary",
          size: "md",
          disabled: !p.value,
          loading: g.value,
          onClick: d
        }, {
          default: l(() => [
            h(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        _(Q, {
          variant: "ghost",
          size: "md",
          onClick: w[3] || (w[3] = (k) => v.$emit("cancel"))
        }, {
          default: l(() => [...w[4] || (w[4] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Bf = /* @__PURE__ */ se(Af, [["__scopeId", "data-v-56021b18"]]), Ff = { class: "conflict-summary-box" }, Vf = { class: "summary-header" }, Wf = { class: "summary-text" }, Gf = { key: 0 }, jf = {
  key: 1,
  class: "all-resolved"
}, Kf = { class: "summary-progress" }, Hf = { class: "progress-bar" }, qf = { class: "progress-text" }, Yf = /* @__PURE__ */ te({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const c = t, n = L(
      () => c.conflictCount > 0 ? c.resolvedCount / c.conflictCount * 100 : 0
    );
    return (i, u) => (s(), o("div", Ff, [
      e("div", Vf, [
        u[0] || (u[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", Wf, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (s(), o("p", Gf, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (s(), o("p", jf, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", Kf, [
        e("div", Hf, [
          e("div", {
            class: "progress-fill",
            style: Lt({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", qf, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), Jf = /* @__PURE__ */ se(Yf, [["__scopeId", "data-v-4e9e6cc9"]]), Xf = { class: "modal-header" }, Qf = { class: "modal-title" }, Zf = { class: "modal-body" }, ep = {
  key: 0,
  class: "error-box"
}, tp = {
  key: 0,
  class: "error-hint"
}, sp = {
  key: 1,
  class: "loading-state"
}, op = { class: "commit-summary" }, np = {
  key: 0,
  class: "changes-section"
}, ap = {
  key: 0,
  class: "change-group",
  open: ""
}, lp = { class: "change-count" }, ip = { class: "change-list" }, rp = {
  key: 0,
  class: "conflict-badge"
}, dp = {
  key: 1,
  class: "change-group"
}, cp = { class: "change-count" }, up = { class: "change-list" }, mp = {
  key: 2,
  class: "change-group"
}, vp = { class: "change-count" }, fp = { class: "change-list" }, pp = {
  key: 2,
  class: "strategy-section"
}, gp = { class: "radio-group" }, hp = { class: "radio-option" }, yp = { class: "radio-option" }, wp = { class: "radio-option" }, kp = {
  key: 3,
  class: "up-to-date"
}, bp = { class: "modal-actions" }, Js = "comfygit.pullModelStrategy", _p = /* @__PURE__ */ te({
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
  setup(t, { emit: c }) {
    const n = t, i = c, u = y(localStorage.getItem(Js) || "skip");
    ut(u, ($) => {
      localStorage.setItem(Js, $);
    });
    const g = L(() => {
      var $;
      return (($ = n.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), m = L(() => {
      if (!n.preview) return 0;
      const $ = n.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), p = L(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), d = L(() => {
      var $;
      return m.value > 0 || p.value > 0 || ((($ = n.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), v = L(() => n.preview && ro(n.preview) ? n.preview : null), w = L(() => {
      var $;
      return (($ = v.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), k = L(() => {
      var $;
      return (($ = n.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), b = L(
      () => w.value > 0 && k.value === w.value
    ), f = L(() => !(!n.preview || n.preview.has_uncommitted_changes || v.value && !b.value));
    function C($) {
      if (!v.value) return !1;
      const R = $.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((A) => A.name === R);
    }
    function I($) {
      const R = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      i("pull", { modelStrategy: u.value, force: $, resolutions: R });
    }
    return ($, R) => {
      var A, E;
      return s(), T(et, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: R[11] || (R[11] = (S) => $.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: R[10] || (R[10] = Be(() => {
            }, ["stop"]))
          }, [
            e("div", Xf, [
              e("h3", Qf, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: R[0] || (R[0] = (S) => $.$emit("close"))
              }, "✕")
            ]),
            e("div", Zf, [
              t.error ? (s(), o("div", ep, [
                R[13] || (R[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  R[12] || (R[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  g.value ? (s(), o("p", tp, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : r("", !0)
                ])
              ])) : t.loading ? (s(), o("div", sp, [...R[14] || (R[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                h(" Loading preview... ", -1)
              ])])) : (A = t.preview) != null && A.has_uncommitted_changes ? (s(), o(W, { key: 2 }, [
                R[15] || (R[15] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "UNCOMMITTED CHANGES"),
                    e("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                R[16] || (R[16] = e("div", { class: "options-section" }, [
                  e("p", null, [
                    e("strong", null, "Options:")
                  ]),
                  e("ul", null, [
                    e("li", null, "Commit your changes first (recommended)"),
                    e("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : t.preview ? (s(), o(W, { key: 3 }, [
                e("div", op, [
                  R[17] || (R[17] = e("span", { class: "icon" }, "📥", -1)),
                  h(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                d.value ? (s(), o("div", np, [
                  R[21] || (R[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  m.value > 0 ? (s(), o("details", ap, [
                    e("summary", null, [
                      R[18] || (R[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", lp, a(m.value) + " changes", 1)
                    ]),
                    e("div", ip, [
                      (s(!0), o(W, null, ae(t.preview.changes.workflows.added, (S) => (s(), o("div", {
                        key: "a-" + S,
                        class: "change-item add"
                      }, " + " + a(S), 1))), 128)),
                      (s(!0), o(W, null, ae(t.preview.changes.workflows.modified, (S) => (s(), o("div", {
                        key: "m-" + S,
                        class: "change-item modify"
                      }, [
                        h(" ~ " + a(S) + " ", 1),
                        C(S) ? (s(), o("span", rp, "CONFLICT")) : r("", !0)
                      ]))), 128)),
                      (s(!0), o(W, null, ae(t.preview.changes.workflows.deleted, (S) => (s(), o("div", {
                        key: "d-" + S,
                        class: "change-item delete"
                      }, " - " + a(S), 1))), 128))
                    ])
                  ])) : r("", !0),
                  p.value > 0 ? (s(), o("details", dp, [
                    e("summary", null, [
                      R[19] || (R[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", cp, a(p.value) + " to install", 1)
                    ]),
                    e("div", up, [
                      (s(!0), o(W, null, ae(t.preview.changes.nodes.to_install, (S) => (s(), o("div", {
                        key: S,
                        class: "change-item add"
                      }, " + " + a(S), 1))), 128))
                    ])
                  ])) : r("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", mp, [
                    e("summary", null, [
                      R[20] || (R[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", vp, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", fp, [
                      (s(!0), o(W, null, ae(t.preview.changes.models.referenced, (S) => (s(), o("div", {
                        key: S,
                        class: "change-item"
                      }, a(S), 1))), 128))
                    ])
                  ])) : r("", !0)
                ])) : r("", !0),
                v.value ? (s(), T(Jf, {
                  key: 1,
                  "conflict-count": w.value,
                  "resolved-count": k.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : r("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", pp, [
                  R[26] || (R[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", gp, [
                    e("label", hp, [
                      Re(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": R[1] || (R[1] = (S) => u.value = S),
                        value: "all"
                      }, null, 512), [
                        [Pt, u.value]
                      ]),
                      R[22] || (R[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", yp, [
                      Re(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": R[2] || (R[2] = (S) => u.value = S),
                        value: "required"
                      }, null, 512), [
                        [Pt, u.value]
                      ]),
                      R[23] || (R[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", wp, [
                      Re(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": R[3] || (R[3] = (S) => u.value = S),
                        value: "skip"
                      }, null, 512), [
                        [Pt, u.value]
                      ]),
                      R[24] || (R[24] = e("span", null, "Skip model downloads", -1)),
                      R[25] || (R[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  R[27] || (R[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : r("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", kp, [
                  R[28] || (R[28] = e("span", { class: "icon" }, "✓", -1)),
                  h(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : r("", !0)
              ], 64)) : r("", !0)
            ]),
            e("div", bp, [
              _(Q, {
                variant: "secondary",
                onClick: R[4] || (R[4] = (S) => $.$emit("close"))
              }, {
                default: l(() => [...R[29] || (R[29] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(W, { key: 0 }, [
                _(Q, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: R[5] || (R[5] = (S) => I(!1))
                }, {
                  default: l(() => [...R[30] || (R[30] = [
                    h(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                _(Q, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: R[6] || (R[6] = (S) => I(!0))
                }, {
                  default: l(() => [...R[31] || (R[31] = [
                    h(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (E = t.preview) != null && E.has_uncommitted_changes ? (s(), T(Q, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: R[7] || (R[7] = (S) => I(!0))
              }, {
                default: l(() => [...R[32] || (R[32] = [
                  h(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(W, { key: 2 }, [
                v.value && !b.value ? (s(), T(Q, {
                  key: 0,
                  variant: "primary",
                  onClick: R[8] || (R[8] = (S) => i("openConflictResolution"))
                }, {
                  default: l(() => [
                    h(" Resolve Conflicts (" + a(k.value) + "/" + a(w.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), T(Q, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !f.value,
                  onClick: R[9] || (R[9] = (S) => I(!1))
                }, {
                  default: l(() => [...R[33] || (R[33] = [
                    h(" Pull Changes ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "disabled"]))
              ], 64)) : r("", !0)
            ])
          ])
        ])) : r("", !0)
      ]);
    };
  }
}), $p = /* @__PURE__ */ se(_p, [["__scopeId", "data-v-300c7b2f"]]), Cp = { class: "modal-header" }, xp = { class: "modal-title" }, Sp = { class: "modal-body" }, Ip = {
  key: 0,
  class: "loading-state"
}, Ep = {
  key: 1,
  class: "warning-box"
}, Tp = {
  key: 0,
  class: "commits-section"
}, Pp = { class: "commit-list" }, Rp = { class: "commit-hash" }, Mp = { class: "commit-message" }, Dp = { class: "commit-date" }, Lp = { class: "force-option" }, zp = { class: "checkbox-option" }, Up = { class: "commit-summary" }, Op = {
  key: 0,
  class: "commits-section"
}, Np = { class: "commit-list" }, Ap = { class: "commit-hash" }, Bp = { class: "commit-message" }, Fp = { class: "commit-date" }, Vp = {
  key: 1,
  class: "up-to-date"
}, Wp = { class: "modal-actions" }, Gp = /* @__PURE__ */ te({
  __name: "PushModal",
  props: {
    show: { type: Boolean },
    remoteName: {},
    preview: {},
    loading: { type: Boolean },
    pushing: { type: Boolean }
  },
  emits: ["close", "push", "pull-first"],
  setup(t, { emit: c }) {
    const n = c, i = y(!1);
    function u(g) {
      n("push", { force: g });
    }
    return (g, m) => {
      var p, d, v;
      return s(), T(et, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: m[7] || (m[7] = (w) => g.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: m[6] || (m[6] = Be(() => {
            }, ["stop"]))
          }, [
            e("div", Cp, [
              e("h3", xp, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: m[0] || (m[0] = (w) => g.$emit("close"))
              }, "✕")
            ]),
            e("div", Sp, [
              t.loading ? (s(), o("div", Ip, [...m[8] || (m[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                h(" Loading preview... ", -1)
              ])])) : (p = t.preview) != null && p.has_uncommitted_changes ? (s(), o("div", Ep, [...m[9] || (m[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = t.preview) != null && d.remote_has_new_commits ? (s(), o(W, { key: 2 }, [
                m[13] || (m[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (s(), o("div", Tp, [
                  m[10] || (m[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Pp, [
                    (s(!0), o(W, null, ae(t.preview.commits, (w) => (s(), o("div", {
                      key: w.hash,
                      class: "commit-item"
                    }, [
                      e("span", Rp, a(w.short_hash || w.hash.slice(0, 7)), 1),
                      e("span", Mp, a(w.message), 1),
                      e("span", Dp, a(w.date_relative || w.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                e("div", Lp, [
                  e("label", zp, [
                    Re(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": m[1] || (m[1] = (w) => i.value = w)
                    }, null, 512), [
                      [ks, i.value]
                    ]),
                    m[11] || (m[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  m[12] || (m[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(W, { key: 3 }, [
                e("div", Up, [
                  m[14] || (m[14] = e("span", { class: "icon" }, "📤", -1)),
                  h(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", Op, [
                  m[15] || (m[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Np, [
                    (s(!0), o(W, null, ae(t.preview.commits, (w) => (s(), o("div", {
                      key: w.hash,
                      class: "commit-item"
                    }, [
                      e("span", Ap, a(w.short_hash || w.hash.slice(0, 7)), 1),
                      e("span", Bp, a(w.message), 1),
                      e("span", Fp, a(w.date_relative || w.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", Vp, [
                  m[16] || (m[16] = e("span", { class: "icon" }, "✓", -1)),
                  h(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : r("", !0)
            ]),
            e("div", Wp, [
              _(Q, {
                variant: "secondary",
                onClick: m[2] || (m[2] = (w) => g.$emit("close"))
              }, {
                default: l(() => [...m[17] || (m[17] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (v = t.preview) != null && v.remote_has_new_commits ? (s(), o(W, { key: 0 }, [
                _(Q, {
                  variant: "secondary",
                  onClick: m[3] || (m[3] = (w) => g.$emit("pull-first"))
                }, {
                  default: l(() => [...m[18] || (m[18] = [
                    h(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                _(Q, {
                  variant: "destructive",
                  disabled: !i.value,
                  loading: t.pushing,
                  onClick: m[4] || (m[4] = (w) => u(!0))
                }, {
                  default: l(() => [...m[19] || (m[19] = [
                    h(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), T(Q, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: m[5] || (m[5] = (w) => u(!1))
              }, {
                default: l(() => [...m[20] || (m[20] = [
                  h(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : r("", !0)
            ])
          ])
        ])) : r("", !0)
      ]);
    };
  }
}), jp = /* @__PURE__ */ se(Gp, [["__scopeId", "data-v-bc6ded53"]]), Kp = { class: "resolution-choice-group" }, Hp = ["disabled"], qp = ["disabled"], Yp = /* @__PURE__ */ te({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("div", Kp, [
      e("button", {
        class: fe(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (i) => c.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, Hp),
      e("button", {
        class: fe(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (i) => c.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, qp)
    ]));
  }
}), Jp = /* @__PURE__ */ se(Yp, [["__scopeId", "data-v-985715ed"]]), Xp = { class: "conflict-header" }, Qp = { class: "conflict-info" }, Zp = { class: "workflow-name" }, eg = { class: "conflict-description" }, tg = {
  key: 0,
  class: "resolved-badge"
}, sg = { class: "resolved-text" }, og = { class: "conflict-hashes" }, ng = { class: "hash-item" }, ag = { class: "hash-item" }, lg = { class: "conflict-actions" }, ig = /* @__PURE__ */ te({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: c }) {
    const n = t, i = c, u = y(n.resolution);
    ut(() => n.resolution, (d) => {
      u.value = d;
    }), ut(u, (d) => {
      d && i("resolve", d);
    });
    const g = L(() => u.value !== null), m = L(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), p = L(() => {
      switch (u.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (d, v) => {
      var w, k;
      return s(), o("div", {
        class: fe(["conflict-item", { resolved: g.value }])
      }, [
        e("div", Xp, [
          v[2] || (v[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", Qp, [
            e("code", Zp, a(t.conflict.name) + ".json", 1),
            e("div", eg, a(m.value), 1)
          ]),
          g.value ? (s(), o("div", tg, [
            v[1] || (v[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", sg, a(p.value), 1)
          ])) : r("", !0)
        ]),
        e("div", og, [
          e("span", ng, [
            v[3] || (v[3] = h("Your: ", -1)),
            e("code", null, a(((w = t.conflict.base_hash) == null ? void 0 : w.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", ag, [
            v[4] || (v[4] = h("Theirs: ", -1)),
            e("code", null, a(((k = t.conflict.target_hash) == null ? void 0 : k.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", lg, [
          _(Jp, {
            modelValue: u.value,
            "onUpdate:modelValue": v[0] || (v[0] = (b) => u.value = b),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), rg = /* @__PURE__ */ se(ig, [["__scopeId", "data-v-506d3bbf"]]), dg = { class: "resolution-content" }, cg = {
  key: 0,
  class: "error-box"
}, ug = { class: "resolution-header" }, mg = { class: "header-stats" }, vg = { class: "stat" }, fg = { class: "stat-value" }, pg = { class: "stat resolved" }, gg = { class: "stat-value" }, hg = {
  key: 0,
  class: "stat pending"
}, yg = { class: "stat-value" }, wg = { class: "conflicts-list" }, kg = {
  key: 1,
  class: "all-resolved-message"
}, bg = /* @__PURE__ */ te({
  __name: "WorkflowResolutionModal",
  props: {
    workflowConflicts: {},
    resolutions: {},
    operationType: {},
    validating: { type: Boolean },
    error: {}
  },
  emits: ["close", "resolve", "apply"],
  setup(t, { emit: c }) {
    const n = t, i = c, u = L(() => n.resolutions.size), g = L(() => n.workflowConflicts.length - u.value), m = L(() => u.value === n.workflowConflicts.length), p = L(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(b) {
      const f = n.resolutions.get(b);
      return (f == null ? void 0 : f.resolution) ?? null;
    }
    function v(b, f) {
      i("resolve", b, f);
    }
    function w() {
      i("close");
    }
    function k() {
      i("apply");
    }
    return (b, f) => (s(), T(He, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: w
    }, {
      body: l(() => [
        e("div", dg, [
          t.error ? (s(), o("div", cg, [
            f[1] || (f[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              f[0] || (f[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : r("", !0),
          e("div", ug, [
            e("div", mg, [
              e("div", vg, [
                e("span", fg, a(t.workflowConflicts.length), 1),
                f[2] || (f[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", pg, [
                e("span", gg, a(u.value), 1),
                f[3] || (f[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              g.value > 0 ? (s(), o("div", hg, [
                e("span", yg, a(g.value), 1),
                f[4] || (f[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : r("", !0)
            ]),
            f[5] || (f[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", wg, [
            (s(!0), o(W, null, ae(t.workflowConflicts, (C) => (s(), T(rg, {
              key: C.name,
              conflict: C,
              resolution: d(C.name),
              onResolve: (I) => v(C.name, I)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          m.value ? (s(), o("div", kg, [
            f[6] || (f[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(p.value) + '" to continue.', 1)
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        _(ye, {
          variant: "secondary",
          onClick: w
        }, {
          default: l(() => [...f[7] || (f[7] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        f[8] || (f[8] = e("div", { class: "footer-spacer" }, null, -1)),
        _(ye, {
          variant: "primary",
          disabled: !m.value || t.validating,
          loading: t.validating,
          onClick: k
        }, {
          default: l(() => [
            h(a(p.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), _g = /* @__PURE__ */ se(bg, [["__scopeId", "data-v-c58d150d"]]), $g = { class: "node-conflict-item" }, Cg = { class: "node-header" }, xg = { class: "node-name" }, Sg = { class: "node-id" }, Ig = { class: "version-comparison" }, Eg = { class: "version yours" }, Tg = { class: "version theirs" }, Pg = { class: "chosen-version" }, Rg = { class: "chosen" }, Mg = { class: "chosen-reason" }, Dg = { class: "affected-workflows" }, Lg = { class: "wf-source" }, zg = { class: "wf-version" }, Ug = /* @__PURE__ */ te({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", $g, [
      e("div", Cg, [
        e("code", xg, a(t.conflict.node_name), 1),
        e("span", Sg, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", Ig, [
        e("div", Eg, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", Tg, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", Pg, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", Rg, a(t.conflict.chosen_version), 1),
        e("span", Mg, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", Dg, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (s(!0), o(W, null, ae(t.conflict.affected_workflows, (i) => (s(), o("li", {
            key: i.name
          }, [
            e("code", null, a(i.name), 1),
            e("span", Lg, "(" + a(i.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", zg, "needs v" + a(i.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), Og = /* @__PURE__ */ se(Ug, [["__scopeId", "data-v-8b626725"]]), Ng = { class: "validation-content" }, Ag = {
  key: 0,
  class: "compatible-message"
}, Bg = { class: "conflicts-list" }, Fg = {
  key: 2,
  class: "warnings-section"
}, Vg = /* @__PURE__ */ te({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, u = L(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (g, m) => (s(), T(He, {
      title: "Compatibility Check",
      size: "lg",
      onClose: m[3] || (m[3] = (p) => i("cancel"))
    }, {
      body: l(() => [
        e("div", Ng, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (s(), o("div", Ag, [
            m[5] || (m[5] = e("span", { class: "icon" }, "✓", -1)),
            e("div", null, [
              m[4] || (m[4] = e("strong", null, "All clear!", -1)),
              e("p", null, "Your workflow choices are compatible. Ready to " + a(t.operationType) + ".", 1)
            ])
          ])) : t.validation.node_conflicts.length > 0 ? (s(), o(W, { key: 1 }, [
            m[6] || (m[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", Bg, [
              (s(!0), o(W, null, ae(t.validation.node_conflicts, (p) => (s(), T(Og, {
                key: p.node_id,
                conflict: p
              }, null, 8, ["conflict"]))), 128))
            ]),
            m[7] || (m[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : r("", !0),
          t.validation.warnings.length > 0 ? (s(), o("div", Fg, [
            m[8] || (m[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (s(!0), o(W, null, ae(t.validation.warnings, (p, d) => (s(), o("li", { key: d }, a(p), 1))), 128))
            ])
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        _(ye, {
          variant: "secondary",
          onClick: m[0] || (m[0] = (p) => i("cancel"))
        }, {
          default: l(() => [...m[9] || (m[9] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        m[11] || (m[11] = e("div", { class: "footer-spacer" }, null, -1)),
        _(ye, {
          variant: "secondary",
          onClick: m[1] || (m[1] = (p) => i("goBack"))
        }, {
          default: l(() => [...m[10] || (m[10] = [
            h(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        _(ye, {
          variant: "primary",
          loading: t.executing,
          onClick: m[2] || (m[2] = (p) => i("proceed"))
        }, {
          default: l(() => [
            h(a(u.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), Wg = /* @__PURE__ */ se(Vg, [["__scopeId", "data-v-fefd26ed"]]), Gg = { key: 0 }, jg = /* @__PURE__ */ te({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: c }) {
    const n = c, {
      getRemotes: i,
      addRemote: u,
      removeRemote: g,
      updateRemoteUrl: m,
      fetchRemote: p,
      getRemoteSyncStatus: d,
      getPullPreview: v,
      pullFromRemote: w,
      getPushPreview: k,
      pushToRemote: b,
      validateMerge: f
    } = Fe(), C = y([]), I = y(null), $ = y({}), R = y(!1), A = y(null), E = y(""), S = y(!1), Y = y(null), F = y(!1), z = y("add"), x = y({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), P = L(() => {
      if (!E.value.trim()) return C.value;
      const G = E.value.toLowerCase();
      return C.value.filter(
        (ne) => ne.name.toLowerCase().includes(G) || ne.fetch_url.toLowerCase().includes(G) || ne.push_url.toLowerCase().includes(G)
      );
    });
    async function U() {
      R.value = !0, A.value = null;
      try {
        const G = await i();
        C.value = G.remotes, I.value = G.current_branch_tracking || null, await Promise.all(
          G.remotes.map(async (ne) => {
            const xe = await d(ne.name);
            xe && ($.value[ne.name] = xe);
          })
        );
      } catch (G) {
        A.value = G instanceof Error ? G.message : "Failed to load remotes";
      } finally {
        R.value = !1;
      }
    }
    function re() {
      z.value = "add", x.value = { name: "", fetchUrl: "", pushUrl: "" }, F.value = !0;
    }
    function le(G) {
      const ne = C.value.find((xe) => xe.name === G);
      ne && (z.value = "edit", x.value = {
        name: ne.name,
        fetchUrl: ne.fetch_url,
        pushUrl: ne.push_url
      }, F.value = !0);
    }
    async function K(G) {
      try {
        z.value === "add" ? await u(G.name, G.fetchUrl) : await m(G.name, G.fetchUrl, G.pushUrl || void 0), F.value = !1, await U();
      } catch (ne) {
        A.value = ne instanceof Error ? ne.message : "Operation failed";
      }
    }
    function ee() {
      F.value = !1, x.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function q(G) {
      Y.value = G;
      try {
        await p(G);
        const ne = await d(G);
        ne && ($.value[G] = ne), n("toast", `✓ Fetched from ${G}`, "success");
      } catch (ne) {
        n("toast", ne instanceof Error ? ne.message : "Fetch failed", "error");
      } finally {
        Y.value = null;
      }
    }
    async function O(G) {
      if (confirm(`Remove remote "${G}"?`))
        try {
          await g(G), await U();
        } catch (ne) {
          A.value = ne instanceof Error ? ne.message : "Failed to remove remote";
        }
    }
    function N() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const M = y("idle"), ve = L(() => M.value === "pull_preview"), oe = L(
      () => M.value === "resolving" || M.value === "validating"
    ), be = L(
      () => M.value === "validation_review" || M.value === "executing"
    ), Ce = y(!1), Le = y(null), Ue = y(!1), me = y(null), ge = y(!1), Me = y(null), ce = y(null), X = y(/* @__PURE__ */ new Map()), De = y(null), pe = y(null), Je = L(() => Me.value && ro(Me.value) ? Me.value : null);
    async function tt(G) {
      me.value = G, M.value = "pull_preview", ge.value = !0, Me.value = null, ce.value = null;
      try {
        Me.value = await v(G);
      } catch (ne) {
        ce.value = ne instanceof Error ? ne.message : "Failed to load pull preview";
      } finally {
        ge.value = !1;
      }
    }
    function st() {
      M.value = "idle", Me.value = null, ce.value = null, me.value = null;
    }
    async function Te(G) {
      if (!me.value) return;
      M.value = "executing", ce.value = null;
      const ne = me.value;
      try {
        const xe = await w(ne, G);
        if (xe.rolled_back) {
          ce.value = `Pull failed and was rolled back: ${xe.error || "Unknown error"}`, M.value = "pull_preview";
          return;
        }
        Ye(), M.value = "idle", n("toast", `✓ Pulled from ${ne}`, "success"), await U();
      } catch (xe) {
        ce.value = xe instanceof Error ? xe.message : "Pull failed", M.value = "pull_preview";
      }
    }
    function Xe() {
      Je.value && (M.value = "resolving", pe.value = null);
    }
    function qe(G, ne) {
      X.value.set(G, { name: G, resolution: ne });
    }
    function Qe() {
      M.value = "pull_preview";
    }
    async function mt() {
      M.value = "validating", pe.value = null;
      try {
        const G = Array.from(X.value.values());
        De.value = await f(me.value, G), M.value = "validation_review";
      } catch (G) {
        pe.value = G instanceof Error ? G.message : "Validation failed", M.value = "resolving";
      }
    }
    async function $e() {
      M.value = "executing";
      const G = me.value;
      try {
        const ne = Array.from(X.value.values()), xe = await w(G, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: ne
        });
        if (xe.rolled_back) {
          ce.value = `Pull failed and was rolled back: ${xe.error || "Unknown error"}`, M.value = "pull_preview";
          return;
        }
        Ye(), M.value = "idle", n("toast", `✓ Pulled from ${G}`, "success"), await U();
      } catch (ne) {
        ce.value = ne instanceof Error ? ne.message : "Pull failed", M.value = "validation_review";
      }
    }
    function je() {
      M.value = "resolving";
    }
    function it() {
      Ye(), M.value = "idle";
    }
    function Ye() {
      X.value.clear(), De.value = null, pe.value = null, ce.value = null, Me.value = null, me.value = null;
    }
    async function ue(G) {
      me.value = G, Ce.value = !0, ge.value = !0, Le.value = null;
      try {
        Le.value = await k(G);
      } catch (ne) {
        A.value = ne instanceof Error ? ne.message : "Failed to load push preview";
      } finally {
        ge.value = !1;
      }
    }
    function J() {
      Ce.value = !1, Le.value = null, me.value = null;
    }
    async function Z(G) {
      if (!me.value) return;
      Ue.value = !0;
      const ne = me.value;
      try {
        await b(ne, G), J(), n("toast", `✓ Pushed to ${ne}`, "success"), await U();
      } catch (xe) {
        n("toast", xe instanceof Error ? xe.message : "Push failed", "error");
      } finally {
        Ue.value = !1;
      }
    }
    function D() {
      const G = me.value;
      J(), G && tt(G);
    }
    return Oe(U), (G, ne) => (s(), o(W, null, [
      _(nt, null, {
        header: l(() => [
          _(at, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: ne[0] || (ne[0] = (xe) => S.value = !0)
          }, {
            actions: l(() => [
              F.value ? r("", !0) : (s(), T(Q, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: re
              }, {
                default: l(() => [...ne[3] || (ne[3] = [
                  h(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          F.value ? r("", !0) : (s(), T(es, {
            key: 0,
            modelValue: E.value,
            "onUpdate:modelValue": ne[1] || (ne[1] = (xe) => E.value = xe),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: l(() => [
          R.value ? (s(), T(zt, {
            key: 0,
            message: "Loading remotes..."
          })) : A.value ? (s(), T(Ut, {
            key: 1,
            message: A.value,
            retry: !0,
            onRetry: U
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            F.value ? (s(), T(Bf, {
              key: 0,
              mode: z.value,
              "remote-name": x.value.name,
              "fetch-url": x.value.fetchUrl,
              "push-url": x.value.pushUrl,
              onSubmit: K,
              onCancel: ee
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : r("", !0),
            C.value.length && !F.value ? (s(), T(ps, {
              key: 1,
              variant: "compact"
            }, {
              default: l(() => [
                h(" Total: " + a(C.value.length) + " remote" + a(C.value.length !== 1 ? "s" : "") + " ", 1),
                I.value ? (s(), o("span", Gg, " • Tracking: " + a(I.value.remote) + "/" + a(I.value.branch), 1)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            P.value.length && !F.value ? (s(), T(Ae, {
              key: 2,
              title: "REMOTES",
              count: P.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(P.value, (xe) => (s(), T(If, {
                  key: xe.name,
                  remote: xe,
                  "sync-status": $.value[xe.name],
                  "fetching-remote": Y.value,
                  onFetch: q,
                  onEdit: le,
                  onRemove: O,
                  onPull: tt,
                  onPush: ue
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !P.value.length && !F.value ? (s(), T(_t, {
              key: 3,
              icon: "🌐",
              message: E.value ? `No remotes match '${E.value}'` : "No remotes configured."
            }, {
              actions: l(() => [
                _(Q, {
                  variant: "primary",
                  onClick: re
                }, {
                  default: l(() => [...ne[4] || (ne[4] = [
                    h(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      _($t, {
        show: S.value,
        title: "About Git Remotes",
        onClose: ne[2] || (ne[2] = (xe) => S.value = !1)
      }, {
        content: l(() => [...ne[5] || (ne[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            h(" The "),
            e("strong", null, '"origin"'),
            h(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: l(() => [
          _(Q, {
            variant: "link",
            onClick: N
          }, {
            default: l(() => [...ne[6] || (ne[6] = [
              h(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _($p, {
        show: ve.value,
        "remote-name": me.value || "",
        preview: Me.value,
        loading: ge.value,
        pulling: M.value === "executing",
        error: ce.value,
        "conflict-resolutions": X.value,
        onClose: st,
        onPull: Te,
        onOpenConflictResolution: Xe
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      _(jp, {
        show: Ce.value,
        "remote-name": me.value || "",
        preview: Le.value,
        loading: ge.value,
        pushing: Ue.value,
        onClose: J,
        onPush: Z,
        onPullFirst: D
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      oe.value && Je.value ? (s(), T(_g, {
        key: 0,
        "workflow-conflicts": Je.value.workflow_conflicts,
        resolutions: X.value,
        "operation-type": "pull",
        validating: M.value === "validating",
        error: pe.value,
        onClose: Qe,
        onResolve: qe,
        onApply: mt
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : r("", !0),
      be.value && De.value ? (s(), T(Wg, {
        key: 1,
        validation: De.value,
        "operation-type": "pull",
        executing: M.value === "executing",
        onProceed: $e,
        onGoBack: je,
        onCancel: it
      }, null, 8, ["validation", "executing"])) : r("", !0)
    ], 64));
  }
}), Kg = /* @__PURE__ */ se(jg, [["__scopeId", "data-v-9ae3b76d"]]), Hg = { class: "setting-info" }, qg = { class: "setting-label" }, Yg = {
  key: 0,
  class: "required-marker"
}, Jg = {
  key: 0,
  class: "setting-description"
}, Xg = { class: "setting-control" }, Qg = /* @__PURE__ */ te({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: fe(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Hg, [
        e("div", qg, [
          h(a(t.label) + " ", 1),
          t.required ? (s(), o("span", Yg, "*")) : r("", !0)
        ]),
        t.description ? (s(), o("div", Jg, a(t.description), 1)) : r("", !0)
      ]),
      e("div", Xg, [
        Pe(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Ts = /* @__PURE__ */ se(Qg, [["__scopeId", "data-v-cb5d236c"]]), Zg = { class: "toggle" }, eh = ["checked", "disabled"], th = /* @__PURE__ */ te({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", Zg, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, eh),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), sh = /* @__PURE__ */ se(th, [["__scopeId", "data-v-71c0f550"]]), oh = { class: "workspace-settings-content" }, nh = { class: "settings-section" }, ah = { class: "path-setting" }, lh = { class: "path-value" }, ih = { class: "path-setting" }, rh = { class: "path-value" }, dh = { class: "settings-section" }, ch = { class: "settings-section" }, uh = { class: "settings-section" }, mh = /* @__PURE__ */ te({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(t, { expose: c, emit: n }) {
    const i = t, u = n, { getConfig: g, updateConfig: m } = Fe(), p = y(!1), d = y(null), v = y(null), w = y(null), k = y(null), b = y(""), f = y(""), C = y(!1);
    function I(F) {
      return F.join(" ");
    }
    function $(F) {
      return F.trim() ? F.trim().split(/\s+/) : [];
    }
    const R = L(() => {
      if (!k.value) return !1;
      const F = b.value !== (k.value.civitai_api_key || ""), z = f.value !== I(k.value.comfyui_extra_args || []);
      return F || z;
    });
    async function A() {
      p.value = !0, d.value = null;
      try {
        w.value = await g(i.workspacePath || void 0), k.value = { ...w.value }, b.value = w.value.civitai_api_key || "", f.value = I(w.value.comfyui_extra_args || []);
        const F = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        C.value = F === "true";
      } catch (F) {
        d.value = F instanceof Error ? F.message : "Failed to load settings";
      } finally {
        p.value = !1;
      }
    }
    async function E() {
      var F, z;
      v.value = null;
      try {
        const x = {};
        b.value !== (((F = k.value) == null ? void 0 : F.civitai_api_key) || "") && (x.civitai_api_key = b.value || null), f.value !== I(((z = k.value) == null ? void 0 : z.comfyui_extra_args) || []) && (x.comfyui_extra_args = $(f.value)), await m(x, i.workspacePath || void 0), await A(), v.value = { type: "success", message: "Settings saved successfully" }, u("saved"), setTimeout(() => {
          v.value = null;
        }, 3e3);
      } catch (x) {
        const P = x instanceof Error ? x.message : "Failed to save settings";
        v.value = { type: "error", message: P }, u("error", P);
      }
    }
    function S() {
      k.value && (b.value = k.value.civitai_api_key || "", f.value = I(k.value.comfyui_extra_args || []), v.value = null);
    }
    function Y(F) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(F)), console.log("[ComfyGit] Auto-refresh setting saved:", F);
    }
    return c({
      saveSettings: E,
      resetSettings: S,
      hasChanges: R,
      loadSettings: A
    }), Oe(A), (F, z) => (s(), o("div", oh, [
      p.value ? (s(), T(zt, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (s(), T(Ut, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: A
      }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
        _(Ae, { title: "WORKSPACE PATHS" }, {
          default: l(() => {
            var x, P;
            return [
              e("div", nh, [
                e("div", ah, [
                  z[3] || (z[3] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                  z[4] || (z[4] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  e("div", lh, a(((x = w.value) == null ? void 0 : x.workspace_path) || "Loading..."), 1)
                ]),
                e("div", ih, [
                  z[5] || (z[5] = e("div", { class: "path-label" }, "Models Directory", -1)),
                  z[6] || (z[6] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  e("div", rh, a(((P = w.value) == null ? void 0 : P.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        _(Ae, { title: "API CREDENTIALS" }, {
          default: l(() => [
            e("div", dh, [
              _(Ts, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: l(() => [
                  _(bs, {
                    modelValue: b.value,
                    "onUpdate:modelValue": z[0] || (z[0] = (x) => b.value = x),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        _(Ae, { title: "COMFYUI SETTINGS" }, {
          default: l(() => [
            e("div", ch, [
              _(Ts, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: l(() => [
                  _(bs, {
                    modelValue: f.value,
                    "onUpdate:modelValue": z[1] || (z[1] = (x) => f.value = x),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              z[7] || (z[7] = e("div", { class: "setting-hint" }, [
                h(" Common flags: "),
                e("code", null, "--lowvram"),
                h(", "),
                e("code", null, "--highvram"),
                h(", "),
                e("code", null, "--listen 0.0.0.0"),
                h(", "),
                e("code", null, "--cuda-device 1")
              ], -1))
            ])
          ]),
          _: 1
        }),
        _(Ae, { title: "UI SETTINGS" }, {
          default: l(() => [
            e("div", uh, [
              _(Ts, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: l(() => [
                  _(sh, {
                    modelValue: C.value,
                    "onUpdate:modelValue": [
                      z[2] || (z[2] = (x) => C.value = x),
                      Y
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        v.value ? (s(), T(ps, {
          key: 0,
          variant: (v.value.type === "success", "compact")
        }, {
          default: l(() => [
            e("span", {
              style: Lt({ color: v.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, a(v.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : r("", !0)
      ], 64))
    ]));
  }
}), co = /* @__PURE__ */ se(mh, [["__scopeId", "data-v-9f44552d"]]), vh = /* @__PURE__ */ te({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const c = y(null);
    function n() {
      console.log("[ComfyGit] Settings saved");
    }
    return (i, u) => (s(), T(nt, null, {
      header: l(() => [
        _(at, { title: "WORKSPACE SETTINGS" }, {
          actions: l(() => {
            var g, m;
            return [
              _(Q, {
                variant: "primary",
                size: "sm",
                disabled: !((g = c.value) != null && g.hasChanges),
                onClick: u[0] || (u[0] = (p) => {
                  var d;
                  return (d = c.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: l(() => [...u[2] || (u[2] = [
                  h(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (m = c.value) != null && m.hasChanges ? (s(), T(Q, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: u[1] || (u[1] = (p) => {
                  var d;
                  return (d = c.value) == null ? void 0 : d.resetSettings();
                })
              }, {
                default: l(() => [...u[3] || (u[3] = [
                  h(" Reset ", -1)
                ])]),
                _: 1
              })) : r("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: l(() => [
        _(co, {
          ref_key: "contentRef",
          ref: c,
          onSaved: n
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), fh = { class: "base-tabs" }, ph = ["disabled", "onClick"], gh = {
  key: 0,
  class: "base-tabs__badge"
}, hh = /* @__PURE__ */ te({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: c }) {
    const n = t, i = c;
    function u(g) {
      var m;
      (m = n.tabs.find((p) => p.id === g)) != null && m.disabled || i("update:modelValue", g);
    }
    return (g, m) => (s(), o("div", fh, [
      (s(!0), o(W, null, ae(t.tabs, (p) => (s(), o("button", {
        key: p.id,
        class: fe([
          "base-tabs__tab",
          {
            active: t.modelValue === p.id,
            disabled: p.disabled
          }
        ]),
        disabled: p.disabled,
        onClick: (d) => u(p.id)
      }, [
        h(a(p.label) + " ", 1),
        p.badge ? (s(), o("span", gh, a(p.badge), 1)) : r("", !0)
      ], 10, ph))), 128))
    ]));
  }
}), uo = /* @__PURE__ */ se(hh, [["__scopeId", "data-v-ad5e6cad"]]), yh = { class: "log-viewer-wrapper" }, wh = ["disabled", "title"], kh = /* @__PURE__ */ te({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(t) {
    const c = t, n = y(null), i = y("idle"), u = L(() => c.logs.map((v) => ({
      text: c.rawFormat || !v.timestamp ? v.message : `${v.timestamp} - ${v.name} - ${v.level} - ${v.func}:${v.line} - ${v.message}`,
      level: v.level
    })));
    async function g() {
      var w;
      await As();
      const v = (w = n.value) == null ? void 0 : w.closest(".panel-layout-content");
      v && (v.scrollTop = v.scrollHeight);
    }
    Oe(g), ut(() => c.logs, g);
    async function m() {
      if (u.value.length === 0) return;
      const v = u.value.map((w) => w.text).join(`
`);
      try {
        await navigator.clipboard.writeText(v), i.value = "copied", setTimeout(() => {
          i.value = "idle";
        }, 2e3);
      } catch (w) {
        console.error("Failed to copy logs:", w);
      }
    }
    function p(v) {
      (v.ctrlKey || v.metaKey) && v.key === "c" && v.stopPropagation();
    }
    function d(v) {
      v.stopPropagation();
    }
    return (v, w) => (s(), o("div", yh, [
      e("div", {
        ref_key: "logOutputElement",
        ref: n,
        class: "log-output",
        onKeydown: p,
        onCopy: d,
        tabindex: "0"
      }, [
        e("button", {
          class: "copy-overlay-btn",
          onClick: m,
          disabled: i.value !== "idle",
          title: i.value === "copied" ? "Copied!" : "Copy all logs"
        }, a(i.value === "copied" ? "Copied!" : "Copy"), 9, wh),
        (s(!0), o(W, null, ae(u.value, (k, b) => (s(), o("div", {
          key: b,
          class: fe(`log-line log-level-${k.level.toLowerCase()}`)
        }, a(k.text), 3))), 128))
      ], 544)
    ]));
  }
}), mo = /* @__PURE__ */ se(kh, [["__scopeId", "data-v-c0cc6d21"]]), bh = /* @__PURE__ */ te({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const {
      getWorkspaceLogs: c,
      getWorkspaceLogPath: n,
      getOrchestratorLogs: i,
      getOrchestratorLogPath: u,
      openFile: g
    } = Fe(), m = y("workspace"), p = y([]), d = y(!1), v = y(null), w = y(!1), k = y(null), b = y(null), f = y(!1), C = L(() => m.value === "workspace" ? k.value : b.value);
    async function I() {
      d.value = !0, v.value = null;
      try {
        m.value === "workspace" ? p.value = await c(void 0, 500) : p.value = await i(void 0, 500);
      } catch (A) {
        v.value = A instanceof Error ? A.message : `Failed to load ${m.value} logs`;
      } finally {
        d.value = !1;
      }
    }
    async function $() {
      try {
        const [A, E] = await Promise.all([
          n(),
          u()
        ]);
        A.exists && (k.value = A.path), E.exists && (b.value = E.path);
      } catch {
      }
    }
    async function R() {
      if (C.value) {
        f.value = !0;
        try {
          await g(C.value);
        } catch (A) {
          console.error("Failed to open log file:", A);
        } finally {
          f.value = !1;
        }
      }
    }
    return ut(m, () => {
      I();
    }), Oe(() => {
      I(), $();
    }), (A, E) => (s(), o(W, null, [
      _(nt, null, {
        header: l(() => [
          _(at, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (S) => w.value = !0)
          }, {
            actions: l(() => [
              _(Q, {
                variant: "secondary",
                size: "sm",
                onClick: R,
                disabled: !C.value || f.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  h(a(f.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              _(Q, {
                variant: "secondary",
                size: "sm",
                onClick: I,
                disabled: d.value
              }, {
                default: l(() => [
                  h(a(d.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          _(uo, {
            modelValue: m.value,
            "onUpdate:modelValue": E[1] || (E[1] = (S) => m.value = S),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          d.value ? (s(), T(zt, {
            key: 0,
            message: `Loading ${m.value} logs...`
          }, null, 8, ["message"])) : v.value ? (s(), T(Ut, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            p.value.length === 0 ? (s(), T(_t, {
              key: 0,
              icon: "📝",
              message: `No ${m.value} logs available`
            }, null, 8, ["message"])) : (s(), T(mo, {
              key: 1,
              logs: p.value,
              "raw-format": m.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      _($t, {
        show: w.value,
        title: "About Logs",
        onClose: E[3] || (E[3] = (S) => w.value = !1)
      }, {
        content: l(() => [...E[4] || (E[4] = [
          e("p", null, [
            e("strong", null, "Workspace Logs:"),
            h(" System-level events for the entire ComfyGit workspace, including operations that affect multiple environments. ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Orchestrator Logs:"),
            h(" Process management events including ComfyUI startup, restarts, environment switches, and any errors during handoff. ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            h(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            h(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            h(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            h(" Detailed debugging information ")
          ], -1)
        ])]),
        actions: l(() => [
          _(Q, {
            variant: "primary",
            onClick: E[2] || (E[2] = (S) => w.value = !1)
          }, {
            default: l(() => [...E[5] || (E[5] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), _h = /* @__PURE__ */ te({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n, getEnvironmentLogPath: i, openFile: u } = Fe(), g = y([]), m = y(!1), p = y(null), d = y(!1), v = y("production"), w = y(null), k = y(!1);
    async function b() {
      m.value = !0, p.value = null;
      try {
        g.value = await c(void 0, 500);
        try {
          const I = await n();
          v.value = I.environment || "production";
        } catch {
        }
      } catch (I) {
        p.value = I instanceof Error ? I.message : "Failed to load environment logs";
      } finally {
        m.value = !1;
      }
    }
    async function f() {
      try {
        const I = await i();
        I.exists && (w.value = I.path);
      } catch {
      }
    }
    async function C() {
      if (w.value) {
        k.value = !0;
        try {
          await u(w.value);
        } catch (I) {
          console.error("Failed to open log file:", I);
        } finally {
          k.value = !1;
        }
      }
    }
    return Oe(() => {
      b(), f();
    }), (I, $) => (s(), o(W, null, [
      _(nt, null, {
        header: l(() => [
          _(at, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (R) => d.value = !0)
          }, {
            actions: l(() => [
              _(Q, {
                variant: "secondary",
                size: "sm",
                onClick: C,
                disabled: !w.value || k.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  h(a(k.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              _(Q, {
                variant: "secondary",
                size: "sm",
                onClick: b,
                disabled: m.value
              }, {
                default: l(() => [
                  h(a(m.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          m.value ? (s(), T(zt, {
            key: 0,
            message: "Loading environment logs..."
          })) : p.value ? (s(), T(Ut, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            g.value.length === 0 ? (s(), T(_t, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), T(mo, {
              key: 1,
              logs: g.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 1
      }),
      _($t, {
        show: d.value,
        title: "About Environment Logs",
        onClose: $[2] || ($[2] = (R) => d.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            $[3] || ($[3] = h(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(v.value), 1),
            $[4] || ($[4] = h(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          $[5] || ($[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            h(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            h(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            h(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            h(" Detailed debugging information ")
          ], -1))
        ]),
        actions: l(() => [
          _(Q, {
            variant: "primary",
            onClick: $[1] || ($[1] = (R) => d.value = !1)
          }, {
            default: l(() => [...$[6] || ($[6] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), $h = { class: "env-title" }, Ch = {
  key: 0,
  class: "current-badge"
}, xh = {
  key: 0,
  class: "branch-info"
}, Sh = /* @__PURE__ */ te({
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
    return (c, n) => (s(), T(ot, {
      status: t.isCurrent ? "synced" : void 0
    }, Kt({
      icon: l(() => [
        h(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: l(() => [
        e("div", $h, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", Ch, "CURRENT")) : r("", !0)
        ])
      ]),
      subtitle: l(() => [
        t.currentBranch ? (s(), o("span", xh, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          h(" " + a(t.currentBranch), 1)
        ])) : r("", !0)
      ]),
      actions: l(() => [
        Pe(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: l(() => [
          _(Ge, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          _(Ge, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          _(Ge, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), T(Ge, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : r("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Ih = /* @__PURE__ */ se(Sh, [["__scopeId", "data-v-9231917a"]]), Eh = { class: "env-details" }, Th = { class: "status-row" }, Ph = {
  key: 0,
  class: "detail-row"
}, Rh = { class: "value mono" }, Mh = {
  key: 1,
  class: "detail-row"
}, Dh = { class: "value mono small" }, Lh = { class: "detail-row" }, zh = { class: "value" }, Uh = { class: "detail-row" }, Oh = { class: "value" }, Nh = { class: "detail-row" }, Ah = { class: "value" }, Bh = {
  key: 2,
  class: "section-divider"
}, Fh = {
  key: 3,
  class: "detail-row"
}, Vh = { class: "value" }, Wh = {
  key: 4,
  class: "detail-row"
}, Gh = { class: "value" }, jh = { class: "footer-actions" }, Kh = /* @__PURE__ */ te({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: c }) {
    const n = c;
    function i(u) {
      if (!u) return "Unknown";
      try {
        const g = new Date(u), p = (/* @__PURE__ */ new Date()).getTime() - g.getTime(), d = Math.floor(p / 6e4), v = Math.floor(p / 36e5), w = Math.floor(p / 864e5);
        return d < 1 ? "just now" : d < 60 ? `${d} ${d === 1 ? "minute" : "minutes"} ago` : v < 24 ? `${v} ${v === 1 ? "hour" : "hours"} ago` : w < 30 ? `${w} ${w === 1 ? "day" : "days"} ago` : g.toLocaleDateString();
      } catch {
        return u;
      }
    }
    return (u, g) => (s(), T(He, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: g[2] || (g[2] = (m) => n("close"))
    }, {
      body: l(() => [
        e("div", Eh, [
          e("div", Th, [
            g[3] || (g[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: fe(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", Ph, [
            g[4] || (g[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", Rh, a(t.environment.current_branch), 1)
          ])) : r("", !0),
          t.environment.path ? (s(), o("div", Mh, [
            g[5] || (g[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", Dh, a(t.environment.path), 1)
          ])) : r("", !0),
          g[11] || (g[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Lh, [
            g[6] || (g[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", zh, a(t.environment.workflow_count), 1)
          ]),
          e("div", Uh, [
            g[7] || (g[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Oh, a(t.environment.node_count), 1)
          ]),
          e("div", Nh, [
            g[8] || (g[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Ah, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", Bh)) : r("", !0),
          t.environment.created_at ? (s(), o("div", Fh, [
            g[9] || (g[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", Vh, a(i(t.environment.created_at)), 1)
          ])) : r("", !0),
          t.environment.last_used ? (s(), o("div", Wh, [
            g[10] || (g[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", Gh, a(i(t.environment.last_used)), 1)
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        e("div", jh, [
          t.canDelete ? (s(), T(ye, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: g[0] || (g[0] = (m) => n("delete", t.environment.name))
          }, {
            default: l(() => [...g[12] || (g[12] = [
              h(" Delete ", -1)
            ])]),
            _: 1
          })) : r("", !0),
          g[14] || (g[14] = e("div", { class: "footer-spacer" }, null, -1)),
          _(ye, {
            variant: "secondary",
            size: "sm",
            onClick: g[1] || (g[1] = (m) => n("close"))
          }, {
            default: l(() => [...g[13] || (g[13] = [
              h(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Hh = /* @__PURE__ */ se(Kh, [["__scopeId", "data-v-59855453"]]), vo = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], fo = "3.12", Gs = [
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
], po = "auto", qh = { class: "progress-bar" }, Yh = /* @__PURE__ */ te({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, n = L(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (i, u) => (s(), o("div", qh, [
      e("div", {
        class: fe(["progress-fill", t.variant]),
        style: Lt({ width: n.value })
      }, null, 6)
    ]));
  }
}), Ss = /* @__PURE__ */ se(Yh, [["__scopeId", "data-v-1beb0512"]]), Jh = { class: "task-progress" }, Xh = { class: "progress-info" }, Qh = { class: "progress-percentage" }, Zh = { class: "progress-message" }, e1 = {
  key: 0,
  class: "progress-steps"
}, t1 = { class: "step-icon" }, s1 = { class: "step-label" }, o1 = /* @__PURE__ */ te({
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
    const c = t;
    function n(u) {
      const g = c.steps.find((m) => m.id === u);
      return g ? c.progress >= g.progressThreshold ? "completed" : c.currentPhase === u ? "active" : "pending" : "pending";
    }
    function i(u) {
      const g = n(u);
      return g === "completed" ? "✓" : g === "active" ? "⟳" : "○";
    }
    return (u, g) => (s(), o("div", Jh, [
      _(Ss, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", Xh, [
        e("span", Qh, a(t.progress) + "%", 1),
        e("span", Zh, a(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", e1, [
        (s(!0), o(W, null, ae(t.steps, (m) => (s(), o("div", {
          key: m.id,
          class: fe(["step", n(m.id)])
        }, [
          e("span", t1, a(i(m.id)), 1),
          e("span", s1, a(m.label), 1)
        ], 2))), 128))
      ])) : r("", !0)
    ]));
  }
}), $s = /* @__PURE__ */ se(o1, [["__scopeId", "data-v-9d1de66c"]]), n1 = {
  key: 0,
  class: "create-env-form"
}, a1 = { class: "form-field" }, l1 = { class: "form-field" }, i1 = ["value"], r1 = { class: "form-field" }, d1 = ["disabled"], c1 = ["value"], u1 = { class: "form-field" }, m1 = ["value"], v1 = { class: "form-field form-field--checkbox" }, f1 = { class: "form-checkbox" }, p1 = {
  key: 1,
  class: "create-env-progress"
}, g1 = { class: "creating-intro" }, h1 = {
  key: 0,
  class: "progress-warning"
}, y1 = {
  key: 1,
  class: "create-error"
}, w1 = { class: "error-message" }, k1 = {
  key: 1,
  class: "footer-status"
}, b1 = 10, _1 = /* @__PURE__ */ te({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: c }) {
    const n = c, { getComfyUIReleases: i, createEnvironment: u, getCreateProgress: g } = Fe(), m = y(""), p = y(fo), d = y("latest"), v = y(po), w = y(!1), k = y([{ tag_name: "latest", name: "Latest", published_at: "" }]), b = y(!1), f = y(!1), C = y({
      progress: 0,
      message: ""
    });
    let I = null, $ = 0;
    const R = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], A = y(null);
    function E() {
      f.value || n("close");
    }
    async function S() {
      const P = m.value.trim();
      if (P) {
        f.value = !0, C.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const U = {
            name: P,
            python_version: p.value,
            comfyui_version: d.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, re = await u(U);
          re.status === "started" ? Y() : re.status === "error" && (C.value = {
            progress: 0,
            message: re.message || "Failed to start creation",
            error: re.message
          });
        } catch (U) {
          C.value = {
            progress: 0,
            message: U instanceof Error ? U.message : "Unknown error",
            error: U instanceof Error ? U.message : "Unknown error"
          };
        }
      }
    }
    function Y() {
      I || ($ = 0, I = window.setInterval(async () => {
        try {
          const P = await g();
          $ = 0, C.value = {
            progress: P.progress ?? 0,
            message: P.message,
            phase: P.phase,
            error: P.error
          }, P.state === "complete" ? (F(), n("created", P.environment_name || m.value.trim(), w.value)) : P.state === "error" ? (F(), C.value.error = P.error || P.message) : P.state === "idle" && f.value && (F(), C.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= b1 && (F(), C.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function F() {
      I && (clearInterval(I), I = null);
    }
    function z() {
      f.value = !1, C.value = { progress: 0, message: "" }, n("close");
    }
    async function x() {
      b.value = !0;
      try {
        k.value = await i();
      } catch (P) {
        console.error("Failed to load ComfyUI releases:", P);
      } finally {
        b.value = !1;
      }
    }
    return Oe(async () => {
      var P;
      await As(), (P = A.value) == null || P.focus(), x();
    }), Cs(() => {
      F();
    }), (P, U) => (s(), T(He, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !f.value,
      onClose: E
    }, {
      body: l(() => [
        f.value ? (s(), o("div", p1, [
          e("p", g1, [
            U[11] || (U[11] = h(" Creating environment ", -1)),
            e("strong", null, a(m.value), 1),
            U[12] || (U[12] = h("... ", -1))
          ]),
          _($s, {
            progress: C.value.progress,
            message: C.value.message,
            "current-phase": C.value.phase,
            variant: C.value.error ? "error" : "default",
            "show-steps": !0,
            steps: R
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          C.value.error ? r("", !0) : (s(), o("p", h1, " This may take several minutes. Please wait... ")),
          C.value.error ? (s(), o("div", y1, [
            e("p", w1, a(C.value.error), 1)
          ])) : r("", !0)
        ])) : (s(), o("div", n1, [
          e("div", a1, [
            U[6] || (U[6] = e("label", { class: "form-label" }, "Name", -1)),
            Re(e("input", {
              ref_key: "nameInput",
              ref: A,
              "onUpdate:modelValue": U[0] || (U[0] = (re) => m.value = re),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: wt(S, ["enter"])
            }, null, 544), [
              [kt, m.value]
            ])
          ]),
          e("div", l1, [
            U[7] || (U[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Re(e("select", {
              "onUpdate:modelValue": U[1] || (U[1] = (re) => p.value = re),
              class: "form-select"
            }, [
              (s(!0), o(W, null, ae(Se(vo), (re) => (s(), o("option", {
                key: re,
                value: re
              }, a(re), 9, i1))), 128))
            ], 512), [
              [Dt, p.value]
            ])
          ]),
          e("div", r1, [
            U[8] || (U[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Re(e("select", {
              "onUpdate:modelValue": U[2] || (U[2] = (re) => d.value = re),
              class: "form-select",
              disabled: b.value
            }, [
              (s(!0), o(W, null, ae(k.value, (re) => (s(), o("option", {
                key: re.tag_name,
                value: re.tag_name
              }, a(re.name), 9, c1))), 128))
            ], 8, d1), [
              [Dt, d.value]
            ])
          ]),
          e("div", u1, [
            U[9] || (U[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Re(e("select", {
              "onUpdate:modelValue": U[3] || (U[3] = (re) => v.value = re),
              class: "form-select"
            }, [
              (s(!0), o(W, null, ae(Se(Gs), (re) => (s(), o("option", {
                key: re,
                value: re
              }, a(re) + a(re === "auto" ? " (detect GPU)" : ""), 9, m1))), 128))
            ], 512), [
              [Dt, v.value]
            ])
          ]),
          e("div", v1, [
            e("label", f1, [
              Re(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": U[4] || (U[4] = (re) => w.value = re)
              }, null, 512), [
                [ks, w.value]
              ]),
              U[10] || (U[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: l(() => [
        f.value ? (s(), o(W, { key: 1 }, [
          C.value.error ? (s(), T(ye, {
            key: 0,
            variant: "secondary",
            onClick: z
          }, {
            default: l(() => [...U[15] || (U[15] = [
              h(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", k1, " Creating environment... "))
        ], 64)) : (s(), o(W, { key: 0 }, [
          _(ye, {
            variant: "primary",
            disabled: !m.value.trim(),
            onClick: S
          }, {
            default: l(() => [...U[13] || (U[13] = [
              h(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          _(ye, {
            variant: "secondary",
            onClick: U[5] || (U[5] = (re) => n("close"))
          }, {
            default: l(() => [...U[14] || (U[14] = [
              h(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), $1 = /* @__PURE__ */ se(_1, [["__scopeId", "data-v-f37eaa42"]]), C1 = /* @__PURE__ */ te({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getEnvironments: u } = Fe(), g = y([]), m = y(!1), p = y(null), d = y(""), v = y(!1), w = y(!1), k = y(null), b = L(() => {
      if (!d.value.trim()) return g.value;
      const A = d.value.toLowerCase();
      return g.value.filter(
        (E) => {
          var S;
          return E.name.toLowerCase().includes(A) || ((S = E.current_branch) == null ? void 0 : S.toLowerCase().includes(A));
        }
      );
    });
    function f(A, E) {
      w.value = !1, i("created", A, E);
    }
    function C() {
      w.value = !0;
    }
    function I(A) {
      k.value = A;
    }
    function $(A) {
      k.value = null, i("delete", A);
    }
    async function R() {
      m.value = !0, p.value = null;
      try {
        g.value = await u();
      } catch (A) {
        p.value = A instanceof Error ? A.message : "Failed to load environments";
      } finally {
        m.value = !1;
      }
    }
    return Oe(R), c({
      loadEnvironments: R,
      openCreateModal: C
    }), (A, E) => (s(), o(W, null, [
      _(nt, null, {
        header: l(() => [
          _(at, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (S) => v.value = !0)
          }, {
            actions: l(() => [
              _(Q, {
                variant: "primary",
                size: "sm",
                onClick: C
              }, {
                default: l(() => [...E[6] || (E[6] = [
                  h(" Create ", -1)
                ])]),
                _: 1
              }),
              _(Q, {
                variant: "secondary",
                size: "sm",
                onClick: R
              }, {
                default: l(() => [...E[7] || (E[7] = [
                  h(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          _(es, {
            modelValue: d.value,
            "onUpdate:modelValue": E[1] || (E[1] = (S) => d.value = S),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          m.value ? (s(), T(zt, {
            key: 0,
            message: "Loading environments..."
          })) : p.value ? (s(), T(Ut, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: R
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            b.value.length ? (s(), T(Ae, {
              key: 0,
              title: "ENVIRONMENTS",
              count: b.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ae(b.value, (S) => (s(), T(Ih, {
                  key: S.name,
                  "environment-name": S.name,
                  "is-current": S.is_current,
                  "current-branch": S.current_branch,
                  "show-last-used": !1
                }, {
                  actions: l(() => [
                    S.is_current ? r("", !0) : (s(), T(Q, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (Y) => A.$emit("switch", S.name)
                    }, {
                      default: l(() => [...E[8] || (E[8] = [
                        h(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    _(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Y) => I(S)
                    }, {
                      default: l(() => [...E[9] || (E[9] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            b.value.length ? r("", !0) : (s(), T(_t, {
              key: 1,
              icon: "🌍",
              message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
            }, Kt({ _: 2 }, [
              d.value ? void 0 : {
                name: "actions",
                fn: l(() => [
                  _(Q, {
                    variant: "primary",
                    onClick: C
                  }, {
                    default: l(() => [...E[10] || (E[10] = [
                      h(" Create Environment ", -1)
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
      _($t, {
        show: v.value,
        title: "About Environments",
        onClose: E[3] || (E[3] = (S) => v.value = !1)
      }, {
        content: l(() => [...E[11] || (E[11] = [
          e("p", null, [
            e("strong", null, "Environments"),
            h(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
        actions: l(() => [
          _(Q, {
            variant: "secondary",
            onClick: E[2] || (E[2] = (S) => v.value = !1)
          }, {
            default: l(() => [...E[12] || (E[12] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), T(Hh, {
        key: 0,
        environment: k.value,
        "can-delete": g.value.length > 1,
        onClose: E[4] || (E[4] = (S) => k.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : r("", !0),
      w.value ? (s(), T($1, {
        key: 1,
        onClose: E[5] || (E[5] = (S) => w.value = !1),
        onCreated: f
      })) : r("", !0)
    ], 64));
  }
}), x1 = /* @__PURE__ */ se(C1, [["__scopeId", "data-v-f95999f4"]]), S1 = { class: "file-path" }, I1 = { class: "file-path-text" }, E1 = ["title"], T1 = /* @__PURE__ */ te({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = y(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(c.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (u) {
        console.error("Failed to copy:", u);
      }
    }
    return (u, g) => (s(), o("div", S1, [
      g[0] || (g[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", I1, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: i
      }, a(n.value ? "✓" : "📋"), 9, E1)) : r("", !0)
    ]));
  }
}), P1 = /* @__PURE__ */ se(T1, [["__scopeId", "data-v-f0982173"]]), R1 = { class: "export-blocked" }, M1 = { class: "issues-list" }, D1 = { class: "issue-message" }, L1 = {
  key: 0,
  class: "issue-details"
}, z1 = ["onClick"], U1 = { class: "issue-fix" }, O1 = /* @__PURE__ */ te({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(t) {
    const c = t, n = vs({});
    function i(u) {
      const g = c.issues[u];
      return n[u] || g.details.length <= 3 ? g.details : g.details.slice(0, 3);
    }
    return (u, g) => (s(), T(He, {
      title: "Cannot Export",
      size: "md",
      onClose: g[1] || (g[1] = (m) => u.$emit("close"))
    }, {
      body: l(() => [
        e("div", R1, [
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
          e("div", M1, [
            (s(!0), o(W, null, ae(t.issues, (m, p) => (s(), o("div", {
              key: p,
              class: "issue-item"
            }, [
              e("div", D1, a(m.message), 1),
              m.details.length ? (s(), o("div", L1, [
                (s(!0), o(W, null, ae(i(p), (d, v) => (s(), o("div", {
                  key: v,
                  class: "issue-detail"
                }, a(d), 1))), 128)),
                m.details.length > 3 && !n[p] ? (s(), o("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (d) => n[p] = !0
                }, " +" + a(m.details.length - 3) + " more ", 9, z1)) : r("", !0)
              ])) : r("", !0),
              e("div", U1, [
                m.type === "uncommitted_workflows" ? (s(), o(W, { key: 0 }, [
                  h(" Commit your workflow changes before exporting. ")
                ], 64)) : m.type === "uncommitted_git_changes" ? (s(), o(W, { key: 1 }, [
                  h(" Commit your changes before exporting. ")
                ], 64)) : m.type === "unresolved_issues" ? (s(), o(W, { key: 2 }, [
                  h(" Resolve all workflow issues before exporting. ")
                ], 64)) : r("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: l(() => [
        _(ye, {
          variant: "primary",
          onClick: g[0] || (g[0] = (m) => u.$emit("close"))
        }, {
          default: l(() => [...g[3] || (g[3] = [
            h(" Understood ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), go = /* @__PURE__ */ se(O1, [["__scopeId", "data-v-b52f5e32"]]), N1 = { class: "export-warnings" }, A1 = {
  key: 0,
  class: "success-header"
}, B1 = { class: "warning-header" }, F1 = { class: "warning-summary" }, V1 = { class: "warning-title" }, W1 = { class: "models-section" }, G1 = { class: "models-list" }, j1 = { class: "model-info" }, K1 = { class: "model-filename" }, H1 = { class: "model-workflows" }, q1 = ["onClick"], Y1 = /* @__PURE__ */ te({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(t, { emit: c }) {
    const n = t, i = c, u = y(!1), g = y(null), m = L(() => u.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function p() {
      g.value = null, i("revalidate");
    }
    return (d, v) => (s(), o(W, null, [
      _(He, {
        title: "Export Warnings",
        size: "md",
        onClose: v[3] || (v[3] = (w) => d.$emit("cancel"))
      }, {
        body: l(() => [
          e("div", N1, [
            t.models.length === 0 ? (s(), o("div", A1, [...v[4] || (v[4] = [
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
            ])])) : (s(), o(W, { key: 1 }, [
              e("div", B1, [
                v[6] || (v[6] = e("span", { class: "warning-icon" }, [
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
                e("div", F1, [
                  e("h3", V1, a(t.models.length) + " model" + a(t.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  v[5] || (v[5] = e("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              e("div", W1, [
                e("div", G1, [
                  (s(!0), o(W, null, ae(m.value, (w) => (s(), o("div", {
                    key: w.hash,
                    class: "model-item"
                  }, [
                    e("div", j1, [
                      e("div", K1, a(w.filename), 1),
                      e("div", H1, " Used by: " + a(w.workflows.join(", ")), 1)
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      onClick: (k) => g.value = w.hash
                    }, " Add Source ", 8, q1)
                  ]))), 128))
                ]),
                t.models.length > 3 && !u.value ? (s(), o("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: v[0] || (v[0] = (w) => u.value = !0)
                }, " Show " + a(t.models.length - 3) + " more model" + a(t.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : r("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: l(() => [
          _(ye, {
            variant: "secondary",
            onClick: v[1] || (v[1] = (w) => d.$emit("cancel"))
          }, {
            default: l(() => [...v[7] || (v[7] = [
              h(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          _(ye, {
            variant: "primary",
            onClick: v[2] || (v[2] = (w) => d.$emit("confirm"))
          }, {
            default: l(() => [
              h(a(t.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      g.value ? (s(), T(Vs, {
        key: 0,
        identifier: g.value,
        onClose: p
      }, null, 8, ["identifier"])) : r("", !0)
    ], 64));
  }
}), ho = /* @__PURE__ */ se(Y1, [["__scopeId", "data-v-b698d882"]]), J1 = { class: "export-card" }, X1 = { class: "export-path-row" }, Q1 = { class: "export-actions" }, Z1 = {
  key: 1,
  class: "export-warning"
}, ey = /* @__PURE__ */ te({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: c, exportEnvWithForce: n } = Fe(), i = y(""), u = y(!1), g = y(!1), m = y(!1), p = y(null), d = y(!1), v = y(null), w = y(!1), k = y(!1), b = L(() => u.value ? "Validating..." : g.value ? "Exporting..." : "Export Environment");
    async function f() {
      u.value = !0, p.value = null;
      try {
        const E = await c();
        v.value = E, E.can_export ? E.warnings.models_without_sources.length > 0 ? k.value = !0 : await $() : w.value = !0;
      } catch (E) {
        p.value = {
          status: "error",
          message: E instanceof Error ? E.message : "Validation failed"
        };
      } finally {
        u.value = !1;
      }
    }
    async function C() {
      k.value = !1, await $();
    }
    async function I() {
      try {
        const E = await c();
        v.value = E;
      } catch (E) {
        console.error("Re-validation failed:", E);
      }
    }
    async function $() {
      g.value = !0;
      try {
        const E = await n(i.value || void 0);
        p.value = E;
      } catch (E) {
        p.value = {
          status: "error",
          message: E instanceof Error ? E.message : "Export failed"
        };
      } finally {
        g.value = !1;
      }
    }
    async function R() {
      var E;
      if ((E = p.value) != null && E.path)
        try {
          await navigator.clipboard.writeText(p.value.path);
        } catch (S) {
          console.error("Failed to copy path:", S);
        }
    }
    async function A() {
      var E;
      if ((E = p.value) != null && E.path) {
        m.value = !0;
        try {
          const S = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(p.value.path)}`);
          if (!S.ok)
            throw new Error(`Download failed: ${S.statusText}`);
          const Y = await S.blob(), F = URL.createObjectURL(Y), z = p.value.path.split("/").pop() || "environment-export.tar.gz", x = document.createElement("a");
          x.href = F, x.download = z, document.body.appendChild(x), x.click(), document.body.removeChild(x), URL.revokeObjectURL(F);
        } catch (S) {
          console.error("Failed to download:", S), alert(`Download failed: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          m.value = !1;
        }
      }
    }
    return (E, S) => (s(), o(W, null, [
      _(nt, null, {
        header: l(() => [
          _(at, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (Y) => d.value = !0)
          })
        ]),
        content: l(() => [
          _(Ae, { title: "EXPORT OPTIONS" }, {
            default: l(() => [
              e("div", J1, [
                S[7] || (S[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", X1, [
                  _(bs, {
                    modelValue: i.value,
                    "onUpdate:modelValue": S[1] || (S[1] = (Y) => i.value = Y),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Q1, [
                  _(Q, {
                    variant: "primary",
                    size: "md",
                    loading: u.value || g.value,
                    disabled: u.value || g.value,
                    onClick: f
                  }, {
                    default: l(() => [
                      S[6] || (S[6] = e("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        e("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        e("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      h(" " + a(b.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          p.value ? (s(), T(Ae, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: l(() => [
              _(ot, {
                status: p.value.status === "success" ? "synced" : "broken"
              }, Kt({
                icon: l(() => [
                  h(a(p.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: l(() => [
                  h(a(p.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: l(() => [
                  h(a(p.value.status === "success" ? "Your environment has been exported" : p.value.message), 1)
                ]),
                _: 2
              }, [
                p.value.status === "success" ? {
                  name: "details",
                  fn: l(() => [
                    _(Ge, { label: "Saved to:" }, {
                      default: l(() => [
                        _(P1, {
                          path: p.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    p.value.models_without_sources !== void 0 ? (s(), T(Ge, {
                      key: 0,
                      label: "Models without sources:",
                      value: p.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : r("", !0),
                    p.value.models_without_sources && p.value.models_without_sources > 0 ? (s(), o("div", Z1, [...S[8] || (S[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : r("", !0)
                  ]),
                  key: "0"
                } : void 0,
                p.value.status === "success" ? {
                  name: "actions",
                  fn: l(() => [
                    _(Q, {
                      variant: "primary",
                      size: "sm",
                      loading: m.value,
                      onClick: A
                    }, {
                      default: l(() => [...S[9] || (S[9] = [
                        e("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          e("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    _(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: R
                    }, {
                      default: l(() => [...S[10] || (S[10] = [
                        h(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    _(Q, {
                      variant: "ghost",
                      size: "sm",
                      onClick: S[2] || (S[2] = (Y) => p.value = null)
                    }, {
                      default: l(() => [...S[11] || (S[11] = [
                        h(" Dismiss ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : r("", !0)
        ]),
        _: 1
      }),
      _($t, {
        show: d.value,
        title: "What Gets Exported",
        onClose: S[3] || (S[3] = (Y) => d.value = !1)
      }, {
        content: l(() => [...S[12] || (S[12] = [
          e("div", { class: "export-info" }, [
            e("div", { class: "info-section" }, [
              e("strong", null, "Included in Export:"),
              e("ul", null, [
                e("li", null, [
                  e("strong", null, "Workflows"),
                  h(" — All workflows in this environment")
                ]),
                e("li", null, [
                  e("strong", null, "Custom Nodes"),
                  h(" — Node definitions and dependencies")
                ]),
                e("li", null, [
                  e("strong", null, "Models"),
                  h(" — References and source URLs (not the files)")
                ]),
                e("li", null, [
                  e("strong", null, "Configuration"),
                  h(" — Environment settings and metadata")
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
              h(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      w.value && v.value ? (s(), T(go, {
        key: 0,
        issues: v.value.blocking_issues,
        onClose: S[4] || (S[4] = (Y) => w.value = !1)
      }, null, 8, ["issues"])) : r("", !0),
      k.value && v.value ? (s(), T(ho, {
        key: 1,
        models: v.value.warnings.models_without_sources,
        onConfirm: C,
        onCancel: S[5] || (S[5] = (Y) => k.value = !1),
        onRevalidate: I
      }, null, 8, ["models"])) : r("", !0)
    ], 64));
  }
}), ty = /* @__PURE__ */ se(ey, [["__scopeId", "data-v-f4d120f2"]]), sy = { class: "file-input-wrapper" }, oy = ["accept", "multiple", "disabled"], ny = /* @__PURE__ */ te({
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
  setup(t, { expose: c, emit: n }) {
    const i = n, u = y(null);
    function g() {
      var p;
      (p = u.value) == null || p.click();
    }
    function m(p) {
      const d = p.target;
      d.files && d.files.length > 0 && (i("change", d.files), d.value = "");
    }
    return c({
      triggerInput: g
    }), (p, d) => (s(), o("div", sy, [
      e("input", {
        ref_key: "fileInputRef",
        ref: u,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: m
      }, null, 40, oy),
      _(Q, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: g
      }, {
        default: l(() => [
          Pe(p.$slots, "default", {}, () => [
            d[0] || (d[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            h(" " + a(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), ay = /* @__PURE__ */ se(ny, [["__scopeId", "data-v-cd192091"]]), ly = {
  key: 0,
  class: "drop-zone-empty"
}, iy = { class: "drop-zone-text" }, ry = { class: "drop-zone-primary" }, dy = { class: "drop-zone-secondary" }, cy = { class: "drop-zone-actions" }, uy = {
  key: 1,
  class: "drop-zone-file"
}, my = { class: "file-info" }, vy = { class: "file-details" }, fy = { class: "file-name" }, py = { class: "file-size" }, gy = /* @__PURE__ */ te({
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
    const n = c, i = y(!1), u = y(null), g = y(0), m = L(() => u.value !== null), p = L(() => {
      var $;
      return (($ = u.value) == null ? void 0 : $.name) || "";
    }), d = L(() => {
      if (!u.value) return "";
      const $ = u.value.size;
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v($) {
      var R;
      $.stopPropagation(), g.value++, (R = $.dataTransfer) != null && R.types.includes("Files") && (i.value = !0);
    }
    function w($) {
      $.stopPropagation(), $.dataTransfer && ($.dataTransfer.dropEffect = "copy");
    }
    function k($) {
      $.stopPropagation(), g.value--, g.value === 0 && (i.value = !1);
    }
    function b($) {
      var A;
      $.stopPropagation(), g.value = 0, i.value = !1;
      const R = (A = $.dataTransfer) == null ? void 0 : A.files;
      R && R.length > 0 && C(R[0]);
    }
    function f($) {
      $.length > 0 && C($[0]);
    }
    function C($) {
      u.value = $, n("fileSelected", $);
    }
    function I() {
      u.value = null, n("clear");
    }
    return ($, R) => (s(), o("div", {
      class: fe(["file-drop-zone", { "drop-active": i.value, "has-file": m.value }]),
      onDragenter: Be(v, ["prevent"]),
      onDragover: Be(w, ["prevent"]),
      onDragleave: Be(k, ["prevent"]),
      onDrop: Be(b, ["prevent"])
    }, [
      m.value ? (s(), o("div", uy, [
        e("div", my, [
          R[1] || (R[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", vy, [
            e("div", fy, a(p.value), 1),
            e("div", py, a(d.value), 1)
          ])
        ]),
        _(Q, {
          variant: "ghost",
          size: "xs",
          onClick: I,
          title: "Remove file"
        }, {
          default: l(() => [...R[2] || (R[2] = [
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
      ])) : (s(), o("div", ly, [
        R[0] || (R[0] = e("div", { class: "drop-zone-icon" }, [
          e("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
            e("path", { d: "M2 14h12v-2H2v2z" })
          ])
        ], -1)),
        e("div", iy, [
          e("p", ry, a(t.primaryText), 1),
          e("p", dy, a(t.secondaryText), 1)
        ]),
        e("div", cy, [
          _(ay, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "sm",
            onChange: f
          }, {
            default: l(() => [
              h(a(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), hy = /* @__PURE__ */ se(gy, [["__scopeId", "data-v-0f79cb86"]]), yy = { class: "import-preview" }, wy = { class: "preview-header" }, ky = {
  key: 0,
  class: "source-env"
}, by = { class: "preview-content" }, _y = { class: "preview-section" }, $y = { class: "section-header" }, Cy = { class: "section-info" }, xy = { class: "section-count" }, Sy = {
  key: 0,
  class: "item-list"
}, Iy = { class: "item-name" }, Ey = {
  key: 0,
  class: "item-more"
}, Ty = { class: "preview-section" }, Py = { class: "section-header" }, Ry = { class: "section-info" }, My = { class: "section-count" }, Dy = {
  key: 0,
  class: "item-list"
}, Ly = { class: "item-details" }, zy = { class: "item-name" }, Uy = { class: "item-meta" }, Oy = {
  key: 0,
  class: "item-more"
}, Ny = { class: "preview-section" }, Ay = { class: "section-header" }, By = { class: "section-info" }, Fy = { class: "section-count" }, Vy = {
  key: 0,
  class: "item-list"
}, Wy = { class: "item-name" }, Gy = {
  key: 0,
  class: "item-more"
}, jy = {
  key: 0,
  class: "preview-section"
}, Ky = { class: "git-info" }, Hy = /* @__PURE__ */ te({
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
    const c = t, n = L(() => c.workflows.length), i = L(() => c.models.length), u = L(() => c.nodes.length);
    function g(m) {
      return m < 1024 ? `${m} B` : m < 1024 * 1024 ? `${(m / 1024).toFixed(1)} KB` : m < 1024 * 1024 * 1024 ? `${(m / (1024 * 1024)).toFixed(1)} MB` : `${(m / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (m, p) => (s(), o("div", yy, [
      e("div", wy, [
        _(ct, null, {
          default: l(() => [...p[0] || (p[0] = [
            h("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", ky, [
          p[1] || (p[1] = h(" From: ", -1)),
          _(Ls, null, {
            default: l(() => [
              h(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : r("", !0)
      ]),
      e("div", by, [
        e("div", _y, [
          e("div", $y, [
            p[3] || (p[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Cy, [
              p[2] || (p[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", xy, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", Sy, [
            (s(!0), o(W, null, ae(t.workflows.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d,
              class: "preview-item"
            }, [
              p[4] || (p[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Iy, a(d), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", Ey, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        e("div", Ty, [
          e("div", Py, [
            p[6] || (p[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Ry, [
              p[5] || (p[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", My, a(i.value) + " file" + a(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", Dy, [
            (s(!0), o(W, null, ae(t.models.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              p[7] || (p[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", Ly, [
                e("span", zy, a(d.filename), 1),
                e("span", Uy, a(g(d.size)) + " • " + a(d.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", Oy, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        e("div", Ny, [
          e("div", Ay, [
            p[9] || (p[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", By, [
              p[8] || (p[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", Fy, a(u.value) + " node" + a(u.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", Vy, [
            (s(!0), o(W, null, ae(t.nodes.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d,
              class: "preview-item"
            }, [
              p[10] || (p[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Wy, a(d), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", Gy, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", jy, [
          p[11] || (p[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Ky, [
            t.gitBranch ? (s(), T(Ge, {
              key: 0,
              label: "Branch"
            }, {
              default: l(() => [
                _(Ls, null, {
                  default: l(() => [
                    h(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : r("", !0),
            t.gitCommit ? (s(), T(Ge, {
              key: 1,
              label: "Commit"
            }, {
              default: l(() => [
                _(oo, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : r("", !0)
          ])
        ])) : r("", !0)
      ])
    ]));
  }
}), qy = /* @__PURE__ */ se(Hy, [["__scopeId", "data-v-182fe113"]]), Yy = { class: "import-config" }, Jy = { class: "config-container" }, Xy = { class: "config-field" }, Qy = { class: "input-wrapper" }, Zy = ["value"], e0 = {
  key: 0,
  class: "validating-indicator"
}, t0 = {
  key: 1,
  class: "valid-indicator"
}, s0 = {
  key: 0,
  class: "field-error"
}, o0 = { class: "config-field" }, n0 = { class: "strategy-options" }, a0 = ["value", "checked", "onChange"], l0 = { class: "strategy-content" }, i0 = { class: "strategy-label" }, r0 = { class: "strategy-description" }, d0 = { class: "config-field switch-field" }, c0 = { class: "switch-label" }, u0 = ["checked"], m0 = { class: "advanced-section" }, v0 = { class: "advanced-content" }, f0 = { class: "config-field" }, p0 = ["value"], g0 = ["value"], h0 = /* @__PURE__ */ te({
  __name: "ImportConfigForm",
  props: {
    name: {},
    modelStrategy: {},
    torchBackend: {},
    switchAfterImport: { type: Boolean },
    nameError: {}
  },
  emits: ["update:name", "update:modelStrategy", "update:torchBackend", "update:switchAfterImport", "validate-name"],
  setup(t, { emit: c }) {
    const n = t, i = c, u = y(!1), g = y(!1);
    ut(() => n.nameError, (w) => {
      u.value = !1, g.value = !w && n.name.length > 0;
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
    let p = null;
    function d(w) {
      const k = w.target.value;
      i("update:name", k), g.value = !1, p && clearTimeout(p), k.length > 0 ? (u.value = !0, p = setTimeout(() => {
        i("validate-name", k);
      }, 400)) : u.value = !1;
    }
    function v() {
      n.name.length > 0 && i("validate-name", n.name);
    }
    return (w, k) => (s(), o("div", Yy, [
      _(ct, null, {
        default: l(() => [...k[2] || (k[2] = [
          h("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", Jy, [
        e("div", Xy, [
          _(ys, { required: "" }, {
            default: l(() => [...k[3] || (k[3] = [
              h("Environment Name", -1)
            ])]),
            _: 1
          }),
          e("div", Qy, [
            e("input", {
              type: "text",
              class: fe(["name-input", { error: t.nameError || t.name.length === 0, valid: g.value }]),
              value: t.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: v
            }, null, 42, Zy),
            u.value ? (s(), o("span", e0, "...")) : g.value ? (s(), o("span", t0, "✓")) : r("", !0)
          ]),
          t.nameError ? (s(), o("div", s0, a(t.nameError), 1)) : r("", !0),
          k[4] || (k[4] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", o0, [
          _(ys, null, {
            default: l(() => [...k[5] || (k[5] = [
              h("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", n0, [
            (s(), o(W, null, ae(m, (b) => e("label", {
              key: b.value,
              class: fe(["strategy-option", { active: t.modelStrategy === b.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: b.value,
                checked: t.modelStrategy === b.value,
                onChange: (f) => i("update:modelStrategy", b.value)
              }, null, 40, a0),
              e("div", l0, [
                e("span", i0, a(b.label), 1),
                e("span", r0, a(b.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", d0, [
          e("label", c0, [
            e("input", {
              type: "checkbox",
              checked: t.switchAfterImport,
              onChange: k[0] || (k[0] = (b) => i("update:switchAfterImport", b.target.checked))
            }, null, 40, u0),
            k[6] || (k[6] = e("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        e("details", m0, [
          k[8] || (k[8] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", v0, [
            e("div", f0, [
              _(ys, null, {
                default: l(() => [...k[7] || (k[7] = [
                  h("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              e("select", {
                class: "backend-select",
                value: t.torchBackend,
                onChange: k[1] || (k[1] = (b) => i("update:torchBackend", b.target.value))
              }, [
                (s(!0), o(W, null, ae(Se(Gs), (b) => (s(), o("option", {
                  key: b,
                  value: b
                }, a(b) + a(b === "auto" ? " (detect GPU)" : ""), 9, g0))), 128))
              ], 40, p0)
            ])
          ])
        ])
      ])
    ]));
  }
}), y0 = /* @__PURE__ */ se(h0, [["__scopeId", "data-v-89ea06a1"]]), w0 = { class: "import-flow" }, k0 = {
  key: 0,
  class: "import-empty"
}, b0 = { class: "git-import-section" }, _0 = { class: "git-url-input-row" }, $0 = ["disabled"], C0 = {
  key: 0,
  class: "git-error"
}, x0 = {
  key: 1,
  class: "import-configure"
}, S0 = { class: "selected-file-bar" }, I0 = {
  key: 0,
  class: "file-bar-content"
}, E0 = { class: "file-bar-info" }, T0 = { class: "file-bar-name" }, P0 = { class: "file-bar-size" }, R0 = {
  key: 1,
  class: "file-bar-content"
}, M0 = { class: "file-bar-info" }, D0 = { class: "file-bar-name" }, L0 = {
  key: 0,
  class: "preview-loading"
}, z0 = { class: "import-actions" }, U0 = {
  key: 2,
  class: "import-progress"
}, O0 = { class: "creating-intro" }, N0 = {
  key: 0,
  class: "progress-warning"
}, A0 = {
  key: 1,
  class: "import-error"
}, B0 = { class: "error-message" }, F0 = {
  key: 3,
  class: "import-complete"
}, V0 = { class: "complete-message" }, W0 = { class: "complete-title" }, G0 = { class: "complete-details" }, j0 = { class: "complete-actions" }, K0 = /* @__PURE__ */ te({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(t, { expose: c, emit: n }) {
    var Ue, me, ge, Me;
    const i = t, u = n, { previewTarballImport: g, previewGitImport: m, validateEnvironmentName: p, executeImport: d, executeGitImport: v, getImportProgress: w } = Fe();
    let k = null;
    const b = y(null), f = y(i.resumeImport ?? !1), C = y(!1), I = y(!1), $ = y(""), R = y(!1), A = y(null), E = y(""), S = y(null), Y = y(!1), F = y(null), z = y(null), x = y({
      name: ((Ue = i.initialProgress) == null ? void 0 : Ue.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), P = y(null), U = y({
      message: ((me = i.initialProgress) == null ? void 0 : me.message) ?? "Preparing import...",
      phase: ((ge = i.initialProgress) == null ? void 0 : ge.phase) ?? "",
      progress: ((Me = i.initialProgress) == null ? void 0 : Me.progress) ?? 0,
      error: null
    }), re = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], le = L(() => {
      if (!z.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const ce = z.value;
      return {
        sourceEnvironment: ce.comfyui_version ? `ComfyUI ${ce.comfyui_version}` : "Unknown",
        workflows: ce.workflows.map((X) => X.name),
        models: ce.models.map((X) => ({
          filename: X.filename,
          size: 0,
          type: X.relative_path.split("/")[0] || "model"
        })),
        nodes: ce.nodes.map((X) => X.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), K = L(() => !R.value && !A.value && z.value && x.value.name.length > 0 && !P.value && (b.value || S.value));
    async function ee(ce) {
      b.value = ce, R.value = !0, A.value = null, z.value = null;
      try {
        const X = await g(ce);
        z.value = X;
      } catch (X) {
        A.value = X instanceof Error ? X.message : "Failed to analyze file", console.error("Preview error:", X);
      } finally {
        R.value = !1;
      }
    }
    function q() {
      b.value = null, S.value = null, E.value = "", F.value = null, C.value = !1, I.value = !1, $.value = "", z.value = null, A.value = null, x.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, P.value = null, u("source-cleared");
    }
    function O() {
      Ce(), q(), f.value = !1, R.value = !1, Y.value = !1, U.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function N() {
      if (E.value.trim()) {
        Y.value = !0, F.value = null;
        try {
          const ce = await m(E.value.trim());
          S.value = E.value.trim(), z.value = ce;
        } catch (ce) {
          F.value = ce instanceof Error ? ce.message : "Failed to analyze repository";
        } finally {
          Y.value = !1;
        }
      }
    }
    function M(ce) {
      try {
        const X = new URL(ce);
        return X.host + X.pathname.replace(/\.git$/, "");
      } catch {
        return ce;
      }
    }
    async function ve(ce) {
      if (!ce) {
        P.value = "Environment name is required";
        return;
      }
      try {
        const X = await p(ce);
        P.value = X.valid ? null : X.error || "Invalid name";
      } catch {
        P.value = "Failed to validate name";
      }
    }
    async function oe() {
      if (x.value.name && !(!b.value && !S.value)) {
        f.value = !0, C.value = !1, U.value = { message: `Creating environment '${x.value.name}'...`, phase: "", progress: 0, error: null }, u("import-started");
        try {
          let ce;
          if (b.value)
            ce = await d(
              b.value,
              x.value.name,
              x.value.modelStrategy,
              x.value.torchBackend
            );
          else if (S.value)
            ce = await v(
              S.value,
              x.value.name,
              x.value.modelStrategy,
              x.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          ce.status === "started" ? be() : (I.value = !1, $.value = ce.message, f.value = !1, C.value = !0);
        } catch (ce) {
          I.value = !1, $.value = ce instanceof Error ? ce.message : "Unknown error occurred during import", f.value = !1, C.value = !0;
        }
      }
    }
    async function be() {
      if (k) return;
      const ce = async () => {
        try {
          const De = await w();
          return U.value = {
            message: De.message,
            phase: De.phase || "",
            progress: De.progress ?? (De.state === "importing" ? 50 : 0),
            error: De.error || null
          }, De.state === "complete" ? (Ce(), I.value = !0, $.value = `Environment '${De.environment_name}' created successfully`, f.value = !1, C.value = !0, De.environment_name && u("import-complete", De.environment_name, x.value.switchAfterImport), !1) : De.state === "error" ? (Ce(), I.value = !1, $.value = De.error || De.message, f.value = !1, C.value = !0, !1) : !0;
        } catch (De) {
          return console.error("Failed to poll import progress:", De), !0;
        }
      };
      await ce() && (k = setInterval(async () => {
        await ce() || Ce();
      }, 2e3));
    }
    function Ce() {
      k && (clearInterval(k), k = null);
    }
    function Le(ce) {
      return ce < 1024 ? `${ce} B` : ce < 1024 * 1024 ? `${(ce / 1024).toFixed(1)} KB` : ce < 1024 * 1024 * 1024 ? `${(ce / (1024 * 1024)).toFixed(1)} MB` : `${(ce / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Oe(async () => {
      try {
        const ce = await w();
        console.log("[ComfyGit ImportFlow] Import progress check:", ce.state, ce), ce.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", ce.environment_name), f.value = !0, x.value.name = ce.environment_name || x.value.name || "", U.value = {
          progress: ce.progress ?? 0,
          message: ce.message || "Importing...",
          phase: ce.phase || "",
          error: null
        }, be());
      } catch (ce) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", ce);
      }
    }), c({
      handleReset: O,
      isImporting: f,
      canImport: K
    }), (ce, X) => {
      var De;
      return s(), o("div", w0, [
        !b.value && !S.value && !f.value ? (s(), o("div", k0, [
          _(hy, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: ee
          }),
          X[7] || (X[7] = e("div", { class: "import-divider" }, [
            e("span", null, "or")
          ], -1)),
          e("div", b0, [
            X[5] || (X[5] = e("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            e("div", _0, [
              Re(e("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": X[0] || (X[0] = (pe) => E.value = pe),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: wt(N, ["enter"]),
                disabled: Y.value
              }, null, 40, $0), [
                [kt, E.value]
              ]),
              _(Q, {
                variant: "primary",
                size: "sm",
                disabled: !E.value.trim() || Y.value,
                onClick: N
              }, {
                default: l(() => [
                  h(a(Y.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            F.value ? (s(), o("div", C0, a(F.value), 1)) : r("", !0),
            X[6] || (X[6] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (b.value || S.value) && !f.value && !C.value ? (s(), o("div", x0, [
          e("div", S0, [
            b.value ? (s(), o("div", I0, [
              X[8] || (X[8] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", E0, [
                e("div", T0, a(b.value.name), 1),
                e("div", P0, a(Le(b.value.size)), 1)
              ])
            ])) : S.value ? (s(), o("div", R0, [
              X[10] || (X[10] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
              e("div", M0, [
                e("div", D0, a(M(S.value)), 1),
                X[9] || (X[9] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : r("", !0),
            _(Q, {
              variant: "ghost",
              size: "sm",
              onClick: q
            }, {
              default: l(() => [...X[11] || (X[11] = [
                h(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          R.value ? (s(), o("div", L0, [...X[12] || (X[12] = [
            e("div", { class: "loading-spinner" }, null, -1),
            e("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : A.value ? (s(), T(ht, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [A.value]
          }, null, 8, ["details"])) : z.value ? (s(), T(qy, {
            key: 2,
            "source-environment": le.value.sourceEnvironment,
            workflows: le.value.workflows,
            models: le.value.models,
            nodes: le.value.nodes,
            "git-branch": le.value.gitBranch,
            "git-commit": le.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : r("", !0),
          z.value ? (s(), T(y0, {
            key: 3,
            name: x.value.name,
            "onUpdate:name": X[1] || (X[1] = (pe) => x.value.name = pe),
            "model-strategy": x.value.modelStrategy,
            "onUpdate:modelStrategy": X[2] || (X[2] = (pe) => x.value.modelStrategy = pe),
            "torch-backend": x.value.torchBackend,
            "onUpdate:torchBackend": X[3] || (X[3] = (pe) => x.value.torchBackend = pe),
            "switch-after-import": x.value.switchAfterImport,
            "onUpdate:switchAfterImport": X[4] || (X[4] = (pe) => x.value.switchAfterImport = pe),
            "name-error": P.value,
            onValidateName: ve
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : r("", !0),
          x.value.modelStrategy === "skip" && ((De = z.value) != null && De.models_needing_download) ? (s(), T(ht, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${z.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : r("", !0),
          e("div", z0, [
            _(Q, {
              variant: "secondary",
              size: "md",
              onClick: q
            }, {
              default: l(() => [...X[13] || (X[13] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            _(Q, {
              variant: "primary",
              size: "md",
              disabled: !K.value,
              onClick: oe
            }, {
              default: l(() => [...X[14] || (X[14] = [
                h(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : f.value ? (s(), o("div", U0, [
          e("p", O0, [
            X[15] || (X[15] = h(" Importing environment ", -1)),
            e("strong", null, a(x.value.name), 1),
            X[16] || (X[16] = h("... ", -1))
          ]),
          _($s, {
            progress: U.value.progress,
            message: U.value.message,
            "current-phase": U.value.phase,
            variant: U.value.error ? "error" : "default",
            "show-steps": !0,
            steps: re
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          U.value.error ? r("", !0) : (s(), o("p", N0, " This may take several minutes. Please wait... ")),
          U.value.error ? (s(), o("div", A0, [
            e("p", B0, a(U.value.error), 1)
          ])) : r("", !0)
        ])) : C.value ? (s(), o("div", F0, [
          e("div", {
            class: fe(["complete-icon", I.value ? "success" : "error"])
          }, a(I.value ? "✓" : "✕"), 3),
          e("div", V0, [
            e("div", W0, a(I.value ? "Import Successful" : "Import Failed"), 1),
            e("div", G0, a($.value), 1)
          ]),
          e("div", j0, [
            _(Q, {
              variant: "primary",
              size: "md",
              onClick: O
            }, {
              default: l(() => [...X[17] || (X[17] = [
                h(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : r("", !0)
      ]);
    };
  }
}), yo = /* @__PURE__ */ se(K0, [["__scopeId", "data-v-72cbc04e"]]), H0 = /* @__PURE__ */ te({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(t, { emit: c }) {
    const n = c, i = y(!1);
    function u(g, m) {
      m && n("import-complete-switch", g);
    }
    return (g, m) => (s(), o(W, null, [
      _(nt, null, {
        header: l(() => [
          _(at, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: m[0] || (m[0] = (p) => i.value = !0)
          })
        ]),
        content: l(() => [
          _(yo, { onImportComplete: u })
        ]),
        _: 1
      }),
      _($t, {
        show: i.value,
        title: "How Import Works",
        onClose: m[1] || (m[1] = (p) => i.value = !1)
      }, {
        content: l(() => [...m[2] || (m[2] = [
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
}), q0 = /* @__PURE__ */ se(H0, [["__scopeId", "data-v-e13bfe76"]]), gs = Xt(), Y0 = 5e3, Yt = y([]), Ps = y(!1), Rs = y(null);
let ls = null;
async function hs(t, c) {
  var n;
  if (!((n = window.app) != null && n.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(t, c);
}
function wo(t) {
  const c = L(
    () => Yt.value.filter((f) => f.status === "running")
  ), n = L(
    () => Yt.value.filter((f) => f.status === "deploying")
  ), i = L(
    () => Yt.value.filter((f) => f.status === "stopped")
  ), u = L(
    () => c.value.length + n.value.length
  ), g = L(() => {
    const f = {
      deploying: 0,
      running: 1,
      stopped: 2,
      error: 3,
      terminated: 4
    };
    return [...Yt.value].sort(
      (C, I) => (f[C.status] ?? 5) - (f[I.status] ?? 5)
    );
  });
  async function m() {
    Ps.value = !0, Rs.value = null;
    try {
      let f;
      if (!gs) {
        const C = await hs("/v2/comfygit/deploy/instances");
        if (!C.ok)
          throw new Error(`Failed to fetch instances: ${C.status}`);
        f = await C.json();
      }
      Yt.value = f.instances;
    } catch (f) {
      Rs.value = f instanceof Error ? f.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", f);
    } finally {
      Ps.value = !1;
    }
  }
  function p(f, C) {
    if (f.provider === "custom" && f.worker_name) {
      const I = f.id.includes(":") ? f.id.split(":").slice(1).join(":") : f.id;
      return C === "terminate" ? `/v2/comfygit/deploy/custom/${f.worker_name}/instances/${I}` : `/v2/comfygit/deploy/custom/${f.worker_name}/instances/${I}/${C}`;
    }
    return C === "terminate" ? `/v2/comfygit/deploy/${f.provider}/${f.id}` : `/v2/comfygit/deploy/${f.provider}/${f.id}/${C}`;
  }
  async function d(f) {
    try {
      if (!gs) {
        const C = p(f, "stop"), I = await hs(C, { method: "POST" });
        if (!I.ok) {
          const $ = await I.json();
          throw new Error($.message || "Failed to stop instance");
        }
      }
      await m();
    } catch (C) {
      throw console.error("[useDeployInstances] stopInstance error:", C), C;
    }
  }
  async function v(f) {
    try {
      if (!gs) {
        const C = p(f, "start"), I = await hs(C, { method: "POST" });
        if (!I.ok) {
          const $ = await I.json();
          throw new Error($.message || "Failed to start instance");
        }
      }
      await m();
    } catch (C) {
      throw console.error("[useDeployInstances] startInstance error:", C), C;
    }
  }
  async function w(f) {
    try {
      if (!gs) {
        const C = p(f, "terminate"), I = await hs(C, { method: "DELETE" });
        if (!I.ok) {
          const $ = await I.json();
          throw new Error($.message || "Failed to terminate instance");
        }
      }
      await m();
    } catch (C) {
      throw console.error("[useDeployInstances] terminateInstance error:", C), C;
    }
  }
  function k() {
    ls || (ls = window.setInterval(m, Y0));
  }
  function b() {
    ls && (clearInterval(ls), ls = null);
  }
  return ut(n, (f) => {
    f.length > 0 && k();
  }, { immediate: !0 }), t != null && t.autoStart && (m(), k()), {
    // State
    instances: Yt,
    isLoading: Ps,
    error: Rs,
    // Computed
    runningInstances: c,
    deployingInstances: n,
    stoppedInstances: i,
    liveInstanceCount: u,
    sortedInstances: g,
    // Actions
    refreshInstances: m,
    stopInstance: d,
    startInstance: v,
    terminateInstance: w,
    // Polling
    startPolling: k,
    stopPolling: b
  };
}
const J0 = { class: "instance-header" }, X0 = { class: "provider-badge" }, Q0 = { class: "instance-name" }, Z0 = {
  key: 0,
  class: "spinner"
}, ew = { class: "instance-details" }, tw = {
  key: 0,
  class: "detail"
}, sw = {
  key: 1,
  class: "detail instance-url"
}, ow = {
  key: 2,
  class: "detail"
}, nw = {
  key: 3,
  class: "detail"
}, aw = {
  key: 4,
  class: "detail total-cost"
}, lw = {
  key: 0,
  class: "deployment-progress"
}, iw = { class: "progress-message" }, rw = { class: "instance-actions" }, dw = /* @__PURE__ */ te({
  __name: "InstanceCard",
  props: {
    instance: {},
    isLoading: { type: Boolean }
  },
  emits: ["stop", "start", "terminate"],
  setup(t) {
    const c = t, n = L(() => c.instance.provider === "custom" && c.instance.worker_name ? c.instance.worker_name : {
      runpod: "RunPod",
      vast: "Vast.ai",
      custom: "Custom"
    }[c.instance.provider] || c.instance.provider), i = L(() => ({
      deploying: "Deploying",
      starting: "Starting",
      running: "Running",
      stopped: "Stopped",
      error: "Error",
      terminated: "Terminated"
    })[c.instance.status] || c.instance.status), u = L(() => `status-${c.instance.status}`);
    function g() {
      c.instance.comfyui_url && window.open(c.instance.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function m() {
      c.instance.console_url && window.open(c.instance.console_url, "_blank", "noopener,noreferrer");
    }
    function p(d) {
      const v = Math.floor(d / 3600), w = Math.floor(d % 3600 / 60);
      return v > 0 ? `${v}h ${w}m` : `${w}m`;
    }
    return (d, v) => (s(), o("div", {
      class: fe(["instance-card", u.value])
    }, [
      e("div", J0, [
        e("span", X0, a(n.value), 1),
        e("span", Q0, a(t.instance.name), 1),
        e("span", {
          class: fe(["status-indicator", t.instance.status])
        }, [
          t.instance.status === "deploying" || t.instance.status === "starting" ? (s(), o("span", Z0)) : r("", !0),
          h(" " + a(i.value), 1)
        ], 2)
      ]),
      e("div", ew, [
        t.instance.gpu_type ? (s(), o("span", tw, a(t.instance.gpu_type), 1)) : r("", !0),
        t.instance.comfyui_url ? (s(), o("span", sw, a(t.instance.comfyui_url), 1)) : r("", !0),
        t.instance.uptime_seconds ? (s(), o("span", ow, a(p(t.instance.uptime_seconds)), 1)) : r("", !0),
        t.instance.cost_per_hour ? (s(), o("span", nw, "$" + a(t.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : r("", !0),
        t.instance.total_cost ? (s(), o("span", aw, "$" + a(t.instance.total_cost.toFixed(2)) + " total", 1)) : r("", !0)
      ]),
      t.instance.status === "deploying" ? (s(), o("div", lw, [
        e("div", iw, a(t.instance.deployment_message || "Deploying..."), 1),
        t.instance.deployment_progress ? (s(), T(Ss, {
          key: 0,
          progress: t.instance.deployment_progress
        }, null, 8, ["progress"])) : r("", !0)
      ])) : r("", !0),
      e("div", rw, [
        t.instance.status === "running" && t.instance.comfyui_url ? (s(), T(Q, {
          key: 0,
          variant: "primary",
          size: "xs",
          onClick: g
        }, {
          default: l(() => [...v[3] || (v[3] = [
            h(" Open ComfyUI ", -1)
          ])]),
          _: 1
        })) : r("", !0),
        t.instance.console_url && t.instance.provider !== "custom" ? (s(), T(Q, {
          key: 1,
          variant: "ghost",
          size: "xs",
          onClick: m
        }, {
          default: l(() => [...v[4] || (v[4] = [
            h(" Console ", -1)
          ])]),
          _: 1
        })) : r("", !0),
        t.instance.status === "running" ? (s(), T(Q, {
          key: 2,
          variant: "secondary",
          size: "xs",
          loading: t.isLoading,
          disabled: t.isLoading,
          onClick: v[0] || (v[0] = (w) => d.$emit("stop", t.instance))
        }, {
          default: l(() => [...v[5] || (v[5] = [
            h(" Stop ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : r("", !0),
        t.instance.status === "stopped" ? (s(), T(Q, {
          key: 3,
          variant: "secondary",
          size: "xs",
          loading: t.isLoading,
          disabled: t.isLoading,
          onClick: v[1] || (v[1] = (w) => d.$emit("start", t.instance))
        }, {
          default: l(() => [...v[6] || (v[6] = [
            h(" Start ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : r("", !0),
        _(Q, {
          variant: "destructive",
          size: "xs",
          loading: t.isLoading,
          disabled: t.isLoading,
          onClick: v[2] || (v[2] = (w) => d.$emit("terminate", t.instance))
        }, {
          default: l(() => [...v[7] || (v[7] = [
            h(" Terminate ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])
      ])
    ], 2));
  }
}), cw = /* @__PURE__ */ se(dw, [["__scopeId", "data-v-746c3894"]]), uw = { class: "instances-tab" }, mw = { class: "instances-header" }, vw = {
  key: 0,
  class: "loading-state"
}, fw = {
  key: 1,
  class: "empty-state"
}, pw = {
  key: 2,
  class: "instances-list"
}, gw = /* @__PURE__ */ te({
  __name: "InstancesTab",
  props: {
    instances: {},
    isLoading: { type: Boolean },
    actionLoadingId: {}
  },
  emits: ["refresh", "stop", "start", "terminate"],
  setup(t) {
    const c = t, n = L(() => {
      const i = {
        deploying: 0,
        running: 1,
        stopped: 2,
        error: 3,
        terminated: 4
      };
      return [...c.instances].sort(
        (u, g) => (i[u.status] ?? 5) - (i[g.status] ?? 5)
      );
    });
    return (i, u) => (s(), o("div", uw, [
      e("div", mw, [
        _(ct, null, {
          default: l(() => [...u[4] || (u[4] = [
            h("Active Instances", -1)
          ])]),
          _: 1
        }),
        _(Q, {
          variant: "ghost",
          size: "xs",
          loading: t.isLoading,
          onClick: u[0] || (u[0] = (g) => i.$emit("refresh"))
        }, {
          default: l(() => [...u[5] || (u[5] = [
            h(" Refresh ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      t.isLoading && t.instances.length === 0 ? (s(), o("div", vw, [...u[6] || (u[6] = [
        e("span", { class: "spinner" }, null, -1),
        h(" Loading instances... ", -1)
      ])])) : t.instances.length === 0 ? (s(), o("div", fw, [...u[7] || (u[7] = [
        e("span", { class: "empty-icon" }, "○", -1),
        e("span", { class: "empty-text" }, "No active instances", -1),
        e("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (s(), o("div", pw, [
        (s(!0), o(W, null, ae(n.value, (g) => (s(), T(cw, {
          key: g.id,
          instance: g,
          "is-loading": t.actionLoadingId === g.id,
          onStop: u[1] || (u[1] = (m) => i.$emit("stop", m)),
          onStart: u[2] || (u[2] = (m) => i.$emit("start", m)),
          onTerminate: u[3] || (u[3] = (m) => i.$emit("terminate", m))
        }, null, 8, ["instance", "is-loading"]))), 128))
      ]))
    ]));
  }
}), hw = /* @__PURE__ */ se(gw, [["__scopeId", "data-v-ba614fc3"]]), yw = { class: "remote-header" }, ww = { class: "remote-info" }, kw = { class: "remote-icon" }, bw = { class: "remote-name" }, _w = {
  key: 0,
  class: "default-badge"
}, $w = {
  key: 1,
  class: "sync-badge"
}, Cw = {
  key: 0,
  class: "ahead"
}, xw = {
  key: 1,
  class: "behind"
}, Sw = {
  key: 1,
  class: "synced"
}, Iw = ["href"], Ew = {
  key: 1,
  class: "remote-url-text"
}, Tw = { class: "remote-actions" }, Pw = /* @__PURE__ */ te({
  __name: "DeployRemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    isSelected: { type: Boolean },
    isFetching: { type: Boolean },
    isPushing: { type: Boolean }
  },
  emits: ["fetch", "push", "select"],
  setup(t) {
    const c = t, n = L(() => c.remote.is_default), i = L(() => {
      const g = c.remote.fetch_url, m = g.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return m ? `https://${m[1]}/${m[2]}` : g.startsWith("https://") || g.startsWith("http://") ? g.replace(/\.git$/, "") : null;
    }), u = L(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (g, m) => (s(), o("div", {
      class: fe(["deploy-remote-card", { selected: t.isSelected }])
    }, [
      e("div", yw, [
        e("div", ww, [
          e("span", kw, a(n.value ? "🔗" : "🌐"), 1),
          e("span", bw, a(t.remote.name), 1),
          n.value ? (s(), o("span", _w, "DEFAULT")) : r("", !0),
          t.syncStatus ? (s(), o("span", $w, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(W, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", Cw, "↑" + a(t.syncStatus.ahead), 1)) : r("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", xw, "↓" + a(t.syncStatus.behind), 1)) : r("", !0)
            ], 64)) : (s(), o("span", Sw, "✓ synced"))
          ])) : r("", !0)
        ]),
        i.value ? (s(), o("a", {
          key: 0,
          href: i.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: m[0] || (m[0] = Be(() => {
          }, ["stop"]))
        }, a(u.value), 9, Iw)) : (s(), o("span", Ew, a(u.value), 1))
      ]),
      e("div", Tw, [
        _(Q, {
          variant: "secondary",
          size: "xs",
          loading: t.isFetching,
          onClick: m[1] || (m[1] = (p) => g.$emit("fetch", t.remote.name))
        }, {
          default: l(() => [...m[4] || (m[4] = [
            h(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        t.syncStatus && t.syncStatus.ahead > 0 ? (s(), T(Q, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: t.isPushing,
          onClick: m[2] || (m[2] = (p) => g.$emit("push", t.remote.name))
        }, {
          default: l(() => [
            h(" Push ↑" + a(t.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : r("", !0),
        _(Q, {
          variant: t.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: m[3] || (m[3] = (p) => g.$emit("select", t.remote.name))
        }, {
          default: l(() => [
            h(a(t.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), ko = /* @__PURE__ */ se(Pw, [["__scopeId", "data-v-d687d161"]]), Rw = { class: "runpod-tab" }, Mw = { class: "api-key-card" }, Dw = { class: "api-key-row" }, Lw = { class: "api-key-input-wrapper" }, zw = ["type", "disabled"], Uw = ["title"], Ow = { class: "status-icon" }, Nw = { class: "status-text" }, Aw = {
  key: 0,
  class: "credit-balance"
}, Bw = { class: "config-card" }, Fw = { class: "config-row" }, Vw = ["disabled"], Ww = {
  key: 0,
  value: ""
}, Gw = {
  key: 1,
  value: "",
  disabled: ""
}, jw = ["value", "disabled"], Kw = { class: "config-row" }, Hw = {
  key: 0,
  class: "loading-inline"
}, qw = { class: "no-volumes-state" }, Yw = { class: "no-volumes-text" }, Jw = ["value"], Xw = { class: "config-row" }, Qw = ["disabled"], Zw = {
  key: 0,
  value: ""
}, ek = {
  key: 1,
  value: ""
}, tk = {
  key: 2,
  value: ""
}, sk = ["value"], ok = { class: "config-row" }, nk = { class: "radio-group" }, ak = { class: "radio-option" }, lk = { class: "radio-label" }, ik = { class: "radio-option" }, rk = { class: "radio-label" }, dk = { class: "config-row" }, ck = { class: "radio-group" }, uk = { class: "radio-option" }, mk = { class: "radio-label" }, vk = { class: "radio-option" }, fk = { class: "radio-label" }, pk = { class: "config-row" }, gk = {
  key: 0,
  class: "loading-text"
}, hk = {
  key: 1,
  class: "empty-remotes"
}, yk = { class: "remotes-list" }, wk = {
  key: 0,
  class: "sync-warning"
}, kk = { class: "warning-content" }, bk = { class: "remotes-footer" }, _k = { class: "summary-card" }, $k = {
  key: 0,
  class: "loading-text"
}, Ck = { class: "summary-row" }, xk = { class: "summary-value" }, Sk = { class: "summary-row" }, Ik = { class: "summary-value" }, Ek = { class: "summary-row" }, Tk = { class: "summary-value" }, Pk = {
  key: 0,
  class: "summary-sub-row"
}, Rk = { class: "summary-sub-label" }, Mk = {
  key: 1,
  class: "summary-sub-row warning"
}, Dk = { class: "summary-sub-label" }, Lk = { class: "summary-row" }, zk = { class: "summary-value" }, Uk = { class: "summary-row" }, Ok = { class: "summary-value" }, Nk = { class: "deployment-summary" }, Ak = { class: "summary-columns" }, Bk = { class: "summary-column" }, Fk = { class: "pricing-row" }, Vk = { class: "pricing-value" }, Wk = { class: "pricing-row" }, Gk = { class: "pricing-value" }, jk = { class: "pricing-row" }, Kk = { class: "pricing-value" }, Hk = { class: "pricing-row total" }, qk = { class: "pricing-value" }, Yk = { class: "summary-column" }, Jk = { class: "spec-row" }, Xk = { class: "spec-row" }, Qk = {
  key: 0,
  class: "spec-row"
}, Zk = {
  key: 1,
  class: "spec-row spot-warning"
}, eb = {
  key: 4,
  class: "deploy-actions"
}, tb = { class: "progress-content" }, sb = { class: "phase-indicator" }, ob = { key: 0 }, nb = { key: 1 }, ab = { key: 2 }, lb = {
  key: 3,
  class: "spinner"
}, ib = { class: "phase-text" }, rb = { class: "phase-name" }, db = { class: "phase-detail" }, cb = {
  key: 0,
  class: "ready-actions"
}, ub = { class: "console-link" }, mb = ["href"], vb = /* @__PURE__ */ te({
  __name: "RunPodTab",
  emits: ["toast", "navigate", "deployed"],
  setup(t, { emit: c }) {
    const n = c, {
      getDeploySummary: i,
      testRunPodConnection: u,
      getNetworkVolumes: g,
      getRunPodGpuTypes: m,
      deployToRunPod: p,
      getDeploymentStatus: d,
      getStoredRunPodKey: v,
      clearRunPodKey: w,
      validateDeploy: k,
      getRemotes: b,
      getRemoteSyncStatus: f,
      fetchRemote: C,
      pushToRemote: I,
      getDataCenters: $
    } = Fe(), R = y(!1), A = y(""), E = y(!1), S = y(!1), Y = y(null), F = y(null), z = y(""), x = y(""), P = y(""), U = y("SECURE"), re = y("ON_DEMAND"), le = y("my-comfyui-deploy"), K = y([]), ee = y({}), q = y(!1), O = y(null), N = y(null), M = y(null), ve = y([]), oe = y(!1), be = y([]), Ce = y(!1), Le = y([]), Ue = y(!1), me = y(null), ge = y(!1), Me = y(!1), ce = y(null), X = y(!1), De = y(null), pe = y(null), Je = y(null), tt = y(!1), st = y(null), Te = y(!1), Xe = y(!1), qe = L(() => be.value.find((ie) => ie.id === x.value) || null), Qe = L(() => z.value ? be.value.filter((ie) => ie.data_center_id === z.value) : be.value), mt = L(() => Le.value.filter((ie) => ie.available)), $e = L(() => O.value && ee.value[O.value] || null), je = L(() => {
      if (!O.value) return null;
      const ie = K.value.find((j) => j.name === O.value);
      return (ie == null ? void 0 : ie.fetch_url) || null;
    }), it = L(() => E.value && x.value && P.value && je.value && !Me.value && !tt.value), Ye = (ie) => {
      const j = Le.value.find((Ze) => Ze.id === P.value);
      if (!j) return "0.00";
      if (ie === "SECURE") return (j.securePrice ?? 0).toFixed(2);
      if (ie === "COMMUNITY") return (j.communityPrice ?? 0).toFixed(2);
      const Ee = U.value === "SECURE";
      return ie === "ON_DEMAND" ? Ee ? (j.securePrice ?? 0).toFixed(2) : (j.communityPrice ?? 0).toFixed(2) : Ee ? (j.secureSpotPrice ?? 0).toFixed(2) : (j.communitySpotPrice ?? 0).toFixed(2);
    }, ue = L(() => {
      const ie = Le.value.find((xt) => xt.id === P.value), j = be.value.find((xt) => xt.id === x.value);
      if (!ie) return null;
      const Ee = U.value === "SECURE", Ze = re.value === "SPOT";
      let gt;
      Ze ? gt = Ee ? ie.secureSpotPrice ?? 0 : ie.communitySpotPrice ?? 0 : gt = Ee ? ie.securePrice ?? 0 : ie.communityPrice ?? 0;
      const Rt = j ? j.size_gb * 14e-5 : 0, Mt = 4e-3;
      return {
        gpu: gt,
        volume: Rt,
        container: Mt,
        total: gt + Rt + Mt
      };
    });
    async function J() {
      await ft(), await Promise.all([rt(), Z()]);
    }
    async function Z() {
      q.value = !0;
      try {
        const ie = await b();
        K.value = ie.remotes, await Promise.all(
          ie.remotes.map(async (Ee) => {
            const Ze = await f(Ee.name);
            Ze && (ee.value[Ee.name] = Ze);
          })
        );
        const j = ie.remotes.find((Ee) => Ee.is_default);
        j ? O.value = j.name : ie.remotes.length > 0 && (O.value = ie.remotes[0].name);
      } catch {
        n("toast", "Failed to load remotes", "error");
      } finally {
        q.value = !1;
      }
    }
    async function D(ie) {
      N.value = ie;
      try {
        await C(ie);
        const j = await f(ie);
        j && (ee.value[ie] = j), n("toast", `Fetched from ${ie}`, "success");
      } catch {
        n("toast", "Fetch failed", "error");
      } finally {
        N.value = null;
      }
    }
    async function G(ie) {
      M.value = ie;
      try {
        await I(ie, { force: !1 });
        const j = await f(ie);
        j && (ee.value[ie] = j), n("toast", `Pushed to ${ie}`, "success");
      } catch {
        n("toast", "Push failed", "error");
      } finally {
        M.value = null;
      }
    }
    function ne(ie) {
      O.value = ie;
    }
    async function xe() {
      if (A.value) {
        S.value = !0, Y.value = null;
        try {
          const ie = await u(A.value, !0);
          ie.status === "success" ? (E.value = !0, F.value = ie.credit_balance ?? null, Y.value = { type: "success", message: ie.message }, await J()) : Y.value = { type: "error", message: ie.message };
        } catch (ie) {
          Y.value = {
            type: "error",
            message: ie instanceof Error ? ie.message : "Connection test failed"
          };
        } finally {
          S.value = !1;
        }
      }
    }
    async function Ve() {
      try {
        await w(), A.value = "", E.value = !1, Y.value = null, F.value = null, ve.value = [], z.value = "", be.value = [], x.value = "", Le.value = [], P.value = "", me.value = null, n("toast", "API key cleared", "info");
      } catch {
        n("toast", "Failed to clear key", "error");
      }
    }
    async function ft() {
      Ce.value = !0, oe.value = !0;
      try {
        const ie = await g();
        be.value = ie.volumes;
        const j = /* @__PURE__ */ new Map();
        for (const Ee of ie.volumes)
          Ee.data_center_id && !j.has(Ee.data_center_id) && j.set(Ee.data_center_id, {
            id: Ee.data_center_id,
            name: Ee.data_center_name || Ee.data_center_id,
            available: !0
          });
        if (ie.volumes.length === 0) {
          const Ee = await $();
          ve.value = Ee.data_centers;
        } else
          ve.value = Array.from(j.values());
        if (be.value.length > 0) {
          const Ee = be.value[0];
          x.value = Ee.id, Ee.data_center_id && (z.value = Ee.data_center_id, await Ct(Ee.data_center_id));
        } else ve.value.length > 0 && (z.value = ve.value[0].id);
      } catch {
        n("toast", "Failed to load network volumes", "error");
      } finally {
        Ce.value = !1, oe.value = !1;
      }
    }
    async function Ct(ie) {
      Ue.value = !0;
      try {
        const j = await m(ie);
        Le.value = j.gpu_types;
        const Ee = Le.value.find((Ze) => Ze.available);
        Ee ? P.value = Ee.id : P.value = "";
      } catch {
        n("toast", "Failed to load GPU types", "error");
      } finally {
        Ue.value = !1;
      }
    }
    ut(z, async (ie) => {
      if (!ie || Ce.value) return;
      const j = be.value.find((Ee) => Ee.id === x.value);
      j && j.data_center_id !== ie && (x.value = ""), await Ct(ie);
    }), ut(x, async (ie) => {
      if (!ie) {
        Le.value = [], P.value = "";
        return;
      }
      if (Ce.value) return;
      const j = be.value.find((Ee) => Ee.id === ie);
      j && j.data_center_id !== z.value ? z.value = j.data_center_id : j && await Ct(j.data_center_id);
    });
    async function rt() {
      ge.value = !0;
      try {
        me.value = await i();
      } catch {
        n("toast", "Failed to load environment summary", "error");
      } finally {
        ge.value = !1;
      }
    }
    async function Ot() {
      if (!(!P.value || !x.value)) {
        tt.value = !0, ce.value = null;
        try {
          const ie = await k();
          st.value = ie, ie.can_export ? ie.warnings.models_without_sources.length > 0 ? Xe.value = !0 : await Ht() : Te.value = !0;
        } catch (ie) {
          ce.value = {
            status: "error",
            message: ie instanceof Error ? ie.message : "Validation failed"
          }, n("toast", "Validation failed", "error");
        } finally {
          tt.value = !1;
        }
      }
    }
    async function Nt() {
      Xe.value = !1, await Ht();
    }
    async function At() {
      try {
        const ie = await k();
        st.value = ie;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function Ht() {
      Me.value = !0;
      try {
        let ie;
        if (re.value === "SPOT") {
          const Ee = Le.value.find((Ze) => Ze.id === P.value);
          Ee && (ie = U.value === "SECURE" ? Ee.secureSpotPrice : Ee.communitySpotPrice);
        }
        const j = await p({
          gpu_type_id: P.value,
          pod_name: le.value || "my-comfyui-deploy",
          network_volume_id: x.value,
          cloud_type: U.value,
          pricing_type: re.value,
          spot_bid: ie,
          import_source: je.value
        });
        ce.value = j, j.status === "success" && j.pod_id ? (De.value = j.pod_id, X.value = !0, pt(j.pod_id), n("toast", "Deployment started", "success"), n("deployed")) : n("toast", j.message, "error");
      } catch (ie) {
        ce.value = {
          status: "error",
          message: ie instanceof Error ? ie.message : "Deployment failed"
        }, n("toast", "Deployment failed", "error");
      } finally {
        Me.value = !1;
      }
    }
    function pt(ie) {
      Bt(ie), Je.value = window.setInterval(() => Bt(ie), 3e3);
    }
    function Vt() {
      Je.value && (clearInterval(Je.value), Je.value = null);
    }
    async function Bt(ie) {
      try {
        const j = await d(ie);
        pe.value = j, (j.phase === "READY" || j.phase === "ERROR" || j.phase === "STOPPED") && (Vt(), j.phase === "READY" && n("toast", "ComfyUI is ready!", "success"), n("deployed"));
      } catch (j) {
        console.error("Failed to poll deployment status:", j);
      }
    }
    function qt() {
      X.value = !1, Vt(), De.value = null, pe.value = null;
    }
    function ts() {
      var ie;
      (ie = pe.value) != null && ie.comfyui_url && window.open(pe.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function ss(ie) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[ie || ""] || "Initializing...";
    }
    function os(ie) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[ie || ""] ?? 10;
    }
    return Oe(async () => {
      try {
        const ie = await v(!0);
        ie.has_key && ie.key_preview && (A.value = `****${ie.key_preview}`, ie.valid ? (E.value = !0, F.value = ie.credit_balance ?? null, Y.value = { type: "success", message: "Connected to RunPod" }, await J()) : ie.error && (Y.value = { type: "error", message: ie.error }));
      } catch {
      }
    }), Cs(() => {
      Vt();
    }), (ie, j) => {
      var Ee, Ze, gt, Rt, Mt, xt;
      return s(), o(W, null, [
        e("div", Rw, [
          _(Ae, { title: "RUNPOD API KEY" }, {
            default: l(() => [
              e("div", Mw, [
                e("div", Dw, [
                  e("div", Lw, [
                    Re(e("input", {
                      "onUpdate:modelValue": j[0] || (j[0] = (we) => A.value = we),
                      type: R.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: E.value
                    }, null, 8, zw), [
                      [xs, A.value]
                    ]),
                    e("button", {
                      class: "toggle-visibility-btn",
                      onClick: j[1] || (j[1] = (we) => R.value = !R.value),
                      title: R.value ? "Hide key" : "Show key"
                    }, a(R.value ? "👁" : "👁‍🗨"), 9, Uw)
                  ]),
                  E.value ? r("", !0) : (s(), T(Q, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: S.value,
                    disabled: !A.value || S.value,
                    onClick: xe
                  }, {
                    default: l(() => [...j[16] || (j[16] = [
                      h(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  E.value ? (s(), T(Q, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: Ve
                  }, {
                    default: l(() => [...j[17] || (j[17] = [
                      h(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : r("", !0)
                ]),
                Y.value ? (s(), o("div", {
                  key: 0,
                  class: fe(["connection-status", Y.value.type])
                }, [
                  e("span", Ow, a(Y.value.type === "success" ? "✓" : "✕"), 1),
                  e("span", Nw, a(Y.value.message), 1),
                  F.value !== null ? (s(), o("span", Aw, " $" + a(F.value.toFixed(2)) + " credit ", 1)) : r("", !0)
                ], 2)) : r("", !0),
                j[18] || (j[18] = e("div", { class: "api-key-help" }, [
                  e("span", { class: "help-icon" }, "i"),
                  e("span", { class: "help-text" }, [
                    h(" Get your API key at "),
                    e("a", {
                      href: "https://runpod.io/console/user/settings",
                      target: "_blank",
                      rel: "noopener"
                    }, "runpod.io/console/user/settings"),
                    h(". Key stored locally, never sent to ComfyGit servers. ")
                  ])
                ], -1))
              ])
            ]),
            _: 1
          }),
          E.value ? (s(), T(Ae, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: l(() => [
              e("div", Bw, [
                e("div", Fw, [
                  j[19] || (j[19] = e("label", { class: "config-label" }, "Region", -1)),
                  Re(e("select", {
                    "onUpdate:modelValue": j[2] || (j[2] = (we) => z.value = we),
                    class: "config-select",
                    disabled: oe.value
                  }, [
                    oe.value ? (s(), o("option", Ww, "Loading...")) : z.value ? r("", !0) : (s(), o("option", Gw, "Select a region")),
                    (s(!0), o(W, null, ae(ve.value, (we) => (s(), o("option", {
                      key: we.id,
                      value: we.id,
                      disabled: !we.available
                    }, a(we.id) + " (" + a(we.name) + ")" + a(we.available ? "" : " [Unavailable]"), 9, jw))), 128))
                  ], 8, Vw), [
                    [Dt, z.value]
                  ])
                ]),
                e("div", Kw, [
                  j[24] || (j[24] = e("label", { class: "config-label" }, "Network Volume", -1)),
                  Ce.value ? (s(), o("div", Hw, "Loading volumes...")) : Qe.value.length === 0 ? (s(), o(W, { key: 1 }, [
                    e("div", qw, [
                      j[20] || (j[20] = e("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      e("span", Yw, "No volumes in " + a(z.value || "this region"), 1)
                    ]),
                    j[21] || (j[21] = e("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    j[22] || (j[22] = e("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (s(), o(W, { key: 2 }, [
                    Re(e("select", {
                      "onUpdate:modelValue": j[3] || (j[3] = (we) => x.value = we),
                      class: "config-select"
                    }, [
                      (s(!0), o(W, null, ae(Qe.value, (we) => (s(), o("option", {
                        key: we.id,
                        value: we.id
                      }, a(we.name) + " (" + a(we.size_gb) + "GB) ", 9, Jw))), 128))
                    ], 512), [
                      [Dt, x.value]
                    ]),
                    j[23] || (j[23] = e("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                e("div", Xw, [
                  j[25] || (j[25] = e("label", { class: "config-label" }, "GPU Type", -1)),
                  Re(e("select", {
                    "onUpdate:modelValue": j[4] || (j[4] = (we) => P.value = we),
                    class: "config-select",
                    disabled: Ue.value || !x.value
                  }, [
                    x.value ? Ue.value ? (s(), o("option", ek, "Loading GPUs...")) : mt.value.length === 0 ? (s(), o("option", tk, "No GPUs available in this region")) : r("", !0) : (s(), o("option", Zw, "Select a volume first")),
                    (s(!0), o(W, null, ae(mt.value, (we) => (s(), o("option", {
                      key: we.id,
                      value: we.id
                    }, a(we.displayName) + " (" + a(we.memoryInGb) + "GB) - $" + a(U.value === "SECURE" ? (we.securePrice ?? 0).toFixed(2) : (we.communityPrice ?? 0).toFixed(2)) + "/hr " + a(we.stockStatus ? `[${we.stockStatus}]` : ""), 9, sk))), 128))
                  ], 8, Qw), [
                    [Dt, P.value]
                  ])
                ]),
                e("div", ok, [
                  j[26] || (j[26] = e("label", { class: "config-label" }, "Cloud Type", -1)),
                  e("div", nk, [
                    e("label", ak, [
                      Re(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": j[5] || (j[5] = (we) => U.value = we),
                        value: "SECURE"
                      }, null, 512), [
                        [Pt, U.value]
                      ]),
                      e("span", lk, "Secure ($" + a(Ye("SECURE")) + "/hr)", 1)
                    ]),
                    e("label", ik, [
                      Re(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": j[6] || (j[6] = (we) => U.value = we),
                        value: "COMMUNITY"
                      }, null, 512), [
                        [Pt, U.value]
                      ]),
                      e("span", rk, "Community ($" + a(Ye("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                e("div", dk, [
                  j[27] || (j[27] = e("label", { class: "config-label" }, [
                    h(" Pricing "),
                    e("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  e("div", ck, [
                    e("label", uk, [
                      Re(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": j[7] || (j[7] = (we) => re.value = we),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [Pt, re.value]
                      ]),
                      e("span", mk, "On-Demand ($" + a(Ye("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    e("label", vk, [
                      Re(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": j[8] || (j[8] = (we) => re.value = we),
                        value: "SPOT"
                      }, null, 512), [
                        [Pt, re.value]
                      ]),
                      e("span", fk, "Spot ($" + a(Ye("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                e("div", pk, [
                  j[28] || (j[28] = e("label", { class: "config-label" }, "Pod Name", -1)),
                  Re(e("input", {
                    "onUpdate:modelValue": j[9] || (j[9] = (we) => le.value = we),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [kt, le.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : r("", !0),
          E.value ? (s(), T(Ae, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: l(() => [
              q.value ? (s(), o("div", gk, "Loading remotes...")) : K.value.length === 0 ? (s(), o("div", hk, [
                j[30] || (j[30] = e("div", { class: "empty-message" }, [
                  e("span", { class: "empty-icon" }, "🌐"),
                  e("span", { class: "empty-text" }, "No Git remotes configured"),
                  e("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                _(Q, {
                  variant: "primary",
                  size: "xs",
                  onClick: j[10] || (j[10] = (we) => n("navigate", "remotes"))
                }, {
                  default: l(() => [...j[29] || (j[29] = [
                    h(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (s(), o(W, { key: 2 }, [
                e("div", yk, [
                  (s(!0), o(W, null, ae(K.value, (we) => (s(), T(ko, {
                    key: we.name,
                    remote: we,
                    "sync-status": ee.value[we.name],
                    "is-selected": O.value === we.name,
                    "is-fetching": N.value === we.name,
                    "is-pushing": M.value === we.name,
                    onFetch: D,
                    onPush: G,
                    onSelect: ne
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                $e.value && $e.value.ahead > 0 ? (s(), o("div", wk, [
                  j[31] || (j[31] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("div", kk, [
                    e("strong", null, a($e.value.ahead) + " unpushed commit" + a($e.value.ahead !== 1 ? "s" : ""), 1),
                    e("p", null, "Push to '" + a(O.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  _(Q, {
                    variant: "primary",
                    size: "xs",
                    loading: M.value === O.value,
                    onClick: j[11] || (j[11] = (we) => O.value && G(O.value))
                  }, {
                    default: l(() => [
                      h(" Push to " + a(O.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : r("", !0),
                e("div", bk, [
                  _(Q, {
                    variant: "link",
                    size: "xs",
                    onClick: j[12] || (j[12] = (we) => n("navigate", "remotes"))
                  }, {
                    default: l(() => [...j[32] || (j[32] = [
                      h(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : r("", !0),
          E.value ? (s(), T(Ae, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: l(() => [
              e("div", _k, [
                ge.value ? (s(), o("div", $k, "Loading environment summary...")) : me.value ? (s(), o(W, { key: 1 }, [
                  e("div", Ck, [
                    j[33] || (j[33] = e("span", { class: "summary-label" }, "ComfyUI", -1)),
                    e("span", xk, a(me.value.comfyui_version), 1)
                  ]),
                  e("div", Sk, [
                    j[34] || (j[34] = e("span", { class: "summary-label" }, "Nodes", -1)),
                    e("span", Ik, a(me.value.node_count) + " custom nodes", 1)
                  ]),
                  e("div", Ek, [
                    j[35] || (j[35] = e("span", { class: "summary-label" }, "Models", -1)),
                    e("span", Tk, a(me.value.model_count) + " models", 1)
                  ]),
                  me.value.models_with_sources > 0 ? (s(), o("div", Pk, [
                    e("span", Rk, "└─ " + a(me.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : r("", !0),
                  me.value.models_without_sources > 0 ? (s(), o("div", Mk, [
                    e("span", Dk, "└─ " + a(me.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : r("", !0),
                  e("div", Lk, [
                    j[36] || (j[36] = e("span", { class: "summary-label" }, "Workflows", -1)),
                    e("span", zk, a(me.value.workflow_count) + " committed", 1)
                  ]),
                  e("div", Uk, [
                    j[37] || (j[37] = e("span", { class: "summary-label" }, "Package", -1)),
                    e("span", Ok, "~" + a(me.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : r("", !0)
              ])
            ]),
            _: 1
          })) : r("", !0),
          E.value && ue.value ? (s(), T(Ae, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: l(() => {
              var we, St;
              return [
                e("div", Nk, [
                  e("div", Ak, [
                    e("div", Bk, [
                      j[42] || (j[42] = e("div", { class: "column-header" }, "Pricing", -1)),
                      e("div", Fk, [
                        j[38] || (j[38] = e("span", { class: "pricing-label" }, "GPU:", -1)),
                        e("span", Vk, "$" + a(ue.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      e("div", Wk, [
                        j[39] || (j[39] = e("span", { class: "pricing-label" }, "Volume:", -1)),
                        e("span", Gk, "$" + a(ue.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      e("div", jk, [
                        j[40] || (j[40] = e("span", { class: "pricing-label" }, "Disk:", -1)),
                        e("span", Kk, "$" + a(ue.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      j[43] || (j[43] = e("div", { class: "pricing-divider" }, null, -1)),
                      e("div", Hk, [
                        j[41] || (j[41] = e("span", { class: "pricing-label" }, "Total:", -1)),
                        e("span", qk, "~$" + a(ue.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    e("div", Yk, [
                      j[45] || (j[45] = e("div", { class: "column-header" }, "Pod Specs", -1)),
                      e("div", Jk, [
                        e("span", null, a(((we = Le.value.find((H) => H.id === P.value)) == null ? void 0 : we.displayName) || "GPU") + " (" + a(((St = Le.value.find((H) => H.id === P.value)) == null ? void 0 : St.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      e("div", Xk, [
                        e("span", null, "Region: " + a(z.value), 1)
                      ]),
                      qe.value ? (s(), o("div", Qk, [
                        e("span", null, "Volume: " + a(qe.value.name), 1)
                      ])) : r("", !0),
                      re.value === "SPOT" ? (s(), o("div", Zk, [...j[44] || (j[44] = [
                        e("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : r("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : r("", !0),
          E.value ? (s(), o("div", eb, [
            _(Q, {
              variant: "primary",
              size: "md",
              loading: tt.value || Me.value,
              disabled: !it.value,
              onClick: Ot
            }, {
              default: l(() => [
                j[46] || (j[46] = e("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                  e("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                ], -1)),
                h(" " + a(tt.value ? "Validating..." : Me.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : r("", !0),
          ce.value ? (s(), T(Ae, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: l(() => [
              _(ot, {
                status: ce.value.status === "success" ? "synced" : "broken"
              }, Kt({
                icon: l(() => [
                  h(a(ce.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: l(() => [
                  h(a(ce.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: l(() => [
                  h(a(ce.value.message), 1)
                ]),
                actions: l(() => [
                  _(Q, {
                    variant: "ghost",
                    size: "xs",
                    onClick: j[13] || (j[13] = (we) => ce.value = null)
                  }, {
                    default: l(() => [...j[47] || (j[47] = [
                      h(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                ce.value.pod_id ? {
                  name: "details",
                  fn: l(() => [
                    _(Ge, {
                      label: "Pod ID:",
                      value: ce.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : r("", !0)
        ]),
        X.value ? (s(), T(He, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((Ee = pe.value) == null ? void 0 : Ee.phase) === "READY" || ((Ze = pe.value) == null ? void 0 : Ze.phase) === "ERROR" || ((gt = pe.value) == null ? void 0 : gt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: qt
        }, Kt({
          body: l(() => {
            var we, St, H, B, he, Ie, Ne, Ke, lt, It, Wt, Gt;
            return [
              e("div", tb, [
                e("div", sb, [
                  e("div", {
                    class: fe(["phase-icon", (St = (we = pe.value) == null ? void 0 : we.phase) == null ? void 0 : St.toLowerCase()])
                  }, [
                    ((H = pe.value) == null ? void 0 : H.phase) === "READY" ? (s(), o("span", ob, "✓")) : ((B = pe.value) == null ? void 0 : B.phase) === "ERROR" ? (s(), o("span", nb, "✕")) : ((he = pe.value) == null ? void 0 : he.phase) === "STOPPED" ? (s(), o("span", ab, "○")) : (s(), o("span", lb, "⟳"))
                  ], 2),
                  e("div", ib, [
                    e("div", rb, a(ss((Ie = pe.value) == null ? void 0 : Ie.phase)), 1),
                    e("div", db, a(((Ne = pe.value) == null ? void 0 : Ne.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                _(Ss, {
                  progress: os((Ke = pe.value) == null ? void 0 : Ke.phase),
                  variant: ((lt = pe.value) == null ? void 0 : lt.phase) === "ERROR" ? "error" : ((It = pe.value) == null ? void 0 : It.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((Wt = pe.value) == null ? void 0 : Wt.phase) === "READY" ? (s(), o("div", cb, [
                  _(Q, {
                    variant: "primary",
                    size: "md",
                    onClick: ts
                  }, {
                    default: l(() => [...j[48] || (j[48] = [
                      h(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : r("", !0),
                e("div", ub, [
                  (Gt = pe.value) != null && Gt.console_url ? (s(), o("a", {
                    key: 0,
                    href: pe.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, mb)) : r("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((Rt = pe.value) == null ? void 0 : Rt.phase) === "READY" || ((Mt = pe.value) == null ? void 0 : Mt.phase) === "ERROR" || ((xt = pe.value) == null ? void 0 : xt.phase) === "STOPPED" ? {
            name: "footer",
            fn: l(() => [
              _(Q, {
                variant: "ghost",
                size: "xs",
                onClick: qt
              }, {
                default: l(() => [...j[49] || (j[49] = [
                  h(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : r("", !0),
        Te.value && st.value ? (s(), T(go, {
          key: 1,
          issues: st.value.blocking_issues,
          onClose: j[14] || (j[14] = (we) => Te.value = !1)
        }, null, 8, ["issues"])) : r("", !0),
        Xe.value && st.value ? (s(), T(ho, {
          key: 2,
          models: st.value.warnings.models_without_sources,
          onConfirm: Nt,
          onCancel: j[15] || (j[15] = (we) => Xe.value = !1),
          onRevalidate: At
        }, null, 8, ["models"])) : r("", !0)
      ], 64);
    };
  }
}), fb = /* @__PURE__ */ se(vb, [["__scopeId", "data-v-925ec410"]]), pb = { class: "worker-header" }, gb = { class: "worker-status" }, hb = { class: "worker-name" }, yb = { class: "worker-actions" }, wb = { class: "worker-details" }, kb = { class: "detail-item" }, bb = { class: "detail-value" }, _b = {
  key: 0,
  class: "detail-item"
}, $b = { class: "detail-value" }, Cb = {
  key: 1,
  class: "detail-item"
}, xb = { class: "detail-value mode-badge" }, Sb = {
  key: 0,
  class: "worker-stats"
}, Ib = {
  key: 0,
  class: "stat-item"
}, Eb = { key: 0 }, Tb = {
  key: 1,
  class: "worker-stats offline"
}, Pb = /* @__PURE__ */ te({
  __name: "WorkerCard",
  props: {
    worker: {},
    isActionLoading: { type: Boolean }
  },
  emits: ["deploy", "remove"],
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: fe(["worker-card", { offline: t.worker.status === "offline" }])
    }, [
      e("div", pb, [
        e("div", gb, [
          e("span", {
            class: fe(["status-dot", t.worker.status])
          }, null, 2),
          e("span", hb, a(t.worker.name), 1)
        ]),
        e("div", yb, [
          t.worker.status === "online" ? (s(), T(Q, {
            key: 0,
            variant: "primary",
            size: "xs",
            disabled: t.isActionLoading,
            onClick: n[0] || (n[0] = (i) => c.$emit("deploy", t.worker))
          }, {
            default: l(() => [...n[2] || (n[2] = [
              h(" Deploy ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])) : r("", !0),
          _(Q, {
            variant: "ghost",
            size: "xs",
            loading: t.isActionLoading,
            onClick: n[1] || (n[1] = (i) => c.$emit("remove", t.worker.name))
          }, {
            default: l(() => [...n[3] || (n[3] = [
              h(" Remove ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ]),
      e("div", wb, [
        e("span", kb, [
          e("span", bb, a(t.worker.host) + ":" + a(t.worker.port), 1)
        ]),
        t.worker.gpu_info ? (s(), o("span", _b, [
          n[4] || (n[4] = e("span", { class: "detail-label" }, "•", -1)),
          e("span", $b, a(t.worker.gpu_info), 1)
        ])) : r("", !0),
        t.worker.mode ? (s(), o("span", Cb, [
          n[5] || (n[5] = e("span", { class: "detail-label" }, "•", -1)),
          e("span", xb, a(t.worker.mode), 1)
        ])) : r("", !0)
      ]),
      t.worker.status === "online" ? (s(), o("div", Sb, [
        n[6] || (n[6] = e("span", { class: "stat-item" }, [
          h(" Status: "),
          e("span", { class: "stat-value online" }, "Online")
        ], -1)),
        t.worker.instance_count !== void 0 ? (s(), o("span", Ib, [
          h(" • " + a(t.worker.instance_count) + " instance" + a(t.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          t.worker.running_count ? (s(), o("span", Eb, "(" + a(t.worker.running_count) + " running)", 1)) : r("", !0)
        ])) : r("", !0)
      ])) : (s(), o("div", Tb, [...n[7] || (n[7] = [
        e("span", { class: "stat-item" }, [
          h(" Status: "),
          e("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), Rb = /* @__PURE__ */ se(Pb, [["__scopeId", "data-v-b1be7134"]]), Mb = { class: "add-worker-content" }, Db = { class: "manual-form" }, Lb = { class: "form-row" }, zb = { class: "form-row-inline" }, Ub = { class: "form-field flex-2" }, Ob = { class: "form-field flex-1" }, Nb = { class: "form-row" }, Ab = { class: "api-key-wrapper" }, Bb = ["type"], Fb = { class: "result-icon" }, Vb = { class: "result-content" }, Wb = { class: "result-message" }, Gb = {
  key: 0,
  class: "result-detail"
}, jb = { class: "modal-actions" }, Kb = /* @__PURE__ */ te({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(t, { emit: c }) {
    const n = c, { testWorkerConnection: i } = Fe(), u = vs({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), g = y(!1), m = y(!1), p = y(!1), d = y(null), v = L(() => u.host && u.port && u.apiKey), w = L(() => u.name && u.host && u.port && u.apiKey);
    async function k() {
      if (v.value) {
        m.value = !0, d.value = null;
        try {
          const f = await i({
            host: u.host,
            port: u.port,
            api_key: u.apiKey
          });
          f.status === "success" ? (d.value = {
            type: "success",
            message: f.message,
            gpu_info: f.gpu_info
          }, !u.name && f.gpu_info && (u.name = `worker-${u.host.split(".").pop()}`)) : d.value = {
            type: "error",
            message: f.message
          };
        } catch (f) {
          d.value = {
            type: "error",
            message: f instanceof Error ? f.message : "Connection test failed"
          };
        } finally {
          m.value = !1;
        }
      }
    }
    function b() {
      w.value && (p.value = !0, n("add", {
        name: u.name,
        host: u.host,
        port: u.port,
        api_key: u.apiKey
      }));
    }
    return (f, C) => (s(), T(He, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: C[5] || (C[5] = (I) => f.$emit("close"))
    }, {
      body: l(() => [
        e("div", Mb, [
          e("div", Db, [
            e("div", Lb, [
              C[6] || (C[6] = e("label", { class: "form-label" }, "Worker Name", -1)),
              Re(e("input", {
                "onUpdate:modelValue": C[0] || (C[0] = (I) => u.name = I),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [kt, u.name]
              ])
            ]),
            e("div", zb, [
              e("div", Ub, [
                C[7] || (C[7] = e("label", { class: "form-label" }, "Host", -1)),
                Re(e("input", {
                  "onUpdate:modelValue": C[1] || (C[1] = (I) => u.host = I),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [kt, u.host]
                ])
              ]),
              e("div", Ob, [
                C[8] || (C[8] = e("label", { class: "form-label" }, "Port", -1)),
                Re(e("input", {
                  "onUpdate:modelValue": C[2] || (C[2] = (I) => u.port = I),
                  type: "number",
                  class: "form-input",
                  placeholder: "9090"
                }, null, 512), [
                  [
                    kt,
                    u.port,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ]),
            e("div", Nb, [
              C[9] || (C[9] = e("label", { class: "form-label" }, "API Key", -1)),
              e("div", Ab, [
                Re(e("input", {
                  "onUpdate:modelValue": C[3] || (C[3] = (I) => u.apiKey = I),
                  type: g.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, Bb), [
                  [xs, u.apiKey]
                ]),
                e("button", {
                  class: "toggle-visibility",
                  onClick: C[4] || (C[4] = (I) => g.value = !g.value),
                  type: "button"
                }, a(g.value ? "👁" : "👁‍🗨"), 1)
              ]),
              C[10] || (C[10] = e("div", { class: "form-help" }, [
                e("span", { class: "help-icon" }, "ⓘ"),
                h(" Run "),
                e("code", null, "cg-deploy worker setup"),
                h(" on the worker to get the key ")
              ], -1))
            ]),
            d.value ? (s(), o("div", {
              key: 0,
              class: fe(["test-result", d.value.type])
            }, [
              e("span", Fb, a(d.value.type === "success" ? "✓" : "✕"), 1),
              e("div", Vb, [
                e("span", Wb, a(d.value.message), 1),
                d.value.gpu_info ? (s(), o("span", Gb, "GPU: " + a(d.value.gpu_info), 1)) : r("", !0)
              ])
            ], 2)) : r("", !0)
          ])
        ])
      ]),
      footer: l(() => [
        e("div", jb, [
          _(Q, {
            variant: "ghost",
            size: "sm",
            loading: m.value,
            disabled: !v.value || m.value,
            onClick: k
          }, {
            default: l(() => [...C[11] || (C[11] = [
              h(" Test Connection ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          _(Q, {
            variant: "primary",
            size: "sm",
            loading: p.value,
            disabled: !w.value || p.value,
            onClick: b
          }, {
            default: l(() => [...C[12] || (C[12] = [
              h(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }));
  }
}), Hb = /* @__PURE__ */ se(Kb, [["__scopeId", "data-v-07a00732"]]), qb = { class: "discovered-content" }, Yb = {
  key: 0,
  class: "workers-list"
}, Jb = { class: "worker-info" }, Xb = { class: "worker-name" }, Qb = { class: "worker-address" }, Zb = {
  key: 0,
  class: "worker-gpu"
}, e_ = {
  key: 1,
  class: "empty-state"
}, t_ = {
  key: 2,
  class: "api-key-section"
}, s_ = { class: "selected-worker" }, o_ = { class: "selected-name" }, n_ = { class: "selected-address" }, a_ = { class: "form-row" }, l_ = { class: "api-key-wrapper" }, i_ = ["type"], r_ = { class: "result-icon" }, d_ = { class: "result-message" }, c_ = { class: "modal-actions" }, u_ = /* @__PURE__ */ te({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(t, { emit: c }) {
    const n = c, { testWorkerConnection: i } = Fe(), u = y(null), g = y(""), m = y(!1), p = y(!1), d = y(null), v = y(null);
    async function w(b) {
      var f;
      u.value = b, g.value = "", v.value = null, await As(), (f = d.value) == null || f.focus();
    }
    async function k() {
      if (!(!u.value || !g.value)) {
        p.value = !0, v.value = null;
        try {
          const b = await i({
            host: u.value.host,
            port: u.value.port,
            api_key: g.value
          });
          b.status === "success" ? n("add", {
            name: u.value.name,
            host: u.value.host,
            port: u.value.port,
            api_key: g.value
          }) : v.value = {
            type: "error",
            message: b.message
          };
        } catch (b) {
          v.value = {
            type: "error",
            message: b instanceof Error ? b.message : "Connection failed"
          };
        } finally {
          p.value = !1;
        }
      }
    }
    return (b, f) => (s(), T(He, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: f[3] || (f[3] = (C) => b.$emit("close"))
    }, {
      body: l(() => [
        e("div", qb, [
          t.workers.length > 0 ? (s(), o("div", Yb, [
            (s(!0), o(W, null, ae(t.workers, (C) => (s(), o("div", {
              key: `${C.host}:${C.port}`,
              class: "worker-item"
            }, [
              e("div", Jb, [
                e("span", Xb, a(C.name), 1),
                e("span", Qb, a(C.host) + ":" + a(C.port), 1),
                C.gpu_info ? (s(), o("span", Zb, a(C.gpu_info), 1)) : r("", !0)
              ]),
              _(Q, {
                variant: "primary",
                size: "xs",
                onClick: (I) => w(C)
              }, {
                default: l(() => [...f[4] || (f[4] = [
                  h(" Add ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128))
          ])) : (s(), o("div", e_, [...f[5] || (f[5] = [
            e("span", { class: "empty-icon" }, "📡", -1),
            e("span", { class: "empty-text" }, "No workers found on the network", -1),
            e("span", { class: "empty-help" }, [
              h("Make sure workers are running with "),
              e("code", null, "--broadcast")
            ], -1)
          ])])),
          u.value ? (s(), o("div", t_, [
            e("div", s_, [
              f[6] || (f[6] = e("span", { class: "selected-label" }, "Adding:", -1)),
              e("span", o_, a(u.value.name), 1),
              e("span", n_, "(" + a(u.value.host) + ":" + a(u.value.port) + ")", 1)
            ]),
            e("div", a_, [
              f[7] || (f[7] = e("label", { class: "form-label" }, "API Key", -1)),
              e("div", l_, [
                Re(e("input", {
                  ref_key: "apiKeyInput",
                  ref: d,
                  "onUpdate:modelValue": f[0] || (f[0] = (C) => g.value = C),
                  type: m.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: wt(k, ["enter"])
                }, null, 40, i_), [
                  [xs, g.value]
                ]),
                e("button", {
                  class: "toggle-visibility",
                  onClick: f[1] || (f[1] = (C) => m.value = !m.value),
                  type: "button"
                }, a(m.value ? "👁" : "👁‍🗨"), 1)
              ]),
              f[8] || (f[8] = e("div", { class: "form-help" }, [
                e("span", { class: "help-icon" }, "ⓘ"),
                h(" Run "),
                e("code", null, "cg-deploy worker setup"),
                h(" on the worker to get the key ")
              ], -1))
            ]),
            v.value ? (s(), o("div", {
              key: 0,
              class: fe(["test-result", v.value.type])
            }, [
              e("span", r_, a(v.value.type === "success" ? "✓" : "✕"), 1),
              e("span", d_, a(v.value.message), 1)
            ], 2)) : r("", !0)
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        e("div", c_, [
          u.value ? (s(), T(Q, {
            key: 0,
            variant: "ghost",
            size: "sm",
            onClick: f[2] || (f[2] = (C) => {
              u.value = null, g.value = "", v.value = null;
            })
          }, {
            default: l(() => [...f[9] || (f[9] = [
              h(" Back ", -1)
            ])]),
            _: 1
          })) : r("", !0),
          u.value ? (s(), T(Q, {
            key: 1,
            variant: "primary",
            size: "sm",
            loading: p.value,
            disabled: !g.value || p.value,
            onClick: k
          }, {
            default: l(() => [...f[10] || (f[10] = [
              h(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])) : r("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), m_ = /* @__PURE__ */ se(u_, [["__scopeId", "data-v-5a3e40a4"]]), v_ = { class: "deploy-content" }, f_ = { class: "section" }, p_ = {
  key: 0,
  class: "loading-text"
}, g_ = {
  key: 1,
  class: "empty-remotes"
}, h_ = {
  key: 2,
  class: "remotes-list"
}, y_ = { class: "section" }, w_ = { class: "mode-options" }, k_ = { class: "mode-option" }, b_ = ["disabled"], __ = { class: "mode-option" }, $_ = { class: "section" }, C_ = {
  key: 0,
  class: "section"
}, x_ = { class: "summary-row" }, S_ = {
  key: 1,
  class: "sync-warning"
}, I_ = { class: "warning-content" }, E_ = { class: "modal-actions" }, T_ = /* @__PURE__ */ te({
  __name: "DeployToWorkerModal",
  props: {
    worker: {}
  },
  emits: ["close", "toast", "deployed"],
  setup(t, { emit: c }) {
    const n = t, i = c, {
      getRemotes: u,
      getRemoteSyncStatus: g,
      fetchRemote: m,
      pushToRemote: p,
      getDeploySummary: d,
      deployToWorker: v
    } = Fe(), w = y([]), k = y({}), b = y(!1), f = y(null), C = y(null), I = y(null), $ = y(n.worker.mode || "native"), R = y(""), A = y(null), E = y(!1), S = L(() => f.value && k.value[f.value] || null), Y = L(() => {
      if (!f.value) return null;
      const K = w.value.find((ee) => ee.name === f.value);
      return (K == null ? void 0 : K.fetch_url) || null;
    }), F = L(() => Y.value && !E.value);
    async function z() {
      b.value = !0;
      try {
        const K = await u();
        w.value = K.remotes, await Promise.all(
          K.remotes.map(async (q) => {
            const O = await g(q.name);
            O && (k.value[q.name] = O);
          })
        );
        const ee = K.remotes.find((q) => q.is_default);
        ee ? f.value = ee.name : K.remotes.length > 0 && (f.value = K.remotes[0].name);
      } catch {
        i("toast", "Failed to load remotes", "error");
      } finally {
        b.value = !1;
      }
    }
    async function x() {
      try {
        A.value = await d();
      } catch {
      }
    }
    async function P(K) {
      C.value = K;
      try {
        await m(K);
        const ee = await g(K);
        ee && (k.value[K] = ee), i("toast", `Fetched from ${K}`, "success");
      } catch {
        i("toast", "Fetch failed", "error");
      } finally {
        C.value = null;
      }
    }
    async function U(K) {
      I.value = K;
      try {
        await p(K, { force: !1 });
        const ee = await g(K);
        ee && (k.value[K] = ee), i("toast", `Pushed to ${K}`, "success");
      } catch {
        i("toast", "Push failed", "error");
      } finally {
        I.value = null;
      }
    }
    function re(K) {
      f.value = K;
    }
    async function le() {
      if (Y.value) {
        E.value = !0;
        try {
          const K = await v(n.worker.name, {
            import_source: Y.value,
            mode: $.value,
            name: R.value || void 0
          });
          K.id ? (i("toast", `Deployment started: ${K.name || K.id}`, "success"), i("deployed")) : K.status === "error" ? i("toast", K.message || "Deployment failed", "error") : i("toast", "Unexpected response from worker", "error");
        } catch (K) {
          i("toast", K instanceof Error ? K.message : "Deployment failed", "error");
        } finally {
          E.value = !1;
        }
      }
    }
    return Oe(() => {
      z(), x();
    }), (K, ee) => (s(), T(He, {
      title: `DEPLOY TO: ${t.worker.name}`,
      size: "md",
      onClose: ee[5] || (ee[5] = (q) => K.$emit("close"))
    }, {
      body: l(() => [
        e("div", v_, [
          e("div", f_, [
            ee[7] || (ee[7] = e("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            b.value ? (s(), o("div", p_, "Loading remotes...")) : w.value.length === 0 ? (s(), o("div", g_, [...ee[6] || (ee[6] = [
              e("span", { class: "empty-icon" }, "🌐", -1),
              e("span", { class: "empty-text" }, "No Git remotes configured", -1),
              e("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (s(), o("div", h_, [
              (s(!0), o(W, null, ae(w.value, (q) => (s(), T(ko, {
                key: q.name,
                remote: q,
                "sync-status": k.value[q.name],
                "is-selected": f.value === q.name,
                "is-fetching": C.value === q.name,
                "is-pushing": I.value === q.name,
                onFetch: P,
                onPush: U,
                onSelect: re
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          e("div", y_, [
            ee[10] || (ee[10] = e("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            e("div", w_, [
              e("label", k_, [
                Re(e("input", {
                  type: "radio",
                  "onUpdate:modelValue": ee[0] || (ee[0] = (q) => $.value = q),
                  value: "docker",
                  disabled: !t.worker.mode || t.worker.mode === "native"
                }, null, 8, b_), [
                  [Pt, $.value]
                ]),
                ee[8] || (ee[8] = e("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              e("label", __, [
                Re(e("input", {
                  type: "radio",
                  "onUpdate:modelValue": ee[1] || (ee[1] = (q) => $.value = q),
                  value: "native"
                }, null, 512), [
                  [Pt, $.value]
                ]),
                ee[9] || (ee[9] = e("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          e("div", $_, [
            ee[11] || (ee[11] = e("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            Re(e("input", {
              "onUpdate:modelValue": ee[2] || (ee[2] = (q) => R.value = q),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [kt, R.value]
            ])
          ]),
          A.value ? (s(), o("div", C_, [
            ee[12] || (ee[12] = e("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            e("div", x_, " ComfyUI: " + a(A.value.comfyui_version) + " • " + a(A.value.node_count) + " nodes • " + a(A.value.model_count) + " models • " + a(A.value.workflow_count) + " workflows ", 1)
          ])) : r("", !0),
          S.value && S.value.ahead > 0 ? (s(), o("div", S_, [
            ee[14] || (ee[14] = e("span", { class: "warning-icon" }, "⚠", -1)),
            e("div", I_, [
              e("strong", null, a(S.value.ahead) + " unpushed commit" + a(S.value.ahead !== 1 ? "s" : ""), 1),
              e("p", null, "Push to '" + a(f.value) + "' before deploying to include your latest changes.", 1)
            ]),
            _(Q, {
              variant: "primary",
              size: "xs",
              loading: I.value === f.value,
              onClick: ee[3] || (ee[3] = (q) => f.value && U(f.value))
            }, {
              default: l(() => [...ee[13] || (ee[13] = [
                h(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        e("div", E_, [
          _(Q, {
            variant: "ghost",
            size: "sm",
            onClick: ee[4] || (ee[4] = (q) => K.$emit("close"))
          }, {
            default: l(() => [...ee[15] || (ee[15] = [
              h(" Cancel ", -1)
            ])]),
            _: 1
          }),
          _(Q, {
            variant: "primary",
            size: "sm",
            loading: E.value,
            disabled: !F.value || E.value,
            onClick: le
          }, {
            default: l(() => [...ee[16] || (ee[16] = [
              h(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), P_ = /* @__PURE__ */ se(T_, [["__scopeId", "data-v-c12720d3"]]), R_ = { class: "custom-tab" }, M_ = { class: "section-header" }, D_ = { class: "section-actions" }, L_ = { class: "workers-content" }, z_ = {
  key: 0,
  class: "loading-state"
}, U_ = {
  key: 1,
  class: "empty-state"
}, O_ = {
  key: 2,
  class: "workers-list"
}, N_ = { class: "scan-icon" }, A_ = { class: "scan-message" }, B_ = /* @__PURE__ */ te({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(t, { emit: c }) {
    const n = c, {
      getCustomWorkers: i,
      addCustomWorker: u,
      removeCustomWorker: g,
      scanForWorkers: m
    } = Fe(), p = y([]), d = y([]), v = y(!1), w = y(!1), k = y(null), b = y(!1), f = y(!1), C = y(null), I = y(null);
    async function $() {
      v.value = !0;
      try {
        const z = await i();
        p.value = z.workers;
      } catch (z) {
        n("toast", z instanceof Error ? z.message : "Failed to load workers", "error");
      } finally {
        v.value = !1;
      }
    }
    async function R() {
      w.value = !0, I.value = null;
      try {
        const z = await m(), x = z.discovered.filter(
          (P) => !p.value.some((U) => U.host === P.host && U.port === P.port)
        );
        d.value = x, x.length > 0 ? f.value = !0 : z.discovered.length > 0 ? I.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : I.value = {
          type: "info",
          message: "No workers found on the network. Make sure workers are running with --broadcast"
        };
      } catch (z) {
        n("toast", z instanceof Error ? z.message : "Network scan failed", "error");
      } finally {
        w.value = !1;
      }
    }
    async function A(z) {
      try {
        await u(z), n("toast", `Worker '${z.name}' added`, "success"), b.value = !1, await $();
      } catch (x) {
        n("toast", x instanceof Error ? x.message : "Failed to add worker", "error");
      }
    }
    async function E(z) {
      try {
        await u(z), n("toast", `Worker '${z.name}' added`, "success"), f.value = !1, await $();
      } catch (x) {
        n("toast", x instanceof Error ? x.message : "Failed to add worker", "error");
      }
    }
    async function S(z) {
      k.value = z;
      try {
        await g(z), n("toast", `Worker '${z}' removed`, "success"), await $();
      } catch (x) {
        n("toast", x instanceof Error ? x.message : "Failed to remove worker", "error");
      } finally {
        k.value = null;
      }
    }
    function Y(z) {
      C.value = z;
    }
    function F() {
      C.value = null, n("deployed");
    }
    return Oe(() => {
      $();
    }), (z, x) => (s(), o("div", R_, [
      e("div", M_, [
        x[8] || (x[8] = e("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        e("div", D_, [
          _(Q, {
            variant: "ghost",
            size: "xs",
            loading: w.value,
            disabled: w.value,
            onClick: R
          }, {
            default: l(() => [...x[6] || (x[6] = [
              h(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          _(Q, {
            variant: "secondary",
            size: "xs",
            onClick: x[0] || (x[0] = (P) => b.value = !0)
          }, {
            default: l(() => [...x[7] || (x[7] = [
              h(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      e("div", L_, [
        v.value && p.value.length === 0 ? (s(), o("div", z_, [...x[9] || (x[9] = [
          e("span", { class: "spinner" }, null, -1),
          h(" Loading workers... ", -1)
        ])])) : p.value.length === 0 ? (s(), o("div", U_, [...x[10] || (x[10] = [
          e("div", { class: "empty-card" }, [
            e("span", { class: "empty-text" }, "No workers registered yet"),
            e("p", { class: "empty-help" }, " To add a custom worker: "),
            e("ol", { class: "setup-steps" }, [
              e("li", null, [
                h("On your GPU machine, run:"),
                e("br"),
                e("code", null, "cg-deploy worker setup"),
                e("br"),
                e("code", null, "cg-deploy worker up --broadcast")
              ]),
              e("li", null, 'Click "Scan Network" above or "Add" to enter manually')
            ])
          ], -1)
        ])])) : (s(), o("div", O_, [
          (s(!0), o(W, null, ae(p.value, (P) => (s(), T(Rb, {
            key: P.name,
            worker: P,
            "is-action-loading": k.value === P.name,
            onDeploy: Y,
            onRemove: S
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      I.value ? (s(), o("div", {
        key: 0,
        class: fe(["scan-result", I.value.type])
      }, [
        e("span", N_, a(I.value.type === "success" ? "✓" : "ⓘ"), 1),
        e("span", A_, a(I.value.message), 1),
        e("button", {
          class: "dismiss-btn",
          onClick: x[1] || (x[1] = (P) => I.value = null)
        }, "×")
      ], 2)) : r("", !0),
      f.value ? (s(), T(m_, {
        key: 1,
        workers: d.value,
        onClose: x[2] || (x[2] = (P) => f.value = !1),
        onAdd: E
      }, null, 8, ["workers"])) : r("", !0),
      b.value ? (s(), T(Hb, {
        key: 2,
        onClose: x[3] || (x[3] = (P) => b.value = !1),
        onAdd: A
      })) : r("", !0),
      C.value ? (s(), T(P_, {
        key: 3,
        worker: C.value,
        onClose: x[4] || (x[4] = (P) => C.value = null),
        onToast: x[5] || (x[5] = (P, U) => n("toast", P, U)),
        onDeployed: F
      }, null, 8, ["worker"])) : r("", !0)
    ]));
  }
}), F_ = /* @__PURE__ */ se(B_, [["__scopeId", "data-v-1637dead"]]), Ms = "ComfyGit.Deploy.GitHubPAT";
function bo(t) {
  return t.startsWith("git@") || t.startsWith("ssh://");
}
function V_(t) {
  return t.startsWith("https://") || t.startsWith("http://");
}
function W_() {
  function t() {
    try {
      return localStorage.getItem(Ms);
    } catch {
      return null;
    }
  }
  function c(u) {
    try {
      localStorage.setItem(Ms, u);
    } catch (g) {
      console.error("[useGitAuth] Failed to save token:", g);
    }
  }
  function n() {
    try {
      localStorage.removeItem(Ms);
    } catch (u) {
      console.error("[useGitAuth] Failed to clear token:", u);
    }
  }
  function i() {
    const u = t();
    return u !== null && u.length > 0;
  }
  return {
    getToken: t,
    setToken: c,
    clearToken: n,
    hasToken: i,
    isRemoteSsh: bo,
    isRemoteHttps: V_
  };
}
const G_ = { class: "settings-content" }, j_ = { class: "settings-section" }, K_ = {
  key: 0,
  class: "ssh-warning"
}, H_ = { class: "form-row" }, q_ = { class: "token-wrapper" }, Y_ = ["type"], J_ = { class: "result-icon" }, X_ = { class: "result-message" }, Q_ = { class: "token-actions" }, Z_ = /* @__PURE__ */ te({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(t, { emit: c }) {
    const n = c, { getToken: i, setToken: u, clearToken: g, hasToken: m } = W_(), { getRemotes: p, testGitAuth: d } = Fe(), v = y(""), w = y(!1), k = y(!1), b = y(null), f = y(!1), C = L(() => m());
    Oe(async () => {
      var E;
      const A = i();
      A && (v.value = A);
      try {
        const Y = (E = (await p()).remotes) == null ? void 0 : E.find((F) => F.name === "origin");
        Y && bo(Y.url) && (f.value = !0);
      } catch {
      }
    });
    async function I() {
      if (v.value) {
        k.value = !0, b.value = null;
        try {
          const A = await d(v.value);
          b.value = {
            type: A.status === "success" ? "success" : "error",
            message: A.message
          };
        } catch (A) {
          b.value = {
            type: "error",
            message: A instanceof Error ? A.message : "Connection test failed"
          };
        } finally {
          k.value = !1;
        }
      }
    }
    function $() {
      v.value && (u(v.value), n("saved"), n("close"));
    }
    function R() {
      g(), v.value = "", b.value = null;
    }
    return (A, E) => (s(), T(He, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: E[2] || (E[2] = (S) => A.$emit("close"))
    }, {
      body: l(() => [
        e("div", G_, [
          e("div", j_, [
            E[8] || (E[8] = e("div", { class: "section-header" }, [
              e("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            E[9] || (E[9] = e("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            f.value ? (s(), o("div", K_, [...E[3] || (E[3] = [
              e("span", { class: "warning-icon" }, "!", -1),
              e("div", { class: "warning-content" }, [
                e("strong", null, "SSH remote detected"),
                e("p", null, [
                  h("PAT authentication only works with HTTPS remotes. Consider converting your remote URL from "),
                  e("code", null, "git@github.com:..."),
                  h(" to "),
                  e("code", null, "https://github.com/...")
                ])
              ], -1)
            ])])) : r("", !0),
            e("div", H_, [
              E[4] || (E[4] = e("label", { class: "form-label" }, "Personal Access Token", -1)),
              e("div", q_, [
                Re(e("input", {
                  "onUpdate:modelValue": E[0] || (E[0] = (S) => v.value = S),
                  type: w.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, Y_), [
                  [xs, v.value]
                ]),
                e("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: E[1] || (E[1] = (S) => w.value = !w.value)
                }, a(w.value ? "Hide" : "Show"), 1)
              ]),
              E[5] || (E[5] = e("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            b.value ? (s(), o("div", {
              key: 1,
              class: fe(["test-result", b.value.type])
            }, [
              e("span", J_, a(b.value.type === "success" ? "✓" : "✕"), 1),
              e("span", X_, a(b.value.message), 1)
            ], 2)) : r("", !0),
            e("div", Q_, [
              _(Q, {
                variant: "ghost",
                size: "sm",
                loading: k.value,
                disabled: !v.value || k.value,
                onClick: I
              }, {
                default: l(() => [...E[6] || (E[6] = [
                  h(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              C.value ? (s(), T(Q, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: R
              }, {
                default: l(() => [...E[7] || (E[7] = [
                  h(" Clear ", -1)
                ])]),
                _: 1
              })) : r("", !0)
            ])
          ])
        ])
      ]),
      footer: l(() => [
        _(Q, {
          variant: "primary",
          size: "sm",
          disabled: !v.value,
          onClick: $
        }, {
          default: l(() => [...E[10] || (E[10] = [
            h(" Save ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
}), e2 = /* @__PURE__ */ se(Z_, [["__scopeId", "data-v-b21588ad"]]), t2 = /* @__PURE__ */ te({
  __name: "DeploySection",
  emits: ["toast", "navigate"],
  setup(t, { emit: c }) {
    const n = c, {
      instances: i,
      isLoading: u,
      liveInstanceCount: g,
      refreshInstances: m,
      stopInstance: p,
      startInstance: d,
      terminateInstance: v,
      startPolling: w,
      stopPolling: k
    } = wo(), b = y(!1), f = y(!1), C = y("instances"), I = y(null), $ = y(null), R = L(() => [
      {
        id: "instances",
        label: "Instances",
        badge: g.value > 0 ? String(g.value) : void 0
      },
      {
        id: "runpod",
        label: "RunPod"
      },
      {
        id: "custom",
        label: "Custom"
      }
    ]);
    async function A(z) {
      I.value = z.id;
      try {
        await p(z), n("toast", "Instance stopped", "success");
      } catch (x) {
        n("toast", x instanceof Error ? x.message : "Failed to stop instance", "error");
      } finally {
        I.value = null;
      }
    }
    async function E(z) {
      I.value = z.id;
      try {
        await d(z), n("toast", "Instance starting...", "success");
      } catch (x) {
        n("toast", x instanceof Error ? x.message : "Failed to start instance", "error");
      } finally {
        I.value = null;
      }
    }
    function S(z) {
      $.value = z;
    }
    async function Y() {
      const z = $.value;
      if (z) {
        $.value = null, I.value = z.id;
        try {
          await v(z), n("toast", "Instance terminated", "success");
        } catch (x) {
          n("toast", x instanceof Error ? x.message : "Failed to terminate instance", "error");
        } finally {
          I.value = null;
        }
      }
    }
    async function F() {
      await m(), C.value = "instances";
    }
    return Oe(() => {
      m(), w();
    }), Cs(() => {
      k();
    }), (z, x) => (s(), o(W, null, [
      _(nt, null, {
        header: l(() => [
          _(at, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: x[1] || (x[1] = (P) => b.value = !0)
          }, {
            actions: l(() => [
              _(Q, {
                variant: "ghost",
                size: "xs",
                onClick: x[0] || (x[0] = (P) => f.value = !0)
              }, {
                default: l(() => [...x[10] || (x[10] = [
                  h(" Settings ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          _(uo, {
            modelValue: C.value,
            "onUpdate:modelValue": x[2] || (x[2] = (P) => C.value = P),
            tabs: R.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: l(() => [
          C.value === "instances" ? (s(), T(hw, {
            key: 0,
            instances: Se(i),
            "is-loading": Se(u),
            "action-loading-id": I.value,
            onRefresh: Se(m),
            onStop: A,
            onStart: E,
            onTerminate: S
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : r("", !0),
          C.value === "runpod" ? (s(), T(fb, {
            key: 1,
            onToast: x[3] || (x[3] = (P, U) => n("toast", P, U)),
            onNavigate: x[4] || (x[4] = (P) => n("navigate", P)),
            onDeployed: F
          })) : r("", !0),
          C.value === "custom" ? (s(), T(F_, {
            key: 2,
            onToast: x[5] || (x[5] = (P, U) => n("toast", P, U)),
            onDeployed: F
          })) : r("", !0)
        ]),
        _: 1
      }),
      $.value ? (s(), T(Ws, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${$.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: Y,
        onCancel: x[6] || (x[6] = (P) => $.value = null)
      }, null, 8, ["message"])) : r("", !0),
      _($t, {
        show: b.value,
        title: "Deploy to Cloud",
        onClose: x[7] || (x[7] = (P) => b.value = !1)
      }, {
        content: l(() => [...x[11] || (x[11] = [
          e("div", { class: "deploy-info" }, [
            e("div", { class: "info-section" }, [
              e("strong", null, "What is Deploy?"),
              e("p", null, "Deploy lets you run your ComfyUI environment on cloud GPU instances using your own RunPod account (BYOK - Bring Your Own Key).")
            ]),
            e("div", { class: "info-section" }, [
              e("strong", null, "What gets deployed:"),
              e("ul", null, [
                e("li", null, [
                  e("strong", null, "Workflows"),
                  h(" - All committed workflows")
                ]),
                e("li", null, [
                  e("strong", null, "Custom Nodes"),
                  h(" - Installed automatically")
                ]),
                e("li", null, [
                  e("strong", null, "Models"),
                  h(" - Downloaded from sources (when available)")
                ]),
                e("li", null, [
                  e("strong", null, "Configuration"),
                  h(" - Environment settings")
                ])
              ])
            ]),
            e("div", { class: "info-section" }, [
              e("strong", null, "Cost Information:"),
              e("p", null, "You pay RunPod directly for GPU time. Costs vary by GPU type and cloud tier. Monitor your spend at runpod.io.")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      f.value ? (s(), T(e2, {
        key: 1,
        onClose: x[8] || (x[8] = (P) => f.value = !1),
        onSaved: x[9] || (x[9] = (P) => n("toast", "GitHub token saved", "success"))
      })) : r("", !0)
    ], 64));
  }
}), s2 = /* @__PURE__ */ se(t2, [["__scopeId", "data-v-d4e32a10"]]), o2 = { class: "header-info" }, n2 = { class: "commit-hash" }, a2 = {
  key: 0,
  class: "commit-refs"
}, l2 = { class: "commit-message" }, i2 = { class: "commit-date" }, r2 = {
  key: 0,
  class: "loading"
}, d2 = {
  key: 1,
  class: "changes-section"
}, c2 = { class: "stats-row" }, u2 = { class: "stat" }, m2 = { class: "stat insertions" }, v2 = { class: "stat deletions" }, f2 = {
  key: 0,
  class: "change-group"
}, p2 = {
  key: 1,
  class: "change-group"
}, g2 = {
  key: 0,
  class: "version"
}, h2 = {
  key: 2,
  class: "change-group"
}, y2 = { class: "change-item" }, w2 = /* @__PURE__ */ te({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = Fe(), i = y(null), u = y(!0), g = L(() => {
      if (!i.value) return !1;
      const p = i.value.changes.workflows;
      return p.added.length > 0 || p.modified.length > 0 || p.deleted.length > 0;
    }), m = L(() => {
      if (!i.value) return !1;
      const p = i.value.changes.nodes;
      return p.added.length > 0 || p.removed.length > 0;
    });
    return Oe(async () => {
      try {
        i.value = await n(c.commit.hash);
      } finally {
        u.value = !1;
      }
    }), (p, d) => (s(), T(He, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (v) => p.$emit("close"))
    }, {
      header: l(() => {
        var v, w, k, b;
        return [
          e("div", o2, [
            d[4] || (d[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", n2, a(((v = i.value) == null ? void 0 : v.short_hash) || t.commit.short_hash || ((w = t.commit.hash) == null ? void 0 : w.slice(0, 7))), 1),
            (b = (k = i.value) == null ? void 0 : k.refs) != null && b.length ? (s(), o("span", a2, [
              (s(!0), o(W, null, ae(i.value.refs, (f) => (s(), o("span", {
                key: f,
                class: "ref-badge"
              }, a(f), 1))), 128))
            ])) : r("", !0)
          ]),
          _(ye, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (f) => p.$emit("close"))
          }, {
            default: l(() => [...d[5] || (d[5] = [
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
      body: l(() => {
        var v, w;
        return [
          e("div", l2, a(((v = i.value) == null ? void 0 : v.message) || t.commit.message), 1),
          e("div", i2, a(((w = i.value) == null ? void 0 : w.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          u.value ? (s(), o("div", r2, "Loading details...")) : i.value ? (s(), o("div", d2, [
            e("div", c2, [
              e("span", u2, a(i.value.stats.files_changed) + " files", 1),
              e("span", m2, "+" + a(i.value.stats.insertions), 1),
              e("span", v2, "-" + a(i.value.stats.deletions), 1)
            ]),
            g.value ? (s(), o("div", f2, [
              _(cs, { variant: "section" }, {
                default: l(() => [...d[6] || (d[6] = [
                  h("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(W, null, ae(i.value.changes.workflows.added, (k) => (s(), o("div", {
                key: "add-" + k,
                class: "change-item added"
              }, [
                d[7] || (d[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(k), 1)
              ]))), 128)),
              (s(!0), o(W, null, ae(i.value.changes.workflows.modified, (k) => (s(), o("div", {
                key: "mod-" + k,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(k), 1)
              ]))), 128)),
              (s(!0), o(W, null, ae(i.value.changes.workflows.deleted, (k) => (s(), o("div", {
                key: "del-" + k,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(k), 1)
              ]))), 128))
            ])) : r("", !0),
            m.value ? (s(), o("div", p2, [
              _(cs, { variant: "section" }, {
                default: l(() => [...d[10] || (d[10] = [
                  h("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(W, null, ae(i.value.changes.nodes.added, (k) => (s(), o("div", {
                key: "add-" + k.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(k.name), 1),
                k.version ? (s(), o("span", g2, "(" + a(k.version) + ")", 1)) : r("", !0)
              ]))), 128)),
              (s(!0), o(W, null, ae(i.value.changes.nodes.removed, (k) => (s(), o("div", {
                key: "rem-" + k.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(k.name), 1)
              ]))), 128))
            ])) : r("", !0),
            i.value.changes.models.resolved > 0 ? (s(), o("div", h2, [
              _(cs, { variant: "section" }, {
                default: l(() => [...d[13] || (d[13] = [
                  h("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", y2, [
                d[14] || (d[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : r("", !0)
          ])) : r("", !0)
        ];
      }),
      footer: l(() => [
        _(ye, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (v) => p.$emit("createBranch", t.commit))
        }, {
          default: l(() => [...d[15] || (d[15] = [
            h(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        _(ye, {
          variant: "primary",
          onClick: d[2] || (d[2] = (v) => p.$emit("checkout", t.commit))
        }, {
          default: l(() => [...d[16] || (d[16] = [
            h(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), k2 = /* @__PURE__ */ se(w2, [["__scopeId", "data-v-d256ff6d"]]), b2 = { class: "base-textarea-wrapper" }, _2 = ["value", "rows", "placeholder", "disabled", "maxlength"], $2 = {
  key: 0,
  class: "base-textarea-count"
}, C2 = /* @__PURE__ */ te({
  __name: "BaseTextarea",
  props: {
    modelValue: {},
    rows: { default: 3 },
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    maxLength: {},
    showCharCount: { type: Boolean, default: !1 },
    submitOnEnter: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "ctrlEnter", "submit"],
  setup(t, { emit: c }) {
    const n = t, i = c;
    function u(g) {
      g.shiftKey || g.ctrlKey || g.metaKey || n.submitOnEnter && (g.preventDefault(), i("submit"));
    }
    return (g, m) => (s(), o("div", b2, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: m[0] || (m[0] = (p) => g.$emit("update:modelValue", p.target.value)),
        onKeydown: [
          m[1] || (m[1] = wt(Be((p) => g.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          m[2] || (m[2] = wt(Be((p) => g.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          wt(u, ["enter"])
        ]
      }, null, 40, _2),
      t.showCharCount && t.maxLength ? (s(), o("div", $2, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : r("", !0)
    ]));
  }
}), Xs = /* @__PURE__ */ se(C2, [["__scopeId", "data-v-c6d16c93"]]), x2 = ["checked", "disabled"], S2 = { class: "base-checkbox-box" }, I2 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, E2 = {
  key: 0,
  class: "base-checkbox-label"
}, T2 = /* @__PURE__ */ te({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", {
      class: fe(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked))
      }, null, 40, x2),
      e("span", S2, [
        t.modelValue ? (s(), o("svg", I2, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : r("", !0)
      ]),
      c.$slots.default ? (s(), o("span", E2, [
        Pe(c.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), Qs = /* @__PURE__ */ se(T2, [["__scopeId", "data-v-bf17c831"]]), P2 = { class: "popover-header" }, R2 = { class: "popover-body" }, M2 = {
  key: 0,
  class: "changes-summary"
}, D2 = {
  key: 0,
  class: "change-item"
}, L2 = {
  key: 1,
  class: "change-item"
}, z2 = {
  key: 2,
  class: "change-item"
}, U2 = {
  key: 3,
  class: "change-item"
}, O2 = {
  key: 4,
  class: "change-item"
}, N2 = {
  key: 5,
  class: "change-item"
}, A2 = {
  key: 1,
  class: "no-changes"
}, B2 = {
  key: 2,
  class: "loading"
}, F2 = {
  key: 3,
  class: "issues-error"
}, V2 = { class: "error-header" }, W2 = { class: "error-title" }, G2 = { class: "issues-list" }, j2 = { class: "message-section" }, K2 = { class: "popover-footer" }, H2 = {
  key: 1,
  class: "commit-popover"
}, q2 = { class: "popover-header" }, Y2 = { class: "popover-body" }, J2 = {
  key: 0,
  class: "changes-summary"
}, X2 = {
  key: 0,
  class: "change-item"
}, Q2 = {
  key: 1,
  class: "change-item"
}, Z2 = {
  key: 2,
  class: "change-item"
}, e$ = {
  key: 3,
  class: "change-item"
}, t$ = {
  key: 4,
  class: "change-item"
}, s$ = {
  key: 5,
  class: "change-item"
}, o$ = {
  key: 1,
  class: "no-changes"
}, n$ = {
  key: 2,
  class: "loading"
}, a$ = {
  key: 3,
  class: "issues-error"
}, l$ = { class: "error-header" }, i$ = { class: "error-title" }, r$ = { class: "issues-list" }, d$ = { class: "message-section" }, c$ = { class: "popover-footer" }, u$ = /* @__PURE__ */ te({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, i = c, { commit: u } = Fe(), g = y(""), m = y(!1), p = y(!1), d = L(() => {
      if (!n.status) return !1;
      const C = n.status.workflows;
      return C.new.length > 0 || C.modified.length > 0 || C.deleted.length > 0 || n.status.has_changes;
    }), v = L(() => {
      if (!n.status) return !1;
      const C = n.status.workflows, I = n.status.git_changes;
      return C.new.length > 0 || C.modified.length > 0 || C.deleted.length > 0 || I.nodes_added.length > 0 || I.nodes_removed.length > 0;
    }), w = L(() => {
      var C;
      return (C = n.status) != null && C.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (I) => I.has_issues && (I.sync_state === "new" || I.sync_state === "modified")
      ) : [];
    }), k = L(() => w.value.length > 0), b = L(() => k.value && !p.value);
    async function f() {
      var C, I, $;
      if (!(k.value && !p.value) && !(!d.value || !g.value.trim() || m.value)) {
        m.value = !0;
        try {
          const R = await u(g.value.trim(), p.value);
          if (R.status === "success") {
            const A = `Committed: ${((C = R.summary) == null ? void 0 : C.new) || 0} new, ${((I = R.summary) == null ? void 0 : I.modified) || 0} modified, ${(($ = R.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            i("committed", { success: !0, message: A });
          } else R.status === "no_changes" ? i("committed", { success: !1, message: "No changes to commit" }) : R.status === "blocked" ? i("committed", { success: !1, message: 'Commit blocked - enable "Allow issues" to force commit' }) : i("committed", { success: !1, message: R.message || "Commit failed" });
        } catch (R) {
          i("committed", { success: !1, message: R instanceof Error ? R.message : "Commit failed" });
        } finally {
          m.value = !1;
        }
      }
    }
    return (C, I) => t.asModal ? (s(), T(et, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: I[5] || (I[5] = ($) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: I[4] || (I[4] = Be(() => {
          }, ["stop"]))
        }, [
          e("div", P2, [
            I[11] || (I[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: I[0] || (I[0] = ($) => i("close"))
            }, [...I[10] || (I[10] = [
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
          e("div", R2, [
            t.status && d.value ? (s(), o("div", M2, [
              t.status.workflows.new.length ? (s(), o("div", D2, [
                I[12] || (I[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : r("", !0),
              t.status.workflows.modified.length ? (s(), o("div", L2, [
                I[13] || (I[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : r("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", z2, [
                I[14] || (I[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", U2, [
                I[15] || (I[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", O2, [
                I[16] || (I[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : r("", !0),
              v.value ? r("", !0) : (s(), o("div", N2, [...I[17] || (I[17] = [
                e("span", { class: "change-icon modified" }, "~", -1),
                e("span", null, "Configuration updated", -1)
              ])]))
            ])) : t.status ? (s(), o("div", A2, " No changes to commit ")) : (s(), o("div", B2, " Loading... ")),
            k.value ? (s(), o("div", F2, [
              e("div", V2, [
                I[18] || (I[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", W2, a(w.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", G2, [
                (s(!0), o(W, null, ae(w.value, ($) => (s(), o("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a($.name), 1),
                  h(": " + a($.issue_summary), 1)
                ]))), 128))
              ]),
              _(Qs, {
                modelValue: p.value,
                "onUpdate:modelValue": I[1] || (I[1] = ($) => p.value = $),
                class: "allow-issues-toggle"
              }, {
                default: l(() => [...I[19] || (I[19] = [
                  h(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : r("", !0),
            e("div", j2, [
              _(Xs, {
                modelValue: g.value,
                "onUpdate:modelValue": I[2] || (I[2] = ($) => g.value = $),
                placeholder: b.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || m.value || b.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: f,
                onSubmit: f
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          e("div", K2, [
            _(ye, {
              variant: "secondary",
              onClick: I[3] || (I[3] = ($) => i("close"))
            }, {
              default: l(() => [...I[20] || (I[20] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            _(ye, {
              variant: p.value ? "danger" : "primary",
              disabled: !d.value || !g.value.trim() || m.value || b.value,
              loading: m.value,
              onClick: f
            }, {
              default: l(() => [
                h(a(m.value ? "Committing..." : p.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", H2, [
      e("div", q2, [
        I[22] || (I[22] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: I[6] || (I[6] = ($) => i("close"))
        }, [...I[21] || (I[21] = [
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
      e("div", Y2, [
        t.status && d.value ? (s(), o("div", J2, [
          t.status.workflows.new.length ? (s(), o("div", X2, [
            I[23] || (I[23] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : r("", !0),
          t.status.workflows.modified.length ? (s(), o("div", Q2, [
            I[24] || (I[24] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : r("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", Z2, [
            I[25] || (I[25] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", e$, [
            I[26] || (I[26] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", t$, [
            I[27] || (I[27] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : r("", !0),
          v.value ? r("", !0) : (s(), o("div", s$, [...I[28] || (I[28] = [
            e("span", { class: "change-icon modified" }, "~", -1),
            e("span", null, "Configuration updated", -1)
          ])]))
        ])) : t.status ? (s(), o("div", o$, " No changes to commit ")) : (s(), o("div", n$, " Loading... ")),
        k.value ? (s(), o("div", a$, [
          e("div", l$, [
            I[29] || (I[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", i$, a(w.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", r$, [
            (s(!0), o(W, null, ae(w.value, ($) => (s(), o("div", {
              key: $.name,
              class: "issue-item"
            }, [
              e("strong", null, a($.name), 1),
              h(": " + a($.issue_summary), 1)
            ]))), 128))
          ]),
          _(Qs, {
            modelValue: p.value,
            "onUpdate:modelValue": I[7] || (I[7] = ($) => p.value = $),
            class: "allow-issues-toggle"
          }, {
            default: l(() => [...I[30] || (I[30] = [
              h(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : r("", !0),
        e("div", d$, [
          _(Xs, {
            modelValue: g.value,
            "onUpdate:modelValue": I[8] || (I[8] = ($) => g.value = $),
            placeholder: b.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || m.value || b.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: f,
            onSubmit: f
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      e("div", c$, [
        _(ye, {
          variant: "secondary",
          onClick: I[9] || (I[9] = ($) => i("close"))
        }, {
          default: l(() => [...I[31] || (I[31] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        _(ye, {
          variant: p.value ? "danger" : "primary",
          disabled: !d.value || !g.value.trim() || m.value || b.value,
          loading: m.value,
          onClick: f
        }, {
          default: l(() => [
            h(a(m.value ? "Committing..." : p.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), _o = /* @__PURE__ */ se(u$, [["__scopeId", "data-v-d0fe6172"]]), m$ = { class: "modal-header" }, v$ = { class: "modal-body" }, f$ = { class: "switch-message" }, p$ = { class: "switch-details" }, g$ = { class: "modal-actions" }, h$ = /* @__PURE__ */ te({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), T(et, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Be(() => {
          }, ["stop"]))
        }, [
          e("div", m$, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", v$, [
            e("p", f$, [
              n[6] || (n[6] = h(" Switch from ", -1)),
              e("strong", null, a(t.fromEnvironment), 1),
              n[7] || (n[7] = h(" to ", -1)),
              e("strong", null, a(t.toEnvironment), 1),
              n[8] || (n[8] = h("? ", -1))
            ]),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", p$, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", g$, [
            _(Q, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            _(Q, {
              variant: "primary",
              onClick: n[2] || (n[2] = (i) => c.$emit("confirm"))
            }, {
              default: l(() => [...n[12] || (n[12] = [
                h(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), y$ = /* @__PURE__ */ se(h$, [["__scopeId", "data-v-e9c5253e"]]), w$ = {
  key: 0,
  class: "modal-overlay"
}, k$ = { class: "modal-content" }, b$ = { class: "modal-body" }, _$ = { class: "progress-info" }, $$ = { class: "progress-percentage" }, C$ = { class: "progress-state" }, x$ = { class: "switch-steps" }, S$ = { class: "step-icon" }, I$ = { class: "step-label" }, E$ = /* @__PURE__ */ te({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, n = L(() => {
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
      return c.message || g[c.state] || c.state;
    }), i = L(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), u = L(() => {
      const g = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], m = g.findIndex((p) => p.state === c.state);
      return g.map((p, d) => {
        let v = "pending", w = "○";
        return d < m ? (v = "completed", w = "✓") : d === m && (v = "active", w = "⟳"), {
          ...p,
          status: v,
          icon: w
        };
      });
    });
    return (g, m) => (s(), T(et, { to: "body" }, [
      t.show ? (s(), o("div", w$, [
        e("div", k$, [
          m[1] || (m[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", b$, [
            _(Ss, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", _$, [
              e("div", $$, a(t.progress) + "%", 1),
              e("div", C$, a(n.value), 1)
            ]),
            e("div", x$, [
              (s(!0), o(W, null, ae(u.value, (p) => (s(), o("div", {
                key: p.state,
                class: fe(["switch-step", p.status])
              }, [
                e("span", S$, a(p.icon), 1),
                e("span", I$, a(p.label), 1)
              ], 2))), 128))
            ]),
            m[0] || (m[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), T$ = /* @__PURE__ */ se(E$, [["__scopeId", "data-v-768a5078"]]), P$ = { class: "modal-header" }, R$ = { class: "modal-body" }, M$ = {
  key: 0,
  class: "node-section"
}, D$ = { class: "node-list" }, L$ = {
  key: 1,
  class: "node-section"
}, z$ = { class: "node-list" }, U$ = { class: "modal-actions" }, O$ = /* @__PURE__ */ te({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), T(et, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Be(() => {
          }, ["stop"]))
        }, [
          e("div", P$, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", R$, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", M$, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", D$, [
                (s(!0), o(W, null, ae(t.mismatchDetails.missing_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + a(i), 1))), 128))
              ])
            ])) : r("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", L$, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", z$, [
                (s(!0), o(W, null, ae(t.mismatchDetails.extra_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item remove"
                }, " - " + a(i), 1))), 128))
              ])
            ])) : r("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", U$, [
            _(Q, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[10] || (n[10] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            _(Q, {
              variant: "primary",
              onClick: n[2] || (n[2] = (i) => c.$emit("confirm"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                h(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), N$ = /* @__PURE__ */ se(O$, [["__scopeId", "data-v-7cad7518"]]), A$ = [
  {
    id: "sponsor",
    url: "https://github.com/sponsors/comfyhub-org",
    title: "Sponsor ComfyHub",
    ariaLabel: "Sponsor ComfyHub on GitHub",
    iconPath: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z",
    label: "Sponsor"
  },
  {
    id: "discord",
    url: "https://discord.gg/2h5rSTeh6Y",
    title: "Join Discord",
    ariaLabel: "Join ComfyHub Discord",
    iconPath: "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.027-.07 8.735 8.735 0 0 1-1.248-.595.05.05 0 0 1-.005-.083c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085c-.399.233-.813.44-1.249.594a.05.05 0 0 0-.027.07c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019zM5.347 10.64c-.79 0-1.44-.724-1.44-1.612 0-.889.637-1.613 1.44-1.613.807 0 1.451.733 1.44 1.613 0 .888-.637 1.612-1.44 1.612zm5.316 0c-.788 0-1.44-.724-1.44-1.612 0-.889.637-1.613 1.44-1.613.808 0 1.451.733 1.44 1.613 0 .888-.632 1.612-1.44 1.612z"
  },
  {
    id: "x",
    url: "https://x.com/akatz_ai",
    title: "Follow on X",
    ariaLabel: "Follow on X",
    iconPath: "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633z"
  },
  {
    id: "github",
    url: "https://github.com/comfyhub-org/comfygit",
    title: "View on GitHub",
    ariaLabel: "View ComfyGit on GitHub",
    iconPath: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
  },
  {
    id: "docs",
    url: "https://docs.comfyhub.org/comfygit/",
    title: "Documentation",
    ariaLabel: "View ComfyGit Documentation",
    iconPath: "M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
  }
], B$ = "v0.0.4", F$ = "Akatz", V$ = { class: "social-buttons" }, W$ = ["title", "aria-label", "onClick"], G$ = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, j$ = ["d"], K$ = ["title", "aria-label", "onClick"], H$ = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, q$ = ["d"], Y$ = /* @__PURE__ */ te({
  __name: "SocialButtons",
  setup(t) {
    function c(n) {
      window.open(n, "_blank", "noopener,noreferrer");
    }
    return (n, i) => (s(), o("div", V$, [
      (s(!0), o(W, null, ae(Se(A$), (u) => (s(), o(W, {
        key: u.id
      }, [
        u.label ? (s(), o("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: u.title,
          "aria-label": u.ariaLabel,
          onClick: (g) => c(u.url)
        }, [
          h(a(u.label) + " ", 1),
          (s(), o("svg", G$, [
            e("path", {
              d: u.iconPath
            }, null, 8, j$)
          ]))
        ], 8, W$)) : (s(), o("button", {
          key: 1,
          class: "icon-btn social-link",
          title: u.title,
          "aria-label": u.ariaLabel,
          onClick: (g) => c(u.url)
        }, [
          (s(), o("svg", H$, [
            e("path", {
              d: u.iconPath
            }, null, 8, q$)
          ]))
        ], 8, K$))
      ], 64))), 128))
    ]));
  }
}), $o = /* @__PURE__ */ se(Y$, [["__scopeId", "data-v-4f846342"]]), J$ = { class: "footer-info" }, X$ = { class: "version" }, Q$ = { class: "made-by" }, Z$ = /* @__PURE__ */ te({
  __name: "FooterInfo",
  setup(t) {
    return (c, n) => (s(), o("div", J$, [
      e("span", X$, a(Se(B$)), 1),
      e("span", Q$, [
        n[0] || (n[0] = h(" made with ", -1)),
        n[1] || (n[1] = e("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          e("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        h(" by " + a(Se(F$)), 1)
      ])
    ]));
  }
}), Co = /* @__PURE__ */ se(Z$, [["__scopeId", "data-v-8bc3db0a"]]), eC = /* @__PURE__ */ te({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = y(null);
    async function i() {
      var g;
      await ((g = n.value) == null ? void 0 : g.saveSettings());
    }
    function u() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (g, m) => (s(), T(He, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: m[1] || (m[1] = (p) => g.$emit("close"))
    }, {
      body: l(() => [
        _(co, {
          ref_key: "contentRef",
          ref: n,
          "workspace-path": t.workspacePath,
          onSaved: u
        }, null, 8, ["workspace-path"])
      ]),
      footer: l(() => {
        var p;
        return [
          _(ye, {
            variant: "primary",
            disabled: !((p = n.value) != null && p.hasChanges),
            onClick: i
          }, {
            default: l(() => [...m[2] || (m[2] = [
              h(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          _(ye, {
            variant: "secondary",
            onClick: m[0] || (m[0] = (d) => g.$emit("close"))
          }, {
            default: l(() => [...m[3] || (m[3] = [
              h(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), tC = /* @__PURE__ */ se(eC, [["__scopeId", "data-v-fac00ae7"]]), sC = { class: "header-actions" }, oC = {
  key: 0,
  class: "wizard-step"
}, nC = { class: "form-field" }, aC = ["placeholder"], lC = {
  key: 0,
  class: "form-error"
}, iC = { class: "form-field form-field--checkbox" }, rC = { class: "form-checkbox" }, dC = {
  key: 0,
  class: "form-field"
}, cC = ["placeholder"], uC = {
  key: 0,
  class: "form-info"
}, mC = {
  key: 1,
  class: "form-suggestion"
}, vC = {
  key: 2,
  class: "form-error"
}, fC = {
  key: 3,
  class: "form-info"
}, pC = {
  key: 1,
  class: "wizard-step"
}, gC = {
  key: 0,
  class: "progress-check-loading"
}, hC = {
  key: 0,
  class: "cli-warning"
}, yC = { class: "cli-warning-header" }, wC = {
  key: 1,
  class: "env-landing"
}, kC = { class: "env-list" }, bC = ["value"], _C = { class: "env-name" }, $C = {
  key: 2,
  class: "env-create"
}, CC = { class: "form-field" }, xC = { class: "form-field" }, SC = ["value"], IC = { class: "form-field" }, EC = ["disabled"], TC = ["value"], PC = { class: "form-field" }, RC = ["value"], MC = { class: "form-field form-field--checkbox" }, DC = { class: "form-checkbox" }, LC = {
  key: 0,
  class: "form-error"
}, zC = {
  key: 1,
  class: "env-creating"
}, UC = { class: "creating-intro" }, OC = {
  key: 3,
  class: "env-import"
}, NC = { class: "wizard-footer" }, AC = { class: "wizard-footer-actions" }, Jt = 10, BC = 600 * 1e3, Zs = 1800 * 1e3, FC = /* @__PURE__ */ te({
  __name: "FirstTimeSetupWizard",
  props: {
    defaultPath: {},
    detectedModelsDir: {},
    initialStep: {},
    existingEnvironments: {},
    cliInstalled: { type: Boolean },
    setupState: {},
    workspacePath: {}
  },
  emits: ["complete", "close", "switch-environment", "environment-created-no-switch"],
  setup(t, { emit: c }) {
    const n = t, i = c, {
      initializeWorkspace: u,
      getInitializeProgress: g,
      validatePath: m,
      createEnvironment: p,
      getCreateProgress: d,
      getImportProgress: v,
      getComfyUIReleases: w
    } = Fe(), k = y(n.initialStep || 1), b = y(null), f = y("landing"), C = y(!1), I = y(!1), $ = y(!1), R = y(!1), A = y(null), E = y(n.initialStep === 2), S = y(n.defaultPath), Y = y(!!n.detectedModelsDir), F = y(n.detectedModelsDir || ""), z = y(null), x = y(null), P = y(null), U = y(null), re = y("my-new-env"), le = y(fo), K = y("latest"), ee = y(po), q = y(!0), O = y(null), N = y(null), M = y([{ tag_name: "latest", name: "Latest", published_at: "" }]), ve = y(!1), oe = y(!1), be = y(!1), Ce = y({ progress: 0, message: "" }), Le = y({ progress: 0, message: "" }), Ue = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], me = y(0), ge = y(null), Me = y(0), ce = y(null), X = L(() => {
      var D, G;
      const ue = (D = S.value) == null ? void 0 : D.trim(), J = !z.value, Z = !Y.value || !x.value && ((G = F.value) == null ? void 0 : G.trim());
      return ue && J && Z;
    }), De = L(() => {
      var ue;
      return (ue = re.value) == null ? void 0 : ue.trim();
    }), pe = L(() => !!(k.value === 2 || N.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), Je = L(() => N.value || n.workspacePath || null);
    async function tt() {
      var ue;
      if (z.value = null, !!((ue = S.value) != null && ue.trim()))
        try {
          const J = await m({ path: S.value, type: "workspace" });
          J.valid || (z.value = J.error || "Invalid path");
        } catch (J) {
          z.value = J instanceof Error ? J.message : "Validation failed";
        }
    }
    async function st() {
      var ue;
      if (x.value = null, P.value = null, U.value = null, !!((ue = F.value) != null && ue.trim()))
        try {
          const J = await m({ path: F.value, type: "models" });
          if (J.valid)
            U.value = J.model_count ?? null;
          else if (x.value = J.error || "Invalid path", J.suggestion) {
            P.value = J.suggestion, F.value = J.suggestion, x.value = null;
            const Z = await m({ path: J.suggestion, type: "models" });
            Z.valid && (U.value = Z.model_count ?? null);
          }
        } catch (J) {
          x.value = J instanceof Error ? J.message : "Validation failed";
        }
    }
    async function Te() {
      var ue, J, Z, D, G;
      if (z.value = null, x.value = null, await tt(), (ue = z.value) != null && ue.includes("already exists")) {
        z.value = null, N.value = ((J = S.value) == null ? void 0 : J.trim()) || n.defaultPath, k.value = 2, qe();
        return;
      }
      if (!z.value && !(Y.value && ((Z = F.value) != null && Z.trim()) && (await st(), x.value))) {
        oe.value = !0;
        try {
          await u({
            workspace_path: ((D = S.value) == null ? void 0 : D.trim()) || n.defaultPath,
            models_directory: Y.value && ((G = F.value) == null ? void 0 : G.trim()) || null
          }), me.value = 0, ge.value = Date.now();
          const ne = setInterval(async () => {
            var xe;
            if (ge.value && Date.now() - ge.value > BC) {
              clearInterval(ne), oe.value = !1, z.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Ve = await g();
              if (me.value = 0, Ve.state === "idle" && oe.value) {
                clearInterval(ne), oe.value = !1, z.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Ce.value = { progress: Ve.progress, message: Ve.message }, Ve.state === "complete" ? (clearInterval(ne), oe.value = !1, N.value = ((xe = S.value) == null ? void 0 : xe.trim()) || n.defaultPath, k.value = 2, qe()) : Ve.state === "error" && (clearInterval(ne), oe.value = !1, z.value = Ve.error || "Workspace creation failed");
            } catch (Ve) {
              me.value++, console.warn(`Polling failure ${me.value}/${Jt}:`, Ve), me.value >= Jt && (clearInterval(ne), oe.value = !1, z.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (ne) {
          oe.value = !1, z.value = ne instanceof Error ? ne.message : "Failed to create workspace";
        }
      }
    }
    async function Xe() {
      be.value = !0, O.value = null;
      try {
        const ue = {
          name: re.value.trim() || "my-new-env",
          python_version: le.value,
          comfyui_version: K.value,
          torch_backend: ee.value,
          switch_after: q.value,
          workspace_path: N.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await p(ue)).status === "started") {
          Me.value = 0, ce.value = Date.now();
          const Z = setInterval(async () => {
            if (ce.value && Date.now() - ce.value > Zs) {
              clearInterval(Z), be.value = !1, O.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const D = await d();
              if (Me.value = 0, D.state === "idle" && be.value) {
                clearInterval(Z), be.value = !1, O.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Le.value = {
                progress: D.progress ?? 0,
                message: D.message,
                phase: D.phase
              }, D.state === "complete") {
                clearInterval(Z), be.value = !1;
                const G = D.environment_name || ue.name;
                q.value ? i("complete", G, N.value) : (f.value = "landing", i("environment-created-no-switch", G));
              } else D.state === "error" && (clearInterval(Z), be.value = !1, O.value = D.error || "Environment creation failed");
            } catch (D) {
              Me.value++, console.warn(`Polling failure ${Me.value}/${Jt}:`, D), Me.value >= Jt && (clearInterval(Z), be.value = !1, O.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ue) {
        be.value = !1, O.value = ue instanceof Error ? ue.message : "Unknown error";
      }
    }
    async function qe() {
      ve.value = !0;
      try {
        M.value = await w();
      } catch (ue) {
        console.error("Failed to load ComfyUI releases:", ue);
      } finally {
        ve.value = !1;
      }
    }
    function Qe() {
      b.value && i("switch-environment", b.value, N.value);
    }
    function mt() {
      f.value === "create" || f.value === "import" ? f.value = "landing" : k.value === 2 && n.setupState === "no_workspace" && (k.value = 1);
    }
    function $e(ue, J) {
      I.value = !1, J ? i("complete", ue, N.value) : (i("environment-created-no-switch", ue), f.value = "landing");
    }
    function je() {
    }
    Oe(async () => {
      if (n.detectedModelsDir && (F.value = n.detectedModelsDir), n.workspacePath && (N.value = n.workspacePath), k.value === 2) {
        qe();
        const ue = setTimeout(() => {
          E.value = !1;
        }, 3e3);
        await it(), clearTimeout(ue), E.value = !1;
      }
    });
    async function it() {
      try {
        const ue = await d();
        if (console.log("[ComfyGit] Create progress check:", ue.state, ue), ue.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ue.environment_name), f.value = "create", be.value = !0, re.value = ue.environment_name || "my-new-env", Le.value = {
            progress: ue.progress ?? 0,
            message: ue.message,
            phase: ue.phase
          }, Ye();
          return;
        }
      } catch (ue) {
        console.log("[ComfyGit] Create progress check failed:", ue);
      }
      try {
        const ue = await v();
        console.log("[ComfyGit] Import progress check:", ue.state, ue), ue.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ue.environment_name), A.value = {
          message: ue.message || "Importing...",
          phase: ue.phase || "",
          progress: ue.progress ?? 0,
          environmentName: ue.environment_name || ""
        }, R.value = !0, f.value = "import", I.value = !0);
      } catch (ue) {
        console.log("[ComfyGit] Import progress check failed:", ue);
      }
    }
    async function Ye() {
      Me.value = 0, ce.value = Date.now();
      let ue = null;
      const J = async () => {
        if (ce.value && Date.now() - ce.value > Zs)
          return ue && clearInterval(ue), be.value = !1, O.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const D = await d();
          if (Me.value = 0, D.state === "idle" && be.value)
            return ue && clearInterval(ue), be.value = !1, O.value = "Environment creation was interrupted. Please try again.", !1;
          if (Le.value = {
            progress: D.progress ?? 0,
            message: D.message,
            phase: D.phase
          }, D.state === "complete") {
            ue && clearInterval(ue), be.value = !1;
            const G = D.environment_name || re.value;
            return i("complete", G, N.value), !1;
          } else if (D.state === "error")
            return ue && clearInterval(ue), be.value = !1, O.value = D.error || "Environment creation failed", !1;
          return !0;
        } catch (D) {
          return Me.value++, console.warn(`Polling failure ${Me.value}/${Jt}:`, D), Me.value >= Jt ? (ue && clearInterval(ue), be.value = !1, O.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await J() && (ue = setInterval(async () => {
        !await J() && ue && clearInterval(ue);
      }, 2e3));
    }
    return (ue, J) => (s(), o(W, null, [
      _(He, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: J[15] || (J[15] = (Z) => ue.$emit("close"))
      }, {
        header: l(() => [
          J[20] || (J[20] = e("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          e("div", sC, [
            _($o),
            J[19] || (J[19] = e("span", { class: "header-divider" }, null, -1)),
            pe.value ? (s(), o("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: J[0] || (J[0] = (Z) => C.value = !0)
            }, [...J[17] || (J[17] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                e("circle", {
                  cx: "12",
                  cy: "12",
                  r: "3"
                }),
                e("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" })
              ], -1)
            ])])) : r("", !0),
            e("button", {
              class: "icon-btn",
              onClick: J[1] || (J[1] = (Z) => ue.$emit("close")),
              title: "Close"
            }, [...J[18] || (J[18] = [
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
        body: l(() => {
          var Z;
          return [
            k.value === 1 ? (s(), o("div", oC, [
              J[24] || (J[24] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              e("div", nC, [
                J[21] || (J[21] = e("label", { class: "form-label" }, "Workspace Path", -1)),
                Re(e("input", {
                  "onUpdate:modelValue": J[2] || (J[2] = (D) => S.value = D),
                  type: "text",
                  class: "form-input",
                  placeholder: t.defaultPath
                }, null, 8, aC), [
                  [kt, S.value]
                ]),
                z.value ? (s(), o("p", lC, a(z.value), 1)) : r("", !0)
              ]),
              e("div", iC, [
                e("label", rC, [
                  Re(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": J[3] || (J[3] = (D) => Y.value = D)
                  }, null, 512), [
                    [ks, Y.value]
                  ]),
                  J[22] || (J[22] = e("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              Y.value ? (s(), o("div", dC, [
                J[23] || (J[23] = e("label", { class: "form-label" }, "Models Directory", -1)),
                Re(e("input", {
                  "onUpdate:modelValue": J[4] || (J[4] = (D) => F.value = D),
                  type: "text",
                  class: "form-input",
                  placeholder: t.detectedModelsDir || "/path/to/models"
                }, null, 8, cC), [
                  [kt, F.value]
                ]),
                t.detectedModelsDir && !F.value ? (s(), o("p", uC, " Detected: " + a(t.detectedModelsDir), 1)) : r("", !0),
                P.value ? (s(), o("p", mC, " Did you mean: " + a(P.value), 1)) : r("", !0),
                x.value ? (s(), o("p", vC, a(x.value), 1)) : r("", !0),
                U.value !== null && !x.value ? (s(), o("p", fC, " Found " + a(U.value) + " model files ", 1)) : r("", !0)
              ])) : r("", !0),
              oe.value ? (s(), T($s, {
                key: 1,
                progress: Ce.value.progress,
                message: Ce.value.message
              }, null, 8, ["progress", "message"])) : r("", !0)
            ])) : r("", !0),
            k.value === 2 ? (s(), o("div", pC, [
              E.value ? (s(), o("div", gC, [...J[25] || (J[25] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (s(), o(W, { key: 1 }, [
                !n.cliInstalled && !$.value ? (s(), o("div", hC, [
                  e("div", yC, [
                    J[27] || (J[27] = e("span", { class: "cli-warning-icon" }, "!", -1)),
                    J[28] || (J[28] = e("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    e("button", {
                      class: "cli-warning-close",
                      onClick: J[5] || (J[5] = (D) => $.value = !0),
                      title: "Dismiss"
                    }, [...J[26] || (J[26] = [
                      e("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
                      ], -1)
                    ])])
                  ]),
                  J[29] || (J[29] = e("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  J[30] || (J[30] = e("div", { class: "cli-warning-commands" }, [
                    e("code", null, "pipx install comfygit"),
                    e("span", { class: "cli-warning-or" }, "or"),
                    e("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : r("", !0),
                f.value === "landing" ? (s(), o("div", wC, [
                  J[34] || (J[34] = e("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  e("button", {
                    class: "landing-option",
                    onClick: J[6] || (J[6] = (D) => f.value = "create")
                  }, [...J[31] || (J[31] = [
                    e("span", { class: "option-icon" }, "➕", -1),
                    e("div", { class: "option-content" }, [
                      e("span", { class: "option-title" }, "Create New Environment"),
                      e("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    e("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  e("button", {
                    class: "landing-option",
                    onClick: J[7] || (J[7] = (D) => {
                      R.value = !1, f.value = "import";
                    })
                  }, [...J[32] || (J[32] = [
                    e("span", { class: "option-icon" }, "📦", -1),
                    e("div", { class: "option-content" }, [
                      e("span", { class: "option-title" }, "Import Environment"),
                      e("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    e("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Z = n.existingEnvironments) != null && Z.length ? (s(), o(W, { key: 0 }, [
                    J[33] || (J[33] = e("div", { class: "landing-divider" }, [
                      e("span", null, "or switch to existing")
                    ], -1)),
                    e("div", kC, [
                      (s(!0), o(W, null, ae(n.existingEnvironments, (D) => (s(), o("label", {
                        key: D,
                        class: fe(["env-option", { selected: b.value === D }])
                      }, [
                        Re(e("input", {
                          type: "radio",
                          name: "env-select",
                          value: D,
                          "onUpdate:modelValue": J[8] || (J[8] = (G) => b.value = G)
                        }, null, 8, bC), [
                          [Pt, b.value]
                        ]),
                        e("span", _C, a(D), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : r("", !0)
                ])) : f.value === "create" ? (s(), o("div", $C, [
                  be.value ? (s(), o("div", zC, [
                    e("p", UC, [
                      J[41] || (J[41] = h(" Creating environment ", -1)),
                      e("strong", null, a(re.value), 1),
                      J[42] || (J[42] = h("... ", -1))
                    ]),
                    _($s, {
                      progress: Le.value.progress,
                      message: Le.value.message,
                      "current-phase": Le.value.phase,
                      "show-steps": !0,
                      steps: Ue
                    }, null, 8, ["progress", "message", "current-phase"]),
                    J[43] || (J[43] = e("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (s(), o(W, { key: 0 }, [
                    J[40] || (J[40] = e("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    e("div", CC, [
                      J[35] || (J[35] = e("label", { class: "form-label" }, "Environment Name", -1)),
                      Re(e("input", {
                        "onUpdate:modelValue": J[9] || (J[9] = (D) => re.value = D),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [kt, re.value]
                      ])
                    ]),
                    e("div", xC, [
                      J[36] || (J[36] = e("label", { class: "form-label" }, "Python Version", -1)),
                      Re(e("select", {
                        "onUpdate:modelValue": J[10] || (J[10] = (D) => le.value = D),
                        class: "form-select"
                      }, [
                        (s(!0), o(W, null, ae(Se(vo), (D) => (s(), o("option", {
                          key: D,
                          value: D
                        }, a(D), 9, SC))), 128))
                      ], 512), [
                        [Dt, le.value]
                      ])
                    ]),
                    e("div", IC, [
                      J[37] || (J[37] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Re(e("select", {
                        "onUpdate:modelValue": J[11] || (J[11] = (D) => K.value = D),
                        class: "form-select",
                        disabled: ve.value
                      }, [
                        (s(!0), o(W, null, ae(M.value, (D) => (s(), o("option", {
                          key: D.tag_name,
                          value: D.tag_name
                        }, a(D.name), 9, TC))), 128))
                      ], 8, EC), [
                        [Dt, K.value]
                      ])
                    ]),
                    e("div", PC, [
                      J[38] || (J[38] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Re(e("select", {
                        "onUpdate:modelValue": J[12] || (J[12] = (D) => ee.value = D),
                        class: "form-select"
                      }, [
                        (s(!0), o(W, null, ae(Se(Gs), (D) => (s(), o("option", {
                          key: D,
                          value: D
                        }, a(D) + a(D === "auto" ? " (detect GPU)" : ""), 9, RC))), 128))
                      ], 512), [
                        [Dt, ee.value]
                      ])
                    ]),
                    e("div", MC, [
                      e("label", DC, [
                        Re(e("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": J[13] || (J[13] = (D) => q.value = D)
                        }, null, 512), [
                          [ks, q.value]
                        ]),
                        J[39] || (J[39] = e("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    O.value ? (s(), o("div", LC, a(O.value), 1)) : r("", !0)
                  ], 64))
                ])) : f.value === "import" ? (s(), o("div", OC, [
                  _(yo, {
                    "workspace-path": N.value,
                    "resume-import": R.value,
                    "initial-progress": A.value ?? void 0,
                    onImportComplete: $e,
                    onImportStarted: J[14] || (J[14] = (D) => I.value = !0),
                    onSourceCleared: je
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : r("", !0)
              ], 64))
            ])) : r("", !0)
          ];
        }),
        footer: l(() => [
          e("div", NC, [
            _(Co),
            e("div", AC, [
              k.value === 1 ? (s(), T(ye, {
                key: 0,
                variant: "primary",
                disabled: !X.value || oe.value,
                onClick: Te
              }, {
                default: l(() => [
                  h(a(oe.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : k.value === 2 ? (s(), o(W, { key: 1 }, [
                !be.value && !I.value && (f.value !== "landing" || n.setupState === "no_workspace" && !N.value) ? (s(), T(ye, {
                  key: 0,
                  variant: "secondary",
                  onClick: mt
                }, {
                  default: l(() => [...J[44] || (J[44] = [
                    h(" Back ", -1)
                  ])]),
                  _: 1
                })) : r("", !0),
                f.value === "create" ? (s(), T(ye, {
                  key: 1,
                  variant: "primary",
                  disabled: !De.value || be.value,
                  onClick: Xe
                }, {
                  default: l(() => [
                    h(a(be.value ? "Creating..." : q.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : r("", !0),
                f.value === "landing" && b.value ? (s(), T(ye, {
                  key: 2,
                  variant: "primary",
                  onClick: Qe
                }, {
                  default: l(() => [
                    h(" Switch to " + a(b.value), 1)
                  ]),
                  _: 1
                })) : r("", !0)
              ], 64)) : r("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      C.value ? (s(), T(tC, {
        key: 0,
        "workspace-path": Je.value,
        onClose: J[16] || (J[16] = (Z) => C.value = !1)
      }, null, 8, ["workspace-path"])) : r("", !0)
    ], 64));
  }
}), VC = /* @__PURE__ */ se(FC, [["__scopeId", "data-v-9a9aadc0"]]), WC = { class: "comfygit-panel" }, GC = { class: "panel-header" }, jC = { class: "header-left" }, KC = {
  key: 0,
  class: "header-info"
}, HC = { class: "header-actions" }, qC = { class: "env-switcher" }, YC = {
  key: 0,
  class: "header-info"
}, JC = { class: "branch-name" }, XC = { class: "panel-main" }, QC = { class: "sidebar" }, ZC = { class: "sidebar-content" }, e3 = { class: "sidebar-section" }, t3 = { class: "sidebar-section" }, s3 = { class: "sidebar-section" }, o3 = {
  key: 0,
  class: "sidebar-badge"
}, n3 = { class: "sidebar-footer" }, a3 = { class: "content-area" }, l3 = {
  key: 0,
  class: "error-message"
}, i3 = {
  key: 1,
  class: "loading"
}, r3 = { class: "dialog-content env-selector-dialog" }, d3 = { class: "dialog-header" }, c3 = { class: "dialog-body" }, u3 = { class: "env-list" }, m3 = { class: "env-info" }, v3 = { class: "env-name-row" }, f3 = { class: "env-indicator" }, p3 = { class: "env-name" }, g3 = {
  key: 0,
  class: "env-branch"
}, h3 = {
  key: 1,
  class: "current-label"
}, y3 = { class: "env-stats" }, w3 = ["onClick"], k3 = { class: "toast-container" }, b3 = { class: "toast-message" }, _3 = /* @__PURE__ */ te({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const n = t, i = c, {
      getStatus: u,
      getHistory: g,
      getBranches: m,
      checkout: p,
      createBranch: d,
      switchBranch: v,
      deleteBranch: w,
      getEnvironments: k,
      switchEnvironment: b,
      getSwitchProgress: f,
      deleteEnvironment: C,
      syncEnvironmentManually: I,
      repairWorkflowModels: $,
      getSetupStatus: R
    } = Fe(), A = no(), { liveInstanceCount: E } = wo({ autoStart: !0 }), S = y(null), Y = y([]), F = y([]), z = y([]), x = L(() => z.value.find((H) => H.is_current)), P = y(null), U = y(!1), re = y(1), le = L(() => {
      var H;
      return ((H = P.value) == null ? void 0 : H.state) || "managed";
    }), K = y(!1), ee = y(null), q = y(null), O = y(!1), N = y(null), M = y(null), ve = y(null), oe = y(!1), be = y(!1), Ce = y(""), Le = y(null), Ue = y({ state: "idle", progress: 0, message: "" });
    let me = null, ge = null;
    const Me = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, ce = n.initialView ? Me[n.initialView] : null, X = y((ce == null ? void 0 : ce.view) ?? "status"), De = y((ce == null ? void 0 : ce.section) ?? "this-env");
    function pe(H, B) {
      X.value = H, De.value = B;
    }
    function Je(H) {
      const he = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[H];
      he && pe(he.view, he.section);
    }
    function tt() {
      pe("branches", "this-env");
    }
    function st() {
      i("close"), setTimeout(() => {
        var B;
        const H = document.querySelectorAll("button.comfyui-button");
        for (const he of H)
          if (((B = he.textContent) == null ? void 0 : B.trim()) === "Manager") {
            he.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const Te = y(null), Xe = y(!1), qe = y(!1), Qe = y([]);
    let mt = 0;
    function $e(H, B = "info", he = 3e3) {
      const Ie = ++mt;
      return Qe.value.push({ id: Ie, message: H, type: B }), he > 0 && setTimeout(() => {
        Qe.value = Qe.value.filter((Ne) => Ne.id !== Ie);
      }, he), Ie;
    }
    function je(H) {
      Qe.value = Qe.value.filter((B) => B.id !== H);
    }
    function it(H, B) {
      $e(H, B);
    }
    const Ye = L(() => {
      if (!S.value) return "neutral";
      const H = S.value.workflows, B = H.new.length > 0 || H.modified.length > 0 || H.deleted.length > 0 || S.value.has_changes;
      return S.value.comparison.is_synced ? B ? "warning" : "success" : "error";
    });
    L(() => S.value ? Ye.value === "success" ? "All synced" : Ye.value === "warning" ? "Uncommitted changes" : Ye.value === "error" ? "Not synced" : "" : "");
    async function ue() {
      K.value = !0, ee.value = null;
      try {
        const [H, B, he, Ie] = await Promise.all([
          u(!0),
          g(),
          m(),
          k()
        ]);
        S.value = H, Y.value = B.commits, F.value = he.branches, z.value = Ie, i("statusUpdate", H), N.value && await N.value.loadWorkflows(!0);
      } catch (H) {
        ee.value = H instanceof Error ? H.message : "Failed to load status", S.value = null, Y.value = [], F.value = [];
      } finally {
        K.value = !1;
      }
    }
    function J(H) {
      q.value = H;
    }
    async function Z(H) {
      var he;
      q.value = null;
      const B = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      Te.value = {
        title: B ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: B ? "You have uncommitted changes that will be lost." : `Checkout commit ${H.short_hash || ((he = H.hash) == null ? void 0 : he.slice(0, 7))}?`,
        details: B ? St() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: B ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: B,
        onConfirm: async () => {
          var Ke;
          Te.value = null, Ve();
          const Ie = $e(`Checking out ${H.short_hash || ((Ke = H.hash) == null ? void 0 : Ke.slice(0, 7))}...`, "info", 0), Ne = await p(H.hash, B);
          je(Ie), Ne.status === "success" ? $e("Restarting ComfyUI...", "success") : $e(Ne.message || "Checkout failed", "error");
        }
      };
    }
    async function D(H) {
      const B = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      Te.value = {
        title: B ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: B ? "You have uncommitted changes." : `Switch to branch "${H}"?`,
        details: B ? St() : void 0,
        warning: B ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: B ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Te.value = null, Ve();
          const he = $e(`Switching to ${H}...`, "info", 0), Ie = await v(H, B);
          je(he), Ie.status === "success" ? $e("Restarting ComfyUI...", "success") : $e(Ie.message || "Branch switch failed", "error");
        }
      };
    }
    async function G(H) {
      const B = $e(`Creating branch ${H}...`, "info", 0), he = await d(H);
      je(B), he.status === "success" ? ($e(`Branch "${H}" created`, "success"), await ue()) : $e(he.message || "Failed to create branch", "error");
    }
    async function ne(H, B = !1) {
      const he = async (Ie) => {
        var Ke;
        const Ne = $e(`Deleting branch ${H}...`, "info", 0);
        try {
          const lt = await w(H, Ie);
          je(Ne), lt.status === "success" ? ($e(`Branch "${H}" deleted`, "success"), await ue()) : (Ke = lt.message) != null && Ke.includes("not fully merged") ? Te.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${H}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Te.value = null, await he(!0);
            }
          } : $e(lt.message || "Failed to delete branch", "error");
        } catch (lt) {
          je(Ne);
          const It = lt instanceof Error ? lt.message : "Failed to delete branch";
          It.includes("not fully merged") ? Te.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${H}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Te.value = null, await he(!0);
            }
          } : $e(It, "error");
        }
      };
      Te.value = {
        title: "Delete Branch",
        message: `Delete branch "${H}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Te.value = null, await he(B);
        }
      };
    }
    async function xe(H) {
      q.value = null;
      const B = prompt("Enter branch name:");
      if (B) {
        const he = $e(`Creating branch ${B}...`, "info", 0), Ie = await d(B, H.hash);
        je(he), Ie.status === "success" ? ($e(`Branch "${B}" created from ${H.short_hash}`, "success"), await ue()) : $e(Ie.message || "Failed to create branch", "error");
      }
    }
    function Ve() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function ft() {
      Te.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var H;
          Te.value = null, Ve(), $e("Restarting environment...", "info");
          try {
            (H = window.app) != null && H.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Ct() {
      Te.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var H;
          Te.value = null, $e("Stopping environment...", "info");
          try {
            (H = window.app) != null && H.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function rt(H, B) {
      O.value = !1, Ce.value = H, Le.value = B || null, oe.value = !0;
    }
    async function Ot() {
      oe.value = !1, be.value = !0, Ve(), Ue.value = {
        progress: 10,
        state: Nt(10),
        message: At(10)
      };
      try {
        await b(Ce.value, Le.value || void 0), Ht(), Vt();
      } catch (H) {
        pt(), be.value = !1, $e(`Failed to initiate switch: ${H instanceof Error ? H.message : "Unknown error"}`, "error"), Ue.value = { state: "idle", progress: 0, message: "" }, Le.value = null;
      }
    }
    function Nt(H) {
      return H >= 100 ? "complete" : H >= 80 ? "validating" : H >= 60 ? "starting" : H >= 30 ? "syncing" : "preparing";
    }
    function At(H) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Nt(H)] || "";
    }
    function Ht() {
      if (ge) return;
      let H = 10;
      const B = 60, he = 5e3, Ie = 100, Ne = (B - H) / (he / Ie);
      ge = window.setInterval(() => {
        if (H += Ne, H >= B && (H = B, pt()), Ue.value.progress < B) {
          const Ke = Math.floor(H);
          Ue.value = {
            progress: Ke,
            state: Nt(Ke),
            message: At(Ke)
          };
        }
      }, Ie);
    }
    function pt() {
      ge && (clearInterval(ge), ge = null);
    }
    function Vt() {
      me || (me = window.setInterval(async () => {
        try {
          let H = await A.getStatus();
          if ((!H || H.state === "idle") && (H = await f()), !H)
            return;
          const B = H.progress || 0;
          B >= 60 && pt();
          const he = Math.max(B, Ue.value.progress), Ie = H.state && H.state !== "idle" && H.state !== "unknown", Ne = Ie ? H.state : Nt(he), Ke = Ie && H.message || At(he);
          Ue.value = {
            state: Ne,
            progress: he,
            message: Ke
          }, H.state === "complete" ? (pt(), Bt(), be.value = !1, $e(`✓ Switched to ${Ce.value}`, "success"), await ue(), Ce.value = "") : H.state === "rolled_back" ? (pt(), Bt(), be.value = !1, $e("Switch failed, restored previous environment", "warning"), Ce.value = "") : H.state === "critical_failure" && (pt(), Bt(), be.value = !1, $e(`Critical error during switch: ${H.message}`, "error"), Ce.value = "");
        } catch (H) {
          console.error("Failed to poll switch progress:", H);
        }
      }, 1e3));
    }
    function Bt() {
      pt(), me && (clearInterval(me), me = null);
    }
    function qt() {
      var H;
      oe.value = !1, Ce.value = "", (H = P.value) != null && H.state && P.value.state !== "managed" && (re.value = P.value.state === "no_workspace" ? 1 : 2, U.value = !0);
    }
    async function ts(H) {
      Xe.value = !1, await ue(), $e(H.message, H.success ? "success" : "error");
    }
    async function ss() {
      qe.value = !1;
      const H = $e("Syncing environment...", "info", 0);
      try {
        const B = await I("skip", !0);
        if (je(H), B.status === "success") {
          const he = [];
          B.nodes_installed.length && he.push(`${B.nodes_installed.length} installed`), B.nodes_removed.length && he.push(`${B.nodes_removed.length} removed`);
          const Ie = he.length ? `: ${he.join(", ")}` : "";
          $e(`✓ Environment synced${Ie}`, "success"), await ue();
        } else {
          const he = B.errors.length ? B.errors.join("; ") : B.message;
          $e(`Sync failed: ${he}`, "error");
        }
      } catch (B) {
        je(H), $e(`Sync error: ${B instanceof Error ? B.message : "Unknown error"}`, "error");
      }
    }
    async function os(H) {
      var B;
      try {
        const he = await $(H);
        he.failed.length === 0 ? $e(`✓ Repaired ${he.success} workflow${he.success === 1 ? "" : "s"}`, "success") : $e(`Repaired ${he.success}, failed: ${he.failed.length}`, "warning"), await ue();
      } catch (he) {
        $e(`Repair failed: ${he instanceof Error ? he.message : "Unknown error"}`, "error");
      } finally {
        (B = ve.value) == null || B.resetRepairingState();
      }
    }
    async function ie() {
      var B, he;
      const H = $e("Repairing environment...", "info", 0);
      try {
        const Ie = await I("skip", !0);
        if (je(H), Ie.status === "success") {
          const Ne = [];
          Ie.nodes_installed.length && Ne.push(`${Ie.nodes_installed.length} installed`), Ie.nodes_removed.length && Ne.push(`${Ie.nodes_removed.length} removed`);
          const Ke = Ne.length ? `: ${Ne.join(", ")}` : "";
          $e(`✓ Environment repaired${Ke}`, "success"), (B = ve.value) == null || B.closeDetailModal(), await ue();
        } else {
          const Ne = Ie.errors.length ? Ie.errors.join(", ") : Ie.message || "Unknown error";
          $e(`Repair failed: ${Ne}`, "error");
        }
      } catch (Ie) {
        je(H), $e(`Repair error: ${Ie instanceof Error ? Ie.message : "Unknown error"}`, "error");
      } finally {
        (he = ve.value) == null || he.resetRepairingEnvironmentState();
      }
    }
    async function j(H, B) {
      $e(`Environment '${H}' created`, "success"), await ue(), M.value && await M.value.loadEnvironments(), B && await rt(H);
    }
    async function Ee(H) {
      var B;
      if (((B = x.value) == null ? void 0 : B.name) === H) {
        $e("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      Te.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${H}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          Te.value = null;
          try {
            const he = await C(H);
            he.status === "success" ? ($e(`Environment "${H}" deleted`, "success"), await ue(), M.value && await M.value.loadEnvironments()) : $e(he.message || "Failed to delete environment", "error");
          } catch (he) {
            $e(`Error deleting environment: ${he instanceof Error ? he.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function Ze(H, B) {
      U.value = !1;
      try {
        P.value = await R();
      } catch {
      }
      await rt(H, B);
    }
    function gt() {
      U.value = !1, i("close");
    }
    async function Rt(H, B) {
      await rt(H, B);
    }
    async function Mt(H) {
      await ue(), await rt(H);
    }
    async function xt(H) {
      P.value = await R(), console.log(`Environment '${H}' created. Available for switching.`);
    }
    function we() {
      pe("environments", "all-envs"), setTimeout(() => {
        var H;
        (H = M.value) == null || H.openCreateModal();
      }, 100);
    }
    function St() {
      if (!S.value) return [];
      const H = [], B = S.value.workflows;
      return B.new.length && H.push(`${B.new.length} new workflow(s)`), B.modified.length && H.push(`${B.modified.length} modified workflow(s)`), B.deleted.length && H.push(`${B.deleted.length} deleted workflow(s)`), H;
    }
    return Oe(async () => {
      try {
        if (P.value = await R(), P.value.state === "no_workspace") {
          U.value = !0, re.value = 1;
          return;
        }
        if (P.value.state === "empty_workspace") {
          U.value = !0, re.value = 2;
          return;
        }
        if (P.value.state === "unmanaged") {
          U.value = !0, re.value = 2;
          return;
        }
      } catch (H) {
        console.warn("Setup status check failed, proceeding normally:", H);
      }
      await ue();
    }), (H, B) => {
      var he, Ie, Ne, Ke, lt, It, Wt, Gt, V, de, ke, We;
      return s(), o("div", WC, [
        e("div", GC, [
          e("div", jC, [
            B[31] || (B[31] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            S.value ? (s(), o("div", KC)) : r("", !0)
          ]),
          e("div", HC, [
            _($o),
            B[34] || (B[34] = e("span", { class: "header-divider" }, null, -1)),
            e("button", {
              class: fe(["icon-btn", { spinning: K.value }]),
              onClick: ue,
              title: "Refresh"
            }, [...B[32] || (B[32] = [
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
              onClick: B[0] || (B[0] = (_e) => i("close")),
              title: "Close"
            }, [...B[33] || (B[33] = [
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
        e("div", qC, [
          e("div", { class: "env-switcher-header" }, [
            B[35] || (B[35] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: ft
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: Ct
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: B[1] || (B[1] = (_e) => pe("environments", "all-envs"))
          }, [
            S.value ? (s(), o("div", YC, [
              e("span", null, a(((he = x.value) == null ? void 0 : he.name) || ((Ie = S.value) == null ? void 0 : Ie.environment) || "Loading..."), 1),
              e("span", JC, "(" + a(S.value.branch || "detached") + ")", 1)
            ])) : r("", !0),
            B[36] || (B[36] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", XC, [
          e("div", QC, [
            e("div", ZC, [
              e("div", e3, [
                B[37] || (B[37] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                e("button", {
                  class: fe(["sidebar-item", { active: X.value === "status" && De.value === "this-env" }]),
                  onClick: B[2] || (B[2] = (_e) => pe("status", "this-env"))
                }, " STATUS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: X.value === "workflows" }]),
                  onClick: B[3] || (B[3] = (_e) => pe("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: X.value === "models-env" }]),
                  onClick: B[4] || (B[4] = (_e) => pe("models-env", "this-env"))
                }, " MODELS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: X.value === "branches" }]),
                  onClick: B[5] || (B[5] = (_e) => pe("branches", "this-env"))
                }, " BRANCHES ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: X.value === "history" }]),
                  onClick: B[6] || (B[6] = (_e) => pe("history", "this-env"))
                }, " HISTORY ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: X.value === "nodes" }]),
                  onClick: B[7] || (B[7] = (_e) => pe("nodes", "this-env"))
                }, " NODES ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: X.value === "debug-env" }]),
                  onClick: B[8] || (B[8] = (_e) => pe("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              B[41] || (B[41] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", t3, [
                B[38] || (B[38] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                e("button", {
                  class: fe(["sidebar-item", { active: X.value === "environments" }]),
                  onClick: B[9] || (B[9] = (_e) => pe("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: X.value === "model-index" }]),
                  onClick: B[10] || (B[10] = (_e) => pe("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: X.value === "settings" }]),
                  onClick: B[11] || (B[11] = (_e) => pe("settings", "all-envs"))
                }, " SETTINGS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: X.value === "debug-workspace" }]),
                  onClick: B[12] || (B[12] = (_e) => pe("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              B[42] || (B[42] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", s3, [
                B[40] || (B[40] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                e("button", {
                  class: fe(["sidebar-item", { active: X.value === "deploy" }]),
                  onClick: B[13] || (B[13] = (_e) => pe("deploy", "sharing"))
                }, [
                  B[39] || (B[39] = h(" DEPLOY ", -1)),
                  Se(E) > 0 ? (s(), o("span", o3, a(Se(E)), 1)) : r("", !0)
                ], 2),
                e("button", {
                  class: fe(["sidebar-item", { active: X.value === "export" }]),
                  onClick: B[14] || (B[14] = (_e) => pe("export", "sharing"))
                }, " EXPORT ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: X.value === "import" }]),
                  onClick: B[15] || (B[15] = (_e) => pe("import", "sharing"))
                }, " IMPORT ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: X.value === "remotes" }]),
                  onClick: B[16] || (B[16] = (_e) => pe("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            e("div", n3, [
              _(Co)
            ])
          ]),
          e("div", a3, [
            ee.value ? (s(), o("div", l3, a(ee.value), 1)) : !S.value && X.value === "status" ? (s(), o("div", i3, " Loading status... ")) : (s(), o(W, { key: 2 }, [
              X.value === "status" ? (s(), T(dl, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: ve,
                status: S.value,
                "setup-state": le.value,
                onSwitchBranch: tt,
                onCommitChanges: B[17] || (B[17] = (_e) => Xe.value = !0),
                onSyncEnvironment: B[18] || (B[18] = (_e) => qe.value = !0),
                onViewWorkflows: B[19] || (B[19] = (_e) => pe("workflows", "this-env")),
                onViewHistory: B[20] || (B[20] = (_e) => pe("history", "this-env")),
                onViewDebug: B[21] || (B[21] = (_e) => pe("debug-env", "this-env")),
                onViewNodes: B[22] || (B[22] = (_e) => pe("nodes", "this-env")),
                onRepairMissingModels: os,
                onRepairEnvironment: ie,
                onStartSetup: B[23] || (B[23] = (_e) => U.value = !0),
                onViewEnvironments: B[24] || (B[24] = (_e) => pe("environments", "all-envs")),
                onCreateEnvironment: we
              }, null, 8, ["status", "setup-state"])) : X.value === "workflows" ? (s(), T(Rm, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: N,
                onRefresh: ue
              }, null, 512)) : X.value === "models-env" ? (s(), T(vv, {
                key: 2,
                onNavigate: Je
              })) : X.value === "branches" ? (s(), T(Cl, {
                key: 3,
                branches: F.value,
                current: ((Ne = S.value) == null ? void 0 : Ne.branch) || null,
                onSwitch: D,
                onCreate: G,
                onDelete: ne
              }, null, 8, ["branches", "current"])) : X.value === "history" ? (s(), T(zl, {
                key: 4,
                commits: Y.value,
                onSelect: J,
                onCheckout: Z
              }, null, 8, ["commits"])) : X.value === "nodes" ? (s(), T(cf, {
                key: 5,
                "version-mismatches": ((lt = (Ke = S.value) == null ? void 0 : Ke.comparison) == null ? void 0 : lt.version_mismatches) || [],
                onOpenNodeManager: st,
                onRepairEnvironment: ie,
                onToast: it
              }, null, 8, ["version-mismatches"])) : X.value === "debug-env" ? (s(), T(_h, { key: 6 })) : X.value === "environments" ? (s(), T(x1, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: M,
                onSwitch: rt,
                onCreated: j,
                onDelete: Ee
              }, null, 512)) : X.value === "model-index" ? (s(), T(Dv, {
                key: 8,
                onRefresh: ue
              })) : X.value === "settings" ? (s(), T(vh, { key: 9 })) : X.value === "debug-workspace" ? (s(), T(bh, { key: 10 })) : X.value === "deploy" ? (s(), T(s2, {
                key: 11,
                onToast: it,
                onNavigate: Je
              })) : X.value === "export" ? (s(), T(ty, { key: 12 })) : X.value === "import" ? (s(), T(q0, {
                key: 13,
                onImportCompleteSwitch: Mt
              })) : X.value === "remotes" ? (s(), T(Kg, {
                key: 14,
                onToast: it
              })) : r("", !0)
            ], 64))
          ])
        ]),
        q.value ? (s(), T(k2, {
          key: 0,
          commit: q.value,
          onClose: B[25] || (B[25] = (_e) => q.value = null),
          onCheckout: Z,
          onCreateBranch: xe
        }, null, 8, ["commit"])) : r("", !0),
        Te.value ? (s(), T(Ws, {
          key: 1,
          title: Te.value.title,
          message: Te.value.message,
          details: Te.value.details,
          warning: Te.value.warning,
          confirmLabel: Te.value.confirmLabel,
          cancelLabel: Te.value.cancelLabel,
          secondaryLabel: Te.value.secondaryLabel,
          secondaryAction: Te.value.secondaryAction,
          destructive: Te.value.destructive,
          onConfirm: Te.value.onConfirm,
          onCancel: B[26] || (B[26] = (_e) => Te.value = null),
          onSecondary: Te.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : r("", !0),
        _(y$, {
          show: oe.value,
          "from-environment": ((It = x.value) == null ? void 0 : It.name) || "unknown",
          "to-environment": Ce.value,
          onConfirm: Ot,
          onClose: qt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Xe.value && S.value ? (s(), T(_o, {
          key: 2,
          status: S.value,
          "as-modal": !0,
          onClose: B[27] || (B[27] = (_e) => Xe.value = !1),
          onCommitted: ts
        }, null, 8, ["status"])) : r("", !0),
        qe.value && S.value ? (s(), T(N$, {
          key: 3,
          show: qe.value,
          "mismatch-details": {
            missing_nodes: S.value.comparison.missing_nodes,
            extra_nodes: S.value.comparison.extra_nodes
          },
          onConfirm: ss,
          onClose: B[28] || (B[28] = (_e) => qe.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : r("", !0),
        _(T$, {
          show: be.value,
          state: Ue.value.state,
          progress: Ue.value.progress,
          message: Ue.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        O.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: B[30] || (B[30] = Be((_e) => O.value = !1, ["self"]))
        }, [
          e("div", r3, [
            e("div", d3, [
              B[44] || (B[44] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: B[29] || (B[29] = (_e) => O.value = !1)
              }, [...B[43] || (B[43] = [
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
            e("div", c3, [
              B[45] || (B[45] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", u3, [
                (s(!0), o(W, null, ae(z.value, (_e) => (s(), o("div", {
                  key: _e.name,
                  class: fe(["env-item", { current: _e.is_current }])
                }, [
                  e("div", m3, [
                    e("div", v3, [
                      e("span", f3, a(_e.is_current ? "●" : "○"), 1),
                      e("span", p3, a(_e.name), 1),
                      _e.current_branch ? (s(), o("span", g3, "(" + a(_e.current_branch) + ")", 1)) : r("", !0),
                      _e.is_current ? (s(), o("span", h3, "CURRENT")) : r("", !0)
                    ]),
                    e("div", y3, a(_e.workflow_count) + " workflows • " + a(_e.node_count) + " nodes ", 1)
                  ]),
                  _e.is_current ? r("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (ns) => rt(_e.name)
                  }, " SWITCH ", 8, w3))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : r("", !0),
        U.value ? (s(), T(VC, {
          key: 5,
          "default-path": ((Wt = P.value) == null ? void 0 : Wt.default_path) || "~/comfygit",
          "detected-models-dir": ((Gt = P.value) == null ? void 0 : Gt.detected_models_dir) || null,
          "initial-step": re.value,
          "existing-environments": ((V = P.value) == null ? void 0 : V.environments) || [],
          "cli-installed": ((de = P.value) == null ? void 0 : de.cli_installed) ?? !0,
          "setup-state": ((ke = P.value) == null ? void 0 : ke.state) || "no_workspace",
          "workspace-path": ((We = P.value) == null ? void 0 : We.workspace_path) || null,
          onComplete: Ze,
          onClose: gt,
          onSwitchEnvironment: Rt,
          onEnvironmentCreatedNoSwitch: xt
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : r("", !0),
        e("div", k3, [
          _(Mo, { name: "toast" }, {
            default: l(() => [
              (s(!0), o(W, null, ae(Qe.value, (_e) => (s(), o("div", {
                key: _e.id,
                class: fe(["toast", _e.type])
              }, [
                e("span", b3, a(_e.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), $3 = /* @__PURE__ */ se(_3, [["__scopeId", "data-v-037b3ee3"]]), C3 = { class: "item-header" }, x3 = { class: "item-info" }, S3 = { class: "filename" }, I3 = { class: "metadata" }, E3 = { class: "size" }, T3 = {
  key: 0,
  class: "type"
}, P3 = { class: "item-actions" }, R3 = {
  key: 0,
  class: "progress-section"
}, M3 = { class: "progress-bar" }, D3 = { class: "progress-stats" }, L3 = { class: "downloaded" }, z3 = { class: "speed" }, U3 = {
  key: 0,
  class: "eta"
}, O3 = {
  key: 1,
  class: "status-msg paused"
}, N3 = {
  key: 2,
  class: "status-msg queued"
}, A3 = {
  key: 3,
  class: "status-msg completed"
}, B3 = {
  key: 4,
  class: "status-msg failed"
}, F3 = {
  key: 0,
  class: "retries"
}, V3 = /* @__PURE__ */ te({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: c }) {
    const n = c;
    function i(m) {
      if (m === 0) return "?";
      const p = m / (1024 * 1024 * 1024);
      return p >= 1 ? `${p.toFixed(2)} GB` : `${(m / (1024 * 1024)).toFixed(1)} MB`;
    }
    function u(m) {
      return m === 0 ? "-" : `${(m / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function g(m) {
      if (m < 60) return `${Math.round(m)}s`;
      const p = Math.floor(m / 60);
      return p < 60 ? `${p}m` : `${Math.floor(p / 60)}h ${p % 60}m`;
    }
    return (m, p) => (s(), o("div", {
      class: fe(["download-item", `status-${t.item.status}`])
    }, [
      e("div", C3, [
        e("div", x3, [
          e("div", S3, a(t.item.filename), 1),
          e("div", I3, [
            e("span", E3, a(i(t.item.size)), 1),
            t.item.type ? (s(), o("span", T3, a(t.item.type), 1)) : r("", !0)
          ])
        ]),
        e("div", P3, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: p[0] || (p[0] = (d) => n("cancel")),
            title: "Cancel"
          }, " × ")) : r("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: p[1] || (p[1] = (d) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : r("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: p[2] || (p[2] = (d) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : r("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: p[3] || (p[3] = (d) => n("remove")),
            title: "Remove"
          }, " × ")) : r("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", R3, [
        e("div", M3, [
          e("div", {
            class: "progress-fill",
            style: Lt({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", D3, [
          e("span", L3, a(i(t.item.downloaded)) + " / " + a(i(t.item.size)), 1),
          e("span", z3, a(u(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", U3, a(g(t.item.eta)), 1)) : r("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", O3, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", N3, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", A3, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", B3, [
        h(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", F3, "(" + a(t.item.retries) + " retries)", 1)) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), is = /* @__PURE__ */ se(V3, [["__scopeId", "data-v-2110df65"]]), W3 = { class: "queue-title" }, G3 = { class: "count" }, j3 = { class: "queue-actions" }, K3 = { class: "action-label" }, H3 = {
  key: 0,
  class: "overall-progress"
}, q3 = { class: "progress-bar" }, Y3 = {
  key: 0,
  class: "current-mini"
}, J3 = { class: "filename" }, X3 = { class: "speed" }, Q3 = {
  key: 1,
  class: "queue-content"
}, Z3 = {
  key: 0,
  class: "section"
}, e5 = {
  key: 1,
  class: "section"
}, t5 = { class: "section-header" }, s5 = { class: "section-label paused" }, o5 = { class: "items-list" }, n5 = {
  key: 2,
  class: "section"
}, a5 = { class: "section-header" }, l5 = { class: "section-label" }, i5 = { class: "items-list" }, r5 = {
  key: 3,
  class: "section"
}, d5 = { class: "section-header" }, c5 = { class: "section-label" }, u5 = { class: "items-list" }, m5 = {
  key: 4,
  class: "section"
}, v5 = { class: "section-header" }, f5 = { class: "section-label failed" }, p5 = { class: "items-list" }, g5 = /* @__PURE__ */ te({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: n,
      queuedItems: i,
      completedItems: u,
      failedItems: g,
      pausedItems: m,
      hasItems: p,
      activeCount: d,
      cancelDownload: v,
      retryDownload: w,
      resumeDownload: k,
      resumeAllPaused: b,
      removeItem: f,
      clearCompleted: C
    } = fs(), I = y(!1);
    let $ = null;
    ut(
      () => ({
        active: d.value,
        failed: g.value.length,
        paused: m.value.length,
        completed: u.value.length
      }),
      (S, Y) => {
        $ && (clearTimeout($), $ = null);
        const F = S.active === 0 && S.failed === 0 && S.paused === 0 && S.completed > 0, z = Y && (Y.active > 0 || Y.paused > 0);
        F && z && ($ = setTimeout(() => {
          C(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const R = L(() => {
      var F;
      if (c.items.length === 0) return 0;
      const S = u.value.length, Y = ((F = n.value) == null ? void 0 : F.progress) || 0;
      return Math.round((S + Y / 100) / c.items.length * 100);
    });
    function A(S) {
      v(S);
    }
    function E(S) {
      return S === 0 ? "" : `${(S / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (S, Y) => (s(), T(et, { to: "body" }, [
      Se(p) ? (s(), o("div", {
        key: 0,
        class: fe(["model-download-queue", { minimized: !I.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: Y[0] || (Y[0] = (F) => I.value = !I.value)
        }, [
          e("div", W3, [
            Y[4] || (Y[4] = e("span", { class: "icon" }, "↓", -1)),
            Y[5] || (Y[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", G3, "(" + a(Se(d)) + "/" + a(Se(c).items.length) + ")", 1)
          ]),
          e("div", j3, [
            e("span", K3, a(I.value ? "minimize" : "expand"), 1)
          ])
        ]),
        I.value ? (s(), o("div", Q3, [
          Se(n) ? (s(), o("div", Z3, [
            Y[6] || (Y[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            _(is, {
              item: Se(n),
              onCancel: Y[1] || (Y[1] = (F) => A(Se(n).id))
            }, null, 8, ["item"])
          ])) : r("", !0),
          Se(m).length > 0 ? (s(), o("div", e5, [
            e("div", t5, [
              e("span", s5, "Paused (" + a(Se(m).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: Y[2] || (Y[2] = //@ts-ignore
                (...F) => Se(b) && Se(b)(...F))
              }, "Resume All")
            ]),
            e("div", o5, [
              (s(!0), o(W, null, ae(Se(m), (F) => (s(), T(is, {
                key: F.id,
                item: F,
                onResume: (z) => Se(k)(F.id),
                onRemove: (z) => Se(f)(F.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          Se(i).length > 0 ? (s(), o("div", n5, [
            e("div", a5, [
              e("span", l5, "Queued (" + a(Se(i).length) + ")", 1)
            ]),
            e("div", i5, [
              (s(!0), o(W, null, ae(Se(i), (F) => (s(), T(is, {
                key: F.id,
                item: F,
                onCancel: (z) => A(F.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : r("", !0),
          Se(u).length > 0 ? (s(), o("div", r5, [
            e("div", d5, [
              e("span", c5, "Completed (" + a(Se(u).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: Y[3] || (Y[3] = //@ts-ignore
                (...F) => Se(C) && Se(C)(...F))
              }, "Clear")
            ]),
            e("div", u5, [
              (s(!0), o(W, null, ae(Se(u).slice(0, 3), (F) => (s(), T(is, {
                key: F.id,
                item: F,
                onRemove: (z) => Se(f)(F.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          Se(g).length > 0 ? (s(), o("div", m5, [
            e("div", v5, [
              e("span", f5, "Failed (" + a(Se(g).length) + ")", 1)
            ]),
            e("div", p5, [
              (s(!0), o(W, null, ae(Se(g), (F) => (s(), T(is, {
                key: F.id,
                item: F,
                onRetry: (z) => Se(w)(F.id),
                onRemove: (z) => Se(f)(F.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : r("", !0)
        ])) : (s(), o("div", H3, [
          e("div", q3, [
            e("div", {
              class: "progress-fill",
              style: Lt({ width: `${R.value}%` })
            }, null, 4)
          ]),
          Se(n) ? (s(), o("div", Y3, [
            e("span", J3, a(Se(n).filename), 1),
            e("span", X3, a(E(Se(n).speed)), 1)
          ])) : r("", !0)
        ]))
      ], 2)) : r("", !0)
    ]));
  }
}), h5 = /* @__PURE__ */ se(g5, [["__scopeId", "data-v-60751cfa"]]), y5 = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', w5 = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', k5 = {
  comfy: y5,
  phosphor: w5
}, js = "comfy", xo = "comfygit-theme";
let jt = null, So = js;
function b5() {
  try {
    const t = localStorage.getItem(xo);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return js;
}
function Io(t = js) {
  jt && jt.remove(), jt = document.createElement("style"), jt.id = "comfygit-theme-styles", jt.setAttribute("data-theme", t), jt.textContent = k5[t], document.head.appendChild(jt), document.body.setAttribute("data-comfygit-theme", t), So = t;
  try {
    localStorage.setItem(xo, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function _5() {
  return So;
}
function $5(t) {
  Io(t);
}
function C5(t) {
  var g;
  const { ui_id: c, state: n } = t || {}, i = (n == null ? void 0 : n.history) || {};
  if (!c)
    return null;
  const u = i[c];
  return u && u.result === "error" && ((g = u.status) == null ? void 0 : g.status_str) === "error" ? (u.status.messages || [])[0] || "Unknown error" : null;
}
const Ks = document.createElement("link");
Ks.rel = "stylesheet";
Ks.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Ks);
const x5 = b5();
Io(x5);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), $5(t);
  },
  getTheme: () => {
    const t = _5();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let yt = null, dt = null, us = null, rs = null, eo = null;
const Zt = y(null);
let Hs = "managed", Eo = !1;
async function ws() {
  var t;
  if (!((t = Ft) != null && t.api)) return null;
  try {
    const c = await Ft.api.fetchApi("/v2/comfygit/status");
    c.ok && (Zt.value = await c.json());
  } catch {
  }
}
async function zs() {
  var t;
  if ((t = Ft) != null && t.api)
    try {
      const c = await Ft.api.fetchApi("/v2/setup/status");
      if (c.ok) {
        const n = await c.json();
        Hs = n.state, Eo = n.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function Us() {
  var c;
  if (Hs === "managed" || !Eo) return;
  const t = document.querySelectorAll("button.comfyui-button");
  for (const n of t)
    if (((c = n.textContent) == null ? void 0 : c.trim()) === "Manager" && !n.querySelector("svg, i, img")) {
      n.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function S5() {
  if (!Zt.value) return !1;
  const t = Zt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Zt.value.has_changes;
}
function to(t) {
  yt && yt.remove(), yt = document.createElement("div"), yt.className = "comfygit-panel-overlay";
  const c = document.createElement("div");
  c.className = "comfygit-panel-container", yt.appendChild(c), yt.addEventListener("click", (u) => {
    u.target === yt && Ds();
  });
  const n = (u) => {
    u.key === "Escape" && (Ds(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), Bs({
    render: () => Fs($3, {
      initialView: t,
      onClose: Ds,
      onStatusUpdate: async (u) => {
        Zt.value = u, ms(), await zs(), Os(), Us();
      }
    })
  }).mount(c), document.body.appendChild(yt);
}
function Ds() {
  yt && (yt.remove(), yt = null);
}
function I5(t) {
  ds(), dt = document.createElement("div"), dt.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  dt.style.position = "fixed", dt.style.top = `${c.bottom + 8}px`, dt.style.right = `${window.innerWidth - c.right}px`, dt.style.zIndex = "10001";
  const n = (u) => {
    dt && !dt.contains(u.target) && u.target !== t && (ds(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const i = (u) => {
    u.key === "Escape" && (ds(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), us = Bs({
    render: () => Fs(_o, {
      status: Zt.value,
      onClose: ds,
      onCommitted: (u) => {
        ds(), E5(u.success, u.message), ws().then(ms);
      }
    })
  }), us.mount(dt), document.body.appendChild(dt);
}
function ds() {
  us && (us.unmount(), us = null), dt && (dt.remove(), dt = null);
}
function E5(t, c) {
  const n = document.createElement("div"), i = t ? "#22c55e" : "#ef4444";
  n.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg-color, #1a1a1a);
    border: 1px solid ${i};
    border-radius: 8px;
    padding: 12px 16px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    z-index: 10002;
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: sans-serif;
    font-size: 13px;
    color: var(--fg-color, #fff);
    animation: toastSlideUp 0.2s ease;
  `;
  const u = document.createElement("span");
  u.textContent = t ? "✓" : "✕", u.style.cssText = `
    color: ${i};
    font-weight: bold;
    font-size: 14px;
  `, n.appendChild(u);
  const g = document.createElement("span");
  g.textContent = c, n.appendChild(g), document.body.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", n.style.transition = "opacity 0.2s ease", setTimeout(() => n.remove(), 200);
  }, 3e3);
}
function T5() {
  rs || (rs = document.createElement("div"), rs.className = "comfygit-download-queue-root", eo = Bs({
    render: () => Fs(h5)
  }), eo.mount(rs), document.body.appendChild(rs), console.log("[ComfyGit] Model download queue mounted"));
}
let vt = null;
function ms() {
  if (!vt) return;
  const t = vt.querySelector(".commit-indicator");
  t && (t.style.display = S5() ? "block" : "none");
}
function Os() {
  if (!vt) return;
  const t = Hs !== "managed";
  vt.disabled = t, vt.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const To = document.createElement("style");
To.textContent = `
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
document.head.appendChild(To);
Ft.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var u, g;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = to, vt = document.createElement("button"), vt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", vt.innerHTML = 'Commit <span class="commit-indicator"></span>', vt.title = "Quick Commit", vt.onclick = () => I5(vt), t.appendChild(c), t.appendChild(vt), (g = (u = Ft.menu) == null ? void 0 : u.settingsGroup) != null && g.element && (Ft.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), T5();
    const { loadPendingDownloads: n } = fs();
    n(), await Promise.all([ws(), zs()]), ms(), Os(), Us(), setTimeout(Us, 100), setInterval(async () => {
      await Promise.all([ws(), zs()]), ms(), Os();
    }, 3e4);
    const i = Ft.api;
    if (i) {
      let m = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((w) => {
          (w.startsWith("workflow:") || w.startsWith("Comfy.OpenWorkflowsPaths:") || w.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(w);
        }), window.location.reload();
      }, p = function() {
        const w = document.createElement("div");
        w.style.cssText = `
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
        const k = document.createElement("span");
        k.textContent = "Workflows updated - refresh required", w.appendChild(k);
        const b = document.createElement("button");
        b.textContent = "Refresh", b.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, b.onmouseover = () => b.style.background = "var(--comfy-input-bg)", b.onmouseout = () => b.style.background = "var(--comfy-menu-bg)", b.onclick = () => m(), w.appendChild(b);
        const f = document.createElement("button");
        f.textContent = "×", f.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, f.onmouseover = () => f.style.opacity = "1", f.onmouseout = () => f.style.opacity = "0.6", f.onclick = () => w.remove(), w.appendChild(f), document.body.appendChild(w), console.log("[ComfyGit] Refresh notification displayed");
      }, d = function(w) {
        const k = document.getElementById("comfygit-error-toast");
        k && k.remove();
        const b = document.createElement("div");
        b.id = "comfygit-error-toast", b.style.cssText = `
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: #1a1a1a;
          border: 2px solid #e53935;
          border-radius: 8px;
          padding: 16px 20px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.5);
          z-index: 999999;
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: sans-serif;
          font-size: 14px;
          color: #fff;
          max-width: 600px;
        `;
        const f = document.createElement("span");
        f.textContent = "⚠️", f.style.fontSize = "20px", b.appendChild(f);
        const C = document.createElement("div");
        C.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const I = document.createElement("div");
        I.textContent = "Node installation failed", I.style.cssText = "font-weight: 600; color: #e53935;", C.appendChild(I);
        const $ = document.createElement("div");
        $.textContent = "Dependency conflict detected", $.style.cssText = "font-size: 12px; opacity: 0.8;", C.appendChild($), b.appendChild(C);
        const R = document.createElement("button");
        R.textContent = "View Logs", R.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, R.onmouseover = () => R.style.background = "#c62828", R.onmouseout = () => R.style.background = "#e53935", R.onclick = () => {
          b.remove(), to("debug-env");
        }, b.appendChild(R);
        const A = document.createElement("button");
        A.textContent = "×", A.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, A.onmouseover = () => A.style.opacity = "1", A.onmouseout = () => A.style.opacity = "0.6", A.onclick = () => b.remove(), b.appendChild(A), document.body.appendChild(b), console.log("[ComfyGit] Manager error toast displayed:", w), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && b.remove();
        }, 1e4);
      };
      i.addEventListener("comfygit:workflow-changed", async (w) => {
        const { change_type: k, workflow_name: b } = w.detail;
        console.log(`[ComfyGit] Workflow ${k}: ${b}`), await ws(), ms();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      i.addEventListener("status", async (w) => {
        const k = w.detail != null;
        k && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), m()) : p()), v = k;
      }), console.log("[ComfyGit] Refresh notification system initialized"), i.addEventListener("cm-task-completed", (w) => {
        const k = C5(w.detail);
        k && d(k);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
