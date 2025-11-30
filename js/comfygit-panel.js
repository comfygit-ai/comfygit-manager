import { app as wt } from "../../scripts/app.js";
import { defineComponent as X, createElementBlock as o, openBlock as s, createCommentVNode as d, createElementVNode as e, renderSlot as Se, createBlock as T, resolveDynamicComponent as cs, normalizeClass as ie, withCtx as l, toDisplayString as a, createVNode as k, createTextVNode as h, computed as P, Fragment as V, renderList as te, normalizeStyle as gt, ref as b, onMounted as Ue, watch as kt, Teleport as Fe, withModifiers as ze, Transition as Ks, createSlots as Wt, withKeys as ft, reactive as ts, onUnmounted as xs, readonly as Js, unref as xe, withDirectives as Ne, vModelText as Et, vModelRadio as Kt, vModelCheckbox as Qt, nextTick as Ys, vModelSelect as Mt, createStaticVNode as Qs, TransitionGroup as Xs, createApp as us, h as ms } from "vue";
const Zs = { class: "panel-layout" }, eo = {
  key: 0,
  class: "panel-layout-header"
}, to = {
  key: 1,
  class: "panel-layout-search"
}, so = { class: "panel-layout-content" }, oo = {
  key: 2,
  class: "panel-layout-footer"
}, no = /* @__PURE__ */ X({
  __name: "PanelLayout",
  setup(t) {
    return (c, n) => (s(), o("div", Zs, [
      c.$slots.header ? (s(), o("div", eo, [
        Se(c.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      c.$slots.search ? (s(), o("div", to, [
        Se(c.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      e("div", so, [
        Se(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (s(), o("div", oo, [
        Se(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Z = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [i, w] of c)
    n[i] = w;
  return n;
}, je = /* @__PURE__ */ Z(no, [["__scopeId", "data-v-21565df9"]]), ao = {
  key: 0,
  class: "panel-title-prefix"
}, lo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, io = /* @__PURE__ */ X({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, n) => (s(), T(cs(`h${t.level}`), {
      class: ie(["panel-title", t.variant])
    }, {
      default: l(() => [
        t.showPrefix ? (s(), o("span", ao, a(t.prefix), 1)) : (s(), o("span", lo)),
        Se(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ro = /* @__PURE__ */ Z(io, [["__scopeId", "data-v-c3875efc"]]), co = ["title"], uo = ["width", "height"], mo = /* @__PURE__ */ X({
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
      ])], 8, uo))
    ], 8, co));
  }
}), Ss = /* @__PURE__ */ Z(mo, [["__scopeId", "data-v-6fc7f16d"]]), vo = { class: "header-left" }, fo = {
  key: 0,
  class: "header-actions"
}, go = /* @__PURE__ */ X({
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
      class: ie(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", vo, [
        k(ro, { "show-prefix": t.showPrefix }, {
          default: l(() => [
            h(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), T(Ss, {
          key: 0,
          onClick: n[0] || (n[0] = (i) => c.$emit("info-click"))
        })) : d("", !0)
      ]),
      c.$slots.actions ? (s(), o("div", fo, [
        Se(c.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ge = /* @__PURE__ */ Z(go, [["__scopeId", "data-v-55a62cd6"]]), po = {
  key: 0,
  class: "section-title-count"
}, ho = {
  key: 1,
  class: "section-title-icon"
}, yo = /* @__PURE__ */ X({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (s(), T(cs(`h${t.level}`), {
      class: ie(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, {
      default: l(() => [
        Se(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", po, "(" + a(t.count) + ")", 1)) : d("", !0),
        t.clickable ? (s(), o("span", ho, a(t.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ze = /* @__PURE__ */ Z(yo, [["__scopeId", "data-v-559361eb"]]), wo = { class: "status-grid" }, ko = { class: "status-grid__columns" }, bo = { class: "status-grid__column" }, _o = { class: "status-grid__title" }, $o = { class: "status-grid__column status-grid__column--right" }, Co = { class: "status-grid__title" }, xo = {
  key: 0,
  class: "status-grid__footer"
}, So = /* @__PURE__ */ X({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", wo, [
      e("div", ko, [
        e("div", bo, [
          e("h4", _o, a(t.leftTitle), 1),
          Se(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", $o, [
          e("h4", Co, a(t.rightTitle), 1),
          Se(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (s(), o("div", xo, [
        Se(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Io = /* @__PURE__ */ Z(So, [["__scopeId", "data-v-73b7ba3f"]]), Eo = {
  key: 0,
  class: "status-item__icon"
}, Mo = {
  key: 1,
  class: "status-item__count"
}, To = { class: "status-item__label" }, zo = /* @__PURE__ */ X({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const c = t, n = P(() => `status-item--${c.variant}`);
    return (i, w) => (s(), o("div", {
      class: ie(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", Eo, a(t.icon), 1)) : d("", !0),
      t.count !== void 0 ? (s(), o("span", Mo, a(t.count), 1)) : d("", !0),
      e("span", To, a(t.label), 1)
    ], 2));
  }
}), at = /* @__PURE__ */ Z(zo, [["__scopeId", "data-v-6f929183"]]), Ro = { class: "issue-card__header" }, Lo = { class: "issue-card__icon" }, Po = { class: "issue-card__title" }, Do = {
  key: 0,
  class: "issue-card__content"
}, No = {
  key: 0,
  class: "issue-card__description"
}, Uo = {
  key: 1,
  class: "issue-card__items"
}, Oo = {
  key: 2,
  class: "issue-card__actions"
}, Bo = /* @__PURE__ */ X({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const c = t, n = P(() => `issue-card--${c.severity}`);
    return (i, w) => (s(), o("div", {
      class: ie(["issue-card", n.value])
    }, [
      e("div", Ro, [
        e("span", Lo, a(t.icon), 1),
        e("h4", Po, a(t.title), 1)
      ]),
      i.$slots.default || t.description ? (s(), o("div", Do, [
        t.description ? (s(), o("p", No, a(t.description), 1)) : d("", !0),
        Se(i.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      t.items && t.items.length ? (s(), o("div", Uo, [
        (s(!0), o(V, null, te(t.items, (g, f) => (s(), o("div", {
          key: f,
          class: "issue-card__item"
        }, [
          w[0] || (w[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(g), 1)
        ]))), 128))
      ])) : d("", !0),
      i.$slots.actions ? (s(), o("div", Oo, [
        Se(i.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), et = /* @__PURE__ */ Z(Bo, [["__scopeId", "data-v-df6aa348"]]), Fo = ["type", "disabled"], Ao = {
  key: 0,
  class: "spinner"
}, Vo = /* @__PURE__ */ X({
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
      class: ie(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", Ao)) : d("", !0),
      t.loading ? d("", !0) : Se(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Fo));
  }
}), ee = /* @__PURE__ */ Z(Vo, [["__scopeId", "data-v-772abe47"]]), Wo = { class: "empty-state" }, jo = {
  key: 0,
  class: "empty-icon"
}, Go = { class: "empty-message" }, qo = /* @__PURE__ */ X({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, n) => (s(), o("div", Wo, [
      t.icon ? (s(), o("div", jo, a(t.icon), 1)) : d("", !0),
      e("p", Go, a(t.message), 1),
      t.actionLabel ? (s(), T(ee, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => c.$emit("action"))
      }, {
        default: l(() => [
          h(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : d("", !0)
    ]));
  }
}), ot = /* @__PURE__ */ Z(qo, [["__scopeId", "data-v-4466284f"]]), Ho = /* @__PURE__ */ X({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: ie(["detail-label"]),
      style: gt({ minWidth: t.minWidth })
    }, [
      Se(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Jt = /* @__PURE__ */ Z(Ho, [["__scopeId", "data-v-75e9eeb8"]]), Ko = /* @__PURE__ */ X({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: ie(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      Se(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), is = /* @__PURE__ */ Z(Ko, [["__scopeId", "data-v-2f186e4c"]]), Jo = { class: "detail-row" }, Yo = /* @__PURE__ */ X({
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
    return (c, n) => (s(), o("div", Jo, [
      k(Jt, { "min-width": t.labelMinWidth }, {
        default: l(() => [
          h(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), T(is, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: l(() => [
          h(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Se(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Pe = /* @__PURE__ */ Z(Yo, [["__scopeId", "data-v-ef15664a"]]), Qo = { class: "modal-header" }, Xo = { class: "modal-body" }, Zo = { class: "status-section" }, en = {
  key: 0,
  class: "status-section"
}, tn = { class: "section-header-row" }, sn = {
  key: 0,
  class: "workflow-group"
}, on = { class: "workflow-group-header" }, nn = { class: "workflow-group-title" }, an = { class: "workflow-list" }, ln = { class: "workflow-name" }, rn = { class: "workflow-issue" }, dn = {
  key: 1,
  class: "workflow-group"
}, cn = { class: "workflow-group-header" }, un = { class: "workflow-group-title" }, mn = { class: "workflow-list" }, vn = { class: "workflow-name" }, fn = { class: "workflow-issue" }, gn = {
  key: 2,
  class: "workflow-group"
}, pn = { class: "workflow-group-header" }, hn = { class: "workflow-group-title" }, yn = { class: "workflow-list" }, wn = { class: "workflow-name" }, kn = {
  key: 3,
  class: "workflow-group"
}, bn = { class: "workflow-group-header" }, _n = { class: "workflow-group-title" }, $n = { class: "workflow-list" }, Cn = { class: "workflow-name" }, xn = {
  key: 4,
  class: "workflow-group"
}, Sn = { class: "workflow-group-header" }, In = { class: "workflow-group-title" }, En = { class: "workflow-list" }, Mn = { class: "workflow-name" }, Tn = {
  key: 5,
  class: "workflow-group"
}, zn = { class: "workflow-group-title" }, Rn = { class: "expand-icon" }, Ln = {
  key: 0,
  class: "workflow-list"
}, Pn = { class: "workflow-name" }, Dn = {
  key: 1,
  class: "status-section"
}, Nn = {
  key: 0,
  class: "change-group"
}, Un = { class: "change-group-header" }, On = { class: "change-group-title" }, Bn = { class: "change-list" }, Fn = { class: "node-name" }, An = {
  key: 0,
  class: "dev-badge"
}, Vn = {
  key: 1,
  class: "change-group"
}, Wn = { class: "change-group-header" }, jn = { class: "change-group-title" }, Gn = { class: "change-list" }, qn = { class: "node-name" }, Hn = {
  key: 0,
  class: "dev-badge"
}, Kn = {
  key: 2,
  class: "change-group"
}, Jn = { class: "change-list" }, Yn = { class: "change-item" }, Qn = { class: "node-name" }, Xn = {
  key: 3,
  class: "change-group"
}, Zn = {
  key: 2,
  class: "status-section"
}, ea = { class: "section-header-row" }, ta = {
  key: 0,
  class: "drift-item"
}, sa = { class: "drift-list" }, oa = {
  key: 0,
  class: "drift-list-more"
}, na = {
  key: 1,
  class: "drift-item"
}, aa = { class: "drift-list" }, la = {
  key: 0,
  class: "drift-list-more"
}, ia = {
  key: 2,
  class: "drift-item"
}, ra = {
  key: 3,
  class: "drift-item"
}, da = {
  key: 3,
  class: "status-section"
}, ca = { class: "info-box" }, ua = { class: "drift-list" }, ma = {
  key: 0,
  class: "drift-list-more"
}, va = {
  key: 4,
  class: "status-section"
}, fa = { class: "warning-box" }, ga = {
  key: 5,
  class: "empty-state-inline"
}, pa = { class: "modal-actions" }, ha = /* @__PURE__ */ X({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const c = t, n = b(!1);
    Ue(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), kt(() => c.show, (_, C) => {
      console.log("StatusDetailModal show prop changed from", C, "to", _);
    }, { immediate: !0 });
    const i = P(() => {
      var _, C, z;
      return ((z = (C = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : C.analyzed) == null ? void 0 : z.filter(
        (U) => U.status === "broken" && U.sync_state === "synced"
      )) || [];
    }), w = P(() => {
      var _, C, z;
      return ((z = (C = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : C.analyzed) == null ? void 0 : z.filter(
        (U) => U.status === "broken" && U.sync_state !== "synced"
      )) || [];
    }), g = P(() => {
      var _, C, z;
      return ((z = (C = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : C.synced) == null ? void 0 : z.filter((U) => {
        var $, D, x;
        const v = (x = (D = ($ = c.status) == null ? void 0 : $.workflows) == null ? void 0 : D.analyzed) == null ? void 0 : x.find((S) => S.name === U);
        return !v || v.status !== "broken";
      })) || [];
    }), f = P(() => {
      var _, C, z, U, v;
      return (_ = c.status) != null && _.workflows ? (((C = c.status.workflows.new) == null ? void 0 : C.length) ?? 0) > 0 || (((z = c.status.workflows.modified) == null ? void 0 : z.length) ?? 0) > 0 || (((U = c.status.workflows.deleted) == null ? void 0 : U.length) ?? 0) > 0 || (((v = c.status.workflows.synced) == null ? void 0 : v.length) ?? 0) > 0 : !1;
    }), u = P(() => {
      var C, z, U;
      const _ = (C = c.status) == null ? void 0 : C.git_changes;
      return _ ? (((z = _.nodes_added) == null ? void 0 : z.length) ?? 0) > 0 || (((U = _.nodes_removed) == null ? void 0 : U.length) ?? 0) > 0 || _.workflow_changes || _.has_other_changes : !1;
    }), r = P(() => {
      var _, C, z, U, v, $;
      return !f.value && !u.value && ((C = (_ = c.status) == null ? void 0 : _.comparison) == null ? void 0 : C.is_synced) && (((z = c.status) == null ? void 0 : z.missing_models_count) ?? 0) === 0 && ((($ = (v = (U = c.status) == null ? void 0 : U.comparison) == null ? void 0 : v.disabled_nodes) == null ? void 0 : $.length) ?? 0) === 0;
    }), m = P(() => {
      var C, z;
      const _ = (z = (C = c.status) == null ? void 0 : C.git_changes) == null ? void 0 : z.workflow_changes;
      return _ ? typeof _ == "number" ? _ : Object.keys(_).length : 0;
    });
    function p(_) {
      return typeof _ == "string" ? _ : _.name;
    }
    function y(_) {
      return typeof _ == "object" && _.is_development === !0;
    }
    return (_, C) => {
      var z, U, v, $, D, x, S, j, W, H, L, I, E, O, B, ae, we, me, oe, F, M, le;
      return s(), T(Fe, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[6] || (C[6] = (se) => _.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: C[5] || (C[5] = ze(() => {
            }, ["stop"]))
          }, [
            e("div", Qo, [
              C[7] || (C[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (se) => _.$emit("close"))
              }, "✕")
            ]),
            e("div", Xo, [
              e("div", Zo, [
                k(Ze, { level: "4" }, {
                  default: l(() => [...C[8] || (C[8] = [
                    h("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                k(Pe, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              f.value ? (s(), o("div", en, [
                e("div", tn, [
                  k(Ze, { level: "4" }, {
                    default: l(() => [...C[9] || (C[9] = [
                      h("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: C[1] || (C[1] = (se) => _.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (s(), o("div", sn, [
                  e("div", on, [
                    C[10] || (C[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", nn, "BROKEN (COMMITTED) (" + a(i.value.length) + ")", 1)
                  ]),
                  e("div", an, [
                    (s(!0), o(V, null, te(i.value, (se) => (s(), o("div", {
                      key: se.name,
                      class: "workflow-item"
                    }, [
                      e("span", ln, a(se.name), 1),
                      e("span", rn, a(se.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                w.value.length ? (s(), o("div", dn, [
                  e("div", cn, [
                    C[11] || (C[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", un, "BROKEN (UNCOMMITTED) (" + a(w.value.length) + ")", 1)
                  ]),
                  e("div", mn, [
                    (s(!0), o(V, null, te(w.value, (se) => (s(), o("div", {
                      key: se.name,
                      class: "workflow-item"
                    }, [
                      e("span", vn, a(se.name), 1),
                      e("span", fn, a(se.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (U = (z = t.status.workflows) == null ? void 0 : z.new) != null && U.length ? (s(), o("div", gn, [
                  e("div", pn, [
                    C[12] || (C[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", hn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", yn, [
                    (s(!0), o(V, null, te(t.status.workflows.new, (se) => (s(), o("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      e("span", wn, a(se), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                ($ = (v = t.status.workflows) == null ? void 0 : v.modified) != null && $.length ? (s(), o("div", kn, [
                  e("div", bn, [
                    C[13] || (C[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", _n, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", $n, [
                    (s(!0), o(V, null, te(t.status.workflows.modified, (se) => (s(), o("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      e("span", Cn, a(se), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (x = (D = t.status.workflows) == null ? void 0 : D.deleted) != null && x.length ? (s(), o("div", xn, [
                  e("div", Sn, [
                    C[14] || (C[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", In, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", En, [
                    (s(!0), o(V, null, te(t.status.workflows.deleted, (se) => (s(), o("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      e("span", Mn, a(se), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                g.value.length ? (s(), o("div", Tn, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: C[2] || (C[2] = (se) => n.value = !n.value)
                  }, [
                    C[15] || (C[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", zn, "SYNCED (" + a(g.value.length) + ")", 1),
                    e("span", Rn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", Ln, [
                    (s(!0), o(V, null, te(g.value, (se) => (s(), o("div", {
                      key: se,
                      class: "workflow-item"
                    }, [
                      e("span", Pn, a(se), 1)
                    ]))), 128))
                  ])) : d("", !0)
                ])) : d("", !0)
              ])) : d("", !0),
              u.value ? (s(), o("div", Dn, [
                k(Ze, { level: "4" }, {
                  default: l(() => [...C[16] || (C[16] = [
                    h("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (j = (S = t.status.git_changes) == null ? void 0 : S.nodes_added) != null && j.length ? (s(), o("div", Nn, [
                  e("div", Un, [
                    C[17] || (C[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", On, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Bn, [
                    (s(!0), o(V, null, te(t.status.git_changes.nodes_added, (se) => (s(), o("div", {
                      key: p(se),
                      class: "change-item"
                    }, [
                      e("span", Fn, a(p(se)), 1),
                      y(se) ? (s(), o("span", An, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (H = (W = t.status.git_changes) == null ? void 0 : W.nodes_removed) != null && H.length ? (s(), o("div", Vn, [
                  e("div", Wn, [
                    C[18] || (C[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", jn, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Gn, [
                    (s(!0), o(V, null, te(t.status.git_changes.nodes_removed, (se) => (s(), o("div", {
                      key: p(se),
                      class: "change-item"
                    }, [
                      e("span", qn, a(p(se)), 1),
                      y(se) ? (s(), o("span", Hn, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (L = t.status.git_changes) != null && L.workflow_changes ? (s(), o("div", Kn, [
                  C[19] || (C[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Jn, [
                    e("div", Yn, [
                      e("span", Qn, a(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : d("", !0),
                (I = t.status.git_changes) != null && I.has_other_changes ? (s(), o("div", Xn, [...C[20] || (C[20] = [
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
              (E = t.status.comparison) != null && E.is_synced ? d("", !0) : (s(), o("div", Zn, [
                e("div", ea, [
                  k(Ze, { level: "4" }, {
                    default: l(() => [...C[21] || (C[21] = [
                      h("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: C[3] || (C[3] = (se) => _.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                C[22] || (C[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (B = (O = t.status.comparison) == null ? void 0 : O.missing_nodes) != null && B.length ? (s(), o("div", ta, [
                  k(Pe, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", sa, [
                    (s(!0), o(V, null, te(t.status.comparison.missing_nodes.slice(0, 10), (se) => (s(), o("div", {
                      key: se,
                      class: "drift-list-item"
                    }, " - " + a(se), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", oa, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (we = (ae = t.status.comparison) == null ? void 0 : ae.extra_nodes) != null && we.length ? (s(), o("div", na, [
                  k(Pe, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", aa, [
                    (s(!0), o(V, null, te(t.status.comparison.extra_nodes.slice(0, 10), (se) => (s(), o("div", {
                      key: se,
                      class: "drift-list-item"
                    }, " - " + a(se), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", la, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (oe = (me = t.status.comparison) == null ? void 0 : me.version_mismatches) != null && oe.length ? (s(), o("div", ia, [
                  k(Pe, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : d("", !0),
                (F = t.status.comparison) != null && F.packages_in_sync ? d("", !0) : (s(), o("div", ra, [
                  k(Pe, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (le = (M = t.status.comparison) == null ? void 0 : M.disabled_nodes) != null && le.length ? (s(), o("div", da, [
                k(Ze, { level: "4" }, {
                  default: l(() => [...C[23] || (C[23] = [
                    h("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", ca, [
                  C[24] || (C[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", ua, [
                  (s(!0), o(V, null, te(t.status.comparison.disabled_nodes.slice(0, 10), (se) => (s(), o("div", {
                    key: se,
                    class: "drift-list-item"
                  }, " • " + a(se), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", ma, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : d("", !0)
                ])
              ])) : d("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", va, [
                k(Ze, { level: "4" }, {
                  default: l(() => [...C[25] || (C[25] = [
                    h("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", fa, [
                  C[26] || (C[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                C[27] || (C[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : d("", !0),
              r.value ? (s(), o("div", ga, [...C[28] || (C[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : d("", !0)
            ]),
            e("div", pa, [
              k(ee, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (se) => _.$emit("close"))
              }, {
                default: l(() => [...C[29] || (C[29] = [
                  h(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), ya = /* @__PURE__ */ Z(ha, [["__scopeId", "data-v-c67eed17"]]), wa = { class: "health-section-header" }, ka = { class: "suggestions-content" }, ba = { class: "suggestions-text" }, _a = { style: { "margin-top": "var(--cg-space-3)" } }, $a = {
  key: 1,
  class: "no-issues-text"
}, Ca = /* @__PURE__ */ X({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "start-setup", "view-environments", "create-environment"],
  setup(t, { expose: c, emit: n }) {
    const i = t, w = b(!1), g = b(!1);
    function f() {
      w.value = !0;
    }
    function u() {
      w.value = !1, m("view-workflows");
    }
    function r() {
      w.value = !1, m("view-nodes");
    }
    const m = n, p = b(!1), y = P(() => {
      const O = i.status.workflows.analyzed || [], B = O.filter(
        (ae) => ae.unresolved_models_count > 0 || ae.ambiguous_models_count > 0
      );
      return B.length === 0 && i.status.missing_models_count > 0 ? O.filter((ae) => ae.sync_state === "synced") : B;
    });
    function _() {
      const O = y.value;
      O.length !== 0 && (p.value = !0, m("repair-missing-models", O.map((B) => B.name)));
    }
    function C() {
      p.value = !1;
    }
    c({ resetRepairingState: C });
    const z = P(() => i.status.workflows.new.length > 0 || i.status.workflows.modified.length > 0 || i.status.workflows.deleted.length > 0), U = P(() => i.status.has_changes), v = P(() => {
      const O = i.status.git_changes;
      return O.nodes_added.length > 0 || O.nodes_removed.length > 0 || O.workflow_changes;
    }), $ = P(() => i.status.has_changes || z.value), D = P(() => Object.keys(i.status.git_changes.workflow_changes_detail).length), x = P(() => i.status.git_changes.has_other_changes), S = P(() => {
      var O;
      return ((O = i.status.workflows.analyzed) == null ? void 0 : O.filter((B) => B.status === "broken")) || [];
    }), j = P(() => {
      var O;
      return ((O = i.status.workflows.analyzed) == null ? void 0 : O.filter(
        (B) => B.has_path_sync_issues && !B.has_issues
      )) || [];
    }), W = P(() => S.value.length > 0), H = P(() => W.value || j.value.length > 0 || i.status.missing_models_count > 0 || !i.status.comparison.is_synced || i.status.has_legacy_manager), L = P(() => {
      const O = [];
      return i.status.workflows.new.length > 0 && O.push(`${i.status.workflows.new.length} new`), i.status.workflows.modified.length > 0 && O.push(`${i.status.workflows.modified.length} modified`), i.status.workflows.deleted.length > 0 && O.push(`${i.status.workflows.deleted.length} deleted`), O.length > 0 ? `${O.join(", ")} workflow${O.length === 1 && !O[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), I = P(() => {
      var ae, we;
      const O = [], B = i.status.comparison;
      return (ae = B.missing_nodes) != null && ae.length && O.push(`${B.missing_nodes.length} missing node${B.missing_nodes.length === 1 ? "" : "s"}`), (we = B.extra_nodes) != null && we.length && O.push(`${B.extra_nodes.length} untracked node${B.extra_nodes.length === 1 ? "" : "s"}`), O.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${O.join(" and ")}.`;
    }), E = P(() => {
      var ae, we;
      const O = [], B = i.status.comparison;
      return (ae = B.extra_nodes) != null && ae.length && (B.extra_nodes.slice(0, 3).forEach((me) => {
        O.push(`Untracked: ${me}`);
      }), B.extra_nodes.length > 3 && O.push(`...and ${B.extra_nodes.length - 3} more untracked`)), (we = B.missing_nodes) != null && we.length && (B.missing_nodes.slice(0, 3).forEach((me) => {
        O.push(`Missing: ${me}`);
      }), B.missing_nodes.length > 3 && O.push(`...and ${B.missing_nodes.length - 3} more missing`)), O;
    });
    return (O, B) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, { title: "STATUS" })
        ]),
        content: l(() => [
          i.setupState === "no_workspace" ? (s(), T(et, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: l(() => [
              k(ee, {
                variant: "primary",
                size: "sm",
                onClick: B[0] || (B[0] = (ae) => O.$emit("start-setup"))
              }, {
                default: l(() => [...B[13] || (B[13] = [
                  h(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "unmanaged" ? (s(), T(et, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: l(() => [
              k(ee, {
                variant: "primary",
                size: "sm",
                onClick: B[1] || (B[1] = (ae) => O.$emit("view-environments"))
              }, {
                default: l(() => [...B[14] || (B[14] = [
                  h(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "empty_workspace" ? (s(), T(et, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: l(() => [
              k(ee, {
                variant: "primary",
                size: "sm",
                onClick: B[2] || (B[2] = (ae) => O.$emit("create-environment"))
              }, {
                default: l(() => [...B[15] || (B[15] = [
                  h(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: B[4] || (B[4] = (ae) => g.value = !0),
            onMouseleave: B[5] || (B[5] = (ae) => g.value = !1)
          }, [
            e("div", wa, [
              k(Ze, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: l(() => [...B[16] || (B[16] = [
                  h(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              k(Ks, { name: "fade" }, {
                default: l(() => [
                  g.value ? (s(), T(ee, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: f
                  }, {
                    default: l(() => [...B[17] || (B[17] = [
                      h(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : d("", !0)
                ]),
                _: 1
              })
            ]),
            k(Io, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Wt({
              left: l(() => [
                t.status.workflows.new.length ? (s(), T(at, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.modified.length ? (s(), T(at, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.deleted.length ? (s(), T(at, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : d("", !0),
                k(at, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: z.value
                }, null, 8, ["count", "separator"])
              ]),
              right: l(() => [
                t.status.git_changes.nodes_added.length ? (s(), T(at, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), T(at, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.workflow_changes ? (s(), T(at, {
                  key: 2,
                  icon: "●",
                  count: D.value,
                  label: D.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : d("", !0),
                x.value ? (s(), T(at, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : d("", !0),
                U.value && !v.value && !x.value ? (s(), T(at, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : d("", !0),
                U.value ? d("", !0) : (s(), T(at, {
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
                fn: l(() => [
                  B[19] || (B[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", ka, [
                    e("span", ba, a(L.value), 1),
                    k(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: B[3] || (B[3] = (ae) => O.$emit("commit-changes"))
                    }, {
                      default: l(() => [...B[18] || (B[18] = [
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
          t.status.is_detached_head ? (s(), T(et, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: l(() => [
              k(ee, {
                variant: "primary",
                size: "sm",
                onClick: B[6] || (B[6] = (ae) => O.$emit("create-branch"))
              }, {
                default: l(() => [...B[20] || (B[20] = [
                  h(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", _a, [
            k(Ze, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: l(() => [...B[21] || (B[21] = [
                h(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            H.value ? (s(), o(V, { key: 0 }, [
              S.value.length > 0 ? (s(), T(et, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${S.value.length} workflow${S.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: S.value.map((ae) => `${ae.name} — ${ae.issue_summary}`)
              }, {
                actions: l(() => [
                  k(ee, {
                    variant: "primary",
                    size: "sm",
                    onClick: B[7] || (B[7] = (ae) => O.$emit("view-workflows"))
                  }, {
                    default: l(() => [...B[22] || (B[22] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              j.value.length > 0 ? (s(), T(et, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${j.value.length} workflow${j.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: j.value.map((ae) => `${ae.name} — ${ae.models_needing_path_sync_count} model path${ae.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: l(() => [
                  k(ee, {
                    variant: "primary",
                    size: "sm",
                    onClick: B[8] || (B[8] = (ae) => O.$emit("view-workflows"))
                  }, {
                    default: l(() => [...B[23] || (B[23] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              t.status.missing_models_count > 0 && !W.value ? (s(), T(et, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: l(() => [
                  k(ee, {
                    variant: "primary",
                    size: "sm",
                    disabled: p.value,
                    onClick: _
                  }, {
                    default: l(() => [
                      h(a(p.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  k(ee, {
                    variant: "secondary",
                    size: "sm",
                    onClick: B[9] || (B[9] = (ae) => O.$emit("view-workflows"))
                  }, {
                    default: l(() => [...B[24] || (B[24] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : d("", !0),
              t.status.comparison.is_synced ? d("", !0) : (s(), T(et, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: I.value,
                items: E.value
              }, {
                actions: l(() => [
                  k(ee, {
                    variant: "secondary",
                    size: "sm",
                    onClick: f
                  }, {
                    default: l(() => [...B[25] || (B[25] = [
                      h(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  k(ee, {
                    variant: "primary",
                    size: "sm",
                    onClick: B[10] || (B[10] = (ae) => O.$emit("view-nodes"))
                  }, {
                    default: l(() => [...B[26] || (B[26] = [
                      h(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), T(et, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: l(() => [
                  k(ee, {
                    variant: "primary",
                    size: "sm",
                    onClick: B[11] || (B[11] = (ae) => O.$emit("view-nodes"))
                  }, {
                    default: l(() => [...B[27] || (B[27] = [
                      h(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : d("", !0)
            ], 64)) : $.value ? (s(), o("span", $a, "No issues")) : (s(), T(ot, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      k(ya, {
        show: w.value,
        status: t.status,
        onClose: B[12] || (B[12] = (ae) => w.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: r
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), xa = /* @__PURE__ */ Z(Ca, [["__scopeId", "data-v-0398c02e"]]), Sa = ["type", "value", "placeholder", "disabled"], Ia = /* @__PURE__ */ X({
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
    const i = t, w = n, g = b(null);
    function f(u) {
      const r = u.target.value;
      w("update:modelValue", r);
    }
    return Ue(() => {
      i.autoFocus && g.value && g.value.focus();
    }), c({
      focus: () => {
        var u;
        return (u = g.value) == null ? void 0 : u.focus();
      },
      blur: () => {
        var u;
        return (u = g.value) == null ? void 0 : u.blur();
      }
    }), (u, r) => (s(), o("input", {
      ref_key: "inputRef",
      ref: g,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: ie(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: f,
      onKeyup: [
        r[0] || (r[0] = ft((m) => u.$emit("enter"), ["enter"])),
        r[1] || (r[1] = ft((m) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: r[2] || (r[2] = (m) => u.$emit("focus")),
      onBlur: r[3] || (r[3] = (m) => u.$emit("blur"))
    }, null, 42, Sa));
  }
}), Xt = /* @__PURE__ */ Z(Ia, [["__scopeId", "data-v-0380d08f"]]), Ea = { class: "branch-create-form" }, Ma = { class: "form-actions" }, Ta = /* @__PURE__ */ X({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, i = b(""), w = P(() => {
      const u = i.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function g() {
      w.value && (n("create", i.value.trim()), i.value = "");
    }
    function f() {
      i.value = "", n("cancel");
    }
    return (u, r) => (s(), o("div", Ea, [
      k(Xt, {
        modelValue: i.value,
        "onUpdate:modelValue": r[0] || (r[0] = (m) => i.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: g,
        onEscape: f
      }, null, 8, ["modelValue"]),
      e("div", Ma, [
        k(ee, {
          variant: "primary",
          size: "sm",
          disabled: !w.value,
          onClick: g
        }, {
          default: l(() => [...r[1] || (r[1] = [
            h(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        k(ee, {
          variant: "secondary",
          size: "sm",
          onClick: f
        }, {
          default: l(() => [...r[2] || (r[2] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), za = /* @__PURE__ */ Z(Ta, [["__scopeId", "data-v-7c500394"]]), Ra = { class: "branch-list-item__indicator" }, La = { class: "branch-list-item__name" }, Pa = {
  key: 0,
  class: "branch-list-item__actions"
}, Da = {
  key: 0,
  class: "branch-list-item__current-label"
}, Na = /* @__PURE__ */ X({
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
      class: ie(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, [
      e("span", Ra, a(t.isCurrent ? "●" : "○"), 1),
      e("span", La, a(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (s(), o("div", Pa, [
        Se(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", Da, " current ")) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ua = /* @__PURE__ */ Z(Na, [["__scopeId", "data-v-c6581a24"]]), Oa = {
  key: 2,
  class: "branch-list"
}, Ba = /* @__PURE__ */ X({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: c }) {
    const n = c, i = b(!1);
    function w(f) {
      n("create", f), g();
    }
    function g() {
      i.value = !1;
    }
    return (f, u) => (s(), T(je, null, {
      header: l(() => [
        k(Ge, { title: "BRANCHES" }, {
          actions: l(() => [
            i.value ? d("", !0) : (s(), T(ee, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: u[0] || (u[0] = (r) => i.value = !0)
            }, {
              default: l(() => [...u[1] || (u[1] = [
                h(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: l(() => [
        i.value ? (s(), T(za, {
          key: 0,
          onCreate: w,
          onCancel: g
        })) : d("", !0),
        t.branches.length === 0 ? (s(), T(ot, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", Oa, [
          (s(!0), o(V, null, te(t.branches, (r) => (s(), T(Ua, {
            key: r.name,
            "branch-name": r.name,
            "is-current": r.is_current
          }, {
            actions: l(() => [
              r.is_current ? d("", !0) : (s(), T(ee, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (m) => f.$emit("delete", r.name)
              }, {
                default: l(() => [...u[2] || (u[2] = [
                  h(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              r.is_current ? d("", !0) : (s(), T(ee, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (m) => f.$emit("switch", r.name)
              }, {
                default: l(() => [...u[3] || (u[3] = [
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
}), Fa = /* @__PURE__ */ Z(Ba, [["__scopeId", "data-v-86784ddd"]]), Aa = { class: "commit-list" }, Va = /* @__PURE__ */ X({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (s(), o("div", Aa, [
      Se(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Wa = /* @__PURE__ */ Z(Va, [["__scopeId", "data-v-8c5ee761"]]), ja = { class: "commit-hash" }, Ga = /* @__PURE__ */ X({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = P(() => c.hash.slice(0, c.length));
    return (i, w) => (s(), o("span", ja, a(n.value), 1));
  }
}), Is = /* @__PURE__ */ Z(Ga, [["__scopeId", "data-v-7c333cc6"]]), qa = { class: "commit-message" }, Ha = { class: "commit-date" }, Ka = /* @__PURE__ */ X({
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
    function w() {
      n.clickable && i("click");
    }
    return (g, f) => (s(), o("div", {
      class: ie(["commit-item", { clickable: t.clickable }]),
      onClick: w
    }, [
      k(Is, { hash: t.hash }, null, 8, ["hash"]),
      e("span", qa, a(t.message), 1),
      e("span", Ha, a(t.relativeDate), 1),
      g.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: f[0] || (f[0] = ze(() => {
        }, ["stop"]))
      }, [
        Se(g.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ja = /* @__PURE__ */ Z(Ka, [["__scopeId", "data-v-dd7c621b"]]), Ya = /* @__PURE__ */ X({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (s(), T(je, null, {
      header: l(() => [
        k(Ge, { title: "HISTORY" })
      ]),
      content: l(() => [
        t.commits.length === 0 ? (s(), T(ot, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), T(Wa, { key: 1 }, {
          default: l(() => [
            (s(!0), o(V, null, te(t.commits, (i) => (s(), T(Ja, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (w) => c.$emit("select", i)
            }, {
              actions: l(() => [
                k(ee, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (w) => c.$emit("checkout", i),
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
}), Qa = /* @__PURE__ */ Z(Ya, [["__scopeId", "data-v-981c3c64"]]), d_ = ts({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const c_ = [
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
], u_ = {
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
}, Xa = [
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
], m_ = [
  ...Xa,
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
function Pt() {
  return !1;
}
function Oe() {
  const t = b(!1), c = b(null);
  async function n(q, de) {
    var Re;
    if (!((Re = window.app) != null && Re.api))
      throw new Error("ComfyUI API not available");
    const Ce = await window.app.api.fetchApi(q, de);
    if (!Ce.ok) {
      const Qe = await Ce.json().catch(() => ({}));
      throw new Error(Qe.error || Qe.message || `Request failed: ${Ce.status}`);
    }
    return Ce.json();
  }
  async function i(q = !1) {
    return n(q ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function w(q, de = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: q, allow_issues: de })
    });
  }
  async function g(q = 10, de = 0) {
    return n(`/v2/comfygit/log?limit=${q}&offset=${de}`);
  }
  async function f(q) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: q })
    });
  }
  async function u() {
    return n("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function r(q) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: q, force: !0 })
    });
  }
  async function m() {
    return n("/v2/comfygit/branches");
  }
  async function p(q) {
    return n(`/v2/comfygit/commit/${q}`);
  }
  async function y(q, de = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: q, force: de })
    });
  }
  async function _(q, de = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, start_point: de })
    });
  }
  async function C(q, de = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: q, force: de })
    });
  }
  async function z(q, de = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(q)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: de })
    });
  }
  async function U() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const q = await i();
        return [{
          name: q.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + q.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: q.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: q.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function v(q) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: q })
    });
  }
  async function $() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function D(q) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function x() {
    return n("/v2/workspace/environments/create_status");
  }
  async function S(q = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${q}`);
  }
  async function j(q) {
    return n(`/v2/workspace/environments/${q}`, {
      method: "DELETE"
    });
  }
  async function W(q = !1) {
    try {
      return n(q ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const de = await i(q), Ce = [];
      return de.workflows.new.forEach((Re) => {
        Ce.push({ name: Re, status: "new", missing_nodes: 0, missing_models: 0, path: Re });
      }), de.workflows.modified.forEach((Re) => {
        Ce.push({ name: Re, status: "modified", missing_nodes: 0, missing_models: 0, path: Re });
      }), de.workflows.synced.forEach((Re) => {
        Ce.push({ name: Re, status: "synced", missing_nodes: 0, missing_models: 0, path: Re });
      }), Ce;
    }
  }
  async function H(q) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/details`);
  }
  async function L(q) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/resolve`, {
      method: "POST"
    });
  }
  async function I(q, de, Ce) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: de, install_models: Ce })
    });
  }
  async function E(q, de, Ce) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: de, importance: Ce })
    });
  }
  async function O() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function B() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function ae(q) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(q)}`);
  }
  async function we(q) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function me(q, de) {
    return n(`/v2/workspace/models/${q}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: de })
    });
  }
  async function oe(q, de) {
    return n(`/v2/workspace/models/${q}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: de })
    });
  }
  async function F(q) {
    return n(`/v2/workspace/models/${q}`, {
      method: "DELETE"
    });
  }
  async function M(q) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function le() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function se() {
    return n("/v2/workspace/models/directory");
  }
  async function Me(q) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function ke() {
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
  async function re(q) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function ne(q, de) {
    try {
      const Ce = new URLSearchParams();
      return q && Ce.append("level", q), de && Ce.append("lines", de.toString()), n(`/v2/comfygit/debug/logs?${Ce}`);
    } catch {
      return [];
    }
  }
  async function J(q, de) {
    try {
      const Ce = new URLSearchParams();
      return q && Ce.append("level", q), de && Ce.append("lines", de.toString()), n(`/v2/workspace/debug/logs?${Ce}`);
    } catch {
      return [];
    }
  }
  async function ue() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function _e() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function Le(q) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function ve() {
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
  async function Y(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}/track-dev`, {
      method: "POST"
    });
  }
  async function fe(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}/install`, {
      method: "POST"
    });
  }
  async function $e(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}/update`, {
      method: "POST"
    });
  }
  async function Ee(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}`, {
      method: "DELETE"
    });
  }
  async function ye() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function rt(q, de) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, url: de })
    });
  }
  async function be(q) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}`, {
      method: "DELETE"
    });
  }
  async function Ae(q, de, Ce) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: de, push_url: Ce })
    });
  }
  async function bt(q) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/fetch`, {
      method: "POST"
    });
  }
  async function dt(q) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/status`);
    } catch {
      return null;
    }
  }
  async function De(q = "skip", de = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: q,
        remove_extra_nodes: de
      })
    });
  }
  async function _t(q, de) {
    const Ce = de ? `/v2/comfygit/remotes/${encodeURIComponent(q)}/pull-preview?branch=${encodeURIComponent(de)}` : `/v2/comfygit/remotes/${encodeURIComponent(q)}/pull-preview`;
    return n(Ce);
  }
  async function yt(q, de = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: de.modelStrategy || "skip",
        force: de.force || !1,
        resolutions: de.resolutions
      })
    });
  }
  async function ct(q, de) {
    const Ce = de ? `/v2/comfygit/remotes/${encodeURIComponent(q)}/push-preview?branch=${encodeURIComponent(de)}` : `/v2/comfygit/remotes/${encodeURIComponent(q)}/push-preview`;
    return n(Ce);
  }
  async function $t(q, de = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: de.force || !1 })
    });
  }
  async function ut(q, de) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: de })
    });
  }
  async function K(q) {
    const de = {
      success: 0,
      failed: []
    };
    for (const Ce of q)
      try {
        await L(Ce), de.success++;
      } catch (Re) {
        de.failed.push({
          name: Ce,
          error: Re instanceof Error ? Re.message : "Unknown error"
        });
      }
    return de;
  }
  async function N(q) {
    var Re;
    const de = new FormData();
    if (de.append("file", q), !((Re = window.app) != null && Re.api))
      throw new Error("ComfyUI API not available");
    const Ce = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: de
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Ce.ok) {
      const Qe = await Ce.json().catch(() => ({}));
      throw new Error(Qe.error || `Preview failed: ${Ce.status}`);
    }
    return Ce.json();
  }
  async function A(q) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(q)}`
    );
  }
  async function Q(q, de, Ce, Re) {
    var Gt;
    const Qe = new FormData();
    if (Qe.append("file", q), Qe.append("name", de), Qe.append("model_strategy", Ce), Qe.append("torch_backend", Re), !((Gt = window.app) != null && Gt.api))
      throw new Error("ComfyUI API not available");
    const St = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Qe
    });
    if (!St.ok) {
      const qt = await St.json().catch(() => ({}));
      throw new Error(qt.message || qt.error || `Import failed: ${St.status}`);
    }
    return St.json();
  }
  async function pe() {
    return n("/v2/workspace/import/status");
  }
  async function nt(q) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: q })
    });
  }
  async function Je(q, de, Ce, Re) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: q,
        name: de,
        model_strategy: Ce,
        torch_backend: Re
      })
    });
  }
  async function mt() {
    return n("/v2/setup/status");
  }
  async function xt(q) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function Ye() {
    return n("/v2/setup/initialize_status");
  }
  async function ss(q) {
    return n("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  return {
    isLoading: t,
    error: c,
    getStatus: i,
    commit: w,
    getHistory: g,
    exportEnv: f,
    validateExport: u,
    exportEnvWithForce: r,
    // Git Operations
    getBranches: m,
    getCommitDetail: p,
    checkout: y,
    createBranch: _,
    switchBranch: C,
    deleteBranch: z,
    // Environment Management
    getEnvironments: U,
    switchEnvironment: v,
    getSwitchProgress: $,
    createEnvironment: D,
    getCreateProgress: x,
    getComfyUIReleases: S,
    deleteEnvironment: j,
    // Workflow Management
    getWorkflows: W,
    getWorkflowDetails: H,
    resolveWorkflow: L,
    installWorkflowDeps: I,
    setModelImportance: E,
    // Model Management
    getEnvironmentModels: O,
    getWorkspaceModels: B,
    getModelDetails: ae,
    openFileLocation: we,
    addModelSource: me,
    removeModelSource: oe,
    deleteModel: F,
    downloadModel: M,
    scanWorkspaceModels: le,
    getModelsDirectory: se,
    setModelsDirectory: Me,
    // Settings
    getConfig: ke,
    updateConfig: re,
    // Debug/Logs
    getEnvironmentLogs: ne,
    getWorkspaceLogs: J,
    getEnvironmentLogPath: ue,
    getWorkspaceLogPath: _e,
    openFile: Le,
    // Node Management
    getNodes: ve,
    trackNodeAsDev: Y,
    installNode: fe,
    updateNode: $e,
    uninstallNode: Ee,
    // Git Remotes
    getRemotes: ye,
    addRemote: rt,
    removeRemote: be,
    updateRemoteUrl: Ae,
    fetchRemote: bt,
    getRemoteSyncStatus: dt,
    // Push/Pull
    getPullPreview: _t,
    pullFromRemote: yt,
    getPushPreview: ct,
    pushToRemote: $t,
    validateMerge: ut,
    // Environment Sync
    syncEnvironmentManually: De,
    // Workflow Repair
    repairWorkflowModels: K,
    // Import Operations
    previewTarballImport: N,
    previewGitImport: nt,
    validateEnvironmentName: A,
    executeImport: Q,
    executeGitImport: Je,
    getImportProgress: pe,
    // First-Time Setup
    getSetupStatus: mt,
    initializeWorkspace: xt,
    getInitializeProgress: Ye,
    validatePath: ss
  };
}
async function Dt(t, c = {}, n = 5e3) {
  const i = new AbortController(), w = setTimeout(() => i.abort(), n);
  try {
    const g = await fetch(t, {
      ...c,
      signal: i.signal
    });
    return clearTimeout(w), g;
  } catch (g) {
    throw clearTimeout(w), g.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : g;
  }
}
function Es() {
  const t = b(null);
  async function c() {
    try {
      const f = await Dt(
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
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const f = await Dt(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!f.ok) throw new Error("Health check failed");
      return await f.json();
    } catch {
      return t.value = await c(), null;
    }
  }
  async function i() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const f = await Dt(
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
  async function w() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await Dt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function g() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await Dt(
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
    restart: w,
    kill: g
  };
}
const Za = { class: "base-modal-header" }, el = {
  key: 0,
  class: "base-modal-title"
}, tl = { class: "base-modal-body" }, sl = {
  key: 0,
  class: "base-modal-loading"
}, ol = {
  key: 1,
  class: "base-modal-error"
}, nl = {
  key: 0,
  class: "base-modal-footer"
}, al = /* @__PURE__ */ X({
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
    function w() {
      n.closeOnOverlayClick && i("close");
    }
    function g(f) {
      f.key === "Escape" && n.showCloseButton && i("close");
    }
    return Ue(() => {
      document.addEventListener("keydown", g), document.body.style.overflow = "hidden";
    }), xs(() => {
      document.removeEventListener("keydown", g), document.body.style.overflow = "";
    }), (f, u) => (s(), T(Fe, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: w
      }, [
        e("div", {
          class: ie(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: u[1] || (u[1] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", Za, [
            Se(f.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", el, a(t.title), 1)) : d("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: u[0] || (u[0] = (r) => f.$emit("close"))
            }, [...u[2] || (u[2] = [
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
          e("div", tl, [
            t.loading ? (s(), o("div", sl, "Loading...")) : t.error ? (s(), o("div", ol, a(t.error), 1)) : Se(f.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          f.$slots.footer ? (s(), o("div", nl, [
            Se(f.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), Ke = /* @__PURE__ */ Z(al, [["__scopeId", "data-v-8dab1081"]]), ll = ["type", "disabled"], il = {
  key: 0,
  class: "spinner"
}, rl = /* @__PURE__ */ X({
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
      class: ie(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", il)) : d("", !0),
      Se(c.$slots, "default", {}, void 0, !0)
    ], 10, ll));
  }
}), ce = /* @__PURE__ */ Z(rl, [["__scopeId", "data-v-f3452606"]]), dl = {
  key: 0,
  class: "base-title-count"
}, cl = /* @__PURE__ */ X({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, n) => (s(), T(cs(`h${t.level}`), {
      class: ie(["base-title", t.variant])
    }, {
      default: l(() => [
        Se(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", dl, "(" + a(t.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ft = /* @__PURE__ */ Z(cl, [["__scopeId", "data-v-5a01561d"]]), ul = ["value", "disabled"], ml = {
  key: 0,
  value: "",
  disabled: ""
}, vl = ["value"], fl = {
  key: 0,
  class: "base-select-error"
}, gl = /* @__PURE__ */ X({
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
    return (i, w) => (s(), o("div", {
      class: ie(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: ie(["base-select", { error: !!t.error }]),
        onChange: w[0] || (w[0] = (g) => i.$emit("update:modelValue", g.target.value))
      }, [
        t.placeholder ? (s(), o("option", ml, a(t.placeholder), 1)) : d("", !0),
        (s(!0), o(V, null, te(t.options, (g) => (s(), o("option", {
          key: c(g),
          value: c(g)
        }, a(n(g)), 9, vl))), 128))
      ], 42, ul),
      t.error ? (s(), o("span", fl, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), pl = /* @__PURE__ */ Z(gl, [["__scopeId", "data-v-7436d745"]]), hl = { class: "popover-header" }, yl = { class: "popover-title" }, wl = { class: "popover-content" }, kl = {
  key: 0,
  class: "popover-actions"
}, bl = /* @__PURE__ */ X({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (s(), T(Fe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: gt({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", hl, [
            e("h4", yl, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", wl, [
            Se(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (s(), o("div", kl, [
            Se(c.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), it = /* @__PURE__ */ Z(bl, [["__scopeId", "data-v-42815ace"]]), _l = { class: "detail-section" }, $l = {
  key: 0,
  class: "empty-message"
}, Cl = { class: "model-header" }, xl = { class: "model-name" }, Sl = { class: "model-details" }, Il = { class: "model-row" }, El = { class: "model-row" }, Ml = { class: "label" }, Tl = {
  key: 0,
  class: "model-row model-row-nodes"
}, zl = { class: "node-list" }, Rl = ["onClick"], Ll = {
  key: 1,
  class: "model-row"
}, Pl = { class: "value" }, Dl = {
  key: 2,
  class: "model-row"
}, Nl = { class: "value error" }, Ul = {
  key: 0,
  class: "model-actions"
}, Ol = { class: "detail-section" }, Bl = {
  key: 0,
  class: "empty-message"
}, Fl = { class: "node-name" }, Al = {
  key: 0,
  class: "node-version"
}, Vl = /* @__PURE__ */ X({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getWorkflowDetails: w, setModelImportance: g, openFileLocation: f } = Oe(), u = b(null), r = b(!1), m = b(null), p = b(!1), y = b({}), _ = b(!1), C = b(/* @__PURE__ */ new Set()), z = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function U(L) {
      switch (L) {
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
    function v(L) {
      switch (L) {
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
    function $(L) {
      if (!L.loaded_by || L.loaded_by.length === 0) return [];
      const I = L.hash || L.filename;
      return C.value.has(I) ? L.loaded_by : L.loaded_by.slice(0, 3);
    }
    function D(L) {
      return C.value.has(L);
    }
    function x(L) {
      C.value.has(L) ? C.value.delete(L) : C.value.add(L), C.value = new Set(C.value);
    }
    async function S() {
      r.value = !0, m.value = null;
      try {
        u.value = await w(n.workflowName);
      } catch (L) {
        m.value = L instanceof Error ? L.message : "Failed to load workflow details";
      } finally {
        r.value = !1;
      }
    }
    function j(L, I) {
      y.value[L] = I, p.value = !0;
    }
    async function W(L) {
      try {
        await f(L);
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to open file location";
      }
    }
    async function H() {
      if (!p.value) {
        i("close");
        return;
      }
      r.value = !0, m.value = null;
      try {
        for (const [L, I] of Object.entries(y.value))
          await g(n.workflowName, L, I);
        i("refresh"), i("close");
      } catch (L) {
        m.value = L instanceof Error ? L.message : "Failed to save changes";
      } finally {
        r.value = !1;
      }
    }
    return Ue(S), (L, I) => (s(), o(V, null, [
      k(Ke, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: r.value,
        error: m.value || void 0,
        onClose: I[4] || (I[4] = (E) => i("close"))
      }, {
        body: l(() => [
          u.value ? (s(), o(V, { key: 0 }, [
            e("section", _l, [
              k(Ft, { variant: "section" }, {
                default: l(() => [
                  h("MODELS USED (" + a(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (s(), o("div", $l, " No models used in this workflow ")) : d("", !0),
              (s(!0), o(V, null, te(u.value.models, (E) => {
                var O;
                return s(), o("div", {
                  key: E.hash || E.filename,
                  class: "model-card"
                }, [
                  e("div", Cl, [
                    I[6] || (I[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", xl, a(E.filename), 1)
                  ]),
                  e("div", Sl, [
                    e("div", Il, [
                      I[7] || (I[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: ie(["value", U(E.status)])
                      }, a(v(E.status)), 3)
                    ]),
                    e("div", El, [
                      e("span", Ml, [
                        I[8] || (I[8] = h(" Importance: ", -1)),
                        k(Ss, {
                          size: 14,
                          title: "About importance levels",
                          onClick: I[0] || (I[0] = (B) => _.value = !0)
                        })
                      ]),
                      k(pl, {
                        "model-value": y.value[E.filename] || E.importance,
                        options: z,
                        "onUpdate:modelValue": (B) => j(E.filename, B)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    E.loaded_by && E.loaded_by.length > 0 ? (s(), o("div", Tl, [
                      I[9] || (I[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", zl, [
                        (s(!0), o(V, null, te($(E), (B, ae) => (s(), o("div", {
                          key: `${B.node_id}-${ae}`,
                          class: "node-reference"
                        }, a(B.node_type) + " (Node #" + a(B.node_id) + ") ", 1))), 128)),
                        E.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (B) => x(E.hash || E.filename)
                        }, a(D(E.hash || E.filename) ? "▼ Show less" : `▶ View all (${E.loaded_by.length})`), 9, Rl)) : d("", !0)
                      ])
                    ])) : d("", !0),
                    E.size_mb ? (s(), o("div", Ll, [
                      I[10] || (I[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", Pl, a(E.size_mb) + " MB", 1)
                    ])) : d("", !0),
                    E.has_category_mismatch ? (s(), o("div", Dl, [
                      I[13] || (I[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", Nl, [
                        I[11] || (I[11] = h(" In ", -1)),
                        e("code", null, a(E.actual_category) + "/", 1),
                        I[12] || (I[12] = h(" but loader needs ", -1)),
                        e("code", null, a((O = E.expected_categories) == null ? void 0 : O[0]) + "/", 1)
                      ])
                    ])) : d("", !0)
                  ]),
                  E.status !== "available" ? (s(), o("div", Ul, [
                    E.status === "downloadable" ? (s(), T(ce, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: I[1] || (I[1] = (B) => i("resolve"))
                    }, {
                      default: l(() => [...I[14] || (I[14] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    })) : E.status === "category_mismatch" && E.file_path ? (s(), T(ce, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (B) => W(E.file_path)
                    }, {
                      default: l(() => [...I[15] || (I[15] = [
                        h(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : E.status !== "path_mismatch" ? (s(), T(ce, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: I[2] || (I[2] = (B) => i("resolve"))
                    }, {
                      default: l(() => [...I[16] || (I[16] = [
                        h(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : d("", !0)
                  ])) : d("", !0)
                ]);
              }), 128))
            ]),
            e("section", Ol, [
              k(Ft, { variant: "section" }, {
                default: l(() => [
                  h("NODES USED (" + a(u.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.nodes.length === 0 ? (s(), o("div", Bl, " No custom nodes used in this workflow ")) : d("", !0),
              (s(!0), o(V, null, te(u.value.nodes, (E) => (s(), o("div", {
                key: E.name,
                class: "node-item"
              }, [
                e("span", {
                  class: ie(["node-status", E.status === "installed" ? "installed" : "missing"])
                }, a(E.status === "installed" ? "✓" : "✕"), 3),
                e("span", Fl, a(E.name), 1),
                E.version ? (s(), o("span", Al, "v" + a(E.version), 1)) : d("", !0)
              ]))), 128))
            ])
          ], 64)) : d("", !0)
        ]),
        footer: l(() => [
          k(ce, {
            variant: "secondary",
            onClick: I[3] || (I[3] = (E) => i("close"))
          }, {
            default: l(() => [...I[17] || (I[17] = [
              h(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (s(), T(ce, {
            key: 0,
            variant: "primary",
            onClick: H
          }, {
            default: l(() => [...I[18] || (I[18] = [
              h(" Save Changes ", -1)
            ])]),
            _: 1
          })) : d("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      k(it, {
        show: _.value,
        title: "Model Importance Levels",
        onClose: I[5] || (I[5] = (E) => _.value = !1)
      }, {
        content: l(() => [...I[19] || (I[19] = [
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
}), Wl = /* @__PURE__ */ Z(Vl, [["__scopeId", "data-v-668728e6"]]), Ie = ts({
  items: [],
  status: "idle"
});
let lt = null;
function Ms() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function os(t) {
  return Ie.items.find((c) => c.id === t);
}
async function It() {
  if (Ie.status === "downloading") return;
  const t = Ie.items.find((c) => c.status === "queued");
  if (!t) {
    Ie.status = "idle";
    return;
  }
  Ie.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await jl(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    Ie.status = "idle", It();
  }
}
async function jl(t) {
  return new Promise((c, n) => {
    lt && (lt.close(), lt = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), w = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    lt = w;
    let g = Date.now(), f = 0, u = !1;
    w.onmessage = (r) => {
      try {
        const m = JSON.parse(r.data);
        switch (m.type) {
          case "progress":
            t.downloaded = m.downloaded || 0, t.size = m.total || t.size;
            const p = Date.now(), y = (p - g) / 1e3;
            if (y > 0.5) {
              const _ = t.downloaded - f;
              if (t.speed = _ / y, g = p, f = t.downloaded, t.speed > 0 && t.size > 0) {
                const C = t.size - t.downloaded;
                t.eta = C / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            u = !0, w.close(), lt = null, c();
            break;
          case "error":
            u = !0, w.close(), lt = null, n(new Error(m.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, w.onerror = () => {
      w.close(), lt = null, u || n(new Error("Connection lost"));
    };
  });
}
async function Gl() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const c = await t.json();
    if (!c.pending_downloads || c.pending_downloads.length === 0) return;
    for (const n of c.pending_downloads) {
      if (Ie.items.some((w) => w.url === n.url && w.filename === n.filename))
        continue;
      const i = {
        id: Ms(),
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
    console.log(`[ComfyGit] Loaded ${c.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function jt() {
  function t(v) {
    for (const $ of v) {
      if (Ie.items.some(
        (S) => S.url === $.url && S.targetPath === $.targetPath && ["queued", "downloading", "paused", "completed"].includes(S.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${$.filename}`);
        continue;
      }
      const x = {
        id: Ms(),
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
      Ie.items.push(x);
    }
    Ie.status === "idle" && It();
  }
  async function c(v) {
    const $ = os(v);
    if ($) {
      if ($.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent($.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        lt && (lt.close(), lt = null), $.status = "failed", $.error = "Cancelled by user", Ie.status = "idle", It();
      } else if ($.status === "queued") {
        const D = Ie.items.findIndex((x) => x.id === v);
        D >= 0 && Ie.items.splice(D, 1);
      }
    }
  }
  function n(v) {
    const $ = os(v);
    !$ || $.status !== "failed" || ($.status = "queued", $.error = void 0, $.progress = 0, $.downloaded = 0, Ie.status === "idle" && It());
  }
  function i(v) {
    const $ = os(v);
    !$ || $.status !== "paused" || ($.status = "queued", Ie.status === "idle" && It());
  }
  function w() {
    const v = Ie.items.filter(($) => $.status === "paused");
    for (const $ of v)
      $.status = "queued";
    Ie.status === "idle" && It();
  }
  function g(v) {
    const $ = Ie.items.findIndex((D) => D.id === v);
    $ >= 0 && ["completed", "failed", "paused"].includes(Ie.items[$].status) && Ie.items.splice($, 1);
  }
  function f() {
    Ie.items = Ie.items.filter((v) => v.status !== "completed");
  }
  function u() {
    Ie.items = Ie.items.filter((v) => v.status !== "failed");
  }
  const r = P(
    () => Ie.items.find((v) => v.status === "downloading")
  ), m = P(
    () => Ie.items.filter((v) => v.status === "queued")
  ), p = P(
    () => Ie.items.filter((v) => v.status === "completed")
  ), y = P(
    () => Ie.items.filter((v) => v.status === "failed")
  ), _ = P(
    () => Ie.items.filter((v) => v.status === "paused")
  ), C = P(() => Ie.items.length > 0), z = P(
    () => Ie.items.filter((v) => v.status === "queued" || v.status === "downloading").length
  ), U = P(
    () => Ie.items.some((v) => v.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Js(Ie),
    // Computed
    currentDownload: r,
    queuedItems: m,
    completedItems: p,
    failedItems: y,
    pausedItems: _,
    hasItems: C,
    activeCount: z,
    hasPaused: U,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: i,
    resumeAllPaused: w,
    removeItem: g,
    clearCompleted: f,
    clearFailed: u,
    loadPendingDownloads: Gl
  };
}
function Ts() {
  const t = b(null), c = b(null), n = b([]), i = b([]), w = b(!1), g = b(null);
  async function f(D, x) {
    var j;
    if (!((j = window.app) != null && j.api))
      throw new Error("ComfyUI API not available");
    const S = await window.app.api.fetchApi(D, x);
    if (!S.ok) {
      const W = await S.json().catch(() => ({})), H = W.error || W.message || `Request failed: ${S.status}`;
      throw new Error(H);
    }
    return S.json();
  }
  async function u(D) {
    w.value = !0, g.value = null;
    try {
      let x;
      return Pt() || (x = await f(
        `/v2/comfygit/workflow/${D}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = x, x;
    } catch (x) {
      const S = x instanceof Error ? x.message : "Unknown error occurred";
      throw g.value = S, x;
    } finally {
      w.value = !1;
    }
  }
  async function r(D, x, S, j) {
    w.value = !0, g.value = null;
    try {
      let W;
      if (!Pt()) {
        const H = Object.fromEntries(x), L = Object.fromEntries(S), I = j ? Array.from(j) : [];
        W = await f(
          `/v2/comfygit/workflow/${D}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: H,
              model_choices: L,
              skipped_packages: I
            })
          }
        );
      }
      return c.value = W, W;
    } catch (W) {
      const H = W instanceof Error ? W.message : "Unknown error occurred";
      throw g.value = H, W;
    } finally {
      w.value = !1;
    }
  }
  async function m(D, x = 10) {
    w.value = !0, g.value = null;
    try {
      let S;
      return Pt() || (S = await f(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: D, limit: x })
        }
      )), n.value = S.results, S.results;
    } catch (S) {
      const j = S instanceof Error ? S.message : "Unknown error occurred";
      throw g.value = j, S;
    } finally {
      w.value = !1;
    }
  }
  async function p(D, x = 10) {
    w.value = !0, g.value = null;
    try {
      let S;
      return Pt() || (S = await f(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: D, limit: x })
        }
      )), i.value = S.results, S.results;
    } catch (S) {
      const j = S instanceof Error ? S.message : "Unknown error occurred";
      throw g.value = j, S;
    } finally {
      w.value = !1;
    }
  }
  const y = ts({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function _() {
    y.phase = "idle", y.currentFile = void 0, y.currentFileIndex = void 0, y.totalFiles = void 0, y.bytesDownloaded = void 0, y.bytesTotal = void 0, y.completedFiles = [], y.nodesToInstall = [], y.nodesInstalled = [], y.installError = void 0, y.needsRestart = void 0, y.error = void 0, y.nodeInstallProgress = void 0;
  }
  async function C(D) {
    y.phase = "installing", y.nodesInstalled = [], y.installError = void 0, y.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Pt(), await z(D);
    } catch (x) {
      const S = x instanceof Error ? x.message : "Failed to install nodes";
      throw y.installError = S, x;
    }
  }
  async function z(D) {
    var S;
    const x = await f(
      `/v2/comfygit/workflow/${D}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: y.nodesToInstall
        })
      }
    );
    if (y.nodeInstallProgress) {
      y.nodeInstallProgress.totalNodes = y.nodesToInstall.length;
      const j = new Map(((S = x.failed) == null ? void 0 : S.map((W) => [W.node_id, W.error])) || []);
      for (let W = 0; W < y.nodesToInstall.length; W++) {
        const H = y.nodesToInstall[W], L = j.get(H);
        y.nodeInstallProgress.completedNodes.push({
          node_id: H,
          success: !L,
          error: L
        });
      }
    }
    return y.nodesInstalled = x.nodes_installed, y.needsRestart = x.nodes_installed.length > 0, x.failed && x.failed.length > 0 && (y.installError = `${x.failed.length} package(s) failed to install`), x;
  }
  async function U(D, x, S) {
    _(), y.phase = "resolving", g.value = null;
    const j = Object.fromEntries(x), W = Object.fromEntries(S);
    try {
      const H = await fetch(`/v2/comfygit/workflow/${D}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: j,
          model_choices: W
        })
      });
      if (!H.ok)
        throw new Error(`Request failed: ${H.status}`);
      if (!H.body)
        throw new Error("No response body");
      const L = H.body.getReader(), I = new TextDecoder();
      let E = "";
      for (; ; ) {
        const { done: O, value: B } = await L.read();
        if (O) break;
        E += I.decode(B, { stream: !0 });
        const ae = E.split(`

`);
        E = ae.pop() || "";
        for (const we of ae) {
          if (!we.trim()) continue;
          const me = we.split(`
`);
          let oe = "", F = "";
          for (const M of me)
            M.startsWith("event: ") ? oe = M.slice(7) : M.startsWith("data: ") && (F = M.slice(6));
          if (F)
            try {
              const M = JSON.parse(F);
              v(oe, M);
            } catch (M) {
              console.warn("Failed to parse SSE event:", M);
            }
        }
      }
    } catch (H) {
      const L = H instanceof Error ? H.message : "Unknown error occurred";
      throw g.value = L, y.error = L, y.phase = "error", H;
    }
  }
  function v(D, x) {
    switch (D) {
      case "batch_start":
        y.phase = "downloading", y.totalFiles = x.total;
        break;
      case "file_start":
        y.currentFile = x.filename, y.currentFileIndex = x.index, y.bytesDownloaded = 0, y.bytesTotal = void 0;
        break;
      case "file_progress":
        y.bytesDownloaded = x.downloaded, y.bytesTotal = x.total;
        break;
      case "file_complete":
        y.completedFiles.push({
          filename: x.filename,
          success: x.success,
          error: x.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        y.nodesToInstall = x.nodes_to_install || [], x.download_results && (y.completedFiles = x.download_results), y.phase = "complete";
        break;
      case "error":
        y.error = x.message, y.phase = "error", g.value = x.message;
        break;
    }
  }
  function $(D, x) {
    const { addToQueue: S } = jt(), j = x.filter((W) => W.url && W.target_path).map((W) => ({
      workflow: D,
      filename: W.filename,
      url: W.url,
      targetPath: W.target_path,
      size: W.size || 0,
      type: "model"
    }));
    return j.length > 0 && S(j), j.length;
  }
  return {
    // State
    result: t,
    appliedResult: c,
    searchResults: n,
    modelSearchResults: i,
    isLoading: w,
    error: g,
    progress: y,
    // Methods
    analyzeWorkflow: u,
    applyResolution: r,
    applyResolutionWithProgress: U,
    installNodes: C,
    searchNodes: m,
    searchModels: p,
    resetProgress: _,
    queueModelDownloads: $
  };
}
const ql = { class: "resolution-stepper" }, Hl = { class: "stepper-header" }, Kl = ["onClick"], Jl = {
  key: 0,
  class: "step-icon"
}, Yl = {
  key: 1,
  class: "step-number"
}, Ql = { class: "step-label" }, Xl = {
  key: 0,
  class: "step-connector"
}, Zl = { class: "stepper-content" }, ei = /* @__PURE__ */ X({
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
    function w(m) {
      var p;
      if ((p = n.stepStats) != null && p[m]) {
        const y = n.stepStats[m];
        return y.total > 0 && y.resolved === y.total;
      }
      return n.completedSteps.includes(m);
    }
    function g(m) {
      var p;
      if ((p = n.stepStats) != null && p[m]) {
        const y = n.stepStats[m];
        return y.resolved > 0 && y.resolved < y.total;
      }
      return !1;
    }
    function f(m) {
      return w(m) ? "state-complete" : g(m) ? "state-partial" : "state-pending";
    }
    function u(m) {
      return !1;
    }
    function r(m) {
      i("step-change", m);
    }
    return (m, p) => (s(), o("div", ql, [
      e("div", Hl, [
        (s(!0), o(V, null, te(t.steps, (y, _) => (s(), o("div", {
          key: y.id,
          class: ie(["step", {
            active: t.currentStep === y.id,
            completed: w(y.id),
            "in-progress": g(y.id),
            disabled: u(y.id)
          }]),
          onClick: (C) => r(y.id)
        }, [
          e("div", {
            class: ie(["step-indicator", f(y.id)])
          }, [
            w(y.id) ? (s(), o("span", Jl, "✓")) : (s(), o("span", Yl, a(_ + 1), 1))
          ], 2),
          e("div", Ql, a(y.label), 1),
          _ < t.steps.length - 1 ? (s(), o("div", Xl)) : d("", !0)
        ], 10, Kl))), 128))
      ]),
      e("div", Zl, [
        Se(m.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), ti = /* @__PURE__ */ Z(ei, [["__scopeId", "data-v-2a7b3af8"]]), si = /* @__PURE__ */ X({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = P(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), i = P(() => `confidence-${n.value}`), w = P(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (g, f) => (s(), o("span", {
      class: ie(["confidence-badge", i.value, t.size])
    }, a(w.value), 3));
  }
}), Zt = /* @__PURE__ */ Z(si, [["__scopeId", "data-v-17ec4b80"]]), oi = { class: "node-info" }, ni = { class: "node-info-text" }, ai = { class: "item-body" }, li = {
  key: 0,
  class: "resolved-state"
}, ii = {
  key: 1,
  class: "multiple-options"
}, ri = { class: "options-list" }, di = ["onClick"], ci = ["name", "value", "checked", "onChange"], ui = { class: "option-content" }, mi = { class: "option-header" }, vi = { class: "option-package-id" }, fi = {
  key: 0,
  class: "option-title"
}, gi = { class: "option-meta" }, pi = {
  key: 0,
  class: "installed-badge"
}, hi = { class: "action-buttons" }, yi = {
  key: 2,
  class: "unresolved"
}, wi = {
  key: 0,
  class: "searching-state"
}, ki = { class: "options-list" }, bi = ["onClick"], _i = ["name", "value"], $i = { class: "option-content" }, Ci = { class: "option-header" }, xi = { class: "option-package-id" }, Si = {
  key: 0,
  class: "option-description"
}, Ii = { class: "option-meta" }, Ei = {
  key: 0,
  class: "installed-badge"
}, Mi = {
  key: 2,
  class: "unresolved-message"
}, Ti = { class: "action-buttons" }, zi = /* @__PURE__ */ X({
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
    function w(r, m = 80) {
      return r.length <= m ? r : r.slice(0, m - 3) + "...";
    }
    const g = P(() => !!n.choice);
    P(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.action;
    }), P(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.package_id;
    });
    const f = P(() => {
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
    function u(r) {
      i("option-selected", r);
    }
    return (r, m) => (s(), o("div", {
      class: ie(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: g.value }])
    }, [
      e("div", oi, [
        e("span", ni, [
          m[7] || (m[7] = h("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: ie(["status-badge", f.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", ai, [
        g.value ? (s(), o("div", li, [
          k(ce, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (p) => i("clear-choice"))
          }, {
            default: l(() => [...m[8] || (m[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", ii, [
          m[12] || (m[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", ri, [
            (s(!0), o(V, null, te(t.options, (p, y) => (s(), o("label", {
              key: p.package_id,
              class: ie(["option-card", { selected: t.selectedOptionIndex === y }]),
              onClick: (_) => u(y)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: y,
                checked: t.selectedOptionIndex === y,
                onChange: (_) => u(y)
              }, null, 40, ci),
              e("div", ui, [
                e("div", mi, [
                  e("span", vi, a(p.package_id), 1),
                  k(Zt, {
                    confidence: p.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                p.title && p.title !== p.package_id ? (s(), o("div", fi, a(p.title), 1)) : d("", !0),
                e("div", gi, [
                  p.is_installed ? (s(), o("span", pi, "Already Installed")) : d("", !0)
                ])
              ])
            ], 10, di))), 128))
          ]),
          e("div", hi, [
            k(ce, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (p) => i("search"))
            }, {
              default: l(() => [...m[9] || (m[9] = [
                h(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            k(ce, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (p) => i("manual-entry"))
            }, {
              default: l(() => [...m[10] || (m[10] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(ce, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (p) => i("mark-optional"))
            }, {
              default: l(() => [...m[11] || (m[11] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", yi, [
          t.isSearching ? (s(), o("div", wi, [...m[13] || (m[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(V, { key: 1 }, [
            m[14] || (m[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", ki, [
              (s(!0), o(V, null, te(t.searchResults.slice(0, 5), (p, y) => (s(), o("label", {
                key: p.package_id,
                class: "option-card",
                onClick: (_) => i("search-result-selected", p)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: y
                }, null, 8, _i),
                e("div", $i, [
                  e("div", Ci, [
                    e("span", xi, a(p.package_id), 1),
                    k(Zt, {
                      confidence: p.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  p.description ? (s(), o("div", Si, a(w(p.description)), 1)) : d("", !0),
                  e("div", Ii, [
                    p.is_installed ? (s(), o("span", Ei, "Already Installed")) : d("", !0)
                  ])
                ])
              ], 8, bi))), 128))
            ])
          ], 64)) : (s(), o("div", Mi, [...m[15] || (m[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", Ti, [
            k(ce, {
              variant: "secondary",
              size: "sm",
              onClick: m[4] || (m[4] = (p) => i("search"))
            }, {
              default: l(() => {
                var p;
                return [
                  h(a((p = t.searchResults) != null && p.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            k(ce, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (p) => i("manual-entry"))
            }, {
              default: l(() => [...m[16] || (m[16] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(ce, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (p) => i("mark-optional"))
            }, {
              default: l(() => [...m[17] || (m[17] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Ri = /* @__PURE__ */ Z(zi, [["__scopeId", "data-v-c2997d1d"]]), Li = { class: "item-navigator" }, Pi = { class: "nav-item-info" }, Di = ["title"], Ni = { class: "nav-controls" }, Ui = { class: "nav-arrows" }, Oi = ["disabled"], Bi = ["disabled"], Fi = { class: "nav-position" }, Ai = /* @__PURE__ */ X({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const n = c;
    return (i, w) => (s(), o("div", Li, [
      e("div", Pi, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, Di)
      ]),
      e("div", Ni, [
        e("div", Ui, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: w[0] || (w[0] = (g) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, Oi),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: w[1] || (w[1] = (g) => n("next")),
            title: "Next item"
          }, " → ", 8, Bi)
        ]),
        e("span", Fi, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), zs = /* @__PURE__ */ Z(Ai, [["__scopeId", "data-v-74af7920"]]), Vi = ["type", "value", "placeholder", "disabled"], Wi = {
  key: 0,
  class: "base-input-error"
}, ji = /* @__PURE__ */ X({
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
      class: ie(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: ie(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          n[1] || (n[1] = ft((i) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = ft((i) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Vi),
      t.error ? (s(), o("span", Wi, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), st = /* @__PURE__ */ Z(ji, [["__scopeId", "data-v-9ba02cdc"]]), Gi = { class: "node-resolution-step" }, qi = {
  key: 0,
  class: "auto-resolved-section"
}, Hi = { class: "section-header" }, Ki = { class: "stat-badge" }, Ji = { class: "resolved-packages-list" }, Yi = { class: "package-info" }, Qi = { class: "package-id" }, Xi = { class: "node-count" }, Zi = { class: "package-actions" }, er = {
  key: 0,
  class: "status-badge install"
}, tr = {
  key: 1,
  class: "status-badge skip"
}, sr = ["onClick"], or = {
  key: 1,
  class: "section-divider"
}, nr = { class: "step-header" }, ar = { class: "stat-badge" }, lr = {
  key: 1,
  class: "step-body"
}, ir = {
  key: 3,
  class: "empty-state"
}, rr = { class: "node-modal-body" }, dr = { class: "node-search-results-container" }, cr = {
  key: 0,
  class: "node-search-results"
}, ur = ["onClick"], mr = { class: "node-result-header" }, vr = { class: "node-result-package-id" }, fr = {
  key: 0,
  class: "node-result-description"
}, gr = {
  key: 1,
  class: "node-empty-state"
}, pr = {
  key: 2,
  class: "node-empty-state"
}, hr = {
  key: 3,
  class: "node-empty-state"
}, yr = { class: "node-manual-entry-modal" }, wr = { class: "node-modal-body" }, kr = { class: "node-modal-actions" }, br = /* @__PURE__ */ X({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: c }) {
    const n = t, i = c, { searchNodes: w } = Ts(), g = b(0), f = b(!1), u = b(!1), r = b(""), m = b(""), p = b([]), y = b(!1), _ = b(/* @__PURE__ */ new Map()), C = b(/* @__PURE__ */ new Set()), z = b(!1);
    function U() {
      z.value && F(), z.value = !1;
    }
    const v = P(() => n.nodes[g.value]), $ = P(() => n.nodes.filter((J) => n.nodeChoices.has(J.node_type)).length), D = P(() => v.value ? _.value.get(v.value.node_type) || [] : []), x = P(() => v.value ? C.value.has(v.value.node_type) : !1);
    kt(v, async (J) => {
      var ue;
      J && ((ue = J.options) != null && ue.length || _.value.has(J.node_type) || C.value.has(J.node_type) || n.nodeChoices.has(J.node_type) || await S(J.node_type));
    }, { immediate: !0 });
    async function S(J) {
      C.value.add(J);
      try {
        const ue = await w(J, 5);
        _.value.set(J, ue);
      } catch {
        _.value.set(J, []);
      } finally {
        C.value.delete(J);
      }
    }
    const j = P(() => n.autoResolvedPackages.filter((J) => !n.skippedPackages.has(J.package_id)).length);
    function W(J) {
      return n.skippedPackages.has(J);
    }
    function H(J) {
      i("package-skip", J);
    }
    const L = P(() => {
      var ue;
      if (!v.value) return "not-found";
      const J = n.nodeChoices.get(v.value.node_type);
      if (J)
        switch (J.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (ue = v.value.options) != null && ue.length ? "ambiguous" : "not-found";
    }), I = P(() => {
      var ue;
      if (!v.value) return;
      const J = n.nodeChoices.get(v.value.node_type);
      if (J)
        switch (J.action) {
          case "install":
            return J.package_id ? `→ ${J.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (ue = v.value.options) != null && ue.length ? `${v.value.options.length} matches` : "Not Found";
    });
    function E(J) {
      J >= 0 && J < n.nodes.length && (g.value = J);
    }
    function O() {
      v.value && i("mark-optional", v.value.node_type);
    }
    function B() {
      v.value && i("skip", v.value.node_type);
    }
    function ae(J) {
      v.value && i("option-selected", v.value.node_type, J);
    }
    function we() {
      v.value && i("clear-choice", v.value.node_type);
    }
    function me() {
      v.value && (r.value = v.value.node_type, p.value = D.value, f.value = !0, Me(r.value));
    }
    function oe() {
      m.value = "", u.value = !0;
    }
    function F() {
      f.value = !1, r.value = "", p.value = [];
    }
    function M() {
      u.value = !1, m.value = "";
    }
    let le = null;
    function se() {
      le && clearTimeout(le), le = setTimeout(() => {
        Me(r.value);
      }, 300);
    }
    async function Me(J) {
      if (!J.trim()) {
        p.value = [];
        return;
      }
      y.value = !0;
      try {
        p.value = await w(J, 10);
      } catch {
        p.value = [];
      } finally {
        y.value = !1;
      }
    }
    function ke(J) {
      v.value && (i("manual-entry", v.value.node_type, J.package_id), F());
    }
    function re(J) {
      v.value && i("manual-entry", v.value.node_type, J.package_id);
    }
    function ne() {
      !v.value || !m.value.trim() || (i("manual-entry", v.value.node_type, m.value.trim()), M());
    }
    return (J, ue) => {
      var _e, Le;
      return s(), o("div", Gi, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", qi, [
          e("div", Hi, [
            ue[6] || (ue[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", Ki, a(j.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", Ji, [
            (s(!0), o(V, null, te(t.autoResolvedPackages, (ve) => (s(), o("div", {
              key: ve.package_id,
              class: "resolved-package-item"
            }, [
              e("div", Yi, [
                e("code", Qi, a(ve.package_id), 1),
                e("span", Xi, a(ve.node_types_count) + " node type" + a(ve.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", Zi, [
                W(ve.package_id) ? (s(), o("span", tr, " SKIPPED ")) : (s(), o("span", er, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (Y) => H(ve.package_id)
                }, a(W(ve.package_id) ? "Include" : "Skip"), 9, sr)
              ])
            ]))), 128))
          ])
        ])) : d("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", or)) : d("", !0),
        t.nodes.length > 0 ? (s(), o(V, { key: 2 }, [
          e("div", nr, [
            ue[7] || (ue[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", ar, a($.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          v.value ? (s(), T(zs, {
            key: 0,
            "item-name": v.value.node_type,
            "current-index": g.value,
            "total-items": t.nodes.length,
            onPrev: ue[0] || (ue[0] = (ve) => E(g.value - 1)),
            onNext: ue[1] || (ue[1] = (ve) => E(g.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
          v.value ? (s(), o("div", lr, [
            k(Ri, {
              "node-type": v.value.node_type,
              "has-multiple-options": !!((_e = v.value.options) != null && _e.length),
              options: v.value.options,
              choice: (Le = t.nodeChoices) == null ? void 0 : Le.get(v.value.node_type),
              status: L.value,
              "status-label": I.value,
              "search-results": D.value,
              "is-searching": x.value,
              onMarkOptional: O,
              onSkip: B,
              onManualEntry: oe,
              onSearch: me,
              onOptionSelected: ae,
              onClearChoice: we,
              onSearchResultSelected: re
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : d("", !0)
        ], 64)) : d("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", ir, [...ue[8] || (ue[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : d("", !0),
        (s(), T(Fe, { to: "body" }, [
          f.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ue[4] || (ue[4] = ze((ve) => z.value = !0, ["self"])),
            onMouseup: ze(U, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: ue[3] || (ue[3] = (ve) => z.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                ue[9] || (ue[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: F
                }, "✕")
              ]),
              e("div", rr, [
                k(st, {
                  modelValue: r.value,
                  "onUpdate:modelValue": ue[2] || (ue[2] = (ve) => r.value = ve),
                  placeholder: "Search by node type, package name...",
                  onInput: se
                }, null, 8, ["modelValue"]),
                e("div", dr, [
                  p.value.length > 0 ? (s(), o("div", cr, [
                    (s(!0), o(V, null, te(p.value, (ve) => (s(), o("div", {
                      key: ve.package_id,
                      class: "node-search-result-item",
                      onClick: (Y) => ke(ve)
                    }, [
                      e("div", mr, [
                        e("code", vr, a(ve.package_id), 1),
                        ve.match_confidence ? (s(), T(Zt, {
                          key: 0,
                          confidence: ve.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : d("", !0)
                      ]),
                      ve.description ? (s(), o("div", fr, a(ve.description), 1)) : d("", !0)
                    ], 8, ur))), 128))
                  ])) : y.value ? (s(), o("div", gr, "Searching...")) : r.value ? (s(), o("div", pr, 'No packages found matching "' + a(r.value) + '"', 1)) : (s(), o("div", hr, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : d("", !0)
        ])),
        (s(), T(Fe, { to: "body" }, [
          u.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ze(M, ["self"])
          }, [
            e("div", yr, [
              e("div", { class: "node-modal-header" }, [
                ue[10] || (ue[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: M
                }, "✕")
              ]),
              e("div", wr, [
                k(st, {
                  modelValue: m.value,
                  "onUpdate:modelValue": ue[5] || (ue[5] = (ve) => m.value = ve),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", kr, [
                  k(ce, {
                    variant: "secondary",
                    onClick: M
                  }, {
                    default: l(() => [...ue[11] || (ue[11] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(ce, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: ne
                  }, {
                    default: l(() => [...ue[12] || (ue[12] = [
                      h(" Add Package ", -1)
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
}), _r = /* @__PURE__ */ Z(br, [["__scopeId", "data-v-281581bc"]]), $r = { class: "node-info" }, Cr = { class: "node-info-text" }, xr = { class: "item-body" }, Sr = {
  key: 0,
  class: "resolved-state"
}, Ir = {
  key: 1,
  class: "multiple-options"
}, Er = { class: "options-list" }, Mr = ["onClick"], Tr = ["name", "value", "checked", "onChange"], zr = { class: "option-content" }, Rr = { class: "option-header" }, Lr = { class: "option-filename" }, Pr = { class: "option-meta" }, Dr = { class: "option-size" }, Nr = { class: "option-category" }, Ur = { class: "option-path" }, Or = { class: "action-buttons" }, Br = {
  key: 2,
  class: "unresolved"
}, Fr = { class: "action-buttons" }, Ar = /* @__PURE__ */ X({
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
    const n = t, i = c, w = P(() => !!n.choice);
    P(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.action;
    }), P(() => {
      var r, m;
      return ((m = (r = n.choice) == null ? void 0 : r.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const g = P(() => {
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
    function f(r) {
      i("option-selected", r);
    }
    function u(r) {
      if (!r) return "Unknown";
      const m = r / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(r / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (r, m) => (s(), o("div", {
      class: ie(["model-resolution-item", { resolved: w.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", $r, [
        e("span", Cr, [
          m[7] || (m[7] = h("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: ie(["status-badge", g.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", xr, [
        w.value ? (s(), o("div", Sr, [
          k(ce, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (p) => i("clear-choice"))
          }, {
            default: l(() => [...m[8] || (m[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Ir, [
          m[12] || (m[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Er, [
            (s(!0), o(V, null, te(t.options, (p, y) => (s(), o("label", {
              key: p.model.hash,
              class: ie(["option-card", { selected: t.selectedOptionIndex === y }]),
              onClick: (_) => f(y)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: y,
                checked: t.selectedOptionIndex === y,
                onChange: (_) => f(y)
              }, null, 40, Tr),
              e("div", zr, [
                e("div", Rr, [
                  e("span", Lr, a(p.model.filename), 1),
                  k(Zt, {
                    confidence: p.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Pr, [
                  e("span", Dr, a(u(p.model.size)), 1),
                  e("span", Nr, a(p.model.category), 1)
                ]),
                e("div", Ur, a(p.model.relative_path), 1)
              ])
            ], 10, Mr))), 128))
          ]),
          e("div", Or, [
            k(ce, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (p) => i("search"))
            }, {
              default: l(() => [...m[9] || (m[9] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(ce, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (p) => i("download-url"))
            }, {
              default: l(() => [...m[10] || (m[10] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(ce, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (p) => i("mark-optional"))
            }, {
              default: l(() => [...m[11] || (m[11] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Br, [
          m[16] || (m[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Fr, [
            k(ce, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (p) => i("search"))
            }, {
              default: l(() => [...m[13] || (m[13] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(ce, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (p) => i("download-url"))
            }, {
              default: l(() => [...m[14] || (m[14] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(ce, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (p) => i("mark-optional"))
            }, {
              default: l(() => [...m[15] || (m[15] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Vr = /* @__PURE__ */ Z(Ar, [["__scopeId", "data-v-8a82fefa"]]), Wr = { class: "model-resolution-step" }, jr = { class: "step-header" }, Gr = { class: "step-info" }, qr = { class: "step-title" }, Hr = { class: "step-description" }, Kr = { class: "stat-badge" }, Jr = {
  key: 1,
  class: "step-body"
}, Yr = {
  key: 2,
  class: "empty-state"
}, Qr = { class: "model-search-modal" }, Xr = { class: "model-modal-body" }, Zr = {
  key: 0,
  class: "model-search-results"
}, ed = ["onClick"], td = { class: "model-result-header" }, sd = { class: "model-result-filename" }, od = { class: "model-result-meta" }, nd = { class: "model-result-category" }, ad = { class: "model-result-size" }, ld = {
  key: 0,
  class: "model-result-path"
}, id = {
  key: 1,
  class: "model-no-results"
}, rd = {
  key: 2,
  class: "model-searching"
}, dd = { class: "model-download-url-modal" }, cd = { class: "model-modal-body" }, ud = { class: "model-input-group" }, md = { class: "model-input-group" }, vd = { class: "model-modal-actions" }, fd = /* @__PURE__ */ X({
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
    function i(F) {
      var M;
      return F && ((M = n[F]) == null ? void 0 : M[0]) || null;
    }
    const w = t, g = c, f = b(0), u = b(!1), r = b(!1), m = b(""), p = b(""), y = b(""), _ = b([]), C = b(!1), z = P(() => w.models[f.value]), U = P(() => w.models.some((F) => F.is_download_intent)), v = P(() => w.models.filter(
      (F) => w.modelChoices.has(F.filename) || F.is_download_intent
    ).length), $ = P(() => {
      var M;
      if (!z.value) return "";
      const F = i((M = z.value.reference) == null ? void 0 : M.node_type);
      return F ? `${F}/${z.value.filename}` : "";
    }), D = P(() => {
      var M;
      if (!z.value) return "not-found";
      const F = w.modelChoices.get(z.value.filename);
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
      return z.value.is_download_intent ? "download" : (M = z.value.options) != null && M.length ? "ambiguous" : "not-found";
    }), x = P(() => {
      var M, le;
      if (!z.value) return;
      const F = w.modelChoices.get(z.value.filename);
      if (F)
        switch (F.action) {
          case "select":
            return (M = F.selected_model) != null && M.filename ? `→ ${F.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return z.value.is_download_intent ? "Pending Download" : (le = z.value.options) != null && le.length ? `${z.value.options.length} matches` : "Not Found";
    });
    function S(F) {
      F >= 0 && F < w.models.length && (f.value = F);
    }
    function j() {
      z.value && g("mark-optional", z.value.filename);
    }
    function W() {
      z.value && g("skip", z.value.filename);
    }
    function H(F) {
      z.value && g("option-selected", z.value.filename, F);
    }
    function L() {
      z.value && g("clear-choice", z.value.filename);
    }
    function I() {
      z.value && (m.value = z.value.filename, u.value = !0);
    }
    function E() {
      z.value && (p.value = z.value.download_source || "", y.value = z.value.target_path || $.value, r.value = !0);
    }
    function O() {
      u.value = !1, m.value = "", _.value = [];
    }
    function B() {
      r.value = !1, p.value = "", y.value = "";
    }
    function ae() {
      C.value = !0, setTimeout(() => {
        C.value = !1;
      }, 300);
    }
    function we(F) {
      z.value && O();
    }
    function me() {
      !z.value || !p.value.trim() || (g("download-url", z.value.filename, p.value.trim(), y.value.trim() || void 0), B());
    }
    function oe(F) {
      if (!F) return "Unknown";
      const M = F / (1024 * 1024 * 1024);
      return M >= 1 ? `${M.toFixed(2)} GB` : `${(F / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (F, M) => {
      var le, se, Me;
      return s(), o("div", Wr, [
        e("div", jr, [
          e("div", Gr, [
            e("h3", qr, a(U.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Hr, a(U.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Kr, a(v.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        z.value ? (s(), T(zs, {
          key: 0,
          "item-name": z.value.filename,
          "current-index": f.value,
          "total-items": t.models.length,
          onPrev: M[0] || (M[0] = (ke) => S(f.value - 1)),
          onNext: M[1] || (M[1] = (ke) => S(f.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
        z.value ? (s(), o("div", Jr, [
          k(Vr, {
            filename: z.value.filename,
            "node-type": ((le = z.value.reference) == null ? void 0 : le.node_type) || "Unknown",
            "has-multiple-options": !!((se = z.value.options) != null && se.length),
            options: z.value.options,
            choice: (Me = t.modelChoices) == null ? void 0 : Me.get(z.value.filename),
            status: D.value,
            "status-label": x.value,
            onMarkOptional: j,
            onSkip: W,
            onDownloadUrl: E,
            onSearch: I,
            onOptionSelected: H,
            onClearChoice: L
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", Yr, [...M[5] || (M[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), T(Fe, { to: "body" }, [
          u.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ze(O, ["self"])
          }, [
            e("div", Qr, [
              e("div", { class: "model-modal-header" }, [
                M[6] || (M[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: O
                }, "✕")
              ]),
              e("div", Xr, [
                k(st, {
                  modelValue: m.value,
                  "onUpdate:modelValue": M[2] || (M[2] = (ke) => m.value = ke),
                  placeholder: "Search by filename, category...",
                  onInput: ae
                }, null, 8, ["modelValue"]),
                _.value.length > 0 ? (s(), o("div", Zr, [
                  (s(!0), o(V, null, te(_.value, (ke) => (s(), o("div", {
                    key: ke.hash,
                    class: "model-search-result-item",
                    onClick: (re) => we()
                  }, [
                    e("div", td, [
                      e("code", sd, a(ke.filename), 1)
                    ]),
                    e("div", od, [
                      e("span", nd, a(ke.category), 1),
                      e("span", ad, a(oe(ke.size)), 1)
                    ]),
                    ke.relative_path ? (s(), o("div", ld, a(ke.relative_path), 1)) : d("", !0)
                  ], 8, ed))), 128))
                ])) : m.value && !C.value ? (s(), o("div", id, ' No models found matching "' + a(m.value) + '" ', 1)) : d("", !0),
                C.value ? (s(), o("div", rd, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (s(), T(Fe, { to: "body" }, [
          r.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ze(B, ["self"])
          }, [
            e("div", dd, [
              e("div", { class: "model-modal-header" }, [
                M[7] || (M[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: B
                }, "✕")
              ]),
              e("div", cd, [
                e("div", ud, [
                  M[8] || (M[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  k(st, {
                    modelValue: p.value,
                    "onUpdate:modelValue": M[3] || (M[3] = (ke) => p.value = ke),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", md, [
                  M[9] || (M[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  k(st, {
                    modelValue: y.value,
                    "onUpdate:modelValue": M[4] || (M[4] = (ke) => y.value = ke),
                    placeholder: $.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", vd, [
                  k(ce, {
                    variant: "secondary",
                    onClick: B
                  }, {
                    default: l(() => [...M[10] || (M[10] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(ce, {
                    variant: "primary",
                    disabled: !p.value.trim() || !y.value.trim(),
                    onClick: me
                  }, {
                    default: l(() => [...M[11] || (M[11] = [
                      h(" Queue Download ", -1)
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
}), gd = /* @__PURE__ */ Z(fd, [["__scopeId", "data-v-c6acbada"]]), pd = { class: "applying-step" }, hd = {
  key: 0,
  class: "phase-content"
}, yd = {
  key: 1,
  class: "phase-content"
}, wd = { class: "phase-description" }, kd = { class: "overall-progress" }, bd = { class: "progress-bar" }, _d = { class: "progress-label" }, $d = { class: "install-list" }, Cd = { class: "install-icon" }, xd = { key: 0 }, Sd = {
  key: 1,
  class: "spinner"
}, Id = { key: 2 }, Ed = { key: 3 }, Md = {
  key: 0,
  class: "install-error"
}, Td = {
  key: 2,
  class: "phase-content"
}, zd = { class: "phase-header" }, Rd = { class: "phase-title" }, Ld = { class: "completion-summary" }, Pd = {
  key: 0,
  class: "summary-item success"
}, Dd = { class: "summary-text" }, Nd = {
  key: 1,
  class: "summary-item error"
}, Ud = { class: "summary-text" }, Od = {
  key: 2,
  class: "failed-list"
}, Bd = { class: "failed-node-id" }, Fd = { class: "failed-error" }, Ad = {
  key: 4,
  class: "summary-item success"
}, Vd = {
  key: 5,
  class: "restart-prompt"
}, Wd = {
  key: 3,
  class: "phase-content error"
}, jd = { class: "error-message" }, Gd = /* @__PURE__ */ X({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const c = t, n = P(() => {
      var m, p;
      const u = ((m = c.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || c.progress.nodesToInstall.length;
      if (!u) return 0;
      const r = ((p = c.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0;
      return Math.round(r / u * 100);
    }), i = P(() => {
      var u;
      return ((u = c.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((r) => !r.success)) || [];
    }), w = P(() => i.value.length > 0);
    function g(u, r) {
      var p, y;
      const m = (p = c.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.find((_) => _.node_id === u);
      return m ? m.success ? "complete" : "failed" : ((y = c.progress.nodeInstallProgress) == null ? void 0 : y.currentIndex) === r ? "installing" : "pending";
    }
    function f(u) {
      var r, m;
      return (m = (r = c.progress.nodeInstallProgress) == null ? void 0 : r.completedNodes.find((p) => p.node_id === u)) == null ? void 0 : m.error;
    }
    return (u, r) => {
      var m, p, y, _;
      return s(), o("div", pd, [
        t.progress.phase === "resolving" ? (s(), o("div", hd, [...r[2] || (r[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", yd, [
          r[3] || (r[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", wd, " Installing " + a((((m = t.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + a(((p = t.progress.nodeInstallProgress) == null ? void 0 : p.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", kd, [
            e("div", bd, [
              e("div", {
                class: "progress-fill",
                style: gt({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", _d, a(((y = t.progress.nodeInstallProgress) == null ? void 0 : y.completedNodes.length) ?? 0) + " / " + a(((_ = t.progress.nodeInstallProgress) == null ? void 0 : _.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", $d, [
            (s(!0), o(V, null, te(t.progress.nodesToInstall, (C, z) => (s(), o("div", {
              key: C,
              class: ie(["install-item", g(C, z)])
            }, [
              e("span", Cd, [
                g(C, z) === "pending" ? (s(), o("span", xd, "○")) : g(C, z) === "installing" ? (s(), o("span", Sd, "◌")) : g(C, z) === "complete" ? (s(), o("span", Id, "✓")) : g(C, z) === "failed" ? (s(), o("span", Ed, "✗")) : d("", !0)
              ]),
              e("code", null, a(C), 1),
              f(C) ? (s(), o("span", Md, a(f(C)), 1)) : d("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", Td, [
          e("div", zd, [
            e("span", {
              class: ie(["phase-icon", w.value ? "warning" : "success"])
            }, a(w.value ? "⚠" : "✓"), 3),
            e("h3", Rd, a(w.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", Ld, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", Pd, [
              r[4] || (r[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", Dd, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("div", Nd, [
              r[5] || (r[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", Ud, a(i.value.length) + " package" + a(i.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("div", Od, [
              (s(!0), o(V, null, te(i.value, (C) => (s(), o("div", {
                key: C.node_id,
                class: "failed-item"
              }, [
                e("code", Bd, a(C.node_id), 1),
                e("span", Fd, a(C.error), 1)
              ]))), 128))
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: r[0] || (r[0] = (C) => u.$emit("retry-failed"))
            }, " Retry Failed (" + a(i.value.length) + ") ", 1)) : d("", !0),
            w.value ? d("", !0) : (s(), o("div", Ad, [...r[6] || (r[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            r[8] || (r[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", Vd, [
              r[7] || (r[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: r[1] || (r[1] = (C) => u.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : d("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", Wd, [
          r[9] || (r[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", jd, a(t.progress.error), 1)
        ])) : d("", !0)
      ]);
    };
  }
}), qd = /* @__PURE__ */ Z(Gd, [["__scopeId", "data-v-5efaae58"]]), Hd = {
  key: 0,
  class: "loading-state"
}, Kd = {
  key: 1,
  class: "wizard-content"
}, Jd = {
  key: 0,
  class: "step-content"
}, Yd = { class: "analysis-summary" }, Qd = { class: "analysis-header" }, Xd = { class: "summary-description" }, Zd = { class: "stats-grid" }, ec = { class: "stat-card" }, tc = { class: "stat-items" }, sc = {
  key: 0,
  class: "stat-item success"
}, oc = { class: "stat-count" }, nc = {
  key: 1,
  class: "stat-item info"
}, ac = { class: "stat-count" }, lc = {
  key: 2,
  class: "stat-item warning"
}, ic = { class: "stat-count" }, rc = {
  key: 3,
  class: "stat-item error"
}, dc = { class: "stat-count" }, cc = { class: "stat-card" }, uc = { class: "stat-items" }, mc = { class: "stat-item success" }, vc = { class: "stat-count" }, fc = {
  key: 0,
  class: "stat-item info"
}, gc = { class: "stat-count" }, pc = {
  key: 1,
  class: "stat-item warning"
}, hc = { class: "stat-count" }, yc = {
  key: 2,
  class: "stat-item warning"
}, wc = { class: "stat-count" }, kc = {
  key: 3,
  class: "stat-item error"
}, bc = { class: "stat-count" }, _c = {
  key: 0,
  class: "status-message warning"
}, $c = { class: "status-text" }, Cc = {
  key: 1,
  class: "status-message info"
}, xc = { class: "status-text" }, Sc = {
  key: 2,
  class: "status-message info"
}, Ic = { class: "status-text" }, Ec = {
  key: 3,
  class: "status-message warning"
}, Mc = { class: "status-text" }, Tc = {
  key: 4,
  class: "status-message success"
}, zc = {
  key: 5,
  class: "category-mismatch-section"
}, Rc = { class: "mismatch-list" }, Lc = { class: "mismatch-path" }, Pc = { class: "mismatch-target" }, Dc = {
  key: 3,
  class: "step-content"
}, Nc = { class: "review-summary" }, Uc = { class: "review-stats" }, Oc = { class: "review-stat" }, Bc = { class: "stat-value" }, Fc = { class: "review-stat" }, Ac = { class: "stat-value" }, Vc = { class: "review-stat" }, Wc = { class: "stat-value" }, jc = { class: "review-stat" }, Gc = { class: "stat-value" }, qc = {
  key: 0,
  class: "review-section"
}, Hc = { class: "section-title" }, Kc = { class: "review-items" }, Jc = { class: "item-name" }, Yc = { class: "item-choice" }, Qc = {
  key: 0,
  class: "choice-badge install"
}, Xc = {
  key: 1,
  class: "choice-badge skip"
}, Zc = {
  key: 1,
  class: "review-section"
}, eu = { class: "section-title" }, tu = { class: "review-items" }, su = { class: "item-name" }, ou = { class: "item-choice" }, nu = {
  key: 0,
  class: "choice-badge install"
}, au = {
  key: 1,
  class: "choice-badge optional"
}, lu = {
  key: 2,
  class: "choice-badge skip"
}, iu = {
  key: 1,
  class: "choice-badge pending"
}, ru = {
  key: 2,
  class: "review-section"
}, du = { class: "section-title" }, cu = { class: "review-items" }, uu = { class: "item-name" }, mu = { class: "item-choice" }, vu = {
  key: 0,
  class: "choice-badge install"
}, fu = {
  key: 1,
  class: "choice-badge download"
}, gu = {
  key: 2,
  class: "choice-badge optional"
}, pu = {
  key: 3,
  class: "choice-badge skip"
}, hu = {
  key: 4,
  class: "choice-badge skip"
}, yu = {
  key: 1,
  class: "choice-badge download"
}, wu = {
  key: 2,
  class: "choice-badge pending"
}, ku = {
  key: 3,
  class: "no-choices"
}, bu = /* @__PURE__ */ X({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, i = c, { analyzeWorkflow: w, applyResolution: g, installNodes: f, queueModelDownloads: u, progress: r, resetProgress: m } = Ts(), { loadPendingDownloads: p } = jt(), { openFileLocation: y } = Oe(), _ = b(null), C = b(!1), z = b(!1), U = b(null), v = b("analysis"), $ = b([]), D = b(/* @__PURE__ */ new Map()), x = b(/* @__PURE__ */ new Map()), S = b(/* @__PURE__ */ new Set()), j = P(() => {
      const K = [
        { id: "analysis", label: "Analysis" }
      ];
      return (H.value || E.value) && K.push({ id: "nodes", label: "Nodes" }), (L.value || I.value) && K.push({ id: "models", label: "Models" }), K.push({ id: "review", label: "Review" }), v.value === "applying" && K.push({ id: "applying", label: "Applying" }), K;
    }), W = P(() => _.value ? _.value.stats.needs_user_input : !1), H = P(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), L = P(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), I = P(() => _.value ? _.value.stats.download_intents > 0 : !1), E = P(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), O = P(() => _.value ? _.value.nodes.resolved.length : 0), B = P(() => _.value ? _.value.models.resolved.filter((K) => K.has_category_mismatch) : []), ae = P(() => B.value.length > 0), we = P(() => {
      if (!_.value) return [];
      const K = _.value.nodes.resolved.filter((A) => !A.is_installed), N = /* @__PURE__ */ new Set();
      return K.filter((A) => N.has(A.package.package_id) ? !1 : (N.add(A.package.package_id), !0));
    }), me = P(() => {
      if (!_.value) return [];
      const K = _.value.nodes.resolved.filter((A) => !A.is_installed), N = /* @__PURE__ */ new Map();
      for (const A of K) {
        const Q = N.get(A.package.package_id);
        Q ? Q.node_types_count++ : N.set(A.package.package_id, {
          package_id: A.package.package_id,
          title: A.package.title,
          node_types_count: 1
        });
      }
      return Array.from(N.values());
    }), oe = P(() => we.value.filter((K) => !S.value.has(K.package.package_id))), F = P(() => _.value ? _.value.models.resolved.filter((K) => K.match_type === "download_intent").map((K) => ({
      filename: K.reference.widget_value,
      reference: K.reference,
      is_download_intent: !0,
      resolved_model: K.model,
      download_source: K.download_source,
      target_path: K.target_path
    })) : []), M = P(() => {
      if (!_.value) return [];
      const K = _.value.nodes.unresolved.map((A) => ({
        node_type: A.reference.node_type,
        reason: A.reason,
        is_unresolved: !0,
        options: void 0
      })), N = _.value.nodes.ambiguous.map((A) => ({
        node_type: A.reference.node_type,
        has_multiple_options: !0,
        options: A.options.map((Q) => ({
          package_id: Q.package.package_id,
          title: Q.package.title,
          match_confidence: Q.match_confidence,
          match_type: Q.match_type,
          is_installed: Q.is_installed
        }))
      }));
      return [...K, ...N];
    }), le = P(() => {
      if (!_.value) return [];
      const K = _.value.models.unresolved.map((A) => ({
        filename: A.reference.widget_value,
        reference: A.reference,
        reason: A.reason,
        is_unresolved: !0,
        options: void 0
      })), N = _.value.models.ambiguous.map((A) => ({
        filename: A.reference.widget_value,
        reference: A.reference,
        has_multiple_options: !0,
        options: A.options.map((Q) => ({
          model: Q.model,
          match_confidence: Q.match_confidence,
          match_type: Q.match_type,
          has_download_source: Q.has_download_source
        }))
      }));
      return [...K, ...N];
    }), se = P(() => {
      const K = le.value, N = F.value.map((A) => ({
        filename: A.filename,
        reference: A.reference,
        is_download_intent: !0,
        resolved_model: A.resolved_model,
        download_source: A.download_source,
        target_path: A.target_path,
        options: void 0
      }));
      return [...K, ...N];
    }), Me = P(() => {
      let K = oe.value.length;
      for (const N of D.value.values())
        N.action === "install" && K++;
      for (const N of x.value.values())
        N.action === "select" && K++;
      return K;
    }), ke = P(() => {
      let K = 0;
      for (const N of x.value.values())
        N.action === "download" && K++;
      return K;
    }), re = P(() => {
      let K = 0;
      for (const N of D.value.values())
        N.action === "optional" && K++;
      for (const N of x.value.values())
        N.action === "optional" && K++;
      return K;
    }), ne = P(() => {
      let K = S.value.size;
      for (const N of D.value.values())
        N.action === "skip" && K++;
      for (const N of x.value.values())
        N.action === "skip" && K++;
      for (const N of M.value)
        D.value.has(N.node_type) || K++;
      for (const N of le.value)
        x.value.has(N.filename) || K++;
      return K;
    }), J = P(() => {
      const K = {};
      if (K.analysis = { resolved: 1, total: 1 }, H.value) {
        const N = M.value.length, A = M.value.filter(
          (Q) => D.value.has(Q.node_type)
        ).length;
        K.nodes = { resolved: A, total: N };
      }
      if (L.value || I.value) {
        const N = se.value.length, A = se.value.filter(
          (Q) => x.value.has(Q.filename) || Q.is_download_intent
        ).length;
        K.models = { resolved: A, total: N };
      }
      if (K.review = { resolved: 1, total: 1 }, v.value === "applying") {
        const N = r.totalFiles || 1, A = r.completedFiles.length;
        K.applying = { resolved: A, total: N };
      }
      return K;
    });
    function ue(K) {
      v.value = K;
    }
    function _e() {
      const K = j.value.findIndex((N) => N.id === v.value);
      K > 0 && (v.value = j.value[K - 1].id);
    }
    function Le() {
      const K = j.value.findIndex((N) => N.id === v.value);
      K < j.value.length - 1 && (v.value = j.value[K + 1].id);
    }
    async function ve() {
      C.value = !0, U.value = null;
      try {
        _.value = await w(n.workflowName);
      } catch (K) {
        U.value = K instanceof Error ? K.message : "Failed to analyze workflow";
      } finally {
        C.value = !1;
      }
    }
    function Y() {
      $.value.includes("analysis") || $.value.push("analysis"), H.value || E.value ? v.value = "nodes" : L.value || I.value ? v.value = "models" : v.value = "review";
    }
    function fe(K) {
      D.value.set(K, { action: "optional" });
    }
    function $e(K) {
      D.value.set(K, { action: "skip" });
    }
    function Ee(K, N) {
      var Q;
      const A = M.value.find((pe) => pe.node_type === K);
      (Q = A == null ? void 0 : A.options) != null && Q[N] && D.value.set(K, {
        action: "install",
        package_id: A.options[N].package_id
      });
    }
    function ye(K, N) {
      D.value.set(K, {
        action: "install",
        package_id: N
      });
    }
    function rt(K) {
      D.value.delete(K);
    }
    function be(K) {
      S.value.has(K) ? S.value.delete(K) : S.value.add(K);
    }
    function Ae(K) {
      x.value.set(K, { action: "optional" });
    }
    function bt(K) {
      x.value.set(K, { action: "skip" });
    }
    function dt(K, N) {
      var Q;
      const A = le.value.find((pe) => pe.filename === K);
      (Q = A == null ? void 0 : A.options) != null && Q[N] && x.value.set(K, {
        action: "select",
        selected_model: A.options[N].model
      });
    }
    function De(K, N, A) {
      x.value.set(K, {
        action: "download",
        url: N,
        target_path: A
      });
    }
    function _t(K) {
      x.value.delete(K);
    }
    async function yt(K) {
      try {
        await y(K);
      } catch (N) {
        U.value = N instanceof Error ? N.message : "Failed to open file location";
      }
    }
    async function ct() {
      var K;
      z.value = !0, U.value = null, m(), r.phase = "resolving", v.value = "applying";
      try {
        const N = await g(n.workflowName, D.value, x.value, S.value);
        N.models_to_download && N.models_to_download.length > 0 && u(n.workflowName, N.models_to_download);
        const A = [
          ...N.nodes_to_install || [],
          ...oe.value.map((pe) => pe.package.package_id)
        ];
        r.nodesToInstall = [...new Set(A)], r.nodesToInstall.length > 0 && await f(n.workflowName), r.phase = "complete", await p();
        const Q = r.installError || ((K = r.nodeInstallProgress) == null ? void 0 : K.completedNodes.some((pe) => !pe.success));
        !r.needsRestart && !Q && setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1500);
      } catch (N) {
        U.value = N instanceof Error ? N.message : "Failed to apply resolution", r.error = U.value, r.phase = "error";
      } finally {
        z.value = !1;
      }
    }
    function $t() {
      i("refresh"), i("restart"), i("close");
    }
    async function ut() {
      var N;
      const K = ((N = r.nodeInstallProgress) == null ? void 0 : N.completedNodes.filter((A) => !A.success).map((A) => A.node_id)) || [];
      if (K.length !== 0) {
        r.phase = "installing", r.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: K.length
        }, r.nodesToInstall = K, r.nodesInstalled = [], r.installError = void 0;
        try {
          await f(n.workflowName), r.phase = "complete";
        } catch (A) {
          r.error = A instanceof Error ? A.message : "Retry failed", r.phase = "error";
        }
      }
    }
    return Ue(ve), (K, N) => (s(), T(Ke, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: C.value,
      error: U.value || void 0,
      "fixed-height": !0,
      onClose: N[1] || (N[1] = (A) => i("close"))
    }, {
      body: l(() => [
        C.value && !_.value ? (s(), o("div", Hd, [...N[2] || (N[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (s(), o("div", Kd, [
          k(ti, {
            steps: j.value,
            "current-step": v.value,
            "completed-steps": $.value,
            "step-stats": J.value,
            onStepChange: ue
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          v.value === "analysis" ? (s(), o("div", Jd, [
            e("div", Yd, [
              e("div", Qd, [
                N[3] || (N[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", Xd, " Found " + a(_.value.stats.total_nodes) + " nodes and " + a(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Zd, [
                e("div", ec, [
                  N[12] || (N[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", tc, [
                    O.value > 0 ? (s(), o("div", sc, [
                      N[4] || (N[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", oc, a(O.value), 1),
                      N[5] || (N[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : d("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (s(), o("div", nc, [
                      N[6] || (N[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", ac, a(_.value.stats.packages_needing_installation), 1),
                      N[7] || (N[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : d("", !0),
                    _.value.nodes.ambiguous.length > 0 ? (s(), o("div", lc, [
                      N[8] || (N[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", ic, a(_.value.nodes.ambiguous.length), 1),
                      N[9] || (N[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    _.value.nodes.unresolved.length > 0 ? (s(), o("div", rc, [
                      N[10] || (N[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", dc, a(_.value.nodes.unresolved.length), 1),
                      N[11] || (N[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ]),
                e("div", cc, [
                  N[23] || (N[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", uc, [
                    e("div", mc, [
                      N[13] || (N[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", vc, a(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      N[14] || (N[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (s(), o("div", fc, [
                      N[15] || (N[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", gc, a(_.value.stats.download_intents), 1),
                      N[16] || (N[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : d("", !0),
                    ae.value ? (s(), o("div", pc, [
                      N[17] || (N[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", hc, a(B.value.length), 1),
                      N[18] || (N[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : d("", !0),
                    _.value.models.ambiguous.length > 0 ? (s(), o("div", yc, [
                      N[19] || (N[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", wc, a(_.value.models.ambiguous.length), 1),
                      N[20] || (N[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    _.value.models.unresolved.length > 0 ? (s(), o("div", kc, [
                      N[21] || (N[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", bc, a(_.value.models.unresolved.length), 1),
                      N[22] || (N[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ])
              ]),
              W.value ? (s(), o("div", _c, [
                N[24] || (N[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", $c, a(M.value.length + le.value.length) + " items need your input", 1)
              ])) : E.value ? (s(), o("div", Cc, [
                N[25] || (N[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", xc, a(_.value.stats.packages_needing_installation) + " package" + a(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(_.value.stats.nodes_needing_installation) + " node type" + a(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(I.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : I.value ? (s(), o("div", Sc, [
                N[26] || (N[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Ic, a(_.value.stats.download_intents) + " model" + a(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : ae.value ? (s(), o("div", Ec, [
                N[27] || (N[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Mc, a(B.value.length) + " model" + a(B.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", Tc, [...N[28] || (N[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              ae.value ? (s(), o("div", zc, [
                N[31] || (N[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", Rc, [
                  (s(!0), o(V, null, te(B.value, (A) => {
                    var Q, pe;
                    return s(), o("div", {
                      key: A.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", Lc, a(A.actual_category) + "/" + a((Q = A.model) == null ? void 0 : Q.filename), 1),
                      N[30] || (N[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", Pc, a((pe = A.expected_categories) == null ? void 0 : pe[0]) + "/", 1),
                      A.file_path ? (s(), T(ce, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (nt) => yt(A.file_path)
                      }, {
                        default: l(() => [...N[29] || (N[29] = [
                          h(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : d("", !0)
                    ]);
                  }), 128))
                ])
              ])) : d("", !0)
            ])
          ])) : d("", !0),
          v.value === "nodes" ? (s(), T(_r, {
            key: 1,
            nodes: M.value,
            "node-choices": D.value,
            "auto-resolved-packages": me.value,
            "skipped-packages": S.value,
            onMarkOptional: fe,
            onSkip: $e,
            onOptionSelected: Ee,
            onManualEntry: ye,
            onClearChoice: rt,
            onPackageSkip: be
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : d("", !0),
          v.value === "models" ? (s(), T(gd, {
            key: 2,
            models: se.value,
            "model-choices": x.value,
            onMarkOptional: Ae,
            onSkip: bt,
            onOptionSelected: dt,
            onDownloadUrl: De,
            onClearChoice: _t
          }, null, 8, ["models", "model-choices"])) : d("", !0),
          v.value === "review" ? (s(), o("div", Dc, [
            e("div", Nc, [
              N[36] || (N[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Uc, [
                e("div", Oc, [
                  e("span", Bc, a(Me.value), 1),
                  N[32] || (N[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Fc, [
                  e("span", Ac, a(ke.value), 1),
                  N[33] || (N[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Vc, [
                  e("span", Wc, a(re.value), 1),
                  N[34] || (N[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", jc, [
                  e("span", Gc, a(ne.value), 1),
                  N[35] || (N[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              me.value.length > 0 ? (s(), o("div", qc, [
                e("h4", Hc, "Node Packages (" + a(me.value.length) + ")", 1),
                e("div", Kc, [
                  (s(!0), o(V, null, te(me.value, (A) => (s(), o("div", {
                    key: A.package_id,
                    class: "review-item"
                  }, [
                    e("code", Jc, a(A.package_id), 1),
                    e("div", Yc, [
                      S.value.has(A.package_id) ? (s(), o("span", Xc, "Skipped")) : (s(), o("span", Qc, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : d("", !0),
              M.value.length > 0 ? (s(), o("div", Zc, [
                e("h4", eu, "Node Choices (" + a(M.value.length) + ")", 1),
                e("div", tu, [
                  (s(!0), o(V, null, te(M.value, (A) => {
                    var Q, pe, nt, Je;
                    return s(), o("div", {
                      key: A.node_type,
                      class: "review-item"
                    }, [
                      e("code", su, a(A.node_type), 1),
                      e("div", ou, [
                        D.value.has(A.node_type) ? (s(), o(V, { key: 0 }, [
                          ((Q = D.value.get(A.node_type)) == null ? void 0 : Q.action) === "install" ? (s(), o("span", nu, a((pe = D.value.get(A.node_type)) == null ? void 0 : pe.package_id), 1)) : ((nt = D.value.get(A.node_type)) == null ? void 0 : nt.action) === "optional" ? (s(), o("span", au, " Optional ")) : ((Je = D.value.get(A.node_type)) == null ? void 0 : Je.action) === "skip" ? (s(), o("span", lu, " Skip ")) : d("", !0)
                        ], 64)) : (s(), o("span", iu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              se.value.length > 0 ? (s(), o("div", ru, [
                e("h4", du, "Models (" + a(se.value.length) + ")", 1),
                e("div", cu, [
                  (s(!0), o(V, null, te(se.value, (A) => {
                    var Q, pe, nt, Je, mt, xt, Ye;
                    return s(), o("div", {
                      key: A.filename,
                      class: "review-item"
                    }, [
                      e("code", uu, a(A.filename), 1),
                      e("div", mu, [
                        x.value.has(A.filename) ? (s(), o(V, { key: 0 }, [
                          ((Q = x.value.get(A.filename)) == null ? void 0 : Q.action) === "select" ? (s(), o("span", vu, a((nt = (pe = x.value.get(A.filename)) == null ? void 0 : pe.selected_model) == null ? void 0 : nt.filename), 1)) : ((Je = x.value.get(A.filename)) == null ? void 0 : Je.action) === "download" ? (s(), o("span", fu, " Download ")) : ((mt = x.value.get(A.filename)) == null ? void 0 : mt.action) === "optional" ? (s(), o("span", gu, " Optional ")) : ((xt = x.value.get(A.filename)) == null ? void 0 : xt.action) === "skip" ? (s(), o("span", pu, " Skip ")) : ((Ye = x.value.get(A.filename)) == null ? void 0 : Ye.action) === "cancel_download" ? (s(), o("span", hu, " Cancel Download ")) : d("", !0)
                        ], 64)) : A.is_download_intent ? (s(), o("span", yu, " Pending Download ")) : (s(), o("span", wu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              we.value.length === 0 && M.value.length === 0 && se.value.length === 0 ? (s(), o("div", ku, " No dependencies need resolution. ")) : d("", !0)
            ])
          ])) : d("", !0),
          v.value === "applying" ? (s(), T(qd, {
            key: 4,
            progress: xe(r),
            onRestart: $t,
            onRetryFailed: ut
          }, null, 8, ["progress"])) : d("", !0)
        ])) : d("", !0)
      ]),
      footer: l(() => [
        v.value !== "analysis" && v.value !== "applying" ? (s(), T(ce, {
          key: 0,
          variant: "secondary",
          disabled: z.value,
          onClick: _e
        }, {
          default: l(() => [...N[37] || (N[37] = [
            h(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        N[41] || (N[41] = e("div", { class: "footer-spacer" }, null, -1)),
        v.value !== "applying" || xe(r).phase === "complete" || xe(r).phase === "error" ? (s(), T(ce, {
          key: 1,
          variant: "secondary",
          onClick: N[0] || (N[0] = (A) => i("close"))
        }, {
          default: l(() => [
            h(a(xe(r).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : d("", !0),
        v.value === "analysis" ? (s(), T(ce, {
          key: 2,
          variant: "primary",
          disabled: C.value,
          onClick: Y
        }, {
          default: l(() => [...N[38] || (N[38] = [
            h(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        v.value === "nodes" ? (s(), T(ce, {
          key: 3,
          variant: "primary",
          onClick: Le
        }, {
          default: l(() => [
            h(a(L.value || I.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : d("", !0),
        v.value === "models" ? (s(), T(ce, {
          key: 4,
          variant: "primary",
          onClick: Le
        }, {
          default: l(() => [...N[39] || (N[39] = [
            h(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : d("", !0),
        v.value === "review" ? (s(), T(ce, {
          key: 5,
          variant: "primary",
          disabled: z.value,
          loading: z.value,
          onClick: ct
        }, {
          default: l(() => [...N[40] || (N[40] = [
            h(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), _u = /* @__PURE__ */ Z(bu, [["__scopeId", "data-v-6276cf1d"]]), $u = { class: "search-input-wrapper" }, Cu = ["value", "placeholder"], xu = /* @__PURE__ */ X({
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
    const n = t, i = c, w = b(null);
    let g;
    function f(r) {
      const m = r.target.value;
      n.debounce > 0 ? (clearTimeout(g), g = window.setTimeout(() => {
        i("update:modelValue", m);
      }, n.debounce)) : i("update:modelValue", m);
    }
    function u() {
      var r;
      i("update:modelValue", ""), i("clear"), (r = w.value) == null || r.focus();
    }
    return Ue(() => {
      n.autoFocus && w.value && w.value.focus();
    }), (r, m) => (s(), o("div", $u, [
      e("input", {
        ref_key: "inputRef",
        ref: w,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: f,
        onKeyup: ft(u, ["escape"])
      }, null, 40, Cu),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), Su = /* @__PURE__ */ Z(xu, [["__scopeId", "data-v-266f857a"]]), Iu = { class: "search-bar" }, Eu = /* @__PURE__ */ X({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, n) => (s(), o("div", Iu, [
      k(Su, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => c.$emit("update:modelValue", i)),
        onClear: n[1] || (n[1] = (i) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), zt = /* @__PURE__ */ Z(Eu, [["__scopeId", "data-v-3d51bbfd"]]), Mu = { class: "section-group" }, Tu = {
  key: 0,
  class: "section-content"
}, zu = /* @__PURE__ */ X({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const n = t, i = c, w = b(n.initiallyExpanded);
    function g() {
      n.collapsible && (w.value = !w.value, i("toggle", w.value));
    }
    return (f, u) => (s(), o("section", Mu, [
      k(Ze, {
        count: t.count,
        clickable: t.collapsible,
        expanded: w.value,
        onClick: g
      }, {
        default: l(() => [
          h(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || w.value ? (s(), o("div", Tu, [
        Se(f.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Be = /* @__PURE__ */ Z(zu, [["__scopeId", "data-v-c48e33ed"]]), Ru = { class: "item-header" }, Lu = {
  key: 0,
  class: "item-icon"
}, Pu = { class: "item-info" }, Du = {
  key: 0,
  class: "item-title"
}, Nu = {
  key: 1,
  class: "item-subtitle"
}, Uu = {
  key: 0,
  class: "item-details"
}, Ou = {
  key: 1,
  class: "item-actions"
}, Bu = /* @__PURE__ */ X({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, i = P(() => n.status ? `status-${n.status}` : "");
    return (w, g) => (s(), o("div", {
      class: ie(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: g[0] || (g[0] = (f) => t.clickable && w.$emit("click"))
    }, [
      e("div", Ru, [
        w.$slots.icon ? (s(), o("span", Lu, [
          Se(w.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        e("div", Pu, [
          w.$slots.title ? (s(), o("div", Du, [
            Se(w.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          w.$slots.subtitle ? (s(), o("div", Nu, [
            Se(w.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      w.$slots.details ? (s(), o("div", Uu, [
        Se(w.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      w.$slots.actions ? (s(), o("div", Ou, [
        Se(w.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), He = /* @__PURE__ */ Z(Bu, [["__scopeId", "data-v-cc435e0e"]]), Fu = { class: "loading-state" }, Au = { class: "loading-message" }, Vu = /* @__PURE__ */ X({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, n) => (s(), o("div", Fu, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Au, a(t.message), 1)
    ]));
  }
}), pt = /* @__PURE__ */ Z(Vu, [["__scopeId", "data-v-ad8436c9"]]), Wu = { class: "error-state" }, ju = { class: "error-message" }, Gu = /* @__PURE__ */ X({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, n) => (s(), o("div", Wu, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", ju, a(t.message), 1),
      t.retry ? (s(), T(ee, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => c.$emit("retry"))
      }, {
        default: l(() => [...n[1] || (n[1] = [
          h(" Retry ", -1)
        ])]),
        _: 1
      })) : d("", !0)
    ]));
  }
}), ht = /* @__PURE__ */ Z(Gu, [["__scopeId", "data-v-5397be48"]]), qu = /* @__PURE__ */ X({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getWorkflows: w } = Oe();
    Es();
    const g = b([]), f = b(!1), u = b(null), r = b(""), m = b(!0), p = b(!1), y = b(!1), _ = b(!1), C = b(null), z = P(
      () => g.value.filter((oe) => oe.status === "broken")
    ), U = P(
      () => g.value.filter((oe) => oe.status === "new")
    ), v = P(
      () => g.value.filter((oe) => oe.status === "modified")
    ), $ = P(
      () => g.value.filter((oe) => oe.status === "synced")
    ), D = P(() => {
      if (!r.value.trim()) return g.value;
      const oe = r.value.toLowerCase();
      return g.value.filter((F) => F.name.toLowerCase().includes(oe));
    }), x = P(
      () => z.value.filter(
        (oe) => !r.value.trim() || oe.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), S = P(
      () => U.value.filter(
        (oe) => !r.value.trim() || oe.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), j = P(
      () => v.value.filter(
        (oe) => !r.value.trim() || oe.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), W = P(
      () => $.value.filter(
        (oe) => !r.value.trim() || oe.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), H = P(
      () => p.value ? W.value : W.value.slice(0, 5)
    );
    async function L(oe = !1) {
      f.value = !0, u.value = null;
      try {
        g.value = await w(oe);
      } catch (F) {
        u.value = F instanceof Error ? F.message : "Failed to load workflows";
      } finally {
        f.value = !1;
      }
    }
    c({ loadWorkflows: L });
    function I(oe) {
      C.value = oe, y.value = !0;
    }
    function E(oe) {
      C.value = oe, _.value = !0;
    }
    function O() {
      alert("Bulk resolution not yet implemented");
    }
    function B() {
      i("refresh");
    }
    async function ae() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function we(oe) {
      const F = [];
      return oe.missing_nodes > 0 && F.push(`${oe.missing_nodes} missing node${oe.missing_nodes > 1 ? "s" : ""}`), oe.missing_models > 0 && F.push(`${oe.missing_models} missing model${oe.missing_models > 1 ? "s" : ""}`), oe.models_with_category_mismatch && oe.models_with_category_mismatch > 0 && F.push(`${oe.models_with_category_mismatch} model${oe.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), oe.pending_downloads && oe.pending_downloads > 0 && F.push(`${oe.pending_downloads} pending download${oe.pending_downloads > 1 ? "s" : ""}`), F.length > 0 ? F.join(", ") : "Has issues";
    }
    function me(oe) {
      const F = oe.sync_state === "new" ? "New" : oe.sync_state === "modified" ? "Modified" : oe.sync_state === "synced" ? "Synced" : oe.sync_state;
      return oe.has_path_sync_issues && oe.models_needing_path_sync && oe.models_needing_path_sync > 0 ? `${oe.models_needing_path_sync} model path${oe.models_needing_path_sync > 1 ? "s" : ""} need${oe.models_needing_path_sync === 1 ? "s" : ""} sync` : F || "Unknown";
    }
    return Ue(L), (oe, F) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, { title: "WORKFLOWS" }, {
            actions: l(() => [
              z.value.length > 0 ? (s(), T(ee, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: O
              }, {
                default: l(() => [...F[8] || (F[8] = [
                  h(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : d("", !0)
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          k(zt, {
            modelValue: r.value,
            "onUpdate:modelValue": F[0] || (F[0] = (M) => r.value = M),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          f.value ? (s(), T(pt, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (s(), T(ht, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            x.value.length ? (s(), T(Be, {
              key: 0,
              title: "BROKEN",
              count: x.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, te(x.value, (M) => (s(), T(He, {
                  key: M.name,
                  status: "broken"
                }, {
                  icon: l(() => [...F[9] || (F[9] = [
                    h("⚠", -1)
                  ])]),
                  title: l(() => [
                    h(a(M.name), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(we(M)), 1)
                  ]),
                  actions: l(() => [
                    k(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (le) => E(M.name)
                    }, {
                      default: l(() => [...F[10] || (F[10] = [
                        h(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => I(M.name)
                    }, {
                      default: l(() => [...F[11] || (F[11] = [
                        h(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            S.value.length ? (s(), T(Be, {
              key: 1,
              title: "NEW",
              count: S.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, te(S.value, (M) => (s(), T(He, {
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
                    h(a(me(M)), 1)
                  ]),
                  actions: l(() => [
                    k(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => I(M.name)
                    }, {
                      default: l(() => [...F[12] || (F[12] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            j.value.length ? (s(), T(Be, {
              key: 2,
              title: "MODIFIED",
              count: j.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, te(j.value, (M) => (s(), T(He, {
                  key: M.name,
                  status: M.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: l(() => [...F[13] || (F[13] = [
                    h("⚡", -1)
                  ])]),
                  title: l(() => [
                    h(a(M.name), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(me(M)), 1)
                  ]),
                  actions: l(() => [
                    k(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => I(M.name)
                    }, {
                      default: l(() => [...F[14] || (F[14] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            W.value.length ? (s(), T(Be, {
              key: 3,
              title: "SYNCED",
              count: W.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: F[2] || (F[2] = (M) => m.value = M)
            }, {
              default: l(() => [
                (s(!0), o(V, null, te(H.value, (M) => (s(), T(He, {
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
                    h(a(me(M)), 1)
                  ]),
                  actions: l(() => [
                    k(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => I(M.name)
                    }, {
                      default: l(() => [...F[15] || (F[15] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !p.value && W.value.length > 5 ? (s(), T(ee, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: F[1] || (F[1] = (M) => p.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: l(() => [
                    h(" View all " + a(W.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            D.value.length ? d("", !0) : (s(), T(ot, {
              key: 4,
              icon: "📭",
              message: r.value ? `No workflows match '${r.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      y.value && C.value ? (s(), T(Wl, {
        key: 0,
        "workflow-name": C.value,
        onClose: F[3] || (F[3] = (M) => y.value = !1),
        onResolve: F[4] || (F[4] = (M) => E(C.value)),
        onRefresh: F[5] || (F[5] = (M) => i("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0),
      _.value && C.value ? (s(), T(_u, {
        key: 1,
        "workflow-name": C.value,
        onClose: F[6] || (F[6] = (M) => _.value = !1),
        onInstall: B,
        onRefresh: F[7] || (F[7] = (M) => i("refresh")),
        onRestart: ae
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), Hu = /* @__PURE__ */ Z(qu, [["__scopeId", "data-v-591d06d5"]]), Ku = /* @__PURE__ */ X({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: ie(["summary-bar", t.variant])
    }, [
      Se(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Rt = /* @__PURE__ */ Z(Ku, [["__scopeId", "data-v-ccb7816e"]]), Ju = {
  key: 0,
  class: "model-details"
}, Yu = { class: "detail-section" }, Qu = { class: "detail-row" }, Xu = { class: "detail-value mono" }, Zu = { class: "detail-row" }, em = { class: "detail-value mono" }, tm = { class: "detail-row" }, sm = { class: "detail-value mono" }, om = { class: "detail-row" }, nm = { class: "detail-value" }, am = { class: "detail-row" }, lm = { class: "detail-value" }, im = { class: "detail-row" }, rm = { class: "detail-value" }, dm = { class: "detail-section" }, cm = { class: "section-header" }, um = {
  key: 0,
  class: "locations-list"
}, mm = { class: "location-path mono" }, vm = {
  key: 0,
  class: "location-modified"
}, fm = ["onClick"], gm = {
  key: 1,
  class: "empty-state"
}, pm = { class: "detail-section" }, hm = { class: "section-header" }, ym = {
  key: 0,
  class: "sources-list"
}, wm = { class: "source-type" }, km = ["href"], bm = ["disabled", "onClick"], _m = {
  key: 1,
  class: "empty-state"
}, $m = { class: "add-source-form" }, Cm = ["disabled"], xm = {
  key: 2,
  class: "source-error"
}, Sm = {
  key: 3,
  class: "source-success"
}, Im = /* @__PURE__ */ X({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: i, addModelSource: w, removeModelSource: g, openFileLocation: f } = Oe(), u = b(null), r = b(!0), m = b(null), p = b(""), y = b(!1), _ = b(null), C = b(null), z = b(null), U = b(null);
    let v = null;
    function $(L, I = "success", E = 2e3) {
      v && clearTimeout(v), U.value = { message: L, type: I }, v = setTimeout(() => {
        U.value = null;
      }, E);
    }
    function D(L) {
      if (!L) return "Unknown";
      const I = 1024 * 1024 * 1024, E = 1024 * 1024;
      return L >= I ? `${(L / I).toFixed(1)} GB` : L >= E ? `${(L / E).toFixed(0)} MB` : `${(L / 1024).toFixed(0)} KB`;
    }
    function x(L) {
      navigator.clipboard.writeText(L), $("Copied to clipboard!");
    }
    async function S(L) {
      try {
        await f(L), $("Opening file location...");
      } catch {
        $("Failed to open location", "error");
      }
    }
    async function j() {
      if (!(!p.value.trim() || !u.value)) {
        y.value = !0, C.value = null, z.value = null;
        try {
          await w(u.value.hash, p.value.trim()), z.value = "Source added successfully!", p.value = "", await H();
        } catch (L) {
          C.value = L instanceof Error ? L.message : "Failed to add source";
        } finally {
          y.value = !1;
        }
      }
    }
    async function W(L) {
      if (u.value) {
        _.value = L, C.value = null, z.value = null;
        try {
          await g(u.value.hash, L), $("Source removed"), await H();
        } catch (I) {
          C.value = I instanceof Error ? I.message : "Failed to remove source";
        } finally {
          _.value = null;
        }
      }
    }
    async function H() {
      r.value = !0, m.value = null;
      try {
        u.value = await i(n.identifier);
      } catch (L) {
        m.value = L instanceof Error ? L.message : "Failed to load model details";
      } finally {
        r.value = !1;
      }
    }
    return Ue(H), (L, I) => {
      var E;
      return s(), o(V, null, [
        k(Ke, {
          title: `Model Details: ${((E = u.value) == null ? void 0 : E.filename) || "Loading..."}`,
          size: "lg",
          loading: r.value,
          error: m.value,
          onClose: I[5] || (I[5] = (O) => L.$emit("close"))
        }, {
          body: l(() => {
            var O, B, ae, we;
            return [
              u.value ? (s(), o("div", Ju, [
                e("section", Yu, [
                  e("div", Qu, [
                    I[6] || (I[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", Xu, a(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: I[0] || (I[0] = (me) => x(u.value.hash))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", Zu, [
                    I[7] || (I[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", em, a(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: I[1] || (I[1] = (me) => x(u.value.blake3))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", tm, [
                    I[8] || (I[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", sm, a(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: I[2] || (I[2] = (me) => x(u.value.sha256))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", om, [
                    I[9] || (I[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", nm, a(D(u.value.size)), 1)
                  ]),
                  e("div", am, [
                    I[10] || (I[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", lm, a(u.value.category), 1)
                  ]),
                  e("div", im, [
                    I[11] || (I[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", rm, a(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", dm, [
                  e("h4", cm, "Locations (" + a(((O = u.value.locations) == null ? void 0 : O.length) || 0) + ")", 1),
                  (B = u.value.locations) != null && B.length ? (s(), o("div", um, [
                    (s(!0), o(V, null, te(u.value.locations, (me, oe) => (s(), o("div", {
                      key: oe,
                      class: "location-item"
                    }, [
                      e("span", mm, a(me.path), 1),
                      me.modified ? (s(), o("span", vm, "Modified: " + a(me.modified), 1)) : d("", !0),
                      me.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (F) => S(me.path)
                      }, " Open File Location ", 8, fm)) : d("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", gm, "No locations found"))
                ]),
                e("section", pm, [
                  e("h4", hm, "Download Sources (" + a(((ae = u.value.sources) == null ? void 0 : ae.length) || 0) + ")", 1),
                  (we = u.value.sources) != null && we.length ? (s(), o("div", ym, [
                    (s(!0), o(V, null, te(u.value.sources, (me, oe) => (s(), o("div", {
                      key: oe,
                      class: "source-item"
                    }, [
                      e("span", wm, a(me.type) + ":", 1),
                      e("a", {
                        href: me.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(me.url), 9, km),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: _.value === me.url,
                        onClick: (F) => W(me.url)
                      }, a(_.value === me.url ? "..." : "×"), 9, bm)
                    ]))), 128))
                  ])) : (s(), o("div", _m, " No download sources configured ")),
                  e("div", $m, [
                    Ne(e("input", {
                      "onUpdate:modelValue": I[3] || (I[3] = (me) => p.value = me),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Et, p.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !p.value.trim() || y.value,
                      onClick: j
                    }, a(y.value ? "Adding..." : "Add Source"), 9, Cm)
                  ]),
                  C.value ? (s(), o("p", xm, a(C.value), 1)) : d("", !0),
                  z.value ? (s(), o("p", Sm, a(z.value), 1)) : d("", !0)
                ])
              ])) : d("", !0)
            ];
          }),
          footer: l(() => [
            e("button", {
              class: "btn-secondary",
              onClick: I[4] || (I[4] = (O) => L.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), T(Fe, { to: "body" }, [
          U.value ? (s(), o("div", {
            key: 0,
            class: ie(["toast", U.value.type])
          }, a(U.value.message), 3)) : d("", !0)
        ]))
      ], 64);
    };
  }
}), vs = /* @__PURE__ */ Z(Im, [["__scopeId", "data-v-f15cbb56"]]), Em = /* @__PURE__ */ X({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: i, getStatus: w } = Oe(), g = b([]), f = b([]), u = b("production"), r = b(!1), m = b(null), p = b(""), y = b(!1), _ = b(null);
    function C() {
      y.value = !1, n("navigate", "model-index");
    }
    const z = P(
      () => g.value.reduce((H, L) => H + (L.size || 0), 0)
    ), U = P(() => {
      if (!p.value.trim()) return g.value;
      const H = p.value.toLowerCase();
      return g.value.filter((L) => L.filename.toLowerCase().includes(H));
    }), v = P(() => {
      if (!p.value.trim()) return f.value;
      const H = p.value.toLowerCase();
      return f.value.filter((L) => L.filename.toLowerCase().includes(H));
    }), $ = P(() => {
      const H = {};
      for (const I of U.value) {
        const E = I.type || "other";
        H[E] || (H[E] = []), H[E].push(I);
      }
      const L = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(H).sort(([I], [E]) => {
        const O = L.indexOf(I), B = L.indexOf(E);
        return O >= 0 && B >= 0 ? O - B : O >= 0 ? -1 : B >= 0 ? 1 : I.localeCompare(E);
      }).map(([I, E]) => ({ type: I, models: E }));
    });
    function D(H) {
      if (!H) return "Unknown";
      const L = H / (1024 * 1024);
      return L >= 1024 ? `${(L / 1024).toFixed(1)} GB` : `${L.toFixed(0)} MB`;
    }
    function x(H) {
      _.value = H.hash || H.filename;
    }
    function S(H) {
      n("navigate", "model-index");
    }
    function j(H) {
      alert(`Download functionality not yet implemented for ${H}`);
    }
    async function W() {
      r.value = !0, m.value = null;
      try {
        const H = await i();
        g.value = H, f.value = [];
        const L = await w();
        u.value = L.environment || "production";
      } catch (H) {
        m.value = H instanceof Error ? H.message : "Failed to load models";
      } finally {
        r.value = !1;
      }
    }
    return Ue(W), (H, L) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: L[0] || (L[0] = (I) => y.value = !0)
          })
        ]),
        search: l(() => [
          k(zt, {
            modelValue: p.value,
            "onUpdate:modelValue": L[1] || (L[1] = (I) => p.value = I),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          r.value ? (s(), T(pt, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (s(), T(ht, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: W
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            g.value.length ? (s(), T(Rt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                h(" Total: " + a(g.value.length) + " models • " + a(D(z.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(V, null, te($.value, (I) => (s(), T(Be, {
              key: I.type,
              title: I.type.toUpperCase(),
              count: I.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(V, null, te(I.models, (E) => (s(), T(He, {
                  key: E.hash || E.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...L[4] || (L[4] = [
                    h("📦", -1)
                  ])]),
                  title: l(() => [
                    h(a(E.filename), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(D(E.size)), 1)
                  ]),
                  details: l(() => [
                    k(Pe, {
                      label: "Used by:",
                      value: (E.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    k(Pe, {
                      label: "Path:",
                      value: E.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (O) => x(E)
                    }, {
                      default: l(() => [...L[5] || (L[5] = [
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
            v.value.length ? (s(), T(Be, {
              key: 1,
              title: "MISSING",
              count: v.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, te(v.value, (I) => (s(), T(He, {
                  key: I.filename,
                  status: "broken"
                }, {
                  icon: l(() => [...L[6] || (L[6] = [
                    h("⚠", -1)
                  ])]),
                  title: l(() => [
                    h(a(I.filename), 1)
                  ]),
                  subtitle: l(() => [...L[7] || (L[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: l(() => {
                    var E;
                    return [
                      k(Pe, {
                        label: "Required by:",
                        value: ((E = I.workflow_names) == null ? void 0 : E.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: l(() => [
                    k(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (E) => j(I.filename)
                    }, {
                      default: l(() => [...L[8] || (L[8] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (E) => S(I.filename)
                    }, {
                      default: l(() => [...L[9] || (L[9] = [
                        h(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !U.value.length && !v.value.length ? (s(), T(ot, {
              key: 2,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(it, {
        show: y.value,
        title: "About Environment Models",
        onClose: L[2] || (L[2] = (I) => y.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            L[10] || (L[10] = h(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(u.value) + '"', 1),
            L[11] || (L[11] = h(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: l(() => [
          k(ee, {
            variant: "primary",
            onClick: C
          }, {
            default: l(() => [...L[12] || (L[12] = [
              h(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (s(), T(vs, {
        key: 0,
        identifier: _.value,
        onClose: L[3] || (L[3] = (I) => _.value = null)
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), Mm = /* @__PURE__ */ Z(Em, [["__scopeId", "data-v-cb4f12b3"]]), Tm = {
  key: 0,
  class: "indexing-progress"
}, zm = { class: "progress-info" }, Rm = { class: "progress-label" }, Lm = { class: "progress-count" }, Pm = { class: "progress-bar" }, Dm = { class: "modal-content" }, Nm = { class: "modal-header" }, Um = { class: "modal-body" }, Om = { class: "input-group" }, Bm = { class: "current-path" }, Fm = { class: "input-group" }, Am = { class: "modal-footer" }, Vm = { class: "modal-content" }, Wm = { class: "modal-header" }, jm = { class: "modal-body" }, Gm = { class: "input-group" }, qm = { class: "input-group" }, Hm = { class: "modal-footer" }, Km = /* @__PURE__ */ X({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: i,
      getModelsDirectory: w,
      setModelsDirectory: g
    } = Oe(), { addToQueue: f } = jt(), u = c, r = b([]), m = b(!1), p = b(!1), y = b(null), _ = b(""), C = b(!1), z = b(null), U = b(!1), v = b(null), $ = b(""), D = b(!1), x = b(!1), S = b(""), j = b(""), W = b(null), H = P(
      () => r.value.reduce((F, M) => F + (M.size || 0), 0)
    ), L = P(() => {
      if (!_.value.trim()) return r.value;
      const F = _.value.toLowerCase();
      return r.value.filter((M) => {
        const le = M, se = M.sha256 || le.sha256_hash || "";
        return M.filename.toLowerCase().includes(F) || se.toLowerCase().includes(F);
      });
    }), I = P(() => {
      const F = {};
      for (const le of L.value) {
        const se = le.type || "other";
        F[se] || (F[se] = []), F[se].push(le);
      }
      const M = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(F).sort(([le], [se]) => {
        const Me = M.indexOf(le), ke = M.indexOf(se);
        return Me >= 0 && ke >= 0 ? Me - ke : Me >= 0 ? -1 : ke >= 0 ? 1 : le.localeCompare(se);
      }).map(([le, se]) => ({ type: le, models: se }));
    });
    function E(F) {
      if (!F) return "Unknown";
      const M = 1024 * 1024 * 1024, le = 1024 * 1024;
      return F >= M ? `${(F / M).toFixed(1)} GB` : F >= le ? `${(F / le).toFixed(0)} MB` : `${(F / 1024).toFixed(0)} KB`;
    }
    function O(F) {
      z.value = F.hash || F.filename;
    }
    async function B() {
      p.value = !0, y.value = null;
      try {
        const F = await i();
        await me(), F.changes > 0 && console.log(`Scan complete: ${F.changes} changes detected`);
      } catch (F) {
        y.value = F instanceof Error ? F.message : "Failed to scan models";
      } finally {
        p.value = !1;
      }
    }
    async function ae() {
      if ($.value.trim()) {
        D.value = !0, y.value = null;
        try {
          const F = await g($.value.trim());
          v.value = F.path, U.value = !1, $.value = "", await me(), console.log(`Directory changed: ${F.models_indexed} models indexed`), u("refresh");
        } catch (F) {
          y.value = F instanceof Error ? F.message : "Failed to change directory";
        } finally {
          D.value = !1;
        }
      }
    }
    function we() {
      if (!S.value.trim() || !j.value.trim()) return;
      const F = j.value.split("/").pop() || "model.safetensors";
      f([{
        workflow: "__manual__",
        filename: F,
        url: S.value.trim(),
        targetPath: j.value.trim()
      }]), S.value = "", j.value = "", x.value = !1;
    }
    async function me() {
      m.value = !0, y.value = null;
      try {
        r.value = await n();
      } catch (F) {
        y.value = F instanceof Error ? F.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function oe() {
      try {
        const F = await w();
        v.value = F.path;
      } catch {
      }
    }
    return Ue(() => {
      me(), oe();
    }), (F, M) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: M[2] || (M[2] = (le) => C.value = !0)
          }, {
            actions: l(() => [
              k(ee, {
                variant: "primary",
                size: "sm",
                disabled: p.value,
                onClick: B
              }, {
                default: l(() => [
                  h(a(p.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(ee, {
                variant: "primary",
                size: "sm",
                onClick: M[0] || (M[0] = (le) => U.value = !0)
              }, {
                default: l(() => [...M[15] || (M[15] = [
                  h(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              k(ee, {
                variant: "primary",
                size: "sm",
                onClick: M[1] || (M[1] = (le) => x.value = !0)
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
          W.value ? (s(), o("div", Tm, [
            e("div", zm, [
              e("span", Rm, a(W.value.message), 1),
              e("span", Lm, a(W.value.current) + "/" + a(W.value.total), 1)
            ]),
            e("div", Pm, [
              e("div", {
                class: "progress-fill",
                style: gt({ width: `${W.value.current / W.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : d("", !0),
          k(zt, {
            modelValue: _.value,
            "onUpdate:modelValue": M[3] || (M[3] = (le) => _.value = le),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          m.value || W.value ? (s(), T(pt, {
            key: 0,
            message: W.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : y.value ? (s(), T(ht, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: me
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            r.value.length ? (s(), T(Rt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                h(" Total: " + a(r.value.length) + " models • " + a(E(H.value)), 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(V, null, te(I.value, (le) => (s(), T(Be, {
              key: le.type,
              title: le.type.toUpperCase(),
              count: le.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: l(() => [
                (s(!0), o(V, null, te(le.models, (se) => (s(), T(He, {
                  key: se.sha256 || se.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...M[17] || (M[17] = [
                    h("📦", -1)
                  ])]),
                  title: l(() => [
                    h(a(se.filename), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(E(se.size)), 1)
                  ]),
                  details: l(() => [
                    k(Pe, {
                      label: "Hash:",
                      value: se.hash ? se.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Me) => O(se)
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
            L.value.length ? d("", !0) : (s(), T(ot, {
              key: 1,
              icon: "📭",
              message: _.value ? `No models match '${_.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k(it, {
        show: C.value,
        title: "About Workspace Model Index",
        onClose: M[4] || (M[4] = (le) => C.value = !1)
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
      z.value ? (s(), T(vs, {
        key: 0,
        identifier: z.value,
        onClose: M[5] || (M[5] = (le) => z.value = null)
      }, null, 8, ["identifier"])) : d("", !0),
      (s(), T(Fe, { to: "body" }, [
        U.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: M[9] || (M[9] = ze((le) => U.value = !1, ["self"]))
        }, [
          e("div", Dm, [
            e("div", Nm, [
              M[20] || (M[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: M[6] || (M[6] = (le) => U.value = !1)
              }, "✕")
            ]),
            e("div", Um, [
              e("div", Om, [
                M[21] || (M[21] = e("label", null, "Current Directory", -1)),
                e("code", Bm, a(v.value || "Not set"), 1)
              ]),
              e("div", Fm, [
                M[22] || (M[22] = e("label", null, "New Directory Path", -1)),
                k(st, {
                  modelValue: $.value,
                  "onUpdate:modelValue": M[7] || (M[7] = (le) => $.value = le),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              M[23] || (M[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", Am, [
              k(ce, {
                variant: "secondary",
                onClick: M[8] || (M[8] = (le) => U.value = !1)
              }, {
                default: l(() => [...M[24] || (M[24] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(ce, {
                variant: "primary",
                disabled: !$.value.trim() || D.value,
                loading: D.value,
                onClick: ae
              }, {
                default: l(() => [
                  h(a(D.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : d("", !0)
      ])),
      (s(), T(Fe, { to: "body" }, [
        x.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: M[14] || (M[14] = ze((le) => x.value = !1, ["self"]))
        }, [
          e("div", Vm, [
            e("div", Wm, [
              M[25] || (M[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: M[10] || (M[10] = (le) => x.value = !1)
              }, "✕")
            ]),
            e("div", jm, [
              e("div", Gm, [
                M[26] || (M[26] = e("label", null, "Download URL", -1)),
                k(st, {
                  modelValue: S.value,
                  "onUpdate:modelValue": M[11] || (M[11] = (le) => S.value = le),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", qm, [
                M[27] || (M[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                k(st, {
                  modelValue: j.value,
                  "onUpdate:modelValue": M[12] || (M[12] = (le) => j.value = le),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              M[28] || (M[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", Hm, [
              k(ce, {
                variant: "secondary",
                onClick: M[13] || (M[13] = (le) => x.value = !1)
              }, {
                default: l(() => [...M[29] || (M[29] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(ce, {
                variant: "primary",
                disabled: !S.value.trim() || !j.value.trim(),
                onClick: we
              }, {
                default: l(() => [...M[30] || (M[30] = [
                  h(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : d("", !0)
      ]))
    ], 64));
  }
}), Jm = /* @__PURE__ */ Z(Km, [["__scopeId", "data-v-73b78d84"]]), Ym = { class: "node-details" }, Qm = { class: "status-row" }, Xm = {
  key: 0,
  class: "detail-row"
}, Zm = { class: "value" }, ev = { class: "detail-row" }, tv = { class: "value" }, sv = {
  key: 1,
  class: "detail-row"
}, ov = { class: "value mono" }, nv = {
  key: 2,
  class: "detail-row"
}, av = ["href"], lv = {
  key: 3,
  class: "detail-row"
}, iv = { class: "value mono small" }, rv = { class: "detail-row" }, dv = {
  key: 0,
  class: "value"
}, cv = {
  key: 1,
  class: "workflow-list"
}, uv = /* @__PURE__ */ X({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, i = c, w = P(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), g = P(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), f = P(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (u, r) => (s(), T(Ke, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: r[1] || (r[1] = (m) => i("close"))
    }, {
      body: l(() => [
        e("div", Ym, [
          e("div", Qm, [
            r[2] || (r[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: ie(["status-badge", w.value])
            }, a(g.value), 3)
          ]),
          t.node.version ? (s(), o("div", Xm, [
            r[3] || (r[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", Zm, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : d("", !0),
          e("div", ev, [
            r[4] || (r[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", tv, a(f.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", sv, [
            r[5] || (r[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", ov, a(t.node.registry_id), 1)
          ])) : d("", !0),
          t.node.repository ? (s(), o("div", nv, [
            r[7] || (r[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              h(a(t.node.repository) + " ", 1),
              r[6] || (r[6] = e("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                e("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, av)
          ])) : d("", !0),
          t.node.download_url ? (s(), o("div", lv, [
            r[8] || (r[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", iv, a(t.node.download_url), 1)
          ])) : d("", !0),
          r[10] || (r[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", rv, [
            r[9] || (r[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", dv, " Not used in any workflows ")) : (s(), o("div", cv, [
              (s(!0), o(V, null, te(t.node.used_in_workflows, (m) => (s(), o("span", {
                key: m,
                class: "workflow-tag"
              }, a(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: l(() => [
        k(ce, {
          variant: "secondary",
          onClick: r[0] || (r[0] = (m) => i("close"))
        }, {
          default: l(() => [...r[11] || (r[11] = [
            h(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), mv = /* @__PURE__ */ Z(uv, [["__scopeId", "data-v-b342f626"]]), vv = { key: 0 }, fv = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, gv = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, pv = /* @__PURE__ */ X({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: c }) {
    const n = c, { getNodes: i, trackNodeAsDev: w, installNode: g, uninstallNode: f } = Oe(), u = b({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), r = b(!1), m = b(null), p = b(""), y = b(!1), _ = b(null), C = P(() => {
      if (!p.value.trim()) return u.value.nodes;
      const I = p.value.toLowerCase();
      return u.value.nodes.filter(
        (E) => {
          var O, B;
          return E.name.toLowerCase().includes(I) || ((O = E.description) == null ? void 0 : O.toLowerCase().includes(I)) || ((B = E.repository) == null ? void 0 : B.toLowerCase().includes(I));
        }
      );
    }), z = P(
      () => C.value.filter((I) => I.installed && I.tracked)
    ), U = P(
      () => C.value.filter((I) => !I.installed && I.tracked)
    ), v = P(
      () => C.value.filter((I) => I.installed && !I.tracked)
    );
    function $(I) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[I] || I;
    }
    function D(I) {
      return !I.used_in_workflows || I.used_in_workflows.length === 0 ? "Not used in any workflows" : I.used_in_workflows.length === 1 ? I.used_in_workflows[0] : `${I.used_in_workflows.length} workflows`;
    }
    function x(I) {
      _.value = I;
    }
    function S() {
      n("open-node-manager");
    }
    async function j(I) {
      if (confirm(`Track "${I}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          r.value = !0;
          const E = await w(I);
          E.status === "success" ? (alert(`Node "${I}" is now tracked as development!`), await L()) : alert(`Failed to track node: ${E.message || "Unknown error"}`);
        } catch (E) {
          alert(`Error tracking node: ${E instanceof Error ? E.message : "Unknown error"}`);
        } finally {
          r.value = !1;
        }
    }
    async function W(I) {
      if (confirm(`Remove untracked node "${I}"?

This will delete the node directory from custom_nodes/.`))
        try {
          r.value = !0;
          const E = await f(I);
          E.status === "success" ? (alert(`Node "${I}" removed!`), await L()) : alert(`Failed to remove node: ${E.message || "Unknown error"}`);
        } catch (E) {
          alert(`Error removing node: ${E instanceof Error ? E.message : "Unknown error"}`);
        } finally {
          r.value = !1;
        }
    }
    async function H(I) {
      if (confirm(`Install node "${I}"?

This will download and install the node.`))
        try {
          r.value = !0;
          const E = await g(I);
          E.status === "success" ? (alert(`Node "${I}" installed successfully!`), await L()) : alert(`Failed to install node: ${E.message || "Unknown error"}`);
        } catch (E) {
          alert(`Error installing node: ${E instanceof Error ? E.message : "Unknown error"}`);
        } finally {
          r.value = !1;
        }
    }
    async function L() {
      r.value = !0, m.value = null;
      try {
        u.value = await i();
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to load nodes";
      } finally {
        r.value = !1;
      }
    }
    return Ue(L), (I, E) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (O) => y.value = !0)
          }, {
            actions: l(() => [
              k(ee, {
                variant: "primary",
                size: "sm",
                onClick: S
              }, {
                default: l(() => [...E[5] || (E[5] = [
                  h(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          k(zt, {
            modelValue: p.value,
            "onUpdate:modelValue": E[1] || (E[1] = (O) => p.value = O),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          r.value ? (s(), T(pt, {
            key: 0,
            message: "Loading nodes..."
          })) : m.value ? (s(), T(ht, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            u.value.total_count ? (s(), T(Rt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                h(a(u.value.installed_count) + " installed ", 1),
                u.value.missing_count ? (s(), o(V, { key: 0 }, [
                  h(" • " + a(u.value.missing_count) + " missing", 1)
                ], 64)) : d("", !0),
                u.value.untracked_count ? (s(), o(V, { key: 1 }, [
                  h(" • " + a(u.value.untracked_count) + " untracked", 1)
                ], 64)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            v.value.length ? (s(), T(Be, {
              key: 1,
              title: "UNTRACKED",
              count: v.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(V, null, te(v.value, (O) => (s(), T(He, {
                  key: O.name,
                  status: "warning"
                }, {
                  icon: l(() => [...E[6] || (E[6] = [
                    h("?", -1)
                  ])]),
                  title: l(() => [
                    h(a(O.name), 1)
                  ]),
                  subtitle: l(() => [...E[7] || (E[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: l(() => [
                    k(Pe, {
                      label: "Used by:",
                      value: D(O)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (B) => x(O)
                    }, {
                      default: l(() => [...E[8] || (E[8] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (B) => j(O.name)
                    }, {
                      default: l(() => [...E[9] || (E[9] = [
                        h(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ee, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (B) => W(O.name)
                    }, {
                      default: l(() => [...E[10] || (E[10] = [
                        h(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            z.value.length ? (s(), T(Be, {
              key: 2,
              title: "INSTALLED",
              count: z.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(V, null, te(z.value, (O) => (s(), T(He, {
                  key: O.name,
                  status: "synced"
                }, {
                  icon: l(() => [
                    h(a(O.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: l(() => [
                    h(a(O.name), 1)
                  ]),
                  subtitle: l(() => [
                    O.version ? (s(), o("span", vv, a(O.source === "development" ? "" : "v") + a(O.version), 1)) : (s(), o("span", fv, "version unknown")),
                    e("span", gv, " • " + a($(O.source)), 1)
                  ]),
                  details: l(() => [
                    k(Pe, {
                      label: "Used by:",
                      value: D(O)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (B) => x(O)
                    }, {
                      default: l(() => [...E[11] || (E[11] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: S
                    }, {
                      default: l(() => [...E[12] || (E[12] = [
                        h(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            U.value.length ? (s(), T(Be, {
              key: 3,
              title: "MISSING",
              count: U.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(V, null, te(U.value, (O) => (s(), T(He, {
                  key: O.name,
                  status: "missing"
                }, {
                  icon: l(() => [...E[13] || (E[13] = [
                    h("!", -1)
                  ])]),
                  title: l(() => [
                    h(a(O.name), 1)
                  ]),
                  subtitle: l(() => [...E[14] || (E[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: l(() => [
                    k(Pe, {
                      label: "Required by:",
                      value: D(O)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (B) => x(O)
                    }, {
                      default: l(() => [...E[15] || (E[15] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (B) => H(O.name)
                    }, {
                      default: l(() => [...E[16] || (E[16] = [
                        h(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !z.value.length && !U.value.length && !v.value.length ? (s(), T(ot, {
              key: 4,
              icon: "📭",
              message: p.value ? `No nodes match '${p.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(it, {
        show: y.value,
        title: "About Custom Nodes",
        onClose: E[3] || (E[3] = (O) => y.value = !1)
      }, {
        content: l(() => [...E[17] || (E[17] = [
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
          k(ee, {
            variant: "primary",
            onClick: E[2] || (E[2] = (O) => y.value = !1)
          }, {
            default: l(() => [...E[18] || (E[18] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (s(), T(mv, {
        key: 0,
        node: _.value,
        onClose: E[4] || (E[4] = (O) => _.value = null)
      }, null, 8, ["node"])) : d("", !0)
    ], 64));
  }
}), hv = /* @__PURE__ */ Z(pv, [["__scopeId", "data-v-4ac1465a"]]);
function Rs(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const yv = { class: "remote-url-display" }, wv = ["title"], kv = ["title"], bv = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, _v = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, $v = /* @__PURE__ */ X({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = b(!1), i = P(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const g = c.url.slice(0, Math.floor(c.maxLength * 0.6)), f = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${g}...${f}`;
    });
    async function w() {
      try {
        await navigator.clipboard.writeText(c.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy URL:", g);
      }
    }
    return (g, f) => (s(), o("div", yv, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(i.value), 9, wv),
      e("button", {
        class: ie(["copy-btn", { copied: n.value }]),
        onClick: w,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", _v, [...f[1] || (f[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", bv, [...f[0] || (f[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, kv)
    ]));
  }
}), Cv = /* @__PURE__ */ Z($v, [["__scopeId", "data-v-7768a58d"]]), xv = { class: "remote-title" }, Sv = {
  key: 0,
  class: "default-badge"
}, Iv = {
  key: 1,
  class: "sync-badge"
}, Ev = {
  key: 0,
  class: "ahead"
}, Mv = {
  key: 1,
  class: "behind"
}, Tv = {
  key: 1,
  class: "synced"
}, zv = ["href"], Rv = {
  key: 1,
  class: "remote-url-text"
}, Lv = /* @__PURE__ */ X({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const c = t, n = P(() => c.fetchingRemote === c.remote.name), i = P(() => c.remote.is_default), w = P(() => c.syncStatus && c.syncStatus.behind > 0), g = P(() => c.syncStatus && c.syncStatus.ahead > 0), f = P(() => c.remote.push_url !== c.remote.fetch_url), u = P(() => {
      const m = c.remote.fetch_url, p = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return p ? `https://${p[1]}/${p[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), r = P(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, p) => (s(), T(He, {
      status: i.value ? "synced" : void 0
    }, Wt({
      icon: l(() => [
        h(a(i.value ? "🔗" : "🌐"), 1)
      ]),
      title: l(() => [
        e("div", xv, [
          e("span", null, a(t.remote.name), 1),
          i.value ? (s(), o("span", Sv, "DEFAULT")) : d("", !0),
          t.syncStatus ? (s(), o("span", Iv, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(V, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", Ev, "↑" + a(t.syncStatus.ahead), 1)) : d("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", Mv, "↓" + a(t.syncStatus.behind), 1)) : d("", !0)
            ], 64)) : (s(), o("span", Tv, "✓ synced"))
          ])) : d("", !0)
        ])
      ]),
      subtitle: l(() => [
        u.value ? (s(), o("a", {
          key: 0,
          href: u.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: p[0] || (p[0] = ze(() => {
          }, ["stop"]))
        }, a(r.value), 9, zv)) : (s(), o("span", Rv, a(r.value), 1))
      ]),
      actions: l(() => [
        k(ee, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: p[1] || (p[1] = (y) => m.$emit("fetch", t.remote.name))
        }, {
          default: l(() => [...p[6] || (p[6] = [
            h(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        k(ee, {
          variant: w.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: p[2] || (p[2] = (y) => m.$emit("pull", t.remote.name))
        }, {
          default: l(() => [
            h(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(ee, {
          variant: g.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: p[3] || (p[3] = (y) => m.$emit("push", t.remote.name))
        }, {
          default: l(() => [
            h(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(ee, {
          variant: "secondary",
          size: "xs",
          onClick: p[4] || (p[4] = (y) => m.$emit("edit", t.remote.name))
        }, {
          default: l(() => [...p[7] || (p[7] = [
            h(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        i.value ? d("", !0) : (s(), T(ee, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: p[5] || (p[5] = (y) => m.$emit("remove", t.remote.name))
        }, {
          default: l(() => [...p[8] || (p[8] = [
            h(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      f.value ? {
        name: "details",
        fn: l(() => [
          t.remote.push_url !== t.remote.fetch_url ? (s(), T(Pe, {
            key: 0,
            label: "Push URL:"
          }, {
            default: l(() => [
              k(Cv, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : d("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Pv = /* @__PURE__ */ Z(Lv, [["__scopeId", "data-v-8310f3a8"]]), Dv = ["for"], Nv = {
  key: 0,
  class: "base-form-field-required"
}, Uv = { class: "base-form-field-input" }, Ov = {
  key: 1,
  class: "base-form-field-error"
}, Bv = {
  key: 2,
  class: "base-form-field-hint"
}, Fv = /* @__PURE__ */ X({
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
    const c = t, n = P(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, w) => (s(), o("div", {
      class: ie(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        h(a(t.label) + " ", 1),
        t.required ? (s(), o("span", Nv, "*")) : d("", !0)
      ], 8, Dv)) : d("", !0),
      e("div", Uv, [
        Se(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", Ov, a(t.error), 1)) : t.hint ? (s(), o("span", Bv, a(t.hint), 1)) : d("", !0)
    ], 2));
  }
}), ns = /* @__PURE__ */ Z(Fv, [["__scopeId", "data-v-9a1cf296"]]), Av = { class: "remote-form" }, Vv = { class: "form-header" }, Wv = { class: "form-body" }, jv = {
  key: 0,
  class: "form-error"
}, Gv = { class: "form-actions" }, qv = /* @__PURE__ */ X({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, w = b({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), g = b(!1), f = b(null);
    kt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      w.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const u = P(() => w.value.name.trim() !== "" && w.value.fetchUrl.trim() !== "");
    async function r() {
      if (!(!u.value || g.value)) {
        f.value = null, g.value = !0;
        try {
          i("submit", w.value);
        } catch (m) {
          f.value = m instanceof Error ? m.message : "Failed to submit form";
        } finally {
          g.value = !1;
        }
      }
    }
    return (m, p) => (s(), o("div", Av, [
      e("div", Vv, [
        k(Ze, null, {
          default: l(() => [
            h(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Wv, [
        k(ns, {
          label: "Remote Name",
          required: ""
        }, {
          default: l(() => [
            k(st, {
              modelValue: w.value.name,
              "onUpdate:modelValue": p[0] || (p[0] = (y) => w.value.name = y),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        k(ns, {
          label: "Fetch URL",
          required: ""
        }, {
          default: l(() => [
            k(st, {
              modelValue: w.value.fetchUrl,
              "onUpdate:modelValue": p[1] || (p[1] = (y) => w.value.fetchUrl = y),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        k(ns, { label: "Push URL (optional)" }, {
          default: l(() => [
            k(st, {
              modelValue: w.value.pushUrl,
              "onUpdate:modelValue": p[2] || (p[2] = (y) => w.value.pushUrl = y),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        f.value ? (s(), o("div", jv, a(f.value), 1)) : d("", !0)
      ]),
      e("div", Gv, [
        k(ee, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: g.value,
          onClick: r
        }, {
          default: l(() => [
            h(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        k(ee, {
          variant: "ghost",
          size: "md",
          onClick: p[3] || (p[3] = (y) => m.$emit("cancel"))
        }, {
          default: l(() => [...p[4] || (p[4] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Hv = /* @__PURE__ */ Z(qv, [["__scopeId", "data-v-56021b18"]]), Kv = { class: "conflict-summary-box" }, Jv = { class: "summary-header" }, Yv = { class: "summary-text" }, Qv = { key: 0 }, Xv = {
  key: 1,
  class: "all-resolved"
}, Zv = { class: "summary-progress" }, ef = { class: "progress-bar" }, tf = { class: "progress-text" }, sf = /* @__PURE__ */ X({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const c = t, n = P(
      () => c.conflictCount > 0 ? c.resolvedCount / c.conflictCount * 100 : 0
    );
    return (i, w) => (s(), o("div", Kv, [
      e("div", Jv, [
        w[0] || (w[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", Yv, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (s(), o("p", Qv, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (s(), o("p", Xv, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", Zv, [
        e("div", ef, [
          e("div", {
            class: "progress-fill",
            style: gt({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", tf, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), of = /* @__PURE__ */ Z(sf, [["__scopeId", "data-v-4e9e6cc9"]]), nf = { class: "modal-header" }, af = { class: "modal-title" }, lf = { class: "modal-body" }, rf = {
  key: 0,
  class: "error-box"
}, df = {
  key: 0,
  class: "error-hint"
}, cf = {
  key: 1,
  class: "loading-state"
}, uf = { class: "commit-summary" }, mf = {
  key: 0,
  class: "changes-section"
}, vf = {
  key: 0,
  class: "change-group",
  open: ""
}, ff = { class: "change-count" }, gf = { class: "change-list" }, pf = {
  key: 0,
  class: "conflict-badge"
}, hf = {
  key: 1,
  class: "change-group"
}, yf = { class: "change-count" }, wf = { class: "change-list" }, kf = {
  key: 2,
  class: "change-group"
}, bf = { class: "change-count" }, _f = { class: "change-list" }, $f = {
  key: 2,
  class: "strategy-section"
}, Cf = { class: "radio-group" }, xf = { class: "radio-option" }, Sf = { class: "radio-option" }, If = { class: "radio-option" }, Ef = {
  key: 3,
  class: "up-to-date"
}, Mf = { class: "modal-actions" }, bs = "comfygit.pullModelStrategy", Tf = /* @__PURE__ */ X({
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
    const n = t, i = c, w = b(localStorage.getItem(bs) || "skip");
    kt(w, (v) => {
      localStorage.setItem(bs, v);
    });
    const g = P(() => {
      var v;
      return ((v = n.error) == null ? void 0 : v.toLowerCase().includes("unrelated histories")) ?? !1;
    }), f = P(() => {
      if (!n.preview) return 0;
      const v = n.preview.changes.workflows;
      return v.added.length + v.modified.length + v.deleted.length;
    }), u = P(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), r = P(() => {
      var v;
      return f.value > 0 || u.value > 0 || (((v = n.preview) == null ? void 0 : v.changes.models.count) || 0) > 0;
    }), m = P(() => n.preview && Rs(n.preview) ? n.preview : null), p = P(() => {
      var v;
      return ((v = m.value) == null ? void 0 : v.workflow_conflicts.length) ?? 0;
    }), y = P(() => {
      var v;
      return ((v = n.conflictResolutions) == null ? void 0 : v.size) ?? 0;
    }), _ = P(
      () => p.value > 0 && y.value === p.value
    ), C = P(() => !(!n.preview || n.preview.has_uncommitted_changes || m.value && !_.value));
    function z(v) {
      if (!m.value) return !1;
      const $ = v.replace(/\.json$/, "");
      return m.value.workflow_conflicts.some((D) => D.name === $);
    }
    function U(v) {
      const $ = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      i("pull", { modelStrategy: w.value, force: v, resolutions: $ });
    }
    return (v, $) => {
      var D, x;
      return s(), T(Fe, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: $[11] || ($[11] = (S) => v.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: $[10] || ($[10] = ze(() => {
            }, ["stop"]))
          }, [
            e("div", nf, [
              e("h3", af, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: $[0] || ($[0] = (S) => v.$emit("close"))
              }, "✕")
            ]),
            e("div", lf, [
              t.error ? (s(), o("div", rf, [
                $[13] || ($[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  $[12] || ($[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  g.value ? (s(), o("p", df, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : d("", !0)
                ])
              ])) : t.loading ? (s(), o("div", cf, [...$[14] || ($[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                h(" Loading preview... ", -1)
              ])])) : (D = t.preview) != null && D.has_uncommitted_changes ? (s(), o(V, { key: 2 }, [
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
              ], 64)) : t.preview ? (s(), o(V, { key: 3 }, [
                e("div", uf, [
                  $[17] || ($[17] = e("span", { class: "icon" }, "📥", -1)),
                  h(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                r.value ? (s(), o("div", mf, [
                  $[21] || ($[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  f.value > 0 ? (s(), o("details", vf, [
                    e("summary", null, [
                      $[18] || ($[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", ff, a(f.value) + " changes", 1)
                    ]),
                    e("div", gf, [
                      (s(!0), o(V, null, te(t.preview.changes.workflows.added, (S) => (s(), o("div", {
                        key: "a-" + S,
                        class: "change-item add"
                      }, " + " + a(S), 1))), 128)),
                      (s(!0), o(V, null, te(t.preview.changes.workflows.modified, (S) => (s(), o("div", {
                        key: "m-" + S,
                        class: "change-item modify"
                      }, [
                        h(" ~ " + a(S) + " ", 1),
                        z(S) ? (s(), o("span", pf, "CONFLICT")) : d("", !0)
                      ]))), 128)),
                      (s(!0), o(V, null, te(t.preview.changes.workflows.deleted, (S) => (s(), o("div", {
                        key: "d-" + S,
                        class: "change-item delete"
                      }, " - " + a(S), 1))), 128))
                    ])
                  ])) : d("", !0),
                  u.value > 0 ? (s(), o("details", hf, [
                    e("summary", null, [
                      $[19] || ($[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", yf, a(u.value) + " to install", 1)
                    ]),
                    e("div", wf, [
                      (s(!0), o(V, null, te(t.preview.changes.nodes.to_install, (S) => (s(), o("div", {
                        key: S,
                        class: "change-item add"
                      }, " + " + a(S), 1))), 128))
                    ])
                  ])) : d("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", kf, [
                    e("summary", null, [
                      $[20] || ($[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", bf, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", _f, [
                      (s(!0), o(V, null, te(t.preview.changes.models.referenced, (S) => (s(), o("div", {
                        key: S,
                        class: "change-item"
                      }, a(S), 1))), 128))
                    ])
                  ])) : d("", !0)
                ])) : d("", !0),
                m.value ? (s(), T(of, {
                  key: 1,
                  "conflict-count": p.value,
                  "resolved-count": y.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : d("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", $f, [
                  $[26] || ($[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", Cf, [
                    e("label", xf, [
                      Ne(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": $[1] || ($[1] = (S) => w.value = S),
                        value: "all"
                      }, null, 512), [
                        [Kt, w.value]
                      ]),
                      $[22] || ($[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", Sf, [
                      Ne(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": $[2] || ($[2] = (S) => w.value = S),
                        value: "required"
                      }, null, 512), [
                        [Kt, w.value]
                      ]),
                      $[23] || ($[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", If, [
                      Ne(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": $[3] || ($[3] = (S) => w.value = S),
                        value: "skip"
                      }, null, 512), [
                        [Kt, w.value]
                      ]),
                      $[24] || ($[24] = e("span", null, "Skip model downloads", -1)),
                      $[25] || ($[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  $[27] || ($[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : d("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", Ef, [
                  $[28] || ($[28] = e("span", { class: "icon" }, "✓", -1)),
                  h(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : d("", !0)
              ], 64)) : d("", !0)
            ]),
            e("div", Mf, [
              k(ee, {
                variant: "secondary",
                onClick: $[4] || ($[4] = (S) => v.$emit("close"))
              }, {
                default: l(() => [...$[29] || ($[29] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(V, { key: 0 }, [
                k(ee, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: $[5] || ($[5] = (S) => U(!1))
                }, {
                  default: l(() => [...$[30] || ($[30] = [
                    h(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                k(ee, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: $[6] || ($[6] = (S) => U(!0))
                }, {
                  default: l(() => [...$[31] || ($[31] = [
                    h(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (x = t.preview) != null && x.has_uncommitted_changes ? (s(), T(ee, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: $[7] || ($[7] = (S) => U(!0))
              }, {
                default: l(() => [...$[32] || ($[32] = [
                  h(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(V, { key: 2 }, [
                m.value && !_.value ? (s(), T(ee, {
                  key: 0,
                  variant: "primary",
                  onClick: $[8] || ($[8] = (S) => i("openConflictResolution"))
                }, {
                  default: l(() => [
                    h(" Resolve Conflicts (" + a(y.value) + "/" + a(p.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), T(ee, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !C.value,
                  onClick: $[9] || ($[9] = (S) => U(!1))
                }, {
                  default: l(() => [...$[33] || ($[33] = [
                    h(" Pull Changes ", -1)
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
}), zf = /* @__PURE__ */ Z(Tf, [["__scopeId", "data-v-300c7b2f"]]), Rf = { class: "modal-header" }, Lf = { class: "modal-title" }, Pf = { class: "modal-body" }, Df = {
  key: 0,
  class: "loading-state"
}, Nf = {
  key: 1,
  class: "warning-box"
}, Uf = {
  key: 0,
  class: "commits-section"
}, Of = { class: "commit-list" }, Bf = { class: "commit-hash" }, Ff = { class: "commit-message" }, Af = { class: "commit-date" }, Vf = { class: "force-option" }, Wf = { class: "checkbox-option" }, jf = { class: "commit-summary" }, Gf = {
  key: 0,
  class: "commits-section"
}, qf = { class: "commit-list" }, Hf = { class: "commit-hash" }, Kf = { class: "commit-message" }, Jf = { class: "commit-date" }, Yf = {
  key: 1,
  class: "up-to-date"
}, Qf = { class: "modal-actions" }, Xf = /* @__PURE__ */ X({
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
    const n = c, i = b(!1);
    function w(g) {
      n("push", { force: g });
    }
    return (g, f) => {
      var u, r, m;
      return s(), T(Fe, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: f[7] || (f[7] = (p) => g.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: f[6] || (f[6] = ze(() => {
            }, ["stop"]))
          }, [
            e("div", Rf, [
              e("h3", Lf, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: f[0] || (f[0] = (p) => g.$emit("close"))
              }, "✕")
            ]),
            e("div", Pf, [
              t.loading ? (s(), o("div", Df, [...f[8] || (f[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                h(" Loading preview... ", -1)
              ])])) : (u = t.preview) != null && u.has_uncommitted_changes ? (s(), o("div", Nf, [...f[9] || (f[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (r = t.preview) != null && r.remote_has_new_commits ? (s(), o(V, { key: 2 }, [
                f[13] || (f[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (s(), o("div", Uf, [
                  f[10] || (f[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", Of, [
                    (s(!0), o(V, null, te(t.preview.commits, (p) => (s(), o("div", {
                      key: p.hash,
                      class: "commit-item"
                    }, [
                      e("span", Bf, a(p.short_hash || p.hash.slice(0, 7)), 1),
                      e("span", Ff, a(p.message), 1),
                      e("span", Af, a(p.date_relative || p.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                e("div", Vf, [
                  e("label", Wf, [
                    Ne(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": f[1] || (f[1] = (p) => i.value = p)
                    }, null, 512), [
                      [Qt, i.value]
                    ]),
                    f[11] || (f[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  f[12] || (f[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(V, { key: 3 }, [
                e("div", jf, [
                  f[14] || (f[14] = e("span", { class: "icon" }, "📤", -1)),
                  h(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", Gf, [
                  f[15] || (f[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", qf, [
                    (s(!0), o(V, null, te(t.preview.commits, (p) => (s(), o("div", {
                      key: p.hash,
                      class: "commit-item"
                    }, [
                      e("span", Hf, a(p.short_hash || p.hash.slice(0, 7)), 1),
                      e("span", Kf, a(p.message), 1),
                      e("span", Jf, a(p.date_relative || p.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", Yf, [
                  f[16] || (f[16] = e("span", { class: "icon" }, "✓", -1)),
                  h(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : d("", !0)
            ]),
            e("div", Qf, [
              k(ee, {
                variant: "secondary",
                onClick: f[2] || (f[2] = (p) => g.$emit("close"))
              }, {
                default: l(() => [...f[17] || (f[17] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = t.preview) != null && m.remote_has_new_commits ? (s(), o(V, { key: 0 }, [
                k(ee, {
                  variant: "secondary",
                  onClick: f[3] || (f[3] = (p) => g.$emit("pull-first"))
                }, {
                  default: l(() => [...f[18] || (f[18] = [
                    h(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                k(ee, {
                  variant: "destructive",
                  disabled: !i.value,
                  loading: t.pushing,
                  onClick: f[4] || (f[4] = (p) => w(!0))
                }, {
                  default: l(() => [...f[19] || (f[19] = [
                    h(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), T(ee, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: f[5] || (f[5] = (p) => w(!1))
              }, {
                default: l(() => [...f[20] || (f[20] = [
                  h(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : d("", !0)
            ])
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), Zf = /* @__PURE__ */ Z(Xf, [["__scopeId", "data-v-bc6ded53"]]), eg = { class: "resolution-choice-group" }, tg = ["disabled"], sg = ["disabled"], og = /* @__PURE__ */ X({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("div", eg, [
      e("button", {
        class: ie(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (i) => c.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, tg),
      e("button", {
        class: ie(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (i) => c.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, sg)
    ]));
  }
}), ng = /* @__PURE__ */ Z(og, [["__scopeId", "data-v-985715ed"]]), ag = { class: "conflict-header" }, lg = { class: "conflict-info" }, ig = { class: "workflow-name" }, rg = { class: "conflict-description" }, dg = {
  key: 0,
  class: "resolved-badge"
}, cg = { class: "resolved-text" }, ug = { class: "conflict-hashes" }, mg = { class: "hash-item" }, vg = { class: "hash-item" }, fg = { class: "conflict-actions" }, gg = /* @__PURE__ */ X({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: c }) {
    const n = t, i = c, w = b(n.resolution);
    kt(() => n.resolution, (r) => {
      w.value = r;
    }), kt(w, (r) => {
      r && i("resolve", r);
    });
    const g = P(() => w.value !== null), f = P(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = P(() => {
      switch (w.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (r, m) => {
      var p, y;
      return s(), o("div", {
        class: ie(["conflict-item", { resolved: g.value }])
      }, [
        e("div", ag, [
          m[2] || (m[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", lg, [
            e("code", ig, a(t.conflict.name) + ".json", 1),
            e("div", rg, a(f.value), 1)
          ]),
          g.value ? (s(), o("div", dg, [
            m[1] || (m[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", cg, a(u.value), 1)
          ])) : d("", !0)
        ]),
        e("div", ug, [
          e("span", mg, [
            m[3] || (m[3] = h("Your: ", -1)),
            e("code", null, a(((p = t.conflict.base_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", vg, [
            m[4] || (m[4] = h("Theirs: ", -1)),
            e("code", null, a(((y = t.conflict.target_hash) == null ? void 0 : y.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", fg, [
          k(ng, {
            modelValue: w.value,
            "onUpdate:modelValue": m[0] || (m[0] = (_) => w.value = _),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), pg = /* @__PURE__ */ Z(gg, [["__scopeId", "data-v-506d3bbf"]]), hg = { class: "resolution-content" }, yg = {
  key: 0,
  class: "error-box"
}, wg = { class: "resolution-header" }, kg = { class: "header-stats" }, bg = { class: "stat" }, _g = { class: "stat-value" }, $g = { class: "stat resolved" }, Cg = { class: "stat-value" }, xg = {
  key: 0,
  class: "stat pending"
}, Sg = { class: "stat-value" }, Ig = { class: "conflicts-list" }, Eg = {
  key: 1,
  class: "all-resolved-message"
}, Mg = /* @__PURE__ */ X({
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
    const n = t, i = c, w = P(() => n.resolutions.size), g = P(() => n.workflowConflicts.length - w.value), f = P(() => w.value === n.workflowConflicts.length), u = P(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function r(_) {
      const C = n.resolutions.get(_);
      return (C == null ? void 0 : C.resolution) ?? null;
    }
    function m(_, C) {
      i("resolve", _, C);
    }
    function p() {
      i("close");
    }
    function y() {
      i("apply");
    }
    return (_, C) => (s(), T(Ke, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: p
    }, {
      body: l(() => [
        e("div", hg, [
          t.error ? (s(), o("div", yg, [
            C[1] || (C[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              C[0] || (C[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : d("", !0),
          e("div", wg, [
            e("div", kg, [
              e("div", bg, [
                e("span", _g, a(t.workflowConflicts.length), 1),
                C[2] || (C[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", $g, [
                e("span", Cg, a(w.value), 1),
                C[3] || (C[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              g.value > 0 ? (s(), o("div", xg, [
                e("span", Sg, a(g.value), 1),
                C[4] || (C[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : d("", !0)
            ]),
            C[5] || (C[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", Ig, [
            (s(!0), o(V, null, te(t.workflowConflicts, (z) => (s(), T(pg, {
              key: z.name,
              conflict: z,
              resolution: r(z.name),
              onResolve: (U) => m(z.name, U)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          f.value ? (s(), o("div", Eg, [
            C[6] || (C[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(u.value) + '" to continue.', 1)
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        k(ce, {
          variant: "secondary",
          onClick: p
        }, {
          default: l(() => [...C[7] || (C[7] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        C[8] || (C[8] = e("div", { class: "footer-spacer" }, null, -1)),
        k(ce, {
          variant: "primary",
          disabled: !f.value || t.validating,
          loading: t.validating,
          onClick: y
        }, {
          default: l(() => [
            h(a(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Tg = /* @__PURE__ */ Z(Mg, [["__scopeId", "data-v-c58d150d"]]), zg = { class: "node-conflict-item" }, Rg = { class: "node-header" }, Lg = { class: "node-name" }, Pg = { class: "node-id" }, Dg = { class: "version-comparison" }, Ng = { class: "version yours" }, Ug = { class: "version theirs" }, Og = { class: "chosen-version" }, Bg = { class: "chosen" }, Fg = { class: "chosen-reason" }, Ag = { class: "affected-workflows" }, Vg = { class: "wf-source" }, Wg = { class: "wf-version" }, jg = /* @__PURE__ */ X({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", zg, [
      e("div", Rg, [
        e("code", Lg, a(t.conflict.node_name), 1),
        e("span", Pg, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", Dg, [
        e("div", Ng, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", Ug, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", Og, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", Bg, a(t.conflict.chosen_version), 1),
        e("span", Fg, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", Ag, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (s(!0), o(V, null, te(t.conflict.affected_workflows, (i) => (s(), o("li", {
            key: i.name
          }, [
            e("code", null, a(i.name), 1),
            e("span", Vg, "(" + a(i.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", Wg, "needs v" + a(i.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), Gg = /* @__PURE__ */ Z(jg, [["__scopeId", "data-v-8b626725"]]), qg = { class: "validation-content" }, Hg = {
  key: 0,
  class: "compatible-message"
}, Kg = { class: "conflicts-list" }, Jg = {
  key: 2,
  class: "warnings-section"
}, Yg = /* @__PURE__ */ X({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, w = P(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (g, f) => (s(), T(Ke, {
      title: "Compatibility Check",
      size: "lg",
      onClose: f[3] || (f[3] = (u) => i("cancel"))
    }, {
      body: l(() => [
        e("div", qg, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (s(), o("div", Hg, [
            f[5] || (f[5] = e("span", { class: "icon" }, "✓", -1)),
            e("div", null, [
              f[4] || (f[4] = e("strong", null, "All clear!", -1)),
              e("p", null, "Your workflow choices are compatible. Ready to " + a(t.operationType) + ".", 1)
            ])
          ])) : t.validation.node_conflicts.length > 0 ? (s(), o(V, { key: 1 }, [
            f[6] || (f[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", Kg, [
              (s(!0), o(V, null, te(t.validation.node_conflicts, (u) => (s(), T(Gg, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            f[7] || (f[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : d("", !0),
          t.validation.warnings.length > 0 ? (s(), o("div", Jg, [
            f[8] || (f[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (s(!0), o(V, null, te(t.validation.warnings, (u, r) => (s(), o("li", { key: r }, a(u), 1))), 128))
            ])
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        k(ce, {
          variant: "secondary",
          onClick: f[0] || (f[0] = (u) => i("cancel"))
        }, {
          default: l(() => [...f[9] || (f[9] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        f[11] || (f[11] = e("div", { class: "footer-spacer" }, null, -1)),
        k(ce, {
          variant: "secondary",
          onClick: f[1] || (f[1] = (u) => i("goBack"))
        }, {
          default: l(() => [...f[10] || (f[10] = [
            h(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        k(ce, {
          variant: "primary",
          loading: t.executing,
          onClick: f[2] || (f[2] = (u) => i("proceed"))
        }, {
          default: l(() => [
            h(a(w.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), Qg = /* @__PURE__ */ Z(Yg, [["__scopeId", "data-v-fefd26ed"]]), Xg = { key: 0 }, Zg = /* @__PURE__ */ X({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: c }) {
    const n = c, {
      getRemotes: i,
      addRemote: w,
      removeRemote: g,
      updateRemoteUrl: f,
      fetchRemote: u,
      getRemoteSyncStatus: r,
      getPullPreview: m,
      pullFromRemote: p,
      getPushPreview: y,
      pushToRemote: _,
      validateMerge: C
    } = Oe(), z = b([]), U = b(null), v = b({}), $ = b(!1), D = b(null), x = b(""), S = b(!1), j = b(null), W = b(!1), H = b("add"), L = b({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), I = P(() => {
      if (!x.value.trim()) return z.value;
      const A = x.value.toLowerCase();
      return z.value.filter(
        (Q) => Q.name.toLowerCase().includes(A) || Q.fetch_url.toLowerCase().includes(A) || Q.push_url.toLowerCase().includes(A)
      );
    });
    async function E() {
      $.value = !0, D.value = null;
      try {
        const A = await i();
        z.value = A.remotes, U.value = A.current_branch_tracking || null, await Promise.all(
          A.remotes.map(async (Q) => {
            const pe = await r(Q.name);
            pe && (v.value[Q.name] = pe);
          })
        );
      } catch (A) {
        D.value = A instanceof Error ? A.message : "Failed to load remotes";
      } finally {
        $.value = !1;
      }
    }
    function O() {
      H.value = "add", L.value = { name: "", fetchUrl: "", pushUrl: "" }, W.value = !0;
    }
    function B(A) {
      const Q = z.value.find((pe) => pe.name === A);
      Q && (H.value = "edit", L.value = {
        name: Q.name,
        fetchUrl: Q.fetch_url,
        pushUrl: Q.push_url
      }, W.value = !0);
    }
    async function ae(A) {
      try {
        H.value === "add" ? await w(A.name, A.fetchUrl) : await f(A.name, A.fetchUrl, A.pushUrl || void 0), W.value = !1, await E();
      } catch (Q) {
        D.value = Q instanceof Error ? Q.message : "Operation failed";
      }
    }
    function we() {
      W.value = !1, L.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function me(A) {
      j.value = A;
      try {
        await u(A);
        const Q = await r(A);
        Q && (v.value[A] = Q), n("toast", `✓ Fetched from ${A}`, "success");
      } catch (Q) {
        n("toast", Q instanceof Error ? Q.message : "Fetch failed", "error");
      } finally {
        j.value = null;
      }
    }
    async function oe(A) {
      if (confirm(`Remove remote "${A}"?`))
        try {
          await g(A), await E();
        } catch (Q) {
          D.value = Q instanceof Error ? Q.message : "Failed to remove remote";
        }
    }
    function F() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const M = b("idle"), le = P(() => M.value === "pull_preview"), se = P(
      () => M.value === "resolving" || M.value === "validating"
    ), Me = P(
      () => M.value === "validation_review" || M.value === "executing"
    ), ke = b(!1), re = b(null), ne = b(!1), J = b(null), ue = b(!1), _e = b(null), Le = b(null), ve = b(/* @__PURE__ */ new Map()), Y = b(null), fe = b(null), $e = P(() => _e.value && Rs(_e.value) ? _e.value : null);
    async function Ee(A) {
      J.value = A, M.value = "pull_preview", ue.value = !0, _e.value = null, Le.value = null;
      try {
        _e.value = await m(A);
      } catch (Q) {
        Le.value = Q instanceof Error ? Q.message : "Failed to load pull preview";
      } finally {
        ue.value = !1;
      }
    }
    function ye() {
      M.value = "idle", _e.value = null, Le.value = null, J.value = null;
    }
    async function rt(A) {
      if (!J.value) return;
      M.value = "executing", Le.value = null;
      const Q = J.value;
      try {
        const pe = await p(Q, A);
        if (pe.rolled_back) {
          Le.value = `Pull failed and was rolled back: ${pe.error || "Unknown error"}`, M.value = "pull_preview";
          return;
        }
        ct(), M.value = "idle", n("toast", `✓ Pulled from ${Q}`, "success"), await E();
      } catch (pe) {
        Le.value = pe instanceof Error ? pe.message : "Pull failed", M.value = "pull_preview";
      }
    }
    function be() {
      $e.value && (M.value = "resolving", fe.value = null);
    }
    function Ae(A, Q) {
      ve.value.set(A, { name: A, resolution: Q });
    }
    function bt() {
      M.value = "pull_preview";
    }
    async function dt() {
      M.value = "validating", fe.value = null;
      try {
        const A = Array.from(ve.value.values());
        Y.value = await C(J.value, A), M.value = "validation_review";
      } catch (A) {
        fe.value = A instanceof Error ? A.message : "Validation failed", M.value = "resolving";
      }
    }
    async function De() {
      M.value = "executing";
      const A = J.value;
      try {
        const Q = Array.from(ve.value.values()), pe = await p(A, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Q
        });
        if (pe.rolled_back) {
          Le.value = `Pull failed and was rolled back: ${pe.error || "Unknown error"}`, M.value = "pull_preview";
          return;
        }
        ct(), M.value = "idle", n("toast", `✓ Pulled from ${A}`, "success"), await E();
      } catch (Q) {
        Le.value = Q instanceof Error ? Q.message : "Pull failed", M.value = "validation_review";
      }
    }
    function _t() {
      M.value = "resolving";
    }
    function yt() {
      ct(), M.value = "idle";
    }
    function ct() {
      ve.value.clear(), Y.value = null, fe.value = null, Le.value = null, _e.value = null, J.value = null;
    }
    async function $t(A) {
      J.value = A, ke.value = !0, ue.value = !0, re.value = null;
      try {
        re.value = await y(A);
      } catch (Q) {
        D.value = Q instanceof Error ? Q.message : "Failed to load push preview";
      } finally {
        ue.value = !1;
      }
    }
    function ut() {
      ke.value = !1, re.value = null, J.value = null;
    }
    async function K(A) {
      if (!J.value) return;
      ne.value = !0;
      const Q = J.value;
      try {
        await _(Q, A), ut(), n("toast", `✓ Pushed to ${Q}`, "success"), await E();
      } catch (pe) {
        n("toast", pe instanceof Error ? pe.message : "Push failed", "error");
      } finally {
        ne.value = !1;
      }
    }
    function N() {
      const A = J.value;
      ut(), A && Ee(A);
    }
    return Ue(E), (A, Q) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: Q[0] || (Q[0] = (pe) => S.value = !0)
          }, {
            actions: l(() => [
              W.value ? d("", !0) : (s(), T(ee, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: O
              }, {
                default: l(() => [...Q[3] || (Q[3] = [
                  h(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          W.value ? d("", !0) : (s(), T(zt, {
            key: 0,
            modelValue: x.value,
            "onUpdate:modelValue": Q[1] || (Q[1] = (pe) => x.value = pe),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: l(() => [
          $.value ? (s(), T(pt, {
            key: 0,
            message: "Loading remotes..."
          })) : D.value ? (s(), T(ht, {
            key: 1,
            message: D.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            W.value ? (s(), T(Hv, {
              key: 0,
              mode: H.value,
              "remote-name": L.value.name,
              "fetch-url": L.value.fetchUrl,
              "push-url": L.value.pushUrl,
              onSubmit: ae,
              onCancel: we
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            z.value.length && !W.value ? (s(), T(Rt, {
              key: 1,
              variant: "compact"
            }, {
              default: l(() => [
                h(" Total: " + a(z.value.length) + " remote" + a(z.value.length !== 1 ? "s" : "") + " ", 1),
                U.value ? (s(), o("span", Xg, " • Tracking: " + a(U.value.remote) + "/" + a(U.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            I.value.length && !W.value ? (s(), T(Be, {
              key: 2,
              title: "REMOTES",
              count: I.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, te(I.value, (pe) => (s(), T(Pv, {
                  key: pe.name,
                  remote: pe,
                  "sync-status": v.value[pe.name],
                  "fetching-remote": j.value,
                  onFetch: me,
                  onEdit: B,
                  onRemove: oe,
                  onPull: Ee,
                  onPush: $t
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !I.value.length && !W.value ? (s(), T(ot, {
              key: 3,
              icon: "🌐",
              message: x.value ? `No remotes match '${x.value}'` : "No remotes configured."
            }, {
              actions: l(() => [
                k(ee, {
                  variant: "primary",
                  onClick: O
                }, {
                  default: l(() => [...Q[4] || (Q[4] = [
                    h(" Add Your First Remote ", -1)
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
      k(it, {
        show: S.value,
        title: "About Git Remotes",
        onClose: Q[2] || (Q[2] = (pe) => S.value = !1)
      }, {
        content: l(() => [...Q[5] || (Q[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            h(" The "),
            e("strong", null, '"origin"'),
            h(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: l(() => [
          k(ee, {
            variant: "link",
            onClick: F
          }, {
            default: l(() => [...Q[6] || (Q[6] = [
              h(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k(zf, {
        show: le.value,
        "remote-name": J.value || "",
        preview: _e.value,
        loading: ue.value,
        pulling: M.value === "executing",
        error: Le.value,
        "conflict-resolutions": ve.value,
        onClose: ye,
        onPull: rt,
        onOpenConflictResolution: be
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      k(Zf, {
        show: ke.value,
        "remote-name": J.value || "",
        preview: re.value,
        loading: ue.value,
        pushing: ne.value,
        onClose: ut,
        onPush: K,
        onPullFirst: N
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      se.value && $e.value ? (s(), T(Tg, {
        key: 0,
        "workflow-conflicts": $e.value.workflow_conflicts,
        resolutions: ve.value,
        "operation-type": "pull",
        validating: M.value === "validating",
        error: fe.value,
        onClose: bt,
        onResolve: Ae,
        onApply: dt
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : d("", !0),
      Me.value && Y.value ? (s(), T(Qg, {
        key: 1,
        validation: Y.value,
        "operation-type": "pull",
        executing: M.value === "executing",
        onProceed: De,
        onGoBack: _t,
        onCancel: yt
      }, null, 8, ["validation", "executing"])) : d("", !0)
    ], 64));
  }
}), ep = /* @__PURE__ */ Z(Zg, [["__scopeId", "data-v-9ae3b76d"]]), tp = { class: "setting-info" }, sp = { class: "setting-label" }, op = {
  key: 0,
  class: "required-marker"
}, np = {
  key: 0,
  class: "setting-description"
}, ap = { class: "setting-control" }, lp = /* @__PURE__ */ X({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: ie(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", tp, [
        e("div", sp, [
          h(a(t.label) + " ", 1),
          t.required ? (s(), o("span", op, "*")) : d("", !0)
        ]),
        t.description ? (s(), o("div", np, a(t.description), 1)) : d("", !0)
      ]),
      e("div", ap, [
        Se(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Nt = /* @__PURE__ */ Z(lp, [["__scopeId", "data-v-cb5d236c"]]), ip = { class: "toggle" }, rp = ["checked", "disabled"], dp = /* @__PURE__ */ X({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", ip, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, rp),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), as = /* @__PURE__ */ Z(dp, [["__scopeId", "data-v-71c0f550"]]), cp = { class: "settings-section" }, up = { class: "path-setting" }, mp = { class: "path-value" }, vp = { class: "path-setting" }, fp = { class: "path-value" }, gp = { class: "settings-section" }, pp = { class: "settings-section" }, hp = { class: "settings-section" }, yp = /* @__PURE__ */ X({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: c, updateConfig: n } = Oe(), i = b(!1), w = b(null), g = b(null), f = b(null), u = b(null), r = b(""), m = b(""), p = b(!0), y = b(!0), _ = b(!1), C = P(() => u.value ? r.value !== (u.value.civitai_api_key || "") : !1);
    async function z() {
      i.value = !0, w.value = null;
      try {
        f.value = await c(), u.value = { ...f.value }, r.value = f.value.civitai_api_key || "", m.value = f.value.huggingface_token || "", p.value = f.value.auto_sync_models, y.value = f.value.confirm_destructive;
        const D = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        _.value = D === "true";
      } catch (D) {
        w.value = D instanceof Error ? D.message : "Failed to load settings";
      } finally {
        i.value = !1;
      }
    }
    async function U() {
      var D;
      g.value = null;
      try {
        const x = {};
        r.value !== (((D = u.value) == null ? void 0 : D.civitai_api_key) || "") && (x.civitai_api_key = r.value || null), await n(x), await z(), g.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          g.value = null;
        }, 3e3);
      } catch (x) {
        g.value = {
          type: "error",
          message: x instanceof Error ? x.message : "Failed to save settings"
        };
      }
    }
    function v() {
      u.value && (r.value = u.value.civitai_api_key || "", m.value = u.value.huggingface_token || "", p.value = u.value.auto_sync_models, y.value = u.value.confirm_destructive, g.value = null);
    }
    function $(D) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(D)), console.log("[ComfyGit] Auto-refresh setting saved:", D);
    }
    return Ue(z), (D, x) => (s(), T(je, null, {
      header: l(() => [
        k(Ge, { title: "WORKSPACE SETTINGS" }, {
          actions: l(() => [
            k(ee, {
              variant: "primary",
              size: "sm",
              disabled: !C.value,
              onClick: U
            }, {
              default: l(() => [...x[5] || (x[5] = [
                h(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            C.value ? (s(), T(ee, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: v
            }, {
              default: l(() => [...x[6] || (x[6] = [
                h(" Reset ", -1)
              ])]),
              _: 1
            })) : d("", !0)
          ]),
          _: 1
        })
      ]),
      content: l(() => [
        i.value ? (s(), T(pt, {
          key: 0,
          message: "Loading workspace settings..."
        })) : w.value ? (s(), T(ht, {
          key: 1,
          message: w.value,
          retry: !0,
          onRetry: z
        }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
          k(Be, { title: "WORKSPACE PATHS" }, {
            default: l(() => {
              var S, j;
              return [
                e("div", cp, [
                  e("div", up, [
                    x[7] || (x[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    x[8] || (x[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", mp, a(((S = f.value) == null ? void 0 : S.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", vp, [
                    x[9] || (x[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    x[10] || (x[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", fp, a(((j = f.value) == null ? void 0 : j.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          k(Be, { title: "API CREDENTIALS" }, {
            default: l(() => [
              e("div", gp, [
                k(Nt, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: l(() => [
                    k(Xt, {
                      modelValue: r.value,
                      "onUpdate:modelValue": x[0] || (x[0] = (S) => r.value = S),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                k(Nt, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: l(() => [
                    k(Xt, {
                      modelValue: m.value,
                      "onUpdate:modelValue": x[1] || (x[1] = (S) => m.value = S),
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
          k(Be, { title: "UI SETTINGS" }, {
            default: l(() => [
              e("div", pp, [
                k(Nt, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: l(() => [
                    k(as, {
                      modelValue: _.value,
                      "onUpdate:modelValue": [
                        x[2] || (x[2] = (S) => _.value = S),
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
          k(Be, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: l(() => [
              e("div", hp, [
                k(Nt, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: l(() => [
                    k(as, {
                      modelValue: p.value,
                      "onUpdate:modelValue": x[3] || (x[3] = (S) => p.value = S),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                k(Nt, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: l(() => [
                    k(as, {
                      modelValue: y.value,
                      "onUpdate:modelValue": x[4] || (x[4] = (S) => y.value = S),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          g.value ? (s(), T(Rt, {
            key: 0,
            variant: (g.value.type === "success", "compact")
          }, {
            default: l(() => [
              e("span", {
                style: gt({ color: g.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, a(g.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : d("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), wp = /* @__PURE__ */ Z(yp, [["__scopeId", "data-v-7861bd35"]]), kp = /* @__PURE__ */ X({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c, getWorkspaceLogPath: n, openFile: i } = Oe(), w = b([]), g = b(!1), f = b(null), u = b(!1), r = b(null), m = b(null), p = b(!1), y = P(() => w.value.length === 0 ? [] : w.value.map((U) => ({
      text: `${U.timestamp} - ${U.name} - ${U.level} - ${U.func}:${U.line} - ${U.message}`,
      level: U.level
    })));
    async function _() {
      g.value = !0, f.value = null;
      try {
        w.value = await c(void 0, 500);
      } catch (U) {
        f.value = U instanceof Error ? U.message : "Failed to load workspace logs";
      } finally {
        g.value = !1, setTimeout(() => {
          var U;
          (U = r.value) != null && U.parentElement && (r.value.parentElement.scrollTop = r.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function C() {
      try {
        const U = await n();
        U.exists && (m.value = U.path);
      } catch {
      }
    }
    async function z() {
      if (m.value) {
        p.value = !0;
        try {
          await i(m.value);
        } catch (U) {
          console.error("Failed to open log file:", U);
        } finally {
          p.value = !1;
        }
      }
    }
    return Ue(() => {
      _(), C();
    }), (U, v) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: v[0] || (v[0] = ($) => u.value = !0)
          }, {
            actions: l(() => [
              k(ee, {
                variant: "secondary",
                size: "sm",
                onClick: z,
                disabled: !m.value || p.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  h(a(p.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(ee, {
                variant: "secondary",
                size: "sm",
                onClick: _,
                disabled: g.value
              }, {
                default: l(() => [
                  h(a(g.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          g.value ? (s(), T(pt, {
            key: 0,
            message: "Loading workspace logs..."
          })) : f.value ? (s(), T(ht, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            w.value.length === 0 ? (s(), T(ot, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: r,
              class: "log-output"
            }, [
              (s(!0), o(V, null, te(y.value, ($, D) => (s(), o("div", {
                key: D,
                class: ie(`log-line log-level-${$.level.toLowerCase()}`)
              }, a($.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      k(it, {
        show: u.value,
        title: "About Workspace Logs",
        onClose: v[2] || (v[2] = ($) => u.value = !1)
      }, {
        content: l(() => [...v[3] || (v[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
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
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: l(() => [
          k(ee, {
            variant: "primary",
            onClick: v[1] || (v[1] = ($) => u.value = !1)
          }, {
            default: l(() => [...v[4] || (v[4] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), bp = /* @__PURE__ */ Z(kp, [["__scopeId", "data-v-7f05352a"]]), _p = /* @__PURE__ */ X({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n, getEnvironmentLogPath: i, openFile: w } = Oe(), g = b([]), f = b(!1), u = b(null), r = b(!1), m = b("production"), p = b(null), y = b(null), _ = b(!1), C = P(() => g.value.length === 0 ? [] : g.value.map(($) => ({
      text: `${$.timestamp} - ${$.name} - ${$.level} - ${$.func}:${$.line} - ${$.message}`,
      level: $.level
    })));
    async function z() {
      f.value = !0, u.value = null;
      try {
        g.value = await c(void 0, 500);
        try {
          const $ = await n();
          m.value = $.environment || "production";
        } catch {
        }
      } catch ($) {
        u.value = $ instanceof Error ? $.message : "Failed to load environment logs";
      } finally {
        f.value = !1, setTimeout(() => {
          var $;
          ($ = p.value) != null && $.parentElement && (p.value.parentElement.scrollTop = p.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function U() {
      try {
        const $ = await i();
        $.exists && (y.value = $.path);
      } catch {
      }
    }
    async function v() {
      if (y.value) {
        _.value = !0;
        try {
          await w(y.value);
        } catch ($) {
          console.error("Failed to open log file:", $);
        } finally {
          _.value = !1;
        }
      }
    }
    return Ue(() => {
      z(), U();
    }), ($, D) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: D[0] || (D[0] = (x) => r.value = !0)
          }, {
            actions: l(() => [
              k(ee, {
                variant: "secondary",
                size: "sm",
                onClick: v,
                disabled: !y.value || _.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  h(a(_.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(ee, {
                variant: "secondary",
                size: "sm",
                onClick: z,
                disabled: f.value
              }, {
                default: l(() => [
                  h(a(f.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          f.value ? (s(), T(pt, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (s(), T(ht, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            g.value.length === 0 ? (s(), T(ot, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: p,
              class: "log-output"
            }, [
              (s(!0), o(V, null, te(C.value, (x, S) => (s(), o("div", {
                key: S,
                class: ie(`log-line log-level-${x.level.toLowerCase()}`)
              }, a(x.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      k(it, {
        show: r.value,
        title: "About Environment Logs",
        onClose: D[2] || (D[2] = (x) => r.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            D[3] || (D[3] = h(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(m.value), 1),
            D[4] || (D[4] = h(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          D[5] || (D[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          ], -1)),
          D[6] || (D[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: l(() => [
          k(ee, {
            variant: "primary",
            onClick: D[1] || (D[1] = (x) => r.value = !1)
          }, {
            default: l(() => [...D[7] || (D[7] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), $p = /* @__PURE__ */ Z(_p, [["__scopeId", "data-v-6f8db7ce"]]), Cp = { class: "env-title" }, xp = {
  key: 0,
  class: "current-badge"
}, Sp = {
  key: 0,
  class: "branch-info"
}, Ip = /* @__PURE__ */ X({
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
    return (c, n) => (s(), T(He, {
      status: t.isCurrent ? "synced" : void 0
    }, Wt({
      icon: l(() => [
        h(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: l(() => [
        e("div", Cp, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", xp, "CURRENT")) : d("", !0)
        ])
      ]),
      subtitle: l(() => [
        t.currentBranch ? (s(), o("span", Sp, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          h(" " + a(t.currentBranch), 1)
        ])) : d("", !0)
      ]),
      actions: l(() => [
        Se(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: l(() => [
          k(Pe, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          k(Pe, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          k(Pe, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), T(Pe, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : d("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Ep = /* @__PURE__ */ Z(Ip, [["__scopeId", "data-v-9231917a"]]), Mp = { class: "env-details" }, Tp = { class: "status-row" }, zp = {
  key: 0,
  class: "detail-row"
}, Rp = { class: "value mono" }, Lp = {
  key: 1,
  class: "detail-row"
}, Pp = { class: "value mono small" }, Dp = { class: "detail-row" }, Np = { class: "value" }, Up = { class: "detail-row" }, Op = { class: "value" }, Bp = { class: "detail-row" }, Fp = { class: "value" }, Ap = {
  key: 2,
  class: "section-divider"
}, Vp = {
  key: 3,
  class: "detail-row"
}, Wp = { class: "value" }, jp = {
  key: 4,
  class: "detail-row"
}, Gp = { class: "value" }, qp = { class: "footer-actions" }, Hp = /* @__PURE__ */ X({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: c }) {
    const n = c;
    function i(w) {
      if (!w) return "Unknown";
      try {
        const g = new Date(w), u = (/* @__PURE__ */ new Date()).getTime() - g.getTime(), r = Math.floor(u / 6e4), m = Math.floor(u / 36e5), p = Math.floor(u / 864e5);
        return r < 1 ? "just now" : r < 60 ? `${r} ${r === 1 ? "minute" : "minutes"} ago` : m < 24 ? `${m} ${m === 1 ? "hour" : "hours"} ago` : p < 30 ? `${p} ${p === 1 ? "day" : "days"} ago` : g.toLocaleDateString();
      } catch {
        return w;
      }
    }
    return (w, g) => (s(), T(Ke, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: g[2] || (g[2] = (f) => n("close"))
    }, {
      body: l(() => [
        e("div", Mp, [
          e("div", Tp, [
            g[3] || (g[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: ie(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", zp, [
            g[4] || (g[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", Rp, a(t.environment.current_branch), 1)
          ])) : d("", !0),
          t.environment.path ? (s(), o("div", Lp, [
            g[5] || (g[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", Pp, a(t.environment.path), 1)
          ])) : d("", !0),
          g[11] || (g[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Dp, [
            g[6] || (g[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", Np, a(t.environment.workflow_count), 1)
          ]),
          e("div", Up, [
            g[7] || (g[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Op, a(t.environment.node_count), 1)
          ]),
          e("div", Bp, [
            g[8] || (g[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Fp, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", Ap)) : d("", !0),
          t.environment.created_at ? (s(), o("div", Vp, [
            g[9] || (g[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", Wp, a(i(t.environment.created_at)), 1)
          ])) : d("", !0),
          t.environment.last_used ? (s(), o("div", jp, [
            g[10] || (g[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", Gp, a(i(t.environment.last_used)), 1)
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        e("div", qp, [
          t.canDelete ? (s(), T(ce, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: g[0] || (g[0] = (f) => n("delete", t.environment.name))
          }, {
            default: l(() => [...g[12] || (g[12] = [
              h(" Delete ", -1)
            ])]),
            _: 1
          })) : d("", !0),
          g[14] || (g[14] = e("div", { class: "footer-spacer" }, null, -1)),
          k(ce, {
            variant: "secondary",
            size: "sm",
            onClick: g[1] || (g[1] = (f) => n("close"))
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
}), Kp = /* @__PURE__ */ Z(Hp, [["__scopeId", "data-v-59855453"]]), Ls = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Ps = "3.12", fs = [
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
], Ds = "auto", Jp = { class: "progress-bar" }, Yp = /* @__PURE__ */ X({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, n = P(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (i, w) => (s(), o("div", Jp, [
      e("div", {
        class: ie(["progress-fill", t.variant]),
        style: gt({ width: n.value })
      }, null, 6)
    ]));
  }
}), Ns = /* @__PURE__ */ Z(Yp, [["__scopeId", "data-v-1beb0512"]]), Qp = { class: "task-progress" }, Xp = { class: "progress-info" }, Zp = { class: "progress-percentage" }, eh = { class: "progress-message" }, th = {
  key: 0,
  class: "progress-steps"
}, sh = { class: "step-icon" }, oh = { class: "step-label" }, nh = /* @__PURE__ */ X({
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
    function n(w) {
      const g = c.steps.find((f) => f.id === w);
      return g ? c.progress >= g.progressThreshold ? "completed" : c.currentPhase === w ? "active" : "pending" : "pending";
    }
    function i(w) {
      const g = n(w);
      return g === "completed" ? "✓" : g === "active" ? "⟳" : "○";
    }
    return (w, g) => (s(), o("div", Qp, [
      k(Ns, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", Xp, [
        e("span", Zp, a(t.progress) + "%", 1),
        e("span", eh, a(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", th, [
        (s(!0), o(V, null, te(t.steps, (f) => (s(), o("div", {
          key: f.id,
          class: ie(["step", n(f.id)])
        }, [
          e("span", sh, a(i(f.id)), 1),
          e("span", oh, a(f.label), 1)
        ], 2))), 128))
      ])) : d("", !0)
    ]));
  }
}), es = /* @__PURE__ */ Z(nh, [["__scopeId", "data-v-9d1de66c"]]), ah = {
  key: 0,
  class: "create-env-form"
}, lh = { class: "form-field" }, ih = { class: "form-field" }, rh = ["value"], dh = { class: "form-field" }, ch = ["disabled"], uh = ["value"], mh = { class: "form-field" }, vh = ["value"], fh = { class: "form-field form-field--checkbox" }, gh = { class: "form-checkbox" }, ph = {
  key: 1,
  class: "create-env-progress"
}, hh = { class: "creating-intro" }, yh = {
  key: 0,
  class: "progress-warning"
}, wh = {
  key: 1,
  class: "create-error"
}, kh = { class: "error-message" }, bh = {
  key: 1,
  class: "footer-status"
}, _h = 10, $h = /* @__PURE__ */ X({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: c }) {
    const n = c, { getComfyUIReleases: i, createEnvironment: w, getCreateProgress: g } = Oe(), f = b(""), u = b(Ps), r = b("latest"), m = b(Ds), p = b(!1), y = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), _ = b(!1), C = b(!1), z = b({
      progress: 0,
      message: ""
    });
    let U = null, v = 0;
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
    ], D = b(null);
    function x() {
      C.value || n("close");
    }
    async function S() {
      const I = f.value.trim();
      if (I) {
        C.value = !0, z.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const E = {
            name: I,
            python_version: u.value,
            comfyui_version: r.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, O = await w(E);
          O.status === "started" ? j() : O.status === "error" && (z.value = {
            progress: 0,
            message: O.message || "Failed to start creation",
            error: O.message
          });
        } catch (E) {
          z.value = {
            progress: 0,
            message: E instanceof Error ? E.message : "Unknown error",
            error: E instanceof Error ? E.message : "Unknown error"
          };
        }
      }
    }
    function j() {
      U || (v = 0, U = window.setInterval(async () => {
        try {
          const I = await g();
          v = 0, z.value = {
            progress: I.progress ?? 0,
            message: I.message,
            phase: I.phase,
            error: I.error
          }, I.state === "complete" ? (W(), n("created", I.environment_name || f.value.trim(), p.value)) : I.state === "error" ? (W(), z.value.error = I.error || I.message) : I.state === "idle" && C.value && (W(), z.value.error = "Creation was interrupted. Please try again.");
        } catch {
          v++, v >= _h && (W(), z.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function W() {
      U && (clearInterval(U), U = null);
    }
    function H() {
      C.value = !1, z.value = { progress: 0, message: "" }, n("close");
    }
    async function L() {
      _.value = !0;
      try {
        y.value = await i();
      } catch (I) {
        console.error("Failed to load ComfyUI releases:", I);
      } finally {
        _.value = !1;
      }
    }
    return Ue(async () => {
      var I;
      await Ys(), (I = D.value) == null || I.focus(), L();
    }), xs(() => {
      W();
    }), (I, E) => (s(), T(Ke, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !C.value,
      onClose: x
    }, {
      body: l(() => [
        C.value ? (s(), o("div", ph, [
          e("p", hh, [
            E[11] || (E[11] = h(" Creating environment ", -1)),
            e("strong", null, a(f.value), 1),
            E[12] || (E[12] = h("... ", -1))
          ]),
          k(es, {
            progress: z.value.progress,
            message: z.value.message,
            "current-phase": z.value.phase,
            variant: z.value.error ? "error" : "default",
            "show-steps": !0,
            steps: $
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          z.value.error ? d("", !0) : (s(), o("p", yh, " This may take several minutes. Please wait... ")),
          z.value.error ? (s(), o("div", wh, [
            e("p", kh, a(z.value.error), 1)
          ])) : d("", !0)
        ])) : (s(), o("div", ah, [
          e("div", lh, [
            E[6] || (E[6] = e("label", { class: "form-label" }, "Name", -1)),
            Ne(e("input", {
              ref_key: "nameInput",
              ref: D,
              "onUpdate:modelValue": E[0] || (E[0] = (O) => f.value = O),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: ft(S, ["enter"])
            }, null, 544), [
              [Et, f.value]
            ])
          ]),
          e("div", ih, [
            E[7] || (E[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Ne(e("select", {
              "onUpdate:modelValue": E[1] || (E[1] = (O) => u.value = O),
              class: "form-select"
            }, [
              (s(!0), o(V, null, te(xe(Ls), (O) => (s(), o("option", {
                key: O,
                value: O
              }, a(O), 9, rh))), 128))
            ], 512), [
              [Mt, u.value]
            ])
          ]),
          e("div", dh, [
            E[8] || (E[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ne(e("select", {
              "onUpdate:modelValue": E[2] || (E[2] = (O) => r.value = O),
              class: "form-select",
              disabled: _.value
            }, [
              (s(!0), o(V, null, te(y.value, (O) => (s(), o("option", {
                key: O.tag_name,
                value: O.tag_name
              }, a(O.name), 9, uh))), 128))
            ], 8, ch), [
              [Mt, r.value]
            ])
          ]),
          e("div", mh, [
            E[9] || (E[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ne(e("select", {
              "onUpdate:modelValue": E[3] || (E[3] = (O) => m.value = O),
              class: "form-select"
            }, [
              (s(!0), o(V, null, te(xe(fs), (O) => (s(), o("option", {
                key: O,
                value: O
              }, a(O) + a(O === "auto" ? " (detect GPU)" : ""), 9, vh))), 128))
            ], 512), [
              [Mt, m.value]
            ])
          ]),
          e("div", fh, [
            e("label", gh, [
              Ne(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": E[4] || (E[4] = (O) => p.value = O)
              }, null, 512), [
                [Qt, p.value]
              ]),
              E[10] || (E[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: l(() => [
        C.value ? (s(), o(V, { key: 1 }, [
          z.value.error ? (s(), T(ce, {
            key: 0,
            variant: "secondary",
            onClick: H
          }, {
            default: l(() => [...E[15] || (E[15] = [
              h(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", bh, " Creating environment... "))
        ], 64)) : (s(), o(V, { key: 0 }, [
          k(ce, {
            variant: "primary",
            disabled: !f.value.trim(),
            onClick: S
          }, {
            default: l(() => [...E[13] || (E[13] = [
              h(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(ce, {
            variant: "secondary",
            onClick: E[5] || (E[5] = (O) => n("close"))
          }, {
            default: l(() => [...E[14] || (E[14] = [
              h(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), Ch = /* @__PURE__ */ Z($h, [["__scopeId", "data-v-f37eaa42"]]), xh = /* @__PURE__ */ X({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getEnvironments: w } = Oe(), g = b([]), f = b(!1), u = b(null), r = b(""), m = b(!1), p = b(!1), y = b(null), _ = P(
      () => g.value.find((x) => x.is_current)
    ), C = P(() => {
      if (!r.value.trim()) return g.value;
      const x = r.value.toLowerCase();
      return g.value.filter(
        (S) => {
          var j;
          return S.name.toLowerCase().includes(x) || ((j = S.current_branch) == null ? void 0 : j.toLowerCase().includes(x));
        }
      );
    });
    function z(x, S) {
      p.value = !1, i("created", x, S);
    }
    function U() {
      p.value = !0;
    }
    function v(x) {
      y.value = x;
    }
    function $(x) {
      y.value = null, i("delete", x);
    }
    async function D() {
      f.value = !0, u.value = null;
      try {
        g.value = await w();
      } catch (x) {
        u.value = x instanceof Error ? x.message : "Failed to load environments";
      } finally {
        f.value = !1;
      }
    }
    return Ue(D), c({
      loadEnvironments: D,
      openCreateModal: U
    }), (x, S) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (j) => m.value = !0)
          }, {
            actions: l(() => [
              k(ee, {
                variant: "primary",
                size: "sm",
                onClick: U
              }, {
                default: l(() => [...S[6] || (S[6] = [
                  h(" Create ", -1)
                ])]),
                _: 1
              }),
              k(ee, {
                variant: "secondary",
                size: "sm",
                onClick: D
              }, {
                default: l(() => [...S[7] || (S[7] = [
                  h(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          k(zt, {
            modelValue: r.value,
            "onUpdate:modelValue": S[1] || (S[1] = (j) => r.value = j),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          f.value ? (s(), T(pt, {
            key: 0,
            message: "Loading environments..."
          })) : u.value ? (s(), T(ht, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            g.value.length ? (s(), T(Rt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                h(" Total: " + a(g.value.length) + " " + a(g.value.length === 1 ? "environment" : "environments") + " ", 1),
                _.value ? (s(), o(V, { key: 0 }, [
                  S[8] || (S[8] = h(" • Current: ", -1)),
                  e("strong", null, a(_.value.name), 1)
                ], 64)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            C.value.length ? (s(), T(Be, {
              key: 1,
              title: "ENVIRONMENTS",
              count: C.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, te(C.value, (j) => (s(), T(Ep, {
                  key: j.name,
                  "environment-name": j.name,
                  "is-current": j.is_current,
                  "current-branch": j.current_branch,
                  "show-last-used": !1
                }, {
                  actions: l(() => [
                    j.is_current ? d("", !0) : (s(), T(ee, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (W) => x.$emit("switch", j.name)
                    }, {
                      default: l(() => [...S[9] || (S[9] = [
                        h(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    k(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (W) => v(j)
                    }, {
                      default: l(() => [...S[10] || (S[10] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            C.value.length ? d("", !0) : (s(), T(ot, {
              key: 2,
              icon: "🌍",
              message: r.value ? `No environments match '${r.value}'` : "No environments found. Create one to get started!"
            }, Wt({ _: 2 }, [
              r.value ? void 0 : {
                name: "actions",
                fn: l(() => [
                  k(ee, {
                    variant: "primary",
                    onClick: U
                  }, {
                    default: l(() => [...S[11] || (S[11] = [
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
      k(it, {
        show: m.value,
        title: "About Environments",
        onClose: S[3] || (S[3] = (j) => m.value = !1)
      }, {
        content: l(() => [...S[12] || (S[12] = [
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
          k(ee, {
            variant: "secondary",
            onClick: S[2] || (S[2] = (j) => m.value = !1)
          }, {
            default: l(() => [...S[13] || (S[13] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      y.value ? (s(), T(Kp, {
        key: 0,
        environment: y.value,
        "can-delete": g.value.length > 1,
        onClose: S[4] || (S[4] = (j) => y.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : d("", !0),
      p.value ? (s(), T(Ch, {
        key: 1,
        onClose: S[5] || (S[5] = (j) => p.value = !1),
        onCreated: z
      })) : d("", !0)
    ], 64));
  }
}), Sh = /* @__PURE__ */ Z(xh, [["__scopeId", "data-v-d6dc0255"]]), Ih = { class: "file-path" }, Eh = { class: "file-path-text" }, Mh = ["title"], Th = /* @__PURE__ */ X({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = b(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(c.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (w) {
        console.error("Failed to copy:", w);
      }
    }
    return (w, g) => (s(), o("div", Ih, [
      g[0] || (g[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Eh, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: i
      }, a(n.value ? "✓" : "📋"), 9, Mh)) : d("", !0)
    ]));
  }
}), zh = /* @__PURE__ */ Z(Th, [["__scopeId", "data-v-f0982173"]]), Rh = { class: "export-blocked" }, Lh = { class: "issues-list" }, Ph = { class: "issue-message" }, Dh = {
  key: 0,
  class: "issue-details"
}, Nh = ["onClick"], Uh = { class: "issue-fix" }, Oh = /* @__PURE__ */ X({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(t) {
    const c = t, n = ts({});
    function i(w) {
      const g = c.issues[w];
      return n[w] || g.details.length <= 3 ? g.details : g.details.slice(0, 3);
    }
    return (w, g) => (s(), T(Ke, {
      title: "Cannot Export",
      size: "md",
      onClose: g[1] || (g[1] = (f) => w.$emit("close"))
    }, {
      body: l(() => [
        e("div", Rh, [
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
          e("div", Lh, [
            (s(!0), o(V, null, te(t.issues, (f, u) => (s(), o("div", {
              key: u,
              class: "issue-item"
            }, [
              e("div", Ph, a(f.message), 1),
              f.details.length ? (s(), o("div", Dh, [
                (s(!0), o(V, null, te(i(u), (r, m) => (s(), o("div", {
                  key: m,
                  class: "issue-detail"
                }, a(r), 1))), 128)),
                f.details.length > 3 && !n[u] ? (s(), o("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (r) => n[u] = !0
                }, " +" + a(f.details.length - 3) + " more ", 9, Nh)) : d("", !0)
              ])) : d("", !0),
              e("div", Uh, [
                f.type === "uncommitted_workflows" ? (s(), o(V, { key: 0 }, [
                  h(" Commit your workflow changes before exporting. ")
                ], 64)) : f.type === "uncommitted_git_changes" ? (s(), o(V, { key: 1 }, [
                  h(" Commit your changes before exporting. ")
                ], 64)) : f.type === "unresolved_issues" ? (s(), o(V, { key: 2 }, [
                  h(" Resolve all workflow issues before exporting. ")
                ], 64)) : d("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: l(() => [
        k(ce, {
          variant: "primary",
          onClick: g[0] || (g[0] = (f) => w.$emit("close"))
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
}), Bh = /* @__PURE__ */ Z(Oh, [["__scopeId", "data-v-b52f5e32"]]), Fh = { class: "export-warnings" }, Ah = {
  key: 0,
  class: "success-header"
}, Vh = { class: "warning-header" }, Wh = { class: "warning-summary" }, jh = { class: "warning-title" }, Gh = { class: "models-section" }, qh = { class: "models-list" }, Hh = { class: "model-info" }, Kh = { class: "model-filename" }, Jh = { class: "model-workflows" }, Yh = ["onClick"], Qh = /* @__PURE__ */ X({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(t, { emit: c }) {
    const n = t, i = c, w = b(!1), g = b(null), f = P(() => w.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function u() {
      g.value = null, i("revalidate");
    }
    return (r, m) => (s(), o(V, null, [
      k(Ke, {
        title: "Export Warnings",
        size: "md",
        onClose: m[3] || (m[3] = (p) => r.$emit("cancel"))
      }, {
        body: l(() => [
          e("div", Fh, [
            t.models.length === 0 ? (s(), o("div", Ah, [...m[4] || (m[4] = [
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
            ])])) : (s(), o(V, { key: 1 }, [
              e("div", Vh, [
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
                e("div", Wh, [
                  e("h3", jh, a(t.models.length) + " model" + a(t.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  m[5] || (m[5] = e("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              e("div", Gh, [
                e("div", qh, [
                  (s(!0), o(V, null, te(f.value, (p) => (s(), o("div", {
                    key: p.hash,
                    class: "model-item"
                  }, [
                    e("div", Hh, [
                      e("div", Kh, a(p.filename), 1),
                      e("div", Jh, " Used by: " + a(p.workflows.join(", ")), 1)
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      onClick: (y) => g.value = p.hash
                    }, " Add Source ", 8, Yh)
                  ]))), 128))
                ]),
                t.models.length > 3 && !w.value ? (s(), o("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: m[0] || (m[0] = (p) => w.value = !0)
                }, " Show " + a(t.models.length - 3) + " more model" + a(t.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : d("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: l(() => [
          k(ce, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (p) => r.$emit("cancel"))
          }, {
            default: l(() => [...m[7] || (m[7] = [
              h(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          k(ce, {
            variant: "primary",
            onClick: m[2] || (m[2] = (p) => r.$emit("confirm"))
          }, {
            default: l(() => [
              h(a(t.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      g.value ? (s(), T(vs, {
        key: 0,
        identifier: g.value,
        onClose: u
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), Xh = /* @__PURE__ */ Z(Qh, [["__scopeId", "data-v-b698d882"]]), Zh = { class: "export-card" }, e1 = { class: "export-path-row" }, t1 = { class: "export-actions" }, s1 = {
  key: 1,
  class: "export-warning"
}, o1 = /* @__PURE__ */ X({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: c, exportEnvWithForce: n } = Oe(), i = b(""), w = b(!1), g = b(!1), f = b(!1), u = b(null), r = b(!1), m = b(null), p = b(!1), y = b(!1), _ = P(() => w.value ? "Validating..." : g.value ? "Exporting..." : "Export Environment");
    async function C() {
      w.value = !0, u.value = null;
      try {
        const x = await c();
        m.value = x, x.can_export ? x.warnings.models_without_sources.length > 0 ? y.value = !0 : await v() : p.value = !0;
      } catch (x) {
        u.value = {
          status: "error",
          message: x instanceof Error ? x.message : "Validation failed"
        };
      } finally {
        w.value = !1;
      }
    }
    async function z() {
      y.value = !1, await v();
    }
    async function U() {
      try {
        const x = await c();
        m.value = x;
      } catch (x) {
        console.error("Re-validation failed:", x);
      }
    }
    async function v() {
      g.value = !0;
      try {
        const x = await n(i.value || void 0);
        u.value = x;
      } catch (x) {
        u.value = {
          status: "error",
          message: x instanceof Error ? x.message : "Export failed"
        };
      } finally {
        g.value = !1;
      }
    }
    async function $() {
      var x;
      if ((x = u.value) != null && x.path)
        try {
          await navigator.clipboard.writeText(u.value.path);
        } catch (S) {
          console.error("Failed to copy path:", S);
        }
    }
    async function D() {
      var x;
      if ((x = u.value) != null && x.path) {
        f.value = !0;
        try {
          const S = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(u.value.path)}`);
          if (!S.ok)
            throw new Error(`Download failed: ${S.statusText}`);
          const j = await S.blob(), W = URL.createObjectURL(j), H = u.value.path.split("/").pop() || "environment-export.tar.gz", L = document.createElement("a");
          L.href = W, L.download = H, document.body.appendChild(L), L.click(), document.body.removeChild(L), URL.revokeObjectURL(W);
        } catch (S) {
          console.error("Failed to download:", S), alert(`Download failed: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          f.value = !1;
        }
      }
    }
    return (x, S) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (j) => r.value = !0)
          })
        ]),
        content: l(() => [
          k(Be, { title: "EXPORT OPTIONS" }, {
            default: l(() => [
              e("div", Zh, [
                S[7] || (S[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", e1, [
                  k(Xt, {
                    modelValue: i.value,
                    "onUpdate:modelValue": S[1] || (S[1] = (j) => i.value = j),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", t1, [
                  k(ee, {
                    variant: "primary",
                    size: "md",
                    loading: w.value || g.value,
                    disabled: w.value || g.value,
                    onClick: C
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
                      h(" " + a(_.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          u.value ? (s(), T(Be, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: l(() => [
              k(He, {
                status: u.value.status === "success" ? "synced" : "broken"
              }, Wt({
                icon: l(() => [
                  h(a(u.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: l(() => [
                  h(a(u.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: l(() => [
                  h(a(u.value.status === "success" ? "Your environment has been exported" : u.value.message), 1)
                ]),
                _: 2
              }, [
                u.value.status === "success" ? {
                  name: "details",
                  fn: l(() => [
                    k(Pe, { label: "Saved to:" }, {
                      default: l(() => [
                        k(zh, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (s(), T(Pe, {
                      key: 0,
                      label: "Models without sources:",
                      value: u.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : d("", !0),
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (s(), o("div", s1, [...S[8] || (S[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : d("", !0)
                  ]),
                  key: "0"
                } : void 0,
                u.value.status === "success" ? {
                  name: "actions",
                  fn: l(() => [
                    k(ee, {
                      variant: "primary",
                      size: "sm",
                      loading: f.value,
                      onClick: D
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
                    k(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: $
                    }, {
                      default: l(() => [...S[10] || (S[10] = [
                        h(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    k(ee, {
                      variant: "ghost",
                      size: "sm",
                      onClick: S[2] || (S[2] = (j) => u.value = null)
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
          })) : d("", !0)
        ]),
        _: 1
      }),
      k(it, {
        show: r.value,
        title: "What Gets Exported",
        onClose: S[3] || (S[3] = (j) => r.value = !1)
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
      p.value && m.value ? (s(), T(Bh, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: S[4] || (S[4] = (j) => p.value = !1)
      }, null, 8, ["issues"])) : d("", !0),
      y.value && m.value ? (s(), T(Xh, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: z,
        onCancel: S[5] || (S[5] = (j) => y.value = !1),
        onRevalidate: U
      }, null, 8, ["models"])) : d("", !0)
    ], 64));
  }
}), n1 = /* @__PURE__ */ Z(o1, [["__scopeId", "data-v-f4d120f2"]]), a1 = { class: "file-input-wrapper" }, l1 = ["accept", "multiple", "disabled"], i1 = /* @__PURE__ */ X({
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
    const i = n, w = b(null);
    function g() {
      var u;
      (u = w.value) == null || u.click();
    }
    function f(u) {
      const r = u.target;
      r.files && r.files.length > 0 && (i("change", r.files), r.value = "");
    }
    return c({
      triggerInput: g
    }), (u, r) => (s(), o("div", a1, [
      e("input", {
        ref_key: "fileInputRef",
        ref: w,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: f
      }, null, 40, l1),
      k(ee, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: g
      }, {
        default: l(() => [
          Se(u.$slots, "default", {}, () => [
            r[0] || (r[0] = e("svg", {
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
}), r1 = /* @__PURE__ */ Z(i1, [["__scopeId", "data-v-cd192091"]]), d1 = {
  key: 0,
  class: "drop-zone-empty"
}, c1 = { class: "drop-zone-text" }, u1 = { class: "drop-zone-primary" }, m1 = { class: "drop-zone-secondary" }, v1 = { class: "drop-zone-actions" }, f1 = {
  key: 1,
  class: "drop-zone-file"
}, g1 = { class: "file-info" }, p1 = { class: "file-details" }, h1 = { class: "file-name" }, y1 = { class: "file-size" }, w1 = /* @__PURE__ */ X({
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
    const n = c, i = b(!1), w = b(null), g = b(0), f = P(() => w.value !== null), u = P(() => {
      var v;
      return ((v = w.value) == null ? void 0 : v.name) || "";
    }), r = P(() => {
      if (!w.value) return "";
      const v = w.value.size;
      return v < 1024 ? `${v} B` : v < 1024 * 1024 ? `${(v / 1024).toFixed(1)} KB` : v < 1024 * 1024 * 1024 ? `${(v / (1024 * 1024)).toFixed(1)} MB` : `${(v / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m(v) {
      var $;
      v.stopPropagation(), g.value++, ($ = v.dataTransfer) != null && $.types.includes("Files") && (i.value = !0);
    }
    function p(v) {
      v.stopPropagation(), v.dataTransfer && (v.dataTransfer.dropEffect = "copy");
    }
    function y(v) {
      v.stopPropagation(), g.value--, g.value === 0 && (i.value = !1);
    }
    function _(v) {
      var D;
      v.stopPropagation(), g.value = 0, i.value = !1;
      const $ = (D = v.dataTransfer) == null ? void 0 : D.files;
      $ && $.length > 0 && z($[0]);
    }
    function C(v) {
      v.length > 0 && z(v[0]);
    }
    function z(v) {
      w.value = v, n("fileSelected", v);
    }
    function U() {
      w.value = null, n("clear");
    }
    return (v, $) => (s(), o("div", {
      class: ie(["file-drop-zone", { "drop-active": i.value, "has-file": f.value }]),
      onDragenter: ze(m, ["prevent"]),
      onDragover: ze(p, ["prevent"]),
      onDragleave: ze(y, ["prevent"]),
      onDrop: ze(_, ["prevent"])
    }, [
      f.value ? (s(), o("div", f1, [
        e("div", g1, [
          $[1] || ($[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", p1, [
            e("div", h1, a(u.value), 1),
            e("div", y1, a(r.value), 1)
          ])
        ]),
        k(ee, {
          variant: "ghost",
          size: "xs",
          onClick: U,
          title: "Remove file"
        }, {
          default: l(() => [...$[2] || ($[2] = [
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
      ])) : (s(), o("div", d1, [
        $[0] || ($[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", c1, [
          e("p", u1, a(t.primaryText), 1),
          e("p", m1, a(t.secondaryText), 1)
        ]),
        e("div", v1, [
          k(r1, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "sm",
            onChange: C
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
}), k1 = /* @__PURE__ */ Z(w1, [["__scopeId", "data-v-0f79cb86"]]), b1 = { class: "import-preview" }, _1 = { class: "preview-header" }, $1 = {
  key: 0,
  class: "source-env"
}, C1 = { class: "preview-content" }, x1 = { class: "preview-section" }, S1 = { class: "section-header" }, I1 = { class: "section-info" }, E1 = { class: "section-count" }, M1 = {
  key: 0,
  class: "item-list"
}, T1 = { class: "item-name" }, z1 = {
  key: 0,
  class: "item-more"
}, R1 = { class: "preview-section" }, L1 = { class: "section-header" }, P1 = { class: "section-info" }, D1 = { class: "section-count" }, N1 = {
  key: 0,
  class: "item-list"
}, U1 = { class: "item-details" }, O1 = { class: "item-name" }, B1 = { class: "item-meta" }, F1 = {
  key: 0,
  class: "item-more"
}, A1 = { class: "preview-section" }, V1 = { class: "section-header" }, W1 = { class: "section-info" }, j1 = { class: "section-count" }, G1 = {
  key: 0,
  class: "item-list"
}, q1 = { class: "item-name" }, H1 = {
  key: 0,
  class: "item-more"
}, K1 = {
  key: 0,
  class: "preview-section"
}, J1 = { class: "git-info" }, Y1 = /* @__PURE__ */ X({
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
    const c = t, n = P(() => c.workflows.length), i = P(() => c.models.length), w = P(() => c.nodes.length);
    function g(f) {
      return f < 1024 ? `${f} B` : f < 1024 * 1024 ? `${(f / 1024).toFixed(1)} KB` : f < 1024 * 1024 * 1024 ? `${(f / (1024 * 1024)).toFixed(1)} MB` : `${(f / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (f, u) => (s(), o("div", b1, [
      e("div", _1, [
        k(Ze, null, {
          default: l(() => [...u[0] || (u[0] = [
            h("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", $1, [
          u[1] || (u[1] = h(" From: ", -1)),
          k(is, null, {
            default: l(() => [
              h(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : d("", !0)
      ]),
      e("div", C1, [
        e("div", x1, [
          e("div", S1, [
            u[3] || (u[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", I1, [
              u[2] || (u[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", E1, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", M1, [
            (s(!0), o(V, null, te(t.workflows.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r,
              class: "preview-item"
            }, [
              u[4] || (u[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", T1, a(r), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", z1, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", R1, [
          e("div", L1, [
            u[6] || (u[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", P1, [
              u[5] || (u[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", D1, a(i.value) + " file" + a(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", N1, [
            (s(!0), o(V, null, te(t.models.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", U1, [
                e("span", O1, a(r.filename), 1),
                e("span", B1, a(g(r.size)) + " • " + a(r.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", F1, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", A1, [
          e("div", V1, [
            u[9] || (u[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", W1, [
              u[8] || (u[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", j1, a(w.value) + " node" + a(w.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", G1, [
            (s(!0), o(V, null, te(t.nodes.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r,
              class: "preview-item"
            }, [
              u[10] || (u[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", q1, a(r), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", H1, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", K1, [
          u[11] || (u[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", J1, [
            t.gitBranch ? (s(), T(Pe, {
              key: 0,
              label: "Branch"
            }, {
              default: l(() => [
                k(is, null, {
                  default: l(() => [
                    h(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : d("", !0),
            t.gitCommit ? (s(), T(Pe, {
              key: 1,
              label: "Commit"
            }, {
              default: l(() => [
                k(Is, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : d("", !0)
          ])
        ])) : d("", !0)
      ])
    ]));
  }
}), Q1 = /* @__PURE__ */ Z(Y1, [["__scopeId", "data-v-182fe113"]]), X1 = { class: "import-config" }, Z1 = { class: "config-container" }, ey = { class: "config-field" }, ty = { class: "input-wrapper" }, sy = ["value"], oy = {
  key: 0,
  class: "validating-indicator"
}, ny = {
  key: 1,
  class: "valid-indicator"
}, ay = {
  key: 0,
  class: "field-error"
}, ly = { class: "config-field" }, iy = { class: "strategy-options" }, ry = ["value", "checked", "onChange"], dy = { class: "strategy-content" }, cy = { class: "strategy-label" }, uy = { class: "strategy-description" }, my = { class: "config-field switch-field" }, vy = { class: "switch-label" }, fy = ["checked"], gy = { class: "advanced-section" }, py = { class: "advanced-content" }, hy = { class: "config-field" }, yy = ["value"], wy = ["value"], ky = /* @__PURE__ */ X({
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
    const n = t, i = c, w = b(!1), g = b(!1);
    kt(() => n.nameError, (p) => {
      w.value = !1, g.value = !p && n.name.length > 0;
    });
    const f = [
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
    let u = null;
    function r(p) {
      const y = p.target.value;
      i("update:name", y), g.value = !1, u && clearTimeout(u), y.length > 0 ? (w.value = !0, u = setTimeout(() => {
        i("validate-name", y);
      }, 400)) : w.value = !1;
    }
    function m() {
      n.name.length > 0 && i("validate-name", n.name);
    }
    return (p, y) => (s(), o("div", X1, [
      k(Ze, null, {
        default: l(() => [...y[2] || (y[2] = [
          h("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", Z1, [
        e("div", ey, [
          k(Jt, { required: "" }, {
            default: l(() => [...y[3] || (y[3] = [
              h("Environment Name", -1)
            ])]),
            _: 1
          }),
          e("div", ty, [
            e("input", {
              type: "text",
              class: ie(["name-input", { error: t.nameError || t.name.length === 0, valid: g.value }]),
              value: t.name,
              placeholder: "my-imported-env",
              onInput: r,
              onBlur: m
            }, null, 42, sy),
            w.value ? (s(), o("span", oy, "...")) : g.value ? (s(), o("span", ny, "✓")) : d("", !0)
          ]),
          t.nameError ? (s(), o("div", ay, a(t.nameError), 1)) : d("", !0),
          y[4] || (y[4] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", ly, [
          k(Jt, null, {
            default: l(() => [...y[5] || (y[5] = [
              h("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", iy, [
            (s(), o(V, null, te(f, (_) => e("label", {
              key: _.value,
              class: ie(["strategy-option", { active: t.modelStrategy === _.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: _.value,
                checked: t.modelStrategy === _.value,
                onChange: (C) => i("update:modelStrategy", _.value)
              }, null, 40, ry),
              e("div", dy, [
                e("span", cy, a(_.label), 1),
                e("span", uy, a(_.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", my, [
          e("label", vy, [
            e("input", {
              type: "checkbox",
              checked: t.switchAfterImport,
              onChange: y[0] || (y[0] = (_) => i("update:switchAfterImport", _.target.checked))
            }, null, 40, fy),
            y[6] || (y[6] = e("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        e("details", gy, [
          y[8] || (y[8] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", py, [
            e("div", hy, [
              k(Jt, null, {
                default: l(() => [...y[7] || (y[7] = [
                  h("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              e("select", {
                class: "backend-select",
                value: t.torchBackend,
                onChange: y[1] || (y[1] = (_) => i("update:torchBackend", _.target.value))
              }, [
                (s(!0), o(V, null, te(xe(fs), (_) => (s(), o("option", {
                  key: _,
                  value: _
                }, a(_) + a(_ === "auto" ? " (detect GPU)" : ""), 9, wy))), 128))
              ], 40, yy)
            ])
          ])
        ])
      ])
    ]));
  }
}), by = /* @__PURE__ */ Z(ky, [["__scopeId", "data-v-89ea06a1"]]), _y = {
  key: 0,
  class: "import-empty"
}, $y = { class: "git-import-section" }, Cy = { class: "git-url-input-row" }, xy = ["disabled"], Sy = {
  key: 0,
  class: "git-error"
}, Iy = {
  key: 1,
  class: "import-configure"
}, Ey = { class: "selected-file-bar" }, My = {
  key: 0,
  class: "file-bar-content"
}, Ty = { class: "file-bar-info" }, zy = { class: "file-bar-name" }, Ry = { class: "file-bar-size" }, Ly = {
  key: 1,
  class: "file-bar-content"
}, Py = { class: "file-bar-info" }, Dy = { class: "file-bar-name" }, Ny = {
  key: 0,
  class: "preview-loading"
}, Uy = { class: "import-actions" }, Oy = {
  key: 2,
  class: "import-progress"
}, By = { class: "creating-intro" }, Fy = {
  key: 0,
  class: "progress-warning"
}, Ay = {
  key: 1,
  class: "import-error"
}, Vy = { class: "error-message" }, Wy = {
  key: 3,
  class: "import-complete"
}, jy = { class: "complete-message" }, Gy = { class: "complete-title" }, qy = { class: "complete-details" }, Hy = { class: "complete-actions" }, Ky = /* @__PURE__ */ X({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(t, { emit: c }) {
    const { previewTarballImport: n, previewGitImport: i, validateEnvironmentName: w, executeImport: g, executeGitImport: f, getImportProgress: u } = Oe(), r = c;
    let m = null;
    const p = b(!1), y = b(null), _ = b(!1), C = b(!1), z = b(!1), U = b(""), v = b(!1), $ = b(null), D = b(""), x = b(null), S = b(!1), j = b(null), W = b(null), H = b({
      name: "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), L = b(null), I = b({
      message: "Preparing import...",
      phase: "",
      progress: 0,
      error: null
    }), E = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], O = P(() => {
      if (!W.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const re = W.value;
      return {
        sourceEnvironment: re.comfyui_version ? `ComfyUI ${re.comfyui_version}` : "Unknown",
        workflows: re.workflows.map((ne) => ne.name),
        models: re.models.map((ne) => ({
          filename: ne.filename,
          size: 0,
          type: ne.relative_path.split("/")[0] || "model"
        })),
        nodes: re.nodes.map((ne) => ne.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), B = P(() => !v.value && !$.value && W.value && H.value.name.length > 0 && !L.value && (y.value || x.value));
    async function ae(re) {
      y.value = re, v.value = !0, $.value = null, W.value = null;
      try {
        const ne = await n(re);
        W.value = ne;
      } catch (ne) {
        $.value = ne instanceof Error ? ne.message : "Failed to analyze file", console.error("Preview error:", ne);
      } finally {
        v.value = !1;
      }
    }
    function we() {
      y.value = null, x.value = null, D.value = "", j.value = null, C.value = !1, z.value = !1, U.value = "", W.value = null, $.value = null, H.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, L.value = null;
    }
    function me() {
      Me(), we(), _.value = !1, v.value = !1, S.value = !1, I.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function oe() {
      if (D.value.trim()) {
        S.value = !0, j.value = null;
        try {
          const re = await i(D.value.trim());
          x.value = D.value.trim(), W.value = re;
        } catch (re) {
          j.value = re instanceof Error ? re.message : "Failed to analyze repository";
        } finally {
          S.value = !1;
        }
      }
    }
    function F(re) {
      try {
        const ne = new URL(re);
        return ne.host + ne.pathname.replace(/\.git$/, "");
      } catch {
        return re;
      }
    }
    async function M(re) {
      if (!re) {
        L.value = "Environment name is required";
        return;
      }
      try {
        const ne = await w(re);
        L.value = ne.valid ? null : ne.error || "Invalid name";
      } catch {
        L.value = "Failed to validate name";
      }
    }
    async function le() {
      if (H.value.name && !(!y.value && !x.value)) {
        _.value = !0, C.value = !1, I.value = { message: `Creating environment '${H.value.name}'...`, phase: "", progress: 0, error: null };
        try {
          let re;
          if (y.value)
            re = await g(
              y.value,
              H.value.name,
              H.value.modelStrategy,
              H.value.torchBackend
            );
          else if (x.value)
            re = await f(
              x.value,
              H.value.name,
              H.value.modelStrategy,
              H.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          re.status === "started" ? se() : (z.value = !1, U.value = re.message, _.value = !1, C.value = !0);
        } catch (re) {
          z.value = !1, U.value = re instanceof Error ? re.message : "Unknown error occurred during import", _.value = !1, C.value = !0;
        }
      }
    }
    function se() {
      m || (m = setInterval(async () => {
        try {
          const re = await u();
          I.value = {
            message: re.message,
            phase: re.phase || "",
            progress: re.progress ?? (re.state === "importing" ? 50 : 0),
            error: re.error || null
          }, re.state === "complete" ? (Me(), z.value = !0, U.value = `Environment '${re.environment_name}' created successfully`, _.value = !1, C.value = !0, H.value.switchAfterImport && re.environment_name && r("import-complete-switch", re.environment_name)) : re.state === "error" && (Me(), z.value = !1, U.value = re.error || re.message, _.value = !1, C.value = !0);
        } catch (re) {
          console.error("Failed to poll import progress:", re);
        }
      }, 2e3));
    }
    function Me() {
      m && (clearInterval(m), m = null);
    }
    function ke(re) {
      return re < 1024 ? `${re} B` : re < 1024 * 1024 ? `${(re / 1024).toFixed(1)} KB` : re < 1024 * 1024 * 1024 ? `${(re / (1024 * 1024)).toFixed(1)} MB` : `${(re / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (re, ne) => (s(), o(V, null, [
      k(je, null, {
        header: l(() => [
          k(Ge, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: ne[0] || (ne[0] = (J) => p.value = !0)
          })
        ]),
        content: l(() => {
          var J;
          return [
            !y.value && !x.value && !_.value ? (s(), o("div", _y, [
              k(k1, {
                accept: ".tar.gz,.tgz,.zip",
                "primary-text": "Drag & drop environment export here",
                "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
                "button-text": "Select Export File",
                onFileSelected: ae
              }),
              ne[9] || (ne[9] = e("div", { class: "import-divider" }, [
                e("span", null, "or")
              ], -1)),
              e("div", $y, [
                ne[7] || (ne[7] = e("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
                e("div", Cy, [
                  Ne(e("input", {
                    type: "text",
                    class: "git-url-input",
                    "onUpdate:modelValue": ne[1] || (ne[1] = (ue) => D.value = ue),
                    placeholder: "https://github.com/user/repo.git",
                    onKeyup: ft(oe, ["enter"]),
                    disabled: S.value
                  }, null, 40, xy), [
                    [Et, D.value]
                  ]),
                  k(ee, {
                    variant: "primary",
                    size: "sm",
                    disabled: !D.value.trim() || S.value,
                    onClick: oe
                  }, {
                    default: l(() => [
                      h(a(S.value ? "Analyzing..." : "ANALYZE"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                j.value ? (s(), o("div", Sy, a(j.value), 1)) : d("", !0),
                ne[8] || (ne[8] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
              ])
            ])) : (y.value || x.value) && !_.value && !C.value ? (s(), o("div", Iy, [
              e("div", Ey, [
                y.value ? (s(), o("div", My, [
                  ne[10] || (ne[10] = e("div", { class: "file-bar-icon" }, "📦", -1)),
                  e("div", Ty, [
                    e("div", zy, a(y.value.name), 1),
                    e("div", Ry, a(ke(y.value.size)), 1)
                  ])
                ])) : x.value ? (s(), o("div", Ly, [
                  ne[12] || (ne[12] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
                  e("div", Py, [
                    e("div", Dy, a(F(x.value)), 1),
                    ne[11] || (ne[11] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
                  ])
                ])) : d("", !0),
                k(ee, {
                  variant: "ghost",
                  size: "sm",
                  onClick: we
                }, {
                  default: l(() => [...ne[13] || (ne[13] = [
                    h(" Change Source ", -1)
                  ])]),
                  _: 1
                })
              ]),
              v.value ? (s(), o("div", Ny, [...ne[14] || (ne[14] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Analyzing import file...", -1)
              ])])) : $.value ? (s(), T(et, {
                key: 1,
                type: "error",
                title: "Failed to Analyze File",
                details: [$.value]
              }, null, 8, ["details"])) : W.value ? (s(), T(Q1, {
                key: 2,
                "source-environment": O.value.sourceEnvironment,
                workflows: O.value.workflows,
                models: O.value.models,
                nodes: O.value.nodes,
                "git-branch": O.value.gitBranch,
                "git-commit": O.value.gitCommit
              }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : d("", !0),
              W.value ? (s(), T(by, {
                key: 3,
                name: H.value.name,
                "onUpdate:name": ne[2] || (ne[2] = (ue) => H.value.name = ue),
                "model-strategy": H.value.modelStrategy,
                "onUpdate:modelStrategy": ne[3] || (ne[3] = (ue) => H.value.modelStrategy = ue),
                "torch-backend": H.value.torchBackend,
                "onUpdate:torchBackend": ne[4] || (ne[4] = (ue) => H.value.torchBackend = ue),
                "switch-after-import": H.value.switchAfterImport,
                "onUpdate:switchAfterImport": ne[5] || (ne[5] = (ue) => H.value.switchAfterImport = ue),
                "name-error": L.value,
                onValidateName: M
              }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : d("", !0),
              H.value.modelStrategy === "skip" && ((J = W.value) != null && J.models_needing_download) ? (s(), T(et, {
                key: 4,
                type: "warning",
                title: "Models Will Not Be Downloaded",
                details: [
                  `${W.value.models_needing_download} model(s) will need to be downloaded later`,
                  "You can resolve missing models from the STATUS page after import"
                ]
              }, null, 8, ["details"])) : d("", !0),
              e("div", Uy, [
                k(ee, {
                  variant: "secondary",
                  size: "md",
                  onClick: we
                }, {
                  default: l(() => [...ne[15] || (ne[15] = [
                    h(" Cancel ", -1)
                  ])]),
                  _: 1
                }),
                k(ee, {
                  variant: "primary",
                  size: "md",
                  disabled: !B.value,
                  onClick: le
                }, {
                  default: l(() => [...ne[16] || (ne[16] = [
                    h(" Create Environment ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ])) : _.value ? (s(), o("div", Oy, [
              e("p", By, [
                ne[17] || (ne[17] = h(" Importing environment ", -1)),
                e("strong", null, a(H.value.name), 1),
                ne[18] || (ne[18] = h("... ", -1))
              ]),
              k(es, {
                progress: I.value.progress,
                message: I.value.message,
                "current-phase": I.value.phase,
                variant: I.value.error ? "error" : "default",
                "show-steps": !0,
                steps: E
              }, null, 8, ["progress", "message", "current-phase", "variant"]),
              I.value.error ? d("", !0) : (s(), o("p", Fy, " This may take several minutes. Please wait... ")),
              I.value.error ? (s(), o("div", Ay, [
                e("p", Vy, a(I.value.error), 1)
              ])) : d("", !0)
            ])) : C.value ? (s(), o("div", Wy, [
              e("div", {
                class: ie(["complete-icon", z.value ? "success" : "error"])
              }, a(z.value ? "✓" : "✕"), 3),
              e("div", jy, [
                e("div", Gy, a(z.value ? "Import Successful" : "Import Failed"), 1),
                e("div", qy, a(U.value), 1)
              ]),
              e("div", Hy, [
                k(ee, {
                  variant: "primary",
                  size: "md",
                  onClick: me
                }, {
                  default: l(() => [...ne[19] || (ne[19] = [
                    h(" Import Another ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])) : d("", !0)
          ];
        }),
        _: 1
      }),
      k(it, {
        show: p.value,
        title: "How Import Works",
        onClose: ne[6] || (ne[6] = (J) => p.value = !1)
      }, {
        content: l(() => [...ne[20] || (ne[20] = [
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
}), Jy = /* @__PURE__ */ Z(Ky, [["__scopeId", "data-v-e3c47581"]]), Yy = { class: "header-info" }, Qy = { class: "commit-hash" }, Xy = {
  key: 0,
  class: "commit-refs"
}, Zy = { class: "commit-message" }, ew = { class: "commit-date" }, tw = {
  key: 0,
  class: "loading"
}, sw = {
  key: 1,
  class: "changes-section"
}, ow = { class: "stats-row" }, nw = { class: "stat" }, aw = { class: "stat insertions" }, lw = { class: "stat deletions" }, iw = {
  key: 0,
  class: "change-group"
}, rw = {
  key: 1,
  class: "change-group"
}, dw = {
  key: 0,
  class: "version"
}, cw = {
  key: 2,
  class: "change-group"
}, uw = { class: "change-item" }, mw = /* @__PURE__ */ X({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = Oe(), i = b(null), w = b(!0), g = P(() => {
      if (!i.value) return !1;
      const u = i.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), f = P(() => {
      if (!i.value) return !1;
      const u = i.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return Ue(async () => {
      try {
        i.value = await n(c.commit.hash);
      } finally {
        w.value = !1;
      }
    }), (u, r) => (s(), T(Ke, {
      size: "md",
      "show-close-button": !1,
      onClose: r[3] || (r[3] = (m) => u.$emit("close"))
    }, {
      header: l(() => {
        var m, p, y, _;
        return [
          e("div", Yy, [
            r[4] || (r[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Qy, a(((m = i.value) == null ? void 0 : m.short_hash) || t.commit.short_hash || ((p = t.commit.hash) == null ? void 0 : p.slice(0, 7))), 1),
            (_ = (y = i.value) == null ? void 0 : y.refs) != null && _.length ? (s(), o("span", Xy, [
              (s(!0), o(V, null, te(i.value.refs, (C) => (s(), o("span", {
                key: C,
                class: "ref-badge"
              }, a(C), 1))), 128))
            ])) : d("", !0)
          ]),
          k(ce, {
            variant: "ghost",
            size: "sm",
            onClick: r[0] || (r[0] = (C) => u.$emit("close"))
          }, {
            default: l(() => [...r[5] || (r[5] = [
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
        var m, p;
        return [
          e("div", Zy, a(((m = i.value) == null ? void 0 : m.message) || t.commit.message), 1),
          e("div", ew, a(((p = i.value) == null ? void 0 : p.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          w.value ? (s(), o("div", tw, "Loading details...")) : i.value ? (s(), o("div", sw, [
            e("div", ow, [
              e("span", nw, a(i.value.stats.files_changed) + " files", 1),
              e("span", aw, "+" + a(i.value.stats.insertions), 1),
              e("span", lw, "-" + a(i.value.stats.deletions), 1)
            ]),
            g.value ? (s(), o("div", iw, [
              k(Ft, { variant: "section" }, {
                default: l(() => [...r[6] || (r[6] = [
                  h("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(V, null, te(i.value.changes.workflows.added, (y) => (s(), o("div", {
                key: "add-" + y,
                class: "change-item added"
              }, [
                r[7] || (r[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(y), 1)
              ]))), 128)),
              (s(!0), o(V, null, te(i.value.changes.workflows.modified, (y) => (s(), o("div", {
                key: "mod-" + y,
                class: "change-item modified"
              }, [
                r[8] || (r[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(y), 1)
              ]))), 128)),
              (s(!0), o(V, null, te(i.value.changes.workflows.deleted, (y) => (s(), o("div", {
                key: "del-" + y,
                class: "change-item deleted"
              }, [
                r[9] || (r[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(y), 1)
              ]))), 128))
            ])) : d("", !0),
            f.value ? (s(), o("div", rw, [
              k(Ft, { variant: "section" }, {
                default: l(() => [...r[10] || (r[10] = [
                  h("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(V, null, te(i.value.changes.nodes.added, (y) => (s(), o("div", {
                key: "add-" + y.name,
                class: "change-item added"
              }, [
                r[11] || (r[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(y.name), 1),
                y.version ? (s(), o("span", dw, "(" + a(y.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (s(!0), o(V, null, te(i.value.changes.nodes.removed, (y) => (s(), o("div", {
                key: "rem-" + y.name,
                class: "change-item deleted"
              }, [
                r[12] || (r[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(y.name), 1)
              ]))), 128))
            ])) : d("", !0),
            i.value.changes.models.resolved > 0 ? (s(), o("div", cw, [
              k(Ft, { variant: "section" }, {
                default: l(() => [...r[13] || (r[13] = [
                  h("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", uw, [
                r[14] || (r[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: l(() => [
        k(ce, {
          variant: "secondary",
          onClick: r[1] || (r[1] = (m) => u.$emit("createBranch", t.commit))
        }, {
          default: l(() => [...r[15] || (r[15] = [
            h(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        k(ce, {
          variant: "primary",
          onClick: r[2] || (r[2] = (m) => u.$emit("checkout", t.commit))
        }, {
          default: l(() => [...r[16] || (r[16] = [
            h(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), vw = /* @__PURE__ */ Z(mw, [["__scopeId", "data-v-d256ff6d"]]), fw = { class: "dialog-message" }, gw = {
  key: 0,
  class: "dialog-details"
}, pw = {
  key: 1,
  class: "dialog-warning"
}, hw = /* @__PURE__ */ X({
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
    return (c, n) => (s(), T(Ke, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (i) => c.$emit("cancel"))
    }, {
      body: l(() => [
        e("p", fw, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", gw, [
          (s(!0), o(V, null, te(t.details, (i, w) => (s(), o("div", {
            key: w,
            class: "detail-item"
          }, " • " + a(i), 1))), 128))
        ])) : d("", !0),
        t.warning ? (s(), o("p", pw, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          h(" " + a(t.warning), 1)
        ])) : d("", !0)
      ]),
      footer: l(() => [
        k(ce, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (i) => c.$emit("cancel"))
        }, {
          default: l(() => [
            h(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), T(ce, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (i) => c.$emit("secondary"))
        }, {
          default: l(() => [
            h(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        k(ce, {
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
}), yw = /* @__PURE__ */ Z(hw, [["__scopeId", "data-v-3670b9f5"]]), ww = { class: "base-textarea-wrapper" }, kw = ["value", "rows", "placeholder", "disabled", "maxlength"], bw = {
  key: 0,
  class: "base-textarea-count"
}, _w = /* @__PURE__ */ X({
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
    return (c, n) => (s(), o("div", ww, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeydown: [
          n[1] || (n[1] = ft(ze((i) => c.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = ft(ze((i) => c.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, kw),
      t.showCharCount && t.maxLength ? (s(), o("div", bw, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : d("", !0)
    ]));
  }
}), _s = /* @__PURE__ */ Z(_w, [["__scopeId", "data-v-5516e6fc"]]), $w = ["checked", "disabled"], Cw = { class: "base-checkbox-box" }, xw = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Sw = {
  key: 0,
  class: "base-checkbox-label"
}, Iw = /* @__PURE__ */ X({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", {
      class: ie(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked))
      }, null, 40, $w),
      e("span", Cw, [
        t.modelValue ? (s(), o("svg", xw, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : d("", !0)
      ]),
      c.$slots.default ? (s(), o("span", Sw, [
        Se(c.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), $s = /* @__PURE__ */ Z(Iw, [["__scopeId", "data-v-bf17c831"]]), Ew = { class: "popover-header" }, Mw = { class: "popover-body" }, Tw = {
  key: 0,
  class: "changes-summary"
}, zw = {
  key: 0,
  class: "change-item"
}, Rw = {
  key: 1,
  class: "change-item"
}, Lw = {
  key: 2,
  class: "change-item"
}, Pw = {
  key: 3,
  class: "change-item"
}, Dw = {
  key: 4,
  class: "change-item"
}, Nw = {
  key: 5,
  class: "change-item"
}, Uw = {
  key: 1,
  class: "no-changes"
}, Ow = {
  key: 2,
  class: "loading"
}, Bw = {
  key: 3,
  class: "issues-error"
}, Fw = { class: "error-header" }, Aw = { class: "error-title" }, Vw = { class: "issues-list" }, Ww = { class: "message-section" }, jw = { class: "popover-footer" }, Gw = {
  key: 1,
  class: "commit-popover"
}, qw = { class: "popover-header" }, Hw = { class: "popover-body" }, Kw = {
  key: 0,
  class: "changes-summary"
}, Jw = {
  key: 0,
  class: "change-item"
}, Yw = {
  key: 1,
  class: "change-item"
}, Qw = {
  key: 2,
  class: "change-item"
}, Xw = {
  key: 3,
  class: "change-item"
}, Zw = {
  key: 4,
  class: "change-item"
}, e0 = {
  key: 5,
  class: "change-item"
}, t0 = {
  key: 1,
  class: "no-changes"
}, s0 = {
  key: 2,
  class: "loading"
}, o0 = {
  key: 3,
  class: "issues-error"
}, n0 = { class: "error-header" }, a0 = { class: "error-title" }, l0 = { class: "issues-list" }, i0 = { class: "message-section" }, r0 = { class: "popover-footer" }, d0 = /* @__PURE__ */ X({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, i = c, { commit: w } = Oe(), g = b(""), f = b(!1), u = b(!1), r = b(null), m = P(() => {
      if (!n.status) return !1;
      const U = n.status.workflows;
      return U.new.length > 0 || U.modified.length > 0 || U.deleted.length > 0 || n.status.has_changes;
    }), p = P(() => {
      if (!n.status) return !1;
      const U = n.status.workflows, v = n.status.git_changes;
      return U.new.length > 0 || U.modified.length > 0 || U.deleted.length > 0 || v.nodes_added.length > 0 || v.nodes_removed.length > 0;
    }), y = P(() => {
      var U;
      return (U = n.status) != null && U.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (v) => v.has_issues && (v.sync_state === "new" || v.sync_state === "modified")
      ) : [];
    }), _ = P(() => y.value.length > 0), C = P(() => _.value && !u.value);
    async function z() {
      var U, v, $;
      if (!(_.value && !u.value) && !(!m.value || !g.value.trim() || f.value)) {
        f.value = !0, r.value = null;
        try {
          const D = await w(g.value.trim(), u.value);
          D.status === "success" ? (r.value = {
            type: "success",
            message: `Committed: ${((U = D.summary) == null ? void 0 : U.new) || 0} new, ${((v = D.summary) == null ? void 0 : v.modified) || 0} modified, ${(($ = D.summary) == null ? void 0 : $.deleted) || 0} deleted`
          }, g.value = "", u.value = !1, setTimeout(() => i("committed"), 1e3)) : D.status === "no_changes" ? r.value = { type: "error", message: "No changes to commit" } : D.status === "blocked" ? r.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : r.value = { type: "error", message: D.message || "Commit failed" };
        } catch (D) {
          r.value = { type: "error", message: D instanceof Error ? D.message : "Commit failed" };
        } finally {
          f.value = !1;
        }
      }
    }
    return (U, v) => t.asModal ? (s(), T(Fe, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: v[5] || (v[5] = ($) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: v[4] || (v[4] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", Ew, [
            v[11] || (v[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: v[0] || (v[0] = ($) => i("close"))
            }, [...v[10] || (v[10] = [
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
          e("div", Mw, [
            t.status && m.value ? (s(), o("div", Tw, [
              t.status.workflows.new.length ? (s(), o("div", zw, [
                v[12] || (v[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : d("", !0),
              t.status.workflows.modified.length ? (s(), o("div", Rw, [
                v[13] || (v[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : d("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", Lw, [
                v[14] || (v[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", Pw, [
                v[15] || (v[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", Dw, [
                v[16] || (v[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : d("", !0),
              p.value ? d("", !0) : (s(), o("div", Nw, [...v[17] || (v[17] = [
                e("span", { class: "change-icon modified" }, "~", -1),
                e("span", null, "Configuration updated", -1)
              ])]))
            ])) : t.status ? (s(), o("div", Uw, " No changes to commit ")) : (s(), o("div", Ow, " Loading... ")),
            _.value ? (s(), o("div", Bw, [
              e("div", Fw, [
                v[18] || (v[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Aw, a(y.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", Vw, [
                (s(!0), o(V, null, te(y.value, ($) => (s(), o("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a($.name), 1),
                  h(": " + a($.issue_summary), 1)
                ]))), 128))
              ]),
              k($s, {
                modelValue: u.value,
                "onUpdate:modelValue": v[1] || (v[1] = ($) => u.value = $),
                class: "allow-issues-toggle"
              }, {
                default: l(() => [...v[19] || (v[19] = [
                  h(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : d("", !0),
            e("div", Ww, [
              k(_s, {
                modelValue: g.value,
                "onUpdate:modelValue": v[2] || (v[2] = ($) => g.value = $),
                placeholder: C.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
                disabled: !m.value || f.value || C.value,
                rows: 3,
                onCtrlEnter: z
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            r.value ? (s(), o("div", {
              key: 4,
              class: ie(["result", r.value.type])
            }, a(r.value.message), 3)) : d("", !0)
          ]),
          e("div", jw, [
            k(ce, {
              variant: "secondary",
              onClick: v[3] || (v[3] = ($) => i("close"))
            }, {
              default: l(() => [...v[20] || (v[20] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(ce, {
              variant: u.value ? "danger" : "primary",
              disabled: !m.value || !g.value.trim() || f.value || C.value,
              loading: f.value,
              onClick: z
            }, {
              default: l(() => [
                h(a(f.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", Gw, [
      e("div", qw, [
        v[22] || (v[22] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: v[6] || (v[6] = ($) => i("close"))
        }, [...v[21] || (v[21] = [
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
      e("div", Hw, [
        t.status && m.value ? (s(), o("div", Kw, [
          t.status.workflows.new.length ? (s(), o("div", Jw, [
            v[23] || (v[23] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          t.status.workflows.modified.length ? (s(), o("div", Yw, [
            v[24] || (v[24] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", Qw, [
            v[25] || (v[25] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", Xw, [
            v[26] || (v[26] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", Zw, [
            v[27] || (v[27] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0),
          p.value ? d("", !0) : (s(), o("div", e0, [...v[28] || (v[28] = [
            e("span", { class: "change-icon modified" }, "~", -1),
            e("span", null, "Configuration updated", -1)
          ])]))
        ])) : t.status ? (s(), o("div", t0, " No changes to commit ")) : (s(), o("div", s0, " Loading... ")),
        _.value ? (s(), o("div", o0, [
          e("div", n0, [
            v[29] || (v[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", a0, a(y.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", l0, [
            (s(!0), o(V, null, te(y.value, ($) => (s(), o("div", {
              key: $.name,
              class: "issue-item"
            }, [
              e("strong", null, a($.name), 1),
              h(": " + a($.issue_summary), 1)
            ]))), 128))
          ]),
          k($s, {
            modelValue: u.value,
            "onUpdate:modelValue": v[7] || (v[7] = ($) => u.value = $),
            class: "allow-issues-toggle"
          }, {
            default: l(() => [...v[30] || (v[30] = [
              h(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : d("", !0),
        e("div", i0, [
          k(_s, {
            modelValue: g.value,
            "onUpdate:modelValue": v[8] || (v[8] = ($) => g.value = $),
            placeholder: C.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || f.value || C.value,
            rows: 3,
            onCtrlEnter: z
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        r.value ? (s(), o("div", {
          key: 4,
          class: ie(["result", r.value.type])
        }, a(r.value.message), 3)) : d("", !0)
      ]),
      e("div", r0, [
        k(ce, {
          variant: "secondary",
          onClick: v[9] || (v[9] = ($) => i("close"))
        }, {
          default: l(() => [...v[31] || (v[31] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        k(ce, {
          variant: u.value ? "danger" : "primary",
          disabled: !m.value || !g.value.trim() || f.value || C.value,
          loading: f.value,
          onClick: z
        }, {
          default: l(() => [
            h(a(f.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Us = /* @__PURE__ */ Z(d0, [["__scopeId", "data-v-aa2a9bdf"]]), c0 = { class: "modal-header" }, u0 = { class: "modal-body" }, m0 = { class: "switch-message" }, v0 = { class: "switch-details" }, f0 = { class: "modal-actions" }, g0 = /* @__PURE__ */ X({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), T(Fe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", c0, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", u0, [
            e("p", m0, [
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
            e("p", v0, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", f0, [
            k(ee, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(ee, {
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
      ])) : d("", !0)
    ]));
  }
}), p0 = /* @__PURE__ */ Z(g0, [["__scopeId", "data-v-e9c5253e"]]), h0 = {
  key: 0,
  class: "modal-overlay"
}, y0 = { class: "modal-content" }, w0 = { class: "modal-body" }, k0 = { class: "progress-info" }, b0 = { class: "progress-percentage" }, _0 = { class: "progress-state" }, $0 = { class: "switch-steps" }, C0 = { class: "step-icon" }, x0 = { class: "step-label" }, S0 = /* @__PURE__ */ X({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, n = P(() => {
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
    }), i = P(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), w = P(() => {
      const g = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], f = g.findIndex((u) => u.state === c.state);
      return g.map((u, r) => {
        let m = "pending", p = "○";
        return r < f ? (m = "completed", p = "✓") : r === f && (m = "active", p = "⟳"), {
          ...u,
          status: m,
          icon: p
        };
      });
    });
    return (g, f) => (s(), T(Fe, { to: "body" }, [
      t.show ? (s(), o("div", h0, [
        e("div", y0, [
          f[1] || (f[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", w0, [
            k(Ns, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", k0, [
              e("div", b0, a(t.progress) + "%", 1),
              e("div", _0, a(n.value), 1)
            ]),
            e("div", $0, [
              (s(!0), o(V, null, te(w.value, (u) => (s(), o("div", {
                key: u.state,
                class: ie(["switch-step", u.status])
              }, [
                e("span", C0, a(u.icon), 1),
                e("span", x0, a(u.label), 1)
              ], 2))), 128))
            ]),
            f[0] || (f[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), I0 = /* @__PURE__ */ Z(S0, [["__scopeId", "data-v-768a5078"]]), E0 = { class: "modal-header" }, M0 = { class: "modal-body" }, T0 = {
  key: 0,
  class: "node-section"
}, z0 = { class: "node-list" }, R0 = {
  key: 1,
  class: "node-section"
}, L0 = { class: "node-list" }, P0 = { class: "modal-actions" }, D0 = /* @__PURE__ */ X({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), T(Fe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", E0, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", M0, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", T0, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", z0, [
                (s(!0), o(V, null, te(t.mismatchDetails.missing_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + a(i), 1))), 128))
              ])
            ])) : d("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", R0, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", L0, [
                (s(!0), o(V, null, te(t.mismatchDetails.extra_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item remove"
                }, " - " + a(i), 1))), 128))
              ])
            ])) : d("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", P0, [
            k(ee, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[10] || (n[10] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(ee, {
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
      ])) : d("", !0)
    ]));
  }
}), N0 = /* @__PURE__ */ Z(D0, [["__scopeId", "data-v-7cad7518"]]), U0 = {
  key: 0,
  class: "wizard-steps"
}, O0 = { class: "step-number" }, B0 = {
  key: 1,
  class: "wizard-steps wizard-steps--single"
}, F0 = {
  key: 2,
  class: "wizard-step"
}, A0 = { class: "form-field" }, V0 = ["placeholder"], W0 = {
  key: 0,
  class: "form-error"
}, j0 = { class: "form-field form-field--checkbox" }, G0 = { class: "form-checkbox" }, q0 = {
  key: 0,
  class: "form-field"
}, H0 = ["placeholder"], K0 = {
  key: 0,
  class: "form-info"
}, J0 = {
  key: 1,
  class: "form-suggestion"
}, Y0 = {
  key: 2,
  class: "form-error"
}, Q0 = {
  key: 3,
  class: "form-info"
}, X0 = {
  key: 3,
  class: "wizard-step"
}, Z0 = {
  key: 0,
  class: "cli-warning"
}, ek = {
  key: 1,
  class: "env-selection"
}, tk = { class: "env-list" }, sk = ["value"], ok = { class: "env-name" }, nk = { class: "env-actions" }, ak = { key: 2 }, lk = { class: "wizard-intro" }, ik = { class: "form-field" }, rk = { class: "form-field" }, dk = ["value"], ck = { class: "form-field" }, uk = ["disabled"], mk = ["value"], vk = { class: "form-field" }, fk = ["value"], gk = { class: "form-field form-field--checkbox" }, pk = { class: "form-checkbox" }, hk = {
  key: 1,
  class: "form-error"
}, Ht = 10, yk = 600 * 1e3, wk = 1800 * 1e3, kk = /* @__PURE__ */ X({
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
  setup(t, { emit: c }) {
    const n = t, i = c, {
      initializeWorkspace: w,
      getInitializeProgress: g,
      validatePath: f,
      createEnvironment: u,
      getCreateProgress: r,
      getComfyUIReleases: m
    } = Oe(), p = b(n.initialStep || 1), y = b(null), _ = b(!1), C = b(n.defaultPath), z = b(!!n.detectedModelsDir), U = b(n.detectedModelsDir || ""), v = b(null), $ = b(null), D = b(null), x = b(null), S = b("my-new-env"), j = b(Ps), W = b("latest"), H = b(Ds), L = b(!0), I = b(null), E = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), O = b(!1), B = b(!1), ae = b(!1), we = b({ progress: 0, message: "" }), me = b({ progress: 0, message: "" }), oe = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], F = b(0), M = b(null), le = b(0), se = b(null), Me = P(() => {
      var $e, Ee;
      const ve = ($e = C.value) == null ? void 0 : $e.trim(), Y = !v.value, fe = !z.value || !$.value && ((Ee = U.value) == null ? void 0 : Ee.trim());
      return ve && Y && fe;
    }), ke = P(() => {
      var ve;
      return (ve = S.value) == null ? void 0 : ve.trim();
    });
    async function re() {
      var ve;
      if (v.value = null, !!((ve = C.value) != null && ve.trim()))
        try {
          const Y = await f({ path: C.value, type: "workspace" });
          Y.valid || (v.value = Y.error || "Invalid path");
        } catch (Y) {
          v.value = Y instanceof Error ? Y.message : "Validation failed";
        }
    }
    async function ne() {
      var ve;
      if ($.value = null, D.value = null, x.value = null, !!((ve = U.value) != null && ve.trim()))
        try {
          const Y = await f({ path: U.value, type: "models" });
          if (Y.valid)
            x.value = Y.model_count ?? null;
          else if ($.value = Y.error || "Invalid path", Y.suggestion) {
            D.value = Y.suggestion, U.value = Y.suggestion, $.value = null;
            const fe = await f({ path: Y.suggestion, type: "models" });
            fe.valid && (x.value = fe.model_count ?? null);
          }
        } catch (Y) {
          $.value = Y instanceof Error ? Y.message : "Validation failed";
        }
    }
    async function J() {
      var ve, Y, fe;
      if (v.value = null, $.value = null, await re(), !v.value && !(z.value && ((ve = U.value) != null && ve.trim()) && (await ne(), $.value))) {
        B.value = !0;
        try {
          await w({
            workspace_path: ((Y = C.value) == null ? void 0 : Y.trim()) || n.defaultPath,
            models_directory: z.value && ((fe = U.value) == null ? void 0 : fe.trim()) || null
          }), F.value = 0, M.value = Date.now();
          const $e = setInterval(async () => {
            if (M.value && Date.now() - M.value > yk) {
              clearInterval($e), B.value = !1, v.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Ee = await g();
              if (F.value = 0, Ee.state === "idle" && B.value) {
                clearInterval($e), B.value = !1, v.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              we.value = { progress: Ee.progress, message: Ee.message }, Ee.state === "complete" ? (clearInterval($e), B.value = !1, p.value = 2, _e()) : Ee.state === "error" && (clearInterval($e), B.value = !1, v.value = Ee.error || "Workspace creation failed");
            } catch (Ee) {
              F.value++, console.warn(`Polling failure ${F.value}/${Ht}:`, Ee), F.value >= Ht && (clearInterval($e), B.value = !1, v.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch ($e) {
          B.value = !1, v.value = $e instanceof Error ? $e.message : "Failed to create workspace";
        }
      }
    }
    async function ue() {
      ae.value = !0, I.value = null;
      try {
        const ve = {
          name: S.value.trim() || "my-new-env",
          python_version: j.value,
          comfyui_version: W.value,
          torch_backend: H.value,
          switch_after: L.value
        };
        if ((await u(ve)).status === "started") {
          le.value = 0, se.value = Date.now();
          const fe = setInterval(async () => {
            if (se.value && Date.now() - se.value > wk) {
              clearInterval(fe), ae.value = !1, I.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const $e = await r();
              if (le.value = 0, $e.state === "idle" && ae.value) {
                clearInterval(fe), ae.value = !1, I.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (me.value = {
                progress: $e.progress ?? 0,
                message: $e.message,
                phase: $e.phase
              }, $e.state === "complete") {
                clearInterval(fe), ae.value = !1;
                const Ee = $e.environment_name || ve.name;
                L.value ? i("complete", Ee) : (_.value = !1, i("environment-created-no-switch", Ee));
              } else $e.state === "error" && (clearInterval(fe), ae.value = !1, I.value = $e.error || "Environment creation failed");
            } catch ($e) {
              le.value++, console.warn(`Polling failure ${le.value}/${Ht}:`, $e), le.value >= Ht && (clearInterval(fe), ae.value = !1, I.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ve) {
        ae.value = !1, I.value = ve instanceof Error ? ve.message : "Unknown error";
      }
    }
    async function _e() {
      O.value = !0;
      try {
        E.value = await m();
      } catch (ve) {
        console.error("Failed to load ComfyUI releases:", ve);
      } finally {
        O.value = !1;
      }
    }
    function Le() {
      y.value && i("switch-environment", y.value);
    }
    return Ue(() => {
      n.detectedModelsDir && (U.value = n.detectedModelsDir), p.value === 2 && _e();
    }), (ve, Y) => (s(), T(Ke, {
      title: "WELCOME TO COMFYGIT",
      size: "lg",
      "show-close-button": !0,
      "close-on-overlay-click": !1,
      onClose: Y[12] || (Y[12] = (fe) => ve.$emit("close"))
    }, {
      body: l(() => {
        var fe, $e, Ee;
        return [
          n.setupState === "no_workspace" ? (s(), o("div", U0, [
            e("div", {
              class: ie(["step", { active: p.value === 1, complete: p.value > 1 }])
            }, [
              e("span", O0, a(p.value > 1 ? "✓" : "1"), 1),
              Y[13] || (Y[13] = e("span", { class: "step-label" }, "Workspace", -1))
            ], 2),
            Y[15] || (Y[15] = e("div", { class: "step-connector" }, null, -1)),
            e("div", {
              class: ie(["step", { active: p.value === 2 }])
            }, [...Y[14] || (Y[14] = [
              e("span", { class: "step-number" }, "2", -1),
              e("span", { class: "step-label" }, "Environment", -1)
            ])], 2)
          ])) : (s(), o("div", B0, [...Y[16] || (Y[16] = [
            e("div", { class: "step active" }, [
              e("span", { class: "step-number" }, "1"),
              e("span", { class: "step-label" }, "Environment")
            ], -1)
          ])])),
          p.value === 1 ? (s(), o("div", F0, [
            Y[20] || (Y[20] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
            e("div", A0, [
              Y[17] || (Y[17] = e("label", { class: "form-label" }, "Workspace Path", -1)),
              Ne(e("input", {
                "onUpdate:modelValue": Y[0] || (Y[0] = (ye) => C.value = ye),
                type: "text",
                class: "form-input",
                placeholder: t.defaultPath,
                onBlur: re
              }, null, 40, V0), [
                [Et, C.value]
              ]),
              v.value ? (s(), o("p", W0, a(v.value), 1)) : d("", !0)
            ]),
            e("div", j0, [
              e("label", G0, [
                Ne(e("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": Y[1] || (Y[1] = (ye) => z.value = ye)
                }, null, 512), [
                  [Qt, z.value]
                ]),
                Y[18] || (Y[18] = e("span", null, "I have existing ComfyUI models", -1))
              ])
            ]),
            z.value ? (s(), o("div", q0, [
              Y[19] || (Y[19] = e("label", { class: "form-label" }, "Models Directory", -1)),
              Ne(e("input", {
                "onUpdate:modelValue": Y[2] || (Y[2] = (ye) => U.value = ye),
                type: "text",
                class: "form-input",
                placeholder: t.detectedModelsDir || "/path/to/models",
                onBlur: ne
              }, null, 40, H0), [
                [Et, U.value]
              ]),
              t.detectedModelsDir && !U.value ? (s(), o("p", K0, " Detected: " + a(t.detectedModelsDir), 1)) : d("", !0),
              D.value ? (s(), o("p", J0, " Did you mean: " + a(D.value), 1)) : d("", !0),
              $.value ? (s(), o("p", Y0, a($.value), 1)) : d("", !0),
              x.value !== null && !$.value ? (s(), o("p", Q0, " Found " + a(x.value) + " model files ", 1)) : d("", !0)
            ])) : d("", !0),
            B.value ? (s(), T(es, {
              key: 1,
              progress: we.value.progress,
              message: we.value.message
            }, null, 8, ["progress", "message"])) : d("", !0)
          ])) : d("", !0),
          p.value === 2 ? (s(), o("div", X0, [
            n.cliInstalled ? d("", !0) : (s(), o("div", Z0, [...Y[21] || (Y[21] = [
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
            (fe = n.existingEnvironments) != null && fe.length && !_.value ? (s(), o("div", ek, [
              Y[23] || (Y[23] = e("p", { class: "wizard-intro" }, " You have existing managed environments. Switch to one, or create a new environment: ", -1)),
              e("div", tk, [
                (s(!0), o(V, null, te(n.existingEnvironments, (ye) => (s(), o("label", {
                  key: ye,
                  class: ie(["env-option", { selected: y.value === ye }])
                }, [
                  Ne(e("input", {
                    type: "radio",
                    name: "env-select",
                    value: ye,
                    "onUpdate:modelValue": Y[3] || (Y[3] = (rt) => y.value = rt)
                  }, null, 8, sk), [
                    [Kt, y.value]
                  ]),
                  e("span", ok, a(ye), 1)
                ], 2))), 128))
              ]),
              e("div", nk, [
                y.value ? (s(), T(ce, {
                  key: 0,
                  variant: "primary",
                  onClick: Le
                }, {
                  default: l(() => [
                    h(" Switch to " + a(y.value), 1)
                  ]),
                  _: 1
                })) : d("", !0),
                k(ce, {
                  variant: "secondary",
                  onClick: Y[4] || (Y[4] = (ye) => _.value = !0)
                }, {
                  default: l(() => [...Y[22] || (Y[22] = [
                    h(" + Create New Environment ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])) : d("", !0),
            _.value || !(($e = n.existingEnvironments) != null && $e.length) ? (s(), o("div", ak, [
              e("p", lk, a((Ee = n.existingEnvironments) != null && Ee.length ? "Create a new managed environment:" : "Now let's create your first managed environment. This will be an isolated ComfyUI installation with its own nodes and workflows."), 1),
              e("div", ik, [
                Y[24] || (Y[24] = e("label", { class: "form-label" }, "Environment Name", -1)),
                Ne(e("input", {
                  "onUpdate:modelValue": Y[5] || (Y[5] = (ye) => S.value = ye),
                  type: "text",
                  class: "form-input",
                  placeholder: "my-new-env"
                }, null, 512), [
                  [Et, S.value]
                ])
              ]),
              e("div", rk, [
                Y[25] || (Y[25] = e("label", { class: "form-label" }, "Python Version", -1)),
                Ne(e("select", {
                  "onUpdate:modelValue": Y[6] || (Y[6] = (ye) => j.value = ye),
                  class: "form-select"
                }, [
                  (s(!0), o(V, null, te(xe(Ls), (ye) => (s(), o("option", {
                    key: ye,
                    value: ye
                  }, a(ye), 9, dk))), 128))
                ], 512), [
                  [Mt, j.value]
                ])
              ]),
              e("div", ck, [
                Y[26] || (Y[26] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                Ne(e("select", {
                  "onUpdate:modelValue": Y[7] || (Y[7] = (ye) => W.value = ye),
                  class: "form-select",
                  disabled: O.value
                }, [
                  (s(!0), o(V, null, te(E.value, (ye) => (s(), o("option", {
                    key: ye.tag_name,
                    value: ye.tag_name
                  }, a(ye.name), 9, mk))), 128))
                ], 8, uk), [
                  [Mt, W.value]
                ])
              ]),
              e("div", vk, [
                Y[27] || (Y[27] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                Ne(e("select", {
                  "onUpdate:modelValue": Y[8] || (Y[8] = (ye) => H.value = ye),
                  class: "form-select"
                }, [
                  (s(!0), o(V, null, te(xe(fs), (ye) => (s(), o("option", {
                    key: ye,
                    value: ye
                  }, a(ye) + a(ye === "auto" ? " (detect GPU)" : ""), 9, fk))), 128))
                ], 512), [
                  [Mt, H.value]
                ])
              ]),
              e("div", gk, [
                e("label", pk, [
                  Ne(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": Y[9] || (Y[9] = (ye) => L.value = ye)
                  }, null, 512), [
                    [Qt, L.value]
                  ]),
                  Y[28] || (Y[28] = e("span", null, "Switch to this environment after creation", -1))
                ])
              ]),
              ae.value ? (s(), T(es, {
                key: 0,
                progress: me.value.progress,
                message: me.value.message,
                "current-phase": me.value.phase,
                "show-steps": !0,
                steps: oe
              }, null, 8, ["progress", "message", "current-phase"])) : d("", !0),
              I.value ? (s(), o("div", hk, a(I.value), 1)) : d("", !0)
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: l(() => {
        var fe, $e;
        return [
          p.value === 1 ? (s(), T(ce, {
            key: 0,
            variant: "primary",
            disabled: !Me.value || B.value,
            onClick: J
          }, {
            default: l(() => [
              h(a(B.value ? "Creating..." : "Next"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : p.value === 2 ? (s(), o(V, { key: 1 }, [
            n.setupState === "no_workspace" ? (s(), T(ce, {
              key: 0,
              variant: "secondary",
              disabled: ae.value,
              onClick: Y[10] || (Y[10] = (Ee) => p.value = 1)
            }, {
              default: l(() => [...Y[29] || (Y[29] = [
                h(" Back ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : (fe = n.existingEnvironments) != null && fe.length && _.value ? (s(), T(ce, {
              key: 1,
              variant: "secondary",
              disabled: ae.value,
              onClick: Y[11] || (Y[11] = (Ee) => _.value = !1)
            }, {
              default: l(() => [...Y[30] || (Y[30] = [
                h(" Back ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : d("", !0),
            _.value || !(($e = n.existingEnvironments) != null && $e.length) ? (s(), T(ce, {
              key: 2,
              variant: "primary",
              disabled: !ke.value || ae.value,
              onClick: ue
            }, {
              default: l(() => [
                h(a(ae.value ? "Creating..." : L.value ? "Create & Switch" : "Create Environment"), 1)
              ]),
              _: 1
            }, 8, ["disabled"])) : d("", !0)
          ], 64)) : d("", !0)
        ];
      }),
      _: 1
    }));
  }
}), bk = /* @__PURE__ */ Z(kk, [["__scopeId", "data-v-b8c35e2d"]]), _k = { class: "comfygit-panel" }, $k = { class: "panel-header" }, Ck = { class: "header-left" }, xk = {
  key: 0,
  class: "header-info"
}, Sk = { class: "header-actions" }, Ik = { class: "env-switcher" }, Ek = {
  key: 0,
  class: "header-info"
}, Mk = { class: "branch-name" }, Tk = { class: "panel-main" }, zk = { class: "sidebar" }, Rk = { class: "sidebar-content" }, Lk = { class: "sidebar-section" }, Pk = { class: "sidebar-section" }, Dk = { class: "sidebar-section" }, Nk = { class: "content-area" }, Uk = {
  key: 0,
  class: "error-message"
}, Ok = {
  key: 1,
  class: "loading"
}, Bk = { class: "dialog-content env-selector-dialog" }, Fk = { class: "dialog-header" }, Ak = { class: "dialog-body" }, Vk = { class: "env-list" }, Wk = { class: "env-info" }, jk = { class: "env-name-row" }, Gk = { class: "env-indicator" }, qk = { class: "env-name" }, Hk = {
  key: 0,
  class: "env-branch"
}, Kk = {
  key: 1,
  class: "current-label"
}, Jk = { class: "env-stats" }, Yk = ["onClick"], Qk = { class: "toast-container" }, Xk = { class: "toast-message" }, Zk = /* @__PURE__ */ X({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const n = c, {
      getStatus: i,
      getHistory: w,
      getBranches: g,
      checkout: f,
      createBranch: u,
      switchBranch: r,
      deleteBranch: m,
      getEnvironments: p,
      switchEnvironment: y,
      getSwitchProgress: _,
      deleteEnvironment: C,
      syncEnvironmentManually: z,
      repairWorkflowModels: U,
      getSetupStatus: v
    } = Oe(), $ = Es();
    function D(G) {
      window.open(G, "_blank", "noopener,noreferrer");
    }
    const x = b(null), S = b([]), j = b([]), W = b([]), H = P(() => W.value.find((G) => G.is_current)), L = b(null), I = b(!1), E = b(1), O = P(() => {
      var G;
      return ((G = L.value) == null ? void 0 : G.state) || "managed";
    }), B = b(!1), ae = b(null), we = b(null), me = b(!1), oe = b(null), F = b(null), M = b(null), le = b(!1), se = b(!1), Me = b(""), ke = b({ state: "idle", progress: 0, message: "" });
    let re = null, ne = null;
    const J = b("status"), ue = b("this-env");
    function _e(G, R) {
      J.value = G, ue.value = R;
    }
    function Le(G) {
      const ge = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[G];
      ge && _e(ge.view, ge.section);
    }
    function ve() {
      _e("branches", "this-env");
    }
    function Y() {
      n("close"), setTimeout(() => {
        var R;
        const G = document.querySelectorAll("button.comfyui-button");
        for (const ge of G)
          if (((R = ge.textContent) == null ? void 0 : R.trim()) === "Manager") {
            ge.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const fe = b(null), $e = b(!1), Ee = b(!1), ye = b([]);
    let rt = 0;
    function be(G, R = "info", ge = 3e3) {
      const Te = ++rt;
      return ye.value.push({ id: Te, message: G, type: R }), ge > 0 && setTimeout(() => {
        ye.value = ye.value.filter((Ve) => Ve.id !== Te);
      }, ge), Te;
    }
    function Ae(G) {
      ye.value = ye.value.filter((R) => R.id !== G);
    }
    function bt(G, R) {
      be(G, R);
    }
    const dt = P(() => {
      if (!x.value) return "neutral";
      const G = x.value.workflows, R = G.new.length > 0 || G.modified.length > 0 || G.deleted.length > 0 || x.value.has_changes;
      return x.value.comparison.is_synced ? R ? "warning" : "success" : "error";
    });
    P(() => x.value ? dt.value === "success" ? "All synced" : dt.value === "warning" ? "Uncommitted changes" : dt.value === "error" ? "Not synced" : "" : "");
    async function De() {
      B.value = !0, ae.value = null;
      try {
        const [G, R, ge, Te] = await Promise.all([
          i(!0),
          w(),
          g(),
          p()
        ]);
        x.value = G, S.value = R.commits, j.value = ge.branches, W.value = Te, n("statusUpdate", G), oe.value && await oe.value.loadWorkflows(!0);
      } catch (G) {
        ae.value = G instanceof Error ? G.message : "Failed to load status", x.value = null, S.value = [], j.value = [];
      } finally {
        B.value = !1;
      }
    }
    function _t(G) {
      we.value = G;
    }
    async function yt(G) {
      var ge;
      we.value = null;
      const R = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      fe.value = {
        title: R ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: R ? "You have uncommitted changes that will be lost." : `Checkout commit ${G.short_hash || ((ge = G.hash) == null ? void 0 : ge.slice(0, 7))}?`,
        details: R ? hs() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: R,
        onConfirm: async () => {
          var We;
          fe.value = null, N();
          const Te = be(`Checking out ${G.short_hash || ((We = G.hash) == null ? void 0 : We.slice(0, 7))}...`, "info", 0), Ve = await f(G.hash, R);
          Ae(Te), Ve.status === "success" ? be("Restarting ComfyUI...", "success") : be(Ve.message || "Checkout failed", "error");
        }
      };
    }
    async function ct(G) {
      const R = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      fe.value = {
        title: R ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: R ? "You have uncommitted changes." : `Switch to branch "${G}"?`,
        details: R ? hs() : void 0,
        warning: R ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          fe.value = null, N();
          const ge = be(`Switching to ${G}...`, "info", 0), Te = await r(G, R);
          Ae(ge), Te.status === "success" ? be("Restarting ComfyUI...", "success") : be(Te.message || "Branch switch failed", "error");
        }
      };
    }
    async function $t(G) {
      const R = be(`Creating branch ${G}...`, "info", 0), ge = await u(G);
      Ae(R), ge.status === "success" ? (be(`Branch "${G}" created`, "success"), await De()) : be(ge.message || "Failed to create branch", "error");
    }
    async function ut(G, R = !1) {
      const ge = async (Te) => {
        var We;
        const Ve = be(`Deleting branch ${G}...`, "info", 0);
        try {
          const vt = await m(G, Te);
          Ae(Ve), vt.status === "success" ? (be(`Branch "${G}" deleted`, "success"), await De()) : (We = vt.message) != null && We.includes("not fully merged") ? fe.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${G}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              fe.value = null, await ge(!0);
            }
          } : be(vt.message || "Failed to delete branch", "error");
        } catch (vt) {
          Ae(Ve);
          const Lt = vt instanceof Error ? vt.message : "Failed to delete branch";
          Lt.includes("not fully merged") ? fe.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${G}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              fe.value = null, await ge(!0);
            }
          } : be(Lt, "error");
        }
      };
      fe.value = {
        title: "Delete Branch",
        message: `Delete branch "${G}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          fe.value = null, await ge(R);
        }
      };
    }
    async function K(G) {
      we.value = null;
      const R = prompt("Enter branch name:");
      if (R) {
        const ge = be(`Creating branch ${R}...`, "info", 0), Te = await u(R, G.hash);
        Ae(ge), Te.status === "success" ? (be(`Branch "${R}" created from ${G.short_hash}`, "success"), await De()) : be(Te.message || "Failed to create branch", "error");
      }
    }
    function N() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function A() {
      fe.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var G;
          fe.value = null, N(), be("Restarting environment...", "info");
          try {
            (G = window.app) != null && G.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Q() {
      fe.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var G;
          fe.value = null, be("Stopping environment...", "info");
          try {
            (G = window.app) != null && G.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function pe(G) {
      me.value = !1, Me.value = G, le.value = !0;
    }
    async function nt() {
      le.value = !1, se.value = !0, N(), ke.value = {
        progress: 10,
        state: Je(10),
        message: mt(10)
      };
      try {
        await y(Me.value), xt(), ss();
      } catch (G) {
        Ye(), se.value = !1, be(`Failed to initiate switch: ${G instanceof Error ? G.message : "Unknown error"}`, "error"), ke.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Je(G) {
      return G >= 100 ? "complete" : G >= 80 ? "validating" : G >= 60 ? "starting" : G >= 30 ? "syncing" : "preparing";
    }
    function mt(G) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Je(G)] || "";
    }
    function xt() {
      if (ne) return;
      let G = 10;
      const R = 60, ge = 5e3, Te = 100, Ve = (R - G) / (ge / Te);
      ne = window.setInterval(() => {
        if (G += Ve, G >= R && (G = R, Ye()), ke.value.progress < R) {
          const We = Math.floor(G);
          ke.value = {
            progress: We,
            state: Je(We),
            message: mt(We)
          };
        }
      }, Te);
    }
    function Ye() {
      ne && (clearInterval(ne), ne = null);
    }
    function ss() {
      re || (re = window.setInterval(async () => {
        try {
          let G = await $.getStatus();
          if ((!G || G.state === "idle") && (G = await _()), !G)
            return;
          const R = G.progress || 0;
          R >= 60 && Ye();
          const ge = Math.max(R, ke.value.progress), Te = G.state && G.state !== "idle" && G.state !== "unknown", Ve = Te ? G.state : Je(ge), We = Te && G.message || mt(ge);
          ke.value = {
            state: Ve,
            progress: ge,
            message: We
          }, G.state === "complete" ? (Ye(), q(), se.value = !1, be(`✓ Switched to ${Me.value}`, "success"), await De(), Me.value = "") : G.state === "rolled_back" ? (Ye(), q(), se.value = !1, be("Switch failed, restored previous environment", "warning"), Me.value = "") : G.state === "critical_failure" && (Ye(), q(), se.value = !1, be(`Critical error during switch: ${G.message}`, "error"), Me.value = "");
        } catch (G) {
          console.error("Failed to poll switch progress:", G);
        }
      }, 1e3));
    }
    function q() {
      Ye(), re && (clearInterval(re), re = null);
    }
    function de() {
      var G;
      le.value = !1, Me.value = "", (G = L.value) != null && G.state && L.value.state !== "managed" && (E.value = L.value.state === "no_workspace" ? 1 : 2, I.value = !0);
    }
    async function Ce() {
      $e.value = !1, await De(), be("✓ Changes committed", "success");
    }
    async function Re() {
      Ee.value = !1;
      const G = be("Syncing environment...", "info", 0);
      try {
        const R = await z("skip", !0);
        if (Ae(G), R.status === "success") {
          const ge = [];
          R.nodes_installed.length && ge.push(`${R.nodes_installed.length} installed`), R.nodes_removed.length && ge.push(`${R.nodes_removed.length} removed`);
          const Te = ge.length ? `: ${ge.join(", ")}` : "";
          be(`✓ Environment synced${Te}`, "success"), await De();
        } else {
          const ge = R.errors.length ? R.errors.join("; ") : R.message;
          be(`Sync failed: ${ge}`, "error");
        }
      } catch (R) {
        Ae(G), be(`Sync error: ${R instanceof Error ? R.message : "Unknown error"}`, "error");
      }
    }
    async function Qe(G) {
      var R;
      try {
        const ge = await U(G);
        ge.failed.length === 0 ? be(`✓ Repaired ${ge.success} workflow${ge.success === 1 ? "" : "s"}`, "success") : be(`Repaired ${ge.success}, failed: ${ge.failed.length}`, "warning"), await De();
      } catch (ge) {
        be(`Repair failed: ${ge instanceof Error ? ge.message : "Unknown error"}`, "error");
      } finally {
        (R = M.value) == null || R.resetRepairingState();
      }
    }
    async function St(G, R) {
      be(`Environment '${G}' created`, "success"), await De(), F.value && await F.value.loadEnvironments(), R && await pe(G);
    }
    async function Gt(G) {
      var R;
      if (((R = H.value) == null ? void 0 : R.name) === G) {
        be("Cannot delete the currently active environment. Switch to another environment first.", "error");
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
            const ge = await C(G);
            ge.status === "success" ? (be(`Environment "${G}" deleted`, "success"), await De(), F.value && await F.value.loadEnvironments()) : be(ge.message || "Failed to delete environment", "error");
          } catch (ge) {
            be(`Error deleting environment: ${ge instanceof Error ? ge.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function qt(G) {
      I.value = !1;
      try {
        L.value = await v();
      } catch {
      }
      await pe(G);
    }
    function Ws() {
      I.value = !1, n("close");
    }
    async function js(G) {
      await pe(G);
    }
    async function Gs(G) {
      await De(), await pe(G);
    }
    async function qs(G) {
      L.value = await v(), console.log(`Environment '${G}' created. Available for switching.`);
    }
    function Hs() {
      _e("environments", "all-envs"), setTimeout(() => {
        var G;
        (G = F.value) == null || G.openCreateModal();
      }, 100);
    }
    function hs() {
      if (!x.value) return [];
      const G = [], R = x.value.workflows;
      return R.new.length && G.push(`${R.new.length} new workflow(s)`), R.modified.length && G.push(`${R.modified.length} modified workflow(s)`), R.deleted.length && G.push(`${R.deleted.length} deleted workflow(s)`), G;
    }
    return Ue(async () => {
      try {
        if (L.value = await v(), L.value.state === "no_workspace") {
          I.value = !0, E.value = 1;
          return;
        }
        if (L.value.state === "empty_workspace") {
          I.value = !0, E.value = 2;
          return;
        }
        if (L.value.state === "unmanaged") {
          I.value = !0, E.value = 2;
          return;
        }
      } catch (G) {
        console.warn("Setup status check failed, proceeding normally:", G);
      }
      await De();
    }), (G, R) => {
      var ge, Te, Ve, We, vt, Lt, ys, ws, ks;
      return s(), o("div", _k, [
        e("div", $k, [
          e("div", Ck, [
            R[34] || (R[34] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            x.value ? (s(), o("div", xk)) : d("", !0)
          ]),
          e("div", Sk, [
            e("button", {
              class: "sponsor-btn",
              onClick: R[0] || (R[0] = (he) => D("https://github.com/sponsors/comfyhub-org")),
              title: "Sponsor ComfyHub",
              "aria-label": "Sponsor ComfyHub on GitHub"
            }, [...R[35] || (R[35] = [
              h(" Sponsor ", -1),
              e("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
              ], -1)
            ])]),
            e("button", {
              class: "icon-btn social-link",
              onClick: R[1] || (R[1] = (he) => D("https://discord.gg/2h5rSTeh6Y")),
              title: "Join Discord",
              "aria-label": "Join ComfyHub Discord"
            }, [...R[36] || (R[36] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.027-.07 8.735 8.735 0 0 1-1.248-.595.05.05 0 0 1-.005-.083c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085c-.399.233-.813.44-1.249.594a.05.05 0 0 0-.027.07c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019zM5.347 10.64c-.79 0-1.44-.724-1.44-1.612 0-.889.637-1.613 1.44-1.613.807 0 1.451.733 1.44 1.613 0 .888-.637 1.612-1.44 1.612zm5.316 0c-.788 0-1.44-.724-1.44-1.612 0-.889.637-1.613 1.44-1.613.808 0 1.451.733 1.44 1.613 0 .888-.632 1.612-1.44 1.612z" })
              ], -1)
            ])]),
            e("button", {
              class: "icon-btn social-link",
              onClick: R[2] || (R[2] = (he) => D("https://x.com/akatz_ai")),
              title: "Follow on X",
              "aria-label": "Follow on X"
            }, [...R[37] || (R[37] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633z" })
              ], -1)
            ])]),
            e("button", {
              class: "icon-btn social-link",
              onClick: R[3] || (R[3] = (he) => D("https://github.com/comfyhub-org/comfygit")),
              title: "View on GitHub",
              "aria-label": "View ComfyGit on GitHub"
            }, [...R[38] || (R[38] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" })
              ], -1)
            ])]),
            e("button", {
              class: "icon-btn social-link",
              onClick: R[4] || (R[4] = (he) => D("https://docs.comfyhub.org/comfygit/")),
              title: "Documentation",
              "aria-label": "View ComfyGit Documentation"
            }, [...R[39] || (R[39] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" })
              ], -1)
            ])]),
            R[42] || (R[42] = e("span", { class: "header-divider" }, null, -1)),
            e("button", {
              class: ie(["icon-btn", { spinning: B.value }]),
              onClick: De,
              title: "Refresh"
            }, [...R[40] || (R[40] = [
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
              onClick: R[5] || (R[5] = (he) => n("close")),
              title: "Close"
            }, [...R[41] || (R[41] = [
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
        e("div", Ik, [
          e("div", { class: "env-switcher-header" }, [
            R[43] || (R[43] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: A
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: Q
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: R[6] || (R[6] = (he) => _e("environments", "all-envs"))
          }, [
            x.value ? (s(), o("div", Ek, [
              e("span", null, a(((ge = H.value) == null ? void 0 : ge.name) || ((Te = x.value) == null ? void 0 : Te.environment) || "Loading..."), 1),
              e("span", Mk, "(" + a(x.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            R[44] || (R[44] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Tk, [
          e("div", zk, [
            e("div", Rk, [
              e("div", Lk, [
                R[45] || (R[45] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                e("button", {
                  class: ie(["sidebar-item", { active: J.value === "status" && ue.value === "this-env" }]),
                  onClick: R[7] || (R[7] = (he) => _e("status", "this-env"))
                }, " STATUS ", 2),
                e("button", {
                  class: ie(["sidebar-item", { active: J.value === "workflows" }]),
                  onClick: R[8] || (R[8] = (he) => _e("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                e("button", {
                  class: ie(["sidebar-item", { active: J.value === "models-env" }]),
                  onClick: R[9] || (R[9] = (he) => _e("models-env", "this-env"))
                }, " MODELS ", 2),
                e("button", {
                  class: ie(["sidebar-item", { active: J.value === "branches" }]),
                  onClick: R[10] || (R[10] = (he) => _e("branches", "this-env"))
                }, " BRANCHES ", 2),
                e("button", {
                  class: ie(["sidebar-item", { active: J.value === "history" }]),
                  onClick: R[11] || (R[11] = (he) => _e("history", "this-env"))
                }, " HISTORY ", 2),
                e("button", {
                  class: ie(["sidebar-item", { active: J.value === "nodes" }]),
                  onClick: R[12] || (R[12] = (he) => _e("nodes", "this-env"))
                }, " NODES ", 2),
                e("button", {
                  class: ie(["sidebar-item", { active: J.value === "debug-env" }]),
                  onClick: R[13] || (R[13] = (he) => _e("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              R[48] || (R[48] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", Pk, [
                R[46] || (R[46] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                e("button", {
                  class: ie(["sidebar-item", { active: J.value === "environments" }]),
                  onClick: R[14] || (R[14] = (he) => _e("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                e("button", {
                  class: ie(["sidebar-item", { active: J.value === "model-index" }]),
                  onClick: R[15] || (R[15] = (he) => _e("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                e("button", {
                  class: ie(["sidebar-item", { active: J.value === "settings" }]),
                  onClick: R[16] || (R[16] = (he) => _e("settings", "all-envs"))
                }, " SETTINGS ", 2),
                e("button", {
                  class: ie(["sidebar-item", { active: J.value === "debug-workspace" }]),
                  onClick: R[17] || (R[17] = (he) => _e("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              R[49] || (R[49] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", Dk, [
                R[47] || (R[47] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                e("button", {
                  class: ie(["sidebar-item", { active: J.value === "export" }]),
                  onClick: R[18] || (R[18] = (he) => _e("export", "sharing"))
                }, " EXPORT ", 2),
                e("button", {
                  class: ie(["sidebar-item", { active: J.value === "import" }]),
                  onClick: R[19] || (R[19] = (he) => _e("import", "sharing"))
                }, " IMPORT ", 2),
                e("button", {
                  class: ie(["sidebar-item", { active: J.value === "remotes" }]),
                  onClick: R[20] || (R[20] = (he) => _e("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            R[50] || (R[50] = Qs('<div class="sidebar-footer" data-v-cb62abbf><span class="version" data-v-cb62abbf>v0.0.1</span><span class="made-by" data-v-cb62abbf>made with <svg class="heart-icon" width="10" height="10" viewBox="0 0 16 16" fill="currentColor" data-v-cb62abbf><path d="M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" data-v-cb62abbf></path></svg> by Akatz</span></div>', 1))
          ]),
          e("div", Nk, [
            ae.value ? (s(), o("div", Uk, a(ae.value), 1)) : !x.value && J.value === "status" ? (s(), o("div", Ok, " Loading status... ")) : (s(), o(V, { key: 2 }, [
              J.value === "status" ? (s(), T(xa, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: M,
                status: x.value,
                "setup-state": O.value,
                onSwitchBranch: ve,
                onCommitChanges: R[21] || (R[21] = (he) => $e.value = !0),
                onSyncEnvironment: R[22] || (R[22] = (he) => Ee.value = !0),
                onViewWorkflows: R[23] || (R[23] = (he) => _e("workflows", "this-env")),
                onViewHistory: R[24] || (R[24] = (he) => _e("history", "this-env")),
                onViewDebug: R[25] || (R[25] = (he) => _e("debug-env", "this-env")),
                onRepairMissingModels: Qe,
                onStartSetup: R[26] || (R[26] = (he) => I.value = !0),
                onViewEnvironments: R[27] || (R[27] = (he) => _e("environments", "all-envs")),
                onCreateEnvironment: Hs
              }, null, 8, ["status", "setup-state"])) : J.value === "workflows" ? (s(), T(Hu, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: oe,
                onRefresh: De
              }, null, 512)) : J.value === "models-env" ? (s(), T(Mm, {
                key: 2,
                onNavigate: Le
              })) : J.value === "branches" ? (s(), T(Fa, {
                key: 3,
                branches: j.value,
                current: ((Ve = x.value) == null ? void 0 : Ve.branch) || null,
                onSwitch: ct,
                onCreate: $t,
                onDelete: ut
              }, null, 8, ["branches", "current"])) : J.value === "history" ? (s(), T(Qa, {
                key: 4,
                commits: S.value,
                onSelect: _t,
                onCheckout: yt
              }, null, 8, ["commits"])) : J.value === "nodes" ? (s(), T(hv, {
                key: 5,
                onOpenNodeManager: Y
              })) : J.value === "debug-env" ? (s(), T($p, { key: 6 })) : J.value === "environments" ? (s(), T(Sh, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: F,
                onSwitch: pe,
                onCreated: St,
                onDelete: Gt
              }, null, 512)) : J.value === "model-index" ? (s(), T(Jm, {
                key: 8,
                onRefresh: De
              })) : J.value === "settings" ? (s(), T(wp, { key: 9 })) : J.value === "debug-workspace" ? (s(), T(bp, { key: 10 })) : J.value === "export" ? (s(), T(n1, { key: 11 })) : J.value === "import" ? (s(), T(Jy, {
                key: 12,
                onImportCompleteSwitch: Gs
              })) : J.value === "remotes" ? (s(), T(ep, {
                key: 13,
                onToast: bt
              })) : d("", !0)
            ], 64))
          ])
        ]),
        we.value ? (s(), T(vw, {
          key: 0,
          commit: we.value,
          onClose: R[28] || (R[28] = (he) => we.value = null),
          onCheckout: yt,
          onCreateBranch: K
        }, null, 8, ["commit"])) : d("", !0),
        fe.value ? (s(), T(yw, {
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
          onCancel: R[29] || (R[29] = (he) => fe.value = null),
          onSecondary: fe.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        k(p0, {
          show: le.value,
          "from-environment": ((We = H.value) == null ? void 0 : We.name) || "unknown",
          "to-environment": Me.value,
          onConfirm: nt,
          onClose: de
        }, null, 8, ["show", "from-environment", "to-environment"]),
        $e.value && x.value ? (s(), T(Us, {
          key: 2,
          status: x.value,
          "as-modal": !0,
          onClose: R[30] || (R[30] = (he) => $e.value = !1),
          onCommitted: Ce
        }, null, 8, ["status"])) : d("", !0),
        Ee.value && x.value ? (s(), T(N0, {
          key: 3,
          show: Ee.value,
          "mismatch-details": {
            missing_nodes: x.value.comparison.missing_nodes,
            extra_nodes: x.value.comparison.extra_nodes
          },
          onConfirm: Re,
          onClose: R[31] || (R[31] = (he) => Ee.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : d("", !0),
        k(I0, {
          show: se.value,
          state: ke.value.state,
          progress: ke.value.progress,
          message: ke.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        me.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: R[33] || (R[33] = ze((he) => me.value = !1, ["self"]))
        }, [
          e("div", Bk, [
            e("div", Fk, [
              R[52] || (R[52] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: R[32] || (R[32] = (he) => me.value = !1)
              }, [...R[51] || (R[51] = [
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
            e("div", Ak, [
              R[53] || (R[53] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", Vk, [
                (s(!0), o(V, null, te(W.value, (he) => (s(), o("div", {
                  key: he.name,
                  class: ie(["env-item", { current: he.is_current }])
                }, [
                  e("div", Wk, [
                    e("div", jk, [
                      e("span", Gk, a(he.is_current ? "●" : "○"), 1),
                      e("span", qk, a(he.name), 1),
                      he.current_branch ? (s(), o("span", Hk, "(" + a(he.current_branch) + ")", 1)) : d("", !0),
                      he.is_current ? (s(), o("span", Kk, "CURRENT")) : d("", !0)
                    ]),
                    e("div", Jk, a(he.workflow_count) + " workflows • " + a(he.node_count) + " nodes ", 1)
                  ]),
                  he.is_current ? d("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (l_) => pe(he.name)
                  }, " SWITCH ", 8, Yk))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        I.value ? (s(), T(bk, {
          key: 5,
          "default-path": ((vt = L.value) == null ? void 0 : vt.default_path) || "~/comfygit",
          "detected-models-dir": ((Lt = L.value) == null ? void 0 : Lt.detected_models_dir) || null,
          "initial-step": E.value,
          "existing-environments": ((ys = L.value) == null ? void 0 : ys.environments) || [],
          "cli-installed": ((ws = L.value) == null ? void 0 : ws.cli_installed) ?? !0,
          "setup-state": ((ks = L.value) == null ? void 0 : ks.state) || "no_workspace",
          onComplete: qt,
          onClose: Ws,
          onSwitchEnvironment: js,
          onEnvironmentCreatedNoSwitch: qs
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state"])) : d("", !0),
        e("div", Qk, [
          k(Xs, { name: "toast" }, {
            default: l(() => [
              (s(!0), o(V, null, te(ye.value, (he) => (s(), o("div", {
                key: he.id,
                class: ie(["toast", he.type])
              }, [
                e("span", Xk, a(he.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), eb = /* @__PURE__ */ Z(Zk, [["__scopeId", "data-v-cb62abbf"]]), tb = { class: "item-header" }, sb = { class: "item-info" }, ob = { class: "filename" }, nb = { class: "metadata" }, ab = { class: "size" }, lb = {
  key: 0,
  class: "type"
}, ib = { class: "item-actions" }, rb = {
  key: 0,
  class: "progress-section"
}, db = { class: "progress-bar" }, cb = { class: "progress-stats" }, ub = { class: "downloaded" }, mb = { class: "speed" }, vb = {
  key: 0,
  class: "eta"
}, fb = {
  key: 1,
  class: "status-msg paused"
}, gb = {
  key: 2,
  class: "status-msg queued"
}, pb = {
  key: 3,
  class: "status-msg completed"
}, hb = {
  key: 4,
  class: "status-msg failed"
}, yb = {
  key: 0,
  class: "retries"
}, wb = /* @__PURE__ */ X({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: c }) {
    const n = c;
    function i(f) {
      if (f === 0) return "?";
      const u = f / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(f / (1024 * 1024)).toFixed(1)} MB`;
    }
    function w(f) {
      return f === 0 ? "-" : `${(f / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function g(f) {
      if (f < 60) return `${Math.round(f)}s`;
      const u = Math.floor(f / 60);
      return u < 60 ? `${u}m` : `${Math.floor(u / 60)}h ${u % 60}m`;
    }
    return (f, u) => (s(), o("div", {
      class: ie(["download-item", `status-${t.item.status}`])
    }, [
      e("div", tb, [
        e("div", sb, [
          e("div", ob, a(t.item.filename), 1),
          e("div", nb, [
            e("span", ab, a(i(t.item.size)), 1),
            t.item.type ? (s(), o("span", lb, a(t.item.type), 1)) : d("", !0)
          ])
        ]),
        e("div", ib, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: u[0] || (u[0] = (r) => n("cancel")),
            title: "Cancel"
          }, " × ")) : d("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: u[1] || (u[1] = (r) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : d("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: u[2] || (u[2] = (r) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : d("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: u[3] || (u[3] = (r) => n("remove")),
            title: "Remove"
          }, " × ")) : d("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", rb, [
        e("div", db, [
          e("div", {
            class: "progress-fill",
            style: gt({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", cb, [
          e("span", ub, a(i(t.item.downloaded)) + " / " + a(i(t.item.size)), 1),
          e("span", mb, a(w(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", vb, a(g(t.item.eta)), 1)) : d("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", fb, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", gb, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", pb, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", hb, [
        h(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", yb, "(" + a(t.item.retries) + " retries)", 1)) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ut = /* @__PURE__ */ Z(wb, [["__scopeId", "data-v-2110df65"]]), kb = { class: "queue-title" }, bb = { class: "count" }, _b = { class: "queue-actions" }, $b = { class: "action-label" }, Cb = {
  key: 0,
  class: "overall-progress"
}, xb = { class: "progress-bar" }, Sb = {
  key: 0,
  class: "current-mini"
}, Ib = { class: "filename" }, Eb = { class: "speed" }, Mb = {
  key: 1,
  class: "queue-content"
}, Tb = {
  key: 0,
  class: "section"
}, zb = {
  key: 1,
  class: "section"
}, Rb = { class: "section-header" }, Lb = { class: "section-label paused" }, Pb = { class: "items-list" }, Db = {
  key: 2,
  class: "section"
}, Nb = { class: "section-header" }, Ub = { class: "section-label" }, Ob = { class: "items-list" }, Bb = {
  key: 3,
  class: "section"
}, Fb = { class: "section-header" }, Ab = { class: "section-label" }, Vb = { class: "items-list" }, Wb = {
  key: 4,
  class: "section"
}, jb = { class: "section-header" }, Gb = { class: "section-label failed" }, qb = { class: "items-list" }, Hb = /* @__PURE__ */ X({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: n,
      queuedItems: i,
      completedItems: w,
      failedItems: g,
      pausedItems: f,
      hasItems: u,
      activeCount: r,
      cancelDownload: m,
      retryDownload: p,
      resumeDownload: y,
      resumeAllPaused: _,
      removeItem: C,
      clearCompleted: z
    } = jt(), U = b(!1);
    let v = null;
    kt(
      () => ({
        active: r.value,
        failed: g.value.length,
        paused: f.value.length,
        completed: w.value.length
      }),
      (S, j) => {
        v && (clearTimeout(v), v = null);
        const W = S.active === 0 && S.failed === 0 && S.paused === 0 && S.completed > 0, H = j && (j.active > 0 || j.paused > 0);
        W && H && (v = setTimeout(() => {
          z(), v = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const $ = P(() => {
      var W;
      if (c.items.length === 0) return 0;
      const S = w.value.length, j = ((W = n.value) == null ? void 0 : W.progress) || 0;
      return Math.round((S + j / 100) / c.items.length * 100);
    });
    function D(S) {
      m(S);
    }
    function x(S) {
      return S === 0 ? "" : `${(S / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (S, j) => (s(), T(Fe, { to: "body" }, [
      xe(u) ? (s(), o("div", {
        key: 0,
        class: ie(["model-download-queue", { minimized: !U.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: j[0] || (j[0] = (W) => U.value = !U.value)
        }, [
          e("div", kb, [
            j[4] || (j[4] = e("span", { class: "icon" }, "↓", -1)),
            j[5] || (j[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", bb, "(" + a(xe(r)) + "/" + a(xe(c).items.length) + ")", 1)
          ]),
          e("div", _b, [
            e("span", $b, a(U.value ? "minimize" : "expand"), 1)
          ])
        ]),
        U.value ? (s(), o("div", Mb, [
          xe(n) ? (s(), o("div", Tb, [
            j[6] || (j[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            k(Ut, {
              item: xe(n),
              onCancel: j[1] || (j[1] = (W) => D(xe(n).id))
            }, null, 8, ["item"])
          ])) : d("", !0),
          xe(f).length > 0 ? (s(), o("div", zb, [
            e("div", Rb, [
              e("span", Lb, "Paused (" + a(xe(f).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: j[2] || (j[2] = //@ts-ignore
                (...W) => xe(_) && xe(_)(...W))
              }, "Resume All")
            ]),
            e("div", Pb, [
              (s(!0), o(V, null, te(xe(f), (W) => (s(), T(Ut, {
                key: W.id,
                item: W,
                onResume: (H) => xe(y)(W.id),
                onRemove: (H) => xe(C)(W.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          xe(i).length > 0 ? (s(), o("div", Db, [
            e("div", Nb, [
              e("span", Ub, "Queued (" + a(xe(i).length) + ")", 1)
            ]),
            e("div", Ob, [
              (s(!0), o(V, null, te(xe(i), (W) => (s(), T(Ut, {
                key: W.id,
                item: W,
                onCancel: (H) => D(W.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : d("", !0),
          xe(w).length > 0 ? (s(), o("div", Bb, [
            e("div", Fb, [
              e("span", Ab, "Completed (" + a(xe(w).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: j[3] || (j[3] = //@ts-ignore
                (...W) => xe(z) && xe(z)(...W))
              }, "Clear")
            ]),
            e("div", Vb, [
              (s(!0), o(V, null, te(xe(w).slice(0, 3), (W) => (s(), T(Ut, {
                key: W.id,
                item: W,
                onRemove: (H) => xe(C)(W.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          xe(g).length > 0 ? (s(), o("div", Wb, [
            e("div", jb, [
              e("span", Gb, "Failed (" + a(xe(g).length) + ")", 1)
            ]),
            e("div", qb, [
              (s(!0), o(V, null, te(xe(g), (W) => (s(), T(Ut, {
                key: W.id,
                item: W,
                onRetry: (H) => xe(p)(W.id),
                onRemove: (H) => xe(C)(W.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : d("", !0)
        ])) : (s(), o("div", Cb, [
          e("div", xb, [
            e("div", {
              class: "progress-fill",
              style: gt({ width: `${$.value}%` })
            }, null, 4)
          ]),
          xe(n) ? (s(), o("div", Sb, [
            e("span", Ib, a(xe(n).filename), 1),
            e("span", Eb, a(x(xe(n).speed)), 1)
          ])) : d("", !0)
        ]))
      ], 2)) : d("", !0)
    ]));
  }
}), Kb = /* @__PURE__ */ Z(Hb, [["__scopeId", "data-v-60751cfa"]]), Jb = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', Yb = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', Qb = {
  comfy: Jb,
  phosphor: Yb
}, gs = "comfy", Os = "comfygit-theme";
let Ct = null, Bs = gs;
function Xb() {
  try {
    const t = localStorage.getItem(Os);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return gs;
}
function Fs(t = gs) {
  Ct && Ct.remove(), Ct = document.createElement("style"), Ct.id = "comfygit-theme-styles", Ct.setAttribute("data-theme", t), Ct.textContent = Qb[t], document.head.appendChild(Ct), document.body.setAttribute("data-comfygit-theme", t), Bs = t;
  try {
    localStorage.setItem(Os, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function Zb() {
  return Bs;
}
function e_(t) {
  Fs(t);
}
const ps = document.createElement("link");
ps.rel = "stylesheet";
ps.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(ps);
const t_ = Xb();
Fs(t_);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), e_(t);
  },
  getTheme: () => {
    const t = Zb();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let tt = null, qe = null, At = null, Ot = null, Cs = null;
const Tt = b(null);
let As = "managed";
async function Yt() {
  var t;
  if (!((t = wt) != null && t.api)) return null;
  try {
    const c = await wt.api.fetchApi("/v2/comfygit/status");
    c.ok && (Tt.value = await c.json());
  } catch {
  }
}
async function rs() {
  var t;
  if ((t = wt) != null && t.api)
    try {
      const c = await wt.api.fetchApi("/v2/setup/status");
      c.ok && (As = (await c.json()).state);
    } catch {
    }
}
function s_() {
  if (!Tt.value) return !1;
  const t = Tt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Tt.value.has_changes;
}
function o_() {
  tt && tt.remove(), tt = document.createElement("div"), tt.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", tt.appendChild(t), tt.addEventListener("click", (i) => {
    i.target === tt && ls();
  });
  const c = (i) => {
    i.key === "Escape" && (ls(), document.removeEventListener("keydown", c));
  };
  document.addEventListener("keydown", c), us({
    render: () => ms(eb, {
      onClose: ls,
      onStatusUpdate: async (i) => {
        Tt.value = i, Vt(), await rs(), ds();
      }
    })
  }).mount(t), document.body.appendChild(tt);
}
function ls() {
  tt && (tt.remove(), tt = null);
}
function n_(t) {
  Bt(), qe = document.createElement("div"), qe.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  qe.style.position = "fixed", qe.style.top = `${c.bottom + 8}px`, qe.style.right = `${window.innerWidth - c.right}px`, qe.style.zIndex = "10001";
  const n = (w) => {
    qe && !qe.contains(w.target) && w.target !== t && (Bt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const i = (w) => {
    w.key === "Escape" && (Bt(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), At = us({
    render: () => ms(Us, {
      status: Tt.value,
      onClose: Bt,
      onCommitted: () => {
        Bt(), Yt().then(Vt);
      }
    })
  }), At.mount(qe), document.body.appendChild(qe);
}
function Bt() {
  At && (At.unmount(), At = null), qe && (qe.remove(), qe = null);
}
function a_() {
  Ot || (Ot = document.createElement("div"), Ot.className = "comfygit-download-queue-root", Cs = us({
    render: () => ms(Kb)
  }), Cs.mount(Ot), document.body.appendChild(Ot), console.log("[ComfyGit] Model download queue mounted"));
}
let Xe = null;
function Vt() {
  if (!Xe) return;
  const t = Xe.querySelector(".commit-indicator");
  t && (t.style.display = s_() ? "block" : "none");
}
function ds() {
  if (!Xe) return;
  const t = As !== "managed";
  Xe.disabled = t, Xe.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Vs = document.createElement("style");
Vs.textContent = `
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
document.head.appendChild(Vs);
wt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var w, g;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = o_, Xe = document.createElement("button"), Xe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Xe.innerHTML = 'Commit <span class="commit-indicator"></span>', Xe.title = "Quick Commit", Xe.onclick = () => n_(Xe), t.appendChild(c), t.appendChild(Xe), (g = (w = wt.menu) == null ? void 0 : w.settingsGroup) != null && g.element && (wt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), a_();
    const { loadPendingDownloads: n } = jt();
    n(), await Promise.all([Yt(), rs()]), Vt(), ds(), setInterval(async () => {
      await Promise.all([Yt(), rs()]), Vt(), ds();
    }, 3e4);
    const i = wt.api;
    if (i) {
      let f = function() {
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
        const p = document.createElement("span");
        p.textContent = "Workflows updated - refresh required", m.appendChild(p);
        const y = document.createElement("button");
        y.textContent = "Refresh", y.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, y.onmouseover = () => y.style.background = "var(--comfy-input-bg)", y.onmouseout = () => y.style.background = "var(--comfy-menu-bg)", y.onclick = () => f(), m.appendChild(y);
        const _ = document.createElement("button");
        _.textContent = "×", _.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, _.onmouseover = () => _.style.opacity = "1", _.onmouseout = () => _.style.opacity = "0.6", _.onclick = () => m.remove(), m.appendChild(_), document.body.appendChild(m), console.log("[ComfyGit] Refresh notification displayed");
      };
      i.addEventListener("comfygit:workflow-changed", async (m) => {
        const { change_type: p, workflow_name: y } = m.detail;
        console.log(`[ComfyGit] Workflow ${p}: ${y}`), await Yt(), Vt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let r = !1;
      i.addEventListener("status", async (m) => {
        const p = m.detail != null;
        p && !r && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), f()) : u()), r = p;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
