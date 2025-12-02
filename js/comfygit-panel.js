import { app as zt } from "../../scripts/app.js";
import { defineComponent as le, createElementBlock as o, openBlock as s, createCommentVNode as r, createElementVNode as e, renderSlot as Me, createBlock as S, resolveDynamicComponent as Es, normalizeClass as pe, withCtx as l, toDisplayString as a, createVNode as y, createTextVNode as g, computed as U, Fragment as W, renderList as ie, normalizeStyle as Pt, ref as h, onMounted as We, watch as xt, Teleport as Qe, withModifiers as Be, Transition as $o, createSlots as Vt, withKeys as Ct, reactive as ws, onUnmounted as Ps, readonly as Co, unref as Pe, withDirectives as Ue, vModelText as Ft, vModelRadio as Ut, vModelCheckbox as ps, nextTick as xo, vModelSelect as Et, vModelDynamic as So, TransitionGroup as Io, createApp as Rs, h as Ms } from "vue";
const Eo = { class: "panel-layout" }, Po = {
  key: 0,
  class: "panel-layout-header"
}, Ro = {
  key: 1,
  class: "panel-layout-search"
}, Mo = { class: "panel-layout-content" }, To = {
  key: 2,
  class: "panel-layout-footer"
}, Do = /* @__PURE__ */ le({
  __name: "PanelLayout",
  setup(t) {
    return (c, n) => (s(), o("div", Eo, [
      c.$slots.header ? (s(), o("div", Po, [
        Me(c.$slots, "header", {}, void 0, !0)
      ])) : r("", !0),
      c.$slots.search ? (s(), o("div", Ro, [
        Me(c.$slots, "search", {}, void 0, !0)
      ])) : r("", !0),
      e("div", Mo, [
        Me(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (s(), o("div", To, [
        Me(c.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), re = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [i, f] of c)
    n[i] = f;
  return n;
}, nt = /* @__PURE__ */ re(Do, [["__scopeId", "data-v-21565df9"]]), Lo = {
  key: 0,
  class: "panel-title-prefix"
}, zo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Uo = /* @__PURE__ */ le({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, n) => (s(), S(Es(`h${t.level}`), {
      class: pe(["panel-title", t.variant])
    }, {
      default: l(() => [
        t.showPrefix ? (s(), o("span", Lo, a(t.prefix), 1)) : (s(), o("span", zo)),
        Me(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), No = /* @__PURE__ */ re(Uo, [["__scopeId", "data-v-c3875efc"]]), Oo = ["title"], Ao = ["width", "height"], Bo = /* @__PURE__ */ le({
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
      ])], 8, Ao))
    ], 8, Oo));
  }
}), Zs = /* @__PURE__ */ re(Bo, [["__scopeId", "data-v-6fc7f16d"]]), Fo = { class: "header-left" }, Vo = {
  key: 0,
  class: "header-actions"
}, Wo = /* @__PURE__ */ le({
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
      class: pe(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Fo, [
        y(No, { "show-prefix": t.showPrefix }, {
          default: l(() => [
            g(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), S(Zs, {
          key: 0,
          onClick: n[0] || (n[0] = (i) => c.$emit("info-click"))
        })) : r("", !0)
      ]),
      c.$slots.actions ? (s(), o("div", Vo, [
        Me(c.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), at = /* @__PURE__ */ re(Wo, [["__scopeId", "data-v-55a62cd6"]]), Go = {
  key: 0,
  class: "section-title-count"
}, jo = {
  key: 1,
  class: "section-title-icon"
}, Ho = /* @__PURE__ */ le({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (s(), S(Es(`h${t.level}`), {
      class: pe(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, {
      default: l(() => [
        Me(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Go, "(" + a(t.count) + ")", 1)) : r("", !0),
        t.clickable ? (s(), o("span", jo, a(t.expanded ? "▼" : "▸"), 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ut = /* @__PURE__ */ re(Ho, [["__scopeId", "data-v-559361eb"]]), Ko = { class: "status-grid" }, qo = { class: "status-grid__columns" }, Yo = { class: "status-grid__column" }, Jo = { class: "status-grid__title" }, Xo = { class: "status-grid__column status-grid__column--right" }, Qo = { class: "status-grid__title" }, Zo = {
  key: 0,
  class: "status-grid__footer"
}, en = /* @__PURE__ */ le({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", Ko, [
      e("div", qo, [
        e("div", Yo, [
          e("h4", Jo, a(t.leftTitle), 1),
          Me(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Xo, [
          e("h4", Qo, a(t.rightTitle), 1),
          Me(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (s(), o("div", Zo, [
        Me(c.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), tn = /* @__PURE__ */ re(en, [["__scopeId", "data-v-73b7ba3f"]]), sn = {
  key: 0,
  class: "status-item__icon"
}, on = {
  key: 1,
  class: "status-item__count"
}, nn = { class: "status-item__label" }, an = /* @__PURE__ */ le({
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
      class: pe(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", sn, a(t.icon), 1)) : r("", !0),
      t.count !== void 0 ? (s(), o("span", on, a(t.count), 1)) : r("", !0),
      e("span", nn, a(t.label), 1)
    ], 2));
  }
}), _t = /* @__PURE__ */ re(an, [["__scopeId", "data-v-6f929183"]]), ln = { class: "issue-card__header" }, rn = { class: "issue-card__icon" }, dn = { class: "issue-card__title" }, cn = {
  key: 0,
  class: "issue-card__content"
}, un = {
  key: 0,
  class: "issue-card__description"
}, mn = {
  key: 1,
  class: "issue-card__items"
}, vn = {
  key: 2,
  class: "issue-card__actions"
}, fn = /* @__PURE__ */ le({
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
      class: pe(["issue-card", n.value])
    }, [
      e("div", ln, [
        e("span", rn, a(t.icon), 1),
        e("h4", dn, a(t.title), 1)
      ]),
      i.$slots.default || t.description ? (s(), o("div", cn, [
        t.description ? (s(), o("p", un, a(t.description), 1)) : r("", !0),
        Me(i.$slots, "default", {}, void 0, !0)
      ])) : r("", !0),
      t.items && t.items.length ? (s(), o("div", mn, [
        (s(!0), o(W, null, ie(t.items, (v, u) => (s(), o("div", {
          key: u,
          class: "issue-card__item"
        }, [
          f[0] || (f[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(v), 1)
        ]))), 128))
      ])) : r("", !0),
      i.$slots.actions ? (s(), o("div", vn, [
        Me(i.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), pt = /* @__PURE__ */ re(fn, [["__scopeId", "data-v-df6aa348"]]), pn = ["type", "disabled"], gn = {
  key: 0,
  class: "spinner"
}, hn = /* @__PURE__ */ le({
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
      class: pe(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", gn)) : r("", !0),
      t.loading ? r("", !0) : Me(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, pn));
  }
}), oe = /* @__PURE__ */ re(hn, [["__scopeId", "data-v-772abe47"]]), yn = { class: "empty-state" }, wn = {
  key: 0,
  class: "empty-icon"
}, kn = { class: "empty-message" }, bn = /* @__PURE__ */ le({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, n) => (s(), o("div", yn, [
      t.icon ? (s(), o("div", wn, a(t.icon), 1)) : r("", !0),
      e("p", kn, a(t.message), 1),
      t.actionLabel ? (s(), S(oe, {
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
}), yt = /* @__PURE__ */ re(bn, [["__scopeId", "data-v-4466284f"]]), _n = /* @__PURE__ */ le({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: pe(["detail-label"]),
      style: Pt({ minWidth: t.minWidth })
    }, [
      Me(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), vs = /* @__PURE__ */ re(_n, [["__scopeId", "data-v-75e9eeb8"]]), $n = /* @__PURE__ */ le({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: pe(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      Me(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Cs = /* @__PURE__ */ re($n, [["__scopeId", "data-v-2f186e4c"]]), Cn = { class: "detail-row" }, xn = /* @__PURE__ */ le({
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
    return (c, n) => (s(), o("div", Cn, [
      y(vs, { "min-width": t.labelMinWidth }, {
        default: l(() => [
          g(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), S(Cs, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: l(() => [
          g(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Me(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Ve = /* @__PURE__ */ re(xn, [["__scopeId", "data-v-ef15664a"]]), Sn = { class: "modal-header" }, In = { class: "modal-body" }, En = { class: "status-section" }, Pn = {
  key: 0,
  class: "status-section"
}, Rn = { class: "section-header-row" }, Mn = {
  key: 0,
  class: "workflow-group"
}, Tn = { class: "workflow-group-header" }, Dn = { class: "workflow-group-title" }, Ln = { class: "workflow-list" }, zn = { class: "workflow-name" }, Un = { class: "workflow-issue" }, Nn = {
  key: 1,
  class: "workflow-group"
}, On = { class: "workflow-group-header" }, An = { class: "workflow-group-title" }, Bn = { class: "workflow-list" }, Fn = { class: "workflow-name" }, Vn = { class: "workflow-issue" }, Wn = {
  key: 2,
  class: "workflow-group"
}, Gn = { class: "workflow-group-header" }, jn = { class: "workflow-group-title" }, Hn = { class: "workflow-list" }, Kn = { class: "workflow-name" }, qn = {
  key: 3,
  class: "workflow-group"
}, Yn = { class: "workflow-group-header" }, Jn = { class: "workflow-group-title" }, Xn = { class: "workflow-list" }, Qn = { class: "workflow-name" }, Zn = {
  key: 4,
  class: "workflow-group"
}, ea = { class: "workflow-group-header" }, ta = { class: "workflow-group-title" }, sa = { class: "workflow-list" }, oa = { class: "workflow-name" }, na = {
  key: 5,
  class: "workflow-group"
}, aa = { class: "workflow-group-title" }, la = { class: "expand-icon" }, ia = {
  key: 0,
  class: "workflow-list"
}, ra = { class: "workflow-name" }, da = {
  key: 1,
  class: "status-section"
}, ca = {
  key: 0,
  class: "change-group"
}, ua = { class: "change-group-header" }, ma = { class: "change-group-title" }, va = { class: "change-list" }, fa = { class: "node-name" }, pa = {
  key: 0,
  class: "dev-badge"
}, ga = {
  key: 1,
  class: "change-group"
}, ha = { class: "change-group-header" }, ya = { class: "change-group-title" }, wa = { class: "change-list" }, ka = { class: "node-name" }, ba = {
  key: 0,
  class: "dev-badge"
}, _a = {
  key: 2,
  class: "change-group"
}, $a = { class: "change-list" }, Ca = { class: "change-item" }, xa = { class: "node-name" }, Sa = {
  key: 3,
  class: "change-group"
}, Ia = {
  key: 2,
  class: "status-section"
}, Ea = { class: "section-header-row" }, Pa = {
  key: 0,
  class: "drift-item"
}, Ra = { class: "drift-list" }, Ma = {
  key: 0,
  class: "drift-list-more"
}, Ta = {
  key: 1,
  class: "drift-item"
}, Da = { class: "drift-list" }, La = {
  key: 0,
  class: "drift-list-more"
}, za = {
  key: 2,
  class: "drift-item"
}, Ua = { class: "drift-list" }, Na = { class: "version-actual" }, Oa = { class: "version-expected" }, Aa = {
  key: 0,
  class: "drift-list-more"
}, Ba = {
  key: 3,
  class: "drift-item"
}, Fa = { class: "repair-action" }, Va = {
  key: 3,
  class: "status-section"
}, Wa = { class: "info-box" }, Ga = { class: "drift-list" }, ja = {
  key: 0,
  class: "drift-list-more"
}, Ha = {
  key: 4,
  class: "status-section"
}, Ka = { class: "warning-box" }, qa = {
  key: 5,
  class: "empty-state-inline"
}, Ya = { class: "modal-actions" }, Ja = /* @__PURE__ */ le({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(t) {
    const c = t, n = h(!1);
    We(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), xt(() => c.show, (_, b) => {
      console.log("StatusDetailModal show prop changed from", b, "to", _);
    }, { immediate: !0 });
    const i = U(() => {
      var _, b, T;
      return ((T = (b = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : b.analyzed) == null ? void 0 : T.filter(
        (R) => R.status === "broken" && R.sync_state === "synced"
      )) || [];
    }), f = U(() => {
      var _, b, T;
      return ((T = (b = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : b.analyzed) == null ? void 0 : T.filter(
        (R) => R.status === "broken" && R.sync_state !== "synced"
      )) || [];
    }), v = U(() => {
      var _, b, T;
      return ((T = (b = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : b.synced) == null ? void 0 : T.filter((R) => {
        var C, B, x;
        const $ = (x = (B = (C = c.status) == null ? void 0 : C.workflows) == null ? void 0 : B.analyzed) == null ? void 0 : x.find((M) => M.name === R);
        return !$ || $.status !== "broken";
      })) || [];
    }), u = U(() => {
      var _, b, T, R, $;
      return (_ = c.status) != null && _.workflows ? (((b = c.status.workflows.new) == null ? void 0 : b.length) ?? 0) > 0 || (((T = c.status.workflows.modified) == null ? void 0 : T.length) ?? 0) > 0 || (((R = c.status.workflows.deleted) == null ? void 0 : R.length) ?? 0) > 0 || ((($ = c.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), m = U(() => {
      var b, T, R;
      const _ = (b = c.status) == null ? void 0 : b.git_changes;
      return _ ? (((T = _.nodes_added) == null ? void 0 : T.length) ?? 0) > 0 || (((R = _.nodes_removed) == null ? void 0 : R.length) ?? 0) > 0 || _.workflow_changes || _.has_other_changes : !1;
    }), d = U(() => {
      var _, b, T, R, $, C;
      return !u.value && !m.value && ((b = (_ = c.status) == null ? void 0 : _.comparison) == null ? void 0 : b.is_synced) && (((T = c.status) == null ? void 0 : T.missing_models_count) ?? 0) === 0 && (((C = ($ = (R = c.status) == null ? void 0 : R.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
    }), p = U(() => {
      var b, T;
      const _ = (T = (b = c.status) == null ? void 0 : b.git_changes) == null ? void 0 : T.workflow_changes;
      return _ ? typeof _ == "number" ? _ : Object.keys(_).length : 0;
    });
    function w(_) {
      return typeof _ == "string" ? _ : _.name;
    }
    function k(_) {
      return typeof _ == "object" && _.is_development === !0;
    }
    return (_, b) => {
      var T, R, $, C, B, x, M, Z, F, G, E, D, A, de, te, Y, ue, Q, O, z, I, me;
      return s(), S(Qe, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: b[7] || (b[7] = (ee) => _.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: b[6] || (b[6] = Be(() => {
            }, ["stop"]))
          }, [
            e("div", Sn, [
              b[8] || (b[8] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: b[0] || (b[0] = (ee) => _.$emit("close"))
              }, "✕")
            ]),
            e("div", In, [
              e("div", En, [
                y(ut, { level: "4" }, {
                  default: l(() => [...b[9] || (b[9] = [
                    g("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                y(Ve, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (s(), o("div", Pn, [
                e("div", Rn, [
                  y(ut, { level: "4" }, {
                    default: l(() => [...b[10] || (b[10] = [
                      g("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: b[1] || (b[1] = (ee) => _.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (s(), o("div", Mn, [
                  e("div", Tn, [
                    b[11] || (b[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Dn, "BROKEN (COMMITTED) (" + a(i.value.length) + ")", 1)
                  ]),
                  e("div", Ln, [
                    (s(!0), o(W, null, ie(i.value, (ee) => (s(), o("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", zn, a(ee.name), 1),
                      e("span", Un, a(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                f.value.length ? (s(), o("div", Nn, [
                  e("div", On, [
                    b[12] || (b[12] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", An, "BROKEN (UNCOMMITTED) (" + a(f.value.length) + ")", 1)
                  ]),
                  e("div", Bn, [
                    (s(!0), o(W, null, ie(f.value, (ee) => (s(), o("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", Fn, a(ee.name), 1),
                      e("span", Vn, a(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (R = (T = t.status.workflows) == null ? void 0 : T.new) != null && R.length ? (s(), o("div", Wn, [
                  e("div", Gn, [
                    b[13] || (b[13] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", jn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Hn, [
                    (s(!0), o(W, null, ie(t.status.workflows.new, (ee) => (s(), o("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Kn, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (C = ($ = t.status.workflows) == null ? void 0 : $.modified) != null && C.length ? (s(), o("div", qn, [
                  e("div", Yn, [
                    b[14] || (b[14] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Jn, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Xn, [
                    (s(!0), o(W, null, ie(t.status.workflows.modified, (ee) => (s(), o("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Qn, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (x = (B = t.status.workflows) == null ? void 0 : B.deleted) != null && x.length ? (s(), o("div", Zn, [
                  e("div", ea, [
                    b[15] || (b[15] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", ta, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", sa, [
                    (s(!0), o(W, null, ie(t.status.workflows.deleted, (ee) => (s(), o("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", oa, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                v.value.length ? (s(), o("div", na, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: b[2] || (b[2] = (ee) => n.value = !n.value)
                  }, [
                    b[16] || (b[16] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", aa, "SYNCED (" + a(v.value.length) + ")", 1),
                    e("span", la, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", ia, [
                    (s(!0), o(W, null, ie(v.value, (ee) => (s(), o("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", ra, a(ee), 1)
                    ]))), 128))
                  ])) : r("", !0)
                ])) : r("", !0)
              ])) : r("", !0),
              m.value ? (s(), o("div", da, [
                y(ut, { level: "4" }, {
                  default: l(() => [...b[17] || (b[17] = [
                    g("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (Z = (M = t.status.git_changes) == null ? void 0 : M.nodes_added) != null && Z.length ? (s(), o("div", ca, [
                  e("div", ua, [
                    b[18] || (b[18] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", ma, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", va, [
                    (s(!0), o(W, null, ie(t.status.git_changes.nodes_added, (ee) => (s(), o("div", {
                      key: w(ee),
                      class: "change-item"
                    }, [
                      e("span", fa, a(w(ee)), 1),
                      k(ee) ? (s(), o("span", pa, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (G = (F = t.status.git_changes) == null ? void 0 : F.nodes_removed) != null && G.length ? (s(), o("div", ga, [
                  e("div", ha, [
                    b[19] || (b[19] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", ya, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", wa, [
                    (s(!0), o(W, null, ie(t.status.git_changes.nodes_removed, (ee) => (s(), o("div", {
                      key: w(ee),
                      class: "change-item"
                    }, [
                      e("span", ka, a(w(ee)), 1),
                      k(ee) ? (s(), o("span", ba, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (E = t.status.git_changes) != null && E.workflow_changes ? (s(), o("div", _a, [
                  b[20] || (b[20] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", $a, [
                    e("div", Ca, [
                      e("span", xa, a(p.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : r("", !0),
                (D = t.status.git_changes) != null && D.has_other_changes ? (s(), o("div", Sa, [...b[21] || (b[21] = [
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
              (A = t.status.comparison) != null && A.is_synced ? r("", !0) : (s(), o("div", Ia, [
                e("div", Ea, [
                  y(ut, { level: "4" }, {
                    default: l(() => [...b[22] || (b[22] = [
                      g("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: b[3] || (b[3] = (ee) => _.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                b[26] || (b[26] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (te = (de = t.status.comparison) == null ? void 0 : de.missing_nodes) != null && te.length ? (s(), o("div", Pa, [
                  y(Ve, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Ra, [
                    (s(!0), o(W, null, ie(t.status.comparison.missing_nodes.slice(0, 10), (ee) => (s(), o("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + a(ee), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", Ma, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (ue = (Y = t.status.comparison) == null ? void 0 : Y.extra_nodes) != null && ue.length ? (s(), o("div", Ta, [
                  y(Ve, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Da, [
                    (s(!0), o(W, null, ie(t.status.comparison.extra_nodes.slice(0, 10), (ee) => (s(), o("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + a(ee), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", La, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (O = (Q = t.status.comparison) == null ? void 0 : Q.version_mismatches) != null && O.length ? (s(), o("div", za, [
                  y(Ve, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  e("div", Ua, [
                    (s(!0), o(W, null, ie(t.status.comparison.version_mismatches.slice(0, 10), (ee) => (s(), o("div", {
                      key: ee.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      g(a(ee.name) + ": ", 1),
                      e("span", Na, a(ee.actual), 1),
                      b[23] || (b[23] = g(" → ", -1)),
                      e("span", Oa, a(ee.expected), 1)
                    ]))), 128)),
                    t.status.comparison.version_mismatches.length > 10 ? (s(), o("div", Aa, " ... and " + a(t.status.comparison.version_mismatches.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                ((z = t.status.comparison) == null ? void 0 : z.packages_in_sync) === !1 ? (s(), o("div", Ba, [
                  y(Ve, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : r("", !0),
                e("div", Fa, [
                  y(oe, {
                    variant: "warning",
                    loading: t.isRepairing,
                    onClick: b[4] || (b[4] = (ee) => _.$emit("repair"))
                  }, {
                    default: l(() => [...b[24] || (b[24] = [
                      g(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  b[25] || (b[25] = e("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (me = (I = t.status.comparison) == null ? void 0 : I.disabled_nodes) != null && me.length ? (s(), o("div", Va, [
                y(ut, { level: "4" }, {
                  default: l(() => [...b[27] || (b[27] = [
                    g("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Wa, [
                  b[28] || (b[28] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Ga, [
                  (s(!0), o(W, null, ie(t.status.comparison.disabled_nodes.slice(0, 10), (ee) => (s(), o("div", {
                    key: ee,
                    class: "drift-list-item"
                  }, " • " + a(ee), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", ja, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : r("", !0)
                ])
              ])) : r("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", Ha, [
                y(ut, { level: "4" }, {
                  default: l(() => [...b[29] || (b[29] = [
                    g("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Ka, [
                  b[30] || (b[30] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                b[31] || (b[31] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : r("", !0),
              d.value ? (s(), o("div", qa, [...b[32] || (b[32] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : r("", !0)
            ]),
            e("div", Ya, [
              y(oe, {
                variant: "secondary",
                onClick: b[5] || (b[5] = (ee) => _.$emit("close"))
              }, {
                default: l(() => [...b[33] || (b[33] = [
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
}), Xa = /* @__PURE__ */ re(Ja, [["__scopeId", "data-v-e2b37122"]]), Qa = { class: "health-section-header" }, Za = { class: "suggestions-content" }, el = { class: "suggestions-text" }, tl = { style: { "margin-top": "var(--cg-space-3)" } }, sl = {
  key: 1,
  class: "no-issues-text"
}, ol = /* @__PURE__ */ le({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(t, { expose: c, emit: n }) {
    const i = t, f = h(!1), v = h(!1);
    function u() {
      f.value = !0;
    }
    function m() {
      f.value = !1, p("view-workflows");
    }
    function d() {
      f.value = !1, p("view-nodes");
    }
    const p = n, w = h(!1), k = h(!1);
    function _() {
      k.value = !0, p("repair-environment");
    }
    function b() {
      k.value = !1;
    }
    function T() {
      f.value = !1;
    }
    const R = U(() => {
      const Q = i.status.workflows.analyzed || [], O = Q.filter(
        (z) => z.unresolved_models_count > 0 || z.ambiguous_models_count > 0
      );
      return O.length === 0 && i.status.missing_models_count > 0 ? Q.filter((z) => z.sync_state === "synced") : O;
    });
    function $() {
      const Q = R.value;
      Q.length !== 0 && (w.value = !0, p("repair-missing-models", Q.map((O) => O.name)));
    }
    function C() {
      w.value = !1;
    }
    c({ resetRepairingState: C, resetRepairingEnvironmentState: b, closeDetailModal: T });
    const B = U(() => i.status.workflows.new.length > 0 || i.status.workflows.modified.length > 0 || i.status.workflows.deleted.length > 0), x = U(() => i.status.has_changes), M = U(() => {
      const Q = i.status.git_changes;
      return Q.nodes_added.length > 0 || Q.nodes_removed.length > 0 || Q.workflow_changes;
    }), Z = U(() => i.status.has_changes || B.value), F = U(() => Object.keys(i.status.git_changes.workflow_changes_detail).length), G = U(() => i.status.git_changes.has_other_changes), E = U(() => {
      var Q;
      return ((Q = i.status.workflows.analyzed) == null ? void 0 : Q.filter((O) => O.status === "broken")) || [];
    }), D = U(() => {
      var Q;
      return ((Q = i.status.workflows.analyzed) == null ? void 0 : Q.filter(
        (O) => O.has_path_sync_issues && !O.has_issues
      )) || [];
    }), A = U(() => E.value.length > 0), de = U(() => A.value || D.value.length > 0 || i.status.missing_models_count > 0 || !i.status.comparison.is_synced || i.status.has_legacy_manager), te = U(() => {
      const Q = [];
      return i.status.workflows.new.length > 0 && Q.push(`${i.status.workflows.new.length} new`), i.status.workflows.modified.length > 0 && Q.push(`${i.status.workflows.modified.length} modified`), i.status.workflows.deleted.length > 0 && Q.push(`${i.status.workflows.deleted.length} deleted`), Q.length > 0 ? `${Q.join(", ")} workflow${Q.length === 1 && !Q[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Y = U(() => {
      var z, I;
      const Q = [], O = i.status.comparison;
      return (z = O.missing_nodes) != null && z.length && Q.push(`${O.missing_nodes.length} missing node${O.missing_nodes.length === 1 ? "" : "s"}`), (I = O.extra_nodes) != null && I.length && Q.push(`${O.extra_nodes.length} untracked node${O.extra_nodes.length === 1 ? "" : "s"}`), Q.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${Q.join(" and ")}.`;
    }), ue = U(() => {
      var z, I;
      const Q = [], O = i.status.comparison;
      return (z = O.extra_nodes) != null && z.length && (O.extra_nodes.slice(0, 3).forEach((me) => {
        Q.push(`Untracked: ${me}`);
      }), O.extra_nodes.length > 3 && Q.push(`...and ${O.extra_nodes.length - 3} more untracked`)), (I = O.missing_nodes) != null && I.length && (O.missing_nodes.slice(0, 3).forEach((me) => {
        Q.push(`Missing: ${me}`);
      }), O.missing_nodes.length > 3 && Q.push(`...and ${O.missing_nodes.length - 3} more missing`)), Q;
    });
    return (Q, O) => (s(), o(W, null, [
      y(nt, null, {
        header: l(() => [
          y(at, { title: "STATUS" })
        ]),
        content: l(() => [
          i.setupState === "no_workspace" ? (s(), S(pt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: l(() => [
              y(oe, {
                variant: "primary",
                size: "sm",
                onClick: O[0] || (O[0] = (z) => Q.$emit("start-setup"))
              }, {
                default: l(() => [...O[13] || (O[13] = [
                  g(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "unmanaged" ? (s(), S(pt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: l(() => [
              y(oe, {
                variant: "primary",
                size: "sm",
                onClick: O[1] || (O[1] = (z) => Q.$emit("view-environments"))
              }, {
                default: l(() => [...O[14] || (O[14] = [
                  g(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "empty_workspace" ? (s(), S(pt, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: l(() => [
              y(oe, {
                variant: "primary",
                size: "sm",
                onClick: O[2] || (O[2] = (z) => Q.$emit("create-environment"))
              }, {
                default: l(() => [...O[15] || (O[15] = [
                  g(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: O[4] || (O[4] = (z) => v.value = !0),
            onMouseleave: O[5] || (O[5] = (z) => v.value = !1)
          }, [
            e("div", Qa, [
              y(ut, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: l(() => [...O[16] || (O[16] = [
                  g(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              y($o, { name: "fade" }, {
                default: l(() => [
                  v.value ? (s(), S(oe, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: u
                  }, {
                    default: l(() => [...O[17] || (O[17] = [
                      g(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : r("", !0)
                ]),
                _: 1
              })
            ]),
            y(tn, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Vt({
              left: l(() => [
                t.status.workflows.new.length ? (s(), S(_t, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.modified.length ? (s(), S(_t, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.deleted.length ? (s(), S(_t, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : r("", !0),
                y(_t, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: B.value
                }, null, 8, ["count", "separator"])
              ]),
              right: l(() => [
                t.status.git_changes.nodes_added.length ? (s(), S(_t, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), S(_t, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.workflow_changes ? (s(), S(_t, {
                  key: 2,
                  icon: "●",
                  count: F.value,
                  label: F.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : r("", !0),
                G.value ? (s(), S(_t, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : r("", !0),
                x.value && !M.value && !G.value ? (s(), S(_t, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : r("", !0),
                x.value ? r("", !0) : (s(), S(_t, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              Z.value ? {
                name: "footer",
                fn: l(() => [
                  O[19] || (O[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Za, [
                    e("span", el, a(te.value), 1),
                    y(oe, {
                      variant: "primary",
                      size: "sm",
                      onClick: O[3] || (O[3] = (z) => Q.$emit("commit-changes"))
                    }, {
                      default: l(() => [...O[18] || (O[18] = [
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
          t.status.is_detached_head ? (s(), S(pt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: l(() => [
              y(oe, {
                variant: "primary",
                size: "sm",
                onClick: O[6] || (O[6] = (z) => Q.$emit("create-branch"))
              }, {
                default: l(() => [...O[20] || (O[20] = [
                  g(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r("", !0),
          e("div", tl, [
            y(ut, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: l(() => [...O[21] || (O[21] = [
                g(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            de.value ? (s(), o(W, { key: 0 }, [
              E.value.length > 0 ? (s(), S(pt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${E.value.length} workflow${E.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: E.value.map((z) => `${z.name} — ${z.issue_summary}`)
              }, {
                actions: l(() => [
                  y(oe, {
                    variant: "primary",
                    size: "sm",
                    onClick: O[7] || (O[7] = (z) => Q.$emit("view-workflows"))
                  }, {
                    default: l(() => [...O[22] || (O[22] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : r("", !0),
              D.value.length > 0 ? (s(), S(pt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${D.value.length} workflow${D.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: D.value.map((z) => `${z.name} — ${z.models_needing_path_sync_count} model path${z.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: l(() => [
                  y(oe, {
                    variant: "primary",
                    size: "sm",
                    onClick: O[8] || (O[8] = (z) => Q.$emit("view-workflows"))
                  }, {
                    default: l(() => [...O[23] || (O[23] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : r("", !0),
              t.status.missing_models_count > 0 && !A.value ? (s(), S(pt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: l(() => [
                  y(oe, {
                    variant: "primary",
                    size: "sm",
                    disabled: w.value,
                    onClick: $
                  }, {
                    default: l(() => [
                      g(a(w.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  y(oe, {
                    variant: "secondary",
                    size: "sm",
                    onClick: O[9] || (O[9] = (z) => Q.$emit("view-workflows"))
                  }, {
                    default: l(() => [...O[24] || (O[24] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : r("", !0),
              t.status.comparison.is_synced ? r("", !0) : (s(), S(pt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: Y.value,
                items: ue.value
              }, {
                actions: l(() => [
                  y(oe, {
                    variant: "secondary",
                    size: "sm",
                    onClick: u
                  }, {
                    default: l(() => [...O[25] || (O[25] = [
                      g(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  y(oe, {
                    variant: "primary",
                    size: "sm",
                    onClick: O[10] || (O[10] = (z) => Q.$emit("view-nodes"))
                  }, {
                    default: l(() => [...O[26] || (O[26] = [
                      g(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), S(pt, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: l(() => [
                  y(oe, {
                    variant: "primary",
                    size: "sm",
                    onClick: O[11] || (O[11] = (z) => Q.$emit("view-nodes"))
                  }, {
                    default: l(() => [...O[27] || (O[27] = [
                      g(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : r("", !0)
            ], 64)) : Z.value ? (s(), o("span", sl, "No issues")) : (s(), S(yt, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      y(Xa, {
        show: f.value,
        status: t.status,
        "is-repairing": k.value,
        onClose: O[12] || (O[12] = (z) => f.value = !1),
        onNavigateWorkflows: m,
        onNavigateNodes: d,
        onRepair: _
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), nl = /* @__PURE__ */ re(ol, [["__scopeId", "data-v-55fcd77f"]]), al = ["type", "value", "placeholder", "disabled"], ll = /* @__PURE__ */ le({
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
    const i = t, f = n, v = h(null);
    function u(m) {
      const d = m.target.value;
      f("update:modelValue", d);
    }
    return We(() => {
      i.autoFocus && v.value && v.value.focus();
    }), c({
      focus: () => {
        var m;
        return (m = v.value) == null ? void 0 : m.focus();
      },
      blur: () => {
        var m;
        return (m = v.value) == null ? void 0 : m.blur();
      }
    }), (m, d) => (s(), o("input", {
      ref_key: "inputRef",
      ref: v,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: pe(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: u,
      onKeyup: [
        d[0] || (d[0] = Ct((p) => m.$emit("enter"), ["enter"])),
        d[1] || (d[1] = Ct((p) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (p) => m.$emit("focus")),
      onBlur: d[3] || (d[3] = (p) => m.$emit("blur"))
    }, null, 42, al));
  }
}), gs = /* @__PURE__ */ re(ll, [["__scopeId", "data-v-0380d08f"]]), il = { class: "branch-create-form" }, rl = { class: "form-actions" }, dl = /* @__PURE__ */ le({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, i = h(""), f = U(() => {
      const m = i.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function v() {
      f.value && (n("create", i.value.trim()), i.value = "");
    }
    function u() {
      i.value = "", n("cancel");
    }
    return (m, d) => (s(), o("div", il, [
      y(gs, {
        modelValue: i.value,
        "onUpdate:modelValue": d[0] || (d[0] = (p) => i.value = p),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: v,
        onEscape: u
      }, null, 8, ["modelValue"]),
      e("div", rl, [
        y(oe, {
          variant: "primary",
          size: "sm",
          disabled: !f.value,
          onClick: v
        }, {
          default: l(() => [...d[1] || (d[1] = [
            g(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        y(oe, {
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
}), cl = /* @__PURE__ */ re(dl, [["__scopeId", "data-v-7c500394"]]), ul = { class: "branch-list-item__indicator" }, ml = { class: "branch-list-item__name" }, vl = {
  key: 0,
  class: "branch-list-item__actions"
}, fl = {
  key: 0,
  class: "branch-list-item__current-label"
}, pl = /* @__PURE__ */ le({
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
      class: pe(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, [
      e("span", ul, a(t.isCurrent ? "●" : "○"), 1),
      e("span", ml, a(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (s(), o("div", vl, [
        Me(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", fl, " current ")) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), gl = /* @__PURE__ */ re(pl, [["__scopeId", "data-v-c6581a24"]]), hl = {
  key: 2,
  class: "branch-list"
}, yl = /* @__PURE__ */ le({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: c }) {
    const n = c, i = h(!1);
    function f(u) {
      n("create", u), v();
    }
    function v() {
      i.value = !1;
    }
    return (u, m) => (s(), S(nt, null, {
      header: l(() => [
        y(at, { title: "BRANCHES" }, {
          actions: l(() => [
            i.value ? r("", !0) : (s(), S(oe, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: m[0] || (m[0] = (d) => i.value = !0)
            }, {
              default: l(() => [...m[1] || (m[1] = [
                g(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: l(() => [
        i.value ? (s(), S(cl, {
          key: 0,
          onCreate: f,
          onCancel: v
        })) : r("", !0),
        t.branches.length === 0 ? (s(), S(yt, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", hl, [
          (s(!0), o(W, null, ie(t.branches, (d) => (s(), S(gl, {
            key: d.name,
            "branch-name": d.name,
            "is-current": d.is_current
          }, {
            actions: l(() => [
              d.is_current ? r("", !0) : (s(), S(oe, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (p) => u.$emit("delete", d.name)
              }, {
                default: l(() => [...m[2] || (m[2] = [
                  g(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              d.is_current ? r("", !0) : (s(), S(oe, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (p) => u.$emit("switch", d.name)
              }, {
                default: l(() => [...m[3] || (m[3] = [
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
}), wl = /* @__PURE__ */ re(yl, [["__scopeId", "data-v-86784ddd"]]), kl = { class: "commit-list" }, bl = /* @__PURE__ */ le({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (s(), o("div", kl, [
      Me(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), _l = /* @__PURE__ */ re(bl, [["__scopeId", "data-v-8c5ee761"]]), $l = { class: "commit-hash" }, Cl = /* @__PURE__ */ le({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = U(() => c.hash.slice(0, c.length));
    return (i, f) => (s(), o("span", $l, a(n.value), 1));
  }
}), eo = /* @__PURE__ */ re(Cl, [["__scopeId", "data-v-7c333cc6"]]), xl = { class: "commit-message" }, Sl = { class: "commit-date" }, Il = /* @__PURE__ */ le({
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
    return (v, u) => (s(), o("div", {
      class: pe(["commit-item", { clickable: t.clickable }]),
      onClick: f
    }, [
      y(eo, { hash: t.hash }, null, 8, ["hash"]),
      e("span", xl, a(t.message), 1),
      e("span", Sl, a(t.relativeDate), 1),
      v.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = Be(() => {
        }, ["stop"]))
      }, [
        Me(v.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), El = /* @__PURE__ */ re(Il, [["__scopeId", "data-v-dd7c621b"]]), Pl = /* @__PURE__ */ le({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (s(), S(nt, null, {
      header: l(() => [
        y(at, { title: "HISTORY" })
      ]),
      content: l(() => [
        t.commits.length === 0 ? (s(), S(yt, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), S(_l, { key: 1 }, {
          default: l(() => [
            (s(!0), o(W, null, ie(t.commits, (i) => (s(), S(El, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (f) => c.$emit("select", i)
            }, {
              actions: l(() => [
                y(oe, {
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
}), Rl = /* @__PURE__ */ re(Pl, [["__scopeId", "data-v-981c3c64"]]), bC = ws({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const _C = [
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
], $C = {
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
}, Ml = [
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
], CC = [
  ...Ml,
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
function os() {
  return !1;
}
function He() {
  const t = h(!1), c = h(null);
  async function n(H, ve) {
    var Ne;
    if (!((Ne = window.app) != null && Ne.api))
      throw new Error("ComfyUI API not available");
    const Se = await window.app.api.fetchApi(H, ve);
    if (!Se.ok) {
      const j = await Se.json().catch(() => ({}));
      throw new Error(j.error || j.message || `Request failed: ${Se.status}`);
    }
    return Se.json();
  }
  async function i(H = !1) {
    return n(H ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function f(H, ve = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: H, allow_issues: ve })
    });
  }
  async function v(H = 10, ve = 0) {
    return n(`/v2/comfygit/log?limit=${H}&offset=${ve}`);
  }
  async function u(H) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: H })
    });
  }
  async function m() {
    return n("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function d(H) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: H, force: !0 })
    });
  }
  async function p() {
    return n("/v2/comfygit/branches");
  }
  async function w(H) {
    return n(`/v2/comfygit/commit/${H}`);
  }
  async function k(H, ve = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: H, force: ve })
    });
  }
  async function _(H, ve = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, start_point: ve })
    });
  }
  async function b(H, ve = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: H, force: ve })
    });
  }
  async function T(H, ve = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(H)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ve })
    });
  }
  async function R() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const H = await i();
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
  async function $(H, ve) {
    const Se = { target_env: H };
    return ve && (Se.workspace_path = ve), n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Se)
    });
  }
  async function C() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function B(H) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function x() {
    return n("/v2/workspace/environments/create_status");
  }
  async function M(H = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${H}`);
  }
  async function Z(H) {
    return n(`/v2/workspace/environments/${H}`, {
      method: "DELETE"
    });
  }
  async function F(H = !1) {
    try {
      return n(H ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ve = await i(H), Se = [];
      return ve.workflows.new.forEach((Ne) => {
        Se.push({ name: Ne, status: "new", missing_nodes: 0, missing_models: 0, path: Ne });
      }), ve.workflows.modified.forEach((Ne) => {
        Se.push({ name: Ne, status: "modified", missing_nodes: 0, missing_models: 0, path: Ne });
      }), ve.workflows.synced.forEach((Ne) => {
        Se.push({ name: Ne, status: "synced", missing_nodes: 0, missing_models: 0, path: Ne });
      }), Se;
    }
  }
  async function G(H) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/details`);
  }
  async function E(H) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/resolve`, {
      method: "POST"
    });
  }
  async function D(H, ve, Se) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ve, install_models: Se })
    });
  }
  async function A(H, ve, Se) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ve, importance: Se })
    });
  }
  async function de() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function te() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function Y(H) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(H)}`);
  }
  async function ue(H) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function Q(H, ve) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ve })
    });
  }
  async function O(H, ve) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ve })
    });
  }
  async function z(H) {
    return n(`/v2/workspace/models/${H}`, {
      method: "DELETE"
    });
  }
  async function I(H) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function me() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function ee() {
    return n("/v2/workspace/models/directory");
  }
  async function be(H) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function Ie(H) {
    try {
      const ve = H ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(H)}` : "/v2/comfygit/config";
      return n(ve);
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
  async function Te(H, ve) {
    const Se = ve ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(ve)}` : "/v2/comfygit/config";
    return n(Se, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function Ae(H, ve) {
    try {
      const Se = new URLSearchParams();
      return H && Se.append("level", H), ve && Se.append("lines", ve.toString()), n(`/v2/comfygit/debug/logs?${Se}`);
    } catch {
      return [];
    }
  }
  async function ce(H, ve) {
    try {
      const Se = new URLSearchParams();
      return H && Se.append("level", H), ve && Se.append("lines", ve.toString()), n(`/v2/workspace/debug/logs?${Se}`);
    } catch {
      return [];
    }
  }
  async function ge() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function xe() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function se(H) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function ae() {
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
  async function we(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/track-dev`, {
      method: "POST"
    });
  }
  async function ze(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/install`, {
      method: "POST"
    });
  }
  async function Ze(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/update`, {
      method: "POST"
    });
  }
  async function et(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function $e() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function tt(H, ve) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, url: ve })
    });
  }
  async function Ye(H) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function je(H, ve, Se) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ve, push_url: Se })
    });
  }
  async function rt(H) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/fetch`, {
      method: "POST"
    });
  }
  async function _e(H) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/status`);
    } catch {
      return null;
    }
  }
  async function Re(H = "skip", ve = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: H,
        remove_extra_nodes: ve
      })
    });
  }
  async function st(H, ve) {
    const Se = ve ? `/v2/comfygit/remotes/${encodeURIComponent(H)}/pull-preview?branch=${encodeURIComponent(ve)}` : `/v2/comfygit/remotes/${encodeURIComponent(H)}/pull-preview`;
    return n(Se);
  }
  async function Je(H, ve = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: ve.modelStrategy || "skip",
        force: ve.force || !1,
        resolutions: ve.resolutions
      })
    });
  }
  async function Le(H, ve) {
    const Se = ve ? `/v2/comfygit/remotes/${encodeURIComponent(H)}/push-preview?branch=${encodeURIComponent(ve)}` : `/v2/comfygit/remotes/${encodeURIComponent(H)}/push-preview`;
    return n(Se);
  }
  async function fe(H, ve = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ve.force || !1 })
    });
  }
  async function K(H, ve) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: ve })
    });
  }
  async function J(H) {
    const ve = {
      success: 0,
      failed: []
    };
    for (const Se of H)
      try {
        await E(Se), ve.success++;
      } catch (Ne) {
        ve.failed.push({
          name: Se,
          error: Ne instanceof Error ? Ne.message : "Unknown error"
        });
      }
    return ve;
  }
  async function P(H) {
    var Ne;
    const ve = new FormData();
    if (ve.append("file", H), !((Ne = window.app) != null && Ne.api))
      throw new Error("ComfyUI API not available");
    const Se = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: ve
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Se.ok) {
      const j = await Se.json().catch(() => ({}));
      throw new Error(j.error || `Preview failed: ${Se.status}`);
    }
    return Se.json();
  }
  async function V(H) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(H)}`
    );
  }
  async function ne(H, ve, Se, Ne) {
    var he;
    const j = new FormData();
    if (j.append("file", H), j.append("name", ve), j.append("model_strategy", Se), j.append("torch_backend", Ne), !((he = window.app) != null && he.api))
      throw new Error("ComfyUI API not available");
    const N = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: j
    });
    if (!N.ok) {
      const Ee = await N.json().catch(() => ({}));
      throw new Error(Ee.message || Ee.error || `Import failed: ${N.status}`);
    }
    return N.json();
  }
  async function ke() {
    return n("/v2/workspace/import/status");
  }
  async function Ge(H) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: H })
    });
  }
  async function it(H, ve, Se, Ne) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: H,
        name: ve,
        model_strategy: Se,
        torch_backend: Ne
      })
    });
  }
  async function Xe() {
    return n("/v2/setup/status");
  }
  async function St(H) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function mt() {
    return n("/v2/setup/initialize_status");
  }
  async function Tt(H) {
    return n("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function Wt() {
    return n("/v2/comfygit/deploy/summary");
  }
  async function vt() {
    return n("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function Xt(H, ve) {
    return n("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: H, save_key: ve })
    });
  }
  async function Nt() {
    return n("/v2/comfygit/deploy/runpod/volumes");
  }
  async function Qt(H) {
    const ve = H ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(H)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return n(ve);
  }
  async function Ot(H) {
    return n("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function Zt() {
    return n("/v2/comfygit/deploy/runpod/pods");
  }
  async function ft(H) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function Gt(H) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(H)}/stop`, {
      method: "POST"
    });
  }
  async function es(H) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(H)}/start`, {
      method: "POST"
    });
  }
  async function ts(H) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(H)}/status`);
  }
  async function jt(H) {
    return n("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: H })
    });
  }
  async function ss(H = !1) {
    return n(H ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function At() {
    return n("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  return {
    isLoading: t,
    error: c,
    getStatus: i,
    commit: f,
    getHistory: v,
    exportEnv: u,
    validateExport: m,
    exportEnvWithForce: d,
    // Git Operations
    getBranches: p,
    getCommitDetail: w,
    checkout: k,
    createBranch: _,
    switchBranch: b,
    deleteBranch: T,
    // Environment Management
    getEnvironments: R,
    switchEnvironment: $,
    getSwitchProgress: C,
    createEnvironment: B,
    getCreateProgress: x,
    getComfyUIReleases: M,
    deleteEnvironment: Z,
    // Workflow Management
    getWorkflows: F,
    getWorkflowDetails: G,
    resolveWorkflow: E,
    installWorkflowDeps: D,
    setModelImportance: A,
    // Model Management
    getEnvironmentModels: de,
    getWorkspaceModels: te,
    getModelDetails: Y,
    openFileLocation: ue,
    addModelSource: Q,
    removeModelSource: O,
    deleteModel: z,
    downloadModel: I,
    scanWorkspaceModels: me,
    getModelsDirectory: ee,
    setModelsDirectory: be,
    // Settings
    getConfig: Ie,
    updateConfig: Te,
    // Debug/Logs
    getEnvironmentLogs: Ae,
    getWorkspaceLogs: ce,
    getEnvironmentLogPath: ge,
    getWorkspaceLogPath: xe,
    openFile: se,
    // Node Management
    getNodes: ae,
    trackNodeAsDev: we,
    installNode: ze,
    updateNode: Ze,
    uninstallNode: et,
    // Git Remotes
    getRemotes: $e,
    addRemote: tt,
    removeRemote: Ye,
    updateRemoteUrl: je,
    fetchRemote: rt,
    getRemoteSyncStatus: _e,
    // Push/Pull
    getPullPreview: st,
    pullFromRemote: Je,
    getPushPreview: Le,
    pushToRemote: fe,
    validateMerge: K,
    // Environment Sync
    syncEnvironmentManually: Re,
    // Workflow Repair
    repairWorkflowModels: J,
    // Import Operations
    previewTarballImport: P,
    previewGitImport: Ge,
    validateEnvironmentName: V,
    executeImport: ne,
    executeGitImport: it,
    getImportProgress: ke,
    // First-Time Setup
    getSetupStatus: Xe,
    initializeWorkspace: St,
    getInitializeProgress: mt,
    validatePath: Tt,
    // Deploy Operations
    getDeploySummary: Wt,
    getDataCenters: vt,
    testRunPodConnection: Xt,
    getNetworkVolumes: Nt,
    getRunPodGpuTypes: Qt,
    deployToRunPod: Ot,
    getRunPodPods: Zt,
    terminateRunPodPod: ft,
    stopRunPodPod: Gt,
    startRunPodPod: es,
    getDeploymentStatus: ts,
    exportDeployPackage: jt,
    getStoredRunPodKey: ss,
    clearRunPodKey: At
  };
}
async function ns(t, c = {}, n = 5e3) {
  const i = new AbortController(), f = setTimeout(() => i.abort(), n);
  try {
    const v = await fetch(t, {
      ...c,
      signal: i.signal
    });
    return clearTimeout(f), v;
  } catch (v) {
    throw clearTimeout(f), v.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : v;
  }
}
function to() {
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
  async function i() {
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
  async function f() {
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
    getStatus: i,
    restart: f,
    kill: v
  };
}
const Tl = { class: "base-modal-header" }, Dl = {
  key: 0,
  class: "base-modal-title"
}, Ll = { class: "base-modal-body" }, zl = {
  key: 0,
  class: "base-modal-loading"
}, Ul = {
  key: 1,
  class: "base-modal-error"
}, Nl = {
  key: 0,
  class: "base-modal-footer"
}, Ol = /* @__PURE__ */ le({
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
    function v(u) {
      u.key === "Escape" && n.showCloseButton && i("close");
    }
    return We(() => {
      document.addEventListener("keydown", v), document.body.style.overflow = "hidden";
    }), Ps(() => {
      document.removeEventListener("keydown", v), document.body.style.overflow = "";
    }), (u, m) => (s(), S(Qe, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: f
      }, [
        e("div", {
          class: pe(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = Be(() => {
          }, ["stop"]))
        }, [
          e("div", Tl, [
            Me(u.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", Dl, a(t.title), 1)) : r("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: m[0] || (m[0] = (d) => u.$emit("close"))
            }, [...m[2] || (m[2] = [
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
          e("div", Ll, [
            t.loading ? (s(), o("div", zl, "Loading...")) : t.error ? (s(), o("div", Ul, a(t.error), 1)) : Me(u.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          u.$slots.footer ? (s(), o("div", Nl, [
            Me(u.$slots, "footer", {}, void 0, !0)
          ])) : r("", !0)
        ], 2)
      ])
    ]));
  }
}), lt = /* @__PURE__ */ re(Ol, [["__scopeId", "data-v-8dab1081"]]), Al = ["type", "disabled"], Bl = {
  key: 0,
  class: "spinner"
}, Fl = /* @__PURE__ */ le({
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
      class: pe(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", Bl)) : r("", !0),
      Me(c.$slots, "default", {}, void 0, !0)
    ], 10, Al));
  }
}), ye = /* @__PURE__ */ re(Fl, [["__scopeId", "data-v-f3452606"]]), Vl = {
  key: 0,
  class: "base-title-count"
}, Wl = /* @__PURE__ */ le({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, n) => (s(), S(Es(`h${t.level}`), {
      class: pe(["base-title", t.variant])
    }, {
      default: l(() => [
        Me(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Vl, "(" + a(t.count) + ")", 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), rs = /* @__PURE__ */ re(Wl, [["__scopeId", "data-v-5a01561d"]]), Gl = ["value", "disabled"], jl = {
  key: 0,
  value: "",
  disabled: ""
}, Hl = ["value"], Kl = {
  key: 0,
  class: "base-select-error"
}, ql = /* @__PURE__ */ le({
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
      class: pe(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: pe(["base-select", { error: !!t.error }]),
        onChange: f[0] || (f[0] = (v) => i.$emit("update:modelValue", v.target.value))
      }, [
        t.placeholder ? (s(), o("option", jl, a(t.placeholder), 1)) : r("", !0),
        (s(!0), o(W, null, ie(t.options, (v) => (s(), o("option", {
          key: c(v),
          value: c(v)
        }, a(n(v)), 9, Hl))), 128))
      ], 42, Gl),
      t.error ? (s(), o("span", Kl, a(t.error), 1)) : r("", !0)
    ], 2));
  }
}), Yl = /* @__PURE__ */ re(ql, [["__scopeId", "data-v-7436d745"]]), Jl = { class: "popover-header" }, Xl = { class: "popover-title" }, Ql = { class: "popover-content" }, Zl = {
  key: 0,
  class: "popover-actions"
}, ei = /* @__PURE__ */ le({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (s(), S(Qe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Pt({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = Be(() => {
          }, ["stop"]))
        }, [
          e("div", Jl, [
            e("h4", Xl, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Ql, [
            Me(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (s(), o("div", Zl, [
            Me(c.$slots, "actions", {}, void 0, !0)
          ])) : r("", !0)
        ], 4)
      ])) : r("", !0)
    ]));
  }
}), wt = /* @__PURE__ */ re(ei, [["__scopeId", "data-v-42815ace"]]), ti = { class: "detail-section" }, si = {
  key: 0,
  class: "empty-message"
}, oi = { class: "model-header" }, ni = { class: "model-name" }, ai = { class: "model-details" }, li = { class: "model-row" }, ii = { class: "model-row" }, ri = { class: "label" }, di = {
  key: 0,
  class: "model-row model-row-nodes"
}, ci = { class: "node-list" }, ui = ["onClick"], mi = {
  key: 1,
  class: "model-row"
}, vi = { class: "value" }, fi = {
  key: 2,
  class: "model-row"
}, pi = { class: "value error" }, gi = {
  key: 0,
  class: "model-actions"
}, hi = { class: "detail-section" }, yi = {
  key: 0,
  class: "empty-message"
}, wi = { class: "node-name" }, ki = {
  key: 0,
  class: "node-version"
}, bi = /* @__PURE__ */ le({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getWorkflowDetails: f, setModelImportance: v, openFileLocation: u } = He(), m = h(null), d = h(!1), p = h(null), w = h(!1), k = h({}), _ = h(!1), b = h(/* @__PURE__ */ new Set()), T = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function R(E) {
      switch (E) {
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
    function $(E) {
      switch (E) {
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
    function C(E) {
      if (!E.loaded_by || E.loaded_by.length === 0) return [];
      const D = E.hash || E.filename;
      return b.value.has(D) ? E.loaded_by : E.loaded_by.slice(0, 3);
    }
    function B(E) {
      return b.value.has(E);
    }
    function x(E) {
      b.value.has(E) ? b.value.delete(E) : b.value.add(E), b.value = new Set(b.value);
    }
    async function M() {
      d.value = !0, p.value = null;
      try {
        m.value = await f(n.workflowName);
      } catch (E) {
        p.value = E instanceof Error ? E.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function Z(E, D) {
      k.value[E] = D, w.value = !0;
    }
    async function F(E) {
      try {
        await u(E);
      } catch (D) {
        p.value = D instanceof Error ? D.message : "Failed to open file location";
      }
    }
    async function G() {
      if (!w.value) {
        i("close");
        return;
      }
      d.value = !0, p.value = null;
      try {
        for (const [E, D] of Object.entries(k.value))
          await v(n.workflowName, E, D);
        i("refresh"), i("close");
      } catch (E) {
        p.value = E instanceof Error ? E.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return We(M), (E, D) => (s(), o(W, null, [
      y(lt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: d.value,
        error: p.value || void 0,
        onClose: D[4] || (D[4] = (A) => i("close"))
      }, {
        body: l(() => [
          m.value ? (s(), o(W, { key: 0 }, [
            e("section", ti, [
              y(rs, { variant: "section" }, {
                default: l(() => [
                  g("MODELS USED (" + a(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (s(), o("div", si, " No models used in this workflow ")) : r("", !0),
              (s(!0), o(W, null, ie(m.value.models, (A) => {
                var de;
                return s(), o("div", {
                  key: A.hash || A.filename,
                  class: "model-card"
                }, [
                  e("div", oi, [
                    D[6] || (D[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", ni, a(A.filename), 1)
                  ]),
                  e("div", ai, [
                    e("div", li, [
                      D[7] || (D[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: pe(["value", R(A.status)])
                      }, a($(A.status)), 3)
                    ]),
                    e("div", ii, [
                      e("span", ri, [
                        D[8] || (D[8] = g(" Importance: ", -1)),
                        y(Zs, {
                          size: 14,
                          title: "About importance levels",
                          onClick: D[0] || (D[0] = (te) => _.value = !0)
                        })
                      ]),
                      y(Yl, {
                        "model-value": k.value[A.filename] || A.importance,
                        options: T,
                        "onUpdate:modelValue": (te) => Z(A.filename, te)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    A.loaded_by && A.loaded_by.length > 0 ? (s(), o("div", di, [
                      D[9] || (D[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", ci, [
                        (s(!0), o(W, null, ie(C(A), (te, Y) => (s(), o("div", {
                          key: `${te.node_id}-${Y}`,
                          class: "node-reference"
                        }, a(te.node_type) + " (Node #" + a(te.node_id) + ") ", 1))), 128)),
                        A.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (te) => x(A.hash || A.filename)
                        }, a(B(A.hash || A.filename) ? "▼ Show less" : `▶ View all (${A.loaded_by.length})`), 9, ui)) : r("", !0)
                      ])
                    ])) : r("", !0),
                    A.size_mb ? (s(), o("div", mi, [
                      D[10] || (D[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", vi, a(A.size_mb) + " MB", 1)
                    ])) : r("", !0),
                    A.has_category_mismatch ? (s(), o("div", fi, [
                      D[13] || (D[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", pi, [
                        D[11] || (D[11] = g(" In ", -1)),
                        e("code", null, a(A.actual_category) + "/", 1),
                        D[12] || (D[12] = g(" but loader needs ", -1)),
                        e("code", null, a((de = A.expected_categories) == null ? void 0 : de[0]) + "/", 1)
                      ])
                    ])) : r("", !0)
                  ]),
                  A.status !== "available" ? (s(), o("div", gi, [
                    A.status === "downloadable" ? (s(), S(ye, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: D[1] || (D[1] = (te) => i("resolve"))
                    }, {
                      default: l(() => [...D[14] || (D[14] = [
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    })) : A.status === "category_mismatch" && A.file_path ? (s(), S(ye, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => F(A.file_path)
                    }, {
                      default: l(() => [...D[15] || (D[15] = [
                        g(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : A.status !== "path_mismatch" ? (s(), S(ye, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: D[2] || (D[2] = (te) => i("resolve"))
                    }, {
                      default: l(() => [...D[16] || (D[16] = [
                        g(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : r("", !0)
                  ])) : r("", !0)
                ]);
              }), 128))
            ]),
            e("section", hi, [
              y(rs, { variant: "section" }, {
                default: l(() => [
                  g("NODES USED (" + a(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (s(), o("div", yi, " No custom nodes used in this workflow ")) : r("", !0),
              (s(!0), o(W, null, ie(m.value.nodes, (A) => (s(), o("div", {
                key: A.name,
                class: "node-item"
              }, [
                e("span", {
                  class: pe(["node-status", A.status === "installed" ? "installed" : "missing"])
                }, a(A.status === "installed" ? "✓" : "✕"), 3),
                e("span", wi, a(A.name), 1),
                A.version ? (s(), o("span", ki, "v" + a(A.version), 1)) : r("", !0)
              ]))), 128))
            ])
          ], 64)) : r("", !0)
        ]),
        footer: l(() => [
          y(ye, {
            variant: "secondary",
            onClick: D[3] || (D[3] = (A) => i("close"))
          }, {
            default: l(() => [...D[17] || (D[17] = [
              g(" Close ", -1)
            ])]),
            _: 1
          }),
          w.value ? (s(), S(ye, {
            key: 0,
            variant: "primary",
            onClick: G
          }, {
            default: l(() => [...D[18] || (D[18] = [
              g(" Save Changes ", -1)
            ])]),
            _: 1
          })) : r("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      y(wt, {
        show: _.value,
        title: "Model Importance Levels",
        onClose: D[5] || (D[5] = (A) => _.value = !1)
      }, {
        content: l(() => [...D[19] || (D[19] = [
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
}), _i = /* @__PURE__ */ re(bi, [["__scopeId", "data-v-668728e6"]]), De = ws({
  items: [],
  status: "idle"
});
let $t = null;
function so() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function ks(t) {
  return De.items.find((c) => c.id === t);
}
async function qt() {
  if (De.status === "downloading") return;
  const t = De.items.find((c) => c.status === "queued");
  if (!t) {
    De.status = "idle";
    return;
  }
  De.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await $i(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    De.status = "idle", qt();
  }
}
async function $i(t) {
  return new Promise((c, n) => {
    $t && ($t.close(), $t = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), f = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    $t = f;
    let v = Date.now(), u = 0, m = !1;
    f.onmessage = (d) => {
      try {
        const p = JSON.parse(d.data);
        switch (p.type) {
          case "progress":
            t.downloaded = p.downloaded || 0, t.size = p.total || t.size;
            const w = Date.now(), k = (w - v) / 1e3;
            if (k > 0.5) {
              const _ = t.downloaded - u;
              if (t.speed = _ / k, v = w, u = t.downloaded, t.speed > 0 && t.size > 0) {
                const b = t.size - t.downloaded;
                t.eta = b / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, f.close(), $t = null, c();
            break;
          case "error":
            m = !0, f.close(), $t = null, n(new Error(p.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, f.onerror = () => {
      f.close(), $t = null, m || n(new Error("Connection lost"));
    };
  });
}
async function Ci() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const c = await t.json();
    if (!c.pending_downloads || c.pending_downloads.length === 0) return;
    for (const n of c.pending_downloads) {
      if (De.items.some((f) => f.url === n.url && f.filename === n.filename))
        continue;
      const i = {
        id: so(),
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
      De.items.push(i);
    }
    console.log(`[ComfyGit] Loaded ${c.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function us() {
  function t($) {
    for (const C of $) {
      if (De.items.some(
        (M) => M.url === C.url && M.targetPath === C.targetPath && ["queued", "downloading", "paused", "completed"].includes(M.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${C.filename}`);
        continue;
      }
      const x = {
        id: so(),
        workflow: C.workflow,
        filename: C.filename,
        url: C.url,
        targetPath: C.targetPath,
        size: C.size || 0,
        type: C.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      De.items.push(x);
    }
    De.status === "idle" && qt();
  }
  async function c($) {
    const C = ks($);
    if (C) {
      if (C.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(C.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        $t && ($t.close(), $t = null), C.status = "failed", C.error = "Cancelled by user", De.status = "idle", qt();
      } else if (C.status === "queued") {
        const B = De.items.findIndex((x) => x.id === $);
        B >= 0 && De.items.splice(B, 1);
      }
    }
  }
  function n($) {
    const C = ks($);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, De.status === "idle" && qt());
  }
  function i($) {
    const C = ks($);
    !C || C.status !== "paused" || (C.status = "queued", De.status === "idle" && qt());
  }
  function f() {
    const $ = De.items.filter((C) => C.status === "paused");
    for (const C of $)
      C.status = "queued";
    De.status === "idle" && qt();
  }
  function v($) {
    const C = De.items.findIndex((B) => B.id === $);
    C >= 0 && ["completed", "failed", "paused"].includes(De.items[C].status) && De.items.splice(C, 1);
  }
  function u() {
    De.items = De.items.filter(($) => $.status !== "completed");
  }
  function m() {
    De.items = De.items.filter(($) => $.status !== "failed");
  }
  const d = U(
    () => De.items.find(($) => $.status === "downloading")
  ), p = U(
    () => De.items.filter(($) => $.status === "queued")
  ), w = U(
    () => De.items.filter(($) => $.status === "completed")
  ), k = U(
    () => De.items.filter(($) => $.status === "failed")
  ), _ = U(
    () => De.items.filter(($) => $.status === "paused")
  ), b = U(() => De.items.length > 0), T = U(
    () => De.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), R = U(
    () => De.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Co(De),
    // Computed
    currentDownload: d,
    queuedItems: p,
    completedItems: w,
    failedItems: k,
    pausedItems: _,
    hasItems: b,
    activeCount: T,
    hasPaused: R,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: i,
    resumeAllPaused: f,
    removeItem: v,
    clearCompleted: u,
    clearFailed: m,
    loadPendingDownloads: Ci
  };
}
function oo() {
  const t = h(null), c = h(null), n = h([]), i = h([]), f = h(!1), v = h(null);
  async function u(B, x) {
    var Z;
    if (!((Z = window.app) != null && Z.api))
      throw new Error("ComfyUI API not available");
    const M = await window.app.api.fetchApi(B, x);
    if (!M.ok) {
      const F = await M.json().catch(() => ({})), G = F.error || F.message || `Request failed: ${M.status}`;
      throw new Error(G);
    }
    return M.json();
  }
  async function m(B) {
    f.value = !0, v.value = null;
    try {
      let x;
      return os() || (x = await u(
        `/v2/comfygit/workflow/${B}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = x, x;
    } catch (x) {
      const M = x instanceof Error ? x.message : "Unknown error occurred";
      throw v.value = M, x;
    } finally {
      f.value = !1;
    }
  }
  async function d(B, x, M, Z) {
    f.value = !0, v.value = null;
    try {
      let F;
      if (!os()) {
        const G = Object.fromEntries(x), E = Object.fromEntries(M), D = Z ? Array.from(Z) : [];
        F = await u(
          `/v2/comfygit/workflow/${B}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: G,
              model_choices: E,
              skipped_packages: D
            })
          }
        );
      }
      return c.value = F, F;
    } catch (F) {
      const G = F instanceof Error ? F.message : "Unknown error occurred";
      throw v.value = G, F;
    } finally {
      f.value = !1;
    }
  }
  async function p(B, x = 10) {
    f.value = !0, v.value = null;
    try {
      let M;
      return os() || (M = await u(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: B, limit: x })
        }
      )), n.value = M.results, M.results;
    } catch (M) {
      const Z = M instanceof Error ? M.message : "Unknown error occurred";
      throw v.value = Z, M;
    } finally {
      f.value = !1;
    }
  }
  async function w(B, x = 10) {
    f.value = !0, v.value = null;
    try {
      let M;
      return os() || (M = await u(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: B, limit: x })
        }
      )), i.value = M.results, M.results;
    } catch (M) {
      const Z = M instanceof Error ? M.message : "Unknown error occurred";
      throw v.value = Z, M;
    } finally {
      f.value = !1;
    }
  }
  const k = ws({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function _() {
    k.phase = "idle", k.currentFile = void 0, k.currentFileIndex = void 0, k.totalFiles = void 0, k.bytesDownloaded = void 0, k.bytesTotal = void 0, k.completedFiles = [], k.nodesToInstall = [], k.nodesInstalled = [], k.installError = void 0, k.needsRestart = void 0, k.error = void 0, k.nodeInstallProgress = void 0;
  }
  async function b(B) {
    k.phase = "installing", k.nodesInstalled = [], k.installError = void 0, k.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return os(), await T(B);
    } catch (x) {
      const M = x instanceof Error ? x.message : "Failed to install nodes";
      throw k.installError = M, x;
    }
  }
  async function T(B) {
    var M;
    const x = await u(
      `/v2/comfygit/workflow/${B}/install`,
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
      const Z = new Map(((M = x.failed) == null ? void 0 : M.map((F) => [F.node_id, F.error])) || []);
      for (let F = 0; F < k.nodesToInstall.length; F++) {
        const G = k.nodesToInstall[F], E = Z.get(G);
        k.nodeInstallProgress.completedNodes.push({
          node_id: G,
          success: !E,
          error: E
        });
      }
    }
    return k.nodesInstalled = x.nodes_installed, k.needsRestart = x.nodes_installed.length > 0, x.failed && x.failed.length > 0 && (k.installError = `${x.failed.length} package(s) failed to install`), x;
  }
  async function R(B, x, M) {
    _(), k.phase = "resolving", v.value = null;
    const Z = Object.fromEntries(x), F = Object.fromEntries(M);
    try {
      const G = await fetch(`/v2/comfygit/workflow/${B}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: Z,
          model_choices: F
        })
      });
      if (!G.ok)
        throw new Error(`Request failed: ${G.status}`);
      if (!G.body)
        throw new Error("No response body");
      const E = G.body.getReader(), D = new TextDecoder();
      let A = "";
      for (; ; ) {
        const { done: de, value: te } = await E.read();
        if (de) break;
        A += D.decode(te, { stream: !0 });
        const Y = A.split(`

`);
        A = Y.pop() || "";
        for (const ue of Y) {
          if (!ue.trim()) continue;
          const Q = ue.split(`
`);
          let O = "", z = "";
          for (const I of Q)
            I.startsWith("event: ") ? O = I.slice(7) : I.startsWith("data: ") && (z = I.slice(6));
          if (z)
            try {
              const I = JSON.parse(z);
              $(O, I);
            } catch (I) {
              console.warn("Failed to parse SSE event:", I);
            }
        }
      }
    } catch (G) {
      const E = G instanceof Error ? G.message : "Unknown error occurred";
      throw v.value = E, k.error = E, k.phase = "error", G;
    }
  }
  function $(B, x) {
    switch (B) {
      case "batch_start":
        k.phase = "downloading", k.totalFiles = x.total;
        break;
      case "file_start":
        k.currentFile = x.filename, k.currentFileIndex = x.index, k.bytesDownloaded = 0, k.bytesTotal = void 0;
        break;
      case "file_progress":
        k.bytesDownloaded = x.downloaded, k.bytesTotal = x.total;
        break;
      case "file_complete":
        k.completedFiles.push({
          filename: x.filename,
          success: x.success,
          error: x.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        k.nodesToInstall = x.nodes_to_install || [], x.download_results && (k.completedFiles = x.download_results), k.phase = "complete";
        break;
      case "error":
        k.error = x.message, k.phase = "error", v.value = x.message;
        break;
    }
  }
  function C(B, x) {
    const { addToQueue: M } = us(), Z = x.filter((F) => F.url && F.target_path).map((F) => ({
      workflow: B,
      filename: F.filename,
      url: F.url,
      targetPath: F.target_path,
      size: F.size || 0,
      type: "model"
    }));
    return Z.length > 0 && M(Z), Z.length;
  }
  return {
    // State
    result: t,
    appliedResult: c,
    searchResults: n,
    modelSearchResults: i,
    isLoading: f,
    error: v,
    progress: k,
    // Methods
    analyzeWorkflow: m,
    applyResolution: d,
    applyResolutionWithProgress: R,
    installNodes: b,
    searchNodes: p,
    searchModels: w,
    resetProgress: _,
    queueModelDownloads: C
  };
}
const xi = { class: "resolution-stepper" }, Si = { class: "stepper-header" }, Ii = ["onClick"], Ei = {
  key: 0,
  class: "step-icon"
}, Pi = {
  key: 1,
  class: "step-number"
}, Ri = { class: "step-label" }, Mi = {
  key: 0,
  class: "step-connector"
}, Ti = { class: "stepper-content" }, Di = /* @__PURE__ */ le({
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
    function f(p) {
      var w;
      if ((w = n.stepStats) != null && w[p]) {
        const k = n.stepStats[p];
        return k.total > 0 && k.resolved === k.total;
      }
      return n.completedSteps.includes(p);
    }
    function v(p) {
      var w;
      if ((w = n.stepStats) != null && w[p]) {
        const k = n.stepStats[p];
        return k.resolved > 0 && k.resolved < k.total;
      }
      return !1;
    }
    function u(p) {
      return f(p) ? "state-complete" : v(p) ? "state-partial" : "state-pending";
    }
    function m(p) {
      return !1;
    }
    function d(p) {
      i("step-change", p);
    }
    return (p, w) => (s(), o("div", xi, [
      e("div", Si, [
        (s(!0), o(W, null, ie(t.steps, (k, _) => (s(), o("div", {
          key: k.id,
          class: pe(["step", {
            active: t.currentStep === k.id,
            completed: f(k.id),
            "in-progress": v(k.id),
            disabled: m(k.id)
          }]),
          onClick: (b) => d(k.id)
        }, [
          e("div", {
            class: pe(["step-indicator", u(k.id)])
          }, [
            f(k.id) ? (s(), o("span", Ei, "✓")) : (s(), o("span", Pi, a(_ + 1), 1))
          ], 2),
          e("div", Ri, a(k.label), 1),
          _ < t.steps.length - 1 ? (s(), o("div", Mi)) : r("", !0)
        ], 10, Ii))), 128))
      ]),
      e("div", Ti, [
        Me(p.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Li = /* @__PURE__ */ re(Di, [["__scopeId", "data-v-2a7b3af8"]]), zi = /* @__PURE__ */ le({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = U(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), i = U(() => `confidence-${n.value}`), f = U(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (v, u) => (s(), o("span", {
      class: pe(["confidence-badge", i.value, t.size])
    }, a(f.value), 3));
  }
}), hs = /* @__PURE__ */ re(zi, [["__scopeId", "data-v-17ec4b80"]]), Ui = { class: "node-info" }, Ni = { class: "node-info-text" }, Oi = { class: "item-body" }, Ai = {
  key: 0,
  class: "resolved-state"
}, Bi = {
  key: 1,
  class: "multiple-options"
}, Fi = { class: "options-list" }, Vi = ["onClick"], Wi = ["name", "value", "checked", "onChange"], Gi = { class: "option-content" }, ji = { class: "option-header" }, Hi = { class: "option-package-id" }, Ki = {
  key: 0,
  class: "option-title"
}, qi = { class: "option-meta" }, Yi = {
  key: 0,
  class: "installed-badge"
}, Ji = { class: "action-buttons" }, Xi = {
  key: 2,
  class: "unresolved"
}, Qi = {
  key: 0,
  class: "searching-state"
}, Zi = { class: "options-list" }, er = ["onClick"], tr = ["name", "value"], sr = { class: "option-content" }, or = { class: "option-header" }, nr = { class: "option-package-id" }, ar = {
  key: 0,
  class: "option-description"
}, lr = { class: "option-meta" }, ir = {
  key: 0,
  class: "installed-badge"
}, rr = {
  key: 2,
  class: "unresolved-message"
}, dr = { class: "action-buttons" }, cr = /* @__PURE__ */ le({
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
    function f(d, p = 80) {
      return d.length <= p ? d : d.slice(0, p - 3) + "...";
    }
    const v = U(() => !!n.choice);
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
    function m(d) {
      i("option-selected", d);
    }
    return (d, p) => (s(), o("div", {
      class: pe(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: v.value }])
    }, [
      e("div", Ui, [
        e("span", Ni, [
          p[7] || (p[7] = g("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: pe(["status-badge", u.value])
        }, a(t.statusLabel), 3)) : r("", !0)
      ]),
      e("div", Oi, [
        v.value ? (s(), o("div", Ai, [
          y(ye, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (w) => i("clear-choice"))
          }, {
            default: l(() => [...p[8] || (p[8] = [
              g(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Bi, [
          p[12] || (p[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Fi, [
            (s(!0), o(W, null, ie(t.options, (w, k) => (s(), o("label", {
              key: w.package_id,
              class: pe(["option-card", { selected: t.selectedOptionIndex === k }]),
              onClick: (_) => m(k)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: k,
                checked: t.selectedOptionIndex === k,
                onChange: (_) => m(k)
              }, null, 40, Wi),
              e("div", Gi, [
                e("div", ji, [
                  e("span", Hi, a(w.package_id), 1),
                  y(hs, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                w.title && w.title !== w.package_id ? (s(), o("div", Ki, a(w.title), 1)) : r("", !0),
                e("div", qi, [
                  w.is_installed ? (s(), o("span", Yi, "Already Installed")) : r("", !0)
                ])
              ])
            ], 10, Vi))), 128))
          ]),
          e("div", Ji, [
            y(ye, {
              variant: "secondary",
              size: "sm",
              onClick: p[1] || (p[1] = (w) => i("search"))
            }, {
              default: l(() => [...p[9] || (p[9] = [
                g(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            y(ye, {
              variant: "secondary",
              size: "sm",
              onClick: p[2] || (p[2] = (w) => i("manual-entry"))
            }, {
              default: l(() => [...p[10] || (p[10] = [
                g(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            y(ye, {
              variant: "secondary",
              size: "sm",
              onClick: p[3] || (p[3] = (w) => i("mark-optional"))
            }, {
              default: l(() => [...p[11] || (p[11] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Xi, [
          t.isSearching ? (s(), o("div", Qi, [...p[13] || (p[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(W, { key: 1 }, [
            p[14] || (p[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", Zi, [
              (s(!0), o(W, null, ie(t.searchResults.slice(0, 5), (w, k) => (s(), o("label", {
                key: w.package_id,
                class: "option-card",
                onClick: (_) => i("search-result-selected", w)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: k
                }, null, 8, tr),
                e("div", sr, [
                  e("div", or, [
                    e("span", nr, a(w.package_id), 1),
                    y(hs, {
                      confidence: w.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  w.description ? (s(), o("div", ar, a(f(w.description)), 1)) : r("", !0),
                  e("div", lr, [
                    w.is_installed ? (s(), o("span", ir, "Already Installed")) : r("", !0)
                  ])
                ])
              ], 8, er))), 128))
            ])
          ], 64)) : (s(), o("div", rr, [...p[15] || (p[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", dr, [
            y(ye, {
              variant: "secondary",
              size: "sm",
              onClick: p[4] || (p[4] = (w) => i("search"))
            }, {
              default: l(() => {
                var w;
                return [
                  g(a((w = t.searchResults) != null && w.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            y(ye, {
              variant: "secondary",
              size: "sm",
              onClick: p[5] || (p[5] = (w) => i("manual-entry"))
            }, {
              default: l(() => [...p[16] || (p[16] = [
                g(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            y(ye, {
              variant: "secondary",
              size: "sm",
              onClick: p[6] || (p[6] = (w) => i("mark-optional"))
            }, {
              default: l(() => [...p[17] || (p[17] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), ur = /* @__PURE__ */ re(cr, [["__scopeId", "data-v-c2997d1d"]]), mr = { class: "item-navigator" }, vr = { class: "nav-item-info" }, fr = ["title"], pr = { class: "nav-controls" }, gr = { class: "nav-arrows" }, hr = ["disabled"], yr = ["disabled"], wr = { class: "nav-position" }, kr = /* @__PURE__ */ le({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const n = c;
    return (i, f) => (s(), o("div", mr, [
      e("div", vr, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, fr)
      ]),
      e("div", pr, [
        e("div", gr, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: f[0] || (f[0] = (v) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, hr),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: f[1] || (f[1] = (v) => n("next")),
            title: "Next item"
          }, " → ", 8, yr)
        ]),
        e("span", wr, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), no = /* @__PURE__ */ re(kr, [["__scopeId", "data-v-74af7920"]]), br = ["type", "value", "placeholder", "disabled"], _r = {
  key: 0,
  class: "base-input-error"
}, $r = /* @__PURE__ */ le({
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
      class: pe(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: pe(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          n[1] || (n[1] = Ct((i) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = Ct((i) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, br),
      t.error ? (s(), o("span", _r, a(t.error), 1)) : r("", !0)
    ], 2));
  }
}), ht = /* @__PURE__ */ re($r, [["__scopeId", "data-v-9ba02cdc"]]), Cr = { class: "node-resolution-step" }, xr = {
  key: 0,
  class: "auto-resolved-section"
}, Sr = { class: "section-header" }, Ir = { class: "stat-badge" }, Er = { class: "resolved-packages-list" }, Pr = { class: "package-info" }, Rr = { class: "package-id" }, Mr = { class: "node-count" }, Tr = { class: "package-actions" }, Dr = {
  key: 0,
  class: "status-badge install"
}, Lr = {
  key: 1,
  class: "status-badge skip"
}, zr = ["onClick"], Ur = {
  key: 1,
  class: "section-divider"
}, Nr = { class: "step-header" }, Or = { class: "stat-badge" }, Ar = {
  key: 1,
  class: "step-body"
}, Br = {
  key: 3,
  class: "empty-state"
}, Fr = { class: "node-modal-body" }, Vr = { class: "node-search-results-container" }, Wr = {
  key: 0,
  class: "node-search-results"
}, Gr = ["onClick"], jr = { class: "node-result-header" }, Hr = { class: "node-result-package-id" }, Kr = {
  key: 0,
  class: "node-result-description"
}, qr = {
  key: 1,
  class: "node-empty-state"
}, Yr = {
  key: 2,
  class: "node-empty-state"
}, Jr = {
  key: 3,
  class: "node-empty-state"
}, Xr = { class: "node-manual-entry-modal" }, Qr = { class: "node-modal-body" }, Zr = { class: "node-modal-actions" }, ed = /* @__PURE__ */ le({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: c }) {
    const n = t, i = c, { searchNodes: f } = oo(), v = h(0), u = h(!1), m = h(!1), d = h(""), p = h(""), w = h([]), k = h(!1), _ = h(/* @__PURE__ */ new Map()), b = h(/* @__PURE__ */ new Set()), T = h(!1);
    function R() {
      T.value && z(), T.value = !1;
    }
    const $ = U(() => n.nodes[v.value]), C = U(() => n.nodes.filter((ce) => n.nodeChoices.has(ce.node_type)).length), B = U(() => $.value ? _.value.get($.value.node_type) || [] : []), x = U(() => $.value ? b.value.has($.value.node_type) : !1);
    xt($, async (ce) => {
      var ge;
      ce && ((ge = ce.options) != null && ge.length || _.value.has(ce.node_type) || b.value.has(ce.node_type) || n.nodeChoices.has(ce.node_type) || await M(ce.node_type));
    }, { immediate: !0 });
    async function M(ce) {
      b.value.add(ce);
      try {
        const ge = await f(ce, 5);
        _.value.set(ce, ge);
      } catch {
        _.value.set(ce, []);
      } finally {
        b.value.delete(ce);
      }
    }
    const Z = U(() => n.autoResolvedPackages.filter((ce) => !n.skippedPackages.has(ce.package_id)).length);
    function F(ce) {
      return n.skippedPackages.has(ce);
    }
    function G(ce) {
      i("package-skip", ce);
    }
    const E = U(() => {
      var ge;
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
      return (ge = $.value.options) != null && ge.length ? "ambiguous" : "not-found";
    }), D = U(() => {
      var ge;
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
      return (ge = $.value.options) != null && ge.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function A(ce) {
      ce >= 0 && ce < n.nodes.length && (v.value = ce);
    }
    function de() {
      $.value && i("mark-optional", $.value.node_type);
    }
    function te() {
      $.value && i("skip", $.value.node_type);
    }
    function Y(ce) {
      $.value && i("option-selected", $.value.node_type, ce);
    }
    function ue() {
      $.value && i("clear-choice", $.value.node_type);
    }
    function Q() {
      $.value && (d.value = $.value.node_type, w.value = B.value, u.value = !0, be(d.value));
    }
    function O() {
      p.value = "", m.value = !0;
    }
    function z() {
      u.value = !1, d.value = "", w.value = [];
    }
    function I() {
      m.value = !1, p.value = "";
    }
    let me = null;
    function ee() {
      me && clearTimeout(me), me = setTimeout(() => {
        be(d.value);
      }, 300);
    }
    async function be(ce) {
      if (!ce.trim()) {
        w.value = [];
        return;
      }
      k.value = !0;
      try {
        w.value = await f(ce, 10);
      } catch {
        w.value = [];
      } finally {
        k.value = !1;
      }
    }
    function Ie(ce) {
      $.value && (i("manual-entry", $.value.node_type, ce.package_id), z());
    }
    function Te(ce) {
      $.value && i("manual-entry", $.value.node_type, ce.package_id);
    }
    function Ae() {
      !$.value || !p.value.trim() || (i("manual-entry", $.value.node_type, p.value.trim()), I());
    }
    return (ce, ge) => {
      var xe, se;
      return s(), o("div", Cr, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", xr, [
          e("div", Sr, [
            ge[6] || (ge[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", Ir, a(Z.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", Er, [
            (s(!0), o(W, null, ie(t.autoResolvedPackages, (ae) => (s(), o("div", {
              key: ae.package_id,
              class: "resolved-package-item"
            }, [
              e("div", Pr, [
                e("code", Rr, a(ae.package_id), 1),
                e("span", Mr, a(ae.node_types_count) + " node type" + a(ae.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", Tr, [
                F(ae.package_id) ? (s(), o("span", Lr, " SKIPPED ")) : (s(), o("span", Dr, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (we) => G(ae.package_id)
                }, a(F(ae.package_id) ? "Include" : "Skip"), 9, zr)
              ])
            ]))), 128))
          ])
        ])) : r("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", Ur)) : r("", !0),
        t.nodes.length > 0 ? (s(), o(W, { key: 2 }, [
          e("div", Nr, [
            ge[7] || (ge[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", Or, a(C.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          $.value ? (s(), S(no, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": v.value,
            "total-items": t.nodes.length,
            onPrev: ge[0] || (ge[0] = (ae) => A(v.value - 1)),
            onNext: ge[1] || (ge[1] = (ae) => A(v.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
          $.value ? (s(), o("div", Ar, [
            y(ur, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((xe = $.value.options) != null && xe.length),
              options: $.value.options,
              choice: (se = t.nodeChoices) == null ? void 0 : se.get($.value.node_type),
              status: E.value,
              "status-label": D.value,
              "search-results": B.value,
              "is-searching": x.value,
              onMarkOptional: de,
              onSkip: te,
              onManualEntry: O,
              onSearch: Q,
              onOptionSelected: Y,
              onClearChoice: ue,
              onSearchResultSelected: Te
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : r("", !0)
        ], 64)) : r("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", Br, [...ge[8] || (ge[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : r("", !0),
        (s(), S(Qe, { to: "body" }, [
          u.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ge[4] || (ge[4] = Be((ae) => T.value = !0, ["self"])),
            onMouseup: Be(R, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: ge[3] || (ge[3] = (ae) => T.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                ge[9] || (ge[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: z
                }, "✕")
              ]),
              e("div", Fr, [
                y(ht, {
                  modelValue: d.value,
                  "onUpdate:modelValue": ge[2] || (ge[2] = (ae) => d.value = ae),
                  placeholder: "Search by node type, package name...",
                  onInput: ee
                }, null, 8, ["modelValue"]),
                e("div", Vr, [
                  w.value.length > 0 ? (s(), o("div", Wr, [
                    (s(!0), o(W, null, ie(w.value, (ae) => (s(), o("div", {
                      key: ae.package_id,
                      class: "node-search-result-item",
                      onClick: (we) => Ie(ae)
                    }, [
                      e("div", jr, [
                        e("code", Hr, a(ae.package_id), 1),
                        ae.match_confidence ? (s(), S(hs, {
                          key: 0,
                          confidence: ae.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : r("", !0)
                      ]),
                      ae.description ? (s(), o("div", Kr, a(ae.description), 1)) : r("", !0)
                    ], 8, Gr))), 128))
                  ])) : k.value ? (s(), o("div", qr, "Searching...")) : d.value ? (s(), o("div", Yr, 'No packages found matching "' + a(d.value) + '"', 1)) : (s(), o("div", Jr, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : r("", !0)
        ])),
        (s(), S(Qe, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Be(I, ["self"])
          }, [
            e("div", Xr, [
              e("div", { class: "node-modal-header" }, [
                ge[10] || (ge[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: I
                }, "✕")
              ]),
              e("div", Qr, [
                y(ht, {
                  modelValue: p.value,
                  "onUpdate:modelValue": ge[5] || (ge[5] = (ae) => p.value = ae),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Zr, [
                  y(ye, {
                    variant: "secondary",
                    onClick: I
                  }, {
                    default: l(() => [...ge[11] || (ge[11] = [
                      g("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  y(ye, {
                    variant: "primary",
                    disabled: !p.value.trim(),
                    onClick: Ae
                  }, {
                    default: l(() => [...ge[12] || (ge[12] = [
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
}), td = /* @__PURE__ */ re(ed, [["__scopeId", "data-v-281581bc"]]), sd = { class: "node-info" }, od = { class: "node-info-text" }, nd = { class: "item-body" }, ad = {
  key: 0,
  class: "resolved-state"
}, ld = {
  key: 1,
  class: "multiple-options"
}, id = { class: "options-list" }, rd = ["onClick"], dd = ["name", "value", "checked", "onChange"], cd = { class: "option-content" }, ud = { class: "option-header" }, md = { class: "option-filename" }, vd = { class: "option-meta" }, fd = { class: "option-size" }, pd = { class: "option-category" }, gd = { class: "option-path" }, hd = { class: "action-buttons" }, yd = {
  key: 2,
  class: "unresolved"
}, wd = { class: "action-buttons" }, kd = /* @__PURE__ */ le({
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
      var d, p;
      return ((p = (d = n.choice) == null ? void 0 : d.selected_model) == null ? void 0 : p.filename) || "selected";
    });
    const v = U(() => {
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
    function m(d) {
      if (!d) return "Unknown";
      const p = d / (1024 * 1024 * 1024);
      return p >= 1 ? `${p.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, p) => (s(), o("div", {
      class: pe(["model-resolution-item", { resolved: f.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", sd, [
        e("span", od, [
          p[7] || (p[7] = g("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: pe(["status-badge", v.value])
        }, a(t.statusLabel), 3)) : r("", !0)
      ]),
      e("div", nd, [
        f.value ? (s(), o("div", ad, [
          y(ye, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (w) => i("clear-choice"))
          }, {
            default: l(() => [...p[8] || (p[8] = [
              g(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", ld, [
          p[12] || (p[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", id, [
            (s(!0), o(W, null, ie(t.options, (w, k) => (s(), o("label", {
              key: w.model.hash,
              class: pe(["option-card", { selected: t.selectedOptionIndex === k }]),
              onClick: (_) => u(k)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: k,
                checked: t.selectedOptionIndex === k,
                onChange: (_) => u(k)
              }, null, 40, dd),
              e("div", cd, [
                e("div", ud, [
                  e("span", md, a(w.model.filename), 1),
                  y(hs, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", vd, [
                  e("span", fd, a(m(w.model.size)), 1),
                  e("span", pd, a(w.model.category), 1)
                ]),
                e("div", gd, a(w.model.relative_path), 1)
              ])
            ], 10, rd))), 128))
          ]),
          e("div", hd, [
            y(ye, {
              variant: "ghost",
              size: "sm",
              onClick: p[1] || (p[1] = (w) => i("search"))
            }, {
              default: l(() => [...p[9] || (p[9] = [
                g(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            y(ye, {
              variant: "ghost",
              size: "sm",
              onClick: p[2] || (p[2] = (w) => i("download-url"))
            }, {
              default: l(() => [...p[10] || (p[10] = [
                g(" Download URL ", -1)
              ])]),
              _: 1
            }),
            y(ye, {
              variant: "secondary",
              size: "sm",
              onClick: p[3] || (p[3] = (w) => i("mark-optional"))
            }, {
              default: l(() => [...p[11] || (p[11] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", yd, [
          p[16] || (p[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", wd, [
            y(ye, {
              variant: "primary",
              size: "sm",
              onClick: p[4] || (p[4] = (w) => i("search"))
            }, {
              default: l(() => [...p[13] || (p[13] = [
                g(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            y(ye, {
              variant: "secondary",
              size: "sm",
              onClick: p[5] || (p[5] = (w) => i("download-url"))
            }, {
              default: l(() => [...p[14] || (p[14] = [
                g(" Download URL ", -1)
              ])]),
              _: 1
            }),
            y(ye, {
              variant: "secondary",
              size: "sm",
              onClick: p[6] || (p[6] = (w) => i("mark-optional"))
            }, {
              default: l(() => [...p[15] || (p[15] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), bd = /* @__PURE__ */ re(kd, [["__scopeId", "data-v-8a82fefa"]]), _d = { class: "model-resolution-step" }, $d = { class: "step-header" }, Cd = { class: "step-info" }, xd = { class: "step-title" }, Sd = { class: "step-description" }, Id = { class: "stat-badge" }, Ed = {
  key: 1,
  class: "step-body"
}, Pd = {
  key: 2,
  class: "empty-state"
}, Rd = { class: "model-search-modal" }, Md = { class: "model-modal-body" }, Td = {
  key: 0,
  class: "model-search-results"
}, Dd = ["onClick"], Ld = { class: "model-result-header" }, zd = { class: "model-result-filename" }, Ud = { class: "model-result-meta" }, Nd = { class: "model-result-category" }, Od = { class: "model-result-size" }, Ad = {
  key: 0,
  class: "model-result-path"
}, Bd = {
  key: 1,
  class: "model-no-results"
}, Fd = {
  key: 2,
  class: "model-searching"
}, Vd = { class: "model-download-url-modal" }, Wd = { class: "model-modal-body" }, Gd = { class: "model-input-group" }, jd = { class: "model-input-group" }, Hd = { class: "model-modal-actions" }, Kd = /* @__PURE__ */ le({
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
    function i(z) {
      var I;
      return z && ((I = n[z]) == null ? void 0 : I[0]) || null;
    }
    const f = t, v = c, u = h(0), m = h(!1), d = h(!1), p = h(""), w = h(""), k = h(""), _ = h([]), b = h(!1), T = U(() => f.models[u.value]), R = U(() => f.models.some((z) => z.is_download_intent)), $ = U(() => f.models.filter(
      (z) => f.modelChoices.has(z.filename) || z.is_download_intent
    ).length), C = U(() => {
      var I;
      if (!T.value) return "";
      const z = i((I = T.value.reference) == null ? void 0 : I.node_type);
      return z ? `${z}/${T.value.filename}` : "";
    }), B = U(() => {
      var I;
      if (!T.value) return "not-found";
      const z = f.modelChoices.get(T.value.filename);
      if (z)
        switch (z.action) {
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
      return T.value.is_download_intent ? "download" : (I = T.value.options) != null && I.length ? "ambiguous" : "not-found";
    }), x = U(() => {
      var I, me;
      if (!T.value) return;
      const z = f.modelChoices.get(T.value.filename);
      if (z)
        switch (z.action) {
          case "select":
            return (I = z.selected_model) != null && I.filename ? `→ ${z.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return T.value.is_download_intent ? "Pending Download" : (me = T.value.options) != null && me.length ? `${T.value.options.length} matches` : "Not Found";
    });
    function M(z) {
      z >= 0 && z < f.models.length && (u.value = z);
    }
    function Z() {
      T.value && v("mark-optional", T.value.filename);
    }
    function F() {
      T.value && v("skip", T.value.filename);
    }
    function G(z) {
      T.value && v("option-selected", T.value.filename, z);
    }
    function E() {
      T.value && v("clear-choice", T.value.filename);
    }
    function D() {
      T.value && (p.value = T.value.filename, m.value = !0);
    }
    function A() {
      T.value && (w.value = T.value.download_source || "", k.value = T.value.target_path || C.value, d.value = !0);
    }
    function de() {
      m.value = !1, p.value = "", _.value = [];
    }
    function te() {
      d.value = !1, w.value = "", k.value = "";
    }
    function Y() {
      b.value = !0, setTimeout(() => {
        b.value = !1;
      }, 300);
    }
    function ue(z) {
      T.value && de();
    }
    function Q() {
      !T.value || !w.value.trim() || (v("download-url", T.value.filename, w.value.trim(), k.value.trim() || void 0), te());
    }
    function O(z) {
      if (!z) return "Unknown";
      const I = z / (1024 * 1024 * 1024);
      return I >= 1 ? `${I.toFixed(2)} GB` : `${(z / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (z, I) => {
      var me, ee, be;
      return s(), o("div", _d, [
        e("div", $d, [
          e("div", Cd, [
            e("h3", xd, a(R.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Sd, a(R.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Id, a($.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        T.value ? (s(), S(no, {
          key: 0,
          "item-name": T.value.filename,
          "current-index": u.value,
          "total-items": t.models.length,
          onPrev: I[0] || (I[0] = (Ie) => M(u.value - 1)),
          onNext: I[1] || (I[1] = (Ie) => M(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
        T.value ? (s(), o("div", Ed, [
          y(bd, {
            filename: T.value.filename,
            "node-type": ((me = T.value.reference) == null ? void 0 : me.node_type) || "Unknown",
            "has-multiple-options": !!((ee = T.value.options) != null && ee.length),
            options: T.value.options,
            choice: (be = t.modelChoices) == null ? void 0 : be.get(T.value.filename),
            status: B.value,
            "status-label": x.value,
            onMarkOptional: Z,
            onSkip: F,
            onDownloadUrl: A,
            onSearch: D,
            onOptionSelected: G,
            onClearChoice: E
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", Pd, [...I[5] || (I[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), S(Qe, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Be(de, ["self"])
          }, [
            e("div", Rd, [
              e("div", { class: "model-modal-header" }, [
                I[6] || (I[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: de
                }, "✕")
              ]),
              e("div", Md, [
                y(ht, {
                  modelValue: p.value,
                  "onUpdate:modelValue": I[2] || (I[2] = (Ie) => p.value = Ie),
                  placeholder: "Search by filename, category...",
                  onInput: Y
                }, null, 8, ["modelValue"]),
                _.value.length > 0 ? (s(), o("div", Td, [
                  (s(!0), o(W, null, ie(_.value, (Ie) => (s(), o("div", {
                    key: Ie.hash,
                    class: "model-search-result-item",
                    onClick: (Te) => ue()
                  }, [
                    e("div", Ld, [
                      e("code", zd, a(Ie.filename), 1)
                    ]),
                    e("div", Ud, [
                      e("span", Nd, a(Ie.category), 1),
                      e("span", Od, a(O(Ie.size)), 1)
                    ]),
                    Ie.relative_path ? (s(), o("div", Ad, a(Ie.relative_path), 1)) : r("", !0)
                  ], 8, Dd))), 128))
                ])) : p.value && !b.value ? (s(), o("div", Bd, ' No models found matching "' + a(p.value) + '" ', 1)) : r("", !0),
                b.value ? (s(), o("div", Fd, "Searching...")) : r("", !0)
              ])
            ])
          ])) : r("", !0)
        ])),
        (s(), S(Qe, { to: "body" }, [
          d.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Be(te, ["self"])
          }, [
            e("div", Vd, [
              e("div", { class: "model-modal-header" }, [
                I[7] || (I[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: te
                }, "✕")
              ]),
              e("div", Wd, [
                e("div", Gd, [
                  I[8] || (I[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  y(ht, {
                    modelValue: w.value,
                    "onUpdate:modelValue": I[3] || (I[3] = (Ie) => w.value = Ie),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", jd, [
                  I[9] || (I[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  y(ht, {
                    modelValue: k.value,
                    "onUpdate:modelValue": I[4] || (I[4] = (Ie) => k.value = Ie),
                    placeholder: C.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", Hd, [
                  y(ye, {
                    variant: "secondary",
                    onClick: te
                  }, {
                    default: l(() => [...I[10] || (I[10] = [
                      g("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  y(ye, {
                    variant: "primary",
                    disabled: !w.value.trim() || !k.value.trim(),
                    onClick: Q
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
}), qd = /* @__PURE__ */ re(Kd, [["__scopeId", "data-v-c6acbada"]]), Yd = { class: "applying-step" }, Jd = {
  key: 0,
  class: "phase-content"
}, Xd = {
  key: 1,
  class: "phase-content"
}, Qd = { class: "phase-description" }, Zd = { class: "overall-progress" }, ec = { class: "progress-bar" }, tc = { class: "progress-label" }, sc = { class: "install-list" }, oc = { class: "install-icon" }, nc = { key: 0 }, ac = {
  key: 1,
  class: "spinner"
}, lc = { key: 2 }, ic = { key: 3 }, rc = {
  key: 0,
  class: "install-error"
}, dc = {
  key: 2,
  class: "phase-content"
}, cc = { class: "phase-header" }, uc = { class: "phase-title" }, mc = { class: "completion-summary" }, vc = {
  key: 0,
  class: "summary-item success"
}, fc = { class: "summary-text" }, pc = {
  key: 1,
  class: "summary-item error"
}, gc = { class: "summary-text" }, hc = {
  key: 2,
  class: "failed-list"
}, yc = { class: "failed-node-id" }, wc = { class: "failed-error" }, kc = {
  key: 4,
  class: "summary-item success"
}, bc = {
  key: 5,
  class: "restart-prompt"
}, _c = {
  key: 3,
  class: "phase-content error"
}, $c = { class: "error-message" }, Cc = /* @__PURE__ */ le({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const c = t, n = U(() => {
      var p, w;
      const m = ((p = c.progress.nodeInstallProgress) == null ? void 0 : p.totalNodes) || c.progress.nodesToInstall.length;
      if (!m) return 0;
      const d = ((w = c.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.length) ?? 0;
      return Math.round(d / m * 100);
    }), i = U(() => {
      var m;
      return ((m = c.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.filter((d) => !d.success)) || [];
    }), f = U(() => i.value.length > 0);
    function v(m, d) {
      var w, k;
      const p = (w = c.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.find((_) => _.node_id === m);
      return p ? p.success ? "complete" : "failed" : ((k = c.progress.nodeInstallProgress) == null ? void 0 : k.currentIndex) === d ? "installing" : "pending";
    }
    function u(m) {
      var d, p;
      return (p = (d = c.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((w) => w.node_id === m)) == null ? void 0 : p.error;
    }
    return (m, d) => {
      var p, w, k, _;
      return s(), o("div", Yd, [
        t.progress.phase === "resolving" ? (s(), o("div", Jd, [...d[2] || (d[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", Xd, [
          d[3] || (d[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", Qd, " Installing " + a((((p = t.progress.nodeInstallProgress) == null ? void 0 : p.currentIndex) ?? 0) + 1) + " of " + a(((w = t.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Zd, [
            e("div", ec, [
              e("div", {
                class: "progress-fill",
                style: Pt({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", tc, a(((k = t.progress.nodeInstallProgress) == null ? void 0 : k.completedNodes.length) ?? 0) + " / " + a(((_ = t.progress.nodeInstallProgress) == null ? void 0 : _.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", sc, [
            (s(!0), o(W, null, ie(t.progress.nodesToInstall, (b, T) => (s(), o("div", {
              key: b,
              class: pe(["install-item", v(b, T)])
            }, [
              e("span", oc, [
                v(b, T) === "pending" ? (s(), o("span", nc, "○")) : v(b, T) === "installing" ? (s(), o("span", ac, "◌")) : v(b, T) === "complete" ? (s(), o("span", lc, "✓")) : v(b, T) === "failed" ? (s(), o("span", ic, "✗")) : r("", !0)
              ]),
              e("code", null, a(b), 1),
              u(b) ? (s(), o("span", rc, a(u(b)), 1)) : r("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", dc, [
          e("div", cc, [
            e("span", {
              class: pe(["phase-icon", f.value ? "warning" : "success"])
            }, a(f.value ? "⚠" : "✓"), 3),
            e("h3", uc, a(f.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", mc, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", vc, [
              d[4] || (d[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", fc, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : r("", !0),
            i.value.length > 0 ? (s(), o("div", pc, [
              d[5] || (d[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", gc, a(i.value.length) + " package" + a(i.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : r("", !0),
            i.value.length > 0 ? (s(), o("div", hc, [
              (s(!0), o(W, null, ie(i.value, (b) => (s(), o("div", {
                key: b.node_id,
                class: "failed-item"
              }, [
                e("code", yc, a(b.node_id), 1),
                e("span", wc, a(b.error), 1)
              ]))), 128))
            ])) : r("", !0),
            i.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (b) => m.$emit("retry-failed"))
            }, " Retry Failed (" + a(i.value.length) + ") ", 1)) : r("", !0),
            f.value ? r("", !0) : (s(), o("div", kc, [...d[6] || (d[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", bc, [
              d[7] || (d[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: d[1] || (d[1] = (b) => m.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : r("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", _c, [
          d[9] || (d[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", $c, a(t.progress.error), 1)
        ])) : r("", !0)
      ]);
    };
  }
}), xc = /* @__PURE__ */ re(Cc, [["__scopeId", "data-v-5efaae58"]]), Sc = {
  key: 0,
  class: "loading-state"
}, Ic = {
  key: 1,
  class: "wizard-content"
}, Ec = {
  key: 0,
  class: "step-content"
}, Pc = { class: "analysis-summary" }, Rc = { class: "analysis-header" }, Mc = { class: "summary-description" }, Tc = { class: "stats-grid" }, Dc = { class: "stat-card" }, Lc = { class: "stat-items" }, zc = {
  key: 0,
  class: "stat-item success"
}, Uc = { class: "stat-count" }, Nc = {
  key: 1,
  class: "stat-item info"
}, Oc = { class: "stat-count" }, Ac = {
  key: 2,
  class: "stat-item warning"
}, Bc = { class: "stat-count" }, Fc = {
  key: 3,
  class: "stat-item error"
}, Vc = { class: "stat-count" }, Wc = { class: "stat-card" }, Gc = { class: "stat-items" }, jc = { class: "stat-item success" }, Hc = { class: "stat-count" }, Kc = {
  key: 0,
  class: "stat-item info"
}, qc = { class: "stat-count" }, Yc = {
  key: 1,
  class: "stat-item warning"
}, Jc = { class: "stat-count" }, Xc = {
  key: 2,
  class: "stat-item warning"
}, Qc = { class: "stat-count" }, Zc = {
  key: 3,
  class: "stat-item error"
}, eu = { class: "stat-count" }, tu = {
  key: 0,
  class: "status-message warning"
}, su = { class: "status-text" }, ou = {
  key: 1,
  class: "status-message info"
}, nu = { class: "status-text" }, au = {
  key: 2,
  class: "status-message info"
}, lu = { class: "status-text" }, iu = {
  key: 3,
  class: "status-message warning"
}, ru = { class: "status-text" }, du = {
  key: 4,
  class: "status-message success"
}, cu = {
  key: 5,
  class: "category-mismatch-section"
}, uu = { class: "mismatch-list" }, mu = { class: "mismatch-path" }, vu = { class: "mismatch-target" }, fu = {
  key: 3,
  class: "step-content"
}, pu = { class: "review-summary" }, gu = { class: "review-stats" }, hu = { class: "review-stat" }, yu = { class: "stat-value" }, wu = { class: "review-stat" }, ku = { class: "stat-value" }, bu = { class: "review-stat" }, _u = { class: "stat-value" }, $u = { class: "review-stat" }, Cu = { class: "stat-value" }, xu = {
  key: 0,
  class: "review-section"
}, Su = { class: "section-title" }, Iu = { class: "review-items" }, Eu = { class: "item-name" }, Pu = { class: "item-choice" }, Ru = {
  key: 0,
  class: "choice-badge install"
}, Mu = {
  key: 1,
  class: "choice-badge skip"
}, Tu = {
  key: 1,
  class: "review-section"
}, Du = { class: "section-title" }, Lu = { class: "review-items" }, zu = { class: "item-name" }, Uu = { class: "item-choice" }, Nu = {
  key: 0,
  class: "choice-badge install"
}, Ou = {
  key: 1,
  class: "choice-badge optional"
}, Au = {
  key: 2,
  class: "choice-badge skip"
}, Bu = {
  key: 1,
  class: "choice-badge pending"
}, Fu = {
  key: 2,
  class: "review-section"
}, Vu = { class: "section-title" }, Wu = { class: "review-items" }, Gu = { class: "item-name" }, ju = { class: "item-choice" }, Hu = {
  key: 0,
  class: "choice-badge install"
}, Ku = {
  key: 1,
  class: "choice-badge download"
}, qu = {
  key: 2,
  class: "choice-badge optional"
}, Yu = {
  key: 3,
  class: "choice-badge skip"
}, Ju = {
  key: 4,
  class: "choice-badge skip"
}, Xu = {
  key: 1,
  class: "choice-badge download"
}, Qu = {
  key: 2,
  class: "choice-badge pending"
}, Zu = {
  key: 3,
  class: "no-choices"
}, em = /* @__PURE__ */ le({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, i = c, { analyzeWorkflow: f, applyResolution: v, installNodes: u, queueModelDownloads: m, progress: d, resetProgress: p } = oo(), { loadPendingDownloads: w } = us(), { openFileLocation: k } = He(), _ = h(null), b = h(!1), T = h(!1), R = h(null), $ = h("analysis"), C = h([]), B = h(/* @__PURE__ */ new Map()), x = h(/* @__PURE__ */ new Map()), M = h(/* @__PURE__ */ new Set()), Z = U(() => {
      const J = [
        { id: "analysis", label: "Analysis" }
      ];
      return (G.value || A.value) && J.push({ id: "nodes", label: "Nodes" }), (E.value || D.value) && J.push({ id: "models", label: "Models" }), J.push({ id: "review", label: "Review" }), $.value === "applying" && J.push({ id: "applying", label: "Applying" }), J;
    }), F = U(() => _.value ? _.value.stats.needs_user_input : !1), G = U(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), E = U(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), D = U(() => _.value ? _.value.stats.download_intents > 0 : !1), A = U(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), de = U(() => _.value ? _.value.nodes.resolved.length : 0), te = U(() => _.value ? _.value.models.resolved.filter((J) => J.has_category_mismatch) : []), Y = U(() => te.value.length > 0), ue = U(() => {
      if (!_.value) return [];
      const J = _.value.nodes.resolved.filter((V) => !V.is_installed), P = /* @__PURE__ */ new Set();
      return J.filter((V) => P.has(V.package.package_id) ? !1 : (P.add(V.package.package_id), !0));
    }), Q = U(() => {
      if (!_.value) return [];
      const J = _.value.nodes.resolved.filter((V) => !V.is_installed), P = /* @__PURE__ */ new Map();
      for (const V of J) {
        const ne = P.get(V.package.package_id);
        ne ? ne.node_types_count++ : P.set(V.package.package_id, {
          package_id: V.package.package_id,
          title: V.package.title,
          node_types_count: 1
        });
      }
      return Array.from(P.values());
    }), O = U(() => ue.value.filter((J) => !M.value.has(J.package.package_id))), z = U(() => _.value ? _.value.models.resolved.filter((J) => J.match_type === "download_intent").map((J) => ({
      filename: J.reference.widget_value,
      reference: J.reference,
      is_download_intent: !0,
      resolved_model: J.model,
      download_source: J.download_source,
      target_path: J.target_path
    })) : []), I = U(() => {
      if (!_.value) return [];
      const J = _.value.nodes.unresolved.map((V) => ({
        node_type: V.reference.node_type,
        reason: V.reason,
        is_unresolved: !0,
        options: void 0
      })), P = _.value.nodes.ambiguous.map((V) => ({
        node_type: V.reference.node_type,
        has_multiple_options: !0,
        options: V.options.map((ne) => ({
          package_id: ne.package.package_id,
          title: ne.package.title,
          match_confidence: ne.match_confidence,
          match_type: ne.match_type,
          is_installed: ne.is_installed
        }))
      }));
      return [...J, ...P];
    }), me = U(() => {
      if (!_.value) return [];
      const J = _.value.models.unresolved.map((V) => ({
        filename: V.reference.widget_value,
        reference: V.reference,
        reason: V.reason,
        is_unresolved: !0,
        options: void 0
      })), P = _.value.models.ambiguous.map((V) => ({
        filename: V.reference.widget_value,
        reference: V.reference,
        has_multiple_options: !0,
        options: V.options.map((ne) => ({
          model: ne.model,
          match_confidence: ne.match_confidence,
          match_type: ne.match_type,
          has_download_source: ne.has_download_source
        }))
      }));
      return [...J, ...P];
    }), ee = U(() => {
      const J = me.value, P = z.value.map((V) => ({
        filename: V.filename,
        reference: V.reference,
        is_download_intent: !0,
        resolved_model: V.resolved_model,
        download_source: V.download_source,
        target_path: V.target_path,
        options: void 0
      }));
      return [...J, ...P];
    }), be = U(() => {
      let J = O.value.length;
      for (const P of B.value.values())
        P.action === "install" && J++;
      for (const P of x.value.values())
        P.action === "select" && J++;
      return J;
    }), Ie = U(() => {
      let J = 0;
      for (const P of x.value.values())
        P.action === "download" && J++;
      return J;
    }), Te = U(() => {
      let J = 0;
      for (const P of B.value.values())
        P.action === "optional" && J++;
      for (const P of x.value.values())
        P.action === "optional" && J++;
      return J;
    }), Ae = U(() => {
      let J = M.value.size;
      for (const P of B.value.values())
        P.action === "skip" && J++;
      for (const P of x.value.values())
        P.action === "skip" && J++;
      for (const P of I.value)
        B.value.has(P.node_type) || J++;
      for (const P of me.value)
        x.value.has(P.filename) || J++;
      return J;
    }), ce = U(() => {
      const J = {};
      if (J.analysis = { resolved: 1, total: 1 }, G.value) {
        const P = I.value.length, V = I.value.filter(
          (ne) => B.value.has(ne.node_type)
        ).length;
        J.nodes = { resolved: V, total: P };
      }
      if (E.value || D.value) {
        const P = ee.value.length, V = ee.value.filter(
          (ne) => x.value.has(ne.filename) || ne.is_download_intent
        ).length;
        J.models = { resolved: V, total: P };
      }
      if (J.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const P = d.totalFiles || 1, V = d.completedFiles.length;
        J.applying = { resolved: V, total: P };
      }
      return J;
    });
    function ge(J) {
      $.value = J;
    }
    function xe() {
      const J = Z.value.findIndex((P) => P.id === $.value);
      J > 0 && ($.value = Z.value[J - 1].id);
    }
    function se() {
      const J = Z.value.findIndex((P) => P.id === $.value);
      J < Z.value.length - 1 && ($.value = Z.value[J + 1].id);
    }
    async function ae() {
      b.value = !0, R.value = null;
      try {
        _.value = await f(n.workflowName);
      } catch (J) {
        R.value = J instanceof Error ? J.message : "Failed to analyze workflow";
      } finally {
        b.value = !1;
      }
    }
    function we() {
      C.value.includes("analysis") || C.value.push("analysis"), G.value || A.value ? $.value = "nodes" : E.value || D.value ? $.value = "models" : $.value = "review";
    }
    function ze(J) {
      B.value.set(J, { action: "optional" });
    }
    function Ze(J) {
      B.value.set(J, { action: "skip" });
    }
    function et(J, P) {
      var ne;
      const V = I.value.find((ke) => ke.node_type === J);
      (ne = V == null ? void 0 : V.options) != null && ne[P] && B.value.set(J, {
        action: "install",
        package_id: V.options[P].package_id
      });
    }
    function $e(J, P) {
      B.value.set(J, {
        action: "install",
        package_id: P
      });
    }
    function tt(J) {
      B.value.delete(J);
    }
    function Ye(J) {
      M.value.has(J) ? M.value.delete(J) : M.value.add(J);
    }
    function je(J) {
      x.value.set(J, { action: "optional" });
    }
    function rt(J) {
      x.value.set(J, { action: "skip" });
    }
    function _e(J, P) {
      var ne;
      const V = me.value.find((ke) => ke.filename === J);
      (ne = V == null ? void 0 : V.options) != null && ne[P] && x.value.set(J, {
        action: "select",
        selected_model: V.options[P].model
      });
    }
    function Re(J, P, V) {
      x.value.set(J, {
        action: "download",
        url: P,
        target_path: V
      });
    }
    function st(J) {
      x.value.delete(J);
    }
    async function Je(J) {
      try {
        await k(J);
      } catch (P) {
        R.value = P instanceof Error ? P.message : "Failed to open file location";
      }
    }
    async function Le() {
      var J;
      T.value = !0, R.value = null, p(), d.phase = "resolving", $.value = "applying";
      try {
        const P = await v(n.workflowName, B.value, x.value, M.value);
        P.models_to_download && P.models_to_download.length > 0 && m(n.workflowName, P.models_to_download);
        const V = [
          ...P.nodes_to_install || [],
          ...O.value.map((ke) => ke.package.package_id)
        ];
        d.nodesToInstall = [...new Set(V)], d.nodesToInstall.length > 0 && await u(n.workflowName), d.phase = "complete", await w();
        const ne = d.installError || ((J = d.nodeInstallProgress) == null ? void 0 : J.completedNodes.some((ke) => !ke.success));
        !d.needsRestart && !ne && setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1500);
      } catch (P) {
        R.value = P instanceof Error ? P.message : "Failed to apply resolution", d.error = R.value, d.phase = "error";
      } finally {
        T.value = !1;
      }
    }
    function fe() {
      i("refresh"), i("restart"), i("close");
    }
    async function K() {
      var P;
      const J = ((P = d.nodeInstallProgress) == null ? void 0 : P.completedNodes.filter((V) => !V.success).map((V) => V.node_id)) || [];
      if (J.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: J.length
        }, d.nodesToInstall = J, d.nodesInstalled = [], d.installError = void 0;
        try {
          await u(n.workflowName), d.phase = "complete";
        } catch (V) {
          d.error = V instanceof Error ? V.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return We(ae), (J, P) => (s(), S(lt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: b.value,
      error: R.value || void 0,
      "fixed-height": !0,
      onClose: P[1] || (P[1] = (V) => i("close"))
    }, {
      body: l(() => [
        b.value && !_.value ? (s(), o("div", Sc, [...P[2] || (P[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (s(), o("div", Ic, [
          y(Li, {
            steps: Z.value,
            "current-step": $.value,
            "completed-steps": C.value,
            "step-stats": ce.value,
            onStepChange: ge
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (s(), o("div", Ec, [
            e("div", Pc, [
              e("div", Rc, [
                P[3] || (P[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", Mc, " Found " + a(_.value.stats.total_nodes) + " nodes and " + a(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Tc, [
                e("div", Dc, [
                  P[12] || (P[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Lc, [
                    de.value > 0 ? (s(), o("div", zc, [
                      P[4] || (P[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Uc, a(de.value), 1),
                      P[5] || (P[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : r("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (s(), o("div", Nc, [
                      P[6] || (P[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Oc, a(_.value.stats.packages_needing_installation), 1),
                      P[7] || (P[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : r("", !0),
                    _.value.nodes.ambiguous.length > 0 ? (s(), o("div", Ac, [
                      P[8] || (P[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Bc, a(_.value.nodes.ambiguous.length), 1),
                      P[9] || (P[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : r("", !0),
                    _.value.nodes.unresolved.length > 0 ? (s(), o("div", Fc, [
                      P[10] || (P[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Vc, a(_.value.nodes.unresolved.length), 1),
                      P[11] || (P[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : r("", !0)
                  ])
                ]),
                e("div", Wc, [
                  P[23] || (P[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Gc, [
                    e("div", jc, [
                      P[13] || (P[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Hc, a(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      P[14] || (P[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (s(), o("div", Kc, [
                      P[15] || (P[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", qc, a(_.value.stats.download_intents), 1),
                      P[16] || (P[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : r("", !0),
                    Y.value ? (s(), o("div", Yc, [
                      P[17] || (P[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", Jc, a(te.value.length), 1),
                      P[18] || (P[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : r("", !0),
                    _.value.models.ambiguous.length > 0 ? (s(), o("div", Xc, [
                      P[19] || (P[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Qc, a(_.value.models.ambiguous.length), 1),
                      P[20] || (P[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : r("", !0),
                    _.value.models.unresolved.length > 0 ? (s(), o("div", Zc, [
                      P[21] || (P[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", eu, a(_.value.models.unresolved.length), 1),
                      P[22] || (P[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : r("", !0)
                  ])
                ])
              ]),
              F.value ? (s(), o("div", tu, [
                P[24] || (P[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", su, a(I.value.length + me.value.length) + " items need your input", 1)
              ])) : A.value ? (s(), o("div", ou, [
                P[25] || (P[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", nu, a(_.value.stats.packages_needing_installation) + " package" + a(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(_.value.stats.nodes_needing_installation) + " node type" + a(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(D.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : D.value ? (s(), o("div", au, [
                P[26] || (P[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", lu, a(_.value.stats.download_intents) + " model" + a(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : Y.value ? (s(), o("div", iu, [
                P[27] || (P[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", ru, a(te.value.length) + " model" + a(te.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", du, [...P[28] || (P[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              Y.value ? (s(), o("div", cu, [
                P[31] || (P[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", uu, [
                  (s(!0), o(W, null, ie(te.value, (V) => {
                    var ne, ke;
                    return s(), o("div", {
                      key: V.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", mu, a(V.actual_category) + "/" + a((ne = V.model) == null ? void 0 : ne.filename), 1),
                      P[30] || (P[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", vu, a((ke = V.expected_categories) == null ? void 0 : ke[0]) + "/", 1),
                      V.file_path ? (s(), S(ye, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Ge) => Je(V.file_path)
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
          $.value === "nodes" ? (s(), S(td, {
            key: 1,
            nodes: I.value,
            "node-choices": B.value,
            "auto-resolved-packages": Q.value,
            "skipped-packages": M.value,
            onMarkOptional: ze,
            onSkip: Ze,
            onOptionSelected: et,
            onManualEntry: $e,
            onClearChoice: tt,
            onPackageSkip: Ye
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : r("", !0),
          $.value === "models" ? (s(), S(qd, {
            key: 2,
            models: ee.value,
            "model-choices": x.value,
            onMarkOptional: je,
            onSkip: rt,
            onOptionSelected: _e,
            onDownloadUrl: Re,
            onClearChoice: st
          }, null, 8, ["models", "model-choices"])) : r("", !0),
          $.value === "review" ? (s(), o("div", fu, [
            e("div", pu, [
              P[36] || (P[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", gu, [
                e("div", hu, [
                  e("span", yu, a(be.value), 1),
                  P[32] || (P[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", wu, [
                  e("span", ku, a(Ie.value), 1),
                  P[33] || (P[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", bu, [
                  e("span", _u, a(Te.value), 1),
                  P[34] || (P[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", $u, [
                  e("span", Cu, a(Ae.value), 1),
                  P[35] || (P[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              Q.value.length > 0 ? (s(), o("div", xu, [
                e("h4", Su, "Node Packages (" + a(Q.value.length) + ")", 1),
                e("div", Iu, [
                  (s(!0), o(W, null, ie(Q.value, (V) => (s(), o("div", {
                    key: V.package_id,
                    class: "review-item"
                  }, [
                    e("code", Eu, a(V.package_id), 1),
                    e("div", Pu, [
                      M.value.has(V.package_id) ? (s(), o("span", Mu, "Skipped")) : (s(), o("span", Ru, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : r("", !0),
              I.value.length > 0 ? (s(), o("div", Tu, [
                e("h4", Du, "Node Choices (" + a(I.value.length) + ")", 1),
                e("div", Lu, [
                  (s(!0), o(W, null, ie(I.value, (V) => {
                    var ne, ke, Ge, it;
                    return s(), o("div", {
                      key: V.node_type,
                      class: "review-item"
                    }, [
                      e("code", zu, a(V.node_type), 1),
                      e("div", Uu, [
                        B.value.has(V.node_type) ? (s(), o(W, { key: 0 }, [
                          ((ne = B.value.get(V.node_type)) == null ? void 0 : ne.action) === "install" ? (s(), o("span", Nu, a((ke = B.value.get(V.node_type)) == null ? void 0 : ke.package_id), 1)) : ((Ge = B.value.get(V.node_type)) == null ? void 0 : Ge.action) === "optional" ? (s(), o("span", Ou, " Optional ")) : ((it = B.value.get(V.node_type)) == null ? void 0 : it.action) === "skip" ? (s(), o("span", Au, " Skip ")) : r("", !0)
                        ], 64)) : (s(), o("span", Bu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : r("", !0),
              ee.value.length > 0 ? (s(), o("div", Fu, [
                e("h4", Vu, "Models (" + a(ee.value.length) + ")", 1),
                e("div", Wu, [
                  (s(!0), o(W, null, ie(ee.value, (V) => {
                    var ne, ke, Ge, it, Xe, St, mt;
                    return s(), o("div", {
                      key: V.filename,
                      class: "review-item"
                    }, [
                      e("code", Gu, a(V.filename), 1),
                      e("div", ju, [
                        x.value.has(V.filename) ? (s(), o(W, { key: 0 }, [
                          ((ne = x.value.get(V.filename)) == null ? void 0 : ne.action) === "select" ? (s(), o("span", Hu, a((Ge = (ke = x.value.get(V.filename)) == null ? void 0 : ke.selected_model) == null ? void 0 : Ge.filename), 1)) : ((it = x.value.get(V.filename)) == null ? void 0 : it.action) === "download" ? (s(), o("span", Ku, " Download ")) : ((Xe = x.value.get(V.filename)) == null ? void 0 : Xe.action) === "optional" ? (s(), o("span", qu, " Optional ")) : ((St = x.value.get(V.filename)) == null ? void 0 : St.action) === "skip" ? (s(), o("span", Yu, " Skip ")) : ((mt = x.value.get(V.filename)) == null ? void 0 : mt.action) === "cancel_download" ? (s(), o("span", Ju, " Cancel Download ")) : r("", !0)
                        ], 64)) : V.is_download_intent ? (s(), o("span", Xu, " Pending Download ")) : (s(), o("span", Qu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : r("", !0),
              ue.value.length === 0 && I.value.length === 0 && ee.value.length === 0 ? (s(), o("div", Zu, " No dependencies need resolution. ")) : r("", !0)
            ])
          ])) : r("", !0),
          $.value === "applying" ? (s(), S(xc, {
            key: 4,
            progress: Pe(d),
            onRestart: fe,
            onRetryFailed: K
          }, null, 8, ["progress"])) : r("", !0)
        ])) : r("", !0)
      ]),
      footer: l(() => [
        $.value !== "analysis" && $.value !== "applying" ? (s(), S(ye, {
          key: 0,
          variant: "secondary",
          disabled: T.value,
          onClick: xe
        }, {
          default: l(() => [...P[37] || (P[37] = [
            g(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : r("", !0),
        P[41] || (P[41] = e("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || Pe(d).phase === "complete" || Pe(d).phase === "error" ? (s(), S(ye, {
          key: 1,
          variant: "secondary",
          onClick: P[0] || (P[0] = (V) => i("close"))
        }, {
          default: l(() => [
            g(a(Pe(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : r("", !0),
        $.value === "analysis" ? (s(), S(ye, {
          key: 2,
          variant: "primary",
          disabled: b.value,
          onClick: we
        }, {
          default: l(() => [...P[38] || (P[38] = [
            g(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : r("", !0),
        $.value === "nodes" ? (s(), S(ye, {
          key: 3,
          variant: "primary",
          onClick: se
        }, {
          default: l(() => [
            g(a(E.value || D.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : r("", !0),
        $.value === "models" ? (s(), S(ye, {
          key: 4,
          variant: "primary",
          onClick: se
        }, {
          default: l(() => [...P[39] || (P[39] = [
            g(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : r("", !0),
        $.value === "review" ? (s(), S(ye, {
          key: 5,
          variant: "primary",
          disabled: T.value,
          loading: T.value,
          onClick: Le
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
}), tm = /* @__PURE__ */ re(em, [["__scopeId", "data-v-6276cf1d"]]), sm = { class: "search-input-wrapper" }, om = ["value", "placeholder"], nm = /* @__PURE__ */ le({
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
    const n = t, i = c, f = h(null);
    let v;
    function u(d) {
      const p = d.target.value;
      n.debounce > 0 ? (clearTimeout(v), v = window.setTimeout(() => {
        i("update:modelValue", p);
      }, n.debounce)) : i("update:modelValue", p);
    }
    function m() {
      var d;
      i("update:modelValue", ""), i("clear"), (d = f.value) == null || d.focus();
    }
    return We(() => {
      n.autoFocus && f.value && f.value.focus();
    }), (d, p) => (s(), o("div", sm, [
      e("input", {
        ref_key: "inputRef",
        ref: f,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: Ct(m, ["escape"])
      }, null, 40, om),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : r("", !0)
    ]));
  }
}), am = /* @__PURE__ */ re(nm, [["__scopeId", "data-v-266f857a"]]), lm = { class: "search-bar" }, im = /* @__PURE__ */ le({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, n) => (s(), o("div", lm, [
      y(am, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => c.$emit("update:modelValue", i)),
        onClear: n[1] || (n[1] = (i) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Jt = /* @__PURE__ */ re(im, [["__scopeId", "data-v-3d51bbfd"]]), rm = { class: "section-group" }, dm = {
  key: 0,
  class: "section-content"
}, cm = /* @__PURE__ */ le({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = h(n.initiallyExpanded);
    function v() {
      n.collapsible && (f.value = !f.value, i("toggle", f.value));
    }
    return (u, m) => (s(), o("section", rm, [
      y(ut, {
        count: t.count,
        clickable: t.collapsible,
        expanded: f.value,
        onClick: v
      }, {
        default: l(() => [
          g(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || f.value ? (s(), o("div", dm, [
        Me(u.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), Oe = /* @__PURE__ */ re(cm, [["__scopeId", "data-v-c48e33ed"]]), um = { class: "item-header" }, mm = {
  key: 0,
  class: "item-icon"
}, vm = { class: "item-info" }, fm = {
  key: 0,
  class: "item-title"
}, pm = {
  key: 1,
  class: "item-subtitle"
}, gm = {
  key: 0,
  class: "item-details"
}, hm = {
  key: 1,
  class: "item-actions"
}, ym = /* @__PURE__ */ le({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, i = U(() => n.status ? `status-${n.status}` : "");
    return (f, v) => (s(), o("div", {
      class: pe(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: v[0] || (v[0] = (u) => t.clickable && f.$emit("click"))
    }, [
      e("div", um, [
        f.$slots.icon ? (s(), o("span", mm, [
          Me(f.$slots, "icon", {}, void 0, !0)
        ])) : r("", !0),
        e("div", vm, [
          f.$slots.title ? (s(), o("div", fm, [
            Me(f.$slots, "title", {}, void 0, !0)
          ])) : r("", !0),
          f.$slots.subtitle ? (s(), o("div", pm, [
            Me(f.$slots, "subtitle", {}, void 0, !0)
          ])) : r("", !0)
        ])
      ]),
      f.$slots.details ? (s(), o("div", gm, [
        Me(f.$slots, "details", {}, void 0, !0)
      ])) : r("", !0),
      f.$slots.actions ? (s(), o("div", hm, [
        Me(f.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), ot = /* @__PURE__ */ re(ym, [["__scopeId", "data-v-cc435e0e"]]), wm = { class: "loading-state" }, km = { class: "loading-message" }, bm = /* @__PURE__ */ le({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, n) => (s(), o("div", wm, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", km, a(t.message), 1)
    ]));
  }
}), Rt = /* @__PURE__ */ re(bm, [["__scopeId", "data-v-ad8436c9"]]), _m = { class: "error-state" }, $m = { class: "error-message" }, Cm = /* @__PURE__ */ le({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, n) => (s(), o("div", _m, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", $m, a(t.message), 1),
      t.retry ? (s(), S(oe, {
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
}), Mt = /* @__PURE__ */ re(Cm, [["__scopeId", "data-v-5397be48"]]), xm = /* @__PURE__ */ le({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getWorkflows: f } = He();
    to();
    const v = h([]), u = h(!1), m = h(null), d = h(""), p = h(!0), w = h(!1), k = h(!1), _ = h(!1), b = h(null), T = U(
      () => v.value.filter((O) => O.status === "broken")
    ), R = U(
      () => v.value.filter((O) => O.status === "new")
    ), $ = U(
      () => v.value.filter((O) => O.status === "modified")
    ), C = U(
      () => v.value.filter((O) => O.status === "synced")
    ), B = U(() => {
      if (!d.value.trim()) return v.value;
      const O = d.value.toLowerCase();
      return v.value.filter((z) => z.name.toLowerCase().includes(O));
    }), x = U(
      () => T.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), M = U(
      () => R.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), Z = U(
      () => $.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), F = U(
      () => C.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), G = U(
      () => w.value ? F.value : F.value.slice(0, 5)
    );
    async function E(O = !1) {
      u.value = !0, m.value = null;
      try {
        v.value = await f(O);
      } catch (z) {
        m.value = z instanceof Error ? z.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    c({ loadWorkflows: E });
    function D(O) {
      b.value = O, k.value = !0;
    }
    function A(O) {
      b.value = O, _.value = !0;
    }
    function de() {
      i("refresh");
    }
    async function te() {
      _.value = !1, await E(!0);
    }
    async function Y() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ue(O) {
      const z = [];
      return O.missing_nodes > 0 && z.push(`${O.missing_nodes} missing node${O.missing_nodes > 1 ? "s" : ""}`), O.missing_models > 0 && z.push(`${O.missing_models} missing model${O.missing_models > 1 ? "s" : ""}`), O.models_with_category_mismatch && O.models_with_category_mismatch > 0 && z.push(`${O.models_with_category_mismatch} model${O.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), O.pending_downloads && O.pending_downloads > 0 && z.push(`${O.pending_downloads} pending download${O.pending_downloads > 1 ? "s" : ""}`), z.length > 0 ? z.join(", ") : "Has issues";
    }
    function Q(O) {
      const z = O.sync_state === "new" ? "New" : O.sync_state === "modified" ? "Modified" : O.sync_state === "synced" ? "Synced" : O.sync_state;
      return O.has_path_sync_issues && O.models_needing_path_sync && O.models_needing_path_sync > 0 ? `${O.models_needing_path_sync} model path${O.models_needing_path_sync > 1 ? "s" : ""} need${O.models_needing_path_sync === 1 ? "s" : ""} sync` : z || "Unknown";
    }
    return We(E), (O, z) => (s(), o(W, null, [
      y(nt, null, {
        header: l(() => [
          y(at, { title: "WORKFLOWS" })
        ]),
        search: l(() => [
          y(Jt, {
            modelValue: d.value,
            "onUpdate:modelValue": z[0] || (z[0] = (I) => d.value = I),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value ? (s(), S(Rt, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (s(), S(Mt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            x.value.length ? (s(), S(Oe, {
              key: 0,
              title: "BROKEN",
              count: x.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ie(x.value, (I) => (s(), S(ot, {
                  key: I.name,
                  status: "broken"
                }, {
                  icon: l(() => [...z[7] || (z[7] = [
                    g("⚠", -1)
                  ])]),
                  title: l(() => [
                    g(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(ue(I)), 1)
                  ]),
                  actions: l(() => [
                    y(oe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (me) => A(I.name)
                    }, {
                      default: l(() => [...z[8] || (z[8] = [
                        g(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    y(oe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (me) => D(I.name)
                    }, {
                      default: l(() => [...z[9] || (z[9] = [
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
            M.value.length ? (s(), S(Oe, {
              key: 1,
              title: "NEW",
              count: M.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ie(M.value, (I) => (s(), S(ot, {
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
                    g(a(Q(I)), 1)
                  ]),
                  actions: l(() => [
                    y(oe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (me) => D(I.name)
                    }, {
                      default: l(() => [...z[10] || (z[10] = [
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
            Z.value.length ? (s(), S(Oe, {
              key: 2,
              title: "MODIFIED",
              count: Z.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ie(Z.value, (I) => (s(), S(ot, {
                  key: I.name,
                  status: I.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: l(() => [...z[11] || (z[11] = [
                    g("⚡", -1)
                  ])]),
                  title: l(() => [
                    g(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(Q(I)), 1)
                  ]),
                  actions: l(() => [
                    y(oe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (me) => D(I.name)
                    }, {
                      default: l(() => [...z[12] || (z[12] = [
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
            F.value.length ? (s(), S(Oe, {
              key: 3,
              title: "SYNCED",
              count: F.value.length,
              collapsible: !0,
              "initially-expanded": p.value,
              onToggle: z[2] || (z[2] = (I) => p.value = I)
            }, {
              default: l(() => [
                (s(!0), o(W, null, ie(G.value, (I) => (s(), S(ot, {
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
                    g(a(Q(I)), 1)
                  ]),
                  actions: l(() => [
                    y(oe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (me) => D(I.name)
                    }, {
                      default: l(() => [...z[13] || (z[13] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !w.value && F.value.length > 5 ? (s(), S(oe, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: z[1] || (z[1] = (I) => w.value = !0),
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
            B.value.length ? r("", !0) : (s(), S(yt, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k.value && b.value ? (s(), S(_i, {
        key: 0,
        "workflow-name": b.value,
        onClose: z[3] || (z[3] = (I) => k.value = !1),
        onResolve: z[4] || (z[4] = (I) => A(b.value)),
        onRefresh: z[5] || (z[5] = (I) => i("refresh"))
      }, null, 8, ["workflow-name"])) : r("", !0),
      _.value && b.value ? (s(), S(tm, {
        key: 1,
        "workflow-name": b.value,
        onClose: te,
        onInstall: de,
        onRefresh: z[6] || (z[6] = (I) => i("refresh")),
        onRestart: Y
      }, null, 8, ["workflow-name"])) : r("", !0)
    ], 64));
  }
}), Sm = /* @__PURE__ */ re(xm, [["__scopeId", "data-v-fa3f076e"]]), Im = /* @__PURE__ */ le({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: pe(["summary-bar", t.variant])
    }, [
      Me(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ms = /* @__PURE__ */ re(Im, [["__scopeId", "data-v-ccb7816e"]]), Em = {
  key: 0,
  class: "model-details"
}, Pm = { class: "detail-section" }, Rm = { class: "detail-row" }, Mm = { class: "detail-value mono" }, Tm = { class: "detail-row" }, Dm = { class: "detail-value mono" }, Lm = { class: "detail-row" }, zm = { class: "detail-value mono" }, Um = { class: "detail-row" }, Nm = { class: "detail-value" }, Om = { class: "detail-row" }, Am = { class: "detail-value" }, Bm = { class: "detail-row" }, Fm = { class: "detail-value" }, Vm = { class: "detail-section" }, Wm = { class: "section-header" }, Gm = {
  key: 0,
  class: "locations-list"
}, jm = { class: "location-path mono" }, Hm = {
  key: 0,
  class: "location-modified"
}, Km = ["onClick"], qm = {
  key: 1,
  class: "empty-state"
}, Ym = { class: "detail-section" }, Jm = { class: "section-header" }, Xm = {
  key: 0,
  class: "sources-list"
}, Qm = { class: "source-type" }, Zm = ["href"], ev = ["disabled", "onClick"], tv = {
  key: 1,
  class: "empty-state"
}, sv = { class: "add-source-form" }, ov = ["disabled"], nv = {
  key: 2,
  class: "source-error"
}, av = {
  key: 3,
  class: "source-success"
}, lv = /* @__PURE__ */ le({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: i, addModelSource: f, removeModelSource: v, openFileLocation: u } = He(), m = h(null), d = h(!0), p = h(null), w = h(""), k = h(!1), _ = h(null), b = h(null), T = h(null), R = h(null);
    let $ = null;
    function C(E, D = "success", A = 2e3) {
      $ && clearTimeout($), R.value = { message: E, type: D }, $ = setTimeout(() => {
        R.value = null;
      }, A);
    }
    function B(E) {
      if (!E) return "Unknown";
      const D = 1024 * 1024 * 1024, A = 1024 * 1024;
      return E >= D ? `${(E / D).toFixed(1)} GB` : E >= A ? `${(E / A).toFixed(0)} MB` : `${(E / 1024).toFixed(0)} KB`;
    }
    function x(E) {
      navigator.clipboard.writeText(E), C("Copied to clipboard!");
    }
    async function M(E) {
      try {
        await u(E), C("Opening file location...");
      } catch {
        C("Failed to open location", "error");
      }
    }
    async function Z() {
      if (!(!w.value.trim() || !m.value)) {
        k.value = !0, b.value = null, T.value = null;
        try {
          await f(m.value.hash, w.value.trim()), T.value = "Source added successfully!", w.value = "", await G();
        } catch (E) {
          b.value = E instanceof Error ? E.message : "Failed to add source";
        } finally {
          k.value = !1;
        }
      }
    }
    async function F(E) {
      if (m.value) {
        _.value = E, b.value = null, T.value = null;
        try {
          await v(m.value.hash, E), C("Source removed"), await G();
        } catch (D) {
          b.value = D instanceof Error ? D.message : "Failed to remove source";
        } finally {
          _.value = null;
        }
      }
    }
    async function G() {
      d.value = !0, p.value = null;
      try {
        m.value = await i(n.identifier);
      } catch (E) {
        p.value = E instanceof Error ? E.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return We(G), (E, D) => {
      var A;
      return s(), o(W, null, [
        y(lt, {
          title: `Model Details: ${((A = m.value) == null ? void 0 : A.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: p.value,
          onClose: D[5] || (D[5] = (de) => E.$emit("close"))
        }, {
          body: l(() => {
            var de, te, Y, ue;
            return [
              m.value ? (s(), o("div", Em, [
                e("section", Pm, [
                  e("div", Rm, [
                    D[6] || (D[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", Mm, a(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: D[0] || (D[0] = (Q) => x(m.value.hash))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", Tm, [
                    D[7] || (D[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", Dm, a(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: D[1] || (D[1] = (Q) => x(m.value.blake3))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", Lm, [
                    D[8] || (D[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", zm, a(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: D[2] || (D[2] = (Q) => x(m.value.sha256))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", Um, [
                    D[9] || (D[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Nm, a(B(m.value.size)), 1)
                  ]),
                  e("div", Om, [
                    D[10] || (D[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Am, a(m.value.category), 1)
                  ]),
                  e("div", Bm, [
                    D[11] || (D[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Fm, a(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Vm, [
                  e("h4", Wm, "Locations (" + a(((de = m.value.locations) == null ? void 0 : de.length) || 0) + ")", 1),
                  (te = m.value.locations) != null && te.length ? (s(), o("div", Gm, [
                    (s(!0), o(W, null, ie(m.value.locations, (Q, O) => (s(), o("div", {
                      key: O,
                      class: "location-item"
                    }, [
                      e("span", jm, a(Q.path), 1),
                      Q.modified ? (s(), o("span", Hm, "Modified: " + a(Q.modified), 1)) : r("", !0),
                      Q.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (z) => M(Q.path)
                      }, " Open File Location ", 8, Km)) : r("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", qm, "No locations found"))
                ]),
                e("section", Ym, [
                  e("h4", Jm, "Download Sources (" + a(((Y = m.value.sources) == null ? void 0 : Y.length) || 0) + ")", 1),
                  (ue = m.value.sources) != null && ue.length ? (s(), o("div", Xm, [
                    (s(!0), o(W, null, ie(m.value.sources, (Q, O) => (s(), o("div", {
                      key: O,
                      class: "source-item"
                    }, [
                      e("span", Qm, a(Q.type) + ":", 1),
                      e("a", {
                        href: Q.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(Q.url), 9, Zm),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: _.value === Q.url,
                        onClick: (z) => F(Q.url)
                      }, a(_.value === Q.url ? "..." : "×"), 9, ev)
                    ]))), 128))
                  ])) : (s(), o("div", tv, " No download sources configured ")),
                  e("div", sv, [
                    Ue(e("input", {
                      "onUpdate:modelValue": D[3] || (D[3] = (Q) => w.value = Q),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Ft, w.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !w.value.trim() || k.value,
                      onClick: Z
                    }, a(k.value ? "Adding..." : "Add Source"), 9, ov)
                  ]),
                  b.value ? (s(), o("p", nv, a(b.value), 1)) : r("", !0),
                  T.value ? (s(), o("p", av, a(T.value), 1)) : r("", !0)
                ])
              ])) : r("", !0)
            ];
          }),
          footer: l(() => [
            e("button", {
              class: "btn-secondary",
              onClick: D[4] || (D[4] = (de) => E.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), S(Qe, { to: "body" }, [
          R.value ? (s(), o("div", {
            key: 0,
            class: pe(["toast", R.value.type])
          }, a(R.value.message), 3)) : r("", !0)
        ]))
      ], 64);
    };
  }
}), Ts = /* @__PURE__ */ re(lv, [["__scopeId", "data-v-f15cbb56"]]), iv = /* @__PURE__ */ le({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: i, getStatus: f } = He(), v = h([]), u = h([]), m = h("production"), d = h(!1), p = h(null), w = h(""), k = h(!1), _ = h(null);
    function b() {
      k.value = !1, n("navigate", "model-index");
    }
    const T = U(
      () => v.value.reduce((G, E) => G + (E.size || 0), 0)
    ), R = U(() => {
      if (!w.value.trim()) return v.value;
      const G = w.value.toLowerCase();
      return v.value.filter((E) => E.filename.toLowerCase().includes(G));
    }), $ = U(() => {
      if (!w.value.trim()) return u.value;
      const G = w.value.toLowerCase();
      return u.value.filter((E) => E.filename.toLowerCase().includes(G));
    }), C = U(() => {
      const G = {};
      for (const D of R.value) {
        const A = D.type || "other";
        G[A] || (G[A] = []), G[A].push(D);
      }
      const E = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(G).sort(([D], [A]) => {
        const de = E.indexOf(D), te = E.indexOf(A);
        return de >= 0 && te >= 0 ? de - te : de >= 0 ? -1 : te >= 0 ? 1 : D.localeCompare(A);
      }).map(([D, A]) => ({ type: D, models: A }));
    });
    function B(G) {
      if (!G) return "Unknown";
      const E = G / (1024 * 1024);
      return E >= 1024 ? `${(E / 1024).toFixed(1)} GB` : `${E.toFixed(0)} MB`;
    }
    function x(G) {
      _.value = G.hash || G.filename;
    }
    function M(G) {
      n("navigate", "model-index");
    }
    function Z(G) {
      alert(`Download functionality not yet implemented for ${G}`);
    }
    async function F() {
      d.value = !0, p.value = null;
      try {
        const G = await i();
        v.value = G, u.value = [];
        const E = await f();
        m.value = E.environment || "production";
      } catch (G) {
        p.value = G instanceof Error ? G.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return We(F), (G, E) => (s(), o(W, null, [
      y(nt, null, {
        header: l(() => [
          y(at, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (D) => k.value = !0)
          })
        ]),
        search: l(() => [
          y(Jt, {
            modelValue: w.value,
            "onUpdate:modelValue": E[1] || (E[1] = (D) => w.value = D),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          d.value ? (s(), S(Rt, {
            key: 0,
            message: "Loading environment models..."
          })) : p.value ? (s(), S(Mt, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            v.value.length ? (s(), S(ms, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                g(" Total: " + a(v.value.length) + " models • " + a(B(T.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : r("", !0),
            (s(!0), o(W, null, ie(C.value, (D) => (s(), S(Oe, {
              key: D.type,
              title: D.type.toUpperCase(),
              count: D.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(W, null, ie(D.models, (A) => (s(), S(ot, {
                  key: A.hash || A.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...E[4] || (E[4] = [
                    g("📦", -1)
                  ])]),
                  title: l(() => [
                    g(a(A.filename), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(B(A.size)), 1)
                  ]),
                  details: l(() => [
                    y(Ve, {
                      label: "Used by:",
                      value: (A.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    y(Ve, {
                      label: "Path:",
                      value: A.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    y(oe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (de) => x(A)
                    }, {
                      default: l(() => [...E[5] || (E[5] = [
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
            $.value.length ? (s(), S(Oe, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ie($.value, (D) => (s(), S(ot, {
                  key: D.filename,
                  status: "broken"
                }, {
                  icon: l(() => [...E[6] || (E[6] = [
                    g("⚠", -1)
                  ])]),
                  title: l(() => [
                    g(a(D.filename), 1)
                  ]),
                  subtitle: l(() => [...E[7] || (E[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: l(() => {
                    var A;
                    return [
                      y(Ve, {
                        label: "Required by:",
                        value: ((A = D.workflow_names) == null ? void 0 : A.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: l(() => [
                    y(oe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => Z(D.filename)
                    }, {
                      default: l(() => [...E[8] || (E[8] = [
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    y(oe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (A) => M(D.filename)
                    }, {
                      default: l(() => [...E[9] || (E[9] = [
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
            !R.value.length && !$.value.length ? (s(), S(yt, {
              key: 2,
              icon: "📭",
              message: w.value ? `No models match '${w.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      y(wt, {
        show: k.value,
        title: "About Environment Models",
        onClose: E[2] || (E[2] = (D) => k.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            E[10] || (E[10] = g(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(m.value) + '"', 1),
            E[11] || (E[11] = g(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: l(() => [
          y(oe, {
            variant: "primary",
            onClick: b
          }, {
            default: l(() => [...E[12] || (E[12] = [
              g(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (s(), S(Ts, {
        key: 0,
        identifier: _.value,
        onClose: E[3] || (E[3] = (D) => _.value = null)
      }, null, 8, ["identifier"])) : r("", !0)
    ], 64));
  }
}), rv = /* @__PURE__ */ re(iv, [["__scopeId", "data-v-cb4f12b3"]]), dv = {
  key: 0,
  class: "indexing-progress"
}, cv = { class: "progress-info" }, uv = { class: "progress-label" }, mv = { class: "progress-count" }, vv = { class: "progress-bar" }, fv = { class: "modal-content" }, pv = { class: "modal-header" }, gv = { class: "modal-body" }, hv = { class: "input-group" }, yv = { class: "current-path" }, wv = { class: "input-group" }, kv = { class: "modal-footer" }, bv = { class: "modal-content" }, _v = { class: "modal-header" }, $v = { class: "modal-body" }, Cv = { class: "input-group" }, xv = { class: "input-group" }, Sv = { class: "modal-footer" }, Iv = /* @__PURE__ */ le({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: i,
      getModelsDirectory: f,
      setModelsDirectory: v
    } = He(), { addToQueue: u } = us(), m = c, d = h([]), p = h(!1), w = h(!1), k = h(null), _ = h(""), b = h(!1), T = h(null), R = h(!1), $ = h(null), C = h(""), B = h(!1), x = h(!1), M = h(""), Z = h(""), F = h(null), G = U(
      () => d.value.reduce((z, I) => z + (I.size || 0), 0)
    ), E = U(() => {
      if (!_.value.trim()) return d.value;
      const z = _.value.toLowerCase();
      return d.value.filter((I) => {
        const me = I, ee = I.sha256 || me.sha256_hash || "";
        return I.filename.toLowerCase().includes(z) || ee.toLowerCase().includes(z);
      });
    }), D = U(() => {
      const z = {};
      for (const me of E.value) {
        const ee = me.type || "other";
        z[ee] || (z[ee] = []), z[ee].push(me);
      }
      const I = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(z).sort(([me], [ee]) => {
        const be = I.indexOf(me), Ie = I.indexOf(ee);
        return be >= 0 && Ie >= 0 ? be - Ie : be >= 0 ? -1 : Ie >= 0 ? 1 : me.localeCompare(ee);
      }).map(([me, ee]) => ({ type: me, models: ee }));
    });
    function A(z) {
      if (!z) return "Unknown";
      const I = 1024 * 1024 * 1024, me = 1024 * 1024;
      return z >= I ? `${(z / I).toFixed(1)} GB` : z >= me ? `${(z / me).toFixed(0)} MB` : `${(z / 1024).toFixed(0)} KB`;
    }
    function de(z) {
      T.value = z.hash || z.filename;
    }
    async function te() {
      w.value = !0, k.value = null;
      try {
        const z = await i();
        await Q(), z.changes > 0 && console.log(`Scan complete: ${z.changes} changes detected`);
      } catch (z) {
        k.value = z instanceof Error ? z.message : "Failed to scan models";
      } finally {
        w.value = !1;
      }
    }
    async function Y() {
      if (C.value.trim()) {
        B.value = !0, k.value = null;
        try {
          const z = await v(C.value.trim());
          $.value = z.path, R.value = !1, C.value = "", await Q(), console.log(`Directory changed: ${z.models_indexed} models indexed`), m("refresh");
        } catch (z) {
          k.value = z instanceof Error ? z.message : "Failed to change directory";
        } finally {
          B.value = !1;
        }
      }
    }
    function ue() {
      if (!M.value.trim() || !Z.value.trim()) return;
      const z = Z.value.split("/").pop() || "model.safetensors";
      u([{
        workflow: "__manual__",
        filename: z,
        url: M.value.trim(),
        targetPath: Z.value.trim()
      }]), M.value = "", Z.value = "", x.value = !1;
    }
    async function Q() {
      p.value = !0, k.value = null;
      try {
        d.value = await n();
      } catch (z) {
        k.value = z instanceof Error ? z.message : "Failed to load workspace models";
      } finally {
        p.value = !1;
      }
    }
    async function O() {
      try {
        const z = await f();
        $.value = z.path;
      } catch {
      }
    }
    return We(() => {
      Q(), O();
    }), (z, I) => (s(), o(W, null, [
      y(nt, null, {
        header: l(() => [
          y(at, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: I[2] || (I[2] = (me) => b.value = !0)
          }, {
            actions: l(() => [
              y(oe, {
                variant: "primary",
                size: "sm",
                disabled: w.value,
                onClick: te
              }, {
                default: l(() => [
                  g(a(w.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              y(oe, {
                variant: "primary",
                size: "sm",
                onClick: I[0] || (I[0] = (me) => R.value = !0)
              }, {
                default: l(() => [...I[15] || (I[15] = [
                  g(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              y(oe, {
                variant: "primary",
                size: "sm",
                onClick: I[1] || (I[1] = (me) => x.value = !0)
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
          F.value ? (s(), o("div", dv, [
            e("div", cv, [
              e("span", uv, a(F.value.message), 1),
              e("span", mv, a(F.value.current) + "/" + a(F.value.total), 1)
            ]),
            e("div", vv, [
              e("div", {
                class: "progress-fill",
                style: Pt({ width: `${F.value.current / F.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : r("", !0),
          y(Jt, {
            modelValue: _.value,
            "onUpdate:modelValue": I[3] || (I[3] = (me) => _.value = me),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          p.value || F.value ? (s(), S(Rt, {
            key: 0,
            message: F.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : k.value ? (s(), S(Mt, {
            key: 1,
            message: k.value,
            retry: !0,
            onRetry: Q
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            d.value.length ? (s(), S(ms, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                g(" Total: " + a(d.value.length) + " models • " + a(A(G.value)), 1)
              ]),
              _: 1
            })) : r("", !0),
            (s(!0), o(W, null, ie(D.value, (me) => (s(), S(Oe, {
              key: me.type,
              title: me.type.toUpperCase(),
              count: me.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: l(() => [
                (s(!0), o(W, null, ie(me.models, (ee) => (s(), S(ot, {
                  key: ee.sha256 || ee.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...I[17] || (I[17] = [
                    g("📦", -1)
                  ])]),
                  title: l(() => [
                    g(a(ee.filename), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(A(ee.size)), 1)
                  ]),
                  details: l(() => [
                    y(Ve, {
                      label: "Hash:",
                      value: ee.hash ? ee.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    y(oe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (be) => de(ee)
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
            E.value.length ? r("", !0) : (s(), S(yt, {
              key: 1,
              icon: "📭",
              message: _.value ? `No models match '${_.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      y(wt, {
        show: b.value,
        title: "About Workspace Model Index",
        onClose: I[4] || (I[4] = (me) => b.value = !1)
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
      T.value ? (s(), S(Ts, {
        key: 0,
        identifier: T.value,
        onClose: I[5] || (I[5] = (me) => T.value = null)
      }, null, 8, ["identifier"])) : r("", !0),
      (s(), S(Qe, { to: "body" }, [
        R.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[9] || (I[9] = Be((me) => R.value = !1, ["self"]))
        }, [
          e("div", fv, [
            e("div", pv, [
              I[20] || (I[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[6] || (I[6] = (me) => R.value = !1)
              }, "✕")
            ]),
            e("div", gv, [
              e("div", hv, [
                I[21] || (I[21] = e("label", null, "Current Directory", -1)),
                e("code", yv, a($.value || "Not set"), 1)
              ]),
              e("div", wv, [
                I[22] || (I[22] = e("label", null, "New Directory Path", -1)),
                y(ht, {
                  modelValue: C.value,
                  "onUpdate:modelValue": I[7] || (I[7] = (me) => C.value = me),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              I[23] || (I[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", kv, [
              y(ye, {
                variant: "secondary",
                onClick: I[8] || (I[8] = (me) => R.value = !1)
              }, {
                default: l(() => [...I[24] || (I[24] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              y(ye, {
                variant: "primary",
                disabled: !C.value.trim() || B.value,
                loading: B.value,
                onClick: Y
              }, {
                default: l(() => [
                  g(a(B.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : r("", !0)
      ])),
      (s(), S(Qe, { to: "body" }, [
        x.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[14] || (I[14] = Be((me) => x.value = !1, ["self"]))
        }, [
          e("div", bv, [
            e("div", _v, [
              I[25] || (I[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[10] || (I[10] = (me) => x.value = !1)
              }, "✕")
            ]),
            e("div", $v, [
              e("div", Cv, [
                I[26] || (I[26] = e("label", null, "Download URL", -1)),
                y(ht, {
                  modelValue: M.value,
                  "onUpdate:modelValue": I[11] || (I[11] = (me) => M.value = me),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", xv, [
                I[27] || (I[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                y(ht, {
                  modelValue: Z.value,
                  "onUpdate:modelValue": I[12] || (I[12] = (me) => Z.value = me),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              I[28] || (I[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", Sv, [
              y(ye, {
                variant: "secondary",
                onClick: I[13] || (I[13] = (me) => x.value = !1)
              }, {
                default: l(() => [...I[29] || (I[29] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              y(ye, {
                variant: "primary",
                disabled: !M.value.trim() || !Z.value.trim(),
                onClick: ue
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
}), Ev = /* @__PURE__ */ re(Iv, [["__scopeId", "data-v-73b78d84"]]), Pv = { class: "node-details" }, Rv = { class: "status-row" }, Mv = {
  key: 0,
  class: "detail-row"
}, Tv = { class: "value" }, Dv = { class: "detail-row" }, Lv = { class: "value" }, zv = {
  key: 1,
  class: "detail-row"
}, Uv = { class: "value mono" }, Nv = {
  key: 2,
  class: "detail-row"
}, Ov = ["href"], Av = {
  key: 3,
  class: "detail-row"
}, Bv = { class: "value mono small" }, Fv = { class: "detail-row" }, Vv = {
  key: 0,
  class: "value"
}, Wv = {
  key: 1,
  class: "workflow-list"
}, Gv = /* @__PURE__ */ le({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = U(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), v = U(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), u = U(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (m, d) => (s(), S(lt, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (p) => i("close"))
    }, {
      body: l(() => [
        e("div", Pv, [
          e("div", Rv, [
            d[2] || (d[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: pe(["status-badge", f.value])
            }, a(v.value), 3)
          ]),
          t.node.version ? (s(), o("div", Mv, [
            d[3] || (d[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", Tv, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : r("", !0),
          e("div", Dv, [
            d[4] || (d[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", Lv, a(u.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", zv, [
            d[5] || (d[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", Uv, a(t.node.registry_id), 1)
          ])) : r("", !0),
          t.node.repository ? (s(), o("div", Nv, [
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
            ], 8, Ov)
          ])) : r("", !0),
          t.node.download_url ? (s(), o("div", Av, [
            d[8] || (d[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", Bv, a(t.node.download_url), 1)
          ])) : r("", !0),
          d[10] || (d[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Fv, [
            d[9] || (d[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", Vv, " Not used in any workflows ")) : (s(), o("div", Wv, [
              (s(!0), o(W, null, ie(t.node.used_in_workflows, (p) => (s(), o("span", {
                key: p,
                class: "workflow-tag"
              }, a(p), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: l(() => [
        y(ye, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (p) => i("close"))
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
}), jv = /* @__PURE__ */ re(Gv, [["__scopeId", "data-v-b342f626"]]), Hv = { class: "dialog-message" }, Kv = {
  key: 0,
  class: "dialog-details"
}, qv = {
  key: 1,
  class: "dialog-warning"
}, Yv = /* @__PURE__ */ le({
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
    return (c, n) => (s(), S(lt, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (i) => c.$emit("cancel"))
    }, {
      body: l(() => [
        e("p", Hv, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", Kv, [
          (s(!0), o(W, null, ie(t.details, (i, f) => (s(), o("div", {
            key: f,
            class: "detail-item"
          }, " • " + a(i), 1))), 128))
        ])) : r("", !0),
        t.warning ? (s(), o("p", qv, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          g(" " + a(t.warning), 1)
        ])) : r("", !0)
      ]),
      footer: l(() => [
        y(ye, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (i) => c.$emit("cancel"))
        }, {
          default: l(() => [
            g(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), S(ye, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (i) => c.$emit("secondary"))
        }, {
          default: l(() => [
            g(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : r("", !0),
        y(ye, {
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
}), ao = /* @__PURE__ */ re(Yv, [["__scopeId", "data-v-3670b9f5"]]), Jv = { class: "mismatch-warning" }, Xv = { class: "version-mismatch" }, Qv = { class: "version-actual" }, Zv = { class: "version-expected" }, ef = { key: 0 }, tf = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, sf = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, of = /* @__PURE__ */ le({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getNodes: f, trackNodeAsDev: v, installNode: u, uninstallNode: m } = He(), d = h({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), p = h(!1), w = h(null), k = h(""), _ = h(!1), b = h(null), T = h(null), R = U(() => {
      if (!k.value.trim()) return d.value.nodes;
      const te = k.value.toLowerCase();
      return d.value.nodes.filter(
        (Y) => {
          var ue, Q;
          return Y.name.toLowerCase().includes(te) || ((ue = Y.description) == null ? void 0 : ue.toLowerCase().includes(te)) || ((Q = Y.repository) == null ? void 0 : Q.toLowerCase().includes(te));
        }
      );
    }), $ = U(
      () => R.value.filter((te) => te.installed && te.tracked)
    ), C = U(
      () => R.value.filter((te) => !te.installed && te.tracked)
    ), B = U(
      () => R.value.filter((te) => te.installed && !te.tracked)
    );
    function x(te) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[te] || te;
    }
    const M = U(() => n.versionMismatches.length > 0);
    function Z(te) {
      return !te.used_in_workflows || te.used_in_workflows.length === 0 ? "Not used in any workflows" : te.used_in_workflows.length === 1 ? te.used_in_workflows[0] : `${te.used_in_workflows.length} workflows`;
    }
    function F(te) {
      b.value = te;
    }
    function G() {
      i("open-node-manager");
    }
    function E(te) {
      T.value = {
        title: "Track as Development Node",
        message: `Track "${te}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            p.value = !0;
            const Y = await v(te);
            Y.status === "success" ? (i("toast", `✓ Node "${te}" tracked as development`, "success"), await de()) : i("toast", `Failed to track node: ${Y.message || "Unknown error"}`, "error");
          } catch (Y) {
            i("toast", `Error tracking node: ${Y instanceof Error ? Y.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function D(te) {
      T.value = {
        title: "Remove Untracked Node",
        message: `Remove "${te}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          T.value = null;
          try {
            p.value = !0;
            const Y = await m(te);
            Y.status === "success" ? (i("toast", `✓ Node "${te}" removed`, "success"), await de()) : i("toast", `Failed to remove node: ${Y.message || "Unknown error"}`, "error");
          } catch (Y) {
            i("toast", `Error removing node: ${Y instanceof Error ? Y.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function A(te) {
      T.value = {
        title: "Install Missing Node",
        message: `Install "${te}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            p.value = !0;
            const Y = await u(te);
            Y.status === "success" ? (i("toast", `✓ Node "${te}" installed`, "success"), await de()) : i("toast", `Failed to install node: ${Y.message || "Unknown error"}`, "error");
          } catch (Y) {
            i("toast", `Error installing node: ${Y instanceof Error ? Y.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    async function de() {
      p.value = !0, w.value = null;
      try {
        d.value = await f();
      } catch (te) {
        w.value = te instanceof Error ? te.message : "Failed to load nodes";
      } finally {
        p.value = !1;
      }
    }
    return We(de), (te, Y) => (s(), o(W, null, [
      y(nt, null, {
        header: l(() => [
          y(at, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: Y[0] || (Y[0] = (ue) => _.value = !0)
          }, {
            actions: l(() => [
              y(oe, {
                variant: "primary",
                size: "sm",
                onClick: G
              }, {
                default: l(() => [...Y[7] || (Y[7] = [
                  g(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          y(Jt, {
            modelValue: k.value,
            "onUpdate:modelValue": Y[1] || (Y[1] = (ue) => k.value = ue),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          p.value ? (s(), S(Rt, {
            key: 0,
            message: "Loading nodes..."
          })) : w.value ? (s(), S(Mt, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: de
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            d.value.total_count ? (s(), S(ms, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
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
            M.value ? (s(), S(Oe, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: t.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                e("div", Jv, [
                  Y[8] || (Y[8] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (s(!0), o(W, null, ie(t.versionMismatches, (ue) => (s(), S(ot, {
                  key: ue.name,
                  status: "warning"
                }, {
                  icon: l(() => [...Y[9] || (Y[9] = [
                    g("⚠", -1)
                  ])]),
                  title: l(() => [
                    g(a(ue.name), 1)
                  ]),
                  subtitle: l(() => [
                    e("span", Xv, [
                      e("span", Qv, a(ue.actual), 1),
                      Y[10] || (Y[10] = e("span", { class: "version-arrow" }, "→", -1)),
                      e("span", Zv, a(ue.expected), 1)
                    ])
                  ]),
                  actions: l(() => [
                    y(oe, {
                      variant: "warning",
                      size: "sm",
                      onClick: Y[2] || (Y[2] = (Q) => i("repair-environment"))
                    }, {
                      default: l(() => [...Y[11] || (Y[11] = [
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
            B.value.length ? (s(), S(Oe, {
              key: 2,
              title: "UNTRACKED",
              count: B.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(W, null, ie(B.value, (ue) => (s(), S(ot, {
                  key: ue.name,
                  status: "warning"
                }, {
                  icon: l(() => [...Y[12] || (Y[12] = [
                    g("?", -1)
                  ])]),
                  title: l(() => [
                    g(a(ue.name), 1)
                  ]),
                  subtitle: l(() => [...Y[13] || (Y[13] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: l(() => [
                    y(Ve, {
                      label: "Used by:",
                      value: Z(ue)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    y(oe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => F(ue)
                    }, {
                      default: l(() => [...Y[14] || (Y[14] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    y(oe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Q) => E(ue.name)
                    }, {
                      default: l(() => [...Y[15] || (Y[15] = [
                        g(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    y(oe, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Q) => D(ue.name)
                    }, {
                      default: l(() => [...Y[16] || (Y[16] = [
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
            $.value.length ? (s(), S(Oe, {
              key: 3,
              title: "INSTALLED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(W, null, ie($.value, (ue) => (s(), S(ot, {
                  key: ue.name,
                  status: "synced"
                }, {
                  icon: l(() => [
                    g(a(ue.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: l(() => [
                    g(a(ue.name), 1)
                  ]),
                  subtitle: l(() => [
                    ue.version ? (s(), o("span", ef, a(ue.source === "development" ? "" : "v") + a(ue.version), 1)) : (s(), o("span", tf, "version unknown")),
                    e("span", sf, " • " + a(x(ue.source)), 1)
                  ]),
                  details: l(() => [
                    y(Ve, {
                      label: "Used by:",
                      value: Z(ue)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    y(oe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => F(ue)
                    }, {
                      default: l(() => [...Y[17] || (Y[17] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    y(oe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: G
                    }, {
                      default: l(() => [...Y[18] || (Y[18] = [
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
            C.value.length ? (s(), S(Oe, {
              key: 4,
              title: "MISSING",
              count: C.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(W, null, ie(C.value, (ue) => (s(), S(ot, {
                  key: ue.name,
                  status: "missing"
                }, {
                  icon: l(() => [...Y[19] || (Y[19] = [
                    g("!", -1)
                  ])]),
                  title: l(() => [
                    g(a(ue.name), 1)
                  ]),
                  subtitle: l(() => [...Y[20] || (Y[20] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: l(() => [
                    y(Ve, {
                      label: "Required by:",
                      value: Z(ue)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    y(oe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => F(ue)
                    }, {
                      default: l(() => [...Y[21] || (Y[21] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    y(oe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Q) => A(ue.name)
                    }, {
                      default: l(() => [...Y[22] || (Y[22] = [
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
            !$.value.length && !C.value.length && !B.value.length ? (s(), S(yt, {
              key: 5,
              icon: "📭",
              message: k.value ? `No nodes match '${k.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      y(wt, {
        show: _.value,
        title: "About Custom Nodes",
        onClose: Y[4] || (Y[4] = (ue) => _.value = !1)
      }, {
        content: l(() => [...Y[23] || (Y[23] = [
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
          y(oe, {
            variant: "primary",
            onClick: Y[3] || (Y[3] = (ue) => _.value = !1)
          }, {
            default: l(() => [...Y[24] || (Y[24] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b.value ? (s(), S(jv, {
        key: 0,
        node: b.value,
        onClose: Y[5] || (Y[5] = (ue) => b.value = null)
      }, null, 8, ["node"])) : r("", !0),
      T.value ? (s(), S(ao, {
        key: 1,
        title: T.value.title,
        message: T.value.message,
        warning: T.value.warning,
        "confirm-label": T.value.confirmLabel,
        destructive: T.value.destructive,
        onConfirm: T.value.onConfirm,
        onCancel: Y[6] || (Y[6] = (ue) => T.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : r("", !0)
    ], 64));
  }
}), nf = /* @__PURE__ */ re(of, [["__scopeId", "data-v-1555a802"]]);
function lo(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const af = { class: "remote-url-display" }, lf = ["title"], rf = ["title"], df = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, cf = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, uf = /* @__PURE__ */ le({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = h(!1), i = U(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const v = c.url.slice(0, Math.floor(c.maxLength * 0.6)), u = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${v}...${u}`;
    });
    async function f() {
      try {
        await navigator.clipboard.writeText(c.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy URL:", v);
      }
    }
    return (v, u) => (s(), o("div", af, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(i.value), 9, lf),
      e("button", {
        class: pe(["copy-btn", { copied: n.value }]),
        onClick: f,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", cf, [...u[1] || (u[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", df, [...u[0] || (u[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, rf)
    ]));
  }
}), mf = /* @__PURE__ */ re(uf, [["__scopeId", "data-v-7768a58d"]]), vf = { class: "remote-title" }, ff = {
  key: 0,
  class: "default-badge"
}, pf = {
  key: 1,
  class: "sync-badge"
}, gf = {
  key: 0,
  class: "ahead"
}, hf = {
  key: 1,
  class: "behind"
}, yf = {
  key: 1,
  class: "synced"
}, wf = ["href"], kf = {
  key: 1,
  class: "remote-url-text"
}, bf = /* @__PURE__ */ le({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const c = t, n = U(() => c.fetchingRemote === c.remote.name), i = U(() => c.remote.is_default), f = U(() => c.syncStatus && c.syncStatus.behind > 0), v = U(() => c.syncStatus && c.syncStatus.ahead > 0), u = U(() => c.remote.push_url !== c.remote.fetch_url), m = U(() => {
      const p = c.remote.fetch_url, w = p.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return w ? `https://${w[1]}/${w[2]}` : p.startsWith("https://") || p.startsWith("http://") ? p.replace(/\.git$/, "") : null;
    }), d = U(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (p, w) => (s(), S(ot, {
      status: i.value ? "synced" : void 0
    }, Vt({
      icon: l(() => [
        g(a(i.value ? "🔗" : "🌐"), 1)
      ]),
      title: l(() => [
        e("div", vf, [
          e("span", null, a(t.remote.name), 1),
          i.value ? (s(), o("span", ff, "DEFAULT")) : r("", !0),
          t.syncStatus ? (s(), o("span", pf, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(W, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", gf, "↑" + a(t.syncStatus.ahead), 1)) : r("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", hf, "↓" + a(t.syncStatus.behind), 1)) : r("", !0)
            ], 64)) : (s(), o("span", yf, "✓ synced"))
          ])) : r("", !0)
        ])
      ]),
      subtitle: l(() => [
        m.value ? (s(), o("a", {
          key: 0,
          href: m.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: w[0] || (w[0] = Be(() => {
          }, ["stop"]))
        }, a(d.value), 9, wf)) : (s(), o("span", kf, a(d.value), 1))
      ]),
      actions: l(() => [
        y(oe, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: w[1] || (w[1] = (k) => p.$emit("fetch", t.remote.name))
        }, {
          default: l(() => [...w[6] || (w[6] = [
            g(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        y(oe, {
          variant: f.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: w[2] || (w[2] = (k) => p.$emit("pull", t.remote.name))
        }, {
          default: l(() => [
            g(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        y(oe, {
          variant: v.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: w[3] || (w[3] = (k) => p.$emit("push", t.remote.name))
        }, {
          default: l(() => [
            g(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        y(oe, {
          variant: "secondary",
          size: "xs",
          onClick: w[4] || (w[4] = (k) => p.$emit("edit", t.remote.name))
        }, {
          default: l(() => [...w[7] || (w[7] = [
            g(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        i.value ? r("", !0) : (s(), S(oe, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: w[5] || (w[5] = (k) => p.$emit("remove", t.remote.name))
        }, {
          default: l(() => [...w[8] || (w[8] = [
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
          t.remote.push_url !== t.remote.fetch_url ? (s(), S(Ve, {
            key: 0,
            label: "Push URL:"
          }, {
            default: l(() => [
              y(mf, {
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
}), _f = /* @__PURE__ */ re(bf, [["__scopeId", "data-v-8310f3a8"]]), $f = ["for"], Cf = {
  key: 0,
  class: "base-form-field-required"
}, xf = { class: "base-form-field-input" }, Sf = {
  key: 1,
  class: "base-form-field-error"
}, If = {
  key: 2,
  class: "base-form-field-hint"
}, Ef = /* @__PURE__ */ le({
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
      class: pe(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        g(a(t.label) + " ", 1),
        t.required ? (s(), o("span", Cf, "*")) : r("", !0)
      ], 8, $f)) : r("", !0),
      e("div", xf, [
        Me(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", Sf, a(t.error), 1)) : t.hint ? (s(), o("span", If, a(t.hint), 1)) : r("", !0)
    ], 2));
  }
}), bs = /* @__PURE__ */ re(Ef, [["__scopeId", "data-v-9a1cf296"]]), Pf = { class: "remote-form" }, Rf = { class: "form-header" }, Mf = { class: "form-body" }, Tf = {
  key: 0,
  class: "form-error"
}, Df = { class: "form-actions" }, Lf = /* @__PURE__ */ le({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = h({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), v = h(!1), u = h(null);
    xt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      f.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const m = U(() => f.value.name.trim() !== "" && f.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!m.value || v.value)) {
        u.value = null, v.value = !0;
        try {
          i("submit", f.value);
        } catch (p) {
          u.value = p instanceof Error ? p.message : "Failed to submit form";
        } finally {
          v.value = !1;
        }
      }
    }
    return (p, w) => (s(), o("div", Pf, [
      e("div", Rf, [
        y(ut, null, {
          default: l(() => [
            g(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Mf, [
        y(bs, {
          label: "Remote Name",
          required: ""
        }, {
          default: l(() => [
            y(ht, {
              modelValue: f.value.name,
              "onUpdate:modelValue": w[0] || (w[0] = (k) => f.value.name = k),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        y(bs, {
          label: "Fetch URL",
          required: ""
        }, {
          default: l(() => [
            y(ht, {
              modelValue: f.value.fetchUrl,
              "onUpdate:modelValue": w[1] || (w[1] = (k) => f.value.fetchUrl = k),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        y(bs, { label: "Push URL (optional)" }, {
          default: l(() => [
            y(ht, {
              modelValue: f.value.pushUrl,
              "onUpdate:modelValue": w[2] || (w[2] = (k) => f.value.pushUrl = k),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (s(), o("div", Tf, a(u.value), 1)) : r("", !0)
      ]),
      e("div", Df, [
        y(oe, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: v.value,
          onClick: d
        }, {
          default: l(() => [
            g(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        y(oe, {
          variant: "ghost",
          size: "md",
          onClick: w[3] || (w[3] = (k) => p.$emit("cancel"))
        }, {
          default: l(() => [...w[4] || (w[4] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), zf = /* @__PURE__ */ re(Lf, [["__scopeId", "data-v-56021b18"]]), Uf = { class: "conflict-summary-box" }, Nf = { class: "summary-header" }, Of = { class: "summary-text" }, Af = { key: 0 }, Bf = {
  key: 1,
  class: "all-resolved"
}, Ff = { class: "summary-progress" }, Vf = { class: "progress-bar" }, Wf = { class: "progress-text" }, Gf = /* @__PURE__ */ le({
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
    return (i, f) => (s(), o("div", Uf, [
      e("div", Nf, [
        f[0] || (f[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", Of, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (s(), o("p", Af, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (s(), o("p", Bf, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", Ff, [
        e("div", Vf, [
          e("div", {
            class: "progress-fill",
            style: Pt({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", Wf, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), jf = /* @__PURE__ */ re(Gf, [["__scopeId", "data-v-4e9e6cc9"]]), Hf = { class: "modal-header" }, Kf = { class: "modal-title" }, qf = { class: "modal-body" }, Yf = {
  key: 0,
  class: "error-box"
}, Jf = {
  key: 0,
  class: "error-hint"
}, Xf = {
  key: 1,
  class: "loading-state"
}, Qf = { class: "commit-summary" }, Zf = {
  key: 0,
  class: "changes-section"
}, ep = {
  key: 0,
  class: "change-group",
  open: ""
}, tp = { class: "change-count" }, sp = { class: "change-list" }, op = {
  key: 0,
  class: "conflict-badge"
}, np = {
  key: 1,
  class: "change-group"
}, ap = { class: "change-count" }, lp = { class: "change-list" }, ip = {
  key: 2,
  class: "change-group"
}, rp = { class: "change-count" }, dp = { class: "change-list" }, cp = {
  key: 2,
  class: "strategy-section"
}, up = { class: "radio-group" }, mp = { class: "radio-option" }, vp = { class: "radio-option" }, fp = { class: "radio-option" }, pp = {
  key: 3,
  class: "up-to-date"
}, gp = { class: "modal-actions" }, Ks = "comfygit.pullModelStrategy", hp = /* @__PURE__ */ le({
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
    const n = t, i = c, f = h(localStorage.getItem(Ks) || "skip");
    xt(f, ($) => {
      localStorage.setItem(Ks, $);
    });
    const v = U(() => {
      var $;
      return (($ = n.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), u = U(() => {
      if (!n.preview) return 0;
      const $ = n.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), m = U(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), d = U(() => {
      var $;
      return u.value > 0 || m.value > 0 || ((($ = n.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), p = U(() => n.preview && lo(n.preview) ? n.preview : null), w = U(() => {
      var $;
      return (($ = p.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), k = U(() => {
      var $;
      return (($ = n.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), _ = U(
      () => w.value > 0 && k.value === w.value
    ), b = U(() => !(!n.preview || n.preview.has_uncommitted_changes || p.value && !_.value));
    function T($) {
      if (!p.value) return !1;
      const C = $.replace(/\.json$/, "");
      return p.value.workflow_conflicts.some((B) => B.name === C);
    }
    function R($) {
      const C = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      i("pull", { modelStrategy: f.value, force: $, resolutions: C });
    }
    return ($, C) => {
      var B, x;
      return s(), S(Qe, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[11] || (C[11] = (M) => $.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: C[10] || (C[10] = Be(() => {
            }, ["stop"]))
          }, [
            e("div", Hf, [
              e("h3", Kf, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (M) => $.$emit("close"))
              }, "✕")
            ]),
            e("div", qf, [
              t.error ? (s(), o("div", Yf, [
                C[13] || (C[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  C[12] || (C[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  v.value ? (s(), o("p", Jf, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : r("", !0)
                ])
              ])) : t.loading ? (s(), o("div", Xf, [...C[14] || (C[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                g(" Loading preview... ", -1)
              ])])) : (B = t.preview) != null && B.has_uncommitted_changes ? (s(), o(W, { key: 2 }, [
                C[15] || (C[15] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "UNCOMMITTED CHANGES"),
                    e("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                C[16] || (C[16] = e("div", { class: "options-section" }, [
                  e("p", null, [
                    e("strong", null, "Options:")
                  ]),
                  e("ul", null, [
                    e("li", null, "Commit your changes first (recommended)"),
                    e("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : t.preview ? (s(), o(W, { key: 3 }, [
                e("div", Qf, [
                  C[17] || (C[17] = e("span", { class: "icon" }, "📥", -1)),
                  g(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                d.value ? (s(), o("div", Zf, [
                  C[21] || (C[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  u.value > 0 ? (s(), o("details", ep, [
                    e("summary", null, [
                      C[18] || (C[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", tp, a(u.value) + " changes", 1)
                    ]),
                    e("div", sp, [
                      (s(!0), o(W, null, ie(t.preview.changes.workflows.added, (M) => (s(), o("div", {
                        key: "a-" + M,
                        class: "change-item add"
                      }, " + " + a(M), 1))), 128)),
                      (s(!0), o(W, null, ie(t.preview.changes.workflows.modified, (M) => (s(), o("div", {
                        key: "m-" + M,
                        class: "change-item modify"
                      }, [
                        g(" ~ " + a(M) + " ", 1),
                        T(M) ? (s(), o("span", op, "CONFLICT")) : r("", !0)
                      ]))), 128)),
                      (s(!0), o(W, null, ie(t.preview.changes.workflows.deleted, (M) => (s(), o("div", {
                        key: "d-" + M,
                        class: "change-item delete"
                      }, " - " + a(M), 1))), 128))
                    ])
                  ])) : r("", !0),
                  m.value > 0 ? (s(), o("details", np, [
                    e("summary", null, [
                      C[19] || (C[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", ap, a(m.value) + " to install", 1)
                    ]),
                    e("div", lp, [
                      (s(!0), o(W, null, ie(t.preview.changes.nodes.to_install, (M) => (s(), o("div", {
                        key: M,
                        class: "change-item add"
                      }, " + " + a(M), 1))), 128))
                    ])
                  ])) : r("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", ip, [
                    e("summary", null, [
                      C[20] || (C[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", rp, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", dp, [
                      (s(!0), o(W, null, ie(t.preview.changes.models.referenced, (M) => (s(), o("div", {
                        key: M,
                        class: "change-item"
                      }, a(M), 1))), 128))
                    ])
                  ])) : r("", !0)
                ])) : r("", !0),
                p.value ? (s(), S(jf, {
                  key: 1,
                  "conflict-count": w.value,
                  "resolved-count": k.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : r("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", cp, [
                  C[26] || (C[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", up, [
                    e("label", mp, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[1] || (C[1] = (M) => f.value = M),
                        value: "all"
                      }, null, 512), [
                        [Ut, f.value]
                      ]),
                      C[22] || (C[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", vp, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[2] || (C[2] = (M) => f.value = M),
                        value: "required"
                      }, null, 512), [
                        [Ut, f.value]
                      ]),
                      C[23] || (C[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", fp, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[3] || (C[3] = (M) => f.value = M),
                        value: "skip"
                      }, null, 512), [
                        [Ut, f.value]
                      ]),
                      C[24] || (C[24] = e("span", null, "Skip model downloads", -1)),
                      C[25] || (C[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  C[27] || (C[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : r("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", pp, [
                  C[28] || (C[28] = e("span", { class: "icon" }, "✓", -1)),
                  g(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : r("", !0)
              ], 64)) : r("", !0)
            ]),
            e("div", gp, [
              y(oe, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (M) => $.$emit("close"))
              }, {
                default: l(() => [...C[29] || (C[29] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(W, { key: 0 }, [
                y(oe, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: C[5] || (C[5] = (M) => R(!1))
                }, {
                  default: l(() => [...C[30] || (C[30] = [
                    g(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                y(oe, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: C[6] || (C[6] = (M) => R(!0))
                }, {
                  default: l(() => [...C[31] || (C[31] = [
                    g(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (x = t.preview) != null && x.has_uncommitted_changes ? (s(), S(oe, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: C[7] || (C[7] = (M) => R(!0))
              }, {
                default: l(() => [...C[32] || (C[32] = [
                  g(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(W, { key: 2 }, [
                p.value && !_.value ? (s(), S(oe, {
                  key: 0,
                  variant: "primary",
                  onClick: C[8] || (C[8] = (M) => i("openConflictResolution"))
                }, {
                  default: l(() => [
                    g(" Resolve Conflicts (" + a(k.value) + "/" + a(w.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), S(oe, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !b.value,
                  onClick: C[9] || (C[9] = (M) => R(!1))
                }, {
                  default: l(() => [...C[33] || (C[33] = [
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
}), yp = /* @__PURE__ */ re(hp, [["__scopeId", "data-v-300c7b2f"]]), wp = { class: "modal-header" }, kp = { class: "modal-title" }, bp = { class: "modal-body" }, _p = {
  key: 0,
  class: "loading-state"
}, $p = {
  key: 1,
  class: "warning-box"
}, Cp = {
  key: 0,
  class: "commits-section"
}, xp = { class: "commit-list" }, Sp = { class: "commit-hash" }, Ip = { class: "commit-message" }, Ep = { class: "commit-date" }, Pp = { class: "force-option" }, Rp = { class: "checkbox-option" }, Mp = { class: "commit-summary" }, Tp = {
  key: 0,
  class: "commits-section"
}, Dp = { class: "commit-list" }, Lp = { class: "commit-hash" }, zp = { class: "commit-message" }, Up = { class: "commit-date" }, Np = {
  key: 1,
  class: "up-to-date"
}, Op = { class: "modal-actions" }, Ap = /* @__PURE__ */ le({
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
    const n = c, i = h(!1);
    function f(v) {
      n("push", { force: v });
    }
    return (v, u) => {
      var m, d, p;
      return s(), S(Qe, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: u[7] || (u[7] = (w) => v.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: u[6] || (u[6] = Be(() => {
            }, ["stop"]))
          }, [
            e("div", wp, [
              e("h3", kp, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: u[0] || (u[0] = (w) => v.$emit("close"))
              }, "✕")
            ]),
            e("div", bp, [
              t.loading ? (s(), o("div", _p, [...u[8] || (u[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                g(" Loading preview... ", -1)
              ])])) : (m = t.preview) != null && m.has_uncommitted_changes ? (s(), o("div", $p, [...u[9] || (u[9] = [
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
                t.preview.commits_ahead > 0 ? (s(), o("div", Cp, [
                  u[10] || (u[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", xp, [
                    (s(!0), o(W, null, ie(t.preview.commits, (w) => (s(), o("div", {
                      key: w.hash,
                      class: "commit-item"
                    }, [
                      e("span", Sp, a(w.short_hash || w.hash.slice(0, 7)), 1),
                      e("span", Ip, a(w.message), 1),
                      e("span", Ep, a(w.date_relative || w.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                e("div", Pp, [
                  e("label", Rp, [
                    Ue(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": u[1] || (u[1] = (w) => i.value = w)
                    }, null, 512), [
                      [ps, i.value]
                    ]),
                    u[11] || (u[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  u[12] || (u[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(W, { key: 3 }, [
                e("div", Mp, [
                  u[14] || (u[14] = e("span", { class: "icon" }, "📤", -1)),
                  g(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", Tp, [
                  u[15] || (u[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Dp, [
                    (s(!0), o(W, null, ie(t.preview.commits, (w) => (s(), o("div", {
                      key: w.hash,
                      class: "commit-item"
                    }, [
                      e("span", Lp, a(w.short_hash || w.hash.slice(0, 7)), 1),
                      e("span", zp, a(w.message), 1),
                      e("span", Up, a(w.date_relative || w.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", Np, [
                  u[16] || (u[16] = e("span", { class: "icon" }, "✓", -1)),
                  g(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : r("", !0)
            ]),
            e("div", Op, [
              y(oe, {
                variant: "secondary",
                onClick: u[2] || (u[2] = (w) => v.$emit("close"))
              }, {
                default: l(() => [...u[17] || (u[17] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (p = t.preview) != null && p.remote_has_new_commits ? (s(), o(W, { key: 0 }, [
                y(oe, {
                  variant: "secondary",
                  onClick: u[3] || (u[3] = (w) => v.$emit("pull-first"))
                }, {
                  default: l(() => [...u[18] || (u[18] = [
                    g(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                y(oe, {
                  variant: "destructive",
                  disabled: !i.value,
                  loading: t.pushing,
                  onClick: u[4] || (u[4] = (w) => f(!0))
                }, {
                  default: l(() => [...u[19] || (u[19] = [
                    g(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), S(oe, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: u[5] || (u[5] = (w) => f(!1))
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
}), Bp = /* @__PURE__ */ re(Ap, [["__scopeId", "data-v-bc6ded53"]]), Fp = { class: "resolution-choice-group" }, Vp = ["disabled"], Wp = ["disabled"], Gp = /* @__PURE__ */ le({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("div", Fp, [
      e("button", {
        class: pe(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (i) => c.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, Vp),
      e("button", {
        class: pe(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (i) => c.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, Wp)
    ]));
  }
}), jp = /* @__PURE__ */ re(Gp, [["__scopeId", "data-v-985715ed"]]), Hp = { class: "conflict-header" }, Kp = { class: "conflict-info" }, qp = { class: "workflow-name" }, Yp = { class: "conflict-description" }, Jp = {
  key: 0,
  class: "resolved-badge"
}, Xp = { class: "resolved-text" }, Qp = { class: "conflict-hashes" }, Zp = { class: "hash-item" }, eg = { class: "hash-item" }, tg = { class: "conflict-actions" }, sg = /* @__PURE__ */ le({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = h(n.resolution);
    xt(() => n.resolution, (d) => {
      f.value = d;
    }), xt(f, (d) => {
      d && i("resolve", d);
    });
    const v = U(() => f.value !== null), u = U(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), m = U(() => {
      switch (f.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (d, p) => {
      var w, k;
      return s(), o("div", {
        class: pe(["conflict-item", { resolved: v.value }])
      }, [
        e("div", Hp, [
          p[2] || (p[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", Kp, [
            e("code", qp, a(t.conflict.name) + ".json", 1),
            e("div", Yp, a(u.value), 1)
          ]),
          v.value ? (s(), o("div", Jp, [
            p[1] || (p[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", Xp, a(m.value), 1)
          ])) : r("", !0)
        ]),
        e("div", Qp, [
          e("span", Zp, [
            p[3] || (p[3] = g("Your: ", -1)),
            e("code", null, a(((w = t.conflict.base_hash) == null ? void 0 : w.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", eg, [
            p[4] || (p[4] = g("Theirs: ", -1)),
            e("code", null, a(((k = t.conflict.target_hash) == null ? void 0 : k.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", tg, [
          y(jp, {
            modelValue: f.value,
            "onUpdate:modelValue": p[0] || (p[0] = (_) => f.value = _),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), og = /* @__PURE__ */ re(sg, [["__scopeId", "data-v-506d3bbf"]]), ng = { class: "resolution-content" }, ag = {
  key: 0,
  class: "error-box"
}, lg = { class: "resolution-header" }, ig = { class: "header-stats" }, rg = { class: "stat" }, dg = { class: "stat-value" }, cg = { class: "stat resolved" }, ug = { class: "stat-value" }, mg = {
  key: 0,
  class: "stat pending"
}, vg = { class: "stat-value" }, fg = { class: "conflicts-list" }, pg = {
  key: 1,
  class: "all-resolved-message"
}, gg = /* @__PURE__ */ le({
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
    const n = t, i = c, f = U(() => n.resolutions.size), v = U(() => n.workflowConflicts.length - f.value), u = U(() => f.value === n.workflowConflicts.length), m = U(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(_) {
      const b = n.resolutions.get(_);
      return (b == null ? void 0 : b.resolution) ?? null;
    }
    function p(_, b) {
      i("resolve", _, b);
    }
    function w() {
      i("close");
    }
    function k() {
      i("apply");
    }
    return (_, b) => (s(), S(lt, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: w
    }, {
      body: l(() => [
        e("div", ng, [
          t.error ? (s(), o("div", ag, [
            b[1] || (b[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              b[0] || (b[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : r("", !0),
          e("div", lg, [
            e("div", ig, [
              e("div", rg, [
                e("span", dg, a(t.workflowConflicts.length), 1),
                b[2] || (b[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", cg, [
                e("span", ug, a(f.value), 1),
                b[3] || (b[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              v.value > 0 ? (s(), o("div", mg, [
                e("span", vg, a(v.value), 1),
                b[4] || (b[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : r("", !0)
            ]),
            b[5] || (b[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", fg, [
            (s(!0), o(W, null, ie(t.workflowConflicts, (T) => (s(), S(og, {
              key: T.name,
              conflict: T,
              resolution: d(T.name),
              onResolve: (R) => p(T.name, R)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          u.value ? (s(), o("div", pg, [
            b[6] || (b[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(m.value) + '" to continue.', 1)
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        y(ye, {
          variant: "secondary",
          onClick: w
        }, {
          default: l(() => [...b[7] || (b[7] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b[8] || (b[8] = e("div", { class: "footer-spacer" }, null, -1)),
        y(ye, {
          variant: "primary",
          disabled: !u.value || t.validating,
          loading: t.validating,
          onClick: k
        }, {
          default: l(() => [
            g(a(m.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), hg = /* @__PURE__ */ re(gg, [["__scopeId", "data-v-c58d150d"]]), yg = { class: "node-conflict-item" }, wg = { class: "node-header" }, kg = { class: "node-name" }, bg = { class: "node-id" }, _g = { class: "version-comparison" }, $g = { class: "version yours" }, Cg = { class: "version theirs" }, xg = { class: "chosen-version" }, Sg = { class: "chosen" }, Ig = { class: "chosen-reason" }, Eg = { class: "affected-workflows" }, Pg = { class: "wf-source" }, Rg = { class: "wf-version" }, Mg = /* @__PURE__ */ le({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", yg, [
      e("div", wg, [
        e("code", kg, a(t.conflict.node_name), 1),
        e("span", bg, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", _g, [
        e("div", $g, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", Cg, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", xg, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", Sg, a(t.conflict.chosen_version), 1),
        e("span", Ig, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", Eg, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (s(!0), o(W, null, ie(t.conflict.affected_workflows, (i) => (s(), o("li", {
            key: i.name
          }, [
            e("code", null, a(i.name), 1),
            e("span", Pg, "(" + a(i.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", Rg, "needs v" + a(i.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), Tg = /* @__PURE__ */ re(Mg, [["__scopeId", "data-v-8b626725"]]), Dg = { class: "validation-content" }, Lg = {
  key: 0,
  class: "compatible-message"
}, zg = { class: "conflicts-list" }, Ug = {
  key: 2,
  class: "warnings-section"
}, Ng = /* @__PURE__ */ le({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = U(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (v, u) => (s(), S(lt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: u[3] || (u[3] = (m) => i("cancel"))
    }, {
      body: l(() => [
        e("div", Dg, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (s(), o("div", Lg, [
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
            e("div", zg, [
              (s(!0), o(W, null, ie(t.validation.node_conflicts, (m) => (s(), S(Tg, {
                key: m.node_id,
                conflict: m
              }, null, 8, ["conflict"]))), 128))
            ]),
            u[7] || (u[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : r("", !0),
          t.validation.warnings.length > 0 ? (s(), o("div", Ug, [
            u[8] || (u[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (s(!0), o(W, null, ie(t.validation.warnings, (m, d) => (s(), o("li", { key: d }, a(m), 1))), 128))
            ])
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        y(ye, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (m) => i("cancel"))
        }, {
          default: l(() => [...u[9] || (u[9] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u[11] || (u[11] = e("div", { class: "footer-spacer" }, null, -1)),
        y(ye, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (m) => i("goBack"))
        }, {
          default: l(() => [...u[10] || (u[10] = [
            g(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        y(ye, {
          variant: "primary",
          loading: t.executing,
          onClick: u[2] || (u[2] = (m) => i("proceed"))
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
}), Og = /* @__PURE__ */ re(Ng, [["__scopeId", "data-v-fefd26ed"]]), Ag = { key: 0 }, Bg = /* @__PURE__ */ le({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: c }) {
    const n = c, {
      getRemotes: i,
      addRemote: f,
      removeRemote: v,
      updateRemoteUrl: u,
      fetchRemote: m,
      getRemoteSyncStatus: d,
      getPullPreview: p,
      pullFromRemote: w,
      getPushPreview: k,
      pushToRemote: _,
      validateMerge: b
    } = He(), T = h([]), R = h(null), $ = h({}), C = h(!1), B = h(null), x = h(""), M = h(!1), Z = h(null), F = h(!1), G = h("add"), E = h({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), D = U(() => {
      if (!x.value.trim()) return T.value;
      const V = x.value.toLowerCase();
      return T.value.filter(
        (ne) => ne.name.toLowerCase().includes(V) || ne.fetch_url.toLowerCase().includes(V) || ne.push_url.toLowerCase().includes(V)
      );
    });
    async function A() {
      C.value = !0, B.value = null;
      try {
        const V = await i();
        T.value = V.remotes, R.value = V.current_branch_tracking || null, await Promise.all(
          V.remotes.map(async (ne) => {
            const ke = await d(ne.name);
            ke && ($.value[ne.name] = ke);
          })
        );
      } catch (V) {
        B.value = V instanceof Error ? V.message : "Failed to load remotes";
      } finally {
        C.value = !1;
      }
    }
    function de() {
      G.value = "add", E.value = { name: "", fetchUrl: "", pushUrl: "" }, F.value = !0;
    }
    function te(V) {
      const ne = T.value.find((ke) => ke.name === V);
      ne && (G.value = "edit", E.value = {
        name: ne.name,
        fetchUrl: ne.fetch_url,
        pushUrl: ne.push_url
      }, F.value = !0);
    }
    async function Y(V) {
      try {
        G.value === "add" ? await f(V.name, V.fetchUrl) : await u(V.name, V.fetchUrl, V.pushUrl || void 0), F.value = !1, await A();
      } catch (ne) {
        B.value = ne instanceof Error ? ne.message : "Operation failed";
      }
    }
    function ue() {
      F.value = !1, E.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function Q(V) {
      Z.value = V;
      try {
        await m(V);
        const ne = await d(V);
        ne && ($.value[V] = ne), n("toast", `✓ Fetched from ${V}`, "success");
      } catch (ne) {
        n("toast", ne instanceof Error ? ne.message : "Fetch failed", "error");
      } finally {
        Z.value = null;
      }
    }
    async function O(V) {
      if (confirm(`Remove remote "${V}"?`))
        try {
          await v(V), await A();
        } catch (ne) {
          B.value = ne instanceof Error ? ne.message : "Failed to remove remote";
        }
    }
    function z() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const I = h("idle"), me = U(() => I.value === "pull_preview"), ee = U(
      () => I.value === "resolving" || I.value === "validating"
    ), be = U(
      () => I.value === "validation_review" || I.value === "executing"
    ), Ie = h(!1), Te = h(null), Ae = h(!1), ce = h(null), ge = h(!1), xe = h(null), se = h(null), ae = h(/* @__PURE__ */ new Map()), we = h(null), ze = h(null), Ze = U(() => xe.value && lo(xe.value) ? xe.value : null);
    async function et(V) {
      ce.value = V, I.value = "pull_preview", ge.value = !0, xe.value = null, se.value = null;
      try {
        xe.value = await p(V);
      } catch (ne) {
        se.value = ne instanceof Error ? ne.message : "Failed to load pull preview";
      } finally {
        ge.value = !1;
      }
    }
    function $e() {
      I.value = "idle", xe.value = null, se.value = null, ce.value = null;
    }
    async function tt(V) {
      if (!ce.value) return;
      I.value = "executing", se.value = null;
      const ne = ce.value;
      try {
        const ke = await w(ne, V);
        if (ke.rolled_back) {
          se.value = `Pull failed and was rolled back: ${ke.error || "Unknown error"}`, I.value = "pull_preview";
          return;
        }
        Le(), I.value = "idle", n("toast", `✓ Pulled from ${ne}`, "success"), await A();
      } catch (ke) {
        se.value = ke instanceof Error ? ke.message : "Pull failed", I.value = "pull_preview";
      }
    }
    function Ye() {
      Ze.value && (I.value = "resolving", ze.value = null);
    }
    function je(V, ne) {
      ae.value.set(V, { name: V, resolution: ne });
    }
    function rt() {
      I.value = "pull_preview";
    }
    async function _e() {
      I.value = "validating", ze.value = null;
      try {
        const V = Array.from(ae.value.values());
        we.value = await b(ce.value, V), I.value = "validation_review";
      } catch (V) {
        ze.value = V instanceof Error ? V.message : "Validation failed", I.value = "resolving";
      }
    }
    async function Re() {
      I.value = "executing";
      const V = ce.value;
      try {
        const ne = Array.from(ae.value.values()), ke = await w(V, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: ne
        });
        if (ke.rolled_back) {
          se.value = `Pull failed and was rolled back: ${ke.error || "Unknown error"}`, I.value = "pull_preview";
          return;
        }
        Le(), I.value = "idle", n("toast", `✓ Pulled from ${V}`, "success"), await A();
      } catch (ne) {
        se.value = ne instanceof Error ? ne.message : "Pull failed", I.value = "validation_review";
      }
    }
    function st() {
      I.value = "resolving";
    }
    function Je() {
      Le(), I.value = "idle";
    }
    function Le() {
      ae.value.clear(), we.value = null, ze.value = null, se.value = null, xe.value = null, ce.value = null;
    }
    async function fe(V) {
      ce.value = V, Ie.value = !0, ge.value = !0, Te.value = null;
      try {
        Te.value = await k(V);
      } catch (ne) {
        B.value = ne instanceof Error ? ne.message : "Failed to load push preview";
      } finally {
        ge.value = !1;
      }
    }
    function K() {
      Ie.value = !1, Te.value = null, ce.value = null;
    }
    async function J(V) {
      if (!ce.value) return;
      Ae.value = !0;
      const ne = ce.value;
      try {
        await _(ne, V), K(), n("toast", `✓ Pushed to ${ne}`, "success"), await A();
      } catch (ke) {
        n("toast", ke instanceof Error ? ke.message : "Push failed", "error");
      } finally {
        Ae.value = !1;
      }
    }
    function P() {
      const V = ce.value;
      K(), V && et(V);
    }
    return We(A), (V, ne) => (s(), o(W, null, [
      y(nt, null, {
        header: l(() => [
          y(at, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: ne[0] || (ne[0] = (ke) => M.value = !0)
          }, {
            actions: l(() => [
              F.value ? r("", !0) : (s(), S(oe, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: de
              }, {
                default: l(() => [...ne[3] || (ne[3] = [
                  g(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          F.value ? r("", !0) : (s(), S(Jt, {
            key: 0,
            modelValue: x.value,
            "onUpdate:modelValue": ne[1] || (ne[1] = (ke) => x.value = ke),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: l(() => [
          C.value ? (s(), S(Rt, {
            key: 0,
            message: "Loading remotes..."
          })) : B.value ? (s(), S(Mt, {
            key: 1,
            message: B.value,
            retry: !0,
            onRetry: A
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            F.value ? (s(), S(zf, {
              key: 0,
              mode: G.value,
              "remote-name": E.value.name,
              "fetch-url": E.value.fetchUrl,
              "push-url": E.value.pushUrl,
              onSubmit: Y,
              onCancel: ue
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : r("", !0),
            T.value.length && !F.value ? (s(), S(ms, {
              key: 1,
              variant: "compact"
            }, {
              default: l(() => [
                g(" Total: " + a(T.value.length) + " remote" + a(T.value.length !== 1 ? "s" : "") + " ", 1),
                R.value ? (s(), o("span", Ag, " • Tracking: " + a(R.value.remote) + "/" + a(R.value.branch), 1)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            D.value.length && !F.value ? (s(), S(Oe, {
              key: 2,
              title: "REMOTES",
              count: D.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ie(D.value, (ke) => (s(), S(_f, {
                  key: ke.name,
                  remote: ke,
                  "sync-status": $.value[ke.name],
                  "fetching-remote": Z.value,
                  onFetch: Q,
                  onEdit: te,
                  onRemove: O,
                  onPull: et,
                  onPush: fe
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !D.value.length && !F.value ? (s(), S(yt, {
              key: 3,
              icon: "🌐",
              message: x.value ? `No remotes match '${x.value}'` : "No remotes configured."
            }, {
              actions: l(() => [
                y(oe, {
                  variant: "primary",
                  onClick: de
                }, {
                  default: l(() => [...ne[4] || (ne[4] = [
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
      y(wt, {
        show: M.value,
        title: "About Git Remotes",
        onClose: ne[2] || (ne[2] = (ke) => M.value = !1)
      }, {
        content: l(() => [...ne[5] || (ne[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            g(" The "),
            e("strong", null, '"origin"'),
            g(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: l(() => [
          y(oe, {
            variant: "link",
            onClick: z
          }, {
            default: l(() => [...ne[6] || (ne[6] = [
              g(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      y(yp, {
        show: me.value,
        "remote-name": ce.value || "",
        preview: xe.value,
        loading: ge.value,
        pulling: I.value === "executing",
        error: se.value,
        "conflict-resolutions": ae.value,
        onClose: $e,
        onPull: tt,
        onOpenConflictResolution: Ye
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      y(Bp, {
        show: Ie.value,
        "remote-name": ce.value || "",
        preview: Te.value,
        loading: ge.value,
        pushing: Ae.value,
        onClose: K,
        onPush: J,
        onPullFirst: P
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      ee.value && Ze.value ? (s(), S(hg, {
        key: 0,
        "workflow-conflicts": Ze.value.workflow_conflicts,
        resolutions: ae.value,
        "operation-type": "pull",
        validating: I.value === "validating",
        error: ze.value,
        onClose: rt,
        onResolve: je,
        onApply: _e
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : r("", !0),
      be.value && we.value ? (s(), S(Og, {
        key: 1,
        validation: we.value,
        "operation-type": "pull",
        executing: I.value === "executing",
        onProceed: Re,
        onGoBack: st,
        onCancel: Je
      }, null, 8, ["validation", "executing"])) : r("", !0)
    ], 64));
  }
}), Fg = /* @__PURE__ */ re(Bg, [["__scopeId", "data-v-9ae3b76d"]]), Vg = { class: "setting-info" }, Wg = { class: "setting-label" }, Gg = {
  key: 0,
  class: "required-marker"
}, jg = {
  key: 0,
  class: "setting-description"
}, Hg = { class: "setting-control" }, Kg = /* @__PURE__ */ le({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: pe(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Vg, [
        e("div", Wg, [
          g(a(t.label) + " ", 1),
          t.required ? (s(), o("span", Gg, "*")) : r("", !0)
        ]),
        t.description ? (s(), o("div", jg, a(t.description), 1)) : r("", !0)
      ]),
      e("div", Hg, [
        Me(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), _s = /* @__PURE__ */ re(Kg, [["__scopeId", "data-v-cb5d236c"]]), qg = { class: "toggle" }, Yg = ["checked", "disabled"], Jg = /* @__PURE__ */ le({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", qg, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, Yg),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Xg = /* @__PURE__ */ re(Jg, [["__scopeId", "data-v-71c0f550"]]), Qg = { class: "workspace-settings-content" }, Zg = { class: "settings-section" }, eh = { class: "path-setting" }, th = { class: "path-value" }, sh = { class: "path-setting" }, oh = { class: "path-value" }, nh = { class: "settings-section" }, ah = { class: "settings-section" }, lh = { class: "settings-section" }, ih = /* @__PURE__ */ le({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(t, { expose: c, emit: n }) {
    const i = t, f = n, { getConfig: v, updateConfig: u } = He(), m = h(!1), d = h(null), p = h(null), w = h(null), k = h(null), _ = h(""), b = h(""), T = h(!1);
    function R(F) {
      return F.join(" ");
    }
    function $(F) {
      return F.trim() ? F.trim().split(/\s+/) : [];
    }
    const C = U(() => {
      if (!k.value) return !1;
      const F = _.value !== (k.value.civitai_api_key || ""), G = b.value !== R(k.value.comfyui_extra_args || []);
      return F || G;
    });
    async function B() {
      m.value = !0, d.value = null;
      try {
        w.value = await v(i.workspacePath || void 0), k.value = { ...w.value }, _.value = w.value.civitai_api_key || "", b.value = R(w.value.comfyui_extra_args || []);
        const F = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        T.value = F === "true";
      } catch (F) {
        d.value = F instanceof Error ? F.message : "Failed to load settings";
      } finally {
        m.value = !1;
      }
    }
    async function x() {
      var F, G;
      p.value = null;
      try {
        const E = {};
        _.value !== (((F = k.value) == null ? void 0 : F.civitai_api_key) || "") && (E.civitai_api_key = _.value || null), b.value !== R(((G = k.value) == null ? void 0 : G.comfyui_extra_args) || []) && (E.comfyui_extra_args = $(b.value)), await u(E, i.workspacePath || void 0), await B(), p.value = { type: "success", message: "Settings saved successfully" }, f("saved"), setTimeout(() => {
          p.value = null;
        }, 3e3);
      } catch (E) {
        const D = E instanceof Error ? E.message : "Failed to save settings";
        p.value = { type: "error", message: D }, f("error", D);
      }
    }
    function M() {
      k.value && (_.value = k.value.civitai_api_key || "", b.value = R(k.value.comfyui_extra_args || []), p.value = null);
    }
    function Z(F) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(F)), console.log("[ComfyGit] Auto-refresh setting saved:", F);
    }
    return c({
      saveSettings: x,
      resetSettings: M,
      hasChanges: C,
      loadSettings: B
    }), We(B), (F, G) => (s(), o("div", Qg, [
      m.value ? (s(), S(Rt, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (s(), S(Mt, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: B
      }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
        y(Oe, { title: "WORKSPACE PATHS" }, {
          default: l(() => {
            var E, D;
            return [
              e("div", Zg, [
                e("div", eh, [
                  G[3] || (G[3] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                  G[4] || (G[4] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  e("div", th, a(((E = w.value) == null ? void 0 : E.workspace_path) || "Loading..."), 1)
                ]),
                e("div", sh, [
                  G[5] || (G[5] = e("div", { class: "path-label" }, "Models Directory", -1)),
                  G[6] || (G[6] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  e("div", oh, a(((D = w.value) == null ? void 0 : D.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        y(Oe, { title: "API CREDENTIALS" }, {
          default: l(() => [
            e("div", nh, [
              y(_s, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: l(() => [
                  y(gs, {
                    modelValue: _.value,
                    "onUpdate:modelValue": G[0] || (G[0] = (E) => _.value = E),
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
        y(Oe, { title: "COMFYUI SETTINGS" }, {
          default: l(() => [
            e("div", ah, [
              y(_s, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: l(() => [
                  y(gs, {
                    modelValue: b.value,
                    "onUpdate:modelValue": G[1] || (G[1] = (E) => b.value = E),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              G[7] || (G[7] = e("div", { class: "setting-hint" }, [
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
        y(Oe, { title: "UI SETTINGS" }, {
          default: l(() => [
            e("div", lh, [
              y(_s, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: l(() => [
                  y(Xg, {
                    modelValue: T.value,
                    "onUpdate:modelValue": [
                      G[2] || (G[2] = (E) => T.value = E),
                      Z
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        p.value ? (s(), S(ms, {
          key: 0,
          variant: (p.value.type === "success", "compact")
        }, {
          default: l(() => [
            e("span", {
              style: Pt({ color: p.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, a(p.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : r("", !0)
      ], 64))
    ]));
  }
}), io = /* @__PURE__ */ re(ih, [["__scopeId", "data-v-9f44552d"]]), rh = /* @__PURE__ */ le({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const c = h(null);
    function n() {
      console.log("[ComfyGit] Settings saved");
    }
    return (i, f) => (s(), S(nt, null, {
      header: l(() => [
        y(at, { title: "WORKSPACE SETTINGS" }, {
          actions: l(() => {
            var v, u;
            return [
              y(oe, {
                variant: "primary",
                size: "sm",
                disabled: !((v = c.value) != null && v.hasChanges),
                onClick: f[0] || (f[0] = (m) => {
                  var d;
                  return (d = c.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: l(() => [...f[2] || (f[2] = [
                  g(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (u = c.value) != null && u.hasChanges ? (s(), S(oe, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: f[1] || (f[1] = (m) => {
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
        y(io, {
          ref_key: "contentRef",
          ref: c,
          onSaved: n
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), dh = /* @__PURE__ */ le({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c, getWorkspaceLogPath: n, openFile: i } = He(), f = h([]), v = h(!1), u = h(null), m = h(!1), d = h(null), p = h(null), w = h(!1), k = U(() => f.value.length === 0 ? [] : f.value.map((R) => ({
      text: `${R.timestamp} - ${R.name} - ${R.level} - ${R.func}:${R.line} - ${R.message}`,
      level: R.level
    })));
    async function _() {
      v.value = !0, u.value = null;
      try {
        f.value = await c(void 0, 500);
      } catch (R) {
        u.value = R instanceof Error ? R.message : "Failed to load workspace logs";
      } finally {
        v.value = !1, setTimeout(() => {
          var R;
          (R = d.value) != null && R.parentElement && (d.value.parentElement.scrollTop = d.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function b() {
      try {
        const R = await n();
        R.exists && (p.value = R.path);
      } catch {
      }
    }
    async function T() {
      if (p.value) {
        w.value = !0;
        try {
          await i(p.value);
        } catch (R) {
          console.error("Failed to open log file:", R);
        } finally {
          w.value = !1;
        }
      }
    }
    return We(() => {
      _(), b();
    }), (R, $) => (s(), o(W, null, [
      y(nt, null, {
        header: l(() => [
          y(at, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (C) => m.value = !0)
          }, {
            actions: l(() => [
              y(oe, {
                variant: "secondary",
                size: "sm",
                onClick: T,
                disabled: !p.value || w.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  g(a(w.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              y(oe, {
                variant: "secondary",
                size: "sm",
                onClick: _,
                disabled: v.value
              }, {
                default: l(() => [
                  g(a(v.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          v.value ? (s(), S(Rt, {
            key: 0,
            message: "Loading workspace logs..."
          })) : u.value ? (s(), S(Mt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            f.value.length === 0 ? (s(), S(yt, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: d,
              class: "log-output"
            }, [
              (s(!0), o(W, null, ie(k.value, (C, B) => (s(), o("div", {
                key: B,
                class: pe(`log-line log-level-${C.level.toLowerCase()}`)
              }, a(C.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      y(wt, {
        show: m.value,
        title: "About Workspace Logs",
        onClose: $[2] || ($[2] = (C) => m.value = !1)
      }, {
        content: l(() => [...$[3] || ($[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
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
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: l(() => [
          y(oe, {
            variant: "primary",
            onClick: $[1] || ($[1] = (C) => m.value = !1)
          }, {
            default: l(() => [...$[4] || ($[4] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), ch = /* @__PURE__ */ re(dh, [["__scopeId", "data-v-7f05352a"]]), uh = /* @__PURE__ */ le({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n, getEnvironmentLogPath: i, openFile: f } = He(), v = h([]), u = h(!1), m = h(null), d = h(!1), p = h("production"), w = h(null), k = h(null), _ = h(!1), b = U(() => v.value.length === 0 ? [] : v.value.map((C) => ({
      text: `${C.timestamp} - ${C.name} - ${C.level} - ${C.func}:${C.line} - ${C.message}`,
      level: C.level
    })));
    async function T() {
      u.value = !0, m.value = null;
      try {
        v.value = await c(void 0, 500);
        try {
          const C = await n();
          p.value = C.environment || "production";
        } catch {
        }
      } catch (C) {
        m.value = C instanceof Error ? C.message : "Failed to load environment logs";
      } finally {
        u.value = !1, setTimeout(() => {
          var C;
          (C = w.value) != null && C.parentElement && (w.value.parentElement.scrollTop = w.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function R() {
      try {
        const C = await i();
        C.exists && (k.value = C.path);
      } catch {
      }
    }
    async function $() {
      if (k.value) {
        _.value = !0;
        try {
          await f(k.value);
        } catch (C) {
          console.error("Failed to open log file:", C);
        } finally {
          _.value = !1;
        }
      }
    }
    return We(() => {
      T(), R();
    }), (C, B) => (s(), o(W, null, [
      y(nt, null, {
        header: l(() => [
          y(at, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: B[0] || (B[0] = (x) => d.value = !0)
          }, {
            actions: l(() => [
              y(oe, {
                variant: "secondary",
                size: "sm",
                onClick: $,
                disabled: !k.value || _.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  g(a(_.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              y(oe, {
                variant: "secondary",
                size: "sm",
                onClick: T,
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
          u.value ? (s(), S(Rt, {
            key: 0,
            message: "Loading environment logs..."
          })) : m.value ? (s(), S(Mt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            v.value.length === 0 ? (s(), S(yt, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: w,
              class: "log-output"
            }, [
              (s(!0), o(W, null, ie(b.value, (x, M) => (s(), o("div", {
                key: M,
                class: pe(`log-line log-level-${x.level.toLowerCase()}`)
              }, a(x.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      y(wt, {
        show: d.value,
        title: "About Environment Logs",
        onClose: B[2] || (B[2] = (x) => d.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            B[3] || (B[3] = g(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(p.value), 1),
            B[4] || (B[4] = g(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          B[5] || (B[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          ], -1)),
          B[6] || (B[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: l(() => [
          y(oe, {
            variant: "primary",
            onClick: B[1] || (B[1] = (x) => d.value = !1)
          }, {
            default: l(() => [...B[7] || (B[7] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), mh = /* @__PURE__ */ re(uh, [["__scopeId", "data-v-6f8db7ce"]]), vh = { class: "env-title" }, fh = {
  key: 0,
  class: "current-badge"
}, ph = {
  key: 0,
  class: "branch-info"
}, gh = /* @__PURE__ */ le({
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
    return (c, n) => (s(), S(ot, {
      status: t.isCurrent ? "synced" : void 0
    }, Vt({
      icon: l(() => [
        g(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: l(() => [
        e("div", vh, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", fh, "CURRENT")) : r("", !0)
        ])
      ]),
      subtitle: l(() => [
        t.currentBranch ? (s(), o("span", ph, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          g(" " + a(t.currentBranch), 1)
        ])) : r("", !0)
      ]),
      actions: l(() => [
        Me(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: l(() => [
          y(Ve, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          y(Ve, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          y(Ve, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), S(Ve, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : r("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), hh = /* @__PURE__ */ re(gh, [["__scopeId", "data-v-9231917a"]]), yh = { class: "env-details" }, wh = { class: "status-row" }, kh = {
  key: 0,
  class: "detail-row"
}, bh = { class: "value mono" }, _h = {
  key: 1,
  class: "detail-row"
}, $h = { class: "value mono small" }, Ch = { class: "detail-row" }, xh = { class: "value" }, Sh = { class: "detail-row" }, Ih = { class: "value" }, Eh = { class: "detail-row" }, Ph = { class: "value" }, Rh = {
  key: 2,
  class: "section-divider"
}, Mh = {
  key: 3,
  class: "detail-row"
}, Th = { class: "value" }, Dh = {
  key: 4,
  class: "detail-row"
}, Lh = { class: "value" }, zh = { class: "footer-actions" }, Uh = /* @__PURE__ */ le({
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
        const v = new Date(f), m = (/* @__PURE__ */ new Date()).getTime() - v.getTime(), d = Math.floor(m / 6e4), p = Math.floor(m / 36e5), w = Math.floor(m / 864e5);
        return d < 1 ? "just now" : d < 60 ? `${d} ${d === 1 ? "minute" : "minutes"} ago` : p < 24 ? `${p} ${p === 1 ? "hour" : "hours"} ago` : w < 30 ? `${w} ${w === 1 ? "day" : "days"} ago` : v.toLocaleDateString();
      } catch {
        return f;
      }
    }
    return (f, v) => (s(), S(lt, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[2] || (v[2] = (u) => n("close"))
    }, {
      body: l(() => [
        e("div", yh, [
          e("div", wh, [
            v[3] || (v[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: pe(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", kh, [
            v[4] || (v[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", bh, a(t.environment.current_branch), 1)
          ])) : r("", !0),
          t.environment.path ? (s(), o("div", _h, [
            v[5] || (v[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", $h, a(t.environment.path), 1)
          ])) : r("", !0),
          v[11] || (v[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Ch, [
            v[6] || (v[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", xh, a(t.environment.workflow_count), 1)
          ]),
          e("div", Sh, [
            v[7] || (v[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Ih, a(t.environment.node_count), 1)
          ]),
          e("div", Eh, [
            v[8] || (v[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Ph, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", Rh)) : r("", !0),
          t.environment.created_at ? (s(), o("div", Mh, [
            v[9] || (v[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", Th, a(i(t.environment.created_at)), 1)
          ])) : r("", !0),
          t.environment.last_used ? (s(), o("div", Dh, [
            v[10] || (v[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", Lh, a(i(t.environment.last_used)), 1)
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        e("div", zh, [
          t.canDelete ? (s(), S(ye, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[0] || (v[0] = (u) => n("delete", t.environment.name))
          }, {
            default: l(() => [...v[12] || (v[12] = [
              g(" Delete ", -1)
            ])]),
            _: 1
          })) : r("", !0),
          v[14] || (v[14] = e("div", { class: "footer-spacer" }, null, -1)),
          y(ye, {
            variant: "secondary",
            size: "sm",
            onClick: v[1] || (v[1] = (u) => n("close"))
          }, {
            default: l(() => [...v[13] || (v[13] = [
              g(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Nh = /* @__PURE__ */ re(Uh, [["__scopeId", "data-v-59855453"]]), ro = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], co = "3.12", Ds = [
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
], uo = "auto", Oh = { class: "progress-bar" }, Ah = /* @__PURE__ */ le({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, n = U(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (i, f) => (s(), o("div", Oh, [
      e("div", {
        class: pe(["progress-fill", t.variant]),
        style: Pt({ width: n.value })
      }, null, 6)
    ]));
  }
}), Ls = /* @__PURE__ */ re(Ah, [["__scopeId", "data-v-1beb0512"]]), Bh = { class: "task-progress" }, Fh = { class: "progress-info" }, Vh = { class: "progress-percentage" }, Wh = { class: "progress-message" }, Gh = {
  key: 0,
  class: "progress-steps"
}, jh = { class: "step-icon" }, Hh = { class: "step-label" }, Kh = /* @__PURE__ */ le({
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
      const v = c.steps.find((u) => u.id === f);
      return v ? c.progress >= v.progressThreshold ? "completed" : c.currentPhase === f ? "active" : "pending" : "pending";
    }
    function i(f) {
      const v = n(f);
      return v === "completed" ? "✓" : v === "active" ? "⟳" : "○";
    }
    return (f, v) => (s(), o("div", Bh, [
      y(Ls, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", Fh, [
        e("span", Vh, a(t.progress) + "%", 1),
        e("span", Wh, a(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", Gh, [
        (s(!0), o(W, null, ie(t.steps, (u) => (s(), o("div", {
          key: u.id,
          class: pe(["step", n(u.id)])
        }, [
          e("span", jh, a(i(u.id)), 1),
          e("span", Hh, a(u.label), 1)
        ], 2))), 128))
      ])) : r("", !0)
    ]));
  }
}), ys = /* @__PURE__ */ re(Kh, [["__scopeId", "data-v-9d1de66c"]]), qh = {
  key: 0,
  class: "create-env-form"
}, Yh = { class: "form-field" }, Jh = { class: "form-field" }, Xh = ["value"], Qh = { class: "form-field" }, Zh = ["disabled"], e1 = ["value"], t1 = { class: "form-field" }, s1 = ["value"], o1 = { class: "form-field form-field--checkbox" }, n1 = { class: "form-checkbox" }, a1 = {
  key: 1,
  class: "create-env-progress"
}, l1 = { class: "creating-intro" }, i1 = {
  key: 0,
  class: "progress-warning"
}, r1 = {
  key: 1,
  class: "create-error"
}, d1 = { class: "error-message" }, c1 = {
  key: 1,
  class: "footer-status"
}, u1 = 10, m1 = /* @__PURE__ */ le({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: c }) {
    const n = c, { getComfyUIReleases: i, createEnvironment: f, getCreateProgress: v } = He(), u = h(""), m = h(co), d = h("latest"), p = h(uo), w = h(!1), k = h([{ tag_name: "latest", name: "Latest", published_at: "" }]), _ = h(!1), b = h(!1), T = h({
      progress: 0,
      message: ""
    });
    let R = null, $ = 0;
    const C = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], B = h(null);
    function x() {
      b.value || n("close");
    }
    async function M() {
      const D = u.value.trim();
      if (D) {
        b.value = !0, T.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const A = {
            name: D,
            python_version: m.value,
            comfyui_version: d.value,
            torch_backend: p.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, de = await f(A);
          de.status === "started" ? Z() : de.status === "error" && (T.value = {
            progress: 0,
            message: de.message || "Failed to start creation",
            error: de.message
          });
        } catch (A) {
          T.value = {
            progress: 0,
            message: A instanceof Error ? A.message : "Unknown error",
            error: A instanceof Error ? A.message : "Unknown error"
          };
        }
      }
    }
    function Z() {
      R || ($ = 0, R = window.setInterval(async () => {
        try {
          const D = await v();
          $ = 0, T.value = {
            progress: D.progress ?? 0,
            message: D.message,
            phase: D.phase,
            error: D.error
          }, D.state === "complete" ? (F(), n("created", D.environment_name || u.value.trim(), w.value)) : D.state === "error" ? (F(), T.value.error = D.error || D.message) : D.state === "idle" && b.value && (F(), T.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= u1 && (F(), T.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function F() {
      R && (clearInterval(R), R = null);
    }
    function G() {
      b.value = !1, T.value = { progress: 0, message: "" }, n("close");
    }
    async function E() {
      _.value = !0;
      try {
        k.value = await i();
      } catch (D) {
        console.error("Failed to load ComfyUI releases:", D);
      } finally {
        _.value = !1;
      }
    }
    return We(async () => {
      var D;
      await xo(), (D = B.value) == null || D.focus(), E();
    }), Ps(() => {
      F();
    }), (D, A) => (s(), S(lt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !b.value,
      onClose: x
    }, {
      body: l(() => [
        b.value ? (s(), o("div", a1, [
          e("p", l1, [
            A[11] || (A[11] = g(" Creating environment ", -1)),
            e("strong", null, a(u.value), 1),
            A[12] || (A[12] = g("... ", -1))
          ]),
          y(ys, {
            progress: T.value.progress,
            message: T.value.message,
            "current-phase": T.value.phase,
            variant: T.value.error ? "error" : "default",
            "show-steps": !0,
            steps: C
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          T.value.error ? r("", !0) : (s(), o("p", i1, " This may take several minutes. Please wait... ")),
          T.value.error ? (s(), o("div", r1, [
            e("p", d1, a(T.value.error), 1)
          ])) : r("", !0)
        ])) : (s(), o("div", qh, [
          e("div", Yh, [
            A[6] || (A[6] = e("label", { class: "form-label" }, "Name", -1)),
            Ue(e("input", {
              ref_key: "nameInput",
              ref: B,
              "onUpdate:modelValue": A[0] || (A[0] = (de) => u.value = de),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: Ct(M, ["enter"])
            }, null, 544), [
              [Ft, u.value]
            ])
          ]),
          e("div", Jh, [
            A[7] || (A[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": A[1] || (A[1] = (de) => m.value = de),
              class: "form-select"
            }, [
              (s(!0), o(W, null, ie(Pe(ro), (de) => (s(), o("option", {
                key: de,
                value: de
              }, a(de), 9, Xh))), 128))
            ], 512), [
              [Et, m.value]
            ])
          ]),
          e("div", Qh, [
            A[8] || (A[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": A[2] || (A[2] = (de) => d.value = de),
              class: "form-select",
              disabled: _.value
            }, [
              (s(!0), o(W, null, ie(k.value, (de) => (s(), o("option", {
                key: de.tag_name,
                value: de.tag_name
              }, a(de.name), 9, e1))), 128))
            ], 8, Zh), [
              [Et, d.value]
            ])
          ]),
          e("div", t1, [
            A[9] || (A[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": A[3] || (A[3] = (de) => p.value = de),
              class: "form-select"
            }, [
              (s(!0), o(W, null, ie(Pe(Ds), (de) => (s(), o("option", {
                key: de,
                value: de
              }, a(de) + a(de === "auto" ? " (detect GPU)" : ""), 9, s1))), 128))
            ], 512), [
              [Et, p.value]
            ])
          ]),
          e("div", o1, [
            e("label", n1, [
              Ue(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": A[4] || (A[4] = (de) => w.value = de)
              }, null, 512), [
                [ps, w.value]
              ]),
              A[10] || (A[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: l(() => [
        b.value ? (s(), o(W, { key: 1 }, [
          T.value.error ? (s(), S(ye, {
            key: 0,
            variant: "secondary",
            onClick: G
          }, {
            default: l(() => [...A[15] || (A[15] = [
              g(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", c1, " Creating environment... "))
        ], 64)) : (s(), o(W, { key: 0 }, [
          y(ye, {
            variant: "primary",
            disabled: !u.value.trim(),
            onClick: M
          }, {
            default: l(() => [...A[13] || (A[13] = [
              g(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          y(ye, {
            variant: "secondary",
            onClick: A[5] || (A[5] = (de) => n("close"))
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
}), v1 = /* @__PURE__ */ re(m1, [["__scopeId", "data-v-f37eaa42"]]), f1 = /* @__PURE__ */ le({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getEnvironments: f } = He(), v = h([]), u = h(!1), m = h(null), d = h(""), p = h(!1), w = h(!1), k = h(null), _ = U(() => {
      if (!d.value.trim()) return v.value;
      const B = d.value.toLowerCase();
      return v.value.filter(
        (x) => {
          var M;
          return x.name.toLowerCase().includes(B) || ((M = x.current_branch) == null ? void 0 : M.toLowerCase().includes(B));
        }
      );
    });
    function b(B, x) {
      w.value = !1, i("created", B, x);
    }
    function T() {
      w.value = !0;
    }
    function R(B) {
      k.value = B;
    }
    function $(B) {
      k.value = null, i("delete", B);
    }
    async function C() {
      u.value = !0, m.value = null;
      try {
        v.value = await f();
      } catch (B) {
        m.value = B instanceof Error ? B.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return We(C), c({
      loadEnvironments: C,
      openCreateModal: T
    }), (B, x) => (s(), o(W, null, [
      y(nt, null, {
        header: l(() => [
          y(at, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (M) => p.value = !0)
          }, {
            actions: l(() => [
              y(oe, {
                variant: "primary",
                size: "sm",
                onClick: T
              }, {
                default: l(() => [...x[6] || (x[6] = [
                  g(" Create ", -1)
                ])]),
                _: 1
              }),
              y(oe, {
                variant: "secondary",
                size: "sm",
                onClick: C
              }, {
                default: l(() => [...x[7] || (x[7] = [
                  g(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          y(Jt, {
            modelValue: d.value,
            "onUpdate:modelValue": x[1] || (x[1] = (M) => d.value = M),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value ? (s(), S(Rt, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (s(), S(Mt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            _.value.length ? (s(), S(Oe, {
              key: 0,
              title: "ENVIRONMENTS",
              count: _.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ie(_.value, (M) => (s(), S(hh, {
                  key: M.name,
                  "environment-name": M.name,
                  "is-current": M.is_current,
                  "current-branch": M.current_branch,
                  "show-last-used": !1
                }, {
                  actions: l(() => [
                    M.is_current ? r("", !0) : (s(), S(oe, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (Z) => B.$emit("switch", M.name)
                    }, {
                      default: l(() => [...x[8] || (x[8] = [
                        g(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    y(oe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Z) => R(M)
                    }, {
                      default: l(() => [...x[9] || (x[9] = [
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
            _.value.length ? r("", !0) : (s(), S(yt, {
              key: 1,
              icon: "🌍",
              message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
            }, Vt({ _: 2 }, [
              d.value ? void 0 : {
                name: "actions",
                fn: l(() => [
                  y(oe, {
                    variant: "primary",
                    onClick: T
                  }, {
                    default: l(() => [...x[10] || (x[10] = [
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
      y(wt, {
        show: p.value,
        title: "About Environments",
        onClose: x[3] || (x[3] = (M) => p.value = !1)
      }, {
        content: l(() => [...x[11] || (x[11] = [
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
          y(oe, {
            variant: "secondary",
            onClick: x[2] || (x[2] = (M) => p.value = !1)
          }, {
            default: l(() => [...x[12] || (x[12] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), S(Nh, {
        key: 0,
        environment: k.value,
        "can-delete": v.value.length > 1,
        onClose: x[4] || (x[4] = (M) => k.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : r("", !0),
      w.value ? (s(), S(v1, {
        key: 1,
        onClose: x[5] || (x[5] = (M) => w.value = !1),
        onCreated: b
      })) : r("", !0)
    ], 64));
  }
}), p1 = /* @__PURE__ */ re(f1, [["__scopeId", "data-v-f95999f4"]]), g1 = { class: "file-path" }, h1 = { class: "file-path-text" }, y1 = ["title"], w1 = /* @__PURE__ */ le({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = h(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(c.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (f) {
        console.error("Failed to copy:", f);
      }
    }
    return (f, v) => (s(), o("div", g1, [
      v[0] || (v[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", h1, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: i
      }, a(n.value ? "✓" : "📋"), 9, y1)) : r("", !0)
    ]));
  }
}), k1 = /* @__PURE__ */ re(w1, [["__scopeId", "data-v-f0982173"]]), b1 = { class: "export-blocked" }, _1 = { class: "issues-list" }, $1 = { class: "issue-message" }, C1 = {
  key: 0,
  class: "issue-details"
}, x1 = ["onClick"], S1 = { class: "issue-fix" }, I1 = /* @__PURE__ */ le({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(t) {
    const c = t, n = ws({});
    function i(f) {
      const v = c.issues[f];
      return n[f] || v.details.length <= 3 ? v.details : v.details.slice(0, 3);
    }
    return (f, v) => (s(), S(lt, {
      title: "Cannot Export",
      size: "md",
      onClose: v[1] || (v[1] = (u) => f.$emit("close"))
    }, {
      body: l(() => [
        e("div", b1, [
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
          e("div", _1, [
            (s(!0), o(W, null, ie(t.issues, (u, m) => (s(), o("div", {
              key: m,
              class: "issue-item"
            }, [
              e("div", $1, a(u.message), 1),
              u.details.length ? (s(), o("div", C1, [
                (s(!0), o(W, null, ie(i(m), (d, p) => (s(), o("div", {
                  key: p,
                  class: "issue-detail"
                }, a(d), 1))), 128)),
                u.details.length > 3 && !n[m] ? (s(), o("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (d) => n[m] = !0
                }, " +" + a(u.details.length - 3) + " more ", 9, x1)) : r("", !0)
              ])) : r("", !0),
              e("div", S1, [
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
      footer: l(() => [
        y(ye, {
          variant: "primary",
          onClick: v[0] || (v[0] = (u) => f.$emit("close"))
        }, {
          default: l(() => [...v[3] || (v[3] = [
            g(" Understood ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), mo = /* @__PURE__ */ re(I1, [["__scopeId", "data-v-b52f5e32"]]), E1 = { class: "export-warnings" }, P1 = {
  key: 0,
  class: "success-header"
}, R1 = { class: "warning-header" }, M1 = { class: "warning-summary" }, T1 = { class: "warning-title" }, D1 = { class: "models-section" }, L1 = { class: "models-list" }, z1 = { class: "model-info" }, U1 = { class: "model-filename" }, N1 = { class: "model-workflows" }, O1 = ["onClick"], A1 = /* @__PURE__ */ le({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = h(!1), v = h(null), u = U(() => f.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function m() {
      v.value = null, i("revalidate");
    }
    return (d, p) => (s(), o(W, null, [
      y(lt, {
        title: "Export Warnings",
        size: "md",
        onClose: p[3] || (p[3] = (w) => d.$emit("cancel"))
      }, {
        body: l(() => [
          e("div", E1, [
            t.models.length === 0 ? (s(), o("div", P1, [...p[4] || (p[4] = [
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
              e("div", R1, [
                p[6] || (p[6] = e("span", { class: "warning-icon" }, [
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
                e("div", M1, [
                  e("h3", T1, a(t.models.length) + " model" + a(t.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  p[5] || (p[5] = e("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              e("div", D1, [
                e("div", L1, [
                  (s(!0), o(W, null, ie(u.value, (w) => (s(), o("div", {
                    key: w.hash,
                    class: "model-item"
                  }, [
                    e("div", z1, [
                      e("div", U1, a(w.filename), 1),
                      e("div", N1, " Used by: " + a(w.workflows.join(", ")), 1)
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      onClick: (k) => v.value = w.hash
                    }, " Add Source ", 8, O1)
                  ]))), 128))
                ]),
                t.models.length > 3 && !f.value ? (s(), o("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: p[0] || (p[0] = (w) => f.value = !0)
                }, " Show " + a(t.models.length - 3) + " more model" + a(t.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : r("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: l(() => [
          y(ye, {
            variant: "secondary",
            onClick: p[1] || (p[1] = (w) => d.$emit("cancel"))
          }, {
            default: l(() => [...p[7] || (p[7] = [
              g(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          y(ye, {
            variant: "primary",
            onClick: p[2] || (p[2] = (w) => d.$emit("confirm"))
          }, {
            default: l(() => [
              g(a(t.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      v.value ? (s(), S(Ts, {
        key: 0,
        identifier: v.value,
        onClose: m
      }, null, 8, ["identifier"])) : r("", !0)
    ], 64));
  }
}), vo = /* @__PURE__ */ re(A1, [["__scopeId", "data-v-b698d882"]]), B1 = { class: "export-card" }, F1 = { class: "export-path-row" }, V1 = { class: "export-actions" }, W1 = {
  key: 1,
  class: "export-warning"
}, G1 = /* @__PURE__ */ le({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: c, exportEnvWithForce: n } = He(), i = h(""), f = h(!1), v = h(!1), u = h(!1), m = h(null), d = h(!1), p = h(null), w = h(!1), k = h(!1), _ = U(() => f.value ? "Validating..." : v.value ? "Exporting..." : "Export Environment");
    async function b() {
      f.value = !0, m.value = null;
      try {
        const x = await c();
        p.value = x, x.can_export ? x.warnings.models_without_sources.length > 0 ? k.value = !0 : await $() : w.value = !0;
      } catch (x) {
        m.value = {
          status: "error",
          message: x instanceof Error ? x.message : "Validation failed"
        };
      } finally {
        f.value = !1;
      }
    }
    async function T() {
      k.value = !1, await $();
    }
    async function R() {
      try {
        const x = await c();
        p.value = x;
      } catch (x) {
        console.error("Re-validation failed:", x);
      }
    }
    async function $() {
      v.value = !0;
      try {
        const x = await n(i.value || void 0);
        m.value = x;
      } catch (x) {
        m.value = {
          status: "error",
          message: x instanceof Error ? x.message : "Export failed"
        };
      } finally {
        v.value = !1;
      }
    }
    async function C() {
      var x;
      if ((x = m.value) != null && x.path)
        try {
          await navigator.clipboard.writeText(m.value.path);
        } catch (M) {
          console.error("Failed to copy path:", M);
        }
    }
    async function B() {
      var x;
      if ((x = m.value) != null && x.path) {
        u.value = !0;
        try {
          const M = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(m.value.path)}`);
          if (!M.ok)
            throw new Error(`Download failed: ${M.statusText}`);
          const Z = await M.blob(), F = URL.createObjectURL(Z), G = m.value.path.split("/").pop() || "environment-export.tar.gz", E = document.createElement("a");
          E.href = F, E.download = G, document.body.appendChild(E), E.click(), document.body.removeChild(E), URL.revokeObjectURL(F);
        } catch (M) {
          console.error("Failed to download:", M), alert(`Download failed: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
      }
    }
    return (x, M) => (s(), o(W, null, [
      y(nt, null, {
        header: l(() => [
          y(at, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (Z) => d.value = !0)
          })
        ]),
        content: l(() => [
          y(Oe, { title: "EXPORT OPTIONS" }, {
            default: l(() => [
              e("div", B1, [
                M[7] || (M[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", F1, [
                  y(gs, {
                    modelValue: i.value,
                    "onUpdate:modelValue": M[1] || (M[1] = (Z) => i.value = Z),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", V1, [
                  y(oe, {
                    variant: "primary",
                    size: "md",
                    loading: f.value || v.value,
                    disabled: f.value || v.value,
                    onClick: b
                  }, {
                    default: l(() => [
                      M[6] || (M[6] = e("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        e("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        e("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      g(" " + a(_.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          m.value ? (s(), S(Oe, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: l(() => [
              y(ot, {
                status: m.value.status === "success" ? "synced" : "broken"
              }, Vt({
                icon: l(() => [
                  g(a(m.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: l(() => [
                  g(a(m.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: l(() => [
                  g(a(m.value.status === "success" ? "Your environment has been exported" : m.value.message), 1)
                ]),
                _: 2
              }, [
                m.value.status === "success" ? {
                  name: "details",
                  fn: l(() => [
                    y(Ve, { label: "Saved to:" }, {
                      default: l(() => [
                        y(k1, {
                          path: m.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    m.value.models_without_sources !== void 0 ? (s(), S(Ve, {
                      key: 0,
                      label: "Models without sources:",
                      value: m.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : r("", !0),
                    m.value.models_without_sources && m.value.models_without_sources > 0 ? (s(), o("div", W1, [...M[8] || (M[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : r("", !0)
                  ]),
                  key: "0"
                } : void 0,
                m.value.status === "success" ? {
                  name: "actions",
                  fn: l(() => [
                    y(oe, {
                      variant: "primary",
                      size: "sm",
                      loading: u.value,
                      onClick: B
                    }, {
                      default: l(() => [...M[9] || (M[9] = [
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
                    y(oe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: C
                    }, {
                      default: l(() => [...M[10] || (M[10] = [
                        g(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    y(oe, {
                      variant: "ghost",
                      size: "sm",
                      onClick: M[2] || (M[2] = (Z) => m.value = null)
                    }, {
                      default: l(() => [...M[11] || (M[11] = [
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
      y(wt, {
        show: d.value,
        title: "What Gets Exported",
        onClose: M[3] || (M[3] = (Z) => d.value = !1)
      }, {
        content: l(() => [...M[12] || (M[12] = [
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
      w.value && p.value ? (s(), S(mo, {
        key: 0,
        issues: p.value.blocking_issues,
        onClose: M[4] || (M[4] = (Z) => w.value = !1)
      }, null, 8, ["issues"])) : r("", !0),
      k.value && p.value ? (s(), S(vo, {
        key: 1,
        models: p.value.warnings.models_without_sources,
        onConfirm: T,
        onCancel: M[5] || (M[5] = (Z) => k.value = !1),
        onRevalidate: R
      }, null, 8, ["models"])) : r("", !0)
    ], 64));
  }
}), j1 = /* @__PURE__ */ re(G1, [["__scopeId", "data-v-f4d120f2"]]), H1 = { class: "file-input-wrapper" }, K1 = ["accept", "multiple", "disabled"], q1 = /* @__PURE__ */ le({
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
    const i = n, f = h(null);
    function v() {
      var m;
      (m = f.value) == null || m.click();
    }
    function u(m) {
      const d = m.target;
      d.files && d.files.length > 0 && (i("change", d.files), d.value = "");
    }
    return c({
      triggerInput: v
    }), (m, d) => (s(), o("div", H1, [
      e("input", {
        ref_key: "fileInputRef",
        ref: f,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, K1),
      y(oe, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: v
      }, {
        default: l(() => [
          Me(m.$slots, "default", {}, () => [
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
}), Y1 = /* @__PURE__ */ re(q1, [["__scopeId", "data-v-cd192091"]]), J1 = {
  key: 0,
  class: "drop-zone-empty"
}, X1 = { class: "drop-zone-text" }, Q1 = { class: "drop-zone-primary" }, Z1 = { class: "drop-zone-secondary" }, ey = { class: "drop-zone-actions" }, ty = {
  key: 1,
  class: "drop-zone-file"
}, sy = { class: "file-info" }, oy = { class: "file-details" }, ny = { class: "file-name" }, ay = { class: "file-size" }, ly = /* @__PURE__ */ le({
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
    const n = c, i = h(!1), f = h(null), v = h(0), u = U(() => f.value !== null), m = U(() => {
      var $;
      return (($ = f.value) == null ? void 0 : $.name) || "";
    }), d = U(() => {
      if (!f.value) return "";
      const $ = f.value.size;
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function p($) {
      var C;
      $.stopPropagation(), v.value++, (C = $.dataTransfer) != null && C.types.includes("Files") && (i.value = !0);
    }
    function w($) {
      $.stopPropagation(), $.dataTransfer && ($.dataTransfer.dropEffect = "copy");
    }
    function k($) {
      $.stopPropagation(), v.value--, v.value === 0 && (i.value = !1);
    }
    function _($) {
      var B;
      $.stopPropagation(), v.value = 0, i.value = !1;
      const C = (B = $.dataTransfer) == null ? void 0 : B.files;
      C && C.length > 0 && T(C[0]);
    }
    function b($) {
      $.length > 0 && T($[0]);
    }
    function T($) {
      f.value = $, n("fileSelected", $);
    }
    function R() {
      f.value = null, n("clear");
    }
    return ($, C) => (s(), o("div", {
      class: pe(["file-drop-zone", { "drop-active": i.value, "has-file": u.value }]),
      onDragenter: Be(p, ["prevent"]),
      onDragover: Be(w, ["prevent"]),
      onDragleave: Be(k, ["prevent"]),
      onDrop: Be(_, ["prevent"])
    }, [
      u.value ? (s(), o("div", ty, [
        e("div", sy, [
          C[1] || (C[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", oy, [
            e("div", ny, a(m.value), 1),
            e("div", ay, a(d.value), 1)
          ])
        ]),
        y(oe, {
          variant: "ghost",
          size: "xs",
          onClick: R,
          title: "Remove file"
        }, {
          default: l(() => [...C[2] || (C[2] = [
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
      ])) : (s(), o("div", J1, [
        C[0] || (C[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", X1, [
          e("p", Q1, a(t.primaryText), 1),
          e("p", Z1, a(t.secondaryText), 1)
        ]),
        e("div", ey, [
          y(Y1, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "sm",
            onChange: b
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
}), iy = /* @__PURE__ */ re(ly, [["__scopeId", "data-v-0f79cb86"]]), ry = { class: "import-preview" }, dy = { class: "preview-header" }, cy = {
  key: 0,
  class: "source-env"
}, uy = { class: "preview-content" }, my = { class: "preview-section" }, vy = { class: "section-header" }, fy = { class: "section-info" }, py = { class: "section-count" }, gy = {
  key: 0,
  class: "item-list"
}, hy = { class: "item-name" }, yy = {
  key: 0,
  class: "item-more"
}, wy = { class: "preview-section" }, ky = { class: "section-header" }, by = { class: "section-info" }, _y = { class: "section-count" }, $y = {
  key: 0,
  class: "item-list"
}, Cy = { class: "item-details" }, xy = { class: "item-name" }, Sy = { class: "item-meta" }, Iy = {
  key: 0,
  class: "item-more"
}, Ey = { class: "preview-section" }, Py = { class: "section-header" }, Ry = { class: "section-info" }, My = { class: "section-count" }, Ty = {
  key: 0,
  class: "item-list"
}, Dy = { class: "item-name" }, Ly = {
  key: 0,
  class: "item-more"
}, zy = {
  key: 0,
  class: "preview-section"
}, Uy = { class: "git-info" }, Ny = /* @__PURE__ */ le({
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
    function v(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, m) => (s(), o("div", ry, [
      e("div", dy, [
        y(ut, null, {
          default: l(() => [...m[0] || (m[0] = [
            g("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", cy, [
          m[1] || (m[1] = g(" From: ", -1)),
          y(Cs, null, {
            default: l(() => [
              g(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : r("", !0)
      ]),
      e("div", uy, [
        e("div", my, [
          e("div", vy, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", fy, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", py, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", gy, [
            (s(!0), o(W, null, ie(t.workflows.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", hy, a(d), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", yy, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        e("div", wy, [
          e("div", ky, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", by, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", _y, a(i.value) + " file" + a(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", $y, [
            (s(!0), o(W, null, ie(t.models.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", Cy, [
                e("span", xy, a(d.filename), 1),
                e("span", Sy, a(v(d.size)) + " • " + a(d.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", Iy, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        e("div", Ey, [
          e("div", Py, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", Ry, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", My, a(f.value) + " node" + a(f.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", Ty, [
            (s(!0), o(W, null, ie(t.nodes.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Dy, a(d), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", Ly, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", zy, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Uy, [
            t.gitBranch ? (s(), S(Ve, {
              key: 0,
              label: "Branch"
            }, {
              default: l(() => [
                y(Cs, null, {
                  default: l(() => [
                    g(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : r("", !0),
            t.gitCommit ? (s(), S(Ve, {
              key: 1,
              label: "Commit"
            }, {
              default: l(() => [
                y(eo, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : r("", !0)
          ])
        ])) : r("", !0)
      ])
    ]));
  }
}), Oy = /* @__PURE__ */ re(Ny, [["__scopeId", "data-v-182fe113"]]), Ay = { class: "import-config" }, By = { class: "config-container" }, Fy = { class: "config-field" }, Vy = { class: "input-wrapper" }, Wy = ["value"], Gy = {
  key: 0,
  class: "validating-indicator"
}, jy = {
  key: 1,
  class: "valid-indicator"
}, Hy = {
  key: 0,
  class: "field-error"
}, Ky = { class: "config-field" }, qy = { class: "strategy-options" }, Yy = ["value", "checked", "onChange"], Jy = { class: "strategy-content" }, Xy = { class: "strategy-label" }, Qy = { class: "strategy-description" }, Zy = { class: "config-field switch-field" }, e0 = { class: "switch-label" }, t0 = ["checked"], s0 = { class: "advanced-section" }, o0 = { class: "advanced-content" }, n0 = { class: "config-field" }, a0 = ["value"], l0 = ["value"], i0 = /* @__PURE__ */ le({
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
    const n = t, i = c, f = h(!1), v = h(!1);
    xt(() => n.nameError, (w) => {
      f.value = !1, v.value = !w && n.name.length > 0;
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
    let m = null;
    function d(w) {
      const k = w.target.value;
      i("update:name", k), v.value = !1, m && clearTimeout(m), k.length > 0 ? (f.value = !0, m = setTimeout(() => {
        i("validate-name", k);
      }, 400)) : f.value = !1;
    }
    function p() {
      n.name.length > 0 && i("validate-name", n.name);
    }
    return (w, k) => (s(), o("div", Ay, [
      y(ut, null, {
        default: l(() => [...k[2] || (k[2] = [
          g("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", By, [
        e("div", Fy, [
          y(vs, { required: "" }, {
            default: l(() => [...k[3] || (k[3] = [
              g("Environment Name", -1)
            ])]),
            _: 1
          }),
          e("div", Vy, [
            e("input", {
              type: "text",
              class: pe(["name-input", { error: t.nameError || t.name.length === 0, valid: v.value }]),
              value: t.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: p
            }, null, 42, Wy),
            f.value ? (s(), o("span", Gy, "...")) : v.value ? (s(), o("span", jy, "✓")) : r("", !0)
          ]),
          t.nameError ? (s(), o("div", Hy, a(t.nameError), 1)) : r("", !0),
          k[4] || (k[4] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", Ky, [
          y(vs, null, {
            default: l(() => [...k[5] || (k[5] = [
              g("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", qy, [
            (s(), o(W, null, ie(u, (_) => e("label", {
              key: _.value,
              class: pe(["strategy-option", { active: t.modelStrategy === _.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: _.value,
                checked: t.modelStrategy === _.value,
                onChange: (b) => i("update:modelStrategy", _.value)
              }, null, 40, Yy),
              e("div", Jy, [
                e("span", Xy, a(_.label), 1),
                e("span", Qy, a(_.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Zy, [
          e("label", e0, [
            e("input", {
              type: "checkbox",
              checked: t.switchAfterImport,
              onChange: k[0] || (k[0] = (_) => i("update:switchAfterImport", _.target.checked))
            }, null, 40, t0),
            k[6] || (k[6] = e("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        e("details", s0, [
          k[8] || (k[8] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", o0, [
            e("div", n0, [
              y(vs, null, {
                default: l(() => [...k[7] || (k[7] = [
                  g("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              e("select", {
                class: "backend-select",
                value: t.torchBackend,
                onChange: k[1] || (k[1] = (_) => i("update:torchBackend", _.target.value))
              }, [
                (s(!0), o(W, null, ie(Pe(Ds), (_) => (s(), o("option", {
                  key: _,
                  value: _
                }, a(_) + a(_ === "auto" ? " (detect GPU)" : ""), 9, l0))), 128))
              ], 40, a0)
            ])
          ])
        ])
      ])
    ]));
  }
}), r0 = /* @__PURE__ */ re(i0, [["__scopeId", "data-v-89ea06a1"]]), d0 = { class: "import-flow" }, c0 = {
  key: 0,
  class: "import-empty"
}, u0 = { class: "git-import-section" }, m0 = { class: "git-url-input-row" }, v0 = ["disabled"], f0 = {
  key: 0,
  class: "git-error"
}, p0 = {
  key: 1,
  class: "import-configure"
}, g0 = { class: "selected-file-bar" }, h0 = {
  key: 0,
  class: "file-bar-content"
}, y0 = { class: "file-bar-info" }, w0 = { class: "file-bar-name" }, k0 = { class: "file-bar-size" }, b0 = {
  key: 1,
  class: "file-bar-content"
}, _0 = { class: "file-bar-info" }, $0 = { class: "file-bar-name" }, C0 = {
  key: 0,
  class: "preview-loading"
}, x0 = { class: "import-actions" }, S0 = {
  key: 2,
  class: "import-progress"
}, I0 = { class: "creating-intro" }, E0 = {
  key: 0,
  class: "progress-warning"
}, P0 = {
  key: 1,
  class: "import-error"
}, R0 = { class: "error-message" }, M0 = {
  key: 3,
  class: "import-complete"
}, T0 = { class: "complete-message" }, D0 = { class: "complete-title" }, L0 = { class: "complete-details" }, z0 = { class: "complete-actions" }, U0 = /* @__PURE__ */ le({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(t, { expose: c, emit: n }) {
    var Ae, ce, ge, xe;
    const i = t, f = n, { previewTarballImport: v, previewGitImport: u, validateEnvironmentName: m, executeImport: d, executeGitImport: p, getImportProgress: w } = He();
    let k = null;
    const _ = h(null), b = h(i.resumeImport ?? !1), T = h(!1), R = h(!1), $ = h(""), C = h(!1), B = h(null), x = h(""), M = h(null), Z = h(!1), F = h(null), G = h(null), E = h({
      name: ((Ae = i.initialProgress) == null ? void 0 : Ae.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), D = h(null), A = h({
      message: ((ce = i.initialProgress) == null ? void 0 : ce.message) ?? "Preparing import...",
      phase: ((ge = i.initialProgress) == null ? void 0 : ge.phase) ?? "",
      progress: ((xe = i.initialProgress) == null ? void 0 : xe.progress) ?? 0,
      error: null
    }), de = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], te = U(() => {
      if (!G.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const se = G.value;
      return {
        sourceEnvironment: se.comfyui_version ? `ComfyUI ${se.comfyui_version}` : "Unknown",
        workflows: se.workflows.map((ae) => ae.name),
        models: se.models.map((ae) => ({
          filename: ae.filename,
          size: 0,
          type: ae.relative_path.split("/")[0] || "model"
        })),
        nodes: se.nodes.map((ae) => ae.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), Y = U(() => !C.value && !B.value && G.value && E.value.name.length > 0 && !D.value && (_.value || M.value));
    async function ue(se) {
      _.value = se, C.value = !0, B.value = null, G.value = null;
      try {
        const ae = await v(se);
        G.value = ae;
      } catch (ae) {
        B.value = ae instanceof Error ? ae.message : "Failed to analyze file", console.error("Preview error:", ae);
      } finally {
        C.value = !1;
      }
    }
    function Q() {
      _.value = null, M.value = null, x.value = "", F.value = null, T.value = !1, R.value = !1, $.value = "", G.value = null, B.value = null, E.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, D.value = null, f("source-cleared");
    }
    function O() {
      Ie(), Q(), b.value = !1, C.value = !1, Z.value = !1, A.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function z() {
      if (x.value.trim()) {
        Z.value = !0, F.value = null;
        try {
          const se = await u(x.value.trim());
          M.value = x.value.trim(), G.value = se;
        } catch (se) {
          F.value = se instanceof Error ? se.message : "Failed to analyze repository";
        } finally {
          Z.value = !1;
        }
      }
    }
    function I(se) {
      try {
        const ae = new URL(se);
        return ae.host + ae.pathname.replace(/\.git$/, "");
      } catch {
        return se;
      }
    }
    async function me(se) {
      if (!se) {
        D.value = "Environment name is required";
        return;
      }
      try {
        const ae = await m(se);
        D.value = ae.valid ? null : ae.error || "Invalid name";
      } catch {
        D.value = "Failed to validate name";
      }
    }
    async function ee() {
      if (E.value.name && !(!_.value && !M.value)) {
        b.value = !0, T.value = !1, A.value = { message: `Creating environment '${E.value.name}'...`, phase: "", progress: 0, error: null }, f("import-started");
        try {
          let se;
          if (_.value)
            se = await d(
              _.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else if (M.value)
            se = await p(
              M.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          se.status === "started" ? be() : (R.value = !1, $.value = se.message, b.value = !1, T.value = !0);
        } catch (se) {
          R.value = !1, $.value = se instanceof Error ? se.message : "Unknown error occurred during import", b.value = !1, T.value = !0;
        }
      }
    }
    async function be() {
      if (k) return;
      const se = async () => {
        try {
          const we = await w();
          return A.value = {
            message: we.message,
            phase: we.phase || "",
            progress: we.progress ?? (we.state === "importing" ? 50 : 0),
            error: we.error || null
          }, we.state === "complete" ? (Ie(), R.value = !0, $.value = `Environment '${we.environment_name}' created successfully`, b.value = !1, T.value = !0, we.environment_name && f("import-complete", we.environment_name, E.value.switchAfterImport), !1) : we.state === "error" ? (Ie(), R.value = !1, $.value = we.error || we.message, b.value = !1, T.value = !0, !1) : !0;
        } catch (we) {
          return console.error("Failed to poll import progress:", we), !0;
        }
      };
      await se() && (k = setInterval(async () => {
        await se() || Ie();
      }, 2e3));
    }
    function Ie() {
      k && (clearInterval(k), k = null);
    }
    function Te(se) {
      return se < 1024 ? `${se} B` : se < 1024 * 1024 ? `${(se / 1024).toFixed(1)} KB` : se < 1024 * 1024 * 1024 ? `${(se / (1024 * 1024)).toFixed(1)} MB` : `${(se / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return We(async () => {
      try {
        const se = await w();
        console.log("[ComfyGit ImportFlow] Import progress check:", se.state, se), se.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", se.environment_name), b.value = !0, E.value.name = se.environment_name || E.value.name || "", A.value = {
          progress: se.progress ?? 0,
          message: se.message || "Importing...",
          phase: se.phase || "",
          error: null
        }, be());
      } catch (se) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", se);
      }
    }), c({
      handleReset: O,
      isImporting: b,
      canImport: Y
    }), (se, ae) => {
      var we;
      return s(), o("div", d0, [
        !_.value && !M.value && !b.value ? (s(), o("div", c0, [
          y(iy, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: ue
          }),
          ae[7] || (ae[7] = e("div", { class: "import-divider" }, [
            e("span", null, "or")
          ], -1)),
          e("div", u0, [
            ae[5] || (ae[5] = e("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            e("div", m0, [
              Ue(e("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": ae[0] || (ae[0] = (ze) => x.value = ze),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Ct(z, ["enter"]),
                disabled: Z.value
              }, null, 40, v0), [
                [Ft, x.value]
              ]),
              y(oe, {
                variant: "primary",
                size: "sm",
                disabled: !x.value.trim() || Z.value,
                onClick: z
              }, {
                default: l(() => [
                  g(a(Z.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            F.value ? (s(), o("div", f0, a(F.value), 1)) : r("", !0),
            ae[6] || (ae[6] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (_.value || M.value) && !b.value && !T.value ? (s(), o("div", p0, [
          e("div", g0, [
            _.value ? (s(), o("div", h0, [
              ae[8] || (ae[8] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", y0, [
                e("div", w0, a(_.value.name), 1),
                e("div", k0, a(Te(_.value.size)), 1)
              ])
            ])) : M.value ? (s(), o("div", b0, [
              ae[10] || (ae[10] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
              e("div", _0, [
                e("div", $0, a(I(M.value)), 1),
                ae[9] || (ae[9] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : r("", !0),
            y(oe, {
              variant: "ghost",
              size: "sm",
              onClick: Q
            }, {
              default: l(() => [...ae[11] || (ae[11] = [
                g(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          C.value ? (s(), o("div", C0, [...ae[12] || (ae[12] = [
            e("div", { class: "loading-spinner" }, null, -1),
            e("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : B.value ? (s(), S(pt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [B.value]
          }, null, 8, ["details"])) : G.value ? (s(), S(Oy, {
            key: 2,
            "source-environment": te.value.sourceEnvironment,
            workflows: te.value.workflows,
            models: te.value.models,
            nodes: te.value.nodes,
            "git-branch": te.value.gitBranch,
            "git-commit": te.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : r("", !0),
          G.value ? (s(), S(r0, {
            key: 3,
            name: E.value.name,
            "onUpdate:name": ae[1] || (ae[1] = (ze) => E.value.name = ze),
            "model-strategy": E.value.modelStrategy,
            "onUpdate:modelStrategy": ae[2] || (ae[2] = (ze) => E.value.modelStrategy = ze),
            "torch-backend": E.value.torchBackend,
            "onUpdate:torchBackend": ae[3] || (ae[3] = (ze) => E.value.torchBackend = ze),
            "switch-after-import": E.value.switchAfterImport,
            "onUpdate:switchAfterImport": ae[4] || (ae[4] = (ze) => E.value.switchAfterImport = ze),
            "name-error": D.value,
            onValidateName: me
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : r("", !0),
          E.value.modelStrategy === "skip" && ((we = G.value) != null && we.models_needing_download) ? (s(), S(pt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${G.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : r("", !0),
          e("div", x0, [
            y(oe, {
              variant: "secondary",
              size: "md",
              onClick: Q
            }, {
              default: l(() => [...ae[13] || (ae[13] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            y(oe, {
              variant: "primary",
              size: "md",
              disabled: !Y.value,
              onClick: ee
            }, {
              default: l(() => [...ae[14] || (ae[14] = [
                g(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : b.value ? (s(), o("div", S0, [
          e("p", I0, [
            ae[15] || (ae[15] = g(" Importing environment ", -1)),
            e("strong", null, a(E.value.name), 1),
            ae[16] || (ae[16] = g("... ", -1))
          ]),
          y(ys, {
            progress: A.value.progress,
            message: A.value.message,
            "current-phase": A.value.phase,
            variant: A.value.error ? "error" : "default",
            "show-steps": !0,
            steps: de
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          A.value.error ? r("", !0) : (s(), o("p", E0, " This may take several minutes. Please wait... ")),
          A.value.error ? (s(), o("div", P0, [
            e("p", R0, a(A.value.error), 1)
          ])) : r("", !0)
        ])) : T.value ? (s(), o("div", M0, [
          e("div", {
            class: pe(["complete-icon", R.value ? "success" : "error"])
          }, a(R.value ? "✓" : "✕"), 3),
          e("div", T0, [
            e("div", D0, a(R.value ? "Import Successful" : "Import Failed"), 1),
            e("div", L0, a($.value), 1)
          ]),
          e("div", z0, [
            y(oe, {
              variant: "primary",
              size: "md",
              onClick: O
            }, {
              default: l(() => [...ae[17] || (ae[17] = [
                g(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : r("", !0)
      ]);
    };
  }
}), fo = /* @__PURE__ */ re(U0, [["__scopeId", "data-v-72cbc04e"]]), N0 = /* @__PURE__ */ le({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(t, { emit: c }) {
    const n = c, i = h(!1);
    function f(v, u) {
      u && n("import-complete-switch", v);
    }
    return (v, u) => (s(), o(W, null, [
      y(nt, null, {
        header: l(() => [
          y(at, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: u[0] || (u[0] = (m) => i.value = !0)
          })
        ]),
        content: l(() => [
          y(fo, { onImportComplete: f })
        ]),
        _: 1
      }),
      y(wt, {
        show: i.value,
        title: "How Import Works",
        onClose: u[1] || (u[1] = (m) => i.value = !1)
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
}), O0 = /* @__PURE__ */ re(N0, [["__scopeId", "data-v-e13bfe76"]]), A0 = { class: "remote-header" }, B0 = { class: "remote-info" }, F0 = { class: "remote-icon" }, V0 = { class: "remote-name" }, W0 = {
  key: 0,
  class: "default-badge"
}, G0 = {
  key: 1,
  class: "sync-badge"
}, j0 = {
  key: 0,
  class: "ahead"
}, H0 = {
  key: 1,
  class: "behind"
}, K0 = {
  key: 1,
  class: "synced"
}, q0 = ["href"], Y0 = {
  key: 1,
  class: "remote-url-text"
}, J0 = { class: "remote-actions" }, X0 = /* @__PURE__ */ le({
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
      const v = c.remote.fetch_url, u = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return u ? `https://${u[1]}/${u[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), f = U(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, u) => (s(), o("div", {
      class: pe(["deploy-remote-card", { selected: t.isSelected }])
    }, [
      e("div", A0, [
        e("div", B0, [
          e("span", F0, a(n.value ? "🔗" : "🌐"), 1),
          e("span", V0, a(t.remote.name), 1),
          n.value ? (s(), o("span", W0, "DEFAULT")) : r("", !0),
          t.syncStatus ? (s(), o("span", G0, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(W, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", j0, "↑" + a(t.syncStatus.ahead), 1)) : r("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", H0, "↓" + a(t.syncStatus.behind), 1)) : r("", !0)
            ], 64)) : (s(), o("span", K0, "✓ synced"))
          ])) : r("", !0)
        ]),
        i.value ? (s(), o("a", {
          key: 0,
          href: i.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: u[0] || (u[0] = Be(() => {
          }, ["stop"]))
        }, a(f.value), 9, q0)) : (s(), o("span", Y0, a(f.value), 1))
      ]),
      e("div", J0, [
        y(oe, {
          variant: "secondary",
          size: "xs",
          loading: t.isFetching,
          onClick: u[1] || (u[1] = (m) => v.$emit("fetch", t.remote.name))
        }, {
          default: l(() => [...u[4] || (u[4] = [
            g(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        t.syncStatus && t.syncStatus.ahead > 0 ? (s(), S(oe, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: t.isPushing,
          onClick: u[2] || (u[2] = (m) => v.$emit("push", t.remote.name))
        }, {
          default: l(() => [
            g(" Push ↑" + a(t.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : r("", !0),
        y(oe, {
          variant: t.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: u[3] || (u[3] = (m) => v.$emit("select", t.remote.name))
        }, {
          default: l(() => [
            g(a(t.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), Q0 = /* @__PURE__ */ re(X0, [["__scopeId", "data-v-d687d161"]]), Z0 = { class: "api-key-card" }, ew = { class: "api-key-row" }, tw = { class: "api-key-input-wrapper" }, sw = ["type", "disabled"], ow = ["title"], nw = { class: "status-icon" }, aw = { class: "status-text" }, lw = {
  key: 0,
  class: "credit-balance"
}, iw = { class: "config-card" }, rw = { class: "config-row" }, dw = ["disabled"], cw = {
  key: 0,
  value: ""
}, uw = {
  key: 1,
  value: "",
  disabled: ""
}, mw = ["value", "disabled"], vw = { class: "config-row" }, fw = {
  key: 0,
  class: "loading-inline"
}, pw = { class: "no-volumes-state" }, gw = { class: "no-volumes-text" }, hw = ["value"], yw = { class: "config-row" }, ww = ["disabled"], kw = {
  key: 0,
  value: ""
}, bw = {
  key: 1,
  value: ""
}, _w = {
  key: 2,
  value: ""
}, $w = ["value"], Cw = { class: "config-row" }, xw = { class: "radio-group" }, Sw = { class: "radio-option" }, Iw = { class: "radio-label" }, Ew = { class: "radio-option" }, Pw = { class: "radio-label" }, Rw = { class: "config-row" }, Mw = { class: "radio-group" }, Tw = { class: "radio-option" }, Dw = { class: "radio-label" }, Lw = { class: "radio-option" }, zw = { class: "radio-label" }, Uw = { class: "config-row" }, Nw = {
  key: 0,
  class: "loading-text"
}, Ow = {
  key: 1,
  class: "empty-remotes"
}, Aw = { class: "remotes-list" }, Bw = {
  key: 0,
  class: "sync-warning"
}, Fw = { class: "warning-content" }, Vw = { class: "remotes-footer" }, Ww = { class: "summary-card" }, Gw = {
  key: 0,
  class: "loading-text"
}, jw = { class: "summary-row" }, Hw = { class: "summary-value" }, Kw = { class: "summary-row" }, qw = { class: "summary-value" }, Yw = { class: "summary-row" }, Jw = { class: "summary-value" }, Xw = {
  key: 0,
  class: "summary-sub-row"
}, Qw = { class: "summary-sub-label" }, Zw = {
  key: 1,
  class: "summary-sub-row warning"
}, ek = { class: "summary-sub-label" }, tk = { class: "summary-row" }, sk = { class: "summary-value" }, ok = { class: "summary-row" }, nk = { class: "summary-value" }, ak = { class: "deployment-summary" }, lk = { class: "summary-columns" }, ik = { class: "summary-column" }, rk = { class: "pricing-row" }, dk = { class: "pricing-value" }, ck = { class: "pricing-row" }, uk = { class: "pricing-value" }, mk = { class: "pricing-row" }, vk = { class: "pricing-value" }, fk = { class: "pricing-row total" }, pk = { class: "pricing-value" }, gk = { class: "summary-column" }, hk = { class: "spec-row" }, yk = { class: "spec-row" }, wk = {
  key: 0,
  class: "spec-row"
}, kk = {
  key: 1,
  class: "spec-row spot-warning"
}, bk = {
  key: 4,
  class: "deploy-actions"
}, _k = { class: "pods-header" }, $k = {
  key: 0,
  class: "loading-text"
}, Ck = {
  key: 1,
  class: "empty-state"
}, xk = {
  key: 2,
  class: "pods-list"
}, Sk = { class: "pod-header" }, Ik = { class: "pod-name" }, Ek = { class: "pod-details" }, Pk = { class: "pod-gpu" }, Rk = { class: "pod-uptime" }, Mk = { class: "pod-cost" }, Tk = { class: "pod-actions" }, Dk = { class: "progress-content" }, Lk = { class: "phase-indicator" }, zk = { key: 0 }, Uk = { key: 1 }, Nk = { key: 2 }, Ok = {
  key: 3,
  class: "spinner"
}, Ak = { class: "phase-text" }, Bk = { class: "phase-name" }, Fk = { class: "phase-detail" }, Vk = {
  key: 0,
  class: "ready-actions"
}, Wk = { class: "console-link" }, Gk = ["href"], jk = /* @__PURE__ */ le({
  __name: "DeploySection",
  emits: ["toast", "navigate"],
  setup(t, { emit: c }) {
    const n = c, {
      getDeploySummary: i,
      testRunPodConnection: f,
      getNetworkVolumes: v,
      getRunPodGpuTypes: u,
      deployToRunPod: m,
      getRunPodPods: d,
      terminateRunPodPod: p,
      stopRunPodPod: w,
      startRunPodPod: k,
      getDeploymentStatus: _,
      getStoredRunPodKey: b,
      clearRunPodKey: T,
      validateExport: R,
      getRemotes: $,
      getRemoteSyncStatus: C,
      fetchRemote: B,
      pushToRemote: x
    } = He(), M = h(!1), Z = h(!1), F = h(""), G = h(!1), E = h(!1), D = h(null), A = h(null), de = h(""), te = h(""), Y = h(""), ue = h("SECURE"), Q = h("ON_DEMAND"), O = h("my-comfyui-deploy"), z = h([]), I = h({}), me = h(!1), ee = h(null), be = h(null), Ie = h(null), Te = h([]), Ae = h(!1), ce = h([]), ge = h(!1), xe = h([]), se = h(!1), ae = h(null), we = h(!1), ze = h([]), Ze = h(!1), et = h(!1), $e = h(null), tt = h(null), Ye = h(null), je = h(null), rt = h(!1), _e = h(null), Re = h(null), st = h(null), Je = h(!1), Le = h(null), fe = h(!1), K = h(!1), J = U(() => ce.value.find((q) => q.id === te.value) || null), P = U(() => de.value ? ce.value.filter((q) => q.data_center_id === de.value) : ce.value), V = U(() => xe.value.filter((q) => q.available)), ne = U(() => ee.value && I.value[ee.value] || null), ke = U(() => {
      if (!ee.value) return null;
      const q = z.value.find((L) => L.name === ee.value);
      return (q == null ? void 0 : q.fetch_url) || null;
    }), Ge = U(() => G.value && te.value && Y.value && ke.value && !et.value && !Je.value), it = (q) => {
      const L = xe.value.find((qe) => qe.id === Y.value);
      if (!L) return "0.00";
      if (q === "SECURE") return L.securePrice.toFixed(2);
      if (q === "COMMUNITY") return L.communityPrice.toFixed(2);
      const Ce = ue.value === "SECURE";
      return q === "ON_DEMAND" ? Ce ? L.securePrice.toFixed(2) : L.communityPrice.toFixed(2) : Ce ? L.secureSpotPrice.toFixed(2) : L.communitySpotPrice.toFixed(2);
    }, Xe = U(() => {
      const q = xe.value.find((It) => It.id === Y.value), L = ce.value.find((It) => It.id === te.value);
      if (!q) return null;
      const Ce = ue.value === "SECURE", qe = Q.value === "SPOT";
      let kt;
      qe ? kt = Ce ? q.secureSpotPrice : q.communitySpotPrice : kt = Ce ? q.securePrice : q.communityPrice;
      const Dt = L ? L.size_gb * 14e-5 : 0, Lt = 4e-3;
      return {
        gpu: kt,
        volume: Dt,
        container: Lt,
        total: kt + Dt + Lt
      };
    });
    async function St() {
      console.log("[Deploy] Loading deploy data..."), await Qt(), console.log("[Deploy] Volumes loaded, region:", de.value, "GPUs:", xe.value.length), await Promise.all([Zt(), ft(), mt()]);
    }
    async function mt() {
      me.value = !0;
      try {
        const q = await $();
        z.value = q.remotes, await Promise.all(
          q.remotes.map(async (Ce) => {
            const qe = await C(Ce.name);
            qe && (I.value[Ce.name] = qe);
          })
        );
        const L = q.remotes.find((Ce) => Ce.is_default);
        L ? ee.value = L.name : q.remotes.length > 0 && (ee.value = q.remotes[0].name);
      } catch {
        n("toast", "Failed to load remotes", "error");
      } finally {
        me.value = !1;
      }
    }
    async function Tt(q) {
      be.value = q;
      try {
        await B(q);
        const L = await C(q);
        L && (I.value[q] = L), n("toast", `Fetched from ${q}`, "success");
      } catch {
        n("toast", "Fetch failed", "error");
      } finally {
        be.value = null;
      }
    }
    async function Wt(q) {
      Ie.value = q;
      try {
        await x(q, { force: !1 });
        const L = await C(q);
        L && (I.value[q] = L), n("toast", `Pushed to ${q}`, "success");
      } catch {
        n("toast", "Push failed", "error");
      } finally {
        Ie.value = null;
      }
    }
    function vt(q) {
      ee.value = q;
    }
    async function Xt() {
      if (F.value) {
        E.value = !0, D.value = null;
        try {
          const q = await f(F.value, !0);
          q.status === "success" ? (G.value = !0, A.value = q.credit_balance ?? null, D.value = { type: "success", message: q.message }, await St()) : D.value = { type: "error", message: q.message };
        } catch (q) {
          D.value = {
            type: "error",
            message: q instanceof Error ? q.message : "Connection test failed"
          };
        } finally {
          E.value = !1;
        }
      }
    }
    async function Nt() {
      try {
        await T(), F.value = "", G.value = !1, D.value = null, A.value = null, Te.value = [], de.value = "", ce.value = [], te.value = "", xe.value = [], Y.value = "", ae.value = null, ze.value = [], n("toast", "API key cleared", "info");
      } catch {
        n("toast", "Failed to clear key", "error");
      }
    }
    async function Qt() {
      ge.value = !0, Ae.value = !0;
      try {
        const q = await v();
        ce.value = q.volumes, console.log("[Deploy] Network volumes:", q.volumes.map((Ce) => ({ id: Ce.id, name: Ce.name, dc: Ce.data_center_id })));
        const L = /* @__PURE__ */ new Map();
        for (const Ce of q.volumes)
          Ce.data_center_id && !L.has(Ce.data_center_id) && L.set(Ce.data_center_id, {
            id: Ce.data_center_id,
            name: Ce.data_center_name || Ce.data_center_id,
            available: !0
          });
        if (Te.value = Array.from(L.values()), console.log("[Deploy] Data centers from volumes:", Te.value), ce.value.length > 0) {
          const Ce = ce.value[0];
          te.value = Ce.id, console.log("[Deploy] Auto-selected volume:", Ce.name, "data_center_id:", Ce.data_center_id), Ce.data_center_id ? (de.value = Ce.data_center_id, console.log("[Deploy] Set region to:", de.value), await Ot(Ce.data_center_id)) : console.warn("[Deploy] Volume has no data_center_id!");
        }
      } catch {
        n("toast", "Failed to load network volumes", "error");
      } finally {
        ge.value = !1, Ae.value = !1;
      }
    }
    async function Ot(q) {
      console.log("[Deploy] loadGpuTypes called with dataCenterId:", q), se.value = !0;
      try {
        const L = await u(q);
        xe.value = L.gpu_types, console.log(
          "[Deploy] GPU types loaded:",
          L.gpu_types.length,
          "GPUs,",
          L.gpu_types.filter((qe) => qe.available).length,
          "available"
        );
        const Ce = xe.value.find((qe) => qe.available);
        Ce ? (Y.value = Ce.id, console.log("[Deploy] Auto-selected GPU:", Ce.displayName)) : (Y.value = "", console.log("[Deploy] No available GPUs in this region"));
      } catch {
        n("toast", "Failed to load GPU types", "error");
      } finally {
        se.value = !1;
      }
    }
    xt(de, async (q) => {
      if (console.log("[Deploy] Region watcher fired:", q, "(loading volumes:", ge.value, ")"), !q) return;
      if (ge.value) {
        console.log("[Deploy] Skipping GPU load - volumes still loading");
        return;
      }
      const L = ce.value.find((Ce) => Ce.id === te.value);
      L && L.data_center_id !== q && (te.value = ""), await Ot(q);
    }), xt(te, async (q) => {
      if (console.log("[Deploy] Volume watcher fired:", q, "(loading volumes:", ge.value, ")"), !q) {
        xe.value = [], Y.value = "";
        return;
      }
      if (ge.value) {
        console.log("[Deploy] Skipping - volumes still loading");
        return;
      }
      const L = ce.value.find((Ce) => Ce.id === q);
      L && L.data_center_id !== de.value ? de.value = L.data_center_id : L && await Ot(L.data_center_id);
    });
    async function Zt() {
      we.value = !0;
      try {
        ae.value = await i();
      } catch {
        n("toast", "Failed to load environment summary", "error");
      } finally {
        we.value = !1;
      }
    }
    async function ft() {
      Ze.value = !0;
      try {
        const q = await d();
        ze.value = q.pods;
      } catch {
        n("toast", "Failed to load pods", "error");
      } finally {
        Ze.value = !1;
      }
    }
    async function Gt() {
      if (!(!Y.value || !te.value)) {
        Je.value = !0, $e.value = null;
        try {
          const q = await R();
          Le.value = q, q.can_export ? q.warnings.models_without_sources.length > 0 ? K.value = !0 : await jt() : fe.value = !0;
        } catch (q) {
          $e.value = {
            status: "error",
            message: q instanceof Error ? q.message : "Validation failed"
          }, n("toast", "Validation failed", "error");
        } finally {
          Je.value = !1;
        }
      }
    }
    async function es() {
      K.value = !1, await jt();
    }
    async function ts() {
      try {
        const q = await R();
        Le.value = q;
      } catch (q) {
        console.error("Re-validation failed:", q);
      }
    }
    async function jt() {
      et.value = !0;
      try {
        let q;
        if (Q.value === "SPOT") {
          const Ce = xe.value.find((qe) => qe.id === Y.value);
          Ce && (q = ue.value === "SECURE" ? Ce.secureSpotPrice : Ce.communitySpotPrice);
        }
        const L = await m({
          gpu_type_id: Y.value,
          pod_name: O.value || "my-comfyui-deploy",
          network_volume_id: te.value,
          cloud_type: ue.value,
          pricing_type: Q.value,
          spot_bid: q,
          import_source: ke.value
        });
        $e.value = L, L.status === "success" && L.pod_id ? (_e.value = L.pod_id, rt.value = !0, ss(L.pod_id), await ft()) : n("toast", L.message, "error");
      } catch (q) {
        $e.value = {
          status: "error",
          message: q instanceof Error ? q.message : "Deployment failed"
        }, n("toast", "Deployment failed", "error");
      } finally {
        et.value = !1;
      }
    }
    function ss(q) {
      H(q), st.value = window.setInterval(() => H(q), 3e3);
    }
    function At() {
      st.value && (clearInterval(st.value), st.value = null);
    }
    async function H(q) {
      try {
        const L = await _(q);
        Re.value = L, (L.phase === "READY" || L.phase === "ERROR" || L.phase === "STOPPED") && (At(), L.phase === "READY" && n("toast", "ComfyUI is ready!", "success"), await ft());
      } catch (L) {
        console.error("Failed to poll deployment status:", L);
      }
    }
    function ve() {
      rt.value = !1, At(), _e.value = null, Re.value = null;
    }
    function Se() {
      var q;
      (q = Re.value) != null && q.comfyui_url && window.open(Re.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function Ne(q) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[q || ""] || "Initializing...";
    }
    function j(q) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[q || ""] ?? 10;
    }
    async function N(q) {
      tt.value = q;
      try {
        const L = await p(q);
        L.status === "success" ? (n("toast", "Pod terminated", "success"), await ft()) : n("toast", L.message, "error");
      } catch {
        n("toast", "Failed to terminate pod", "error");
      } finally {
        tt.value = null;
      }
    }
    async function he(q) {
      Ye.value = q;
      try {
        const L = await w(q);
        L.status === "success" ? (n("toast", "Pod stopped", "success"), await ft()) : n("toast", L.message, "error");
      } catch {
        n("toast", "Failed to stop pod", "error");
      } finally {
        Ye.value = null;
      }
    }
    async function Ee(q) {
      je.value = q;
      try {
        const L = await k(q);
        L.status === "success" ? (n("toast", "Pod starting...", "success"), await ft()) : n("toast", L.message, "error");
      } catch {
        n("toast", "Failed to start pod", "error");
      } finally {
        je.value = null;
      }
    }
    function Fe(q) {
      window.open(q, "_blank", "noopener,noreferrer");
    }
    function Ke(q) {
      const L = Math.floor(q / 3600), Ce = Math.floor(q % 3600 / 60);
      return L > 0 ? `${L}h ${Ce}m` : `${Ce}m`;
    }
    return We(async () => {
      try {
        const q = await b(!0);
        q.has_key && q.key_preview && (F.value = `****${q.key_preview}`, q.valid ? (G.value = !0, A.value = q.credit_balance ?? null, D.value = { type: "success", message: "Connected to RunPod" }, await St()) : q.error && (D.value = { type: "error", message: q.error }));
      } catch {
      }
    }), Ps(() => {
      At();
    }), (q, L) => {
      var Ce, qe, kt, Dt, Lt, It;
      return s(), o(W, null, [
        y(nt, null, {
          header: l(() => [
            y(at, {
              title: "DEPLOY TO CLOUD",
              "show-info": !0,
              onInfoClick: L[0] || (L[0] = (X) => M.value = !0)
            })
          ]),
          content: l(() => [
            y(Oe, { title: "RUNPOD API KEY" }, {
              default: l(() => [
                e("div", Z0, [
                  e("div", ew, [
                    e("div", tw, [
                      Ue(e("input", {
                        "onUpdate:modelValue": L[1] || (L[1] = (X) => F.value = X),
                        type: Z.value ? "text" : "password",
                        class: "api-key-input",
                        placeholder: "Enter your RunPod API key (rp_...)",
                        disabled: G.value
                      }, null, 8, sw), [
                        [So, F.value]
                      ]),
                      e("button", {
                        class: "toggle-visibility-btn",
                        onClick: L[2] || (L[2] = (X) => Z.value = !Z.value),
                        title: Z.value ? "Hide key" : "Show key"
                      }, a(Z.value ? "👁" : "👁‍🗨"), 9, ow)
                    ]),
                    G.value ? r("", !0) : (s(), S(oe, {
                      key: 0,
                      variant: "secondary",
                      size: "sm",
                      loading: E.value,
                      disabled: !F.value || E.value,
                      onClick: Xt
                    }, {
                      default: l(() => [...L[18] || (L[18] = [
                        g(" Test ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading", "disabled"])),
                    G.value ? (s(), S(oe, {
                      key: 1,
                      variant: "ghost",
                      size: "sm",
                      onClick: Nt
                    }, {
                      default: l(() => [...L[19] || (L[19] = [
                        g(" Clear ", -1)
                      ])]),
                      _: 1
                    })) : r("", !0)
                  ]),
                  D.value ? (s(), o("div", {
                    key: 0,
                    class: pe(["connection-status", D.value.type])
                  }, [
                    e("span", nw, a(D.value.type === "success" ? "✓" : "✕"), 1),
                    e("span", aw, a(D.value.message), 1),
                    A.value !== null ? (s(), o("span", lw, " $" + a(A.value.toFixed(2)) + " credit ", 1)) : r("", !0)
                  ], 2)) : r("", !0),
                  L[20] || (L[20] = e("div", { class: "api-key-help" }, [
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
            G.value ? (s(), S(Oe, {
              key: 0,
              title: "CONFIGURATION"
            }, {
              default: l(() => [
                e("div", iw, [
                  e("div", rw, [
                    L[21] || (L[21] = e("label", { class: "config-label" }, "Region", -1)),
                    Ue(e("select", {
                      "onUpdate:modelValue": L[3] || (L[3] = (X) => de.value = X),
                      class: "config-select",
                      disabled: Ae.value
                    }, [
                      Ae.value ? (s(), o("option", cw, "Loading...")) : de.value ? r("", !0) : (s(), o("option", uw, "Select a region")),
                      (s(!0), o(W, null, ie(Te.value, (X) => (s(), o("option", {
                        key: X.id,
                        value: X.id,
                        disabled: !X.available
                      }, a(X.id) + " (" + a(X.name) + ")" + a(X.available ? "" : " [Unavailable]"), 9, mw))), 128))
                    ], 8, dw), [
                      [Et, de.value]
                    ])
                  ]),
                  e("div", vw, [
                    L[26] || (L[26] = e("label", { class: "config-label" }, "Network Volume", -1)),
                    ge.value ? (s(), o("div", fw, "Loading volumes...")) : P.value.length === 0 ? (s(), o(W, { key: 1 }, [
                      e("div", pw, [
                        L[22] || (L[22] = e("span", { class: "no-volumes-icon" }, "⚠", -1)),
                        e("span", gw, "No volumes in " + a(de.value || "this region"), 1)
                      ]),
                      L[23] || (L[23] = e("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                      L[24] || (L[24] = e("a", {
                        href: "https://www.runpod.io/console/user/storage",
                        target: "_blank",
                        rel: "noopener",
                        class: "create-volume-link"
                      }, " Create Volume on RunPod → ", -1))
                    ], 64)) : (s(), o(W, { key: 2 }, [
                      Ue(e("select", {
                        "onUpdate:modelValue": L[4] || (L[4] = (X) => te.value = X),
                        class: "config-select"
                      }, [
                        (s(!0), o(W, null, ie(P.value, (X) => (s(), o("option", {
                          key: X.id,
                          value: X.id
                        }, a(X.name) + " (" + a(X.size_gb) + "GB) ", 9, hw))), 128))
                      ], 512), [
                        [Et, te.value]
                      ]),
                      L[25] || (L[25] = e("a", {
                        href: "https://www.runpod.io/console/user/storage",
                        target: "_blank",
                        rel: "noopener",
                        class: "create-volume-inline-link"
                      }, " + Create new volume ", -1))
                    ], 64))
                  ]),
                  e("div", yw, [
                    L[27] || (L[27] = e("label", { class: "config-label" }, "GPU Type", -1)),
                    Ue(e("select", {
                      "onUpdate:modelValue": L[5] || (L[5] = (X) => Y.value = X),
                      class: "config-select",
                      disabled: se.value || !te.value
                    }, [
                      te.value ? se.value ? (s(), o("option", bw, "Loading GPUs...")) : V.value.length === 0 ? (s(), o("option", _w, "No GPUs available in this region")) : r("", !0) : (s(), o("option", kw, "Select a volume first")),
                      (s(!0), o(W, null, ie(V.value, (X) => (s(), o("option", {
                        key: X.id,
                        value: X.id
                      }, a(X.displayName) + " (" + a(X.memoryInGb) + "GB) - $" + a(ue.value === "SECURE" ? X.securePrice.toFixed(2) : X.communityPrice.toFixed(2)) + "/hr " + a(X.stockStatus ? `[${X.stockStatus}]` : ""), 9, $w))), 128))
                    ], 8, ww), [
                      [Et, Y.value]
                    ])
                  ]),
                  e("div", Cw, [
                    L[28] || (L[28] = e("label", { class: "config-label" }, "Cloud Type", -1)),
                    e("div", xw, [
                      e("label", Sw, [
                        Ue(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": L[6] || (L[6] = (X) => ue.value = X),
                          value: "SECURE"
                        }, null, 512), [
                          [Ut, ue.value]
                        ]),
                        e("span", Iw, "Secure ($" + a(it("SECURE")) + "/hr)", 1)
                      ]),
                      e("label", Ew, [
                        Ue(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": L[7] || (L[7] = (X) => ue.value = X),
                          value: "COMMUNITY"
                        }, null, 512), [
                          [Ut, ue.value]
                        ]),
                        e("span", Pw, "Community ($" + a(it("COMMUNITY")) + "/hr)", 1)
                      ])
                    ])
                  ]),
                  e("div", Rw, [
                    L[29] || (L[29] = e("label", { class: "config-label" }, [
                      g(" Pricing "),
                      e("span", {
                        class: "info-tooltip",
                        title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed. Good for experimentation."
                      }, "ⓘ")
                    ], -1)),
                    e("div", Mw, [
                      e("label", Tw, [
                        Ue(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": L[8] || (L[8] = (X) => Q.value = X),
                          value: "ON_DEMAND"
                        }, null, 512), [
                          [Ut, Q.value]
                        ]),
                        e("span", Dw, "On-Demand ($" + a(it("ON_DEMAND")) + "/hr)", 1)
                      ]),
                      e("label", Lw, [
                        Ue(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": L[9] || (L[9] = (X) => Q.value = X),
                          value: "SPOT"
                        }, null, 512), [
                          [Ut, Q.value]
                        ]),
                        e("span", zw, "Spot ($" + a(it("SPOT")) + "/hr)", 1)
                      ])
                    ])
                  ]),
                  e("div", Uw, [
                    L[30] || (L[30] = e("label", { class: "config-label" }, "Pod Name", -1)),
                    Ue(e("input", {
                      "onUpdate:modelValue": L[10] || (L[10] = (X) => O.value = X),
                      type: "text",
                      class: "config-input",
                      placeholder: "my-comfyui-deploy"
                    }, null, 512), [
                      [Ft, O.value]
                    ])
                  ])
                ])
              ]),
              _: 1
            })) : r("", !0),
            G.value ? (s(), S(Oe, {
              key: 1,
              title: "DEPLOY SOURCE"
            }, {
              default: l(() => [
                me.value ? (s(), o("div", Nw, " Loading remotes... ")) : z.value.length === 0 ? (s(), o("div", Ow, [
                  L[32] || (L[32] = e("div", { class: "empty-message" }, [
                    e("span", { class: "empty-icon" }, "🌐"),
                    e("span", { class: "empty-text" }, "No Git remotes configured"),
                    e("p", { class: "empty-help" }, " Configure a remote repository to deploy your environment. ")
                  ], -1)),
                  y(oe, {
                    variant: "primary",
                    size: "sm",
                    onClick: L[11] || (L[11] = (X) => n("navigate", "remotes"))
                  }, {
                    default: l(() => [...L[31] || (L[31] = [
                      g(" Go to Remotes Tab → ", -1)
                    ])]),
                    _: 1
                  })
                ])) : (s(), o(W, { key: 2 }, [
                  e("div", Aw, [
                    (s(!0), o(W, null, ie(z.value, (X) => (s(), S(Q0, {
                      key: X.name,
                      remote: X,
                      "sync-status": I.value[X.name],
                      "is-selected": ee.value === X.name,
                      "is-fetching": be.value === X.name,
                      "is-pushing": Ie.value === X.name,
                      onFetch: Tt,
                      onPush: Wt,
                      onSelect: vt
                    }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                  ]),
                  ne.value && ne.value.ahead > 0 ? (s(), o("div", Bw, [
                    L[33] || (L[33] = e("span", { class: "warning-icon" }, "⚠", -1)),
                    e("div", Fw, [
                      e("strong", null, a(ne.value.ahead) + " unpushed commit" + a(ne.value.ahead !== 1 ? "s" : ""), 1),
                      e("p", null, "Push to '" + a(ee.value) + "' before deploying to include your latest changes.", 1)
                    ]),
                    y(oe, {
                      variant: "primary",
                      size: "sm",
                      loading: Ie.value === ee.value,
                      onClick: L[12] || (L[12] = (X) => ee.value && Wt(ee.value))
                    }, {
                      default: l(() => [
                        g(" Push to " + a(ee.value), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ])) : r("", !0),
                  e("div", Vw, [
                    y(oe, {
                      variant: "link",
                      size: "sm",
                      onClick: L[13] || (L[13] = (X) => n("navigate", "remotes"))
                    }, {
                      default: l(() => [...L[34] || (L[34] = [
                        g(" Manage remotes → ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ], 64))
              ]),
              _: 1
            })) : r("", !0),
            G.value ? (s(), S(Oe, {
              key: 2,
              title: "ENVIRONMENT SUMMARY"
            }, {
              default: l(() => [
                e("div", Ww, [
                  we.value ? (s(), o("div", Gw, "Loading environment summary...")) : ae.value ? (s(), o(W, { key: 1 }, [
                    e("div", jw, [
                      L[35] || (L[35] = e("span", { class: "summary-label" }, "ComfyUI", -1)),
                      e("span", Hw, a(ae.value.comfyui_version), 1)
                    ]),
                    e("div", Kw, [
                      L[36] || (L[36] = e("span", { class: "summary-label" }, "Nodes", -1)),
                      e("span", qw, a(ae.value.node_count) + " custom nodes", 1)
                    ]),
                    e("div", Yw, [
                      L[37] || (L[37] = e("span", { class: "summary-label" }, "Models", -1)),
                      e("span", Jw, a(ae.value.model_count) + " models", 1)
                    ]),
                    ae.value.models_with_sources > 0 ? (s(), o("div", Xw, [
                      e("span", Qw, "└─ " + a(ae.value.models_with_sources) + " with sources (auto-download)", 1)
                    ])) : r("", !0),
                    ae.value.models_without_sources > 0 ? (s(), o("div", Zw, [
                      e("span", ek, "└─ " + a(ae.value.models_without_sources) + " without sources (manual upload)", 1)
                    ])) : r("", !0),
                    e("div", tk, [
                      L[38] || (L[38] = e("span", { class: "summary-label" }, "Workflows", -1)),
                      e("span", sk, a(ae.value.workflow_count) + " committed", 1)
                    ]),
                    e("div", ok, [
                      L[39] || (L[39] = e("span", { class: "summary-label" }, "Package", -1)),
                      e("span", nk, "~" + a(ae.value.estimated_package_size_mb) + " MB", 1)
                    ])
                  ], 64)) : r("", !0)
                ])
              ]),
              _: 1
            })) : r("", !0),
            G.value && Xe.value ? (s(), S(Oe, {
              key: 3,
              title: "DEPLOYMENT SUMMARY"
            }, {
              default: l(() => {
                var X, bt;
                return [
                  e("div", ak, [
                    e("div", lk, [
                      e("div", ik, [
                        L[44] || (L[44] = e("div", { class: "column-header" }, "Pricing", -1)),
                        e("div", rk, [
                          L[40] || (L[40] = e("span", { class: "pricing-label" }, "GPU:", -1)),
                          e("span", dk, "$" + a(Xe.value.gpu.toFixed(2)) + "/hr", 1)
                        ]),
                        e("div", ck, [
                          L[41] || (L[41] = e("span", { class: "pricing-label" }, "Volume:", -1)),
                          e("span", uk, "$" + a(Xe.value.volume.toFixed(3)) + "/hr", 1)
                        ]),
                        e("div", mk, [
                          L[42] || (L[42] = e("span", { class: "pricing-label" }, "Disk:", -1)),
                          e("span", vk, "$" + a(Xe.value.container.toFixed(3)) + "/hr", 1)
                        ]),
                        L[45] || (L[45] = e("div", { class: "pricing-divider" }, null, -1)),
                        e("div", fk, [
                          L[43] || (L[43] = e("span", { class: "pricing-label" }, "Total:", -1)),
                          e("span", pk, "~$" + a(Xe.value.total.toFixed(2)) + "/hr", 1)
                        ])
                      ]),
                      e("div", gk, [
                        L[47] || (L[47] = e("div", { class: "column-header" }, "Pod Specs", -1)),
                        e("div", hk, [
                          e("span", null, a(((X = xe.value.find((Ht) => Ht.id === Y.value)) == null ? void 0 : X.displayName) || "GPU") + " (" + a(((bt = xe.value.find((Ht) => Ht.id === Y.value)) == null ? void 0 : bt.memoryInGb) || 0) + "GB VRAM)", 1)
                        ]),
                        e("div", yk, [
                          e("span", null, "Region: " + a(de.value), 1)
                        ]),
                        J.value ? (s(), o("div", wk, [
                          e("span", null, "Volume: " + a(J.value.name), 1)
                        ])) : r("", !0),
                        Q.value === "SPOT" ? (s(), o("div", kk, [...L[46] || (L[46] = [
                          e("span", null, "⚠ Spot instance - may be interrupted", -1)
                        ])])) : r("", !0)
                      ])
                    ])
                  ])
                ];
              }),
              _: 1
            })) : r("", !0),
            G.value ? (s(), o("div", bk, [
              y(oe, {
                variant: "primary",
                size: "md",
                loading: Je.value || et.value,
                disabled: !Ge.value,
                onClick: Gt
              }, {
                default: l(() => [
                  L[48] || (L[48] = e("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                    e("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                  ], -1)),
                  g(" " + a(Je.value ? "Validating..." : et.value ? "Deploying..." : "Deploy to RunPod"), 1)
                ]),
                _: 1
              }, 8, ["loading", "disabled"])
            ])) : r("", !0),
            $e.value ? (s(), S(Oe, {
              key: 5,
              title: "DEPLOY STATUS"
            }, {
              default: l(() => [
                y(ot, {
                  status: $e.value.status === "success" ? "synced" : "broken"
                }, Vt({
                  icon: l(() => [
                    g(a($e.value.status === "success" ? "✓" : "✕"), 1)
                  ]),
                  title: l(() => [
                    g(a($e.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                  ]),
                  subtitle: l(() => [
                    g(a($e.value.message), 1)
                  ]),
                  actions: l(() => [
                    y(oe, {
                      variant: "ghost",
                      size: "sm",
                      onClick: L[14] || (L[14] = (X) => $e.value = null)
                    }, {
                      default: l(() => [...L[49] || (L[49] = [
                        g(" Dismiss ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, [
                  $e.value.pod_id ? {
                    name: "details",
                    fn: l(() => [
                      y(Ve, {
                        label: "Pod ID:",
                        value: $e.value.pod_id
                      }, null, 8, ["value"])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["status"])
              ]),
              _: 1
            })) : r("", !0),
            G.value ? (s(), S(Oe, {
              key: 6,
              title: "ACTIVE PODS"
            }, {
              default: l(() => [
                e("div", _k, [
                  y(oe, {
                    variant: "ghost",
                    size: "sm",
                    loading: Ze.value,
                    onClick: ft
                  }, {
                    default: l(() => [...L[50] || (L[50] = [
                      g(" Refresh ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                Ze.value && ze.value.length === 0 ? (s(), o("div", $k, " Loading pods... ")) : ze.value.length === 0 ? (s(), o("div", Ck, [...L[51] || (L[51] = [
                  e("span", { class: "empty-icon" }, "○", -1),
                  e("span", { class: "empty-text" }, "No active pods", -1)
                ])])) : (s(), o("div", xk, [
                  (s(!0), o(W, null, ie(ze.value, (X) => (s(), o("div", {
                    key: X.id,
                    class: "pod-card"
                  }, [
                    e("div", Sk, [
                      e("span", Ik, a(X.name), 1),
                      e("span", {
                        class: pe(["pod-status", X.status.toLowerCase()])
                      }, a(X.status === "RUNNING" ? "●" : "○") + " " + a(X.status), 3)
                    ]),
                    e("div", Ek, [
                      e("span", Pk, a(X.gpu_type), 1),
                      L[52] || (L[52] = e("span", { class: "pod-separator" }, "•", -1)),
                      e("span", Rk, a(Ke(X.uptime_seconds)), 1),
                      L[53] || (L[53] = e("span", { class: "pod-separator" }, "•", -1)),
                      e("span", Mk, "$" + a(X.total_cost.toFixed(2)), 1)
                    ]),
                    e("div", Tk, [
                      X.comfyui_url && X.status === "RUNNING" ? (s(), S(oe, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (bt) => Fe(X.comfyui_url)
                      }, {
                        default: l(() => [...L[54] || (L[54] = [
                          g(" Open ComfyUI ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : r("", !0),
                      X.status === "RUNNING" ? (s(), S(oe, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        loading: Ye.value === X.id,
                        onClick: (bt) => he(X.id),
                        title: "Stop pod (saves money, keeps storage)"
                      }, {
                        default: l(() => [...L[55] || (L[55] = [
                          g(" Stop ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "onClick"])) : r("", !0),
                      X.status === "EXITED" || X.status === "STOPPED" ? (s(), S(oe, {
                        key: 2,
                        variant: "secondary",
                        size: "sm",
                        loading: je.value === X.id,
                        onClick: (bt) => Ee(X.id),
                        title: "Start stopped pod"
                      }, {
                        default: l(() => [...L[56] || (L[56] = [
                          g(" Start ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "onClick"])) : r("", !0),
                      y(oe, {
                        variant: "ghost",
                        size: "sm",
                        loading: tt.value === X.id,
                        onClick: (bt) => N(X.id)
                      }, {
                        default: l(() => [...L[57] || (L[57] = [
                          g(" Terminate ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "onClick"])
                    ])
                  ]))), 128))
                ]))
              ]),
              _: 1
            })) : r("", !0)
          ]),
          _: 1
        }),
        y(wt, {
          show: M.value,
          title: "Deploy to Cloud",
          onClose: L[15] || (L[15] = (X) => M.value = !1)
        }, {
          content: l(() => [...L[58] || (L[58] = [
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
        }, 8, ["show"]),
        rt.value ? (s(), S(lt, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((Ce = Re.value) == null ? void 0 : Ce.phase) === "READY" || ((qe = Re.value) == null ? void 0 : qe.phase) === "ERROR" || ((kt = Re.value) == null ? void 0 : kt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: ve
        }, Vt({
          body: l(() => {
            var X, bt, Ht, Os, As, Bs, Fs, Vs, Ws, Gs, js, Hs;
            return [
              e("div", Dk, [
                e("div", Lk, [
                  e("div", {
                    class: pe(["phase-icon", (bt = (X = Re.value) == null ? void 0 : X.phase) == null ? void 0 : bt.toLowerCase()])
                  }, [
                    ((Ht = Re.value) == null ? void 0 : Ht.phase) === "READY" ? (s(), o("span", zk, "✓")) : ((Os = Re.value) == null ? void 0 : Os.phase) === "ERROR" ? (s(), o("span", Uk, "✕")) : ((As = Re.value) == null ? void 0 : As.phase) === "STOPPED" ? (s(), o("span", Nk, "○")) : (s(), o("span", Ok, "⟳"))
                  ], 2),
                  e("div", Ak, [
                    e("div", Bk, a(Ne((Bs = Re.value) == null ? void 0 : Bs.phase)), 1),
                    e("div", Fk, a(((Fs = Re.value) == null ? void 0 : Fs.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                y(Ls, {
                  progress: j((Vs = Re.value) == null ? void 0 : Vs.phase),
                  variant: ((Ws = Re.value) == null ? void 0 : Ws.phase) === "ERROR" ? "error" : ((Gs = Re.value) == null ? void 0 : Gs.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((js = Re.value) == null ? void 0 : js.phase) === "READY" ? (s(), o("div", Vk, [
                  y(oe, {
                    variant: "primary",
                    size: "md",
                    onClick: Se
                  }, {
                    default: l(() => [...L[59] || (L[59] = [
                      g(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : r("", !0),
                e("div", Wk, [
                  (Hs = Re.value) != null && Hs.console_url ? (s(), o("a", {
                    key: 0,
                    href: Re.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, Gk)) : r("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((Dt = Re.value) == null ? void 0 : Dt.phase) === "READY" || ((Lt = Re.value) == null ? void 0 : Lt.phase) === "ERROR" || ((It = Re.value) == null ? void 0 : It.phase) === "STOPPED" ? {
            name: "footer",
            fn: l(() => [
              y(oe, {
                variant: "ghost",
                size: "sm",
                onClick: ve
              }, {
                default: l(() => [...L[60] || (L[60] = [
                  g(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : r("", !0),
        fe.value && Le.value ? (s(), S(mo, {
          key: 1,
          issues: Le.value.blocking_issues,
          onClose: L[16] || (L[16] = (X) => fe.value = !1)
        }, null, 8, ["issues"])) : r("", !0),
        K.value && Le.value ? (s(), S(vo, {
          key: 2,
          models: Le.value.warnings.models_without_sources,
          onConfirm: es,
          onCancel: L[17] || (L[17] = (X) => K.value = !1),
          onRevalidate: ts
        }, null, 8, ["models"])) : r("", !0)
      ], 64);
    };
  }
}), Hk = /* @__PURE__ */ re(jk, [["__scopeId", "data-v-894179c5"]]), Kk = { class: "header-info" }, qk = { class: "commit-hash" }, Yk = {
  key: 0,
  class: "commit-refs"
}, Jk = { class: "commit-message" }, Xk = { class: "commit-date" }, Qk = {
  key: 0,
  class: "loading"
}, Zk = {
  key: 1,
  class: "changes-section"
}, eb = { class: "stats-row" }, tb = { class: "stat" }, sb = { class: "stat insertions" }, ob = { class: "stat deletions" }, nb = {
  key: 0,
  class: "change-group"
}, ab = {
  key: 1,
  class: "change-group"
}, lb = {
  key: 0,
  class: "version"
}, ib = {
  key: 2,
  class: "change-group"
}, rb = { class: "change-item" }, db = /* @__PURE__ */ le({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = He(), i = h(null), f = h(!0), v = U(() => {
      if (!i.value) return !1;
      const m = i.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), u = U(() => {
      if (!i.value) return !1;
      const m = i.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return We(async () => {
      try {
        i.value = await n(c.commit.hash);
      } finally {
        f.value = !1;
      }
    }), (m, d) => (s(), S(lt, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (p) => m.$emit("close"))
    }, {
      header: l(() => {
        var p, w, k, _;
        return [
          e("div", Kk, [
            d[4] || (d[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", qk, a(((p = i.value) == null ? void 0 : p.short_hash) || t.commit.short_hash || ((w = t.commit.hash) == null ? void 0 : w.slice(0, 7))), 1),
            (_ = (k = i.value) == null ? void 0 : k.refs) != null && _.length ? (s(), o("span", Yk, [
              (s(!0), o(W, null, ie(i.value.refs, (b) => (s(), o("span", {
                key: b,
                class: "ref-badge"
              }, a(b), 1))), 128))
            ])) : r("", !0)
          ]),
          y(ye, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (b) => m.$emit("close"))
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
        var p, w;
        return [
          e("div", Jk, a(((p = i.value) == null ? void 0 : p.message) || t.commit.message), 1),
          e("div", Xk, a(((w = i.value) == null ? void 0 : w.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          f.value ? (s(), o("div", Qk, "Loading details...")) : i.value ? (s(), o("div", Zk, [
            e("div", eb, [
              e("span", tb, a(i.value.stats.files_changed) + " files", 1),
              e("span", sb, "+" + a(i.value.stats.insertions), 1),
              e("span", ob, "-" + a(i.value.stats.deletions), 1)
            ]),
            v.value ? (s(), o("div", nb, [
              y(rs, { variant: "section" }, {
                default: l(() => [...d[6] || (d[6] = [
                  g("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(W, null, ie(i.value.changes.workflows.added, (k) => (s(), o("div", {
                key: "add-" + k,
                class: "change-item added"
              }, [
                d[7] || (d[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(k), 1)
              ]))), 128)),
              (s(!0), o(W, null, ie(i.value.changes.workflows.modified, (k) => (s(), o("div", {
                key: "mod-" + k,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(k), 1)
              ]))), 128)),
              (s(!0), o(W, null, ie(i.value.changes.workflows.deleted, (k) => (s(), o("div", {
                key: "del-" + k,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(k), 1)
              ]))), 128))
            ])) : r("", !0),
            u.value ? (s(), o("div", ab, [
              y(rs, { variant: "section" }, {
                default: l(() => [...d[10] || (d[10] = [
                  g("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(W, null, ie(i.value.changes.nodes.added, (k) => (s(), o("div", {
                key: "add-" + k.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(k.name), 1),
                k.version ? (s(), o("span", lb, "(" + a(k.version) + ")", 1)) : r("", !0)
              ]))), 128)),
              (s(!0), o(W, null, ie(i.value.changes.nodes.removed, (k) => (s(), o("div", {
                key: "rem-" + k.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(k.name), 1)
              ]))), 128))
            ])) : r("", !0),
            i.value.changes.models.resolved > 0 ? (s(), o("div", ib, [
              y(rs, { variant: "section" }, {
                default: l(() => [...d[13] || (d[13] = [
                  g("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", rb, [
                d[14] || (d[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : r("", !0)
          ])) : r("", !0)
        ];
      }),
      footer: l(() => [
        y(ye, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (p) => m.$emit("createBranch", t.commit))
        }, {
          default: l(() => [...d[15] || (d[15] = [
            g(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        y(ye, {
          variant: "primary",
          onClick: d[2] || (d[2] = (p) => m.$emit("checkout", t.commit))
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
}), cb = /* @__PURE__ */ re(db, [["__scopeId", "data-v-d256ff6d"]]), ub = { class: "base-textarea-wrapper" }, mb = ["value", "rows", "placeholder", "disabled", "maxlength"], vb = {
  key: 0,
  class: "base-textarea-count"
}, fb = /* @__PURE__ */ le({
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
    function f(v) {
      v.shiftKey || v.ctrlKey || v.metaKey || n.submitOnEnter && (v.preventDefault(), i("submit"));
    }
    return (v, u) => (s(), o("div", ub, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: u[0] || (u[0] = (m) => v.$emit("update:modelValue", m.target.value)),
        onKeydown: [
          u[1] || (u[1] = Ct(Be((m) => v.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          u[2] || (u[2] = Ct(Be((m) => v.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          Ct(f, ["enter"])
        ]
      }, null, 40, mb),
      t.showCharCount && t.maxLength ? (s(), o("div", vb, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : r("", !0)
    ]));
  }
}), qs = /* @__PURE__ */ re(fb, [["__scopeId", "data-v-c6d16c93"]]), pb = ["checked", "disabled"], gb = { class: "base-checkbox-box" }, hb = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, yb = {
  key: 0,
  class: "base-checkbox-label"
}, wb = /* @__PURE__ */ le({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", {
      class: pe(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked))
      }, null, 40, pb),
      e("span", gb, [
        t.modelValue ? (s(), o("svg", hb, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : r("", !0)
      ]),
      c.$slots.default ? (s(), o("span", yb, [
        Me(c.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), Ys = /* @__PURE__ */ re(wb, [["__scopeId", "data-v-bf17c831"]]), kb = { class: "popover-header" }, bb = { class: "popover-body" }, _b = {
  key: 0,
  class: "changes-summary"
}, $b = {
  key: 0,
  class: "change-item"
}, Cb = {
  key: 1,
  class: "change-item"
}, xb = {
  key: 2,
  class: "change-item"
}, Sb = {
  key: 3,
  class: "change-item"
}, Ib = {
  key: 4,
  class: "change-item"
}, Eb = {
  key: 5,
  class: "change-item"
}, Pb = {
  key: 1,
  class: "no-changes"
}, Rb = {
  key: 2,
  class: "loading"
}, Mb = {
  key: 3,
  class: "issues-error"
}, Tb = { class: "error-header" }, Db = { class: "error-title" }, Lb = { class: "issues-list" }, zb = { class: "message-section" }, Ub = { class: "popover-footer" }, Nb = {
  key: 1,
  class: "commit-popover"
}, Ob = { class: "popover-header" }, Ab = { class: "popover-body" }, Bb = {
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
}, Hb = {
  key: 5,
  class: "change-item"
}, Kb = {
  key: 1,
  class: "no-changes"
}, qb = {
  key: 2,
  class: "loading"
}, Yb = {
  key: 3,
  class: "issues-error"
}, Jb = { class: "error-header" }, Xb = { class: "error-title" }, Qb = { class: "issues-list" }, Zb = { class: "message-section" }, e_ = { class: "popover-footer" }, t_ = /* @__PURE__ */ le({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, i = c, { commit: f } = He(), v = h(""), u = h(!1), m = h(!1), d = U(() => {
      if (!n.status) return !1;
      const T = n.status.workflows;
      return T.new.length > 0 || T.modified.length > 0 || T.deleted.length > 0 || n.status.has_changes;
    }), p = U(() => {
      if (!n.status) return !1;
      const T = n.status.workflows, R = n.status.git_changes;
      return T.new.length > 0 || T.modified.length > 0 || T.deleted.length > 0 || R.nodes_added.length > 0 || R.nodes_removed.length > 0;
    }), w = U(() => {
      var T;
      return (T = n.status) != null && T.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (R) => R.has_issues && (R.sync_state === "new" || R.sync_state === "modified")
      ) : [];
    }), k = U(() => w.value.length > 0), _ = U(() => k.value && !m.value);
    async function b() {
      var T, R, $;
      if (!(k.value && !m.value) && !(!d.value || !v.value.trim() || u.value)) {
        u.value = !0;
        try {
          const C = await f(v.value.trim(), m.value);
          if (C.status === "success") {
            const B = `Committed: ${((T = C.summary) == null ? void 0 : T.new) || 0} new, ${((R = C.summary) == null ? void 0 : R.modified) || 0} modified, ${(($ = C.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            i("committed", { success: !0, message: B });
          } else C.status === "no_changes" ? i("committed", { success: !1, message: "No changes to commit" }) : C.status === "blocked" ? i("committed", { success: !1, message: 'Commit blocked - enable "Allow issues" to force commit' }) : i("committed", { success: !1, message: C.message || "Commit failed" });
        } catch (C) {
          i("committed", { success: !1, message: C instanceof Error ? C.message : "Commit failed" });
        } finally {
          u.value = !1;
        }
      }
    }
    return (T, R) => t.asModal ? (s(), S(Qe, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: R[5] || (R[5] = ($) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: R[4] || (R[4] = Be(() => {
          }, ["stop"]))
        }, [
          e("div", kb, [
            R[11] || (R[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: R[0] || (R[0] = ($) => i("close"))
            }, [...R[10] || (R[10] = [
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
          e("div", bb, [
            t.status && d.value ? (s(), o("div", _b, [
              t.status.workflows.new.length ? (s(), o("div", $b, [
                R[12] || (R[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : r("", !0),
              t.status.workflows.modified.length ? (s(), o("div", Cb, [
                R[13] || (R[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : r("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", xb, [
                R[14] || (R[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", Sb, [
                R[15] || (R[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", Ib, [
                R[16] || (R[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : r("", !0),
              p.value ? r("", !0) : (s(), o("div", Eb, [...R[17] || (R[17] = [
                e("span", { class: "change-icon modified" }, "~", -1),
                e("span", null, "Configuration updated", -1)
              ])]))
            ])) : t.status ? (s(), o("div", Pb, " No changes to commit ")) : (s(), o("div", Rb, " Loading... ")),
            k.value ? (s(), o("div", Mb, [
              e("div", Tb, [
                R[18] || (R[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Db, a(w.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", Lb, [
                (s(!0), o(W, null, ie(w.value, ($) => (s(), o("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a($.name), 1),
                  g(": " + a($.issue_summary), 1)
                ]))), 128))
              ]),
              y(Ys, {
                modelValue: m.value,
                "onUpdate:modelValue": R[1] || (R[1] = ($) => m.value = $),
                class: "allow-issues-toggle"
              }, {
                default: l(() => [...R[19] || (R[19] = [
                  g(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : r("", !0),
            e("div", zb, [
              y(qs, {
                modelValue: v.value,
                "onUpdate:modelValue": R[2] || (R[2] = ($) => v.value = $),
                placeholder: _.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || u.value || _.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: b,
                onSubmit: b
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          e("div", Ub, [
            y(ye, {
              variant: "secondary",
              onClick: R[3] || (R[3] = ($) => i("close"))
            }, {
              default: l(() => [...R[20] || (R[20] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            y(ye, {
              variant: m.value ? "danger" : "primary",
              disabled: !d.value || !v.value.trim() || u.value || _.value,
              loading: u.value,
              onClick: b
            }, {
              default: l(() => [
                g(a(u.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", Nb, [
      e("div", Ob, [
        R[22] || (R[22] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: R[6] || (R[6] = ($) => i("close"))
        }, [...R[21] || (R[21] = [
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
      e("div", Ab, [
        t.status && d.value ? (s(), o("div", Bb, [
          t.status.workflows.new.length ? (s(), o("div", Fb, [
            R[23] || (R[23] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : r("", !0),
          t.status.workflows.modified.length ? (s(), o("div", Vb, [
            R[24] || (R[24] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : r("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", Wb, [
            R[25] || (R[25] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", Gb, [
            R[26] || (R[26] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", jb, [
            R[27] || (R[27] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : r("", !0),
          p.value ? r("", !0) : (s(), o("div", Hb, [...R[28] || (R[28] = [
            e("span", { class: "change-icon modified" }, "~", -1),
            e("span", null, "Configuration updated", -1)
          ])]))
        ])) : t.status ? (s(), o("div", Kb, " No changes to commit ")) : (s(), o("div", qb, " Loading... ")),
        k.value ? (s(), o("div", Yb, [
          e("div", Jb, [
            R[29] || (R[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", Xb, a(w.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", Qb, [
            (s(!0), o(W, null, ie(w.value, ($) => (s(), o("div", {
              key: $.name,
              class: "issue-item"
            }, [
              e("strong", null, a($.name), 1),
              g(": " + a($.issue_summary), 1)
            ]))), 128))
          ]),
          y(Ys, {
            modelValue: m.value,
            "onUpdate:modelValue": R[7] || (R[7] = ($) => m.value = $),
            class: "allow-issues-toggle"
          }, {
            default: l(() => [...R[30] || (R[30] = [
              g(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : r("", !0),
        e("div", Zb, [
          y(qs, {
            modelValue: v.value,
            "onUpdate:modelValue": R[8] || (R[8] = ($) => v.value = $),
            placeholder: _.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || u.value || _.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: b,
            onSubmit: b
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      e("div", e_, [
        y(ye, {
          variant: "secondary",
          onClick: R[9] || (R[9] = ($) => i("close"))
        }, {
          default: l(() => [...R[31] || (R[31] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        y(ye, {
          variant: m.value ? "danger" : "primary",
          disabled: !d.value || !v.value.trim() || u.value || _.value,
          loading: u.value,
          onClick: b
        }, {
          default: l(() => [
            g(a(u.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), po = /* @__PURE__ */ re(t_, [["__scopeId", "data-v-d0fe6172"]]), s_ = { class: "modal-header" }, o_ = { class: "modal-body" }, n_ = { class: "switch-message" }, a_ = { class: "switch-details" }, l_ = { class: "modal-actions" }, i_ = /* @__PURE__ */ le({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), S(Qe, { to: "body" }, [
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
          e("div", s_, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", o_, [
            e("p", n_, [
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
            e("p", a_, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", l_, [
            y(oe, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            y(oe, {
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
}), r_ = /* @__PURE__ */ re(i_, [["__scopeId", "data-v-e9c5253e"]]), d_ = {
  key: 0,
  class: "modal-overlay"
}, c_ = { class: "modal-content" }, u_ = { class: "modal-body" }, m_ = { class: "progress-info" }, v_ = { class: "progress-percentage" }, f_ = { class: "progress-state" }, p_ = { class: "switch-steps" }, g_ = { class: "step-icon" }, h_ = { class: "step-label" }, y_ = /* @__PURE__ */ le({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, n = U(() => {
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
    }), i = U(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), f = U(() => {
      const v = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], u = v.findIndex((m) => m.state === c.state);
      return v.map((m, d) => {
        let p = "pending", w = "○";
        return d < u ? (p = "completed", w = "✓") : d === u && (p = "active", w = "⟳"), {
          ...m,
          status: p,
          icon: w
        };
      });
    });
    return (v, u) => (s(), S(Qe, { to: "body" }, [
      t.show ? (s(), o("div", d_, [
        e("div", c_, [
          u[1] || (u[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", u_, [
            y(Ls, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", m_, [
              e("div", v_, a(t.progress) + "%", 1),
              e("div", f_, a(n.value), 1)
            ]),
            e("div", p_, [
              (s(!0), o(W, null, ie(f.value, (m) => (s(), o("div", {
                key: m.state,
                class: pe(["switch-step", m.status])
              }, [
                e("span", g_, a(m.icon), 1),
                e("span", h_, a(m.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), w_ = /* @__PURE__ */ re(y_, [["__scopeId", "data-v-768a5078"]]), k_ = { class: "modal-header" }, b_ = { class: "modal-body" }, __ = {
  key: 0,
  class: "node-section"
}, $_ = { class: "node-list" }, C_ = {
  key: 1,
  class: "node-section"
}, x_ = { class: "node-list" }, S_ = { class: "modal-actions" }, I_ = /* @__PURE__ */ le({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), S(Qe, { to: "body" }, [
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
          e("div", k_, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", b_, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", __, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", $_, [
                (s(!0), o(W, null, ie(t.mismatchDetails.missing_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + a(i), 1))), 128))
              ])
            ])) : r("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", C_, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", x_, [
                (s(!0), o(W, null, ie(t.mismatchDetails.extra_nodes, (i) => (s(), o("div", {
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
          e("div", S_, [
            y(oe, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[10] || (n[10] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            y(oe, {
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
}), E_ = /* @__PURE__ */ re(I_, [["__scopeId", "data-v-7cad7518"]]), P_ = [
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
], R_ = "v0.0.4", M_ = "Akatz", T_ = { class: "social-buttons" }, D_ = ["title", "aria-label", "onClick"], L_ = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, z_ = ["d"], U_ = ["title", "aria-label", "onClick"], N_ = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, O_ = ["d"], A_ = /* @__PURE__ */ le({
  __name: "SocialButtons",
  setup(t) {
    function c(n) {
      window.open(n, "_blank", "noopener,noreferrer");
    }
    return (n, i) => (s(), o("div", T_, [
      (s(!0), o(W, null, ie(Pe(P_), (f) => (s(), o(W, {
        key: f.id
      }, [
        f.label ? (s(), o("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: f.title,
          "aria-label": f.ariaLabel,
          onClick: (v) => c(f.url)
        }, [
          g(a(f.label) + " ", 1),
          (s(), o("svg", L_, [
            e("path", {
              d: f.iconPath
            }, null, 8, z_)
          ]))
        ], 8, D_)) : (s(), o("button", {
          key: 1,
          class: "icon-btn social-link",
          title: f.title,
          "aria-label": f.ariaLabel,
          onClick: (v) => c(f.url)
        }, [
          (s(), o("svg", N_, [
            e("path", {
              d: f.iconPath
            }, null, 8, O_)
          ]))
        ], 8, U_))
      ], 64))), 128))
    ]));
  }
}), go = /* @__PURE__ */ re(A_, [["__scopeId", "data-v-4f846342"]]), B_ = { class: "footer-info" }, F_ = { class: "version" }, V_ = { class: "made-by" }, W_ = /* @__PURE__ */ le({
  __name: "FooterInfo",
  setup(t) {
    return (c, n) => (s(), o("div", B_, [
      e("span", F_, a(Pe(R_)), 1),
      e("span", V_, [
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
        g(" by " + a(Pe(M_)), 1)
      ])
    ]));
  }
}), ho = /* @__PURE__ */ re(W_, [["__scopeId", "data-v-8bc3db0a"]]), G_ = /* @__PURE__ */ le({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = h(null);
    async function i() {
      var v;
      await ((v = n.value) == null ? void 0 : v.saveSettings());
    }
    function f() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (v, u) => (s(), S(lt, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: u[1] || (u[1] = (m) => v.$emit("close"))
    }, {
      body: l(() => [
        y(io, {
          ref_key: "contentRef",
          ref: n,
          "workspace-path": t.workspacePath,
          onSaved: f
        }, null, 8, ["workspace-path"])
      ]),
      footer: l(() => {
        var m;
        return [
          y(ye, {
            variant: "primary",
            disabled: !((m = n.value) != null && m.hasChanges),
            onClick: i
          }, {
            default: l(() => [...u[2] || (u[2] = [
              g(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          y(ye, {
            variant: "secondary",
            onClick: u[0] || (u[0] = (d) => v.$emit("close"))
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
}), j_ = /* @__PURE__ */ re(G_, [["__scopeId", "data-v-fac00ae7"]]), H_ = { class: "header-actions" }, K_ = {
  key: 0,
  class: "wizard-step"
}, q_ = { class: "form-field" }, Y_ = ["placeholder"], J_ = {
  key: 0,
  class: "form-error"
}, X_ = { class: "form-field form-field--checkbox" }, Q_ = { class: "form-checkbox" }, Z_ = {
  key: 0,
  class: "form-field"
}, e2 = ["placeholder"], t2 = {
  key: 0,
  class: "form-info"
}, s2 = {
  key: 1,
  class: "form-suggestion"
}, o2 = {
  key: 2,
  class: "form-error"
}, n2 = {
  key: 3,
  class: "form-info"
}, a2 = {
  key: 1,
  class: "wizard-step"
}, l2 = {
  key: 0,
  class: "progress-check-loading"
}, i2 = {
  key: 0,
  class: "cli-warning"
}, r2 = { class: "cli-warning-header" }, d2 = {
  key: 1,
  class: "env-landing"
}, c2 = { class: "env-list" }, u2 = ["value"], m2 = { class: "env-name" }, v2 = {
  key: 2,
  class: "env-create"
}, f2 = { class: "form-field" }, p2 = { class: "form-field" }, g2 = ["value"], h2 = { class: "form-field" }, y2 = ["disabled"], w2 = ["value"], k2 = { class: "form-field" }, b2 = ["value"], _2 = { class: "form-field form-field--checkbox" }, $2 = { class: "form-checkbox" }, C2 = {
  key: 0,
  class: "form-error"
}, x2 = {
  key: 1,
  class: "env-creating"
}, S2 = { class: "creating-intro" }, I2 = {
  key: 3,
  class: "env-import"
}, E2 = { class: "wizard-footer" }, P2 = { class: "wizard-footer-actions" }, Kt = 10, R2 = 600 * 1e3, Js = 1800 * 1e3, M2 = /* @__PURE__ */ le({
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
      getInitializeProgress: v,
      validatePath: u,
      createEnvironment: m,
      getCreateProgress: d,
      getImportProgress: p,
      getComfyUIReleases: w
    } = He(), k = h(n.initialStep || 1), _ = h(null), b = h("landing"), T = h(!1), R = h(!1), $ = h(!1), C = h(!1), B = h(null), x = h(n.initialStep === 2), M = h(n.defaultPath), Z = h(!!n.detectedModelsDir), F = h(n.detectedModelsDir || ""), G = h(null), E = h(null), D = h(null), A = h(null), de = h("my-new-env"), te = h(co), Y = h("latest"), ue = h(uo), Q = h(!0), O = h(null), z = h(null), I = h([{ tag_name: "latest", name: "Latest", published_at: "" }]), me = h(!1), ee = h(!1), be = h(!1), Ie = h({ progress: 0, message: "" }), Te = h({ progress: 0, message: "" }), Ae = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], ce = h(0), ge = h(null), xe = h(0), se = h(null), ae = U(() => {
      var P, V;
      const fe = (P = M.value) == null ? void 0 : P.trim(), K = !G.value, J = !Z.value || !E.value && ((V = F.value) == null ? void 0 : V.trim());
      return fe && K && J;
    }), we = U(() => {
      var fe;
      return (fe = de.value) == null ? void 0 : fe.trim();
    }), ze = U(() => !!(k.value === 2 || z.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), Ze = U(() => z.value || n.workspacePath || null);
    async function et() {
      var fe;
      if (G.value = null, !!((fe = M.value) != null && fe.trim()))
        try {
          const K = await u({ path: M.value, type: "workspace" });
          K.valid || (G.value = K.error || "Invalid path");
        } catch (K) {
          G.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function $e() {
      var fe;
      if (E.value = null, D.value = null, A.value = null, !!((fe = F.value) != null && fe.trim()))
        try {
          const K = await u({ path: F.value, type: "models" });
          if (K.valid)
            A.value = K.model_count ?? null;
          else if (E.value = K.error || "Invalid path", K.suggestion) {
            D.value = K.suggestion, F.value = K.suggestion, E.value = null;
            const J = await u({ path: K.suggestion, type: "models" });
            J.valid && (A.value = J.model_count ?? null);
          }
        } catch (K) {
          E.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function tt() {
      var fe, K, J, P, V;
      if (G.value = null, E.value = null, await et(), (fe = G.value) != null && fe.includes("already exists")) {
        G.value = null, z.value = ((K = M.value) == null ? void 0 : K.trim()) || n.defaultPath, k.value = 2, je();
        return;
      }
      if (!G.value && !(Z.value && ((J = F.value) != null && J.trim()) && (await $e(), E.value))) {
        ee.value = !0;
        try {
          await f({
            workspace_path: ((P = M.value) == null ? void 0 : P.trim()) || n.defaultPath,
            models_directory: Z.value && ((V = F.value) == null ? void 0 : V.trim()) || null
          }), ce.value = 0, ge.value = Date.now();
          const ne = setInterval(async () => {
            var ke;
            if (ge.value && Date.now() - ge.value > R2) {
              clearInterval(ne), ee.value = !1, G.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Ge = await v();
              if (ce.value = 0, Ge.state === "idle" && ee.value) {
                clearInterval(ne), ee.value = !1, G.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Ie.value = { progress: Ge.progress, message: Ge.message }, Ge.state === "complete" ? (clearInterval(ne), ee.value = !1, z.value = ((ke = M.value) == null ? void 0 : ke.trim()) || n.defaultPath, k.value = 2, je()) : Ge.state === "error" && (clearInterval(ne), ee.value = !1, G.value = Ge.error || "Workspace creation failed");
            } catch (Ge) {
              ce.value++, console.warn(`Polling failure ${ce.value}/${Kt}:`, Ge), ce.value >= Kt && (clearInterval(ne), ee.value = !1, G.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (ne) {
          ee.value = !1, G.value = ne instanceof Error ? ne.message : "Failed to create workspace";
        }
      }
    }
    async function Ye() {
      be.value = !0, O.value = null;
      try {
        const fe = {
          name: de.value.trim() || "my-new-env",
          python_version: te.value,
          comfyui_version: Y.value,
          torch_backend: ue.value,
          switch_after: Q.value,
          workspace_path: z.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await m(fe)).status === "started") {
          xe.value = 0, se.value = Date.now();
          const J = setInterval(async () => {
            if (se.value && Date.now() - se.value > Js) {
              clearInterval(J), be.value = !1, O.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const P = await d();
              if (xe.value = 0, P.state === "idle" && be.value) {
                clearInterval(J), be.value = !1, O.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Te.value = {
                progress: P.progress ?? 0,
                message: P.message,
                phase: P.phase
              }, P.state === "complete") {
                clearInterval(J), be.value = !1;
                const V = P.environment_name || fe.name;
                Q.value ? i("complete", V, z.value) : (b.value = "landing", i("environment-created-no-switch", V));
              } else P.state === "error" && (clearInterval(J), be.value = !1, O.value = P.error || "Environment creation failed");
            } catch (P) {
              xe.value++, console.warn(`Polling failure ${xe.value}/${Kt}:`, P), xe.value >= Kt && (clearInterval(J), be.value = !1, O.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (fe) {
        be.value = !1, O.value = fe instanceof Error ? fe.message : "Unknown error";
      }
    }
    async function je() {
      me.value = !0;
      try {
        I.value = await w();
      } catch (fe) {
        console.error("Failed to load ComfyUI releases:", fe);
      } finally {
        me.value = !1;
      }
    }
    function rt() {
      _.value && i("switch-environment", _.value, z.value);
    }
    function _e() {
      b.value === "create" || b.value === "import" ? b.value = "landing" : k.value === 2 && n.setupState === "no_workspace" && (k.value = 1);
    }
    function Re(fe, K) {
      R.value = !1, K ? i("complete", fe, z.value) : (i("environment-created-no-switch", fe), b.value = "landing");
    }
    function st() {
    }
    We(async () => {
      if (n.detectedModelsDir && (F.value = n.detectedModelsDir), n.workspacePath && (z.value = n.workspacePath), k.value === 2) {
        je();
        const fe = setTimeout(() => {
          x.value = !1;
        }, 3e3);
        await Je(), clearTimeout(fe), x.value = !1;
      }
    });
    async function Je() {
      try {
        const fe = await d();
        if (console.log("[ComfyGit] Create progress check:", fe.state, fe), fe.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", fe.environment_name), b.value = "create", be.value = !0, de.value = fe.environment_name || "my-new-env", Te.value = {
            progress: fe.progress ?? 0,
            message: fe.message,
            phase: fe.phase
          }, Le();
          return;
        }
      } catch (fe) {
        console.log("[ComfyGit] Create progress check failed:", fe);
      }
      try {
        const fe = await p();
        console.log("[ComfyGit] Import progress check:", fe.state, fe), fe.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", fe.environment_name), B.value = {
          message: fe.message || "Importing...",
          phase: fe.phase || "",
          progress: fe.progress ?? 0,
          environmentName: fe.environment_name || ""
        }, C.value = !0, b.value = "import", R.value = !0);
      } catch (fe) {
        console.log("[ComfyGit] Import progress check failed:", fe);
      }
    }
    async function Le() {
      xe.value = 0, se.value = Date.now();
      let fe = null;
      const K = async () => {
        if (se.value && Date.now() - se.value > Js)
          return fe && clearInterval(fe), be.value = !1, O.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const P = await d();
          if (xe.value = 0, P.state === "idle" && be.value)
            return fe && clearInterval(fe), be.value = !1, O.value = "Environment creation was interrupted. Please try again.", !1;
          if (Te.value = {
            progress: P.progress ?? 0,
            message: P.message,
            phase: P.phase
          }, P.state === "complete") {
            fe && clearInterval(fe), be.value = !1;
            const V = P.environment_name || de.value;
            return i("complete", V, z.value), !1;
          } else if (P.state === "error")
            return fe && clearInterval(fe), be.value = !1, O.value = P.error || "Environment creation failed", !1;
          return !0;
        } catch (P) {
          return xe.value++, console.warn(`Polling failure ${xe.value}/${Kt}:`, P), xe.value >= Kt ? (fe && clearInterval(fe), be.value = !1, O.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await K() && (fe = setInterval(async () => {
        !await K() && fe && clearInterval(fe);
      }, 2e3));
    }
    return (fe, K) => (s(), o(W, null, [
      y(lt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: K[15] || (K[15] = (J) => fe.$emit("close"))
      }, {
        header: l(() => [
          K[20] || (K[20] = e("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          e("div", H_, [
            y(go),
            K[19] || (K[19] = e("span", { class: "header-divider" }, null, -1)),
            ze.value ? (s(), o("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: K[0] || (K[0] = (J) => T.value = !0)
            }, [...K[17] || (K[17] = [
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
              onClick: K[1] || (K[1] = (J) => fe.$emit("close")),
              title: "Close"
            }, [...K[18] || (K[18] = [
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
            k.value === 1 ? (s(), o("div", K_, [
              K[24] || (K[24] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              e("div", q_, [
                K[21] || (K[21] = e("label", { class: "form-label" }, "Workspace Path", -1)),
                Ue(e("input", {
                  "onUpdate:modelValue": K[2] || (K[2] = (P) => M.value = P),
                  type: "text",
                  class: "form-input",
                  placeholder: t.defaultPath
                }, null, 8, Y_), [
                  [Ft, M.value]
                ]),
                G.value ? (s(), o("p", J_, a(G.value), 1)) : r("", !0)
              ]),
              e("div", X_, [
                e("label", Q_, [
                  Ue(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": K[3] || (K[3] = (P) => Z.value = P)
                  }, null, 512), [
                    [ps, Z.value]
                  ]),
                  K[22] || (K[22] = e("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              Z.value ? (s(), o("div", Z_, [
                K[23] || (K[23] = e("label", { class: "form-label" }, "Models Directory", -1)),
                Ue(e("input", {
                  "onUpdate:modelValue": K[4] || (K[4] = (P) => F.value = P),
                  type: "text",
                  class: "form-input",
                  placeholder: t.detectedModelsDir || "/path/to/models"
                }, null, 8, e2), [
                  [Ft, F.value]
                ]),
                t.detectedModelsDir && !F.value ? (s(), o("p", t2, " Detected: " + a(t.detectedModelsDir), 1)) : r("", !0),
                D.value ? (s(), o("p", s2, " Did you mean: " + a(D.value), 1)) : r("", !0),
                E.value ? (s(), o("p", o2, a(E.value), 1)) : r("", !0),
                A.value !== null && !E.value ? (s(), o("p", n2, " Found " + a(A.value) + " model files ", 1)) : r("", !0)
              ])) : r("", !0),
              ee.value ? (s(), S(ys, {
                key: 1,
                progress: Ie.value.progress,
                message: Ie.value.message
              }, null, 8, ["progress", "message"])) : r("", !0)
            ])) : r("", !0),
            k.value === 2 ? (s(), o("div", a2, [
              x.value ? (s(), o("div", l2, [...K[25] || (K[25] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (s(), o(W, { key: 1 }, [
                !n.cliInstalled && !$.value ? (s(), o("div", i2, [
                  e("div", r2, [
                    K[27] || (K[27] = e("span", { class: "cli-warning-icon" }, "!", -1)),
                    K[28] || (K[28] = e("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    e("button", {
                      class: "cli-warning-close",
                      onClick: K[5] || (K[5] = (P) => $.value = !0),
                      title: "Dismiss"
                    }, [...K[26] || (K[26] = [
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
                  K[29] || (K[29] = e("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  K[30] || (K[30] = e("div", { class: "cli-warning-commands" }, [
                    e("code", null, "pipx install comfygit"),
                    e("span", { class: "cli-warning-or" }, "or"),
                    e("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : r("", !0),
                b.value === "landing" ? (s(), o("div", d2, [
                  K[34] || (K[34] = e("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  e("button", {
                    class: "landing-option",
                    onClick: K[6] || (K[6] = (P) => b.value = "create")
                  }, [...K[31] || (K[31] = [
                    e("span", { class: "option-icon" }, "➕", -1),
                    e("div", { class: "option-content" }, [
                      e("span", { class: "option-title" }, "Create New Environment"),
                      e("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    e("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  e("button", {
                    class: "landing-option",
                    onClick: K[7] || (K[7] = (P) => {
                      C.value = !1, b.value = "import";
                    })
                  }, [...K[32] || (K[32] = [
                    e("span", { class: "option-icon" }, "📦", -1),
                    e("div", { class: "option-content" }, [
                      e("span", { class: "option-title" }, "Import Environment"),
                      e("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    e("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (J = n.existingEnvironments) != null && J.length ? (s(), o(W, { key: 0 }, [
                    K[33] || (K[33] = e("div", { class: "landing-divider" }, [
                      e("span", null, "or switch to existing")
                    ], -1)),
                    e("div", c2, [
                      (s(!0), o(W, null, ie(n.existingEnvironments, (P) => (s(), o("label", {
                        key: P,
                        class: pe(["env-option", { selected: _.value === P }])
                      }, [
                        Ue(e("input", {
                          type: "radio",
                          name: "env-select",
                          value: P,
                          "onUpdate:modelValue": K[8] || (K[8] = (V) => _.value = V)
                        }, null, 8, u2), [
                          [Ut, _.value]
                        ]),
                        e("span", m2, a(P), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : r("", !0)
                ])) : b.value === "create" ? (s(), o("div", v2, [
                  be.value ? (s(), o("div", x2, [
                    e("p", S2, [
                      K[41] || (K[41] = g(" Creating environment ", -1)),
                      e("strong", null, a(de.value), 1),
                      K[42] || (K[42] = g("... ", -1))
                    ]),
                    y(ys, {
                      progress: Te.value.progress,
                      message: Te.value.message,
                      "current-phase": Te.value.phase,
                      "show-steps": !0,
                      steps: Ae
                    }, null, 8, ["progress", "message", "current-phase"]),
                    K[43] || (K[43] = e("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (s(), o(W, { key: 0 }, [
                    K[40] || (K[40] = e("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    e("div", f2, [
                      K[35] || (K[35] = e("label", { class: "form-label" }, "Environment Name", -1)),
                      Ue(e("input", {
                        "onUpdate:modelValue": K[9] || (K[9] = (P) => de.value = P),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Ft, de.value]
                      ])
                    ]),
                    e("div", p2, [
                      K[36] || (K[36] = e("label", { class: "form-label" }, "Python Version", -1)),
                      Ue(e("select", {
                        "onUpdate:modelValue": K[10] || (K[10] = (P) => te.value = P),
                        class: "form-select"
                      }, [
                        (s(!0), o(W, null, ie(Pe(ro), (P) => (s(), o("option", {
                          key: P,
                          value: P
                        }, a(P), 9, g2))), 128))
                      ], 512), [
                        [Et, te.value]
                      ])
                    ]),
                    e("div", h2, [
                      K[37] || (K[37] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Ue(e("select", {
                        "onUpdate:modelValue": K[11] || (K[11] = (P) => Y.value = P),
                        class: "form-select",
                        disabled: me.value
                      }, [
                        (s(!0), o(W, null, ie(I.value, (P) => (s(), o("option", {
                          key: P.tag_name,
                          value: P.tag_name
                        }, a(P.name), 9, w2))), 128))
                      ], 8, y2), [
                        [Et, Y.value]
                      ])
                    ]),
                    e("div", k2, [
                      K[38] || (K[38] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Ue(e("select", {
                        "onUpdate:modelValue": K[12] || (K[12] = (P) => ue.value = P),
                        class: "form-select"
                      }, [
                        (s(!0), o(W, null, ie(Pe(Ds), (P) => (s(), o("option", {
                          key: P,
                          value: P
                        }, a(P) + a(P === "auto" ? " (detect GPU)" : ""), 9, b2))), 128))
                      ], 512), [
                        [Et, ue.value]
                      ])
                    ]),
                    e("div", _2, [
                      e("label", $2, [
                        Ue(e("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": K[13] || (K[13] = (P) => Q.value = P)
                        }, null, 512), [
                          [ps, Q.value]
                        ]),
                        K[39] || (K[39] = e("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    O.value ? (s(), o("div", C2, a(O.value), 1)) : r("", !0)
                  ], 64))
                ])) : b.value === "import" ? (s(), o("div", I2, [
                  y(fo, {
                    "workspace-path": z.value,
                    "resume-import": C.value,
                    "initial-progress": B.value ?? void 0,
                    onImportComplete: Re,
                    onImportStarted: K[14] || (K[14] = (P) => R.value = !0),
                    onSourceCleared: st
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : r("", !0)
              ], 64))
            ])) : r("", !0)
          ];
        }),
        footer: l(() => [
          e("div", E2, [
            y(ho),
            e("div", P2, [
              k.value === 1 ? (s(), S(ye, {
                key: 0,
                variant: "primary",
                disabled: !ae.value || ee.value,
                onClick: tt
              }, {
                default: l(() => [
                  g(a(ee.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : k.value === 2 ? (s(), o(W, { key: 1 }, [
                !be.value && !R.value && (b.value !== "landing" || n.setupState === "no_workspace" && !z.value) ? (s(), S(ye, {
                  key: 0,
                  variant: "secondary",
                  onClick: _e
                }, {
                  default: l(() => [...K[44] || (K[44] = [
                    g(" Back ", -1)
                  ])]),
                  _: 1
                })) : r("", !0),
                b.value === "create" ? (s(), S(ye, {
                  key: 1,
                  variant: "primary",
                  disabled: !we.value || be.value,
                  onClick: Ye
                }, {
                  default: l(() => [
                    g(a(be.value ? "Creating..." : Q.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : r("", !0),
                b.value === "landing" && _.value ? (s(), S(ye, {
                  key: 2,
                  variant: "primary",
                  onClick: rt
                }, {
                  default: l(() => [
                    g(" Switch to " + a(_.value), 1)
                  ]),
                  _: 1
                })) : r("", !0)
              ], 64)) : r("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      T.value ? (s(), S(j_, {
        key: 0,
        "workspace-path": Ze.value,
        onClose: K[16] || (K[16] = (J) => T.value = !1)
      }, null, 8, ["workspace-path"])) : r("", !0)
    ], 64));
  }
}), T2 = /* @__PURE__ */ re(M2, [["__scopeId", "data-v-9a9aadc0"]]), D2 = { class: "comfygit-panel" }, L2 = { class: "panel-header" }, z2 = { class: "header-left" }, U2 = {
  key: 0,
  class: "header-info"
}, N2 = { class: "header-actions" }, O2 = { class: "env-switcher" }, A2 = {
  key: 0,
  class: "header-info"
}, B2 = { class: "branch-name" }, F2 = { class: "panel-main" }, V2 = { class: "sidebar" }, W2 = { class: "sidebar-content" }, G2 = { class: "sidebar-section" }, j2 = { class: "sidebar-section" }, H2 = { class: "sidebar-section" }, K2 = { class: "sidebar-footer" }, q2 = { class: "content-area" }, Y2 = {
  key: 0,
  class: "error-message"
}, J2 = {
  key: 1,
  class: "loading"
}, X2 = { class: "dialog-content env-selector-dialog" }, Q2 = { class: "dialog-header" }, Z2 = { class: "dialog-body" }, e$ = { class: "env-list" }, t$ = { class: "env-info" }, s$ = { class: "env-name-row" }, o$ = { class: "env-indicator" }, n$ = { class: "env-name" }, a$ = {
  key: 0,
  class: "env-branch"
}, l$ = {
  key: 1,
  class: "current-label"
}, i$ = { class: "env-stats" }, r$ = ["onClick"], d$ = { class: "toast-container" }, c$ = { class: "toast-message" }, u$ = /* @__PURE__ */ le({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const n = t, i = c, {
      getStatus: f,
      getHistory: v,
      getBranches: u,
      checkout: m,
      createBranch: d,
      switchBranch: p,
      deleteBranch: w,
      getEnvironments: k,
      switchEnvironment: _,
      getSwitchProgress: b,
      deleteEnvironment: T,
      syncEnvironmentManually: R,
      repairWorkflowModels: $,
      getSetupStatus: C
    } = He(), B = to(), x = h(null), M = h([]), Z = h([]), F = h([]), G = U(() => F.value.find((j) => j.is_current)), E = h(null), D = h(!1), A = h(1), de = U(() => {
      var j;
      return ((j = E.value) == null ? void 0 : j.state) || "managed";
    }), te = h(!1), Y = h(null), ue = h(null), Q = h(!1), O = h(null), z = h(null), I = h(null), me = h(!1), ee = h(!1), be = h(""), Ie = h(null), Te = h({ state: "idle", progress: 0, message: "" });
    let Ae = null, ce = null;
    const ge = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, xe = n.initialView ? ge[n.initialView] : null, se = h((xe == null ? void 0 : xe.view) ?? "status"), ae = h((xe == null ? void 0 : xe.section) ?? "this-env");
    function we(j, N) {
      se.value = j, ae.value = N;
    }
    function ze(j) {
      const he = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[j];
      he && we(he.view, he.section);
    }
    function Ze() {
      we("branches", "this-env");
    }
    function et() {
      i("close"), setTimeout(() => {
        var N;
        const j = document.querySelectorAll("button.comfyui-button");
        for (const he of j)
          if (((N = he.textContent) == null ? void 0 : N.trim()) === "Manager") {
            he.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const $e = h(null), tt = h(!1), Ye = h(!1), je = h([]);
    let rt = 0;
    function _e(j, N = "info", he = 3e3) {
      const Ee = ++rt;
      return je.value.push({ id: Ee, message: j, type: N }), he > 0 && setTimeout(() => {
        je.value = je.value.filter((Fe) => Fe.id !== Ee);
      }, he), Ee;
    }
    function Re(j) {
      je.value = je.value.filter((N) => N.id !== j);
    }
    function st(j, N) {
      _e(j, N);
    }
    const Je = U(() => {
      if (!x.value) return "neutral";
      const j = x.value.workflows, N = j.new.length > 0 || j.modified.length > 0 || j.deleted.length > 0 || x.value.has_changes;
      return x.value.comparison.is_synced ? N ? "warning" : "success" : "error";
    });
    U(() => x.value ? Je.value === "success" ? "All synced" : Je.value === "warning" ? "Uncommitted changes" : Je.value === "error" ? "Not synced" : "" : "");
    async function Le() {
      te.value = !0, Y.value = null;
      try {
        const [j, N, he, Ee] = await Promise.all([
          f(!0),
          v(),
          u(),
          k()
        ]);
        x.value = j, M.value = N.commits, Z.value = he.branches, F.value = Ee, i("statusUpdate", j), O.value && await O.value.loadWorkflows(!0);
      } catch (j) {
        Y.value = j instanceof Error ? j.message : "Failed to load status", x.value = null, M.value = [], Z.value = [];
      } finally {
        te.value = !1;
      }
    }
    function fe(j) {
      ue.value = j;
    }
    async function K(j) {
      var he;
      ue.value = null;
      const N = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      $e.value = {
        title: N ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: N ? "You have uncommitted changes that will be lost." : `Checkout commit ${j.short_hash || ((he = j.hash) == null ? void 0 : he.slice(0, 7))}?`,
        details: N ? Ne() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: N ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: N,
        onConfirm: async () => {
          var Ke;
          $e.value = null, ke();
          const Ee = _e(`Checking out ${j.short_hash || ((Ke = j.hash) == null ? void 0 : Ke.slice(0, 7))}...`, "info", 0), Fe = await m(j.hash, N);
          Re(Ee), Fe.status === "success" ? _e("Restarting ComfyUI...", "success") : _e(Fe.message || "Checkout failed", "error");
        }
      };
    }
    async function J(j) {
      const N = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      $e.value = {
        title: N ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: N ? "You have uncommitted changes." : `Switch to branch "${j}"?`,
        details: N ? Ne() : void 0,
        warning: N ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: N ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          $e.value = null, ke();
          const he = _e(`Switching to ${j}...`, "info", 0), Ee = await p(j, N);
          Re(he), Ee.status === "success" ? _e("Restarting ComfyUI...", "success") : _e(Ee.message || "Branch switch failed", "error");
        }
      };
    }
    async function P(j) {
      const N = _e(`Creating branch ${j}...`, "info", 0), he = await d(j);
      Re(N), he.status === "success" ? (_e(`Branch "${j}" created`, "success"), await Le()) : _e(he.message || "Failed to create branch", "error");
    }
    async function V(j, N = !1) {
      const he = async (Ee) => {
        var Ke;
        const Fe = _e(`Deleting branch ${j}...`, "info", 0);
        try {
          const q = await w(j, Ee);
          Re(Fe), q.status === "success" ? (_e(`Branch "${j}" deleted`, "success"), await Le()) : (Ke = q.message) != null && Ke.includes("not fully merged") ? $e.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${j}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              $e.value = null, await he(!0);
            }
          } : _e(q.message || "Failed to delete branch", "error");
        } catch (q) {
          Re(Fe);
          const L = q instanceof Error ? q.message : "Failed to delete branch";
          L.includes("not fully merged") ? $e.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${j}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              $e.value = null, await he(!0);
            }
          } : _e(L, "error");
        }
      };
      $e.value = {
        title: "Delete Branch",
        message: `Delete branch "${j}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          $e.value = null, await he(N);
        }
      };
    }
    async function ne(j) {
      ue.value = null;
      const N = prompt("Enter branch name:");
      if (N) {
        const he = _e(`Creating branch ${N}...`, "info", 0), Ee = await d(N, j.hash);
        Re(he), Ee.status === "success" ? (_e(`Branch "${N}" created from ${j.short_hash}`, "success"), await Le()) : _e(Ee.message || "Failed to create branch", "error");
      }
    }
    function ke() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Ge() {
      $e.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var j;
          $e.value = null, ke(), _e("Restarting environment...", "info");
          try {
            (j = window.app) != null && j.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function it() {
      $e.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var j;
          $e.value = null, _e("Stopping environment...", "info");
          try {
            (j = window.app) != null && j.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Xe(j, N) {
      Q.value = !1, be.value = j, Ie.value = N || null, me.value = !0;
    }
    async function St() {
      me.value = !1, ee.value = !0, ke(), Te.value = {
        progress: 10,
        state: mt(10),
        message: Tt(10)
      };
      try {
        await _(be.value, Ie.value || void 0), Wt(), Xt();
      } catch (j) {
        vt(), ee.value = !1, _e(`Failed to initiate switch: ${j instanceof Error ? j.message : "Unknown error"}`, "error"), Te.value = { state: "idle", progress: 0, message: "" }, Ie.value = null;
      }
    }
    function mt(j) {
      return j >= 100 ? "complete" : j >= 80 ? "validating" : j >= 60 ? "starting" : j >= 30 ? "syncing" : "preparing";
    }
    function Tt(j) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[mt(j)] || "";
    }
    function Wt() {
      if (ce) return;
      let j = 10;
      const N = 60, he = 5e3, Ee = 100, Fe = (N - j) / (he / Ee);
      ce = window.setInterval(() => {
        if (j += Fe, j >= N && (j = N, vt()), Te.value.progress < N) {
          const Ke = Math.floor(j);
          Te.value = {
            progress: Ke,
            state: mt(Ke),
            message: Tt(Ke)
          };
        }
      }, Ee);
    }
    function vt() {
      ce && (clearInterval(ce), ce = null);
    }
    function Xt() {
      Ae || (Ae = window.setInterval(async () => {
        try {
          let j = await B.getStatus();
          if ((!j || j.state === "idle") && (j = await b()), !j)
            return;
          const N = j.progress || 0;
          N >= 60 && vt();
          const he = Math.max(N, Te.value.progress), Ee = j.state && j.state !== "idle" && j.state !== "unknown", Fe = Ee ? j.state : mt(he), Ke = Ee && j.message || Tt(he);
          Te.value = {
            state: Fe,
            progress: he,
            message: Ke
          }, j.state === "complete" ? (vt(), Nt(), ee.value = !1, _e(`✓ Switched to ${be.value}`, "success"), await Le(), be.value = "") : j.state === "rolled_back" ? (vt(), Nt(), ee.value = !1, _e("Switch failed, restored previous environment", "warning"), be.value = "") : j.state === "critical_failure" && (vt(), Nt(), ee.value = !1, _e(`Critical error during switch: ${j.message}`, "error"), be.value = "");
        } catch (j) {
          console.error("Failed to poll switch progress:", j);
        }
      }, 1e3));
    }
    function Nt() {
      vt(), Ae && (clearInterval(Ae), Ae = null);
    }
    function Qt() {
      var j;
      me.value = !1, be.value = "", (j = E.value) != null && j.state && E.value.state !== "managed" && (A.value = E.value.state === "no_workspace" ? 1 : 2, D.value = !0);
    }
    async function Ot(j) {
      tt.value = !1, await Le(), _e(j.message, j.success ? "success" : "error");
    }
    async function Zt() {
      Ye.value = !1;
      const j = _e("Syncing environment...", "info", 0);
      try {
        const N = await R("skip", !0);
        if (Re(j), N.status === "success") {
          const he = [];
          N.nodes_installed.length && he.push(`${N.nodes_installed.length} installed`), N.nodes_removed.length && he.push(`${N.nodes_removed.length} removed`);
          const Ee = he.length ? `: ${he.join(", ")}` : "";
          _e(`✓ Environment synced${Ee}`, "success"), await Le();
        } else {
          const he = N.errors.length ? N.errors.join("; ") : N.message;
          _e(`Sync failed: ${he}`, "error");
        }
      } catch (N) {
        Re(j), _e(`Sync error: ${N instanceof Error ? N.message : "Unknown error"}`, "error");
      }
    }
    async function ft(j) {
      var N;
      try {
        const he = await $(j);
        he.failed.length === 0 ? _e(`✓ Repaired ${he.success} workflow${he.success === 1 ? "" : "s"}`, "success") : _e(`Repaired ${he.success}, failed: ${he.failed.length}`, "warning"), await Le();
      } catch (he) {
        _e(`Repair failed: ${he instanceof Error ? he.message : "Unknown error"}`, "error");
      } finally {
        (N = I.value) == null || N.resetRepairingState();
      }
    }
    async function Gt() {
      var N, he;
      const j = _e("Repairing environment...", "info", 0);
      try {
        const Ee = await R("skip", !0);
        if (Re(j), Ee.status === "success") {
          const Fe = [];
          Ee.nodes_installed.length && Fe.push(`${Ee.nodes_installed.length} installed`), Ee.nodes_removed.length && Fe.push(`${Ee.nodes_removed.length} removed`);
          const Ke = Fe.length ? `: ${Fe.join(", ")}` : "";
          _e(`✓ Environment repaired${Ke}`, "success"), (N = I.value) == null || N.closeDetailModal(), await Le();
        } else {
          const Fe = Ee.errors.length ? Ee.errors.join(", ") : Ee.message || "Unknown error";
          _e(`Repair failed: ${Fe}`, "error");
        }
      } catch (Ee) {
        Re(j), _e(`Repair error: ${Ee instanceof Error ? Ee.message : "Unknown error"}`, "error");
      } finally {
        (he = I.value) == null || he.resetRepairingEnvironmentState();
      }
    }
    async function es(j, N) {
      _e(`Environment '${j}' created`, "success"), await Le(), z.value && await z.value.loadEnvironments(), N && await Xe(j);
    }
    async function ts(j) {
      var N;
      if (((N = G.value) == null ? void 0 : N.name) === j) {
        _e("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      $e.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${j}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          $e.value = null;
          try {
            const he = await T(j);
            he.status === "success" ? (_e(`Environment "${j}" deleted`, "success"), await Le(), z.value && await z.value.loadEnvironments()) : _e(he.message || "Failed to delete environment", "error");
          } catch (he) {
            _e(`Error deleting environment: ${he instanceof Error ? he.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function jt(j, N) {
      D.value = !1;
      try {
        E.value = await C();
      } catch {
      }
      await Xe(j, N);
    }
    function ss() {
      D.value = !1, i("close");
    }
    async function At(j, N) {
      await Xe(j, N);
    }
    async function H(j) {
      await Le(), await Xe(j);
    }
    async function ve(j) {
      E.value = await C(), console.log(`Environment '${j}' created. Available for switching.`);
    }
    function Se() {
      we("environments", "all-envs"), setTimeout(() => {
        var j;
        (j = z.value) == null || j.openCreateModal();
      }, 100);
    }
    function Ne() {
      if (!x.value) return [];
      const j = [], N = x.value.workflows;
      return N.new.length && j.push(`${N.new.length} new workflow(s)`), N.modified.length && j.push(`${N.modified.length} modified workflow(s)`), N.deleted.length && j.push(`${N.deleted.length} deleted workflow(s)`), j;
    }
    return We(async () => {
      try {
        if (E.value = await C(), E.value.state === "no_workspace") {
          D.value = !0, A.value = 1;
          return;
        }
        if (E.value.state === "empty_workspace") {
          D.value = !0, A.value = 2;
          return;
        }
        if (E.value.state === "unmanaged") {
          D.value = !0, A.value = 2;
          return;
        }
      } catch (j) {
        console.warn("Setup status check failed, proceeding normally:", j);
      }
      await Le();
    }), (j, N) => {
      var he, Ee, Fe, Ke, q, L, Ce, qe, kt, Dt, Lt, It;
      return s(), o("div", D2, [
        e("div", L2, [
          e("div", z2, [
            N[31] || (N[31] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            x.value ? (s(), o("div", U2)) : r("", !0)
          ]),
          e("div", N2, [
            y(go),
            N[34] || (N[34] = e("span", { class: "header-divider" }, null, -1)),
            e("button", {
              class: pe(["icon-btn", { spinning: te.value }]),
              onClick: Le,
              title: "Refresh"
            }, [...N[32] || (N[32] = [
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
              onClick: N[0] || (N[0] = (X) => i("close")),
              title: "Close"
            }, [...N[33] || (N[33] = [
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
        e("div", O2, [
          e("div", { class: "env-switcher-header" }, [
            N[35] || (N[35] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Ge
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
            onClick: N[1] || (N[1] = (X) => we("environments", "all-envs"))
          }, [
            x.value ? (s(), o("div", A2, [
              e("span", null, a(((he = G.value) == null ? void 0 : he.name) || ((Ee = x.value) == null ? void 0 : Ee.environment) || "Loading..."), 1),
              e("span", B2, "(" + a(x.value.branch || "detached") + ")", 1)
            ])) : r("", !0),
            N[36] || (N[36] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", F2, [
          e("div", V2, [
            e("div", W2, [
              e("div", G2, [
                N[37] || (N[37] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                e("button", {
                  class: pe(["sidebar-item", { active: se.value === "status" && ae.value === "this-env" }]),
                  onClick: N[2] || (N[2] = (X) => we("status", "this-env"))
                }, " STATUS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: se.value === "workflows" }]),
                  onClick: N[3] || (N[3] = (X) => we("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: se.value === "models-env" }]),
                  onClick: N[4] || (N[4] = (X) => we("models-env", "this-env"))
                }, " MODELS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: se.value === "branches" }]),
                  onClick: N[5] || (N[5] = (X) => we("branches", "this-env"))
                }, " BRANCHES ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: se.value === "history" }]),
                  onClick: N[6] || (N[6] = (X) => we("history", "this-env"))
                }, " HISTORY ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: se.value === "nodes" }]),
                  onClick: N[7] || (N[7] = (X) => we("nodes", "this-env"))
                }, " NODES ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: se.value === "debug-env" }]),
                  onClick: N[8] || (N[8] = (X) => we("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              N[40] || (N[40] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", j2, [
                N[38] || (N[38] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                e("button", {
                  class: pe(["sidebar-item", { active: se.value === "environments" }]),
                  onClick: N[9] || (N[9] = (X) => we("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: se.value === "model-index" }]),
                  onClick: N[10] || (N[10] = (X) => we("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: se.value === "settings" }]),
                  onClick: N[11] || (N[11] = (X) => we("settings", "all-envs"))
                }, " SETTINGS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: se.value === "debug-workspace" }]),
                  onClick: N[12] || (N[12] = (X) => we("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              N[41] || (N[41] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", H2, [
                N[39] || (N[39] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                e("button", {
                  class: pe(["sidebar-item", { active: se.value === "deploy" }]),
                  onClick: N[13] || (N[13] = (X) => we("deploy", "sharing"))
                }, " DEPLOY ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: se.value === "export" }]),
                  onClick: N[14] || (N[14] = (X) => we("export", "sharing"))
                }, " EXPORT ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: se.value === "import" }]),
                  onClick: N[15] || (N[15] = (X) => we("import", "sharing"))
                }, " IMPORT ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: se.value === "remotes" }]),
                  onClick: N[16] || (N[16] = (X) => we("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            e("div", K2, [
              y(ho)
            ])
          ]),
          e("div", q2, [
            Y.value ? (s(), o("div", Y2, a(Y.value), 1)) : !x.value && se.value === "status" ? (s(), o("div", J2, " Loading status... ")) : (s(), o(W, { key: 2 }, [
              se.value === "status" ? (s(), S(nl, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: I,
                status: x.value,
                "setup-state": de.value,
                onSwitchBranch: Ze,
                onCommitChanges: N[17] || (N[17] = (X) => tt.value = !0),
                onSyncEnvironment: N[18] || (N[18] = (X) => Ye.value = !0),
                onViewWorkflows: N[19] || (N[19] = (X) => we("workflows", "this-env")),
                onViewHistory: N[20] || (N[20] = (X) => we("history", "this-env")),
                onViewDebug: N[21] || (N[21] = (X) => we("debug-env", "this-env")),
                onViewNodes: N[22] || (N[22] = (X) => we("nodes", "this-env")),
                onRepairMissingModels: ft,
                onRepairEnvironment: Gt,
                onStartSetup: N[23] || (N[23] = (X) => D.value = !0),
                onViewEnvironments: N[24] || (N[24] = (X) => we("environments", "all-envs")),
                onCreateEnvironment: Se
              }, null, 8, ["status", "setup-state"])) : se.value === "workflows" ? (s(), S(Sm, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: O,
                onRefresh: Le
              }, null, 512)) : se.value === "models-env" ? (s(), S(rv, {
                key: 2,
                onNavigate: ze
              })) : se.value === "branches" ? (s(), S(wl, {
                key: 3,
                branches: Z.value,
                current: ((Fe = x.value) == null ? void 0 : Fe.branch) || null,
                onSwitch: J,
                onCreate: P,
                onDelete: V
              }, null, 8, ["branches", "current"])) : se.value === "history" ? (s(), S(Rl, {
                key: 4,
                commits: M.value,
                onSelect: fe,
                onCheckout: K
              }, null, 8, ["commits"])) : se.value === "nodes" ? (s(), S(nf, {
                key: 5,
                "version-mismatches": ((q = (Ke = x.value) == null ? void 0 : Ke.comparison) == null ? void 0 : q.version_mismatches) || [],
                onOpenNodeManager: et,
                onRepairEnvironment: Gt,
                onToast: st
              }, null, 8, ["version-mismatches"])) : se.value === "debug-env" ? (s(), S(mh, { key: 6 })) : se.value === "environments" ? (s(), S(p1, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: z,
                onSwitch: Xe,
                onCreated: es,
                onDelete: ts
              }, null, 512)) : se.value === "model-index" ? (s(), S(Ev, {
                key: 8,
                onRefresh: Le
              })) : se.value === "settings" ? (s(), S(rh, { key: 9 })) : se.value === "debug-workspace" ? (s(), S(ch, { key: 10 })) : se.value === "deploy" ? (s(), S(Hk, {
                key: 11,
                onToast: st,
                onNavigate: ze
              })) : se.value === "export" ? (s(), S(j1, { key: 12 })) : se.value === "import" ? (s(), S(O0, {
                key: 13,
                onImportCompleteSwitch: H
              })) : se.value === "remotes" ? (s(), S(Fg, {
                key: 14,
                onToast: st
              })) : r("", !0)
            ], 64))
          ])
        ]),
        ue.value ? (s(), S(cb, {
          key: 0,
          commit: ue.value,
          onClose: N[25] || (N[25] = (X) => ue.value = null),
          onCheckout: K,
          onCreateBranch: ne
        }, null, 8, ["commit"])) : r("", !0),
        $e.value ? (s(), S(ao, {
          key: 1,
          title: $e.value.title,
          message: $e.value.message,
          details: $e.value.details,
          warning: $e.value.warning,
          confirmLabel: $e.value.confirmLabel,
          cancelLabel: $e.value.cancelLabel,
          secondaryLabel: $e.value.secondaryLabel,
          secondaryAction: $e.value.secondaryAction,
          destructive: $e.value.destructive,
          onConfirm: $e.value.onConfirm,
          onCancel: N[26] || (N[26] = (X) => $e.value = null),
          onSecondary: $e.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : r("", !0),
        y(r_, {
          show: me.value,
          "from-environment": ((L = G.value) == null ? void 0 : L.name) || "unknown",
          "to-environment": be.value,
          onConfirm: St,
          onClose: Qt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        tt.value && x.value ? (s(), S(po, {
          key: 2,
          status: x.value,
          "as-modal": !0,
          onClose: N[27] || (N[27] = (X) => tt.value = !1),
          onCommitted: Ot
        }, null, 8, ["status"])) : r("", !0),
        Ye.value && x.value ? (s(), S(E_, {
          key: 3,
          show: Ye.value,
          "mismatch-details": {
            missing_nodes: x.value.comparison.missing_nodes,
            extra_nodes: x.value.comparison.extra_nodes
          },
          onConfirm: Zt,
          onClose: N[28] || (N[28] = (X) => Ye.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : r("", !0),
        y(w_, {
          show: ee.value,
          state: Te.value.state,
          progress: Te.value.progress,
          message: Te.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        Q.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: N[30] || (N[30] = Be((X) => Q.value = !1, ["self"]))
        }, [
          e("div", X2, [
            e("div", Q2, [
              N[43] || (N[43] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: N[29] || (N[29] = (X) => Q.value = !1)
              }, [...N[42] || (N[42] = [
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
            e("div", Z2, [
              N[44] || (N[44] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", e$, [
                (s(!0), o(W, null, ie(F.value, (X) => (s(), o("div", {
                  key: X.name,
                  class: pe(["env-item", { current: X.is_current }])
                }, [
                  e("div", t$, [
                    e("div", s$, [
                      e("span", o$, a(X.is_current ? "●" : "○"), 1),
                      e("span", n$, a(X.name), 1),
                      X.current_branch ? (s(), o("span", a$, "(" + a(X.current_branch) + ")", 1)) : r("", !0),
                      X.is_current ? (s(), o("span", l$, "CURRENT")) : r("", !0)
                    ]),
                    e("div", i$, a(X.workflow_count) + " workflows • " + a(X.node_count) + " nodes ", 1)
                  ]),
                  X.is_current ? r("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (bt) => Xe(X.name)
                  }, " SWITCH ", 8, r$))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : r("", !0),
        D.value ? (s(), S(T2, {
          key: 5,
          "default-path": ((Ce = E.value) == null ? void 0 : Ce.default_path) || "~/comfygit",
          "detected-models-dir": ((qe = E.value) == null ? void 0 : qe.detected_models_dir) || null,
          "initial-step": A.value,
          "existing-environments": ((kt = E.value) == null ? void 0 : kt.environments) || [],
          "cli-installed": ((Dt = E.value) == null ? void 0 : Dt.cli_installed) ?? !0,
          "setup-state": ((Lt = E.value) == null ? void 0 : Lt.state) || "no_workspace",
          "workspace-path": ((It = E.value) == null ? void 0 : It.workspace_path) || null,
          onComplete: jt,
          onClose: ss,
          onSwitchEnvironment: At,
          onEnvironmentCreatedNoSwitch: ve
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : r("", !0),
        e("div", d$, [
          y(Io, { name: "toast" }, {
            default: l(() => [
              (s(!0), o(W, null, ie(je.value, (X) => (s(), o("div", {
                key: X.id,
                class: pe(["toast", X.type])
              }, [
                e("span", c$, a(X.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), m$ = /* @__PURE__ */ re(u$, [["__scopeId", "data-v-95d50f05"]]), v$ = { class: "item-header" }, f$ = { class: "item-info" }, p$ = { class: "filename" }, g$ = { class: "metadata" }, h$ = { class: "size" }, y$ = {
  key: 0,
  class: "type"
}, w$ = { class: "item-actions" }, k$ = {
  key: 0,
  class: "progress-section"
}, b$ = { class: "progress-bar" }, _$ = { class: "progress-stats" }, $$ = { class: "downloaded" }, C$ = { class: "speed" }, x$ = {
  key: 0,
  class: "eta"
}, S$ = {
  key: 1,
  class: "status-msg paused"
}, I$ = {
  key: 2,
  class: "status-msg queued"
}, E$ = {
  key: 3,
  class: "status-msg completed"
}, P$ = {
  key: 4,
  class: "status-msg failed"
}, R$ = {
  key: 0,
  class: "retries"
}, M$ = /* @__PURE__ */ le({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: c }) {
    const n = c;
    function i(u) {
      if (u === 0) return "?";
      const m = u / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(u / (1024 * 1024)).toFixed(1)} MB`;
    }
    function f(u) {
      return u === 0 ? "-" : `${(u / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function v(u) {
      if (u < 60) return `${Math.round(u)}s`;
      const m = Math.floor(u / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (u, m) => (s(), o("div", {
      class: pe(["download-item", `status-${t.item.status}`])
    }, [
      e("div", v$, [
        e("div", f$, [
          e("div", p$, a(t.item.filename), 1),
          e("div", g$, [
            e("span", h$, a(i(t.item.size)), 1),
            t.item.type ? (s(), o("span", y$, a(t.item.type), 1)) : r("", !0)
          ])
        ]),
        e("div", w$, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: m[0] || (m[0] = (d) => n("cancel")),
            title: "Cancel"
          }, " × ")) : r("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: m[1] || (m[1] = (d) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : r("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: m[2] || (m[2] = (d) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : r("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: m[3] || (m[3] = (d) => n("remove")),
            title: "Remove"
          }, " × ")) : r("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", k$, [
        e("div", b$, [
          e("div", {
            class: "progress-fill",
            style: Pt({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", _$, [
          e("span", $$, a(i(t.item.downloaded)) + " / " + a(i(t.item.size)), 1),
          e("span", C$, a(f(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", x$, a(v(t.item.eta)), 1)) : r("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", S$, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", I$, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", E$, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", P$, [
        g(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", R$, "(" + a(t.item.retries) + " retries)", 1)) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), as = /* @__PURE__ */ re(M$, [["__scopeId", "data-v-2110df65"]]), T$ = { class: "queue-title" }, D$ = { class: "count" }, L$ = { class: "queue-actions" }, z$ = { class: "action-label" }, U$ = {
  key: 0,
  class: "overall-progress"
}, N$ = { class: "progress-bar" }, O$ = {
  key: 0,
  class: "current-mini"
}, A$ = { class: "filename" }, B$ = { class: "speed" }, F$ = {
  key: 1,
  class: "queue-content"
}, V$ = {
  key: 0,
  class: "section"
}, W$ = {
  key: 1,
  class: "section"
}, G$ = { class: "section-header" }, j$ = { class: "section-label paused" }, H$ = { class: "items-list" }, K$ = {
  key: 2,
  class: "section"
}, q$ = { class: "section-header" }, Y$ = { class: "section-label" }, J$ = { class: "items-list" }, X$ = {
  key: 3,
  class: "section"
}, Q$ = { class: "section-header" }, Z$ = { class: "section-label" }, eC = { class: "items-list" }, tC = {
  key: 4,
  class: "section"
}, sC = { class: "section-header" }, oC = { class: "section-label failed" }, nC = { class: "items-list" }, aC = /* @__PURE__ */ le({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: n,
      queuedItems: i,
      completedItems: f,
      failedItems: v,
      pausedItems: u,
      hasItems: m,
      activeCount: d,
      cancelDownload: p,
      retryDownload: w,
      resumeDownload: k,
      resumeAllPaused: _,
      removeItem: b,
      clearCompleted: T
    } = us(), R = h(!1);
    let $ = null;
    xt(
      () => ({
        active: d.value,
        failed: v.value.length,
        paused: u.value.length,
        completed: f.value.length
      }),
      (M, Z) => {
        $ && (clearTimeout($), $ = null);
        const F = M.active === 0 && M.failed === 0 && M.paused === 0 && M.completed > 0, G = Z && (Z.active > 0 || Z.paused > 0);
        F && G && ($ = setTimeout(() => {
          T(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = U(() => {
      var F;
      if (c.items.length === 0) return 0;
      const M = f.value.length, Z = ((F = n.value) == null ? void 0 : F.progress) || 0;
      return Math.round((M + Z / 100) / c.items.length * 100);
    });
    function B(M) {
      p(M);
    }
    function x(M) {
      return M === 0 ? "" : `${(M / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (M, Z) => (s(), S(Qe, { to: "body" }, [
      Pe(m) ? (s(), o("div", {
        key: 0,
        class: pe(["model-download-queue", { minimized: !R.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: Z[0] || (Z[0] = (F) => R.value = !R.value)
        }, [
          e("div", T$, [
            Z[4] || (Z[4] = e("span", { class: "icon" }, "↓", -1)),
            Z[5] || (Z[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", D$, "(" + a(Pe(d)) + "/" + a(Pe(c).items.length) + ")", 1)
          ]),
          e("div", L$, [
            e("span", z$, a(R.value ? "minimize" : "expand"), 1)
          ])
        ]),
        R.value ? (s(), o("div", F$, [
          Pe(n) ? (s(), o("div", V$, [
            Z[6] || (Z[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            y(as, {
              item: Pe(n),
              onCancel: Z[1] || (Z[1] = (F) => B(Pe(n).id))
            }, null, 8, ["item"])
          ])) : r("", !0),
          Pe(u).length > 0 ? (s(), o("div", W$, [
            e("div", G$, [
              e("span", j$, "Paused (" + a(Pe(u).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: Z[2] || (Z[2] = //@ts-ignore
                (...F) => Pe(_) && Pe(_)(...F))
              }, "Resume All")
            ]),
            e("div", H$, [
              (s(!0), o(W, null, ie(Pe(u), (F) => (s(), S(as, {
                key: F.id,
                item: F,
                onResume: (G) => Pe(k)(F.id),
                onRemove: (G) => Pe(b)(F.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          Pe(i).length > 0 ? (s(), o("div", K$, [
            e("div", q$, [
              e("span", Y$, "Queued (" + a(Pe(i).length) + ")", 1)
            ]),
            e("div", J$, [
              (s(!0), o(W, null, ie(Pe(i), (F) => (s(), S(as, {
                key: F.id,
                item: F,
                onCancel: (G) => B(F.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : r("", !0),
          Pe(f).length > 0 ? (s(), o("div", X$, [
            e("div", Q$, [
              e("span", Z$, "Completed (" + a(Pe(f).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: Z[3] || (Z[3] = //@ts-ignore
                (...F) => Pe(T) && Pe(T)(...F))
              }, "Clear")
            ]),
            e("div", eC, [
              (s(!0), o(W, null, ie(Pe(f).slice(0, 3), (F) => (s(), S(as, {
                key: F.id,
                item: F,
                onRemove: (G) => Pe(b)(F.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          Pe(v).length > 0 ? (s(), o("div", tC, [
            e("div", sC, [
              e("span", oC, "Failed (" + a(Pe(v).length) + ")", 1)
            ]),
            e("div", nC, [
              (s(!0), o(W, null, ie(Pe(v), (F) => (s(), S(as, {
                key: F.id,
                item: F,
                onRetry: (G) => Pe(w)(F.id),
                onRemove: (G) => Pe(b)(F.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : r("", !0)
        ])) : (s(), o("div", U$, [
          e("div", N$, [
            e("div", {
              class: "progress-fill",
              style: Pt({ width: `${C.value}%` })
            }, null, 4)
          ]),
          Pe(n) ? (s(), o("div", O$, [
            e("span", A$, a(Pe(n).filename), 1),
            e("span", B$, a(x(Pe(n).speed)), 1)
          ])) : r("", !0)
        ]))
      ], 2)) : r("", !0)
    ]));
  }
}), lC = /* @__PURE__ */ re(aC, [["__scopeId", "data-v-60751cfa"]]), iC = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', rC = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', dC = {
  comfy: iC,
  phosphor: rC
}, zs = "comfy", yo = "comfygit-theme";
let Bt = null, wo = zs;
function cC() {
  try {
    const t = localStorage.getItem(yo);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return zs;
}
function ko(t = zs) {
  Bt && Bt.remove(), Bt = document.createElement("style"), Bt.id = "comfygit-theme-styles", Bt.setAttribute("data-theme", t), Bt.textContent = dC[t], document.head.appendChild(Bt), document.body.setAttribute("data-comfygit-theme", t), wo = t;
  try {
    localStorage.setItem(yo, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function uC() {
  return wo;
}
function mC(t) {
  ko(t);
}
function vC(t) {
  var v;
  const { ui_id: c, state: n } = t || {}, i = (n == null ? void 0 : n.history) || {};
  if (!c)
    return null;
  const f = i[c];
  return f && f.result === "error" && ((v = f.status) == null ? void 0 : v.status_str) === "error" ? (f.status.messages || [])[0] || "Unknown error" : null;
}
const Us = document.createElement("link");
Us.rel = "stylesheet";
Us.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Us);
const fC = cC();
ko(fC);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), mC(t);
  },
  getTheme: () => {
    const t = uC();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let gt = null, dt = null, ds = null, ls = null, Xs = null;
const Yt = h(null);
let Ns = "managed", bo = !1;
async function fs() {
  var t;
  if (!((t = zt) != null && t.api)) return null;
  try {
    const c = await zt.api.fetchApi("/v2/comfygit/status");
    c.ok && (Yt.value = await c.json());
  } catch {
  }
}
async function xs() {
  var t;
  if ((t = zt) != null && t.api)
    try {
      const c = await zt.api.fetchApi("/v2/setup/status");
      if (c.ok) {
        const n = await c.json();
        Ns = n.state, bo = n.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function Ss() {
  var c;
  if (Ns === "managed" || !bo) return;
  const t = document.querySelectorAll("button.comfyui-button");
  for (const n of t)
    if (((c = n.textContent) == null ? void 0 : c.trim()) === "Manager" && !n.querySelector("svg, i, img")) {
      n.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function pC() {
  if (!Yt.value) return !1;
  const t = Yt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Yt.value.has_changes;
}
function Qs(t) {
  gt && gt.remove(), gt = document.createElement("div"), gt.className = "comfygit-panel-overlay";
  const c = document.createElement("div");
  c.className = "comfygit-panel-container", gt.appendChild(c), gt.addEventListener("click", (f) => {
    f.target === gt && $s();
  });
  const n = (f) => {
    f.key === "Escape" && ($s(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), Rs({
    render: () => Ms(m$, {
      initialView: t,
      onClose: $s,
      onStatusUpdate: async (f) => {
        Yt.value = f, cs(), await xs(), Is(), Ss();
      }
    })
  }).mount(c), document.body.appendChild(gt);
}
function $s() {
  gt && (gt.remove(), gt = null);
}
function gC(t) {
  is(), dt = document.createElement("div"), dt.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  dt.style.position = "fixed", dt.style.top = `${c.bottom + 8}px`, dt.style.right = `${window.innerWidth - c.right}px`, dt.style.zIndex = "10001";
  const n = (f) => {
    dt && !dt.contains(f.target) && f.target !== t && (is(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const i = (f) => {
    f.key === "Escape" && (is(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), ds = Rs({
    render: () => Ms(po, {
      status: Yt.value,
      onClose: is,
      onCommitted: (f) => {
        is(), hC(f.success, f.message), fs().then(cs);
      }
    })
  }), ds.mount(dt), document.body.appendChild(dt);
}
function is() {
  ds && (ds.unmount(), ds = null), dt && (dt.remove(), dt = null);
}
function hC(t, c) {
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
  const v = document.createElement("span");
  v.textContent = c, n.appendChild(v), document.body.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", n.style.transition = "opacity 0.2s ease", setTimeout(() => n.remove(), 200);
  }, 3e3);
}
function yC() {
  ls || (ls = document.createElement("div"), ls.className = "comfygit-download-queue-root", Xs = Rs({
    render: () => Ms(lC)
  }), Xs.mount(ls), document.body.appendChild(ls), console.log("[ComfyGit] Model download queue mounted"));
}
let ct = null;
function cs() {
  if (!ct) return;
  const t = ct.querySelector(".commit-indicator");
  t && (t.style.display = pC() ? "block" : "none");
}
function Is() {
  if (!ct) return;
  const t = Ns !== "managed";
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
    var f, v;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = Qs, ct = document.createElement("button"), ct.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", ct.innerHTML = 'Commit <span class="commit-indicator"></span>', ct.title = "Quick Commit", ct.onclick = () => gC(ct), t.appendChild(c), t.appendChild(ct), (v = (f = zt.menu) == null ? void 0 : f.settingsGroup) != null && v.element && (zt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), yC();
    const { loadPendingDownloads: n } = us();
    n(), await Promise.all([fs(), xs()]), cs(), Is(), Ss(), setTimeout(Ss, 100), setInterval(async () => {
      await Promise.all([fs(), xs()]), cs(), Is();
    }, 3e4);
    const i = zt.api;
    if (i) {
      let u = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((w) => {
          (w.startsWith("workflow:") || w.startsWith("Comfy.OpenWorkflowsPaths:") || w.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(w);
        }), window.location.reload();
      }, m = function() {
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
        const _ = document.createElement("button");
        _.textContent = "Refresh", _.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, _.onmouseover = () => _.style.background = "var(--comfy-input-bg)", _.onmouseout = () => _.style.background = "var(--comfy-menu-bg)", _.onclick = () => u(), w.appendChild(_);
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
        `, b.onmouseover = () => b.style.opacity = "1", b.onmouseout = () => b.style.opacity = "0.6", b.onclick = () => w.remove(), w.appendChild(b), document.body.appendChild(w), console.log("[ComfyGit] Refresh notification displayed");
      }, d = function(w) {
        const k = document.getElementById("comfygit-error-toast");
        k && k.remove();
        const _ = document.createElement("div");
        _.id = "comfygit-error-toast", _.style.cssText = `
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
        const b = document.createElement("span");
        b.textContent = "⚠️", b.style.fontSize = "20px", _.appendChild(b);
        const T = document.createElement("div");
        T.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const R = document.createElement("div");
        R.textContent = "Node installation failed", R.style.cssText = "font-weight: 600; color: #e53935;", T.appendChild(R);
        const $ = document.createElement("div");
        $.textContent = "Dependency conflict detected", $.style.cssText = "font-size: 12px; opacity: 0.8;", T.appendChild($), _.appendChild(T);
        const C = document.createElement("button");
        C.textContent = "View Logs", C.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, C.onmouseover = () => C.style.background = "#c62828", C.onmouseout = () => C.style.background = "#e53935", C.onclick = () => {
          _.remove(), Qs("debug-env");
        }, _.appendChild(C);
        const B = document.createElement("button");
        B.textContent = "×", B.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, B.onmouseover = () => B.style.opacity = "1", B.onmouseout = () => B.style.opacity = "0.6", B.onclick = () => _.remove(), _.appendChild(B), document.body.appendChild(_), console.log("[ComfyGit] Manager error toast displayed:", w), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && _.remove();
        }, 1e4);
      };
      i.addEventListener("comfygit:workflow-changed", async (w) => {
        const { change_type: k, workflow_name: _ } = w.detail;
        console.log(`[ComfyGit] Workflow ${k}: ${_}`), await fs(), cs();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let p = !1;
      i.addEventListener("status", async (w) => {
        const k = w.detail != null;
        k && !p && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), u()) : m()), p = k;
      }), console.log("[ComfyGit] Refresh notification system initialized"), i.addEventListener("cm-task-completed", (w) => {
        const k = vC(w.detail);
        k && d(k);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
