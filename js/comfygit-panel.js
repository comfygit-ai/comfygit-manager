import { app as zt } from "../../scripts/app.js";
import { defineComponent as ee, createElementBlock as o, openBlock as s, createCommentVNode as r, createElementVNode as e, renderSlot as Ee, createBlock as x, resolveDynamicComponent as Ts, normalizeClass as fe, withCtx as l, toDisplayString as a, createVNode as b, createTextVNode as g, computed as U, Fragment as G, renderList as ne, normalizeStyle as It, ref as w, onMounted as Be, watch as it, Teleport as Je, withModifiers as Ne, Transition as $o, createSlots as At, withKeys as $t, reactive as ys, onUnmounted as ws, readonly as Co, unref as $e, withDirectives as Le, vModelText as Bt, vModelRadio as Ut, vModelCheckbox as fs, nextTick as Ys, vModelSelect as St, vModelDynamic as xo, TransitionGroup as So, createApp as Ms, h as Ds } from "vue";
const Io = { class: "panel-layout" }, Eo = {
  key: 0,
  class: "panel-layout-header"
}, Po = {
  key: 1,
  class: "panel-layout-search"
}, Ro = { class: "panel-layout-content" }, To = {
  key: 2,
  class: "panel-layout-footer"
}, Mo = /* @__PURE__ */ ee({
  __name: "PanelLayout",
  setup(t) {
    return (c, n) => (s(), o("div", Io, [
      c.$slots.header ? (s(), o("div", Eo, [
        Ee(c.$slots, "header", {}, void 0, !0)
      ])) : r("", !0),
      c.$slots.search ? (s(), o("div", Po, [
        Ee(c.$slots, "search", {}, void 0, !0)
      ])) : r("", !0),
      e("div", Ro, [
        Ee(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (s(), o("div", To, [
        Ee(c.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), oe = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [i, f] of c)
    n[i] = f;
  return n;
}, et = /* @__PURE__ */ oe(Mo, [["__scopeId", "data-v-21565df9"]]), Do = {
  key: 0,
  class: "panel-title-prefix"
}, Lo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, zo = /* @__PURE__ */ ee({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, n) => (s(), x(Ts(`h${t.level}`), {
      class: fe(["panel-title", t.variant])
    }, {
      default: l(() => [
        t.showPrefix ? (s(), o("span", Do, a(t.prefix), 1)) : (s(), o("span", Lo)),
        Ee(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Uo = /* @__PURE__ */ oe(zo, [["__scopeId", "data-v-c3875efc"]]), No = ["title"], Oo = ["width", "height"], Bo = /* @__PURE__ */ ee({
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
      ])], 8, Oo))
    ], 8, No));
  }
}), Js = /* @__PURE__ */ oe(Bo, [["__scopeId", "data-v-6fc7f16d"]]), Ao = { class: "header-left" }, Fo = {
  key: 0,
  class: "header-actions"
}, Vo = /* @__PURE__ */ ee({
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
      e("div", Ao, [
        b(Uo, { "show-prefix": t.showPrefix }, {
          default: l(() => [
            g(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), x(Js, {
          key: 0,
          onClick: n[0] || (n[0] = (i) => c.$emit("info-click"))
        })) : r("", !0)
      ]),
      c.$slots.actions ? (s(), o("div", Fo, [
        Ee(c.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), tt = /* @__PURE__ */ oe(Vo, [["__scopeId", "data-v-55a62cd6"]]), Wo = {
  key: 0,
  class: "section-title-count"
}, Go = {
  key: 1,
  class: "section-title-icon"
}, jo = /* @__PURE__ */ ee({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (s(), x(Ts(`h${t.level}`), {
      class: fe(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, {
      default: l(() => [
        Ee(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Wo, "(" + a(t.count) + ")", 1)) : r("", !0),
        t.clickable ? (s(), o("span", Go, a(t.expanded ? "▼" : "▸"), 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), lt = /* @__PURE__ */ oe(jo, [["__scopeId", "data-v-559361eb"]]), Ko = { class: "status-grid" }, Ho = { class: "status-grid__columns" }, qo = { class: "status-grid__column" }, Yo = { class: "status-grid__title" }, Jo = { class: "status-grid__column status-grid__column--right" }, Xo = { class: "status-grid__title" }, Qo = {
  key: 0,
  class: "status-grid__footer"
}, Zo = /* @__PURE__ */ ee({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", Ko, [
      e("div", Ho, [
        e("div", qo, [
          e("h4", Yo, a(t.leftTitle), 1),
          Ee(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Jo, [
          e("h4", Xo, a(t.rightTitle), 1),
          Ee(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (s(), o("div", Qo, [
        Ee(c.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), en = /* @__PURE__ */ oe(Zo, [["__scopeId", "data-v-73b7ba3f"]]), tn = {
  key: 0,
  class: "status-item__icon"
}, sn = {
  key: 1,
  class: "status-item__count"
}, on = { class: "status-item__label" }, nn = /* @__PURE__ */ ee({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const c = t, n = U(() => `status-item--${c.variant}`);
    return (i, f) => (s(), o("div", {
      class: fe(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", tn, a(t.icon), 1)) : r("", !0),
      t.count !== void 0 ? (s(), o("span", sn, a(t.count), 1)) : r("", !0),
      e("span", on, a(t.label), 1)
    ], 2));
  }
}), bt = /* @__PURE__ */ oe(nn, [["__scopeId", "data-v-6f929183"]]), an = { class: "issue-card__header" }, ln = { class: "issue-card__icon" }, rn = { class: "issue-card__title" }, dn = {
  key: 0,
  class: "issue-card__content"
}, cn = {
  key: 0,
  class: "issue-card__description"
}, un = {
  key: 1,
  class: "issue-card__items"
}, mn = {
  key: 2,
  class: "issue-card__actions"
}, vn = /* @__PURE__ */ ee({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const c = t, n = U(() => `issue-card--${c.severity}`);
    return (i, f) => (s(), o("div", {
      class: fe(["issue-card", n.value])
    }, [
      e("div", an, [
        e("span", ln, a(t.icon), 1),
        e("h4", rn, a(t.title), 1)
      ]),
      i.$slots.default || t.description ? (s(), o("div", dn, [
        t.description ? (s(), o("p", cn, a(t.description), 1)) : r("", !0),
        Ee(i.$slots, "default", {}, void 0, !0)
      ])) : r("", !0),
      t.items && t.items.length ? (s(), o("div", un, [
        (s(!0), o(G, null, ne(t.items, (p, u) => (s(), o("div", {
          key: u,
          class: "issue-card__item"
        }, [
          f[0] || (f[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(p), 1)
        ]))), 128))
      ])) : r("", !0),
      i.$slots.actions ? (s(), o("div", mn, [
        Ee(i.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), ft = /* @__PURE__ */ oe(vn, [["__scopeId", "data-v-df6aa348"]]), fn = ["type", "disabled"], pn = {
  key: 0,
  class: "spinner"
}, gn = /* @__PURE__ */ ee({
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
      t.loading ? (s(), o("span", pn)) : r("", !0),
      t.loading ? r("", !0) : Ee(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, fn));
  }
}), Z = /* @__PURE__ */ oe(gn, [["__scopeId", "data-v-772abe47"]]), hn = { class: "empty-state" }, yn = {
  key: 0,
  class: "empty-icon"
}, wn = { class: "empty-message" }, kn = /* @__PURE__ */ ee({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, n) => (s(), o("div", hn, [
      t.icon ? (s(), o("div", yn, a(t.icon), 1)) : r("", !0),
      e("p", wn, a(t.message), 1),
      t.actionLabel ? (s(), x(Z, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => c.$emit("action"))
      }, {
        default: l(() => [
          g(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : r("", !0)
    ]));
  }
}), ht = /* @__PURE__ */ oe(kn, [["__scopeId", "data-v-4466284f"]]), bn = /* @__PURE__ */ ee({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: fe(["detail-label"]),
      style: It({ minWidth: t.minWidth })
    }, [
      Ee(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), ms = /* @__PURE__ */ oe(bn, [["__scopeId", "data-v-75e9eeb8"]]), _n = /* @__PURE__ */ ee({
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
      Ee(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Is = /* @__PURE__ */ oe(_n, [["__scopeId", "data-v-2f186e4c"]]), $n = { class: "detail-row" }, Cn = /* @__PURE__ */ ee({
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
    return (c, n) => (s(), o("div", $n, [
      b(ms, { "min-width": t.labelMinWidth }, {
        default: l(() => [
          g(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), x(Is, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: l(() => [
          g(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Ee(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Fe = /* @__PURE__ */ oe(Cn, [["__scopeId", "data-v-ef15664a"]]), xn = { class: "modal-header" }, Sn = { class: "modal-body" }, In = { class: "status-section" }, En = {
  key: 0,
  class: "status-section"
}, Pn = { class: "section-header-row" }, Rn = {
  key: 0,
  class: "workflow-group"
}, Tn = { class: "workflow-group-header" }, Mn = { class: "workflow-group-title" }, Dn = { class: "workflow-list" }, Ln = { class: "workflow-name" }, zn = { class: "workflow-issue" }, Un = {
  key: 1,
  class: "workflow-group"
}, Nn = { class: "workflow-group-header" }, On = { class: "workflow-group-title" }, Bn = { class: "workflow-list" }, An = { class: "workflow-name" }, Fn = { class: "workflow-issue" }, Vn = {
  key: 2,
  class: "workflow-group"
}, Wn = { class: "workflow-group-header" }, Gn = { class: "workflow-group-title" }, jn = { class: "workflow-list" }, Kn = { class: "workflow-name" }, Hn = {
  key: 3,
  class: "workflow-group"
}, qn = { class: "workflow-group-header" }, Yn = { class: "workflow-group-title" }, Jn = { class: "workflow-list" }, Xn = { class: "workflow-name" }, Qn = {
  key: 4,
  class: "workflow-group"
}, Zn = { class: "workflow-group-header" }, ea = { class: "workflow-group-title" }, ta = { class: "workflow-list" }, sa = { class: "workflow-name" }, oa = {
  key: 5,
  class: "workflow-group"
}, na = { class: "workflow-group-title" }, aa = { class: "expand-icon" }, la = {
  key: 0,
  class: "workflow-list"
}, ia = { class: "workflow-name" }, ra = {
  key: 1,
  class: "status-section"
}, da = {
  key: 0,
  class: "change-group"
}, ca = { class: "change-group-header" }, ua = { class: "change-group-title" }, ma = { class: "change-list" }, va = { class: "node-name" }, fa = {
  key: 0,
  class: "dev-badge"
}, pa = {
  key: 1,
  class: "change-group"
}, ga = { class: "change-group-header" }, ha = { class: "change-group-title" }, ya = { class: "change-list" }, wa = { class: "node-name" }, ka = {
  key: 0,
  class: "dev-badge"
}, ba = {
  key: 2,
  class: "change-group"
}, _a = { class: "change-list" }, $a = { class: "change-item" }, Ca = { class: "node-name" }, xa = {
  key: 3,
  class: "change-group"
}, Sa = {
  key: 2,
  class: "status-section"
}, Ia = { class: "section-header-row" }, Ea = {
  key: 0,
  class: "drift-item"
}, Pa = { class: "drift-list" }, Ra = {
  key: 0,
  class: "drift-list-more"
}, Ta = {
  key: 1,
  class: "drift-item"
}, Ma = { class: "drift-list" }, Da = {
  key: 0,
  class: "drift-list-more"
}, La = {
  key: 2,
  class: "drift-item"
}, za = { class: "drift-list" }, Ua = { class: "version-actual" }, Na = { class: "version-expected" }, Oa = {
  key: 0,
  class: "drift-list-more"
}, Ba = {
  key: 3,
  class: "drift-item"
}, Aa = { class: "repair-action" }, Fa = {
  key: 3,
  class: "status-section"
}, Va = { class: "info-box" }, Wa = { class: "drift-list" }, Ga = {
  key: 0,
  class: "drift-list-more"
}, ja = {
  key: 4,
  class: "status-section"
}, Ka = { class: "warning-box" }, Ha = {
  key: 5,
  class: "empty-state-inline"
}, qa = { class: "modal-actions" }, Ya = /* @__PURE__ */ ee({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(t) {
    const c = t, n = w(!1);
    Be(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), it(() => c.show, (k, h) => {
      console.log("StatusDetailModal show prop changed from", h, "to", k);
    }, { immediate: !0 });
    const i = U(() => {
      var k, h, E;
      return ((E = (h = (k = c.status) == null ? void 0 : k.workflows) == null ? void 0 : h.analyzed) == null ? void 0 : E.filter(
        (D) => D.status === "broken" && D.sync_state === "synced"
      )) || [];
    }), f = U(() => {
      var k, h, E;
      return ((E = (h = (k = c.status) == null ? void 0 : k.workflows) == null ? void 0 : h.analyzed) == null ? void 0 : E.filter(
        (D) => D.status === "broken" && D.sync_state !== "synced"
      )) || [];
    }), p = U(() => {
      var k, h, E;
      return ((E = (h = (k = c.status) == null ? void 0 : k.workflows) == null ? void 0 : h.synced) == null ? void 0 : E.filter((D) => {
        var S, V, R;
        const $ = (R = (V = (S = c.status) == null ? void 0 : S.workflows) == null ? void 0 : V.analyzed) == null ? void 0 : R.find((C) => C.name === D);
        return !$ || $.status !== "broken";
      })) || [];
    }), u = U(() => {
      var k, h, E, D, $;
      return (k = c.status) != null && k.workflows ? (((h = c.status.workflows.new) == null ? void 0 : h.length) ?? 0) > 0 || (((E = c.status.workflows.modified) == null ? void 0 : E.length) ?? 0) > 0 || (((D = c.status.workflows.deleted) == null ? void 0 : D.length) ?? 0) > 0 || ((($ = c.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), v = U(() => {
      var h, E, D;
      const k = (h = c.status) == null ? void 0 : h.git_changes;
      return k ? (((E = k.nodes_added) == null ? void 0 : E.length) ?? 0) > 0 || (((D = k.nodes_removed) == null ? void 0 : D.length) ?? 0) > 0 || k.workflow_changes || k.has_other_changes : !1;
    }), d = U(() => {
      var k, h, E, D, $, S;
      return !u.value && !v.value && ((h = (k = c.status) == null ? void 0 : k.comparison) == null ? void 0 : h.is_synced) && (((E = c.status) == null ? void 0 : E.missing_models_count) ?? 0) === 0 && (((S = ($ = (D = c.status) == null ? void 0 : D.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : S.length) ?? 0) === 0;
    }), m = U(() => {
      var h, E;
      const k = (E = (h = c.status) == null ? void 0 : h.git_changes) == null ? void 0 : E.workflow_changes;
      return k ? typeof k == "number" ? k : Object.keys(k).length : 0;
    });
    function y(k) {
      return typeof k == "string" ? k : k.name;
    }
    function _(k) {
      return typeof k == "object" && k.is_development === !0;
    }
    return (k, h) => {
      var E, D, $, S, V, R, C, H, F, j, T, M, A, ie, ae, Q, ve, X, N, B, I, me;
      return s(), x(Je, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: h[7] || (h[7] = (te) => k.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: h[6] || (h[6] = Ne(() => {
            }, ["stop"]))
          }, [
            e("div", xn, [
              h[8] || (h[8] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: h[0] || (h[0] = (te) => k.$emit("close"))
              }, "✕")
            ]),
            e("div", Sn, [
              e("div", In, [
                b(lt, { level: "4" }, {
                  default: l(() => [...h[9] || (h[9] = [
                    g("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                b(Fe, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (s(), o("div", En, [
                e("div", Pn, [
                  b(lt, { level: "4" }, {
                    default: l(() => [...h[10] || (h[10] = [
                      g("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: h[1] || (h[1] = (te) => k.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (s(), o("div", Rn, [
                  e("div", Tn, [
                    h[11] || (h[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Mn, "BROKEN (COMMITTED) (" + a(i.value.length) + ")", 1)
                  ]),
                  e("div", Dn, [
                    (s(!0), o(G, null, ne(i.value, (te) => (s(), o("div", {
                      key: te.name,
                      class: "workflow-item"
                    }, [
                      e("span", Ln, a(te.name), 1),
                      e("span", zn, a(te.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                f.value.length ? (s(), o("div", Un, [
                  e("div", Nn, [
                    h[12] || (h[12] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", On, "BROKEN (UNCOMMITTED) (" + a(f.value.length) + ")", 1)
                  ]),
                  e("div", Bn, [
                    (s(!0), o(G, null, ne(f.value, (te) => (s(), o("div", {
                      key: te.name,
                      class: "workflow-item"
                    }, [
                      e("span", An, a(te.name), 1),
                      e("span", Fn, a(te.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (D = (E = t.status.workflows) == null ? void 0 : E.new) != null && D.length ? (s(), o("div", Vn, [
                  e("div", Wn, [
                    h[13] || (h[13] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Gn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", jn, [
                    (s(!0), o(G, null, ne(t.status.workflows.new, (te) => (s(), o("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Kn, a(te), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (S = ($ = t.status.workflows) == null ? void 0 : $.modified) != null && S.length ? (s(), o("div", Hn, [
                  e("div", qn, [
                    h[14] || (h[14] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Yn, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Jn, [
                    (s(!0), o(G, null, ne(t.status.workflows.modified, (te) => (s(), o("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Xn, a(te), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (R = (V = t.status.workflows) == null ? void 0 : V.deleted) != null && R.length ? (s(), o("div", Qn, [
                  e("div", Zn, [
                    h[15] || (h[15] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", ea, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", ta, [
                    (s(!0), o(G, null, ne(t.status.workflows.deleted, (te) => (s(), o("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", sa, a(te), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                p.value.length ? (s(), o("div", oa, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: h[2] || (h[2] = (te) => n.value = !n.value)
                  }, [
                    h[16] || (h[16] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", na, "SYNCED (" + a(p.value.length) + ")", 1),
                    e("span", aa, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", la, [
                    (s(!0), o(G, null, ne(p.value, (te) => (s(), o("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", ia, a(te), 1)
                    ]))), 128))
                  ])) : r("", !0)
                ])) : r("", !0)
              ])) : r("", !0),
              v.value ? (s(), o("div", ra, [
                b(lt, { level: "4" }, {
                  default: l(() => [...h[17] || (h[17] = [
                    g("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (H = (C = t.status.git_changes) == null ? void 0 : C.nodes_added) != null && H.length ? (s(), o("div", da, [
                  e("div", ca, [
                    h[18] || (h[18] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", ua, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", ma, [
                    (s(!0), o(G, null, ne(t.status.git_changes.nodes_added, (te) => (s(), o("div", {
                      key: y(te),
                      class: "change-item"
                    }, [
                      e("span", va, a(y(te)), 1),
                      _(te) ? (s(), o("span", fa, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (j = (F = t.status.git_changes) == null ? void 0 : F.nodes_removed) != null && j.length ? (s(), o("div", pa, [
                  e("div", ga, [
                    h[19] || (h[19] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", ha, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", ya, [
                    (s(!0), o(G, null, ne(t.status.git_changes.nodes_removed, (te) => (s(), o("div", {
                      key: y(te),
                      class: "change-item"
                    }, [
                      e("span", wa, a(y(te)), 1),
                      _(te) ? (s(), o("span", ka, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (T = t.status.git_changes) != null && T.workflow_changes ? (s(), o("div", ba, [
                  h[20] || (h[20] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", _a, [
                    e("div", $a, [
                      e("span", Ca, a(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : r("", !0),
                (M = t.status.git_changes) != null && M.has_other_changes ? (s(), o("div", xa, [...h[21] || (h[21] = [
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
              (A = t.status.comparison) != null && A.is_synced ? r("", !0) : (s(), o("div", Sa, [
                e("div", Ia, [
                  b(lt, { level: "4" }, {
                    default: l(() => [...h[22] || (h[22] = [
                      g("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: h[3] || (h[3] = (te) => k.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                h[26] || (h[26] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (ae = (ie = t.status.comparison) == null ? void 0 : ie.missing_nodes) != null && ae.length ? (s(), o("div", Ea, [
                  b(Fe, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Pa, [
                    (s(!0), o(G, null, ne(t.status.comparison.missing_nodes.slice(0, 10), (te) => (s(), o("div", {
                      key: te,
                      class: "drift-list-item"
                    }, " - " + a(te), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", Ra, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (ve = (Q = t.status.comparison) == null ? void 0 : Q.extra_nodes) != null && ve.length ? (s(), o("div", Ta, [
                  b(Fe, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Ma, [
                    (s(!0), o(G, null, ne(t.status.comparison.extra_nodes.slice(0, 10), (te) => (s(), o("div", {
                      key: te,
                      class: "drift-list-item"
                    }, " - " + a(te), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", Da, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (N = (X = t.status.comparison) == null ? void 0 : X.version_mismatches) != null && N.length ? (s(), o("div", La, [
                  b(Fe, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  e("div", za, [
                    (s(!0), o(G, null, ne(t.status.comparison.version_mismatches.slice(0, 10), (te) => (s(), o("div", {
                      key: te.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      g(a(te.name) + ": ", 1),
                      e("span", Ua, a(te.actual), 1),
                      h[23] || (h[23] = g(" → ", -1)),
                      e("span", Na, a(te.expected), 1)
                    ]))), 128)),
                    t.status.comparison.version_mismatches.length > 10 ? (s(), o("div", Oa, " ... and " + a(t.status.comparison.version_mismatches.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                ((B = t.status.comparison) == null ? void 0 : B.packages_in_sync) === !1 ? (s(), o("div", Ba, [
                  b(Fe, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : r("", !0),
                e("div", Aa, [
                  b(Z, {
                    variant: "warning",
                    loading: t.isRepairing,
                    onClick: h[4] || (h[4] = (te) => k.$emit("repair"))
                  }, {
                    default: l(() => [...h[24] || (h[24] = [
                      g(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  h[25] || (h[25] = e("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (me = (I = t.status.comparison) == null ? void 0 : I.disabled_nodes) != null && me.length ? (s(), o("div", Fa, [
                b(lt, { level: "4" }, {
                  default: l(() => [...h[27] || (h[27] = [
                    g("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Va, [
                  h[28] || (h[28] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Wa, [
                  (s(!0), o(G, null, ne(t.status.comparison.disabled_nodes.slice(0, 10), (te) => (s(), o("div", {
                    key: te,
                    class: "drift-list-item"
                  }, " • " + a(te), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", Ga, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : r("", !0)
                ])
              ])) : r("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", ja, [
                b(lt, { level: "4" }, {
                  default: l(() => [...h[29] || (h[29] = [
                    g("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Ka, [
                  h[30] || (h[30] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                h[31] || (h[31] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : r("", !0),
              d.value ? (s(), o("div", Ha, [...h[32] || (h[32] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : r("", !0)
            ]),
            e("div", qa, [
              b(Z, {
                variant: "secondary",
                onClick: h[5] || (h[5] = (te) => k.$emit("close"))
              }, {
                default: l(() => [...h[33] || (h[33] = [
                  g(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : r("", !0)
      ]);
    };
  }
}), Ja = /* @__PURE__ */ oe(Ya, [["__scopeId", "data-v-e2b37122"]]), Xa = { class: "health-section-header" }, Qa = { class: "suggestions-content" }, Za = { class: "suggestions-text" }, el = { style: { "margin-top": "var(--cg-space-3)" } }, tl = {
  key: 1,
  class: "no-issues-text"
}, sl = /* @__PURE__ */ ee({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(t, { expose: c, emit: n }) {
    const i = t, f = w(!1), p = w(!1);
    function u() {
      f.value = !0;
    }
    function v() {
      f.value = !1, m("view-workflows");
    }
    function d() {
      f.value = !1, m("view-nodes");
    }
    const m = n, y = w(!1), _ = w(!1);
    function k() {
      _.value = !0, m("repair-environment");
    }
    function h() {
      _.value = !1;
    }
    function E() {
      f.value = !1;
    }
    const D = U(() => {
      const X = i.status.workflows.analyzed || [], N = X.filter(
        (B) => B.unresolved_models_count > 0 || B.ambiguous_models_count > 0
      );
      return N.length === 0 && i.status.missing_models_count > 0 ? X.filter((B) => B.sync_state === "synced") : N;
    });
    function $() {
      const X = D.value;
      X.length !== 0 && (y.value = !0, m("repair-missing-models", X.map((N) => N.name)));
    }
    function S() {
      y.value = !1;
    }
    c({ resetRepairingState: S, resetRepairingEnvironmentState: h, closeDetailModal: E });
    const V = U(() => i.status.workflows.new.length > 0 || i.status.workflows.modified.length > 0 || i.status.workflows.deleted.length > 0), R = U(() => i.status.has_changes), C = U(() => {
      const X = i.status.git_changes;
      return X.nodes_added.length > 0 || X.nodes_removed.length > 0 || X.workflow_changes;
    }), H = U(() => i.status.has_changes || V.value), F = U(() => Object.keys(i.status.git_changes.workflow_changes_detail).length), j = U(() => i.status.git_changes.has_other_changes), T = U(() => {
      var X;
      return ((X = i.status.workflows.analyzed) == null ? void 0 : X.filter((N) => N.status === "broken")) || [];
    }), M = U(() => {
      var X;
      return ((X = i.status.workflows.analyzed) == null ? void 0 : X.filter(
        (N) => N.has_path_sync_issues && !N.has_issues
      )) || [];
    }), A = U(() => T.value.length > 0), ie = U(() => A.value || M.value.length > 0 || i.status.missing_models_count > 0 || !i.status.comparison.is_synced || i.status.has_legacy_manager), ae = U(() => {
      const X = [];
      return i.status.workflows.new.length > 0 && X.push(`${i.status.workflows.new.length} new`), i.status.workflows.modified.length > 0 && X.push(`${i.status.workflows.modified.length} modified`), i.status.workflows.deleted.length > 0 && X.push(`${i.status.workflows.deleted.length} deleted`), X.length > 0 ? `${X.join(", ")} workflow${X.length === 1 && !X[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Q = U(() => {
      var B, I;
      const X = [], N = i.status.comparison;
      return (B = N.missing_nodes) != null && B.length && X.push(`${N.missing_nodes.length} missing node${N.missing_nodes.length === 1 ? "" : "s"}`), (I = N.extra_nodes) != null && I.length && X.push(`${N.extra_nodes.length} untracked node${N.extra_nodes.length === 1 ? "" : "s"}`), X.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${X.join(" and ")}.`;
    }), ve = U(() => {
      var B, I;
      const X = [], N = i.status.comparison;
      return (B = N.extra_nodes) != null && B.length && (N.extra_nodes.slice(0, 3).forEach((me) => {
        X.push(`Untracked: ${me}`);
      }), N.extra_nodes.length > 3 && X.push(`...and ${N.extra_nodes.length - 3} more untracked`)), (I = N.missing_nodes) != null && I.length && (N.missing_nodes.slice(0, 3).forEach((me) => {
        X.push(`Missing: ${me}`);
      }), N.missing_nodes.length > 3 && X.push(`...and ${N.missing_nodes.length - 3} more missing`)), X;
    });
    return (X, N) => (s(), o(G, null, [
      b(et, null, {
        header: l(() => [
          b(tt, { title: "STATUS" })
        ]),
        content: l(() => [
          i.setupState === "no_workspace" ? (s(), x(ft, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: l(() => [
              b(Z, {
                variant: "primary",
                size: "sm",
                onClick: N[0] || (N[0] = (B) => X.$emit("start-setup"))
              }, {
                default: l(() => [...N[13] || (N[13] = [
                  g(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "unmanaged" ? (s(), x(ft, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: l(() => [
              b(Z, {
                variant: "primary",
                size: "sm",
                onClick: N[1] || (N[1] = (B) => X.$emit("view-environments"))
              }, {
                default: l(() => [...N[14] || (N[14] = [
                  g(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "empty_workspace" ? (s(), x(ft, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: l(() => [
              b(Z, {
                variant: "primary",
                size: "sm",
                onClick: N[2] || (N[2] = (B) => X.$emit("create-environment"))
              }, {
                default: l(() => [...N[15] || (N[15] = [
                  g(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: N[4] || (N[4] = (B) => p.value = !0),
            onMouseleave: N[5] || (N[5] = (B) => p.value = !1)
          }, [
            e("div", Xa, [
              b(lt, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: l(() => [...N[16] || (N[16] = [
                  g(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              b($o, { name: "fade" }, {
                default: l(() => [
                  p.value ? (s(), x(Z, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: u
                  }, {
                    default: l(() => [...N[17] || (N[17] = [
                      g(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : r("", !0)
                ]),
                _: 1
              })
            ]),
            b(en, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, At({
              left: l(() => [
                t.status.workflows.new.length ? (s(), x(bt, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.modified.length ? (s(), x(bt, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.deleted.length ? (s(), x(bt, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : r("", !0),
                b(bt, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: V.value
                }, null, 8, ["count", "separator"])
              ]),
              right: l(() => [
                t.status.git_changes.nodes_added.length ? (s(), x(bt, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), x(bt, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.workflow_changes ? (s(), x(bt, {
                  key: 2,
                  icon: "●",
                  count: F.value,
                  label: F.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : r("", !0),
                j.value ? (s(), x(bt, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : r("", !0),
                R.value && !C.value && !j.value ? (s(), x(bt, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : r("", !0),
                R.value ? r("", !0) : (s(), x(bt, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              H.value ? {
                name: "footer",
                fn: l(() => [
                  N[19] || (N[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Qa, [
                    e("span", Za, a(ae.value), 1),
                    b(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: N[3] || (N[3] = (B) => X.$emit("commit-changes"))
                    }, {
                      default: l(() => [...N[18] || (N[18] = [
                        g(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          t.status.is_detached_head ? (s(), x(ft, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: l(() => [
              b(Z, {
                variant: "primary",
                size: "sm",
                onClick: N[6] || (N[6] = (B) => X.$emit("create-branch"))
              }, {
                default: l(() => [...N[20] || (N[20] = [
                  g(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r("", !0),
          e("div", el, [
            b(lt, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: l(() => [...N[21] || (N[21] = [
                g(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            ie.value ? (s(), o(G, { key: 0 }, [
              T.value.length > 0 ? (s(), x(ft, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${T.value.length} workflow${T.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: T.value.map((B) => `${B.name} — ${B.issue_summary}`)
              }, {
                actions: l(() => [
                  b(Z, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[7] || (N[7] = (B) => X.$emit("view-workflows"))
                  }, {
                    default: l(() => [...N[22] || (N[22] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : r("", !0),
              M.value.length > 0 ? (s(), x(ft, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${M.value.length} workflow${M.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: M.value.map((B) => `${B.name} — ${B.models_needing_path_sync_count} model path${B.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: l(() => [
                  b(Z, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[8] || (N[8] = (B) => X.$emit("view-workflows"))
                  }, {
                    default: l(() => [...N[23] || (N[23] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : r("", !0),
              t.status.missing_models_count > 0 && !A.value ? (s(), x(ft, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: l(() => [
                  b(Z, {
                    variant: "primary",
                    size: "sm",
                    disabled: y.value,
                    onClick: $
                  }, {
                    default: l(() => [
                      g(a(y.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  b(Z, {
                    variant: "secondary",
                    size: "sm",
                    onClick: N[9] || (N[9] = (B) => X.$emit("view-workflows"))
                  }, {
                    default: l(() => [...N[24] || (N[24] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : r("", !0),
              t.status.comparison.is_synced ? r("", !0) : (s(), x(ft, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: Q.value,
                items: ve.value
              }, {
                actions: l(() => [
                  b(Z, {
                    variant: "secondary",
                    size: "sm",
                    onClick: u
                  }, {
                    default: l(() => [...N[25] || (N[25] = [
                      g(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  b(Z, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[10] || (N[10] = (B) => X.$emit("view-nodes"))
                  }, {
                    default: l(() => [...N[26] || (N[26] = [
                      g(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), x(ft, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: l(() => [
                  b(Z, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[11] || (N[11] = (B) => X.$emit("view-nodes"))
                  }, {
                    default: l(() => [...N[27] || (N[27] = [
                      g(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : r("", !0)
            ], 64)) : H.value ? (s(), o("span", tl, "No issues")) : (s(), x(ht, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      b(Ja, {
        show: f.value,
        status: t.status,
        "is-repairing": _.value,
        onClose: N[12] || (N[12] = (B) => f.value = !1),
        onNavigateWorkflows: v,
        onNavigateNodes: d,
        onRepair: k
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), ol = /* @__PURE__ */ oe(sl, [["__scopeId", "data-v-55fcd77f"]]), nl = ["type", "value", "placeholder", "disabled"], al = /* @__PURE__ */ ee({
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
    const i = t, f = n, p = w(null);
    function u(v) {
      const d = v.target.value;
      f("update:modelValue", d);
    }
    return Be(() => {
      i.autoFocus && p.value && p.value.focus();
    }), c({
      focus: () => {
        var v;
        return (v = p.value) == null ? void 0 : v.focus();
      },
      blur: () => {
        var v;
        return (v = p.value) == null ? void 0 : v.blur();
      }
    }), (v, d) => (s(), o("input", {
      ref_key: "inputRef",
      ref: p,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: fe(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: u,
      onKeyup: [
        d[0] || (d[0] = $t((m) => v.$emit("enter"), ["enter"])),
        d[1] || (d[1] = $t((m) => v.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (m) => v.$emit("focus")),
      onBlur: d[3] || (d[3] = (m) => v.$emit("blur"))
    }, null, 42, nl));
  }
}), ps = /* @__PURE__ */ oe(al, [["__scopeId", "data-v-0380d08f"]]), ll = { class: "branch-create-form" }, il = { class: "form-actions" }, rl = /* @__PURE__ */ ee({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, i = w(""), f = U(() => {
      const v = i.value.trim();
      return v.length > 0 && !v.startsWith("-") && !v.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(v);
    });
    function p() {
      f.value && (n("create", i.value.trim()), i.value = "");
    }
    function u() {
      i.value = "", n("cancel");
    }
    return (v, d) => (s(), o("div", ll, [
      b(ps, {
        modelValue: i.value,
        "onUpdate:modelValue": d[0] || (d[0] = (m) => i.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: p,
        onEscape: u
      }, null, 8, ["modelValue"]),
      e("div", il, [
        b(Z, {
          variant: "primary",
          size: "sm",
          disabled: !f.value,
          onClick: p
        }, {
          default: l(() => [...d[1] || (d[1] = [
            g(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        b(Z, {
          variant: "secondary",
          size: "sm",
          onClick: u
        }, {
          default: l(() => [...d[2] || (d[2] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), dl = /* @__PURE__ */ oe(rl, [["__scopeId", "data-v-7c500394"]]), cl = { class: "branch-list-item__indicator" }, ul = { class: "branch-list-item__name" }, ml = {
  key: 0,
  class: "branch-list-item__actions"
}, vl = {
  key: 0,
  class: "branch-list-item__current-label"
}, fl = /* @__PURE__ */ ee({
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
      e("span", cl, a(t.isCurrent ? "●" : "○"), 1),
      e("span", ul, a(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (s(), o("div", ml, [
        Ee(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", vl, " current ")) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), pl = /* @__PURE__ */ oe(fl, [["__scopeId", "data-v-c6581a24"]]), gl = {
  key: 2,
  class: "branch-list"
}, hl = /* @__PURE__ */ ee({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: c }) {
    const n = c, i = w(!1);
    function f(u) {
      n("create", u), p();
    }
    function p() {
      i.value = !1;
    }
    return (u, v) => (s(), x(et, null, {
      header: l(() => [
        b(tt, { title: "BRANCHES" }, {
          actions: l(() => [
            i.value ? r("", !0) : (s(), x(Z, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: v[0] || (v[0] = (d) => i.value = !0)
            }, {
              default: l(() => [...v[1] || (v[1] = [
                g(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: l(() => [
        i.value ? (s(), x(dl, {
          key: 0,
          onCreate: f,
          onCancel: p
        })) : r("", !0),
        t.branches.length === 0 ? (s(), x(ht, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", gl, [
          (s(!0), o(G, null, ne(t.branches, (d) => (s(), x(pl, {
            key: d.name,
            "branch-name": d.name,
            "is-current": d.is_current
          }, {
            actions: l(() => [
              d.is_current ? r("", !0) : (s(), x(Z, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (m) => u.$emit("delete", d.name)
              }, {
                default: l(() => [...v[2] || (v[2] = [
                  g(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              d.is_current ? r("", !0) : (s(), x(Z, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (m) => u.$emit("switch", d.name)
              }, {
                default: l(() => [...v[3] || (v[3] = [
                  g(" Switch ", -1)
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
}), yl = /* @__PURE__ */ oe(hl, [["__scopeId", "data-v-86784ddd"]]), wl = { class: "commit-list" }, kl = /* @__PURE__ */ ee({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (s(), o("div", wl, [
      Ee(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), bl = /* @__PURE__ */ oe(kl, [["__scopeId", "data-v-8c5ee761"]]), _l = { class: "commit-hash" }, $l = /* @__PURE__ */ ee({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = U(() => c.hash.slice(0, c.length));
    return (i, f) => (s(), o("span", _l, a(n.value), 1));
  }
}), Xs = /* @__PURE__ */ oe($l, [["__scopeId", "data-v-7c333cc6"]]), Cl = { class: "commit-message" }, xl = { class: "commit-date" }, Sl = /* @__PURE__ */ ee({
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
    function f() {
      n.clickable && i("click");
    }
    return (p, u) => (s(), o("div", {
      class: fe(["commit-item", { clickable: t.clickable }]),
      onClick: f
    }, [
      b(Xs, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Cl, a(t.message), 1),
      e("span", xl, a(t.relativeDate), 1),
      p.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = Ne(() => {
        }, ["stop"]))
      }, [
        Ee(p.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), Il = /* @__PURE__ */ oe(Sl, [["__scopeId", "data-v-dd7c621b"]]), El = /* @__PURE__ */ ee({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (s(), x(et, null, {
      header: l(() => [
        b(tt, { title: "HISTORY" })
      ]),
      content: l(() => [
        t.commits.length === 0 ? (s(), x(ht, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), x(bl, { key: 1 }, {
          default: l(() => [
            (s(!0), o(G, null, ne(t.commits, (i) => (s(), x(Il, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (f) => c.$emit("select", i)
            }, {
              actions: l(() => [
                b(Z, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (f) => c.$emit("checkout", i),
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
}), Pl = /* @__PURE__ */ oe(El, [["__scopeId", "data-v-981c3c64"]]), FC = ys({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const VC = [
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
], WC = {
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
}, Rl = [
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
], GC = [
  ...Rl,
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
function jt() {
  return !1;
}
function We() {
  const t = w(!1), c = w(null);
  async function n(L, ue) {
    var z;
    if (!((z = window.app) != null && z.api))
      throw new Error("ComfyUI API not available");
    const O = await window.app.api.fetchApi(L, ue);
    if (!O.ok) {
      const pe = await O.json().catch(() => ({}));
      throw new Error(pe.error || pe.message || `Request failed: ${O.status}`);
    }
    return O.json();
  }
  async function i(L = !1) {
    return n(L ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function f(L, ue = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: L, allow_issues: ue })
    });
  }
  async function p(L = 10, ue = 0) {
    return n(`/v2/comfygit/log?limit=${L}&offset=${ue}`);
  }
  async function u(L) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: L })
    });
  }
  async function v() {
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
  async function m(L) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: L, force: !0 })
    });
  }
  async function y() {
    return n("/v2/comfygit/branches");
  }
  async function _(L) {
    return n(`/v2/comfygit/commit/${L}`);
  }
  async function k(L, ue = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: L, force: ue })
    });
  }
  async function h(L, ue = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: L, start_point: ue })
    });
  }
  async function E(L, ue = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: L, force: ue })
    });
  }
  async function D(L, ue = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(L)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ue })
    });
  }
  async function $() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const L = await i();
        return [{
          name: L.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + L.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: L.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: L.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function S(L, ue) {
    const O = { target_env: L };
    return ue && (O.workspace_path = ue), n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(O)
    });
  }
  async function V() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function R(L) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(L)
    });
  }
  async function C() {
    return n("/v2/workspace/environments/create_status");
  }
  async function H(L = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${L}`);
  }
  async function F(L) {
    return n(`/v2/workspace/environments/${L}`, {
      method: "DELETE"
    });
  }
  async function j(L = !1) {
    try {
      return n(L ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ue = await i(L), O = [];
      return ue.workflows.new.forEach((z) => {
        O.push({ name: z, status: "new", missing_nodes: 0, missing_models: 0, path: z });
      }), ue.workflows.modified.forEach((z) => {
        O.push({ name: z, status: "modified", missing_nodes: 0, missing_models: 0, path: z });
      }), ue.workflows.synced.forEach((z) => {
        O.push({ name: z, status: "synced", missing_nodes: 0, missing_models: 0, path: z });
      }), O;
    }
  }
  async function T(L) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(L)}/details`);
  }
  async function M(L) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(L)}/resolve`, {
      method: "POST"
    });
  }
  async function A(L, ue, O) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(L)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ue, install_models: O })
    });
  }
  async function ie(L, ue, O) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(L)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ue, importance: O })
    });
  }
  async function ae() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function Q() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function ve(L) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(L)}`);
  }
  async function X(L) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: L })
    });
  }
  async function N(L, ue) {
    return n(`/v2/workspace/models/${L}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ue })
    });
  }
  async function B(L, ue) {
    return n(`/v2/workspace/models/${L}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ue })
    });
  }
  async function I(L) {
    return n(`/v2/workspace/models/${L}`, {
      method: "DELETE"
    });
  }
  async function me(L) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(L)
    });
  }
  async function te() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function we() {
    return n("/v2/workspace/models/directory");
  }
  async function be(L) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: L })
    });
  }
  async function Te(L) {
    try {
      const ue = L ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(L)}` : "/v2/comfygit/config";
      return n(ue);
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
  async function De(L, ue) {
    const O = ue ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(ue)}` : "/v2/comfygit/config";
    return n(O, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(L)
    });
  }
  async function ce(L, ue) {
    try {
      const O = new URLSearchParams();
      return L && O.append("level", L), ue && O.append("lines", ue.toString()), n(`/v2/comfygit/debug/logs?${O}`);
    } catch {
      return [];
    }
  }
  async function he(L, ue) {
    try {
      const O = new URLSearchParams();
      return L && O.append("level", L), ue && O.append("lines", ue.toString()), n(`/v2/workspace/debug/logs?${O}`);
    } catch {
      return [];
    }
  }
  async function Pe() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function re() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function Y(L, ue) {
    try {
      const O = new URLSearchParams();
      return L && O.append("level", L), ue && O.append("lines", ue.toString()), n(`/v2/workspace/debug/orchestrator-logs?${O}`);
    } catch {
      return [];
    }
  }
  async function Re() {
    return n("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function ge(L) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: L })
    });
  }
  async function Ke() {
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
  async function Xe(L) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(L)}/track-dev`, {
      method: "POST"
    });
  }
  async function Qe(L) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(L)}/install`, {
      method: "POST"
    });
  }
  async function Ie(L) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(L)}/update`, {
      method: "POST"
    });
  }
  async function He(L) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(L)}`, {
      method: "DELETE"
    });
  }
  async function Ge() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function qe(L, ue) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: L, url: ue })
    });
  }
  async function rt(L) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(L)}`, {
      method: "DELETE"
    });
  }
  async function ke(L, ue, O) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(L)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ue, push_url: O })
    });
  }
  async function Ve(L) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(L)}/fetch`, {
      method: "POST"
    });
  }
  async function ot(L) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(L)}/status`);
    } catch {
      return null;
    }
  }
  async function je(L = "skip", ue = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: L,
        remove_extra_nodes: ue
      })
    });
  }
  async function de(L, ue) {
    const O = ue ? `/v2/comfygit/remotes/${encodeURIComponent(L)}/pull-preview?branch=${encodeURIComponent(ue)}` : `/v2/comfygit/remotes/${encodeURIComponent(L)}/pull-preview`;
    return n(O);
  }
  async function q(L, ue = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(L)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: ue.modelStrategy || "skip",
        force: ue.force || !1,
        resolutions: ue.resolutions
      })
    });
  }
  async function J(L, ue) {
    const O = ue ? `/v2/comfygit/remotes/${encodeURIComponent(L)}/push-preview?branch=${encodeURIComponent(ue)}` : `/v2/comfygit/remotes/${encodeURIComponent(L)}/push-preview`;
    return n(O);
  }
  async function P(L, ue = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(L)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ue.force || !1 })
    });
  }
  async function W(L, ue) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(L)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: ue })
    });
  }
  async function se(L) {
    const ue = {
      success: 0,
      failed: []
    };
    for (const O of L)
      try {
        await M(O), ue.success++;
      } catch (z) {
        ue.failed.push({
          name: O,
          error: z instanceof Error ? z.message : "Unknown error"
        });
      }
    return ue;
  }
  async function _e(L) {
    var z;
    const ue = new FormData();
    if (ue.append("file", L), !((z = window.app) != null && z.api))
      throw new Error("ComfyUI API not available");
    const O = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: ue
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!O.ok) {
      const pe = await O.json().catch(() => ({}));
      throw new Error(pe.error || `Preview failed: ${O.status}`);
    }
    return O.json();
  }
  async function Oe(L) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(L)}`
    );
  }
  async function ut(L, ue, O, z) {
    var ze;
    const pe = new FormData();
    if (pe.append("file", L), pe.append("name", ue), pe.append("model_strategy", O), pe.append("torch_backend", z), !((ze = window.app) != null && ze.api))
      throw new Error("ComfyUI API not available");
    const Ce = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: pe
    });
    if (!Ce.ok) {
      const Ae = await Ce.json().catch(() => ({}));
      throw new Error(Ae.message || Ae.error || `Import failed: ${Ce.status}`);
    }
    return Ce.json();
  }
  async function wt() {
    return n("/v2/workspace/import/status");
  }
  async function nt(L) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: L })
    });
  }
  async function Rt(L, ue, O, z) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: L,
        name: ue,
        model_strategy: O,
        torch_backend: z
      })
    });
  }
  async function Tt() {
    return n("/v2/setup/status");
  }
  async function Mt(L) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(L)
    });
  }
  async function Ft() {
    return n("/v2/setup/initialize_status");
  }
  async function mt(L) {
    return n("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(L)
    });
  }
  async function Nt() {
    return n("/v2/comfygit/deploy/summary");
  }
  async function Dt() {
    return n("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function Vt(L, ue) {
    return n("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: L, save_key: ue })
    });
  }
  async function Yt() {
    return n("/v2/comfygit/deploy/runpod/volumes");
  }
  async function Jt(L) {
    const ue = L ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(L)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return n(ue);
  }
  async function Xt(L) {
    return n("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(L)
    });
  }
  async function le() {
    return n("/v2/comfygit/deploy/runpod/pods");
  }
  async function K(L) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(L)}`, {
      method: "DELETE"
    });
  }
  async function Se(L) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(L)}/stop`, {
      method: "POST"
    });
  }
  async function Ye(L) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(L)}/start`, {
      method: "POST"
    });
  }
  async function vt(L) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(L)}/status`);
  }
  async function Ct(L) {
    return n("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: L })
    });
  }
  async function xt(L = !1) {
    return n(L ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function kt() {
    return n("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  return {
    isLoading: t,
    error: c,
    getStatus: i,
    commit: f,
    getHistory: p,
    exportEnv: u,
    validateExport: v,
    validateDeploy: d,
    exportEnvWithForce: m,
    // Git Operations
    getBranches: y,
    getCommitDetail: _,
    checkout: k,
    createBranch: h,
    switchBranch: E,
    deleteBranch: D,
    // Environment Management
    getEnvironments: $,
    switchEnvironment: S,
    getSwitchProgress: V,
    createEnvironment: R,
    getCreateProgress: C,
    getComfyUIReleases: H,
    deleteEnvironment: F,
    // Workflow Management
    getWorkflows: j,
    getWorkflowDetails: T,
    resolveWorkflow: M,
    installWorkflowDeps: A,
    setModelImportance: ie,
    // Model Management
    getEnvironmentModels: ae,
    getWorkspaceModels: Q,
    getModelDetails: ve,
    openFileLocation: X,
    addModelSource: N,
    removeModelSource: B,
    deleteModel: I,
    downloadModel: me,
    scanWorkspaceModels: te,
    getModelsDirectory: we,
    setModelsDirectory: be,
    // Settings
    getConfig: Te,
    updateConfig: De,
    // Debug/Logs
    getEnvironmentLogs: ce,
    getWorkspaceLogs: he,
    getEnvironmentLogPath: Pe,
    getWorkspaceLogPath: re,
    getOrchestratorLogs: Y,
    getOrchestratorLogPath: Re,
    openFile: ge,
    // Node Management
    getNodes: Ke,
    trackNodeAsDev: Xe,
    installNode: Qe,
    updateNode: Ie,
    uninstallNode: He,
    // Git Remotes
    getRemotes: Ge,
    addRemote: qe,
    removeRemote: rt,
    updateRemoteUrl: ke,
    fetchRemote: Ve,
    getRemoteSyncStatus: ot,
    // Push/Pull
    getPullPreview: de,
    pullFromRemote: q,
    getPushPreview: J,
    pushToRemote: P,
    validateMerge: W,
    // Environment Sync
    syncEnvironmentManually: je,
    // Workflow Repair
    repairWorkflowModels: se,
    // Import Operations
    previewTarballImport: _e,
    previewGitImport: nt,
    validateEnvironmentName: Oe,
    executeImport: ut,
    executeGitImport: Rt,
    getImportProgress: wt,
    // First-Time Setup
    getSetupStatus: Tt,
    initializeWorkspace: Mt,
    getInitializeProgress: Ft,
    validatePath: mt,
    // Deploy Operations
    getDeploySummary: Nt,
    getDataCenters: Dt,
    testRunPodConnection: Vt,
    getNetworkVolumes: Yt,
    getRunPodGpuTypes: Jt,
    deployToRunPod: Xt,
    getRunPodPods: le,
    terminateRunPodPod: K,
    stopRunPodPod: Se,
    startRunPodPod: Ye,
    getDeploymentStatus: vt,
    exportDeployPackage: Ct,
    getStoredRunPodKey: xt,
    clearRunPodKey: kt
  };
}
async function es(t, c = {}, n = 5e3) {
  const i = new AbortController(), f = setTimeout(() => i.abort(), n);
  try {
    const p = await fetch(t, {
      ...c,
      signal: i.signal
    });
    return clearTimeout(f), p;
  } catch (p) {
    throw clearTimeout(f), p.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : p;
  }
}
function Qs() {
  const t = w(null);
  async function c() {
    try {
      const u = await es(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (u.ok)
        return (await u.json()).port;
    } catch {
    }
    return 8189;
  }
  async function n() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const u = await es(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!u.ok) throw new Error("Health check failed");
      return await u.json();
    } catch {
      return t.value = await c(), null;
    }
  }
  async function i() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const u = await es(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!u.ok) throw new Error("Failed to get status");
      return await u.json();
    } catch {
      return null;
    }
  }
  async function f() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await es(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function p() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await es(
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
    restart: f,
    kill: p
  };
}
const Tl = { class: "base-modal-header" }, Ml = {
  key: 0,
  class: "base-modal-title"
}, Dl = { class: "base-modal-body" }, Ll = {
  key: 0,
  class: "base-modal-loading"
}, zl = {
  key: 1,
  class: "base-modal-error"
}, Ul = {
  key: 0,
  class: "base-modal-footer"
}, Nl = /* @__PURE__ */ ee({
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
    function f() {
      n.closeOnOverlayClick && i("close");
    }
    function p(u) {
      u.key === "Escape" && n.showCloseButton && i("close");
    }
    return Be(() => {
      document.addEventListener("keydown", p), document.body.style.overflow = "hidden";
    }), ws(() => {
      document.removeEventListener("keydown", p), document.body.style.overflow = "";
    }), (u, v) => (s(), x(Je, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: f
      }, [
        e("div", {
          class: fe(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: v[1] || (v[1] = Ne(() => {
          }, ["stop"]))
        }, [
          e("div", Tl, [
            Ee(u.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", Ml, a(t.title), 1)) : r("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: v[0] || (v[0] = (d) => u.$emit("close"))
            }, [...v[2] || (v[2] = [
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
          e("div", Dl, [
            t.loading ? (s(), o("div", Ll, "Loading...")) : t.error ? (s(), o("div", zl, a(t.error), 1)) : Ee(u.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          u.$slots.footer ? (s(), o("div", Ul, [
            Ee(u.$slots, "footer", {}, void 0, !0)
          ])) : r("", !0)
        ], 2)
      ])
    ]));
  }
}), st = /* @__PURE__ */ oe(Nl, [["__scopeId", "data-v-8dab1081"]]), Ol = ["type", "disabled"], Bl = {
  key: 0,
  class: "spinner"
}, Al = /* @__PURE__ */ ee({
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
      t.loading ? (s(), o("span", Bl)) : r("", !0),
      Ee(c.$slots, "default", {}, void 0, !0)
    ], 10, Ol));
  }
}), ye = /* @__PURE__ */ oe(Al, [["__scopeId", "data-v-f3452606"]]), Fl = {
  key: 0,
  class: "base-title-count"
}, Vl = /* @__PURE__ */ ee({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, n) => (s(), x(Ts(`h${t.level}`), {
      class: fe(["base-title", t.variant])
    }, {
      default: l(() => [
        Ee(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Fl, "(" + a(t.count) + ")", 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), as = /* @__PURE__ */ oe(Vl, [["__scopeId", "data-v-5a01561d"]]), Wl = ["value", "disabled"], Gl = {
  key: 0,
  value: "",
  disabled: ""
}, jl = ["value"], Kl = {
  key: 0,
  class: "base-select-error"
}, Hl = /* @__PURE__ */ ee({
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
    return (i, f) => (s(), o("div", {
      class: fe(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: fe(["base-select", { error: !!t.error }]),
        onChange: f[0] || (f[0] = (p) => i.$emit("update:modelValue", p.target.value))
      }, [
        t.placeholder ? (s(), o("option", Gl, a(t.placeholder), 1)) : r("", !0),
        (s(!0), o(G, null, ne(t.options, (p) => (s(), o("option", {
          key: c(p),
          value: c(p)
        }, a(n(p)), 9, jl))), 128))
      ], 42, Wl),
      t.error ? (s(), o("span", Kl, a(t.error), 1)) : r("", !0)
    ], 2));
  }
}), ql = /* @__PURE__ */ oe(Hl, [["__scopeId", "data-v-7436d745"]]), Yl = { class: "popover-header" }, Jl = { class: "popover-title" }, Xl = { class: "popover-content" }, Ql = {
  key: 0,
  class: "popover-actions"
}, Zl = /* @__PURE__ */ ee({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (s(), x(Je, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: It({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = Ne(() => {
          }, ["stop"]))
        }, [
          e("div", Yl, [
            e("h4", Jl, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Xl, [
            Ee(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (s(), o("div", Ql, [
            Ee(c.$slots, "actions", {}, void 0, !0)
          ])) : r("", !0)
        ], 4)
      ])) : r("", !0)
    ]));
  }
}), yt = /* @__PURE__ */ oe(Zl, [["__scopeId", "data-v-42815ace"]]), ei = { class: "detail-section" }, ti = {
  key: 0,
  class: "empty-message"
}, si = { class: "model-header" }, oi = { class: "model-name" }, ni = { class: "model-details" }, ai = { class: "model-row" }, li = { class: "model-row" }, ii = { class: "label" }, ri = {
  key: 0,
  class: "model-row model-row-nodes"
}, di = { class: "node-list" }, ci = ["onClick"], ui = {
  key: 1,
  class: "model-row"
}, mi = { class: "value" }, vi = {
  key: 2,
  class: "model-row"
}, fi = { class: "value error" }, pi = {
  key: 0,
  class: "model-actions"
}, gi = { class: "detail-section" }, hi = {
  key: 0,
  class: "empty-message"
}, yi = { class: "node-name" }, wi = {
  key: 0,
  class: "node-version"
}, ki = /* @__PURE__ */ ee({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getWorkflowDetails: f, setModelImportance: p, openFileLocation: u } = We(), v = w(null), d = w(!1), m = w(null), y = w(!1), _ = w({}), k = w(!1), h = w(/* @__PURE__ */ new Set()), E = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function D(T) {
      switch (T) {
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
    function $(T) {
      switch (T) {
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
    function S(T) {
      if (!T.loaded_by || T.loaded_by.length === 0) return [];
      const M = T.hash || T.filename;
      return h.value.has(M) ? T.loaded_by : T.loaded_by.slice(0, 3);
    }
    function V(T) {
      return h.value.has(T);
    }
    function R(T) {
      h.value.has(T) ? h.value.delete(T) : h.value.add(T), h.value = new Set(h.value);
    }
    async function C() {
      d.value = !0, m.value = null;
      try {
        v.value = await f(n.workflowName);
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function H(T, M) {
      _.value[T] = M, y.value = !0;
    }
    async function F(T) {
      try {
        await u(T);
      } catch (M) {
        m.value = M instanceof Error ? M.message : "Failed to open file location";
      }
    }
    async function j() {
      if (!y.value) {
        i("close");
        return;
      }
      d.value = !0, m.value = null;
      try {
        for (const [T, M] of Object.entries(_.value))
          await p(n.workflowName, T, M);
        i("refresh"), i("close");
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return Be(C), (T, M) => (s(), o(G, null, [
      b(st, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: d.value,
        error: m.value || void 0,
        onClose: M[4] || (M[4] = (A) => i("close"))
      }, {
        body: l(() => [
          v.value ? (s(), o(G, { key: 0 }, [
            e("section", ei, [
              b(as, { variant: "section" }, {
                default: l(() => [
                  g("MODELS USED (" + a(v.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.models.length === 0 ? (s(), o("div", ti, " No models used in this workflow ")) : r("", !0),
              (s(!0), o(G, null, ne(v.value.models, (A) => {
                var ie;
                return s(), o("div", {
                  key: A.hash || A.filename,
                  class: "model-card"
                }, [
                  e("div", si, [
                    M[6] || (M[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", oi, a(A.filename), 1)
                  ]),
                  e("div", ni, [
                    e("div", ai, [
                      M[7] || (M[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: fe(["value", D(A.status)])
                      }, a($(A.status)), 3)
                    ]),
                    e("div", li, [
                      e("span", ii, [
                        M[8] || (M[8] = g(" Importance: ", -1)),
                        b(Js, {
                          size: 14,
                          title: "About importance levels",
                          onClick: M[0] || (M[0] = (ae) => k.value = !0)
                        })
                      ]),
                      b(ql, {
                        "model-value": _.value[A.filename] || A.importance,
                        options: E,
                        "onUpdate:modelValue": (ae) => H(A.filename, ae)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    A.loaded_by && A.loaded_by.length > 0 ? (s(), o("div", ri, [
                      M[9] || (M[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", di, [
                        (s(!0), o(G, null, ne(S(A), (ae, Q) => (s(), o("div", {
                          key: `${ae.node_id}-${Q}`,
                          class: "node-reference"
                        }, a(ae.node_type) + " (Node #" + a(ae.node_id) + ") ", 1))), 128)),
                        A.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (ae) => R(A.hash || A.filename)
                        }, a(V(A.hash || A.filename) ? "▼ Show less" : `▶ View all (${A.loaded_by.length})`), 9, ci)) : r("", !0)
                      ])
                    ])) : r("", !0),
                    A.size_mb ? (s(), o("div", ui, [
                      M[10] || (M[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", mi, a(A.size_mb) + " MB", 1)
                    ])) : r("", !0),
                    A.has_category_mismatch ? (s(), o("div", vi, [
                      M[13] || (M[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", fi, [
                        M[11] || (M[11] = g(" In ", -1)),
                        e("code", null, a(A.actual_category) + "/", 1),
                        M[12] || (M[12] = g(" but loader needs ", -1)),
                        e("code", null, a((ie = A.expected_categories) == null ? void 0 : ie[0]) + "/", 1)
                      ])
                    ])) : r("", !0)
                  ]),
                  A.status !== "available" ? (s(), o("div", pi, [
                    A.status === "downloadable" ? (s(), x(ye, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: M[1] || (M[1] = (ae) => i("resolve"))
                    }, {
                      default: l(() => [...M[14] || (M[14] = [
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    })) : A.status === "category_mismatch" && A.file_path ? (s(), x(ye, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => F(A.file_path)
                    }, {
                      default: l(() => [...M[15] || (M[15] = [
                        g(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : A.status !== "path_mismatch" ? (s(), x(ye, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: M[2] || (M[2] = (ae) => i("resolve"))
                    }, {
                      default: l(() => [...M[16] || (M[16] = [
                        g(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : r("", !0)
                  ])) : r("", !0)
                ]);
              }), 128))
            ]),
            e("section", gi, [
              b(as, { variant: "section" }, {
                default: l(() => [
                  g("NODES USED (" + a(v.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.nodes.length === 0 ? (s(), o("div", hi, " No custom nodes used in this workflow ")) : r("", !0),
              (s(!0), o(G, null, ne(v.value.nodes, (A) => (s(), o("div", {
                key: A.name,
                class: "node-item"
              }, [
                e("span", {
                  class: fe(["node-status", A.status === "installed" ? "installed" : "missing"])
                }, a(A.status === "installed" ? "✓" : "✕"), 3),
                e("span", yi, a(A.name), 1),
                A.version ? (s(), o("span", wi, "v" + a(A.version), 1)) : r("", !0)
              ]))), 128))
            ])
          ], 64)) : r("", !0)
        ]),
        footer: l(() => [
          b(ye, {
            variant: "secondary",
            onClick: M[3] || (M[3] = (A) => i("close"))
          }, {
            default: l(() => [...M[17] || (M[17] = [
              g(" Close ", -1)
            ])]),
            _: 1
          }),
          y.value ? (s(), x(ye, {
            key: 0,
            variant: "primary",
            onClick: j
          }, {
            default: l(() => [...M[18] || (M[18] = [
              g(" Save Changes ", -1)
            ])]),
            _: 1
          })) : r("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      b(yt, {
        show: k.value,
        title: "Model Importance Levels",
        onClose: M[5] || (M[5] = (A) => k.value = !1)
      }, {
        content: l(() => [...M[19] || (M[19] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              g(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              g(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              g(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), bi = /* @__PURE__ */ oe(ki, [["__scopeId", "data-v-668728e6"]]), Me = ys({
  items: [],
  status: "idle"
});
let _t = null;
function Zs() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function bs(t) {
  return Me.items.find((c) => c.id === t);
}
async function Kt() {
  if (Me.status === "downloading") return;
  const t = Me.items.find((c) => c.status === "queued");
  if (!t) {
    Me.status = "idle";
    return;
  }
  Me.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await _i(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    Me.status = "idle", Kt();
  }
}
async function _i(t) {
  return new Promise((c, n) => {
    _t && (_t.close(), _t = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), f = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    _t = f;
    let p = Date.now(), u = 0, v = !1;
    f.onmessage = (d) => {
      try {
        const m = JSON.parse(d.data);
        switch (m.type) {
          case "progress":
            t.downloaded = m.downloaded || 0, t.size = m.total || t.size;
            const y = Date.now(), _ = (y - p) / 1e3;
            if (_ > 0.5) {
              const k = t.downloaded - u;
              if (t.speed = k / _, p = y, u = t.downloaded, t.speed > 0 && t.size > 0) {
                const h = t.size - t.downloaded;
                t.eta = h / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            v = !0, f.close(), _t = null, c();
            break;
          case "error":
            v = !0, f.close(), _t = null, n(new Error(m.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, f.onerror = () => {
      f.close(), _t = null, v || n(new Error("Connection lost"));
    };
  });
}
async function $i() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const c = await t.json();
    if (!c.pending_downloads || c.pending_downloads.length === 0) return;
    for (const n of c.pending_downloads) {
      if (Me.items.some((f) => f.url === n.url && f.filename === n.filename))
        continue;
      const i = {
        id: Zs(),
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
      Me.items.push(i);
    }
    console.log(`[ComfyGit] Loaded ${c.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function rs() {
  function t($) {
    for (const S of $) {
      if (Me.items.some(
        (C) => C.url === S.url && C.targetPath === S.targetPath && ["queued", "downloading", "paused", "completed"].includes(C.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${S.filename}`);
        continue;
      }
      const R = {
        id: Zs(),
        workflow: S.workflow,
        filename: S.filename,
        url: S.url,
        targetPath: S.targetPath,
        size: S.size || 0,
        type: S.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      Me.items.push(R);
    }
    Me.status === "idle" && Kt();
  }
  async function c($) {
    const S = bs($);
    if (S) {
      if (S.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(S.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        _t && (_t.close(), _t = null), S.status = "failed", S.error = "Cancelled by user", Me.status = "idle", Kt();
      } else if (S.status === "queued") {
        const V = Me.items.findIndex((R) => R.id === $);
        V >= 0 && Me.items.splice(V, 1);
      }
    }
  }
  function n($) {
    const S = bs($);
    !S || S.status !== "failed" || (S.status = "queued", S.error = void 0, S.progress = 0, S.downloaded = 0, Me.status === "idle" && Kt());
  }
  function i($) {
    const S = bs($);
    !S || S.status !== "paused" || (S.status = "queued", Me.status === "idle" && Kt());
  }
  function f() {
    const $ = Me.items.filter((S) => S.status === "paused");
    for (const S of $)
      S.status = "queued";
    Me.status === "idle" && Kt();
  }
  function p($) {
    const S = Me.items.findIndex((V) => V.id === $);
    S >= 0 && ["completed", "failed", "paused"].includes(Me.items[S].status) && Me.items.splice(S, 1);
  }
  function u() {
    Me.items = Me.items.filter(($) => $.status !== "completed");
  }
  function v() {
    Me.items = Me.items.filter(($) => $.status !== "failed");
  }
  const d = U(
    () => Me.items.find(($) => $.status === "downloading")
  ), m = U(
    () => Me.items.filter(($) => $.status === "queued")
  ), y = U(
    () => Me.items.filter(($) => $.status === "completed")
  ), _ = U(
    () => Me.items.filter(($) => $.status === "failed")
  ), k = U(
    () => Me.items.filter(($) => $.status === "paused")
  ), h = U(() => Me.items.length > 0), E = U(
    () => Me.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), D = U(
    () => Me.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Co(Me),
    // Computed
    currentDownload: d,
    queuedItems: m,
    completedItems: y,
    failedItems: _,
    pausedItems: k,
    hasItems: h,
    activeCount: E,
    hasPaused: D,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: i,
    resumeAllPaused: f,
    removeItem: p,
    clearCompleted: u,
    clearFailed: v,
    loadPendingDownloads: $i
  };
}
function eo() {
  const t = w(null), c = w(null), n = w([]), i = w([]), f = w(!1), p = w(null);
  async function u(V, R) {
    var H;
    if (!((H = window.app) != null && H.api))
      throw new Error("ComfyUI API not available");
    const C = await window.app.api.fetchApi(V, R);
    if (!C.ok) {
      const F = await C.json().catch(() => ({})), j = F.error || F.message || `Request failed: ${C.status}`;
      throw new Error(j);
    }
    return C.json();
  }
  async function v(V) {
    f.value = !0, p.value = null;
    try {
      let R;
      return jt() || (R = await u(
        `/v2/comfygit/workflow/${V}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = R, R;
    } catch (R) {
      const C = R instanceof Error ? R.message : "Unknown error occurred";
      throw p.value = C, R;
    } finally {
      f.value = !1;
    }
  }
  async function d(V, R, C, H) {
    f.value = !0, p.value = null;
    try {
      let F;
      if (!jt()) {
        const j = Object.fromEntries(R), T = Object.fromEntries(C), M = H ? Array.from(H) : [];
        F = await u(
          `/v2/comfygit/workflow/${V}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: j,
              model_choices: T,
              skipped_packages: M
            })
          }
        );
      }
      return c.value = F, F;
    } catch (F) {
      const j = F instanceof Error ? F.message : "Unknown error occurred";
      throw p.value = j, F;
    } finally {
      f.value = !1;
    }
  }
  async function m(V, R = 10) {
    f.value = !0, p.value = null;
    try {
      let C;
      return jt() || (C = await u(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: V, limit: R })
        }
      )), n.value = C.results, C.results;
    } catch (C) {
      const H = C instanceof Error ? C.message : "Unknown error occurred";
      throw p.value = H, C;
    } finally {
      f.value = !1;
    }
  }
  async function y(V, R = 10) {
    f.value = !0, p.value = null;
    try {
      let C;
      return jt() || (C = await u(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: V, limit: R })
        }
      )), i.value = C.results, C.results;
    } catch (C) {
      const H = C instanceof Error ? C.message : "Unknown error occurred";
      throw p.value = H, C;
    } finally {
      f.value = !1;
    }
  }
  const _ = ys({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function k() {
    _.phase = "idle", _.currentFile = void 0, _.currentFileIndex = void 0, _.totalFiles = void 0, _.bytesDownloaded = void 0, _.bytesTotal = void 0, _.completedFiles = [], _.nodesToInstall = [], _.nodesInstalled = [], _.installError = void 0, _.needsRestart = void 0, _.error = void 0, _.nodeInstallProgress = void 0;
  }
  async function h(V) {
    _.phase = "installing", _.nodesInstalled = [], _.installError = void 0, _.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return jt(), await E(V);
    } catch (R) {
      const C = R instanceof Error ? R.message : "Failed to install nodes";
      throw _.installError = C, R;
    }
  }
  async function E(V) {
    var C;
    const R = await u(
      `/v2/comfygit/workflow/${V}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: _.nodesToInstall
        })
      }
    );
    if (_.nodeInstallProgress) {
      _.nodeInstallProgress.totalNodes = _.nodesToInstall.length;
      const H = new Map(((C = R.failed) == null ? void 0 : C.map((F) => [F.node_id, F.error])) || []);
      for (let F = 0; F < _.nodesToInstall.length; F++) {
        const j = _.nodesToInstall[F], T = H.get(j);
        _.nodeInstallProgress.completedNodes.push({
          node_id: j,
          success: !T,
          error: T
        });
      }
    }
    return _.nodesInstalled = R.nodes_installed, _.needsRestart = R.nodes_installed.length > 0, R.failed && R.failed.length > 0 && (_.installError = `${R.failed.length} package(s) failed to install`), R;
  }
  async function D(V, R, C) {
    k(), _.phase = "resolving", p.value = null;
    const H = Object.fromEntries(R), F = Object.fromEntries(C);
    try {
      const j = await fetch(`/v2/comfygit/workflow/${V}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: H,
          model_choices: F
        })
      });
      if (!j.ok)
        throw new Error(`Request failed: ${j.status}`);
      if (!j.body)
        throw new Error("No response body");
      const T = j.body.getReader(), M = new TextDecoder();
      let A = "";
      for (; ; ) {
        const { done: ie, value: ae } = await T.read();
        if (ie) break;
        A += M.decode(ae, { stream: !0 });
        const Q = A.split(`

`);
        A = Q.pop() || "";
        for (const ve of Q) {
          if (!ve.trim()) continue;
          const X = ve.split(`
`);
          let N = "", B = "";
          for (const I of X)
            I.startsWith("event: ") ? N = I.slice(7) : I.startsWith("data: ") && (B = I.slice(6));
          if (B)
            try {
              const I = JSON.parse(B);
              $(N, I);
            } catch (I) {
              console.warn("Failed to parse SSE event:", I);
            }
        }
      }
    } catch (j) {
      const T = j instanceof Error ? j.message : "Unknown error occurred";
      throw p.value = T, _.error = T, _.phase = "error", j;
    }
  }
  function $(V, R) {
    switch (V) {
      case "batch_start":
        _.phase = "downloading", _.totalFiles = R.total;
        break;
      case "file_start":
        _.currentFile = R.filename, _.currentFileIndex = R.index, _.bytesDownloaded = 0, _.bytesTotal = void 0;
        break;
      case "file_progress":
        _.bytesDownloaded = R.downloaded, _.bytesTotal = R.total;
        break;
      case "file_complete":
        _.completedFiles.push({
          filename: R.filename,
          success: R.success,
          error: R.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        _.nodesToInstall = R.nodes_to_install || [], R.download_results && (_.completedFiles = R.download_results), _.phase = "complete";
        break;
      case "error":
        _.error = R.message, _.phase = "error", p.value = R.message;
        break;
    }
  }
  function S(V, R) {
    const { addToQueue: C } = rs(), H = R.filter((F) => F.url && F.target_path).map((F) => ({
      workflow: V,
      filename: F.filename,
      url: F.url,
      targetPath: F.target_path,
      size: F.size || 0,
      type: "model"
    }));
    return H.length > 0 && C(H), H.length;
  }
  return {
    // State
    result: t,
    appliedResult: c,
    searchResults: n,
    modelSearchResults: i,
    isLoading: f,
    error: p,
    progress: _,
    // Methods
    analyzeWorkflow: v,
    applyResolution: d,
    applyResolutionWithProgress: D,
    installNodes: h,
    searchNodes: m,
    searchModels: y,
    resetProgress: k,
    queueModelDownloads: S
  };
}
const Ci = { class: "resolution-stepper" }, xi = { class: "stepper-header" }, Si = ["onClick"], Ii = {
  key: 0,
  class: "step-icon"
}, Ei = {
  key: 1,
  class: "step-number"
}, Pi = { class: "step-label" }, Ri = {
  key: 0,
  class: "step-connector"
}, Ti = { class: "stepper-content" }, Mi = /* @__PURE__ */ ee({
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
    function f(m) {
      var y;
      if ((y = n.stepStats) != null && y[m]) {
        const _ = n.stepStats[m];
        return _.total > 0 && _.resolved === _.total;
      }
      return n.completedSteps.includes(m);
    }
    function p(m) {
      var y;
      if ((y = n.stepStats) != null && y[m]) {
        const _ = n.stepStats[m];
        return _.resolved > 0 && _.resolved < _.total;
      }
      return !1;
    }
    function u(m) {
      return f(m) ? "state-complete" : p(m) ? "state-partial" : "state-pending";
    }
    function v(m) {
      return !1;
    }
    function d(m) {
      i("step-change", m);
    }
    return (m, y) => (s(), o("div", Ci, [
      e("div", xi, [
        (s(!0), o(G, null, ne(t.steps, (_, k) => (s(), o("div", {
          key: _.id,
          class: fe(["step", {
            active: t.currentStep === _.id,
            completed: f(_.id),
            "in-progress": p(_.id),
            disabled: v(_.id)
          }]),
          onClick: (h) => d(_.id)
        }, [
          e("div", {
            class: fe(["step-indicator", u(_.id)])
          }, [
            f(_.id) ? (s(), o("span", Ii, "✓")) : (s(), o("span", Ei, a(k + 1), 1))
          ], 2),
          e("div", Pi, a(_.label), 1),
          k < t.steps.length - 1 ? (s(), o("div", Ri)) : r("", !0)
        ], 10, Si))), 128))
      ]),
      e("div", Ti, [
        Ee(m.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Di = /* @__PURE__ */ oe(Mi, [["__scopeId", "data-v-2a7b3af8"]]), Li = /* @__PURE__ */ ee({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = U(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), i = U(() => `confidence-${n.value}`), f = U(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (p, u) => (s(), o("span", {
      class: fe(["confidence-badge", i.value, t.size])
    }, a(f.value), 3));
  }
}), gs = /* @__PURE__ */ oe(Li, [["__scopeId", "data-v-17ec4b80"]]), zi = { class: "node-info" }, Ui = { class: "node-info-text" }, Ni = { class: "item-body" }, Oi = {
  key: 0,
  class: "resolved-state"
}, Bi = {
  key: 1,
  class: "multiple-options"
}, Ai = { class: "options-list" }, Fi = ["onClick"], Vi = ["name", "value", "checked", "onChange"], Wi = { class: "option-content" }, Gi = { class: "option-header" }, ji = { class: "option-package-id" }, Ki = {
  key: 0,
  class: "option-title"
}, Hi = { class: "option-meta" }, qi = {
  key: 0,
  class: "installed-badge"
}, Yi = { class: "action-buttons" }, Ji = {
  key: 2,
  class: "unresolved"
}, Xi = {
  key: 0,
  class: "searching-state"
}, Qi = { class: "options-list" }, Zi = ["onClick"], er = ["name", "value"], tr = { class: "option-content" }, sr = { class: "option-header" }, or = { class: "option-package-id" }, nr = {
  key: 0,
  class: "option-description"
}, ar = { class: "option-meta" }, lr = {
  key: 0,
  class: "installed-badge"
}, ir = {
  key: 2,
  class: "unresolved-message"
}, rr = { class: "action-buttons" }, dr = /* @__PURE__ */ ee({
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
    function f(d, m = 80) {
      return d.length <= m ? d : d.slice(0, m - 3) + "...";
    }
    const p = U(() => !!n.choice);
    U(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.action;
    }), U(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.package_id;
    });
    const u = U(() => {
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
    return (d, m) => (s(), o("div", {
      class: fe(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: p.value }])
    }, [
      e("div", zi, [
        e("span", Ui, [
          m[7] || (m[7] = g("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: fe(["status-badge", u.value])
        }, a(t.statusLabel), 3)) : r("", !0)
      ]),
      e("div", Ni, [
        p.value ? (s(), o("div", Oi, [
          b(ye, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (y) => i("clear-choice"))
          }, {
            default: l(() => [...m[8] || (m[8] = [
              g(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Bi, [
          m[12] || (m[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Ai, [
            (s(!0), o(G, null, ne(t.options, (y, _) => (s(), o("label", {
              key: y.package_id,
              class: fe(["option-card", { selected: t.selectedOptionIndex === _ }]),
              onClick: (k) => v(_)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: _,
                checked: t.selectedOptionIndex === _,
                onChange: (k) => v(_)
              }, null, 40, Vi),
              e("div", Wi, [
                e("div", Gi, [
                  e("span", ji, a(y.package_id), 1),
                  b(gs, {
                    confidence: y.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                y.title && y.title !== y.package_id ? (s(), o("div", Ki, a(y.title), 1)) : r("", !0),
                e("div", Hi, [
                  y.is_installed ? (s(), o("span", qi, "Already Installed")) : r("", !0)
                ])
              ])
            ], 10, Fi))), 128))
          ]),
          e("div", Yi, [
            b(ye, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (y) => i("search"))
            }, {
              default: l(() => [...m[9] || (m[9] = [
                g(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            b(ye, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (y) => i("manual-entry"))
            }, {
              default: l(() => [...m[10] || (m[10] = [
                g(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(ye, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (y) => i("mark-optional"))
            }, {
              default: l(() => [...m[11] || (m[11] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Ji, [
          t.isSearching ? (s(), o("div", Xi, [...m[13] || (m[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(G, { key: 1 }, [
            m[14] || (m[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", Qi, [
              (s(!0), o(G, null, ne(t.searchResults.slice(0, 5), (y, _) => (s(), o("label", {
                key: y.package_id,
                class: "option-card",
                onClick: (k) => i("search-result-selected", y)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: _
                }, null, 8, er),
                e("div", tr, [
                  e("div", sr, [
                    e("span", or, a(y.package_id), 1),
                    b(gs, {
                      confidence: y.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  y.description ? (s(), o("div", nr, a(f(y.description)), 1)) : r("", !0),
                  e("div", ar, [
                    y.is_installed ? (s(), o("span", lr, "Already Installed")) : r("", !0)
                  ])
                ])
              ], 8, Zi))), 128))
            ])
          ], 64)) : (s(), o("div", ir, [...m[15] || (m[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", rr, [
            b(ye, {
              variant: "secondary",
              size: "sm",
              onClick: m[4] || (m[4] = (y) => i("search"))
            }, {
              default: l(() => {
                var y;
                return [
                  g(a((y = t.searchResults) != null && y.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            b(ye, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (y) => i("manual-entry"))
            }, {
              default: l(() => [...m[16] || (m[16] = [
                g(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(ye, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (y) => i("mark-optional"))
            }, {
              default: l(() => [...m[17] || (m[17] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), cr = /* @__PURE__ */ oe(dr, [["__scopeId", "data-v-c2997d1d"]]), ur = { class: "item-navigator" }, mr = { class: "nav-item-info" }, vr = ["title"], fr = { class: "nav-controls" }, pr = { class: "nav-arrows" }, gr = ["disabled"], hr = ["disabled"], yr = { class: "nav-position" }, wr = /* @__PURE__ */ ee({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const n = c;
    return (i, f) => (s(), o("div", ur, [
      e("div", mr, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, vr)
      ]),
      e("div", fr, [
        e("div", pr, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: f[0] || (f[0] = (p) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, gr),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: f[1] || (f[1] = (p) => n("next")),
            title: "Next item"
          }, " → ", 8, hr)
        ]),
        e("span", yr, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), to = /* @__PURE__ */ oe(wr, [["__scopeId", "data-v-74af7920"]]), kr = ["type", "value", "placeholder", "disabled"], br = {
  key: 0,
  class: "base-input-error"
}, _r = /* @__PURE__ */ ee({
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
          n[1] || (n[1] = $t((i) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = $t((i) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, kr),
      t.error ? (s(), o("span", br, a(t.error), 1)) : r("", !0)
    ], 2));
  }
}), gt = /* @__PURE__ */ oe(_r, [["__scopeId", "data-v-9ba02cdc"]]), $r = { class: "node-resolution-step" }, Cr = {
  key: 0,
  class: "auto-resolved-section"
}, xr = { class: "section-header" }, Sr = { class: "stat-badge" }, Ir = { class: "resolved-packages-list" }, Er = { class: "package-info" }, Pr = { class: "package-id" }, Rr = { class: "node-count" }, Tr = { class: "package-actions" }, Mr = {
  key: 0,
  class: "status-badge install"
}, Dr = {
  key: 1,
  class: "status-badge skip"
}, Lr = ["onClick"], zr = {
  key: 1,
  class: "section-divider"
}, Ur = { class: "step-header" }, Nr = { class: "stat-badge" }, Or = {
  key: 1,
  class: "step-body"
}, Br = {
  key: 3,
  class: "empty-state"
}, Ar = { class: "node-modal-body" }, Fr = { class: "node-search-results-container" }, Vr = {
  key: 0,
  class: "node-search-results"
}, Wr = ["onClick"], Gr = { class: "node-result-header" }, jr = { class: "node-result-package-id" }, Kr = {
  key: 0,
  class: "node-result-description"
}, Hr = {
  key: 1,
  class: "node-empty-state"
}, qr = {
  key: 2,
  class: "node-empty-state"
}, Yr = {
  key: 3,
  class: "node-empty-state"
}, Jr = { class: "node-manual-entry-modal" }, Xr = { class: "node-modal-body" }, Qr = { class: "node-modal-actions" }, Zr = /* @__PURE__ */ ee({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: c }) {
    const n = t, i = c, { searchNodes: f } = eo(), p = w(0), u = w(!1), v = w(!1), d = w(""), m = w(""), y = w([]), _ = w(!1), k = w(/* @__PURE__ */ new Map()), h = w(/* @__PURE__ */ new Set()), E = w(!1);
    function D() {
      E.value && B(), E.value = !1;
    }
    const $ = U(() => n.nodes[p.value]), S = U(() => n.nodes.filter((ce) => n.nodeChoices.has(ce.node_type)).length), V = U(() => $.value ? k.value.get($.value.node_type) || [] : []), R = U(() => $.value ? h.value.has($.value.node_type) : !1);
    it($, async (ce) => {
      var he;
      ce && ((he = ce.options) != null && he.length || k.value.has(ce.node_type) || h.value.has(ce.node_type) || n.nodeChoices.has(ce.node_type) || await C(ce.node_type));
    }, { immediate: !0 });
    async function C(ce) {
      h.value.add(ce);
      try {
        const he = await f(ce, 5);
        k.value.set(ce, he);
      } catch {
        k.value.set(ce, []);
      } finally {
        h.value.delete(ce);
      }
    }
    const H = U(() => n.autoResolvedPackages.filter((ce) => !n.skippedPackages.has(ce.package_id)).length);
    function F(ce) {
      return n.skippedPackages.has(ce);
    }
    function j(ce) {
      i("package-skip", ce);
    }
    const T = U(() => {
      var he;
      if (!$.value) return "not-found";
      const ce = n.nodeChoices.get($.value.node_type);
      if (ce)
        switch (ce.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (he = $.value.options) != null && he.length ? "ambiguous" : "not-found";
    }), M = U(() => {
      var he;
      if (!$.value) return;
      const ce = n.nodeChoices.get($.value.node_type);
      if (ce)
        switch (ce.action) {
          case "install":
            return ce.package_id ? `→ ${ce.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (he = $.value.options) != null && he.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function A(ce) {
      ce >= 0 && ce < n.nodes.length && (p.value = ce);
    }
    function ie() {
      $.value && i("mark-optional", $.value.node_type);
    }
    function ae() {
      $.value && i("skip", $.value.node_type);
    }
    function Q(ce) {
      $.value && i("option-selected", $.value.node_type, ce);
    }
    function ve() {
      $.value && i("clear-choice", $.value.node_type);
    }
    function X() {
      $.value && (d.value = $.value.node_type, y.value = V.value, u.value = !0, we(d.value));
    }
    function N() {
      m.value = "", v.value = !0;
    }
    function B() {
      u.value = !1, d.value = "", y.value = [];
    }
    function I() {
      v.value = !1, m.value = "";
    }
    let me = null;
    function te() {
      me && clearTimeout(me), me = setTimeout(() => {
        we(d.value);
      }, 300);
    }
    async function we(ce) {
      if (!ce.trim()) {
        y.value = [];
        return;
      }
      _.value = !0;
      try {
        y.value = await f(ce, 10);
      } catch {
        y.value = [];
      } finally {
        _.value = !1;
      }
    }
    function be(ce) {
      $.value && (i("manual-entry", $.value.node_type, ce.package_id), B());
    }
    function Te(ce) {
      $.value && i("manual-entry", $.value.node_type, ce.package_id);
    }
    function De() {
      !$.value || !m.value.trim() || (i("manual-entry", $.value.node_type, m.value.trim()), I());
    }
    return (ce, he) => {
      var Pe, re;
      return s(), o("div", $r, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", Cr, [
          e("div", xr, [
            he[6] || (he[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", Sr, a(H.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", Ir, [
            (s(!0), o(G, null, ne(t.autoResolvedPackages, (Y) => (s(), o("div", {
              key: Y.package_id,
              class: "resolved-package-item"
            }, [
              e("div", Er, [
                e("code", Pr, a(Y.package_id), 1),
                e("span", Rr, a(Y.node_types_count) + " node type" + a(Y.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", Tr, [
                F(Y.package_id) ? (s(), o("span", Dr, " SKIPPED ")) : (s(), o("span", Mr, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (Re) => j(Y.package_id)
                }, a(F(Y.package_id) ? "Include" : "Skip"), 9, Lr)
              ])
            ]))), 128))
          ])
        ])) : r("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", zr)) : r("", !0),
        t.nodes.length > 0 ? (s(), o(G, { key: 2 }, [
          e("div", Ur, [
            he[7] || (he[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", Nr, a(S.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          $.value ? (s(), x(to, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": p.value,
            "total-items": t.nodes.length,
            onPrev: he[0] || (he[0] = (Y) => A(p.value - 1)),
            onNext: he[1] || (he[1] = (Y) => A(p.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
          $.value ? (s(), o("div", Or, [
            b(cr, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((Pe = $.value.options) != null && Pe.length),
              options: $.value.options,
              choice: (re = t.nodeChoices) == null ? void 0 : re.get($.value.node_type),
              status: T.value,
              "status-label": M.value,
              "search-results": V.value,
              "is-searching": R.value,
              onMarkOptional: ie,
              onSkip: ae,
              onManualEntry: N,
              onSearch: X,
              onOptionSelected: Q,
              onClearChoice: ve,
              onSearchResultSelected: Te
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : r("", !0)
        ], 64)) : r("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", Br, [...he[8] || (he[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : r("", !0),
        (s(), x(Je, { to: "body" }, [
          u.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: he[4] || (he[4] = Ne((Y) => E.value = !0, ["self"])),
            onMouseup: Ne(D, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: he[3] || (he[3] = (Y) => E.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                he[9] || (he[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: B
                }, "✕")
              ]),
              e("div", Ar, [
                b(gt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": he[2] || (he[2] = (Y) => d.value = Y),
                  placeholder: "Search by node type, package name...",
                  onInput: te
                }, null, 8, ["modelValue"]),
                e("div", Fr, [
                  y.value.length > 0 ? (s(), o("div", Vr, [
                    (s(!0), o(G, null, ne(y.value, (Y) => (s(), o("div", {
                      key: Y.package_id,
                      class: "node-search-result-item",
                      onClick: (Re) => be(Y)
                    }, [
                      e("div", Gr, [
                        e("code", jr, a(Y.package_id), 1),
                        Y.match_confidence ? (s(), x(gs, {
                          key: 0,
                          confidence: Y.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : r("", !0)
                      ]),
                      Y.description ? (s(), o("div", Kr, a(Y.description), 1)) : r("", !0)
                    ], 8, Wr))), 128))
                  ])) : _.value ? (s(), o("div", Hr, "Searching...")) : d.value ? (s(), o("div", qr, 'No packages found matching "' + a(d.value) + '"', 1)) : (s(), o("div", Yr, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : r("", !0)
        ])),
        (s(), x(Je, { to: "body" }, [
          v.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Ne(I, ["self"])
          }, [
            e("div", Jr, [
              e("div", { class: "node-modal-header" }, [
                he[10] || (he[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: I
                }, "✕")
              ]),
              e("div", Xr, [
                b(gt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": he[5] || (he[5] = (Y) => m.value = Y),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Qr, [
                  b(ye, {
                    variant: "secondary",
                    onClick: I
                  }, {
                    default: l(() => [...he[11] || (he[11] = [
                      g("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(ye, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: De
                  }, {
                    default: l(() => [...he[12] || (he[12] = [
                      g(" Add Package ", -1)
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
}), ed = /* @__PURE__ */ oe(Zr, [["__scopeId", "data-v-281581bc"]]), td = { class: "node-info" }, sd = { class: "node-info-text" }, od = { class: "item-body" }, nd = {
  key: 0,
  class: "resolved-state"
}, ad = {
  key: 1,
  class: "multiple-options"
}, ld = { class: "options-list" }, id = ["onClick"], rd = ["name", "value", "checked", "onChange"], dd = { class: "option-content" }, cd = { class: "option-header" }, ud = { class: "option-filename" }, md = { class: "option-meta" }, vd = { class: "option-size" }, fd = { class: "option-category" }, pd = { class: "option-path" }, gd = { class: "action-buttons" }, hd = {
  key: 2,
  class: "unresolved"
}, yd = { class: "action-buttons" }, wd = /* @__PURE__ */ ee({
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
    const n = t, i = c, f = U(() => !!n.choice);
    U(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.action;
    }), U(() => {
      var d, m;
      return ((m = (d = n.choice) == null ? void 0 : d.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const p = U(() => {
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
    function u(d) {
      i("option-selected", d);
    }
    function v(d) {
      if (!d) return "Unknown";
      const m = d / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, m) => (s(), o("div", {
      class: fe(["model-resolution-item", { resolved: f.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", td, [
        e("span", sd, [
          m[7] || (m[7] = g("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: fe(["status-badge", p.value])
        }, a(t.statusLabel), 3)) : r("", !0)
      ]),
      e("div", od, [
        f.value ? (s(), o("div", nd, [
          b(ye, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (y) => i("clear-choice"))
          }, {
            default: l(() => [...m[8] || (m[8] = [
              g(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", ad, [
          m[12] || (m[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", ld, [
            (s(!0), o(G, null, ne(t.options, (y, _) => (s(), o("label", {
              key: y.model.hash,
              class: fe(["option-card", { selected: t.selectedOptionIndex === _ }]),
              onClick: (k) => u(_)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: _,
                checked: t.selectedOptionIndex === _,
                onChange: (k) => u(_)
              }, null, 40, rd),
              e("div", dd, [
                e("div", cd, [
                  e("span", ud, a(y.model.filename), 1),
                  b(gs, {
                    confidence: y.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", md, [
                  e("span", vd, a(v(y.model.size)), 1),
                  e("span", fd, a(y.model.category), 1)
                ]),
                e("div", pd, a(y.model.relative_path), 1)
              ])
            ], 10, id))), 128))
          ]),
          e("div", gd, [
            b(ye, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (y) => i("search"))
            }, {
              default: l(() => [...m[9] || (m[9] = [
                g(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(ye, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (y) => i("download-url"))
            }, {
              default: l(() => [...m[10] || (m[10] = [
                g(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(ye, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (y) => i("mark-optional"))
            }, {
              default: l(() => [...m[11] || (m[11] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", hd, [
          m[16] || (m[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", yd, [
            b(ye, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (y) => i("search"))
            }, {
              default: l(() => [...m[13] || (m[13] = [
                g(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(ye, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (y) => i("download-url"))
            }, {
              default: l(() => [...m[14] || (m[14] = [
                g(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(ye, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (y) => i("mark-optional"))
            }, {
              default: l(() => [...m[15] || (m[15] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), kd = /* @__PURE__ */ oe(wd, [["__scopeId", "data-v-8a82fefa"]]), bd = { class: "model-resolution-step" }, _d = { class: "step-header" }, $d = { class: "step-info" }, Cd = { class: "step-title" }, xd = { class: "step-description" }, Sd = { class: "stat-badge" }, Id = {
  key: 1,
  class: "step-body"
}, Ed = {
  key: 2,
  class: "empty-state"
}, Pd = { class: "model-search-modal" }, Rd = { class: "model-modal-body" }, Td = {
  key: 0,
  class: "model-search-results"
}, Md = ["onClick"], Dd = { class: "model-result-header" }, Ld = { class: "model-result-filename" }, zd = { class: "model-result-meta" }, Ud = { class: "model-result-category" }, Nd = { class: "model-result-size" }, Od = {
  key: 0,
  class: "model-result-path"
}, Bd = {
  key: 1,
  class: "model-no-results"
}, Ad = {
  key: 2,
  class: "model-searching"
}, Fd = { class: "model-download-url-modal" }, Vd = { class: "model-modal-body" }, Wd = { class: "model-input-group" }, Gd = { class: "model-input-group" }, jd = { class: "model-modal-actions" }, Kd = /* @__PURE__ */ ee({
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
    function i(B) {
      var I;
      return B && ((I = n[B]) == null ? void 0 : I[0]) || null;
    }
    const f = t, p = c, u = w(0), v = w(!1), d = w(!1), m = w(""), y = w(""), _ = w(""), k = w([]), h = w(!1), E = U(() => f.models[u.value]), D = U(() => f.models.some((B) => B.is_download_intent)), $ = U(() => f.models.filter(
      (B) => f.modelChoices.has(B.filename) || B.is_download_intent
    ).length), S = U(() => {
      var I;
      if (!E.value) return "";
      const B = i((I = E.value.reference) == null ? void 0 : I.node_type);
      return B ? `${B}/${E.value.filename}` : "";
    }), V = U(() => {
      var I;
      if (!E.value) return "not-found";
      const B = f.modelChoices.get(E.value.filename);
      if (B)
        switch (B.action) {
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
      return E.value.is_download_intent ? "download" : (I = E.value.options) != null && I.length ? "ambiguous" : "not-found";
    }), R = U(() => {
      var I, me;
      if (!E.value) return;
      const B = f.modelChoices.get(E.value.filename);
      if (B)
        switch (B.action) {
          case "select":
            return (I = B.selected_model) != null && I.filename ? `→ ${B.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return E.value.is_download_intent ? "Pending Download" : (me = E.value.options) != null && me.length ? `${E.value.options.length} matches` : "Not Found";
    });
    function C(B) {
      B >= 0 && B < f.models.length && (u.value = B);
    }
    function H() {
      E.value && p("mark-optional", E.value.filename);
    }
    function F() {
      E.value && p("skip", E.value.filename);
    }
    function j(B) {
      E.value && p("option-selected", E.value.filename, B);
    }
    function T() {
      E.value && p("clear-choice", E.value.filename);
    }
    function M() {
      E.value && (m.value = E.value.filename, v.value = !0);
    }
    function A() {
      E.value && (y.value = E.value.download_source || "", _.value = E.value.target_path || S.value, d.value = !0);
    }
    function ie() {
      v.value = !1, m.value = "", k.value = [];
    }
    function ae() {
      d.value = !1, y.value = "", _.value = "";
    }
    function Q() {
      h.value = !0, setTimeout(() => {
        h.value = !1;
      }, 300);
    }
    function ve(B) {
      E.value && ie();
    }
    function X() {
      !E.value || !y.value.trim() || (p("download-url", E.value.filename, y.value.trim(), _.value.trim() || void 0), ae());
    }
    function N(B) {
      if (!B) return "Unknown";
      const I = B / (1024 * 1024 * 1024);
      return I >= 1 ? `${I.toFixed(2)} GB` : `${(B / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (B, I) => {
      var me, te, we;
      return s(), o("div", bd, [
        e("div", _d, [
          e("div", $d, [
            e("h3", Cd, a(D.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", xd, a(D.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Sd, a($.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        E.value ? (s(), x(to, {
          key: 0,
          "item-name": E.value.filename,
          "current-index": u.value,
          "total-items": t.models.length,
          onPrev: I[0] || (I[0] = (be) => C(u.value - 1)),
          onNext: I[1] || (I[1] = (be) => C(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
        E.value ? (s(), o("div", Id, [
          b(kd, {
            filename: E.value.filename,
            "node-type": ((me = E.value.reference) == null ? void 0 : me.node_type) || "Unknown",
            "has-multiple-options": !!((te = E.value.options) != null && te.length),
            options: E.value.options,
            choice: (we = t.modelChoices) == null ? void 0 : we.get(E.value.filename),
            status: V.value,
            "status-label": R.value,
            onMarkOptional: H,
            onSkip: F,
            onDownloadUrl: A,
            onSearch: M,
            onOptionSelected: j,
            onClearChoice: T
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", Ed, [...I[5] || (I[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), x(Je, { to: "body" }, [
          v.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Ne(ie, ["self"])
          }, [
            e("div", Pd, [
              e("div", { class: "model-modal-header" }, [
                I[6] || (I[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: ie
                }, "✕")
              ]),
              e("div", Rd, [
                b(gt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": I[2] || (I[2] = (be) => m.value = be),
                  placeholder: "Search by filename, category...",
                  onInput: Q
                }, null, 8, ["modelValue"]),
                k.value.length > 0 ? (s(), o("div", Td, [
                  (s(!0), o(G, null, ne(k.value, (be) => (s(), o("div", {
                    key: be.hash,
                    class: "model-search-result-item",
                    onClick: (Te) => ve()
                  }, [
                    e("div", Dd, [
                      e("code", Ld, a(be.filename), 1)
                    ]),
                    e("div", zd, [
                      e("span", Ud, a(be.category), 1),
                      e("span", Nd, a(N(be.size)), 1)
                    ]),
                    be.relative_path ? (s(), o("div", Od, a(be.relative_path), 1)) : r("", !0)
                  ], 8, Md))), 128))
                ])) : m.value && !h.value ? (s(), o("div", Bd, ' No models found matching "' + a(m.value) + '" ', 1)) : r("", !0),
                h.value ? (s(), o("div", Ad, "Searching...")) : r("", !0)
              ])
            ])
          ])) : r("", !0)
        ])),
        (s(), x(Je, { to: "body" }, [
          d.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Ne(ae, ["self"])
          }, [
            e("div", Fd, [
              e("div", { class: "model-modal-header" }, [
                I[7] || (I[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: ae
                }, "✕")
              ]),
              e("div", Vd, [
                e("div", Wd, [
                  I[8] || (I[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  b(gt, {
                    modelValue: y.value,
                    "onUpdate:modelValue": I[3] || (I[3] = (be) => y.value = be),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Gd, [
                  I[9] || (I[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  b(gt, {
                    modelValue: _.value,
                    "onUpdate:modelValue": I[4] || (I[4] = (be) => _.value = be),
                    placeholder: S.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", jd, [
                  b(ye, {
                    variant: "secondary",
                    onClick: ae
                  }, {
                    default: l(() => [...I[10] || (I[10] = [
                      g("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(ye, {
                    variant: "primary",
                    disabled: !y.value.trim() || !_.value.trim(),
                    onClick: X
                  }, {
                    default: l(() => [...I[11] || (I[11] = [
                      g(" Queue Download ", -1)
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
}), Hd = /* @__PURE__ */ oe(Kd, [["__scopeId", "data-v-c6acbada"]]), qd = { class: "applying-step" }, Yd = {
  key: 0,
  class: "phase-content"
}, Jd = {
  key: 1,
  class: "phase-content"
}, Xd = { class: "phase-description" }, Qd = { class: "overall-progress" }, Zd = { class: "progress-bar" }, ec = { class: "progress-label" }, tc = { class: "install-list" }, sc = { class: "install-icon" }, oc = { key: 0 }, nc = {
  key: 1,
  class: "spinner"
}, ac = { key: 2 }, lc = { key: 3 }, ic = {
  key: 0,
  class: "install-error"
}, rc = {
  key: 2,
  class: "phase-content"
}, dc = { class: "phase-header" }, cc = { class: "phase-title" }, uc = { class: "completion-summary" }, mc = {
  key: 0,
  class: "summary-item success"
}, vc = { class: "summary-text" }, fc = {
  key: 1,
  class: "summary-item error"
}, pc = { class: "summary-text" }, gc = {
  key: 2,
  class: "failed-list"
}, hc = { class: "failed-node-id" }, yc = { class: "failed-error" }, wc = {
  key: 4,
  class: "summary-item success"
}, kc = {
  key: 5,
  class: "restart-prompt"
}, bc = {
  key: 3,
  class: "phase-content error"
}, _c = { class: "error-message" }, $c = /* @__PURE__ */ ee({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const c = t, n = U(() => {
      var m, y;
      const v = ((m = c.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || c.progress.nodesToInstall.length;
      if (!v) return 0;
      const d = ((y = c.progress.nodeInstallProgress) == null ? void 0 : y.completedNodes.length) ?? 0;
      return Math.round(d / v * 100);
    }), i = U(() => {
      var v;
      return ((v = c.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.filter((d) => !d.success)) || [];
    }), f = U(() => i.value.length > 0);
    function p(v, d) {
      var y, _;
      const m = (y = c.progress.nodeInstallProgress) == null ? void 0 : y.completedNodes.find((k) => k.node_id === v);
      return m ? m.success ? "complete" : "failed" : ((_ = c.progress.nodeInstallProgress) == null ? void 0 : _.currentIndex) === d ? "installing" : "pending";
    }
    function u(v) {
      var d, m;
      return (m = (d = c.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((y) => y.node_id === v)) == null ? void 0 : m.error;
    }
    return (v, d) => {
      var m, y, _, k;
      return s(), o("div", qd, [
        t.progress.phase === "resolving" ? (s(), o("div", Yd, [...d[2] || (d[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", Jd, [
          d[3] || (d[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", Xd, " Installing " + a((((m = t.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + a(((y = t.progress.nodeInstallProgress) == null ? void 0 : y.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Qd, [
            e("div", Zd, [
              e("div", {
                class: "progress-fill",
                style: It({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", ec, a(((_ = t.progress.nodeInstallProgress) == null ? void 0 : _.completedNodes.length) ?? 0) + " / " + a(((k = t.progress.nodeInstallProgress) == null ? void 0 : k.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", tc, [
            (s(!0), o(G, null, ne(t.progress.nodesToInstall, (h, E) => (s(), o("div", {
              key: h,
              class: fe(["install-item", p(h, E)])
            }, [
              e("span", sc, [
                p(h, E) === "pending" ? (s(), o("span", oc, "○")) : p(h, E) === "installing" ? (s(), o("span", nc, "◌")) : p(h, E) === "complete" ? (s(), o("span", ac, "✓")) : p(h, E) === "failed" ? (s(), o("span", lc, "✗")) : r("", !0)
              ]),
              e("code", null, a(h), 1),
              u(h) ? (s(), o("span", ic, a(u(h)), 1)) : r("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", rc, [
          e("div", dc, [
            e("span", {
              class: fe(["phase-icon", f.value ? "warning" : "success"])
            }, a(f.value ? "⚠" : "✓"), 3),
            e("h3", cc, a(f.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", uc, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", mc, [
              d[4] || (d[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", vc, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : r("", !0),
            i.value.length > 0 ? (s(), o("div", fc, [
              d[5] || (d[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", pc, a(i.value.length) + " package" + a(i.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : r("", !0),
            i.value.length > 0 ? (s(), o("div", gc, [
              (s(!0), o(G, null, ne(i.value, (h) => (s(), o("div", {
                key: h.node_id,
                class: "failed-item"
              }, [
                e("code", hc, a(h.node_id), 1),
                e("span", yc, a(h.error), 1)
              ]))), 128))
            ])) : r("", !0),
            i.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (h) => v.$emit("retry-failed"))
            }, " Retry Failed (" + a(i.value.length) + ") ", 1)) : r("", !0),
            f.value ? r("", !0) : (s(), o("div", wc, [...d[6] || (d[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", kc, [
              d[7] || (d[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: d[1] || (d[1] = (h) => v.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : r("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", bc, [
          d[9] || (d[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", _c, a(t.progress.error), 1)
        ])) : r("", !0)
      ]);
    };
  }
}), Cc = /* @__PURE__ */ oe($c, [["__scopeId", "data-v-5efaae58"]]), xc = {
  key: 0,
  class: "loading-state"
}, Sc = {
  key: 1,
  class: "wizard-content"
}, Ic = {
  key: 0,
  class: "step-content"
}, Ec = { class: "analysis-summary" }, Pc = { class: "analysis-header" }, Rc = { class: "summary-description" }, Tc = { class: "stats-grid" }, Mc = { class: "stat-card" }, Dc = { class: "stat-items" }, Lc = {
  key: 0,
  class: "stat-item success"
}, zc = { class: "stat-count" }, Uc = {
  key: 1,
  class: "stat-item info"
}, Nc = { class: "stat-count" }, Oc = {
  key: 2,
  class: "stat-item warning"
}, Bc = { class: "stat-count" }, Ac = {
  key: 3,
  class: "stat-item error"
}, Fc = { class: "stat-count" }, Vc = { class: "stat-card" }, Wc = { class: "stat-items" }, Gc = { class: "stat-item success" }, jc = { class: "stat-count" }, Kc = {
  key: 0,
  class: "stat-item info"
}, Hc = { class: "stat-count" }, qc = {
  key: 1,
  class: "stat-item warning"
}, Yc = { class: "stat-count" }, Jc = {
  key: 2,
  class: "stat-item warning"
}, Xc = { class: "stat-count" }, Qc = {
  key: 3,
  class: "stat-item error"
}, Zc = { class: "stat-count" }, eu = {
  key: 0,
  class: "status-message warning"
}, tu = { class: "status-text" }, su = {
  key: 1,
  class: "status-message info"
}, ou = { class: "status-text" }, nu = {
  key: 2,
  class: "status-message info"
}, au = { class: "status-text" }, lu = {
  key: 3,
  class: "status-message warning"
}, iu = { class: "status-text" }, ru = {
  key: 4,
  class: "status-message success"
}, du = {
  key: 5,
  class: "category-mismatch-section"
}, cu = { class: "mismatch-list" }, uu = { class: "mismatch-path" }, mu = { class: "mismatch-target" }, vu = {
  key: 3,
  class: "step-content"
}, fu = { class: "review-summary" }, pu = { class: "review-stats" }, gu = { class: "review-stat" }, hu = { class: "stat-value" }, yu = { class: "review-stat" }, wu = { class: "stat-value" }, ku = { class: "review-stat" }, bu = { class: "stat-value" }, _u = { class: "review-stat" }, $u = { class: "stat-value" }, Cu = {
  key: 0,
  class: "review-section"
}, xu = { class: "section-title" }, Su = { class: "review-items" }, Iu = { class: "item-name" }, Eu = { class: "item-choice" }, Pu = {
  key: 0,
  class: "choice-badge install"
}, Ru = {
  key: 1,
  class: "choice-badge skip"
}, Tu = {
  key: 1,
  class: "review-section"
}, Mu = { class: "section-title" }, Du = { class: "review-items" }, Lu = { class: "item-name" }, zu = { class: "item-choice" }, Uu = {
  key: 0,
  class: "choice-badge install"
}, Nu = {
  key: 1,
  class: "choice-badge optional"
}, Ou = {
  key: 2,
  class: "choice-badge skip"
}, Bu = {
  key: 1,
  class: "choice-badge pending"
}, Au = {
  key: 2,
  class: "review-section"
}, Fu = { class: "section-title" }, Vu = { class: "review-items" }, Wu = { class: "item-name" }, Gu = { class: "item-choice" }, ju = {
  key: 0,
  class: "choice-badge install"
}, Ku = {
  key: 1,
  class: "choice-badge download"
}, Hu = {
  key: 2,
  class: "choice-badge optional"
}, qu = {
  key: 3,
  class: "choice-badge skip"
}, Yu = {
  key: 4,
  class: "choice-badge skip"
}, Ju = {
  key: 1,
  class: "choice-badge download"
}, Xu = {
  key: 2,
  class: "choice-badge pending"
}, Qu = {
  key: 3,
  class: "no-choices"
}, Zu = /* @__PURE__ */ ee({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, i = c, { analyzeWorkflow: f, applyResolution: p, installNodes: u, queueModelDownloads: v, progress: d, resetProgress: m } = eo(), { loadPendingDownloads: y } = rs(), { openFileLocation: _ } = We(), k = w(null), h = w(!1), E = w(!1), D = w(null), $ = w("analysis"), S = w([]), V = w(/* @__PURE__ */ new Map()), R = w(/* @__PURE__ */ new Map()), C = w(/* @__PURE__ */ new Set()), H = U(() => {
      const J = [
        { id: "analysis", label: "Analysis" }
      ];
      return (j.value || A.value) && J.push({ id: "nodes", label: "Nodes" }), (T.value || M.value) && J.push({ id: "models", label: "Models" }), J.push({ id: "review", label: "Review" }), $.value === "applying" && J.push({ id: "applying", label: "Applying" }), J;
    }), F = U(() => k.value ? k.value.stats.needs_user_input : !1), j = U(() => k.value ? k.value.nodes.unresolved.length > 0 || k.value.nodes.ambiguous.length > 0 : !1), T = U(() => k.value ? k.value.models.unresolved.length > 0 || k.value.models.ambiguous.length > 0 : !1), M = U(() => k.value ? k.value.stats.download_intents > 0 : !1), A = U(() => k.value ? k.value.stats.nodes_needing_installation > 0 : !1), ie = U(() => k.value ? k.value.nodes.resolved.length : 0), ae = U(() => k.value ? k.value.models.resolved.filter((J) => J.has_category_mismatch) : []), Q = U(() => ae.value.length > 0), ve = U(() => {
      if (!k.value) return [];
      const J = k.value.nodes.resolved.filter((W) => !W.is_installed), P = /* @__PURE__ */ new Set();
      return J.filter((W) => P.has(W.package.package_id) ? !1 : (P.add(W.package.package_id), !0));
    }), X = U(() => {
      if (!k.value) return [];
      const J = k.value.nodes.resolved.filter((W) => !W.is_installed), P = /* @__PURE__ */ new Map();
      for (const W of J) {
        const se = P.get(W.package.package_id);
        se ? se.node_types_count++ : P.set(W.package.package_id, {
          package_id: W.package.package_id,
          title: W.package.title,
          node_types_count: 1
        });
      }
      return Array.from(P.values());
    }), N = U(() => ve.value.filter((J) => !C.value.has(J.package.package_id))), B = U(() => k.value ? k.value.models.resolved.filter((J) => J.match_type === "download_intent").map((J) => ({
      filename: J.reference.widget_value,
      reference: J.reference,
      is_download_intent: !0,
      resolved_model: J.model,
      download_source: J.download_source,
      target_path: J.target_path
    })) : []), I = U(() => {
      if (!k.value) return [];
      const J = k.value.nodes.unresolved.map((W) => ({
        node_type: W.reference.node_type,
        reason: W.reason,
        is_unresolved: !0,
        options: void 0
      })), P = k.value.nodes.ambiguous.map((W) => ({
        node_type: W.reference.node_type,
        has_multiple_options: !0,
        options: W.options.map((se) => ({
          package_id: se.package.package_id,
          title: se.package.title,
          match_confidence: se.match_confidence,
          match_type: se.match_type,
          is_installed: se.is_installed
        }))
      }));
      return [...J, ...P];
    }), me = U(() => {
      if (!k.value) return [];
      const J = k.value.models.unresolved.map((W) => ({
        filename: W.reference.widget_value,
        reference: W.reference,
        reason: W.reason,
        is_unresolved: !0,
        options: void 0
      })), P = k.value.models.ambiguous.map((W) => ({
        filename: W.reference.widget_value,
        reference: W.reference,
        has_multiple_options: !0,
        options: W.options.map((se) => ({
          model: se.model,
          match_confidence: se.match_confidence,
          match_type: se.match_type,
          has_download_source: se.has_download_source
        }))
      }));
      return [...J, ...P];
    }), te = U(() => {
      const J = me.value, P = B.value.map((W) => ({
        filename: W.filename,
        reference: W.reference,
        is_download_intent: !0,
        resolved_model: W.resolved_model,
        download_source: W.download_source,
        target_path: W.target_path,
        options: void 0
      }));
      return [...J, ...P];
    }), we = U(() => {
      let J = N.value.length;
      for (const P of V.value.values())
        P.action === "install" && J++;
      for (const P of R.value.values())
        P.action === "select" && J++;
      return J;
    }), be = U(() => {
      let J = 0;
      for (const P of R.value.values())
        P.action === "download" && J++;
      return J;
    }), Te = U(() => {
      let J = 0;
      for (const P of V.value.values())
        P.action === "optional" && J++;
      for (const P of R.value.values())
        P.action === "optional" && J++;
      return J;
    }), De = U(() => {
      let J = C.value.size;
      for (const P of V.value.values())
        P.action === "skip" && J++;
      for (const P of R.value.values())
        P.action === "skip" && J++;
      for (const P of I.value)
        V.value.has(P.node_type) || J++;
      for (const P of me.value)
        R.value.has(P.filename) || J++;
      return J;
    }), ce = U(() => {
      const J = {};
      if (J.analysis = { resolved: 1, total: 1 }, j.value) {
        const P = I.value.length, W = I.value.filter(
          (se) => V.value.has(se.node_type)
        ).length;
        J.nodes = { resolved: W, total: P };
      }
      if (T.value || M.value) {
        const P = te.value.length, W = te.value.filter(
          (se) => R.value.has(se.filename) || se.is_download_intent
        ).length;
        J.models = { resolved: W, total: P };
      }
      if (J.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const P = d.totalFiles || 1, W = d.completedFiles.length;
        J.applying = { resolved: W, total: P };
      }
      return J;
    });
    function he(J) {
      $.value = J;
    }
    function Pe() {
      const J = H.value.findIndex((P) => P.id === $.value);
      J > 0 && ($.value = H.value[J - 1].id);
    }
    function re() {
      const J = H.value.findIndex((P) => P.id === $.value);
      J < H.value.length - 1 && ($.value = H.value[J + 1].id);
    }
    async function Y() {
      h.value = !0, D.value = null;
      try {
        k.value = await f(n.workflowName);
      } catch (J) {
        D.value = J instanceof Error ? J.message : "Failed to analyze workflow";
      } finally {
        h.value = !1;
      }
    }
    function Re() {
      S.value.includes("analysis") || S.value.push("analysis"), j.value || A.value ? $.value = "nodes" : T.value || M.value ? $.value = "models" : $.value = "review";
    }
    function ge(J) {
      V.value.set(J, { action: "optional" });
    }
    function Ke(J) {
      V.value.set(J, { action: "skip" });
    }
    function Xe(J, P) {
      var se;
      const W = I.value.find((_e) => _e.node_type === J);
      (se = W == null ? void 0 : W.options) != null && se[P] && V.value.set(J, {
        action: "install",
        package_id: W.options[P].package_id
      });
    }
    function Qe(J, P) {
      V.value.set(J, {
        action: "install",
        package_id: P
      });
    }
    function Ie(J) {
      V.value.delete(J);
    }
    function He(J) {
      C.value.has(J) ? C.value.delete(J) : C.value.add(J);
    }
    function Ge(J) {
      R.value.set(J, { action: "optional" });
    }
    function qe(J) {
      R.value.set(J, { action: "skip" });
    }
    function rt(J, P) {
      var se;
      const W = me.value.find((_e) => _e.filename === J);
      (se = W == null ? void 0 : W.options) != null && se[P] && R.value.set(J, {
        action: "select",
        selected_model: W.options[P].model
      });
    }
    function ke(J, P, W) {
      R.value.set(J, {
        action: "download",
        url: P,
        target_path: W
      });
    }
    function Ve(J) {
      R.value.delete(J);
    }
    async function ot(J) {
      try {
        await _(J);
      } catch (P) {
        D.value = P instanceof Error ? P.message : "Failed to open file location";
      }
    }
    async function je() {
      var J;
      E.value = !0, D.value = null, m(), d.phase = "resolving", $.value = "applying";
      try {
        const P = await p(n.workflowName, V.value, R.value, C.value);
        P.models_to_download && P.models_to_download.length > 0 && v(n.workflowName, P.models_to_download);
        const W = [
          ...P.nodes_to_install || [],
          ...N.value.map((_e) => _e.package.package_id)
        ];
        d.nodesToInstall = [...new Set(W)], d.nodesToInstall.length > 0 && await u(n.workflowName), d.phase = "complete", await y();
        const se = d.installError || ((J = d.nodeInstallProgress) == null ? void 0 : J.completedNodes.some((_e) => !_e.success));
        !d.needsRestart && !se && setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1500);
      } catch (P) {
        D.value = P instanceof Error ? P.message : "Failed to apply resolution", d.error = D.value, d.phase = "error";
      } finally {
        E.value = !1;
      }
    }
    function de() {
      i("refresh"), i("restart"), i("close");
    }
    async function q() {
      var P;
      const J = ((P = d.nodeInstallProgress) == null ? void 0 : P.completedNodes.filter((W) => !W.success).map((W) => W.node_id)) || [];
      if (J.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: J.length
        }, d.nodesToInstall = J, d.nodesInstalled = [], d.installError = void 0;
        try {
          await u(n.workflowName), d.phase = "complete";
        } catch (W) {
          d.error = W instanceof Error ? W.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return Be(Y), (J, P) => (s(), x(st, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: h.value,
      error: D.value || void 0,
      "fixed-height": !0,
      onClose: P[1] || (P[1] = (W) => i("close"))
    }, {
      body: l(() => [
        h.value && !k.value ? (s(), o("div", xc, [...P[2] || (P[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : k.value ? (s(), o("div", Sc, [
          b(Di, {
            steps: H.value,
            "current-step": $.value,
            "completed-steps": S.value,
            "step-stats": ce.value,
            onStepChange: he
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (s(), o("div", Ic, [
            e("div", Ec, [
              e("div", Pc, [
                P[3] || (P[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", Rc, " Found " + a(k.value.stats.total_nodes) + " nodes and " + a(k.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Tc, [
                e("div", Mc, [
                  P[12] || (P[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Dc, [
                    ie.value > 0 ? (s(), o("div", Lc, [
                      P[4] || (P[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", zc, a(ie.value), 1),
                      P[5] || (P[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : r("", !0),
                    k.value.stats.packages_needing_installation > 0 ? (s(), o("div", Uc, [
                      P[6] || (P[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Nc, a(k.value.stats.packages_needing_installation), 1),
                      P[7] || (P[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : r("", !0),
                    k.value.nodes.ambiguous.length > 0 ? (s(), o("div", Oc, [
                      P[8] || (P[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Bc, a(k.value.nodes.ambiguous.length), 1),
                      P[9] || (P[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : r("", !0),
                    k.value.nodes.unresolved.length > 0 ? (s(), o("div", Ac, [
                      P[10] || (P[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Fc, a(k.value.nodes.unresolved.length), 1),
                      P[11] || (P[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : r("", !0)
                  ])
                ]),
                e("div", Vc, [
                  P[23] || (P[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Wc, [
                    e("div", Gc, [
                      P[13] || (P[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", jc, a(k.value.models.resolved.length - k.value.stats.download_intents - k.value.stats.models_with_category_mismatch), 1),
                      P[14] || (P[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    k.value.stats.download_intents > 0 ? (s(), o("div", Kc, [
                      P[15] || (P[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Hc, a(k.value.stats.download_intents), 1),
                      P[16] || (P[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : r("", !0),
                    Q.value ? (s(), o("div", qc, [
                      P[17] || (P[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", Yc, a(ae.value.length), 1),
                      P[18] || (P[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : r("", !0),
                    k.value.models.ambiguous.length > 0 ? (s(), o("div", Jc, [
                      P[19] || (P[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Xc, a(k.value.models.ambiguous.length), 1),
                      P[20] || (P[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : r("", !0),
                    k.value.models.unresolved.length > 0 ? (s(), o("div", Qc, [
                      P[21] || (P[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Zc, a(k.value.models.unresolved.length), 1),
                      P[22] || (P[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : r("", !0)
                  ])
                ])
              ]),
              F.value ? (s(), o("div", eu, [
                P[24] || (P[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", tu, a(I.value.length + me.value.length) + " items need your input", 1)
              ])) : A.value ? (s(), o("div", su, [
                P[25] || (P[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", ou, a(k.value.stats.packages_needing_installation) + " package" + a(k.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(k.value.stats.nodes_needing_installation) + " node type" + a(k.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(M.value ? `, ${k.value.stats.download_intents} model${k.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : M.value ? (s(), o("div", nu, [
                P[26] || (P[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", au, a(k.value.stats.download_intents) + " model" + a(k.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : Q.value ? (s(), o("div", lu, [
                P[27] || (P[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", iu, a(ae.value.length) + " model" + a(ae.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", ru, [...P[28] || (P[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              Q.value ? (s(), o("div", du, [
                P[31] || (P[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", cu, [
                  (s(!0), o(G, null, ne(ae.value, (W) => {
                    var se, _e;
                    return s(), o("div", {
                      key: W.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", uu, a(W.actual_category) + "/" + a((se = W.model) == null ? void 0 : se.filename), 1),
                      P[30] || (P[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", mu, a((_e = W.expected_categories) == null ? void 0 : _e[0]) + "/", 1),
                      W.file_path ? (s(), x(ye, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Oe) => ot(W.file_path)
                      }, {
                        default: l(() => [...P[29] || (P[29] = [
                          g(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : r("", !0)
                    ]);
                  }), 128))
                ])
              ])) : r("", !0)
            ])
          ])) : r("", !0),
          $.value === "nodes" ? (s(), x(ed, {
            key: 1,
            nodes: I.value,
            "node-choices": V.value,
            "auto-resolved-packages": X.value,
            "skipped-packages": C.value,
            onMarkOptional: ge,
            onSkip: Ke,
            onOptionSelected: Xe,
            onManualEntry: Qe,
            onClearChoice: Ie,
            onPackageSkip: He
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : r("", !0),
          $.value === "models" ? (s(), x(Hd, {
            key: 2,
            models: te.value,
            "model-choices": R.value,
            onMarkOptional: Ge,
            onSkip: qe,
            onOptionSelected: rt,
            onDownloadUrl: ke,
            onClearChoice: Ve
          }, null, 8, ["models", "model-choices"])) : r("", !0),
          $.value === "review" ? (s(), o("div", vu, [
            e("div", fu, [
              P[36] || (P[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", pu, [
                e("div", gu, [
                  e("span", hu, a(we.value), 1),
                  P[32] || (P[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", yu, [
                  e("span", wu, a(be.value), 1),
                  P[33] || (P[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", ku, [
                  e("span", bu, a(Te.value), 1),
                  P[34] || (P[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", _u, [
                  e("span", $u, a(De.value), 1),
                  P[35] || (P[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              X.value.length > 0 ? (s(), o("div", Cu, [
                e("h4", xu, "Node Packages (" + a(X.value.length) + ")", 1),
                e("div", Su, [
                  (s(!0), o(G, null, ne(X.value, (W) => (s(), o("div", {
                    key: W.package_id,
                    class: "review-item"
                  }, [
                    e("code", Iu, a(W.package_id), 1),
                    e("div", Eu, [
                      C.value.has(W.package_id) ? (s(), o("span", Ru, "Skipped")) : (s(), o("span", Pu, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : r("", !0),
              I.value.length > 0 ? (s(), o("div", Tu, [
                e("h4", Mu, "Node Choices (" + a(I.value.length) + ")", 1),
                e("div", Du, [
                  (s(!0), o(G, null, ne(I.value, (W) => {
                    var se, _e, Oe, ut;
                    return s(), o("div", {
                      key: W.node_type,
                      class: "review-item"
                    }, [
                      e("code", Lu, a(W.node_type), 1),
                      e("div", zu, [
                        V.value.has(W.node_type) ? (s(), o(G, { key: 0 }, [
                          ((se = V.value.get(W.node_type)) == null ? void 0 : se.action) === "install" ? (s(), o("span", Uu, a((_e = V.value.get(W.node_type)) == null ? void 0 : _e.package_id), 1)) : ((Oe = V.value.get(W.node_type)) == null ? void 0 : Oe.action) === "optional" ? (s(), o("span", Nu, " Optional ")) : ((ut = V.value.get(W.node_type)) == null ? void 0 : ut.action) === "skip" ? (s(), o("span", Ou, " Skip ")) : r("", !0)
                        ], 64)) : (s(), o("span", Bu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : r("", !0),
              te.value.length > 0 ? (s(), o("div", Au, [
                e("h4", Fu, "Models (" + a(te.value.length) + ")", 1),
                e("div", Vu, [
                  (s(!0), o(G, null, ne(te.value, (W) => {
                    var se, _e, Oe, ut, wt, nt, Rt;
                    return s(), o("div", {
                      key: W.filename,
                      class: "review-item"
                    }, [
                      e("code", Wu, a(W.filename), 1),
                      e("div", Gu, [
                        R.value.has(W.filename) ? (s(), o(G, { key: 0 }, [
                          ((se = R.value.get(W.filename)) == null ? void 0 : se.action) === "select" ? (s(), o("span", ju, a((Oe = (_e = R.value.get(W.filename)) == null ? void 0 : _e.selected_model) == null ? void 0 : Oe.filename), 1)) : ((ut = R.value.get(W.filename)) == null ? void 0 : ut.action) === "download" ? (s(), o("span", Ku, " Download ")) : ((wt = R.value.get(W.filename)) == null ? void 0 : wt.action) === "optional" ? (s(), o("span", Hu, " Optional ")) : ((nt = R.value.get(W.filename)) == null ? void 0 : nt.action) === "skip" ? (s(), o("span", qu, " Skip ")) : ((Rt = R.value.get(W.filename)) == null ? void 0 : Rt.action) === "cancel_download" ? (s(), o("span", Yu, " Cancel Download ")) : r("", !0)
                        ], 64)) : W.is_download_intent ? (s(), o("span", Ju, " Pending Download ")) : (s(), o("span", Xu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : r("", !0),
              ve.value.length === 0 && I.value.length === 0 && te.value.length === 0 ? (s(), o("div", Qu, " No dependencies need resolution. ")) : r("", !0)
            ])
          ])) : r("", !0),
          $.value === "applying" ? (s(), x(Cc, {
            key: 4,
            progress: $e(d),
            onRestart: de,
            onRetryFailed: q
          }, null, 8, ["progress"])) : r("", !0)
        ])) : r("", !0)
      ]),
      footer: l(() => [
        $.value !== "analysis" && $.value !== "applying" ? (s(), x(ye, {
          key: 0,
          variant: "secondary",
          disabled: E.value,
          onClick: Pe
        }, {
          default: l(() => [...P[37] || (P[37] = [
            g(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : r("", !0),
        P[41] || (P[41] = e("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || $e(d).phase === "complete" || $e(d).phase === "error" ? (s(), x(ye, {
          key: 1,
          variant: "secondary",
          onClick: P[0] || (P[0] = (W) => i("close"))
        }, {
          default: l(() => [
            g(a($e(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : r("", !0),
        $.value === "analysis" ? (s(), x(ye, {
          key: 2,
          variant: "primary",
          disabled: h.value,
          onClick: Re
        }, {
          default: l(() => [...P[38] || (P[38] = [
            g(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : r("", !0),
        $.value === "nodes" ? (s(), x(ye, {
          key: 3,
          variant: "primary",
          onClick: re
        }, {
          default: l(() => [
            g(a(T.value || M.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : r("", !0),
        $.value === "models" ? (s(), x(ye, {
          key: 4,
          variant: "primary",
          onClick: re
        }, {
          default: l(() => [...P[39] || (P[39] = [
            g(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : r("", !0),
        $.value === "review" ? (s(), x(ye, {
          key: 5,
          variant: "primary",
          disabled: E.value,
          loading: E.value,
          onClick: je
        }, {
          default: l(() => [...P[40] || (P[40] = [
            g(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : r("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), em = /* @__PURE__ */ oe(Zu, [["__scopeId", "data-v-6276cf1d"]]), tm = { class: "search-input-wrapper" }, sm = ["value", "placeholder"], om = /* @__PURE__ */ ee({
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
    const n = t, i = c, f = w(null);
    let p;
    function u(d) {
      const m = d.target.value;
      n.debounce > 0 ? (clearTimeout(p), p = window.setTimeout(() => {
        i("update:modelValue", m);
      }, n.debounce)) : i("update:modelValue", m);
    }
    function v() {
      var d;
      i("update:modelValue", ""), i("clear"), (d = f.value) == null || d.focus();
    }
    return Be(() => {
      n.autoFocus && f.value && f.value.focus();
    }), (d, m) => (s(), o("div", tm, [
      e("input", {
        ref_key: "inputRef",
        ref: f,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: $t(v, ["escape"])
      }, null, 40, sm),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: v,
        title: "Clear search"
      }, " ✕ ")) : r("", !0)
    ]));
  }
}), nm = /* @__PURE__ */ oe(om, [["__scopeId", "data-v-266f857a"]]), am = { class: "search-bar" }, lm = /* @__PURE__ */ ee({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, n) => (s(), o("div", am, [
      b(nm, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => c.$emit("update:modelValue", i)),
        onClear: n[1] || (n[1] = (i) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), qt = /* @__PURE__ */ oe(lm, [["__scopeId", "data-v-3d51bbfd"]]), im = { class: "section-group" }, rm = {
  key: 0,
  class: "section-content"
}, dm = /* @__PURE__ */ ee({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = w(n.initiallyExpanded);
    function p() {
      n.collapsible && (f.value = !f.value, i("toggle", f.value));
    }
    return (u, v) => (s(), o("section", im, [
      b(lt, {
        count: t.count,
        clickable: t.collapsible,
        expanded: f.value,
        onClick: p
      }, {
        default: l(() => [
          g(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || f.value ? (s(), o("div", rm, [
        Ee(u.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), Ue = /* @__PURE__ */ oe(dm, [["__scopeId", "data-v-c48e33ed"]]), cm = { class: "item-header" }, um = {
  key: 0,
  class: "item-icon"
}, mm = { class: "item-info" }, vm = {
  key: 0,
  class: "item-title"
}, fm = {
  key: 1,
  class: "item-subtitle"
}, pm = {
  key: 0,
  class: "item-details"
}, gm = {
  key: 1,
  class: "item-actions"
}, hm = /* @__PURE__ */ ee({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, i = U(() => n.status ? `status-${n.status}` : "");
    return (f, p) => (s(), o("div", {
      class: fe(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: p[0] || (p[0] = (u) => t.clickable && f.$emit("click"))
    }, [
      e("div", cm, [
        f.$slots.icon ? (s(), o("span", um, [
          Ee(f.$slots, "icon", {}, void 0, !0)
        ])) : r("", !0),
        e("div", mm, [
          f.$slots.title ? (s(), o("div", vm, [
            Ee(f.$slots, "title", {}, void 0, !0)
          ])) : r("", !0),
          f.$slots.subtitle ? (s(), o("div", fm, [
            Ee(f.$slots, "subtitle", {}, void 0, !0)
          ])) : r("", !0)
        ])
      ]),
      f.$slots.details ? (s(), o("div", pm, [
        Ee(f.$slots, "details", {}, void 0, !0)
      ])) : r("", !0),
      f.$slots.actions ? (s(), o("div", gm, [
        Ee(f.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), Ze = /* @__PURE__ */ oe(hm, [["__scopeId", "data-v-cc435e0e"]]), ym = { class: "loading-state" }, wm = { class: "loading-message" }, km = /* @__PURE__ */ ee({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, n) => (s(), o("div", ym, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", wm, a(t.message), 1)
    ]));
  }
}), Et = /* @__PURE__ */ oe(km, [["__scopeId", "data-v-ad8436c9"]]), bm = { class: "error-state" }, _m = { class: "error-message" }, $m = /* @__PURE__ */ ee({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, n) => (s(), o("div", bm, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", _m, a(t.message), 1),
      t.retry ? (s(), x(Z, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => c.$emit("retry"))
      }, {
        default: l(() => [...n[1] || (n[1] = [
          g(" Retry ", -1)
        ])]),
        _: 1
      })) : r("", !0)
    ]));
  }
}), Pt = /* @__PURE__ */ oe($m, [["__scopeId", "data-v-5397be48"]]), Cm = /* @__PURE__ */ ee({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getWorkflows: f } = We();
    Qs();
    const p = w([]), u = w(!1), v = w(null), d = w(""), m = w(!0), y = w(!1), _ = w(!1), k = w(!1), h = w(null), E = U(
      () => p.value.filter((N) => N.status === "broken")
    ), D = U(
      () => p.value.filter((N) => N.status === "new")
    ), $ = U(
      () => p.value.filter((N) => N.status === "modified")
    ), S = U(
      () => p.value.filter((N) => N.status === "synced")
    ), V = U(() => {
      if (!d.value.trim()) return p.value;
      const N = d.value.toLowerCase();
      return p.value.filter((B) => B.name.toLowerCase().includes(N));
    }), R = U(
      () => E.value.filter(
        (N) => !d.value.trim() || N.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), C = U(
      () => D.value.filter(
        (N) => !d.value.trim() || N.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), H = U(
      () => $.value.filter(
        (N) => !d.value.trim() || N.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), F = U(
      () => S.value.filter(
        (N) => !d.value.trim() || N.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), j = U(
      () => y.value ? F.value : F.value.slice(0, 5)
    );
    async function T(N = !1) {
      u.value = !0, v.value = null;
      try {
        p.value = await f(N);
      } catch (B) {
        v.value = B instanceof Error ? B.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    c({ loadWorkflows: T });
    function M(N) {
      h.value = N, _.value = !0;
    }
    function A(N) {
      h.value = N, k.value = !0;
    }
    function ie() {
      i("refresh");
    }
    async function ae() {
      k.value = !1, await T(!0);
    }
    async function Q() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ve(N) {
      const B = [];
      return N.missing_nodes > 0 && B.push(`${N.missing_nodes} missing node${N.missing_nodes > 1 ? "s" : ""}`), N.missing_models > 0 && B.push(`${N.missing_models} missing model${N.missing_models > 1 ? "s" : ""}`), N.models_with_category_mismatch && N.models_with_category_mismatch > 0 && B.push(`${N.models_with_category_mismatch} model${N.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), N.pending_downloads && N.pending_downloads > 0 && B.push(`${N.pending_downloads} pending download${N.pending_downloads > 1 ? "s" : ""}`), B.length > 0 ? B.join(", ") : "Has issues";
    }
    function X(N) {
      const B = N.sync_state === "new" ? "New" : N.sync_state === "modified" ? "Modified" : N.sync_state === "synced" ? "Synced" : N.sync_state;
      return N.has_path_sync_issues && N.models_needing_path_sync && N.models_needing_path_sync > 0 ? `${N.models_needing_path_sync} model path${N.models_needing_path_sync > 1 ? "s" : ""} need${N.models_needing_path_sync === 1 ? "s" : ""} sync` : B || "Unknown";
    }
    return Be(T), (N, B) => (s(), o(G, null, [
      b(et, null, {
        header: l(() => [
          b(tt, { title: "WORKFLOWS" })
        ]),
        search: l(() => [
          b(qt, {
            modelValue: d.value,
            "onUpdate:modelValue": B[0] || (B[0] = (I) => d.value = I),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value ? (s(), x(Et, {
            key: 0,
            message: "Loading workflows..."
          })) : v.value ? (s(), x(Pt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            R.value.length ? (s(), x(Ue, {
              key: 0,
              title: "BROKEN",
              count: R.value.length
            }, {
              default: l(() => [
                (s(!0), o(G, null, ne(R.value, (I) => (s(), x(Ze, {
                  key: I.name,
                  status: "broken"
                }, {
                  icon: l(() => [...B[7] || (B[7] = [
                    g("⚠", -1)
                  ])]),
                  title: l(() => [
                    g(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(ve(I)), 1)
                  ]),
                  actions: l(() => [
                    b(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (me) => A(I.name)
                    }, {
                      default: l(() => [...B[8] || (B[8] = [
                        g(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (me) => M(I.name)
                    }, {
                      default: l(() => [...B[9] || (B[9] = [
                        g(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            C.value.length ? (s(), x(Ue, {
              key: 1,
              title: "NEW",
              count: C.value.length
            }, {
              default: l(() => [
                (s(!0), o(G, null, ne(C.value, (I) => (s(), x(Ze, {
                  key: I.name,
                  status: I.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: l(() => [
                    g(a(I.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: l(() => [
                    g(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(X(I)), 1)
                  ]),
                  actions: l(() => [
                    b(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (me) => M(I.name)
                    }, {
                      default: l(() => [...B[10] || (B[10] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            H.value.length ? (s(), x(Ue, {
              key: 2,
              title: "MODIFIED",
              count: H.value.length
            }, {
              default: l(() => [
                (s(!0), o(G, null, ne(H.value, (I) => (s(), x(Ze, {
                  key: I.name,
                  status: I.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: l(() => [...B[11] || (B[11] = [
                    g("⚡", -1)
                  ])]),
                  title: l(() => [
                    g(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(X(I)), 1)
                  ]),
                  actions: l(() => [
                    b(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (me) => M(I.name)
                    }, {
                      default: l(() => [...B[12] || (B[12] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            F.value.length ? (s(), x(Ue, {
              key: 3,
              title: "SYNCED",
              count: F.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: B[2] || (B[2] = (I) => m.value = I)
            }, {
              default: l(() => [
                (s(!0), o(G, null, ne(j.value, (I) => (s(), x(Ze, {
                  key: I.name,
                  status: I.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: l(() => [
                    g(a(I.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: l(() => [
                    g(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(X(I)), 1)
                  ]),
                  actions: l(() => [
                    b(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (me) => M(I.name)
                    }, {
                      default: l(() => [...B[13] || (B[13] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !y.value && F.value.length > 5 ? (s(), x(Z, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: B[1] || (B[1] = (I) => y.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: l(() => [
                    g(" View all " + a(F.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : r("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : r("", !0),
            V.value.length ? r("", !0) : (s(), x(ht, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      _.value && h.value ? (s(), x(bi, {
        key: 0,
        "workflow-name": h.value,
        onClose: B[3] || (B[3] = (I) => _.value = !1),
        onResolve: B[4] || (B[4] = (I) => A(h.value)),
        onRefresh: B[5] || (B[5] = (I) => i("refresh"))
      }, null, 8, ["workflow-name"])) : r("", !0),
      k.value && h.value ? (s(), x(em, {
        key: 1,
        "workflow-name": h.value,
        onClose: ae,
        onInstall: ie,
        onRefresh: B[6] || (B[6] = (I) => i("refresh")),
        onRestart: Q
      }, null, 8, ["workflow-name"])) : r("", !0)
    ], 64));
  }
}), xm = /* @__PURE__ */ oe(Cm, [["__scopeId", "data-v-fa3f076e"]]), Sm = /* @__PURE__ */ ee({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: fe(["summary-bar", t.variant])
    }, [
      Ee(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ds = /* @__PURE__ */ oe(Sm, [["__scopeId", "data-v-ccb7816e"]]), Im = {
  key: 0,
  class: "model-details"
}, Em = { class: "detail-section" }, Pm = { class: "detail-row" }, Rm = { class: "detail-value mono" }, Tm = { class: "detail-row" }, Mm = { class: "detail-value mono" }, Dm = { class: "detail-row" }, Lm = { class: "detail-value mono" }, zm = { class: "detail-row" }, Um = { class: "detail-value" }, Nm = { class: "detail-row" }, Om = { class: "detail-value" }, Bm = { class: "detail-row" }, Am = { class: "detail-value" }, Fm = { class: "detail-section" }, Vm = { class: "section-header" }, Wm = {
  key: 0,
  class: "locations-list"
}, Gm = { class: "location-path mono" }, jm = {
  key: 0,
  class: "location-modified"
}, Km = ["onClick"], Hm = {
  key: 1,
  class: "empty-state"
}, qm = { class: "detail-section" }, Ym = { class: "section-header" }, Jm = {
  key: 0,
  class: "sources-list"
}, Xm = { class: "source-type" }, Qm = ["href"], Zm = ["disabled", "onClick"], ev = {
  key: 1,
  class: "empty-state"
}, tv = { class: "add-source-form" }, sv = ["disabled"], ov = {
  key: 2,
  class: "source-error"
}, nv = {
  key: 3,
  class: "source-success"
}, av = /* @__PURE__ */ ee({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: i, addModelSource: f, removeModelSource: p, openFileLocation: u } = We(), v = w(null), d = w(!0), m = w(null), y = w(""), _ = w(!1), k = w(null), h = w(null), E = w(null), D = w(null);
    let $ = null;
    function S(T, M = "success", A = 2e3) {
      $ && clearTimeout($), D.value = { message: T, type: M }, $ = setTimeout(() => {
        D.value = null;
      }, A);
    }
    function V(T) {
      if (!T) return "Unknown";
      const M = 1024 * 1024 * 1024, A = 1024 * 1024;
      return T >= M ? `${(T / M).toFixed(1)} GB` : T >= A ? `${(T / A).toFixed(0)} MB` : `${(T / 1024).toFixed(0)} KB`;
    }
    function R(T) {
      navigator.clipboard.writeText(T), S("Copied to clipboard!");
    }
    async function C(T) {
      try {
        await u(T), S("Opening file location...");
      } catch {
        S("Failed to open location", "error");
      }
    }
    async function H() {
      if (!(!y.value.trim() || !v.value)) {
        _.value = !0, h.value = null, E.value = null;
        try {
          await f(v.value.hash, y.value.trim()), E.value = "Source added successfully!", y.value = "", await j();
        } catch (T) {
          h.value = T instanceof Error ? T.message : "Failed to add source";
        } finally {
          _.value = !1;
        }
      }
    }
    async function F(T) {
      if (v.value) {
        k.value = T, h.value = null, E.value = null;
        try {
          await p(v.value.hash, T), S("Source removed"), await j();
        } catch (M) {
          h.value = M instanceof Error ? M.message : "Failed to remove source";
        } finally {
          k.value = null;
        }
      }
    }
    async function j() {
      d.value = !0, m.value = null;
      try {
        v.value = await i(n.identifier);
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return Be(j), (T, M) => {
      var A;
      return s(), o(G, null, [
        b(st, {
          title: `Model Details: ${((A = v.value) == null ? void 0 : A.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: m.value,
          onClose: M[5] || (M[5] = (ie) => T.$emit("close"))
        }, {
          body: l(() => {
            var ie, ae, Q, ve;
            return [
              v.value ? (s(), o("div", Im, [
                e("section", Em, [
                  e("div", Pm, [
                    M[6] || (M[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", Rm, a(v.value.hash || "Not computed"), 1),
                    v.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[0] || (M[0] = (X) => R(v.value.hash))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", Tm, [
                    M[7] || (M[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", Mm, a(v.value.blake3 || "Not computed"), 1),
                    v.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[1] || (M[1] = (X) => R(v.value.blake3))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", Dm, [
                    M[8] || (M[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", Lm, a(v.value.sha256 || "Not computed"), 1),
                    v.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[2] || (M[2] = (X) => R(v.value.sha256))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", zm, [
                    M[9] || (M[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Um, a(V(v.value.size)), 1)
                  ]),
                  e("div", Nm, [
                    M[10] || (M[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Om, a(v.value.category), 1)
                  ]),
                  e("div", Bm, [
                    M[11] || (M[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Am, a(v.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Fm, [
                  e("h4", Vm, "Locations (" + a(((ie = v.value.locations) == null ? void 0 : ie.length) || 0) + ")", 1),
                  (ae = v.value.locations) != null && ae.length ? (s(), o("div", Wm, [
                    (s(!0), o(G, null, ne(v.value.locations, (X, N) => (s(), o("div", {
                      key: N,
                      class: "location-item"
                    }, [
                      e("span", Gm, a(X.path), 1),
                      X.modified ? (s(), o("span", jm, "Modified: " + a(X.modified), 1)) : r("", !0),
                      X.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (B) => C(X.path)
                      }, " Open File Location ", 8, Km)) : r("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", Hm, "No locations found"))
                ]),
                e("section", qm, [
                  e("h4", Ym, "Download Sources (" + a(((Q = v.value.sources) == null ? void 0 : Q.length) || 0) + ")", 1),
                  (ve = v.value.sources) != null && ve.length ? (s(), o("div", Jm, [
                    (s(!0), o(G, null, ne(v.value.sources, (X, N) => (s(), o("div", {
                      key: N,
                      class: "source-item"
                    }, [
                      e("span", Xm, a(X.type) + ":", 1),
                      e("a", {
                        href: X.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(X.url), 9, Qm),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: k.value === X.url,
                        onClick: (B) => F(X.url)
                      }, a(k.value === X.url ? "..." : "×"), 9, Zm)
                    ]))), 128))
                  ])) : (s(), o("div", ev, " No download sources configured ")),
                  e("div", tv, [
                    Le(e("input", {
                      "onUpdate:modelValue": M[3] || (M[3] = (X) => y.value = X),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Bt, y.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !y.value.trim() || _.value,
                      onClick: H
                    }, a(_.value ? "Adding..." : "Add Source"), 9, sv)
                  ]),
                  h.value ? (s(), o("p", ov, a(h.value), 1)) : r("", !0),
                  E.value ? (s(), o("p", nv, a(E.value), 1)) : r("", !0)
                ])
              ])) : r("", !0)
            ];
          }),
          footer: l(() => [
            e("button", {
              class: "btn-secondary",
              onClick: M[4] || (M[4] = (ie) => T.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), x(Je, { to: "body" }, [
          D.value ? (s(), o("div", {
            key: 0,
            class: fe(["toast", D.value.type])
          }, a(D.value.message), 3)) : r("", !0)
        ]))
      ], 64);
    };
  }
}), Ls = /* @__PURE__ */ oe(av, [["__scopeId", "data-v-f15cbb56"]]), lv = /* @__PURE__ */ ee({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: i, getStatus: f } = We(), p = w([]), u = w([]), v = w("production"), d = w(!1), m = w(null), y = w(""), _ = w(!1), k = w(null);
    function h() {
      _.value = !1, n("navigate", "model-index");
    }
    const E = U(
      () => p.value.reduce((j, T) => j + (T.size || 0), 0)
    ), D = U(() => {
      if (!y.value.trim()) return p.value;
      const j = y.value.toLowerCase();
      return p.value.filter((T) => T.filename.toLowerCase().includes(j));
    }), $ = U(() => {
      if (!y.value.trim()) return u.value;
      const j = y.value.toLowerCase();
      return u.value.filter((T) => T.filename.toLowerCase().includes(j));
    }), S = U(() => {
      const j = {};
      for (const M of D.value) {
        const A = M.type || "other";
        j[A] || (j[A] = []), j[A].push(M);
      }
      const T = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(j).sort(([M], [A]) => {
        const ie = T.indexOf(M), ae = T.indexOf(A);
        return ie >= 0 && ae >= 0 ? ie - ae : ie >= 0 ? -1 : ae >= 0 ? 1 : M.localeCompare(A);
      }).map(([M, A]) => ({ type: M, models: A }));
    });
    function V(j) {
      if (!j) return "Unknown";
      const T = j / (1024 * 1024);
      return T >= 1024 ? `${(T / 1024).toFixed(1)} GB` : `${T.toFixed(0)} MB`;
    }
    function R(j) {
      k.value = j.hash || j.filename;
    }
    function C(j) {
      n("navigate", "model-index");
    }
    function H(j) {
      alert(`Download functionality not yet implemented for ${j}`);
    }
    async function F() {
      d.value = !0, m.value = null;
      try {
        const j = await i();
        p.value = j, u.value = [];
        const T = await f();
        v.value = T.environment || "production";
      } catch (j) {
        m.value = j instanceof Error ? j.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return Be(F), (j, T) => (s(), o(G, null, [
      b(et, null, {
        header: l(() => [
          b(tt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (M) => _.value = !0)
          })
        ]),
        search: l(() => [
          b(qt, {
            modelValue: y.value,
            "onUpdate:modelValue": T[1] || (T[1] = (M) => y.value = M),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          d.value ? (s(), x(Et, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (s(), x(Pt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            p.value.length ? (s(), x(ds, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                g(" Total: " + a(p.value.length) + " models • " + a(V(E.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : r("", !0),
            (s(!0), o(G, null, ne(S.value, (M) => (s(), x(Ue, {
              key: M.type,
              title: M.type.toUpperCase(),
              count: M.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(G, null, ne(M.models, (A) => (s(), x(Ze, {
                  key: A.hash || A.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...T[4] || (T[4] = [
                    g("📦", -1)
                  ])]),
                  title: l(() => [
                    g(a(A.filename), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(V(A.size)), 1)
                  ]),
                  details: l(() => [
                    b(Fe, {
                      label: "Used by:",
                      value: (A.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    b(Fe, {
                      label: "Path:",
                      value: A.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    b(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ie) => R(A)
                    }, {
                      default: l(() => [...T[5] || (T[5] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            $.value.length ? (s(), x(Ue, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: l(() => [
                (s(!0), o(G, null, ne($.value, (M) => (s(), x(Ze, {
                  key: M.filename,
                  status: "broken"
                }, {
                  icon: l(() => [...T[6] || (T[6] = [
                    g("⚠", -1)
                  ])]),
                  title: l(() => [
                    g(a(M.filename), 1)
                  ]),
                  subtitle: l(() => [...T[7] || (T[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: l(() => {
                    var A;
                    return [
                      b(Fe, {
                        label: "Required by:",
                        value: ((A = M.workflow_names) == null ? void 0 : A.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: l(() => [
                    b(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => H(M.filename)
                    }, {
                      default: l(() => [...T[8] || (T[8] = [
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (A) => C(M.filename)
                    }, {
                      default: l(() => [...T[9] || (T[9] = [
                        g(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !D.value.length && !$.value.length ? (s(), x(ht, {
              key: 2,
              icon: "📭",
              message: y.value ? `No models match '${y.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(yt, {
        show: _.value,
        title: "About Environment Models",
        onClose: T[2] || (T[2] = (M) => _.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            T[10] || (T[10] = g(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(v.value) + '"', 1),
            T[11] || (T[11] = g(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: l(() => [
          b(Z, {
            variant: "primary",
            onClick: h
          }, {
            default: l(() => [...T[12] || (T[12] = [
              g(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), x(Ls, {
        key: 0,
        identifier: k.value,
        onClose: T[3] || (T[3] = (M) => k.value = null)
      }, null, 8, ["identifier"])) : r("", !0)
    ], 64));
  }
}), iv = /* @__PURE__ */ oe(lv, [["__scopeId", "data-v-cb4f12b3"]]), rv = {
  key: 0,
  class: "indexing-progress"
}, dv = { class: "progress-info" }, cv = { class: "progress-label" }, uv = { class: "progress-count" }, mv = { class: "progress-bar" }, vv = { class: "modal-content" }, fv = { class: "modal-header" }, pv = { class: "modal-body" }, gv = { class: "input-group" }, hv = { class: "current-path" }, yv = { class: "input-group" }, wv = { class: "modal-footer" }, kv = { class: "modal-content" }, bv = { class: "modal-header" }, _v = { class: "modal-body" }, $v = { class: "input-group" }, Cv = { class: "input-group" }, xv = { class: "modal-footer" }, Sv = /* @__PURE__ */ ee({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: i,
      getModelsDirectory: f,
      setModelsDirectory: p
    } = We(), { addToQueue: u } = rs(), v = c, d = w([]), m = w(!1), y = w(!1), _ = w(null), k = w(""), h = w(!1), E = w(null), D = w(!1), $ = w(null), S = w(""), V = w(!1), R = w(!1), C = w(""), H = w(""), F = w(null), j = U(
      () => d.value.reduce((B, I) => B + (I.size || 0), 0)
    ), T = U(() => {
      if (!k.value.trim()) return d.value;
      const B = k.value.toLowerCase();
      return d.value.filter((I) => {
        const me = I, te = I.sha256 || me.sha256_hash || "";
        return I.filename.toLowerCase().includes(B) || te.toLowerCase().includes(B);
      });
    }), M = U(() => {
      const B = {};
      for (const me of T.value) {
        const te = me.type || "other";
        B[te] || (B[te] = []), B[te].push(me);
      }
      const I = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(B).sort(([me], [te]) => {
        const we = I.indexOf(me), be = I.indexOf(te);
        return we >= 0 && be >= 0 ? we - be : we >= 0 ? -1 : be >= 0 ? 1 : me.localeCompare(te);
      }).map(([me, te]) => ({ type: me, models: te }));
    });
    function A(B) {
      if (!B) return "Unknown";
      const I = 1024 * 1024 * 1024, me = 1024 * 1024;
      return B >= I ? `${(B / I).toFixed(1)} GB` : B >= me ? `${(B / me).toFixed(0)} MB` : `${(B / 1024).toFixed(0)} KB`;
    }
    function ie(B) {
      E.value = B.hash || B.filename;
    }
    async function ae() {
      y.value = !0, _.value = null;
      try {
        const B = await i();
        await X(), B.changes > 0 && console.log(`Scan complete: ${B.changes} changes detected`);
      } catch (B) {
        _.value = B instanceof Error ? B.message : "Failed to scan models";
      } finally {
        y.value = !1;
      }
    }
    async function Q() {
      if (S.value.trim()) {
        V.value = !0, _.value = null;
        try {
          const B = await p(S.value.trim());
          $.value = B.path, D.value = !1, S.value = "", await X(), console.log(`Directory changed: ${B.models_indexed} models indexed`), v("refresh");
        } catch (B) {
          _.value = B instanceof Error ? B.message : "Failed to change directory";
        } finally {
          V.value = !1;
        }
      }
    }
    function ve() {
      if (!C.value.trim() || !H.value.trim()) return;
      const B = H.value.split("/").pop() || "model.safetensors";
      u([{
        workflow: "__manual__",
        filename: B,
        url: C.value.trim(),
        targetPath: H.value.trim()
      }]), C.value = "", H.value = "", R.value = !1;
    }
    async function X() {
      m.value = !0, _.value = null;
      try {
        d.value = await n();
      } catch (B) {
        _.value = B instanceof Error ? B.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function N() {
      try {
        const B = await f();
        $.value = B.path;
      } catch {
      }
    }
    return Be(() => {
      X(), N();
    }), (B, I) => (s(), o(G, null, [
      b(et, null, {
        header: l(() => [
          b(tt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: I[2] || (I[2] = (me) => h.value = !0)
          }, {
            actions: l(() => [
              b(Z, {
                variant: "primary",
                size: "sm",
                disabled: y.value,
                onClick: ae
              }, {
                default: l(() => [
                  g(a(y.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(Z, {
                variant: "primary",
                size: "sm",
                onClick: I[0] || (I[0] = (me) => D.value = !0)
              }, {
                default: l(() => [...I[15] || (I[15] = [
                  g(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              b(Z, {
                variant: "primary",
                size: "sm",
                onClick: I[1] || (I[1] = (me) => R.value = !0)
              }, {
                default: l(() => [...I[16] || (I[16] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  g(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          F.value ? (s(), o("div", rv, [
            e("div", dv, [
              e("span", cv, a(F.value.message), 1),
              e("span", uv, a(F.value.current) + "/" + a(F.value.total), 1)
            ]),
            e("div", mv, [
              e("div", {
                class: "progress-fill",
                style: It({ width: `${F.value.current / F.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : r("", !0),
          b(qt, {
            modelValue: k.value,
            "onUpdate:modelValue": I[3] || (I[3] = (me) => k.value = me),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          m.value || F.value ? (s(), x(Et, {
            key: 0,
            message: F.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : _.value ? (s(), x(Pt, {
            key: 1,
            message: _.value,
            retry: !0,
            onRetry: X
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            d.value.length ? (s(), x(ds, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                g(" Total: " + a(d.value.length) + " models • " + a(A(j.value)), 1)
              ]),
              _: 1
            })) : r("", !0),
            (s(!0), o(G, null, ne(M.value, (me) => (s(), x(Ue, {
              key: me.type,
              title: me.type.toUpperCase(),
              count: me.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: l(() => [
                (s(!0), o(G, null, ne(me.models, (te) => (s(), x(Ze, {
                  key: te.sha256 || te.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...I[17] || (I[17] = [
                    g("📦", -1)
                  ])]),
                  title: l(() => [
                    g(a(te.filename), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(A(te.size)), 1)
                  ]),
                  details: l(() => [
                    b(Fe, {
                      label: "Hash:",
                      value: te.hash ? te.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    b(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (we) => ie(te)
                    }, {
                      default: l(() => [...I[18] || (I[18] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            T.value.length ? r("", !0) : (s(), x(ht, {
              key: 1,
              icon: "📭",
              message: k.value ? `No models match '${k.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      b(yt, {
        show: h.value,
        title: "About Workspace Model Index",
        onClose: I[4] || (I[4] = (me) => h.value = !1)
      }, {
        content: l(() => [...I[19] || (I[19] = [
          e("p", null, [
            g(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            g(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      E.value ? (s(), x(Ls, {
        key: 0,
        identifier: E.value,
        onClose: I[5] || (I[5] = (me) => E.value = null)
      }, null, 8, ["identifier"])) : r("", !0),
      (s(), x(Je, { to: "body" }, [
        D.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[9] || (I[9] = Ne((me) => D.value = !1, ["self"]))
        }, [
          e("div", vv, [
            e("div", fv, [
              I[20] || (I[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[6] || (I[6] = (me) => D.value = !1)
              }, "✕")
            ]),
            e("div", pv, [
              e("div", gv, [
                I[21] || (I[21] = e("label", null, "Current Directory", -1)),
                e("code", hv, a($.value || "Not set"), 1)
              ]),
              e("div", yv, [
                I[22] || (I[22] = e("label", null, "New Directory Path", -1)),
                b(gt, {
                  modelValue: S.value,
                  "onUpdate:modelValue": I[7] || (I[7] = (me) => S.value = me),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              I[23] || (I[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", wv, [
              b(ye, {
                variant: "secondary",
                onClick: I[8] || (I[8] = (me) => D.value = !1)
              }, {
                default: l(() => [...I[24] || (I[24] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              b(ye, {
                variant: "primary",
                disabled: !S.value.trim() || V.value,
                loading: V.value,
                onClick: Q
              }, {
                default: l(() => [
                  g(a(V.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : r("", !0)
      ])),
      (s(), x(Je, { to: "body" }, [
        R.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[14] || (I[14] = Ne((me) => R.value = !1, ["self"]))
        }, [
          e("div", kv, [
            e("div", bv, [
              I[25] || (I[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[10] || (I[10] = (me) => R.value = !1)
              }, "✕")
            ]),
            e("div", _v, [
              e("div", $v, [
                I[26] || (I[26] = e("label", null, "Download URL", -1)),
                b(gt, {
                  modelValue: C.value,
                  "onUpdate:modelValue": I[11] || (I[11] = (me) => C.value = me),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", Cv, [
                I[27] || (I[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                b(gt, {
                  modelValue: H.value,
                  "onUpdate:modelValue": I[12] || (I[12] = (me) => H.value = me),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              I[28] || (I[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", xv, [
              b(ye, {
                variant: "secondary",
                onClick: I[13] || (I[13] = (me) => R.value = !1)
              }, {
                default: l(() => [...I[29] || (I[29] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              b(ye, {
                variant: "primary",
                disabled: !C.value.trim() || !H.value.trim(),
                onClick: ve
              }, {
                default: l(() => [...I[30] || (I[30] = [
                  g(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : r("", !0)
      ]))
    ], 64));
  }
}), Iv = /* @__PURE__ */ oe(Sv, [["__scopeId", "data-v-73b78d84"]]), Ev = { class: "node-details" }, Pv = { class: "status-row" }, Rv = {
  key: 0,
  class: "detail-row"
}, Tv = { class: "value" }, Mv = { class: "detail-row" }, Dv = { class: "value" }, Lv = {
  key: 1,
  class: "detail-row"
}, zv = { class: "value mono" }, Uv = {
  key: 2,
  class: "detail-row"
}, Nv = ["href"], Ov = {
  key: 3,
  class: "detail-row"
}, Bv = { class: "value mono small" }, Av = { class: "detail-row" }, Fv = {
  key: 0,
  class: "value"
}, Vv = {
  key: 1,
  class: "workflow-list"
}, Wv = /* @__PURE__ */ ee({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = U(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), p = U(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), u = U(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (v, d) => (s(), x(st, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (m) => i("close"))
    }, {
      body: l(() => [
        e("div", Ev, [
          e("div", Pv, [
            d[2] || (d[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: fe(["status-badge", f.value])
            }, a(p.value), 3)
          ]),
          t.node.version ? (s(), o("div", Rv, [
            d[3] || (d[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", Tv, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : r("", !0),
          e("div", Mv, [
            d[4] || (d[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", Dv, a(u.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", Lv, [
            d[5] || (d[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", zv, a(t.node.registry_id), 1)
          ])) : r("", !0),
          t.node.repository ? (s(), o("div", Uv, [
            d[7] || (d[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              g(a(t.node.repository) + " ", 1),
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
            ], 8, Nv)
          ])) : r("", !0),
          t.node.download_url ? (s(), o("div", Ov, [
            d[8] || (d[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", Bv, a(t.node.download_url), 1)
          ])) : r("", !0),
          d[10] || (d[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Av, [
            d[9] || (d[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", Fv, " Not used in any workflows ")) : (s(), o("div", Vv, [
              (s(!0), o(G, null, ne(t.node.used_in_workflows, (m) => (s(), o("span", {
                key: m,
                class: "workflow-tag"
              }, a(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: l(() => [
        b(ye, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (m) => i("close"))
        }, {
          default: l(() => [...d[11] || (d[11] = [
            g(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Gv = /* @__PURE__ */ oe(Wv, [["__scopeId", "data-v-b342f626"]]), jv = { class: "dialog-message" }, Kv = {
  key: 0,
  class: "dialog-details"
}, Hv = {
  key: 1,
  class: "dialog-warning"
}, qv = /* @__PURE__ */ ee({
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
    return (c, n) => (s(), x(st, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (i) => c.$emit("cancel"))
    }, {
      body: l(() => [
        e("p", jv, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", Kv, [
          (s(!0), o(G, null, ne(t.details, (i, f) => (s(), o("div", {
            key: f,
            class: "detail-item"
          }, " • " + a(i), 1))), 128))
        ])) : r("", !0),
        t.warning ? (s(), o("p", Hv, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          g(" " + a(t.warning), 1)
        ])) : r("", !0)
      ]),
      footer: l(() => [
        b(ye, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (i) => c.$emit("cancel"))
        }, {
          default: l(() => [
            g(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), x(ye, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (i) => c.$emit("secondary"))
        }, {
          default: l(() => [
            g(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : r("", !0),
        b(ye, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (i) => c.$emit("confirm"))
        }, {
          default: l(() => [
            g(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), so = /* @__PURE__ */ oe(qv, [["__scopeId", "data-v-3670b9f5"]]), Yv = { class: "mismatch-warning" }, Jv = { class: "version-mismatch" }, Xv = { class: "version-actual" }, Qv = { class: "version-expected" }, Zv = { key: 0 }, ef = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, tf = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, sf = /* @__PURE__ */ ee({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getNodes: f, trackNodeAsDev: p, installNode: u, uninstallNode: v } = We(), d = w({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), m = w(!1), y = w(null), _ = w(""), k = w(!1), h = w(null), E = w(null), D = U(() => {
      if (!_.value.trim()) return d.value.nodes;
      const ae = _.value.toLowerCase();
      return d.value.nodes.filter(
        (Q) => {
          var ve, X;
          return Q.name.toLowerCase().includes(ae) || ((ve = Q.description) == null ? void 0 : ve.toLowerCase().includes(ae)) || ((X = Q.repository) == null ? void 0 : X.toLowerCase().includes(ae));
        }
      );
    }), $ = U(
      () => D.value.filter((ae) => ae.installed && ae.tracked)
    ), S = U(
      () => D.value.filter((ae) => !ae.installed && ae.tracked)
    ), V = U(
      () => D.value.filter((ae) => ae.installed && !ae.tracked)
    );
    function R(ae) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[ae] || ae;
    }
    const C = U(() => n.versionMismatches.length > 0);
    function H(ae) {
      return !ae.used_in_workflows || ae.used_in_workflows.length === 0 ? "Not used in any workflows" : ae.used_in_workflows.length === 1 ? ae.used_in_workflows[0] : `${ae.used_in_workflows.length} workflows`;
    }
    function F(ae) {
      h.value = ae;
    }
    function j() {
      i("open-node-manager");
    }
    function T(ae) {
      E.value = {
        title: "Track as Development Node",
        message: `Track "${ae}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          E.value = null;
          try {
            m.value = !0;
            const Q = await p(ae);
            Q.status === "success" ? (i("toast", `✓ Node "${ae}" tracked as development`, "success"), await ie()) : i("toast", `Failed to track node: ${Q.message || "Unknown error"}`, "error");
          } catch (Q) {
            i("toast", `Error tracking node: ${Q instanceof Error ? Q.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function M(ae) {
      E.value = {
        title: "Remove Untracked Node",
        message: `Remove "${ae}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          E.value = null;
          try {
            m.value = !0;
            const Q = await v(ae);
            Q.status === "success" ? (i("toast", `✓ Node "${ae}" removed`, "success"), await ie()) : i("toast", `Failed to remove node: ${Q.message || "Unknown error"}`, "error");
          } catch (Q) {
            i("toast", `Error removing node: ${Q instanceof Error ? Q.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function A(ae) {
      E.value = {
        title: "Install Missing Node",
        message: `Install "${ae}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          E.value = null;
          try {
            m.value = !0;
            const Q = await u(ae);
            Q.status === "success" ? (i("toast", `✓ Node "${ae}" installed`, "success"), await ie()) : i("toast", `Failed to install node: ${Q.message || "Unknown error"}`, "error");
          } catch (Q) {
            i("toast", `Error installing node: ${Q instanceof Error ? Q.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    async function ie() {
      m.value = !0, y.value = null;
      try {
        d.value = await f();
      } catch (ae) {
        y.value = ae instanceof Error ? ae.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return Be(ie), (ae, Q) => (s(), o(G, null, [
      b(et, null, {
        header: l(() => [
          b(tt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: Q[0] || (Q[0] = (ve) => k.value = !0)
          }, {
            actions: l(() => [
              b(Z, {
                variant: "primary",
                size: "sm",
                onClick: j
              }, {
                default: l(() => [...Q[7] || (Q[7] = [
                  g(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          b(qt, {
            modelValue: _.value,
            "onUpdate:modelValue": Q[1] || (Q[1] = (ve) => _.value = ve),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          m.value ? (s(), x(Et, {
            key: 0,
            message: "Loading nodes..."
          })) : y.value ? (s(), x(Pt, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: ie
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            d.value.total_count ? (s(), x(ds, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                g(a(d.value.installed_count) + " installed ", 1),
                d.value.missing_count ? (s(), o(G, { key: 0 }, [
                  g(" • " + a(d.value.missing_count) + " missing", 1)
                ], 64)) : r("", !0),
                d.value.untracked_count ? (s(), o(G, { key: 1 }, [
                  g(" • " + a(d.value.untracked_count) + " untracked", 1)
                ], 64)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            C.value ? (s(), x(Ue, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: t.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                e("div", Yv, [
                  Q[8] || (Q[8] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (s(!0), o(G, null, ne(t.versionMismatches, (ve) => (s(), x(Ze, {
                  key: ve.name,
                  status: "warning"
                }, {
                  icon: l(() => [...Q[9] || (Q[9] = [
                    g("⚠", -1)
                  ])]),
                  title: l(() => [
                    g(a(ve.name), 1)
                  ]),
                  subtitle: l(() => [
                    e("span", Jv, [
                      e("span", Xv, a(ve.actual), 1),
                      Q[10] || (Q[10] = e("span", { class: "version-arrow" }, "→", -1)),
                      e("span", Qv, a(ve.expected), 1)
                    ])
                  ]),
                  actions: l(() => [
                    b(Z, {
                      variant: "warning",
                      size: "sm",
                      onClick: Q[2] || (Q[2] = (X) => i("repair-environment"))
                    }, {
                      default: l(() => [...Q[11] || (Q[11] = [
                        g(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            V.value.length ? (s(), x(Ue, {
              key: 2,
              title: "UNTRACKED",
              count: V.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(G, null, ne(V.value, (ve) => (s(), x(Ze, {
                  key: ve.name,
                  status: "warning"
                }, {
                  icon: l(() => [...Q[12] || (Q[12] = [
                    g("?", -1)
                  ])]),
                  title: l(() => [
                    g(a(ve.name), 1)
                  ]),
                  subtitle: l(() => [...Q[13] || (Q[13] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: l(() => [
                    b(Fe, {
                      label: "Used by:",
                      value: H(ve)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    b(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => F(ve)
                    }, {
                      default: l(() => [...Q[14] || (Q[14] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (X) => T(ve.name)
                    }, {
                      default: l(() => [...Q[15] || (Q[15] = [
                        g(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Z, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (X) => M(ve.name)
                    }, {
                      default: l(() => [...Q[16] || (Q[16] = [
                        g(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            $.value.length ? (s(), x(Ue, {
              key: 3,
              title: "INSTALLED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(G, null, ne($.value, (ve) => (s(), x(Ze, {
                  key: ve.name,
                  status: "synced"
                }, {
                  icon: l(() => [
                    g(a(ve.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: l(() => [
                    g(a(ve.name), 1)
                  ]),
                  subtitle: l(() => [
                    ve.version ? (s(), o("span", Zv, a(ve.source === "development" ? "" : "v") + a(ve.version), 1)) : (s(), o("span", ef, "version unknown")),
                    e("span", tf, " • " + a(R(ve.source)), 1)
                  ]),
                  details: l(() => [
                    b(Fe, {
                      label: "Used by:",
                      value: H(ve)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    b(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => F(ve)
                    }, {
                      default: l(() => [...Q[17] || (Q[17] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: j
                    }, {
                      default: l(() => [...Q[18] || (Q[18] = [
                        g(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            S.value.length ? (s(), x(Ue, {
              key: 4,
              title: "MISSING",
              count: S.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(G, null, ne(S.value, (ve) => (s(), x(Ze, {
                  key: ve.name,
                  status: "missing"
                }, {
                  icon: l(() => [...Q[19] || (Q[19] = [
                    g("!", -1)
                  ])]),
                  title: l(() => [
                    g(a(ve.name), 1)
                  ]),
                  subtitle: l(() => [...Q[20] || (Q[20] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: l(() => [
                    b(Fe, {
                      label: "Required by:",
                      value: H(ve)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    b(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => F(ve)
                    }, {
                      default: l(() => [...Q[21] || (Q[21] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (X) => A(ve.name)
                    }, {
                      default: l(() => [...Q[22] || (Q[22] = [
                        g(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !$.value.length && !S.value.length && !V.value.length ? (s(), x(ht, {
              key: 5,
              icon: "📭",
              message: _.value ? `No nodes match '${_.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(yt, {
        show: k.value,
        title: "About Custom Nodes",
        onClose: Q[4] || (Q[4] = (ve) => k.value = !1)
      }, {
        content: l(() => [...Q[23] || (Q[23] = [
          e("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            g(" Tracked nodes available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            g(" Tracked nodes that need to be installed"),
            e("br"),
            e("strong", null, "Untracked:"),
            g(" Nodes on filesystem but not in manifest ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: l(() => [
          b(Z, {
            variant: "primary",
            onClick: Q[3] || (Q[3] = (ve) => k.value = !1)
          }, {
            default: l(() => [...Q[24] || (Q[24] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      h.value ? (s(), x(Gv, {
        key: 0,
        node: h.value,
        onClose: Q[5] || (Q[5] = (ve) => h.value = null)
      }, null, 8, ["node"])) : r("", !0),
      E.value ? (s(), x(so, {
        key: 1,
        title: E.value.title,
        message: E.value.message,
        warning: E.value.warning,
        "confirm-label": E.value.confirmLabel,
        destructive: E.value.destructive,
        onConfirm: E.value.onConfirm,
        onCancel: Q[6] || (Q[6] = (ve) => E.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : r("", !0)
    ], 64));
  }
}), of = /* @__PURE__ */ oe(sf, [["__scopeId", "data-v-1555a802"]]);
function oo(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const nf = { class: "remote-url-display" }, af = ["title"], lf = ["title"], rf = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, df = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, cf = /* @__PURE__ */ ee({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = w(!1), i = U(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const p = c.url.slice(0, Math.floor(c.maxLength * 0.6)), u = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${p}...${u}`;
    });
    async function f() {
      try {
        await navigator.clipboard.writeText(c.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (p) {
        console.error("Failed to copy URL:", p);
      }
    }
    return (p, u) => (s(), o("div", nf, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(i.value), 9, af),
      e("button", {
        class: fe(["copy-btn", { copied: n.value }]),
        onClick: f,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", df, [...u[1] || (u[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", rf, [...u[0] || (u[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, lf)
    ]));
  }
}), uf = /* @__PURE__ */ oe(cf, [["__scopeId", "data-v-7768a58d"]]), mf = { class: "remote-title" }, vf = {
  key: 0,
  class: "default-badge"
}, ff = {
  key: 1,
  class: "sync-badge"
}, pf = {
  key: 0,
  class: "ahead"
}, gf = {
  key: 1,
  class: "behind"
}, hf = {
  key: 1,
  class: "synced"
}, yf = ["href"], wf = {
  key: 1,
  class: "remote-url-text"
}, kf = /* @__PURE__ */ ee({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const c = t, n = U(() => c.fetchingRemote === c.remote.name), i = U(() => c.remote.is_default), f = U(() => c.syncStatus && c.syncStatus.behind > 0), p = U(() => c.syncStatus && c.syncStatus.ahead > 0), u = U(() => c.remote.push_url !== c.remote.fetch_url), v = U(() => {
      const m = c.remote.fetch_url, y = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return y ? `https://${y[1]}/${y[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), d = U(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, y) => (s(), x(Ze, {
      status: i.value ? "synced" : void 0
    }, At({
      icon: l(() => [
        g(a(i.value ? "🔗" : "🌐"), 1)
      ]),
      title: l(() => [
        e("div", mf, [
          e("span", null, a(t.remote.name), 1),
          i.value ? (s(), o("span", vf, "DEFAULT")) : r("", !0),
          t.syncStatus ? (s(), o("span", ff, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(G, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", pf, "↑" + a(t.syncStatus.ahead), 1)) : r("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", gf, "↓" + a(t.syncStatus.behind), 1)) : r("", !0)
            ], 64)) : (s(), o("span", hf, "✓ synced"))
          ])) : r("", !0)
        ])
      ]),
      subtitle: l(() => [
        v.value ? (s(), o("a", {
          key: 0,
          href: v.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: y[0] || (y[0] = Ne(() => {
          }, ["stop"]))
        }, a(d.value), 9, yf)) : (s(), o("span", wf, a(d.value), 1))
      ]),
      actions: l(() => [
        b(Z, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: y[1] || (y[1] = (_) => m.$emit("fetch", t.remote.name))
        }, {
          default: l(() => [...y[6] || (y[6] = [
            g(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        b(Z, {
          variant: f.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: y[2] || (y[2] = (_) => m.$emit("pull", t.remote.name))
        }, {
          default: l(() => [
            g(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(Z, {
          variant: p.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: y[3] || (y[3] = (_) => m.$emit("push", t.remote.name))
        }, {
          default: l(() => [
            g(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(Z, {
          variant: "secondary",
          size: "xs",
          onClick: y[4] || (y[4] = (_) => m.$emit("edit", t.remote.name))
        }, {
          default: l(() => [...y[7] || (y[7] = [
            g(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        i.value ? r("", !0) : (s(), x(Z, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: y[5] || (y[5] = (_) => m.$emit("remove", t.remote.name))
        }, {
          default: l(() => [...y[8] || (y[8] = [
            g(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      u.value ? {
        name: "details",
        fn: l(() => [
          t.remote.push_url !== t.remote.fetch_url ? (s(), x(Fe, {
            key: 0,
            label: "Push URL:"
          }, {
            default: l(() => [
              b(uf, {
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
}), bf = /* @__PURE__ */ oe(kf, [["__scopeId", "data-v-8310f3a8"]]), _f = ["for"], $f = {
  key: 0,
  class: "base-form-field-required"
}, Cf = { class: "base-form-field-input" }, xf = {
  key: 1,
  class: "base-form-field-error"
}, Sf = {
  key: 2,
  class: "base-form-field-hint"
}, If = /* @__PURE__ */ ee({
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
    const c = t, n = U(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, f) => (s(), o("div", {
      class: fe(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        g(a(t.label) + " ", 1),
        t.required ? (s(), o("span", $f, "*")) : r("", !0)
      ], 8, _f)) : r("", !0),
      e("div", Cf, [
        Ee(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", xf, a(t.error), 1)) : t.hint ? (s(), o("span", Sf, a(t.hint), 1)) : r("", !0)
    ], 2));
  }
}), _s = /* @__PURE__ */ oe(If, [["__scopeId", "data-v-9a1cf296"]]), Ef = { class: "remote-form" }, Pf = { class: "form-header" }, Rf = { class: "form-body" }, Tf = {
  key: 0,
  class: "form-error"
}, Mf = { class: "form-actions" }, Df = /* @__PURE__ */ ee({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = w({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), p = w(!1), u = w(null);
    it(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      f.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const v = U(() => f.value.name.trim() !== "" && f.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!v.value || p.value)) {
        u.value = null, p.value = !0;
        try {
          i("submit", f.value);
        } catch (m) {
          u.value = m instanceof Error ? m.message : "Failed to submit form";
        } finally {
          p.value = !1;
        }
      }
    }
    return (m, y) => (s(), o("div", Ef, [
      e("div", Pf, [
        b(lt, null, {
          default: l(() => [
            g(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Rf, [
        b(_s, {
          label: "Remote Name",
          required: ""
        }, {
          default: l(() => [
            b(gt, {
              modelValue: f.value.name,
              "onUpdate:modelValue": y[0] || (y[0] = (_) => f.value.name = _),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        b(_s, {
          label: "Fetch URL",
          required: ""
        }, {
          default: l(() => [
            b(gt, {
              modelValue: f.value.fetchUrl,
              "onUpdate:modelValue": y[1] || (y[1] = (_) => f.value.fetchUrl = _),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        b(_s, { label: "Push URL (optional)" }, {
          default: l(() => [
            b(gt, {
              modelValue: f.value.pushUrl,
              "onUpdate:modelValue": y[2] || (y[2] = (_) => f.value.pushUrl = _),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (s(), o("div", Tf, a(u.value), 1)) : r("", !0)
      ]),
      e("div", Mf, [
        b(Z, {
          variant: "primary",
          size: "md",
          disabled: !v.value,
          loading: p.value,
          onClick: d
        }, {
          default: l(() => [
            g(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        b(Z, {
          variant: "ghost",
          size: "md",
          onClick: y[3] || (y[3] = (_) => m.$emit("cancel"))
        }, {
          default: l(() => [...y[4] || (y[4] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Lf = /* @__PURE__ */ oe(Df, [["__scopeId", "data-v-56021b18"]]), zf = { class: "conflict-summary-box" }, Uf = { class: "summary-header" }, Nf = { class: "summary-text" }, Of = { key: 0 }, Bf = {
  key: 1,
  class: "all-resolved"
}, Af = { class: "summary-progress" }, Ff = { class: "progress-bar" }, Vf = { class: "progress-text" }, Wf = /* @__PURE__ */ ee({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const c = t, n = U(
      () => c.conflictCount > 0 ? c.resolvedCount / c.conflictCount * 100 : 0
    );
    return (i, f) => (s(), o("div", zf, [
      e("div", Uf, [
        f[0] || (f[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", Nf, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (s(), o("p", Of, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (s(), o("p", Bf, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", Af, [
        e("div", Ff, [
          e("div", {
            class: "progress-fill",
            style: It({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", Vf, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), Gf = /* @__PURE__ */ oe(Wf, [["__scopeId", "data-v-4e9e6cc9"]]), jf = { class: "modal-header" }, Kf = { class: "modal-title" }, Hf = { class: "modal-body" }, qf = {
  key: 0,
  class: "error-box"
}, Yf = {
  key: 0,
  class: "error-hint"
}, Jf = {
  key: 1,
  class: "loading-state"
}, Xf = { class: "commit-summary" }, Qf = {
  key: 0,
  class: "changes-section"
}, Zf = {
  key: 0,
  class: "change-group",
  open: ""
}, ep = { class: "change-count" }, tp = { class: "change-list" }, sp = {
  key: 0,
  class: "conflict-badge"
}, op = {
  key: 1,
  class: "change-group"
}, np = { class: "change-count" }, ap = { class: "change-list" }, lp = {
  key: 2,
  class: "change-group"
}, ip = { class: "change-count" }, rp = { class: "change-list" }, dp = {
  key: 2,
  class: "strategy-section"
}, cp = { class: "radio-group" }, up = { class: "radio-option" }, mp = { class: "radio-option" }, vp = { class: "radio-option" }, fp = {
  key: 3,
  class: "up-to-date"
}, pp = { class: "modal-actions" }, Ws = "comfygit.pullModelStrategy", gp = /* @__PURE__ */ ee({
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
    const n = t, i = c, f = w(localStorage.getItem(Ws) || "skip");
    it(f, ($) => {
      localStorage.setItem(Ws, $);
    });
    const p = U(() => {
      var $;
      return (($ = n.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), u = U(() => {
      if (!n.preview) return 0;
      const $ = n.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), v = U(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), d = U(() => {
      var $;
      return u.value > 0 || v.value > 0 || ((($ = n.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), m = U(() => n.preview && oo(n.preview) ? n.preview : null), y = U(() => {
      var $;
      return (($ = m.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), _ = U(() => {
      var $;
      return (($ = n.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), k = U(
      () => y.value > 0 && _.value === y.value
    ), h = U(() => !(!n.preview || n.preview.has_uncommitted_changes || m.value && !k.value));
    function E($) {
      if (!m.value) return !1;
      const S = $.replace(/\.json$/, "");
      return m.value.workflow_conflicts.some((V) => V.name === S);
    }
    function D($) {
      const S = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      i("pull", { modelStrategy: f.value, force: $, resolutions: S });
    }
    return ($, S) => {
      var V, R;
      return s(), x(Je, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[11] || (S[11] = (C) => $.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: S[10] || (S[10] = Ne(() => {
            }, ["stop"]))
          }, [
            e("div", jf, [
              e("h3", Kf, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: S[0] || (S[0] = (C) => $.$emit("close"))
              }, "✕")
            ]),
            e("div", Hf, [
              t.error ? (s(), o("div", qf, [
                S[13] || (S[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  S[12] || (S[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  p.value ? (s(), o("p", Yf, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : r("", !0)
                ])
              ])) : t.loading ? (s(), o("div", Jf, [...S[14] || (S[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                g(" Loading preview... ", -1)
              ])])) : (V = t.preview) != null && V.has_uncommitted_changes ? (s(), o(G, { key: 2 }, [
                S[15] || (S[15] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "UNCOMMITTED CHANGES"),
                    e("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                S[16] || (S[16] = e("div", { class: "options-section" }, [
                  e("p", null, [
                    e("strong", null, "Options:")
                  ]),
                  e("ul", null, [
                    e("li", null, "Commit your changes first (recommended)"),
                    e("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : t.preview ? (s(), o(G, { key: 3 }, [
                e("div", Xf, [
                  S[17] || (S[17] = e("span", { class: "icon" }, "📥", -1)),
                  g(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                d.value ? (s(), o("div", Qf, [
                  S[21] || (S[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  u.value > 0 ? (s(), o("details", Zf, [
                    e("summary", null, [
                      S[18] || (S[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", ep, a(u.value) + " changes", 1)
                    ]),
                    e("div", tp, [
                      (s(!0), o(G, null, ne(t.preview.changes.workflows.added, (C) => (s(), o("div", {
                        key: "a-" + C,
                        class: "change-item add"
                      }, " + " + a(C), 1))), 128)),
                      (s(!0), o(G, null, ne(t.preview.changes.workflows.modified, (C) => (s(), o("div", {
                        key: "m-" + C,
                        class: "change-item modify"
                      }, [
                        g(" ~ " + a(C) + " ", 1),
                        E(C) ? (s(), o("span", sp, "CONFLICT")) : r("", !0)
                      ]))), 128)),
                      (s(!0), o(G, null, ne(t.preview.changes.workflows.deleted, (C) => (s(), o("div", {
                        key: "d-" + C,
                        class: "change-item delete"
                      }, " - " + a(C), 1))), 128))
                    ])
                  ])) : r("", !0),
                  v.value > 0 ? (s(), o("details", op, [
                    e("summary", null, [
                      S[19] || (S[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", np, a(v.value) + " to install", 1)
                    ]),
                    e("div", ap, [
                      (s(!0), o(G, null, ne(t.preview.changes.nodes.to_install, (C) => (s(), o("div", {
                        key: C,
                        class: "change-item add"
                      }, " + " + a(C), 1))), 128))
                    ])
                  ])) : r("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", lp, [
                    e("summary", null, [
                      S[20] || (S[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", ip, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", rp, [
                      (s(!0), o(G, null, ne(t.preview.changes.models.referenced, (C) => (s(), o("div", {
                        key: C,
                        class: "change-item"
                      }, a(C), 1))), 128))
                    ])
                  ])) : r("", !0)
                ])) : r("", !0),
                m.value ? (s(), x(Gf, {
                  key: 1,
                  "conflict-count": y.value,
                  "resolved-count": _.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : r("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", dp, [
                  S[26] || (S[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", cp, [
                    e("label", up, [
                      Le(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[1] || (S[1] = (C) => f.value = C),
                        value: "all"
                      }, null, 512), [
                        [Ut, f.value]
                      ]),
                      S[22] || (S[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", mp, [
                      Le(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[2] || (S[2] = (C) => f.value = C),
                        value: "required"
                      }, null, 512), [
                        [Ut, f.value]
                      ]),
                      S[23] || (S[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", vp, [
                      Le(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[3] || (S[3] = (C) => f.value = C),
                        value: "skip"
                      }, null, 512), [
                        [Ut, f.value]
                      ]),
                      S[24] || (S[24] = e("span", null, "Skip model downloads", -1)),
                      S[25] || (S[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  S[27] || (S[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : r("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", fp, [
                  S[28] || (S[28] = e("span", { class: "icon" }, "✓", -1)),
                  g(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : r("", !0)
              ], 64)) : r("", !0)
            ]),
            e("div", pp, [
              b(Z, {
                variant: "secondary",
                onClick: S[4] || (S[4] = (C) => $.$emit("close"))
              }, {
                default: l(() => [...S[29] || (S[29] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(G, { key: 0 }, [
                b(Z, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: S[5] || (S[5] = (C) => D(!1))
                }, {
                  default: l(() => [...S[30] || (S[30] = [
                    g(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                b(Z, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: S[6] || (S[6] = (C) => D(!0))
                }, {
                  default: l(() => [...S[31] || (S[31] = [
                    g(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (R = t.preview) != null && R.has_uncommitted_changes ? (s(), x(Z, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: S[7] || (S[7] = (C) => D(!0))
              }, {
                default: l(() => [...S[32] || (S[32] = [
                  g(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(G, { key: 2 }, [
                m.value && !k.value ? (s(), x(Z, {
                  key: 0,
                  variant: "primary",
                  onClick: S[8] || (S[8] = (C) => i("openConflictResolution"))
                }, {
                  default: l(() => [
                    g(" Resolve Conflicts (" + a(_.value) + "/" + a(y.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), x(Z, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !h.value,
                  onClick: S[9] || (S[9] = (C) => D(!1))
                }, {
                  default: l(() => [...S[33] || (S[33] = [
                    g(" Pull Changes ", -1)
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
}), hp = /* @__PURE__ */ oe(gp, [["__scopeId", "data-v-300c7b2f"]]), yp = { class: "modal-header" }, wp = { class: "modal-title" }, kp = { class: "modal-body" }, bp = {
  key: 0,
  class: "loading-state"
}, _p = {
  key: 1,
  class: "warning-box"
}, $p = {
  key: 0,
  class: "commits-section"
}, Cp = { class: "commit-list" }, xp = { class: "commit-hash" }, Sp = { class: "commit-message" }, Ip = { class: "commit-date" }, Ep = { class: "force-option" }, Pp = { class: "checkbox-option" }, Rp = { class: "commit-summary" }, Tp = {
  key: 0,
  class: "commits-section"
}, Mp = { class: "commit-list" }, Dp = { class: "commit-hash" }, Lp = { class: "commit-message" }, zp = { class: "commit-date" }, Up = {
  key: 1,
  class: "up-to-date"
}, Np = { class: "modal-actions" }, Op = /* @__PURE__ */ ee({
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
    const n = c, i = w(!1);
    function f(p) {
      n("push", { force: p });
    }
    return (p, u) => {
      var v, d, m;
      return s(), x(Je, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: u[7] || (u[7] = (y) => p.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: u[6] || (u[6] = Ne(() => {
            }, ["stop"]))
          }, [
            e("div", yp, [
              e("h3", wp, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: u[0] || (u[0] = (y) => p.$emit("close"))
              }, "✕")
            ]),
            e("div", kp, [
              t.loading ? (s(), o("div", bp, [...u[8] || (u[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                g(" Loading preview... ", -1)
              ])])) : (v = t.preview) != null && v.has_uncommitted_changes ? (s(), o("div", _p, [...u[9] || (u[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = t.preview) != null && d.remote_has_new_commits ? (s(), o(G, { key: 2 }, [
                u[13] || (u[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (s(), o("div", $p, [
                  u[10] || (u[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Cp, [
                    (s(!0), o(G, null, ne(t.preview.commits, (y) => (s(), o("div", {
                      key: y.hash,
                      class: "commit-item"
                    }, [
                      e("span", xp, a(y.short_hash || y.hash.slice(0, 7)), 1),
                      e("span", Sp, a(y.message), 1),
                      e("span", Ip, a(y.date_relative || y.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                e("div", Ep, [
                  e("label", Pp, [
                    Le(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": u[1] || (u[1] = (y) => i.value = y)
                    }, null, 512), [
                      [fs, i.value]
                    ]),
                    u[11] || (u[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  u[12] || (u[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(G, { key: 3 }, [
                e("div", Rp, [
                  u[14] || (u[14] = e("span", { class: "icon" }, "📤", -1)),
                  g(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", Tp, [
                  u[15] || (u[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Mp, [
                    (s(!0), o(G, null, ne(t.preview.commits, (y) => (s(), o("div", {
                      key: y.hash,
                      class: "commit-item"
                    }, [
                      e("span", Dp, a(y.short_hash || y.hash.slice(0, 7)), 1),
                      e("span", Lp, a(y.message), 1),
                      e("span", zp, a(y.date_relative || y.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", Up, [
                  u[16] || (u[16] = e("span", { class: "icon" }, "✓", -1)),
                  g(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : r("", !0)
            ]),
            e("div", Np, [
              b(Z, {
                variant: "secondary",
                onClick: u[2] || (u[2] = (y) => p.$emit("close"))
              }, {
                default: l(() => [...u[17] || (u[17] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = t.preview) != null && m.remote_has_new_commits ? (s(), o(G, { key: 0 }, [
                b(Z, {
                  variant: "secondary",
                  onClick: u[3] || (u[3] = (y) => p.$emit("pull-first"))
                }, {
                  default: l(() => [...u[18] || (u[18] = [
                    g(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                b(Z, {
                  variant: "destructive",
                  disabled: !i.value,
                  loading: t.pushing,
                  onClick: u[4] || (u[4] = (y) => f(!0))
                }, {
                  default: l(() => [...u[19] || (u[19] = [
                    g(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), x(Z, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: u[5] || (u[5] = (y) => f(!1))
              }, {
                default: l(() => [...u[20] || (u[20] = [
                  g(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : r("", !0)
            ])
          ])
        ])) : r("", !0)
      ]);
    };
  }
}), Bp = /* @__PURE__ */ oe(Op, [["__scopeId", "data-v-bc6ded53"]]), Ap = { class: "resolution-choice-group" }, Fp = ["disabled"], Vp = ["disabled"], Wp = /* @__PURE__ */ ee({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("div", Ap, [
      e("button", {
        class: fe(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (i) => c.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, Fp),
      e("button", {
        class: fe(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (i) => c.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, Vp)
    ]));
  }
}), Gp = /* @__PURE__ */ oe(Wp, [["__scopeId", "data-v-985715ed"]]), jp = { class: "conflict-header" }, Kp = { class: "conflict-info" }, Hp = { class: "workflow-name" }, qp = { class: "conflict-description" }, Yp = {
  key: 0,
  class: "resolved-badge"
}, Jp = { class: "resolved-text" }, Xp = { class: "conflict-hashes" }, Qp = { class: "hash-item" }, Zp = { class: "hash-item" }, eg = { class: "conflict-actions" }, tg = /* @__PURE__ */ ee({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = w(n.resolution);
    it(() => n.resolution, (d) => {
      f.value = d;
    }), it(f, (d) => {
      d && i("resolve", d);
    });
    const p = U(() => f.value !== null), u = U(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), v = U(() => {
      switch (f.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (d, m) => {
      var y, _;
      return s(), o("div", {
        class: fe(["conflict-item", { resolved: p.value }])
      }, [
        e("div", jp, [
          m[2] || (m[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", Kp, [
            e("code", Hp, a(t.conflict.name) + ".json", 1),
            e("div", qp, a(u.value), 1)
          ]),
          p.value ? (s(), o("div", Yp, [
            m[1] || (m[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", Jp, a(v.value), 1)
          ])) : r("", !0)
        ]),
        e("div", Xp, [
          e("span", Qp, [
            m[3] || (m[3] = g("Your: ", -1)),
            e("code", null, a(((y = t.conflict.base_hash) == null ? void 0 : y.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", Zp, [
            m[4] || (m[4] = g("Theirs: ", -1)),
            e("code", null, a(((_ = t.conflict.target_hash) == null ? void 0 : _.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", eg, [
          b(Gp, {
            modelValue: f.value,
            "onUpdate:modelValue": m[0] || (m[0] = (k) => f.value = k),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), sg = /* @__PURE__ */ oe(tg, [["__scopeId", "data-v-506d3bbf"]]), og = { class: "resolution-content" }, ng = {
  key: 0,
  class: "error-box"
}, ag = { class: "resolution-header" }, lg = { class: "header-stats" }, ig = { class: "stat" }, rg = { class: "stat-value" }, dg = { class: "stat resolved" }, cg = { class: "stat-value" }, ug = {
  key: 0,
  class: "stat pending"
}, mg = { class: "stat-value" }, vg = { class: "conflicts-list" }, fg = {
  key: 1,
  class: "all-resolved-message"
}, pg = /* @__PURE__ */ ee({
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
    const n = t, i = c, f = U(() => n.resolutions.size), p = U(() => n.workflowConflicts.length - f.value), u = U(() => f.value === n.workflowConflicts.length), v = U(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(k) {
      const h = n.resolutions.get(k);
      return (h == null ? void 0 : h.resolution) ?? null;
    }
    function m(k, h) {
      i("resolve", k, h);
    }
    function y() {
      i("close");
    }
    function _() {
      i("apply");
    }
    return (k, h) => (s(), x(st, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: y
    }, {
      body: l(() => [
        e("div", og, [
          t.error ? (s(), o("div", ng, [
            h[1] || (h[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              h[0] || (h[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : r("", !0),
          e("div", ag, [
            e("div", lg, [
              e("div", ig, [
                e("span", rg, a(t.workflowConflicts.length), 1),
                h[2] || (h[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", dg, [
                e("span", cg, a(f.value), 1),
                h[3] || (h[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              p.value > 0 ? (s(), o("div", ug, [
                e("span", mg, a(p.value), 1),
                h[4] || (h[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : r("", !0)
            ]),
            h[5] || (h[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", vg, [
            (s(!0), o(G, null, ne(t.workflowConflicts, (E) => (s(), x(sg, {
              key: E.name,
              conflict: E,
              resolution: d(E.name),
              onResolve: (D) => m(E.name, D)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          u.value ? (s(), o("div", fg, [
            h[6] || (h[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(v.value) + '" to continue.', 1)
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        b(ye, {
          variant: "secondary",
          onClick: y
        }, {
          default: l(() => [...h[7] || (h[7] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        h[8] || (h[8] = e("div", { class: "footer-spacer" }, null, -1)),
        b(ye, {
          variant: "primary",
          disabled: !u.value || t.validating,
          loading: t.validating,
          onClick: _
        }, {
          default: l(() => [
            g(a(v.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), gg = /* @__PURE__ */ oe(pg, [["__scopeId", "data-v-c58d150d"]]), hg = { class: "node-conflict-item" }, yg = { class: "node-header" }, wg = { class: "node-name" }, kg = { class: "node-id" }, bg = { class: "version-comparison" }, _g = { class: "version yours" }, $g = { class: "version theirs" }, Cg = { class: "chosen-version" }, xg = { class: "chosen" }, Sg = { class: "chosen-reason" }, Ig = { class: "affected-workflows" }, Eg = { class: "wf-source" }, Pg = { class: "wf-version" }, Rg = /* @__PURE__ */ ee({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", hg, [
      e("div", yg, [
        e("code", wg, a(t.conflict.node_name), 1),
        e("span", kg, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", bg, [
        e("div", _g, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", $g, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", Cg, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", xg, a(t.conflict.chosen_version), 1),
        e("span", Sg, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", Ig, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (s(!0), o(G, null, ne(t.conflict.affected_workflows, (i) => (s(), o("li", {
            key: i.name
          }, [
            e("code", null, a(i.name), 1),
            e("span", Eg, "(" + a(i.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", Pg, "needs v" + a(i.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), Tg = /* @__PURE__ */ oe(Rg, [["__scopeId", "data-v-8b626725"]]), Mg = { class: "validation-content" }, Dg = {
  key: 0,
  class: "compatible-message"
}, Lg = { class: "conflicts-list" }, zg = {
  key: 2,
  class: "warnings-section"
}, Ug = /* @__PURE__ */ ee({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = U(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (p, u) => (s(), x(st, {
      title: "Compatibility Check",
      size: "lg",
      onClose: u[3] || (u[3] = (v) => i("cancel"))
    }, {
      body: l(() => [
        e("div", Mg, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (s(), o("div", Dg, [
            u[5] || (u[5] = e("span", { class: "icon" }, "✓", -1)),
            e("div", null, [
              u[4] || (u[4] = e("strong", null, "All clear!", -1)),
              e("p", null, "Your workflow choices are compatible. Ready to " + a(t.operationType) + ".", 1)
            ])
          ])) : t.validation.node_conflicts.length > 0 ? (s(), o(G, { key: 1 }, [
            u[6] || (u[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", Lg, [
              (s(!0), o(G, null, ne(t.validation.node_conflicts, (v) => (s(), x(Tg, {
                key: v.node_id,
                conflict: v
              }, null, 8, ["conflict"]))), 128))
            ]),
            u[7] || (u[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : r("", !0),
          t.validation.warnings.length > 0 ? (s(), o("div", zg, [
            u[8] || (u[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (s(!0), o(G, null, ne(t.validation.warnings, (v, d) => (s(), o("li", { key: d }, a(v), 1))), 128))
            ])
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        b(ye, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (v) => i("cancel"))
        }, {
          default: l(() => [...u[9] || (u[9] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u[11] || (u[11] = e("div", { class: "footer-spacer" }, null, -1)),
        b(ye, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (v) => i("goBack"))
        }, {
          default: l(() => [...u[10] || (u[10] = [
            g(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        b(ye, {
          variant: "primary",
          loading: t.executing,
          onClick: u[2] || (u[2] = (v) => i("proceed"))
        }, {
          default: l(() => [
            g(a(f.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), Ng = /* @__PURE__ */ oe(Ug, [["__scopeId", "data-v-fefd26ed"]]), Og = { key: 0 }, Bg = /* @__PURE__ */ ee({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: c }) {
    const n = c, {
      getRemotes: i,
      addRemote: f,
      removeRemote: p,
      updateRemoteUrl: u,
      fetchRemote: v,
      getRemoteSyncStatus: d,
      getPullPreview: m,
      pullFromRemote: y,
      getPushPreview: _,
      pushToRemote: k,
      validateMerge: h
    } = We(), E = w([]), D = w(null), $ = w({}), S = w(!1), V = w(null), R = w(""), C = w(!1), H = w(null), F = w(!1), j = w("add"), T = w({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), M = U(() => {
      if (!R.value.trim()) return E.value;
      const W = R.value.toLowerCase();
      return E.value.filter(
        (se) => se.name.toLowerCase().includes(W) || se.fetch_url.toLowerCase().includes(W) || se.push_url.toLowerCase().includes(W)
      );
    });
    async function A() {
      S.value = !0, V.value = null;
      try {
        const W = await i();
        E.value = W.remotes, D.value = W.current_branch_tracking || null, await Promise.all(
          W.remotes.map(async (se) => {
            const _e = await d(se.name);
            _e && ($.value[se.name] = _e);
          })
        );
      } catch (W) {
        V.value = W instanceof Error ? W.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function ie() {
      j.value = "add", T.value = { name: "", fetchUrl: "", pushUrl: "" }, F.value = !0;
    }
    function ae(W) {
      const se = E.value.find((_e) => _e.name === W);
      se && (j.value = "edit", T.value = {
        name: se.name,
        fetchUrl: se.fetch_url,
        pushUrl: se.push_url
      }, F.value = !0);
    }
    async function Q(W) {
      try {
        j.value === "add" ? await f(W.name, W.fetchUrl) : await u(W.name, W.fetchUrl, W.pushUrl || void 0), F.value = !1, await A();
      } catch (se) {
        V.value = se instanceof Error ? se.message : "Operation failed";
      }
    }
    function ve() {
      F.value = !1, T.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function X(W) {
      H.value = W;
      try {
        await v(W);
        const se = await d(W);
        se && ($.value[W] = se), n("toast", `✓ Fetched from ${W}`, "success");
      } catch (se) {
        n("toast", se instanceof Error ? se.message : "Fetch failed", "error");
      } finally {
        H.value = null;
      }
    }
    async function N(W) {
      if (confirm(`Remove remote "${W}"?`))
        try {
          await p(W), await A();
        } catch (se) {
          V.value = se instanceof Error ? se.message : "Failed to remove remote";
        }
    }
    function B() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const I = w("idle"), me = U(() => I.value === "pull_preview"), te = U(
      () => I.value === "resolving" || I.value === "validating"
    ), we = U(
      () => I.value === "validation_review" || I.value === "executing"
    ), be = w(!1), Te = w(null), De = w(!1), ce = w(null), he = w(!1), Pe = w(null), re = w(null), Y = w(/* @__PURE__ */ new Map()), Re = w(null), ge = w(null), Ke = U(() => Pe.value && oo(Pe.value) ? Pe.value : null);
    async function Xe(W) {
      ce.value = W, I.value = "pull_preview", he.value = !0, Pe.value = null, re.value = null;
      try {
        Pe.value = await m(W);
      } catch (se) {
        re.value = se instanceof Error ? se.message : "Failed to load pull preview";
      } finally {
        he.value = !1;
      }
    }
    function Qe() {
      I.value = "idle", Pe.value = null, re.value = null, ce.value = null;
    }
    async function Ie(W) {
      if (!ce.value) return;
      I.value = "executing", re.value = null;
      const se = ce.value;
      try {
        const _e = await y(se, W);
        if (_e.rolled_back) {
          re.value = `Pull failed and was rolled back: ${_e.error || "Unknown error"}`, I.value = "pull_preview";
          return;
        }
        je(), I.value = "idle", n("toast", `✓ Pulled from ${se}`, "success"), await A();
      } catch (_e) {
        re.value = _e instanceof Error ? _e.message : "Pull failed", I.value = "pull_preview";
      }
    }
    function He() {
      Ke.value && (I.value = "resolving", ge.value = null);
    }
    function Ge(W, se) {
      Y.value.set(W, { name: W, resolution: se });
    }
    function qe() {
      I.value = "pull_preview";
    }
    async function rt() {
      I.value = "validating", ge.value = null;
      try {
        const W = Array.from(Y.value.values());
        Re.value = await h(ce.value, W), I.value = "validation_review";
      } catch (W) {
        ge.value = W instanceof Error ? W.message : "Validation failed", I.value = "resolving";
      }
    }
    async function ke() {
      I.value = "executing";
      const W = ce.value;
      try {
        const se = Array.from(Y.value.values()), _e = await y(W, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: se
        });
        if (_e.rolled_back) {
          re.value = `Pull failed and was rolled back: ${_e.error || "Unknown error"}`, I.value = "pull_preview";
          return;
        }
        je(), I.value = "idle", n("toast", `✓ Pulled from ${W}`, "success"), await A();
      } catch (se) {
        re.value = se instanceof Error ? se.message : "Pull failed", I.value = "validation_review";
      }
    }
    function Ve() {
      I.value = "resolving";
    }
    function ot() {
      je(), I.value = "idle";
    }
    function je() {
      Y.value.clear(), Re.value = null, ge.value = null, re.value = null, Pe.value = null, ce.value = null;
    }
    async function de(W) {
      ce.value = W, be.value = !0, he.value = !0, Te.value = null;
      try {
        Te.value = await _(W);
      } catch (se) {
        V.value = se instanceof Error ? se.message : "Failed to load push preview";
      } finally {
        he.value = !1;
      }
    }
    function q() {
      be.value = !1, Te.value = null, ce.value = null;
    }
    async function J(W) {
      if (!ce.value) return;
      De.value = !0;
      const se = ce.value;
      try {
        await k(se, W), q(), n("toast", `✓ Pushed to ${se}`, "success"), await A();
      } catch (_e) {
        n("toast", _e instanceof Error ? _e.message : "Push failed", "error");
      } finally {
        De.value = !1;
      }
    }
    function P() {
      const W = ce.value;
      q(), W && Xe(W);
    }
    return Be(A), (W, se) => (s(), o(G, null, [
      b(et, null, {
        header: l(() => [
          b(tt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: se[0] || (se[0] = (_e) => C.value = !0)
          }, {
            actions: l(() => [
              F.value ? r("", !0) : (s(), x(Z, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: ie
              }, {
                default: l(() => [...se[3] || (se[3] = [
                  g(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          F.value ? r("", !0) : (s(), x(qt, {
            key: 0,
            modelValue: R.value,
            "onUpdate:modelValue": se[1] || (se[1] = (_e) => R.value = _e),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: l(() => [
          S.value ? (s(), x(Et, {
            key: 0,
            message: "Loading remotes..."
          })) : V.value ? (s(), x(Pt, {
            key: 1,
            message: V.value,
            retry: !0,
            onRetry: A
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            F.value ? (s(), x(Lf, {
              key: 0,
              mode: j.value,
              "remote-name": T.value.name,
              "fetch-url": T.value.fetchUrl,
              "push-url": T.value.pushUrl,
              onSubmit: Q,
              onCancel: ve
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : r("", !0),
            E.value.length && !F.value ? (s(), x(ds, {
              key: 1,
              variant: "compact"
            }, {
              default: l(() => [
                g(" Total: " + a(E.value.length) + " remote" + a(E.value.length !== 1 ? "s" : "") + " ", 1),
                D.value ? (s(), o("span", Og, " • Tracking: " + a(D.value.remote) + "/" + a(D.value.branch), 1)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            M.value.length && !F.value ? (s(), x(Ue, {
              key: 2,
              title: "REMOTES",
              count: M.value.length
            }, {
              default: l(() => [
                (s(!0), o(G, null, ne(M.value, (_e) => (s(), x(bf, {
                  key: _e.name,
                  remote: _e,
                  "sync-status": $.value[_e.name],
                  "fetching-remote": H.value,
                  onFetch: X,
                  onEdit: ae,
                  onRemove: N,
                  onPull: Xe,
                  onPush: de
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !M.value.length && !F.value ? (s(), x(ht, {
              key: 3,
              icon: "🌐",
              message: R.value ? `No remotes match '${R.value}'` : "No remotes configured."
            }, {
              actions: l(() => [
                b(Z, {
                  variant: "primary",
                  onClick: ie
                }, {
                  default: l(() => [...se[4] || (se[4] = [
                    g(" Add Your First Remote ", -1)
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
      b(yt, {
        show: C.value,
        title: "About Git Remotes",
        onClose: se[2] || (se[2] = (_e) => C.value = !1)
      }, {
        content: l(() => [...se[5] || (se[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            g(" The "),
            e("strong", null, '"origin"'),
            g(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: l(() => [
          b(Z, {
            variant: "link",
            onClick: B
          }, {
            default: l(() => [...se[6] || (se[6] = [
              g(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b(hp, {
        show: me.value,
        "remote-name": ce.value || "",
        preview: Pe.value,
        loading: he.value,
        pulling: I.value === "executing",
        error: re.value,
        "conflict-resolutions": Y.value,
        onClose: Qe,
        onPull: Ie,
        onOpenConflictResolution: He
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      b(Bp, {
        show: be.value,
        "remote-name": ce.value || "",
        preview: Te.value,
        loading: he.value,
        pushing: De.value,
        onClose: q,
        onPush: J,
        onPullFirst: P
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      te.value && Ke.value ? (s(), x(gg, {
        key: 0,
        "workflow-conflicts": Ke.value.workflow_conflicts,
        resolutions: Y.value,
        "operation-type": "pull",
        validating: I.value === "validating",
        error: ge.value,
        onClose: qe,
        onResolve: Ge,
        onApply: rt
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : r("", !0),
      we.value && Re.value ? (s(), x(Ng, {
        key: 1,
        validation: Re.value,
        "operation-type": "pull",
        executing: I.value === "executing",
        onProceed: ke,
        onGoBack: Ve,
        onCancel: ot
      }, null, 8, ["validation", "executing"])) : r("", !0)
    ], 64));
  }
}), Ag = /* @__PURE__ */ oe(Bg, [["__scopeId", "data-v-9ae3b76d"]]), Fg = { class: "setting-info" }, Vg = { class: "setting-label" }, Wg = {
  key: 0,
  class: "required-marker"
}, Gg = {
  key: 0,
  class: "setting-description"
}, jg = { class: "setting-control" }, Kg = /* @__PURE__ */ ee({
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
      e("div", Fg, [
        e("div", Vg, [
          g(a(t.label) + " ", 1),
          t.required ? (s(), o("span", Wg, "*")) : r("", !0)
        ]),
        t.description ? (s(), o("div", Gg, a(t.description), 1)) : r("", !0)
      ]),
      e("div", jg, [
        Ee(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), $s = /* @__PURE__ */ oe(Kg, [["__scopeId", "data-v-cb5d236c"]]), Hg = { class: "toggle" }, qg = ["checked", "disabled"], Yg = /* @__PURE__ */ ee({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", Hg, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, qg),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Jg = /* @__PURE__ */ oe(Yg, [["__scopeId", "data-v-71c0f550"]]), Xg = { class: "workspace-settings-content" }, Qg = { class: "settings-section" }, Zg = { class: "path-setting" }, eh = { class: "path-value" }, th = { class: "path-setting" }, sh = { class: "path-value" }, oh = { class: "settings-section" }, nh = { class: "settings-section" }, ah = { class: "settings-section" }, lh = /* @__PURE__ */ ee({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(t, { expose: c, emit: n }) {
    const i = t, f = n, { getConfig: p, updateConfig: u } = We(), v = w(!1), d = w(null), m = w(null), y = w(null), _ = w(null), k = w(""), h = w(""), E = w(!1);
    function D(F) {
      return F.join(" ");
    }
    function $(F) {
      return F.trim() ? F.trim().split(/\s+/) : [];
    }
    const S = U(() => {
      if (!_.value) return !1;
      const F = k.value !== (_.value.civitai_api_key || ""), j = h.value !== D(_.value.comfyui_extra_args || []);
      return F || j;
    });
    async function V() {
      v.value = !0, d.value = null;
      try {
        y.value = await p(i.workspacePath || void 0), _.value = { ...y.value }, k.value = y.value.civitai_api_key || "", h.value = D(y.value.comfyui_extra_args || []);
        const F = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        E.value = F === "true";
      } catch (F) {
        d.value = F instanceof Error ? F.message : "Failed to load settings";
      } finally {
        v.value = !1;
      }
    }
    async function R() {
      var F, j;
      m.value = null;
      try {
        const T = {};
        k.value !== (((F = _.value) == null ? void 0 : F.civitai_api_key) || "") && (T.civitai_api_key = k.value || null), h.value !== D(((j = _.value) == null ? void 0 : j.comfyui_extra_args) || []) && (T.comfyui_extra_args = $(h.value)), await u(T, i.workspacePath || void 0), await V(), m.value = { type: "success", message: "Settings saved successfully" }, f("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (T) {
        const M = T instanceof Error ? T.message : "Failed to save settings";
        m.value = { type: "error", message: M }, f("error", M);
      }
    }
    function C() {
      _.value && (k.value = _.value.civitai_api_key || "", h.value = D(_.value.comfyui_extra_args || []), m.value = null);
    }
    function H(F) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(F)), console.log("[ComfyGit] Auto-refresh setting saved:", F);
    }
    return c({
      saveSettings: R,
      resetSettings: C,
      hasChanges: S,
      loadSettings: V
    }), Be(V), (F, j) => (s(), o("div", Xg, [
      v.value ? (s(), x(Et, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (s(), x(Pt, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: V
      }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
        b(Ue, { title: "WORKSPACE PATHS" }, {
          default: l(() => {
            var T, M;
            return [
              e("div", Qg, [
                e("div", Zg, [
                  j[3] || (j[3] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                  j[4] || (j[4] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  e("div", eh, a(((T = y.value) == null ? void 0 : T.workspace_path) || "Loading..."), 1)
                ]),
                e("div", th, [
                  j[5] || (j[5] = e("div", { class: "path-label" }, "Models Directory", -1)),
                  j[6] || (j[6] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  e("div", sh, a(((M = y.value) == null ? void 0 : M.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        b(Ue, { title: "API CREDENTIALS" }, {
          default: l(() => [
            e("div", oh, [
              b($s, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: l(() => [
                  b(ps, {
                    modelValue: k.value,
                    "onUpdate:modelValue": j[0] || (j[0] = (T) => k.value = T),
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
        b(Ue, { title: "COMFYUI SETTINGS" }, {
          default: l(() => [
            e("div", nh, [
              b($s, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: l(() => [
                  b(ps, {
                    modelValue: h.value,
                    "onUpdate:modelValue": j[1] || (j[1] = (T) => h.value = T),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              j[7] || (j[7] = e("div", { class: "setting-hint" }, [
                g(" Common flags: "),
                e("code", null, "--lowvram"),
                g(", "),
                e("code", null, "--highvram"),
                g(", "),
                e("code", null, "--listen 0.0.0.0"),
                g(", "),
                e("code", null, "--cuda-device 1")
              ], -1))
            ])
          ]),
          _: 1
        }),
        b(Ue, { title: "UI SETTINGS" }, {
          default: l(() => [
            e("div", ah, [
              b($s, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: l(() => [
                  b(Jg, {
                    modelValue: E.value,
                    "onUpdate:modelValue": [
                      j[2] || (j[2] = (T) => E.value = T),
                      H
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        m.value ? (s(), x(ds, {
          key: 0,
          variant: (m.value.type === "success", "compact")
        }, {
          default: l(() => [
            e("span", {
              style: It({ color: m.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, a(m.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : r("", !0)
      ], 64))
    ]));
  }
}), no = /* @__PURE__ */ oe(lh, [["__scopeId", "data-v-9f44552d"]]), ih = /* @__PURE__ */ ee({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const c = w(null);
    function n() {
      console.log("[ComfyGit] Settings saved");
    }
    return (i, f) => (s(), x(et, null, {
      header: l(() => [
        b(tt, { title: "WORKSPACE SETTINGS" }, {
          actions: l(() => {
            var p, u;
            return [
              b(Z, {
                variant: "primary",
                size: "sm",
                disabled: !((p = c.value) != null && p.hasChanges),
                onClick: f[0] || (f[0] = (v) => {
                  var d;
                  return (d = c.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: l(() => [...f[2] || (f[2] = [
                  g(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (u = c.value) != null && u.hasChanges ? (s(), x(Z, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: f[1] || (f[1] = (v) => {
                  var d;
                  return (d = c.value) == null ? void 0 : d.resetSettings();
                })
              }, {
                default: l(() => [...f[3] || (f[3] = [
                  g(" Reset ", -1)
                ])]),
                _: 1
              })) : r("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: l(() => [
        b(no, {
          ref_key: "contentRef",
          ref: c,
          onSaved: n
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), rh = { class: "base-tabs" }, dh = ["disabled", "onClick"], ch = {
  key: 0,
  class: "base-tabs__badge"
}, uh = /* @__PURE__ */ ee({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: c }) {
    const n = t, i = c;
    function f(p) {
      var u;
      (u = n.tabs.find((v) => v.id === p)) != null && u.disabled || i("update:modelValue", p);
    }
    return (p, u) => (s(), o("div", rh, [
      (s(!0), o(G, null, ne(t.tabs, (v) => (s(), o("button", {
        key: v.id,
        class: fe([
          "base-tabs__tab",
          {
            active: t.modelValue === v.id,
            disabled: v.disabled
          }
        ]),
        disabled: v.disabled,
        onClick: (d) => f(v.id)
      }, [
        g(a(v.label) + " ", 1),
        v.badge ? (s(), o("span", ch, a(v.badge), 1)) : r("", !0)
      ], 10, dh))), 128))
    ]));
  }
}), ao = /* @__PURE__ */ oe(uh, [["__scopeId", "data-v-ad5e6cad"]]), mh = { class: "log-viewer-wrapper" }, vh = ["disabled", "title"], fh = /* @__PURE__ */ ee({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(t) {
    const c = t, n = w(null), i = w("idle"), f = U(() => c.logs.map((m) => ({
      text: c.rawFormat || !m.timestamp ? m.message : `${m.timestamp} - ${m.name} - ${m.level} - ${m.func}:${m.line} - ${m.message}`,
      level: m.level
    })));
    async function p() {
      var y;
      await Ys();
      const m = (y = n.value) == null ? void 0 : y.closest(".panel-layout-content");
      m && (m.scrollTop = m.scrollHeight);
    }
    Be(p), it(() => c.logs, p);
    async function u() {
      if (f.value.length === 0) return;
      const m = f.value.map((y) => y.text).join(`
`);
      try {
        await navigator.clipboard.writeText(m), i.value = "copied", setTimeout(() => {
          i.value = "idle";
        }, 2e3);
      } catch (y) {
        console.error("Failed to copy logs:", y);
      }
    }
    function v(m) {
      (m.ctrlKey || m.metaKey) && m.key === "c" && m.stopPropagation();
    }
    function d(m) {
      m.stopPropagation();
    }
    return (m, y) => (s(), o("div", mh, [
      e("div", {
        ref_key: "logOutputElement",
        ref: n,
        class: "log-output",
        onKeydown: v,
        onCopy: d,
        tabindex: "0"
      }, [
        e("button", {
          class: "copy-overlay-btn",
          onClick: u,
          disabled: i.value !== "idle",
          title: i.value === "copied" ? "Copied!" : "Copy all logs"
        }, a(i.value === "copied" ? "Copied!" : "Copy"), 9, vh),
        (s(!0), o(G, null, ne(f.value, (_, k) => (s(), o("div", {
          key: k,
          class: fe(`log-line log-level-${_.level.toLowerCase()}`)
        }, a(_.text), 3))), 128))
      ], 544)
    ]));
  }
}), lo = /* @__PURE__ */ oe(fh, [["__scopeId", "data-v-c0cc6d21"]]), ph = /* @__PURE__ */ ee({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const {
      getWorkspaceLogs: c,
      getWorkspaceLogPath: n,
      getOrchestratorLogs: i,
      getOrchestratorLogPath: f,
      openFile: p
    } = We(), u = w("workspace"), v = w([]), d = w(!1), m = w(null), y = w(!1), _ = w(null), k = w(null), h = w(!1), E = U(() => u.value === "workspace" ? _.value : k.value);
    async function D() {
      d.value = !0, m.value = null;
      try {
        u.value === "workspace" ? v.value = await c(void 0, 500) : v.value = await i(void 0, 500);
      } catch (V) {
        m.value = V instanceof Error ? V.message : `Failed to load ${u.value} logs`;
      } finally {
        d.value = !1;
      }
    }
    async function $() {
      try {
        const [V, R] = await Promise.all([
          n(),
          f()
        ]);
        V.exists && (_.value = V.path), R.exists && (k.value = R.path);
      } catch {
      }
    }
    async function S() {
      if (E.value) {
        h.value = !0;
        try {
          await p(E.value);
        } catch (V) {
          console.error("Failed to open log file:", V);
        } finally {
          h.value = !1;
        }
      }
    }
    return it(u, () => {
      D();
    }), Be(() => {
      D(), $();
    }), (V, R) => (s(), o(G, null, [
      b(et, null, {
        header: l(() => [
          b(tt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (C) => y.value = !0)
          }, {
            actions: l(() => [
              b(Z, {
                variant: "secondary",
                size: "sm",
                onClick: S,
                disabled: !E.value || h.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  g(a(h.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(Z, {
                variant: "secondary",
                size: "sm",
                onClick: D,
                disabled: d.value
              }, {
                default: l(() => [
                  g(a(d.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          b(ao, {
            modelValue: u.value,
            "onUpdate:modelValue": R[1] || (R[1] = (C) => u.value = C),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          d.value ? (s(), x(Et, {
            key: 0,
            message: `Loading ${u.value} logs...`
          }, null, 8, ["message"])) : m.value ? (s(), x(Pt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            v.value.length === 0 ? (s(), x(ht, {
              key: 0,
              icon: "📝",
              message: `No ${u.value} logs available`
            }, null, 8, ["message"])) : (s(), x(lo, {
              key: 1,
              logs: v.value,
              "raw-format": u.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      b(yt, {
        show: y.value,
        title: "About Logs",
        onClose: R[3] || (R[3] = (C) => y.value = !1)
      }, {
        content: l(() => [...R[4] || (R[4] = [
          e("p", null, [
            e("strong", null, "Workspace Logs:"),
            g(" System-level events for the entire ComfyGit workspace, including operations that affect multiple environments. ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Orchestrator Logs:"),
            g(" Process management events including ComfyUI startup, restarts, environment switches, and any errors during handoff. ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            g(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            g(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            g(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            g(" Detailed debugging information ")
          ], -1)
        ])]),
        actions: l(() => [
          b(Z, {
            variant: "primary",
            onClick: R[2] || (R[2] = (C) => y.value = !1)
          }, {
            default: l(() => [...R[5] || (R[5] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), gh = /* @__PURE__ */ ee({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n, getEnvironmentLogPath: i, openFile: f } = We(), p = w([]), u = w(!1), v = w(null), d = w(!1), m = w("production"), y = w(null), _ = w(!1);
    async function k() {
      u.value = !0, v.value = null;
      try {
        p.value = await c(void 0, 500);
        try {
          const D = await n();
          m.value = D.environment || "production";
        } catch {
        }
      } catch (D) {
        v.value = D instanceof Error ? D.message : "Failed to load environment logs";
      } finally {
        u.value = !1;
      }
    }
    async function h() {
      try {
        const D = await i();
        D.exists && (y.value = D.path);
      } catch {
      }
    }
    async function E() {
      if (y.value) {
        _.value = !0;
        try {
          await f(y.value);
        } catch (D) {
          console.error("Failed to open log file:", D);
        } finally {
          _.value = !1;
        }
      }
    }
    return Be(() => {
      k(), h();
    }), (D, $) => (s(), o(G, null, [
      b(et, null, {
        header: l(() => [
          b(tt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (S) => d.value = !0)
          }, {
            actions: l(() => [
              b(Z, {
                variant: "secondary",
                size: "sm",
                onClick: E,
                disabled: !y.value || _.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  g(a(_.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(Z, {
                variant: "secondary",
                size: "sm",
                onClick: k,
                disabled: u.value
              }, {
                default: l(() => [
                  g(a(u.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          u.value ? (s(), x(Et, {
            key: 0,
            message: "Loading environment logs..."
          })) : v.value ? (s(), x(Pt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: k
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            p.value.length === 0 ? (s(), x(ht, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), x(lo, {
              key: 1,
              logs: p.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 1
      }),
      b(yt, {
        show: d.value,
        title: "About Environment Logs",
        onClose: $[2] || ($[2] = (S) => d.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            $[3] || ($[3] = g(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(m.value), 1),
            $[4] || ($[4] = g(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          $[5] || ($[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            g(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            g(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            g(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            g(" Detailed debugging information ")
          ], -1))
        ]),
        actions: l(() => [
          b(Z, {
            variant: "primary",
            onClick: $[1] || ($[1] = (S) => d.value = !1)
          }, {
            default: l(() => [...$[6] || ($[6] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), hh = { class: "env-title" }, yh = {
  key: 0,
  class: "current-badge"
}, wh = {
  key: 0,
  class: "branch-info"
}, kh = /* @__PURE__ */ ee({
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
    return (c, n) => (s(), x(Ze, {
      status: t.isCurrent ? "synced" : void 0
    }, At({
      icon: l(() => [
        g(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: l(() => [
        e("div", hh, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", yh, "CURRENT")) : r("", !0)
        ])
      ]),
      subtitle: l(() => [
        t.currentBranch ? (s(), o("span", wh, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          g(" " + a(t.currentBranch), 1)
        ])) : r("", !0)
      ]),
      actions: l(() => [
        Ee(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: l(() => [
          b(Fe, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          b(Fe, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          b(Fe, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), x(Fe, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : r("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), bh = /* @__PURE__ */ oe(kh, [["__scopeId", "data-v-9231917a"]]), _h = { class: "env-details" }, $h = { class: "status-row" }, Ch = {
  key: 0,
  class: "detail-row"
}, xh = { class: "value mono" }, Sh = {
  key: 1,
  class: "detail-row"
}, Ih = { class: "value mono small" }, Eh = { class: "detail-row" }, Ph = { class: "value" }, Rh = { class: "detail-row" }, Th = { class: "value" }, Mh = { class: "detail-row" }, Dh = { class: "value" }, Lh = {
  key: 2,
  class: "section-divider"
}, zh = {
  key: 3,
  class: "detail-row"
}, Uh = { class: "value" }, Nh = {
  key: 4,
  class: "detail-row"
}, Oh = { class: "value" }, Bh = { class: "footer-actions" }, Ah = /* @__PURE__ */ ee({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: c }) {
    const n = c;
    function i(f) {
      if (!f) return "Unknown";
      try {
        const p = new Date(f), v = (/* @__PURE__ */ new Date()).getTime() - p.getTime(), d = Math.floor(v / 6e4), m = Math.floor(v / 36e5), y = Math.floor(v / 864e5);
        return d < 1 ? "just now" : d < 60 ? `${d} ${d === 1 ? "minute" : "minutes"} ago` : m < 24 ? `${m} ${m === 1 ? "hour" : "hours"} ago` : y < 30 ? `${y} ${y === 1 ? "day" : "days"} ago` : p.toLocaleDateString();
      } catch {
        return f;
      }
    }
    return (f, p) => (s(), x(st, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: p[2] || (p[2] = (u) => n("close"))
    }, {
      body: l(() => [
        e("div", _h, [
          e("div", $h, [
            p[3] || (p[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: fe(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", Ch, [
            p[4] || (p[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", xh, a(t.environment.current_branch), 1)
          ])) : r("", !0),
          t.environment.path ? (s(), o("div", Sh, [
            p[5] || (p[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", Ih, a(t.environment.path), 1)
          ])) : r("", !0),
          p[11] || (p[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Eh, [
            p[6] || (p[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", Ph, a(t.environment.workflow_count), 1)
          ]),
          e("div", Rh, [
            p[7] || (p[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Th, a(t.environment.node_count), 1)
          ]),
          e("div", Mh, [
            p[8] || (p[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Dh, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", Lh)) : r("", !0),
          t.environment.created_at ? (s(), o("div", zh, [
            p[9] || (p[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", Uh, a(i(t.environment.created_at)), 1)
          ])) : r("", !0),
          t.environment.last_used ? (s(), o("div", Nh, [
            p[10] || (p[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", Oh, a(i(t.environment.last_used)), 1)
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        e("div", Bh, [
          t.canDelete ? (s(), x(ye, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: p[0] || (p[0] = (u) => n("delete", t.environment.name))
          }, {
            default: l(() => [...p[12] || (p[12] = [
              g(" Delete ", -1)
            ])]),
            _: 1
          })) : r("", !0),
          p[14] || (p[14] = e("div", { class: "footer-spacer" }, null, -1)),
          b(ye, {
            variant: "secondary",
            size: "sm",
            onClick: p[1] || (p[1] = (u) => n("close"))
          }, {
            default: l(() => [...p[13] || (p[13] = [
              g(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Fh = /* @__PURE__ */ oe(Ah, [["__scopeId", "data-v-59855453"]]), io = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], ro = "3.12", zs = [
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
], co = "auto", Vh = { class: "progress-bar" }, Wh = /* @__PURE__ */ ee({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, n = U(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (i, f) => (s(), o("div", Vh, [
      e("div", {
        class: fe(["progress-fill", t.variant]),
        style: It({ width: n.value })
      }, null, 6)
    ]));
  }
}), ks = /* @__PURE__ */ oe(Wh, [["__scopeId", "data-v-1beb0512"]]), Gh = { class: "task-progress" }, jh = { class: "progress-info" }, Kh = { class: "progress-percentage" }, Hh = { class: "progress-message" }, qh = {
  key: 0,
  class: "progress-steps"
}, Yh = { class: "step-icon" }, Jh = { class: "step-label" }, Xh = /* @__PURE__ */ ee({
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
    function n(f) {
      const p = c.steps.find((u) => u.id === f);
      return p ? c.progress >= p.progressThreshold ? "completed" : c.currentPhase === f ? "active" : "pending" : "pending";
    }
    function i(f) {
      const p = n(f);
      return p === "completed" ? "✓" : p === "active" ? "⟳" : "○";
    }
    return (f, p) => (s(), o("div", Gh, [
      b(ks, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", jh, [
        e("span", Kh, a(t.progress) + "%", 1),
        e("span", Hh, a(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", qh, [
        (s(!0), o(G, null, ne(t.steps, (u) => (s(), o("div", {
          key: u.id,
          class: fe(["step", n(u.id)])
        }, [
          e("span", Yh, a(i(u.id)), 1),
          e("span", Jh, a(u.label), 1)
        ], 2))), 128))
      ])) : r("", !0)
    ]));
  }
}), hs = /* @__PURE__ */ oe(Xh, [["__scopeId", "data-v-9d1de66c"]]), Qh = {
  key: 0,
  class: "create-env-form"
}, Zh = { class: "form-field" }, e1 = { class: "form-field" }, t1 = ["value"], s1 = { class: "form-field" }, o1 = ["disabled"], n1 = ["value"], a1 = { class: "form-field" }, l1 = ["value"], i1 = { class: "form-field form-field--checkbox" }, r1 = { class: "form-checkbox" }, d1 = {
  key: 1,
  class: "create-env-progress"
}, c1 = { class: "creating-intro" }, u1 = {
  key: 0,
  class: "progress-warning"
}, m1 = {
  key: 1,
  class: "create-error"
}, v1 = { class: "error-message" }, f1 = {
  key: 1,
  class: "footer-status"
}, p1 = 10, g1 = /* @__PURE__ */ ee({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: c }) {
    const n = c, { getComfyUIReleases: i, createEnvironment: f, getCreateProgress: p } = We(), u = w(""), v = w(ro), d = w("latest"), m = w(co), y = w(!1), _ = w([{ tag_name: "latest", name: "Latest", published_at: "" }]), k = w(!1), h = w(!1), E = w({
      progress: 0,
      message: ""
    });
    let D = null, $ = 0;
    const S = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], V = w(null);
    function R() {
      h.value || n("close");
    }
    async function C() {
      const M = u.value.trim();
      if (M) {
        h.value = !0, E.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const A = {
            name: M,
            python_version: v.value,
            comfyui_version: d.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, ie = await f(A);
          ie.status === "started" ? H() : ie.status === "error" && (E.value = {
            progress: 0,
            message: ie.message || "Failed to start creation",
            error: ie.message
          });
        } catch (A) {
          E.value = {
            progress: 0,
            message: A instanceof Error ? A.message : "Unknown error",
            error: A instanceof Error ? A.message : "Unknown error"
          };
        }
      }
    }
    function H() {
      D || ($ = 0, D = window.setInterval(async () => {
        try {
          const M = await p();
          $ = 0, E.value = {
            progress: M.progress ?? 0,
            message: M.message,
            phase: M.phase,
            error: M.error
          }, M.state === "complete" ? (F(), n("created", M.environment_name || u.value.trim(), y.value)) : M.state === "error" ? (F(), E.value.error = M.error || M.message) : M.state === "idle" && h.value && (F(), E.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= p1 && (F(), E.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function F() {
      D && (clearInterval(D), D = null);
    }
    function j() {
      h.value = !1, E.value = { progress: 0, message: "" }, n("close");
    }
    async function T() {
      k.value = !0;
      try {
        _.value = await i();
      } catch (M) {
        console.error("Failed to load ComfyUI releases:", M);
      } finally {
        k.value = !1;
      }
    }
    return Be(async () => {
      var M;
      await Ys(), (M = V.value) == null || M.focus(), T();
    }), ws(() => {
      F();
    }), (M, A) => (s(), x(st, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !h.value,
      onClose: R
    }, {
      body: l(() => [
        h.value ? (s(), o("div", d1, [
          e("p", c1, [
            A[11] || (A[11] = g(" Creating environment ", -1)),
            e("strong", null, a(u.value), 1),
            A[12] || (A[12] = g("... ", -1))
          ]),
          b(hs, {
            progress: E.value.progress,
            message: E.value.message,
            "current-phase": E.value.phase,
            variant: E.value.error ? "error" : "default",
            "show-steps": !0,
            steps: S
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          E.value.error ? r("", !0) : (s(), o("p", u1, " This may take several minutes. Please wait... ")),
          E.value.error ? (s(), o("div", m1, [
            e("p", v1, a(E.value.error), 1)
          ])) : r("", !0)
        ])) : (s(), o("div", Qh, [
          e("div", Zh, [
            A[6] || (A[6] = e("label", { class: "form-label" }, "Name", -1)),
            Le(e("input", {
              ref_key: "nameInput",
              ref: V,
              "onUpdate:modelValue": A[0] || (A[0] = (ie) => u.value = ie),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: $t(C, ["enter"])
            }, null, 544), [
              [Bt, u.value]
            ])
          ]),
          e("div", e1, [
            A[7] || (A[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Le(e("select", {
              "onUpdate:modelValue": A[1] || (A[1] = (ie) => v.value = ie),
              class: "form-select"
            }, [
              (s(!0), o(G, null, ne($e(io), (ie) => (s(), o("option", {
                key: ie,
                value: ie
              }, a(ie), 9, t1))), 128))
            ], 512), [
              [St, v.value]
            ])
          ]),
          e("div", s1, [
            A[8] || (A[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Le(e("select", {
              "onUpdate:modelValue": A[2] || (A[2] = (ie) => d.value = ie),
              class: "form-select",
              disabled: k.value
            }, [
              (s(!0), o(G, null, ne(_.value, (ie) => (s(), o("option", {
                key: ie.tag_name,
                value: ie.tag_name
              }, a(ie.name), 9, n1))), 128))
            ], 8, o1), [
              [St, d.value]
            ])
          ]),
          e("div", a1, [
            A[9] || (A[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Le(e("select", {
              "onUpdate:modelValue": A[3] || (A[3] = (ie) => m.value = ie),
              class: "form-select"
            }, [
              (s(!0), o(G, null, ne($e(zs), (ie) => (s(), o("option", {
                key: ie,
                value: ie
              }, a(ie) + a(ie === "auto" ? " (detect GPU)" : ""), 9, l1))), 128))
            ], 512), [
              [St, m.value]
            ])
          ]),
          e("div", i1, [
            e("label", r1, [
              Le(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": A[4] || (A[4] = (ie) => y.value = ie)
              }, null, 512), [
                [fs, y.value]
              ]),
              A[10] || (A[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: l(() => [
        h.value ? (s(), o(G, { key: 1 }, [
          E.value.error ? (s(), x(ye, {
            key: 0,
            variant: "secondary",
            onClick: j
          }, {
            default: l(() => [...A[15] || (A[15] = [
              g(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", f1, " Creating environment... "))
        ], 64)) : (s(), o(G, { key: 0 }, [
          b(ye, {
            variant: "primary",
            disabled: !u.value.trim(),
            onClick: C
          }, {
            default: l(() => [...A[13] || (A[13] = [
              g(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(ye, {
            variant: "secondary",
            onClick: A[5] || (A[5] = (ie) => n("close"))
          }, {
            default: l(() => [...A[14] || (A[14] = [
              g(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), h1 = /* @__PURE__ */ oe(g1, [["__scopeId", "data-v-f37eaa42"]]), y1 = /* @__PURE__ */ ee({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getEnvironments: f } = We(), p = w([]), u = w(!1), v = w(null), d = w(""), m = w(!1), y = w(!1), _ = w(null), k = U(() => {
      if (!d.value.trim()) return p.value;
      const V = d.value.toLowerCase();
      return p.value.filter(
        (R) => {
          var C;
          return R.name.toLowerCase().includes(V) || ((C = R.current_branch) == null ? void 0 : C.toLowerCase().includes(V));
        }
      );
    });
    function h(V, R) {
      y.value = !1, i("created", V, R);
    }
    function E() {
      y.value = !0;
    }
    function D(V) {
      _.value = V;
    }
    function $(V) {
      _.value = null, i("delete", V);
    }
    async function S() {
      u.value = !0, v.value = null;
      try {
        p.value = await f();
      } catch (V) {
        v.value = V instanceof Error ? V.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return Be(S), c({
      loadEnvironments: S,
      openCreateModal: E
    }), (V, R) => (s(), o(G, null, [
      b(et, null, {
        header: l(() => [
          b(tt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (C) => m.value = !0)
          }, {
            actions: l(() => [
              b(Z, {
                variant: "primary",
                size: "sm",
                onClick: E
              }, {
                default: l(() => [...R[6] || (R[6] = [
                  g(" Create ", -1)
                ])]),
                _: 1
              }),
              b(Z, {
                variant: "secondary",
                size: "sm",
                onClick: S
              }, {
                default: l(() => [...R[7] || (R[7] = [
                  g(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          b(qt, {
            modelValue: d.value,
            "onUpdate:modelValue": R[1] || (R[1] = (C) => d.value = C),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value ? (s(), x(Et, {
            key: 0,
            message: "Loading environments..."
          })) : v.value ? (s(), x(Pt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (s(), o(G, { key: 2 }, [
            k.value.length ? (s(), x(Ue, {
              key: 0,
              title: "ENVIRONMENTS",
              count: k.value.length
            }, {
              default: l(() => [
                (s(!0), o(G, null, ne(k.value, (C) => (s(), x(bh, {
                  key: C.name,
                  "environment-name": C.name,
                  "is-current": C.is_current,
                  "current-branch": C.current_branch,
                  "show-last-used": !1
                }, {
                  actions: l(() => [
                    C.is_current ? r("", !0) : (s(), x(Z, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (H) => V.$emit("switch", C.name)
                    }, {
                      default: l(() => [...R[8] || (R[8] = [
                        g(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    b(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (H) => D(C)
                    }, {
                      default: l(() => [...R[9] || (R[9] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            k.value.length ? r("", !0) : (s(), x(ht, {
              key: 1,
              icon: "🌍",
              message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
            }, At({ _: 2 }, [
              d.value ? void 0 : {
                name: "actions",
                fn: l(() => [
                  b(Z, {
                    variant: "primary",
                    onClick: E
                  }, {
                    default: l(() => [...R[10] || (R[10] = [
                      g(" Create Environment ", -1)
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
      b(yt, {
        show: m.value,
        title: "About Environments",
        onClose: R[3] || (R[3] = (C) => m.value = !1)
      }, {
        content: l(() => [...R[11] || (R[11] = [
          e("p", null, [
            e("strong", null, "Environments"),
            g(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
          b(Z, {
            variant: "secondary",
            onClick: R[2] || (R[2] = (C) => m.value = !1)
          }, {
            default: l(() => [...R[12] || (R[12] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (s(), x(Fh, {
        key: 0,
        environment: _.value,
        "can-delete": p.value.length > 1,
        onClose: R[4] || (R[4] = (C) => _.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : r("", !0),
      y.value ? (s(), x(h1, {
        key: 1,
        onClose: R[5] || (R[5] = (C) => y.value = !1),
        onCreated: h
      })) : r("", !0)
    ], 64));
  }
}), w1 = /* @__PURE__ */ oe(y1, [["__scopeId", "data-v-f95999f4"]]), k1 = { class: "file-path" }, b1 = { class: "file-path-text" }, _1 = ["title"], $1 = /* @__PURE__ */ ee({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = w(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(c.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (f) {
        console.error("Failed to copy:", f);
      }
    }
    return (f, p) => (s(), o("div", k1, [
      p[0] || (p[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", b1, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: i
      }, a(n.value ? "✓" : "📋"), 9, _1)) : r("", !0)
    ]));
  }
}), C1 = /* @__PURE__ */ oe($1, [["__scopeId", "data-v-f0982173"]]), x1 = { class: "export-blocked" }, S1 = { class: "issues-list" }, I1 = { class: "issue-message" }, E1 = {
  key: 0,
  class: "issue-details"
}, P1 = ["onClick"], R1 = { class: "issue-fix" }, T1 = /* @__PURE__ */ ee({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(t) {
    const c = t, n = ys({});
    function i(f) {
      const p = c.issues[f];
      return n[f] || p.details.length <= 3 ? p.details : p.details.slice(0, 3);
    }
    return (f, p) => (s(), x(st, {
      title: "Cannot Export",
      size: "md",
      onClose: p[1] || (p[1] = (u) => f.$emit("close"))
    }, {
      body: l(() => [
        e("div", x1, [
          p[2] || (p[2] = e("div", { class: "error-header" }, [
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
          e("div", S1, [
            (s(!0), o(G, null, ne(t.issues, (u, v) => (s(), o("div", {
              key: v,
              class: "issue-item"
            }, [
              e("div", I1, a(u.message), 1),
              u.details.length ? (s(), o("div", E1, [
                (s(!0), o(G, null, ne(i(v), (d, m) => (s(), o("div", {
                  key: m,
                  class: "issue-detail"
                }, a(d), 1))), 128)),
                u.details.length > 3 && !n[v] ? (s(), o("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (d) => n[v] = !0
                }, " +" + a(u.details.length - 3) + " more ", 9, P1)) : r("", !0)
              ])) : r("", !0),
              e("div", R1, [
                u.type === "uncommitted_workflows" ? (s(), o(G, { key: 0 }, [
                  g(" Commit your workflow changes before exporting. ")
                ], 64)) : u.type === "uncommitted_git_changes" ? (s(), o(G, { key: 1 }, [
                  g(" Commit your changes before exporting. ")
                ], 64)) : u.type === "unresolved_issues" ? (s(), o(G, { key: 2 }, [
                  g(" Resolve all workflow issues before exporting. ")
                ], 64)) : r("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: l(() => [
        b(ye, {
          variant: "primary",
          onClick: p[0] || (p[0] = (u) => f.$emit("close"))
        }, {
          default: l(() => [...p[3] || (p[3] = [
            g(" Understood ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), uo = /* @__PURE__ */ oe(T1, [["__scopeId", "data-v-b52f5e32"]]), M1 = { class: "export-warnings" }, D1 = {
  key: 0,
  class: "success-header"
}, L1 = { class: "warning-header" }, z1 = { class: "warning-summary" }, U1 = { class: "warning-title" }, N1 = { class: "models-section" }, O1 = { class: "models-list" }, B1 = { class: "model-info" }, A1 = { class: "model-filename" }, F1 = { class: "model-workflows" }, V1 = ["onClick"], W1 = /* @__PURE__ */ ee({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = w(!1), p = w(null), u = U(() => f.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function v() {
      p.value = null, i("revalidate");
    }
    return (d, m) => (s(), o(G, null, [
      b(st, {
        title: "Export Warnings",
        size: "md",
        onClose: m[3] || (m[3] = (y) => d.$emit("cancel"))
      }, {
        body: l(() => [
          e("div", M1, [
            t.models.length === 0 ? (s(), o("div", D1, [...m[4] || (m[4] = [
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
            ])])) : (s(), o(G, { key: 1 }, [
              e("div", L1, [
                m[6] || (m[6] = e("span", { class: "warning-icon" }, [
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
                e("div", z1, [
                  e("h3", U1, a(t.models.length) + " model" + a(t.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  m[5] || (m[5] = e("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              e("div", N1, [
                e("div", O1, [
                  (s(!0), o(G, null, ne(u.value, (y) => (s(), o("div", {
                    key: y.hash,
                    class: "model-item"
                  }, [
                    e("div", B1, [
                      e("div", A1, a(y.filename), 1),
                      e("div", F1, " Used by: " + a(y.workflows.join(", ")), 1)
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      onClick: (_) => p.value = y.hash
                    }, " Add Source ", 8, V1)
                  ]))), 128))
                ]),
                t.models.length > 3 && !f.value ? (s(), o("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: m[0] || (m[0] = (y) => f.value = !0)
                }, " Show " + a(t.models.length - 3) + " more model" + a(t.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : r("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: l(() => [
          b(ye, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (y) => d.$emit("cancel"))
          }, {
            default: l(() => [...m[7] || (m[7] = [
              g(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          b(ye, {
            variant: "primary",
            onClick: m[2] || (m[2] = (y) => d.$emit("confirm"))
          }, {
            default: l(() => [
              g(a(t.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      p.value ? (s(), x(Ls, {
        key: 0,
        identifier: p.value,
        onClose: v
      }, null, 8, ["identifier"])) : r("", !0)
    ], 64));
  }
}), mo = /* @__PURE__ */ oe(W1, [["__scopeId", "data-v-b698d882"]]), G1 = { class: "export-card" }, j1 = { class: "export-path-row" }, K1 = { class: "export-actions" }, H1 = {
  key: 1,
  class: "export-warning"
}, q1 = /* @__PURE__ */ ee({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: c, exportEnvWithForce: n } = We(), i = w(""), f = w(!1), p = w(!1), u = w(!1), v = w(null), d = w(!1), m = w(null), y = w(!1), _ = w(!1), k = U(() => f.value ? "Validating..." : p.value ? "Exporting..." : "Export Environment");
    async function h() {
      f.value = !0, v.value = null;
      try {
        const R = await c();
        m.value = R, R.can_export ? R.warnings.models_without_sources.length > 0 ? _.value = !0 : await $() : y.value = !0;
      } catch (R) {
        v.value = {
          status: "error",
          message: R instanceof Error ? R.message : "Validation failed"
        };
      } finally {
        f.value = !1;
      }
    }
    async function E() {
      _.value = !1, await $();
    }
    async function D() {
      try {
        const R = await c();
        m.value = R;
      } catch (R) {
        console.error("Re-validation failed:", R);
      }
    }
    async function $() {
      p.value = !0;
      try {
        const R = await n(i.value || void 0);
        v.value = R;
      } catch (R) {
        v.value = {
          status: "error",
          message: R instanceof Error ? R.message : "Export failed"
        };
      } finally {
        p.value = !1;
      }
    }
    async function S() {
      var R;
      if ((R = v.value) != null && R.path)
        try {
          await navigator.clipboard.writeText(v.value.path);
        } catch (C) {
          console.error("Failed to copy path:", C);
        }
    }
    async function V() {
      var R;
      if ((R = v.value) != null && R.path) {
        u.value = !0;
        try {
          const C = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(v.value.path)}`);
          if (!C.ok)
            throw new Error(`Download failed: ${C.statusText}`);
          const H = await C.blob(), F = URL.createObjectURL(H), j = v.value.path.split("/").pop() || "environment-export.tar.gz", T = document.createElement("a");
          T.href = F, T.download = j, document.body.appendChild(T), T.click(), document.body.removeChild(T), URL.revokeObjectURL(F);
        } catch (C) {
          console.error("Failed to download:", C), alert(`Download failed: ${C instanceof Error ? C.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
      }
    }
    return (R, C) => (s(), o(G, null, [
      b(et, null, {
        header: l(() => [
          b(tt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: C[0] || (C[0] = (H) => d.value = !0)
          })
        ]),
        content: l(() => [
          b(Ue, { title: "EXPORT OPTIONS" }, {
            default: l(() => [
              e("div", G1, [
                C[7] || (C[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", j1, [
                  b(ps, {
                    modelValue: i.value,
                    "onUpdate:modelValue": C[1] || (C[1] = (H) => i.value = H),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", K1, [
                  b(Z, {
                    variant: "primary",
                    size: "md",
                    loading: f.value || p.value,
                    disabled: f.value || p.value,
                    onClick: h
                  }, {
                    default: l(() => [
                      C[6] || (C[6] = e("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        e("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        e("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      g(" " + a(k.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          v.value ? (s(), x(Ue, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: l(() => [
              b(Ze, {
                status: v.value.status === "success" ? "synced" : "broken"
              }, At({
                icon: l(() => [
                  g(a(v.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: l(() => [
                  g(a(v.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: l(() => [
                  g(a(v.value.status === "success" ? "Your environment has been exported" : v.value.message), 1)
                ]),
                _: 2
              }, [
                v.value.status === "success" ? {
                  name: "details",
                  fn: l(() => [
                    b(Fe, { label: "Saved to:" }, {
                      default: l(() => [
                        b(C1, {
                          path: v.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    v.value.models_without_sources !== void 0 ? (s(), x(Fe, {
                      key: 0,
                      label: "Models without sources:",
                      value: v.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : r("", !0),
                    v.value.models_without_sources && v.value.models_without_sources > 0 ? (s(), o("div", H1, [...C[8] || (C[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : r("", !0)
                  ]),
                  key: "0"
                } : void 0,
                v.value.status === "success" ? {
                  name: "actions",
                  fn: l(() => [
                    b(Z, {
                      variant: "primary",
                      size: "sm",
                      loading: u.value,
                      onClick: V
                    }, {
                      default: l(() => [...C[9] || (C[9] = [
                        e("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          e("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    b(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: S
                    }, {
                      default: l(() => [...C[10] || (C[10] = [
                        g(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    b(Z, {
                      variant: "ghost",
                      size: "sm",
                      onClick: C[2] || (C[2] = (H) => v.value = null)
                    }, {
                      default: l(() => [...C[11] || (C[11] = [
                        g(" Dismiss ", -1)
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
      b(yt, {
        show: d.value,
        title: "What Gets Exported",
        onClose: C[3] || (C[3] = (H) => d.value = !1)
      }, {
        content: l(() => [...C[12] || (C[12] = [
          e("div", { class: "export-info" }, [
            e("div", { class: "info-section" }, [
              e("strong", null, "Included in Export:"),
              e("ul", null, [
                e("li", null, [
                  e("strong", null, "Workflows"),
                  g(" — All workflows in this environment")
                ]),
                e("li", null, [
                  e("strong", null, "Custom Nodes"),
                  g(" — Node definitions and dependencies")
                ]),
                e("li", null, [
                  e("strong", null, "Models"),
                  g(" — References and source URLs (not the files)")
                ]),
                e("li", null, [
                  e("strong", null, "Configuration"),
                  g(" — Environment settings and metadata")
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
              g(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      y.value && m.value ? (s(), x(uo, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: C[4] || (C[4] = (H) => y.value = !1)
      }, null, 8, ["issues"])) : r("", !0),
      _.value && m.value ? (s(), x(mo, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: E,
        onCancel: C[5] || (C[5] = (H) => _.value = !1),
        onRevalidate: D
      }, null, 8, ["models"])) : r("", !0)
    ], 64));
  }
}), Y1 = /* @__PURE__ */ oe(q1, [["__scopeId", "data-v-f4d120f2"]]), J1 = { class: "file-input-wrapper" }, X1 = ["accept", "multiple", "disabled"], Q1 = /* @__PURE__ */ ee({
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
    const i = n, f = w(null);
    function p() {
      var v;
      (v = f.value) == null || v.click();
    }
    function u(v) {
      const d = v.target;
      d.files && d.files.length > 0 && (i("change", d.files), d.value = "");
    }
    return c({
      triggerInput: p
    }), (v, d) => (s(), o("div", J1, [
      e("input", {
        ref_key: "fileInputRef",
        ref: f,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, X1),
      b(Z, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: p
      }, {
        default: l(() => [
          Ee(v.$slots, "default", {}, () => [
            d[0] || (d[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            g(" " + a(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Z1 = /* @__PURE__ */ oe(Q1, [["__scopeId", "data-v-cd192091"]]), ey = {
  key: 0,
  class: "drop-zone-empty"
}, ty = { class: "drop-zone-text" }, sy = { class: "drop-zone-primary" }, oy = { class: "drop-zone-secondary" }, ny = { class: "drop-zone-actions" }, ay = {
  key: 1,
  class: "drop-zone-file"
}, ly = { class: "file-info" }, iy = { class: "file-details" }, ry = { class: "file-name" }, dy = { class: "file-size" }, cy = /* @__PURE__ */ ee({
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
    const n = c, i = w(!1), f = w(null), p = w(0), u = U(() => f.value !== null), v = U(() => {
      var $;
      return (($ = f.value) == null ? void 0 : $.name) || "";
    }), d = U(() => {
      if (!f.value) return "";
      const $ = f.value.size;
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m($) {
      var S;
      $.stopPropagation(), p.value++, (S = $.dataTransfer) != null && S.types.includes("Files") && (i.value = !0);
    }
    function y($) {
      $.stopPropagation(), $.dataTransfer && ($.dataTransfer.dropEffect = "copy");
    }
    function _($) {
      $.stopPropagation(), p.value--, p.value === 0 && (i.value = !1);
    }
    function k($) {
      var V;
      $.stopPropagation(), p.value = 0, i.value = !1;
      const S = (V = $.dataTransfer) == null ? void 0 : V.files;
      S && S.length > 0 && E(S[0]);
    }
    function h($) {
      $.length > 0 && E($[0]);
    }
    function E($) {
      f.value = $, n("fileSelected", $);
    }
    function D() {
      f.value = null, n("clear");
    }
    return ($, S) => (s(), o("div", {
      class: fe(["file-drop-zone", { "drop-active": i.value, "has-file": u.value }]),
      onDragenter: Ne(m, ["prevent"]),
      onDragover: Ne(y, ["prevent"]),
      onDragleave: Ne(_, ["prevent"]),
      onDrop: Ne(k, ["prevent"])
    }, [
      u.value ? (s(), o("div", ay, [
        e("div", ly, [
          S[1] || (S[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", iy, [
            e("div", ry, a(v.value), 1),
            e("div", dy, a(d.value), 1)
          ])
        ]),
        b(Z, {
          variant: "ghost",
          size: "xs",
          onClick: D,
          title: "Remove file"
        }, {
          default: l(() => [...S[2] || (S[2] = [
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
      ])) : (s(), o("div", ey, [
        S[0] || (S[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", ty, [
          e("p", sy, a(t.primaryText), 1),
          e("p", oy, a(t.secondaryText), 1)
        ]),
        e("div", ny, [
          b(Z1, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "sm",
            onChange: h
          }, {
            default: l(() => [
              g(a(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), uy = /* @__PURE__ */ oe(cy, [["__scopeId", "data-v-0f79cb86"]]), my = { class: "import-preview" }, vy = { class: "preview-header" }, fy = {
  key: 0,
  class: "source-env"
}, py = { class: "preview-content" }, gy = { class: "preview-section" }, hy = { class: "section-header" }, yy = { class: "section-info" }, wy = { class: "section-count" }, ky = {
  key: 0,
  class: "item-list"
}, by = { class: "item-name" }, _y = {
  key: 0,
  class: "item-more"
}, $y = { class: "preview-section" }, Cy = { class: "section-header" }, xy = { class: "section-info" }, Sy = { class: "section-count" }, Iy = {
  key: 0,
  class: "item-list"
}, Ey = { class: "item-details" }, Py = { class: "item-name" }, Ry = { class: "item-meta" }, Ty = {
  key: 0,
  class: "item-more"
}, My = { class: "preview-section" }, Dy = { class: "section-header" }, Ly = { class: "section-info" }, zy = { class: "section-count" }, Uy = {
  key: 0,
  class: "item-list"
}, Ny = { class: "item-name" }, Oy = {
  key: 0,
  class: "item-more"
}, By = {
  key: 0,
  class: "preview-section"
}, Ay = { class: "git-info" }, Fy = /* @__PURE__ */ ee({
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
    const c = t, n = U(() => c.workflows.length), i = U(() => c.models.length), f = U(() => c.nodes.length);
    function p(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, v) => (s(), o("div", my, [
      e("div", vy, [
        b(lt, null, {
          default: l(() => [...v[0] || (v[0] = [
            g("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", fy, [
          v[1] || (v[1] = g(" From: ", -1)),
          b(Is, null, {
            default: l(() => [
              g(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : r("", !0)
      ]),
      e("div", py, [
        e("div", gy, [
          e("div", hy, [
            v[3] || (v[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", yy, [
              v[2] || (v[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", wy, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", ky, [
            (s(!0), o(G, null, ne(t.workflows.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d,
              class: "preview-item"
            }, [
              v[4] || (v[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", by, a(d), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", _y, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        e("div", $y, [
          e("div", Cy, [
            v[6] || (v[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", xy, [
              v[5] || (v[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", Sy, a(i.value) + " file" + a(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", Iy, [
            (s(!0), o(G, null, ne(t.models.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              v[7] || (v[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", Ey, [
                e("span", Py, a(d.filename), 1),
                e("span", Ry, a(p(d.size)) + " • " + a(d.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", Ty, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        e("div", My, [
          e("div", Dy, [
            v[9] || (v[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", Ly, [
              v[8] || (v[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", zy, a(f.value) + " node" + a(f.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", Uy, [
            (s(!0), o(G, null, ne(t.nodes.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d,
              class: "preview-item"
            }, [
              v[10] || (v[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Ny, a(d), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", Oy, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", By, [
          v[11] || (v[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Ay, [
            t.gitBranch ? (s(), x(Fe, {
              key: 0,
              label: "Branch"
            }, {
              default: l(() => [
                b(Is, null, {
                  default: l(() => [
                    g(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : r("", !0),
            t.gitCommit ? (s(), x(Fe, {
              key: 1,
              label: "Commit"
            }, {
              default: l(() => [
                b(Xs, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : r("", !0)
          ])
        ])) : r("", !0)
      ])
    ]));
  }
}), Vy = /* @__PURE__ */ oe(Fy, [["__scopeId", "data-v-182fe113"]]), Wy = { class: "import-config" }, Gy = { class: "config-container" }, jy = { class: "config-field" }, Ky = { class: "input-wrapper" }, Hy = ["value"], qy = {
  key: 0,
  class: "validating-indicator"
}, Yy = {
  key: 1,
  class: "valid-indicator"
}, Jy = {
  key: 0,
  class: "field-error"
}, Xy = { class: "config-field" }, Qy = { class: "strategy-options" }, Zy = ["value", "checked", "onChange"], e0 = { class: "strategy-content" }, t0 = { class: "strategy-label" }, s0 = { class: "strategy-description" }, o0 = { class: "config-field switch-field" }, n0 = { class: "switch-label" }, a0 = ["checked"], l0 = { class: "advanced-section" }, i0 = { class: "advanced-content" }, r0 = { class: "config-field" }, d0 = ["value"], c0 = ["value"], u0 = /* @__PURE__ */ ee({
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
    const n = t, i = c, f = w(!1), p = w(!1);
    it(() => n.nameError, (y) => {
      f.value = !1, p.value = !y && n.name.length > 0;
    });
    const u = [
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
    function d(y) {
      const _ = y.target.value;
      i("update:name", _), p.value = !1, v && clearTimeout(v), _.length > 0 ? (f.value = !0, v = setTimeout(() => {
        i("validate-name", _);
      }, 400)) : f.value = !1;
    }
    function m() {
      n.name.length > 0 && i("validate-name", n.name);
    }
    return (y, _) => (s(), o("div", Wy, [
      b(lt, null, {
        default: l(() => [..._[2] || (_[2] = [
          g("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", Gy, [
        e("div", jy, [
          b(ms, { required: "" }, {
            default: l(() => [..._[3] || (_[3] = [
              g("Environment Name", -1)
            ])]),
            _: 1
          }),
          e("div", Ky, [
            e("input", {
              type: "text",
              class: fe(["name-input", { error: t.nameError || t.name.length === 0, valid: p.value }]),
              value: t.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: m
            }, null, 42, Hy),
            f.value ? (s(), o("span", qy, "...")) : p.value ? (s(), o("span", Yy, "✓")) : r("", !0)
          ]),
          t.nameError ? (s(), o("div", Jy, a(t.nameError), 1)) : r("", !0),
          _[4] || (_[4] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", Xy, [
          b(ms, null, {
            default: l(() => [..._[5] || (_[5] = [
              g("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", Qy, [
            (s(), o(G, null, ne(u, (k) => e("label", {
              key: k.value,
              class: fe(["strategy-option", { active: t.modelStrategy === k.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: k.value,
                checked: t.modelStrategy === k.value,
                onChange: (h) => i("update:modelStrategy", k.value)
              }, null, 40, Zy),
              e("div", e0, [
                e("span", t0, a(k.label), 1),
                e("span", s0, a(k.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", o0, [
          e("label", n0, [
            e("input", {
              type: "checkbox",
              checked: t.switchAfterImport,
              onChange: _[0] || (_[0] = (k) => i("update:switchAfterImport", k.target.checked))
            }, null, 40, a0),
            _[6] || (_[6] = e("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        e("details", l0, [
          _[8] || (_[8] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", i0, [
            e("div", r0, [
              b(ms, null, {
                default: l(() => [..._[7] || (_[7] = [
                  g("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              e("select", {
                class: "backend-select",
                value: t.torchBackend,
                onChange: _[1] || (_[1] = (k) => i("update:torchBackend", k.target.value))
              }, [
                (s(!0), o(G, null, ne($e(zs), (k) => (s(), o("option", {
                  key: k,
                  value: k
                }, a(k) + a(k === "auto" ? " (detect GPU)" : ""), 9, c0))), 128))
              ], 40, d0)
            ])
          ])
        ])
      ])
    ]));
  }
}), m0 = /* @__PURE__ */ oe(u0, [["__scopeId", "data-v-89ea06a1"]]), v0 = { class: "import-flow" }, f0 = {
  key: 0,
  class: "import-empty"
}, p0 = { class: "git-import-section" }, g0 = { class: "git-url-input-row" }, h0 = ["disabled"], y0 = {
  key: 0,
  class: "git-error"
}, w0 = {
  key: 1,
  class: "import-configure"
}, k0 = { class: "selected-file-bar" }, b0 = {
  key: 0,
  class: "file-bar-content"
}, _0 = { class: "file-bar-info" }, $0 = { class: "file-bar-name" }, C0 = { class: "file-bar-size" }, x0 = {
  key: 1,
  class: "file-bar-content"
}, S0 = { class: "file-bar-info" }, I0 = { class: "file-bar-name" }, E0 = {
  key: 0,
  class: "preview-loading"
}, P0 = { class: "import-actions" }, R0 = {
  key: 2,
  class: "import-progress"
}, T0 = { class: "creating-intro" }, M0 = {
  key: 0,
  class: "progress-warning"
}, D0 = {
  key: 1,
  class: "import-error"
}, L0 = { class: "error-message" }, z0 = {
  key: 3,
  class: "import-complete"
}, U0 = { class: "complete-message" }, N0 = { class: "complete-title" }, O0 = { class: "complete-details" }, B0 = { class: "complete-actions" }, A0 = /* @__PURE__ */ ee({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(t, { expose: c, emit: n }) {
    var De, ce, he, Pe;
    const i = t, f = n, { previewTarballImport: p, previewGitImport: u, validateEnvironmentName: v, executeImport: d, executeGitImport: m, getImportProgress: y } = We();
    let _ = null;
    const k = w(null), h = w(i.resumeImport ?? !1), E = w(!1), D = w(!1), $ = w(""), S = w(!1), V = w(null), R = w(""), C = w(null), H = w(!1), F = w(null), j = w(null), T = w({
      name: ((De = i.initialProgress) == null ? void 0 : De.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), M = w(null), A = w({
      message: ((ce = i.initialProgress) == null ? void 0 : ce.message) ?? "Preparing import...",
      phase: ((he = i.initialProgress) == null ? void 0 : he.phase) ?? "",
      progress: ((Pe = i.initialProgress) == null ? void 0 : Pe.progress) ?? 0,
      error: null
    }), ie = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], ae = U(() => {
      if (!j.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const re = j.value;
      return {
        sourceEnvironment: re.comfyui_version ? `ComfyUI ${re.comfyui_version}` : "Unknown",
        workflows: re.workflows.map((Y) => Y.name),
        models: re.models.map((Y) => ({
          filename: Y.filename,
          size: 0,
          type: Y.relative_path.split("/")[0] || "model"
        })),
        nodes: re.nodes.map((Y) => Y.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), Q = U(() => !S.value && !V.value && j.value && T.value.name.length > 0 && !M.value && (k.value || C.value));
    async function ve(re) {
      k.value = re, S.value = !0, V.value = null, j.value = null;
      try {
        const Y = await p(re);
        j.value = Y;
      } catch (Y) {
        V.value = Y instanceof Error ? Y.message : "Failed to analyze file", console.error("Preview error:", Y);
      } finally {
        S.value = !1;
      }
    }
    function X() {
      k.value = null, C.value = null, R.value = "", F.value = null, E.value = !1, D.value = !1, $.value = "", j.value = null, V.value = null, T.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, M.value = null, f("source-cleared");
    }
    function N() {
      be(), X(), h.value = !1, S.value = !1, H.value = !1, A.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function B() {
      if (R.value.trim()) {
        H.value = !0, F.value = null;
        try {
          const re = await u(R.value.trim());
          C.value = R.value.trim(), j.value = re;
        } catch (re) {
          F.value = re instanceof Error ? re.message : "Failed to analyze repository";
        } finally {
          H.value = !1;
        }
      }
    }
    function I(re) {
      try {
        const Y = new URL(re);
        return Y.host + Y.pathname.replace(/\.git$/, "");
      } catch {
        return re;
      }
    }
    async function me(re) {
      if (!re) {
        M.value = "Environment name is required";
        return;
      }
      try {
        const Y = await v(re);
        M.value = Y.valid ? null : Y.error || "Invalid name";
      } catch {
        M.value = "Failed to validate name";
      }
    }
    async function te() {
      if (T.value.name && !(!k.value && !C.value)) {
        h.value = !0, E.value = !1, A.value = { message: `Creating environment '${T.value.name}'...`, phase: "", progress: 0, error: null }, f("import-started");
        try {
          let re;
          if (k.value)
            re = await d(
              k.value,
              T.value.name,
              T.value.modelStrategy,
              T.value.torchBackend
            );
          else if (C.value)
            re = await m(
              C.value,
              T.value.name,
              T.value.modelStrategy,
              T.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          re.status === "started" ? we() : (D.value = !1, $.value = re.message, h.value = !1, E.value = !0);
        } catch (re) {
          D.value = !1, $.value = re instanceof Error ? re.message : "Unknown error occurred during import", h.value = !1, E.value = !0;
        }
      }
    }
    async function we() {
      if (_) return;
      const re = async () => {
        try {
          const Re = await y();
          return A.value = {
            message: Re.message,
            phase: Re.phase || "",
            progress: Re.progress ?? (Re.state === "importing" ? 50 : 0),
            error: Re.error || null
          }, Re.state === "complete" ? (be(), D.value = !0, $.value = `Environment '${Re.environment_name}' created successfully`, h.value = !1, E.value = !0, Re.environment_name && f("import-complete", Re.environment_name, T.value.switchAfterImport), !1) : Re.state === "error" ? (be(), D.value = !1, $.value = Re.error || Re.message, h.value = !1, E.value = !0, !1) : !0;
        } catch (Re) {
          return console.error("Failed to poll import progress:", Re), !0;
        }
      };
      await re() && (_ = setInterval(async () => {
        await re() || be();
      }, 2e3));
    }
    function be() {
      _ && (clearInterval(_), _ = null);
    }
    function Te(re) {
      return re < 1024 ? `${re} B` : re < 1024 * 1024 ? `${(re / 1024).toFixed(1)} KB` : re < 1024 * 1024 * 1024 ? `${(re / (1024 * 1024)).toFixed(1)} MB` : `${(re / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Be(async () => {
      try {
        const re = await y();
        console.log("[ComfyGit ImportFlow] Import progress check:", re.state, re), re.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", re.environment_name), h.value = !0, T.value.name = re.environment_name || T.value.name || "", A.value = {
          progress: re.progress ?? 0,
          message: re.message || "Importing...",
          phase: re.phase || "",
          error: null
        }, we());
      } catch (re) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", re);
      }
    }), c({
      handleReset: N,
      isImporting: h,
      canImport: Q
    }), (re, Y) => {
      var Re;
      return s(), o("div", v0, [
        !k.value && !C.value && !h.value ? (s(), o("div", f0, [
          b(uy, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: ve
          }),
          Y[7] || (Y[7] = e("div", { class: "import-divider" }, [
            e("span", null, "or")
          ], -1)),
          e("div", p0, [
            Y[5] || (Y[5] = e("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            e("div", g0, [
              Le(e("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": Y[0] || (Y[0] = (ge) => R.value = ge),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: $t(B, ["enter"]),
                disabled: H.value
              }, null, 40, h0), [
                [Bt, R.value]
              ]),
              b(Z, {
                variant: "primary",
                size: "sm",
                disabled: !R.value.trim() || H.value,
                onClick: B
              }, {
                default: l(() => [
                  g(a(H.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            F.value ? (s(), o("div", y0, a(F.value), 1)) : r("", !0),
            Y[6] || (Y[6] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (k.value || C.value) && !h.value && !E.value ? (s(), o("div", w0, [
          e("div", k0, [
            k.value ? (s(), o("div", b0, [
              Y[8] || (Y[8] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", _0, [
                e("div", $0, a(k.value.name), 1),
                e("div", C0, a(Te(k.value.size)), 1)
              ])
            ])) : C.value ? (s(), o("div", x0, [
              Y[10] || (Y[10] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
              e("div", S0, [
                e("div", I0, a(I(C.value)), 1),
                Y[9] || (Y[9] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : r("", !0),
            b(Z, {
              variant: "ghost",
              size: "sm",
              onClick: X
            }, {
              default: l(() => [...Y[11] || (Y[11] = [
                g(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          S.value ? (s(), o("div", E0, [...Y[12] || (Y[12] = [
            e("div", { class: "loading-spinner" }, null, -1),
            e("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : V.value ? (s(), x(ft, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [V.value]
          }, null, 8, ["details"])) : j.value ? (s(), x(Vy, {
            key: 2,
            "source-environment": ae.value.sourceEnvironment,
            workflows: ae.value.workflows,
            models: ae.value.models,
            nodes: ae.value.nodes,
            "git-branch": ae.value.gitBranch,
            "git-commit": ae.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : r("", !0),
          j.value ? (s(), x(m0, {
            key: 3,
            name: T.value.name,
            "onUpdate:name": Y[1] || (Y[1] = (ge) => T.value.name = ge),
            "model-strategy": T.value.modelStrategy,
            "onUpdate:modelStrategy": Y[2] || (Y[2] = (ge) => T.value.modelStrategy = ge),
            "torch-backend": T.value.torchBackend,
            "onUpdate:torchBackend": Y[3] || (Y[3] = (ge) => T.value.torchBackend = ge),
            "switch-after-import": T.value.switchAfterImport,
            "onUpdate:switchAfterImport": Y[4] || (Y[4] = (ge) => T.value.switchAfterImport = ge),
            "name-error": M.value,
            onValidateName: me
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : r("", !0),
          T.value.modelStrategy === "skip" && ((Re = j.value) != null && Re.models_needing_download) ? (s(), x(ft, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${j.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : r("", !0),
          e("div", P0, [
            b(Z, {
              variant: "secondary",
              size: "md",
              onClick: X
            }, {
              default: l(() => [...Y[13] || (Y[13] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Z, {
              variant: "primary",
              size: "md",
              disabled: !Q.value,
              onClick: te
            }, {
              default: l(() => [...Y[14] || (Y[14] = [
                g(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : h.value ? (s(), o("div", R0, [
          e("p", T0, [
            Y[15] || (Y[15] = g(" Importing environment ", -1)),
            e("strong", null, a(T.value.name), 1),
            Y[16] || (Y[16] = g("... ", -1))
          ]),
          b(hs, {
            progress: A.value.progress,
            message: A.value.message,
            "current-phase": A.value.phase,
            variant: A.value.error ? "error" : "default",
            "show-steps": !0,
            steps: ie
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          A.value.error ? r("", !0) : (s(), o("p", M0, " This may take several minutes. Please wait... ")),
          A.value.error ? (s(), o("div", D0, [
            e("p", L0, a(A.value.error), 1)
          ])) : r("", !0)
        ])) : E.value ? (s(), o("div", z0, [
          e("div", {
            class: fe(["complete-icon", D.value ? "success" : "error"])
          }, a(D.value ? "✓" : "✕"), 3),
          e("div", U0, [
            e("div", N0, a(D.value ? "Import Successful" : "Import Failed"), 1),
            e("div", O0, a($.value), 1)
          ]),
          e("div", B0, [
            b(Z, {
              variant: "primary",
              size: "md",
              onClick: N
            }, {
              default: l(() => [...Y[17] || (Y[17] = [
                g(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : r("", !0)
      ]);
    };
  }
}), vo = /* @__PURE__ */ oe(A0, [["__scopeId", "data-v-72cbc04e"]]), F0 = /* @__PURE__ */ ee({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(t, { emit: c }) {
    const n = c, i = w(!1);
    function f(p, u) {
      u && n("import-complete-switch", p);
    }
    return (p, u) => (s(), o(G, null, [
      b(et, null, {
        header: l(() => [
          b(tt, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: u[0] || (u[0] = (v) => i.value = !0)
          })
        ]),
        content: l(() => [
          b(vo, { onImportComplete: f })
        ]),
        _: 1
      }),
      b(yt, {
        show: i.value,
        title: "How Import Works",
        onClose: u[1] || (u[1] = (v) => i.value = !1)
      }, {
        content: l(() => [...u[2] || (u[2] = [
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
}), V0 = /* @__PURE__ */ oe(F0, [["__scopeId", "data-v-e13bfe76"]]), cs = jt(), W0 = 5e3, Wt = w([]), Cs = w(!1), xs = w(null);
let ts = null;
async function us(t, c) {
  var n;
  if (!((n = window.app) != null && n.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(t, c);
}
function fo(t) {
  const c = U(
    () => Wt.value.filter((k) => k.status === "running")
  ), n = U(
    () => Wt.value.filter((k) => k.status === "deploying")
  ), i = U(
    () => Wt.value.filter((k) => k.status === "stopped")
  ), f = U(
    () => c.value.length + n.value.length
  ), p = U(() => {
    const k = {
      deploying: 0,
      running: 1,
      stopped: 2,
      error: 3,
      terminated: 4
    };
    return [...Wt.value].sort(
      (h, E) => (k[h.status] ?? 5) - (k[E.status] ?? 5)
    );
  });
  async function u() {
    Cs.value = !0, xs.value = null;
    try {
      let k;
      if (!cs) {
        const h = await us("/v2/comfygit/deploy/instances");
        if (!h.ok)
          throw new Error(`Failed to fetch instances: ${h.status}`);
        k = await h.json();
      }
      Wt.value = k.instances;
    } catch (k) {
      xs.value = k instanceof Error ? k.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", k);
    } finally {
      Cs.value = !1;
    }
  }
  async function v(k) {
    try {
      if (!cs) {
        const h = await us(`/v2/comfygit/deploy/runpod/pods/${k}/stop`, {
          method: "POST"
        });
        if (!h.ok) {
          const E = await h.json();
          throw new Error(E.message || "Failed to stop instance");
        }
      }
      await u();
    } catch (h) {
      throw console.error("[useDeployInstances] stopInstance error:", h), h;
    }
  }
  async function d(k) {
    try {
      if (!cs) {
        const h = await us(`/v2/comfygit/deploy/runpod/pods/${k}/start`, {
          method: "POST"
        });
        if (!h.ok) {
          const E = await h.json();
          throw new Error(E.message || "Failed to start instance");
        }
      }
      await u();
    } catch (h) {
      throw console.error("[useDeployInstances] startInstance error:", h), h;
    }
  }
  async function m(k) {
    try {
      if (!cs) {
        const h = await us(`/v2/comfygit/deploy/runpod/pods/${k}`, {
          method: "DELETE"
        });
        if (!h.ok) {
          const E = await h.json();
          throw new Error(E.message || "Failed to terminate instance");
        }
      }
      await u();
    } catch (h) {
      throw console.error("[useDeployInstances] terminateInstance error:", h), h;
    }
  }
  function y() {
    ts || (ts = window.setInterval(u, W0));
  }
  function _() {
    ts && (clearInterval(ts), ts = null);
  }
  return it(n, (k) => {
    k.length > 0 && y();
  }, { immediate: !0 }), {
    // State
    instances: Wt,
    isLoading: Cs,
    error: xs,
    // Computed
    runningInstances: c,
    deployingInstances: n,
    stoppedInstances: i,
    liveInstanceCount: f,
    sortedInstances: p,
    // Actions
    refreshInstances: u,
    stopInstance: v,
    startInstance: d,
    terminateInstance: m,
    // Polling
    startPolling: y,
    stopPolling: _
  };
}
const G0 = { class: "instance-header" }, j0 = { class: "provider-badge" }, K0 = { class: "instance-name" }, H0 = {
  key: 0,
  class: "spinner"
}, q0 = { class: "instance-details" }, Y0 = {
  key: 0,
  class: "detail"
}, J0 = {
  key: 1,
  class: "detail"
}, X0 = {
  key: 2,
  class: "detail"
}, Q0 = {
  key: 3,
  class: "detail total-cost"
}, Z0 = {
  key: 0,
  class: "deployment-progress"
}, ew = { class: "progress-message" }, tw = { class: "instance-actions" }, sw = /* @__PURE__ */ ee({
  __name: "InstanceCard",
  props: {
    instance: {},
    isLoading: { type: Boolean }
  },
  emits: ["stop", "start", "terminate"],
  setup(t) {
    const c = t, n = U(() => ({
      runpod: "RunPod",
      vast: "Vast.ai",
      custom: "Custom"
    })[c.instance.provider] || c.instance.provider), i = U(() => ({
      deploying: "Deploying",
      running: "Running",
      stopped: "Stopped",
      error: "Error",
      terminated: "Terminated"
    })[c.instance.status] || c.instance.status), f = U(() => `status-${c.instance.status}`);
    function p() {
      c.instance.comfyui_url && window.open(c.instance.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function u() {
      c.instance.console_url && window.open(c.instance.console_url, "_blank", "noopener,noreferrer");
    }
    function v(d) {
      const m = Math.floor(d / 3600), y = Math.floor(d % 3600 / 60);
      return m > 0 ? `${m}h ${y}m` : `${y}m`;
    }
    return (d, m) => (s(), o("div", {
      class: fe(["instance-card", f.value])
    }, [
      e("div", G0, [
        e("span", j0, a(n.value), 1),
        e("span", K0, a(t.instance.name), 1),
        e("span", {
          class: fe(["status-indicator", t.instance.status])
        }, [
          t.instance.status === "deploying" ? (s(), o("span", H0)) : r("", !0),
          g(" " + a(i.value), 1)
        ], 2)
      ]),
      e("div", q0, [
        t.instance.gpu_type ? (s(), o("span", Y0, a(t.instance.gpu_type), 1)) : r("", !0),
        t.instance.uptime_seconds ? (s(), o("span", J0, a(v(t.instance.uptime_seconds)), 1)) : r("", !0),
        t.instance.cost_per_hour ? (s(), o("span", X0, "$" + a(t.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : r("", !0),
        t.instance.total_cost ? (s(), o("span", Q0, "$" + a(t.instance.total_cost.toFixed(2)) + " total", 1)) : r("", !0)
      ]),
      t.instance.status === "deploying" ? (s(), o("div", Z0, [
        e("div", ew, a(t.instance.deployment_message || "Deploying..."), 1),
        t.instance.deployment_progress ? (s(), x(ks, {
          key: 0,
          progress: t.instance.deployment_progress
        }, null, 8, ["progress"])) : r("", !0)
      ])) : r("", !0),
      e("div", tw, [
        t.instance.status === "running" && t.instance.comfyui_url ? (s(), x(Z, {
          key: 0,
          variant: "primary",
          size: "xs",
          onClick: p
        }, {
          default: l(() => [...m[3] || (m[3] = [
            g(" Open ComfyUI ", -1)
          ])]),
          _: 1
        })) : r("", !0),
        t.instance.console_url && t.instance.provider !== "custom" ? (s(), x(Z, {
          key: 1,
          variant: "ghost",
          size: "xs",
          onClick: u
        }, {
          default: l(() => [...m[4] || (m[4] = [
            g(" Console ", -1)
          ])]),
          _: 1
        })) : r("", !0),
        t.instance.status === "running" ? (s(), x(Z, {
          key: 2,
          variant: "secondary",
          size: "xs",
          loading: t.isLoading,
          disabled: t.isLoading,
          onClick: m[0] || (m[0] = (y) => d.$emit("stop", t.instance.id))
        }, {
          default: l(() => [...m[5] || (m[5] = [
            g(" Stop ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : r("", !0),
        t.instance.status === "stopped" ? (s(), x(Z, {
          key: 3,
          variant: "secondary",
          size: "xs",
          loading: t.isLoading,
          disabled: t.isLoading,
          onClick: m[1] || (m[1] = (y) => d.$emit("start", t.instance.id))
        }, {
          default: l(() => [...m[6] || (m[6] = [
            g(" Start ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : r("", !0),
        b(Z, {
          variant: "destructive",
          size: "xs",
          loading: t.isLoading,
          disabled: t.isLoading,
          onClick: m[2] || (m[2] = (y) => d.$emit("terminate", t.instance.id))
        }, {
          default: l(() => [...m[7] || (m[7] = [
            g(" Terminate ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])
      ])
    ], 2));
  }
}), ow = /* @__PURE__ */ oe(sw, [["__scopeId", "data-v-4091d7c7"]]), nw = { class: "instances-tab" }, aw = { class: "instances-header" }, lw = {
  key: 0,
  class: "loading-state"
}, iw = {
  key: 1,
  class: "empty-state"
}, rw = {
  key: 2,
  class: "instances-list"
}, dw = /* @__PURE__ */ ee({
  __name: "InstancesTab",
  props: {
    instances: {},
    isLoading: { type: Boolean },
    actionLoadingId: {}
  },
  emits: ["refresh", "stop", "start", "terminate"],
  setup(t) {
    const c = t, n = U(() => {
      const i = {
        deploying: 0,
        running: 1,
        stopped: 2,
        error: 3,
        terminated: 4
      };
      return [...c.instances].sort(
        (f, p) => (i[f.status] ?? 5) - (i[p.status] ?? 5)
      );
    });
    return (i, f) => (s(), o("div", nw, [
      e("div", aw, [
        b(lt, null, {
          default: l(() => [...f[4] || (f[4] = [
            g("Active Instances", -1)
          ])]),
          _: 1
        }),
        b(Z, {
          variant: "ghost",
          size: "xs",
          loading: t.isLoading,
          onClick: f[0] || (f[0] = (p) => i.$emit("refresh"))
        }, {
          default: l(() => [...f[5] || (f[5] = [
            g(" Refresh ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      t.isLoading && t.instances.length === 0 ? (s(), o("div", lw, [...f[6] || (f[6] = [
        e("span", { class: "spinner" }, null, -1),
        g(" Loading instances... ", -1)
      ])])) : t.instances.length === 0 ? (s(), o("div", iw, [...f[7] || (f[7] = [
        e("span", { class: "empty-icon" }, "○", -1),
        e("span", { class: "empty-text" }, "No active instances", -1),
        e("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (s(), o("div", rw, [
        (s(!0), o(G, null, ne(n.value, (p) => (s(), x(ow, {
          key: p.id,
          instance: p,
          "is-loading": t.actionLoadingId === p.id,
          onStop: f[1] || (f[1] = (u) => i.$emit("stop", u)),
          onStart: f[2] || (f[2] = (u) => i.$emit("start", u)),
          onTerminate: f[3] || (f[3] = (u) => i.$emit("terminate", u))
        }, null, 8, ["instance", "is-loading"]))), 128))
      ]))
    ]));
  }
}), cw = /* @__PURE__ */ oe(dw, [["__scopeId", "data-v-fdd7390e"]]), uw = { class: "remote-header" }, mw = { class: "remote-info" }, vw = { class: "remote-icon" }, fw = { class: "remote-name" }, pw = {
  key: 0,
  class: "default-badge"
}, gw = {
  key: 1,
  class: "sync-badge"
}, hw = {
  key: 0,
  class: "ahead"
}, yw = {
  key: 1,
  class: "behind"
}, ww = {
  key: 1,
  class: "synced"
}, kw = ["href"], bw = {
  key: 1,
  class: "remote-url-text"
}, _w = { class: "remote-actions" }, $w = /* @__PURE__ */ ee({
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
    const c = t, n = U(() => c.remote.is_default), i = U(() => {
      const p = c.remote.fetch_url, u = p.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return u ? `https://${u[1]}/${u[2]}` : p.startsWith("https://") || p.startsWith("http://") ? p.replace(/\.git$/, "") : null;
    }), f = U(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (p, u) => (s(), o("div", {
      class: fe(["deploy-remote-card", { selected: t.isSelected }])
    }, [
      e("div", uw, [
        e("div", mw, [
          e("span", vw, a(n.value ? "🔗" : "🌐"), 1),
          e("span", fw, a(t.remote.name), 1),
          n.value ? (s(), o("span", pw, "DEFAULT")) : r("", !0),
          t.syncStatus ? (s(), o("span", gw, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(G, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", hw, "↑" + a(t.syncStatus.ahead), 1)) : r("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", yw, "↓" + a(t.syncStatus.behind), 1)) : r("", !0)
            ], 64)) : (s(), o("span", ww, "✓ synced"))
          ])) : r("", !0)
        ]),
        i.value ? (s(), o("a", {
          key: 0,
          href: i.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: u[0] || (u[0] = Ne(() => {
          }, ["stop"]))
        }, a(f.value), 9, kw)) : (s(), o("span", bw, a(f.value), 1))
      ]),
      e("div", _w, [
        b(Z, {
          variant: "secondary",
          size: "xs",
          loading: t.isFetching,
          onClick: u[1] || (u[1] = (v) => p.$emit("fetch", t.remote.name))
        }, {
          default: l(() => [...u[4] || (u[4] = [
            g(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        t.syncStatus && t.syncStatus.ahead > 0 ? (s(), x(Z, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: t.isPushing,
          onClick: u[2] || (u[2] = (v) => p.$emit("push", t.remote.name))
        }, {
          default: l(() => [
            g(" Push ↑" + a(t.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : r("", !0),
        b(Z, {
          variant: t.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: u[3] || (u[3] = (v) => p.$emit("select", t.remote.name))
        }, {
          default: l(() => [
            g(a(t.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), Cw = /* @__PURE__ */ oe($w, [["__scopeId", "data-v-d687d161"]]), xw = { class: "runpod-tab" }, Sw = { class: "api-key-card" }, Iw = { class: "api-key-row" }, Ew = { class: "api-key-input-wrapper" }, Pw = ["type", "disabled"], Rw = ["title"], Tw = { class: "status-icon" }, Mw = { class: "status-text" }, Dw = {
  key: 0,
  class: "credit-balance"
}, Lw = { class: "config-card" }, zw = { class: "config-row" }, Uw = ["disabled"], Nw = {
  key: 0,
  value: ""
}, Ow = {
  key: 1,
  value: "",
  disabled: ""
}, Bw = ["value", "disabled"], Aw = { class: "config-row" }, Fw = {
  key: 0,
  class: "loading-inline"
}, Vw = { class: "no-volumes-state" }, Ww = { class: "no-volumes-text" }, Gw = ["value"], jw = { class: "config-row" }, Kw = ["disabled"], Hw = {
  key: 0,
  value: ""
}, qw = {
  key: 1,
  value: ""
}, Yw = {
  key: 2,
  value: ""
}, Jw = ["value"], Xw = { class: "config-row" }, Qw = { class: "radio-group" }, Zw = { class: "radio-option" }, ek = { class: "radio-label" }, tk = { class: "radio-option" }, sk = { class: "radio-label" }, ok = { class: "config-row" }, nk = { class: "radio-group" }, ak = { class: "radio-option" }, lk = { class: "radio-label" }, ik = { class: "radio-option" }, rk = { class: "radio-label" }, dk = { class: "config-row" }, ck = {
  key: 0,
  class: "loading-text"
}, uk = {
  key: 1,
  class: "empty-remotes"
}, mk = { class: "remotes-list" }, vk = {
  key: 0,
  class: "sync-warning"
}, fk = { class: "warning-content" }, pk = { class: "remotes-footer" }, gk = { class: "summary-card" }, hk = {
  key: 0,
  class: "loading-text"
}, yk = { class: "summary-row" }, wk = { class: "summary-value" }, kk = { class: "summary-row" }, bk = { class: "summary-value" }, _k = { class: "summary-row" }, $k = { class: "summary-value" }, Ck = {
  key: 0,
  class: "summary-sub-row"
}, xk = { class: "summary-sub-label" }, Sk = {
  key: 1,
  class: "summary-sub-row warning"
}, Ik = { class: "summary-sub-label" }, Ek = { class: "summary-row" }, Pk = { class: "summary-value" }, Rk = { class: "summary-row" }, Tk = { class: "summary-value" }, Mk = { class: "deployment-summary" }, Dk = { class: "summary-columns" }, Lk = { class: "summary-column" }, zk = { class: "pricing-row" }, Uk = { class: "pricing-value" }, Nk = { class: "pricing-row" }, Ok = { class: "pricing-value" }, Bk = { class: "pricing-row" }, Ak = { class: "pricing-value" }, Fk = { class: "pricing-row total" }, Vk = { class: "pricing-value" }, Wk = { class: "summary-column" }, Gk = { class: "spec-row" }, jk = { class: "spec-row" }, Kk = {
  key: 0,
  class: "spec-row"
}, Hk = {
  key: 1,
  class: "spec-row spot-warning"
}, qk = {
  key: 4,
  class: "deploy-actions"
}, Yk = { class: "progress-content" }, Jk = { class: "phase-indicator" }, Xk = { key: 0 }, Qk = { key: 1 }, Zk = { key: 2 }, eb = {
  key: 3,
  class: "spinner"
}, tb = { class: "phase-text" }, sb = { class: "phase-name" }, ob = { class: "phase-detail" }, nb = {
  key: 0,
  class: "ready-actions"
}, ab = { class: "console-link" }, lb = ["href"], ib = /* @__PURE__ */ ee({
  __name: "RunPodTab",
  emits: ["toast", "navigate", "deployed"],
  setup(t, { emit: c }) {
    const n = c, {
      getDeploySummary: i,
      testRunPodConnection: f,
      getNetworkVolumes: p,
      getRunPodGpuTypes: u,
      deployToRunPod: v,
      getDeploymentStatus: d,
      getStoredRunPodKey: m,
      clearRunPodKey: y,
      validateDeploy: _,
      getRemotes: k,
      getRemoteSyncStatus: h,
      fetchRemote: E,
      pushToRemote: D,
      getDataCenters: $
    } = We(), S = w(!1), V = w(""), R = w(!1), C = w(!1), H = w(null), F = w(null), j = w(""), T = w(""), M = w(""), A = w("SECURE"), ie = w("ON_DEMAND"), ae = w("my-comfyui-deploy"), Q = w([]), ve = w({}), X = w(!1), N = w(null), B = w(null), I = w(null), me = w([]), te = w(!1), we = w([]), be = w(!1), Te = w([]), De = w(!1), ce = w(null), he = w(!1), Pe = w(!1), re = w(null), Y = w(!1), Re = w(null), ge = w(null), Ke = w(null), Xe = w(!1), Qe = w(null), Ie = w(!1), He = w(!1), Ge = U(() => we.value.find((le) => le.id === T.value) || null), qe = U(() => j.value ? we.value.filter((le) => le.data_center_id === j.value) : we.value), rt = U(() => Te.value.filter((le) => le.available)), ke = U(() => N.value && ve.value[N.value] || null), Ve = U(() => {
      if (!N.value) return null;
      const le = Q.value.find((K) => K.name === N.value);
      return (le == null ? void 0 : le.fetch_url) || null;
    }), ot = U(() => R.value && T.value && M.value && Ve.value && !Pe.value && !Xe.value), je = (le) => {
      const K = Te.value.find((Ye) => Ye.id === M.value);
      if (!K) return "0.00";
      if (le === "SECURE") return (K.securePrice ?? 0).toFixed(2);
      if (le === "COMMUNITY") return (K.communityPrice ?? 0).toFixed(2);
      const Se = A.value === "SECURE";
      return le === "ON_DEMAND" ? Se ? (K.securePrice ?? 0).toFixed(2) : (K.communityPrice ?? 0).toFixed(2) : Se ? (K.secureSpotPrice ?? 0).toFixed(2) : (K.communitySpotPrice ?? 0).toFixed(2);
    }, de = U(() => {
      const le = Te.value.find((kt) => kt.id === M.value), K = we.value.find((kt) => kt.id === T.value);
      if (!le) return null;
      const Se = A.value === "SECURE", Ye = ie.value === "SPOT";
      let vt;
      Ye ? vt = Se ? le.secureSpotPrice ?? 0 : le.communitySpotPrice ?? 0 : vt = Se ? le.securePrice ?? 0 : le.communityPrice ?? 0;
      const Ct = K ? K.size_gb * 14e-5 : 0, xt = 4e-3;
      return {
        gpu: vt,
        volume: Ct,
        container: xt,
        total: vt + Ct + xt
      };
    });
    async function q() {
      await ut(), await Promise.all([nt(), J()]);
    }
    async function J() {
      X.value = !0;
      try {
        const le = await k();
        Q.value = le.remotes, await Promise.all(
          le.remotes.map(async (Se) => {
            const Ye = await h(Se.name);
            Ye && (ve.value[Se.name] = Ye);
          })
        );
        const K = le.remotes.find((Se) => Se.is_default);
        K ? N.value = K.name : le.remotes.length > 0 && (N.value = le.remotes[0].name);
      } catch {
        n("toast", "Failed to load remotes", "error");
      } finally {
        X.value = !1;
      }
    }
    async function P(le) {
      B.value = le;
      try {
        await E(le);
        const K = await h(le);
        K && (ve.value[le] = K), n("toast", `Fetched from ${le}`, "success");
      } catch {
        n("toast", "Fetch failed", "error");
      } finally {
        B.value = null;
      }
    }
    async function W(le) {
      I.value = le;
      try {
        await D(le, { force: !1 });
        const K = await h(le);
        K && (ve.value[le] = K), n("toast", `Pushed to ${le}`, "success");
      } catch {
        n("toast", "Push failed", "error");
      } finally {
        I.value = null;
      }
    }
    function se(le) {
      N.value = le;
    }
    async function _e() {
      if (V.value) {
        C.value = !0, H.value = null;
        try {
          const le = await f(V.value, !0);
          le.status === "success" ? (R.value = !0, F.value = le.credit_balance ?? null, H.value = { type: "success", message: le.message }, await q()) : H.value = { type: "error", message: le.message };
        } catch (le) {
          H.value = {
            type: "error",
            message: le instanceof Error ? le.message : "Connection test failed"
          };
        } finally {
          C.value = !1;
        }
      }
    }
    async function Oe() {
      try {
        await y(), V.value = "", R.value = !1, H.value = null, F.value = null, me.value = [], j.value = "", we.value = [], T.value = "", Te.value = [], M.value = "", ce.value = null, n("toast", "API key cleared", "info");
      } catch {
        n("toast", "Failed to clear key", "error");
      }
    }
    async function ut() {
      be.value = !0, te.value = !0;
      try {
        const le = await p();
        we.value = le.volumes;
        const K = /* @__PURE__ */ new Map();
        for (const Se of le.volumes)
          Se.data_center_id && !K.has(Se.data_center_id) && K.set(Se.data_center_id, {
            id: Se.data_center_id,
            name: Se.data_center_name || Se.data_center_id,
            available: !0
          });
        if (le.volumes.length === 0) {
          const Se = await $();
          me.value = Se.data_centers;
        } else
          me.value = Array.from(K.values());
        if (we.value.length > 0) {
          const Se = we.value[0];
          T.value = Se.id, Se.data_center_id && (j.value = Se.data_center_id, await wt(Se.data_center_id));
        } else me.value.length > 0 && (j.value = me.value[0].id);
      } catch {
        n("toast", "Failed to load network volumes", "error");
      } finally {
        be.value = !1, te.value = !1;
      }
    }
    async function wt(le) {
      De.value = !0;
      try {
        const K = await u(le);
        Te.value = K.gpu_types;
        const Se = Te.value.find((Ye) => Ye.available);
        Se ? M.value = Se.id : M.value = "";
      } catch {
        n("toast", "Failed to load GPU types", "error");
      } finally {
        De.value = !1;
      }
    }
    it(j, async (le) => {
      if (!le || be.value) return;
      const K = we.value.find((Se) => Se.id === T.value);
      K && K.data_center_id !== le && (T.value = ""), await wt(le);
    }), it(T, async (le) => {
      if (!le) {
        Te.value = [], M.value = "";
        return;
      }
      if (be.value) return;
      const K = we.value.find((Se) => Se.id === le);
      K && K.data_center_id !== j.value ? j.value = K.data_center_id : K && await wt(K.data_center_id);
    });
    async function nt() {
      he.value = !0;
      try {
        ce.value = await i();
      } catch {
        n("toast", "Failed to load environment summary", "error");
      } finally {
        he.value = !1;
      }
    }
    async function Rt() {
      if (!(!M.value || !T.value)) {
        Xe.value = !0, re.value = null;
        try {
          const le = await _();
          Qe.value = le, le.can_export ? le.warnings.models_without_sources.length > 0 ? He.value = !0 : await Ft() : Ie.value = !0;
        } catch (le) {
          re.value = {
            status: "error",
            message: le instanceof Error ? le.message : "Validation failed"
          }, n("toast", "Validation failed", "error");
        } finally {
          Xe.value = !1;
        }
      }
    }
    async function Tt() {
      He.value = !1, await Ft();
    }
    async function Mt() {
      try {
        const le = await _();
        Qe.value = le;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function Ft() {
      Pe.value = !0;
      try {
        let le;
        if (ie.value === "SPOT") {
          const Se = Te.value.find((Ye) => Ye.id === M.value);
          Se && (le = A.value === "SECURE" ? Se.secureSpotPrice : Se.communitySpotPrice);
        }
        const K = await v({
          gpu_type_id: M.value,
          pod_name: ae.value || "my-comfyui-deploy",
          network_volume_id: T.value,
          cloud_type: A.value,
          pricing_type: ie.value,
          spot_bid: le,
          import_source: Ve.value
        });
        re.value = K, K.status === "success" && K.pod_id ? (Re.value = K.pod_id, Y.value = !0, mt(K.pod_id), n("toast", "Deployment started", "success"), n("deployed")) : n("toast", K.message, "error");
      } catch (le) {
        re.value = {
          status: "error",
          message: le instanceof Error ? le.message : "Deployment failed"
        }, n("toast", "Deployment failed", "error");
      } finally {
        Pe.value = !1;
      }
    }
    function mt(le) {
      Dt(le), Ke.value = window.setInterval(() => Dt(le), 3e3);
    }
    function Nt() {
      Ke.value && (clearInterval(Ke.value), Ke.value = null);
    }
    async function Dt(le) {
      try {
        const K = await d(le);
        ge.value = K, (K.phase === "READY" || K.phase === "ERROR" || K.phase === "STOPPED") && (Nt(), K.phase === "READY" && n("toast", "ComfyUI is ready!", "success"), n("deployed"));
      } catch (K) {
        console.error("Failed to poll deployment status:", K);
      }
    }
    function Vt() {
      Y.value = !1, Nt(), Re.value = null, ge.value = null;
    }
    function Yt() {
      var le;
      (le = ge.value) != null && le.comfyui_url && window.open(ge.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function Jt(le) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[le || ""] || "Initializing...";
    }
    function Xt(le) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[le || ""] ?? 10;
    }
    return Be(async () => {
      try {
        const le = await m(!0);
        le.has_key && le.key_preview && (V.value = `****${le.key_preview}`, le.valid ? (R.value = !0, F.value = le.credit_balance ?? null, H.value = { type: "success", message: "Connected to RunPod" }, await q()) : le.error && (H.value = { type: "error", message: le.error }));
      } catch {
      }
    }), ws(() => {
      Nt();
    }), (le, K) => {
      var Se, Ye, vt, Ct, xt, kt;
      return s(), o(G, null, [
        e("div", xw, [
          b(Ue, { title: "RUNPOD API KEY" }, {
            default: l(() => [
              e("div", Sw, [
                e("div", Iw, [
                  e("div", Ew, [
                    Le(e("input", {
                      "onUpdate:modelValue": K[0] || (K[0] = (L) => V.value = L),
                      type: S.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: R.value
                    }, null, 8, Pw), [
                      [xo, V.value]
                    ]),
                    e("button", {
                      class: "toggle-visibility-btn",
                      onClick: K[1] || (K[1] = (L) => S.value = !S.value),
                      title: S.value ? "Hide key" : "Show key"
                    }, a(S.value ? "👁" : "👁‍🗨"), 9, Rw)
                  ]),
                  R.value ? r("", !0) : (s(), x(Z, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: C.value,
                    disabled: !V.value || C.value,
                    onClick: _e
                  }, {
                    default: l(() => [...K[16] || (K[16] = [
                      g(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  R.value ? (s(), x(Z, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: Oe
                  }, {
                    default: l(() => [...K[17] || (K[17] = [
                      g(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : r("", !0)
                ]),
                H.value ? (s(), o("div", {
                  key: 0,
                  class: fe(["connection-status", H.value.type])
                }, [
                  e("span", Tw, a(H.value.type === "success" ? "✓" : "✕"), 1),
                  e("span", Mw, a(H.value.message), 1),
                  F.value !== null ? (s(), o("span", Dw, " $" + a(F.value.toFixed(2)) + " credit ", 1)) : r("", !0)
                ], 2)) : r("", !0),
                K[18] || (K[18] = e("div", { class: "api-key-help" }, [
                  e("span", { class: "help-icon" }, "i"),
                  e("span", { class: "help-text" }, [
                    g(" Get your API key at "),
                    e("a", {
                      href: "https://runpod.io/console/user/settings",
                      target: "_blank",
                      rel: "noopener"
                    }, "runpod.io/console/user/settings"),
                    g(". Key stored locally, never sent to ComfyGit servers. ")
                  ])
                ], -1))
              ])
            ]),
            _: 1
          }),
          R.value ? (s(), x(Ue, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: l(() => [
              e("div", Lw, [
                e("div", zw, [
                  K[19] || (K[19] = e("label", { class: "config-label" }, "Region", -1)),
                  Le(e("select", {
                    "onUpdate:modelValue": K[2] || (K[2] = (L) => j.value = L),
                    class: "config-select",
                    disabled: te.value
                  }, [
                    te.value ? (s(), o("option", Nw, "Loading...")) : j.value ? r("", !0) : (s(), o("option", Ow, "Select a region")),
                    (s(!0), o(G, null, ne(me.value, (L) => (s(), o("option", {
                      key: L.id,
                      value: L.id,
                      disabled: !L.available
                    }, a(L.id) + " (" + a(L.name) + ")" + a(L.available ? "" : " [Unavailable]"), 9, Bw))), 128))
                  ], 8, Uw), [
                    [St, j.value]
                  ])
                ]),
                e("div", Aw, [
                  K[24] || (K[24] = e("label", { class: "config-label" }, "Network Volume", -1)),
                  be.value ? (s(), o("div", Fw, "Loading volumes...")) : qe.value.length === 0 ? (s(), o(G, { key: 1 }, [
                    e("div", Vw, [
                      K[20] || (K[20] = e("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      e("span", Ww, "No volumes in " + a(j.value || "this region"), 1)
                    ]),
                    K[21] || (K[21] = e("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    K[22] || (K[22] = e("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (s(), o(G, { key: 2 }, [
                    Le(e("select", {
                      "onUpdate:modelValue": K[3] || (K[3] = (L) => T.value = L),
                      class: "config-select"
                    }, [
                      (s(!0), o(G, null, ne(qe.value, (L) => (s(), o("option", {
                        key: L.id,
                        value: L.id
                      }, a(L.name) + " (" + a(L.size_gb) + "GB) ", 9, Gw))), 128))
                    ], 512), [
                      [St, T.value]
                    ]),
                    K[23] || (K[23] = e("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                e("div", jw, [
                  K[25] || (K[25] = e("label", { class: "config-label" }, "GPU Type", -1)),
                  Le(e("select", {
                    "onUpdate:modelValue": K[4] || (K[4] = (L) => M.value = L),
                    class: "config-select",
                    disabled: De.value || !T.value
                  }, [
                    T.value ? De.value ? (s(), o("option", qw, "Loading GPUs...")) : rt.value.length === 0 ? (s(), o("option", Yw, "No GPUs available in this region")) : r("", !0) : (s(), o("option", Hw, "Select a volume first")),
                    (s(!0), o(G, null, ne(rt.value, (L) => (s(), o("option", {
                      key: L.id,
                      value: L.id
                    }, a(L.displayName) + " (" + a(L.memoryInGb) + "GB) - $" + a(A.value === "SECURE" ? (L.securePrice ?? 0).toFixed(2) : (L.communityPrice ?? 0).toFixed(2)) + "/hr " + a(L.stockStatus ? `[${L.stockStatus}]` : ""), 9, Jw))), 128))
                  ], 8, Kw), [
                    [St, M.value]
                  ])
                ]),
                e("div", Xw, [
                  K[26] || (K[26] = e("label", { class: "config-label" }, "Cloud Type", -1)),
                  e("div", Qw, [
                    e("label", Zw, [
                      Le(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": K[5] || (K[5] = (L) => A.value = L),
                        value: "SECURE"
                      }, null, 512), [
                        [Ut, A.value]
                      ]),
                      e("span", ek, "Secure ($" + a(je("SECURE")) + "/hr)", 1)
                    ]),
                    e("label", tk, [
                      Le(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": K[6] || (K[6] = (L) => A.value = L),
                        value: "COMMUNITY"
                      }, null, 512), [
                        [Ut, A.value]
                      ]),
                      e("span", sk, "Community ($" + a(je("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                e("div", ok, [
                  K[27] || (K[27] = e("label", { class: "config-label" }, [
                    g(" Pricing "),
                    e("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  e("div", nk, [
                    e("label", ak, [
                      Le(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": K[7] || (K[7] = (L) => ie.value = L),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [Ut, ie.value]
                      ]),
                      e("span", lk, "On-Demand ($" + a(je("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    e("label", ik, [
                      Le(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": K[8] || (K[8] = (L) => ie.value = L),
                        value: "SPOT"
                      }, null, 512), [
                        [Ut, ie.value]
                      ]),
                      e("span", rk, "Spot ($" + a(je("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                e("div", dk, [
                  K[28] || (K[28] = e("label", { class: "config-label" }, "Pod Name", -1)),
                  Le(e("input", {
                    "onUpdate:modelValue": K[9] || (K[9] = (L) => ae.value = L),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [Bt, ae.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : r("", !0),
          R.value ? (s(), x(Ue, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: l(() => [
              X.value ? (s(), o("div", ck, "Loading remotes...")) : Q.value.length === 0 ? (s(), o("div", uk, [
                K[30] || (K[30] = e("div", { class: "empty-message" }, [
                  e("span", { class: "empty-icon" }, "🌐"),
                  e("span", { class: "empty-text" }, "No Git remotes configured"),
                  e("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                b(Z, {
                  variant: "primary",
                  size: "xs",
                  onClick: K[10] || (K[10] = (L) => n("navigate", "remotes"))
                }, {
                  default: l(() => [...K[29] || (K[29] = [
                    g(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (s(), o(G, { key: 2 }, [
                e("div", mk, [
                  (s(!0), o(G, null, ne(Q.value, (L) => (s(), x(Cw, {
                    key: L.name,
                    remote: L,
                    "sync-status": ve.value[L.name],
                    "is-selected": N.value === L.name,
                    "is-fetching": B.value === L.name,
                    "is-pushing": I.value === L.name,
                    onFetch: P,
                    onPush: W,
                    onSelect: se
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                ke.value && ke.value.ahead > 0 ? (s(), o("div", vk, [
                  K[31] || (K[31] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("div", fk, [
                    e("strong", null, a(ke.value.ahead) + " unpushed commit" + a(ke.value.ahead !== 1 ? "s" : ""), 1),
                    e("p", null, "Push to '" + a(N.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  b(Z, {
                    variant: "primary",
                    size: "xs",
                    loading: I.value === N.value,
                    onClick: K[11] || (K[11] = (L) => N.value && W(N.value))
                  }, {
                    default: l(() => [
                      g(" Push to " + a(N.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : r("", !0),
                e("div", pk, [
                  b(Z, {
                    variant: "link",
                    size: "xs",
                    onClick: K[12] || (K[12] = (L) => n("navigate", "remotes"))
                  }, {
                    default: l(() => [...K[32] || (K[32] = [
                      g(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : r("", !0),
          R.value ? (s(), x(Ue, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: l(() => [
              e("div", gk, [
                he.value ? (s(), o("div", hk, "Loading environment summary...")) : ce.value ? (s(), o(G, { key: 1 }, [
                  e("div", yk, [
                    K[33] || (K[33] = e("span", { class: "summary-label" }, "ComfyUI", -1)),
                    e("span", wk, a(ce.value.comfyui_version), 1)
                  ]),
                  e("div", kk, [
                    K[34] || (K[34] = e("span", { class: "summary-label" }, "Nodes", -1)),
                    e("span", bk, a(ce.value.node_count) + " custom nodes", 1)
                  ]),
                  e("div", _k, [
                    K[35] || (K[35] = e("span", { class: "summary-label" }, "Models", -1)),
                    e("span", $k, a(ce.value.model_count) + " models", 1)
                  ]),
                  ce.value.models_with_sources > 0 ? (s(), o("div", Ck, [
                    e("span", xk, "└─ " + a(ce.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : r("", !0),
                  ce.value.models_without_sources > 0 ? (s(), o("div", Sk, [
                    e("span", Ik, "└─ " + a(ce.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : r("", !0),
                  e("div", Ek, [
                    K[36] || (K[36] = e("span", { class: "summary-label" }, "Workflows", -1)),
                    e("span", Pk, a(ce.value.workflow_count) + " committed", 1)
                  ]),
                  e("div", Rk, [
                    K[37] || (K[37] = e("span", { class: "summary-label" }, "Package", -1)),
                    e("span", Tk, "~" + a(ce.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : r("", !0)
              ])
            ]),
            _: 1
          })) : r("", !0),
          R.value && de.value ? (s(), x(Ue, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: l(() => {
              var L, ue;
              return [
                e("div", Mk, [
                  e("div", Dk, [
                    e("div", Lk, [
                      K[42] || (K[42] = e("div", { class: "column-header" }, "Pricing", -1)),
                      e("div", zk, [
                        K[38] || (K[38] = e("span", { class: "pricing-label" }, "GPU:", -1)),
                        e("span", Uk, "$" + a(de.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      e("div", Nk, [
                        K[39] || (K[39] = e("span", { class: "pricing-label" }, "Volume:", -1)),
                        e("span", Ok, "$" + a(de.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      e("div", Bk, [
                        K[40] || (K[40] = e("span", { class: "pricing-label" }, "Disk:", -1)),
                        e("span", Ak, "$" + a(de.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      K[43] || (K[43] = e("div", { class: "pricing-divider" }, null, -1)),
                      e("div", Fk, [
                        K[41] || (K[41] = e("span", { class: "pricing-label" }, "Total:", -1)),
                        e("span", Vk, "~$" + a(de.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    e("div", Wk, [
                      K[45] || (K[45] = e("div", { class: "column-header" }, "Pod Specs", -1)),
                      e("div", Gk, [
                        e("span", null, a(((L = Te.value.find((O) => O.id === M.value)) == null ? void 0 : L.displayName) || "GPU") + " (" + a(((ue = Te.value.find((O) => O.id === M.value)) == null ? void 0 : ue.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      e("div", jk, [
                        e("span", null, "Region: " + a(j.value), 1)
                      ]),
                      Ge.value ? (s(), o("div", Kk, [
                        e("span", null, "Volume: " + a(Ge.value.name), 1)
                      ])) : r("", !0),
                      ie.value === "SPOT" ? (s(), o("div", Hk, [...K[44] || (K[44] = [
                        e("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : r("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : r("", !0),
          R.value ? (s(), o("div", qk, [
            b(Z, {
              variant: "primary",
              size: "md",
              loading: Xe.value || Pe.value,
              disabled: !ot.value,
              onClick: Rt
            }, {
              default: l(() => [
                K[46] || (K[46] = e("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                  e("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                ], -1)),
                g(" " + a(Xe.value ? "Validating..." : Pe.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : r("", !0),
          re.value ? (s(), x(Ue, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: l(() => [
              b(Ze, {
                status: re.value.status === "success" ? "synced" : "broken"
              }, At({
                icon: l(() => [
                  g(a(re.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: l(() => [
                  g(a(re.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: l(() => [
                  g(a(re.value.message), 1)
                ]),
                actions: l(() => [
                  b(Z, {
                    variant: "ghost",
                    size: "xs",
                    onClick: K[13] || (K[13] = (L) => re.value = null)
                  }, {
                    default: l(() => [...K[47] || (K[47] = [
                      g(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                re.value.pod_id ? {
                  name: "details",
                  fn: l(() => [
                    b(Fe, {
                      label: "Pod ID:",
                      value: re.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : r("", !0)
        ]),
        Y.value ? (s(), x(st, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((Se = ge.value) == null ? void 0 : Se.phase) === "READY" || ((Ye = ge.value) == null ? void 0 : Ye.phase) === "ERROR" || ((vt = ge.value) == null ? void 0 : vt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: Vt
        }, At({
          body: l(() => {
            var L, ue, O, z, pe, Ce, ze, Ae, dt, Lt, Qt, Zt;
            return [
              e("div", Yk, [
                e("div", Jk, [
                  e("div", {
                    class: fe(["phase-icon", (ue = (L = ge.value) == null ? void 0 : L.phase) == null ? void 0 : ue.toLowerCase()])
                  }, [
                    ((O = ge.value) == null ? void 0 : O.phase) === "READY" ? (s(), o("span", Xk, "✓")) : ((z = ge.value) == null ? void 0 : z.phase) === "ERROR" ? (s(), o("span", Qk, "✕")) : ((pe = ge.value) == null ? void 0 : pe.phase) === "STOPPED" ? (s(), o("span", Zk, "○")) : (s(), o("span", eb, "⟳"))
                  ], 2),
                  e("div", tb, [
                    e("div", sb, a(Jt((Ce = ge.value) == null ? void 0 : Ce.phase)), 1),
                    e("div", ob, a(((ze = ge.value) == null ? void 0 : ze.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                b(ks, {
                  progress: Xt((Ae = ge.value) == null ? void 0 : Ae.phase),
                  variant: ((dt = ge.value) == null ? void 0 : dt.phase) === "ERROR" ? "error" : ((Lt = ge.value) == null ? void 0 : Lt.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((Qt = ge.value) == null ? void 0 : Qt.phase) === "READY" ? (s(), o("div", nb, [
                  b(Z, {
                    variant: "primary",
                    size: "md",
                    onClick: Yt
                  }, {
                    default: l(() => [...K[48] || (K[48] = [
                      g(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : r("", !0),
                e("div", ab, [
                  (Zt = ge.value) != null && Zt.console_url ? (s(), o("a", {
                    key: 0,
                    href: ge.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, lb)) : r("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((Ct = ge.value) == null ? void 0 : Ct.phase) === "READY" || ((xt = ge.value) == null ? void 0 : xt.phase) === "ERROR" || ((kt = ge.value) == null ? void 0 : kt.phase) === "STOPPED" ? {
            name: "footer",
            fn: l(() => [
              b(Z, {
                variant: "ghost",
                size: "xs",
                onClick: Vt
              }, {
                default: l(() => [...K[49] || (K[49] = [
                  g(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : r("", !0),
        Ie.value && Qe.value ? (s(), x(uo, {
          key: 1,
          issues: Qe.value.blocking_issues,
          onClose: K[14] || (K[14] = (L) => Ie.value = !1)
        }, null, 8, ["issues"])) : r("", !0),
        He.value && Qe.value ? (s(), x(mo, {
          key: 2,
          models: Qe.value.warnings.models_without_sources,
          onConfirm: Tt,
          onCancel: K[15] || (K[15] = (L) => He.value = !1),
          onRevalidate: Mt
        }, null, 8, ["models"])) : r("", !0)
      ], 64);
    };
  }
}), rb = /* @__PURE__ */ oe(ib, [["__scopeId", "data-v-925ec410"]]), db = /* @__PURE__ */ ee({
  __name: "DeploySection",
  emits: ["toast", "navigate"],
  setup(t, { emit: c }) {
    const n = c, {
      instances: i,
      isLoading: f,
      liveInstanceCount: p,
      refreshInstances: u,
      stopInstance: v,
      startInstance: d,
      terminateInstance: m,
      startPolling: y,
      stopPolling: _
    } = fo(), k = w(!1), h = w("instances"), E = w(null), D = U(() => [
      {
        id: "instances",
        label: "Instances",
        badge: p.value > 0 ? String(p.value) : void 0
      },
      {
        id: "runpod",
        label: "RunPod"
      }
    ]);
    async function $(C) {
      E.value = C;
      try {
        await v(C), n("toast", "Instance stopped", "success");
      } catch (H) {
        n("toast", H instanceof Error ? H.message : "Failed to stop instance", "error");
      } finally {
        E.value = null;
      }
    }
    async function S(C) {
      E.value = C;
      try {
        await d(C), n("toast", "Instance starting...", "success");
      } catch (H) {
        n("toast", H instanceof Error ? H.message : "Failed to start instance", "error");
      } finally {
        E.value = null;
      }
    }
    async function V(C) {
      E.value = C;
      try {
        await m(C), n("toast", "Instance terminated", "success");
      } catch (H) {
        n("toast", H instanceof Error ? H.message : "Failed to terminate instance", "error");
      } finally {
        E.value = null;
      }
    }
    async function R() {
      await u(), h.value = "instances";
    }
    return Be(() => {
      u(), y();
    }), ws(() => {
      _();
    }), (C, H) => (s(), o(G, null, [
      b(et, null, {
        header: l(() => [
          b(tt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: H[0] || (H[0] = (F) => k.value = !0)
          })
        ]),
        content: l(() => [
          b(ao, {
            modelValue: h.value,
            "onUpdate:modelValue": H[1] || (H[1] = (F) => h.value = F),
            tabs: D.value
          }, null, 8, ["modelValue", "tabs"]),
          h.value === "instances" ? (s(), x(cw, {
            key: 0,
            instances: $e(i),
            "is-loading": $e(f),
            "action-loading-id": E.value,
            onRefresh: $e(u),
            onStop: $,
            onStart: S,
            onTerminate: V
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : r("", !0),
          h.value === "runpod" ? (s(), x(rb, {
            key: 1,
            onToast: H[2] || (H[2] = (F, j) => n("toast", F, j)),
            onNavigate: H[3] || (H[3] = (F) => n("navigate", F)),
            onDeployed: R
          })) : r("", !0)
        ]),
        _: 1
      }),
      b(yt, {
        show: k.value,
        title: "Deploy to Cloud",
        onClose: H[4] || (H[4] = (F) => k.value = !1)
      }, {
        content: l(() => [...H[5] || (H[5] = [
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
                  g(" - All committed workflows")
                ]),
                e("li", null, [
                  e("strong", null, "Custom Nodes"),
                  g(" - Installed automatically")
                ]),
                e("li", null, [
                  e("strong", null, "Models"),
                  g(" - Downloaded from sources (when available)")
                ]),
                e("li", null, [
                  e("strong", null, "Configuration"),
                  g(" - Environment settings")
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
      }, 8, ["show"])
    ], 64));
  }
}), cb = /* @__PURE__ */ oe(db, [["__scopeId", "data-v-24b65bab"]]), ub = { class: "header-info" }, mb = { class: "commit-hash" }, vb = {
  key: 0,
  class: "commit-refs"
}, fb = { class: "commit-message" }, pb = { class: "commit-date" }, gb = {
  key: 0,
  class: "loading"
}, hb = {
  key: 1,
  class: "changes-section"
}, yb = { class: "stats-row" }, wb = { class: "stat" }, kb = { class: "stat insertions" }, bb = { class: "stat deletions" }, _b = {
  key: 0,
  class: "change-group"
}, $b = {
  key: 1,
  class: "change-group"
}, Cb = {
  key: 0,
  class: "version"
}, xb = {
  key: 2,
  class: "change-group"
}, Sb = { class: "change-item" }, Ib = /* @__PURE__ */ ee({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = We(), i = w(null), f = w(!0), p = U(() => {
      if (!i.value) return !1;
      const v = i.value.changes.workflows;
      return v.added.length > 0 || v.modified.length > 0 || v.deleted.length > 0;
    }), u = U(() => {
      if (!i.value) return !1;
      const v = i.value.changes.nodes;
      return v.added.length > 0 || v.removed.length > 0;
    });
    return Be(async () => {
      try {
        i.value = await n(c.commit.hash);
      } finally {
        f.value = !1;
      }
    }), (v, d) => (s(), x(st, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (m) => v.$emit("close"))
    }, {
      header: l(() => {
        var m, y, _, k;
        return [
          e("div", ub, [
            d[4] || (d[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", mb, a(((m = i.value) == null ? void 0 : m.short_hash) || t.commit.short_hash || ((y = t.commit.hash) == null ? void 0 : y.slice(0, 7))), 1),
            (k = (_ = i.value) == null ? void 0 : _.refs) != null && k.length ? (s(), o("span", vb, [
              (s(!0), o(G, null, ne(i.value.refs, (h) => (s(), o("span", {
                key: h,
                class: "ref-badge"
              }, a(h), 1))), 128))
            ])) : r("", !0)
          ]),
          b(ye, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (h) => v.$emit("close"))
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
        var m, y;
        return [
          e("div", fb, a(((m = i.value) == null ? void 0 : m.message) || t.commit.message), 1),
          e("div", pb, a(((y = i.value) == null ? void 0 : y.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          f.value ? (s(), o("div", gb, "Loading details...")) : i.value ? (s(), o("div", hb, [
            e("div", yb, [
              e("span", wb, a(i.value.stats.files_changed) + " files", 1),
              e("span", kb, "+" + a(i.value.stats.insertions), 1),
              e("span", bb, "-" + a(i.value.stats.deletions), 1)
            ]),
            p.value ? (s(), o("div", _b, [
              b(as, { variant: "section" }, {
                default: l(() => [...d[6] || (d[6] = [
                  g("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(G, null, ne(i.value.changes.workflows.added, (_) => (s(), o("div", {
                key: "add-" + _,
                class: "change-item added"
              }, [
                d[7] || (d[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(_), 1)
              ]))), 128)),
              (s(!0), o(G, null, ne(i.value.changes.workflows.modified, (_) => (s(), o("div", {
                key: "mod-" + _,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(_), 1)
              ]))), 128)),
              (s(!0), o(G, null, ne(i.value.changes.workflows.deleted, (_) => (s(), o("div", {
                key: "del-" + _,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(_), 1)
              ]))), 128))
            ])) : r("", !0),
            u.value ? (s(), o("div", $b, [
              b(as, { variant: "section" }, {
                default: l(() => [...d[10] || (d[10] = [
                  g("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(G, null, ne(i.value.changes.nodes.added, (_) => (s(), o("div", {
                key: "add-" + _.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(_.name), 1),
                _.version ? (s(), o("span", Cb, "(" + a(_.version) + ")", 1)) : r("", !0)
              ]))), 128)),
              (s(!0), o(G, null, ne(i.value.changes.nodes.removed, (_) => (s(), o("div", {
                key: "rem-" + _.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(_.name), 1)
              ]))), 128))
            ])) : r("", !0),
            i.value.changes.models.resolved > 0 ? (s(), o("div", xb, [
              b(as, { variant: "section" }, {
                default: l(() => [...d[13] || (d[13] = [
                  g("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", Sb, [
                d[14] || (d[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : r("", !0)
          ])) : r("", !0)
        ];
      }),
      footer: l(() => [
        b(ye, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (m) => v.$emit("createBranch", t.commit))
        }, {
          default: l(() => [...d[15] || (d[15] = [
            g(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        b(ye, {
          variant: "primary",
          onClick: d[2] || (d[2] = (m) => v.$emit("checkout", t.commit))
        }, {
          default: l(() => [...d[16] || (d[16] = [
            g(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Eb = /* @__PURE__ */ oe(Ib, [["__scopeId", "data-v-d256ff6d"]]), Pb = { class: "base-textarea-wrapper" }, Rb = ["value", "rows", "placeholder", "disabled", "maxlength"], Tb = {
  key: 0,
  class: "base-textarea-count"
}, Mb = /* @__PURE__ */ ee({
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
    function f(p) {
      p.shiftKey || p.ctrlKey || p.metaKey || n.submitOnEnter && (p.preventDefault(), i("submit"));
    }
    return (p, u) => (s(), o("div", Pb, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: u[0] || (u[0] = (v) => p.$emit("update:modelValue", v.target.value)),
        onKeydown: [
          u[1] || (u[1] = $t(Ne((v) => p.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          u[2] || (u[2] = $t(Ne((v) => p.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          $t(f, ["enter"])
        ]
      }, null, 40, Rb),
      t.showCharCount && t.maxLength ? (s(), o("div", Tb, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : r("", !0)
    ]));
  }
}), Gs = /* @__PURE__ */ oe(Mb, [["__scopeId", "data-v-c6d16c93"]]), Db = ["checked", "disabled"], Lb = { class: "base-checkbox-box" }, zb = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Ub = {
  key: 0,
  class: "base-checkbox-label"
}, Nb = /* @__PURE__ */ ee({
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
      }, null, 40, Db),
      e("span", Lb, [
        t.modelValue ? (s(), o("svg", zb, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : r("", !0)
      ]),
      c.$slots.default ? (s(), o("span", Ub, [
        Ee(c.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), js = /* @__PURE__ */ oe(Nb, [["__scopeId", "data-v-bf17c831"]]), Ob = { class: "popover-header" }, Bb = { class: "popover-body" }, Ab = {
  key: 0,
  class: "changes-summary"
}, Fb = {
  key: 0,
  class: "change-item"
}, Vb = {
  key: 1,
  class: "change-item"
}, Wb = {
  key: 2,
  class: "change-item"
}, Gb = {
  key: 3,
  class: "change-item"
}, jb = {
  key: 4,
  class: "change-item"
}, Kb = {
  key: 5,
  class: "change-item"
}, Hb = {
  key: 1,
  class: "no-changes"
}, qb = {
  key: 2,
  class: "loading"
}, Yb = {
  key: 3,
  class: "issues-error"
}, Jb = { class: "error-header" }, Xb = { class: "error-title" }, Qb = { class: "issues-list" }, Zb = { class: "message-section" }, e_ = { class: "popover-footer" }, t_ = {
  key: 1,
  class: "commit-popover"
}, s_ = { class: "popover-header" }, o_ = { class: "popover-body" }, n_ = {
  key: 0,
  class: "changes-summary"
}, a_ = {
  key: 0,
  class: "change-item"
}, l_ = {
  key: 1,
  class: "change-item"
}, i_ = {
  key: 2,
  class: "change-item"
}, r_ = {
  key: 3,
  class: "change-item"
}, d_ = {
  key: 4,
  class: "change-item"
}, c_ = {
  key: 5,
  class: "change-item"
}, u_ = {
  key: 1,
  class: "no-changes"
}, m_ = {
  key: 2,
  class: "loading"
}, v_ = {
  key: 3,
  class: "issues-error"
}, f_ = { class: "error-header" }, p_ = { class: "error-title" }, g_ = { class: "issues-list" }, h_ = { class: "message-section" }, y_ = { class: "popover-footer" }, w_ = /* @__PURE__ */ ee({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, i = c, { commit: f } = We(), p = w(""), u = w(!1), v = w(!1), d = U(() => {
      if (!n.status) return !1;
      const E = n.status.workflows;
      return E.new.length > 0 || E.modified.length > 0 || E.deleted.length > 0 || n.status.has_changes;
    }), m = U(() => {
      if (!n.status) return !1;
      const E = n.status.workflows, D = n.status.git_changes;
      return E.new.length > 0 || E.modified.length > 0 || E.deleted.length > 0 || D.nodes_added.length > 0 || D.nodes_removed.length > 0;
    }), y = U(() => {
      var E;
      return (E = n.status) != null && E.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (D) => D.has_issues && (D.sync_state === "new" || D.sync_state === "modified")
      ) : [];
    }), _ = U(() => y.value.length > 0), k = U(() => _.value && !v.value);
    async function h() {
      var E, D, $;
      if (!(_.value && !v.value) && !(!d.value || !p.value.trim() || u.value)) {
        u.value = !0;
        try {
          const S = await f(p.value.trim(), v.value);
          if (S.status === "success") {
            const V = `Committed: ${((E = S.summary) == null ? void 0 : E.new) || 0} new, ${((D = S.summary) == null ? void 0 : D.modified) || 0} modified, ${(($ = S.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            i("committed", { success: !0, message: V });
          } else S.status === "no_changes" ? i("committed", { success: !1, message: "No changes to commit" }) : S.status === "blocked" ? i("committed", { success: !1, message: 'Commit blocked - enable "Allow issues" to force commit' }) : i("committed", { success: !1, message: S.message || "Commit failed" });
        } catch (S) {
          i("committed", { success: !1, message: S instanceof Error ? S.message : "Commit failed" });
        } finally {
          u.value = !1;
        }
      }
    }
    return (E, D) => t.asModal ? (s(), x(Je, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: D[5] || (D[5] = ($) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: D[4] || (D[4] = Ne(() => {
          }, ["stop"]))
        }, [
          e("div", Ob, [
            D[11] || (D[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: D[0] || (D[0] = ($) => i("close"))
            }, [...D[10] || (D[10] = [
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
          e("div", Bb, [
            t.status && d.value ? (s(), o("div", Ab, [
              t.status.workflows.new.length ? (s(), o("div", Fb, [
                D[12] || (D[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : r("", !0),
              t.status.workflows.modified.length ? (s(), o("div", Vb, [
                D[13] || (D[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : r("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", Wb, [
                D[14] || (D[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", Gb, [
                D[15] || (D[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", jb, [
                D[16] || (D[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : r("", !0),
              m.value ? r("", !0) : (s(), o("div", Kb, [...D[17] || (D[17] = [
                e("span", { class: "change-icon modified" }, "~", -1),
                e("span", null, "Configuration updated", -1)
              ])]))
            ])) : t.status ? (s(), o("div", Hb, " No changes to commit ")) : (s(), o("div", qb, " Loading... ")),
            _.value ? (s(), o("div", Yb, [
              e("div", Jb, [
                D[18] || (D[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Xb, a(y.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", Qb, [
                (s(!0), o(G, null, ne(y.value, ($) => (s(), o("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a($.name), 1),
                  g(": " + a($.issue_summary), 1)
                ]))), 128))
              ]),
              b(js, {
                modelValue: v.value,
                "onUpdate:modelValue": D[1] || (D[1] = ($) => v.value = $),
                class: "allow-issues-toggle"
              }, {
                default: l(() => [...D[19] || (D[19] = [
                  g(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : r("", !0),
            e("div", Zb, [
              b(Gs, {
                modelValue: p.value,
                "onUpdate:modelValue": D[2] || (D[2] = ($) => p.value = $),
                placeholder: k.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || u.value || k.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: h,
                onSubmit: h
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          e("div", e_, [
            b(ye, {
              variant: "secondary",
              onClick: D[3] || (D[3] = ($) => i("close"))
            }, {
              default: l(() => [...D[20] || (D[20] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(ye, {
              variant: v.value ? "danger" : "primary",
              disabled: !d.value || !p.value.trim() || u.value || k.value,
              loading: u.value,
              onClick: h
            }, {
              default: l(() => [
                g(a(u.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", t_, [
      e("div", s_, [
        D[22] || (D[22] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: D[6] || (D[6] = ($) => i("close"))
        }, [...D[21] || (D[21] = [
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
      e("div", o_, [
        t.status && d.value ? (s(), o("div", n_, [
          t.status.workflows.new.length ? (s(), o("div", a_, [
            D[23] || (D[23] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : r("", !0),
          t.status.workflows.modified.length ? (s(), o("div", l_, [
            D[24] || (D[24] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : r("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", i_, [
            D[25] || (D[25] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", r_, [
            D[26] || (D[26] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", d_, [
            D[27] || (D[27] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : r("", !0),
          m.value ? r("", !0) : (s(), o("div", c_, [...D[28] || (D[28] = [
            e("span", { class: "change-icon modified" }, "~", -1),
            e("span", null, "Configuration updated", -1)
          ])]))
        ])) : t.status ? (s(), o("div", u_, " No changes to commit ")) : (s(), o("div", m_, " Loading... ")),
        _.value ? (s(), o("div", v_, [
          e("div", f_, [
            D[29] || (D[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", p_, a(y.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", g_, [
            (s(!0), o(G, null, ne(y.value, ($) => (s(), o("div", {
              key: $.name,
              class: "issue-item"
            }, [
              e("strong", null, a($.name), 1),
              g(": " + a($.issue_summary), 1)
            ]))), 128))
          ]),
          b(js, {
            modelValue: v.value,
            "onUpdate:modelValue": D[7] || (D[7] = ($) => v.value = $),
            class: "allow-issues-toggle"
          }, {
            default: l(() => [...D[30] || (D[30] = [
              g(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : r("", !0),
        e("div", h_, [
          b(Gs, {
            modelValue: p.value,
            "onUpdate:modelValue": D[8] || (D[8] = ($) => p.value = $),
            placeholder: k.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || u.value || k.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: h,
            onSubmit: h
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      e("div", y_, [
        b(ye, {
          variant: "secondary",
          onClick: D[9] || (D[9] = ($) => i("close"))
        }, {
          default: l(() => [...D[31] || (D[31] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b(ye, {
          variant: v.value ? "danger" : "primary",
          disabled: !d.value || !p.value.trim() || u.value || k.value,
          loading: u.value,
          onClick: h
        }, {
          default: l(() => [
            g(a(u.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), po = /* @__PURE__ */ oe(w_, [["__scopeId", "data-v-d0fe6172"]]), k_ = { class: "modal-header" }, b_ = { class: "modal-body" }, __ = { class: "switch-message" }, $_ = { class: "switch-details" }, C_ = { class: "modal-actions" }, x_ = /* @__PURE__ */ ee({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), x(Je, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Ne(() => {
          }, ["stop"]))
        }, [
          e("div", k_, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", b_, [
            e("p", __, [
              n[6] || (n[6] = g(" Switch from ", -1)),
              e("strong", null, a(t.fromEnvironment), 1),
              n[7] || (n[7] = g(" to ", -1)),
              e("strong", null, a(t.toEnvironment), 1),
              n[8] || (n[8] = g("? ", -1))
            ]),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", $_, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", C_, [
            b(Z, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Z, {
              variant: "primary",
              onClick: n[2] || (n[2] = (i) => c.$emit("confirm"))
            }, {
              default: l(() => [...n[12] || (n[12] = [
                g(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), S_ = /* @__PURE__ */ oe(x_, [["__scopeId", "data-v-e9c5253e"]]), I_ = {
  key: 0,
  class: "modal-overlay"
}, E_ = { class: "modal-content" }, P_ = { class: "modal-body" }, R_ = { class: "progress-info" }, T_ = { class: "progress-percentage" }, M_ = { class: "progress-state" }, D_ = { class: "switch-steps" }, L_ = { class: "step-icon" }, z_ = { class: "step-label" }, U_ = /* @__PURE__ */ ee({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, n = U(() => {
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
    }), i = U(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), f = U(() => {
      const p = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], u = p.findIndex((v) => v.state === c.state);
      return p.map((v, d) => {
        let m = "pending", y = "○";
        return d < u ? (m = "completed", y = "✓") : d === u && (m = "active", y = "⟳"), {
          ...v,
          status: m,
          icon: y
        };
      });
    });
    return (p, u) => (s(), x(Je, { to: "body" }, [
      t.show ? (s(), o("div", I_, [
        e("div", E_, [
          u[1] || (u[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", P_, [
            b(ks, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", R_, [
              e("div", T_, a(t.progress) + "%", 1),
              e("div", M_, a(n.value), 1)
            ]),
            e("div", D_, [
              (s(!0), o(G, null, ne(f.value, (v) => (s(), o("div", {
                key: v.state,
                class: fe(["switch-step", v.status])
              }, [
                e("span", L_, a(v.icon), 1),
                e("span", z_, a(v.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), N_ = /* @__PURE__ */ oe(U_, [["__scopeId", "data-v-768a5078"]]), O_ = { class: "modal-header" }, B_ = { class: "modal-body" }, A_ = {
  key: 0,
  class: "node-section"
}, F_ = { class: "node-list" }, V_ = {
  key: 1,
  class: "node-section"
}, W_ = { class: "node-list" }, G_ = { class: "modal-actions" }, j_ = /* @__PURE__ */ ee({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), x(Je, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Ne(() => {
          }, ["stop"]))
        }, [
          e("div", O_, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", B_, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", A_, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", F_, [
                (s(!0), o(G, null, ne(t.mismatchDetails.missing_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + a(i), 1))), 128))
              ])
            ])) : r("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", V_, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", W_, [
                (s(!0), o(G, null, ne(t.mismatchDetails.extra_nodes, (i) => (s(), o("div", {
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
          e("div", G_, [
            b(Z, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[10] || (n[10] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Z, {
              variant: "primary",
              onClick: n[2] || (n[2] = (i) => c.$emit("confirm"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                g(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), K_ = /* @__PURE__ */ oe(j_, [["__scopeId", "data-v-7cad7518"]]), H_ = [
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
], q_ = "v0.0.4", Y_ = "Akatz", J_ = { class: "social-buttons" }, X_ = ["title", "aria-label", "onClick"], Q_ = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Z_ = ["d"], e2 = ["title", "aria-label", "onClick"], t2 = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, s2 = ["d"], o2 = /* @__PURE__ */ ee({
  __name: "SocialButtons",
  setup(t) {
    function c(n) {
      window.open(n, "_blank", "noopener,noreferrer");
    }
    return (n, i) => (s(), o("div", J_, [
      (s(!0), o(G, null, ne($e(H_), (f) => (s(), o(G, {
        key: f.id
      }, [
        f.label ? (s(), o("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: f.title,
          "aria-label": f.ariaLabel,
          onClick: (p) => c(f.url)
        }, [
          g(a(f.label) + " ", 1),
          (s(), o("svg", Q_, [
            e("path", {
              d: f.iconPath
            }, null, 8, Z_)
          ]))
        ], 8, X_)) : (s(), o("button", {
          key: 1,
          class: "icon-btn social-link",
          title: f.title,
          "aria-label": f.ariaLabel,
          onClick: (p) => c(f.url)
        }, [
          (s(), o("svg", t2, [
            e("path", {
              d: f.iconPath
            }, null, 8, s2)
          ]))
        ], 8, e2))
      ], 64))), 128))
    ]));
  }
}), go = /* @__PURE__ */ oe(o2, [["__scopeId", "data-v-4f846342"]]), n2 = { class: "footer-info" }, a2 = { class: "version" }, l2 = { class: "made-by" }, i2 = /* @__PURE__ */ ee({
  __name: "FooterInfo",
  setup(t) {
    return (c, n) => (s(), o("div", n2, [
      e("span", a2, a($e(q_)), 1),
      e("span", l2, [
        n[0] || (n[0] = g(" made with ", -1)),
        n[1] || (n[1] = e("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          e("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        g(" by " + a($e(Y_)), 1)
      ])
    ]));
  }
}), ho = /* @__PURE__ */ oe(i2, [["__scopeId", "data-v-8bc3db0a"]]), r2 = /* @__PURE__ */ ee({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = w(null);
    async function i() {
      var p;
      await ((p = n.value) == null ? void 0 : p.saveSettings());
    }
    function f() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (p, u) => (s(), x(st, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: u[1] || (u[1] = (v) => p.$emit("close"))
    }, {
      body: l(() => [
        b(no, {
          ref_key: "contentRef",
          ref: n,
          "workspace-path": t.workspacePath,
          onSaved: f
        }, null, 8, ["workspace-path"])
      ]),
      footer: l(() => {
        var v;
        return [
          b(ye, {
            variant: "primary",
            disabled: !((v = n.value) != null && v.hasChanges),
            onClick: i
          }, {
            default: l(() => [...u[2] || (u[2] = [
              g(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(ye, {
            variant: "secondary",
            onClick: u[0] || (u[0] = (d) => p.$emit("close"))
          }, {
            default: l(() => [...u[3] || (u[3] = [
              g(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), d2 = /* @__PURE__ */ oe(r2, [["__scopeId", "data-v-fac00ae7"]]), c2 = { class: "header-actions" }, u2 = {
  key: 0,
  class: "wizard-step"
}, m2 = { class: "form-field" }, v2 = ["placeholder"], f2 = {
  key: 0,
  class: "form-error"
}, p2 = { class: "form-field form-field--checkbox" }, g2 = { class: "form-checkbox" }, h2 = {
  key: 0,
  class: "form-field"
}, y2 = ["placeholder"], w2 = {
  key: 0,
  class: "form-info"
}, k2 = {
  key: 1,
  class: "form-suggestion"
}, b2 = {
  key: 2,
  class: "form-error"
}, _2 = {
  key: 3,
  class: "form-info"
}, $2 = {
  key: 1,
  class: "wizard-step"
}, C2 = {
  key: 0,
  class: "progress-check-loading"
}, x2 = {
  key: 0,
  class: "cli-warning"
}, S2 = { class: "cli-warning-header" }, I2 = {
  key: 1,
  class: "env-landing"
}, E2 = { class: "env-list" }, P2 = ["value"], R2 = { class: "env-name" }, T2 = {
  key: 2,
  class: "env-create"
}, M2 = { class: "form-field" }, D2 = { class: "form-field" }, L2 = ["value"], z2 = { class: "form-field" }, U2 = ["disabled"], N2 = ["value"], O2 = { class: "form-field" }, B2 = ["value"], A2 = { class: "form-field form-field--checkbox" }, F2 = { class: "form-checkbox" }, V2 = {
  key: 0,
  class: "form-error"
}, W2 = {
  key: 1,
  class: "env-creating"
}, G2 = { class: "creating-intro" }, j2 = {
  key: 3,
  class: "env-import"
}, K2 = { class: "wizard-footer" }, H2 = { class: "wizard-footer-actions" }, Gt = 10, q2 = 600 * 1e3, Ks = 1800 * 1e3, Y2 = /* @__PURE__ */ ee({
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
      initializeWorkspace: f,
      getInitializeProgress: p,
      validatePath: u,
      createEnvironment: v,
      getCreateProgress: d,
      getImportProgress: m,
      getComfyUIReleases: y
    } = We(), _ = w(n.initialStep || 1), k = w(null), h = w("landing"), E = w(!1), D = w(!1), $ = w(!1), S = w(!1), V = w(null), R = w(n.initialStep === 2), C = w(n.defaultPath), H = w(!!n.detectedModelsDir), F = w(n.detectedModelsDir || ""), j = w(null), T = w(null), M = w(null), A = w(null), ie = w("my-new-env"), ae = w(ro), Q = w("latest"), ve = w(co), X = w(!0), N = w(null), B = w(null), I = w([{ tag_name: "latest", name: "Latest", published_at: "" }]), me = w(!1), te = w(!1), we = w(!1), be = w({ progress: 0, message: "" }), Te = w({ progress: 0, message: "" }), De = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], ce = w(0), he = w(null), Pe = w(0), re = w(null), Y = U(() => {
      var P, W;
      const de = (P = C.value) == null ? void 0 : P.trim(), q = !j.value, J = !H.value || !T.value && ((W = F.value) == null ? void 0 : W.trim());
      return de && q && J;
    }), Re = U(() => {
      var de;
      return (de = ie.value) == null ? void 0 : de.trim();
    }), ge = U(() => !!(_.value === 2 || B.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), Ke = U(() => B.value || n.workspacePath || null);
    async function Xe() {
      var de;
      if (j.value = null, !!((de = C.value) != null && de.trim()))
        try {
          const q = await u({ path: C.value, type: "workspace" });
          q.valid || (j.value = q.error || "Invalid path");
        } catch (q) {
          j.value = q instanceof Error ? q.message : "Validation failed";
        }
    }
    async function Qe() {
      var de;
      if (T.value = null, M.value = null, A.value = null, !!((de = F.value) != null && de.trim()))
        try {
          const q = await u({ path: F.value, type: "models" });
          if (q.valid)
            A.value = q.model_count ?? null;
          else if (T.value = q.error || "Invalid path", q.suggestion) {
            M.value = q.suggestion, F.value = q.suggestion, T.value = null;
            const J = await u({ path: q.suggestion, type: "models" });
            J.valid && (A.value = J.model_count ?? null);
          }
        } catch (q) {
          T.value = q instanceof Error ? q.message : "Validation failed";
        }
    }
    async function Ie() {
      var de, q, J, P, W;
      if (j.value = null, T.value = null, await Xe(), (de = j.value) != null && de.includes("already exists")) {
        j.value = null, B.value = ((q = C.value) == null ? void 0 : q.trim()) || n.defaultPath, _.value = 2, Ge();
        return;
      }
      if (!j.value && !(H.value && ((J = F.value) != null && J.trim()) && (await Qe(), T.value))) {
        te.value = !0;
        try {
          await f({
            workspace_path: ((P = C.value) == null ? void 0 : P.trim()) || n.defaultPath,
            models_directory: H.value && ((W = F.value) == null ? void 0 : W.trim()) || null
          }), ce.value = 0, he.value = Date.now();
          const se = setInterval(async () => {
            var _e;
            if (he.value && Date.now() - he.value > q2) {
              clearInterval(se), te.value = !1, j.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Oe = await p();
              if (ce.value = 0, Oe.state === "idle" && te.value) {
                clearInterval(se), te.value = !1, j.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              be.value = { progress: Oe.progress, message: Oe.message }, Oe.state === "complete" ? (clearInterval(se), te.value = !1, B.value = ((_e = C.value) == null ? void 0 : _e.trim()) || n.defaultPath, _.value = 2, Ge()) : Oe.state === "error" && (clearInterval(se), te.value = !1, j.value = Oe.error || "Workspace creation failed");
            } catch (Oe) {
              ce.value++, console.warn(`Polling failure ${ce.value}/${Gt}:`, Oe), ce.value >= Gt && (clearInterval(se), te.value = !1, j.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (se) {
          te.value = !1, j.value = se instanceof Error ? se.message : "Failed to create workspace";
        }
      }
    }
    async function He() {
      we.value = !0, N.value = null;
      try {
        const de = {
          name: ie.value.trim() || "my-new-env",
          python_version: ae.value,
          comfyui_version: Q.value,
          torch_backend: ve.value,
          switch_after: X.value,
          workspace_path: B.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await v(de)).status === "started") {
          Pe.value = 0, re.value = Date.now();
          const J = setInterval(async () => {
            if (re.value && Date.now() - re.value > Ks) {
              clearInterval(J), we.value = !1, N.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const P = await d();
              if (Pe.value = 0, P.state === "idle" && we.value) {
                clearInterval(J), we.value = !1, N.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Te.value = {
                progress: P.progress ?? 0,
                message: P.message,
                phase: P.phase
              }, P.state === "complete") {
                clearInterval(J), we.value = !1;
                const W = P.environment_name || de.name;
                X.value ? i("complete", W, B.value) : (h.value = "landing", i("environment-created-no-switch", W));
              } else P.state === "error" && (clearInterval(J), we.value = !1, N.value = P.error || "Environment creation failed");
            } catch (P) {
              Pe.value++, console.warn(`Polling failure ${Pe.value}/${Gt}:`, P), Pe.value >= Gt && (clearInterval(J), we.value = !1, N.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (de) {
        we.value = !1, N.value = de instanceof Error ? de.message : "Unknown error";
      }
    }
    async function Ge() {
      me.value = !0;
      try {
        I.value = await y();
      } catch (de) {
        console.error("Failed to load ComfyUI releases:", de);
      } finally {
        me.value = !1;
      }
    }
    function qe() {
      k.value && i("switch-environment", k.value, B.value);
    }
    function rt() {
      h.value === "create" || h.value === "import" ? h.value = "landing" : _.value === 2 && n.setupState === "no_workspace" && (_.value = 1);
    }
    function ke(de, q) {
      D.value = !1, q ? i("complete", de, B.value) : (i("environment-created-no-switch", de), h.value = "landing");
    }
    function Ve() {
    }
    Be(async () => {
      if (n.detectedModelsDir && (F.value = n.detectedModelsDir), n.workspacePath && (B.value = n.workspacePath), _.value === 2) {
        Ge();
        const de = setTimeout(() => {
          R.value = !1;
        }, 3e3);
        await ot(), clearTimeout(de), R.value = !1;
      }
    });
    async function ot() {
      try {
        const de = await d();
        if (console.log("[ComfyGit] Create progress check:", de.state, de), de.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", de.environment_name), h.value = "create", we.value = !0, ie.value = de.environment_name || "my-new-env", Te.value = {
            progress: de.progress ?? 0,
            message: de.message,
            phase: de.phase
          }, je();
          return;
        }
      } catch (de) {
        console.log("[ComfyGit] Create progress check failed:", de);
      }
      try {
        const de = await m();
        console.log("[ComfyGit] Import progress check:", de.state, de), de.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", de.environment_name), V.value = {
          message: de.message || "Importing...",
          phase: de.phase || "",
          progress: de.progress ?? 0,
          environmentName: de.environment_name || ""
        }, S.value = !0, h.value = "import", D.value = !0);
      } catch (de) {
        console.log("[ComfyGit] Import progress check failed:", de);
      }
    }
    async function je() {
      Pe.value = 0, re.value = Date.now();
      let de = null;
      const q = async () => {
        if (re.value && Date.now() - re.value > Ks)
          return de && clearInterval(de), we.value = !1, N.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const P = await d();
          if (Pe.value = 0, P.state === "idle" && we.value)
            return de && clearInterval(de), we.value = !1, N.value = "Environment creation was interrupted. Please try again.", !1;
          if (Te.value = {
            progress: P.progress ?? 0,
            message: P.message,
            phase: P.phase
          }, P.state === "complete") {
            de && clearInterval(de), we.value = !1;
            const W = P.environment_name || ie.value;
            return i("complete", W, B.value), !1;
          } else if (P.state === "error")
            return de && clearInterval(de), we.value = !1, N.value = P.error || "Environment creation failed", !1;
          return !0;
        } catch (P) {
          return Pe.value++, console.warn(`Polling failure ${Pe.value}/${Gt}:`, P), Pe.value >= Gt ? (de && clearInterval(de), we.value = !1, N.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await q() && (de = setInterval(async () => {
        !await q() && de && clearInterval(de);
      }, 2e3));
    }
    return (de, q) => (s(), o(G, null, [
      b(st, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: q[15] || (q[15] = (J) => de.$emit("close"))
      }, {
        header: l(() => [
          q[20] || (q[20] = e("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          e("div", c2, [
            b(go),
            q[19] || (q[19] = e("span", { class: "header-divider" }, null, -1)),
            ge.value ? (s(), o("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: q[0] || (q[0] = (J) => E.value = !0)
            }, [...q[17] || (q[17] = [
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
              onClick: q[1] || (q[1] = (J) => de.$emit("close")),
              title: "Close"
            }, [...q[18] || (q[18] = [
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
          var J;
          return [
            _.value === 1 ? (s(), o("div", u2, [
              q[24] || (q[24] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              e("div", m2, [
                q[21] || (q[21] = e("label", { class: "form-label" }, "Workspace Path", -1)),
                Le(e("input", {
                  "onUpdate:modelValue": q[2] || (q[2] = (P) => C.value = P),
                  type: "text",
                  class: "form-input",
                  placeholder: t.defaultPath
                }, null, 8, v2), [
                  [Bt, C.value]
                ]),
                j.value ? (s(), o("p", f2, a(j.value), 1)) : r("", !0)
              ]),
              e("div", p2, [
                e("label", g2, [
                  Le(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": q[3] || (q[3] = (P) => H.value = P)
                  }, null, 512), [
                    [fs, H.value]
                  ]),
                  q[22] || (q[22] = e("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              H.value ? (s(), o("div", h2, [
                q[23] || (q[23] = e("label", { class: "form-label" }, "Models Directory", -1)),
                Le(e("input", {
                  "onUpdate:modelValue": q[4] || (q[4] = (P) => F.value = P),
                  type: "text",
                  class: "form-input",
                  placeholder: t.detectedModelsDir || "/path/to/models"
                }, null, 8, y2), [
                  [Bt, F.value]
                ]),
                t.detectedModelsDir && !F.value ? (s(), o("p", w2, " Detected: " + a(t.detectedModelsDir), 1)) : r("", !0),
                M.value ? (s(), o("p", k2, " Did you mean: " + a(M.value), 1)) : r("", !0),
                T.value ? (s(), o("p", b2, a(T.value), 1)) : r("", !0),
                A.value !== null && !T.value ? (s(), o("p", _2, " Found " + a(A.value) + " model files ", 1)) : r("", !0)
              ])) : r("", !0),
              te.value ? (s(), x(hs, {
                key: 1,
                progress: be.value.progress,
                message: be.value.message
              }, null, 8, ["progress", "message"])) : r("", !0)
            ])) : r("", !0),
            _.value === 2 ? (s(), o("div", $2, [
              R.value ? (s(), o("div", C2, [...q[25] || (q[25] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (s(), o(G, { key: 1 }, [
                !n.cliInstalled && !$.value ? (s(), o("div", x2, [
                  e("div", S2, [
                    q[27] || (q[27] = e("span", { class: "cli-warning-icon" }, "!", -1)),
                    q[28] || (q[28] = e("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    e("button", {
                      class: "cli-warning-close",
                      onClick: q[5] || (q[5] = (P) => $.value = !0),
                      title: "Dismiss"
                    }, [...q[26] || (q[26] = [
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
                  q[29] || (q[29] = e("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  q[30] || (q[30] = e("div", { class: "cli-warning-commands" }, [
                    e("code", null, "pipx install comfygit"),
                    e("span", { class: "cli-warning-or" }, "or"),
                    e("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : r("", !0),
                h.value === "landing" ? (s(), o("div", I2, [
                  q[34] || (q[34] = e("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  e("button", {
                    class: "landing-option",
                    onClick: q[6] || (q[6] = (P) => h.value = "create")
                  }, [...q[31] || (q[31] = [
                    e("span", { class: "option-icon" }, "➕", -1),
                    e("div", { class: "option-content" }, [
                      e("span", { class: "option-title" }, "Create New Environment"),
                      e("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    e("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  e("button", {
                    class: "landing-option",
                    onClick: q[7] || (q[7] = (P) => {
                      S.value = !1, h.value = "import";
                    })
                  }, [...q[32] || (q[32] = [
                    e("span", { class: "option-icon" }, "📦", -1),
                    e("div", { class: "option-content" }, [
                      e("span", { class: "option-title" }, "Import Environment"),
                      e("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    e("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (J = n.existingEnvironments) != null && J.length ? (s(), o(G, { key: 0 }, [
                    q[33] || (q[33] = e("div", { class: "landing-divider" }, [
                      e("span", null, "or switch to existing")
                    ], -1)),
                    e("div", E2, [
                      (s(!0), o(G, null, ne(n.existingEnvironments, (P) => (s(), o("label", {
                        key: P,
                        class: fe(["env-option", { selected: k.value === P }])
                      }, [
                        Le(e("input", {
                          type: "radio",
                          name: "env-select",
                          value: P,
                          "onUpdate:modelValue": q[8] || (q[8] = (W) => k.value = W)
                        }, null, 8, P2), [
                          [Ut, k.value]
                        ]),
                        e("span", R2, a(P), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : r("", !0)
                ])) : h.value === "create" ? (s(), o("div", T2, [
                  we.value ? (s(), o("div", W2, [
                    e("p", G2, [
                      q[41] || (q[41] = g(" Creating environment ", -1)),
                      e("strong", null, a(ie.value), 1),
                      q[42] || (q[42] = g("... ", -1))
                    ]),
                    b(hs, {
                      progress: Te.value.progress,
                      message: Te.value.message,
                      "current-phase": Te.value.phase,
                      "show-steps": !0,
                      steps: De
                    }, null, 8, ["progress", "message", "current-phase"]),
                    q[43] || (q[43] = e("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (s(), o(G, { key: 0 }, [
                    q[40] || (q[40] = e("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    e("div", M2, [
                      q[35] || (q[35] = e("label", { class: "form-label" }, "Environment Name", -1)),
                      Le(e("input", {
                        "onUpdate:modelValue": q[9] || (q[9] = (P) => ie.value = P),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Bt, ie.value]
                      ])
                    ]),
                    e("div", D2, [
                      q[36] || (q[36] = e("label", { class: "form-label" }, "Python Version", -1)),
                      Le(e("select", {
                        "onUpdate:modelValue": q[10] || (q[10] = (P) => ae.value = P),
                        class: "form-select"
                      }, [
                        (s(!0), o(G, null, ne($e(io), (P) => (s(), o("option", {
                          key: P,
                          value: P
                        }, a(P), 9, L2))), 128))
                      ], 512), [
                        [St, ae.value]
                      ])
                    ]),
                    e("div", z2, [
                      q[37] || (q[37] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Le(e("select", {
                        "onUpdate:modelValue": q[11] || (q[11] = (P) => Q.value = P),
                        class: "form-select",
                        disabled: me.value
                      }, [
                        (s(!0), o(G, null, ne(I.value, (P) => (s(), o("option", {
                          key: P.tag_name,
                          value: P.tag_name
                        }, a(P.name), 9, N2))), 128))
                      ], 8, U2), [
                        [St, Q.value]
                      ])
                    ]),
                    e("div", O2, [
                      q[38] || (q[38] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Le(e("select", {
                        "onUpdate:modelValue": q[12] || (q[12] = (P) => ve.value = P),
                        class: "form-select"
                      }, [
                        (s(!0), o(G, null, ne($e(zs), (P) => (s(), o("option", {
                          key: P,
                          value: P
                        }, a(P) + a(P === "auto" ? " (detect GPU)" : ""), 9, B2))), 128))
                      ], 512), [
                        [St, ve.value]
                      ])
                    ]),
                    e("div", A2, [
                      e("label", F2, [
                        Le(e("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": q[13] || (q[13] = (P) => X.value = P)
                        }, null, 512), [
                          [fs, X.value]
                        ]),
                        q[39] || (q[39] = e("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    N.value ? (s(), o("div", V2, a(N.value), 1)) : r("", !0)
                  ], 64))
                ])) : h.value === "import" ? (s(), o("div", j2, [
                  b(vo, {
                    "workspace-path": B.value,
                    "resume-import": S.value,
                    "initial-progress": V.value ?? void 0,
                    onImportComplete: ke,
                    onImportStarted: q[14] || (q[14] = (P) => D.value = !0),
                    onSourceCleared: Ve
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : r("", !0)
              ], 64))
            ])) : r("", !0)
          ];
        }),
        footer: l(() => [
          e("div", K2, [
            b(ho),
            e("div", H2, [
              _.value === 1 ? (s(), x(ye, {
                key: 0,
                variant: "primary",
                disabled: !Y.value || te.value,
                onClick: Ie
              }, {
                default: l(() => [
                  g(a(te.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : _.value === 2 ? (s(), o(G, { key: 1 }, [
                !we.value && !D.value && (h.value !== "landing" || n.setupState === "no_workspace" && !B.value) ? (s(), x(ye, {
                  key: 0,
                  variant: "secondary",
                  onClick: rt
                }, {
                  default: l(() => [...q[44] || (q[44] = [
                    g(" Back ", -1)
                  ])]),
                  _: 1
                })) : r("", !0),
                h.value === "create" ? (s(), x(ye, {
                  key: 1,
                  variant: "primary",
                  disabled: !Re.value || we.value,
                  onClick: He
                }, {
                  default: l(() => [
                    g(a(we.value ? "Creating..." : X.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : r("", !0),
                h.value === "landing" && k.value ? (s(), x(ye, {
                  key: 2,
                  variant: "primary",
                  onClick: qe
                }, {
                  default: l(() => [
                    g(" Switch to " + a(k.value), 1)
                  ]),
                  _: 1
                })) : r("", !0)
              ], 64)) : r("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      E.value ? (s(), x(d2, {
        key: 0,
        "workspace-path": Ke.value,
        onClose: q[16] || (q[16] = (J) => E.value = !1)
      }, null, 8, ["workspace-path"])) : r("", !0)
    ], 64));
  }
}), J2 = /* @__PURE__ */ oe(Y2, [["__scopeId", "data-v-9a9aadc0"]]), X2 = { class: "comfygit-panel" }, Q2 = { class: "panel-header" }, Z2 = { class: "header-left" }, e$ = {
  key: 0,
  class: "header-info"
}, t$ = { class: "header-actions" }, s$ = { class: "env-switcher" }, o$ = {
  key: 0,
  class: "header-info"
}, n$ = { class: "branch-name" }, a$ = { class: "panel-main" }, l$ = { class: "sidebar" }, i$ = { class: "sidebar-content" }, r$ = { class: "sidebar-section" }, d$ = { class: "sidebar-section" }, c$ = { class: "sidebar-section" }, u$ = {
  key: 0,
  class: "sidebar-badge"
}, m$ = { class: "sidebar-footer" }, v$ = { class: "content-area" }, f$ = {
  key: 0,
  class: "error-message"
}, p$ = {
  key: 1,
  class: "loading"
}, g$ = { class: "dialog-content env-selector-dialog" }, h$ = { class: "dialog-header" }, y$ = { class: "dialog-body" }, w$ = { class: "env-list" }, k$ = { class: "env-info" }, b$ = { class: "env-name-row" }, _$ = { class: "env-indicator" }, $$ = { class: "env-name" }, C$ = {
  key: 0,
  class: "env-branch"
}, x$ = {
  key: 1,
  class: "current-label"
}, S$ = { class: "env-stats" }, I$ = ["onClick"], E$ = { class: "toast-container" }, P$ = { class: "toast-message" }, R$ = /* @__PURE__ */ ee({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const n = t, i = c, {
      getStatus: f,
      getHistory: p,
      getBranches: u,
      checkout: v,
      createBranch: d,
      switchBranch: m,
      deleteBranch: y,
      getEnvironments: _,
      switchEnvironment: k,
      getSwitchProgress: h,
      deleteEnvironment: E,
      syncEnvironmentManually: D,
      repairWorkflowModels: $,
      getSetupStatus: S
    } = We(), V = Qs(), { liveInstanceCount: R } = fo(), C = w(null), H = w([]), F = w([]), j = w([]), T = U(() => j.value.find((O) => O.is_current)), M = w(null), A = w(!1), ie = w(1), ae = U(() => {
      var O;
      return ((O = M.value) == null ? void 0 : O.state) || "managed";
    }), Q = w(!1), ve = w(null), X = w(null), N = w(!1), B = w(null), I = w(null), me = w(null), te = w(!1), we = w(!1), be = w(""), Te = w(null), De = w({ state: "idle", progress: 0, message: "" });
    let ce = null, he = null;
    const Pe = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, re = n.initialView ? Pe[n.initialView] : null, Y = w((re == null ? void 0 : re.view) ?? "status"), Re = w((re == null ? void 0 : re.section) ?? "this-env");
    function ge(O, z) {
      Y.value = O, Re.value = z;
    }
    function Ke(O) {
      const pe = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[O];
      pe && ge(pe.view, pe.section);
    }
    function Xe() {
      ge("branches", "this-env");
    }
    function Qe() {
      i("close"), setTimeout(() => {
        var z;
        const O = document.querySelectorAll("button.comfyui-button");
        for (const pe of O)
          if (((z = pe.textContent) == null ? void 0 : z.trim()) === "Manager") {
            pe.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const Ie = w(null), He = w(!1), Ge = w(!1), qe = w([]);
    let rt = 0;
    function ke(O, z = "info", pe = 3e3) {
      const Ce = ++rt;
      return qe.value.push({ id: Ce, message: O, type: z }), pe > 0 && setTimeout(() => {
        qe.value = qe.value.filter((ze) => ze.id !== Ce);
      }, pe), Ce;
    }
    function Ve(O) {
      qe.value = qe.value.filter((z) => z.id !== O);
    }
    function ot(O, z) {
      ke(O, z);
    }
    const je = U(() => {
      if (!C.value) return "neutral";
      const O = C.value.workflows, z = O.new.length > 0 || O.modified.length > 0 || O.deleted.length > 0 || C.value.has_changes;
      return C.value.comparison.is_synced ? z ? "warning" : "success" : "error";
    });
    U(() => C.value ? je.value === "success" ? "All synced" : je.value === "warning" ? "Uncommitted changes" : je.value === "error" ? "Not synced" : "" : "");
    async function de() {
      Q.value = !0, ve.value = null;
      try {
        const [O, z, pe, Ce] = await Promise.all([
          f(!0),
          p(),
          u(),
          _()
        ]);
        C.value = O, H.value = z.commits, F.value = pe.branches, j.value = Ce, i("statusUpdate", O), B.value && await B.value.loadWorkflows(!0);
      } catch (O) {
        ve.value = O instanceof Error ? O.message : "Failed to load status", C.value = null, H.value = [], F.value = [];
      } finally {
        Q.value = !1;
      }
    }
    function q(O) {
      X.value = O;
    }
    async function J(O) {
      var pe;
      X.value = null;
      const z = C.value && (C.value.workflows.new.length > 0 || C.value.workflows.modified.length > 0 || C.value.workflows.deleted.length > 0 || C.value.has_changes);
      Ie.value = {
        title: z ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: z ? "You have uncommitted changes that will be lost." : `Checkout commit ${O.short_hash || ((pe = O.hash) == null ? void 0 : pe.slice(0, 7))}?`,
        details: z ? ue() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: z ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: z,
        onConfirm: async () => {
          var Ae;
          Ie.value = null, Oe();
          const Ce = ke(`Checking out ${O.short_hash || ((Ae = O.hash) == null ? void 0 : Ae.slice(0, 7))}...`, "info", 0), ze = await v(O.hash, z);
          Ve(Ce), ze.status === "success" ? ke("Restarting ComfyUI...", "success") : ke(ze.message || "Checkout failed", "error");
        }
      };
    }
    async function P(O) {
      const z = C.value && (C.value.workflows.new.length > 0 || C.value.workflows.modified.length > 0 || C.value.workflows.deleted.length > 0 || C.value.has_changes);
      Ie.value = {
        title: z ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: z ? "You have uncommitted changes." : `Switch to branch "${O}"?`,
        details: z ? ue() : void 0,
        warning: z ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: z ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Ie.value = null, Oe();
          const pe = ke(`Switching to ${O}...`, "info", 0), Ce = await m(O, z);
          Ve(pe), Ce.status === "success" ? ke("Restarting ComfyUI...", "success") : ke(Ce.message || "Branch switch failed", "error");
        }
      };
    }
    async function W(O) {
      const z = ke(`Creating branch ${O}...`, "info", 0), pe = await d(O);
      Ve(z), pe.status === "success" ? (ke(`Branch "${O}" created`, "success"), await de()) : ke(pe.message || "Failed to create branch", "error");
    }
    async function se(O, z = !1) {
      const pe = async (Ce) => {
        var Ae;
        const ze = ke(`Deleting branch ${O}...`, "info", 0);
        try {
          const dt = await y(O, Ce);
          Ve(ze), dt.status === "success" ? (ke(`Branch "${O}" deleted`, "success"), await de()) : (Ae = dt.message) != null && Ae.includes("not fully merged") ? Ie.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${O}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Ie.value = null, await pe(!0);
            }
          } : ke(dt.message || "Failed to delete branch", "error");
        } catch (dt) {
          Ve(ze);
          const Lt = dt instanceof Error ? dt.message : "Failed to delete branch";
          Lt.includes("not fully merged") ? Ie.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${O}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Ie.value = null, await pe(!0);
            }
          } : ke(Lt, "error");
        }
      };
      Ie.value = {
        title: "Delete Branch",
        message: `Delete branch "${O}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Ie.value = null, await pe(z);
        }
      };
    }
    async function _e(O) {
      X.value = null;
      const z = prompt("Enter branch name:");
      if (z) {
        const pe = ke(`Creating branch ${z}...`, "info", 0), Ce = await d(z, O.hash);
        Ve(pe), Ce.status === "success" ? (ke(`Branch "${z}" created from ${O.short_hash}`, "success"), await de()) : ke(Ce.message || "Failed to create branch", "error");
      }
    }
    function Oe() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function ut() {
      Ie.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var O;
          Ie.value = null, Oe(), ke("Restarting environment...", "info");
          try {
            (O = window.app) != null && O.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function wt() {
      Ie.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var O;
          Ie.value = null, ke("Stopping environment...", "info");
          try {
            (O = window.app) != null && O.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function nt(O, z) {
      N.value = !1, be.value = O, Te.value = z || null, te.value = !0;
    }
    async function Rt() {
      te.value = !1, we.value = !0, Oe(), De.value = {
        progress: 10,
        state: Tt(10),
        message: Mt(10)
      };
      try {
        await k(be.value, Te.value || void 0), Ft(), Nt();
      } catch (O) {
        mt(), we.value = !1, ke(`Failed to initiate switch: ${O instanceof Error ? O.message : "Unknown error"}`, "error"), De.value = { state: "idle", progress: 0, message: "" }, Te.value = null;
      }
    }
    function Tt(O) {
      return O >= 100 ? "complete" : O >= 80 ? "validating" : O >= 60 ? "starting" : O >= 30 ? "syncing" : "preparing";
    }
    function Mt(O) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Tt(O)] || "";
    }
    function Ft() {
      if (he) return;
      let O = 10;
      const z = 60, pe = 5e3, Ce = 100, ze = (z - O) / (pe / Ce);
      he = window.setInterval(() => {
        if (O += ze, O >= z && (O = z, mt()), De.value.progress < z) {
          const Ae = Math.floor(O);
          De.value = {
            progress: Ae,
            state: Tt(Ae),
            message: Mt(Ae)
          };
        }
      }, Ce);
    }
    function mt() {
      he && (clearInterval(he), he = null);
    }
    function Nt() {
      ce || (ce = window.setInterval(async () => {
        try {
          let O = await V.getStatus();
          if ((!O || O.state === "idle") && (O = await h()), !O)
            return;
          const z = O.progress || 0;
          z >= 60 && mt();
          const pe = Math.max(z, De.value.progress), Ce = O.state && O.state !== "idle" && O.state !== "unknown", ze = Ce ? O.state : Tt(pe), Ae = Ce && O.message || Mt(pe);
          De.value = {
            state: ze,
            progress: pe,
            message: Ae
          }, O.state === "complete" ? (mt(), Dt(), we.value = !1, ke(`✓ Switched to ${be.value}`, "success"), await de(), be.value = "") : O.state === "rolled_back" ? (mt(), Dt(), we.value = !1, ke("Switch failed, restored previous environment", "warning"), be.value = "") : O.state === "critical_failure" && (mt(), Dt(), we.value = !1, ke(`Critical error during switch: ${O.message}`, "error"), be.value = "");
        } catch (O) {
          console.error("Failed to poll switch progress:", O);
        }
      }, 1e3));
    }
    function Dt() {
      mt(), ce && (clearInterval(ce), ce = null);
    }
    function Vt() {
      var O;
      te.value = !1, be.value = "", (O = M.value) != null && O.state && M.value.state !== "managed" && (ie.value = M.value.state === "no_workspace" ? 1 : 2, A.value = !0);
    }
    async function Yt(O) {
      He.value = !1, await de(), ke(O.message, O.success ? "success" : "error");
    }
    async function Jt() {
      Ge.value = !1;
      const O = ke("Syncing environment...", "info", 0);
      try {
        const z = await D("skip", !0);
        if (Ve(O), z.status === "success") {
          const pe = [];
          z.nodes_installed.length && pe.push(`${z.nodes_installed.length} installed`), z.nodes_removed.length && pe.push(`${z.nodes_removed.length} removed`);
          const Ce = pe.length ? `: ${pe.join(", ")}` : "";
          ke(`✓ Environment synced${Ce}`, "success"), await de();
        } else {
          const pe = z.errors.length ? z.errors.join("; ") : z.message;
          ke(`Sync failed: ${pe}`, "error");
        }
      } catch (z) {
        Ve(O), ke(`Sync error: ${z instanceof Error ? z.message : "Unknown error"}`, "error");
      }
    }
    async function Xt(O) {
      var z;
      try {
        const pe = await $(O);
        pe.failed.length === 0 ? ke(`✓ Repaired ${pe.success} workflow${pe.success === 1 ? "" : "s"}`, "success") : ke(`Repaired ${pe.success}, failed: ${pe.failed.length}`, "warning"), await de();
      } catch (pe) {
        ke(`Repair failed: ${pe instanceof Error ? pe.message : "Unknown error"}`, "error");
      } finally {
        (z = me.value) == null || z.resetRepairingState();
      }
    }
    async function le() {
      var z, pe;
      const O = ke("Repairing environment...", "info", 0);
      try {
        const Ce = await D("skip", !0);
        if (Ve(O), Ce.status === "success") {
          const ze = [];
          Ce.nodes_installed.length && ze.push(`${Ce.nodes_installed.length} installed`), Ce.nodes_removed.length && ze.push(`${Ce.nodes_removed.length} removed`);
          const Ae = ze.length ? `: ${ze.join(", ")}` : "";
          ke(`✓ Environment repaired${Ae}`, "success"), (z = me.value) == null || z.closeDetailModal(), await de();
        } else {
          const ze = Ce.errors.length ? Ce.errors.join(", ") : Ce.message || "Unknown error";
          ke(`Repair failed: ${ze}`, "error");
        }
      } catch (Ce) {
        Ve(O), ke(`Repair error: ${Ce instanceof Error ? Ce.message : "Unknown error"}`, "error");
      } finally {
        (pe = me.value) == null || pe.resetRepairingEnvironmentState();
      }
    }
    async function K(O, z) {
      ke(`Environment '${O}' created`, "success"), await de(), I.value && await I.value.loadEnvironments(), z && await nt(O);
    }
    async function Se(O) {
      var z;
      if (((z = T.value) == null ? void 0 : z.name) === O) {
        ke("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      Ie.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${O}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          Ie.value = null;
          try {
            const pe = await E(O);
            pe.status === "success" ? (ke(`Environment "${O}" deleted`, "success"), await de(), I.value && await I.value.loadEnvironments()) : ke(pe.message || "Failed to delete environment", "error");
          } catch (pe) {
            ke(`Error deleting environment: ${pe instanceof Error ? pe.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function Ye(O, z) {
      A.value = !1;
      try {
        M.value = await S();
      } catch {
      }
      await nt(O, z);
    }
    function vt() {
      A.value = !1, i("close");
    }
    async function Ct(O, z) {
      await nt(O, z);
    }
    async function xt(O) {
      await de(), await nt(O);
    }
    async function kt(O) {
      M.value = await S(), console.log(`Environment '${O}' created. Available for switching.`);
    }
    function L() {
      ge("environments", "all-envs"), setTimeout(() => {
        var O;
        (O = I.value) == null || O.openCreateModal();
      }, 100);
    }
    function ue() {
      if (!C.value) return [];
      const O = [], z = C.value.workflows;
      return z.new.length && O.push(`${z.new.length} new workflow(s)`), z.modified.length && O.push(`${z.modified.length} modified workflow(s)`), z.deleted.length && O.push(`${z.deleted.length} deleted workflow(s)`), O;
    }
    return Be(async () => {
      try {
        if (M.value = await S(), M.value.state === "no_workspace") {
          A.value = !0, ie.value = 1;
          return;
        }
        if (M.value.state === "empty_workspace") {
          A.value = !0, ie.value = 2;
          return;
        }
        if (M.value.state === "unmanaged") {
          A.value = !0, ie.value = 2;
          return;
        }
      } catch (O) {
        console.warn("Setup status check failed, proceeding normally:", O);
      }
      await de();
    }), (O, z) => {
      var pe, Ce, ze, Ae, dt, Lt, Qt, Zt, Bs, As, Fs, Vs;
      return s(), o("div", X2, [
        e("div", Q2, [
          e("div", Z2, [
            z[31] || (z[31] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            C.value ? (s(), o("div", e$)) : r("", !0)
          ]),
          e("div", t$, [
            b(go),
            z[34] || (z[34] = e("span", { class: "header-divider" }, null, -1)),
            e("button", {
              class: fe(["icon-btn", { spinning: Q.value }]),
              onClick: de,
              title: "Refresh"
            }, [...z[32] || (z[32] = [
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
              onClick: z[0] || (z[0] = (xe) => i("close")),
              title: "Close"
            }, [...z[33] || (z[33] = [
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
        e("div", s$, [
          e("div", { class: "env-switcher-header" }, [
            z[35] || (z[35] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: ut
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: wt
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: z[1] || (z[1] = (xe) => ge("environments", "all-envs"))
          }, [
            C.value ? (s(), o("div", o$, [
              e("span", null, a(((pe = T.value) == null ? void 0 : pe.name) || ((Ce = C.value) == null ? void 0 : Ce.environment) || "Loading..."), 1),
              e("span", n$, "(" + a(C.value.branch || "detached") + ")", 1)
            ])) : r("", !0),
            z[36] || (z[36] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", a$, [
          e("div", l$, [
            e("div", i$, [
              e("div", r$, [
                z[37] || (z[37] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                e("button", {
                  class: fe(["sidebar-item", { active: Y.value === "status" && Re.value === "this-env" }]),
                  onClick: z[2] || (z[2] = (xe) => ge("status", "this-env"))
                }, " STATUS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Y.value === "workflows" }]),
                  onClick: z[3] || (z[3] = (xe) => ge("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Y.value === "models-env" }]),
                  onClick: z[4] || (z[4] = (xe) => ge("models-env", "this-env"))
                }, " MODELS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Y.value === "branches" }]),
                  onClick: z[5] || (z[5] = (xe) => ge("branches", "this-env"))
                }, " BRANCHES ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Y.value === "history" }]),
                  onClick: z[6] || (z[6] = (xe) => ge("history", "this-env"))
                }, " HISTORY ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Y.value === "nodes" }]),
                  onClick: z[7] || (z[7] = (xe) => ge("nodes", "this-env"))
                }, " NODES ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Y.value === "debug-env" }]),
                  onClick: z[8] || (z[8] = (xe) => ge("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              z[41] || (z[41] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", d$, [
                z[38] || (z[38] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                e("button", {
                  class: fe(["sidebar-item", { active: Y.value === "environments" }]),
                  onClick: z[9] || (z[9] = (xe) => ge("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Y.value === "model-index" }]),
                  onClick: z[10] || (z[10] = (xe) => ge("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Y.value === "settings" }]),
                  onClick: z[11] || (z[11] = (xe) => ge("settings", "all-envs"))
                }, " SETTINGS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Y.value === "debug-workspace" }]),
                  onClick: z[12] || (z[12] = (xe) => ge("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              z[42] || (z[42] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", c$, [
                z[40] || (z[40] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                e("button", {
                  class: fe(["sidebar-item", { active: Y.value === "deploy" }]),
                  onClick: z[13] || (z[13] = (xe) => ge("deploy", "sharing"))
                }, [
                  z[39] || (z[39] = g(" DEPLOY ", -1)),
                  $e(R) > 0 ? (s(), o("span", u$, a($e(R)), 1)) : r("", !0)
                ], 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Y.value === "export" }]),
                  onClick: z[14] || (z[14] = (xe) => ge("export", "sharing"))
                }, " EXPORT ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Y.value === "import" }]),
                  onClick: z[15] || (z[15] = (xe) => ge("import", "sharing"))
                }, " IMPORT ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Y.value === "remotes" }]),
                  onClick: z[16] || (z[16] = (xe) => ge("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            e("div", m$, [
              b(ho)
            ])
          ]),
          e("div", v$, [
            ve.value ? (s(), o("div", f$, a(ve.value), 1)) : !C.value && Y.value === "status" ? (s(), o("div", p$, " Loading status... ")) : (s(), o(G, { key: 2 }, [
              Y.value === "status" ? (s(), x(ol, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: me,
                status: C.value,
                "setup-state": ae.value,
                onSwitchBranch: Xe,
                onCommitChanges: z[17] || (z[17] = (xe) => He.value = !0),
                onSyncEnvironment: z[18] || (z[18] = (xe) => Ge.value = !0),
                onViewWorkflows: z[19] || (z[19] = (xe) => ge("workflows", "this-env")),
                onViewHistory: z[20] || (z[20] = (xe) => ge("history", "this-env")),
                onViewDebug: z[21] || (z[21] = (xe) => ge("debug-env", "this-env")),
                onViewNodes: z[22] || (z[22] = (xe) => ge("nodes", "this-env")),
                onRepairMissingModels: Xt,
                onRepairEnvironment: le,
                onStartSetup: z[23] || (z[23] = (xe) => A.value = !0),
                onViewEnvironments: z[24] || (z[24] = (xe) => ge("environments", "all-envs")),
                onCreateEnvironment: L
              }, null, 8, ["status", "setup-state"])) : Y.value === "workflows" ? (s(), x(xm, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: B,
                onRefresh: de
              }, null, 512)) : Y.value === "models-env" ? (s(), x(iv, {
                key: 2,
                onNavigate: Ke
              })) : Y.value === "branches" ? (s(), x(yl, {
                key: 3,
                branches: F.value,
                current: ((ze = C.value) == null ? void 0 : ze.branch) || null,
                onSwitch: P,
                onCreate: W,
                onDelete: se
              }, null, 8, ["branches", "current"])) : Y.value === "history" ? (s(), x(Pl, {
                key: 4,
                commits: H.value,
                onSelect: q,
                onCheckout: J
              }, null, 8, ["commits"])) : Y.value === "nodes" ? (s(), x(of, {
                key: 5,
                "version-mismatches": ((dt = (Ae = C.value) == null ? void 0 : Ae.comparison) == null ? void 0 : dt.version_mismatches) || [],
                onOpenNodeManager: Qe,
                onRepairEnvironment: le,
                onToast: ot
              }, null, 8, ["version-mismatches"])) : Y.value === "debug-env" ? (s(), x(gh, { key: 6 })) : Y.value === "environments" ? (s(), x(w1, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: I,
                onSwitch: nt,
                onCreated: K,
                onDelete: Se
              }, null, 512)) : Y.value === "model-index" ? (s(), x(Iv, {
                key: 8,
                onRefresh: de
              })) : Y.value === "settings" ? (s(), x(ih, { key: 9 })) : Y.value === "debug-workspace" ? (s(), x(ph, { key: 10 })) : Y.value === "deploy" ? (s(), x(cb, {
                key: 11,
                onToast: ot,
                onNavigate: Ke
              })) : Y.value === "export" ? (s(), x(Y1, { key: 12 })) : Y.value === "import" ? (s(), x(V0, {
                key: 13,
                onImportCompleteSwitch: xt
              })) : Y.value === "remotes" ? (s(), x(Ag, {
                key: 14,
                onToast: ot
              })) : r("", !0)
            ], 64))
          ])
        ]),
        X.value ? (s(), x(Eb, {
          key: 0,
          commit: X.value,
          onClose: z[25] || (z[25] = (xe) => X.value = null),
          onCheckout: J,
          onCreateBranch: _e
        }, null, 8, ["commit"])) : r("", !0),
        Ie.value ? (s(), x(so, {
          key: 1,
          title: Ie.value.title,
          message: Ie.value.message,
          details: Ie.value.details,
          warning: Ie.value.warning,
          confirmLabel: Ie.value.confirmLabel,
          cancelLabel: Ie.value.cancelLabel,
          secondaryLabel: Ie.value.secondaryLabel,
          secondaryAction: Ie.value.secondaryAction,
          destructive: Ie.value.destructive,
          onConfirm: Ie.value.onConfirm,
          onCancel: z[26] || (z[26] = (xe) => Ie.value = null),
          onSecondary: Ie.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : r("", !0),
        b(S_, {
          show: te.value,
          "from-environment": ((Lt = T.value) == null ? void 0 : Lt.name) || "unknown",
          "to-environment": be.value,
          onConfirm: Rt,
          onClose: Vt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        He.value && C.value ? (s(), x(po, {
          key: 2,
          status: C.value,
          "as-modal": !0,
          onClose: z[27] || (z[27] = (xe) => He.value = !1),
          onCommitted: Yt
        }, null, 8, ["status"])) : r("", !0),
        Ge.value && C.value ? (s(), x(K_, {
          key: 3,
          show: Ge.value,
          "mismatch-details": {
            missing_nodes: C.value.comparison.missing_nodes,
            extra_nodes: C.value.comparison.extra_nodes
          },
          onConfirm: Jt,
          onClose: z[28] || (z[28] = (xe) => Ge.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : r("", !0),
        b(N_, {
          show: we.value,
          state: De.value.state,
          progress: De.value.progress,
          message: De.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        N.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: z[30] || (z[30] = Ne((xe) => N.value = !1, ["self"]))
        }, [
          e("div", g$, [
            e("div", h$, [
              z[44] || (z[44] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: z[29] || (z[29] = (xe) => N.value = !1)
              }, [...z[43] || (z[43] = [
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
            e("div", y$, [
              z[45] || (z[45] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", w$, [
                (s(!0), o(G, null, ne(j.value, (xe) => (s(), o("div", {
                  key: xe.name,
                  class: fe(["env-item", { current: xe.is_current }])
                }, [
                  e("div", k$, [
                    e("div", b$, [
                      e("span", _$, a(xe.is_current ? "●" : "○"), 1),
                      e("span", $$, a(xe.name), 1),
                      xe.current_branch ? (s(), o("span", C$, "(" + a(xe.current_branch) + ")", 1)) : r("", !0),
                      xe.is_current ? (s(), o("span", x$, "CURRENT")) : r("", !0)
                    ]),
                    e("div", S$, a(xe.workflow_count) + " workflows • " + a(xe.node_count) + " nodes ", 1)
                  ]),
                  xe.is_current ? r("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (OC) => nt(xe.name)
                  }, " SWITCH ", 8, I$))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : r("", !0),
        A.value ? (s(), x(J2, {
          key: 5,
          "default-path": ((Qt = M.value) == null ? void 0 : Qt.default_path) || "~/comfygit",
          "detected-models-dir": ((Zt = M.value) == null ? void 0 : Zt.detected_models_dir) || null,
          "initial-step": ie.value,
          "existing-environments": ((Bs = M.value) == null ? void 0 : Bs.environments) || [],
          "cli-installed": ((As = M.value) == null ? void 0 : As.cli_installed) ?? !0,
          "setup-state": ((Fs = M.value) == null ? void 0 : Fs.state) || "no_workspace",
          "workspace-path": ((Vs = M.value) == null ? void 0 : Vs.workspace_path) || null,
          onComplete: Ye,
          onClose: vt,
          onSwitchEnvironment: Ct,
          onEnvironmentCreatedNoSwitch: kt
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : r("", !0),
        e("div", E$, [
          b(So, { name: "toast" }, {
            default: l(() => [
              (s(!0), o(G, null, ne(qe.value, (xe) => (s(), o("div", {
                key: xe.id,
                class: fe(["toast", xe.type])
              }, [
                e("span", P$, a(xe.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), T$ = /* @__PURE__ */ oe(R$, [["__scopeId", "data-v-49451dd2"]]), M$ = { class: "item-header" }, D$ = { class: "item-info" }, L$ = { class: "filename" }, z$ = { class: "metadata" }, U$ = { class: "size" }, N$ = {
  key: 0,
  class: "type"
}, O$ = { class: "item-actions" }, B$ = {
  key: 0,
  class: "progress-section"
}, A$ = { class: "progress-bar" }, F$ = { class: "progress-stats" }, V$ = { class: "downloaded" }, W$ = { class: "speed" }, G$ = {
  key: 0,
  class: "eta"
}, j$ = {
  key: 1,
  class: "status-msg paused"
}, K$ = {
  key: 2,
  class: "status-msg queued"
}, H$ = {
  key: 3,
  class: "status-msg completed"
}, q$ = {
  key: 4,
  class: "status-msg failed"
}, Y$ = {
  key: 0,
  class: "retries"
}, J$ = /* @__PURE__ */ ee({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: c }) {
    const n = c;
    function i(u) {
      if (u === 0) return "?";
      const v = u / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(u / (1024 * 1024)).toFixed(1)} MB`;
    }
    function f(u) {
      return u === 0 ? "-" : `${(u / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function p(u) {
      if (u < 60) return `${Math.round(u)}s`;
      const v = Math.floor(u / 60);
      return v < 60 ? `${v}m` : `${Math.floor(v / 60)}h ${v % 60}m`;
    }
    return (u, v) => (s(), o("div", {
      class: fe(["download-item", `status-${t.item.status}`])
    }, [
      e("div", M$, [
        e("div", D$, [
          e("div", L$, a(t.item.filename), 1),
          e("div", z$, [
            e("span", U$, a(i(t.item.size)), 1),
            t.item.type ? (s(), o("span", N$, a(t.item.type), 1)) : r("", !0)
          ])
        ]),
        e("div", O$, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: v[0] || (v[0] = (d) => n("cancel")),
            title: "Cancel"
          }, " × ")) : r("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: v[1] || (v[1] = (d) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : r("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: v[2] || (v[2] = (d) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : r("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: v[3] || (v[3] = (d) => n("remove")),
            title: "Remove"
          }, " × ")) : r("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", B$, [
        e("div", A$, [
          e("div", {
            class: "progress-fill",
            style: It({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", F$, [
          e("span", V$, a(i(t.item.downloaded)) + " / " + a(i(t.item.size)), 1),
          e("span", W$, a(f(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", G$, a(p(t.item.eta)), 1)) : r("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", j$, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", K$, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", H$, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", q$, [
        g(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", Y$, "(" + a(t.item.retries) + " retries)", 1)) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), ss = /* @__PURE__ */ oe(J$, [["__scopeId", "data-v-2110df65"]]), X$ = { class: "queue-title" }, Q$ = { class: "count" }, Z$ = { class: "queue-actions" }, eC = { class: "action-label" }, tC = {
  key: 0,
  class: "overall-progress"
}, sC = { class: "progress-bar" }, oC = {
  key: 0,
  class: "current-mini"
}, nC = { class: "filename" }, aC = { class: "speed" }, lC = {
  key: 1,
  class: "queue-content"
}, iC = {
  key: 0,
  class: "section"
}, rC = {
  key: 1,
  class: "section"
}, dC = { class: "section-header" }, cC = { class: "section-label paused" }, uC = { class: "items-list" }, mC = {
  key: 2,
  class: "section"
}, vC = { class: "section-header" }, fC = { class: "section-label" }, pC = { class: "items-list" }, gC = {
  key: 3,
  class: "section"
}, hC = { class: "section-header" }, yC = { class: "section-label" }, wC = { class: "items-list" }, kC = {
  key: 4,
  class: "section"
}, bC = { class: "section-header" }, _C = { class: "section-label failed" }, $C = { class: "items-list" }, CC = /* @__PURE__ */ ee({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: n,
      queuedItems: i,
      completedItems: f,
      failedItems: p,
      pausedItems: u,
      hasItems: v,
      activeCount: d,
      cancelDownload: m,
      retryDownload: y,
      resumeDownload: _,
      resumeAllPaused: k,
      removeItem: h,
      clearCompleted: E
    } = rs(), D = w(!1);
    let $ = null;
    it(
      () => ({
        active: d.value,
        failed: p.value.length,
        paused: u.value.length,
        completed: f.value.length
      }),
      (C, H) => {
        $ && (clearTimeout($), $ = null);
        const F = C.active === 0 && C.failed === 0 && C.paused === 0 && C.completed > 0, j = H && (H.active > 0 || H.paused > 0);
        F && j && ($ = setTimeout(() => {
          E(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const S = U(() => {
      var F;
      if (c.items.length === 0) return 0;
      const C = f.value.length, H = ((F = n.value) == null ? void 0 : F.progress) || 0;
      return Math.round((C + H / 100) / c.items.length * 100);
    });
    function V(C) {
      m(C);
    }
    function R(C) {
      return C === 0 ? "" : `${(C / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (C, H) => (s(), x(Je, { to: "body" }, [
      $e(v) ? (s(), o("div", {
        key: 0,
        class: fe(["model-download-queue", { minimized: !D.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: H[0] || (H[0] = (F) => D.value = !D.value)
        }, [
          e("div", X$, [
            H[4] || (H[4] = e("span", { class: "icon" }, "↓", -1)),
            H[5] || (H[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", Q$, "(" + a($e(d)) + "/" + a($e(c).items.length) + ")", 1)
          ]),
          e("div", Z$, [
            e("span", eC, a(D.value ? "minimize" : "expand"), 1)
          ])
        ]),
        D.value ? (s(), o("div", lC, [
          $e(n) ? (s(), o("div", iC, [
            H[6] || (H[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            b(ss, {
              item: $e(n),
              onCancel: H[1] || (H[1] = (F) => V($e(n).id))
            }, null, 8, ["item"])
          ])) : r("", !0),
          $e(u).length > 0 ? (s(), o("div", rC, [
            e("div", dC, [
              e("span", cC, "Paused (" + a($e(u).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: H[2] || (H[2] = //@ts-ignore
                (...F) => $e(k) && $e(k)(...F))
              }, "Resume All")
            ]),
            e("div", uC, [
              (s(!0), o(G, null, ne($e(u), (F) => (s(), x(ss, {
                key: F.id,
                item: F,
                onResume: (j) => $e(_)(F.id),
                onRemove: (j) => $e(h)(F.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          $e(i).length > 0 ? (s(), o("div", mC, [
            e("div", vC, [
              e("span", fC, "Queued (" + a($e(i).length) + ")", 1)
            ]),
            e("div", pC, [
              (s(!0), o(G, null, ne($e(i), (F) => (s(), x(ss, {
                key: F.id,
                item: F,
                onCancel: (j) => V(F.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : r("", !0),
          $e(f).length > 0 ? (s(), o("div", gC, [
            e("div", hC, [
              e("span", yC, "Completed (" + a($e(f).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: H[3] || (H[3] = //@ts-ignore
                (...F) => $e(E) && $e(E)(...F))
              }, "Clear")
            ]),
            e("div", wC, [
              (s(!0), o(G, null, ne($e(f).slice(0, 3), (F) => (s(), x(ss, {
                key: F.id,
                item: F,
                onRemove: (j) => $e(h)(F.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          $e(p).length > 0 ? (s(), o("div", kC, [
            e("div", bC, [
              e("span", _C, "Failed (" + a($e(p).length) + ")", 1)
            ]),
            e("div", $C, [
              (s(!0), o(G, null, ne($e(p), (F) => (s(), x(ss, {
                key: F.id,
                item: F,
                onRetry: (j) => $e(y)(F.id),
                onRemove: (j) => $e(h)(F.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : r("", !0)
        ])) : (s(), o("div", tC, [
          e("div", sC, [
            e("div", {
              class: "progress-fill",
              style: It({ width: `${S.value}%` })
            }, null, 4)
          ]),
          $e(n) ? (s(), o("div", oC, [
            e("span", nC, a($e(n).filename), 1),
            e("span", aC, a(R($e(n).speed)), 1)
          ])) : r("", !0)
        ]))
      ], 2)) : r("", !0)
    ]));
  }
}), xC = /* @__PURE__ */ oe(CC, [["__scopeId", "data-v-60751cfa"]]), SC = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', IC = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', EC = {
  comfy: SC,
  phosphor: IC
}, Us = "comfy", yo = "comfygit-theme";
let Ot = null, wo = Us;
function PC() {
  try {
    const t = localStorage.getItem(yo);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Us;
}
function ko(t = Us) {
  Ot && Ot.remove(), Ot = document.createElement("style"), Ot.id = "comfygit-theme-styles", Ot.setAttribute("data-theme", t), Ot.textContent = EC[t], document.head.appendChild(Ot), document.body.setAttribute("data-comfygit-theme", t), wo = t;
  try {
    localStorage.setItem(yo, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function RC() {
  return wo;
}
function TC(t) {
  ko(t);
}
function MC(t) {
  var p;
  const { ui_id: c, state: n } = t || {}, i = (n == null ? void 0 : n.history) || {};
  if (!c)
    return null;
  const f = i[c];
  return f && f.result === "error" && ((p = f.status) == null ? void 0 : p.status_str) === "error" ? (f.status.messages || [])[0] || "Unknown error" : null;
}
const Ns = document.createElement("link");
Ns.rel = "stylesheet";
Ns.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Ns);
const DC = PC();
ko(DC);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), TC(t);
  },
  getTheme: () => {
    const t = RC();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let pt = null, at = null, ls = null, os = null, Hs = null;
const Ht = w(null);
let Os = "managed", bo = !1;
async function vs() {
  var t;
  if (!((t = zt) != null && t.api)) return null;
  try {
    const c = await zt.api.fetchApi("/v2/comfygit/status");
    c.ok && (Ht.value = await c.json());
  } catch {
  }
}
async function Es() {
  var t;
  if ((t = zt) != null && t.api)
    try {
      const c = await zt.api.fetchApi("/v2/setup/status");
      if (c.ok) {
        const n = await c.json();
        Os = n.state, bo = n.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function Ps() {
  var c;
  if (Os === "managed" || !bo) return;
  const t = document.querySelectorAll("button.comfyui-button");
  for (const n of t)
    if (((c = n.textContent) == null ? void 0 : c.trim()) === "Manager" && !n.querySelector("svg, i, img")) {
      n.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function LC() {
  if (!Ht.value) return !1;
  const t = Ht.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Ht.value.has_changes;
}
function qs(t) {
  pt && pt.remove(), pt = document.createElement("div"), pt.className = "comfygit-panel-overlay";
  const c = document.createElement("div");
  c.className = "comfygit-panel-container", pt.appendChild(c), pt.addEventListener("click", (f) => {
    f.target === pt && Ss();
  });
  const n = (f) => {
    f.key === "Escape" && (Ss(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), Ms({
    render: () => Ds(T$, {
      initialView: t,
      onClose: Ss,
      onStatusUpdate: async (f) => {
        Ht.value = f, is(), await Es(), Rs(), Ps();
      }
    })
  }).mount(c), document.body.appendChild(pt);
}
function Ss() {
  pt && (pt.remove(), pt = null);
}
function zC(t) {
  ns(), at = document.createElement("div"), at.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  at.style.position = "fixed", at.style.top = `${c.bottom + 8}px`, at.style.right = `${window.innerWidth - c.right}px`, at.style.zIndex = "10001";
  const n = (f) => {
    at && !at.contains(f.target) && f.target !== t && (ns(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const i = (f) => {
    f.key === "Escape" && (ns(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), ls = Ms({
    render: () => Ds(po, {
      status: Ht.value,
      onClose: ns,
      onCommitted: (f) => {
        ns(), UC(f.success, f.message), vs().then(is);
      }
    })
  }), ls.mount(at), document.body.appendChild(at);
}
function ns() {
  ls && (ls.unmount(), ls = null), at && (at.remove(), at = null);
}
function UC(t, c) {
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
  const f = document.createElement("span");
  f.textContent = t ? "✓" : "✕", f.style.cssText = `
    color: ${i};
    font-weight: bold;
    font-size: 14px;
  `, n.appendChild(f);
  const p = document.createElement("span");
  p.textContent = c, n.appendChild(p), document.body.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", n.style.transition = "opacity 0.2s ease", setTimeout(() => n.remove(), 200);
  }, 3e3);
}
function NC() {
  os || (os = document.createElement("div"), os.className = "comfygit-download-queue-root", Hs = Ms({
    render: () => Ds(xC)
  }), Hs.mount(os), document.body.appendChild(os), console.log("[ComfyGit] Model download queue mounted"));
}
let ct = null;
function is() {
  if (!ct) return;
  const t = ct.querySelector(".commit-indicator");
  t && (t.style.display = LC() ? "block" : "none");
}
function Rs() {
  if (!ct) return;
  const t = Os !== "managed";
  ct.disabled = t, ct.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const _o = document.createElement("style");
_o.textContent = `
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
document.head.appendChild(_o);
zt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var f, p;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = qs, ct = document.createElement("button"), ct.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", ct.innerHTML = 'Commit <span class="commit-indicator"></span>', ct.title = "Quick Commit", ct.onclick = () => zC(ct), t.appendChild(c), t.appendChild(ct), (p = (f = zt.menu) == null ? void 0 : f.settingsGroup) != null && p.element && (zt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), NC();
    const { loadPendingDownloads: n } = rs();
    n(), await Promise.all([vs(), Es()]), is(), Rs(), Ps(), setTimeout(Ps, 100), setInterval(async () => {
      await Promise.all([vs(), Es()]), is(), Rs();
    }, 3e4);
    const i = zt.api;
    if (i) {
      let u = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((y) => {
          (y.startsWith("workflow:") || y.startsWith("Comfy.OpenWorkflowsPaths:") || y.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(y);
        }), window.location.reload();
      }, v = function() {
        const y = document.createElement("div");
        y.style.cssText = `
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
        const _ = document.createElement("span");
        _.textContent = "Workflows updated - refresh required", y.appendChild(_);
        const k = document.createElement("button");
        k.textContent = "Refresh", k.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, k.onmouseover = () => k.style.background = "var(--comfy-input-bg)", k.onmouseout = () => k.style.background = "var(--comfy-menu-bg)", k.onclick = () => u(), y.appendChild(k);
        const h = document.createElement("button");
        h.textContent = "×", h.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, h.onmouseover = () => h.style.opacity = "1", h.onmouseout = () => h.style.opacity = "0.6", h.onclick = () => y.remove(), y.appendChild(h), document.body.appendChild(y), console.log("[ComfyGit] Refresh notification displayed");
      }, d = function(y) {
        const _ = document.getElementById("comfygit-error-toast");
        _ && _.remove();
        const k = document.createElement("div");
        k.id = "comfygit-error-toast", k.style.cssText = `
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
        const h = document.createElement("span");
        h.textContent = "⚠️", h.style.fontSize = "20px", k.appendChild(h);
        const E = document.createElement("div");
        E.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const D = document.createElement("div");
        D.textContent = "Node installation failed", D.style.cssText = "font-weight: 600; color: #e53935;", E.appendChild(D);
        const $ = document.createElement("div");
        $.textContent = "Dependency conflict detected", $.style.cssText = "font-size: 12px; opacity: 0.8;", E.appendChild($), k.appendChild(E);
        const S = document.createElement("button");
        S.textContent = "View Logs", S.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, S.onmouseover = () => S.style.background = "#c62828", S.onmouseout = () => S.style.background = "#e53935", S.onclick = () => {
          k.remove(), qs("debug-env");
        }, k.appendChild(S);
        const V = document.createElement("button");
        V.textContent = "×", V.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, V.onmouseover = () => V.style.opacity = "1", V.onmouseout = () => V.style.opacity = "0.6", V.onclick = () => k.remove(), k.appendChild(V), document.body.appendChild(k), console.log("[ComfyGit] Manager error toast displayed:", y), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && k.remove();
        }, 1e4);
      };
      i.addEventListener("comfygit:workflow-changed", async (y) => {
        const { change_type: _, workflow_name: k } = y.detail;
        console.log(`[ComfyGit] Workflow ${_}: ${k}`), await vs(), is();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let m = !1;
      i.addEventListener("status", async (y) => {
        const _ = y.detail != null;
        _ && !m && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), u()) : v()), m = _;
      }), console.log("[ComfyGit] Refresh notification system initialized"), i.addEventListener("cm-task-completed", (y) => {
        const _ = MC(y.detail);
        _ && d(_);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
