import { app as Ut } from "../../scripts/app.js";
import { defineComponent as oe, createElementBlock as o, openBlock as s, createCommentVNode as r, createElementVNode as e, renderSlot as Re, createBlock as P, resolveDynamicComponent as ks, normalizeClass as pe, withCtx as l, toDisplayString as a, createVNode as w, createTextVNode as g, computed as O, Fragment as W, renderList as ne, normalizeStyle as Rt, ref as h, onMounted as We, watch as St, Teleport as Ye, withModifiers as Be, Transition as co, createSlots as Bt, withKeys as xt, reactive as us, onUnmounted as bs, readonly as uo, unref as Ie, withDirectives as ze, vModelText as Ot, vModelRadio as Nt, vModelCheckbox as is, nextTick as mo, vModelSelect as Mt, vModelDynamic as vo, TransitionGroup as fo, createApp as _s, h as $s } from "vue";
const po = { class: "panel-layout" }, go = {
  key: 0,
  class: "panel-layout-header"
}, ho = {
  key: 1,
  class: "panel-layout-search"
}, yo = { class: "panel-layout-content" }, wo = {
  key: 2,
  class: "panel-layout-footer"
}, ko = /* @__PURE__ */ oe({
  __name: "PanelLayout",
  setup(t) {
    return (c, n) => (s(), o("div", po, [
      c.$slots.header ? (s(), o("div", go, [
        Re(c.$slots, "header", {}, void 0, !0)
      ])) : r("", !0),
      c.$slots.search ? (s(), o("div", ho, [
        Re(c.$slots, "search", {}, void 0, !0)
      ])) : r("", !0),
      e("div", yo, [
        Re(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (s(), o("div", wo, [
        Re(c.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), ae = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [i, f] of c)
    n[i] = f;
  return n;
}, Ze = /* @__PURE__ */ ae(ko, [["__scopeId", "data-v-21565df9"]]), bo = {
  key: 0,
  class: "panel-title-prefix"
}, _o = {
  key: 1,
  class: "panel-title-prefix-theme"
}, $o = /* @__PURE__ */ oe({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, n) => (s(), P(ks(`h${t.level}`), {
      class: pe(["panel-title", t.variant])
    }, {
      default: l(() => [
        t.showPrefix ? (s(), o("span", bo, a(t.prefix), 1)) : (s(), o("span", _o)),
        Re(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Co = /* @__PURE__ */ ae($o, [["__scopeId", "data-v-c3875efc"]]), xo = ["title"], So = ["width", "height"], Io = /* @__PURE__ */ oe({
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
      ])], 8, So))
    ], 8, xo));
  }
}), Vs = /* @__PURE__ */ ae(Io, [["__scopeId", "data-v-6fc7f16d"]]), Eo = { class: "header-left" }, Po = {
  key: 0,
  class: "header-actions"
}, Mo = /* @__PURE__ */ oe({
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
      e("div", Eo, [
        w(Co, { "show-prefix": t.showPrefix }, {
          default: l(() => [
            g(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), P(Vs, {
          key: 0,
          onClick: n[0] || (n[0] = (i) => c.$emit("info-click"))
        })) : r("", !0)
      ]),
      c.$slots.actions ? (s(), o("div", Po, [
        Re(c.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), et = /* @__PURE__ */ ae(Mo, [["__scopeId", "data-v-55a62cd6"]]), Ro = {
  key: 0,
  class: "section-title-count"
}, To = {
  key: 1,
  class: "section-title-icon"
}, Do = /* @__PURE__ */ oe({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (s(), P(ks(`h${t.level}`), {
      class: pe(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, {
      default: l(() => [
        Re(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Ro, "(" + a(t.count) + ")", 1)) : r("", !0),
        t.clickable ? (s(), o("span", To, a(t.expanded ? "▼" : "▸"), 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), mt = /* @__PURE__ */ ae(Do, [["__scopeId", "data-v-559361eb"]]), Lo = { class: "status-grid" }, zo = { class: "status-grid__columns" }, Uo = { class: "status-grid__column" }, No = { class: "status-grid__title" }, Oo = { class: "status-grid__column status-grid__column--right" }, Ao = { class: "status-grid__title" }, Bo = {
  key: 0,
  class: "status-grid__footer"
}, Fo = /* @__PURE__ */ oe({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", Lo, [
      e("div", zo, [
        e("div", Uo, [
          e("h4", No, a(t.leftTitle), 1),
          Re(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Oo, [
          e("h4", Ao, a(t.rightTitle), 1),
          Re(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (s(), o("div", Bo, [
        Re(c.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), Vo = /* @__PURE__ */ ae(Fo, [["__scopeId", "data-v-73b7ba3f"]]), Wo = {
  key: 0,
  class: "status-item__icon"
}, Go = {
  key: 1,
  class: "status-item__count"
}, jo = { class: "status-item__label" }, Ho = /* @__PURE__ */ oe({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const c = t, n = O(() => `status-item--${c.variant}`);
    return (i, f) => (s(), o("div", {
      class: pe(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", Wo, a(t.icon), 1)) : r("", !0),
      t.count !== void 0 ? (s(), o("span", Go, a(t.count), 1)) : r("", !0),
      e("span", jo, a(t.label), 1)
    ], 2));
  }
}), $t = /* @__PURE__ */ ae(Ho, [["__scopeId", "data-v-6f929183"]]), Ko = { class: "issue-card__header" }, qo = { class: "issue-card__icon" }, Yo = { class: "issue-card__title" }, Jo = {
  key: 0,
  class: "issue-card__content"
}, Xo = {
  key: 0,
  class: "issue-card__description"
}, Qo = {
  key: 1,
  class: "issue-card__items"
}, Zo = {
  key: 2,
  class: "issue-card__actions"
}, en = /* @__PURE__ */ oe({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const c = t, n = O(() => `issue-card--${c.severity}`);
    return (i, f) => (s(), o("div", {
      class: pe(["issue-card", n.value])
    }, [
      e("div", Ko, [
        e("span", qo, a(t.icon), 1),
        e("h4", Yo, a(t.title), 1)
      ]),
      i.$slots.default || t.description ? (s(), o("div", Jo, [
        t.description ? (s(), o("p", Xo, a(t.description), 1)) : r("", !0),
        Re(i.$slots, "default", {}, void 0, !0)
      ])) : r("", !0),
      t.items && t.items.length ? (s(), o("div", Qo, [
        (s(!0), o(W, null, ne(t.items, (p, u) => (s(), o("div", {
          key: u,
          class: "issue-card__item"
        }, [
          f[0] || (f[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(p), 1)
        ]))), 128))
      ])) : r("", !0),
      i.$slots.actions ? (s(), o("div", Zo, [
        Re(i.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), ht = /* @__PURE__ */ ae(en, [["__scopeId", "data-v-df6aa348"]]), tn = ["type", "disabled"], sn = {
  key: 0,
  class: "spinner"
}, on = /* @__PURE__ */ oe({
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
      t.loading ? (s(), o("span", sn)) : r("", !0),
      t.loading ? r("", !0) : Re(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, tn));
  }
}), te = /* @__PURE__ */ ae(on, [["__scopeId", "data-v-772abe47"]]), nn = { class: "empty-state" }, an = {
  key: 0,
  class: "empty-icon"
}, ln = { class: "empty-message" }, rn = /* @__PURE__ */ oe({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, n) => (s(), o("div", nn, [
      t.icon ? (s(), o("div", an, a(t.icon), 1)) : r("", !0),
      e("p", ln, a(t.message), 1),
      t.actionLabel ? (s(), P(te, {
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
}), kt = /* @__PURE__ */ ae(rn, [["__scopeId", "data-v-4466284f"]]), dn = /* @__PURE__ */ oe({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: pe(["detail-label"]),
      style: Rt({ minWidth: t.minWidth })
    }, [
      Re(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), as = /* @__PURE__ */ ae(dn, [["__scopeId", "data-v-75e9eeb8"]]), cn = /* @__PURE__ */ oe({
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
      Re(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), gs = /* @__PURE__ */ ae(cn, [["__scopeId", "data-v-2f186e4c"]]), un = { class: "detail-row" }, mn = /* @__PURE__ */ oe({
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
    return (c, n) => (s(), o("div", un, [
      w(as, { "min-width": t.labelMinWidth }, {
        default: l(() => [
          g(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), P(gs, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: l(() => [
          g(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Re(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Ve = /* @__PURE__ */ ae(mn, [["__scopeId", "data-v-ef15664a"]]), vn = { class: "modal-header" }, fn = { class: "modal-body" }, pn = { class: "status-section" }, gn = {
  key: 0,
  class: "status-section"
}, hn = { class: "section-header-row" }, yn = {
  key: 0,
  class: "workflow-group"
}, wn = { class: "workflow-group-header" }, kn = { class: "workflow-group-title" }, bn = { class: "workflow-list" }, _n = { class: "workflow-name" }, $n = { class: "workflow-issue" }, Cn = {
  key: 1,
  class: "workflow-group"
}, xn = { class: "workflow-group-header" }, Sn = { class: "workflow-group-title" }, In = { class: "workflow-list" }, En = { class: "workflow-name" }, Pn = { class: "workflow-issue" }, Mn = {
  key: 2,
  class: "workflow-group"
}, Rn = { class: "workflow-group-header" }, Tn = { class: "workflow-group-title" }, Dn = { class: "workflow-list" }, Ln = { class: "workflow-name" }, zn = {
  key: 3,
  class: "workflow-group"
}, Un = { class: "workflow-group-header" }, Nn = { class: "workflow-group-title" }, On = { class: "workflow-list" }, An = { class: "workflow-name" }, Bn = {
  key: 4,
  class: "workflow-group"
}, Fn = { class: "workflow-group-header" }, Vn = { class: "workflow-group-title" }, Wn = { class: "workflow-list" }, Gn = { class: "workflow-name" }, jn = {
  key: 5,
  class: "workflow-group"
}, Hn = { class: "workflow-group-title" }, Kn = { class: "expand-icon" }, qn = {
  key: 0,
  class: "workflow-list"
}, Yn = { class: "workflow-name" }, Jn = {
  key: 1,
  class: "status-section"
}, Xn = {
  key: 0,
  class: "change-group"
}, Qn = { class: "change-group-header" }, Zn = { class: "change-group-title" }, ea = { class: "change-list" }, ta = { class: "node-name" }, sa = {
  key: 0,
  class: "dev-badge"
}, oa = {
  key: 1,
  class: "change-group"
}, na = { class: "change-group-header" }, aa = { class: "change-group-title" }, la = { class: "change-list" }, ia = { class: "node-name" }, ra = {
  key: 0,
  class: "dev-badge"
}, da = {
  key: 2,
  class: "change-group"
}, ca = { class: "change-list" }, ua = { class: "change-item" }, ma = { class: "node-name" }, va = {
  key: 3,
  class: "change-group"
}, fa = {
  key: 2,
  class: "status-section"
}, pa = { class: "section-header-row" }, ga = {
  key: 0,
  class: "drift-item"
}, ha = { class: "drift-list" }, ya = {
  key: 0,
  class: "drift-list-more"
}, wa = {
  key: 1,
  class: "drift-item"
}, ka = { class: "drift-list" }, ba = {
  key: 0,
  class: "drift-list-more"
}, _a = {
  key: 2,
  class: "drift-item"
}, $a = { class: "drift-list" }, Ca = { class: "version-actual" }, xa = { class: "version-expected" }, Sa = {
  key: 0,
  class: "drift-list-more"
}, Ia = {
  key: 3,
  class: "drift-item"
}, Ea = { class: "repair-action" }, Pa = {
  key: 3,
  class: "status-section"
}, Ma = { class: "info-box" }, Ra = { class: "drift-list" }, Ta = {
  key: 0,
  class: "drift-list-more"
}, Da = {
  key: 4,
  class: "status-section"
}, La = { class: "warning-box" }, za = {
  key: 5,
  class: "empty-state-inline"
}, Ua = { class: "modal-actions" }, Na = /* @__PURE__ */ oe({
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
    }), St(() => c.show, (_, b) => {
      console.log("StatusDetailModal show prop changed from", b, "to", _);
    }, { immediate: !0 });
    const i = O(() => {
      var _, b, D;
      return ((D = (b = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : b.analyzed) == null ? void 0 : D.filter(
        (M) => M.status === "broken" && M.sync_state === "synced"
      )) || [];
    }), f = O(() => {
      var _, b, D;
      return ((D = (b = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : b.analyzed) == null ? void 0 : D.filter(
        (M) => M.status === "broken" && M.sync_state !== "synced"
      )) || [];
    }), p = O(() => {
      var _, b, D;
      return ((D = (b = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : b.synced) == null ? void 0 : D.filter((M) => {
        var C, A, x;
        const $ = (x = (A = (C = c.status) == null ? void 0 : C.workflows) == null ? void 0 : A.analyzed) == null ? void 0 : x.find((R) => R.name === M);
        return !$ || $.status !== "broken";
      })) || [];
    }), u = O(() => {
      var _, b, D, M, $;
      return (_ = c.status) != null && _.workflows ? (((b = c.status.workflows.new) == null ? void 0 : b.length) ?? 0) > 0 || (((D = c.status.workflows.modified) == null ? void 0 : D.length) ?? 0) > 0 || (((M = c.status.workflows.deleted) == null ? void 0 : M.length) ?? 0) > 0 || ((($ = c.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), m = O(() => {
      var b, D, M;
      const _ = (b = c.status) == null ? void 0 : b.git_changes;
      return _ ? (((D = _.nodes_added) == null ? void 0 : D.length) ?? 0) > 0 || (((M = _.nodes_removed) == null ? void 0 : M.length) ?? 0) > 0 || _.workflow_changes || _.has_other_changes : !1;
    }), d = O(() => {
      var _, b, D, M, $, C;
      return !u.value && !m.value && ((b = (_ = c.status) == null ? void 0 : _.comparison) == null ? void 0 : b.is_synced) && (((D = c.status) == null ? void 0 : D.missing_models_count) ?? 0) === 0 && (((C = ($ = (M = c.status) == null ? void 0 : M.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
    }), v = O(() => {
      var b, D;
      const _ = (D = (b = c.status) == null ? void 0 : b.git_changes) == null ? void 0 : D.workflow_changes;
      return _ ? typeof _ == "number" ? _ : Object.keys(_).length : 0;
    });
    function y(_) {
      return typeof _ == "string" ? _ : _.name;
    }
    function k(_) {
      return typeof _ == "object" && _.is_development === !0;
    }
    return (_, b) => {
      var D, M, $, C, A, x, R, Y, F, G, S, T, N, ie, se, J, ue, X, z, L, I, ce;
      return s(), P(Ye, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: b[7] || (b[7] = (Q) => _.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: b[6] || (b[6] = Be(() => {
            }, ["stop"]))
          }, [
            e("div", vn, [
              b[8] || (b[8] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: b[0] || (b[0] = (Q) => _.$emit("close"))
              }, "✕")
            ]),
            e("div", fn, [
              e("div", pn, [
                w(mt, { level: "4" }, {
                  default: l(() => [...b[9] || (b[9] = [
                    g("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                w(Ve, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (s(), o("div", gn, [
                e("div", hn, [
                  w(mt, { level: "4" }, {
                    default: l(() => [...b[10] || (b[10] = [
                      g("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: b[1] || (b[1] = (Q) => _.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (s(), o("div", yn, [
                  e("div", wn, [
                    b[11] || (b[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", kn, "BROKEN (COMMITTED) (" + a(i.value.length) + ")", 1)
                  ]),
                  e("div", bn, [
                    (s(!0), o(W, null, ne(i.value, (Q) => (s(), o("div", {
                      key: Q.name,
                      class: "workflow-item"
                    }, [
                      e("span", _n, a(Q.name), 1),
                      e("span", $n, a(Q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                f.value.length ? (s(), o("div", Cn, [
                  e("div", xn, [
                    b[12] || (b[12] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Sn, "BROKEN (UNCOMMITTED) (" + a(f.value.length) + ")", 1)
                  ]),
                  e("div", In, [
                    (s(!0), o(W, null, ne(f.value, (Q) => (s(), o("div", {
                      key: Q.name,
                      class: "workflow-item"
                    }, [
                      e("span", En, a(Q.name), 1),
                      e("span", Pn, a(Q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (M = (D = t.status.workflows) == null ? void 0 : D.new) != null && M.length ? (s(), o("div", Mn, [
                  e("div", Rn, [
                    b[13] || (b[13] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Tn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Dn, [
                    (s(!0), o(W, null, ne(t.status.workflows.new, (Q) => (s(), o("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Ln, a(Q), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (C = ($ = t.status.workflows) == null ? void 0 : $.modified) != null && C.length ? (s(), o("div", zn, [
                  e("div", Un, [
                    b[14] || (b[14] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Nn, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", On, [
                    (s(!0), o(W, null, ne(t.status.workflows.modified, (Q) => (s(), o("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", An, a(Q), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (x = (A = t.status.workflows) == null ? void 0 : A.deleted) != null && x.length ? (s(), o("div", Bn, [
                  e("div", Fn, [
                    b[15] || (b[15] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Vn, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Wn, [
                    (s(!0), o(W, null, ne(t.status.workflows.deleted, (Q) => (s(), o("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Gn, a(Q), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                p.value.length ? (s(), o("div", jn, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: b[2] || (b[2] = (Q) => n.value = !n.value)
                  }, [
                    b[16] || (b[16] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Hn, "SYNCED (" + a(p.value.length) + ")", 1),
                    e("span", Kn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", qn, [
                    (s(!0), o(W, null, ne(p.value, (Q) => (s(), o("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Yn, a(Q), 1)
                    ]))), 128))
                  ])) : r("", !0)
                ])) : r("", !0)
              ])) : r("", !0),
              m.value ? (s(), o("div", Jn, [
                w(mt, { level: "4" }, {
                  default: l(() => [...b[17] || (b[17] = [
                    g("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (Y = (R = t.status.git_changes) == null ? void 0 : R.nodes_added) != null && Y.length ? (s(), o("div", Xn, [
                  e("div", Qn, [
                    b[18] || (b[18] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Zn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", ea, [
                    (s(!0), o(W, null, ne(t.status.git_changes.nodes_added, (Q) => (s(), o("div", {
                      key: y(Q),
                      class: "change-item"
                    }, [
                      e("span", ta, a(y(Q)), 1),
                      k(Q) ? (s(), o("span", sa, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (G = (F = t.status.git_changes) == null ? void 0 : F.nodes_removed) != null && G.length ? (s(), o("div", oa, [
                  e("div", na, [
                    b[19] || (b[19] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", aa, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", la, [
                    (s(!0), o(W, null, ne(t.status.git_changes.nodes_removed, (Q) => (s(), o("div", {
                      key: y(Q),
                      class: "change-item"
                    }, [
                      e("span", ia, a(y(Q)), 1),
                      k(Q) ? (s(), o("span", ra, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (S = t.status.git_changes) != null && S.workflow_changes ? (s(), o("div", da, [
                  b[20] || (b[20] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", ca, [
                    e("div", ua, [
                      e("span", ma, a(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : r("", !0),
                (T = t.status.git_changes) != null && T.has_other_changes ? (s(), o("div", va, [...b[21] || (b[21] = [
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
              (N = t.status.comparison) != null && N.is_synced ? r("", !0) : (s(), o("div", fa, [
                e("div", pa, [
                  w(mt, { level: "4" }, {
                    default: l(() => [...b[22] || (b[22] = [
                      g("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: b[3] || (b[3] = (Q) => _.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                b[26] || (b[26] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (se = (ie = t.status.comparison) == null ? void 0 : ie.missing_nodes) != null && se.length ? (s(), o("div", ga, [
                  w(Ve, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", ha, [
                    (s(!0), o(W, null, ne(t.status.comparison.missing_nodes.slice(0, 10), (Q) => (s(), o("div", {
                      key: Q,
                      class: "drift-list-item"
                    }, " - " + a(Q), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", ya, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (ue = (J = t.status.comparison) == null ? void 0 : J.extra_nodes) != null && ue.length ? (s(), o("div", wa, [
                  w(Ve, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", ka, [
                    (s(!0), o(W, null, ne(t.status.comparison.extra_nodes.slice(0, 10), (Q) => (s(), o("div", {
                      key: Q,
                      class: "drift-list-item"
                    }, " - " + a(Q), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", ba, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (z = (X = t.status.comparison) == null ? void 0 : X.version_mismatches) != null && z.length ? (s(), o("div", _a, [
                  w(Ve, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  e("div", $a, [
                    (s(!0), o(W, null, ne(t.status.comparison.version_mismatches.slice(0, 10), (Q) => (s(), o("div", {
                      key: Q.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      g(a(Q.name) + ": ", 1),
                      e("span", Ca, a(Q.actual), 1),
                      b[23] || (b[23] = g(" → ", -1)),
                      e("span", xa, a(Q.expected), 1)
                    ]))), 128)),
                    t.status.comparison.version_mismatches.length > 10 ? (s(), o("div", Sa, " ... and " + a(t.status.comparison.version_mismatches.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                ((L = t.status.comparison) == null ? void 0 : L.packages_in_sync) === !1 ? (s(), o("div", Ia, [
                  w(Ve, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : r("", !0),
                e("div", Ea, [
                  w(te, {
                    variant: "warning",
                    loading: t.isRepairing,
                    onClick: b[4] || (b[4] = (Q) => _.$emit("repair"))
                  }, {
                    default: l(() => [...b[24] || (b[24] = [
                      g(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  b[25] || (b[25] = e("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ce = (I = t.status.comparison) == null ? void 0 : I.disabled_nodes) != null && ce.length ? (s(), o("div", Pa, [
                w(mt, { level: "4" }, {
                  default: l(() => [...b[27] || (b[27] = [
                    g("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Ma, [
                  b[28] || (b[28] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Ra, [
                  (s(!0), o(W, null, ne(t.status.comparison.disabled_nodes.slice(0, 10), (Q) => (s(), o("div", {
                    key: Q,
                    class: "drift-list-item"
                  }, " • " + a(Q), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", Ta, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : r("", !0)
                ])
              ])) : r("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", Da, [
                w(mt, { level: "4" }, {
                  default: l(() => [...b[29] || (b[29] = [
                    g("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", La, [
                  b[30] || (b[30] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                b[31] || (b[31] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : r("", !0),
              d.value ? (s(), o("div", za, [...b[32] || (b[32] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : r("", !0)
            ]),
            e("div", Ua, [
              w(te, {
                variant: "secondary",
                onClick: b[5] || (b[5] = (Q) => _.$emit("close"))
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
}), Oa = /* @__PURE__ */ ae(Na, [["__scopeId", "data-v-e2b37122"]]), Aa = { class: "health-section-header" }, Ba = { class: "suggestions-content" }, Fa = { class: "suggestions-text" }, Va = { style: { "margin-top": "var(--cg-space-3)" } }, Wa = {
  key: 1,
  class: "no-issues-text"
}, Ga = /* @__PURE__ */ oe({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(t, { expose: c, emit: n }) {
    const i = t, f = h(!1), p = h(!1);
    function u() {
      f.value = !0;
    }
    function m() {
      f.value = !1, v("view-workflows");
    }
    function d() {
      f.value = !1, v("view-nodes");
    }
    const v = n, y = h(!1), k = h(!1);
    function _() {
      k.value = !0, v("repair-environment");
    }
    function b() {
      k.value = !1;
    }
    function D() {
      f.value = !1;
    }
    const M = O(() => {
      const X = i.status.workflows.analyzed || [], z = X.filter(
        (L) => L.unresolved_models_count > 0 || L.ambiguous_models_count > 0
      );
      return z.length === 0 && i.status.missing_models_count > 0 ? X.filter((L) => L.sync_state === "synced") : z;
    });
    function $() {
      const X = M.value;
      X.length !== 0 && (y.value = !0, v("repair-missing-models", X.map((z) => z.name)));
    }
    function C() {
      y.value = !1;
    }
    c({ resetRepairingState: C, resetRepairingEnvironmentState: b, closeDetailModal: D });
    const A = O(() => i.status.workflows.new.length > 0 || i.status.workflows.modified.length > 0 || i.status.workflows.deleted.length > 0), x = O(() => i.status.has_changes), R = O(() => {
      const X = i.status.git_changes;
      return X.nodes_added.length > 0 || X.nodes_removed.length > 0 || X.workflow_changes;
    }), Y = O(() => i.status.has_changes || A.value), F = O(() => Object.keys(i.status.git_changes.workflow_changes_detail).length), G = O(() => i.status.git_changes.has_other_changes), S = O(() => {
      var X;
      return ((X = i.status.workflows.analyzed) == null ? void 0 : X.filter((z) => z.status === "broken")) || [];
    }), T = O(() => {
      var X;
      return ((X = i.status.workflows.analyzed) == null ? void 0 : X.filter(
        (z) => z.has_path_sync_issues && !z.has_issues
      )) || [];
    }), N = O(() => S.value.length > 0), ie = O(() => N.value || T.value.length > 0 || i.status.missing_models_count > 0 || !i.status.comparison.is_synced || i.status.has_legacy_manager), se = O(() => {
      const X = [];
      return i.status.workflows.new.length > 0 && X.push(`${i.status.workflows.new.length} new`), i.status.workflows.modified.length > 0 && X.push(`${i.status.workflows.modified.length} modified`), i.status.workflows.deleted.length > 0 && X.push(`${i.status.workflows.deleted.length} deleted`), X.length > 0 ? `${X.join(", ")} workflow${X.length === 1 && !X[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), J = O(() => {
      var L, I;
      const X = [], z = i.status.comparison;
      return (L = z.missing_nodes) != null && L.length && X.push(`${z.missing_nodes.length} missing node${z.missing_nodes.length === 1 ? "" : "s"}`), (I = z.extra_nodes) != null && I.length && X.push(`${z.extra_nodes.length} untracked node${z.extra_nodes.length === 1 ? "" : "s"}`), X.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${X.join(" and ")}.`;
    }), ue = O(() => {
      var L, I;
      const X = [], z = i.status.comparison;
      return (L = z.extra_nodes) != null && L.length && (z.extra_nodes.slice(0, 3).forEach((ce) => {
        X.push(`Untracked: ${ce}`);
      }), z.extra_nodes.length > 3 && X.push(`...and ${z.extra_nodes.length - 3} more untracked`)), (I = z.missing_nodes) != null && I.length && (z.missing_nodes.slice(0, 3).forEach((ce) => {
        X.push(`Missing: ${ce}`);
      }), z.missing_nodes.length > 3 && X.push(`...and ${z.missing_nodes.length - 3} more missing`)), X;
    });
    return (X, z) => (s(), o(W, null, [
      w(Ze, null, {
        header: l(() => [
          w(et, { title: "STATUS" })
        ]),
        content: l(() => [
          i.setupState === "no_workspace" ? (s(), P(ht, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: l(() => [
              w(te, {
                variant: "primary",
                size: "sm",
                onClick: z[0] || (z[0] = (L) => X.$emit("start-setup"))
              }, {
                default: l(() => [...z[13] || (z[13] = [
                  g(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "unmanaged" ? (s(), P(ht, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: l(() => [
              w(te, {
                variant: "primary",
                size: "sm",
                onClick: z[1] || (z[1] = (L) => X.$emit("view-environments"))
              }, {
                default: l(() => [...z[14] || (z[14] = [
                  g(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "empty_workspace" ? (s(), P(ht, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: l(() => [
              w(te, {
                variant: "primary",
                size: "sm",
                onClick: z[2] || (z[2] = (L) => X.$emit("create-environment"))
              }, {
                default: l(() => [...z[15] || (z[15] = [
                  g(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: z[4] || (z[4] = (L) => p.value = !0),
            onMouseleave: z[5] || (z[5] = (L) => p.value = !1)
          }, [
            e("div", Aa, [
              w(mt, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: l(() => [...z[16] || (z[16] = [
                  g(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              w(co, { name: "fade" }, {
                default: l(() => [
                  p.value ? (s(), P(te, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: u
                  }, {
                    default: l(() => [...z[17] || (z[17] = [
                      g(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : r("", !0)
                ]),
                _: 1
              })
            ]),
            w(Vo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Bt({
              left: l(() => [
                t.status.workflows.new.length ? (s(), P($t, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.modified.length ? (s(), P($t, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.deleted.length ? (s(), P($t, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : r("", !0),
                w($t, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: A.value
                }, null, 8, ["count", "separator"])
              ]),
              right: l(() => [
                t.status.git_changes.nodes_added.length ? (s(), P($t, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), P($t, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.workflow_changes ? (s(), P($t, {
                  key: 2,
                  icon: "●",
                  count: F.value,
                  label: F.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : r("", !0),
                G.value ? (s(), P($t, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : r("", !0),
                x.value && !R.value && !G.value ? (s(), P($t, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : r("", !0),
                x.value ? r("", !0) : (s(), P($t, {
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
                  z[19] || (z[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Ba, [
                    e("span", Fa, a(se.value), 1),
                    w(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: z[3] || (z[3] = (L) => X.$emit("commit-changes"))
                    }, {
                      default: l(() => [...z[18] || (z[18] = [
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
          t.status.is_detached_head ? (s(), P(ht, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: l(() => [
              w(te, {
                variant: "primary",
                size: "sm",
                onClick: z[6] || (z[6] = (L) => X.$emit("create-branch"))
              }, {
                default: l(() => [...z[20] || (z[20] = [
                  g(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r("", !0),
          e("div", Va, [
            w(mt, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: l(() => [...z[21] || (z[21] = [
                g(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            ie.value ? (s(), o(W, { key: 0 }, [
              S.value.length > 0 ? (s(), P(ht, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${S.value.length} workflow${S.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: S.value.map((L) => `${L.name} — ${L.issue_summary}`)
              }, {
                actions: l(() => [
                  w(te, {
                    variant: "primary",
                    size: "sm",
                    onClick: z[7] || (z[7] = (L) => X.$emit("view-workflows"))
                  }, {
                    default: l(() => [...z[22] || (z[22] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : r("", !0),
              T.value.length > 0 ? (s(), P(ht, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${T.value.length} workflow${T.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: T.value.map((L) => `${L.name} — ${L.models_needing_path_sync_count} model path${L.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: l(() => [
                  w(te, {
                    variant: "primary",
                    size: "sm",
                    onClick: z[8] || (z[8] = (L) => X.$emit("view-workflows"))
                  }, {
                    default: l(() => [...z[23] || (z[23] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : r("", !0),
              t.status.missing_models_count > 0 && !N.value ? (s(), P(ht, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: l(() => [
                  w(te, {
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
                  w(te, {
                    variant: "secondary",
                    size: "sm",
                    onClick: z[9] || (z[9] = (L) => X.$emit("view-workflows"))
                  }, {
                    default: l(() => [...z[24] || (z[24] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : r("", !0),
              t.status.comparison.is_synced ? r("", !0) : (s(), P(ht, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: J.value,
                items: ue.value
              }, {
                actions: l(() => [
                  w(te, {
                    variant: "secondary",
                    size: "sm",
                    onClick: u
                  }, {
                    default: l(() => [...z[25] || (z[25] = [
                      g(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  w(te, {
                    variant: "primary",
                    size: "sm",
                    onClick: z[10] || (z[10] = (L) => X.$emit("view-nodes"))
                  }, {
                    default: l(() => [...z[26] || (z[26] = [
                      g(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), P(ht, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: l(() => [
                  w(te, {
                    variant: "primary",
                    size: "sm",
                    onClick: z[11] || (z[11] = (L) => X.$emit("view-nodes"))
                  }, {
                    default: l(() => [...z[27] || (z[27] = [
                      g(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : r("", !0)
            ], 64)) : Y.value ? (s(), o("span", Wa, "No issues")) : (s(), P(kt, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      w(Oa, {
        show: f.value,
        status: t.status,
        "is-repairing": k.value,
        onClose: z[12] || (z[12] = (L) => f.value = !1),
        onNavigateWorkflows: m,
        onNavigateNodes: d,
        onRepair: _
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), ja = /* @__PURE__ */ ae(Ga, [["__scopeId", "data-v-55fcd77f"]]), Ha = ["type", "value", "placeholder", "disabled"], Ka = /* @__PURE__ */ oe({
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
    const i = t, f = n, p = h(null);
    function u(m) {
      const d = m.target.value;
      f("update:modelValue", d);
    }
    return We(() => {
      i.autoFocus && p.value && p.value.focus();
    }), c({
      focus: () => {
        var m;
        return (m = p.value) == null ? void 0 : m.focus();
      },
      blur: () => {
        var m;
        return (m = p.value) == null ? void 0 : m.blur();
      }
    }), (m, d) => (s(), o("input", {
      ref_key: "inputRef",
      ref: p,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: pe(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: u,
      onKeyup: [
        d[0] || (d[0] = xt((v) => m.$emit("enter"), ["enter"])),
        d[1] || (d[1] = xt((v) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (v) => m.$emit("focus")),
      onBlur: d[3] || (d[3] = (v) => m.$emit("blur"))
    }, null, 42, Ha));
  }
}), rs = /* @__PURE__ */ ae(Ka, [["__scopeId", "data-v-0380d08f"]]), qa = { class: "branch-create-form" }, Ya = { class: "form-actions" }, Ja = /* @__PURE__ */ oe({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, i = h(""), f = O(() => {
      const m = i.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function p() {
      f.value && (n("create", i.value.trim()), i.value = "");
    }
    function u() {
      i.value = "", n("cancel");
    }
    return (m, d) => (s(), o("div", qa, [
      w(rs, {
        modelValue: i.value,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => i.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: p,
        onEscape: u
      }, null, 8, ["modelValue"]),
      e("div", Ya, [
        w(te, {
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
        w(te, {
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
}), Xa = /* @__PURE__ */ ae(Ja, [["__scopeId", "data-v-7c500394"]]), Qa = { class: "branch-list-item__indicator" }, Za = { class: "branch-list-item__name" }, el = {
  key: 0,
  class: "branch-list-item__actions"
}, tl = {
  key: 0,
  class: "branch-list-item__current-label"
}, sl = /* @__PURE__ */ oe({
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
      e("span", Qa, a(t.isCurrent ? "●" : "○"), 1),
      e("span", Za, a(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (s(), o("div", el, [
        Re(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", tl, " current ")) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), ol = /* @__PURE__ */ ae(sl, [["__scopeId", "data-v-c6581a24"]]), nl = {
  key: 2,
  class: "branch-list"
}, al = /* @__PURE__ */ oe({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: c }) {
    const n = c, i = h(!1);
    function f(u) {
      n("create", u), p();
    }
    function p() {
      i.value = !1;
    }
    return (u, m) => (s(), P(Ze, null, {
      header: l(() => [
        w(et, { title: "BRANCHES" }, {
          actions: l(() => [
            i.value ? r("", !0) : (s(), P(te, {
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
        i.value ? (s(), P(Xa, {
          key: 0,
          onCreate: f,
          onCancel: p
        })) : r("", !0),
        t.branches.length === 0 ? (s(), P(kt, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", nl, [
          (s(!0), o(W, null, ne(t.branches, (d) => (s(), P(ol, {
            key: d.name,
            "branch-name": d.name,
            "is-current": d.is_current
          }, {
            actions: l(() => [
              d.is_current ? r("", !0) : (s(), P(te, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (v) => u.$emit("delete", d.name)
              }, {
                default: l(() => [...m[2] || (m[2] = [
                  g(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              d.is_current ? r("", !0) : (s(), P(te, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (v) => u.$emit("switch", d.name)
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
}), ll = /* @__PURE__ */ ae(al, [["__scopeId", "data-v-86784ddd"]]), il = { class: "commit-list" }, rl = /* @__PURE__ */ oe({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (s(), o("div", il, [
      Re(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), dl = /* @__PURE__ */ ae(rl, [["__scopeId", "data-v-8c5ee761"]]), cl = { class: "commit-hash" }, ul = /* @__PURE__ */ oe({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = O(() => c.hash.slice(0, c.length));
    return (i, f) => (s(), o("span", cl, a(n.value), 1));
  }
}), Ws = /* @__PURE__ */ ae(ul, [["__scopeId", "data-v-7c333cc6"]]), ml = { class: "commit-message" }, vl = { class: "commit-date" }, fl = /* @__PURE__ */ oe({
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
      class: pe(["commit-item", { clickable: t.clickable }]),
      onClick: f
    }, [
      w(Ws, { hash: t.hash }, null, 8, ["hash"]),
      e("span", ml, a(t.message), 1),
      e("span", vl, a(t.relativeDate), 1),
      p.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = Be(() => {
        }, ["stop"]))
      }, [
        Re(p.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), pl = /* @__PURE__ */ ae(fl, [["__scopeId", "data-v-dd7c621b"]]), gl = /* @__PURE__ */ oe({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (s(), P(Ze, null, {
      header: l(() => [
        w(et, { title: "HISTORY" })
      ]),
      content: l(() => [
        t.commits.length === 0 ? (s(), P(kt, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), P(dl, { key: 1 }, {
          default: l(() => [
            (s(!0), o(W, null, ne(t.commits, (i) => (s(), P(pl, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (f) => c.$emit("select", i)
            }, {
              actions: l(() => [
                w(te, {
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
}), hl = /* @__PURE__ */ ae(gl, [["__scopeId", "data-v-981c3c64"]]), j$ = us({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const H$ = [
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
], K$ = {
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
}, yl = [
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
], q$ = [
  ...yl,
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
function Yt() {
  return !1;
}
function Ke() {
  const t = h(!1), c = h(null);
  async function n(H, ve) {
    var Ne;
    if (!((Ne = window.app) != null && Ne.api))
      throw new Error("ComfyUI API not available");
    const $e = await window.app.api.fetchApi(H, ve);
    if (!$e.ok) {
      const j = await $e.json().catch(() => ({}));
      throw new Error(j.error || j.message || `Request failed: ${$e.status}`);
    }
    return $e.json();
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
  async function p(H = 10, ve = 0) {
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
  async function v() {
    return n("/v2/comfygit/branches");
  }
  async function y(H) {
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
  async function D(H, ve = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(H)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ve })
    });
  }
  async function M() {
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
    const $e = { target_env: H };
    return ve && ($e.workspace_path = ve), n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify($e)
    });
  }
  async function C() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function A(H) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function x() {
    return n("/v2/workspace/environments/create_status");
  }
  async function R(H = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${H}`);
  }
  async function Y(H) {
    return n(`/v2/workspace/environments/${H}`, {
      method: "DELETE"
    });
  }
  async function F(H = !1) {
    try {
      return n(H ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ve = await i(H), $e = [];
      return ve.workflows.new.forEach((Ne) => {
        $e.push({ name: Ne, status: "new", missing_nodes: 0, missing_models: 0, path: Ne });
      }), ve.workflows.modified.forEach((Ne) => {
        $e.push({ name: Ne, status: "modified", missing_nodes: 0, missing_models: 0, path: Ne });
      }), ve.workflows.synced.forEach((Ne) => {
        $e.push({ name: Ne, status: "synced", missing_nodes: 0, missing_models: 0, path: Ne });
      }), $e;
    }
  }
  async function G(H) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/details`);
  }
  async function S(H) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/resolve`, {
      method: "POST"
    });
  }
  async function T(H, ve, $e) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ve, install_models: $e })
    });
  }
  async function N(H, ve, $e) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ve, importance: $e })
    });
  }
  async function ie() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function se() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function J(H) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(H)}`);
  }
  async function ue(H) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function X(H, ve) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ve })
    });
  }
  async function z(H, ve) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ve })
    });
  }
  async function L(H) {
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
  async function ce() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function Q() {
    return n("/v2/workspace/models/directory");
  }
  async function be(H) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function Ce(H) {
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
    const $e = ve ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(ve)}` : "/v2/comfygit/config";
    return n($e, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function Oe(H, ve) {
    try {
      const $e = new URLSearchParams();
      return H && $e.append("level", H), ve && $e.append("lines", ve.toString()), n(`/v2/comfygit/debug/logs?${$e}`);
    } catch {
      return [];
    }
  }
  async function re(H, ve) {
    try {
      const $e = new URLSearchParams();
      return H && $e.append("level", H), ve && $e.append("lines", ve.toString()), n(`/v2/workspace/debug/logs?${$e}`);
    } catch {
      return [];
    }
  }
  async function ye() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function Pe() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function Z(H) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function le() {
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
  async function xe(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/install`, {
      method: "POST"
    });
  }
  async function Je(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/update`, {
      method: "POST"
    });
  }
  async function at(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function Me() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function st(H, ve) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, url: ve })
    });
  }
  async function qe(H) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function Fe(H, ve, $e) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ve, push_url: $e })
    });
  }
  async function ct(H) {
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
  async function He(H = "skip", ve = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: H,
        remove_extra_nodes: ve
      })
    });
  }
  async function lt(H, ve) {
    const $e = ve ? `/v2/comfygit/remotes/${encodeURIComponent(H)}/pull-preview?branch=${encodeURIComponent(ve)}` : `/v2/comfygit/remotes/${encodeURIComponent(H)}/pull-preview`;
    return n($e);
  }
  async function ot(H, ve = {}) {
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
  async function Ue(H, ve) {
    const $e = ve ? `/v2/comfygit/remotes/${encodeURIComponent(H)}/push-preview?branch=${encodeURIComponent(ve)}` : `/v2/comfygit/remotes/${encodeURIComponent(H)}/push-preview`;
    return n($e);
  }
  async function me(H, ve = {}) {
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
  async function q(H) {
    const ve = {
      success: 0,
      failed: []
    };
    for (const $e of H)
      try {
        await S($e), ve.success++;
      } catch (Ne) {
        ve.failed.push({
          name: $e,
          error: Ne instanceof Error ? Ne.message : "Unknown error"
        });
      }
    return ve;
  }
  async function E(H) {
    var Ne;
    const ve = new FormData();
    if (ve.append("file", H), !((Ne = window.app) != null && Ne.api))
      throw new Error("ComfyUI API not available");
    const $e = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: ve
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!$e.ok) {
      const j = await $e.json().catch(() => ({}));
      throw new Error(j.error || `Preview failed: ${$e.status}`);
    }
    return $e.json();
  }
  async function V(H) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(H)}`
    );
  }
  async function ee(H, ve, $e, Ne) {
    var ge;
    const j = new FormData();
    if (j.append("file", H), j.append("name", ve), j.append("model_strategy", $e), j.append("torch_backend", Ne), !((ge = window.app) != null && ge.api))
      throw new Error("ComfyUI API not available");
    const U = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: j
    });
    if (!U.ok) {
      const Ee = await U.json().catch(() => ({}));
      throw new Error(Ee.message || Ee.error || `Import failed: ${U.status}`);
    }
    return U.json();
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
  async function vt(H, ve, $e, Ne) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: H,
        name: ve,
        model_strategy: $e,
        torch_backend: Ne
      })
    });
  }
  async function it() {
    return n("/v2/setup/status");
  }
  async function Lt(H) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function ft() {
    return n("/v2/setup/initialize_status");
  }
  async function zt(H) {
    return n("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function Kt() {
    return n("/v2/comfygit/deploy/summary");
  }
  async function de() {
    return n("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function B(H, ve) {
    return n("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: H, save_key: ve })
    });
  }
  async function Le() {
    return n("/v2/comfygit/deploy/runpod/volumes");
  }
  async function nt(H) {
    const ve = H ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(H)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return n(ve);
  }
  async function pt(H) {
    return n("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function It() {
    return n("/v2/comfygit/deploy/runpod/pods");
  }
  async function Et(H) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function gt(H) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(H)}/stop`, {
      method: "POST"
    });
  }
  async function fe(H) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(H)}/start`, {
      method: "POST"
    });
  }
  async function rt(H) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(H)}/status`);
  }
  async function _t(H) {
    return n("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: H })
    });
  }
  async function Ft() {
    return n("/v2/comfygit/deploy/runpod/key");
  }
  async function Vt() {
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
    validateExport: m,
    exportEnvWithForce: d,
    // Git Operations
    getBranches: v,
    getCommitDetail: y,
    checkout: k,
    createBranch: _,
    switchBranch: b,
    deleteBranch: D,
    // Environment Management
    getEnvironments: M,
    switchEnvironment: $,
    getSwitchProgress: C,
    createEnvironment: A,
    getCreateProgress: x,
    getComfyUIReleases: R,
    deleteEnvironment: Y,
    // Workflow Management
    getWorkflows: F,
    getWorkflowDetails: G,
    resolveWorkflow: S,
    installWorkflowDeps: T,
    setModelImportance: N,
    // Model Management
    getEnvironmentModels: ie,
    getWorkspaceModels: se,
    getModelDetails: J,
    openFileLocation: ue,
    addModelSource: X,
    removeModelSource: z,
    deleteModel: L,
    downloadModel: I,
    scanWorkspaceModels: ce,
    getModelsDirectory: Q,
    setModelsDirectory: be,
    // Settings
    getConfig: Ce,
    updateConfig: Te,
    // Debug/Logs
    getEnvironmentLogs: Oe,
    getWorkspaceLogs: re,
    getEnvironmentLogPath: ye,
    getWorkspaceLogPath: Pe,
    openFile: Z,
    // Node Management
    getNodes: le,
    trackNodeAsDev: we,
    installNode: xe,
    updateNode: Je,
    uninstallNode: at,
    // Git Remotes
    getRemotes: Me,
    addRemote: st,
    removeRemote: qe,
    updateRemoteUrl: Fe,
    fetchRemote: ct,
    getRemoteSyncStatus: _e,
    // Push/Pull
    getPullPreview: lt,
    pullFromRemote: ot,
    getPushPreview: Ue,
    pushToRemote: me,
    validateMerge: K,
    // Environment Sync
    syncEnvironmentManually: He,
    // Workflow Repair
    repairWorkflowModels: q,
    // Import Operations
    previewTarballImport: E,
    previewGitImport: Ge,
    validateEnvironmentName: V,
    executeImport: ee,
    executeGitImport: vt,
    getImportProgress: ke,
    // First-Time Setup
    getSetupStatus: it,
    initializeWorkspace: Lt,
    getInitializeProgress: ft,
    validatePath: zt,
    // Deploy Operations
    getDeploySummary: Kt,
    getDataCenters: de,
    testRunPodConnection: B,
    getNetworkVolumes: Le,
    getRunPodGpuTypes: nt,
    deployToRunPod: pt,
    getRunPodPods: It,
    terminateRunPodPod: Et,
    stopRunPodPod: gt,
    startRunPodPod: fe,
    getDeploymentStatus: rt,
    exportDeployPackage: _t,
    getStoredRunPodKey: Ft,
    clearRunPodKey: Vt
  };
}
async function Jt(t, c = {}, n = 5e3) {
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
function Gs() {
  const t = h(null);
  async function c() {
    try {
      const u = await Jt(
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
      const u = await Jt(
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
      const u = await Jt(
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
    if (!(await Jt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function p() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await Jt(
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
const wl = { class: "base-modal-header" }, kl = {
  key: 0,
  class: "base-modal-title"
}, bl = { class: "base-modal-body" }, _l = {
  key: 0,
  class: "base-modal-loading"
}, $l = {
  key: 1,
  class: "base-modal-error"
}, Cl = {
  key: 0,
  class: "base-modal-footer"
}, xl = /* @__PURE__ */ oe({
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
    return We(() => {
      document.addEventListener("keydown", p), document.body.style.overflow = "hidden";
    }), bs(() => {
      document.removeEventListener("keydown", p), document.body.style.overflow = "";
    }), (u, m) => (s(), P(Ye, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: f
      }, [
        e("div", {
          class: pe(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = Be(() => {
          }, ["stop"]))
        }, [
          e("div", wl, [
            Re(u.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", kl, a(t.title), 1)) : r("", !0)
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
          e("div", bl, [
            t.loading ? (s(), o("div", _l, "Loading...")) : t.error ? (s(), o("div", $l, a(t.error), 1)) : Re(u.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          u.$slots.footer ? (s(), o("div", Cl, [
            Re(u.$slots, "footer", {}, void 0, !0)
          ])) : r("", !0)
        ], 2)
      ])
    ]));
  }
}), tt = /* @__PURE__ */ ae(xl, [["__scopeId", "data-v-8dab1081"]]), Sl = ["type", "disabled"], Il = {
  key: 0,
  class: "spinner"
}, El = /* @__PURE__ */ oe({
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
      t.loading ? (s(), o("span", Il)) : r("", !0),
      Re(c.$slots, "default", {}, void 0, !0)
    ], 10, Sl));
  }
}), he = /* @__PURE__ */ ae(El, [["__scopeId", "data-v-f3452606"]]), Pl = {
  key: 0,
  class: "base-title-count"
}, Ml = /* @__PURE__ */ oe({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, n) => (s(), P(ks(`h${t.level}`), {
      class: pe(["base-title", t.variant])
    }, {
      default: l(() => [
        Re(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Pl, "(" + a(t.count) + ")", 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), es = /* @__PURE__ */ ae(Ml, [["__scopeId", "data-v-5a01561d"]]), Rl = ["value", "disabled"], Tl = {
  key: 0,
  value: "",
  disabled: ""
}, Dl = ["value"], Ll = {
  key: 0,
  class: "base-select-error"
}, zl = /* @__PURE__ */ oe({
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
        onChange: f[0] || (f[0] = (p) => i.$emit("update:modelValue", p.target.value))
      }, [
        t.placeholder ? (s(), o("option", Tl, a(t.placeholder), 1)) : r("", !0),
        (s(!0), o(W, null, ne(t.options, (p) => (s(), o("option", {
          key: c(p),
          value: c(p)
        }, a(n(p)), 9, Dl))), 128))
      ], 42, Rl),
      t.error ? (s(), o("span", Ll, a(t.error), 1)) : r("", !0)
    ], 2));
  }
}), Ul = /* @__PURE__ */ ae(zl, [["__scopeId", "data-v-7436d745"]]), Nl = { class: "popover-header" }, Ol = { class: "popover-title" }, Al = { class: "popover-content" }, Bl = {
  key: 0,
  class: "popover-actions"
}, Fl = /* @__PURE__ */ oe({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (s(), P(Ye, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Rt({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = Be(() => {
          }, ["stop"]))
        }, [
          e("div", Nl, [
            e("h4", Ol, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Al, [
            Re(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (s(), o("div", Bl, [
            Re(c.$slots, "actions", {}, void 0, !0)
          ])) : r("", !0)
        ], 4)
      ])) : r("", !0)
    ]));
  }
}), bt = /* @__PURE__ */ ae(Fl, [["__scopeId", "data-v-42815ace"]]), Vl = { class: "detail-section" }, Wl = {
  key: 0,
  class: "empty-message"
}, Gl = { class: "model-header" }, jl = { class: "model-name" }, Hl = { class: "model-details" }, Kl = { class: "model-row" }, ql = { class: "model-row" }, Yl = { class: "label" }, Jl = {
  key: 0,
  class: "model-row model-row-nodes"
}, Xl = { class: "node-list" }, Ql = ["onClick"], Zl = {
  key: 1,
  class: "model-row"
}, ei = { class: "value" }, ti = {
  key: 2,
  class: "model-row"
}, si = { class: "value error" }, oi = {
  key: 0,
  class: "model-actions"
}, ni = { class: "detail-section" }, ai = {
  key: 0,
  class: "empty-message"
}, li = { class: "node-name" }, ii = {
  key: 0,
  class: "node-version"
}, ri = /* @__PURE__ */ oe({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getWorkflowDetails: f, setModelImportance: p, openFileLocation: u } = Ke(), m = h(null), d = h(!1), v = h(null), y = h(!1), k = h({}), _ = h(!1), b = h(/* @__PURE__ */ new Set()), D = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function M(S) {
      switch (S) {
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
    function $(S) {
      switch (S) {
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
    function C(S) {
      if (!S.loaded_by || S.loaded_by.length === 0) return [];
      const T = S.hash || S.filename;
      return b.value.has(T) ? S.loaded_by : S.loaded_by.slice(0, 3);
    }
    function A(S) {
      return b.value.has(S);
    }
    function x(S) {
      b.value.has(S) ? b.value.delete(S) : b.value.add(S), b.value = new Set(b.value);
    }
    async function R() {
      d.value = !0, v.value = null;
      try {
        m.value = await f(n.workflowName);
      } catch (S) {
        v.value = S instanceof Error ? S.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function Y(S, T) {
      k.value[S] = T, y.value = !0;
    }
    async function F(S) {
      try {
        await u(S);
      } catch (T) {
        v.value = T instanceof Error ? T.message : "Failed to open file location";
      }
    }
    async function G() {
      if (!y.value) {
        i("close");
        return;
      }
      d.value = !0, v.value = null;
      try {
        for (const [S, T] of Object.entries(k.value))
          await p(n.workflowName, S, T);
        i("refresh"), i("close");
      } catch (S) {
        v.value = S instanceof Error ? S.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return We(R), (S, T) => (s(), o(W, null, [
      w(tt, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: d.value,
        error: v.value || void 0,
        onClose: T[4] || (T[4] = (N) => i("close"))
      }, {
        body: l(() => [
          m.value ? (s(), o(W, { key: 0 }, [
            e("section", Vl, [
              w(es, { variant: "section" }, {
                default: l(() => [
                  g("MODELS USED (" + a(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (s(), o("div", Wl, " No models used in this workflow ")) : r("", !0),
              (s(!0), o(W, null, ne(m.value.models, (N) => {
                var ie;
                return s(), o("div", {
                  key: N.hash || N.filename,
                  class: "model-card"
                }, [
                  e("div", Gl, [
                    T[6] || (T[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", jl, a(N.filename), 1)
                  ]),
                  e("div", Hl, [
                    e("div", Kl, [
                      T[7] || (T[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: pe(["value", M(N.status)])
                      }, a($(N.status)), 3)
                    ]),
                    e("div", ql, [
                      e("span", Yl, [
                        T[8] || (T[8] = g(" Importance: ", -1)),
                        w(Vs, {
                          size: 14,
                          title: "About importance levels",
                          onClick: T[0] || (T[0] = (se) => _.value = !0)
                        })
                      ]),
                      w(Ul, {
                        "model-value": k.value[N.filename] || N.importance,
                        options: D,
                        "onUpdate:modelValue": (se) => Y(N.filename, se)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    N.loaded_by && N.loaded_by.length > 0 ? (s(), o("div", Jl, [
                      T[9] || (T[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", Xl, [
                        (s(!0), o(W, null, ne(C(N), (se, J) => (s(), o("div", {
                          key: `${se.node_id}-${J}`,
                          class: "node-reference"
                        }, a(se.node_type) + " (Node #" + a(se.node_id) + ") ", 1))), 128)),
                        N.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (se) => x(N.hash || N.filename)
                        }, a(A(N.hash || N.filename) ? "▼ Show less" : `▶ View all (${N.loaded_by.length})`), 9, Ql)) : r("", !0)
                      ])
                    ])) : r("", !0),
                    N.size_mb ? (s(), o("div", Zl, [
                      T[10] || (T[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", ei, a(N.size_mb) + " MB", 1)
                    ])) : r("", !0),
                    N.has_category_mismatch ? (s(), o("div", ti, [
                      T[13] || (T[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", si, [
                        T[11] || (T[11] = g(" In ", -1)),
                        e("code", null, a(N.actual_category) + "/", 1),
                        T[12] || (T[12] = g(" but loader needs ", -1)),
                        e("code", null, a((ie = N.expected_categories) == null ? void 0 : ie[0]) + "/", 1)
                      ])
                    ])) : r("", !0)
                  ]),
                  N.status !== "available" ? (s(), o("div", oi, [
                    N.status === "downloadable" ? (s(), P(he, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: T[1] || (T[1] = (se) => i("resolve"))
                    }, {
                      default: l(() => [...T[14] || (T[14] = [
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    })) : N.status === "category_mismatch" && N.file_path ? (s(), P(he, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => F(N.file_path)
                    }, {
                      default: l(() => [...T[15] || (T[15] = [
                        g(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : N.status !== "path_mismatch" ? (s(), P(he, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: T[2] || (T[2] = (se) => i("resolve"))
                    }, {
                      default: l(() => [...T[16] || (T[16] = [
                        g(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : r("", !0)
                  ])) : r("", !0)
                ]);
              }), 128))
            ]),
            e("section", ni, [
              w(es, { variant: "section" }, {
                default: l(() => [
                  g("NODES USED (" + a(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (s(), o("div", ai, " No custom nodes used in this workflow ")) : r("", !0),
              (s(!0), o(W, null, ne(m.value.nodes, (N) => (s(), o("div", {
                key: N.name,
                class: "node-item"
              }, [
                e("span", {
                  class: pe(["node-status", N.status === "installed" ? "installed" : "missing"])
                }, a(N.status === "installed" ? "✓" : "✕"), 3),
                e("span", li, a(N.name), 1),
                N.version ? (s(), o("span", ii, "v" + a(N.version), 1)) : r("", !0)
              ]))), 128))
            ])
          ], 64)) : r("", !0)
        ]),
        footer: l(() => [
          w(he, {
            variant: "secondary",
            onClick: T[3] || (T[3] = (N) => i("close"))
          }, {
            default: l(() => [...T[17] || (T[17] = [
              g(" Close ", -1)
            ])]),
            _: 1
          }),
          y.value ? (s(), P(he, {
            key: 0,
            variant: "primary",
            onClick: G
          }, {
            default: l(() => [...T[18] || (T[18] = [
              g(" Save Changes ", -1)
            ])]),
            _: 1
          })) : r("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      w(bt, {
        show: _.value,
        title: "Model Importance Levels",
        onClose: T[5] || (T[5] = (N) => _.value = !1)
      }, {
        content: l(() => [...T[19] || (T[19] = [
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
}), di = /* @__PURE__ */ ae(ri, [["__scopeId", "data-v-668728e6"]]), De = us({
  items: [],
  status: "idle"
});
let Ct = null;
function js() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function ms(t) {
  return De.items.find((c) => c.id === t);
}
async function Gt() {
  if (De.status === "downloading") return;
  const t = De.items.find((c) => c.status === "queued");
  if (!t) {
    De.status = "idle";
    return;
  }
  De.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await ci(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    De.status = "idle", Gt();
  }
}
async function ci(t) {
  return new Promise((c, n) => {
    Ct && (Ct.close(), Ct = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), f = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    Ct = f;
    let p = Date.now(), u = 0, m = !1;
    f.onmessage = (d) => {
      try {
        const v = JSON.parse(d.data);
        switch (v.type) {
          case "progress":
            t.downloaded = v.downloaded || 0, t.size = v.total || t.size;
            const y = Date.now(), k = (y - p) / 1e3;
            if (k > 0.5) {
              const _ = t.downloaded - u;
              if (t.speed = _ / k, p = y, u = t.downloaded, t.speed > 0 && t.size > 0) {
                const b = t.size - t.downloaded;
                t.eta = b / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, f.close(), Ct = null, c();
            break;
          case "error":
            m = !0, f.close(), Ct = null, n(new Error(v.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, f.onerror = () => {
      f.close(), Ct = null, m || n(new Error("Connection lost"));
    };
  });
}
async function ui() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const c = await t.json();
    if (!c.pending_downloads || c.pending_downloads.length === 0) return;
    for (const n of c.pending_downloads) {
      if (De.items.some((f) => f.url === n.url && f.filename === n.filename))
        continue;
      const i = {
        id: js(),
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
function os() {
  function t($) {
    for (const C of $) {
      if (De.items.some(
        (R) => R.url === C.url && R.targetPath === C.targetPath && ["queued", "downloading", "paused", "completed"].includes(R.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${C.filename}`);
        continue;
      }
      const x = {
        id: js(),
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
    De.status === "idle" && Gt();
  }
  async function c($) {
    const C = ms($);
    if (C) {
      if (C.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(C.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Ct && (Ct.close(), Ct = null), C.status = "failed", C.error = "Cancelled by user", De.status = "idle", Gt();
      } else if (C.status === "queued") {
        const A = De.items.findIndex((x) => x.id === $);
        A >= 0 && De.items.splice(A, 1);
      }
    }
  }
  function n($) {
    const C = ms($);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, De.status === "idle" && Gt());
  }
  function i($) {
    const C = ms($);
    !C || C.status !== "paused" || (C.status = "queued", De.status === "idle" && Gt());
  }
  function f() {
    const $ = De.items.filter((C) => C.status === "paused");
    for (const C of $)
      C.status = "queued";
    De.status === "idle" && Gt();
  }
  function p($) {
    const C = De.items.findIndex((A) => A.id === $);
    C >= 0 && ["completed", "failed", "paused"].includes(De.items[C].status) && De.items.splice(C, 1);
  }
  function u() {
    De.items = De.items.filter(($) => $.status !== "completed");
  }
  function m() {
    De.items = De.items.filter(($) => $.status !== "failed");
  }
  const d = O(
    () => De.items.find(($) => $.status === "downloading")
  ), v = O(
    () => De.items.filter(($) => $.status === "queued")
  ), y = O(
    () => De.items.filter(($) => $.status === "completed")
  ), k = O(
    () => De.items.filter(($) => $.status === "failed")
  ), _ = O(
    () => De.items.filter(($) => $.status === "paused")
  ), b = O(() => De.items.length > 0), D = O(
    () => De.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), M = O(
    () => De.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: uo(De),
    // Computed
    currentDownload: d,
    queuedItems: v,
    completedItems: y,
    failedItems: k,
    pausedItems: _,
    hasItems: b,
    activeCount: D,
    hasPaused: M,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: i,
    resumeAllPaused: f,
    removeItem: p,
    clearCompleted: u,
    clearFailed: m,
    loadPendingDownloads: ui
  };
}
function Hs() {
  const t = h(null), c = h(null), n = h([]), i = h([]), f = h(!1), p = h(null);
  async function u(A, x) {
    var Y;
    if (!((Y = window.app) != null && Y.api))
      throw new Error("ComfyUI API not available");
    const R = await window.app.api.fetchApi(A, x);
    if (!R.ok) {
      const F = await R.json().catch(() => ({})), G = F.error || F.message || `Request failed: ${R.status}`;
      throw new Error(G);
    }
    return R.json();
  }
  async function m(A) {
    f.value = !0, p.value = null;
    try {
      let x;
      return Yt() || (x = await u(
        `/v2/comfygit/workflow/${A}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = x, x;
    } catch (x) {
      const R = x instanceof Error ? x.message : "Unknown error occurred";
      throw p.value = R, x;
    } finally {
      f.value = !1;
    }
  }
  async function d(A, x, R, Y) {
    f.value = !0, p.value = null;
    try {
      let F;
      if (!Yt()) {
        const G = Object.fromEntries(x), S = Object.fromEntries(R), T = Y ? Array.from(Y) : [];
        F = await u(
          `/v2/comfygit/workflow/${A}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: G,
              model_choices: S,
              skipped_packages: T
            })
          }
        );
      }
      return c.value = F, F;
    } catch (F) {
      const G = F instanceof Error ? F.message : "Unknown error occurred";
      throw p.value = G, F;
    } finally {
      f.value = !1;
    }
  }
  async function v(A, x = 10) {
    f.value = !0, p.value = null;
    try {
      let R;
      return Yt() || (R = await u(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: A, limit: x })
        }
      )), n.value = R.results, R.results;
    } catch (R) {
      const Y = R instanceof Error ? R.message : "Unknown error occurred";
      throw p.value = Y, R;
    } finally {
      f.value = !1;
    }
  }
  async function y(A, x = 10) {
    f.value = !0, p.value = null;
    try {
      let R;
      return Yt() || (R = await u(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: A, limit: x })
        }
      )), i.value = R.results, R.results;
    } catch (R) {
      const Y = R instanceof Error ? R.message : "Unknown error occurred";
      throw p.value = Y, R;
    } finally {
      f.value = !1;
    }
  }
  const k = us({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function _() {
    k.phase = "idle", k.currentFile = void 0, k.currentFileIndex = void 0, k.totalFiles = void 0, k.bytesDownloaded = void 0, k.bytesTotal = void 0, k.completedFiles = [], k.nodesToInstall = [], k.nodesInstalled = [], k.installError = void 0, k.needsRestart = void 0, k.error = void 0, k.nodeInstallProgress = void 0;
  }
  async function b(A) {
    k.phase = "installing", k.nodesInstalled = [], k.installError = void 0, k.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Yt(), await D(A);
    } catch (x) {
      const R = x instanceof Error ? x.message : "Failed to install nodes";
      throw k.installError = R, x;
    }
  }
  async function D(A) {
    var R;
    const x = await u(
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
      const Y = new Map(((R = x.failed) == null ? void 0 : R.map((F) => [F.node_id, F.error])) || []);
      for (let F = 0; F < k.nodesToInstall.length; F++) {
        const G = k.nodesToInstall[F], S = Y.get(G);
        k.nodeInstallProgress.completedNodes.push({
          node_id: G,
          success: !S,
          error: S
        });
      }
    }
    return k.nodesInstalled = x.nodes_installed, k.needsRestart = x.nodes_installed.length > 0, x.failed && x.failed.length > 0 && (k.installError = `${x.failed.length} package(s) failed to install`), x;
  }
  async function M(A, x, R) {
    _(), k.phase = "resolving", p.value = null;
    const Y = Object.fromEntries(x), F = Object.fromEntries(R);
    try {
      const G = await fetch(`/v2/comfygit/workflow/${A}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: Y,
          model_choices: F
        })
      });
      if (!G.ok)
        throw new Error(`Request failed: ${G.status}`);
      if (!G.body)
        throw new Error("No response body");
      const S = G.body.getReader(), T = new TextDecoder();
      let N = "";
      for (; ; ) {
        const { done: ie, value: se } = await S.read();
        if (ie) break;
        N += T.decode(se, { stream: !0 });
        const J = N.split(`

`);
        N = J.pop() || "";
        for (const ue of J) {
          if (!ue.trim()) continue;
          const X = ue.split(`
`);
          let z = "", L = "";
          for (const I of X)
            I.startsWith("event: ") ? z = I.slice(7) : I.startsWith("data: ") && (L = I.slice(6));
          if (L)
            try {
              const I = JSON.parse(L);
              $(z, I);
            } catch (I) {
              console.warn("Failed to parse SSE event:", I);
            }
        }
      }
    } catch (G) {
      const S = G instanceof Error ? G.message : "Unknown error occurred";
      throw p.value = S, k.error = S, k.phase = "error", G;
    }
  }
  function $(A, x) {
    switch (A) {
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
        k.error = x.message, k.phase = "error", p.value = x.message;
        break;
    }
  }
  function C(A, x) {
    const { addToQueue: R } = os(), Y = x.filter((F) => F.url && F.target_path).map((F) => ({
      workflow: A,
      filename: F.filename,
      url: F.url,
      targetPath: F.target_path,
      size: F.size || 0,
      type: "model"
    }));
    return Y.length > 0 && R(Y), Y.length;
  }
  return {
    // State
    result: t,
    appliedResult: c,
    searchResults: n,
    modelSearchResults: i,
    isLoading: f,
    error: p,
    progress: k,
    // Methods
    analyzeWorkflow: m,
    applyResolution: d,
    applyResolutionWithProgress: M,
    installNodes: b,
    searchNodes: v,
    searchModels: y,
    resetProgress: _,
    queueModelDownloads: C
  };
}
const mi = { class: "resolution-stepper" }, vi = { class: "stepper-header" }, fi = ["onClick"], pi = {
  key: 0,
  class: "step-icon"
}, gi = {
  key: 1,
  class: "step-number"
}, hi = { class: "step-label" }, yi = {
  key: 0,
  class: "step-connector"
}, wi = { class: "stepper-content" }, ki = /* @__PURE__ */ oe({
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
    function f(v) {
      var y;
      if ((y = n.stepStats) != null && y[v]) {
        const k = n.stepStats[v];
        return k.total > 0 && k.resolved === k.total;
      }
      return n.completedSteps.includes(v);
    }
    function p(v) {
      var y;
      if ((y = n.stepStats) != null && y[v]) {
        const k = n.stepStats[v];
        return k.resolved > 0 && k.resolved < k.total;
      }
      return !1;
    }
    function u(v) {
      return f(v) ? "state-complete" : p(v) ? "state-partial" : "state-pending";
    }
    function m(v) {
      return !1;
    }
    function d(v) {
      i("step-change", v);
    }
    return (v, y) => (s(), o("div", mi, [
      e("div", vi, [
        (s(!0), o(W, null, ne(t.steps, (k, _) => (s(), o("div", {
          key: k.id,
          class: pe(["step", {
            active: t.currentStep === k.id,
            completed: f(k.id),
            "in-progress": p(k.id),
            disabled: m(k.id)
          }]),
          onClick: (b) => d(k.id)
        }, [
          e("div", {
            class: pe(["step-indicator", u(k.id)])
          }, [
            f(k.id) ? (s(), o("span", pi, "✓")) : (s(), o("span", gi, a(_ + 1), 1))
          ], 2),
          e("div", hi, a(k.label), 1),
          _ < t.steps.length - 1 ? (s(), o("div", yi)) : r("", !0)
        ], 10, fi))), 128))
      ]),
      e("div", wi, [
        Re(v.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), bi = /* @__PURE__ */ ae(ki, [["__scopeId", "data-v-2a7b3af8"]]), _i = /* @__PURE__ */ oe({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = O(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), i = O(() => `confidence-${n.value}`), f = O(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (p, u) => (s(), o("span", {
      class: pe(["confidence-badge", i.value, t.size])
    }, a(f.value), 3));
  }
}), ds = /* @__PURE__ */ ae(_i, [["__scopeId", "data-v-17ec4b80"]]), $i = { class: "node-info" }, Ci = { class: "node-info-text" }, xi = { class: "item-body" }, Si = {
  key: 0,
  class: "resolved-state"
}, Ii = {
  key: 1,
  class: "multiple-options"
}, Ei = { class: "options-list" }, Pi = ["onClick"], Mi = ["name", "value", "checked", "onChange"], Ri = { class: "option-content" }, Ti = { class: "option-header" }, Di = { class: "option-package-id" }, Li = {
  key: 0,
  class: "option-title"
}, zi = { class: "option-meta" }, Ui = {
  key: 0,
  class: "installed-badge"
}, Ni = { class: "action-buttons" }, Oi = {
  key: 2,
  class: "unresolved"
}, Ai = {
  key: 0,
  class: "searching-state"
}, Bi = { class: "options-list" }, Fi = ["onClick"], Vi = ["name", "value"], Wi = { class: "option-content" }, Gi = { class: "option-header" }, ji = { class: "option-package-id" }, Hi = {
  key: 0,
  class: "option-description"
}, Ki = { class: "option-meta" }, qi = {
  key: 0,
  class: "installed-badge"
}, Yi = {
  key: 2,
  class: "unresolved-message"
}, Ji = { class: "action-buttons" }, Xi = /* @__PURE__ */ oe({
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
    function f(d, v = 80) {
      return d.length <= v ? d : d.slice(0, v - 3) + "...";
    }
    const p = O(() => !!n.choice);
    O(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.action;
    }), O(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.package_id;
    });
    const u = O(() => {
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
    return (d, v) => (s(), o("div", {
      class: pe(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: p.value }])
    }, [
      e("div", $i, [
        e("span", Ci, [
          v[7] || (v[7] = g("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: pe(["status-badge", u.value])
        }, a(t.statusLabel), 3)) : r("", !0)
      ]),
      e("div", xi, [
        p.value ? (s(), o("div", Si, [
          w(he, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (y) => i("clear-choice"))
          }, {
            default: l(() => [...v[8] || (v[8] = [
              g(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Ii, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Ei, [
            (s(!0), o(W, null, ne(t.options, (y, k) => (s(), o("label", {
              key: y.package_id,
              class: pe(["option-card", { selected: t.selectedOptionIndex === k }]),
              onClick: (_) => m(k)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: k,
                checked: t.selectedOptionIndex === k,
                onChange: (_) => m(k)
              }, null, 40, Mi),
              e("div", Ri, [
                e("div", Ti, [
                  e("span", Di, a(y.package_id), 1),
                  w(ds, {
                    confidence: y.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                y.title && y.title !== y.package_id ? (s(), o("div", Li, a(y.title), 1)) : r("", !0),
                e("div", zi, [
                  y.is_installed ? (s(), o("span", Ui, "Already Installed")) : r("", !0)
                ])
              ])
            ], 10, Pi))), 128))
          ]),
          e("div", Ni, [
            w(he, {
              variant: "secondary",
              size: "sm",
              onClick: v[1] || (v[1] = (y) => i("search"))
            }, {
              default: l(() => [...v[9] || (v[9] = [
                g(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            w(he, {
              variant: "secondary",
              size: "sm",
              onClick: v[2] || (v[2] = (y) => i("manual-entry"))
            }, {
              default: l(() => [...v[10] || (v[10] = [
                g(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            w(he, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (y) => i("mark-optional"))
            }, {
              default: l(() => [...v[11] || (v[11] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Oi, [
          t.isSearching ? (s(), o("div", Ai, [...v[13] || (v[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(W, { key: 1 }, [
            v[14] || (v[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", Bi, [
              (s(!0), o(W, null, ne(t.searchResults.slice(0, 5), (y, k) => (s(), o("label", {
                key: y.package_id,
                class: "option-card",
                onClick: (_) => i("search-result-selected", y)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: k
                }, null, 8, Vi),
                e("div", Wi, [
                  e("div", Gi, [
                    e("span", ji, a(y.package_id), 1),
                    w(ds, {
                      confidence: y.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  y.description ? (s(), o("div", Hi, a(f(y.description)), 1)) : r("", !0),
                  e("div", Ki, [
                    y.is_installed ? (s(), o("span", qi, "Already Installed")) : r("", !0)
                  ])
                ])
              ], 8, Fi))), 128))
            ])
          ], 64)) : (s(), o("div", Yi, [...v[15] || (v[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", Ji, [
            w(he, {
              variant: "secondary",
              size: "sm",
              onClick: v[4] || (v[4] = (y) => i("search"))
            }, {
              default: l(() => {
                var y;
                return [
                  g(a((y = t.searchResults) != null && y.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            w(he, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (y) => i("manual-entry"))
            }, {
              default: l(() => [...v[16] || (v[16] = [
                g(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            w(he, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (y) => i("mark-optional"))
            }, {
              default: l(() => [...v[17] || (v[17] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Qi = /* @__PURE__ */ ae(Xi, [["__scopeId", "data-v-c2997d1d"]]), Zi = { class: "item-navigator" }, er = { class: "nav-item-info" }, tr = ["title"], sr = { class: "nav-controls" }, or = { class: "nav-arrows" }, nr = ["disabled"], ar = ["disabled"], lr = { class: "nav-position" }, ir = /* @__PURE__ */ oe({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const n = c;
    return (i, f) => (s(), o("div", Zi, [
      e("div", er, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, tr)
      ]),
      e("div", sr, [
        e("div", or, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: f[0] || (f[0] = (p) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, nr),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: f[1] || (f[1] = (p) => n("next")),
            title: "Next item"
          }, " → ", 8, ar)
        ]),
        e("span", lr, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), Ks = /* @__PURE__ */ ae(ir, [["__scopeId", "data-v-74af7920"]]), rr = ["type", "value", "placeholder", "disabled"], dr = {
  key: 0,
  class: "base-input-error"
}, cr = /* @__PURE__ */ oe({
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
          n[1] || (n[1] = xt((i) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = xt((i) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, rr),
      t.error ? (s(), o("span", dr, a(t.error), 1)) : r("", !0)
    ], 2));
  }
}), wt = /* @__PURE__ */ ae(cr, [["__scopeId", "data-v-9ba02cdc"]]), ur = { class: "node-resolution-step" }, mr = {
  key: 0,
  class: "auto-resolved-section"
}, vr = { class: "section-header" }, fr = { class: "stat-badge" }, pr = { class: "resolved-packages-list" }, gr = { class: "package-info" }, hr = { class: "package-id" }, yr = { class: "node-count" }, wr = { class: "package-actions" }, kr = {
  key: 0,
  class: "status-badge install"
}, br = {
  key: 1,
  class: "status-badge skip"
}, _r = ["onClick"], $r = {
  key: 1,
  class: "section-divider"
}, Cr = { class: "step-header" }, xr = { class: "stat-badge" }, Sr = {
  key: 1,
  class: "step-body"
}, Ir = {
  key: 3,
  class: "empty-state"
}, Er = { class: "node-modal-body" }, Pr = { class: "node-search-results-container" }, Mr = {
  key: 0,
  class: "node-search-results"
}, Rr = ["onClick"], Tr = { class: "node-result-header" }, Dr = { class: "node-result-package-id" }, Lr = {
  key: 0,
  class: "node-result-description"
}, zr = {
  key: 1,
  class: "node-empty-state"
}, Ur = {
  key: 2,
  class: "node-empty-state"
}, Nr = {
  key: 3,
  class: "node-empty-state"
}, Or = { class: "node-manual-entry-modal" }, Ar = { class: "node-modal-body" }, Br = { class: "node-modal-actions" }, Fr = /* @__PURE__ */ oe({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: c }) {
    const n = t, i = c, { searchNodes: f } = Hs(), p = h(0), u = h(!1), m = h(!1), d = h(""), v = h(""), y = h([]), k = h(!1), _ = h(/* @__PURE__ */ new Map()), b = h(/* @__PURE__ */ new Set()), D = h(!1);
    function M() {
      D.value && L(), D.value = !1;
    }
    const $ = O(() => n.nodes[p.value]), C = O(() => n.nodes.filter((re) => n.nodeChoices.has(re.node_type)).length), A = O(() => $.value ? _.value.get($.value.node_type) || [] : []), x = O(() => $.value ? b.value.has($.value.node_type) : !1);
    St($, async (re) => {
      var ye;
      re && ((ye = re.options) != null && ye.length || _.value.has(re.node_type) || b.value.has(re.node_type) || n.nodeChoices.has(re.node_type) || await R(re.node_type));
    }, { immediate: !0 });
    async function R(re) {
      b.value.add(re);
      try {
        const ye = await f(re, 5);
        _.value.set(re, ye);
      } catch {
        _.value.set(re, []);
      } finally {
        b.value.delete(re);
      }
    }
    const Y = O(() => n.autoResolvedPackages.filter((re) => !n.skippedPackages.has(re.package_id)).length);
    function F(re) {
      return n.skippedPackages.has(re);
    }
    function G(re) {
      i("package-skip", re);
    }
    const S = O(() => {
      var ye;
      if (!$.value) return "not-found";
      const re = n.nodeChoices.get($.value.node_type);
      if (re)
        switch (re.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (ye = $.value.options) != null && ye.length ? "ambiguous" : "not-found";
    }), T = O(() => {
      var ye;
      if (!$.value) return;
      const re = n.nodeChoices.get($.value.node_type);
      if (re)
        switch (re.action) {
          case "install":
            return re.package_id ? `→ ${re.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (ye = $.value.options) != null && ye.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function N(re) {
      re >= 0 && re < n.nodes.length && (p.value = re);
    }
    function ie() {
      $.value && i("mark-optional", $.value.node_type);
    }
    function se() {
      $.value && i("skip", $.value.node_type);
    }
    function J(re) {
      $.value && i("option-selected", $.value.node_type, re);
    }
    function ue() {
      $.value && i("clear-choice", $.value.node_type);
    }
    function X() {
      $.value && (d.value = $.value.node_type, y.value = A.value, u.value = !0, be(d.value));
    }
    function z() {
      v.value = "", m.value = !0;
    }
    function L() {
      u.value = !1, d.value = "", y.value = [];
    }
    function I() {
      m.value = !1, v.value = "";
    }
    let ce = null;
    function Q() {
      ce && clearTimeout(ce), ce = setTimeout(() => {
        be(d.value);
      }, 300);
    }
    async function be(re) {
      if (!re.trim()) {
        y.value = [];
        return;
      }
      k.value = !0;
      try {
        y.value = await f(re, 10);
      } catch {
        y.value = [];
      } finally {
        k.value = !1;
      }
    }
    function Ce(re) {
      $.value && (i("manual-entry", $.value.node_type, re.package_id), L());
    }
    function Te(re) {
      $.value && i("manual-entry", $.value.node_type, re.package_id);
    }
    function Oe() {
      !$.value || !v.value.trim() || (i("manual-entry", $.value.node_type, v.value.trim()), I());
    }
    return (re, ye) => {
      var Pe, Z;
      return s(), o("div", ur, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", mr, [
          e("div", vr, [
            ye[6] || (ye[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", fr, a(Y.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", pr, [
            (s(!0), o(W, null, ne(t.autoResolvedPackages, (le) => (s(), o("div", {
              key: le.package_id,
              class: "resolved-package-item"
            }, [
              e("div", gr, [
                e("code", hr, a(le.package_id), 1),
                e("span", yr, a(le.node_types_count) + " node type" + a(le.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", wr, [
                F(le.package_id) ? (s(), o("span", br, " SKIPPED ")) : (s(), o("span", kr, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (we) => G(le.package_id)
                }, a(F(le.package_id) ? "Include" : "Skip"), 9, _r)
              ])
            ]))), 128))
          ])
        ])) : r("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", $r)) : r("", !0),
        t.nodes.length > 0 ? (s(), o(W, { key: 2 }, [
          e("div", Cr, [
            ye[7] || (ye[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", xr, a(C.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          $.value ? (s(), P(Ks, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": p.value,
            "total-items": t.nodes.length,
            onPrev: ye[0] || (ye[0] = (le) => N(p.value - 1)),
            onNext: ye[1] || (ye[1] = (le) => N(p.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
          $.value ? (s(), o("div", Sr, [
            w(Qi, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((Pe = $.value.options) != null && Pe.length),
              options: $.value.options,
              choice: (Z = t.nodeChoices) == null ? void 0 : Z.get($.value.node_type),
              status: S.value,
              "status-label": T.value,
              "search-results": A.value,
              "is-searching": x.value,
              onMarkOptional: ie,
              onSkip: se,
              onManualEntry: z,
              onSearch: X,
              onOptionSelected: J,
              onClearChoice: ue,
              onSearchResultSelected: Te
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : r("", !0)
        ], 64)) : r("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", Ir, [...ye[8] || (ye[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : r("", !0),
        (s(), P(Ye, { to: "body" }, [
          u.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ye[4] || (ye[4] = Be((le) => D.value = !0, ["self"])),
            onMouseup: Be(M, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: ye[3] || (ye[3] = (le) => D.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                ye[9] || (ye[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: L
                }, "✕")
              ]),
              e("div", Er, [
                w(wt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": ye[2] || (ye[2] = (le) => d.value = le),
                  placeholder: "Search by node type, package name...",
                  onInput: Q
                }, null, 8, ["modelValue"]),
                e("div", Pr, [
                  y.value.length > 0 ? (s(), o("div", Mr, [
                    (s(!0), o(W, null, ne(y.value, (le) => (s(), o("div", {
                      key: le.package_id,
                      class: "node-search-result-item",
                      onClick: (we) => Ce(le)
                    }, [
                      e("div", Tr, [
                        e("code", Dr, a(le.package_id), 1),
                        le.match_confidence ? (s(), P(ds, {
                          key: 0,
                          confidence: le.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : r("", !0)
                      ]),
                      le.description ? (s(), o("div", Lr, a(le.description), 1)) : r("", !0)
                    ], 8, Rr))), 128))
                  ])) : k.value ? (s(), o("div", zr, "Searching...")) : d.value ? (s(), o("div", Ur, 'No packages found matching "' + a(d.value) + '"', 1)) : (s(), o("div", Nr, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : r("", !0)
        ])),
        (s(), P(Ye, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Be(I, ["self"])
          }, [
            e("div", Or, [
              e("div", { class: "node-modal-header" }, [
                ye[10] || (ye[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: I
                }, "✕")
              ]),
              e("div", Ar, [
                w(wt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": ye[5] || (ye[5] = (le) => v.value = le),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Br, [
                  w(he, {
                    variant: "secondary",
                    onClick: I
                  }, {
                    default: l(() => [...ye[11] || (ye[11] = [
                      g("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  w(he, {
                    variant: "primary",
                    disabled: !v.value.trim(),
                    onClick: Oe
                  }, {
                    default: l(() => [...ye[12] || (ye[12] = [
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
}), Vr = /* @__PURE__ */ ae(Fr, [["__scopeId", "data-v-281581bc"]]), Wr = { class: "node-info" }, Gr = { class: "node-info-text" }, jr = { class: "item-body" }, Hr = {
  key: 0,
  class: "resolved-state"
}, Kr = {
  key: 1,
  class: "multiple-options"
}, qr = { class: "options-list" }, Yr = ["onClick"], Jr = ["name", "value", "checked", "onChange"], Xr = { class: "option-content" }, Qr = { class: "option-header" }, Zr = { class: "option-filename" }, ed = { class: "option-meta" }, td = { class: "option-size" }, sd = { class: "option-category" }, od = { class: "option-path" }, nd = { class: "action-buttons" }, ad = {
  key: 2,
  class: "unresolved"
}, ld = { class: "action-buttons" }, id = /* @__PURE__ */ oe({
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
    const n = t, i = c, f = O(() => !!n.choice);
    O(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.action;
    }), O(() => {
      var d, v;
      return ((v = (d = n.choice) == null ? void 0 : d.selected_model) == null ? void 0 : v.filename) || "selected";
    });
    const p = O(() => {
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
      const v = d / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, v) => (s(), o("div", {
      class: pe(["model-resolution-item", { resolved: f.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", Wr, [
        e("span", Gr, [
          v[7] || (v[7] = g("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: pe(["status-badge", p.value])
        }, a(t.statusLabel), 3)) : r("", !0)
      ]),
      e("div", jr, [
        f.value ? (s(), o("div", Hr, [
          w(he, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (y) => i("clear-choice"))
          }, {
            default: l(() => [...v[8] || (v[8] = [
              g(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Kr, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", qr, [
            (s(!0), o(W, null, ne(t.options, (y, k) => (s(), o("label", {
              key: y.model.hash,
              class: pe(["option-card", { selected: t.selectedOptionIndex === k }]),
              onClick: (_) => u(k)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: k,
                checked: t.selectedOptionIndex === k,
                onChange: (_) => u(k)
              }, null, 40, Jr),
              e("div", Xr, [
                e("div", Qr, [
                  e("span", Zr, a(y.model.filename), 1),
                  w(ds, {
                    confidence: y.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", ed, [
                  e("span", td, a(m(y.model.size)), 1),
                  e("span", sd, a(y.model.category), 1)
                ]),
                e("div", od, a(y.model.relative_path), 1)
              ])
            ], 10, Yr))), 128))
          ]),
          e("div", nd, [
            w(he, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (y) => i("search"))
            }, {
              default: l(() => [...v[9] || (v[9] = [
                g(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            w(he, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (y) => i("download-url"))
            }, {
              default: l(() => [...v[10] || (v[10] = [
                g(" Download URL ", -1)
              ])]),
              _: 1
            }),
            w(he, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (y) => i("mark-optional"))
            }, {
              default: l(() => [...v[11] || (v[11] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", ad, [
          v[16] || (v[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", ld, [
            w(he, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (y) => i("search"))
            }, {
              default: l(() => [...v[13] || (v[13] = [
                g(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            w(he, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (y) => i("download-url"))
            }, {
              default: l(() => [...v[14] || (v[14] = [
                g(" Download URL ", -1)
              ])]),
              _: 1
            }),
            w(he, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (y) => i("mark-optional"))
            }, {
              default: l(() => [...v[15] || (v[15] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), rd = /* @__PURE__ */ ae(id, [["__scopeId", "data-v-8a82fefa"]]), dd = { class: "model-resolution-step" }, cd = { class: "step-header" }, ud = { class: "step-info" }, md = { class: "step-title" }, vd = { class: "step-description" }, fd = { class: "stat-badge" }, pd = {
  key: 1,
  class: "step-body"
}, gd = {
  key: 2,
  class: "empty-state"
}, hd = { class: "model-search-modal" }, yd = { class: "model-modal-body" }, wd = {
  key: 0,
  class: "model-search-results"
}, kd = ["onClick"], bd = { class: "model-result-header" }, _d = { class: "model-result-filename" }, $d = { class: "model-result-meta" }, Cd = { class: "model-result-category" }, xd = { class: "model-result-size" }, Sd = {
  key: 0,
  class: "model-result-path"
}, Id = {
  key: 1,
  class: "model-no-results"
}, Ed = {
  key: 2,
  class: "model-searching"
}, Pd = { class: "model-download-url-modal" }, Md = { class: "model-modal-body" }, Rd = { class: "model-input-group" }, Td = { class: "model-input-group" }, Dd = { class: "model-modal-actions" }, Ld = /* @__PURE__ */ oe({
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
    function i(L) {
      var I;
      return L && ((I = n[L]) == null ? void 0 : I[0]) || null;
    }
    const f = t, p = c, u = h(0), m = h(!1), d = h(!1), v = h(""), y = h(""), k = h(""), _ = h([]), b = h(!1), D = O(() => f.models[u.value]), M = O(() => f.models.some((L) => L.is_download_intent)), $ = O(() => f.models.filter(
      (L) => f.modelChoices.has(L.filename) || L.is_download_intent
    ).length), C = O(() => {
      var I;
      if (!D.value) return "";
      const L = i((I = D.value.reference) == null ? void 0 : I.node_type);
      return L ? `${L}/${D.value.filename}` : "";
    }), A = O(() => {
      var I;
      if (!D.value) return "not-found";
      const L = f.modelChoices.get(D.value.filename);
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
      return D.value.is_download_intent ? "download" : (I = D.value.options) != null && I.length ? "ambiguous" : "not-found";
    }), x = O(() => {
      var I, ce;
      if (!D.value) return;
      const L = f.modelChoices.get(D.value.filename);
      if (L)
        switch (L.action) {
          case "select":
            return (I = L.selected_model) != null && I.filename ? `→ ${L.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return D.value.is_download_intent ? "Pending Download" : (ce = D.value.options) != null && ce.length ? `${D.value.options.length} matches` : "Not Found";
    });
    function R(L) {
      L >= 0 && L < f.models.length && (u.value = L);
    }
    function Y() {
      D.value && p("mark-optional", D.value.filename);
    }
    function F() {
      D.value && p("skip", D.value.filename);
    }
    function G(L) {
      D.value && p("option-selected", D.value.filename, L);
    }
    function S() {
      D.value && p("clear-choice", D.value.filename);
    }
    function T() {
      D.value && (v.value = D.value.filename, m.value = !0);
    }
    function N() {
      D.value && (y.value = D.value.download_source || "", k.value = D.value.target_path || C.value, d.value = !0);
    }
    function ie() {
      m.value = !1, v.value = "", _.value = [];
    }
    function se() {
      d.value = !1, y.value = "", k.value = "";
    }
    function J() {
      b.value = !0, setTimeout(() => {
        b.value = !1;
      }, 300);
    }
    function ue(L) {
      D.value && ie();
    }
    function X() {
      !D.value || !y.value.trim() || (p("download-url", D.value.filename, y.value.trim(), k.value.trim() || void 0), se());
    }
    function z(L) {
      if (!L) return "Unknown";
      const I = L / (1024 * 1024 * 1024);
      return I >= 1 ? `${I.toFixed(2)} GB` : `${(L / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (L, I) => {
      var ce, Q, be;
      return s(), o("div", dd, [
        e("div", cd, [
          e("div", ud, [
            e("h3", md, a(M.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", vd, a(M.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", fd, a($.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        D.value ? (s(), P(Ks, {
          key: 0,
          "item-name": D.value.filename,
          "current-index": u.value,
          "total-items": t.models.length,
          onPrev: I[0] || (I[0] = (Ce) => R(u.value - 1)),
          onNext: I[1] || (I[1] = (Ce) => R(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
        D.value ? (s(), o("div", pd, [
          w(rd, {
            filename: D.value.filename,
            "node-type": ((ce = D.value.reference) == null ? void 0 : ce.node_type) || "Unknown",
            "has-multiple-options": !!((Q = D.value.options) != null && Q.length),
            options: D.value.options,
            choice: (be = t.modelChoices) == null ? void 0 : be.get(D.value.filename),
            status: A.value,
            "status-label": x.value,
            onMarkOptional: Y,
            onSkip: F,
            onDownloadUrl: N,
            onSearch: T,
            onOptionSelected: G,
            onClearChoice: S
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", gd, [...I[5] || (I[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), P(Ye, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Be(ie, ["self"])
          }, [
            e("div", hd, [
              e("div", { class: "model-modal-header" }, [
                I[6] || (I[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: ie
                }, "✕")
              ]),
              e("div", yd, [
                w(wt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": I[2] || (I[2] = (Ce) => v.value = Ce),
                  placeholder: "Search by filename, category...",
                  onInput: J
                }, null, 8, ["modelValue"]),
                _.value.length > 0 ? (s(), o("div", wd, [
                  (s(!0), o(W, null, ne(_.value, (Ce) => (s(), o("div", {
                    key: Ce.hash,
                    class: "model-search-result-item",
                    onClick: (Te) => ue()
                  }, [
                    e("div", bd, [
                      e("code", _d, a(Ce.filename), 1)
                    ]),
                    e("div", $d, [
                      e("span", Cd, a(Ce.category), 1),
                      e("span", xd, a(z(Ce.size)), 1)
                    ]),
                    Ce.relative_path ? (s(), o("div", Sd, a(Ce.relative_path), 1)) : r("", !0)
                  ], 8, kd))), 128))
                ])) : v.value && !b.value ? (s(), o("div", Id, ' No models found matching "' + a(v.value) + '" ', 1)) : r("", !0),
                b.value ? (s(), o("div", Ed, "Searching...")) : r("", !0)
              ])
            ])
          ])) : r("", !0)
        ])),
        (s(), P(Ye, { to: "body" }, [
          d.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Be(se, ["self"])
          }, [
            e("div", Pd, [
              e("div", { class: "model-modal-header" }, [
                I[7] || (I[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: se
                }, "✕")
              ]),
              e("div", Md, [
                e("div", Rd, [
                  I[8] || (I[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  w(wt, {
                    modelValue: y.value,
                    "onUpdate:modelValue": I[3] || (I[3] = (Ce) => y.value = Ce),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Td, [
                  I[9] || (I[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  w(wt, {
                    modelValue: k.value,
                    "onUpdate:modelValue": I[4] || (I[4] = (Ce) => k.value = Ce),
                    placeholder: C.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", Dd, [
                  w(he, {
                    variant: "secondary",
                    onClick: se
                  }, {
                    default: l(() => [...I[10] || (I[10] = [
                      g("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  w(he, {
                    variant: "primary",
                    disabled: !y.value.trim() || !k.value.trim(),
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
}), zd = /* @__PURE__ */ ae(Ld, [["__scopeId", "data-v-c6acbada"]]), Ud = { class: "applying-step" }, Nd = {
  key: 0,
  class: "phase-content"
}, Od = {
  key: 1,
  class: "phase-content"
}, Ad = { class: "phase-description" }, Bd = { class: "overall-progress" }, Fd = { class: "progress-bar" }, Vd = { class: "progress-label" }, Wd = { class: "install-list" }, Gd = { class: "install-icon" }, jd = { key: 0 }, Hd = {
  key: 1,
  class: "spinner"
}, Kd = { key: 2 }, qd = { key: 3 }, Yd = {
  key: 0,
  class: "install-error"
}, Jd = {
  key: 2,
  class: "phase-content"
}, Xd = { class: "phase-header" }, Qd = { class: "phase-title" }, Zd = { class: "completion-summary" }, ec = {
  key: 0,
  class: "summary-item success"
}, tc = { class: "summary-text" }, sc = {
  key: 1,
  class: "summary-item error"
}, oc = { class: "summary-text" }, nc = {
  key: 2,
  class: "failed-list"
}, ac = { class: "failed-node-id" }, lc = { class: "failed-error" }, ic = {
  key: 4,
  class: "summary-item success"
}, rc = {
  key: 5,
  class: "restart-prompt"
}, dc = {
  key: 3,
  class: "phase-content error"
}, cc = { class: "error-message" }, uc = /* @__PURE__ */ oe({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const c = t, n = O(() => {
      var v, y;
      const m = ((v = c.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || c.progress.nodesToInstall.length;
      if (!m) return 0;
      const d = ((y = c.progress.nodeInstallProgress) == null ? void 0 : y.completedNodes.length) ?? 0;
      return Math.round(d / m * 100);
    }), i = O(() => {
      var m;
      return ((m = c.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.filter((d) => !d.success)) || [];
    }), f = O(() => i.value.length > 0);
    function p(m, d) {
      var y, k;
      const v = (y = c.progress.nodeInstallProgress) == null ? void 0 : y.completedNodes.find((_) => _.node_id === m);
      return v ? v.success ? "complete" : "failed" : ((k = c.progress.nodeInstallProgress) == null ? void 0 : k.currentIndex) === d ? "installing" : "pending";
    }
    function u(m) {
      var d, v;
      return (v = (d = c.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((y) => y.node_id === m)) == null ? void 0 : v.error;
    }
    return (m, d) => {
      var v, y, k, _;
      return s(), o("div", Ud, [
        t.progress.phase === "resolving" ? (s(), o("div", Nd, [...d[2] || (d[2] = [
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
          e("p", Ad, " Installing " + a((((v = t.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + a(((y = t.progress.nodeInstallProgress) == null ? void 0 : y.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Bd, [
            e("div", Fd, [
              e("div", {
                class: "progress-fill",
                style: Rt({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Vd, a(((k = t.progress.nodeInstallProgress) == null ? void 0 : k.completedNodes.length) ?? 0) + " / " + a(((_ = t.progress.nodeInstallProgress) == null ? void 0 : _.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Wd, [
            (s(!0), o(W, null, ne(t.progress.nodesToInstall, (b, D) => (s(), o("div", {
              key: b,
              class: pe(["install-item", p(b, D)])
            }, [
              e("span", Gd, [
                p(b, D) === "pending" ? (s(), o("span", jd, "○")) : p(b, D) === "installing" ? (s(), o("span", Hd, "◌")) : p(b, D) === "complete" ? (s(), o("span", Kd, "✓")) : p(b, D) === "failed" ? (s(), o("span", qd, "✗")) : r("", !0)
              ]),
              e("code", null, a(b), 1),
              u(b) ? (s(), o("span", Yd, a(u(b)), 1)) : r("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", Jd, [
          e("div", Xd, [
            e("span", {
              class: pe(["phase-icon", f.value ? "warning" : "success"])
            }, a(f.value ? "⚠" : "✓"), 3),
            e("h3", Qd, a(f.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", Zd, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", ec, [
              d[4] || (d[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", tc, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : r("", !0),
            i.value.length > 0 ? (s(), o("div", sc, [
              d[5] || (d[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", oc, a(i.value.length) + " package" + a(i.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : r("", !0),
            i.value.length > 0 ? (s(), o("div", nc, [
              (s(!0), o(W, null, ne(i.value, (b) => (s(), o("div", {
                key: b.node_id,
                class: "failed-item"
              }, [
                e("code", ac, a(b.node_id), 1),
                e("span", lc, a(b.error), 1)
              ]))), 128))
            ])) : r("", !0),
            i.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (b) => m.$emit("retry-failed"))
            }, " Retry Failed (" + a(i.value.length) + ") ", 1)) : r("", !0),
            f.value ? r("", !0) : (s(), o("div", ic, [...d[6] || (d[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", rc, [
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
        ])) : t.progress.phase === "error" ? (s(), o("div", dc, [
          d[9] || (d[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", cc, a(t.progress.error), 1)
        ])) : r("", !0)
      ]);
    };
  }
}), mc = /* @__PURE__ */ ae(uc, [["__scopeId", "data-v-5efaae58"]]), vc = {
  key: 0,
  class: "loading-state"
}, fc = {
  key: 1,
  class: "wizard-content"
}, pc = {
  key: 0,
  class: "step-content"
}, gc = { class: "analysis-summary" }, hc = { class: "analysis-header" }, yc = { class: "summary-description" }, wc = { class: "stats-grid" }, kc = { class: "stat-card" }, bc = { class: "stat-items" }, _c = {
  key: 0,
  class: "stat-item success"
}, $c = { class: "stat-count" }, Cc = {
  key: 1,
  class: "stat-item info"
}, xc = { class: "stat-count" }, Sc = {
  key: 2,
  class: "stat-item warning"
}, Ic = { class: "stat-count" }, Ec = {
  key: 3,
  class: "stat-item error"
}, Pc = { class: "stat-count" }, Mc = { class: "stat-card" }, Rc = { class: "stat-items" }, Tc = { class: "stat-item success" }, Dc = { class: "stat-count" }, Lc = {
  key: 0,
  class: "stat-item info"
}, zc = { class: "stat-count" }, Uc = {
  key: 1,
  class: "stat-item warning"
}, Nc = { class: "stat-count" }, Oc = {
  key: 2,
  class: "stat-item warning"
}, Ac = { class: "stat-count" }, Bc = {
  key: 3,
  class: "stat-item error"
}, Fc = { class: "stat-count" }, Vc = {
  key: 0,
  class: "status-message warning"
}, Wc = { class: "status-text" }, Gc = {
  key: 1,
  class: "status-message info"
}, jc = { class: "status-text" }, Hc = {
  key: 2,
  class: "status-message info"
}, Kc = { class: "status-text" }, qc = {
  key: 3,
  class: "status-message warning"
}, Yc = { class: "status-text" }, Jc = {
  key: 4,
  class: "status-message success"
}, Xc = {
  key: 5,
  class: "category-mismatch-section"
}, Qc = { class: "mismatch-list" }, Zc = { class: "mismatch-path" }, eu = { class: "mismatch-target" }, tu = {
  key: 3,
  class: "step-content"
}, su = { class: "review-summary" }, ou = { class: "review-stats" }, nu = { class: "review-stat" }, au = { class: "stat-value" }, lu = { class: "review-stat" }, iu = { class: "stat-value" }, ru = { class: "review-stat" }, du = { class: "stat-value" }, cu = { class: "review-stat" }, uu = { class: "stat-value" }, mu = {
  key: 0,
  class: "review-section"
}, vu = { class: "section-title" }, fu = { class: "review-items" }, pu = { class: "item-name" }, gu = { class: "item-choice" }, hu = {
  key: 0,
  class: "choice-badge install"
}, yu = {
  key: 1,
  class: "choice-badge skip"
}, wu = {
  key: 1,
  class: "review-section"
}, ku = { class: "section-title" }, bu = { class: "review-items" }, _u = { class: "item-name" }, $u = { class: "item-choice" }, Cu = {
  key: 0,
  class: "choice-badge install"
}, xu = {
  key: 1,
  class: "choice-badge optional"
}, Su = {
  key: 2,
  class: "choice-badge skip"
}, Iu = {
  key: 1,
  class: "choice-badge pending"
}, Eu = {
  key: 2,
  class: "review-section"
}, Pu = { class: "section-title" }, Mu = { class: "review-items" }, Ru = { class: "item-name" }, Tu = { class: "item-choice" }, Du = {
  key: 0,
  class: "choice-badge install"
}, Lu = {
  key: 1,
  class: "choice-badge download"
}, zu = {
  key: 2,
  class: "choice-badge optional"
}, Uu = {
  key: 3,
  class: "choice-badge skip"
}, Nu = {
  key: 4,
  class: "choice-badge skip"
}, Ou = {
  key: 1,
  class: "choice-badge download"
}, Au = {
  key: 2,
  class: "choice-badge pending"
}, Bu = {
  key: 3,
  class: "no-choices"
}, Fu = /* @__PURE__ */ oe({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, i = c, { analyzeWorkflow: f, applyResolution: p, installNodes: u, queueModelDownloads: m, progress: d, resetProgress: v } = Hs(), { loadPendingDownloads: y } = os(), { openFileLocation: k } = Ke(), _ = h(null), b = h(!1), D = h(!1), M = h(null), $ = h("analysis"), C = h([]), A = h(/* @__PURE__ */ new Map()), x = h(/* @__PURE__ */ new Map()), R = h(/* @__PURE__ */ new Set()), Y = O(() => {
      const q = [
        { id: "analysis", label: "Analysis" }
      ];
      return (G.value || N.value) && q.push({ id: "nodes", label: "Nodes" }), (S.value || T.value) && q.push({ id: "models", label: "Models" }), q.push({ id: "review", label: "Review" }), $.value === "applying" && q.push({ id: "applying", label: "Applying" }), q;
    }), F = O(() => _.value ? _.value.stats.needs_user_input : !1), G = O(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), S = O(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), T = O(() => _.value ? _.value.stats.download_intents > 0 : !1), N = O(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), ie = O(() => _.value ? _.value.nodes.resolved.length : 0), se = O(() => _.value ? _.value.models.resolved.filter((q) => q.has_category_mismatch) : []), J = O(() => se.value.length > 0), ue = O(() => {
      if (!_.value) return [];
      const q = _.value.nodes.resolved.filter((V) => !V.is_installed), E = /* @__PURE__ */ new Set();
      return q.filter((V) => E.has(V.package.package_id) ? !1 : (E.add(V.package.package_id), !0));
    }), X = O(() => {
      if (!_.value) return [];
      const q = _.value.nodes.resolved.filter((V) => !V.is_installed), E = /* @__PURE__ */ new Map();
      for (const V of q) {
        const ee = E.get(V.package.package_id);
        ee ? ee.node_types_count++ : E.set(V.package.package_id, {
          package_id: V.package.package_id,
          title: V.package.title,
          node_types_count: 1
        });
      }
      return Array.from(E.values());
    }), z = O(() => ue.value.filter((q) => !R.value.has(q.package.package_id))), L = O(() => _.value ? _.value.models.resolved.filter((q) => q.match_type === "download_intent").map((q) => ({
      filename: q.reference.widget_value,
      reference: q.reference,
      is_download_intent: !0,
      resolved_model: q.model,
      download_source: q.download_source,
      target_path: q.target_path
    })) : []), I = O(() => {
      if (!_.value) return [];
      const q = _.value.nodes.unresolved.map((V) => ({
        node_type: V.reference.node_type,
        reason: V.reason,
        is_unresolved: !0,
        options: void 0
      })), E = _.value.nodes.ambiguous.map((V) => ({
        node_type: V.reference.node_type,
        has_multiple_options: !0,
        options: V.options.map((ee) => ({
          package_id: ee.package.package_id,
          title: ee.package.title,
          match_confidence: ee.match_confidence,
          match_type: ee.match_type,
          is_installed: ee.is_installed
        }))
      }));
      return [...q, ...E];
    }), ce = O(() => {
      if (!_.value) return [];
      const q = _.value.models.unresolved.map((V) => ({
        filename: V.reference.widget_value,
        reference: V.reference,
        reason: V.reason,
        is_unresolved: !0,
        options: void 0
      })), E = _.value.models.ambiguous.map((V) => ({
        filename: V.reference.widget_value,
        reference: V.reference,
        has_multiple_options: !0,
        options: V.options.map((ee) => ({
          model: ee.model,
          match_confidence: ee.match_confidence,
          match_type: ee.match_type,
          has_download_source: ee.has_download_source
        }))
      }));
      return [...q, ...E];
    }), Q = O(() => {
      const q = ce.value, E = L.value.map((V) => ({
        filename: V.filename,
        reference: V.reference,
        is_download_intent: !0,
        resolved_model: V.resolved_model,
        download_source: V.download_source,
        target_path: V.target_path,
        options: void 0
      }));
      return [...q, ...E];
    }), be = O(() => {
      let q = z.value.length;
      for (const E of A.value.values())
        E.action === "install" && q++;
      for (const E of x.value.values())
        E.action === "select" && q++;
      return q;
    }), Ce = O(() => {
      let q = 0;
      for (const E of x.value.values())
        E.action === "download" && q++;
      return q;
    }), Te = O(() => {
      let q = 0;
      for (const E of A.value.values())
        E.action === "optional" && q++;
      for (const E of x.value.values())
        E.action === "optional" && q++;
      return q;
    }), Oe = O(() => {
      let q = R.value.size;
      for (const E of A.value.values())
        E.action === "skip" && q++;
      for (const E of x.value.values())
        E.action === "skip" && q++;
      for (const E of I.value)
        A.value.has(E.node_type) || q++;
      for (const E of ce.value)
        x.value.has(E.filename) || q++;
      return q;
    }), re = O(() => {
      const q = {};
      if (q.analysis = { resolved: 1, total: 1 }, G.value) {
        const E = I.value.length, V = I.value.filter(
          (ee) => A.value.has(ee.node_type)
        ).length;
        q.nodes = { resolved: V, total: E };
      }
      if (S.value || T.value) {
        const E = Q.value.length, V = Q.value.filter(
          (ee) => x.value.has(ee.filename) || ee.is_download_intent
        ).length;
        q.models = { resolved: V, total: E };
      }
      if (q.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const E = d.totalFiles || 1, V = d.completedFiles.length;
        q.applying = { resolved: V, total: E };
      }
      return q;
    });
    function ye(q) {
      $.value = q;
    }
    function Pe() {
      const q = Y.value.findIndex((E) => E.id === $.value);
      q > 0 && ($.value = Y.value[q - 1].id);
    }
    function Z() {
      const q = Y.value.findIndex((E) => E.id === $.value);
      q < Y.value.length - 1 && ($.value = Y.value[q + 1].id);
    }
    async function le() {
      b.value = !0, M.value = null;
      try {
        _.value = await f(n.workflowName);
      } catch (q) {
        M.value = q instanceof Error ? q.message : "Failed to analyze workflow";
      } finally {
        b.value = !1;
      }
    }
    function we() {
      C.value.includes("analysis") || C.value.push("analysis"), G.value || N.value ? $.value = "nodes" : S.value || T.value ? $.value = "models" : $.value = "review";
    }
    function xe(q) {
      A.value.set(q, { action: "optional" });
    }
    function Je(q) {
      A.value.set(q, { action: "skip" });
    }
    function at(q, E) {
      var ee;
      const V = I.value.find((ke) => ke.node_type === q);
      (ee = V == null ? void 0 : V.options) != null && ee[E] && A.value.set(q, {
        action: "install",
        package_id: V.options[E].package_id
      });
    }
    function Me(q, E) {
      A.value.set(q, {
        action: "install",
        package_id: E
      });
    }
    function st(q) {
      A.value.delete(q);
    }
    function qe(q) {
      R.value.has(q) ? R.value.delete(q) : R.value.add(q);
    }
    function Fe(q) {
      x.value.set(q, { action: "optional" });
    }
    function ct(q) {
      x.value.set(q, { action: "skip" });
    }
    function _e(q, E) {
      var ee;
      const V = ce.value.find((ke) => ke.filename === q);
      (ee = V == null ? void 0 : V.options) != null && ee[E] && x.value.set(q, {
        action: "select",
        selected_model: V.options[E].model
      });
    }
    function He(q, E, V) {
      x.value.set(q, {
        action: "download",
        url: E,
        target_path: V
      });
    }
    function lt(q) {
      x.value.delete(q);
    }
    async function ot(q) {
      try {
        await k(q);
      } catch (E) {
        M.value = E instanceof Error ? E.message : "Failed to open file location";
      }
    }
    async function Ue() {
      var q;
      D.value = !0, M.value = null, v(), d.phase = "resolving", $.value = "applying";
      try {
        const E = await p(n.workflowName, A.value, x.value, R.value);
        E.models_to_download && E.models_to_download.length > 0 && m(n.workflowName, E.models_to_download);
        const V = [
          ...E.nodes_to_install || [],
          ...z.value.map((ke) => ke.package.package_id)
        ];
        d.nodesToInstall = [...new Set(V)], d.nodesToInstall.length > 0 && await u(n.workflowName), d.phase = "complete", await y();
        const ee = d.installError || ((q = d.nodeInstallProgress) == null ? void 0 : q.completedNodes.some((ke) => !ke.success));
        !d.needsRestart && !ee && setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1500);
      } catch (E) {
        M.value = E instanceof Error ? E.message : "Failed to apply resolution", d.error = M.value, d.phase = "error";
      } finally {
        D.value = !1;
      }
    }
    function me() {
      i("refresh"), i("restart"), i("close");
    }
    async function K() {
      var E;
      const q = ((E = d.nodeInstallProgress) == null ? void 0 : E.completedNodes.filter((V) => !V.success).map((V) => V.node_id)) || [];
      if (q.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: q.length
        }, d.nodesToInstall = q, d.nodesInstalled = [], d.installError = void 0;
        try {
          await u(n.workflowName), d.phase = "complete";
        } catch (V) {
          d.error = V instanceof Error ? V.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return We(le), (q, E) => (s(), P(tt, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: b.value,
      error: M.value || void 0,
      "fixed-height": !0,
      onClose: E[1] || (E[1] = (V) => i("close"))
    }, {
      body: l(() => [
        b.value && !_.value ? (s(), o("div", vc, [...E[2] || (E[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (s(), o("div", fc, [
          w(bi, {
            steps: Y.value,
            "current-step": $.value,
            "completed-steps": C.value,
            "step-stats": re.value,
            onStepChange: ye
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (s(), o("div", pc, [
            e("div", gc, [
              e("div", hc, [
                E[3] || (E[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", yc, " Found " + a(_.value.stats.total_nodes) + " nodes and " + a(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", wc, [
                e("div", kc, [
                  E[12] || (E[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", bc, [
                    ie.value > 0 ? (s(), o("div", _c, [
                      E[4] || (E[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", $c, a(ie.value), 1),
                      E[5] || (E[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : r("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (s(), o("div", Cc, [
                      E[6] || (E[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", xc, a(_.value.stats.packages_needing_installation), 1),
                      E[7] || (E[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : r("", !0),
                    _.value.nodes.ambiguous.length > 0 ? (s(), o("div", Sc, [
                      E[8] || (E[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Ic, a(_.value.nodes.ambiguous.length), 1),
                      E[9] || (E[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : r("", !0),
                    _.value.nodes.unresolved.length > 0 ? (s(), o("div", Ec, [
                      E[10] || (E[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Pc, a(_.value.nodes.unresolved.length), 1),
                      E[11] || (E[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : r("", !0)
                  ])
                ]),
                e("div", Mc, [
                  E[23] || (E[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Rc, [
                    e("div", Tc, [
                      E[13] || (E[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Dc, a(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      E[14] || (E[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (s(), o("div", Lc, [
                      E[15] || (E[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", zc, a(_.value.stats.download_intents), 1),
                      E[16] || (E[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : r("", !0),
                    J.value ? (s(), o("div", Uc, [
                      E[17] || (E[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", Nc, a(se.value.length), 1),
                      E[18] || (E[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : r("", !0),
                    _.value.models.ambiguous.length > 0 ? (s(), o("div", Oc, [
                      E[19] || (E[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Ac, a(_.value.models.ambiguous.length), 1),
                      E[20] || (E[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : r("", !0),
                    _.value.models.unresolved.length > 0 ? (s(), o("div", Bc, [
                      E[21] || (E[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Fc, a(_.value.models.unresolved.length), 1),
                      E[22] || (E[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : r("", !0)
                  ])
                ])
              ]),
              F.value ? (s(), o("div", Vc, [
                E[24] || (E[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Wc, a(I.value.length + ce.value.length) + " items need your input", 1)
              ])) : N.value ? (s(), o("div", Gc, [
                E[25] || (E[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", jc, a(_.value.stats.packages_needing_installation) + " package" + a(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(_.value.stats.nodes_needing_installation) + " node type" + a(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(T.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : T.value ? (s(), o("div", Hc, [
                E[26] || (E[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Kc, a(_.value.stats.download_intents) + " model" + a(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : J.value ? (s(), o("div", qc, [
                E[27] || (E[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Yc, a(se.value.length) + " model" + a(se.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", Jc, [...E[28] || (E[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              J.value ? (s(), o("div", Xc, [
                E[31] || (E[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", Qc, [
                  (s(!0), o(W, null, ne(se.value, (V) => {
                    var ee, ke;
                    return s(), o("div", {
                      key: V.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", Zc, a(V.actual_category) + "/" + a((ee = V.model) == null ? void 0 : ee.filename), 1),
                      E[30] || (E[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", eu, a((ke = V.expected_categories) == null ? void 0 : ke[0]) + "/", 1),
                      V.file_path ? (s(), P(he, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Ge) => ot(V.file_path)
                      }, {
                        default: l(() => [...E[29] || (E[29] = [
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
          $.value === "nodes" ? (s(), P(Vr, {
            key: 1,
            nodes: I.value,
            "node-choices": A.value,
            "auto-resolved-packages": X.value,
            "skipped-packages": R.value,
            onMarkOptional: xe,
            onSkip: Je,
            onOptionSelected: at,
            onManualEntry: Me,
            onClearChoice: st,
            onPackageSkip: qe
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : r("", !0),
          $.value === "models" ? (s(), P(zd, {
            key: 2,
            models: Q.value,
            "model-choices": x.value,
            onMarkOptional: Fe,
            onSkip: ct,
            onOptionSelected: _e,
            onDownloadUrl: He,
            onClearChoice: lt
          }, null, 8, ["models", "model-choices"])) : r("", !0),
          $.value === "review" ? (s(), o("div", tu, [
            e("div", su, [
              E[36] || (E[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", ou, [
                e("div", nu, [
                  e("span", au, a(be.value), 1),
                  E[32] || (E[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", lu, [
                  e("span", iu, a(Ce.value), 1),
                  E[33] || (E[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", ru, [
                  e("span", du, a(Te.value), 1),
                  E[34] || (E[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", cu, [
                  e("span", uu, a(Oe.value), 1),
                  E[35] || (E[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              X.value.length > 0 ? (s(), o("div", mu, [
                e("h4", vu, "Node Packages (" + a(X.value.length) + ")", 1),
                e("div", fu, [
                  (s(!0), o(W, null, ne(X.value, (V) => (s(), o("div", {
                    key: V.package_id,
                    class: "review-item"
                  }, [
                    e("code", pu, a(V.package_id), 1),
                    e("div", gu, [
                      R.value.has(V.package_id) ? (s(), o("span", yu, "Skipped")) : (s(), o("span", hu, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : r("", !0),
              I.value.length > 0 ? (s(), o("div", wu, [
                e("h4", ku, "Node Choices (" + a(I.value.length) + ")", 1),
                e("div", bu, [
                  (s(!0), o(W, null, ne(I.value, (V) => {
                    var ee, ke, Ge, vt;
                    return s(), o("div", {
                      key: V.node_type,
                      class: "review-item"
                    }, [
                      e("code", _u, a(V.node_type), 1),
                      e("div", $u, [
                        A.value.has(V.node_type) ? (s(), o(W, { key: 0 }, [
                          ((ee = A.value.get(V.node_type)) == null ? void 0 : ee.action) === "install" ? (s(), o("span", Cu, a((ke = A.value.get(V.node_type)) == null ? void 0 : ke.package_id), 1)) : ((Ge = A.value.get(V.node_type)) == null ? void 0 : Ge.action) === "optional" ? (s(), o("span", xu, " Optional ")) : ((vt = A.value.get(V.node_type)) == null ? void 0 : vt.action) === "skip" ? (s(), o("span", Su, " Skip ")) : r("", !0)
                        ], 64)) : (s(), o("span", Iu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : r("", !0),
              Q.value.length > 0 ? (s(), o("div", Eu, [
                e("h4", Pu, "Models (" + a(Q.value.length) + ")", 1),
                e("div", Mu, [
                  (s(!0), o(W, null, ne(Q.value, (V) => {
                    var ee, ke, Ge, vt, it, Lt, ft;
                    return s(), o("div", {
                      key: V.filename,
                      class: "review-item"
                    }, [
                      e("code", Ru, a(V.filename), 1),
                      e("div", Tu, [
                        x.value.has(V.filename) ? (s(), o(W, { key: 0 }, [
                          ((ee = x.value.get(V.filename)) == null ? void 0 : ee.action) === "select" ? (s(), o("span", Du, a((Ge = (ke = x.value.get(V.filename)) == null ? void 0 : ke.selected_model) == null ? void 0 : Ge.filename), 1)) : ((vt = x.value.get(V.filename)) == null ? void 0 : vt.action) === "download" ? (s(), o("span", Lu, " Download ")) : ((it = x.value.get(V.filename)) == null ? void 0 : it.action) === "optional" ? (s(), o("span", zu, " Optional ")) : ((Lt = x.value.get(V.filename)) == null ? void 0 : Lt.action) === "skip" ? (s(), o("span", Uu, " Skip ")) : ((ft = x.value.get(V.filename)) == null ? void 0 : ft.action) === "cancel_download" ? (s(), o("span", Nu, " Cancel Download ")) : r("", !0)
                        ], 64)) : V.is_download_intent ? (s(), o("span", Ou, " Pending Download ")) : (s(), o("span", Au, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : r("", !0),
              ue.value.length === 0 && I.value.length === 0 && Q.value.length === 0 ? (s(), o("div", Bu, " No dependencies need resolution. ")) : r("", !0)
            ])
          ])) : r("", !0),
          $.value === "applying" ? (s(), P(mc, {
            key: 4,
            progress: Ie(d),
            onRestart: me,
            onRetryFailed: K
          }, null, 8, ["progress"])) : r("", !0)
        ])) : r("", !0)
      ]),
      footer: l(() => [
        $.value !== "analysis" && $.value !== "applying" ? (s(), P(he, {
          key: 0,
          variant: "secondary",
          disabled: D.value,
          onClick: Pe
        }, {
          default: l(() => [...E[37] || (E[37] = [
            g(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : r("", !0),
        E[41] || (E[41] = e("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || Ie(d).phase === "complete" || Ie(d).phase === "error" ? (s(), P(he, {
          key: 1,
          variant: "secondary",
          onClick: E[0] || (E[0] = (V) => i("close"))
        }, {
          default: l(() => [
            g(a(Ie(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : r("", !0),
        $.value === "analysis" ? (s(), P(he, {
          key: 2,
          variant: "primary",
          disabled: b.value,
          onClick: we
        }, {
          default: l(() => [...E[38] || (E[38] = [
            g(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : r("", !0),
        $.value === "nodes" ? (s(), P(he, {
          key: 3,
          variant: "primary",
          onClick: Z
        }, {
          default: l(() => [
            g(a(S.value || T.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : r("", !0),
        $.value === "models" ? (s(), P(he, {
          key: 4,
          variant: "primary",
          onClick: Z
        }, {
          default: l(() => [...E[39] || (E[39] = [
            g(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : r("", !0),
        $.value === "review" ? (s(), P(he, {
          key: 5,
          variant: "primary",
          disabled: D.value,
          loading: D.value,
          onClick: Ue
        }, {
          default: l(() => [...E[40] || (E[40] = [
            g(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : r("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Vu = /* @__PURE__ */ ae(Fu, [["__scopeId", "data-v-6276cf1d"]]), Wu = { class: "search-input-wrapper" }, Gu = ["value", "placeholder"], ju = /* @__PURE__ */ oe({
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
    let p;
    function u(d) {
      const v = d.target.value;
      n.debounce > 0 ? (clearTimeout(p), p = window.setTimeout(() => {
        i("update:modelValue", v);
      }, n.debounce)) : i("update:modelValue", v);
    }
    function m() {
      var d;
      i("update:modelValue", ""), i("clear"), (d = f.value) == null || d.focus();
    }
    return We(() => {
      n.autoFocus && f.value && f.value.focus();
    }), (d, v) => (s(), o("div", Wu, [
      e("input", {
        ref_key: "inputRef",
        ref: f,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: xt(m, ["escape"])
      }, null, 40, Gu),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : r("", !0)
    ]));
  }
}), Hu = /* @__PURE__ */ ae(ju, [["__scopeId", "data-v-266f857a"]]), Ku = { class: "search-bar" }, qu = /* @__PURE__ */ oe({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, n) => (s(), o("div", Ku, [
      w(Hu, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => c.$emit("update:modelValue", i)),
        onClear: n[1] || (n[1] = (i) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Ht = /* @__PURE__ */ ae(qu, [["__scopeId", "data-v-3d51bbfd"]]), Yu = { class: "section-group" }, Ju = {
  key: 0,
  class: "section-content"
}, Xu = /* @__PURE__ */ oe({
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
    function p() {
      n.collapsible && (f.value = !f.value, i("toggle", f.value));
    }
    return (u, m) => (s(), o("section", Yu, [
      w(mt, {
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
      !t.collapsible || f.value ? (s(), o("div", Ju, [
        Re(u.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), Ae = /* @__PURE__ */ ae(Xu, [["__scopeId", "data-v-c48e33ed"]]), Qu = { class: "item-header" }, Zu = {
  key: 0,
  class: "item-icon"
}, em = { class: "item-info" }, tm = {
  key: 0,
  class: "item-title"
}, sm = {
  key: 1,
  class: "item-subtitle"
}, om = {
  key: 0,
  class: "item-details"
}, nm = {
  key: 1,
  class: "item-actions"
}, am = /* @__PURE__ */ oe({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, i = O(() => n.status ? `status-${n.status}` : "");
    return (f, p) => (s(), o("div", {
      class: pe(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: p[0] || (p[0] = (u) => t.clickable && f.$emit("click"))
    }, [
      e("div", Qu, [
        f.$slots.icon ? (s(), o("span", Zu, [
          Re(f.$slots, "icon", {}, void 0, !0)
        ])) : r("", !0),
        e("div", em, [
          f.$slots.title ? (s(), o("div", tm, [
            Re(f.$slots, "title", {}, void 0, !0)
          ])) : r("", !0),
          f.$slots.subtitle ? (s(), o("div", sm, [
            Re(f.$slots, "subtitle", {}, void 0, !0)
          ])) : r("", !0)
        ])
      ]),
      f.$slots.details ? (s(), o("div", om, [
        Re(f.$slots, "details", {}, void 0, !0)
      ])) : r("", !0),
      f.$slots.actions ? (s(), o("div", nm, [
        Re(f.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), Qe = /* @__PURE__ */ ae(am, [["__scopeId", "data-v-cc435e0e"]]), lm = { class: "loading-state" }, im = { class: "loading-message" }, rm = /* @__PURE__ */ oe({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, n) => (s(), o("div", lm, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", im, a(t.message), 1)
    ]));
  }
}), Tt = /* @__PURE__ */ ae(rm, [["__scopeId", "data-v-ad8436c9"]]), dm = { class: "error-state" }, cm = { class: "error-message" }, um = /* @__PURE__ */ oe({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, n) => (s(), o("div", dm, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", cm, a(t.message), 1),
      t.retry ? (s(), P(te, {
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
}), Dt = /* @__PURE__ */ ae(um, [["__scopeId", "data-v-5397be48"]]), mm = /* @__PURE__ */ oe({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getWorkflows: f } = Ke();
    Gs();
    const p = h([]), u = h(!1), m = h(null), d = h(""), v = h(!0), y = h(!1), k = h(!1), _ = h(!1), b = h(null), D = O(
      () => p.value.filter((z) => z.status === "broken")
    ), M = O(
      () => p.value.filter((z) => z.status === "new")
    ), $ = O(
      () => p.value.filter((z) => z.status === "modified")
    ), C = O(
      () => p.value.filter((z) => z.status === "synced")
    ), A = O(() => {
      if (!d.value.trim()) return p.value;
      const z = d.value.toLowerCase();
      return p.value.filter((L) => L.name.toLowerCase().includes(z));
    }), x = O(
      () => D.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), R = O(
      () => M.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), Y = O(
      () => $.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), F = O(
      () => C.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), G = O(
      () => y.value ? F.value : F.value.slice(0, 5)
    );
    async function S(z = !1) {
      u.value = !0, m.value = null;
      try {
        p.value = await f(z);
      } catch (L) {
        m.value = L instanceof Error ? L.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    c({ loadWorkflows: S });
    function T(z) {
      b.value = z, k.value = !0;
    }
    function N(z) {
      b.value = z, _.value = !0;
    }
    function ie() {
      i("refresh");
    }
    async function se() {
      _.value = !1, await S(!0);
    }
    async function J() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ue(z) {
      const L = [];
      return z.missing_nodes > 0 && L.push(`${z.missing_nodes} missing node${z.missing_nodes > 1 ? "s" : ""}`), z.missing_models > 0 && L.push(`${z.missing_models} missing model${z.missing_models > 1 ? "s" : ""}`), z.models_with_category_mismatch && z.models_with_category_mismatch > 0 && L.push(`${z.models_with_category_mismatch} model${z.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), z.pending_downloads && z.pending_downloads > 0 && L.push(`${z.pending_downloads} pending download${z.pending_downloads > 1 ? "s" : ""}`), L.length > 0 ? L.join(", ") : "Has issues";
    }
    function X(z) {
      const L = z.sync_state === "new" ? "New" : z.sync_state === "modified" ? "Modified" : z.sync_state === "synced" ? "Synced" : z.sync_state;
      return z.has_path_sync_issues && z.models_needing_path_sync && z.models_needing_path_sync > 0 ? `${z.models_needing_path_sync} model path${z.models_needing_path_sync > 1 ? "s" : ""} need${z.models_needing_path_sync === 1 ? "s" : ""} sync` : L || "Unknown";
    }
    return We(S), (z, L) => (s(), o(W, null, [
      w(Ze, null, {
        header: l(() => [
          w(et, { title: "WORKFLOWS" })
        ]),
        search: l(() => [
          w(Ht, {
            modelValue: d.value,
            "onUpdate:modelValue": L[0] || (L[0] = (I) => d.value = I),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value ? (s(), P(Tt, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (s(), P(Dt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            x.value.length ? (s(), P(Ae, {
              key: 0,
              title: "BROKEN",
              count: x.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(x.value, (I) => (s(), P(Qe, {
                  key: I.name,
                  status: "broken"
                }, {
                  icon: l(() => [...L[7] || (L[7] = [
                    g("⚠", -1)
                  ])]),
                  title: l(() => [
                    g(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(ue(I)), 1)
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ce) => N(I.name)
                    }, {
                      default: l(() => [...L[8] || (L[8] = [
                        g(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ce) => T(I.name)
                    }, {
                      default: l(() => [...L[9] || (L[9] = [
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
            R.value.length ? (s(), P(Ae, {
              key: 1,
              title: "NEW",
              count: R.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(R.value, (I) => (s(), P(Qe, {
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
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ce) => T(I.name)
                    }, {
                      default: l(() => [...L[10] || (L[10] = [
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
              default: l(() => [
                (s(!0), o(W, null, ne(Y.value, (I) => (s(), P(Qe, {
                  key: I.name,
                  status: I.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: l(() => [...L[11] || (L[11] = [
                    g("⚡", -1)
                  ])]),
                  title: l(() => [
                    g(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(X(I)), 1)
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ce) => T(I.name)
                    }, {
                      default: l(() => [...L[12] || (L[12] = [
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
            F.value.length ? (s(), P(Ae, {
              key: 3,
              title: "SYNCED",
              count: F.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: L[2] || (L[2] = (I) => v.value = I)
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(G.value, (I) => (s(), P(Qe, {
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
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ce) => T(I.name)
                    }, {
                      default: l(() => [...L[13] || (L[13] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !y.value && F.value.length > 5 ? (s(), P(te, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: L[1] || (L[1] = (I) => y.value = !0),
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
            A.value.length ? r("", !0) : (s(), P(kt, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k.value && b.value ? (s(), P(di, {
        key: 0,
        "workflow-name": b.value,
        onClose: L[3] || (L[3] = (I) => k.value = !1),
        onResolve: L[4] || (L[4] = (I) => N(b.value)),
        onRefresh: L[5] || (L[5] = (I) => i("refresh"))
      }, null, 8, ["workflow-name"])) : r("", !0),
      _.value && b.value ? (s(), P(Vu, {
        key: 1,
        "workflow-name": b.value,
        onClose: se,
        onInstall: ie,
        onRefresh: L[6] || (L[6] = (I) => i("refresh")),
        onRestart: J
      }, null, 8, ["workflow-name"])) : r("", !0)
    ], 64));
  }
}), vm = /* @__PURE__ */ ae(mm, [["__scopeId", "data-v-fa3f076e"]]), fm = /* @__PURE__ */ oe({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: pe(["summary-bar", t.variant])
    }, [
      Re(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ns = /* @__PURE__ */ ae(fm, [["__scopeId", "data-v-ccb7816e"]]), pm = {
  key: 0,
  class: "model-details"
}, gm = { class: "detail-section" }, hm = { class: "detail-row" }, ym = { class: "detail-value mono" }, wm = { class: "detail-row" }, km = { class: "detail-value mono" }, bm = { class: "detail-row" }, _m = { class: "detail-value mono" }, $m = { class: "detail-row" }, Cm = { class: "detail-value" }, xm = { class: "detail-row" }, Sm = { class: "detail-value" }, Im = { class: "detail-row" }, Em = { class: "detail-value" }, Pm = { class: "detail-section" }, Mm = { class: "section-header" }, Rm = {
  key: 0,
  class: "locations-list"
}, Tm = { class: "location-path mono" }, Dm = {
  key: 0,
  class: "location-modified"
}, Lm = ["onClick"], zm = {
  key: 1,
  class: "empty-state"
}, Um = { class: "detail-section" }, Nm = { class: "section-header" }, Om = {
  key: 0,
  class: "sources-list"
}, Am = { class: "source-type" }, Bm = ["href"], Fm = ["disabled", "onClick"], Vm = {
  key: 1,
  class: "empty-state"
}, Wm = { class: "add-source-form" }, Gm = ["disabled"], jm = {
  key: 2,
  class: "source-error"
}, Hm = {
  key: 3,
  class: "source-success"
}, Km = /* @__PURE__ */ oe({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: i, addModelSource: f, removeModelSource: p, openFileLocation: u } = Ke(), m = h(null), d = h(!0), v = h(null), y = h(""), k = h(!1), _ = h(null), b = h(null), D = h(null), M = h(null);
    let $ = null;
    function C(S, T = "success", N = 2e3) {
      $ && clearTimeout($), M.value = { message: S, type: T }, $ = setTimeout(() => {
        M.value = null;
      }, N);
    }
    function A(S) {
      if (!S) return "Unknown";
      const T = 1024 * 1024 * 1024, N = 1024 * 1024;
      return S >= T ? `${(S / T).toFixed(1)} GB` : S >= N ? `${(S / N).toFixed(0)} MB` : `${(S / 1024).toFixed(0)} KB`;
    }
    function x(S) {
      navigator.clipboard.writeText(S), C("Copied to clipboard!");
    }
    async function R(S) {
      try {
        await u(S), C("Opening file location...");
      } catch {
        C("Failed to open location", "error");
      }
    }
    async function Y() {
      if (!(!y.value.trim() || !m.value)) {
        k.value = !0, b.value = null, D.value = null;
        try {
          await f(m.value.hash, y.value.trim()), D.value = "Source added successfully!", y.value = "", await G();
        } catch (S) {
          b.value = S instanceof Error ? S.message : "Failed to add source";
        } finally {
          k.value = !1;
        }
      }
    }
    async function F(S) {
      if (m.value) {
        _.value = S, b.value = null, D.value = null;
        try {
          await p(m.value.hash, S), C("Source removed"), await G();
        } catch (T) {
          b.value = T instanceof Error ? T.message : "Failed to remove source";
        } finally {
          _.value = null;
        }
      }
    }
    async function G() {
      d.value = !0, v.value = null;
      try {
        m.value = await i(n.identifier);
      } catch (S) {
        v.value = S instanceof Error ? S.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return We(G), (S, T) => {
      var N;
      return s(), o(W, null, [
        w(tt, {
          title: `Model Details: ${((N = m.value) == null ? void 0 : N.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: v.value,
          onClose: T[5] || (T[5] = (ie) => S.$emit("close"))
        }, {
          body: l(() => {
            var ie, se, J, ue;
            return [
              m.value ? (s(), o("div", pm, [
                e("section", gm, [
                  e("div", hm, [
                    T[6] || (T[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", ym, a(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[0] || (T[0] = (X) => x(m.value.hash))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", wm, [
                    T[7] || (T[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", km, a(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[1] || (T[1] = (X) => x(m.value.blake3))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", bm, [
                    T[8] || (T[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", _m, a(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[2] || (T[2] = (X) => x(m.value.sha256))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", $m, [
                    T[9] || (T[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Cm, a(A(m.value.size)), 1)
                  ]),
                  e("div", xm, [
                    T[10] || (T[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Sm, a(m.value.category), 1)
                  ]),
                  e("div", Im, [
                    T[11] || (T[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Em, a(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Pm, [
                  e("h4", Mm, "Locations (" + a(((ie = m.value.locations) == null ? void 0 : ie.length) || 0) + ")", 1),
                  (se = m.value.locations) != null && se.length ? (s(), o("div", Rm, [
                    (s(!0), o(W, null, ne(m.value.locations, (X, z) => (s(), o("div", {
                      key: z,
                      class: "location-item"
                    }, [
                      e("span", Tm, a(X.path), 1),
                      X.modified ? (s(), o("span", Dm, "Modified: " + a(X.modified), 1)) : r("", !0),
                      X.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (L) => R(X.path)
                      }, " Open File Location ", 8, Lm)) : r("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", zm, "No locations found"))
                ]),
                e("section", Um, [
                  e("h4", Nm, "Download Sources (" + a(((J = m.value.sources) == null ? void 0 : J.length) || 0) + ")", 1),
                  (ue = m.value.sources) != null && ue.length ? (s(), o("div", Om, [
                    (s(!0), o(W, null, ne(m.value.sources, (X, z) => (s(), o("div", {
                      key: z,
                      class: "source-item"
                    }, [
                      e("span", Am, a(X.type) + ":", 1),
                      e("a", {
                        href: X.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(X.url), 9, Bm),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: _.value === X.url,
                        onClick: (L) => F(X.url)
                      }, a(_.value === X.url ? "..." : "×"), 9, Fm)
                    ]))), 128))
                  ])) : (s(), o("div", Vm, " No download sources configured ")),
                  e("div", Wm, [
                    ze(e("input", {
                      "onUpdate:modelValue": T[3] || (T[3] = (X) => y.value = X),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Ot, y.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !y.value.trim() || k.value,
                      onClick: Y
                    }, a(k.value ? "Adding..." : "Add Source"), 9, Gm)
                  ]),
                  b.value ? (s(), o("p", jm, a(b.value), 1)) : r("", !0),
                  D.value ? (s(), o("p", Hm, a(D.value), 1)) : r("", !0)
                ])
              ])) : r("", !0)
            ];
          }),
          footer: l(() => [
            e("button", {
              class: "btn-secondary",
              onClick: T[4] || (T[4] = (ie) => S.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), P(Ye, { to: "body" }, [
          M.value ? (s(), o("div", {
            key: 0,
            class: pe(["toast", M.value.type])
          }, a(M.value.message), 3)) : r("", !0)
        ]))
      ], 64);
    };
  }
}), Cs = /* @__PURE__ */ ae(Km, [["__scopeId", "data-v-f15cbb56"]]), qm = /* @__PURE__ */ oe({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: i, getStatus: f } = Ke(), p = h([]), u = h([]), m = h("production"), d = h(!1), v = h(null), y = h(""), k = h(!1), _ = h(null);
    function b() {
      k.value = !1, n("navigate", "model-index");
    }
    const D = O(
      () => p.value.reduce((G, S) => G + (S.size || 0), 0)
    ), M = O(() => {
      if (!y.value.trim()) return p.value;
      const G = y.value.toLowerCase();
      return p.value.filter((S) => S.filename.toLowerCase().includes(G));
    }), $ = O(() => {
      if (!y.value.trim()) return u.value;
      const G = y.value.toLowerCase();
      return u.value.filter((S) => S.filename.toLowerCase().includes(G));
    }), C = O(() => {
      const G = {};
      for (const T of M.value) {
        const N = T.type || "other";
        G[N] || (G[N] = []), G[N].push(T);
      }
      const S = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(G).sort(([T], [N]) => {
        const ie = S.indexOf(T), se = S.indexOf(N);
        return ie >= 0 && se >= 0 ? ie - se : ie >= 0 ? -1 : se >= 0 ? 1 : T.localeCompare(N);
      }).map(([T, N]) => ({ type: T, models: N }));
    });
    function A(G) {
      if (!G) return "Unknown";
      const S = G / (1024 * 1024);
      return S >= 1024 ? `${(S / 1024).toFixed(1)} GB` : `${S.toFixed(0)} MB`;
    }
    function x(G) {
      _.value = G.hash || G.filename;
    }
    function R(G) {
      n("navigate", "model-index");
    }
    function Y(G) {
      alert(`Download functionality not yet implemented for ${G}`);
    }
    async function F() {
      d.value = !0, v.value = null;
      try {
        const G = await i();
        p.value = G, u.value = [];
        const S = await f();
        m.value = S.environment || "production";
      } catch (G) {
        v.value = G instanceof Error ? G.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return We(F), (G, S) => (s(), o(W, null, [
      w(Ze, null, {
        header: l(() => [
          w(et, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (T) => k.value = !0)
          })
        ]),
        search: l(() => [
          w(Ht, {
            modelValue: y.value,
            "onUpdate:modelValue": S[1] || (S[1] = (T) => y.value = T),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          d.value ? (s(), P(Tt, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (s(), P(Dt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            p.value.length ? (s(), P(ns, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                g(" Total: " + a(p.value.length) + " models • " + a(A(D.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : r("", !0),
            (s(!0), o(W, null, ne(C.value, (T) => (s(), P(Ae, {
              key: T.type,
              title: T.type.toUpperCase(),
              count: T.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(T.models, (N) => (s(), P(Qe, {
                  key: N.hash || N.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...S[4] || (S[4] = [
                    g("📦", -1)
                  ])]),
                  title: l(() => [
                    g(a(N.filename), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(A(N.size)), 1)
                  ]),
                  details: l(() => [
                    w(Ve, {
                      label: "Used by:",
                      value: (N.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    w(Ve, {
                      label: "Path:",
                      value: N.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ie) => x(N)
                    }, {
                      default: l(() => [...S[5] || (S[5] = [
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
              default: l(() => [
                (s(!0), o(W, null, ne($.value, (T) => (s(), P(Qe, {
                  key: T.filename,
                  status: "broken"
                }, {
                  icon: l(() => [...S[6] || (S[6] = [
                    g("⚠", -1)
                  ])]),
                  title: l(() => [
                    g(a(T.filename), 1)
                  ]),
                  subtitle: l(() => [...S[7] || (S[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: l(() => {
                    var N;
                    return [
                      w(Ve, {
                        label: "Required by:",
                        value: ((N = T.workflow_names) == null ? void 0 : N.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: l(() => [
                    w(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (N) => Y(T.filename)
                    }, {
                      default: l(() => [...S[8] || (S[8] = [
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (N) => R(T.filename)
                    }, {
                      default: l(() => [...S[9] || (S[9] = [
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
            !M.value.length && !$.value.length ? (s(), P(kt, {
              key: 2,
              icon: "📭",
              message: y.value ? `No models match '${y.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      w(bt, {
        show: k.value,
        title: "About Environment Models",
        onClose: S[2] || (S[2] = (T) => k.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            S[10] || (S[10] = g(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(m.value) + '"', 1),
            S[11] || (S[11] = g(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: l(() => [
          w(te, {
            variant: "primary",
            onClick: b
          }, {
            default: l(() => [...S[12] || (S[12] = [
              g(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (s(), P(Cs, {
        key: 0,
        identifier: _.value,
        onClose: S[3] || (S[3] = (T) => _.value = null)
      }, null, 8, ["identifier"])) : r("", !0)
    ], 64));
  }
}), Ym = /* @__PURE__ */ ae(qm, [["__scopeId", "data-v-cb4f12b3"]]), Jm = {
  key: 0,
  class: "indexing-progress"
}, Xm = { class: "progress-info" }, Qm = { class: "progress-label" }, Zm = { class: "progress-count" }, ev = { class: "progress-bar" }, tv = { class: "modal-content" }, sv = { class: "modal-header" }, ov = { class: "modal-body" }, nv = { class: "input-group" }, av = { class: "current-path" }, lv = { class: "input-group" }, iv = { class: "modal-footer" }, rv = { class: "modal-content" }, dv = { class: "modal-header" }, cv = { class: "modal-body" }, uv = { class: "input-group" }, mv = { class: "input-group" }, vv = { class: "modal-footer" }, fv = /* @__PURE__ */ oe({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: i,
      getModelsDirectory: f,
      setModelsDirectory: p
    } = Ke(), { addToQueue: u } = os(), m = c, d = h([]), v = h(!1), y = h(!1), k = h(null), _ = h(""), b = h(!1), D = h(null), M = h(!1), $ = h(null), C = h(""), A = h(!1), x = h(!1), R = h(""), Y = h(""), F = h(null), G = O(
      () => d.value.reduce((L, I) => L + (I.size || 0), 0)
    ), S = O(() => {
      if (!_.value.trim()) return d.value;
      const L = _.value.toLowerCase();
      return d.value.filter((I) => {
        const ce = I, Q = I.sha256 || ce.sha256_hash || "";
        return I.filename.toLowerCase().includes(L) || Q.toLowerCase().includes(L);
      });
    }), T = O(() => {
      const L = {};
      for (const ce of S.value) {
        const Q = ce.type || "other";
        L[Q] || (L[Q] = []), L[Q].push(ce);
      }
      const I = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(L).sort(([ce], [Q]) => {
        const be = I.indexOf(ce), Ce = I.indexOf(Q);
        return be >= 0 && Ce >= 0 ? be - Ce : be >= 0 ? -1 : Ce >= 0 ? 1 : ce.localeCompare(Q);
      }).map(([ce, Q]) => ({ type: ce, models: Q }));
    });
    function N(L) {
      if (!L) return "Unknown";
      const I = 1024 * 1024 * 1024, ce = 1024 * 1024;
      return L >= I ? `${(L / I).toFixed(1)} GB` : L >= ce ? `${(L / ce).toFixed(0)} MB` : `${(L / 1024).toFixed(0)} KB`;
    }
    function ie(L) {
      D.value = L.hash || L.filename;
    }
    async function se() {
      y.value = !0, k.value = null;
      try {
        const L = await i();
        await X(), L.changes > 0 && console.log(`Scan complete: ${L.changes} changes detected`);
      } catch (L) {
        k.value = L instanceof Error ? L.message : "Failed to scan models";
      } finally {
        y.value = !1;
      }
    }
    async function J() {
      if (C.value.trim()) {
        A.value = !0, k.value = null;
        try {
          const L = await p(C.value.trim());
          $.value = L.path, M.value = !1, C.value = "", await X(), console.log(`Directory changed: ${L.models_indexed} models indexed`), m("refresh");
        } catch (L) {
          k.value = L instanceof Error ? L.message : "Failed to change directory";
        } finally {
          A.value = !1;
        }
      }
    }
    function ue() {
      if (!R.value.trim() || !Y.value.trim()) return;
      const L = Y.value.split("/").pop() || "model.safetensors";
      u([{
        workflow: "__manual__",
        filename: L,
        url: R.value.trim(),
        targetPath: Y.value.trim()
      }]), R.value = "", Y.value = "", x.value = !1;
    }
    async function X() {
      v.value = !0, k.value = null;
      try {
        d.value = await n();
      } catch (L) {
        k.value = L instanceof Error ? L.message : "Failed to load workspace models";
      } finally {
        v.value = !1;
      }
    }
    async function z() {
      try {
        const L = await f();
        $.value = L.path;
      } catch {
      }
    }
    return We(() => {
      X(), z();
    }), (L, I) => (s(), o(W, null, [
      w(Ze, null, {
        header: l(() => [
          w(et, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: I[2] || (I[2] = (ce) => b.value = !0)
          }, {
            actions: l(() => [
              w(te, {
                variant: "primary",
                size: "sm",
                disabled: y.value,
                onClick: se
              }, {
                default: l(() => [
                  g(a(y.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              w(te, {
                variant: "primary",
                size: "sm",
                onClick: I[0] || (I[0] = (ce) => M.value = !0)
              }, {
                default: l(() => [...I[15] || (I[15] = [
                  g(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              w(te, {
                variant: "primary",
                size: "sm",
                onClick: I[1] || (I[1] = (ce) => x.value = !0)
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
          F.value ? (s(), o("div", Jm, [
            e("div", Xm, [
              e("span", Qm, a(F.value.message), 1),
              e("span", Zm, a(F.value.current) + "/" + a(F.value.total), 1)
            ]),
            e("div", ev, [
              e("div", {
                class: "progress-fill",
                style: Rt({ width: `${F.value.current / F.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : r("", !0),
          w(Ht, {
            modelValue: _.value,
            "onUpdate:modelValue": I[3] || (I[3] = (ce) => _.value = ce),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          v.value || F.value ? (s(), P(Tt, {
            key: 0,
            message: F.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : k.value ? (s(), P(Dt, {
            key: 1,
            message: k.value,
            retry: !0,
            onRetry: X
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            d.value.length ? (s(), P(ns, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                g(" Total: " + a(d.value.length) + " models • " + a(N(G.value)), 1)
              ]),
              _: 1
            })) : r("", !0),
            (s(!0), o(W, null, ne(T.value, (ce) => (s(), P(Ae, {
              key: ce.type,
              title: ce.type.toUpperCase(),
              count: ce.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(ce.models, (Q) => (s(), P(Qe, {
                  key: Q.sha256 || Q.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...I[17] || (I[17] = [
                    g("📦", -1)
                  ])]),
                  title: l(() => [
                    g(a(Q.filename), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(N(Q.size)), 1)
                  ]),
                  details: l(() => [
                    w(Ve, {
                      label: "Hash:",
                      value: Q.hash ? Q.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (be) => ie(Q)
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
            S.value.length ? r("", !0) : (s(), P(kt, {
              key: 1,
              icon: "📭",
              message: _.value ? `No models match '${_.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      w(bt, {
        show: b.value,
        title: "About Workspace Model Index",
        onClose: I[4] || (I[4] = (ce) => b.value = !1)
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
      D.value ? (s(), P(Cs, {
        key: 0,
        identifier: D.value,
        onClose: I[5] || (I[5] = (ce) => D.value = null)
      }, null, 8, ["identifier"])) : r("", !0),
      (s(), P(Ye, { to: "body" }, [
        M.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[9] || (I[9] = Be((ce) => M.value = !1, ["self"]))
        }, [
          e("div", tv, [
            e("div", sv, [
              I[20] || (I[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[6] || (I[6] = (ce) => M.value = !1)
              }, "✕")
            ]),
            e("div", ov, [
              e("div", nv, [
                I[21] || (I[21] = e("label", null, "Current Directory", -1)),
                e("code", av, a($.value || "Not set"), 1)
              ]),
              e("div", lv, [
                I[22] || (I[22] = e("label", null, "New Directory Path", -1)),
                w(wt, {
                  modelValue: C.value,
                  "onUpdate:modelValue": I[7] || (I[7] = (ce) => C.value = ce),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              I[23] || (I[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", iv, [
              w(he, {
                variant: "secondary",
                onClick: I[8] || (I[8] = (ce) => M.value = !1)
              }, {
                default: l(() => [...I[24] || (I[24] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              w(he, {
                variant: "primary",
                disabled: !C.value.trim() || A.value,
                loading: A.value,
                onClick: J
              }, {
                default: l(() => [
                  g(a(A.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : r("", !0)
      ])),
      (s(), P(Ye, { to: "body" }, [
        x.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[14] || (I[14] = Be((ce) => x.value = !1, ["self"]))
        }, [
          e("div", rv, [
            e("div", dv, [
              I[25] || (I[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[10] || (I[10] = (ce) => x.value = !1)
              }, "✕")
            ]),
            e("div", cv, [
              e("div", uv, [
                I[26] || (I[26] = e("label", null, "Download URL", -1)),
                w(wt, {
                  modelValue: R.value,
                  "onUpdate:modelValue": I[11] || (I[11] = (ce) => R.value = ce),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", mv, [
                I[27] || (I[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                w(wt, {
                  modelValue: Y.value,
                  "onUpdate:modelValue": I[12] || (I[12] = (ce) => Y.value = ce),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              I[28] || (I[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", vv, [
              w(he, {
                variant: "secondary",
                onClick: I[13] || (I[13] = (ce) => x.value = !1)
              }, {
                default: l(() => [...I[29] || (I[29] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              w(he, {
                variant: "primary",
                disabled: !R.value.trim() || !Y.value.trim(),
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
}), pv = /* @__PURE__ */ ae(fv, [["__scopeId", "data-v-73b78d84"]]), gv = { class: "node-details" }, hv = { class: "status-row" }, yv = {
  key: 0,
  class: "detail-row"
}, wv = { class: "value" }, kv = { class: "detail-row" }, bv = { class: "value" }, _v = {
  key: 1,
  class: "detail-row"
}, $v = { class: "value mono" }, Cv = {
  key: 2,
  class: "detail-row"
}, xv = ["href"], Sv = {
  key: 3,
  class: "detail-row"
}, Iv = { class: "value mono small" }, Ev = { class: "detail-row" }, Pv = {
  key: 0,
  class: "value"
}, Mv = {
  key: 1,
  class: "workflow-list"
}, Rv = /* @__PURE__ */ oe({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = O(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), p = O(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), u = O(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (m, d) => (s(), P(tt, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (v) => i("close"))
    }, {
      body: l(() => [
        e("div", gv, [
          e("div", hv, [
            d[2] || (d[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: pe(["status-badge", f.value])
            }, a(p.value), 3)
          ]),
          t.node.version ? (s(), o("div", yv, [
            d[3] || (d[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", wv, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : r("", !0),
          e("div", kv, [
            d[4] || (d[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", bv, a(u.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", _v, [
            d[5] || (d[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", $v, a(t.node.registry_id), 1)
          ])) : r("", !0),
          t.node.repository ? (s(), o("div", Cv, [
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
            ], 8, xv)
          ])) : r("", !0),
          t.node.download_url ? (s(), o("div", Sv, [
            d[8] || (d[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", Iv, a(t.node.download_url), 1)
          ])) : r("", !0),
          d[10] || (d[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Ev, [
            d[9] || (d[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", Pv, " Not used in any workflows ")) : (s(), o("div", Mv, [
              (s(!0), o(W, null, ne(t.node.used_in_workflows, (v) => (s(), o("span", {
                key: v,
                class: "workflow-tag"
              }, a(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: l(() => [
        w(he, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (v) => i("close"))
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
}), Tv = /* @__PURE__ */ ae(Rv, [["__scopeId", "data-v-b342f626"]]), Dv = { class: "dialog-message" }, Lv = {
  key: 0,
  class: "dialog-details"
}, zv = {
  key: 1,
  class: "dialog-warning"
}, Uv = /* @__PURE__ */ oe({
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
    return (c, n) => (s(), P(tt, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (i) => c.$emit("cancel"))
    }, {
      body: l(() => [
        e("p", Dv, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", Lv, [
          (s(!0), o(W, null, ne(t.details, (i, f) => (s(), o("div", {
            key: f,
            class: "detail-item"
          }, " • " + a(i), 1))), 128))
        ])) : r("", !0),
        t.warning ? (s(), o("p", zv, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          g(" " + a(t.warning), 1)
        ])) : r("", !0)
      ]),
      footer: l(() => [
        w(he, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (i) => c.$emit("cancel"))
        }, {
          default: l(() => [
            g(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), P(he, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (i) => c.$emit("secondary"))
        }, {
          default: l(() => [
            g(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : r("", !0),
        w(he, {
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
}), qs = /* @__PURE__ */ ae(Uv, [["__scopeId", "data-v-3670b9f5"]]), Nv = { class: "mismatch-warning" }, Ov = { class: "version-mismatch" }, Av = { class: "version-actual" }, Bv = { class: "version-expected" }, Fv = { key: 0 }, Vv = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Wv = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Gv = /* @__PURE__ */ oe({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getNodes: f, trackNodeAsDev: p, installNode: u, uninstallNode: m } = Ke(), d = h({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), v = h(!1), y = h(null), k = h(""), _ = h(!1), b = h(null), D = h(null), M = O(() => {
      if (!k.value.trim()) return d.value.nodes;
      const se = k.value.toLowerCase();
      return d.value.nodes.filter(
        (J) => {
          var ue, X;
          return J.name.toLowerCase().includes(se) || ((ue = J.description) == null ? void 0 : ue.toLowerCase().includes(se)) || ((X = J.repository) == null ? void 0 : X.toLowerCase().includes(se));
        }
      );
    }), $ = O(
      () => M.value.filter((se) => se.installed && se.tracked)
    ), C = O(
      () => M.value.filter((se) => !se.installed && se.tracked)
    ), A = O(
      () => M.value.filter((se) => se.installed && !se.tracked)
    );
    function x(se) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[se] || se;
    }
    const R = O(() => n.versionMismatches.length > 0);
    function Y(se) {
      return !se.used_in_workflows || se.used_in_workflows.length === 0 ? "Not used in any workflows" : se.used_in_workflows.length === 1 ? se.used_in_workflows[0] : `${se.used_in_workflows.length} workflows`;
    }
    function F(se) {
      b.value = se;
    }
    function G() {
      i("open-node-manager");
    }
    function S(se) {
      D.value = {
        title: "Track as Development Node",
        message: `Track "${se}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          D.value = null;
          try {
            v.value = !0;
            const J = await p(se);
            J.status === "success" ? (i("toast", `✓ Node "${se}" tracked as development`, "success"), await ie()) : i("toast", `Failed to track node: ${J.message || "Unknown error"}`, "error");
          } catch (J) {
            i("toast", `Error tracking node: ${J instanceof Error ? J.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function T(se) {
      D.value = {
        title: "Remove Untracked Node",
        message: `Remove "${se}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          D.value = null;
          try {
            v.value = !0;
            const J = await m(se);
            J.status === "success" ? (i("toast", `✓ Node "${se}" removed`, "success"), await ie()) : i("toast", `Failed to remove node: ${J.message || "Unknown error"}`, "error");
          } catch (J) {
            i("toast", `Error removing node: ${J instanceof Error ? J.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function N(se) {
      D.value = {
        title: "Install Missing Node",
        message: `Install "${se}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          D.value = null;
          try {
            v.value = !0;
            const J = await u(se);
            J.status === "success" ? (i("toast", `✓ Node "${se}" installed`, "success"), await ie()) : i("toast", `Failed to install node: ${J.message || "Unknown error"}`, "error");
          } catch (J) {
            i("toast", `Error installing node: ${J instanceof Error ? J.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    async function ie() {
      v.value = !0, y.value = null;
      try {
        d.value = await f();
      } catch (se) {
        y.value = se instanceof Error ? se.message : "Failed to load nodes";
      } finally {
        v.value = !1;
      }
    }
    return We(ie), (se, J) => (s(), o(W, null, [
      w(Ze, null, {
        header: l(() => [
          w(et, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: J[0] || (J[0] = (ue) => _.value = !0)
          }, {
            actions: l(() => [
              w(te, {
                variant: "primary",
                size: "sm",
                onClick: G
              }, {
                default: l(() => [...J[7] || (J[7] = [
                  g(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          w(Ht, {
            modelValue: k.value,
            "onUpdate:modelValue": J[1] || (J[1] = (ue) => k.value = ue),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          v.value ? (s(), P(Tt, {
            key: 0,
            message: "Loading nodes..."
          })) : y.value ? (s(), P(Dt, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: ie
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            d.value.total_count ? (s(), P(ns, {
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
            R.value ? (s(), P(Ae, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: t.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                e("div", Nv, [
                  J[8] || (J[8] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (s(!0), o(W, null, ne(t.versionMismatches, (ue) => (s(), P(Qe, {
                  key: ue.name,
                  status: "warning"
                }, {
                  icon: l(() => [...J[9] || (J[9] = [
                    g("⚠", -1)
                  ])]),
                  title: l(() => [
                    g(a(ue.name), 1)
                  ]),
                  subtitle: l(() => [
                    e("span", Ov, [
                      e("span", Av, a(ue.actual), 1),
                      J[10] || (J[10] = e("span", { class: "version-arrow" }, "→", -1)),
                      e("span", Bv, a(ue.expected), 1)
                    ])
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "warning",
                      size: "sm",
                      onClick: J[2] || (J[2] = (X) => i("repair-environment"))
                    }, {
                      default: l(() => [...J[11] || (J[11] = [
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
            A.value.length ? (s(), P(Ae, {
              key: 2,
              title: "UNTRACKED",
              count: A.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(A.value, (ue) => (s(), P(Qe, {
                  key: ue.name,
                  status: "warning"
                }, {
                  icon: l(() => [...J[12] || (J[12] = [
                    g("?", -1)
                  ])]),
                  title: l(() => [
                    g(a(ue.name), 1)
                  ]),
                  subtitle: l(() => [...J[13] || (J[13] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: l(() => [
                    w(Ve, {
                      label: "Used by:",
                      value: Y(ue)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => F(ue)
                    }, {
                      default: l(() => [...J[14] || (J[14] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (X) => S(ue.name)
                    }, {
                      default: l(() => [...J[15] || (J[15] = [
                        g(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(te, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (X) => T(ue.name)
                    }, {
                      default: l(() => [...J[16] || (J[16] = [
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
              default: l(() => [
                (s(!0), o(W, null, ne($.value, (ue) => (s(), P(Qe, {
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
                    ue.version ? (s(), o("span", Fv, a(ue.source === "development" ? "" : "v") + a(ue.version), 1)) : (s(), o("span", Vv, "version unknown")),
                    e("span", Wv, " • " + a(x(ue.source)), 1)
                  ]),
                  details: l(() => [
                    w(Ve, {
                      label: "Used by:",
                      value: Y(ue)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => F(ue)
                    }, {
                      default: l(() => [...J[17] || (J[17] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: G
                    }, {
                      default: l(() => [...J[18] || (J[18] = [
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
            C.value.length ? (s(), P(Ae, {
              key: 4,
              title: "MISSING",
              count: C.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(C.value, (ue) => (s(), P(Qe, {
                  key: ue.name,
                  status: "missing"
                }, {
                  icon: l(() => [...J[19] || (J[19] = [
                    g("!", -1)
                  ])]),
                  title: l(() => [
                    g(a(ue.name), 1)
                  ]),
                  subtitle: l(() => [...J[20] || (J[20] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: l(() => [
                    w(Ve, {
                      label: "Required by:",
                      value: Y(ue)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => F(ue)
                    }, {
                      default: l(() => [...J[21] || (J[21] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (X) => N(ue.name)
                    }, {
                      default: l(() => [...J[22] || (J[22] = [
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
            !$.value.length && !C.value.length && !A.value.length ? (s(), P(kt, {
              key: 5,
              icon: "📭",
              message: k.value ? `No nodes match '${k.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      w(bt, {
        show: _.value,
        title: "About Custom Nodes",
        onClose: J[4] || (J[4] = (ue) => _.value = !1)
      }, {
        content: l(() => [...J[23] || (J[23] = [
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
          w(te, {
            variant: "primary",
            onClick: J[3] || (J[3] = (ue) => _.value = !1)
          }, {
            default: l(() => [...J[24] || (J[24] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b.value ? (s(), P(Tv, {
        key: 0,
        node: b.value,
        onClose: J[5] || (J[5] = (ue) => b.value = null)
      }, null, 8, ["node"])) : r("", !0),
      D.value ? (s(), P(qs, {
        key: 1,
        title: D.value.title,
        message: D.value.message,
        warning: D.value.warning,
        "confirm-label": D.value.confirmLabel,
        destructive: D.value.destructive,
        onConfirm: D.value.onConfirm,
        onCancel: J[6] || (J[6] = (ue) => D.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : r("", !0)
    ], 64));
  }
}), jv = /* @__PURE__ */ ae(Gv, [["__scopeId", "data-v-1555a802"]]);
function Ys(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const Hv = { class: "remote-url-display" }, Kv = ["title"], qv = ["title"], Yv = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Jv = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Xv = /* @__PURE__ */ oe({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = h(!1), i = O(() => {
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
    return (p, u) => (s(), o("div", Hv, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(i.value), 9, Kv),
      e("button", {
        class: pe(["copy-btn", { copied: n.value }]),
        onClick: f,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", Jv, [...u[1] || (u[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", Yv, [...u[0] || (u[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, qv)
    ]));
  }
}), Qv = /* @__PURE__ */ ae(Xv, [["__scopeId", "data-v-7768a58d"]]), Zv = { class: "remote-title" }, ef = {
  key: 0,
  class: "default-badge"
}, tf = {
  key: 1,
  class: "sync-badge"
}, sf = {
  key: 0,
  class: "ahead"
}, of = {
  key: 1,
  class: "behind"
}, nf = {
  key: 1,
  class: "synced"
}, af = ["href"], lf = {
  key: 1,
  class: "remote-url-text"
}, rf = /* @__PURE__ */ oe({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const c = t, n = O(() => c.fetchingRemote === c.remote.name), i = O(() => c.remote.is_default), f = O(() => c.syncStatus && c.syncStatus.behind > 0), p = O(() => c.syncStatus && c.syncStatus.ahead > 0), u = O(() => c.remote.push_url !== c.remote.fetch_url), m = O(() => {
      const v = c.remote.fetch_url, y = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return y ? `https://${y[1]}/${y[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), d = O(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, y) => (s(), P(Qe, {
      status: i.value ? "synced" : void 0
    }, Bt({
      icon: l(() => [
        g(a(i.value ? "🔗" : "🌐"), 1)
      ]),
      title: l(() => [
        e("div", Zv, [
          e("span", null, a(t.remote.name), 1),
          i.value ? (s(), o("span", ef, "DEFAULT")) : r("", !0),
          t.syncStatus ? (s(), o("span", tf, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(W, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", sf, "↑" + a(t.syncStatus.ahead), 1)) : r("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", of, "↓" + a(t.syncStatus.behind), 1)) : r("", !0)
            ], 64)) : (s(), o("span", nf, "✓ synced"))
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
          onClick: y[0] || (y[0] = Be(() => {
          }, ["stop"]))
        }, a(d.value), 9, af)) : (s(), o("span", lf, a(d.value), 1))
      ]),
      actions: l(() => [
        w(te, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: y[1] || (y[1] = (k) => v.$emit("fetch", t.remote.name))
        }, {
          default: l(() => [...y[6] || (y[6] = [
            g(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        w(te, {
          variant: f.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: y[2] || (y[2] = (k) => v.$emit("pull", t.remote.name))
        }, {
          default: l(() => [
            g(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        w(te, {
          variant: p.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: y[3] || (y[3] = (k) => v.$emit("push", t.remote.name))
        }, {
          default: l(() => [
            g(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        w(te, {
          variant: "secondary",
          size: "xs",
          onClick: y[4] || (y[4] = (k) => v.$emit("edit", t.remote.name))
        }, {
          default: l(() => [...y[7] || (y[7] = [
            g(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        i.value ? r("", !0) : (s(), P(te, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: y[5] || (y[5] = (k) => v.$emit("remove", t.remote.name))
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
          t.remote.push_url !== t.remote.fetch_url ? (s(), P(Ve, {
            key: 0,
            label: "Push URL:"
          }, {
            default: l(() => [
              w(Qv, {
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
}), df = /* @__PURE__ */ ae(rf, [["__scopeId", "data-v-8310f3a8"]]), cf = ["for"], uf = {
  key: 0,
  class: "base-form-field-required"
}, mf = { class: "base-form-field-input" }, vf = {
  key: 1,
  class: "base-form-field-error"
}, ff = {
  key: 2,
  class: "base-form-field-hint"
}, pf = /* @__PURE__ */ oe({
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
    const c = t, n = O(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, f) => (s(), o("div", {
      class: pe(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        g(a(t.label) + " ", 1),
        t.required ? (s(), o("span", uf, "*")) : r("", !0)
      ], 8, cf)) : r("", !0),
      e("div", mf, [
        Re(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", vf, a(t.error), 1)) : t.hint ? (s(), o("span", ff, a(t.hint), 1)) : r("", !0)
    ], 2));
  }
}), vs = /* @__PURE__ */ ae(pf, [["__scopeId", "data-v-9a1cf296"]]), gf = { class: "remote-form" }, hf = { class: "form-header" }, yf = { class: "form-body" }, wf = {
  key: 0,
  class: "form-error"
}, kf = { class: "form-actions" }, bf = /* @__PURE__ */ oe({
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
    }), p = h(!1), u = h(null);
    St(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      f.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const m = O(() => f.value.name.trim() !== "" && f.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!m.value || p.value)) {
        u.value = null, p.value = !0;
        try {
          i("submit", f.value);
        } catch (v) {
          u.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          p.value = !1;
        }
      }
    }
    return (v, y) => (s(), o("div", gf, [
      e("div", hf, [
        w(mt, null, {
          default: l(() => [
            g(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", yf, [
        w(vs, {
          label: "Remote Name",
          required: ""
        }, {
          default: l(() => [
            w(wt, {
              modelValue: f.value.name,
              "onUpdate:modelValue": y[0] || (y[0] = (k) => f.value.name = k),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        w(vs, {
          label: "Fetch URL",
          required: ""
        }, {
          default: l(() => [
            w(wt, {
              modelValue: f.value.fetchUrl,
              "onUpdate:modelValue": y[1] || (y[1] = (k) => f.value.fetchUrl = k),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        w(vs, { label: "Push URL (optional)" }, {
          default: l(() => [
            w(wt, {
              modelValue: f.value.pushUrl,
              "onUpdate:modelValue": y[2] || (y[2] = (k) => f.value.pushUrl = k),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (s(), o("div", wf, a(u.value), 1)) : r("", !0)
      ]),
      e("div", kf, [
        w(te, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: p.value,
          onClick: d
        }, {
          default: l(() => [
            g(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        w(te, {
          variant: "ghost",
          size: "md",
          onClick: y[3] || (y[3] = (k) => v.$emit("cancel"))
        }, {
          default: l(() => [...y[4] || (y[4] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), _f = /* @__PURE__ */ ae(bf, [["__scopeId", "data-v-56021b18"]]), $f = { class: "conflict-summary-box" }, Cf = { class: "summary-header" }, xf = { class: "summary-text" }, Sf = { key: 0 }, If = {
  key: 1,
  class: "all-resolved"
}, Ef = { class: "summary-progress" }, Pf = { class: "progress-bar" }, Mf = { class: "progress-text" }, Rf = /* @__PURE__ */ oe({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const c = t, n = O(
      () => c.conflictCount > 0 ? c.resolvedCount / c.conflictCount * 100 : 0
    );
    return (i, f) => (s(), o("div", $f, [
      e("div", Cf, [
        f[0] || (f[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", xf, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (s(), o("p", Sf, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (s(), o("p", If, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", Ef, [
        e("div", Pf, [
          e("div", {
            class: "progress-fill",
            style: Rt({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", Mf, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), Tf = /* @__PURE__ */ ae(Rf, [["__scopeId", "data-v-4e9e6cc9"]]), Df = { class: "modal-header" }, Lf = { class: "modal-title" }, zf = { class: "modal-body" }, Uf = {
  key: 0,
  class: "error-box"
}, Nf = {
  key: 0,
  class: "error-hint"
}, Of = {
  key: 1,
  class: "loading-state"
}, Af = { class: "commit-summary" }, Bf = {
  key: 0,
  class: "changes-section"
}, Ff = {
  key: 0,
  class: "change-group",
  open: ""
}, Vf = { class: "change-count" }, Wf = { class: "change-list" }, Gf = {
  key: 0,
  class: "conflict-badge"
}, jf = {
  key: 1,
  class: "change-group"
}, Hf = { class: "change-count" }, Kf = { class: "change-list" }, qf = {
  key: 2,
  class: "change-group"
}, Yf = { class: "change-count" }, Jf = { class: "change-list" }, Xf = {
  key: 2,
  class: "strategy-section"
}, Qf = { class: "radio-group" }, Zf = { class: "radio-option" }, ep = { class: "radio-option" }, tp = { class: "radio-option" }, sp = {
  key: 3,
  class: "up-to-date"
}, op = { class: "modal-actions" }, Us = "comfygit.pullModelStrategy", np = /* @__PURE__ */ oe({
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
    const n = t, i = c, f = h(localStorage.getItem(Us) || "skip");
    St(f, ($) => {
      localStorage.setItem(Us, $);
    });
    const p = O(() => {
      var $;
      return (($ = n.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), u = O(() => {
      if (!n.preview) return 0;
      const $ = n.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), m = O(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), d = O(() => {
      var $;
      return u.value > 0 || m.value > 0 || ((($ = n.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), v = O(() => n.preview && Ys(n.preview) ? n.preview : null), y = O(() => {
      var $;
      return (($ = v.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), k = O(() => {
      var $;
      return (($ = n.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), _ = O(
      () => y.value > 0 && k.value === y.value
    ), b = O(() => !(!n.preview || n.preview.has_uncommitted_changes || v.value && !_.value));
    function D($) {
      if (!v.value) return !1;
      const C = $.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((A) => A.name === C);
    }
    function M($) {
      const C = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      i("pull", { modelStrategy: f.value, force: $, resolutions: C });
    }
    return ($, C) => {
      var A, x;
      return s(), P(Ye, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[11] || (C[11] = (R) => $.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: C[10] || (C[10] = Be(() => {
            }, ["stop"]))
          }, [
            e("div", Df, [
              e("h3", Lf, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (R) => $.$emit("close"))
              }, "✕")
            ]),
            e("div", zf, [
              t.error ? (s(), o("div", Uf, [
                C[13] || (C[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  C[12] || (C[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  p.value ? (s(), o("p", Nf, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : r("", !0)
                ])
              ])) : t.loading ? (s(), o("div", Of, [...C[14] || (C[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                g(" Loading preview... ", -1)
              ])])) : (A = t.preview) != null && A.has_uncommitted_changes ? (s(), o(W, { key: 2 }, [
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
                e("div", Af, [
                  C[17] || (C[17] = e("span", { class: "icon" }, "📥", -1)),
                  g(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                d.value ? (s(), o("div", Bf, [
                  C[21] || (C[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  u.value > 0 ? (s(), o("details", Ff, [
                    e("summary", null, [
                      C[18] || (C[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", Vf, a(u.value) + " changes", 1)
                    ]),
                    e("div", Wf, [
                      (s(!0), o(W, null, ne(t.preview.changes.workflows.added, (R) => (s(), o("div", {
                        key: "a-" + R,
                        class: "change-item add"
                      }, " + " + a(R), 1))), 128)),
                      (s(!0), o(W, null, ne(t.preview.changes.workflows.modified, (R) => (s(), o("div", {
                        key: "m-" + R,
                        class: "change-item modify"
                      }, [
                        g(" ~ " + a(R) + " ", 1),
                        D(R) ? (s(), o("span", Gf, "CONFLICT")) : r("", !0)
                      ]))), 128)),
                      (s(!0), o(W, null, ne(t.preview.changes.workflows.deleted, (R) => (s(), o("div", {
                        key: "d-" + R,
                        class: "change-item delete"
                      }, " - " + a(R), 1))), 128))
                    ])
                  ])) : r("", !0),
                  m.value > 0 ? (s(), o("details", jf, [
                    e("summary", null, [
                      C[19] || (C[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", Hf, a(m.value) + " to install", 1)
                    ]),
                    e("div", Kf, [
                      (s(!0), o(W, null, ne(t.preview.changes.nodes.to_install, (R) => (s(), o("div", {
                        key: R,
                        class: "change-item add"
                      }, " + " + a(R), 1))), 128))
                    ])
                  ])) : r("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", qf, [
                    e("summary", null, [
                      C[20] || (C[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", Yf, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", Jf, [
                      (s(!0), o(W, null, ne(t.preview.changes.models.referenced, (R) => (s(), o("div", {
                        key: R,
                        class: "change-item"
                      }, a(R), 1))), 128))
                    ])
                  ])) : r("", !0)
                ])) : r("", !0),
                v.value ? (s(), P(Tf, {
                  key: 1,
                  "conflict-count": y.value,
                  "resolved-count": k.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : r("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", Xf, [
                  C[26] || (C[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", Qf, [
                    e("label", Zf, [
                      ze(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[1] || (C[1] = (R) => f.value = R),
                        value: "all"
                      }, null, 512), [
                        [Nt, f.value]
                      ]),
                      C[22] || (C[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", ep, [
                      ze(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[2] || (C[2] = (R) => f.value = R),
                        value: "required"
                      }, null, 512), [
                        [Nt, f.value]
                      ]),
                      C[23] || (C[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", tp, [
                      ze(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[3] || (C[3] = (R) => f.value = R),
                        value: "skip"
                      }, null, 512), [
                        [Nt, f.value]
                      ]),
                      C[24] || (C[24] = e("span", null, "Skip model downloads", -1)),
                      C[25] || (C[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  C[27] || (C[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : r("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", sp, [
                  C[28] || (C[28] = e("span", { class: "icon" }, "✓", -1)),
                  g(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : r("", !0)
              ], 64)) : r("", !0)
            ]),
            e("div", op, [
              w(te, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (R) => $.$emit("close"))
              }, {
                default: l(() => [...C[29] || (C[29] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(W, { key: 0 }, [
                w(te, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: C[5] || (C[5] = (R) => M(!1))
                }, {
                  default: l(() => [...C[30] || (C[30] = [
                    g(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                w(te, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: C[6] || (C[6] = (R) => M(!0))
                }, {
                  default: l(() => [...C[31] || (C[31] = [
                    g(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (x = t.preview) != null && x.has_uncommitted_changes ? (s(), P(te, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: C[7] || (C[7] = (R) => M(!0))
              }, {
                default: l(() => [...C[32] || (C[32] = [
                  g(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(W, { key: 2 }, [
                v.value && !_.value ? (s(), P(te, {
                  key: 0,
                  variant: "primary",
                  onClick: C[8] || (C[8] = (R) => i("openConflictResolution"))
                }, {
                  default: l(() => [
                    g(" Resolve Conflicts (" + a(k.value) + "/" + a(y.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), P(te, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !b.value,
                  onClick: C[9] || (C[9] = (R) => M(!1))
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
}), ap = /* @__PURE__ */ ae(np, [["__scopeId", "data-v-300c7b2f"]]), lp = { class: "modal-header" }, ip = { class: "modal-title" }, rp = { class: "modal-body" }, dp = {
  key: 0,
  class: "loading-state"
}, cp = {
  key: 1,
  class: "warning-box"
}, up = {
  key: 0,
  class: "commits-section"
}, mp = { class: "commit-list" }, vp = { class: "commit-hash" }, fp = { class: "commit-message" }, pp = { class: "commit-date" }, gp = { class: "force-option" }, hp = { class: "checkbox-option" }, yp = { class: "commit-summary" }, wp = {
  key: 0,
  class: "commits-section"
}, kp = { class: "commit-list" }, bp = { class: "commit-hash" }, _p = { class: "commit-message" }, $p = { class: "commit-date" }, Cp = {
  key: 1,
  class: "up-to-date"
}, xp = { class: "modal-actions" }, Sp = /* @__PURE__ */ oe({
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
    function f(p) {
      n("push", { force: p });
    }
    return (p, u) => {
      var m, d, v;
      return s(), P(Ye, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: u[7] || (u[7] = (y) => p.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: u[6] || (u[6] = Be(() => {
            }, ["stop"]))
          }, [
            e("div", lp, [
              e("h3", ip, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: u[0] || (u[0] = (y) => p.$emit("close"))
              }, "✕")
            ]),
            e("div", rp, [
              t.loading ? (s(), o("div", dp, [...u[8] || (u[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                g(" Loading preview... ", -1)
              ])])) : (m = t.preview) != null && m.has_uncommitted_changes ? (s(), o("div", cp, [...u[9] || (u[9] = [
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
                t.preview.commits_ahead > 0 ? (s(), o("div", up, [
                  u[10] || (u[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", mp, [
                    (s(!0), o(W, null, ne(t.preview.commits, (y) => (s(), o("div", {
                      key: y.hash,
                      class: "commit-item"
                    }, [
                      e("span", vp, a(y.short_hash || y.hash.slice(0, 7)), 1),
                      e("span", fp, a(y.message), 1),
                      e("span", pp, a(y.date_relative || y.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                e("div", gp, [
                  e("label", hp, [
                    ze(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": u[1] || (u[1] = (y) => i.value = y)
                    }, null, 512), [
                      [is, i.value]
                    ]),
                    u[11] || (u[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  u[12] || (u[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(W, { key: 3 }, [
                e("div", yp, [
                  u[14] || (u[14] = e("span", { class: "icon" }, "📤", -1)),
                  g(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", wp, [
                  u[15] || (u[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", kp, [
                    (s(!0), o(W, null, ne(t.preview.commits, (y) => (s(), o("div", {
                      key: y.hash,
                      class: "commit-item"
                    }, [
                      e("span", bp, a(y.short_hash || y.hash.slice(0, 7)), 1),
                      e("span", _p, a(y.message), 1),
                      e("span", $p, a(y.date_relative || y.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", Cp, [
                  u[16] || (u[16] = e("span", { class: "icon" }, "✓", -1)),
                  g(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : r("", !0)
            ]),
            e("div", xp, [
              w(te, {
                variant: "secondary",
                onClick: u[2] || (u[2] = (y) => p.$emit("close"))
              }, {
                default: l(() => [...u[17] || (u[17] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (v = t.preview) != null && v.remote_has_new_commits ? (s(), o(W, { key: 0 }, [
                w(te, {
                  variant: "secondary",
                  onClick: u[3] || (u[3] = (y) => p.$emit("pull-first"))
                }, {
                  default: l(() => [...u[18] || (u[18] = [
                    g(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                w(te, {
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
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), P(te, {
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
}), Ip = /* @__PURE__ */ ae(Sp, [["__scopeId", "data-v-bc6ded53"]]), Ep = { class: "resolution-choice-group" }, Pp = ["disabled"], Mp = ["disabled"], Rp = /* @__PURE__ */ oe({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("div", Ep, [
      e("button", {
        class: pe(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (i) => c.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, Pp),
      e("button", {
        class: pe(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (i) => c.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, Mp)
    ]));
  }
}), Tp = /* @__PURE__ */ ae(Rp, [["__scopeId", "data-v-985715ed"]]), Dp = { class: "conflict-header" }, Lp = { class: "conflict-info" }, zp = { class: "workflow-name" }, Up = { class: "conflict-description" }, Np = {
  key: 0,
  class: "resolved-badge"
}, Op = { class: "resolved-text" }, Ap = { class: "conflict-hashes" }, Bp = { class: "hash-item" }, Fp = { class: "hash-item" }, Vp = { class: "conflict-actions" }, Wp = /* @__PURE__ */ oe({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = h(n.resolution);
    St(() => n.resolution, (d) => {
      f.value = d;
    }), St(f, (d) => {
      d && i("resolve", d);
    });
    const p = O(() => f.value !== null), u = O(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), m = O(() => {
      switch (f.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (d, v) => {
      var y, k;
      return s(), o("div", {
        class: pe(["conflict-item", { resolved: p.value }])
      }, [
        e("div", Dp, [
          v[2] || (v[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", Lp, [
            e("code", zp, a(t.conflict.name) + ".json", 1),
            e("div", Up, a(u.value), 1)
          ]),
          p.value ? (s(), o("div", Np, [
            v[1] || (v[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", Op, a(m.value), 1)
          ])) : r("", !0)
        ]),
        e("div", Ap, [
          e("span", Bp, [
            v[3] || (v[3] = g("Your: ", -1)),
            e("code", null, a(((y = t.conflict.base_hash) == null ? void 0 : y.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", Fp, [
            v[4] || (v[4] = g("Theirs: ", -1)),
            e("code", null, a(((k = t.conflict.target_hash) == null ? void 0 : k.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", Vp, [
          w(Tp, {
            modelValue: f.value,
            "onUpdate:modelValue": v[0] || (v[0] = (_) => f.value = _),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), Gp = /* @__PURE__ */ ae(Wp, [["__scopeId", "data-v-506d3bbf"]]), jp = { class: "resolution-content" }, Hp = {
  key: 0,
  class: "error-box"
}, Kp = { class: "resolution-header" }, qp = { class: "header-stats" }, Yp = { class: "stat" }, Jp = { class: "stat-value" }, Xp = { class: "stat resolved" }, Qp = { class: "stat-value" }, Zp = {
  key: 0,
  class: "stat pending"
}, eg = { class: "stat-value" }, tg = { class: "conflicts-list" }, sg = {
  key: 1,
  class: "all-resolved-message"
}, og = /* @__PURE__ */ oe({
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
    const n = t, i = c, f = O(() => n.resolutions.size), p = O(() => n.workflowConflicts.length - f.value), u = O(() => f.value === n.workflowConflicts.length), m = O(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(_) {
      const b = n.resolutions.get(_);
      return (b == null ? void 0 : b.resolution) ?? null;
    }
    function v(_, b) {
      i("resolve", _, b);
    }
    function y() {
      i("close");
    }
    function k() {
      i("apply");
    }
    return (_, b) => (s(), P(tt, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: y
    }, {
      body: l(() => [
        e("div", jp, [
          t.error ? (s(), o("div", Hp, [
            b[1] || (b[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              b[0] || (b[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : r("", !0),
          e("div", Kp, [
            e("div", qp, [
              e("div", Yp, [
                e("span", Jp, a(t.workflowConflicts.length), 1),
                b[2] || (b[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", Xp, [
                e("span", Qp, a(f.value), 1),
                b[3] || (b[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              p.value > 0 ? (s(), o("div", Zp, [
                e("span", eg, a(p.value), 1),
                b[4] || (b[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : r("", !0)
            ]),
            b[5] || (b[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", tg, [
            (s(!0), o(W, null, ne(t.workflowConflicts, (D) => (s(), P(Gp, {
              key: D.name,
              conflict: D,
              resolution: d(D.name),
              onResolve: (M) => v(D.name, M)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          u.value ? (s(), o("div", sg, [
            b[6] || (b[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(m.value) + '" to continue.', 1)
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        w(he, {
          variant: "secondary",
          onClick: y
        }, {
          default: l(() => [...b[7] || (b[7] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b[8] || (b[8] = e("div", { class: "footer-spacer" }, null, -1)),
        w(he, {
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
}), ng = /* @__PURE__ */ ae(og, [["__scopeId", "data-v-c58d150d"]]), ag = { class: "node-conflict-item" }, lg = { class: "node-header" }, ig = { class: "node-name" }, rg = { class: "node-id" }, dg = { class: "version-comparison" }, cg = { class: "version yours" }, ug = { class: "version theirs" }, mg = { class: "chosen-version" }, vg = { class: "chosen" }, fg = { class: "chosen-reason" }, pg = { class: "affected-workflows" }, gg = { class: "wf-source" }, hg = { class: "wf-version" }, yg = /* @__PURE__ */ oe({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", ag, [
      e("div", lg, [
        e("code", ig, a(t.conflict.node_name), 1),
        e("span", rg, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", dg, [
        e("div", cg, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", ug, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", mg, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", vg, a(t.conflict.chosen_version), 1),
        e("span", fg, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", pg, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (s(!0), o(W, null, ne(t.conflict.affected_workflows, (i) => (s(), o("li", {
            key: i.name
          }, [
            e("code", null, a(i.name), 1),
            e("span", gg, "(" + a(i.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", hg, "needs v" + a(i.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), wg = /* @__PURE__ */ ae(yg, [["__scopeId", "data-v-8b626725"]]), kg = { class: "validation-content" }, bg = {
  key: 0,
  class: "compatible-message"
}, _g = { class: "conflicts-list" }, $g = {
  key: 2,
  class: "warnings-section"
}, Cg = /* @__PURE__ */ oe({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = O(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (p, u) => (s(), P(tt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: u[3] || (u[3] = (m) => i("cancel"))
    }, {
      body: l(() => [
        e("div", kg, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (s(), o("div", bg, [
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
            e("div", _g, [
              (s(!0), o(W, null, ne(t.validation.node_conflicts, (m) => (s(), P(wg, {
                key: m.node_id,
                conflict: m
              }, null, 8, ["conflict"]))), 128))
            ]),
            u[7] || (u[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : r("", !0),
          t.validation.warnings.length > 0 ? (s(), o("div", $g, [
            u[8] || (u[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (s(!0), o(W, null, ne(t.validation.warnings, (m, d) => (s(), o("li", { key: d }, a(m), 1))), 128))
            ])
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        w(he, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (m) => i("cancel"))
        }, {
          default: l(() => [...u[9] || (u[9] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u[11] || (u[11] = e("div", { class: "footer-spacer" }, null, -1)),
        w(he, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (m) => i("goBack"))
        }, {
          default: l(() => [...u[10] || (u[10] = [
            g(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        w(he, {
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
}), xg = /* @__PURE__ */ ae(Cg, [["__scopeId", "data-v-fefd26ed"]]), Sg = { key: 0 }, Ig = /* @__PURE__ */ oe({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: c }) {
    const n = c, {
      getRemotes: i,
      addRemote: f,
      removeRemote: p,
      updateRemoteUrl: u,
      fetchRemote: m,
      getRemoteSyncStatus: d,
      getPullPreview: v,
      pullFromRemote: y,
      getPushPreview: k,
      pushToRemote: _,
      validateMerge: b
    } = Ke(), D = h([]), M = h(null), $ = h({}), C = h(!1), A = h(null), x = h(""), R = h(!1), Y = h(null), F = h(!1), G = h("add"), S = h({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), T = O(() => {
      if (!x.value.trim()) return D.value;
      const V = x.value.toLowerCase();
      return D.value.filter(
        (ee) => ee.name.toLowerCase().includes(V) || ee.fetch_url.toLowerCase().includes(V) || ee.push_url.toLowerCase().includes(V)
      );
    });
    async function N() {
      C.value = !0, A.value = null;
      try {
        const V = await i();
        D.value = V.remotes, M.value = V.current_branch_tracking || null, await Promise.all(
          V.remotes.map(async (ee) => {
            const ke = await d(ee.name);
            ke && ($.value[ee.name] = ke);
          })
        );
      } catch (V) {
        A.value = V instanceof Error ? V.message : "Failed to load remotes";
      } finally {
        C.value = !1;
      }
    }
    function ie() {
      G.value = "add", S.value = { name: "", fetchUrl: "", pushUrl: "" }, F.value = !0;
    }
    function se(V) {
      const ee = D.value.find((ke) => ke.name === V);
      ee && (G.value = "edit", S.value = {
        name: ee.name,
        fetchUrl: ee.fetch_url,
        pushUrl: ee.push_url
      }, F.value = !0);
    }
    async function J(V) {
      try {
        G.value === "add" ? await f(V.name, V.fetchUrl) : await u(V.name, V.fetchUrl, V.pushUrl || void 0), F.value = !1, await N();
      } catch (ee) {
        A.value = ee instanceof Error ? ee.message : "Operation failed";
      }
    }
    function ue() {
      F.value = !1, S.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function X(V) {
      Y.value = V;
      try {
        await m(V);
        const ee = await d(V);
        ee && ($.value[V] = ee), n("toast", `✓ Fetched from ${V}`, "success");
      } catch (ee) {
        n("toast", ee instanceof Error ? ee.message : "Fetch failed", "error");
      } finally {
        Y.value = null;
      }
    }
    async function z(V) {
      if (confirm(`Remove remote "${V}"?`))
        try {
          await p(V), await N();
        } catch (ee) {
          A.value = ee instanceof Error ? ee.message : "Failed to remove remote";
        }
    }
    function L() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const I = h("idle"), ce = O(() => I.value === "pull_preview"), Q = O(
      () => I.value === "resolving" || I.value === "validating"
    ), be = O(
      () => I.value === "validation_review" || I.value === "executing"
    ), Ce = h(!1), Te = h(null), Oe = h(!1), re = h(null), ye = h(!1), Pe = h(null), Z = h(null), le = h(/* @__PURE__ */ new Map()), we = h(null), xe = h(null), Je = O(() => Pe.value && Ys(Pe.value) ? Pe.value : null);
    async function at(V) {
      re.value = V, I.value = "pull_preview", ye.value = !0, Pe.value = null, Z.value = null;
      try {
        Pe.value = await v(V);
      } catch (ee) {
        Z.value = ee instanceof Error ? ee.message : "Failed to load pull preview";
      } finally {
        ye.value = !1;
      }
    }
    function Me() {
      I.value = "idle", Pe.value = null, Z.value = null, re.value = null;
    }
    async function st(V) {
      if (!re.value) return;
      I.value = "executing", Z.value = null;
      const ee = re.value;
      try {
        const ke = await y(ee, V);
        if (ke.rolled_back) {
          Z.value = `Pull failed and was rolled back: ${ke.error || "Unknown error"}`, I.value = "pull_preview";
          return;
        }
        Ue(), I.value = "idle", n("toast", `✓ Pulled from ${ee}`, "success"), await N();
      } catch (ke) {
        Z.value = ke instanceof Error ? ke.message : "Pull failed", I.value = "pull_preview";
      }
    }
    function qe() {
      Je.value && (I.value = "resolving", xe.value = null);
    }
    function Fe(V, ee) {
      le.value.set(V, { name: V, resolution: ee });
    }
    function ct() {
      I.value = "pull_preview";
    }
    async function _e() {
      I.value = "validating", xe.value = null;
      try {
        const V = Array.from(le.value.values());
        we.value = await b(re.value, V), I.value = "validation_review";
      } catch (V) {
        xe.value = V instanceof Error ? V.message : "Validation failed", I.value = "resolving";
      }
    }
    async function He() {
      I.value = "executing";
      const V = re.value;
      try {
        const ee = Array.from(le.value.values()), ke = await y(V, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: ee
        });
        if (ke.rolled_back) {
          Z.value = `Pull failed and was rolled back: ${ke.error || "Unknown error"}`, I.value = "pull_preview";
          return;
        }
        Ue(), I.value = "idle", n("toast", `✓ Pulled from ${V}`, "success"), await N();
      } catch (ee) {
        Z.value = ee instanceof Error ? ee.message : "Pull failed", I.value = "validation_review";
      }
    }
    function lt() {
      I.value = "resolving";
    }
    function ot() {
      Ue(), I.value = "idle";
    }
    function Ue() {
      le.value.clear(), we.value = null, xe.value = null, Z.value = null, Pe.value = null, re.value = null;
    }
    async function me(V) {
      re.value = V, Ce.value = !0, ye.value = !0, Te.value = null;
      try {
        Te.value = await k(V);
      } catch (ee) {
        A.value = ee instanceof Error ? ee.message : "Failed to load push preview";
      } finally {
        ye.value = !1;
      }
    }
    function K() {
      Ce.value = !1, Te.value = null, re.value = null;
    }
    async function q(V) {
      if (!re.value) return;
      Oe.value = !0;
      const ee = re.value;
      try {
        await _(ee, V), K(), n("toast", `✓ Pushed to ${ee}`, "success"), await N();
      } catch (ke) {
        n("toast", ke instanceof Error ? ke.message : "Push failed", "error");
      } finally {
        Oe.value = !1;
      }
    }
    function E() {
      const V = re.value;
      K(), V && at(V);
    }
    return We(N), (V, ee) => (s(), o(W, null, [
      w(Ze, null, {
        header: l(() => [
          w(et, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: ee[0] || (ee[0] = (ke) => R.value = !0)
          }, {
            actions: l(() => [
              F.value ? r("", !0) : (s(), P(te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: ie
              }, {
                default: l(() => [...ee[3] || (ee[3] = [
                  g(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          F.value ? r("", !0) : (s(), P(Ht, {
            key: 0,
            modelValue: x.value,
            "onUpdate:modelValue": ee[1] || (ee[1] = (ke) => x.value = ke),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: l(() => [
          C.value ? (s(), P(Tt, {
            key: 0,
            message: "Loading remotes..."
          })) : A.value ? (s(), P(Dt, {
            key: 1,
            message: A.value,
            retry: !0,
            onRetry: N
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            F.value ? (s(), P(_f, {
              key: 0,
              mode: G.value,
              "remote-name": S.value.name,
              "fetch-url": S.value.fetchUrl,
              "push-url": S.value.pushUrl,
              onSubmit: J,
              onCancel: ue
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : r("", !0),
            D.value.length && !F.value ? (s(), P(ns, {
              key: 1,
              variant: "compact"
            }, {
              default: l(() => [
                g(" Total: " + a(D.value.length) + " remote" + a(D.value.length !== 1 ? "s" : "") + " ", 1),
                M.value ? (s(), o("span", Sg, " • Tracking: " + a(M.value.remote) + "/" + a(M.value.branch), 1)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            T.value.length && !F.value ? (s(), P(Ae, {
              key: 2,
              title: "REMOTES",
              count: T.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(T.value, (ke) => (s(), P(df, {
                  key: ke.name,
                  remote: ke,
                  "sync-status": $.value[ke.name],
                  "fetching-remote": Y.value,
                  onFetch: X,
                  onEdit: se,
                  onRemove: z,
                  onPull: at,
                  onPush: me
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !T.value.length && !F.value ? (s(), P(kt, {
              key: 3,
              icon: "🌐",
              message: x.value ? `No remotes match '${x.value}'` : "No remotes configured."
            }, {
              actions: l(() => [
                w(te, {
                  variant: "primary",
                  onClick: ie
                }, {
                  default: l(() => [...ee[4] || (ee[4] = [
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
      w(bt, {
        show: R.value,
        title: "About Git Remotes",
        onClose: ee[2] || (ee[2] = (ke) => R.value = !1)
      }, {
        content: l(() => [...ee[5] || (ee[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            g(" The "),
            e("strong", null, '"origin"'),
            g(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: l(() => [
          w(te, {
            variant: "link",
            onClick: L
          }, {
            default: l(() => [...ee[6] || (ee[6] = [
              g(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w(ap, {
        show: ce.value,
        "remote-name": re.value || "",
        preview: Pe.value,
        loading: ye.value,
        pulling: I.value === "executing",
        error: Z.value,
        "conflict-resolutions": le.value,
        onClose: Me,
        onPull: st,
        onOpenConflictResolution: qe
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      w(Ip, {
        show: Ce.value,
        "remote-name": re.value || "",
        preview: Te.value,
        loading: ye.value,
        pushing: Oe.value,
        onClose: K,
        onPush: q,
        onPullFirst: E
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      Q.value && Je.value ? (s(), P(ng, {
        key: 0,
        "workflow-conflicts": Je.value.workflow_conflicts,
        resolutions: le.value,
        "operation-type": "pull",
        validating: I.value === "validating",
        error: xe.value,
        onClose: ct,
        onResolve: Fe,
        onApply: _e
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : r("", !0),
      be.value && we.value ? (s(), P(xg, {
        key: 1,
        validation: we.value,
        "operation-type": "pull",
        executing: I.value === "executing",
        onProceed: He,
        onGoBack: lt,
        onCancel: ot
      }, null, 8, ["validation", "executing"])) : r("", !0)
    ], 64));
  }
}), Eg = /* @__PURE__ */ ae(Ig, [["__scopeId", "data-v-9ae3b76d"]]), Pg = { class: "setting-info" }, Mg = { class: "setting-label" }, Rg = {
  key: 0,
  class: "required-marker"
}, Tg = {
  key: 0,
  class: "setting-description"
}, Dg = { class: "setting-control" }, Lg = /* @__PURE__ */ oe({
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
      e("div", Pg, [
        e("div", Mg, [
          g(a(t.label) + " ", 1),
          t.required ? (s(), o("span", Rg, "*")) : r("", !0)
        ]),
        t.description ? (s(), o("div", Tg, a(t.description), 1)) : r("", !0)
      ]),
      e("div", Dg, [
        Re(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), fs = /* @__PURE__ */ ae(Lg, [["__scopeId", "data-v-cb5d236c"]]), zg = { class: "toggle" }, Ug = ["checked", "disabled"], Ng = /* @__PURE__ */ oe({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", zg, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, Ug),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Og = /* @__PURE__ */ ae(Ng, [["__scopeId", "data-v-71c0f550"]]), Ag = { class: "workspace-settings-content" }, Bg = { class: "settings-section" }, Fg = { class: "path-setting" }, Vg = { class: "path-value" }, Wg = { class: "path-setting" }, Gg = { class: "path-value" }, jg = { class: "settings-section" }, Hg = { class: "settings-section" }, Kg = { class: "settings-section" }, qg = /* @__PURE__ */ oe({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(t, { expose: c, emit: n }) {
    const i = t, f = n, { getConfig: p, updateConfig: u } = Ke(), m = h(!1), d = h(null), v = h(null), y = h(null), k = h(null), _ = h(""), b = h(""), D = h(!1);
    function M(F) {
      return F.join(" ");
    }
    function $(F) {
      return F.trim() ? F.trim().split(/\s+/) : [];
    }
    const C = O(() => {
      if (!k.value) return !1;
      const F = _.value !== (k.value.civitai_api_key || ""), G = b.value !== M(k.value.comfyui_extra_args || []);
      return F || G;
    });
    async function A() {
      m.value = !0, d.value = null;
      try {
        y.value = await p(i.workspacePath || void 0), k.value = { ...y.value }, _.value = y.value.civitai_api_key || "", b.value = M(y.value.comfyui_extra_args || []);
        const F = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        D.value = F === "true";
      } catch (F) {
        d.value = F instanceof Error ? F.message : "Failed to load settings";
      } finally {
        m.value = !1;
      }
    }
    async function x() {
      var F, G;
      v.value = null;
      try {
        const S = {};
        _.value !== (((F = k.value) == null ? void 0 : F.civitai_api_key) || "") && (S.civitai_api_key = _.value || null), b.value !== M(((G = k.value) == null ? void 0 : G.comfyui_extra_args) || []) && (S.comfyui_extra_args = $(b.value)), await u(S, i.workspacePath || void 0), await A(), v.value = { type: "success", message: "Settings saved successfully" }, f("saved"), setTimeout(() => {
          v.value = null;
        }, 3e3);
      } catch (S) {
        const T = S instanceof Error ? S.message : "Failed to save settings";
        v.value = { type: "error", message: T }, f("error", T);
      }
    }
    function R() {
      k.value && (_.value = k.value.civitai_api_key || "", b.value = M(k.value.comfyui_extra_args || []), v.value = null);
    }
    function Y(F) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(F)), console.log("[ComfyGit] Auto-refresh setting saved:", F);
    }
    return c({
      saveSettings: x,
      resetSettings: R,
      hasChanges: C,
      loadSettings: A
    }), We(A), (F, G) => (s(), o("div", Ag, [
      m.value ? (s(), P(Tt, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (s(), P(Dt, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: A
      }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
        w(Ae, { title: "WORKSPACE PATHS" }, {
          default: l(() => {
            var S, T;
            return [
              e("div", Bg, [
                e("div", Fg, [
                  G[3] || (G[3] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                  G[4] || (G[4] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  e("div", Vg, a(((S = y.value) == null ? void 0 : S.workspace_path) || "Loading..."), 1)
                ]),
                e("div", Wg, [
                  G[5] || (G[5] = e("div", { class: "path-label" }, "Models Directory", -1)),
                  G[6] || (G[6] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  e("div", Gg, a(((T = y.value) == null ? void 0 : T.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        w(Ae, { title: "API CREDENTIALS" }, {
          default: l(() => [
            e("div", jg, [
              w(fs, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: l(() => [
                  w(rs, {
                    modelValue: _.value,
                    "onUpdate:modelValue": G[0] || (G[0] = (S) => _.value = S),
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
        w(Ae, { title: "COMFYUI SETTINGS" }, {
          default: l(() => [
            e("div", Hg, [
              w(fs, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: l(() => [
                  w(rs, {
                    modelValue: b.value,
                    "onUpdate:modelValue": G[1] || (G[1] = (S) => b.value = S),
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
        w(Ae, { title: "UI SETTINGS" }, {
          default: l(() => [
            e("div", Kg, [
              w(fs, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: l(() => [
                  w(Og, {
                    modelValue: D.value,
                    "onUpdate:modelValue": [
                      G[2] || (G[2] = (S) => D.value = S),
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
        v.value ? (s(), P(ns, {
          key: 0,
          variant: (v.value.type === "success", "compact")
        }, {
          default: l(() => [
            e("span", {
              style: Rt({ color: v.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, a(v.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : r("", !0)
      ], 64))
    ]));
  }
}), Js = /* @__PURE__ */ ae(qg, [["__scopeId", "data-v-9f44552d"]]), Yg = /* @__PURE__ */ oe({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const c = h(null);
    function n() {
      console.log("[ComfyGit] Settings saved");
    }
    return (i, f) => (s(), P(Ze, null, {
      header: l(() => [
        w(et, { title: "WORKSPACE SETTINGS" }, {
          actions: l(() => {
            var p, u;
            return [
              w(te, {
                variant: "primary",
                size: "sm",
                disabled: !((p = c.value) != null && p.hasChanges),
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
              (u = c.value) != null && u.hasChanges ? (s(), P(te, {
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
        w(Js, {
          ref_key: "contentRef",
          ref: c,
          onSaved: n
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), Jg = /* @__PURE__ */ oe({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c, getWorkspaceLogPath: n, openFile: i } = Ke(), f = h([]), p = h(!1), u = h(null), m = h(!1), d = h(null), v = h(null), y = h(!1), k = O(() => f.value.length === 0 ? [] : f.value.map((M) => ({
      text: `${M.timestamp} - ${M.name} - ${M.level} - ${M.func}:${M.line} - ${M.message}`,
      level: M.level
    })));
    async function _() {
      p.value = !0, u.value = null;
      try {
        f.value = await c(void 0, 500);
      } catch (M) {
        u.value = M instanceof Error ? M.message : "Failed to load workspace logs";
      } finally {
        p.value = !1, setTimeout(() => {
          var M;
          (M = d.value) != null && M.parentElement && (d.value.parentElement.scrollTop = d.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function b() {
      try {
        const M = await n();
        M.exists && (v.value = M.path);
      } catch {
      }
    }
    async function D() {
      if (v.value) {
        y.value = !0;
        try {
          await i(v.value);
        } catch (M) {
          console.error("Failed to open log file:", M);
        } finally {
          y.value = !1;
        }
      }
    }
    return We(() => {
      _(), b();
    }), (M, $) => (s(), o(W, null, [
      w(Ze, null, {
        header: l(() => [
          w(et, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (C) => m.value = !0)
          }, {
            actions: l(() => [
              w(te, {
                variant: "secondary",
                size: "sm",
                onClick: D,
                disabled: !v.value || y.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  g(a(y.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              w(te, {
                variant: "secondary",
                size: "sm",
                onClick: _,
                disabled: p.value
              }, {
                default: l(() => [
                  g(a(p.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          p.value ? (s(), P(Tt, {
            key: 0,
            message: "Loading workspace logs..."
          })) : u.value ? (s(), P(Dt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            f.value.length === 0 ? (s(), P(kt, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: d,
              class: "log-output"
            }, [
              (s(!0), o(W, null, ne(k.value, (C, A) => (s(), o("div", {
                key: A,
                class: pe(`log-line log-level-${C.level.toLowerCase()}`)
              }, a(C.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      w(bt, {
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
          w(te, {
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
}), Xg = /* @__PURE__ */ ae(Jg, [["__scopeId", "data-v-7f05352a"]]), Qg = /* @__PURE__ */ oe({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n, getEnvironmentLogPath: i, openFile: f } = Ke(), p = h([]), u = h(!1), m = h(null), d = h(!1), v = h("production"), y = h(null), k = h(null), _ = h(!1), b = O(() => p.value.length === 0 ? [] : p.value.map((C) => ({
      text: `${C.timestamp} - ${C.name} - ${C.level} - ${C.func}:${C.line} - ${C.message}`,
      level: C.level
    })));
    async function D() {
      u.value = !0, m.value = null;
      try {
        p.value = await c(void 0, 500);
        try {
          const C = await n();
          v.value = C.environment || "production";
        } catch {
        }
      } catch (C) {
        m.value = C instanceof Error ? C.message : "Failed to load environment logs";
      } finally {
        u.value = !1, setTimeout(() => {
          var C;
          (C = y.value) != null && C.parentElement && (y.value.parentElement.scrollTop = y.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function M() {
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
      D(), M();
    }), (C, A) => (s(), o(W, null, [
      w(Ze, null, {
        header: l(() => [
          w(et, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: A[0] || (A[0] = (x) => d.value = !0)
          }, {
            actions: l(() => [
              w(te, {
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
              w(te, {
                variant: "secondary",
                size: "sm",
                onClick: D,
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
          u.value ? (s(), P(Tt, {
            key: 0,
            message: "Loading environment logs..."
          })) : m.value ? (s(), P(Dt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            p.value.length === 0 ? (s(), P(kt, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: y,
              class: "log-output"
            }, [
              (s(!0), o(W, null, ne(b.value, (x, R) => (s(), o("div", {
                key: R,
                class: pe(`log-line log-level-${x.level.toLowerCase()}`)
              }, a(x.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      w(bt, {
        show: d.value,
        title: "About Environment Logs",
        onClose: A[2] || (A[2] = (x) => d.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            A[3] || (A[3] = g(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(v.value), 1),
            A[4] || (A[4] = g(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          A[5] || (A[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          A[6] || (A[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: l(() => [
          w(te, {
            variant: "primary",
            onClick: A[1] || (A[1] = (x) => d.value = !1)
          }, {
            default: l(() => [...A[7] || (A[7] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Zg = /* @__PURE__ */ ae(Qg, [["__scopeId", "data-v-6f8db7ce"]]), eh = { class: "env-title" }, th = {
  key: 0,
  class: "current-badge"
}, sh = {
  key: 0,
  class: "branch-info"
}, oh = /* @__PURE__ */ oe({
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
    return (c, n) => (s(), P(Qe, {
      status: t.isCurrent ? "synced" : void 0
    }, Bt({
      icon: l(() => [
        g(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: l(() => [
        e("div", eh, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", th, "CURRENT")) : r("", !0)
        ])
      ]),
      subtitle: l(() => [
        t.currentBranch ? (s(), o("span", sh, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          g(" " + a(t.currentBranch), 1)
        ])) : r("", !0)
      ]),
      actions: l(() => [
        Re(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: l(() => [
          w(Ve, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          w(Ve, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          w(Ve, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), P(Ve, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : r("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), nh = /* @__PURE__ */ ae(oh, [["__scopeId", "data-v-9231917a"]]), ah = { class: "env-details" }, lh = { class: "status-row" }, ih = {
  key: 0,
  class: "detail-row"
}, rh = { class: "value mono" }, dh = {
  key: 1,
  class: "detail-row"
}, ch = { class: "value mono small" }, uh = { class: "detail-row" }, mh = { class: "value" }, vh = { class: "detail-row" }, fh = { class: "value" }, ph = { class: "detail-row" }, gh = { class: "value" }, hh = {
  key: 2,
  class: "section-divider"
}, yh = {
  key: 3,
  class: "detail-row"
}, wh = { class: "value" }, kh = {
  key: 4,
  class: "detail-row"
}, bh = { class: "value" }, _h = { class: "footer-actions" }, $h = /* @__PURE__ */ oe({
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
        const p = new Date(f), m = (/* @__PURE__ */ new Date()).getTime() - p.getTime(), d = Math.floor(m / 6e4), v = Math.floor(m / 36e5), y = Math.floor(m / 864e5);
        return d < 1 ? "just now" : d < 60 ? `${d} ${d === 1 ? "minute" : "minutes"} ago` : v < 24 ? `${v} ${v === 1 ? "hour" : "hours"} ago` : y < 30 ? `${y} ${y === 1 ? "day" : "days"} ago` : p.toLocaleDateString();
      } catch {
        return f;
      }
    }
    return (f, p) => (s(), P(tt, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: p[2] || (p[2] = (u) => n("close"))
    }, {
      body: l(() => [
        e("div", ah, [
          e("div", lh, [
            p[3] || (p[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: pe(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", ih, [
            p[4] || (p[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", rh, a(t.environment.current_branch), 1)
          ])) : r("", !0),
          t.environment.path ? (s(), o("div", dh, [
            p[5] || (p[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", ch, a(t.environment.path), 1)
          ])) : r("", !0),
          p[11] || (p[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", uh, [
            p[6] || (p[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", mh, a(t.environment.workflow_count), 1)
          ]),
          e("div", vh, [
            p[7] || (p[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", fh, a(t.environment.node_count), 1)
          ]),
          e("div", ph, [
            p[8] || (p[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", gh, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", hh)) : r("", !0),
          t.environment.created_at ? (s(), o("div", yh, [
            p[9] || (p[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", wh, a(i(t.environment.created_at)), 1)
          ])) : r("", !0),
          t.environment.last_used ? (s(), o("div", kh, [
            p[10] || (p[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", bh, a(i(t.environment.last_used)), 1)
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        e("div", _h, [
          t.canDelete ? (s(), P(he, {
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
          w(he, {
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
}), Ch = /* @__PURE__ */ ae($h, [["__scopeId", "data-v-59855453"]]), Xs = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Qs = "3.12", xs = [
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
], Zs = "auto", xh = { class: "progress-bar" }, Sh = /* @__PURE__ */ oe({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, n = O(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (i, f) => (s(), o("div", xh, [
      e("div", {
        class: pe(["progress-fill", t.variant]),
        style: Rt({ width: n.value })
      }, null, 6)
    ]));
  }
}), Ss = /* @__PURE__ */ ae(Sh, [["__scopeId", "data-v-1beb0512"]]), Ih = { class: "task-progress" }, Eh = { class: "progress-info" }, Ph = { class: "progress-percentage" }, Mh = { class: "progress-message" }, Rh = {
  key: 0,
  class: "progress-steps"
}, Th = { class: "step-icon" }, Dh = { class: "step-label" }, Lh = /* @__PURE__ */ oe({
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
    return (f, p) => (s(), o("div", Ih, [
      w(Ss, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", Eh, [
        e("span", Ph, a(t.progress) + "%", 1),
        e("span", Mh, a(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", Rh, [
        (s(!0), o(W, null, ne(t.steps, (u) => (s(), o("div", {
          key: u.id,
          class: pe(["step", n(u.id)])
        }, [
          e("span", Th, a(i(u.id)), 1),
          e("span", Dh, a(u.label), 1)
        ], 2))), 128))
      ])) : r("", !0)
    ]));
  }
}), cs = /* @__PURE__ */ ae(Lh, [["__scopeId", "data-v-9d1de66c"]]), zh = {
  key: 0,
  class: "create-env-form"
}, Uh = { class: "form-field" }, Nh = { class: "form-field" }, Oh = ["value"], Ah = { class: "form-field" }, Bh = ["disabled"], Fh = ["value"], Vh = { class: "form-field" }, Wh = ["value"], Gh = { class: "form-field form-field--checkbox" }, jh = { class: "form-checkbox" }, Hh = {
  key: 1,
  class: "create-env-progress"
}, Kh = { class: "creating-intro" }, qh = {
  key: 0,
  class: "progress-warning"
}, Yh = {
  key: 1,
  class: "create-error"
}, Jh = { class: "error-message" }, Xh = {
  key: 1,
  class: "footer-status"
}, Qh = 10, Zh = /* @__PURE__ */ oe({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: c }) {
    const n = c, { getComfyUIReleases: i, createEnvironment: f, getCreateProgress: p } = Ke(), u = h(""), m = h(Qs), d = h("latest"), v = h(Zs), y = h(!1), k = h([{ tag_name: "latest", name: "Latest", published_at: "" }]), _ = h(!1), b = h(!1), D = h({
      progress: 0,
      message: ""
    });
    let M = null, $ = 0;
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
    ], A = h(null);
    function x() {
      b.value || n("close");
    }
    async function R() {
      const T = u.value.trim();
      if (T) {
        b.value = !0, D.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const N = {
            name: T,
            python_version: m.value,
            comfyui_version: d.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, ie = await f(N);
          ie.status === "started" ? Y() : ie.status === "error" && (D.value = {
            progress: 0,
            message: ie.message || "Failed to start creation",
            error: ie.message
          });
        } catch (N) {
          D.value = {
            progress: 0,
            message: N instanceof Error ? N.message : "Unknown error",
            error: N instanceof Error ? N.message : "Unknown error"
          };
        }
      }
    }
    function Y() {
      M || ($ = 0, M = window.setInterval(async () => {
        try {
          const T = await p();
          $ = 0, D.value = {
            progress: T.progress ?? 0,
            message: T.message,
            phase: T.phase,
            error: T.error
          }, T.state === "complete" ? (F(), n("created", T.environment_name || u.value.trim(), y.value)) : T.state === "error" ? (F(), D.value.error = T.error || T.message) : T.state === "idle" && b.value && (F(), D.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= Qh && (F(), D.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function F() {
      M && (clearInterval(M), M = null);
    }
    function G() {
      b.value = !1, D.value = { progress: 0, message: "" }, n("close");
    }
    async function S() {
      _.value = !0;
      try {
        k.value = await i();
      } catch (T) {
        console.error("Failed to load ComfyUI releases:", T);
      } finally {
        _.value = !1;
      }
    }
    return We(async () => {
      var T;
      await mo(), (T = A.value) == null || T.focus(), S();
    }), bs(() => {
      F();
    }), (T, N) => (s(), P(tt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !b.value,
      onClose: x
    }, {
      body: l(() => [
        b.value ? (s(), o("div", Hh, [
          e("p", Kh, [
            N[11] || (N[11] = g(" Creating environment ", -1)),
            e("strong", null, a(u.value), 1),
            N[12] || (N[12] = g("... ", -1))
          ]),
          w(cs, {
            progress: D.value.progress,
            message: D.value.message,
            "current-phase": D.value.phase,
            variant: D.value.error ? "error" : "default",
            "show-steps": !0,
            steps: C
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          D.value.error ? r("", !0) : (s(), o("p", qh, " This may take several minutes. Please wait... ")),
          D.value.error ? (s(), o("div", Yh, [
            e("p", Jh, a(D.value.error), 1)
          ])) : r("", !0)
        ])) : (s(), o("div", zh, [
          e("div", Uh, [
            N[6] || (N[6] = e("label", { class: "form-label" }, "Name", -1)),
            ze(e("input", {
              ref_key: "nameInput",
              ref: A,
              "onUpdate:modelValue": N[0] || (N[0] = (ie) => u.value = ie),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: xt(R, ["enter"])
            }, null, 544), [
              [Ot, u.value]
            ])
          ]),
          e("div", Nh, [
            N[7] || (N[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            ze(e("select", {
              "onUpdate:modelValue": N[1] || (N[1] = (ie) => m.value = ie),
              class: "form-select"
            }, [
              (s(!0), o(W, null, ne(Ie(Xs), (ie) => (s(), o("option", {
                key: ie,
                value: ie
              }, a(ie), 9, Oh))), 128))
            ], 512), [
              [Mt, m.value]
            ])
          ]),
          e("div", Ah, [
            N[8] || (N[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            ze(e("select", {
              "onUpdate:modelValue": N[2] || (N[2] = (ie) => d.value = ie),
              class: "form-select",
              disabled: _.value
            }, [
              (s(!0), o(W, null, ne(k.value, (ie) => (s(), o("option", {
                key: ie.tag_name,
                value: ie.tag_name
              }, a(ie.name), 9, Fh))), 128))
            ], 8, Bh), [
              [Mt, d.value]
            ])
          ]),
          e("div", Vh, [
            N[9] || (N[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            ze(e("select", {
              "onUpdate:modelValue": N[3] || (N[3] = (ie) => v.value = ie),
              class: "form-select"
            }, [
              (s(!0), o(W, null, ne(Ie(xs), (ie) => (s(), o("option", {
                key: ie,
                value: ie
              }, a(ie) + a(ie === "auto" ? " (detect GPU)" : ""), 9, Wh))), 128))
            ], 512), [
              [Mt, v.value]
            ])
          ]),
          e("div", Gh, [
            e("label", jh, [
              ze(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": N[4] || (N[4] = (ie) => y.value = ie)
              }, null, 512), [
                [is, y.value]
              ]),
              N[10] || (N[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: l(() => [
        b.value ? (s(), o(W, { key: 1 }, [
          D.value.error ? (s(), P(he, {
            key: 0,
            variant: "secondary",
            onClick: G
          }, {
            default: l(() => [...N[15] || (N[15] = [
              g(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", Xh, " Creating environment... "))
        ], 64)) : (s(), o(W, { key: 0 }, [
          w(he, {
            variant: "primary",
            disabled: !u.value.trim(),
            onClick: R
          }, {
            default: l(() => [...N[13] || (N[13] = [
              g(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          w(he, {
            variant: "secondary",
            onClick: N[5] || (N[5] = (ie) => n("close"))
          }, {
            default: l(() => [...N[14] || (N[14] = [
              g(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), e1 = /* @__PURE__ */ ae(Zh, [["__scopeId", "data-v-f37eaa42"]]), t1 = /* @__PURE__ */ oe({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getEnvironments: f } = Ke(), p = h([]), u = h(!1), m = h(null), d = h(""), v = h(!1), y = h(!1), k = h(null), _ = O(() => {
      if (!d.value.trim()) return p.value;
      const A = d.value.toLowerCase();
      return p.value.filter(
        (x) => {
          var R;
          return x.name.toLowerCase().includes(A) || ((R = x.current_branch) == null ? void 0 : R.toLowerCase().includes(A));
        }
      );
    });
    function b(A, x) {
      y.value = !1, i("created", A, x);
    }
    function D() {
      y.value = !0;
    }
    function M(A) {
      k.value = A;
    }
    function $(A) {
      k.value = null, i("delete", A);
    }
    async function C() {
      u.value = !0, m.value = null;
      try {
        p.value = await f();
      } catch (A) {
        m.value = A instanceof Error ? A.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return We(C), c({
      loadEnvironments: C,
      openCreateModal: D
    }), (A, x) => (s(), o(W, null, [
      w(Ze, null, {
        header: l(() => [
          w(et, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (R) => v.value = !0)
          }, {
            actions: l(() => [
              w(te, {
                variant: "primary",
                size: "sm",
                onClick: D
              }, {
                default: l(() => [...x[6] || (x[6] = [
                  g(" Create ", -1)
                ])]),
                _: 1
              }),
              w(te, {
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
          w(Ht, {
            modelValue: d.value,
            "onUpdate:modelValue": x[1] || (x[1] = (R) => d.value = R),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value ? (s(), P(Tt, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (s(), P(Dt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            _.value.length ? (s(), P(Ae, {
              key: 0,
              title: "ENVIRONMENTS",
              count: _.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(_.value, (R) => (s(), P(nh, {
                  key: R.name,
                  "environment-name": R.name,
                  "is-current": R.is_current,
                  "current-branch": R.current_branch,
                  "show-last-used": !1
                }, {
                  actions: l(() => [
                    R.is_current ? r("", !0) : (s(), P(te, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (Y) => A.$emit("switch", R.name)
                    }, {
                      default: l(() => [...x[8] || (x[8] = [
                        g(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Y) => M(R)
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
            _.value.length ? r("", !0) : (s(), P(kt, {
              key: 1,
              icon: "🌍",
              message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
            }, Bt({ _: 2 }, [
              d.value ? void 0 : {
                name: "actions",
                fn: l(() => [
                  w(te, {
                    variant: "primary",
                    onClick: D
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
      w(bt, {
        show: v.value,
        title: "About Environments",
        onClose: x[3] || (x[3] = (R) => v.value = !1)
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
          w(te, {
            variant: "secondary",
            onClick: x[2] || (x[2] = (R) => v.value = !1)
          }, {
            default: l(() => [...x[12] || (x[12] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), P(Ch, {
        key: 0,
        environment: k.value,
        "can-delete": p.value.length > 1,
        onClose: x[4] || (x[4] = (R) => k.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : r("", !0),
      y.value ? (s(), P(e1, {
        key: 1,
        onClose: x[5] || (x[5] = (R) => y.value = !1),
        onCreated: b
      })) : r("", !0)
    ], 64));
  }
}), s1 = /* @__PURE__ */ ae(t1, [["__scopeId", "data-v-f95999f4"]]), o1 = { class: "file-path" }, n1 = { class: "file-path-text" }, a1 = ["title"], l1 = /* @__PURE__ */ oe({
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
    return (f, p) => (s(), o("div", o1, [
      p[0] || (p[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", n1, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: i
      }, a(n.value ? "✓" : "📋"), 9, a1)) : r("", !0)
    ]));
  }
}), i1 = /* @__PURE__ */ ae(l1, [["__scopeId", "data-v-f0982173"]]), r1 = { class: "export-blocked" }, d1 = { class: "issues-list" }, c1 = { class: "issue-message" }, u1 = {
  key: 0,
  class: "issue-details"
}, m1 = ["onClick"], v1 = { class: "issue-fix" }, f1 = /* @__PURE__ */ oe({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(t) {
    const c = t, n = us({});
    function i(f) {
      const p = c.issues[f];
      return n[f] || p.details.length <= 3 ? p.details : p.details.slice(0, 3);
    }
    return (f, p) => (s(), P(tt, {
      title: "Cannot Export",
      size: "md",
      onClose: p[1] || (p[1] = (u) => f.$emit("close"))
    }, {
      body: l(() => [
        e("div", r1, [
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
          e("div", d1, [
            (s(!0), o(W, null, ne(t.issues, (u, m) => (s(), o("div", {
              key: m,
              class: "issue-item"
            }, [
              e("div", c1, a(u.message), 1),
              u.details.length ? (s(), o("div", u1, [
                (s(!0), o(W, null, ne(i(m), (d, v) => (s(), o("div", {
                  key: v,
                  class: "issue-detail"
                }, a(d), 1))), 128)),
                u.details.length > 3 && !n[m] ? (s(), o("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (d) => n[m] = !0
                }, " +" + a(u.details.length - 3) + " more ", 9, m1)) : r("", !0)
              ])) : r("", !0),
              e("div", v1, [
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
        w(he, {
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
}), p1 = /* @__PURE__ */ ae(f1, [["__scopeId", "data-v-b52f5e32"]]), g1 = { class: "export-warnings" }, h1 = {
  key: 0,
  class: "success-header"
}, y1 = { class: "warning-header" }, w1 = { class: "warning-summary" }, k1 = { class: "warning-title" }, b1 = { class: "models-section" }, _1 = { class: "models-list" }, $1 = { class: "model-info" }, C1 = { class: "model-filename" }, x1 = { class: "model-workflows" }, S1 = ["onClick"], I1 = /* @__PURE__ */ oe({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = h(!1), p = h(null), u = O(() => f.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function m() {
      p.value = null, i("revalidate");
    }
    return (d, v) => (s(), o(W, null, [
      w(tt, {
        title: "Export Warnings",
        size: "md",
        onClose: v[3] || (v[3] = (y) => d.$emit("cancel"))
      }, {
        body: l(() => [
          e("div", g1, [
            t.models.length === 0 ? (s(), o("div", h1, [...v[4] || (v[4] = [
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
              e("div", y1, [
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
                e("div", w1, [
                  e("h3", k1, a(t.models.length) + " model" + a(t.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  v[5] || (v[5] = e("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              e("div", b1, [
                e("div", _1, [
                  (s(!0), o(W, null, ne(u.value, (y) => (s(), o("div", {
                    key: y.hash,
                    class: "model-item"
                  }, [
                    e("div", $1, [
                      e("div", C1, a(y.filename), 1),
                      e("div", x1, " Used by: " + a(y.workflows.join(", ")), 1)
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      onClick: (k) => p.value = y.hash
                    }, " Add Source ", 8, S1)
                  ]))), 128))
                ]),
                t.models.length > 3 && !f.value ? (s(), o("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: v[0] || (v[0] = (y) => f.value = !0)
                }, " Show " + a(t.models.length - 3) + " more model" + a(t.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : r("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: l(() => [
          w(he, {
            variant: "secondary",
            onClick: v[1] || (v[1] = (y) => d.$emit("cancel"))
          }, {
            default: l(() => [...v[7] || (v[7] = [
              g(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          w(he, {
            variant: "primary",
            onClick: v[2] || (v[2] = (y) => d.$emit("confirm"))
          }, {
            default: l(() => [
              g(a(t.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      p.value ? (s(), P(Cs, {
        key: 0,
        identifier: p.value,
        onClose: m
      }, null, 8, ["identifier"])) : r("", !0)
    ], 64));
  }
}), E1 = /* @__PURE__ */ ae(I1, [["__scopeId", "data-v-b698d882"]]), P1 = { class: "export-card" }, M1 = { class: "export-path-row" }, R1 = { class: "export-actions" }, T1 = {
  key: 1,
  class: "export-warning"
}, D1 = /* @__PURE__ */ oe({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: c, exportEnvWithForce: n } = Ke(), i = h(""), f = h(!1), p = h(!1), u = h(!1), m = h(null), d = h(!1), v = h(null), y = h(!1), k = h(!1), _ = O(() => f.value ? "Validating..." : p.value ? "Exporting..." : "Export Environment");
    async function b() {
      f.value = !0, m.value = null;
      try {
        const x = await c();
        v.value = x, x.can_export ? x.warnings.models_without_sources.length > 0 ? k.value = !0 : await $() : y.value = !0;
      } catch (x) {
        m.value = {
          status: "error",
          message: x instanceof Error ? x.message : "Validation failed"
        };
      } finally {
        f.value = !1;
      }
    }
    async function D() {
      k.value = !1, await $();
    }
    async function M() {
      try {
        const x = await c();
        v.value = x;
      } catch (x) {
        console.error("Re-validation failed:", x);
      }
    }
    async function $() {
      p.value = !0;
      try {
        const x = await n(i.value || void 0);
        m.value = x;
      } catch (x) {
        m.value = {
          status: "error",
          message: x instanceof Error ? x.message : "Export failed"
        };
      } finally {
        p.value = !1;
      }
    }
    async function C() {
      var x;
      if ((x = m.value) != null && x.path)
        try {
          await navigator.clipboard.writeText(m.value.path);
        } catch (R) {
          console.error("Failed to copy path:", R);
        }
    }
    async function A() {
      var x;
      if ((x = m.value) != null && x.path) {
        u.value = !0;
        try {
          const R = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(m.value.path)}`);
          if (!R.ok)
            throw new Error(`Download failed: ${R.statusText}`);
          const Y = await R.blob(), F = URL.createObjectURL(Y), G = m.value.path.split("/").pop() || "environment-export.tar.gz", S = document.createElement("a");
          S.href = F, S.download = G, document.body.appendChild(S), S.click(), document.body.removeChild(S), URL.revokeObjectURL(F);
        } catch (R) {
          console.error("Failed to download:", R), alert(`Download failed: ${R instanceof Error ? R.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
      }
    }
    return (x, R) => (s(), o(W, null, [
      w(Ze, null, {
        header: l(() => [
          w(et, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (Y) => d.value = !0)
          })
        ]),
        content: l(() => [
          w(Ae, { title: "EXPORT OPTIONS" }, {
            default: l(() => [
              e("div", P1, [
                R[7] || (R[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", M1, [
                  w(rs, {
                    modelValue: i.value,
                    "onUpdate:modelValue": R[1] || (R[1] = (Y) => i.value = Y),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", R1, [
                  w(te, {
                    variant: "primary",
                    size: "md",
                    loading: f.value || p.value,
                    disabled: f.value || p.value,
                    onClick: b
                  }, {
                    default: l(() => [
                      R[6] || (R[6] = e("svg", {
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
          m.value ? (s(), P(Ae, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: l(() => [
              w(Qe, {
                status: m.value.status === "success" ? "synced" : "broken"
              }, Bt({
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
                    w(Ve, { label: "Saved to:" }, {
                      default: l(() => [
                        w(i1, {
                          path: m.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    m.value.models_without_sources !== void 0 ? (s(), P(Ve, {
                      key: 0,
                      label: "Models without sources:",
                      value: m.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : r("", !0),
                    m.value.models_without_sources && m.value.models_without_sources > 0 ? (s(), o("div", T1, [...R[8] || (R[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : r("", !0)
                  ]),
                  key: "0"
                } : void 0,
                m.value.status === "success" ? {
                  name: "actions",
                  fn: l(() => [
                    w(te, {
                      variant: "primary",
                      size: "sm",
                      loading: u.value,
                      onClick: A
                    }, {
                      default: l(() => [...R[9] || (R[9] = [
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
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: C
                    }, {
                      default: l(() => [...R[10] || (R[10] = [
                        g(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    w(te, {
                      variant: "ghost",
                      size: "sm",
                      onClick: R[2] || (R[2] = (Y) => m.value = null)
                    }, {
                      default: l(() => [...R[11] || (R[11] = [
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
      w(bt, {
        show: d.value,
        title: "What Gets Exported",
        onClose: R[3] || (R[3] = (Y) => d.value = !1)
      }, {
        content: l(() => [...R[12] || (R[12] = [
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
      y.value && v.value ? (s(), P(p1, {
        key: 0,
        issues: v.value.blocking_issues,
        onClose: R[4] || (R[4] = (Y) => y.value = !1)
      }, null, 8, ["issues"])) : r("", !0),
      k.value && v.value ? (s(), P(E1, {
        key: 1,
        models: v.value.warnings.models_without_sources,
        onConfirm: D,
        onCancel: R[5] || (R[5] = (Y) => k.value = !1),
        onRevalidate: M
      }, null, 8, ["models"])) : r("", !0)
    ], 64));
  }
}), L1 = /* @__PURE__ */ ae(D1, [["__scopeId", "data-v-f4d120f2"]]), z1 = { class: "file-input-wrapper" }, U1 = ["accept", "multiple", "disabled"], N1 = /* @__PURE__ */ oe({
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
    function p() {
      var m;
      (m = f.value) == null || m.click();
    }
    function u(m) {
      const d = m.target;
      d.files && d.files.length > 0 && (i("change", d.files), d.value = "");
    }
    return c({
      triggerInput: p
    }), (m, d) => (s(), o("div", z1, [
      e("input", {
        ref_key: "fileInputRef",
        ref: f,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, U1),
      w(te, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: p
      }, {
        default: l(() => [
          Re(m.$slots, "default", {}, () => [
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
}), O1 = /* @__PURE__ */ ae(N1, [["__scopeId", "data-v-cd192091"]]), A1 = {
  key: 0,
  class: "drop-zone-empty"
}, B1 = { class: "drop-zone-text" }, F1 = { class: "drop-zone-primary" }, V1 = { class: "drop-zone-secondary" }, W1 = { class: "drop-zone-actions" }, G1 = {
  key: 1,
  class: "drop-zone-file"
}, j1 = { class: "file-info" }, H1 = { class: "file-details" }, K1 = { class: "file-name" }, q1 = { class: "file-size" }, Y1 = /* @__PURE__ */ oe({
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
    const n = c, i = h(!1), f = h(null), p = h(0), u = O(() => f.value !== null), m = O(() => {
      var $;
      return (($ = f.value) == null ? void 0 : $.name) || "";
    }), d = O(() => {
      if (!f.value) return "";
      const $ = f.value.size;
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v($) {
      var C;
      $.stopPropagation(), p.value++, (C = $.dataTransfer) != null && C.types.includes("Files") && (i.value = !0);
    }
    function y($) {
      $.stopPropagation(), $.dataTransfer && ($.dataTransfer.dropEffect = "copy");
    }
    function k($) {
      $.stopPropagation(), p.value--, p.value === 0 && (i.value = !1);
    }
    function _($) {
      var A;
      $.stopPropagation(), p.value = 0, i.value = !1;
      const C = (A = $.dataTransfer) == null ? void 0 : A.files;
      C && C.length > 0 && D(C[0]);
    }
    function b($) {
      $.length > 0 && D($[0]);
    }
    function D($) {
      f.value = $, n("fileSelected", $);
    }
    function M() {
      f.value = null, n("clear");
    }
    return ($, C) => (s(), o("div", {
      class: pe(["file-drop-zone", { "drop-active": i.value, "has-file": u.value }]),
      onDragenter: Be(v, ["prevent"]),
      onDragover: Be(y, ["prevent"]),
      onDragleave: Be(k, ["prevent"]),
      onDrop: Be(_, ["prevent"])
    }, [
      u.value ? (s(), o("div", G1, [
        e("div", j1, [
          C[1] || (C[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", H1, [
            e("div", K1, a(m.value), 1),
            e("div", q1, a(d.value), 1)
          ])
        ]),
        w(te, {
          variant: "ghost",
          size: "xs",
          onClick: M,
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
      ])) : (s(), o("div", A1, [
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
        e("div", B1, [
          e("p", F1, a(t.primaryText), 1),
          e("p", V1, a(t.secondaryText), 1)
        ]),
        e("div", W1, [
          w(O1, {
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
}), J1 = /* @__PURE__ */ ae(Y1, [["__scopeId", "data-v-0f79cb86"]]), X1 = { class: "import-preview" }, Q1 = { class: "preview-header" }, Z1 = {
  key: 0,
  class: "source-env"
}, ey = { class: "preview-content" }, ty = { class: "preview-section" }, sy = { class: "section-header" }, oy = { class: "section-info" }, ny = { class: "section-count" }, ay = {
  key: 0,
  class: "item-list"
}, ly = { class: "item-name" }, iy = {
  key: 0,
  class: "item-more"
}, ry = { class: "preview-section" }, dy = { class: "section-header" }, cy = { class: "section-info" }, uy = { class: "section-count" }, my = {
  key: 0,
  class: "item-list"
}, vy = { class: "item-details" }, fy = { class: "item-name" }, py = { class: "item-meta" }, gy = {
  key: 0,
  class: "item-more"
}, hy = { class: "preview-section" }, yy = { class: "section-header" }, wy = { class: "section-info" }, ky = { class: "section-count" }, by = {
  key: 0,
  class: "item-list"
}, _y = { class: "item-name" }, $y = {
  key: 0,
  class: "item-more"
}, Cy = {
  key: 0,
  class: "preview-section"
}, xy = { class: "git-info" }, Sy = /* @__PURE__ */ oe({
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
    const c = t, n = O(() => c.workflows.length), i = O(() => c.models.length), f = O(() => c.nodes.length);
    function p(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, m) => (s(), o("div", X1, [
      e("div", Q1, [
        w(mt, null, {
          default: l(() => [...m[0] || (m[0] = [
            g("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", Z1, [
          m[1] || (m[1] = g(" From: ", -1)),
          w(gs, null, {
            default: l(() => [
              g(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : r("", !0)
      ]),
      e("div", ey, [
        e("div", ty, [
          e("div", sy, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", oy, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", ny, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", ay, [
            (s(!0), o(W, null, ne(t.workflows.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", ly, a(d), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", iy, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        e("div", ry, [
          e("div", dy, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", cy, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", uy, a(i.value) + " file" + a(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", my, [
            (s(!0), o(W, null, ne(t.models.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", vy, [
                e("span", fy, a(d.filename), 1),
                e("span", py, a(p(d.size)) + " • " + a(d.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", gy, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        e("div", hy, [
          e("div", yy, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", wy, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", ky, a(f.value) + " node" + a(f.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", by, [
            (s(!0), o(W, null, ne(t.nodes.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", _y, a(d), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", $y, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", Cy, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", xy, [
            t.gitBranch ? (s(), P(Ve, {
              key: 0,
              label: "Branch"
            }, {
              default: l(() => [
                w(gs, null, {
                  default: l(() => [
                    g(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : r("", !0),
            t.gitCommit ? (s(), P(Ve, {
              key: 1,
              label: "Commit"
            }, {
              default: l(() => [
                w(Ws, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : r("", !0)
          ])
        ])) : r("", !0)
      ])
    ]));
  }
}), Iy = /* @__PURE__ */ ae(Sy, [["__scopeId", "data-v-182fe113"]]), Ey = { class: "import-config" }, Py = { class: "config-container" }, My = { class: "config-field" }, Ry = { class: "input-wrapper" }, Ty = ["value"], Dy = {
  key: 0,
  class: "validating-indicator"
}, Ly = {
  key: 1,
  class: "valid-indicator"
}, zy = {
  key: 0,
  class: "field-error"
}, Uy = { class: "config-field" }, Ny = { class: "strategy-options" }, Oy = ["value", "checked", "onChange"], Ay = { class: "strategy-content" }, By = { class: "strategy-label" }, Fy = { class: "strategy-description" }, Vy = { class: "config-field switch-field" }, Wy = { class: "switch-label" }, Gy = ["checked"], jy = { class: "advanced-section" }, Hy = { class: "advanced-content" }, Ky = { class: "config-field" }, qy = ["value"], Yy = ["value"], Jy = /* @__PURE__ */ oe({
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
    const n = t, i = c, f = h(!1), p = h(!1);
    St(() => n.nameError, (y) => {
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
    let m = null;
    function d(y) {
      const k = y.target.value;
      i("update:name", k), p.value = !1, m && clearTimeout(m), k.length > 0 ? (f.value = !0, m = setTimeout(() => {
        i("validate-name", k);
      }, 400)) : f.value = !1;
    }
    function v() {
      n.name.length > 0 && i("validate-name", n.name);
    }
    return (y, k) => (s(), o("div", Ey, [
      w(mt, null, {
        default: l(() => [...k[2] || (k[2] = [
          g("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", Py, [
        e("div", My, [
          w(as, { required: "" }, {
            default: l(() => [...k[3] || (k[3] = [
              g("Environment Name", -1)
            ])]),
            _: 1
          }),
          e("div", Ry, [
            e("input", {
              type: "text",
              class: pe(["name-input", { error: t.nameError || t.name.length === 0, valid: p.value }]),
              value: t.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: v
            }, null, 42, Ty),
            f.value ? (s(), o("span", Dy, "...")) : p.value ? (s(), o("span", Ly, "✓")) : r("", !0)
          ]),
          t.nameError ? (s(), o("div", zy, a(t.nameError), 1)) : r("", !0),
          k[4] || (k[4] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", Uy, [
          w(as, null, {
            default: l(() => [...k[5] || (k[5] = [
              g("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", Ny, [
            (s(), o(W, null, ne(u, (_) => e("label", {
              key: _.value,
              class: pe(["strategy-option", { active: t.modelStrategy === _.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: _.value,
                checked: t.modelStrategy === _.value,
                onChange: (b) => i("update:modelStrategy", _.value)
              }, null, 40, Oy),
              e("div", Ay, [
                e("span", By, a(_.label), 1),
                e("span", Fy, a(_.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Vy, [
          e("label", Wy, [
            e("input", {
              type: "checkbox",
              checked: t.switchAfterImport,
              onChange: k[0] || (k[0] = (_) => i("update:switchAfterImport", _.target.checked))
            }, null, 40, Gy),
            k[6] || (k[6] = e("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        e("details", jy, [
          k[8] || (k[8] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", Hy, [
            e("div", Ky, [
              w(as, null, {
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
                (s(!0), o(W, null, ne(Ie(xs), (_) => (s(), o("option", {
                  key: _,
                  value: _
                }, a(_) + a(_ === "auto" ? " (detect GPU)" : ""), 9, Yy))), 128))
              ], 40, qy)
            ])
          ])
        ])
      ])
    ]));
  }
}), Xy = /* @__PURE__ */ ae(Jy, [["__scopeId", "data-v-89ea06a1"]]), Qy = { class: "import-flow" }, Zy = {
  key: 0,
  class: "import-empty"
}, e0 = { class: "git-import-section" }, t0 = { class: "git-url-input-row" }, s0 = ["disabled"], o0 = {
  key: 0,
  class: "git-error"
}, n0 = {
  key: 1,
  class: "import-configure"
}, a0 = { class: "selected-file-bar" }, l0 = {
  key: 0,
  class: "file-bar-content"
}, i0 = { class: "file-bar-info" }, r0 = { class: "file-bar-name" }, d0 = { class: "file-bar-size" }, c0 = {
  key: 1,
  class: "file-bar-content"
}, u0 = { class: "file-bar-info" }, m0 = { class: "file-bar-name" }, v0 = {
  key: 0,
  class: "preview-loading"
}, f0 = { class: "import-actions" }, p0 = {
  key: 2,
  class: "import-progress"
}, g0 = { class: "creating-intro" }, h0 = {
  key: 0,
  class: "progress-warning"
}, y0 = {
  key: 1,
  class: "import-error"
}, w0 = { class: "error-message" }, k0 = {
  key: 3,
  class: "import-complete"
}, b0 = { class: "complete-message" }, _0 = { class: "complete-title" }, $0 = { class: "complete-details" }, C0 = { class: "complete-actions" }, x0 = /* @__PURE__ */ oe({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(t, { expose: c, emit: n }) {
    var Oe, re, ye, Pe;
    const i = t, f = n, { previewTarballImport: p, previewGitImport: u, validateEnvironmentName: m, executeImport: d, executeGitImport: v, getImportProgress: y } = Ke();
    let k = null;
    const _ = h(null), b = h(i.resumeImport ?? !1), D = h(!1), M = h(!1), $ = h(""), C = h(!1), A = h(null), x = h(""), R = h(null), Y = h(!1), F = h(null), G = h(null), S = h({
      name: ((Oe = i.initialProgress) == null ? void 0 : Oe.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), T = h(null), N = h({
      message: ((re = i.initialProgress) == null ? void 0 : re.message) ?? "Preparing import...",
      phase: ((ye = i.initialProgress) == null ? void 0 : ye.phase) ?? "",
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
    ], se = O(() => {
      if (!G.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const Z = G.value;
      return {
        sourceEnvironment: Z.comfyui_version ? `ComfyUI ${Z.comfyui_version}` : "Unknown",
        workflows: Z.workflows.map((le) => le.name),
        models: Z.models.map((le) => ({
          filename: le.filename,
          size: 0,
          type: le.relative_path.split("/")[0] || "model"
        })),
        nodes: Z.nodes.map((le) => le.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), J = O(() => !C.value && !A.value && G.value && S.value.name.length > 0 && !T.value && (_.value || R.value));
    async function ue(Z) {
      _.value = Z, C.value = !0, A.value = null, G.value = null;
      try {
        const le = await p(Z);
        G.value = le;
      } catch (le) {
        A.value = le instanceof Error ? le.message : "Failed to analyze file", console.error("Preview error:", le);
      } finally {
        C.value = !1;
      }
    }
    function X() {
      _.value = null, R.value = null, x.value = "", F.value = null, D.value = !1, M.value = !1, $.value = "", G.value = null, A.value = null, S.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, T.value = null, f("source-cleared");
    }
    function z() {
      Ce(), X(), b.value = !1, C.value = !1, Y.value = !1, N.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function L() {
      if (x.value.trim()) {
        Y.value = !0, F.value = null;
        try {
          const Z = await u(x.value.trim());
          R.value = x.value.trim(), G.value = Z;
        } catch (Z) {
          F.value = Z instanceof Error ? Z.message : "Failed to analyze repository";
        } finally {
          Y.value = !1;
        }
      }
    }
    function I(Z) {
      try {
        const le = new URL(Z);
        return le.host + le.pathname.replace(/\.git$/, "");
      } catch {
        return Z;
      }
    }
    async function ce(Z) {
      if (!Z) {
        T.value = "Environment name is required";
        return;
      }
      try {
        const le = await m(Z);
        T.value = le.valid ? null : le.error || "Invalid name";
      } catch {
        T.value = "Failed to validate name";
      }
    }
    async function Q() {
      if (S.value.name && !(!_.value && !R.value)) {
        b.value = !0, D.value = !1, N.value = { message: `Creating environment '${S.value.name}'...`, phase: "", progress: 0, error: null }, f("import-started");
        try {
          let Z;
          if (_.value)
            Z = await d(
              _.value,
              S.value.name,
              S.value.modelStrategy,
              S.value.torchBackend
            );
          else if (R.value)
            Z = await v(
              R.value,
              S.value.name,
              S.value.modelStrategy,
              S.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          Z.status === "started" ? be() : (M.value = !1, $.value = Z.message, b.value = !1, D.value = !0);
        } catch (Z) {
          M.value = !1, $.value = Z instanceof Error ? Z.message : "Unknown error occurred during import", b.value = !1, D.value = !0;
        }
      }
    }
    async function be() {
      if (k) return;
      const Z = async () => {
        try {
          const we = await y();
          return N.value = {
            message: we.message,
            phase: we.phase || "",
            progress: we.progress ?? (we.state === "importing" ? 50 : 0),
            error: we.error || null
          }, we.state === "complete" ? (Ce(), M.value = !0, $.value = `Environment '${we.environment_name}' created successfully`, b.value = !1, D.value = !0, we.environment_name && f("import-complete", we.environment_name, S.value.switchAfterImport), !1) : we.state === "error" ? (Ce(), M.value = !1, $.value = we.error || we.message, b.value = !1, D.value = !0, !1) : !0;
        } catch (we) {
          return console.error("Failed to poll import progress:", we), !0;
        }
      };
      await Z() && (k = setInterval(async () => {
        await Z() || Ce();
      }, 2e3));
    }
    function Ce() {
      k && (clearInterval(k), k = null);
    }
    function Te(Z) {
      return Z < 1024 ? `${Z} B` : Z < 1024 * 1024 ? `${(Z / 1024).toFixed(1)} KB` : Z < 1024 * 1024 * 1024 ? `${(Z / (1024 * 1024)).toFixed(1)} MB` : `${(Z / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return We(async () => {
      try {
        const Z = await y();
        console.log("[ComfyGit ImportFlow] Import progress check:", Z.state, Z), Z.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", Z.environment_name), b.value = !0, S.value.name = Z.environment_name || S.value.name || "", N.value = {
          progress: Z.progress ?? 0,
          message: Z.message || "Importing...",
          phase: Z.phase || "",
          error: null
        }, be());
      } catch (Z) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", Z);
      }
    }), c({
      handleReset: z,
      isImporting: b,
      canImport: J
    }), (Z, le) => {
      var we;
      return s(), o("div", Qy, [
        !_.value && !R.value && !b.value ? (s(), o("div", Zy, [
          w(J1, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: ue
          }),
          le[7] || (le[7] = e("div", { class: "import-divider" }, [
            e("span", null, "or")
          ], -1)),
          e("div", e0, [
            le[5] || (le[5] = e("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            e("div", t0, [
              ze(e("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": le[0] || (le[0] = (xe) => x.value = xe),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: xt(L, ["enter"]),
                disabled: Y.value
              }, null, 40, s0), [
                [Ot, x.value]
              ]),
              w(te, {
                variant: "primary",
                size: "sm",
                disabled: !x.value.trim() || Y.value,
                onClick: L
              }, {
                default: l(() => [
                  g(a(Y.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            F.value ? (s(), o("div", o0, a(F.value), 1)) : r("", !0),
            le[6] || (le[6] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (_.value || R.value) && !b.value && !D.value ? (s(), o("div", n0, [
          e("div", a0, [
            _.value ? (s(), o("div", l0, [
              le[8] || (le[8] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", i0, [
                e("div", r0, a(_.value.name), 1),
                e("div", d0, a(Te(_.value.size)), 1)
              ])
            ])) : R.value ? (s(), o("div", c0, [
              le[10] || (le[10] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
              e("div", u0, [
                e("div", m0, a(I(R.value)), 1),
                le[9] || (le[9] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : r("", !0),
            w(te, {
              variant: "ghost",
              size: "sm",
              onClick: X
            }, {
              default: l(() => [...le[11] || (le[11] = [
                g(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          C.value ? (s(), o("div", v0, [...le[12] || (le[12] = [
            e("div", { class: "loading-spinner" }, null, -1),
            e("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : A.value ? (s(), P(ht, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [A.value]
          }, null, 8, ["details"])) : G.value ? (s(), P(Iy, {
            key: 2,
            "source-environment": se.value.sourceEnvironment,
            workflows: se.value.workflows,
            models: se.value.models,
            nodes: se.value.nodes,
            "git-branch": se.value.gitBranch,
            "git-commit": se.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : r("", !0),
          G.value ? (s(), P(Xy, {
            key: 3,
            name: S.value.name,
            "onUpdate:name": le[1] || (le[1] = (xe) => S.value.name = xe),
            "model-strategy": S.value.modelStrategy,
            "onUpdate:modelStrategy": le[2] || (le[2] = (xe) => S.value.modelStrategy = xe),
            "torch-backend": S.value.torchBackend,
            "onUpdate:torchBackend": le[3] || (le[3] = (xe) => S.value.torchBackend = xe),
            "switch-after-import": S.value.switchAfterImport,
            "onUpdate:switchAfterImport": le[4] || (le[4] = (xe) => S.value.switchAfterImport = xe),
            "name-error": T.value,
            onValidateName: ce
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : r("", !0),
          S.value.modelStrategy === "skip" && ((we = G.value) != null && we.models_needing_download) ? (s(), P(ht, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${G.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : r("", !0),
          e("div", f0, [
            w(te, {
              variant: "secondary",
              size: "md",
              onClick: X
            }, {
              default: l(() => [...le[13] || (le[13] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(te, {
              variant: "primary",
              size: "md",
              disabled: !J.value,
              onClick: Q
            }, {
              default: l(() => [...le[14] || (le[14] = [
                g(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : b.value ? (s(), o("div", p0, [
          e("p", g0, [
            le[15] || (le[15] = g(" Importing environment ", -1)),
            e("strong", null, a(S.value.name), 1),
            le[16] || (le[16] = g("... ", -1))
          ]),
          w(cs, {
            progress: N.value.progress,
            message: N.value.message,
            "current-phase": N.value.phase,
            variant: N.value.error ? "error" : "default",
            "show-steps": !0,
            steps: ie
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          N.value.error ? r("", !0) : (s(), o("p", h0, " This may take several minutes. Please wait... ")),
          N.value.error ? (s(), o("div", y0, [
            e("p", w0, a(N.value.error), 1)
          ])) : r("", !0)
        ])) : D.value ? (s(), o("div", k0, [
          e("div", {
            class: pe(["complete-icon", M.value ? "success" : "error"])
          }, a(M.value ? "✓" : "✕"), 3),
          e("div", b0, [
            e("div", _0, a(M.value ? "Import Successful" : "Import Failed"), 1),
            e("div", $0, a($.value), 1)
          ]),
          e("div", C0, [
            w(te, {
              variant: "primary",
              size: "md",
              onClick: z
            }, {
              default: l(() => [...le[17] || (le[17] = [
                g(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : r("", !0)
      ]);
    };
  }
}), eo = /* @__PURE__ */ ae(x0, [["__scopeId", "data-v-72cbc04e"]]), S0 = /* @__PURE__ */ oe({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(t, { emit: c }) {
    const n = c, i = h(!1);
    function f(p, u) {
      u && n("import-complete-switch", p);
    }
    return (p, u) => (s(), o(W, null, [
      w(Ze, null, {
        header: l(() => [
          w(et, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: u[0] || (u[0] = (m) => i.value = !0)
          })
        ]),
        content: l(() => [
          w(eo, { onImportComplete: f })
        ]),
        _: 1
      }),
      w(bt, {
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
}), I0 = /* @__PURE__ */ ae(S0, [["__scopeId", "data-v-e13bfe76"]]), E0 = { class: "api-key-card" }, P0 = { class: "api-key-row" }, M0 = { class: "api-key-input-wrapper" }, R0 = ["type", "disabled"], T0 = ["title"], D0 = { class: "status-icon" }, L0 = { class: "status-text" }, z0 = {
  key: 0,
  class: "credit-balance"
}, U0 = { class: "config-card" }, N0 = { class: "config-row" }, O0 = ["disabled"], A0 = {
  key: 0,
  value: ""
}, B0 = ["value", "disabled"], F0 = { class: "config-row" }, V0 = {
  key: 0,
  class: "loading-inline"
}, W0 = { class: "no-volumes-state" }, G0 = { class: "no-volumes-text" }, j0 = ["value"], H0 = { class: "config-row" }, K0 = ["disabled"], q0 = {
  key: 0,
  value: ""
}, Y0 = {
  key: 1,
  value: ""
}, J0 = {
  key: 2,
  value: ""
}, X0 = ["value", "disabled"], Q0 = { class: "config-row" }, Z0 = { class: "radio-group" }, ew = { class: "radio-option" }, tw = { class: "radio-label" }, sw = { class: "radio-option" }, ow = { class: "radio-label" }, nw = { class: "config-row" }, aw = { class: "radio-group" }, lw = { class: "radio-option" }, iw = { class: "radio-label" }, rw = { class: "radio-option" }, dw = { class: "radio-label" }, cw = { class: "config-row" }, uw = { class: "config-row" }, mw = { class: "summary-card" }, vw = {
  key: 0,
  class: "loading-text"
}, fw = { class: "summary-row" }, pw = { class: "summary-value" }, gw = { class: "summary-row" }, hw = { class: "summary-value" }, yw = { class: "summary-row" }, ww = { class: "summary-value" }, kw = {
  key: 0,
  class: "summary-sub-row"
}, bw = { class: "summary-sub-label" }, _w = {
  key: 1,
  class: "summary-sub-row warning"
}, $w = { class: "summary-sub-label" }, Cw = { class: "summary-row" }, xw = { class: "summary-value" }, Sw = { class: "summary-row" }, Iw = { class: "summary-value" }, Ew = { class: "deployment-summary" }, Pw = { class: "summary-columns" }, Mw = { class: "summary-column" }, Rw = { class: "pricing-row" }, Tw = { class: "pricing-value" }, Dw = { class: "pricing-row" }, Lw = { class: "pricing-value" }, zw = { class: "pricing-row" }, Uw = { class: "pricing-value" }, Nw = { class: "pricing-row total" }, Ow = { class: "pricing-value" }, Aw = { class: "summary-column" }, Bw = { class: "spec-row" }, Fw = { class: "spec-row" }, Vw = {
  key: 0,
  class: "spec-row"
}, Ww = {
  key: 1,
  class: "spec-row spot-warning"
}, Gw = {
  key: 3,
  class: "deploy-actions"
}, jw = { class: "pods-header" }, Hw = {
  key: 0,
  class: "loading-text"
}, Kw = {
  key: 1,
  class: "empty-state"
}, qw = {
  key: 2,
  class: "pods-list"
}, Yw = { class: "pod-header" }, Jw = { class: "pod-name" }, Xw = { class: "pod-details" }, Qw = { class: "pod-gpu" }, Zw = { class: "pod-uptime" }, ek = { class: "pod-cost" }, tk = { class: "pod-actions" }, sk = { class: "progress-content" }, ok = { class: "phase-indicator" }, nk = { key: 0 }, ak = { key: 1 }, lk = { key: 2 }, ik = {
  key: 3,
  class: "spinner"
}, rk = { class: "phase-text" }, dk = { class: "phase-name" }, ck = { class: "phase-detail" }, uk = {
  key: 0,
  class: "ready-actions"
}, mk = { class: "console-link" }, vk = ["href"], fk = /* @__PURE__ */ oe({
  __name: "DeploySection",
  emits: ["toast"],
  setup(t, { emit: c }) {
    const n = c, {
      getDeploySummary: i,
      getDataCenters: f,
      testRunPodConnection: p,
      getNetworkVolumes: u,
      getRunPodGpuTypes: m,
      deployToRunPod: d,
      getRunPodPods: v,
      terminateRunPodPod: y,
      stopRunPodPod: k,
      startRunPodPod: _,
      getDeploymentStatus: b,
      getStoredRunPodKey: D,
      clearRunPodKey: M
    } = Ke(), $ = h(!1), C = h(!1), A = h(""), x = h(!1), R = h(!1), Y = h(null), F = h(null), G = h(""), S = h(""), T = h(""), N = h("SECURE"), ie = h("ON_DEMAND"), se = h("my-comfyui-deploy"), J = h(""), ue = h([]), X = h(!1), z = h([]), L = h(!1), I = h([]), ce = h(!1), Q = h(null), be = h(!1), Ce = h([]), Te = h(!1), Oe = h(!1), re = h(null), ye = h(null), Pe = h(null), Z = h(null), le = h(!1), we = h(null), xe = h(null), Je = h(null), at = O(() => z.value.find((de) => de.id === S.value) || null), Me = O(() => G.value ? z.value.filter((de) => de.data_center_id === G.value) : z.value), st = O(() => x.value && S.value && T.value && J.value && !Oe.value), qe = (de) => {
      const B = I.value.find((nt) => nt.id === T.value);
      if (!B) return "0.00";
      if (de === "SECURE") return B.securePrice.toFixed(2);
      if (de === "COMMUNITY") return B.communityPrice.toFixed(2);
      const Le = N.value === "SECURE";
      return de === "ON_DEMAND" ? Le ? B.securePrice.toFixed(2) : B.communityPrice.toFixed(2) : Le ? B.secureSpotPrice.toFixed(2) : B.communitySpotPrice.toFixed(2);
    }, Fe = O(() => {
      const de = I.value.find((gt) => gt.id === T.value), B = z.value.find((gt) => gt.id === S.value);
      if (!de) return null;
      const Le = N.value === "SECURE", nt = ie.value === "SPOT";
      let pt;
      nt ? pt = Le ? de.secureSpotPrice : de.communitySpotPrice : pt = Le ? de.securePrice : de.communityPrice;
      const It = B ? B.size_gb * 14e-5 : 0, Et = 4e-3;
      return {
        gpu: pt,
        volume: It,
        container: Et,
        total: pt + It + Et
      };
    });
    async function ct() {
      if (A.value) {
        R.value = !0, Y.value = null;
        try {
          const de = await p(A.value, !0);
          de.status === "success" ? (x.value = !0, F.value = de.credit_balance ?? null, Y.value = { type: "success", message: de.message }, await Promise.all([
            He(),
            lt(),
            Ue(),
            me()
          ])) : Y.value = { type: "error", message: de.message };
        } catch (de) {
          Y.value = {
            type: "error",
            message: de instanceof Error ? de.message : "Connection test failed"
          };
        } finally {
          R.value = !1;
        }
      }
    }
    async function _e() {
      try {
        await M(), A.value = "", x.value = !1, Y.value = null, F.value = null, ue.value = [], G.value = "", z.value = [], S.value = "", I.value = [], T.value = "", Q.value = null, Ce.value = [], n("toast", "API key cleared", "info");
      } catch {
        n("toast", "Failed to clear key", "error");
      }
    }
    async function He() {
      X.value = !0;
      try {
        const de = await f();
        ue.value = de.data_centers;
        const B = ue.value.find((Le) => Le.available);
        B && (G.value = B.id);
      } catch {
        n("toast", "Failed to load data centers", "error");
      } finally {
        X.value = !1;
      }
    }
    async function lt() {
      L.value = !0;
      try {
        const de = await u();
        z.value = de.volumes, z.value.length > 0 && (S.value = z.value[0].id);
      } catch {
        n("toast", "Failed to load network volumes", "error");
      } finally {
        L.value = !1;
      }
    }
    async function ot(de) {
      ce.value = !0;
      try {
        const B = await m(de);
        I.value = B.gpu_types;
        const Le = I.value.find((nt) => nt.available);
        Le ? T.value = Le.id : T.value = "";
      } catch {
        n("toast", "Failed to load GPU types", "error");
      } finally {
        ce.value = !1;
      }
    }
    St(G, async (de) => {
      if (!de) return;
      const B = z.value.find((Le) => Le.id === S.value);
      B && B.data_center_id !== de && (S.value = ""), await ot(de);
    }), St(S, async (de) => {
      if (!de) {
        I.value = [], T.value = "";
        return;
      }
      const B = z.value.find((Le) => Le.id === de);
      B && B.data_center_id !== G.value ? G.value = B.data_center_id : B && await ot(B.data_center_id);
    });
    async function Ue() {
      be.value = !0;
      try {
        Q.value = await i();
      } catch {
        n("toast", "Failed to load environment summary", "error");
      } finally {
        be.value = !1;
      }
    }
    async function me() {
      Te.value = !0;
      try {
        const de = await v();
        Ce.value = de.pods;
      } catch {
        n("toast", "Failed to load pods", "error");
      } finally {
        Te.value = !1;
      }
    }
    async function K() {
      if (!(!T.value || !S.value || !J.value)) {
        Oe.value = !0, re.value = null;
        try {
          let de;
          if (ie.value === "SPOT") {
            const Le = I.value.find((nt) => nt.id === T.value);
            Le && (de = N.value === "SECURE" ? Le.secureSpotPrice : Le.communitySpotPrice);
          }
          const B = await d({
            gpu_type_id: T.value,
            pod_name: se.value || "my-comfyui-deploy",
            network_volume_id: S.value,
            cloud_type: N.value,
            pricing_type: ie.value,
            spot_bid: de,
            import_source: J.value
          });
          re.value = B, B.status === "success" && B.pod_id ? (we.value = B.pod_id, le.value = !0, q(B.pod_id), await me()) : n("toast", B.message, "error");
        } catch (de) {
          re.value = {
            status: "error",
            message: de instanceof Error ? de.message : "Deployment failed"
          }, n("toast", "Deployment failed", "error");
        } finally {
          Oe.value = !1;
        }
      }
    }
    function q(de) {
      V(de), Je.value = window.setInterval(() => V(de), 3e3);
    }
    function E() {
      Je.value && (clearInterval(Je.value), Je.value = null);
    }
    async function V(de) {
      try {
        const B = await b(de);
        xe.value = B, (B.phase === "READY" || B.phase === "ERROR" || B.phase === "STOPPED") && (E(), B.phase === "READY" && n("toast", "ComfyUI is ready!", "success"), await me());
      } catch (B) {
        console.error("Failed to poll deployment status:", B);
      }
    }
    function ee() {
      le.value = !1, E(), we.value = null, xe.value = null;
    }
    function ke() {
      var de;
      (de = xe.value) != null && de.comfyui_url && window.open(xe.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function Ge(de) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[de || ""] || "Initializing...";
    }
    function vt(de) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[de || ""] ?? 10;
    }
    async function it(de) {
      ye.value = de;
      try {
        const B = await y(de);
        B.status === "success" ? (n("toast", "Pod terminated", "success"), await me()) : n("toast", B.message, "error");
      } catch {
        n("toast", "Failed to terminate pod", "error");
      } finally {
        ye.value = null;
      }
    }
    async function Lt(de) {
      Pe.value = de;
      try {
        const B = await k(de);
        B.status === "success" ? (n("toast", "Pod stopped", "success"), await me()) : n("toast", B.message, "error");
      } catch {
        n("toast", "Failed to stop pod", "error");
      } finally {
        Pe.value = null;
      }
    }
    async function ft(de) {
      Z.value = de;
      try {
        const B = await _(de);
        B.status === "success" ? (n("toast", "Pod starting...", "success"), await me()) : n("toast", B.message, "error");
      } catch {
        n("toast", "Failed to start pod", "error");
      } finally {
        Z.value = null;
      }
    }
    function zt(de) {
      window.open(de, "_blank", "noopener,noreferrer");
    }
    function Kt(de) {
      const B = Math.floor(de / 3600), Le = Math.floor(de % 3600 / 60);
      return B > 0 ? `${B}h ${Le}m` : `${Le}m`;
    }
    return We(async () => {
      try {
        const de = await D();
        de.has_key && de.key_preview && (A.value = de.key_preview, await ct());
      } catch {
      }
    }), bs(() => {
      E();
    }), (de, B) => {
      var Le, nt, pt, It, Et, gt;
      return s(), o(W, null, [
        w(Ze, null, {
          header: l(() => [
            w(et, {
              title: "DEPLOY TO CLOUD",
              "show-info": !0,
              onInfoClick: B[0] || (B[0] = (fe) => $.value = !0)
            })
          ]),
          content: l(() => [
            w(Ae, { title: "RUNPOD API KEY" }, {
              default: l(() => [
                e("div", E0, [
                  e("div", P0, [
                    e("div", M0, [
                      ze(e("input", {
                        "onUpdate:modelValue": B[1] || (B[1] = (fe) => A.value = fe),
                        type: C.value ? "text" : "password",
                        class: "api-key-input",
                        placeholder: "Enter your RunPod API key (rp_...)",
                        disabled: x.value
                      }, null, 8, R0), [
                        [vo, A.value]
                      ]),
                      e("button", {
                        class: "toggle-visibility-btn",
                        onClick: B[2] || (B[2] = (fe) => C.value = !C.value),
                        title: C.value ? "Hide key" : "Show key"
                      }, a(C.value ? "👁" : "👁‍🗨"), 9, T0)
                    ]),
                    x.value ? r("", !0) : (s(), P(te, {
                      key: 0,
                      variant: "secondary",
                      size: "sm",
                      loading: R.value,
                      disabled: !A.value || R.value,
                      onClick: ct
                    }, {
                      default: l(() => [...B[14] || (B[14] = [
                        g(" Test ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading", "disabled"])),
                    x.value ? (s(), P(te, {
                      key: 1,
                      variant: "ghost",
                      size: "sm",
                      onClick: _e
                    }, {
                      default: l(() => [...B[15] || (B[15] = [
                        g(" Clear ", -1)
                      ])]),
                      _: 1
                    })) : r("", !0)
                  ]),
                  Y.value ? (s(), o("div", {
                    key: 0,
                    class: pe(["connection-status", Y.value.type])
                  }, [
                    e("span", D0, a(Y.value.type === "success" ? "✓" : "✕"), 1),
                    e("span", L0, a(Y.value.message), 1),
                    F.value !== null ? (s(), o("span", z0, " $" + a(F.value.toFixed(2)) + " credit ", 1)) : r("", !0)
                  ], 2)) : r("", !0),
                  B[16] || (B[16] = e("div", { class: "api-key-help" }, [
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
            x.value ? (s(), P(Ae, {
              key: 0,
              title: "CONFIGURATION"
            }, {
              default: l(() => [
                e("div", U0, [
                  e("div", N0, [
                    B[17] || (B[17] = e("label", { class: "config-label" }, "Region", -1)),
                    ze(e("select", {
                      "onUpdate:modelValue": B[3] || (B[3] = (fe) => G.value = fe),
                      class: "config-select",
                      disabled: X.value
                    }, [
                      X.value ? (s(), o("option", A0, "Loading...")) : r("", !0),
                      (s(!0), o(W, null, ne(ue.value, (fe) => (s(), o("option", {
                        key: fe.id,
                        value: fe.id,
                        disabled: !fe.available
                      }, a(fe.id) + " (" + a(fe.name) + ")" + a(fe.available ? "" : " [Unavailable]"), 9, B0))), 128))
                    ], 8, O0), [
                      [Mt, G.value]
                    ])
                  ]),
                  e("div", F0, [
                    B[22] || (B[22] = e("label", { class: "config-label" }, "Network Volume", -1)),
                    L.value ? (s(), o("div", V0, "Loading volumes...")) : Me.value.length === 0 ? (s(), o(W, { key: 1 }, [
                      e("div", W0, [
                        B[18] || (B[18] = e("span", { class: "no-volumes-icon" }, "⚠", -1)),
                        e("span", G0, "No volumes in " + a(G.value || "this region"), 1)
                      ]),
                      B[19] || (B[19] = e("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                      B[20] || (B[20] = e("a", {
                        href: "https://www.runpod.io/console/user/storage",
                        target: "_blank",
                        rel: "noopener",
                        class: "create-volume-link"
                      }, " Create Volume on RunPod → ", -1))
                    ], 64)) : (s(), o(W, { key: 2 }, [
                      ze(e("select", {
                        "onUpdate:modelValue": B[4] || (B[4] = (fe) => S.value = fe),
                        class: "config-select"
                      }, [
                        (s(!0), o(W, null, ne(Me.value, (fe) => (s(), o("option", {
                          key: fe.id,
                          value: fe.id
                        }, a(fe.name) + " (" + a(fe.size_gb) + "GB) ", 9, j0))), 128))
                      ], 512), [
                        [Mt, S.value]
                      ]),
                      B[21] || (B[21] = e("a", {
                        href: "https://www.runpod.io/console/user/storage",
                        target: "_blank",
                        rel: "noopener",
                        class: "create-volume-inline-link"
                      }, " + Create new volume ", -1))
                    ], 64))
                  ]),
                  e("div", H0, [
                    B[23] || (B[23] = e("label", { class: "config-label" }, "GPU Type", -1)),
                    ze(e("select", {
                      "onUpdate:modelValue": B[5] || (B[5] = (fe) => T.value = fe),
                      class: "config-select",
                      disabled: ce.value || !S.value
                    }, [
                      S.value ? ce.value ? (s(), o("option", Y0, "Loading GPUs...")) : I.value.length === 0 ? (s(), o("option", J0, "No GPUs available in this region")) : r("", !0) : (s(), o("option", q0, "Select a volume first")),
                      (s(!0), o(W, null, ne(I.value, (fe) => (s(), o("option", {
                        key: fe.id,
                        value: fe.id,
                        disabled: !fe.available
                      }, a(fe.displayName) + " (" + a(fe.memoryInGb) + "GB) - $" + a(N.value === "SECURE" ? fe.securePrice.toFixed(2) : fe.communityPrice.toFixed(2)) + "/hr " + a(fe.stockStatus ? `[${fe.stockStatus}]` : "") + a(fe.available ? "" : " [Unavailable]"), 9, X0))), 128))
                    ], 8, K0), [
                      [Mt, T.value]
                    ])
                  ]),
                  e("div", Q0, [
                    B[24] || (B[24] = e("label", { class: "config-label" }, "Cloud Type", -1)),
                    e("div", Z0, [
                      e("label", ew, [
                        ze(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": B[6] || (B[6] = (fe) => N.value = fe),
                          value: "SECURE"
                        }, null, 512), [
                          [Nt, N.value]
                        ]),
                        e("span", tw, "Secure ($" + a(qe("SECURE")) + "/hr)", 1)
                      ]),
                      e("label", sw, [
                        ze(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": B[7] || (B[7] = (fe) => N.value = fe),
                          value: "COMMUNITY"
                        }, null, 512), [
                          [Nt, N.value]
                        ]),
                        e("span", ow, "Community ($" + a(qe("COMMUNITY")) + "/hr)", 1)
                      ])
                    ])
                  ]),
                  e("div", nw, [
                    B[25] || (B[25] = e("label", { class: "config-label" }, [
                      g(" Pricing "),
                      e("span", {
                        class: "info-tooltip",
                        title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed. Good for experimentation."
                      }, "ⓘ")
                    ], -1)),
                    e("div", aw, [
                      e("label", lw, [
                        ze(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": B[8] || (B[8] = (fe) => ie.value = fe),
                          value: "ON_DEMAND"
                        }, null, 512), [
                          [Nt, ie.value]
                        ]),
                        e("span", iw, "On-Demand ($" + a(qe("ON_DEMAND")) + "/hr)", 1)
                      ]),
                      e("label", rw, [
                        ze(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": B[9] || (B[9] = (fe) => ie.value = fe),
                          value: "SPOT"
                        }, null, 512), [
                          [Nt, ie.value]
                        ]),
                        e("span", dw, "Spot ($" + a(qe("SPOT")) + "/hr)", 1)
                      ])
                    ])
                  ]),
                  e("div", cw, [
                    B[26] || (B[26] = e("label", { class: "config-label" }, "Pod Name", -1)),
                    ze(e("input", {
                      "onUpdate:modelValue": B[10] || (B[10] = (fe) => se.value = fe),
                      type: "text",
                      class: "config-input",
                      placeholder: "my-comfyui-deploy"
                    }, null, 512), [
                      [Ot, se.value]
                    ])
                  ]),
                  e("div", uw, [
                    B[27] || (B[27] = e("label", { class: "config-label" }, [
                      g(" Environment Source "),
                      e("span", {
                        class: "info-tooltip",
                        title: "Git repository URL containing a ComfyGit environment (pyproject.toml with comfyui dependency)"
                      }, "ⓘ")
                    ], -1)),
                    ze(e("input", {
                      "onUpdate:modelValue": B[11] || (B[11] = (fe) => J.value = fe),
                      type: "text",
                      class: "config-input",
                      placeholder: "https://github.com/user/comfyui-env.git"
                    }, null, 512), [
                      [Ot, J.value]
                    ]),
                    B[28] || (B[28] = e("span", { class: "field-help" }, "Git URL of your ComfyGit environment repository", -1))
                  ])
                ])
              ]),
              _: 1
            })) : r("", !0),
            x.value ? (s(), P(Ae, {
              key: 1,
              title: "ENVIRONMENT SUMMARY"
            }, {
              default: l(() => [
                e("div", mw, [
                  be.value ? (s(), o("div", vw, "Loading environment summary...")) : Q.value ? (s(), o(W, { key: 1 }, [
                    e("div", fw, [
                      B[29] || (B[29] = e("span", { class: "summary-label" }, "ComfyUI", -1)),
                      e("span", pw, a(Q.value.comfyui_version), 1)
                    ]),
                    e("div", gw, [
                      B[30] || (B[30] = e("span", { class: "summary-label" }, "Nodes", -1)),
                      e("span", hw, a(Q.value.node_count) + " custom nodes", 1)
                    ]),
                    e("div", yw, [
                      B[31] || (B[31] = e("span", { class: "summary-label" }, "Models", -1)),
                      e("span", ww, a(Q.value.model_count) + " models", 1)
                    ]),
                    Q.value.models_with_sources > 0 ? (s(), o("div", kw, [
                      e("span", bw, "└─ " + a(Q.value.models_with_sources) + " with sources (auto-download)", 1)
                    ])) : r("", !0),
                    Q.value.models_without_sources > 0 ? (s(), o("div", _w, [
                      e("span", $w, "└─ " + a(Q.value.models_without_sources) + " without sources (manual upload)", 1)
                    ])) : r("", !0),
                    e("div", Cw, [
                      B[32] || (B[32] = e("span", { class: "summary-label" }, "Workflows", -1)),
                      e("span", xw, a(Q.value.workflow_count) + " committed", 1)
                    ]),
                    e("div", Sw, [
                      B[33] || (B[33] = e("span", { class: "summary-label" }, "Package", -1)),
                      e("span", Iw, "~" + a(Q.value.estimated_package_size_mb) + " MB", 1)
                    ])
                  ], 64)) : r("", !0)
                ])
              ]),
              _: 1
            })) : r("", !0),
            x.value && Fe.value ? (s(), P(Ae, {
              key: 2,
              title: "DEPLOYMENT SUMMARY"
            }, {
              default: l(() => {
                var fe, rt;
                return [
                  e("div", Ew, [
                    e("div", Pw, [
                      e("div", Mw, [
                        B[38] || (B[38] = e("div", { class: "column-header" }, "Pricing", -1)),
                        e("div", Rw, [
                          B[34] || (B[34] = e("span", { class: "pricing-label" }, "GPU:", -1)),
                          e("span", Tw, "$" + a(Fe.value.gpu.toFixed(2)) + "/hr", 1)
                        ]),
                        e("div", Dw, [
                          B[35] || (B[35] = e("span", { class: "pricing-label" }, "Volume:", -1)),
                          e("span", Lw, "$" + a(Fe.value.volume.toFixed(3)) + "/hr", 1)
                        ]),
                        e("div", zw, [
                          B[36] || (B[36] = e("span", { class: "pricing-label" }, "Disk:", -1)),
                          e("span", Uw, "$" + a(Fe.value.container.toFixed(3)) + "/hr", 1)
                        ]),
                        B[39] || (B[39] = e("div", { class: "pricing-divider" }, null, -1)),
                        e("div", Nw, [
                          B[37] || (B[37] = e("span", { class: "pricing-label" }, "Total:", -1)),
                          e("span", Ow, "~$" + a(Fe.value.total.toFixed(2)) + "/hr", 1)
                        ])
                      ]),
                      e("div", Aw, [
                        B[41] || (B[41] = e("div", { class: "column-header" }, "Pod Specs", -1)),
                        e("div", Bw, [
                          e("span", null, a(((fe = I.value.find((_t) => _t.id === T.value)) == null ? void 0 : fe.displayName) || "GPU") + " (" + a(((rt = I.value.find((_t) => _t.id === T.value)) == null ? void 0 : rt.memoryInGb) || 0) + "GB VRAM)", 1)
                        ]),
                        e("div", Fw, [
                          e("span", null, "Region: " + a(G.value), 1)
                        ]),
                        at.value ? (s(), o("div", Vw, [
                          e("span", null, "Volume: " + a(at.value.name), 1)
                        ])) : r("", !0),
                        ie.value === "SPOT" ? (s(), o("div", Ww, [...B[40] || (B[40] = [
                          e("span", null, "⚠ Spot instance - may be interrupted", -1)
                        ])])) : r("", !0)
                      ])
                    ])
                  ])
                ];
              }),
              _: 1
            })) : r("", !0),
            x.value ? (s(), o("div", Gw, [
              w(te, {
                variant: "primary",
                size: "md",
                loading: Oe.value,
                disabled: !st.value,
                onClick: K
              }, {
                default: l(() => [...B[42] || (B[42] = [
                  e("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                    e("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                  ], -1),
                  g(" Deploy to RunPod ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"])
            ])) : r("", !0),
            re.value ? (s(), P(Ae, {
              key: 4,
              title: "DEPLOY STATUS"
            }, {
              default: l(() => [
                w(Qe, {
                  status: re.value.status === "success" ? "synced" : "broken"
                }, Bt({
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
                    w(te, {
                      variant: "ghost",
                      size: "sm",
                      onClick: B[12] || (B[12] = (fe) => re.value = null)
                    }, {
                      default: l(() => [...B[43] || (B[43] = [
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
                      w(Ve, {
                        label: "Pod ID:",
                        value: re.value.pod_id
                      }, null, 8, ["value"])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["status"])
              ]),
              _: 1
            })) : r("", !0),
            x.value ? (s(), P(Ae, {
              key: 5,
              title: "ACTIVE PODS"
            }, {
              default: l(() => [
                e("div", jw, [
                  w(te, {
                    variant: "ghost",
                    size: "sm",
                    loading: Te.value,
                    onClick: me
                  }, {
                    default: l(() => [...B[44] || (B[44] = [
                      g(" Refresh ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                Te.value && Ce.value.length === 0 ? (s(), o("div", Hw, " Loading pods... ")) : Ce.value.length === 0 ? (s(), o("div", Kw, [...B[45] || (B[45] = [
                  e("span", { class: "empty-icon" }, "○", -1),
                  e("span", { class: "empty-text" }, "No active pods", -1)
                ])])) : (s(), o("div", qw, [
                  (s(!0), o(W, null, ne(Ce.value, (fe) => (s(), o("div", {
                    key: fe.id,
                    class: "pod-card"
                  }, [
                    e("div", Yw, [
                      e("span", Jw, a(fe.name), 1),
                      e("span", {
                        class: pe(["pod-status", fe.status.toLowerCase()])
                      }, a(fe.status === "RUNNING" ? "●" : "○") + " " + a(fe.status), 3)
                    ]),
                    e("div", Xw, [
                      e("span", Qw, a(fe.gpu_type), 1),
                      B[46] || (B[46] = e("span", { class: "pod-separator" }, "•", -1)),
                      e("span", Zw, a(Kt(fe.uptime_seconds)), 1),
                      B[47] || (B[47] = e("span", { class: "pod-separator" }, "•", -1)),
                      e("span", ek, "$" + a(fe.total_cost.toFixed(2)), 1)
                    ]),
                    e("div", tk, [
                      fe.comfyui_url && fe.status === "RUNNING" ? (s(), P(te, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (rt) => zt(fe.comfyui_url)
                      }, {
                        default: l(() => [...B[48] || (B[48] = [
                          g(" Open ComfyUI ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : r("", !0),
                      fe.status === "RUNNING" ? (s(), P(te, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        loading: Pe.value === fe.id,
                        onClick: (rt) => Lt(fe.id),
                        title: "Stop pod (saves money, keeps storage)"
                      }, {
                        default: l(() => [...B[49] || (B[49] = [
                          g(" Stop ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "onClick"])) : r("", !0),
                      fe.status === "EXITED" || fe.status === "STOPPED" ? (s(), P(te, {
                        key: 2,
                        variant: "secondary",
                        size: "sm",
                        loading: Z.value === fe.id,
                        onClick: (rt) => ft(fe.id),
                        title: "Start stopped pod"
                      }, {
                        default: l(() => [...B[50] || (B[50] = [
                          g(" Start ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "onClick"])) : r("", !0),
                      w(te, {
                        variant: "ghost",
                        size: "sm",
                        loading: ye.value === fe.id,
                        onClick: (rt) => it(fe.id)
                      }, {
                        default: l(() => [...B[51] || (B[51] = [
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
        w(bt, {
          show: $.value,
          title: "Deploy to Cloud",
          onClose: B[13] || (B[13] = (fe) => $.value = !1)
        }, {
          content: l(() => [...B[52] || (B[52] = [
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
        le.value ? (s(), P(tt, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((Le = xe.value) == null ? void 0 : Le.phase) === "READY" || ((nt = xe.value) == null ? void 0 : nt.phase) === "ERROR" || ((pt = xe.value) == null ? void 0 : pt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: ee
        }, Bt({
          body: l(() => {
            var fe, rt, _t, Ft, Vt, H, ve, $e, Ne, j, U, ge;
            return [
              e("div", sk, [
                e("div", ok, [
                  e("div", {
                    class: pe(["phase-icon", (rt = (fe = xe.value) == null ? void 0 : fe.phase) == null ? void 0 : rt.toLowerCase()])
                  }, [
                    ((_t = xe.value) == null ? void 0 : _t.phase) === "READY" ? (s(), o("span", nk, "✓")) : ((Ft = xe.value) == null ? void 0 : Ft.phase) === "ERROR" ? (s(), o("span", ak, "✕")) : ((Vt = xe.value) == null ? void 0 : Vt.phase) === "STOPPED" ? (s(), o("span", lk, "○")) : (s(), o("span", ik, "⟳"))
                  ], 2),
                  e("div", rk, [
                    e("div", dk, a(Ge((H = xe.value) == null ? void 0 : H.phase)), 1),
                    e("div", ck, a(((ve = xe.value) == null ? void 0 : ve.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                w(Ss, {
                  progress: vt(($e = xe.value) == null ? void 0 : $e.phase),
                  variant: ((Ne = xe.value) == null ? void 0 : Ne.phase) === "ERROR" ? "error" : ((j = xe.value) == null ? void 0 : j.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((U = xe.value) == null ? void 0 : U.phase) === "READY" ? (s(), o("div", uk, [
                  w(te, {
                    variant: "primary",
                    size: "md",
                    onClick: ke
                  }, {
                    default: l(() => [...B[53] || (B[53] = [
                      g(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : r("", !0),
                e("div", mk, [
                  (ge = xe.value) != null && ge.console_url ? (s(), o("a", {
                    key: 0,
                    href: xe.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, vk)) : r("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((It = xe.value) == null ? void 0 : It.phase) === "READY" || ((Et = xe.value) == null ? void 0 : Et.phase) === "ERROR" || ((gt = xe.value) == null ? void 0 : gt.phase) === "STOPPED" ? {
            name: "footer",
            fn: l(() => [
              w(te, {
                variant: "ghost",
                size: "sm",
                onClick: ee
              }, {
                default: l(() => [...B[54] || (B[54] = [
                  g(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : r("", !0)
      ], 64);
    };
  }
}), pk = /* @__PURE__ */ ae(fk, [["__scopeId", "data-v-7ee18d07"]]), gk = { class: "header-info" }, hk = { class: "commit-hash" }, yk = {
  key: 0,
  class: "commit-refs"
}, wk = { class: "commit-message" }, kk = { class: "commit-date" }, bk = {
  key: 0,
  class: "loading"
}, _k = {
  key: 1,
  class: "changes-section"
}, $k = { class: "stats-row" }, Ck = { class: "stat" }, xk = { class: "stat insertions" }, Sk = { class: "stat deletions" }, Ik = {
  key: 0,
  class: "change-group"
}, Ek = {
  key: 1,
  class: "change-group"
}, Pk = {
  key: 0,
  class: "version"
}, Mk = {
  key: 2,
  class: "change-group"
}, Rk = { class: "change-item" }, Tk = /* @__PURE__ */ oe({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = Ke(), i = h(null), f = h(!0), p = O(() => {
      if (!i.value) return !1;
      const m = i.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), u = O(() => {
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
    }), (m, d) => (s(), P(tt, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (v) => m.$emit("close"))
    }, {
      header: l(() => {
        var v, y, k, _;
        return [
          e("div", gk, [
            d[4] || (d[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", hk, a(((v = i.value) == null ? void 0 : v.short_hash) || t.commit.short_hash || ((y = t.commit.hash) == null ? void 0 : y.slice(0, 7))), 1),
            (_ = (k = i.value) == null ? void 0 : k.refs) != null && _.length ? (s(), o("span", yk, [
              (s(!0), o(W, null, ne(i.value.refs, (b) => (s(), o("span", {
                key: b,
                class: "ref-badge"
              }, a(b), 1))), 128))
            ])) : r("", !0)
          ]),
          w(he, {
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
        var v, y;
        return [
          e("div", wk, a(((v = i.value) == null ? void 0 : v.message) || t.commit.message), 1),
          e("div", kk, a(((y = i.value) == null ? void 0 : y.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          f.value ? (s(), o("div", bk, "Loading details...")) : i.value ? (s(), o("div", _k, [
            e("div", $k, [
              e("span", Ck, a(i.value.stats.files_changed) + " files", 1),
              e("span", xk, "+" + a(i.value.stats.insertions), 1),
              e("span", Sk, "-" + a(i.value.stats.deletions), 1)
            ]),
            p.value ? (s(), o("div", Ik, [
              w(es, { variant: "section" }, {
                default: l(() => [...d[6] || (d[6] = [
                  g("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(W, null, ne(i.value.changes.workflows.added, (k) => (s(), o("div", {
                key: "add-" + k,
                class: "change-item added"
              }, [
                d[7] || (d[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(k), 1)
              ]))), 128)),
              (s(!0), o(W, null, ne(i.value.changes.workflows.modified, (k) => (s(), o("div", {
                key: "mod-" + k,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(k), 1)
              ]))), 128)),
              (s(!0), o(W, null, ne(i.value.changes.workflows.deleted, (k) => (s(), o("div", {
                key: "del-" + k,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(k), 1)
              ]))), 128))
            ])) : r("", !0),
            u.value ? (s(), o("div", Ek, [
              w(es, { variant: "section" }, {
                default: l(() => [...d[10] || (d[10] = [
                  g("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(W, null, ne(i.value.changes.nodes.added, (k) => (s(), o("div", {
                key: "add-" + k.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(k.name), 1),
                k.version ? (s(), o("span", Pk, "(" + a(k.version) + ")", 1)) : r("", !0)
              ]))), 128)),
              (s(!0), o(W, null, ne(i.value.changes.nodes.removed, (k) => (s(), o("div", {
                key: "rem-" + k.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(k.name), 1)
              ]))), 128))
            ])) : r("", !0),
            i.value.changes.models.resolved > 0 ? (s(), o("div", Mk, [
              w(es, { variant: "section" }, {
                default: l(() => [...d[13] || (d[13] = [
                  g("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", Rk, [
                d[14] || (d[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : r("", !0)
          ])) : r("", !0)
        ];
      }),
      footer: l(() => [
        w(he, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (v) => m.$emit("createBranch", t.commit))
        }, {
          default: l(() => [...d[15] || (d[15] = [
            g(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        w(he, {
          variant: "primary",
          onClick: d[2] || (d[2] = (v) => m.$emit("checkout", t.commit))
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
}), Dk = /* @__PURE__ */ ae(Tk, [["__scopeId", "data-v-d256ff6d"]]), Lk = { class: "base-textarea-wrapper" }, zk = ["value", "rows", "placeholder", "disabled", "maxlength"], Uk = {
  key: 0,
  class: "base-textarea-count"
}, Nk = /* @__PURE__ */ oe({
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
    return (p, u) => (s(), o("div", Lk, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: u[0] || (u[0] = (m) => p.$emit("update:modelValue", m.target.value)),
        onKeydown: [
          u[1] || (u[1] = xt(Be((m) => p.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          u[2] || (u[2] = xt(Be((m) => p.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          xt(f, ["enter"])
        ]
      }, null, 40, zk),
      t.showCharCount && t.maxLength ? (s(), o("div", Uk, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : r("", !0)
    ]));
  }
}), Ns = /* @__PURE__ */ ae(Nk, [["__scopeId", "data-v-c6d16c93"]]), Ok = ["checked", "disabled"], Ak = { class: "base-checkbox-box" }, Bk = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Fk = {
  key: 0,
  class: "base-checkbox-label"
}, Vk = /* @__PURE__ */ oe({
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
      }, null, 40, Ok),
      e("span", Ak, [
        t.modelValue ? (s(), o("svg", Bk, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : r("", !0)
      ]),
      c.$slots.default ? (s(), o("span", Fk, [
        Re(c.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), Os = /* @__PURE__ */ ae(Vk, [["__scopeId", "data-v-bf17c831"]]), Wk = { class: "popover-header" }, Gk = { class: "popover-body" }, jk = {
  key: 0,
  class: "changes-summary"
}, Hk = {
  key: 0,
  class: "change-item"
}, Kk = {
  key: 1,
  class: "change-item"
}, qk = {
  key: 2,
  class: "change-item"
}, Yk = {
  key: 3,
  class: "change-item"
}, Jk = {
  key: 4,
  class: "change-item"
}, Xk = {
  key: 5,
  class: "change-item"
}, Qk = {
  key: 1,
  class: "no-changes"
}, Zk = {
  key: 2,
  class: "loading"
}, eb = {
  key: 3,
  class: "issues-error"
}, tb = { class: "error-header" }, sb = { class: "error-title" }, ob = { class: "issues-list" }, nb = { class: "message-section" }, ab = { class: "popover-footer" }, lb = {
  key: 1,
  class: "commit-popover"
}, ib = { class: "popover-header" }, rb = { class: "popover-body" }, db = {
  key: 0,
  class: "changes-summary"
}, cb = {
  key: 0,
  class: "change-item"
}, ub = {
  key: 1,
  class: "change-item"
}, mb = {
  key: 2,
  class: "change-item"
}, vb = {
  key: 3,
  class: "change-item"
}, fb = {
  key: 4,
  class: "change-item"
}, pb = {
  key: 5,
  class: "change-item"
}, gb = {
  key: 1,
  class: "no-changes"
}, hb = {
  key: 2,
  class: "loading"
}, yb = {
  key: 3,
  class: "issues-error"
}, wb = { class: "error-header" }, kb = { class: "error-title" }, bb = { class: "issues-list" }, _b = { class: "message-section" }, $b = { class: "popover-footer" }, Cb = /* @__PURE__ */ oe({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, i = c, { commit: f } = Ke(), p = h(""), u = h(!1), m = h(!1), d = O(() => {
      if (!n.status) return !1;
      const D = n.status.workflows;
      return D.new.length > 0 || D.modified.length > 0 || D.deleted.length > 0 || n.status.has_changes;
    }), v = O(() => {
      if (!n.status) return !1;
      const D = n.status.workflows, M = n.status.git_changes;
      return D.new.length > 0 || D.modified.length > 0 || D.deleted.length > 0 || M.nodes_added.length > 0 || M.nodes_removed.length > 0;
    }), y = O(() => {
      var D;
      return (D = n.status) != null && D.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (M) => M.has_issues && (M.sync_state === "new" || M.sync_state === "modified")
      ) : [];
    }), k = O(() => y.value.length > 0), _ = O(() => k.value && !m.value);
    async function b() {
      var D, M, $;
      if (!(k.value && !m.value) && !(!d.value || !p.value.trim() || u.value)) {
        u.value = !0;
        try {
          const C = await f(p.value.trim(), m.value);
          if (C.status === "success") {
            const A = `Committed: ${((D = C.summary) == null ? void 0 : D.new) || 0} new, ${((M = C.summary) == null ? void 0 : M.modified) || 0} modified, ${(($ = C.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            i("committed", { success: !0, message: A });
          } else C.status === "no_changes" ? i("committed", { success: !1, message: "No changes to commit" }) : C.status === "blocked" ? i("committed", { success: !1, message: 'Commit blocked - enable "Allow issues" to force commit' }) : i("committed", { success: !1, message: C.message || "Commit failed" });
        } catch (C) {
          i("committed", { success: !1, message: C instanceof Error ? C.message : "Commit failed" });
        } finally {
          u.value = !1;
        }
      }
    }
    return (D, M) => t.asModal ? (s(), P(Ye, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: M[5] || (M[5] = ($) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: M[4] || (M[4] = Be(() => {
          }, ["stop"]))
        }, [
          e("div", Wk, [
            M[11] || (M[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: M[0] || (M[0] = ($) => i("close"))
            }, [...M[10] || (M[10] = [
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
          e("div", Gk, [
            t.status && d.value ? (s(), o("div", jk, [
              t.status.workflows.new.length ? (s(), o("div", Hk, [
                M[12] || (M[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : r("", !0),
              t.status.workflows.modified.length ? (s(), o("div", Kk, [
                M[13] || (M[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : r("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", qk, [
                M[14] || (M[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", Yk, [
                M[15] || (M[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", Jk, [
                M[16] || (M[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : r("", !0),
              v.value ? r("", !0) : (s(), o("div", Xk, [...M[17] || (M[17] = [
                e("span", { class: "change-icon modified" }, "~", -1),
                e("span", null, "Configuration updated", -1)
              ])]))
            ])) : t.status ? (s(), o("div", Qk, " No changes to commit ")) : (s(), o("div", Zk, " Loading... ")),
            k.value ? (s(), o("div", eb, [
              e("div", tb, [
                M[18] || (M[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", sb, a(y.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", ob, [
                (s(!0), o(W, null, ne(y.value, ($) => (s(), o("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a($.name), 1),
                  g(": " + a($.issue_summary), 1)
                ]))), 128))
              ]),
              w(Os, {
                modelValue: m.value,
                "onUpdate:modelValue": M[1] || (M[1] = ($) => m.value = $),
                class: "allow-issues-toggle"
              }, {
                default: l(() => [...M[19] || (M[19] = [
                  g(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : r("", !0),
            e("div", nb, [
              w(Ns, {
                modelValue: p.value,
                "onUpdate:modelValue": M[2] || (M[2] = ($) => p.value = $),
                placeholder: _.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || u.value || _.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: b,
                onSubmit: b
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          e("div", ab, [
            w(he, {
              variant: "secondary",
              onClick: M[3] || (M[3] = ($) => i("close"))
            }, {
              default: l(() => [...M[20] || (M[20] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(he, {
              variant: m.value ? "danger" : "primary",
              disabled: !d.value || !p.value.trim() || u.value || _.value,
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
    ])) : (s(), o("div", lb, [
      e("div", ib, [
        M[22] || (M[22] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: M[6] || (M[6] = ($) => i("close"))
        }, [...M[21] || (M[21] = [
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
      e("div", rb, [
        t.status && d.value ? (s(), o("div", db, [
          t.status.workflows.new.length ? (s(), o("div", cb, [
            M[23] || (M[23] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : r("", !0),
          t.status.workflows.modified.length ? (s(), o("div", ub, [
            M[24] || (M[24] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : r("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", mb, [
            M[25] || (M[25] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", vb, [
            M[26] || (M[26] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", fb, [
            M[27] || (M[27] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : r("", !0),
          v.value ? r("", !0) : (s(), o("div", pb, [...M[28] || (M[28] = [
            e("span", { class: "change-icon modified" }, "~", -1),
            e("span", null, "Configuration updated", -1)
          ])]))
        ])) : t.status ? (s(), o("div", gb, " No changes to commit ")) : (s(), o("div", hb, " Loading... ")),
        k.value ? (s(), o("div", yb, [
          e("div", wb, [
            M[29] || (M[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", kb, a(y.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", bb, [
            (s(!0), o(W, null, ne(y.value, ($) => (s(), o("div", {
              key: $.name,
              class: "issue-item"
            }, [
              e("strong", null, a($.name), 1),
              g(": " + a($.issue_summary), 1)
            ]))), 128))
          ]),
          w(Os, {
            modelValue: m.value,
            "onUpdate:modelValue": M[7] || (M[7] = ($) => m.value = $),
            class: "allow-issues-toggle"
          }, {
            default: l(() => [...M[30] || (M[30] = [
              g(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : r("", !0),
        e("div", _b, [
          w(Ns, {
            modelValue: p.value,
            "onUpdate:modelValue": M[8] || (M[8] = ($) => p.value = $),
            placeholder: _.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || u.value || _.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: b,
            onSubmit: b
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      e("div", $b, [
        w(he, {
          variant: "secondary",
          onClick: M[9] || (M[9] = ($) => i("close"))
        }, {
          default: l(() => [...M[31] || (M[31] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        w(he, {
          variant: m.value ? "danger" : "primary",
          disabled: !d.value || !p.value.trim() || u.value || _.value,
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
}), to = /* @__PURE__ */ ae(Cb, [["__scopeId", "data-v-d0fe6172"]]), xb = { class: "modal-header" }, Sb = { class: "modal-body" }, Ib = { class: "switch-message" }, Eb = { class: "switch-details" }, Pb = { class: "modal-actions" }, Mb = /* @__PURE__ */ oe({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), P(Ye, { to: "body" }, [
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
          e("div", xb, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Sb, [
            e("p", Ib, [
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
            e("p", Eb, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Pb, [
            w(te, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(te, {
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
}), Rb = /* @__PURE__ */ ae(Mb, [["__scopeId", "data-v-e9c5253e"]]), Tb = {
  key: 0,
  class: "modal-overlay"
}, Db = { class: "modal-content" }, Lb = { class: "modal-body" }, zb = { class: "progress-info" }, Ub = { class: "progress-percentage" }, Nb = { class: "progress-state" }, Ob = { class: "switch-steps" }, Ab = { class: "step-icon" }, Bb = { class: "step-label" }, Fb = /* @__PURE__ */ oe({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, n = O(() => {
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
    }), i = O(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), f = O(() => {
      const p = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], u = p.findIndex((m) => m.state === c.state);
      return p.map((m, d) => {
        let v = "pending", y = "○";
        return d < u ? (v = "completed", y = "✓") : d === u && (v = "active", y = "⟳"), {
          ...m,
          status: v,
          icon: y
        };
      });
    });
    return (p, u) => (s(), P(Ye, { to: "body" }, [
      t.show ? (s(), o("div", Tb, [
        e("div", Db, [
          u[1] || (u[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Lb, [
            w(Ss, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", zb, [
              e("div", Ub, a(t.progress) + "%", 1),
              e("div", Nb, a(n.value), 1)
            ]),
            e("div", Ob, [
              (s(!0), o(W, null, ne(f.value, (m) => (s(), o("div", {
                key: m.state,
                class: pe(["switch-step", m.status])
              }, [
                e("span", Ab, a(m.icon), 1),
                e("span", Bb, a(m.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), Vb = /* @__PURE__ */ ae(Fb, [["__scopeId", "data-v-768a5078"]]), Wb = { class: "modal-header" }, Gb = { class: "modal-body" }, jb = {
  key: 0,
  class: "node-section"
}, Hb = { class: "node-list" }, Kb = {
  key: 1,
  class: "node-section"
}, qb = { class: "node-list" }, Yb = { class: "modal-actions" }, Jb = /* @__PURE__ */ oe({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), P(Ye, { to: "body" }, [
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
          e("div", Wb, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Gb, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", jb, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Hb, [
                (s(!0), o(W, null, ne(t.mismatchDetails.missing_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + a(i), 1))), 128))
              ])
            ])) : r("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", Kb, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", qb, [
                (s(!0), o(W, null, ne(t.mismatchDetails.extra_nodes, (i) => (s(), o("div", {
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
          e("div", Yb, [
            w(te, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[10] || (n[10] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(te, {
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
}), Xb = /* @__PURE__ */ ae(Jb, [["__scopeId", "data-v-7cad7518"]]), Qb = [
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
], Zb = "v0.0.4", e_ = "Akatz", t_ = { class: "social-buttons" }, s_ = ["title", "aria-label", "onClick"], o_ = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, n_ = ["d"], a_ = ["title", "aria-label", "onClick"], l_ = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, i_ = ["d"], r_ = /* @__PURE__ */ oe({
  __name: "SocialButtons",
  setup(t) {
    function c(n) {
      window.open(n, "_blank", "noopener,noreferrer");
    }
    return (n, i) => (s(), o("div", t_, [
      (s(!0), o(W, null, ne(Ie(Qb), (f) => (s(), o(W, {
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
          (s(), o("svg", o_, [
            e("path", {
              d: f.iconPath
            }, null, 8, n_)
          ]))
        ], 8, s_)) : (s(), o("button", {
          key: 1,
          class: "icon-btn social-link",
          title: f.title,
          "aria-label": f.ariaLabel,
          onClick: (p) => c(f.url)
        }, [
          (s(), o("svg", l_, [
            e("path", {
              d: f.iconPath
            }, null, 8, i_)
          ]))
        ], 8, a_))
      ], 64))), 128))
    ]));
  }
}), so = /* @__PURE__ */ ae(r_, [["__scopeId", "data-v-4f846342"]]), d_ = { class: "footer-info" }, c_ = { class: "version" }, u_ = { class: "made-by" }, m_ = /* @__PURE__ */ oe({
  __name: "FooterInfo",
  setup(t) {
    return (c, n) => (s(), o("div", d_, [
      e("span", c_, a(Ie(Zb)), 1),
      e("span", u_, [
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
        g(" by " + a(Ie(e_)), 1)
      ])
    ]));
  }
}), oo = /* @__PURE__ */ ae(m_, [["__scopeId", "data-v-8bc3db0a"]]), v_ = /* @__PURE__ */ oe({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = h(null);
    async function i() {
      var p;
      await ((p = n.value) == null ? void 0 : p.saveSettings());
    }
    function f() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (p, u) => (s(), P(tt, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: u[1] || (u[1] = (m) => p.$emit("close"))
    }, {
      body: l(() => [
        w(Js, {
          ref_key: "contentRef",
          ref: n,
          "workspace-path": t.workspacePath,
          onSaved: f
        }, null, 8, ["workspace-path"])
      ]),
      footer: l(() => {
        var m;
        return [
          w(he, {
            variant: "primary",
            disabled: !((m = n.value) != null && m.hasChanges),
            onClick: i
          }, {
            default: l(() => [...u[2] || (u[2] = [
              g(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          w(he, {
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
}), f_ = /* @__PURE__ */ ae(v_, [["__scopeId", "data-v-fac00ae7"]]), p_ = { class: "header-actions" }, g_ = {
  key: 0,
  class: "wizard-step"
}, h_ = { class: "form-field" }, y_ = ["placeholder"], w_ = {
  key: 0,
  class: "form-error"
}, k_ = { class: "form-field form-field--checkbox" }, b_ = { class: "form-checkbox" }, __ = {
  key: 0,
  class: "form-field"
}, $_ = ["placeholder"], C_ = {
  key: 0,
  class: "form-info"
}, x_ = {
  key: 1,
  class: "form-suggestion"
}, S_ = {
  key: 2,
  class: "form-error"
}, I_ = {
  key: 3,
  class: "form-info"
}, E_ = {
  key: 1,
  class: "wizard-step"
}, P_ = {
  key: 0,
  class: "progress-check-loading"
}, M_ = {
  key: 0,
  class: "cli-warning"
}, R_ = { class: "cli-warning-header" }, T_ = {
  key: 1,
  class: "env-landing"
}, D_ = { class: "env-list" }, L_ = ["value"], z_ = { class: "env-name" }, U_ = {
  key: 2,
  class: "env-create"
}, N_ = { class: "form-field" }, O_ = { class: "form-field" }, A_ = ["value"], B_ = { class: "form-field" }, F_ = ["disabled"], V_ = ["value"], W_ = { class: "form-field" }, G_ = ["value"], j_ = { class: "form-field form-field--checkbox" }, H_ = { class: "form-checkbox" }, K_ = {
  key: 0,
  class: "form-error"
}, q_ = {
  key: 1,
  class: "env-creating"
}, Y_ = { class: "creating-intro" }, J_ = {
  key: 3,
  class: "env-import"
}, X_ = { class: "wizard-footer" }, Q_ = { class: "wizard-footer-actions" }, Wt = 10, Z_ = 600 * 1e3, As = 1800 * 1e3, e2 = /* @__PURE__ */ oe({
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
      createEnvironment: m,
      getCreateProgress: d,
      getImportProgress: v,
      getComfyUIReleases: y
    } = Ke(), k = h(n.initialStep || 1), _ = h(null), b = h("landing"), D = h(!1), M = h(!1), $ = h(!1), C = h(!1), A = h(null), x = h(n.initialStep === 2), R = h(n.defaultPath), Y = h(!!n.detectedModelsDir), F = h(n.detectedModelsDir || ""), G = h(null), S = h(null), T = h(null), N = h(null), ie = h("my-new-env"), se = h(Qs), J = h("latest"), ue = h(Zs), X = h(!0), z = h(null), L = h(null), I = h([{ tag_name: "latest", name: "Latest", published_at: "" }]), ce = h(!1), Q = h(!1), be = h(!1), Ce = h({ progress: 0, message: "" }), Te = h({ progress: 0, message: "" }), Oe = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], re = h(0), ye = h(null), Pe = h(0), Z = h(null), le = O(() => {
      var E, V;
      const me = (E = R.value) == null ? void 0 : E.trim(), K = !G.value, q = !Y.value || !S.value && ((V = F.value) == null ? void 0 : V.trim());
      return me && K && q;
    }), we = O(() => {
      var me;
      return (me = ie.value) == null ? void 0 : me.trim();
    }), xe = O(() => !!(k.value === 2 || L.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), Je = O(() => L.value || n.workspacePath || null);
    async function at() {
      var me;
      if (G.value = null, !!((me = R.value) != null && me.trim()))
        try {
          const K = await u({ path: R.value, type: "workspace" });
          K.valid || (G.value = K.error || "Invalid path");
        } catch (K) {
          G.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function Me() {
      var me;
      if (S.value = null, T.value = null, N.value = null, !!((me = F.value) != null && me.trim()))
        try {
          const K = await u({ path: F.value, type: "models" });
          if (K.valid)
            N.value = K.model_count ?? null;
          else if (S.value = K.error || "Invalid path", K.suggestion) {
            T.value = K.suggestion, F.value = K.suggestion, S.value = null;
            const q = await u({ path: K.suggestion, type: "models" });
            q.valid && (N.value = q.model_count ?? null);
          }
        } catch (K) {
          S.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function st() {
      var me, K, q, E, V;
      if (G.value = null, S.value = null, await at(), (me = G.value) != null && me.includes("already exists")) {
        G.value = null, L.value = ((K = R.value) == null ? void 0 : K.trim()) || n.defaultPath, k.value = 2, Fe();
        return;
      }
      if (!G.value && !(Y.value && ((q = F.value) != null && q.trim()) && (await Me(), S.value))) {
        Q.value = !0;
        try {
          await f({
            workspace_path: ((E = R.value) == null ? void 0 : E.trim()) || n.defaultPath,
            models_directory: Y.value && ((V = F.value) == null ? void 0 : V.trim()) || null
          }), re.value = 0, ye.value = Date.now();
          const ee = setInterval(async () => {
            var ke;
            if (ye.value && Date.now() - ye.value > Z_) {
              clearInterval(ee), Q.value = !1, G.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Ge = await p();
              if (re.value = 0, Ge.state === "idle" && Q.value) {
                clearInterval(ee), Q.value = !1, G.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Ce.value = { progress: Ge.progress, message: Ge.message }, Ge.state === "complete" ? (clearInterval(ee), Q.value = !1, L.value = ((ke = R.value) == null ? void 0 : ke.trim()) || n.defaultPath, k.value = 2, Fe()) : Ge.state === "error" && (clearInterval(ee), Q.value = !1, G.value = Ge.error || "Workspace creation failed");
            } catch (Ge) {
              re.value++, console.warn(`Polling failure ${re.value}/${Wt}:`, Ge), re.value >= Wt && (clearInterval(ee), Q.value = !1, G.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (ee) {
          Q.value = !1, G.value = ee instanceof Error ? ee.message : "Failed to create workspace";
        }
      }
    }
    async function qe() {
      be.value = !0, z.value = null;
      try {
        const me = {
          name: ie.value.trim() || "my-new-env",
          python_version: se.value,
          comfyui_version: J.value,
          torch_backend: ue.value,
          switch_after: X.value,
          workspace_path: L.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await m(me)).status === "started") {
          Pe.value = 0, Z.value = Date.now();
          const q = setInterval(async () => {
            if (Z.value && Date.now() - Z.value > As) {
              clearInterval(q), be.value = !1, z.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const E = await d();
              if (Pe.value = 0, E.state === "idle" && be.value) {
                clearInterval(q), be.value = !1, z.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Te.value = {
                progress: E.progress ?? 0,
                message: E.message,
                phase: E.phase
              }, E.state === "complete") {
                clearInterval(q), be.value = !1;
                const V = E.environment_name || me.name;
                X.value ? i("complete", V, L.value) : (b.value = "landing", i("environment-created-no-switch", V));
              } else E.state === "error" && (clearInterval(q), be.value = !1, z.value = E.error || "Environment creation failed");
            } catch (E) {
              Pe.value++, console.warn(`Polling failure ${Pe.value}/${Wt}:`, E), Pe.value >= Wt && (clearInterval(q), be.value = !1, z.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (me) {
        be.value = !1, z.value = me instanceof Error ? me.message : "Unknown error";
      }
    }
    async function Fe() {
      ce.value = !0;
      try {
        I.value = await y();
      } catch (me) {
        console.error("Failed to load ComfyUI releases:", me);
      } finally {
        ce.value = !1;
      }
    }
    function ct() {
      _.value && i("switch-environment", _.value, L.value);
    }
    function _e() {
      b.value === "create" || b.value === "import" ? b.value = "landing" : k.value === 2 && n.setupState === "no_workspace" && (k.value = 1);
    }
    function He(me, K) {
      M.value = !1, K ? i("complete", me, L.value) : (i("environment-created-no-switch", me), b.value = "landing");
    }
    function lt() {
    }
    We(async () => {
      if (n.detectedModelsDir && (F.value = n.detectedModelsDir), n.workspacePath && (L.value = n.workspacePath), k.value === 2) {
        Fe();
        const me = setTimeout(() => {
          x.value = !1;
        }, 3e3);
        await ot(), clearTimeout(me), x.value = !1;
      }
    });
    async function ot() {
      try {
        const me = await d();
        if (console.log("[ComfyGit] Create progress check:", me.state, me), me.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", me.environment_name), b.value = "create", be.value = !0, ie.value = me.environment_name || "my-new-env", Te.value = {
            progress: me.progress ?? 0,
            message: me.message,
            phase: me.phase
          }, Ue();
          return;
        }
      } catch (me) {
        console.log("[ComfyGit] Create progress check failed:", me);
      }
      try {
        const me = await v();
        console.log("[ComfyGit] Import progress check:", me.state, me), me.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", me.environment_name), A.value = {
          message: me.message || "Importing...",
          phase: me.phase || "",
          progress: me.progress ?? 0,
          environmentName: me.environment_name || ""
        }, C.value = !0, b.value = "import", M.value = !0);
      } catch (me) {
        console.log("[ComfyGit] Import progress check failed:", me);
      }
    }
    async function Ue() {
      Pe.value = 0, Z.value = Date.now();
      let me = null;
      const K = async () => {
        if (Z.value && Date.now() - Z.value > As)
          return me && clearInterval(me), be.value = !1, z.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const E = await d();
          if (Pe.value = 0, E.state === "idle" && be.value)
            return me && clearInterval(me), be.value = !1, z.value = "Environment creation was interrupted. Please try again.", !1;
          if (Te.value = {
            progress: E.progress ?? 0,
            message: E.message,
            phase: E.phase
          }, E.state === "complete") {
            me && clearInterval(me), be.value = !1;
            const V = E.environment_name || ie.value;
            return i("complete", V, L.value), !1;
          } else if (E.state === "error")
            return me && clearInterval(me), be.value = !1, z.value = E.error || "Environment creation failed", !1;
          return !0;
        } catch (E) {
          return Pe.value++, console.warn(`Polling failure ${Pe.value}/${Wt}:`, E), Pe.value >= Wt ? (me && clearInterval(me), be.value = !1, z.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await K() && (me = setInterval(async () => {
        !await K() && me && clearInterval(me);
      }, 2e3));
    }
    return (me, K) => (s(), o(W, null, [
      w(tt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: K[15] || (K[15] = (q) => me.$emit("close"))
      }, {
        header: l(() => [
          K[20] || (K[20] = e("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          e("div", p_, [
            w(so),
            K[19] || (K[19] = e("span", { class: "header-divider" }, null, -1)),
            xe.value ? (s(), o("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: K[0] || (K[0] = (q) => D.value = !0)
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
              onClick: K[1] || (K[1] = (q) => me.$emit("close")),
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
          var q;
          return [
            k.value === 1 ? (s(), o("div", g_, [
              K[24] || (K[24] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              e("div", h_, [
                K[21] || (K[21] = e("label", { class: "form-label" }, "Workspace Path", -1)),
                ze(e("input", {
                  "onUpdate:modelValue": K[2] || (K[2] = (E) => R.value = E),
                  type: "text",
                  class: "form-input",
                  placeholder: t.defaultPath
                }, null, 8, y_), [
                  [Ot, R.value]
                ]),
                G.value ? (s(), o("p", w_, a(G.value), 1)) : r("", !0)
              ]),
              e("div", k_, [
                e("label", b_, [
                  ze(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": K[3] || (K[3] = (E) => Y.value = E)
                  }, null, 512), [
                    [is, Y.value]
                  ]),
                  K[22] || (K[22] = e("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              Y.value ? (s(), o("div", __, [
                K[23] || (K[23] = e("label", { class: "form-label" }, "Models Directory", -1)),
                ze(e("input", {
                  "onUpdate:modelValue": K[4] || (K[4] = (E) => F.value = E),
                  type: "text",
                  class: "form-input",
                  placeholder: t.detectedModelsDir || "/path/to/models"
                }, null, 8, $_), [
                  [Ot, F.value]
                ]),
                t.detectedModelsDir && !F.value ? (s(), o("p", C_, " Detected: " + a(t.detectedModelsDir), 1)) : r("", !0),
                T.value ? (s(), o("p", x_, " Did you mean: " + a(T.value), 1)) : r("", !0),
                S.value ? (s(), o("p", S_, a(S.value), 1)) : r("", !0),
                N.value !== null && !S.value ? (s(), o("p", I_, " Found " + a(N.value) + " model files ", 1)) : r("", !0)
              ])) : r("", !0),
              Q.value ? (s(), P(cs, {
                key: 1,
                progress: Ce.value.progress,
                message: Ce.value.message
              }, null, 8, ["progress", "message"])) : r("", !0)
            ])) : r("", !0),
            k.value === 2 ? (s(), o("div", E_, [
              x.value ? (s(), o("div", P_, [...K[25] || (K[25] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (s(), o(W, { key: 1 }, [
                !n.cliInstalled && !$.value ? (s(), o("div", M_, [
                  e("div", R_, [
                    K[27] || (K[27] = e("span", { class: "cli-warning-icon" }, "!", -1)),
                    K[28] || (K[28] = e("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    e("button", {
                      class: "cli-warning-close",
                      onClick: K[5] || (K[5] = (E) => $.value = !0),
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
                b.value === "landing" ? (s(), o("div", T_, [
                  K[34] || (K[34] = e("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  e("button", {
                    class: "landing-option",
                    onClick: K[6] || (K[6] = (E) => b.value = "create")
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
                    onClick: K[7] || (K[7] = (E) => {
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
                  (q = n.existingEnvironments) != null && q.length ? (s(), o(W, { key: 0 }, [
                    K[33] || (K[33] = e("div", { class: "landing-divider" }, [
                      e("span", null, "or switch to existing")
                    ], -1)),
                    e("div", D_, [
                      (s(!0), o(W, null, ne(n.existingEnvironments, (E) => (s(), o("label", {
                        key: E,
                        class: pe(["env-option", { selected: _.value === E }])
                      }, [
                        ze(e("input", {
                          type: "radio",
                          name: "env-select",
                          value: E,
                          "onUpdate:modelValue": K[8] || (K[8] = (V) => _.value = V)
                        }, null, 8, L_), [
                          [Nt, _.value]
                        ]),
                        e("span", z_, a(E), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : r("", !0)
                ])) : b.value === "create" ? (s(), o("div", U_, [
                  be.value ? (s(), o("div", q_, [
                    e("p", Y_, [
                      K[41] || (K[41] = g(" Creating environment ", -1)),
                      e("strong", null, a(ie.value), 1),
                      K[42] || (K[42] = g("... ", -1))
                    ]),
                    w(cs, {
                      progress: Te.value.progress,
                      message: Te.value.message,
                      "current-phase": Te.value.phase,
                      "show-steps": !0,
                      steps: Oe
                    }, null, 8, ["progress", "message", "current-phase"]),
                    K[43] || (K[43] = e("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (s(), o(W, { key: 0 }, [
                    K[40] || (K[40] = e("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    e("div", N_, [
                      K[35] || (K[35] = e("label", { class: "form-label" }, "Environment Name", -1)),
                      ze(e("input", {
                        "onUpdate:modelValue": K[9] || (K[9] = (E) => ie.value = E),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Ot, ie.value]
                      ])
                    ]),
                    e("div", O_, [
                      K[36] || (K[36] = e("label", { class: "form-label" }, "Python Version", -1)),
                      ze(e("select", {
                        "onUpdate:modelValue": K[10] || (K[10] = (E) => se.value = E),
                        class: "form-select"
                      }, [
                        (s(!0), o(W, null, ne(Ie(Xs), (E) => (s(), o("option", {
                          key: E,
                          value: E
                        }, a(E), 9, A_))), 128))
                      ], 512), [
                        [Mt, se.value]
                      ])
                    ]),
                    e("div", B_, [
                      K[37] || (K[37] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      ze(e("select", {
                        "onUpdate:modelValue": K[11] || (K[11] = (E) => J.value = E),
                        class: "form-select",
                        disabled: ce.value
                      }, [
                        (s(!0), o(W, null, ne(I.value, (E) => (s(), o("option", {
                          key: E.tag_name,
                          value: E.tag_name
                        }, a(E.name), 9, V_))), 128))
                      ], 8, F_), [
                        [Mt, J.value]
                      ])
                    ]),
                    e("div", W_, [
                      K[38] || (K[38] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      ze(e("select", {
                        "onUpdate:modelValue": K[12] || (K[12] = (E) => ue.value = E),
                        class: "form-select"
                      }, [
                        (s(!0), o(W, null, ne(Ie(xs), (E) => (s(), o("option", {
                          key: E,
                          value: E
                        }, a(E) + a(E === "auto" ? " (detect GPU)" : ""), 9, G_))), 128))
                      ], 512), [
                        [Mt, ue.value]
                      ])
                    ]),
                    e("div", j_, [
                      e("label", H_, [
                        ze(e("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": K[13] || (K[13] = (E) => X.value = E)
                        }, null, 512), [
                          [is, X.value]
                        ]),
                        K[39] || (K[39] = e("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    z.value ? (s(), o("div", K_, a(z.value), 1)) : r("", !0)
                  ], 64))
                ])) : b.value === "import" ? (s(), o("div", J_, [
                  w(eo, {
                    "workspace-path": L.value,
                    "resume-import": C.value,
                    "initial-progress": A.value ?? void 0,
                    onImportComplete: He,
                    onImportStarted: K[14] || (K[14] = (E) => M.value = !0),
                    onSourceCleared: lt
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : r("", !0)
              ], 64))
            ])) : r("", !0)
          ];
        }),
        footer: l(() => [
          e("div", X_, [
            w(oo),
            e("div", Q_, [
              k.value === 1 ? (s(), P(he, {
                key: 0,
                variant: "primary",
                disabled: !le.value || Q.value,
                onClick: st
              }, {
                default: l(() => [
                  g(a(Q.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : k.value === 2 ? (s(), o(W, { key: 1 }, [
                !be.value && !M.value && (b.value !== "landing" || n.setupState === "no_workspace" && !L.value) ? (s(), P(he, {
                  key: 0,
                  variant: "secondary",
                  onClick: _e
                }, {
                  default: l(() => [...K[44] || (K[44] = [
                    g(" Back ", -1)
                  ])]),
                  _: 1
                })) : r("", !0),
                b.value === "create" ? (s(), P(he, {
                  key: 1,
                  variant: "primary",
                  disabled: !we.value || be.value,
                  onClick: qe
                }, {
                  default: l(() => [
                    g(a(be.value ? "Creating..." : X.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : r("", !0),
                b.value === "landing" && _.value ? (s(), P(he, {
                  key: 2,
                  variant: "primary",
                  onClick: ct
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
      D.value ? (s(), P(f_, {
        key: 0,
        "workspace-path": Je.value,
        onClose: K[16] || (K[16] = (q) => D.value = !1)
      }, null, 8, ["workspace-path"])) : r("", !0)
    ], 64));
  }
}), t2 = /* @__PURE__ */ ae(e2, [["__scopeId", "data-v-9a9aadc0"]]), s2 = { class: "comfygit-panel" }, o2 = { class: "panel-header" }, n2 = { class: "header-left" }, a2 = {
  key: 0,
  class: "header-info"
}, l2 = { class: "header-actions" }, i2 = { class: "env-switcher" }, r2 = {
  key: 0,
  class: "header-info"
}, d2 = { class: "branch-name" }, c2 = { class: "panel-main" }, u2 = { class: "sidebar" }, m2 = { class: "sidebar-content" }, v2 = { class: "sidebar-section" }, f2 = { class: "sidebar-section" }, p2 = { class: "sidebar-section" }, g2 = { class: "sidebar-footer" }, h2 = { class: "content-area" }, y2 = {
  key: 0,
  class: "error-message"
}, w2 = {
  key: 1,
  class: "loading"
}, k2 = { class: "dialog-content env-selector-dialog" }, b2 = { class: "dialog-header" }, _2 = { class: "dialog-body" }, $2 = { class: "env-list" }, C2 = { class: "env-info" }, x2 = { class: "env-name-row" }, S2 = { class: "env-indicator" }, I2 = { class: "env-name" }, E2 = {
  key: 0,
  class: "env-branch"
}, P2 = {
  key: 1,
  class: "current-label"
}, M2 = { class: "env-stats" }, R2 = ["onClick"], T2 = { class: "toast-container" }, D2 = { class: "toast-message" }, L2 = /* @__PURE__ */ oe({
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
      checkout: m,
      createBranch: d,
      switchBranch: v,
      deleteBranch: y,
      getEnvironments: k,
      switchEnvironment: _,
      getSwitchProgress: b,
      deleteEnvironment: D,
      syncEnvironmentManually: M,
      repairWorkflowModels: $,
      getSetupStatus: C
    } = Ke(), A = Gs(), x = h(null), R = h([]), Y = h([]), F = h([]), G = O(() => F.value.find((j) => j.is_current)), S = h(null), T = h(!1), N = h(1), ie = O(() => {
      var j;
      return ((j = S.value) == null ? void 0 : j.state) || "managed";
    }), se = h(!1), J = h(null), ue = h(null), X = h(!1), z = h(null), L = h(null), I = h(null), ce = h(!1), Q = h(!1), be = h(""), Ce = h(null), Te = h({ state: "idle", progress: 0, message: "" });
    let Oe = null, re = null;
    const ye = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, Pe = n.initialView ? ye[n.initialView] : null, Z = h((Pe == null ? void 0 : Pe.view) ?? "status"), le = h((Pe == null ? void 0 : Pe.section) ?? "this-env");
    function we(j, U) {
      Z.value = j, le.value = U;
    }
    function xe(j) {
      const ge = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[j];
      ge && we(ge.view, ge.section);
    }
    function Je() {
      we("branches", "this-env");
    }
    function at() {
      i("close"), setTimeout(() => {
        var U;
        const j = document.querySelectorAll("button.comfyui-button");
        for (const ge of j)
          if (((U = ge.textContent) == null ? void 0 : U.trim()) === "Manager") {
            ge.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const Me = h(null), st = h(!1), qe = h(!1), Fe = h([]);
    let ct = 0;
    function _e(j, U = "info", ge = 3e3) {
      const Ee = ++ct;
      return Fe.value.push({ id: Ee, message: j, type: U }), ge > 0 && setTimeout(() => {
        Fe.value = Fe.value.filter((je) => je.id !== Ee);
      }, ge), Ee;
    }
    function He(j) {
      Fe.value = Fe.value.filter((U) => U.id !== j);
    }
    function lt(j, U) {
      _e(j, U);
    }
    const ot = O(() => {
      if (!x.value) return "neutral";
      const j = x.value.workflows, U = j.new.length > 0 || j.modified.length > 0 || j.deleted.length > 0 || x.value.has_changes;
      return x.value.comparison.is_synced ? U ? "warning" : "success" : "error";
    });
    O(() => x.value ? ot.value === "success" ? "All synced" : ot.value === "warning" ? "Uncommitted changes" : ot.value === "error" ? "Not synced" : "" : "");
    async function Ue() {
      se.value = !0, J.value = null;
      try {
        const [j, U, ge, Ee] = await Promise.all([
          f(!0),
          p(),
          u(),
          k()
        ]);
        x.value = j, R.value = U.commits, Y.value = ge.branches, F.value = Ee, i("statusUpdate", j), z.value && await z.value.loadWorkflows(!0);
      } catch (j) {
        J.value = j instanceof Error ? j.message : "Failed to load status", x.value = null, R.value = [], Y.value = [];
      } finally {
        se.value = !1;
      }
    }
    function me(j) {
      ue.value = j;
    }
    async function K(j) {
      var ge;
      ue.value = null;
      const U = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      Me.value = {
        title: U ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: U ? "You have uncommitted changes that will be lost." : `Checkout commit ${j.short_hash || ((ge = j.hash) == null ? void 0 : ge.slice(0, 7))}?`,
        details: U ? Ne() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: U ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: U,
        onConfirm: async () => {
          var Xe;
          Me.value = null, ke();
          const Ee = _e(`Checking out ${j.short_hash || ((Xe = j.hash) == null ? void 0 : Xe.slice(0, 7))}...`, "info", 0), je = await m(j.hash, U);
          He(Ee), je.status === "success" ? _e("Restarting ComfyUI...", "success") : _e(je.message || "Checkout failed", "error");
        }
      };
    }
    async function q(j) {
      const U = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      Me.value = {
        title: U ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: U ? "You have uncommitted changes." : `Switch to branch "${j}"?`,
        details: U ? Ne() : void 0,
        warning: U ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: U ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Me.value = null, ke();
          const ge = _e(`Switching to ${j}...`, "info", 0), Ee = await v(j, U);
          He(ge), Ee.status === "success" ? _e("Restarting ComfyUI...", "success") : _e(Ee.message || "Branch switch failed", "error");
        }
      };
    }
    async function E(j) {
      const U = _e(`Creating branch ${j}...`, "info", 0), ge = await d(j);
      He(U), ge.status === "success" ? (_e(`Branch "${j}" created`, "success"), await Ue()) : _e(ge.message || "Failed to create branch", "error");
    }
    async function V(j, U = !1) {
      const ge = async (Ee) => {
        var Xe;
        const je = _e(`Deleting branch ${j}...`, "info", 0);
        try {
          const Pt = await y(j, Ee);
          He(je), Pt.status === "success" ? (_e(`Branch "${j}" deleted`, "success"), await Ue()) : (Xe = Pt.message) != null && Xe.includes("not fully merged") ? Me.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${j}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Me.value = null, await ge(!0);
            }
          } : _e(Pt.message || "Failed to delete branch", "error");
        } catch (Pt) {
          He(je);
          const qt = Pt instanceof Error ? Pt.message : "Failed to delete branch";
          qt.includes("not fully merged") ? Me.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${j}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Me.value = null, await ge(!0);
            }
          } : _e(qt, "error");
        }
      };
      Me.value = {
        title: "Delete Branch",
        message: `Delete branch "${j}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Me.value = null, await ge(U);
        }
      };
    }
    async function ee(j) {
      ue.value = null;
      const U = prompt("Enter branch name:");
      if (U) {
        const ge = _e(`Creating branch ${U}...`, "info", 0), Ee = await d(U, j.hash);
        He(ge), Ee.status === "success" ? (_e(`Branch "${U}" created from ${j.short_hash}`, "success"), await Ue()) : _e(Ee.message || "Failed to create branch", "error");
      }
    }
    function ke() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Ge() {
      Me.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var j;
          Me.value = null, ke(), _e("Restarting environment...", "info");
          try {
            (j = window.app) != null && j.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function vt() {
      Me.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var j;
          Me.value = null, _e("Stopping environment...", "info");
          try {
            (j = window.app) != null && j.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function it(j, U) {
      X.value = !1, be.value = j, Ce.value = U || null, ce.value = !0;
    }
    async function Lt() {
      ce.value = !1, Q.value = !0, ke(), Te.value = {
        progress: 10,
        state: ft(10),
        message: zt(10)
      };
      try {
        await _(be.value, Ce.value || void 0), Kt(), B();
      } catch (j) {
        de(), Q.value = !1, _e(`Failed to initiate switch: ${j instanceof Error ? j.message : "Unknown error"}`, "error"), Te.value = { state: "idle", progress: 0, message: "" }, Ce.value = null;
      }
    }
    function ft(j) {
      return j >= 100 ? "complete" : j >= 80 ? "validating" : j >= 60 ? "starting" : j >= 30 ? "syncing" : "preparing";
    }
    function zt(j) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[ft(j)] || "";
    }
    function Kt() {
      if (re) return;
      let j = 10;
      const U = 60, ge = 5e3, Ee = 100, je = (U - j) / (ge / Ee);
      re = window.setInterval(() => {
        if (j += je, j >= U && (j = U, de()), Te.value.progress < U) {
          const Xe = Math.floor(j);
          Te.value = {
            progress: Xe,
            state: ft(Xe),
            message: zt(Xe)
          };
        }
      }, Ee);
    }
    function de() {
      re && (clearInterval(re), re = null);
    }
    function B() {
      Oe || (Oe = window.setInterval(async () => {
        try {
          let j = await A.getStatus();
          if ((!j || j.state === "idle") && (j = await b()), !j)
            return;
          const U = j.progress || 0;
          U >= 60 && de();
          const ge = Math.max(U, Te.value.progress), Ee = j.state && j.state !== "idle" && j.state !== "unknown", je = Ee ? j.state : ft(ge), Xe = Ee && j.message || zt(ge);
          Te.value = {
            state: je,
            progress: ge,
            message: Xe
          }, j.state === "complete" ? (de(), Le(), Q.value = !1, _e(`✓ Switched to ${be.value}`, "success"), await Ue(), be.value = "") : j.state === "rolled_back" ? (de(), Le(), Q.value = !1, _e("Switch failed, restored previous environment", "warning"), be.value = "") : j.state === "critical_failure" && (de(), Le(), Q.value = !1, _e(`Critical error during switch: ${j.message}`, "error"), be.value = "");
        } catch (j) {
          console.error("Failed to poll switch progress:", j);
        }
      }, 1e3));
    }
    function Le() {
      de(), Oe && (clearInterval(Oe), Oe = null);
    }
    function nt() {
      var j;
      ce.value = !1, be.value = "", (j = S.value) != null && j.state && S.value.state !== "managed" && (N.value = S.value.state === "no_workspace" ? 1 : 2, T.value = !0);
    }
    async function pt(j) {
      st.value = !1, await Ue(), _e(j.message, j.success ? "success" : "error");
    }
    async function It() {
      qe.value = !1;
      const j = _e("Syncing environment...", "info", 0);
      try {
        const U = await M("skip", !0);
        if (He(j), U.status === "success") {
          const ge = [];
          U.nodes_installed.length && ge.push(`${U.nodes_installed.length} installed`), U.nodes_removed.length && ge.push(`${U.nodes_removed.length} removed`);
          const Ee = ge.length ? `: ${ge.join(", ")}` : "";
          _e(`✓ Environment synced${Ee}`, "success"), await Ue();
        } else {
          const ge = U.errors.length ? U.errors.join("; ") : U.message;
          _e(`Sync failed: ${ge}`, "error");
        }
      } catch (U) {
        He(j), _e(`Sync error: ${U instanceof Error ? U.message : "Unknown error"}`, "error");
      }
    }
    async function Et(j) {
      var U;
      try {
        const ge = await $(j);
        ge.failed.length === 0 ? _e(`✓ Repaired ${ge.success} workflow${ge.success === 1 ? "" : "s"}`, "success") : _e(`Repaired ${ge.success}, failed: ${ge.failed.length}`, "warning"), await Ue();
      } catch (ge) {
        _e(`Repair failed: ${ge instanceof Error ? ge.message : "Unknown error"}`, "error");
      } finally {
        (U = I.value) == null || U.resetRepairingState();
      }
    }
    async function gt() {
      var U, ge;
      const j = _e("Repairing environment...", "info", 0);
      try {
        const Ee = await M("skip", !0);
        if (He(j), Ee.status === "success") {
          const je = [];
          Ee.nodes_installed.length && je.push(`${Ee.nodes_installed.length} installed`), Ee.nodes_removed.length && je.push(`${Ee.nodes_removed.length} removed`);
          const Xe = je.length ? `: ${je.join(", ")}` : "";
          _e(`✓ Environment repaired${Xe}`, "success"), (U = I.value) == null || U.closeDetailModal(), await Ue();
        } else {
          const je = Ee.errors.length ? Ee.errors.join(", ") : Ee.message || "Unknown error";
          _e(`Repair failed: ${je}`, "error");
        }
      } catch (Ee) {
        He(j), _e(`Repair error: ${Ee instanceof Error ? Ee.message : "Unknown error"}`, "error");
      } finally {
        (ge = I.value) == null || ge.resetRepairingEnvironmentState();
      }
    }
    async function fe(j, U) {
      _e(`Environment '${j}' created`, "success"), await Ue(), L.value && await L.value.loadEnvironments(), U && await it(j);
    }
    async function rt(j) {
      var U;
      if (((U = G.value) == null ? void 0 : U.name) === j) {
        _e("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      Me.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${j}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          Me.value = null;
          try {
            const ge = await D(j);
            ge.status === "success" ? (_e(`Environment "${j}" deleted`, "success"), await Ue(), L.value && await L.value.loadEnvironments()) : _e(ge.message || "Failed to delete environment", "error");
          } catch (ge) {
            _e(`Error deleting environment: ${ge instanceof Error ? ge.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function _t(j, U) {
      T.value = !1;
      try {
        S.value = await C();
      } catch {
      }
      await it(j, U);
    }
    function Ft() {
      T.value = !1, i("close");
    }
    async function Vt(j, U) {
      await it(j, U);
    }
    async function H(j) {
      await Ue(), await it(j);
    }
    async function ve(j) {
      S.value = await C(), console.log(`Environment '${j}' created. Available for switching.`);
    }
    function $e() {
      we("environments", "all-envs"), setTimeout(() => {
        var j;
        (j = L.value) == null || j.openCreateModal();
      }, 100);
    }
    function Ne() {
      if (!x.value) return [];
      const j = [], U = x.value.workflows;
      return U.new.length && j.push(`${U.new.length} new workflow(s)`), U.modified.length && j.push(`${U.modified.length} modified workflow(s)`), U.deleted.length && j.push(`${U.deleted.length} deleted workflow(s)`), j;
    }
    return We(async () => {
      try {
        if (S.value = await C(), S.value.state === "no_workspace") {
          T.value = !0, N.value = 1;
          return;
        }
        if (S.value.state === "empty_workspace") {
          T.value = !0, N.value = 2;
          return;
        }
        if (S.value.state === "unmanaged") {
          T.value = !0, N.value = 2;
          return;
        }
      } catch (j) {
        console.warn("Setup status check failed, proceeding normally:", j);
      }
      await Ue();
    }), (j, U) => {
      var ge, Ee, je, Xe, Pt, qt, Ms, Rs, Ts, Ds, Ls, zs;
      return s(), o("div", s2, [
        e("div", o2, [
          e("div", n2, [
            U[31] || (U[31] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            x.value ? (s(), o("div", a2)) : r("", !0)
          ]),
          e("div", l2, [
            w(so),
            U[34] || (U[34] = e("span", { class: "header-divider" }, null, -1)),
            e("button", {
              class: pe(["icon-btn", { spinning: se.value }]),
              onClick: Ue,
              title: "Refresh"
            }, [...U[32] || (U[32] = [
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
              onClick: U[0] || (U[0] = (Se) => i("close")),
              title: "Close"
            }, [...U[33] || (U[33] = [
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
        e("div", i2, [
          e("div", { class: "env-switcher-header" }, [
            U[35] || (U[35] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Ge
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: vt
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: U[1] || (U[1] = (Se) => we("environments", "all-envs"))
          }, [
            x.value ? (s(), o("div", r2, [
              e("span", null, a(((ge = G.value) == null ? void 0 : ge.name) || ((Ee = x.value) == null ? void 0 : Ee.environment) || "Loading..."), 1),
              e("span", d2, "(" + a(x.value.branch || "detached") + ")", 1)
            ])) : r("", !0),
            U[36] || (U[36] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", c2, [
          e("div", u2, [
            e("div", m2, [
              e("div", v2, [
                U[37] || (U[37] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "status" && le.value === "this-env" }]),
                  onClick: U[2] || (U[2] = (Se) => we("status", "this-env"))
                }, " STATUS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "workflows" }]),
                  onClick: U[3] || (U[3] = (Se) => we("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "models-env" }]),
                  onClick: U[4] || (U[4] = (Se) => we("models-env", "this-env"))
                }, " MODELS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "branches" }]),
                  onClick: U[5] || (U[5] = (Se) => we("branches", "this-env"))
                }, " BRANCHES ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "history" }]),
                  onClick: U[6] || (U[6] = (Se) => we("history", "this-env"))
                }, " HISTORY ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "nodes" }]),
                  onClick: U[7] || (U[7] = (Se) => we("nodes", "this-env"))
                }, " NODES ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "debug-env" }]),
                  onClick: U[8] || (U[8] = (Se) => we("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              U[40] || (U[40] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", f2, [
                U[38] || (U[38] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "environments" }]),
                  onClick: U[9] || (U[9] = (Se) => we("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "model-index" }]),
                  onClick: U[10] || (U[10] = (Se) => we("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "settings" }]),
                  onClick: U[11] || (U[11] = (Se) => we("settings", "all-envs"))
                }, " SETTINGS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "debug-workspace" }]),
                  onClick: U[12] || (U[12] = (Se) => we("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              U[41] || (U[41] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", p2, [
                U[39] || (U[39] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "deploy" }]),
                  onClick: U[13] || (U[13] = (Se) => we("deploy", "sharing"))
                }, " DEPLOY ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "export" }]),
                  onClick: U[14] || (U[14] = (Se) => we("export", "sharing"))
                }, " EXPORT ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "import" }]),
                  onClick: U[15] || (U[15] = (Se) => we("import", "sharing"))
                }, " IMPORT ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Z.value === "remotes" }]),
                  onClick: U[16] || (U[16] = (Se) => we("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            e("div", g2, [
              w(oo)
            ])
          ]),
          e("div", h2, [
            J.value ? (s(), o("div", y2, a(J.value), 1)) : !x.value && Z.value === "status" ? (s(), o("div", w2, " Loading status... ")) : (s(), o(W, { key: 2 }, [
              Z.value === "status" ? (s(), P(ja, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: I,
                status: x.value,
                "setup-state": ie.value,
                onSwitchBranch: Je,
                onCommitChanges: U[17] || (U[17] = (Se) => st.value = !0),
                onSyncEnvironment: U[18] || (U[18] = (Se) => qe.value = !0),
                onViewWorkflows: U[19] || (U[19] = (Se) => we("workflows", "this-env")),
                onViewHistory: U[20] || (U[20] = (Se) => we("history", "this-env")),
                onViewDebug: U[21] || (U[21] = (Se) => we("debug-env", "this-env")),
                onViewNodes: U[22] || (U[22] = (Se) => we("nodes", "this-env")),
                onRepairMissingModels: Et,
                onRepairEnvironment: gt,
                onStartSetup: U[23] || (U[23] = (Se) => T.value = !0),
                onViewEnvironments: U[24] || (U[24] = (Se) => we("environments", "all-envs")),
                onCreateEnvironment: $e
              }, null, 8, ["status", "setup-state"])) : Z.value === "workflows" ? (s(), P(vm, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: z,
                onRefresh: Ue
              }, null, 512)) : Z.value === "models-env" ? (s(), P(Ym, {
                key: 2,
                onNavigate: xe
              })) : Z.value === "branches" ? (s(), P(ll, {
                key: 3,
                branches: Y.value,
                current: ((je = x.value) == null ? void 0 : je.branch) || null,
                onSwitch: q,
                onCreate: E,
                onDelete: V
              }, null, 8, ["branches", "current"])) : Z.value === "history" ? (s(), P(hl, {
                key: 4,
                commits: R.value,
                onSelect: me,
                onCheckout: K
              }, null, 8, ["commits"])) : Z.value === "nodes" ? (s(), P(jv, {
                key: 5,
                "version-mismatches": ((Pt = (Xe = x.value) == null ? void 0 : Xe.comparison) == null ? void 0 : Pt.version_mismatches) || [],
                onOpenNodeManager: at,
                onRepairEnvironment: gt,
                onToast: lt
              }, null, 8, ["version-mismatches"])) : Z.value === "debug-env" ? (s(), P(Zg, { key: 6 })) : Z.value === "environments" ? (s(), P(s1, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: L,
                onSwitch: it,
                onCreated: fe,
                onDelete: rt
              }, null, 512)) : Z.value === "model-index" ? (s(), P(pv, {
                key: 8,
                onRefresh: Ue
              })) : Z.value === "settings" ? (s(), P(Yg, { key: 9 })) : Z.value === "debug-workspace" ? (s(), P(Xg, { key: 10 })) : Z.value === "deploy" ? (s(), P(pk, {
                key: 11,
                onToast: lt
              })) : Z.value === "export" ? (s(), P(L1, { key: 12 })) : Z.value === "import" ? (s(), P(I0, {
                key: 13,
                onImportCompleteSwitch: H
              })) : Z.value === "remotes" ? (s(), P(Eg, {
                key: 14,
                onToast: lt
              })) : r("", !0)
            ], 64))
          ])
        ]),
        ue.value ? (s(), P(Dk, {
          key: 0,
          commit: ue.value,
          onClose: U[25] || (U[25] = (Se) => ue.value = null),
          onCheckout: K,
          onCreateBranch: ee
        }, null, 8, ["commit"])) : r("", !0),
        Me.value ? (s(), P(qs, {
          key: 1,
          title: Me.value.title,
          message: Me.value.message,
          details: Me.value.details,
          warning: Me.value.warning,
          confirmLabel: Me.value.confirmLabel,
          cancelLabel: Me.value.cancelLabel,
          secondaryLabel: Me.value.secondaryLabel,
          secondaryAction: Me.value.secondaryAction,
          destructive: Me.value.destructive,
          onConfirm: Me.value.onConfirm,
          onCancel: U[26] || (U[26] = (Se) => Me.value = null),
          onSecondary: Me.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : r("", !0),
        w(Rb, {
          show: ce.value,
          "from-environment": ((qt = G.value) == null ? void 0 : qt.name) || "unknown",
          "to-environment": be.value,
          onConfirm: Lt,
          onClose: nt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        st.value && x.value ? (s(), P(to, {
          key: 2,
          status: x.value,
          "as-modal": !0,
          onClose: U[27] || (U[27] = (Se) => st.value = !1),
          onCommitted: pt
        }, null, 8, ["status"])) : r("", !0),
        qe.value && x.value ? (s(), P(Xb, {
          key: 3,
          show: qe.value,
          "mismatch-details": {
            missing_nodes: x.value.comparison.missing_nodes,
            extra_nodes: x.value.comparison.extra_nodes
          },
          onConfirm: It,
          onClose: U[28] || (U[28] = (Se) => qe.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : r("", !0),
        w(Vb, {
          show: Q.value,
          state: Te.value.state,
          progress: Te.value.progress,
          message: Te.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        X.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: U[30] || (U[30] = Be((Se) => X.value = !1, ["self"]))
        }, [
          e("div", k2, [
            e("div", b2, [
              U[43] || (U[43] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: U[29] || (U[29] = (Se) => X.value = !1)
              }, [...U[42] || (U[42] = [
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
            e("div", _2, [
              U[44] || (U[44] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", $2, [
                (s(!0), o(W, null, ne(F.value, (Se) => (s(), o("div", {
                  key: Se.name,
                  class: pe(["env-item", { current: Se.is_current }])
                }, [
                  e("div", C2, [
                    e("div", x2, [
                      e("span", S2, a(Se.is_current ? "●" : "○"), 1),
                      e("span", I2, a(Se.name), 1),
                      Se.current_branch ? (s(), o("span", E2, "(" + a(Se.current_branch) + ")", 1)) : r("", !0),
                      Se.is_current ? (s(), o("span", P2, "CURRENT")) : r("", !0)
                    ]),
                    e("div", M2, a(Se.workflow_count) + " workflows • " + a(Se.node_count) + " nodes ", 1)
                  ]),
                  Se.is_current ? r("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (V$) => it(Se.name)
                  }, " SWITCH ", 8, R2))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : r("", !0),
        T.value ? (s(), P(t2, {
          key: 5,
          "default-path": ((Ms = S.value) == null ? void 0 : Ms.default_path) || "~/comfygit",
          "detected-models-dir": ((Rs = S.value) == null ? void 0 : Rs.detected_models_dir) || null,
          "initial-step": N.value,
          "existing-environments": ((Ts = S.value) == null ? void 0 : Ts.environments) || [],
          "cli-installed": ((Ds = S.value) == null ? void 0 : Ds.cli_installed) ?? !0,
          "setup-state": ((Ls = S.value) == null ? void 0 : Ls.state) || "no_workspace",
          "workspace-path": ((zs = S.value) == null ? void 0 : zs.workspace_path) || null,
          onComplete: _t,
          onClose: Ft,
          onSwitchEnvironment: Vt,
          onEnvironmentCreatedNoSwitch: ve
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : r("", !0),
        e("div", T2, [
          w(fo, { name: "toast" }, {
            default: l(() => [
              (s(!0), o(W, null, ne(Fe.value, (Se) => (s(), o("div", {
                key: Se.id,
                class: pe(["toast", Se.type])
              }, [
                e("span", D2, a(Se.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), z2 = /* @__PURE__ */ ae(L2, [["__scopeId", "data-v-70f0bf8a"]]), U2 = { class: "item-header" }, N2 = { class: "item-info" }, O2 = { class: "filename" }, A2 = { class: "metadata" }, B2 = { class: "size" }, F2 = {
  key: 0,
  class: "type"
}, V2 = { class: "item-actions" }, W2 = {
  key: 0,
  class: "progress-section"
}, G2 = { class: "progress-bar" }, j2 = { class: "progress-stats" }, H2 = { class: "downloaded" }, K2 = { class: "speed" }, q2 = {
  key: 0,
  class: "eta"
}, Y2 = {
  key: 1,
  class: "status-msg paused"
}, J2 = {
  key: 2,
  class: "status-msg queued"
}, X2 = {
  key: 3,
  class: "status-msg completed"
}, Q2 = {
  key: 4,
  class: "status-msg failed"
}, Z2 = {
  key: 0,
  class: "retries"
}, e$ = /* @__PURE__ */ oe({
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
    function p(u) {
      if (u < 60) return `${Math.round(u)}s`;
      const m = Math.floor(u / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (u, m) => (s(), o("div", {
      class: pe(["download-item", `status-${t.item.status}`])
    }, [
      e("div", U2, [
        e("div", N2, [
          e("div", O2, a(t.item.filename), 1),
          e("div", A2, [
            e("span", B2, a(i(t.item.size)), 1),
            t.item.type ? (s(), o("span", F2, a(t.item.type), 1)) : r("", !0)
          ])
        ]),
        e("div", V2, [
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
      t.item.status === "downloading" ? (s(), o("div", W2, [
        e("div", G2, [
          e("div", {
            class: "progress-fill",
            style: Rt({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", j2, [
          e("span", H2, a(i(t.item.downloaded)) + " / " + a(i(t.item.size)), 1),
          e("span", K2, a(f(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", q2, a(p(t.item.eta)), 1)) : r("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", Y2, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", J2, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", X2, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", Q2, [
        g(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", Z2, "(" + a(t.item.retries) + " retries)", 1)) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), Xt = /* @__PURE__ */ ae(e$, [["__scopeId", "data-v-2110df65"]]), t$ = { class: "queue-title" }, s$ = { class: "count" }, o$ = { class: "queue-actions" }, n$ = { class: "action-label" }, a$ = {
  key: 0,
  class: "overall-progress"
}, l$ = { class: "progress-bar" }, i$ = {
  key: 0,
  class: "current-mini"
}, r$ = { class: "filename" }, d$ = { class: "speed" }, c$ = {
  key: 1,
  class: "queue-content"
}, u$ = {
  key: 0,
  class: "section"
}, m$ = {
  key: 1,
  class: "section"
}, v$ = { class: "section-header" }, f$ = { class: "section-label paused" }, p$ = { class: "items-list" }, g$ = {
  key: 2,
  class: "section"
}, h$ = { class: "section-header" }, y$ = { class: "section-label" }, w$ = { class: "items-list" }, k$ = {
  key: 3,
  class: "section"
}, b$ = { class: "section-header" }, _$ = { class: "section-label" }, $$ = { class: "items-list" }, C$ = {
  key: 4,
  class: "section"
}, x$ = { class: "section-header" }, S$ = { class: "section-label failed" }, I$ = { class: "items-list" }, E$ = /* @__PURE__ */ oe({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: n,
      queuedItems: i,
      completedItems: f,
      failedItems: p,
      pausedItems: u,
      hasItems: m,
      activeCount: d,
      cancelDownload: v,
      retryDownload: y,
      resumeDownload: k,
      resumeAllPaused: _,
      removeItem: b,
      clearCompleted: D
    } = os(), M = h(!1);
    let $ = null;
    St(
      () => ({
        active: d.value,
        failed: p.value.length,
        paused: u.value.length,
        completed: f.value.length
      }),
      (R, Y) => {
        $ && (clearTimeout($), $ = null);
        const F = R.active === 0 && R.failed === 0 && R.paused === 0 && R.completed > 0, G = Y && (Y.active > 0 || Y.paused > 0);
        F && G && ($ = setTimeout(() => {
          D(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = O(() => {
      var F;
      if (c.items.length === 0) return 0;
      const R = f.value.length, Y = ((F = n.value) == null ? void 0 : F.progress) || 0;
      return Math.round((R + Y / 100) / c.items.length * 100);
    });
    function A(R) {
      v(R);
    }
    function x(R) {
      return R === 0 ? "" : `${(R / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (R, Y) => (s(), P(Ye, { to: "body" }, [
      Ie(m) ? (s(), o("div", {
        key: 0,
        class: pe(["model-download-queue", { minimized: !M.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: Y[0] || (Y[0] = (F) => M.value = !M.value)
        }, [
          e("div", t$, [
            Y[4] || (Y[4] = e("span", { class: "icon" }, "↓", -1)),
            Y[5] || (Y[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", s$, "(" + a(Ie(d)) + "/" + a(Ie(c).items.length) + ")", 1)
          ]),
          e("div", o$, [
            e("span", n$, a(M.value ? "minimize" : "expand"), 1)
          ])
        ]),
        M.value ? (s(), o("div", c$, [
          Ie(n) ? (s(), o("div", u$, [
            Y[6] || (Y[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            w(Xt, {
              item: Ie(n),
              onCancel: Y[1] || (Y[1] = (F) => A(Ie(n).id))
            }, null, 8, ["item"])
          ])) : r("", !0),
          Ie(u).length > 0 ? (s(), o("div", m$, [
            e("div", v$, [
              e("span", f$, "Paused (" + a(Ie(u).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: Y[2] || (Y[2] = //@ts-ignore
                (...F) => Ie(_) && Ie(_)(...F))
              }, "Resume All")
            ]),
            e("div", p$, [
              (s(!0), o(W, null, ne(Ie(u), (F) => (s(), P(Xt, {
                key: F.id,
                item: F,
                onResume: (G) => Ie(k)(F.id),
                onRemove: (G) => Ie(b)(F.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          Ie(i).length > 0 ? (s(), o("div", g$, [
            e("div", h$, [
              e("span", y$, "Queued (" + a(Ie(i).length) + ")", 1)
            ]),
            e("div", w$, [
              (s(!0), o(W, null, ne(Ie(i), (F) => (s(), P(Xt, {
                key: F.id,
                item: F,
                onCancel: (G) => A(F.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : r("", !0),
          Ie(f).length > 0 ? (s(), o("div", k$, [
            e("div", b$, [
              e("span", _$, "Completed (" + a(Ie(f).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: Y[3] || (Y[3] = //@ts-ignore
                (...F) => Ie(D) && Ie(D)(...F))
              }, "Clear")
            ]),
            e("div", $$, [
              (s(!0), o(W, null, ne(Ie(f).slice(0, 3), (F) => (s(), P(Xt, {
                key: F.id,
                item: F,
                onRemove: (G) => Ie(b)(F.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          Ie(p).length > 0 ? (s(), o("div", C$, [
            e("div", x$, [
              e("span", S$, "Failed (" + a(Ie(p).length) + ")", 1)
            ]),
            e("div", I$, [
              (s(!0), o(W, null, ne(Ie(p), (F) => (s(), P(Xt, {
                key: F.id,
                item: F,
                onRetry: (G) => Ie(y)(F.id),
                onRemove: (G) => Ie(b)(F.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : r("", !0)
        ])) : (s(), o("div", a$, [
          e("div", l$, [
            e("div", {
              class: "progress-fill",
              style: Rt({ width: `${C.value}%` })
            }, null, 4)
          ]),
          Ie(n) ? (s(), o("div", i$, [
            e("span", r$, a(Ie(n).filename), 1),
            e("span", d$, a(x(Ie(n).speed)), 1)
          ])) : r("", !0)
        ]))
      ], 2)) : r("", !0)
    ]));
  }
}), P$ = /* @__PURE__ */ ae(E$, [["__scopeId", "data-v-60751cfa"]]), M$ = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', R$ = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', T$ = {
  comfy: M$,
  phosphor: R$
}, Is = "comfy", no = "comfygit-theme";
let At = null, ao = Is;
function D$() {
  try {
    const t = localStorage.getItem(no);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Is;
}
function lo(t = Is) {
  At && At.remove(), At = document.createElement("style"), At.id = "comfygit-theme-styles", At.setAttribute("data-theme", t), At.textContent = T$[t], document.head.appendChild(At), document.body.setAttribute("data-comfygit-theme", t), ao = t;
  try {
    localStorage.setItem(no, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function L$() {
  return ao;
}
function z$(t) {
  lo(t);
}
function U$(t) {
  var p;
  const { ui_id: c, state: n } = t || {}, i = (n == null ? void 0 : n.history) || {};
  if (!c)
    return null;
  const f = i[c];
  return f && f.result === "error" && ((p = f.status) == null ? void 0 : p.status_str) === "error" ? (f.status.messages || [])[0] || "Unknown error" : null;
}
const Es = document.createElement("link");
Es.rel = "stylesheet";
Es.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Es);
const N$ = D$();
lo(N$);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), z$(t);
  },
  getTheme: () => {
    const t = L$();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let yt = null, dt = null, ts = null, Qt = null, Bs = null;
const jt = h(null);
let Ps = "managed", io = !1;
async function ls() {
  var t;
  if (!((t = Ut) != null && t.api)) return null;
  try {
    const c = await Ut.api.fetchApi("/v2/comfygit/status");
    c.ok && (jt.value = await c.json());
  } catch {
  }
}
async function hs() {
  var t;
  if ((t = Ut) != null && t.api)
    try {
      const c = await Ut.api.fetchApi("/v2/setup/status");
      if (c.ok) {
        const n = await c.json();
        Ps = n.state, io = n.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function ys() {
  var c;
  if (Ps === "managed" || !io) return;
  const t = document.querySelectorAll("button.comfyui-button");
  for (const n of t)
    if (((c = n.textContent) == null ? void 0 : c.trim()) === "Manager" && !n.querySelector("svg, i, img")) {
      n.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function O$() {
  if (!jt.value) return !1;
  const t = jt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || jt.value.has_changes;
}
function Fs(t) {
  yt && yt.remove(), yt = document.createElement("div"), yt.className = "comfygit-panel-overlay";
  const c = document.createElement("div");
  c.className = "comfygit-panel-container", yt.appendChild(c), yt.addEventListener("click", (f) => {
    f.target === yt && ps();
  });
  const n = (f) => {
    f.key === "Escape" && (ps(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), _s({
    render: () => $s(z2, {
      initialView: t,
      onClose: ps,
      onStatusUpdate: async (f) => {
        jt.value = f, ss(), await hs(), ws(), ys();
      }
    })
  }).mount(c), document.body.appendChild(yt);
}
function ps() {
  yt && (yt.remove(), yt = null);
}
function A$(t) {
  Zt(), dt = document.createElement("div"), dt.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  dt.style.position = "fixed", dt.style.top = `${c.bottom + 8}px`, dt.style.right = `${window.innerWidth - c.right}px`, dt.style.zIndex = "10001";
  const n = (f) => {
    dt && !dt.contains(f.target) && f.target !== t && (Zt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const i = (f) => {
    f.key === "Escape" && (Zt(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), ts = _s({
    render: () => $s(to, {
      status: jt.value,
      onClose: Zt,
      onCommitted: (f) => {
        Zt(), B$(f.success, f.message), ls().then(ss);
      }
    })
  }), ts.mount(dt), document.body.appendChild(dt);
}
function Zt() {
  ts && (ts.unmount(), ts = null), dt && (dt.remove(), dt = null);
}
function B$(t, c) {
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
function F$() {
  Qt || (Qt = document.createElement("div"), Qt.className = "comfygit-download-queue-root", Bs = _s({
    render: () => $s(P$)
  }), Bs.mount(Qt), document.body.appendChild(Qt), console.log("[ComfyGit] Model download queue mounted"));
}
let ut = null;
function ss() {
  if (!ut) return;
  const t = ut.querySelector(".commit-indicator");
  t && (t.style.display = O$() ? "block" : "none");
}
function ws() {
  if (!ut) return;
  const t = Ps !== "managed";
  ut.disabled = t, ut.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const ro = document.createElement("style");
ro.textContent = `
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
document.head.appendChild(ro);
Ut.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var f, p;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = Fs, ut = document.createElement("button"), ut.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", ut.innerHTML = 'Commit <span class="commit-indicator"></span>', ut.title = "Quick Commit", ut.onclick = () => A$(ut), t.appendChild(c), t.appendChild(ut), (p = (f = Ut.menu) == null ? void 0 : f.settingsGroup) != null && p.element && (Ut.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), F$();
    const { loadPendingDownloads: n } = os();
    n(), await Promise.all([ls(), hs()]), ss(), ws(), ys(), setTimeout(ys, 100), setInterval(async () => {
      await Promise.all([ls(), hs()]), ss(), ws();
    }, 3e4);
    const i = Ut.api;
    if (i) {
      let u = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((y) => {
          (y.startsWith("workflow:") || y.startsWith("Comfy.OpenWorkflowsPaths:") || y.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(y);
        }), window.location.reload();
      }, m = function() {
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
        const k = document.createElement("span");
        k.textContent = "Workflows updated - refresh required", y.appendChild(k);
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
        `, _.onmouseover = () => _.style.background = "var(--comfy-input-bg)", _.onmouseout = () => _.style.background = "var(--comfy-menu-bg)", _.onclick = () => u(), y.appendChild(_);
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
        `, b.onmouseover = () => b.style.opacity = "1", b.onmouseout = () => b.style.opacity = "0.6", b.onclick = () => y.remove(), y.appendChild(b), document.body.appendChild(y), console.log("[ComfyGit] Refresh notification displayed");
      }, d = function(y) {
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
        const D = document.createElement("div");
        D.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const M = document.createElement("div");
        M.textContent = "Node installation failed", M.style.cssText = "font-weight: 600; color: #e53935;", D.appendChild(M);
        const $ = document.createElement("div");
        $.textContent = "Dependency conflict detected", $.style.cssText = "font-size: 12px; opacity: 0.8;", D.appendChild($), _.appendChild(D);
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
          _.remove(), Fs("debug-env");
        }, _.appendChild(C);
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
        `, A.onmouseover = () => A.style.opacity = "1", A.onmouseout = () => A.style.opacity = "0.6", A.onclick = () => _.remove(), _.appendChild(A), document.body.appendChild(_), console.log("[ComfyGit] Manager error toast displayed:", y), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && _.remove();
        }, 1e4);
      };
      i.addEventListener("comfygit:workflow-changed", async (y) => {
        const { change_type: k, workflow_name: _ } = y.detail;
        console.log(`[ComfyGit] Workflow ${k}: ${_}`), await ls(), ss();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      i.addEventListener("status", async (y) => {
        const k = y.detail != null;
        k && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), u()) : m()), v = k;
      }), console.log("[ComfyGit] Refresh notification system initialized"), i.addEventListener("cm-task-completed", (y) => {
        const k = U$(y.detail);
        k && d(k);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
