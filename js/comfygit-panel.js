import { app as _t } from "../../scripts/app.js";
import { defineComponent as ee, createElementBlock as o, openBlock as s, createCommentVNode as d, createElementVNode as e, renderSlot as Ce, createBlock as R, resolveDynamicComponent as cs, normalizeClass as me, withCtx as i, toDisplayString as a, createVNode as k, createTextVNode as p, computed as N, Fragment as V, renderList as oe, normalizeStyle as wt, ref as _, onMounted as Ne, watch as $t, Teleport as We, withModifiers as Le, Transition as co, createSlots as Wt, withKeys as vt, reactive as ts, onUnmounted as Ls, readonly as uo, unref as _e, withDirectives as Oe, vModelText as Tt, vModelRadio as Kt, vModelCheckbox as Xt, nextTick as mo, vModelSelect as Rt, TransitionGroup as vo, createApp as us, h as ms } from "vue";
const fo = { class: "panel-layout" }, go = {
  key: 0,
  class: "panel-layout-header"
}, po = {
  key: 1,
  class: "panel-layout-search"
}, ho = { class: "panel-layout-content" }, yo = {
  key: 2,
  class: "panel-layout-footer"
}, wo = /* @__PURE__ */ ee({
  __name: "PanelLayout",
  setup(t) {
    return (c, n) => (s(), o("div", fo, [
      c.$slots.header ? (s(), o("div", go, [
        Ce(c.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      c.$slots.search ? (s(), o("div", po, [
        Ce(c.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      e("div", ho, [
        Ce(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (s(), o("div", yo, [
        Ce(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), te = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [l, f] of c)
    n[l] = f;
  return n;
}, qe = /* @__PURE__ */ te(wo, [["__scopeId", "data-v-21565df9"]]), ko = {
  key: 0,
  class: "panel-title-prefix"
}, bo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, _o = /* @__PURE__ */ ee({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, n) => (s(), R(cs(`h${t.level}`), {
      class: me(["panel-title", t.variant])
    }, {
      default: i(() => [
        t.showPrefix ? (s(), o("span", ko, a(t.prefix), 1)) : (s(), o("span", bo)),
        Ce(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), $o = /* @__PURE__ */ te(_o, [["__scopeId", "data-v-c3875efc"]]), Co = ["title"], xo = ["width", "height"], So = /* @__PURE__ */ ee({
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
      ])], 8, xo))
    ], 8, Co));
  }
}), zs = /* @__PURE__ */ te(So, [["__scopeId", "data-v-6fc7f16d"]]), Io = { class: "header-left" }, Eo = {
  key: 0,
  class: "header-actions"
}, Mo = /* @__PURE__ */ ee({
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
      class: me(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Io, [
        k($o, { "show-prefix": t.showPrefix }, {
          default: i(() => [
            p(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), R(zs, {
          key: 0,
          onClick: n[0] || (n[0] = (l) => c.$emit("info-click"))
        })) : d("", !0)
      ]),
      c.$slots.actions ? (s(), o("div", Eo, [
        Ce(c.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ke = /* @__PURE__ */ te(Mo, [["__scopeId", "data-v-55a62cd6"]]), To = {
  key: 0,
  class: "section-title-count"
}, Ro = {
  key: 1,
  class: "section-title-icon"
}, Lo = /* @__PURE__ */ ee({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (s(), R(cs(`h${t.level}`), {
      class: me(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (l) => t.clickable && c.$emit("click"))
    }, {
      default: i(() => [
        Ce(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", To, "(" + a(t.count) + ")", 1)) : d("", !0),
        t.clickable ? (s(), o("span", Ro, a(t.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), tt = /* @__PURE__ */ te(Lo, [["__scopeId", "data-v-559361eb"]]), zo = { class: "status-grid" }, Po = { class: "status-grid__columns" }, Do = { class: "status-grid__column" }, No = { class: "status-grid__title" }, Uo = { class: "status-grid__column status-grid__column--right" }, Oo = { class: "status-grid__title" }, Bo = {
  key: 0,
  class: "status-grid__footer"
}, Fo = /* @__PURE__ */ ee({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", zo, [
      e("div", Po, [
        e("div", Do, [
          e("h4", No, a(t.leftTitle), 1),
          Ce(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Uo, [
          e("h4", Oo, a(t.rightTitle), 1),
          Ce(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (s(), o("div", Bo, [
        Ce(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Ao = /* @__PURE__ */ te(Fo, [["__scopeId", "data-v-73b7ba3f"]]), Vo = {
  key: 0,
  class: "status-item__icon"
}, Wo = {
  key: 1,
  class: "status-item__count"
}, Go = { class: "status-item__label" }, jo = /* @__PURE__ */ ee({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const c = t, n = N(() => `status-item--${c.variant}`);
    return (l, f) => (s(), o("div", {
      class: me(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", Vo, a(t.icon), 1)) : d("", !0),
      t.count !== void 0 ? (s(), o("span", Wo, a(t.count), 1)) : d("", !0),
      e("span", Go, a(t.label), 1)
    ], 2));
  }
}), ut = /* @__PURE__ */ te(jo, [["__scopeId", "data-v-6f929183"]]), Ho = { class: "issue-card__header" }, qo = { class: "issue-card__icon" }, Ko = { class: "issue-card__title" }, Jo = {
  key: 0,
  class: "issue-card__content"
}, Yo = {
  key: 0,
  class: "issue-card__description"
}, Xo = {
  key: 1,
  class: "issue-card__items"
}, Qo = {
  key: 2,
  class: "issue-card__actions"
}, Zo = /* @__PURE__ */ ee({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const c = t, n = N(() => `issue-card--${c.severity}`);
    return (l, f) => (s(), o("div", {
      class: me(["issue-card", n.value])
    }, [
      e("div", Ho, [
        e("span", qo, a(t.icon), 1),
        e("h4", Ko, a(t.title), 1)
      ]),
      l.$slots.default || t.description ? (s(), o("div", Jo, [
        t.description ? (s(), o("p", Yo, a(t.description), 1)) : d("", !0),
        Ce(l.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      t.items && t.items.length ? (s(), o("div", Xo, [
        (s(!0), o(V, null, oe(t.items, (g, u) => (s(), o("div", {
          key: u,
          class: "issue-card__item"
        }, [
          f[0] || (f[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(g), 1)
        ]))), 128))
      ])) : d("", !0),
      l.$slots.actions ? (s(), o("div", Qo, [
        Ce(l.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), at = /* @__PURE__ */ te(Zo, [["__scopeId", "data-v-df6aa348"]]), en = ["type", "disabled"], tn = {
  key: 0,
  class: "spinner"
}, sn = /* @__PURE__ */ ee({
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
      class: me(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (l) => c.$emit("click", l))
    }, [
      t.loading ? (s(), o("span", tn)) : d("", !0),
      t.loading ? d("", !0) : Ce(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, en));
  }
}), ae = /* @__PURE__ */ te(sn, [["__scopeId", "data-v-772abe47"]]), on = { class: "empty-state" }, nn = {
  key: 0,
  class: "empty-icon"
}, an = { class: "empty-message" }, ln = /* @__PURE__ */ ee({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, n) => (s(), o("div", on, [
      t.icon ? (s(), o("div", nn, a(t.icon), 1)) : d("", !0),
      e("p", an, a(t.message), 1),
      t.actionLabel ? (s(), R(ae, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (l) => c.$emit("action"))
      }, {
        default: i(() => [
          p(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : d("", !0)
    ]));
  }
}), rt = /* @__PURE__ */ te(ln, [["__scopeId", "data-v-4466284f"]]), rn = /* @__PURE__ */ ee({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: me(["detail-label"]),
      style: wt({ minWidth: t.minWidth })
    }, [
      Ce(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Jt = /* @__PURE__ */ te(rn, [["__scopeId", "data-v-75e9eeb8"]]), dn = /* @__PURE__ */ ee({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: me(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      Ce(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ls = /* @__PURE__ */ te(dn, [["__scopeId", "data-v-2f186e4c"]]), cn = { class: "detail-row" }, un = /* @__PURE__ */ ee({
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
    return (c, n) => (s(), o("div", cn, [
      k(Jt, { "min-width": t.labelMinWidth }, {
        default: i(() => [
          p(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), R(ls, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: i(() => [
          p(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Ce(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), De = /* @__PURE__ */ te(un, [["__scopeId", "data-v-ef15664a"]]), mn = { class: "modal-header" }, vn = { class: "modal-body" }, fn = { class: "status-section" }, gn = {
  key: 0,
  class: "status-section"
}, pn = { class: "section-header-row" }, hn = {
  key: 0,
  class: "workflow-group"
}, yn = { class: "workflow-group-header" }, wn = { class: "workflow-group-title" }, kn = { class: "workflow-list" }, bn = { class: "workflow-name" }, _n = { class: "workflow-issue" }, $n = {
  key: 1,
  class: "workflow-group"
}, Cn = { class: "workflow-group-header" }, xn = { class: "workflow-group-title" }, Sn = { class: "workflow-list" }, In = { class: "workflow-name" }, En = { class: "workflow-issue" }, Mn = {
  key: 2,
  class: "workflow-group"
}, Tn = { class: "workflow-group-header" }, Rn = { class: "workflow-group-title" }, Ln = { class: "workflow-list" }, zn = { class: "workflow-name" }, Pn = {
  key: 3,
  class: "workflow-group"
}, Dn = { class: "workflow-group-header" }, Nn = { class: "workflow-group-title" }, Un = { class: "workflow-list" }, On = { class: "workflow-name" }, Bn = {
  key: 4,
  class: "workflow-group"
}, Fn = { class: "workflow-group-header" }, An = { class: "workflow-group-title" }, Vn = { class: "workflow-list" }, Wn = { class: "workflow-name" }, Gn = {
  key: 5,
  class: "workflow-group"
}, jn = { class: "workflow-group-title" }, Hn = { class: "expand-icon" }, qn = {
  key: 0,
  class: "workflow-list"
}, Kn = { class: "workflow-name" }, Jn = {
  key: 1,
  class: "status-section"
}, Yn = {
  key: 0,
  class: "change-group"
}, Xn = { class: "change-group-header" }, Qn = { class: "change-group-title" }, Zn = { class: "change-list" }, ea = { class: "node-name" }, ta = {
  key: 0,
  class: "dev-badge"
}, sa = {
  key: 1,
  class: "change-group"
}, oa = { class: "change-group-header" }, na = { class: "change-group-title" }, aa = { class: "change-list" }, la = { class: "node-name" }, ia = {
  key: 0,
  class: "dev-badge"
}, ra = {
  key: 2,
  class: "change-group"
}, da = { class: "change-list" }, ca = { class: "change-item" }, ua = { class: "node-name" }, ma = {
  key: 3,
  class: "change-group"
}, va = {
  key: 2,
  class: "status-section"
}, fa = { class: "section-header-row" }, ga = {
  key: 0,
  class: "drift-item"
}, pa = { class: "drift-list" }, ha = {
  key: 0,
  class: "drift-list-more"
}, ya = {
  key: 1,
  class: "drift-item"
}, wa = { class: "drift-list" }, ka = {
  key: 0,
  class: "drift-list-more"
}, ba = {
  key: 2,
  class: "drift-item"
}, _a = { class: "drift-list" }, $a = { class: "version-actual" }, Ca = { class: "version-expected" }, xa = {
  key: 0,
  class: "drift-list-more"
}, Sa = {
  key: 3,
  class: "drift-item"
}, Ia = { class: "repair-action" }, Ea = {
  key: 3,
  class: "status-section"
}, Ma = { class: "info-box" }, Ta = { class: "drift-list" }, Ra = {
  key: 0,
  class: "drift-list-more"
}, La = {
  key: 4,
  class: "status-section"
}, za = { class: "warning-box" }, Pa = {
  key: 5,
  class: "empty-state-inline"
}, Da = { class: "modal-actions" }, Na = /* @__PURE__ */ ee({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(t) {
    const c = t, n = _(!1);
    Ne(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), $t(() => c.show, (b, w) => {
      console.log("StatusDetailModal show prop changed from", w, "to", b);
    }, { immediate: !0 });
    const l = N(() => {
      var b, w, L;
      return ((L = (w = (b = c.status) == null ? void 0 : b.workflows) == null ? void 0 : w.analyzed) == null ? void 0 : L.filter(
        (M) => M.status === "broken" && M.sync_state === "synced"
      )) || [];
    }), f = N(() => {
      var b, w, L;
      return ((L = (w = (b = c.status) == null ? void 0 : b.workflows) == null ? void 0 : w.analyzed) == null ? void 0 : L.filter(
        (M) => M.status === "broken" && M.sync_state !== "synced"
      )) || [];
    }), g = N(() => {
      var b, w, L;
      return ((L = (w = (b = c.status) == null ? void 0 : b.workflows) == null ? void 0 : w.synced) == null ? void 0 : L.filter((M) => {
        var C, B, x;
        const $ = (x = (B = (C = c.status) == null ? void 0 : C.workflows) == null ? void 0 : B.analyzed) == null ? void 0 : x.find((T) => T.name === M);
        return !$ || $.status !== "broken";
      })) || [];
    }), u = N(() => {
      var b, w, L, M, $;
      return (b = c.status) != null && b.workflows ? (((w = c.status.workflows.new) == null ? void 0 : w.length) ?? 0) > 0 || (((L = c.status.workflows.modified) == null ? void 0 : L.length) ?? 0) > 0 || (((M = c.status.workflows.deleted) == null ? void 0 : M.length) ?? 0) > 0 || ((($ = c.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), m = N(() => {
      var w, L, M;
      const b = (w = c.status) == null ? void 0 : w.git_changes;
      return b ? (((L = b.nodes_added) == null ? void 0 : L.length) ?? 0) > 0 || (((M = b.nodes_removed) == null ? void 0 : M.length) ?? 0) > 0 || b.workflow_changes || b.has_other_changes : !1;
    }), r = N(() => {
      var b, w, L, M, $, C;
      return !u.value && !m.value && ((w = (b = c.status) == null ? void 0 : b.comparison) == null ? void 0 : w.is_synced) && (((L = c.status) == null ? void 0 : L.missing_models_count) ?? 0) === 0 && (((C = ($ = (M = c.status) == null ? void 0 : M.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
    }), v = N(() => {
      var w, L;
      const b = (L = (w = c.status) == null ? void 0 : w.git_changes) == null ? void 0 : L.workflow_changes;
      return b ? typeof b == "number" ? b : Object.keys(b).length : 0;
    });
    function h(b) {
      return typeof b == "string" ? b : b.name;
    }
    function y(b) {
      return typeof b == "object" && b.is_development === !0;
    }
    return (b, w) => {
      var L, M, $, C, B, x, T, K, A, W, E, z, O, le, se, Y, de, J, D, P, I, re;
      return s(), R(We, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: w[7] || (w[7] = (Z) => b.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: w[6] || (w[6] = Le(() => {
            }, ["stop"]))
          }, [
            e("div", mn, [
              w[8] || (w[8] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: w[0] || (w[0] = (Z) => b.$emit("close"))
              }, "✕")
            ]),
            e("div", vn, [
              e("div", fn, [
                k(tt, { level: "4" }, {
                  default: i(() => [...w[9] || (w[9] = [
                    p("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                k(De, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (s(), o("div", gn, [
                e("div", pn, [
                  k(tt, { level: "4" }, {
                    default: i(() => [...w[10] || (w[10] = [
                      p("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: w[1] || (w[1] = (Z) => b.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                l.value.length ? (s(), o("div", hn, [
                  e("div", yn, [
                    w[11] || (w[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", wn, "BROKEN (COMMITTED) (" + a(l.value.length) + ")", 1)
                  ]),
                  e("div", kn, [
                    (s(!0), o(V, null, oe(l.value, (Z) => (s(), o("div", {
                      key: Z.name,
                      class: "workflow-item"
                    }, [
                      e("span", bn, a(Z.name), 1),
                      e("span", _n, a(Z.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                f.value.length ? (s(), o("div", $n, [
                  e("div", Cn, [
                    w[12] || (w[12] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", xn, "BROKEN (UNCOMMITTED) (" + a(f.value.length) + ")", 1)
                  ]),
                  e("div", Sn, [
                    (s(!0), o(V, null, oe(f.value, (Z) => (s(), o("div", {
                      key: Z.name,
                      class: "workflow-item"
                    }, [
                      e("span", In, a(Z.name), 1),
                      e("span", En, a(Z.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (M = (L = t.status.workflows) == null ? void 0 : L.new) != null && M.length ? (s(), o("div", Mn, [
                  e("div", Tn, [
                    w[13] || (w[13] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Rn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Ln, [
                    (s(!0), o(V, null, oe(t.status.workflows.new, (Z) => (s(), o("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      e("span", zn, a(Z), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (C = ($ = t.status.workflows) == null ? void 0 : $.modified) != null && C.length ? (s(), o("div", Pn, [
                  e("div", Dn, [
                    w[14] || (w[14] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Nn, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Un, [
                    (s(!0), o(V, null, oe(t.status.workflows.modified, (Z) => (s(), o("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      e("span", On, a(Z), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (x = (B = t.status.workflows) == null ? void 0 : B.deleted) != null && x.length ? (s(), o("div", Bn, [
                  e("div", Fn, [
                    w[15] || (w[15] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", An, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Vn, [
                    (s(!0), o(V, null, oe(t.status.workflows.deleted, (Z) => (s(), o("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      e("span", Wn, a(Z), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                g.value.length ? (s(), o("div", Gn, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: w[2] || (w[2] = (Z) => n.value = !n.value)
                  }, [
                    w[16] || (w[16] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", jn, "SYNCED (" + a(g.value.length) + ")", 1),
                    e("span", Hn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", qn, [
                    (s(!0), o(V, null, oe(g.value, (Z) => (s(), o("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      e("span", Kn, a(Z), 1)
                    ]))), 128))
                  ])) : d("", !0)
                ])) : d("", !0)
              ])) : d("", !0),
              m.value ? (s(), o("div", Jn, [
                k(tt, { level: "4" }, {
                  default: i(() => [...w[17] || (w[17] = [
                    p("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (K = (T = t.status.git_changes) == null ? void 0 : T.nodes_added) != null && K.length ? (s(), o("div", Yn, [
                  e("div", Xn, [
                    w[18] || (w[18] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Qn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Zn, [
                    (s(!0), o(V, null, oe(t.status.git_changes.nodes_added, (Z) => (s(), o("div", {
                      key: h(Z),
                      class: "change-item"
                    }, [
                      e("span", ea, a(h(Z)), 1),
                      y(Z) ? (s(), o("span", ta, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (W = (A = t.status.git_changes) == null ? void 0 : A.nodes_removed) != null && W.length ? (s(), o("div", sa, [
                  e("div", oa, [
                    w[19] || (w[19] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", na, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", aa, [
                    (s(!0), o(V, null, oe(t.status.git_changes.nodes_removed, (Z) => (s(), o("div", {
                      key: h(Z),
                      class: "change-item"
                    }, [
                      e("span", la, a(h(Z)), 1),
                      y(Z) ? (s(), o("span", ia, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (E = t.status.git_changes) != null && E.workflow_changes ? (s(), o("div", ra, [
                  w[20] || (w[20] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", da, [
                    e("div", ca, [
                      e("span", ua, a(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : d("", !0),
                (z = t.status.git_changes) != null && z.has_other_changes ? (s(), o("div", ma, [...w[21] || (w[21] = [
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
              (O = t.status.comparison) != null && O.is_synced ? d("", !0) : (s(), o("div", va, [
                e("div", fa, [
                  k(tt, { level: "4" }, {
                    default: i(() => [...w[22] || (w[22] = [
                      p("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: w[3] || (w[3] = (Z) => b.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                w[26] || (w[26] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (se = (le = t.status.comparison) == null ? void 0 : le.missing_nodes) != null && se.length ? (s(), o("div", ga, [
                  k(De, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", pa, [
                    (s(!0), o(V, null, oe(t.status.comparison.missing_nodes.slice(0, 10), (Z) => (s(), o("div", {
                      key: Z,
                      class: "drift-list-item"
                    }, " - " + a(Z), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", ha, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (de = (Y = t.status.comparison) == null ? void 0 : Y.extra_nodes) != null && de.length ? (s(), o("div", ya, [
                  k(De, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", wa, [
                    (s(!0), o(V, null, oe(t.status.comparison.extra_nodes.slice(0, 10), (Z) => (s(), o("div", {
                      key: Z,
                      class: "drift-list-item"
                    }, " - " + a(Z), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", ka, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (D = (J = t.status.comparison) == null ? void 0 : J.version_mismatches) != null && D.length ? (s(), o("div", ba, [
                  k(De, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  e("div", _a, [
                    (s(!0), o(V, null, oe(t.status.comparison.version_mismatches.slice(0, 10), (Z) => (s(), o("div", {
                      key: Z.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      p(a(Z.name) + ": ", 1),
                      e("span", $a, a(Z.actual), 1),
                      w[23] || (w[23] = p(" → ", -1)),
                      e("span", Ca, a(Z.expected), 1)
                    ]))), 128)),
                    t.status.comparison.version_mismatches.length > 10 ? (s(), o("div", xa, " ... and " + a(t.status.comparison.version_mismatches.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                ((P = t.status.comparison) == null ? void 0 : P.packages_in_sync) === !1 ? (s(), o("div", Sa, [
                  k(De, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : d("", !0),
                e("div", Ia, [
                  k(ae, {
                    variant: "warning",
                    loading: t.isRepairing,
                    onClick: w[4] || (w[4] = (Z) => b.$emit("repair"))
                  }, {
                    default: i(() => [...w[24] || (w[24] = [
                      p(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  w[25] || (w[25] = e("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (re = (I = t.status.comparison) == null ? void 0 : I.disabled_nodes) != null && re.length ? (s(), o("div", Ea, [
                k(tt, { level: "4" }, {
                  default: i(() => [...w[27] || (w[27] = [
                    p("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Ma, [
                  w[28] || (w[28] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Ta, [
                  (s(!0), o(V, null, oe(t.status.comparison.disabled_nodes.slice(0, 10), (Z) => (s(), o("div", {
                    key: Z,
                    class: "drift-list-item"
                  }, " • " + a(Z), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", Ra, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : d("", !0)
                ])
              ])) : d("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", La, [
                k(tt, { level: "4" }, {
                  default: i(() => [...w[29] || (w[29] = [
                    p("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", za, [
                  w[30] || (w[30] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                w[31] || (w[31] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : d("", !0),
              r.value ? (s(), o("div", Pa, [...w[32] || (w[32] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : d("", !0)
            ]),
            e("div", Da, [
              k(ae, {
                variant: "secondary",
                onClick: w[5] || (w[5] = (Z) => b.$emit("close"))
              }, {
                default: i(() => [...w[33] || (w[33] = [
                  p(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), Ua = /* @__PURE__ */ te(Na, [["__scopeId", "data-v-e2b37122"]]), Oa = { class: "health-section-header" }, Ba = { class: "suggestions-content" }, Fa = { class: "suggestions-text" }, Aa = { style: { "margin-top": "var(--cg-space-3)" } }, Va = {
  key: 1,
  class: "no-issues-text"
}, Wa = /* @__PURE__ */ ee({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(t, { expose: c, emit: n }) {
    const l = t, f = _(!1), g = _(!1);
    function u() {
      f.value = !0;
    }
    function m() {
      f.value = !1, v("view-workflows");
    }
    function r() {
      f.value = !1, v("view-nodes");
    }
    const v = n, h = _(!1), y = _(!1);
    function b() {
      y.value = !0, v("repair-environment");
    }
    function w() {
      y.value = !1;
    }
    function L() {
      f.value = !1;
    }
    const M = N(() => {
      const J = l.status.workflows.analyzed || [], D = J.filter(
        (P) => P.unresolved_models_count > 0 || P.ambiguous_models_count > 0
      );
      return D.length === 0 && l.status.missing_models_count > 0 ? J.filter((P) => P.sync_state === "synced") : D;
    });
    function $() {
      const J = M.value;
      J.length !== 0 && (h.value = !0, v("repair-missing-models", J.map((D) => D.name)));
    }
    function C() {
      h.value = !1;
    }
    c({ resetRepairingState: C, resetRepairingEnvironmentState: w, closeDetailModal: L });
    const B = N(() => l.status.workflows.new.length > 0 || l.status.workflows.modified.length > 0 || l.status.workflows.deleted.length > 0), x = N(() => l.status.has_changes), T = N(() => {
      const J = l.status.git_changes;
      return J.nodes_added.length > 0 || J.nodes_removed.length > 0 || J.workflow_changes;
    }), K = N(() => l.status.has_changes || B.value), A = N(() => Object.keys(l.status.git_changes.workflow_changes_detail).length), W = N(() => l.status.git_changes.has_other_changes), E = N(() => {
      var J;
      return ((J = l.status.workflows.analyzed) == null ? void 0 : J.filter((D) => D.status === "broken")) || [];
    }), z = N(() => {
      var J;
      return ((J = l.status.workflows.analyzed) == null ? void 0 : J.filter(
        (D) => D.has_path_sync_issues && !D.has_issues
      )) || [];
    }), O = N(() => E.value.length > 0), le = N(() => O.value || z.value.length > 0 || l.status.missing_models_count > 0 || !l.status.comparison.is_synced || l.status.has_legacy_manager), se = N(() => {
      const J = [];
      return l.status.workflows.new.length > 0 && J.push(`${l.status.workflows.new.length} new`), l.status.workflows.modified.length > 0 && J.push(`${l.status.workflows.modified.length} modified`), l.status.workflows.deleted.length > 0 && J.push(`${l.status.workflows.deleted.length} deleted`), J.length > 0 ? `${J.join(", ")} workflow${J.length === 1 && !J[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Y = N(() => {
      var P, I;
      const J = [], D = l.status.comparison;
      return (P = D.missing_nodes) != null && P.length && J.push(`${D.missing_nodes.length} missing node${D.missing_nodes.length === 1 ? "" : "s"}`), (I = D.extra_nodes) != null && I.length && J.push(`${D.extra_nodes.length} untracked node${D.extra_nodes.length === 1 ? "" : "s"}`), J.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${J.join(" and ")}.`;
    }), de = N(() => {
      var P, I;
      const J = [], D = l.status.comparison;
      return (P = D.extra_nodes) != null && P.length && (D.extra_nodes.slice(0, 3).forEach((re) => {
        J.push(`Untracked: ${re}`);
      }), D.extra_nodes.length > 3 && J.push(`...and ${D.extra_nodes.length - 3} more untracked`)), (I = D.missing_nodes) != null && I.length && (D.missing_nodes.slice(0, 3).forEach((re) => {
        J.push(`Missing: ${re}`);
      }), D.missing_nodes.length > 3 && J.push(`...and ${D.missing_nodes.length - 3} more missing`)), J;
    });
    return (J, D) => (s(), o(V, null, [
      k(qe, null, {
        header: i(() => [
          k(Ke, { title: "STATUS" })
        ]),
        content: i(() => [
          l.setupState === "no_workspace" ? (s(), R(at, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: i(() => [
              k(ae, {
                variant: "primary",
                size: "sm",
                onClick: D[0] || (D[0] = (P) => J.$emit("start-setup"))
              }, {
                default: i(() => [...D[13] || (D[13] = [
                  p(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : l.setupState === "unmanaged" ? (s(), R(at, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: i(() => [
              k(ae, {
                variant: "primary",
                size: "sm",
                onClick: D[1] || (D[1] = (P) => J.$emit("view-environments"))
              }, {
                default: i(() => [...D[14] || (D[14] = [
                  p(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : l.setupState === "empty_workspace" ? (s(), R(at, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: i(() => [
              k(ae, {
                variant: "primary",
                size: "sm",
                onClick: D[2] || (D[2] = (P) => J.$emit("create-environment"))
              }, {
                default: i(() => [...D[15] || (D[15] = [
                  p(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: D[4] || (D[4] = (P) => g.value = !0),
            onMouseleave: D[5] || (D[5] = (P) => g.value = !1)
          }, [
            e("div", Oa, [
              k(tt, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: i(() => [...D[16] || (D[16] = [
                  p(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              k(co, { name: "fade" }, {
                default: i(() => [
                  g.value ? (s(), R(ae, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: u
                  }, {
                    default: i(() => [...D[17] || (D[17] = [
                      p(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : d("", !0)
                ]),
                _: 1
              })
            ]),
            k(Ao, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Wt({
              left: i(() => [
                t.status.workflows.new.length ? (s(), R(ut, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.modified.length ? (s(), R(ut, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.deleted.length ? (s(), R(ut, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : d("", !0),
                k(ut, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: B.value
                }, null, 8, ["count", "separator"])
              ]),
              right: i(() => [
                t.status.git_changes.nodes_added.length ? (s(), R(ut, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), R(ut, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.workflow_changes ? (s(), R(ut, {
                  key: 2,
                  icon: "●",
                  count: A.value,
                  label: A.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : d("", !0),
                W.value ? (s(), R(ut, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : d("", !0),
                x.value && !T.value && !W.value ? (s(), R(ut, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : d("", !0),
                x.value ? d("", !0) : (s(), R(ut, {
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
                fn: i(() => [
                  D[19] || (D[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Ba, [
                    e("span", Fa, a(se.value), 1),
                    k(ae, {
                      variant: "primary",
                      size: "sm",
                      onClick: D[3] || (D[3] = (P) => J.$emit("commit-changes"))
                    }, {
                      default: i(() => [...D[18] || (D[18] = [
                        p(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          t.status.is_detached_head ? (s(), R(at, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: i(() => [
              k(ae, {
                variant: "primary",
                size: "sm",
                onClick: D[6] || (D[6] = (P) => J.$emit("create-branch"))
              }, {
                default: i(() => [...D[20] || (D[20] = [
                  p(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", Aa, [
            k(tt, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...D[21] || (D[21] = [
                p(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            le.value ? (s(), o(V, { key: 0 }, [
              E.value.length > 0 ? (s(), R(at, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${E.value.length} workflow${E.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: E.value.map((P) => `${P.name} — ${P.issue_summary}`)
              }, {
                actions: i(() => [
                  k(ae, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[7] || (D[7] = (P) => J.$emit("view-workflows"))
                  }, {
                    default: i(() => [...D[22] || (D[22] = [
                      p(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              z.value.length > 0 ? (s(), R(at, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${z.value.length} workflow${z.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: z.value.map((P) => `${P.name} — ${P.models_needing_path_sync_count} model path${P.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: i(() => [
                  k(ae, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[8] || (D[8] = (P) => J.$emit("view-workflows"))
                  }, {
                    default: i(() => [...D[23] || (D[23] = [
                      p(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              t.status.missing_models_count > 0 && !O.value ? (s(), R(at, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: i(() => [
                  k(ae, {
                    variant: "primary",
                    size: "sm",
                    disabled: h.value,
                    onClick: $
                  }, {
                    default: i(() => [
                      p(a(h.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  k(ae, {
                    variant: "secondary",
                    size: "sm",
                    onClick: D[9] || (D[9] = (P) => J.$emit("view-workflows"))
                  }, {
                    default: i(() => [...D[24] || (D[24] = [
                      p(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : d("", !0),
              t.status.comparison.is_synced ? d("", !0) : (s(), R(at, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: Y.value,
                items: de.value
              }, {
                actions: i(() => [
                  k(ae, {
                    variant: "secondary",
                    size: "sm",
                    onClick: u
                  }, {
                    default: i(() => [...D[25] || (D[25] = [
                      p(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  k(ae, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[10] || (D[10] = (P) => J.$emit("view-nodes"))
                  }, {
                    default: i(() => [...D[26] || (D[26] = [
                      p(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), R(at, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: i(() => [
                  k(ae, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[11] || (D[11] = (P) => J.$emit("view-nodes"))
                  }, {
                    default: i(() => [...D[27] || (D[27] = [
                      p(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : d("", !0)
            ], 64)) : K.value ? (s(), o("span", Va, "No issues")) : (s(), R(rt, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      k(Ua, {
        show: f.value,
        status: t.status,
        "is-repairing": y.value,
        onClose: D[12] || (D[12] = (P) => f.value = !1),
        onNavigateWorkflows: m,
        onNavigateNodes: r,
        onRepair: b
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), Ga = /* @__PURE__ */ te(Wa, [["__scopeId", "data-v-55fcd77f"]]), ja = ["type", "value", "placeholder", "disabled"], Ha = /* @__PURE__ */ ee({
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
    const l = t, f = n, g = _(null);
    function u(m) {
      const r = m.target.value;
      f("update:modelValue", r);
    }
    return Ne(() => {
      l.autoFocus && g.value && g.value.focus();
    }), c({
      focus: () => {
        var m;
        return (m = g.value) == null ? void 0 : m.focus();
      },
      blur: () => {
        var m;
        return (m = g.value) == null ? void 0 : m.blur();
      }
    }), (m, r) => (s(), o("input", {
      ref_key: "inputRef",
      ref: g,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: me(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: u,
      onKeyup: [
        r[0] || (r[0] = vt((v) => m.$emit("enter"), ["enter"])),
        r[1] || (r[1] = vt((v) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: r[2] || (r[2] = (v) => m.$emit("focus")),
      onBlur: r[3] || (r[3] = (v) => m.$emit("blur"))
    }, null, 42, ja));
  }
}), Qt = /* @__PURE__ */ te(Ha, [["__scopeId", "data-v-0380d08f"]]), qa = { class: "branch-create-form" }, Ka = { class: "form-actions" }, Ja = /* @__PURE__ */ ee({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, l = _(""), f = N(() => {
      const m = l.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function g() {
      f.value && (n("create", l.value.trim()), l.value = "");
    }
    function u() {
      l.value = "", n("cancel");
    }
    return (m, r) => (s(), o("div", qa, [
      k(Qt, {
        modelValue: l.value,
        "onUpdate:modelValue": r[0] || (r[0] = (v) => l.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: g,
        onEscape: u
      }, null, 8, ["modelValue"]),
      e("div", Ka, [
        k(ae, {
          variant: "primary",
          size: "sm",
          disabled: !f.value,
          onClick: g
        }, {
          default: i(() => [...r[1] || (r[1] = [
            p(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        k(ae, {
          variant: "secondary",
          size: "sm",
          onClick: u
        }, {
          default: i(() => [...r[2] || (r[2] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Ya = /* @__PURE__ */ te(Ja, [["__scopeId", "data-v-7c500394"]]), Xa = { class: "branch-list-item__indicator" }, Qa = { class: "branch-list-item__name" }, Za = {
  key: 0,
  class: "branch-list-item__actions"
}, el = {
  key: 0,
  class: "branch-list-item__current-label"
}, tl = /* @__PURE__ */ ee({
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
      class: me(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (l) => t.clickable && c.$emit("click"))
    }, [
      e("span", Xa, a(t.isCurrent ? "●" : "○"), 1),
      e("span", Qa, a(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (s(), o("div", Za, [
        Ce(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", el, " current ")) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), sl = /* @__PURE__ */ te(tl, [["__scopeId", "data-v-c6581a24"]]), ol = {
  key: 2,
  class: "branch-list"
}, nl = /* @__PURE__ */ ee({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: c }) {
    const n = c, l = _(!1);
    function f(u) {
      n("create", u), g();
    }
    function g() {
      l.value = !1;
    }
    return (u, m) => (s(), R(qe, null, {
      header: i(() => [
        k(Ke, { title: "BRANCHES" }, {
          actions: i(() => [
            l.value ? d("", !0) : (s(), R(ae, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: m[0] || (m[0] = (r) => l.value = !0)
            }, {
              default: i(() => [...m[1] || (m[1] = [
                p(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        l.value ? (s(), R(Ya, {
          key: 0,
          onCreate: f,
          onCancel: g
        })) : d("", !0),
        t.branches.length === 0 ? (s(), R(rt, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", ol, [
          (s(!0), o(V, null, oe(t.branches, (r) => (s(), R(sl, {
            key: r.name,
            "branch-name": r.name,
            "is-current": r.is_current
          }, {
            actions: i(() => [
              r.is_current ? d("", !0) : (s(), R(ae, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (v) => u.$emit("delete", r.name)
              }, {
                default: i(() => [...m[2] || (m[2] = [
                  p(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              r.is_current ? d("", !0) : (s(), R(ae, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (v) => u.$emit("switch", r.name)
              }, {
                default: i(() => [...m[3] || (m[3] = [
                  p(" Switch ", -1)
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
}), al = /* @__PURE__ */ te(nl, [["__scopeId", "data-v-86784ddd"]]), ll = { class: "commit-list" }, il = /* @__PURE__ */ ee({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (s(), o("div", ll, [
      Ce(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), rl = /* @__PURE__ */ te(il, [["__scopeId", "data-v-8c5ee761"]]), dl = { class: "commit-hash" }, cl = /* @__PURE__ */ ee({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = N(() => c.hash.slice(0, c.length));
    return (l, f) => (s(), o("span", dl, a(n.value), 1));
  }
}), Ps = /* @__PURE__ */ te(cl, [["__scopeId", "data-v-7c333cc6"]]), ul = { class: "commit-message" }, ml = { class: "commit-date" }, vl = /* @__PURE__ */ ee({
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
    function f() {
      n.clickable && l("click");
    }
    return (g, u) => (s(), o("div", {
      class: me(["commit-item", { clickable: t.clickable }]),
      onClick: f
    }, [
      k(Ps, { hash: t.hash }, null, 8, ["hash"]),
      e("span", ul, a(t.message), 1),
      e("span", ml, a(t.relativeDate), 1),
      g.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = Le(() => {
        }, ["stop"]))
      }, [
        Ce(g.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), fl = /* @__PURE__ */ te(vl, [["__scopeId", "data-v-dd7c621b"]]), gl = /* @__PURE__ */ ee({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (s(), R(qe, null, {
      header: i(() => [
        k(Ke, { title: "HISTORY" })
      ]),
      content: i(() => [
        t.commits.length === 0 ? (s(), R(rt, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), R(rl, { key: 1 }, {
          default: i(() => [
            (s(!0), o(V, null, oe(t.commits, (l) => (s(), R(fl, {
              key: l.hash,
              hash: l.short_hash || l.hash,
              message: l.message,
              "relative-date": l.date_relative || l.relative_date,
              onClick: (f) => c.$emit("select", l)
            }, {
              actions: i(() => [
                k(ae, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (f) => c.$emit("checkout", l),
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
}), pl = /* @__PURE__ */ te(gl, [["__scopeId", "data-v-981c3c64"]]), s2 = ts({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const o2 = [
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
], n2 = {
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
}, hl = [
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
], a2 = [
  ...hl,
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
function Dt() {
  return !1;
}
function Ae() {
  const t = _(!1), c = _(null);
  async function n(q, ie) {
    var Re;
    if (!((Re = window.app) != null && Re.api))
      throw new Error("ComfyUI API not available");
    const ke = await window.app.api.fetchApi(q, ie);
    if (!ke.ok) {
      const Ze = await ke.json().catch(() => ({}));
      throw new Error(Ze.error || Ze.message || `Request failed: ${ke.status}`);
    }
    return ke.json();
  }
  async function l(q = !1) {
    return n(q ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function f(q, ie = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: q, allow_issues: ie })
    });
  }
  async function g(q = 10, ie = 0) {
    return n(`/v2/comfygit/log?limit=${q}&offset=${ie}`);
  }
  async function u(q) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: q })
    });
  }
  async function m() {
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
  async function v() {
    return n("/v2/comfygit/branches");
  }
  async function h(q) {
    return n(`/v2/comfygit/commit/${q}`);
  }
  async function y(q, ie = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: q, force: ie })
    });
  }
  async function b(q, ie = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, start_point: ie })
    });
  }
  async function w(q, ie = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: q, force: ie })
    });
  }
  async function L(q, ie = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(q)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ie })
    });
  }
  async function M() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const q = await l();
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
  async function $(q, ie) {
    const ke = { target_env: q };
    return ie && (ke.workspace_path = ie), n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ke)
    });
  }
  async function C() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function B(q) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function x() {
    return n("/v2/workspace/environments/create_status");
  }
  async function T(q = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${q}`);
  }
  async function K(q) {
    return n(`/v2/workspace/environments/${q}`, {
      method: "DELETE"
    });
  }
  async function A(q = !1) {
    try {
      return n(q ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ie = await l(q), ke = [];
      return ie.workflows.new.forEach((Re) => {
        ke.push({ name: Re, status: "new", missing_nodes: 0, missing_models: 0, path: Re });
      }), ie.workflows.modified.forEach((Re) => {
        ke.push({ name: Re, status: "modified", missing_nodes: 0, missing_models: 0, path: Re });
      }), ie.workflows.synced.forEach((Re) => {
        ke.push({ name: Re, status: "synced", missing_nodes: 0, missing_models: 0, path: Re });
      }), ke;
    }
  }
  async function W(q) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/details`);
  }
  async function E(q) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/resolve`, {
      method: "POST"
    });
  }
  async function z(q, ie, ke) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ie, install_models: ke })
    });
  }
  async function O(q, ie, ke) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ie, importance: ke })
    });
  }
  async function le() {
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
  async function Y(q) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(q)}`);
  }
  async function de(q) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function J(q, ie) {
    return n(`/v2/workspace/models/${q}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ie })
    });
  }
  async function D(q, ie) {
    return n(`/v2/workspace/models/${q}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ie })
    });
  }
  async function P(q) {
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
  async function re() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function Z() {
    return n("/v2/workspace/models/directory");
  }
  async function ye(q) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function $e(q) {
    try {
      const ie = q ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(q)}` : "/v2/comfygit/config";
      return n(ie);
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
  async function Me(q, ie) {
    const ke = ie ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(ie)}` : "/v2/comfygit/config";
    return n(ke, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function Ue(q, ie) {
    try {
      const ke = new URLSearchParams();
      return q && ke.append("level", q), ie && ke.append("lines", ie.toString()), n(`/v2/comfygit/debug/logs?${ke}`);
    } catch {
      return [];
    }
  }
  async function ce(q, ie) {
    try {
      const ke = new URLSearchParams();
      return q && ke.append("level", q), ie && ke.append("lines", ie.toString()), n(`/v2/workspace/debug/logs?${ke}`);
    } catch {
      return [];
    }
  }
  async function ge() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function Ie() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function X(q) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function ne() {
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
  async function pe(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}/track-dev`, {
      method: "POST"
    });
  }
  async function ze(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}/install`, {
      method: "POST"
    });
  }
  async function st(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}/update`, {
      method: "POST"
    });
  }
  async function dt(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}`, {
      method: "DELETE"
    });
  }
  async function Se() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Qe(q, ie) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, url: ie })
    });
  }
  async function Ye(q) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}`, {
      method: "DELETE"
    });
  }
  async function Ge(q, ie, ke) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ie, push_url: ke })
    });
  }
  async function gt(q) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/fetch`, {
      method: "POST"
    });
  }
  async function we(q) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/status`);
    } catch {
      return null;
    }
  }
  async function Ve(q = "skip", ie = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: q,
        remove_extra_nodes: ie
      })
    });
  }
  async function ct(q, ie) {
    const ke = ie ? `/v2/comfygit/remotes/${encodeURIComponent(q)}/pull-preview?branch=${encodeURIComponent(ie)}` : `/v2/comfygit/remotes/${encodeURIComponent(q)}/pull-preview`;
    return n(ke);
  }
  async function ot(q, ie = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: ie.modelStrategy || "skip",
        force: ie.force || !1,
        resolutions: ie.resolutions
      })
    });
  }
  async function Te(q, ie) {
    const ke = ie ? `/v2/comfygit/remotes/${encodeURIComponent(q)}/push-preview?branch=${encodeURIComponent(ie)}` : `/v2/comfygit/remotes/${encodeURIComponent(q)}/push-preview`;
    return n(ke);
  }
  async function ue(q, ie = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ie.force || !1 })
    });
  }
  async function j(q, ie) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: ie })
    });
  }
  async function H(q) {
    const ie = {
      success: 0,
      failed: []
    };
    for (const ke of q)
      try {
        await E(ke), ie.success++;
      } catch (Re) {
        ie.failed.push({
          name: ke,
          error: Re instanceof Error ? Re.message : "Unknown error"
        });
      }
    return ie;
  }
  async function S(q) {
    var Re;
    const ie = new FormData();
    if (ie.append("file", q), !((Re = window.app) != null && Re.api))
      throw new Error("ComfyUI API not available");
    const ke = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: ie
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!ke.ok) {
      const Ze = await ke.json().catch(() => ({}));
      throw new Error(Ze.error || `Preview failed: ${ke.status}`);
    }
    return ke.json();
  }
  async function F(q) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(q)}`
    );
  }
  async function Q(q, ie, ke, Re) {
    var Ht;
    const Ze = new FormData();
    if (Ze.append("file", q), Ze.append("name", ie), Ze.append("model_strategy", ke), Ze.append("torch_backend", Re), !((Ht = window.app) != null && Ht.api))
      throw new Error("ComfyUI API not available");
    const It = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Ze
    });
    if (!It.ok) {
      const qt = await It.json().catch(() => ({}));
      throw new Error(qt.message || qt.error || `Import failed: ${It.status}`);
    }
    return It.json();
  }
  async function he() {
    return n("/v2/workspace/import/status");
  }
  async function Be(q) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: q })
    });
  }
  async function pt(q, ie, ke, Re) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: q,
        name: ie,
        model_strategy: ke,
        torch_backend: Re
      })
    });
  }
  async function nt() {
    return n("/v2/setup/status");
  }
  async function xt(q) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function ht() {
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
    getStatus: l,
    commit: f,
    getHistory: g,
    exportEnv: u,
    validateExport: m,
    exportEnvWithForce: r,
    // Git Operations
    getBranches: v,
    getCommitDetail: h,
    checkout: y,
    createBranch: b,
    switchBranch: w,
    deleteBranch: L,
    // Environment Management
    getEnvironments: M,
    switchEnvironment: $,
    getSwitchProgress: C,
    createEnvironment: B,
    getCreateProgress: x,
    getComfyUIReleases: T,
    deleteEnvironment: K,
    // Workflow Management
    getWorkflows: A,
    getWorkflowDetails: W,
    resolveWorkflow: E,
    installWorkflowDeps: z,
    setModelImportance: O,
    // Model Management
    getEnvironmentModels: le,
    getWorkspaceModels: se,
    getModelDetails: Y,
    openFileLocation: de,
    addModelSource: J,
    removeModelSource: D,
    deleteModel: P,
    downloadModel: I,
    scanWorkspaceModels: re,
    getModelsDirectory: Z,
    setModelsDirectory: ye,
    // Settings
    getConfig: $e,
    updateConfig: Me,
    // Debug/Logs
    getEnvironmentLogs: Ue,
    getWorkspaceLogs: ce,
    getEnvironmentLogPath: ge,
    getWorkspaceLogPath: Ie,
    openFile: X,
    // Node Management
    getNodes: ne,
    trackNodeAsDev: pe,
    installNode: ze,
    updateNode: st,
    uninstallNode: dt,
    // Git Remotes
    getRemotes: Se,
    addRemote: Qe,
    removeRemote: Ye,
    updateRemoteUrl: Ge,
    fetchRemote: gt,
    getRemoteSyncStatus: we,
    // Push/Pull
    getPullPreview: ct,
    pullFromRemote: ot,
    getPushPreview: Te,
    pushToRemote: ue,
    validateMerge: j,
    // Environment Sync
    syncEnvironmentManually: Ve,
    // Workflow Repair
    repairWorkflowModels: H,
    // Import Operations
    previewTarballImport: S,
    previewGitImport: Be,
    validateEnvironmentName: F,
    executeImport: Q,
    executeGitImport: pt,
    getImportProgress: he,
    // First-Time Setup
    getSetupStatus: nt,
    initializeWorkspace: xt,
    getInitializeProgress: ht,
    validatePath: St
  };
}
async function Nt(t, c = {}, n = 5e3) {
  const l = new AbortController(), f = setTimeout(() => l.abort(), n);
  try {
    const g = await fetch(t, {
      ...c,
      signal: l.signal
    });
    return clearTimeout(f), g;
  } catch (g) {
    throw clearTimeout(f), g.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : g;
  }
}
function Ds() {
  const t = _(null);
  async function c() {
    try {
      const u = await Nt(
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
      const u = await Nt(
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
      const u = await Nt(
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
    if (!(await Nt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function g() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await Nt(
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
    restart: f,
    kill: g
  };
}
const yl = { class: "base-modal-header" }, wl = {
  key: 0,
  class: "base-modal-title"
}, kl = { class: "base-modal-body" }, bl = {
  key: 0,
  class: "base-modal-loading"
}, _l = {
  key: 1,
  class: "base-modal-error"
}, $l = {
  key: 0,
  class: "base-modal-footer"
}, Cl = /* @__PURE__ */ ee({
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
    function f() {
      n.closeOnOverlayClick && l("close");
    }
    function g(u) {
      u.key === "Escape" && n.showCloseButton && l("close");
    }
    return Ne(() => {
      document.addEventListener("keydown", g), document.body.style.overflow = "hidden";
    }), Ls(() => {
      document.removeEventListener("keydown", g), document.body.style.overflow = "";
    }), (u, m) => (s(), R(We, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: f
      }, [
        e("div", {
          class: me(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = Le(() => {
          }, ["stop"]))
        }, [
          e("div", yl, [
            Ce(u.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", wl, a(t.title), 1)) : d("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: m[0] || (m[0] = (r) => u.$emit("close"))
            }, [...m[2] || (m[2] = [
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
          e("div", kl, [
            t.loading ? (s(), o("div", bl, "Loading...")) : t.error ? (s(), o("div", _l, a(t.error), 1)) : Ce(u.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          u.$slots.footer ? (s(), o("div", $l, [
            Ce(u.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), Je = /* @__PURE__ */ te(Cl, [["__scopeId", "data-v-8dab1081"]]), xl = ["type", "disabled"], Sl = {
  key: 0,
  class: "spinner"
}, Il = /* @__PURE__ */ ee({
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
      class: me(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (l) => c.$emit("click", l))
    }, [
      t.loading ? (s(), o("span", Sl)) : d("", !0),
      Ce(c.$slots, "default", {}, void 0, !0)
    ], 10, xl));
  }
}), ve = /* @__PURE__ */ te(Il, [["__scopeId", "data-v-f3452606"]]), El = {
  key: 0,
  class: "base-title-count"
}, Ml = /* @__PURE__ */ ee({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, n) => (s(), R(cs(`h${t.level}`), {
      class: me(["base-title", t.variant])
    }, {
      default: i(() => [
        Ce(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", El, "(" + a(t.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ft = /* @__PURE__ */ te(Ml, [["__scopeId", "data-v-5a01561d"]]), Tl = ["value", "disabled"], Rl = {
  key: 0,
  value: "",
  disabled: ""
}, Ll = ["value"], zl = {
  key: 0,
  class: "base-select-error"
}, Pl = /* @__PURE__ */ ee({
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
    return (l, f) => (s(), o("div", {
      class: me(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: me(["base-select", { error: !!t.error }]),
        onChange: f[0] || (f[0] = (g) => l.$emit("update:modelValue", g.target.value))
      }, [
        t.placeholder ? (s(), o("option", Rl, a(t.placeholder), 1)) : d("", !0),
        (s(!0), o(V, null, oe(t.options, (g) => (s(), o("option", {
          key: c(g),
          value: c(g)
        }, a(n(g)), 9, Ll))), 128))
      ], 42, Tl),
      t.error ? (s(), o("span", zl, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), Dl = /* @__PURE__ */ te(Pl, [["__scopeId", "data-v-7436d745"]]), Nl = { class: "popover-header" }, Ul = { class: "popover-title" }, Ol = { class: "popover-content" }, Bl = {
  key: 0,
  class: "popover-actions"
}, Fl = /* @__PURE__ */ ee({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (s(), R(We, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (l) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: wt({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = Le(() => {
          }, ["stop"]))
        }, [
          e("div", Nl, [
            e("h4", Ul, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (l) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Ol, [
            Ce(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (s(), o("div", Bl, [
            Ce(c.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), ft = /* @__PURE__ */ te(Fl, [["__scopeId", "data-v-42815ace"]]), Al = { class: "detail-section" }, Vl = {
  key: 0,
  class: "empty-message"
}, Wl = { class: "model-header" }, Gl = { class: "model-name" }, jl = { class: "model-details" }, Hl = { class: "model-row" }, ql = { class: "model-row" }, Kl = { class: "label" }, Jl = {
  key: 0,
  class: "model-row model-row-nodes"
}, Yl = { class: "node-list" }, Xl = ["onClick"], Ql = {
  key: 1,
  class: "model-row"
}, Zl = { class: "value" }, ei = {
  key: 2,
  class: "model-row"
}, ti = { class: "value error" }, si = {
  key: 0,
  class: "model-actions"
}, oi = { class: "detail-section" }, ni = {
  key: 0,
  class: "empty-message"
}, ai = { class: "node-name" }, li = {
  key: 0,
  class: "node-version"
}, ii = /* @__PURE__ */ ee({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, l = c, { getWorkflowDetails: f, setModelImportance: g, openFileLocation: u } = Ae(), m = _(null), r = _(!1), v = _(null), h = _(!1), y = _({}), b = _(!1), w = _(/* @__PURE__ */ new Set()), L = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function M(E) {
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
      const z = E.hash || E.filename;
      return w.value.has(z) ? E.loaded_by : E.loaded_by.slice(0, 3);
    }
    function B(E) {
      return w.value.has(E);
    }
    function x(E) {
      w.value.has(E) ? w.value.delete(E) : w.value.add(E), w.value = new Set(w.value);
    }
    async function T() {
      r.value = !0, v.value = null;
      try {
        m.value = await f(n.workflowName);
      } catch (E) {
        v.value = E instanceof Error ? E.message : "Failed to load workflow details";
      } finally {
        r.value = !1;
      }
    }
    function K(E, z) {
      y.value[E] = z, h.value = !0;
    }
    async function A(E) {
      try {
        await u(E);
      } catch (z) {
        v.value = z instanceof Error ? z.message : "Failed to open file location";
      }
    }
    async function W() {
      if (!h.value) {
        l("close");
        return;
      }
      r.value = !0, v.value = null;
      try {
        for (const [E, z] of Object.entries(y.value))
          await g(n.workflowName, E, z);
        l("refresh"), l("close");
      } catch (E) {
        v.value = E instanceof Error ? E.message : "Failed to save changes";
      } finally {
        r.value = !1;
      }
    }
    return Ne(T), (E, z) => (s(), o(V, null, [
      k(Je, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: r.value,
        error: v.value || void 0,
        onClose: z[4] || (z[4] = (O) => l("close"))
      }, {
        body: i(() => [
          m.value ? (s(), o(V, { key: 0 }, [
            e("section", Al, [
              k(Ft, { variant: "section" }, {
                default: i(() => [
                  p("MODELS USED (" + a(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (s(), o("div", Vl, " No models used in this workflow ")) : d("", !0),
              (s(!0), o(V, null, oe(m.value.models, (O) => {
                var le;
                return s(), o("div", {
                  key: O.hash || O.filename,
                  class: "model-card"
                }, [
                  e("div", Wl, [
                    z[6] || (z[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", Gl, a(O.filename), 1)
                  ]),
                  e("div", jl, [
                    e("div", Hl, [
                      z[7] || (z[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: me(["value", M(O.status)])
                      }, a($(O.status)), 3)
                    ]),
                    e("div", ql, [
                      e("span", Kl, [
                        z[8] || (z[8] = p(" Importance: ", -1)),
                        k(zs, {
                          size: 14,
                          title: "About importance levels",
                          onClick: z[0] || (z[0] = (se) => b.value = !0)
                        })
                      ]),
                      k(Dl, {
                        "model-value": y.value[O.filename] || O.importance,
                        options: L,
                        "onUpdate:modelValue": (se) => K(O.filename, se)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    O.loaded_by && O.loaded_by.length > 0 ? (s(), o("div", Jl, [
                      z[9] || (z[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", Yl, [
                        (s(!0), o(V, null, oe(C(O), (se, Y) => (s(), o("div", {
                          key: `${se.node_id}-${Y}`,
                          class: "node-reference"
                        }, a(se.node_type) + " (Node #" + a(se.node_id) + ") ", 1))), 128)),
                        O.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (se) => x(O.hash || O.filename)
                        }, a(B(O.hash || O.filename) ? "▼ Show less" : `▶ View all (${O.loaded_by.length})`), 9, Xl)) : d("", !0)
                      ])
                    ])) : d("", !0),
                    O.size_mb ? (s(), o("div", Ql, [
                      z[10] || (z[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", Zl, a(O.size_mb) + " MB", 1)
                    ])) : d("", !0),
                    O.has_category_mismatch ? (s(), o("div", ei, [
                      z[13] || (z[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", ti, [
                        z[11] || (z[11] = p(" In ", -1)),
                        e("code", null, a(O.actual_category) + "/", 1),
                        z[12] || (z[12] = p(" but loader needs ", -1)),
                        e("code", null, a((le = O.expected_categories) == null ? void 0 : le[0]) + "/", 1)
                      ])
                    ])) : d("", !0)
                  ]),
                  O.status !== "available" ? (s(), o("div", si, [
                    O.status === "downloadable" ? (s(), R(ve, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: z[1] || (z[1] = (se) => l("resolve"))
                    }, {
                      default: i(() => [...z[14] || (z[14] = [
                        p(" Download ", -1)
                      ])]),
                      _: 1
                    })) : O.status === "category_mismatch" && O.file_path ? (s(), R(ve, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => A(O.file_path)
                    }, {
                      default: i(() => [...z[15] || (z[15] = [
                        p(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : O.status !== "path_mismatch" ? (s(), R(ve, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: z[2] || (z[2] = (se) => l("resolve"))
                    }, {
                      default: i(() => [...z[16] || (z[16] = [
                        p(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : d("", !0)
                  ])) : d("", !0)
                ]);
              }), 128))
            ]),
            e("section", oi, [
              k(Ft, { variant: "section" }, {
                default: i(() => [
                  p("NODES USED (" + a(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (s(), o("div", ni, " No custom nodes used in this workflow ")) : d("", !0),
              (s(!0), o(V, null, oe(m.value.nodes, (O) => (s(), o("div", {
                key: O.name,
                class: "node-item"
              }, [
                e("span", {
                  class: me(["node-status", O.status === "installed" ? "installed" : "missing"])
                }, a(O.status === "installed" ? "✓" : "✕"), 3),
                e("span", ai, a(O.name), 1),
                O.version ? (s(), o("span", li, "v" + a(O.version), 1)) : d("", !0)
              ]))), 128))
            ])
          ], 64)) : d("", !0)
        ]),
        footer: i(() => [
          k(ve, {
            variant: "secondary",
            onClick: z[3] || (z[3] = (O) => l("close"))
          }, {
            default: i(() => [...z[17] || (z[17] = [
              p(" Close ", -1)
            ])]),
            _: 1
          }),
          h.value ? (s(), R(ve, {
            key: 0,
            variant: "primary",
            onClick: W
          }, {
            default: i(() => [...z[18] || (z[18] = [
              p(" Save Changes ", -1)
            ])]),
            _: 1
          })) : d("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      k(ft, {
        show: b.value,
        title: "Model Importance Levels",
        onClose: z[5] || (z[5] = (O) => b.value = !1)
      }, {
        content: i(() => [...z[19] || (z[19] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              p(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              p(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              p(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), ri = /* @__PURE__ */ te(ii, [["__scopeId", "data-v-668728e6"]]), Ee = ts({
  items: [],
  status: "idle"
});
let mt = null;
function Ns() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function ss(t) {
  return Ee.items.find((c) => c.id === t);
}
async function Mt() {
  if (Ee.status === "downloading") return;
  const t = Ee.items.find((c) => c.status === "queued");
  if (!t) {
    Ee.status = "idle";
    return;
  }
  Ee.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await di(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    Ee.status = "idle", Mt();
  }
}
async function di(t) {
  return new Promise((c, n) => {
    mt && (mt.close(), mt = null);
    const l = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), f = new EventSource(`/v2/comfygit/models/download-stream?${l}`);
    mt = f;
    let g = Date.now(), u = 0, m = !1;
    f.onmessage = (r) => {
      try {
        const v = JSON.parse(r.data);
        switch (v.type) {
          case "progress":
            t.downloaded = v.downloaded || 0, t.size = v.total || t.size;
            const h = Date.now(), y = (h - g) / 1e3;
            if (y > 0.5) {
              const b = t.downloaded - u;
              if (t.speed = b / y, g = h, u = t.downloaded, t.speed > 0 && t.size > 0) {
                const w = t.size - t.downloaded;
                t.eta = w / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, f.close(), mt = null, c();
            break;
          case "error":
            m = !0, f.close(), mt = null, n(new Error(v.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, f.onerror = () => {
      f.close(), mt = null, m || n(new Error("Connection lost"));
    };
  });
}
async function ci() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const c = await t.json();
    if (!c.pending_downloads || c.pending_downloads.length === 0) return;
    for (const n of c.pending_downloads) {
      if (Ee.items.some((f) => f.url === n.url && f.filename === n.filename))
        continue;
      const l = {
        id: Ns(),
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
      Ee.items.push(l);
    }
    console.log(`[ComfyGit] Loaded ${c.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Gt() {
  function t($) {
    for (const C of $) {
      if (Ee.items.some(
        (T) => T.url === C.url && T.targetPath === C.targetPath && ["queued", "downloading", "paused", "completed"].includes(T.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${C.filename}`);
        continue;
      }
      const x = {
        id: Ns(),
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
      Ee.items.push(x);
    }
    Ee.status === "idle" && Mt();
  }
  async function c($) {
    const C = ss($);
    if (C) {
      if (C.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(C.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        mt && (mt.close(), mt = null), C.status = "failed", C.error = "Cancelled by user", Ee.status = "idle", Mt();
      } else if (C.status === "queued") {
        const B = Ee.items.findIndex((x) => x.id === $);
        B >= 0 && Ee.items.splice(B, 1);
      }
    }
  }
  function n($) {
    const C = ss($);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, Ee.status === "idle" && Mt());
  }
  function l($) {
    const C = ss($);
    !C || C.status !== "paused" || (C.status = "queued", Ee.status === "idle" && Mt());
  }
  function f() {
    const $ = Ee.items.filter((C) => C.status === "paused");
    for (const C of $)
      C.status = "queued";
    Ee.status === "idle" && Mt();
  }
  function g($) {
    const C = Ee.items.findIndex((B) => B.id === $);
    C >= 0 && ["completed", "failed", "paused"].includes(Ee.items[C].status) && Ee.items.splice(C, 1);
  }
  function u() {
    Ee.items = Ee.items.filter(($) => $.status !== "completed");
  }
  function m() {
    Ee.items = Ee.items.filter(($) => $.status !== "failed");
  }
  const r = N(
    () => Ee.items.find(($) => $.status === "downloading")
  ), v = N(
    () => Ee.items.filter(($) => $.status === "queued")
  ), h = N(
    () => Ee.items.filter(($) => $.status === "completed")
  ), y = N(
    () => Ee.items.filter(($) => $.status === "failed")
  ), b = N(
    () => Ee.items.filter(($) => $.status === "paused")
  ), w = N(() => Ee.items.length > 0), L = N(
    () => Ee.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), M = N(
    () => Ee.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: uo(Ee),
    // Computed
    currentDownload: r,
    queuedItems: v,
    completedItems: h,
    failedItems: y,
    pausedItems: b,
    hasItems: w,
    activeCount: L,
    hasPaused: M,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: l,
    resumeAllPaused: f,
    removeItem: g,
    clearCompleted: u,
    clearFailed: m,
    loadPendingDownloads: ci
  };
}
function Us() {
  const t = _(null), c = _(null), n = _([]), l = _([]), f = _(!1), g = _(null);
  async function u(B, x) {
    var K;
    if (!((K = window.app) != null && K.api))
      throw new Error("ComfyUI API not available");
    const T = await window.app.api.fetchApi(B, x);
    if (!T.ok) {
      const A = await T.json().catch(() => ({})), W = A.error || A.message || `Request failed: ${T.status}`;
      throw new Error(W);
    }
    return T.json();
  }
  async function m(B) {
    f.value = !0, g.value = null;
    try {
      let x;
      return Dt() || (x = await u(
        `/v2/comfygit/workflow/${B}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = x, x;
    } catch (x) {
      const T = x instanceof Error ? x.message : "Unknown error occurred";
      throw g.value = T, x;
    } finally {
      f.value = !1;
    }
  }
  async function r(B, x, T, K) {
    f.value = !0, g.value = null;
    try {
      let A;
      if (!Dt()) {
        const W = Object.fromEntries(x), E = Object.fromEntries(T), z = K ? Array.from(K) : [];
        A = await u(
          `/v2/comfygit/workflow/${B}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: W,
              model_choices: E,
              skipped_packages: z
            })
          }
        );
      }
      return c.value = A, A;
    } catch (A) {
      const W = A instanceof Error ? A.message : "Unknown error occurred";
      throw g.value = W, A;
    } finally {
      f.value = !1;
    }
  }
  async function v(B, x = 10) {
    f.value = !0, g.value = null;
    try {
      let T;
      return Dt() || (T = await u(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: B, limit: x })
        }
      )), n.value = T.results, T.results;
    } catch (T) {
      const K = T instanceof Error ? T.message : "Unknown error occurred";
      throw g.value = K, T;
    } finally {
      f.value = !1;
    }
  }
  async function h(B, x = 10) {
    f.value = !0, g.value = null;
    try {
      let T;
      return Dt() || (T = await u(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: B, limit: x })
        }
      )), l.value = T.results, T.results;
    } catch (T) {
      const K = T instanceof Error ? T.message : "Unknown error occurred";
      throw g.value = K, T;
    } finally {
      f.value = !1;
    }
  }
  const y = ts({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function b() {
    y.phase = "idle", y.currentFile = void 0, y.currentFileIndex = void 0, y.totalFiles = void 0, y.bytesDownloaded = void 0, y.bytesTotal = void 0, y.completedFiles = [], y.nodesToInstall = [], y.nodesInstalled = [], y.installError = void 0, y.needsRestart = void 0, y.error = void 0, y.nodeInstallProgress = void 0;
  }
  async function w(B) {
    y.phase = "installing", y.nodesInstalled = [], y.installError = void 0, y.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Dt(), await L(B);
    } catch (x) {
      const T = x instanceof Error ? x.message : "Failed to install nodes";
      throw y.installError = T, x;
    }
  }
  async function L(B) {
    var T;
    const x = await u(
      `/v2/comfygit/workflow/${B}/install`,
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
      const K = new Map(((T = x.failed) == null ? void 0 : T.map((A) => [A.node_id, A.error])) || []);
      for (let A = 0; A < y.nodesToInstall.length; A++) {
        const W = y.nodesToInstall[A], E = K.get(W);
        y.nodeInstallProgress.completedNodes.push({
          node_id: W,
          success: !E,
          error: E
        });
      }
    }
    return y.nodesInstalled = x.nodes_installed, y.needsRestart = x.nodes_installed.length > 0, x.failed && x.failed.length > 0 && (y.installError = `${x.failed.length} package(s) failed to install`), x;
  }
  async function M(B, x, T) {
    b(), y.phase = "resolving", g.value = null;
    const K = Object.fromEntries(x), A = Object.fromEntries(T);
    try {
      const W = await fetch(`/v2/comfygit/workflow/${B}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: K,
          model_choices: A
        })
      });
      if (!W.ok)
        throw new Error(`Request failed: ${W.status}`);
      if (!W.body)
        throw new Error("No response body");
      const E = W.body.getReader(), z = new TextDecoder();
      let O = "";
      for (; ; ) {
        const { done: le, value: se } = await E.read();
        if (le) break;
        O += z.decode(se, { stream: !0 });
        const Y = O.split(`

`);
        O = Y.pop() || "";
        for (const de of Y) {
          if (!de.trim()) continue;
          const J = de.split(`
`);
          let D = "", P = "";
          for (const I of J)
            I.startsWith("event: ") ? D = I.slice(7) : I.startsWith("data: ") && (P = I.slice(6));
          if (P)
            try {
              const I = JSON.parse(P);
              $(D, I);
            } catch (I) {
              console.warn("Failed to parse SSE event:", I);
            }
        }
      }
    } catch (W) {
      const E = W instanceof Error ? W.message : "Unknown error occurred";
      throw g.value = E, y.error = E, y.phase = "error", W;
    }
  }
  function $(B, x) {
    switch (B) {
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
  function C(B, x) {
    const { addToQueue: T } = Gt(), K = x.filter((A) => A.url && A.target_path).map((A) => ({
      workflow: B,
      filename: A.filename,
      url: A.url,
      targetPath: A.target_path,
      size: A.size || 0,
      type: "model"
    }));
    return K.length > 0 && T(K), K.length;
  }
  return {
    // State
    result: t,
    appliedResult: c,
    searchResults: n,
    modelSearchResults: l,
    isLoading: f,
    error: g,
    progress: y,
    // Methods
    analyzeWorkflow: m,
    applyResolution: r,
    applyResolutionWithProgress: M,
    installNodes: w,
    searchNodes: v,
    searchModels: h,
    resetProgress: b,
    queueModelDownloads: C
  };
}
const ui = { class: "resolution-stepper" }, mi = { class: "stepper-header" }, vi = ["onClick"], fi = {
  key: 0,
  class: "step-icon"
}, gi = {
  key: 1,
  class: "step-number"
}, pi = { class: "step-label" }, hi = {
  key: 0,
  class: "step-connector"
}, yi = { class: "stepper-content" }, wi = /* @__PURE__ */ ee({
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
    function f(v) {
      var h;
      if ((h = n.stepStats) != null && h[v]) {
        const y = n.stepStats[v];
        return y.total > 0 && y.resolved === y.total;
      }
      return n.completedSteps.includes(v);
    }
    function g(v) {
      var h;
      if ((h = n.stepStats) != null && h[v]) {
        const y = n.stepStats[v];
        return y.resolved > 0 && y.resolved < y.total;
      }
      return !1;
    }
    function u(v) {
      return f(v) ? "state-complete" : g(v) ? "state-partial" : "state-pending";
    }
    function m(v) {
      return !1;
    }
    function r(v) {
      l("step-change", v);
    }
    return (v, h) => (s(), o("div", ui, [
      e("div", mi, [
        (s(!0), o(V, null, oe(t.steps, (y, b) => (s(), o("div", {
          key: y.id,
          class: me(["step", {
            active: t.currentStep === y.id,
            completed: f(y.id),
            "in-progress": g(y.id),
            disabled: m(y.id)
          }]),
          onClick: (w) => r(y.id)
        }, [
          e("div", {
            class: me(["step-indicator", u(y.id)])
          }, [
            f(y.id) ? (s(), o("span", fi, "✓")) : (s(), o("span", gi, a(b + 1), 1))
          ], 2),
          e("div", pi, a(y.label), 1),
          b < t.steps.length - 1 ? (s(), o("div", hi)) : d("", !0)
        ], 10, vi))), 128))
      ]),
      e("div", yi, [
        Ce(v.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), ki = /* @__PURE__ */ te(wi, [["__scopeId", "data-v-2a7b3af8"]]), bi = /* @__PURE__ */ ee({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = N(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), l = N(() => `confidence-${n.value}`), f = N(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (g, u) => (s(), o("span", {
      class: me(["confidence-badge", l.value, t.size])
    }, a(f.value), 3));
  }
}), Zt = /* @__PURE__ */ te(bi, [["__scopeId", "data-v-17ec4b80"]]), _i = { class: "node-info" }, $i = { class: "node-info-text" }, Ci = { class: "item-body" }, xi = {
  key: 0,
  class: "resolved-state"
}, Si = {
  key: 1,
  class: "multiple-options"
}, Ii = { class: "options-list" }, Ei = ["onClick"], Mi = ["name", "value", "checked", "onChange"], Ti = { class: "option-content" }, Ri = { class: "option-header" }, Li = { class: "option-package-id" }, zi = {
  key: 0,
  class: "option-title"
}, Pi = { class: "option-meta" }, Di = {
  key: 0,
  class: "installed-badge"
}, Ni = { class: "action-buttons" }, Ui = {
  key: 2,
  class: "unresolved"
}, Oi = {
  key: 0,
  class: "searching-state"
}, Bi = { class: "options-list" }, Fi = ["onClick"], Ai = ["name", "value"], Vi = { class: "option-content" }, Wi = { class: "option-header" }, Gi = { class: "option-package-id" }, ji = {
  key: 0,
  class: "option-description"
}, Hi = { class: "option-meta" }, qi = {
  key: 0,
  class: "installed-badge"
}, Ki = {
  key: 2,
  class: "unresolved-message"
}, Ji = { class: "action-buttons" }, Yi = /* @__PURE__ */ ee({
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
    function f(r, v = 80) {
      return r.length <= v ? r : r.slice(0, v - 3) + "...";
    }
    const g = N(() => !!n.choice);
    N(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.action;
    }), N(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.package_id;
    });
    const u = N(() => {
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
    function m(r) {
      l("option-selected", r);
    }
    return (r, v) => (s(), o("div", {
      class: me(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: g.value }])
    }, [
      e("div", _i, [
        e("span", $i, [
          v[7] || (v[7] = p("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: me(["status-badge", u.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", Ci, [
        g.value ? (s(), o("div", xi, [
          k(ve, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (h) => l("clear-choice"))
          }, {
            default: i(() => [...v[8] || (v[8] = [
              p(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Si, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Ii, [
            (s(!0), o(V, null, oe(t.options, (h, y) => (s(), o("label", {
              key: h.package_id,
              class: me(["option-card", { selected: t.selectedOptionIndex === y }]),
              onClick: (b) => m(y)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: y,
                checked: t.selectedOptionIndex === y,
                onChange: (b) => m(y)
              }, null, 40, Mi),
              e("div", Ti, [
                e("div", Ri, [
                  e("span", Li, a(h.package_id), 1),
                  k(Zt, {
                    confidence: h.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                h.title && h.title !== h.package_id ? (s(), o("div", zi, a(h.title), 1)) : d("", !0),
                e("div", Pi, [
                  h.is_installed ? (s(), o("span", Di, "Already Installed")) : d("", !0)
                ])
              ])
            ], 10, Ei))), 128))
          ]),
          e("div", Ni, [
            k(ve, {
              variant: "secondary",
              size: "sm",
              onClick: v[1] || (v[1] = (h) => l("search"))
            }, {
              default: i(() => [...v[9] || (v[9] = [
                p(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            k(ve, {
              variant: "secondary",
              size: "sm",
              onClick: v[2] || (v[2] = (h) => l("manual-entry"))
            }, {
              default: i(() => [...v[10] || (v[10] = [
                p(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(ve, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (h) => l("mark-optional"))
            }, {
              default: i(() => [...v[11] || (v[11] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Ui, [
          t.isSearching ? (s(), o("div", Oi, [...v[13] || (v[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(V, { key: 1 }, [
            v[14] || (v[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", Bi, [
              (s(!0), o(V, null, oe(t.searchResults.slice(0, 5), (h, y) => (s(), o("label", {
                key: h.package_id,
                class: "option-card",
                onClick: (b) => l("search-result-selected", h)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: y
                }, null, 8, Ai),
                e("div", Vi, [
                  e("div", Wi, [
                    e("span", Gi, a(h.package_id), 1),
                    k(Zt, {
                      confidence: h.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  h.description ? (s(), o("div", ji, a(f(h.description)), 1)) : d("", !0),
                  e("div", Hi, [
                    h.is_installed ? (s(), o("span", qi, "Already Installed")) : d("", !0)
                  ])
                ])
              ], 8, Fi))), 128))
            ])
          ], 64)) : (s(), o("div", Ki, [...v[15] || (v[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", Ji, [
            k(ve, {
              variant: "secondary",
              size: "sm",
              onClick: v[4] || (v[4] = (h) => l("search"))
            }, {
              default: i(() => {
                var h;
                return [
                  p(a((h = t.searchResults) != null && h.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            k(ve, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (h) => l("manual-entry"))
            }, {
              default: i(() => [...v[16] || (v[16] = [
                p(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(ve, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (h) => l("mark-optional"))
            }, {
              default: i(() => [...v[17] || (v[17] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Xi = /* @__PURE__ */ te(Yi, [["__scopeId", "data-v-c2997d1d"]]), Qi = { class: "item-navigator" }, Zi = { class: "nav-item-info" }, er = ["title"], tr = { class: "nav-controls" }, sr = { class: "nav-arrows" }, or = ["disabled"], nr = ["disabled"], ar = { class: "nav-position" }, lr = /* @__PURE__ */ ee({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const n = c;
    return (l, f) => (s(), o("div", Qi, [
      e("div", Zi, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, er)
      ]),
      e("div", tr, [
        e("div", sr, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: f[0] || (f[0] = (g) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, or),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: f[1] || (f[1] = (g) => n("next")),
            title: "Next item"
          }, " → ", 8, nr)
        ]),
        e("span", ar, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), Os = /* @__PURE__ */ te(lr, [["__scopeId", "data-v-74af7920"]]), ir = ["type", "value", "placeholder", "disabled"], rr = {
  key: 0,
  class: "base-input-error"
}, dr = /* @__PURE__ */ ee({
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
      class: me(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: me(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (l) => c.$emit("update:modelValue", l.target.value)),
        onKeyup: [
          n[1] || (n[1] = vt((l) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = vt((l) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, ir),
      t.error ? (s(), o("span", rr, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), it = /* @__PURE__ */ te(dr, [["__scopeId", "data-v-9ba02cdc"]]), cr = { class: "node-resolution-step" }, ur = {
  key: 0,
  class: "auto-resolved-section"
}, mr = { class: "section-header" }, vr = { class: "stat-badge" }, fr = { class: "resolved-packages-list" }, gr = { class: "package-info" }, pr = { class: "package-id" }, hr = { class: "node-count" }, yr = { class: "package-actions" }, wr = {
  key: 0,
  class: "status-badge install"
}, kr = {
  key: 1,
  class: "status-badge skip"
}, br = ["onClick"], _r = {
  key: 1,
  class: "section-divider"
}, $r = { class: "step-header" }, Cr = { class: "stat-badge" }, xr = {
  key: 1,
  class: "step-body"
}, Sr = {
  key: 3,
  class: "empty-state"
}, Ir = { class: "node-modal-body" }, Er = { class: "node-search-results-container" }, Mr = {
  key: 0,
  class: "node-search-results"
}, Tr = ["onClick"], Rr = { class: "node-result-header" }, Lr = { class: "node-result-package-id" }, zr = {
  key: 0,
  class: "node-result-description"
}, Pr = {
  key: 1,
  class: "node-empty-state"
}, Dr = {
  key: 2,
  class: "node-empty-state"
}, Nr = {
  key: 3,
  class: "node-empty-state"
}, Ur = { class: "node-manual-entry-modal" }, Or = { class: "node-modal-body" }, Br = { class: "node-modal-actions" }, Fr = /* @__PURE__ */ ee({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: c }) {
    const n = t, l = c, { searchNodes: f } = Us(), g = _(0), u = _(!1), m = _(!1), r = _(""), v = _(""), h = _([]), y = _(!1), b = _(/* @__PURE__ */ new Map()), w = _(/* @__PURE__ */ new Set()), L = _(!1);
    function M() {
      L.value && P(), L.value = !1;
    }
    const $ = N(() => n.nodes[g.value]), C = N(() => n.nodes.filter((ce) => n.nodeChoices.has(ce.node_type)).length), B = N(() => $.value ? b.value.get($.value.node_type) || [] : []), x = N(() => $.value ? w.value.has($.value.node_type) : !1);
    $t($, async (ce) => {
      var ge;
      ce && ((ge = ce.options) != null && ge.length || b.value.has(ce.node_type) || w.value.has(ce.node_type) || n.nodeChoices.has(ce.node_type) || await T(ce.node_type));
    }, { immediate: !0 });
    async function T(ce) {
      w.value.add(ce);
      try {
        const ge = await f(ce, 5);
        b.value.set(ce, ge);
      } catch {
        b.value.set(ce, []);
      } finally {
        w.value.delete(ce);
      }
    }
    const K = N(() => n.autoResolvedPackages.filter((ce) => !n.skippedPackages.has(ce.package_id)).length);
    function A(ce) {
      return n.skippedPackages.has(ce);
    }
    function W(ce) {
      l("package-skip", ce);
    }
    const E = N(() => {
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
    }), z = N(() => {
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
    function O(ce) {
      ce >= 0 && ce < n.nodes.length && (g.value = ce);
    }
    function le() {
      $.value && l("mark-optional", $.value.node_type);
    }
    function se() {
      $.value && l("skip", $.value.node_type);
    }
    function Y(ce) {
      $.value && l("option-selected", $.value.node_type, ce);
    }
    function de() {
      $.value && l("clear-choice", $.value.node_type);
    }
    function J() {
      $.value && (r.value = $.value.node_type, h.value = B.value, u.value = !0, ye(r.value));
    }
    function D() {
      v.value = "", m.value = !0;
    }
    function P() {
      u.value = !1, r.value = "", h.value = [];
    }
    function I() {
      m.value = !1, v.value = "";
    }
    let re = null;
    function Z() {
      re && clearTimeout(re), re = setTimeout(() => {
        ye(r.value);
      }, 300);
    }
    async function ye(ce) {
      if (!ce.trim()) {
        h.value = [];
        return;
      }
      y.value = !0;
      try {
        h.value = await f(ce, 10);
      } catch {
        h.value = [];
      } finally {
        y.value = !1;
      }
    }
    function $e(ce) {
      $.value && (l("manual-entry", $.value.node_type, ce.package_id), P());
    }
    function Me(ce) {
      $.value && l("manual-entry", $.value.node_type, ce.package_id);
    }
    function Ue() {
      !$.value || !v.value.trim() || (l("manual-entry", $.value.node_type, v.value.trim()), I());
    }
    return (ce, ge) => {
      var Ie, X;
      return s(), o("div", cr, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", ur, [
          e("div", mr, [
            ge[6] || (ge[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", vr, a(K.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", fr, [
            (s(!0), o(V, null, oe(t.autoResolvedPackages, (ne) => (s(), o("div", {
              key: ne.package_id,
              class: "resolved-package-item"
            }, [
              e("div", gr, [
                e("code", pr, a(ne.package_id), 1),
                e("span", hr, a(ne.node_types_count) + " node type" + a(ne.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", yr, [
                A(ne.package_id) ? (s(), o("span", kr, " SKIPPED ")) : (s(), o("span", wr, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (pe) => W(ne.package_id)
                }, a(A(ne.package_id) ? "Include" : "Skip"), 9, br)
              ])
            ]))), 128))
          ])
        ])) : d("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", _r)) : d("", !0),
        t.nodes.length > 0 ? (s(), o(V, { key: 2 }, [
          e("div", $r, [
            ge[7] || (ge[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", Cr, a(C.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          $.value ? (s(), R(Os, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": g.value,
            "total-items": t.nodes.length,
            onPrev: ge[0] || (ge[0] = (ne) => O(g.value - 1)),
            onNext: ge[1] || (ge[1] = (ne) => O(g.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
          $.value ? (s(), o("div", xr, [
            k(Xi, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((Ie = $.value.options) != null && Ie.length),
              options: $.value.options,
              choice: (X = t.nodeChoices) == null ? void 0 : X.get($.value.node_type),
              status: E.value,
              "status-label": z.value,
              "search-results": B.value,
              "is-searching": x.value,
              onMarkOptional: le,
              onSkip: se,
              onManualEntry: D,
              onSearch: J,
              onOptionSelected: Y,
              onClearChoice: de,
              onSearchResultSelected: Me
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : d("", !0)
        ], 64)) : d("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", Sr, [...ge[8] || (ge[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : d("", !0),
        (s(), R(We, { to: "body" }, [
          u.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ge[4] || (ge[4] = Le((ne) => L.value = !0, ["self"])),
            onMouseup: Le(M, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: ge[3] || (ge[3] = (ne) => L.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                ge[9] || (ge[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: P
                }, "✕")
              ]),
              e("div", Ir, [
                k(it, {
                  modelValue: r.value,
                  "onUpdate:modelValue": ge[2] || (ge[2] = (ne) => r.value = ne),
                  placeholder: "Search by node type, package name...",
                  onInput: Z
                }, null, 8, ["modelValue"]),
                e("div", Er, [
                  h.value.length > 0 ? (s(), o("div", Mr, [
                    (s(!0), o(V, null, oe(h.value, (ne) => (s(), o("div", {
                      key: ne.package_id,
                      class: "node-search-result-item",
                      onClick: (pe) => $e(ne)
                    }, [
                      e("div", Rr, [
                        e("code", Lr, a(ne.package_id), 1),
                        ne.match_confidence ? (s(), R(Zt, {
                          key: 0,
                          confidence: ne.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : d("", !0)
                      ]),
                      ne.description ? (s(), o("div", zr, a(ne.description), 1)) : d("", !0)
                    ], 8, Tr))), 128))
                  ])) : y.value ? (s(), o("div", Pr, "Searching...")) : r.value ? (s(), o("div", Dr, 'No packages found matching "' + a(r.value) + '"', 1)) : (s(), o("div", Nr, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : d("", !0)
        ])),
        (s(), R(We, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Le(I, ["self"])
          }, [
            e("div", Ur, [
              e("div", { class: "node-modal-header" }, [
                ge[10] || (ge[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: I
                }, "✕")
              ]),
              e("div", Or, [
                k(it, {
                  modelValue: v.value,
                  "onUpdate:modelValue": ge[5] || (ge[5] = (ne) => v.value = ne),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Br, [
                  k(ve, {
                    variant: "secondary",
                    onClick: I
                  }, {
                    default: i(() => [...ge[11] || (ge[11] = [
                      p("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(ve, {
                    variant: "primary",
                    disabled: !v.value.trim(),
                    onClick: Ue
                  }, {
                    default: i(() => [...ge[12] || (ge[12] = [
                      p(" Add Package ", -1)
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
}), Ar = /* @__PURE__ */ te(Fr, [["__scopeId", "data-v-281581bc"]]), Vr = { class: "node-info" }, Wr = { class: "node-info-text" }, Gr = { class: "item-body" }, jr = {
  key: 0,
  class: "resolved-state"
}, Hr = {
  key: 1,
  class: "multiple-options"
}, qr = { class: "options-list" }, Kr = ["onClick"], Jr = ["name", "value", "checked", "onChange"], Yr = { class: "option-content" }, Xr = { class: "option-header" }, Qr = { class: "option-filename" }, Zr = { class: "option-meta" }, ed = { class: "option-size" }, td = { class: "option-category" }, sd = { class: "option-path" }, od = { class: "action-buttons" }, nd = {
  key: 2,
  class: "unresolved"
}, ad = { class: "action-buttons" }, ld = /* @__PURE__ */ ee({
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
    const n = t, l = c, f = N(() => !!n.choice);
    N(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.action;
    }), N(() => {
      var r, v;
      return ((v = (r = n.choice) == null ? void 0 : r.selected_model) == null ? void 0 : v.filename) || "selected";
    });
    const g = N(() => {
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
    function u(r) {
      l("option-selected", r);
    }
    function m(r) {
      if (!r) return "Unknown";
      const v = r / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(r / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (r, v) => (s(), o("div", {
      class: me(["model-resolution-item", { resolved: f.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", Vr, [
        e("span", Wr, [
          v[7] || (v[7] = p("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: me(["status-badge", g.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", Gr, [
        f.value ? (s(), o("div", jr, [
          k(ve, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (h) => l("clear-choice"))
          }, {
            default: i(() => [...v[8] || (v[8] = [
              p(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Hr, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", qr, [
            (s(!0), o(V, null, oe(t.options, (h, y) => (s(), o("label", {
              key: h.model.hash,
              class: me(["option-card", { selected: t.selectedOptionIndex === y }]),
              onClick: (b) => u(y)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: y,
                checked: t.selectedOptionIndex === y,
                onChange: (b) => u(y)
              }, null, 40, Jr),
              e("div", Yr, [
                e("div", Xr, [
                  e("span", Qr, a(h.model.filename), 1),
                  k(Zt, {
                    confidence: h.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Zr, [
                  e("span", ed, a(m(h.model.size)), 1),
                  e("span", td, a(h.model.category), 1)
                ]),
                e("div", sd, a(h.model.relative_path), 1)
              ])
            ], 10, Kr))), 128))
          ]),
          e("div", od, [
            k(ve, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (h) => l("search"))
            }, {
              default: i(() => [...v[9] || (v[9] = [
                p(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(ve, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (h) => l("download-url"))
            }, {
              default: i(() => [...v[10] || (v[10] = [
                p(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(ve, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (h) => l("mark-optional"))
            }, {
              default: i(() => [...v[11] || (v[11] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", nd, [
          v[16] || (v[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", ad, [
            k(ve, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (h) => l("search"))
            }, {
              default: i(() => [...v[13] || (v[13] = [
                p(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(ve, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (h) => l("download-url"))
            }, {
              default: i(() => [...v[14] || (v[14] = [
                p(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(ve, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (h) => l("mark-optional"))
            }, {
              default: i(() => [...v[15] || (v[15] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), id = /* @__PURE__ */ te(ld, [["__scopeId", "data-v-8a82fefa"]]), rd = { class: "model-resolution-step" }, dd = { class: "step-header" }, cd = { class: "step-info" }, ud = { class: "step-title" }, md = { class: "step-description" }, vd = { class: "stat-badge" }, fd = {
  key: 1,
  class: "step-body"
}, gd = {
  key: 2,
  class: "empty-state"
}, pd = { class: "model-search-modal" }, hd = { class: "model-modal-body" }, yd = {
  key: 0,
  class: "model-search-results"
}, wd = ["onClick"], kd = { class: "model-result-header" }, bd = { class: "model-result-filename" }, _d = { class: "model-result-meta" }, $d = { class: "model-result-category" }, Cd = { class: "model-result-size" }, xd = {
  key: 0,
  class: "model-result-path"
}, Sd = {
  key: 1,
  class: "model-no-results"
}, Id = {
  key: 2,
  class: "model-searching"
}, Ed = { class: "model-download-url-modal" }, Md = { class: "model-modal-body" }, Td = { class: "model-input-group" }, Rd = { class: "model-input-group" }, Ld = { class: "model-modal-actions" }, zd = /* @__PURE__ */ ee({
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
    function l(P) {
      var I;
      return P && ((I = n[P]) == null ? void 0 : I[0]) || null;
    }
    const f = t, g = c, u = _(0), m = _(!1), r = _(!1), v = _(""), h = _(""), y = _(""), b = _([]), w = _(!1), L = N(() => f.models[u.value]), M = N(() => f.models.some((P) => P.is_download_intent)), $ = N(() => f.models.filter(
      (P) => f.modelChoices.has(P.filename) || P.is_download_intent
    ).length), C = N(() => {
      var I;
      if (!L.value) return "";
      const P = l((I = L.value.reference) == null ? void 0 : I.node_type);
      return P ? `${P}/${L.value.filename}` : "";
    }), B = N(() => {
      var I;
      if (!L.value) return "not-found";
      const P = f.modelChoices.get(L.value.filename);
      if (P)
        switch (P.action) {
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
      return L.value.is_download_intent ? "download" : (I = L.value.options) != null && I.length ? "ambiguous" : "not-found";
    }), x = N(() => {
      var I, re;
      if (!L.value) return;
      const P = f.modelChoices.get(L.value.filename);
      if (P)
        switch (P.action) {
          case "select":
            return (I = P.selected_model) != null && I.filename ? `→ ${P.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return L.value.is_download_intent ? "Pending Download" : (re = L.value.options) != null && re.length ? `${L.value.options.length} matches` : "Not Found";
    });
    function T(P) {
      P >= 0 && P < f.models.length && (u.value = P);
    }
    function K() {
      L.value && g("mark-optional", L.value.filename);
    }
    function A() {
      L.value && g("skip", L.value.filename);
    }
    function W(P) {
      L.value && g("option-selected", L.value.filename, P);
    }
    function E() {
      L.value && g("clear-choice", L.value.filename);
    }
    function z() {
      L.value && (v.value = L.value.filename, m.value = !0);
    }
    function O() {
      L.value && (h.value = L.value.download_source || "", y.value = L.value.target_path || C.value, r.value = !0);
    }
    function le() {
      m.value = !1, v.value = "", b.value = [];
    }
    function se() {
      r.value = !1, h.value = "", y.value = "";
    }
    function Y() {
      w.value = !0, setTimeout(() => {
        w.value = !1;
      }, 300);
    }
    function de(P) {
      L.value && le();
    }
    function J() {
      !L.value || !h.value.trim() || (g("download-url", L.value.filename, h.value.trim(), y.value.trim() || void 0), se());
    }
    function D(P) {
      if (!P) return "Unknown";
      const I = P / (1024 * 1024 * 1024);
      return I >= 1 ? `${I.toFixed(2)} GB` : `${(P / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (P, I) => {
      var re, Z, ye;
      return s(), o("div", rd, [
        e("div", dd, [
          e("div", cd, [
            e("h3", ud, a(M.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", md, a(M.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", vd, a($.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        L.value ? (s(), R(Os, {
          key: 0,
          "item-name": L.value.filename,
          "current-index": u.value,
          "total-items": t.models.length,
          onPrev: I[0] || (I[0] = ($e) => T(u.value - 1)),
          onNext: I[1] || (I[1] = ($e) => T(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
        L.value ? (s(), o("div", fd, [
          k(id, {
            filename: L.value.filename,
            "node-type": ((re = L.value.reference) == null ? void 0 : re.node_type) || "Unknown",
            "has-multiple-options": !!((Z = L.value.options) != null && Z.length),
            options: L.value.options,
            choice: (ye = t.modelChoices) == null ? void 0 : ye.get(L.value.filename),
            status: B.value,
            "status-label": x.value,
            onMarkOptional: K,
            onSkip: A,
            onDownloadUrl: O,
            onSearch: z,
            onOptionSelected: W,
            onClearChoice: E
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", gd, [...I[5] || (I[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), R(We, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Le(le, ["self"])
          }, [
            e("div", pd, [
              e("div", { class: "model-modal-header" }, [
                I[6] || (I[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: le
                }, "✕")
              ]),
              e("div", hd, [
                k(it, {
                  modelValue: v.value,
                  "onUpdate:modelValue": I[2] || (I[2] = ($e) => v.value = $e),
                  placeholder: "Search by filename, category...",
                  onInput: Y
                }, null, 8, ["modelValue"]),
                b.value.length > 0 ? (s(), o("div", yd, [
                  (s(!0), o(V, null, oe(b.value, ($e) => (s(), o("div", {
                    key: $e.hash,
                    class: "model-search-result-item",
                    onClick: (Me) => de()
                  }, [
                    e("div", kd, [
                      e("code", bd, a($e.filename), 1)
                    ]),
                    e("div", _d, [
                      e("span", $d, a($e.category), 1),
                      e("span", Cd, a(D($e.size)), 1)
                    ]),
                    $e.relative_path ? (s(), o("div", xd, a($e.relative_path), 1)) : d("", !0)
                  ], 8, wd))), 128))
                ])) : v.value && !w.value ? (s(), o("div", Sd, ' No models found matching "' + a(v.value) + '" ', 1)) : d("", !0),
                w.value ? (s(), o("div", Id, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (s(), R(We, { to: "body" }, [
          r.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Le(se, ["self"])
          }, [
            e("div", Ed, [
              e("div", { class: "model-modal-header" }, [
                I[7] || (I[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: se
                }, "✕")
              ]),
              e("div", Md, [
                e("div", Td, [
                  I[8] || (I[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  k(it, {
                    modelValue: h.value,
                    "onUpdate:modelValue": I[3] || (I[3] = ($e) => h.value = $e),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Rd, [
                  I[9] || (I[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  k(it, {
                    modelValue: y.value,
                    "onUpdate:modelValue": I[4] || (I[4] = ($e) => y.value = $e),
                    placeholder: C.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", Ld, [
                  k(ve, {
                    variant: "secondary",
                    onClick: se
                  }, {
                    default: i(() => [...I[10] || (I[10] = [
                      p("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(ve, {
                    variant: "primary",
                    disabled: !h.value.trim() || !y.value.trim(),
                    onClick: J
                  }, {
                    default: i(() => [...I[11] || (I[11] = [
                      p(" Queue Download ", -1)
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
}), Pd = /* @__PURE__ */ te(zd, [["__scopeId", "data-v-c6acbada"]]), Dd = { class: "applying-step" }, Nd = {
  key: 0,
  class: "phase-content"
}, Ud = {
  key: 1,
  class: "phase-content"
}, Od = { class: "phase-description" }, Bd = { class: "overall-progress" }, Fd = { class: "progress-bar" }, Ad = { class: "progress-label" }, Vd = { class: "install-list" }, Wd = { class: "install-icon" }, Gd = { key: 0 }, jd = {
  key: 1,
  class: "spinner"
}, Hd = { key: 2 }, qd = { key: 3 }, Kd = {
  key: 0,
  class: "install-error"
}, Jd = {
  key: 2,
  class: "phase-content"
}, Yd = { class: "phase-header" }, Xd = { class: "phase-title" }, Qd = { class: "completion-summary" }, Zd = {
  key: 0,
  class: "summary-item success"
}, ec = { class: "summary-text" }, tc = {
  key: 1,
  class: "summary-item error"
}, sc = { class: "summary-text" }, oc = {
  key: 2,
  class: "failed-list"
}, nc = { class: "failed-node-id" }, ac = { class: "failed-error" }, lc = {
  key: 4,
  class: "summary-item success"
}, ic = {
  key: 5,
  class: "restart-prompt"
}, rc = {
  key: 3,
  class: "phase-content error"
}, dc = { class: "error-message" }, cc = /* @__PURE__ */ ee({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const c = t, n = N(() => {
      var v, h;
      const m = ((v = c.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || c.progress.nodesToInstall.length;
      if (!m) return 0;
      const r = ((h = c.progress.nodeInstallProgress) == null ? void 0 : h.completedNodes.length) ?? 0;
      return Math.round(r / m * 100);
    }), l = N(() => {
      var m;
      return ((m = c.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.filter((r) => !r.success)) || [];
    }), f = N(() => l.value.length > 0);
    function g(m, r) {
      var h, y;
      const v = (h = c.progress.nodeInstallProgress) == null ? void 0 : h.completedNodes.find((b) => b.node_id === m);
      return v ? v.success ? "complete" : "failed" : ((y = c.progress.nodeInstallProgress) == null ? void 0 : y.currentIndex) === r ? "installing" : "pending";
    }
    function u(m) {
      var r, v;
      return (v = (r = c.progress.nodeInstallProgress) == null ? void 0 : r.completedNodes.find((h) => h.node_id === m)) == null ? void 0 : v.error;
    }
    return (m, r) => {
      var v, h, y, b;
      return s(), o("div", Dd, [
        t.progress.phase === "resolving" ? (s(), o("div", Nd, [...r[2] || (r[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", Ud, [
          r[3] || (r[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", Od, " Installing " + a((((v = t.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + a(((h = t.progress.nodeInstallProgress) == null ? void 0 : h.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Bd, [
            e("div", Fd, [
              e("div", {
                class: "progress-fill",
                style: wt({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Ad, a(((y = t.progress.nodeInstallProgress) == null ? void 0 : y.completedNodes.length) ?? 0) + " / " + a(((b = t.progress.nodeInstallProgress) == null ? void 0 : b.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Vd, [
            (s(!0), o(V, null, oe(t.progress.nodesToInstall, (w, L) => (s(), o("div", {
              key: w,
              class: me(["install-item", g(w, L)])
            }, [
              e("span", Wd, [
                g(w, L) === "pending" ? (s(), o("span", Gd, "○")) : g(w, L) === "installing" ? (s(), o("span", jd, "◌")) : g(w, L) === "complete" ? (s(), o("span", Hd, "✓")) : g(w, L) === "failed" ? (s(), o("span", qd, "✗")) : d("", !0)
              ]),
              e("code", null, a(w), 1),
              u(w) ? (s(), o("span", Kd, a(u(w)), 1)) : d("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", Jd, [
          e("div", Yd, [
            e("span", {
              class: me(["phase-icon", f.value ? "warning" : "success"])
            }, a(f.value ? "⚠" : "✓"), 3),
            e("h3", Xd, a(f.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", Qd, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", Zd, [
              r[4] || (r[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", ec, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : d("", !0),
            l.value.length > 0 ? (s(), o("div", tc, [
              r[5] || (r[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", sc, a(l.value.length) + " package" + a(l.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : d("", !0),
            l.value.length > 0 ? (s(), o("div", oc, [
              (s(!0), o(V, null, oe(l.value, (w) => (s(), o("div", {
                key: w.node_id,
                class: "failed-item"
              }, [
                e("code", nc, a(w.node_id), 1),
                e("span", ac, a(w.error), 1)
              ]))), 128))
            ])) : d("", !0),
            l.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: r[0] || (r[0] = (w) => m.$emit("retry-failed"))
            }, " Retry Failed (" + a(l.value.length) + ") ", 1)) : d("", !0),
            f.value ? d("", !0) : (s(), o("div", lc, [...r[6] || (r[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            r[8] || (r[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", ic, [
              r[7] || (r[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: r[1] || (r[1] = (w) => m.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : d("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", rc, [
          r[9] || (r[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", dc, a(t.progress.error), 1)
        ])) : d("", !0)
      ]);
    };
  }
}), uc = /* @__PURE__ */ te(cc, [["__scopeId", "data-v-5efaae58"]]), mc = {
  key: 0,
  class: "loading-state"
}, vc = {
  key: 1,
  class: "wizard-content"
}, fc = {
  key: 0,
  class: "step-content"
}, gc = { class: "analysis-summary" }, pc = { class: "analysis-header" }, hc = { class: "summary-description" }, yc = { class: "stats-grid" }, wc = { class: "stat-card" }, kc = { class: "stat-items" }, bc = {
  key: 0,
  class: "stat-item success"
}, _c = { class: "stat-count" }, $c = {
  key: 1,
  class: "stat-item info"
}, Cc = { class: "stat-count" }, xc = {
  key: 2,
  class: "stat-item warning"
}, Sc = { class: "stat-count" }, Ic = {
  key: 3,
  class: "stat-item error"
}, Ec = { class: "stat-count" }, Mc = { class: "stat-card" }, Tc = { class: "stat-items" }, Rc = { class: "stat-item success" }, Lc = { class: "stat-count" }, zc = {
  key: 0,
  class: "stat-item info"
}, Pc = { class: "stat-count" }, Dc = {
  key: 1,
  class: "stat-item warning"
}, Nc = { class: "stat-count" }, Uc = {
  key: 2,
  class: "stat-item warning"
}, Oc = { class: "stat-count" }, Bc = {
  key: 3,
  class: "stat-item error"
}, Fc = { class: "stat-count" }, Ac = {
  key: 0,
  class: "status-message warning"
}, Vc = { class: "status-text" }, Wc = {
  key: 1,
  class: "status-message info"
}, Gc = { class: "status-text" }, jc = {
  key: 2,
  class: "status-message info"
}, Hc = { class: "status-text" }, qc = {
  key: 3,
  class: "status-message warning"
}, Kc = { class: "status-text" }, Jc = {
  key: 4,
  class: "status-message success"
}, Yc = {
  key: 5,
  class: "category-mismatch-section"
}, Xc = { class: "mismatch-list" }, Qc = { class: "mismatch-path" }, Zc = { class: "mismatch-target" }, eu = {
  key: 3,
  class: "step-content"
}, tu = { class: "review-summary" }, su = { class: "review-stats" }, ou = { class: "review-stat" }, nu = { class: "stat-value" }, au = { class: "review-stat" }, lu = { class: "stat-value" }, iu = { class: "review-stat" }, ru = { class: "stat-value" }, du = { class: "review-stat" }, cu = { class: "stat-value" }, uu = {
  key: 0,
  class: "review-section"
}, mu = { class: "section-title" }, vu = { class: "review-items" }, fu = { class: "item-name" }, gu = { class: "item-choice" }, pu = {
  key: 0,
  class: "choice-badge install"
}, hu = {
  key: 1,
  class: "choice-badge skip"
}, yu = {
  key: 1,
  class: "review-section"
}, wu = { class: "section-title" }, ku = { class: "review-items" }, bu = { class: "item-name" }, _u = { class: "item-choice" }, $u = {
  key: 0,
  class: "choice-badge install"
}, Cu = {
  key: 1,
  class: "choice-badge optional"
}, xu = {
  key: 2,
  class: "choice-badge skip"
}, Su = {
  key: 1,
  class: "choice-badge pending"
}, Iu = {
  key: 2,
  class: "review-section"
}, Eu = { class: "section-title" }, Mu = { class: "review-items" }, Tu = { class: "item-name" }, Ru = { class: "item-choice" }, Lu = {
  key: 0,
  class: "choice-badge install"
}, zu = {
  key: 1,
  class: "choice-badge download"
}, Pu = {
  key: 2,
  class: "choice-badge optional"
}, Du = {
  key: 3,
  class: "choice-badge skip"
}, Nu = {
  key: 4,
  class: "choice-badge skip"
}, Uu = {
  key: 1,
  class: "choice-badge download"
}, Ou = {
  key: 2,
  class: "choice-badge pending"
}, Bu = {
  key: 3,
  class: "no-choices"
}, Fu = /* @__PURE__ */ ee({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, l = c, { analyzeWorkflow: f, applyResolution: g, installNodes: u, queueModelDownloads: m, progress: r, resetProgress: v } = Us(), { loadPendingDownloads: h } = Gt(), { openFileLocation: y } = Ae(), b = _(null), w = _(!1), L = _(!1), M = _(null), $ = _("analysis"), C = _([]), B = _(/* @__PURE__ */ new Map()), x = _(/* @__PURE__ */ new Map()), T = _(/* @__PURE__ */ new Set()), K = N(() => {
      const H = [
        { id: "analysis", label: "Analysis" }
      ];
      return (W.value || O.value) && H.push({ id: "nodes", label: "Nodes" }), (E.value || z.value) && H.push({ id: "models", label: "Models" }), H.push({ id: "review", label: "Review" }), $.value === "applying" && H.push({ id: "applying", label: "Applying" }), H;
    }), A = N(() => b.value ? b.value.stats.needs_user_input : !1), W = N(() => b.value ? b.value.nodes.unresolved.length > 0 || b.value.nodes.ambiguous.length > 0 : !1), E = N(() => b.value ? b.value.models.unresolved.length > 0 || b.value.models.ambiguous.length > 0 : !1), z = N(() => b.value ? b.value.stats.download_intents > 0 : !1), O = N(() => b.value ? b.value.stats.nodes_needing_installation > 0 : !1), le = N(() => b.value ? b.value.nodes.resolved.length : 0), se = N(() => b.value ? b.value.models.resolved.filter((H) => H.has_category_mismatch) : []), Y = N(() => se.value.length > 0), de = N(() => {
      if (!b.value) return [];
      const H = b.value.nodes.resolved.filter((F) => !F.is_installed), S = /* @__PURE__ */ new Set();
      return H.filter((F) => S.has(F.package.package_id) ? !1 : (S.add(F.package.package_id), !0));
    }), J = N(() => {
      if (!b.value) return [];
      const H = b.value.nodes.resolved.filter((F) => !F.is_installed), S = /* @__PURE__ */ new Map();
      for (const F of H) {
        const Q = S.get(F.package.package_id);
        Q ? Q.node_types_count++ : S.set(F.package.package_id, {
          package_id: F.package.package_id,
          title: F.package.title,
          node_types_count: 1
        });
      }
      return Array.from(S.values());
    }), D = N(() => de.value.filter((H) => !T.value.has(H.package.package_id))), P = N(() => b.value ? b.value.models.resolved.filter((H) => H.match_type === "download_intent").map((H) => ({
      filename: H.reference.widget_value,
      reference: H.reference,
      is_download_intent: !0,
      resolved_model: H.model,
      download_source: H.download_source,
      target_path: H.target_path
    })) : []), I = N(() => {
      if (!b.value) return [];
      const H = b.value.nodes.unresolved.map((F) => ({
        node_type: F.reference.node_type,
        reason: F.reason,
        is_unresolved: !0,
        options: void 0
      })), S = b.value.nodes.ambiguous.map((F) => ({
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
      return [...H, ...S];
    }), re = N(() => {
      if (!b.value) return [];
      const H = b.value.models.unresolved.map((F) => ({
        filename: F.reference.widget_value,
        reference: F.reference,
        reason: F.reason,
        is_unresolved: !0,
        options: void 0
      })), S = b.value.models.ambiguous.map((F) => ({
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
      return [...H, ...S];
    }), Z = N(() => {
      const H = re.value, S = P.value.map((F) => ({
        filename: F.filename,
        reference: F.reference,
        is_download_intent: !0,
        resolved_model: F.resolved_model,
        download_source: F.download_source,
        target_path: F.target_path,
        options: void 0
      }));
      return [...H, ...S];
    }), ye = N(() => {
      let H = D.value.length;
      for (const S of B.value.values())
        S.action === "install" && H++;
      for (const S of x.value.values())
        S.action === "select" && H++;
      return H;
    }), $e = N(() => {
      let H = 0;
      for (const S of x.value.values())
        S.action === "download" && H++;
      return H;
    }), Me = N(() => {
      let H = 0;
      for (const S of B.value.values())
        S.action === "optional" && H++;
      for (const S of x.value.values())
        S.action === "optional" && H++;
      return H;
    }), Ue = N(() => {
      let H = T.value.size;
      for (const S of B.value.values())
        S.action === "skip" && H++;
      for (const S of x.value.values())
        S.action === "skip" && H++;
      for (const S of I.value)
        B.value.has(S.node_type) || H++;
      for (const S of re.value)
        x.value.has(S.filename) || H++;
      return H;
    }), ce = N(() => {
      const H = {};
      if (H.analysis = { resolved: 1, total: 1 }, W.value) {
        const S = I.value.length, F = I.value.filter(
          (Q) => B.value.has(Q.node_type)
        ).length;
        H.nodes = { resolved: F, total: S };
      }
      if (E.value || z.value) {
        const S = Z.value.length, F = Z.value.filter(
          (Q) => x.value.has(Q.filename) || Q.is_download_intent
        ).length;
        H.models = { resolved: F, total: S };
      }
      if (H.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const S = r.totalFiles || 1, F = r.completedFiles.length;
        H.applying = { resolved: F, total: S };
      }
      return H;
    });
    function ge(H) {
      $.value = H;
    }
    function Ie() {
      const H = K.value.findIndex((S) => S.id === $.value);
      H > 0 && ($.value = K.value[H - 1].id);
    }
    function X() {
      const H = K.value.findIndex((S) => S.id === $.value);
      H < K.value.length - 1 && ($.value = K.value[H + 1].id);
    }
    async function ne() {
      w.value = !0, M.value = null;
      try {
        b.value = await f(n.workflowName);
      } catch (H) {
        M.value = H instanceof Error ? H.message : "Failed to analyze workflow";
      } finally {
        w.value = !1;
      }
    }
    function pe() {
      C.value.includes("analysis") || C.value.push("analysis"), W.value || O.value ? $.value = "nodes" : E.value || z.value ? $.value = "models" : $.value = "review";
    }
    function ze(H) {
      B.value.set(H, { action: "optional" });
    }
    function st(H) {
      B.value.set(H, { action: "skip" });
    }
    function dt(H, S) {
      var Q;
      const F = I.value.find((he) => he.node_type === H);
      (Q = F == null ? void 0 : F.options) != null && Q[S] && B.value.set(H, {
        action: "install",
        package_id: F.options[S].package_id
      });
    }
    function Se(H, S) {
      B.value.set(H, {
        action: "install",
        package_id: S
      });
    }
    function Qe(H) {
      B.value.delete(H);
    }
    function Ye(H) {
      T.value.has(H) ? T.value.delete(H) : T.value.add(H);
    }
    function Ge(H) {
      x.value.set(H, { action: "optional" });
    }
    function gt(H) {
      x.value.set(H, { action: "skip" });
    }
    function we(H, S) {
      var Q;
      const F = re.value.find((he) => he.filename === H);
      (Q = F == null ? void 0 : F.options) != null && Q[S] && x.value.set(H, {
        action: "select",
        selected_model: F.options[S].model
      });
    }
    function Ve(H, S, F) {
      x.value.set(H, {
        action: "download",
        url: S,
        target_path: F
      });
    }
    function ct(H) {
      x.value.delete(H);
    }
    async function ot(H) {
      try {
        await y(H);
      } catch (S) {
        M.value = S instanceof Error ? S.message : "Failed to open file location";
      }
    }
    async function Te() {
      var H;
      L.value = !0, M.value = null, v(), r.phase = "resolving", $.value = "applying";
      try {
        const S = await g(n.workflowName, B.value, x.value, T.value);
        S.models_to_download && S.models_to_download.length > 0 && m(n.workflowName, S.models_to_download);
        const F = [
          ...S.nodes_to_install || [],
          ...D.value.map((he) => he.package.package_id)
        ];
        r.nodesToInstall = [...new Set(F)], r.nodesToInstall.length > 0 && await u(n.workflowName), r.phase = "complete", await h();
        const Q = r.installError || ((H = r.nodeInstallProgress) == null ? void 0 : H.completedNodes.some((he) => !he.success));
        !r.needsRestart && !Q && setTimeout(() => {
          l("refresh"), l("install"), l("close");
        }, 1500);
      } catch (S) {
        M.value = S instanceof Error ? S.message : "Failed to apply resolution", r.error = M.value, r.phase = "error";
      } finally {
        L.value = !1;
      }
    }
    function ue() {
      l("refresh"), l("restart"), l("close");
    }
    async function j() {
      var S;
      const H = ((S = r.nodeInstallProgress) == null ? void 0 : S.completedNodes.filter((F) => !F.success).map((F) => F.node_id)) || [];
      if (H.length !== 0) {
        r.phase = "installing", r.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: H.length
        }, r.nodesToInstall = H, r.nodesInstalled = [], r.installError = void 0;
        try {
          await u(n.workflowName), r.phase = "complete";
        } catch (F) {
          r.error = F instanceof Error ? F.message : "Retry failed", r.phase = "error";
        }
      }
    }
    return Ne(ne), (H, S) => (s(), R(Je, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: w.value,
      error: M.value || void 0,
      "fixed-height": !0,
      onClose: S[1] || (S[1] = (F) => l("close"))
    }, {
      body: i(() => [
        w.value && !b.value ? (s(), o("div", mc, [...S[2] || (S[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : b.value ? (s(), o("div", vc, [
          k(ki, {
            steps: K.value,
            "current-step": $.value,
            "completed-steps": C.value,
            "step-stats": ce.value,
            onStepChange: ge
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (s(), o("div", fc, [
            e("div", gc, [
              e("div", pc, [
                S[3] || (S[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", hc, " Found " + a(b.value.stats.total_nodes) + " nodes and " + a(b.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", yc, [
                e("div", wc, [
                  S[12] || (S[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", kc, [
                    le.value > 0 ? (s(), o("div", bc, [
                      S[4] || (S[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", _c, a(le.value), 1),
                      S[5] || (S[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : d("", !0),
                    b.value.stats.packages_needing_installation > 0 ? (s(), o("div", $c, [
                      S[6] || (S[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Cc, a(b.value.stats.packages_needing_installation), 1),
                      S[7] || (S[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : d("", !0),
                    b.value.nodes.ambiguous.length > 0 ? (s(), o("div", xc, [
                      S[8] || (S[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Sc, a(b.value.nodes.ambiguous.length), 1),
                      S[9] || (S[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    b.value.nodes.unresolved.length > 0 ? (s(), o("div", Ic, [
                      S[10] || (S[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Ec, a(b.value.nodes.unresolved.length), 1),
                      S[11] || (S[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ]),
                e("div", Mc, [
                  S[23] || (S[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Tc, [
                    e("div", Rc, [
                      S[13] || (S[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Lc, a(b.value.models.resolved.length - b.value.stats.download_intents - b.value.stats.models_with_category_mismatch), 1),
                      S[14] || (S[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.stats.download_intents > 0 ? (s(), o("div", zc, [
                      S[15] || (S[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Pc, a(b.value.stats.download_intents), 1),
                      S[16] || (S[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : d("", !0),
                    Y.value ? (s(), o("div", Dc, [
                      S[17] || (S[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", Nc, a(se.value.length), 1),
                      S[18] || (S[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : d("", !0),
                    b.value.models.ambiguous.length > 0 ? (s(), o("div", Uc, [
                      S[19] || (S[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Oc, a(b.value.models.ambiguous.length), 1),
                      S[20] || (S[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    b.value.models.unresolved.length > 0 ? (s(), o("div", Bc, [
                      S[21] || (S[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Fc, a(b.value.models.unresolved.length), 1),
                      S[22] || (S[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ])
              ]),
              A.value ? (s(), o("div", Ac, [
                S[24] || (S[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Vc, a(I.value.length + re.value.length) + " items need your input", 1)
              ])) : O.value ? (s(), o("div", Wc, [
                S[25] || (S[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Gc, a(b.value.stats.packages_needing_installation) + " package" + a(b.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(b.value.stats.nodes_needing_installation) + " node type" + a(b.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(z.value ? `, ${b.value.stats.download_intents} model${b.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : z.value ? (s(), o("div", jc, [
                S[26] || (S[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Hc, a(b.value.stats.download_intents) + " model" + a(b.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : Y.value ? (s(), o("div", qc, [
                S[27] || (S[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Kc, a(se.value.length) + " model" + a(se.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", Jc, [...S[28] || (S[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              Y.value ? (s(), o("div", Yc, [
                S[31] || (S[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", Xc, [
                  (s(!0), o(V, null, oe(se.value, (F) => {
                    var Q, he;
                    return s(), o("div", {
                      key: F.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", Qc, a(F.actual_category) + "/" + a((Q = F.model) == null ? void 0 : Q.filename), 1),
                      S[30] || (S[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", Zc, a((he = F.expected_categories) == null ? void 0 : he[0]) + "/", 1),
                      F.file_path ? (s(), R(ve, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Be) => ot(F.file_path)
                      }, {
                        default: i(() => [...S[29] || (S[29] = [
                          p(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : d("", !0)
                    ]);
                  }), 128))
                ])
              ])) : d("", !0)
            ])
          ])) : d("", !0),
          $.value === "nodes" ? (s(), R(Ar, {
            key: 1,
            nodes: I.value,
            "node-choices": B.value,
            "auto-resolved-packages": J.value,
            "skipped-packages": T.value,
            onMarkOptional: ze,
            onSkip: st,
            onOptionSelected: dt,
            onManualEntry: Se,
            onClearChoice: Qe,
            onPackageSkip: Ye
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : d("", !0),
          $.value === "models" ? (s(), R(Pd, {
            key: 2,
            models: Z.value,
            "model-choices": x.value,
            onMarkOptional: Ge,
            onSkip: gt,
            onOptionSelected: we,
            onDownloadUrl: Ve,
            onClearChoice: ct
          }, null, 8, ["models", "model-choices"])) : d("", !0),
          $.value === "review" ? (s(), o("div", eu, [
            e("div", tu, [
              S[36] || (S[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", su, [
                e("div", ou, [
                  e("span", nu, a(ye.value), 1),
                  S[32] || (S[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", au, [
                  e("span", lu, a($e.value), 1),
                  S[33] || (S[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", iu, [
                  e("span", ru, a(Me.value), 1),
                  S[34] || (S[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", du, [
                  e("span", cu, a(Ue.value), 1),
                  S[35] || (S[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              J.value.length > 0 ? (s(), o("div", uu, [
                e("h4", mu, "Node Packages (" + a(J.value.length) + ")", 1),
                e("div", vu, [
                  (s(!0), o(V, null, oe(J.value, (F) => (s(), o("div", {
                    key: F.package_id,
                    class: "review-item"
                  }, [
                    e("code", fu, a(F.package_id), 1),
                    e("div", gu, [
                      T.value.has(F.package_id) ? (s(), o("span", hu, "Skipped")) : (s(), o("span", pu, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : d("", !0),
              I.value.length > 0 ? (s(), o("div", yu, [
                e("h4", wu, "Node Choices (" + a(I.value.length) + ")", 1),
                e("div", ku, [
                  (s(!0), o(V, null, oe(I.value, (F) => {
                    var Q, he, Be, pt;
                    return s(), o("div", {
                      key: F.node_type,
                      class: "review-item"
                    }, [
                      e("code", bu, a(F.node_type), 1),
                      e("div", _u, [
                        B.value.has(F.node_type) ? (s(), o(V, { key: 0 }, [
                          ((Q = B.value.get(F.node_type)) == null ? void 0 : Q.action) === "install" ? (s(), o("span", $u, a((he = B.value.get(F.node_type)) == null ? void 0 : he.package_id), 1)) : ((Be = B.value.get(F.node_type)) == null ? void 0 : Be.action) === "optional" ? (s(), o("span", Cu, " Optional ")) : ((pt = B.value.get(F.node_type)) == null ? void 0 : pt.action) === "skip" ? (s(), o("span", xu, " Skip ")) : d("", !0)
                        ], 64)) : (s(), o("span", Su, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              Z.value.length > 0 ? (s(), o("div", Iu, [
                e("h4", Eu, "Models (" + a(Z.value.length) + ")", 1),
                e("div", Mu, [
                  (s(!0), o(V, null, oe(Z.value, (F) => {
                    var Q, he, Be, pt, nt, xt, ht;
                    return s(), o("div", {
                      key: F.filename,
                      class: "review-item"
                    }, [
                      e("code", Tu, a(F.filename), 1),
                      e("div", Ru, [
                        x.value.has(F.filename) ? (s(), o(V, { key: 0 }, [
                          ((Q = x.value.get(F.filename)) == null ? void 0 : Q.action) === "select" ? (s(), o("span", Lu, a((Be = (he = x.value.get(F.filename)) == null ? void 0 : he.selected_model) == null ? void 0 : Be.filename), 1)) : ((pt = x.value.get(F.filename)) == null ? void 0 : pt.action) === "download" ? (s(), o("span", zu, " Download ")) : ((nt = x.value.get(F.filename)) == null ? void 0 : nt.action) === "optional" ? (s(), o("span", Pu, " Optional ")) : ((xt = x.value.get(F.filename)) == null ? void 0 : xt.action) === "skip" ? (s(), o("span", Du, " Skip ")) : ((ht = x.value.get(F.filename)) == null ? void 0 : ht.action) === "cancel_download" ? (s(), o("span", Nu, " Cancel Download ")) : d("", !0)
                        ], 64)) : F.is_download_intent ? (s(), o("span", Uu, " Pending Download ")) : (s(), o("span", Ou, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              de.value.length === 0 && I.value.length === 0 && Z.value.length === 0 ? (s(), o("div", Bu, " No dependencies need resolution. ")) : d("", !0)
            ])
          ])) : d("", !0),
          $.value === "applying" ? (s(), R(uc, {
            key: 4,
            progress: _e(r),
            onRestart: ue,
            onRetryFailed: j
          }, null, 8, ["progress"])) : d("", !0)
        ])) : d("", !0)
      ]),
      footer: i(() => [
        $.value !== "analysis" && $.value !== "applying" ? (s(), R(ve, {
          key: 0,
          variant: "secondary",
          disabled: L.value,
          onClick: Ie
        }, {
          default: i(() => [...S[37] || (S[37] = [
            p(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        S[41] || (S[41] = e("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || _e(r).phase === "complete" || _e(r).phase === "error" ? (s(), R(ve, {
          key: 1,
          variant: "secondary",
          onClick: S[0] || (S[0] = (F) => l("close"))
        }, {
          default: i(() => [
            p(a(_e(r).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : d("", !0),
        $.value === "analysis" ? (s(), R(ve, {
          key: 2,
          variant: "primary",
          disabled: w.value,
          onClick: pe
        }, {
          default: i(() => [...S[38] || (S[38] = [
            p(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        $.value === "nodes" ? (s(), R(ve, {
          key: 3,
          variant: "primary",
          onClick: X
        }, {
          default: i(() => [
            p(a(E.value || z.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : d("", !0),
        $.value === "models" ? (s(), R(ve, {
          key: 4,
          variant: "primary",
          onClick: X
        }, {
          default: i(() => [...S[39] || (S[39] = [
            p(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : d("", !0),
        $.value === "review" ? (s(), R(ve, {
          key: 5,
          variant: "primary",
          disabled: L.value,
          loading: L.value,
          onClick: Te
        }, {
          default: i(() => [...S[40] || (S[40] = [
            p(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Au = /* @__PURE__ */ te(Fu, [["__scopeId", "data-v-6276cf1d"]]), Vu = { class: "search-input-wrapper" }, Wu = ["value", "placeholder"], Gu = /* @__PURE__ */ ee({
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
    const n = t, l = c, f = _(null);
    let g;
    function u(r) {
      const v = r.target.value;
      n.debounce > 0 ? (clearTimeout(g), g = window.setTimeout(() => {
        l("update:modelValue", v);
      }, n.debounce)) : l("update:modelValue", v);
    }
    function m() {
      var r;
      l("update:modelValue", ""), l("clear"), (r = f.value) == null || r.focus();
    }
    return Ne(() => {
      n.autoFocus && f.value && f.value.focus();
    }), (r, v) => (s(), o("div", Vu, [
      e("input", {
        ref_key: "inputRef",
        ref: f,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: vt(m, ["escape"])
      }, null, 40, Wu),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), ju = /* @__PURE__ */ te(Gu, [["__scopeId", "data-v-266f857a"]]), Hu = { class: "search-bar" }, qu = /* @__PURE__ */ ee({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, n) => (s(), o("div", Hu, [
      k(ju, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (l) => c.$emit("update:modelValue", l)),
        onClear: n[1] || (n[1] = (l) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), zt = /* @__PURE__ */ te(qu, [["__scopeId", "data-v-3d51bbfd"]]), Ku = { class: "section-group" }, Ju = {
  key: 0,
  class: "section-content"
}, Yu = /* @__PURE__ */ ee({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const n = t, l = c, f = _(n.initiallyExpanded);
    function g() {
      n.collapsible && (f.value = !f.value, l("toggle", f.value));
    }
    return (u, m) => (s(), o("section", Ku, [
      k(tt, {
        count: t.count,
        clickable: t.collapsible,
        expanded: f.value,
        onClick: g
      }, {
        default: i(() => [
          p(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || f.value ? (s(), o("div", Ju, [
        Ce(u.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Fe = /* @__PURE__ */ te(Yu, [["__scopeId", "data-v-c48e33ed"]]), Xu = { class: "item-header" }, Qu = {
  key: 0,
  class: "item-icon"
}, Zu = { class: "item-info" }, em = {
  key: 0,
  class: "item-title"
}, tm = {
  key: 1,
  class: "item-subtitle"
}, sm = {
  key: 0,
  class: "item-details"
}, om = {
  key: 1,
  class: "item-actions"
}, nm = /* @__PURE__ */ ee({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, l = N(() => n.status ? `status-${n.status}` : "");
    return (f, g) => (s(), o("div", {
      class: me(["item-card", { clickable: t.clickable, compact: t.compact }, l.value]),
      onClick: g[0] || (g[0] = (u) => t.clickable && f.$emit("click"))
    }, [
      e("div", Xu, [
        f.$slots.icon ? (s(), o("span", Qu, [
          Ce(f.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        e("div", Zu, [
          f.$slots.title ? (s(), o("div", em, [
            Ce(f.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          f.$slots.subtitle ? (s(), o("div", tm, [
            Ce(f.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      f.$slots.details ? (s(), o("div", sm, [
        Ce(f.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      f.$slots.actions ? (s(), o("div", om, [
        Ce(f.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), He = /* @__PURE__ */ te(nm, [["__scopeId", "data-v-cc435e0e"]]), am = { class: "loading-state" }, lm = { class: "loading-message" }, im = /* @__PURE__ */ ee({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, n) => (s(), o("div", am, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", lm, a(t.message), 1)
    ]));
  }
}), kt = /* @__PURE__ */ te(im, [["__scopeId", "data-v-ad8436c9"]]), rm = { class: "error-state" }, dm = { class: "error-message" }, cm = /* @__PURE__ */ ee({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, n) => (s(), o("div", rm, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", dm, a(t.message), 1),
      t.retry ? (s(), R(ae, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (l) => c.$emit("retry"))
      }, {
        default: i(() => [...n[1] || (n[1] = [
          p(" Retry ", -1)
        ])]),
        _: 1
      })) : d("", !0)
    ]));
  }
}), bt = /* @__PURE__ */ te(cm, [["__scopeId", "data-v-5397be48"]]), um = /* @__PURE__ */ ee({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const l = n, { getWorkflows: f } = Ae();
    Ds();
    const g = _([]), u = _(!1), m = _(null), r = _(""), v = _(!0), h = _(!1), y = _(!1), b = _(!1), w = _(null), L = N(
      () => g.value.filter((D) => D.status === "broken")
    ), M = N(
      () => g.value.filter((D) => D.status === "new")
    ), $ = N(
      () => g.value.filter((D) => D.status === "modified")
    ), C = N(
      () => g.value.filter((D) => D.status === "synced")
    ), B = N(() => {
      if (!r.value.trim()) return g.value;
      const D = r.value.toLowerCase();
      return g.value.filter((P) => P.name.toLowerCase().includes(D));
    }), x = N(
      () => L.value.filter(
        (D) => !r.value.trim() || D.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), T = N(
      () => M.value.filter(
        (D) => !r.value.trim() || D.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), K = N(
      () => $.value.filter(
        (D) => !r.value.trim() || D.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), A = N(
      () => C.value.filter(
        (D) => !r.value.trim() || D.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), W = N(
      () => h.value ? A.value : A.value.slice(0, 5)
    );
    async function E(D = !1) {
      u.value = !0, m.value = null;
      try {
        g.value = await f(D);
      } catch (P) {
        m.value = P instanceof Error ? P.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    c({ loadWorkflows: E });
    function z(D) {
      w.value = D, y.value = !0;
    }
    function O(D) {
      w.value = D, b.value = !0;
    }
    function le() {
      l("refresh");
    }
    async function se() {
      b.value = !1, await E(!0);
    }
    async function Y() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function de(D) {
      const P = [];
      return D.missing_nodes > 0 && P.push(`${D.missing_nodes} missing node${D.missing_nodes > 1 ? "s" : ""}`), D.missing_models > 0 && P.push(`${D.missing_models} missing model${D.missing_models > 1 ? "s" : ""}`), D.models_with_category_mismatch && D.models_with_category_mismatch > 0 && P.push(`${D.models_with_category_mismatch} model${D.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), D.pending_downloads && D.pending_downloads > 0 && P.push(`${D.pending_downloads} pending download${D.pending_downloads > 1 ? "s" : ""}`), P.length > 0 ? P.join(", ") : "Has issues";
    }
    function J(D) {
      const P = D.sync_state === "new" ? "New" : D.sync_state === "modified" ? "Modified" : D.sync_state === "synced" ? "Synced" : D.sync_state;
      return D.has_path_sync_issues && D.models_needing_path_sync && D.models_needing_path_sync > 0 ? `${D.models_needing_path_sync} model path${D.models_needing_path_sync > 1 ? "s" : ""} need${D.models_needing_path_sync === 1 ? "s" : ""} sync` : P || "Unknown";
    }
    return Ne(E), (D, P) => (s(), o(V, null, [
      k(qe, null, {
        header: i(() => [
          k(Ke, { title: "WORKFLOWS" })
        ]),
        search: i(() => [
          k(zt, {
            modelValue: r.value,
            "onUpdate:modelValue": P[0] || (P[0] = (I) => r.value = I),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          u.value ? (s(), R(kt, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (s(), R(bt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            x.value.length ? (s(), R(Fe, {
              key: 0,
              title: "BROKEN",
              count: x.value.length
            }, {
              default: i(() => [
                (s(!0), o(V, null, oe(x.value, (I) => (s(), R(He, {
                  key: I.name,
                  status: "broken"
                }, {
                  icon: i(() => [...P[7] || (P[7] = [
                    p("⚠", -1)
                  ])]),
                  title: i(() => [
                    p(a(I.name), 1)
                  ]),
                  subtitle: i(() => [
                    p(a(de(I)), 1)
                  ]),
                  actions: i(() => [
                    k(ae, {
                      variant: "primary",
                      size: "sm",
                      onClick: (re) => O(I.name)
                    }, {
                      default: i(() => [...P[8] || (P[8] = [
                        p(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ae, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (re) => z(I.name)
                    }, {
                      default: i(() => [...P[9] || (P[9] = [
                        p(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            T.value.length ? (s(), R(Fe, {
              key: 1,
              title: "NEW",
              count: T.value.length
            }, {
              default: i(() => [
                (s(!0), o(V, null, oe(T.value, (I) => (s(), R(He, {
                  key: I.name,
                  status: I.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: i(() => [
                    p(a(I.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: i(() => [
                    p(a(I.name), 1)
                  ]),
                  subtitle: i(() => [
                    p(a(J(I)), 1)
                  ]),
                  actions: i(() => [
                    k(ae, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (re) => z(I.name)
                    }, {
                      default: i(() => [...P[10] || (P[10] = [
                        p(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            K.value.length ? (s(), R(Fe, {
              key: 2,
              title: "MODIFIED",
              count: K.value.length
            }, {
              default: i(() => [
                (s(!0), o(V, null, oe(K.value, (I) => (s(), R(He, {
                  key: I.name,
                  status: I.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: i(() => [...P[11] || (P[11] = [
                    p("⚡", -1)
                  ])]),
                  title: i(() => [
                    p(a(I.name), 1)
                  ]),
                  subtitle: i(() => [
                    p(a(J(I)), 1)
                  ]),
                  actions: i(() => [
                    k(ae, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (re) => z(I.name)
                    }, {
                      default: i(() => [...P[12] || (P[12] = [
                        p(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            A.value.length ? (s(), R(Fe, {
              key: 3,
              title: "SYNCED",
              count: A.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: P[2] || (P[2] = (I) => v.value = I)
            }, {
              default: i(() => [
                (s(!0), o(V, null, oe(W.value, (I) => (s(), R(He, {
                  key: I.name,
                  status: I.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: i(() => [
                    p(a(I.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: i(() => [
                    p(a(I.name), 1)
                  ]),
                  subtitle: i(() => [
                    p(a(J(I)), 1)
                  ]),
                  actions: i(() => [
                    k(ae, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (re) => z(I.name)
                    }, {
                      default: i(() => [...P[13] || (P[13] = [
                        p(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !h.value && A.value.length > 5 ? (s(), R(ae, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: P[1] || (P[1] = (I) => h.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: i(() => [
                    p(" View all " + a(A.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            B.value.length ? d("", !0) : (s(), R(rt, {
              key: 4,
              icon: "📭",
              message: r.value ? `No workflows match '${r.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      y.value && w.value ? (s(), R(ri, {
        key: 0,
        "workflow-name": w.value,
        onClose: P[3] || (P[3] = (I) => y.value = !1),
        onResolve: P[4] || (P[4] = (I) => O(w.value)),
        onRefresh: P[5] || (P[5] = (I) => l("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0),
      b.value && w.value ? (s(), R(Au, {
        key: 1,
        "workflow-name": w.value,
        onClose: se,
        onInstall: le,
        onRefresh: P[6] || (P[6] = (I) => l("refresh")),
        onRestart: Y
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), mm = /* @__PURE__ */ te(um, [["__scopeId", "data-v-fa3f076e"]]), vm = /* @__PURE__ */ ee({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: me(["summary-bar", t.variant])
    }, [
      Ce(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), jt = /* @__PURE__ */ te(vm, [["__scopeId", "data-v-ccb7816e"]]), fm = {
  key: 0,
  class: "model-details"
}, gm = { class: "detail-section" }, pm = { class: "detail-row" }, hm = { class: "detail-value mono" }, ym = { class: "detail-row" }, wm = { class: "detail-value mono" }, km = { class: "detail-row" }, bm = { class: "detail-value mono" }, _m = { class: "detail-row" }, $m = { class: "detail-value" }, Cm = { class: "detail-row" }, xm = { class: "detail-value" }, Sm = { class: "detail-row" }, Im = { class: "detail-value" }, Em = { class: "detail-section" }, Mm = { class: "section-header" }, Tm = {
  key: 0,
  class: "locations-list"
}, Rm = { class: "location-path mono" }, Lm = {
  key: 0,
  class: "location-modified"
}, zm = ["onClick"], Pm = {
  key: 1,
  class: "empty-state"
}, Dm = { class: "detail-section" }, Nm = { class: "section-header" }, Um = {
  key: 0,
  class: "sources-list"
}, Om = { class: "source-type" }, Bm = ["href"], Fm = ["disabled", "onClick"], Am = {
  key: 1,
  class: "empty-state"
}, Vm = { class: "add-source-form" }, Wm = ["disabled"], Gm = {
  key: 2,
  class: "source-error"
}, jm = {
  key: 3,
  class: "source-success"
}, Hm = /* @__PURE__ */ ee({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: l, addModelSource: f, removeModelSource: g, openFileLocation: u } = Ae(), m = _(null), r = _(!0), v = _(null), h = _(""), y = _(!1), b = _(null), w = _(null), L = _(null), M = _(null);
    let $ = null;
    function C(E, z = "success", O = 2e3) {
      $ && clearTimeout($), M.value = { message: E, type: z }, $ = setTimeout(() => {
        M.value = null;
      }, O);
    }
    function B(E) {
      if (!E) return "Unknown";
      const z = 1024 * 1024 * 1024, O = 1024 * 1024;
      return E >= z ? `${(E / z).toFixed(1)} GB` : E >= O ? `${(E / O).toFixed(0)} MB` : `${(E / 1024).toFixed(0)} KB`;
    }
    function x(E) {
      navigator.clipboard.writeText(E), C("Copied to clipboard!");
    }
    async function T(E) {
      try {
        await u(E), C("Opening file location...");
      } catch {
        C("Failed to open location", "error");
      }
    }
    async function K() {
      if (!(!h.value.trim() || !m.value)) {
        y.value = !0, w.value = null, L.value = null;
        try {
          await f(m.value.hash, h.value.trim()), L.value = "Source added successfully!", h.value = "", await W();
        } catch (E) {
          w.value = E instanceof Error ? E.message : "Failed to add source";
        } finally {
          y.value = !1;
        }
      }
    }
    async function A(E) {
      if (m.value) {
        b.value = E, w.value = null, L.value = null;
        try {
          await g(m.value.hash, E), C("Source removed"), await W();
        } catch (z) {
          w.value = z instanceof Error ? z.message : "Failed to remove source";
        } finally {
          b.value = null;
        }
      }
    }
    async function W() {
      r.value = !0, v.value = null;
      try {
        m.value = await l(n.identifier);
      } catch (E) {
        v.value = E instanceof Error ? E.message : "Failed to load model details";
      } finally {
        r.value = !1;
      }
    }
    return Ne(W), (E, z) => {
      var O;
      return s(), o(V, null, [
        k(Je, {
          title: `Model Details: ${((O = m.value) == null ? void 0 : O.filename) || "Loading..."}`,
          size: "lg",
          loading: r.value,
          error: v.value,
          onClose: z[5] || (z[5] = (le) => E.$emit("close"))
        }, {
          body: i(() => {
            var le, se, Y, de;
            return [
              m.value ? (s(), o("div", fm, [
                e("section", gm, [
                  e("div", pm, [
                    z[6] || (z[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", hm, a(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: z[0] || (z[0] = (J) => x(m.value.hash))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", ym, [
                    z[7] || (z[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", wm, a(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: z[1] || (z[1] = (J) => x(m.value.blake3))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", km, [
                    z[8] || (z[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", bm, a(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: z[2] || (z[2] = (J) => x(m.value.sha256))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", _m, [
                    z[9] || (z[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", $m, a(B(m.value.size)), 1)
                  ]),
                  e("div", Cm, [
                    z[10] || (z[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", xm, a(m.value.category), 1)
                  ]),
                  e("div", Sm, [
                    z[11] || (z[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Im, a(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Em, [
                  e("h4", Mm, "Locations (" + a(((le = m.value.locations) == null ? void 0 : le.length) || 0) + ")", 1),
                  (se = m.value.locations) != null && se.length ? (s(), o("div", Tm, [
                    (s(!0), o(V, null, oe(m.value.locations, (J, D) => (s(), o("div", {
                      key: D,
                      class: "location-item"
                    }, [
                      e("span", Rm, a(J.path), 1),
                      J.modified ? (s(), o("span", Lm, "Modified: " + a(J.modified), 1)) : d("", !0),
                      J.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (P) => T(J.path)
                      }, " Open File Location ", 8, zm)) : d("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", Pm, "No locations found"))
                ]),
                e("section", Dm, [
                  e("h4", Nm, "Download Sources (" + a(((Y = m.value.sources) == null ? void 0 : Y.length) || 0) + ")", 1),
                  (de = m.value.sources) != null && de.length ? (s(), o("div", Um, [
                    (s(!0), o(V, null, oe(m.value.sources, (J, D) => (s(), o("div", {
                      key: D,
                      class: "source-item"
                    }, [
                      e("span", Om, a(J.type) + ":", 1),
                      e("a", {
                        href: J.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(J.url), 9, Bm),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: b.value === J.url,
                        onClick: (P) => A(J.url)
                      }, a(b.value === J.url ? "..." : "×"), 9, Fm)
                    ]))), 128))
                  ])) : (s(), o("div", Am, " No download sources configured ")),
                  e("div", Vm, [
                    Oe(e("input", {
                      "onUpdate:modelValue": z[3] || (z[3] = (J) => h.value = J),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Tt, h.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !h.value.trim() || y.value,
                      onClick: K
                    }, a(y.value ? "Adding..." : "Add Source"), 9, Wm)
                  ]),
                  w.value ? (s(), o("p", Gm, a(w.value), 1)) : d("", !0),
                  L.value ? (s(), o("p", jm, a(L.value), 1)) : d("", !0)
                ])
              ])) : d("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: z[4] || (z[4] = (le) => E.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), R(We, { to: "body" }, [
          M.value ? (s(), o("div", {
            key: 0,
            class: me(["toast", M.value.type])
          }, a(M.value.message), 3)) : d("", !0)
        ]))
      ], 64);
    };
  }
}), vs = /* @__PURE__ */ te(Hm, [["__scopeId", "data-v-f15cbb56"]]), qm = /* @__PURE__ */ ee({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: l, getStatus: f } = Ae(), g = _([]), u = _([]), m = _("production"), r = _(!1), v = _(null), h = _(""), y = _(!1), b = _(null);
    function w() {
      y.value = !1, n("navigate", "model-index");
    }
    const L = N(
      () => g.value.reduce((W, E) => W + (E.size || 0), 0)
    ), M = N(() => {
      if (!h.value.trim()) return g.value;
      const W = h.value.toLowerCase();
      return g.value.filter((E) => E.filename.toLowerCase().includes(W));
    }), $ = N(() => {
      if (!h.value.trim()) return u.value;
      const W = h.value.toLowerCase();
      return u.value.filter((E) => E.filename.toLowerCase().includes(W));
    }), C = N(() => {
      const W = {};
      for (const z of M.value) {
        const O = z.type || "other";
        W[O] || (W[O] = []), W[O].push(z);
      }
      const E = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(W).sort(([z], [O]) => {
        const le = E.indexOf(z), se = E.indexOf(O);
        return le >= 0 && se >= 0 ? le - se : le >= 0 ? -1 : se >= 0 ? 1 : z.localeCompare(O);
      }).map(([z, O]) => ({ type: z, models: O }));
    });
    function B(W) {
      if (!W) return "Unknown";
      const E = W / (1024 * 1024);
      return E >= 1024 ? `${(E / 1024).toFixed(1)} GB` : `${E.toFixed(0)} MB`;
    }
    function x(W) {
      b.value = W.hash || W.filename;
    }
    function T(W) {
      n("navigate", "model-index");
    }
    function K(W) {
      alert(`Download functionality not yet implemented for ${W}`);
    }
    async function A() {
      r.value = !0, v.value = null;
      try {
        const W = await l();
        g.value = W, u.value = [];
        const E = await f();
        m.value = E.environment || "production";
      } catch (W) {
        v.value = W instanceof Error ? W.message : "Failed to load models";
      } finally {
        r.value = !1;
      }
    }
    return Ne(A), (W, E) => (s(), o(V, null, [
      k(qe, null, {
        header: i(() => [
          k(Ke, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (z) => y.value = !0)
          })
        ]),
        search: i(() => [
          k(zt, {
            modelValue: h.value,
            "onUpdate:modelValue": E[1] || (E[1] = (z) => h.value = z),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          r.value ? (s(), R(kt, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (s(), R(bt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: A
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            g.value.length ? (s(), R(jt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                p(" Total: " + a(g.value.length) + " models • " + a(B(L.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(V, null, oe(C.value, (z) => (s(), R(Fe, {
              key: z.type,
              title: z.type.toUpperCase(),
              count: z.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(V, null, oe(z.models, (O) => (s(), R(He, {
                  key: O.hash || O.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...E[4] || (E[4] = [
                    p("📦", -1)
                  ])]),
                  title: i(() => [
                    p(a(O.filename), 1)
                  ]),
                  subtitle: i(() => [
                    p(a(B(O.size)), 1)
                  ]),
                  details: i(() => [
                    k(De, {
                      label: "Used by:",
                      value: (O.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    k(De, {
                      label: "Path:",
                      value: O.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    k(ae, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (le) => x(O)
                    }, {
                      default: i(() => [...E[5] || (E[5] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            $.value.length ? (s(), R(Fe, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: i(() => [
                (s(!0), o(V, null, oe($.value, (z) => (s(), R(He, {
                  key: z.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...E[6] || (E[6] = [
                    p("⚠", -1)
                  ])]),
                  title: i(() => [
                    p(a(z.filename), 1)
                  ]),
                  subtitle: i(() => [...E[7] || (E[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: i(() => {
                    var O;
                    return [
                      k(De, {
                        label: "Required by:",
                        value: ((O = z.workflow_names) == null ? void 0 : O.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: i(() => [
                    k(ae, {
                      variant: "primary",
                      size: "sm",
                      onClick: (O) => K(z.filename)
                    }, {
                      default: i(() => [...E[8] || (E[8] = [
                        p(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ae, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => T(z.filename)
                    }, {
                      default: i(() => [...E[9] || (E[9] = [
                        p(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !M.value.length && !$.value.length ? (s(), R(rt, {
              key: 2,
              icon: "📭",
              message: h.value ? `No models match '${h.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(ft, {
        show: y.value,
        title: "About Environment Models",
        onClose: E[2] || (E[2] = (z) => y.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            E[10] || (E[10] = p(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(m.value) + '"', 1),
            E[11] || (E[11] = p(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: i(() => [
          k(ae, {
            variant: "primary",
            onClick: w
          }, {
            default: i(() => [...E[12] || (E[12] = [
              p(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b.value ? (s(), R(vs, {
        key: 0,
        identifier: b.value,
        onClose: E[3] || (E[3] = (z) => b.value = null)
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), Km = /* @__PURE__ */ te(qm, [["__scopeId", "data-v-cb4f12b3"]]), Jm = {
  key: 0,
  class: "indexing-progress"
}, Ym = { class: "progress-info" }, Xm = { class: "progress-label" }, Qm = { class: "progress-count" }, Zm = { class: "progress-bar" }, ev = { class: "modal-content" }, tv = { class: "modal-header" }, sv = { class: "modal-body" }, ov = { class: "input-group" }, nv = { class: "current-path" }, av = { class: "input-group" }, lv = { class: "modal-footer" }, iv = { class: "modal-content" }, rv = { class: "modal-header" }, dv = { class: "modal-body" }, cv = { class: "input-group" }, uv = { class: "input-group" }, mv = { class: "modal-footer" }, vv = /* @__PURE__ */ ee({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: l,
      getModelsDirectory: f,
      setModelsDirectory: g
    } = Ae(), { addToQueue: u } = Gt(), m = c, r = _([]), v = _(!1), h = _(!1), y = _(null), b = _(""), w = _(!1), L = _(null), M = _(!1), $ = _(null), C = _(""), B = _(!1), x = _(!1), T = _(""), K = _(""), A = _(null), W = N(
      () => r.value.reduce((P, I) => P + (I.size || 0), 0)
    ), E = N(() => {
      if (!b.value.trim()) return r.value;
      const P = b.value.toLowerCase();
      return r.value.filter((I) => {
        const re = I, Z = I.sha256 || re.sha256_hash || "";
        return I.filename.toLowerCase().includes(P) || Z.toLowerCase().includes(P);
      });
    }), z = N(() => {
      const P = {};
      for (const re of E.value) {
        const Z = re.type || "other";
        P[Z] || (P[Z] = []), P[Z].push(re);
      }
      const I = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(P).sort(([re], [Z]) => {
        const ye = I.indexOf(re), $e = I.indexOf(Z);
        return ye >= 0 && $e >= 0 ? ye - $e : ye >= 0 ? -1 : $e >= 0 ? 1 : re.localeCompare(Z);
      }).map(([re, Z]) => ({ type: re, models: Z }));
    });
    function O(P) {
      if (!P) return "Unknown";
      const I = 1024 * 1024 * 1024, re = 1024 * 1024;
      return P >= I ? `${(P / I).toFixed(1)} GB` : P >= re ? `${(P / re).toFixed(0)} MB` : `${(P / 1024).toFixed(0)} KB`;
    }
    function le(P) {
      L.value = P.hash || P.filename;
    }
    async function se() {
      h.value = !0, y.value = null;
      try {
        const P = await l();
        await J(), P.changes > 0 && console.log(`Scan complete: ${P.changes} changes detected`);
      } catch (P) {
        y.value = P instanceof Error ? P.message : "Failed to scan models";
      } finally {
        h.value = !1;
      }
    }
    async function Y() {
      if (C.value.trim()) {
        B.value = !0, y.value = null;
        try {
          const P = await g(C.value.trim());
          $.value = P.path, M.value = !1, C.value = "", await J(), console.log(`Directory changed: ${P.models_indexed} models indexed`), m("refresh");
        } catch (P) {
          y.value = P instanceof Error ? P.message : "Failed to change directory";
        } finally {
          B.value = !1;
        }
      }
    }
    function de() {
      if (!T.value.trim() || !K.value.trim()) return;
      const P = K.value.split("/").pop() || "model.safetensors";
      u([{
        workflow: "__manual__",
        filename: P,
        url: T.value.trim(),
        targetPath: K.value.trim()
      }]), T.value = "", K.value = "", x.value = !1;
    }
    async function J() {
      v.value = !0, y.value = null;
      try {
        r.value = await n();
      } catch (P) {
        y.value = P instanceof Error ? P.message : "Failed to load workspace models";
      } finally {
        v.value = !1;
      }
    }
    async function D() {
      try {
        const P = await f();
        $.value = P.path;
      } catch {
      }
    }
    return Ne(() => {
      J(), D();
    }), (P, I) => (s(), o(V, null, [
      k(qe, null, {
        header: i(() => [
          k(Ke, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: I[2] || (I[2] = (re) => w.value = !0)
          }, {
            actions: i(() => [
              k(ae, {
                variant: "primary",
                size: "sm",
                disabled: h.value,
                onClick: se
              }, {
                default: i(() => [
                  p(a(h.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(ae, {
                variant: "primary",
                size: "sm",
                onClick: I[0] || (I[0] = (re) => M.value = !0)
              }, {
                default: i(() => [...I[15] || (I[15] = [
                  p(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              k(ae, {
                variant: "primary",
                size: "sm",
                onClick: I[1] || (I[1] = (re) => x.value = !0)
              }, {
                default: i(() => [...I[16] || (I[16] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  p(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          A.value ? (s(), o("div", Jm, [
            e("div", Ym, [
              e("span", Xm, a(A.value.message), 1),
              e("span", Qm, a(A.value.current) + "/" + a(A.value.total), 1)
            ]),
            e("div", Zm, [
              e("div", {
                class: "progress-fill",
                style: wt({ width: `${A.value.current / A.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : d("", !0),
          k(zt, {
            modelValue: b.value,
            "onUpdate:modelValue": I[3] || (I[3] = (re) => b.value = re),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          v.value || A.value ? (s(), R(kt, {
            key: 0,
            message: A.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : y.value ? (s(), R(bt, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: J
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            r.value.length ? (s(), R(jt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                p(" Total: " + a(r.value.length) + " models • " + a(O(W.value)), 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(V, null, oe(z.value, (re) => (s(), R(Fe, {
              key: re.type,
              title: re.type.toUpperCase(),
              count: re.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (s(!0), o(V, null, oe(re.models, (Z) => (s(), R(He, {
                  key: Z.sha256 || Z.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...I[17] || (I[17] = [
                    p("📦", -1)
                  ])]),
                  title: i(() => [
                    p(a(Z.filename), 1)
                  ]),
                  subtitle: i(() => [
                    p(a(O(Z.size)), 1)
                  ]),
                  details: i(() => [
                    k(De, {
                      label: "Hash:",
                      value: Z.hash ? Z.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    k(ae, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ye) => le(Z)
                    }, {
                      default: i(() => [...I[18] || (I[18] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            E.value.length ? d("", !0) : (s(), R(rt, {
              key: 1,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k(ft, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: I[4] || (I[4] = (re) => w.value = !1)
      }, {
        content: i(() => [...I[19] || (I[19] = [
          e("p", null, [
            p(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            p(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      L.value ? (s(), R(vs, {
        key: 0,
        identifier: L.value,
        onClose: I[5] || (I[5] = (re) => L.value = null)
      }, null, 8, ["identifier"])) : d("", !0),
      (s(), R(We, { to: "body" }, [
        M.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[9] || (I[9] = Le((re) => M.value = !1, ["self"]))
        }, [
          e("div", ev, [
            e("div", tv, [
              I[20] || (I[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[6] || (I[6] = (re) => M.value = !1)
              }, "✕")
            ]),
            e("div", sv, [
              e("div", ov, [
                I[21] || (I[21] = e("label", null, "Current Directory", -1)),
                e("code", nv, a($.value || "Not set"), 1)
              ]),
              e("div", av, [
                I[22] || (I[22] = e("label", null, "New Directory Path", -1)),
                k(it, {
                  modelValue: C.value,
                  "onUpdate:modelValue": I[7] || (I[7] = (re) => C.value = re),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              I[23] || (I[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", lv, [
              k(ve, {
                variant: "secondary",
                onClick: I[8] || (I[8] = (re) => M.value = !1)
              }, {
                default: i(() => [...I[24] || (I[24] = [
                  p(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(ve, {
                variant: "primary",
                disabled: !C.value.trim() || B.value,
                loading: B.value,
                onClick: Y
              }, {
                default: i(() => [
                  p(a(B.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : d("", !0)
      ])),
      (s(), R(We, { to: "body" }, [
        x.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[14] || (I[14] = Le((re) => x.value = !1, ["self"]))
        }, [
          e("div", iv, [
            e("div", rv, [
              I[25] || (I[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[10] || (I[10] = (re) => x.value = !1)
              }, "✕")
            ]),
            e("div", dv, [
              e("div", cv, [
                I[26] || (I[26] = e("label", null, "Download URL", -1)),
                k(it, {
                  modelValue: T.value,
                  "onUpdate:modelValue": I[11] || (I[11] = (re) => T.value = re),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", uv, [
                I[27] || (I[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                k(it, {
                  modelValue: K.value,
                  "onUpdate:modelValue": I[12] || (I[12] = (re) => K.value = re),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              I[28] || (I[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", mv, [
              k(ve, {
                variant: "secondary",
                onClick: I[13] || (I[13] = (re) => x.value = !1)
              }, {
                default: i(() => [...I[29] || (I[29] = [
                  p(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(ve, {
                variant: "primary",
                disabled: !T.value.trim() || !K.value.trim(),
                onClick: de
              }, {
                default: i(() => [...I[30] || (I[30] = [
                  p(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : d("", !0)
      ]))
    ], 64));
  }
}), fv = /* @__PURE__ */ te(vv, [["__scopeId", "data-v-73b78d84"]]), gv = { class: "node-details" }, pv = { class: "status-row" }, hv = {
  key: 0,
  class: "detail-row"
}, yv = { class: "value" }, wv = { class: "detail-row" }, kv = { class: "value" }, bv = {
  key: 1,
  class: "detail-row"
}, _v = { class: "value mono" }, $v = {
  key: 2,
  class: "detail-row"
}, Cv = ["href"], xv = {
  key: 3,
  class: "detail-row"
}, Sv = { class: "value mono small" }, Iv = { class: "detail-row" }, Ev = {
  key: 0,
  class: "value"
}, Mv = {
  key: 1,
  class: "workflow-list"
}, Tv = /* @__PURE__ */ ee({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, l = c, f = N(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), g = N(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), u = N(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (m, r) => (s(), R(Je, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: r[1] || (r[1] = (v) => l("close"))
    }, {
      body: i(() => [
        e("div", gv, [
          e("div", pv, [
            r[2] || (r[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: me(["status-badge", f.value])
            }, a(g.value), 3)
          ]),
          t.node.version ? (s(), o("div", hv, [
            r[3] || (r[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", yv, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : d("", !0),
          e("div", wv, [
            r[4] || (r[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", kv, a(u.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", bv, [
            r[5] || (r[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", _v, a(t.node.registry_id), 1)
          ])) : d("", !0),
          t.node.repository ? (s(), o("div", $v, [
            r[7] || (r[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              p(a(t.node.repository) + " ", 1),
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
            ], 8, Cv)
          ])) : d("", !0),
          t.node.download_url ? (s(), o("div", xv, [
            r[8] || (r[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", Sv, a(t.node.download_url), 1)
          ])) : d("", !0),
          r[10] || (r[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Iv, [
            r[9] || (r[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", Ev, " Not used in any workflows ")) : (s(), o("div", Mv, [
              (s(!0), o(V, null, oe(t.node.used_in_workflows, (v) => (s(), o("span", {
                key: v,
                class: "workflow-tag"
              }, a(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: i(() => [
        k(ve, {
          variant: "secondary",
          onClick: r[0] || (r[0] = (v) => l("close"))
        }, {
          default: i(() => [...r[11] || (r[11] = [
            p(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Rv = /* @__PURE__ */ te(Tv, [["__scopeId", "data-v-b342f626"]]), Lv = { class: "dialog-message" }, zv = {
  key: 0,
  class: "dialog-details"
}, Pv = {
  key: 1,
  class: "dialog-warning"
}, Dv = /* @__PURE__ */ ee({
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
    return (c, n) => (s(), R(Je, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (l) => c.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", Lv, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", zv, [
          (s(!0), o(V, null, oe(t.details, (l, f) => (s(), o("div", {
            key: f,
            class: "detail-item"
          }, " • " + a(l), 1))), 128))
        ])) : d("", !0),
        t.warning ? (s(), o("p", Pv, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          p(" " + a(t.warning), 1)
        ])) : d("", !0)
      ]),
      footer: i(() => [
        k(ve, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (l) => c.$emit("cancel"))
        }, {
          default: i(() => [
            p(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), R(ve, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (l) => c.$emit("secondary"))
        }, {
          default: i(() => [
            p(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        k(ve, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (l) => c.$emit("confirm"))
        }, {
          default: i(() => [
            p(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Bs = /* @__PURE__ */ te(Dv, [["__scopeId", "data-v-3670b9f5"]]), Nv = { class: "mismatch-warning" }, Uv = { class: "version-mismatch" }, Ov = { class: "version-actual" }, Bv = { class: "version-expected" }, Fv = { key: 0 }, Av = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Vv = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Wv = /* @__PURE__ */ ee({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(t, { emit: c }) {
    const n = t, l = c, { getNodes: f, trackNodeAsDev: g, installNode: u, uninstallNode: m } = Ae(), r = _({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), v = _(!1), h = _(null), y = _(""), b = _(!1), w = _(null), L = _(null), M = N(() => {
      if (!y.value.trim()) return r.value.nodes;
      const se = y.value.toLowerCase();
      return r.value.nodes.filter(
        (Y) => {
          var de, J;
          return Y.name.toLowerCase().includes(se) || ((de = Y.description) == null ? void 0 : de.toLowerCase().includes(se)) || ((J = Y.repository) == null ? void 0 : J.toLowerCase().includes(se));
        }
      );
    }), $ = N(
      () => M.value.filter((se) => se.installed && se.tracked)
    ), C = N(
      () => M.value.filter((se) => !se.installed && se.tracked)
    ), B = N(
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
    const T = N(() => n.versionMismatches.length > 0);
    function K(se) {
      return !se.used_in_workflows || se.used_in_workflows.length === 0 ? "Not used in any workflows" : se.used_in_workflows.length === 1 ? se.used_in_workflows[0] : `${se.used_in_workflows.length} workflows`;
    }
    function A(se) {
      w.value = se;
    }
    function W() {
      l("open-node-manager");
    }
    function E(se) {
      L.value = {
        title: "Track as Development Node",
        message: `Track "${se}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          L.value = null;
          try {
            v.value = !0;
            const Y = await g(se);
            Y.status === "success" ? (l("toast", `✓ Node "${se}" tracked as development`, "success"), await le()) : l("toast", `Failed to track node: ${Y.message || "Unknown error"}`, "error");
          } catch (Y) {
            l("toast", `Error tracking node: ${Y instanceof Error ? Y.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function z(se) {
      L.value = {
        title: "Remove Untracked Node",
        message: `Remove "${se}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          L.value = null;
          try {
            v.value = !0;
            const Y = await m(se);
            Y.status === "success" ? (l("toast", `✓ Node "${se}" removed`, "success"), await le()) : l("toast", `Failed to remove node: ${Y.message || "Unknown error"}`, "error");
          } catch (Y) {
            l("toast", `Error removing node: ${Y instanceof Error ? Y.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function O(se) {
      L.value = {
        title: "Install Missing Node",
        message: `Install "${se}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          L.value = null;
          try {
            v.value = !0;
            const Y = await u(se);
            Y.status === "success" ? (l("toast", `✓ Node "${se}" installed`, "success"), await le()) : l("toast", `Failed to install node: ${Y.message || "Unknown error"}`, "error");
          } catch (Y) {
            l("toast", `Error installing node: ${Y instanceof Error ? Y.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    async function le() {
      v.value = !0, h.value = null;
      try {
        r.value = await f();
      } catch (se) {
        h.value = se instanceof Error ? se.message : "Failed to load nodes";
      } finally {
        v.value = !1;
      }
    }
    return Ne(le), (se, Y) => (s(), o(V, null, [
      k(qe, null, {
        header: i(() => [
          k(Ke, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: Y[0] || (Y[0] = (de) => b.value = !0)
          }, {
            actions: i(() => [
              k(ae, {
                variant: "primary",
                size: "sm",
                onClick: W
              }, {
                default: i(() => [...Y[7] || (Y[7] = [
                  p(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          k(zt, {
            modelValue: y.value,
            "onUpdate:modelValue": Y[1] || (Y[1] = (de) => y.value = de),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          v.value ? (s(), R(kt, {
            key: 0,
            message: "Loading nodes..."
          })) : h.value ? (s(), R(bt, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: le
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            r.value.total_count ? (s(), R(jt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                p(a(r.value.installed_count) + " installed ", 1),
                r.value.missing_count ? (s(), o(V, { key: 0 }, [
                  p(" • " + a(r.value.missing_count) + " missing", 1)
                ], 64)) : d("", !0),
                r.value.untracked_count ? (s(), o(V, { key: 1 }, [
                  p(" • " + a(r.value.untracked_count) + " untracked", 1)
                ], 64)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            T.value ? (s(), R(Fe, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: t.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                e("div", Nv, [
                  Y[8] || (Y[8] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (s(!0), o(V, null, oe(t.versionMismatches, (de) => (s(), R(He, {
                  key: de.name,
                  status: "warning"
                }, {
                  icon: i(() => [...Y[9] || (Y[9] = [
                    p("⚠", -1)
                  ])]),
                  title: i(() => [
                    p(a(de.name), 1)
                  ]),
                  subtitle: i(() => [
                    e("span", Uv, [
                      e("span", Ov, a(de.actual), 1),
                      Y[10] || (Y[10] = e("span", { class: "version-arrow" }, "→", -1)),
                      e("span", Bv, a(de.expected), 1)
                    ])
                  ]),
                  actions: i(() => [
                    k(ae, {
                      variant: "warning",
                      size: "sm",
                      onClick: Y[2] || (Y[2] = (J) => l("repair-environment"))
                    }, {
                      default: i(() => [...Y[11] || (Y[11] = [
                        p(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            B.value.length ? (s(), R(Fe, {
              key: 2,
              title: "UNTRACKED",
              count: B.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(V, null, oe(B.value, (de) => (s(), R(He, {
                  key: de.name,
                  status: "warning"
                }, {
                  icon: i(() => [...Y[12] || (Y[12] = [
                    p("?", -1)
                  ])]),
                  title: i(() => [
                    p(a(de.name), 1)
                  ]),
                  subtitle: i(() => [...Y[13] || (Y[13] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: i(() => [
                    k(De, {
                      label: "Used by:",
                      value: K(de)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    k(ae, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => A(de)
                    }, {
                      default: i(() => [...Y[14] || (Y[14] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ae, {
                      variant: "primary",
                      size: "sm",
                      onClick: (J) => E(de.name)
                    }, {
                      default: i(() => [...Y[15] || (Y[15] = [
                        p(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ae, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (J) => z(de.name)
                    }, {
                      default: i(() => [...Y[16] || (Y[16] = [
                        p(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            $.value.length ? (s(), R(Fe, {
              key: 3,
              title: "INSTALLED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(V, null, oe($.value, (de) => (s(), R(He, {
                  key: de.name,
                  status: "synced"
                }, {
                  icon: i(() => [
                    p(a(de.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: i(() => [
                    p(a(de.name), 1)
                  ]),
                  subtitle: i(() => [
                    de.version ? (s(), o("span", Fv, a(de.source === "development" ? "" : "v") + a(de.version), 1)) : (s(), o("span", Av, "version unknown")),
                    e("span", Vv, " • " + a(x(de.source)), 1)
                  ]),
                  details: i(() => [
                    k(De, {
                      label: "Used by:",
                      value: K(de)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    k(ae, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => A(de)
                    }, {
                      default: i(() => [...Y[17] || (Y[17] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ae, {
                      variant: "secondary",
                      size: "xs",
                      onClick: W
                    }, {
                      default: i(() => [...Y[18] || (Y[18] = [
                        p(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            C.value.length ? (s(), R(Fe, {
              key: 4,
              title: "MISSING",
              count: C.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(V, null, oe(C.value, (de) => (s(), R(He, {
                  key: de.name,
                  status: "missing"
                }, {
                  icon: i(() => [...Y[19] || (Y[19] = [
                    p("!", -1)
                  ])]),
                  title: i(() => [
                    p(a(de.name), 1)
                  ]),
                  subtitle: i(() => [...Y[20] || (Y[20] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: i(() => [
                    k(De, {
                      label: "Required by:",
                      value: K(de)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    k(ae, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => A(de)
                    }, {
                      default: i(() => [...Y[21] || (Y[21] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ae, {
                      variant: "primary",
                      size: "sm",
                      onClick: (J) => O(de.name)
                    }, {
                      default: i(() => [...Y[22] || (Y[22] = [
                        p(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !$.value.length && !C.value.length && !B.value.length ? (s(), R(rt, {
              key: 5,
              icon: "📭",
              message: y.value ? `No nodes match '${y.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(ft, {
        show: b.value,
        title: "About Custom Nodes",
        onClose: Y[4] || (Y[4] = (de) => b.value = !1)
      }, {
        content: i(() => [...Y[23] || (Y[23] = [
          e("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            p(" Tracked nodes available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            p(" Tracked nodes that need to be installed"),
            e("br"),
            e("strong", null, "Untracked:"),
            p(" Nodes on filesystem but not in manifest ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: i(() => [
          k(ae, {
            variant: "primary",
            onClick: Y[3] || (Y[3] = (de) => b.value = !1)
          }, {
            default: i(() => [...Y[24] || (Y[24] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (s(), R(Rv, {
        key: 0,
        node: w.value,
        onClose: Y[5] || (Y[5] = (de) => w.value = null)
      }, null, 8, ["node"])) : d("", !0),
      L.value ? (s(), R(Bs, {
        key: 1,
        title: L.value.title,
        message: L.value.message,
        warning: L.value.warning,
        "confirm-label": L.value.confirmLabel,
        destructive: L.value.destructive,
        onConfirm: L.value.onConfirm,
        onCancel: Y[6] || (Y[6] = (de) => L.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : d("", !0)
    ], 64));
  }
}), Gv = /* @__PURE__ */ te(Wv, [["__scopeId", "data-v-1555a802"]]);
function Fs(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const jv = { class: "remote-url-display" }, Hv = ["title"], qv = ["title"], Kv = {
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
}, Yv = /* @__PURE__ */ ee({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = _(!1), l = N(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const g = c.url.slice(0, Math.floor(c.maxLength * 0.6)), u = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${g}...${u}`;
    });
    async function f() {
      try {
        await navigator.clipboard.writeText(c.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy URL:", g);
      }
    }
    return (g, u) => (s(), o("div", jv, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(l.value), 9, Hv),
      e("button", {
        class: me(["copy-btn", { copied: n.value }]),
        onClick: f,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", Jv, [...u[1] || (u[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", Kv, [...u[0] || (u[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, qv)
    ]));
  }
}), Xv = /* @__PURE__ */ te(Yv, [["__scopeId", "data-v-7768a58d"]]), Qv = { class: "remote-title" }, Zv = {
  key: 0,
  class: "default-badge"
}, ef = {
  key: 1,
  class: "sync-badge"
}, tf = {
  key: 0,
  class: "ahead"
}, sf = {
  key: 1,
  class: "behind"
}, of = {
  key: 1,
  class: "synced"
}, nf = ["href"], af = {
  key: 1,
  class: "remote-url-text"
}, lf = /* @__PURE__ */ ee({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const c = t, n = N(() => c.fetchingRemote === c.remote.name), l = N(() => c.remote.is_default), f = N(() => c.syncStatus && c.syncStatus.behind > 0), g = N(() => c.syncStatus && c.syncStatus.ahead > 0), u = N(() => c.remote.push_url !== c.remote.fetch_url), m = N(() => {
      const v = c.remote.fetch_url, h = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return h ? `https://${h[1]}/${h[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), r = N(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, h) => (s(), R(He, {
      status: l.value ? "synced" : void 0
    }, Wt({
      icon: i(() => [
        p(a(l.value ? "🔗" : "🌐"), 1)
      ]),
      title: i(() => [
        e("div", Qv, [
          e("span", null, a(t.remote.name), 1),
          l.value ? (s(), o("span", Zv, "DEFAULT")) : d("", !0),
          t.syncStatus ? (s(), o("span", ef, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(V, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", tf, "↑" + a(t.syncStatus.ahead), 1)) : d("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", sf, "↓" + a(t.syncStatus.behind), 1)) : d("", !0)
            ], 64)) : (s(), o("span", of, "✓ synced"))
          ])) : d("", !0)
        ])
      ]),
      subtitle: i(() => [
        m.value ? (s(), o("a", {
          key: 0,
          href: m.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: h[0] || (h[0] = Le(() => {
          }, ["stop"]))
        }, a(r.value), 9, nf)) : (s(), o("span", af, a(r.value), 1))
      ]),
      actions: i(() => [
        k(ae, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: h[1] || (h[1] = (y) => v.$emit("fetch", t.remote.name))
        }, {
          default: i(() => [...h[6] || (h[6] = [
            p(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        k(ae, {
          variant: f.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: h[2] || (h[2] = (y) => v.$emit("pull", t.remote.name))
        }, {
          default: i(() => [
            p(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(ae, {
          variant: g.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: h[3] || (h[3] = (y) => v.$emit("push", t.remote.name))
        }, {
          default: i(() => [
            p(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(ae, {
          variant: "secondary",
          size: "xs",
          onClick: h[4] || (h[4] = (y) => v.$emit("edit", t.remote.name))
        }, {
          default: i(() => [...h[7] || (h[7] = [
            p(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        l.value ? d("", !0) : (s(), R(ae, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: h[5] || (h[5] = (y) => v.$emit("remove", t.remote.name))
        }, {
          default: i(() => [...h[8] || (h[8] = [
            p(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      u.value ? {
        name: "details",
        fn: i(() => [
          t.remote.push_url !== t.remote.fetch_url ? (s(), R(De, {
            key: 0,
            label: "Push URL:"
          }, {
            default: i(() => [
              k(Xv, {
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
}), rf = /* @__PURE__ */ te(lf, [["__scopeId", "data-v-8310f3a8"]]), df = ["for"], cf = {
  key: 0,
  class: "base-form-field-required"
}, uf = { class: "base-form-field-input" }, mf = {
  key: 1,
  class: "base-form-field-error"
}, vf = {
  key: 2,
  class: "base-form-field-hint"
}, ff = /* @__PURE__ */ ee({
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
    const c = t, n = N(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (l, f) => (s(), o("div", {
      class: me(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        p(a(t.label) + " ", 1),
        t.required ? (s(), o("span", cf, "*")) : d("", !0)
      ], 8, df)) : d("", !0),
      e("div", uf, [
        Ce(l.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", mf, a(t.error), 1)) : t.hint ? (s(), o("span", vf, a(t.hint), 1)) : d("", !0)
    ], 2));
  }
}), os = /* @__PURE__ */ te(ff, [["__scopeId", "data-v-9a1cf296"]]), gf = { class: "remote-form" }, pf = { class: "form-header" }, hf = { class: "form-body" }, yf = {
  key: 0,
  class: "form-error"
}, wf = { class: "form-actions" }, kf = /* @__PURE__ */ ee({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const n = t, l = c, f = _({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), g = _(!1), u = _(null);
    $t(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      f.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const m = N(() => f.value.name.trim() !== "" && f.value.fetchUrl.trim() !== "");
    async function r() {
      if (!(!m.value || g.value)) {
        u.value = null, g.value = !0;
        try {
          l("submit", f.value);
        } catch (v) {
          u.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          g.value = !1;
        }
      }
    }
    return (v, h) => (s(), o("div", gf, [
      e("div", pf, [
        k(tt, null, {
          default: i(() => [
            p(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", hf, [
        k(os, {
          label: "Remote Name",
          required: ""
        }, {
          default: i(() => [
            k(it, {
              modelValue: f.value.name,
              "onUpdate:modelValue": h[0] || (h[0] = (y) => f.value.name = y),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        k(os, {
          label: "Fetch URL",
          required: ""
        }, {
          default: i(() => [
            k(it, {
              modelValue: f.value.fetchUrl,
              "onUpdate:modelValue": h[1] || (h[1] = (y) => f.value.fetchUrl = y),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        k(os, { label: "Push URL (optional)" }, {
          default: i(() => [
            k(it, {
              modelValue: f.value.pushUrl,
              "onUpdate:modelValue": h[2] || (h[2] = (y) => f.value.pushUrl = y),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (s(), o("div", yf, a(u.value), 1)) : d("", !0)
      ]),
      e("div", wf, [
        k(ae, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: g.value,
          onClick: r
        }, {
          default: i(() => [
            p(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        k(ae, {
          variant: "ghost",
          size: "md",
          onClick: h[3] || (h[3] = (y) => v.$emit("cancel"))
        }, {
          default: i(() => [...h[4] || (h[4] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), bf = /* @__PURE__ */ te(kf, [["__scopeId", "data-v-56021b18"]]), _f = { class: "conflict-summary-box" }, $f = { class: "summary-header" }, Cf = { class: "summary-text" }, xf = { key: 0 }, Sf = {
  key: 1,
  class: "all-resolved"
}, If = { class: "summary-progress" }, Ef = { class: "progress-bar" }, Mf = { class: "progress-text" }, Tf = /* @__PURE__ */ ee({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const c = t, n = N(
      () => c.conflictCount > 0 ? c.resolvedCount / c.conflictCount * 100 : 0
    );
    return (l, f) => (s(), o("div", _f, [
      e("div", $f, [
        f[0] || (f[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", Cf, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (s(), o("p", xf, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (s(), o("p", Sf, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", If, [
        e("div", Ef, [
          e("div", {
            class: "progress-fill",
            style: wt({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", Mf, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), Rf = /* @__PURE__ */ te(Tf, [["__scopeId", "data-v-4e9e6cc9"]]), Lf = { class: "modal-header" }, zf = { class: "modal-title" }, Pf = { class: "modal-body" }, Df = {
  key: 0,
  class: "error-box"
}, Nf = {
  key: 0,
  class: "error-hint"
}, Uf = {
  key: 1,
  class: "loading-state"
}, Of = { class: "commit-summary" }, Bf = {
  key: 0,
  class: "changes-section"
}, Ff = {
  key: 0,
  class: "change-group",
  open: ""
}, Af = { class: "change-count" }, Vf = { class: "change-list" }, Wf = {
  key: 0,
  class: "conflict-badge"
}, Gf = {
  key: 1,
  class: "change-group"
}, jf = { class: "change-count" }, Hf = { class: "change-list" }, qf = {
  key: 2,
  class: "change-group"
}, Kf = { class: "change-count" }, Jf = { class: "change-list" }, Yf = {
  key: 2,
  class: "strategy-section"
}, Xf = { class: "radio-group" }, Qf = { class: "radio-option" }, Zf = { class: "radio-option" }, eg = { class: "radio-option" }, tg = {
  key: 3,
  class: "up-to-date"
}, sg = { class: "modal-actions" }, Ss = "comfygit.pullModelStrategy", og = /* @__PURE__ */ ee({
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
    const n = t, l = c, f = _(localStorage.getItem(Ss) || "skip");
    $t(f, ($) => {
      localStorage.setItem(Ss, $);
    });
    const g = N(() => {
      var $;
      return (($ = n.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), u = N(() => {
      if (!n.preview) return 0;
      const $ = n.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), m = N(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), r = N(() => {
      var $;
      return u.value > 0 || m.value > 0 || ((($ = n.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), v = N(() => n.preview && Fs(n.preview) ? n.preview : null), h = N(() => {
      var $;
      return (($ = v.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), y = N(() => {
      var $;
      return (($ = n.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), b = N(
      () => h.value > 0 && y.value === h.value
    ), w = N(() => !(!n.preview || n.preview.has_uncommitted_changes || v.value && !b.value));
    function L($) {
      if (!v.value) return !1;
      const C = $.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((B) => B.name === C);
    }
    function M($) {
      const C = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      l("pull", { modelStrategy: f.value, force: $, resolutions: C });
    }
    return ($, C) => {
      var B, x;
      return s(), R(We, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[11] || (C[11] = (T) => $.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: C[10] || (C[10] = Le(() => {
            }, ["stop"]))
          }, [
            e("div", Lf, [
              e("h3", zf, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (T) => $.$emit("close"))
              }, "✕")
            ]),
            e("div", Pf, [
              t.error ? (s(), o("div", Df, [
                C[13] || (C[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  C[12] || (C[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  g.value ? (s(), o("p", Nf, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : d("", !0)
                ])
              ])) : t.loading ? (s(), o("div", Uf, [...C[14] || (C[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                p(" Loading preview... ", -1)
              ])])) : (B = t.preview) != null && B.has_uncommitted_changes ? (s(), o(V, { key: 2 }, [
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
              ], 64)) : t.preview ? (s(), o(V, { key: 3 }, [
                e("div", Of, [
                  C[17] || (C[17] = e("span", { class: "icon" }, "📥", -1)),
                  p(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                r.value ? (s(), o("div", Bf, [
                  C[21] || (C[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  u.value > 0 ? (s(), o("details", Ff, [
                    e("summary", null, [
                      C[18] || (C[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", Af, a(u.value) + " changes", 1)
                    ]),
                    e("div", Vf, [
                      (s(!0), o(V, null, oe(t.preview.changes.workflows.added, (T) => (s(), o("div", {
                        key: "a-" + T,
                        class: "change-item add"
                      }, " + " + a(T), 1))), 128)),
                      (s(!0), o(V, null, oe(t.preview.changes.workflows.modified, (T) => (s(), o("div", {
                        key: "m-" + T,
                        class: "change-item modify"
                      }, [
                        p(" ~ " + a(T) + " ", 1),
                        L(T) ? (s(), o("span", Wf, "CONFLICT")) : d("", !0)
                      ]))), 128)),
                      (s(!0), o(V, null, oe(t.preview.changes.workflows.deleted, (T) => (s(), o("div", {
                        key: "d-" + T,
                        class: "change-item delete"
                      }, " - " + a(T), 1))), 128))
                    ])
                  ])) : d("", !0),
                  m.value > 0 ? (s(), o("details", Gf, [
                    e("summary", null, [
                      C[19] || (C[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", jf, a(m.value) + " to install", 1)
                    ]),
                    e("div", Hf, [
                      (s(!0), o(V, null, oe(t.preview.changes.nodes.to_install, (T) => (s(), o("div", {
                        key: T,
                        class: "change-item add"
                      }, " + " + a(T), 1))), 128))
                    ])
                  ])) : d("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", qf, [
                    e("summary", null, [
                      C[20] || (C[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", Kf, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", Jf, [
                      (s(!0), o(V, null, oe(t.preview.changes.models.referenced, (T) => (s(), o("div", {
                        key: T,
                        class: "change-item"
                      }, a(T), 1))), 128))
                    ])
                  ])) : d("", !0)
                ])) : d("", !0),
                v.value ? (s(), R(Rf, {
                  key: 1,
                  "conflict-count": h.value,
                  "resolved-count": y.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : d("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", Yf, [
                  C[26] || (C[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", Xf, [
                    e("label", Qf, [
                      Oe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[1] || (C[1] = (T) => f.value = T),
                        value: "all"
                      }, null, 512), [
                        [Kt, f.value]
                      ]),
                      C[22] || (C[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", Zf, [
                      Oe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[2] || (C[2] = (T) => f.value = T),
                        value: "required"
                      }, null, 512), [
                        [Kt, f.value]
                      ]),
                      C[23] || (C[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", eg, [
                      Oe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[3] || (C[3] = (T) => f.value = T),
                        value: "skip"
                      }, null, 512), [
                        [Kt, f.value]
                      ]),
                      C[24] || (C[24] = e("span", null, "Skip model downloads", -1)),
                      C[25] || (C[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  C[27] || (C[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : d("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", tg, [
                  C[28] || (C[28] = e("span", { class: "icon" }, "✓", -1)),
                  p(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : d("", !0)
              ], 64)) : d("", !0)
            ]),
            e("div", sg, [
              k(ae, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (T) => $.$emit("close"))
              }, {
                default: i(() => [...C[29] || (C[29] = [
                  p(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(V, { key: 0 }, [
                k(ae, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: C[5] || (C[5] = (T) => M(!1))
                }, {
                  default: i(() => [...C[30] || (C[30] = [
                    p(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                k(ae, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: C[6] || (C[6] = (T) => M(!0))
                }, {
                  default: i(() => [...C[31] || (C[31] = [
                    p(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (x = t.preview) != null && x.has_uncommitted_changes ? (s(), R(ae, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: C[7] || (C[7] = (T) => M(!0))
              }, {
                default: i(() => [...C[32] || (C[32] = [
                  p(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(V, { key: 2 }, [
                v.value && !b.value ? (s(), R(ae, {
                  key: 0,
                  variant: "primary",
                  onClick: C[8] || (C[8] = (T) => l("openConflictResolution"))
                }, {
                  default: i(() => [
                    p(" Resolve Conflicts (" + a(y.value) + "/" + a(h.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), R(ae, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !w.value,
                  onClick: C[9] || (C[9] = (T) => M(!1))
                }, {
                  default: i(() => [...C[33] || (C[33] = [
                    p(" Pull Changes ", -1)
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
}), ng = /* @__PURE__ */ te(og, [["__scopeId", "data-v-300c7b2f"]]), ag = { class: "modal-header" }, lg = { class: "modal-title" }, ig = { class: "modal-body" }, rg = {
  key: 0,
  class: "loading-state"
}, dg = {
  key: 1,
  class: "warning-box"
}, cg = {
  key: 0,
  class: "commits-section"
}, ug = { class: "commit-list" }, mg = { class: "commit-hash" }, vg = { class: "commit-message" }, fg = { class: "commit-date" }, gg = { class: "force-option" }, pg = { class: "checkbox-option" }, hg = { class: "commit-summary" }, yg = {
  key: 0,
  class: "commits-section"
}, wg = { class: "commit-list" }, kg = { class: "commit-hash" }, bg = { class: "commit-message" }, _g = { class: "commit-date" }, $g = {
  key: 1,
  class: "up-to-date"
}, Cg = { class: "modal-actions" }, xg = /* @__PURE__ */ ee({
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
    const n = c, l = _(!1);
    function f(g) {
      n("push", { force: g });
    }
    return (g, u) => {
      var m, r, v;
      return s(), R(We, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: u[7] || (u[7] = (h) => g.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: u[6] || (u[6] = Le(() => {
            }, ["stop"]))
          }, [
            e("div", ag, [
              e("h3", lg, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: u[0] || (u[0] = (h) => g.$emit("close"))
              }, "✕")
            ]),
            e("div", ig, [
              t.loading ? (s(), o("div", rg, [...u[8] || (u[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                p(" Loading preview... ", -1)
              ])])) : (m = t.preview) != null && m.has_uncommitted_changes ? (s(), o("div", dg, [...u[9] || (u[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (r = t.preview) != null && r.remote_has_new_commits ? (s(), o(V, { key: 2 }, [
                u[13] || (u[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (s(), o("div", cg, [
                  u[10] || (u[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", ug, [
                    (s(!0), o(V, null, oe(t.preview.commits, (h) => (s(), o("div", {
                      key: h.hash,
                      class: "commit-item"
                    }, [
                      e("span", mg, a(h.short_hash || h.hash.slice(0, 7)), 1),
                      e("span", vg, a(h.message), 1),
                      e("span", fg, a(h.date_relative || h.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                e("div", gg, [
                  e("label", pg, [
                    Oe(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": u[1] || (u[1] = (h) => l.value = h)
                    }, null, 512), [
                      [Xt, l.value]
                    ]),
                    u[11] || (u[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  u[12] || (u[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(V, { key: 3 }, [
                e("div", hg, [
                  u[14] || (u[14] = e("span", { class: "icon" }, "📤", -1)),
                  p(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", yg, [
                  u[15] || (u[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", wg, [
                    (s(!0), o(V, null, oe(t.preview.commits, (h) => (s(), o("div", {
                      key: h.hash,
                      class: "commit-item"
                    }, [
                      e("span", kg, a(h.short_hash || h.hash.slice(0, 7)), 1),
                      e("span", bg, a(h.message), 1),
                      e("span", _g, a(h.date_relative || h.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", $g, [
                  u[16] || (u[16] = e("span", { class: "icon" }, "✓", -1)),
                  p(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : d("", !0)
            ]),
            e("div", Cg, [
              k(ae, {
                variant: "secondary",
                onClick: u[2] || (u[2] = (h) => g.$emit("close"))
              }, {
                default: i(() => [...u[17] || (u[17] = [
                  p(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (v = t.preview) != null && v.remote_has_new_commits ? (s(), o(V, { key: 0 }, [
                k(ae, {
                  variant: "secondary",
                  onClick: u[3] || (u[3] = (h) => g.$emit("pull-first"))
                }, {
                  default: i(() => [...u[18] || (u[18] = [
                    p(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                k(ae, {
                  variant: "destructive",
                  disabled: !l.value,
                  loading: t.pushing,
                  onClick: u[4] || (u[4] = (h) => f(!0))
                }, {
                  default: i(() => [...u[19] || (u[19] = [
                    p(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), R(ae, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: u[5] || (u[5] = (h) => f(!1))
              }, {
                default: i(() => [...u[20] || (u[20] = [
                  p(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : d("", !0)
            ])
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), Sg = /* @__PURE__ */ te(xg, [["__scopeId", "data-v-bc6ded53"]]), Ig = { class: "resolution-choice-group" }, Eg = ["disabled"], Mg = ["disabled"], Tg = /* @__PURE__ */ ee({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("div", Ig, [
      e("button", {
        class: me(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (l) => c.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, Eg),
      e("button", {
        class: me(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (l) => c.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, Mg)
    ]));
  }
}), Rg = /* @__PURE__ */ te(Tg, [["__scopeId", "data-v-985715ed"]]), Lg = { class: "conflict-header" }, zg = { class: "conflict-info" }, Pg = { class: "workflow-name" }, Dg = { class: "conflict-description" }, Ng = {
  key: 0,
  class: "resolved-badge"
}, Ug = { class: "resolved-text" }, Og = { class: "conflict-hashes" }, Bg = { class: "hash-item" }, Fg = { class: "hash-item" }, Ag = { class: "conflict-actions" }, Vg = /* @__PURE__ */ ee({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: c }) {
    const n = t, l = c, f = _(n.resolution);
    $t(() => n.resolution, (r) => {
      f.value = r;
    }), $t(f, (r) => {
      r && l("resolve", r);
    });
    const g = N(() => f.value !== null), u = N(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), m = N(() => {
      switch (f.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (r, v) => {
      var h, y;
      return s(), o("div", {
        class: me(["conflict-item", { resolved: g.value }])
      }, [
        e("div", Lg, [
          v[2] || (v[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", zg, [
            e("code", Pg, a(t.conflict.name) + ".json", 1),
            e("div", Dg, a(u.value), 1)
          ]),
          g.value ? (s(), o("div", Ng, [
            v[1] || (v[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", Ug, a(m.value), 1)
          ])) : d("", !0)
        ]),
        e("div", Og, [
          e("span", Bg, [
            v[3] || (v[3] = p("Your: ", -1)),
            e("code", null, a(((h = t.conflict.base_hash) == null ? void 0 : h.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", Fg, [
            v[4] || (v[4] = p("Theirs: ", -1)),
            e("code", null, a(((y = t.conflict.target_hash) == null ? void 0 : y.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", Ag, [
          k(Rg, {
            modelValue: f.value,
            "onUpdate:modelValue": v[0] || (v[0] = (b) => f.value = b),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), Wg = /* @__PURE__ */ te(Vg, [["__scopeId", "data-v-506d3bbf"]]), Gg = { class: "resolution-content" }, jg = {
  key: 0,
  class: "error-box"
}, Hg = { class: "resolution-header" }, qg = { class: "header-stats" }, Kg = { class: "stat" }, Jg = { class: "stat-value" }, Yg = { class: "stat resolved" }, Xg = { class: "stat-value" }, Qg = {
  key: 0,
  class: "stat pending"
}, Zg = { class: "stat-value" }, ep = { class: "conflicts-list" }, tp = {
  key: 1,
  class: "all-resolved-message"
}, sp = /* @__PURE__ */ ee({
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
    const n = t, l = c, f = N(() => n.resolutions.size), g = N(() => n.workflowConflicts.length - f.value), u = N(() => f.value === n.workflowConflicts.length), m = N(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function r(b) {
      const w = n.resolutions.get(b);
      return (w == null ? void 0 : w.resolution) ?? null;
    }
    function v(b, w) {
      l("resolve", b, w);
    }
    function h() {
      l("close");
    }
    function y() {
      l("apply");
    }
    return (b, w) => (s(), R(Je, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: h
    }, {
      body: i(() => [
        e("div", Gg, [
          t.error ? (s(), o("div", jg, [
            w[1] || (w[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              w[0] || (w[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : d("", !0),
          e("div", Hg, [
            e("div", qg, [
              e("div", Kg, [
                e("span", Jg, a(t.workflowConflicts.length), 1),
                w[2] || (w[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", Yg, [
                e("span", Xg, a(f.value), 1),
                w[3] || (w[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              g.value > 0 ? (s(), o("div", Qg, [
                e("span", Zg, a(g.value), 1),
                w[4] || (w[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : d("", !0)
            ]),
            w[5] || (w[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", ep, [
            (s(!0), o(V, null, oe(t.workflowConflicts, (L) => (s(), R(Wg, {
              key: L.name,
              conflict: L,
              resolution: r(L.name),
              onResolve: (M) => v(L.name, M)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          u.value ? (s(), o("div", tp, [
            w[6] || (w[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(m.value) + '" to continue.', 1)
          ])) : d("", !0)
        ])
      ]),
      footer: i(() => [
        k(ve, {
          variant: "secondary",
          onClick: h
        }, {
          default: i(() => [...w[7] || (w[7] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        }),
        w[8] || (w[8] = e("div", { class: "footer-spacer" }, null, -1)),
        k(ve, {
          variant: "primary",
          disabled: !u.value || t.validating,
          loading: t.validating,
          onClick: y
        }, {
          default: i(() => [
            p(a(m.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), op = /* @__PURE__ */ te(sp, [["__scopeId", "data-v-c58d150d"]]), np = { class: "node-conflict-item" }, ap = { class: "node-header" }, lp = { class: "node-name" }, ip = { class: "node-id" }, rp = { class: "version-comparison" }, dp = { class: "version yours" }, cp = { class: "version theirs" }, up = { class: "chosen-version" }, mp = { class: "chosen" }, vp = { class: "chosen-reason" }, fp = { class: "affected-workflows" }, gp = { class: "wf-source" }, pp = { class: "wf-version" }, hp = /* @__PURE__ */ ee({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", np, [
      e("div", ap, [
        e("code", lp, a(t.conflict.node_name), 1),
        e("span", ip, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", rp, [
        e("div", dp, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", cp, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", up, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", mp, a(t.conflict.chosen_version), 1),
        e("span", vp, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", fp, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (s(!0), o(V, null, oe(t.conflict.affected_workflows, (l) => (s(), o("li", {
            key: l.name
          }, [
            e("code", null, a(l.name), 1),
            e("span", gp, "(" + a(l.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", pp, "needs v" + a(l.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), yp = /* @__PURE__ */ te(hp, [["__scopeId", "data-v-8b626725"]]), wp = { class: "validation-content" }, kp = {
  key: 0,
  class: "compatible-message"
}, bp = { class: "conflicts-list" }, _p = {
  key: 2,
  class: "warnings-section"
}, $p = /* @__PURE__ */ ee({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: c }) {
    const n = t, l = c, f = N(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (g, u) => (s(), R(Je, {
      title: "Compatibility Check",
      size: "lg",
      onClose: u[3] || (u[3] = (m) => l("cancel"))
    }, {
      body: i(() => [
        e("div", wp, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (s(), o("div", kp, [
            u[5] || (u[5] = e("span", { class: "icon" }, "✓", -1)),
            e("div", null, [
              u[4] || (u[4] = e("strong", null, "All clear!", -1)),
              e("p", null, "Your workflow choices are compatible. Ready to " + a(t.operationType) + ".", 1)
            ])
          ])) : t.validation.node_conflicts.length > 0 ? (s(), o(V, { key: 1 }, [
            u[6] || (u[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", bp, [
              (s(!0), o(V, null, oe(t.validation.node_conflicts, (m) => (s(), R(yp, {
                key: m.node_id,
                conflict: m
              }, null, 8, ["conflict"]))), 128))
            ]),
            u[7] || (u[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : d("", !0),
          t.validation.warnings.length > 0 ? (s(), o("div", _p, [
            u[8] || (u[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (s(!0), o(V, null, oe(t.validation.warnings, (m, r) => (s(), o("li", { key: r }, a(m), 1))), 128))
            ])
          ])) : d("", !0)
        ])
      ]),
      footer: i(() => [
        k(ve, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (m) => l("cancel"))
        }, {
          default: i(() => [...u[9] || (u[9] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u[11] || (u[11] = e("div", { class: "footer-spacer" }, null, -1)),
        k(ve, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (m) => l("goBack"))
        }, {
          default: i(() => [...u[10] || (u[10] = [
            p(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        k(ve, {
          variant: "primary",
          loading: t.executing,
          onClick: u[2] || (u[2] = (m) => l("proceed"))
        }, {
          default: i(() => [
            p(a(f.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), Cp = /* @__PURE__ */ te($p, [["__scopeId", "data-v-fefd26ed"]]), xp = { key: 0 }, Sp = /* @__PURE__ */ ee({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: c }) {
    const n = c, {
      getRemotes: l,
      addRemote: f,
      removeRemote: g,
      updateRemoteUrl: u,
      fetchRemote: m,
      getRemoteSyncStatus: r,
      getPullPreview: v,
      pullFromRemote: h,
      getPushPreview: y,
      pushToRemote: b,
      validateMerge: w
    } = Ae(), L = _([]), M = _(null), $ = _({}), C = _(!1), B = _(null), x = _(""), T = _(!1), K = _(null), A = _(!1), W = _("add"), E = _({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), z = N(() => {
      if (!x.value.trim()) return L.value;
      const F = x.value.toLowerCase();
      return L.value.filter(
        (Q) => Q.name.toLowerCase().includes(F) || Q.fetch_url.toLowerCase().includes(F) || Q.push_url.toLowerCase().includes(F)
      );
    });
    async function O() {
      C.value = !0, B.value = null;
      try {
        const F = await l();
        L.value = F.remotes, M.value = F.current_branch_tracking || null, await Promise.all(
          F.remotes.map(async (Q) => {
            const he = await r(Q.name);
            he && ($.value[Q.name] = he);
          })
        );
      } catch (F) {
        B.value = F instanceof Error ? F.message : "Failed to load remotes";
      } finally {
        C.value = !1;
      }
    }
    function le() {
      W.value = "add", E.value = { name: "", fetchUrl: "", pushUrl: "" }, A.value = !0;
    }
    function se(F) {
      const Q = L.value.find((he) => he.name === F);
      Q && (W.value = "edit", E.value = {
        name: Q.name,
        fetchUrl: Q.fetch_url,
        pushUrl: Q.push_url
      }, A.value = !0);
    }
    async function Y(F) {
      try {
        W.value === "add" ? await f(F.name, F.fetchUrl) : await u(F.name, F.fetchUrl, F.pushUrl || void 0), A.value = !1, await O();
      } catch (Q) {
        B.value = Q instanceof Error ? Q.message : "Operation failed";
      }
    }
    function de() {
      A.value = !1, E.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function J(F) {
      K.value = F;
      try {
        await m(F);
        const Q = await r(F);
        Q && ($.value[F] = Q), n("toast", `✓ Fetched from ${F}`, "success");
      } catch (Q) {
        n("toast", Q instanceof Error ? Q.message : "Fetch failed", "error");
      } finally {
        K.value = null;
      }
    }
    async function D(F) {
      if (confirm(`Remove remote "${F}"?`))
        try {
          await g(F), await O();
        } catch (Q) {
          B.value = Q instanceof Error ? Q.message : "Failed to remove remote";
        }
    }
    function P() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const I = _("idle"), re = N(() => I.value === "pull_preview"), Z = N(
      () => I.value === "resolving" || I.value === "validating"
    ), ye = N(
      () => I.value === "validation_review" || I.value === "executing"
    ), $e = _(!1), Me = _(null), Ue = _(!1), ce = _(null), ge = _(!1), Ie = _(null), X = _(null), ne = _(/* @__PURE__ */ new Map()), pe = _(null), ze = _(null), st = N(() => Ie.value && Fs(Ie.value) ? Ie.value : null);
    async function dt(F) {
      ce.value = F, I.value = "pull_preview", ge.value = !0, Ie.value = null, X.value = null;
      try {
        Ie.value = await v(F);
      } catch (Q) {
        X.value = Q instanceof Error ? Q.message : "Failed to load pull preview";
      } finally {
        ge.value = !1;
      }
    }
    function Se() {
      I.value = "idle", Ie.value = null, X.value = null, ce.value = null;
    }
    async function Qe(F) {
      if (!ce.value) return;
      I.value = "executing", X.value = null;
      const Q = ce.value;
      try {
        const he = await h(Q, F);
        if (he.rolled_back) {
          X.value = `Pull failed and was rolled back: ${he.error || "Unknown error"}`, I.value = "pull_preview";
          return;
        }
        Te(), I.value = "idle", n("toast", `✓ Pulled from ${Q}`, "success"), await O();
      } catch (he) {
        X.value = he instanceof Error ? he.message : "Pull failed", I.value = "pull_preview";
      }
    }
    function Ye() {
      st.value && (I.value = "resolving", ze.value = null);
    }
    function Ge(F, Q) {
      ne.value.set(F, { name: F, resolution: Q });
    }
    function gt() {
      I.value = "pull_preview";
    }
    async function we() {
      I.value = "validating", ze.value = null;
      try {
        const F = Array.from(ne.value.values());
        pe.value = await w(ce.value, F), I.value = "validation_review";
      } catch (F) {
        ze.value = F instanceof Error ? F.message : "Validation failed", I.value = "resolving";
      }
    }
    async function Ve() {
      I.value = "executing";
      const F = ce.value;
      try {
        const Q = Array.from(ne.value.values()), he = await h(F, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Q
        });
        if (he.rolled_back) {
          X.value = `Pull failed and was rolled back: ${he.error || "Unknown error"}`, I.value = "pull_preview";
          return;
        }
        Te(), I.value = "idle", n("toast", `✓ Pulled from ${F}`, "success"), await O();
      } catch (Q) {
        X.value = Q instanceof Error ? Q.message : "Pull failed", I.value = "validation_review";
      }
    }
    function ct() {
      I.value = "resolving";
    }
    function ot() {
      Te(), I.value = "idle";
    }
    function Te() {
      ne.value.clear(), pe.value = null, ze.value = null, X.value = null, Ie.value = null, ce.value = null;
    }
    async function ue(F) {
      ce.value = F, $e.value = !0, ge.value = !0, Me.value = null;
      try {
        Me.value = await y(F);
      } catch (Q) {
        B.value = Q instanceof Error ? Q.message : "Failed to load push preview";
      } finally {
        ge.value = !1;
      }
    }
    function j() {
      $e.value = !1, Me.value = null, ce.value = null;
    }
    async function H(F) {
      if (!ce.value) return;
      Ue.value = !0;
      const Q = ce.value;
      try {
        await b(Q, F), j(), n("toast", `✓ Pushed to ${Q}`, "success"), await O();
      } catch (he) {
        n("toast", he instanceof Error ? he.message : "Push failed", "error");
      } finally {
        Ue.value = !1;
      }
    }
    function S() {
      const F = ce.value;
      j(), F && dt(F);
    }
    return Ne(O), (F, Q) => (s(), o(V, null, [
      k(qe, null, {
        header: i(() => [
          k(Ke, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: Q[0] || (Q[0] = (he) => T.value = !0)
          }, {
            actions: i(() => [
              A.value ? d("", !0) : (s(), R(ae, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: le
              }, {
                default: i(() => [...Q[3] || (Q[3] = [
                  p(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          A.value ? d("", !0) : (s(), R(zt, {
            key: 0,
            modelValue: x.value,
            "onUpdate:modelValue": Q[1] || (Q[1] = (he) => x.value = he),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: i(() => [
          C.value ? (s(), R(kt, {
            key: 0,
            message: "Loading remotes..."
          })) : B.value ? (s(), R(bt, {
            key: 1,
            message: B.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            A.value ? (s(), R(bf, {
              key: 0,
              mode: W.value,
              "remote-name": E.value.name,
              "fetch-url": E.value.fetchUrl,
              "push-url": E.value.pushUrl,
              onSubmit: Y,
              onCancel: de
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            L.value.length && !A.value ? (s(), R(jt, {
              key: 1,
              variant: "compact"
            }, {
              default: i(() => [
                p(" Total: " + a(L.value.length) + " remote" + a(L.value.length !== 1 ? "s" : "") + " ", 1),
                M.value ? (s(), o("span", xp, " • Tracking: " + a(M.value.remote) + "/" + a(M.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            z.value.length && !A.value ? (s(), R(Fe, {
              key: 2,
              title: "REMOTES",
              count: z.value.length
            }, {
              default: i(() => [
                (s(!0), o(V, null, oe(z.value, (he) => (s(), R(rf, {
                  key: he.name,
                  remote: he,
                  "sync-status": $.value[he.name],
                  "fetching-remote": K.value,
                  onFetch: J,
                  onEdit: se,
                  onRemove: D,
                  onPull: dt,
                  onPush: ue
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !z.value.length && !A.value ? (s(), R(rt, {
              key: 3,
              icon: "🌐",
              message: x.value ? `No remotes match '${x.value}'` : "No remotes configured."
            }, {
              actions: i(() => [
                k(ae, {
                  variant: "primary",
                  onClick: le
                }, {
                  default: i(() => [...Q[4] || (Q[4] = [
                    p(" Add Your First Remote ", -1)
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
      k(ft, {
        show: T.value,
        title: "About Git Remotes",
        onClose: Q[2] || (Q[2] = (he) => T.value = !1)
      }, {
        content: i(() => [...Q[5] || (Q[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            p(" The "),
            e("strong", null, '"origin"'),
            p(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: i(() => [
          k(ae, {
            variant: "link",
            onClick: P
          }, {
            default: i(() => [...Q[6] || (Q[6] = [
              p(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k(ng, {
        show: re.value,
        "remote-name": ce.value || "",
        preview: Ie.value,
        loading: ge.value,
        pulling: I.value === "executing",
        error: X.value,
        "conflict-resolutions": ne.value,
        onClose: Se,
        onPull: Qe,
        onOpenConflictResolution: Ye
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      k(Sg, {
        show: $e.value,
        "remote-name": ce.value || "",
        preview: Me.value,
        loading: ge.value,
        pushing: Ue.value,
        onClose: j,
        onPush: H,
        onPullFirst: S
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      Z.value && st.value ? (s(), R(op, {
        key: 0,
        "workflow-conflicts": st.value.workflow_conflicts,
        resolutions: ne.value,
        "operation-type": "pull",
        validating: I.value === "validating",
        error: ze.value,
        onClose: gt,
        onResolve: Ge,
        onApply: we
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : d("", !0),
      ye.value && pe.value ? (s(), R(Cp, {
        key: 1,
        validation: pe.value,
        "operation-type": "pull",
        executing: I.value === "executing",
        onProceed: Ve,
        onGoBack: ct,
        onCancel: ot
      }, null, 8, ["validation", "executing"])) : d("", !0)
    ], 64));
  }
}), Ip = /* @__PURE__ */ te(Sp, [["__scopeId", "data-v-9ae3b76d"]]), Ep = { class: "setting-info" }, Mp = { class: "setting-label" }, Tp = {
  key: 0,
  class: "required-marker"
}, Rp = {
  key: 0,
  class: "setting-description"
}, Lp = { class: "setting-control" }, zp = /* @__PURE__ */ ee({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: me(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Ep, [
        e("div", Mp, [
          p(a(t.label) + " ", 1),
          t.required ? (s(), o("span", Tp, "*")) : d("", !0)
        ]),
        t.description ? (s(), o("div", Rp, a(t.description), 1)) : d("", !0)
      ]),
      e("div", Lp, [
        Ce(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), ns = /* @__PURE__ */ te(zp, [["__scopeId", "data-v-cb5d236c"]]), Pp = { class: "toggle" }, Dp = ["checked", "disabled"], Np = /* @__PURE__ */ ee({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", Pp, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (l) => c.$emit("update:modelValue", l.target.checked)),
        class: "toggle-input"
      }, null, 40, Dp),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Up = /* @__PURE__ */ te(Np, [["__scopeId", "data-v-71c0f550"]]), Op = { class: "workspace-settings-content" }, Bp = { class: "settings-section" }, Fp = { class: "path-setting" }, Ap = { class: "path-value" }, Vp = { class: "path-setting" }, Wp = { class: "path-value" }, Gp = { class: "settings-section" }, jp = { class: "settings-section" }, Hp = { class: "settings-section" }, qp = /* @__PURE__ */ ee({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(t, { expose: c, emit: n }) {
    const l = t, f = n, { getConfig: g, updateConfig: u } = Ae(), m = _(!1), r = _(null), v = _(null), h = _(null), y = _(null), b = _(""), w = _(""), L = _(!1);
    function M(A) {
      return A.join(" ");
    }
    function $(A) {
      return A.trim() ? A.trim().split(/\s+/) : [];
    }
    const C = N(() => {
      if (!y.value) return !1;
      const A = b.value !== (y.value.civitai_api_key || ""), W = w.value !== M(y.value.comfyui_extra_args || []);
      return A || W;
    });
    async function B() {
      m.value = !0, r.value = null;
      try {
        h.value = await g(l.workspacePath || void 0), y.value = { ...h.value }, b.value = h.value.civitai_api_key || "", w.value = M(h.value.comfyui_extra_args || []);
        const A = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        L.value = A === "true";
      } catch (A) {
        r.value = A instanceof Error ? A.message : "Failed to load settings";
      } finally {
        m.value = !1;
      }
    }
    async function x() {
      var A, W;
      v.value = null;
      try {
        const E = {};
        b.value !== (((A = y.value) == null ? void 0 : A.civitai_api_key) || "") && (E.civitai_api_key = b.value || null), w.value !== M(((W = y.value) == null ? void 0 : W.comfyui_extra_args) || []) && (E.comfyui_extra_args = $(w.value)), await u(E, l.workspacePath || void 0), await B(), v.value = { type: "success", message: "Settings saved successfully" }, f("saved"), setTimeout(() => {
          v.value = null;
        }, 3e3);
      } catch (E) {
        const z = E instanceof Error ? E.message : "Failed to save settings";
        v.value = { type: "error", message: z }, f("error", z);
      }
    }
    function T() {
      y.value && (b.value = y.value.civitai_api_key || "", w.value = M(y.value.comfyui_extra_args || []), v.value = null);
    }
    function K(A) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(A)), console.log("[ComfyGit] Auto-refresh setting saved:", A);
    }
    return c({
      saveSettings: x,
      resetSettings: T,
      hasChanges: C,
      loadSettings: B
    }), Ne(B), (A, W) => (s(), o("div", Op, [
      m.value ? (s(), R(kt, {
        key: 0,
        message: "Loading workspace settings..."
      })) : r.value ? (s(), R(bt, {
        key: 1,
        message: r.value,
        retry: !0,
        onRetry: B
      }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
        k(Fe, { title: "WORKSPACE PATHS" }, {
          default: i(() => {
            var E, z;
            return [
              e("div", Bp, [
                e("div", Fp, [
                  W[3] || (W[3] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                  W[4] || (W[4] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  e("div", Ap, a(((E = h.value) == null ? void 0 : E.workspace_path) || "Loading..."), 1)
                ]),
                e("div", Vp, [
                  W[5] || (W[5] = e("div", { class: "path-label" }, "Models Directory", -1)),
                  W[6] || (W[6] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  e("div", Wp, a(((z = h.value) == null ? void 0 : z.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        k(Fe, { title: "API CREDENTIALS" }, {
          default: i(() => [
            e("div", Gp, [
              k(ns, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: i(() => [
                  k(Qt, {
                    modelValue: b.value,
                    "onUpdate:modelValue": W[0] || (W[0] = (E) => b.value = E),
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
        k(Fe, { title: "COMFYUI SETTINGS" }, {
          default: i(() => [
            e("div", jp, [
              k(ns, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: i(() => [
                  k(Qt, {
                    modelValue: w.value,
                    "onUpdate:modelValue": W[1] || (W[1] = (E) => w.value = E),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              W[7] || (W[7] = e("div", { class: "setting-hint" }, [
                p(" Common flags: "),
                e("code", null, "--lowvram"),
                p(", "),
                e("code", null, "--highvram"),
                p(", "),
                e("code", null, "--listen 0.0.0.0"),
                p(", "),
                e("code", null, "--cuda-device 1")
              ], -1))
            ])
          ]),
          _: 1
        }),
        k(Fe, { title: "UI SETTINGS" }, {
          default: i(() => [
            e("div", Hp, [
              k(ns, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: i(() => [
                  k(Up, {
                    modelValue: L.value,
                    "onUpdate:modelValue": [
                      W[2] || (W[2] = (E) => L.value = E),
                      K
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        v.value ? (s(), R(jt, {
          key: 0,
          variant: (v.value.type === "success", "compact")
        }, {
          default: i(() => [
            e("span", {
              style: wt({ color: v.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, a(v.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : d("", !0)
      ], 64))
    ]));
  }
}), As = /* @__PURE__ */ te(qp, [["__scopeId", "data-v-9f44552d"]]), Kp = /* @__PURE__ */ ee({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const c = _(null);
    function n() {
      console.log("[ComfyGit] Settings saved");
    }
    return (l, f) => (s(), R(qe, null, {
      header: i(() => [
        k(Ke, { title: "WORKSPACE SETTINGS" }, {
          actions: i(() => {
            var g, u;
            return [
              k(ae, {
                variant: "primary",
                size: "sm",
                disabled: !((g = c.value) != null && g.hasChanges),
                onClick: f[0] || (f[0] = (m) => {
                  var r;
                  return (r = c.value) == null ? void 0 : r.saveSettings();
                })
              }, {
                default: i(() => [...f[2] || (f[2] = [
                  p(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (u = c.value) != null && u.hasChanges ? (s(), R(ae, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: f[1] || (f[1] = (m) => {
                  var r;
                  return (r = c.value) == null ? void 0 : r.resetSettings();
                })
              }, {
                default: i(() => [...f[3] || (f[3] = [
                  p(" Reset ", -1)
                ])]),
                _: 1
              })) : d("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: i(() => [
        k(As, {
          ref_key: "contentRef",
          ref: c,
          onSaved: n
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), Jp = /* @__PURE__ */ ee({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c, getWorkspaceLogPath: n, openFile: l } = Ae(), f = _([]), g = _(!1), u = _(null), m = _(!1), r = _(null), v = _(null), h = _(!1), y = N(() => f.value.length === 0 ? [] : f.value.map((M) => ({
      text: `${M.timestamp} - ${M.name} - ${M.level} - ${M.func}:${M.line} - ${M.message}`,
      level: M.level
    })));
    async function b() {
      g.value = !0, u.value = null;
      try {
        f.value = await c(void 0, 500);
      } catch (M) {
        u.value = M instanceof Error ? M.message : "Failed to load workspace logs";
      } finally {
        g.value = !1, setTimeout(() => {
          var M;
          (M = r.value) != null && M.parentElement && (r.value.parentElement.scrollTop = r.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function w() {
      try {
        const M = await n();
        M.exists && (v.value = M.path);
      } catch {
      }
    }
    async function L() {
      if (v.value) {
        h.value = !0;
        try {
          await l(v.value);
        } catch (M) {
          console.error("Failed to open log file:", M);
        } finally {
          h.value = !1;
        }
      }
    }
    return Ne(() => {
      b(), w();
    }), (M, $) => (s(), o(V, null, [
      k(qe, null, {
        header: i(() => [
          k(Ke, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (C) => m.value = !0)
          }, {
            actions: i(() => [
              k(ae, {
                variant: "secondary",
                size: "sm",
                onClick: L,
                disabled: !v.value || h.value,
                title: "Open log file in default editor"
              }, {
                default: i(() => [
                  p(a(h.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(ae, {
                variant: "secondary",
                size: "sm",
                onClick: b,
                disabled: g.value
              }, {
                default: i(() => [
                  p(a(g.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          g.value ? (s(), R(kt, {
            key: 0,
            message: "Loading workspace logs..."
          })) : u.value ? (s(), R(bt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            f.value.length === 0 ? (s(), R(rt, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: r,
              class: "log-output"
            }, [
              (s(!0), o(V, null, oe(y.value, (C, B) => (s(), o("div", {
                key: B,
                class: me(`log-line log-level-${C.level.toLowerCase()}`)
              }, a(C.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      k(ft, {
        show: m.value,
        title: "About Workspace Logs",
        onClose: $[2] || ($[2] = (C) => m.value = !1)
      }, {
        content: i(() => [...$[3] || ($[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            p(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            p(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            p(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            p(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: i(() => [
          k(ae, {
            variant: "primary",
            onClick: $[1] || ($[1] = (C) => m.value = !1)
          }, {
            default: i(() => [...$[4] || ($[4] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Yp = /* @__PURE__ */ te(Jp, [["__scopeId", "data-v-7f05352a"]]), Xp = /* @__PURE__ */ ee({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n, getEnvironmentLogPath: l, openFile: f } = Ae(), g = _([]), u = _(!1), m = _(null), r = _(!1), v = _("production"), h = _(null), y = _(null), b = _(!1), w = N(() => g.value.length === 0 ? [] : g.value.map((C) => ({
      text: `${C.timestamp} - ${C.name} - ${C.level} - ${C.func}:${C.line} - ${C.message}`,
      level: C.level
    })));
    async function L() {
      u.value = !0, m.value = null;
      try {
        g.value = await c(void 0, 500);
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
          (C = h.value) != null && C.parentElement && (h.value.parentElement.scrollTop = h.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function M() {
      try {
        const C = await l();
        C.exists && (y.value = C.path);
      } catch {
      }
    }
    async function $() {
      if (y.value) {
        b.value = !0;
        try {
          await f(y.value);
        } catch (C) {
          console.error("Failed to open log file:", C);
        } finally {
          b.value = !1;
        }
      }
    }
    return Ne(() => {
      L(), M();
    }), (C, B) => (s(), o(V, null, [
      k(qe, null, {
        header: i(() => [
          k(Ke, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: B[0] || (B[0] = (x) => r.value = !0)
          }, {
            actions: i(() => [
              k(ae, {
                variant: "secondary",
                size: "sm",
                onClick: $,
                disabled: !y.value || b.value,
                title: "Open log file in default editor"
              }, {
                default: i(() => [
                  p(a(b.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(ae, {
                variant: "secondary",
                size: "sm",
                onClick: L,
                disabled: u.value
              }, {
                default: i(() => [
                  p(a(u.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          u.value ? (s(), R(kt, {
            key: 0,
            message: "Loading environment logs..."
          })) : m.value ? (s(), R(bt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            g.value.length === 0 ? (s(), R(rt, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: h,
              class: "log-output"
            }, [
              (s(!0), o(V, null, oe(w.value, (x, T) => (s(), o("div", {
                key: T,
                class: me(`log-line log-level-${x.level.toLowerCase()}`)
              }, a(x.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      k(ft, {
        show: r.value,
        title: "About Environment Logs",
        onClose: B[2] || (B[2] = (x) => r.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            B[3] || (B[3] = p(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(v.value), 1),
            B[4] || (B[4] = p(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          B[5] || (B[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            p(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            p(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            p(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            p(" Detailed debugging information ")
          ], -1)),
          B[6] || (B[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: i(() => [
          k(ae, {
            variant: "primary",
            onClick: B[1] || (B[1] = (x) => r.value = !1)
          }, {
            default: i(() => [...B[7] || (B[7] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Qp = /* @__PURE__ */ te(Xp, [["__scopeId", "data-v-6f8db7ce"]]), Zp = { class: "env-title" }, eh = {
  key: 0,
  class: "current-badge"
}, th = {
  key: 0,
  class: "branch-info"
}, sh = /* @__PURE__ */ ee({
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
    return (c, n) => (s(), R(He, {
      status: t.isCurrent ? "synced" : void 0
    }, Wt({
      icon: i(() => [
        p(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: i(() => [
        e("div", Zp, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", eh, "CURRENT")) : d("", !0)
        ])
      ]),
      subtitle: i(() => [
        t.currentBranch ? (s(), o("span", th, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          p(" " + a(t.currentBranch), 1)
        ])) : d("", !0)
      ]),
      actions: i(() => [
        Ce(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: i(() => [
          k(De, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          k(De, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          k(De, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), R(De, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : d("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), oh = /* @__PURE__ */ te(sh, [["__scopeId", "data-v-9231917a"]]), nh = { class: "env-details" }, ah = { class: "status-row" }, lh = {
  key: 0,
  class: "detail-row"
}, ih = { class: "value mono" }, rh = {
  key: 1,
  class: "detail-row"
}, dh = { class: "value mono small" }, ch = { class: "detail-row" }, uh = { class: "value" }, mh = { class: "detail-row" }, vh = { class: "value" }, fh = { class: "detail-row" }, gh = { class: "value" }, ph = {
  key: 2,
  class: "section-divider"
}, hh = {
  key: 3,
  class: "detail-row"
}, yh = { class: "value" }, wh = {
  key: 4,
  class: "detail-row"
}, kh = { class: "value" }, bh = { class: "footer-actions" }, _h = /* @__PURE__ */ ee({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: c }) {
    const n = c;
    function l(f) {
      if (!f) return "Unknown";
      try {
        const g = new Date(f), m = (/* @__PURE__ */ new Date()).getTime() - g.getTime(), r = Math.floor(m / 6e4), v = Math.floor(m / 36e5), h = Math.floor(m / 864e5);
        return r < 1 ? "just now" : r < 60 ? `${r} ${r === 1 ? "minute" : "minutes"} ago` : v < 24 ? `${v} ${v === 1 ? "hour" : "hours"} ago` : h < 30 ? `${h} ${h === 1 ? "day" : "days"} ago` : g.toLocaleDateString();
      } catch {
        return f;
      }
    }
    return (f, g) => (s(), R(Je, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: g[2] || (g[2] = (u) => n("close"))
    }, {
      body: i(() => [
        e("div", nh, [
          e("div", ah, [
            g[3] || (g[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: me(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", lh, [
            g[4] || (g[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", ih, a(t.environment.current_branch), 1)
          ])) : d("", !0),
          t.environment.path ? (s(), o("div", rh, [
            g[5] || (g[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", dh, a(t.environment.path), 1)
          ])) : d("", !0),
          g[11] || (g[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", ch, [
            g[6] || (g[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", uh, a(t.environment.workflow_count), 1)
          ]),
          e("div", mh, [
            g[7] || (g[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", vh, a(t.environment.node_count), 1)
          ]),
          e("div", fh, [
            g[8] || (g[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", gh, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", ph)) : d("", !0),
          t.environment.created_at ? (s(), o("div", hh, [
            g[9] || (g[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", yh, a(l(t.environment.created_at)), 1)
          ])) : d("", !0),
          t.environment.last_used ? (s(), o("div", wh, [
            g[10] || (g[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", kh, a(l(t.environment.last_used)), 1)
          ])) : d("", !0)
        ])
      ]),
      footer: i(() => [
        e("div", bh, [
          t.canDelete ? (s(), R(ve, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: g[0] || (g[0] = (u) => n("delete", t.environment.name))
          }, {
            default: i(() => [...g[12] || (g[12] = [
              p(" Delete ", -1)
            ])]),
            _: 1
          })) : d("", !0),
          g[14] || (g[14] = e("div", { class: "footer-spacer" }, null, -1)),
          k(ve, {
            variant: "secondary",
            size: "sm",
            onClick: g[1] || (g[1] = (u) => n("close"))
          }, {
            default: i(() => [...g[13] || (g[13] = [
              p(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), $h = /* @__PURE__ */ te(_h, [["__scopeId", "data-v-59855453"]]), Vs = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Ws = "3.12", fs = [
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
], Gs = "auto", Ch = { class: "progress-bar" }, xh = /* @__PURE__ */ ee({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, n = N(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (l, f) => (s(), o("div", Ch, [
      e("div", {
        class: me(["progress-fill", t.variant]),
        style: wt({ width: n.value })
      }, null, 6)
    ]));
  }
}), js = /* @__PURE__ */ te(xh, [["__scopeId", "data-v-1beb0512"]]), Sh = { class: "task-progress" }, Ih = { class: "progress-info" }, Eh = { class: "progress-percentage" }, Mh = { class: "progress-message" }, Th = {
  key: 0,
  class: "progress-steps"
}, Rh = { class: "step-icon" }, Lh = { class: "step-label" }, zh = /* @__PURE__ */ ee({
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
      const g = c.steps.find((u) => u.id === f);
      return g ? c.progress >= g.progressThreshold ? "completed" : c.currentPhase === f ? "active" : "pending" : "pending";
    }
    function l(f) {
      const g = n(f);
      return g === "completed" ? "✓" : g === "active" ? "⟳" : "○";
    }
    return (f, g) => (s(), o("div", Sh, [
      k(js, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", Ih, [
        e("span", Eh, a(t.progress) + "%", 1),
        e("span", Mh, a(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", Th, [
        (s(!0), o(V, null, oe(t.steps, (u) => (s(), o("div", {
          key: u.id,
          class: me(["step", n(u.id)])
        }, [
          e("span", Rh, a(l(u.id)), 1),
          e("span", Lh, a(u.label), 1)
        ], 2))), 128))
      ])) : d("", !0)
    ]));
  }
}), es = /* @__PURE__ */ te(zh, [["__scopeId", "data-v-9d1de66c"]]), Ph = {
  key: 0,
  class: "create-env-form"
}, Dh = { class: "form-field" }, Nh = { class: "form-field" }, Uh = ["value"], Oh = { class: "form-field" }, Bh = ["disabled"], Fh = ["value"], Ah = { class: "form-field" }, Vh = ["value"], Wh = { class: "form-field form-field--checkbox" }, Gh = { class: "form-checkbox" }, jh = {
  key: 1,
  class: "create-env-progress"
}, Hh = { class: "creating-intro" }, qh = {
  key: 0,
  class: "progress-warning"
}, Kh = {
  key: 1,
  class: "create-error"
}, Jh = { class: "error-message" }, Yh = {
  key: 1,
  class: "footer-status"
}, Xh = 10, Qh = /* @__PURE__ */ ee({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: c }) {
    const n = c, { getComfyUIReleases: l, createEnvironment: f, getCreateProgress: g } = Ae(), u = _(""), m = _(Ws), r = _("latest"), v = _(Gs), h = _(!1), y = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), b = _(!1), w = _(!1), L = _({
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
    ], B = _(null);
    function x() {
      w.value || n("close");
    }
    async function T() {
      const z = u.value.trim();
      if (z) {
        w.value = !0, L.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const O = {
            name: z,
            python_version: m.value,
            comfyui_version: r.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, le = await f(O);
          le.status === "started" ? K() : le.status === "error" && (L.value = {
            progress: 0,
            message: le.message || "Failed to start creation",
            error: le.message
          });
        } catch (O) {
          L.value = {
            progress: 0,
            message: O instanceof Error ? O.message : "Unknown error",
            error: O instanceof Error ? O.message : "Unknown error"
          };
        }
      }
    }
    function K() {
      M || ($ = 0, M = window.setInterval(async () => {
        try {
          const z = await g();
          $ = 0, L.value = {
            progress: z.progress ?? 0,
            message: z.message,
            phase: z.phase,
            error: z.error
          }, z.state === "complete" ? (A(), n("created", z.environment_name || u.value.trim(), h.value)) : z.state === "error" ? (A(), L.value.error = z.error || z.message) : z.state === "idle" && w.value && (A(), L.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= Xh && (A(), L.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function A() {
      M && (clearInterval(M), M = null);
    }
    function W() {
      w.value = !1, L.value = { progress: 0, message: "" }, n("close");
    }
    async function E() {
      b.value = !0;
      try {
        y.value = await l();
      } catch (z) {
        console.error("Failed to load ComfyUI releases:", z);
      } finally {
        b.value = !1;
      }
    }
    return Ne(async () => {
      var z;
      await mo(), (z = B.value) == null || z.focus(), E();
    }), Ls(() => {
      A();
    }), (z, O) => (s(), R(Je, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !w.value,
      onClose: x
    }, {
      body: i(() => [
        w.value ? (s(), o("div", jh, [
          e("p", Hh, [
            O[11] || (O[11] = p(" Creating environment ", -1)),
            e("strong", null, a(u.value), 1),
            O[12] || (O[12] = p("... ", -1))
          ]),
          k(es, {
            progress: L.value.progress,
            message: L.value.message,
            "current-phase": L.value.phase,
            variant: L.value.error ? "error" : "default",
            "show-steps": !0,
            steps: C
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          L.value.error ? d("", !0) : (s(), o("p", qh, " This may take several minutes. Please wait... ")),
          L.value.error ? (s(), o("div", Kh, [
            e("p", Jh, a(L.value.error), 1)
          ])) : d("", !0)
        ])) : (s(), o("div", Ph, [
          e("div", Dh, [
            O[6] || (O[6] = e("label", { class: "form-label" }, "Name", -1)),
            Oe(e("input", {
              ref_key: "nameInput",
              ref: B,
              "onUpdate:modelValue": O[0] || (O[0] = (le) => u.value = le),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: vt(T, ["enter"])
            }, null, 544), [
              [Tt, u.value]
            ])
          ]),
          e("div", Nh, [
            O[7] || (O[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Oe(e("select", {
              "onUpdate:modelValue": O[1] || (O[1] = (le) => m.value = le),
              class: "form-select"
            }, [
              (s(!0), o(V, null, oe(_e(Vs), (le) => (s(), o("option", {
                key: le,
                value: le
              }, a(le), 9, Uh))), 128))
            ], 512), [
              [Rt, m.value]
            ])
          ]),
          e("div", Oh, [
            O[8] || (O[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Oe(e("select", {
              "onUpdate:modelValue": O[2] || (O[2] = (le) => r.value = le),
              class: "form-select",
              disabled: b.value
            }, [
              (s(!0), o(V, null, oe(y.value, (le) => (s(), o("option", {
                key: le.tag_name,
                value: le.tag_name
              }, a(le.name), 9, Fh))), 128))
            ], 8, Bh), [
              [Rt, r.value]
            ])
          ]),
          e("div", Ah, [
            O[9] || (O[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Oe(e("select", {
              "onUpdate:modelValue": O[3] || (O[3] = (le) => v.value = le),
              class: "form-select"
            }, [
              (s(!0), o(V, null, oe(_e(fs), (le) => (s(), o("option", {
                key: le,
                value: le
              }, a(le) + a(le === "auto" ? " (detect GPU)" : ""), 9, Vh))), 128))
            ], 512), [
              [Rt, v.value]
            ])
          ]),
          e("div", Wh, [
            e("label", Gh, [
              Oe(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": O[4] || (O[4] = (le) => h.value = le)
              }, null, 512), [
                [Xt, h.value]
              ]),
              O[10] || (O[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: i(() => [
        w.value ? (s(), o(V, { key: 1 }, [
          L.value.error ? (s(), R(ve, {
            key: 0,
            variant: "secondary",
            onClick: W
          }, {
            default: i(() => [...O[15] || (O[15] = [
              p(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", Yh, " Creating environment... "))
        ], 64)) : (s(), o(V, { key: 0 }, [
          k(ve, {
            variant: "primary",
            disabled: !u.value.trim(),
            onClick: T
          }, {
            default: i(() => [...O[13] || (O[13] = [
              p(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(ve, {
            variant: "secondary",
            onClick: O[5] || (O[5] = (le) => n("close"))
          }, {
            default: i(() => [...O[14] || (O[14] = [
              p(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), Zh = /* @__PURE__ */ te(Qh, [["__scopeId", "data-v-f37eaa42"]]), e1 = /* @__PURE__ */ ee({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: c, emit: n }) {
    const l = n, { getEnvironments: f } = Ae(), g = _([]), u = _(!1), m = _(null), r = _(""), v = _(!1), h = _(!1), y = _(null), b = N(() => {
      if (!r.value.trim()) return g.value;
      const B = r.value.toLowerCase();
      return g.value.filter(
        (x) => {
          var T;
          return x.name.toLowerCase().includes(B) || ((T = x.current_branch) == null ? void 0 : T.toLowerCase().includes(B));
        }
      );
    });
    function w(B, x) {
      h.value = !1, l("created", B, x);
    }
    function L() {
      h.value = !0;
    }
    function M(B) {
      y.value = B;
    }
    function $(B) {
      y.value = null, l("delete", B);
    }
    async function C() {
      u.value = !0, m.value = null;
      try {
        g.value = await f();
      } catch (B) {
        m.value = B instanceof Error ? B.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return Ne(C), c({
      loadEnvironments: C,
      openCreateModal: L
    }), (B, x) => (s(), o(V, null, [
      k(qe, null, {
        header: i(() => [
          k(Ke, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (T) => v.value = !0)
          }, {
            actions: i(() => [
              k(ae, {
                variant: "primary",
                size: "sm",
                onClick: L
              }, {
                default: i(() => [...x[6] || (x[6] = [
                  p(" Create ", -1)
                ])]),
                _: 1
              }),
              k(ae, {
                variant: "secondary",
                size: "sm",
                onClick: C
              }, {
                default: i(() => [...x[7] || (x[7] = [
                  p(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          k(zt, {
            modelValue: r.value,
            "onUpdate:modelValue": x[1] || (x[1] = (T) => r.value = T),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          u.value ? (s(), R(kt, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (s(), R(bt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            b.value.length ? (s(), R(Fe, {
              key: 0,
              title: "ENVIRONMENTS",
              count: b.value.length
            }, {
              default: i(() => [
                (s(!0), o(V, null, oe(b.value, (T) => (s(), R(oh, {
                  key: T.name,
                  "environment-name": T.name,
                  "is-current": T.is_current,
                  "current-branch": T.current_branch,
                  "show-last-used": !1
                }, {
                  actions: i(() => [
                    T.is_current ? d("", !0) : (s(), R(ae, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => B.$emit("switch", T.name)
                    }, {
                      default: i(() => [...x[8] || (x[8] = [
                        p(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    k(ae, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => M(T)
                    }, {
                      default: i(() => [...x[9] || (x[9] = [
                        p(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            b.value.length ? d("", !0) : (s(), R(rt, {
              key: 1,
              icon: "🌍",
              message: r.value ? `No environments match '${r.value}'` : "No environments found. Create one to get started!"
            }, Wt({ _: 2 }, [
              r.value ? void 0 : {
                name: "actions",
                fn: i(() => [
                  k(ae, {
                    variant: "primary",
                    onClick: L
                  }, {
                    default: i(() => [...x[10] || (x[10] = [
                      p(" Create Environment ", -1)
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
      k(ft, {
        show: v.value,
        title: "About Environments",
        onClose: x[3] || (x[3] = (T) => v.value = !1)
      }, {
        content: i(() => [...x[11] || (x[11] = [
          e("p", null, [
            e("strong", null, "Environments"),
            p(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
          k(ae, {
            variant: "secondary",
            onClick: x[2] || (x[2] = (T) => v.value = !1)
          }, {
            default: i(() => [...x[12] || (x[12] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      y.value ? (s(), R($h, {
        key: 0,
        environment: y.value,
        "can-delete": g.value.length > 1,
        onClose: x[4] || (x[4] = (T) => y.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : d("", !0),
      h.value ? (s(), R(Zh, {
        key: 1,
        onClose: x[5] || (x[5] = (T) => h.value = !1),
        onCreated: w
      })) : d("", !0)
    ], 64));
  }
}), t1 = /* @__PURE__ */ te(e1, [["__scopeId", "data-v-f95999f4"]]), s1 = { class: "file-path" }, o1 = { class: "file-path-text" }, n1 = ["title"], a1 = /* @__PURE__ */ ee({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = _(!1);
    async function l() {
      try {
        await navigator.clipboard.writeText(c.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (f) {
        console.error("Failed to copy:", f);
      }
    }
    return (f, g) => (s(), o("div", s1, [
      g[0] || (g[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", o1, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: l
      }, a(n.value ? "✓" : "📋"), 9, n1)) : d("", !0)
    ]));
  }
}), l1 = /* @__PURE__ */ te(a1, [["__scopeId", "data-v-f0982173"]]), i1 = { class: "export-blocked" }, r1 = { class: "issues-list" }, d1 = { class: "issue-message" }, c1 = {
  key: 0,
  class: "issue-details"
}, u1 = ["onClick"], m1 = { class: "issue-fix" }, v1 = /* @__PURE__ */ ee({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(t) {
    const c = t, n = ts({});
    function l(f) {
      const g = c.issues[f];
      return n[f] || g.details.length <= 3 ? g.details : g.details.slice(0, 3);
    }
    return (f, g) => (s(), R(Je, {
      title: "Cannot Export",
      size: "md",
      onClose: g[1] || (g[1] = (u) => f.$emit("close"))
    }, {
      body: i(() => [
        e("div", i1, [
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
          e("div", r1, [
            (s(!0), o(V, null, oe(t.issues, (u, m) => (s(), o("div", {
              key: m,
              class: "issue-item"
            }, [
              e("div", d1, a(u.message), 1),
              u.details.length ? (s(), o("div", c1, [
                (s(!0), o(V, null, oe(l(m), (r, v) => (s(), o("div", {
                  key: v,
                  class: "issue-detail"
                }, a(r), 1))), 128)),
                u.details.length > 3 && !n[m] ? (s(), o("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (r) => n[m] = !0
                }, " +" + a(u.details.length - 3) + " more ", 9, u1)) : d("", !0)
              ])) : d("", !0),
              e("div", m1, [
                u.type === "uncommitted_workflows" ? (s(), o(V, { key: 0 }, [
                  p(" Commit your workflow changes before exporting. ")
                ], 64)) : u.type === "uncommitted_git_changes" ? (s(), o(V, { key: 1 }, [
                  p(" Commit your changes before exporting. ")
                ], 64)) : u.type === "unresolved_issues" ? (s(), o(V, { key: 2 }, [
                  p(" Resolve all workflow issues before exporting. ")
                ], 64)) : d("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: i(() => [
        k(ve, {
          variant: "primary",
          onClick: g[0] || (g[0] = (u) => f.$emit("close"))
        }, {
          default: i(() => [...g[3] || (g[3] = [
            p(" Understood ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), f1 = /* @__PURE__ */ te(v1, [["__scopeId", "data-v-b52f5e32"]]), g1 = { class: "export-warnings" }, p1 = {
  key: 0,
  class: "success-header"
}, h1 = { class: "warning-header" }, y1 = { class: "warning-summary" }, w1 = { class: "warning-title" }, k1 = { class: "models-section" }, b1 = { class: "models-list" }, _1 = { class: "model-info" }, $1 = { class: "model-filename" }, C1 = { class: "model-workflows" }, x1 = ["onClick"], S1 = /* @__PURE__ */ ee({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(t, { emit: c }) {
    const n = t, l = c, f = _(!1), g = _(null), u = N(() => f.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function m() {
      g.value = null, l("revalidate");
    }
    return (r, v) => (s(), o(V, null, [
      k(Je, {
        title: "Export Warnings",
        size: "md",
        onClose: v[3] || (v[3] = (h) => r.$emit("cancel"))
      }, {
        body: i(() => [
          e("div", g1, [
            t.models.length === 0 ? (s(), o("div", p1, [...v[4] || (v[4] = [
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
              e("div", h1, [
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
                e("div", y1, [
                  e("h3", w1, a(t.models.length) + " model" + a(t.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  v[5] || (v[5] = e("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              e("div", k1, [
                e("div", b1, [
                  (s(!0), o(V, null, oe(u.value, (h) => (s(), o("div", {
                    key: h.hash,
                    class: "model-item"
                  }, [
                    e("div", _1, [
                      e("div", $1, a(h.filename), 1),
                      e("div", C1, " Used by: " + a(h.workflows.join(", ")), 1)
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      onClick: (y) => g.value = h.hash
                    }, " Add Source ", 8, x1)
                  ]))), 128))
                ]),
                t.models.length > 3 && !f.value ? (s(), o("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: v[0] || (v[0] = (h) => f.value = !0)
                }, " Show " + a(t.models.length - 3) + " more model" + a(t.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : d("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: i(() => [
          k(ve, {
            variant: "secondary",
            onClick: v[1] || (v[1] = (h) => r.$emit("cancel"))
          }, {
            default: i(() => [...v[7] || (v[7] = [
              p(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          k(ve, {
            variant: "primary",
            onClick: v[2] || (v[2] = (h) => r.$emit("confirm"))
          }, {
            default: i(() => [
              p(a(t.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      g.value ? (s(), R(vs, {
        key: 0,
        identifier: g.value,
        onClose: m
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), I1 = /* @__PURE__ */ te(S1, [["__scopeId", "data-v-b698d882"]]), E1 = { class: "export-card" }, M1 = { class: "export-path-row" }, T1 = { class: "export-actions" }, R1 = {
  key: 1,
  class: "export-warning"
}, L1 = /* @__PURE__ */ ee({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: c, exportEnvWithForce: n } = Ae(), l = _(""), f = _(!1), g = _(!1), u = _(!1), m = _(null), r = _(!1), v = _(null), h = _(!1), y = _(!1), b = N(() => f.value ? "Validating..." : g.value ? "Exporting..." : "Export Environment");
    async function w() {
      f.value = !0, m.value = null;
      try {
        const x = await c();
        v.value = x, x.can_export ? x.warnings.models_without_sources.length > 0 ? y.value = !0 : await $() : h.value = !0;
      } catch (x) {
        m.value = {
          status: "error",
          message: x instanceof Error ? x.message : "Validation failed"
        };
      } finally {
        f.value = !1;
      }
    }
    async function L() {
      y.value = !1, await $();
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
      g.value = !0;
      try {
        const x = await n(l.value || void 0);
        m.value = x;
      } catch (x) {
        m.value = {
          status: "error",
          message: x instanceof Error ? x.message : "Export failed"
        };
      } finally {
        g.value = !1;
      }
    }
    async function C() {
      var x;
      if ((x = m.value) != null && x.path)
        try {
          await navigator.clipboard.writeText(m.value.path);
        } catch (T) {
          console.error("Failed to copy path:", T);
        }
    }
    async function B() {
      var x;
      if ((x = m.value) != null && x.path) {
        u.value = !0;
        try {
          const T = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(m.value.path)}`);
          if (!T.ok)
            throw new Error(`Download failed: ${T.statusText}`);
          const K = await T.blob(), A = URL.createObjectURL(K), W = m.value.path.split("/").pop() || "environment-export.tar.gz", E = document.createElement("a");
          E.href = A, E.download = W, document.body.appendChild(E), E.click(), document.body.removeChild(E), URL.revokeObjectURL(A);
        } catch (T) {
          console.error("Failed to download:", T), alert(`Download failed: ${T instanceof Error ? T.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
      }
    }
    return (x, T) => (s(), o(V, null, [
      k(qe, null, {
        header: i(() => [
          k(Ke, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (K) => r.value = !0)
          })
        ]),
        content: i(() => [
          k(Fe, { title: "EXPORT OPTIONS" }, {
            default: i(() => [
              e("div", E1, [
                T[7] || (T[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", M1, [
                  k(Qt, {
                    modelValue: l.value,
                    "onUpdate:modelValue": T[1] || (T[1] = (K) => l.value = K),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", T1, [
                  k(ae, {
                    variant: "primary",
                    size: "md",
                    loading: f.value || g.value,
                    disabled: f.value || g.value,
                    onClick: w
                  }, {
                    default: i(() => [
                      T[6] || (T[6] = e("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        e("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        e("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      p(" " + a(b.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          m.value ? (s(), R(Fe, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: i(() => [
              k(He, {
                status: m.value.status === "success" ? "synced" : "broken"
              }, Wt({
                icon: i(() => [
                  p(a(m.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: i(() => [
                  p(a(m.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: i(() => [
                  p(a(m.value.status === "success" ? "Your environment has been exported" : m.value.message), 1)
                ]),
                _: 2
              }, [
                m.value.status === "success" ? {
                  name: "details",
                  fn: i(() => [
                    k(De, { label: "Saved to:" }, {
                      default: i(() => [
                        k(l1, {
                          path: m.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    m.value.models_without_sources !== void 0 ? (s(), R(De, {
                      key: 0,
                      label: "Models without sources:",
                      value: m.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : d("", !0),
                    m.value.models_without_sources && m.value.models_without_sources > 0 ? (s(), o("div", R1, [...T[8] || (T[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : d("", !0)
                  ]),
                  key: "0"
                } : void 0,
                m.value.status === "success" ? {
                  name: "actions",
                  fn: i(() => [
                    k(ae, {
                      variant: "primary",
                      size: "sm",
                      loading: u.value,
                      onClick: B
                    }, {
                      default: i(() => [...T[9] || (T[9] = [
                        e("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          e("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        p(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    k(ae, {
                      variant: "secondary",
                      size: "sm",
                      onClick: C
                    }, {
                      default: i(() => [...T[10] || (T[10] = [
                        p(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    k(ae, {
                      variant: "ghost",
                      size: "sm",
                      onClick: T[2] || (T[2] = (K) => m.value = null)
                    }, {
                      default: i(() => [...T[11] || (T[11] = [
                        p(" Dismiss ", -1)
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
      k(ft, {
        show: r.value,
        title: "What Gets Exported",
        onClose: T[3] || (T[3] = (K) => r.value = !1)
      }, {
        content: i(() => [...T[12] || (T[12] = [
          e("div", { class: "export-info" }, [
            e("div", { class: "info-section" }, [
              e("strong", null, "Included in Export:"),
              e("ul", null, [
                e("li", null, [
                  e("strong", null, "Workflows"),
                  p(" — All workflows in this environment")
                ]),
                e("li", null, [
                  e("strong", null, "Custom Nodes"),
                  p(" — Node definitions and dependencies")
                ]),
                e("li", null, [
                  e("strong", null, "Models"),
                  p(" — References and source URLs (not the files)")
                ]),
                e("li", null, [
                  e("strong", null, "Configuration"),
                  p(" — Environment settings and metadata")
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
              p(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      h.value && v.value ? (s(), R(f1, {
        key: 0,
        issues: v.value.blocking_issues,
        onClose: T[4] || (T[4] = (K) => h.value = !1)
      }, null, 8, ["issues"])) : d("", !0),
      y.value && v.value ? (s(), R(I1, {
        key: 1,
        models: v.value.warnings.models_without_sources,
        onConfirm: L,
        onCancel: T[5] || (T[5] = (K) => y.value = !1),
        onRevalidate: M
      }, null, 8, ["models"])) : d("", !0)
    ], 64));
  }
}), z1 = /* @__PURE__ */ te(L1, [["__scopeId", "data-v-f4d120f2"]]), P1 = { class: "file-input-wrapper" }, D1 = ["accept", "multiple", "disabled"], N1 = /* @__PURE__ */ ee({
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
    const l = n, f = _(null);
    function g() {
      var m;
      (m = f.value) == null || m.click();
    }
    function u(m) {
      const r = m.target;
      r.files && r.files.length > 0 && (l("change", r.files), r.value = "");
    }
    return c({
      triggerInput: g
    }), (m, r) => (s(), o("div", P1, [
      e("input", {
        ref_key: "fileInputRef",
        ref: f,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, D1),
      k(ae, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: g
      }, {
        default: i(() => [
          Ce(m.$slots, "default", {}, () => [
            r[0] || (r[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            p(" " + a(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), U1 = /* @__PURE__ */ te(N1, [["__scopeId", "data-v-cd192091"]]), O1 = {
  key: 0,
  class: "drop-zone-empty"
}, B1 = { class: "drop-zone-text" }, F1 = { class: "drop-zone-primary" }, A1 = { class: "drop-zone-secondary" }, V1 = { class: "drop-zone-actions" }, W1 = {
  key: 1,
  class: "drop-zone-file"
}, G1 = { class: "file-info" }, j1 = { class: "file-details" }, H1 = { class: "file-name" }, q1 = { class: "file-size" }, K1 = /* @__PURE__ */ ee({
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
    const n = c, l = _(!1), f = _(null), g = _(0), u = N(() => f.value !== null), m = N(() => {
      var $;
      return (($ = f.value) == null ? void 0 : $.name) || "";
    }), r = N(() => {
      if (!f.value) return "";
      const $ = f.value.size;
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v($) {
      var C;
      $.stopPropagation(), g.value++, (C = $.dataTransfer) != null && C.types.includes("Files") && (l.value = !0);
    }
    function h($) {
      $.stopPropagation(), $.dataTransfer && ($.dataTransfer.dropEffect = "copy");
    }
    function y($) {
      $.stopPropagation(), g.value--, g.value === 0 && (l.value = !1);
    }
    function b($) {
      var B;
      $.stopPropagation(), g.value = 0, l.value = !1;
      const C = (B = $.dataTransfer) == null ? void 0 : B.files;
      C && C.length > 0 && L(C[0]);
    }
    function w($) {
      $.length > 0 && L($[0]);
    }
    function L($) {
      f.value = $, n("fileSelected", $);
    }
    function M() {
      f.value = null, n("clear");
    }
    return ($, C) => (s(), o("div", {
      class: me(["file-drop-zone", { "drop-active": l.value, "has-file": u.value }]),
      onDragenter: Le(v, ["prevent"]),
      onDragover: Le(h, ["prevent"]),
      onDragleave: Le(y, ["prevent"]),
      onDrop: Le(b, ["prevent"])
    }, [
      u.value ? (s(), o("div", W1, [
        e("div", G1, [
          C[1] || (C[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", j1, [
            e("div", H1, a(m.value), 1),
            e("div", q1, a(r.value), 1)
          ])
        ]),
        k(ae, {
          variant: "ghost",
          size: "xs",
          onClick: M,
          title: "Remove file"
        }, {
          default: i(() => [...C[2] || (C[2] = [
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
      ])) : (s(), o("div", O1, [
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
          e("p", A1, a(t.secondaryText), 1)
        ]),
        e("div", V1, [
          k(U1, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "sm",
            onChange: w
          }, {
            default: i(() => [
              p(a(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), J1 = /* @__PURE__ */ te(K1, [["__scopeId", "data-v-0f79cb86"]]), Y1 = { class: "import-preview" }, X1 = { class: "preview-header" }, Q1 = {
  key: 0,
  class: "source-env"
}, Z1 = { class: "preview-content" }, ey = { class: "preview-section" }, ty = { class: "section-header" }, sy = { class: "section-info" }, oy = { class: "section-count" }, ny = {
  key: 0,
  class: "item-list"
}, ay = { class: "item-name" }, ly = {
  key: 0,
  class: "item-more"
}, iy = { class: "preview-section" }, ry = { class: "section-header" }, dy = { class: "section-info" }, cy = { class: "section-count" }, uy = {
  key: 0,
  class: "item-list"
}, my = { class: "item-details" }, vy = { class: "item-name" }, fy = { class: "item-meta" }, gy = {
  key: 0,
  class: "item-more"
}, py = { class: "preview-section" }, hy = { class: "section-header" }, yy = { class: "section-info" }, wy = { class: "section-count" }, ky = {
  key: 0,
  class: "item-list"
}, by = { class: "item-name" }, _y = {
  key: 0,
  class: "item-more"
}, $y = {
  key: 0,
  class: "preview-section"
}, Cy = { class: "git-info" }, xy = /* @__PURE__ */ ee({
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
    const c = t, n = N(() => c.workflows.length), l = N(() => c.models.length), f = N(() => c.nodes.length);
    function g(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, m) => (s(), o("div", Y1, [
      e("div", X1, [
        k(tt, null, {
          default: i(() => [...m[0] || (m[0] = [
            p("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", Q1, [
          m[1] || (m[1] = p(" From: ", -1)),
          k(ls, null, {
            default: i(() => [
              p(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : d("", !0)
      ]),
      e("div", Z1, [
        e("div", ey, [
          e("div", ty, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", sy, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", oy, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", ny, [
            (s(!0), o(V, null, oe(t.workflows.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", ay, a(r), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", ly, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", iy, [
          e("div", ry, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", dy, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", cy, a(l.value) + " file" + a(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", uy, [
            (s(!0), o(V, null, oe(t.models.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", my, [
                e("span", vy, a(r.filename), 1),
                e("span", fy, a(g(r.size)) + " • " + a(r.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", gy, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", py, [
          e("div", hy, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", yy, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", wy, a(f.value) + " node" + a(f.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", ky, [
            (s(!0), o(V, null, oe(t.nodes.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", by, a(r), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", _y, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", $y, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Cy, [
            t.gitBranch ? (s(), R(De, {
              key: 0,
              label: "Branch"
            }, {
              default: i(() => [
                k(ls, null, {
                  default: i(() => [
                    p(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : d("", !0),
            t.gitCommit ? (s(), R(De, {
              key: 1,
              label: "Commit"
            }, {
              default: i(() => [
                k(Ps, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : d("", !0)
          ])
        ])) : d("", !0)
      ])
    ]));
  }
}), Sy = /* @__PURE__ */ te(xy, [["__scopeId", "data-v-182fe113"]]), Iy = { class: "import-config" }, Ey = { class: "config-container" }, My = { class: "config-field" }, Ty = { class: "input-wrapper" }, Ry = ["value"], Ly = {
  key: 0,
  class: "validating-indicator"
}, zy = {
  key: 1,
  class: "valid-indicator"
}, Py = {
  key: 0,
  class: "field-error"
}, Dy = { class: "config-field" }, Ny = { class: "strategy-options" }, Uy = ["value", "checked", "onChange"], Oy = { class: "strategy-content" }, By = { class: "strategy-label" }, Fy = { class: "strategy-description" }, Ay = { class: "config-field switch-field" }, Vy = { class: "switch-label" }, Wy = ["checked"], Gy = { class: "advanced-section" }, jy = { class: "advanced-content" }, Hy = { class: "config-field" }, qy = ["value"], Ky = ["value"], Jy = /* @__PURE__ */ ee({
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
    const n = t, l = c, f = _(!1), g = _(!1);
    $t(() => n.nameError, (h) => {
      f.value = !1, g.value = !h && n.name.length > 0;
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
    function r(h) {
      const y = h.target.value;
      l("update:name", y), g.value = !1, m && clearTimeout(m), y.length > 0 ? (f.value = !0, m = setTimeout(() => {
        l("validate-name", y);
      }, 400)) : f.value = !1;
    }
    function v() {
      n.name.length > 0 && l("validate-name", n.name);
    }
    return (h, y) => (s(), o("div", Iy, [
      k(tt, null, {
        default: i(() => [...y[2] || (y[2] = [
          p("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", Ey, [
        e("div", My, [
          k(Jt, { required: "" }, {
            default: i(() => [...y[3] || (y[3] = [
              p("Environment Name", -1)
            ])]),
            _: 1
          }),
          e("div", Ty, [
            e("input", {
              type: "text",
              class: me(["name-input", { error: t.nameError || t.name.length === 0, valid: g.value }]),
              value: t.name,
              placeholder: "my-imported-env",
              onInput: r,
              onBlur: v
            }, null, 42, Ry),
            f.value ? (s(), o("span", Ly, "...")) : g.value ? (s(), o("span", zy, "✓")) : d("", !0)
          ]),
          t.nameError ? (s(), o("div", Py, a(t.nameError), 1)) : d("", !0),
          y[4] || (y[4] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", Dy, [
          k(Jt, null, {
            default: i(() => [...y[5] || (y[5] = [
              p("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", Ny, [
            (s(), o(V, null, oe(u, (b) => e("label", {
              key: b.value,
              class: me(["strategy-option", { active: t.modelStrategy === b.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: b.value,
                checked: t.modelStrategy === b.value,
                onChange: (w) => l("update:modelStrategy", b.value)
              }, null, 40, Uy),
              e("div", Oy, [
                e("span", By, a(b.label), 1),
                e("span", Fy, a(b.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Ay, [
          e("label", Vy, [
            e("input", {
              type: "checkbox",
              checked: t.switchAfterImport,
              onChange: y[0] || (y[0] = (b) => l("update:switchAfterImport", b.target.checked))
            }, null, 40, Wy),
            y[6] || (y[6] = e("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        e("details", Gy, [
          y[8] || (y[8] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", jy, [
            e("div", Hy, [
              k(Jt, null, {
                default: i(() => [...y[7] || (y[7] = [
                  p("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              e("select", {
                class: "backend-select",
                value: t.torchBackend,
                onChange: y[1] || (y[1] = (b) => l("update:torchBackend", b.target.value))
              }, [
                (s(!0), o(V, null, oe(_e(fs), (b) => (s(), o("option", {
                  key: b,
                  value: b
                }, a(b) + a(b === "auto" ? " (detect GPU)" : ""), 9, Ky))), 128))
              ], 40, qy)
            ])
          ])
        ])
      ])
    ]));
  }
}), Yy = /* @__PURE__ */ te(Jy, [["__scopeId", "data-v-89ea06a1"]]), Xy = { class: "import-flow" }, Qy = {
  key: 0,
  class: "import-empty"
}, Zy = { class: "git-import-section" }, e0 = { class: "git-url-input-row" }, t0 = ["disabled"], s0 = {
  key: 0,
  class: "git-error"
}, o0 = {
  key: 1,
  class: "import-configure"
}, n0 = { class: "selected-file-bar" }, a0 = {
  key: 0,
  class: "file-bar-content"
}, l0 = { class: "file-bar-info" }, i0 = { class: "file-bar-name" }, r0 = { class: "file-bar-size" }, d0 = {
  key: 1,
  class: "file-bar-content"
}, c0 = { class: "file-bar-info" }, u0 = { class: "file-bar-name" }, m0 = {
  key: 0,
  class: "preview-loading"
}, v0 = { class: "import-actions" }, f0 = {
  key: 2,
  class: "import-progress"
}, g0 = { class: "creating-intro" }, p0 = {
  key: 0,
  class: "progress-warning"
}, h0 = {
  key: 1,
  class: "import-error"
}, y0 = { class: "error-message" }, w0 = {
  key: 3,
  class: "import-complete"
}, k0 = { class: "complete-message" }, b0 = { class: "complete-title" }, _0 = { class: "complete-details" }, $0 = { class: "complete-actions" }, C0 = /* @__PURE__ */ ee({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(t, { expose: c, emit: n }) {
    var Ue, ce, ge, Ie;
    const l = t, f = n, { previewTarballImport: g, previewGitImport: u, validateEnvironmentName: m, executeImport: r, executeGitImport: v, getImportProgress: h } = Ae();
    let y = null;
    const b = _(null), w = _(l.resumeImport ?? !1), L = _(!1), M = _(!1), $ = _(""), C = _(!1), B = _(null), x = _(""), T = _(null), K = _(!1), A = _(null), W = _(null), E = _({
      name: ((Ue = l.initialProgress) == null ? void 0 : Ue.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), z = _(null), O = _({
      message: ((ce = l.initialProgress) == null ? void 0 : ce.message) ?? "Preparing import...",
      phase: ((ge = l.initialProgress) == null ? void 0 : ge.phase) ?? "",
      progress: ((Ie = l.initialProgress) == null ? void 0 : Ie.progress) ?? 0,
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
    ], se = N(() => {
      if (!W.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const X = W.value;
      return {
        sourceEnvironment: X.comfyui_version ? `ComfyUI ${X.comfyui_version}` : "Unknown",
        workflows: X.workflows.map((ne) => ne.name),
        models: X.models.map((ne) => ({
          filename: ne.filename,
          size: 0,
          type: ne.relative_path.split("/")[0] || "model"
        })),
        nodes: X.nodes.map((ne) => ne.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), Y = N(() => !C.value && !B.value && W.value && E.value.name.length > 0 && !z.value && (b.value || T.value));
    async function de(X) {
      b.value = X, C.value = !0, B.value = null, W.value = null;
      try {
        const ne = await g(X);
        W.value = ne;
      } catch (ne) {
        B.value = ne instanceof Error ? ne.message : "Failed to analyze file", console.error("Preview error:", ne);
      } finally {
        C.value = !1;
      }
    }
    function J() {
      b.value = null, T.value = null, x.value = "", A.value = null, L.value = !1, M.value = !1, $.value = "", W.value = null, B.value = null, E.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, z.value = null, f("source-cleared");
    }
    function D() {
      $e(), J(), w.value = !1, C.value = !1, K.value = !1, O.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function P() {
      if (x.value.trim()) {
        K.value = !0, A.value = null;
        try {
          const X = await u(x.value.trim());
          T.value = x.value.trim(), W.value = X;
        } catch (X) {
          A.value = X instanceof Error ? X.message : "Failed to analyze repository";
        } finally {
          K.value = !1;
        }
      }
    }
    function I(X) {
      try {
        const ne = new URL(X);
        return ne.host + ne.pathname.replace(/\.git$/, "");
      } catch {
        return X;
      }
    }
    async function re(X) {
      if (!X) {
        z.value = "Environment name is required";
        return;
      }
      try {
        const ne = await m(X);
        z.value = ne.valid ? null : ne.error || "Invalid name";
      } catch {
        z.value = "Failed to validate name";
      }
    }
    async function Z() {
      if (E.value.name && !(!b.value && !T.value)) {
        w.value = !0, L.value = !1, O.value = { message: `Creating environment '${E.value.name}'...`, phase: "", progress: 0, error: null }, f("import-started");
        try {
          let X;
          if (b.value)
            X = await r(
              b.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else if (T.value)
            X = await v(
              T.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          X.status === "started" ? ye() : (M.value = !1, $.value = X.message, w.value = !1, L.value = !0);
        } catch (X) {
          M.value = !1, $.value = X instanceof Error ? X.message : "Unknown error occurred during import", w.value = !1, L.value = !0;
        }
      }
    }
    async function ye() {
      if (y) return;
      const X = async () => {
        try {
          const pe = await h();
          return O.value = {
            message: pe.message,
            phase: pe.phase || "",
            progress: pe.progress ?? (pe.state === "importing" ? 50 : 0),
            error: pe.error || null
          }, pe.state === "complete" ? ($e(), M.value = !0, $.value = `Environment '${pe.environment_name}' created successfully`, w.value = !1, L.value = !0, pe.environment_name && f("import-complete", pe.environment_name, E.value.switchAfterImport), !1) : pe.state === "error" ? ($e(), M.value = !1, $.value = pe.error || pe.message, w.value = !1, L.value = !0, !1) : !0;
        } catch (pe) {
          return console.error("Failed to poll import progress:", pe), !0;
        }
      };
      await X() && (y = setInterval(async () => {
        await X() || $e();
      }, 2e3));
    }
    function $e() {
      y && (clearInterval(y), y = null);
    }
    function Me(X) {
      return X < 1024 ? `${X} B` : X < 1024 * 1024 ? `${(X / 1024).toFixed(1)} KB` : X < 1024 * 1024 * 1024 ? `${(X / (1024 * 1024)).toFixed(1)} MB` : `${(X / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Ne(async () => {
      try {
        const X = await h();
        console.log("[ComfyGit ImportFlow] Import progress check:", X.state, X), X.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", X.environment_name), w.value = !0, E.value.name = X.environment_name || E.value.name || "", O.value = {
          progress: X.progress ?? 0,
          message: X.message || "Importing...",
          phase: X.phase || "",
          error: null
        }, ye());
      } catch (X) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", X);
      }
    }), c({
      handleReset: D,
      isImporting: w,
      canImport: Y
    }), (X, ne) => {
      var pe;
      return s(), o("div", Xy, [
        !b.value && !T.value && !w.value ? (s(), o("div", Qy, [
          k(J1, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: de
          }),
          ne[7] || (ne[7] = e("div", { class: "import-divider" }, [
            e("span", null, "or")
          ], -1)),
          e("div", Zy, [
            ne[5] || (ne[5] = e("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            e("div", e0, [
              Oe(e("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": ne[0] || (ne[0] = (ze) => x.value = ze),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: vt(P, ["enter"]),
                disabled: K.value
              }, null, 40, t0), [
                [Tt, x.value]
              ]),
              k(ae, {
                variant: "primary",
                size: "sm",
                disabled: !x.value.trim() || K.value,
                onClick: P
              }, {
                default: i(() => [
                  p(a(K.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            A.value ? (s(), o("div", s0, a(A.value), 1)) : d("", !0),
            ne[6] || (ne[6] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (b.value || T.value) && !w.value && !L.value ? (s(), o("div", o0, [
          e("div", n0, [
            b.value ? (s(), o("div", a0, [
              ne[8] || (ne[8] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", l0, [
                e("div", i0, a(b.value.name), 1),
                e("div", r0, a(Me(b.value.size)), 1)
              ])
            ])) : T.value ? (s(), o("div", d0, [
              ne[10] || (ne[10] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
              e("div", c0, [
                e("div", u0, a(I(T.value)), 1),
                ne[9] || (ne[9] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : d("", !0),
            k(ae, {
              variant: "ghost",
              size: "sm",
              onClick: J
            }, {
              default: i(() => [...ne[11] || (ne[11] = [
                p(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          C.value ? (s(), o("div", m0, [...ne[12] || (ne[12] = [
            e("div", { class: "loading-spinner" }, null, -1),
            e("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : B.value ? (s(), R(at, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [B.value]
          }, null, 8, ["details"])) : W.value ? (s(), R(Sy, {
            key: 2,
            "source-environment": se.value.sourceEnvironment,
            workflows: se.value.workflows,
            models: se.value.models,
            nodes: se.value.nodes,
            "git-branch": se.value.gitBranch,
            "git-commit": se.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : d("", !0),
          W.value ? (s(), R(Yy, {
            key: 3,
            name: E.value.name,
            "onUpdate:name": ne[1] || (ne[1] = (ze) => E.value.name = ze),
            "model-strategy": E.value.modelStrategy,
            "onUpdate:modelStrategy": ne[2] || (ne[2] = (ze) => E.value.modelStrategy = ze),
            "torch-backend": E.value.torchBackend,
            "onUpdate:torchBackend": ne[3] || (ne[3] = (ze) => E.value.torchBackend = ze),
            "switch-after-import": E.value.switchAfterImport,
            "onUpdate:switchAfterImport": ne[4] || (ne[4] = (ze) => E.value.switchAfterImport = ze),
            "name-error": z.value,
            onValidateName: re
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : d("", !0),
          E.value.modelStrategy === "skip" && ((pe = W.value) != null && pe.models_needing_download) ? (s(), R(at, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${W.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : d("", !0),
          e("div", v0, [
            k(ae, {
              variant: "secondary",
              size: "md",
              onClick: J
            }, {
              default: i(() => [...ne[13] || (ne[13] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(ae, {
              variant: "primary",
              size: "md",
              disabled: !Y.value,
              onClick: Z
            }, {
              default: i(() => [...ne[14] || (ne[14] = [
                p(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : w.value ? (s(), o("div", f0, [
          e("p", g0, [
            ne[15] || (ne[15] = p(" Importing environment ", -1)),
            e("strong", null, a(E.value.name), 1),
            ne[16] || (ne[16] = p("... ", -1))
          ]),
          k(es, {
            progress: O.value.progress,
            message: O.value.message,
            "current-phase": O.value.phase,
            variant: O.value.error ? "error" : "default",
            "show-steps": !0,
            steps: le
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          O.value.error ? d("", !0) : (s(), o("p", p0, " This may take several minutes. Please wait... ")),
          O.value.error ? (s(), o("div", h0, [
            e("p", y0, a(O.value.error), 1)
          ])) : d("", !0)
        ])) : L.value ? (s(), o("div", w0, [
          e("div", {
            class: me(["complete-icon", M.value ? "success" : "error"])
          }, a(M.value ? "✓" : "✕"), 3),
          e("div", k0, [
            e("div", b0, a(M.value ? "Import Successful" : "Import Failed"), 1),
            e("div", _0, a($.value), 1)
          ]),
          e("div", $0, [
            k(ae, {
              variant: "primary",
              size: "md",
              onClick: D
            }, {
              default: i(() => [...ne[17] || (ne[17] = [
                p(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), Hs = /* @__PURE__ */ te(C0, [["__scopeId", "data-v-72cbc04e"]]), x0 = /* @__PURE__ */ ee({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(t, { emit: c }) {
    const n = c, l = _(!1);
    function f(g, u) {
      u && n("import-complete-switch", g);
    }
    return (g, u) => (s(), o(V, null, [
      k(qe, null, {
        header: i(() => [
          k(Ke, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: u[0] || (u[0] = (m) => l.value = !0)
          })
        ]),
        content: i(() => [
          k(Hs, { onImportComplete: f })
        ]),
        _: 1
      }),
      k(ft, {
        show: l.value,
        title: "How Import Works",
        onClose: u[1] || (u[1] = (m) => l.value = !1)
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
}), S0 = /* @__PURE__ */ te(x0, [["__scopeId", "data-v-e13bfe76"]]), I0 = { class: "header-info" }, E0 = { class: "commit-hash" }, M0 = {
  key: 0,
  class: "commit-refs"
}, T0 = { class: "commit-message" }, R0 = { class: "commit-date" }, L0 = {
  key: 0,
  class: "loading"
}, z0 = {
  key: 1,
  class: "changes-section"
}, P0 = { class: "stats-row" }, D0 = { class: "stat" }, N0 = { class: "stat insertions" }, U0 = { class: "stat deletions" }, O0 = {
  key: 0,
  class: "change-group"
}, B0 = {
  key: 1,
  class: "change-group"
}, F0 = {
  key: 0,
  class: "version"
}, A0 = {
  key: 2,
  class: "change-group"
}, V0 = { class: "change-item" }, W0 = /* @__PURE__ */ ee({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = Ae(), l = _(null), f = _(!0), g = N(() => {
      if (!l.value) return !1;
      const m = l.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), u = N(() => {
      if (!l.value) return !1;
      const m = l.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return Ne(async () => {
      try {
        l.value = await n(c.commit.hash);
      } finally {
        f.value = !1;
      }
    }), (m, r) => (s(), R(Je, {
      size: "md",
      "show-close-button": !1,
      onClose: r[3] || (r[3] = (v) => m.$emit("close"))
    }, {
      header: i(() => {
        var v, h, y, b;
        return [
          e("div", I0, [
            r[4] || (r[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", E0, a(((v = l.value) == null ? void 0 : v.short_hash) || t.commit.short_hash || ((h = t.commit.hash) == null ? void 0 : h.slice(0, 7))), 1),
            (b = (y = l.value) == null ? void 0 : y.refs) != null && b.length ? (s(), o("span", M0, [
              (s(!0), o(V, null, oe(l.value.refs, (w) => (s(), o("span", {
                key: w,
                class: "ref-badge"
              }, a(w), 1))), 128))
            ])) : d("", !0)
          ]),
          k(ve, {
            variant: "ghost",
            size: "sm",
            onClick: r[0] || (r[0] = (w) => m.$emit("close"))
          }, {
            default: i(() => [...r[5] || (r[5] = [
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
        var v, h;
        return [
          e("div", T0, a(((v = l.value) == null ? void 0 : v.message) || t.commit.message), 1),
          e("div", R0, a(((h = l.value) == null ? void 0 : h.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          f.value ? (s(), o("div", L0, "Loading details...")) : l.value ? (s(), o("div", z0, [
            e("div", P0, [
              e("span", D0, a(l.value.stats.files_changed) + " files", 1),
              e("span", N0, "+" + a(l.value.stats.insertions), 1),
              e("span", U0, "-" + a(l.value.stats.deletions), 1)
            ]),
            g.value ? (s(), o("div", O0, [
              k(Ft, { variant: "section" }, {
                default: i(() => [...r[6] || (r[6] = [
                  p("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(V, null, oe(l.value.changes.workflows.added, (y) => (s(), o("div", {
                key: "add-" + y,
                class: "change-item added"
              }, [
                r[7] || (r[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(y), 1)
              ]))), 128)),
              (s(!0), o(V, null, oe(l.value.changes.workflows.modified, (y) => (s(), o("div", {
                key: "mod-" + y,
                class: "change-item modified"
              }, [
                r[8] || (r[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(y), 1)
              ]))), 128)),
              (s(!0), o(V, null, oe(l.value.changes.workflows.deleted, (y) => (s(), o("div", {
                key: "del-" + y,
                class: "change-item deleted"
              }, [
                r[9] || (r[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(y), 1)
              ]))), 128))
            ])) : d("", !0),
            u.value ? (s(), o("div", B0, [
              k(Ft, { variant: "section" }, {
                default: i(() => [...r[10] || (r[10] = [
                  p("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(V, null, oe(l.value.changes.nodes.added, (y) => (s(), o("div", {
                key: "add-" + y.name,
                class: "change-item added"
              }, [
                r[11] || (r[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(y.name), 1),
                y.version ? (s(), o("span", F0, "(" + a(y.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (s(!0), o(V, null, oe(l.value.changes.nodes.removed, (y) => (s(), o("div", {
                key: "rem-" + y.name,
                class: "change-item deleted"
              }, [
                r[12] || (r[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(y.name), 1)
              ]))), 128))
            ])) : d("", !0),
            l.value.changes.models.resolved > 0 ? (s(), o("div", A0, [
              k(Ft, { variant: "section" }, {
                default: i(() => [...r[13] || (r[13] = [
                  p("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", V0, [
                r[14] || (r[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(l.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: i(() => [
        k(ve, {
          variant: "secondary",
          onClick: r[1] || (r[1] = (v) => m.$emit("createBranch", t.commit))
        }, {
          default: i(() => [...r[15] || (r[15] = [
            p(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        k(ve, {
          variant: "primary",
          onClick: r[2] || (r[2] = (v) => m.$emit("checkout", t.commit))
        }, {
          default: i(() => [...r[16] || (r[16] = [
            p(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), G0 = /* @__PURE__ */ te(W0, [["__scopeId", "data-v-d256ff6d"]]), j0 = { class: "base-textarea-wrapper" }, H0 = ["value", "rows", "placeholder", "disabled", "maxlength"], q0 = {
  key: 0,
  class: "base-textarea-count"
}, K0 = /* @__PURE__ */ ee({
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
    function f(g) {
      g.shiftKey || g.ctrlKey || g.metaKey || n.submitOnEnter && (g.preventDefault(), l("submit"));
    }
    return (g, u) => (s(), o("div", j0, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: u[0] || (u[0] = (m) => g.$emit("update:modelValue", m.target.value)),
        onKeydown: [
          u[1] || (u[1] = vt(Le((m) => g.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          u[2] || (u[2] = vt(Le((m) => g.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          vt(f, ["enter"])
        ]
      }, null, 40, H0),
      t.showCharCount && t.maxLength ? (s(), o("div", q0, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : d("", !0)
    ]));
  }
}), Is = /* @__PURE__ */ te(K0, [["__scopeId", "data-v-c6d16c93"]]), J0 = ["checked", "disabled"], Y0 = { class: "base-checkbox-box" }, X0 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Q0 = {
  key: 0,
  class: "base-checkbox-label"
}, Z0 = /* @__PURE__ */ ee({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", {
      class: me(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (l) => c.$emit("update:modelValue", l.target.checked))
      }, null, 40, J0),
      e("span", Y0, [
        t.modelValue ? (s(), o("svg", X0, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : d("", !0)
      ]),
      c.$slots.default ? (s(), o("span", Q0, [
        Ce(c.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Es = /* @__PURE__ */ te(Z0, [["__scopeId", "data-v-bf17c831"]]), ew = { class: "popover-header" }, tw = { class: "popover-body" }, sw = {
  key: 0,
  class: "changes-summary"
}, ow = {
  key: 0,
  class: "change-item"
}, nw = {
  key: 1,
  class: "change-item"
}, aw = {
  key: 2,
  class: "change-item"
}, lw = {
  key: 3,
  class: "change-item"
}, iw = {
  key: 4,
  class: "change-item"
}, rw = {
  key: 5,
  class: "change-item"
}, dw = {
  key: 1,
  class: "no-changes"
}, cw = {
  key: 2,
  class: "loading"
}, uw = {
  key: 3,
  class: "issues-error"
}, mw = { class: "error-header" }, vw = { class: "error-title" }, fw = { class: "issues-list" }, gw = { class: "message-section" }, pw = { class: "popover-footer" }, hw = {
  key: 1,
  class: "commit-popover"
}, yw = { class: "popover-header" }, ww = { class: "popover-body" }, kw = {
  key: 0,
  class: "changes-summary"
}, bw = {
  key: 0,
  class: "change-item"
}, _w = {
  key: 1,
  class: "change-item"
}, $w = {
  key: 2,
  class: "change-item"
}, Cw = {
  key: 3,
  class: "change-item"
}, xw = {
  key: 4,
  class: "change-item"
}, Sw = {
  key: 5,
  class: "change-item"
}, Iw = {
  key: 1,
  class: "no-changes"
}, Ew = {
  key: 2,
  class: "loading"
}, Mw = {
  key: 3,
  class: "issues-error"
}, Tw = { class: "error-header" }, Rw = { class: "error-title" }, Lw = { class: "issues-list" }, zw = { class: "message-section" }, Pw = { class: "popover-footer" }, Dw = /* @__PURE__ */ ee({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, l = c, { commit: f } = Ae(), g = _(""), u = _(!1), m = _(!1), r = N(() => {
      if (!n.status) return !1;
      const L = n.status.workflows;
      return L.new.length > 0 || L.modified.length > 0 || L.deleted.length > 0 || n.status.has_changes;
    }), v = N(() => {
      if (!n.status) return !1;
      const L = n.status.workflows, M = n.status.git_changes;
      return L.new.length > 0 || L.modified.length > 0 || L.deleted.length > 0 || M.nodes_added.length > 0 || M.nodes_removed.length > 0;
    }), h = N(() => {
      var L;
      return (L = n.status) != null && L.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (M) => M.has_issues && (M.sync_state === "new" || M.sync_state === "modified")
      ) : [];
    }), y = N(() => h.value.length > 0), b = N(() => y.value && !m.value);
    async function w() {
      var L, M, $;
      if (!(y.value && !m.value) && !(!r.value || !g.value.trim() || u.value)) {
        u.value = !0;
        try {
          const C = await f(g.value.trim(), m.value);
          if (C.status === "success") {
            const B = `Committed: ${((L = C.summary) == null ? void 0 : L.new) || 0} new, ${((M = C.summary) == null ? void 0 : M.modified) || 0} modified, ${(($ = C.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            l("committed", { success: !0, message: B });
          } else C.status === "no_changes" ? l("committed", { success: !1, message: "No changes to commit" }) : C.status === "blocked" ? l("committed", { success: !1, message: 'Commit blocked - enable "Allow issues" to force commit' }) : l("committed", { success: !1, message: C.message || "Commit failed" });
        } catch (C) {
          l("committed", { success: !1, message: C instanceof Error ? C.message : "Commit failed" });
        } finally {
          u.value = !1;
        }
      }
    }
    return (L, M) => t.asModal ? (s(), R(We, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: M[5] || (M[5] = ($) => l("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: M[4] || (M[4] = Le(() => {
          }, ["stop"]))
        }, [
          e("div", ew, [
            M[11] || (M[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: M[0] || (M[0] = ($) => l("close"))
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
          e("div", tw, [
            t.status && r.value ? (s(), o("div", sw, [
              t.status.workflows.new.length ? (s(), o("div", ow, [
                M[12] || (M[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : d("", !0),
              t.status.workflows.modified.length ? (s(), o("div", nw, [
                M[13] || (M[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : d("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", aw, [
                M[14] || (M[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", lw, [
                M[15] || (M[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", iw, [
                M[16] || (M[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : d("", !0),
              v.value ? d("", !0) : (s(), o("div", rw, [...M[17] || (M[17] = [
                e("span", { class: "change-icon modified" }, "~", -1),
                e("span", null, "Configuration updated", -1)
              ])]))
            ])) : t.status ? (s(), o("div", dw, " No changes to commit ")) : (s(), o("div", cw, " Loading... ")),
            y.value ? (s(), o("div", uw, [
              e("div", mw, [
                M[18] || (M[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", vw, a(h.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", fw, [
                (s(!0), o(V, null, oe(h.value, ($) => (s(), o("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a($.name), 1),
                  p(": " + a($.issue_summary), 1)
                ]))), 128))
              ]),
              k(Es, {
                modelValue: m.value,
                "onUpdate:modelValue": M[1] || (M[1] = ($) => m.value = $),
                class: "allow-issues-toggle"
              }, {
                default: i(() => [...M[19] || (M[19] = [
                  p(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : d("", !0),
            e("div", gw, [
              k(Is, {
                modelValue: g.value,
                "onUpdate:modelValue": M[2] || (M[2] = ($) => g.value = $),
                placeholder: b.value ? "Enable 'Allow issues' to commit" : r.value ? "Describe your changes..." : "No changes",
                disabled: !r.value || u.value || b.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: w,
                onSubmit: w
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          e("div", pw, [
            k(ve, {
              variant: "secondary",
              onClick: M[3] || (M[3] = ($) => l("close"))
            }, {
              default: i(() => [...M[20] || (M[20] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(ve, {
              variant: m.value ? "danger" : "primary",
              disabled: !r.value || !g.value.trim() || u.value || b.value,
              loading: u.value,
              onClick: w
            }, {
              default: i(() => [
                p(a(u.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", hw, [
      e("div", yw, [
        M[22] || (M[22] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: M[6] || (M[6] = ($) => l("close"))
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
      e("div", ww, [
        t.status && r.value ? (s(), o("div", kw, [
          t.status.workflows.new.length ? (s(), o("div", bw, [
            M[23] || (M[23] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          t.status.workflows.modified.length ? (s(), o("div", _w, [
            M[24] || (M[24] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", $w, [
            M[25] || (M[25] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", Cw, [
            M[26] || (M[26] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", xw, [
            M[27] || (M[27] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0),
          v.value ? d("", !0) : (s(), o("div", Sw, [...M[28] || (M[28] = [
            e("span", { class: "change-icon modified" }, "~", -1),
            e("span", null, "Configuration updated", -1)
          ])]))
        ])) : t.status ? (s(), o("div", Iw, " No changes to commit ")) : (s(), o("div", Ew, " Loading... ")),
        y.value ? (s(), o("div", Mw, [
          e("div", Tw, [
            M[29] || (M[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", Rw, a(h.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", Lw, [
            (s(!0), o(V, null, oe(h.value, ($) => (s(), o("div", {
              key: $.name,
              class: "issue-item"
            }, [
              e("strong", null, a($.name), 1),
              p(": " + a($.issue_summary), 1)
            ]))), 128))
          ]),
          k(Es, {
            modelValue: m.value,
            "onUpdate:modelValue": M[7] || (M[7] = ($) => m.value = $),
            class: "allow-issues-toggle"
          }, {
            default: i(() => [...M[30] || (M[30] = [
              p(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : d("", !0),
        e("div", zw, [
          k(Is, {
            modelValue: g.value,
            "onUpdate:modelValue": M[8] || (M[8] = ($) => g.value = $),
            placeholder: b.value ? "Enable 'Allow issues' to commit" : r.value ? "Describe your changes..." : "No changes",
            disabled: !r.value || u.value || b.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: w,
            onSubmit: w
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      e("div", Pw, [
        k(ve, {
          variant: "secondary",
          onClick: M[9] || (M[9] = ($) => l("close"))
        }, {
          default: i(() => [...M[31] || (M[31] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        }),
        k(ve, {
          variant: m.value ? "danger" : "primary",
          disabled: !r.value || !g.value.trim() || u.value || b.value,
          loading: u.value,
          onClick: w
        }, {
          default: i(() => [
            p(a(u.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), qs = /* @__PURE__ */ te(Dw, [["__scopeId", "data-v-d0fe6172"]]), Nw = { class: "modal-header" }, Uw = { class: "modal-body" }, Ow = { class: "switch-message" }, Bw = { class: "switch-details" }, Fw = { class: "modal-actions" }, Aw = /* @__PURE__ */ ee({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), R(We, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (l) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Le(() => {
          }, ["stop"]))
        }, [
          e("div", Nw, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (l) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Uw, [
            e("p", Ow, [
              n[6] || (n[6] = p(" Switch from ", -1)),
              e("strong", null, a(t.fromEnvironment), 1),
              n[7] || (n[7] = p(" to ", -1)),
              e("strong", null, a(t.toEnvironment), 1),
              n[8] || (n[8] = p("? ", -1))
            ]),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", Bw, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Fw, [
            k(ae, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (l) => c.$emit("close"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(ae, {
              variant: "primary",
              onClick: n[2] || (n[2] = (l) => c.$emit("confirm"))
            }, {
              default: i(() => [...n[12] || (n[12] = [
                p(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), Vw = /* @__PURE__ */ te(Aw, [["__scopeId", "data-v-e9c5253e"]]), Ww = {
  key: 0,
  class: "modal-overlay"
}, Gw = { class: "modal-content" }, jw = { class: "modal-body" }, Hw = { class: "progress-info" }, qw = { class: "progress-percentage" }, Kw = { class: "progress-state" }, Jw = { class: "switch-steps" }, Yw = { class: "step-icon" }, Xw = { class: "step-label" }, Qw = /* @__PURE__ */ ee({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, n = N(() => {
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
    }), l = N(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), f = N(() => {
      const g = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], u = g.findIndex((m) => m.state === c.state);
      return g.map((m, r) => {
        let v = "pending", h = "○";
        return r < u ? (v = "completed", h = "✓") : r === u && (v = "active", h = "⟳"), {
          ...m,
          status: v,
          icon: h
        };
      });
    });
    return (g, u) => (s(), R(We, { to: "body" }, [
      t.show ? (s(), o("div", Ww, [
        e("div", Gw, [
          u[1] || (u[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", jw, [
            k(js, {
              progress: t.progress,
              variant: l.value
            }, null, 8, ["progress", "variant"]),
            e("div", Hw, [
              e("div", qw, a(t.progress) + "%", 1),
              e("div", Kw, a(n.value), 1)
            ]),
            e("div", Jw, [
              (s(!0), o(V, null, oe(f.value, (m) => (s(), o("div", {
                key: m.state,
                class: me(["switch-step", m.status])
              }, [
                e("span", Yw, a(m.icon), 1),
                e("span", Xw, a(m.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), Zw = /* @__PURE__ */ te(Qw, [["__scopeId", "data-v-768a5078"]]), ek = { class: "modal-header" }, tk = { class: "modal-body" }, sk = {
  key: 0,
  class: "node-section"
}, ok = { class: "node-list" }, nk = {
  key: 1,
  class: "node-section"
}, ak = { class: "node-list" }, lk = { class: "modal-actions" }, ik = /* @__PURE__ */ ee({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), R(We, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (l) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Le(() => {
          }, ["stop"]))
        }, [
          e("div", ek, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (l) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", tk, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", sk, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", ok, [
                (s(!0), o(V, null, oe(t.mismatchDetails.missing_nodes, (l) => (s(), o("div", {
                  key: l,
                  class: "node-item add"
                }, " + " + a(l), 1))), 128))
              ])
            ])) : d("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", nk, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", ak, [
                (s(!0), o(V, null, oe(t.mismatchDetails.extra_nodes, (l) => (s(), o("div", {
                  key: l,
                  class: "node-item remove"
                }, " - " + a(l), 1))), 128))
              ])
            ])) : d("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", lk, [
            k(ae, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (l) => c.$emit("close"))
            }, {
              default: i(() => [...n[10] || (n[10] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(ae, {
              variant: "primary",
              onClick: n[2] || (n[2] = (l) => c.$emit("confirm"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                p(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), rk = /* @__PURE__ */ te(ik, [["__scopeId", "data-v-7cad7518"]]), dk = [
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
], ck = "v0.0.2", uk = "Akatz", mk = { class: "social-buttons" }, vk = ["title", "aria-label", "onClick"], fk = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, gk = ["d"], pk = ["title", "aria-label", "onClick"], hk = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, yk = ["d"], wk = /* @__PURE__ */ ee({
  __name: "SocialButtons",
  setup(t) {
    function c(n) {
      window.open(n, "_blank", "noopener,noreferrer");
    }
    return (n, l) => (s(), o("div", mk, [
      (s(!0), o(V, null, oe(_e(dk), (f) => (s(), o(V, {
        key: f.id
      }, [
        f.label ? (s(), o("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: f.title,
          "aria-label": f.ariaLabel,
          onClick: (g) => c(f.url)
        }, [
          p(a(f.label) + " ", 1),
          (s(), o("svg", fk, [
            e("path", {
              d: f.iconPath
            }, null, 8, gk)
          ]))
        ], 8, vk)) : (s(), o("button", {
          key: 1,
          class: "icon-btn social-link",
          title: f.title,
          "aria-label": f.ariaLabel,
          onClick: (g) => c(f.url)
        }, [
          (s(), o("svg", hk, [
            e("path", {
              d: f.iconPath
            }, null, 8, yk)
          ]))
        ], 8, pk))
      ], 64))), 128))
    ]));
  }
}), Ks = /* @__PURE__ */ te(wk, [["__scopeId", "data-v-4f846342"]]), kk = { class: "footer-info" }, bk = { class: "version" }, _k = { class: "made-by" }, $k = /* @__PURE__ */ ee({
  __name: "FooterInfo",
  setup(t) {
    return (c, n) => (s(), o("div", kk, [
      e("span", bk, a(_e(ck)), 1),
      e("span", _k, [
        n[0] || (n[0] = p(" made with ", -1)),
        n[1] || (n[1] = e("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          e("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        p(" by " + a(_e(uk)), 1)
      ])
    ]));
  }
}), Js = /* @__PURE__ */ te($k, [["__scopeId", "data-v-8bc3db0a"]]), Ck = /* @__PURE__ */ ee({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = _(null);
    async function l() {
      var g;
      await ((g = n.value) == null ? void 0 : g.saveSettings());
    }
    function f() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (g, u) => (s(), R(Je, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: u[1] || (u[1] = (m) => g.$emit("close"))
    }, {
      body: i(() => [
        k(As, {
          ref_key: "contentRef",
          ref: n,
          "workspace-path": t.workspacePath,
          onSaved: f
        }, null, 8, ["workspace-path"])
      ]),
      footer: i(() => {
        var m;
        return [
          k(ve, {
            variant: "primary",
            disabled: !((m = n.value) != null && m.hasChanges),
            onClick: l
          }, {
            default: i(() => [...u[2] || (u[2] = [
              p(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(ve, {
            variant: "secondary",
            onClick: u[0] || (u[0] = (r) => g.$emit("close"))
          }, {
            default: i(() => [...u[3] || (u[3] = [
              p(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), xk = /* @__PURE__ */ te(Ck, [["__scopeId", "data-v-fac00ae7"]]), Sk = { class: "header-actions" }, Ik = {
  key: 0,
  class: "wizard-step"
}, Ek = { class: "form-field" }, Mk = ["placeholder"], Tk = {
  key: 0,
  class: "form-error"
}, Rk = { class: "form-field form-field--checkbox" }, Lk = { class: "form-checkbox" }, zk = {
  key: 0,
  class: "form-field"
}, Pk = ["placeholder"], Dk = {
  key: 0,
  class: "form-info"
}, Nk = {
  key: 1,
  class: "form-suggestion"
}, Uk = {
  key: 2,
  class: "form-error"
}, Ok = {
  key: 3,
  class: "form-info"
}, Bk = {
  key: 1,
  class: "wizard-step"
}, Fk = {
  key: 0,
  class: "progress-check-loading"
}, Ak = {
  key: 0,
  class: "cli-warning"
}, Vk = { class: "cli-warning-header" }, Wk = {
  key: 1,
  class: "env-landing"
}, Gk = { class: "env-list" }, jk = ["value"], Hk = { class: "env-name" }, qk = {
  key: 2,
  class: "env-create"
}, Kk = { class: "form-field" }, Jk = { class: "form-field" }, Yk = ["value"], Xk = { class: "form-field" }, Qk = ["disabled"], Zk = ["value"], eb = { class: "form-field" }, tb = ["value"], sb = { class: "form-field form-field--checkbox" }, ob = { class: "form-checkbox" }, nb = {
  key: 0,
  class: "form-error"
}, ab = {
  key: 1,
  class: "env-creating"
}, lb = { class: "creating-intro" }, ib = {
  key: 3,
  class: "env-import"
}, rb = { class: "wizard-footer" }, db = { class: "wizard-footer-actions" }, Et = 10, cb = 600 * 1e3, Ms = 1800 * 1e3, ub = /* @__PURE__ */ ee({
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
      initializeWorkspace: f,
      getInitializeProgress: g,
      validatePath: u,
      createEnvironment: m,
      getCreateProgress: r,
      getImportProgress: v,
      getComfyUIReleases: h
    } = Ae(), y = _(n.initialStep || 1), b = _(null), w = _("landing"), L = _(!1), M = _(!1), $ = _(!1), C = _(!1), B = _(null), x = _(n.initialStep === 2), T = _(n.defaultPath), K = _(!!n.detectedModelsDir), A = _(n.detectedModelsDir || ""), W = _(null), E = _(null), z = _(null), O = _(null), le = _("my-new-env"), se = _(Ws), Y = _("latest"), de = _(Gs), J = _(!0), D = _(null), P = _(null), I = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), re = _(!1), Z = _(!1), ye = _(!1), $e = _({ progress: 0, message: "" }), Me = _({ progress: 0, message: "" }), Ue = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], ce = _(0), ge = _(null), Ie = _(0), X = _(null), ne = N(() => {
      var S, F;
      const ue = (S = T.value) == null ? void 0 : S.trim(), j = !W.value, H = !K.value || !E.value && ((F = A.value) == null ? void 0 : F.trim());
      return ue && j && H;
    }), pe = N(() => {
      var ue;
      return (ue = le.value) == null ? void 0 : ue.trim();
    }), ze = N(() => !!(y.value === 2 || P.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), st = N(() => P.value || n.workspacePath || null);
    async function dt() {
      var ue;
      if (W.value = null, !!((ue = T.value) != null && ue.trim()))
        try {
          const j = await u({ path: T.value, type: "workspace" });
          j.valid || (W.value = j.error || "Invalid path");
        } catch (j) {
          W.value = j instanceof Error ? j.message : "Validation failed";
        }
    }
    async function Se() {
      var ue;
      if (E.value = null, z.value = null, O.value = null, !!((ue = A.value) != null && ue.trim()))
        try {
          const j = await u({ path: A.value, type: "models" });
          if (j.valid)
            O.value = j.model_count ?? null;
          else if (E.value = j.error || "Invalid path", j.suggestion) {
            z.value = j.suggestion, A.value = j.suggestion, E.value = null;
            const H = await u({ path: j.suggestion, type: "models" });
            H.valid && (O.value = H.model_count ?? null);
          }
        } catch (j) {
          E.value = j instanceof Error ? j.message : "Validation failed";
        }
    }
    async function Qe() {
      var ue, j, H, S, F;
      if (W.value = null, E.value = null, await dt(), (ue = W.value) != null && ue.includes("already exists")) {
        W.value = null, P.value = ((j = T.value) == null ? void 0 : j.trim()) || n.defaultPath, y.value = 2, Ge();
        return;
      }
      if (!W.value && !(K.value && ((H = A.value) != null && H.trim()) && (await Se(), E.value))) {
        Z.value = !0;
        try {
          await f({
            workspace_path: ((S = T.value) == null ? void 0 : S.trim()) || n.defaultPath,
            models_directory: K.value && ((F = A.value) == null ? void 0 : F.trim()) || null
          }), ce.value = 0, ge.value = Date.now();
          const Q = setInterval(async () => {
            var he;
            if (ge.value && Date.now() - ge.value > cb) {
              clearInterval(Q), Z.value = !1, W.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Be = await g();
              if (ce.value = 0, Be.state === "idle" && Z.value) {
                clearInterval(Q), Z.value = !1, W.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              $e.value = { progress: Be.progress, message: Be.message }, Be.state === "complete" ? (clearInterval(Q), Z.value = !1, P.value = ((he = T.value) == null ? void 0 : he.trim()) || n.defaultPath, y.value = 2, Ge()) : Be.state === "error" && (clearInterval(Q), Z.value = !1, W.value = Be.error || "Workspace creation failed");
            } catch (Be) {
              ce.value++, console.warn(`Polling failure ${ce.value}/${Et}:`, Be), ce.value >= Et && (clearInterval(Q), Z.value = !1, W.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Q) {
          Z.value = !1, W.value = Q instanceof Error ? Q.message : "Failed to create workspace";
        }
      }
    }
    async function Ye() {
      ye.value = !0, D.value = null;
      try {
        const ue = {
          name: le.value.trim() || "my-new-env",
          python_version: se.value,
          comfyui_version: Y.value,
          torch_backend: de.value,
          switch_after: J.value,
          workspace_path: P.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await m(ue)).status === "started") {
          Ie.value = 0, X.value = Date.now();
          const H = setInterval(async () => {
            if (X.value && Date.now() - X.value > Ms) {
              clearInterval(H), ye.value = !1, D.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const S = await r();
              if (Ie.value = 0, S.state === "idle" && ye.value) {
                clearInterval(H), ye.value = !1, D.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Me.value = {
                progress: S.progress ?? 0,
                message: S.message,
                phase: S.phase
              }, S.state === "complete") {
                clearInterval(H), ye.value = !1;
                const F = S.environment_name || ue.name;
                J.value ? l("complete", F, P.value) : (w.value = "landing", l("environment-created-no-switch", F));
              } else S.state === "error" && (clearInterval(H), ye.value = !1, D.value = S.error || "Environment creation failed");
            } catch (S) {
              Ie.value++, console.warn(`Polling failure ${Ie.value}/${Et}:`, S), Ie.value >= Et && (clearInterval(H), ye.value = !1, D.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ue) {
        ye.value = !1, D.value = ue instanceof Error ? ue.message : "Unknown error";
      }
    }
    async function Ge() {
      re.value = !0;
      try {
        I.value = await h();
      } catch (ue) {
        console.error("Failed to load ComfyUI releases:", ue);
      } finally {
        re.value = !1;
      }
    }
    function gt() {
      b.value && l("switch-environment", b.value, P.value);
    }
    function we() {
      w.value === "create" || w.value === "import" ? w.value = "landing" : y.value === 2 && n.setupState === "no_workspace" && (y.value = 1);
    }
    function Ve(ue, j) {
      M.value = !1, j ? l("complete", ue, P.value) : (l("environment-created-no-switch", ue), w.value = "landing");
    }
    function ct() {
    }
    Ne(async () => {
      if (n.detectedModelsDir && (A.value = n.detectedModelsDir), n.workspacePath && (P.value = n.workspacePath), y.value === 2) {
        Ge();
        const ue = setTimeout(() => {
          x.value = !1;
        }, 3e3);
        await ot(), clearTimeout(ue), x.value = !1;
      }
    });
    async function ot() {
      try {
        const ue = await r();
        if (console.log("[ComfyGit] Create progress check:", ue.state, ue), ue.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ue.environment_name), w.value = "create", ye.value = !0, le.value = ue.environment_name || "my-new-env", Me.value = {
            progress: ue.progress ?? 0,
            message: ue.message,
            phase: ue.phase
          }, Te();
          return;
        }
      } catch (ue) {
        console.log("[ComfyGit] Create progress check failed:", ue);
      }
      try {
        const ue = await v();
        console.log("[ComfyGit] Import progress check:", ue.state, ue), ue.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ue.environment_name), B.value = {
          message: ue.message || "Importing...",
          phase: ue.phase || "",
          progress: ue.progress ?? 0,
          environmentName: ue.environment_name || ""
        }, C.value = !0, w.value = "import", M.value = !0);
      } catch (ue) {
        console.log("[ComfyGit] Import progress check failed:", ue);
      }
    }
    async function Te() {
      Ie.value = 0, X.value = Date.now();
      let ue = null;
      const j = async () => {
        if (X.value && Date.now() - X.value > Ms)
          return ue && clearInterval(ue), ye.value = !1, D.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const S = await r();
          if (Ie.value = 0, S.state === "idle" && ye.value)
            return ue && clearInterval(ue), ye.value = !1, D.value = "Environment creation was interrupted. Please try again.", !1;
          if (Me.value = {
            progress: S.progress ?? 0,
            message: S.message,
            phase: S.phase
          }, S.state === "complete") {
            ue && clearInterval(ue), ye.value = !1;
            const F = S.environment_name || le.value;
            return l("complete", F, P.value), !1;
          } else if (S.state === "error")
            return ue && clearInterval(ue), ye.value = !1, D.value = S.error || "Environment creation failed", !1;
          return !0;
        } catch (S) {
          return Ie.value++, console.warn(`Polling failure ${Ie.value}/${Et}:`, S), Ie.value >= Et ? (ue && clearInterval(ue), ye.value = !1, D.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await j() && (ue = setInterval(async () => {
        !await j() && ue && clearInterval(ue);
      }, 2e3));
    }
    return (ue, j) => (s(), o(V, null, [
      k(Je, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: j[15] || (j[15] = (H) => ue.$emit("close"))
      }, {
        header: i(() => [
          j[20] || (j[20] = e("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          e("div", Sk, [
            k(Ks),
            j[19] || (j[19] = e("span", { class: "header-divider" }, null, -1)),
            ze.value ? (s(), o("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: j[0] || (j[0] = (H) => L.value = !0)
            }, [...j[17] || (j[17] = [
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
            ])])) : d("", !0),
            e("button", {
              class: "icon-btn",
              onClick: j[1] || (j[1] = (H) => ue.$emit("close")),
              title: "Close"
            }, [...j[18] || (j[18] = [
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
          var H;
          return [
            y.value === 1 ? (s(), o("div", Ik, [
              j[24] || (j[24] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              e("div", Ek, [
                j[21] || (j[21] = e("label", { class: "form-label" }, "Workspace Path", -1)),
                Oe(e("input", {
                  "onUpdate:modelValue": j[2] || (j[2] = (S) => T.value = S),
                  type: "text",
                  class: "form-input",
                  placeholder: t.defaultPath
                }, null, 8, Mk), [
                  [Tt, T.value]
                ]),
                W.value ? (s(), o("p", Tk, a(W.value), 1)) : d("", !0)
              ]),
              e("div", Rk, [
                e("label", Lk, [
                  Oe(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": j[3] || (j[3] = (S) => K.value = S)
                  }, null, 512), [
                    [Xt, K.value]
                  ]),
                  j[22] || (j[22] = e("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              K.value ? (s(), o("div", zk, [
                j[23] || (j[23] = e("label", { class: "form-label" }, "Models Directory", -1)),
                Oe(e("input", {
                  "onUpdate:modelValue": j[4] || (j[4] = (S) => A.value = S),
                  type: "text",
                  class: "form-input",
                  placeholder: t.detectedModelsDir || "/path/to/models"
                }, null, 8, Pk), [
                  [Tt, A.value]
                ]),
                t.detectedModelsDir && !A.value ? (s(), o("p", Dk, " Detected: " + a(t.detectedModelsDir), 1)) : d("", !0),
                z.value ? (s(), o("p", Nk, " Did you mean: " + a(z.value), 1)) : d("", !0),
                E.value ? (s(), o("p", Uk, a(E.value), 1)) : d("", !0),
                O.value !== null && !E.value ? (s(), o("p", Ok, " Found " + a(O.value) + " model files ", 1)) : d("", !0)
              ])) : d("", !0),
              Z.value ? (s(), R(es, {
                key: 1,
                progress: $e.value.progress,
                message: $e.value.message
              }, null, 8, ["progress", "message"])) : d("", !0)
            ])) : d("", !0),
            y.value === 2 ? (s(), o("div", Bk, [
              x.value ? (s(), o("div", Fk, [...j[25] || (j[25] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (s(), o(V, { key: 1 }, [
                !n.cliInstalled && !$.value ? (s(), o("div", Ak, [
                  e("div", Vk, [
                    j[27] || (j[27] = e("span", { class: "cli-warning-icon" }, "!", -1)),
                    j[28] || (j[28] = e("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    e("button", {
                      class: "cli-warning-close",
                      onClick: j[5] || (j[5] = (S) => $.value = !0),
                      title: "Dismiss"
                    }, [...j[26] || (j[26] = [
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
                  j[29] || (j[29] = e("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  j[30] || (j[30] = e("div", { class: "cli-warning-commands" }, [
                    e("code", null, "pipx install comfygit"),
                    e("span", { class: "cli-warning-or" }, "or"),
                    e("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : d("", !0),
                w.value === "landing" ? (s(), o("div", Wk, [
                  j[34] || (j[34] = e("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  e("button", {
                    class: "landing-option",
                    onClick: j[6] || (j[6] = (S) => w.value = "create")
                  }, [...j[31] || (j[31] = [
                    e("span", { class: "option-icon" }, "➕", -1),
                    e("div", { class: "option-content" }, [
                      e("span", { class: "option-title" }, "Create New Environment"),
                      e("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    e("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  e("button", {
                    class: "landing-option",
                    onClick: j[7] || (j[7] = (S) => {
                      C.value = !1, w.value = "import";
                    })
                  }, [...j[32] || (j[32] = [
                    e("span", { class: "option-icon" }, "📦", -1),
                    e("div", { class: "option-content" }, [
                      e("span", { class: "option-title" }, "Import Environment"),
                      e("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    e("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (H = n.existingEnvironments) != null && H.length ? (s(), o(V, { key: 0 }, [
                    j[33] || (j[33] = e("div", { class: "landing-divider" }, [
                      e("span", null, "or switch to existing")
                    ], -1)),
                    e("div", Gk, [
                      (s(!0), o(V, null, oe(n.existingEnvironments, (S) => (s(), o("label", {
                        key: S,
                        class: me(["env-option", { selected: b.value === S }])
                      }, [
                        Oe(e("input", {
                          type: "radio",
                          name: "env-select",
                          value: S,
                          "onUpdate:modelValue": j[8] || (j[8] = (F) => b.value = F)
                        }, null, 8, jk), [
                          [Kt, b.value]
                        ]),
                        e("span", Hk, a(S), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : d("", !0)
                ])) : w.value === "create" ? (s(), o("div", qk, [
                  ye.value ? (s(), o("div", ab, [
                    e("p", lb, [
                      j[41] || (j[41] = p(" Creating environment ", -1)),
                      e("strong", null, a(le.value), 1),
                      j[42] || (j[42] = p("... ", -1))
                    ]),
                    k(es, {
                      progress: Me.value.progress,
                      message: Me.value.message,
                      "current-phase": Me.value.phase,
                      "show-steps": !0,
                      steps: Ue
                    }, null, 8, ["progress", "message", "current-phase"]),
                    j[43] || (j[43] = e("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (s(), o(V, { key: 0 }, [
                    j[40] || (j[40] = e("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    e("div", Kk, [
                      j[35] || (j[35] = e("label", { class: "form-label" }, "Environment Name", -1)),
                      Oe(e("input", {
                        "onUpdate:modelValue": j[9] || (j[9] = (S) => le.value = S),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Tt, le.value]
                      ])
                    ]),
                    e("div", Jk, [
                      j[36] || (j[36] = e("label", { class: "form-label" }, "Python Version", -1)),
                      Oe(e("select", {
                        "onUpdate:modelValue": j[10] || (j[10] = (S) => se.value = S),
                        class: "form-select"
                      }, [
                        (s(!0), o(V, null, oe(_e(Vs), (S) => (s(), o("option", {
                          key: S,
                          value: S
                        }, a(S), 9, Yk))), 128))
                      ], 512), [
                        [Rt, se.value]
                      ])
                    ]),
                    e("div", Xk, [
                      j[37] || (j[37] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Oe(e("select", {
                        "onUpdate:modelValue": j[11] || (j[11] = (S) => Y.value = S),
                        class: "form-select",
                        disabled: re.value
                      }, [
                        (s(!0), o(V, null, oe(I.value, (S) => (s(), o("option", {
                          key: S.tag_name,
                          value: S.tag_name
                        }, a(S.name), 9, Zk))), 128))
                      ], 8, Qk), [
                        [Rt, Y.value]
                      ])
                    ]),
                    e("div", eb, [
                      j[38] || (j[38] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Oe(e("select", {
                        "onUpdate:modelValue": j[12] || (j[12] = (S) => de.value = S),
                        class: "form-select"
                      }, [
                        (s(!0), o(V, null, oe(_e(fs), (S) => (s(), o("option", {
                          key: S,
                          value: S
                        }, a(S) + a(S === "auto" ? " (detect GPU)" : ""), 9, tb))), 128))
                      ], 512), [
                        [Rt, de.value]
                      ])
                    ]),
                    e("div", sb, [
                      e("label", ob, [
                        Oe(e("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": j[13] || (j[13] = (S) => J.value = S)
                        }, null, 512), [
                          [Xt, J.value]
                        ]),
                        j[39] || (j[39] = e("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    D.value ? (s(), o("div", nb, a(D.value), 1)) : d("", !0)
                  ], 64))
                ])) : w.value === "import" ? (s(), o("div", ib, [
                  k(Hs, {
                    "workspace-path": P.value,
                    "resume-import": C.value,
                    "initial-progress": B.value ?? void 0,
                    onImportComplete: Ve,
                    onImportStarted: j[14] || (j[14] = (S) => M.value = !0),
                    onSourceCleared: ct
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : d("", !0)
              ], 64))
            ])) : d("", !0)
          ];
        }),
        footer: i(() => [
          e("div", rb, [
            k(Js),
            e("div", db, [
              y.value === 1 ? (s(), R(ve, {
                key: 0,
                variant: "primary",
                disabled: !ne.value || Z.value,
                onClick: Qe
              }, {
                default: i(() => [
                  p(a(Z.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : y.value === 2 ? (s(), o(V, { key: 1 }, [
                !ye.value && !M.value && (w.value !== "landing" || n.setupState === "no_workspace" && !P.value) ? (s(), R(ve, {
                  key: 0,
                  variant: "secondary",
                  onClick: we
                }, {
                  default: i(() => [...j[44] || (j[44] = [
                    p(" Back ", -1)
                  ])]),
                  _: 1
                })) : d("", !0),
                w.value === "create" ? (s(), R(ve, {
                  key: 1,
                  variant: "primary",
                  disabled: !pe.value || ye.value,
                  onClick: Ye
                }, {
                  default: i(() => [
                    p(a(ye.value ? "Creating..." : J.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : d("", !0),
                w.value === "landing" && b.value ? (s(), R(ve, {
                  key: 2,
                  variant: "primary",
                  onClick: gt
                }, {
                  default: i(() => [
                    p(" Switch to " + a(b.value), 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ], 64)) : d("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      L.value ? (s(), R(xk, {
        key: 0,
        "workspace-path": st.value,
        onClose: j[16] || (j[16] = (H) => L.value = !1)
      }, null, 8, ["workspace-path"])) : d("", !0)
    ], 64));
  }
}), mb = /* @__PURE__ */ te(ub, [["__scopeId", "data-v-9a9aadc0"]]), vb = { class: "comfygit-panel" }, fb = { class: "panel-header" }, gb = { class: "header-left" }, pb = {
  key: 0,
  class: "header-info"
}, hb = { class: "header-actions" }, yb = { class: "env-switcher" }, wb = {
  key: 0,
  class: "header-info"
}, kb = { class: "branch-name" }, bb = { class: "panel-main" }, _b = { class: "sidebar" }, $b = { class: "sidebar-content" }, Cb = { class: "sidebar-section" }, xb = { class: "sidebar-section" }, Sb = { class: "sidebar-section" }, Ib = { class: "sidebar-footer" }, Eb = { class: "content-area" }, Mb = {
  key: 0,
  class: "error-message"
}, Tb = {
  key: 1,
  class: "loading"
}, Rb = { class: "dialog-content env-selector-dialog" }, Lb = { class: "dialog-header" }, zb = { class: "dialog-body" }, Pb = { class: "env-list" }, Db = { class: "env-info" }, Nb = { class: "env-name-row" }, Ub = { class: "env-indicator" }, Ob = { class: "env-name" }, Bb = {
  key: 0,
  class: "env-branch"
}, Fb = {
  key: 1,
  class: "current-label"
}, Ab = { class: "env-stats" }, Vb = ["onClick"], Wb = { class: "toast-container" }, Gb = { class: "toast-message" }, jb = /* @__PURE__ */ ee({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const n = t, l = c, {
      getStatus: f,
      getHistory: g,
      getBranches: u,
      checkout: m,
      createBranch: r,
      switchBranch: v,
      deleteBranch: h,
      getEnvironments: y,
      switchEnvironment: b,
      getSwitchProgress: w,
      deleteEnvironment: L,
      syncEnvironmentManually: M,
      repairWorkflowModels: $,
      getSetupStatus: C
    } = Ae(), B = Ds(), x = _(null), T = _([]), K = _([]), A = _([]), W = N(() => A.value.find((G) => G.is_current)), E = _(null), z = _(!1), O = _(1), le = N(() => {
      var G;
      return ((G = E.value) == null ? void 0 : G.state) || "managed";
    }), se = _(!1), Y = _(null), de = _(null), J = _(!1), D = _(null), P = _(null), I = _(null), re = _(!1), Z = _(!1), ye = _(""), $e = _(null), Me = _({ state: "idle", progress: 0, message: "" });
    let Ue = null, ce = null;
    const ge = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, Ie = n.initialView ? ge[n.initialView] : null, X = _((Ie == null ? void 0 : Ie.view) ?? "status"), ne = _((Ie == null ? void 0 : Ie.section) ?? "this-env");
    function pe(G, U) {
      X.value = G, ne.value = U;
    }
    function ze(G) {
      const fe = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[G];
      fe && pe(fe.view, fe.section);
    }
    function st() {
      pe("branches", "this-env");
    }
    function dt() {
      l("close"), setTimeout(() => {
        var U;
        const G = document.querySelectorAll("button.comfyui-button");
        for (const fe of G)
          if (((U = fe.textContent) == null ? void 0 : U.trim()) === "Manager") {
            fe.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const Se = _(null), Qe = _(!1), Ye = _(!1), Ge = _([]);
    let gt = 0;
    function we(G, U = "info", fe = 3e3) {
      const xe = ++gt;
      return Ge.value.push({ id: xe, message: G, type: U }), fe > 0 && setTimeout(() => {
        Ge.value = Ge.value.filter((Pe) => Pe.id !== xe);
      }, fe), xe;
    }
    function Ve(G) {
      Ge.value = Ge.value.filter((U) => U.id !== G);
    }
    function ct(G, U) {
      we(G, U);
    }
    const ot = N(() => {
      if (!x.value) return "neutral";
      const G = x.value.workflows, U = G.new.length > 0 || G.modified.length > 0 || G.deleted.length > 0 || x.value.has_changes;
      return x.value.comparison.is_synced ? U ? "warning" : "success" : "error";
    });
    N(() => x.value ? ot.value === "success" ? "All synced" : ot.value === "warning" ? "Uncommitted changes" : ot.value === "error" ? "Not synced" : "" : "");
    async function Te() {
      se.value = !0, Y.value = null;
      try {
        const [G, U, fe, xe] = await Promise.all([
          f(!0),
          g(),
          u(),
          y()
        ]);
        x.value = G, T.value = U.commits, K.value = fe.branches, A.value = xe, l("statusUpdate", G), D.value && await D.value.loadWorkflows(!0);
      } catch (G) {
        Y.value = G instanceof Error ? G.message : "Failed to load status", x.value = null, T.value = [], K.value = [];
      } finally {
        se.value = !1;
      }
    }
    function ue(G) {
      de.value = G;
    }
    async function j(G) {
      var fe;
      de.value = null;
      const U = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      Se.value = {
        title: U ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: U ? "You have uncommitted changes that will be lost." : `Checkout commit ${G.short_hash || ((fe = G.hash) == null ? void 0 : fe.slice(0, 7))}?`,
        details: U ? ws() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: U ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: U,
        onConfirm: async () => {
          var je;
          Se.value = null, he();
          const xe = we(`Checking out ${G.short_hash || ((je = G.hash) == null ? void 0 : je.slice(0, 7))}...`, "info", 0), Pe = await m(G.hash, U);
          Ve(xe), Pe.status === "success" ? we("Restarting ComfyUI...", "success") : we(Pe.message || "Checkout failed", "error");
        }
      };
    }
    async function H(G) {
      const U = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      Se.value = {
        title: U ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: U ? "You have uncommitted changes." : `Switch to branch "${G}"?`,
        details: U ? ws() : void 0,
        warning: U ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: U ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Se.value = null, he();
          const fe = we(`Switching to ${G}...`, "info", 0), xe = await v(G, U);
          Ve(fe), xe.status === "success" ? we("Restarting ComfyUI...", "success") : we(xe.message || "Branch switch failed", "error");
        }
      };
    }
    async function S(G) {
      const U = we(`Creating branch ${G}...`, "info", 0), fe = await r(G);
      Ve(U), fe.status === "success" ? (we(`Branch "${G}" created`, "success"), await Te()) : we(fe.message || "Failed to create branch", "error");
    }
    async function F(G, U = !1) {
      const fe = async (xe) => {
        var je;
        const Pe = we(`Deleting branch ${G}...`, "info", 0);
        try {
          const yt = await h(G, xe);
          Ve(Pe), yt.status === "success" ? (we(`Branch "${G}" deleted`, "success"), await Te()) : (je = yt.message) != null && je.includes("not fully merged") ? Se.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${G}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Se.value = null, await fe(!0);
            }
          } : we(yt.message || "Failed to delete branch", "error");
        } catch (yt) {
          Ve(Pe);
          const Pt = yt instanceof Error ? yt.message : "Failed to delete branch";
          Pt.includes("not fully merged") ? Se.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${G}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Se.value = null, await fe(!0);
            }
          } : we(Pt, "error");
        }
      };
      Se.value = {
        title: "Delete Branch",
        message: `Delete branch "${G}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Se.value = null, await fe(U);
        }
      };
    }
    async function Q(G) {
      de.value = null;
      const U = prompt("Enter branch name:");
      if (U) {
        const fe = we(`Creating branch ${U}...`, "info", 0), xe = await r(U, G.hash);
        Ve(fe), xe.status === "success" ? (we(`Branch "${U}" created from ${G.short_hash}`, "success"), await Te()) : we(xe.message || "Failed to create branch", "error");
      }
    }
    function he() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Be() {
      Se.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var G;
          Se.value = null, he(), we("Restarting environment...", "info");
          try {
            (G = window.app) != null && G.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function pt() {
      Se.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var G;
          Se.value = null, we("Stopping environment...", "info");
          try {
            (G = window.app) != null && G.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function nt(G, U) {
      J.value = !1, ye.value = G, $e.value = U || null, re.value = !0;
    }
    async function xt() {
      re.value = !1, Z.value = !0, he(), Me.value = {
        progress: 10,
        state: ht(10),
        message: St(10)
      };
      try {
        await b(ye.value, $e.value || void 0), q(), ke();
      } catch (G) {
        ie(), Z.value = !1, we(`Failed to initiate switch: ${G instanceof Error ? G.message : "Unknown error"}`, "error"), Me.value = { state: "idle", progress: 0, message: "" }, $e.value = null;
      }
    }
    function ht(G) {
      return G >= 100 ? "complete" : G >= 80 ? "validating" : G >= 60 ? "starting" : G >= 30 ? "syncing" : "preparing";
    }
    function St(G) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[ht(G)] || "";
    }
    function q() {
      if (ce) return;
      let G = 10;
      const U = 60, fe = 5e3, xe = 100, Pe = (U - G) / (fe / xe);
      ce = window.setInterval(() => {
        if (G += Pe, G >= U && (G = U, ie()), Me.value.progress < U) {
          const je = Math.floor(G);
          Me.value = {
            progress: je,
            state: ht(je),
            message: St(je)
          };
        }
      }, xe);
    }
    function ie() {
      ce && (clearInterval(ce), ce = null);
    }
    function ke() {
      Ue || (Ue = window.setInterval(async () => {
        try {
          let G = await B.getStatus();
          if ((!G || G.state === "idle") && (G = await w()), !G)
            return;
          const U = G.progress || 0;
          U >= 60 && ie();
          const fe = Math.max(U, Me.value.progress), xe = G.state && G.state !== "idle" && G.state !== "unknown", Pe = xe ? G.state : ht(fe), je = xe && G.message || St(fe);
          Me.value = {
            state: Pe,
            progress: fe,
            message: je
          }, G.state === "complete" ? (ie(), Re(), Z.value = !1, we(`✓ Switched to ${ye.value}`, "success"), await Te(), ye.value = "") : G.state === "rolled_back" ? (ie(), Re(), Z.value = !1, we("Switch failed, restored previous environment", "warning"), ye.value = "") : G.state === "critical_failure" && (ie(), Re(), Z.value = !1, we(`Critical error during switch: ${G.message}`, "error"), ye.value = "");
        } catch (G) {
          console.error("Failed to poll switch progress:", G);
        }
      }, 1e3));
    }
    function Re() {
      ie(), Ue && (clearInterval(Ue), Ue = null);
    }
    function Ze() {
      var G;
      re.value = !1, ye.value = "", (G = E.value) != null && G.state && E.value.state !== "managed" && (O.value = E.value.state === "no_workspace" ? 1 : 2, z.value = !0);
    }
    async function It(G) {
      Qe.value = !1, await Te(), we(G.message, G.success ? "success" : "error");
    }
    async function Ht() {
      Ye.value = !1;
      const G = we("Syncing environment...", "info", 0);
      try {
        const U = await M("skip", !0);
        if (Ve(G), U.status === "success") {
          const fe = [];
          U.nodes_installed.length && fe.push(`${U.nodes_installed.length} installed`), U.nodes_removed.length && fe.push(`${U.nodes_removed.length} removed`);
          const xe = fe.length ? `: ${fe.join(", ")}` : "";
          we(`✓ Environment synced${xe}`, "success"), await Te();
        } else {
          const fe = U.errors.length ? U.errors.join("; ") : U.message;
          we(`Sync failed: ${fe}`, "error");
        }
      } catch (U) {
        Ve(G), we(`Sync error: ${U instanceof Error ? U.message : "Unknown error"}`, "error");
      }
    }
    async function qt(G) {
      var U;
      try {
        const fe = await $(G);
        fe.failed.length === 0 ? we(`✓ Repaired ${fe.success} workflow${fe.success === 1 ? "" : "s"}`, "success") : we(`Repaired ${fe.success}, failed: ${fe.failed.length}`, "warning"), await Te();
      } catch (fe) {
        we(`Repair failed: ${fe instanceof Error ? fe.message : "Unknown error"}`, "error");
      } finally {
        (U = I.value) == null || U.resetRepairingState();
      }
    }
    async function ys() {
      var U, fe;
      const G = we("Repairing environment...", "info", 0);
      try {
        const xe = await M("skip", !0);
        if (Ve(G), xe.status === "success") {
          const Pe = [];
          xe.nodes_installed.length && Pe.push(`${xe.nodes_installed.length} installed`), xe.nodes_removed.length && Pe.push(`${xe.nodes_removed.length} removed`);
          const je = Pe.length ? `: ${Pe.join(", ")}` : "";
          we(`✓ Environment repaired${je}`, "success"), (U = I.value) == null || U.closeDetailModal(), await Te();
        } else {
          const Pe = xe.errors.length ? xe.errors.join(", ") : xe.message || "Unknown error";
          we(`Repair failed: ${Pe}`, "error");
        }
      } catch (xe) {
        Ve(G), we(`Repair error: ${xe instanceof Error ? xe.message : "Unknown error"}`, "error");
      } finally {
        (fe = I.value) == null || fe.resetRepairingEnvironmentState();
      }
    }
    async function to(G, U) {
      we(`Environment '${G}' created`, "success"), await Te(), P.value && await P.value.loadEnvironments(), U && await nt(G);
    }
    async function so(G) {
      var U;
      if (((U = W.value) == null ? void 0 : U.name) === G) {
        we("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      Se.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${G}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          Se.value = null;
          try {
            const fe = await L(G);
            fe.status === "success" ? (we(`Environment "${G}" deleted`, "success"), await Te(), P.value && await P.value.loadEnvironments()) : we(fe.message || "Failed to delete environment", "error");
          } catch (fe) {
            we(`Error deleting environment: ${fe instanceof Error ? fe.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function oo(G, U) {
      z.value = !1;
      try {
        E.value = await C();
      } catch {
      }
      await nt(G, U);
    }
    function no() {
      z.value = !1, l("close");
    }
    async function ao(G, U) {
      await nt(G, U);
    }
    async function lo(G) {
      await Te(), await nt(G);
    }
    async function io(G) {
      E.value = await C(), console.log(`Environment '${G}' created. Available for switching.`);
    }
    function ro() {
      pe("environments", "all-envs"), setTimeout(() => {
        var G;
        (G = P.value) == null || G.openCreateModal();
      }, 100);
    }
    function ws() {
      if (!x.value) return [];
      const G = [], U = x.value.workflows;
      return U.new.length && G.push(`${U.new.length} new workflow(s)`), U.modified.length && G.push(`${U.modified.length} modified workflow(s)`), U.deleted.length && G.push(`${U.deleted.length} deleted workflow(s)`), G;
    }
    return Ne(async () => {
      try {
        if (E.value = await C(), E.value.state === "no_workspace") {
          z.value = !0, O.value = 1;
          return;
        }
        if (E.value.state === "empty_workspace") {
          z.value = !0, O.value = 2;
          return;
        }
        if (E.value.state === "unmanaged") {
          z.value = !0, O.value = 2;
          return;
        }
      } catch (G) {
        console.warn("Setup status check failed, proceeding normally:", G);
      }
      await Te();
    }), (G, U) => {
      var fe, xe, Pe, je, yt, Pt, ks, bs, _s, $s, Cs, xs;
      return s(), o("div", vb, [
        e("div", fb, [
          e("div", gb, [
            U[30] || (U[30] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            x.value ? (s(), o("div", pb)) : d("", !0)
          ]),
          e("div", hb, [
            k(Ks),
            U[33] || (U[33] = e("span", { class: "header-divider" }, null, -1)),
            e("button", {
              class: me(["icon-btn", { spinning: se.value }]),
              onClick: Te,
              title: "Refresh"
            }, [...U[31] || (U[31] = [
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
              onClick: U[0] || (U[0] = (be) => l("close")),
              title: "Close"
            }, [...U[32] || (U[32] = [
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
        e("div", yb, [
          e("div", { class: "env-switcher-header" }, [
            U[34] || (U[34] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Be
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: pt
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: U[1] || (U[1] = (be) => pe("environments", "all-envs"))
          }, [
            x.value ? (s(), o("div", wb, [
              e("span", null, a(((fe = W.value) == null ? void 0 : fe.name) || ((xe = x.value) == null ? void 0 : xe.environment) || "Loading..."), 1),
              e("span", kb, "(" + a(x.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            U[35] || (U[35] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", bb, [
          e("div", _b, [
            e("div", $b, [
              e("div", Cb, [
                U[36] || (U[36] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                e("button", {
                  class: me(["sidebar-item", { active: X.value === "status" && ne.value === "this-env" }]),
                  onClick: U[2] || (U[2] = (be) => pe("status", "this-env"))
                }, " STATUS ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: X.value === "workflows" }]),
                  onClick: U[3] || (U[3] = (be) => pe("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: X.value === "models-env" }]),
                  onClick: U[4] || (U[4] = (be) => pe("models-env", "this-env"))
                }, " MODELS ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: X.value === "branches" }]),
                  onClick: U[5] || (U[5] = (be) => pe("branches", "this-env"))
                }, " BRANCHES ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: X.value === "history" }]),
                  onClick: U[6] || (U[6] = (be) => pe("history", "this-env"))
                }, " HISTORY ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: X.value === "nodes" }]),
                  onClick: U[7] || (U[7] = (be) => pe("nodes", "this-env"))
                }, " NODES ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: X.value === "debug-env" }]),
                  onClick: U[8] || (U[8] = (be) => pe("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              U[39] || (U[39] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", xb, [
                U[37] || (U[37] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                e("button", {
                  class: me(["sidebar-item", { active: X.value === "environments" }]),
                  onClick: U[9] || (U[9] = (be) => pe("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: X.value === "model-index" }]),
                  onClick: U[10] || (U[10] = (be) => pe("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: X.value === "settings" }]),
                  onClick: U[11] || (U[11] = (be) => pe("settings", "all-envs"))
                }, " SETTINGS ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: X.value === "debug-workspace" }]),
                  onClick: U[12] || (U[12] = (be) => pe("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              U[40] || (U[40] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", Sb, [
                U[38] || (U[38] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                e("button", {
                  class: me(["sidebar-item", { active: X.value === "export" }]),
                  onClick: U[13] || (U[13] = (be) => pe("export", "sharing"))
                }, " EXPORT ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: X.value === "import" }]),
                  onClick: U[14] || (U[14] = (be) => pe("import", "sharing"))
                }, " IMPORT ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: X.value === "remotes" }]),
                  onClick: U[15] || (U[15] = (be) => pe("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            e("div", Ib, [
              k(Js)
            ])
          ]),
          e("div", Eb, [
            Y.value ? (s(), o("div", Mb, a(Y.value), 1)) : !x.value && X.value === "status" ? (s(), o("div", Tb, " Loading status... ")) : (s(), o(V, { key: 2 }, [
              X.value === "status" ? (s(), R(Ga, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: I,
                status: x.value,
                "setup-state": le.value,
                onSwitchBranch: st,
                onCommitChanges: U[16] || (U[16] = (be) => Qe.value = !0),
                onSyncEnvironment: U[17] || (U[17] = (be) => Ye.value = !0),
                onViewWorkflows: U[18] || (U[18] = (be) => pe("workflows", "this-env")),
                onViewHistory: U[19] || (U[19] = (be) => pe("history", "this-env")),
                onViewDebug: U[20] || (U[20] = (be) => pe("debug-env", "this-env")),
                onViewNodes: U[21] || (U[21] = (be) => pe("nodes", "this-env")),
                onRepairMissingModels: qt,
                onRepairEnvironment: ys,
                onStartSetup: U[22] || (U[22] = (be) => z.value = !0),
                onViewEnvironments: U[23] || (U[23] = (be) => pe("environments", "all-envs")),
                onCreateEnvironment: ro
              }, null, 8, ["status", "setup-state"])) : X.value === "workflows" ? (s(), R(mm, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: D,
                onRefresh: Te
              }, null, 512)) : X.value === "models-env" ? (s(), R(Km, {
                key: 2,
                onNavigate: ze
              })) : X.value === "branches" ? (s(), R(al, {
                key: 3,
                branches: K.value,
                current: ((Pe = x.value) == null ? void 0 : Pe.branch) || null,
                onSwitch: H,
                onCreate: S,
                onDelete: F
              }, null, 8, ["branches", "current"])) : X.value === "history" ? (s(), R(pl, {
                key: 4,
                commits: T.value,
                onSelect: ue,
                onCheckout: j
              }, null, 8, ["commits"])) : X.value === "nodes" ? (s(), R(Gv, {
                key: 5,
                "version-mismatches": ((yt = (je = x.value) == null ? void 0 : je.comparison) == null ? void 0 : yt.version_mismatches) || [],
                onOpenNodeManager: dt,
                onRepairEnvironment: ys,
                onToast: ct
              }, null, 8, ["version-mismatches"])) : X.value === "debug-env" ? (s(), R(Qp, { key: 6 })) : X.value === "environments" ? (s(), R(t1, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: P,
                onSwitch: nt,
                onCreated: to,
                onDelete: so
              }, null, 512)) : X.value === "model-index" ? (s(), R(fv, {
                key: 8,
                onRefresh: Te
              })) : X.value === "settings" ? (s(), R(Kp, { key: 9 })) : X.value === "debug-workspace" ? (s(), R(Yp, { key: 10 })) : X.value === "export" ? (s(), R(z1, { key: 11 })) : X.value === "import" ? (s(), R(S0, {
                key: 12,
                onImportCompleteSwitch: lo
              })) : X.value === "remotes" ? (s(), R(Ip, {
                key: 13,
                onToast: ct
              })) : d("", !0)
            ], 64))
          ])
        ]),
        de.value ? (s(), R(G0, {
          key: 0,
          commit: de.value,
          onClose: U[24] || (U[24] = (be) => de.value = null),
          onCheckout: j,
          onCreateBranch: Q
        }, null, 8, ["commit"])) : d("", !0),
        Se.value ? (s(), R(Bs, {
          key: 1,
          title: Se.value.title,
          message: Se.value.message,
          details: Se.value.details,
          warning: Se.value.warning,
          confirmLabel: Se.value.confirmLabel,
          cancelLabel: Se.value.cancelLabel,
          secondaryLabel: Se.value.secondaryLabel,
          secondaryAction: Se.value.secondaryAction,
          destructive: Se.value.destructive,
          onConfirm: Se.value.onConfirm,
          onCancel: U[25] || (U[25] = (be) => Se.value = null),
          onSecondary: Se.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        k(Vw, {
          show: re.value,
          "from-environment": ((Pt = W.value) == null ? void 0 : Pt.name) || "unknown",
          "to-environment": ye.value,
          onConfirm: xt,
          onClose: Ze
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Qe.value && x.value ? (s(), R(qs, {
          key: 2,
          status: x.value,
          "as-modal": !0,
          onClose: U[26] || (U[26] = (be) => Qe.value = !1),
          onCommitted: It
        }, null, 8, ["status"])) : d("", !0),
        Ye.value && x.value ? (s(), R(rk, {
          key: 3,
          show: Ye.value,
          "mismatch-details": {
            missing_nodes: x.value.comparison.missing_nodes,
            extra_nodes: x.value.comparison.extra_nodes
          },
          onConfirm: Ht,
          onClose: U[27] || (U[27] = (be) => Ye.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : d("", !0),
        k(Zw, {
          show: Z.value,
          state: Me.value.state,
          progress: Me.value.progress,
          message: Me.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        J.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: U[29] || (U[29] = Le((be) => J.value = !1, ["self"]))
        }, [
          e("div", Rb, [
            e("div", Lb, [
              U[42] || (U[42] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: U[28] || (U[28] = (be) => J.value = !1)
              }, [...U[41] || (U[41] = [
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
            e("div", zb, [
              U[43] || (U[43] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", Pb, [
                (s(!0), o(V, null, oe(A.value, (be) => (s(), o("div", {
                  key: be.name,
                  class: me(["env-item", { current: be.is_current }])
                }, [
                  e("div", Db, [
                    e("div", Nb, [
                      e("span", Ub, a(be.is_current ? "●" : "○"), 1),
                      e("span", Ob, a(be.name), 1),
                      be.current_branch ? (s(), o("span", Bb, "(" + a(be.current_branch) + ")", 1)) : d("", !0),
                      be.is_current ? (s(), o("span", Fb, "CURRENT")) : d("", !0)
                    ]),
                    e("div", Ab, a(be.workflow_count) + " workflows • " + a(be.node_count) + " nodes ", 1)
                  ]),
                  be.is_current ? d("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Z_) => nt(be.name)
                  }, " SWITCH ", 8, Vb))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        z.value ? (s(), R(mb, {
          key: 5,
          "default-path": ((ks = E.value) == null ? void 0 : ks.default_path) || "~/comfygit",
          "detected-models-dir": ((bs = E.value) == null ? void 0 : bs.detected_models_dir) || null,
          "initial-step": O.value,
          "existing-environments": ((_s = E.value) == null ? void 0 : _s.environments) || [],
          "cli-installed": (($s = E.value) == null ? void 0 : $s.cli_installed) ?? !0,
          "setup-state": ((Cs = E.value) == null ? void 0 : Cs.state) || "no_workspace",
          "workspace-path": ((xs = E.value) == null ? void 0 : xs.workspace_path) || null,
          onComplete: oo,
          onClose: no,
          onSwitchEnvironment: ao,
          onEnvironmentCreatedNoSwitch: io
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : d("", !0),
        e("div", Wb, [
          k(vo, { name: "toast" }, {
            default: i(() => [
              (s(!0), o(V, null, oe(Ge.value, (be) => (s(), o("div", {
                key: be.id,
                class: me(["toast", be.type])
              }, [
                e("span", Gb, a(be.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Hb = /* @__PURE__ */ te(jb, [["__scopeId", "data-v-eebb600a"]]), qb = { class: "item-header" }, Kb = { class: "item-info" }, Jb = { class: "filename" }, Yb = { class: "metadata" }, Xb = { class: "size" }, Qb = {
  key: 0,
  class: "type"
}, Zb = { class: "item-actions" }, e_ = {
  key: 0,
  class: "progress-section"
}, t_ = { class: "progress-bar" }, s_ = { class: "progress-stats" }, o_ = { class: "downloaded" }, n_ = { class: "speed" }, a_ = {
  key: 0,
  class: "eta"
}, l_ = {
  key: 1,
  class: "status-msg paused"
}, i_ = {
  key: 2,
  class: "status-msg queued"
}, r_ = {
  key: 3,
  class: "status-msg completed"
}, d_ = {
  key: 4,
  class: "status-msg failed"
}, c_ = {
  key: 0,
  class: "retries"
}, u_ = /* @__PURE__ */ ee({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: c }) {
    const n = c;
    function l(u) {
      if (u === 0) return "?";
      const m = u / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(u / (1024 * 1024)).toFixed(1)} MB`;
    }
    function f(u) {
      return u === 0 ? "-" : `${(u / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function g(u) {
      if (u < 60) return `${Math.round(u)}s`;
      const m = Math.floor(u / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (u, m) => (s(), o("div", {
      class: me(["download-item", `status-${t.item.status}`])
    }, [
      e("div", qb, [
        e("div", Kb, [
          e("div", Jb, a(t.item.filename), 1),
          e("div", Yb, [
            e("span", Xb, a(l(t.item.size)), 1),
            t.item.type ? (s(), o("span", Qb, a(t.item.type), 1)) : d("", !0)
          ])
        ]),
        e("div", Zb, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: m[0] || (m[0] = (r) => n("cancel")),
            title: "Cancel"
          }, " × ")) : d("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: m[1] || (m[1] = (r) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : d("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: m[2] || (m[2] = (r) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : d("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: m[3] || (m[3] = (r) => n("remove")),
            title: "Remove"
          }, " × ")) : d("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", e_, [
        e("div", t_, [
          e("div", {
            class: "progress-fill",
            style: wt({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", s_, [
          e("span", o_, a(l(t.item.downloaded)) + " / " + a(l(t.item.size)), 1),
          e("span", n_, a(f(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", a_, a(g(t.item.eta)), 1)) : d("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", l_, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", i_, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", r_, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", d_, [
        p(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", c_, "(" + a(t.item.retries) + " retries)", 1)) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ut = /* @__PURE__ */ te(u_, [["__scopeId", "data-v-2110df65"]]), m_ = { class: "queue-title" }, v_ = { class: "count" }, f_ = { class: "queue-actions" }, g_ = { class: "action-label" }, p_ = {
  key: 0,
  class: "overall-progress"
}, h_ = { class: "progress-bar" }, y_ = {
  key: 0,
  class: "current-mini"
}, w_ = { class: "filename" }, k_ = { class: "speed" }, b_ = {
  key: 1,
  class: "queue-content"
}, __ = {
  key: 0,
  class: "section"
}, $_ = {
  key: 1,
  class: "section"
}, C_ = { class: "section-header" }, x_ = { class: "section-label paused" }, S_ = { class: "items-list" }, I_ = {
  key: 2,
  class: "section"
}, E_ = { class: "section-header" }, M_ = { class: "section-label" }, T_ = { class: "items-list" }, R_ = {
  key: 3,
  class: "section"
}, L_ = { class: "section-header" }, z_ = { class: "section-label" }, P_ = { class: "items-list" }, D_ = {
  key: 4,
  class: "section"
}, N_ = { class: "section-header" }, U_ = { class: "section-label failed" }, O_ = { class: "items-list" }, B_ = /* @__PURE__ */ ee({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: n,
      queuedItems: l,
      completedItems: f,
      failedItems: g,
      pausedItems: u,
      hasItems: m,
      activeCount: r,
      cancelDownload: v,
      retryDownload: h,
      resumeDownload: y,
      resumeAllPaused: b,
      removeItem: w,
      clearCompleted: L
    } = Gt(), M = _(!1);
    let $ = null;
    $t(
      () => ({
        active: r.value,
        failed: g.value.length,
        paused: u.value.length,
        completed: f.value.length
      }),
      (T, K) => {
        $ && (clearTimeout($), $ = null);
        const A = T.active === 0 && T.failed === 0 && T.paused === 0 && T.completed > 0, W = K && (K.active > 0 || K.paused > 0);
        A && W && ($ = setTimeout(() => {
          L(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = N(() => {
      var A;
      if (c.items.length === 0) return 0;
      const T = f.value.length, K = ((A = n.value) == null ? void 0 : A.progress) || 0;
      return Math.round((T + K / 100) / c.items.length * 100);
    });
    function B(T) {
      v(T);
    }
    function x(T) {
      return T === 0 ? "" : `${(T / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (T, K) => (s(), R(We, { to: "body" }, [
      _e(m) ? (s(), o("div", {
        key: 0,
        class: me(["model-download-queue", { minimized: !M.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: K[0] || (K[0] = (A) => M.value = !M.value)
        }, [
          e("div", m_, [
            K[4] || (K[4] = e("span", { class: "icon" }, "↓", -1)),
            K[5] || (K[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", v_, "(" + a(_e(r)) + "/" + a(_e(c).items.length) + ")", 1)
          ]),
          e("div", f_, [
            e("span", g_, a(M.value ? "minimize" : "expand"), 1)
          ])
        ]),
        M.value ? (s(), o("div", b_, [
          _e(n) ? (s(), o("div", __, [
            K[6] || (K[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            k(Ut, {
              item: _e(n),
              onCancel: K[1] || (K[1] = (A) => B(_e(n).id))
            }, null, 8, ["item"])
          ])) : d("", !0),
          _e(u).length > 0 ? (s(), o("div", $_, [
            e("div", C_, [
              e("span", x_, "Paused (" + a(_e(u).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: K[2] || (K[2] = //@ts-ignore
                (...A) => _e(b) && _e(b)(...A))
              }, "Resume All")
            ]),
            e("div", S_, [
              (s(!0), o(V, null, oe(_e(u), (A) => (s(), R(Ut, {
                key: A.id,
                item: A,
                onResume: (W) => _e(y)(A.id),
                onRemove: (W) => _e(w)(A.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          _e(l).length > 0 ? (s(), o("div", I_, [
            e("div", E_, [
              e("span", M_, "Queued (" + a(_e(l).length) + ")", 1)
            ]),
            e("div", T_, [
              (s(!0), o(V, null, oe(_e(l), (A) => (s(), R(Ut, {
                key: A.id,
                item: A,
                onCancel: (W) => B(A.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : d("", !0),
          _e(f).length > 0 ? (s(), o("div", R_, [
            e("div", L_, [
              e("span", z_, "Completed (" + a(_e(f).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: K[3] || (K[3] = //@ts-ignore
                (...A) => _e(L) && _e(L)(...A))
              }, "Clear")
            ]),
            e("div", P_, [
              (s(!0), o(V, null, oe(_e(f).slice(0, 3), (A) => (s(), R(Ut, {
                key: A.id,
                item: A,
                onRemove: (W) => _e(w)(A.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          _e(g).length > 0 ? (s(), o("div", D_, [
            e("div", N_, [
              e("span", U_, "Failed (" + a(_e(g).length) + ")", 1)
            ]),
            e("div", O_, [
              (s(!0), o(V, null, oe(_e(g), (A) => (s(), R(Ut, {
                key: A.id,
                item: A,
                onRetry: (W) => _e(h)(A.id),
                onRemove: (W) => _e(w)(A.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : d("", !0)
        ])) : (s(), o("div", p_, [
          e("div", h_, [
            e("div", {
              class: "progress-fill",
              style: wt({ width: `${C.value}%` })
            }, null, 4)
          ]),
          _e(n) ? (s(), o("div", y_, [
            e("span", w_, a(_e(n).filename), 1),
            e("span", k_, a(x(_e(n).speed)), 1)
          ])) : d("", !0)
        ]))
      ], 2)) : d("", !0)
    ]));
  }
}), F_ = /* @__PURE__ */ te(B_, [["__scopeId", "data-v-60751cfa"]]), A_ = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', V_ = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', W_ = {
  comfy: A_,
  phosphor: V_
}, gs = "comfy", Ys = "comfygit-theme";
let Ct = null, Xs = gs;
function G_() {
  try {
    const t = localStorage.getItem(Ys);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return gs;
}
function Qs(t = gs) {
  Ct && Ct.remove(), Ct = document.createElement("style"), Ct.id = "comfygit-theme-styles", Ct.setAttribute("data-theme", t), Ct.textContent = W_[t], document.head.appendChild(Ct), document.body.setAttribute("data-comfygit-theme", t), Xs = t;
  try {
    localStorage.setItem(Ys, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function j_() {
  return Xs;
}
function H_(t) {
  Qs(t);
}
function q_(t) {
  var g;
  const { ui_id: c, state: n } = t || {}, l = (n == null ? void 0 : n.history) || {};
  if (!c)
    return null;
  const f = l[c];
  return f && f.result === "error" && ((g = f.status) == null ? void 0 : g.status_str) === "error" ? (f.status.messages || [])[0] || "Unknown error" : null;
}
const ps = document.createElement("link");
ps.rel = "stylesheet";
ps.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(ps);
const K_ = G_();
Qs(K_);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), H_(t);
  },
  getTheme: () => {
    const t = j_();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let lt = null, Xe = null, At = null, Ot = null, Ts = null;
const Lt = _(null);
let hs = "managed", Zs = !1;
async function Yt() {
  var t;
  if (!((t = _t) != null && t.api)) return null;
  try {
    const c = await _t.api.fetchApi("/v2/comfygit/status");
    c.ok && (Lt.value = await c.json());
  } catch {
  }
}
async function is() {
  var t;
  if ((t = _t) != null && t.api)
    try {
      const c = await _t.api.fetchApi("/v2/setup/status");
      if (c.ok) {
        const n = await c.json();
        hs = n.state, Zs = n.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function rs() {
  var c;
  if (hs === "managed" || !Zs) return;
  const t = document.querySelectorAll("button.comfyui-button");
  for (const n of t)
    if (((c = n.textContent) == null ? void 0 : c.trim()) === "Manager" && !n.querySelector("svg, i, img")) {
      n.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function J_() {
  if (!Lt.value) return !1;
  const t = Lt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Lt.value.has_changes;
}
function Rs(t) {
  lt && lt.remove(), lt = document.createElement("div"), lt.className = "comfygit-panel-overlay";
  const c = document.createElement("div");
  c.className = "comfygit-panel-container", lt.appendChild(c), lt.addEventListener("click", (f) => {
    f.target === lt && as();
  });
  const n = (f) => {
    f.key === "Escape" && (as(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), us({
    render: () => ms(Hb, {
      initialView: t,
      onClose: as,
      onStatusUpdate: async (f) => {
        Lt.value = f, Vt(), await is(), ds(), rs();
      }
    })
  }).mount(c), document.body.appendChild(lt);
}
function as() {
  lt && (lt.remove(), lt = null);
}
function Y_(t) {
  Bt(), Xe = document.createElement("div"), Xe.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  Xe.style.position = "fixed", Xe.style.top = `${c.bottom + 8}px`, Xe.style.right = `${window.innerWidth - c.right}px`, Xe.style.zIndex = "10001";
  const n = (f) => {
    Xe && !Xe.contains(f.target) && f.target !== t && (Bt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const l = (f) => {
    f.key === "Escape" && (Bt(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), At = us({
    render: () => ms(qs, {
      status: Lt.value,
      onClose: Bt,
      onCommitted: (f) => {
        Bt(), X_(f.success, f.message), Yt().then(Vt);
      }
    })
  }), At.mount(Xe), document.body.appendChild(Xe);
}
function Bt() {
  At && (At.unmount(), At = null), Xe && (Xe.remove(), Xe = null);
}
function X_(t, c) {
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
  const f = document.createElement("span");
  f.textContent = t ? "✓" : "✕", f.style.cssText = `
    color: ${l};
    font-weight: bold;
    font-size: 14px;
  `, n.appendChild(f);
  const g = document.createElement("span");
  g.textContent = c, n.appendChild(g), document.body.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", n.style.transition = "opacity 0.2s ease", setTimeout(() => n.remove(), 200);
  }, 3e3);
}
function Q_() {
  Ot || (Ot = document.createElement("div"), Ot.className = "comfygit-download-queue-root", Ts = us({
    render: () => ms(F_)
  }), Ts.mount(Ot), document.body.appendChild(Ot), console.log("[ComfyGit] Model download queue mounted"));
}
let et = null;
function Vt() {
  if (!et) return;
  const t = et.querySelector(".commit-indicator");
  t && (t.style.display = J_() ? "block" : "none");
}
function ds() {
  if (!et) return;
  const t = hs !== "managed";
  et.disabled = t, et.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const eo = document.createElement("style");
eo.textContent = `
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
document.head.appendChild(eo);
_t.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var f, g;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = Rs, et = document.createElement("button"), et.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", et.innerHTML = 'Commit <span class="commit-indicator"></span>', et.title = "Quick Commit", et.onclick = () => Y_(et), t.appendChild(c), t.appendChild(et), (g = (f = _t.menu) == null ? void 0 : f.settingsGroup) != null && g.element && (_t.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), Q_();
    const { loadPendingDownloads: n } = Gt();
    n(), await Promise.all([Yt(), is()]), Vt(), ds(), rs(), setTimeout(rs, 100), setInterval(async () => {
      await Promise.all([Yt(), is()]), Vt(), ds();
    }, 3e4);
    const l = _t.api;
    if (l) {
      let u = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((h) => {
          (h.startsWith("workflow:") || h.startsWith("Comfy.OpenWorkflowsPaths:") || h.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(h);
        }), window.location.reload();
      }, m = function() {
        const h = document.createElement("div");
        h.style.cssText = `
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
        const y = document.createElement("span");
        y.textContent = "Workflows updated - refresh required", h.appendChild(y);
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
        `, b.onmouseover = () => b.style.background = "var(--comfy-input-bg)", b.onmouseout = () => b.style.background = "var(--comfy-menu-bg)", b.onclick = () => u(), h.appendChild(b);
        const w = document.createElement("button");
        w.textContent = "×", w.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, w.onmouseover = () => w.style.opacity = "1", w.onmouseout = () => w.style.opacity = "0.6", w.onclick = () => h.remove(), h.appendChild(w), document.body.appendChild(h), console.log("[ComfyGit] Refresh notification displayed");
      }, r = function(h) {
        const y = document.getElementById("comfygit-error-toast");
        y && y.remove();
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
        const w = document.createElement("span");
        w.textContent = "⚠️", w.style.fontSize = "20px", b.appendChild(w);
        const L = document.createElement("div");
        L.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const M = document.createElement("div");
        M.textContent = "Node installation failed", M.style.cssText = "font-weight: 600; color: #e53935;", L.appendChild(M);
        const $ = document.createElement("div");
        $.textContent = "Dependency conflict detected", $.style.cssText = "font-size: 12px; opacity: 0.8;", L.appendChild($), b.appendChild(L);
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
          b.remove(), Rs("debug-env");
        }, b.appendChild(C);
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
        `, B.onmouseover = () => B.style.opacity = "1", B.onmouseout = () => B.style.opacity = "0.6", B.onclick = () => b.remove(), b.appendChild(B), document.body.appendChild(b), console.log("[ComfyGit] Manager error toast displayed:", h), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && b.remove();
        }, 1e4);
      };
      l.addEventListener("comfygit:workflow-changed", async (h) => {
        const { change_type: y, workflow_name: b } = h.detail;
        console.log(`[ComfyGit] Workflow ${y}: ${b}`), await Yt(), Vt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      l.addEventListener("status", async (h) => {
        const y = h.detail != null;
        y && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), u()) : m()), v = y;
      }), console.log("[ComfyGit] Refresh notification system initialized"), l.addEventListener("cm-task-completed", (h) => {
        const y = q_(h.detail);
        y && r(y);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
