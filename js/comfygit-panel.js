import { app as kt } from "../../scripts/app.js";
import { defineComponent as ee, createElementBlock as o, openBlock as s, createCommentVNode as d, createElementVNode as e, renderSlot as Ce, createBlock as E, resolveDynamicComponent as cs, normalizeClass as de, withCtx as l, toDisplayString as a, createVNode as k, createTextVNode as h, computed as P, Fragment as A, renderList as Z, normalizeStyle as pt, ref as C, onMounted as Oe, watch as bt, Teleport as Ae, withModifiers as Le, Transition as so, createSlots as Wt, withKeys as gt, reactive as ss, onUnmounted as Ms, readonly as oo, unref as $e, withDirectives as Ue, vModelText as Mt, vModelRadio as Jt, vModelCheckbox as Qt, nextTick as no, vModelSelect as Tt, createStaticVNode as ao, TransitionGroup as lo, createApp as us, h as ms } from "vue";
const io = { class: "panel-layout" }, ro = {
  key: 0,
  class: "panel-layout-header"
}, co = {
  key: 1,
  class: "panel-layout-search"
}, uo = { class: "panel-layout-content" }, mo = {
  key: 2,
  class: "panel-layout-footer"
}, vo = /* @__PURE__ */ ee({
  __name: "PanelLayout",
  setup(t) {
    return (c, n) => (s(), o("div", io, [
      c.$slots.header ? (s(), o("div", ro, [
        Ce(c.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      c.$slots.search ? (s(), o("div", co, [
        Ce(c.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      e("div", uo, [
        Ce(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (s(), o("div", mo, [
        Ce(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), te = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [i, y] of c)
    n[i] = y;
  return n;
}, Ge = /* @__PURE__ */ te(vo, [["__scopeId", "data-v-21565df9"]]), fo = {
  key: 0,
  class: "panel-title-prefix"
}, go = {
  key: 1,
  class: "panel-title-prefix-theme"
}, po = /* @__PURE__ */ ee({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, n) => (s(), E(cs(`h${t.level}`), {
      class: de(["panel-title", t.variant])
    }, {
      default: l(() => [
        t.showPrefix ? (s(), o("span", fo, a(t.prefix), 1)) : (s(), o("span", go)),
        Ce(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ho = /* @__PURE__ */ te(po, [["__scopeId", "data-v-c3875efc"]]), yo = ["title"], wo = ["width", "height"], ko = /* @__PURE__ */ ee({
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
      ])], 8, wo))
    ], 8, yo));
  }
}), Ts = /* @__PURE__ */ te(ko, [["__scopeId", "data-v-6fc7f16d"]]), bo = { class: "header-left" }, _o = {
  key: 0,
  class: "header-actions"
}, $o = /* @__PURE__ */ ee({
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
      class: de(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", bo, [
        k(ho, { "show-prefix": t.showPrefix }, {
          default: l(() => [
            h(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), E(Ts, {
          key: 0,
          onClick: n[0] || (n[0] = (i) => c.$emit("info-click"))
        })) : d("", !0)
      ]),
      c.$slots.actions ? (s(), o("div", _o, [
        Ce(c.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), qe = /* @__PURE__ */ te($o, [["__scopeId", "data-v-55a62cd6"]]), Co = {
  key: 0,
  class: "section-title-count"
}, xo = {
  key: 1,
  class: "section-title-icon"
}, So = /* @__PURE__ */ ee({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (s(), E(cs(`h${t.level}`), {
      class: de(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, {
      default: l(() => [
        Ce(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Co, "(" + a(t.count) + ")", 1)) : d("", !0),
        t.clickable ? (s(), o("span", xo, a(t.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ze = /* @__PURE__ */ te(So, [["__scopeId", "data-v-559361eb"]]), Io = { class: "status-grid" }, Eo = { class: "status-grid__columns" }, Mo = { class: "status-grid__column" }, To = { class: "status-grid__title" }, Ro = { class: "status-grid__column status-grid__column--right" }, zo = { class: "status-grid__title" }, Lo = {
  key: 0,
  class: "status-grid__footer"
}, Po = /* @__PURE__ */ ee({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", Io, [
      e("div", Eo, [
        e("div", Mo, [
          e("h4", To, a(t.leftTitle), 1),
          Ce(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Ro, [
          e("h4", zo, a(t.rightTitle), 1),
          Ce(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (s(), o("div", Lo, [
        Ce(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Do = /* @__PURE__ */ te(Po, [["__scopeId", "data-v-73b7ba3f"]]), No = {
  key: 0,
  class: "status-item__icon"
}, Uo = {
  key: 1,
  class: "status-item__count"
}, Oo = { class: "status-item__label" }, Bo = /* @__PURE__ */ ee({
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
    return (i, y) => (s(), o("div", {
      class: de(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", No, a(t.icon), 1)) : d("", !0),
      t.count !== void 0 ? (s(), o("span", Uo, a(t.count), 1)) : d("", !0),
      e("span", Oo, a(t.label), 1)
    ], 2));
  }
}), rt = /* @__PURE__ */ te(Bo, [["__scopeId", "data-v-6f929183"]]), Fo = { class: "issue-card__header" }, Ao = { class: "issue-card__icon" }, Vo = { class: "issue-card__title" }, Wo = {
  key: 0,
  class: "issue-card__content"
}, jo = {
  key: 0,
  class: "issue-card__description"
}, Go = {
  key: 1,
  class: "issue-card__items"
}, qo = {
  key: 2,
  class: "issue-card__actions"
}, Ho = /* @__PURE__ */ ee({
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
    return (i, y) => (s(), o("div", {
      class: de(["issue-card", n.value])
    }, [
      e("div", Fo, [
        e("span", Ao, a(t.icon), 1),
        e("h4", Vo, a(t.title), 1)
      ]),
      i.$slots.default || t.description ? (s(), o("div", Wo, [
        t.description ? (s(), o("p", jo, a(t.description), 1)) : d("", !0),
        Ce(i.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      t.items && t.items.length ? (s(), o("div", Go, [
        (s(!0), o(A, null, Z(t.items, (g, f) => (s(), o("div", {
          key: f,
          class: "issue-card__item"
        }, [
          y[0] || (y[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(g), 1)
        ]))), 128))
      ])) : d("", !0),
      i.$slots.actions ? (s(), o("div", qo, [
        Ce(i.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), st = /* @__PURE__ */ te(Ho, [["__scopeId", "data-v-df6aa348"]]), Ko = ["type", "disabled"], Jo = {
  key: 0,
  class: "spinner"
}, Yo = /* @__PURE__ */ ee({
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
      class: de(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", Jo)) : d("", !0),
      t.loading ? d("", !0) : Ce(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Ko));
  }
}), se = /* @__PURE__ */ te(Yo, [["__scopeId", "data-v-772abe47"]]), Xo = { class: "empty-state" }, Qo = {
  key: 0,
  class: "empty-icon"
}, Zo = { class: "empty-message" }, en = /* @__PURE__ */ ee({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, n) => (s(), o("div", Xo, [
      t.icon ? (s(), o("div", Qo, a(t.icon), 1)) : d("", !0),
      e("p", Zo, a(t.message), 1),
      t.actionLabel ? (s(), E(se, {
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
}), at = /* @__PURE__ */ te(en, [["__scopeId", "data-v-4466284f"]]), tn = /* @__PURE__ */ ee({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: de(["detail-label"]),
      style: pt({ minWidth: t.minWidth })
    }, [
      Ce(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Yt = /* @__PURE__ */ te(tn, [["__scopeId", "data-v-75e9eeb8"]]), sn = /* @__PURE__ */ ee({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: de(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      Ce(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), is = /* @__PURE__ */ te(sn, [["__scopeId", "data-v-2f186e4c"]]), on = { class: "detail-row" }, nn = /* @__PURE__ */ ee({
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
    return (c, n) => (s(), o("div", on, [
      k(Yt, { "min-width": t.labelMinWidth }, {
        default: l(() => [
          h(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), E(is, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: l(() => [
          h(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Ce(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Ne = /* @__PURE__ */ te(nn, [["__scopeId", "data-v-ef15664a"]]), an = { class: "modal-header" }, ln = { class: "modal-body" }, rn = { class: "status-section" }, dn = {
  key: 0,
  class: "status-section"
}, cn = { class: "section-header-row" }, un = {
  key: 0,
  class: "workflow-group"
}, mn = { class: "workflow-group-header" }, vn = { class: "workflow-group-title" }, fn = { class: "workflow-list" }, gn = { class: "workflow-name" }, pn = { class: "workflow-issue" }, hn = {
  key: 1,
  class: "workflow-group"
}, yn = { class: "workflow-group-header" }, wn = { class: "workflow-group-title" }, kn = { class: "workflow-list" }, bn = { class: "workflow-name" }, _n = { class: "workflow-issue" }, $n = {
  key: 2,
  class: "workflow-group"
}, Cn = { class: "workflow-group-header" }, xn = { class: "workflow-group-title" }, Sn = { class: "workflow-list" }, In = { class: "workflow-name" }, En = {
  key: 3,
  class: "workflow-group"
}, Mn = { class: "workflow-group-header" }, Tn = { class: "workflow-group-title" }, Rn = { class: "workflow-list" }, zn = { class: "workflow-name" }, Ln = {
  key: 4,
  class: "workflow-group"
}, Pn = { class: "workflow-group-header" }, Dn = { class: "workflow-group-title" }, Nn = { class: "workflow-list" }, Un = { class: "workflow-name" }, On = {
  key: 5,
  class: "workflow-group"
}, Bn = { class: "workflow-group-title" }, Fn = { class: "expand-icon" }, An = {
  key: 0,
  class: "workflow-list"
}, Vn = { class: "workflow-name" }, Wn = {
  key: 1,
  class: "status-section"
}, jn = {
  key: 0,
  class: "change-group"
}, Gn = { class: "change-group-header" }, qn = { class: "change-group-title" }, Hn = { class: "change-list" }, Kn = { class: "node-name" }, Jn = {
  key: 0,
  class: "dev-badge"
}, Yn = {
  key: 1,
  class: "change-group"
}, Xn = { class: "change-group-header" }, Qn = { class: "change-group-title" }, Zn = { class: "change-list" }, ea = { class: "node-name" }, ta = {
  key: 0,
  class: "dev-badge"
}, sa = {
  key: 2,
  class: "change-group"
}, oa = { class: "change-list" }, na = { class: "change-item" }, aa = { class: "node-name" }, la = {
  key: 3,
  class: "change-group"
}, ia = {
  key: 2,
  class: "status-section"
}, ra = { class: "section-header-row" }, da = {
  key: 0,
  class: "drift-item"
}, ca = { class: "drift-list" }, ua = {
  key: 0,
  class: "drift-list-more"
}, ma = {
  key: 1,
  class: "drift-item"
}, va = { class: "drift-list" }, fa = {
  key: 0,
  class: "drift-list-more"
}, ga = {
  key: 2,
  class: "drift-item"
}, pa = { class: "drift-list" }, ha = { class: "version-actual" }, ya = { class: "version-expected" }, wa = {
  key: 0,
  class: "drift-list-more"
}, ka = {
  key: 3,
  class: "drift-item"
}, ba = { class: "repair-action" }, _a = {
  key: 3,
  class: "status-section"
}, $a = { class: "info-box" }, Ca = { class: "drift-list" }, xa = {
  key: 0,
  class: "drift-list-more"
}, Sa = {
  key: 4,
  class: "status-section"
}, Ia = { class: "warning-box" }, Ea = {
  key: 5,
  class: "empty-state-inline"
}, Ma = { class: "modal-actions" }, Ta = /* @__PURE__ */ ee({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(t) {
    const c = t, n = C(!1);
    Oe(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), bt(() => c.show, (b, $) => {
      console.log("StatusDetailModal show prop changed from", $, "to", b);
    }, { immediate: !0 });
    const i = P(() => {
      var b, $, T;
      return ((T = ($ = (b = c.status) == null ? void 0 : b.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : T.filter(
        (O) => O.status === "broken" && O.sync_state === "synced"
      )) || [];
    }), y = P(() => {
      var b, $, T;
      return ((T = ($ = (b = c.status) == null ? void 0 : b.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : T.filter(
        (O) => O.status === "broken" && O.sync_state !== "synced"
      )) || [];
    }), g = P(() => {
      var b, $, T;
      return ((T = ($ = (b = c.status) == null ? void 0 : b.workflows) == null ? void 0 : $.synced) == null ? void 0 : T.filter((O) => {
        var _, z, S;
        const m = (S = (z = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : z.analyzed) == null ? void 0 : S.find((x) => x.name === O);
        return !m || m.status !== "broken";
      })) || [];
    }), f = P(() => {
      var b, $, T, O, m;
      return (b = c.status) != null && b.workflows ? ((($ = c.status.workflows.new) == null ? void 0 : $.length) ?? 0) > 0 || (((T = c.status.workflows.modified) == null ? void 0 : T.length) ?? 0) > 0 || (((O = c.status.workflows.deleted) == null ? void 0 : O.length) ?? 0) > 0 || (((m = c.status.workflows.synced) == null ? void 0 : m.length) ?? 0) > 0 : !1;
    }), v = P(() => {
      var $, T, O;
      const b = ($ = c.status) == null ? void 0 : $.git_changes;
      return b ? (((T = b.nodes_added) == null ? void 0 : T.length) ?? 0) > 0 || (((O = b.nodes_removed) == null ? void 0 : O.length) ?? 0) > 0 || b.workflow_changes || b.has_other_changes : !1;
    }), r = P(() => {
      var b, $, T, O, m, _;
      return !f.value && !v.value && (($ = (b = c.status) == null ? void 0 : b.comparison) == null ? void 0 : $.is_synced) && (((T = c.status) == null ? void 0 : T.missing_models_count) ?? 0) === 0 && (((_ = (m = (O = c.status) == null ? void 0 : O.comparison) == null ? void 0 : m.disabled_nodes) == null ? void 0 : _.length) ?? 0) === 0;
    }), u = P(() => {
      var $, T;
      const b = (T = ($ = c.status) == null ? void 0 : $.git_changes) == null ? void 0 : T.workflow_changes;
      return b ? typeof b == "number" ? b : Object.keys(b).length : 0;
    });
    function p(b) {
      return typeof b == "string" ? b : b.name;
    }
    function w(b) {
      return typeof b == "object" && b.is_development === !0;
    }
    return (b, $) => {
      var T, O, m, _, z, S, x, K, V, H, D, M, U, ne, X, j, ie, J, N, L, I, ae;
      return s(), E(Ae, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: $[7] || ($[7] = (oe) => b.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: $[6] || ($[6] = Le(() => {
            }, ["stop"]))
          }, [
            e("div", an, [
              $[8] || ($[8] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: $[0] || ($[0] = (oe) => b.$emit("close"))
              }, "✕")
            ]),
            e("div", ln, [
              e("div", rn, [
                k(Ze, { level: "4" }, {
                  default: l(() => [...$[9] || ($[9] = [
                    h("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                k(Ne, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              f.value ? (s(), o("div", dn, [
                e("div", cn, [
                  k(Ze, { level: "4" }, {
                    default: l(() => [...$[10] || ($[10] = [
                      h("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: $[1] || ($[1] = (oe) => b.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (s(), o("div", un, [
                  e("div", mn, [
                    $[11] || ($[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", vn, "BROKEN (COMMITTED) (" + a(i.value.length) + ")", 1)
                  ]),
                  e("div", fn, [
                    (s(!0), o(A, null, Z(i.value, (oe) => (s(), o("div", {
                      key: oe.name,
                      class: "workflow-item"
                    }, [
                      e("span", gn, a(oe.name), 1),
                      e("span", pn, a(oe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                y.value.length ? (s(), o("div", hn, [
                  e("div", yn, [
                    $[12] || ($[12] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", wn, "BROKEN (UNCOMMITTED) (" + a(y.value.length) + ")", 1)
                  ]),
                  e("div", kn, [
                    (s(!0), o(A, null, Z(y.value, (oe) => (s(), o("div", {
                      key: oe.name,
                      class: "workflow-item"
                    }, [
                      e("span", bn, a(oe.name), 1),
                      e("span", _n, a(oe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (O = (T = t.status.workflows) == null ? void 0 : T.new) != null && O.length ? (s(), o("div", $n, [
                  e("div", Cn, [
                    $[13] || ($[13] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", xn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Sn, [
                    (s(!0), o(A, null, Z(t.status.workflows.new, (oe) => (s(), o("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", In, a(oe), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (_ = (m = t.status.workflows) == null ? void 0 : m.modified) != null && _.length ? (s(), o("div", En, [
                  e("div", Mn, [
                    $[14] || ($[14] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Tn, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Rn, [
                    (s(!0), o(A, null, Z(t.status.workflows.modified, (oe) => (s(), o("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", zn, a(oe), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (S = (z = t.status.workflows) == null ? void 0 : z.deleted) != null && S.length ? (s(), o("div", Ln, [
                  e("div", Pn, [
                    $[15] || ($[15] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Dn, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Nn, [
                    (s(!0), o(A, null, Z(t.status.workflows.deleted, (oe) => (s(), o("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", Un, a(oe), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                g.value.length ? (s(), o("div", On, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: $[2] || ($[2] = (oe) => n.value = !n.value)
                  }, [
                    $[16] || ($[16] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Bn, "SYNCED (" + a(g.value.length) + ")", 1),
                    e("span", Fn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", An, [
                    (s(!0), o(A, null, Z(g.value, (oe) => (s(), o("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", Vn, a(oe), 1)
                    ]))), 128))
                  ])) : d("", !0)
                ])) : d("", !0)
              ])) : d("", !0),
              v.value ? (s(), o("div", Wn, [
                k(Ze, { level: "4" }, {
                  default: l(() => [...$[17] || ($[17] = [
                    h("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (K = (x = t.status.git_changes) == null ? void 0 : x.nodes_added) != null && K.length ? (s(), o("div", jn, [
                  e("div", Gn, [
                    $[18] || ($[18] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", qn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Hn, [
                    (s(!0), o(A, null, Z(t.status.git_changes.nodes_added, (oe) => (s(), o("div", {
                      key: p(oe),
                      class: "change-item"
                    }, [
                      e("span", Kn, a(p(oe)), 1),
                      w(oe) ? (s(), o("span", Jn, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (H = (V = t.status.git_changes) == null ? void 0 : V.nodes_removed) != null && H.length ? (s(), o("div", Yn, [
                  e("div", Xn, [
                    $[19] || ($[19] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", Qn, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Zn, [
                    (s(!0), o(A, null, Z(t.status.git_changes.nodes_removed, (oe) => (s(), o("div", {
                      key: p(oe),
                      class: "change-item"
                    }, [
                      e("span", ea, a(p(oe)), 1),
                      w(oe) ? (s(), o("span", ta, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (D = t.status.git_changes) != null && D.workflow_changes ? (s(), o("div", sa, [
                  $[20] || ($[20] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", oa, [
                    e("div", na, [
                      e("span", aa, a(u.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : d("", !0),
                (M = t.status.git_changes) != null && M.has_other_changes ? (s(), o("div", la, [...$[21] || ($[21] = [
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
              (U = t.status.comparison) != null && U.is_synced ? d("", !0) : (s(), o("div", ia, [
                e("div", ra, [
                  k(Ze, { level: "4" }, {
                    default: l(() => [...$[22] || ($[22] = [
                      h("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: $[3] || ($[3] = (oe) => b.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                $[26] || ($[26] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (X = (ne = t.status.comparison) == null ? void 0 : ne.missing_nodes) != null && X.length ? (s(), o("div", da, [
                  k(Ne, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", ca, [
                    (s(!0), o(A, null, Z(t.status.comparison.missing_nodes.slice(0, 10), (oe) => (s(), o("div", {
                      key: oe,
                      class: "drift-list-item"
                    }, " - " + a(oe), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", ua, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (ie = (j = t.status.comparison) == null ? void 0 : j.extra_nodes) != null && ie.length ? (s(), o("div", ma, [
                  k(Ne, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", va, [
                    (s(!0), o(A, null, Z(t.status.comparison.extra_nodes.slice(0, 10), (oe) => (s(), o("div", {
                      key: oe,
                      class: "drift-list-item"
                    }, " - " + a(oe), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", fa, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (N = (J = t.status.comparison) == null ? void 0 : J.version_mismatches) != null && N.length ? (s(), o("div", ga, [
                  k(Ne, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  e("div", pa, [
                    (s(!0), o(A, null, Z(t.status.comparison.version_mismatches.slice(0, 10), (oe) => (s(), o("div", {
                      key: oe.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      h(a(oe.name) + ": ", 1),
                      e("span", ha, a(oe.actual), 1),
                      $[23] || ($[23] = h(" → ", -1)),
                      e("span", ya, a(oe.expected), 1)
                    ]))), 128)),
                    t.status.comparison.version_mismatches.length > 10 ? (s(), o("div", wa, " ... and " + a(t.status.comparison.version_mismatches.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                ((L = t.status.comparison) == null ? void 0 : L.packages_in_sync) === !1 ? (s(), o("div", ka, [
                  k(Ne, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : d("", !0),
                e("div", ba, [
                  k(se, {
                    variant: "warning",
                    loading: t.isRepairing,
                    onClick: $[4] || ($[4] = (oe) => b.$emit("repair"))
                  }, {
                    default: l(() => [...$[24] || ($[24] = [
                      h(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  $[25] || ($[25] = e("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ae = (I = t.status.comparison) == null ? void 0 : I.disabled_nodes) != null && ae.length ? (s(), o("div", _a, [
                k(Ze, { level: "4" }, {
                  default: l(() => [...$[27] || ($[27] = [
                    h("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", $a, [
                  $[28] || ($[28] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Ca, [
                  (s(!0), o(A, null, Z(t.status.comparison.disabled_nodes.slice(0, 10), (oe) => (s(), o("div", {
                    key: oe,
                    class: "drift-list-item"
                  }, " • " + a(oe), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", xa, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : d("", !0)
                ])
              ])) : d("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", Sa, [
                k(Ze, { level: "4" }, {
                  default: l(() => [...$[29] || ($[29] = [
                    h("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Ia, [
                  $[30] || ($[30] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                $[31] || ($[31] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : d("", !0),
              r.value ? (s(), o("div", Ea, [...$[32] || ($[32] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : d("", !0)
            ]),
            e("div", Ma, [
              k(se, {
                variant: "secondary",
                onClick: $[5] || ($[5] = (oe) => b.$emit("close"))
              }, {
                default: l(() => [...$[33] || ($[33] = [
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
}), Ra = /* @__PURE__ */ te(Ta, [["__scopeId", "data-v-e2b37122"]]), za = { class: "health-section-header" }, La = { class: "suggestions-content" }, Pa = { class: "suggestions-text" }, Da = { style: { "margin-top": "var(--cg-space-3)" } }, Na = {
  key: 1,
  class: "no-issues-text"
}, Ua = /* @__PURE__ */ ee({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(t, { expose: c, emit: n }) {
    const i = t, y = C(!1), g = C(!1);
    function f() {
      y.value = !0;
    }
    function v() {
      y.value = !1, u("view-workflows");
    }
    function r() {
      y.value = !1, u("view-nodes");
    }
    const u = n, p = C(!1), w = C(!1);
    function b() {
      w.value = !0, u("repair-environment");
    }
    function $() {
      w.value = !1;
    }
    function T() {
      y.value = !1;
    }
    const O = P(() => {
      const J = i.status.workflows.analyzed || [], N = J.filter(
        (L) => L.unresolved_models_count > 0 || L.ambiguous_models_count > 0
      );
      return N.length === 0 && i.status.missing_models_count > 0 ? J.filter((L) => L.sync_state === "synced") : N;
    });
    function m() {
      const J = O.value;
      J.length !== 0 && (p.value = !0, u("repair-missing-models", J.map((N) => N.name)));
    }
    function _() {
      p.value = !1;
    }
    c({ resetRepairingState: _, resetRepairingEnvironmentState: $, closeDetailModal: T });
    const z = P(() => i.status.workflows.new.length > 0 || i.status.workflows.modified.length > 0 || i.status.workflows.deleted.length > 0), S = P(() => i.status.has_changes), x = P(() => {
      const J = i.status.git_changes;
      return J.nodes_added.length > 0 || J.nodes_removed.length > 0 || J.workflow_changes;
    }), K = P(() => i.status.has_changes || z.value), V = P(() => Object.keys(i.status.git_changes.workflow_changes_detail).length), H = P(() => i.status.git_changes.has_other_changes), D = P(() => {
      var J;
      return ((J = i.status.workflows.analyzed) == null ? void 0 : J.filter((N) => N.status === "broken")) || [];
    }), M = P(() => {
      var J;
      return ((J = i.status.workflows.analyzed) == null ? void 0 : J.filter(
        (N) => N.has_path_sync_issues && !N.has_issues
      )) || [];
    }), U = P(() => D.value.length > 0), ne = P(() => U.value || M.value.length > 0 || i.status.missing_models_count > 0 || !i.status.comparison.is_synced || i.status.has_legacy_manager), X = P(() => {
      const J = [];
      return i.status.workflows.new.length > 0 && J.push(`${i.status.workflows.new.length} new`), i.status.workflows.modified.length > 0 && J.push(`${i.status.workflows.modified.length} modified`), i.status.workflows.deleted.length > 0 && J.push(`${i.status.workflows.deleted.length} deleted`), J.length > 0 ? `${J.join(", ")} workflow${J.length === 1 && !J[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), j = P(() => {
      var L, I;
      const J = [], N = i.status.comparison;
      return (L = N.missing_nodes) != null && L.length && J.push(`${N.missing_nodes.length} missing node${N.missing_nodes.length === 1 ? "" : "s"}`), (I = N.extra_nodes) != null && I.length && J.push(`${N.extra_nodes.length} untracked node${N.extra_nodes.length === 1 ? "" : "s"}`), J.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${J.join(" and ")}.`;
    }), ie = P(() => {
      var L, I;
      const J = [], N = i.status.comparison;
      return (L = N.extra_nodes) != null && L.length && (N.extra_nodes.slice(0, 3).forEach((ae) => {
        J.push(`Untracked: ${ae}`);
      }), N.extra_nodes.length > 3 && J.push(`...and ${N.extra_nodes.length - 3} more untracked`)), (I = N.missing_nodes) != null && I.length && (N.missing_nodes.slice(0, 3).forEach((ae) => {
        J.push(`Missing: ${ae}`);
      }), N.missing_nodes.length > 3 && J.push(`...and ${N.missing_nodes.length - 3} more missing`)), J;
    });
    return (J, N) => (s(), o(A, null, [
      k(Ge, null, {
        header: l(() => [
          k(qe, { title: "STATUS" })
        ]),
        content: l(() => [
          i.setupState === "no_workspace" ? (s(), E(st, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: l(() => [
              k(se, {
                variant: "primary",
                size: "sm",
                onClick: N[0] || (N[0] = (L) => J.$emit("start-setup"))
              }, {
                default: l(() => [...N[13] || (N[13] = [
                  h(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "unmanaged" ? (s(), E(st, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: l(() => [
              k(se, {
                variant: "primary",
                size: "sm",
                onClick: N[1] || (N[1] = (L) => J.$emit("view-environments"))
              }, {
                default: l(() => [...N[14] || (N[14] = [
                  h(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "empty_workspace" ? (s(), E(st, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: l(() => [
              k(se, {
                variant: "primary",
                size: "sm",
                onClick: N[2] || (N[2] = (L) => J.$emit("create-environment"))
              }, {
                default: l(() => [...N[15] || (N[15] = [
                  h(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: N[4] || (N[4] = (L) => g.value = !0),
            onMouseleave: N[5] || (N[5] = (L) => g.value = !1)
          }, [
            e("div", za, [
              k(Ze, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: l(() => [...N[16] || (N[16] = [
                  h(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              k(so, { name: "fade" }, {
                default: l(() => [
                  g.value ? (s(), E(se, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: f
                  }, {
                    default: l(() => [...N[17] || (N[17] = [
                      h(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : d("", !0)
                ]),
                _: 1
              })
            ]),
            k(Do, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Wt({
              left: l(() => [
                t.status.workflows.new.length ? (s(), E(rt, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.modified.length ? (s(), E(rt, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.deleted.length ? (s(), E(rt, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : d("", !0),
                k(rt, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: z.value
                }, null, 8, ["count", "separator"])
              ]),
              right: l(() => [
                t.status.git_changes.nodes_added.length ? (s(), E(rt, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), E(rt, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.workflow_changes ? (s(), E(rt, {
                  key: 2,
                  icon: "●",
                  count: V.value,
                  label: V.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : d("", !0),
                H.value ? (s(), E(rt, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : d("", !0),
                S.value && !x.value && !H.value ? (s(), E(rt, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : d("", !0),
                S.value ? d("", !0) : (s(), E(rt, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              K.value ? {
                name: "footer",
                fn: l(() => [
                  N[19] || (N[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", La, [
                    e("span", Pa, a(X.value), 1),
                    k(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: N[3] || (N[3] = (L) => J.$emit("commit-changes"))
                    }, {
                      default: l(() => [...N[18] || (N[18] = [
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
          t.status.is_detached_head ? (s(), E(st, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: l(() => [
              k(se, {
                variant: "primary",
                size: "sm",
                onClick: N[6] || (N[6] = (L) => J.$emit("create-branch"))
              }, {
                default: l(() => [...N[20] || (N[20] = [
                  h(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", Da, [
            k(Ze, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: l(() => [...N[21] || (N[21] = [
                h(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            ne.value ? (s(), o(A, { key: 0 }, [
              D.value.length > 0 ? (s(), E(st, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${D.value.length} workflow${D.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: D.value.map((L) => `${L.name} — ${L.issue_summary}`)
              }, {
                actions: l(() => [
                  k(se, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[7] || (N[7] = (L) => J.$emit("view-workflows"))
                  }, {
                    default: l(() => [...N[22] || (N[22] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              M.value.length > 0 ? (s(), E(st, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${M.value.length} workflow${M.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: M.value.map((L) => `${L.name} — ${L.models_needing_path_sync_count} model path${L.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: l(() => [
                  k(se, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[8] || (N[8] = (L) => J.$emit("view-workflows"))
                  }, {
                    default: l(() => [...N[23] || (N[23] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              t.status.missing_models_count > 0 && !U.value ? (s(), E(st, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: l(() => [
                  k(se, {
                    variant: "primary",
                    size: "sm",
                    disabled: p.value,
                    onClick: m
                  }, {
                    default: l(() => [
                      h(a(p.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  k(se, {
                    variant: "secondary",
                    size: "sm",
                    onClick: N[9] || (N[9] = (L) => J.$emit("view-workflows"))
                  }, {
                    default: l(() => [...N[24] || (N[24] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : d("", !0),
              t.status.comparison.is_synced ? d("", !0) : (s(), E(st, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: j.value,
                items: ie.value
              }, {
                actions: l(() => [
                  k(se, {
                    variant: "secondary",
                    size: "sm",
                    onClick: f
                  }, {
                    default: l(() => [...N[25] || (N[25] = [
                      h(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  k(se, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[10] || (N[10] = (L) => J.$emit("view-nodes"))
                  }, {
                    default: l(() => [...N[26] || (N[26] = [
                      h(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), E(st, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: l(() => [
                  k(se, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[11] || (N[11] = (L) => J.$emit("view-nodes"))
                  }, {
                    default: l(() => [...N[27] || (N[27] = [
                      h(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : d("", !0)
            ], 64)) : K.value ? (s(), o("span", Na, "No issues")) : (s(), E(at, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      k(Ra, {
        show: y.value,
        status: t.status,
        "is-repairing": w.value,
        onClose: N[12] || (N[12] = (L) => y.value = !1),
        onNavigateWorkflows: v,
        onNavigateNodes: r,
        onRepair: b
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), Oa = /* @__PURE__ */ te(Ua, [["__scopeId", "data-v-55fcd77f"]]), Ba = ["type", "value", "placeholder", "disabled"], Fa = /* @__PURE__ */ ee({
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
    const i = t, y = n, g = C(null);
    function f(v) {
      const r = v.target.value;
      y("update:modelValue", r);
    }
    return Oe(() => {
      i.autoFocus && g.value && g.value.focus();
    }), c({
      focus: () => {
        var v;
        return (v = g.value) == null ? void 0 : v.focus();
      },
      blur: () => {
        var v;
        return (v = g.value) == null ? void 0 : v.blur();
      }
    }), (v, r) => (s(), o("input", {
      ref_key: "inputRef",
      ref: g,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: de(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: f,
      onKeyup: [
        r[0] || (r[0] = gt((u) => v.$emit("enter"), ["enter"])),
        r[1] || (r[1] = gt((u) => v.$emit("escape"), ["escape"]))
      ],
      onFocus: r[2] || (r[2] = (u) => v.$emit("focus")),
      onBlur: r[3] || (r[3] = (u) => v.$emit("blur"))
    }, null, 42, Ba));
  }
}), Zt = /* @__PURE__ */ te(Fa, [["__scopeId", "data-v-0380d08f"]]), Aa = { class: "branch-create-form" }, Va = { class: "form-actions" }, Wa = /* @__PURE__ */ ee({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, i = C(""), y = P(() => {
      const v = i.value.trim();
      return v.length > 0 && !v.startsWith("-") && !v.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(v);
    });
    function g() {
      y.value && (n("create", i.value.trim()), i.value = "");
    }
    function f() {
      i.value = "", n("cancel");
    }
    return (v, r) => (s(), o("div", Aa, [
      k(Zt, {
        modelValue: i.value,
        "onUpdate:modelValue": r[0] || (r[0] = (u) => i.value = u),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: g,
        onEscape: f
      }, null, 8, ["modelValue"]),
      e("div", Va, [
        k(se, {
          variant: "primary",
          size: "sm",
          disabled: !y.value,
          onClick: g
        }, {
          default: l(() => [...r[1] || (r[1] = [
            h(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        k(se, {
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
}), ja = /* @__PURE__ */ te(Wa, [["__scopeId", "data-v-7c500394"]]), Ga = { class: "branch-list-item__indicator" }, qa = { class: "branch-list-item__name" }, Ha = {
  key: 0,
  class: "branch-list-item__actions"
}, Ka = {
  key: 0,
  class: "branch-list-item__current-label"
}, Ja = /* @__PURE__ */ ee({
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
      class: de(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, [
      e("span", Ga, a(t.isCurrent ? "●" : "○"), 1),
      e("span", qa, a(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (s(), o("div", Ha, [
        Ce(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", Ka, " current ")) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ya = /* @__PURE__ */ te(Ja, [["__scopeId", "data-v-c6581a24"]]), Xa = {
  key: 2,
  class: "branch-list"
}, Qa = /* @__PURE__ */ ee({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: c }) {
    const n = c, i = C(!1);
    function y(f) {
      n("create", f), g();
    }
    function g() {
      i.value = !1;
    }
    return (f, v) => (s(), E(Ge, null, {
      header: l(() => [
        k(qe, { title: "BRANCHES" }, {
          actions: l(() => [
            i.value ? d("", !0) : (s(), E(se, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: v[0] || (v[0] = (r) => i.value = !0)
            }, {
              default: l(() => [...v[1] || (v[1] = [
                h(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: l(() => [
        i.value ? (s(), E(ja, {
          key: 0,
          onCreate: y,
          onCancel: g
        })) : d("", !0),
        t.branches.length === 0 ? (s(), E(at, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", Xa, [
          (s(!0), o(A, null, Z(t.branches, (r) => (s(), E(Ya, {
            key: r.name,
            "branch-name": r.name,
            "is-current": r.is_current
          }, {
            actions: l(() => [
              r.is_current ? d("", !0) : (s(), E(se, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (u) => f.$emit("delete", r.name)
              }, {
                default: l(() => [...v[2] || (v[2] = [
                  h(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              r.is_current ? d("", !0) : (s(), E(se, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (u) => f.$emit("switch", r.name)
              }, {
                default: l(() => [...v[3] || (v[3] = [
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
}), Za = /* @__PURE__ */ te(Qa, [["__scopeId", "data-v-86784ddd"]]), el = { class: "commit-list" }, tl = /* @__PURE__ */ ee({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (s(), o("div", el, [
      Ce(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), sl = /* @__PURE__ */ te(tl, [["__scopeId", "data-v-8c5ee761"]]), ol = { class: "commit-hash" }, nl = /* @__PURE__ */ ee({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = P(() => c.hash.slice(0, c.length));
    return (i, y) => (s(), o("span", ol, a(n.value), 1));
  }
}), Rs = /* @__PURE__ */ te(nl, [["__scopeId", "data-v-7c333cc6"]]), al = { class: "commit-message" }, ll = { class: "commit-date" }, il = /* @__PURE__ */ ee({
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
    function y() {
      n.clickable && i("click");
    }
    return (g, f) => (s(), o("div", {
      class: de(["commit-item", { clickable: t.clickable }]),
      onClick: y
    }, [
      k(Rs, { hash: t.hash }, null, 8, ["hash"]),
      e("span", al, a(t.message), 1),
      e("span", ll, a(t.relativeDate), 1),
      g.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: f[0] || (f[0] = Le(() => {
        }, ["stop"]))
      }, [
        Ce(g.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), rl = /* @__PURE__ */ te(il, [["__scopeId", "data-v-dd7c621b"]]), dl = /* @__PURE__ */ ee({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (s(), E(Ge, null, {
      header: l(() => [
        k(qe, { title: "HISTORY" })
      ]),
      content: l(() => [
        t.commits.length === 0 ? (s(), E(at, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), E(sl, { key: 1 }, {
          default: l(() => [
            (s(!0), o(A, null, Z(t.commits, (i) => (s(), E(rl, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (y) => c.$emit("select", i)
            }, {
              actions: l(() => [
                k(se, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (y) => c.$emit("checkout", i),
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
}), cl = /* @__PURE__ */ te(dl, [["__scopeId", "data-v-981c3c64"]]), x_ = ss({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const S_ = [
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
], I_ = {
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
}, ul = [
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
], E_ = [
  ...ul,
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
function Fe() {
  const t = C(!1), c = C(null);
  async function n(q, ue) {
    var ze;
    if (!((ze = window.app) != null && ze.api))
      throw new Error("ComfyUI API not available");
    const _e = await window.app.api.fetchApi(q, ue);
    if (!_e.ok) {
      const Xe = await _e.json().catch(() => ({}));
      throw new Error(Xe.error || Xe.message || `Request failed: ${_e.status}`);
    }
    return _e.json();
  }
  async function i(q = !1) {
    return n(q ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function y(q, ue = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: q, allow_issues: ue })
    });
  }
  async function g(q = 10, ue = 0) {
    return n(`/v2/comfygit/log?limit=${q}&offset=${ue}`);
  }
  async function f(q) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: q })
    });
  }
  async function v() {
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
  async function u() {
    return n("/v2/comfygit/branches");
  }
  async function p(q) {
    return n(`/v2/comfygit/commit/${q}`);
  }
  async function w(q, ue = !1) {
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
  async function $(q, ue = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: q, force: ue })
    });
  }
  async function T(q, ue = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(q)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ue })
    });
  }
  async function O() {
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
  async function m(q) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: q })
    });
  }
  async function _() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function z(q) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function S() {
    return n("/v2/workspace/environments/create_status");
  }
  async function x(q = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${q}`);
  }
  async function K(q) {
    return n(`/v2/workspace/environments/${q}`, {
      method: "DELETE"
    });
  }
  async function V(q = !1) {
    try {
      return n(q ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ue = await i(q), _e = [];
      return ue.workflows.new.forEach((ze) => {
        _e.push({ name: ze, status: "new", missing_nodes: 0, missing_models: 0, path: ze });
      }), ue.workflows.modified.forEach((ze) => {
        _e.push({ name: ze, status: "modified", missing_nodes: 0, missing_models: 0, path: ze });
      }), ue.workflows.synced.forEach((ze) => {
        _e.push({ name: ze, status: "synced", missing_nodes: 0, missing_models: 0, path: ze });
      }), _e;
    }
  }
  async function H(q) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/details`);
  }
  async function D(q) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/resolve`, {
      method: "POST"
    });
  }
  async function M(q, ue, _e) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ue, install_models: _e })
    });
  }
  async function U(q, ue, _e) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ue, importance: _e })
    });
  }
  async function ne() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function X() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function j(q) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(q)}`);
  }
  async function ie(q) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function J(q, ue) {
    return n(`/v2/workspace/models/${q}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ue })
    });
  }
  async function N(q, ue) {
    return n(`/v2/workspace/models/${q}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ue })
    });
  }
  async function L(q) {
    return n(`/v2/workspace/models/${q}`, {
      method: "DELETE"
    });
  }
  async function I(q) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function ae() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function oe() {
    return n("/v2/workspace/models/directory");
  }
  async function Me(q) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function be() {
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
  async function le(q, ue) {
    try {
      const _e = new URLSearchParams();
      return q && _e.append("level", q), ue && _e.append("lines", ue.toString()), n(`/v2/comfygit/debug/logs?${_e}`);
    } catch {
      return [];
    }
  }
  async function ce(q, ue) {
    try {
      const _e = new URLSearchParams();
      return q && _e.append("level", q), ue && _e.append("lines", ue.toString()), n(`/v2/workspace/debug/logs?${_e}`);
    } catch {
      return [];
    }
  }
  async function fe() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function Re() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function he(q) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function ge() {
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
  async function G(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}/track-dev`, {
      method: "POST"
    });
  }
  async function Ee(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}/install`, {
      method: "POST"
    });
  }
  async function xe(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}/update`, {
      method: "POST"
    });
  }
  async function Te(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}`, {
      method: "DELETE"
    });
  }
  async function me() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Je(q, ue) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, url: ue })
    });
  }
  async function et(q) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}`, {
      method: "DELETE"
    });
  }
  async function Ye(q, ue, _e) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ue, push_url: _e })
    });
  }
  async function _t(q) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/fetch`, {
      method: "POST"
    });
  }
  async function ke(q) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/status`);
    } catch {
      return null;
    }
  }
  async function Ve(q = "skip", ue = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: q,
        remove_extra_nodes: ue
      })
    });
  }
  async function wt(q, ue) {
    const _e = ue ? `/v2/comfygit/remotes/${encodeURIComponent(q)}/pull-preview?branch=${encodeURIComponent(ue)}` : `/v2/comfygit/remotes/${encodeURIComponent(q)}/pull-preview`;
    return n(_e);
  }
  async function ut(q, ue = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: ue.modelStrategy || "skip",
        force: ue.force || !1,
        resolutions: ue.resolutions
      })
    });
  }
  async function Pe(q, ue) {
    const _e = ue ? `/v2/comfygit/remotes/${encodeURIComponent(q)}/push-preview?branch=${encodeURIComponent(ue)}` : `/v2/comfygit/remotes/${encodeURIComponent(q)}/push-preview`;
    return n(_e);
  }
  async function $t(q, ue = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ue.force || !1 })
    });
  }
  async function lt(q, ue) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: ue })
    });
  }
  async function Y(q) {
    const ue = {
      success: 0,
      failed: []
    };
    for (const _e of q)
      try {
        await D(_e), ue.success++;
      } catch (ze) {
        ue.failed.push({
          name: _e,
          error: ze instanceof Error ? ze.message : "Unknown error"
        });
      }
    return ue;
  }
  async function B(q) {
    var ze;
    const ue = new FormData();
    if (ue.append("file", q), !((ze = window.app) != null && ze.api))
      throw new Error("ComfyUI API not available");
    const _e = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: ue
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!_e.ok) {
      const Xe = await _e.json().catch(() => ({}));
      throw new Error(Xe.error || `Preview failed: ${_e.status}`);
    }
    return _e.json();
  }
  async function F(q) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(q)}`
    );
  }
  async function Q(q, ue, _e, ze) {
    var qt;
    const Xe = new FormData();
    if (Xe.append("file", q), Xe.append("name", ue), Xe.append("model_strategy", _e), Xe.append("torch_backend", ze), !((qt = window.app) != null && qt.api))
      throw new Error("ComfyUI API not available");
    const It = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Xe
    });
    if (!It.ok) {
      const Ht = await It.json().catch(() => ({}));
      throw new Error(Ht.message || Ht.error || `Import failed: ${It.status}`);
    }
    return It.json();
  }
  async function we() {
    return n("/v2/workspace/import/status");
  }
  async function it(q) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: q })
    });
  }
  async function mt(q, ue, _e, ze) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: q,
        name: ue,
        model_strategy: _e,
        torch_backend: ze
      })
    });
  }
  async function tt() {
    return n("/v2/setup/status");
  }
  async function xt(q) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function vt() {
    return n("/v2/setup/initialize_status");
  }
  async function St(q) {
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
    commit: y,
    getHistory: g,
    exportEnv: f,
    validateExport: v,
    exportEnvWithForce: r,
    // Git Operations
    getBranches: u,
    getCommitDetail: p,
    checkout: w,
    createBranch: b,
    switchBranch: $,
    deleteBranch: T,
    // Environment Management
    getEnvironments: O,
    switchEnvironment: m,
    getSwitchProgress: _,
    createEnvironment: z,
    getCreateProgress: S,
    getComfyUIReleases: x,
    deleteEnvironment: K,
    // Workflow Management
    getWorkflows: V,
    getWorkflowDetails: H,
    resolveWorkflow: D,
    installWorkflowDeps: M,
    setModelImportance: U,
    // Model Management
    getEnvironmentModels: ne,
    getWorkspaceModels: X,
    getModelDetails: j,
    openFileLocation: ie,
    addModelSource: J,
    removeModelSource: N,
    deleteModel: L,
    downloadModel: I,
    scanWorkspaceModels: ae,
    getModelsDirectory: oe,
    setModelsDirectory: Me,
    // Settings
    getConfig: be,
    updateConfig: re,
    // Debug/Logs
    getEnvironmentLogs: le,
    getWorkspaceLogs: ce,
    getEnvironmentLogPath: fe,
    getWorkspaceLogPath: Re,
    openFile: he,
    // Node Management
    getNodes: ge,
    trackNodeAsDev: G,
    installNode: Ee,
    updateNode: xe,
    uninstallNode: Te,
    // Git Remotes
    getRemotes: me,
    addRemote: Je,
    removeRemote: et,
    updateRemoteUrl: Ye,
    fetchRemote: _t,
    getRemoteSyncStatus: ke,
    // Push/Pull
    getPullPreview: wt,
    pullFromRemote: ut,
    getPushPreview: Pe,
    pushToRemote: $t,
    validateMerge: lt,
    // Environment Sync
    syncEnvironmentManually: Ve,
    // Workflow Repair
    repairWorkflowModels: Y,
    // Import Operations
    previewTarballImport: B,
    previewGitImport: it,
    validateEnvironmentName: F,
    executeImport: Q,
    executeGitImport: mt,
    getImportProgress: we,
    // First-Time Setup
    getSetupStatus: tt,
    initializeWorkspace: xt,
    getInitializeProgress: vt,
    validatePath: St
  };
}
async function Dt(t, c = {}, n = 5e3) {
  const i = new AbortController(), y = setTimeout(() => i.abort(), n);
  try {
    const g = await fetch(t, {
      ...c,
      signal: i.signal
    });
    return clearTimeout(y), g;
  } catch (g) {
    throw clearTimeout(y), g.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : g;
  }
}
function zs() {
  const t = C(null);
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
  async function y() {
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
    restart: y,
    kill: g
  };
}
const ml = { class: "base-modal-header" }, vl = {
  key: 0,
  class: "base-modal-title"
}, fl = { class: "base-modal-body" }, gl = {
  key: 0,
  class: "base-modal-loading"
}, pl = {
  key: 1,
  class: "base-modal-error"
}, hl = {
  key: 0,
  class: "base-modal-footer"
}, yl = /* @__PURE__ */ ee({
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
    function y() {
      n.closeOnOverlayClick && i("close");
    }
    function g(f) {
      f.key === "Escape" && n.showCloseButton && i("close");
    }
    return Oe(() => {
      document.addEventListener("keydown", g), document.body.style.overflow = "hidden";
    }), Ms(() => {
      document.removeEventListener("keydown", g), document.body.style.overflow = "";
    }), (f, v) => (s(), E(Ae, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: y
      }, [
        e("div", {
          class: de(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: v[1] || (v[1] = Le(() => {
          }, ["stop"]))
        }, [
          e("div", ml, [
            Ce(f.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", vl, a(t.title), 1)) : d("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: v[0] || (v[0] = (r) => f.$emit("close"))
            }, [...v[2] || (v[2] = [
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
          e("div", fl, [
            t.loading ? (s(), o("div", gl, "Loading...")) : t.error ? (s(), o("div", pl, a(t.error), 1)) : Ce(f.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          f.$slots.footer ? (s(), o("div", hl, [
            Ce(f.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), Ke = /* @__PURE__ */ te(yl, [["__scopeId", "data-v-8dab1081"]]), wl = ["type", "disabled"], kl = {
  key: 0,
  class: "spinner"
}, bl = /* @__PURE__ */ ee({
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
      class: de(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", kl)) : d("", !0),
      Ce(c.$slots, "default", {}, void 0, !0)
    ], 10, wl));
  }
}), ve = /* @__PURE__ */ te(bl, [["__scopeId", "data-v-f3452606"]]), _l = {
  key: 0,
  class: "base-title-count"
}, $l = /* @__PURE__ */ ee({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, n) => (s(), E(cs(`h${t.level}`), {
      class: de(["base-title", t.variant])
    }, {
      default: l(() => [
        Ce(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", _l, "(" + a(t.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ft = /* @__PURE__ */ te($l, [["__scopeId", "data-v-5a01561d"]]), Cl = ["value", "disabled"], xl = {
  key: 0,
  value: "",
  disabled: ""
}, Sl = ["value"], Il = {
  key: 0,
  class: "base-select-error"
}, El = /* @__PURE__ */ ee({
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
    return (i, y) => (s(), o("div", {
      class: de(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: de(["base-select", { error: !!t.error }]),
        onChange: y[0] || (y[0] = (g) => i.$emit("update:modelValue", g.target.value))
      }, [
        t.placeholder ? (s(), o("option", xl, a(t.placeholder), 1)) : d("", !0),
        (s(!0), o(A, null, Z(t.options, (g) => (s(), o("option", {
          key: c(g),
          value: c(g)
        }, a(n(g)), 9, Sl))), 128))
      ], 42, Cl),
      t.error ? (s(), o("span", Il, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), Ml = /* @__PURE__ */ te(El, [["__scopeId", "data-v-7436d745"]]), Tl = { class: "popover-header" }, Rl = { class: "popover-title" }, zl = { class: "popover-content" }, Ll = {
  key: 0,
  class: "popover-actions"
}, Pl = /* @__PURE__ */ ee({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (s(), E(Ae, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: pt({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = Le(() => {
          }, ["stop"]))
        }, [
          e("div", Tl, [
            e("h4", Rl, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", zl, [
            Ce(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (s(), o("div", Ll, [
            Ce(c.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), ct = /* @__PURE__ */ te(Pl, [["__scopeId", "data-v-42815ace"]]), Dl = { class: "detail-section" }, Nl = {
  key: 0,
  class: "empty-message"
}, Ul = { class: "model-header" }, Ol = { class: "model-name" }, Bl = { class: "model-details" }, Fl = { class: "model-row" }, Al = { class: "model-row" }, Vl = { class: "label" }, Wl = {
  key: 0,
  class: "model-row model-row-nodes"
}, jl = { class: "node-list" }, Gl = ["onClick"], ql = {
  key: 1,
  class: "model-row"
}, Hl = { class: "value" }, Kl = {
  key: 2,
  class: "model-row"
}, Jl = { class: "value error" }, Yl = {
  key: 0,
  class: "model-actions"
}, Xl = { class: "detail-section" }, Ql = {
  key: 0,
  class: "empty-message"
}, Zl = { class: "node-name" }, ei = {
  key: 0,
  class: "node-version"
}, ti = /* @__PURE__ */ ee({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getWorkflowDetails: y, setModelImportance: g, openFileLocation: f } = Fe(), v = C(null), r = C(!1), u = C(null), p = C(!1), w = C({}), b = C(!1), $ = C(/* @__PURE__ */ new Set()), T = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function O(D) {
      switch (D) {
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
    function m(D) {
      switch (D) {
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
    function _(D) {
      if (!D.loaded_by || D.loaded_by.length === 0) return [];
      const M = D.hash || D.filename;
      return $.value.has(M) ? D.loaded_by : D.loaded_by.slice(0, 3);
    }
    function z(D) {
      return $.value.has(D);
    }
    function S(D) {
      $.value.has(D) ? $.value.delete(D) : $.value.add(D), $.value = new Set($.value);
    }
    async function x() {
      r.value = !0, u.value = null;
      try {
        v.value = await y(n.workflowName);
      } catch (D) {
        u.value = D instanceof Error ? D.message : "Failed to load workflow details";
      } finally {
        r.value = !1;
      }
    }
    function K(D, M) {
      w.value[D] = M, p.value = !0;
    }
    async function V(D) {
      try {
        await f(D);
      } catch (M) {
        u.value = M instanceof Error ? M.message : "Failed to open file location";
      }
    }
    async function H() {
      if (!p.value) {
        i("close");
        return;
      }
      r.value = !0, u.value = null;
      try {
        for (const [D, M] of Object.entries(w.value))
          await g(n.workflowName, D, M);
        i("refresh"), i("close");
      } catch (D) {
        u.value = D instanceof Error ? D.message : "Failed to save changes";
      } finally {
        r.value = !1;
      }
    }
    return Oe(x), (D, M) => (s(), o(A, null, [
      k(Ke, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: r.value,
        error: u.value || void 0,
        onClose: M[4] || (M[4] = (U) => i("close"))
      }, {
        body: l(() => [
          v.value ? (s(), o(A, { key: 0 }, [
            e("section", Dl, [
              k(Ft, { variant: "section" }, {
                default: l(() => [
                  h("MODELS USED (" + a(v.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.models.length === 0 ? (s(), o("div", Nl, " No models used in this workflow ")) : d("", !0),
              (s(!0), o(A, null, Z(v.value.models, (U) => {
                var ne;
                return s(), o("div", {
                  key: U.hash || U.filename,
                  class: "model-card"
                }, [
                  e("div", Ul, [
                    M[6] || (M[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", Ol, a(U.filename), 1)
                  ]),
                  e("div", Bl, [
                    e("div", Fl, [
                      M[7] || (M[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: de(["value", O(U.status)])
                      }, a(m(U.status)), 3)
                    ]),
                    e("div", Al, [
                      e("span", Vl, [
                        M[8] || (M[8] = h(" Importance: ", -1)),
                        k(Ts, {
                          size: 14,
                          title: "About importance levels",
                          onClick: M[0] || (M[0] = (X) => b.value = !0)
                        })
                      ]),
                      k(Ml, {
                        "model-value": w.value[U.filename] || U.importance,
                        options: T,
                        "onUpdate:modelValue": (X) => K(U.filename, X)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    U.loaded_by && U.loaded_by.length > 0 ? (s(), o("div", Wl, [
                      M[9] || (M[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", jl, [
                        (s(!0), o(A, null, Z(_(U), (X, j) => (s(), o("div", {
                          key: `${X.node_id}-${j}`,
                          class: "node-reference"
                        }, a(X.node_type) + " (Node #" + a(X.node_id) + ") ", 1))), 128)),
                        U.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (X) => S(U.hash || U.filename)
                        }, a(z(U.hash || U.filename) ? "▼ Show less" : `▶ View all (${U.loaded_by.length})`), 9, Gl)) : d("", !0)
                      ])
                    ])) : d("", !0),
                    U.size_mb ? (s(), o("div", ql, [
                      M[10] || (M[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", Hl, a(U.size_mb) + " MB", 1)
                    ])) : d("", !0),
                    U.has_category_mismatch ? (s(), o("div", Kl, [
                      M[13] || (M[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", Jl, [
                        M[11] || (M[11] = h(" In ", -1)),
                        e("code", null, a(U.actual_category) + "/", 1),
                        M[12] || (M[12] = h(" but loader needs ", -1)),
                        e("code", null, a((ne = U.expected_categories) == null ? void 0 : ne[0]) + "/", 1)
                      ])
                    ])) : d("", !0)
                  ]),
                  U.status !== "available" ? (s(), o("div", Yl, [
                    U.status === "downloadable" ? (s(), E(ve, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: M[1] || (M[1] = (X) => i("resolve"))
                    }, {
                      default: l(() => [...M[14] || (M[14] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    })) : U.status === "category_mismatch" && U.file_path ? (s(), E(ve, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (X) => V(U.file_path)
                    }, {
                      default: l(() => [...M[15] || (M[15] = [
                        h(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : U.status !== "path_mismatch" ? (s(), E(ve, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: M[2] || (M[2] = (X) => i("resolve"))
                    }, {
                      default: l(() => [...M[16] || (M[16] = [
                        h(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : d("", !0)
                  ])) : d("", !0)
                ]);
              }), 128))
            ]),
            e("section", Xl, [
              k(Ft, { variant: "section" }, {
                default: l(() => [
                  h("NODES USED (" + a(v.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.nodes.length === 0 ? (s(), o("div", Ql, " No custom nodes used in this workflow ")) : d("", !0),
              (s(!0), o(A, null, Z(v.value.nodes, (U) => (s(), o("div", {
                key: U.name,
                class: "node-item"
              }, [
                e("span", {
                  class: de(["node-status", U.status === "installed" ? "installed" : "missing"])
                }, a(U.status === "installed" ? "✓" : "✕"), 3),
                e("span", Zl, a(U.name), 1),
                U.version ? (s(), o("span", ei, "v" + a(U.version), 1)) : d("", !0)
              ]))), 128))
            ])
          ], 64)) : d("", !0)
        ]),
        footer: l(() => [
          k(ve, {
            variant: "secondary",
            onClick: M[3] || (M[3] = (U) => i("close"))
          }, {
            default: l(() => [...M[17] || (M[17] = [
              h(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (s(), E(ve, {
            key: 0,
            variant: "primary",
            onClick: H
          }, {
            default: l(() => [...M[18] || (M[18] = [
              h(" Save Changes ", -1)
            ])]),
            _: 1
          })) : d("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      k(ct, {
        show: b.value,
        title: "Model Importance Levels",
        onClose: M[5] || (M[5] = (U) => b.value = !1)
      }, {
        content: l(() => [...M[19] || (M[19] = [
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
}), si = /* @__PURE__ */ te(ti, [["__scopeId", "data-v-668728e6"]]), Ie = ss({
  items: [],
  status: "idle"
});
let dt = null;
function Ls() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function os(t) {
  return Ie.items.find((c) => c.id === t);
}
async function Et() {
  if (Ie.status === "downloading") return;
  const t = Ie.items.find((c) => c.status === "queued");
  if (!t) {
    Ie.status = "idle";
    return;
  }
  Ie.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await oi(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    Ie.status = "idle", Et();
  }
}
async function oi(t) {
  return new Promise((c, n) => {
    dt && (dt.close(), dt = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), y = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    dt = y;
    let g = Date.now(), f = 0, v = !1;
    y.onmessage = (r) => {
      try {
        const u = JSON.parse(r.data);
        switch (u.type) {
          case "progress":
            t.downloaded = u.downloaded || 0, t.size = u.total || t.size;
            const p = Date.now(), w = (p - g) / 1e3;
            if (w > 0.5) {
              const b = t.downloaded - f;
              if (t.speed = b / w, g = p, f = t.downloaded, t.speed > 0 && t.size > 0) {
                const $ = t.size - t.downloaded;
                t.eta = $ / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            v = !0, y.close(), dt = null, c();
            break;
          case "error":
            v = !0, y.close(), dt = null, n(new Error(u.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, y.onerror = () => {
      y.close(), dt = null, v || n(new Error("Connection lost"));
    };
  });
}
async function ni() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const c = await t.json();
    if (!c.pending_downloads || c.pending_downloads.length === 0) return;
    for (const n of c.pending_downloads) {
      if (Ie.items.some((y) => y.url === n.url && y.filename === n.filename))
        continue;
      const i = {
        id: Ls(),
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
  function t(m) {
    for (const _ of m) {
      if (Ie.items.some(
        (x) => x.url === _.url && x.targetPath === _.targetPath && ["queued", "downloading", "paused", "completed"].includes(x.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${_.filename}`);
        continue;
      }
      const S = {
        id: Ls(),
        workflow: _.workflow,
        filename: _.filename,
        url: _.url,
        targetPath: _.targetPath,
        size: _.size || 0,
        type: _.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      Ie.items.push(S);
    }
    Ie.status === "idle" && Et();
  }
  async function c(m) {
    const _ = os(m);
    if (_) {
      if (_.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(_.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        dt && (dt.close(), dt = null), _.status = "failed", _.error = "Cancelled by user", Ie.status = "idle", Et();
      } else if (_.status === "queued") {
        const z = Ie.items.findIndex((S) => S.id === m);
        z >= 0 && Ie.items.splice(z, 1);
      }
    }
  }
  function n(m) {
    const _ = os(m);
    !_ || _.status !== "failed" || (_.status = "queued", _.error = void 0, _.progress = 0, _.downloaded = 0, Ie.status === "idle" && Et());
  }
  function i(m) {
    const _ = os(m);
    !_ || _.status !== "paused" || (_.status = "queued", Ie.status === "idle" && Et());
  }
  function y() {
    const m = Ie.items.filter((_) => _.status === "paused");
    for (const _ of m)
      _.status = "queued";
    Ie.status === "idle" && Et();
  }
  function g(m) {
    const _ = Ie.items.findIndex((z) => z.id === m);
    _ >= 0 && ["completed", "failed", "paused"].includes(Ie.items[_].status) && Ie.items.splice(_, 1);
  }
  function f() {
    Ie.items = Ie.items.filter((m) => m.status !== "completed");
  }
  function v() {
    Ie.items = Ie.items.filter((m) => m.status !== "failed");
  }
  const r = P(
    () => Ie.items.find((m) => m.status === "downloading")
  ), u = P(
    () => Ie.items.filter((m) => m.status === "queued")
  ), p = P(
    () => Ie.items.filter((m) => m.status === "completed")
  ), w = P(
    () => Ie.items.filter((m) => m.status === "failed")
  ), b = P(
    () => Ie.items.filter((m) => m.status === "paused")
  ), $ = P(() => Ie.items.length > 0), T = P(
    () => Ie.items.filter((m) => m.status === "queued" || m.status === "downloading").length
  ), O = P(
    () => Ie.items.some((m) => m.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: oo(Ie),
    // Computed
    currentDownload: r,
    queuedItems: u,
    completedItems: p,
    failedItems: w,
    pausedItems: b,
    hasItems: $,
    activeCount: T,
    hasPaused: O,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: i,
    resumeAllPaused: y,
    removeItem: g,
    clearCompleted: f,
    clearFailed: v,
    loadPendingDownloads: ni
  };
}
function Ps() {
  const t = C(null), c = C(null), n = C([]), i = C([]), y = C(!1), g = C(null);
  async function f(z, S) {
    var K;
    if (!((K = window.app) != null && K.api))
      throw new Error("ComfyUI API not available");
    const x = await window.app.api.fetchApi(z, S);
    if (!x.ok) {
      const V = await x.json().catch(() => ({})), H = V.error || V.message || `Request failed: ${x.status}`;
      throw new Error(H);
    }
    return x.json();
  }
  async function v(z) {
    y.value = !0, g.value = null;
    try {
      let S;
      return Pt() || (S = await f(
        `/v2/comfygit/workflow/${z}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = S, S;
    } catch (S) {
      const x = S instanceof Error ? S.message : "Unknown error occurred";
      throw g.value = x, S;
    } finally {
      y.value = !1;
    }
  }
  async function r(z, S, x, K) {
    y.value = !0, g.value = null;
    try {
      let V;
      if (!Pt()) {
        const H = Object.fromEntries(S), D = Object.fromEntries(x), M = K ? Array.from(K) : [];
        V = await f(
          `/v2/comfygit/workflow/${z}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: H,
              model_choices: D,
              skipped_packages: M
            })
          }
        );
      }
      return c.value = V, V;
    } catch (V) {
      const H = V instanceof Error ? V.message : "Unknown error occurred";
      throw g.value = H, V;
    } finally {
      y.value = !1;
    }
  }
  async function u(z, S = 10) {
    y.value = !0, g.value = null;
    try {
      let x;
      return Pt() || (x = await f(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: z, limit: S })
        }
      )), n.value = x.results, x.results;
    } catch (x) {
      const K = x instanceof Error ? x.message : "Unknown error occurred";
      throw g.value = K, x;
    } finally {
      y.value = !1;
    }
  }
  async function p(z, S = 10) {
    y.value = !0, g.value = null;
    try {
      let x;
      return Pt() || (x = await f(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: z, limit: S })
        }
      )), i.value = x.results, x.results;
    } catch (x) {
      const K = x instanceof Error ? x.message : "Unknown error occurred";
      throw g.value = K, x;
    } finally {
      y.value = !1;
    }
  }
  const w = ss({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function b() {
    w.phase = "idle", w.currentFile = void 0, w.currentFileIndex = void 0, w.totalFiles = void 0, w.bytesDownloaded = void 0, w.bytesTotal = void 0, w.completedFiles = [], w.nodesToInstall = [], w.nodesInstalled = [], w.installError = void 0, w.needsRestart = void 0, w.error = void 0, w.nodeInstallProgress = void 0;
  }
  async function $(z) {
    w.phase = "installing", w.nodesInstalled = [], w.installError = void 0, w.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Pt(), await T(z);
    } catch (S) {
      const x = S instanceof Error ? S.message : "Failed to install nodes";
      throw w.installError = x, S;
    }
  }
  async function T(z) {
    var x;
    const S = await f(
      `/v2/comfygit/workflow/${z}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: w.nodesToInstall
        })
      }
    );
    if (w.nodeInstallProgress) {
      w.nodeInstallProgress.totalNodes = w.nodesToInstall.length;
      const K = new Map(((x = S.failed) == null ? void 0 : x.map((V) => [V.node_id, V.error])) || []);
      for (let V = 0; V < w.nodesToInstall.length; V++) {
        const H = w.nodesToInstall[V], D = K.get(H);
        w.nodeInstallProgress.completedNodes.push({
          node_id: H,
          success: !D,
          error: D
        });
      }
    }
    return w.nodesInstalled = S.nodes_installed, w.needsRestart = S.nodes_installed.length > 0, S.failed && S.failed.length > 0 && (w.installError = `${S.failed.length} package(s) failed to install`), S;
  }
  async function O(z, S, x) {
    b(), w.phase = "resolving", g.value = null;
    const K = Object.fromEntries(S), V = Object.fromEntries(x);
    try {
      const H = await fetch(`/v2/comfygit/workflow/${z}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: K,
          model_choices: V
        })
      });
      if (!H.ok)
        throw new Error(`Request failed: ${H.status}`);
      if (!H.body)
        throw new Error("No response body");
      const D = H.body.getReader(), M = new TextDecoder();
      let U = "";
      for (; ; ) {
        const { done: ne, value: X } = await D.read();
        if (ne) break;
        U += M.decode(X, { stream: !0 });
        const j = U.split(`

`);
        U = j.pop() || "";
        for (const ie of j) {
          if (!ie.trim()) continue;
          const J = ie.split(`
`);
          let N = "", L = "";
          for (const I of J)
            I.startsWith("event: ") ? N = I.slice(7) : I.startsWith("data: ") && (L = I.slice(6));
          if (L)
            try {
              const I = JSON.parse(L);
              m(N, I);
            } catch (I) {
              console.warn("Failed to parse SSE event:", I);
            }
        }
      }
    } catch (H) {
      const D = H instanceof Error ? H.message : "Unknown error occurred";
      throw g.value = D, w.error = D, w.phase = "error", H;
    }
  }
  function m(z, S) {
    switch (z) {
      case "batch_start":
        w.phase = "downloading", w.totalFiles = S.total;
        break;
      case "file_start":
        w.currentFile = S.filename, w.currentFileIndex = S.index, w.bytesDownloaded = 0, w.bytesTotal = void 0;
        break;
      case "file_progress":
        w.bytesDownloaded = S.downloaded, w.bytesTotal = S.total;
        break;
      case "file_complete":
        w.completedFiles.push({
          filename: S.filename,
          success: S.success,
          error: S.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        w.nodesToInstall = S.nodes_to_install || [], S.download_results && (w.completedFiles = S.download_results), w.phase = "complete";
        break;
      case "error":
        w.error = S.message, w.phase = "error", g.value = S.message;
        break;
    }
  }
  function _(z, S) {
    const { addToQueue: x } = jt(), K = S.filter((V) => V.url && V.target_path).map((V) => ({
      workflow: z,
      filename: V.filename,
      url: V.url,
      targetPath: V.target_path,
      size: V.size || 0,
      type: "model"
    }));
    return K.length > 0 && x(K), K.length;
  }
  return {
    // State
    result: t,
    appliedResult: c,
    searchResults: n,
    modelSearchResults: i,
    isLoading: y,
    error: g,
    progress: w,
    // Methods
    analyzeWorkflow: v,
    applyResolution: r,
    applyResolutionWithProgress: O,
    installNodes: $,
    searchNodes: u,
    searchModels: p,
    resetProgress: b,
    queueModelDownloads: _
  };
}
const ai = { class: "resolution-stepper" }, li = { class: "stepper-header" }, ii = ["onClick"], ri = {
  key: 0,
  class: "step-icon"
}, di = {
  key: 1,
  class: "step-number"
}, ci = { class: "step-label" }, ui = {
  key: 0,
  class: "step-connector"
}, mi = { class: "stepper-content" }, vi = /* @__PURE__ */ ee({
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
    function y(u) {
      var p;
      if ((p = n.stepStats) != null && p[u]) {
        const w = n.stepStats[u];
        return w.total > 0 && w.resolved === w.total;
      }
      return n.completedSteps.includes(u);
    }
    function g(u) {
      var p;
      if ((p = n.stepStats) != null && p[u]) {
        const w = n.stepStats[u];
        return w.resolved > 0 && w.resolved < w.total;
      }
      return !1;
    }
    function f(u) {
      return y(u) ? "state-complete" : g(u) ? "state-partial" : "state-pending";
    }
    function v(u) {
      return !1;
    }
    function r(u) {
      i("step-change", u);
    }
    return (u, p) => (s(), o("div", ai, [
      e("div", li, [
        (s(!0), o(A, null, Z(t.steps, (w, b) => (s(), o("div", {
          key: w.id,
          class: de(["step", {
            active: t.currentStep === w.id,
            completed: y(w.id),
            "in-progress": g(w.id),
            disabled: v(w.id)
          }]),
          onClick: ($) => r(w.id)
        }, [
          e("div", {
            class: de(["step-indicator", f(w.id)])
          }, [
            y(w.id) ? (s(), o("span", ri, "✓")) : (s(), o("span", di, a(b + 1), 1))
          ], 2),
          e("div", ci, a(w.label), 1),
          b < t.steps.length - 1 ? (s(), o("div", ui)) : d("", !0)
        ], 10, ii))), 128))
      ]),
      e("div", mi, [
        Ce(u.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), fi = /* @__PURE__ */ te(vi, [["__scopeId", "data-v-2a7b3af8"]]), gi = /* @__PURE__ */ ee({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = P(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), i = P(() => `confidence-${n.value}`), y = P(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (g, f) => (s(), o("span", {
      class: de(["confidence-badge", i.value, t.size])
    }, a(y.value), 3));
  }
}), es = /* @__PURE__ */ te(gi, [["__scopeId", "data-v-17ec4b80"]]), pi = { class: "node-info" }, hi = { class: "node-info-text" }, yi = { class: "item-body" }, wi = {
  key: 0,
  class: "resolved-state"
}, ki = {
  key: 1,
  class: "multiple-options"
}, bi = { class: "options-list" }, _i = ["onClick"], $i = ["name", "value", "checked", "onChange"], Ci = { class: "option-content" }, xi = { class: "option-header" }, Si = { class: "option-package-id" }, Ii = {
  key: 0,
  class: "option-title"
}, Ei = { class: "option-meta" }, Mi = {
  key: 0,
  class: "installed-badge"
}, Ti = { class: "action-buttons" }, Ri = {
  key: 2,
  class: "unresolved"
}, zi = {
  key: 0,
  class: "searching-state"
}, Li = { class: "options-list" }, Pi = ["onClick"], Di = ["name", "value"], Ni = { class: "option-content" }, Ui = { class: "option-header" }, Oi = { class: "option-package-id" }, Bi = {
  key: 0,
  class: "option-description"
}, Fi = { class: "option-meta" }, Ai = {
  key: 0,
  class: "installed-badge"
}, Vi = {
  key: 2,
  class: "unresolved-message"
}, Wi = { class: "action-buttons" }, ji = /* @__PURE__ */ ee({
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
    function y(r, u = 80) {
      return r.length <= u ? r : r.slice(0, u - 3) + "...";
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
    function v(r) {
      i("option-selected", r);
    }
    return (r, u) => (s(), o("div", {
      class: de(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: g.value }])
    }, [
      e("div", pi, [
        e("span", hi, [
          u[7] || (u[7] = h("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: de(["status-badge", f.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", yi, [
        g.value ? (s(), o("div", wi, [
          k(ve, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (p) => i("clear-choice"))
          }, {
            default: l(() => [...u[8] || (u[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", ki, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", bi, [
            (s(!0), o(A, null, Z(t.options, (p, w) => (s(), o("label", {
              key: p.package_id,
              class: de(["option-card", { selected: t.selectedOptionIndex === w }]),
              onClick: (b) => v(w)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: w,
                checked: t.selectedOptionIndex === w,
                onChange: (b) => v(w)
              }, null, 40, $i),
              e("div", Ci, [
                e("div", xi, [
                  e("span", Si, a(p.package_id), 1),
                  k(es, {
                    confidence: p.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                p.title && p.title !== p.package_id ? (s(), o("div", Ii, a(p.title), 1)) : d("", !0),
                e("div", Ei, [
                  p.is_installed ? (s(), o("span", Mi, "Already Installed")) : d("", !0)
                ])
              ])
            ], 10, _i))), 128))
          ]),
          e("div", Ti, [
            k(ve, {
              variant: "secondary",
              size: "sm",
              onClick: u[1] || (u[1] = (p) => i("search"))
            }, {
              default: l(() => [...u[9] || (u[9] = [
                h(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            k(ve, {
              variant: "secondary",
              size: "sm",
              onClick: u[2] || (u[2] = (p) => i("manual-entry"))
            }, {
              default: l(() => [...u[10] || (u[10] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(ve, {
              variant: "secondary",
              size: "sm",
              onClick: u[3] || (u[3] = (p) => i("mark-optional"))
            }, {
              default: l(() => [...u[11] || (u[11] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Ri, [
          t.isSearching ? (s(), o("div", zi, [...u[13] || (u[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(A, { key: 1 }, [
            u[14] || (u[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", Li, [
              (s(!0), o(A, null, Z(t.searchResults.slice(0, 5), (p, w) => (s(), o("label", {
                key: p.package_id,
                class: "option-card",
                onClick: (b) => i("search-result-selected", p)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: w
                }, null, 8, Di),
                e("div", Ni, [
                  e("div", Ui, [
                    e("span", Oi, a(p.package_id), 1),
                    k(es, {
                      confidence: p.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  p.description ? (s(), o("div", Bi, a(y(p.description)), 1)) : d("", !0),
                  e("div", Fi, [
                    p.is_installed ? (s(), o("span", Ai, "Already Installed")) : d("", !0)
                  ])
                ])
              ], 8, Pi))), 128))
            ])
          ], 64)) : (s(), o("div", Vi, [...u[15] || (u[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", Wi, [
            k(ve, {
              variant: "secondary",
              size: "sm",
              onClick: u[4] || (u[4] = (p) => i("search"))
            }, {
              default: l(() => {
                var p;
                return [
                  h(a((p = t.searchResults) != null && p.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            k(ve, {
              variant: "secondary",
              size: "sm",
              onClick: u[5] || (u[5] = (p) => i("manual-entry"))
            }, {
              default: l(() => [...u[16] || (u[16] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(ve, {
              variant: "secondary",
              size: "sm",
              onClick: u[6] || (u[6] = (p) => i("mark-optional"))
            }, {
              default: l(() => [...u[17] || (u[17] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Gi = /* @__PURE__ */ te(ji, [["__scopeId", "data-v-c2997d1d"]]), qi = { class: "item-navigator" }, Hi = { class: "nav-item-info" }, Ki = ["title"], Ji = { class: "nav-controls" }, Yi = { class: "nav-arrows" }, Xi = ["disabled"], Qi = ["disabled"], Zi = { class: "nav-position" }, er = /* @__PURE__ */ ee({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const n = c;
    return (i, y) => (s(), o("div", qi, [
      e("div", Hi, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, Ki)
      ]),
      e("div", Ji, [
        e("div", Yi, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: y[0] || (y[0] = (g) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, Xi),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: y[1] || (y[1] = (g) => n("next")),
            title: "Next item"
          }, " → ", 8, Qi)
        ]),
        e("span", Zi, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), Ds = /* @__PURE__ */ te(er, [["__scopeId", "data-v-74af7920"]]), tr = ["type", "value", "placeholder", "disabled"], sr = {
  key: 0,
  class: "base-input-error"
}, or = /* @__PURE__ */ ee({
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
      class: de(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: de(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          n[1] || (n[1] = gt((i) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = gt((i) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, tr),
      t.error ? (s(), o("span", sr, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), nt = /* @__PURE__ */ te(or, [["__scopeId", "data-v-9ba02cdc"]]), nr = { class: "node-resolution-step" }, ar = {
  key: 0,
  class: "auto-resolved-section"
}, lr = { class: "section-header" }, ir = { class: "stat-badge" }, rr = { class: "resolved-packages-list" }, dr = { class: "package-info" }, cr = { class: "package-id" }, ur = { class: "node-count" }, mr = { class: "package-actions" }, vr = {
  key: 0,
  class: "status-badge install"
}, fr = {
  key: 1,
  class: "status-badge skip"
}, gr = ["onClick"], pr = {
  key: 1,
  class: "section-divider"
}, hr = { class: "step-header" }, yr = { class: "stat-badge" }, wr = {
  key: 1,
  class: "step-body"
}, kr = {
  key: 3,
  class: "empty-state"
}, br = { class: "node-modal-body" }, _r = { class: "node-search-results-container" }, $r = {
  key: 0,
  class: "node-search-results"
}, Cr = ["onClick"], xr = { class: "node-result-header" }, Sr = { class: "node-result-package-id" }, Ir = {
  key: 0,
  class: "node-result-description"
}, Er = {
  key: 1,
  class: "node-empty-state"
}, Mr = {
  key: 2,
  class: "node-empty-state"
}, Tr = {
  key: 3,
  class: "node-empty-state"
}, Rr = { class: "node-manual-entry-modal" }, zr = { class: "node-modal-body" }, Lr = { class: "node-modal-actions" }, Pr = /* @__PURE__ */ ee({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: c }) {
    const n = t, i = c, { searchNodes: y } = Ps(), g = C(0), f = C(!1), v = C(!1), r = C(""), u = C(""), p = C([]), w = C(!1), b = C(/* @__PURE__ */ new Map()), $ = C(/* @__PURE__ */ new Set()), T = C(!1);
    function O() {
      T.value && L(), T.value = !1;
    }
    const m = P(() => n.nodes[g.value]), _ = P(() => n.nodes.filter((ce) => n.nodeChoices.has(ce.node_type)).length), z = P(() => m.value ? b.value.get(m.value.node_type) || [] : []), S = P(() => m.value ? $.value.has(m.value.node_type) : !1);
    bt(m, async (ce) => {
      var fe;
      ce && ((fe = ce.options) != null && fe.length || b.value.has(ce.node_type) || $.value.has(ce.node_type) || n.nodeChoices.has(ce.node_type) || await x(ce.node_type));
    }, { immediate: !0 });
    async function x(ce) {
      $.value.add(ce);
      try {
        const fe = await y(ce, 5);
        b.value.set(ce, fe);
      } catch {
        b.value.set(ce, []);
      } finally {
        $.value.delete(ce);
      }
    }
    const K = P(() => n.autoResolvedPackages.filter((ce) => !n.skippedPackages.has(ce.package_id)).length);
    function V(ce) {
      return n.skippedPackages.has(ce);
    }
    function H(ce) {
      i("package-skip", ce);
    }
    const D = P(() => {
      var fe;
      if (!m.value) return "not-found";
      const ce = n.nodeChoices.get(m.value.node_type);
      if (ce)
        switch (ce.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (fe = m.value.options) != null && fe.length ? "ambiguous" : "not-found";
    }), M = P(() => {
      var fe;
      if (!m.value) return;
      const ce = n.nodeChoices.get(m.value.node_type);
      if (ce)
        switch (ce.action) {
          case "install":
            return ce.package_id ? `→ ${ce.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (fe = m.value.options) != null && fe.length ? `${m.value.options.length} matches` : "Not Found";
    });
    function U(ce) {
      ce >= 0 && ce < n.nodes.length && (g.value = ce);
    }
    function ne() {
      m.value && i("mark-optional", m.value.node_type);
    }
    function X() {
      m.value && i("skip", m.value.node_type);
    }
    function j(ce) {
      m.value && i("option-selected", m.value.node_type, ce);
    }
    function ie() {
      m.value && i("clear-choice", m.value.node_type);
    }
    function J() {
      m.value && (r.value = m.value.node_type, p.value = z.value, f.value = !0, Me(r.value));
    }
    function N() {
      u.value = "", v.value = !0;
    }
    function L() {
      f.value = !1, r.value = "", p.value = [];
    }
    function I() {
      v.value = !1, u.value = "";
    }
    let ae = null;
    function oe() {
      ae && clearTimeout(ae), ae = setTimeout(() => {
        Me(r.value);
      }, 300);
    }
    async function Me(ce) {
      if (!ce.trim()) {
        p.value = [];
        return;
      }
      w.value = !0;
      try {
        p.value = await y(ce, 10);
      } catch {
        p.value = [];
      } finally {
        w.value = !1;
      }
    }
    function be(ce) {
      m.value && (i("manual-entry", m.value.node_type, ce.package_id), L());
    }
    function re(ce) {
      m.value && i("manual-entry", m.value.node_type, ce.package_id);
    }
    function le() {
      !m.value || !u.value.trim() || (i("manual-entry", m.value.node_type, u.value.trim()), I());
    }
    return (ce, fe) => {
      var Re, he;
      return s(), o("div", nr, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", ar, [
          e("div", lr, [
            fe[6] || (fe[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", ir, a(K.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", rr, [
            (s(!0), o(A, null, Z(t.autoResolvedPackages, (ge) => (s(), o("div", {
              key: ge.package_id,
              class: "resolved-package-item"
            }, [
              e("div", dr, [
                e("code", cr, a(ge.package_id), 1),
                e("span", ur, a(ge.node_types_count) + " node type" + a(ge.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", mr, [
                V(ge.package_id) ? (s(), o("span", fr, " SKIPPED ")) : (s(), o("span", vr, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (G) => H(ge.package_id)
                }, a(V(ge.package_id) ? "Include" : "Skip"), 9, gr)
              ])
            ]))), 128))
          ])
        ])) : d("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", pr)) : d("", !0),
        t.nodes.length > 0 ? (s(), o(A, { key: 2 }, [
          e("div", hr, [
            fe[7] || (fe[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", yr, a(_.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          m.value ? (s(), E(Ds, {
            key: 0,
            "item-name": m.value.node_type,
            "current-index": g.value,
            "total-items": t.nodes.length,
            onPrev: fe[0] || (fe[0] = (ge) => U(g.value - 1)),
            onNext: fe[1] || (fe[1] = (ge) => U(g.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
          m.value ? (s(), o("div", wr, [
            k(Gi, {
              "node-type": m.value.node_type,
              "has-multiple-options": !!((Re = m.value.options) != null && Re.length),
              options: m.value.options,
              choice: (he = t.nodeChoices) == null ? void 0 : he.get(m.value.node_type),
              status: D.value,
              "status-label": M.value,
              "search-results": z.value,
              "is-searching": S.value,
              onMarkOptional: ne,
              onSkip: X,
              onManualEntry: N,
              onSearch: J,
              onOptionSelected: j,
              onClearChoice: ie,
              onSearchResultSelected: re
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : d("", !0)
        ], 64)) : d("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", kr, [...fe[8] || (fe[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : d("", !0),
        (s(), E(Ae, { to: "body" }, [
          f.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: fe[4] || (fe[4] = Le((ge) => T.value = !0, ["self"])),
            onMouseup: Le(O, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: fe[3] || (fe[3] = (ge) => T.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                fe[9] || (fe[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: L
                }, "✕")
              ]),
              e("div", br, [
                k(nt, {
                  modelValue: r.value,
                  "onUpdate:modelValue": fe[2] || (fe[2] = (ge) => r.value = ge),
                  placeholder: "Search by node type, package name...",
                  onInput: oe
                }, null, 8, ["modelValue"]),
                e("div", _r, [
                  p.value.length > 0 ? (s(), o("div", $r, [
                    (s(!0), o(A, null, Z(p.value, (ge) => (s(), o("div", {
                      key: ge.package_id,
                      class: "node-search-result-item",
                      onClick: (G) => be(ge)
                    }, [
                      e("div", xr, [
                        e("code", Sr, a(ge.package_id), 1),
                        ge.match_confidence ? (s(), E(es, {
                          key: 0,
                          confidence: ge.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : d("", !0)
                      ]),
                      ge.description ? (s(), o("div", Ir, a(ge.description), 1)) : d("", !0)
                    ], 8, Cr))), 128))
                  ])) : w.value ? (s(), o("div", Er, "Searching...")) : r.value ? (s(), o("div", Mr, 'No packages found matching "' + a(r.value) + '"', 1)) : (s(), o("div", Tr, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : d("", !0)
        ])),
        (s(), E(Ae, { to: "body" }, [
          v.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Le(I, ["self"])
          }, [
            e("div", Rr, [
              e("div", { class: "node-modal-header" }, [
                fe[10] || (fe[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: I
                }, "✕")
              ]),
              e("div", zr, [
                k(nt, {
                  modelValue: u.value,
                  "onUpdate:modelValue": fe[5] || (fe[5] = (ge) => u.value = ge),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Lr, [
                  k(ve, {
                    variant: "secondary",
                    onClick: I
                  }, {
                    default: l(() => [...fe[11] || (fe[11] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(ve, {
                    variant: "primary",
                    disabled: !u.value.trim(),
                    onClick: le
                  }, {
                    default: l(() => [...fe[12] || (fe[12] = [
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
}), Dr = /* @__PURE__ */ te(Pr, [["__scopeId", "data-v-281581bc"]]), Nr = { class: "node-info" }, Ur = { class: "node-info-text" }, Or = { class: "item-body" }, Br = {
  key: 0,
  class: "resolved-state"
}, Fr = {
  key: 1,
  class: "multiple-options"
}, Ar = { class: "options-list" }, Vr = ["onClick"], Wr = ["name", "value", "checked", "onChange"], jr = { class: "option-content" }, Gr = { class: "option-header" }, qr = { class: "option-filename" }, Hr = { class: "option-meta" }, Kr = { class: "option-size" }, Jr = { class: "option-category" }, Yr = { class: "option-path" }, Xr = { class: "action-buttons" }, Qr = {
  key: 2,
  class: "unresolved"
}, Zr = { class: "action-buttons" }, ed = /* @__PURE__ */ ee({
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
    const n = t, i = c, y = P(() => !!n.choice);
    P(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.action;
    }), P(() => {
      var r, u;
      return ((u = (r = n.choice) == null ? void 0 : r.selected_model) == null ? void 0 : u.filename) || "selected";
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
    function v(r) {
      if (!r) return "Unknown";
      const u = r / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(r / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (r, u) => (s(), o("div", {
      class: de(["model-resolution-item", { resolved: y.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", Nr, [
        e("span", Ur, [
          u[7] || (u[7] = h("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: de(["status-badge", g.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", Or, [
        y.value ? (s(), o("div", Br, [
          k(ve, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (p) => i("clear-choice"))
          }, {
            default: l(() => [...u[8] || (u[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Fr, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Ar, [
            (s(!0), o(A, null, Z(t.options, (p, w) => (s(), o("label", {
              key: p.model.hash,
              class: de(["option-card", { selected: t.selectedOptionIndex === w }]),
              onClick: (b) => f(w)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: w,
                checked: t.selectedOptionIndex === w,
                onChange: (b) => f(w)
              }, null, 40, Wr),
              e("div", jr, [
                e("div", Gr, [
                  e("span", qr, a(p.model.filename), 1),
                  k(es, {
                    confidence: p.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Hr, [
                  e("span", Kr, a(v(p.model.size)), 1),
                  e("span", Jr, a(p.model.category), 1)
                ]),
                e("div", Yr, a(p.model.relative_path), 1)
              ])
            ], 10, Vr))), 128))
          ]),
          e("div", Xr, [
            k(ve, {
              variant: "ghost",
              size: "sm",
              onClick: u[1] || (u[1] = (p) => i("search"))
            }, {
              default: l(() => [...u[9] || (u[9] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(ve, {
              variant: "ghost",
              size: "sm",
              onClick: u[2] || (u[2] = (p) => i("download-url"))
            }, {
              default: l(() => [...u[10] || (u[10] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(ve, {
              variant: "secondary",
              size: "sm",
              onClick: u[3] || (u[3] = (p) => i("mark-optional"))
            }, {
              default: l(() => [...u[11] || (u[11] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Qr, [
          u[16] || (u[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Zr, [
            k(ve, {
              variant: "primary",
              size: "sm",
              onClick: u[4] || (u[4] = (p) => i("search"))
            }, {
              default: l(() => [...u[13] || (u[13] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(ve, {
              variant: "secondary",
              size: "sm",
              onClick: u[5] || (u[5] = (p) => i("download-url"))
            }, {
              default: l(() => [...u[14] || (u[14] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(ve, {
              variant: "secondary",
              size: "sm",
              onClick: u[6] || (u[6] = (p) => i("mark-optional"))
            }, {
              default: l(() => [...u[15] || (u[15] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), td = /* @__PURE__ */ te(ed, [["__scopeId", "data-v-8a82fefa"]]), sd = { class: "model-resolution-step" }, od = { class: "step-header" }, nd = { class: "step-info" }, ad = { class: "step-title" }, ld = { class: "step-description" }, id = { class: "stat-badge" }, rd = {
  key: 1,
  class: "step-body"
}, dd = {
  key: 2,
  class: "empty-state"
}, cd = { class: "model-search-modal" }, ud = { class: "model-modal-body" }, md = {
  key: 0,
  class: "model-search-results"
}, vd = ["onClick"], fd = { class: "model-result-header" }, gd = { class: "model-result-filename" }, pd = { class: "model-result-meta" }, hd = { class: "model-result-category" }, yd = { class: "model-result-size" }, wd = {
  key: 0,
  class: "model-result-path"
}, kd = {
  key: 1,
  class: "model-no-results"
}, bd = {
  key: 2,
  class: "model-searching"
}, _d = { class: "model-download-url-modal" }, $d = { class: "model-modal-body" }, Cd = { class: "model-input-group" }, xd = { class: "model-input-group" }, Sd = { class: "model-modal-actions" }, Id = /* @__PURE__ */ ee({
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
    const y = t, g = c, f = C(0), v = C(!1), r = C(!1), u = C(""), p = C(""), w = C(""), b = C([]), $ = C(!1), T = P(() => y.models[f.value]), O = P(() => y.models.some((L) => L.is_download_intent)), m = P(() => y.models.filter(
      (L) => y.modelChoices.has(L.filename) || L.is_download_intent
    ).length), _ = P(() => {
      var I;
      if (!T.value) return "";
      const L = i((I = T.value.reference) == null ? void 0 : I.node_type);
      return L ? `${L}/${T.value.filename}` : "";
    }), z = P(() => {
      var I;
      if (!T.value) return "not-found";
      const L = y.modelChoices.get(T.value.filename);
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
      return T.value.is_download_intent ? "download" : (I = T.value.options) != null && I.length ? "ambiguous" : "not-found";
    }), S = P(() => {
      var I, ae;
      if (!T.value) return;
      const L = y.modelChoices.get(T.value.filename);
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
      return T.value.is_download_intent ? "Pending Download" : (ae = T.value.options) != null && ae.length ? `${T.value.options.length} matches` : "Not Found";
    });
    function x(L) {
      L >= 0 && L < y.models.length && (f.value = L);
    }
    function K() {
      T.value && g("mark-optional", T.value.filename);
    }
    function V() {
      T.value && g("skip", T.value.filename);
    }
    function H(L) {
      T.value && g("option-selected", T.value.filename, L);
    }
    function D() {
      T.value && g("clear-choice", T.value.filename);
    }
    function M() {
      T.value && (u.value = T.value.filename, v.value = !0);
    }
    function U() {
      T.value && (p.value = T.value.download_source || "", w.value = T.value.target_path || _.value, r.value = !0);
    }
    function ne() {
      v.value = !1, u.value = "", b.value = [];
    }
    function X() {
      r.value = !1, p.value = "", w.value = "";
    }
    function j() {
      $.value = !0, setTimeout(() => {
        $.value = !1;
      }, 300);
    }
    function ie(L) {
      T.value && ne();
    }
    function J() {
      !T.value || !p.value.trim() || (g("download-url", T.value.filename, p.value.trim(), w.value.trim() || void 0), X());
    }
    function N(L) {
      if (!L) return "Unknown";
      const I = L / (1024 * 1024 * 1024);
      return I >= 1 ? `${I.toFixed(2)} GB` : `${(L / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (L, I) => {
      var ae, oe, Me;
      return s(), o("div", sd, [
        e("div", od, [
          e("div", nd, [
            e("h3", ad, a(O.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", ld, a(O.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", id, a(m.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        T.value ? (s(), E(Ds, {
          key: 0,
          "item-name": T.value.filename,
          "current-index": f.value,
          "total-items": t.models.length,
          onPrev: I[0] || (I[0] = (be) => x(f.value - 1)),
          onNext: I[1] || (I[1] = (be) => x(f.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
        T.value ? (s(), o("div", rd, [
          k(td, {
            filename: T.value.filename,
            "node-type": ((ae = T.value.reference) == null ? void 0 : ae.node_type) || "Unknown",
            "has-multiple-options": !!((oe = T.value.options) != null && oe.length),
            options: T.value.options,
            choice: (Me = t.modelChoices) == null ? void 0 : Me.get(T.value.filename),
            status: z.value,
            "status-label": S.value,
            onMarkOptional: K,
            onSkip: V,
            onDownloadUrl: U,
            onSearch: M,
            onOptionSelected: H,
            onClearChoice: D
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", dd, [...I[5] || (I[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), E(Ae, { to: "body" }, [
          v.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Le(ne, ["self"])
          }, [
            e("div", cd, [
              e("div", { class: "model-modal-header" }, [
                I[6] || (I[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: ne
                }, "✕")
              ]),
              e("div", ud, [
                k(nt, {
                  modelValue: u.value,
                  "onUpdate:modelValue": I[2] || (I[2] = (be) => u.value = be),
                  placeholder: "Search by filename, category...",
                  onInput: j
                }, null, 8, ["modelValue"]),
                b.value.length > 0 ? (s(), o("div", md, [
                  (s(!0), o(A, null, Z(b.value, (be) => (s(), o("div", {
                    key: be.hash,
                    class: "model-search-result-item",
                    onClick: (re) => ie()
                  }, [
                    e("div", fd, [
                      e("code", gd, a(be.filename), 1)
                    ]),
                    e("div", pd, [
                      e("span", hd, a(be.category), 1),
                      e("span", yd, a(N(be.size)), 1)
                    ]),
                    be.relative_path ? (s(), o("div", wd, a(be.relative_path), 1)) : d("", !0)
                  ], 8, vd))), 128))
                ])) : u.value && !$.value ? (s(), o("div", kd, ' No models found matching "' + a(u.value) + '" ', 1)) : d("", !0),
                $.value ? (s(), o("div", bd, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (s(), E(Ae, { to: "body" }, [
          r.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Le(X, ["self"])
          }, [
            e("div", _d, [
              e("div", { class: "model-modal-header" }, [
                I[7] || (I[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: X
                }, "✕")
              ]),
              e("div", $d, [
                e("div", Cd, [
                  I[8] || (I[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  k(nt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": I[3] || (I[3] = (be) => p.value = be),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", xd, [
                  I[9] || (I[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  k(nt, {
                    modelValue: w.value,
                    "onUpdate:modelValue": I[4] || (I[4] = (be) => w.value = be),
                    placeholder: _.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", Sd, [
                  k(ve, {
                    variant: "secondary",
                    onClick: X
                  }, {
                    default: l(() => [...I[10] || (I[10] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(ve, {
                    variant: "primary",
                    disabled: !p.value.trim() || !w.value.trim(),
                    onClick: J
                  }, {
                    default: l(() => [...I[11] || (I[11] = [
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
}), Ed = /* @__PURE__ */ te(Id, [["__scopeId", "data-v-c6acbada"]]), Md = { class: "applying-step" }, Td = {
  key: 0,
  class: "phase-content"
}, Rd = {
  key: 1,
  class: "phase-content"
}, zd = { class: "phase-description" }, Ld = { class: "overall-progress" }, Pd = { class: "progress-bar" }, Dd = { class: "progress-label" }, Nd = { class: "install-list" }, Ud = { class: "install-icon" }, Od = { key: 0 }, Bd = {
  key: 1,
  class: "spinner"
}, Fd = { key: 2 }, Ad = { key: 3 }, Vd = {
  key: 0,
  class: "install-error"
}, Wd = {
  key: 2,
  class: "phase-content"
}, jd = { class: "phase-header" }, Gd = { class: "phase-title" }, qd = { class: "completion-summary" }, Hd = {
  key: 0,
  class: "summary-item success"
}, Kd = { class: "summary-text" }, Jd = {
  key: 1,
  class: "summary-item error"
}, Yd = { class: "summary-text" }, Xd = {
  key: 2,
  class: "failed-list"
}, Qd = { class: "failed-node-id" }, Zd = { class: "failed-error" }, ec = {
  key: 4,
  class: "summary-item success"
}, tc = {
  key: 5,
  class: "restart-prompt"
}, sc = {
  key: 3,
  class: "phase-content error"
}, oc = { class: "error-message" }, nc = /* @__PURE__ */ ee({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const c = t, n = P(() => {
      var u, p;
      const v = ((u = c.progress.nodeInstallProgress) == null ? void 0 : u.totalNodes) || c.progress.nodesToInstall.length;
      if (!v) return 0;
      const r = ((p = c.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0;
      return Math.round(r / v * 100);
    }), i = P(() => {
      var v;
      return ((v = c.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.filter((r) => !r.success)) || [];
    }), y = P(() => i.value.length > 0);
    function g(v, r) {
      var p, w;
      const u = (p = c.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.find((b) => b.node_id === v);
      return u ? u.success ? "complete" : "failed" : ((w = c.progress.nodeInstallProgress) == null ? void 0 : w.currentIndex) === r ? "installing" : "pending";
    }
    function f(v) {
      var r, u;
      return (u = (r = c.progress.nodeInstallProgress) == null ? void 0 : r.completedNodes.find((p) => p.node_id === v)) == null ? void 0 : u.error;
    }
    return (v, r) => {
      var u, p, w, b;
      return s(), o("div", Md, [
        t.progress.phase === "resolving" ? (s(), o("div", Td, [...r[2] || (r[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", Rd, [
          r[3] || (r[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", zd, " Installing " + a((((u = t.progress.nodeInstallProgress) == null ? void 0 : u.currentIndex) ?? 0) + 1) + " of " + a(((p = t.progress.nodeInstallProgress) == null ? void 0 : p.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Ld, [
            e("div", Pd, [
              e("div", {
                class: "progress-fill",
                style: pt({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Dd, a(((w = t.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.length) ?? 0) + " / " + a(((b = t.progress.nodeInstallProgress) == null ? void 0 : b.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Nd, [
            (s(!0), o(A, null, Z(t.progress.nodesToInstall, ($, T) => (s(), o("div", {
              key: $,
              class: de(["install-item", g($, T)])
            }, [
              e("span", Ud, [
                g($, T) === "pending" ? (s(), o("span", Od, "○")) : g($, T) === "installing" ? (s(), o("span", Bd, "◌")) : g($, T) === "complete" ? (s(), o("span", Fd, "✓")) : g($, T) === "failed" ? (s(), o("span", Ad, "✗")) : d("", !0)
              ]),
              e("code", null, a($), 1),
              f($) ? (s(), o("span", Vd, a(f($)), 1)) : d("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", Wd, [
          e("div", jd, [
            e("span", {
              class: de(["phase-icon", y.value ? "warning" : "success"])
            }, a(y.value ? "⚠" : "✓"), 3),
            e("h3", Gd, a(y.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", qd, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", Hd, [
              r[4] || (r[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", Kd, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("div", Jd, [
              r[5] || (r[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", Yd, a(i.value.length) + " package" + a(i.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("div", Xd, [
              (s(!0), o(A, null, Z(i.value, ($) => (s(), o("div", {
                key: $.node_id,
                class: "failed-item"
              }, [
                e("code", Qd, a($.node_id), 1),
                e("span", Zd, a($.error), 1)
              ]))), 128))
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: r[0] || (r[0] = ($) => v.$emit("retry-failed"))
            }, " Retry Failed (" + a(i.value.length) + ") ", 1)) : d("", !0),
            y.value ? d("", !0) : (s(), o("div", ec, [...r[6] || (r[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            r[8] || (r[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", tc, [
              r[7] || (r[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: r[1] || (r[1] = ($) => v.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : d("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", sc, [
          r[9] || (r[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", oc, a(t.progress.error), 1)
        ])) : d("", !0)
      ]);
    };
  }
}), ac = /* @__PURE__ */ te(nc, [["__scopeId", "data-v-5efaae58"]]), lc = {
  key: 0,
  class: "loading-state"
}, ic = {
  key: 1,
  class: "wizard-content"
}, rc = {
  key: 0,
  class: "step-content"
}, dc = { class: "analysis-summary" }, cc = { class: "analysis-header" }, uc = { class: "summary-description" }, mc = { class: "stats-grid" }, vc = { class: "stat-card" }, fc = { class: "stat-items" }, gc = {
  key: 0,
  class: "stat-item success"
}, pc = { class: "stat-count" }, hc = {
  key: 1,
  class: "stat-item info"
}, yc = { class: "stat-count" }, wc = {
  key: 2,
  class: "stat-item warning"
}, kc = { class: "stat-count" }, bc = {
  key: 3,
  class: "stat-item error"
}, _c = { class: "stat-count" }, $c = { class: "stat-card" }, Cc = { class: "stat-items" }, xc = { class: "stat-item success" }, Sc = { class: "stat-count" }, Ic = {
  key: 0,
  class: "stat-item info"
}, Ec = { class: "stat-count" }, Mc = {
  key: 1,
  class: "stat-item warning"
}, Tc = { class: "stat-count" }, Rc = {
  key: 2,
  class: "stat-item warning"
}, zc = { class: "stat-count" }, Lc = {
  key: 3,
  class: "stat-item error"
}, Pc = { class: "stat-count" }, Dc = {
  key: 0,
  class: "status-message warning"
}, Nc = { class: "status-text" }, Uc = {
  key: 1,
  class: "status-message info"
}, Oc = { class: "status-text" }, Bc = {
  key: 2,
  class: "status-message info"
}, Fc = { class: "status-text" }, Ac = {
  key: 3,
  class: "status-message warning"
}, Vc = { class: "status-text" }, Wc = {
  key: 4,
  class: "status-message success"
}, jc = {
  key: 5,
  class: "category-mismatch-section"
}, Gc = { class: "mismatch-list" }, qc = { class: "mismatch-path" }, Hc = { class: "mismatch-target" }, Kc = {
  key: 3,
  class: "step-content"
}, Jc = { class: "review-summary" }, Yc = { class: "review-stats" }, Xc = { class: "review-stat" }, Qc = { class: "stat-value" }, Zc = { class: "review-stat" }, eu = { class: "stat-value" }, tu = { class: "review-stat" }, su = { class: "stat-value" }, ou = { class: "review-stat" }, nu = { class: "stat-value" }, au = {
  key: 0,
  class: "review-section"
}, lu = { class: "section-title" }, iu = { class: "review-items" }, ru = { class: "item-name" }, du = { class: "item-choice" }, cu = {
  key: 0,
  class: "choice-badge install"
}, uu = {
  key: 1,
  class: "choice-badge skip"
}, mu = {
  key: 1,
  class: "review-section"
}, vu = { class: "section-title" }, fu = { class: "review-items" }, gu = { class: "item-name" }, pu = { class: "item-choice" }, hu = {
  key: 0,
  class: "choice-badge install"
}, yu = {
  key: 1,
  class: "choice-badge optional"
}, wu = {
  key: 2,
  class: "choice-badge skip"
}, ku = {
  key: 1,
  class: "choice-badge pending"
}, bu = {
  key: 2,
  class: "review-section"
}, _u = { class: "section-title" }, $u = { class: "review-items" }, Cu = { class: "item-name" }, xu = { class: "item-choice" }, Su = {
  key: 0,
  class: "choice-badge install"
}, Iu = {
  key: 1,
  class: "choice-badge download"
}, Eu = {
  key: 2,
  class: "choice-badge optional"
}, Mu = {
  key: 3,
  class: "choice-badge skip"
}, Tu = {
  key: 4,
  class: "choice-badge skip"
}, Ru = {
  key: 1,
  class: "choice-badge download"
}, zu = {
  key: 2,
  class: "choice-badge pending"
}, Lu = {
  key: 3,
  class: "no-choices"
}, Pu = /* @__PURE__ */ ee({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, i = c, { analyzeWorkflow: y, applyResolution: g, installNodes: f, queueModelDownloads: v, progress: r, resetProgress: u } = Ps(), { loadPendingDownloads: p } = jt(), { openFileLocation: w } = Fe(), b = C(null), $ = C(!1), T = C(!1), O = C(null), m = C("analysis"), _ = C([]), z = C(/* @__PURE__ */ new Map()), S = C(/* @__PURE__ */ new Map()), x = C(/* @__PURE__ */ new Set()), K = P(() => {
      const Y = [
        { id: "analysis", label: "Analysis" }
      ];
      return (H.value || U.value) && Y.push({ id: "nodes", label: "Nodes" }), (D.value || M.value) && Y.push({ id: "models", label: "Models" }), Y.push({ id: "review", label: "Review" }), m.value === "applying" && Y.push({ id: "applying", label: "Applying" }), Y;
    }), V = P(() => b.value ? b.value.stats.needs_user_input : !1), H = P(() => b.value ? b.value.nodes.unresolved.length > 0 || b.value.nodes.ambiguous.length > 0 : !1), D = P(() => b.value ? b.value.models.unresolved.length > 0 || b.value.models.ambiguous.length > 0 : !1), M = P(() => b.value ? b.value.stats.download_intents > 0 : !1), U = P(() => b.value ? b.value.stats.nodes_needing_installation > 0 : !1), ne = P(() => b.value ? b.value.nodes.resolved.length : 0), X = P(() => b.value ? b.value.models.resolved.filter((Y) => Y.has_category_mismatch) : []), j = P(() => X.value.length > 0), ie = P(() => {
      if (!b.value) return [];
      const Y = b.value.nodes.resolved.filter((F) => !F.is_installed), B = /* @__PURE__ */ new Set();
      return Y.filter((F) => B.has(F.package.package_id) ? !1 : (B.add(F.package.package_id), !0));
    }), J = P(() => {
      if (!b.value) return [];
      const Y = b.value.nodes.resolved.filter((F) => !F.is_installed), B = /* @__PURE__ */ new Map();
      for (const F of Y) {
        const Q = B.get(F.package.package_id);
        Q ? Q.node_types_count++ : B.set(F.package.package_id, {
          package_id: F.package.package_id,
          title: F.package.title,
          node_types_count: 1
        });
      }
      return Array.from(B.values());
    }), N = P(() => ie.value.filter((Y) => !x.value.has(Y.package.package_id))), L = P(() => b.value ? b.value.models.resolved.filter((Y) => Y.match_type === "download_intent").map((Y) => ({
      filename: Y.reference.widget_value,
      reference: Y.reference,
      is_download_intent: !0,
      resolved_model: Y.model,
      download_source: Y.download_source,
      target_path: Y.target_path
    })) : []), I = P(() => {
      if (!b.value) return [];
      const Y = b.value.nodes.unresolved.map((F) => ({
        node_type: F.reference.node_type,
        reason: F.reason,
        is_unresolved: !0,
        options: void 0
      })), B = b.value.nodes.ambiguous.map((F) => ({
        node_type: F.reference.node_type,
        has_multiple_options: !0,
        options: F.options.map((Q) => ({
          package_id: Q.package.package_id,
          title: Q.package.title,
          match_confidence: Q.match_confidence,
          match_type: Q.match_type,
          is_installed: Q.is_installed
        }))
      }));
      return [...Y, ...B];
    }), ae = P(() => {
      if (!b.value) return [];
      const Y = b.value.models.unresolved.map((F) => ({
        filename: F.reference.widget_value,
        reference: F.reference,
        reason: F.reason,
        is_unresolved: !0,
        options: void 0
      })), B = b.value.models.ambiguous.map((F) => ({
        filename: F.reference.widget_value,
        reference: F.reference,
        has_multiple_options: !0,
        options: F.options.map((Q) => ({
          model: Q.model,
          match_confidence: Q.match_confidence,
          match_type: Q.match_type,
          has_download_source: Q.has_download_source
        }))
      }));
      return [...Y, ...B];
    }), oe = P(() => {
      const Y = ae.value, B = L.value.map((F) => ({
        filename: F.filename,
        reference: F.reference,
        is_download_intent: !0,
        resolved_model: F.resolved_model,
        download_source: F.download_source,
        target_path: F.target_path,
        options: void 0
      }));
      return [...Y, ...B];
    }), Me = P(() => {
      let Y = N.value.length;
      for (const B of z.value.values())
        B.action === "install" && Y++;
      for (const B of S.value.values())
        B.action === "select" && Y++;
      return Y;
    }), be = P(() => {
      let Y = 0;
      for (const B of S.value.values())
        B.action === "download" && Y++;
      return Y;
    }), re = P(() => {
      let Y = 0;
      for (const B of z.value.values())
        B.action === "optional" && Y++;
      for (const B of S.value.values())
        B.action === "optional" && Y++;
      return Y;
    }), le = P(() => {
      let Y = x.value.size;
      for (const B of z.value.values())
        B.action === "skip" && Y++;
      for (const B of S.value.values())
        B.action === "skip" && Y++;
      for (const B of I.value)
        z.value.has(B.node_type) || Y++;
      for (const B of ae.value)
        S.value.has(B.filename) || Y++;
      return Y;
    }), ce = P(() => {
      const Y = {};
      if (Y.analysis = { resolved: 1, total: 1 }, H.value) {
        const B = I.value.length, F = I.value.filter(
          (Q) => z.value.has(Q.node_type)
        ).length;
        Y.nodes = { resolved: F, total: B };
      }
      if (D.value || M.value) {
        const B = oe.value.length, F = oe.value.filter(
          (Q) => S.value.has(Q.filename) || Q.is_download_intent
        ).length;
        Y.models = { resolved: F, total: B };
      }
      if (Y.review = { resolved: 1, total: 1 }, m.value === "applying") {
        const B = r.totalFiles || 1, F = r.completedFiles.length;
        Y.applying = { resolved: F, total: B };
      }
      return Y;
    });
    function fe(Y) {
      m.value = Y;
    }
    function Re() {
      const Y = K.value.findIndex((B) => B.id === m.value);
      Y > 0 && (m.value = K.value[Y - 1].id);
    }
    function he() {
      const Y = K.value.findIndex((B) => B.id === m.value);
      Y < K.value.length - 1 && (m.value = K.value[Y + 1].id);
    }
    async function ge() {
      $.value = !0, O.value = null;
      try {
        b.value = await y(n.workflowName);
      } catch (Y) {
        O.value = Y instanceof Error ? Y.message : "Failed to analyze workflow";
      } finally {
        $.value = !1;
      }
    }
    function G() {
      _.value.includes("analysis") || _.value.push("analysis"), H.value || U.value ? m.value = "nodes" : D.value || M.value ? m.value = "models" : m.value = "review";
    }
    function Ee(Y) {
      z.value.set(Y, { action: "optional" });
    }
    function xe(Y) {
      z.value.set(Y, { action: "skip" });
    }
    function Te(Y, B) {
      var Q;
      const F = I.value.find((we) => we.node_type === Y);
      (Q = F == null ? void 0 : F.options) != null && Q[B] && z.value.set(Y, {
        action: "install",
        package_id: F.options[B].package_id
      });
    }
    function me(Y, B) {
      z.value.set(Y, {
        action: "install",
        package_id: B
      });
    }
    function Je(Y) {
      z.value.delete(Y);
    }
    function et(Y) {
      x.value.has(Y) ? x.value.delete(Y) : x.value.add(Y);
    }
    function Ye(Y) {
      S.value.set(Y, { action: "optional" });
    }
    function _t(Y) {
      S.value.set(Y, { action: "skip" });
    }
    function ke(Y, B) {
      var Q;
      const F = ae.value.find((we) => we.filename === Y);
      (Q = F == null ? void 0 : F.options) != null && Q[B] && S.value.set(Y, {
        action: "select",
        selected_model: F.options[B].model
      });
    }
    function Ve(Y, B, F) {
      S.value.set(Y, {
        action: "download",
        url: B,
        target_path: F
      });
    }
    function wt(Y) {
      S.value.delete(Y);
    }
    async function ut(Y) {
      try {
        await w(Y);
      } catch (B) {
        O.value = B instanceof Error ? B.message : "Failed to open file location";
      }
    }
    async function Pe() {
      var Y;
      T.value = !0, O.value = null, u(), r.phase = "resolving", m.value = "applying";
      try {
        const B = await g(n.workflowName, z.value, S.value, x.value);
        B.models_to_download && B.models_to_download.length > 0 && v(n.workflowName, B.models_to_download);
        const F = [
          ...B.nodes_to_install || [],
          ...N.value.map((we) => we.package.package_id)
        ];
        r.nodesToInstall = [...new Set(F)], r.nodesToInstall.length > 0 && await f(n.workflowName), r.phase = "complete", await p();
        const Q = r.installError || ((Y = r.nodeInstallProgress) == null ? void 0 : Y.completedNodes.some((we) => !we.success));
        !r.needsRestart && !Q && setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1500);
      } catch (B) {
        O.value = B instanceof Error ? B.message : "Failed to apply resolution", r.error = O.value, r.phase = "error";
      } finally {
        T.value = !1;
      }
    }
    function $t() {
      i("refresh"), i("restart"), i("close");
    }
    async function lt() {
      var B;
      const Y = ((B = r.nodeInstallProgress) == null ? void 0 : B.completedNodes.filter((F) => !F.success).map((F) => F.node_id)) || [];
      if (Y.length !== 0) {
        r.phase = "installing", r.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: Y.length
        }, r.nodesToInstall = Y, r.nodesInstalled = [], r.installError = void 0;
        try {
          await f(n.workflowName), r.phase = "complete";
        } catch (F) {
          r.error = F instanceof Error ? F.message : "Retry failed", r.phase = "error";
        }
      }
    }
    return Oe(ge), (Y, B) => (s(), E(Ke, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: $.value,
      error: O.value || void 0,
      "fixed-height": !0,
      onClose: B[1] || (B[1] = (F) => i("close"))
    }, {
      body: l(() => [
        $.value && !b.value ? (s(), o("div", lc, [...B[2] || (B[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : b.value ? (s(), o("div", ic, [
          k(fi, {
            steps: K.value,
            "current-step": m.value,
            "completed-steps": _.value,
            "step-stats": ce.value,
            onStepChange: fe
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          m.value === "analysis" ? (s(), o("div", rc, [
            e("div", dc, [
              e("div", cc, [
                B[3] || (B[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", uc, " Found " + a(b.value.stats.total_nodes) + " nodes and " + a(b.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", mc, [
                e("div", vc, [
                  B[12] || (B[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", fc, [
                    ne.value > 0 ? (s(), o("div", gc, [
                      B[4] || (B[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", pc, a(ne.value), 1),
                      B[5] || (B[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : d("", !0),
                    b.value.stats.packages_needing_installation > 0 ? (s(), o("div", hc, [
                      B[6] || (B[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", yc, a(b.value.stats.packages_needing_installation), 1),
                      B[7] || (B[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : d("", !0),
                    b.value.nodes.ambiguous.length > 0 ? (s(), o("div", wc, [
                      B[8] || (B[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", kc, a(b.value.nodes.ambiguous.length), 1),
                      B[9] || (B[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    b.value.nodes.unresolved.length > 0 ? (s(), o("div", bc, [
                      B[10] || (B[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", _c, a(b.value.nodes.unresolved.length), 1),
                      B[11] || (B[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ]),
                e("div", $c, [
                  B[23] || (B[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Cc, [
                    e("div", xc, [
                      B[13] || (B[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Sc, a(b.value.models.resolved.length - b.value.stats.download_intents - b.value.stats.models_with_category_mismatch), 1),
                      B[14] || (B[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.stats.download_intents > 0 ? (s(), o("div", Ic, [
                      B[15] || (B[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Ec, a(b.value.stats.download_intents), 1),
                      B[16] || (B[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : d("", !0),
                    j.value ? (s(), o("div", Mc, [
                      B[17] || (B[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", Tc, a(X.value.length), 1),
                      B[18] || (B[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : d("", !0),
                    b.value.models.ambiguous.length > 0 ? (s(), o("div", Rc, [
                      B[19] || (B[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", zc, a(b.value.models.ambiguous.length), 1),
                      B[20] || (B[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    b.value.models.unresolved.length > 0 ? (s(), o("div", Lc, [
                      B[21] || (B[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Pc, a(b.value.models.unresolved.length), 1),
                      B[22] || (B[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ])
              ]),
              V.value ? (s(), o("div", Dc, [
                B[24] || (B[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Nc, a(I.value.length + ae.value.length) + " items need your input", 1)
              ])) : U.value ? (s(), o("div", Uc, [
                B[25] || (B[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Oc, a(b.value.stats.packages_needing_installation) + " package" + a(b.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(b.value.stats.nodes_needing_installation) + " node type" + a(b.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(M.value ? `, ${b.value.stats.download_intents} model${b.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : M.value ? (s(), o("div", Bc, [
                B[26] || (B[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Fc, a(b.value.stats.download_intents) + " model" + a(b.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : j.value ? (s(), o("div", Ac, [
                B[27] || (B[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Vc, a(X.value.length) + " model" + a(X.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", Wc, [...B[28] || (B[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              j.value ? (s(), o("div", jc, [
                B[31] || (B[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", Gc, [
                  (s(!0), o(A, null, Z(X.value, (F) => {
                    var Q, we;
                    return s(), o("div", {
                      key: F.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", qc, a(F.actual_category) + "/" + a((Q = F.model) == null ? void 0 : Q.filename), 1),
                      B[30] || (B[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", Hc, a((we = F.expected_categories) == null ? void 0 : we[0]) + "/", 1),
                      F.file_path ? (s(), E(ve, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (it) => ut(F.file_path)
                      }, {
                        default: l(() => [...B[29] || (B[29] = [
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
          m.value === "nodes" ? (s(), E(Dr, {
            key: 1,
            nodes: I.value,
            "node-choices": z.value,
            "auto-resolved-packages": J.value,
            "skipped-packages": x.value,
            onMarkOptional: Ee,
            onSkip: xe,
            onOptionSelected: Te,
            onManualEntry: me,
            onClearChoice: Je,
            onPackageSkip: et
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : d("", !0),
          m.value === "models" ? (s(), E(Ed, {
            key: 2,
            models: oe.value,
            "model-choices": S.value,
            onMarkOptional: Ye,
            onSkip: _t,
            onOptionSelected: ke,
            onDownloadUrl: Ve,
            onClearChoice: wt
          }, null, 8, ["models", "model-choices"])) : d("", !0),
          m.value === "review" ? (s(), o("div", Kc, [
            e("div", Jc, [
              B[36] || (B[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Yc, [
                e("div", Xc, [
                  e("span", Qc, a(Me.value), 1),
                  B[32] || (B[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Zc, [
                  e("span", eu, a(be.value), 1),
                  B[33] || (B[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", tu, [
                  e("span", su, a(re.value), 1),
                  B[34] || (B[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", ou, [
                  e("span", nu, a(le.value), 1),
                  B[35] || (B[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              J.value.length > 0 ? (s(), o("div", au, [
                e("h4", lu, "Node Packages (" + a(J.value.length) + ")", 1),
                e("div", iu, [
                  (s(!0), o(A, null, Z(J.value, (F) => (s(), o("div", {
                    key: F.package_id,
                    class: "review-item"
                  }, [
                    e("code", ru, a(F.package_id), 1),
                    e("div", du, [
                      x.value.has(F.package_id) ? (s(), o("span", uu, "Skipped")) : (s(), o("span", cu, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : d("", !0),
              I.value.length > 0 ? (s(), o("div", mu, [
                e("h4", vu, "Node Choices (" + a(I.value.length) + ")", 1),
                e("div", fu, [
                  (s(!0), o(A, null, Z(I.value, (F) => {
                    var Q, we, it, mt;
                    return s(), o("div", {
                      key: F.node_type,
                      class: "review-item"
                    }, [
                      e("code", gu, a(F.node_type), 1),
                      e("div", pu, [
                        z.value.has(F.node_type) ? (s(), o(A, { key: 0 }, [
                          ((Q = z.value.get(F.node_type)) == null ? void 0 : Q.action) === "install" ? (s(), o("span", hu, a((we = z.value.get(F.node_type)) == null ? void 0 : we.package_id), 1)) : ((it = z.value.get(F.node_type)) == null ? void 0 : it.action) === "optional" ? (s(), o("span", yu, " Optional ")) : ((mt = z.value.get(F.node_type)) == null ? void 0 : mt.action) === "skip" ? (s(), o("span", wu, " Skip ")) : d("", !0)
                        ], 64)) : (s(), o("span", ku, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              oe.value.length > 0 ? (s(), o("div", bu, [
                e("h4", _u, "Models (" + a(oe.value.length) + ")", 1),
                e("div", $u, [
                  (s(!0), o(A, null, Z(oe.value, (F) => {
                    var Q, we, it, mt, tt, xt, vt;
                    return s(), o("div", {
                      key: F.filename,
                      class: "review-item"
                    }, [
                      e("code", Cu, a(F.filename), 1),
                      e("div", xu, [
                        S.value.has(F.filename) ? (s(), o(A, { key: 0 }, [
                          ((Q = S.value.get(F.filename)) == null ? void 0 : Q.action) === "select" ? (s(), o("span", Su, a((it = (we = S.value.get(F.filename)) == null ? void 0 : we.selected_model) == null ? void 0 : it.filename), 1)) : ((mt = S.value.get(F.filename)) == null ? void 0 : mt.action) === "download" ? (s(), o("span", Iu, " Download ")) : ((tt = S.value.get(F.filename)) == null ? void 0 : tt.action) === "optional" ? (s(), o("span", Eu, " Optional ")) : ((xt = S.value.get(F.filename)) == null ? void 0 : xt.action) === "skip" ? (s(), o("span", Mu, " Skip ")) : ((vt = S.value.get(F.filename)) == null ? void 0 : vt.action) === "cancel_download" ? (s(), o("span", Tu, " Cancel Download ")) : d("", !0)
                        ], 64)) : F.is_download_intent ? (s(), o("span", Ru, " Pending Download ")) : (s(), o("span", zu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              ie.value.length === 0 && I.value.length === 0 && oe.value.length === 0 ? (s(), o("div", Lu, " No dependencies need resolution. ")) : d("", !0)
            ])
          ])) : d("", !0),
          m.value === "applying" ? (s(), E(ac, {
            key: 4,
            progress: $e(r),
            onRestart: $t,
            onRetryFailed: lt
          }, null, 8, ["progress"])) : d("", !0)
        ])) : d("", !0)
      ]),
      footer: l(() => [
        m.value !== "analysis" && m.value !== "applying" ? (s(), E(ve, {
          key: 0,
          variant: "secondary",
          disabled: T.value,
          onClick: Re
        }, {
          default: l(() => [...B[37] || (B[37] = [
            h(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        B[41] || (B[41] = e("div", { class: "footer-spacer" }, null, -1)),
        m.value !== "applying" || $e(r).phase === "complete" || $e(r).phase === "error" ? (s(), E(ve, {
          key: 1,
          variant: "secondary",
          onClick: B[0] || (B[0] = (F) => i("close"))
        }, {
          default: l(() => [
            h(a($e(r).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : d("", !0),
        m.value === "analysis" ? (s(), E(ve, {
          key: 2,
          variant: "primary",
          disabled: $.value,
          onClick: G
        }, {
          default: l(() => [...B[38] || (B[38] = [
            h(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        m.value === "nodes" ? (s(), E(ve, {
          key: 3,
          variant: "primary",
          onClick: he
        }, {
          default: l(() => [
            h(a(D.value || M.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : d("", !0),
        m.value === "models" ? (s(), E(ve, {
          key: 4,
          variant: "primary",
          onClick: he
        }, {
          default: l(() => [...B[39] || (B[39] = [
            h(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : d("", !0),
        m.value === "review" ? (s(), E(ve, {
          key: 5,
          variant: "primary",
          disabled: T.value,
          loading: T.value,
          onClick: Pe
        }, {
          default: l(() => [...B[40] || (B[40] = [
            h(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Du = /* @__PURE__ */ te(Pu, [["__scopeId", "data-v-6276cf1d"]]), Nu = { class: "search-input-wrapper" }, Uu = ["value", "placeholder"], Ou = /* @__PURE__ */ ee({
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
    const n = t, i = c, y = C(null);
    let g;
    function f(r) {
      const u = r.target.value;
      n.debounce > 0 ? (clearTimeout(g), g = window.setTimeout(() => {
        i("update:modelValue", u);
      }, n.debounce)) : i("update:modelValue", u);
    }
    function v() {
      var r;
      i("update:modelValue", ""), i("clear"), (r = y.value) == null || r.focus();
    }
    return Oe(() => {
      n.autoFocus && y.value && y.value.focus();
    }), (r, u) => (s(), o("div", Nu, [
      e("input", {
        ref_key: "inputRef",
        ref: y,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: f,
        onKeyup: gt(v, ["escape"])
      }, null, 40, Uu),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: v,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), Bu = /* @__PURE__ */ te(Ou, [["__scopeId", "data-v-266f857a"]]), Fu = { class: "search-bar" }, Au = /* @__PURE__ */ ee({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, n) => (s(), o("div", Fu, [
      k(Bu, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => c.$emit("update:modelValue", i)),
        onClear: n[1] || (n[1] = (i) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), zt = /* @__PURE__ */ te(Au, [["__scopeId", "data-v-3d51bbfd"]]), Vu = { class: "section-group" }, Wu = {
  key: 0,
  class: "section-content"
}, ju = /* @__PURE__ */ ee({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const n = t, i = c, y = C(n.initiallyExpanded);
    function g() {
      n.collapsible && (y.value = !y.value, i("toggle", y.value));
    }
    return (f, v) => (s(), o("section", Vu, [
      k(Ze, {
        count: t.count,
        clickable: t.collapsible,
        expanded: y.value,
        onClick: g
      }, {
        default: l(() => [
          h(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || y.value ? (s(), o("div", Wu, [
        Ce(f.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Be = /* @__PURE__ */ te(ju, [["__scopeId", "data-v-c48e33ed"]]), Gu = { class: "item-header" }, qu = {
  key: 0,
  class: "item-icon"
}, Hu = { class: "item-info" }, Ku = {
  key: 0,
  class: "item-title"
}, Ju = {
  key: 1,
  class: "item-subtitle"
}, Yu = {
  key: 0,
  class: "item-details"
}, Xu = {
  key: 1,
  class: "item-actions"
}, Qu = /* @__PURE__ */ ee({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, i = P(() => n.status ? `status-${n.status}` : "");
    return (y, g) => (s(), o("div", {
      class: de(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: g[0] || (g[0] = (f) => t.clickable && y.$emit("click"))
    }, [
      e("div", Gu, [
        y.$slots.icon ? (s(), o("span", qu, [
          Ce(y.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        e("div", Hu, [
          y.$slots.title ? (s(), o("div", Ku, [
            Ce(y.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          y.$slots.subtitle ? (s(), o("div", Ju, [
            Ce(y.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      y.$slots.details ? (s(), o("div", Yu, [
        Ce(y.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      y.$slots.actions ? (s(), o("div", Xu, [
        Ce(y.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), je = /* @__PURE__ */ te(Qu, [["__scopeId", "data-v-cc435e0e"]]), Zu = { class: "loading-state" }, em = { class: "loading-message" }, tm = /* @__PURE__ */ ee({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, n) => (s(), o("div", Zu, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", em, a(t.message), 1)
    ]));
  }
}), ht = /* @__PURE__ */ te(tm, [["__scopeId", "data-v-ad8436c9"]]), sm = { class: "error-state" }, om = { class: "error-message" }, nm = /* @__PURE__ */ ee({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, n) => (s(), o("div", sm, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", om, a(t.message), 1),
      t.retry ? (s(), E(se, {
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
}), yt = /* @__PURE__ */ te(nm, [["__scopeId", "data-v-5397be48"]]), am = /* @__PURE__ */ ee({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getWorkflows: y } = Fe();
    zs();
    const g = C([]), f = C(!1), v = C(null), r = C(""), u = C(!0), p = C(!1), w = C(!1), b = C(!1), $ = C(null), T = P(
      () => g.value.filter((N) => N.status === "broken")
    ), O = P(
      () => g.value.filter((N) => N.status === "new")
    ), m = P(
      () => g.value.filter((N) => N.status === "modified")
    ), _ = P(
      () => g.value.filter((N) => N.status === "synced")
    ), z = P(() => {
      if (!r.value.trim()) return g.value;
      const N = r.value.toLowerCase();
      return g.value.filter((L) => L.name.toLowerCase().includes(N));
    }), S = P(
      () => T.value.filter(
        (N) => !r.value.trim() || N.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), x = P(
      () => O.value.filter(
        (N) => !r.value.trim() || N.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), K = P(
      () => m.value.filter(
        (N) => !r.value.trim() || N.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), V = P(
      () => _.value.filter(
        (N) => !r.value.trim() || N.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), H = P(
      () => p.value ? V.value : V.value.slice(0, 5)
    );
    async function D(N = !1) {
      f.value = !0, v.value = null;
      try {
        g.value = await y(N);
      } catch (L) {
        v.value = L instanceof Error ? L.message : "Failed to load workflows";
      } finally {
        f.value = !1;
      }
    }
    c({ loadWorkflows: D });
    function M(N) {
      $.value = N, w.value = !0;
    }
    function U(N) {
      $.value = N, b.value = !0;
    }
    function ne() {
      i("refresh");
    }
    async function X() {
      b.value = !1, await D(!0);
    }
    async function j() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ie(N) {
      const L = [];
      return N.missing_nodes > 0 && L.push(`${N.missing_nodes} missing node${N.missing_nodes > 1 ? "s" : ""}`), N.missing_models > 0 && L.push(`${N.missing_models} missing model${N.missing_models > 1 ? "s" : ""}`), N.models_with_category_mismatch && N.models_with_category_mismatch > 0 && L.push(`${N.models_with_category_mismatch} model${N.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), N.pending_downloads && N.pending_downloads > 0 && L.push(`${N.pending_downloads} pending download${N.pending_downloads > 1 ? "s" : ""}`), L.length > 0 ? L.join(", ") : "Has issues";
    }
    function J(N) {
      const L = N.sync_state === "new" ? "New" : N.sync_state === "modified" ? "Modified" : N.sync_state === "synced" ? "Synced" : N.sync_state;
      return N.has_path_sync_issues && N.models_needing_path_sync && N.models_needing_path_sync > 0 ? `${N.models_needing_path_sync} model path${N.models_needing_path_sync > 1 ? "s" : ""} need${N.models_needing_path_sync === 1 ? "s" : ""} sync` : L || "Unknown";
    }
    return Oe(D), (N, L) => (s(), o(A, null, [
      k(Ge, null, {
        header: l(() => [
          k(qe, { title: "WORKFLOWS" })
        ]),
        search: l(() => [
          k(zt, {
            modelValue: r.value,
            "onUpdate:modelValue": L[0] || (L[0] = (I) => r.value = I),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          f.value ? (s(), E(ht, {
            key: 0,
            message: "Loading workflows..."
          })) : v.value ? (s(), E(yt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            S.value.length ? (s(), E(Be, {
              key: 0,
              title: "BROKEN",
              count: S.value.length
            }, {
              default: l(() => [
                (s(!0), o(A, null, Z(S.value, (I) => (s(), E(je, {
                  key: I.name,
                  status: "broken"
                }, {
                  icon: l(() => [...L[7] || (L[7] = [
                    h("⚠", -1)
                  ])]),
                  title: l(() => [
                    h(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(ie(I)), 1)
                  ]),
                  actions: l(() => [
                    k(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ae) => U(I.name)
                    }, {
                      default: l(() => [...L[8] || (L[8] = [
                        h(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => M(I.name)
                    }, {
                      default: l(() => [...L[9] || (L[9] = [
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
            x.value.length ? (s(), E(Be, {
              key: 1,
              title: "NEW",
              count: x.value.length
            }, {
              default: l(() => [
                (s(!0), o(A, null, Z(x.value, (I) => (s(), E(je, {
                  key: I.name,
                  status: I.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: l(() => [
                    h(a(I.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: l(() => [
                    h(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(J(I)), 1)
                  ]),
                  actions: l(() => [
                    k(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => M(I.name)
                    }, {
                      default: l(() => [...L[10] || (L[10] = [
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
            K.value.length ? (s(), E(Be, {
              key: 2,
              title: "MODIFIED",
              count: K.value.length
            }, {
              default: l(() => [
                (s(!0), o(A, null, Z(K.value, (I) => (s(), E(je, {
                  key: I.name,
                  status: I.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: l(() => [...L[11] || (L[11] = [
                    h("⚡", -1)
                  ])]),
                  title: l(() => [
                    h(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(J(I)), 1)
                  ]),
                  actions: l(() => [
                    k(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => M(I.name)
                    }, {
                      default: l(() => [...L[12] || (L[12] = [
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
            V.value.length ? (s(), E(Be, {
              key: 3,
              title: "SYNCED",
              count: V.value.length,
              collapsible: !0,
              "initially-expanded": u.value,
              onToggle: L[2] || (L[2] = (I) => u.value = I)
            }, {
              default: l(() => [
                (s(!0), o(A, null, Z(H.value, (I) => (s(), E(je, {
                  key: I.name,
                  status: I.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: l(() => [
                    h(a(I.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: l(() => [
                    h(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(J(I)), 1)
                  ]),
                  actions: l(() => [
                    k(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => M(I.name)
                    }, {
                      default: l(() => [...L[13] || (L[13] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !p.value && V.value.length > 5 ? (s(), E(se, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: L[1] || (L[1] = (I) => p.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: l(() => [
                    h(" View all " + a(V.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            z.value.length ? d("", !0) : (s(), E(at, {
              key: 4,
              icon: "📭",
              message: r.value ? `No workflows match '${r.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      w.value && $.value ? (s(), E(si, {
        key: 0,
        "workflow-name": $.value,
        onClose: L[3] || (L[3] = (I) => w.value = !1),
        onResolve: L[4] || (L[4] = (I) => U($.value)),
        onRefresh: L[5] || (L[5] = (I) => i("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0),
      b.value && $.value ? (s(), E(Du, {
        key: 1,
        "workflow-name": $.value,
        onClose: X,
        onInstall: ne,
        onRefresh: L[6] || (L[6] = (I) => i("refresh")),
        onRestart: j
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), lm = /* @__PURE__ */ te(am, [["__scopeId", "data-v-fa3f076e"]]), im = /* @__PURE__ */ ee({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: de(["summary-bar", t.variant])
    }, [
      Ce(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Gt = /* @__PURE__ */ te(im, [["__scopeId", "data-v-ccb7816e"]]), rm = {
  key: 0,
  class: "model-details"
}, dm = { class: "detail-section" }, cm = { class: "detail-row" }, um = { class: "detail-value mono" }, mm = { class: "detail-row" }, vm = { class: "detail-value mono" }, fm = { class: "detail-row" }, gm = { class: "detail-value mono" }, pm = { class: "detail-row" }, hm = { class: "detail-value" }, ym = { class: "detail-row" }, wm = { class: "detail-value" }, km = { class: "detail-row" }, bm = { class: "detail-value" }, _m = { class: "detail-section" }, $m = { class: "section-header" }, Cm = {
  key: 0,
  class: "locations-list"
}, xm = { class: "location-path mono" }, Sm = {
  key: 0,
  class: "location-modified"
}, Im = ["onClick"], Em = {
  key: 1,
  class: "empty-state"
}, Mm = { class: "detail-section" }, Tm = { class: "section-header" }, Rm = {
  key: 0,
  class: "sources-list"
}, zm = { class: "source-type" }, Lm = ["href"], Pm = ["disabled", "onClick"], Dm = {
  key: 1,
  class: "empty-state"
}, Nm = { class: "add-source-form" }, Um = ["disabled"], Om = {
  key: 2,
  class: "source-error"
}, Bm = {
  key: 3,
  class: "source-success"
}, Fm = /* @__PURE__ */ ee({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: i, addModelSource: y, removeModelSource: g, openFileLocation: f } = Fe(), v = C(null), r = C(!0), u = C(null), p = C(""), w = C(!1), b = C(null), $ = C(null), T = C(null), O = C(null);
    let m = null;
    function _(D, M = "success", U = 2e3) {
      m && clearTimeout(m), O.value = { message: D, type: M }, m = setTimeout(() => {
        O.value = null;
      }, U);
    }
    function z(D) {
      if (!D) return "Unknown";
      const M = 1024 * 1024 * 1024, U = 1024 * 1024;
      return D >= M ? `${(D / M).toFixed(1)} GB` : D >= U ? `${(D / U).toFixed(0)} MB` : `${(D / 1024).toFixed(0)} KB`;
    }
    function S(D) {
      navigator.clipboard.writeText(D), _("Copied to clipboard!");
    }
    async function x(D) {
      try {
        await f(D), _("Opening file location...");
      } catch {
        _("Failed to open location", "error");
      }
    }
    async function K() {
      if (!(!p.value.trim() || !v.value)) {
        w.value = !0, $.value = null, T.value = null;
        try {
          await y(v.value.hash, p.value.trim()), T.value = "Source added successfully!", p.value = "", await H();
        } catch (D) {
          $.value = D instanceof Error ? D.message : "Failed to add source";
        } finally {
          w.value = !1;
        }
      }
    }
    async function V(D) {
      if (v.value) {
        b.value = D, $.value = null, T.value = null;
        try {
          await g(v.value.hash, D), _("Source removed"), await H();
        } catch (M) {
          $.value = M instanceof Error ? M.message : "Failed to remove source";
        } finally {
          b.value = null;
        }
      }
    }
    async function H() {
      r.value = !0, u.value = null;
      try {
        v.value = await i(n.identifier);
      } catch (D) {
        u.value = D instanceof Error ? D.message : "Failed to load model details";
      } finally {
        r.value = !1;
      }
    }
    return Oe(H), (D, M) => {
      var U;
      return s(), o(A, null, [
        k(Ke, {
          title: `Model Details: ${((U = v.value) == null ? void 0 : U.filename) || "Loading..."}`,
          size: "lg",
          loading: r.value,
          error: u.value,
          onClose: M[5] || (M[5] = (ne) => D.$emit("close"))
        }, {
          body: l(() => {
            var ne, X, j, ie;
            return [
              v.value ? (s(), o("div", rm, [
                e("section", dm, [
                  e("div", cm, [
                    M[6] || (M[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", um, a(v.value.hash || "Not computed"), 1),
                    v.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[0] || (M[0] = (J) => S(v.value.hash))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", mm, [
                    M[7] || (M[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", vm, a(v.value.blake3 || "Not computed"), 1),
                    v.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[1] || (M[1] = (J) => S(v.value.blake3))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", fm, [
                    M[8] || (M[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", gm, a(v.value.sha256 || "Not computed"), 1),
                    v.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[2] || (M[2] = (J) => S(v.value.sha256))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", pm, [
                    M[9] || (M[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", hm, a(z(v.value.size)), 1)
                  ]),
                  e("div", ym, [
                    M[10] || (M[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", wm, a(v.value.category), 1)
                  ]),
                  e("div", km, [
                    M[11] || (M[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", bm, a(v.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", _m, [
                  e("h4", $m, "Locations (" + a(((ne = v.value.locations) == null ? void 0 : ne.length) || 0) + ")", 1),
                  (X = v.value.locations) != null && X.length ? (s(), o("div", Cm, [
                    (s(!0), o(A, null, Z(v.value.locations, (J, N) => (s(), o("div", {
                      key: N,
                      class: "location-item"
                    }, [
                      e("span", xm, a(J.path), 1),
                      J.modified ? (s(), o("span", Sm, "Modified: " + a(J.modified), 1)) : d("", !0),
                      J.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (L) => x(J.path)
                      }, " Open File Location ", 8, Im)) : d("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", Em, "No locations found"))
                ]),
                e("section", Mm, [
                  e("h4", Tm, "Download Sources (" + a(((j = v.value.sources) == null ? void 0 : j.length) || 0) + ")", 1),
                  (ie = v.value.sources) != null && ie.length ? (s(), o("div", Rm, [
                    (s(!0), o(A, null, Z(v.value.sources, (J, N) => (s(), o("div", {
                      key: N,
                      class: "source-item"
                    }, [
                      e("span", zm, a(J.type) + ":", 1),
                      e("a", {
                        href: J.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(J.url), 9, Lm),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: b.value === J.url,
                        onClick: (L) => V(J.url)
                      }, a(b.value === J.url ? "..." : "×"), 9, Pm)
                    ]))), 128))
                  ])) : (s(), o("div", Dm, " No download sources configured ")),
                  e("div", Nm, [
                    Ue(e("input", {
                      "onUpdate:modelValue": M[3] || (M[3] = (J) => p.value = J),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Mt, p.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !p.value.trim() || w.value,
                      onClick: K
                    }, a(w.value ? "Adding..." : "Add Source"), 9, Um)
                  ]),
                  $.value ? (s(), o("p", Om, a($.value), 1)) : d("", !0),
                  T.value ? (s(), o("p", Bm, a(T.value), 1)) : d("", !0)
                ])
              ])) : d("", !0)
            ];
          }),
          footer: l(() => [
            e("button", {
              class: "btn-secondary",
              onClick: M[4] || (M[4] = (ne) => D.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), E(Ae, { to: "body" }, [
          O.value ? (s(), o("div", {
            key: 0,
            class: de(["toast", O.value.type])
          }, a(O.value.message), 3)) : d("", !0)
        ]))
      ], 64);
    };
  }
}), vs = /* @__PURE__ */ te(Fm, [["__scopeId", "data-v-f15cbb56"]]), Am = /* @__PURE__ */ ee({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: i, getStatus: y } = Fe(), g = C([]), f = C([]), v = C("production"), r = C(!1), u = C(null), p = C(""), w = C(!1), b = C(null);
    function $() {
      w.value = !1, n("navigate", "model-index");
    }
    const T = P(
      () => g.value.reduce((H, D) => H + (D.size || 0), 0)
    ), O = P(() => {
      if (!p.value.trim()) return g.value;
      const H = p.value.toLowerCase();
      return g.value.filter((D) => D.filename.toLowerCase().includes(H));
    }), m = P(() => {
      if (!p.value.trim()) return f.value;
      const H = p.value.toLowerCase();
      return f.value.filter((D) => D.filename.toLowerCase().includes(H));
    }), _ = P(() => {
      const H = {};
      for (const M of O.value) {
        const U = M.type || "other";
        H[U] || (H[U] = []), H[U].push(M);
      }
      const D = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(H).sort(([M], [U]) => {
        const ne = D.indexOf(M), X = D.indexOf(U);
        return ne >= 0 && X >= 0 ? ne - X : ne >= 0 ? -1 : X >= 0 ? 1 : M.localeCompare(U);
      }).map(([M, U]) => ({ type: M, models: U }));
    });
    function z(H) {
      if (!H) return "Unknown";
      const D = H / (1024 * 1024);
      return D >= 1024 ? `${(D / 1024).toFixed(1)} GB` : `${D.toFixed(0)} MB`;
    }
    function S(H) {
      b.value = H.hash || H.filename;
    }
    function x(H) {
      n("navigate", "model-index");
    }
    function K(H) {
      alert(`Download functionality not yet implemented for ${H}`);
    }
    async function V() {
      r.value = !0, u.value = null;
      try {
        const H = await i();
        g.value = H, f.value = [];
        const D = await y();
        v.value = D.environment || "production";
      } catch (H) {
        u.value = H instanceof Error ? H.message : "Failed to load models";
      } finally {
        r.value = !1;
      }
    }
    return Oe(V), (H, D) => (s(), o(A, null, [
      k(Ge, null, {
        header: l(() => [
          k(qe, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: D[0] || (D[0] = (M) => w.value = !0)
          })
        ]),
        search: l(() => [
          k(zt, {
            modelValue: p.value,
            "onUpdate:modelValue": D[1] || (D[1] = (M) => p.value = M),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          r.value ? (s(), E(ht, {
            key: 0,
            message: "Loading environment models..."
          })) : u.value ? (s(), E(yt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            g.value.length ? (s(), E(Gt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                h(" Total: " + a(g.value.length) + " models • " + a(z(T.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(A, null, Z(_.value, (M) => (s(), E(Be, {
              key: M.type,
              title: M.type.toUpperCase(),
              count: M.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(A, null, Z(M.models, (U) => (s(), E(je, {
                  key: U.hash || U.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...D[4] || (D[4] = [
                    h("📦", -1)
                  ])]),
                  title: l(() => [
                    h(a(U.filename), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(z(U.size)), 1)
                  ]),
                  details: l(() => [
                    k(Ne, {
                      label: "Used by:",
                      value: (U.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    k(Ne, {
                      label: "Path:",
                      value: U.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ne) => S(U)
                    }, {
                      default: l(() => [...D[5] || (D[5] = [
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
            m.value.length ? (s(), E(Be, {
              key: 1,
              title: "MISSING",
              count: m.value.length
            }, {
              default: l(() => [
                (s(!0), o(A, null, Z(m.value, (M) => (s(), E(je, {
                  key: M.filename,
                  status: "broken"
                }, {
                  icon: l(() => [...D[6] || (D[6] = [
                    h("⚠", -1)
                  ])]),
                  title: l(() => [
                    h(a(M.filename), 1)
                  ]),
                  subtitle: l(() => [...D[7] || (D[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: l(() => {
                    var U;
                    return [
                      k(Ne, {
                        label: "Required by:",
                        value: ((U = M.workflow_names) == null ? void 0 : U.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: l(() => [
                    k(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (U) => K(M.filename)
                    }, {
                      default: l(() => [...D[8] || (D[8] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (U) => x(M.filename)
                    }, {
                      default: l(() => [...D[9] || (D[9] = [
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
            !O.value.length && !m.value.length ? (s(), E(at, {
              key: 2,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(ct, {
        show: w.value,
        title: "About Environment Models",
        onClose: D[2] || (D[2] = (M) => w.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            D[10] || (D[10] = h(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(v.value) + '"', 1),
            D[11] || (D[11] = h(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: l(() => [
          k(se, {
            variant: "primary",
            onClick: $
          }, {
            default: l(() => [...D[12] || (D[12] = [
              h(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b.value ? (s(), E(vs, {
        key: 0,
        identifier: b.value,
        onClose: D[3] || (D[3] = (M) => b.value = null)
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), Vm = /* @__PURE__ */ te(Am, [["__scopeId", "data-v-cb4f12b3"]]), Wm = {
  key: 0,
  class: "indexing-progress"
}, jm = { class: "progress-info" }, Gm = { class: "progress-label" }, qm = { class: "progress-count" }, Hm = { class: "progress-bar" }, Km = { class: "modal-content" }, Jm = { class: "modal-header" }, Ym = { class: "modal-body" }, Xm = { class: "input-group" }, Qm = { class: "current-path" }, Zm = { class: "input-group" }, ev = { class: "modal-footer" }, tv = { class: "modal-content" }, sv = { class: "modal-header" }, ov = { class: "modal-body" }, nv = { class: "input-group" }, av = { class: "input-group" }, lv = { class: "modal-footer" }, iv = /* @__PURE__ */ ee({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: i,
      getModelsDirectory: y,
      setModelsDirectory: g
    } = Fe(), { addToQueue: f } = jt(), v = c, r = C([]), u = C(!1), p = C(!1), w = C(null), b = C(""), $ = C(!1), T = C(null), O = C(!1), m = C(null), _ = C(""), z = C(!1), S = C(!1), x = C(""), K = C(""), V = C(null), H = P(
      () => r.value.reduce((L, I) => L + (I.size || 0), 0)
    ), D = P(() => {
      if (!b.value.trim()) return r.value;
      const L = b.value.toLowerCase();
      return r.value.filter((I) => {
        const ae = I, oe = I.sha256 || ae.sha256_hash || "";
        return I.filename.toLowerCase().includes(L) || oe.toLowerCase().includes(L);
      });
    }), M = P(() => {
      const L = {};
      for (const ae of D.value) {
        const oe = ae.type || "other";
        L[oe] || (L[oe] = []), L[oe].push(ae);
      }
      const I = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(L).sort(([ae], [oe]) => {
        const Me = I.indexOf(ae), be = I.indexOf(oe);
        return Me >= 0 && be >= 0 ? Me - be : Me >= 0 ? -1 : be >= 0 ? 1 : ae.localeCompare(oe);
      }).map(([ae, oe]) => ({ type: ae, models: oe }));
    });
    function U(L) {
      if (!L) return "Unknown";
      const I = 1024 * 1024 * 1024, ae = 1024 * 1024;
      return L >= I ? `${(L / I).toFixed(1)} GB` : L >= ae ? `${(L / ae).toFixed(0)} MB` : `${(L / 1024).toFixed(0)} KB`;
    }
    function ne(L) {
      T.value = L.hash || L.filename;
    }
    async function X() {
      p.value = !0, w.value = null;
      try {
        const L = await i();
        await J(), L.changes > 0 && console.log(`Scan complete: ${L.changes} changes detected`);
      } catch (L) {
        w.value = L instanceof Error ? L.message : "Failed to scan models";
      } finally {
        p.value = !1;
      }
    }
    async function j() {
      if (_.value.trim()) {
        z.value = !0, w.value = null;
        try {
          const L = await g(_.value.trim());
          m.value = L.path, O.value = !1, _.value = "", await J(), console.log(`Directory changed: ${L.models_indexed} models indexed`), v("refresh");
        } catch (L) {
          w.value = L instanceof Error ? L.message : "Failed to change directory";
        } finally {
          z.value = !1;
        }
      }
    }
    function ie() {
      if (!x.value.trim() || !K.value.trim()) return;
      const L = K.value.split("/").pop() || "model.safetensors";
      f([{
        workflow: "__manual__",
        filename: L,
        url: x.value.trim(),
        targetPath: K.value.trim()
      }]), x.value = "", K.value = "", S.value = !1;
    }
    async function J() {
      u.value = !0, w.value = null;
      try {
        r.value = await n();
      } catch (L) {
        w.value = L instanceof Error ? L.message : "Failed to load workspace models";
      } finally {
        u.value = !1;
      }
    }
    async function N() {
      try {
        const L = await y();
        m.value = L.path;
      } catch {
      }
    }
    return Oe(() => {
      J(), N();
    }), (L, I) => (s(), o(A, null, [
      k(Ge, null, {
        header: l(() => [
          k(qe, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: I[2] || (I[2] = (ae) => $.value = !0)
          }, {
            actions: l(() => [
              k(se, {
                variant: "primary",
                size: "sm",
                disabled: p.value,
                onClick: X
              }, {
                default: l(() => [
                  h(a(p.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(se, {
                variant: "primary",
                size: "sm",
                onClick: I[0] || (I[0] = (ae) => O.value = !0)
              }, {
                default: l(() => [...I[15] || (I[15] = [
                  h(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              k(se, {
                variant: "primary",
                size: "sm",
                onClick: I[1] || (I[1] = (ae) => S.value = !0)
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
                  h(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          V.value ? (s(), o("div", Wm, [
            e("div", jm, [
              e("span", Gm, a(V.value.message), 1),
              e("span", qm, a(V.value.current) + "/" + a(V.value.total), 1)
            ]),
            e("div", Hm, [
              e("div", {
                class: "progress-fill",
                style: pt({ width: `${V.value.current / V.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : d("", !0),
          k(zt, {
            modelValue: b.value,
            "onUpdate:modelValue": I[3] || (I[3] = (ae) => b.value = ae),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value || V.value ? (s(), E(ht, {
            key: 0,
            message: V.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : w.value ? (s(), E(yt, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: J
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            r.value.length ? (s(), E(Gt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                h(" Total: " + a(r.value.length) + " models • " + a(U(H.value)), 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(A, null, Z(M.value, (ae) => (s(), E(Be, {
              key: ae.type,
              title: ae.type.toUpperCase(),
              count: ae.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: l(() => [
                (s(!0), o(A, null, Z(ae.models, (oe) => (s(), E(je, {
                  key: oe.sha256 || oe.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...I[17] || (I[17] = [
                    h("📦", -1)
                  ])]),
                  title: l(() => [
                    h(a(oe.filename), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(U(oe.size)), 1)
                  ]),
                  details: l(() => [
                    k(Ne, {
                      label: "Hash:",
                      value: oe.hash ? oe.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Me) => ne(oe)
                    }, {
                      default: l(() => [...I[18] || (I[18] = [
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
            D.value.length ? d("", !0) : (s(), E(at, {
              key: 1,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k(ct, {
        show: $.value,
        title: "About Workspace Model Index",
        onClose: I[4] || (I[4] = (ae) => $.value = !1)
      }, {
        content: l(() => [...I[19] || (I[19] = [
          e("p", null, [
            h(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            h(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      T.value ? (s(), E(vs, {
        key: 0,
        identifier: T.value,
        onClose: I[5] || (I[5] = (ae) => T.value = null)
      }, null, 8, ["identifier"])) : d("", !0),
      (s(), E(Ae, { to: "body" }, [
        O.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[9] || (I[9] = Le((ae) => O.value = !1, ["self"]))
        }, [
          e("div", Km, [
            e("div", Jm, [
              I[20] || (I[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[6] || (I[6] = (ae) => O.value = !1)
              }, "✕")
            ]),
            e("div", Ym, [
              e("div", Xm, [
                I[21] || (I[21] = e("label", null, "Current Directory", -1)),
                e("code", Qm, a(m.value || "Not set"), 1)
              ]),
              e("div", Zm, [
                I[22] || (I[22] = e("label", null, "New Directory Path", -1)),
                k(nt, {
                  modelValue: _.value,
                  "onUpdate:modelValue": I[7] || (I[7] = (ae) => _.value = ae),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              I[23] || (I[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", ev, [
              k(ve, {
                variant: "secondary",
                onClick: I[8] || (I[8] = (ae) => O.value = !1)
              }, {
                default: l(() => [...I[24] || (I[24] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(ve, {
                variant: "primary",
                disabled: !_.value.trim() || z.value,
                loading: z.value,
                onClick: j
              }, {
                default: l(() => [
                  h(a(z.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : d("", !0)
      ])),
      (s(), E(Ae, { to: "body" }, [
        S.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[14] || (I[14] = Le((ae) => S.value = !1, ["self"]))
        }, [
          e("div", tv, [
            e("div", sv, [
              I[25] || (I[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[10] || (I[10] = (ae) => S.value = !1)
              }, "✕")
            ]),
            e("div", ov, [
              e("div", nv, [
                I[26] || (I[26] = e("label", null, "Download URL", -1)),
                k(nt, {
                  modelValue: x.value,
                  "onUpdate:modelValue": I[11] || (I[11] = (ae) => x.value = ae),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", av, [
                I[27] || (I[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                k(nt, {
                  modelValue: K.value,
                  "onUpdate:modelValue": I[12] || (I[12] = (ae) => K.value = ae),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              I[28] || (I[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", lv, [
              k(ve, {
                variant: "secondary",
                onClick: I[13] || (I[13] = (ae) => S.value = !1)
              }, {
                default: l(() => [...I[29] || (I[29] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(ve, {
                variant: "primary",
                disabled: !x.value.trim() || !K.value.trim(),
                onClick: ie
              }, {
                default: l(() => [...I[30] || (I[30] = [
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
}), rv = /* @__PURE__ */ te(iv, [["__scopeId", "data-v-73b78d84"]]), dv = { class: "node-details" }, cv = { class: "status-row" }, uv = {
  key: 0,
  class: "detail-row"
}, mv = { class: "value" }, vv = { class: "detail-row" }, fv = { class: "value" }, gv = {
  key: 1,
  class: "detail-row"
}, pv = { class: "value mono" }, hv = {
  key: 2,
  class: "detail-row"
}, yv = ["href"], wv = {
  key: 3,
  class: "detail-row"
}, kv = { class: "value mono small" }, bv = { class: "detail-row" }, _v = {
  key: 0,
  class: "value"
}, $v = {
  key: 1,
  class: "workflow-list"
}, Cv = /* @__PURE__ */ ee({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, i = c, y = P(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), g = P(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), f = P(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (v, r) => (s(), E(Ke, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: r[1] || (r[1] = (u) => i("close"))
    }, {
      body: l(() => [
        e("div", dv, [
          e("div", cv, [
            r[2] || (r[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: de(["status-badge", y.value])
            }, a(g.value), 3)
          ]),
          t.node.version ? (s(), o("div", uv, [
            r[3] || (r[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", mv, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : d("", !0),
          e("div", vv, [
            r[4] || (r[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", fv, a(f.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", gv, [
            r[5] || (r[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", pv, a(t.node.registry_id), 1)
          ])) : d("", !0),
          t.node.repository ? (s(), o("div", hv, [
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
            ], 8, yv)
          ])) : d("", !0),
          t.node.download_url ? (s(), o("div", wv, [
            r[8] || (r[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", kv, a(t.node.download_url), 1)
          ])) : d("", !0),
          r[10] || (r[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", bv, [
            r[9] || (r[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", _v, " Not used in any workflows ")) : (s(), o("div", $v, [
              (s(!0), o(A, null, Z(t.node.used_in_workflows, (u) => (s(), o("span", {
                key: u,
                class: "workflow-tag"
              }, a(u), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: l(() => [
        k(ve, {
          variant: "secondary",
          onClick: r[0] || (r[0] = (u) => i("close"))
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
}), xv = /* @__PURE__ */ te(Cv, [["__scopeId", "data-v-b342f626"]]), Sv = { class: "dialog-message" }, Iv = {
  key: 0,
  class: "dialog-details"
}, Ev = {
  key: 1,
  class: "dialog-warning"
}, Mv = /* @__PURE__ */ ee({
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
    return (c, n) => (s(), E(Ke, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (i) => c.$emit("cancel"))
    }, {
      body: l(() => [
        e("p", Sv, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", Iv, [
          (s(!0), o(A, null, Z(t.details, (i, y) => (s(), o("div", {
            key: y,
            class: "detail-item"
          }, " • " + a(i), 1))), 128))
        ])) : d("", !0),
        t.warning ? (s(), o("p", Ev, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          h(" " + a(t.warning), 1)
        ])) : d("", !0)
      ]),
      footer: l(() => [
        k(ve, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (i) => c.$emit("cancel"))
        }, {
          default: l(() => [
            h(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), E(ve, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (i) => c.$emit("secondary"))
        }, {
          default: l(() => [
            h(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        k(ve, {
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
}), Ns = /* @__PURE__ */ te(Mv, [["__scopeId", "data-v-3670b9f5"]]), Tv = { class: "mismatch-warning" }, Rv = { class: "version-mismatch" }, zv = { class: "version-actual" }, Lv = { class: "version-expected" }, Pv = { key: 0 }, Dv = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Nv = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Uv = /* @__PURE__ */ ee({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getNodes: y, trackNodeAsDev: g, installNode: f, uninstallNode: v } = Fe(), r = C({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), u = C(!1), p = C(null), w = C(""), b = C(!1), $ = C(null), T = C(null), O = P(() => {
      if (!w.value.trim()) return r.value.nodes;
      const X = w.value.toLowerCase();
      return r.value.nodes.filter(
        (j) => {
          var ie, J;
          return j.name.toLowerCase().includes(X) || ((ie = j.description) == null ? void 0 : ie.toLowerCase().includes(X)) || ((J = j.repository) == null ? void 0 : J.toLowerCase().includes(X));
        }
      );
    }), m = P(
      () => O.value.filter((X) => X.installed && X.tracked)
    ), _ = P(
      () => O.value.filter((X) => !X.installed && X.tracked)
    ), z = P(
      () => O.value.filter((X) => X.installed && !X.tracked)
    );
    function S(X) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[X] || X;
    }
    const x = P(() => n.versionMismatches.length > 0);
    function K(X) {
      return !X.used_in_workflows || X.used_in_workflows.length === 0 ? "Not used in any workflows" : X.used_in_workflows.length === 1 ? X.used_in_workflows[0] : `${X.used_in_workflows.length} workflows`;
    }
    function V(X) {
      $.value = X;
    }
    function H() {
      i("open-node-manager");
    }
    function D(X) {
      T.value = {
        title: "Track as Development Node",
        message: `Track "${X}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            u.value = !0;
            const j = await g(X);
            j.status === "success" ? (i("toast", `✓ Node "${X}" tracked as development`, "success"), await ne()) : i("toast", `Failed to track node: ${j.message || "Unknown error"}`, "error");
          } catch (j) {
            i("toast", `Error tracking node: ${j instanceof Error ? j.message : "Unknown error"}`, "error");
          } finally {
            u.value = !1;
          }
        }
      };
    }
    function M(X) {
      T.value = {
        title: "Remove Untracked Node",
        message: `Remove "${X}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          T.value = null;
          try {
            u.value = !0;
            const j = await v(X);
            j.status === "success" ? (i("toast", `✓ Node "${X}" removed`, "success"), await ne()) : i("toast", `Failed to remove node: ${j.message || "Unknown error"}`, "error");
          } catch (j) {
            i("toast", `Error removing node: ${j instanceof Error ? j.message : "Unknown error"}`, "error");
          } finally {
            u.value = !1;
          }
        }
      };
    }
    function U(X) {
      T.value = {
        title: "Install Missing Node",
        message: `Install "${X}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            u.value = !0;
            const j = await f(X);
            j.status === "success" ? (i("toast", `✓ Node "${X}" installed`, "success"), await ne()) : i("toast", `Failed to install node: ${j.message || "Unknown error"}`, "error");
          } catch (j) {
            i("toast", `Error installing node: ${j instanceof Error ? j.message : "Unknown error"}`, "error");
          } finally {
            u.value = !1;
          }
        }
      };
    }
    async function ne() {
      u.value = !0, p.value = null;
      try {
        r.value = await y();
      } catch (X) {
        p.value = X instanceof Error ? X.message : "Failed to load nodes";
      } finally {
        u.value = !1;
      }
    }
    return Oe(ne), (X, j) => (s(), o(A, null, [
      k(Ge, null, {
        header: l(() => [
          k(qe, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: j[0] || (j[0] = (ie) => b.value = !0)
          }, {
            actions: l(() => [
              k(se, {
                variant: "primary",
                size: "sm",
                onClick: H
              }, {
                default: l(() => [...j[7] || (j[7] = [
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
            modelValue: w.value,
            "onUpdate:modelValue": j[1] || (j[1] = (ie) => w.value = ie),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value ? (s(), E(ht, {
            key: 0,
            message: "Loading nodes..."
          })) : p.value ? (s(), E(yt, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: ne
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            r.value.total_count ? (s(), E(Gt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                h(a(r.value.installed_count) + " installed ", 1),
                r.value.missing_count ? (s(), o(A, { key: 0 }, [
                  h(" • " + a(r.value.missing_count) + " missing", 1)
                ], 64)) : d("", !0),
                r.value.untracked_count ? (s(), o(A, { key: 1 }, [
                  h(" • " + a(r.value.untracked_count) + " untracked", 1)
                ], 64)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            x.value ? (s(), E(Be, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: t.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                e("div", Tv, [
                  j[8] || (j[8] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (s(!0), o(A, null, Z(t.versionMismatches, (ie) => (s(), E(je, {
                  key: ie.name,
                  status: "warning"
                }, {
                  icon: l(() => [...j[9] || (j[9] = [
                    h("⚠", -1)
                  ])]),
                  title: l(() => [
                    h(a(ie.name), 1)
                  ]),
                  subtitle: l(() => [
                    e("span", Rv, [
                      e("span", zv, a(ie.actual), 1),
                      j[10] || (j[10] = e("span", { class: "version-arrow" }, "→", -1)),
                      e("span", Lv, a(ie.expected), 1)
                    ])
                  ]),
                  actions: l(() => [
                    k(se, {
                      variant: "warning",
                      size: "sm",
                      onClick: j[2] || (j[2] = (J) => i("repair-environment"))
                    }, {
                      default: l(() => [...j[11] || (j[11] = [
                        h(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            z.value.length ? (s(), E(Be, {
              key: 2,
              title: "UNTRACKED",
              count: z.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(A, null, Z(z.value, (ie) => (s(), E(je, {
                  key: ie.name,
                  status: "warning"
                }, {
                  icon: l(() => [...j[12] || (j[12] = [
                    h("?", -1)
                  ])]),
                  title: l(() => [
                    h(a(ie.name), 1)
                  ]),
                  subtitle: l(() => [...j[13] || (j[13] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: l(() => [
                    k(Ne, {
                      label: "Used by:",
                      value: K(ie)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => V(ie)
                    }, {
                      default: l(() => [...j[14] || (j[14] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (J) => D(ie.name)
                    }, {
                      default: l(() => [...j[15] || (j[15] = [
                        h(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(se, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (J) => M(ie.name)
                    }, {
                      default: l(() => [...j[16] || (j[16] = [
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
            m.value.length ? (s(), E(Be, {
              key: 3,
              title: "INSTALLED",
              count: m.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(A, null, Z(m.value, (ie) => (s(), E(je, {
                  key: ie.name,
                  status: "synced"
                }, {
                  icon: l(() => [
                    h(a(ie.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: l(() => [
                    h(a(ie.name), 1)
                  ]),
                  subtitle: l(() => [
                    ie.version ? (s(), o("span", Pv, a(ie.source === "development" ? "" : "v") + a(ie.version), 1)) : (s(), o("span", Dv, "version unknown")),
                    e("span", Nv, " • " + a(S(ie.source)), 1)
                  ]),
                  details: l(() => [
                    k(Ne, {
                      label: "Used by:",
                      value: K(ie)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => V(ie)
                    }, {
                      default: l(() => [...j[17] || (j[17] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: H
                    }, {
                      default: l(() => [...j[18] || (j[18] = [
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
            _.value.length ? (s(), E(Be, {
              key: 4,
              title: "MISSING",
              count: _.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(A, null, Z(_.value, (ie) => (s(), E(je, {
                  key: ie.name,
                  status: "missing"
                }, {
                  icon: l(() => [...j[19] || (j[19] = [
                    h("!", -1)
                  ])]),
                  title: l(() => [
                    h(a(ie.name), 1)
                  ]),
                  subtitle: l(() => [...j[20] || (j[20] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: l(() => [
                    k(Ne, {
                      label: "Required by:",
                      value: K(ie)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => V(ie)
                    }, {
                      default: l(() => [...j[21] || (j[21] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (J) => U(ie.name)
                    }, {
                      default: l(() => [...j[22] || (j[22] = [
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
            !m.value.length && !_.value.length && !z.value.length ? (s(), E(at, {
              key: 5,
              icon: "📭",
              message: w.value ? `No nodes match '${w.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(ct, {
        show: b.value,
        title: "About Custom Nodes",
        onClose: j[4] || (j[4] = (ie) => b.value = !1)
      }, {
        content: l(() => [...j[23] || (j[23] = [
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
          k(se, {
            variant: "primary",
            onClick: j[3] || (j[3] = (ie) => b.value = !1)
          }, {
            default: l(() => [...j[24] || (j[24] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      $.value ? (s(), E(xv, {
        key: 0,
        node: $.value,
        onClose: j[5] || (j[5] = (ie) => $.value = null)
      }, null, 8, ["node"])) : d("", !0),
      T.value ? (s(), E(Ns, {
        key: 1,
        title: T.value.title,
        message: T.value.message,
        warning: T.value.warning,
        "confirm-label": T.value.confirmLabel,
        destructive: T.value.destructive,
        onConfirm: T.value.onConfirm,
        onCancel: j[6] || (j[6] = (ie) => T.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : d("", !0)
    ], 64));
  }
}), Ov = /* @__PURE__ */ te(Uv, [["__scopeId", "data-v-1555a802"]]);
function Us(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const Bv = { class: "remote-url-display" }, Fv = ["title"], Av = ["title"], Vv = {
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
}, jv = /* @__PURE__ */ ee({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = C(!1), i = P(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const g = c.url.slice(0, Math.floor(c.maxLength * 0.6)), f = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${g}...${f}`;
    });
    async function y() {
      try {
        await navigator.clipboard.writeText(c.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy URL:", g);
      }
    }
    return (g, f) => (s(), o("div", Bv, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(i.value), 9, Fv),
      e("button", {
        class: de(["copy-btn", { copied: n.value }]),
        onClick: y,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", Wv, [...f[1] || (f[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", Vv, [...f[0] || (f[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Av)
    ]));
  }
}), Gv = /* @__PURE__ */ te(jv, [["__scopeId", "data-v-7768a58d"]]), qv = { class: "remote-title" }, Hv = {
  key: 0,
  class: "default-badge"
}, Kv = {
  key: 1,
  class: "sync-badge"
}, Jv = {
  key: 0,
  class: "ahead"
}, Yv = {
  key: 1,
  class: "behind"
}, Xv = {
  key: 1,
  class: "synced"
}, Qv = ["href"], Zv = {
  key: 1,
  class: "remote-url-text"
}, ef = /* @__PURE__ */ ee({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const c = t, n = P(() => c.fetchingRemote === c.remote.name), i = P(() => c.remote.is_default), y = P(() => c.syncStatus && c.syncStatus.behind > 0), g = P(() => c.syncStatus && c.syncStatus.ahead > 0), f = P(() => c.remote.push_url !== c.remote.fetch_url), v = P(() => {
      const u = c.remote.fetch_url, p = u.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return p ? `https://${p[1]}/${p[2]}` : u.startsWith("https://") || u.startsWith("http://") ? u.replace(/\.git$/, "") : null;
    }), r = P(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (u, p) => (s(), E(je, {
      status: i.value ? "synced" : void 0
    }, Wt({
      icon: l(() => [
        h(a(i.value ? "🔗" : "🌐"), 1)
      ]),
      title: l(() => [
        e("div", qv, [
          e("span", null, a(t.remote.name), 1),
          i.value ? (s(), o("span", Hv, "DEFAULT")) : d("", !0),
          t.syncStatus ? (s(), o("span", Kv, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(A, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", Jv, "↑" + a(t.syncStatus.ahead), 1)) : d("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", Yv, "↓" + a(t.syncStatus.behind), 1)) : d("", !0)
            ], 64)) : (s(), o("span", Xv, "✓ synced"))
          ])) : d("", !0)
        ])
      ]),
      subtitle: l(() => [
        v.value ? (s(), o("a", {
          key: 0,
          href: v.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: p[0] || (p[0] = Le(() => {
          }, ["stop"]))
        }, a(r.value), 9, Qv)) : (s(), o("span", Zv, a(r.value), 1))
      ]),
      actions: l(() => [
        k(se, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: p[1] || (p[1] = (w) => u.$emit("fetch", t.remote.name))
        }, {
          default: l(() => [...p[6] || (p[6] = [
            h(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        k(se, {
          variant: y.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: p[2] || (p[2] = (w) => u.$emit("pull", t.remote.name))
        }, {
          default: l(() => [
            h(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(se, {
          variant: g.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: p[3] || (p[3] = (w) => u.$emit("push", t.remote.name))
        }, {
          default: l(() => [
            h(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(se, {
          variant: "secondary",
          size: "xs",
          onClick: p[4] || (p[4] = (w) => u.$emit("edit", t.remote.name))
        }, {
          default: l(() => [...p[7] || (p[7] = [
            h(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        i.value ? d("", !0) : (s(), E(se, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: p[5] || (p[5] = (w) => u.$emit("remove", t.remote.name))
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
          t.remote.push_url !== t.remote.fetch_url ? (s(), E(Ne, {
            key: 0,
            label: "Push URL:"
          }, {
            default: l(() => [
              k(Gv, {
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
}), tf = /* @__PURE__ */ te(ef, [["__scopeId", "data-v-8310f3a8"]]), sf = ["for"], of = {
  key: 0,
  class: "base-form-field-required"
}, nf = { class: "base-form-field-input" }, af = {
  key: 1,
  class: "base-form-field-error"
}, lf = {
  key: 2,
  class: "base-form-field-hint"
}, rf = /* @__PURE__ */ ee({
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
    return (i, y) => (s(), o("div", {
      class: de(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        h(a(t.label) + " ", 1),
        t.required ? (s(), o("span", of, "*")) : d("", !0)
      ], 8, sf)) : d("", !0),
      e("div", nf, [
        Ce(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", af, a(t.error), 1)) : t.hint ? (s(), o("span", lf, a(t.hint), 1)) : d("", !0)
    ], 2));
  }
}), ns = /* @__PURE__ */ te(rf, [["__scopeId", "data-v-9a1cf296"]]), df = { class: "remote-form" }, cf = { class: "form-header" }, uf = { class: "form-body" }, mf = {
  key: 0,
  class: "form-error"
}, vf = { class: "form-actions" }, ff = /* @__PURE__ */ ee({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, y = C({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), g = C(!1), f = C(null);
    bt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      y.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const v = P(() => y.value.name.trim() !== "" && y.value.fetchUrl.trim() !== "");
    async function r() {
      if (!(!v.value || g.value)) {
        f.value = null, g.value = !0;
        try {
          i("submit", y.value);
        } catch (u) {
          f.value = u instanceof Error ? u.message : "Failed to submit form";
        } finally {
          g.value = !1;
        }
      }
    }
    return (u, p) => (s(), o("div", df, [
      e("div", cf, [
        k(Ze, null, {
          default: l(() => [
            h(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", uf, [
        k(ns, {
          label: "Remote Name",
          required: ""
        }, {
          default: l(() => [
            k(nt, {
              modelValue: y.value.name,
              "onUpdate:modelValue": p[0] || (p[0] = (w) => y.value.name = w),
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
            k(nt, {
              modelValue: y.value.fetchUrl,
              "onUpdate:modelValue": p[1] || (p[1] = (w) => y.value.fetchUrl = w),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        k(ns, { label: "Push URL (optional)" }, {
          default: l(() => [
            k(nt, {
              modelValue: y.value.pushUrl,
              "onUpdate:modelValue": p[2] || (p[2] = (w) => y.value.pushUrl = w),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        f.value ? (s(), o("div", mf, a(f.value), 1)) : d("", !0)
      ]),
      e("div", vf, [
        k(se, {
          variant: "primary",
          size: "md",
          disabled: !v.value,
          loading: g.value,
          onClick: r
        }, {
          default: l(() => [
            h(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        k(se, {
          variant: "ghost",
          size: "md",
          onClick: p[3] || (p[3] = (w) => u.$emit("cancel"))
        }, {
          default: l(() => [...p[4] || (p[4] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), gf = /* @__PURE__ */ te(ff, [["__scopeId", "data-v-56021b18"]]), pf = { class: "conflict-summary-box" }, hf = { class: "summary-header" }, yf = { class: "summary-text" }, wf = { key: 0 }, kf = {
  key: 1,
  class: "all-resolved"
}, bf = { class: "summary-progress" }, _f = { class: "progress-bar" }, $f = { class: "progress-text" }, Cf = /* @__PURE__ */ ee({
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
}), xf = /* @__PURE__ */ te(Cf, [["__scopeId", "data-v-4e9e6cc9"]]), Sf = { class: "modal-header" }, If = { class: "modal-title" }, Ef = { class: "modal-body" }, Mf = {
  key: 0,
  class: "error-box"
}, Tf = {
  key: 0,
  class: "error-hint"
}, Rf = {
  key: 1,
  class: "loading-state"
}, zf = { class: "commit-summary" }, Lf = {
  key: 0,
  class: "changes-section"
}, Pf = {
  key: 0,
  class: "change-group",
  open: ""
}, Df = { class: "change-count" }, Nf = { class: "change-list" }, Uf = {
  key: 0,
  class: "conflict-badge"
}, Of = {
  key: 1,
  class: "change-group"
}, Bf = { class: "change-count" }, Ff = { class: "change-list" }, Af = {
  key: 2,
  class: "change-group"
}, Vf = { class: "change-count" }, Wf = { class: "change-list" }, jf = {
  key: 2,
  class: "strategy-section"
}, Gf = { class: "radio-group" }, qf = { class: "radio-option" }, Hf = { class: "radio-option" }, Kf = { class: "radio-option" }, Jf = {
  key: 3,
  class: "up-to-date"
}, Yf = { class: "modal-actions" }, Cs = "comfygit.pullModelStrategy", Xf = /* @__PURE__ */ ee({
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
    const n = t, i = c, y = C(localStorage.getItem(Cs) || "skip");
    bt(y, (m) => {
      localStorage.setItem(Cs, m);
    });
    const g = P(() => {
      var m;
      return ((m = n.error) == null ? void 0 : m.toLowerCase().includes("unrelated histories")) ?? !1;
    }), f = P(() => {
      if (!n.preview) return 0;
      const m = n.preview.changes.workflows;
      return m.added.length + m.modified.length + m.deleted.length;
    }), v = P(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), r = P(() => {
      var m;
      return f.value > 0 || v.value > 0 || (((m = n.preview) == null ? void 0 : m.changes.models.count) || 0) > 0;
    }), u = P(() => n.preview && Us(n.preview) ? n.preview : null), p = P(() => {
      var m;
      return ((m = u.value) == null ? void 0 : m.workflow_conflicts.length) ?? 0;
    }), w = P(() => {
      var m;
      return ((m = n.conflictResolutions) == null ? void 0 : m.size) ?? 0;
    }), b = P(
      () => p.value > 0 && w.value === p.value
    ), $ = P(() => !(!n.preview || n.preview.has_uncommitted_changes || u.value && !b.value));
    function T(m) {
      if (!u.value) return !1;
      const _ = m.replace(/\.json$/, "");
      return u.value.workflow_conflicts.some((z) => z.name === _);
    }
    function O(m) {
      const _ = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      i("pull", { modelStrategy: y.value, force: m, resolutions: _ });
    }
    return (m, _) => {
      var z, S;
      return s(), E(Ae, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: _[11] || (_[11] = (x) => m.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: _[10] || (_[10] = Le(() => {
            }, ["stop"]))
          }, [
            e("div", Sf, [
              e("h3", If, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: _[0] || (_[0] = (x) => m.$emit("close"))
              }, "✕")
            ]),
            e("div", Ef, [
              t.error ? (s(), o("div", Mf, [
                _[13] || (_[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  _[12] || (_[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  g.value ? (s(), o("p", Tf, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : d("", !0)
                ])
              ])) : t.loading ? (s(), o("div", Rf, [..._[14] || (_[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                h(" Loading preview... ", -1)
              ])])) : (z = t.preview) != null && z.has_uncommitted_changes ? (s(), o(A, { key: 2 }, [
                _[15] || (_[15] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "UNCOMMITTED CHANGES"),
                    e("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                _[16] || (_[16] = e("div", { class: "options-section" }, [
                  e("p", null, [
                    e("strong", null, "Options:")
                  ]),
                  e("ul", null, [
                    e("li", null, "Commit your changes first (recommended)"),
                    e("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : t.preview ? (s(), o(A, { key: 3 }, [
                e("div", zf, [
                  _[17] || (_[17] = e("span", { class: "icon" }, "📥", -1)),
                  h(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                r.value ? (s(), o("div", Lf, [
                  _[21] || (_[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  f.value > 0 ? (s(), o("details", Pf, [
                    e("summary", null, [
                      _[18] || (_[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", Df, a(f.value) + " changes", 1)
                    ]),
                    e("div", Nf, [
                      (s(!0), o(A, null, Z(t.preview.changes.workflows.added, (x) => (s(), o("div", {
                        key: "a-" + x,
                        class: "change-item add"
                      }, " + " + a(x), 1))), 128)),
                      (s(!0), o(A, null, Z(t.preview.changes.workflows.modified, (x) => (s(), o("div", {
                        key: "m-" + x,
                        class: "change-item modify"
                      }, [
                        h(" ~ " + a(x) + " ", 1),
                        T(x) ? (s(), o("span", Uf, "CONFLICT")) : d("", !0)
                      ]))), 128)),
                      (s(!0), o(A, null, Z(t.preview.changes.workflows.deleted, (x) => (s(), o("div", {
                        key: "d-" + x,
                        class: "change-item delete"
                      }, " - " + a(x), 1))), 128))
                    ])
                  ])) : d("", !0),
                  v.value > 0 ? (s(), o("details", Of, [
                    e("summary", null, [
                      _[19] || (_[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", Bf, a(v.value) + " to install", 1)
                    ]),
                    e("div", Ff, [
                      (s(!0), o(A, null, Z(t.preview.changes.nodes.to_install, (x) => (s(), o("div", {
                        key: x,
                        class: "change-item add"
                      }, " + " + a(x), 1))), 128))
                    ])
                  ])) : d("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", Af, [
                    e("summary", null, [
                      _[20] || (_[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", Vf, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", Wf, [
                      (s(!0), o(A, null, Z(t.preview.changes.models.referenced, (x) => (s(), o("div", {
                        key: x,
                        class: "change-item"
                      }, a(x), 1))), 128))
                    ])
                  ])) : d("", !0)
                ])) : d("", !0),
                u.value ? (s(), E(xf, {
                  key: 1,
                  "conflict-count": p.value,
                  "resolved-count": w.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : d("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", jf, [
                  _[26] || (_[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", Gf, [
                    e("label", qf, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": _[1] || (_[1] = (x) => y.value = x),
                        value: "all"
                      }, null, 512), [
                        [Jt, y.value]
                      ]),
                      _[22] || (_[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", Hf, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": _[2] || (_[2] = (x) => y.value = x),
                        value: "required"
                      }, null, 512), [
                        [Jt, y.value]
                      ]),
                      _[23] || (_[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", Kf, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": _[3] || (_[3] = (x) => y.value = x),
                        value: "skip"
                      }, null, 512), [
                        [Jt, y.value]
                      ]),
                      _[24] || (_[24] = e("span", null, "Skip model downloads", -1)),
                      _[25] || (_[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  _[27] || (_[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : d("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", Jf, [
                  _[28] || (_[28] = e("span", { class: "icon" }, "✓", -1)),
                  h(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : d("", !0)
              ], 64)) : d("", !0)
            ]),
            e("div", Yf, [
              k(se, {
                variant: "secondary",
                onClick: _[4] || (_[4] = (x) => m.$emit("close"))
              }, {
                default: l(() => [..._[29] || (_[29] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(A, { key: 0 }, [
                k(se, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: _[5] || (_[5] = (x) => O(!1))
                }, {
                  default: l(() => [..._[30] || (_[30] = [
                    h(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                k(se, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: _[6] || (_[6] = (x) => O(!0))
                }, {
                  default: l(() => [..._[31] || (_[31] = [
                    h(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (S = t.preview) != null && S.has_uncommitted_changes ? (s(), E(se, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: _[7] || (_[7] = (x) => O(!0))
              }, {
                default: l(() => [..._[32] || (_[32] = [
                  h(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(A, { key: 2 }, [
                u.value && !b.value ? (s(), E(se, {
                  key: 0,
                  variant: "primary",
                  onClick: _[8] || (_[8] = (x) => i("openConflictResolution"))
                }, {
                  default: l(() => [
                    h(" Resolve Conflicts (" + a(w.value) + "/" + a(p.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), E(se, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !$.value,
                  onClick: _[9] || (_[9] = (x) => O(!1))
                }, {
                  default: l(() => [..._[33] || (_[33] = [
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
}), Qf = /* @__PURE__ */ te(Xf, [["__scopeId", "data-v-300c7b2f"]]), Zf = { class: "modal-header" }, eg = { class: "modal-title" }, tg = { class: "modal-body" }, sg = {
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
}, yg = { class: "modal-actions" }, wg = /* @__PURE__ */ ee({
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
    const n = c, i = C(!1);
    function y(g) {
      n("push", { force: g });
    }
    return (g, f) => {
      var v, r, u;
      return s(), E(Ae, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: f[7] || (f[7] = (p) => g.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: f[6] || (f[6] = Le(() => {
            }, ["stop"]))
          }, [
            e("div", Zf, [
              e("h3", eg, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: f[0] || (f[0] = (p) => g.$emit("close"))
              }, "✕")
            ]),
            e("div", tg, [
              t.loading ? (s(), o("div", sg, [...f[8] || (f[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                h(" Loading preview... ", -1)
              ])])) : (v = t.preview) != null && v.has_uncommitted_changes ? (s(), o("div", og, [...f[9] || (f[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (r = t.preview) != null && r.remote_has_new_commits ? (s(), o(A, { key: 2 }, [
                f[13] || (f[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (s(), o("div", ng, [
                  f[10] || (f[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", ag, [
                    (s(!0), o(A, null, Z(t.preview.commits, (p) => (s(), o("div", {
                      key: p.hash,
                      class: "commit-item"
                    }, [
                      e("span", lg, a(p.short_hash || p.hash.slice(0, 7)), 1),
                      e("span", ig, a(p.message), 1),
                      e("span", rg, a(p.date_relative || p.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                e("div", dg, [
                  e("label", cg, [
                    Ue(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": f[1] || (f[1] = (p) => i.value = p)
                    }, null, 512), [
                      [Qt, i.value]
                    ]),
                    f[11] || (f[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  f[12] || (f[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(A, { key: 3 }, [
                e("div", ug, [
                  f[14] || (f[14] = e("span", { class: "icon" }, "📤", -1)),
                  h(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", mg, [
                  f[15] || (f[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", vg, [
                    (s(!0), o(A, null, Z(t.preview.commits, (p) => (s(), o("div", {
                      key: p.hash,
                      class: "commit-item"
                    }, [
                      e("span", fg, a(p.short_hash || p.hash.slice(0, 7)), 1),
                      e("span", gg, a(p.message), 1),
                      e("span", pg, a(p.date_relative || p.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", hg, [
                  f[16] || (f[16] = e("span", { class: "icon" }, "✓", -1)),
                  h(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : d("", !0)
            ]),
            e("div", yg, [
              k(se, {
                variant: "secondary",
                onClick: f[2] || (f[2] = (p) => g.$emit("close"))
              }, {
                default: l(() => [...f[17] || (f[17] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (u = t.preview) != null && u.remote_has_new_commits ? (s(), o(A, { key: 0 }, [
                k(se, {
                  variant: "secondary",
                  onClick: f[3] || (f[3] = (p) => g.$emit("pull-first"))
                }, {
                  default: l(() => [...f[18] || (f[18] = [
                    h(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                k(se, {
                  variant: "destructive",
                  disabled: !i.value,
                  loading: t.pushing,
                  onClick: f[4] || (f[4] = (p) => y(!0))
                }, {
                  default: l(() => [...f[19] || (f[19] = [
                    h(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), E(se, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: f[5] || (f[5] = (p) => y(!1))
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
}), kg = /* @__PURE__ */ te(wg, [["__scopeId", "data-v-bc6ded53"]]), bg = { class: "resolution-choice-group" }, _g = ["disabled"], $g = ["disabled"], Cg = /* @__PURE__ */ ee({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("div", bg, [
      e("button", {
        class: de(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (i) => c.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, _g),
      e("button", {
        class: de(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (i) => c.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, $g)
    ]));
  }
}), xg = /* @__PURE__ */ te(Cg, [["__scopeId", "data-v-985715ed"]]), Sg = { class: "conflict-header" }, Ig = { class: "conflict-info" }, Eg = { class: "workflow-name" }, Mg = { class: "conflict-description" }, Tg = {
  key: 0,
  class: "resolved-badge"
}, Rg = { class: "resolved-text" }, zg = { class: "conflict-hashes" }, Lg = { class: "hash-item" }, Pg = { class: "hash-item" }, Dg = { class: "conflict-actions" }, Ng = /* @__PURE__ */ ee({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: c }) {
    const n = t, i = c, y = C(n.resolution);
    bt(() => n.resolution, (r) => {
      y.value = r;
    }), bt(y, (r) => {
      r && i("resolve", r);
    });
    const g = P(() => y.value !== null), f = P(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), v = P(() => {
      switch (y.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (r, u) => {
      var p, w;
      return s(), o("div", {
        class: de(["conflict-item", { resolved: g.value }])
      }, [
        e("div", Sg, [
          u[2] || (u[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", Ig, [
            e("code", Eg, a(t.conflict.name) + ".json", 1),
            e("div", Mg, a(f.value), 1)
          ]),
          g.value ? (s(), o("div", Tg, [
            u[1] || (u[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", Rg, a(v.value), 1)
          ])) : d("", !0)
        ]),
        e("div", zg, [
          e("span", Lg, [
            u[3] || (u[3] = h("Your: ", -1)),
            e("code", null, a(((p = t.conflict.base_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", Pg, [
            u[4] || (u[4] = h("Theirs: ", -1)),
            e("code", null, a(((w = t.conflict.target_hash) == null ? void 0 : w.slice(0, 8)) || "n/a"), 1)
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
}), Ug = /* @__PURE__ */ te(Ng, [["__scopeId", "data-v-506d3bbf"]]), Og = { class: "resolution-content" }, Bg = {
  key: 0,
  class: "error-box"
}, Fg = { class: "resolution-header" }, Ag = { class: "header-stats" }, Vg = { class: "stat" }, Wg = { class: "stat-value" }, jg = { class: "stat resolved" }, Gg = { class: "stat-value" }, qg = {
  key: 0,
  class: "stat pending"
}, Hg = { class: "stat-value" }, Kg = { class: "conflicts-list" }, Jg = {
  key: 1,
  class: "all-resolved-message"
}, Yg = /* @__PURE__ */ ee({
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
    const n = t, i = c, y = P(() => n.resolutions.size), g = P(() => n.workflowConflicts.length - y.value), f = P(() => y.value === n.workflowConflicts.length), v = P(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function r(b) {
      const $ = n.resolutions.get(b);
      return ($ == null ? void 0 : $.resolution) ?? null;
    }
    function u(b, $) {
      i("resolve", b, $);
    }
    function p() {
      i("close");
    }
    function w() {
      i("apply");
    }
    return (b, $) => (s(), E(Ke, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: p
    }, {
      body: l(() => [
        e("div", Og, [
          t.error ? (s(), o("div", Bg, [
            $[1] || ($[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              $[0] || ($[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : d("", !0),
          e("div", Fg, [
            e("div", Ag, [
              e("div", Vg, [
                e("span", Wg, a(t.workflowConflicts.length), 1),
                $[2] || ($[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", jg, [
                e("span", Gg, a(y.value), 1),
                $[3] || ($[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              g.value > 0 ? (s(), o("div", qg, [
                e("span", Hg, a(g.value), 1),
                $[4] || ($[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : d("", !0)
            ]),
            $[5] || ($[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", Kg, [
            (s(!0), o(A, null, Z(t.workflowConflicts, (T) => (s(), E(Ug, {
              key: T.name,
              conflict: T,
              resolution: r(T.name),
              onResolve: (O) => u(T.name, O)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          f.value ? (s(), o("div", Jg, [
            $[6] || ($[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(v.value) + '" to continue.', 1)
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        k(ve, {
          variant: "secondary",
          onClick: p
        }, {
          default: l(() => [...$[7] || ($[7] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        $[8] || ($[8] = e("div", { class: "footer-spacer" }, null, -1)),
        k(ve, {
          variant: "primary",
          disabled: !f.value || t.validating,
          loading: t.validating,
          onClick: w
        }, {
          default: l(() => [
            h(a(v.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Xg = /* @__PURE__ */ te(Yg, [["__scopeId", "data-v-c58d150d"]]), Qg = { class: "node-conflict-item" }, Zg = { class: "node-header" }, ep = { class: "node-name" }, tp = { class: "node-id" }, sp = { class: "version-comparison" }, op = { class: "version yours" }, np = { class: "version theirs" }, ap = { class: "chosen-version" }, lp = { class: "chosen" }, ip = { class: "chosen-reason" }, rp = { class: "affected-workflows" }, dp = { class: "wf-source" }, cp = { class: "wf-version" }, up = /* @__PURE__ */ ee({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", Qg, [
      e("div", Zg, [
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
          (s(!0), o(A, null, Z(t.conflict.affected_workflows, (i) => (s(), o("li", {
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
}), mp = /* @__PURE__ */ te(up, [["__scopeId", "data-v-8b626725"]]), vp = { class: "validation-content" }, fp = {
  key: 0,
  class: "compatible-message"
}, gp = { class: "conflicts-list" }, pp = {
  key: 2,
  class: "warnings-section"
}, hp = /* @__PURE__ */ ee({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, y = P(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (g, f) => (s(), E(Ke, {
      title: "Compatibility Check",
      size: "lg",
      onClose: f[3] || (f[3] = (v) => i("cancel"))
    }, {
      body: l(() => [
        e("div", vp, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (s(), o("div", fp, [
            f[5] || (f[5] = e("span", { class: "icon" }, "✓", -1)),
            e("div", null, [
              f[4] || (f[4] = e("strong", null, "All clear!", -1)),
              e("p", null, "Your workflow choices are compatible. Ready to " + a(t.operationType) + ".", 1)
            ])
          ])) : t.validation.node_conflicts.length > 0 ? (s(), o(A, { key: 1 }, [
            f[6] || (f[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", gp, [
              (s(!0), o(A, null, Z(t.validation.node_conflicts, (v) => (s(), E(mp, {
                key: v.node_id,
                conflict: v
              }, null, 8, ["conflict"]))), 128))
            ]),
            f[7] || (f[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : d("", !0),
          t.validation.warnings.length > 0 ? (s(), o("div", pp, [
            f[8] || (f[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (s(!0), o(A, null, Z(t.validation.warnings, (v, r) => (s(), o("li", { key: r }, a(v), 1))), 128))
            ])
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        k(ve, {
          variant: "secondary",
          onClick: f[0] || (f[0] = (v) => i("cancel"))
        }, {
          default: l(() => [...f[9] || (f[9] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        f[11] || (f[11] = e("div", { class: "footer-spacer" }, null, -1)),
        k(ve, {
          variant: "secondary",
          onClick: f[1] || (f[1] = (v) => i("goBack"))
        }, {
          default: l(() => [...f[10] || (f[10] = [
            h(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        k(ve, {
          variant: "primary",
          loading: t.executing,
          onClick: f[2] || (f[2] = (v) => i("proceed"))
        }, {
          default: l(() => [
            h(a(y.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), yp = /* @__PURE__ */ te(hp, [["__scopeId", "data-v-fefd26ed"]]), wp = { key: 0 }, kp = /* @__PURE__ */ ee({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: c }) {
    const n = c, {
      getRemotes: i,
      addRemote: y,
      removeRemote: g,
      updateRemoteUrl: f,
      fetchRemote: v,
      getRemoteSyncStatus: r,
      getPullPreview: u,
      pullFromRemote: p,
      getPushPreview: w,
      pushToRemote: b,
      validateMerge: $
    } = Fe(), T = C([]), O = C(null), m = C({}), _ = C(!1), z = C(null), S = C(""), x = C(!1), K = C(null), V = C(!1), H = C("add"), D = C({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), M = P(() => {
      if (!S.value.trim()) return T.value;
      const F = S.value.toLowerCase();
      return T.value.filter(
        (Q) => Q.name.toLowerCase().includes(F) || Q.fetch_url.toLowerCase().includes(F) || Q.push_url.toLowerCase().includes(F)
      );
    });
    async function U() {
      _.value = !0, z.value = null;
      try {
        const F = await i();
        T.value = F.remotes, O.value = F.current_branch_tracking || null, await Promise.all(
          F.remotes.map(async (Q) => {
            const we = await r(Q.name);
            we && (m.value[Q.name] = we);
          })
        );
      } catch (F) {
        z.value = F instanceof Error ? F.message : "Failed to load remotes";
      } finally {
        _.value = !1;
      }
    }
    function ne() {
      H.value = "add", D.value = { name: "", fetchUrl: "", pushUrl: "" }, V.value = !0;
    }
    function X(F) {
      const Q = T.value.find((we) => we.name === F);
      Q && (H.value = "edit", D.value = {
        name: Q.name,
        fetchUrl: Q.fetch_url,
        pushUrl: Q.push_url
      }, V.value = !0);
    }
    async function j(F) {
      try {
        H.value === "add" ? await y(F.name, F.fetchUrl) : await f(F.name, F.fetchUrl, F.pushUrl || void 0), V.value = !1, await U();
      } catch (Q) {
        z.value = Q instanceof Error ? Q.message : "Operation failed";
      }
    }
    function ie() {
      V.value = !1, D.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function J(F) {
      K.value = F;
      try {
        await v(F);
        const Q = await r(F);
        Q && (m.value[F] = Q), n("toast", `✓ Fetched from ${F}`, "success");
      } catch (Q) {
        n("toast", Q instanceof Error ? Q.message : "Fetch failed", "error");
      } finally {
        K.value = null;
      }
    }
    async function N(F) {
      if (confirm(`Remove remote "${F}"?`))
        try {
          await g(F), await U();
        } catch (Q) {
          z.value = Q instanceof Error ? Q.message : "Failed to remove remote";
        }
    }
    function L() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const I = C("idle"), ae = P(() => I.value === "pull_preview"), oe = P(
      () => I.value === "resolving" || I.value === "validating"
    ), Me = P(
      () => I.value === "validation_review" || I.value === "executing"
    ), be = C(!1), re = C(null), le = C(!1), ce = C(null), fe = C(!1), Re = C(null), he = C(null), ge = C(/* @__PURE__ */ new Map()), G = C(null), Ee = C(null), xe = P(() => Re.value && Us(Re.value) ? Re.value : null);
    async function Te(F) {
      ce.value = F, I.value = "pull_preview", fe.value = !0, Re.value = null, he.value = null;
      try {
        Re.value = await u(F);
      } catch (Q) {
        he.value = Q instanceof Error ? Q.message : "Failed to load pull preview";
      } finally {
        fe.value = !1;
      }
    }
    function me() {
      I.value = "idle", Re.value = null, he.value = null, ce.value = null;
    }
    async function Je(F) {
      if (!ce.value) return;
      I.value = "executing", he.value = null;
      const Q = ce.value;
      try {
        const we = await p(Q, F);
        if (we.rolled_back) {
          he.value = `Pull failed and was rolled back: ${we.error || "Unknown error"}`, I.value = "pull_preview";
          return;
        }
        Pe(), I.value = "idle", n("toast", `✓ Pulled from ${Q}`, "success"), await U();
      } catch (we) {
        he.value = we instanceof Error ? we.message : "Pull failed", I.value = "pull_preview";
      }
    }
    function et() {
      xe.value && (I.value = "resolving", Ee.value = null);
    }
    function Ye(F, Q) {
      ge.value.set(F, { name: F, resolution: Q });
    }
    function _t() {
      I.value = "pull_preview";
    }
    async function ke() {
      I.value = "validating", Ee.value = null;
      try {
        const F = Array.from(ge.value.values());
        G.value = await $(ce.value, F), I.value = "validation_review";
      } catch (F) {
        Ee.value = F instanceof Error ? F.message : "Validation failed", I.value = "resolving";
      }
    }
    async function Ve() {
      I.value = "executing";
      const F = ce.value;
      try {
        const Q = Array.from(ge.value.values()), we = await p(F, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Q
        });
        if (we.rolled_back) {
          he.value = `Pull failed and was rolled back: ${we.error || "Unknown error"}`, I.value = "pull_preview";
          return;
        }
        Pe(), I.value = "idle", n("toast", `✓ Pulled from ${F}`, "success"), await U();
      } catch (Q) {
        he.value = Q instanceof Error ? Q.message : "Pull failed", I.value = "validation_review";
      }
    }
    function wt() {
      I.value = "resolving";
    }
    function ut() {
      Pe(), I.value = "idle";
    }
    function Pe() {
      ge.value.clear(), G.value = null, Ee.value = null, he.value = null, Re.value = null, ce.value = null;
    }
    async function $t(F) {
      ce.value = F, be.value = !0, fe.value = !0, re.value = null;
      try {
        re.value = await w(F);
      } catch (Q) {
        z.value = Q instanceof Error ? Q.message : "Failed to load push preview";
      } finally {
        fe.value = !1;
      }
    }
    function lt() {
      be.value = !1, re.value = null, ce.value = null;
    }
    async function Y(F) {
      if (!ce.value) return;
      le.value = !0;
      const Q = ce.value;
      try {
        await b(Q, F), lt(), n("toast", `✓ Pushed to ${Q}`, "success"), await U();
      } catch (we) {
        n("toast", we instanceof Error ? we.message : "Push failed", "error");
      } finally {
        le.value = !1;
      }
    }
    function B() {
      const F = ce.value;
      lt(), F && Te(F);
    }
    return Oe(U), (F, Q) => (s(), o(A, null, [
      k(Ge, null, {
        header: l(() => [
          k(qe, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: Q[0] || (Q[0] = (we) => x.value = !0)
          }, {
            actions: l(() => [
              V.value ? d("", !0) : (s(), E(se, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: ne
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
          V.value ? d("", !0) : (s(), E(zt, {
            key: 0,
            modelValue: S.value,
            "onUpdate:modelValue": Q[1] || (Q[1] = (we) => S.value = we),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: l(() => [
          _.value ? (s(), E(ht, {
            key: 0,
            message: "Loading remotes..."
          })) : z.value ? (s(), E(yt, {
            key: 1,
            message: z.value,
            retry: !0,
            onRetry: U
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            V.value ? (s(), E(gf, {
              key: 0,
              mode: H.value,
              "remote-name": D.value.name,
              "fetch-url": D.value.fetchUrl,
              "push-url": D.value.pushUrl,
              onSubmit: j,
              onCancel: ie
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            T.value.length && !V.value ? (s(), E(Gt, {
              key: 1,
              variant: "compact"
            }, {
              default: l(() => [
                h(" Total: " + a(T.value.length) + " remote" + a(T.value.length !== 1 ? "s" : "") + " ", 1),
                O.value ? (s(), o("span", wp, " • Tracking: " + a(O.value.remote) + "/" + a(O.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            M.value.length && !V.value ? (s(), E(Be, {
              key: 2,
              title: "REMOTES",
              count: M.value.length
            }, {
              default: l(() => [
                (s(!0), o(A, null, Z(M.value, (we) => (s(), E(tf, {
                  key: we.name,
                  remote: we,
                  "sync-status": m.value[we.name],
                  "fetching-remote": K.value,
                  onFetch: J,
                  onEdit: X,
                  onRemove: N,
                  onPull: Te,
                  onPush: $t
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !M.value.length && !V.value ? (s(), E(at, {
              key: 3,
              icon: "🌐",
              message: S.value ? `No remotes match '${S.value}'` : "No remotes configured."
            }, {
              actions: l(() => [
                k(se, {
                  variant: "primary",
                  onClick: ne
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
      k(ct, {
        show: x.value,
        title: "About Git Remotes",
        onClose: Q[2] || (Q[2] = (we) => x.value = !1)
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
          k(se, {
            variant: "link",
            onClick: L
          }, {
            default: l(() => [...Q[6] || (Q[6] = [
              h(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k(Qf, {
        show: ae.value,
        "remote-name": ce.value || "",
        preview: Re.value,
        loading: fe.value,
        pulling: I.value === "executing",
        error: he.value,
        "conflict-resolutions": ge.value,
        onClose: me,
        onPull: Je,
        onOpenConflictResolution: et
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      k(kg, {
        show: be.value,
        "remote-name": ce.value || "",
        preview: re.value,
        loading: fe.value,
        pushing: le.value,
        onClose: lt,
        onPush: Y,
        onPullFirst: B
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      oe.value && xe.value ? (s(), E(Xg, {
        key: 0,
        "workflow-conflicts": xe.value.workflow_conflicts,
        resolutions: ge.value,
        "operation-type": "pull",
        validating: I.value === "validating",
        error: Ee.value,
        onClose: _t,
        onResolve: Ye,
        onApply: ke
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : d("", !0),
      Me.value && G.value ? (s(), E(yp, {
        key: 1,
        validation: G.value,
        "operation-type": "pull",
        executing: I.value === "executing",
        onProceed: Ve,
        onGoBack: wt,
        onCancel: ut
      }, null, 8, ["validation", "executing"])) : d("", !0)
    ], 64));
  }
}), bp = /* @__PURE__ */ te(kp, [["__scopeId", "data-v-9ae3b76d"]]), _p = { class: "setting-info" }, $p = { class: "setting-label" }, Cp = {
  key: 0,
  class: "required-marker"
}, xp = {
  key: 0,
  class: "setting-description"
}, Sp = { class: "setting-control" }, Ip = /* @__PURE__ */ ee({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: de(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", _p, [
        e("div", $p, [
          h(a(t.label) + " ", 1),
          t.required ? (s(), o("span", Cp, "*")) : d("", !0)
        ]),
        t.description ? (s(), o("div", xp, a(t.description), 1)) : d("", !0)
      ]),
      e("div", Sp, [
        Ce(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Nt = /* @__PURE__ */ te(Ip, [["__scopeId", "data-v-cb5d236c"]]), Ep = { class: "toggle" }, Mp = ["checked", "disabled"], Tp = /* @__PURE__ */ ee({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", Ep, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, Mp),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), as = /* @__PURE__ */ te(Tp, [["__scopeId", "data-v-71c0f550"]]), Rp = { class: "settings-section" }, zp = { class: "path-setting" }, Lp = { class: "path-value" }, Pp = { class: "path-setting" }, Dp = { class: "path-value" }, Np = { class: "settings-section" }, Up = { class: "settings-section" }, Op = { class: "settings-section" }, Bp = /* @__PURE__ */ ee({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: c, updateConfig: n } = Fe(), i = C(!1), y = C(null), g = C(null), f = C(null), v = C(null), r = C(""), u = C(""), p = C(!0), w = C(!0), b = C(!1), $ = P(() => v.value ? r.value !== (v.value.civitai_api_key || "") : !1);
    async function T() {
      i.value = !0, y.value = null;
      try {
        f.value = await c(), v.value = { ...f.value }, r.value = f.value.civitai_api_key || "", u.value = f.value.huggingface_token || "", p.value = f.value.auto_sync_models, w.value = f.value.confirm_destructive;
        const z = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        b.value = z === "true";
      } catch (z) {
        y.value = z instanceof Error ? z.message : "Failed to load settings";
      } finally {
        i.value = !1;
      }
    }
    async function O() {
      var z;
      g.value = null;
      try {
        const S = {};
        r.value !== (((z = v.value) == null ? void 0 : z.civitai_api_key) || "") && (S.civitai_api_key = r.value || null), await n(S), await T(), g.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          g.value = null;
        }, 3e3);
      } catch (S) {
        g.value = {
          type: "error",
          message: S instanceof Error ? S.message : "Failed to save settings"
        };
      }
    }
    function m() {
      v.value && (r.value = v.value.civitai_api_key || "", u.value = v.value.huggingface_token || "", p.value = v.value.auto_sync_models, w.value = v.value.confirm_destructive, g.value = null);
    }
    function _(z) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(z)), console.log("[ComfyGit] Auto-refresh setting saved:", z);
    }
    return Oe(T), (z, S) => (s(), E(Ge, null, {
      header: l(() => [
        k(qe, { title: "WORKSPACE SETTINGS" }, {
          actions: l(() => [
            k(se, {
              variant: "primary",
              size: "sm",
              disabled: !$.value,
              onClick: O
            }, {
              default: l(() => [...S[5] || (S[5] = [
                h(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            $.value ? (s(), E(se, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: m
            }, {
              default: l(() => [...S[6] || (S[6] = [
                h(" Reset ", -1)
              ])]),
              _: 1
            })) : d("", !0)
          ]),
          _: 1
        })
      ]),
      content: l(() => [
        i.value ? (s(), E(ht, {
          key: 0,
          message: "Loading workspace settings..."
        })) : y.value ? (s(), E(yt, {
          key: 1,
          message: y.value,
          retry: !0,
          onRetry: T
        }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
          k(Be, { title: "WORKSPACE PATHS" }, {
            default: l(() => {
              var x, K;
              return [
                e("div", Rp, [
                  e("div", zp, [
                    S[7] || (S[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    S[8] || (S[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Lp, a(((x = f.value) == null ? void 0 : x.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Pp, [
                    S[9] || (S[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    S[10] || (S[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Dp, a(((K = f.value) == null ? void 0 : K.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          k(Be, { title: "API CREDENTIALS" }, {
            default: l(() => [
              e("div", Np, [
                k(Nt, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: l(() => [
                    k(Zt, {
                      modelValue: r.value,
                      "onUpdate:modelValue": S[0] || (S[0] = (x) => r.value = x),
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
                    k(Zt, {
                      modelValue: u.value,
                      "onUpdate:modelValue": S[1] || (S[1] = (x) => u.value = x),
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
              e("div", Up, [
                k(Nt, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: l(() => [
                    k(as, {
                      modelValue: b.value,
                      "onUpdate:modelValue": [
                        S[2] || (S[2] = (x) => b.value = x),
                        _
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
              e("div", Op, [
                k(Nt, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: l(() => [
                    k(as, {
                      modelValue: p.value,
                      "onUpdate:modelValue": S[3] || (S[3] = (x) => p.value = x),
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
                      modelValue: w.value,
                      "onUpdate:modelValue": S[4] || (S[4] = (x) => w.value = x),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          g.value ? (s(), E(Gt, {
            key: 0,
            variant: (g.value.type === "success", "compact")
          }, {
            default: l(() => [
              e("span", {
                style: pt({ color: g.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, a(g.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : d("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Fp = /* @__PURE__ */ te(Bp, [["__scopeId", "data-v-7861bd35"]]), Ap = /* @__PURE__ */ ee({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c, getWorkspaceLogPath: n, openFile: i } = Fe(), y = C([]), g = C(!1), f = C(null), v = C(!1), r = C(null), u = C(null), p = C(!1), w = P(() => y.value.length === 0 ? [] : y.value.map((O) => ({
      text: `${O.timestamp} - ${O.name} - ${O.level} - ${O.func}:${O.line} - ${O.message}`,
      level: O.level
    })));
    async function b() {
      g.value = !0, f.value = null;
      try {
        y.value = await c(void 0, 500);
      } catch (O) {
        f.value = O instanceof Error ? O.message : "Failed to load workspace logs";
      } finally {
        g.value = !1, setTimeout(() => {
          var O;
          (O = r.value) != null && O.parentElement && (r.value.parentElement.scrollTop = r.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function $() {
      try {
        const O = await n();
        O.exists && (u.value = O.path);
      } catch {
      }
    }
    async function T() {
      if (u.value) {
        p.value = !0;
        try {
          await i(u.value);
        } catch (O) {
          console.error("Failed to open log file:", O);
        } finally {
          p.value = !1;
        }
      }
    }
    return Oe(() => {
      b(), $();
    }), (O, m) => (s(), o(A, null, [
      k(Ge, null, {
        header: l(() => [
          k(qe, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: m[0] || (m[0] = (_) => v.value = !0)
          }, {
            actions: l(() => [
              k(se, {
                variant: "secondary",
                size: "sm",
                onClick: T,
                disabled: !u.value || p.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  h(a(p.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(se, {
                variant: "secondary",
                size: "sm",
                onClick: b,
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
          g.value ? (s(), E(ht, {
            key: 0,
            message: "Loading workspace logs..."
          })) : f.value ? (s(), E(yt, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            y.value.length === 0 ? (s(), E(at, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: r,
              class: "log-output"
            }, [
              (s(!0), o(A, null, Z(w.value, (_, z) => (s(), o("div", {
                key: z,
                class: de(`log-line log-level-${_.level.toLowerCase()}`)
              }, a(_.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      k(ct, {
        show: v.value,
        title: "About Workspace Logs",
        onClose: m[2] || (m[2] = (_) => v.value = !1)
      }, {
        content: l(() => [...m[3] || (m[3] = [
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
          k(se, {
            variant: "primary",
            onClick: m[1] || (m[1] = (_) => v.value = !1)
          }, {
            default: l(() => [...m[4] || (m[4] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Vp = /* @__PURE__ */ te(Ap, [["__scopeId", "data-v-7f05352a"]]), Wp = /* @__PURE__ */ ee({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n, getEnvironmentLogPath: i, openFile: y } = Fe(), g = C([]), f = C(!1), v = C(null), r = C(!1), u = C("production"), p = C(null), w = C(null), b = C(!1), $ = P(() => g.value.length === 0 ? [] : g.value.map((_) => ({
      text: `${_.timestamp} - ${_.name} - ${_.level} - ${_.func}:${_.line} - ${_.message}`,
      level: _.level
    })));
    async function T() {
      f.value = !0, v.value = null;
      try {
        g.value = await c(void 0, 500);
        try {
          const _ = await n();
          u.value = _.environment || "production";
        } catch {
        }
      } catch (_) {
        v.value = _ instanceof Error ? _.message : "Failed to load environment logs";
      } finally {
        f.value = !1, setTimeout(() => {
          var _;
          (_ = p.value) != null && _.parentElement && (p.value.parentElement.scrollTop = p.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function O() {
      try {
        const _ = await i();
        _.exists && (w.value = _.path);
      } catch {
      }
    }
    async function m() {
      if (w.value) {
        b.value = !0;
        try {
          await y(w.value);
        } catch (_) {
          console.error("Failed to open log file:", _);
        } finally {
          b.value = !1;
        }
      }
    }
    return Oe(() => {
      T(), O();
    }), (_, z) => (s(), o(A, null, [
      k(Ge, null, {
        header: l(() => [
          k(qe, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (S) => r.value = !0)
          }, {
            actions: l(() => [
              k(se, {
                variant: "secondary",
                size: "sm",
                onClick: m,
                disabled: !w.value || b.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  h(a(b.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(se, {
                variant: "secondary",
                size: "sm",
                onClick: T,
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
          f.value ? (s(), E(ht, {
            key: 0,
            message: "Loading environment logs..."
          })) : v.value ? (s(), E(yt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            g.value.length === 0 ? (s(), E(at, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: p,
              class: "log-output"
            }, [
              (s(!0), o(A, null, Z($.value, (S, x) => (s(), o("div", {
                key: x,
                class: de(`log-line log-level-${S.level.toLowerCase()}`)
              }, a(S.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      k(ct, {
        show: r.value,
        title: "About Environment Logs",
        onClose: z[2] || (z[2] = (S) => r.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            z[3] || (z[3] = h(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(u.value), 1),
            z[4] || (z[4] = h(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          z[5] || (z[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          z[6] || (z[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: l(() => [
          k(se, {
            variant: "primary",
            onClick: z[1] || (z[1] = (S) => r.value = !1)
          }, {
            default: l(() => [...z[7] || (z[7] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), jp = /* @__PURE__ */ te(Wp, [["__scopeId", "data-v-6f8db7ce"]]), Gp = { class: "env-title" }, qp = {
  key: 0,
  class: "current-badge"
}, Hp = {
  key: 0,
  class: "branch-info"
}, Kp = /* @__PURE__ */ ee({
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
    return (c, n) => (s(), E(je, {
      status: t.isCurrent ? "synced" : void 0
    }, Wt({
      icon: l(() => [
        h(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: l(() => [
        e("div", Gp, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", qp, "CURRENT")) : d("", !0)
        ])
      ]),
      subtitle: l(() => [
        t.currentBranch ? (s(), o("span", Hp, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          h(" " + a(t.currentBranch), 1)
        ])) : d("", !0)
      ]),
      actions: l(() => [
        Ce(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: l(() => [
          k(Ne, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          k(Ne, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          k(Ne, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), E(Ne, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : d("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Jp = /* @__PURE__ */ te(Kp, [["__scopeId", "data-v-9231917a"]]), Yp = { class: "env-details" }, Xp = { class: "status-row" }, Qp = {
  key: 0,
  class: "detail-row"
}, Zp = { class: "value mono" }, eh = {
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
}, mh = { class: "value" }, vh = { class: "footer-actions" }, fh = /* @__PURE__ */ ee({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: c }) {
    const n = c;
    function i(y) {
      if (!y) return "Unknown";
      try {
        const g = new Date(y), v = (/* @__PURE__ */ new Date()).getTime() - g.getTime(), r = Math.floor(v / 6e4), u = Math.floor(v / 36e5), p = Math.floor(v / 864e5);
        return r < 1 ? "just now" : r < 60 ? `${r} ${r === 1 ? "minute" : "minutes"} ago` : u < 24 ? `${u} ${u === 1 ? "hour" : "hours"} ago` : p < 30 ? `${p} ${p === 1 ? "day" : "days"} ago` : g.toLocaleDateString();
      } catch {
        return y;
      }
    }
    return (y, g) => (s(), E(Ke, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: g[2] || (g[2] = (f) => n("close"))
    }, {
      body: l(() => [
        e("div", Yp, [
          e("div", Xp, [
            g[3] || (g[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: de(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", Qp, [
            g[4] || (g[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", Zp, a(t.environment.current_branch), 1)
          ])) : d("", !0),
          t.environment.path ? (s(), o("div", eh, [
            g[5] || (g[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", th, a(t.environment.path), 1)
          ])) : d("", !0),
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
          t.environment.created_at || t.environment.last_used ? (s(), o("div", rh)) : d("", !0),
          t.environment.created_at ? (s(), o("div", dh, [
            g[9] || (g[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", ch, a(i(t.environment.created_at)), 1)
          ])) : d("", !0),
          t.environment.last_used ? (s(), o("div", uh, [
            g[10] || (g[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", mh, a(i(t.environment.last_used)), 1)
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        e("div", vh, [
          t.canDelete ? (s(), E(ve, {
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
          k(ve, {
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
}), gh = /* @__PURE__ */ te(fh, [["__scopeId", "data-v-59855453"]]), Os = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Bs = "3.12", fs = [
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
], Fs = "auto", ph = { class: "progress-bar" }, hh = /* @__PURE__ */ ee({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, n = P(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (i, y) => (s(), o("div", ph, [
      e("div", {
        class: de(["progress-fill", t.variant]),
        style: pt({ width: n.value })
      }, null, 6)
    ]));
  }
}), As = /* @__PURE__ */ te(hh, [["__scopeId", "data-v-1beb0512"]]), yh = { class: "task-progress" }, wh = { class: "progress-info" }, kh = { class: "progress-percentage" }, bh = { class: "progress-message" }, _h = {
  key: 0,
  class: "progress-steps"
}, $h = { class: "step-icon" }, Ch = { class: "step-label" }, xh = /* @__PURE__ */ ee({
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
    function n(y) {
      const g = c.steps.find((f) => f.id === y);
      return g ? c.progress >= g.progressThreshold ? "completed" : c.currentPhase === y ? "active" : "pending" : "pending";
    }
    function i(y) {
      const g = n(y);
      return g === "completed" ? "✓" : g === "active" ? "⟳" : "○";
    }
    return (y, g) => (s(), o("div", yh, [
      k(As, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", wh, [
        e("span", kh, a(t.progress) + "%", 1),
        e("span", bh, a(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", _h, [
        (s(!0), o(A, null, Z(t.steps, (f) => (s(), o("div", {
          key: f.id,
          class: de(["step", n(f.id)])
        }, [
          e("span", $h, a(i(f.id)), 1),
          e("span", Ch, a(f.label), 1)
        ], 2))), 128))
      ])) : d("", !0)
    ]));
  }
}), ts = /* @__PURE__ */ te(xh, [["__scopeId", "data-v-9d1de66c"]]), Sh = {
  key: 0,
  class: "create-env-form"
}, Ih = { class: "form-field" }, Eh = { class: "form-field" }, Mh = ["value"], Th = { class: "form-field" }, Rh = ["disabled"], zh = ["value"], Lh = { class: "form-field" }, Ph = ["value"], Dh = { class: "form-field form-field--checkbox" }, Nh = { class: "form-checkbox" }, Uh = {
  key: 1,
  class: "create-env-progress"
}, Oh = { class: "creating-intro" }, Bh = {
  key: 0,
  class: "progress-warning"
}, Fh = {
  key: 1,
  class: "create-error"
}, Ah = { class: "error-message" }, Vh = {
  key: 1,
  class: "footer-status"
}, Wh = 10, jh = /* @__PURE__ */ ee({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: c }) {
    const n = c, { getComfyUIReleases: i, createEnvironment: y, getCreateProgress: g } = Fe(), f = C(""), v = C(Bs), r = C("latest"), u = C(Fs), p = C(!1), w = C([{ tag_name: "latest", name: "Latest", published_at: "" }]), b = C(!1), $ = C(!1), T = C({
      progress: 0,
      message: ""
    });
    let O = null, m = 0;
    const _ = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], z = C(null);
    function S() {
      $.value || n("close");
    }
    async function x() {
      const M = f.value.trim();
      if (M) {
        $.value = !0, T.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const U = {
            name: M,
            python_version: v.value,
            comfyui_version: r.value,
            torch_backend: u.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, ne = await y(U);
          ne.status === "started" ? K() : ne.status === "error" && (T.value = {
            progress: 0,
            message: ne.message || "Failed to start creation",
            error: ne.message
          });
        } catch (U) {
          T.value = {
            progress: 0,
            message: U instanceof Error ? U.message : "Unknown error",
            error: U instanceof Error ? U.message : "Unknown error"
          };
        }
      }
    }
    function K() {
      O || (m = 0, O = window.setInterval(async () => {
        try {
          const M = await g();
          m = 0, T.value = {
            progress: M.progress ?? 0,
            message: M.message,
            phase: M.phase,
            error: M.error
          }, M.state === "complete" ? (V(), n("created", M.environment_name || f.value.trim(), p.value)) : M.state === "error" ? (V(), T.value.error = M.error || M.message) : M.state === "idle" && $.value && (V(), T.value.error = "Creation was interrupted. Please try again.");
        } catch {
          m++, m >= Wh && (V(), T.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function V() {
      O && (clearInterval(O), O = null);
    }
    function H() {
      $.value = !1, T.value = { progress: 0, message: "" }, n("close");
    }
    async function D() {
      b.value = !0;
      try {
        w.value = await i();
      } catch (M) {
        console.error("Failed to load ComfyUI releases:", M);
      } finally {
        b.value = !1;
      }
    }
    return Oe(async () => {
      var M;
      await no(), (M = z.value) == null || M.focus(), D();
    }), Ms(() => {
      V();
    }), (M, U) => (s(), E(Ke, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !$.value,
      onClose: S
    }, {
      body: l(() => [
        $.value ? (s(), o("div", Uh, [
          e("p", Oh, [
            U[11] || (U[11] = h(" Creating environment ", -1)),
            e("strong", null, a(f.value), 1),
            U[12] || (U[12] = h("... ", -1))
          ]),
          k(ts, {
            progress: T.value.progress,
            message: T.value.message,
            "current-phase": T.value.phase,
            variant: T.value.error ? "error" : "default",
            "show-steps": !0,
            steps: _
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          T.value.error ? d("", !0) : (s(), o("p", Bh, " This may take several minutes. Please wait... ")),
          T.value.error ? (s(), o("div", Fh, [
            e("p", Ah, a(T.value.error), 1)
          ])) : d("", !0)
        ])) : (s(), o("div", Sh, [
          e("div", Ih, [
            U[6] || (U[6] = e("label", { class: "form-label" }, "Name", -1)),
            Ue(e("input", {
              ref_key: "nameInput",
              ref: z,
              "onUpdate:modelValue": U[0] || (U[0] = (ne) => f.value = ne),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: gt(x, ["enter"])
            }, null, 544), [
              [Mt, f.value]
            ])
          ]),
          e("div", Eh, [
            U[7] || (U[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": U[1] || (U[1] = (ne) => v.value = ne),
              class: "form-select"
            }, [
              (s(!0), o(A, null, Z($e(Os), (ne) => (s(), o("option", {
                key: ne,
                value: ne
              }, a(ne), 9, Mh))), 128))
            ], 512), [
              [Tt, v.value]
            ])
          ]),
          e("div", Th, [
            U[8] || (U[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": U[2] || (U[2] = (ne) => r.value = ne),
              class: "form-select",
              disabled: b.value
            }, [
              (s(!0), o(A, null, Z(w.value, (ne) => (s(), o("option", {
                key: ne.tag_name,
                value: ne.tag_name
              }, a(ne.name), 9, zh))), 128))
            ], 8, Rh), [
              [Tt, r.value]
            ])
          ]),
          e("div", Lh, [
            U[9] || (U[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": U[3] || (U[3] = (ne) => u.value = ne),
              class: "form-select"
            }, [
              (s(!0), o(A, null, Z($e(fs), (ne) => (s(), o("option", {
                key: ne,
                value: ne
              }, a(ne) + a(ne === "auto" ? " (detect GPU)" : ""), 9, Ph))), 128))
            ], 512), [
              [Tt, u.value]
            ])
          ]),
          e("div", Dh, [
            e("label", Nh, [
              Ue(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": U[4] || (U[4] = (ne) => p.value = ne)
              }, null, 512), [
                [Qt, p.value]
              ]),
              U[10] || (U[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: l(() => [
        $.value ? (s(), o(A, { key: 1 }, [
          T.value.error ? (s(), E(ve, {
            key: 0,
            variant: "secondary",
            onClick: H
          }, {
            default: l(() => [...U[15] || (U[15] = [
              h(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", Vh, " Creating environment... "))
        ], 64)) : (s(), o(A, { key: 0 }, [
          k(ve, {
            variant: "primary",
            disabled: !f.value.trim(),
            onClick: x
          }, {
            default: l(() => [...U[13] || (U[13] = [
              h(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(ve, {
            variant: "secondary",
            onClick: U[5] || (U[5] = (ne) => n("close"))
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
}), Gh = /* @__PURE__ */ te(jh, [["__scopeId", "data-v-f37eaa42"]]), qh = /* @__PURE__ */ ee({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getEnvironments: y } = Fe(), g = C([]), f = C(!1), v = C(null), r = C(""), u = C(!1), p = C(!1), w = C(null), b = P(() => {
      if (!r.value.trim()) return g.value;
      const z = r.value.toLowerCase();
      return g.value.filter(
        (S) => {
          var x;
          return S.name.toLowerCase().includes(z) || ((x = S.current_branch) == null ? void 0 : x.toLowerCase().includes(z));
        }
      );
    });
    function $(z, S) {
      p.value = !1, i("created", z, S);
    }
    function T() {
      p.value = !0;
    }
    function O(z) {
      w.value = z;
    }
    function m(z) {
      w.value = null, i("delete", z);
    }
    async function _() {
      f.value = !0, v.value = null;
      try {
        g.value = await y();
      } catch (z) {
        v.value = z instanceof Error ? z.message : "Failed to load environments";
      } finally {
        f.value = !1;
      }
    }
    return Oe(_), c({
      loadEnvironments: _,
      openCreateModal: T
    }), (z, S) => (s(), o(A, null, [
      k(Ge, null, {
        header: l(() => [
          k(qe, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (x) => u.value = !0)
          }, {
            actions: l(() => [
              k(se, {
                variant: "primary",
                size: "sm",
                onClick: T
              }, {
                default: l(() => [...S[6] || (S[6] = [
                  h(" Create ", -1)
                ])]),
                _: 1
              }),
              k(se, {
                variant: "secondary",
                size: "sm",
                onClick: _
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
            "onUpdate:modelValue": S[1] || (S[1] = (x) => r.value = x),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          f.value ? (s(), E(ht, {
            key: 0,
            message: "Loading environments..."
          })) : v.value ? (s(), E(yt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            b.value.length ? (s(), E(Be, {
              key: 0,
              title: "ENVIRONMENTS",
              count: b.value.length
            }, {
              default: l(() => [
                (s(!0), o(A, null, Z(b.value, (x) => (s(), E(Jp, {
                  key: x.name,
                  "environment-name": x.name,
                  "is-current": x.is_current,
                  "current-branch": x.current_branch,
                  "show-last-used": !1
                }, {
                  actions: l(() => [
                    x.is_current ? d("", !0) : (s(), E(se, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => z.$emit("switch", x.name)
                    }, {
                      default: l(() => [...S[8] || (S[8] = [
                        h(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    k(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => O(x)
                    }, {
                      default: l(() => [...S[9] || (S[9] = [
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
            b.value.length ? d("", !0) : (s(), E(at, {
              key: 1,
              icon: "🌍",
              message: r.value ? `No environments match '${r.value}'` : "No environments found. Create one to get started!"
            }, Wt({ _: 2 }, [
              r.value ? void 0 : {
                name: "actions",
                fn: l(() => [
                  k(se, {
                    variant: "primary",
                    onClick: T
                  }, {
                    default: l(() => [...S[10] || (S[10] = [
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
      k(ct, {
        show: u.value,
        title: "About Environments",
        onClose: S[3] || (S[3] = (x) => u.value = !1)
      }, {
        content: l(() => [...S[11] || (S[11] = [
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
          k(se, {
            variant: "secondary",
            onClick: S[2] || (S[2] = (x) => u.value = !1)
          }, {
            default: l(() => [...S[12] || (S[12] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (s(), E(gh, {
        key: 0,
        environment: w.value,
        "can-delete": g.value.length > 1,
        onClose: S[4] || (S[4] = (x) => w.value = null),
        onDelete: m
      }, null, 8, ["environment", "can-delete"])) : d("", !0),
      p.value ? (s(), E(Gh, {
        key: 1,
        onClose: S[5] || (S[5] = (x) => p.value = !1),
        onCreated: $
      })) : d("", !0)
    ], 64));
  }
}), Hh = /* @__PURE__ */ te(qh, [["__scopeId", "data-v-f95999f4"]]), Kh = { class: "file-path" }, Jh = { class: "file-path-text" }, Yh = ["title"], Xh = /* @__PURE__ */ ee({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = C(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(c.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (y) {
        console.error("Failed to copy:", y);
      }
    }
    return (y, g) => (s(), o("div", Kh, [
      g[0] || (g[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Jh, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: i
      }, a(n.value ? "✓" : "📋"), 9, Yh)) : d("", !0)
    ]));
  }
}), Qh = /* @__PURE__ */ te(Xh, [["__scopeId", "data-v-f0982173"]]), Zh = { class: "export-blocked" }, e1 = { class: "issues-list" }, t1 = { class: "issue-message" }, s1 = {
  key: 0,
  class: "issue-details"
}, o1 = ["onClick"], n1 = { class: "issue-fix" }, a1 = /* @__PURE__ */ ee({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(t) {
    const c = t, n = ss({});
    function i(y) {
      const g = c.issues[y];
      return n[y] || g.details.length <= 3 ? g.details : g.details.slice(0, 3);
    }
    return (y, g) => (s(), E(Ke, {
      title: "Cannot Export",
      size: "md",
      onClose: g[1] || (g[1] = (f) => y.$emit("close"))
    }, {
      body: l(() => [
        e("div", Zh, [
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
            (s(!0), o(A, null, Z(t.issues, (f, v) => (s(), o("div", {
              key: v,
              class: "issue-item"
            }, [
              e("div", t1, a(f.message), 1),
              f.details.length ? (s(), o("div", s1, [
                (s(!0), o(A, null, Z(i(v), (r, u) => (s(), o("div", {
                  key: u,
                  class: "issue-detail"
                }, a(r), 1))), 128)),
                f.details.length > 3 && !n[v] ? (s(), o("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (r) => n[v] = !0
                }, " +" + a(f.details.length - 3) + " more ", 9, o1)) : d("", !0)
              ])) : d("", !0),
              e("div", n1, [
                f.type === "uncommitted_workflows" ? (s(), o(A, { key: 0 }, [
                  h(" Commit your workflow changes before exporting. ")
                ], 64)) : f.type === "uncommitted_git_changes" ? (s(), o(A, { key: 1 }, [
                  h(" Commit your changes before exporting. ")
                ], 64)) : f.type === "unresolved_issues" ? (s(), o(A, { key: 2 }, [
                  h(" Resolve all workflow issues before exporting. ")
                ], 64)) : d("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: l(() => [
        k(ve, {
          variant: "primary",
          onClick: g[0] || (g[0] = (f) => y.$emit("close"))
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
}), l1 = /* @__PURE__ */ te(a1, [["__scopeId", "data-v-b52f5e32"]]), i1 = { class: "export-warnings" }, r1 = {
  key: 0,
  class: "success-header"
}, d1 = { class: "warning-header" }, c1 = { class: "warning-summary" }, u1 = { class: "warning-title" }, m1 = { class: "models-section" }, v1 = { class: "models-list" }, f1 = { class: "model-info" }, g1 = { class: "model-filename" }, p1 = { class: "model-workflows" }, h1 = ["onClick"], y1 = /* @__PURE__ */ ee({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(t, { emit: c }) {
    const n = t, i = c, y = C(!1), g = C(null), f = P(() => y.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function v() {
      g.value = null, i("revalidate");
    }
    return (r, u) => (s(), o(A, null, [
      k(Ke, {
        title: "Export Warnings",
        size: "md",
        onClose: u[3] || (u[3] = (p) => r.$emit("cancel"))
      }, {
        body: l(() => [
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
                  (s(!0), o(A, null, Z(f.value, (p) => (s(), o("div", {
                    key: p.hash,
                    class: "model-item"
                  }, [
                    e("div", f1, [
                      e("div", g1, a(p.filename), 1),
                      e("div", p1, " Used by: " + a(p.workflows.join(", ")), 1)
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      onClick: (w) => g.value = p.hash
                    }, " Add Source ", 8, h1)
                  ]))), 128))
                ]),
                t.models.length > 3 && !y.value ? (s(), o("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: u[0] || (u[0] = (p) => y.value = !0)
                }, " Show " + a(t.models.length - 3) + " more model" + a(t.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : d("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: l(() => [
          k(ve, {
            variant: "secondary",
            onClick: u[1] || (u[1] = (p) => r.$emit("cancel"))
          }, {
            default: l(() => [...u[7] || (u[7] = [
              h(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          k(ve, {
            variant: "primary",
            onClick: u[2] || (u[2] = (p) => r.$emit("confirm"))
          }, {
            default: l(() => [
              h(a(t.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      g.value ? (s(), E(vs, {
        key: 0,
        identifier: g.value,
        onClose: v
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), w1 = /* @__PURE__ */ te(y1, [["__scopeId", "data-v-b698d882"]]), k1 = { class: "export-card" }, b1 = { class: "export-path-row" }, _1 = { class: "export-actions" }, $1 = {
  key: 1,
  class: "export-warning"
}, C1 = /* @__PURE__ */ ee({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: c, exportEnvWithForce: n } = Fe(), i = C(""), y = C(!1), g = C(!1), f = C(!1), v = C(null), r = C(!1), u = C(null), p = C(!1), w = C(!1), b = P(() => y.value ? "Validating..." : g.value ? "Exporting..." : "Export Environment");
    async function $() {
      y.value = !0, v.value = null;
      try {
        const S = await c();
        u.value = S, S.can_export ? S.warnings.models_without_sources.length > 0 ? w.value = !0 : await m() : p.value = !0;
      } catch (S) {
        v.value = {
          status: "error",
          message: S instanceof Error ? S.message : "Validation failed"
        };
      } finally {
        y.value = !1;
      }
    }
    async function T() {
      w.value = !1, await m();
    }
    async function O() {
      try {
        const S = await c();
        u.value = S;
      } catch (S) {
        console.error("Re-validation failed:", S);
      }
    }
    async function m() {
      g.value = !0;
      try {
        const S = await n(i.value || void 0);
        v.value = S;
      } catch (S) {
        v.value = {
          status: "error",
          message: S instanceof Error ? S.message : "Export failed"
        };
      } finally {
        g.value = !1;
      }
    }
    async function _() {
      var S;
      if ((S = v.value) != null && S.path)
        try {
          await navigator.clipboard.writeText(v.value.path);
        } catch (x) {
          console.error("Failed to copy path:", x);
        }
    }
    async function z() {
      var S;
      if ((S = v.value) != null && S.path) {
        f.value = !0;
        try {
          const x = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(v.value.path)}`);
          if (!x.ok)
            throw new Error(`Download failed: ${x.statusText}`);
          const K = await x.blob(), V = URL.createObjectURL(K), H = v.value.path.split("/").pop() || "environment-export.tar.gz", D = document.createElement("a");
          D.href = V, D.download = H, document.body.appendChild(D), D.click(), document.body.removeChild(D), URL.revokeObjectURL(V);
        } catch (x) {
          console.error("Failed to download:", x), alert(`Download failed: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          f.value = !1;
        }
      }
    }
    return (S, x) => (s(), o(A, null, [
      k(Ge, null, {
        header: l(() => [
          k(qe, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (K) => r.value = !0)
          })
        ]),
        content: l(() => [
          k(Be, { title: "EXPORT OPTIONS" }, {
            default: l(() => [
              e("div", k1, [
                x[7] || (x[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", b1, [
                  k(Zt, {
                    modelValue: i.value,
                    "onUpdate:modelValue": x[1] || (x[1] = (K) => i.value = K),
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
                    onClick: $
                  }, {
                    default: l(() => [
                      x[6] || (x[6] = e("svg", {
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
          v.value ? (s(), E(Be, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: l(() => [
              k(je, {
                status: v.value.status === "success" ? "synced" : "broken"
              }, Wt({
                icon: l(() => [
                  h(a(v.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: l(() => [
                  h(a(v.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: l(() => [
                  h(a(v.value.status === "success" ? "Your environment has been exported" : v.value.message), 1)
                ]),
                _: 2
              }, [
                v.value.status === "success" ? {
                  name: "details",
                  fn: l(() => [
                    k(Ne, { label: "Saved to:" }, {
                      default: l(() => [
                        k(Qh, {
                          path: v.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    v.value.models_without_sources !== void 0 ? (s(), E(Ne, {
                      key: 0,
                      label: "Models without sources:",
                      value: v.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : d("", !0),
                    v.value.models_without_sources && v.value.models_without_sources > 0 ? (s(), o("div", $1, [...x[8] || (x[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : d("", !0)
                  ]),
                  key: "0"
                } : void 0,
                v.value.status === "success" ? {
                  name: "actions",
                  fn: l(() => [
                    k(se, {
                      variant: "primary",
                      size: "sm",
                      loading: f.value,
                      onClick: z
                    }, {
                      default: l(() => [...x[9] || (x[9] = [
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
                    k(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: _
                    }, {
                      default: l(() => [...x[10] || (x[10] = [
                        h(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    k(se, {
                      variant: "ghost",
                      size: "sm",
                      onClick: x[2] || (x[2] = (K) => v.value = null)
                    }, {
                      default: l(() => [...x[11] || (x[11] = [
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
      k(ct, {
        show: r.value,
        title: "What Gets Exported",
        onClose: x[3] || (x[3] = (K) => r.value = !1)
      }, {
        content: l(() => [...x[12] || (x[12] = [
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
      p.value && u.value ? (s(), E(l1, {
        key: 0,
        issues: u.value.blocking_issues,
        onClose: x[4] || (x[4] = (K) => p.value = !1)
      }, null, 8, ["issues"])) : d("", !0),
      w.value && u.value ? (s(), E(w1, {
        key: 1,
        models: u.value.warnings.models_without_sources,
        onConfirm: T,
        onCancel: x[5] || (x[5] = (K) => w.value = !1),
        onRevalidate: O
      }, null, 8, ["models"])) : d("", !0)
    ], 64));
  }
}), x1 = /* @__PURE__ */ te(C1, [["__scopeId", "data-v-f4d120f2"]]), S1 = { class: "file-input-wrapper" }, I1 = ["accept", "multiple", "disabled"], E1 = /* @__PURE__ */ ee({
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
    const i = n, y = C(null);
    function g() {
      var v;
      (v = y.value) == null || v.click();
    }
    function f(v) {
      const r = v.target;
      r.files && r.files.length > 0 && (i("change", r.files), r.value = "");
    }
    return c({
      triggerInput: g
    }), (v, r) => (s(), o("div", S1, [
      e("input", {
        ref_key: "fileInputRef",
        ref: y,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: f
      }, null, 40, I1),
      k(se, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: g
      }, {
        default: l(() => [
          Ce(v.$slots, "default", {}, () => [
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
}), M1 = /* @__PURE__ */ te(E1, [["__scopeId", "data-v-cd192091"]]), T1 = {
  key: 0,
  class: "drop-zone-empty"
}, R1 = { class: "drop-zone-text" }, z1 = { class: "drop-zone-primary" }, L1 = { class: "drop-zone-secondary" }, P1 = { class: "drop-zone-actions" }, D1 = {
  key: 1,
  class: "drop-zone-file"
}, N1 = { class: "file-info" }, U1 = { class: "file-details" }, O1 = { class: "file-name" }, B1 = { class: "file-size" }, F1 = /* @__PURE__ */ ee({
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
    const n = c, i = C(!1), y = C(null), g = C(0), f = P(() => y.value !== null), v = P(() => {
      var m;
      return ((m = y.value) == null ? void 0 : m.name) || "";
    }), r = P(() => {
      if (!y.value) return "";
      const m = y.value.size;
      return m < 1024 ? `${m} B` : m < 1024 * 1024 ? `${(m / 1024).toFixed(1)} KB` : m < 1024 * 1024 * 1024 ? `${(m / (1024 * 1024)).toFixed(1)} MB` : `${(m / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function u(m) {
      var _;
      m.stopPropagation(), g.value++, (_ = m.dataTransfer) != null && _.types.includes("Files") && (i.value = !0);
    }
    function p(m) {
      m.stopPropagation(), m.dataTransfer && (m.dataTransfer.dropEffect = "copy");
    }
    function w(m) {
      m.stopPropagation(), g.value--, g.value === 0 && (i.value = !1);
    }
    function b(m) {
      var z;
      m.stopPropagation(), g.value = 0, i.value = !1;
      const _ = (z = m.dataTransfer) == null ? void 0 : z.files;
      _ && _.length > 0 && T(_[0]);
    }
    function $(m) {
      m.length > 0 && T(m[0]);
    }
    function T(m) {
      y.value = m, n("fileSelected", m);
    }
    function O() {
      y.value = null, n("clear");
    }
    return (m, _) => (s(), o("div", {
      class: de(["file-drop-zone", { "drop-active": i.value, "has-file": f.value }]),
      onDragenter: Le(u, ["prevent"]),
      onDragover: Le(p, ["prevent"]),
      onDragleave: Le(w, ["prevent"]),
      onDrop: Le(b, ["prevent"])
    }, [
      f.value ? (s(), o("div", D1, [
        e("div", N1, [
          _[1] || (_[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", U1, [
            e("div", O1, a(v.value), 1),
            e("div", B1, a(r.value), 1)
          ])
        ]),
        k(se, {
          variant: "ghost",
          size: "xs",
          onClick: O,
          title: "Remove file"
        }, {
          default: l(() => [..._[2] || (_[2] = [
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
        _[0] || (_[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", R1, [
          e("p", z1, a(t.primaryText), 1),
          e("p", L1, a(t.secondaryText), 1)
        ]),
        e("div", P1, [
          k(M1, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "sm",
            onChange: $
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
}), A1 = /* @__PURE__ */ te(F1, [["__scopeId", "data-v-0f79cb86"]]), V1 = { class: "import-preview" }, W1 = { class: "preview-header" }, j1 = {
  key: 0,
  class: "source-env"
}, G1 = { class: "preview-content" }, q1 = { class: "preview-section" }, H1 = { class: "section-header" }, K1 = { class: "section-info" }, J1 = { class: "section-count" }, Y1 = {
  key: 0,
  class: "item-list"
}, X1 = { class: "item-name" }, Q1 = {
  key: 0,
  class: "item-more"
}, Z1 = { class: "preview-section" }, ey = { class: "section-header" }, ty = { class: "section-info" }, sy = { class: "section-count" }, oy = {
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
}, py = { class: "git-info" }, hy = /* @__PURE__ */ ee({
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
    const c = t, n = P(() => c.workflows.length), i = P(() => c.models.length), y = P(() => c.nodes.length);
    function g(f) {
      return f < 1024 ? `${f} B` : f < 1024 * 1024 ? `${(f / 1024).toFixed(1)} KB` : f < 1024 * 1024 * 1024 ? `${(f / (1024 * 1024)).toFixed(1)} MB` : `${(f / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (f, v) => (s(), o("div", V1, [
      e("div", W1, [
        k(Ze, null, {
          default: l(() => [...v[0] || (v[0] = [
            h("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", j1, [
          v[1] || (v[1] = h(" From: ", -1)),
          k(is, null, {
            default: l(() => [
              h(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : d("", !0)
      ]),
      e("div", G1, [
        e("div", q1, [
          e("div", H1, [
            v[3] || (v[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", K1, [
              v[2] || (v[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", J1, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", Y1, [
            (s(!0), o(A, null, Z(t.workflows.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r,
              class: "preview-item"
            }, [
              v[4] || (v[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", X1, a(r), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", Q1, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", Z1, [
          e("div", ey, [
            v[6] || (v[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", ty, [
              v[5] || (v[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", sy, a(i.value) + " file" + a(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", oy, [
            (s(!0), o(A, null, Z(t.models.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r.filename,
              class: "preview-item"
            }, [
              v[7] || (v[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", ny, [
                e("span", ay, a(r.filename), 1),
                e("span", ly, a(g(r.size)) + " • " + a(r.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", iy, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
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
            (s(!0), o(A, null, Z(t.nodes.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r,
              class: "preview-item"
            }, [
              v[10] || (v[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", vy, a(r), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", fy, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", gy, [
          v[11] || (v[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", py, [
            t.gitBranch ? (s(), E(Ne, {
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
            t.gitCommit ? (s(), E(Ne, {
              key: 1,
              label: "Commit"
            }, {
              default: l(() => [
                k(Rs, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : d("", !0)
          ])
        ])) : d("", !0)
      ])
    ]));
  }
}), yy = /* @__PURE__ */ te(hy, [["__scopeId", "data-v-182fe113"]]), wy = { class: "import-config" }, ky = { class: "config-container" }, by = { class: "config-field" }, _y = { class: "input-wrapper" }, $y = ["value"], Cy = {
  key: 0,
  class: "validating-indicator"
}, xy = {
  key: 1,
  class: "valid-indicator"
}, Sy = {
  key: 0,
  class: "field-error"
}, Iy = { class: "config-field" }, Ey = { class: "strategy-options" }, My = ["value", "checked", "onChange"], Ty = { class: "strategy-content" }, Ry = { class: "strategy-label" }, zy = { class: "strategy-description" }, Ly = { class: "config-field switch-field" }, Py = { class: "switch-label" }, Dy = ["checked"], Ny = { class: "advanced-section" }, Uy = { class: "advanced-content" }, Oy = { class: "config-field" }, By = ["value"], Fy = ["value"], Ay = /* @__PURE__ */ ee({
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
    const n = t, i = c, y = C(!1), g = C(!1);
    bt(() => n.nameError, (p) => {
      y.value = !1, g.value = !p && n.name.length > 0;
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
    let v = null;
    function r(p) {
      const w = p.target.value;
      i("update:name", w), g.value = !1, v && clearTimeout(v), w.length > 0 ? (y.value = !0, v = setTimeout(() => {
        i("validate-name", w);
      }, 400)) : y.value = !1;
    }
    function u() {
      n.name.length > 0 && i("validate-name", n.name);
    }
    return (p, w) => (s(), o("div", wy, [
      k(Ze, null, {
        default: l(() => [...w[2] || (w[2] = [
          h("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", ky, [
        e("div", by, [
          k(Yt, { required: "" }, {
            default: l(() => [...w[3] || (w[3] = [
              h("Environment Name", -1)
            ])]),
            _: 1
          }),
          e("div", _y, [
            e("input", {
              type: "text",
              class: de(["name-input", { error: t.nameError || t.name.length === 0, valid: g.value }]),
              value: t.name,
              placeholder: "my-imported-env",
              onInput: r,
              onBlur: u
            }, null, 42, $y),
            y.value ? (s(), o("span", Cy, "...")) : g.value ? (s(), o("span", xy, "✓")) : d("", !0)
          ]),
          t.nameError ? (s(), o("div", Sy, a(t.nameError), 1)) : d("", !0),
          w[4] || (w[4] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", Iy, [
          k(Yt, null, {
            default: l(() => [...w[5] || (w[5] = [
              h("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", Ey, [
            (s(), o(A, null, Z(f, (b) => e("label", {
              key: b.value,
              class: de(["strategy-option", { active: t.modelStrategy === b.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: b.value,
                checked: t.modelStrategy === b.value,
                onChange: ($) => i("update:modelStrategy", b.value)
              }, null, 40, My),
              e("div", Ty, [
                e("span", Ry, a(b.label), 1),
                e("span", zy, a(b.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Ly, [
          e("label", Py, [
            e("input", {
              type: "checkbox",
              checked: t.switchAfterImport,
              onChange: w[0] || (w[0] = (b) => i("update:switchAfterImport", b.target.checked))
            }, null, 40, Dy),
            w[6] || (w[6] = e("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        e("details", Ny, [
          w[8] || (w[8] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", Uy, [
            e("div", Oy, [
              k(Yt, null, {
                default: l(() => [...w[7] || (w[7] = [
                  h("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              e("select", {
                class: "backend-select",
                value: t.torchBackend,
                onChange: w[1] || (w[1] = (b) => i("update:torchBackend", b.target.value))
              }, [
                (s(!0), o(A, null, Z($e(fs), (b) => (s(), o("option", {
                  key: b,
                  value: b
                }, a(b) + a(b === "auto" ? " (detect GPU)" : ""), 9, Fy))), 128))
              ], 40, By)
            ])
          ])
        ])
      ])
    ]));
  }
}), Vy = /* @__PURE__ */ te(Ay, [["__scopeId", "data-v-89ea06a1"]]), Wy = {
  key: 0,
  class: "import-empty"
}, jy = { class: "git-import-section" }, Gy = { class: "git-url-input-row" }, qy = ["disabled"], Hy = {
  key: 0,
  class: "git-error"
}, Ky = {
  key: 1,
  class: "import-configure"
}, Jy = { class: "selected-file-bar" }, Yy = {
  key: 0,
  class: "file-bar-content"
}, Xy = { class: "file-bar-info" }, Qy = { class: "file-bar-name" }, Zy = { class: "file-bar-size" }, ew = {
  key: 1,
  class: "file-bar-content"
}, tw = { class: "file-bar-info" }, sw = { class: "file-bar-name" }, ow = {
  key: 0,
  class: "preview-loading"
}, nw = { class: "import-actions" }, aw = {
  key: 2,
  class: "import-progress"
}, lw = { class: "creating-intro" }, iw = {
  key: 0,
  class: "progress-warning"
}, rw = {
  key: 1,
  class: "import-error"
}, dw = { class: "error-message" }, cw = {
  key: 3,
  class: "import-complete"
}, uw = { class: "complete-message" }, mw = { class: "complete-title" }, vw = { class: "complete-details" }, fw = { class: "complete-actions" }, gw = /* @__PURE__ */ ee({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(t, { emit: c }) {
    const { previewTarballImport: n, previewGitImport: i, validateEnvironmentName: y, executeImport: g, executeGitImport: f, getImportProgress: v } = Fe(), r = c;
    let u = null;
    const p = C(!1), w = C(null), b = C(!1), $ = C(!1), T = C(!1), O = C(""), m = C(!1), _ = C(null), z = C(""), S = C(null), x = C(!1), K = C(null), V = C(null), H = C({
      name: "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), D = C(null), M = C({
      message: "Preparing import...",
      phase: "",
      progress: 0,
      error: null
    }), U = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], ne = P(() => {
      if (!V.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const re = V.value;
      return {
        sourceEnvironment: re.comfyui_version ? `ComfyUI ${re.comfyui_version}` : "Unknown",
        workflows: re.workflows.map((le) => le.name),
        models: re.models.map((le) => ({
          filename: le.filename,
          size: 0,
          type: le.relative_path.split("/")[0] || "model"
        })),
        nodes: re.nodes.map((le) => le.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), X = P(() => !m.value && !_.value && V.value && H.value.name.length > 0 && !D.value && (w.value || S.value));
    async function j(re) {
      w.value = re, m.value = !0, _.value = null, V.value = null;
      try {
        const le = await n(re);
        V.value = le;
      } catch (le) {
        _.value = le instanceof Error ? le.message : "Failed to analyze file", console.error("Preview error:", le);
      } finally {
        m.value = !1;
      }
    }
    function ie() {
      w.value = null, S.value = null, z.value = "", K.value = null, $.value = !1, T.value = !1, O.value = "", V.value = null, _.value = null, H.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, D.value = null;
    }
    function J() {
      Me(), ie(), b.value = !1, m.value = !1, x.value = !1, M.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function N() {
      if (z.value.trim()) {
        x.value = !0, K.value = null;
        try {
          const re = await i(z.value.trim());
          S.value = z.value.trim(), V.value = re;
        } catch (re) {
          K.value = re instanceof Error ? re.message : "Failed to analyze repository";
        } finally {
          x.value = !1;
        }
      }
    }
    function L(re) {
      try {
        const le = new URL(re);
        return le.host + le.pathname.replace(/\.git$/, "");
      } catch {
        return re;
      }
    }
    async function I(re) {
      if (!re) {
        D.value = "Environment name is required";
        return;
      }
      try {
        const le = await y(re);
        D.value = le.valid ? null : le.error || "Invalid name";
      } catch {
        D.value = "Failed to validate name";
      }
    }
    async function ae() {
      if (H.value.name && !(!w.value && !S.value)) {
        b.value = !0, $.value = !1, M.value = { message: `Creating environment '${H.value.name}'...`, phase: "", progress: 0, error: null };
        try {
          let re;
          if (w.value)
            re = await g(
              w.value,
              H.value.name,
              H.value.modelStrategy,
              H.value.torchBackend
            );
          else if (S.value)
            re = await f(
              S.value,
              H.value.name,
              H.value.modelStrategy,
              H.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          re.status === "started" ? oe() : (T.value = !1, O.value = re.message, b.value = !1, $.value = !0);
        } catch (re) {
          T.value = !1, O.value = re instanceof Error ? re.message : "Unknown error occurred during import", b.value = !1, $.value = !0;
        }
      }
    }
    function oe() {
      u || (u = setInterval(async () => {
        try {
          const re = await v();
          M.value = {
            message: re.message,
            phase: re.phase || "",
            progress: re.progress ?? (re.state === "importing" ? 50 : 0),
            error: re.error || null
          }, re.state === "complete" ? (Me(), T.value = !0, O.value = `Environment '${re.environment_name}' created successfully`, b.value = !1, $.value = !0, H.value.switchAfterImport && re.environment_name && r("import-complete-switch", re.environment_name)) : re.state === "error" && (Me(), T.value = !1, O.value = re.error || re.message, b.value = !1, $.value = !0);
        } catch (re) {
          console.error("Failed to poll import progress:", re);
        }
      }, 2e3));
    }
    function Me() {
      u && (clearInterval(u), u = null);
    }
    function be(re) {
      return re < 1024 ? `${re} B` : re < 1024 * 1024 ? `${(re / 1024).toFixed(1)} KB` : re < 1024 * 1024 * 1024 ? `${(re / (1024 * 1024)).toFixed(1)} MB` : `${(re / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (re, le) => (s(), o(A, null, [
      k(Ge, null, {
        header: l(() => [
          k(qe, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: le[0] || (le[0] = (ce) => p.value = !0)
          })
        ]),
        content: l(() => {
          var ce;
          return [
            !w.value && !S.value && !b.value ? (s(), o("div", Wy, [
              k(A1, {
                accept: ".tar.gz,.tgz,.zip",
                "primary-text": "Drag & drop environment export here",
                "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
                "button-text": "Select Export File",
                onFileSelected: j
              }),
              le[9] || (le[9] = e("div", { class: "import-divider" }, [
                e("span", null, "or")
              ], -1)),
              e("div", jy, [
                le[7] || (le[7] = e("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
                e("div", Gy, [
                  Ue(e("input", {
                    type: "text",
                    class: "git-url-input",
                    "onUpdate:modelValue": le[1] || (le[1] = (fe) => z.value = fe),
                    placeholder: "https://github.com/user/repo.git",
                    onKeyup: gt(N, ["enter"]),
                    disabled: x.value
                  }, null, 40, qy), [
                    [Mt, z.value]
                  ]),
                  k(se, {
                    variant: "primary",
                    size: "sm",
                    disabled: !z.value.trim() || x.value,
                    onClick: N
                  }, {
                    default: l(() => [
                      h(a(x.value ? "Analyzing..." : "ANALYZE"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                K.value ? (s(), o("div", Hy, a(K.value), 1)) : d("", !0),
                le[8] || (le[8] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
              ])
            ])) : (w.value || S.value) && !b.value && !$.value ? (s(), o("div", Ky, [
              e("div", Jy, [
                w.value ? (s(), o("div", Yy, [
                  le[10] || (le[10] = e("div", { class: "file-bar-icon" }, "📦", -1)),
                  e("div", Xy, [
                    e("div", Qy, a(w.value.name), 1),
                    e("div", Zy, a(be(w.value.size)), 1)
                  ])
                ])) : S.value ? (s(), o("div", ew, [
                  le[12] || (le[12] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
                  e("div", tw, [
                    e("div", sw, a(L(S.value)), 1),
                    le[11] || (le[11] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
                  ])
                ])) : d("", !0),
                k(se, {
                  variant: "ghost",
                  size: "sm",
                  onClick: ie
                }, {
                  default: l(() => [...le[13] || (le[13] = [
                    h(" Change Source ", -1)
                  ])]),
                  _: 1
                })
              ]),
              m.value ? (s(), o("div", ow, [...le[14] || (le[14] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Analyzing import file...", -1)
              ])])) : _.value ? (s(), E(st, {
                key: 1,
                type: "error",
                title: "Failed to Analyze File",
                details: [_.value]
              }, null, 8, ["details"])) : V.value ? (s(), E(yy, {
                key: 2,
                "source-environment": ne.value.sourceEnvironment,
                workflows: ne.value.workflows,
                models: ne.value.models,
                nodes: ne.value.nodes,
                "git-branch": ne.value.gitBranch,
                "git-commit": ne.value.gitCommit
              }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : d("", !0),
              V.value ? (s(), E(Vy, {
                key: 3,
                name: H.value.name,
                "onUpdate:name": le[2] || (le[2] = (fe) => H.value.name = fe),
                "model-strategy": H.value.modelStrategy,
                "onUpdate:modelStrategy": le[3] || (le[3] = (fe) => H.value.modelStrategy = fe),
                "torch-backend": H.value.torchBackend,
                "onUpdate:torchBackend": le[4] || (le[4] = (fe) => H.value.torchBackend = fe),
                "switch-after-import": H.value.switchAfterImport,
                "onUpdate:switchAfterImport": le[5] || (le[5] = (fe) => H.value.switchAfterImport = fe),
                "name-error": D.value,
                onValidateName: I
              }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : d("", !0),
              H.value.modelStrategy === "skip" && ((ce = V.value) != null && ce.models_needing_download) ? (s(), E(st, {
                key: 4,
                type: "warning",
                title: "Models Will Not Be Downloaded",
                details: [
                  `${V.value.models_needing_download} model(s) will need to be downloaded later`,
                  "You can resolve missing models from the STATUS page after import"
                ]
              }, null, 8, ["details"])) : d("", !0),
              e("div", nw, [
                k(se, {
                  variant: "secondary",
                  size: "md",
                  onClick: ie
                }, {
                  default: l(() => [...le[15] || (le[15] = [
                    h(" Cancel ", -1)
                  ])]),
                  _: 1
                }),
                k(se, {
                  variant: "primary",
                  size: "md",
                  disabled: !X.value,
                  onClick: ae
                }, {
                  default: l(() => [...le[16] || (le[16] = [
                    h(" Create Environment ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ])) : b.value ? (s(), o("div", aw, [
              e("p", lw, [
                le[17] || (le[17] = h(" Importing environment ", -1)),
                e("strong", null, a(H.value.name), 1),
                le[18] || (le[18] = h("... ", -1))
              ]),
              k(ts, {
                progress: M.value.progress,
                message: M.value.message,
                "current-phase": M.value.phase,
                variant: M.value.error ? "error" : "default",
                "show-steps": !0,
                steps: U
              }, null, 8, ["progress", "message", "current-phase", "variant"]),
              M.value.error ? d("", !0) : (s(), o("p", iw, " This may take several minutes. Please wait... ")),
              M.value.error ? (s(), o("div", rw, [
                e("p", dw, a(M.value.error), 1)
              ])) : d("", !0)
            ])) : $.value ? (s(), o("div", cw, [
              e("div", {
                class: de(["complete-icon", T.value ? "success" : "error"])
              }, a(T.value ? "✓" : "✕"), 3),
              e("div", uw, [
                e("div", mw, a(T.value ? "Import Successful" : "Import Failed"), 1),
                e("div", vw, a(O.value), 1)
              ]),
              e("div", fw, [
                k(se, {
                  variant: "primary",
                  size: "md",
                  onClick: J
                }, {
                  default: l(() => [...le[19] || (le[19] = [
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
      k(ct, {
        show: p.value,
        title: "How Import Works",
        onClose: le[6] || (le[6] = (ce) => p.value = !1)
      }, {
        content: l(() => [...le[20] || (le[20] = [
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
}), pw = /* @__PURE__ */ te(gw, [["__scopeId", "data-v-e3c47581"]]), hw = { class: "header-info" }, yw = { class: "commit-hash" }, ww = {
  key: 0,
  class: "commit-refs"
}, kw = { class: "commit-message" }, bw = { class: "commit-date" }, _w = {
  key: 0,
  class: "loading"
}, $w = {
  key: 1,
  class: "changes-section"
}, Cw = { class: "stats-row" }, xw = { class: "stat" }, Sw = { class: "stat insertions" }, Iw = { class: "stat deletions" }, Ew = {
  key: 0,
  class: "change-group"
}, Mw = {
  key: 1,
  class: "change-group"
}, Tw = {
  key: 0,
  class: "version"
}, Rw = {
  key: 2,
  class: "change-group"
}, zw = { class: "change-item" }, Lw = /* @__PURE__ */ ee({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = Fe(), i = C(null), y = C(!0), g = P(() => {
      if (!i.value) return !1;
      const v = i.value.changes.workflows;
      return v.added.length > 0 || v.modified.length > 0 || v.deleted.length > 0;
    }), f = P(() => {
      if (!i.value) return !1;
      const v = i.value.changes.nodes;
      return v.added.length > 0 || v.removed.length > 0;
    });
    return Oe(async () => {
      try {
        i.value = await n(c.commit.hash);
      } finally {
        y.value = !1;
      }
    }), (v, r) => (s(), E(Ke, {
      size: "md",
      "show-close-button": !1,
      onClose: r[3] || (r[3] = (u) => v.$emit("close"))
    }, {
      header: l(() => {
        var u, p, w, b;
        return [
          e("div", hw, [
            r[4] || (r[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", yw, a(((u = i.value) == null ? void 0 : u.short_hash) || t.commit.short_hash || ((p = t.commit.hash) == null ? void 0 : p.slice(0, 7))), 1),
            (b = (w = i.value) == null ? void 0 : w.refs) != null && b.length ? (s(), o("span", ww, [
              (s(!0), o(A, null, Z(i.value.refs, ($) => (s(), o("span", {
                key: $,
                class: "ref-badge"
              }, a($), 1))), 128))
            ])) : d("", !0)
          ]),
          k(ve, {
            variant: "ghost",
            size: "sm",
            onClick: r[0] || (r[0] = ($) => v.$emit("close"))
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
        var u, p;
        return [
          e("div", kw, a(((u = i.value) == null ? void 0 : u.message) || t.commit.message), 1),
          e("div", bw, a(((p = i.value) == null ? void 0 : p.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          y.value ? (s(), o("div", _w, "Loading details...")) : i.value ? (s(), o("div", $w, [
            e("div", Cw, [
              e("span", xw, a(i.value.stats.files_changed) + " files", 1),
              e("span", Sw, "+" + a(i.value.stats.insertions), 1),
              e("span", Iw, "-" + a(i.value.stats.deletions), 1)
            ]),
            g.value ? (s(), o("div", Ew, [
              k(Ft, { variant: "section" }, {
                default: l(() => [...r[6] || (r[6] = [
                  h("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(A, null, Z(i.value.changes.workflows.added, (w) => (s(), o("div", {
                key: "add-" + w,
                class: "change-item added"
              }, [
                r[7] || (r[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(w), 1)
              ]))), 128)),
              (s(!0), o(A, null, Z(i.value.changes.workflows.modified, (w) => (s(), o("div", {
                key: "mod-" + w,
                class: "change-item modified"
              }, [
                r[8] || (r[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(w), 1)
              ]))), 128)),
              (s(!0), o(A, null, Z(i.value.changes.workflows.deleted, (w) => (s(), o("div", {
                key: "del-" + w,
                class: "change-item deleted"
              }, [
                r[9] || (r[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(w), 1)
              ]))), 128))
            ])) : d("", !0),
            f.value ? (s(), o("div", Mw, [
              k(Ft, { variant: "section" }, {
                default: l(() => [...r[10] || (r[10] = [
                  h("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(A, null, Z(i.value.changes.nodes.added, (w) => (s(), o("div", {
                key: "add-" + w.name,
                class: "change-item added"
              }, [
                r[11] || (r[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(w.name), 1),
                w.version ? (s(), o("span", Tw, "(" + a(w.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (s(!0), o(A, null, Z(i.value.changes.nodes.removed, (w) => (s(), o("div", {
                key: "rem-" + w.name,
                class: "change-item deleted"
              }, [
                r[12] || (r[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(w.name), 1)
              ]))), 128))
            ])) : d("", !0),
            i.value.changes.models.resolved > 0 ? (s(), o("div", Rw, [
              k(Ft, { variant: "section" }, {
                default: l(() => [...r[13] || (r[13] = [
                  h("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", zw, [
                r[14] || (r[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: l(() => [
        k(ve, {
          variant: "secondary",
          onClick: r[1] || (r[1] = (u) => v.$emit("createBranch", t.commit))
        }, {
          default: l(() => [...r[15] || (r[15] = [
            h(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        k(ve, {
          variant: "primary",
          onClick: r[2] || (r[2] = (u) => v.$emit("checkout", t.commit))
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
}), Pw = /* @__PURE__ */ te(Lw, [["__scopeId", "data-v-d256ff6d"]]), Dw = { class: "base-textarea-wrapper" }, Nw = ["value", "rows", "placeholder", "disabled", "maxlength"], Uw = {
  key: 0,
  class: "base-textarea-count"
}, Ow = /* @__PURE__ */ ee({
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
    return (c, n) => (s(), o("div", Dw, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeydown: [
          n[1] || (n[1] = gt(Le((i) => c.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = gt(Le((i) => c.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Nw),
      t.showCharCount && t.maxLength ? (s(), o("div", Uw, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : d("", !0)
    ]));
  }
}), xs = /* @__PURE__ */ te(Ow, [["__scopeId", "data-v-5516e6fc"]]), Bw = ["checked", "disabled"], Fw = { class: "base-checkbox-box" }, Aw = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Vw = {
  key: 0,
  class: "base-checkbox-label"
}, Ww = /* @__PURE__ */ ee({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", {
      class: de(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked))
      }, null, 40, Bw),
      e("span", Fw, [
        t.modelValue ? (s(), o("svg", Aw, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : d("", !0)
      ]),
      c.$slots.default ? (s(), o("span", Vw, [
        Ce(c.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ss = /* @__PURE__ */ te(Ww, [["__scopeId", "data-v-bf17c831"]]), jw = { class: "popover-header" }, Gw = { class: "popover-body" }, qw = {
  key: 0,
  class: "changes-summary"
}, Hw = {
  key: 0,
  class: "change-item"
}, Kw = {
  key: 1,
  class: "change-item"
}, Jw = {
  key: 2,
  class: "change-item"
}, Yw = {
  key: 3,
  class: "change-item"
}, Xw = {
  key: 4,
  class: "change-item"
}, Qw = {
  key: 5,
  class: "change-item"
}, Zw = {
  key: 1,
  class: "no-changes"
}, e0 = {
  key: 2,
  class: "loading"
}, t0 = {
  key: 3,
  class: "issues-error"
}, s0 = { class: "error-header" }, o0 = { class: "error-title" }, n0 = { class: "issues-list" }, a0 = { class: "message-section" }, l0 = { class: "popover-footer" }, i0 = {
  key: 1,
  class: "commit-popover"
}, r0 = { class: "popover-header" }, d0 = { class: "popover-body" }, c0 = {
  key: 0,
  class: "changes-summary"
}, u0 = {
  key: 0,
  class: "change-item"
}, m0 = {
  key: 1,
  class: "change-item"
}, v0 = {
  key: 2,
  class: "change-item"
}, f0 = {
  key: 3,
  class: "change-item"
}, g0 = {
  key: 4,
  class: "change-item"
}, p0 = {
  key: 5,
  class: "change-item"
}, h0 = {
  key: 1,
  class: "no-changes"
}, y0 = {
  key: 2,
  class: "loading"
}, w0 = {
  key: 3,
  class: "issues-error"
}, k0 = { class: "error-header" }, b0 = { class: "error-title" }, _0 = { class: "issues-list" }, $0 = { class: "message-section" }, C0 = { class: "popover-footer" }, x0 = /* @__PURE__ */ ee({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, i = c, { commit: y } = Fe(), g = C(""), f = C(!1), v = C(!1), r = C(null), u = P(() => {
      if (!n.status) return !1;
      const O = n.status.workflows;
      return O.new.length > 0 || O.modified.length > 0 || O.deleted.length > 0 || n.status.has_changes;
    }), p = P(() => {
      if (!n.status) return !1;
      const O = n.status.workflows, m = n.status.git_changes;
      return O.new.length > 0 || O.modified.length > 0 || O.deleted.length > 0 || m.nodes_added.length > 0 || m.nodes_removed.length > 0;
    }), w = P(() => {
      var O;
      return (O = n.status) != null && O.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (m) => m.has_issues && (m.sync_state === "new" || m.sync_state === "modified")
      ) : [];
    }), b = P(() => w.value.length > 0), $ = P(() => b.value && !v.value);
    async function T() {
      var O, m, _;
      if (!(b.value && !v.value) && !(!u.value || !g.value.trim() || f.value)) {
        f.value = !0, r.value = null;
        try {
          const z = await y(g.value.trim(), v.value);
          z.status === "success" ? (r.value = {
            type: "success",
            message: `Committed: ${((O = z.summary) == null ? void 0 : O.new) || 0} new, ${((m = z.summary) == null ? void 0 : m.modified) || 0} modified, ${((_ = z.summary) == null ? void 0 : _.deleted) || 0} deleted`
          }, g.value = "", v.value = !1, setTimeout(() => i("committed"), 1e3)) : z.status === "no_changes" ? r.value = { type: "error", message: "No changes to commit" } : z.status === "blocked" ? r.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : r.value = { type: "error", message: z.message || "Commit failed" };
        } catch (z) {
          r.value = { type: "error", message: z instanceof Error ? z.message : "Commit failed" };
        } finally {
          f.value = !1;
        }
      }
    }
    return (O, m) => t.asModal ? (s(), E(Ae, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: m[5] || (m[5] = (_) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: m[4] || (m[4] = Le(() => {
          }, ["stop"]))
        }, [
          e("div", jw, [
            m[11] || (m[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: m[0] || (m[0] = (_) => i("close"))
            }, [...m[10] || (m[10] = [
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
          e("div", Gw, [
            t.status && u.value ? (s(), o("div", qw, [
              t.status.workflows.new.length ? (s(), o("div", Hw, [
                m[12] || (m[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : d("", !0),
              t.status.workflows.modified.length ? (s(), o("div", Kw, [
                m[13] || (m[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : d("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", Jw, [
                m[14] || (m[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", Yw, [
                m[15] || (m[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", Xw, [
                m[16] || (m[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : d("", !0),
              p.value ? d("", !0) : (s(), o("div", Qw, [...m[17] || (m[17] = [
                e("span", { class: "change-icon modified" }, "~", -1),
                e("span", null, "Configuration updated", -1)
              ])]))
            ])) : t.status ? (s(), o("div", Zw, " No changes to commit ")) : (s(), o("div", e0, " Loading... ")),
            b.value ? (s(), o("div", t0, [
              e("div", s0, [
                m[18] || (m[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", o0, a(w.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", n0, [
                (s(!0), o(A, null, Z(w.value, (_) => (s(), o("div", {
                  key: _.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a(_.name), 1),
                  h(": " + a(_.issue_summary), 1)
                ]))), 128))
              ]),
              k(Ss, {
                modelValue: v.value,
                "onUpdate:modelValue": m[1] || (m[1] = (_) => v.value = _),
                class: "allow-issues-toggle"
              }, {
                default: l(() => [...m[19] || (m[19] = [
                  h(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : d("", !0),
            e("div", a0, [
              k(xs, {
                modelValue: g.value,
                "onUpdate:modelValue": m[2] || (m[2] = (_) => g.value = _),
                placeholder: $.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
                disabled: !u.value || f.value || $.value,
                rows: 3,
                onCtrlEnter: T
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            r.value ? (s(), o("div", {
              key: 4,
              class: de(["result", r.value.type])
            }, a(r.value.message), 3)) : d("", !0)
          ]),
          e("div", l0, [
            k(ve, {
              variant: "secondary",
              onClick: m[3] || (m[3] = (_) => i("close"))
            }, {
              default: l(() => [...m[20] || (m[20] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(ve, {
              variant: v.value ? "danger" : "primary",
              disabled: !u.value || !g.value.trim() || f.value || $.value,
              loading: f.value,
              onClick: T
            }, {
              default: l(() => [
                h(a(f.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", i0, [
      e("div", r0, [
        m[22] || (m[22] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: m[6] || (m[6] = (_) => i("close"))
        }, [...m[21] || (m[21] = [
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
      e("div", d0, [
        t.status && u.value ? (s(), o("div", c0, [
          t.status.workflows.new.length ? (s(), o("div", u0, [
            m[23] || (m[23] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          t.status.workflows.modified.length ? (s(), o("div", m0, [
            m[24] || (m[24] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", v0, [
            m[25] || (m[25] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", f0, [
            m[26] || (m[26] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", g0, [
            m[27] || (m[27] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0),
          p.value ? d("", !0) : (s(), o("div", p0, [...m[28] || (m[28] = [
            e("span", { class: "change-icon modified" }, "~", -1),
            e("span", null, "Configuration updated", -1)
          ])]))
        ])) : t.status ? (s(), o("div", h0, " No changes to commit ")) : (s(), o("div", y0, " Loading... ")),
        b.value ? (s(), o("div", w0, [
          e("div", k0, [
            m[29] || (m[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", b0, a(w.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", _0, [
            (s(!0), o(A, null, Z(w.value, (_) => (s(), o("div", {
              key: _.name,
              class: "issue-item"
            }, [
              e("strong", null, a(_.name), 1),
              h(": " + a(_.issue_summary), 1)
            ]))), 128))
          ]),
          k(Ss, {
            modelValue: v.value,
            "onUpdate:modelValue": m[7] || (m[7] = (_) => v.value = _),
            class: "allow-issues-toggle"
          }, {
            default: l(() => [...m[30] || (m[30] = [
              h(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : d("", !0),
        e("div", $0, [
          k(xs, {
            modelValue: g.value,
            "onUpdate:modelValue": m[8] || (m[8] = (_) => g.value = _),
            placeholder: $.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
            disabled: !u.value || f.value || $.value,
            rows: 3,
            onCtrlEnter: T
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        r.value ? (s(), o("div", {
          key: 4,
          class: de(["result", r.value.type])
        }, a(r.value.message), 3)) : d("", !0)
      ]),
      e("div", C0, [
        k(ve, {
          variant: "secondary",
          onClick: m[9] || (m[9] = (_) => i("close"))
        }, {
          default: l(() => [...m[31] || (m[31] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        k(ve, {
          variant: v.value ? "danger" : "primary",
          disabled: !u.value || !g.value.trim() || f.value || $.value,
          loading: f.value,
          onClick: T
        }, {
          default: l(() => [
            h(a(f.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Vs = /* @__PURE__ */ te(x0, [["__scopeId", "data-v-aa2a9bdf"]]), S0 = { class: "modal-header" }, I0 = { class: "modal-body" }, E0 = { class: "switch-message" }, M0 = { class: "switch-details" }, T0 = { class: "modal-actions" }, R0 = /* @__PURE__ */ ee({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), E(Ae, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Le(() => {
          }, ["stop"]))
        }, [
          e("div", S0, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", I0, [
            e("p", E0, [
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
            e("p", M0, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", T0, [
            k(se, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(se, {
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
}), z0 = /* @__PURE__ */ te(R0, [["__scopeId", "data-v-e9c5253e"]]), L0 = {
  key: 0,
  class: "modal-overlay"
}, P0 = { class: "modal-content" }, D0 = { class: "modal-body" }, N0 = { class: "progress-info" }, U0 = { class: "progress-percentage" }, O0 = { class: "progress-state" }, B0 = { class: "switch-steps" }, F0 = { class: "step-icon" }, A0 = { class: "step-label" }, V0 = /* @__PURE__ */ ee({
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
    }), i = P(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), y = P(() => {
      const g = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], f = g.findIndex((v) => v.state === c.state);
      return g.map((v, r) => {
        let u = "pending", p = "○";
        return r < f ? (u = "completed", p = "✓") : r === f && (u = "active", p = "⟳"), {
          ...v,
          status: u,
          icon: p
        };
      });
    });
    return (g, f) => (s(), E(Ae, { to: "body" }, [
      t.show ? (s(), o("div", L0, [
        e("div", P0, [
          f[1] || (f[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", D0, [
            k(As, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", N0, [
              e("div", U0, a(t.progress) + "%", 1),
              e("div", O0, a(n.value), 1)
            ]),
            e("div", B0, [
              (s(!0), o(A, null, Z(y.value, (v) => (s(), o("div", {
                key: v.state,
                class: de(["switch-step", v.status])
              }, [
                e("span", F0, a(v.icon), 1),
                e("span", A0, a(v.label), 1)
              ], 2))), 128))
            ]),
            f[0] || (f[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), W0 = /* @__PURE__ */ te(V0, [["__scopeId", "data-v-768a5078"]]), j0 = { class: "modal-header" }, G0 = { class: "modal-body" }, q0 = {
  key: 0,
  class: "node-section"
}, H0 = { class: "node-list" }, K0 = {
  key: 1,
  class: "node-section"
}, J0 = { class: "node-list" }, Y0 = { class: "modal-actions" }, X0 = /* @__PURE__ */ ee({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), E(Ae, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Le(() => {
          }, ["stop"]))
        }, [
          e("div", j0, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", G0, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", q0, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", H0, [
                (s(!0), o(A, null, Z(t.mismatchDetails.missing_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + a(i), 1))), 128))
              ])
            ])) : d("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", K0, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", J0, [
                (s(!0), o(A, null, Z(t.mismatchDetails.extra_nodes, (i) => (s(), o("div", {
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
          e("div", Y0, [
            k(se, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[10] || (n[10] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(se, {
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
}), Q0 = /* @__PURE__ */ te(X0, [["__scopeId", "data-v-7cad7518"]]), Z0 = {
  key: 0,
  class: "wizard-steps"
}, ek = { class: "step-number" }, tk = {
  key: 1,
  class: "wizard-steps wizard-steps--single"
}, sk = {
  key: 2,
  class: "wizard-step"
}, ok = { class: "form-field" }, nk = ["placeholder"], ak = {
  key: 0,
  class: "form-error"
}, lk = { class: "form-field form-field--checkbox" }, ik = { class: "form-checkbox" }, rk = {
  key: 0,
  class: "form-field"
}, dk = ["placeholder"], ck = {
  key: 0,
  class: "form-info"
}, uk = {
  key: 1,
  class: "form-suggestion"
}, mk = {
  key: 2,
  class: "form-error"
}, vk = {
  key: 3,
  class: "form-info"
}, fk = {
  key: 3,
  class: "wizard-step"
}, gk = {
  key: 0,
  class: "cli-warning"
}, pk = {
  key: 1,
  class: "env-selection"
}, hk = { class: "env-list" }, yk = ["value"], wk = { class: "env-name" }, kk = { class: "env-actions" }, bk = { key: 2 }, _k = { class: "wizard-intro" }, $k = { class: "form-field" }, Ck = { class: "form-field" }, xk = ["value"], Sk = { class: "form-field" }, Ik = ["disabled"], Ek = ["value"], Mk = { class: "form-field" }, Tk = ["value"], Rk = { class: "form-field form-field--checkbox" }, zk = { class: "form-checkbox" }, Lk = {
  key: 1,
  class: "form-error"
}, Kt = 10, Pk = 600 * 1e3, Dk = 1800 * 1e3, Nk = /* @__PURE__ */ ee({
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
      initializeWorkspace: y,
      getInitializeProgress: g,
      validatePath: f,
      createEnvironment: v,
      getCreateProgress: r,
      getComfyUIReleases: u
    } = Fe(), p = C(n.initialStep || 1), w = C(null), b = C(!1), $ = C(n.defaultPath), T = C(!!n.detectedModelsDir), O = C(n.detectedModelsDir || ""), m = C(null), _ = C(null), z = C(null), S = C(null), x = C("my-new-env"), K = C(Bs), V = C("latest"), H = C(Fs), D = C(!0), M = C(null), U = C([{ tag_name: "latest", name: "Latest", published_at: "" }]), ne = C(!1), X = C(!1), j = C(!1), ie = C({ progress: 0, message: "" }), J = C({ progress: 0, message: "" }), N = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], L = C(0), I = C(null), ae = C(0), oe = C(null), Me = P(() => {
      var xe, Te;
      const ge = (xe = $.value) == null ? void 0 : xe.trim(), G = !m.value, Ee = !T.value || !_.value && ((Te = O.value) == null ? void 0 : Te.trim());
      return ge && G && Ee;
    }), be = P(() => {
      var ge;
      return (ge = x.value) == null ? void 0 : ge.trim();
    });
    async function re() {
      var ge;
      if (m.value = null, !!((ge = $.value) != null && ge.trim()))
        try {
          const G = await f({ path: $.value, type: "workspace" });
          G.valid || (m.value = G.error || "Invalid path");
        } catch (G) {
          m.value = G instanceof Error ? G.message : "Validation failed";
        }
    }
    async function le() {
      var ge;
      if (_.value = null, z.value = null, S.value = null, !!((ge = O.value) != null && ge.trim()))
        try {
          const G = await f({ path: O.value, type: "models" });
          if (G.valid)
            S.value = G.model_count ?? null;
          else if (_.value = G.error || "Invalid path", G.suggestion) {
            z.value = G.suggestion, O.value = G.suggestion, _.value = null;
            const Ee = await f({ path: G.suggestion, type: "models" });
            Ee.valid && (S.value = Ee.model_count ?? null);
          }
        } catch (G) {
          _.value = G instanceof Error ? G.message : "Validation failed";
        }
    }
    async function ce() {
      var ge, G, Ee;
      if (m.value = null, _.value = null, await re(), !m.value && !(T.value && ((ge = O.value) != null && ge.trim()) && (await le(), _.value))) {
        X.value = !0;
        try {
          await y({
            workspace_path: ((G = $.value) == null ? void 0 : G.trim()) || n.defaultPath,
            models_directory: T.value && ((Ee = O.value) == null ? void 0 : Ee.trim()) || null
          }), L.value = 0, I.value = Date.now();
          const xe = setInterval(async () => {
            if (I.value && Date.now() - I.value > Pk) {
              clearInterval(xe), X.value = !1, m.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Te = await g();
              if (L.value = 0, Te.state === "idle" && X.value) {
                clearInterval(xe), X.value = !1, m.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              ie.value = { progress: Te.progress, message: Te.message }, Te.state === "complete" ? (clearInterval(xe), X.value = !1, p.value = 2, Re()) : Te.state === "error" && (clearInterval(xe), X.value = !1, m.value = Te.error || "Workspace creation failed");
            } catch (Te) {
              L.value++, console.warn(`Polling failure ${L.value}/${Kt}:`, Te), L.value >= Kt && (clearInterval(xe), X.value = !1, m.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (xe) {
          X.value = !1, m.value = xe instanceof Error ? xe.message : "Failed to create workspace";
        }
      }
    }
    async function fe() {
      j.value = !0, M.value = null;
      try {
        const ge = {
          name: x.value.trim() || "my-new-env",
          python_version: K.value,
          comfyui_version: V.value,
          torch_backend: H.value,
          switch_after: D.value
        };
        if ((await v(ge)).status === "started") {
          ae.value = 0, oe.value = Date.now();
          const Ee = setInterval(async () => {
            if (oe.value && Date.now() - oe.value > Dk) {
              clearInterval(Ee), j.value = !1, M.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const xe = await r();
              if (ae.value = 0, xe.state === "idle" && j.value) {
                clearInterval(Ee), j.value = !1, M.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (J.value = {
                progress: xe.progress ?? 0,
                message: xe.message,
                phase: xe.phase
              }, xe.state === "complete") {
                clearInterval(Ee), j.value = !1;
                const Te = xe.environment_name || ge.name;
                D.value ? i("complete", Te) : (b.value = !1, i("environment-created-no-switch", Te));
              } else xe.state === "error" && (clearInterval(Ee), j.value = !1, M.value = xe.error || "Environment creation failed");
            } catch (xe) {
              ae.value++, console.warn(`Polling failure ${ae.value}/${Kt}:`, xe), ae.value >= Kt && (clearInterval(Ee), j.value = !1, M.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ge) {
        j.value = !1, M.value = ge instanceof Error ? ge.message : "Unknown error";
      }
    }
    async function Re() {
      ne.value = !0;
      try {
        U.value = await u();
      } catch (ge) {
        console.error("Failed to load ComfyUI releases:", ge);
      } finally {
        ne.value = !1;
      }
    }
    function he() {
      w.value && i("switch-environment", w.value);
    }
    return Oe(() => {
      n.detectedModelsDir && (O.value = n.detectedModelsDir), p.value === 2 && Re();
    }), (ge, G) => (s(), E(Ke, {
      title: "WELCOME TO COMFYGIT",
      size: "lg",
      "show-close-button": !0,
      "close-on-overlay-click": !1,
      onClose: G[12] || (G[12] = (Ee) => ge.$emit("close"))
    }, {
      body: l(() => {
        var Ee, xe, Te;
        return [
          n.setupState === "no_workspace" ? (s(), o("div", Z0, [
            e("div", {
              class: de(["step", { active: p.value === 1, complete: p.value > 1 }])
            }, [
              e("span", ek, a(p.value > 1 ? "✓" : "1"), 1),
              G[13] || (G[13] = e("span", { class: "step-label" }, "Workspace", -1))
            ], 2),
            G[15] || (G[15] = e("div", { class: "step-connector" }, null, -1)),
            e("div", {
              class: de(["step", { active: p.value === 2 }])
            }, [...G[14] || (G[14] = [
              e("span", { class: "step-number" }, "2", -1),
              e("span", { class: "step-label" }, "Environment", -1)
            ])], 2)
          ])) : (s(), o("div", tk, [...G[16] || (G[16] = [
            e("div", { class: "step active" }, [
              e("span", { class: "step-number" }, "1"),
              e("span", { class: "step-label" }, "Environment")
            ], -1)
          ])])),
          p.value === 1 ? (s(), o("div", sk, [
            G[20] || (G[20] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
            e("div", ok, [
              G[17] || (G[17] = e("label", { class: "form-label" }, "Workspace Path", -1)),
              Ue(e("input", {
                "onUpdate:modelValue": G[0] || (G[0] = (me) => $.value = me),
                type: "text",
                class: "form-input",
                placeholder: t.defaultPath,
                onBlur: re
              }, null, 40, nk), [
                [Mt, $.value]
              ]),
              m.value ? (s(), o("p", ak, a(m.value), 1)) : d("", !0)
            ]),
            e("div", lk, [
              e("label", ik, [
                Ue(e("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": G[1] || (G[1] = (me) => T.value = me)
                }, null, 512), [
                  [Qt, T.value]
                ]),
                G[18] || (G[18] = e("span", null, "I have existing ComfyUI models", -1))
              ])
            ]),
            T.value ? (s(), o("div", rk, [
              G[19] || (G[19] = e("label", { class: "form-label" }, "Models Directory", -1)),
              Ue(e("input", {
                "onUpdate:modelValue": G[2] || (G[2] = (me) => O.value = me),
                type: "text",
                class: "form-input",
                placeholder: t.detectedModelsDir || "/path/to/models",
                onBlur: le
              }, null, 40, dk), [
                [Mt, O.value]
              ]),
              t.detectedModelsDir && !O.value ? (s(), o("p", ck, " Detected: " + a(t.detectedModelsDir), 1)) : d("", !0),
              z.value ? (s(), o("p", uk, " Did you mean: " + a(z.value), 1)) : d("", !0),
              _.value ? (s(), o("p", mk, a(_.value), 1)) : d("", !0),
              S.value !== null && !_.value ? (s(), o("p", vk, " Found " + a(S.value) + " model files ", 1)) : d("", !0)
            ])) : d("", !0),
            X.value ? (s(), E(ts, {
              key: 1,
              progress: ie.value.progress,
              message: ie.value.message
            }, null, 8, ["progress", "message"])) : d("", !0)
          ])) : d("", !0),
          p.value === 2 ? (s(), o("div", fk, [
            n.cliInstalled ? d("", !0) : (s(), o("div", gk, [...G[21] || (G[21] = [
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
            (Ee = n.existingEnvironments) != null && Ee.length && !b.value ? (s(), o("div", pk, [
              G[23] || (G[23] = e("p", { class: "wizard-intro" }, " You have existing managed environments. Switch to one, or create a new environment: ", -1)),
              e("div", hk, [
                (s(!0), o(A, null, Z(n.existingEnvironments, (me) => (s(), o("label", {
                  key: me,
                  class: de(["env-option", { selected: w.value === me }])
                }, [
                  Ue(e("input", {
                    type: "radio",
                    name: "env-select",
                    value: me,
                    "onUpdate:modelValue": G[3] || (G[3] = (Je) => w.value = Je)
                  }, null, 8, yk), [
                    [Jt, w.value]
                  ]),
                  e("span", wk, a(me), 1)
                ], 2))), 128))
              ]),
              e("div", kk, [
                w.value ? (s(), E(ve, {
                  key: 0,
                  variant: "primary",
                  onClick: he
                }, {
                  default: l(() => [
                    h(" Switch to " + a(w.value), 1)
                  ]),
                  _: 1
                })) : d("", !0),
                k(ve, {
                  variant: "secondary",
                  onClick: G[4] || (G[4] = (me) => b.value = !0)
                }, {
                  default: l(() => [...G[22] || (G[22] = [
                    h(" + Create New Environment ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])) : d("", !0),
            b.value || !((xe = n.existingEnvironments) != null && xe.length) ? (s(), o("div", bk, [
              e("p", _k, a((Te = n.existingEnvironments) != null && Te.length ? "Create a new managed environment:" : "Now let's create your first managed environment. This will be an isolated ComfyUI installation with its own nodes and workflows."), 1),
              e("div", $k, [
                G[24] || (G[24] = e("label", { class: "form-label" }, "Environment Name", -1)),
                Ue(e("input", {
                  "onUpdate:modelValue": G[5] || (G[5] = (me) => x.value = me),
                  type: "text",
                  class: "form-input",
                  placeholder: "my-new-env"
                }, null, 512), [
                  [Mt, x.value]
                ])
              ]),
              e("div", Ck, [
                G[25] || (G[25] = e("label", { class: "form-label" }, "Python Version", -1)),
                Ue(e("select", {
                  "onUpdate:modelValue": G[6] || (G[6] = (me) => K.value = me),
                  class: "form-select"
                }, [
                  (s(!0), o(A, null, Z($e(Os), (me) => (s(), o("option", {
                    key: me,
                    value: me
                  }, a(me), 9, xk))), 128))
                ], 512), [
                  [Tt, K.value]
                ])
              ]),
              e("div", Sk, [
                G[26] || (G[26] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                Ue(e("select", {
                  "onUpdate:modelValue": G[7] || (G[7] = (me) => V.value = me),
                  class: "form-select",
                  disabled: ne.value
                }, [
                  (s(!0), o(A, null, Z(U.value, (me) => (s(), o("option", {
                    key: me.tag_name,
                    value: me.tag_name
                  }, a(me.name), 9, Ek))), 128))
                ], 8, Ik), [
                  [Tt, V.value]
                ])
              ]),
              e("div", Mk, [
                G[27] || (G[27] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                Ue(e("select", {
                  "onUpdate:modelValue": G[8] || (G[8] = (me) => H.value = me),
                  class: "form-select"
                }, [
                  (s(!0), o(A, null, Z($e(fs), (me) => (s(), o("option", {
                    key: me,
                    value: me
                  }, a(me) + a(me === "auto" ? " (detect GPU)" : ""), 9, Tk))), 128))
                ], 512), [
                  [Tt, H.value]
                ])
              ]),
              e("div", Rk, [
                e("label", zk, [
                  Ue(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": G[9] || (G[9] = (me) => D.value = me)
                  }, null, 512), [
                    [Qt, D.value]
                  ]),
                  G[28] || (G[28] = e("span", null, "Switch to this environment after creation", -1))
                ])
              ]),
              j.value ? (s(), E(ts, {
                key: 0,
                progress: J.value.progress,
                message: J.value.message,
                "current-phase": J.value.phase,
                "show-steps": !0,
                steps: N
              }, null, 8, ["progress", "message", "current-phase"])) : d("", !0),
              M.value ? (s(), o("div", Lk, a(M.value), 1)) : d("", !0)
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: l(() => {
        var Ee, xe;
        return [
          p.value === 1 ? (s(), E(ve, {
            key: 0,
            variant: "primary",
            disabled: !Me.value || X.value,
            onClick: ce
          }, {
            default: l(() => [
              h(a(X.value ? "Creating..." : "Next"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : p.value === 2 ? (s(), o(A, { key: 1 }, [
            n.setupState === "no_workspace" ? (s(), E(ve, {
              key: 0,
              variant: "secondary",
              disabled: j.value,
              onClick: G[10] || (G[10] = (Te) => p.value = 1)
            }, {
              default: l(() => [...G[29] || (G[29] = [
                h(" Back ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : (Ee = n.existingEnvironments) != null && Ee.length && b.value ? (s(), E(ve, {
              key: 1,
              variant: "secondary",
              disabled: j.value,
              onClick: G[11] || (G[11] = (Te) => b.value = !1)
            }, {
              default: l(() => [...G[30] || (G[30] = [
                h(" Back ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : d("", !0),
            b.value || !((xe = n.existingEnvironments) != null && xe.length) ? (s(), E(ve, {
              key: 2,
              variant: "primary",
              disabled: !be.value || j.value,
              onClick: fe
            }, {
              default: l(() => [
                h(a(j.value ? "Creating..." : D.value ? "Create & Switch" : "Create Environment"), 1)
              ]),
              _: 1
            }, 8, ["disabled"])) : d("", !0)
          ], 64)) : d("", !0)
        ];
      }),
      _: 1
    }));
  }
}), Uk = /* @__PURE__ */ te(Nk, [["__scopeId", "data-v-b8c35e2d"]]), Ok = { class: "comfygit-panel" }, Bk = { class: "panel-header" }, Fk = { class: "header-left" }, Ak = {
  key: 0,
  class: "header-info"
}, Vk = { class: "header-actions" }, Wk = { class: "env-switcher" }, jk = {
  key: 0,
  class: "header-info"
}, Gk = { class: "branch-name" }, qk = { class: "panel-main" }, Hk = { class: "sidebar" }, Kk = { class: "sidebar-content" }, Jk = { class: "sidebar-section" }, Yk = { class: "sidebar-section" }, Xk = { class: "sidebar-section" }, Qk = { class: "content-area" }, Zk = {
  key: 0,
  class: "error-message"
}, eb = {
  key: 1,
  class: "loading"
}, tb = { class: "dialog-content env-selector-dialog" }, sb = { class: "dialog-header" }, ob = { class: "dialog-body" }, nb = { class: "env-list" }, ab = { class: "env-info" }, lb = { class: "env-name-row" }, ib = { class: "env-indicator" }, rb = { class: "env-name" }, db = {
  key: 0,
  class: "env-branch"
}, cb = {
  key: 1,
  class: "current-label"
}, ub = { class: "env-stats" }, mb = ["onClick"], vb = { class: "toast-container" }, fb = { class: "toast-message" }, gb = /* @__PURE__ */ ee({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const n = t, i = c, {
      getStatus: y,
      getHistory: g,
      getBranches: f,
      checkout: v,
      createBranch: r,
      switchBranch: u,
      deleteBranch: p,
      getEnvironments: w,
      switchEnvironment: b,
      getSwitchProgress: $,
      deleteEnvironment: T,
      syncEnvironmentManually: O,
      repairWorkflowModels: m,
      getSetupStatus: _
    } = Fe(), z = zs();
    function S(W) {
      window.open(W, "_blank", "noopener,noreferrer");
    }
    const x = C(null), K = C([]), V = C([]), H = C([]), D = P(() => H.value.find((W) => W.is_current)), M = C(null), U = C(!1), ne = C(1), X = P(() => {
      var W;
      return ((W = M.value) == null ? void 0 : W.state) || "managed";
    }), j = C(!1), ie = C(null), J = C(null), N = C(!1), L = C(null), I = C(null), ae = C(null), oe = C(!1), Me = C(!1), be = C(""), re = C({ state: "idle", progress: 0, message: "" });
    let le = null, ce = null;
    const fe = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, Re = n.initialView ? fe[n.initialView] : null, he = C((Re == null ? void 0 : Re.view) ?? "status"), ge = C((Re == null ? void 0 : Re.section) ?? "this-env");
    function G(W, R) {
      he.value = W, ge.value = R;
    }
    function Ee(W) {
      const pe = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[W];
      pe && G(pe.view, pe.section);
    }
    function xe() {
      G("branches", "this-env");
    }
    function Te() {
      i("close"), setTimeout(() => {
        var R;
        const W = document.querySelectorAll("button.comfyui-button");
        for (const pe of W)
          if (((R = pe.textContent) == null ? void 0 : R.trim()) === "Manager") {
            pe.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const me = C(null), Je = C(!1), et = C(!1), Ye = C([]);
    let _t = 0;
    function ke(W, R = "info", pe = 3e3) {
      const Se = ++_t;
      return Ye.value.push({ id: Se, message: W, type: R }), pe > 0 && setTimeout(() => {
        Ye.value = Ye.value.filter((De) => De.id !== Se);
      }, pe), Se;
    }
    function Ve(W) {
      Ye.value = Ye.value.filter((R) => R.id !== W);
    }
    function wt(W, R) {
      ke(W, R);
    }
    const ut = P(() => {
      if (!x.value) return "neutral";
      const W = x.value.workflows, R = W.new.length > 0 || W.modified.length > 0 || W.deleted.length > 0 || x.value.has_changes;
      return x.value.comparison.is_synced ? R ? "warning" : "success" : "error";
    });
    P(() => x.value ? ut.value === "success" ? "All synced" : ut.value === "warning" ? "Uncommitted changes" : ut.value === "error" ? "Not synced" : "" : "");
    async function Pe() {
      j.value = !0, ie.value = null;
      try {
        const [W, R, pe, Se] = await Promise.all([
          y(!0),
          g(),
          f(),
          w()
        ]);
        x.value = W, K.value = R.commits, V.value = pe.branches, H.value = Se, i("statusUpdate", W), L.value && await L.value.loadWorkflows(!0);
      } catch (W) {
        ie.value = W instanceof Error ? W.message : "Failed to load status", x.value = null, K.value = [], V.value = [];
      } finally {
        j.value = !1;
      }
    }
    function $t(W) {
      J.value = W;
    }
    async function lt(W) {
      var pe;
      J.value = null;
      const R = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      me.value = {
        title: R ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: R ? "You have uncommitted changes that will be lost." : `Checkout commit ${W.short_hash || ((pe = W.hash) == null ? void 0 : pe.slice(0, 7))}?`,
        details: R ? ys() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: R,
        onConfirm: async () => {
          var We;
          me.value = null, we();
          const Se = ke(`Checking out ${W.short_hash || ((We = W.hash) == null ? void 0 : We.slice(0, 7))}...`, "info", 0), De = await v(W.hash, R);
          Ve(Se), De.status === "success" ? ke("Restarting ComfyUI...", "success") : ke(De.message || "Checkout failed", "error");
        }
      };
    }
    async function Y(W) {
      const R = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      me.value = {
        title: R ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: R ? "You have uncommitted changes." : `Switch to branch "${W}"?`,
        details: R ? ys() : void 0,
        warning: R ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          me.value = null, we();
          const pe = ke(`Switching to ${W}...`, "info", 0), Se = await u(W, R);
          Ve(pe), Se.status === "success" ? ke("Restarting ComfyUI...", "success") : ke(Se.message || "Branch switch failed", "error");
        }
      };
    }
    async function B(W) {
      const R = ke(`Creating branch ${W}...`, "info", 0), pe = await r(W);
      Ve(R), pe.status === "success" ? (ke(`Branch "${W}" created`, "success"), await Pe()) : ke(pe.message || "Failed to create branch", "error");
    }
    async function F(W, R = !1) {
      const pe = async (Se) => {
        var We;
        const De = ke(`Deleting branch ${W}...`, "info", 0);
        try {
          const ft = await p(W, Se);
          Ve(De), ft.status === "success" ? (ke(`Branch "${W}" deleted`, "success"), await Pe()) : (We = ft.message) != null && We.includes("not fully merged") ? me.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${W}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              me.value = null, await pe(!0);
            }
          } : ke(ft.message || "Failed to delete branch", "error");
        } catch (ft) {
          Ve(De);
          const Lt = ft instanceof Error ? ft.message : "Failed to delete branch";
          Lt.includes("not fully merged") ? me.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${W}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              me.value = null, await pe(!0);
            }
          } : ke(Lt, "error");
        }
      };
      me.value = {
        title: "Delete Branch",
        message: `Delete branch "${W}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          me.value = null, await pe(R);
        }
      };
    }
    async function Q(W) {
      J.value = null;
      const R = prompt("Enter branch name:");
      if (R) {
        const pe = ke(`Creating branch ${R}...`, "info", 0), Se = await r(R, W.hash);
        Ve(pe), Se.status === "success" ? (ke(`Branch "${R}" created from ${W.short_hash}`, "success"), await Pe()) : ke(Se.message || "Failed to create branch", "error");
      }
    }
    function we() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function it() {
      me.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var W;
          me.value = null, we(), ke("Restarting environment...", "info");
          try {
            (W = window.app) != null && W.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function mt() {
      me.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var W;
          me.value = null, ke("Stopping environment...", "info");
          try {
            (W = window.app) != null && W.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function tt(W) {
      N.value = !1, be.value = W, oe.value = !0;
    }
    async function xt() {
      oe.value = !1, Me.value = !0, we(), re.value = {
        progress: 10,
        state: vt(10),
        message: St(10)
      };
      try {
        await b(be.value), q(), _e();
      } catch (W) {
        ue(), Me.value = !1, ke(`Failed to initiate switch: ${W instanceof Error ? W.message : "Unknown error"}`, "error"), re.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function vt(W) {
      return W >= 100 ? "complete" : W >= 80 ? "validating" : W >= 60 ? "starting" : W >= 30 ? "syncing" : "preparing";
    }
    function St(W) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[vt(W)] || "";
    }
    function q() {
      if (ce) return;
      let W = 10;
      const R = 60, pe = 5e3, Se = 100, De = (R - W) / (pe / Se);
      ce = window.setInterval(() => {
        if (W += De, W >= R && (W = R, ue()), re.value.progress < R) {
          const We = Math.floor(W);
          re.value = {
            progress: We,
            state: vt(We),
            message: St(We)
          };
        }
      }, Se);
    }
    function ue() {
      ce && (clearInterval(ce), ce = null);
    }
    function _e() {
      le || (le = window.setInterval(async () => {
        try {
          let W = await z.getStatus();
          if ((!W || W.state === "idle") && (W = await $()), !W)
            return;
          const R = W.progress || 0;
          R >= 60 && ue();
          const pe = Math.max(R, re.value.progress), Se = W.state && W.state !== "idle" && W.state !== "unknown", De = Se ? W.state : vt(pe), We = Se && W.message || St(pe);
          re.value = {
            state: De,
            progress: pe,
            message: We
          }, W.state === "complete" ? (ue(), ze(), Me.value = !1, ke(`✓ Switched to ${be.value}`, "success"), await Pe(), be.value = "") : W.state === "rolled_back" ? (ue(), ze(), Me.value = !1, ke("Switch failed, restored previous environment", "warning"), be.value = "") : W.state === "critical_failure" && (ue(), ze(), Me.value = !1, ke(`Critical error during switch: ${W.message}`, "error"), be.value = "");
        } catch (W) {
          console.error("Failed to poll switch progress:", W);
        }
      }, 1e3));
    }
    function ze() {
      ue(), le && (clearInterval(le), le = null);
    }
    function Xe() {
      var W;
      oe.value = !1, be.value = "", (W = M.value) != null && W.state && M.value.state !== "managed" && (ne.value = M.value.state === "no_workspace" ? 1 : 2, U.value = !0);
    }
    async function It() {
      Je.value = !1, await Pe(), ke("✓ Changes committed", "success");
    }
    async function qt() {
      et.value = !1;
      const W = ke("Syncing environment...", "info", 0);
      try {
        const R = await O("skip", !0);
        if (Ve(W), R.status === "success") {
          const pe = [];
          R.nodes_installed.length && pe.push(`${R.nodes_installed.length} installed`), R.nodes_removed.length && pe.push(`${R.nodes_removed.length} removed`);
          const Se = pe.length ? `: ${pe.join(", ")}` : "";
          ke(`✓ Environment synced${Se}`, "success"), await Pe();
        } else {
          const pe = R.errors.length ? R.errors.join("; ") : R.message;
          ke(`Sync failed: ${pe}`, "error");
        }
      } catch (R) {
        Ve(W), ke(`Sync error: ${R instanceof Error ? R.message : "Unknown error"}`, "error");
      }
    }
    async function Ht(W) {
      var R;
      try {
        const pe = await m(W);
        pe.failed.length === 0 ? ke(`✓ Repaired ${pe.success} workflow${pe.success === 1 ? "" : "s"}`, "success") : ke(`Repaired ${pe.success}, failed: ${pe.failed.length}`, "warning"), await Pe();
      } catch (pe) {
        ke(`Repair failed: ${pe instanceof Error ? pe.message : "Unknown error"}`, "error");
      } finally {
        (R = ae.value) == null || R.resetRepairingState();
      }
    }
    async function hs() {
      var R, pe;
      const W = ke("Repairing environment...", "info", 0);
      try {
        const Se = await O("skip", !0);
        if (Ve(W), Se.status === "success") {
          const De = [];
          Se.nodes_installed.length && De.push(`${Se.nodes_installed.length} installed`), Se.nodes_removed.length && De.push(`${Se.nodes_removed.length} removed`);
          const We = De.length ? `: ${De.join(", ")}` : "";
          ke(`✓ Environment repaired${We}`, "success"), (R = ae.value) == null || R.closeDetailModal(), await Pe();
        } else {
          const De = Se.errors.length ? Se.errors.join(", ") : Se.message || "Unknown error";
          ke(`Repair failed: ${De}`, "error");
        }
      } catch (Se) {
        Ve(W), ke(`Repair error: ${Se instanceof Error ? Se.message : "Unknown error"}`, "error");
      } finally {
        (pe = ae.value) == null || pe.resetRepairingEnvironmentState();
      }
    }
    async function Ks(W, R) {
      ke(`Environment '${W}' created`, "success"), await Pe(), I.value && await I.value.loadEnvironments(), R && await tt(W);
    }
    async function Js(W) {
      var R;
      if (((R = D.value) == null ? void 0 : R.name) === W) {
        ke("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      me.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${W}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          me.value = null;
          try {
            const pe = await T(W);
            pe.status === "success" ? (ke(`Environment "${W}" deleted`, "success"), await Pe(), I.value && await I.value.loadEnvironments()) : ke(pe.message || "Failed to delete environment", "error");
          } catch (pe) {
            ke(`Error deleting environment: ${pe instanceof Error ? pe.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function Ys(W) {
      U.value = !1;
      try {
        M.value = await _();
      } catch {
      }
      await tt(W);
    }
    function Xs() {
      U.value = !1, i("close");
    }
    async function Qs(W) {
      await tt(W);
    }
    async function Zs(W) {
      await Pe(), await tt(W);
    }
    async function eo(W) {
      M.value = await _(), console.log(`Environment '${W}' created. Available for switching.`);
    }
    function to() {
      G("environments", "all-envs"), setTimeout(() => {
        var W;
        (W = I.value) == null || W.openCreateModal();
      }, 100);
    }
    function ys() {
      if (!x.value) return [];
      const W = [], R = x.value.workflows;
      return R.new.length && W.push(`${R.new.length} new workflow(s)`), R.modified.length && W.push(`${R.modified.length} modified workflow(s)`), R.deleted.length && W.push(`${R.deleted.length} deleted workflow(s)`), W;
    }
    return Oe(async () => {
      try {
        if (M.value = await _(), M.value.state === "no_workspace") {
          U.value = !0, ne.value = 1;
          return;
        }
        if (M.value.state === "empty_workspace") {
          U.value = !0, ne.value = 2;
          return;
        }
        if (M.value.state === "unmanaged") {
          U.value = !0, ne.value = 2;
          return;
        }
      } catch (W) {
        console.warn("Setup status check failed, proceeding normally:", W);
      }
      await Pe();
    }), (W, R) => {
      var pe, Se, De, We, ft, Lt, ws, ks, bs, _s, $s;
      return s(), o("div", Ok, [
        e("div", Bk, [
          e("div", Fk, [
            R[35] || (R[35] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            x.value ? (s(), o("div", Ak)) : d("", !0)
          ]),
          e("div", Vk, [
            e("button", {
              class: "sponsor-btn",
              onClick: R[0] || (R[0] = (ye) => S("https://github.com/sponsors/comfyhub-org")),
              title: "Sponsor ComfyHub",
              "aria-label": "Sponsor ComfyHub on GitHub"
            }, [...R[36] || (R[36] = [
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
              onClick: R[1] || (R[1] = (ye) => S("https://discord.gg/2h5rSTeh6Y")),
              title: "Join Discord",
              "aria-label": "Join ComfyHub Discord"
            }, [...R[37] || (R[37] = [
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
              onClick: R[2] || (R[2] = (ye) => S("https://x.com/akatz_ai")),
              title: "Follow on X",
              "aria-label": "Follow on X"
            }, [...R[38] || (R[38] = [
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
              onClick: R[3] || (R[3] = (ye) => S("https://github.com/comfyhub-org/comfygit")),
              title: "View on GitHub",
              "aria-label": "View ComfyGit on GitHub"
            }, [...R[39] || (R[39] = [
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
              onClick: R[4] || (R[4] = (ye) => S("https://docs.comfyhub.org/comfygit/")),
              title: "Documentation",
              "aria-label": "View ComfyGit Documentation"
            }, [...R[40] || (R[40] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" })
              ], -1)
            ])]),
            R[43] || (R[43] = e("span", { class: "header-divider" }, null, -1)),
            e("button", {
              class: de(["icon-btn", { spinning: j.value }]),
              onClick: Pe,
              title: "Refresh"
            }, [...R[41] || (R[41] = [
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
              onClick: R[5] || (R[5] = (ye) => i("close")),
              title: "Close"
            }, [...R[42] || (R[42] = [
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
        e("div", Wk, [
          e("div", { class: "env-switcher-header" }, [
            R[44] || (R[44] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: it
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: mt
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: R[6] || (R[6] = (ye) => G("environments", "all-envs"))
          }, [
            x.value ? (s(), o("div", jk, [
              e("span", null, a(((pe = D.value) == null ? void 0 : pe.name) || ((Se = x.value) == null ? void 0 : Se.environment) || "Loading..."), 1),
              e("span", Gk, "(" + a(x.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            R[45] || (R[45] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", qk, [
          e("div", Hk, [
            e("div", Kk, [
              e("div", Jk, [
                R[46] || (R[46] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                e("button", {
                  class: de(["sidebar-item", { active: he.value === "status" && ge.value === "this-env" }]),
                  onClick: R[7] || (R[7] = (ye) => G("status", "this-env"))
                }, " STATUS ", 2),
                e("button", {
                  class: de(["sidebar-item", { active: he.value === "workflows" }]),
                  onClick: R[8] || (R[8] = (ye) => G("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                e("button", {
                  class: de(["sidebar-item", { active: he.value === "models-env" }]),
                  onClick: R[9] || (R[9] = (ye) => G("models-env", "this-env"))
                }, " MODELS ", 2),
                e("button", {
                  class: de(["sidebar-item", { active: he.value === "branches" }]),
                  onClick: R[10] || (R[10] = (ye) => G("branches", "this-env"))
                }, " BRANCHES ", 2),
                e("button", {
                  class: de(["sidebar-item", { active: he.value === "history" }]),
                  onClick: R[11] || (R[11] = (ye) => G("history", "this-env"))
                }, " HISTORY ", 2),
                e("button", {
                  class: de(["sidebar-item", { active: he.value === "nodes" }]),
                  onClick: R[12] || (R[12] = (ye) => G("nodes", "this-env"))
                }, " NODES ", 2),
                e("button", {
                  class: de(["sidebar-item", { active: he.value === "debug-env" }]),
                  onClick: R[13] || (R[13] = (ye) => G("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              R[49] || (R[49] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", Yk, [
                R[47] || (R[47] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                e("button", {
                  class: de(["sidebar-item", { active: he.value === "environments" }]),
                  onClick: R[14] || (R[14] = (ye) => G("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                e("button", {
                  class: de(["sidebar-item", { active: he.value === "model-index" }]),
                  onClick: R[15] || (R[15] = (ye) => G("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                e("button", {
                  class: de(["sidebar-item", { active: he.value === "settings" }]),
                  onClick: R[16] || (R[16] = (ye) => G("settings", "all-envs"))
                }, " SETTINGS ", 2),
                e("button", {
                  class: de(["sidebar-item", { active: he.value === "debug-workspace" }]),
                  onClick: R[17] || (R[17] = (ye) => G("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              R[50] || (R[50] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", Xk, [
                R[48] || (R[48] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                e("button", {
                  class: de(["sidebar-item", { active: he.value === "export" }]),
                  onClick: R[18] || (R[18] = (ye) => G("export", "sharing"))
                }, " EXPORT ", 2),
                e("button", {
                  class: de(["sidebar-item", { active: he.value === "import" }]),
                  onClick: R[19] || (R[19] = (ye) => G("import", "sharing"))
                }, " IMPORT ", 2),
                e("button", {
                  class: de(["sidebar-item", { active: he.value === "remotes" }]),
                  onClick: R[20] || (R[20] = (ye) => G("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            R[51] || (R[51] = ao('<div class="sidebar-footer" data-v-abb80b7d><span class="version" data-v-abb80b7d>v0.0.1</span><span class="made-by" data-v-abb80b7d>made with <svg class="heart-icon" width="10" height="10" viewBox="0 0 16 16" fill="currentColor" data-v-abb80b7d><path d="M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" data-v-abb80b7d></path></svg> by Akatz</span></div>', 1))
          ]),
          e("div", Qk, [
            ie.value ? (s(), o("div", Zk, a(ie.value), 1)) : !x.value && he.value === "status" ? (s(), o("div", eb, " Loading status... ")) : (s(), o(A, { key: 2 }, [
              he.value === "status" ? (s(), E(Oa, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: ae,
                status: x.value,
                "setup-state": X.value,
                onSwitchBranch: xe,
                onCommitChanges: R[21] || (R[21] = (ye) => Je.value = !0),
                onSyncEnvironment: R[22] || (R[22] = (ye) => et.value = !0),
                onViewWorkflows: R[23] || (R[23] = (ye) => G("workflows", "this-env")),
                onViewHistory: R[24] || (R[24] = (ye) => G("history", "this-env")),
                onViewDebug: R[25] || (R[25] = (ye) => G("debug-env", "this-env")),
                onViewNodes: R[26] || (R[26] = (ye) => G("nodes", "this-env")),
                onRepairMissingModels: Ht,
                onRepairEnvironment: hs,
                onStartSetup: R[27] || (R[27] = (ye) => U.value = !0),
                onViewEnvironments: R[28] || (R[28] = (ye) => G("environments", "all-envs")),
                onCreateEnvironment: to
              }, null, 8, ["status", "setup-state"])) : he.value === "workflows" ? (s(), E(lm, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: L,
                onRefresh: Pe
              }, null, 512)) : he.value === "models-env" ? (s(), E(Vm, {
                key: 2,
                onNavigate: Ee
              })) : he.value === "branches" ? (s(), E(Za, {
                key: 3,
                branches: V.value,
                current: ((De = x.value) == null ? void 0 : De.branch) || null,
                onSwitch: Y,
                onCreate: B,
                onDelete: F
              }, null, 8, ["branches", "current"])) : he.value === "history" ? (s(), E(cl, {
                key: 4,
                commits: K.value,
                onSelect: $t,
                onCheckout: lt
              }, null, 8, ["commits"])) : he.value === "nodes" ? (s(), E(Ov, {
                key: 5,
                "version-mismatches": ((ft = (We = x.value) == null ? void 0 : We.comparison) == null ? void 0 : ft.version_mismatches) || [],
                onOpenNodeManager: Te,
                onRepairEnvironment: hs,
                onToast: wt
              }, null, 8, ["version-mismatches"])) : he.value === "debug-env" ? (s(), E(jp, { key: 6 })) : he.value === "environments" ? (s(), E(Hh, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: I,
                onSwitch: tt,
                onCreated: Ks,
                onDelete: Js
              }, null, 512)) : he.value === "model-index" ? (s(), E(rv, {
                key: 8,
                onRefresh: Pe
              })) : he.value === "settings" ? (s(), E(Fp, { key: 9 })) : he.value === "debug-workspace" ? (s(), E(Vp, { key: 10 })) : he.value === "export" ? (s(), E(x1, { key: 11 })) : he.value === "import" ? (s(), E(pw, {
                key: 12,
                onImportCompleteSwitch: Zs
              })) : he.value === "remotes" ? (s(), E(bp, {
                key: 13,
                onToast: wt
              })) : d("", !0)
            ], 64))
          ])
        ]),
        J.value ? (s(), E(Pw, {
          key: 0,
          commit: J.value,
          onClose: R[29] || (R[29] = (ye) => J.value = null),
          onCheckout: lt,
          onCreateBranch: Q
        }, null, 8, ["commit"])) : d("", !0),
        me.value ? (s(), E(Ns, {
          key: 1,
          title: me.value.title,
          message: me.value.message,
          details: me.value.details,
          warning: me.value.warning,
          confirmLabel: me.value.confirmLabel,
          cancelLabel: me.value.cancelLabel,
          secondaryLabel: me.value.secondaryLabel,
          secondaryAction: me.value.secondaryAction,
          destructive: me.value.destructive,
          onConfirm: me.value.onConfirm,
          onCancel: R[30] || (R[30] = (ye) => me.value = null),
          onSecondary: me.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        k(z0, {
          show: oe.value,
          "from-environment": ((Lt = D.value) == null ? void 0 : Lt.name) || "unknown",
          "to-environment": be.value,
          onConfirm: xt,
          onClose: Xe
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Je.value && x.value ? (s(), E(Vs, {
          key: 2,
          status: x.value,
          "as-modal": !0,
          onClose: R[31] || (R[31] = (ye) => Je.value = !1),
          onCommitted: It
        }, null, 8, ["status"])) : d("", !0),
        et.value && x.value ? (s(), E(Q0, {
          key: 3,
          show: et.value,
          "mismatch-details": {
            missing_nodes: x.value.comparison.missing_nodes,
            extra_nodes: x.value.comparison.extra_nodes
          },
          onConfirm: qt,
          onClose: R[32] || (R[32] = (ye) => et.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : d("", !0),
        k(W0, {
          show: Me.value,
          state: re.value.state,
          progress: re.value.progress,
          message: re.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        N.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: R[34] || (R[34] = Le((ye) => N.value = !1, ["self"]))
        }, [
          e("div", tb, [
            e("div", sb, [
              R[53] || (R[53] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: R[33] || (R[33] = (ye) => N.value = !1)
              }, [...R[52] || (R[52] = [
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
            e("div", ob, [
              R[54] || (R[54] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", nb, [
                (s(!0), o(A, null, Z(H.value, (ye) => (s(), o("div", {
                  key: ye.name,
                  class: de(["env-item", { current: ye.is_current }])
                }, [
                  e("div", ab, [
                    e("div", lb, [
                      e("span", ib, a(ye.is_current ? "●" : "○"), 1),
                      e("span", rb, a(ye.name), 1),
                      ye.current_branch ? (s(), o("span", db, "(" + a(ye.current_branch) + ")", 1)) : d("", !0),
                      ye.is_current ? (s(), o("span", cb, "CURRENT")) : d("", !0)
                    ]),
                    e("div", ub, a(ye.workflow_count) + " workflows • " + a(ye.node_count) + " nodes ", 1)
                  ]),
                  ye.is_current ? d("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (__) => tt(ye.name)
                  }, " SWITCH ", 8, mb))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        U.value ? (s(), E(Uk, {
          key: 5,
          "default-path": ((ws = M.value) == null ? void 0 : ws.default_path) || "~/comfygit",
          "detected-models-dir": ((ks = M.value) == null ? void 0 : ks.detected_models_dir) || null,
          "initial-step": ne.value,
          "existing-environments": ((bs = M.value) == null ? void 0 : bs.environments) || [],
          "cli-installed": ((_s = M.value) == null ? void 0 : _s.cli_installed) ?? !0,
          "setup-state": (($s = M.value) == null ? void 0 : $s.state) || "no_workspace",
          onComplete: Ys,
          onClose: Xs,
          onSwitchEnvironment: Qs,
          onEnvironmentCreatedNoSwitch: eo
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state"])) : d("", !0),
        e("div", vb, [
          k(lo, { name: "toast" }, {
            default: l(() => [
              (s(!0), o(A, null, Z(Ye.value, (ye) => (s(), o("div", {
                key: ye.id,
                class: de(["toast", ye.type])
              }, [
                e("span", fb, a(ye.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), pb = /* @__PURE__ */ te(gb, [["__scopeId", "data-v-abb80b7d"]]), hb = { class: "item-header" }, yb = { class: "item-info" }, wb = { class: "filename" }, kb = { class: "metadata" }, bb = { class: "size" }, _b = {
  key: 0,
  class: "type"
}, $b = { class: "item-actions" }, Cb = {
  key: 0,
  class: "progress-section"
}, xb = { class: "progress-bar" }, Sb = { class: "progress-stats" }, Ib = { class: "downloaded" }, Eb = { class: "speed" }, Mb = {
  key: 0,
  class: "eta"
}, Tb = {
  key: 1,
  class: "status-msg paused"
}, Rb = {
  key: 2,
  class: "status-msg queued"
}, zb = {
  key: 3,
  class: "status-msg completed"
}, Lb = {
  key: 4,
  class: "status-msg failed"
}, Pb = {
  key: 0,
  class: "retries"
}, Db = /* @__PURE__ */ ee({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: c }) {
    const n = c;
    function i(f) {
      if (f === 0) return "?";
      const v = f / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(f / (1024 * 1024)).toFixed(1)} MB`;
    }
    function y(f) {
      return f === 0 ? "-" : `${(f / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function g(f) {
      if (f < 60) return `${Math.round(f)}s`;
      const v = Math.floor(f / 60);
      return v < 60 ? `${v}m` : `${Math.floor(v / 60)}h ${v % 60}m`;
    }
    return (f, v) => (s(), o("div", {
      class: de(["download-item", `status-${t.item.status}`])
    }, [
      e("div", hb, [
        e("div", yb, [
          e("div", wb, a(t.item.filename), 1),
          e("div", kb, [
            e("span", bb, a(i(t.item.size)), 1),
            t.item.type ? (s(), o("span", _b, a(t.item.type), 1)) : d("", !0)
          ])
        ]),
        e("div", $b, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: v[0] || (v[0] = (r) => n("cancel")),
            title: "Cancel"
          }, " × ")) : d("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: v[1] || (v[1] = (r) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : d("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: v[2] || (v[2] = (r) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : d("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: v[3] || (v[3] = (r) => n("remove")),
            title: "Remove"
          }, " × ")) : d("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", Cb, [
        e("div", xb, [
          e("div", {
            class: "progress-fill",
            style: pt({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Sb, [
          e("span", Ib, a(i(t.item.downloaded)) + " / " + a(i(t.item.size)), 1),
          e("span", Eb, a(y(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", Mb, a(g(t.item.eta)), 1)) : d("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", Tb, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", Rb, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", zb, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", Lb, [
        h(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", Pb, "(" + a(t.item.retries) + " retries)", 1)) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ut = /* @__PURE__ */ te(Db, [["__scopeId", "data-v-2110df65"]]), Nb = { class: "queue-title" }, Ub = { class: "count" }, Ob = { class: "queue-actions" }, Bb = { class: "action-label" }, Fb = {
  key: 0,
  class: "overall-progress"
}, Ab = { class: "progress-bar" }, Vb = {
  key: 0,
  class: "current-mini"
}, Wb = { class: "filename" }, jb = { class: "speed" }, Gb = {
  key: 1,
  class: "queue-content"
}, qb = {
  key: 0,
  class: "section"
}, Hb = {
  key: 1,
  class: "section"
}, Kb = { class: "section-header" }, Jb = { class: "section-label paused" }, Yb = { class: "items-list" }, Xb = {
  key: 2,
  class: "section"
}, Qb = { class: "section-header" }, Zb = { class: "section-label" }, e_ = { class: "items-list" }, t_ = {
  key: 3,
  class: "section"
}, s_ = { class: "section-header" }, o_ = { class: "section-label" }, n_ = { class: "items-list" }, a_ = {
  key: 4,
  class: "section"
}, l_ = { class: "section-header" }, i_ = { class: "section-label failed" }, r_ = { class: "items-list" }, d_ = /* @__PURE__ */ ee({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: n,
      queuedItems: i,
      completedItems: y,
      failedItems: g,
      pausedItems: f,
      hasItems: v,
      activeCount: r,
      cancelDownload: u,
      retryDownload: p,
      resumeDownload: w,
      resumeAllPaused: b,
      removeItem: $,
      clearCompleted: T
    } = jt(), O = C(!1);
    let m = null;
    bt(
      () => ({
        active: r.value,
        failed: g.value.length,
        paused: f.value.length,
        completed: y.value.length
      }),
      (x, K) => {
        m && (clearTimeout(m), m = null);
        const V = x.active === 0 && x.failed === 0 && x.paused === 0 && x.completed > 0, H = K && (K.active > 0 || K.paused > 0);
        V && H && (m = setTimeout(() => {
          T(), m = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const _ = P(() => {
      var V;
      if (c.items.length === 0) return 0;
      const x = y.value.length, K = ((V = n.value) == null ? void 0 : V.progress) || 0;
      return Math.round((x + K / 100) / c.items.length * 100);
    });
    function z(x) {
      u(x);
    }
    function S(x) {
      return x === 0 ? "" : `${(x / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (x, K) => (s(), E(Ae, { to: "body" }, [
      $e(v) ? (s(), o("div", {
        key: 0,
        class: de(["model-download-queue", { minimized: !O.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: K[0] || (K[0] = (V) => O.value = !O.value)
        }, [
          e("div", Nb, [
            K[4] || (K[4] = e("span", { class: "icon" }, "↓", -1)),
            K[5] || (K[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", Ub, "(" + a($e(r)) + "/" + a($e(c).items.length) + ")", 1)
          ]),
          e("div", Ob, [
            e("span", Bb, a(O.value ? "minimize" : "expand"), 1)
          ])
        ]),
        O.value ? (s(), o("div", Gb, [
          $e(n) ? (s(), o("div", qb, [
            K[6] || (K[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            k(Ut, {
              item: $e(n),
              onCancel: K[1] || (K[1] = (V) => z($e(n).id))
            }, null, 8, ["item"])
          ])) : d("", !0),
          $e(f).length > 0 ? (s(), o("div", Hb, [
            e("div", Kb, [
              e("span", Jb, "Paused (" + a($e(f).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: K[2] || (K[2] = //@ts-ignore
                (...V) => $e(b) && $e(b)(...V))
              }, "Resume All")
            ]),
            e("div", Yb, [
              (s(!0), o(A, null, Z($e(f), (V) => (s(), E(Ut, {
                key: V.id,
                item: V,
                onResume: (H) => $e(w)(V.id),
                onRemove: (H) => $e($)(V.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          $e(i).length > 0 ? (s(), o("div", Xb, [
            e("div", Qb, [
              e("span", Zb, "Queued (" + a($e(i).length) + ")", 1)
            ]),
            e("div", e_, [
              (s(!0), o(A, null, Z($e(i), (V) => (s(), E(Ut, {
                key: V.id,
                item: V,
                onCancel: (H) => z(V.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : d("", !0),
          $e(y).length > 0 ? (s(), o("div", t_, [
            e("div", s_, [
              e("span", o_, "Completed (" + a($e(y).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: K[3] || (K[3] = //@ts-ignore
                (...V) => $e(T) && $e(T)(...V))
              }, "Clear")
            ]),
            e("div", n_, [
              (s(!0), o(A, null, Z($e(y).slice(0, 3), (V) => (s(), E(Ut, {
                key: V.id,
                item: V,
                onRemove: (H) => $e($)(V.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          $e(g).length > 0 ? (s(), o("div", a_, [
            e("div", l_, [
              e("span", i_, "Failed (" + a($e(g).length) + ")", 1)
            ]),
            e("div", r_, [
              (s(!0), o(A, null, Z($e(g), (V) => (s(), E(Ut, {
                key: V.id,
                item: V,
                onRetry: (H) => $e(p)(V.id),
                onRemove: (H) => $e($)(V.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : d("", !0)
        ])) : (s(), o("div", Fb, [
          e("div", Ab, [
            e("div", {
              class: "progress-fill",
              style: pt({ width: `${_.value}%` })
            }, null, 4)
          ]),
          $e(n) ? (s(), o("div", Vb, [
            e("span", Wb, a($e(n).filename), 1),
            e("span", jb, a(S($e(n).speed)), 1)
          ])) : d("", !0)
        ]))
      ], 2)) : d("", !0)
    ]));
  }
}), c_ = /* @__PURE__ */ te(d_, [["__scopeId", "data-v-60751cfa"]]), u_ = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', m_ = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', v_ = {
  comfy: u_,
  phosphor: m_
}, gs = "comfy", Ws = "comfygit-theme";
let Ct = null, js = gs;
function f_() {
  try {
    const t = localStorage.getItem(Ws);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return gs;
}
function Gs(t = gs) {
  Ct && Ct.remove(), Ct = document.createElement("style"), Ct.id = "comfygit-theme-styles", Ct.setAttribute("data-theme", t), Ct.textContent = v_[t], document.head.appendChild(Ct), document.body.setAttribute("data-comfygit-theme", t), js = t;
  try {
    localStorage.setItem(Ws, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function g_() {
  return js;
}
function p_(t) {
  Gs(t);
}
function h_(t) {
  var g;
  const { ui_id: c, state: n } = t || {}, i = (n == null ? void 0 : n.history) || {};
  if (!c)
    return null;
  const y = i[c];
  return y && y.result === "error" && ((g = y.status) == null ? void 0 : g.status_str) === "error" ? (y.status.messages || [])[0] || "Unknown error" : null;
}
const ps = document.createElement("link");
ps.rel = "stylesheet";
ps.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(ps);
const y_ = f_();
Gs(y_);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), p_(t);
  },
  getTheme: () => {
    const t = g_();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let ot = null, He = null, At = null, Ot = null, Is = null;
const Rt = C(null);
let qs = "managed";
async function Xt() {
  var t;
  if (!((t = kt) != null && t.api)) return null;
  try {
    const c = await kt.api.fetchApi("/v2/comfygit/status");
    c.ok && (Rt.value = await c.json());
  } catch {
  }
}
async function rs() {
  var t;
  if ((t = kt) != null && t.api)
    try {
      const c = await kt.api.fetchApi("/v2/setup/status");
      c.ok && (qs = (await c.json()).state);
    } catch {
    }
}
function w_() {
  if (!Rt.value) return !1;
  const t = Rt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Rt.value.has_changes;
}
function Es(t) {
  ot && ot.remove(), ot = document.createElement("div"), ot.className = "comfygit-panel-overlay";
  const c = document.createElement("div");
  c.className = "comfygit-panel-container", ot.appendChild(c), ot.addEventListener("click", (y) => {
    y.target === ot && ls();
  });
  const n = (y) => {
    y.key === "Escape" && (ls(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), us({
    render: () => ms(pb, {
      initialView: t,
      onClose: ls,
      onStatusUpdate: async (y) => {
        Rt.value = y, Vt(), await rs(), ds();
      }
    })
  }).mount(c), document.body.appendChild(ot);
}
function ls() {
  ot && (ot.remove(), ot = null);
}
function k_(t) {
  Bt(), He = document.createElement("div"), He.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  He.style.position = "fixed", He.style.top = `${c.bottom + 8}px`, He.style.right = `${window.innerWidth - c.right}px`, He.style.zIndex = "10001";
  const n = (y) => {
    He && !He.contains(y.target) && y.target !== t && (Bt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const i = (y) => {
    y.key === "Escape" && (Bt(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), At = us({
    render: () => ms(Vs, {
      status: Rt.value,
      onClose: Bt,
      onCommitted: () => {
        Bt(), Xt().then(Vt);
      }
    })
  }), At.mount(He), document.body.appendChild(He);
}
function Bt() {
  At && (At.unmount(), At = null), He && (He.remove(), He = null);
}
function b_() {
  Ot || (Ot = document.createElement("div"), Ot.className = "comfygit-download-queue-root", Is = us({
    render: () => ms(c_)
  }), Is.mount(Ot), document.body.appendChild(Ot), console.log("[ComfyGit] Model download queue mounted"));
}
let Qe = null;
function Vt() {
  if (!Qe) return;
  const t = Qe.querySelector(".commit-indicator");
  t && (t.style.display = w_() ? "block" : "none");
}
function ds() {
  if (!Qe) return;
  const t = qs !== "managed";
  Qe.disabled = t, Qe.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Hs = document.createElement("style");
Hs.textContent = `
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
document.head.appendChild(Hs);
kt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var y, g;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = Es, Qe = document.createElement("button"), Qe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Qe.innerHTML = 'Commit <span class="commit-indicator"></span>', Qe.title = "Quick Commit", Qe.onclick = () => k_(Qe), t.appendChild(c), t.appendChild(Qe), (g = (y = kt.menu) == null ? void 0 : y.settingsGroup) != null && g.element && (kt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), b_();
    const { loadPendingDownloads: n } = jt();
    n(), await Promise.all([Xt(), rs()]), Vt(), ds(), setInterval(async () => {
      await Promise.all([Xt(), rs()]), Vt(), ds();
    }, 3e4);
    const i = kt.api;
    if (i) {
      let f = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((p) => {
          (p.startsWith("workflow:") || p.startsWith("Comfy.OpenWorkflowsPaths:") || p.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(p);
        }), window.location.reload();
      }, v = function() {
        const p = document.createElement("div");
        p.style.cssText = `
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
        w.textContent = "Workflows updated - refresh required", p.appendChild(w);
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
        `, b.onmouseover = () => b.style.background = "var(--comfy-input-bg)", b.onmouseout = () => b.style.background = "var(--comfy-menu-bg)", b.onclick = () => f(), p.appendChild(b);
        const $ = document.createElement("button");
        $.textContent = "×", $.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, $.onmouseover = () => $.style.opacity = "1", $.onmouseout = () => $.style.opacity = "0.6", $.onclick = () => p.remove(), p.appendChild($), document.body.appendChild(p), console.log("[ComfyGit] Refresh notification displayed");
      }, r = function(p) {
        const w = document.getElementById("comfygit-error-toast");
        w && w.remove();
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
        const $ = document.createElement("span");
        $.textContent = "⚠️", $.style.fontSize = "20px", b.appendChild($);
        const T = document.createElement("div");
        T.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const O = document.createElement("div");
        O.textContent = "Node installation failed", O.style.cssText = "font-weight: 600; color: #e53935;", T.appendChild(O);
        const m = document.createElement("div");
        m.textContent = "Dependency conflict detected", m.style.cssText = "font-size: 12px; opacity: 0.8;", T.appendChild(m), b.appendChild(T);
        const _ = document.createElement("button");
        _.textContent = "View Logs", _.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, _.onmouseover = () => _.style.background = "#c62828", _.onmouseout = () => _.style.background = "#e53935", _.onclick = () => {
          b.remove(), Es("debug-env");
        }, b.appendChild(_);
        const z = document.createElement("button");
        z.textContent = "×", z.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, z.onmouseover = () => z.style.opacity = "1", z.onmouseout = () => z.style.opacity = "0.6", z.onclick = () => b.remove(), b.appendChild(z), document.body.appendChild(b), console.log("[ComfyGit] Manager error toast displayed:", p), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && b.remove();
        }, 1e4);
      };
      i.addEventListener("comfygit:workflow-changed", async (p) => {
        const { change_type: w, workflow_name: b } = p.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${b}`), await Xt(), Vt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let u = !1;
      i.addEventListener("status", async (p) => {
        const w = p.detail != null;
        w && !u && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), f()) : v()), u = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), i.addEventListener("cm-task-completed", (p) => {
        const w = h_(p.detail);
        w && r(w);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
