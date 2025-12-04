import { app as Vt } from "../../scripts/app.js";
import { defineComponent as te, createElementBlock as o, openBlock as s, createCommentVNode as r, createElementVNode as e, renderSlot as Re, createBlock as P, resolveDynamicComponent as Us, normalizeClass as fe, withCtx as i, toDisplayString as a, createVNode as b, createTextVNode as g, computed as z, Fragment as W, renderList as ae, normalizeStyle as zt, ref as h, onMounted as Ne, watch as mt, Teleport as et, withModifiers as Fe, Transition as Io, createSlots as Kt, withKeys as Tt, reactive as ms, onUnmounted as $s, readonly as Eo, unref as Se, withDirectives as De, vModelText as kt, vModelRadio as Rt, vModelCheckbox as ws, nextTick as Qs, vModelSelect as Lt, vModelDynamic as Zs, TransitionGroup as Po, createApp as Ns, h as Os } from "vue";
const Ro = { class: "panel-layout" }, To = {
  key: 0,
  class: "panel-layout-header"
}, Mo = {
  key: 1,
  class: "panel-layout-search"
}, Do = { class: "panel-layout-content" }, Lo = {
  key: 2,
  class: "panel-layout-footer"
}, zo = /* @__PURE__ */ te({
  __name: "PanelLayout",
  setup(t) {
    return (c, n) => (s(), o("div", Ro, [
      c.$slots.header ? (s(), o("div", To, [
        Re(c.$slots, "header", {}, void 0, !0)
      ])) : r("", !0),
      c.$slots.search ? (s(), o("div", Mo, [
        Re(c.$slots, "search", {}, void 0, !0)
      ])) : r("", !0),
      e("div", Do, [
        Re(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (s(), o("div", Lo, [
        Re(c.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), se = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [l, p] of c)
    n[l] = p;
  return n;
}, nt = /* @__PURE__ */ se(zo, [["__scopeId", "data-v-21565df9"]]), Uo = {
  key: 0,
  class: "panel-title-prefix"
}, No = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Oo = /* @__PURE__ */ te({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, n) => (s(), P(Us(`h${t.level}`), {
      class: fe(["panel-title", t.variant])
    }, {
      default: i(() => [
        t.showPrefix ? (s(), o("span", Uo, a(t.prefix), 1)) : (s(), o("span", No)),
        Re(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ao = /* @__PURE__ */ se(Oo, [["__scopeId", "data-v-c3875efc"]]), Fo = ["title"], Bo = ["width", "height"], Vo = /* @__PURE__ */ te({
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
      onClick: n[0] || (n[0] = (l) => c.$emit("click"))
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
      ])], 8, Bo))
    ], 8, Fo));
  }
}), eo = /* @__PURE__ */ se(Vo, [["__scopeId", "data-v-6fc7f16d"]]), Wo = { class: "header-left" }, Go = {
  key: 0,
  class: "header-actions"
}, jo = /* @__PURE__ */ te({
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
      e("div", Wo, [
        b(Ao, { "show-prefix": t.showPrefix }, {
          default: i(() => [
            g(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), P(eo, {
          key: 0,
          onClick: n[0] || (n[0] = (l) => c.$emit("info-click"))
        })) : r("", !0)
      ]),
      c.$slots.actions ? (s(), o("div", Go, [
        Re(c.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), at = /* @__PURE__ */ se(jo, [["__scopeId", "data-v-55a62cd6"]]), Ko = {
  key: 0,
  class: "section-title-count"
}, Ho = {
  key: 1,
  class: "section-title-icon"
}, qo = /* @__PURE__ */ te({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (s(), P(Us(`h${t.level}`), {
      class: fe(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (l) => t.clickable && c.$emit("click"))
    }, {
      default: i(() => [
        Re(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Ko, "(" + a(t.count) + ")", 1)) : r("", !0),
        t.clickable ? (s(), o("span", Ho, a(t.expanded ? "▼" : "▸"), 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ut = /* @__PURE__ */ se(qo, [["__scopeId", "data-v-559361eb"]]), Yo = { class: "status-grid" }, Jo = { class: "status-grid__columns" }, Xo = { class: "status-grid__column" }, Qo = { class: "status-grid__title" }, Zo = { class: "status-grid__column status-grid__column--right" }, en = { class: "status-grid__title" }, tn = {
  key: 0,
  class: "status-grid__footer"
}, sn = /* @__PURE__ */ te({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", Yo, [
      e("div", Jo, [
        e("div", Xo, [
          e("h4", Qo, a(t.leftTitle), 1),
          Re(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Zo, [
          e("h4", en, a(t.rightTitle), 1),
          Re(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (s(), o("div", tn, [
        Re(c.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), on = /* @__PURE__ */ se(sn, [["__scopeId", "data-v-73b7ba3f"]]), nn = {
  key: 0,
  class: "status-item__icon"
}, an = {
  key: 1,
  class: "status-item__count"
}, ln = { class: "status-item__label" }, rn = /* @__PURE__ */ te({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const c = t, n = z(() => `status-item--${c.variant}`);
    return (l, p) => (s(), o("div", {
      class: fe(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", nn, a(t.icon), 1)) : r("", !0),
      t.count !== void 0 ? (s(), o("span", an, a(t.count), 1)) : r("", !0),
      e("span", ln, a(t.label), 1)
    ], 2));
  }
}), Et = /* @__PURE__ */ se(rn, [["__scopeId", "data-v-6f929183"]]), dn = { class: "issue-card__header" }, cn = { class: "issue-card__icon" }, un = { class: "issue-card__title" }, mn = {
  key: 0,
  class: "issue-card__content"
}, vn = {
  key: 0,
  class: "issue-card__description"
}, fn = {
  key: 1,
  class: "issue-card__items"
}, pn = {
  key: 2,
  class: "issue-card__actions"
}, gn = /* @__PURE__ */ te({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const c = t, n = z(() => `issue-card--${c.severity}`);
    return (l, p) => (s(), o("div", {
      class: fe(["issue-card", n.value])
    }, [
      e("div", dn, [
        e("span", cn, a(t.icon), 1),
        e("h4", un, a(t.title), 1)
      ]),
      l.$slots.default || t.description ? (s(), o("div", mn, [
        t.description ? (s(), o("p", vn, a(t.description), 1)) : r("", !0),
        Re(l.$slots, "default", {}, void 0, !0)
      ])) : r("", !0),
      t.items && t.items.length ? (s(), o("div", fn, [
        (s(!0), o(W, null, ae(t.items, (v, u) => (s(), o("div", {
          key: u,
          class: "issue-card__item"
        }, [
          p[0] || (p[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(v), 1)
        ]))), 128))
      ])) : r("", !0),
      l.$slots.actions ? (s(), o("div", pn, [
        Re(l.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), yt = /* @__PURE__ */ se(gn, [["__scopeId", "data-v-df6aa348"]]), hn = ["type", "disabled"], yn = {
  key: 0,
  class: "spinner"
}, wn = /* @__PURE__ */ te({
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
      onClick: n[0] || (n[0] = (l) => c.$emit("click", l))
    }, [
      t.loading ? (s(), o("span", yn)) : r("", !0),
      t.loading ? r("", !0) : Re(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, hn));
  }
}), X = /* @__PURE__ */ se(wn, [["__scopeId", "data-v-772abe47"]]), kn = { class: "empty-state" }, bn = {
  key: 0,
  class: "empty-icon"
}, _n = { class: "empty-message" }, $n = /* @__PURE__ */ te({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, n) => (s(), o("div", kn, [
      t.icon ? (s(), o("div", bn, a(t.icon), 1)) : r("", !0),
      e("p", _n, a(t.message), 1),
      t.actionLabel ? (s(), P(X, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (l) => c.$emit("action"))
      }, {
        default: i(() => [
          g(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : r("", !0)
    ]));
  }
}), _t = /* @__PURE__ */ se($n, [["__scopeId", "data-v-4466284f"]]), Cn = /* @__PURE__ */ te({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: fe(["detail-label"]),
      style: zt({ minWidth: t.minWidth })
    }, [
      Re(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), hs = /* @__PURE__ */ se(Cn, [["__scopeId", "data-v-75e9eeb8"]]), xn = /* @__PURE__ */ te({
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
      Re(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ms = /* @__PURE__ */ se(xn, [["__scopeId", "data-v-2f186e4c"]]), Sn = { class: "detail-row" }, In = /* @__PURE__ */ te({
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
    return (c, n) => (s(), o("div", Sn, [
      b(hs, { "min-width": t.labelMinWidth }, {
        default: i(() => [
          g(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), P(Ms, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: i(() => [
          g(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Re(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Ge = /* @__PURE__ */ se(In, [["__scopeId", "data-v-ef15664a"]]), En = { class: "modal-header" }, Pn = { class: "modal-body" }, Rn = { class: "status-section" }, Tn = {
  key: 0,
  class: "status-section"
}, Mn = { class: "section-header-row" }, Dn = {
  key: 0,
  class: "workflow-group"
}, Ln = { class: "workflow-group-header" }, zn = { class: "workflow-group-title" }, Un = { class: "workflow-list" }, Nn = { class: "workflow-name" }, On = { class: "workflow-issue" }, An = {
  key: 1,
  class: "workflow-group"
}, Fn = { class: "workflow-group-header" }, Bn = { class: "workflow-group-title" }, Vn = { class: "workflow-list" }, Wn = { class: "workflow-name" }, Gn = { class: "workflow-issue" }, jn = {
  key: 2,
  class: "workflow-group"
}, Kn = { class: "workflow-group-header" }, Hn = { class: "workflow-group-title" }, qn = { class: "workflow-list" }, Yn = { class: "workflow-name" }, Jn = {
  key: 3,
  class: "workflow-group"
}, Xn = { class: "workflow-group-header" }, Qn = { class: "workflow-group-title" }, Zn = { class: "workflow-list" }, ea = { class: "workflow-name" }, ta = {
  key: 4,
  class: "workflow-group"
}, sa = { class: "workflow-group-header" }, oa = { class: "workflow-group-title" }, na = { class: "workflow-list" }, aa = { class: "workflow-name" }, la = {
  key: 5,
  class: "workflow-group"
}, ia = { class: "workflow-group-title" }, ra = { class: "expand-icon" }, da = {
  key: 0,
  class: "workflow-list"
}, ca = { class: "workflow-name" }, ua = {
  key: 1,
  class: "status-section"
}, ma = {
  key: 0,
  class: "change-group"
}, va = { class: "change-group-header" }, fa = { class: "change-group-title" }, pa = { class: "change-list" }, ga = { class: "node-name" }, ha = {
  key: 0,
  class: "dev-badge"
}, ya = {
  key: 1,
  class: "change-group"
}, wa = { class: "change-group-header" }, ka = { class: "change-group-title" }, ba = { class: "change-list" }, _a = { class: "node-name" }, $a = {
  key: 0,
  class: "dev-badge"
}, Ca = {
  key: 2,
  class: "change-group"
}, xa = { class: "change-list" }, Sa = { class: "change-item" }, Ia = { class: "node-name" }, Ea = {
  key: 3,
  class: "change-group"
}, Pa = {
  key: 2,
  class: "status-section"
}, Ra = { class: "section-header-row" }, Ta = {
  key: 0,
  class: "drift-item"
}, Ma = { class: "drift-list" }, Da = {
  key: 0,
  class: "drift-list-more"
}, La = {
  key: 1,
  class: "drift-item"
}, za = { class: "drift-list" }, Ua = {
  key: 0,
  class: "drift-list-more"
}, Na = {
  key: 2,
  class: "drift-item"
}, Oa = { class: "drift-list" }, Aa = { class: "version-actual" }, Fa = { class: "version-expected" }, Ba = {
  key: 0,
  class: "drift-list-more"
}, Va = {
  key: 3,
  class: "drift-item"
}, Wa = { class: "repair-action" }, Ga = {
  key: 3,
  class: "status-section"
}, ja = { class: "info-box" }, Ka = { class: "drift-list" }, Ha = {
  key: 0,
  class: "drift-list-more"
}, qa = {
  key: 4,
  class: "status-section"
}, Ya = { class: "warning-box" }, Ja = {
  key: 5,
  class: "empty-state-inline"
}, Xa = { class: "modal-actions" }, Qa = /* @__PURE__ */ te({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(t) {
    const c = t, n = h(!1);
    Ne(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), mt(() => c.show, (k, y) => {
      console.log("StatusDetailModal show prop changed from", y, "to", k);
    }, { immediate: !0 });
    const l = z(() => {
      var k, y, R;
      return ((R = (y = (k = c.status) == null ? void 0 : k.workflows) == null ? void 0 : y.analyzed) == null ? void 0 : R.filter(
        (E) => E.status === "broken" && E.sync_state === "synced"
      )) || [];
    }), p = z(() => {
      var k, y, R;
      return ((R = (y = (k = c.status) == null ? void 0 : k.workflows) == null ? void 0 : y.analyzed) == null ? void 0 : R.filter(
        (E) => E.status === "broken" && E.sync_state !== "synced"
      )) || [];
    }), v = z(() => {
      var k, y, R;
      return ((R = (y = (k = c.status) == null ? void 0 : k.workflows) == null ? void 0 : y.synced) == null ? void 0 : R.filter((E) => {
        var S, N, T;
        const $ = (T = (N = (S = c.status) == null ? void 0 : S.workflows) == null ? void 0 : N.analyzed) == null ? void 0 : T.find((I) => I.name === E);
        return !$ || $.status !== "broken";
      })) || [];
    }), u = z(() => {
      var k, y, R, E, $;
      return (k = c.status) != null && k.workflows ? (((y = c.status.workflows.new) == null ? void 0 : y.length) ?? 0) > 0 || (((R = c.status.workflows.modified) == null ? void 0 : R.length) ?? 0) > 0 || (((E = c.status.workflows.deleted) == null ? void 0 : E.length) ?? 0) > 0 || ((($ = c.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), f = z(() => {
      var y, R, E;
      const k = (y = c.status) == null ? void 0 : y.git_changes;
      return k ? (((R = k.nodes_added) == null ? void 0 : R.length) ?? 0) > 0 || (((E = k.nodes_removed) == null ? void 0 : E.length) ?? 0) > 0 || k.workflow_changes || k.has_other_changes : !1;
    }), d = z(() => {
      var k, y, R, E, $, S;
      return !u.value && !f.value && ((y = (k = c.status) == null ? void 0 : k.comparison) == null ? void 0 : y.is_synced) && (((R = c.status) == null ? void 0 : R.missing_models_count) ?? 0) === 0 && (((S = ($ = (E = c.status) == null ? void 0 : E.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : S.length) ?? 0) === 0;
    }), m = z(() => {
      var y, R;
      const k = (R = (y = c.status) == null ? void 0 : y.git_changes) == null ? void 0 : R.workflow_changes;
      return k ? typeof k == "number" ? k : Object.keys(k).length : 0;
    });
    function w(k) {
      return typeof k == "string" ? k : k.name;
    }
    function _(k) {
      return typeof k == "object" && k.is_development === !0;
    }
    return (k, y) => {
      var R, E, $, S, N, T, I, Y, B, U, C, x, L, le, ie, K, ee, q, O, A, M, ve;
      return s(), P(et, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: y[7] || (y[7] = (oe) => k.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: y[6] || (y[6] = Fe(() => {
            }, ["stop"]))
          }, [
            e("div", En, [
              y[8] || (y[8] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: y[0] || (y[0] = (oe) => k.$emit("close"))
              }, "✕")
            ]),
            e("div", Pn, [
              e("div", Rn, [
                b(ut, { level: "4" }, {
                  default: i(() => [...y[9] || (y[9] = [
                    g("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                b(Ge, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (s(), o("div", Tn, [
                e("div", Mn, [
                  b(ut, { level: "4" }, {
                    default: i(() => [...y[10] || (y[10] = [
                      g("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: y[1] || (y[1] = (oe) => k.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                l.value.length ? (s(), o("div", Dn, [
                  e("div", Ln, [
                    y[11] || (y[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", zn, "BROKEN (COMMITTED) (" + a(l.value.length) + ")", 1)
                  ]),
                  e("div", Un, [
                    (s(!0), o(W, null, ae(l.value, (oe) => (s(), o("div", {
                      key: oe.name,
                      class: "workflow-item"
                    }, [
                      e("span", Nn, a(oe.name), 1),
                      e("span", On, a(oe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                p.value.length ? (s(), o("div", An, [
                  e("div", Fn, [
                    y[12] || (y[12] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Bn, "BROKEN (UNCOMMITTED) (" + a(p.value.length) + ")", 1)
                  ]),
                  e("div", Vn, [
                    (s(!0), o(W, null, ae(p.value, (oe) => (s(), o("div", {
                      key: oe.name,
                      class: "workflow-item"
                    }, [
                      e("span", Wn, a(oe.name), 1),
                      e("span", Gn, a(oe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (E = (R = t.status.workflows) == null ? void 0 : R.new) != null && E.length ? (s(), o("div", jn, [
                  e("div", Kn, [
                    y[13] || (y[13] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Hn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", qn, [
                    (s(!0), o(W, null, ae(t.status.workflows.new, (oe) => (s(), o("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", Yn, a(oe), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (S = ($ = t.status.workflows) == null ? void 0 : $.modified) != null && S.length ? (s(), o("div", Jn, [
                  e("div", Xn, [
                    y[14] || (y[14] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Qn, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Zn, [
                    (s(!0), o(W, null, ae(t.status.workflows.modified, (oe) => (s(), o("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", ea, a(oe), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (T = (N = t.status.workflows) == null ? void 0 : N.deleted) != null && T.length ? (s(), o("div", ta, [
                  e("div", sa, [
                    y[15] || (y[15] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", oa, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", na, [
                    (s(!0), o(W, null, ae(t.status.workflows.deleted, (oe) => (s(), o("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", aa, a(oe), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                v.value.length ? (s(), o("div", la, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: y[2] || (y[2] = (oe) => n.value = !n.value)
                  }, [
                    y[16] || (y[16] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", ia, "SYNCED (" + a(v.value.length) + ")", 1),
                    e("span", ra, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", da, [
                    (s(!0), o(W, null, ae(v.value, (oe) => (s(), o("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", ca, a(oe), 1)
                    ]))), 128))
                  ])) : r("", !0)
                ])) : r("", !0)
              ])) : r("", !0),
              f.value ? (s(), o("div", ua, [
                b(ut, { level: "4" }, {
                  default: i(() => [...y[17] || (y[17] = [
                    g("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (Y = (I = t.status.git_changes) == null ? void 0 : I.nodes_added) != null && Y.length ? (s(), o("div", ma, [
                  e("div", va, [
                    y[18] || (y[18] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", fa, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", pa, [
                    (s(!0), o(W, null, ae(t.status.git_changes.nodes_added, (oe) => (s(), o("div", {
                      key: w(oe),
                      class: "change-item"
                    }, [
                      e("span", ga, a(w(oe)), 1),
                      _(oe) ? (s(), o("span", ha, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (U = (B = t.status.git_changes) == null ? void 0 : B.nodes_removed) != null && U.length ? (s(), o("div", ya, [
                  e("div", wa, [
                    y[19] || (y[19] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", ka, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", ba, [
                    (s(!0), o(W, null, ae(t.status.git_changes.nodes_removed, (oe) => (s(), o("div", {
                      key: w(oe),
                      class: "change-item"
                    }, [
                      e("span", _a, a(w(oe)), 1),
                      _(oe) ? (s(), o("span", $a, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (C = t.status.git_changes) != null && C.workflow_changes ? (s(), o("div", Ca, [
                  y[20] || (y[20] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", xa, [
                    e("div", Sa, [
                      e("span", Ia, a(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : r("", !0),
                (x = t.status.git_changes) != null && x.has_other_changes ? (s(), o("div", Ea, [...y[21] || (y[21] = [
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
              (L = t.status.comparison) != null && L.is_synced ? r("", !0) : (s(), o("div", Pa, [
                e("div", Ra, [
                  b(ut, { level: "4" }, {
                    default: i(() => [...y[22] || (y[22] = [
                      g("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: y[3] || (y[3] = (oe) => k.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                y[26] || (y[26] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (ie = (le = t.status.comparison) == null ? void 0 : le.missing_nodes) != null && ie.length ? (s(), o("div", Ta, [
                  b(Ge, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Ma, [
                    (s(!0), o(W, null, ae(t.status.comparison.missing_nodes.slice(0, 10), (oe) => (s(), o("div", {
                      key: oe,
                      class: "drift-list-item"
                    }, " - " + a(oe), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", Da, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (ee = (K = t.status.comparison) == null ? void 0 : K.extra_nodes) != null && ee.length ? (s(), o("div", La, [
                  b(Ge, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", za, [
                    (s(!0), o(W, null, ae(t.status.comparison.extra_nodes.slice(0, 10), (oe) => (s(), o("div", {
                      key: oe,
                      class: "drift-list-item"
                    }, " - " + a(oe), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", Ua, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (O = (q = t.status.comparison) == null ? void 0 : q.version_mismatches) != null && O.length ? (s(), o("div", Na, [
                  b(Ge, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  e("div", Oa, [
                    (s(!0), o(W, null, ae(t.status.comparison.version_mismatches.slice(0, 10), (oe) => (s(), o("div", {
                      key: oe.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      g(a(oe.name) + ": ", 1),
                      e("span", Aa, a(oe.actual), 1),
                      y[23] || (y[23] = g(" → ", -1)),
                      e("span", Fa, a(oe.expected), 1)
                    ]))), 128)),
                    t.status.comparison.version_mismatches.length > 10 ? (s(), o("div", Ba, " ... and " + a(t.status.comparison.version_mismatches.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                ((A = t.status.comparison) == null ? void 0 : A.packages_in_sync) === !1 ? (s(), o("div", Va, [
                  b(Ge, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : r("", !0),
                e("div", Wa, [
                  b(X, {
                    variant: "warning",
                    loading: t.isRepairing,
                    onClick: y[4] || (y[4] = (oe) => k.$emit("repair"))
                  }, {
                    default: i(() => [...y[24] || (y[24] = [
                      g(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  y[25] || (y[25] = e("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ve = (M = t.status.comparison) == null ? void 0 : M.disabled_nodes) != null && ve.length ? (s(), o("div", Ga, [
                b(ut, { level: "4" }, {
                  default: i(() => [...y[27] || (y[27] = [
                    g("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", ja, [
                  y[28] || (y[28] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Ka, [
                  (s(!0), o(W, null, ae(t.status.comparison.disabled_nodes.slice(0, 10), (oe) => (s(), o("div", {
                    key: oe,
                    class: "drift-list-item"
                  }, " • " + a(oe), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", Ha, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : r("", !0)
                ])
              ])) : r("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", qa, [
                b(ut, { level: "4" }, {
                  default: i(() => [...y[29] || (y[29] = [
                    g("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Ya, [
                  y[30] || (y[30] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                y[31] || (y[31] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : r("", !0),
              d.value ? (s(), o("div", Ja, [...y[32] || (y[32] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : r("", !0)
            ]),
            e("div", Xa, [
              b(X, {
                variant: "secondary",
                onClick: y[5] || (y[5] = (oe) => k.$emit("close"))
              }, {
                default: i(() => [...y[33] || (y[33] = [
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
}), Za = /* @__PURE__ */ se(Qa, [["__scopeId", "data-v-e2b37122"]]), el = { class: "health-section-header" }, tl = { class: "suggestions-content" }, sl = { class: "suggestions-text" }, ol = { style: { "margin-top": "var(--cg-space-3)" } }, nl = {
  key: 1,
  class: "no-issues-text"
}, al = /* @__PURE__ */ te({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(t, { expose: c, emit: n }) {
    const l = t, p = h(!1), v = h(!1);
    function u() {
      p.value = !0;
    }
    function f() {
      p.value = !1, m("view-workflows");
    }
    function d() {
      p.value = !1, m("view-nodes");
    }
    const m = n, w = h(!1), _ = h(!1);
    function k() {
      _.value = !0, m("repair-environment");
    }
    function y() {
      _.value = !1;
    }
    function R() {
      p.value = !1;
    }
    const E = z(() => {
      const q = l.status.workflows.analyzed || [], O = q.filter(
        (A) => A.unresolved_models_count > 0 || A.ambiguous_models_count > 0
      );
      return O.length === 0 && l.status.missing_models_count > 0 ? q.filter((A) => A.sync_state === "synced") : O;
    });
    function $() {
      const q = E.value;
      q.length !== 0 && (w.value = !0, m("repair-missing-models", q.map((O) => O.name)));
    }
    function S() {
      w.value = !1;
    }
    c({ resetRepairingState: S, resetRepairingEnvironmentState: y, closeDetailModal: R });
    const N = z(() => l.status.workflows.new.length > 0 || l.status.workflows.modified.length > 0 || l.status.workflows.deleted.length > 0), T = z(() => l.status.has_changes), I = z(() => {
      const q = l.status.git_changes;
      return q.nodes_added.length > 0 || q.nodes_removed.length > 0 || q.workflow_changes;
    }), Y = z(() => l.status.has_changes || N.value), B = z(() => Object.keys(l.status.git_changes.workflow_changes_detail).length), U = z(() => l.status.git_changes.has_other_changes), C = z(() => {
      var q;
      return ((q = l.status.workflows.analyzed) == null ? void 0 : q.filter((O) => O.status === "broken")) || [];
    }), x = z(() => {
      var q;
      return ((q = l.status.workflows.analyzed) == null ? void 0 : q.filter(
        (O) => O.has_path_sync_issues && !O.has_issues
      )) || [];
    }), L = z(() => C.value.length > 0), le = z(() => L.value || x.value.length > 0 || l.status.missing_models_count > 0 || !l.status.comparison.is_synced || l.status.has_legacy_manager), ie = z(() => {
      const q = [];
      return l.status.workflows.new.length > 0 && q.push(`${l.status.workflows.new.length} new`), l.status.workflows.modified.length > 0 && q.push(`${l.status.workflows.modified.length} modified`), l.status.workflows.deleted.length > 0 && q.push(`${l.status.workflows.deleted.length} deleted`), q.length > 0 ? `${q.join(", ")} workflow${q.length === 1 && !q[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), K = z(() => {
      var A, M;
      const q = [], O = l.status.comparison;
      return (A = O.missing_nodes) != null && A.length && q.push(`${O.missing_nodes.length} missing node${O.missing_nodes.length === 1 ? "" : "s"}`), (M = O.extra_nodes) != null && M.length && q.push(`${O.extra_nodes.length} untracked node${O.extra_nodes.length === 1 ? "" : "s"}`), q.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${q.join(" and ")}.`;
    }), ee = z(() => {
      var A, M;
      const q = [], O = l.status.comparison;
      return (A = O.extra_nodes) != null && A.length && (O.extra_nodes.slice(0, 3).forEach((ve) => {
        q.push(`Untracked: ${ve}`);
      }), O.extra_nodes.length > 3 && q.push(`...and ${O.extra_nodes.length - 3} more untracked`)), (M = O.missing_nodes) != null && M.length && (O.missing_nodes.slice(0, 3).forEach((ve) => {
        q.push(`Missing: ${ve}`);
      }), O.missing_nodes.length > 3 && q.push(`...and ${O.missing_nodes.length - 3} more missing`)), q;
    });
    return (q, O) => (s(), o(W, null, [
      b(nt, null, {
        header: i(() => [
          b(at, { title: "STATUS" })
        ]),
        content: i(() => [
          l.setupState === "no_workspace" ? (s(), P(yt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: i(() => [
              b(X, {
                variant: "primary",
                size: "sm",
                onClick: O[0] || (O[0] = (A) => q.$emit("start-setup"))
              }, {
                default: i(() => [...O[13] || (O[13] = [
                  g(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : l.setupState === "unmanaged" ? (s(), P(yt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: i(() => [
              b(X, {
                variant: "primary",
                size: "sm",
                onClick: O[1] || (O[1] = (A) => q.$emit("view-environments"))
              }, {
                default: i(() => [...O[14] || (O[14] = [
                  g(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : l.setupState === "empty_workspace" ? (s(), P(yt, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: i(() => [
              b(X, {
                variant: "primary",
                size: "sm",
                onClick: O[2] || (O[2] = (A) => q.$emit("create-environment"))
              }, {
                default: i(() => [...O[15] || (O[15] = [
                  g(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: O[4] || (O[4] = (A) => v.value = !0),
            onMouseleave: O[5] || (O[5] = (A) => v.value = !1)
          }, [
            e("div", el, [
              b(ut, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: i(() => [...O[16] || (O[16] = [
                  g(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              b(Io, { name: "fade" }, {
                default: i(() => [
                  v.value ? (s(), P(X, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: u
                  }, {
                    default: i(() => [...O[17] || (O[17] = [
                      g(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : r("", !0)
                ]),
                _: 1
              })
            ]),
            b(on, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Kt({
              left: i(() => [
                t.status.workflows.new.length ? (s(), P(Et, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.modified.length ? (s(), P(Et, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.deleted.length ? (s(), P(Et, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : r("", !0),
                b(Et, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: N.value
                }, null, 8, ["count", "separator"])
              ]),
              right: i(() => [
                t.status.git_changes.nodes_added.length ? (s(), P(Et, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), P(Et, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.workflow_changes ? (s(), P(Et, {
                  key: 2,
                  icon: "●",
                  count: B.value,
                  label: B.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : r("", !0),
                U.value ? (s(), P(Et, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : r("", !0),
                T.value && !I.value && !U.value ? (s(), P(Et, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : r("", !0),
                T.value ? r("", !0) : (s(), P(Et, {
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
                fn: i(() => [
                  O[19] || (O[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", tl, [
                    e("span", sl, a(ie.value), 1),
                    b(X, {
                      variant: "primary",
                      size: "sm",
                      onClick: O[3] || (O[3] = (A) => q.$emit("commit-changes"))
                    }, {
                      default: i(() => [...O[18] || (O[18] = [
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
          t.status.is_detached_head ? (s(), P(yt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: i(() => [
              b(X, {
                variant: "primary",
                size: "sm",
                onClick: O[6] || (O[6] = (A) => q.$emit("create-branch"))
              }, {
                default: i(() => [...O[20] || (O[20] = [
                  g(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r("", !0),
          e("div", ol, [
            b(ut, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...O[21] || (O[21] = [
                g(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            le.value ? (s(), o(W, { key: 0 }, [
              C.value.length > 0 ? (s(), P(yt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${C.value.length} workflow${C.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: C.value.map((A) => `${A.name} — ${A.issue_summary}`)
              }, {
                actions: i(() => [
                  b(X, {
                    variant: "primary",
                    size: "sm",
                    onClick: O[7] || (O[7] = (A) => q.$emit("view-workflows"))
                  }, {
                    default: i(() => [...O[22] || (O[22] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : r("", !0),
              x.value.length > 0 ? (s(), P(yt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${x.value.length} workflow${x.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: x.value.map((A) => `${A.name} — ${A.models_needing_path_sync_count} model path${A.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: i(() => [
                  b(X, {
                    variant: "primary",
                    size: "sm",
                    onClick: O[8] || (O[8] = (A) => q.$emit("view-workflows"))
                  }, {
                    default: i(() => [...O[23] || (O[23] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : r("", !0),
              t.status.missing_models_count > 0 && !L.value ? (s(), P(yt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: i(() => [
                  b(X, {
                    variant: "primary",
                    size: "sm",
                    disabled: w.value,
                    onClick: $
                  }, {
                    default: i(() => [
                      g(a(w.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  b(X, {
                    variant: "secondary",
                    size: "sm",
                    onClick: O[9] || (O[9] = (A) => q.$emit("view-workflows"))
                  }, {
                    default: i(() => [...O[24] || (O[24] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : r("", !0),
              t.status.comparison.is_synced ? r("", !0) : (s(), P(yt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: K.value,
                items: ee.value
              }, {
                actions: i(() => [
                  b(X, {
                    variant: "secondary",
                    size: "sm",
                    onClick: u
                  }, {
                    default: i(() => [...O[25] || (O[25] = [
                      g(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  b(X, {
                    variant: "primary",
                    size: "sm",
                    onClick: O[10] || (O[10] = (A) => q.$emit("view-nodes"))
                  }, {
                    default: i(() => [...O[26] || (O[26] = [
                      g(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), P(yt, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: i(() => [
                  b(X, {
                    variant: "primary",
                    size: "sm",
                    onClick: O[11] || (O[11] = (A) => q.$emit("view-nodes"))
                  }, {
                    default: i(() => [...O[27] || (O[27] = [
                      g(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : r("", !0)
            ], 64)) : Y.value ? (s(), o("span", nl, "No issues")) : (s(), P(_t, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      b(Za, {
        show: p.value,
        status: t.status,
        "is-repairing": _.value,
        onClose: O[12] || (O[12] = (A) => p.value = !1),
        onNavigateWorkflows: f,
        onNavigateNodes: d,
        onRepair: k
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), ll = /* @__PURE__ */ se(al, [["__scopeId", "data-v-55fcd77f"]]), il = ["type", "value", "placeholder", "disabled"], rl = /* @__PURE__ */ te({
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
    const l = t, p = n, v = h(null);
    function u(f) {
      const d = f.target.value;
      p("update:modelValue", d);
    }
    return Ne(() => {
      l.autoFocus && v.value && v.value.focus();
    }), c({
      focus: () => {
        var f;
        return (f = v.value) == null ? void 0 : f.focus();
      },
      blur: () => {
        var f;
        return (f = v.value) == null ? void 0 : f.blur();
      }
    }), (f, d) => (s(), o("input", {
      ref_key: "inputRef",
      ref: v,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: fe(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: u,
      onKeyup: [
        d[0] || (d[0] = Tt((m) => f.$emit("enter"), ["enter"])),
        d[1] || (d[1] = Tt((m) => f.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (m) => f.$emit("focus")),
      onBlur: d[3] || (d[3] = (m) => f.$emit("blur"))
    }, null, 42, il));
  }
}), ks = /* @__PURE__ */ se(rl, [["__scopeId", "data-v-0380d08f"]]), dl = { class: "branch-create-form" }, cl = { class: "form-actions" }, ul = /* @__PURE__ */ te({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, l = h(""), p = z(() => {
      const f = l.value.trim();
      return f.length > 0 && !f.startsWith("-") && !f.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(f);
    });
    function v() {
      p.value && (n("create", l.value.trim()), l.value = "");
    }
    function u() {
      l.value = "", n("cancel");
    }
    return (f, d) => (s(), o("div", dl, [
      b(ks, {
        modelValue: l.value,
        "onUpdate:modelValue": d[0] || (d[0] = (m) => l.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: v,
        onEscape: u
      }, null, 8, ["modelValue"]),
      e("div", cl, [
        b(X, {
          variant: "primary",
          size: "sm",
          disabled: !p.value,
          onClick: v
        }, {
          default: i(() => [...d[1] || (d[1] = [
            g(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        b(X, {
          variant: "secondary",
          size: "sm",
          onClick: u
        }, {
          default: i(() => [...d[2] || (d[2] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), ml = /* @__PURE__ */ se(ul, [["__scopeId", "data-v-7c500394"]]), vl = { class: "branch-list-item__indicator" }, fl = { class: "branch-list-item__name" }, pl = {
  key: 0,
  class: "branch-list-item__actions"
}, gl = {
  key: 0,
  class: "branch-list-item__current-label"
}, hl = /* @__PURE__ */ te({
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
      onClick: n[0] || (n[0] = (l) => t.clickable && c.$emit("click"))
    }, [
      e("span", vl, a(t.isCurrent ? "●" : "○"), 1),
      e("span", fl, a(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (s(), o("div", pl, [
        Re(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", gl, " current ")) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), yl = /* @__PURE__ */ se(hl, [["__scopeId", "data-v-c6581a24"]]), wl = {
  key: 2,
  class: "branch-list"
}, kl = /* @__PURE__ */ te({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: c }) {
    const n = c, l = h(!1);
    function p(u) {
      n("create", u), v();
    }
    function v() {
      l.value = !1;
    }
    return (u, f) => (s(), P(nt, null, {
      header: i(() => [
        b(at, { title: "BRANCHES" }, {
          actions: i(() => [
            l.value ? r("", !0) : (s(), P(X, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: f[0] || (f[0] = (d) => l.value = !0)
            }, {
              default: i(() => [...f[1] || (f[1] = [
                g(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        l.value ? (s(), P(ml, {
          key: 0,
          onCreate: p,
          onCancel: v
        })) : r("", !0),
        t.branches.length === 0 ? (s(), P(_t, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", wl, [
          (s(!0), o(W, null, ae(t.branches, (d) => (s(), P(yl, {
            key: d.name,
            "branch-name": d.name,
            "is-current": d.is_current
          }, {
            actions: i(() => [
              d.is_current ? r("", !0) : (s(), P(X, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (m) => u.$emit("delete", d.name)
              }, {
                default: i(() => [...f[2] || (f[2] = [
                  g(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              d.is_current ? r("", !0) : (s(), P(X, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (m) => u.$emit("switch", d.name)
              }, {
                default: i(() => [...f[3] || (f[3] = [
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
}), bl = /* @__PURE__ */ se(kl, [["__scopeId", "data-v-86784ddd"]]), _l = { class: "commit-list" }, $l = /* @__PURE__ */ te({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (s(), o("div", _l, [
      Re(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Cl = /* @__PURE__ */ se($l, [["__scopeId", "data-v-8c5ee761"]]), xl = { class: "commit-hash" }, Sl = /* @__PURE__ */ te({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = z(() => c.hash.slice(0, c.length));
    return (l, p) => (s(), o("span", xl, a(n.value), 1));
  }
}), to = /* @__PURE__ */ se(Sl, [["__scopeId", "data-v-7c333cc6"]]), Il = { class: "commit-message" }, El = { class: "commit-date" }, Pl = /* @__PURE__ */ te({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, l = c;
    function p() {
      n.clickable && l("click");
    }
    return (v, u) => (s(), o("div", {
      class: fe(["commit-item", { clickable: t.clickable }]),
      onClick: p
    }, [
      b(to, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Il, a(t.message), 1),
      e("span", El, a(t.relativeDate), 1),
      v.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = Fe(() => {
        }, ["stop"]))
      }, [
        Re(v.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), Rl = /* @__PURE__ */ se(Pl, [["__scopeId", "data-v-dd7c621b"]]), Tl = /* @__PURE__ */ te({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (s(), P(nt, null, {
      header: i(() => [
        b(at, { title: "HISTORY" })
      ]),
      content: i(() => [
        t.commits.length === 0 ? (s(), P(_t, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), P(Cl, { key: 1 }, {
          default: i(() => [
            (s(!0), o(W, null, ae(t.commits, (l) => (s(), P(Rl, {
              key: l.hash,
              hash: l.short_hash || l.hash,
              message: l.message,
              "relative-date": l.date_relative || l.relative_date,
              onClick: (p) => c.$emit("select", l)
            }, {
              actions: i(() => [
                b(X, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (p) => c.$emit("checkout", l),
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
}), Ml = /* @__PURE__ */ se(Tl, [["__scopeId", "data-v-981c3c64"]]), L5 = ms({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const z5 = [
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
], U5 = {
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
}, Dl = [
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
], N5 = [
  ...Dl,
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
function We() {
  const t = h(!1), c = h(null);
  async function n(V, ue) {
    var Ve;
    if (!((Ve = window.app) != null && Ve.api))
      throw new Error("ComfyUI API not available");
    const $e = await window.app.api.fetchApi(V, ue);
    if (!$e.ok) {
      const dt = await $e.json().catch(() => ({}));
      throw new Error(dt.error || dt.message || `Request failed: ${$e.status}`);
    }
    return $e.json();
  }
  async function l(V = !1) {
    return n(V ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function p(V, ue = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: V, allow_issues: ue })
    });
  }
  async function v(V = 10, ue = 0) {
    return n(`/v2/comfygit/log?limit=${V}&offset=${ue}`);
  }
  async function u(V) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: V })
    });
  }
  async function f() {
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
  async function m(V) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: V, force: !0 })
    });
  }
  async function w() {
    return n("/v2/comfygit/branches");
  }
  async function _(V) {
    return n(`/v2/comfygit/commit/${V}`);
  }
  async function k(V, ue = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: V, force: ue })
    });
  }
  async function y(V, ue = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: V, start_point: ue })
    });
  }
  async function R(V, ue = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: V, force: ue })
    });
  }
  async function E(V, ue = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(V)}`, {
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
        const V = await l();
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
  async function S(V, ue) {
    const $e = { target_env: V };
    return ue && ($e.workspace_path = ue), n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify($e)
    });
  }
  async function N() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function T(V) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function I() {
    return n("/v2/workspace/environments/create_status");
  }
  async function Y(V = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${V}`);
  }
  async function B(V) {
    return n(`/v2/workspace/environments/${V}`, {
      method: "DELETE"
    });
  }
  async function U(V = !1) {
    try {
      return n(V ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ue = await l(V), $e = [];
      return ue.workflows.new.forEach((Ve) => {
        $e.push({ name: Ve, status: "new", missing_nodes: 0, missing_models: 0, path: Ve });
      }), ue.workflows.modified.forEach((Ve) => {
        $e.push({ name: Ve, status: "modified", missing_nodes: 0, missing_models: 0, path: Ve });
      }), ue.workflows.synced.forEach((Ve) => {
        $e.push({ name: Ve, status: "synced", missing_nodes: 0, missing_models: 0, path: Ve });
      }), $e;
    }
  }
  async function C(V) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(V)}/details`);
  }
  async function x(V) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(V)}/resolve`, {
      method: "POST"
    });
  }
  async function L(V, ue, $e) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(V)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ue, install_models: $e })
    });
  }
  async function le(V, ue, $e) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(V)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ue, importance: $e })
    });
  }
  async function ie() {
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
  async function O(V, ue) {
    return n(`/v2/workspace/models/${V}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ue })
    });
  }
  async function A(V, ue) {
    return n(`/v2/workspace/models/${V}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ue })
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
  async function ke() {
    return n("/v2/workspace/models/directory");
  }
  async function _e(V) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: V })
    });
  }
  async function Le(V) {
    try {
      const ue = V ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(V)}` : "/v2/comfygit/config";
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
  async function Ue(V, ue) {
    const $e = ue ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(ue)}` : "/v2/comfygit/config";
    return n($e, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function me(V, ue) {
    try {
      const $e = new URLSearchParams();
      return V && $e.append("level", V), ue && $e.append("lines", ue.toString()), n(`/v2/comfygit/debug/logs?${$e}`);
    } catch {
      return [];
    }
  }
  async function ge(V, ue) {
    try {
      const $e = new URLSearchParams();
      return V && $e.append("level", V), ue && $e.append("lines", ue.toString()), n(`/v2/workspace/debug/logs?${$e}`);
    } catch {
      return [];
    }
  }
  async function Te() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function de() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function Q(V, ue) {
    try {
      const $e = new URLSearchParams();
      return V && $e.append("level", V), ue && $e.append("lines", ue.toString()), n(`/v2/workspace/debug/orchestrator-logs?${$e}`);
    } catch {
      return [];
    }
  }
  async function Me() {
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
  async function Pe(V) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(V)}/update`, {
      method: "POST"
    });
  }
  async function Xe(V) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(V)}`, {
      method: "DELETE"
    });
  }
  async function He() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Qe(V, ue) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: V, url: ue })
    });
  }
  async function vt(V) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(V)}`, {
      method: "DELETE"
    });
  }
  async function be(V, ue, $e) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(V)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ue, push_url: $e })
    });
  }
  async function je(V) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(V)}/fetch`, {
      method: "POST"
    });
  }
  async function it(V) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(V)}/status`);
    } catch {
      return null;
    }
  }
  async function qe(V = "skip", ue = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: V,
        remove_extra_nodes: ue
      })
    });
  }
  async function ce(V, ue) {
    const $e = ue ? `/v2/comfygit/remotes/${encodeURIComponent(V)}/pull-preview?branch=${encodeURIComponent(ue)}` : `/v2/comfygit/remotes/${encodeURIComponent(V)}/pull-preview`;
    return n($e);
  }
  async function J(V, ue = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(V)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: ue.modelStrategy || "skip",
        force: ue.force || !1,
        resolutions: ue.resolutions
      })
    });
  }
  async function Z(V, ue) {
    const $e = ue ? `/v2/comfygit/remotes/${encodeURIComponent(V)}/push-preview?branch=${encodeURIComponent(ue)}` : `/v2/comfygit/remotes/${encodeURIComponent(V)}/push-preview`;
    return n($e);
  }
  async function D(V, ue = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(V)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ue.force || !1 })
    });
  }
  async function G(V, ue) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(V)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: ue })
    });
  }
  async function ne(V) {
    const ue = {
      success: 0,
      failed: []
    };
    for (const $e of V)
      try {
        await x($e), ue.success++;
      } catch (Ve) {
        ue.failed.push({
          name: $e,
          error: Ve instanceof Error ? Ve.message : "Unknown error"
        });
      }
    return ue;
  }
  async function xe(V) {
    var Ve;
    const ue = new FormData();
    if (ue.append("file", V), !((Ve = window.app) != null && Ve.api))
      throw new Error("ComfyUI API not available");
    const $e = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: ue
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!$e.ok) {
      const dt = await $e.json().catch(() => ({}));
      throw new Error(dt.error || `Preview failed: ${$e.status}`);
    }
    return $e.json();
  }
  async function Be(V) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(V)}`
    );
  }
  async function pt(V, ue, $e, Ve) {
    var xs;
    const dt = new FormData();
    if (dt.append("file", V), dt.append("name", ue), dt.append("model_strategy", $e), dt.append("torch_backend", Ve), !((xs = window.app) != null && xs.api))
      throw new Error("ComfyUI API not available");
    const Ce = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: dt
    });
    if (!Ce.ok) {
      const js = await Ce.json().catch(() => ({}));
      throw new Error(js.message || js.error || `Import failed: ${Ce.status}`);
    }
    return Ce.json();
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
  async function Ot(V, ue, $e, Ve) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: V,
        name: ue,
        model_strategy: $e,
        torch_backend: Ve
      })
    });
  }
  async function At() {
    return n("/v2/setup/status");
  }
  async function Ft(V) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function Ht() {
    return n("/v2/setup/initialize_status");
  }
  async function gt(V) {
    return n("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function Wt() {
    return n("/v2/comfygit/deploy/summary");
  }
  async function Bt() {
    return n("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function qt(V, ue) {
    return n("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: V, save_key: ue })
    });
  }
  async function ts() {
    return n("/v2/comfygit/deploy/runpod/volumes");
  }
  async function ss(V) {
    const ue = V ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(V)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return n(ue);
  }
  async function os(V) {
    return n("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function re() {
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
  async function ht(V) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(V)}/status`);
  }
  async function Mt(V) {
    return n("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: V })
    });
  }
  async function Dt(V = !1) {
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
  async function F(V) {
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
  async function Oe(V) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances`);
  }
  async function Ke(V, ue) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ue)
    });
  }
  async function lt(V, ue) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances/${encodeURIComponent(ue)}/start`, {
      method: "POST"
    });
  }
  async function It(V, ue) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances/${encodeURIComponent(ue)}/stop`, {
      method: "POST"
    });
  }
  async function Gt(V, ue) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances/${encodeURIComponent(ue)}`, {
      method: "DELETE"
    });
  }
  return {
    isLoading: t,
    error: c,
    getStatus: l,
    commit: p,
    getHistory: v,
    exportEnv: u,
    validateExport: f,
    validateDeploy: d,
    exportEnvWithForce: m,
    // Git Operations
    getBranches: w,
    getCommitDetail: _,
    checkout: k,
    createBranch: y,
    switchBranch: R,
    deleteBranch: E,
    // Environment Management
    getEnvironments: $,
    switchEnvironment: S,
    getSwitchProgress: N,
    createEnvironment: T,
    getCreateProgress: I,
    getComfyUIReleases: Y,
    deleteEnvironment: B,
    // Workflow Management
    getWorkflows: U,
    getWorkflowDetails: C,
    resolveWorkflow: x,
    installWorkflowDeps: L,
    setModelImportance: le,
    // Model Management
    getEnvironmentModels: ie,
    getWorkspaceModels: K,
    getModelDetails: ee,
    openFileLocation: q,
    addModelSource: O,
    removeModelSource: A,
    deleteModel: M,
    downloadModel: ve,
    scanWorkspaceModels: oe,
    getModelsDirectory: ke,
    setModelsDirectory: _e,
    // Settings
    getConfig: Le,
    updateConfig: Ue,
    // Debug/Logs
    getEnvironmentLogs: me,
    getWorkspaceLogs: ge,
    getEnvironmentLogPath: Te,
    getWorkspaceLogPath: de,
    getOrchestratorLogs: Q,
    getOrchestratorLogPath: Me,
    openFile: pe,
    // Node Management
    getNodes: Je,
    trackNodeAsDev: tt,
    installNode: st,
    updateNode: Pe,
    uninstallNode: Xe,
    // Git Remotes
    getRemotes: He,
    addRemote: Qe,
    removeRemote: vt,
    updateRemoteUrl: be,
    fetchRemote: je,
    getRemoteSyncStatus: it,
    // Push/Pull
    getPullPreview: ce,
    pullFromRemote: J,
    getPushPreview: Z,
    pushToRemote: D,
    validateMerge: G,
    // Environment Sync
    syncEnvironmentManually: qe,
    // Workflow Repair
    repairWorkflowModels: ne,
    // Import Operations
    previewTarballImport: xe,
    previewGitImport: rt,
    validateEnvironmentName: Be,
    executeImport: pt,
    executeGitImport: Ot,
    getImportProgress: Ct,
    // First-Time Setup
    getSetupStatus: At,
    initializeWorkspace: Ft,
    getInitializeProgress: Ht,
    validatePath: gt,
    // Deploy Operations
    getDeploySummary: Wt,
    getDataCenters: Bt,
    testRunPodConnection: qt,
    getNetworkVolumes: ts,
    getRunPodGpuTypes: ss,
    deployToRunPod: os,
    getRunPodPods: re,
    terminateRunPodPod: j,
    stopRunPodPod: Ee,
    startRunPodPod: Ze,
    getDeploymentStatus: ht,
    exportDeployPackage: Mt,
    getStoredRunPodKey: Dt,
    clearRunPodKey: xt,
    // Custom Worker Operations
    getCustomWorkers: we,
    addCustomWorker: St,
    removeCustomWorker: H,
    testWorkerConnection: F,
    scanForWorkers: he,
    getWorkerSystemInfo: Ie,
    getWorkerInstances: Oe,
    deployToWorker: Ke,
    startWorkerInstance: lt,
    stopWorkerInstance: It,
    terminateWorkerInstance: Gt
  };
}
async function ns(t, c = {}, n = 5e3) {
  const l = new AbortController(), p = setTimeout(() => l.abort(), n);
  try {
    const v = await fetch(t, {
      ...c,
      signal: l.signal
    });
    return clearTimeout(p), v;
  } catch (v) {
    throw clearTimeout(p), v.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : v;
  }
}
function so() {
  const t = h(null);
  async function c() {
    try {
      const u = await ns(
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
      const u = await ns(
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
  async function l() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const u = await ns(
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
  async function p() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await ns(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function v() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await ns(
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
    getStatus: l,
    restart: p,
    kill: v
  };
}
const Ll = { class: "base-modal-header" }, zl = {
  key: 0,
  class: "base-modal-title"
}, Ul = { class: "base-modal-body" }, Nl = {
  key: 0,
  class: "base-modal-loading"
}, Ol = {
  key: 1,
  class: "base-modal-error"
}, Al = {
  key: 0,
  class: "base-modal-footer"
}, Fl = /* @__PURE__ */ te({
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
    const n = t, l = c;
    function p() {
      n.closeOnOverlayClick && l("close");
    }
    function v(u) {
      u.key === "Escape" && n.showCloseButton && l("close");
    }
    return Ne(() => {
      document.addEventListener("keydown", v), document.body.style.overflow = "hidden";
    }), $s(() => {
      document.removeEventListener("keydown", v), document.body.style.overflow = "";
    }), (u, f) => (s(), P(et, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: p
      }, [
        e("div", {
          class: fe(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: f[1] || (f[1] = Fe(() => {
          }, ["stop"]))
        }, [
          e("div", Ll, [
            Re(u.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", zl, a(t.title), 1)) : r("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: f[0] || (f[0] = (d) => u.$emit("close"))
            }, [...f[2] || (f[2] = [
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
          e("div", Ul, [
            t.loading ? (s(), o("div", Nl, "Loading...")) : t.error ? (s(), o("div", Ol, a(t.error), 1)) : Re(u.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          u.$slots.footer ? (s(), o("div", Al, [
            Re(u.$slots, "footer", {}, void 0, !0)
          ])) : r("", !0)
        ], 2)
      ])
    ]));
  }
}), Ye = /* @__PURE__ */ se(Fl, [["__scopeId", "data-v-8dab1081"]]), Bl = ["type", "disabled"], Vl = {
  key: 0,
  class: "spinner"
}, Wl = /* @__PURE__ */ te({
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
      onClick: n[0] || (n[0] = (l) => c.$emit("click", l))
    }, [
      t.loading ? (s(), o("span", Vl)) : r("", !0),
      Re(c.$slots, "default", {}, void 0, !0)
    ], 10, Bl));
  }
}), ye = /* @__PURE__ */ se(Wl, [["__scopeId", "data-v-f3452606"]]), Gl = {
  key: 0,
  class: "base-title-count"
}, jl = /* @__PURE__ */ te({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, n) => (s(), P(Us(`h${t.level}`), {
      class: fe(["base-title", t.variant])
    }, {
      default: i(() => [
        Re(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Gl, "(" + a(t.count) + ")", 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ds = /* @__PURE__ */ se(jl, [["__scopeId", "data-v-5a01561d"]]), Kl = ["value", "disabled"], Hl = {
  key: 0,
  value: "",
  disabled: ""
}, ql = ["value"], Yl = {
  key: 0,
  class: "base-select-error"
}, Jl = /* @__PURE__ */ te({
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
    function c(l) {
      return typeof l == "string" ? l : l.value;
    }
    function n(l) {
      return typeof l == "string" ? l : l.label;
    }
    return (l, p) => (s(), o("div", {
      class: fe(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: fe(["base-select", { error: !!t.error }]),
        onChange: p[0] || (p[0] = (v) => l.$emit("update:modelValue", v.target.value))
      }, [
        t.placeholder ? (s(), o("option", Hl, a(t.placeholder), 1)) : r("", !0),
        (s(!0), o(W, null, ae(t.options, (v) => (s(), o("option", {
          key: c(v),
          value: c(v)
        }, a(n(v)), 9, ql))), 128))
      ], 42, Kl),
      t.error ? (s(), o("span", Yl, a(t.error), 1)) : r("", !0)
    ], 2));
  }
}), Xl = /* @__PURE__ */ se(Jl, [["__scopeId", "data-v-7436d745"]]), Ql = { class: "popover-header" }, Zl = { class: "popover-title" }, ei = { class: "popover-content" }, ti = {
  key: 0,
  class: "popover-actions"
}, si = /* @__PURE__ */ te({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (s(), P(et, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (l) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: zt({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = Fe(() => {
          }, ["stop"]))
        }, [
          e("div", Ql, [
            e("h4", Zl, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (l) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", ei, [
            Re(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (s(), o("div", ti, [
            Re(c.$slots, "actions", {}, void 0, !0)
          ])) : r("", !0)
        ], 4)
      ])) : r("", !0)
    ]));
  }
}), $t = /* @__PURE__ */ se(si, [["__scopeId", "data-v-42815ace"]]), oi = { class: "detail-section" }, ni = {
  key: 0,
  class: "empty-message"
}, ai = { class: "model-header" }, li = { class: "model-name" }, ii = { class: "model-details" }, ri = { class: "model-row" }, di = { class: "model-row" }, ci = { class: "label" }, ui = {
  key: 0,
  class: "model-row model-row-nodes"
}, mi = { class: "node-list" }, vi = ["onClick"], fi = {
  key: 1,
  class: "model-row"
}, pi = { class: "value" }, gi = {
  key: 2,
  class: "model-row"
}, hi = { class: "value error" }, yi = {
  key: 0,
  class: "model-actions"
}, wi = { class: "detail-section" }, ki = {
  key: 0,
  class: "empty-message"
}, bi = { class: "node-name" }, _i = {
  key: 0,
  class: "node-version"
}, $i = /* @__PURE__ */ te({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, l = c, { getWorkflowDetails: p, setModelImportance: v, openFileLocation: u } = We(), f = h(null), d = h(!1), m = h(null), w = h(!1), _ = h({}), k = h(!1), y = h(/* @__PURE__ */ new Set()), R = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function E(C) {
      switch (C) {
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
    function $(C) {
      switch (C) {
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
    function S(C) {
      if (!C.loaded_by || C.loaded_by.length === 0) return [];
      const x = C.hash || C.filename;
      return y.value.has(x) ? C.loaded_by : C.loaded_by.slice(0, 3);
    }
    function N(C) {
      return y.value.has(C);
    }
    function T(C) {
      y.value.has(C) ? y.value.delete(C) : y.value.add(C), y.value = new Set(y.value);
    }
    async function I() {
      d.value = !0, m.value = null;
      try {
        f.value = await p(n.workflowName);
      } catch (C) {
        m.value = C instanceof Error ? C.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function Y(C, x) {
      _.value[C] = x, w.value = !0;
    }
    async function B(C) {
      try {
        await u(C);
      } catch (x) {
        m.value = x instanceof Error ? x.message : "Failed to open file location";
      }
    }
    async function U() {
      if (!w.value) {
        l("close");
        return;
      }
      d.value = !0, m.value = null;
      try {
        for (const [C, x] of Object.entries(_.value))
          await v(n.workflowName, C, x);
        l("refresh"), l("close");
      } catch (C) {
        m.value = C instanceof Error ? C.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return Ne(I), (C, x) => (s(), o(W, null, [
      b(Ye, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: d.value,
        error: m.value || void 0,
        onClose: x[4] || (x[4] = (L) => l("close"))
      }, {
        body: i(() => [
          f.value ? (s(), o(W, { key: 0 }, [
            e("section", oi, [
              b(ds, { variant: "section" }, {
                default: i(() => [
                  g("MODELS USED (" + a(f.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              f.value.models.length === 0 ? (s(), o("div", ni, " No models used in this workflow ")) : r("", !0),
              (s(!0), o(W, null, ae(f.value.models, (L) => {
                var le;
                return s(), o("div", {
                  key: L.hash || L.filename,
                  class: "model-card"
                }, [
                  e("div", ai, [
                    x[6] || (x[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", li, a(L.filename), 1)
                  ]),
                  e("div", ii, [
                    e("div", ri, [
                      x[7] || (x[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: fe(["value", E(L.status)])
                      }, a($(L.status)), 3)
                    ]),
                    e("div", di, [
                      e("span", ci, [
                        x[8] || (x[8] = g(" Importance: ", -1)),
                        b(eo, {
                          size: 14,
                          title: "About importance levels",
                          onClick: x[0] || (x[0] = (ie) => k.value = !0)
                        })
                      ]),
                      b(Xl, {
                        "model-value": _.value[L.filename] || L.importance,
                        options: R,
                        "onUpdate:modelValue": (ie) => Y(L.filename, ie)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    L.loaded_by && L.loaded_by.length > 0 ? (s(), o("div", ui, [
                      x[9] || (x[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", mi, [
                        (s(!0), o(W, null, ae(S(L), (ie, K) => (s(), o("div", {
                          key: `${ie.node_id}-${K}`,
                          class: "node-reference"
                        }, a(ie.node_type) + " (Node #" + a(ie.node_id) + ") ", 1))), 128)),
                        L.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (ie) => T(L.hash || L.filename)
                        }, a(N(L.hash || L.filename) ? "▼ Show less" : `▶ View all (${L.loaded_by.length})`), 9, vi)) : r("", !0)
                      ])
                    ])) : r("", !0),
                    L.size_mb ? (s(), o("div", fi, [
                      x[10] || (x[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", pi, a(L.size_mb) + " MB", 1)
                    ])) : r("", !0),
                    L.has_category_mismatch ? (s(), o("div", gi, [
                      x[13] || (x[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", hi, [
                        x[11] || (x[11] = g(" In ", -1)),
                        e("code", null, a(L.actual_category) + "/", 1),
                        x[12] || (x[12] = g(" but loader needs ", -1)),
                        e("code", null, a((le = L.expected_categories) == null ? void 0 : le[0]) + "/", 1)
                      ])
                    ])) : r("", !0)
                  ]),
                  L.status !== "available" ? (s(), o("div", yi, [
                    L.status === "downloadable" ? (s(), P(ye, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: x[1] || (x[1] = (ie) => l("resolve"))
                    }, {
                      default: i(() => [...x[14] || (x[14] = [
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    })) : L.status === "category_mismatch" && L.file_path ? (s(), P(ye, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => B(L.file_path)
                    }, {
                      default: i(() => [...x[15] || (x[15] = [
                        g(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : L.status !== "path_mismatch" ? (s(), P(ye, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: x[2] || (x[2] = (ie) => l("resolve"))
                    }, {
                      default: i(() => [...x[16] || (x[16] = [
                        g(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : r("", !0)
                  ])) : r("", !0)
                ]);
              }), 128))
            ]),
            e("section", wi, [
              b(ds, { variant: "section" }, {
                default: i(() => [
                  g("NODES USED (" + a(f.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              f.value.nodes.length === 0 ? (s(), o("div", ki, " No custom nodes used in this workflow ")) : r("", !0),
              (s(!0), o(W, null, ae(f.value.nodes, (L) => (s(), o("div", {
                key: L.name,
                class: "node-item"
              }, [
                e("span", {
                  class: fe(["node-status", L.status === "installed" ? "installed" : "missing"])
                }, a(L.status === "installed" ? "✓" : "✕"), 3),
                e("span", bi, a(L.name), 1),
                L.version ? (s(), o("span", _i, "v" + a(L.version), 1)) : r("", !0)
              ]))), 128))
            ])
          ], 64)) : r("", !0)
        ]),
        footer: i(() => [
          b(ye, {
            variant: "secondary",
            onClick: x[3] || (x[3] = (L) => l("close"))
          }, {
            default: i(() => [...x[17] || (x[17] = [
              g(" Close ", -1)
            ])]),
            _: 1
          }),
          w.value ? (s(), P(ye, {
            key: 0,
            variant: "primary",
            onClick: U
          }, {
            default: i(() => [...x[18] || (x[18] = [
              g(" Save Changes ", -1)
            ])]),
            _: 1
          })) : r("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      b($t, {
        show: k.value,
        title: "Model Importance Levels",
        onClose: x[5] || (x[5] = (L) => k.value = !1)
      }, {
        content: i(() => [...x[19] || (x[19] = [
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
}), Ci = /* @__PURE__ */ se($i, [["__scopeId", "data-v-668728e6"]]), ze = ms({
  items: [],
  status: "idle"
});
let Pt = null;
function oo() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Ss(t) {
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
    await xi(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    ze.status = "idle", Qt();
  }
}
async function xi(t) {
  return new Promise((c, n) => {
    Pt && (Pt.close(), Pt = null);
    const l = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), p = new EventSource(`/v2/comfygit/models/download-stream?${l}`);
    Pt = p;
    let v = Date.now(), u = 0, f = !1;
    p.onmessage = (d) => {
      try {
        const m = JSON.parse(d.data);
        switch (m.type) {
          case "progress":
            t.downloaded = m.downloaded || 0, t.size = m.total || t.size;
            const w = Date.now(), _ = (w - v) / 1e3;
            if (_ > 0.5) {
              const k = t.downloaded - u;
              if (t.speed = k / _, v = w, u = t.downloaded, t.speed > 0 && t.size > 0) {
                const y = t.size - t.downloaded;
                t.eta = y / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            f = !0, p.close(), Pt = null, c();
            break;
          case "error":
            f = !0, p.close(), Pt = null, n(new Error(m.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, p.onerror = () => {
      p.close(), Pt = null, f || n(new Error("Connection lost"));
    };
  });
}
async function Si() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const c = await t.json();
    if (!c.pending_downloads || c.pending_downloads.length === 0) return;
    for (const n of c.pending_downloads) {
      if (ze.items.some((p) => p.url === n.url && p.filename === n.filename))
        continue;
      const l = {
        id: oo(),
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
      ze.items.push(l);
    }
    console.log(`[ComfyGit] Loaded ${c.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function vs() {
  function t($) {
    for (const S of $) {
      if (ze.items.some(
        (I) => I.url === S.url && I.targetPath === S.targetPath && ["queued", "downloading", "paused", "completed"].includes(I.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${S.filename}`);
        continue;
      }
      const T = {
        id: oo(),
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
      ze.items.push(T);
    }
    ze.status === "idle" && Qt();
  }
  async function c($) {
    const S = Ss($);
    if (S) {
      if (S.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(S.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Pt && (Pt.close(), Pt = null), S.status = "failed", S.error = "Cancelled by user", ze.status = "idle", Qt();
      } else if (S.status === "queued") {
        const N = ze.items.findIndex((T) => T.id === $);
        N >= 0 && ze.items.splice(N, 1);
      }
    }
  }
  function n($) {
    const S = Ss($);
    !S || S.status !== "failed" || (S.status = "queued", S.error = void 0, S.progress = 0, S.downloaded = 0, ze.status === "idle" && Qt());
  }
  function l($) {
    const S = Ss($);
    !S || S.status !== "paused" || (S.status = "queued", ze.status === "idle" && Qt());
  }
  function p() {
    const $ = ze.items.filter((S) => S.status === "paused");
    for (const S of $)
      S.status = "queued";
    ze.status === "idle" && Qt();
  }
  function v($) {
    const S = ze.items.findIndex((N) => N.id === $);
    S >= 0 && ["completed", "failed", "paused"].includes(ze.items[S].status) && ze.items.splice(S, 1);
  }
  function u() {
    ze.items = ze.items.filter(($) => $.status !== "completed");
  }
  function f() {
    ze.items = ze.items.filter(($) => $.status !== "failed");
  }
  const d = z(
    () => ze.items.find(($) => $.status === "downloading")
  ), m = z(
    () => ze.items.filter(($) => $.status === "queued")
  ), w = z(
    () => ze.items.filter(($) => $.status === "completed")
  ), _ = z(
    () => ze.items.filter(($) => $.status === "failed")
  ), k = z(
    () => ze.items.filter(($) => $.status === "paused")
  ), y = z(() => ze.items.length > 0), R = z(
    () => ze.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), E = z(
    () => ze.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Eo(ze),
    // Computed
    currentDownload: d,
    queuedItems: m,
    completedItems: w,
    failedItems: _,
    pausedItems: k,
    hasItems: y,
    activeCount: R,
    hasPaused: E,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: l,
    resumeAllPaused: p,
    removeItem: v,
    clearCompleted: u,
    clearFailed: f,
    loadPendingDownloads: Si
  };
}
function no() {
  const t = h(null), c = h(null), n = h([]), l = h([]), p = h(!1), v = h(null);
  async function u(N, T) {
    var Y;
    if (!((Y = window.app) != null && Y.api))
      throw new Error("ComfyUI API not available");
    const I = await window.app.api.fetchApi(N, T);
    if (!I.ok) {
      const B = await I.json().catch(() => ({})), U = B.error || B.message || `Request failed: ${I.status}`;
      throw new Error(U);
    }
    return I.json();
  }
  async function f(N) {
    p.value = !0, v.value = null;
    try {
      let T;
      return Xt() || (T = await u(
        `/v2/comfygit/workflow/${N}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = T, T;
    } catch (T) {
      const I = T instanceof Error ? T.message : "Unknown error occurred";
      throw v.value = I, T;
    } finally {
      p.value = !1;
    }
  }
  async function d(N, T, I, Y) {
    p.value = !0, v.value = null;
    try {
      let B;
      if (!Xt()) {
        const U = Object.fromEntries(T), C = Object.fromEntries(I), x = Y ? Array.from(Y) : [];
        B = await u(
          `/v2/comfygit/workflow/${N}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: U,
              model_choices: C,
              skipped_packages: x
            })
          }
        );
      }
      return c.value = B, B;
    } catch (B) {
      const U = B instanceof Error ? B.message : "Unknown error occurred";
      throw v.value = U, B;
    } finally {
      p.value = !1;
    }
  }
  async function m(N, T = 10) {
    p.value = !0, v.value = null;
    try {
      let I;
      return Xt() || (I = await u(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: N, limit: T })
        }
      )), n.value = I.results, I.results;
    } catch (I) {
      const Y = I instanceof Error ? I.message : "Unknown error occurred";
      throw v.value = Y, I;
    } finally {
      p.value = !1;
    }
  }
  async function w(N, T = 10) {
    p.value = !0, v.value = null;
    try {
      let I;
      return Xt() || (I = await u(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: N, limit: T })
        }
      )), l.value = I.results, I.results;
    } catch (I) {
      const Y = I instanceof Error ? I.message : "Unknown error occurred";
      throw v.value = Y, I;
    } finally {
      p.value = !1;
    }
  }
  const _ = ms({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function k() {
    _.phase = "idle", _.currentFile = void 0, _.currentFileIndex = void 0, _.totalFiles = void 0, _.bytesDownloaded = void 0, _.bytesTotal = void 0, _.completedFiles = [], _.nodesToInstall = [], _.nodesInstalled = [], _.installError = void 0, _.needsRestart = void 0, _.error = void 0, _.nodeInstallProgress = void 0;
  }
  async function y(N) {
    _.phase = "installing", _.nodesInstalled = [], _.installError = void 0, _.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Xt(), await R(N);
    } catch (T) {
      const I = T instanceof Error ? T.message : "Failed to install nodes";
      throw _.installError = I, T;
    }
  }
  async function R(N) {
    var I;
    const T = await u(
      `/v2/comfygit/workflow/${N}/install`,
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
      const Y = new Map(((I = T.failed) == null ? void 0 : I.map((B) => [B.node_id, B.error])) || []);
      for (let B = 0; B < _.nodesToInstall.length; B++) {
        const U = _.nodesToInstall[B], C = Y.get(U);
        _.nodeInstallProgress.completedNodes.push({
          node_id: U,
          success: !C,
          error: C
        });
      }
    }
    return _.nodesInstalled = T.nodes_installed, _.needsRestart = T.nodes_installed.length > 0, T.failed && T.failed.length > 0 && (_.installError = `${T.failed.length} package(s) failed to install`), T;
  }
  async function E(N, T, I) {
    k(), _.phase = "resolving", v.value = null;
    const Y = Object.fromEntries(T), B = Object.fromEntries(I);
    try {
      const U = await fetch(`/v2/comfygit/workflow/${N}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: Y,
          model_choices: B
        })
      });
      if (!U.ok)
        throw new Error(`Request failed: ${U.status}`);
      if (!U.body)
        throw new Error("No response body");
      const C = U.body.getReader(), x = new TextDecoder();
      let L = "";
      for (; ; ) {
        const { done: le, value: ie } = await C.read();
        if (le) break;
        L += x.decode(ie, { stream: !0 });
        const K = L.split(`

`);
        L = K.pop() || "";
        for (const ee of K) {
          if (!ee.trim()) continue;
          const q = ee.split(`
`);
          let O = "", A = "";
          for (const M of q)
            M.startsWith("event: ") ? O = M.slice(7) : M.startsWith("data: ") && (A = M.slice(6));
          if (A)
            try {
              const M = JSON.parse(A);
              $(O, M);
            } catch (M) {
              console.warn("Failed to parse SSE event:", M);
            }
        }
      }
    } catch (U) {
      const C = U instanceof Error ? U.message : "Unknown error occurred";
      throw v.value = C, _.error = C, _.phase = "error", U;
    }
  }
  function $(N, T) {
    switch (N) {
      case "batch_start":
        _.phase = "downloading", _.totalFiles = T.total;
        break;
      case "file_start":
        _.currentFile = T.filename, _.currentFileIndex = T.index, _.bytesDownloaded = 0, _.bytesTotal = void 0;
        break;
      case "file_progress":
        _.bytesDownloaded = T.downloaded, _.bytesTotal = T.total;
        break;
      case "file_complete":
        _.completedFiles.push({
          filename: T.filename,
          success: T.success,
          error: T.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        _.nodesToInstall = T.nodes_to_install || [], T.download_results && (_.completedFiles = T.download_results), _.phase = "complete";
        break;
      case "error":
        _.error = T.message, _.phase = "error", v.value = T.message;
        break;
    }
  }
  function S(N, T) {
    const { addToQueue: I } = vs(), Y = T.filter((B) => B.url && B.target_path).map((B) => ({
      workflow: N,
      filename: B.filename,
      url: B.url,
      targetPath: B.target_path,
      size: B.size || 0,
      type: "model"
    }));
    return Y.length > 0 && I(Y), Y.length;
  }
  return {
    // State
    result: t,
    appliedResult: c,
    searchResults: n,
    modelSearchResults: l,
    isLoading: p,
    error: v,
    progress: _,
    // Methods
    analyzeWorkflow: f,
    applyResolution: d,
    applyResolutionWithProgress: E,
    installNodes: y,
    searchNodes: m,
    searchModels: w,
    resetProgress: k,
    queueModelDownloads: S
  };
}
const Ii = { class: "resolution-stepper" }, Ei = { class: "stepper-header" }, Pi = ["onClick"], Ri = {
  key: 0,
  class: "step-icon"
}, Ti = {
  key: 1,
  class: "step-number"
}, Mi = { class: "step-label" }, Di = {
  key: 0,
  class: "step-connector"
}, Li = { class: "stepper-content" }, zi = /* @__PURE__ */ te({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: c }) {
    const n = t, l = c;
    function p(m) {
      var w;
      if ((w = n.stepStats) != null && w[m]) {
        const _ = n.stepStats[m];
        return _.total > 0 && _.resolved === _.total;
      }
      return n.completedSteps.includes(m);
    }
    function v(m) {
      var w;
      if ((w = n.stepStats) != null && w[m]) {
        const _ = n.stepStats[m];
        return _.resolved > 0 && _.resolved < _.total;
      }
      return !1;
    }
    function u(m) {
      return p(m) ? "state-complete" : v(m) ? "state-partial" : "state-pending";
    }
    function f(m) {
      return !1;
    }
    function d(m) {
      l("step-change", m);
    }
    return (m, w) => (s(), o("div", Ii, [
      e("div", Ei, [
        (s(!0), o(W, null, ae(t.steps, (_, k) => (s(), o("div", {
          key: _.id,
          class: fe(["step", {
            active: t.currentStep === _.id,
            completed: p(_.id),
            "in-progress": v(_.id),
            disabled: f(_.id)
          }]),
          onClick: (y) => d(_.id)
        }, [
          e("div", {
            class: fe(["step-indicator", u(_.id)])
          }, [
            p(_.id) ? (s(), o("span", Ri, "✓")) : (s(), o("span", Ti, a(k + 1), 1))
          ], 2),
          e("div", Mi, a(_.label), 1),
          k < t.steps.length - 1 ? (s(), o("div", Di)) : r("", !0)
        ], 10, Pi))), 128))
      ]),
      e("div", Li, [
        Re(m.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Ui = /* @__PURE__ */ se(zi, [["__scopeId", "data-v-2a7b3af8"]]), Ni = /* @__PURE__ */ te({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = z(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), l = z(() => `confidence-${n.value}`), p = z(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (v, u) => (s(), o("span", {
      class: fe(["confidence-badge", l.value, t.size])
    }, a(p.value), 3));
  }
}), bs = /* @__PURE__ */ se(Ni, [["__scopeId", "data-v-17ec4b80"]]), Oi = { class: "node-info" }, Ai = { class: "node-info-text" }, Fi = { class: "item-body" }, Bi = {
  key: 0,
  class: "resolved-state"
}, Vi = {
  key: 1,
  class: "multiple-options"
}, Wi = { class: "options-list" }, Gi = ["onClick"], ji = ["name", "value", "checked", "onChange"], Ki = { class: "option-content" }, Hi = { class: "option-header" }, qi = { class: "option-package-id" }, Yi = {
  key: 0,
  class: "option-title"
}, Ji = { class: "option-meta" }, Xi = {
  key: 0,
  class: "installed-badge"
}, Qi = { class: "action-buttons" }, Zi = {
  key: 2,
  class: "unresolved"
}, er = {
  key: 0,
  class: "searching-state"
}, tr = { class: "options-list" }, sr = ["onClick"], or = ["name", "value"], nr = { class: "option-content" }, ar = { class: "option-header" }, lr = { class: "option-package-id" }, ir = {
  key: 0,
  class: "option-description"
}, rr = { class: "option-meta" }, dr = {
  key: 0,
  class: "installed-badge"
}, cr = {
  key: 2,
  class: "unresolved-message"
}, ur = { class: "action-buttons" }, mr = /* @__PURE__ */ te({
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
    const n = t, l = c;
    function p(d, m = 80) {
      return d.length <= m ? d : d.slice(0, m - 3) + "...";
    }
    const v = z(() => !!n.choice);
    z(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.action;
    }), z(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.package_id;
    });
    const u = z(() => {
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
    function f(d) {
      l("option-selected", d);
    }
    return (d, m) => (s(), o("div", {
      class: fe(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: v.value }])
    }, [
      e("div", Oi, [
        e("span", Ai, [
          m[7] || (m[7] = g("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: fe(["status-badge", u.value])
        }, a(t.statusLabel), 3)) : r("", !0)
      ]),
      e("div", Fi, [
        v.value ? (s(), o("div", Bi, [
          b(ye, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (w) => l("clear-choice"))
          }, {
            default: i(() => [...m[8] || (m[8] = [
              g(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Vi, [
          m[12] || (m[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Wi, [
            (s(!0), o(W, null, ae(t.options, (w, _) => (s(), o("label", {
              key: w.package_id,
              class: fe(["option-card", { selected: t.selectedOptionIndex === _ }]),
              onClick: (k) => f(_)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: _,
                checked: t.selectedOptionIndex === _,
                onChange: (k) => f(_)
              }, null, 40, ji),
              e("div", Ki, [
                e("div", Hi, [
                  e("span", qi, a(w.package_id), 1),
                  b(bs, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                w.title && w.title !== w.package_id ? (s(), o("div", Yi, a(w.title), 1)) : r("", !0),
                e("div", Ji, [
                  w.is_installed ? (s(), o("span", Xi, "Already Installed")) : r("", !0)
                ])
              ])
            ], 10, Gi))), 128))
          ]),
          e("div", Qi, [
            b(ye, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (w) => l("search"))
            }, {
              default: i(() => [...m[9] || (m[9] = [
                g(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            b(ye, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (w) => l("manual-entry"))
            }, {
              default: i(() => [...m[10] || (m[10] = [
                g(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(ye, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (w) => l("mark-optional"))
            }, {
              default: i(() => [...m[11] || (m[11] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Zi, [
          t.isSearching ? (s(), o("div", er, [...m[13] || (m[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(W, { key: 1 }, [
            m[14] || (m[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", tr, [
              (s(!0), o(W, null, ae(t.searchResults.slice(0, 5), (w, _) => (s(), o("label", {
                key: w.package_id,
                class: "option-card",
                onClick: (k) => l("search-result-selected", w)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: _
                }, null, 8, or),
                e("div", nr, [
                  e("div", ar, [
                    e("span", lr, a(w.package_id), 1),
                    b(bs, {
                      confidence: w.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  w.description ? (s(), o("div", ir, a(p(w.description)), 1)) : r("", !0),
                  e("div", rr, [
                    w.is_installed ? (s(), o("span", dr, "Already Installed")) : r("", !0)
                  ])
                ])
              ], 8, sr))), 128))
            ])
          ], 64)) : (s(), o("div", cr, [...m[15] || (m[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", ur, [
            b(ye, {
              variant: "secondary",
              size: "sm",
              onClick: m[4] || (m[4] = (w) => l("search"))
            }, {
              default: i(() => {
                var w;
                return [
                  g(a((w = t.searchResults) != null && w.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            b(ye, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (w) => l("manual-entry"))
            }, {
              default: i(() => [...m[16] || (m[16] = [
                g(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(ye, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (w) => l("mark-optional"))
            }, {
              default: i(() => [...m[17] || (m[17] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), vr = /* @__PURE__ */ se(mr, [["__scopeId", "data-v-c2997d1d"]]), fr = { class: "item-navigator" }, pr = { class: "nav-item-info" }, gr = ["title"], hr = { class: "nav-controls" }, yr = { class: "nav-arrows" }, wr = ["disabled"], kr = ["disabled"], br = { class: "nav-position" }, _r = /* @__PURE__ */ te({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const n = c;
    return (l, p) => (s(), o("div", fr, [
      e("div", pr, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, gr)
      ]),
      e("div", hr, [
        e("div", yr, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: p[0] || (p[0] = (v) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, wr),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: p[1] || (p[1] = (v) => n("next")),
            title: "Next item"
          }, " → ", 8, kr)
        ]),
        e("span", br, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), ao = /* @__PURE__ */ se(_r, [["__scopeId", "data-v-74af7920"]]), $r = ["type", "value", "placeholder", "disabled"], Cr = {
  key: 0,
  class: "base-input-error"
}, xr = /* @__PURE__ */ te({
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
        onInput: n[0] || (n[0] = (l) => c.$emit("update:modelValue", l.target.value)),
        onKeyup: [
          n[1] || (n[1] = Tt((l) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = Tt((l) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, $r),
      t.error ? (s(), o("span", Cr, a(t.error), 1)) : r("", !0)
    ], 2));
  }
}), bt = /* @__PURE__ */ se(xr, [["__scopeId", "data-v-9ba02cdc"]]), Sr = { class: "node-resolution-step" }, Ir = {
  key: 0,
  class: "auto-resolved-section"
}, Er = { class: "section-header" }, Pr = { class: "stat-badge" }, Rr = { class: "resolved-packages-list" }, Tr = { class: "package-info" }, Mr = { class: "package-id" }, Dr = { class: "node-count" }, Lr = { class: "package-actions" }, zr = {
  key: 0,
  class: "status-badge install"
}, Ur = {
  key: 1,
  class: "status-badge skip"
}, Nr = ["onClick"], Or = {
  key: 1,
  class: "section-divider"
}, Ar = { class: "step-header" }, Fr = { class: "stat-badge" }, Br = {
  key: 1,
  class: "step-body"
}, Vr = {
  key: 3,
  class: "empty-state"
}, Wr = { class: "node-modal-body" }, Gr = { class: "node-search-results-container" }, jr = {
  key: 0,
  class: "node-search-results"
}, Kr = ["onClick"], Hr = { class: "node-result-header" }, qr = { class: "node-result-package-id" }, Yr = {
  key: 0,
  class: "node-result-description"
}, Jr = {
  key: 1,
  class: "node-empty-state"
}, Xr = {
  key: 2,
  class: "node-empty-state"
}, Qr = {
  key: 3,
  class: "node-empty-state"
}, Zr = { class: "node-manual-entry-modal" }, ed = { class: "node-modal-body" }, td = { class: "node-modal-actions" }, sd = /* @__PURE__ */ te({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: c }) {
    const n = t, l = c, { searchNodes: p } = no(), v = h(0), u = h(!1), f = h(!1), d = h(""), m = h(""), w = h([]), _ = h(!1), k = h(/* @__PURE__ */ new Map()), y = h(/* @__PURE__ */ new Set()), R = h(!1);
    function E() {
      R.value && A(), R.value = !1;
    }
    const $ = z(() => n.nodes[v.value]), S = z(() => n.nodes.filter((me) => n.nodeChoices.has(me.node_type)).length), N = z(() => $.value ? k.value.get($.value.node_type) || [] : []), T = z(() => $.value ? y.value.has($.value.node_type) : !1);
    mt($, async (me) => {
      var ge;
      me && ((ge = me.options) != null && ge.length || k.value.has(me.node_type) || y.value.has(me.node_type) || n.nodeChoices.has(me.node_type) || await I(me.node_type));
    }, { immediate: !0 });
    async function I(me) {
      y.value.add(me);
      try {
        const ge = await p(me, 5);
        k.value.set(me, ge);
      } catch {
        k.value.set(me, []);
      } finally {
        y.value.delete(me);
      }
    }
    const Y = z(() => n.autoResolvedPackages.filter((me) => !n.skippedPackages.has(me.package_id)).length);
    function B(me) {
      return n.skippedPackages.has(me);
    }
    function U(me) {
      l("package-skip", me);
    }
    const C = z(() => {
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
    }), x = z(() => {
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
    function L(me) {
      me >= 0 && me < n.nodes.length && (v.value = me);
    }
    function le() {
      $.value && l("mark-optional", $.value.node_type);
    }
    function ie() {
      $.value && l("skip", $.value.node_type);
    }
    function K(me) {
      $.value && l("option-selected", $.value.node_type, me);
    }
    function ee() {
      $.value && l("clear-choice", $.value.node_type);
    }
    function q() {
      $.value && (d.value = $.value.node_type, w.value = N.value, u.value = !0, ke(d.value));
    }
    function O() {
      m.value = "", f.value = !0;
    }
    function A() {
      u.value = !1, d.value = "", w.value = [];
    }
    function M() {
      f.value = !1, m.value = "";
    }
    let ve = null;
    function oe() {
      ve && clearTimeout(ve), ve = setTimeout(() => {
        ke(d.value);
      }, 300);
    }
    async function ke(me) {
      if (!me.trim()) {
        w.value = [];
        return;
      }
      _.value = !0;
      try {
        w.value = await p(me, 10);
      } catch {
        w.value = [];
      } finally {
        _.value = !1;
      }
    }
    function _e(me) {
      $.value && (l("manual-entry", $.value.node_type, me.package_id), A());
    }
    function Le(me) {
      $.value && l("manual-entry", $.value.node_type, me.package_id);
    }
    function Ue() {
      !$.value || !m.value.trim() || (l("manual-entry", $.value.node_type, m.value.trim()), M());
    }
    return (me, ge) => {
      var Te, de;
      return s(), o("div", Sr, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", Ir, [
          e("div", Er, [
            ge[6] || (ge[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", Pr, a(Y.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", Rr, [
            (s(!0), o(W, null, ae(t.autoResolvedPackages, (Q) => (s(), o("div", {
              key: Q.package_id,
              class: "resolved-package-item"
            }, [
              e("div", Tr, [
                e("code", Mr, a(Q.package_id), 1),
                e("span", Dr, a(Q.node_types_count) + " node type" + a(Q.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", Lr, [
                B(Q.package_id) ? (s(), o("span", Ur, " SKIPPED ")) : (s(), o("span", zr, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (Me) => U(Q.package_id)
                }, a(B(Q.package_id) ? "Include" : "Skip"), 9, Nr)
              ])
            ]))), 128))
          ])
        ])) : r("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", Or)) : r("", !0),
        t.nodes.length > 0 ? (s(), o(W, { key: 2 }, [
          e("div", Ar, [
            ge[7] || (ge[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", Fr, a(S.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          $.value ? (s(), P(ao, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": v.value,
            "total-items": t.nodes.length,
            onPrev: ge[0] || (ge[0] = (Q) => L(v.value - 1)),
            onNext: ge[1] || (ge[1] = (Q) => L(v.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
          $.value ? (s(), o("div", Br, [
            b(vr, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((Te = $.value.options) != null && Te.length),
              options: $.value.options,
              choice: (de = t.nodeChoices) == null ? void 0 : de.get($.value.node_type),
              status: C.value,
              "status-label": x.value,
              "search-results": N.value,
              "is-searching": T.value,
              onMarkOptional: le,
              onSkip: ie,
              onManualEntry: O,
              onSearch: q,
              onOptionSelected: K,
              onClearChoice: ee,
              onSearchResultSelected: Le
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : r("", !0)
        ], 64)) : r("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", Vr, [...ge[8] || (ge[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : r("", !0),
        (s(), P(et, { to: "body" }, [
          u.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ge[4] || (ge[4] = Fe((Q) => R.value = !0, ["self"])),
            onMouseup: Fe(E, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: ge[3] || (ge[3] = (Q) => R.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                ge[9] || (ge[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: A
                }, "✕")
              ]),
              e("div", Wr, [
                b(bt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": ge[2] || (ge[2] = (Q) => d.value = Q),
                  placeholder: "Search by node type, package name...",
                  onInput: oe
                }, null, 8, ["modelValue"]),
                e("div", Gr, [
                  w.value.length > 0 ? (s(), o("div", jr, [
                    (s(!0), o(W, null, ae(w.value, (Q) => (s(), o("div", {
                      key: Q.package_id,
                      class: "node-search-result-item",
                      onClick: (Me) => _e(Q)
                    }, [
                      e("div", Hr, [
                        e("code", qr, a(Q.package_id), 1),
                        Q.match_confidence ? (s(), P(bs, {
                          key: 0,
                          confidence: Q.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : r("", !0)
                      ]),
                      Q.description ? (s(), o("div", Yr, a(Q.description), 1)) : r("", !0)
                    ], 8, Kr))), 128))
                  ])) : _.value ? (s(), o("div", Jr, "Searching...")) : d.value ? (s(), o("div", Xr, 'No packages found matching "' + a(d.value) + '"', 1)) : (s(), o("div", Qr, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : r("", !0)
        ])),
        (s(), P(et, { to: "body" }, [
          f.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Fe(M, ["self"])
          }, [
            e("div", Zr, [
              e("div", { class: "node-modal-header" }, [
                ge[10] || (ge[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: M
                }, "✕")
              ]),
              e("div", ed, [
                b(bt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": ge[5] || (ge[5] = (Q) => m.value = Q),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", td, [
                  b(ye, {
                    variant: "secondary",
                    onClick: M
                  }, {
                    default: i(() => [...ge[11] || (ge[11] = [
                      g("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(ye, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: Ue
                  }, {
                    default: i(() => [...ge[12] || (ge[12] = [
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
}), od = /* @__PURE__ */ se(sd, [["__scopeId", "data-v-281581bc"]]), nd = { class: "node-info" }, ad = { class: "node-info-text" }, ld = { class: "item-body" }, id = {
  key: 0,
  class: "resolved-state"
}, rd = {
  key: 1,
  class: "multiple-options"
}, dd = { class: "options-list" }, cd = ["onClick"], ud = ["name", "value", "checked", "onChange"], md = { class: "option-content" }, vd = { class: "option-header" }, fd = { class: "option-filename" }, pd = { class: "option-meta" }, gd = { class: "option-size" }, hd = { class: "option-category" }, yd = { class: "option-path" }, wd = { class: "action-buttons" }, kd = {
  key: 2,
  class: "unresolved"
}, bd = { class: "action-buttons" }, _d = /* @__PURE__ */ te({
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
    const n = t, l = c, p = z(() => !!n.choice);
    z(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.action;
    }), z(() => {
      var d, m;
      return ((m = (d = n.choice) == null ? void 0 : d.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const v = z(() => {
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
      l("option-selected", d);
    }
    function f(d) {
      if (!d) return "Unknown";
      const m = d / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, m) => (s(), o("div", {
      class: fe(["model-resolution-item", { resolved: p.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", nd, [
        e("span", ad, [
          m[7] || (m[7] = g("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: fe(["status-badge", v.value])
        }, a(t.statusLabel), 3)) : r("", !0)
      ]),
      e("div", ld, [
        p.value ? (s(), o("div", id, [
          b(ye, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (w) => l("clear-choice"))
          }, {
            default: i(() => [...m[8] || (m[8] = [
              g(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", rd, [
          m[12] || (m[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", dd, [
            (s(!0), o(W, null, ae(t.options, (w, _) => (s(), o("label", {
              key: w.model.hash,
              class: fe(["option-card", { selected: t.selectedOptionIndex === _ }]),
              onClick: (k) => u(_)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: _,
                checked: t.selectedOptionIndex === _,
                onChange: (k) => u(_)
              }, null, 40, ud),
              e("div", md, [
                e("div", vd, [
                  e("span", fd, a(w.model.filename), 1),
                  b(bs, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", pd, [
                  e("span", gd, a(f(w.model.size)), 1),
                  e("span", hd, a(w.model.category), 1)
                ]),
                e("div", yd, a(w.model.relative_path), 1)
              ])
            ], 10, cd))), 128))
          ]),
          e("div", wd, [
            b(ye, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (w) => l("search"))
            }, {
              default: i(() => [...m[9] || (m[9] = [
                g(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(ye, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (w) => l("download-url"))
            }, {
              default: i(() => [...m[10] || (m[10] = [
                g(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(ye, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (w) => l("mark-optional"))
            }, {
              default: i(() => [...m[11] || (m[11] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", kd, [
          m[16] || (m[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", bd, [
            b(ye, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (w) => l("search"))
            }, {
              default: i(() => [...m[13] || (m[13] = [
                g(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(ye, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (w) => l("download-url"))
            }, {
              default: i(() => [...m[14] || (m[14] = [
                g(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(ye, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (w) => l("mark-optional"))
            }, {
              default: i(() => [...m[15] || (m[15] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), $d = /* @__PURE__ */ se(_d, [["__scopeId", "data-v-8a82fefa"]]), Cd = { class: "model-resolution-step" }, xd = { class: "step-header" }, Sd = { class: "step-info" }, Id = { class: "step-title" }, Ed = { class: "step-description" }, Pd = { class: "stat-badge" }, Rd = {
  key: 1,
  class: "step-body"
}, Td = {
  key: 2,
  class: "empty-state"
}, Md = { class: "model-search-modal" }, Dd = { class: "model-modal-body" }, Ld = {
  key: 0,
  class: "model-search-results"
}, zd = ["onClick"], Ud = { class: "model-result-header" }, Nd = { class: "model-result-filename" }, Od = { class: "model-result-meta" }, Ad = { class: "model-result-category" }, Fd = { class: "model-result-size" }, Bd = {
  key: 0,
  class: "model-result-path"
}, Vd = {
  key: 1,
  class: "model-no-results"
}, Wd = {
  key: 2,
  class: "model-searching"
}, Gd = { class: "model-download-url-modal" }, jd = { class: "model-modal-body" }, Kd = { class: "model-input-group" }, Hd = { class: "model-input-group" }, qd = { class: "model-modal-actions" }, Yd = /* @__PURE__ */ te({
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
    function l(A) {
      var M;
      return A && ((M = n[A]) == null ? void 0 : M[0]) || null;
    }
    const p = t, v = c, u = h(0), f = h(!1), d = h(!1), m = h(""), w = h(""), _ = h(""), k = h([]), y = h(!1), R = z(() => p.models[u.value]), E = z(() => p.models.some((A) => A.is_download_intent)), $ = z(() => p.models.filter(
      (A) => p.modelChoices.has(A.filename) || A.is_download_intent
    ).length), S = z(() => {
      var M;
      if (!R.value) return "";
      const A = l((M = R.value.reference) == null ? void 0 : M.node_type);
      return A ? `${A}/${R.value.filename}` : "";
    }), N = z(() => {
      var M;
      if (!R.value) return "not-found";
      const A = p.modelChoices.get(R.value.filename);
      if (A)
        switch (A.action) {
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
      return R.value.is_download_intent ? "download" : (M = R.value.options) != null && M.length ? "ambiguous" : "not-found";
    }), T = z(() => {
      var M, ve;
      if (!R.value) return;
      const A = p.modelChoices.get(R.value.filename);
      if (A)
        switch (A.action) {
          case "select":
            return (M = A.selected_model) != null && M.filename ? `→ ${A.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return R.value.is_download_intent ? "Pending Download" : (ve = R.value.options) != null && ve.length ? `${R.value.options.length} matches` : "Not Found";
    });
    function I(A) {
      A >= 0 && A < p.models.length && (u.value = A);
    }
    function Y() {
      R.value && v("mark-optional", R.value.filename);
    }
    function B() {
      R.value && v("skip", R.value.filename);
    }
    function U(A) {
      R.value && v("option-selected", R.value.filename, A);
    }
    function C() {
      R.value && v("clear-choice", R.value.filename);
    }
    function x() {
      R.value && (m.value = R.value.filename, f.value = !0);
    }
    function L() {
      R.value && (w.value = R.value.download_source || "", _.value = R.value.target_path || S.value, d.value = !0);
    }
    function le() {
      f.value = !1, m.value = "", k.value = [];
    }
    function ie() {
      d.value = !1, w.value = "", _.value = "";
    }
    function K() {
      y.value = !0, setTimeout(() => {
        y.value = !1;
      }, 300);
    }
    function ee(A) {
      R.value && le();
    }
    function q() {
      !R.value || !w.value.trim() || (v("download-url", R.value.filename, w.value.trim(), _.value.trim() || void 0), ie());
    }
    function O(A) {
      if (!A) return "Unknown";
      const M = A / (1024 * 1024 * 1024);
      return M >= 1 ? `${M.toFixed(2)} GB` : `${(A / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (A, M) => {
      var ve, oe, ke;
      return s(), o("div", Cd, [
        e("div", xd, [
          e("div", Sd, [
            e("h3", Id, a(E.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Ed, a(E.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Pd, a($.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        R.value ? (s(), P(ao, {
          key: 0,
          "item-name": R.value.filename,
          "current-index": u.value,
          "total-items": t.models.length,
          onPrev: M[0] || (M[0] = (_e) => I(u.value - 1)),
          onNext: M[1] || (M[1] = (_e) => I(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
        R.value ? (s(), o("div", Rd, [
          b($d, {
            filename: R.value.filename,
            "node-type": ((ve = R.value.reference) == null ? void 0 : ve.node_type) || "Unknown",
            "has-multiple-options": !!((oe = R.value.options) != null && oe.length),
            options: R.value.options,
            choice: (ke = t.modelChoices) == null ? void 0 : ke.get(R.value.filename),
            status: N.value,
            "status-label": T.value,
            onMarkOptional: Y,
            onSkip: B,
            onDownloadUrl: L,
            onSearch: x,
            onOptionSelected: U,
            onClearChoice: C
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", Td, [...M[5] || (M[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), P(et, { to: "body" }, [
          f.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Fe(le, ["self"])
          }, [
            e("div", Md, [
              e("div", { class: "model-modal-header" }, [
                M[6] || (M[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: le
                }, "✕")
              ]),
              e("div", Dd, [
                b(bt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": M[2] || (M[2] = (_e) => m.value = _e),
                  placeholder: "Search by filename, category...",
                  onInput: K
                }, null, 8, ["modelValue"]),
                k.value.length > 0 ? (s(), o("div", Ld, [
                  (s(!0), o(W, null, ae(k.value, (_e) => (s(), o("div", {
                    key: _e.hash,
                    class: "model-search-result-item",
                    onClick: (Le) => ee()
                  }, [
                    e("div", Ud, [
                      e("code", Nd, a(_e.filename), 1)
                    ]),
                    e("div", Od, [
                      e("span", Ad, a(_e.category), 1),
                      e("span", Fd, a(O(_e.size)), 1)
                    ]),
                    _e.relative_path ? (s(), o("div", Bd, a(_e.relative_path), 1)) : r("", !0)
                  ], 8, zd))), 128))
                ])) : m.value && !y.value ? (s(), o("div", Vd, ' No models found matching "' + a(m.value) + '" ', 1)) : r("", !0),
                y.value ? (s(), o("div", Wd, "Searching...")) : r("", !0)
              ])
            ])
          ])) : r("", !0)
        ])),
        (s(), P(et, { to: "body" }, [
          d.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Fe(ie, ["self"])
          }, [
            e("div", Gd, [
              e("div", { class: "model-modal-header" }, [
                M[7] || (M[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: ie
                }, "✕")
              ]),
              e("div", jd, [
                e("div", Kd, [
                  M[8] || (M[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  b(bt, {
                    modelValue: w.value,
                    "onUpdate:modelValue": M[3] || (M[3] = (_e) => w.value = _e),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Hd, [
                  M[9] || (M[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  b(bt, {
                    modelValue: _.value,
                    "onUpdate:modelValue": M[4] || (M[4] = (_e) => _.value = _e),
                    placeholder: S.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", qd, [
                  b(ye, {
                    variant: "secondary",
                    onClick: ie
                  }, {
                    default: i(() => [...M[10] || (M[10] = [
                      g("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(ye, {
                    variant: "primary",
                    disabled: !w.value.trim() || !_.value.trim(),
                    onClick: q
                  }, {
                    default: i(() => [...M[11] || (M[11] = [
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
}), Jd = /* @__PURE__ */ se(Yd, [["__scopeId", "data-v-c6acbada"]]), Xd = { class: "applying-step" }, Qd = {
  key: 0,
  class: "phase-content"
}, Zd = {
  key: 1,
  class: "phase-content"
}, ec = { class: "phase-description" }, tc = { class: "overall-progress" }, sc = { class: "progress-bar" }, oc = { class: "progress-label" }, nc = { class: "install-list" }, ac = { class: "install-icon" }, lc = { key: 0 }, ic = {
  key: 1,
  class: "spinner"
}, rc = { key: 2 }, dc = { key: 3 }, cc = {
  key: 0,
  class: "install-error"
}, uc = {
  key: 2,
  class: "phase-content"
}, mc = { class: "phase-header" }, vc = { class: "phase-title" }, fc = { class: "completion-summary" }, pc = {
  key: 0,
  class: "summary-item success"
}, gc = { class: "summary-text" }, hc = {
  key: 1,
  class: "summary-item error"
}, yc = { class: "summary-text" }, wc = {
  key: 2,
  class: "failed-list"
}, kc = { class: "failed-node-id" }, bc = { class: "failed-error" }, _c = {
  key: 4,
  class: "summary-item success"
}, $c = {
  key: 5,
  class: "restart-prompt"
}, Cc = {
  key: 3,
  class: "phase-content error"
}, xc = { class: "error-message" }, Sc = /* @__PURE__ */ te({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const c = t, n = z(() => {
      var m, w;
      const f = ((m = c.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || c.progress.nodesToInstall.length;
      if (!f) return 0;
      const d = ((w = c.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.length) ?? 0;
      return Math.round(d / f * 100);
    }), l = z(() => {
      var f;
      return ((f = c.progress.nodeInstallProgress) == null ? void 0 : f.completedNodes.filter((d) => !d.success)) || [];
    }), p = z(() => l.value.length > 0);
    function v(f, d) {
      var w, _;
      const m = (w = c.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.find((k) => k.node_id === f);
      return m ? m.success ? "complete" : "failed" : ((_ = c.progress.nodeInstallProgress) == null ? void 0 : _.currentIndex) === d ? "installing" : "pending";
    }
    function u(f) {
      var d, m;
      return (m = (d = c.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((w) => w.node_id === f)) == null ? void 0 : m.error;
    }
    return (f, d) => {
      var m, w, _, k;
      return s(), o("div", Xd, [
        t.progress.phase === "resolving" ? (s(), o("div", Qd, [...d[2] || (d[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", Zd, [
          d[3] || (d[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", ec, " Installing " + a((((m = t.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + a(((w = t.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", tc, [
            e("div", sc, [
              e("div", {
                class: "progress-fill",
                style: zt({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", oc, a(((_ = t.progress.nodeInstallProgress) == null ? void 0 : _.completedNodes.length) ?? 0) + " / " + a(((k = t.progress.nodeInstallProgress) == null ? void 0 : k.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", nc, [
            (s(!0), o(W, null, ae(t.progress.nodesToInstall, (y, R) => (s(), o("div", {
              key: y,
              class: fe(["install-item", v(y, R)])
            }, [
              e("span", ac, [
                v(y, R) === "pending" ? (s(), o("span", lc, "○")) : v(y, R) === "installing" ? (s(), o("span", ic, "◌")) : v(y, R) === "complete" ? (s(), o("span", rc, "✓")) : v(y, R) === "failed" ? (s(), o("span", dc, "✗")) : r("", !0)
              ]),
              e("code", null, a(y), 1),
              u(y) ? (s(), o("span", cc, a(u(y)), 1)) : r("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", uc, [
          e("div", mc, [
            e("span", {
              class: fe(["phase-icon", p.value ? "warning" : "success"])
            }, a(p.value ? "⚠" : "✓"), 3),
            e("h3", vc, a(p.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", fc, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", pc, [
              d[4] || (d[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", gc, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : r("", !0),
            l.value.length > 0 ? (s(), o("div", hc, [
              d[5] || (d[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", yc, a(l.value.length) + " package" + a(l.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : r("", !0),
            l.value.length > 0 ? (s(), o("div", wc, [
              (s(!0), o(W, null, ae(l.value, (y) => (s(), o("div", {
                key: y.node_id,
                class: "failed-item"
              }, [
                e("code", kc, a(y.node_id), 1),
                e("span", bc, a(y.error), 1)
              ]))), 128))
            ])) : r("", !0),
            l.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (y) => f.$emit("retry-failed"))
            }, " Retry Failed (" + a(l.value.length) + ") ", 1)) : r("", !0),
            p.value ? r("", !0) : (s(), o("div", _c, [...d[6] || (d[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", $c, [
              d[7] || (d[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: d[1] || (d[1] = (y) => f.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : r("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", Cc, [
          d[9] || (d[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", xc, a(t.progress.error), 1)
        ])) : r("", !0)
      ]);
    };
  }
}), Ic = /* @__PURE__ */ se(Sc, [["__scopeId", "data-v-5efaae58"]]), Ec = {
  key: 0,
  class: "loading-state"
}, Pc = {
  key: 1,
  class: "wizard-content"
}, Rc = {
  key: 0,
  class: "step-content"
}, Tc = { class: "analysis-summary" }, Mc = { class: "analysis-header" }, Dc = { class: "summary-description" }, Lc = { class: "stats-grid" }, zc = { class: "stat-card" }, Uc = { class: "stat-items" }, Nc = {
  key: 0,
  class: "stat-item success"
}, Oc = { class: "stat-count" }, Ac = {
  key: 1,
  class: "stat-item info"
}, Fc = { class: "stat-count" }, Bc = {
  key: 2,
  class: "stat-item warning"
}, Vc = { class: "stat-count" }, Wc = {
  key: 3,
  class: "stat-item error"
}, Gc = { class: "stat-count" }, jc = { class: "stat-card" }, Kc = { class: "stat-items" }, Hc = { class: "stat-item success" }, qc = { class: "stat-count" }, Yc = {
  key: 0,
  class: "stat-item info"
}, Jc = { class: "stat-count" }, Xc = {
  key: 1,
  class: "stat-item warning"
}, Qc = { class: "stat-count" }, Zc = {
  key: 2,
  class: "stat-item warning"
}, eu = { class: "stat-count" }, tu = {
  key: 3,
  class: "stat-item error"
}, su = { class: "stat-count" }, ou = {
  key: 0,
  class: "status-message warning"
}, nu = { class: "status-text" }, au = {
  key: 1,
  class: "status-message info"
}, lu = { class: "status-text" }, iu = {
  key: 2,
  class: "status-message info"
}, ru = { class: "status-text" }, du = {
  key: 3,
  class: "status-message warning"
}, cu = { class: "status-text" }, uu = {
  key: 4,
  class: "status-message success"
}, mu = {
  key: 5,
  class: "category-mismatch-section"
}, vu = { class: "mismatch-list" }, fu = { class: "mismatch-path" }, pu = { class: "mismatch-target" }, gu = {
  key: 3,
  class: "step-content"
}, hu = { class: "review-summary" }, yu = { class: "review-stats" }, wu = { class: "review-stat" }, ku = { class: "stat-value" }, bu = { class: "review-stat" }, _u = { class: "stat-value" }, $u = { class: "review-stat" }, Cu = { class: "stat-value" }, xu = { class: "review-stat" }, Su = { class: "stat-value" }, Iu = {
  key: 0,
  class: "review-section"
}, Eu = { class: "section-title" }, Pu = { class: "review-items" }, Ru = { class: "item-name" }, Tu = { class: "item-choice" }, Mu = {
  key: 0,
  class: "choice-badge install"
}, Du = {
  key: 1,
  class: "choice-badge skip"
}, Lu = {
  key: 1,
  class: "review-section"
}, zu = { class: "section-title" }, Uu = { class: "review-items" }, Nu = { class: "item-name" }, Ou = { class: "item-choice" }, Au = {
  key: 0,
  class: "choice-badge install"
}, Fu = {
  key: 1,
  class: "choice-badge optional"
}, Bu = {
  key: 2,
  class: "choice-badge skip"
}, Vu = {
  key: 1,
  class: "choice-badge pending"
}, Wu = {
  key: 2,
  class: "review-section"
}, Gu = { class: "section-title" }, ju = { class: "review-items" }, Ku = { class: "item-name" }, Hu = { class: "item-choice" }, qu = {
  key: 0,
  class: "choice-badge install"
}, Yu = {
  key: 1,
  class: "choice-badge download"
}, Ju = {
  key: 2,
  class: "choice-badge optional"
}, Xu = {
  key: 3,
  class: "choice-badge skip"
}, Qu = {
  key: 4,
  class: "choice-badge skip"
}, Zu = {
  key: 1,
  class: "choice-badge download"
}, em = {
  key: 2,
  class: "choice-badge pending"
}, tm = {
  key: 3,
  class: "no-choices"
}, sm = /* @__PURE__ */ te({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, l = c, { analyzeWorkflow: p, applyResolution: v, installNodes: u, queueModelDownloads: f, progress: d, resetProgress: m } = no(), { loadPendingDownloads: w } = vs(), { openFileLocation: _ } = We(), k = h(null), y = h(!1), R = h(!1), E = h(null), $ = h("analysis"), S = h([]), N = h(/* @__PURE__ */ new Map()), T = h(/* @__PURE__ */ new Map()), I = h(/* @__PURE__ */ new Set()), Y = z(() => {
      const Z = [
        { id: "analysis", label: "Analysis" }
      ];
      return (U.value || L.value) && Z.push({ id: "nodes", label: "Nodes" }), (C.value || x.value) && Z.push({ id: "models", label: "Models" }), Z.push({ id: "review", label: "Review" }), $.value === "applying" && Z.push({ id: "applying", label: "Applying" }), Z;
    }), B = z(() => k.value ? k.value.stats.needs_user_input : !1), U = z(() => k.value ? k.value.nodes.unresolved.length > 0 || k.value.nodes.ambiguous.length > 0 : !1), C = z(() => k.value ? k.value.models.unresolved.length > 0 || k.value.models.ambiguous.length > 0 : !1), x = z(() => k.value ? k.value.stats.download_intents > 0 : !1), L = z(() => k.value ? k.value.stats.nodes_needing_installation > 0 : !1), le = z(() => k.value ? k.value.nodes.resolved.length : 0), ie = z(() => k.value ? k.value.models.resolved.filter((Z) => Z.has_category_mismatch) : []), K = z(() => ie.value.length > 0), ee = z(() => {
      if (!k.value) return [];
      const Z = k.value.nodes.resolved.filter((G) => !G.is_installed), D = /* @__PURE__ */ new Set();
      return Z.filter((G) => D.has(G.package.package_id) ? !1 : (D.add(G.package.package_id), !0));
    }), q = z(() => {
      if (!k.value) return [];
      const Z = k.value.nodes.resolved.filter((G) => !G.is_installed), D = /* @__PURE__ */ new Map();
      for (const G of Z) {
        const ne = D.get(G.package.package_id);
        ne ? ne.node_types_count++ : D.set(G.package.package_id, {
          package_id: G.package.package_id,
          title: G.package.title,
          node_types_count: 1
        });
      }
      return Array.from(D.values());
    }), O = z(() => ee.value.filter((Z) => !I.value.has(Z.package.package_id))), A = z(() => k.value ? k.value.models.resolved.filter((Z) => Z.match_type === "download_intent").map((Z) => ({
      filename: Z.reference.widget_value,
      reference: Z.reference,
      is_download_intent: !0,
      resolved_model: Z.model,
      download_source: Z.download_source,
      target_path: Z.target_path
    })) : []), M = z(() => {
      if (!k.value) return [];
      const Z = k.value.nodes.unresolved.map((G) => ({
        node_type: G.reference.node_type,
        reason: G.reason,
        is_unresolved: !0,
        options: void 0
      })), D = k.value.nodes.ambiguous.map((G) => ({
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
    }), ve = z(() => {
      if (!k.value) return [];
      const Z = k.value.models.unresolved.map((G) => ({
        filename: G.reference.widget_value,
        reference: G.reference,
        reason: G.reason,
        is_unresolved: !0,
        options: void 0
      })), D = k.value.models.ambiguous.map((G) => ({
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
    }), oe = z(() => {
      const Z = ve.value, D = A.value.map((G) => ({
        filename: G.filename,
        reference: G.reference,
        is_download_intent: !0,
        resolved_model: G.resolved_model,
        download_source: G.download_source,
        target_path: G.target_path,
        options: void 0
      }));
      return [...Z, ...D];
    }), ke = z(() => {
      let Z = O.value.length;
      for (const D of N.value.values())
        D.action === "install" && Z++;
      for (const D of T.value.values())
        D.action === "select" && Z++;
      return Z;
    }), _e = z(() => {
      let Z = 0;
      for (const D of T.value.values())
        D.action === "download" && Z++;
      return Z;
    }), Le = z(() => {
      let Z = 0;
      for (const D of N.value.values())
        D.action === "optional" && Z++;
      for (const D of T.value.values())
        D.action === "optional" && Z++;
      return Z;
    }), Ue = z(() => {
      let Z = I.value.size;
      for (const D of N.value.values())
        D.action === "skip" && Z++;
      for (const D of T.value.values())
        D.action === "skip" && Z++;
      for (const D of M.value)
        N.value.has(D.node_type) || Z++;
      for (const D of ve.value)
        T.value.has(D.filename) || Z++;
      return Z;
    }), me = z(() => {
      const Z = {};
      if (Z.analysis = { resolved: 1, total: 1 }, U.value) {
        const D = M.value.length, G = M.value.filter(
          (ne) => N.value.has(ne.node_type)
        ).length;
        Z.nodes = { resolved: G, total: D };
      }
      if (C.value || x.value) {
        const D = oe.value.length, G = oe.value.filter(
          (ne) => T.value.has(ne.filename) || ne.is_download_intent
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
    function Te() {
      const Z = Y.value.findIndex((D) => D.id === $.value);
      Z > 0 && ($.value = Y.value[Z - 1].id);
    }
    function de() {
      const Z = Y.value.findIndex((D) => D.id === $.value);
      Z < Y.value.length - 1 && ($.value = Y.value[Z + 1].id);
    }
    async function Q() {
      y.value = !0, E.value = null;
      try {
        k.value = await p(n.workflowName);
      } catch (Z) {
        E.value = Z instanceof Error ? Z.message : "Failed to analyze workflow";
      } finally {
        y.value = !1;
      }
    }
    function Me() {
      S.value.includes("analysis") || S.value.push("analysis"), U.value || L.value ? $.value = "nodes" : C.value || x.value ? $.value = "models" : $.value = "review";
    }
    function pe(Z) {
      N.value.set(Z, { action: "optional" });
    }
    function Je(Z) {
      N.value.set(Z, { action: "skip" });
    }
    function tt(Z, D) {
      var ne;
      const G = M.value.find((xe) => xe.node_type === Z);
      (ne = G == null ? void 0 : G.options) != null && ne[D] && N.value.set(Z, {
        action: "install",
        package_id: G.options[D].package_id
      });
    }
    function st(Z, D) {
      N.value.set(Z, {
        action: "install",
        package_id: D
      });
    }
    function Pe(Z) {
      N.value.delete(Z);
    }
    function Xe(Z) {
      I.value.has(Z) ? I.value.delete(Z) : I.value.add(Z);
    }
    function He(Z) {
      T.value.set(Z, { action: "optional" });
    }
    function Qe(Z) {
      T.value.set(Z, { action: "skip" });
    }
    function vt(Z, D) {
      var ne;
      const G = ve.value.find((xe) => xe.filename === Z);
      (ne = G == null ? void 0 : G.options) != null && ne[D] && T.value.set(Z, {
        action: "select",
        selected_model: G.options[D].model
      });
    }
    function be(Z, D, G) {
      T.value.set(Z, {
        action: "download",
        url: D,
        target_path: G
      });
    }
    function je(Z) {
      T.value.delete(Z);
    }
    async function it(Z) {
      try {
        await _(Z);
      } catch (D) {
        E.value = D instanceof Error ? D.message : "Failed to open file location";
      }
    }
    async function qe() {
      var Z;
      R.value = !0, E.value = null, m(), d.phase = "resolving", $.value = "applying";
      try {
        const D = await v(n.workflowName, N.value, T.value, I.value);
        D.models_to_download && D.models_to_download.length > 0 && f(n.workflowName, D.models_to_download);
        const G = [
          ...D.nodes_to_install || [],
          ...O.value.map((xe) => xe.package.package_id)
        ];
        d.nodesToInstall = [...new Set(G)], d.nodesToInstall.length > 0 && await u(n.workflowName), d.phase = "complete", await w();
        const ne = d.installError || ((Z = d.nodeInstallProgress) == null ? void 0 : Z.completedNodes.some((xe) => !xe.success));
        !d.needsRestart && !ne && setTimeout(() => {
          l("refresh"), l("install"), l("close");
        }, 1500);
      } catch (D) {
        E.value = D instanceof Error ? D.message : "Failed to apply resolution", d.error = E.value, d.phase = "error";
      } finally {
        R.value = !1;
      }
    }
    function ce() {
      l("refresh"), l("restart"), l("close");
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
          await u(n.workflowName), d.phase = "complete";
        } catch (G) {
          d.error = G instanceof Error ? G.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return Ne(Q), (Z, D) => (s(), P(Ye, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: y.value,
      error: E.value || void 0,
      "fixed-height": !0,
      onClose: D[1] || (D[1] = (G) => l("close"))
    }, {
      body: i(() => [
        y.value && !k.value ? (s(), o("div", Ec, [...D[2] || (D[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : k.value ? (s(), o("div", Pc, [
          b(Ui, {
            steps: Y.value,
            "current-step": $.value,
            "completed-steps": S.value,
            "step-stats": me.value,
            onStepChange: ge
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (s(), o("div", Rc, [
            e("div", Tc, [
              e("div", Mc, [
                D[3] || (D[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", Dc, " Found " + a(k.value.stats.total_nodes) + " nodes and " + a(k.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Lc, [
                e("div", zc, [
                  D[12] || (D[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Uc, [
                    le.value > 0 ? (s(), o("div", Nc, [
                      D[4] || (D[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Oc, a(le.value), 1),
                      D[5] || (D[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : r("", !0),
                    k.value.stats.packages_needing_installation > 0 ? (s(), o("div", Ac, [
                      D[6] || (D[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Fc, a(k.value.stats.packages_needing_installation), 1),
                      D[7] || (D[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : r("", !0),
                    k.value.nodes.ambiguous.length > 0 ? (s(), o("div", Bc, [
                      D[8] || (D[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Vc, a(k.value.nodes.ambiguous.length), 1),
                      D[9] || (D[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : r("", !0),
                    k.value.nodes.unresolved.length > 0 ? (s(), o("div", Wc, [
                      D[10] || (D[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Gc, a(k.value.nodes.unresolved.length), 1),
                      D[11] || (D[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : r("", !0)
                  ])
                ]),
                e("div", jc, [
                  D[23] || (D[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Kc, [
                    e("div", Hc, [
                      D[13] || (D[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", qc, a(k.value.models.resolved.length - k.value.stats.download_intents - k.value.stats.models_with_category_mismatch), 1),
                      D[14] || (D[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    k.value.stats.download_intents > 0 ? (s(), o("div", Yc, [
                      D[15] || (D[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Jc, a(k.value.stats.download_intents), 1),
                      D[16] || (D[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : r("", !0),
                    K.value ? (s(), o("div", Xc, [
                      D[17] || (D[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", Qc, a(ie.value.length), 1),
                      D[18] || (D[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : r("", !0),
                    k.value.models.ambiguous.length > 0 ? (s(), o("div", Zc, [
                      D[19] || (D[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", eu, a(k.value.models.ambiguous.length), 1),
                      D[20] || (D[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : r("", !0),
                    k.value.models.unresolved.length > 0 ? (s(), o("div", tu, [
                      D[21] || (D[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", su, a(k.value.models.unresolved.length), 1),
                      D[22] || (D[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : r("", !0)
                  ])
                ])
              ]),
              B.value ? (s(), o("div", ou, [
                D[24] || (D[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", nu, a(M.value.length + ve.value.length) + " items need your input", 1)
              ])) : L.value ? (s(), o("div", au, [
                D[25] || (D[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", lu, a(k.value.stats.packages_needing_installation) + " package" + a(k.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(k.value.stats.nodes_needing_installation) + " node type" + a(k.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(x.value ? `, ${k.value.stats.download_intents} model${k.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : x.value ? (s(), o("div", iu, [
                D[26] || (D[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", ru, a(k.value.stats.download_intents) + " model" + a(k.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : K.value ? (s(), o("div", du, [
                D[27] || (D[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", cu, a(ie.value.length) + " model" + a(ie.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", uu, [...D[28] || (D[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              K.value ? (s(), o("div", mu, [
                D[31] || (D[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", vu, [
                  (s(!0), o(W, null, ae(ie.value, (G) => {
                    var ne, xe;
                    return s(), o("div", {
                      key: G.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", fu, a(G.actual_category) + "/" + a((ne = G.model) == null ? void 0 : ne.filename), 1),
                      D[30] || (D[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", pu, a((xe = G.expected_categories) == null ? void 0 : xe[0]) + "/", 1),
                      G.file_path ? (s(), P(ye, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Be) => it(G.file_path)
                      }, {
                        default: i(() => [...D[29] || (D[29] = [
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
          $.value === "nodes" ? (s(), P(od, {
            key: 1,
            nodes: M.value,
            "node-choices": N.value,
            "auto-resolved-packages": q.value,
            "skipped-packages": I.value,
            onMarkOptional: pe,
            onSkip: Je,
            onOptionSelected: tt,
            onManualEntry: st,
            onClearChoice: Pe,
            onPackageSkip: Xe
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : r("", !0),
          $.value === "models" ? (s(), P(Jd, {
            key: 2,
            models: oe.value,
            "model-choices": T.value,
            onMarkOptional: He,
            onSkip: Qe,
            onOptionSelected: vt,
            onDownloadUrl: be,
            onClearChoice: je
          }, null, 8, ["models", "model-choices"])) : r("", !0),
          $.value === "review" ? (s(), o("div", gu, [
            e("div", hu, [
              D[36] || (D[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", yu, [
                e("div", wu, [
                  e("span", ku, a(ke.value), 1),
                  D[32] || (D[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", bu, [
                  e("span", _u, a(_e.value), 1),
                  D[33] || (D[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", $u, [
                  e("span", Cu, a(Le.value), 1),
                  D[34] || (D[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", xu, [
                  e("span", Su, a(Ue.value), 1),
                  D[35] || (D[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              q.value.length > 0 ? (s(), o("div", Iu, [
                e("h4", Eu, "Node Packages (" + a(q.value.length) + ")", 1),
                e("div", Pu, [
                  (s(!0), o(W, null, ae(q.value, (G) => (s(), o("div", {
                    key: G.package_id,
                    class: "review-item"
                  }, [
                    e("code", Ru, a(G.package_id), 1),
                    e("div", Tu, [
                      I.value.has(G.package_id) ? (s(), o("span", Du, "Skipped")) : (s(), o("span", Mu, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : r("", !0),
              M.value.length > 0 ? (s(), o("div", Lu, [
                e("h4", zu, "Node Choices (" + a(M.value.length) + ")", 1),
                e("div", Uu, [
                  (s(!0), o(W, null, ae(M.value, (G) => {
                    var ne, xe, Be, pt;
                    return s(), o("div", {
                      key: G.node_type,
                      class: "review-item"
                    }, [
                      e("code", Nu, a(G.node_type), 1),
                      e("div", Ou, [
                        N.value.has(G.node_type) ? (s(), o(W, { key: 0 }, [
                          ((ne = N.value.get(G.node_type)) == null ? void 0 : ne.action) === "install" ? (s(), o("span", Au, a((xe = N.value.get(G.node_type)) == null ? void 0 : xe.package_id), 1)) : ((Be = N.value.get(G.node_type)) == null ? void 0 : Be.action) === "optional" ? (s(), o("span", Fu, " Optional ")) : ((pt = N.value.get(G.node_type)) == null ? void 0 : pt.action) === "skip" ? (s(), o("span", Bu, " Skip ")) : r("", !0)
                        ], 64)) : (s(), o("span", Vu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : r("", !0),
              oe.value.length > 0 ? (s(), o("div", Wu, [
                e("h4", Gu, "Models (" + a(oe.value.length) + ")", 1),
                e("div", ju, [
                  (s(!0), o(W, null, ae(oe.value, (G) => {
                    var ne, xe, Be, pt, Ct, rt, Ot;
                    return s(), o("div", {
                      key: G.filename,
                      class: "review-item"
                    }, [
                      e("code", Ku, a(G.filename), 1),
                      e("div", Hu, [
                        T.value.has(G.filename) ? (s(), o(W, { key: 0 }, [
                          ((ne = T.value.get(G.filename)) == null ? void 0 : ne.action) === "select" ? (s(), o("span", qu, a((Be = (xe = T.value.get(G.filename)) == null ? void 0 : xe.selected_model) == null ? void 0 : Be.filename), 1)) : ((pt = T.value.get(G.filename)) == null ? void 0 : pt.action) === "download" ? (s(), o("span", Yu, " Download ")) : ((Ct = T.value.get(G.filename)) == null ? void 0 : Ct.action) === "optional" ? (s(), o("span", Ju, " Optional ")) : ((rt = T.value.get(G.filename)) == null ? void 0 : rt.action) === "skip" ? (s(), o("span", Xu, " Skip ")) : ((Ot = T.value.get(G.filename)) == null ? void 0 : Ot.action) === "cancel_download" ? (s(), o("span", Qu, " Cancel Download ")) : r("", !0)
                        ], 64)) : G.is_download_intent ? (s(), o("span", Zu, " Pending Download ")) : (s(), o("span", em, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : r("", !0),
              ee.value.length === 0 && M.value.length === 0 && oe.value.length === 0 ? (s(), o("div", tm, " No dependencies need resolution. ")) : r("", !0)
            ])
          ])) : r("", !0),
          $.value === "applying" ? (s(), P(Ic, {
            key: 4,
            progress: Se(d),
            onRestart: ce,
            onRetryFailed: J
          }, null, 8, ["progress"])) : r("", !0)
        ])) : r("", !0)
      ]),
      footer: i(() => [
        $.value !== "analysis" && $.value !== "applying" ? (s(), P(ye, {
          key: 0,
          variant: "secondary",
          disabled: R.value,
          onClick: Te
        }, {
          default: i(() => [...D[37] || (D[37] = [
            g(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : r("", !0),
        D[41] || (D[41] = e("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || Se(d).phase === "complete" || Se(d).phase === "error" ? (s(), P(ye, {
          key: 1,
          variant: "secondary",
          onClick: D[0] || (D[0] = (G) => l("close"))
        }, {
          default: i(() => [
            g(a(Se(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : r("", !0),
        $.value === "analysis" ? (s(), P(ye, {
          key: 2,
          variant: "primary",
          disabled: y.value,
          onClick: Me
        }, {
          default: i(() => [...D[38] || (D[38] = [
            g(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : r("", !0),
        $.value === "nodes" ? (s(), P(ye, {
          key: 3,
          variant: "primary",
          onClick: de
        }, {
          default: i(() => [
            g(a(C.value || x.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : r("", !0),
        $.value === "models" ? (s(), P(ye, {
          key: 4,
          variant: "primary",
          onClick: de
        }, {
          default: i(() => [...D[39] || (D[39] = [
            g(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : r("", !0),
        $.value === "review" ? (s(), P(ye, {
          key: 5,
          variant: "primary",
          disabled: R.value,
          loading: R.value,
          onClick: qe
        }, {
          default: i(() => [...D[40] || (D[40] = [
            g(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : r("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), om = /* @__PURE__ */ se(sm, [["__scopeId", "data-v-6276cf1d"]]), nm = { class: "search-input-wrapper" }, am = ["value", "placeholder"], lm = /* @__PURE__ */ te({
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
    const n = t, l = c, p = h(null);
    let v;
    function u(d) {
      const m = d.target.value;
      n.debounce > 0 ? (clearTimeout(v), v = window.setTimeout(() => {
        l("update:modelValue", m);
      }, n.debounce)) : l("update:modelValue", m);
    }
    function f() {
      var d;
      l("update:modelValue", ""), l("clear"), (d = p.value) == null || d.focus();
    }
    return Ne(() => {
      n.autoFocus && p.value && p.value.focus();
    }), (d, m) => (s(), o("div", nm, [
      e("input", {
        ref_key: "inputRef",
        ref: p,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: Tt(f, ["escape"])
      }, null, 40, am),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: f,
        title: "Clear search"
      }, " ✕ ")) : r("", !0)
    ]));
  }
}), im = /* @__PURE__ */ se(lm, [["__scopeId", "data-v-266f857a"]]), rm = { class: "search-bar" }, dm = /* @__PURE__ */ te({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, n) => (s(), o("div", rm, [
      b(im, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (l) => c.$emit("update:modelValue", l)),
        onClear: n[1] || (n[1] = (l) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), es = /* @__PURE__ */ se(dm, [["__scopeId", "data-v-3d51bbfd"]]), cm = { class: "section-group" }, um = {
  key: 0,
  class: "section-content"
}, mm = /* @__PURE__ */ te({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const n = t, l = c, p = h(n.initiallyExpanded);
    function v() {
      n.collapsible && (p.value = !p.value, l("toggle", p.value));
    }
    return (u, f) => (s(), o("section", cm, [
      b(ut, {
        count: t.count,
        clickable: t.collapsible,
        expanded: p.value,
        onClick: v
      }, {
        default: i(() => [
          g(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || p.value ? (s(), o("div", um, [
        Re(u.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), Ae = /* @__PURE__ */ se(mm, [["__scopeId", "data-v-c48e33ed"]]), vm = { class: "item-header" }, fm = {
  key: 0,
  class: "item-icon"
}, pm = { class: "item-info" }, gm = {
  key: 0,
  class: "item-title"
}, hm = {
  key: 1,
  class: "item-subtitle"
}, ym = {
  key: 0,
  class: "item-details"
}, wm = {
  key: 1,
  class: "item-actions"
}, km = /* @__PURE__ */ te({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, l = z(() => n.status ? `status-${n.status}` : "");
    return (p, v) => (s(), o("div", {
      class: fe(["item-card", { clickable: t.clickable, compact: t.compact }, l.value]),
      onClick: v[0] || (v[0] = (u) => t.clickable && p.$emit("click"))
    }, [
      e("div", vm, [
        p.$slots.icon ? (s(), o("span", fm, [
          Re(p.$slots, "icon", {}, void 0, !0)
        ])) : r("", !0),
        e("div", pm, [
          p.$slots.title ? (s(), o("div", gm, [
            Re(p.$slots, "title", {}, void 0, !0)
          ])) : r("", !0),
          p.$slots.subtitle ? (s(), o("div", hm, [
            Re(p.$slots, "subtitle", {}, void 0, !0)
          ])) : r("", !0)
        ])
      ]),
      p.$slots.details ? (s(), o("div", ym, [
        Re(p.$slots, "details", {}, void 0, !0)
      ])) : r("", !0),
      p.$slots.actions ? (s(), o("div", wm, [
        Re(p.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), ot = /* @__PURE__ */ se(km, [["__scopeId", "data-v-cc435e0e"]]), bm = { class: "loading-state" }, _m = { class: "loading-message" }, $m = /* @__PURE__ */ te({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, n) => (s(), o("div", bm, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", _m, a(t.message), 1)
    ]));
  }
}), Ut = /* @__PURE__ */ se($m, [["__scopeId", "data-v-ad8436c9"]]), Cm = { class: "error-state" }, xm = { class: "error-message" }, Sm = /* @__PURE__ */ te({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, n) => (s(), o("div", Cm, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", xm, a(t.message), 1),
      t.retry ? (s(), P(X, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (l) => c.$emit("retry"))
      }, {
        default: i(() => [...n[1] || (n[1] = [
          g(" Retry ", -1)
        ])]),
        _: 1
      })) : r("", !0)
    ]));
  }
}), Nt = /* @__PURE__ */ se(Sm, [["__scopeId", "data-v-5397be48"]]), Im = /* @__PURE__ */ te({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const l = n, { getWorkflows: p } = We();
    so();
    const v = h([]), u = h(!1), f = h(null), d = h(""), m = h(!0), w = h(!1), _ = h(!1), k = h(!1), y = h(null), R = z(
      () => v.value.filter((O) => O.status === "broken")
    ), E = z(
      () => v.value.filter((O) => O.status === "new")
    ), $ = z(
      () => v.value.filter((O) => O.status === "modified")
    ), S = z(
      () => v.value.filter((O) => O.status === "synced")
    ), N = z(() => {
      if (!d.value.trim()) return v.value;
      const O = d.value.toLowerCase();
      return v.value.filter((A) => A.name.toLowerCase().includes(O));
    }), T = z(
      () => R.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), I = z(
      () => E.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), Y = z(
      () => $.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), B = z(
      () => S.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), U = z(
      () => w.value ? B.value : B.value.slice(0, 5)
    );
    async function C(O = !1) {
      u.value = !0, f.value = null;
      try {
        v.value = await p(O);
      } catch (A) {
        f.value = A instanceof Error ? A.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    c({ loadWorkflows: C });
    function x(O) {
      y.value = O, _.value = !0;
    }
    function L(O) {
      y.value = O, k.value = !0;
    }
    function le() {
      l("refresh");
    }
    async function ie() {
      k.value = !1, await C(!0);
    }
    async function K() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ee(O) {
      const A = [];
      return O.missing_nodes > 0 && A.push(`${O.missing_nodes} missing node${O.missing_nodes > 1 ? "s" : ""}`), O.missing_models > 0 && A.push(`${O.missing_models} missing model${O.missing_models > 1 ? "s" : ""}`), O.models_with_category_mismatch && O.models_with_category_mismatch > 0 && A.push(`${O.models_with_category_mismatch} model${O.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), O.pending_downloads && O.pending_downloads > 0 && A.push(`${O.pending_downloads} pending download${O.pending_downloads > 1 ? "s" : ""}`), A.length > 0 ? A.join(", ") : "Has issues";
    }
    function q(O) {
      const A = O.sync_state === "new" ? "New" : O.sync_state === "modified" ? "Modified" : O.sync_state === "synced" ? "Synced" : O.sync_state;
      return O.has_path_sync_issues && O.models_needing_path_sync && O.models_needing_path_sync > 0 ? `${O.models_needing_path_sync} model path${O.models_needing_path_sync > 1 ? "s" : ""} need${O.models_needing_path_sync === 1 ? "s" : ""} sync` : A || "Unknown";
    }
    return Ne(C), (O, A) => (s(), o(W, null, [
      b(nt, null, {
        header: i(() => [
          b(at, { title: "WORKFLOWS" })
        ]),
        search: i(() => [
          b(es, {
            modelValue: d.value,
            "onUpdate:modelValue": A[0] || (A[0] = (M) => d.value = M),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          u.value ? (s(), P(Ut, {
            key: 0,
            message: "Loading workflows..."
          })) : f.value ? (s(), P(Nt, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            T.value.length ? (s(), P(Ae, {
              key: 0,
              title: "BROKEN",
              count: T.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, ae(T.value, (M) => (s(), P(ot, {
                  key: M.name,
                  status: "broken"
                }, {
                  icon: i(() => [...A[7] || (A[7] = [
                    g("⚠", -1)
                  ])]),
                  title: i(() => [
                    g(a(M.name), 1)
                  ]),
                  subtitle: i(() => [
                    g(a(ee(M)), 1)
                  ]),
                  actions: i(() => [
                    b(X, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ve) => L(M.name)
                    }, {
                      default: i(() => [...A[8] || (A[8] = [
                        g(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => x(M.name)
                    }, {
                      default: i(() => [...A[9] || (A[9] = [
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
            I.value.length ? (s(), P(Ae, {
              key: 1,
              title: "NEW",
              count: I.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, ae(I.value, (M) => (s(), P(ot, {
                  key: M.name,
                  status: M.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: i(() => [
                    g(a(M.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: i(() => [
                    g(a(M.name), 1)
                  ]),
                  subtitle: i(() => [
                    g(a(q(M)), 1)
                  ]),
                  actions: i(() => [
                    b(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => x(M.name)
                    }, {
                      default: i(() => [...A[10] || (A[10] = [
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
            Y.value.length ? (s(), P(Ae, {
              key: 2,
              title: "MODIFIED",
              count: Y.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, ae(Y.value, (M) => (s(), P(ot, {
                  key: M.name,
                  status: M.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: i(() => [...A[11] || (A[11] = [
                    g("⚡", -1)
                  ])]),
                  title: i(() => [
                    g(a(M.name), 1)
                  ]),
                  subtitle: i(() => [
                    g(a(q(M)), 1)
                  ]),
                  actions: i(() => [
                    b(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => x(M.name)
                    }, {
                      default: i(() => [...A[12] || (A[12] = [
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
            B.value.length ? (s(), P(Ae, {
              key: 3,
              title: "SYNCED",
              count: B.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: A[2] || (A[2] = (M) => m.value = M)
            }, {
              default: i(() => [
                (s(!0), o(W, null, ae(U.value, (M) => (s(), P(ot, {
                  key: M.name,
                  status: M.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: i(() => [
                    g(a(M.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: i(() => [
                    g(a(M.name), 1)
                  ]),
                  subtitle: i(() => [
                    g(a(q(M)), 1)
                  ]),
                  actions: i(() => [
                    b(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ve) => x(M.name)
                    }, {
                      default: i(() => [...A[13] || (A[13] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !w.value && B.value.length > 5 ? (s(), P(X, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: A[1] || (A[1] = (M) => w.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: i(() => [
                    g(" View all " + a(B.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : r("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : r("", !0),
            N.value.length ? r("", !0) : (s(), P(_t, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      _.value && y.value ? (s(), P(Ci, {
        key: 0,
        "workflow-name": y.value,
        onClose: A[3] || (A[3] = (M) => _.value = !1),
        onResolve: A[4] || (A[4] = (M) => L(y.value)),
        onRefresh: A[5] || (A[5] = (M) => l("refresh"))
      }, null, 8, ["workflow-name"])) : r("", !0),
      k.value && y.value ? (s(), P(om, {
        key: 1,
        "workflow-name": y.value,
        onClose: ie,
        onInstall: le,
        onRefresh: A[6] || (A[6] = (M) => l("refresh")),
        onRestart: K
      }, null, 8, ["workflow-name"])) : r("", !0)
    ], 64));
  }
}), Em = /* @__PURE__ */ se(Im, [["__scopeId", "data-v-fa3f076e"]]), Pm = /* @__PURE__ */ te({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: fe(["summary-bar", t.variant])
    }, [
      Re(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), fs = /* @__PURE__ */ se(Pm, [["__scopeId", "data-v-ccb7816e"]]), Rm = {
  key: 0,
  class: "model-details"
}, Tm = { class: "detail-section" }, Mm = { class: "detail-row" }, Dm = { class: "detail-value mono" }, Lm = { class: "detail-row" }, zm = { class: "detail-value mono" }, Um = { class: "detail-row" }, Nm = { class: "detail-value mono" }, Om = { class: "detail-row" }, Am = { class: "detail-value" }, Fm = { class: "detail-row" }, Bm = { class: "detail-value" }, Vm = { class: "detail-row" }, Wm = { class: "detail-value" }, Gm = { class: "detail-section" }, jm = { class: "section-header" }, Km = {
  key: 0,
  class: "locations-list"
}, Hm = { class: "location-path mono" }, qm = {
  key: 0,
  class: "location-modified"
}, Ym = ["onClick"], Jm = {
  key: 1,
  class: "empty-state"
}, Xm = { class: "detail-section" }, Qm = { class: "section-header" }, Zm = {
  key: 0,
  class: "sources-list"
}, ev = { class: "source-type" }, tv = ["href"], sv = ["disabled", "onClick"], ov = {
  key: 1,
  class: "empty-state"
}, nv = { class: "add-source-form" }, av = ["disabled"], lv = {
  key: 2,
  class: "source-error"
}, iv = {
  key: 3,
  class: "source-success"
}, rv = /* @__PURE__ */ te({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: l, addModelSource: p, removeModelSource: v, openFileLocation: u } = We(), f = h(null), d = h(!0), m = h(null), w = h(""), _ = h(!1), k = h(null), y = h(null), R = h(null), E = h(null);
    let $ = null;
    function S(C, x = "success", L = 2e3) {
      $ && clearTimeout($), E.value = { message: C, type: x }, $ = setTimeout(() => {
        E.value = null;
      }, L);
    }
    function N(C) {
      if (!C) return "Unknown";
      const x = 1024 * 1024 * 1024, L = 1024 * 1024;
      return C >= x ? `${(C / x).toFixed(1)} GB` : C >= L ? `${(C / L).toFixed(0)} MB` : `${(C / 1024).toFixed(0)} KB`;
    }
    function T(C) {
      navigator.clipboard.writeText(C), S("Copied to clipboard!");
    }
    async function I(C) {
      try {
        await u(C), S("Opening file location...");
      } catch {
        S("Failed to open location", "error");
      }
    }
    async function Y() {
      if (!(!w.value.trim() || !f.value)) {
        _.value = !0, y.value = null, R.value = null;
        try {
          await p(f.value.hash, w.value.trim()), R.value = "Source added successfully!", w.value = "", await U();
        } catch (C) {
          y.value = C instanceof Error ? C.message : "Failed to add source";
        } finally {
          _.value = !1;
        }
      }
    }
    async function B(C) {
      if (f.value) {
        k.value = C, y.value = null, R.value = null;
        try {
          await v(f.value.hash, C), S("Source removed"), await U();
        } catch (x) {
          y.value = x instanceof Error ? x.message : "Failed to remove source";
        } finally {
          k.value = null;
        }
      }
    }
    async function U() {
      d.value = !0, m.value = null;
      try {
        f.value = await l(n.identifier);
      } catch (C) {
        m.value = C instanceof Error ? C.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return Ne(U), (C, x) => {
      var L;
      return s(), o(W, null, [
        b(Ye, {
          title: `Model Details: ${((L = f.value) == null ? void 0 : L.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: m.value,
          onClose: x[5] || (x[5] = (le) => C.$emit("close"))
        }, {
          body: i(() => {
            var le, ie, K, ee;
            return [
              f.value ? (s(), o("div", Rm, [
                e("section", Tm, [
                  e("div", Mm, [
                    x[6] || (x[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", Dm, a(f.value.hash || "Not computed"), 1),
                    f.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: x[0] || (x[0] = (q) => T(f.value.hash))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", Lm, [
                    x[7] || (x[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", zm, a(f.value.blake3 || "Not computed"), 1),
                    f.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: x[1] || (x[1] = (q) => T(f.value.blake3))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", Um, [
                    x[8] || (x[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", Nm, a(f.value.sha256 || "Not computed"), 1),
                    f.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: x[2] || (x[2] = (q) => T(f.value.sha256))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", Om, [
                    x[9] || (x[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Am, a(N(f.value.size)), 1)
                  ]),
                  e("div", Fm, [
                    x[10] || (x[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Bm, a(f.value.category), 1)
                  ]),
                  e("div", Vm, [
                    x[11] || (x[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Wm, a(f.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Gm, [
                  e("h4", jm, "Locations (" + a(((le = f.value.locations) == null ? void 0 : le.length) || 0) + ")", 1),
                  (ie = f.value.locations) != null && ie.length ? (s(), o("div", Km, [
                    (s(!0), o(W, null, ae(f.value.locations, (q, O) => (s(), o("div", {
                      key: O,
                      class: "location-item"
                    }, [
                      e("span", Hm, a(q.path), 1),
                      q.modified ? (s(), o("span", qm, "Modified: " + a(q.modified), 1)) : r("", !0),
                      q.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (A) => I(q.path)
                      }, " Open File Location ", 8, Ym)) : r("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", Jm, "No locations found"))
                ]),
                e("section", Xm, [
                  e("h4", Qm, "Download Sources (" + a(((K = f.value.sources) == null ? void 0 : K.length) || 0) + ")", 1),
                  (ee = f.value.sources) != null && ee.length ? (s(), o("div", Zm, [
                    (s(!0), o(W, null, ae(f.value.sources, (q, O) => (s(), o("div", {
                      key: O,
                      class: "source-item"
                    }, [
                      e("span", ev, a(q.type) + ":", 1),
                      e("a", {
                        href: q.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(q.url), 9, tv),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: k.value === q.url,
                        onClick: (A) => B(q.url)
                      }, a(k.value === q.url ? "..." : "×"), 9, sv)
                    ]))), 128))
                  ])) : (s(), o("div", ov, " No download sources configured ")),
                  e("div", nv, [
                    De(e("input", {
                      "onUpdate:modelValue": x[3] || (x[3] = (q) => w.value = q),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [kt, w.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !w.value.trim() || _.value,
                      onClick: Y
                    }, a(_.value ? "Adding..." : "Add Source"), 9, av)
                  ]),
                  y.value ? (s(), o("p", lv, a(y.value), 1)) : r("", !0),
                  R.value ? (s(), o("p", iv, a(R.value), 1)) : r("", !0)
                ])
              ])) : r("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: x[4] || (x[4] = (le) => C.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), P(et, { to: "body" }, [
          E.value ? (s(), o("div", {
            key: 0,
            class: fe(["toast", E.value.type])
          }, a(E.value.message), 3)) : r("", !0)
        ]))
      ], 64);
    };
  }
}), As = /* @__PURE__ */ se(rv, [["__scopeId", "data-v-f15cbb56"]]), dv = /* @__PURE__ */ te({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: l, getStatus: p } = We(), v = h([]), u = h([]), f = h("production"), d = h(!1), m = h(null), w = h(""), _ = h(!1), k = h(null);
    function y() {
      _.value = !1, n("navigate", "model-index");
    }
    const R = z(
      () => v.value.reduce((U, C) => U + (C.size || 0), 0)
    ), E = z(() => {
      if (!w.value.trim()) return v.value;
      const U = w.value.toLowerCase();
      return v.value.filter((C) => C.filename.toLowerCase().includes(U));
    }), $ = z(() => {
      if (!w.value.trim()) return u.value;
      const U = w.value.toLowerCase();
      return u.value.filter((C) => C.filename.toLowerCase().includes(U));
    }), S = z(() => {
      const U = {};
      for (const x of E.value) {
        const L = x.type || "other";
        U[L] || (U[L] = []), U[L].push(x);
      }
      const C = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(U).sort(([x], [L]) => {
        const le = C.indexOf(x), ie = C.indexOf(L);
        return le >= 0 && ie >= 0 ? le - ie : le >= 0 ? -1 : ie >= 0 ? 1 : x.localeCompare(L);
      }).map(([x, L]) => ({ type: x, models: L }));
    });
    function N(U) {
      if (!U) return "Unknown";
      const C = U / (1024 * 1024);
      return C >= 1024 ? `${(C / 1024).toFixed(1)} GB` : `${C.toFixed(0)} MB`;
    }
    function T(U) {
      k.value = U.hash || U.filename;
    }
    function I(U) {
      n("navigate", "model-index");
    }
    function Y(U) {
      alert(`Download functionality not yet implemented for ${U}`);
    }
    async function B() {
      d.value = !0, m.value = null;
      try {
        const U = await l();
        v.value = U, u.value = [];
        const C = await p();
        f.value = C.environment || "production";
      } catch (U) {
        m.value = U instanceof Error ? U.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return Ne(B), (U, C) => (s(), o(W, null, [
      b(nt, null, {
        header: i(() => [
          b(at, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: C[0] || (C[0] = (x) => _.value = !0)
          })
        ]),
        search: i(() => [
          b(es, {
            modelValue: w.value,
            "onUpdate:modelValue": C[1] || (C[1] = (x) => w.value = x),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          d.value ? (s(), P(Ut, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (s(), P(Nt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            v.value.length ? (s(), P(fs, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                g(" Total: " + a(v.value.length) + " models • " + a(N(R.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : r("", !0),
            (s(!0), o(W, null, ae(S.value, (x) => (s(), P(Ae, {
              key: x.type,
              title: x.type.toUpperCase(),
              count: x.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(W, null, ae(x.models, (L) => (s(), P(ot, {
                  key: L.hash || L.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...C[4] || (C[4] = [
                    g("📦", -1)
                  ])]),
                  title: i(() => [
                    g(a(L.filename), 1)
                  ]),
                  subtitle: i(() => [
                    g(a(N(L.size)), 1)
                  ]),
                  details: i(() => [
                    b(Ge, {
                      label: "Used by:",
                      value: (L.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    b(Ge, {
                      label: "Path:",
                      value: L.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    b(X, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (le) => T(L)
                    }, {
                      default: i(() => [...C[5] || (C[5] = [
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
            $.value.length ? (s(), P(Ae, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, ae($.value, (x) => (s(), P(ot, {
                  key: x.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...C[6] || (C[6] = [
                    g("⚠", -1)
                  ])]),
                  title: i(() => [
                    g(a(x.filename), 1)
                  ]),
                  subtitle: i(() => [...C[7] || (C[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: i(() => {
                    var L;
                    return [
                      b(Ge, {
                        label: "Required by:",
                        value: ((L = x.workflow_names) == null ? void 0 : L.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: i(() => [
                    b(X, {
                      variant: "primary",
                      size: "sm",
                      onClick: (L) => Y(x.filename)
                    }, {
                      default: i(() => [...C[8] || (C[8] = [
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (L) => I(x.filename)
                    }, {
                      default: i(() => [...C[9] || (C[9] = [
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
            !E.value.length && !$.value.length ? (s(), P(_t, {
              key: 2,
              icon: "📭",
              message: w.value ? `No models match '${w.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b($t, {
        show: _.value,
        title: "About Environment Models",
        onClose: C[2] || (C[2] = (x) => _.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            C[10] || (C[10] = g(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(f.value) + '"', 1),
            C[11] || (C[11] = g(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: i(() => [
          b(X, {
            variant: "primary",
            onClick: y
          }, {
            default: i(() => [...C[12] || (C[12] = [
              g(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), P(As, {
        key: 0,
        identifier: k.value,
        onClose: C[3] || (C[3] = (x) => k.value = null)
      }, null, 8, ["identifier"])) : r("", !0)
    ], 64));
  }
}), cv = /* @__PURE__ */ se(dv, [["__scopeId", "data-v-cb4f12b3"]]), uv = {
  key: 0,
  class: "indexing-progress"
}, mv = { class: "progress-info" }, vv = { class: "progress-label" }, fv = { class: "progress-count" }, pv = { class: "progress-bar" }, gv = { class: "modal-content" }, hv = { class: "modal-header" }, yv = { class: "modal-body" }, wv = { class: "input-group" }, kv = { class: "current-path" }, bv = { class: "input-group" }, _v = { class: "modal-footer" }, $v = { class: "modal-content" }, Cv = { class: "modal-header" }, xv = { class: "modal-body" }, Sv = { class: "input-group" }, Iv = { class: "input-group" }, Ev = { class: "modal-footer" }, Pv = /* @__PURE__ */ te({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: l,
      getModelsDirectory: p,
      setModelsDirectory: v
    } = We(), { addToQueue: u } = vs(), f = c, d = h([]), m = h(!1), w = h(!1), _ = h(null), k = h(""), y = h(!1), R = h(null), E = h(!1), $ = h(null), S = h(""), N = h(!1), T = h(!1), I = h(""), Y = h(""), B = h(null), U = z(
      () => d.value.reduce((A, M) => A + (M.size || 0), 0)
    ), C = z(() => {
      if (!k.value.trim()) return d.value;
      const A = k.value.toLowerCase();
      return d.value.filter((M) => {
        const ve = M, oe = M.sha256 || ve.sha256_hash || "";
        return M.filename.toLowerCase().includes(A) || oe.toLowerCase().includes(A);
      });
    }), x = z(() => {
      const A = {};
      for (const ve of C.value) {
        const oe = ve.type || "other";
        A[oe] || (A[oe] = []), A[oe].push(ve);
      }
      const M = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(A).sort(([ve], [oe]) => {
        const ke = M.indexOf(ve), _e = M.indexOf(oe);
        return ke >= 0 && _e >= 0 ? ke - _e : ke >= 0 ? -1 : _e >= 0 ? 1 : ve.localeCompare(oe);
      }).map(([ve, oe]) => ({ type: ve, models: oe }));
    });
    function L(A) {
      if (!A) return "Unknown";
      const M = 1024 * 1024 * 1024, ve = 1024 * 1024;
      return A >= M ? `${(A / M).toFixed(1)} GB` : A >= ve ? `${(A / ve).toFixed(0)} MB` : `${(A / 1024).toFixed(0)} KB`;
    }
    function le(A) {
      R.value = A.hash || A.filename;
    }
    async function ie() {
      w.value = !0, _.value = null;
      try {
        const A = await l();
        await q(), A.changes > 0 && console.log(`Scan complete: ${A.changes} changes detected`);
      } catch (A) {
        _.value = A instanceof Error ? A.message : "Failed to scan models";
      } finally {
        w.value = !1;
      }
    }
    async function K() {
      if (S.value.trim()) {
        N.value = !0, _.value = null;
        try {
          const A = await v(S.value.trim());
          $.value = A.path, E.value = !1, S.value = "", await q(), console.log(`Directory changed: ${A.models_indexed} models indexed`), f("refresh");
        } catch (A) {
          _.value = A instanceof Error ? A.message : "Failed to change directory";
        } finally {
          N.value = !1;
        }
      }
    }
    function ee() {
      if (!I.value.trim() || !Y.value.trim()) return;
      const A = Y.value.split("/").pop() || "model.safetensors";
      u([{
        workflow: "__manual__",
        filename: A,
        url: I.value.trim(),
        targetPath: Y.value.trim()
      }]), I.value = "", Y.value = "", T.value = !1;
    }
    async function q() {
      m.value = !0, _.value = null;
      try {
        d.value = await n();
      } catch (A) {
        _.value = A instanceof Error ? A.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function O() {
      try {
        const A = await p();
        $.value = A.path;
      } catch {
      }
    }
    return Ne(() => {
      q(), O();
    }), (A, M) => (s(), o(W, null, [
      b(nt, null, {
        header: i(() => [
          b(at, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: M[2] || (M[2] = (ve) => y.value = !0)
          }, {
            actions: i(() => [
              b(X, {
                variant: "primary",
                size: "sm",
                disabled: w.value,
                onClick: ie
              }, {
                default: i(() => [
                  g(a(w.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(X, {
                variant: "primary",
                size: "sm",
                onClick: M[0] || (M[0] = (ve) => E.value = !0)
              }, {
                default: i(() => [...M[15] || (M[15] = [
                  g(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              b(X, {
                variant: "primary",
                size: "sm",
                onClick: M[1] || (M[1] = (ve) => T.value = !0)
              }, {
                default: i(() => [...M[16] || (M[16] = [
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
        search: i(() => [
          B.value ? (s(), o("div", uv, [
            e("div", mv, [
              e("span", vv, a(B.value.message), 1),
              e("span", fv, a(B.value.current) + "/" + a(B.value.total), 1)
            ]),
            e("div", pv, [
              e("div", {
                class: "progress-fill",
                style: zt({ width: `${B.value.current / B.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : r("", !0),
          b(es, {
            modelValue: k.value,
            "onUpdate:modelValue": M[3] || (M[3] = (ve) => k.value = ve),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          m.value || B.value ? (s(), P(Ut, {
            key: 0,
            message: B.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : _.value ? (s(), P(Nt, {
            key: 1,
            message: _.value,
            retry: !0,
            onRetry: q
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            d.value.length ? (s(), P(fs, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                g(" Total: " + a(d.value.length) + " models • " + a(L(U.value)), 1)
              ]),
              _: 1
            })) : r("", !0),
            (s(!0), o(W, null, ae(x.value, (ve) => (s(), P(Ae, {
              key: ve.type,
              title: ve.type.toUpperCase(),
              count: ve.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (s(!0), o(W, null, ae(ve.models, (oe) => (s(), P(ot, {
                  key: oe.sha256 || oe.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...M[17] || (M[17] = [
                    g("📦", -1)
                  ])]),
                  title: i(() => [
                    g(a(oe.filename), 1)
                  ]),
                  subtitle: i(() => [
                    g(a(L(oe.size)), 1)
                  ]),
                  details: i(() => [
                    b(Ge, {
                      label: "Hash:",
                      value: oe.hash ? oe.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    b(X, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ke) => le(oe)
                    }, {
                      default: i(() => [...M[18] || (M[18] = [
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
            C.value.length ? r("", !0) : (s(), P(_t, {
              key: 1,
              icon: "📭",
              message: k.value ? `No models match '${k.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      b($t, {
        show: y.value,
        title: "About Workspace Model Index",
        onClose: M[4] || (M[4] = (ve) => y.value = !1)
      }, {
        content: i(() => [...M[19] || (M[19] = [
          e("p", null, [
            g(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            g(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      R.value ? (s(), P(As, {
        key: 0,
        identifier: R.value,
        onClose: M[5] || (M[5] = (ve) => R.value = null)
      }, null, 8, ["identifier"])) : r("", !0),
      (s(), P(et, { to: "body" }, [
        E.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: M[9] || (M[9] = Fe((ve) => E.value = !1, ["self"]))
        }, [
          e("div", gv, [
            e("div", hv, [
              M[20] || (M[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: M[6] || (M[6] = (ve) => E.value = !1)
              }, "✕")
            ]),
            e("div", yv, [
              e("div", wv, [
                M[21] || (M[21] = e("label", null, "Current Directory", -1)),
                e("code", kv, a($.value || "Not set"), 1)
              ]),
              e("div", bv, [
                M[22] || (M[22] = e("label", null, "New Directory Path", -1)),
                b(bt, {
                  modelValue: S.value,
                  "onUpdate:modelValue": M[7] || (M[7] = (ve) => S.value = ve),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              M[23] || (M[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", _v, [
              b(ye, {
                variant: "secondary",
                onClick: M[8] || (M[8] = (ve) => E.value = !1)
              }, {
                default: i(() => [...M[24] || (M[24] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              b(ye, {
                variant: "primary",
                disabled: !S.value.trim() || N.value,
                loading: N.value,
                onClick: K
              }, {
                default: i(() => [
                  g(a(N.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : r("", !0)
      ])),
      (s(), P(et, { to: "body" }, [
        T.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: M[14] || (M[14] = Fe((ve) => T.value = !1, ["self"]))
        }, [
          e("div", $v, [
            e("div", Cv, [
              M[25] || (M[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: M[10] || (M[10] = (ve) => T.value = !1)
              }, "✕")
            ]),
            e("div", xv, [
              e("div", Sv, [
                M[26] || (M[26] = e("label", null, "Download URL", -1)),
                b(bt, {
                  modelValue: I.value,
                  "onUpdate:modelValue": M[11] || (M[11] = (ve) => I.value = ve),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", Iv, [
                M[27] || (M[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                b(bt, {
                  modelValue: Y.value,
                  "onUpdate:modelValue": M[12] || (M[12] = (ve) => Y.value = ve),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              M[28] || (M[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", Ev, [
              b(ye, {
                variant: "secondary",
                onClick: M[13] || (M[13] = (ve) => T.value = !1)
              }, {
                default: i(() => [...M[29] || (M[29] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              b(ye, {
                variant: "primary",
                disabled: !I.value.trim() || !Y.value.trim(),
                onClick: ee
              }, {
                default: i(() => [...M[30] || (M[30] = [
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
}), Rv = /* @__PURE__ */ se(Pv, [["__scopeId", "data-v-73b78d84"]]), Tv = { class: "node-details" }, Mv = { class: "status-row" }, Dv = {
  key: 0,
  class: "detail-row"
}, Lv = { class: "value" }, zv = { class: "detail-row" }, Uv = { class: "value" }, Nv = {
  key: 1,
  class: "detail-row"
}, Ov = { class: "value mono" }, Av = {
  key: 2,
  class: "detail-row"
}, Fv = ["href"], Bv = {
  key: 3,
  class: "detail-row"
}, Vv = { class: "value mono small" }, Wv = { class: "detail-row" }, Gv = {
  key: 0,
  class: "value"
}, jv = {
  key: 1,
  class: "workflow-list"
}, Kv = /* @__PURE__ */ te({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, l = c, p = z(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), v = z(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), u = z(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (f, d) => (s(), P(Ye, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (m) => l("close"))
    }, {
      body: i(() => [
        e("div", Tv, [
          e("div", Mv, [
            d[2] || (d[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: fe(["status-badge", p.value])
            }, a(v.value), 3)
          ]),
          t.node.version ? (s(), o("div", Dv, [
            d[3] || (d[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", Lv, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : r("", !0),
          e("div", zv, [
            d[4] || (d[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", Uv, a(u.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", Nv, [
            d[5] || (d[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", Ov, a(t.node.registry_id), 1)
          ])) : r("", !0),
          t.node.repository ? (s(), o("div", Av, [
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
            ], 8, Fv)
          ])) : r("", !0),
          t.node.download_url ? (s(), o("div", Bv, [
            d[8] || (d[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", Vv, a(t.node.download_url), 1)
          ])) : r("", !0),
          d[10] || (d[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Wv, [
            d[9] || (d[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", Gv, " Not used in any workflows ")) : (s(), o("div", jv, [
              (s(!0), o(W, null, ae(t.node.used_in_workflows, (m) => (s(), o("span", {
                key: m,
                class: "workflow-tag"
              }, a(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: i(() => [
        b(ye, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (m) => l("close"))
        }, {
          default: i(() => [...d[11] || (d[11] = [
            g(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Hv = /* @__PURE__ */ se(Kv, [["__scopeId", "data-v-b342f626"]]), qv = { class: "dialog-message" }, Yv = {
  key: 0,
  class: "dialog-details"
}, Jv = {
  key: 1,
  class: "dialog-warning"
}, Xv = /* @__PURE__ */ te({
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
    return (c, n) => (s(), P(Ye, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (l) => c.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", qv, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", Yv, [
          (s(!0), o(W, null, ae(t.details, (l, p) => (s(), o("div", {
            key: p,
            class: "detail-item"
          }, " • " + a(l), 1))), 128))
        ])) : r("", !0),
        t.warning ? (s(), o("p", Jv, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          g(" " + a(t.warning), 1)
        ])) : r("", !0)
      ]),
      footer: i(() => [
        b(ye, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (l) => c.$emit("cancel"))
        }, {
          default: i(() => [
            g(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), P(ye, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (l) => c.$emit("secondary"))
        }, {
          default: i(() => [
            g(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : r("", !0),
        b(ye, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (l) => c.$emit("confirm"))
        }, {
          default: i(() => [
            g(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Fs = /* @__PURE__ */ se(Xv, [["__scopeId", "data-v-3670b9f5"]]), Qv = { class: "mismatch-warning" }, Zv = { class: "version-mismatch" }, ef = { class: "version-actual" }, tf = { class: "version-expected" }, sf = { key: 0 }, of = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, nf = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, af = /* @__PURE__ */ te({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(t, { emit: c }) {
    const n = t, l = c, { getNodes: p, trackNodeAsDev: v, installNode: u, uninstallNode: f } = We(), d = h({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), m = h(!1), w = h(null), _ = h(""), k = h(!1), y = h(null), R = h(null), E = z(() => {
      if (!_.value.trim()) return d.value.nodes;
      const ie = _.value.toLowerCase();
      return d.value.nodes.filter(
        (K) => {
          var ee, q;
          return K.name.toLowerCase().includes(ie) || ((ee = K.description) == null ? void 0 : ee.toLowerCase().includes(ie)) || ((q = K.repository) == null ? void 0 : q.toLowerCase().includes(ie));
        }
      );
    }), $ = z(
      () => E.value.filter((ie) => ie.installed && ie.tracked)
    ), S = z(
      () => E.value.filter((ie) => !ie.installed && ie.tracked)
    ), N = z(
      () => E.value.filter((ie) => ie.installed && !ie.tracked)
    );
    function T(ie) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[ie] || ie;
    }
    const I = z(() => n.versionMismatches.length > 0);
    function Y(ie) {
      return !ie.used_in_workflows || ie.used_in_workflows.length === 0 ? "Not used in any workflows" : ie.used_in_workflows.length === 1 ? ie.used_in_workflows[0] : `${ie.used_in_workflows.length} workflows`;
    }
    function B(ie) {
      y.value = ie;
    }
    function U() {
      l("open-node-manager");
    }
    function C(ie) {
      R.value = {
        title: "Track as Development Node",
        message: `Track "${ie}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          R.value = null;
          try {
            m.value = !0;
            const K = await v(ie);
            K.status === "success" ? (l("toast", `✓ Node "${ie}" tracked as development`, "success"), await le()) : l("toast", `Failed to track node: ${K.message || "Unknown error"}`, "error");
          } catch (K) {
            l("toast", `Error tracking node: ${K instanceof Error ? K.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function x(ie) {
      R.value = {
        title: "Remove Untracked Node",
        message: `Remove "${ie}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          R.value = null;
          try {
            m.value = !0;
            const K = await f(ie);
            K.status === "success" ? (l("toast", `✓ Node "${ie}" removed`, "success"), await le()) : l("toast", `Failed to remove node: ${K.message || "Unknown error"}`, "error");
          } catch (K) {
            l("toast", `Error removing node: ${K instanceof Error ? K.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function L(ie) {
      R.value = {
        title: "Install Missing Node",
        message: `Install "${ie}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          R.value = null;
          try {
            m.value = !0;
            const K = await u(ie);
            K.status === "success" ? (l("toast", `✓ Node "${ie}" installed`, "success"), await le()) : l("toast", `Failed to install node: ${K.message || "Unknown error"}`, "error");
          } catch (K) {
            l("toast", `Error installing node: ${K instanceof Error ? K.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    async function le() {
      m.value = !0, w.value = null;
      try {
        d.value = await p();
      } catch (ie) {
        w.value = ie instanceof Error ? ie.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return Ne(le), (ie, K) => (s(), o(W, null, [
      b(nt, null, {
        header: i(() => [
          b(at, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: K[0] || (K[0] = (ee) => k.value = !0)
          }, {
            actions: i(() => [
              b(X, {
                variant: "primary",
                size: "sm",
                onClick: U
              }, {
                default: i(() => [...K[7] || (K[7] = [
                  g(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          b(es, {
            modelValue: _.value,
            "onUpdate:modelValue": K[1] || (K[1] = (ee) => _.value = ee),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          m.value ? (s(), P(Ut, {
            key: 0,
            message: "Loading nodes..."
          })) : w.value ? (s(), P(Nt, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: le
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            d.value.total_count ? (s(), P(fs, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                g(a(d.value.installed_count) + " installed ", 1),
                d.value.missing_count ? (s(), o(W, { key: 0 }, [
                  g(" • " + a(d.value.missing_count) + " missing", 1)
                ], 64)) : r("", !0),
                d.value.untracked_count ? (s(), o(W, { key: 1 }, [
                  g(" • " + a(d.value.untracked_count) + " untracked", 1)
                ], 64)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            I.value ? (s(), P(Ae, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: t.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                e("div", Qv, [
                  K[8] || (K[8] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (s(!0), o(W, null, ae(t.versionMismatches, (ee) => (s(), P(ot, {
                  key: ee.name,
                  status: "warning"
                }, {
                  icon: i(() => [...K[9] || (K[9] = [
                    g("⚠", -1)
                  ])]),
                  title: i(() => [
                    g(a(ee.name), 1)
                  ]),
                  subtitle: i(() => [
                    e("span", Zv, [
                      e("span", ef, a(ee.actual), 1),
                      K[10] || (K[10] = e("span", { class: "version-arrow" }, "→", -1)),
                      e("span", tf, a(ee.expected), 1)
                    ])
                  ]),
                  actions: i(() => [
                    b(X, {
                      variant: "warning",
                      size: "sm",
                      onClick: K[2] || (K[2] = (q) => l("repair-environment"))
                    }, {
                      default: i(() => [...K[11] || (K[11] = [
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
            N.value.length ? (s(), P(Ae, {
              key: 2,
              title: "UNTRACKED",
              count: N.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(W, null, ae(N.value, (ee) => (s(), P(ot, {
                  key: ee.name,
                  status: "warning"
                }, {
                  icon: i(() => [...K[12] || (K[12] = [
                    g("?", -1)
                  ])]),
                  title: i(() => [
                    g(a(ee.name), 1)
                  ]),
                  subtitle: i(() => [...K[13] || (K[13] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: i(() => [
                    b(Ge, {
                      label: "Used by:",
                      value: Y(ee)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    b(X, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (q) => B(ee)
                    }, {
                      default: i(() => [...K[14] || (K[14] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(X, {
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => C(ee.name)
                    }, {
                      default: i(() => [...K[15] || (K[15] = [
                        g(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(X, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (q) => x(ee.name)
                    }, {
                      default: i(() => [...K[16] || (K[16] = [
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
            $.value.length ? (s(), P(Ae, {
              key: 3,
              title: "INSTALLED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(W, null, ae($.value, (ee) => (s(), P(ot, {
                  key: ee.name,
                  status: "synced"
                }, {
                  icon: i(() => [
                    g(a(ee.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: i(() => [
                    g(a(ee.name), 1)
                  ]),
                  subtitle: i(() => [
                    ee.version ? (s(), o("span", sf, a(ee.source === "development" ? "" : "v") + a(ee.version), 1)) : (s(), o("span", of, "version unknown")),
                    e("span", nf, " • " + a(T(ee.source)), 1)
                  ]),
                  details: i(() => [
                    b(Ge, {
                      label: "Used by:",
                      value: Y(ee)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    b(X, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (q) => B(ee)
                    }, {
                      default: i(() => [...K[17] || (K[17] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(X, {
                      variant: "secondary",
                      size: "xs",
                      onClick: U
                    }, {
                      default: i(() => [...K[18] || (K[18] = [
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
            S.value.length ? (s(), P(Ae, {
              key: 4,
              title: "MISSING",
              count: S.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(W, null, ae(S.value, (ee) => (s(), P(ot, {
                  key: ee.name,
                  status: "missing"
                }, {
                  icon: i(() => [...K[19] || (K[19] = [
                    g("!", -1)
                  ])]),
                  title: i(() => [
                    g(a(ee.name), 1)
                  ]),
                  subtitle: i(() => [...K[20] || (K[20] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: i(() => [
                    b(Ge, {
                      label: "Required by:",
                      value: Y(ee)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    b(X, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (q) => B(ee)
                    }, {
                      default: i(() => [...K[21] || (K[21] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(X, {
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => L(ee.name)
                    }, {
                      default: i(() => [...K[22] || (K[22] = [
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
            !$.value.length && !S.value.length && !N.value.length ? (s(), P(_t, {
              key: 5,
              icon: "📭",
              message: _.value ? `No nodes match '${_.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b($t, {
        show: k.value,
        title: "About Custom Nodes",
        onClose: K[4] || (K[4] = (ee) => k.value = !1)
      }, {
        content: i(() => [...K[23] || (K[23] = [
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
        actions: i(() => [
          b(X, {
            variant: "primary",
            onClick: K[3] || (K[3] = (ee) => k.value = !1)
          }, {
            default: i(() => [...K[24] || (K[24] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      y.value ? (s(), P(Hv, {
        key: 0,
        node: y.value,
        onClose: K[5] || (K[5] = (ee) => y.value = null)
      }, null, 8, ["node"])) : r("", !0),
      R.value ? (s(), P(Fs, {
        key: 1,
        title: R.value.title,
        message: R.value.message,
        warning: R.value.warning,
        "confirm-label": R.value.confirmLabel,
        destructive: R.value.destructive,
        onConfirm: R.value.onConfirm,
        onCancel: K[6] || (K[6] = (ee) => R.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : r("", !0)
    ], 64));
  }
}), lf = /* @__PURE__ */ se(af, [["__scopeId", "data-v-1555a802"]]);
function lo(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const rf = { class: "remote-url-display" }, df = ["title"], cf = ["title"], uf = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, mf = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, vf = /* @__PURE__ */ te({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = h(!1), l = z(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const v = c.url.slice(0, Math.floor(c.maxLength * 0.6)), u = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${v}...${u}`;
    });
    async function p() {
      try {
        await navigator.clipboard.writeText(c.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy URL:", v);
      }
    }
    return (v, u) => (s(), o("div", rf, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(l.value), 9, df),
      e("button", {
        class: fe(["copy-btn", { copied: n.value }]),
        onClick: p,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", mf, [...u[1] || (u[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", uf, [...u[0] || (u[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, cf)
    ]));
  }
}), ff = /* @__PURE__ */ se(vf, [["__scopeId", "data-v-7768a58d"]]), pf = { class: "remote-title" }, gf = {
  key: 0,
  class: "default-badge"
}, hf = {
  key: 1,
  class: "sync-badge"
}, yf = {
  key: 0,
  class: "ahead"
}, wf = {
  key: 1,
  class: "behind"
}, kf = {
  key: 1,
  class: "synced"
}, bf = ["href"], _f = {
  key: 1,
  class: "remote-url-text"
}, $f = /* @__PURE__ */ te({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const c = t, n = z(() => c.fetchingRemote === c.remote.name), l = z(() => c.remote.is_default), p = z(() => c.syncStatus && c.syncStatus.behind > 0), v = z(() => c.syncStatus && c.syncStatus.ahead > 0), u = z(() => c.remote.push_url !== c.remote.fetch_url), f = z(() => {
      const m = c.remote.fetch_url, w = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return w ? `https://${w[1]}/${w[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), d = z(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, w) => (s(), P(ot, {
      status: l.value ? "synced" : void 0
    }, Kt({
      icon: i(() => [
        g(a(l.value ? "🔗" : "🌐"), 1)
      ]),
      title: i(() => [
        e("div", pf, [
          e("span", null, a(t.remote.name), 1),
          l.value ? (s(), o("span", gf, "DEFAULT")) : r("", !0),
          t.syncStatus ? (s(), o("span", hf, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(W, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", yf, "↑" + a(t.syncStatus.ahead), 1)) : r("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", wf, "↓" + a(t.syncStatus.behind), 1)) : r("", !0)
            ], 64)) : (s(), o("span", kf, "✓ synced"))
          ])) : r("", !0)
        ])
      ]),
      subtitle: i(() => [
        f.value ? (s(), o("a", {
          key: 0,
          href: f.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: w[0] || (w[0] = Fe(() => {
          }, ["stop"]))
        }, a(d.value), 9, bf)) : (s(), o("span", _f, a(d.value), 1))
      ]),
      actions: i(() => [
        b(X, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: w[1] || (w[1] = (_) => m.$emit("fetch", t.remote.name))
        }, {
          default: i(() => [...w[6] || (w[6] = [
            g(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        b(X, {
          variant: p.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: w[2] || (w[2] = (_) => m.$emit("pull", t.remote.name))
        }, {
          default: i(() => [
            g(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(X, {
          variant: v.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: w[3] || (w[3] = (_) => m.$emit("push", t.remote.name))
        }, {
          default: i(() => [
            g(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(X, {
          variant: "secondary",
          size: "xs",
          onClick: w[4] || (w[4] = (_) => m.$emit("edit", t.remote.name))
        }, {
          default: i(() => [...w[7] || (w[7] = [
            g(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        l.value ? r("", !0) : (s(), P(X, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: w[5] || (w[5] = (_) => m.$emit("remove", t.remote.name))
        }, {
          default: i(() => [...w[8] || (w[8] = [
            g(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      u.value ? {
        name: "details",
        fn: i(() => [
          t.remote.push_url !== t.remote.fetch_url ? (s(), P(Ge, {
            key: 0,
            label: "Push URL:"
          }, {
            default: i(() => [
              b(ff, {
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
}), Cf = /* @__PURE__ */ se($f, [["__scopeId", "data-v-8310f3a8"]]), xf = ["for"], Sf = {
  key: 0,
  class: "base-form-field-required"
}, If = { class: "base-form-field-input" }, Ef = {
  key: 1,
  class: "base-form-field-error"
}, Pf = {
  key: 2,
  class: "base-form-field-hint"
}, Rf = /* @__PURE__ */ te({
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
    const c = t, n = z(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (l, p) => (s(), o("div", {
      class: fe(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        g(a(t.label) + " ", 1),
        t.required ? (s(), o("span", Sf, "*")) : r("", !0)
      ], 8, xf)) : r("", !0),
      e("div", If, [
        Re(l.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", Ef, a(t.error), 1)) : t.hint ? (s(), o("span", Pf, a(t.hint), 1)) : r("", !0)
    ], 2));
  }
}), Is = /* @__PURE__ */ se(Rf, [["__scopeId", "data-v-9a1cf296"]]), Tf = { class: "remote-form" }, Mf = { class: "form-header" }, Df = { class: "form-body" }, Lf = {
  key: 0,
  class: "form-error"
}, zf = { class: "form-actions" }, Uf = /* @__PURE__ */ te({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const n = t, l = c, p = h({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), v = h(!1), u = h(null);
    mt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      p.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const f = z(() => p.value.name.trim() !== "" && p.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!f.value || v.value)) {
        u.value = null, v.value = !0;
        try {
          l("submit", p.value);
        } catch (m) {
          u.value = m instanceof Error ? m.message : "Failed to submit form";
        } finally {
          v.value = !1;
        }
      }
    }
    return (m, w) => (s(), o("div", Tf, [
      e("div", Mf, [
        b(ut, null, {
          default: i(() => [
            g(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Df, [
        b(Is, {
          label: "Remote Name",
          required: ""
        }, {
          default: i(() => [
            b(bt, {
              modelValue: p.value.name,
              "onUpdate:modelValue": w[0] || (w[0] = (_) => p.value.name = _),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        b(Is, {
          label: "Fetch URL",
          required: ""
        }, {
          default: i(() => [
            b(bt, {
              modelValue: p.value.fetchUrl,
              "onUpdate:modelValue": w[1] || (w[1] = (_) => p.value.fetchUrl = _),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        b(Is, { label: "Push URL (optional)" }, {
          default: i(() => [
            b(bt, {
              modelValue: p.value.pushUrl,
              "onUpdate:modelValue": w[2] || (w[2] = (_) => p.value.pushUrl = _),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (s(), o("div", Lf, a(u.value), 1)) : r("", !0)
      ]),
      e("div", zf, [
        b(X, {
          variant: "primary",
          size: "md",
          disabled: !f.value,
          loading: v.value,
          onClick: d
        }, {
          default: i(() => [
            g(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        b(X, {
          variant: "ghost",
          size: "md",
          onClick: w[3] || (w[3] = (_) => m.$emit("cancel"))
        }, {
          default: i(() => [...w[4] || (w[4] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Nf = /* @__PURE__ */ se(Uf, [["__scopeId", "data-v-56021b18"]]), Of = { class: "conflict-summary-box" }, Af = { class: "summary-header" }, Ff = { class: "summary-text" }, Bf = { key: 0 }, Vf = {
  key: 1,
  class: "all-resolved"
}, Wf = { class: "summary-progress" }, Gf = { class: "progress-bar" }, jf = { class: "progress-text" }, Kf = /* @__PURE__ */ te({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const c = t, n = z(
      () => c.conflictCount > 0 ? c.resolvedCount / c.conflictCount * 100 : 0
    );
    return (l, p) => (s(), o("div", Of, [
      e("div", Af, [
        p[0] || (p[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", Ff, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (s(), o("p", Bf, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (s(), o("p", Vf, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", Wf, [
        e("div", Gf, [
          e("div", {
            class: "progress-fill",
            style: zt({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", jf, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), Hf = /* @__PURE__ */ se(Kf, [["__scopeId", "data-v-4e9e6cc9"]]), qf = { class: "modal-header" }, Yf = { class: "modal-title" }, Jf = { class: "modal-body" }, Xf = {
  key: 0,
  class: "error-box"
}, Qf = {
  key: 0,
  class: "error-hint"
}, Zf = {
  key: 1,
  class: "loading-state"
}, ep = { class: "commit-summary" }, tp = {
  key: 0,
  class: "changes-section"
}, sp = {
  key: 0,
  class: "change-group",
  open: ""
}, op = { class: "change-count" }, np = { class: "change-list" }, ap = {
  key: 0,
  class: "conflict-badge"
}, lp = {
  key: 1,
  class: "change-group"
}, ip = { class: "change-count" }, rp = { class: "change-list" }, dp = {
  key: 2,
  class: "change-group"
}, cp = { class: "change-count" }, up = { class: "change-list" }, mp = {
  key: 2,
  class: "strategy-section"
}, vp = { class: "radio-group" }, fp = { class: "radio-option" }, pp = { class: "radio-option" }, gp = { class: "radio-option" }, hp = {
  key: 3,
  class: "up-to-date"
}, yp = { class: "modal-actions" }, Ks = "comfygit.pullModelStrategy", wp = /* @__PURE__ */ te({
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
    const n = t, l = c, p = h(localStorage.getItem(Ks) || "skip");
    mt(p, ($) => {
      localStorage.setItem(Ks, $);
    });
    const v = z(() => {
      var $;
      return (($ = n.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), u = z(() => {
      if (!n.preview) return 0;
      const $ = n.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), f = z(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), d = z(() => {
      var $;
      return u.value > 0 || f.value > 0 || ((($ = n.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), m = z(() => n.preview && lo(n.preview) ? n.preview : null), w = z(() => {
      var $;
      return (($ = m.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), _ = z(() => {
      var $;
      return (($ = n.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), k = z(
      () => w.value > 0 && _.value === w.value
    ), y = z(() => !(!n.preview || n.preview.has_uncommitted_changes || m.value && !k.value));
    function R($) {
      if (!m.value) return !1;
      const S = $.replace(/\.json$/, "");
      return m.value.workflow_conflicts.some((N) => N.name === S);
    }
    function E($) {
      const S = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      l("pull", { modelStrategy: p.value, force: $, resolutions: S });
    }
    return ($, S) => {
      var N, T;
      return s(), P(et, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[11] || (S[11] = (I) => $.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: S[10] || (S[10] = Fe(() => {
            }, ["stop"]))
          }, [
            e("div", qf, [
              e("h3", Yf, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: S[0] || (S[0] = (I) => $.$emit("close"))
              }, "✕")
            ]),
            e("div", Jf, [
              t.error ? (s(), o("div", Xf, [
                S[13] || (S[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  S[12] || (S[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  v.value ? (s(), o("p", Qf, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : r("", !0)
                ])
              ])) : t.loading ? (s(), o("div", Zf, [...S[14] || (S[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                g(" Loading preview... ", -1)
              ])])) : (N = t.preview) != null && N.has_uncommitted_changes ? (s(), o(W, { key: 2 }, [
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
              ], 64)) : t.preview ? (s(), o(W, { key: 3 }, [
                e("div", ep, [
                  S[17] || (S[17] = e("span", { class: "icon" }, "📥", -1)),
                  g(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                d.value ? (s(), o("div", tp, [
                  S[21] || (S[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  u.value > 0 ? (s(), o("details", sp, [
                    e("summary", null, [
                      S[18] || (S[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", op, a(u.value) + " changes", 1)
                    ]),
                    e("div", np, [
                      (s(!0), o(W, null, ae(t.preview.changes.workflows.added, (I) => (s(), o("div", {
                        key: "a-" + I,
                        class: "change-item add"
                      }, " + " + a(I), 1))), 128)),
                      (s(!0), o(W, null, ae(t.preview.changes.workflows.modified, (I) => (s(), o("div", {
                        key: "m-" + I,
                        class: "change-item modify"
                      }, [
                        g(" ~ " + a(I) + " ", 1),
                        R(I) ? (s(), o("span", ap, "CONFLICT")) : r("", !0)
                      ]))), 128)),
                      (s(!0), o(W, null, ae(t.preview.changes.workflows.deleted, (I) => (s(), o("div", {
                        key: "d-" + I,
                        class: "change-item delete"
                      }, " - " + a(I), 1))), 128))
                    ])
                  ])) : r("", !0),
                  f.value > 0 ? (s(), o("details", lp, [
                    e("summary", null, [
                      S[19] || (S[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", ip, a(f.value) + " to install", 1)
                    ]),
                    e("div", rp, [
                      (s(!0), o(W, null, ae(t.preview.changes.nodes.to_install, (I) => (s(), o("div", {
                        key: I,
                        class: "change-item add"
                      }, " + " + a(I), 1))), 128))
                    ])
                  ])) : r("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", dp, [
                    e("summary", null, [
                      S[20] || (S[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", cp, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", up, [
                      (s(!0), o(W, null, ae(t.preview.changes.models.referenced, (I) => (s(), o("div", {
                        key: I,
                        class: "change-item"
                      }, a(I), 1))), 128))
                    ])
                  ])) : r("", !0)
                ])) : r("", !0),
                m.value ? (s(), P(Hf, {
                  key: 1,
                  "conflict-count": w.value,
                  "resolved-count": _.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : r("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", mp, [
                  S[26] || (S[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", vp, [
                    e("label", fp, [
                      De(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[1] || (S[1] = (I) => p.value = I),
                        value: "all"
                      }, null, 512), [
                        [Rt, p.value]
                      ]),
                      S[22] || (S[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", pp, [
                      De(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[2] || (S[2] = (I) => p.value = I),
                        value: "required"
                      }, null, 512), [
                        [Rt, p.value]
                      ]),
                      S[23] || (S[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", gp, [
                      De(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[3] || (S[3] = (I) => p.value = I),
                        value: "skip"
                      }, null, 512), [
                        [Rt, p.value]
                      ]),
                      S[24] || (S[24] = e("span", null, "Skip model downloads", -1)),
                      S[25] || (S[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  S[27] || (S[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : r("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", hp, [
                  S[28] || (S[28] = e("span", { class: "icon" }, "✓", -1)),
                  g(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : r("", !0)
              ], 64)) : r("", !0)
            ]),
            e("div", yp, [
              b(X, {
                variant: "secondary",
                onClick: S[4] || (S[4] = (I) => $.$emit("close"))
              }, {
                default: i(() => [...S[29] || (S[29] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(W, { key: 0 }, [
                b(X, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: S[5] || (S[5] = (I) => E(!1))
                }, {
                  default: i(() => [...S[30] || (S[30] = [
                    g(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                b(X, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: S[6] || (S[6] = (I) => E(!0))
                }, {
                  default: i(() => [...S[31] || (S[31] = [
                    g(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (T = t.preview) != null && T.has_uncommitted_changes ? (s(), P(X, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: S[7] || (S[7] = (I) => E(!0))
              }, {
                default: i(() => [...S[32] || (S[32] = [
                  g(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(W, { key: 2 }, [
                m.value && !k.value ? (s(), P(X, {
                  key: 0,
                  variant: "primary",
                  onClick: S[8] || (S[8] = (I) => l("openConflictResolution"))
                }, {
                  default: i(() => [
                    g(" Resolve Conflicts (" + a(_.value) + "/" + a(w.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), P(X, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !y.value,
                  onClick: S[9] || (S[9] = (I) => E(!1))
                }, {
                  default: i(() => [...S[33] || (S[33] = [
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
}), kp = /* @__PURE__ */ se(wp, [["__scopeId", "data-v-300c7b2f"]]), bp = { class: "modal-header" }, _p = { class: "modal-title" }, $p = { class: "modal-body" }, Cp = {
  key: 0,
  class: "loading-state"
}, xp = {
  key: 1,
  class: "warning-box"
}, Sp = {
  key: 0,
  class: "commits-section"
}, Ip = { class: "commit-list" }, Ep = { class: "commit-hash" }, Pp = { class: "commit-message" }, Rp = { class: "commit-date" }, Tp = { class: "force-option" }, Mp = { class: "checkbox-option" }, Dp = { class: "commit-summary" }, Lp = {
  key: 0,
  class: "commits-section"
}, zp = { class: "commit-list" }, Up = { class: "commit-hash" }, Np = { class: "commit-message" }, Op = { class: "commit-date" }, Ap = {
  key: 1,
  class: "up-to-date"
}, Fp = { class: "modal-actions" }, Bp = /* @__PURE__ */ te({
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
    const n = c, l = h(!1);
    function p(v) {
      n("push", { force: v });
    }
    return (v, u) => {
      var f, d, m;
      return s(), P(et, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: u[7] || (u[7] = (w) => v.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: u[6] || (u[6] = Fe(() => {
            }, ["stop"]))
          }, [
            e("div", bp, [
              e("h3", _p, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: u[0] || (u[0] = (w) => v.$emit("close"))
              }, "✕")
            ]),
            e("div", $p, [
              t.loading ? (s(), o("div", Cp, [...u[8] || (u[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                g(" Loading preview... ", -1)
              ])])) : (f = t.preview) != null && f.has_uncommitted_changes ? (s(), o("div", xp, [...u[9] || (u[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = t.preview) != null && d.remote_has_new_commits ? (s(), o(W, { key: 2 }, [
                u[13] || (u[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (s(), o("div", Sp, [
                  u[10] || (u[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Ip, [
                    (s(!0), o(W, null, ae(t.preview.commits, (w) => (s(), o("div", {
                      key: w.hash,
                      class: "commit-item"
                    }, [
                      e("span", Ep, a(w.short_hash || w.hash.slice(0, 7)), 1),
                      e("span", Pp, a(w.message), 1),
                      e("span", Rp, a(w.date_relative || w.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                e("div", Tp, [
                  e("label", Mp, [
                    De(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": u[1] || (u[1] = (w) => l.value = w)
                    }, null, 512), [
                      [ws, l.value]
                    ]),
                    u[11] || (u[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  u[12] || (u[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(W, { key: 3 }, [
                e("div", Dp, [
                  u[14] || (u[14] = e("span", { class: "icon" }, "📤", -1)),
                  g(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", Lp, [
                  u[15] || (u[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", zp, [
                    (s(!0), o(W, null, ae(t.preview.commits, (w) => (s(), o("div", {
                      key: w.hash,
                      class: "commit-item"
                    }, [
                      e("span", Up, a(w.short_hash || w.hash.slice(0, 7)), 1),
                      e("span", Np, a(w.message), 1),
                      e("span", Op, a(w.date_relative || w.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", Ap, [
                  u[16] || (u[16] = e("span", { class: "icon" }, "✓", -1)),
                  g(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : r("", !0)
            ]),
            e("div", Fp, [
              b(X, {
                variant: "secondary",
                onClick: u[2] || (u[2] = (w) => v.$emit("close"))
              }, {
                default: i(() => [...u[17] || (u[17] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = t.preview) != null && m.remote_has_new_commits ? (s(), o(W, { key: 0 }, [
                b(X, {
                  variant: "secondary",
                  onClick: u[3] || (u[3] = (w) => v.$emit("pull-first"))
                }, {
                  default: i(() => [...u[18] || (u[18] = [
                    g(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                b(X, {
                  variant: "destructive",
                  disabled: !l.value,
                  loading: t.pushing,
                  onClick: u[4] || (u[4] = (w) => p(!0))
                }, {
                  default: i(() => [...u[19] || (u[19] = [
                    g(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), P(X, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: u[5] || (u[5] = (w) => p(!1))
              }, {
                default: i(() => [...u[20] || (u[20] = [
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
}), Vp = /* @__PURE__ */ se(Bp, [["__scopeId", "data-v-bc6ded53"]]), Wp = { class: "resolution-choice-group" }, Gp = ["disabled"], jp = ["disabled"], Kp = /* @__PURE__ */ te({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("div", Wp, [
      e("button", {
        class: fe(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (l) => c.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, Gp),
      e("button", {
        class: fe(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (l) => c.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, jp)
    ]));
  }
}), Hp = /* @__PURE__ */ se(Kp, [["__scopeId", "data-v-985715ed"]]), qp = { class: "conflict-header" }, Yp = { class: "conflict-info" }, Jp = { class: "workflow-name" }, Xp = { class: "conflict-description" }, Qp = {
  key: 0,
  class: "resolved-badge"
}, Zp = { class: "resolved-text" }, eg = { class: "conflict-hashes" }, tg = { class: "hash-item" }, sg = { class: "hash-item" }, og = { class: "conflict-actions" }, ng = /* @__PURE__ */ te({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: c }) {
    const n = t, l = c, p = h(n.resolution);
    mt(() => n.resolution, (d) => {
      p.value = d;
    }), mt(p, (d) => {
      d && l("resolve", d);
    });
    const v = z(() => p.value !== null), u = z(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), f = z(() => {
      switch (p.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (d, m) => {
      var w, _;
      return s(), o("div", {
        class: fe(["conflict-item", { resolved: v.value }])
      }, [
        e("div", qp, [
          m[2] || (m[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", Yp, [
            e("code", Jp, a(t.conflict.name) + ".json", 1),
            e("div", Xp, a(u.value), 1)
          ]),
          v.value ? (s(), o("div", Qp, [
            m[1] || (m[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", Zp, a(f.value), 1)
          ])) : r("", !0)
        ]),
        e("div", eg, [
          e("span", tg, [
            m[3] || (m[3] = g("Your: ", -1)),
            e("code", null, a(((w = t.conflict.base_hash) == null ? void 0 : w.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", sg, [
            m[4] || (m[4] = g("Theirs: ", -1)),
            e("code", null, a(((_ = t.conflict.target_hash) == null ? void 0 : _.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", og, [
          b(Hp, {
            modelValue: p.value,
            "onUpdate:modelValue": m[0] || (m[0] = (k) => p.value = k),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), ag = /* @__PURE__ */ se(ng, [["__scopeId", "data-v-506d3bbf"]]), lg = { class: "resolution-content" }, ig = {
  key: 0,
  class: "error-box"
}, rg = { class: "resolution-header" }, dg = { class: "header-stats" }, cg = { class: "stat" }, ug = { class: "stat-value" }, mg = { class: "stat resolved" }, vg = { class: "stat-value" }, fg = {
  key: 0,
  class: "stat pending"
}, pg = { class: "stat-value" }, gg = { class: "conflicts-list" }, hg = {
  key: 1,
  class: "all-resolved-message"
}, yg = /* @__PURE__ */ te({
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
    const n = t, l = c, p = z(() => n.resolutions.size), v = z(() => n.workflowConflicts.length - p.value), u = z(() => p.value === n.workflowConflicts.length), f = z(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(k) {
      const y = n.resolutions.get(k);
      return (y == null ? void 0 : y.resolution) ?? null;
    }
    function m(k, y) {
      l("resolve", k, y);
    }
    function w() {
      l("close");
    }
    function _() {
      l("apply");
    }
    return (k, y) => (s(), P(Ye, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: w
    }, {
      body: i(() => [
        e("div", lg, [
          t.error ? (s(), o("div", ig, [
            y[1] || (y[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              y[0] || (y[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : r("", !0),
          e("div", rg, [
            e("div", dg, [
              e("div", cg, [
                e("span", ug, a(t.workflowConflicts.length), 1),
                y[2] || (y[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", mg, [
                e("span", vg, a(p.value), 1),
                y[3] || (y[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              v.value > 0 ? (s(), o("div", fg, [
                e("span", pg, a(v.value), 1),
                y[4] || (y[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : r("", !0)
            ]),
            y[5] || (y[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", gg, [
            (s(!0), o(W, null, ae(t.workflowConflicts, (R) => (s(), P(ag, {
              key: R.name,
              conflict: R,
              resolution: d(R.name),
              onResolve: (E) => m(R.name, E)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          u.value ? (s(), o("div", hg, [
            y[6] || (y[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(f.value) + '" to continue.', 1)
          ])) : r("", !0)
        ])
      ]),
      footer: i(() => [
        b(ye, {
          variant: "secondary",
          onClick: w
        }, {
          default: i(() => [...y[7] || (y[7] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        y[8] || (y[8] = e("div", { class: "footer-spacer" }, null, -1)),
        b(ye, {
          variant: "primary",
          disabled: !u.value || t.validating,
          loading: t.validating,
          onClick: _
        }, {
          default: i(() => [
            g(a(f.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), wg = /* @__PURE__ */ se(yg, [["__scopeId", "data-v-c58d150d"]]), kg = { class: "node-conflict-item" }, bg = { class: "node-header" }, _g = { class: "node-name" }, $g = { class: "node-id" }, Cg = { class: "version-comparison" }, xg = { class: "version yours" }, Sg = { class: "version theirs" }, Ig = { class: "chosen-version" }, Eg = { class: "chosen" }, Pg = { class: "chosen-reason" }, Rg = { class: "affected-workflows" }, Tg = { class: "wf-source" }, Mg = { class: "wf-version" }, Dg = /* @__PURE__ */ te({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", kg, [
      e("div", bg, [
        e("code", _g, a(t.conflict.node_name), 1),
        e("span", $g, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", Cg, [
        e("div", xg, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", Sg, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", Ig, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", Eg, a(t.conflict.chosen_version), 1),
        e("span", Pg, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", Rg, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (s(!0), o(W, null, ae(t.conflict.affected_workflows, (l) => (s(), o("li", {
            key: l.name
          }, [
            e("code", null, a(l.name), 1),
            e("span", Tg, "(" + a(l.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", Mg, "needs v" + a(l.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), Lg = /* @__PURE__ */ se(Dg, [["__scopeId", "data-v-8b626725"]]), zg = { class: "validation-content" }, Ug = {
  key: 0,
  class: "compatible-message"
}, Ng = { class: "conflicts-list" }, Og = {
  key: 2,
  class: "warnings-section"
}, Ag = /* @__PURE__ */ te({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: c }) {
    const n = t, l = c, p = z(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (v, u) => (s(), P(Ye, {
      title: "Compatibility Check",
      size: "lg",
      onClose: u[3] || (u[3] = (f) => l("cancel"))
    }, {
      body: i(() => [
        e("div", zg, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (s(), o("div", Ug, [
            u[5] || (u[5] = e("span", { class: "icon" }, "✓", -1)),
            e("div", null, [
              u[4] || (u[4] = e("strong", null, "All clear!", -1)),
              e("p", null, "Your workflow choices are compatible. Ready to " + a(t.operationType) + ".", 1)
            ])
          ])) : t.validation.node_conflicts.length > 0 ? (s(), o(W, { key: 1 }, [
            u[6] || (u[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", Ng, [
              (s(!0), o(W, null, ae(t.validation.node_conflicts, (f) => (s(), P(Lg, {
                key: f.node_id,
                conflict: f
              }, null, 8, ["conflict"]))), 128))
            ]),
            u[7] || (u[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : r("", !0),
          t.validation.warnings.length > 0 ? (s(), o("div", Og, [
            u[8] || (u[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (s(!0), o(W, null, ae(t.validation.warnings, (f, d) => (s(), o("li", { key: d }, a(f), 1))), 128))
            ])
          ])) : r("", !0)
        ])
      ]),
      footer: i(() => [
        b(ye, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (f) => l("cancel"))
        }, {
          default: i(() => [...u[9] || (u[9] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u[11] || (u[11] = e("div", { class: "footer-spacer" }, null, -1)),
        b(ye, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (f) => l("goBack"))
        }, {
          default: i(() => [...u[10] || (u[10] = [
            g(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        b(ye, {
          variant: "primary",
          loading: t.executing,
          onClick: u[2] || (u[2] = (f) => l("proceed"))
        }, {
          default: i(() => [
            g(a(p.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), Fg = /* @__PURE__ */ se(Ag, [["__scopeId", "data-v-fefd26ed"]]), Bg = { key: 0 }, Vg = /* @__PURE__ */ te({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: c }) {
    const n = c, {
      getRemotes: l,
      addRemote: p,
      removeRemote: v,
      updateRemoteUrl: u,
      fetchRemote: f,
      getRemoteSyncStatus: d,
      getPullPreview: m,
      pullFromRemote: w,
      getPushPreview: _,
      pushToRemote: k,
      validateMerge: y
    } = We(), R = h([]), E = h(null), $ = h({}), S = h(!1), N = h(null), T = h(""), I = h(!1), Y = h(null), B = h(!1), U = h("add"), C = h({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), x = z(() => {
      if (!T.value.trim()) return R.value;
      const G = T.value.toLowerCase();
      return R.value.filter(
        (ne) => ne.name.toLowerCase().includes(G) || ne.fetch_url.toLowerCase().includes(G) || ne.push_url.toLowerCase().includes(G)
      );
    });
    async function L() {
      S.value = !0, N.value = null;
      try {
        const G = await l();
        R.value = G.remotes, E.value = G.current_branch_tracking || null, await Promise.all(
          G.remotes.map(async (ne) => {
            const xe = await d(ne.name);
            xe && ($.value[ne.name] = xe);
          })
        );
      } catch (G) {
        N.value = G instanceof Error ? G.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function le() {
      U.value = "add", C.value = { name: "", fetchUrl: "", pushUrl: "" }, B.value = !0;
    }
    function ie(G) {
      const ne = R.value.find((xe) => xe.name === G);
      ne && (U.value = "edit", C.value = {
        name: ne.name,
        fetchUrl: ne.fetch_url,
        pushUrl: ne.push_url
      }, B.value = !0);
    }
    async function K(G) {
      try {
        U.value === "add" ? await p(G.name, G.fetchUrl) : await u(G.name, G.fetchUrl, G.pushUrl || void 0), B.value = !1, await L();
      } catch (ne) {
        N.value = ne instanceof Error ? ne.message : "Operation failed";
      }
    }
    function ee() {
      B.value = !1, C.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function q(G) {
      Y.value = G;
      try {
        await f(G);
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
          await v(G), await L();
        } catch (ne) {
          N.value = ne instanceof Error ? ne.message : "Failed to remove remote";
        }
    }
    function A() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const M = h("idle"), ve = z(() => M.value === "pull_preview"), oe = z(
      () => M.value === "resolving" || M.value === "validating"
    ), ke = z(
      () => M.value === "validation_review" || M.value === "executing"
    ), _e = h(!1), Le = h(null), Ue = h(!1), me = h(null), ge = h(!1), Te = h(null), de = h(null), Q = h(/* @__PURE__ */ new Map()), Me = h(null), pe = h(null), Je = z(() => Te.value && lo(Te.value) ? Te.value : null);
    async function tt(G) {
      me.value = G, M.value = "pull_preview", ge.value = !0, Te.value = null, de.value = null;
      try {
        Te.value = await m(G);
      } catch (ne) {
        de.value = ne instanceof Error ? ne.message : "Failed to load pull preview";
      } finally {
        ge.value = !1;
      }
    }
    function st() {
      M.value = "idle", Te.value = null, de.value = null, me.value = null;
    }
    async function Pe(G) {
      if (!me.value) return;
      M.value = "executing", de.value = null;
      const ne = me.value;
      try {
        const xe = await w(ne, G);
        if (xe.rolled_back) {
          de.value = `Pull failed and was rolled back: ${xe.error || "Unknown error"}`, M.value = "pull_preview";
          return;
        }
        qe(), M.value = "idle", n("toast", `✓ Pulled from ${ne}`, "success"), await L();
      } catch (xe) {
        de.value = xe instanceof Error ? xe.message : "Pull failed", M.value = "pull_preview";
      }
    }
    function Xe() {
      Je.value && (M.value = "resolving", pe.value = null);
    }
    function He(G, ne) {
      Q.value.set(G, { name: G, resolution: ne });
    }
    function Qe() {
      M.value = "pull_preview";
    }
    async function vt() {
      M.value = "validating", pe.value = null;
      try {
        const G = Array.from(Q.value.values());
        Me.value = await y(me.value, G), M.value = "validation_review";
      } catch (G) {
        pe.value = G instanceof Error ? G.message : "Validation failed", M.value = "resolving";
      }
    }
    async function be() {
      M.value = "executing";
      const G = me.value;
      try {
        const ne = Array.from(Q.value.values()), xe = await w(G, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: ne
        });
        if (xe.rolled_back) {
          de.value = `Pull failed and was rolled back: ${xe.error || "Unknown error"}`, M.value = "pull_preview";
          return;
        }
        qe(), M.value = "idle", n("toast", `✓ Pulled from ${G}`, "success"), await L();
      } catch (ne) {
        de.value = ne instanceof Error ? ne.message : "Pull failed", M.value = "validation_review";
      }
    }
    function je() {
      M.value = "resolving";
    }
    function it() {
      qe(), M.value = "idle";
    }
    function qe() {
      Q.value.clear(), Me.value = null, pe.value = null, de.value = null, Te.value = null, me.value = null;
    }
    async function ce(G) {
      me.value = G, _e.value = !0, ge.value = !0, Le.value = null;
      try {
        Le.value = await _(G);
      } catch (ne) {
        N.value = ne instanceof Error ? ne.message : "Failed to load push preview";
      } finally {
        ge.value = !1;
      }
    }
    function J() {
      _e.value = !1, Le.value = null, me.value = null;
    }
    async function Z(G) {
      if (!me.value) return;
      Ue.value = !0;
      const ne = me.value;
      try {
        await k(ne, G), J(), n("toast", `✓ Pushed to ${ne}`, "success"), await L();
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
    return Ne(L), (G, ne) => (s(), o(W, null, [
      b(nt, null, {
        header: i(() => [
          b(at, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: ne[0] || (ne[0] = (xe) => I.value = !0)
          }, {
            actions: i(() => [
              B.value ? r("", !0) : (s(), P(X, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: le
              }, {
                default: i(() => [...ne[3] || (ne[3] = [
                  g(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          B.value ? r("", !0) : (s(), P(es, {
            key: 0,
            modelValue: T.value,
            "onUpdate:modelValue": ne[1] || (ne[1] = (xe) => T.value = xe),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: i(() => [
          S.value ? (s(), P(Ut, {
            key: 0,
            message: "Loading remotes..."
          })) : N.value ? (s(), P(Nt, {
            key: 1,
            message: N.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            B.value ? (s(), P(Nf, {
              key: 0,
              mode: U.value,
              "remote-name": C.value.name,
              "fetch-url": C.value.fetchUrl,
              "push-url": C.value.pushUrl,
              onSubmit: K,
              onCancel: ee
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : r("", !0),
            R.value.length && !B.value ? (s(), P(fs, {
              key: 1,
              variant: "compact"
            }, {
              default: i(() => [
                g(" Total: " + a(R.value.length) + " remote" + a(R.value.length !== 1 ? "s" : "") + " ", 1),
                E.value ? (s(), o("span", Bg, " • Tracking: " + a(E.value.remote) + "/" + a(E.value.branch), 1)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            x.value.length && !B.value ? (s(), P(Ae, {
              key: 2,
              title: "REMOTES",
              count: x.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, ae(x.value, (xe) => (s(), P(Cf, {
                  key: xe.name,
                  remote: xe,
                  "sync-status": $.value[xe.name],
                  "fetching-remote": Y.value,
                  onFetch: q,
                  onEdit: ie,
                  onRemove: O,
                  onPull: tt,
                  onPush: ce
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !x.value.length && !B.value ? (s(), P(_t, {
              key: 3,
              icon: "🌐",
              message: T.value ? `No remotes match '${T.value}'` : "No remotes configured."
            }, {
              actions: i(() => [
                b(X, {
                  variant: "primary",
                  onClick: le
                }, {
                  default: i(() => [...ne[4] || (ne[4] = [
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
      b($t, {
        show: I.value,
        title: "About Git Remotes",
        onClose: ne[2] || (ne[2] = (xe) => I.value = !1)
      }, {
        content: i(() => [...ne[5] || (ne[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            g(" The "),
            e("strong", null, '"origin"'),
            g(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: i(() => [
          b(X, {
            variant: "link",
            onClick: A
          }, {
            default: i(() => [...ne[6] || (ne[6] = [
              g(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b(kp, {
        show: ve.value,
        "remote-name": me.value || "",
        preview: Te.value,
        loading: ge.value,
        pulling: M.value === "executing",
        error: de.value,
        "conflict-resolutions": Q.value,
        onClose: st,
        onPull: Pe,
        onOpenConflictResolution: Xe
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      b(Vp, {
        show: _e.value,
        "remote-name": me.value || "",
        preview: Le.value,
        loading: ge.value,
        pushing: Ue.value,
        onClose: J,
        onPush: Z,
        onPullFirst: D
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      oe.value && Je.value ? (s(), P(wg, {
        key: 0,
        "workflow-conflicts": Je.value.workflow_conflicts,
        resolutions: Q.value,
        "operation-type": "pull",
        validating: M.value === "validating",
        error: pe.value,
        onClose: Qe,
        onResolve: He,
        onApply: vt
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : r("", !0),
      ke.value && Me.value ? (s(), P(Fg, {
        key: 1,
        validation: Me.value,
        "operation-type": "pull",
        executing: M.value === "executing",
        onProceed: be,
        onGoBack: je,
        onCancel: it
      }, null, 8, ["validation", "executing"])) : r("", !0)
    ], 64));
  }
}), Wg = /* @__PURE__ */ se(Vg, [["__scopeId", "data-v-9ae3b76d"]]), Gg = { class: "setting-info" }, jg = { class: "setting-label" }, Kg = {
  key: 0,
  class: "required-marker"
}, Hg = {
  key: 0,
  class: "setting-description"
}, qg = { class: "setting-control" }, Yg = /* @__PURE__ */ te({
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
      e("div", Gg, [
        e("div", jg, [
          g(a(t.label) + " ", 1),
          t.required ? (s(), o("span", Kg, "*")) : r("", !0)
        ]),
        t.description ? (s(), o("div", Hg, a(t.description), 1)) : r("", !0)
      ]),
      e("div", qg, [
        Re(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Es = /* @__PURE__ */ se(Yg, [["__scopeId", "data-v-cb5d236c"]]), Jg = { class: "toggle" }, Xg = ["checked", "disabled"], Qg = /* @__PURE__ */ te({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", Jg, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (l) => c.$emit("update:modelValue", l.target.checked)),
        class: "toggle-input"
      }, null, 40, Xg),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Zg = /* @__PURE__ */ se(Qg, [["__scopeId", "data-v-71c0f550"]]), eh = { class: "workspace-settings-content" }, th = { class: "settings-section" }, sh = { class: "path-setting" }, oh = { class: "path-value" }, nh = { class: "path-setting" }, ah = { class: "path-value" }, lh = { class: "settings-section" }, ih = { class: "settings-section" }, rh = { class: "settings-section" }, dh = /* @__PURE__ */ te({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(t, { expose: c, emit: n }) {
    const l = t, p = n, { getConfig: v, updateConfig: u } = We(), f = h(!1), d = h(null), m = h(null), w = h(null), _ = h(null), k = h(""), y = h(""), R = h(!1);
    function E(B) {
      return B.join(" ");
    }
    function $(B) {
      return B.trim() ? B.trim().split(/\s+/) : [];
    }
    const S = z(() => {
      if (!_.value) return !1;
      const B = k.value !== (_.value.civitai_api_key || ""), U = y.value !== E(_.value.comfyui_extra_args || []);
      return B || U;
    });
    async function N() {
      f.value = !0, d.value = null;
      try {
        w.value = await v(l.workspacePath || void 0), _.value = { ...w.value }, k.value = w.value.civitai_api_key || "", y.value = E(w.value.comfyui_extra_args || []);
        const B = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        R.value = B === "true";
      } catch (B) {
        d.value = B instanceof Error ? B.message : "Failed to load settings";
      } finally {
        f.value = !1;
      }
    }
    async function T() {
      var B, U;
      m.value = null;
      try {
        const C = {};
        k.value !== (((B = _.value) == null ? void 0 : B.civitai_api_key) || "") && (C.civitai_api_key = k.value || null), y.value !== E(((U = _.value) == null ? void 0 : U.comfyui_extra_args) || []) && (C.comfyui_extra_args = $(y.value)), await u(C, l.workspacePath || void 0), await N(), m.value = { type: "success", message: "Settings saved successfully" }, p("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (C) {
        const x = C instanceof Error ? C.message : "Failed to save settings";
        m.value = { type: "error", message: x }, p("error", x);
      }
    }
    function I() {
      _.value && (k.value = _.value.civitai_api_key || "", y.value = E(_.value.comfyui_extra_args || []), m.value = null);
    }
    function Y(B) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(B)), console.log("[ComfyGit] Auto-refresh setting saved:", B);
    }
    return c({
      saveSettings: T,
      resetSettings: I,
      hasChanges: S,
      loadSettings: N
    }), Ne(N), (B, U) => (s(), o("div", eh, [
      f.value ? (s(), P(Ut, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (s(), P(Nt, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: N
      }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
        b(Ae, { title: "WORKSPACE PATHS" }, {
          default: i(() => {
            var C, x;
            return [
              e("div", th, [
                e("div", sh, [
                  U[3] || (U[3] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                  U[4] || (U[4] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  e("div", oh, a(((C = w.value) == null ? void 0 : C.workspace_path) || "Loading..."), 1)
                ]),
                e("div", nh, [
                  U[5] || (U[5] = e("div", { class: "path-label" }, "Models Directory", -1)),
                  U[6] || (U[6] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  e("div", ah, a(((x = w.value) == null ? void 0 : x.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        b(Ae, { title: "API CREDENTIALS" }, {
          default: i(() => [
            e("div", lh, [
              b(Es, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: i(() => [
                  b(ks, {
                    modelValue: k.value,
                    "onUpdate:modelValue": U[0] || (U[0] = (C) => k.value = C),
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
        b(Ae, { title: "COMFYUI SETTINGS" }, {
          default: i(() => [
            e("div", ih, [
              b(Es, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: i(() => [
                  b(ks, {
                    modelValue: y.value,
                    "onUpdate:modelValue": U[1] || (U[1] = (C) => y.value = C),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              U[7] || (U[7] = e("div", { class: "setting-hint" }, [
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
        b(Ae, { title: "UI SETTINGS" }, {
          default: i(() => [
            e("div", rh, [
              b(Es, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: i(() => [
                  b(Zg, {
                    modelValue: R.value,
                    "onUpdate:modelValue": [
                      U[2] || (U[2] = (C) => R.value = C),
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
        m.value ? (s(), P(fs, {
          key: 0,
          variant: (m.value.type === "success", "compact")
        }, {
          default: i(() => [
            e("span", {
              style: zt({ color: m.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, a(m.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : r("", !0)
      ], 64))
    ]));
  }
}), io = /* @__PURE__ */ se(dh, [["__scopeId", "data-v-9f44552d"]]), ch = /* @__PURE__ */ te({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const c = h(null);
    function n() {
      console.log("[ComfyGit] Settings saved");
    }
    return (l, p) => (s(), P(nt, null, {
      header: i(() => [
        b(at, { title: "WORKSPACE SETTINGS" }, {
          actions: i(() => {
            var v, u;
            return [
              b(X, {
                variant: "primary",
                size: "sm",
                disabled: !((v = c.value) != null && v.hasChanges),
                onClick: p[0] || (p[0] = (f) => {
                  var d;
                  return (d = c.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: i(() => [...p[2] || (p[2] = [
                  g(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (u = c.value) != null && u.hasChanges ? (s(), P(X, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: p[1] || (p[1] = (f) => {
                  var d;
                  return (d = c.value) == null ? void 0 : d.resetSettings();
                })
              }, {
                default: i(() => [...p[3] || (p[3] = [
                  g(" Reset ", -1)
                ])]),
                _: 1
              })) : r("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: i(() => [
        b(io, {
          ref_key: "contentRef",
          ref: c,
          onSaved: n
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), uh = { class: "base-tabs" }, mh = ["disabled", "onClick"], vh = {
  key: 0,
  class: "base-tabs__badge"
}, fh = /* @__PURE__ */ te({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: c }) {
    const n = t, l = c;
    function p(v) {
      var u;
      (u = n.tabs.find((f) => f.id === v)) != null && u.disabled || l("update:modelValue", v);
    }
    return (v, u) => (s(), o("div", uh, [
      (s(!0), o(W, null, ae(t.tabs, (f) => (s(), o("button", {
        key: f.id,
        class: fe([
          "base-tabs__tab",
          {
            active: t.modelValue === f.id,
            disabled: f.disabled
          }
        ]),
        disabled: f.disabled,
        onClick: (d) => p(f.id)
      }, [
        g(a(f.label) + " ", 1),
        f.badge ? (s(), o("span", vh, a(f.badge), 1)) : r("", !0)
      ], 10, mh))), 128))
    ]));
  }
}), ro = /* @__PURE__ */ se(fh, [["__scopeId", "data-v-ad5e6cad"]]), ph = { class: "log-viewer-wrapper" }, gh = ["disabled", "title"], hh = /* @__PURE__ */ te({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(t) {
    const c = t, n = h(null), l = h("idle"), p = z(() => c.logs.map((m) => ({
      text: c.rawFormat || !m.timestamp ? m.message : `${m.timestamp} - ${m.name} - ${m.level} - ${m.func}:${m.line} - ${m.message}`,
      level: m.level
    })));
    async function v() {
      var w;
      await Qs();
      const m = (w = n.value) == null ? void 0 : w.closest(".panel-layout-content");
      m && (m.scrollTop = m.scrollHeight);
    }
    Ne(v), mt(() => c.logs, v);
    async function u() {
      if (p.value.length === 0) return;
      const m = p.value.map((w) => w.text).join(`
`);
      try {
        await navigator.clipboard.writeText(m), l.value = "copied", setTimeout(() => {
          l.value = "idle";
        }, 2e3);
      } catch (w) {
        console.error("Failed to copy logs:", w);
      }
    }
    function f(m) {
      (m.ctrlKey || m.metaKey) && m.key === "c" && m.stopPropagation();
    }
    function d(m) {
      m.stopPropagation();
    }
    return (m, w) => (s(), o("div", ph, [
      e("div", {
        ref_key: "logOutputElement",
        ref: n,
        class: "log-output",
        onKeydown: f,
        onCopy: d,
        tabindex: "0"
      }, [
        e("button", {
          class: "copy-overlay-btn",
          onClick: u,
          disabled: l.value !== "idle",
          title: l.value === "copied" ? "Copied!" : "Copy all logs"
        }, a(l.value === "copied" ? "Copied!" : "Copy"), 9, gh),
        (s(!0), o(W, null, ae(p.value, (_, k) => (s(), o("div", {
          key: k,
          class: fe(`log-line log-level-${_.level.toLowerCase()}`)
        }, a(_.text), 3))), 128))
      ], 544)
    ]));
  }
}), co = /* @__PURE__ */ se(hh, [["__scopeId", "data-v-c0cc6d21"]]), yh = /* @__PURE__ */ te({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const {
      getWorkspaceLogs: c,
      getWorkspaceLogPath: n,
      getOrchestratorLogs: l,
      getOrchestratorLogPath: p,
      openFile: v
    } = We(), u = h("workspace"), f = h([]), d = h(!1), m = h(null), w = h(!1), _ = h(null), k = h(null), y = h(!1), R = z(() => u.value === "workspace" ? _.value : k.value);
    async function E() {
      d.value = !0, m.value = null;
      try {
        u.value === "workspace" ? f.value = await c(void 0, 500) : f.value = await l(void 0, 500);
      } catch (N) {
        m.value = N instanceof Error ? N.message : `Failed to load ${u.value} logs`;
      } finally {
        d.value = !1;
      }
    }
    async function $() {
      try {
        const [N, T] = await Promise.all([
          n(),
          p()
        ]);
        N.exists && (_.value = N.path), T.exists && (k.value = T.path);
      } catch {
      }
    }
    async function S() {
      if (R.value) {
        y.value = !0;
        try {
          await v(R.value);
        } catch (N) {
          console.error("Failed to open log file:", N);
        } finally {
          y.value = !1;
        }
      }
    }
    return mt(u, () => {
      E();
    }), Ne(() => {
      E(), $();
    }), (N, T) => (s(), o(W, null, [
      b(nt, null, {
        header: i(() => [
          b(at, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (I) => w.value = !0)
          }, {
            actions: i(() => [
              b(X, {
                variant: "secondary",
                size: "sm",
                onClick: S,
                disabled: !R.value || y.value,
                title: "Open log file in default editor"
              }, {
                default: i(() => [
                  g(a(y.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(X, {
                variant: "secondary",
                size: "sm",
                onClick: E,
                disabled: d.value
              }, {
                default: i(() => [
                  g(a(d.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          b(ro, {
            modelValue: u.value,
            "onUpdate:modelValue": T[1] || (T[1] = (I) => u.value = I),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          d.value ? (s(), P(Ut, {
            key: 0,
            message: `Loading ${u.value} logs...`
          }, null, 8, ["message"])) : m.value ? (s(), P(Nt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            f.value.length === 0 ? (s(), P(_t, {
              key: 0,
              icon: "📝",
              message: `No ${u.value} logs available`
            }, null, 8, ["message"])) : (s(), P(co, {
              key: 1,
              logs: f.value,
              "raw-format": u.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      b($t, {
        show: w.value,
        title: "About Logs",
        onClose: T[3] || (T[3] = (I) => w.value = !1)
      }, {
        content: i(() => [...T[4] || (T[4] = [
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
        actions: i(() => [
          b(X, {
            variant: "primary",
            onClick: T[2] || (T[2] = (I) => w.value = !1)
          }, {
            default: i(() => [...T[5] || (T[5] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), wh = /* @__PURE__ */ te({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n, getEnvironmentLogPath: l, openFile: p } = We(), v = h([]), u = h(!1), f = h(null), d = h(!1), m = h("production"), w = h(null), _ = h(!1);
    async function k() {
      u.value = !0, f.value = null;
      try {
        v.value = await c(void 0, 500);
        try {
          const E = await n();
          m.value = E.environment || "production";
        } catch {
        }
      } catch (E) {
        f.value = E instanceof Error ? E.message : "Failed to load environment logs";
      } finally {
        u.value = !1;
      }
    }
    async function y() {
      try {
        const E = await l();
        E.exists && (w.value = E.path);
      } catch {
      }
    }
    async function R() {
      if (w.value) {
        _.value = !0;
        try {
          await p(w.value);
        } catch (E) {
          console.error("Failed to open log file:", E);
        } finally {
          _.value = !1;
        }
      }
    }
    return Ne(() => {
      k(), y();
    }), (E, $) => (s(), o(W, null, [
      b(nt, null, {
        header: i(() => [
          b(at, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (S) => d.value = !0)
          }, {
            actions: i(() => [
              b(X, {
                variant: "secondary",
                size: "sm",
                onClick: R,
                disabled: !w.value || _.value,
                title: "Open log file in default editor"
              }, {
                default: i(() => [
                  g(a(_.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(X, {
                variant: "secondary",
                size: "sm",
                onClick: k,
                disabled: u.value
              }, {
                default: i(() => [
                  g(a(u.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          u.value ? (s(), P(Ut, {
            key: 0,
            message: "Loading environment logs..."
          })) : f.value ? (s(), P(Nt, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: k
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            v.value.length === 0 ? (s(), P(_t, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), P(co, {
              key: 1,
              logs: v.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 1
      }),
      b($t, {
        show: d.value,
        title: "About Environment Logs",
        onClose: $[2] || ($[2] = (S) => d.value = !1)
      }, {
        content: i(() => [
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
        actions: i(() => [
          b(X, {
            variant: "primary",
            onClick: $[1] || ($[1] = (S) => d.value = !1)
          }, {
            default: i(() => [...$[6] || ($[6] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), kh = { class: "env-title" }, bh = {
  key: 0,
  class: "current-badge"
}, _h = {
  key: 0,
  class: "branch-info"
}, $h = /* @__PURE__ */ te({
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
    return (c, n) => (s(), P(ot, {
      status: t.isCurrent ? "synced" : void 0
    }, Kt({
      icon: i(() => [
        g(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: i(() => [
        e("div", kh, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", bh, "CURRENT")) : r("", !0)
        ])
      ]),
      subtitle: i(() => [
        t.currentBranch ? (s(), o("span", _h, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          g(" " + a(t.currentBranch), 1)
        ])) : r("", !0)
      ]),
      actions: i(() => [
        Re(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: i(() => [
          b(Ge, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          b(Ge, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          b(Ge, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), P(Ge, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : r("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Ch = /* @__PURE__ */ se($h, [["__scopeId", "data-v-9231917a"]]), xh = { class: "env-details" }, Sh = { class: "status-row" }, Ih = {
  key: 0,
  class: "detail-row"
}, Eh = { class: "value mono" }, Ph = {
  key: 1,
  class: "detail-row"
}, Rh = { class: "value mono small" }, Th = { class: "detail-row" }, Mh = { class: "value" }, Dh = { class: "detail-row" }, Lh = { class: "value" }, zh = { class: "detail-row" }, Uh = { class: "value" }, Nh = {
  key: 2,
  class: "section-divider"
}, Oh = {
  key: 3,
  class: "detail-row"
}, Ah = { class: "value" }, Fh = {
  key: 4,
  class: "detail-row"
}, Bh = { class: "value" }, Vh = { class: "footer-actions" }, Wh = /* @__PURE__ */ te({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: c }) {
    const n = c;
    function l(p) {
      if (!p) return "Unknown";
      try {
        const v = new Date(p), f = (/* @__PURE__ */ new Date()).getTime() - v.getTime(), d = Math.floor(f / 6e4), m = Math.floor(f / 36e5), w = Math.floor(f / 864e5);
        return d < 1 ? "just now" : d < 60 ? `${d} ${d === 1 ? "minute" : "minutes"} ago` : m < 24 ? `${m} ${m === 1 ? "hour" : "hours"} ago` : w < 30 ? `${w} ${w === 1 ? "day" : "days"} ago` : v.toLocaleDateString();
      } catch {
        return p;
      }
    }
    return (p, v) => (s(), P(Ye, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[2] || (v[2] = (u) => n("close"))
    }, {
      body: i(() => [
        e("div", xh, [
          e("div", Sh, [
            v[3] || (v[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: fe(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", Ih, [
            v[4] || (v[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", Eh, a(t.environment.current_branch), 1)
          ])) : r("", !0),
          t.environment.path ? (s(), o("div", Ph, [
            v[5] || (v[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", Rh, a(t.environment.path), 1)
          ])) : r("", !0),
          v[11] || (v[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Th, [
            v[6] || (v[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", Mh, a(t.environment.workflow_count), 1)
          ]),
          e("div", Dh, [
            v[7] || (v[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Lh, a(t.environment.node_count), 1)
          ]),
          e("div", zh, [
            v[8] || (v[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Uh, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", Nh)) : r("", !0),
          t.environment.created_at ? (s(), o("div", Oh, [
            v[9] || (v[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", Ah, a(l(t.environment.created_at)), 1)
          ])) : r("", !0),
          t.environment.last_used ? (s(), o("div", Fh, [
            v[10] || (v[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", Bh, a(l(t.environment.last_used)), 1)
          ])) : r("", !0)
        ])
      ]),
      footer: i(() => [
        e("div", Vh, [
          t.canDelete ? (s(), P(ye, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[0] || (v[0] = (u) => n("delete", t.environment.name))
          }, {
            default: i(() => [...v[12] || (v[12] = [
              g(" Delete ", -1)
            ])]),
            _: 1
          })) : r("", !0),
          v[14] || (v[14] = e("div", { class: "footer-spacer" }, null, -1)),
          b(ye, {
            variant: "secondary",
            size: "sm",
            onClick: v[1] || (v[1] = (u) => n("close"))
          }, {
            default: i(() => [...v[13] || (v[13] = [
              g(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Gh = /* @__PURE__ */ se(Wh, [["__scopeId", "data-v-59855453"]]), uo = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], mo = "3.12", Bs = [
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
], vo = "auto", jh = { class: "progress-bar" }, Kh = /* @__PURE__ */ te({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, n = z(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (l, p) => (s(), o("div", jh, [
      e("div", {
        class: fe(["progress-fill", t.variant]),
        style: zt({ width: n.value })
      }, null, 6)
    ]));
  }
}), Cs = /* @__PURE__ */ se(Kh, [["__scopeId", "data-v-1beb0512"]]), Hh = { class: "task-progress" }, qh = { class: "progress-info" }, Yh = { class: "progress-percentage" }, Jh = { class: "progress-message" }, Xh = {
  key: 0,
  class: "progress-steps"
}, Qh = { class: "step-icon" }, Zh = { class: "step-label" }, e1 = /* @__PURE__ */ te({
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
    function n(p) {
      const v = c.steps.find((u) => u.id === p);
      return v ? c.progress >= v.progressThreshold ? "completed" : c.currentPhase === p ? "active" : "pending" : "pending";
    }
    function l(p) {
      const v = n(p);
      return v === "completed" ? "✓" : v === "active" ? "⟳" : "○";
    }
    return (p, v) => (s(), o("div", Hh, [
      b(Cs, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", qh, [
        e("span", Yh, a(t.progress) + "%", 1),
        e("span", Jh, a(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", Xh, [
        (s(!0), o(W, null, ae(t.steps, (u) => (s(), o("div", {
          key: u.id,
          class: fe(["step", n(u.id)])
        }, [
          e("span", Qh, a(l(u.id)), 1),
          e("span", Zh, a(u.label), 1)
        ], 2))), 128))
      ])) : r("", !0)
    ]));
  }
}), _s = /* @__PURE__ */ se(e1, [["__scopeId", "data-v-9d1de66c"]]), t1 = {
  key: 0,
  class: "create-env-form"
}, s1 = { class: "form-field" }, o1 = { class: "form-field" }, n1 = ["value"], a1 = { class: "form-field" }, l1 = ["disabled"], i1 = ["value"], r1 = { class: "form-field" }, d1 = ["value"], c1 = { class: "form-field form-field--checkbox" }, u1 = { class: "form-checkbox" }, m1 = {
  key: 1,
  class: "create-env-progress"
}, v1 = { class: "creating-intro" }, f1 = {
  key: 0,
  class: "progress-warning"
}, p1 = {
  key: 1,
  class: "create-error"
}, g1 = { class: "error-message" }, h1 = {
  key: 1,
  class: "footer-status"
}, y1 = 10, w1 = /* @__PURE__ */ te({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: c }) {
    const n = c, { getComfyUIReleases: l, createEnvironment: p, getCreateProgress: v } = We(), u = h(""), f = h(mo), d = h("latest"), m = h(vo), w = h(!1), _ = h([{ tag_name: "latest", name: "Latest", published_at: "" }]), k = h(!1), y = h(!1), R = h({
      progress: 0,
      message: ""
    });
    let E = null, $ = 0;
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
    ], N = h(null);
    function T() {
      y.value || n("close");
    }
    async function I() {
      const x = u.value.trim();
      if (x) {
        y.value = !0, R.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const L = {
            name: x,
            python_version: f.value,
            comfyui_version: d.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, le = await p(L);
          le.status === "started" ? Y() : le.status === "error" && (R.value = {
            progress: 0,
            message: le.message || "Failed to start creation",
            error: le.message
          });
        } catch (L) {
          R.value = {
            progress: 0,
            message: L instanceof Error ? L.message : "Unknown error",
            error: L instanceof Error ? L.message : "Unknown error"
          };
        }
      }
    }
    function Y() {
      E || ($ = 0, E = window.setInterval(async () => {
        try {
          const x = await v();
          $ = 0, R.value = {
            progress: x.progress ?? 0,
            message: x.message,
            phase: x.phase,
            error: x.error
          }, x.state === "complete" ? (B(), n("created", x.environment_name || u.value.trim(), w.value)) : x.state === "error" ? (B(), R.value.error = x.error || x.message) : x.state === "idle" && y.value && (B(), R.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= y1 && (B(), R.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function B() {
      E && (clearInterval(E), E = null);
    }
    function U() {
      y.value = !1, R.value = { progress: 0, message: "" }, n("close");
    }
    async function C() {
      k.value = !0;
      try {
        _.value = await l();
      } catch (x) {
        console.error("Failed to load ComfyUI releases:", x);
      } finally {
        k.value = !1;
      }
    }
    return Ne(async () => {
      var x;
      await Qs(), (x = N.value) == null || x.focus(), C();
    }), $s(() => {
      B();
    }), (x, L) => (s(), P(Ye, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !y.value,
      onClose: T
    }, {
      body: i(() => [
        y.value ? (s(), o("div", m1, [
          e("p", v1, [
            L[11] || (L[11] = g(" Creating environment ", -1)),
            e("strong", null, a(u.value), 1),
            L[12] || (L[12] = g("... ", -1))
          ]),
          b(_s, {
            progress: R.value.progress,
            message: R.value.message,
            "current-phase": R.value.phase,
            variant: R.value.error ? "error" : "default",
            "show-steps": !0,
            steps: S
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          R.value.error ? r("", !0) : (s(), o("p", f1, " This may take several minutes. Please wait... ")),
          R.value.error ? (s(), o("div", p1, [
            e("p", g1, a(R.value.error), 1)
          ])) : r("", !0)
        ])) : (s(), o("div", t1, [
          e("div", s1, [
            L[6] || (L[6] = e("label", { class: "form-label" }, "Name", -1)),
            De(e("input", {
              ref_key: "nameInput",
              ref: N,
              "onUpdate:modelValue": L[0] || (L[0] = (le) => u.value = le),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: Tt(I, ["enter"])
            }, null, 544), [
              [kt, u.value]
            ])
          ]),
          e("div", o1, [
            L[7] || (L[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            De(e("select", {
              "onUpdate:modelValue": L[1] || (L[1] = (le) => f.value = le),
              class: "form-select"
            }, [
              (s(!0), o(W, null, ae(Se(uo), (le) => (s(), o("option", {
                key: le,
                value: le
              }, a(le), 9, n1))), 128))
            ], 512), [
              [Lt, f.value]
            ])
          ]),
          e("div", a1, [
            L[8] || (L[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            De(e("select", {
              "onUpdate:modelValue": L[2] || (L[2] = (le) => d.value = le),
              class: "form-select",
              disabled: k.value
            }, [
              (s(!0), o(W, null, ae(_.value, (le) => (s(), o("option", {
                key: le.tag_name,
                value: le.tag_name
              }, a(le.name), 9, i1))), 128))
            ], 8, l1), [
              [Lt, d.value]
            ])
          ]),
          e("div", r1, [
            L[9] || (L[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            De(e("select", {
              "onUpdate:modelValue": L[3] || (L[3] = (le) => m.value = le),
              class: "form-select"
            }, [
              (s(!0), o(W, null, ae(Se(Bs), (le) => (s(), o("option", {
                key: le,
                value: le
              }, a(le) + a(le === "auto" ? " (detect GPU)" : ""), 9, d1))), 128))
            ], 512), [
              [Lt, m.value]
            ])
          ]),
          e("div", c1, [
            e("label", u1, [
              De(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": L[4] || (L[4] = (le) => w.value = le)
              }, null, 512), [
                [ws, w.value]
              ]),
              L[10] || (L[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: i(() => [
        y.value ? (s(), o(W, { key: 1 }, [
          R.value.error ? (s(), P(ye, {
            key: 0,
            variant: "secondary",
            onClick: U
          }, {
            default: i(() => [...L[15] || (L[15] = [
              g(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", h1, " Creating environment... "))
        ], 64)) : (s(), o(W, { key: 0 }, [
          b(ye, {
            variant: "primary",
            disabled: !u.value.trim(),
            onClick: I
          }, {
            default: i(() => [...L[13] || (L[13] = [
              g(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(ye, {
            variant: "secondary",
            onClick: L[5] || (L[5] = (le) => n("close"))
          }, {
            default: i(() => [...L[14] || (L[14] = [
              g(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), k1 = /* @__PURE__ */ se(w1, [["__scopeId", "data-v-f37eaa42"]]), b1 = /* @__PURE__ */ te({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: c, emit: n }) {
    const l = n, { getEnvironments: p } = We(), v = h([]), u = h(!1), f = h(null), d = h(""), m = h(!1), w = h(!1), _ = h(null), k = z(() => {
      if (!d.value.trim()) return v.value;
      const N = d.value.toLowerCase();
      return v.value.filter(
        (T) => {
          var I;
          return T.name.toLowerCase().includes(N) || ((I = T.current_branch) == null ? void 0 : I.toLowerCase().includes(N));
        }
      );
    });
    function y(N, T) {
      w.value = !1, l("created", N, T);
    }
    function R() {
      w.value = !0;
    }
    function E(N) {
      _.value = N;
    }
    function $(N) {
      _.value = null, l("delete", N);
    }
    async function S() {
      u.value = !0, f.value = null;
      try {
        v.value = await p();
      } catch (N) {
        f.value = N instanceof Error ? N.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return Ne(S), c({
      loadEnvironments: S,
      openCreateModal: R
    }), (N, T) => (s(), o(W, null, [
      b(nt, null, {
        header: i(() => [
          b(at, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (I) => m.value = !0)
          }, {
            actions: i(() => [
              b(X, {
                variant: "primary",
                size: "sm",
                onClick: R
              }, {
                default: i(() => [...T[6] || (T[6] = [
                  g(" Create ", -1)
                ])]),
                _: 1
              }),
              b(X, {
                variant: "secondary",
                size: "sm",
                onClick: S
              }, {
                default: i(() => [...T[7] || (T[7] = [
                  g(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          b(es, {
            modelValue: d.value,
            "onUpdate:modelValue": T[1] || (T[1] = (I) => d.value = I),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          u.value ? (s(), P(Ut, {
            key: 0,
            message: "Loading environments..."
          })) : f.value ? (s(), P(Nt, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            k.value.length ? (s(), P(Ae, {
              key: 0,
              title: "ENVIRONMENTS",
              count: k.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, ae(k.value, (I) => (s(), P(Ch, {
                  key: I.name,
                  "environment-name": I.name,
                  "is-current": I.is_current,
                  "current-branch": I.current_branch,
                  "show-last-used": !1
                }, {
                  actions: i(() => [
                    I.is_current ? r("", !0) : (s(), P(X, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (Y) => N.$emit("switch", I.name)
                    }, {
                      default: i(() => [...T[8] || (T[8] = [
                        g(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    b(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Y) => E(I)
                    }, {
                      default: i(() => [...T[9] || (T[9] = [
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
            k.value.length ? r("", !0) : (s(), P(_t, {
              key: 1,
              icon: "🌍",
              message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
            }, Kt({ _: 2 }, [
              d.value ? void 0 : {
                name: "actions",
                fn: i(() => [
                  b(X, {
                    variant: "primary",
                    onClick: R
                  }, {
                    default: i(() => [...T[10] || (T[10] = [
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
      b($t, {
        show: m.value,
        title: "About Environments",
        onClose: T[3] || (T[3] = (I) => m.value = !1)
      }, {
        content: i(() => [...T[11] || (T[11] = [
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
        actions: i(() => [
          b(X, {
            variant: "secondary",
            onClick: T[2] || (T[2] = (I) => m.value = !1)
          }, {
            default: i(() => [...T[12] || (T[12] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (s(), P(Gh, {
        key: 0,
        environment: _.value,
        "can-delete": v.value.length > 1,
        onClose: T[4] || (T[4] = (I) => _.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : r("", !0),
      w.value ? (s(), P(k1, {
        key: 1,
        onClose: T[5] || (T[5] = (I) => w.value = !1),
        onCreated: y
      })) : r("", !0)
    ], 64));
  }
}), _1 = /* @__PURE__ */ se(b1, [["__scopeId", "data-v-f95999f4"]]), $1 = { class: "file-path" }, C1 = { class: "file-path-text" }, x1 = ["title"], S1 = /* @__PURE__ */ te({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = h(!1);
    async function l() {
      try {
        await navigator.clipboard.writeText(c.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (p) {
        console.error("Failed to copy:", p);
      }
    }
    return (p, v) => (s(), o("div", $1, [
      v[0] || (v[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", C1, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: l
      }, a(n.value ? "✓" : "📋"), 9, x1)) : r("", !0)
    ]));
  }
}), I1 = /* @__PURE__ */ se(S1, [["__scopeId", "data-v-f0982173"]]), E1 = { class: "export-blocked" }, P1 = { class: "issues-list" }, R1 = { class: "issue-message" }, T1 = {
  key: 0,
  class: "issue-details"
}, M1 = ["onClick"], D1 = { class: "issue-fix" }, L1 = /* @__PURE__ */ te({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(t) {
    const c = t, n = ms({});
    function l(p) {
      const v = c.issues[p];
      return n[p] || v.details.length <= 3 ? v.details : v.details.slice(0, 3);
    }
    return (p, v) => (s(), P(Ye, {
      title: "Cannot Export",
      size: "md",
      onClose: v[1] || (v[1] = (u) => p.$emit("close"))
    }, {
      body: i(() => [
        e("div", E1, [
          v[2] || (v[2] = e("div", { class: "error-header" }, [
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
          e("div", P1, [
            (s(!0), o(W, null, ae(t.issues, (u, f) => (s(), o("div", {
              key: f,
              class: "issue-item"
            }, [
              e("div", R1, a(u.message), 1),
              u.details.length ? (s(), o("div", T1, [
                (s(!0), o(W, null, ae(l(f), (d, m) => (s(), o("div", {
                  key: m,
                  class: "issue-detail"
                }, a(d), 1))), 128)),
                u.details.length > 3 && !n[f] ? (s(), o("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (d) => n[f] = !0
                }, " +" + a(u.details.length - 3) + " more ", 9, M1)) : r("", !0)
              ])) : r("", !0),
              e("div", D1, [
                u.type === "uncommitted_workflows" ? (s(), o(W, { key: 0 }, [
                  g(" Commit your workflow changes before exporting. ")
                ], 64)) : u.type === "uncommitted_git_changes" ? (s(), o(W, { key: 1 }, [
                  g(" Commit your changes before exporting. ")
                ], 64)) : u.type === "unresolved_issues" ? (s(), o(W, { key: 2 }, [
                  g(" Resolve all workflow issues before exporting. ")
                ], 64)) : r("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: i(() => [
        b(ye, {
          variant: "primary",
          onClick: v[0] || (v[0] = (u) => p.$emit("close"))
        }, {
          default: i(() => [...v[3] || (v[3] = [
            g(" Understood ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), fo = /* @__PURE__ */ se(L1, [["__scopeId", "data-v-b52f5e32"]]), z1 = { class: "export-warnings" }, U1 = {
  key: 0,
  class: "success-header"
}, N1 = { class: "warning-header" }, O1 = { class: "warning-summary" }, A1 = { class: "warning-title" }, F1 = { class: "models-section" }, B1 = { class: "models-list" }, V1 = { class: "model-info" }, W1 = { class: "model-filename" }, G1 = { class: "model-workflows" }, j1 = ["onClick"], K1 = /* @__PURE__ */ te({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(t, { emit: c }) {
    const n = t, l = c, p = h(!1), v = h(null), u = z(() => p.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function f() {
      v.value = null, l("revalidate");
    }
    return (d, m) => (s(), o(W, null, [
      b(Ye, {
        title: "Export Warnings",
        size: "md",
        onClose: m[3] || (m[3] = (w) => d.$emit("cancel"))
      }, {
        body: i(() => [
          e("div", z1, [
            t.models.length === 0 ? (s(), o("div", U1, [...m[4] || (m[4] = [
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
              e("div", N1, [
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
                e("div", O1, [
                  e("h3", A1, a(t.models.length) + " model" + a(t.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  m[5] || (m[5] = e("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              e("div", F1, [
                e("div", B1, [
                  (s(!0), o(W, null, ae(u.value, (w) => (s(), o("div", {
                    key: w.hash,
                    class: "model-item"
                  }, [
                    e("div", V1, [
                      e("div", W1, a(w.filename), 1),
                      e("div", G1, " Used by: " + a(w.workflows.join(", ")), 1)
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      onClick: (_) => v.value = w.hash
                    }, " Add Source ", 8, j1)
                  ]))), 128))
                ]),
                t.models.length > 3 && !p.value ? (s(), o("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: m[0] || (m[0] = (w) => p.value = !0)
                }, " Show " + a(t.models.length - 3) + " more model" + a(t.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : r("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: i(() => [
          b(ye, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (w) => d.$emit("cancel"))
          }, {
            default: i(() => [...m[7] || (m[7] = [
              g(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          b(ye, {
            variant: "primary",
            onClick: m[2] || (m[2] = (w) => d.$emit("confirm"))
          }, {
            default: i(() => [
              g(a(t.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      v.value ? (s(), P(As, {
        key: 0,
        identifier: v.value,
        onClose: f
      }, null, 8, ["identifier"])) : r("", !0)
    ], 64));
  }
}), po = /* @__PURE__ */ se(K1, [["__scopeId", "data-v-b698d882"]]), H1 = { class: "export-card" }, q1 = { class: "export-path-row" }, Y1 = { class: "export-actions" }, J1 = {
  key: 1,
  class: "export-warning"
}, X1 = /* @__PURE__ */ te({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: c, exportEnvWithForce: n } = We(), l = h(""), p = h(!1), v = h(!1), u = h(!1), f = h(null), d = h(!1), m = h(null), w = h(!1), _ = h(!1), k = z(() => p.value ? "Validating..." : v.value ? "Exporting..." : "Export Environment");
    async function y() {
      p.value = !0, f.value = null;
      try {
        const T = await c();
        m.value = T, T.can_export ? T.warnings.models_without_sources.length > 0 ? _.value = !0 : await $() : w.value = !0;
      } catch (T) {
        f.value = {
          status: "error",
          message: T instanceof Error ? T.message : "Validation failed"
        };
      } finally {
        p.value = !1;
      }
    }
    async function R() {
      _.value = !1, await $();
    }
    async function E() {
      try {
        const T = await c();
        m.value = T;
      } catch (T) {
        console.error("Re-validation failed:", T);
      }
    }
    async function $() {
      v.value = !0;
      try {
        const T = await n(l.value || void 0);
        f.value = T;
      } catch (T) {
        f.value = {
          status: "error",
          message: T instanceof Error ? T.message : "Export failed"
        };
      } finally {
        v.value = !1;
      }
    }
    async function S() {
      var T;
      if ((T = f.value) != null && T.path)
        try {
          await navigator.clipboard.writeText(f.value.path);
        } catch (I) {
          console.error("Failed to copy path:", I);
        }
    }
    async function N() {
      var T;
      if ((T = f.value) != null && T.path) {
        u.value = !0;
        try {
          const I = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(f.value.path)}`);
          if (!I.ok)
            throw new Error(`Download failed: ${I.statusText}`);
          const Y = await I.blob(), B = URL.createObjectURL(Y), U = f.value.path.split("/").pop() || "environment-export.tar.gz", C = document.createElement("a");
          C.href = B, C.download = U, document.body.appendChild(C), C.click(), document.body.removeChild(C), URL.revokeObjectURL(B);
        } catch (I) {
          console.error("Failed to download:", I), alert(`Download failed: ${I instanceof Error ? I.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
      }
    }
    return (T, I) => (s(), o(W, null, [
      b(nt, null, {
        header: i(() => [
          b(at, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (Y) => d.value = !0)
          })
        ]),
        content: i(() => [
          b(Ae, { title: "EXPORT OPTIONS" }, {
            default: i(() => [
              e("div", H1, [
                I[7] || (I[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", q1, [
                  b(ks, {
                    modelValue: l.value,
                    "onUpdate:modelValue": I[1] || (I[1] = (Y) => l.value = Y),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Y1, [
                  b(X, {
                    variant: "primary",
                    size: "md",
                    loading: p.value || v.value,
                    disabled: p.value || v.value,
                    onClick: y
                  }, {
                    default: i(() => [
                      I[6] || (I[6] = e("svg", {
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
          f.value ? (s(), P(Ae, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: i(() => [
              b(ot, {
                status: f.value.status === "success" ? "synced" : "broken"
              }, Kt({
                icon: i(() => [
                  g(a(f.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: i(() => [
                  g(a(f.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: i(() => [
                  g(a(f.value.status === "success" ? "Your environment has been exported" : f.value.message), 1)
                ]),
                _: 2
              }, [
                f.value.status === "success" ? {
                  name: "details",
                  fn: i(() => [
                    b(Ge, { label: "Saved to:" }, {
                      default: i(() => [
                        b(I1, {
                          path: f.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    f.value.models_without_sources !== void 0 ? (s(), P(Ge, {
                      key: 0,
                      label: "Models without sources:",
                      value: f.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : r("", !0),
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (s(), o("div", J1, [...I[8] || (I[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : r("", !0)
                  ]),
                  key: "0"
                } : void 0,
                f.value.status === "success" ? {
                  name: "actions",
                  fn: i(() => [
                    b(X, {
                      variant: "primary",
                      size: "sm",
                      loading: u.value,
                      onClick: N
                    }, {
                      default: i(() => [...I[9] || (I[9] = [
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
                    b(X, {
                      variant: "secondary",
                      size: "sm",
                      onClick: S
                    }, {
                      default: i(() => [...I[10] || (I[10] = [
                        g(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    b(X, {
                      variant: "ghost",
                      size: "sm",
                      onClick: I[2] || (I[2] = (Y) => f.value = null)
                    }, {
                      default: i(() => [...I[11] || (I[11] = [
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
      b($t, {
        show: d.value,
        title: "What Gets Exported",
        onClose: I[3] || (I[3] = (Y) => d.value = !1)
      }, {
        content: i(() => [...I[12] || (I[12] = [
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
      w.value && m.value ? (s(), P(fo, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: I[4] || (I[4] = (Y) => w.value = !1)
      }, null, 8, ["issues"])) : r("", !0),
      _.value && m.value ? (s(), P(po, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: R,
        onCancel: I[5] || (I[5] = (Y) => _.value = !1),
        onRevalidate: E
      }, null, 8, ["models"])) : r("", !0)
    ], 64));
  }
}), Q1 = /* @__PURE__ */ se(X1, [["__scopeId", "data-v-f4d120f2"]]), Z1 = { class: "file-input-wrapper" }, ey = ["accept", "multiple", "disabled"], ty = /* @__PURE__ */ te({
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
    const l = n, p = h(null);
    function v() {
      var f;
      (f = p.value) == null || f.click();
    }
    function u(f) {
      const d = f.target;
      d.files && d.files.length > 0 && (l("change", d.files), d.value = "");
    }
    return c({
      triggerInput: v
    }), (f, d) => (s(), o("div", Z1, [
      e("input", {
        ref_key: "fileInputRef",
        ref: p,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, ey),
      b(X, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: v
      }, {
        default: i(() => [
          Re(f.$slots, "default", {}, () => [
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
}), sy = /* @__PURE__ */ se(ty, [["__scopeId", "data-v-cd192091"]]), oy = {
  key: 0,
  class: "drop-zone-empty"
}, ny = { class: "drop-zone-text" }, ay = { class: "drop-zone-primary" }, ly = { class: "drop-zone-secondary" }, iy = { class: "drop-zone-actions" }, ry = {
  key: 1,
  class: "drop-zone-file"
}, dy = { class: "file-info" }, cy = { class: "file-details" }, uy = { class: "file-name" }, my = { class: "file-size" }, vy = /* @__PURE__ */ te({
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
    const n = c, l = h(!1), p = h(null), v = h(0), u = z(() => p.value !== null), f = z(() => {
      var $;
      return (($ = p.value) == null ? void 0 : $.name) || "";
    }), d = z(() => {
      if (!p.value) return "";
      const $ = p.value.size;
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m($) {
      var S;
      $.stopPropagation(), v.value++, (S = $.dataTransfer) != null && S.types.includes("Files") && (l.value = !0);
    }
    function w($) {
      $.stopPropagation(), $.dataTransfer && ($.dataTransfer.dropEffect = "copy");
    }
    function _($) {
      $.stopPropagation(), v.value--, v.value === 0 && (l.value = !1);
    }
    function k($) {
      var N;
      $.stopPropagation(), v.value = 0, l.value = !1;
      const S = (N = $.dataTransfer) == null ? void 0 : N.files;
      S && S.length > 0 && R(S[0]);
    }
    function y($) {
      $.length > 0 && R($[0]);
    }
    function R($) {
      p.value = $, n("fileSelected", $);
    }
    function E() {
      p.value = null, n("clear");
    }
    return ($, S) => (s(), o("div", {
      class: fe(["file-drop-zone", { "drop-active": l.value, "has-file": u.value }]),
      onDragenter: Fe(m, ["prevent"]),
      onDragover: Fe(w, ["prevent"]),
      onDragleave: Fe(_, ["prevent"]),
      onDrop: Fe(k, ["prevent"])
    }, [
      u.value ? (s(), o("div", ry, [
        e("div", dy, [
          S[1] || (S[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", cy, [
            e("div", uy, a(f.value), 1),
            e("div", my, a(d.value), 1)
          ])
        ]),
        b(X, {
          variant: "ghost",
          size: "xs",
          onClick: E,
          title: "Remove file"
        }, {
          default: i(() => [...S[2] || (S[2] = [
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
      ])) : (s(), o("div", oy, [
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
        e("div", ny, [
          e("p", ay, a(t.primaryText), 1),
          e("p", ly, a(t.secondaryText), 1)
        ]),
        e("div", iy, [
          b(sy, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "sm",
            onChange: y
          }, {
            default: i(() => [
              g(a(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), fy = /* @__PURE__ */ se(vy, [["__scopeId", "data-v-0f79cb86"]]), py = { class: "import-preview" }, gy = { class: "preview-header" }, hy = {
  key: 0,
  class: "source-env"
}, yy = { class: "preview-content" }, wy = { class: "preview-section" }, ky = { class: "section-header" }, by = { class: "section-info" }, _y = { class: "section-count" }, $y = {
  key: 0,
  class: "item-list"
}, Cy = { class: "item-name" }, xy = {
  key: 0,
  class: "item-more"
}, Sy = { class: "preview-section" }, Iy = { class: "section-header" }, Ey = { class: "section-info" }, Py = { class: "section-count" }, Ry = {
  key: 0,
  class: "item-list"
}, Ty = { class: "item-details" }, My = { class: "item-name" }, Dy = { class: "item-meta" }, Ly = {
  key: 0,
  class: "item-more"
}, zy = { class: "preview-section" }, Uy = { class: "section-header" }, Ny = { class: "section-info" }, Oy = { class: "section-count" }, Ay = {
  key: 0,
  class: "item-list"
}, Fy = { class: "item-name" }, By = {
  key: 0,
  class: "item-more"
}, Vy = {
  key: 0,
  class: "preview-section"
}, Wy = { class: "git-info" }, Gy = /* @__PURE__ */ te({
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
    const c = t, n = z(() => c.workflows.length), l = z(() => c.models.length), p = z(() => c.nodes.length);
    function v(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, f) => (s(), o("div", py, [
      e("div", gy, [
        b(ut, null, {
          default: i(() => [...f[0] || (f[0] = [
            g("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", hy, [
          f[1] || (f[1] = g(" From: ", -1)),
          b(Ms, null, {
            default: i(() => [
              g(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : r("", !0)
      ]),
      e("div", yy, [
        e("div", wy, [
          e("div", ky, [
            f[3] || (f[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", by, [
              f[2] || (f[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", _y, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", $y, [
            (s(!0), o(W, null, ae(t.workflows.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d,
              class: "preview-item"
            }, [
              f[4] || (f[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Cy, a(d), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", xy, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        e("div", Sy, [
          e("div", Iy, [
            f[6] || (f[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Ey, [
              f[5] || (f[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", Py, a(l.value) + " file" + a(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", Ry, [
            (s(!0), o(W, null, ae(t.models.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              f[7] || (f[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", Ty, [
                e("span", My, a(d.filename), 1),
                e("span", Dy, a(v(d.size)) + " • " + a(d.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", Ly, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        e("div", zy, [
          e("div", Uy, [
            f[9] || (f[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", Ny, [
              f[8] || (f[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", Oy, a(p.value) + " node" + a(p.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", Ay, [
            (s(!0), o(W, null, ae(t.nodes.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d,
              class: "preview-item"
            }, [
              f[10] || (f[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Fy, a(d), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", By, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", Vy, [
          f[11] || (f[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Wy, [
            t.gitBranch ? (s(), P(Ge, {
              key: 0,
              label: "Branch"
            }, {
              default: i(() => [
                b(Ms, null, {
                  default: i(() => [
                    g(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : r("", !0),
            t.gitCommit ? (s(), P(Ge, {
              key: 1,
              label: "Commit"
            }, {
              default: i(() => [
                b(to, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : r("", !0)
          ])
        ])) : r("", !0)
      ])
    ]));
  }
}), jy = /* @__PURE__ */ se(Gy, [["__scopeId", "data-v-182fe113"]]), Ky = { class: "import-config" }, Hy = { class: "config-container" }, qy = { class: "config-field" }, Yy = { class: "input-wrapper" }, Jy = ["value"], Xy = {
  key: 0,
  class: "validating-indicator"
}, Qy = {
  key: 1,
  class: "valid-indicator"
}, Zy = {
  key: 0,
  class: "field-error"
}, e0 = { class: "config-field" }, t0 = { class: "strategy-options" }, s0 = ["value", "checked", "onChange"], o0 = { class: "strategy-content" }, n0 = { class: "strategy-label" }, a0 = { class: "strategy-description" }, l0 = { class: "config-field switch-field" }, i0 = { class: "switch-label" }, r0 = ["checked"], d0 = { class: "advanced-section" }, c0 = { class: "advanced-content" }, u0 = { class: "config-field" }, m0 = ["value"], v0 = ["value"], f0 = /* @__PURE__ */ te({
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
    const n = t, l = c, p = h(!1), v = h(!1);
    mt(() => n.nameError, (w) => {
      p.value = !1, v.value = !w && n.name.length > 0;
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
    let f = null;
    function d(w) {
      const _ = w.target.value;
      l("update:name", _), v.value = !1, f && clearTimeout(f), _.length > 0 ? (p.value = !0, f = setTimeout(() => {
        l("validate-name", _);
      }, 400)) : p.value = !1;
    }
    function m() {
      n.name.length > 0 && l("validate-name", n.name);
    }
    return (w, _) => (s(), o("div", Ky, [
      b(ut, null, {
        default: i(() => [..._[2] || (_[2] = [
          g("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", Hy, [
        e("div", qy, [
          b(hs, { required: "" }, {
            default: i(() => [..._[3] || (_[3] = [
              g("Environment Name", -1)
            ])]),
            _: 1
          }),
          e("div", Yy, [
            e("input", {
              type: "text",
              class: fe(["name-input", { error: t.nameError || t.name.length === 0, valid: v.value }]),
              value: t.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: m
            }, null, 42, Jy),
            p.value ? (s(), o("span", Xy, "...")) : v.value ? (s(), o("span", Qy, "✓")) : r("", !0)
          ]),
          t.nameError ? (s(), o("div", Zy, a(t.nameError), 1)) : r("", !0),
          _[4] || (_[4] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", e0, [
          b(hs, null, {
            default: i(() => [..._[5] || (_[5] = [
              g("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", t0, [
            (s(), o(W, null, ae(u, (k) => e("label", {
              key: k.value,
              class: fe(["strategy-option", { active: t.modelStrategy === k.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: k.value,
                checked: t.modelStrategy === k.value,
                onChange: (y) => l("update:modelStrategy", k.value)
              }, null, 40, s0),
              e("div", o0, [
                e("span", n0, a(k.label), 1),
                e("span", a0, a(k.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", l0, [
          e("label", i0, [
            e("input", {
              type: "checkbox",
              checked: t.switchAfterImport,
              onChange: _[0] || (_[0] = (k) => l("update:switchAfterImport", k.target.checked))
            }, null, 40, r0),
            _[6] || (_[6] = e("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        e("details", d0, [
          _[8] || (_[8] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", c0, [
            e("div", u0, [
              b(hs, null, {
                default: i(() => [..._[7] || (_[7] = [
                  g("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              e("select", {
                class: "backend-select",
                value: t.torchBackend,
                onChange: _[1] || (_[1] = (k) => l("update:torchBackend", k.target.value))
              }, [
                (s(!0), o(W, null, ae(Se(Bs), (k) => (s(), o("option", {
                  key: k,
                  value: k
                }, a(k) + a(k === "auto" ? " (detect GPU)" : ""), 9, v0))), 128))
              ], 40, m0)
            ])
          ])
        ])
      ])
    ]));
  }
}), p0 = /* @__PURE__ */ se(f0, [["__scopeId", "data-v-89ea06a1"]]), g0 = { class: "import-flow" }, h0 = {
  key: 0,
  class: "import-empty"
}, y0 = { class: "git-import-section" }, w0 = { class: "git-url-input-row" }, k0 = ["disabled"], b0 = {
  key: 0,
  class: "git-error"
}, _0 = {
  key: 1,
  class: "import-configure"
}, $0 = { class: "selected-file-bar" }, C0 = {
  key: 0,
  class: "file-bar-content"
}, x0 = { class: "file-bar-info" }, S0 = { class: "file-bar-name" }, I0 = { class: "file-bar-size" }, E0 = {
  key: 1,
  class: "file-bar-content"
}, P0 = { class: "file-bar-info" }, R0 = { class: "file-bar-name" }, T0 = {
  key: 0,
  class: "preview-loading"
}, M0 = { class: "import-actions" }, D0 = {
  key: 2,
  class: "import-progress"
}, L0 = { class: "creating-intro" }, z0 = {
  key: 0,
  class: "progress-warning"
}, U0 = {
  key: 1,
  class: "import-error"
}, N0 = { class: "error-message" }, O0 = {
  key: 3,
  class: "import-complete"
}, A0 = { class: "complete-message" }, F0 = { class: "complete-title" }, B0 = { class: "complete-details" }, V0 = { class: "complete-actions" }, W0 = /* @__PURE__ */ te({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(t, { expose: c, emit: n }) {
    var Ue, me, ge, Te;
    const l = t, p = n, { previewTarballImport: v, previewGitImport: u, validateEnvironmentName: f, executeImport: d, executeGitImport: m, getImportProgress: w } = We();
    let _ = null;
    const k = h(null), y = h(l.resumeImport ?? !1), R = h(!1), E = h(!1), $ = h(""), S = h(!1), N = h(null), T = h(""), I = h(null), Y = h(!1), B = h(null), U = h(null), C = h({
      name: ((Ue = l.initialProgress) == null ? void 0 : Ue.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), x = h(null), L = h({
      message: ((me = l.initialProgress) == null ? void 0 : me.message) ?? "Preparing import...",
      phase: ((ge = l.initialProgress) == null ? void 0 : ge.phase) ?? "",
      progress: ((Te = l.initialProgress) == null ? void 0 : Te.progress) ?? 0,
      error: null
    }), le = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], ie = z(() => {
      if (!U.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const de = U.value;
      return {
        sourceEnvironment: de.comfyui_version ? `ComfyUI ${de.comfyui_version}` : "Unknown",
        workflows: de.workflows.map((Q) => Q.name),
        models: de.models.map((Q) => ({
          filename: Q.filename,
          size: 0,
          type: Q.relative_path.split("/")[0] || "model"
        })),
        nodes: de.nodes.map((Q) => Q.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), K = z(() => !S.value && !N.value && U.value && C.value.name.length > 0 && !x.value && (k.value || I.value));
    async function ee(de) {
      k.value = de, S.value = !0, N.value = null, U.value = null;
      try {
        const Q = await v(de);
        U.value = Q;
      } catch (Q) {
        N.value = Q instanceof Error ? Q.message : "Failed to analyze file", console.error("Preview error:", Q);
      } finally {
        S.value = !1;
      }
    }
    function q() {
      k.value = null, I.value = null, T.value = "", B.value = null, R.value = !1, E.value = !1, $.value = "", U.value = null, N.value = null, C.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, x.value = null, p("source-cleared");
    }
    function O() {
      _e(), q(), y.value = !1, S.value = !1, Y.value = !1, L.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function A() {
      if (T.value.trim()) {
        Y.value = !0, B.value = null;
        try {
          const de = await u(T.value.trim());
          I.value = T.value.trim(), U.value = de;
        } catch (de) {
          B.value = de instanceof Error ? de.message : "Failed to analyze repository";
        } finally {
          Y.value = !1;
        }
      }
    }
    function M(de) {
      try {
        const Q = new URL(de);
        return Q.host + Q.pathname.replace(/\.git$/, "");
      } catch {
        return de;
      }
    }
    async function ve(de) {
      if (!de) {
        x.value = "Environment name is required";
        return;
      }
      try {
        const Q = await f(de);
        x.value = Q.valid ? null : Q.error || "Invalid name";
      } catch {
        x.value = "Failed to validate name";
      }
    }
    async function oe() {
      if (C.value.name && !(!k.value && !I.value)) {
        y.value = !0, R.value = !1, L.value = { message: `Creating environment '${C.value.name}'...`, phase: "", progress: 0, error: null }, p("import-started");
        try {
          let de;
          if (k.value)
            de = await d(
              k.value,
              C.value.name,
              C.value.modelStrategy,
              C.value.torchBackend
            );
          else if (I.value)
            de = await m(
              I.value,
              C.value.name,
              C.value.modelStrategy,
              C.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          de.status === "started" ? ke() : (E.value = !1, $.value = de.message, y.value = !1, R.value = !0);
        } catch (de) {
          E.value = !1, $.value = de instanceof Error ? de.message : "Unknown error occurred during import", y.value = !1, R.value = !0;
        }
      }
    }
    async function ke() {
      if (_) return;
      const de = async () => {
        try {
          const Me = await w();
          return L.value = {
            message: Me.message,
            phase: Me.phase || "",
            progress: Me.progress ?? (Me.state === "importing" ? 50 : 0),
            error: Me.error || null
          }, Me.state === "complete" ? (_e(), E.value = !0, $.value = `Environment '${Me.environment_name}' created successfully`, y.value = !1, R.value = !0, Me.environment_name && p("import-complete", Me.environment_name, C.value.switchAfterImport), !1) : Me.state === "error" ? (_e(), E.value = !1, $.value = Me.error || Me.message, y.value = !1, R.value = !0, !1) : !0;
        } catch (Me) {
          return console.error("Failed to poll import progress:", Me), !0;
        }
      };
      await de() && (_ = setInterval(async () => {
        await de() || _e();
      }, 2e3));
    }
    function _e() {
      _ && (clearInterval(_), _ = null);
    }
    function Le(de) {
      return de < 1024 ? `${de} B` : de < 1024 * 1024 ? `${(de / 1024).toFixed(1)} KB` : de < 1024 * 1024 * 1024 ? `${(de / (1024 * 1024)).toFixed(1)} MB` : `${(de / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Ne(async () => {
      try {
        const de = await w();
        console.log("[ComfyGit ImportFlow] Import progress check:", de.state, de), de.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", de.environment_name), y.value = !0, C.value.name = de.environment_name || C.value.name || "", L.value = {
          progress: de.progress ?? 0,
          message: de.message || "Importing...",
          phase: de.phase || "",
          error: null
        }, ke());
      } catch (de) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", de);
      }
    }), c({
      handleReset: O,
      isImporting: y,
      canImport: K
    }), (de, Q) => {
      var Me;
      return s(), o("div", g0, [
        !k.value && !I.value && !y.value ? (s(), o("div", h0, [
          b(fy, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: ee
          }),
          Q[7] || (Q[7] = e("div", { class: "import-divider" }, [
            e("span", null, "or")
          ], -1)),
          e("div", y0, [
            Q[5] || (Q[5] = e("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            e("div", w0, [
              De(e("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": Q[0] || (Q[0] = (pe) => T.value = pe),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Tt(A, ["enter"]),
                disabled: Y.value
              }, null, 40, k0), [
                [kt, T.value]
              ]),
              b(X, {
                variant: "primary",
                size: "sm",
                disabled: !T.value.trim() || Y.value,
                onClick: A
              }, {
                default: i(() => [
                  g(a(Y.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            B.value ? (s(), o("div", b0, a(B.value), 1)) : r("", !0),
            Q[6] || (Q[6] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (k.value || I.value) && !y.value && !R.value ? (s(), o("div", _0, [
          e("div", $0, [
            k.value ? (s(), o("div", C0, [
              Q[8] || (Q[8] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", x0, [
                e("div", S0, a(k.value.name), 1),
                e("div", I0, a(Le(k.value.size)), 1)
              ])
            ])) : I.value ? (s(), o("div", E0, [
              Q[10] || (Q[10] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
              e("div", P0, [
                e("div", R0, a(M(I.value)), 1),
                Q[9] || (Q[9] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : r("", !0),
            b(X, {
              variant: "ghost",
              size: "sm",
              onClick: q
            }, {
              default: i(() => [...Q[11] || (Q[11] = [
                g(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          S.value ? (s(), o("div", T0, [...Q[12] || (Q[12] = [
            e("div", { class: "loading-spinner" }, null, -1),
            e("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : N.value ? (s(), P(yt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [N.value]
          }, null, 8, ["details"])) : U.value ? (s(), P(jy, {
            key: 2,
            "source-environment": ie.value.sourceEnvironment,
            workflows: ie.value.workflows,
            models: ie.value.models,
            nodes: ie.value.nodes,
            "git-branch": ie.value.gitBranch,
            "git-commit": ie.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : r("", !0),
          U.value ? (s(), P(p0, {
            key: 3,
            name: C.value.name,
            "onUpdate:name": Q[1] || (Q[1] = (pe) => C.value.name = pe),
            "model-strategy": C.value.modelStrategy,
            "onUpdate:modelStrategy": Q[2] || (Q[2] = (pe) => C.value.modelStrategy = pe),
            "torch-backend": C.value.torchBackend,
            "onUpdate:torchBackend": Q[3] || (Q[3] = (pe) => C.value.torchBackend = pe),
            "switch-after-import": C.value.switchAfterImport,
            "onUpdate:switchAfterImport": Q[4] || (Q[4] = (pe) => C.value.switchAfterImport = pe),
            "name-error": x.value,
            onValidateName: ve
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : r("", !0),
          C.value.modelStrategy === "skip" && ((Me = U.value) != null && Me.models_needing_download) ? (s(), P(yt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${U.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : r("", !0),
          e("div", M0, [
            b(X, {
              variant: "secondary",
              size: "md",
              onClick: q
            }, {
              default: i(() => [...Q[13] || (Q[13] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(X, {
              variant: "primary",
              size: "md",
              disabled: !K.value,
              onClick: oe
            }, {
              default: i(() => [...Q[14] || (Q[14] = [
                g(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : y.value ? (s(), o("div", D0, [
          e("p", L0, [
            Q[15] || (Q[15] = g(" Importing environment ", -1)),
            e("strong", null, a(C.value.name), 1),
            Q[16] || (Q[16] = g("... ", -1))
          ]),
          b(_s, {
            progress: L.value.progress,
            message: L.value.message,
            "current-phase": L.value.phase,
            variant: L.value.error ? "error" : "default",
            "show-steps": !0,
            steps: le
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          L.value.error ? r("", !0) : (s(), o("p", z0, " This may take several minutes. Please wait... ")),
          L.value.error ? (s(), o("div", U0, [
            e("p", N0, a(L.value.error), 1)
          ])) : r("", !0)
        ])) : R.value ? (s(), o("div", O0, [
          e("div", {
            class: fe(["complete-icon", E.value ? "success" : "error"])
          }, a(E.value ? "✓" : "✕"), 3),
          e("div", A0, [
            e("div", F0, a(E.value ? "Import Successful" : "Import Failed"), 1),
            e("div", B0, a($.value), 1)
          ]),
          e("div", V0, [
            b(X, {
              variant: "primary",
              size: "md",
              onClick: O
            }, {
              default: i(() => [...Q[17] || (Q[17] = [
                g(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : r("", !0)
      ]);
    };
  }
}), go = /* @__PURE__ */ se(W0, [["__scopeId", "data-v-72cbc04e"]]), G0 = /* @__PURE__ */ te({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(t, { emit: c }) {
    const n = c, l = h(!1);
    function p(v, u) {
      u && n("import-complete-switch", v);
    }
    return (v, u) => (s(), o(W, null, [
      b(nt, null, {
        header: i(() => [
          b(at, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: u[0] || (u[0] = (f) => l.value = !0)
          })
        ]),
        content: i(() => [
          b(go, { onImportComplete: p })
        ]),
        _: 1
      }),
      b($t, {
        show: l.value,
        title: "How Import Works",
        onClose: u[1] || (u[1] = (f) => l.value = !1)
      }, {
        content: i(() => [...u[2] || (u[2] = [
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
}), j0 = /* @__PURE__ */ se(G0, [["__scopeId", "data-v-e13bfe76"]]), ps = Xt(), K0 = 5e3, Yt = h([]), Ps = h(!1), Rs = h(null);
let as = null;
async function gs(t, c) {
  var n;
  if (!((n = window.app) != null && n.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(t, c);
}
function ho(t) {
  const c = z(
    () => Yt.value.filter((k) => k.status === "running")
  ), n = z(
    () => Yt.value.filter((k) => k.status === "deploying")
  ), l = z(
    () => Yt.value.filter((k) => k.status === "stopped")
  ), p = z(
    () => c.value.length + n.value.length
  ), v = z(() => {
    const k = {
      deploying: 0,
      running: 1,
      stopped: 2,
      error: 3,
      terminated: 4
    };
    return [...Yt.value].sort(
      (y, R) => (k[y.status] ?? 5) - (k[R.status] ?? 5)
    );
  });
  async function u() {
    Ps.value = !0, Rs.value = null;
    try {
      let k;
      if (!ps) {
        const y = await gs("/v2/comfygit/deploy/instances");
        if (!y.ok)
          throw new Error(`Failed to fetch instances: ${y.status}`);
        k = await y.json();
      }
      Yt.value = k.instances;
    } catch (k) {
      Rs.value = k instanceof Error ? k.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", k);
    } finally {
      Ps.value = !1;
    }
  }
  async function f(k) {
    try {
      if (!ps) {
        const y = await gs(`/v2/comfygit/deploy/runpod/${k}/stop`, {
          method: "POST"
        });
        if (!y.ok) {
          const R = await y.json();
          throw new Error(R.message || "Failed to stop instance");
        }
      }
      await u();
    } catch (y) {
      throw console.error("[useDeployInstances] stopInstance error:", y), y;
    }
  }
  async function d(k) {
    try {
      if (!ps) {
        const y = await gs(`/v2/comfygit/deploy/runpod/${k}/start`, {
          method: "POST"
        });
        if (!y.ok) {
          const R = await y.json();
          throw new Error(R.message || "Failed to start instance");
        }
      }
      await u();
    } catch (y) {
      throw console.error("[useDeployInstances] startInstance error:", y), y;
    }
  }
  async function m(k) {
    try {
      if (!ps) {
        const y = await gs(`/v2/comfygit/deploy/runpod/${k}`, {
          method: "DELETE"
        });
        if (!y.ok) {
          const R = await y.json();
          throw new Error(R.message || "Failed to terminate instance");
        }
      }
      await u();
    } catch (y) {
      throw console.error("[useDeployInstances] terminateInstance error:", y), y;
    }
  }
  function w() {
    as || (as = window.setInterval(u, K0));
  }
  function _() {
    as && (clearInterval(as), as = null);
  }
  return mt(n, (k) => {
    k.length > 0 && w();
  }, { immediate: !0 }), t != null && t.autoStart && (u(), w()), {
    // State
    instances: Yt,
    isLoading: Ps,
    error: Rs,
    // Computed
    runningInstances: c,
    deployingInstances: n,
    stoppedInstances: l,
    liveInstanceCount: p,
    sortedInstances: v,
    // Actions
    refreshInstances: u,
    stopInstance: f,
    startInstance: d,
    terminateInstance: m,
    // Polling
    startPolling: w,
    stopPolling: _
  };
}
const H0 = { class: "instance-header" }, q0 = { class: "provider-badge" }, Y0 = { class: "instance-name" }, J0 = {
  key: 0,
  class: "spinner"
}, X0 = { class: "instance-details" }, Q0 = {
  key: 0,
  class: "detail"
}, Z0 = {
  key: 1,
  class: "detail instance-url"
}, ew = {
  key: 2,
  class: "detail"
}, tw = {
  key: 3,
  class: "detail"
}, sw = {
  key: 4,
  class: "detail total-cost"
}, ow = {
  key: 0,
  class: "deployment-progress"
}, nw = { class: "progress-message" }, aw = { class: "instance-actions" }, lw = /* @__PURE__ */ te({
  __name: "InstanceCard",
  props: {
    instance: {},
    isLoading: { type: Boolean }
  },
  emits: ["stop", "start", "terminate"],
  setup(t) {
    const c = t, n = z(() => ({
      runpod: "RunPod",
      vast: "Vast.ai",
      custom: "Custom"
    })[c.instance.provider] || c.instance.provider), l = z(() => ({
      deploying: "Deploying",
      running: "Running",
      stopped: "Stopped",
      error: "Error",
      terminated: "Terminated"
    })[c.instance.status] || c.instance.status), p = z(() => `status-${c.instance.status}`);
    function v() {
      c.instance.comfyui_url && window.open(c.instance.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function u() {
      c.instance.console_url && window.open(c.instance.console_url, "_blank", "noopener,noreferrer");
    }
    function f(d) {
      const m = Math.floor(d / 3600), w = Math.floor(d % 3600 / 60);
      return m > 0 ? `${m}h ${w}m` : `${w}m`;
    }
    return (d, m) => (s(), o("div", {
      class: fe(["instance-card", p.value])
    }, [
      e("div", H0, [
        e("span", q0, a(n.value), 1),
        e("span", Y0, a(t.instance.name), 1),
        e("span", {
          class: fe(["status-indicator", t.instance.status])
        }, [
          t.instance.status === "deploying" ? (s(), o("span", J0)) : r("", !0),
          g(" " + a(l.value), 1)
        ], 2)
      ]),
      e("div", X0, [
        t.instance.gpu_type ? (s(), o("span", Q0, a(t.instance.gpu_type), 1)) : r("", !0),
        t.instance.comfyui_url ? (s(), o("span", Z0, a(t.instance.comfyui_url), 1)) : r("", !0),
        t.instance.uptime_seconds ? (s(), o("span", ew, a(f(t.instance.uptime_seconds)), 1)) : r("", !0),
        t.instance.cost_per_hour ? (s(), o("span", tw, "$" + a(t.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : r("", !0),
        t.instance.total_cost ? (s(), o("span", sw, "$" + a(t.instance.total_cost.toFixed(2)) + " total", 1)) : r("", !0)
      ]),
      t.instance.status === "deploying" ? (s(), o("div", ow, [
        e("div", nw, a(t.instance.deployment_message || "Deploying..."), 1),
        t.instance.deployment_progress ? (s(), P(Cs, {
          key: 0,
          progress: t.instance.deployment_progress
        }, null, 8, ["progress"])) : r("", !0)
      ])) : r("", !0),
      e("div", aw, [
        t.instance.status === "running" && t.instance.comfyui_url ? (s(), P(X, {
          key: 0,
          variant: "primary",
          size: "xs",
          onClick: v
        }, {
          default: i(() => [...m[3] || (m[3] = [
            g(" Open ComfyUI ", -1)
          ])]),
          _: 1
        })) : r("", !0),
        t.instance.console_url && t.instance.provider !== "custom" ? (s(), P(X, {
          key: 1,
          variant: "ghost",
          size: "xs",
          onClick: u
        }, {
          default: i(() => [...m[4] || (m[4] = [
            g(" Console ", -1)
          ])]),
          _: 1
        })) : r("", !0),
        t.instance.status === "running" ? (s(), P(X, {
          key: 2,
          variant: "secondary",
          size: "xs",
          loading: t.isLoading,
          disabled: t.isLoading,
          onClick: m[0] || (m[0] = (w) => d.$emit("stop", t.instance.id))
        }, {
          default: i(() => [...m[5] || (m[5] = [
            g(" Stop ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : r("", !0),
        t.instance.status === "stopped" ? (s(), P(X, {
          key: 3,
          variant: "secondary",
          size: "xs",
          loading: t.isLoading,
          disabled: t.isLoading,
          onClick: m[1] || (m[1] = (w) => d.$emit("start", t.instance.id))
        }, {
          default: i(() => [...m[6] || (m[6] = [
            g(" Start ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : r("", !0),
        b(X, {
          variant: "destructive",
          size: "xs",
          loading: t.isLoading,
          disabled: t.isLoading,
          onClick: m[2] || (m[2] = (w) => d.$emit("terminate", t.instance.id))
        }, {
          default: i(() => [...m[7] || (m[7] = [
            g(" Terminate ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])
      ])
    ], 2));
  }
}), iw = /* @__PURE__ */ se(lw, [["__scopeId", "data-v-de673d67"]]), rw = { class: "instances-tab" }, dw = { class: "instances-header" }, cw = {
  key: 0,
  class: "loading-state"
}, uw = {
  key: 1,
  class: "empty-state"
}, mw = {
  key: 2,
  class: "instances-list"
}, vw = /* @__PURE__ */ te({
  __name: "InstancesTab",
  props: {
    instances: {},
    isLoading: { type: Boolean },
    actionLoadingId: {}
  },
  emits: ["refresh", "stop", "start", "terminate"],
  setup(t) {
    const c = t, n = z(() => {
      const l = {
        deploying: 0,
        running: 1,
        stopped: 2,
        error: 3,
        terminated: 4
      };
      return [...c.instances].sort(
        (p, v) => (l[p.status] ?? 5) - (l[v.status] ?? 5)
      );
    });
    return (l, p) => (s(), o("div", rw, [
      e("div", dw, [
        b(ut, null, {
          default: i(() => [...p[4] || (p[4] = [
            g("Active Instances", -1)
          ])]),
          _: 1
        }),
        b(X, {
          variant: "ghost",
          size: "xs",
          loading: t.isLoading,
          onClick: p[0] || (p[0] = (v) => l.$emit("refresh"))
        }, {
          default: i(() => [...p[5] || (p[5] = [
            g(" Refresh ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      t.isLoading && t.instances.length === 0 ? (s(), o("div", cw, [...p[6] || (p[6] = [
        e("span", { class: "spinner" }, null, -1),
        g(" Loading instances... ", -1)
      ])])) : t.instances.length === 0 ? (s(), o("div", uw, [...p[7] || (p[7] = [
        e("span", { class: "empty-icon" }, "○", -1),
        e("span", { class: "empty-text" }, "No active instances", -1),
        e("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (s(), o("div", mw, [
        (s(!0), o(W, null, ae(n.value, (v) => (s(), P(iw, {
          key: v.id,
          instance: v,
          "is-loading": t.actionLoadingId === v.id,
          onStop: p[1] || (p[1] = (u) => l.$emit("stop", u)),
          onStart: p[2] || (p[2] = (u) => l.$emit("start", u)),
          onTerminate: p[3] || (p[3] = (u) => l.$emit("terminate", u))
        }, null, 8, ["instance", "is-loading"]))), 128))
      ]))
    ]));
  }
}), fw = /* @__PURE__ */ se(vw, [["__scopeId", "data-v-fdd7390e"]]), pw = { class: "remote-header" }, gw = { class: "remote-info" }, hw = { class: "remote-icon" }, yw = { class: "remote-name" }, ww = {
  key: 0,
  class: "default-badge"
}, kw = {
  key: 1,
  class: "sync-badge"
}, bw = {
  key: 0,
  class: "ahead"
}, _w = {
  key: 1,
  class: "behind"
}, $w = {
  key: 1,
  class: "synced"
}, Cw = ["href"], xw = {
  key: 1,
  class: "remote-url-text"
}, Sw = { class: "remote-actions" }, Iw = /* @__PURE__ */ te({
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
    const c = t, n = z(() => c.remote.is_default), l = z(() => {
      const v = c.remote.fetch_url, u = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return u ? `https://${u[1]}/${u[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), p = z(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, u) => (s(), o("div", {
      class: fe(["deploy-remote-card", { selected: t.isSelected }])
    }, [
      e("div", pw, [
        e("div", gw, [
          e("span", hw, a(n.value ? "🔗" : "🌐"), 1),
          e("span", yw, a(t.remote.name), 1),
          n.value ? (s(), o("span", ww, "DEFAULT")) : r("", !0),
          t.syncStatus ? (s(), o("span", kw, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(W, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", bw, "↑" + a(t.syncStatus.ahead), 1)) : r("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", _w, "↓" + a(t.syncStatus.behind), 1)) : r("", !0)
            ], 64)) : (s(), o("span", $w, "✓ synced"))
          ])) : r("", !0)
        ]),
        l.value ? (s(), o("a", {
          key: 0,
          href: l.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: u[0] || (u[0] = Fe(() => {
          }, ["stop"]))
        }, a(p.value), 9, Cw)) : (s(), o("span", xw, a(p.value), 1))
      ]),
      e("div", Sw, [
        b(X, {
          variant: "secondary",
          size: "xs",
          loading: t.isFetching,
          onClick: u[1] || (u[1] = (f) => v.$emit("fetch", t.remote.name))
        }, {
          default: i(() => [...u[4] || (u[4] = [
            g(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        t.syncStatus && t.syncStatus.ahead > 0 ? (s(), P(X, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: t.isPushing,
          onClick: u[2] || (u[2] = (f) => v.$emit("push", t.remote.name))
        }, {
          default: i(() => [
            g(" Push ↑" + a(t.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : r("", !0),
        b(X, {
          variant: t.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: u[3] || (u[3] = (f) => v.$emit("select", t.remote.name))
        }, {
          default: i(() => [
            g(a(t.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), yo = /* @__PURE__ */ se(Iw, [["__scopeId", "data-v-d687d161"]]), Ew = { class: "runpod-tab" }, Pw = { class: "api-key-card" }, Rw = { class: "api-key-row" }, Tw = { class: "api-key-input-wrapper" }, Mw = ["type", "disabled"], Dw = ["title"], Lw = { class: "status-icon" }, zw = { class: "status-text" }, Uw = {
  key: 0,
  class: "credit-balance"
}, Nw = { class: "config-card" }, Ow = { class: "config-row" }, Aw = ["disabled"], Fw = {
  key: 0,
  value: ""
}, Bw = {
  key: 1,
  value: "",
  disabled: ""
}, Vw = ["value", "disabled"], Ww = { class: "config-row" }, Gw = {
  key: 0,
  class: "loading-inline"
}, jw = { class: "no-volumes-state" }, Kw = { class: "no-volumes-text" }, Hw = ["value"], qw = { class: "config-row" }, Yw = ["disabled"], Jw = {
  key: 0,
  value: ""
}, Xw = {
  key: 1,
  value: ""
}, Qw = {
  key: 2,
  value: ""
}, Zw = ["value"], ek = { class: "config-row" }, tk = { class: "radio-group" }, sk = { class: "radio-option" }, ok = { class: "radio-label" }, nk = { class: "radio-option" }, ak = { class: "radio-label" }, lk = { class: "config-row" }, ik = { class: "radio-group" }, rk = { class: "radio-option" }, dk = { class: "radio-label" }, ck = { class: "radio-option" }, uk = { class: "radio-label" }, mk = { class: "config-row" }, vk = {
  key: 0,
  class: "loading-text"
}, fk = {
  key: 1,
  class: "empty-remotes"
}, pk = { class: "remotes-list" }, gk = {
  key: 0,
  class: "sync-warning"
}, hk = { class: "warning-content" }, yk = { class: "remotes-footer" }, wk = { class: "summary-card" }, kk = {
  key: 0,
  class: "loading-text"
}, bk = { class: "summary-row" }, _k = { class: "summary-value" }, $k = { class: "summary-row" }, Ck = { class: "summary-value" }, xk = { class: "summary-row" }, Sk = { class: "summary-value" }, Ik = {
  key: 0,
  class: "summary-sub-row"
}, Ek = { class: "summary-sub-label" }, Pk = {
  key: 1,
  class: "summary-sub-row warning"
}, Rk = { class: "summary-sub-label" }, Tk = { class: "summary-row" }, Mk = { class: "summary-value" }, Dk = { class: "summary-row" }, Lk = { class: "summary-value" }, zk = { class: "deployment-summary" }, Uk = { class: "summary-columns" }, Nk = { class: "summary-column" }, Ok = { class: "pricing-row" }, Ak = { class: "pricing-value" }, Fk = { class: "pricing-row" }, Bk = { class: "pricing-value" }, Vk = { class: "pricing-row" }, Wk = { class: "pricing-value" }, Gk = { class: "pricing-row total" }, jk = { class: "pricing-value" }, Kk = { class: "summary-column" }, Hk = { class: "spec-row" }, qk = { class: "spec-row" }, Yk = {
  key: 0,
  class: "spec-row"
}, Jk = {
  key: 1,
  class: "spec-row spot-warning"
}, Xk = {
  key: 4,
  class: "deploy-actions"
}, Qk = { class: "progress-content" }, Zk = { class: "phase-indicator" }, eb = { key: 0 }, tb = { key: 1 }, sb = { key: 2 }, ob = {
  key: 3,
  class: "spinner"
}, nb = { class: "phase-text" }, ab = { class: "phase-name" }, lb = { class: "phase-detail" }, ib = {
  key: 0,
  class: "ready-actions"
}, rb = { class: "console-link" }, db = ["href"], cb = /* @__PURE__ */ te({
  __name: "RunPodTab",
  emits: ["toast", "navigate", "deployed"],
  setup(t, { emit: c }) {
    const n = c, {
      getDeploySummary: l,
      testRunPodConnection: p,
      getNetworkVolumes: v,
      getRunPodGpuTypes: u,
      deployToRunPod: f,
      getDeploymentStatus: d,
      getStoredRunPodKey: m,
      clearRunPodKey: w,
      validateDeploy: _,
      getRemotes: k,
      getRemoteSyncStatus: y,
      fetchRemote: R,
      pushToRemote: E,
      getDataCenters: $
    } = We(), S = h(!1), N = h(""), T = h(!1), I = h(!1), Y = h(null), B = h(null), U = h(""), C = h(""), x = h(""), L = h("SECURE"), le = h("ON_DEMAND"), ie = h("my-comfyui-deploy"), K = h([]), ee = h({}), q = h(!1), O = h(null), A = h(null), M = h(null), ve = h([]), oe = h(!1), ke = h([]), _e = h(!1), Le = h([]), Ue = h(!1), me = h(null), ge = h(!1), Te = h(!1), de = h(null), Q = h(!1), Me = h(null), pe = h(null), Je = h(null), tt = h(!1), st = h(null), Pe = h(!1), Xe = h(!1), He = z(() => ke.value.find((re) => re.id === C.value) || null), Qe = z(() => U.value ? ke.value.filter((re) => re.data_center_id === U.value) : ke.value), vt = z(() => Le.value.filter((re) => re.available)), be = z(() => O.value && ee.value[O.value] || null), je = z(() => {
      if (!O.value) return null;
      const re = K.value.find((j) => j.name === O.value);
      return (re == null ? void 0 : re.fetch_url) || null;
    }), it = z(() => T.value && C.value && x.value && je.value && !Te.value && !tt.value), qe = (re) => {
      const j = Le.value.find((Ze) => Ze.id === x.value);
      if (!j) return "0.00";
      if (re === "SECURE") return (j.securePrice ?? 0).toFixed(2);
      if (re === "COMMUNITY") return (j.communityPrice ?? 0).toFixed(2);
      const Ee = L.value === "SECURE";
      return re === "ON_DEMAND" ? Ee ? (j.securePrice ?? 0).toFixed(2) : (j.communityPrice ?? 0).toFixed(2) : Ee ? (j.secureSpotPrice ?? 0).toFixed(2) : (j.communitySpotPrice ?? 0).toFixed(2);
    }, ce = z(() => {
      const re = Le.value.find((xt) => xt.id === x.value), j = ke.value.find((xt) => xt.id === C.value);
      if (!re) return null;
      const Ee = L.value === "SECURE", Ze = le.value === "SPOT";
      let ht;
      Ze ? ht = Ee ? re.secureSpotPrice ?? 0 : re.communitySpotPrice ?? 0 : ht = Ee ? re.securePrice ?? 0 : re.communityPrice ?? 0;
      const Mt = j ? j.size_gb * 14e-5 : 0, Dt = 4e-3;
      return {
        gpu: ht,
        volume: Mt,
        container: Dt,
        total: ht + Mt + Dt
      };
    });
    async function J() {
      await pt(), await Promise.all([rt(), Z()]);
    }
    async function Z() {
      q.value = !0;
      try {
        const re = await k();
        K.value = re.remotes, await Promise.all(
          re.remotes.map(async (Ee) => {
            const Ze = await y(Ee.name);
            Ze && (ee.value[Ee.name] = Ze);
          })
        );
        const j = re.remotes.find((Ee) => Ee.is_default);
        j ? O.value = j.name : re.remotes.length > 0 && (O.value = re.remotes[0].name);
      } catch {
        n("toast", "Failed to load remotes", "error");
      } finally {
        q.value = !1;
      }
    }
    async function D(re) {
      A.value = re;
      try {
        await R(re);
        const j = await y(re);
        j && (ee.value[re] = j), n("toast", `Fetched from ${re}`, "success");
      } catch {
        n("toast", "Fetch failed", "error");
      } finally {
        A.value = null;
      }
    }
    async function G(re) {
      M.value = re;
      try {
        await E(re, { force: !1 });
        const j = await y(re);
        j && (ee.value[re] = j), n("toast", `Pushed to ${re}`, "success");
      } catch {
        n("toast", "Push failed", "error");
      } finally {
        M.value = null;
      }
    }
    function ne(re) {
      O.value = re;
    }
    async function xe() {
      if (N.value) {
        I.value = !0, Y.value = null;
        try {
          const re = await p(N.value, !0);
          re.status === "success" ? (T.value = !0, B.value = re.credit_balance ?? null, Y.value = { type: "success", message: re.message }, await J()) : Y.value = { type: "error", message: re.message };
        } catch (re) {
          Y.value = {
            type: "error",
            message: re instanceof Error ? re.message : "Connection test failed"
          };
        } finally {
          I.value = !1;
        }
      }
    }
    async function Be() {
      try {
        await w(), N.value = "", T.value = !1, Y.value = null, B.value = null, ve.value = [], U.value = "", ke.value = [], C.value = "", Le.value = [], x.value = "", me.value = null, n("toast", "API key cleared", "info");
      } catch {
        n("toast", "Failed to clear key", "error");
      }
    }
    async function pt() {
      _e.value = !0, oe.value = !0;
      try {
        const re = await v();
        ke.value = re.volumes;
        const j = /* @__PURE__ */ new Map();
        for (const Ee of re.volumes)
          Ee.data_center_id && !j.has(Ee.data_center_id) && j.set(Ee.data_center_id, {
            id: Ee.data_center_id,
            name: Ee.data_center_name || Ee.data_center_id,
            available: !0
          });
        if (re.volumes.length === 0) {
          const Ee = await $();
          ve.value = Ee.data_centers;
        } else
          ve.value = Array.from(j.values());
        if (ke.value.length > 0) {
          const Ee = ke.value[0];
          C.value = Ee.id, Ee.data_center_id && (U.value = Ee.data_center_id, await Ct(Ee.data_center_id));
        } else ve.value.length > 0 && (U.value = ve.value[0].id);
      } catch {
        n("toast", "Failed to load network volumes", "error");
      } finally {
        _e.value = !1, oe.value = !1;
      }
    }
    async function Ct(re) {
      Ue.value = !0;
      try {
        const j = await u(re);
        Le.value = j.gpu_types;
        const Ee = Le.value.find((Ze) => Ze.available);
        Ee ? x.value = Ee.id : x.value = "";
      } catch {
        n("toast", "Failed to load GPU types", "error");
      } finally {
        Ue.value = !1;
      }
    }
    mt(U, async (re) => {
      if (!re || _e.value) return;
      const j = ke.value.find((Ee) => Ee.id === C.value);
      j && j.data_center_id !== re && (C.value = ""), await Ct(re);
    }), mt(C, async (re) => {
      if (!re) {
        Le.value = [], x.value = "";
        return;
      }
      if (_e.value) return;
      const j = ke.value.find((Ee) => Ee.id === re);
      j && j.data_center_id !== U.value ? U.value = j.data_center_id : j && await Ct(j.data_center_id);
    });
    async function rt() {
      ge.value = !0;
      try {
        me.value = await l();
      } catch {
        n("toast", "Failed to load environment summary", "error");
      } finally {
        ge.value = !1;
      }
    }
    async function Ot() {
      if (!(!x.value || !C.value)) {
        tt.value = !0, de.value = null;
        try {
          const re = await _();
          st.value = re, re.can_export ? re.warnings.models_without_sources.length > 0 ? Xe.value = !0 : await Ht() : Pe.value = !0;
        } catch (re) {
          de.value = {
            status: "error",
            message: re instanceof Error ? re.message : "Validation failed"
          }, n("toast", "Validation failed", "error");
        } finally {
          tt.value = !1;
        }
      }
    }
    async function At() {
      Xe.value = !1, await Ht();
    }
    async function Ft() {
      try {
        const re = await _();
        st.value = re;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function Ht() {
      Te.value = !0;
      try {
        let re;
        if (le.value === "SPOT") {
          const Ee = Le.value.find((Ze) => Ze.id === x.value);
          Ee && (re = L.value === "SECURE" ? Ee.secureSpotPrice : Ee.communitySpotPrice);
        }
        const j = await f({
          gpu_type_id: x.value,
          pod_name: ie.value || "my-comfyui-deploy",
          network_volume_id: C.value,
          cloud_type: L.value,
          pricing_type: le.value,
          spot_bid: re,
          import_source: je.value
        });
        de.value = j, j.status === "success" && j.pod_id ? (Me.value = j.pod_id, Q.value = !0, gt(j.pod_id), n("toast", "Deployment started", "success"), n("deployed")) : n("toast", j.message, "error");
      } catch (re) {
        de.value = {
          status: "error",
          message: re instanceof Error ? re.message : "Deployment failed"
        }, n("toast", "Deployment failed", "error");
      } finally {
        Te.value = !1;
      }
    }
    function gt(re) {
      Bt(re), Je.value = window.setInterval(() => Bt(re), 3e3);
    }
    function Wt() {
      Je.value && (clearInterval(Je.value), Je.value = null);
    }
    async function Bt(re) {
      try {
        const j = await d(re);
        pe.value = j, (j.phase === "READY" || j.phase === "ERROR" || j.phase === "STOPPED") && (Wt(), j.phase === "READY" && n("toast", "ComfyUI is ready!", "success"), n("deployed"));
      } catch (j) {
        console.error("Failed to poll deployment status:", j);
      }
    }
    function qt() {
      Q.value = !1, Wt(), Me.value = null, pe.value = null;
    }
    function ts() {
      var re;
      (re = pe.value) != null && re.comfyui_url && window.open(pe.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function ss(re) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[re || ""] || "Initializing...";
    }
    function os(re) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[re || ""] ?? 10;
    }
    return Ne(async () => {
      try {
        const re = await m(!0);
        re.has_key && re.key_preview && (N.value = `****${re.key_preview}`, re.valid ? (T.value = !0, B.value = re.credit_balance ?? null, Y.value = { type: "success", message: "Connected to RunPod" }, await J()) : re.error && (Y.value = { type: "error", message: re.error }));
      } catch {
      }
    }), $s(() => {
      Wt();
    }), (re, j) => {
      var Ee, Ze, ht, Mt, Dt, xt;
      return s(), o(W, null, [
        e("div", Ew, [
          b(Ae, { title: "RUNPOD API KEY" }, {
            default: i(() => [
              e("div", Pw, [
                e("div", Rw, [
                  e("div", Tw, [
                    De(e("input", {
                      "onUpdate:modelValue": j[0] || (j[0] = (we) => N.value = we),
                      type: S.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: T.value
                    }, null, 8, Mw), [
                      [Zs, N.value]
                    ]),
                    e("button", {
                      class: "toggle-visibility-btn",
                      onClick: j[1] || (j[1] = (we) => S.value = !S.value),
                      title: S.value ? "Hide key" : "Show key"
                    }, a(S.value ? "👁" : "👁‍🗨"), 9, Dw)
                  ]),
                  T.value ? r("", !0) : (s(), P(X, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: I.value,
                    disabled: !N.value || I.value,
                    onClick: xe
                  }, {
                    default: i(() => [...j[16] || (j[16] = [
                      g(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  T.value ? (s(), P(X, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: Be
                  }, {
                    default: i(() => [...j[17] || (j[17] = [
                      g(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : r("", !0)
                ]),
                Y.value ? (s(), o("div", {
                  key: 0,
                  class: fe(["connection-status", Y.value.type])
                }, [
                  e("span", Lw, a(Y.value.type === "success" ? "✓" : "✕"), 1),
                  e("span", zw, a(Y.value.message), 1),
                  B.value !== null ? (s(), o("span", Uw, " $" + a(B.value.toFixed(2)) + " credit ", 1)) : r("", !0)
                ], 2)) : r("", !0),
                j[18] || (j[18] = e("div", { class: "api-key-help" }, [
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
          T.value ? (s(), P(Ae, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: i(() => [
              e("div", Nw, [
                e("div", Ow, [
                  j[19] || (j[19] = e("label", { class: "config-label" }, "Region", -1)),
                  De(e("select", {
                    "onUpdate:modelValue": j[2] || (j[2] = (we) => U.value = we),
                    class: "config-select",
                    disabled: oe.value
                  }, [
                    oe.value ? (s(), o("option", Fw, "Loading...")) : U.value ? r("", !0) : (s(), o("option", Bw, "Select a region")),
                    (s(!0), o(W, null, ae(ve.value, (we) => (s(), o("option", {
                      key: we.id,
                      value: we.id,
                      disabled: !we.available
                    }, a(we.id) + " (" + a(we.name) + ")" + a(we.available ? "" : " [Unavailable]"), 9, Vw))), 128))
                  ], 8, Aw), [
                    [Lt, U.value]
                  ])
                ]),
                e("div", Ww, [
                  j[24] || (j[24] = e("label", { class: "config-label" }, "Network Volume", -1)),
                  _e.value ? (s(), o("div", Gw, "Loading volumes...")) : Qe.value.length === 0 ? (s(), o(W, { key: 1 }, [
                    e("div", jw, [
                      j[20] || (j[20] = e("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      e("span", Kw, "No volumes in " + a(U.value || "this region"), 1)
                    ]),
                    j[21] || (j[21] = e("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    j[22] || (j[22] = e("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (s(), o(W, { key: 2 }, [
                    De(e("select", {
                      "onUpdate:modelValue": j[3] || (j[3] = (we) => C.value = we),
                      class: "config-select"
                    }, [
                      (s(!0), o(W, null, ae(Qe.value, (we) => (s(), o("option", {
                        key: we.id,
                        value: we.id
                      }, a(we.name) + " (" + a(we.size_gb) + "GB) ", 9, Hw))), 128))
                    ], 512), [
                      [Lt, C.value]
                    ]),
                    j[23] || (j[23] = e("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                e("div", qw, [
                  j[25] || (j[25] = e("label", { class: "config-label" }, "GPU Type", -1)),
                  De(e("select", {
                    "onUpdate:modelValue": j[4] || (j[4] = (we) => x.value = we),
                    class: "config-select",
                    disabled: Ue.value || !C.value
                  }, [
                    C.value ? Ue.value ? (s(), o("option", Xw, "Loading GPUs...")) : vt.value.length === 0 ? (s(), o("option", Qw, "No GPUs available in this region")) : r("", !0) : (s(), o("option", Jw, "Select a volume first")),
                    (s(!0), o(W, null, ae(vt.value, (we) => (s(), o("option", {
                      key: we.id,
                      value: we.id
                    }, a(we.displayName) + " (" + a(we.memoryInGb) + "GB) - $" + a(L.value === "SECURE" ? (we.securePrice ?? 0).toFixed(2) : (we.communityPrice ?? 0).toFixed(2)) + "/hr " + a(we.stockStatus ? `[${we.stockStatus}]` : ""), 9, Zw))), 128))
                  ], 8, Yw), [
                    [Lt, x.value]
                  ])
                ]),
                e("div", ek, [
                  j[26] || (j[26] = e("label", { class: "config-label" }, "Cloud Type", -1)),
                  e("div", tk, [
                    e("label", sk, [
                      De(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": j[5] || (j[5] = (we) => L.value = we),
                        value: "SECURE"
                      }, null, 512), [
                        [Rt, L.value]
                      ]),
                      e("span", ok, "Secure ($" + a(qe("SECURE")) + "/hr)", 1)
                    ]),
                    e("label", nk, [
                      De(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": j[6] || (j[6] = (we) => L.value = we),
                        value: "COMMUNITY"
                      }, null, 512), [
                        [Rt, L.value]
                      ]),
                      e("span", ak, "Community ($" + a(qe("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                e("div", lk, [
                  j[27] || (j[27] = e("label", { class: "config-label" }, [
                    g(" Pricing "),
                    e("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  e("div", ik, [
                    e("label", rk, [
                      De(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": j[7] || (j[7] = (we) => le.value = we),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [Rt, le.value]
                      ]),
                      e("span", dk, "On-Demand ($" + a(qe("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    e("label", ck, [
                      De(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": j[8] || (j[8] = (we) => le.value = we),
                        value: "SPOT"
                      }, null, 512), [
                        [Rt, le.value]
                      ]),
                      e("span", uk, "Spot ($" + a(qe("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                e("div", mk, [
                  j[28] || (j[28] = e("label", { class: "config-label" }, "Pod Name", -1)),
                  De(e("input", {
                    "onUpdate:modelValue": j[9] || (j[9] = (we) => ie.value = we),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [kt, ie.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : r("", !0),
          T.value ? (s(), P(Ae, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: i(() => [
              q.value ? (s(), o("div", vk, "Loading remotes...")) : K.value.length === 0 ? (s(), o("div", fk, [
                j[30] || (j[30] = e("div", { class: "empty-message" }, [
                  e("span", { class: "empty-icon" }, "🌐"),
                  e("span", { class: "empty-text" }, "No Git remotes configured"),
                  e("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                b(X, {
                  variant: "primary",
                  size: "xs",
                  onClick: j[10] || (j[10] = (we) => n("navigate", "remotes"))
                }, {
                  default: i(() => [...j[29] || (j[29] = [
                    g(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (s(), o(W, { key: 2 }, [
                e("div", pk, [
                  (s(!0), o(W, null, ae(K.value, (we) => (s(), P(yo, {
                    key: we.name,
                    remote: we,
                    "sync-status": ee.value[we.name],
                    "is-selected": O.value === we.name,
                    "is-fetching": A.value === we.name,
                    "is-pushing": M.value === we.name,
                    onFetch: D,
                    onPush: G,
                    onSelect: ne
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                be.value && be.value.ahead > 0 ? (s(), o("div", gk, [
                  j[31] || (j[31] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("div", hk, [
                    e("strong", null, a(be.value.ahead) + " unpushed commit" + a(be.value.ahead !== 1 ? "s" : ""), 1),
                    e("p", null, "Push to '" + a(O.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  b(X, {
                    variant: "primary",
                    size: "xs",
                    loading: M.value === O.value,
                    onClick: j[11] || (j[11] = (we) => O.value && G(O.value))
                  }, {
                    default: i(() => [
                      g(" Push to " + a(O.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : r("", !0),
                e("div", yk, [
                  b(X, {
                    variant: "link",
                    size: "xs",
                    onClick: j[12] || (j[12] = (we) => n("navigate", "remotes"))
                  }, {
                    default: i(() => [...j[32] || (j[32] = [
                      g(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : r("", !0),
          T.value ? (s(), P(Ae, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: i(() => [
              e("div", wk, [
                ge.value ? (s(), o("div", kk, "Loading environment summary...")) : me.value ? (s(), o(W, { key: 1 }, [
                  e("div", bk, [
                    j[33] || (j[33] = e("span", { class: "summary-label" }, "ComfyUI", -1)),
                    e("span", _k, a(me.value.comfyui_version), 1)
                  ]),
                  e("div", $k, [
                    j[34] || (j[34] = e("span", { class: "summary-label" }, "Nodes", -1)),
                    e("span", Ck, a(me.value.node_count) + " custom nodes", 1)
                  ]),
                  e("div", xk, [
                    j[35] || (j[35] = e("span", { class: "summary-label" }, "Models", -1)),
                    e("span", Sk, a(me.value.model_count) + " models", 1)
                  ]),
                  me.value.models_with_sources > 0 ? (s(), o("div", Ik, [
                    e("span", Ek, "└─ " + a(me.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : r("", !0),
                  me.value.models_without_sources > 0 ? (s(), o("div", Pk, [
                    e("span", Rk, "└─ " + a(me.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : r("", !0),
                  e("div", Tk, [
                    j[36] || (j[36] = e("span", { class: "summary-label" }, "Workflows", -1)),
                    e("span", Mk, a(me.value.workflow_count) + " committed", 1)
                  ]),
                  e("div", Dk, [
                    j[37] || (j[37] = e("span", { class: "summary-label" }, "Package", -1)),
                    e("span", Lk, "~" + a(me.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : r("", !0)
              ])
            ]),
            _: 1
          })) : r("", !0),
          T.value && ce.value ? (s(), P(Ae, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: i(() => {
              var we, St;
              return [
                e("div", zk, [
                  e("div", Uk, [
                    e("div", Nk, [
                      j[42] || (j[42] = e("div", { class: "column-header" }, "Pricing", -1)),
                      e("div", Ok, [
                        j[38] || (j[38] = e("span", { class: "pricing-label" }, "GPU:", -1)),
                        e("span", Ak, "$" + a(ce.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      e("div", Fk, [
                        j[39] || (j[39] = e("span", { class: "pricing-label" }, "Volume:", -1)),
                        e("span", Bk, "$" + a(ce.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      e("div", Vk, [
                        j[40] || (j[40] = e("span", { class: "pricing-label" }, "Disk:", -1)),
                        e("span", Wk, "$" + a(ce.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      j[43] || (j[43] = e("div", { class: "pricing-divider" }, null, -1)),
                      e("div", Gk, [
                        j[41] || (j[41] = e("span", { class: "pricing-label" }, "Total:", -1)),
                        e("span", jk, "~$" + a(ce.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    e("div", Kk, [
                      j[45] || (j[45] = e("div", { class: "column-header" }, "Pod Specs", -1)),
                      e("div", Hk, [
                        e("span", null, a(((we = Le.value.find((H) => H.id === x.value)) == null ? void 0 : we.displayName) || "GPU") + " (" + a(((St = Le.value.find((H) => H.id === x.value)) == null ? void 0 : St.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      e("div", qk, [
                        e("span", null, "Region: " + a(U.value), 1)
                      ]),
                      He.value ? (s(), o("div", Yk, [
                        e("span", null, "Volume: " + a(He.value.name), 1)
                      ])) : r("", !0),
                      le.value === "SPOT" ? (s(), o("div", Jk, [...j[44] || (j[44] = [
                        e("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : r("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : r("", !0),
          T.value ? (s(), o("div", Xk, [
            b(X, {
              variant: "primary",
              size: "md",
              loading: tt.value || Te.value,
              disabled: !it.value,
              onClick: Ot
            }, {
              default: i(() => [
                j[46] || (j[46] = e("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                  e("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                ], -1)),
                g(" " + a(tt.value ? "Validating..." : Te.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : r("", !0),
          de.value ? (s(), P(Ae, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: i(() => [
              b(ot, {
                status: de.value.status === "success" ? "synced" : "broken"
              }, Kt({
                icon: i(() => [
                  g(a(de.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: i(() => [
                  g(a(de.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: i(() => [
                  g(a(de.value.message), 1)
                ]),
                actions: i(() => [
                  b(X, {
                    variant: "ghost",
                    size: "xs",
                    onClick: j[13] || (j[13] = (we) => de.value = null)
                  }, {
                    default: i(() => [...j[47] || (j[47] = [
                      g(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                de.value.pod_id ? {
                  name: "details",
                  fn: i(() => [
                    b(Ge, {
                      label: "Pod ID:",
                      value: de.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : r("", !0)
        ]),
        Q.value ? (s(), P(Ye, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((Ee = pe.value) == null ? void 0 : Ee.phase) === "READY" || ((Ze = pe.value) == null ? void 0 : Ze.phase) === "ERROR" || ((ht = pe.value) == null ? void 0 : ht.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: qt
        }, Kt({
          body: i(() => {
            var we, St, H, F, he, Ie, Oe, Ke, lt, It, Gt, V;
            return [
              e("div", Qk, [
                e("div", Zk, [
                  e("div", {
                    class: fe(["phase-icon", (St = (we = pe.value) == null ? void 0 : we.phase) == null ? void 0 : St.toLowerCase()])
                  }, [
                    ((H = pe.value) == null ? void 0 : H.phase) === "READY" ? (s(), o("span", eb, "✓")) : ((F = pe.value) == null ? void 0 : F.phase) === "ERROR" ? (s(), o("span", tb, "✕")) : ((he = pe.value) == null ? void 0 : he.phase) === "STOPPED" ? (s(), o("span", sb, "○")) : (s(), o("span", ob, "⟳"))
                  ], 2),
                  e("div", nb, [
                    e("div", ab, a(ss((Ie = pe.value) == null ? void 0 : Ie.phase)), 1),
                    e("div", lb, a(((Oe = pe.value) == null ? void 0 : Oe.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                b(Cs, {
                  progress: os((Ke = pe.value) == null ? void 0 : Ke.phase),
                  variant: ((lt = pe.value) == null ? void 0 : lt.phase) === "ERROR" ? "error" : ((It = pe.value) == null ? void 0 : It.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((Gt = pe.value) == null ? void 0 : Gt.phase) === "READY" ? (s(), o("div", ib, [
                  b(X, {
                    variant: "primary",
                    size: "md",
                    onClick: ts
                  }, {
                    default: i(() => [...j[48] || (j[48] = [
                      g(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : r("", !0),
                e("div", rb, [
                  (V = pe.value) != null && V.console_url ? (s(), o("a", {
                    key: 0,
                    href: pe.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, db)) : r("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((Mt = pe.value) == null ? void 0 : Mt.phase) === "READY" || ((Dt = pe.value) == null ? void 0 : Dt.phase) === "ERROR" || ((xt = pe.value) == null ? void 0 : xt.phase) === "STOPPED" ? {
            name: "footer",
            fn: i(() => [
              b(X, {
                variant: "ghost",
                size: "xs",
                onClick: qt
              }, {
                default: i(() => [...j[49] || (j[49] = [
                  g(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : r("", !0),
        Pe.value && st.value ? (s(), P(fo, {
          key: 1,
          issues: st.value.blocking_issues,
          onClose: j[14] || (j[14] = (we) => Pe.value = !1)
        }, null, 8, ["issues"])) : r("", !0),
        Xe.value && st.value ? (s(), P(po, {
          key: 2,
          models: st.value.warnings.models_without_sources,
          onConfirm: At,
          onCancel: j[15] || (j[15] = (we) => Xe.value = !1),
          onRevalidate: Ft
        }, null, 8, ["models"])) : r("", !0)
      ], 64);
    };
  }
}), ub = /* @__PURE__ */ se(cb, [["__scopeId", "data-v-925ec410"]]), mb = { class: "worker-header" }, vb = { class: "worker-status" }, fb = { class: "worker-name" }, pb = { class: "worker-actions" }, gb = { class: "worker-details" }, hb = { class: "detail-item" }, yb = { class: "detail-value" }, wb = {
  key: 0,
  class: "detail-item"
}, kb = { class: "detail-value" }, bb = {
  key: 1,
  class: "detail-item"
}, _b = { class: "detail-value mode-badge" }, $b = {
  key: 0,
  class: "worker-stats"
}, Cb = {
  key: 0,
  class: "stat-item"
}, xb = { key: 0 }, Sb = {
  key: 1,
  class: "worker-stats offline"
}, Ib = /* @__PURE__ */ te({
  __name: "WorkerCard",
  props: {
    worker: {},
    isActionLoading: { type: Boolean }
  },
  emits: ["deploy", "manage", "remove"],
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: fe(["worker-card", { offline: t.worker.status === "offline" }])
    }, [
      e("div", mb, [
        e("div", vb, [
          e("span", {
            class: fe(["status-dot", t.worker.status])
          }, null, 2),
          e("span", fb, a(t.worker.name), 1)
        ]),
        e("div", pb, [
          t.worker.status === "online" ? (s(), P(X, {
            key: 0,
            variant: "primary",
            size: "xs",
            disabled: t.isActionLoading,
            onClick: n[0] || (n[0] = (l) => c.$emit("deploy", t.worker))
          }, {
            default: i(() => [...n[3] || (n[3] = [
              g(" Deploy ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])) : r("", !0),
          t.worker.status === "online" ? (s(), P(X, {
            key: 1,
            variant: "ghost",
            size: "xs",
            disabled: t.isActionLoading,
            onClick: n[1] || (n[1] = (l) => c.$emit("manage", t.worker))
          }, {
            default: i(() => [...n[4] || (n[4] = [
              g(" Manage ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])) : r("", !0),
          b(X, {
            variant: "ghost",
            size: "xs",
            loading: t.isActionLoading,
            onClick: n[2] || (n[2] = (l) => c.$emit("remove", t.worker.name))
          }, {
            default: i(() => [...n[5] || (n[5] = [
              g(" Remove ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ]),
      e("div", gb, [
        e("span", hb, [
          e("span", yb, a(t.worker.host) + ":" + a(t.worker.port), 1)
        ]),
        t.worker.gpu_info ? (s(), o("span", wb, [
          n[6] || (n[6] = e("span", { class: "detail-label" }, "•", -1)),
          e("span", kb, a(t.worker.gpu_info), 1)
        ])) : r("", !0),
        t.worker.mode ? (s(), o("span", bb, [
          n[7] || (n[7] = e("span", { class: "detail-label" }, "•", -1)),
          e("span", _b, a(t.worker.mode), 1)
        ])) : r("", !0)
      ]),
      t.worker.status === "online" ? (s(), o("div", $b, [
        n[8] || (n[8] = e("span", { class: "stat-item" }, [
          g(" Status: "),
          e("span", { class: "stat-value online" }, "Online")
        ], -1)),
        t.worker.instance_count !== void 0 ? (s(), o("span", Cb, [
          g(" • " + a(t.worker.instance_count) + " instance" + a(t.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          t.worker.running_count ? (s(), o("span", xb, "(" + a(t.worker.running_count) + " running)", 1)) : r("", !0)
        ])) : r("", !0)
      ])) : (s(), o("div", Sb, [...n[9] || (n[9] = [
        e("span", { class: "stat-item" }, [
          g(" Status: "),
          e("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), Eb = /* @__PURE__ */ se(Ib, [["__scopeId", "data-v-054127e2"]]), Pb = { class: "add-worker-content" }, Rb = {
  key: 0,
  class: "discovered-section"
}, Tb = { class: "discovered-list" }, Mb = { class: "discovered-info" }, Db = { class: "discovered-name" }, Lb = { class: "discovered-address" }, zb = {
  key: 0,
  class: "discovered-gpu"
}, Ub = {
  key: 1,
  class: "divider"
}, Nb = { class: "manual-form" }, Ob = { class: "form-row" }, Ab = { class: "form-row-inline" }, Fb = { class: "form-field flex-2" }, Bb = { class: "form-field flex-1" }, Vb = { class: "form-row" }, Wb = { class: "api-key-wrapper" }, Gb = ["type"], jb = { class: "result-icon" }, Kb = { class: "result-content" }, Hb = { class: "result-message" }, qb = {
  key: 0,
  class: "result-detail"
}, Yb = { class: "modal-actions" }, Jb = /* @__PURE__ */ te({
  __name: "AddWorkerModal",
  props: {
    discoveredWorkers: {},
    isScanning: { type: Boolean }
  },
  emits: ["close", "add", "scan"],
  setup(t, { emit: c }) {
    const n = t, l = c, { testWorkerConnection: p } = We(), v = ms({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), u = h(!1), f = h(!1), d = h(!1), m = h(null), w = z(() => n.discoveredWorkers.filter(
      ($) => !(v.host === $.host && v.port === $.port)
    )), _ = z(() => v.host && v.port && v.apiKey), k = z(() => v.name && v.host && v.port && v.apiKey);
    function y($) {
      v.name = $.name, v.host = $.host, v.port = $.port, m.value = null;
    }
    async function R() {
      if (_.value) {
        f.value = !0, m.value = null;
        try {
          const $ = await p({
            host: v.host,
            port: v.port,
            api_key: v.apiKey
          });
          $.status === "success" ? (m.value = {
            type: "success",
            message: $.message,
            gpu_info: $.gpu_info
          }, !v.name && $.gpu_info && (v.name = `worker-${v.host.split(".").pop()}`)) : m.value = {
            type: "error",
            message: $.message
          };
        } catch ($) {
          m.value = {
            type: "error",
            message: $ instanceof Error ? $.message : "Connection test failed"
          };
        } finally {
          f.value = !1;
        }
      }
    }
    function E() {
      k.value && (d.value = !0, l("add", {
        name: v.name,
        host: v.host,
        port: v.port,
        api_key: v.apiKey
      }));
    }
    return ($, S) => (s(), P(Ye, {
      title: "ADD CUSTOM WORKER",
      size: "md",
      onClose: S[5] || (S[5] = (N) => $.$emit("close"))
    }, {
      body: i(() => [
        e("div", Pb, [
          w.value.length > 0 ? (s(), o("div", Rb, [
            S[7] || (S[7] = e("div", { class: "section-label" }, "Discovered Workers", -1)),
            e("div", Tb, [
              (s(!0), o(W, null, ae(w.value, (N) => (s(), o("div", {
                key: `${N.host}:${N.port}`,
                class: "discovered-item"
              }, [
                e("div", Mb, [
                  e("span", Db, a(N.name), 1),
                  e("span", Lb, "(" + a(N.host) + ":" + a(N.port) + ")", 1),
                  N.gpu_info ? (s(), o("span", zb, a(N.gpu_info), 1)) : r("", !0)
                ]),
                b(X, {
                  variant: "secondary",
                  size: "xs",
                  onClick: (T) => y(N)
                }, {
                  default: i(() => [...S[6] || (S[6] = [
                    g(" Add ", -1)
                  ])]),
                  _: 1
                }, 8, ["onClick"])
              ]))), 128))
            ])
          ])) : r("", !0),
          w.value.length > 0 ? (s(), o("div", Ub, [...S[8] || (S[8] = [
            e("span", null, "Or Enter Manually", -1)
          ])])) : r("", !0),
          e("div", Nb, [
            e("div", Ob, [
              S[9] || (S[9] = e("label", { class: "form-label" }, "Worker Name", -1)),
              De(e("input", {
                "onUpdate:modelValue": S[0] || (S[0] = (N) => v.name = N),
                type: "text",
                class: "form-input",
                placeholder: "my-worker"
              }, null, 512), [
                [kt, v.name]
              ])
            ]),
            e("div", Ab, [
              e("div", Fb, [
                S[10] || (S[10] = e("label", { class: "form-label" }, "Host", -1)),
                De(e("input", {
                  "onUpdate:modelValue": S[1] || (S[1] = (N) => v.host = N),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [kt, v.host]
                ])
              ]),
              e("div", Bb, [
                S[11] || (S[11] = e("label", { class: "form-label" }, "Port", -1)),
                De(e("input", {
                  "onUpdate:modelValue": S[2] || (S[2] = (N) => v.port = N),
                  type: "number",
                  class: "form-input",
                  placeholder: "9090"
                }, null, 512), [
                  [
                    kt,
                    v.port,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ]),
            e("div", Vb, [
              S[12] || (S[12] = e("label", { class: "form-label" }, "API Key", -1)),
              e("div", Wb, [
                De(e("input", {
                  "onUpdate:modelValue": S[3] || (S[3] = (N) => v.apiKey = N),
                  type: u.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, Gb), [
                  [Zs, v.apiKey]
                ]),
                e("button", {
                  class: "toggle-visibility",
                  onClick: S[4] || (S[4] = (N) => u.value = !u.value),
                  type: "button"
                }, a(u.value ? "👁" : "👁‍🗨"), 1)
              ]),
              S[13] || (S[13] = e("div", { class: "form-help" }, [
                e("span", { class: "help-icon" }, "ⓘ"),
                g(" Run "),
                e("code", null, "cg-deploy worker setup"),
                g(" on the worker to get the key ")
              ], -1))
            ]),
            m.value ? (s(), o("div", {
              key: 0,
              class: fe(["test-result", m.value.type])
            }, [
              e("span", jb, a(m.value.type === "success" ? "✓" : "✕"), 1),
              e("div", Kb, [
                e("span", Hb, a(m.value.message), 1),
                m.value.gpu_info ? (s(), o("span", qb, "GPU: " + a(m.value.gpu_info), 1)) : r("", !0)
              ])
            ], 2)) : r("", !0)
          ])
        ])
      ]),
      footer: i(() => [
        e("div", Yb, [
          b(X, {
            variant: "ghost",
            size: "sm",
            loading: f.value,
            disabled: !_.value || f.value,
            onClick: R
          }, {
            default: i(() => [...S[14] || (S[14] = [
              g(" Test Connection ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          b(X, {
            variant: "primary",
            size: "sm",
            loading: d.value,
            disabled: !k.value || d.value,
            onClick: E
          }, {
            default: i(() => [...S[15] || (S[15] = [
              g(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }));
  }
}), Xb = /* @__PURE__ */ se(Jb, [["__scopeId", "data-v-2c29c7b4"]]), Qb = { class: "deploy-content" }, Zb = { class: "section" }, e_ = {
  key: 0,
  class: "loading-text"
}, t_ = {
  key: 1,
  class: "empty-remotes"
}, s_ = {
  key: 2,
  class: "remotes-list"
}, o_ = { class: "section" }, n_ = { class: "mode-options" }, a_ = { class: "mode-option" }, l_ = ["disabled"], i_ = { class: "mode-option" }, r_ = { class: "section" }, d_ = {
  key: 0,
  class: "section"
}, c_ = { class: "summary-row" }, u_ = {
  key: 1,
  class: "sync-warning"
}, m_ = { class: "warning-content" }, v_ = { class: "modal-actions" }, f_ = /* @__PURE__ */ te({
  __name: "DeployToWorkerModal",
  props: {
    worker: {}
  },
  emits: ["close", "toast", "deployed"],
  setup(t, { emit: c }) {
    const n = t, l = c, {
      getRemotes: p,
      getRemoteSyncStatus: v,
      fetchRemote: u,
      pushToRemote: f,
      getDeploySummary: d,
      deployToWorker: m
    } = We(), w = h([]), _ = h({}), k = h(!1), y = h(null), R = h(null), E = h(null), $ = h(n.worker.mode || "native"), S = h(""), N = h(null), T = h(!1), I = z(() => y.value && _.value[y.value] || null), Y = z(() => {
      if (!y.value) return null;
      const K = w.value.find((ee) => ee.name === y.value);
      return (K == null ? void 0 : K.fetch_url) || null;
    }), B = z(() => Y.value && !T.value);
    async function U() {
      k.value = !0;
      try {
        const K = await p();
        w.value = K.remotes, await Promise.all(
          K.remotes.map(async (q) => {
            const O = await v(q.name);
            O && (_.value[q.name] = O);
          })
        );
        const ee = K.remotes.find((q) => q.is_default);
        ee ? y.value = ee.name : K.remotes.length > 0 && (y.value = K.remotes[0].name);
      } catch {
        l("toast", "Failed to load remotes", "error");
      } finally {
        k.value = !1;
      }
    }
    async function C() {
      try {
        N.value = await d();
      } catch {
      }
    }
    async function x(K) {
      R.value = K;
      try {
        await u(K);
        const ee = await v(K);
        ee && (_.value[K] = ee), l("toast", `Fetched from ${K}`, "success");
      } catch {
        l("toast", "Fetch failed", "error");
      } finally {
        R.value = null;
      }
    }
    async function L(K) {
      E.value = K;
      try {
        await f(K, { force: !1 });
        const ee = await v(K);
        ee && (_.value[K] = ee), l("toast", `Pushed to ${K}`, "success");
      } catch {
        l("toast", "Push failed", "error");
      } finally {
        E.value = null;
      }
    }
    function le(K) {
      y.value = K;
    }
    async function ie() {
      if (Y.value) {
        T.value = !0;
        try {
          const K = await m(n.worker.name, {
            import_source: Y.value,
            mode: $.value,
            name: S.value || void 0
          });
          K.status === "success" ? (l("toast", "Deployment started", "success"), l("deployed")) : l("toast", K.message, "error");
        } catch (K) {
          l("toast", K instanceof Error ? K.message : "Deployment failed", "error");
        } finally {
          T.value = !1;
        }
      }
    }
    return Ne(() => {
      U(), C();
    }), (K, ee) => (s(), P(Ye, {
      title: `DEPLOY TO: ${t.worker.name}`,
      size: "md",
      onClose: ee[5] || (ee[5] = (q) => K.$emit("close"))
    }, {
      body: i(() => [
        e("div", Qb, [
          e("div", Zb, [
            ee[7] || (ee[7] = e("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            k.value ? (s(), o("div", e_, "Loading remotes...")) : w.value.length === 0 ? (s(), o("div", t_, [...ee[6] || (ee[6] = [
              e("span", { class: "empty-icon" }, "🌐", -1),
              e("span", { class: "empty-text" }, "No Git remotes configured", -1),
              e("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (s(), o("div", s_, [
              (s(!0), o(W, null, ae(w.value, (q) => (s(), P(yo, {
                key: q.name,
                remote: q,
                "sync-status": _.value[q.name],
                "is-selected": y.value === q.name,
                "is-fetching": R.value === q.name,
                "is-pushing": E.value === q.name,
                onFetch: x,
                onPush: L,
                onSelect: le
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          e("div", o_, [
            ee[10] || (ee[10] = e("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            e("div", n_, [
              e("label", a_, [
                De(e("input", {
                  type: "radio",
                  "onUpdate:modelValue": ee[0] || (ee[0] = (q) => $.value = q),
                  value: "docker",
                  disabled: !t.worker.mode || t.worker.mode === "native"
                }, null, 8, l_), [
                  [Rt, $.value]
                ]),
                ee[8] || (ee[8] = e("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              e("label", i_, [
                De(e("input", {
                  type: "radio",
                  "onUpdate:modelValue": ee[1] || (ee[1] = (q) => $.value = q),
                  value: "native"
                }, null, 512), [
                  [Rt, $.value]
                ]),
                ee[9] || (ee[9] = e("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          e("div", r_, [
            ee[11] || (ee[11] = e("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            De(e("input", {
              "onUpdate:modelValue": ee[2] || (ee[2] = (q) => S.value = q),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [kt, S.value]
            ])
          ]),
          N.value ? (s(), o("div", d_, [
            ee[12] || (ee[12] = e("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            e("div", c_, " ComfyUI: " + a(N.value.comfyui_version) + " • " + a(N.value.node_count) + " nodes • " + a(N.value.model_count) + " models • " + a(N.value.workflow_count) + " workflows ", 1)
          ])) : r("", !0),
          I.value && I.value.ahead > 0 ? (s(), o("div", u_, [
            ee[14] || (ee[14] = e("span", { class: "warning-icon" }, "⚠", -1)),
            e("div", m_, [
              e("strong", null, a(I.value.ahead) + " unpushed commit" + a(I.value.ahead !== 1 ? "s" : ""), 1),
              e("p", null, "Push to '" + a(y.value) + "' before deploying to include your latest changes.", 1)
            ]),
            b(X, {
              variant: "primary",
              size: "xs",
              loading: E.value === y.value,
              onClick: ee[3] || (ee[3] = (q) => y.value && L(y.value))
            }, {
              default: i(() => [...ee[13] || (ee[13] = [
                g(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : r("", !0)
        ])
      ]),
      footer: i(() => [
        e("div", v_, [
          b(X, {
            variant: "ghost",
            size: "sm",
            onClick: ee[4] || (ee[4] = (q) => K.$emit("close"))
          }, {
            default: i(() => [...ee[15] || (ee[15] = [
              g(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(X, {
            variant: "primary",
            size: "sm",
            loading: T.value,
            disabled: !B.value || T.value,
            onClick: ie
          }, {
            default: i(() => [...ee[16] || (ee[16] = [
              g(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), p_ = /* @__PURE__ */ se(f_, [["__scopeId", "data-v-980198eb"]]), g_ = { class: "worker-details-content" }, h_ = { class: "section" }, y_ = { class: "detail-card" }, w_ = { class: "detail-row" }, k_ = { class: "detail-value mono" }, b_ = { class: "detail-row" }, __ = {
  key: 0,
  class: "section"
}, $_ = { class: "detail-card" }, C_ = { class: "detail-row" }, x_ = { class: "detail-value" }, S_ = { class: "detail-row" }, I_ = { class: "detail-value capitalize" }, E_ = { class: "detail-row" }, P_ = { class: "detail-value mono" }, R_ = { class: "section" }, T_ = { class: "section-header" }, M_ = { class: "section-label" }, D_ = {
  key: 0,
  class: "loading-text"
}, L_ = {
  key: 1,
  class: "empty-text"
}, z_ = {
  key: 2,
  class: "instances-list"
}, U_ = { class: "instance-info" }, N_ = { class: "instance-name" }, O_ = { class: "instance-port" }, A_ = { class: "instance-state" }, F_ = { class: "instance-actions" }, B_ = {
  key: 1,
  class: "section"
}, V_ = { class: "port-info" }, W_ = { class: "modal-actions" }, G_ = /* @__PURE__ */ te({
  __name: "WorkerDetailsModal",
  props: {
    worker: {}
  },
  emits: ["close", "toast", "refresh"],
  setup(t, { emit: c }) {
    const n = t, l = c, {
      getWorkerSystemInfo: p,
      getWorkerInstances: v,
      startWorkerInstance: u,
      stopWorkerInstance: f,
      terminateWorkerInstance: d,
      removeCustomWorker: m
    } = We(), w = h(null), _ = h([]), k = h(null), y = h(!1), R = h(!1), E = h(null), $ = h(!1);
    function S(C) {
      switch (C) {
        case "running":
          return "●";
        case "stopped":
          return "○";
        case "deploying":
          return "⟳";
        case "error":
          return "✕";
        default:
          return "?";
      }
    }
    async function N() {
      if (n.worker.status === "online") {
        y.value = !0;
        try {
          w.value = await p(n.worker.name);
        } catch {
          l("toast", "Failed to load system info", "error");
        } finally {
          y.value = !1;
        }
      }
    }
    async function T() {
      if (n.worker.status === "online") {
        R.value = !0;
        try {
          const C = await v(n.worker.name);
          _.value = C.instances, k.value = {
            port_range: C.port_range,
            ports_available: C.ports_available
          };
        } catch {
          l("toast", "Failed to load instances", "error");
        } finally {
          R.value = !1;
        }
      }
    }
    async function I(C) {
      E.value = C;
      try {
        await u(n.worker.name, C), l("toast", "Instance starting...", "success"), await T();
      } catch (x) {
        l("toast", x instanceof Error ? x.message : "Failed to start instance", "error");
      } finally {
        E.value = null;
      }
    }
    async function Y(C) {
      E.value = C;
      try {
        await f(n.worker.name, C), l("toast", "Instance stopped", "success"), await T();
      } catch (x) {
        l("toast", x instanceof Error ? x.message : "Failed to stop instance", "error");
      } finally {
        E.value = null;
      }
    }
    async function B(C) {
      E.value = C;
      try {
        await d(n.worker.name, C), l("toast", "Instance terminated", "success"), await T();
      } catch (x) {
        l("toast", x instanceof Error ? x.message : "Failed to terminate instance", "error");
      } finally {
        E.value = null;
      }
    }
    async function U() {
      $.value = !0;
      try {
        await m(n.worker.name), l("toast", `Worker '${n.worker.name}' removed`, "success"), l("refresh"), l("close");
      } catch (C) {
        l("toast", C instanceof Error ? C.message : "Failed to remove worker", "error");
      } finally {
        $.value = !1;
      }
    }
    return Ne(() => {
      N(), T();
    }), (C, x) => (s(), P(Ye, {
      title: `WORKER: ${t.worker.name}`,
      size: "md",
      onClose: x[1] || (x[1] = (L) => C.$emit("close"))
    }, {
      body: i(() => [
        e("div", g_, [
          e("div", h_, [
            x[4] || (x[4] = e("div", { class: "section-label" }, "CONNECTION", -1)),
            e("div", y_, [
              e("div", w_, [
                x[2] || (x[2] = e("span", { class: "detail-label" }, "Host:", -1)),
                e("span", k_, a(t.worker.host) + ":" + a(t.worker.port), 1)
              ]),
              e("div", b_, [
                x[3] || (x[3] = e("span", { class: "detail-label" }, "Status:", -1)),
                e("span", {
                  class: fe(["detail-value", "status", t.worker.status])
                }, a(t.worker.status === "online" ? "● Online" : "○ Offline"), 3)
              ])
            ])
          ]),
          w.value ? (s(), o("div", __, [
            x[8] || (x[8] = e("div", { class: "section-label" }, "SYSTEM INFO", -1)),
            e("div", $_, [
              e("div", C_, [
                x[5] || (x[5] = e("span", { class: "detail-label" }, "GPU:", -1)),
                e("span", x_, a(w.value.gpu.name) + " (" + a(Math.round(w.value.gpu.memory_total_mb / 1024)) + "GB)", 1)
              ]),
              e("div", S_, [
                x[6] || (x[6] = e("span", { class: "detail-label" }, "Mode:", -1)),
                e("span", I_, a(w.value.default_mode), 1)
              ]),
              e("div", E_, [
                x[7] || (x[7] = e("span", { class: "detail-label" }, "Workspace:", -1)),
                e("span", P_, a(w.value.workspace_path), 1)
              ])
            ])
          ])) : r("", !0),
          e("div", R_, [
            e("div", T_, [
              e("div", M_, "INSTANCES (" + a(_.value.length) + ")", 1),
              b(X, {
                variant: "ghost",
                size: "xs",
                loading: R.value,
                onClick: T
              }, {
                default: i(() => [...x[9] || (x[9] = [
                  g(" Refresh ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])
            ]),
            R.value && _.value.length === 0 ? (s(), o("div", D_, " Loading instances... ")) : _.value.length === 0 ? (s(), o("div", L_, " No instances on this worker ")) : (s(), o("div", z_, [
              (s(!0), o(W, null, ae(_.value, (L) => (s(), o("div", {
                key: L.id,
                class: "instance-item"
              }, [
                e("div", U_, [
                  e("span", {
                    class: fe(["instance-status", L.status])
                  }, a(S(L.status)), 3),
                  e("span", N_, a(L.name), 1),
                  e("span", O_, ":" + a(L.assigned_port), 1),
                  e("span", A_, a(L.status), 1)
                ]),
                e("div", F_, [
                  L.status === "running" ? (s(), P(X, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    loading: E.value === L.id,
                    onClick: (le) => Y(L.id)
                  }, {
                    default: i(() => [...x[10] || (x[10] = [
                      g(" Stop ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "onClick"])) : r("", !0),
                  L.status === "stopped" ? (s(), P(X, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    loading: E.value === L.id,
                    onClick: (le) => I(L.id)
                  }, {
                    default: i(() => [...x[11] || (x[11] = [
                      g(" Start ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "onClick"])) : r("", !0),
                  b(X, {
                    variant: "ghost",
                    size: "xs",
                    loading: E.value === L.id,
                    onClick: (le) => B(L.id)
                  }, {
                    default: i(() => [...x[12] || (x[12] = [
                      g(" Term ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "onClick"])
                ])
              ]))), 128))
            ]))
          ]),
          k.value ? (s(), o("div", B_, [
            e("div", V_, " PORT RANGE: " + a(k.value.port_range.start) + "-" + a(k.value.port_range.end) + " (" + a(k.value.ports_available) + " available) ", 1)
          ])) : r("", !0)
        ])
      ]),
      footer: i(() => [
        e("div", W_, [
          b(X, {
            variant: "ghost",
            size: "sm",
            onClick: x[0] || (x[0] = (L) => C.$emit("close"))
          }, {
            default: i(() => [...x[13] || (x[13] = [
              g(" Disconnect ", -1)
            ])]),
            _: 1
          }),
          b(X, {
            variant: "error",
            size: "sm",
            loading: $.value,
            onClick: U
          }, {
            default: i(() => [...x[14] || (x[14] = [
              g(" Remove Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), j_ = /* @__PURE__ */ se(G_, [["__scopeId", "data-v-e0cf3711"]]), K_ = { class: "custom-tab" }, H_ = { class: "section-header" }, q_ = { class: "section-actions" }, Y_ = { class: "workers-content" }, J_ = {
  key: 0,
  class: "loading-state"
}, X_ = {
  key: 1,
  class: "empty-state"
}, Q_ = {
  key: 2,
  class: "workers-list"
}, Z_ = { class: "scan-icon" }, e2 = { class: "scan-message" }, t2 = /* @__PURE__ */ te({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(t, { emit: c }) {
    const n = c, {
      getCustomWorkers: l,
      addCustomWorker: p,
      removeCustomWorker: v,
      scanForWorkers: u
    } = We(), f = h([]), d = h([]), m = h(!1), w = h(!1), _ = h(null), k = h(!1), y = h(null), R = h(null), E = h(null);
    async function $() {
      m.value = !0;
      try {
        const U = await l();
        f.value = U.workers;
      } catch (U) {
        n("toast", U instanceof Error ? U.message : "Failed to load workers", "error");
      } finally {
        m.value = !1;
      }
    }
    async function S() {
      w.value = !0, E.value = null;
      try {
        const U = await u();
        d.value = U.discovered;
        const C = U.discovered.filter(
          (x) => !f.value.some((L) => L.host === x.host && L.port === x.port)
        );
        C.length > 0 ? (E.value = {
          type: "success",
          message: `Found ${C.length} new worker${C.length !== 1 ? "s" : ""} on the network`
        }, k.value || (k.value = !0)) : U.discovered.length > 0 ? E.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : E.value = {
          type: "info",
          message: "No workers found on the network. Make sure workers are running with --broadcast"
        };
      } catch (U) {
        n("toast", U instanceof Error ? U.message : "Network scan failed", "error");
      } finally {
        w.value = !1;
      }
    }
    async function N(U) {
      try {
        await p(U), n("toast", `Worker '${U.name}' added`, "success"), k.value = !1, await $();
      } catch (C) {
        n("toast", C instanceof Error ? C.message : "Failed to add worker", "error");
      }
    }
    async function T(U) {
      _.value = U;
      try {
        await v(U), n("toast", `Worker '${U}' removed`, "success"), await $();
      } catch (C) {
        n("toast", C instanceof Error ? C.message : "Failed to remove worker", "error");
      } finally {
        _.value = null;
      }
    }
    function I(U) {
      y.value = U;
    }
    function Y(U) {
      R.value = U;
    }
    function B() {
      y.value = null, n("deployed");
    }
    return Ne(() => {
      $();
    }), (U, C) => (s(), o("div", K_, [
      e("div", H_, [
        C[9] || (C[9] = e("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        e("div", q_, [
          b(X, {
            variant: "ghost",
            size: "xs",
            loading: w.value,
            disabled: w.value,
            onClick: S
          }, {
            default: i(() => [...C[7] || (C[7] = [
              g(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          b(X, {
            variant: "secondary",
            size: "xs",
            onClick: C[0] || (C[0] = (x) => k.value = !0)
          }, {
            default: i(() => [...C[8] || (C[8] = [
              g(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      e("div", Y_, [
        m.value && f.value.length === 0 ? (s(), o("div", J_, [...C[10] || (C[10] = [
          e("span", { class: "spinner" }, null, -1),
          g(" Loading workers... ", -1)
        ])])) : f.value.length === 0 ? (s(), o("div", X_, [...C[11] || (C[11] = [
          e("div", { class: "empty-card" }, [
            e("span", { class: "empty-text" }, "No workers registered yet"),
            e("p", { class: "empty-help" }, " To add a custom worker: "),
            e("ol", { class: "setup-steps" }, [
              e("li", null, [
                g("On your GPU machine, run:"),
                e("br"),
                e("code", null, "cg-deploy worker setup"),
                e("br"),
                e("code", null, "cg-deploy worker up --broadcast")
              ]),
              e("li", null, 'Click "Scan Network" above or "Add" to enter manually')
            ])
          ], -1)
        ])])) : (s(), o("div", Q_, [
          (s(!0), o(W, null, ae(f.value, (x) => (s(), P(Eb, {
            key: x.name,
            worker: x,
            "is-action-loading": _.value === x.name,
            onDeploy: I,
            onManage: Y,
            onRemove: T
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      E.value ? (s(), o("div", {
        key: 0,
        class: fe(["scan-result", E.value.type])
      }, [
        e("span", Z_, a(E.value.type === "success" ? "✓" : "ⓘ"), 1),
        e("span", e2, a(E.value.message), 1),
        e("button", {
          class: "dismiss-btn",
          onClick: C[1] || (C[1] = (x) => E.value = null)
        }, "×")
      ], 2)) : r("", !0),
      k.value ? (s(), P(Xb, {
        key: 1,
        "discovered-workers": d.value,
        "is-scanning": w.value,
        onClose: C[2] || (C[2] = (x) => k.value = !1),
        onAdd: N,
        onScan: S
      }, null, 8, ["discovered-workers", "is-scanning"])) : r("", !0),
      y.value ? (s(), P(p_, {
        key: 2,
        worker: y.value,
        onClose: C[3] || (C[3] = (x) => y.value = null),
        onToast: C[4] || (C[4] = (x, L) => n("toast", x, L)),
        onDeployed: B
      }, null, 8, ["worker"])) : r("", !0),
      R.value ? (s(), P(j_, {
        key: 3,
        worker: R.value,
        onClose: C[5] || (C[5] = (x) => R.value = null),
        onToast: C[6] || (C[6] = (x, L) => n("toast", x, L)),
        onRefresh: $
      }, null, 8, ["worker"])) : r("", !0)
    ]));
  }
}), s2 = /* @__PURE__ */ se(t2, [["__scopeId", "data-v-24bdccf9"]]), o2 = /* @__PURE__ */ te({
  __name: "DeploySection",
  emits: ["toast", "navigate"],
  setup(t, { emit: c }) {
    const n = c, {
      instances: l,
      isLoading: p,
      liveInstanceCount: v,
      refreshInstances: u,
      stopInstance: f,
      startInstance: d,
      terminateInstance: m,
      startPolling: w,
      stopPolling: _
    } = ho(), k = h(!1), y = h("instances"), R = h(null), E = h(null), $ = z(() => [
      {
        id: "instances",
        label: "Instances",
        badge: v.value > 0 ? String(v.value) : void 0
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
    async function S(U) {
      R.value = U;
      try {
        await f(U), n("toast", "Instance stopped", "success");
      } catch (C) {
        n("toast", C instanceof Error ? C.message : "Failed to stop instance", "error");
      } finally {
        R.value = null;
      }
    }
    async function N(U) {
      R.value = U;
      try {
        await d(U), n("toast", "Instance starting...", "success");
      } catch (C) {
        n("toast", C instanceof Error ? C.message : "Failed to start instance", "error");
      } finally {
        R.value = null;
      }
    }
    function T(U) {
      E.value = U;
    }
    async function I() {
      const U = E.value;
      if (U) {
        E.value = null, R.value = U;
        try {
          await m(U), n("toast", "Instance terminated", "success");
        } catch (C) {
          n("toast", C instanceof Error ? C.message : "Failed to terminate instance", "error");
        } finally {
          R.value = null;
        }
      }
    }
    const Y = z(
      () => l.value.find((U) => U.id === E.value)
    );
    async function B() {
      await u(), y.value = "instances";
    }
    return Ne(() => {
      u(), w();
    }), $s(() => {
      _();
    }), (U, C) => {
      var x;
      return s(), o(W, null, [
        b(nt, null, {
          header: i(() => [
            b(at, {
              title: "DEPLOY TO CLOUD",
              "show-info": !0,
              onInfoClick: C[0] || (C[0] = (L) => k.value = !0)
            })
          ]),
          search: i(() => [
            b(ro, {
              modelValue: y.value,
              "onUpdate:modelValue": C[1] || (C[1] = (L) => y.value = L),
              tabs: $.value
            }, null, 8, ["modelValue", "tabs"])
          ]),
          content: i(() => [
            y.value === "instances" ? (s(), P(fw, {
              key: 0,
              instances: Se(l),
              "is-loading": Se(p),
              "action-loading-id": R.value,
              onRefresh: Se(u),
              onStop: S,
              onStart: N,
              onTerminate: T
            }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : r("", !0),
            y.value === "runpod" ? (s(), P(ub, {
              key: 1,
              onToast: C[2] || (C[2] = (L, le) => n("toast", L, le)),
              onNavigate: C[3] || (C[3] = (L) => n("navigate", L)),
              onDeployed: B
            })) : r("", !0),
            y.value === "custom" ? (s(), P(s2, {
              key: 2,
              onToast: C[4] || (C[4] = (L, le) => n("toast", L, le)),
              onDeployed: B
            })) : r("", !0)
          ]),
          _: 1
        }),
        E.value ? (s(), P(Fs, {
          key: 0,
          title: "Terminate Instance",
          message: `Are you sure you want to terminate '${((x = Y.value) == null ? void 0 : x.name) || E.value}'?`,
          warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
          "confirm-label": "Terminate",
          destructive: !0,
          onConfirm: I,
          onCancel: C[5] || (C[5] = (L) => E.value = null)
        }, null, 8, ["message"])) : r("", !0),
        b($t, {
          show: k.value,
          title: "Deploy to Cloud",
          onClose: C[6] || (C[6] = (L) => k.value = !1)
        }, {
          content: i(() => [...C[7] || (C[7] = [
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
      ], 64);
    };
  }
}), n2 = /* @__PURE__ */ se(o2, [["__scopeId", "data-v-b6839417"]]), a2 = { class: "header-info" }, l2 = { class: "commit-hash" }, i2 = {
  key: 0,
  class: "commit-refs"
}, r2 = { class: "commit-message" }, d2 = { class: "commit-date" }, c2 = {
  key: 0,
  class: "loading"
}, u2 = {
  key: 1,
  class: "changes-section"
}, m2 = { class: "stats-row" }, v2 = { class: "stat" }, f2 = { class: "stat insertions" }, p2 = { class: "stat deletions" }, g2 = {
  key: 0,
  class: "change-group"
}, h2 = {
  key: 1,
  class: "change-group"
}, y2 = {
  key: 0,
  class: "version"
}, w2 = {
  key: 2,
  class: "change-group"
}, k2 = { class: "change-item" }, b2 = /* @__PURE__ */ te({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = We(), l = h(null), p = h(!0), v = z(() => {
      if (!l.value) return !1;
      const f = l.value.changes.workflows;
      return f.added.length > 0 || f.modified.length > 0 || f.deleted.length > 0;
    }), u = z(() => {
      if (!l.value) return !1;
      const f = l.value.changes.nodes;
      return f.added.length > 0 || f.removed.length > 0;
    });
    return Ne(async () => {
      try {
        l.value = await n(c.commit.hash);
      } finally {
        p.value = !1;
      }
    }), (f, d) => (s(), P(Ye, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (m) => f.$emit("close"))
    }, {
      header: i(() => {
        var m, w, _, k;
        return [
          e("div", a2, [
            d[4] || (d[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", l2, a(((m = l.value) == null ? void 0 : m.short_hash) || t.commit.short_hash || ((w = t.commit.hash) == null ? void 0 : w.slice(0, 7))), 1),
            (k = (_ = l.value) == null ? void 0 : _.refs) != null && k.length ? (s(), o("span", i2, [
              (s(!0), o(W, null, ae(l.value.refs, (y) => (s(), o("span", {
                key: y,
                class: "ref-badge"
              }, a(y), 1))), 128))
            ])) : r("", !0)
          ]),
          b(ye, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (y) => f.$emit("close"))
          }, {
            default: i(() => [...d[5] || (d[5] = [
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
        var m, w;
        return [
          e("div", r2, a(((m = l.value) == null ? void 0 : m.message) || t.commit.message), 1),
          e("div", d2, a(((w = l.value) == null ? void 0 : w.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          p.value ? (s(), o("div", c2, "Loading details...")) : l.value ? (s(), o("div", u2, [
            e("div", m2, [
              e("span", v2, a(l.value.stats.files_changed) + " files", 1),
              e("span", f2, "+" + a(l.value.stats.insertions), 1),
              e("span", p2, "-" + a(l.value.stats.deletions), 1)
            ]),
            v.value ? (s(), o("div", g2, [
              b(ds, { variant: "section" }, {
                default: i(() => [...d[6] || (d[6] = [
                  g("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(W, null, ae(l.value.changes.workflows.added, (_) => (s(), o("div", {
                key: "add-" + _,
                class: "change-item added"
              }, [
                d[7] || (d[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(_), 1)
              ]))), 128)),
              (s(!0), o(W, null, ae(l.value.changes.workflows.modified, (_) => (s(), o("div", {
                key: "mod-" + _,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(_), 1)
              ]))), 128)),
              (s(!0), o(W, null, ae(l.value.changes.workflows.deleted, (_) => (s(), o("div", {
                key: "del-" + _,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(_), 1)
              ]))), 128))
            ])) : r("", !0),
            u.value ? (s(), o("div", h2, [
              b(ds, { variant: "section" }, {
                default: i(() => [...d[10] || (d[10] = [
                  g("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(W, null, ae(l.value.changes.nodes.added, (_) => (s(), o("div", {
                key: "add-" + _.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(_.name), 1),
                _.version ? (s(), o("span", y2, "(" + a(_.version) + ")", 1)) : r("", !0)
              ]))), 128)),
              (s(!0), o(W, null, ae(l.value.changes.nodes.removed, (_) => (s(), o("div", {
                key: "rem-" + _.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(_.name), 1)
              ]))), 128))
            ])) : r("", !0),
            l.value.changes.models.resolved > 0 ? (s(), o("div", w2, [
              b(ds, { variant: "section" }, {
                default: i(() => [...d[13] || (d[13] = [
                  g("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", k2, [
                d[14] || (d[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(l.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : r("", !0)
          ])) : r("", !0)
        ];
      }),
      footer: i(() => [
        b(ye, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (m) => f.$emit("createBranch", t.commit))
        }, {
          default: i(() => [...d[15] || (d[15] = [
            g(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        b(ye, {
          variant: "primary",
          onClick: d[2] || (d[2] = (m) => f.$emit("checkout", t.commit))
        }, {
          default: i(() => [...d[16] || (d[16] = [
            g(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), _2 = /* @__PURE__ */ se(b2, [["__scopeId", "data-v-d256ff6d"]]), $2 = { class: "base-textarea-wrapper" }, C2 = ["value", "rows", "placeholder", "disabled", "maxlength"], x2 = {
  key: 0,
  class: "base-textarea-count"
}, S2 = /* @__PURE__ */ te({
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
    const n = t, l = c;
    function p(v) {
      v.shiftKey || v.ctrlKey || v.metaKey || n.submitOnEnter && (v.preventDefault(), l("submit"));
    }
    return (v, u) => (s(), o("div", $2, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: u[0] || (u[0] = (f) => v.$emit("update:modelValue", f.target.value)),
        onKeydown: [
          u[1] || (u[1] = Tt(Fe((f) => v.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          u[2] || (u[2] = Tt(Fe((f) => v.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          Tt(p, ["enter"])
        ]
      }, null, 40, C2),
      t.showCharCount && t.maxLength ? (s(), o("div", x2, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : r("", !0)
    ]));
  }
}), Hs = /* @__PURE__ */ se(S2, [["__scopeId", "data-v-c6d16c93"]]), I2 = ["checked", "disabled"], E2 = { class: "base-checkbox-box" }, P2 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, R2 = {
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
        onChange: n[0] || (n[0] = (l) => c.$emit("update:modelValue", l.target.checked))
      }, null, 40, I2),
      e("span", E2, [
        t.modelValue ? (s(), o("svg", P2, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : r("", !0)
      ]),
      c.$slots.default ? (s(), o("span", R2, [
        Re(c.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), qs = /* @__PURE__ */ se(T2, [["__scopeId", "data-v-bf17c831"]]), M2 = { class: "popover-header" }, D2 = { class: "popover-body" }, L2 = {
  key: 0,
  class: "changes-summary"
}, z2 = {
  key: 0,
  class: "change-item"
}, U2 = {
  key: 1,
  class: "change-item"
}, N2 = {
  key: 2,
  class: "change-item"
}, O2 = {
  key: 3,
  class: "change-item"
}, A2 = {
  key: 4,
  class: "change-item"
}, F2 = {
  key: 5,
  class: "change-item"
}, B2 = {
  key: 1,
  class: "no-changes"
}, V2 = {
  key: 2,
  class: "loading"
}, W2 = {
  key: 3,
  class: "issues-error"
}, G2 = { class: "error-header" }, j2 = { class: "error-title" }, K2 = { class: "issues-list" }, H2 = { class: "message-section" }, q2 = { class: "popover-footer" }, Y2 = {
  key: 1,
  class: "commit-popover"
}, J2 = { class: "popover-header" }, X2 = { class: "popover-body" }, Q2 = {
  key: 0,
  class: "changes-summary"
}, Z2 = {
  key: 0,
  class: "change-item"
}, e$ = {
  key: 1,
  class: "change-item"
}, t$ = {
  key: 2,
  class: "change-item"
}, s$ = {
  key: 3,
  class: "change-item"
}, o$ = {
  key: 4,
  class: "change-item"
}, n$ = {
  key: 5,
  class: "change-item"
}, a$ = {
  key: 1,
  class: "no-changes"
}, l$ = {
  key: 2,
  class: "loading"
}, i$ = {
  key: 3,
  class: "issues-error"
}, r$ = { class: "error-header" }, d$ = { class: "error-title" }, c$ = { class: "issues-list" }, u$ = { class: "message-section" }, m$ = { class: "popover-footer" }, v$ = /* @__PURE__ */ te({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, l = c, { commit: p } = We(), v = h(""), u = h(!1), f = h(!1), d = z(() => {
      if (!n.status) return !1;
      const R = n.status.workflows;
      return R.new.length > 0 || R.modified.length > 0 || R.deleted.length > 0 || n.status.has_changes;
    }), m = z(() => {
      if (!n.status) return !1;
      const R = n.status.workflows, E = n.status.git_changes;
      return R.new.length > 0 || R.modified.length > 0 || R.deleted.length > 0 || E.nodes_added.length > 0 || E.nodes_removed.length > 0;
    }), w = z(() => {
      var R;
      return (R = n.status) != null && R.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (E) => E.has_issues && (E.sync_state === "new" || E.sync_state === "modified")
      ) : [];
    }), _ = z(() => w.value.length > 0), k = z(() => _.value && !f.value);
    async function y() {
      var R, E, $;
      if (!(_.value && !f.value) && !(!d.value || !v.value.trim() || u.value)) {
        u.value = !0;
        try {
          const S = await p(v.value.trim(), f.value);
          if (S.status === "success") {
            const N = `Committed: ${((R = S.summary) == null ? void 0 : R.new) || 0} new, ${((E = S.summary) == null ? void 0 : E.modified) || 0} modified, ${(($ = S.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            l("committed", { success: !0, message: N });
          } else S.status === "no_changes" ? l("committed", { success: !1, message: "No changes to commit" }) : S.status === "blocked" ? l("committed", { success: !1, message: 'Commit blocked - enable "Allow issues" to force commit' }) : l("committed", { success: !1, message: S.message || "Commit failed" });
        } catch (S) {
          l("committed", { success: !1, message: S instanceof Error ? S.message : "Commit failed" });
        } finally {
          u.value = !1;
        }
      }
    }
    return (R, E) => t.asModal ? (s(), P(et, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: E[5] || (E[5] = ($) => l("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: E[4] || (E[4] = Fe(() => {
          }, ["stop"]))
        }, [
          e("div", M2, [
            E[11] || (E[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: E[0] || (E[0] = ($) => l("close"))
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
          e("div", D2, [
            t.status && d.value ? (s(), o("div", L2, [
              t.status.workflows.new.length ? (s(), o("div", z2, [
                E[12] || (E[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : r("", !0),
              t.status.workflows.modified.length ? (s(), o("div", U2, [
                E[13] || (E[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : r("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", N2, [
                E[14] || (E[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", O2, [
                E[15] || (E[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", A2, [
                E[16] || (E[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : r("", !0),
              m.value ? r("", !0) : (s(), o("div", F2, [...E[17] || (E[17] = [
                e("span", { class: "change-icon modified" }, "~", -1),
                e("span", null, "Configuration updated", -1)
              ])]))
            ])) : t.status ? (s(), o("div", B2, " No changes to commit ")) : (s(), o("div", V2, " Loading... ")),
            _.value ? (s(), o("div", W2, [
              e("div", G2, [
                E[18] || (E[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", j2, a(w.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", K2, [
                (s(!0), o(W, null, ae(w.value, ($) => (s(), o("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a($.name), 1),
                  g(": " + a($.issue_summary), 1)
                ]))), 128))
              ]),
              b(qs, {
                modelValue: f.value,
                "onUpdate:modelValue": E[1] || (E[1] = ($) => f.value = $),
                class: "allow-issues-toggle"
              }, {
                default: i(() => [...E[19] || (E[19] = [
                  g(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : r("", !0),
            e("div", H2, [
              b(Hs, {
                modelValue: v.value,
                "onUpdate:modelValue": E[2] || (E[2] = ($) => v.value = $),
                placeholder: k.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || u.value || k.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: y,
                onSubmit: y
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          e("div", q2, [
            b(ye, {
              variant: "secondary",
              onClick: E[3] || (E[3] = ($) => l("close"))
            }, {
              default: i(() => [...E[20] || (E[20] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(ye, {
              variant: f.value ? "danger" : "primary",
              disabled: !d.value || !v.value.trim() || u.value || k.value,
              loading: u.value,
              onClick: y
            }, {
              default: i(() => [
                g(a(u.value ? "Committing..." : f.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", Y2, [
      e("div", J2, [
        E[22] || (E[22] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: E[6] || (E[6] = ($) => l("close"))
        }, [...E[21] || (E[21] = [
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
      e("div", X2, [
        t.status && d.value ? (s(), o("div", Q2, [
          t.status.workflows.new.length ? (s(), o("div", Z2, [
            E[23] || (E[23] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : r("", !0),
          t.status.workflows.modified.length ? (s(), o("div", e$, [
            E[24] || (E[24] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : r("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", t$, [
            E[25] || (E[25] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", s$, [
            E[26] || (E[26] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", o$, [
            E[27] || (E[27] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : r("", !0),
          m.value ? r("", !0) : (s(), o("div", n$, [...E[28] || (E[28] = [
            e("span", { class: "change-icon modified" }, "~", -1),
            e("span", null, "Configuration updated", -1)
          ])]))
        ])) : t.status ? (s(), o("div", a$, " No changes to commit ")) : (s(), o("div", l$, " Loading... ")),
        _.value ? (s(), o("div", i$, [
          e("div", r$, [
            E[29] || (E[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", d$, a(w.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", c$, [
            (s(!0), o(W, null, ae(w.value, ($) => (s(), o("div", {
              key: $.name,
              class: "issue-item"
            }, [
              e("strong", null, a($.name), 1),
              g(": " + a($.issue_summary), 1)
            ]))), 128))
          ]),
          b(qs, {
            modelValue: f.value,
            "onUpdate:modelValue": E[7] || (E[7] = ($) => f.value = $),
            class: "allow-issues-toggle"
          }, {
            default: i(() => [...E[30] || (E[30] = [
              g(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : r("", !0),
        e("div", u$, [
          b(Hs, {
            modelValue: v.value,
            "onUpdate:modelValue": E[8] || (E[8] = ($) => v.value = $),
            placeholder: k.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || u.value || k.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: y,
            onSubmit: y
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      e("div", m$, [
        b(ye, {
          variant: "secondary",
          onClick: E[9] || (E[9] = ($) => l("close"))
        }, {
          default: i(() => [...E[31] || (E[31] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b(ye, {
          variant: f.value ? "danger" : "primary",
          disabled: !d.value || !v.value.trim() || u.value || k.value,
          loading: u.value,
          onClick: y
        }, {
          default: i(() => [
            g(a(u.value ? "Committing..." : f.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), wo = /* @__PURE__ */ se(v$, [["__scopeId", "data-v-d0fe6172"]]), f$ = { class: "modal-header" }, p$ = { class: "modal-body" }, g$ = { class: "switch-message" }, h$ = { class: "switch-details" }, y$ = { class: "modal-actions" }, w$ = /* @__PURE__ */ te({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), P(et, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (l) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Fe(() => {
          }, ["stop"]))
        }, [
          e("div", f$, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (l) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", p$, [
            e("p", g$, [
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
            e("p", h$, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", y$, [
            b(X, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (l) => c.$emit("close"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(X, {
              variant: "primary",
              onClick: n[2] || (n[2] = (l) => c.$emit("confirm"))
            }, {
              default: i(() => [...n[12] || (n[12] = [
                g(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), k$ = /* @__PURE__ */ se(w$, [["__scopeId", "data-v-e9c5253e"]]), b$ = {
  key: 0,
  class: "modal-overlay"
}, _$ = { class: "modal-content" }, $$ = { class: "modal-body" }, C$ = { class: "progress-info" }, x$ = { class: "progress-percentage" }, S$ = { class: "progress-state" }, I$ = { class: "switch-steps" }, E$ = { class: "step-icon" }, P$ = { class: "step-label" }, R$ = /* @__PURE__ */ te({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, n = z(() => {
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
      return c.message || v[c.state] || c.state;
    }), l = z(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), p = z(() => {
      const v = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], u = v.findIndex((f) => f.state === c.state);
      return v.map((f, d) => {
        let m = "pending", w = "○";
        return d < u ? (m = "completed", w = "✓") : d === u && (m = "active", w = "⟳"), {
          ...f,
          status: m,
          icon: w
        };
      });
    });
    return (v, u) => (s(), P(et, { to: "body" }, [
      t.show ? (s(), o("div", b$, [
        e("div", _$, [
          u[1] || (u[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", $$, [
            b(Cs, {
              progress: t.progress,
              variant: l.value
            }, null, 8, ["progress", "variant"]),
            e("div", C$, [
              e("div", x$, a(t.progress) + "%", 1),
              e("div", S$, a(n.value), 1)
            ]),
            e("div", I$, [
              (s(!0), o(W, null, ae(p.value, (f) => (s(), o("div", {
                key: f.state,
                class: fe(["switch-step", f.status])
              }, [
                e("span", E$, a(f.icon), 1),
                e("span", P$, a(f.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), T$ = /* @__PURE__ */ se(R$, [["__scopeId", "data-v-768a5078"]]), M$ = { class: "modal-header" }, D$ = { class: "modal-body" }, L$ = {
  key: 0,
  class: "node-section"
}, z$ = { class: "node-list" }, U$ = {
  key: 1,
  class: "node-section"
}, N$ = { class: "node-list" }, O$ = { class: "modal-actions" }, A$ = /* @__PURE__ */ te({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), P(et, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (l) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Fe(() => {
          }, ["stop"]))
        }, [
          e("div", M$, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (l) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", D$, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", L$, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", z$, [
                (s(!0), o(W, null, ae(t.mismatchDetails.missing_nodes, (l) => (s(), o("div", {
                  key: l,
                  class: "node-item add"
                }, " + " + a(l), 1))), 128))
              ])
            ])) : r("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", U$, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", N$, [
                (s(!0), o(W, null, ae(t.mismatchDetails.extra_nodes, (l) => (s(), o("div", {
                  key: l,
                  class: "node-item remove"
                }, " - " + a(l), 1))), 128))
              ])
            ])) : r("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", O$, [
            b(X, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (l) => c.$emit("close"))
            }, {
              default: i(() => [...n[10] || (n[10] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(X, {
              variant: "primary",
              onClick: n[2] || (n[2] = (l) => c.$emit("confirm"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                g(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), F$ = /* @__PURE__ */ se(A$, [["__scopeId", "data-v-7cad7518"]]), B$ = [
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
], V$ = "v0.0.4", W$ = "Akatz", G$ = { class: "social-buttons" }, j$ = ["title", "aria-label", "onClick"], K$ = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, H$ = ["d"], q$ = ["title", "aria-label", "onClick"], Y$ = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, J$ = ["d"], X$ = /* @__PURE__ */ te({
  __name: "SocialButtons",
  setup(t) {
    function c(n) {
      window.open(n, "_blank", "noopener,noreferrer");
    }
    return (n, l) => (s(), o("div", G$, [
      (s(!0), o(W, null, ae(Se(B$), (p) => (s(), o(W, {
        key: p.id
      }, [
        p.label ? (s(), o("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: p.title,
          "aria-label": p.ariaLabel,
          onClick: (v) => c(p.url)
        }, [
          g(a(p.label) + " ", 1),
          (s(), o("svg", K$, [
            e("path", {
              d: p.iconPath
            }, null, 8, H$)
          ]))
        ], 8, j$)) : (s(), o("button", {
          key: 1,
          class: "icon-btn social-link",
          title: p.title,
          "aria-label": p.ariaLabel,
          onClick: (v) => c(p.url)
        }, [
          (s(), o("svg", Y$, [
            e("path", {
              d: p.iconPath
            }, null, 8, J$)
          ]))
        ], 8, q$))
      ], 64))), 128))
    ]));
  }
}), ko = /* @__PURE__ */ se(X$, [["__scopeId", "data-v-4f846342"]]), Q$ = { class: "footer-info" }, Z$ = { class: "version" }, eC = { class: "made-by" }, tC = /* @__PURE__ */ te({
  __name: "FooterInfo",
  setup(t) {
    return (c, n) => (s(), o("div", Q$, [
      e("span", Z$, a(Se(V$)), 1),
      e("span", eC, [
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
        g(" by " + a(Se(W$)), 1)
      ])
    ]));
  }
}), bo = /* @__PURE__ */ se(tC, [["__scopeId", "data-v-8bc3db0a"]]), sC = /* @__PURE__ */ te({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = h(null);
    async function l() {
      var v;
      await ((v = n.value) == null ? void 0 : v.saveSettings());
    }
    function p() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (v, u) => (s(), P(Ye, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: u[1] || (u[1] = (f) => v.$emit("close"))
    }, {
      body: i(() => [
        b(io, {
          ref_key: "contentRef",
          ref: n,
          "workspace-path": t.workspacePath,
          onSaved: p
        }, null, 8, ["workspace-path"])
      ]),
      footer: i(() => {
        var f;
        return [
          b(ye, {
            variant: "primary",
            disabled: !((f = n.value) != null && f.hasChanges),
            onClick: l
          }, {
            default: i(() => [...u[2] || (u[2] = [
              g(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(ye, {
            variant: "secondary",
            onClick: u[0] || (u[0] = (d) => v.$emit("close"))
          }, {
            default: i(() => [...u[3] || (u[3] = [
              g(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), oC = /* @__PURE__ */ se(sC, [["__scopeId", "data-v-fac00ae7"]]), nC = { class: "header-actions" }, aC = {
  key: 0,
  class: "wizard-step"
}, lC = { class: "form-field" }, iC = ["placeholder"], rC = {
  key: 0,
  class: "form-error"
}, dC = { class: "form-field form-field--checkbox" }, cC = { class: "form-checkbox" }, uC = {
  key: 0,
  class: "form-field"
}, mC = ["placeholder"], vC = {
  key: 0,
  class: "form-info"
}, fC = {
  key: 1,
  class: "form-suggestion"
}, pC = {
  key: 2,
  class: "form-error"
}, gC = {
  key: 3,
  class: "form-info"
}, hC = {
  key: 1,
  class: "wizard-step"
}, yC = {
  key: 0,
  class: "progress-check-loading"
}, wC = {
  key: 0,
  class: "cli-warning"
}, kC = { class: "cli-warning-header" }, bC = {
  key: 1,
  class: "env-landing"
}, _C = { class: "env-list" }, $C = ["value"], CC = { class: "env-name" }, xC = {
  key: 2,
  class: "env-create"
}, SC = { class: "form-field" }, IC = { class: "form-field" }, EC = ["value"], PC = { class: "form-field" }, RC = ["disabled"], TC = ["value"], MC = { class: "form-field" }, DC = ["value"], LC = { class: "form-field form-field--checkbox" }, zC = { class: "form-checkbox" }, UC = {
  key: 0,
  class: "form-error"
}, NC = {
  key: 1,
  class: "env-creating"
}, OC = { class: "creating-intro" }, AC = {
  key: 3,
  class: "env-import"
}, FC = { class: "wizard-footer" }, BC = { class: "wizard-footer-actions" }, Jt = 10, VC = 600 * 1e3, Ys = 1800 * 1e3, WC = /* @__PURE__ */ te({
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
    const n = t, l = c, {
      initializeWorkspace: p,
      getInitializeProgress: v,
      validatePath: u,
      createEnvironment: f,
      getCreateProgress: d,
      getImportProgress: m,
      getComfyUIReleases: w
    } = We(), _ = h(n.initialStep || 1), k = h(null), y = h("landing"), R = h(!1), E = h(!1), $ = h(!1), S = h(!1), N = h(null), T = h(n.initialStep === 2), I = h(n.defaultPath), Y = h(!!n.detectedModelsDir), B = h(n.detectedModelsDir || ""), U = h(null), C = h(null), x = h(null), L = h(null), le = h("my-new-env"), ie = h(mo), K = h("latest"), ee = h(vo), q = h(!0), O = h(null), A = h(null), M = h([{ tag_name: "latest", name: "Latest", published_at: "" }]), ve = h(!1), oe = h(!1), ke = h(!1), _e = h({ progress: 0, message: "" }), Le = h({ progress: 0, message: "" }), Ue = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], me = h(0), ge = h(null), Te = h(0), de = h(null), Q = z(() => {
      var D, G;
      const ce = (D = I.value) == null ? void 0 : D.trim(), J = !U.value, Z = !Y.value || !C.value && ((G = B.value) == null ? void 0 : G.trim());
      return ce && J && Z;
    }), Me = z(() => {
      var ce;
      return (ce = le.value) == null ? void 0 : ce.trim();
    }), pe = z(() => !!(_.value === 2 || A.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), Je = z(() => A.value || n.workspacePath || null);
    async function tt() {
      var ce;
      if (U.value = null, !!((ce = I.value) != null && ce.trim()))
        try {
          const J = await u({ path: I.value, type: "workspace" });
          J.valid || (U.value = J.error || "Invalid path");
        } catch (J) {
          U.value = J instanceof Error ? J.message : "Validation failed";
        }
    }
    async function st() {
      var ce;
      if (C.value = null, x.value = null, L.value = null, !!((ce = B.value) != null && ce.trim()))
        try {
          const J = await u({ path: B.value, type: "models" });
          if (J.valid)
            L.value = J.model_count ?? null;
          else if (C.value = J.error || "Invalid path", J.suggestion) {
            x.value = J.suggestion, B.value = J.suggestion, C.value = null;
            const Z = await u({ path: J.suggestion, type: "models" });
            Z.valid && (L.value = Z.model_count ?? null);
          }
        } catch (J) {
          C.value = J instanceof Error ? J.message : "Validation failed";
        }
    }
    async function Pe() {
      var ce, J, Z, D, G;
      if (U.value = null, C.value = null, await tt(), (ce = U.value) != null && ce.includes("already exists")) {
        U.value = null, A.value = ((J = I.value) == null ? void 0 : J.trim()) || n.defaultPath, _.value = 2, He();
        return;
      }
      if (!U.value && !(Y.value && ((Z = B.value) != null && Z.trim()) && (await st(), C.value))) {
        oe.value = !0;
        try {
          await p({
            workspace_path: ((D = I.value) == null ? void 0 : D.trim()) || n.defaultPath,
            models_directory: Y.value && ((G = B.value) == null ? void 0 : G.trim()) || null
          }), me.value = 0, ge.value = Date.now();
          const ne = setInterval(async () => {
            var xe;
            if (ge.value && Date.now() - ge.value > VC) {
              clearInterval(ne), oe.value = !1, U.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Be = await v();
              if (me.value = 0, Be.state === "idle" && oe.value) {
                clearInterval(ne), oe.value = !1, U.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              _e.value = { progress: Be.progress, message: Be.message }, Be.state === "complete" ? (clearInterval(ne), oe.value = !1, A.value = ((xe = I.value) == null ? void 0 : xe.trim()) || n.defaultPath, _.value = 2, He()) : Be.state === "error" && (clearInterval(ne), oe.value = !1, U.value = Be.error || "Workspace creation failed");
            } catch (Be) {
              me.value++, console.warn(`Polling failure ${me.value}/${Jt}:`, Be), me.value >= Jt && (clearInterval(ne), oe.value = !1, U.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (ne) {
          oe.value = !1, U.value = ne instanceof Error ? ne.message : "Failed to create workspace";
        }
      }
    }
    async function Xe() {
      ke.value = !0, O.value = null;
      try {
        const ce = {
          name: le.value.trim() || "my-new-env",
          python_version: ie.value,
          comfyui_version: K.value,
          torch_backend: ee.value,
          switch_after: q.value,
          workspace_path: A.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await f(ce)).status === "started") {
          Te.value = 0, de.value = Date.now();
          const Z = setInterval(async () => {
            if (de.value && Date.now() - de.value > Ys) {
              clearInterval(Z), ke.value = !1, O.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const D = await d();
              if (Te.value = 0, D.state === "idle" && ke.value) {
                clearInterval(Z), ke.value = !1, O.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Le.value = {
                progress: D.progress ?? 0,
                message: D.message,
                phase: D.phase
              }, D.state === "complete") {
                clearInterval(Z), ke.value = !1;
                const G = D.environment_name || ce.name;
                q.value ? l("complete", G, A.value) : (y.value = "landing", l("environment-created-no-switch", G));
              } else D.state === "error" && (clearInterval(Z), ke.value = !1, O.value = D.error || "Environment creation failed");
            } catch (D) {
              Te.value++, console.warn(`Polling failure ${Te.value}/${Jt}:`, D), Te.value >= Jt && (clearInterval(Z), ke.value = !1, O.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ce) {
        ke.value = !1, O.value = ce instanceof Error ? ce.message : "Unknown error";
      }
    }
    async function He() {
      ve.value = !0;
      try {
        M.value = await w();
      } catch (ce) {
        console.error("Failed to load ComfyUI releases:", ce);
      } finally {
        ve.value = !1;
      }
    }
    function Qe() {
      k.value && l("switch-environment", k.value, A.value);
    }
    function vt() {
      y.value === "create" || y.value === "import" ? y.value = "landing" : _.value === 2 && n.setupState === "no_workspace" && (_.value = 1);
    }
    function be(ce, J) {
      E.value = !1, J ? l("complete", ce, A.value) : (l("environment-created-no-switch", ce), y.value = "landing");
    }
    function je() {
    }
    Ne(async () => {
      if (n.detectedModelsDir && (B.value = n.detectedModelsDir), n.workspacePath && (A.value = n.workspacePath), _.value === 2) {
        He();
        const ce = setTimeout(() => {
          T.value = !1;
        }, 3e3);
        await it(), clearTimeout(ce), T.value = !1;
      }
    });
    async function it() {
      try {
        const ce = await d();
        if (console.log("[ComfyGit] Create progress check:", ce.state, ce), ce.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ce.environment_name), y.value = "create", ke.value = !0, le.value = ce.environment_name || "my-new-env", Le.value = {
            progress: ce.progress ?? 0,
            message: ce.message,
            phase: ce.phase
          }, qe();
          return;
        }
      } catch (ce) {
        console.log("[ComfyGit] Create progress check failed:", ce);
      }
      try {
        const ce = await m();
        console.log("[ComfyGit] Import progress check:", ce.state, ce), ce.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ce.environment_name), N.value = {
          message: ce.message || "Importing...",
          phase: ce.phase || "",
          progress: ce.progress ?? 0,
          environmentName: ce.environment_name || ""
        }, S.value = !0, y.value = "import", E.value = !0);
      } catch (ce) {
        console.log("[ComfyGit] Import progress check failed:", ce);
      }
    }
    async function qe() {
      Te.value = 0, de.value = Date.now();
      let ce = null;
      const J = async () => {
        if (de.value && Date.now() - de.value > Ys)
          return ce && clearInterval(ce), ke.value = !1, O.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const D = await d();
          if (Te.value = 0, D.state === "idle" && ke.value)
            return ce && clearInterval(ce), ke.value = !1, O.value = "Environment creation was interrupted. Please try again.", !1;
          if (Le.value = {
            progress: D.progress ?? 0,
            message: D.message,
            phase: D.phase
          }, D.state === "complete") {
            ce && clearInterval(ce), ke.value = !1;
            const G = D.environment_name || le.value;
            return l("complete", G, A.value), !1;
          } else if (D.state === "error")
            return ce && clearInterval(ce), ke.value = !1, O.value = D.error || "Environment creation failed", !1;
          return !0;
        } catch (D) {
          return Te.value++, console.warn(`Polling failure ${Te.value}/${Jt}:`, D), Te.value >= Jt ? (ce && clearInterval(ce), ke.value = !1, O.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await J() && (ce = setInterval(async () => {
        !await J() && ce && clearInterval(ce);
      }, 2e3));
    }
    return (ce, J) => (s(), o(W, null, [
      b(Ye, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: J[15] || (J[15] = (Z) => ce.$emit("close"))
      }, {
        header: i(() => [
          J[20] || (J[20] = e("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          e("div", nC, [
            b(ko),
            J[19] || (J[19] = e("span", { class: "header-divider" }, null, -1)),
            pe.value ? (s(), o("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: J[0] || (J[0] = (Z) => R.value = !0)
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
              onClick: J[1] || (J[1] = (Z) => ce.$emit("close")),
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
        body: i(() => {
          var Z;
          return [
            _.value === 1 ? (s(), o("div", aC, [
              J[24] || (J[24] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              e("div", lC, [
                J[21] || (J[21] = e("label", { class: "form-label" }, "Workspace Path", -1)),
                De(e("input", {
                  "onUpdate:modelValue": J[2] || (J[2] = (D) => I.value = D),
                  type: "text",
                  class: "form-input",
                  placeholder: t.defaultPath
                }, null, 8, iC), [
                  [kt, I.value]
                ]),
                U.value ? (s(), o("p", rC, a(U.value), 1)) : r("", !0)
              ]),
              e("div", dC, [
                e("label", cC, [
                  De(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": J[3] || (J[3] = (D) => Y.value = D)
                  }, null, 512), [
                    [ws, Y.value]
                  ]),
                  J[22] || (J[22] = e("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              Y.value ? (s(), o("div", uC, [
                J[23] || (J[23] = e("label", { class: "form-label" }, "Models Directory", -1)),
                De(e("input", {
                  "onUpdate:modelValue": J[4] || (J[4] = (D) => B.value = D),
                  type: "text",
                  class: "form-input",
                  placeholder: t.detectedModelsDir || "/path/to/models"
                }, null, 8, mC), [
                  [kt, B.value]
                ]),
                t.detectedModelsDir && !B.value ? (s(), o("p", vC, " Detected: " + a(t.detectedModelsDir), 1)) : r("", !0),
                x.value ? (s(), o("p", fC, " Did you mean: " + a(x.value), 1)) : r("", !0),
                C.value ? (s(), o("p", pC, a(C.value), 1)) : r("", !0),
                L.value !== null && !C.value ? (s(), o("p", gC, " Found " + a(L.value) + " model files ", 1)) : r("", !0)
              ])) : r("", !0),
              oe.value ? (s(), P(_s, {
                key: 1,
                progress: _e.value.progress,
                message: _e.value.message
              }, null, 8, ["progress", "message"])) : r("", !0)
            ])) : r("", !0),
            _.value === 2 ? (s(), o("div", hC, [
              T.value ? (s(), o("div", yC, [...J[25] || (J[25] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (s(), o(W, { key: 1 }, [
                !n.cliInstalled && !$.value ? (s(), o("div", wC, [
                  e("div", kC, [
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
                y.value === "landing" ? (s(), o("div", bC, [
                  J[34] || (J[34] = e("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  e("button", {
                    class: "landing-option",
                    onClick: J[6] || (J[6] = (D) => y.value = "create")
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
                      S.value = !1, y.value = "import";
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
                    e("div", _C, [
                      (s(!0), o(W, null, ae(n.existingEnvironments, (D) => (s(), o("label", {
                        key: D,
                        class: fe(["env-option", { selected: k.value === D }])
                      }, [
                        De(e("input", {
                          type: "radio",
                          name: "env-select",
                          value: D,
                          "onUpdate:modelValue": J[8] || (J[8] = (G) => k.value = G)
                        }, null, 8, $C), [
                          [Rt, k.value]
                        ]),
                        e("span", CC, a(D), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : r("", !0)
                ])) : y.value === "create" ? (s(), o("div", xC, [
                  ke.value ? (s(), o("div", NC, [
                    e("p", OC, [
                      J[41] || (J[41] = g(" Creating environment ", -1)),
                      e("strong", null, a(le.value), 1),
                      J[42] || (J[42] = g("... ", -1))
                    ]),
                    b(_s, {
                      progress: Le.value.progress,
                      message: Le.value.message,
                      "current-phase": Le.value.phase,
                      "show-steps": !0,
                      steps: Ue
                    }, null, 8, ["progress", "message", "current-phase"]),
                    J[43] || (J[43] = e("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (s(), o(W, { key: 0 }, [
                    J[40] || (J[40] = e("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    e("div", SC, [
                      J[35] || (J[35] = e("label", { class: "form-label" }, "Environment Name", -1)),
                      De(e("input", {
                        "onUpdate:modelValue": J[9] || (J[9] = (D) => le.value = D),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [kt, le.value]
                      ])
                    ]),
                    e("div", IC, [
                      J[36] || (J[36] = e("label", { class: "form-label" }, "Python Version", -1)),
                      De(e("select", {
                        "onUpdate:modelValue": J[10] || (J[10] = (D) => ie.value = D),
                        class: "form-select"
                      }, [
                        (s(!0), o(W, null, ae(Se(uo), (D) => (s(), o("option", {
                          key: D,
                          value: D
                        }, a(D), 9, EC))), 128))
                      ], 512), [
                        [Lt, ie.value]
                      ])
                    ]),
                    e("div", PC, [
                      J[37] || (J[37] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      De(e("select", {
                        "onUpdate:modelValue": J[11] || (J[11] = (D) => K.value = D),
                        class: "form-select",
                        disabled: ve.value
                      }, [
                        (s(!0), o(W, null, ae(M.value, (D) => (s(), o("option", {
                          key: D.tag_name,
                          value: D.tag_name
                        }, a(D.name), 9, TC))), 128))
                      ], 8, RC), [
                        [Lt, K.value]
                      ])
                    ]),
                    e("div", MC, [
                      J[38] || (J[38] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      De(e("select", {
                        "onUpdate:modelValue": J[12] || (J[12] = (D) => ee.value = D),
                        class: "form-select"
                      }, [
                        (s(!0), o(W, null, ae(Se(Bs), (D) => (s(), o("option", {
                          key: D,
                          value: D
                        }, a(D) + a(D === "auto" ? " (detect GPU)" : ""), 9, DC))), 128))
                      ], 512), [
                        [Lt, ee.value]
                      ])
                    ]),
                    e("div", LC, [
                      e("label", zC, [
                        De(e("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": J[13] || (J[13] = (D) => q.value = D)
                        }, null, 512), [
                          [ws, q.value]
                        ]),
                        J[39] || (J[39] = e("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    O.value ? (s(), o("div", UC, a(O.value), 1)) : r("", !0)
                  ], 64))
                ])) : y.value === "import" ? (s(), o("div", AC, [
                  b(go, {
                    "workspace-path": A.value,
                    "resume-import": S.value,
                    "initial-progress": N.value ?? void 0,
                    onImportComplete: be,
                    onImportStarted: J[14] || (J[14] = (D) => E.value = !0),
                    onSourceCleared: je
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : r("", !0)
              ], 64))
            ])) : r("", !0)
          ];
        }),
        footer: i(() => [
          e("div", FC, [
            b(bo),
            e("div", BC, [
              _.value === 1 ? (s(), P(ye, {
                key: 0,
                variant: "primary",
                disabled: !Q.value || oe.value,
                onClick: Pe
              }, {
                default: i(() => [
                  g(a(oe.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : _.value === 2 ? (s(), o(W, { key: 1 }, [
                !ke.value && !E.value && (y.value !== "landing" || n.setupState === "no_workspace" && !A.value) ? (s(), P(ye, {
                  key: 0,
                  variant: "secondary",
                  onClick: vt
                }, {
                  default: i(() => [...J[44] || (J[44] = [
                    g(" Back ", -1)
                  ])]),
                  _: 1
                })) : r("", !0),
                y.value === "create" ? (s(), P(ye, {
                  key: 1,
                  variant: "primary",
                  disabled: !Me.value || ke.value,
                  onClick: Xe
                }, {
                  default: i(() => [
                    g(a(ke.value ? "Creating..." : q.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : r("", !0),
                y.value === "landing" && k.value ? (s(), P(ye, {
                  key: 2,
                  variant: "primary",
                  onClick: Qe
                }, {
                  default: i(() => [
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
      R.value ? (s(), P(oC, {
        key: 0,
        "workspace-path": Je.value,
        onClose: J[16] || (J[16] = (Z) => R.value = !1)
      }, null, 8, ["workspace-path"])) : r("", !0)
    ], 64));
  }
}), GC = /* @__PURE__ */ se(WC, [["__scopeId", "data-v-9a9aadc0"]]), jC = { class: "comfygit-panel" }, KC = { class: "panel-header" }, HC = { class: "header-left" }, qC = {
  key: 0,
  class: "header-info"
}, YC = { class: "header-actions" }, JC = { class: "env-switcher" }, XC = {
  key: 0,
  class: "header-info"
}, QC = { class: "branch-name" }, ZC = { class: "panel-main" }, e3 = { class: "sidebar" }, t3 = { class: "sidebar-content" }, s3 = { class: "sidebar-section" }, o3 = { class: "sidebar-section" }, n3 = { class: "sidebar-section" }, a3 = {
  key: 0,
  class: "sidebar-badge"
}, l3 = { class: "sidebar-footer" }, i3 = { class: "content-area" }, r3 = {
  key: 0,
  class: "error-message"
}, d3 = {
  key: 1,
  class: "loading"
}, c3 = { class: "dialog-content env-selector-dialog" }, u3 = { class: "dialog-header" }, m3 = { class: "dialog-body" }, v3 = { class: "env-list" }, f3 = { class: "env-info" }, p3 = { class: "env-name-row" }, g3 = { class: "env-indicator" }, h3 = { class: "env-name" }, y3 = {
  key: 0,
  class: "env-branch"
}, w3 = {
  key: 1,
  class: "current-label"
}, k3 = { class: "env-stats" }, b3 = ["onClick"], _3 = { class: "toast-container" }, $3 = { class: "toast-message" }, C3 = /* @__PURE__ */ te({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const n = t, l = c, {
      getStatus: p,
      getHistory: v,
      getBranches: u,
      checkout: f,
      createBranch: d,
      switchBranch: m,
      deleteBranch: w,
      getEnvironments: _,
      switchEnvironment: k,
      getSwitchProgress: y,
      deleteEnvironment: R,
      syncEnvironmentManually: E,
      repairWorkflowModels: $,
      getSetupStatus: S
    } = We(), N = so(), { liveInstanceCount: T } = ho({ autoStart: !0 }), I = h(null), Y = h([]), B = h([]), U = h([]), C = z(() => U.value.find((H) => H.is_current)), x = h(null), L = h(!1), le = h(1), ie = z(() => {
      var H;
      return ((H = x.value) == null ? void 0 : H.state) || "managed";
    }), K = h(!1), ee = h(null), q = h(null), O = h(!1), A = h(null), M = h(null), ve = h(null), oe = h(!1), ke = h(!1), _e = h(""), Le = h(null), Ue = h({ state: "idle", progress: 0, message: "" });
    let me = null, ge = null;
    const Te = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, de = n.initialView ? Te[n.initialView] : null, Q = h((de == null ? void 0 : de.view) ?? "status"), Me = h((de == null ? void 0 : de.section) ?? "this-env");
    function pe(H, F) {
      Q.value = H, Me.value = F;
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
      l("close"), setTimeout(() => {
        var F;
        const H = document.querySelectorAll("button.comfyui-button");
        for (const he of H)
          if (((F = he.textContent) == null ? void 0 : F.trim()) === "Manager") {
            he.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const Pe = h(null), Xe = h(!1), He = h(!1), Qe = h([]);
    let vt = 0;
    function be(H, F = "info", he = 3e3) {
      const Ie = ++vt;
      return Qe.value.push({ id: Ie, message: H, type: F }), he > 0 && setTimeout(() => {
        Qe.value = Qe.value.filter((Oe) => Oe.id !== Ie);
      }, he), Ie;
    }
    function je(H) {
      Qe.value = Qe.value.filter((F) => F.id !== H);
    }
    function it(H, F) {
      be(H, F);
    }
    const qe = z(() => {
      if (!I.value) return "neutral";
      const H = I.value.workflows, F = H.new.length > 0 || H.modified.length > 0 || H.deleted.length > 0 || I.value.has_changes;
      return I.value.comparison.is_synced ? F ? "warning" : "success" : "error";
    });
    z(() => I.value ? qe.value === "success" ? "All synced" : qe.value === "warning" ? "Uncommitted changes" : qe.value === "error" ? "Not synced" : "" : "");
    async function ce() {
      K.value = !0, ee.value = null;
      try {
        const [H, F, he, Ie] = await Promise.all([
          p(!0),
          v(),
          u(),
          _()
        ]);
        I.value = H, Y.value = F.commits, B.value = he.branches, U.value = Ie, l("statusUpdate", H), A.value && await A.value.loadWorkflows(!0);
      } catch (H) {
        ee.value = H instanceof Error ? H.message : "Failed to load status", I.value = null, Y.value = [], B.value = [];
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
      const F = I.value && (I.value.workflows.new.length > 0 || I.value.workflows.modified.length > 0 || I.value.workflows.deleted.length > 0 || I.value.has_changes);
      Pe.value = {
        title: F ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: F ? "You have uncommitted changes that will be lost." : `Checkout commit ${H.short_hash || ((he = H.hash) == null ? void 0 : he.slice(0, 7))}?`,
        details: F ? St() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: F ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: F,
        onConfirm: async () => {
          var Ke;
          Pe.value = null, Be();
          const Ie = be(`Checking out ${H.short_hash || ((Ke = H.hash) == null ? void 0 : Ke.slice(0, 7))}...`, "info", 0), Oe = await f(H.hash, F);
          je(Ie), Oe.status === "success" ? be("Restarting ComfyUI...", "success") : be(Oe.message || "Checkout failed", "error");
        }
      };
    }
    async function D(H) {
      const F = I.value && (I.value.workflows.new.length > 0 || I.value.workflows.modified.length > 0 || I.value.workflows.deleted.length > 0 || I.value.has_changes);
      Pe.value = {
        title: F ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: F ? "You have uncommitted changes." : `Switch to branch "${H}"?`,
        details: F ? St() : void 0,
        warning: F ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: F ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Pe.value = null, Be();
          const he = be(`Switching to ${H}...`, "info", 0), Ie = await m(H, F);
          je(he), Ie.status === "success" ? be("Restarting ComfyUI...", "success") : be(Ie.message || "Branch switch failed", "error");
        }
      };
    }
    async function G(H) {
      const F = be(`Creating branch ${H}...`, "info", 0), he = await d(H);
      je(F), he.status === "success" ? (be(`Branch "${H}" created`, "success"), await ce()) : be(he.message || "Failed to create branch", "error");
    }
    async function ne(H, F = !1) {
      const he = async (Ie) => {
        var Ke;
        const Oe = be(`Deleting branch ${H}...`, "info", 0);
        try {
          const lt = await w(H, Ie);
          je(Oe), lt.status === "success" ? (be(`Branch "${H}" deleted`, "success"), await ce()) : (Ke = lt.message) != null && Ke.includes("not fully merged") ? Pe.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${H}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Pe.value = null, await he(!0);
            }
          } : be(lt.message || "Failed to delete branch", "error");
        } catch (lt) {
          je(Oe);
          const It = lt instanceof Error ? lt.message : "Failed to delete branch";
          It.includes("not fully merged") ? Pe.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${H}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Pe.value = null, await he(!0);
            }
          } : be(It, "error");
        }
      };
      Pe.value = {
        title: "Delete Branch",
        message: `Delete branch "${H}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Pe.value = null, await he(F);
        }
      };
    }
    async function xe(H) {
      q.value = null;
      const F = prompt("Enter branch name:");
      if (F) {
        const he = be(`Creating branch ${F}...`, "info", 0), Ie = await d(F, H.hash);
        je(he), Ie.status === "success" ? (be(`Branch "${F}" created from ${H.short_hash}`, "success"), await ce()) : be(Ie.message || "Failed to create branch", "error");
      }
    }
    function Be() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function pt() {
      Pe.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var H;
          Pe.value = null, Be(), be("Restarting environment...", "info");
          try {
            (H = window.app) != null && H.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Ct() {
      Pe.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var H;
          Pe.value = null, be("Stopping environment...", "info");
          try {
            (H = window.app) != null && H.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function rt(H, F) {
      O.value = !1, _e.value = H, Le.value = F || null, oe.value = !0;
    }
    async function Ot() {
      oe.value = !1, ke.value = !0, Be(), Ue.value = {
        progress: 10,
        state: At(10),
        message: Ft(10)
      };
      try {
        await k(_e.value, Le.value || void 0), Ht(), Wt();
      } catch (H) {
        gt(), ke.value = !1, be(`Failed to initiate switch: ${H instanceof Error ? H.message : "Unknown error"}`, "error"), Ue.value = { state: "idle", progress: 0, message: "" }, Le.value = null;
      }
    }
    function At(H) {
      return H >= 100 ? "complete" : H >= 80 ? "validating" : H >= 60 ? "starting" : H >= 30 ? "syncing" : "preparing";
    }
    function Ft(H) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[At(H)] || "";
    }
    function Ht() {
      if (ge) return;
      let H = 10;
      const F = 60, he = 5e3, Ie = 100, Oe = (F - H) / (he / Ie);
      ge = window.setInterval(() => {
        if (H += Oe, H >= F && (H = F, gt()), Ue.value.progress < F) {
          const Ke = Math.floor(H);
          Ue.value = {
            progress: Ke,
            state: At(Ke),
            message: Ft(Ke)
          };
        }
      }, Ie);
    }
    function gt() {
      ge && (clearInterval(ge), ge = null);
    }
    function Wt() {
      me || (me = window.setInterval(async () => {
        try {
          let H = await N.getStatus();
          if ((!H || H.state === "idle") && (H = await y()), !H)
            return;
          const F = H.progress || 0;
          F >= 60 && gt();
          const he = Math.max(F, Ue.value.progress), Ie = H.state && H.state !== "idle" && H.state !== "unknown", Oe = Ie ? H.state : At(he), Ke = Ie && H.message || Ft(he);
          Ue.value = {
            state: Oe,
            progress: he,
            message: Ke
          }, H.state === "complete" ? (gt(), Bt(), ke.value = !1, be(`✓ Switched to ${_e.value}`, "success"), await ce(), _e.value = "") : H.state === "rolled_back" ? (gt(), Bt(), ke.value = !1, be("Switch failed, restored previous environment", "warning"), _e.value = "") : H.state === "critical_failure" && (gt(), Bt(), ke.value = !1, be(`Critical error during switch: ${H.message}`, "error"), _e.value = "");
        } catch (H) {
          console.error("Failed to poll switch progress:", H);
        }
      }, 1e3));
    }
    function Bt() {
      gt(), me && (clearInterval(me), me = null);
    }
    function qt() {
      var H;
      oe.value = !1, _e.value = "", (H = x.value) != null && H.state && x.value.state !== "managed" && (le.value = x.value.state === "no_workspace" ? 1 : 2, L.value = !0);
    }
    async function ts(H) {
      Xe.value = !1, await ce(), be(H.message, H.success ? "success" : "error");
    }
    async function ss() {
      He.value = !1;
      const H = be("Syncing environment...", "info", 0);
      try {
        const F = await E("skip", !0);
        if (je(H), F.status === "success") {
          const he = [];
          F.nodes_installed.length && he.push(`${F.nodes_installed.length} installed`), F.nodes_removed.length && he.push(`${F.nodes_removed.length} removed`);
          const Ie = he.length ? `: ${he.join(", ")}` : "";
          be(`✓ Environment synced${Ie}`, "success"), await ce();
        } else {
          const he = F.errors.length ? F.errors.join("; ") : F.message;
          be(`Sync failed: ${he}`, "error");
        }
      } catch (F) {
        je(H), be(`Sync error: ${F instanceof Error ? F.message : "Unknown error"}`, "error");
      }
    }
    async function os(H) {
      var F;
      try {
        const he = await $(H);
        he.failed.length === 0 ? be(`✓ Repaired ${he.success} workflow${he.success === 1 ? "" : "s"}`, "success") : be(`Repaired ${he.success}, failed: ${he.failed.length}`, "warning"), await ce();
      } catch (he) {
        be(`Repair failed: ${he instanceof Error ? he.message : "Unknown error"}`, "error");
      } finally {
        (F = ve.value) == null || F.resetRepairingState();
      }
    }
    async function re() {
      var F, he;
      const H = be("Repairing environment...", "info", 0);
      try {
        const Ie = await E("skip", !0);
        if (je(H), Ie.status === "success") {
          const Oe = [];
          Ie.nodes_installed.length && Oe.push(`${Ie.nodes_installed.length} installed`), Ie.nodes_removed.length && Oe.push(`${Ie.nodes_removed.length} removed`);
          const Ke = Oe.length ? `: ${Oe.join(", ")}` : "";
          be(`✓ Environment repaired${Ke}`, "success"), (F = ve.value) == null || F.closeDetailModal(), await ce();
        } else {
          const Oe = Ie.errors.length ? Ie.errors.join(", ") : Ie.message || "Unknown error";
          be(`Repair failed: ${Oe}`, "error");
        }
      } catch (Ie) {
        je(H), be(`Repair error: ${Ie instanceof Error ? Ie.message : "Unknown error"}`, "error");
      } finally {
        (he = ve.value) == null || he.resetRepairingEnvironmentState();
      }
    }
    async function j(H, F) {
      be(`Environment '${H}' created`, "success"), await ce(), M.value && await M.value.loadEnvironments(), F && await rt(H);
    }
    async function Ee(H) {
      var F;
      if (((F = C.value) == null ? void 0 : F.name) === H) {
        be("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      Pe.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${H}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          Pe.value = null;
          try {
            const he = await R(H);
            he.status === "success" ? (be(`Environment "${H}" deleted`, "success"), await ce(), M.value && await M.value.loadEnvironments()) : be(he.message || "Failed to delete environment", "error");
          } catch (he) {
            be(`Error deleting environment: ${he instanceof Error ? he.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function Ze(H, F) {
      L.value = !1;
      try {
        x.value = await S();
      } catch {
      }
      await rt(H, F);
    }
    function ht() {
      L.value = !1, l("close");
    }
    async function Mt(H, F) {
      await rt(H, F);
    }
    async function Dt(H) {
      await ce(), await rt(H);
    }
    async function xt(H) {
      x.value = await S(), console.log(`Environment '${H}' created. Available for switching.`);
    }
    function we() {
      pe("environments", "all-envs"), setTimeout(() => {
        var H;
        (H = M.value) == null || H.openCreateModal();
      }, 100);
    }
    function St() {
      if (!I.value) return [];
      const H = [], F = I.value.workflows;
      return F.new.length && H.push(`${F.new.length} new workflow(s)`), F.modified.length && H.push(`${F.modified.length} modified workflow(s)`), F.deleted.length && H.push(`${F.deleted.length} deleted workflow(s)`), H;
    }
    return Ne(async () => {
      try {
        if (x.value = await S(), x.value.state === "no_workspace") {
          L.value = !0, le.value = 1;
          return;
        }
        if (x.value.state === "empty_workspace") {
          L.value = !0, le.value = 2;
          return;
        }
        if (x.value.state === "unmanaged") {
          L.value = !0, le.value = 2;
          return;
        }
      } catch (H) {
        console.warn("Setup status check failed, proceeding normally:", H);
      }
      await ce();
    }), (H, F) => {
      var he, Ie, Oe, Ke, lt, It, Gt, V, ue, $e, Ve, dt;
      return s(), o("div", jC, [
        e("div", KC, [
          e("div", HC, [
            F[31] || (F[31] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            I.value ? (s(), o("div", qC)) : r("", !0)
          ]),
          e("div", YC, [
            b(ko),
            F[34] || (F[34] = e("span", { class: "header-divider" }, null, -1)),
            e("button", {
              class: fe(["icon-btn", { spinning: K.value }]),
              onClick: ce,
              title: "Refresh"
            }, [...F[32] || (F[32] = [
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
              onClick: F[0] || (F[0] = (Ce) => l("close")),
              title: "Close"
            }, [...F[33] || (F[33] = [
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
        e("div", JC, [
          e("div", { class: "env-switcher-header" }, [
            F[35] || (F[35] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: pt
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
            onClick: F[1] || (F[1] = (Ce) => pe("environments", "all-envs"))
          }, [
            I.value ? (s(), o("div", XC, [
              e("span", null, a(((he = C.value) == null ? void 0 : he.name) || ((Ie = I.value) == null ? void 0 : Ie.environment) || "Loading..."), 1),
              e("span", QC, "(" + a(I.value.branch || "detached") + ")", 1)
            ])) : r("", !0),
            F[36] || (F[36] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", ZC, [
          e("div", e3, [
            e("div", t3, [
              e("div", s3, [
                F[37] || (F[37] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "status" && Me.value === "this-env" }]),
                  onClick: F[2] || (F[2] = (Ce) => pe("status", "this-env"))
                }, " STATUS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "workflows" }]),
                  onClick: F[3] || (F[3] = (Ce) => pe("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "models-env" }]),
                  onClick: F[4] || (F[4] = (Ce) => pe("models-env", "this-env"))
                }, " MODELS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "branches" }]),
                  onClick: F[5] || (F[5] = (Ce) => pe("branches", "this-env"))
                }, " BRANCHES ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "history" }]),
                  onClick: F[6] || (F[6] = (Ce) => pe("history", "this-env"))
                }, " HISTORY ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "nodes" }]),
                  onClick: F[7] || (F[7] = (Ce) => pe("nodes", "this-env"))
                }, " NODES ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "debug-env" }]),
                  onClick: F[8] || (F[8] = (Ce) => pe("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              F[41] || (F[41] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", o3, [
                F[38] || (F[38] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "environments" }]),
                  onClick: F[9] || (F[9] = (Ce) => pe("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "model-index" }]),
                  onClick: F[10] || (F[10] = (Ce) => pe("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "settings" }]),
                  onClick: F[11] || (F[11] = (Ce) => pe("settings", "all-envs"))
                }, " SETTINGS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "debug-workspace" }]),
                  onClick: F[12] || (F[12] = (Ce) => pe("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              F[42] || (F[42] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", n3, [
                F[40] || (F[40] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "deploy" }]),
                  onClick: F[13] || (F[13] = (Ce) => pe("deploy", "sharing"))
                }, [
                  F[39] || (F[39] = g(" DEPLOY ", -1)),
                  Se(T) > 0 ? (s(), o("span", a3, a(Se(T)), 1)) : r("", !0)
                ], 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "export" }]),
                  onClick: F[14] || (F[14] = (Ce) => pe("export", "sharing"))
                }, " EXPORT ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "import" }]),
                  onClick: F[15] || (F[15] = (Ce) => pe("import", "sharing"))
                }, " IMPORT ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "remotes" }]),
                  onClick: F[16] || (F[16] = (Ce) => pe("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            e("div", l3, [
              b(bo)
            ])
          ]),
          e("div", i3, [
            ee.value ? (s(), o("div", r3, a(ee.value), 1)) : !I.value && Q.value === "status" ? (s(), o("div", d3, " Loading status... ")) : (s(), o(W, { key: 2 }, [
              Q.value === "status" ? (s(), P(ll, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: ve,
                status: I.value,
                "setup-state": ie.value,
                onSwitchBranch: tt,
                onCommitChanges: F[17] || (F[17] = (Ce) => Xe.value = !0),
                onSyncEnvironment: F[18] || (F[18] = (Ce) => He.value = !0),
                onViewWorkflows: F[19] || (F[19] = (Ce) => pe("workflows", "this-env")),
                onViewHistory: F[20] || (F[20] = (Ce) => pe("history", "this-env")),
                onViewDebug: F[21] || (F[21] = (Ce) => pe("debug-env", "this-env")),
                onViewNodes: F[22] || (F[22] = (Ce) => pe("nodes", "this-env")),
                onRepairMissingModels: os,
                onRepairEnvironment: re,
                onStartSetup: F[23] || (F[23] = (Ce) => L.value = !0),
                onViewEnvironments: F[24] || (F[24] = (Ce) => pe("environments", "all-envs")),
                onCreateEnvironment: we
              }, null, 8, ["status", "setup-state"])) : Q.value === "workflows" ? (s(), P(Em, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: A,
                onRefresh: ce
              }, null, 512)) : Q.value === "models-env" ? (s(), P(cv, {
                key: 2,
                onNavigate: Je
              })) : Q.value === "branches" ? (s(), P(bl, {
                key: 3,
                branches: B.value,
                current: ((Oe = I.value) == null ? void 0 : Oe.branch) || null,
                onSwitch: D,
                onCreate: G,
                onDelete: ne
              }, null, 8, ["branches", "current"])) : Q.value === "history" ? (s(), P(Ml, {
                key: 4,
                commits: Y.value,
                onSelect: J,
                onCheckout: Z
              }, null, 8, ["commits"])) : Q.value === "nodes" ? (s(), P(lf, {
                key: 5,
                "version-mismatches": ((lt = (Ke = I.value) == null ? void 0 : Ke.comparison) == null ? void 0 : lt.version_mismatches) || [],
                onOpenNodeManager: st,
                onRepairEnvironment: re,
                onToast: it
              }, null, 8, ["version-mismatches"])) : Q.value === "debug-env" ? (s(), P(wh, { key: 6 })) : Q.value === "environments" ? (s(), P(_1, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: M,
                onSwitch: rt,
                onCreated: j,
                onDelete: Ee
              }, null, 512)) : Q.value === "model-index" ? (s(), P(Rv, {
                key: 8,
                onRefresh: ce
              })) : Q.value === "settings" ? (s(), P(ch, { key: 9 })) : Q.value === "debug-workspace" ? (s(), P(yh, { key: 10 })) : Q.value === "deploy" ? (s(), P(n2, {
                key: 11,
                onToast: it,
                onNavigate: Je
              })) : Q.value === "export" ? (s(), P(Q1, { key: 12 })) : Q.value === "import" ? (s(), P(j0, {
                key: 13,
                onImportCompleteSwitch: Dt
              })) : Q.value === "remotes" ? (s(), P(Wg, {
                key: 14,
                onToast: it
              })) : r("", !0)
            ], 64))
          ])
        ]),
        q.value ? (s(), P(_2, {
          key: 0,
          commit: q.value,
          onClose: F[25] || (F[25] = (Ce) => q.value = null),
          onCheckout: Z,
          onCreateBranch: xe
        }, null, 8, ["commit"])) : r("", !0),
        Pe.value ? (s(), P(Fs, {
          key: 1,
          title: Pe.value.title,
          message: Pe.value.message,
          details: Pe.value.details,
          warning: Pe.value.warning,
          confirmLabel: Pe.value.confirmLabel,
          cancelLabel: Pe.value.cancelLabel,
          secondaryLabel: Pe.value.secondaryLabel,
          secondaryAction: Pe.value.secondaryAction,
          destructive: Pe.value.destructive,
          onConfirm: Pe.value.onConfirm,
          onCancel: F[26] || (F[26] = (Ce) => Pe.value = null),
          onSecondary: Pe.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : r("", !0),
        b(k$, {
          show: oe.value,
          "from-environment": ((It = C.value) == null ? void 0 : It.name) || "unknown",
          "to-environment": _e.value,
          onConfirm: Ot,
          onClose: qt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Xe.value && I.value ? (s(), P(wo, {
          key: 2,
          status: I.value,
          "as-modal": !0,
          onClose: F[27] || (F[27] = (Ce) => Xe.value = !1),
          onCommitted: ts
        }, null, 8, ["status"])) : r("", !0),
        He.value && I.value ? (s(), P(F$, {
          key: 3,
          show: He.value,
          "mismatch-details": {
            missing_nodes: I.value.comparison.missing_nodes,
            extra_nodes: I.value.comparison.extra_nodes
          },
          onConfirm: ss,
          onClose: F[28] || (F[28] = (Ce) => He.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : r("", !0),
        b(T$, {
          show: ke.value,
          state: Ue.value.state,
          progress: Ue.value.progress,
          message: Ue.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        O.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: F[30] || (F[30] = Fe((Ce) => O.value = !1, ["self"]))
        }, [
          e("div", c3, [
            e("div", u3, [
              F[44] || (F[44] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: F[29] || (F[29] = (Ce) => O.value = !1)
              }, [...F[43] || (F[43] = [
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
            e("div", m3, [
              F[45] || (F[45] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", v3, [
                (s(!0), o(W, null, ae(U.value, (Ce) => (s(), o("div", {
                  key: Ce.name,
                  class: fe(["env-item", { current: Ce.is_current }])
                }, [
                  e("div", f3, [
                    e("div", p3, [
                      e("span", g3, a(Ce.is_current ? "●" : "○"), 1),
                      e("span", h3, a(Ce.name), 1),
                      Ce.current_branch ? (s(), o("span", y3, "(" + a(Ce.current_branch) + ")", 1)) : r("", !0),
                      Ce.is_current ? (s(), o("span", w3, "CURRENT")) : r("", !0)
                    ]),
                    e("div", k3, a(Ce.workflow_count) + " workflows • " + a(Ce.node_count) + " nodes ", 1)
                  ]),
                  Ce.is_current ? r("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (xs) => rt(Ce.name)
                  }, " SWITCH ", 8, b3))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : r("", !0),
        L.value ? (s(), P(GC, {
          key: 5,
          "default-path": ((Gt = x.value) == null ? void 0 : Gt.default_path) || "~/comfygit",
          "detected-models-dir": ((V = x.value) == null ? void 0 : V.detected_models_dir) || null,
          "initial-step": le.value,
          "existing-environments": ((ue = x.value) == null ? void 0 : ue.environments) || [],
          "cli-installed": (($e = x.value) == null ? void 0 : $e.cli_installed) ?? !0,
          "setup-state": ((Ve = x.value) == null ? void 0 : Ve.state) || "no_workspace",
          "workspace-path": ((dt = x.value) == null ? void 0 : dt.workspace_path) || null,
          onComplete: Ze,
          onClose: ht,
          onSwitchEnvironment: Mt,
          onEnvironmentCreatedNoSwitch: xt
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : r("", !0),
        e("div", _3, [
          b(Po, { name: "toast" }, {
            default: i(() => [
              (s(!0), o(W, null, ae(Qe.value, (Ce) => (s(), o("div", {
                key: Ce.id,
                class: fe(["toast", Ce.type])
              }, [
                e("span", $3, a(Ce.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), x3 = /* @__PURE__ */ se(C3, [["__scopeId", "data-v-037b3ee3"]]), S3 = { class: "item-header" }, I3 = { class: "item-info" }, E3 = { class: "filename" }, P3 = { class: "metadata" }, R3 = { class: "size" }, T3 = {
  key: 0,
  class: "type"
}, M3 = { class: "item-actions" }, D3 = {
  key: 0,
  class: "progress-section"
}, L3 = { class: "progress-bar" }, z3 = { class: "progress-stats" }, U3 = { class: "downloaded" }, N3 = { class: "speed" }, O3 = {
  key: 0,
  class: "eta"
}, A3 = {
  key: 1,
  class: "status-msg paused"
}, F3 = {
  key: 2,
  class: "status-msg queued"
}, B3 = {
  key: 3,
  class: "status-msg completed"
}, V3 = {
  key: 4,
  class: "status-msg failed"
}, W3 = {
  key: 0,
  class: "retries"
}, G3 = /* @__PURE__ */ te({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: c }) {
    const n = c;
    function l(u) {
      if (u === 0) return "?";
      const f = u / (1024 * 1024 * 1024);
      return f >= 1 ? `${f.toFixed(2)} GB` : `${(u / (1024 * 1024)).toFixed(1)} MB`;
    }
    function p(u) {
      return u === 0 ? "-" : `${(u / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function v(u) {
      if (u < 60) return `${Math.round(u)}s`;
      const f = Math.floor(u / 60);
      return f < 60 ? `${f}m` : `${Math.floor(f / 60)}h ${f % 60}m`;
    }
    return (u, f) => (s(), o("div", {
      class: fe(["download-item", `status-${t.item.status}`])
    }, [
      e("div", S3, [
        e("div", I3, [
          e("div", E3, a(t.item.filename), 1),
          e("div", P3, [
            e("span", R3, a(l(t.item.size)), 1),
            t.item.type ? (s(), o("span", T3, a(t.item.type), 1)) : r("", !0)
          ])
        ]),
        e("div", M3, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: f[0] || (f[0] = (d) => n("cancel")),
            title: "Cancel"
          }, " × ")) : r("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: f[1] || (f[1] = (d) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : r("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: f[2] || (f[2] = (d) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : r("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: f[3] || (f[3] = (d) => n("remove")),
            title: "Remove"
          }, " × ")) : r("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", D3, [
        e("div", L3, [
          e("div", {
            class: "progress-fill",
            style: zt({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", z3, [
          e("span", U3, a(l(t.item.downloaded)) + " / " + a(l(t.item.size)), 1),
          e("span", N3, a(p(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", O3, a(v(t.item.eta)), 1)) : r("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", A3, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", F3, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", B3, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", V3, [
        g(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", W3, "(" + a(t.item.retries) + " retries)", 1)) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), ls = /* @__PURE__ */ se(G3, [["__scopeId", "data-v-2110df65"]]), j3 = { class: "queue-title" }, K3 = { class: "count" }, H3 = { class: "queue-actions" }, q3 = { class: "action-label" }, Y3 = {
  key: 0,
  class: "overall-progress"
}, J3 = { class: "progress-bar" }, X3 = {
  key: 0,
  class: "current-mini"
}, Q3 = { class: "filename" }, Z3 = { class: "speed" }, e5 = {
  key: 1,
  class: "queue-content"
}, t5 = {
  key: 0,
  class: "section"
}, s5 = {
  key: 1,
  class: "section"
}, o5 = { class: "section-header" }, n5 = { class: "section-label paused" }, a5 = { class: "items-list" }, l5 = {
  key: 2,
  class: "section"
}, i5 = { class: "section-header" }, r5 = { class: "section-label" }, d5 = { class: "items-list" }, c5 = {
  key: 3,
  class: "section"
}, u5 = { class: "section-header" }, m5 = { class: "section-label" }, v5 = { class: "items-list" }, f5 = {
  key: 4,
  class: "section"
}, p5 = { class: "section-header" }, g5 = { class: "section-label failed" }, h5 = { class: "items-list" }, y5 = /* @__PURE__ */ te({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: n,
      queuedItems: l,
      completedItems: p,
      failedItems: v,
      pausedItems: u,
      hasItems: f,
      activeCount: d,
      cancelDownload: m,
      retryDownload: w,
      resumeDownload: _,
      resumeAllPaused: k,
      removeItem: y,
      clearCompleted: R
    } = vs(), E = h(!1);
    let $ = null;
    mt(
      () => ({
        active: d.value,
        failed: v.value.length,
        paused: u.value.length,
        completed: p.value.length
      }),
      (I, Y) => {
        $ && (clearTimeout($), $ = null);
        const B = I.active === 0 && I.failed === 0 && I.paused === 0 && I.completed > 0, U = Y && (Y.active > 0 || Y.paused > 0);
        B && U && ($ = setTimeout(() => {
          R(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const S = z(() => {
      var B;
      if (c.items.length === 0) return 0;
      const I = p.value.length, Y = ((B = n.value) == null ? void 0 : B.progress) || 0;
      return Math.round((I + Y / 100) / c.items.length * 100);
    });
    function N(I) {
      m(I);
    }
    function T(I) {
      return I === 0 ? "" : `${(I / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (I, Y) => (s(), P(et, { to: "body" }, [
      Se(f) ? (s(), o("div", {
        key: 0,
        class: fe(["model-download-queue", { minimized: !E.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: Y[0] || (Y[0] = (B) => E.value = !E.value)
        }, [
          e("div", j3, [
            Y[4] || (Y[4] = e("span", { class: "icon" }, "↓", -1)),
            Y[5] || (Y[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", K3, "(" + a(Se(d)) + "/" + a(Se(c).items.length) + ")", 1)
          ]),
          e("div", H3, [
            e("span", q3, a(E.value ? "minimize" : "expand"), 1)
          ])
        ]),
        E.value ? (s(), o("div", e5, [
          Se(n) ? (s(), o("div", t5, [
            Y[6] || (Y[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            b(ls, {
              item: Se(n),
              onCancel: Y[1] || (Y[1] = (B) => N(Se(n).id))
            }, null, 8, ["item"])
          ])) : r("", !0),
          Se(u).length > 0 ? (s(), o("div", s5, [
            e("div", o5, [
              e("span", n5, "Paused (" + a(Se(u).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: Y[2] || (Y[2] = //@ts-ignore
                (...B) => Se(k) && Se(k)(...B))
              }, "Resume All")
            ]),
            e("div", a5, [
              (s(!0), o(W, null, ae(Se(u), (B) => (s(), P(ls, {
                key: B.id,
                item: B,
                onResume: (U) => Se(_)(B.id),
                onRemove: (U) => Se(y)(B.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          Se(l).length > 0 ? (s(), o("div", l5, [
            e("div", i5, [
              e("span", r5, "Queued (" + a(Se(l).length) + ")", 1)
            ]),
            e("div", d5, [
              (s(!0), o(W, null, ae(Se(l), (B) => (s(), P(ls, {
                key: B.id,
                item: B,
                onCancel: (U) => N(B.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : r("", !0),
          Se(p).length > 0 ? (s(), o("div", c5, [
            e("div", u5, [
              e("span", m5, "Completed (" + a(Se(p).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: Y[3] || (Y[3] = //@ts-ignore
                (...B) => Se(R) && Se(R)(...B))
              }, "Clear")
            ]),
            e("div", v5, [
              (s(!0), o(W, null, ae(Se(p).slice(0, 3), (B) => (s(), P(ls, {
                key: B.id,
                item: B,
                onRemove: (U) => Se(y)(B.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          Se(v).length > 0 ? (s(), o("div", f5, [
            e("div", p5, [
              e("span", g5, "Failed (" + a(Se(v).length) + ")", 1)
            ]),
            e("div", h5, [
              (s(!0), o(W, null, ae(Se(v), (B) => (s(), P(ls, {
                key: B.id,
                item: B,
                onRetry: (U) => Se(w)(B.id),
                onRemove: (U) => Se(y)(B.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : r("", !0)
        ])) : (s(), o("div", Y3, [
          e("div", J3, [
            e("div", {
              class: "progress-fill",
              style: zt({ width: `${S.value}%` })
            }, null, 4)
          ]),
          Se(n) ? (s(), o("div", X3, [
            e("span", Q3, a(Se(n).filename), 1),
            e("span", Z3, a(T(Se(n).speed)), 1)
          ])) : r("", !0)
        ]))
      ], 2)) : r("", !0)
    ]));
  }
}), w5 = /* @__PURE__ */ se(y5, [["__scopeId", "data-v-60751cfa"]]), k5 = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', b5 = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', _5 = {
  comfy: k5,
  phosphor: b5
}, Vs = "comfy", _o = "comfygit-theme";
let jt = null, $o = Vs;
function $5() {
  try {
    const t = localStorage.getItem(_o);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Vs;
}
function Co(t = Vs) {
  jt && jt.remove(), jt = document.createElement("style"), jt.id = "comfygit-theme-styles", jt.setAttribute("data-theme", t), jt.textContent = _5[t], document.head.appendChild(jt), document.body.setAttribute("data-comfygit-theme", t), $o = t;
  try {
    localStorage.setItem(_o, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function C5() {
  return $o;
}
function x5(t) {
  Co(t);
}
function S5(t) {
  var v;
  const { ui_id: c, state: n } = t || {}, l = (n == null ? void 0 : n.history) || {};
  if (!c)
    return null;
  const p = l[c];
  return p && p.result === "error" && ((v = p.status) == null ? void 0 : v.status_str) === "error" ? (p.status.messages || [])[0] || "Unknown error" : null;
}
const Ws = document.createElement("link");
Ws.rel = "stylesheet";
Ws.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Ws);
const I5 = $5();
Co(I5);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), x5(t);
  },
  getTheme: () => {
    const t = C5();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let wt = null, ct = null, cs = null, is = null, Js = null;
const Zt = h(null);
let Gs = "managed", xo = !1;
async function ys() {
  var t;
  if (!((t = Vt) != null && t.api)) return null;
  try {
    const c = await Vt.api.fetchApi("/v2/comfygit/status");
    c.ok && (Zt.value = await c.json());
  } catch {
  }
}
async function Ds() {
  var t;
  if ((t = Vt) != null && t.api)
    try {
      const c = await Vt.api.fetchApi("/v2/setup/status");
      if (c.ok) {
        const n = await c.json();
        Gs = n.state, xo = n.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function Ls() {
  var c;
  if (Gs === "managed" || !xo) return;
  const t = document.querySelectorAll("button.comfyui-button");
  for (const n of t)
    if (((c = n.textContent) == null ? void 0 : c.trim()) === "Manager" && !n.querySelector("svg, i, img")) {
      n.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function E5() {
  if (!Zt.value) return !1;
  const t = Zt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Zt.value.has_changes;
}
function Xs(t) {
  wt && wt.remove(), wt = document.createElement("div"), wt.className = "comfygit-panel-overlay";
  const c = document.createElement("div");
  c.className = "comfygit-panel-container", wt.appendChild(c), wt.addEventListener("click", (p) => {
    p.target === wt && Ts();
  });
  const n = (p) => {
    p.key === "Escape" && (Ts(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), Ns({
    render: () => Os(x3, {
      initialView: t,
      onClose: Ts,
      onStatusUpdate: async (p) => {
        Zt.value = p, us(), await Ds(), zs(), Ls();
      }
    })
  }).mount(c), document.body.appendChild(wt);
}
function Ts() {
  wt && (wt.remove(), wt = null);
}
function P5(t) {
  rs(), ct = document.createElement("div"), ct.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  ct.style.position = "fixed", ct.style.top = `${c.bottom + 8}px`, ct.style.right = `${window.innerWidth - c.right}px`, ct.style.zIndex = "10001";
  const n = (p) => {
    ct && !ct.contains(p.target) && p.target !== t && (rs(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const l = (p) => {
    p.key === "Escape" && (rs(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), cs = Ns({
    render: () => Os(wo, {
      status: Zt.value,
      onClose: rs,
      onCommitted: (p) => {
        rs(), R5(p.success, p.message), ys().then(us);
      }
    })
  }), cs.mount(ct), document.body.appendChild(ct);
}
function rs() {
  cs && (cs.unmount(), cs = null), ct && (ct.remove(), ct = null);
}
function R5(t, c) {
  const n = document.createElement("div"), l = t ? "#22c55e" : "#ef4444";
  n.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg-color, #1a1a1a);
    border: 1px solid ${l};
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
  const p = document.createElement("span");
  p.textContent = t ? "✓" : "✕", p.style.cssText = `
    color: ${l};
    font-weight: bold;
    font-size: 14px;
  `, n.appendChild(p);
  const v = document.createElement("span");
  v.textContent = c, n.appendChild(v), document.body.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", n.style.transition = "opacity 0.2s ease", setTimeout(() => n.remove(), 200);
  }, 3e3);
}
function T5() {
  is || (is = document.createElement("div"), is.className = "comfygit-download-queue-root", Js = Ns({
    render: () => Os(w5)
  }), Js.mount(is), document.body.appendChild(is), console.log("[ComfyGit] Model download queue mounted"));
}
let ft = null;
function us() {
  if (!ft) return;
  const t = ft.querySelector(".commit-indicator");
  t && (t.style.display = E5() ? "block" : "none");
}
function zs() {
  if (!ft) return;
  const t = Gs !== "managed";
  ft.disabled = t, ft.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const So = document.createElement("style");
So.textContent = `
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
document.head.appendChild(So);
Vt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var p, v;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = Xs, ft = document.createElement("button"), ft.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", ft.innerHTML = 'Commit <span class="commit-indicator"></span>', ft.title = "Quick Commit", ft.onclick = () => P5(ft), t.appendChild(c), t.appendChild(ft), (v = (p = Vt.menu) == null ? void 0 : p.settingsGroup) != null && v.element && (Vt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), T5();
    const { loadPendingDownloads: n } = vs();
    n(), await Promise.all([ys(), Ds()]), us(), zs(), Ls(), setTimeout(Ls, 100), setInterval(async () => {
      await Promise.all([ys(), Ds()]), us(), zs();
    }, 3e4);
    const l = Vt.api;
    if (l) {
      let u = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((w) => {
          (w.startsWith("workflow:") || w.startsWith("Comfy.OpenWorkflowsPaths:") || w.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(w);
        }), window.location.reload();
      }, f = function() {
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
        const _ = document.createElement("span");
        _.textContent = "Workflows updated - refresh required", w.appendChild(_);
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
        `, k.onmouseover = () => k.style.background = "var(--comfy-input-bg)", k.onmouseout = () => k.style.background = "var(--comfy-menu-bg)", k.onclick = () => u(), w.appendChild(k);
        const y = document.createElement("button");
        y.textContent = "×", y.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, y.onmouseover = () => y.style.opacity = "1", y.onmouseout = () => y.style.opacity = "0.6", y.onclick = () => w.remove(), w.appendChild(y), document.body.appendChild(w), console.log("[ComfyGit] Refresh notification displayed");
      }, d = function(w) {
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
        const y = document.createElement("span");
        y.textContent = "⚠️", y.style.fontSize = "20px", k.appendChild(y);
        const R = document.createElement("div");
        R.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const E = document.createElement("div");
        E.textContent = "Node installation failed", E.style.cssText = "font-weight: 600; color: #e53935;", R.appendChild(E);
        const $ = document.createElement("div");
        $.textContent = "Dependency conflict detected", $.style.cssText = "font-size: 12px; opacity: 0.8;", R.appendChild($), k.appendChild(R);
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
          k.remove(), Xs("debug-env");
        }, k.appendChild(S);
        const N = document.createElement("button");
        N.textContent = "×", N.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, N.onmouseover = () => N.style.opacity = "1", N.onmouseout = () => N.style.opacity = "0.6", N.onclick = () => k.remove(), k.appendChild(N), document.body.appendChild(k), console.log("[ComfyGit] Manager error toast displayed:", w), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && k.remove();
        }, 1e4);
      };
      l.addEventListener("comfygit:workflow-changed", async (w) => {
        const { change_type: _, workflow_name: k } = w.detail;
        console.log(`[ComfyGit] Workflow ${_}: ${k}`), await ys(), us();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let m = !1;
      l.addEventListener("status", async (w) => {
        const _ = w.detail != null;
        _ && !m && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), u()) : f()), m = _;
      }), console.log("[ComfyGit] Refresh notification system initialized"), l.addEventListener("cm-task-completed", (w) => {
        const _ = S5(w.detail);
        _ && d(_);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
