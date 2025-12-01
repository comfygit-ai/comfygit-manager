import { app as bt } from "../../scripts/app.js";
import { defineComponent as Q, createElementBlock as o, openBlock as s, createCommentVNode as d, createElementVNode as e, renderSlot as Se, createBlock as I, resolveDynamicComponent as cs, normalizeClass as me, withCtx as l, toDisplayString as a, createVNode as b, createTextVNode as h, computed as D, Fragment as V, renderList as te, normalizeStyle as yt, ref as $, onMounted as Oe, watch as _t, Teleport as We, withModifiers as Le, Transition as ro, createSlots as Wt, withKeys as ht, reactive as ts, onUnmounted as zs, readonly as co, unref as xe, withDirectives as Be, vModelText as Tt, vModelRadio as Kt, vModelCheckbox as Xt, nextTick as uo, vModelSelect as Rt, createStaticVNode as mo, TransitionGroup as vo, createApp as us, h as ms } from "vue";
const fo = { class: "panel-layout" }, go = {
  key: 0,
  class: "panel-layout-header"
}, po = {
  key: 1,
  class: "panel-layout-search"
}, ho = { class: "panel-layout-content" }, yo = {
  key: 2,
  class: "panel-layout-footer"
}, wo = /* @__PURE__ */ Q({
  __name: "PanelLayout",
  setup(t) {
    return (c, n) => (s(), o("div", fo, [
      c.$slots.header ? (s(), o("div", go, [
        Se(c.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      c.$slots.search ? (s(), o("div", po, [
        Se(c.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      e("div", ho, [
        Se(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (s(), o("div", yo, [
        Se(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Z = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [i, p] of c)
    n[i] = p;
  return n;
}, Ke = /* @__PURE__ */ Z(wo, [["__scopeId", "data-v-21565df9"]]), ko = {
  key: 0,
  class: "panel-title-prefix"
}, bo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, _o = /* @__PURE__ */ Q({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, n) => (s(), I(cs(`h${t.level}`), {
      class: me(["panel-title", t.variant])
    }, {
      default: l(() => [
        t.showPrefix ? (s(), o("span", ko, a(t.prefix), 1)) : (s(), o("span", bo)),
        Se(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), $o = /* @__PURE__ */ Z(_o, [["__scopeId", "data-v-c3875efc"]]), Co = ["title"], xo = ["width", "height"], So = /* @__PURE__ */ Q({
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
      ])], 8, xo))
    ], 8, Co));
  }
}), Ls = /* @__PURE__ */ Z(So, [["__scopeId", "data-v-6fc7f16d"]]), Io = { class: "header-left" }, Eo = {
  key: 0,
  class: "header-actions"
}, Mo = /* @__PURE__ */ Q({
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
        b($o, { "show-prefix": t.showPrefix }, {
          default: l(() => [
            h(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), I(Ls, {
          key: 0,
          onClick: n[0] || (n[0] = (i) => c.$emit("info-click"))
        })) : d("", !0)
      ]),
      c.$slots.actions ? (s(), o("div", Eo, [
        Se(c.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Je = /* @__PURE__ */ Z(Mo, [["__scopeId", "data-v-55a62cd6"]]), To = {
  key: 0,
  class: "section-title-count"
}, Ro = {
  key: 1,
  class: "section-title-icon"
}, zo = /* @__PURE__ */ Q({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (s(), I(cs(`h${t.level}`), {
      class: me(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, {
      default: l(() => [
        Se(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", To, "(" + a(t.count) + ")", 1)) : d("", !0),
        t.clickable ? (s(), o("span", Ro, a(t.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), st = /* @__PURE__ */ Z(zo, [["__scopeId", "data-v-559361eb"]]), Lo = { class: "status-grid" }, Po = { class: "status-grid__columns" }, Do = { class: "status-grid__column" }, No = { class: "status-grid__title" }, Uo = { class: "status-grid__column status-grid__column--right" }, Oo = { class: "status-grid__title" }, Bo = {
  key: 0,
  class: "status-grid__footer"
}, Fo = /* @__PURE__ */ Q({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", Lo, [
      e("div", Po, [
        e("div", Do, [
          e("h4", No, a(t.leftTitle), 1),
          Se(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Uo, [
          e("h4", Oo, a(t.rightTitle), 1),
          Se(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (s(), o("div", Bo, [
        Se(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Ao = /* @__PURE__ */ Z(Fo, [["__scopeId", "data-v-73b7ba3f"]]), Vo = {
  key: 0,
  class: "status-item__icon"
}, Wo = {
  key: 1,
  class: "status-item__count"
}, Go = { class: "status-item__label" }, jo = /* @__PURE__ */ Q({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const c = t, n = D(() => `status-item--${c.variant}`);
    return (i, p) => (s(), o("div", {
      class: me(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", Vo, a(t.icon), 1)) : d("", !0),
      t.count !== void 0 ? (s(), o("span", Wo, a(t.count), 1)) : d("", !0),
      e("span", Go, a(t.label), 1)
    ], 2));
  }
}), ct = /* @__PURE__ */ Z(jo, [["__scopeId", "data-v-6f929183"]]), qo = { class: "issue-card__header" }, Ho = { class: "issue-card__icon" }, Ko = { class: "issue-card__title" }, Jo = {
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
}, Zo = /* @__PURE__ */ Q({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const c = t, n = D(() => `issue-card--${c.severity}`);
    return (i, p) => (s(), o("div", {
      class: me(["issue-card", n.value])
    }, [
      e("div", qo, [
        e("span", Ho, a(t.icon), 1),
        e("h4", Ko, a(t.title), 1)
      ]),
      i.$slots.default || t.description ? (s(), o("div", Jo, [
        t.description ? (s(), o("p", Yo, a(t.description), 1)) : d("", !0),
        Se(i.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      t.items && t.items.length ? (s(), o("div", Xo, [
        (s(!0), o(V, null, te(t.items, (g, u) => (s(), o("div", {
          key: u,
          class: "issue-card__item"
        }, [
          p[0] || (p[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(g), 1)
        ]))), 128))
      ])) : d("", !0),
      i.$slots.actions ? (s(), o("div", Qo, [
        Se(i.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), at = /* @__PURE__ */ Z(Zo, [["__scopeId", "data-v-df6aa348"]]), en = ["type", "disabled"], tn = {
  key: 0,
  class: "spinner"
}, sn = /* @__PURE__ */ Q({
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
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", tn)) : d("", !0),
      t.loading ? d("", !0) : Se(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, en));
  }
}), se = /* @__PURE__ */ Z(sn, [["__scopeId", "data-v-772abe47"]]), on = { class: "empty-state" }, nn = {
  key: 0,
  class: "empty-icon"
}, an = { class: "empty-message" }, ln = /* @__PURE__ */ Q({
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
      t.actionLabel ? (s(), I(se, {
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
}), rt = /* @__PURE__ */ Z(ln, [["__scopeId", "data-v-4466284f"]]), rn = /* @__PURE__ */ Q({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: me(["detail-label"]),
      style: yt({ minWidth: t.minWidth })
    }, [
      Se(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Jt = /* @__PURE__ */ Z(rn, [["__scopeId", "data-v-75e9eeb8"]]), dn = /* @__PURE__ */ Q({
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
      Se(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ls = /* @__PURE__ */ Z(dn, [["__scopeId", "data-v-2f186e4c"]]), cn = { class: "detail-row" }, un = /* @__PURE__ */ Q({
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
      b(Jt, { "min-width": t.labelMinWidth }, {
        default: l(() => [
          h(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), I(ls, {
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
}), Ue = /* @__PURE__ */ Z(un, [["__scopeId", "data-v-ef15664a"]]), mn = { class: "modal-header" }, vn = { class: "modal-body" }, fn = { class: "status-section" }, gn = {
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
}, Tn = { class: "workflow-group-header" }, Rn = { class: "workflow-group-title" }, zn = { class: "workflow-list" }, Ln = { class: "workflow-name" }, Pn = {
  key: 3,
  class: "workflow-group"
}, Dn = { class: "workflow-group-header" }, Nn = { class: "workflow-group-title" }, Un = { class: "workflow-list" }, On = { class: "workflow-name" }, Bn = {
  key: 4,
  class: "workflow-group"
}, Fn = { class: "workflow-group-header" }, An = { class: "workflow-group-title" }, Vn = { class: "workflow-list" }, Wn = { class: "workflow-name" }, Gn = {
  key: 5,
  class: "workflow-group"
}, jn = { class: "workflow-group-title" }, qn = { class: "expand-icon" }, Hn = {
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
}, za = {
  key: 4,
  class: "status-section"
}, La = { class: "warning-box" }, Pa = {
  key: 5,
  class: "empty-state-inline"
}, Da = { class: "modal-actions" }, Na = /* @__PURE__ */ Q({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(t) {
    const c = t, n = $(!1);
    Oe(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), _t(() => c.show, (_, k) => {
      console.log("StatusDetailModal show prop changed from", k, "to", _);
    }, { immediate: !0 });
    const i = D(() => {
      var _, k, R;
      return ((R = (k = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : k.analyzed) == null ? void 0 : R.filter(
        (F) => F.status === "broken" && F.sync_state === "synced"
      )) || [];
    }), p = D(() => {
      var _, k, R;
      return ((R = (k = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : k.analyzed) == null ? void 0 : R.filter(
        (F) => F.status === "broken" && F.sync_state !== "synced"
      )) || [];
    }), g = D(() => {
      var _, k, R;
      return ((R = (k = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : k.synced) == null ? void 0 : R.filter((F) => {
        var C, L, M;
        const f = (M = (L = (C = c.status) == null ? void 0 : C.workflows) == null ? void 0 : L.analyzed) == null ? void 0 : M.find((x) => x.name === F);
        return !f || f.status !== "broken";
      })) || [];
    }), u = D(() => {
      var _, k, R, F, f;
      return (_ = c.status) != null && _.workflows ? (((k = c.status.workflows.new) == null ? void 0 : k.length) ?? 0) > 0 || (((R = c.status.workflows.modified) == null ? void 0 : R.length) ?? 0) > 0 || (((F = c.status.workflows.deleted) == null ? void 0 : F.length) ?? 0) > 0 || (((f = c.status.workflows.synced) == null ? void 0 : f.length) ?? 0) > 0 : !1;
    }), v = D(() => {
      var k, R, F;
      const _ = (k = c.status) == null ? void 0 : k.git_changes;
      return _ ? (((R = _.nodes_added) == null ? void 0 : R.length) ?? 0) > 0 || (((F = _.nodes_removed) == null ? void 0 : F.length) ?? 0) > 0 || _.workflow_changes || _.has_other_changes : !1;
    }), r = D(() => {
      var _, k, R, F, f, C;
      return !u.value && !v.value && ((k = (_ = c.status) == null ? void 0 : _.comparison) == null ? void 0 : k.is_synced) && (((R = c.status) == null ? void 0 : R.missing_models_count) ?? 0) === 0 && (((C = (f = (F = c.status) == null ? void 0 : F.comparison) == null ? void 0 : f.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
    }), m = D(() => {
      var k, R;
      const _ = (R = (k = c.status) == null ? void 0 : k.git_changes) == null ? void 0 : R.workflow_changes;
      return _ ? typeof _ == "number" ? _ : Object.keys(_).length : 0;
    });
    function y(_) {
      return typeof _ == "string" ? _ : _.name;
    }
    function w(_) {
      return typeof _ == "object" && _.is_development === !0;
    }
    return (_, k) => {
      var R, F, f, C, L, M, x, j, B, G, T, E, N, le, ee, Y, re, H, U, P, S, oe;
      return s(), I(We, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: k[7] || (k[7] = (ne) => _.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: k[6] || (k[6] = Le(() => {
            }, ["stop"]))
          }, [
            e("div", mn, [
              k[8] || (k[8] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: k[0] || (k[0] = (ne) => _.$emit("close"))
              }, "✕")
            ]),
            e("div", vn, [
              e("div", fn, [
                b(st, { level: "4" }, {
                  default: l(() => [...k[9] || (k[9] = [
                    h("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                b(Ue, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (s(), o("div", gn, [
                e("div", pn, [
                  b(st, { level: "4" }, {
                    default: l(() => [...k[10] || (k[10] = [
                      h("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: k[1] || (k[1] = (ne) => _.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (s(), o("div", hn, [
                  e("div", yn, [
                    k[11] || (k[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", wn, "BROKEN (COMMITTED) (" + a(i.value.length) + ")", 1)
                  ]),
                  e("div", kn, [
                    (s(!0), o(V, null, te(i.value, (ne) => (s(), o("div", {
                      key: ne.name,
                      class: "workflow-item"
                    }, [
                      e("span", bn, a(ne.name), 1),
                      e("span", _n, a(ne.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                p.value.length ? (s(), o("div", $n, [
                  e("div", Cn, [
                    k[12] || (k[12] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", xn, "BROKEN (UNCOMMITTED) (" + a(p.value.length) + ")", 1)
                  ]),
                  e("div", Sn, [
                    (s(!0), o(V, null, te(p.value, (ne) => (s(), o("div", {
                      key: ne.name,
                      class: "workflow-item"
                    }, [
                      e("span", In, a(ne.name), 1),
                      e("span", En, a(ne.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (F = (R = t.status.workflows) == null ? void 0 : R.new) != null && F.length ? (s(), o("div", Mn, [
                  e("div", Tn, [
                    k[13] || (k[13] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Rn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", zn, [
                    (s(!0), o(V, null, te(t.status.workflows.new, (ne) => (s(), o("div", {
                      key: ne,
                      class: "workflow-item"
                    }, [
                      e("span", Ln, a(ne), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (C = (f = t.status.workflows) == null ? void 0 : f.modified) != null && C.length ? (s(), o("div", Pn, [
                  e("div", Dn, [
                    k[14] || (k[14] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Nn, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Un, [
                    (s(!0), o(V, null, te(t.status.workflows.modified, (ne) => (s(), o("div", {
                      key: ne,
                      class: "workflow-item"
                    }, [
                      e("span", On, a(ne), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (M = (L = t.status.workflows) == null ? void 0 : L.deleted) != null && M.length ? (s(), o("div", Bn, [
                  e("div", Fn, [
                    k[15] || (k[15] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", An, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Vn, [
                    (s(!0), o(V, null, te(t.status.workflows.deleted, (ne) => (s(), o("div", {
                      key: ne,
                      class: "workflow-item"
                    }, [
                      e("span", Wn, a(ne), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                g.value.length ? (s(), o("div", Gn, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: k[2] || (k[2] = (ne) => n.value = !n.value)
                  }, [
                    k[16] || (k[16] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", jn, "SYNCED (" + a(g.value.length) + ")", 1),
                    e("span", qn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", Hn, [
                    (s(!0), o(V, null, te(g.value, (ne) => (s(), o("div", {
                      key: ne,
                      class: "workflow-item"
                    }, [
                      e("span", Kn, a(ne), 1)
                    ]))), 128))
                  ])) : d("", !0)
                ])) : d("", !0)
              ])) : d("", !0),
              v.value ? (s(), o("div", Jn, [
                b(st, { level: "4" }, {
                  default: l(() => [...k[17] || (k[17] = [
                    h("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (j = (x = t.status.git_changes) == null ? void 0 : x.nodes_added) != null && j.length ? (s(), o("div", Yn, [
                  e("div", Xn, [
                    k[18] || (k[18] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Qn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Zn, [
                    (s(!0), o(V, null, te(t.status.git_changes.nodes_added, (ne) => (s(), o("div", {
                      key: y(ne),
                      class: "change-item"
                    }, [
                      e("span", ea, a(y(ne)), 1),
                      w(ne) ? (s(), o("span", ta, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (G = (B = t.status.git_changes) == null ? void 0 : B.nodes_removed) != null && G.length ? (s(), o("div", sa, [
                  e("div", oa, [
                    k[19] || (k[19] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", na, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", aa, [
                    (s(!0), o(V, null, te(t.status.git_changes.nodes_removed, (ne) => (s(), o("div", {
                      key: y(ne),
                      class: "change-item"
                    }, [
                      e("span", la, a(y(ne)), 1),
                      w(ne) ? (s(), o("span", ia, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (T = t.status.git_changes) != null && T.workflow_changes ? (s(), o("div", ra, [
                  k[20] || (k[20] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", da, [
                    e("div", ca, [
                      e("span", ua, a(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : d("", !0),
                (E = t.status.git_changes) != null && E.has_other_changes ? (s(), o("div", ma, [...k[21] || (k[21] = [
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
              (N = t.status.comparison) != null && N.is_synced ? d("", !0) : (s(), o("div", va, [
                e("div", fa, [
                  b(st, { level: "4" }, {
                    default: l(() => [...k[22] || (k[22] = [
                      h("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: k[3] || (k[3] = (ne) => _.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                k[26] || (k[26] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (ee = (le = t.status.comparison) == null ? void 0 : le.missing_nodes) != null && ee.length ? (s(), o("div", ga, [
                  b(Ue, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", pa, [
                    (s(!0), o(V, null, te(t.status.comparison.missing_nodes.slice(0, 10), (ne) => (s(), o("div", {
                      key: ne,
                      class: "drift-list-item"
                    }, " - " + a(ne), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", ha, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (re = (Y = t.status.comparison) == null ? void 0 : Y.extra_nodes) != null && re.length ? (s(), o("div", ya, [
                  b(Ue, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", wa, [
                    (s(!0), o(V, null, te(t.status.comparison.extra_nodes.slice(0, 10), (ne) => (s(), o("div", {
                      key: ne,
                      class: "drift-list-item"
                    }, " - " + a(ne), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", ka, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (U = (H = t.status.comparison) == null ? void 0 : H.version_mismatches) != null && U.length ? (s(), o("div", ba, [
                  b(Ue, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  e("div", _a, [
                    (s(!0), o(V, null, te(t.status.comparison.version_mismatches.slice(0, 10), (ne) => (s(), o("div", {
                      key: ne.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      h(a(ne.name) + ": ", 1),
                      e("span", $a, a(ne.actual), 1),
                      k[23] || (k[23] = h(" → ", -1)),
                      e("span", Ca, a(ne.expected), 1)
                    ]))), 128)),
                    t.status.comparison.version_mismatches.length > 10 ? (s(), o("div", xa, " ... and " + a(t.status.comparison.version_mismatches.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                ((P = t.status.comparison) == null ? void 0 : P.packages_in_sync) === !1 ? (s(), o("div", Sa, [
                  b(Ue, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : d("", !0),
                e("div", Ia, [
                  b(se, {
                    variant: "warning",
                    loading: t.isRepairing,
                    onClick: k[4] || (k[4] = (ne) => _.$emit("repair"))
                  }, {
                    default: l(() => [...k[24] || (k[24] = [
                      h(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  k[25] || (k[25] = e("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (oe = (S = t.status.comparison) == null ? void 0 : S.disabled_nodes) != null && oe.length ? (s(), o("div", Ea, [
                b(st, { level: "4" }, {
                  default: l(() => [...k[27] || (k[27] = [
                    h("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Ma, [
                  k[28] || (k[28] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Ta, [
                  (s(!0), o(V, null, te(t.status.comparison.disabled_nodes.slice(0, 10), (ne) => (s(), o("div", {
                    key: ne,
                    class: "drift-list-item"
                  }, " • " + a(ne), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", Ra, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : d("", !0)
                ])
              ])) : d("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", za, [
                b(st, { level: "4" }, {
                  default: l(() => [...k[29] || (k[29] = [
                    h("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", La, [
                  k[30] || (k[30] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                k[31] || (k[31] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : d("", !0),
              r.value ? (s(), o("div", Pa, [...k[32] || (k[32] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : d("", !0)
            ]),
            e("div", Da, [
              b(se, {
                variant: "secondary",
                onClick: k[5] || (k[5] = (ne) => _.$emit("close"))
              }, {
                default: l(() => [...k[33] || (k[33] = [
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
}), Ua = /* @__PURE__ */ Z(Na, [["__scopeId", "data-v-e2b37122"]]), Oa = { class: "health-section-header" }, Ba = { class: "suggestions-content" }, Fa = { class: "suggestions-text" }, Aa = { style: { "margin-top": "var(--cg-space-3)" } }, Va = {
  key: 1,
  class: "no-issues-text"
}, Wa = /* @__PURE__ */ Q({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(t, { expose: c, emit: n }) {
    const i = t, p = $(!1), g = $(!1);
    function u() {
      p.value = !0;
    }
    function v() {
      p.value = !1, m("view-workflows");
    }
    function r() {
      p.value = !1, m("view-nodes");
    }
    const m = n, y = $(!1), w = $(!1);
    function _() {
      w.value = !0, m("repair-environment");
    }
    function k() {
      w.value = !1;
    }
    function R() {
      p.value = !1;
    }
    const F = D(() => {
      const H = i.status.workflows.analyzed || [], U = H.filter(
        (P) => P.unresolved_models_count > 0 || P.ambiguous_models_count > 0
      );
      return U.length === 0 && i.status.missing_models_count > 0 ? H.filter((P) => P.sync_state === "synced") : U;
    });
    function f() {
      const H = F.value;
      H.length !== 0 && (y.value = !0, m("repair-missing-models", H.map((U) => U.name)));
    }
    function C() {
      y.value = !1;
    }
    c({ resetRepairingState: C, resetRepairingEnvironmentState: k, closeDetailModal: R });
    const L = D(() => i.status.workflows.new.length > 0 || i.status.workflows.modified.length > 0 || i.status.workflows.deleted.length > 0), M = D(() => i.status.has_changes), x = D(() => {
      const H = i.status.git_changes;
      return H.nodes_added.length > 0 || H.nodes_removed.length > 0 || H.workflow_changes;
    }), j = D(() => i.status.has_changes || L.value), B = D(() => Object.keys(i.status.git_changes.workflow_changes_detail).length), G = D(() => i.status.git_changes.has_other_changes), T = D(() => {
      var H;
      return ((H = i.status.workflows.analyzed) == null ? void 0 : H.filter((U) => U.status === "broken")) || [];
    }), E = D(() => {
      var H;
      return ((H = i.status.workflows.analyzed) == null ? void 0 : H.filter(
        (U) => U.has_path_sync_issues && !U.has_issues
      )) || [];
    }), N = D(() => T.value.length > 0), le = D(() => N.value || E.value.length > 0 || i.status.missing_models_count > 0 || !i.status.comparison.is_synced || i.status.has_legacy_manager), ee = D(() => {
      const H = [];
      return i.status.workflows.new.length > 0 && H.push(`${i.status.workflows.new.length} new`), i.status.workflows.modified.length > 0 && H.push(`${i.status.workflows.modified.length} modified`), i.status.workflows.deleted.length > 0 && H.push(`${i.status.workflows.deleted.length} deleted`), H.length > 0 ? `${H.join(", ")} workflow${H.length === 1 && !H[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Y = D(() => {
      var P, S;
      const H = [], U = i.status.comparison;
      return (P = U.missing_nodes) != null && P.length && H.push(`${U.missing_nodes.length} missing node${U.missing_nodes.length === 1 ? "" : "s"}`), (S = U.extra_nodes) != null && S.length && H.push(`${U.extra_nodes.length} untracked node${U.extra_nodes.length === 1 ? "" : "s"}`), H.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${H.join(" and ")}.`;
    }), re = D(() => {
      var P, S;
      const H = [], U = i.status.comparison;
      return (P = U.extra_nodes) != null && P.length && (U.extra_nodes.slice(0, 3).forEach((oe) => {
        H.push(`Untracked: ${oe}`);
      }), U.extra_nodes.length > 3 && H.push(`...and ${U.extra_nodes.length - 3} more untracked`)), (S = U.missing_nodes) != null && S.length && (U.missing_nodes.slice(0, 3).forEach((oe) => {
        H.push(`Missing: ${oe}`);
      }), U.missing_nodes.length > 3 && H.push(`...and ${U.missing_nodes.length - 3} more missing`)), H;
    });
    return (H, U) => (s(), o(V, null, [
      b(Ke, null, {
        header: l(() => [
          b(Je, { title: "STATUS" })
        ]),
        content: l(() => [
          i.setupState === "no_workspace" ? (s(), I(at, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: l(() => [
              b(se, {
                variant: "primary",
                size: "sm",
                onClick: U[0] || (U[0] = (P) => H.$emit("start-setup"))
              }, {
                default: l(() => [...U[13] || (U[13] = [
                  h(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "unmanaged" ? (s(), I(at, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: l(() => [
              b(se, {
                variant: "primary",
                size: "sm",
                onClick: U[1] || (U[1] = (P) => H.$emit("view-environments"))
              }, {
                default: l(() => [...U[14] || (U[14] = [
                  h(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "empty_workspace" ? (s(), I(at, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: l(() => [
              b(se, {
                variant: "primary",
                size: "sm",
                onClick: U[2] || (U[2] = (P) => H.$emit("create-environment"))
              }, {
                default: l(() => [...U[15] || (U[15] = [
                  h(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: U[4] || (U[4] = (P) => g.value = !0),
            onMouseleave: U[5] || (U[5] = (P) => g.value = !1)
          }, [
            e("div", Oa, [
              b(st, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: l(() => [...U[16] || (U[16] = [
                  h(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              b(ro, { name: "fade" }, {
                default: l(() => [
                  g.value ? (s(), I(se, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: u
                  }, {
                    default: l(() => [...U[17] || (U[17] = [
                      h(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : d("", !0)
                ]),
                _: 1
              })
            ]),
            b(Ao, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Wt({
              left: l(() => [
                t.status.workflows.new.length ? (s(), I(ct, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.modified.length ? (s(), I(ct, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.deleted.length ? (s(), I(ct, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : d("", !0),
                b(ct, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: L.value
                }, null, 8, ["count", "separator"])
              ]),
              right: l(() => [
                t.status.git_changes.nodes_added.length ? (s(), I(ct, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), I(ct, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.workflow_changes ? (s(), I(ct, {
                  key: 2,
                  icon: "●",
                  count: B.value,
                  label: B.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : d("", !0),
                G.value ? (s(), I(ct, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : d("", !0),
                M.value && !x.value && !G.value ? (s(), I(ct, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : d("", !0),
                M.value ? d("", !0) : (s(), I(ct, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              j.value ? {
                name: "footer",
                fn: l(() => [
                  U[19] || (U[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Ba, [
                    e("span", Fa, a(ee.value), 1),
                    b(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: U[3] || (U[3] = (P) => H.$emit("commit-changes"))
                    }, {
                      default: l(() => [...U[18] || (U[18] = [
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
          t.status.is_detached_head ? (s(), I(at, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: l(() => [
              b(se, {
                variant: "primary",
                size: "sm",
                onClick: U[6] || (U[6] = (P) => H.$emit("create-branch"))
              }, {
                default: l(() => [...U[20] || (U[20] = [
                  h(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", Aa, [
            b(st, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: l(() => [...U[21] || (U[21] = [
                h(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            le.value ? (s(), o(V, { key: 0 }, [
              T.value.length > 0 ? (s(), I(at, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${T.value.length} workflow${T.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: T.value.map((P) => `${P.name} — ${P.issue_summary}`)
              }, {
                actions: l(() => [
                  b(se, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[7] || (U[7] = (P) => H.$emit("view-workflows"))
                  }, {
                    default: l(() => [...U[22] || (U[22] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              E.value.length > 0 ? (s(), I(at, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${E.value.length} workflow${E.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: E.value.map((P) => `${P.name} — ${P.models_needing_path_sync_count} model path${P.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: l(() => [
                  b(se, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[8] || (U[8] = (P) => H.$emit("view-workflows"))
                  }, {
                    default: l(() => [...U[23] || (U[23] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              t.status.missing_models_count > 0 && !N.value ? (s(), I(at, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: l(() => [
                  b(se, {
                    variant: "primary",
                    size: "sm",
                    disabled: y.value,
                    onClick: f
                  }, {
                    default: l(() => [
                      h(a(y.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  b(se, {
                    variant: "secondary",
                    size: "sm",
                    onClick: U[9] || (U[9] = (P) => H.$emit("view-workflows"))
                  }, {
                    default: l(() => [...U[24] || (U[24] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : d("", !0),
              t.status.comparison.is_synced ? d("", !0) : (s(), I(at, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: Y.value,
                items: re.value
              }, {
                actions: l(() => [
                  b(se, {
                    variant: "secondary",
                    size: "sm",
                    onClick: u
                  }, {
                    default: l(() => [...U[25] || (U[25] = [
                      h(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  b(se, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[10] || (U[10] = (P) => H.$emit("view-nodes"))
                  }, {
                    default: l(() => [...U[26] || (U[26] = [
                      h(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), I(at, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: l(() => [
                  b(se, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[11] || (U[11] = (P) => H.$emit("view-nodes"))
                  }, {
                    default: l(() => [...U[27] || (U[27] = [
                      h(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : d("", !0)
            ], 64)) : j.value ? (s(), o("span", Va, "No issues")) : (s(), I(rt, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      b(Ua, {
        show: p.value,
        status: t.status,
        "is-repairing": w.value,
        onClose: U[12] || (U[12] = (P) => p.value = !1),
        onNavigateWorkflows: v,
        onNavigateNodes: r,
        onRepair: _
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), Ga = /* @__PURE__ */ Z(Wa, [["__scopeId", "data-v-55fcd77f"]]), ja = ["type", "value", "placeholder", "disabled"], qa = /* @__PURE__ */ Q({
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
    const i = t, p = n, g = $(null);
    function u(v) {
      const r = v.target.value;
      p("update:modelValue", r);
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
      class: me(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: u,
      onKeyup: [
        r[0] || (r[0] = ht((m) => v.$emit("enter"), ["enter"])),
        r[1] || (r[1] = ht((m) => v.$emit("escape"), ["escape"]))
      ],
      onFocus: r[2] || (r[2] = (m) => v.$emit("focus")),
      onBlur: r[3] || (r[3] = (m) => v.$emit("blur"))
    }, null, 42, ja));
  }
}), Qt = /* @__PURE__ */ Z(qa, [["__scopeId", "data-v-0380d08f"]]), Ha = { class: "branch-create-form" }, Ka = { class: "form-actions" }, Ja = /* @__PURE__ */ Q({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, i = $(""), p = D(() => {
      const v = i.value.trim();
      return v.length > 0 && !v.startsWith("-") && !v.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(v);
    });
    function g() {
      p.value && (n("create", i.value.trim()), i.value = "");
    }
    function u() {
      i.value = "", n("cancel");
    }
    return (v, r) => (s(), o("div", Ha, [
      b(Qt, {
        modelValue: i.value,
        "onUpdate:modelValue": r[0] || (r[0] = (m) => i.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: g,
        onEscape: u
      }, null, 8, ["modelValue"]),
      e("div", Ka, [
        b(se, {
          variant: "primary",
          size: "sm",
          disabled: !p.value,
          onClick: g
        }, {
          default: l(() => [...r[1] || (r[1] = [
            h(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        b(se, {
          variant: "secondary",
          size: "sm",
          onClick: u
        }, {
          default: l(() => [...r[2] || (r[2] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Ya = /* @__PURE__ */ Z(Ja, [["__scopeId", "data-v-7c500394"]]), Xa = { class: "branch-list-item__indicator" }, Qa = { class: "branch-list-item__name" }, Za = {
  key: 0,
  class: "branch-list-item__actions"
}, el = {
  key: 0,
  class: "branch-list-item__current-label"
}, tl = /* @__PURE__ */ Q({
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
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, [
      e("span", Xa, a(t.isCurrent ? "●" : "○"), 1),
      e("span", Qa, a(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (s(), o("div", Za, [
        Se(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", el, " current ")) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), sl = /* @__PURE__ */ Z(tl, [["__scopeId", "data-v-c6581a24"]]), ol = {
  key: 2,
  class: "branch-list"
}, nl = /* @__PURE__ */ Q({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: c }) {
    const n = c, i = $(!1);
    function p(u) {
      n("create", u), g();
    }
    function g() {
      i.value = !1;
    }
    return (u, v) => (s(), I(Ke, null, {
      header: l(() => [
        b(Je, { title: "BRANCHES" }, {
          actions: l(() => [
            i.value ? d("", !0) : (s(), I(se, {
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
        i.value ? (s(), I(Ya, {
          key: 0,
          onCreate: p,
          onCancel: g
        })) : d("", !0),
        t.branches.length === 0 ? (s(), I(rt, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", ol, [
          (s(!0), o(V, null, te(t.branches, (r) => (s(), I(sl, {
            key: r.name,
            "branch-name": r.name,
            "is-current": r.is_current
          }, {
            actions: l(() => [
              r.is_current ? d("", !0) : (s(), I(se, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (m) => u.$emit("delete", r.name)
              }, {
                default: l(() => [...v[2] || (v[2] = [
                  h(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              r.is_current ? d("", !0) : (s(), I(se, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (m) => u.$emit("switch", r.name)
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
}), al = /* @__PURE__ */ Z(nl, [["__scopeId", "data-v-86784ddd"]]), ll = { class: "commit-list" }, il = /* @__PURE__ */ Q({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (s(), o("div", ll, [
      Se(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), rl = /* @__PURE__ */ Z(il, [["__scopeId", "data-v-8c5ee761"]]), dl = { class: "commit-hash" }, cl = /* @__PURE__ */ Q({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = D(() => c.hash.slice(0, c.length));
    return (i, p) => (s(), o("span", dl, a(n.value), 1));
  }
}), Ps = /* @__PURE__ */ Z(cl, [["__scopeId", "data-v-7c333cc6"]]), ul = { class: "commit-message" }, ml = { class: "commit-date" }, vl = /* @__PURE__ */ Q({
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
    function p() {
      n.clickable && i("click");
    }
    return (g, u) => (s(), o("div", {
      class: me(["commit-item", { clickable: t.clickable }]),
      onClick: p
    }, [
      b(Ps, { hash: t.hash }, null, 8, ["hash"]),
      e("span", ul, a(t.message), 1),
      e("span", ml, a(t.relativeDate), 1),
      g.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = Le(() => {
        }, ["stop"]))
      }, [
        Se(g.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), fl = /* @__PURE__ */ Z(vl, [["__scopeId", "data-v-dd7c621b"]]), gl = /* @__PURE__ */ Q({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (s(), I(Ke, null, {
      header: l(() => [
        b(Je, { title: "HISTORY" })
      ]),
      content: l(() => [
        t.commits.length === 0 ? (s(), I(rt, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), I(rl, { key: 1 }, {
          default: l(() => [
            (s(!0), o(V, null, te(t.commits, (i) => (s(), I(fl, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (p) => c.$emit("select", i)
            }, {
              actions: l(() => [
                b(se, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (p) => c.$emit("checkout", i),
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
}), pl = /* @__PURE__ */ Z(gl, [["__scopeId", "data-v-981c3c64"]]), D2 = ts({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const N2 = [
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
], U2 = {
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
], O2 = [
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
  const t = $(!1), c = $(null);
  async function n(q, ue) {
    var De;
    if (!((De = window.app) != null && De.api))
      throw new Error("ComfyUI API not available");
    const ye = await window.app.api.fetchApi(q, ue);
    if (!ye.ok) {
      const qe = await ye.json().catch(() => ({}));
      throw new Error(qe.error || qe.message || `Request failed: ${ye.status}`);
    }
    return ye.json();
  }
  async function i(q = !1) {
    return n(q ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function p(q, ue = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: q, allow_issues: ue })
    });
  }
  async function g(q = 10, ue = 0) {
    return n(`/v2/comfygit/log?limit=${q}&offset=${ue}`);
  }
  async function u(q) {
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
  async function m() {
    return n("/v2/comfygit/branches");
  }
  async function y(q) {
    return n(`/v2/comfygit/commit/${q}`);
  }
  async function w(q, ue = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: q, force: ue })
    });
  }
  async function _(q, ue = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, start_point: ue })
    });
  }
  async function k(q, ue = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: q, force: ue })
    });
  }
  async function R(q, ue = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(q)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ue })
    });
  }
  async function F() {
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
  async function f(q, ue) {
    const ye = { target_env: q };
    return ue && (ye.workspace_path = ue), n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ye)
    });
  }
  async function C() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function L(q) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function M() {
    return n("/v2/workspace/environments/create_status");
  }
  async function x(q = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${q}`);
  }
  async function j(q) {
    return n(`/v2/workspace/environments/${q}`, {
      method: "DELETE"
    });
  }
  async function B(q = !1) {
    try {
      return n(q ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ue = await i(q), ye = [];
      return ue.workflows.new.forEach((De) => {
        ye.push({ name: De, status: "new", missing_nodes: 0, missing_models: 0, path: De });
      }), ue.workflows.modified.forEach((De) => {
        ye.push({ name: De, status: "modified", missing_nodes: 0, missing_models: 0, path: De });
      }), ue.workflows.synced.forEach((De) => {
        ye.push({ name: De, status: "synced", missing_nodes: 0, missing_models: 0, path: De });
      }), ye;
    }
  }
  async function G(q) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/details`);
  }
  async function T(q) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/resolve`, {
      method: "POST"
    });
  }
  async function E(q, ue, ye) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ue, install_models: ye })
    });
  }
  async function N(q, ue, ye) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ue, importance: ye })
    });
  }
  async function le() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function ee() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function Y(q) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(q)}`);
  }
  async function re(q) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function H(q, ue) {
    return n(`/v2/workspace/models/${q}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ue })
    });
  }
  async function U(q, ue) {
    return n(`/v2/workspace/models/${q}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ue })
    });
  }
  async function P(q) {
    return n(`/v2/workspace/models/${q}`, {
      method: "DELETE"
    });
  }
  async function S(q) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function oe() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function ne() {
    return n("/v2/workspace/models/directory");
  }
  async function Te(q) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function _e(q) {
    try {
      const ue = q ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(q)}` : "/v2/comfygit/config";
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
  async function Pe(q, ue) {
    const ye = ue ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(ue)}` : "/v2/comfygit/config";
    return n(ye, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function Re(q, ue) {
    try {
      const ye = new URLSearchParams();
      return q && ye.append("level", q), ue && ye.append("lines", ue.toString()), n(`/v2/comfygit/debug/logs?${ye}`);
    } catch {
      return [];
    }
  }
  async function de(q, ue) {
    try {
      const ye = new URLSearchParams();
      return q && ye.append("level", q), ue && ye.append("lines", ue.toString()), n(`/v2/workspace/debug/logs?${ye}`);
    } catch {
      return [];
    }
  }
  async function ge() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function fe() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function ie(q) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
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
  async function ze(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}/track-dev`, {
      method: "POST"
    });
  }
  async function Ee(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}/install`, {
      method: "POST"
    });
  }
  async function ot(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}/update`, {
      method: "POST"
    });
  }
  async function dt(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}`, {
      method: "DELETE"
    });
  }
  async function vt() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Ce(q, ue) {
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
  async function Xe(q, ue, ye) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ue, push_url: ye })
    });
  }
  async function je(q) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/fetch`, {
      method: "POST"
    });
  }
  async function ft(q) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/status`);
    } catch {
      return null;
    }
  }
  async function ke(q = "skip", ue = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: q,
        remove_extra_nodes: ue
      })
    });
  }
  async function Ve(q, ue) {
    const ye = ue ? `/v2/comfygit/remotes/${encodeURIComponent(q)}/pull-preview?branch=${encodeURIComponent(ue)}` : `/v2/comfygit/remotes/${encodeURIComponent(q)}/pull-preview`;
    return n(ye);
  }
  async function ve(q, ue = {}) {
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
  async function J(q, ue) {
    const ye = ue ? `/v2/comfygit/remotes/${encodeURIComponent(q)}/push-preview?branch=${encodeURIComponent(ue)}` : `/v2/comfygit/remotes/${encodeURIComponent(q)}/push-preview`;
    return n(ye);
  }
  async function $e(q, ue = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ue.force || !1 })
    });
  }
  async function ce(q, ue) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: ue })
    });
  }
  async function K(q) {
    const ue = {
      success: 0,
      failed: []
    };
    for (const ye of q)
      try {
        await T(ye), ue.success++;
      } catch (De) {
        ue.failed.push({
          name: ye,
          error: De instanceof Error ? De.message : "Unknown error"
        });
      }
    return ue;
  }
  async function O(q) {
    var De;
    const ue = new FormData();
    if (ue.append("file", q), !((De = window.app) != null && De.api))
      throw new Error("ComfyUI API not available");
    const ye = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: ue
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!ye.ok) {
      const qe = await ye.json().catch(() => ({}));
      throw new Error(qe.error || `Preview failed: ${ye.status}`);
    }
    return ye.json();
  }
  async function A(q) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(q)}`
    );
  }
  async function X(q, ue, ye, De) {
    var qt;
    const qe = new FormData();
    if (qe.append("file", q), qe.append("name", ue), qe.append("model_strategy", ye), qe.append("torch_backend", De), !((qt = window.app) != null && qt.api))
      throw new Error("ComfyUI API not available");
    const It = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: qe
    });
    if (!It.ok) {
      const Ht = await It.json().catch(() => ({}));
      throw new Error(Ht.message || Ht.error || `Import failed: ${It.status}`);
    }
    return It.json();
  }
  async function be() {
    return n("/v2/workspace/import/status");
  }
  async function Qe(q) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: q })
    });
  }
  async function gt(q, ue, ye, De) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: q,
        name: ue,
        model_strategy: ye,
        torch_backend: De
      })
    });
  }
  async function Ct() {
    return n("/v2/setup/status");
  }
  async function nt(q) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function xt() {
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
    commit: p,
    getHistory: g,
    exportEnv: u,
    validateExport: v,
    exportEnvWithForce: r,
    // Git Operations
    getBranches: m,
    getCommitDetail: y,
    checkout: w,
    createBranch: _,
    switchBranch: k,
    deleteBranch: R,
    // Environment Management
    getEnvironments: F,
    switchEnvironment: f,
    getSwitchProgress: C,
    createEnvironment: L,
    getCreateProgress: M,
    getComfyUIReleases: x,
    deleteEnvironment: j,
    // Workflow Management
    getWorkflows: B,
    getWorkflowDetails: G,
    resolveWorkflow: T,
    installWorkflowDeps: E,
    setModelImportance: N,
    // Model Management
    getEnvironmentModels: le,
    getWorkspaceModels: ee,
    getModelDetails: Y,
    openFileLocation: re,
    addModelSource: H,
    removeModelSource: U,
    deleteModel: P,
    downloadModel: S,
    scanWorkspaceModels: oe,
    getModelsDirectory: ne,
    setModelsDirectory: Te,
    // Settings
    getConfig: _e,
    updateConfig: Pe,
    // Debug/Logs
    getEnvironmentLogs: Re,
    getWorkspaceLogs: de,
    getEnvironmentLogPath: ge,
    getWorkspaceLogPath: fe,
    openFile: ie,
    // Node Management
    getNodes: ae,
    trackNodeAsDev: ze,
    installNode: Ee,
    updateNode: ot,
    uninstallNode: dt,
    // Git Remotes
    getRemotes: vt,
    addRemote: Ce,
    removeRemote: et,
    updateRemoteUrl: Xe,
    fetchRemote: je,
    getRemoteSyncStatus: ft,
    // Push/Pull
    getPullPreview: Ve,
    pullFromRemote: ve,
    getPushPreview: J,
    pushToRemote: $e,
    validateMerge: ce,
    // Environment Sync
    syncEnvironmentManually: ke,
    // Workflow Repair
    repairWorkflowModels: K,
    // Import Operations
    previewTarballImport: O,
    previewGitImport: Qe,
    validateEnvironmentName: A,
    executeImport: X,
    executeGitImport: gt,
    getImportProgress: be,
    // First-Time Setup
    getSetupStatus: Ct,
    initializeWorkspace: nt,
    getInitializeProgress: xt,
    validatePath: St
  };
}
async function Nt(t, c = {}, n = 5e3) {
  const i = new AbortController(), p = setTimeout(() => i.abort(), n);
  try {
    const g = await fetch(t, {
      ...c,
      signal: i.signal
    });
    return clearTimeout(p), g;
  } catch (g) {
    throw clearTimeout(p), g.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : g;
  }
}
function Ds() {
  const t = $(null);
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
  async function i() {
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
  async function p() {
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
    getStatus: i,
    restart: p,
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
}, Cl = /* @__PURE__ */ Q({
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
    function p() {
      n.closeOnOverlayClick && i("close");
    }
    function g(u) {
      u.key === "Escape" && n.showCloseButton && i("close");
    }
    return Oe(() => {
      document.addEventListener("keydown", g), document.body.style.overflow = "hidden";
    }), zs(() => {
      document.removeEventListener("keydown", g), document.body.style.overflow = "";
    }), (u, v) => (s(), I(We, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: p
      }, [
        e("div", {
          class: me(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: v[1] || (v[1] = Le(() => {
          }, ["stop"]))
        }, [
          e("div", yl, [
            Se(u.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", wl, a(t.title), 1)) : d("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: v[0] || (v[0] = (r) => u.$emit("close"))
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
          e("div", kl, [
            t.loading ? (s(), o("div", bl, "Loading...")) : t.error ? (s(), o("div", _l, a(t.error), 1)) : Se(u.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          u.$slots.footer ? (s(), o("div", $l, [
            Se(u.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), Ye = /* @__PURE__ */ Z(Cl, [["__scopeId", "data-v-8dab1081"]]), xl = ["type", "disabled"], Sl = {
  key: 0,
  class: "spinner"
}, Il = /* @__PURE__ */ Q({
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
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", Sl)) : d("", !0),
      Se(c.$slots, "default", {}, void 0, !0)
    ], 10, xl));
  }
}), pe = /* @__PURE__ */ Z(Il, [["__scopeId", "data-v-f3452606"]]), El = {
  key: 0,
  class: "base-title-count"
}, Ml = /* @__PURE__ */ Q({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, n) => (s(), I(cs(`h${t.level}`), {
      class: me(["base-title", t.variant])
    }, {
      default: l(() => [
        Se(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", El, "(" + a(t.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ft = /* @__PURE__ */ Z(Ml, [["__scopeId", "data-v-5a01561d"]]), Tl = ["value", "disabled"], Rl = {
  key: 0,
  value: "",
  disabled: ""
}, zl = ["value"], Ll = {
  key: 0,
  class: "base-select-error"
}, Pl = /* @__PURE__ */ Q({
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
    return (i, p) => (s(), o("div", {
      class: me(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: me(["base-select", { error: !!t.error }]),
        onChange: p[0] || (p[0] = (g) => i.$emit("update:modelValue", g.target.value))
      }, [
        t.placeholder ? (s(), o("option", Rl, a(t.placeholder), 1)) : d("", !0),
        (s(!0), o(V, null, te(t.options, (g) => (s(), o("option", {
          key: c(g),
          value: c(g)
        }, a(n(g)), 9, zl))), 128))
      ], 42, Tl),
      t.error ? (s(), o("span", Ll, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), Dl = /* @__PURE__ */ Z(Pl, [["__scopeId", "data-v-7436d745"]]), Nl = { class: "popover-header" }, Ul = { class: "popover-title" }, Ol = { class: "popover-content" }, Bl = {
  key: 0,
  class: "popover-actions"
}, Fl = /* @__PURE__ */ Q({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (s(), I(We, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: yt({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = Le(() => {
          }, ["stop"]))
        }, [
          e("div", Nl, [
            e("h4", Ul, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Ol, [
            Se(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (s(), o("div", Bl, [
            Se(c.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), mt = /* @__PURE__ */ Z(Fl, [["__scopeId", "data-v-42815ace"]]), Al = { class: "detail-section" }, Vl = {
  key: 0,
  class: "empty-message"
}, Wl = { class: "model-header" }, Gl = { class: "model-name" }, jl = { class: "model-details" }, ql = { class: "model-row" }, Hl = { class: "model-row" }, Kl = { class: "label" }, Jl = {
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
}, ii = /* @__PURE__ */ Q({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getWorkflowDetails: p, setModelImportance: g, openFileLocation: u } = Ae(), v = $(null), r = $(!1), m = $(null), y = $(!1), w = $({}), _ = $(!1), k = $(/* @__PURE__ */ new Set()), R = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function F(T) {
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
    function f(T) {
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
    function C(T) {
      if (!T.loaded_by || T.loaded_by.length === 0) return [];
      const E = T.hash || T.filename;
      return k.value.has(E) ? T.loaded_by : T.loaded_by.slice(0, 3);
    }
    function L(T) {
      return k.value.has(T);
    }
    function M(T) {
      k.value.has(T) ? k.value.delete(T) : k.value.add(T), k.value = new Set(k.value);
    }
    async function x() {
      r.value = !0, m.value = null;
      try {
        v.value = await p(n.workflowName);
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to load workflow details";
      } finally {
        r.value = !1;
      }
    }
    function j(T, E) {
      w.value[T] = E, y.value = !0;
    }
    async function B(T) {
      try {
        await u(T);
      } catch (E) {
        m.value = E instanceof Error ? E.message : "Failed to open file location";
      }
    }
    async function G() {
      if (!y.value) {
        i("close");
        return;
      }
      r.value = !0, m.value = null;
      try {
        for (const [T, E] of Object.entries(w.value))
          await g(n.workflowName, T, E);
        i("refresh"), i("close");
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to save changes";
      } finally {
        r.value = !1;
      }
    }
    return Oe(x), (T, E) => (s(), o(V, null, [
      b(Ye, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: r.value,
        error: m.value || void 0,
        onClose: E[4] || (E[4] = (N) => i("close"))
      }, {
        body: l(() => [
          v.value ? (s(), o(V, { key: 0 }, [
            e("section", Al, [
              b(Ft, { variant: "section" }, {
                default: l(() => [
                  h("MODELS USED (" + a(v.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.models.length === 0 ? (s(), o("div", Vl, " No models used in this workflow ")) : d("", !0),
              (s(!0), o(V, null, te(v.value.models, (N) => {
                var le;
                return s(), o("div", {
                  key: N.hash || N.filename,
                  class: "model-card"
                }, [
                  e("div", Wl, [
                    E[6] || (E[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", Gl, a(N.filename), 1)
                  ]),
                  e("div", jl, [
                    e("div", ql, [
                      E[7] || (E[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: me(["value", F(N.status)])
                      }, a(f(N.status)), 3)
                    ]),
                    e("div", Hl, [
                      e("span", Kl, [
                        E[8] || (E[8] = h(" Importance: ", -1)),
                        b(Ls, {
                          size: 14,
                          title: "About importance levels",
                          onClick: E[0] || (E[0] = (ee) => _.value = !0)
                        })
                      ]),
                      b(Dl, {
                        "model-value": w.value[N.filename] || N.importance,
                        options: R,
                        "onUpdate:modelValue": (ee) => j(N.filename, ee)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    N.loaded_by && N.loaded_by.length > 0 ? (s(), o("div", Jl, [
                      E[9] || (E[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", Yl, [
                        (s(!0), o(V, null, te(C(N), (ee, Y) => (s(), o("div", {
                          key: `${ee.node_id}-${Y}`,
                          class: "node-reference"
                        }, a(ee.node_type) + " (Node #" + a(ee.node_id) + ") ", 1))), 128)),
                        N.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (ee) => M(N.hash || N.filename)
                        }, a(L(N.hash || N.filename) ? "▼ Show less" : `▶ View all (${N.loaded_by.length})`), 9, Xl)) : d("", !0)
                      ])
                    ])) : d("", !0),
                    N.size_mb ? (s(), o("div", Ql, [
                      E[10] || (E[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", Zl, a(N.size_mb) + " MB", 1)
                    ])) : d("", !0),
                    N.has_category_mismatch ? (s(), o("div", ei, [
                      E[13] || (E[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", ti, [
                        E[11] || (E[11] = h(" In ", -1)),
                        e("code", null, a(N.actual_category) + "/", 1),
                        E[12] || (E[12] = h(" but loader needs ", -1)),
                        e("code", null, a((le = N.expected_categories) == null ? void 0 : le[0]) + "/", 1)
                      ])
                    ])) : d("", !0)
                  ]),
                  N.status !== "available" ? (s(), o("div", si, [
                    N.status === "downloadable" ? (s(), I(pe, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: E[1] || (E[1] = (ee) => i("resolve"))
                    }, {
                      default: l(() => [...E[14] || (E[14] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    })) : N.status === "category_mismatch" && N.file_path ? (s(), I(pe, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (ee) => B(N.file_path)
                    }, {
                      default: l(() => [...E[15] || (E[15] = [
                        h(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : N.status !== "path_mismatch" ? (s(), I(pe, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: E[2] || (E[2] = (ee) => i("resolve"))
                    }, {
                      default: l(() => [...E[16] || (E[16] = [
                        h(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : d("", !0)
                  ])) : d("", !0)
                ]);
              }), 128))
            ]),
            e("section", oi, [
              b(Ft, { variant: "section" }, {
                default: l(() => [
                  h("NODES USED (" + a(v.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.nodes.length === 0 ? (s(), o("div", ni, " No custom nodes used in this workflow ")) : d("", !0),
              (s(!0), o(V, null, te(v.value.nodes, (N) => (s(), o("div", {
                key: N.name,
                class: "node-item"
              }, [
                e("span", {
                  class: me(["node-status", N.status === "installed" ? "installed" : "missing"])
                }, a(N.status === "installed" ? "✓" : "✕"), 3),
                e("span", ai, a(N.name), 1),
                N.version ? (s(), o("span", li, "v" + a(N.version), 1)) : d("", !0)
              ]))), 128))
            ])
          ], 64)) : d("", !0)
        ]),
        footer: l(() => [
          b(pe, {
            variant: "secondary",
            onClick: E[3] || (E[3] = (N) => i("close"))
          }, {
            default: l(() => [...E[17] || (E[17] = [
              h(" Close ", -1)
            ])]),
            _: 1
          }),
          y.value ? (s(), I(pe, {
            key: 0,
            variant: "primary",
            onClick: G
          }, {
            default: l(() => [...E[18] || (E[18] = [
              h(" Save Changes ", -1)
            ])]),
            _: 1
          })) : d("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      b(mt, {
        show: _.value,
        title: "Model Importance Levels",
        onClose: E[5] || (E[5] = (N) => _.value = !1)
      }, {
        content: l(() => [...E[19] || (E[19] = [
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
}), ri = /* @__PURE__ */ Z(ii, [["__scopeId", "data-v-668728e6"]]), Me = ts({
  items: [],
  status: "idle"
});
let ut = null;
function Ns() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function ss(t) {
  return Me.items.find((c) => c.id === t);
}
async function Mt() {
  if (Me.status === "downloading") return;
  const t = Me.items.find((c) => c.status === "queued");
  if (!t) {
    Me.status = "idle";
    return;
  }
  Me.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await di(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    Me.status = "idle", Mt();
  }
}
async function di(t) {
  return new Promise((c, n) => {
    ut && (ut.close(), ut = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), p = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    ut = p;
    let g = Date.now(), u = 0, v = !1;
    p.onmessage = (r) => {
      try {
        const m = JSON.parse(r.data);
        switch (m.type) {
          case "progress":
            t.downloaded = m.downloaded || 0, t.size = m.total || t.size;
            const y = Date.now(), w = (y - g) / 1e3;
            if (w > 0.5) {
              const _ = t.downloaded - u;
              if (t.speed = _ / w, g = y, u = t.downloaded, t.speed > 0 && t.size > 0) {
                const k = t.size - t.downloaded;
                t.eta = k / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            v = !0, p.close(), ut = null, c();
            break;
          case "error":
            v = !0, p.close(), ut = null, n(new Error(m.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, p.onerror = () => {
      p.close(), ut = null, v || n(new Error("Connection lost"));
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
      if (Me.items.some((p) => p.url === n.url && p.filename === n.filename))
        continue;
      const i = {
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
      Me.items.push(i);
    }
    console.log(`[ComfyGit] Loaded ${c.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Gt() {
  function t(f) {
    for (const C of f) {
      if (Me.items.some(
        (x) => x.url === C.url && x.targetPath === C.targetPath && ["queued", "downloading", "paused", "completed"].includes(x.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${C.filename}`);
        continue;
      }
      const M = {
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
      Me.items.push(M);
    }
    Me.status === "idle" && Mt();
  }
  async function c(f) {
    const C = ss(f);
    if (C) {
      if (C.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(C.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        ut && (ut.close(), ut = null), C.status = "failed", C.error = "Cancelled by user", Me.status = "idle", Mt();
      } else if (C.status === "queued") {
        const L = Me.items.findIndex((M) => M.id === f);
        L >= 0 && Me.items.splice(L, 1);
      }
    }
  }
  function n(f) {
    const C = ss(f);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, Me.status === "idle" && Mt());
  }
  function i(f) {
    const C = ss(f);
    !C || C.status !== "paused" || (C.status = "queued", Me.status === "idle" && Mt());
  }
  function p() {
    const f = Me.items.filter((C) => C.status === "paused");
    for (const C of f)
      C.status = "queued";
    Me.status === "idle" && Mt();
  }
  function g(f) {
    const C = Me.items.findIndex((L) => L.id === f);
    C >= 0 && ["completed", "failed", "paused"].includes(Me.items[C].status) && Me.items.splice(C, 1);
  }
  function u() {
    Me.items = Me.items.filter((f) => f.status !== "completed");
  }
  function v() {
    Me.items = Me.items.filter((f) => f.status !== "failed");
  }
  const r = D(
    () => Me.items.find((f) => f.status === "downloading")
  ), m = D(
    () => Me.items.filter((f) => f.status === "queued")
  ), y = D(
    () => Me.items.filter((f) => f.status === "completed")
  ), w = D(
    () => Me.items.filter((f) => f.status === "failed")
  ), _ = D(
    () => Me.items.filter((f) => f.status === "paused")
  ), k = D(() => Me.items.length > 0), R = D(
    () => Me.items.filter((f) => f.status === "queued" || f.status === "downloading").length
  ), F = D(
    () => Me.items.some((f) => f.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: co(Me),
    // Computed
    currentDownload: r,
    queuedItems: m,
    completedItems: y,
    failedItems: w,
    pausedItems: _,
    hasItems: k,
    activeCount: R,
    hasPaused: F,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: i,
    resumeAllPaused: p,
    removeItem: g,
    clearCompleted: u,
    clearFailed: v,
    loadPendingDownloads: ci
  };
}
function Us() {
  const t = $(null), c = $(null), n = $([]), i = $([]), p = $(!1), g = $(null);
  async function u(L, M) {
    var j;
    if (!((j = window.app) != null && j.api))
      throw new Error("ComfyUI API not available");
    const x = await window.app.api.fetchApi(L, M);
    if (!x.ok) {
      const B = await x.json().catch(() => ({})), G = B.error || B.message || `Request failed: ${x.status}`;
      throw new Error(G);
    }
    return x.json();
  }
  async function v(L) {
    p.value = !0, g.value = null;
    try {
      let M;
      return Dt() || (M = await u(
        `/v2/comfygit/workflow/${L}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = M, M;
    } catch (M) {
      const x = M instanceof Error ? M.message : "Unknown error occurred";
      throw g.value = x, M;
    } finally {
      p.value = !1;
    }
  }
  async function r(L, M, x, j) {
    p.value = !0, g.value = null;
    try {
      let B;
      if (!Dt()) {
        const G = Object.fromEntries(M), T = Object.fromEntries(x), E = j ? Array.from(j) : [];
        B = await u(
          `/v2/comfygit/workflow/${L}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: G,
              model_choices: T,
              skipped_packages: E
            })
          }
        );
      }
      return c.value = B, B;
    } catch (B) {
      const G = B instanceof Error ? B.message : "Unknown error occurred";
      throw g.value = G, B;
    } finally {
      p.value = !1;
    }
  }
  async function m(L, M = 10) {
    p.value = !0, g.value = null;
    try {
      let x;
      return Dt() || (x = await u(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: L, limit: M })
        }
      )), n.value = x.results, x.results;
    } catch (x) {
      const j = x instanceof Error ? x.message : "Unknown error occurred";
      throw g.value = j, x;
    } finally {
      p.value = !1;
    }
  }
  async function y(L, M = 10) {
    p.value = !0, g.value = null;
    try {
      let x;
      return Dt() || (x = await u(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: L, limit: M })
        }
      )), i.value = x.results, x.results;
    } catch (x) {
      const j = x instanceof Error ? x.message : "Unknown error occurred";
      throw g.value = j, x;
    } finally {
      p.value = !1;
    }
  }
  const w = ts({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function _() {
    w.phase = "idle", w.currentFile = void 0, w.currentFileIndex = void 0, w.totalFiles = void 0, w.bytesDownloaded = void 0, w.bytesTotal = void 0, w.completedFiles = [], w.nodesToInstall = [], w.nodesInstalled = [], w.installError = void 0, w.needsRestart = void 0, w.error = void 0, w.nodeInstallProgress = void 0;
  }
  async function k(L) {
    w.phase = "installing", w.nodesInstalled = [], w.installError = void 0, w.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Dt(), await R(L);
    } catch (M) {
      const x = M instanceof Error ? M.message : "Failed to install nodes";
      throw w.installError = x, M;
    }
  }
  async function R(L) {
    var x;
    const M = await u(
      `/v2/comfygit/workflow/${L}/install`,
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
      const j = new Map(((x = M.failed) == null ? void 0 : x.map((B) => [B.node_id, B.error])) || []);
      for (let B = 0; B < w.nodesToInstall.length; B++) {
        const G = w.nodesToInstall[B], T = j.get(G);
        w.nodeInstallProgress.completedNodes.push({
          node_id: G,
          success: !T,
          error: T
        });
      }
    }
    return w.nodesInstalled = M.nodes_installed, w.needsRestart = M.nodes_installed.length > 0, M.failed && M.failed.length > 0 && (w.installError = `${M.failed.length} package(s) failed to install`), M;
  }
  async function F(L, M, x) {
    _(), w.phase = "resolving", g.value = null;
    const j = Object.fromEntries(M), B = Object.fromEntries(x);
    try {
      const G = await fetch(`/v2/comfygit/workflow/${L}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: j,
          model_choices: B
        })
      });
      if (!G.ok)
        throw new Error(`Request failed: ${G.status}`);
      if (!G.body)
        throw new Error("No response body");
      const T = G.body.getReader(), E = new TextDecoder();
      let N = "";
      for (; ; ) {
        const { done: le, value: ee } = await T.read();
        if (le) break;
        N += E.decode(ee, { stream: !0 });
        const Y = N.split(`

`);
        N = Y.pop() || "";
        for (const re of Y) {
          if (!re.trim()) continue;
          const H = re.split(`
`);
          let U = "", P = "";
          for (const S of H)
            S.startsWith("event: ") ? U = S.slice(7) : S.startsWith("data: ") && (P = S.slice(6));
          if (P)
            try {
              const S = JSON.parse(P);
              f(U, S);
            } catch (S) {
              console.warn("Failed to parse SSE event:", S);
            }
        }
      }
    } catch (G) {
      const T = G instanceof Error ? G.message : "Unknown error occurred";
      throw g.value = T, w.error = T, w.phase = "error", G;
    }
  }
  function f(L, M) {
    switch (L) {
      case "batch_start":
        w.phase = "downloading", w.totalFiles = M.total;
        break;
      case "file_start":
        w.currentFile = M.filename, w.currentFileIndex = M.index, w.bytesDownloaded = 0, w.bytesTotal = void 0;
        break;
      case "file_progress":
        w.bytesDownloaded = M.downloaded, w.bytesTotal = M.total;
        break;
      case "file_complete":
        w.completedFiles.push({
          filename: M.filename,
          success: M.success,
          error: M.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        w.nodesToInstall = M.nodes_to_install || [], M.download_results && (w.completedFiles = M.download_results), w.phase = "complete";
        break;
      case "error":
        w.error = M.message, w.phase = "error", g.value = M.message;
        break;
    }
  }
  function C(L, M) {
    const { addToQueue: x } = Gt(), j = M.filter((B) => B.url && B.target_path).map((B) => ({
      workflow: L,
      filename: B.filename,
      url: B.url,
      targetPath: B.target_path,
      size: B.size || 0,
      type: "model"
    }));
    return j.length > 0 && x(j), j.length;
  }
  return {
    // State
    result: t,
    appliedResult: c,
    searchResults: n,
    modelSearchResults: i,
    isLoading: p,
    error: g,
    progress: w,
    // Methods
    analyzeWorkflow: v,
    applyResolution: r,
    applyResolutionWithProgress: F,
    installNodes: k,
    searchNodes: m,
    searchModels: y,
    resetProgress: _,
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
}, yi = { class: "stepper-content" }, wi = /* @__PURE__ */ Q({
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
    function p(m) {
      var y;
      if ((y = n.stepStats) != null && y[m]) {
        const w = n.stepStats[m];
        return w.total > 0 && w.resolved === w.total;
      }
      return n.completedSteps.includes(m);
    }
    function g(m) {
      var y;
      if ((y = n.stepStats) != null && y[m]) {
        const w = n.stepStats[m];
        return w.resolved > 0 && w.resolved < w.total;
      }
      return !1;
    }
    function u(m) {
      return p(m) ? "state-complete" : g(m) ? "state-partial" : "state-pending";
    }
    function v(m) {
      return !1;
    }
    function r(m) {
      i("step-change", m);
    }
    return (m, y) => (s(), o("div", ui, [
      e("div", mi, [
        (s(!0), o(V, null, te(t.steps, (w, _) => (s(), o("div", {
          key: w.id,
          class: me(["step", {
            active: t.currentStep === w.id,
            completed: p(w.id),
            "in-progress": g(w.id),
            disabled: v(w.id)
          }]),
          onClick: (k) => r(w.id)
        }, [
          e("div", {
            class: me(["step-indicator", u(w.id)])
          }, [
            p(w.id) ? (s(), o("span", fi, "✓")) : (s(), o("span", gi, a(_ + 1), 1))
          ], 2),
          e("div", pi, a(w.label), 1),
          _ < t.steps.length - 1 ? (s(), o("div", hi)) : d("", !0)
        ], 10, vi))), 128))
      ]),
      e("div", yi, [
        Se(m.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), ki = /* @__PURE__ */ Z(wi, [["__scopeId", "data-v-2a7b3af8"]]), bi = /* @__PURE__ */ Q({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = D(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), i = D(() => `confidence-${n.value}`), p = D(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (g, u) => (s(), o("span", {
      class: me(["confidence-badge", i.value, t.size])
    }, a(p.value), 3));
  }
}), Zt = /* @__PURE__ */ Z(bi, [["__scopeId", "data-v-17ec4b80"]]), _i = { class: "node-info" }, $i = { class: "node-info-text" }, Ci = { class: "item-body" }, xi = {
  key: 0,
  class: "resolved-state"
}, Si = {
  key: 1,
  class: "multiple-options"
}, Ii = { class: "options-list" }, Ei = ["onClick"], Mi = ["name", "value", "checked", "onChange"], Ti = { class: "option-content" }, Ri = { class: "option-header" }, zi = { class: "option-package-id" }, Li = {
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
}, qi = { class: "option-meta" }, Hi = {
  key: 0,
  class: "installed-badge"
}, Ki = {
  key: 2,
  class: "unresolved-message"
}, Ji = { class: "action-buttons" }, Yi = /* @__PURE__ */ Q({
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
    function p(r, m = 80) {
      return r.length <= m ? r : r.slice(0, m - 3) + "...";
    }
    const g = D(() => !!n.choice);
    D(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.action;
    }), D(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.package_id;
    });
    const u = D(() => {
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
    return (r, m) => (s(), o("div", {
      class: me(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: g.value }])
    }, [
      e("div", _i, [
        e("span", $i, [
          m[7] || (m[7] = h("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: me(["status-badge", u.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", Ci, [
        g.value ? (s(), o("div", xi, [
          b(pe, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (y) => i("clear-choice"))
          }, {
            default: l(() => [...m[8] || (m[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Si, [
          m[12] || (m[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Ii, [
            (s(!0), o(V, null, te(t.options, (y, w) => (s(), o("label", {
              key: y.package_id,
              class: me(["option-card", { selected: t.selectedOptionIndex === w }]),
              onClick: (_) => v(w)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: w,
                checked: t.selectedOptionIndex === w,
                onChange: (_) => v(w)
              }, null, 40, Mi),
              e("div", Ti, [
                e("div", Ri, [
                  e("span", zi, a(y.package_id), 1),
                  b(Zt, {
                    confidence: y.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                y.title && y.title !== y.package_id ? (s(), o("div", Li, a(y.title), 1)) : d("", !0),
                e("div", Pi, [
                  y.is_installed ? (s(), o("span", Di, "Already Installed")) : d("", !0)
                ])
              ])
            ], 10, Ei))), 128))
          ]),
          e("div", Ni, [
            b(pe, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (y) => i("search"))
            }, {
              default: l(() => [...m[9] || (m[9] = [
                h(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            b(pe, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (y) => i("manual-entry"))
            }, {
              default: l(() => [...m[10] || (m[10] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(pe, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (y) => i("mark-optional"))
            }, {
              default: l(() => [...m[11] || (m[11] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Ui, [
          t.isSearching ? (s(), o("div", Oi, [...m[13] || (m[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(V, { key: 1 }, [
            m[14] || (m[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", Bi, [
              (s(!0), o(V, null, te(t.searchResults.slice(0, 5), (y, w) => (s(), o("label", {
                key: y.package_id,
                class: "option-card",
                onClick: (_) => i("search-result-selected", y)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: w
                }, null, 8, Ai),
                e("div", Vi, [
                  e("div", Wi, [
                    e("span", Gi, a(y.package_id), 1),
                    b(Zt, {
                      confidence: y.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  y.description ? (s(), o("div", ji, a(p(y.description)), 1)) : d("", !0),
                  e("div", qi, [
                    y.is_installed ? (s(), o("span", Hi, "Already Installed")) : d("", !0)
                  ])
                ])
              ], 8, Fi))), 128))
            ])
          ], 64)) : (s(), o("div", Ki, [...m[15] || (m[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", Ji, [
            b(pe, {
              variant: "secondary",
              size: "sm",
              onClick: m[4] || (m[4] = (y) => i("search"))
            }, {
              default: l(() => {
                var y;
                return [
                  h(a((y = t.searchResults) != null && y.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            b(pe, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (y) => i("manual-entry"))
            }, {
              default: l(() => [...m[16] || (m[16] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(pe, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (y) => i("mark-optional"))
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
}), Xi = /* @__PURE__ */ Z(Yi, [["__scopeId", "data-v-c2997d1d"]]), Qi = { class: "item-navigator" }, Zi = { class: "nav-item-info" }, er = ["title"], tr = { class: "nav-controls" }, sr = { class: "nav-arrows" }, or = ["disabled"], nr = ["disabled"], ar = { class: "nav-position" }, lr = /* @__PURE__ */ Q({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const n = c;
    return (i, p) => (s(), o("div", Qi, [
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
            onClick: p[0] || (p[0] = (g) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, or),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: p[1] || (p[1] = (g) => n("next")),
            title: "Next item"
          }, " → ", 8, nr)
        ]),
        e("span", ar, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), Os = /* @__PURE__ */ Z(lr, [["__scopeId", "data-v-74af7920"]]), ir = ["type", "value", "placeholder", "disabled"], rr = {
  key: 0,
  class: "base-input-error"
}, dr = /* @__PURE__ */ Q({
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
        onInput: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          n[1] || (n[1] = ht((i) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = ht((i) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, ir),
      t.error ? (s(), o("span", rr, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), it = /* @__PURE__ */ Z(dr, [["__scopeId", "data-v-9ba02cdc"]]), cr = { class: "node-resolution-step" }, ur = {
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
}, Tr = ["onClick"], Rr = { class: "node-result-header" }, zr = { class: "node-result-package-id" }, Lr = {
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
}, Ur = { class: "node-manual-entry-modal" }, Or = { class: "node-modal-body" }, Br = { class: "node-modal-actions" }, Fr = /* @__PURE__ */ Q({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: c }) {
    const n = t, i = c, { searchNodes: p } = Us(), g = $(0), u = $(!1), v = $(!1), r = $(""), m = $(""), y = $([]), w = $(!1), _ = $(/* @__PURE__ */ new Map()), k = $(/* @__PURE__ */ new Set()), R = $(!1);
    function F() {
      R.value && P(), R.value = !1;
    }
    const f = D(() => n.nodes[g.value]), C = D(() => n.nodes.filter((de) => n.nodeChoices.has(de.node_type)).length), L = D(() => f.value ? _.value.get(f.value.node_type) || [] : []), M = D(() => f.value ? k.value.has(f.value.node_type) : !1);
    _t(f, async (de) => {
      var ge;
      de && ((ge = de.options) != null && ge.length || _.value.has(de.node_type) || k.value.has(de.node_type) || n.nodeChoices.has(de.node_type) || await x(de.node_type));
    }, { immediate: !0 });
    async function x(de) {
      k.value.add(de);
      try {
        const ge = await p(de, 5);
        _.value.set(de, ge);
      } catch {
        _.value.set(de, []);
      } finally {
        k.value.delete(de);
      }
    }
    const j = D(() => n.autoResolvedPackages.filter((de) => !n.skippedPackages.has(de.package_id)).length);
    function B(de) {
      return n.skippedPackages.has(de);
    }
    function G(de) {
      i("package-skip", de);
    }
    const T = D(() => {
      var ge;
      if (!f.value) return "not-found";
      const de = n.nodeChoices.get(f.value.node_type);
      if (de)
        switch (de.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (ge = f.value.options) != null && ge.length ? "ambiguous" : "not-found";
    }), E = D(() => {
      var ge;
      if (!f.value) return;
      const de = n.nodeChoices.get(f.value.node_type);
      if (de)
        switch (de.action) {
          case "install":
            return de.package_id ? `→ ${de.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (ge = f.value.options) != null && ge.length ? `${f.value.options.length} matches` : "Not Found";
    });
    function N(de) {
      de >= 0 && de < n.nodes.length && (g.value = de);
    }
    function le() {
      f.value && i("mark-optional", f.value.node_type);
    }
    function ee() {
      f.value && i("skip", f.value.node_type);
    }
    function Y(de) {
      f.value && i("option-selected", f.value.node_type, de);
    }
    function re() {
      f.value && i("clear-choice", f.value.node_type);
    }
    function H() {
      f.value && (r.value = f.value.node_type, y.value = L.value, u.value = !0, Te(r.value));
    }
    function U() {
      m.value = "", v.value = !0;
    }
    function P() {
      u.value = !1, r.value = "", y.value = [];
    }
    function S() {
      v.value = !1, m.value = "";
    }
    let oe = null;
    function ne() {
      oe && clearTimeout(oe), oe = setTimeout(() => {
        Te(r.value);
      }, 300);
    }
    async function Te(de) {
      if (!de.trim()) {
        y.value = [];
        return;
      }
      w.value = !0;
      try {
        y.value = await p(de, 10);
      } catch {
        y.value = [];
      } finally {
        w.value = !1;
      }
    }
    function _e(de) {
      f.value && (i("manual-entry", f.value.node_type, de.package_id), P());
    }
    function Pe(de) {
      f.value && i("manual-entry", f.value.node_type, de.package_id);
    }
    function Re() {
      !f.value || !m.value.trim() || (i("manual-entry", f.value.node_type, m.value.trim()), S());
    }
    return (de, ge) => {
      var fe, ie;
      return s(), o("div", cr, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", ur, [
          e("div", mr, [
            ge[6] || (ge[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", vr, a(j.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", fr, [
            (s(!0), o(V, null, te(t.autoResolvedPackages, (ae) => (s(), o("div", {
              key: ae.package_id,
              class: "resolved-package-item"
            }, [
              e("div", gr, [
                e("code", pr, a(ae.package_id), 1),
                e("span", hr, a(ae.node_types_count) + " node type" + a(ae.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", yr, [
                B(ae.package_id) ? (s(), o("span", kr, " SKIPPED ")) : (s(), o("span", wr, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (ze) => G(ae.package_id)
                }, a(B(ae.package_id) ? "Include" : "Skip"), 9, br)
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
          f.value ? (s(), I(Os, {
            key: 0,
            "item-name": f.value.node_type,
            "current-index": g.value,
            "total-items": t.nodes.length,
            onPrev: ge[0] || (ge[0] = (ae) => N(g.value - 1)),
            onNext: ge[1] || (ge[1] = (ae) => N(g.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
          f.value ? (s(), o("div", xr, [
            b(Xi, {
              "node-type": f.value.node_type,
              "has-multiple-options": !!((fe = f.value.options) != null && fe.length),
              options: f.value.options,
              choice: (ie = t.nodeChoices) == null ? void 0 : ie.get(f.value.node_type),
              status: T.value,
              "status-label": E.value,
              "search-results": L.value,
              "is-searching": M.value,
              onMarkOptional: le,
              onSkip: ee,
              onManualEntry: U,
              onSearch: H,
              onOptionSelected: Y,
              onClearChoice: re,
              onSearchResultSelected: Pe
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : d("", !0)
        ], 64)) : d("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", Sr, [...ge[8] || (ge[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : d("", !0),
        (s(), I(We, { to: "body" }, [
          u.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ge[4] || (ge[4] = Le((ae) => R.value = !0, ["self"])),
            onMouseup: Le(F, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: ge[3] || (ge[3] = (ae) => R.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                ge[9] || (ge[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: P
                }, "✕")
              ]),
              e("div", Ir, [
                b(it, {
                  modelValue: r.value,
                  "onUpdate:modelValue": ge[2] || (ge[2] = (ae) => r.value = ae),
                  placeholder: "Search by node type, package name...",
                  onInput: ne
                }, null, 8, ["modelValue"]),
                e("div", Er, [
                  y.value.length > 0 ? (s(), o("div", Mr, [
                    (s(!0), o(V, null, te(y.value, (ae) => (s(), o("div", {
                      key: ae.package_id,
                      class: "node-search-result-item",
                      onClick: (ze) => _e(ae)
                    }, [
                      e("div", Rr, [
                        e("code", zr, a(ae.package_id), 1),
                        ae.match_confidence ? (s(), I(Zt, {
                          key: 0,
                          confidence: ae.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : d("", !0)
                      ]),
                      ae.description ? (s(), o("div", Lr, a(ae.description), 1)) : d("", !0)
                    ], 8, Tr))), 128))
                  ])) : w.value ? (s(), o("div", Pr, "Searching...")) : r.value ? (s(), o("div", Dr, 'No packages found matching "' + a(r.value) + '"', 1)) : (s(), o("div", Nr, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : d("", !0)
        ])),
        (s(), I(We, { to: "body" }, [
          v.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Le(S, ["self"])
          }, [
            e("div", Ur, [
              e("div", { class: "node-modal-header" }, [
                ge[10] || (ge[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: S
                }, "✕")
              ]),
              e("div", Or, [
                b(it, {
                  modelValue: m.value,
                  "onUpdate:modelValue": ge[5] || (ge[5] = (ae) => m.value = ae),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Br, [
                  b(pe, {
                    variant: "secondary",
                    onClick: S
                  }, {
                    default: l(() => [...ge[11] || (ge[11] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(pe, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: Re
                  }, {
                    default: l(() => [...ge[12] || (ge[12] = [
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
}), Ar = /* @__PURE__ */ Z(Fr, [["__scopeId", "data-v-281581bc"]]), Vr = { class: "node-info" }, Wr = { class: "node-info-text" }, Gr = { class: "item-body" }, jr = {
  key: 0,
  class: "resolved-state"
}, qr = {
  key: 1,
  class: "multiple-options"
}, Hr = { class: "options-list" }, Kr = ["onClick"], Jr = ["name", "value", "checked", "onChange"], Yr = { class: "option-content" }, Xr = { class: "option-header" }, Qr = { class: "option-filename" }, Zr = { class: "option-meta" }, ed = { class: "option-size" }, td = { class: "option-category" }, sd = { class: "option-path" }, od = { class: "action-buttons" }, nd = {
  key: 2,
  class: "unresolved"
}, ad = { class: "action-buttons" }, ld = /* @__PURE__ */ Q({
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
    const n = t, i = c, p = D(() => !!n.choice);
    D(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.action;
    }), D(() => {
      var r, m;
      return ((m = (r = n.choice) == null ? void 0 : r.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const g = D(() => {
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
      i("option-selected", r);
    }
    function v(r) {
      if (!r) return "Unknown";
      const m = r / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(r / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (r, m) => (s(), o("div", {
      class: me(["model-resolution-item", { resolved: p.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", Vr, [
        e("span", Wr, [
          m[7] || (m[7] = h("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: me(["status-badge", g.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", Gr, [
        p.value ? (s(), o("div", jr, [
          b(pe, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (y) => i("clear-choice"))
          }, {
            default: l(() => [...m[8] || (m[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", qr, [
          m[12] || (m[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Hr, [
            (s(!0), o(V, null, te(t.options, (y, w) => (s(), o("label", {
              key: y.model.hash,
              class: me(["option-card", { selected: t.selectedOptionIndex === w }]),
              onClick: (_) => u(w)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: w,
                checked: t.selectedOptionIndex === w,
                onChange: (_) => u(w)
              }, null, 40, Jr),
              e("div", Yr, [
                e("div", Xr, [
                  e("span", Qr, a(y.model.filename), 1),
                  b(Zt, {
                    confidence: y.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Zr, [
                  e("span", ed, a(v(y.model.size)), 1),
                  e("span", td, a(y.model.category), 1)
                ]),
                e("div", sd, a(y.model.relative_path), 1)
              ])
            ], 10, Kr))), 128))
          ]),
          e("div", od, [
            b(pe, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (y) => i("search"))
            }, {
              default: l(() => [...m[9] || (m[9] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(pe, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (y) => i("download-url"))
            }, {
              default: l(() => [...m[10] || (m[10] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(pe, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (y) => i("mark-optional"))
            }, {
              default: l(() => [...m[11] || (m[11] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", nd, [
          m[16] || (m[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", ad, [
            b(pe, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (y) => i("search"))
            }, {
              default: l(() => [...m[13] || (m[13] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(pe, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (y) => i("download-url"))
            }, {
              default: l(() => [...m[14] || (m[14] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(pe, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (y) => i("mark-optional"))
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
}), id = /* @__PURE__ */ Z(ld, [["__scopeId", "data-v-8a82fefa"]]), rd = { class: "model-resolution-step" }, dd = { class: "step-header" }, cd = { class: "step-info" }, ud = { class: "step-title" }, md = { class: "step-description" }, vd = { class: "stat-badge" }, fd = {
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
}, Ed = { class: "model-download-url-modal" }, Md = { class: "model-modal-body" }, Td = { class: "model-input-group" }, Rd = { class: "model-input-group" }, zd = { class: "model-modal-actions" }, Ld = /* @__PURE__ */ Q({
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
    function i(P) {
      var S;
      return P && ((S = n[P]) == null ? void 0 : S[0]) || null;
    }
    const p = t, g = c, u = $(0), v = $(!1), r = $(!1), m = $(""), y = $(""), w = $(""), _ = $([]), k = $(!1), R = D(() => p.models[u.value]), F = D(() => p.models.some((P) => P.is_download_intent)), f = D(() => p.models.filter(
      (P) => p.modelChoices.has(P.filename) || P.is_download_intent
    ).length), C = D(() => {
      var S;
      if (!R.value) return "";
      const P = i((S = R.value.reference) == null ? void 0 : S.node_type);
      return P ? `${P}/${R.value.filename}` : "";
    }), L = D(() => {
      var S;
      if (!R.value) return "not-found";
      const P = p.modelChoices.get(R.value.filename);
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
      return R.value.is_download_intent ? "download" : (S = R.value.options) != null && S.length ? "ambiguous" : "not-found";
    }), M = D(() => {
      var S, oe;
      if (!R.value) return;
      const P = p.modelChoices.get(R.value.filename);
      if (P)
        switch (P.action) {
          case "select":
            return (S = P.selected_model) != null && S.filename ? `→ ${P.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return R.value.is_download_intent ? "Pending Download" : (oe = R.value.options) != null && oe.length ? `${R.value.options.length} matches` : "Not Found";
    });
    function x(P) {
      P >= 0 && P < p.models.length && (u.value = P);
    }
    function j() {
      R.value && g("mark-optional", R.value.filename);
    }
    function B() {
      R.value && g("skip", R.value.filename);
    }
    function G(P) {
      R.value && g("option-selected", R.value.filename, P);
    }
    function T() {
      R.value && g("clear-choice", R.value.filename);
    }
    function E() {
      R.value && (m.value = R.value.filename, v.value = !0);
    }
    function N() {
      R.value && (y.value = R.value.download_source || "", w.value = R.value.target_path || C.value, r.value = !0);
    }
    function le() {
      v.value = !1, m.value = "", _.value = [];
    }
    function ee() {
      r.value = !1, y.value = "", w.value = "";
    }
    function Y() {
      k.value = !0, setTimeout(() => {
        k.value = !1;
      }, 300);
    }
    function re(P) {
      R.value && le();
    }
    function H() {
      !R.value || !y.value.trim() || (g("download-url", R.value.filename, y.value.trim(), w.value.trim() || void 0), ee());
    }
    function U(P) {
      if (!P) return "Unknown";
      const S = P / (1024 * 1024 * 1024);
      return S >= 1 ? `${S.toFixed(2)} GB` : `${(P / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (P, S) => {
      var oe, ne, Te;
      return s(), o("div", rd, [
        e("div", dd, [
          e("div", cd, [
            e("h3", ud, a(F.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", md, a(F.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", vd, a(f.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        R.value ? (s(), I(Os, {
          key: 0,
          "item-name": R.value.filename,
          "current-index": u.value,
          "total-items": t.models.length,
          onPrev: S[0] || (S[0] = (_e) => x(u.value - 1)),
          onNext: S[1] || (S[1] = (_e) => x(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
        R.value ? (s(), o("div", fd, [
          b(id, {
            filename: R.value.filename,
            "node-type": ((oe = R.value.reference) == null ? void 0 : oe.node_type) || "Unknown",
            "has-multiple-options": !!((ne = R.value.options) != null && ne.length),
            options: R.value.options,
            choice: (Te = t.modelChoices) == null ? void 0 : Te.get(R.value.filename),
            status: L.value,
            "status-label": M.value,
            onMarkOptional: j,
            onSkip: B,
            onDownloadUrl: N,
            onSearch: E,
            onOptionSelected: G,
            onClearChoice: T
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", gd, [...S[5] || (S[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), I(We, { to: "body" }, [
          v.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Le(le, ["self"])
          }, [
            e("div", pd, [
              e("div", { class: "model-modal-header" }, [
                S[6] || (S[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: le
                }, "✕")
              ]),
              e("div", hd, [
                b(it, {
                  modelValue: m.value,
                  "onUpdate:modelValue": S[2] || (S[2] = (_e) => m.value = _e),
                  placeholder: "Search by filename, category...",
                  onInput: Y
                }, null, 8, ["modelValue"]),
                _.value.length > 0 ? (s(), o("div", yd, [
                  (s(!0), o(V, null, te(_.value, (_e) => (s(), o("div", {
                    key: _e.hash,
                    class: "model-search-result-item",
                    onClick: (Pe) => re()
                  }, [
                    e("div", kd, [
                      e("code", bd, a(_e.filename), 1)
                    ]),
                    e("div", _d, [
                      e("span", $d, a(_e.category), 1),
                      e("span", Cd, a(U(_e.size)), 1)
                    ]),
                    _e.relative_path ? (s(), o("div", xd, a(_e.relative_path), 1)) : d("", !0)
                  ], 8, wd))), 128))
                ])) : m.value && !k.value ? (s(), o("div", Sd, ' No models found matching "' + a(m.value) + '" ', 1)) : d("", !0),
                k.value ? (s(), o("div", Id, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (s(), I(We, { to: "body" }, [
          r.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Le(ee, ["self"])
          }, [
            e("div", Ed, [
              e("div", { class: "model-modal-header" }, [
                S[7] || (S[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: ee
                }, "✕")
              ]),
              e("div", Md, [
                e("div", Td, [
                  S[8] || (S[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  b(it, {
                    modelValue: y.value,
                    "onUpdate:modelValue": S[3] || (S[3] = (_e) => y.value = _e),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Rd, [
                  S[9] || (S[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  b(it, {
                    modelValue: w.value,
                    "onUpdate:modelValue": S[4] || (S[4] = (_e) => w.value = _e),
                    placeholder: C.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", zd, [
                  b(pe, {
                    variant: "secondary",
                    onClick: ee
                  }, {
                    default: l(() => [...S[10] || (S[10] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(pe, {
                    variant: "primary",
                    disabled: !y.value.trim() || !w.value.trim(),
                    onClick: H
                  }, {
                    default: l(() => [...S[11] || (S[11] = [
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
}), Pd = /* @__PURE__ */ Z(Ld, [["__scopeId", "data-v-c6acbada"]]), Dd = { class: "applying-step" }, Nd = {
  key: 0,
  class: "phase-content"
}, Ud = {
  key: 1,
  class: "phase-content"
}, Od = { class: "phase-description" }, Bd = { class: "overall-progress" }, Fd = { class: "progress-bar" }, Ad = { class: "progress-label" }, Vd = { class: "install-list" }, Wd = { class: "install-icon" }, Gd = { key: 0 }, jd = {
  key: 1,
  class: "spinner"
}, qd = { key: 2 }, Hd = { key: 3 }, Kd = {
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
}, dc = { class: "error-message" }, cc = /* @__PURE__ */ Q({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const c = t, n = D(() => {
      var m, y;
      const v = ((m = c.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || c.progress.nodesToInstall.length;
      if (!v) return 0;
      const r = ((y = c.progress.nodeInstallProgress) == null ? void 0 : y.completedNodes.length) ?? 0;
      return Math.round(r / v * 100);
    }), i = D(() => {
      var v;
      return ((v = c.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.filter((r) => !r.success)) || [];
    }), p = D(() => i.value.length > 0);
    function g(v, r) {
      var y, w;
      const m = (y = c.progress.nodeInstallProgress) == null ? void 0 : y.completedNodes.find((_) => _.node_id === v);
      return m ? m.success ? "complete" : "failed" : ((w = c.progress.nodeInstallProgress) == null ? void 0 : w.currentIndex) === r ? "installing" : "pending";
    }
    function u(v) {
      var r, m;
      return (m = (r = c.progress.nodeInstallProgress) == null ? void 0 : r.completedNodes.find((y) => y.node_id === v)) == null ? void 0 : m.error;
    }
    return (v, r) => {
      var m, y, w, _;
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
          e("p", Od, " Installing " + a((((m = t.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + a(((y = t.progress.nodeInstallProgress) == null ? void 0 : y.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Bd, [
            e("div", Fd, [
              e("div", {
                class: "progress-fill",
                style: yt({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Ad, a(((w = t.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.length) ?? 0) + " / " + a(((_ = t.progress.nodeInstallProgress) == null ? void 0 : _.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Vd, [
            (s(!0), o(V, null, te(t.progress.nodesToInstall, (k, R) => (s(), o("div", {
              key: k,
              class: me(["install-item", g(k, R)])
            }, [
              e("span", Wd, [
                g(k, R) === "pending" ? (s(), o("span", Gd, "○")) : g(k, R) === "installing" ? (s(), o("span", jd, "◌")) : g(k, R) === "complete" ? (s(), o("span", qd, "✓")) : g(k, R) === "failed" ? (s(), o("span", Hd, "✗")) : d("", !0)
              ]),
              e("code", null, a(k), 1),
              u(k) ? (s(), o("span", Kd, a(u(k)), 1)) : d("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", Jd, [
          e("div", Yd, [
            e("span", {
              class: me(["phase-icon", p.value ? "warning" : "success"])
            }, a(p.value ? "⚠" : "✓"), 3),
            e("h3", Xd, a(p.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", Qd, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", Zd, [
              r[4] || (r[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", ec, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("div", tc, [
              r[5] || (r[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", sc, a(i.value.length) + " package" + a(i.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("div", oc, [
              (s(!0), o(V, null, te(i.value, (k) => (s(), o("div", {
                key: k.node_id,
                class: "failed-item"
              }, [
                e("code", nc, a(k.node_id), 1),
                e("span", ac, a(k.error), 1)
              ]))), 128))
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: r[0] || (r[0] = (k) => v.$emit("retry-failed"))
            }, " Retry Failed (" + a(i.value.length) + ") ", 1)) : d("", !0),
            p.value ? d("", !0) : (s(), o("div", lc, [...r[6] || (r[6] = [
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
                onClick: r[1] || (r[1] = (k) => v.$emit("restart"))
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
}), uc = /* @__PURE__ */ Z(cc, [["__scopeId", "data-v-5efaae58"]]), mc = {
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
}, Ec = { class: "stat-count" }, Mc = { class: "stat-card" }, Tc = { class: "stat-items" }, Rc = { class: "stat-item success" }, zc = { class: "stat-count" }, Lc = {
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
}, qc = { class: "status-text" }, Hc = {
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
}, Eu = { class: "section-title" }, Mu = { class: "review-items" }, Tu = { class: "item-name" }, Ru = { class: "item-choice" }, zu = {
  key: 0,
  class: "choice-badge install"
}, Lu = {
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
}, Fu = /* @__PURE__ */ Q({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, i = c, { analyzeWorkflow: p, applyResolution: g, installNodes: u, queueModelDownloads: v, progress: r, resetProgress: m } = Us(), { loadPendingDownloads: y } = Gt(), { openFileLocation: w } = Ae(), _ = $(null), k = $(!1), R = $(!1), F = $(null), f = $("analysis"), C = $([]), L = $(/* @__PURE__ */ new Map()), M = $(/* @__PURE__ */ new Map()), x = $(/* @__PURE__ */ new Set()), j = D(() => {
      const K = [
        { id: "analysis", label: "Analysis" }
      ];
      return (G.value || N.value) && K.push({ id: "nodes", label: "Nodes" }), (T.value || E.value) && K.push({ id: "models", label: "Models" }), K.push({ id: "review", label: "Review" }), f.value === "applying" && K.push({ id: "applying", label: "Applying" }), K;
    }), B = D(() => _.value ? _.value.stats.needs_user_input : !1), G = D(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), T = D(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), E = D(() => _.value ? _.value.stats.download_intents > 0 : !1), N = D(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), le = D(() => _.value ? _.value.nodes.resolved.length : 0), ee = D(() => _.value ? _.value.models.resolved.filter((K) => K.has_category_mismatch) : []), Y = D(() => ee.value.length > 0), re = D(() => {
      if (!_.value) return [];
      const K = _.value.nodes.resolved.filter((A) => !A.is_installed), O = /* @__PURE__ */ new Set();
      return K.filter((A) => O.has(A.package.package_id) ? !1 : (O.add(A.package.package_id), !0));
    }), H = D(() => {
      if (!_.value) return [];
      const K = _.value.nodes.resolved.filter((A) => !A.is_installed), O = /* @__PURE__ */ new Map();
      for (const A of K) {
        const X = O.get(A.package.package_id);
        X ? X.node_types_count++ : O.set(A.package.package_id, {
          package_id: A.package.package_id,
          title: A.package.title,
          node_types_count: 1
        });
      }
      return Array.from(O.values());
    }), U = D(() => re.value.filter((K) => !x.value.has(K.package.package_id))), P = D(() => _.value ? _.value.models.resolved.filter((K) => K.match_type === "download_intent").map((K) => ({
      filename: K.reference.widget_value,
      reference: K.reference,
      is_download_intent: !0,
      resolved_model: K.model,
      download_source: K.download_source,
      target_path: K.target_path
    })) : []), S = D(() => {
      if (!_.value) return [];
      const K = _.value.nodes.unresolved.map((A) => ({
        node_type: A.reference.node_type,
        reason: A.reason,
        is_unresolved: !0,
        options: void 0
      })), O = _.value.nodes.ambiguous.map((A) => ({
        node_type: A.reference.node_type,
        has_multiple_options: !0,
        options: A.options.map((X) => ({
          package_id: X.package.package_id,
          title: X.package.title,
          match_confidence: X.match_confidence,
          match_type: X.match_type,
          is_installed: X.is_installed
        }))
      }));
      return [...K, ...O];
    }), oe = D(() => {
      if (!_.value) return [];
      const K = _.value.models.unresolved.map((A) => ({
        filename: A.reference.widget_value,
        reference: A.reference,
        reason: A.reason,
        is_unresolved: !0,
        options: void 0
      })), O = _.value.models.ambiguous.map((A) => ({
        filename: A.reference.widget_value,
        reference: A.reference,
        has_multiple_options: !0,
        options: A.options.map((X) => ({
          model: X.model,
          match_confidence: X.match_confidence,
          match_type: X.match_type,
          has_download_source: X.has_download_source
        }))
      }));
      return [...K, ...O];
    }), ne = D(() => {
      const K = oe.value, O = P.value.map((A) => ({
        filename: A.filename,
        reference: A.reference,
        is_download_intent: !0,
        resolved_model: A.resolved_model,
        download_source: A.download_source,
        target_path: A.target_path,
        options: void 0
      }));
      return [...K, ...O];
    }), Te = D(() => {
      let K = U.value.length;
      for (const O of L.value.values())
        O.action === "install" && K++;
      for (const O of M.value.values())
        O.action === "select" && K++;
      return K;
    }), _e = D(() => {
      let K = 0;
      for (const O of M.value.values())
        O.action === "download" && K++;
      return K;
    }), Pe = D(() => {
      let K = 0;
      for (const O of L.value.values())
        O.action === "optional" && K++;
      for (const O of M.value.values())
        O.action === "optional" && K++;
      return K;
    }), Re = D(() => {
      let K = x.value.size;
      for (const O of L.value.values())
        O.action === "skip" && K++;
      for (const O of M.value.values())
        O.action === "skip" && K++;
      for (const O of S.value)
        L.value.has(O.node_type) || K++;
      for (const O of oe.value)
        M.value.has(O.filename) || K++;
      return K;
    }), de = D(() => {
      const K = {};
      if (K.analysis = { resolved: 1, total: 1 }, G.value) {
        const O = S.value.length, A = S.value.filter(
          (X) => L.value.has(X.node_type)
        ).length;
        K.nodes = { resolved: A, total: O };
      }
      if (T.value || E.value) {
        const O = ne.value.length, A = ne.value.filter(
          (X) => M.value.has(X.filename) || X.is_download_intent
        ).length;
        K.models = { resolved: A, total: O };
      }
      if (K.review = { resolved: 1, total: 1 }, f.value === "applying") {
        const O = r.totalFiles || 1, A = r.completedFiles.length;
        K.applying = { resolved: A, total: O };
      }
      return K;
    });
    function ge(K) {
      f.value = K;
    }
    function fe() {
      const K = j.value.findIndex((O) => O.id === f.value);
      K > 0 && (f.value = j.value[K - 1].id);
    }
    function ie() {
      const K = j.value.findIndex((O) => O.id === f.value);
      K < j.value.length - 1 && (f.value = j.value[K + 1].id);
    }
    async function ae() {
      k.value = !0, F.value = null;
      try {
        _.value = await p(n.workflowName);
      } catch (K) {
        F.value = K instanceof Error ? K.message : "Failed to analyze workflow";
      } finally {
        k.value = !1;
      }
    }
    function ze() {
      C.value.includes("analysis") || C.value.push("analysis"), G.value || N.value ? f.value = "nodes" : T.value || E.value ? f.value = "models" : f.value = "review";
    }
    function Ee(K) {
      L.value.set(K, { action: "optional" });
    }
    function ot(K) {
      L.value.set(K, { action: "skip" });
    }
    function dt(K, O) {
      var X;
      const A = S.value.find((be) => be.node_type === K);
      (X = A == null ? void 0 : A.options) != null && X[O] && L.value.set(K, {
        action: "install",
        package_id: A.options[O].package_id
      });
    }
    function vt(K, O) {
      L.value.set(K, {
        action: "install",
        package_id: O
      });
    }
    function Ce(K) {
      L.value.delete(K);
    }
    function et(K) {
      x.value.has(K) ? x.value.delete(K) : x.value.add(K);
    }
    function Xe(K) {
      M.value.set(K, { action: "optional" });
    }
    function je(K) {
      M.value.set(K, { action: "skip" });
    }
    function ft(K, O) {
      var X;
      const A = oe.value.find((be) => be.filename === K);
      (X = A == null ? void 0 : A.options) != null && X[O] && M.value.set(K, {
        action: "select",
        selected_model: A.options[O].model
      });
    }
    function ke(K, O, A) {
      M.value.set(K, {
        action: "download",
        url: O,
        target_path: A
      });
    }
    function Ve(K) {
      M.value.delete(K);
    }
    async function ve(K) {
      try {
        await w(K);
      } catch (O) {
        F.value = O instanceof Error ? O.message : "Failed to open file location";
      }
    }
    async function J() {
      var K;
      R.value = !0, F.value = null, m(), r.phase = "resolving", f.value = "applying";
      try {
        const O = await g(n.workflowName, L.value, M.value, x.value);
        O.models_to_download && O.models_to_download.length > 0 && v(n.workflowName, O.models_to_download);
        const A = [
          ...O.nodes_to_install || [],
          ...U.value.map((be) => be.package.package_id)
        ];
        r.nodesToInstall = [...new Set(A)], r.nodesToInstall.length > 0 && await u(n.workflowName), r.phase = "complete", await y();
        const X = r.installError || ((K = r.nodeInstallProgress) == null ? void 0 : K.completedNodes.some((be) => !be.success));
        !r.needsRestart && !X && setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1500);
      } catch (O) {
        F.value = O instanceof Error ? O.message : "Failed to apply resolution", r.error = F.value, r.phase = "error";
      } finally {
        R.value = !1;
      }
    }
    function $e() {
      i("refresh"), i("restart"), i("close");
    }
    async function ce() {
      var O;
      const K = ((O = r.nodeInstallProgress) == null ? void 0 : O.completedNodes.filter((A) => !A.success).map((A) => A.node_id)) || [];
      if (K.length !== 0) {
        r.phase = "installing", r.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: K.length
        }, r.nodesToInstall = K, r.nodesInstalled = [], r.installError = void 0;
        try {
          await u(n.workflowName), r.phase = "complete";
        } catch (A) {
          r.error = A instanceof Error ? A.message : "Retry failed", r.phase = "error";
        }
      }
    }
    return Oe(ae), (K, O) => (s(), I(Ye, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: k.value,
      error: F.value || void 0,
      "fixed-height": !0,
      onClose: O[1] || (O[1] = (A) => i("close"))
    }, {
      body: l(() => [
        k.value && !_.value ? (s(), o("div", mc, [...O[2] || (O[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (s(), o("div", vc, [
          b(ki, {
            steps: j.value,
            "current-step": f.value,
            "completed-steps": C.value,
            "step-stats": de.value,
            onStepChange: ge
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          f.value === "analysis" ? (s(), o("div", fc, [
            e("div", gc, [
              e("div", pc, [
                O[3] || (O[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", hc, " Found " + a(_.value.stats.total_nodes) + " nodes and " + a(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", yc, [
                e("div", wc, [
                  O[12] || (O[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", kc, [
                    le.value > 0 ? (s(), o("div", bc, [
                      O[4] || (O[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", _c, a(le.value), 1),
                      O[5] || (O[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : d("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (s(), o("div", $c, [
                      O[6] || (O[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Cc, a(_.value.stats.packages_needing_installation), 1),
                      O[7] || (O[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : d("", !0),
                    _.value.nodes.ambiguous.length > 0 ? (s(), o("div", xc, [
                      O[8] || (O[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Sc, a(_.value.nodes.ambiguous.length), 1),
                      O[9] || (O[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    _.value.nodes.unresolved.length > 0 ? (s(), o("div", Ic, [
                      O[10] || (O[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Ec, a(_.value.nodes.unresolved.length), 1),
                      O[11] || (O[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ]),
                e("div", Mc, [
                  O[23] || (O[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Tc, [
                    e("div", Rc, [
                      O[13] || (O[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", zc, a(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      O[14] || (O[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (s(), o("div", Lc, [
                      O[15] || (O[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Pc, a(_.value.stats.download_intents), 1),
                      O[16] || (O[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : d("", !0),
                    Y.value ? (s(), o("div", Dc, [
                      O[17] || (O[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", Nc, a(ee.value.length), 1),
                      O[18] || (O[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : d("", !0),
                    _.value.models.ambiguous.length > 0 ? (s(), o("div", Uc, [
                      O[19] || (O[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Oc, a(_.value.models.ambiguous.length), 1),
                      O[20] || (O[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    _.value.models.unresolved.length > 0 ? (s(), o("div", Bc, [
                      O[21] || (O[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Fc, a(_.value.models.unresolved.length), 1),
                      O[22] || (O[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ])
              ]),
              B.value ? (s(), o("div", Ac, [
                O[24] || (O[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Vc, a(S.value.length + oe.value.length) + " items need your input", 1)
              ])) : N.value ? (s(), o("div", Wc, [
                O[25] || (O[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Gc, a(_.value.stats.packages_needing_installation) + " package" + a(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(_.value.stats.nodes_needing_installation) + " node type" + a(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(E.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : E.value ? (s(), o("div", jc, [
                O[26] || (O[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", qc, a(_.value.stats.download_intents) + " model" + a(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : Y.value ? (s(), o("div", Hc, [
                O[27] || (O[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Kc, a(ee.value.length) + " model" + a(ee.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", Jc, [...O[28] || (O[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              Y.value ? (s(), o("div", Yc, [
                O[31] || (O[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", Xc, [
                  (s(!0), o(V, null, te(ee.value, (A) => {
                    var X, be;
                    return s(), o("div", {
                      key: A.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", Qc, a(A.actual_category) + "/" + a((X = A.model) == null ? void 0 : X.filename), 1),
                      O[30] || (O[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", Zc, a((be = A.expected_categories) == null ? void 0 : be[0]) + "/", 1),
                      A.file_path ? (s(), I(pe, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Qe) => ve(A.file_path)
                      }, {
                        default: l(() => [...O[29] || (O[29] = [
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
          f.value === "nodes" ? (s(), I(Ar, {
            key: 1,
            nodes: S.value,
            "node-choices": L.value,
            "auto-resolved-packages": H.value,
            "skipped-packages": x.value,
            onMarkOptional: Ee,
            onSkip: ot,
            onOptionSelected: dt,
            onManualEntry: vt,
            onClearChoice: Ce,
            onPackageSkip: et
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : d("", !0),
          f.value === "models" ? (s(), I(Pd, {
            key: 2,
            models: ne.value,
            "model-choices": M.value,
            onMarkOptional: Xe,
            onSkip: je,
            onOptionSelected: ft,
            onDownloadUrl: ke,
            onClearChoice: Ve
          }, null, 8, ["models", "model-choices"])) : d("", !0),
          f.value === "review" ? (s(), o("div", eu, [
            e("div", tu, [
              O[36] || (O[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", su, [
                e("div", ou, [
                  e("span", nu, a(Te.value), 1),
                  O[32] || (O[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", au, [
                  e("span", lu, a(_e.value), 1),
                  O[33] || (O[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", iu, [
                  e("span", ru, a(Pe.value), 1),
                  O[34] || (O[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", du, [
                  e("span", cu, a(Re.value), 1),
                  O[35] || (O[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              H.value.length > 0 ? (s(), o("div", uu, [
                e("h4", mu, "Node Packages (" + a(H.value.length) + ")", 1),
                e("div", vu, [
                  (s(!0), o(V, null, te(H.value, (A) => (s(), o("div", {
                    key: A.package_id,
                    class: "review-item"
                  }, [
                    e("code", fu, a(A.package_id), 1),
                    e("div", gu, [
                      x.value.has(A.package_id) ? (s(), o("span", hu, "Skipped")) : (s(), o("span", pu, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : d("", !0),
              S.value.length > 0 ? (s(), o("div", yu, [
                e("h4", wu, "Node Choices (" + a(S.value.length) + ")", 1),
                e("div", ku, [
                  (s(!0), o(V, null, te(S.value, (A) => {
                    var X, be, Qe, gt;
                    return s(), o("div", {
                      key: A.node_type,
                      class: "review-item"
                    }, [
                      e("code", bu, a(A.node_type), 1),
                      e("div", _u, [
                        L.value.has(A.node_type) ? (s(), o(V, { key: 0 }, [
                          ((X = L.value.get(A.node_type)) == null ? void 0 : X.action) === "install" ? (s(), o("span", $u, a((be = L.value.get(A.node_type)) == null ? void 0 : be.package_id), 1)) : ((Qe = L.value.get(A.node_type)) == null ? void 0 : Qe.action) === "optional" ? (s(), o("span", Cu, " Optional ")) : ((gt = L.value.get(A.node_type)) == null ? void 0 : gt.action) === "skip" ? (s(), o("span", xu, " Skip ")) : d("", !0)
                        ], 64)) : (s(), o("span", Su, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              ne.value.length > 0 ? (s(), o("div", Iu, [
                e("h4", Eu, "Models (" + a(ne.value.length) + ")", 1),
                e("div", Mu, [
                  (s(!0), o(V, null, te(ne.value, (A) => {
                    var X, be, Qe, gt, Ct, nt, xt;
                    return s(), o("div", {
                      key: A.filename,
                      class: "review-item"
                    }, [
                      e("code", Tu, a(A.filename), 1),
                      e("div", Ru, [
                        M.value.has(A.filename) ? (s(), o(V, { key: 0 }, [
                          ((X = M.value.get(A.filename)) == null ? void 0 : X.action) === "select" ? (s(), o("span", zu, a((Qe = (be = M.value.get(A.filename)) == null ? void 0 : be.selected_model) == null ? void 0 : Qe.filename), 1)) : ((gt = M.value.get(A.filename)) == null ? void 0 : gt.action) === "download" ? (s(), o("span", Lu, " Download ")) : ((Ct = M.value.get(A.filename)) == null ? void 0 : Ct.action) === "optional" ? (s(), o("span", Pu, " Optional ")) : ((nt = M.value.get(A.filename)) == null ? void 0 : nt.action) === "skip" ? (s(), o("span", Du, " Skip ")) : ((xt = M.value.get(A.filename)) == null ? void 0 : xt.action) === "cancel_download" ? (s(), o("span", Nu, " Cancel Download ")) : d("", !0)
                        ], 64)) : A.is_download_intent ? (s(), o("span", Uu, " Pending Download ")) : (s(), o("span", Ou, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              re.value.length === 0 && S.value.length === 0 && ne.value.length === 0 ? (s(), o("div", Bu, " No dependencies need resolution. ")) : d("", !0)
            ])
          ])) : d("", !0),
          f.value === "applying" ? (s(), I(uc, {
            key: 4,
            progress: xe(r),
            onRestart: $e,
            onRetryFailed: ce
          }, null, 8, ["progress"])) : d("", !0)
        ])) : d("", !0)
      ]),
      footer: l(() => [
        f.value !== "analysis" && f.value !== "applying" ? (s(), I(pe, {
          key: 0,
          variant: "secondary",
          disabled: R.value,
          onClick: fe
        }, {
          default: l(() => [...O[37] || (O[37] = [
            h(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        O[41] || (O[41] = e("div", { class: "footer-spacer" }, null, -1)),
        f.value !== "applying" || xe(r).phase === "complete" || xe(r).phase === "error" ? (s(), I(pe, {
          key: 1,
          variant: "secondary",
          onClick: O[0] || (O[0] = (A) => i("close"))
        }, {
          default: l(() => [
            h(a(xe(r).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : d("", !0),
        f.value === "analysis" ? (s(), I(pe, {
          key: 2,
          variant: "primary",
          disabled: k.value,
          onClick: ze
        }, {
          default: l(() => [...O[38] || (O[38] = [
            h(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        f.value === "nodes" ? (s(), I(pe, {
          key: 3,
          variant: "primary",
          onClick: ie
        }, {
          default: l(() => [
            h(a(T.value || E.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : d("", !0),
        f.value === "models" ? (s(), I(pe, {
          key: 4,
          variant: "primary",
          onClick: ie
        }, {
          default: l(() => [...O[39] || (O[39] = [
            h(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : d("", !0),
        f.value === "review" ? (s(), I(pe, {
          key: 5,
          variant: "primary",
          disabled: R.value,
          loading: R.value,
          onClick: J
        }, {
          default: l(() => [...O[40] || (O[40] = [
            h(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Au = /* @__PURE__ */ Z(Fu, [["__scopeId", "data-v-6276cf1d"]]), Vu = { class: "search-input-wrapper" }, Wu = ["value", "placeholder"], Gu = /* @__PURE__ */ Q({
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
    const n = t, i = c, p = $(null);
    let g;
    function u(r) {
      const m = r.target.value;
      n.debounce > 0 ? (clearTimeout(g), g = window.setTimeout(() => {
        i("update:modelValue", m);
      }, n.debounce)) : i("update:modelValue", m);
    }
    function v() {
      var r;
      i("update:modelValue", ""), i("clear"), (r = p.value) == null || r.focus();
    }
    return Oe(() => {
      n.autoFocus && p.value && p.value.focus();
    }), (r, m) => (s(), o("div", Vu, [
      e("input", {
        ref_key: "inputRef",
        ref: p,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: ht(v, ["escape"])
      }, null, 40, Wu),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: v,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), ju = /* @__PURE__ */ Z(Gu, [["__scopeId", "data-v-266f857a"]]), qu = { class: "search-bar" }, Hu = /* @__PURE__ */ Q({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, n) => (s(), o("div", qu, [
      b(ju, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => c.$emit("update:modelValue", i)),
        onClear: n[1] || (n[1] = (i) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Lt = /* @__PURE__ */ Z(Hu, [["__scopeId", "data-v-3d51bbfd"]]), Ku = { class: "section-group" }, Ju = {
  key: 0,
  class: "section-content"
}, Yu = /* @__PURE__ */ Q({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const n = t, i = c, p = $(n.initiallyExpanded);
    function g() {
      n.collapsible && (p.value = !p.value, i("toggle", p.value));
    }
    return (u, v) => (s(), o("section", Ku, [
      b(st, {
        count: t.count,
        clickable: t.collapsible,
        expanded: p.value,
        onClick: g
      }, {
        default: l(() => [
          h(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || p.value ? (s(), o("div", Ju, [
        Se(u.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Fe = /* @__PURE__ */ Z(Yu, [["__scopeId", "data-v-c48e33ed"]]), Xu = { class: "item-header" }, Qu = {
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
}, nm = /* @__PURE__ */ Q({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, i = D(() => n.status ? `status-${n.status}` : "");
    return (p, g) => (s(), o("div", {
      class: me(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: g[0] || (g[0] = (u) => t.clickable && p.$emit("click"))
    }, [
      e("div", Xu, [
        p.$slots.icon ? (s(), o("span", Qu, [
          Se(p.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        e("div", Zu, [
          p.$slots.title ? (s(), o("div", em, [
            Se(p.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          p.$slots.subtitle ? (s(), o("div", tm, [
            Se(p.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      p.$slots.details ? (s(), o("div", sm, [
        Se(p.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      p.$slots.actions ? (s(), o("div", om, [
        Se(p.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), He = /* @__PURE__ */ Z(nm, [["__scopeId", "data-v-cc435e0e"]]), am = { class: "loading-state" }, lm = { class: "loading-message" }, im = /* @__PURE__ */ Q({
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
}), wt = /* @__PURE__ */ Z(im, [["__scopeId", "data-v-ad8436c9"]]), rm = { class: "error-state" }, dm = { class: "error-message" }, cm = /* @__PURE__ */ Q({
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
      t.retry ? (s(), I(se, {
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
}), kt = /* @__PURE__ */ Z(cm, [["__scopeId", "data-v-5397be48"]]), um = /* @__PURE__ */ Q({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getWorkflows: p } = Ae();
    Ds();
    const g = $([]), u = $(!1), v = $(null), r = $(""), m = $(!0), y = $(!1), w = $(!1), _ = $(!1), k = $(null), R = D(
      () => g.value.filter((U) => U.status === "broken")
    ), F = D(
      () => g.value.filter((U) => U.status === "new")
    ), f = D(
      () => g.value.filter((U) => U.status === "modified")
    ), C = D(
      () => g.value.filter((U) => U.status === "synced")
    ), L = D(() => {
      if (!r.value.trim()) return g.value;
      const U = r.value.toLowerCase();
      return g.value.filter((P) => P.name.toLowerCase().includes(U));
    }), M = D(
      () => R.value.filter(
        (U) => !r.value.trim() || U.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), x = D(
      () => F.value.filter(
        (U) => !r.value.trim() || U.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), j = D(
      () => f.value.filter(
        (U) => !r.value.trim() || U.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), B = D(
      () => C.value.filter(
        (U) => !r.value.trim() || U.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), G = D(
      () => y.value ? B.value : B.value.slice(0, 5)
    );
    async function T(U = !1) {
      u.value = !0, v.value = null;
      try {
        g.value = await p(U);
      } catch (P) {
        v.value = P instanceof Error ? P.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    c({ loadWorkflows: T });
    function E(U) {
      k.value = U, w.value = !0;
    }
    function N(U) {
      k.value = U, _.value = !0;
    }
    function le() {
      i("refresh");
    }
    async function ee() {
      _.value = !1, await T(!0);
    }
    async function Y() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function re(U) {
      const P = [];
      return U.missing_nodes > 0 && P.push(`${U.missing_nodes} missing node${U.missing_nodes > 1 ? "s" : ""}`), U.missing_models > 0 && P.push(`${U.missing_models} missing model${U.missing_models > 1 ? "s" : ""}`), U.models_with_category_mismatch && U.models_with_category_mismatch > 0 && P.push(`${U.models_with_category_mismatch} model${U.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), U.pending_downloads && U.pending_downloads > 0 && P.push(`${U.pending_downloads} pending download${U.pending_downloads > 1 ? "s" : ""}`), P.length > 0 ? P.join(", ") : "Has issues";
    }
    function H(U) {
      const P = U.sync_state === "new" ? "New" : U.sync_state === "modified" ? "Modified" : U.sync_state === "synced" ? "Synced" : U.sync_state;
      return U.has_path_sync_issues && U.models_needing_path_sync && U.models_needing_path_sync > 0 ? `${U.models_needing_path_sync} model path${U.models_needing_path_sync > 1 ? "s" : ""} need${U.models_needing_path_sync === 1 ? "s" : ""} sync` : P || "Unknown";
    }
    return Oe(T), (U, P) => (s(), o(V, null, [
      b(Ke, null, {
        header: l(() => [
          b(Je, { title: "WORKFLOWS" })
        ]),
        search: l(() => [
          b(Lt, {
            modelValue: r.value,
            "onUpdate:modelValue": P[0] || (P[0] = (S) => r.value = S),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value ? (s(), I(wt, {
            key: 0,
            message: "Loading workflows..."
          })) : v.value ? (s(), I(kt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            M.value.length ? (s(), I(Fe, {
              key: 0,
              title: "BROKEN",
              count: M.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, te(M.value, (S) => (s(), I(He, {
                  key: S.name,
                  status: "broken"
                }, {
                  icon: l(() => [...P[7] || (P[7] = [
                    h("⚠", -1)
                  ])]),
                  title: l(() => [
                    h(a(S.name), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(re(S)), 1)
                  ]),
                  actions: l(() => [
                    b(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (oe) => N(S.name)
                    }, {
                      default: l(() => [...P[8] || (P[8] = [
                        h(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => E(S.name)
                    }, {
                      default: l(() => [...P[9] || (P[9] = [
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
            x.value.length ? (s(), I(Fe, {
              key: 1,
              title: "NEW",
              count: x.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, te(x.value, (S) => (s(), I(He, {
                  key: S.name,
                  status: S.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: l(() => [
                    h(a(S.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: l(() => [
                    h(a(S.name), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(H(S)), 1)
                  ]),
                  actions: l(() => [
                    b(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => E(S.name)
                    }, {
                      default: l(() => [...P[10] || (P[10] = [
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
            j.value.length ? (s(), I(Fe, {
              key: 2,
              title: "MODIFIED",
              count: j.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, te(j.value, (S) => (s(), I(He, {
                  key: S.name,
                  status: S.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: l(() => [...P[11] || (P[11] = [
                    h("⚡", -1)
                  ])]),
                  title: l(() => [
                    h(a(S.name), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(H(S)), 1)
                  ]),
                  actions: l(() => [
                    b(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => E(S.name)
                    }, {
                      default: l(() => [...P[12] || (P[12] = [
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
            B.value.length ? (s(), I(Fe, {
              key: 3,
              title: "SYNCED",
              count: B.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: P[2] || (P[2] = (S) => m.value = S)
            }, {
              default: l(() => [
                (s(!0), o(V, null, te(G.value, (S) => (s(), I(He, {
                  key: S.name,
                  status: S.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: l(() => [
                    h(a(S.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: l(() => [
                    h(a(S.name), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(H(S)), 1)
                  ]),
                  actions: l(() => [
                    b(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => E(S.name)
                    }, {
                      default: l(() => [...P[13] || (P[13] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !y.value && B.value.length > 5 ? (s(), I(se, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: P[1] || (P[1] = (S) => y.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: l(() => [
                    h(" View all " + a(B.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            L.value.length ? d("", !0) : (s(), I(rt, {
              key: 4,
              icon: "📭",
              message: r.value ? `No workflows match '${r.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      w.value && k.value ? (s(), I(ri, {
        key: 0,
        "workflow-name": k.value,
        onClose: P[3] || (P[3] = (S) => w.value = !1),
        onResolve: P[4] || (P[4] = (S) => N(k.value)),
        onRefresh: P[5] || (P[5] = (S) => i("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0),
      _.value && k.value ? (s(), I(Au, {
        key: 1,
        "workflow-name": k.value,
        onClose: ee,
        onInstall: le,
        onRefresh: P[6] || (P[6] = (S) => i("refresh")),
        onRestart: Y
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), mm = /* @__PURE__ */ Z(um, [["__scopeId", "data-v-fa3f076e"]]), vm = /* @__PURE__ */ Q({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: me(["summary-bar", t.variant])
    }, [
      Se(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), jt = /* @__PURE__ */ Z(vm, [["__scopeId", "data-v-ccb7816e"]]), fm = {
  key: 0,
  class: "model-details"
}, gm = { class: "detail-section" }, pm = { class: "detail-row" }, hm = { class: "detail-value mono" }, ym = { class: "detail-row" }, wm = { class: "detail-value mono" }, km = { class: "detail-row" }, bm = { class: "detail-value mono" }, _m = { class: "detail-row" }, $m = { class: "detail-value" }, Cm = { class: "detail-row" }, xm = { class: "detail-value" }, Sm = { class: "detail-row" }, Im = { class: "detail-value" }, Em = { class: "detail-section" }, Mm = { class: "section-header" }, Tm = {
  key: 0,
  class: "locations-list"
}, Rm = { class: "location-path mono" }, zm = {
  key: 0,
  class: "location-modified"
}, Lm = ["onClick"], Pm = {
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
}, qm = /* @__PURE__ */ Q({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: i, addModelSource: p, removeModelSource: g, openFileLocation: u } = Ae(), v = $(null), r = $(!0), m = $(null), y = $(""), w = $(!1), _ = $(null), k = $(null), R = $(null), F = $(null);
    let f = null;
    function C(T, E = "success", N = 2e3) {
      f && clearTimeout(f), F.value = { message: T, type: E }, f = setTimeout(() => {
        F.value = null;
      }, N);
    }
    function L(T) {
      if (!T) return "Unknown";
      const E = 1024 * 1024 * 1024, N = 1024 * 1024;
      return T >= E ? `${(T / E).toFixed(1)} GB` : T >= N ? `${(T / N).toFixed(0)} MB` : `${(T / 1024).toFixed(0)} KB`;
    }
    function M(T) {
      navigator.clipboard.writeText(T), C("Copied to clipboard!");
    }
    async function x(T) {
      try {
        await u(T), C("Opening file location...");
      } catch {
        C("Failed to open location", "error");
      }
    }
    async function j() {
      if (!(!y.value.trim() || !v.value)) {
        w.value = !0, k.value = null, R.value = null;
        try {
          await p(v.value.hash, y.value.trim()), R.value = "Source added successfully!", y.value = "", await G();
        } catch (T) {
          k.value = T instanceof Error ? T.message : "Failed to add source";
        } finally {
          w.value = !1;
        }
      }
    }
    async function B(T) {
      if (v.value) {
        _.value = T, k.value = null, R.value = null;
        try {
          await g(v.value.hash, T), C("Source removed"), await G();
        } catch (E) {
          k.value = E instanceof Error ? E.message : "Failed to remove source";
        } finally {
          _.value = null;
        }
      }
    }
    async function G() {
      r.value = !0, m.value = null;
      try {
        v.value = await i(n.identifier);
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to load model details";
      } finally {
        r.value = !1;
      }
    }
    return Oe(G), (T, E) => {
      var N;
      return s(), o(V, null, [
        b(Ye, {
          title: `Model Details: ${((N = v.value) == null ? void 0 : N.filename) || "Loading..."}`,
          size: "lg",
          loading: r.value,
          error: m.value,
          onClose: E[5] || (E[5] = (le) => T.$emit("close"))
        }, {
          body: l(() => {
            var le, ee, Y, re;
            return [
              v.value ? (s(), o("div", fm, [
                e("section", gm, [
                  e("div", pm, [
                    E[6] || (E[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", hm, a(v.value.hash || "Not computed"), 1),
                    v.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[0] || (E[0] = (H) => M(v.value.hash))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", ym, [
                    E[7] || (E[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", wm, a(v.value.blake3 || "Not computed"), 1),
                    v.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[1] || (E[1] = (H) => M(v.value.blake3))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", km, [
                    E[8] || (E[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", bm, a(v.value.sha256 || "Not computed"), 1),
                    v.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[2] || (E[2] = (H) => M(v.value.sha256))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", _m, [
                    E[9] || (E[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", $m, a(L(v.value.size)), 1)
                  ]),
                  e("div", Cm, [
                    E[10] || (E[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", xm, a(v.value.category), 1)
                  ]),
                  e("div", Sm, [
                    E[11] || (E[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Im, a(v.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Em, [
                  e("h4", Mm, "Locations (" + a(((le = v.value.locations) == null ? void 0 : le.length) || 0) + ")", 1),
                  (ee = v.value.locations) != null && ee.length ? (s(), o("div", Tm, [
                    (s(!0), o(V, null, te(v.value.locations, (H, U) => (s(), o("div", {
                      key: U,
                      class: "location-item"
                    }, [
                      e("span", Rm, a(H.path), 1),
                      H.modified ? (s(), o("span", zm, "Modified: " + a(H.modified), 1)) : d("", !0),
                      H.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (P) => x(H.path)
                      }, " Open File Location ", 8, Lm)) : d("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", Pm, "No locations found"))
                ]),
                e("section", Dm, [
                  e("h4", Nm, "Download Sources (" + a(((Y = v.value.sources) == null ? void 0 : Y.length) || 0) + ")", 1),
                  (re = v.value.sources) != null && re.length ? (s(), o("div", Um, [
                    (s(!0), o(V, null, te(v.value.sources, (H, U) => (s(), o("div", {
                      key: U,
                      class: "source-item"
                    }, [
                      e("span", Om, a(H.type) + ":", 1),
                      e("a", {
                        href: H.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(H.url), 9, Bm),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: _.value === H.url,
                        onClick: (P) => B(H.url)
                      }, a(_.value === H.url ? "..." : "×"), 9, Fm)
                    ]))), 128))
                  ])) : (s(), o("div", Am, " No download sources configured ")),
                  e("div", Vm, [
                    Be(e("input", {
                      "onUpdate:modelValue": E[3] || (E[3] = (H) => y.value = H),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Tt, y.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !y.value.trim() || w.value,
                      onClick: j
                    }, a(w.value ? "Adding..." : "Add Source"), 9, Wm)
                  ]),
                  k.value ? (s(), o("p", Gm, a(k.value), 1)) : d("", !0),
                  R.value ? (s(), o("p", jm, a(R.value), 1)) : d("", !0)
                ])
              ])) : d("", !0)
            ];
          }),
          footer: l(() => [
            e("button", {
              class: "btn-secondary",
              onClick: E[4] || (E[4] = (le) => T.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), I(We, { to: "body" }, [
          F.value ? (s(), o("div", {
            key: 0,
            class: me(["toast", F.value.type])
          }, a(F.value.message), 3)) : d("", !0)
        ]))
      ], 64);
    };
  }
}), vs = /* @__PURE__ */ Z(qm, [["__scopeId", "data-v-f15cbb56"]]), Hm = /* @__PURE__ */ Q({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: i, getStatus: p } = Ae(), g = $([]), u = $([]), v = $("production"), r = $(!1), m = $(null), y = $(""), w = $(!1), _ = $(null);
    function k() {
      w.value = !1, n("navigate", "model-index");
    }
    const R = D(
      () => g.value.reduce((G, T) => G + (T.size || 0), 0)
    ), F = D(() => {
      if (!y.value.trim()) return g.value;
      const G = y.value.toLowerCase();
      return g.value.filter((T) => T.filename.toLowerCase().includes(G));
    }), f = D(() => {
      if (!y.value.trim()) return u.value;
      const G = y.value.toLowerCase();
      return u.value.filter((T) => T.filename.toLowerCase().includes(G));
    }), C = D(() => {
      const G = {};
      for (const E of F.value) {
        const N = E.type || "other";
        G[N] || (G[N] = []), G[N].push(E);
      }
      const T = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(G).sort(([E], [N]) => {
        const le = T.indexOf(E), ee = T.indexOf(N);
        return le >= 0 && ee >= 0 ? le - ee : le >= 0 ? -1 : ee >= 0 ? 1 : E.localeCompare(N);
      }).map(([E, N]) => ({ type: E, models: N }));
    });
    function L(G) {
      if (!G) return "Unknown";
      const T = G / (1024 * 1024);
      return T >= 1024 ? `${(T / 1024).toFixed(1)} GB` : `${T.toFixed(0)} MB`;
    }
    function M(G) {
      _.value = G.hash || G.filename;
    }
    function x(G) {
      n("navigate", "model-index");
    }
    function j(G) {
      alert(`Download functionality not yet implemented for ${G}`);
    }
    async function B() {
      r.value = !0, m.value = null;
      try {
        const G = await i();
        g.value = G, u.value = [];
        const T = await p();
        v.value = T.environment || "production";
      } catch (G) {
        m.value = G instanceof Error ? G.message : "Failed to load models";
      } finally {
        r.value = !1;
      }
    }
    return Oe(B), (G, T) => (s(), o(V, null, [
      b(Ke, null, {
        header: l(() => [
          b(Je, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (E) => w.value = !0)
          })
        ]),
        search: l(() => [
          b(Lt, {
            modelValue: y.value,
            "onUpdate:modelValue": T[1] || (T[1] = (E) => y.value = E),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          r.value ? (s(), I(wt, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (s(), I(kt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            g.value.length ? (s(), I(jt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                h(" Total: " + a(g.value.length) + " models • " + a(L(R.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(V, null, te(C.value, (E) => (s(), I(Fe, {
              key: E.type,
              title: E.type.toUpperCase(),
              count: E.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(V, null, te(E.models, (N) => (s(), I(He, {
                  key: N.hash || N.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...T[4] || (T[4] = [
                    h("📦", -1)
                  ])]),
                  title: l(() => [
                    h(a(N.filename), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(L(N.size)), 1)
                  ]),
                  details: l(() => [
                    b(Ue, {
                      label: "Used by:",
                      value: (N.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    b(Ue, {
                      label: "Path:",
                      value: N.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    b(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (le) => M(N)
                    }, {
                      default: l(() => [...T[5] || (T[5] = [
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
            f.value.length ? (s(), I(Fe, {
              key: 1,
              title: "MISSING",
              count: f.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, te(f.value, (E) => (s(), I(He, {
                  key: E.filename,
                  status: "broken"
                }, {
                  icon: l(() => [...T[6] || (T[6] = [
                    h("⚠", -1)
                  ])]),
                  title: l(() => [
                    h(a(E.filename), 1)
                  ]),
                  subtitle: l(() => [...T[7] || (T[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: l(() => {
                    var N;
                    return [
                      b(Ue, {
                        label: "Required by:",
                        value: ((N = E.workflow_names) == null ? void 0 : N.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: l(() => [
                    b(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (N) => j(E.filename)
                    }, {
                      default: l(() => [...T[8] || (T[8] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (N) => x(E.filename)
                    }, {
                      default: l(() => [...T[9] || (T[9] = [
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
            !F.value.length && !f.value.length ? (s(), I(rt, {
              key: 2,
              icon: "📭",
              message: y.value ? `No models match '${y.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(mt, {
        show: w.value,
        title: "About Environment Models",
        onClose: T[2] || (T[2] = (E) => w.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            T[10] || (T[10] = h(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(v.value) + '"', 1),
            T[11] || (T[11] = h(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: l(() => [
          b(se, {
            variant: "primary",
            onClick: k
          }, {
            default: l(() => [...T[12] || (T[12] = [
              h(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (s(), I(vs, {
        key: 0,
        identifier: _.value,
        onClose: T[3] || (T[3] = (E) => _.value = null)
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), Km = /* @__PURE__ */ Z(Hm, [["__scopeId", "data-v-cb4f12b3"]]), Jm = {
  key: 0,
  class: "indexing-progress"
}, Ym = { class: "progress-info" }, Xm = { class: "progress-label" }, Qm = { class: "progress-count" }, Zm = { class: "progress-bar" }, ev = { class: "modal-content" }, tv = { class: "modal-header" }, sv = { class: "modal-body" }, ov = { class: "input-group" }, nv = { class: "current-path" }, av = { class: "input-group" }, lv = { class: "modal-footer" }, iv = { class: "modal-content" }, rv = { class: "modal-header" }, dv = { class: "modal-body" }, cv = { class: "input-group" }, uv = { class: "input-group" }, mv = { class: "modal-footer" }, vv = /* @__PURE__ */ Q({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: i,
      getModelsDirectory: p,
      setModelsDirectory: g
    } = Ae(), { addToQueue: u } = Gt(), v = c, r = $([]), m = $(!1), y = $(!1), w = $(null), _ = $(""), k = $(!1), R = $(null), F = $(!1), f = $(null), C = $(""), L = $(!1), M = $(!1), x = $(""), j = $(""), B = $(null), G = D(
      () => r.value.reduce((P, S) => P + (S.size || 0), 0)
    ), T = D(() => {
      if (!_.value.trim()) return r.value;
      const P = _.value.toLowerCase();
      return r.value.filter((S) => {
        const oe = S, ne = S.sha256 || oe.sha256_hash || "";
        return S.filename.toLowerCase().includes(P) || ne.toLowerCase().includes(P);
      });
    }), E = D(() => {
      const P = {};
      for (const oe of T.value) {
        const ne = oe.type || "other";
        P[ne] || (P[ne] = []), P[ne].push(oe);
      }
      const S = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(P).sort(([oe], [ne]) => {
        const Te = S.indexOf(oe), _e = S.indexOf(ne);
        return Te >= 0 && _e >= 0 ? Te - _e : Te >= 0 ? -1 : _e >= 0 ? 1 : oe.localeCompare(ne);
      }).map(([oe, ne]) => ({ type: oe, models: ne }));
    });
    function N(P) {
      if (!P) return "Unknown";
      const S = 1024 * 1024 * 1024, oe = 1024 * 1024;
      return P >= S ? `${(P / S).toFixed(1)} GB` : P >= oe ? `${(P / oe).toFixed(0)} MB` : `${(P / 1024).toFixed(0)} KB`;
    }
    function le(P) {
      R.value = P.hash || P.filename;
    }
    async function ee() {
      y.value = !0, w.value = null;
      try {
        const P = await i();
        await H(), P.changes > 0 && console.log(`Scan complete: ${P.changes} changes detected`);
      } catch (P) {
        w.value = P instanceof Error ? P.message : "Failed to scan models";
      } finally {
        y.value = !1;
      }
    }
    async function Y() {
      if (C.value.trim()) {
        L.value = !0, w.value = null;
        try {
          const P = await g(C.value.trim());
          f.value = P.path, F.value = !1, C.value = "", await H(), console.log(`Directory changed: ${P.models_indexed} models indexed`), v("refresh");
        } catch (P) {
          w.value = P instanceof Error ? P.message : "Failed to change directory";
        } finally {
          L.value = !1;
        }
      }
    }
    function re() {
      if (!x.value.trim() || !j.value.trim()) return;
      const P = j.value.split("/").pop() || "model.safetensors";
      u([{
        workflow: "__manual__",
        filename: P,
        url: x.value.trim(),
        targetPath: j.value.trim()
      }]), x.value = "", j.value = "", M.value = !1;
    }
    async function H() {
      m.value = !0, w.value = null;
      try {
        r.value = await n();
      } catch (P) {
        w.value = P instanceof Error ? P.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function U() {
      try {
        const P = await p();
        f.value = P.path;
      } catch {
      }
    }
    return Oe(() => {
      H(), U();
    }), (P, S) => (s(), o(V, null, [
      b(Ke, null, {
        header: l(() => [
          b(Je, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: S[2] || (S[2] = (oe) => k.value = !0)
          }, {
            actions: l(() => [
              b(se, {
                variant: "primary",
                size: "sm",
                disabled: y.value,
                onClick: ee
              }, {
                default: l(() => [
                  h(a(y.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(se, {
                variant: "primary",
                size: "sm",
                onClick: S[0] || (S[0] = (oe) => F.value = !0)
              }, {
                default: l(() => [...S[15] || (S[15] = [
                  h(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              b(se, {
                variant: "primary",
                size: "sm",
                onClick: S[1] || (S[1] = (oe) => M.value = !0)
              }, {
                default: l(() => [...S[16] || (S[16] = [
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
          B.value ? (s(), o("div", Jm, [
            e("div", Ym, [
              e("span", Xm, a(B.value.message), 1),
              e("span", Qm, a(B.value.current) + "/" + a(B.value.total), 1)
            ]),
            e("div", Zm, [
              e("div", {
                class: "progress-fill",
                style: yt({ width: `${B.value.current / B.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : d("", !0),
          b(Lt, {
            modelValue: _.value,
            "onUpdate:modelValue": S[3] || (S[3] = (oe) => _.value = oe),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          m.value || B.value ? (s(), I(wt, {
            key: 0,
            message: B.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : w.value ? (s(), I(kt, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: H
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            r.value.length ? (s(), I(jt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                h(" Total: " + a(r.value.length) + " models • " + a(N(G.value)), 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(V, null, te(E.value, (oe) => (s(), I(Fe, {
              key: oe.type,
              title: oe.type.toUpperCase(),
              count: oe.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: l(() => [
                (s(!0), o(V, null, te(oe.models, (ne) => (s(), I(He, {
                  key: ne.sha256 || ne.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...S[17] || (S[17] = [
                    h("📦", -1)
                  ])]),
                  title: l(() => [
                    h(a(ne.filename), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(N(ne.size)), 1)
                  ]),
                  details: l(() => [
                    b(Ue, {
                      label: "Hash:",
                      value: ne.hash ? ne.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    b(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Te) => le(ne)
                    }, {
                      default: l(() => [...S[18] || (S[18] = [
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
            T.value.length ? d("", !0) : (s(), I(rt, {
              key: 1,
              icon: "📭",
              message: _.value ? `No models match '${_.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      b(mt, {
        show: k.value,
        title: "About Workspace Model Index",
        onClose: S[4] || (S[4] = (oe) => k.value = !1)
      }, {
        content: l(() => [...S[19] || (S[19] = [
          e("p", null, [
            h(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            h(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      R.value ? (s(), I(vs, {
        key: 0,
        identifier: R.value,
        onClose: S[5] || (S[5] = (oe) => R.value = null)
      }, null, 8, ["identifier"])) : d("", !0),
      (s(), I(We, { to: "body" }, [
        F.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[9] || (S[9] = Le((oe) => F.value = !1, ["self"]))
        }, [
          e("div", ev, [
            e("div", tv, [
              S[20] || (S[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: S[6] || (S[6] = (oe) => F.value = !1)
              }, "✕")
            ]),
            e("div", sv, [
              e("div", ov, [
                S[21] || (S[21] = e("label", null, "Current Directory", -1)),
                e("code", nv, a(f.value || "Not set"), 1)
              ]),
              e("div", av, [
                S[22] || (S[22] = e("label", null, "New Directory Path", -1)),
                b(it, {
                  modelValue: C.value,
                  "onUpdate:modelValue": S[7] || (S[7] = (oe) => C.value = oe),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              S[23] || (S[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", lv, [
              b(pe, {
                variant: "secondary",
                onClick: S[8] || (S[8] = (oe) => F.value = !1)
              }, {
                default: l(() => [...S[24] || (S[24] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              b(pe, {
                variant: "primary",
                disabled: !C.value.trim() || L.value,
                loading: L.value,
                onClick: Y
              }, {
                default: l(() => [
                  h(a(L.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : d("", !0)
      ])),
      (s(), I(We, { to: "body" }, [
        M.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[14] || (S[14] = Le((oe) => M.value = !1, ["self"]))
        }, [
          e("div", iv, [
            e("div", rv, [
              S[25] || (S[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: S[10] || (S[10] = (oe) => M.value = !1)
              }, "✕")
            ]),
            e("div", dv, [
              e("div", cv, [
                S[26] || (S[26] = e("label", null, "Download URL", -1)),
                b(it, {
                  modelValue: x.value,
                  "onUpdate:modelValue": S[11] || (S[11] = (oe) => x.value = oe),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", uv, [
                S[27] || (S[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                b(it, {
                  modelValue: j.value,
                  "onUpdate:modelValue": S[12] || (S[12] = (oe) => j.value = oe),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              S[28] || (S[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", mv, [
              b(pe, {
                variant: "secondary",
                onClick: S[13] || (S[13] = (oe) => M.value = !1)
              }, {
                default: l(() => [...S[29] || (S[29] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              b(pe, {
                variant: "primary",
                disabled: !x.value.trim() || !j.value.trim(),
                onClick: re
              }, {
                default: l(() => [...S[30] || (S[30] = [
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
}), fv = /* @__PURE__ */ Z(vv, [["__scopeId", "data-v-73b78d84"]]), gv = { class: "node-details" }, pv = { class: "status-row" }, hv = {
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
}, Tv = /* @__PURE__ */ Q({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, i = c, p = D(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), g = D(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), u = D(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (v, r) => (s(), I(Ye, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: r[1] || (r[1] = (m) => i("close"))
    }, {
      body: l(() => [
        e("div", gv, [
          e("div", pv, [
            r[2] || (r[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: me(["status-badge", p.value])
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
              (s(!0), o(V, null, te(t.node.used_in_workflows, (m) => (s(), o("span", {
                key: m,
                class: "workflow-tag"
              }, a(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: l(() => [
        b(pe, {
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
}), Rv = /* @__PURE__ */ Z(Tv, [["__scopeId", "data-v-b342f626"]]), zv = { class: "dialog-message" }, Lv = {
  key: 0,
  class: "dialog-details"
}, Pv = {
  key: 1,
  class: "dialog-warning"
}, Dv = /* @__PURE__ */ Q({
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
    return (c, n) => (s(), I(Ye, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (i) => c.$emit("cancel"))
    }, {
      body: l(() => [
        e("p", zv, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", Lv, [
          (s(!0), o(V, null, te(t.details, (i, p) => (s(), o("div", {
            key: p,
            class: "detail-item"
          }, " • " + a(i), 1))), 128))
        ])) : d("", !0),
        t.warning ? (s(), o("p", Pv, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          h(" " + a(t.warning), 1)
        ])) : d("", !0)
      ]),
      footer: l(() => [
        b(pe, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (i) => c.$emit("cancel"))
        }, {
          default: l(() => [
            h(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), I(pe, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (i) => c.$emit("secondary"))
        }, {
          default: l(() => [
            h(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        b(pe, {
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
}), Bs = /* @__PURE__ */ Z(Dv, [["__scopeId", "data-v-3670b9f5"]]), Nv = { class: "mismatch-warning" }, Uv = { class: "version-mismatch" }, Ov = { class: "version-actual" }, Bv = { class: "version-expected" }, Fv = { key: 0 }, Av = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Vv = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Wv = /* @__PURE__ */ Q({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getNodes: p, trackNodeAsDev: g, installNode: u, uninstallNode: v } = Ae(), r = $({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), m = $(!1), y = $(null), w = $(""), _ = $(!1), k = $(null), R = $(null), F = D(() => {
      if (!w.value.trim()) return r.value.nodes;
      const ee = w.value.toLowerCase();
      return r.value.nodes.filter(
        (Y) => {
          var re, H;
          return Y.name.toLowerCase().includes(ee) || ((re = Y.description) == null ? void 0 : re.toLowerCase().includes(ee)) || ((H = Y.repository) == null ? void 0 : H.toLowerCase().includes(ee));
        }
      );
    }), f = D(
      () => F.value.filter((ee) => ee.installed && ee.tracked)
    ), C = D(
      () => F.value.filter((ee) => !ee.installed && ee.tracked)
    ), L = D(
      () => F.value.filter((ee) => ee.installed && !ee.tracked)
    );
    function M(ee) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[ee] || ee;
    }
    const x = D(() => n.versionMismatches.length > 0);
    function j(ee) {
      return !ee.used_in_workflows || ee.used_in_workflows.length === 0 ? "Not used in any workflows" : ee.used_in_workflows.length === 1 ? ee.used_in_workflows[0] : `${ee.used_in_workflows.length} workflows`;
    }
    function B(ee) {
      k.value = ee;
    }
    function G() {
      i("open-node-manager");
    }
    function T(ee) {
      R.value = {
        title: "Track as Development Node",
        message: `Track "${ee}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          R.value = null;
          try {
            m.value = !0;
            const Y = await g(ee);
            Y.status === "success" ? (i("toast", `✓ Node "${ee}" tracked as development`, "success"), await le()) : i("toast", `Failed to track node: ${Y.message || "Unknown error"}`, "error");
          } catch (Y) {
            i("toast", `Error tracking node: ${Y instanceof Error ? Y.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function E(ee) {
      R.value = {
        title: "Remove Untracked Node",
        message: `Remove "${ee}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          R.value = null;
          try {
            m.value = !0;
            const Y = await v(ee);
            Y.status === "success" ? (i("toast", `✓ Node "${ee}" removed`, "success"), await le()) : i("toast", `Failed to remove node: ${Y.message || "Unknown error"}`, "error");
          } catch (Y) {
            i("toast", `Error removing node: ${Y instanceof Error ? Y.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function N(ee) {
      R.value = {
        title: "Install Missing Node",
        message: `Install "${ee}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          R.value = null;
          try {
            m.value = !0;
            const Y = await u(ee);
            Y.status === "success" ? (i("toast", `✓ Node "${ee}" installed`, "success"), await le()) : i("toast", `Failed to install node: ${Y.message || "Unknown error"}`, "error");
          } catch (Y) {
            i("toast", `Error installing node: ${Y instanceof Error ? Y.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    async function le() {
      m.value = !0, y.value = null;
      try {
        r.value = await p();
      } catch (ee) {
        y.value = ee instanceof Error ? ee.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return Oe(le), (ee, Y) => (s(), o(V, null, [
      b(Ke, null, {
        header: l(() => [
          b(Je, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: Y[0] || (Y[0] = (re) => _.value = !0)
          }, {
            actions: l(() => [
              b(se, {
                variant: "primary",
                size: "sm",
                onClick: G
              }, {
                default: l(() => [...Y[7] || (Y[7] = [
                  h(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          b(Lt, {
            modelValue: w.value,
            "onUpdate:modelValue": Y[1] || (Y[1] = (re) => w.value = re),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          m.value ? (s(), I(wt, {
            key: 0,
            message: "Loading nodes..."
          })) : y.value ? (s(), I(kt, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: le
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            r.value.total_count ? (s(), I(jt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                h(a(r.value.installed_count) + " installed ", 1),
                r.value.missing_count ? (s(), o(V, { key: 0 }, [
                  h(" • " + a(r.value.missing_count) + " missing", 1)
                ], 64)) : d("", !0),
                r.value.untracked_count ? (s(), o(V, { key: 1 }, [
                  h(" • " + a(r.value.untracked_count) + " untracked", 1)
                ], 64)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            x.value ? (s(), I(Fe, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: t.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                e("div", Nv, [
                  Y[8] || (Y[8] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (s(!0), o(V, null, te(t.versionMismatches, (re) => (s(), I(He, {
                  key: re.name,
                  status: "warning"
                }, {
                  icon: l(() => [...Y[9] || (Y[9] = [
                    h("⚠", -1)
                  ])]),
                  title: l(() => [
                    h(a(re.name), 1)
                  ]),
                  subtitle: l(() => [
                    e("span", Uv, [
                      e("span", Ov, a(re.actual), 1),
                      Y[10] || (Y[10] = e("span", { class: "version-arrow" }, "→", -1)),
                      e("span", Bv, a(re.expected), 1)
                    ])
                  ]),
                  actions: l(() => [
                    b(se, {
                      variant: "warning",
                      size: "sm",
                      onClick: Y[2] || (Y[2] = (H) => i("repair-environment"))
                    }, {
                      default: l(() => [...Y[11] || (Y[11] = [
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
            L.value.length ? (s(), I(Fe, {
              key: 2,
              title: "UNTRACKED",
              count: L.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(V, null, te(L.value, (re) => (s(), I(He, {
                  key: re.name,
                  status: "warning"
                }, {
                  icon: l(() => [...Y[12] || (Y[12] = [
                    h("?", -1)
                  ])]),
                  title: l(() => [
                    h(a(re.name), 1)
                  ]),
                  subtitle: l(() => [...Y[13] || (Y[13] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: l(() => [
                    b(Ue, {
                      label: "Used by:",
                      value: j(re)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    b(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (H) => B(re)
                    }, {
                      default: l(() => [...Y[14] || (Y[14] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (H) => T(re.name)
                    }, {
                      default: l(() => [...Y[15] || (Y[15] = [
                        h(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(se, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (H) => E(re.name)
                    }, {
                      default: l(() => [...Y[16] || (Y[16] = [
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
            f.value.length ? (s(), I(Fe, {
              key: 3,
              title: "INSTALLED",
              count: f.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(V, null, te(f.value, (re) => (s(), I(He, {
                  key: re.name,
                  status: "synced"
                }, {
                  icon: l(() => [
                    h(a(re.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: l(() => [
                    h(a(re.name), 1)
                  ]),
                  subtitle: l(() => [
                    re.version ? (s(), o("span", Fv, a(re.source === "development" ? "" : "v") + a(re.version), 1)) : (s(), o("span", Av, "version unknown")),
                    e("span", Vv, " • " + a(M(re.source)), 1)
                  ]),
                  details: l(() => [
                    b(Ue, {
                      label: "Used by:",
                      value: j(re)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    b(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (H) => B(re)
                    }, {
                      default: l(() => [...Y[17] || (Y[17] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: G
                    }, {
                      default: l(() => [...Y[18] || (Y[18] = [
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
            C.value.length ? (s(), I(Fe, {
              key: 4,
              title: "MISSING",
              count: C.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(V, null, te(C.value, (re) => (s(), I(He, {
                  key: re.name,
                  status: "missing"
                }, {
                  icon: l(() => [...Y[19] || (Y[19] = [
                    h("!", -1)
                  ])]),
                  title: l(() => [
                    h(a(re.name), 1)
                  ]),
                  subtitle: l(() => [...Y[20] || (Y[20] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: l(() => [
                    b(Ue, {
                      label: "Required by:",
                      value: j(re)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    b(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (H) => B(re)
                    }, {
                      default: l(() => [...Y[21] || (Y[21] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (H) => N(re.name)
                    }, {
                      default: l(() => [...Y[22] || (Y[22] = [
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
            !f.value.length && !C.value.length && !L.value.length ? (s(), I(rt, {
              key: 5,
              icon: "📭",
              message: w.value ? `No nodes match '${w.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(mt, {
        show: _.value,
        title: "About Custom Nodes",
        onClose: Y[4] || (Y[4] = (re) => _.value = !1)
      }, {
        content: l(() => [...Y[23] || (Y[23] = [
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
          b(se, {
            variant: "primary",
            onClick: Y[3] || (Y[3] = (re) => _.value = !1)
          }, {
            default: l(() => [...Y[24] || (Y[24] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), I(Rv, {
        key: 0,
        node: k.value,
        onClose: Y[5] || (Y[5] = (re) => k.value = null)
      }, null, 8, ["node"])) : d("", !0),
      R.value ? (s(), I(Bs, {
        key: 1,
        title: R.value.title,
        message: R.value.message,
        warning: R.value.warning,
        "confirm-label": R.value.confirmLabel,
        destructive: R.value.destructive,
        onConfirm: R.value.onConfirm,
        onCancel: Y[6] || (Y[6] = (re) => R.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : d("", !0)
    ], 64));
  }
}), Gv = /* @__PURE__ */ Z(Wv, [["__scopeId", "data-v-1555a802"]]);
function Fs(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const jv = { class: "remote-url-display" }, qv = ["title"], Hv = ["title"], Kv = {
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
}, Yv = /* @__PURE__ */ Q({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = $(!1), i = D(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const g = c.url.slice(0, Math.floor(c.maxLength * 0.6)), u = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${g}...${u}`;
    });
    async function p() {
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
      }, a(i.value), 9, qv),
      e("button", {
        class: me(["copy-btn", { copied: n.value }]),
        onClick: p,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", Jv, [...u[1] || (u[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", Kv, [...u[0] || (u[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Hv)
    ]));
  }
}), Xv = /* @__PURE__ */ Z(Yv, [["__scopeId", "data-v-7768a58d"]]), Qv = { class: "remote-title" }, Zv = {
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
}, lf = /* @__PURE__ */ Q({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const c = t, n = D(() => c.fetchingRemote === c.remote.name), i = D(() => c.remote.is_default), p = D(() => c.syncStatus && c.syncStatus.behind > 0), g = D(() => c.syncStatus && c.syncStatus.ahead > 0), u = D(() => c.remote.push_url !== c.remote.fetch_url), v = D(() => {
      const m = c.remote.fetch_url, y = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return y ? `https://${y[1]}/${y[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), r = D(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, y) => (s(), I(He, {
      status: i.value ? "synced" : void 0
    }, Wt({
      icon: l(() => [
        h(a(i.value ? "🔗" : "🌐"), 1)
      ]),
      title: l(() => [
        e("div", Qv, [
          e("span", null, a(t.remote.name), 1),
          i.value ? (s(), o("span", Zv, "DEFAULT")) : d("", !0),
          t.syncStatus ? (s(), o("span", ef, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(V, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", tf, "↑" + a(t.syncStatus.ahead), 1)) : d("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", sf, "↓" + a(t.syncStatus.behind), 1)) : d("", !0)
            ], 64)) : (s(), o("span", of, "✓ synced"))
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
          onClick: y[0] || (y[0] = Le(() => {
          }, ["stop"]))
        }, a(r.value), 9, nf)) : (s(), o("span", af, a(r.value), 1))
      ]),
      actions: l(() => [
        b(se, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: y[1] || (y[1] = (w) => m.$emit("fetch", t.remote.name))
        }, {
          default: l(() => [...y[6] || (y[6] = [
            h(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        b(se, {
          variant: p.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: y[2] || (y[2] = (w) => m.$emit("pull", t.remote.name))
        }, {
          default: l(() => [
            h(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(se, {
          variant: g.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: y[3] || (y[3] = (w) => m.$emit("push", t.remote.name))
        }, {
          default: l(() => [
            h(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(se, {
          variant: "secondary",
          size: "xs",
          onClick: y[4] || (y[4] = (w) => m.$emit("edit", t.remote.name))
        }, {
          default: l(() => [...y[7] || (y[7] = [
            h(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        i.value ? d("", !0) : (s(), I(se, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: y[5] || (y[5] = (w) => m.$emit("remove", t.remote.name))
        }, {
          default: l(() => [...y[8] || (y[8] = [
            h(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      u.value ? {
        name: "details",
        fn: l(() => [
          t.remote.push_url !== t.remote.fetch_url ? (s(), I(Ue, {
            key: 0,
            label: "Push URL:"
          }, {
            default: l(() => [
              b(Xv, {
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
}), rf = /* @__PURE__ */ Z(lf, [["__scopeId", "data-v-8310f3a8"]]), df = ["for"], cf = {
  key: 0,
  class: "base-form-field-required"
}, uf = { class: "base-form-field-input" }, mf = {
  key: 1,
  class: "base-form-field-error"
}, vf = {
  key: 2,
  class: "base-form-field-hint"
}, ff = /* @__PURE__ */ Q({
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
    const c = t, n = D(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, p) => (s(), o("div", {
      class: me(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        h(a(t.label) + " ", 1),
        t.required ? (s(), o("span", cf, "*")) : d("", !0)
      ], 8, df)) : d("", !0),
      e("div", uf, [
        Se(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", mf, a(t.error), 1)) : t.hint ? (s(), o("span", vf, a(t.hint), 1)) : d("", !0)
    ], 2));
  }
}), os = /* @__PURE__ */ Z(ff, [["__scopeId", "data-v-9a1cf296"]]), gf = { class: "remote-form" }, pf = { class: "form-header" }, hf = { class: "form-body" }, yf = {
  key: 0,
  class: "form-error"
}, wf = { class: "form-actions" }, kf = /* @__PURE__ */ Q({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, p = $({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), g = $(!1), u = $(null);
    _t(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      p.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const v = D(() => p.value.name.trim() !== "" && p.value.fetchUrl.trim() !== "");
    async function r() {
      if (!(!v.value || g.value)) {
        u.value = null, g.value = !0;
        try {
          i("submit", p.value);
        } catch (m) {
          u.value = m instanceof Error ? m.message : "Failed to submit form";
        } finally {
          g.value = !1;
        }
      }
    }
    return (m, y) => (s(), o("div", gf, [
      e("div", pf, [
        b(st, null, {
          default: l(() => [
            h(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", hf, [
        b(os, {
          label: "Remote Name",
          required: ""
        }, {
          default: l(() => [
            b(it, {
              modelValue: p.value.name,
              "onUpdate:modelValue": y[0] || (y[0] = (w) => p.value.name = w),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        b(os, {
          label: "Fetch URL",
          required: ""
        }, {
          default: l(() => [
            b(it, {
              modelValue: p.value.fetchUrl,
              "onUpdate:modelValue": y[1] || (y[1] = (w) => p.value.fetchUrl = w),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        b(os, { label: "Push URL (optional)" }, {
          default: l(() => [
            b(it, {
              modelValue: p.value.pushUrl,
              "onUpdate:modelValue": y[2] || (y[2] = (w) => p.value.pushUrl = w),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (s(), o("div", yf, a(u.value), 1)) : d("", !0)
      ]),
      e("div", wf, [
        b(se, {
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
        b(se, {
          variant: "ghost",
          size: "md",
          onClick: y[3] || (y[3] = (w) => m.$emit("cancel"))
        }, {
          default: l(() => [...y[4] || (y[4] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), bf = /* @__PURE__ */ Z(kf, [["__scopeId", "data-v-56021b18"]]), _f = { class: "conflict-summary-box" }, $f = { class: "summary-header" }, Cf = { class: "summary-text" }, xf = { key: 0 }, Sf = {
  key: 1,
  class: "all-resolved"
}, If = { class: "summary-progress" }, Ef = { class: "progress-bar" }, Mf = { class: "progress-text" }, Tf = /* @__PURE__ */ Q({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const c = t, n = D(
      () => c.conflictCount > 0 ? c.resolvedCount / c.conflictCount * 100 : 0
    );
    return (i, p) => (s(), o("div", _f, [
      e("div", $f, [
        p[0] || (p[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", Cf, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (s(), o("p", xf, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (s(), o("p", Sf, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", If, [
        e("div", Ef, [
          e("div", {
            class: "progress-fill",
            style: yt({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", Mf, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), Rf = /* @__PURE__ */ Z(Tf, [["__scopeId", "data-v-4e9e6cc9"]]), zf = { class: "modal-header" }, Lf = { class: "modal-title" }, Pf = { class: "modal-body" }, Df = {
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
}, jf = { class: "change-count" }, qf = { class: "change-list" }, Hf = {
  key: 2,
  class: "change-group"
}, Kf = { class: "change-count" }, Jf = { class: "change-list" }, Yf = {
  key: 2,
  class: "strategy-section"
}, Xf = { class: "radio-group" }, Qf = { class: "radio-option" }, Zf = { class: "radio-option" }, eg = { class: "radio-option" }, tg = {
  key: 3,
  class: "up-to-date"
}, sg = { class: "modal-actions" }, Ss = "comfygit.pullModelStrategy", og = /* @__PURE__ */ Q({
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
    const n = t, i = c, p = $(localStorage.getItem(Ss) || "skip");
    _t(p, (f) => {
      localStorage.setItem(Ss, f);
    });
    const g = D(() => {
      var f;
      return ((f = n.error) == null ? void 0 : f.toLowerCase().includes("unrelated histories")) ?? !1;
    }), u = D(() => {
      if (!n.preview) return 0;
      const f = n.preview.changes.workflows;
      return f.added.length + f.modified.length + f.deleted.length;
    }), v = D(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), r = D(() => {
      var f;
      return u.value > 0 || v.value > 0 || (((f = n.preview) == null ? void 0 : f.changes.models.count) || 0) > 0;
    }), m = D(() => n.preview && Fs(n.preview) ? n.preview : null), y = D(() => {
      var f;
      return ((f = m.value) == null ? void 0 : f.workflow_conflicts.length) ?? 0;
    }), w = D(() => {
      var f;
      return ((f = n.conflictResolutions) == null ? void 0 : f.size) ?? 0;
    }), _ = D(
      () => y.value > 0 && w.value === y.value
    ), k = D(() => !(!n.preview || n.preview.has_uncommitted_changes || m.value && !_.value));
    function R(f) {
      if (!m.value) return !1;
      const C = f.replace(/\.json$/, "");
      return m.value.workflow_conflicts.some((L) => L.name === C);
    }
    function F(f) {
      const C = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      i("pull", { modelStrategy: p.value, force: f, resolutions: C });
    }
    return (f, C) => {
      var L, M;
      return s(), I(We, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[11] || (C[11] = (x) => f.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: C[10] || (C[10] = Le(() => {
            }, ["stop"]))
          }, [
            e("div", zf, [
              e("h3", Lf, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (x) => f.$emit("close"))
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
                h(" Loading preview... ", -1)
              ])])) : (L = t.preview) != null && L.has_uncommitted_changes ? (s(), o(V, { key: 2 }, [
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
                  h(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                r.value ? (s(), o("div", Bf, [
                  C[21] || (C[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  u.value > 0 ? (s(), o("details", Ff, [
                    e("summary", null, [
                      C[18] || (C[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", Af, a(u.value) + " changes", 1)
                    ]),
                    e("div", Vf, [
                      (s(!0), o(V, null, te(t.preview.changes.workflows.added, (x) => (s(), o("div", {
                        key: "a-" + x,
                        class: "change-item add"
                      }, " + " + a(x), 1))), 128)),
                      (s(!0), o(V, null, te(t.preview.changes.workflows.modified, (x) => (s(), o("div", {
                        key: "m-" + x,
                        class: "change-item modify"
                      }, [
                        h(" ~ " + a(x) + " ", 1),
                        R(x) ? (s(), o("span", Wf, "CONFLICT")) : d("", !0)
                      ]))), 128)),
                      (s(!0), o(V, null, te(t.preview.changes.workflows.deleted, (x) => (s(), o("div", {
                        key: "d-" + x,
                        class: "change-item delete"
                      }, " - " + a(x), 1))), 128))
                    ])
                  ])) : d("", !0),
                  v.value > 0 ? (s(), o("details", Gf, [
                    e("summary", null, [
                      C[19] || (C[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", jf, a(v.value) + " to install", 1)
                    ]),
                    e("div", qf, [
                      (s(!0), o(V, null, te(t.preview.changes.nodes.to_install, (x) => (s(), o("div", {
                        key: x,
                        class: "change-item add"
                      }, " + " + a(x), 1))), 128))
                    ])
                  ])) : d("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", Hf, [
                    e("summary", null, [
                      C[20] || (C[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", Kf, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", Jf, [
                      (s(!0), o(V, null, te(t.preview.changes.models.referenced, (x) => (s(), o("div", {
                        key: x,
                        class: "change-item"
                      }, a(x), 1))), 128))
                    ])
                  ])) : d("", !0)
                ])) : d("", !0),
                m.value ? (s(), I(Rf, {
                  key: 1,
                  "conflict-count": y.value,
                  "resolved-count": w.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : d("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", Yf, [
                  C[26] || (C[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", Xf, [
                    e("label", Qf, [
                      Be(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[1] || (C[1] = (x) => p.value = x),
                        value: "all"
                      }, null, 512), [
                        [Kt, p.value]
                      ]),
                      C[22] || (C[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", Zf, [
                      Be(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[2] || (C[2] = (x) => p.value = x),
                        value: "required"
                      }, null, 512), [
                        [Kt, p.value]
                      ]),
                      C[23] || (C[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", eg, [
                      Be(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[3] || (C[3] = (x) => p.value = x),
                        value: "skip"
                      }, null, 512), [
                        [Kt, p.value]
                      ]),
                      C[24] || (C[24] = e("span", null, "Skip model downloads", -1)),
                      C[25] || (C[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  C[27] || (C[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : d("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", tg, [
                  C[28] || (C[28] = e("span", { class: "icon" }, "✓", -1)),
                  h(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : d("", !0)
              ], 64)) : d("", !0)
            ]),
            e("div", sg, [
              b(se, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (x) => f.$emit("close"))
              }, {
                default: l(() => [...C[29] || (C[29] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(V, { key: 0 }, [
                b(se, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: C[5] || (C[5] = (x) => F(!1))
                }, {
                  default: l(() => [...C[30] || (C[30] = [
                    h(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                b(se, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: C[6] || (C[6] = (x) => F(!0))
                }, {
                  default: l(() => [...C[31] || (C[31] = [
                    h(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (M = t.preview) != null && M.has_uncommitted_changes ? (s(), I(se, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: C[7] || (C[7] = (x) => F(!0))
              }, {
                default: l(() => [...C[32] || (C[32] = [
                  h(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(V, { key: 2 }, [
                m.value && !_.value ? (s(), I(se, {
                  key: 0,
                  variant: "primary",
                  onClick: C[8] || (C[8] = (x) => i("openConflictResolution"))
                }, {
                  default: l(() => [
                    h(" Resolve Conflicts (" + a(w.value) + "/" + a(y.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), I(se, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !k.value,
                  onClick: C[9] || (C[9] = (x) => F(!1))
                }, {
                  default: l(() => [...C[33] || (C[33] = [
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
}), ng = /* @__PURE__ */ Z(og, [["__scopeId", "data-v-300c7b2f"]]), ag = { class: "modal-header" }, lg = { class: "modal-title" }, ig = { class: "modal-body" }, rg = {
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
}, Cg = { class: "modal-actions" }, xg = /* @__PURE__ */ Q({
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
    const n = c, i = $(!1);
    function p(g) {
      n("push", { force: g });
    }
    return (g, u) => {
      var v, r, m;
      return s(), I(We, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: u[7] || (u[7] = (y) => g.$emit("close"))
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
                onClick: u[0] || (u[0] = (y) => g.$emit("close"))
              }, "✕")
            ]),
            e("div", ig, [
              t.loading ? (s(), o("div", rg, [...u[8] || (u[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                h(" Loading preview... ", -1)
              ])])) : (v = t.preview) != null && v.has_uncommitted_changes ? (s(), o("div", dg, [...u[9] || (u[9] = [
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
                    (s(!0), o(V, null, te(t.preview.commits, (y) => (s(), o("div", {
                      key: y.hash,
                      class: "commit-item"
                    }, [
                      e("span", mg, a(y.short_hash || y.hash.slice(0, 7)), 1),
                      e("span", vg, a(y.message), 1),
                      e("span", fg, a(y.date_relative || y.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                e("div", gg, [
                  e("label", pg, [
                    Be(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": u[1] || (u[1] = (y) => i.value = y)
                    }, null, 512), [
                      [Xt, i.value]
                    ]),
                    u[11] || (u[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  u[12] || (u[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(V, { key: 3 }, [
                e("div", hg, [
                  u[14] || (u[14] = e("span", { class: "icon" }, "📤", -1)),
                  h(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", yg, [
                  u[15] || (u[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", wg, [
                    (s(!0), o(V, null, te(t.preview.commits, (y) => (s(), o("div", {
                      key: y.hash,
                      class: "commit-item"
                    }, [
                      e("span", kg, a(y.short_hash || y.hash.slice(0, 7)), 1),
                      e("span", bg, a(y.message), 1),
                      e("span", _g, a(y.date_relative || y.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", $g, [
                  u[16] || (u[16] = e("span", { class: "icon" }, "✓", -1)),
                  h(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : d("", !0)
            ]),
            e("div", Cg, [
              b(se, {
                variant: "secondary",
                onClick: u[2] || (u[2] = (y) => g.$emit("close"))
              }, {
                default: l(() => [...u[17] || (u[17] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = t.preview) != null && m.remote_has_new_commits ? (s(), o(V, { key: 0 }, [
                b(se, {
                  variant: "secondary",
                  onClick: u[3] || (u[3] = (y) => g.$emit("pull-first"))
                }, {
                  default: l(() => [...u[18] || (u[18] = [
                    h(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                b(se, {
                  variant: "destructive",
                  disabled: !i.value,
                  loading: t.pushing,
                  onClick: u[4] || (u[4] = (y) => p(!0))
                }, {
                  default: l(() => [...u[19] || (u[19] = [
                    h(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), I(se, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: u[5] || (u[5] = (y) => p(!1))
              }, {
                default: l(() => [...u[20] || (u[20] = [
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
}), Sg = /* @__PURE__ */ Z(xg, [["__scopeId", "data-v-bc6ded53"]]), Ig = { class: "resolution-choice-group" }, Eg = ["disabled"], Mg = ["disabled"], Tg = /* @__PURE__ */ Q({
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
        onClick: n[0] || (n[0] = (i) => c.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, Eg),
      e("button", {
        class: me(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (i) => c.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, Mg)
    ]));
  }
}), Rg = /* @__PURE__ */ Z(Tg, [["__scopeId", "data-v-985715ed"]]), zg = { class: "conflict-header" }, Lg = { class: "conflict-info" }, Pg = { class: "workflow-name" }, Dg = { class: "conflict-description" }, Ng = {
  key: 0,
  class: "resolved-badge"
}, Ug = { class: "resolved-text" }, Og = { class: "conflict-hashes" }, Bg = { class: "hash-item" }, Fg = { class: "hash-item" }, Ag = { class: "conflict-actions" }, Vg = /* @__PURE__ */ Q({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: c }) {
    const n = t, i = c, p = $(n.resolution);
    _t(() => n.resolution, (r) => {
      p.value = r;
    }), _t(p, (r) => {
      r && i("resolve", r);
    });
    const g = D(() => p.value !== null), u = D(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), v = D(() => {
      switch (p.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (r, m) => {
      var y, w;
      return s(), o("div", {
        class: me(["conflict-item", { resolved: g.value }])
      }, [
        e("div", zg, [
          m[2] || (m[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", Lg, [
            e("code", Pg, a(t.conflict.name) + ".json", 1),
            e("div", Dg, a(u.value), 1)
          ]),
          g.value ? (s(), o("div", Ng, [
            m[1] || (m[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", Ug, a(v.value), 1)
          ])) : d("", !0)
        ]),
        e("div", Og, [
          e("span", Bg, [
            m[3] || (m[3] = h("Your: ", -1)),
            e("code", null, a(((y = t.conflict.base_hash) == null ? void 0 : y.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", Fg, [
            m[4] || (m[4] = h("Theirs: ", -1)),
            e("code", null, a(((w = t.conflict.target_hash) == null ? void 0 : w.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", Ag, [
          b(Rg, {
            modelValue: p.value,
            "onUpdate:modelValue": m[0] || (m[0] = (_) => p.value = _),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), Wg = /* @__PURE__ */ Z(Vg, [["__scopeId", "data-v-506d3bbf"]]), Gg = { class: "resolution-content" }, jg = {
  key: 0,
  class: "error-box"
}, qg = { class: "resolution-header" }, Hg = { class: "header-stats" }, Kg = { class: "stat" }, Jg = { class: "stat-value" }, Yg = { class: "stat resolved" }, Xg = { class: "stat-value" }, Qg = {
  key: 0,
  class: "stat pending"
}, Zg = { class: "stat-value" }, ep = { class: "conflicts-list" }, tp = {
  key: 1,
  class: "all-resolved-message"
}, sp = /* @__PURE__ */ Q({
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
    const n = t, i = c, p = D(() => n.resolutions.size), g = D(() => n.workflowConflicts.length - p.value), u = D(() => p.value === n.workflowConflicts.length), v = D(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function r(_) {
      const k = n.resolutions.get(_);
      return (k == null ? void 0 : k.resolution) ?? null;
    }
    function m(_, k) {
      i("resolve", _, k);
    }
    function y() {
      i("close");
    }
    function w() {
      i("apply");
    }
    return (_, k) => (s(), I(Ye, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: y
    }, {
      body: l(() => [
        e("div", Gg, [
          t.error ? (s(), o("div", jg, [
            k[1] || (k[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              k[0] || (k[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : d("", !0),
          e("div", qg, [
            e("div", Hg, [
              e("div", Kg, [
                e("span", Jg, a(t.workflowConflicts.length), 1),
                k[2] || (k[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", Yg, [
                e("span", Xg, a(p.value), 1),
                k[3] || (k[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              g.value > 0 ? (s(), o("div", Qg, [
                e("span", Zg, a(g.value), 1),
                k[4] || (k[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : d("", !0)
            ]),
            k[5] || (k[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", ep, [
            (s(!0), o(V, null, te(t.workflowConflicts, (R) => (s(), I(Wg, {
              key: R.name,
              conflict: R,
              resolution: r(R.name),
              onResolve: (F) => m(R.name, F)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          u.value ? (s(), o("div", tp, [
            k[6] || (k[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(v.value) + '" to continue.', 1)
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        b(pe, {
          variant: "secondary",
          onClick: y
        }, {
          default: l(() => [...k[7] || (k[7] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        k[8] || (k[8] = e("div", { class: "footer-spacer" }, null, -1)),
        b(pe, {
          variant: "primary",
          disabled: !u.value || t.validating,
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
}), op = /* @__PURE__ */ Z(sp, [["__scopeId", "data-v-c58d150d"]]), np = { class: "node-conflict-item" }, ap = { class: "node-header" }, lp = { class: "node-name" }, ip = { class: "node-id" }, rp = { class: "version-comparison" }, dp = { class: "version yours" }, cp = { class: "version theirs" }, up = { class: "chosen-version" }, mp = { class: "chosen" }, vp = { class: "chosen-reason" }, fp = { class: "affected-workflows" }, gp = { class: "wf-source" }, pp = { class: "wf-version" }, hp = /* @__PURE__ */ Q({
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
          (s(!0), o(V, null, te(t.conflict.affected_workflows, (i) => (s(), o("li", {
            key: i.name
          }, [
            e("code", null, a(i.name), 1),
            e("span", gp, "(" + a(i.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", pp, "needs v" + a(i.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), yp = /* @__PURE__ */ Z(hp, [["__scopeId", "data-v-8b626725"]]), wp = { class: "validation-content" }, kp = {
  key: 0,
  class: "compatible-message"
}, bp = { class: "conflicts-list" }, _p = {
  key: 2,
  class: "warnings-section"
}, $p = /* @__PURE__ */ Q({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, p = D(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (g, u) => (s(), I(Ye, {
      title: "Compatibility Check",
      size: "lg",
      onClose: u[3] || (u[3] = (v) => i("cancel"))
    }, {
      body: l(() => [
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
              (s(!0), o(V, null, te(t.validation.node_conflicts, (v) => (s(), I(yp, {
                key: v.node_id,
                conflict: v
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
              (s(!0), o(V, null, te(t.validation.warnings, (v, r) => (s(), o("li", { key: r }, a(v), 1))), 128))
            ])
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        b(pe, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (v) => i("cancel"))
        }, {
          default: l(() => [...u[9] || (u[9] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u[11] || (u[11] = e("div", { class: "footer-spacer" }, null, -1)),
        b(pe, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (v) => i("goBack"))
        }, {
          default: l(() => [...u[10] || (u[10] = [
            h(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        b(pe, {
          variant: "primary",
          loading: t.executing,
          onClick: u[2] || (u[2] = (v) => i("proceed"))
        }, {
          default: l(() => [
            h(a(p.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), Cp = /* @__PURE__ */ Z($p, [["__scopeId", "data-v-fefd26ed"]]), xp = { key: 0 }, Sp = /* @__PURE__ */ Q({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: c }) {
    const n = c, {
      getRemotes: i,
      addRemote: p,
      removeRemote: g,
      updateRemoteUrl: u,
      fetchRemote: v,
      getRemoteSyncStatus: r,
      getPullPreview: m,
      pullFromRemote: y,
      getPushPreview: w,
      pushToRemote: _,
      validateMerge: k
    } = Ae(), R = $([]), F = $(null), f = $({}), C = $(!1), L = $(null), M = $(""), x = $(!1), j = $(null), B = $(!1), G = $("add"), T = $({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), E = D(() => {
      if (!M.value.trim()) return R.value;
      const A = M.value.toLowerCase();
      return R.value.filter(
        (X) => X.name.toLowerCase().includes(A) || X.fetch_url.toLowerCase().includes(A) || X.push_url.toLowerCase().includes(A)
      );
    });
    async function N() {
      C.value = !0, L.value = null;
      try {
        const A = await i();
        R.value = A.remotes, F.value = A.current_branch_tracking || null, await Promise.all(
          A.remotes.map(async (X) => {
            const be = await r(X.name);
            be && (f.value[X.name] = be);
          })
        );
      } catch (A) {
        L.value = A instanceof Error ? A.message : "Failed to load remotes";
      } finally {
        C.value = !1;
      }
    }
    function le() {
      G.value = "add", T.value = { name: "", fetchUrl: "", pushUrl: "" }, B.value = !0;
    }
    function ee(A) {
      const X = R.value.find((be) => be.name === A);
      X && (G.value = "edit", T.value = {
        name: X.name,
        fetchUrl: X.fetch_url,
        pushUrl: X.push_url
      }, B.value = !0);
    }
    async function Y(A) {
      try {
        G.value === "add" ? await p(A.name, A.fetchUrl) : await u(A.name, A.fetchUrl, A.pushUrl || void 0), B.value = !1, await N();
      } catch (X) {
        L.value = X instanceof Error ? X.message : "Operation failed";
      }
    }
    function re() {
      B.value = !1, T.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function H(A) {
      j.value = A;
      try {
        await v(A);
        const X = await r(A);
        X && (f.value[A] = X), n("toast", `✓ Fetched from ${A}`, "success");
      } catch (X) {
        n("toast", X instanceof Error ? X.message : "Fetch failed", "error");
      } finally {
        j.value = null;
      }
    }
    async function U(A) {
      if (confirm(`Remove remote "${A}"?`))
        try {
          await g(A), await N();
        } catch (X) {
          L.value = X instanceof Error ? X.message : "Failed to remove remote";
        }
    }
    function P() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const S = $("idle"), oe = D(() => S.value === "pull_preview"), ne = D(
      () => S.value === "resolving" || S.value === "validating"
    ), Te = D(
      () => S.value === "validation_review" || S.value === "executing"
    ), _e = $(!1), Pe = $(null), Re = $(!1), de = $(null), ge = $(!1), fe = $(null), ie = $(null), ae = $(/* @__PURE__ */ new Map()), ze = $(null), Ee = $(null), ot = D(() => fe.value && Fs(fe.value) ? fe.value : null);
    async function dt(A) {
      de.value = A, S.value = "pull_preview", ge.value = !0, fe.value = null, ie.value = null;
      try {
        fe.value = await m(A);
      } catch (X) {
        ie.value = X instanceof Error ? X.message : "Failed to load pull preview";
      } finally {
        ge.value = !1;
      }
    }
    function vt() {
      S.value = "idle", fe.value = null, ie.value = null, de.value = null;
    }
    async function Ce(A) {
      if (!de.value) return;
      S.value = "executing", ie.value = null;
      const X = de.value;
      try {
        const be = await y(X, A);
        if (be.rolled_back) {
          ie.value = `Pull failed and was rolled back: ${be.error || "Unknown error"}`, S.value = "pull_preview";
          return;
        }
        J(), S.value = "idle", n("toast", `✓ Pulled from ${X}`, "success"), await N();
      } catch (be) {
        ie.value = be instanceof Error ? be.message : "Pull failed", S.value = "pull_preview";
      }
    }
    function et() {
      ot.value && (S.value = "resolving", Ee.value = null);
    }
    function Xe(A, X) {
      ae.value.set(A, { name: A, resolution: X });
    }
    function je() {
      S.value = "pull_preview";
    }
    async function ft() {
      S.value = "validating", Ee.value = null;
      try {
        const A = Array.from(ae.value.values());
        ze.value = await k(de.value, A), S.value = "validation_review";
      } catch (A) {
        Ee.value = A instanceof Error ? A.message : "Validation failed", S.value = "resolving";
      }
    }
    async function ke() {
      S.value = "executing";
      const A = de.value;
      try {
        const X = Array.from(ae.value.values()), be = await y(A, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: X
        });
        if (be.rolled_back) {
          ie.value = `Pull failed and was rolled back: ${be.error || "Unknown error"}`, S.value = "pull_preview";
          return;
        }
        J(), S.value = "idle", n("toast", `✓ Pulled from ${A}`, "success"), await N();
      } catch (X) {
        ie.value = X instanceof Error ? X.message : "Pull failed", S.value = "validation_review";
      }
    }
    function Ve() {
      S.value = "resolving";
    }
    function ve() {
      J(), S.value = "idle";
    }
    function J() {
      ae.value.clear(), ze.value = null, Ee.value = null, ie.value = null, fe.value = null, de.value = null;
    }
    async function $e(A) {
      de.value = A, _e.value = !0, ge.value = !0, Pe.value = null;
      try {
        Pe.value = await w(A);
      } catch (X) {
        L.value = X instanceof Error ? X.message : "Failed to load push preview";
      } finally {
        ge.value = !1;
      }
    }
    function ce() {
      _e.value = !1, Pe.value = null, de.value = null;
    }
    async function K(A) {
      if (!de.value) return;
      Re.value = !0;
      const X = de.value;
      try {
        await _(X, A), ce(), n("toast", `✓ Pushed to ${X}`, "success"), await N();
      } catch (be) {
        n("toast", be instanceof Error ? be.message : "Push failed", "error");
      } finally {
        Re.value = !1;
      }
    }
    function O() {
      const A = de.value;
      ce(), A && dt(A);
    }
    return Oe(N), (A, X) => (s(), o(V, null, [
      b(Ke, null, {
        header: l(() => [
          b(Je, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: X[0] || (X[0] = (be) => x.value = !0)
          }, {
            actions: l(() => [
              B.value ? d("", !0) : (s(), I(se, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: le
              }, {
                default: l(() => [...X[3] || (X[3] = [
                  h(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          B.value ? d("", !0) : (s(), I(Lt, {
            key: 0,
            modelValue: M.value,
            "onUpdate:modelValue": X[1] || (X[1] = (be) => M.value = be),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: l(() => [
          C.value ? (s(), I(wt, {
            key: 0,
            message: "Loading remotes..."
          })) : L.value ? (s(), I(kt, {
            key: 1,
            message: L.value,
            retry: !0,
            onRetry: N
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            B.value ? (s(), I(bf, {
              key: 0,
              mode: G.value,
              "remote-name": T.value.name,
              "fetch-url": T.value.fetchUrl,
              "push-url": T.value.pushUrl,
              onSubmit: Y,
              onCancel: re
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            R.value.length && !B.value ? (s(), I(jt, {
              key: 1,
              variant: "compact"
            }, {
              default: l(() => [
                h(" Total: " + a(R.value.length) + " remote" + a(R.value.length !== 1 ? "s" : "") + " ", 1),
                F.value ? (s(), o("span", xp, " • Tracking: " + a(F.value.remote) + "/" + a(F.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            E.value.length && !B.value ? (s(), I(Fe, {
              key: 2,
              title: "REMOTES",
              count: E.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, te(E.value, (be) => (s(), I(rf, {
                  key: be.name,
                  remote: be,
                  "sync-status": f.value[be.name],
                  "fetching-remote": j.value,
                  onFetch: H,
                  onEdit: ee,
                  onRemove: U,
                  onPull: dt,
                  onPush: $e
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !E.value.length && !B.value ? (s(), I(rt, {
              key: 3,
              icon: "🌐",
              message: M.value ? `No remotes match '${M.value}'` : "No remotes configured."
            }, {
              actions: l(() => [
                b(se, {
                  variant: "primary",
                  onClick: le
                }, {
                  default: l(() => [...X[4] || (X[4] = [
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
      b(mt, {
        show: x.value,
        title: "About Git Remotes",
        onClose: X[2] || (X[2] = (be) => x.value = !1)
      }, {
        content: l(() => [...X[5] || (X[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            h(" The "),
            e("strong", null, '"origin"'),
            h(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: l(() => [
          b(se, {
            variant: "link",
            onClick: P
          }, {
            default: l(() => [...X[6] || (X[6] = [
              h(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b(ng, {
        show: oe.value,
        "remote-name": de.value || "",
        preview: fe.value,
        loading: ge.value,
        pulling: S.value === "executing",
        error: ie.value,
        "conflict-resolutions": ae.value,
        onClose: vt,
        onPull: Ce,
        onOpenConflictResolution: et
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      b(Sg, {
        show: _e.value,
        "remote-name": de.value || "",
        preview: Pe.value,
        loading: ge.value,
        pushing: Re.value,
        onClose: ce,
        onPush: K,
        onPullFirst: O
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      ne.value && ot.value ? (s(), I(op, {
        key: 0,
        "workflow-conflicts": ot.value.workflow_conflicts,
        resolutions: ae.value,
        "operation-type": "pull",
        validating: S.value === "validating",
        error: Ee.value,
        onClose: je,
        onResolve: Xe,
        onApply: ft
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : d("", !0),
      Te.value && ze.value ? (s(), I(Cp, {
        key: 1,
        validation: ze.value,
        "operation-type": "pull",
        executing: S.value === "executing",
        onProceed: ke,
        onGoBack: Ve,
        onCancel: ve
      }, null, 8, ["validation", "executing"])) : d("", !0)
    ], 64));
  }
}), Ip = /* @__PURE__ */ Z(Sp, [["__scopeId", "data-v-9ae3b76d"]]), Ep = { class: "setting-info" }, Mp = { class: "setting-label" }, Tp = {
  key: 0,
  class: "required-marker"
}, Rp = {
  key: 0,
  class: "setting-description"
}, zp = { class: "setting-control" }, Lp = /* @__PURE__ */ Q({
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
          h(a(t.label) + " ", 1),
          t.required ? (s(), o("span", Tp, "*")) : d("", !0)
        ]),
        t.description ? (s(), o("div", Rp, a(t.description), 1)) : d("", !0)
      ]),
      e("div", zp, [
        Se(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), ns = /* @__PURE__ */ Z(Lp, [["__scopeId", "data-v-cb5d236c"]]), Pp = { class: "toggle" }, Dp = ["checked", "disabled"], Np = /* @__PURE__ */ Q({
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
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, Dp),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Up = /* @__PURE__ */ Z(Np, [["__scopeId", "data-v-71c0f550"]]), Op = { class: "workspace-settings-content" }, Bp = { class: "settings-section" }, Fp = { class: "path-setting" }, Ap = { class: "path-value" }, Vp = { class: "path-setting" }, Wp = { class: "path-value" }, Gp = { class: "settings-section" }, jp = { class: "settings-section" }, qp = { class: "settings-section" }, Hp = /* @__PURE__ */ Q({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(t, { expose: c, emit: n }) {
    const i = t, p = n, { getConfig: g, updateConfig: u } = Ae(), v = $(!1), r = $(null), m = $(null), y = $(null), w = $(null), _ = $(""), k = $(""), R = $(!1);
    function F(B) {
      return B.join(" ");
    }
    function f(B) {
      return B.trim() ? B.trim().split(/\s+/) : [];
    }
    const C = D(() => {
      if (!w.value) return !1;
      const B = _.value !== (w.value.civitai_api_key || ""), G = k.value !== F(w.value.comfyui_extra_args || []);
      return B || G;
    });
    async function L() {
      v.value = !0, r.value = null;
      try {
        y.value = await g(i.workspacePath || void 0), w.value = { ...y.value }, _.value = y.value.civitai_api_key || "", k.value = F(y.value.comfyui_extra_args || []);
        const B = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        R.value = B === "true";
      } catch (B) {
        r.value = B instanceof Error ? B.message : "Failed to load settings";
      } finally {
        v.value = !1;
      }
    }
    async function M() {
      var B, G;
      m.value = null;
      try {
        const T = {};
        _.value !== (((B = w.value) == null ? void 0 : B.civitai_api_key) || "") && (T.civitai_api_key = _.value || null), k.value !== F(((G = w.value) == null ? void 0 : G.comfyui_extra_args) || []) && (T.comfyui_extra_args = f(k.value)), await u(T, i.workspacePath || void 0), await L(), m.value = { type: "success", message: "Settings saved successfully" }, p("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (T) {
        const E = T instanceof Error ? T.message : "Failed to save settings";
        m.value = { type: "error", message: E }, p("error", E);
      }
    }
    function x() {
      w.value && (_.value = w.value.civitai_api_key || "", k.value = F(w.value.comfyui_extra_args || []), m.value = null);
    }
    function j(B) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(B)), console.log("[ComfyGit] Auto-refresh setting saved:", B);
    }
    return c({
      saveSettings: M,
      resetSettings: x,
      hasChanges: C,
      loadSettings: L
    }), Oe(L), (B, G) => (s(), o("div", Op, [
      v.value ? (s(), I(wt, {
        key: 0,
        message: "Loading workspace settings..."
      })) : r.value ? (s(), I(kt, {
        key: 1,
        message: r.value,
        retry: !0,
        onRetry: L
      }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
        b(Fe, { title: "WORKSPACE PATHS" }, {
          default: l(() => {
            var T, E;
            return [
              e("div", Bp, [
                e("div", Fp, [
                  G[3] || (G[3] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                  G[4] || (G[4] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  e("div", Ap, a(((T = y.value) == null ? void 0 : T.workspace_path) || "Loading..."), 1)
                ]),
                e("div", Vp, [
                  G[5] || (G[5] = e("div", { class: "path-label" }, "Models Directory", -1)),
                  G[6] || (G[6] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  e("div", Wp, a(((E = y.value) == null ? void 0 : E.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        b(Fe, { title: "API CREDENTIALS" }, {
          default: l(() => [
            e("div", Gp, [
              b(ns, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: l(() => [
                  b(Qt, {
                    modelValue: _.value,
                    "onUpdate:modelValue": G[0] || (G[0] = (T) => _.value = T),
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
        b(Fe, { title: "COMFYUI SETTINGS" }, {
          default: l(() => [
            e("div", jp, [
              b(ns, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: l(() => [
                  b(Qt, {
                    modelValue: k.value,
                    "onUpdate:modelValue": G[1] || (G[1] = (T) => k.value = T),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              G[7] || (G[7] = e("div", { class: "setting-hint" }, [
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
        b(Fe, { title: "UI SETTINGS" }, {
          default: l(() => [
            e("div", qp, [
              b(ns, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: l(() => [
                  b(Up, {
                    modelValue: R.value,
                    "onUpdate:modelValue": [
                      G[2] || (G[2] = (T) => R.value = T),
                      j
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        m.value ? (s(), I(jt, {
          key: 0,
          variant: (m.value.type === "success", "compact")
        }, {
          default: l(() => [
            e("span", {
              style: yt({ color: m.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, a(m.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : d("", !0)
      ], 64))
    ]));
  }
}), As = /* @__PURE__ */ Z(Hp, [["__scopeId", "data-v-9f44552d"]]), Kp = /* @__PURE__ */ Q({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const c = $(null);
    function n() {
      console.log("[ComfyGit] Settings saved");
    }
    return (i, p) => (s(), I(Ke, null, {
      header: l(() => [
        b(Je, { title: "WORKSPACE SETTINGS" }, {
          actions: l(() => {
            var g, u;
            return [
              b(se, {
                variant: "primary",
                size: "sm",
                disabled: !((g = c.value) != null && g.hasChanges),
                onClick: p[0] || (p[0] = (v) => {
                  var r;
                  return (r = c.value) == null ? void 0 : r.saveSettings();
                })
              }, {
                default: l(() => [...p[2] || (p[2] = [
                  h(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (u = c.value) != null && u.hasChanges ? (s(), I(se, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: p[1] || (p[1] = (v) => {
                  var r;
                  return (r = c.value) == null ? void 0 : r.resetSettings();
                })
              }, {
                default: l(() => [...p[3] || (p[3] = [
                  h(" Reset ", -1)
                ])]),
                _: 1
              })) : d("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: l(() => [
        b(As, {
          ref_key: "contentRef",
          ref: c,
          onSaved: n
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), Jp = /* @__PURE__ */ Q({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c, getWorkspaceLogPath: n, openFile: i } = Ae(), p = $([]), g = $(!1), u = $(null), v = $(!1), r = $(null), m = $(null), y = $(!1), w = D(() => p.value.length === 0 ? [] : p.value.map((F) => ({
      text: `${F.timestamp} - ${F.name} - ${F.level} - ${F.func}:${F.line} - ${F.message}`,
      level: F.level
    })));
    async function _() {
      g.value = !0, u.value = null;
      try {
        p.value = await c(void 0, 500);
      } catch (F) {
        u.value = F instanceof Error ? F.message : "Failed to load workspace logs";
      } finally {
        g.value = !1, setTimeout(() => {
          var F;
          (F = r.value) != null && F.parentElement && (r.value.parentElement.scrollTop = r.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function k() {
      try {
        const F = await n();
        F.exists && (m.value = F.path);
      } catch {
      }
    }
    async function R() {
      if (m.value) {
        y.value = !0;
        try {
          await i(m.value);
        } catch (F) {
          console.error("Failed to open log file:", F);
        } finally {
          y.value = !1;
        }
      }
    }
    return Oe(() => {
      _(), k();
    }), (F, f) => (s(), o(V, null, [
      b(Ke, null, {
        header: l(() => [
          b(Je, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: f[0] || (f[0] = (C) => v.value = !0)
          }, {
            actions: l(() => [
              b(se, {
                variant: "secondary",
                size: "sm",
                onClick: R,
                disabled: !m.value || y.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  h(a(y.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(se, {
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
          g.value ? (s(), I(wt, {
            key: 0,
            message: "Loading workspace logs..."
          })) : u.value ? (s(), I(kt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            p.value.length === 0 ? (s(), I(rt, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: r,
              class: "log-output"
            }, [
              (s(!0), o(V, null, te(w.value, (C, L) => (s(), o("div", {
                key: L,
                class: me(`log-line log-level-${C.level.toLowerCase()}`)
              }, a(C.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      b(mt, {
        show: v.value,
        title: "About Workspace Logs",
        onClose: f[2] || (f[2] = (C) => v.value = !1)
      }, {
        content: l(() => [...f[3] || (f[3] = [
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
          b(se, {
            variant: "primary",
            onClick: f[1] || (f[1] = (C) => v.value = !1)
          }, {
            default: l(() => [...f[4] || (f[4] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Yp = /* @__PURE__ */ Z(Jp, [["__scopeId", "data-v-7f05352a"]]), Xp = /* @__PURE__ */ Q({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n, getEnvironmentLogPath: i, openFile: p } = Ae(), g = $([]), u = $(!1), v = $(null), r = $(!1), m = $("production"), y = $(null), w = $(null), _ = $(!1), k = D(() => g.value.length === 0 ? [] : g.value.map((C) => ({
      text: `${C.timestamp} - ${C.name} - ${C.level} - ${C.func}:${C.line} - ${C.message}`,
      level: C.level
    })));
    async function R() {
      u.value = !0, v.value = null;
      try {
        g.value = await c(void 0, 500);
        try {
          const C = await n();
          m.value = C.environment || "production";
        } catch {
        }
      } catch (C) {
        v.value = C instanceof Error ? C.message : "Failed to load environment logs";
      } finally {
        u.value = !1, setTimeout(() => {
          var C;
          (C = y.value) != null && C.parentElement && (y.value.parentElement.scrollTop = y.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function F() {
      try {
        const C = await i();
        C.exists && (w.value = C.path);
      } catch {
      }
    }
    async function f() {
      if (w.value) {
        _.value = !0;
        try {
          await p(w.value);
        } catch (C) {
          console.error("Failed to open log file:", C);
        } finally {
          _.value = !1;
        }
      }
    }
    return Oe(() => {
      R(), F();
    }), (C, L) => (s(), o(V, null, [
      b(Ke, null, {
        header: l(() => [
          b(Je, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: L[0] || (L[0] = (M) => r.value = !0)
          }, {
            actions: l(() => [
              b(se, {
                variant: "secondary",
                size: "sm",
                onClick: f,
                disabled: !w.value || _.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  h(a(_.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(se, {
                variant: "secondary",
                size: "sm",
                onClick: R,
                disabled: u.value
              }, {
                default: l(() => [
                  h(a(u.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          u.value ? (s(), I(wt, {
            key: 0,
            message: "Loading environment logs..."
          })) : v.value ? (s(), I(kt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: R
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            g.value.length === 0 ? (s(), I(rt, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: y,
              class: "log-output"
            }, [
              (s(!0), o(V, null, te(k.value, (M, x) => (s(), o("div", {
                key: x,
                class: me(`log-line log-level-${M.level.toLowerCase()}`)
              }, a(M.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      b(mt, {
        show: r.value,
        title: "About Environment Logs",
        onClose: L[2] || (L[2] = (M) => r.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            L[3] || (L[3] = h(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(m.value), 1),
            L[4] || (L[4] = h(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          L[5] || (L[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          L[6] || (L[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: l(() => [
          b(se, {
            variant: "primary",
            onClick: L[1] || (L[1] = (M) => r.value = !1)
          }, {
            default: l(() => [...L[7] || (L[7] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Qp = /* @__PURE__ */ Z(Xp, [["__scopeId", "data-v-6f8db7ce"]]), Zp = { class: "env-title" }, eh = {
  key: 0,
  class: "current-badge"
}, th = {
  key: 0,
  class: "branch-info"
}, sh = /* @__PURE__ */ Q({
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
    return (c, n) => (s(), I(He, {
      status: t.isCurrent ? "synced" : void 0
    }, Wt({
      icon: l(() => [
        h(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: l(() => [
        e("div", Zp, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", eh, "CURRENT")) : d("", !0)
        ])
      ]),
      subtitle: l(() => [
        t.currentBranch ? (s(), o("span", th, [
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
          b(Ue, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          b(Ue, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          b(Ue, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), I(Ue, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : d("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), oh = /* @__PURE__ */ Z(sh, [["__scopeId", "data-v-9231917a"]]), nh = { class: "env-details" }, ah = { class: "status-row" }, lh = {
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
}, kh = { class: "value" }, bh = { class: "footer-actions" }, _h = /* @__PURE__ */ Q({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: c }) {
    const n = c;
    function i(p) {
      if (!p) return "Unknown";
      try {
        const g = new Date(p), v = (/* @__PURE__ */ new Date()).getTime() - g.getTime(), r = Math.floor(v / 6e4), m = Math.floor(v / 36e5), y = Math.floor(v / 864e5);
        return r < 1 ? "just now" : r < 60 ? `${r} ${r === 1 ? "minute" : "minutes"} ago` : m < 24 ? `${m} ${m === 1 ? "hour" : "hours"} ago` : y < 30 ? `${y} ${y === 1 ? "day" : "days"} ago` : g.toLocaleDateString();
      } catch {
        return p;
      }
    }
    return (p, g) => (s(), I(Ye, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: g[2] || (g[2] = (u) => n("close"))
    }, {
      body: l(() => [
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
            e("span", yh, a(i(t.environment.created_at)), 1)
          ])) : d("", !0),
          t.environment.last_used ? (s(), o("div", wh, [
            g[10] || (g[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", kh, a(i(t.environment.last_used)), 1)
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        e("div", bh, [
          t.canDelete ? (s(), I(pe, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: g[0] || (g[0] = (u) => n("delete", t.environment.name))
          }, {
            default: l(() => [...g[12] || (g[12] = [
              h(" Delete ", -1)
            ])]),
            _: 1
          })) : d("", !0),
          g[14] || (g[14] = e("div", { class: "footer-spacer" }, null, -1)),
          b(pe, {
            variant: "secondary",
            size: "sm",
            onClick: g[1] || (g[1] = (u) => n("close"))
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
}), $h = /* @__PURE__ */ Z(_h, [["__scopeId", "data-v-59855453"]]), Vs = [
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
], Gs = "auto", Ch = { class: "progress-bar" }, xh = /* @__PURE__ */ Q({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, n = D(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (i, p) => (s(), o("div", Ch, [
      e("div", {
        class: me(["progress-fill", t.variant]),
        style: yt({ width: n.value })
      }, null, 6)
    ]));
  }
}), js = /* @__PURE__ */ Z(xh, [["__scopeId", "data-v-1beb0512"]]), Sh = { class: "task-progress" }, Ih = { class: "progress-info" }, Eh = { class: "progress-percentage" }, Mh = { class: "progress-message" }, Th = {
  key: 0,
  class: "progress-steps"
}, Rh = { class: "step-icon" }, zh = { class: "step-label" }, Lh = /* @__PURE__ */ Q({
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
      const g = c.steps.find((u) => u.id === p);
      return g ? c.progress >= g.progressThreshold ? "completed" : c.currentPhase === p ? "active" : "pending" : "pending";
    }
    function i(p) {
      const g = n(p);
      return g === "completed" ? "✓" : g === "active" ? "⟳" : "○";
    }
    return (p, g) => (s(), o("div", Sh, [
      b(js, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", Ih, [
        e("span", Eh, a(t.progress) + "%", 1),
        e("span", Mh, a(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", Th, [
        (s(!0), o(V, null, te(t.steps, (u) => (s(), o("div", {
          key: u.id,
          class: me(["step", n(u.id)])
        }, [
          e("span", Rh, a(i(u.id)), 1),
          e("span", zh, a(u.label), 1)
        ], 2))), 128))
      ])) : d("", !0)
    ]));
  }
}), es = /* @__PURE__ */ Z(Lh, [["__scopeId", "data-v-9d1de66c"]]), Ph = {
  key: 0,
  class: "create-env-form"
}, Dh = { class: "form-field" }, Nh = { class: "form-field" }, Uh = ["value"], Oh = { class: "form-field" }, Bh = ["disabled"], Fh = ["value"], Ah = { class: "form-field" }, Vh = ["value"], Wh = { class: "form-field form-field--checkbox" }, Gh = { class: "form-checkbox" }, jh = {
  key: 1,
  class: "create-env-progress"
}, qh = { class: "creating-intro" }, Hh = {
  key: 0,
  class: "progress-warning"
}, Kh = {
  key: 1,
  class: "create-error"
}, Jh = { class: "error-message" }, Yh = {
  key: 1,
  class: "footer-status"
}, Xh = 10, Qh = /* @__PURE__ */ Q({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: c }) {
    const n = c, { getComfyUIReleases: i, createEnvironment: p, getCreateProgress: g } = Ae(), u = $(""), v = $(Ws), r = $("latest"), m = $(Gs), y = $(!1), w = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), _ = $(!1), k = $(!1), R = $({
      progress: 0,
      message: ""
    });
    let F = null, f = 0;
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
    ], L = $(null);
    function M() {
      k.value || n("close");
    }
    async function x() {
      const E = u.value.trim();
      if (E) {
        k.value = !0, R.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const N = {
            name: E,
            python_version: v.value,
            comfyui_version: r.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, le = await p(N);
          le.status === "started" ? j() : le.status === "error" && (R.value = {
            progress: 0,
            message: le.message || "Failed to start creation",
            error: le.message
          });
        } catch (N) {
          R.value = {
            progress: 0,
            message: N instanceof Error ? N.message : "Unknown error",
            error: N instanceof Error ? N.message : "Unknown error"
          };
        }
      }
    }
    function j() {
      F || (f = 0, F = window.setInterval(async () => {
        try {
          const E = await g();
          f = 0, R.value = {
            progress: E.progress ?? 0,
            message: E.message,
            phase: E.phase,
            error: E.error
          }, E.state === "complete" ? (B(), n("created", E.environment_name || u.value.trim(), y.value)) : E.state === "error" ? (B(), R.value.error = E.error || E.message) : E.state === "idle" && k.value && (B(), R.value.error = "Creation was interrupted. Please try again.");
        } catch {
          f++, f >= Xh && (B(), R.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function B() {
      F && (clearInterval(F), F = null);
    }
    function G() {
      k.value = !1, R.value = { progress: 0, message: "" }, n("close");
    }
    async function T() {
      _.value = !0;
      try {
        w.value = await i();
      } catch (E) {
        console.error("Failed to load ComfyUI releases:", E);
      } finally {
        _.value = !1;
      }
    }
    return Oe(async () => {
      var E;
      await uo(), (E = L.value) == null || E.focus(), T();
    }), zs(() => {
      B();
    }), (E, N) => (s(), I(Ye, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !k.value,
      onClose: M
    }, {
      body: l(() => [
        k.value ? (s(), o("div", jh, [
          e("p", qh, [
            N[11] || (N[11] = h(" Creating environment ", -1)),
            e("strong", null, a(u.value), 1),
            N[12] || (N[12] = h("... ", -1))
          ]),
          b(es, {
            progress: R.value.progress,
            message: R.value.message,
            "current-phase": R.value.phase,
            variant: R.value.error ? "error" : "default",
            "show-steps": !0,
            steps: C
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          R.value.error ? d("", !0) : (s(), o("p", Hh, " This may take several minutes. Please wait... ")),
          R.value.error ? (s(), o("div", Kh, [
            e("p", Jh, a(R.value.error), 1)
          ])) : d("", !0)
        ])) : (s(), o("div", Ph, [
          e("div", Dh, [
            N[6] || (N[6] = e("label", { class: "form-label" }, "Name", -1)),
            Be(e("input", {
              ref_key: "nameInput",
              ref: L,
              "onUpdate:modelValue": N[0] || (N[0] = (le) => u.value = le),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: ht(x, ["enter"])
            }, null, 544), [
              [Tt, u.value]
            ])
          ]),
          e("div", Nh, [
            N[7] || (N[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Be(e("select", {
              "onUpdate:modelValue": N[1] || (N[1] = (le) => v.value = le),
              class: "form-select"
            }, [
              (s(!0), o(V, null, te(xe(Vs), (le) => (s(), o("option", {
                key: le,
                value: le
              }, a(le), 9, Uh))), 128))
            ], 512), [
              [Rt, v.value]
            ])
          ]),
          e("div", Oh, [
            N[8] || (N[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Be(e("select", {
              "onUpdate:modelValue": N[2] || (N[2] = (le) => r.value = le),
              class: "form-select",
              disabled: _.value
            }, [
              (s(!0), o(V, null, te(w.value, (le) => (s(), o("option", {
                key: le.tag_name,
                value: le.tag_name
              }, a(le.name), 9, Fh))), 128))
            ], 8, Bh), [
              [Rt, r.value]
            ])
          ]),
          e("div", Ah, [
            N[9] || (N[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Be(e("select", {
              "onUpdate:modelValue": N[3] || (N[3] = (le) => m.value = le),
              class: "form-select"
            }, [
              (s(!0), o(V, null, te(xe(fs), (le) => (s(), o("option", {
                key: le,
                value: le
              }, a(le) + a(le === "auto" ? " (detect GPU)" : ""), 9, Vh))), 128))
            ], 512), [
              [Rt, m.value]
            ])
          ]),
          e("div", Wh, [
            e("label", Gh, [
              Be(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": N[4] || (N[4] = (le) => y.value = le)
              }, null, 512), [
                [Xt, y.value]
              ]),
              N[10] || (N[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: l(() => [
        k.value ? (s(), o(V, { key: 1 }, [
          R.value.error ? (s(), I(pe, {
            key: 0,
            variant: "secondary",
            onClick: G
          }, {
            default: l(() => [...N[15] || (N[15] = [
              h(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", Yh, " Creating environment... "))
        ], 64)) : (s(), o(V, { key: 0 }, [
          b(pe, {
            variant: "primary",
            disabled: !u.value.trim(),
            onClick: x
          }, {
            default: l(() => [...N[13] || (N[13] = [
              h(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(pe, {
            variant: "secondary",
            onClick: N[5] || (N[5] = (le) => n("close"))
          }, {
            default: l(() => [...N[14] || (N[14] = [
              h(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), Zh = /* @__PURE__ */ Z(Qh, [["__scopeId", "data-v-f37eaa42"]]), e1 = /* @__PURE__ */ Q({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getEnvironments: p } = Ae(), g = $([]), u = $(!1), v = $(null), r = $(""), m = $(!1), y = $(!1), w = $(null), _ = D(() => {
      if (!r.value.trim()) return g.value;
      const L = r.value.toLowerCase();
      return g.value.filter(
        (M) => {
          var x;
          return M.name.toLowerCase().includes(L) || ((x = M.current_branch) == null ? void 0 : x.toLowerCase().includes(L));
        }
      );
    });
    function k(L, M) {
      y.value = !1, i("created", L, M);
    }
    function R() {
      y.value = !0;
    }
    function F(L) {
      w.value = L;
    }
    function f(L) {
      w.value = null, i("delete", L);
    }
    async function C() {
      u.value = !0, v.value = null;
      try {
        g.value = await p();
      } catch (L) {
        v.value = L instanceof Error ? L.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return Oe(C), c({
      loadEnvironments: C,
      openCreateModal: R
    }), (L, M) => (s(), o(V, null, [
      b(Ke, null, {
        header: l(() => [
          b(Je, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (x) => m.value = !0)
          }, {
            actions: l(() => [
              b(se, {
                variant: "primary",
                size: "sm",
                onClick: R
              }, {
                default: l(() => [...M[6] || (M[6] = [
                  h(" Create ", -1)
                ])]),
                _: 1
              }),
              b(se, {
                variant: "secondary",
                size: "sm",
                onClick: C
              }, {
                default: l(() => [...M[7] || (M[7] = [
                  h(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          b(Lt, {
            modelValue: r.value,
            "onUpdate:modelValue": M[1] || (M[1] = (x) => r.value = x),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value ? (s(), I(wt, {
            key: 0,
            message: "Loading environments..."
          })) : v.value ? (s(), I(kt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            _.value.length ? (s(), I(Fe, {
              key: 0,
              title: "ENVIRONMENTS",
              count: _.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, te(_.value, (x) => (s(), I(oh, {
                  key: x.name,
                  "environment-name": x.name,
                  "is-current": x.is_current,
                  "current-branch": x.current_branch,
                  "show-last-used": !1
                }, {
                  actions: l(() => [
                    x.is_current ? d("", !0) : (s(), I(se, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (j) => L.$emit("switch", x.name)
                    }, {
                      default: l(() => [...M[8] || (M[8] = [
                        h(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    b(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (j) => F(x)
                    }, {
                      default: l(() => [...M[9] || (M[9] = [
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
            _.value.length ? d("", !0) : (s(), I(rt, {
              key: 1,
              icon: "🌍",
              message: r.value ? `No environments match '${r.value}'` : "No environments found. Create one to get started!"
            }, Wt({ _: 2 }, [
              r.value ? void 0 : {
                name: "actions",
                fn: l(() => [
                  b(se, {
                    variant: "primary",
                    onClick: R
                  }, {
                    default: l(() => [...M[10] || (M[10] = [
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
      b(mt, {
        show: m.value,
        title: "About Environments",
        onClose: M[3] || (M[3] = (x) => m.value = !1)
      }, {
        content: l(() => [...M[11] || (M[11] = [
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
          b(se, {
            variant: "secondary",
            onClick: M[2] || (M[2] = (x) => m.value = !1)
          }, {
            default: l(() => [...M[12] || (M[12] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (s(), I($h, {
        key: 0,
        environment: w.value,
        "can-delete": g.value.length > 1,
        onClose: M[4] || (M[4] = (x) => w.value = null),
        onDelete: f
      }, null, 8, ["environment", "can-delete"])) : d("", !0),
      y.value ? (s(), I(Zh, {
        key: 1,
        onClose: M[5] || (M[5] = (x) => y.value = !1),
        onCreated: k
      })) : d("", !0)
    ], 64));
  }
}), t1 = /* @__PURE__ */ Z(e1, [["__scopeId", "data-v-f95999f4"]]), s1 = { class: "file-path" }, o1 = { class: "file-path-text" }, n1 = ["title"], a1 = /* @__PURE__ */ Q({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = $(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(c.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (p) {
        console.error("Failed to copy:", p);
      }
    }
    return (p, g) => (s(), o("div", s1, [
      g[0] || (g[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", o1, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: i
      }, a(n.value ? "✓" : "📋"), 9, n1)) : d("", !0)
    ]));
  }
}), l1 = /* @__PURE__ */ Z(a1, [["__scopeId", "data-v-f0982173"]]), i1 = { class: "export-blocked" }, r1 = { class: "issues-list" }, d1 = { class: "issue-message" }, c1 = {
  key: 0,
  class: "issue-details"
}, u1 = ["onClick"], m1 = { class: "issue-fix" }, v1 = /* @__PURE__ */ Q({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(t) {
    const c = t, n = ts({});
    function i(p) {
      const g = c.issues[p];
      return n[p] || g.details.length <= 3 ? g.details : g.details.slice(0, 3);
    }
    return (p, g) => (s(), I(Ye, {
      title: "Cannot Export",
      size: "md",
      onClose: g[1] || (g[1] = (u) => p.$emit("close"))
    }, {
      body: l(() => [
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
            (s(!0), o(V, null, te(t.issues, (u, v) => (s(), o("div", {
              key: v,
              class: "issue-item"
            }, [
              e("div", d1, a(u.message), 1),
              u.details.length ? (s(), o("div", c1, [
                (s(!0), o(V, null, te(i(v), (r, m) => (s(), o("div", {
                  key: m,
                  class: "issue-detail"
                }, a(r), 1))), 128)),
                u.details.length > 3 && !n[v] ? (s(), o("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (r) => n[v] = !0
                }, " +" + a(u.details.length - 3) + " more ", 9, u1)) : d("", !0)
              ])) : d("", !0),
              e("div", m1, [
                u.type === "uncommitted_workflows" ? (s(), o(V, { key: 0 }, [
                  h(" Commit your workflow changes before exporting. ")
                ], 64)) : u.type === "uncommitted_git_changes" ? (s(), o(V, { key: 1 }, [
                  h(" Commit your changes before exporting. ")
                ], 64)) : u.type === "unresolved_issues" ? (s(), o(V, { key: 2 }, [
                  h(" Resolve all workflow issues before exporting. ")
                ], 64)) : d("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: l(() => [
        b(pe, {
          variant: "primary",
          onClick: g[0] || (g[0] = (u) => p.$emit("close"))
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
}), f1 = /* @__PURE__ */ Z(v1, [["__scopeId", "data-v-b52f5e32"]]), g1 = { class: "export-warnings" }, p1 = {
  key: 0,
  class: "success-header"
}, h1 = { class: "warning-header" }, y1 = { class: "warning-summary" }, w1 = { class: "warning-title" }, k1 = { class: "models-section" }, b1 = { class: "models-list" }, _1 = { class: "model-info" }, $1 = { class: "model-filename" }, C1 = { class: "model-workflows" }, x1 = ["onClick"], S1 = /* @__PURE__ */ Q({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(t, { emit: c }) {
    const n = t, i = c, p = $(!1), g = $(null), u = D(() => p.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function v() {
      g.value = null, i("revalidate");
    }
    return (r, m) => (s(), o(V, null, [
      b(Ye, {
        title: "Export Warnings",
        size: "md",
        onClose: m[3] || (m[3] = (y) => r.$emit("cancel"))
      }, {
        body: l(() => [
          e("div", g1, [
            t.models.length === 0 ? (s(), o("div", p1, [...m[4] || (m[4] = [
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
                e("div", y1, [
                  e("h3", w1, a(t.models.length) + " model" + a(t.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  m[5] || (m[5] = e("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              e("div", k1, [
                e("div", b1, [
                  (s(!0), o(V, null, te(u.value, (y) => (s(), o("div", {
                    key: y.hash,
                    class: "model-item"
                  }, [
                    e("div", _1, [
                      e("div", $1, a(y.filename), 1),
                      e("div", C1, " Used by: " + a(y.workflows.join(", ")), 1)
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      onClick: (w) => g.value = y.hash
                    }, " Add Source ", 8, x1)
                  ]))), 128))
                ]),
                t.models.length > 3 && !p.value ? (s(), o("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: m[0] || (m[0] = (y) => p.value = !0)
                }, " Show " + a(t.models.length - 3) + " more model" + a(t.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : d("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: l(() => [
          b(pe, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (y) => r.$emit("cancel"))
          }, {
            default: l(() => [...m[7] || (m[7] = [
              h(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          b(pe, {
            variant: "primary",
            onClick: m[2] || (m[2] = (y) => r.$emit("confirm"))
          }, {
            default: l(() => [
              h(a(t.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      g.value ? (s(), I(vs, {
        key: 0,
        identifier: g.value,
        onClose: v
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), I1 = /* @__PURE__ */ Z(S1, [["__scopeId", "data-v-b698d882"]]), E1 = { class: "export-card" }, M1 = { class: "export-path-row" }, T1 = { class: "export-actions" }, R1 = {
  key: 1,
  class: "export-warning"
}, z1 = /* @__PURE__ */ Q({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: c, exportEnvWithForce: n } = Ae(), i = $(""), p = $(!1), g = $(!1), u = $(!1), v = $(null), r = $(!1), m = $(null), y = $(!1), w = $(!1), _ = D(() => p.value ? "Validating..." : g.value ? "Exporting..." : "Export Environment");
    async function k() {
      p.value = !0, v.value = null;
      try {
        const M = await c();
        m.value = M, M.can_export ? M.warnings.models_without_sources.length > 0 ? w.value = !0 : await f() : y.value = !0;
      } catch (M) {
        v.value = {
          status: "error",
          message: M instanceof Error ? M.message : "Validation failed"
        };
      } finally {
        p.value = !1;
      }
    }
    async function R() {
      w.value = !1, await f();
    }
    async function F() {
      try {
        const M = await c();
        m.value = M;
      } catch (M) {
        console.error("Re-validation failed:", M);
      }
    }
    async function f() {
      g.value = !0;
      try {
        const M = await n(i.value || void 0);
        v.value = M;
      } catch (M) {
        v.value = {
          status: "error",
          message: M instanceof Error ? M.message : "Export failed"
        };
      } finally {
        g.value = !1;
      }
    }
    async function C() {
      var M;
      if ((M = v.value) != null && M.path)
        try {
          await navigator.clipboard.writeText(v.value.path);
        } catch (x) {
          console.error("Failed to copy path:", x);
        }
    }
    async function L() {
      var M;
      if ((M = v.value) != null && M.path) {
        u.value = !0;
        try {
          const x = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(v.value.path)}`);
          if (!x.ok)
            throw new Error(`Download failed: ${x.statusText}`);
          const j = await x.blob(), B = URL.createObjectURL(j), G = v.value.path.split("/").pop() || "environment-export.tar.gz", T = document.createElement("a");
          T.href = B, T.download = G, document.body.appendChild(T), T.click(), document.body.removeChild(T), URL.revokeObjectURL(B);
        } catch (x) {
          console.error("Failed to download:", x), alert(`Download failed: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
      }
    }
    return (M, x) => (s(), o(V, null, [
      b(Ke, null, {
        header: l(() => [
          b(Je, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (j) => r.value = !0)
          })
        ]),
        content: l(() => [
          b(Fe, { title: "EXPORT OPTIONS" }, {
            default: l(() => [
              e("div", E1, [
                x[7] || (x[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", M1, [
                  b(Qt, {
                    modelValue: i.value,
                    "onUpdate:modelValue": x[1] || (x[1] = (j) => i.value = j),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", T1, [
                  b(se, {
                    variant: "primary",
                    size: "md",
                    loading: p.value || g.value,
                    disabled: p.value || g.value,
                    onClick: k
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
                      h(" " + a(_.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          v.value ? (s(), I(Fe, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: l(() => [
              b(He, {
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
                    b(Ue, { label: "Saved to:" }, {
                      default: l(() => [
                        b(l1, {
                          path: v.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    v.value.models_without_sources !== void 0 ? (s(), I(Ue, {
                      key: 0,
                      label: "Models without sources:",
                      value: v.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : d("", !0),
                    v.value.models_without_sources && v.value.models_without_sources > 0 ? (s(), o("div", R1, [...x[8] || (x[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : d("", !0)
                  ]),
                  key: "0"
                } : void 0,
                v.value.status === "success" ? {
                  name: "actions",
                  fn: l(() => [
                    b(se, {
                      variant: "primary",
                      size: "sm",
                      loading: u.value,
                      onClick: L
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
                    b(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: C
                    }, {
                      default: l(() => [...x[10] || (x[10] = [
                        h(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    b(se, {
                      variant: "ghost",
                      size: "sm",
                      onClick: x[2] || (x[2] = (j) => v.value = null)
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
      b(mt, {
        show: r.value,
        title: "What Gets Exported",
        onClose: x[3] || (x[3] = (j) => r.value = !1)
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
      y.value && m.value ? (s(), I(f1, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: x[4] || (x[4] = (j) => y.value = !1)
      }, null, 8, ["issues"])) : d("", !0),
      w.value && m.value ? (s(), I(I1, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: R,
        onCancel: x[5] || (x[5] = (j) => w.value = !1),
        onRevalidate: F
      }, null, 8, ["models"])) : d("", !0)
    ], 64));
  }
}), L1 = /* @__PURE__ */ Z(z1, [["__scopeId", "data-v-f4d120f2"]]), P1 = { class: "file-input-wrapper" }, D1 = ["accept", "multiple", "disabled"], N1 = /* @__PURE__ */ Q({
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
    const i = n, p = $(null);
    function g() {
      var v;
      (v = p.value) == null || v.click();
    }
    function u(v) {
      const r = v.target;
      r.files && r.files.length > 0 && (i("change", r.files), r.value = "");
    }
    return c({
      triggerInput: g
    }), (v, r) => (s(), o("div", P1, [
      e("input", {
        ref_key: "fileInputRef",
        ref: p,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, D1),
      b(se, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: g
      }, {
        default: l(() => [
          Se(v.$slots, "default", {}, () => [
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
}), U1 = /* @__PURE__ */ Z(N1, [["__scopeId", "data-v-cd192091"]]), O1 = {
  key: 0,
  class: "drop-zone-empty"
}, B1 = { class: "drop-zone-text" }, F1 = { class: "drop-zone-primary" }, A1 = { class: "drop-zone-secondary" }, V1 = { class: "drop-zone-actions" }, W1 = {
  key: 1,
  class: "drop-zone-file"
}, G1 = { class: "file-info" }, j1 = { class: "file-details" }, q1 = { class: "file-name" }, H1 = { class: "file-size" }, K1 = /* @__PURE__ */ Q({
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
    const n = c, i = $(!1), p = $(null), g = $(0), u = D(() => p.value !== null), v = D(() => {
      var f;
      return ((f = p.value) == null ? void 0 : f.name) || "";
    }), r = D(() => {
      if (!p.value) return "";
      const f = p.value.size;
      return f < 1024 ? `${f} B` : f < 1024 * 1024 ? `${(f / 1024).toFixed(1)} KB` : f < 1024 * 1024 * 1024 ? `${(f / (1024 * 1024)).toFixed(1)} MB` : `${(f / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m(f) {
      var C;
      f.stopPropagation(), g.value++, (C = f.dataTransfer) != null && C.types.includes("Files") && (i.value = !0);
    }
    function y(f) {
      f.stopPropagation(), f.dataTransfer && (f.dataTransfer.dropEffect = "copy");
    }
    function w(f) {
      f.stopPropagation(), g.value--, g.value === 0 && (i.value = !1);
    }
    function _(f) {
      var L;
      f.stopPropagation(), g.value = 0, i.value = !1;
      const C = (L = f.dataTransfer) == null ? void 0 : L.files;
      C && C.length > 0 && R(C[0]);
    }
    function k(f) {
      f.length > 0 && R(f[0]);
    }
    function R(f) {
      p.value = f, n("fileSelected", f);
    }
    function F() {
      p.value = null, n("clear");
    }
    return (f, C) => (s(), o("div", {
      class: me(["file-drop-zone", { "drop-active": i.value, "has-file": u.value }]),
      onDragenter: Le(m, ["prevent"]),
      onDragover: Le(y, ["prevent"]),
      onDragleave: Le(w, ["prevent"]),
      onDrop: Le(_, ["prevent"])
    }, [
      u.value ? (s(), o("div", W1, [
        e("div", G1, [
          C[1] || (C[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", j1, [
            e("div", q1, a(v.value), 1),
            e("div", H1, a(r.value), 1)
          ])
        ]),
        b(se, {
          variant: "ghost",
          size: "xs",
          onClick: F,
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
          b(U1, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "sm",
            onChange: k
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
}), J1 = /* @__PURE__ */ Z(K1, [["__scopeId", "data-v-0f79cb86"]]), Y1 = { class: "import-preview" }, X1 = { class: "preview-header" }, Q1 = {
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
}, Cy = { class: "git-info" }, xy = /* @__PURE__ */ Q({
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
    const c = t, n = D(() => c.workflows.length), i = D(() => c.models.length), p = D(() => c.nodes.length);
    function g(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, v) => (s(), o("div", Y1, [
      e("div", X1, [
        b(st, null, {
          default: l(() => [...v[0] || (v[0] = [
            h("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", Q1, [
          v[1] || (v[1] = h(" From: ", -1)),
          b(ls, null, {
            default: l(() => [
              h(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : d("", !0)
      ]),
      e("div", Z1, [
        e("div", ey, [
          e("div", ty, [
            v[3] || (v[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", sy, [
              v[2] || (v[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", oy, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", ny, [
            (s(!0), o(V, null, te(t.workflows.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r,
              class: "preview-item"
            }, [
              v[4] || (v[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", ay, a(r), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", ly, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", iy, [
          e("div", ry, [
            v[6] || (v[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", dy, [
              v[5] || (v[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", cy, a(i.value) + " file" + a(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", uy, [
            (s(!0), o(V, null, te(t.models.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r.filename,
              class: "preview-item"
            }, [
              v[7] || (v[7] = e("span", { class: "item-bullet" }, "•", -1)),
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
            v[9] || (v[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", yy, [
              v[8] || (v[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", wy, a(p.value) + " node" + a(p.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", ky, [
            (s(!0), o(V, null, te(t.nodes.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r,
              class: "preview-item"
            }, [
              v[10] || (v[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", by, a(r), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", _y, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", $y, [
          v[11] || (v[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Cy, [
            t.gitBranch ? (s(), I(Ue, {
              key: 0,
              label: "Branch"
            }, {
              default: l(() => [
                b(ls, null, {
                  default: l(() => [
                    h(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : d("", !0),
            t.gitCommit ? (s(), I(Ue, {
              key: 1,
              label: "Commit"
            }, {
              default: l(() => [
                b(Ps, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : d("", !0)
          ])
        ])) : d("", !0)
      ])
    ]));
  }
}), Sy = /* @__PURE__ */ Z(xy, [["__scopeId", "data-v-182fe113"]]), Iy = { class: "import-config" }, Ey = { class: "config-container" }, My = { class: "config-field" }, Ty = { class: "input-wrapper" }, Ry = ["value"], zy = {
  key: 0,
  class: "validating-indicator"
}, Ly = {
  key: 1,
  class: "valid-indicator"
}, Py = {
  key: 0,
  class: "field-error"
}, Dy = { class: "config-field" }, Ny = { class: "strategy-options" }, Uy = ["value", "checked", "onChange"], Oy = { class: "strategy-content" }, By = { class: "strategy-label" }, Fy = { class: "strategy-description" }, Ay = { class: "config-field switch-field" }, Vy = { class: "switch-label" }, Wy = ["checked"], Gy = { class: "advanced-section" }, jy = { class: "advanced-content" }, qy = { class: "config-field" }, Hy = ["value"], Ky = ["value"], Jy = /* @__PURE__ */ Q({
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
    const n = t, i = c, p = $(!1), g = $(!1);
    _t(() => n.nameError, (y) => {
      p.value = !1, g.value = !y && n.name.length > 0;
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
    function r(y) {
      const w = y.target.value;
      i("update:name", w), g.value = !1, v && clearTimeout(v), w.length > 0 ? (p.value = !0, v = setTimeout(() => {
        i("validate-name", w);
      }, 400)) : p.value = !1;
    }
    function m() {
      n.name.length > 0 && i("validate-name", n.name);
    }
    return (y, w) => (s(), o("div", Iy, [
      b(st, null, {
        default: l(() => [...w[2] || (w[2] = [
          h("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", Ey, [
        e("div", My, [
          b(Jt, { required: "" }, {
            default: l(() => [...w[3] || (w[3] = [
              h("Environment Name", -1)
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
              onBlur: m
            }, null, 42, Ry),
            p.value ? (s(), o("span", zy, "...")) : g.value ? (s(), o("span", Ly, "✓")) : d("", !0)
          ]),
          t.nameError ? (s(), o("div", Py, a(t.nameError), 1)) : d("", !0),
          w[4] || (w[4] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", Dy, [
          b(Jt, null, {
            default: l(() => [...w[5] || (w[5] = [
              h("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", Ny, [
            (s(), o(V, null, te(u, (_) => e("label", {
              key: _.value,
              class: me(["strategy-option", { active: t.modelStrategy === _.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: _.value,
                checked: t.modelStrategy === _.value,
                onChange: (k) => i("update:modelStrategy", _.value)
              }, null, 40, Uy),
              e("div", Oy, [
                e("span", By, a(_.label), 1),
                e("span", Fy, a(_.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Ay, [
          e("label", Vy, [
            e("input", {
              type: "checkbox",
              checked: t.switchAfterImport,
              onChange: w[0] || (w[0] = (_) => i("update:switchAfterImport", _.target.checked))
            }, null, 40, Wy),
            w[6] || (w[6] = e("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        e("details", Gy, [
          w[8] || (w[8] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", jy, [
            e("div", qy, [
              b(Jt, null, {
                default: l(() => [...w[7] || (w[7] = [
                  h("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              e("select", {
                class: "backend-select",
                value: t.torchBackend,
                onChange: w[1] || (w[1] = (_) => i("update:torchBackend", _.target.value))
              }, [
                (s(!0), o(V, null, te(xe(fs), (_) => (s(), o("option", {
                  key: _,
                  value: _
                }, a(_) + a(_ === "auto" ? " (detect GPU)" : ""), 9, Ky))), 128))
              ], 40, Hy)
            ])
          ])
        ])
      ])
    ]));
  }
}), Yy = /* @__PURE__ */ Z(Jy, [["__scopeId", "data-v-89ea06a1"]]), Xy = { class: "import-flow" }, Qy = {
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
}, k0 = { class: "complete-message" }, b0 = { class: "complete-title" }, _0 = { class: "complete-details" }, $0 = { class: "complete-actions" }, C0 = /* @__PURE__ */ Q({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(t, { expose: c, emit: n }) {
    var Re, de, ge;
    const i = t, p = n, { previewTarballImport: g, previewGitImport: u, validateEnvironmentName: v, executeImport: r, executeGitImport: m, getImportProgress: y } = Ae();
    let w = null;
    const _ = $(null), k = $(i.resumeImport ?? !1), R = $(!1), F = $(!1), f = $(""), C = $(!1), L = $(null), M = $(""), x = $(null), j = $(!1), B = $(null), G = $(null), T = $({
      name: "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), E = $(null), N = $({
      message: ((Re = i.initialProgress) == null ? void 0 : Re.message) ?? "Preparing import...",
      phase: ((de = i.initialProgress) == null ? void 0 : de.phase) ?? "",
      progress: ((ge = i.initialProgress) == null ? void 0 : ge.progress) ?? 0,
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
    ], ee = D(() => {
      if (!G.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const fe = G.value;
      return {
        sourceEnvironment: fe.comfyui_version ? `ComfyUI ${fe.comfyui_version}` : "Unknown",
        workflows: fe.workflows.map((ie) => ie.name),
        models: fe.models.map((ie) => ({
          filename: ie.filename,
          size: 0,
          type: ie.relative_path.split("/")[0] || "model"
        })),
        nodes: fe.nodes.map((ie) => ie.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), Y = D(() => !C.value && !L.value && G.value && T.value.name.length > 0 && !E.value && (_.value || x.value));
    async function re(fe) {
      _.value = fe, C.value = !0, L.value = null, G.value = null;
      try {
        const ie = await g(fe);
        G.value = ie;
      } catch (ie) {
        L.value = ie instanceof Error ? ie.message : "Failed to analyze file", console.error("Preview error:", ie);
      } finally {
        C.value = !1;
      }
    }
    function H() {
      _.value = null, x.value = null, M.value = "", B.value = null, R.value = !1, F.value = !1, f.value = "", G.value = null, L.value = null, T.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, E.value = null, p("source-cleared");
    }
    function U() {
      _e(), H(), k.value = !1, C.value = !1, j.value = !1, N.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function P() {
      if (M.value.trim()) {
        j.value = !0, B.value = null;
        try {
          const fe = await u(M.value.trim());
          x.value = M.value.trim(), G.value = fe;
        } catch (fe) {
          B.value = fe instanceof Error ? fe.message : "Failed to analyze repository";
        } finally {
          j.value = !1;
        }
      }
    }
    function S(fe) {
      try {
        const ie = new URL(fe);
        return ie.host + ie.pathname.replace(/\.git$/, "");
      } catch {
        return fe;
      }
    }
    async function oe(fe) {
      if (!fe) {
        E.value = "Environment name is required";
        return;
      }
      try {
        const ie = await v(fe);
        E.value = ie.valid ? null : ie.error || "Invalid name";
      } catch {
        E.value = "Failed to validate name";
      }
    }
    async function ne() {
      if (T.value.name && !(!_.value && !x.value)) {
        k.value = !0, R.value = !1, N.value = { message: `Creating environment '${T.value.name}'...`, phase: "", progress: 0, error: null }, p("import-started");
        try {
          let fe;
          if (_.value)
            fe = await r(
              _.value,
              T.value.name,
              T.value.modelStrategy,
              T.value.torchBackend
            );
          else if (x.value)
            fe = await m(
              x.value,
              T.value.name,
              T.value.modelStrategy,
              T.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          fe.status === "started" ? Te() : (F.value = !1, f.value = fe.message, k.value = !1, R.value = !0);
        } catch (fe) {
          F.value = !1, f.value = fe instanceof Error ? fe.message : "Unknown error occurred during import", k.value = !1, R.value = !0;
        }
      }
    }
    async function Te() {
      if (w) return;
      const fe = async () => {
        try {
          const ae = await y();
          return N.value = {
            message: ae.message,
            phase: ae.phase || "",
            progress: ae.progress ?? (ae.state === "importing" ? 50 : 0),
            error: ae.error || null
          }, ae.state === "complete" ? (_e(), F.value = !0, f.value = `Environment '${ae.environment_name}' created successfully`, k.value = !1, R.value = !0, ae.environment_name && p("import-complete", ae.environment_name, T.value.switchAfterImport), !1) : ae.state === "error" ? (_e(), F.value = !1, f.value = ae.error || ae.message, k.value = !1, R.value = !0, !1) : !0;
        } catch (ae) {
          return console.error("Failed to poll import progress:", ae), !0;
        }
      };
      await fe() && (w = setInterval(async () => {
        await fe() || _e();
      }, 2e3));
    }
    function _e() {
      w && (clearInterval(w), w = null);
    }
    function Pe(fe) {
      return fe < 1024 ? `${fe} B` : fe < 1024 * 1024 ? `${(fe / 1024).toFixed(1)} KB` : fe < 1024 * 1024 * 1024 ? `${(fe / (1024 * 1024)).toFixed(1)} MB` : `${(fe / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Oe(async () => {
      try {
        const fe = await y();
        console.log("[ComfyGit ImportFlow] Import progress check:", fe.state, fe), fe.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", fe.environment_name), k.value = !0, T.value.name = fe.environment_name || "importing...", N.value = {
          progress: fe.progress ?? 0,
          message: fe.message || "Importing...",
          phase: fe.phase || "",
          error: null
        }, Te());
      } catch (fe) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", fe);
      }
    }), c({
      handleReset: U,
      isImporting: k,
      canImport: Y
    }), (fe, ie) => {
      var ae;
      return s(), o("div", Xy, [
        !_.value && !x.value && !k.value ? (s(), o("div", Qy, [
          b(J1, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: re
          }),
          ie[7] || (ie[7] = e("div", { class: "import-divider" }, [
            e("span", null, "or")
          ], -1)),
          e("div", Zy, [
            ie[5] || (ie[5] = e("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            e("div", e0, [
              Be(e("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": ie[0] || (ie[0] = (ze) => M.value = ze),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: ht(P, ["enter"]),
                disabled: j.value
              }, null, 40, t0), [
                [Tt, M.value]
              ]),
              b(se, {
                variant: "primary",
                size: "sm",
                disabled: !M.value.trim() || j.value,
                onClick: P
              }, {
                default: l(() => [
                  h(a(j.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            B.value ? (s(), o("div", s0, a(B.value), 1)) : d("", !0),
            ie[6] || (ie[6] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (_.value || x.value) && !k.value && !R.value ? (s(), o("div", o0, [
          e("div", n0, [
            _.value ? (s(), o("div", a0, [
              ie[8] || (ie[8] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", l0, [
                e("div", i0, a(_.value.name), 1),
                e("div", r0, a(Pe(_.value.size)), 1)
              ])
            ])) : x.value ? (s(), o("div", d0, [
              ie[10] || (ie[10] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
              e("div", c0, [
                e("div", u0, a(S(x.value)), 1),
                ie[9] || (ie[9] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : d("", !0),
            b(se, {
              variant: "ghost",
              size: "sm",
              onClick: H
            }, {
              default: l(() => [...ie[11] || (ie[11] = [
                h(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          C.value ? (s(), o("div", m0, [...ie[12] || (ie[12] = [
            e("div", { class: "loading-spinner" }, null, -1),
            e("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : L.value ? (s(), I(at, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [L.value]
          }, null, 8, ["details"])) : G.value ? (s(), I(Sy, {
            key: 2,
            "source-environment": ee.value.sourceEnvironment,
            workflows: ee.value.workflows,
            models: ee.value.models,
            nodes: ee.value.nodes,
            "git-branch": ee.value.gitBranch,
            "git-commit": ee.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : d("", !0),
          G.value ? (s(), I(Yy, {
            key: 3,
            name: T.value.name,
            "onUpdate:name": ie[1] || (ie[1] = (ze) => T.value.name = ze),
            "model-strategy": T.value.modelStrategy,
            "onUpdate:modelStrategy": ie[2] || (ie[2] = (ze) => T.value.modelStrategy = ze),
            "torch-backend": T.value.torchBackend,
            "onUpdate:torchBackend": ie[3] || (ie[3] = (ze) => T.value.torchBackend = ze),
            "switch-after-import": T.value.switchAfterImport,
            "onUpdate:switchAfterImport": ie[4] || (ie[4] = (ze) => T.value.switchAfterImport = ze),
            "name-error": E.value,
            onValidateName: oe
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : d("", !0),
          T.value.modelStrategy === "skip" && ((ae = G.value) != null && ae.models_needing_download) ? (s(), I(at, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${G.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : d("", !0),
          e("div", v0, [
            b(se, {
              variant: "secondary",
              size: "md",
              onClick: H
            }, {
              default: l(() => [...ie[13] || (ie[13] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(se, {
              variant: "primary",
              size: "md",
              disabled: !Y.value,
              onClick: ne
            }, {
              default: l(() => [...ie[14] || (ie[14] = [
                h(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : k.value ? (s(), o("div", f0, [
          e("p", g0, [
            ie[15] || (ie[15] = h(" Importing environment ", -1)),
            e("strong", null, a(T.value.name), 1),
            ie[16] || (ie[16] = h("... ", -1))
          ]),
          b(es, {
            progress: N.value.progress,
            message: N.value.message,
            "current-phase": N.value.phase,
            variant: N.value.error ? "error" : "default",
            "show-steps": !0,
            steps: le
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          N.value.error ? d("", !0) : (s(), o("p", p0, " This may take several minutes. Please wait... ")),
          N.value.error ? (s(), o("div", h0, [
            e("p", y0, a(N.value.error), 1)
          ])) : d("", !0)
        ])) : R.value ? (s(), o("div", w0, [
          e("div", {
            class: me(["complete-icon", F.value ? "success" : "error"])
          }, a(F.value ? "✓" : "✕"), 3),
          e("div", k0, [
            e("div", b0, a(F.value ? "Import Successful" : "Import Failed"), 1),
            e("div", _0, a(f.value), 1)
          ]),
          e("div", $0, [
            b(se, {
              variant: "primary",
              size: "md",
              onClick: U
            }, {
              default: l(() => [...ie[17] || (ie[17] = [
                h(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), qs = /* @__PURE__ */ Z(C0, [["__scopeId", "data-v-1e8688b2"]]), x0 = /* @__PURE__ */ Q({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(t, { emit: c }) {
    const n = c, i = $(!1);
    function p(g, u) {
      u && n("import-complete-switch", g);
    }
    return (g, u) => (s(), o(V, null, [
      b(Ke, null, {
        header: l(() => [
          b(Je, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: u[0] || (u[0] = (v) => i.value = !0)
          })
        ]),
        content: l(() => [
          b(qs, { onImportComplete: p })
        ]),
        _: 1
      }),
      b(mt, {
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
}), S0 = /* @__PURE__ */ Z(x0, [["__scopeId", "data-v-e13bfe76"]]), I0 = { class: "header-info" }, E0 = { class: "commit-hash" }, M0 = {
  key: 0,
  class: "commit-refs"
}, T0 = { class: "commit-message" }, R0 = { class: "commit-date" }, z0 = {
  key: 0,
  class: "loading"
}, L0 = {
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
}, V0 = { class: "change-item" }, W0 = /* @__PURE__ */ Q({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = Ae(), i = $(null), p = $(!0), g = D(() => {
      if (!i.value) return !1;
      const v = i.value.changes.workflows;
      return v.added.length > 0 || v.modified.length > 0 || v.deleted.length > 0;
    }), u = D(() => {
      if (!i.value) return !1;
      const v = i.value.changes.nodes;
      return v.added.length > 0 || v.removed.length > 0;
    });
    return Oe(async () => {
      try {
        i.value = await n(c.commit.hash);
      } finally {
        p.value = !1;
      }
    }), (v, r) => (s(), I(Ye, {
      size: "md",
      "show-close-button": !1,
      onClose: r[3] || (r[3] = (m) => v.$emit("close"))
    }, {
      header: l(() => {
        var m, y, w, _;
        return [
          e("div", I0, [
            r[4] || (r[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", E0, a(((m = i.value) == null ? void 0 : m.short_hash) || t.commit.short_hash || ((y = t.commit.hash) == null ? void 0 : y.slice(0, 7))), 1),
            (_ = (w = i.value) == null ? void 0 : w.refs) != null && _.length ? (s(), o("span", M0, [
              (s(!0), o(V, null, te(i.value.refs, (k) => (s(), o("span", {
                key: k,
                class: "ref-badge"
              }, a(k), 1))), 128))
            ])) : d("", !0)
          ]),
          b(pe, {
            variant: "ghost",
            size: "sm",
            onClick: r[0] || (r[0] = (k) => v.$emit("close"))
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
        var m, y;
        return [
          e("div", T0, a(((m = i.value) == null ? void 0 : m.message) || t.commit.message), 1),
          e("div", R0, a(((y = i.value) == null ? void 0 : y.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          p.value ? (s(), o("div", z0, "Loading details...")) : i.value ? (s(), o("div", L0, [
            e("div", P0, [
              e("span", D0, a(i.value.stats.files_changed) + " files", 1),
              e("span", N0, "+" + a(i.value.stats.insertions), 1),
              e("span", U0, "-" + a(i.value.stats.deletions), 1)
            ]),
            g.value ? (s(), o("div", O0, [
              b(Ft, { variant: "section" }, {
                default: l(() => [...r[6] || (r[6] = [
                  h("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(V, null, te(i.value.changes.workflows.added, (w) => (s(), o("div", {
                key: "add-" + w,
                class: "change-item added"
              }, [
                r[7] || (r[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(w), 1)
              ]))), 128)),
              (s(!0), o(V, null, te(i.value.changes.workflows.modified, (w) => (s(), o("div", {
                key: "mod-" + w,
                class: "change-item modified"
              }, [
                r[8] || (r[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(w), 1)
              ]))), 128)),
              (s(!0), o(V, null, te(i.value.changes.workflows.deleted, (w) => (s(), o("div", {
                key: "del-" + w,
                class: "change-item deleted"
              }, [
                r[9] || (r[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(w), 1)
              ]))), 128))
            ])) : d("", !0),
            u.value ? (s(), o("div", B0, [
              b(Ft, { variant: "section" }, {
                default: l(() => [...r[10] || (r[10] = [
                  h("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(V, null, te(i.value.changes.nodes.added, (w) => (s(), o("div", {
                key: "add-" + w.name,
                class: "change-item added"
              }, [
                r[11] || (r[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(w.name), 1),
                w.version ? (s(), o("span", F0, "(" + a(w.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (s(!0), o(V, null, te(i.value.changes.nodes.removed, (w) => (s(), o("div", {
                key: "rem-" + w.name,
                class: "change-item deleted"
              }, [
                r[12] || (r[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(w.name), 1)
              ]))), 128))
            ])) : d("", !0),
            i.value.changes.models.resolved > 0 ? (s(), o("div", A0, [
              b(Ft, { variant: "section" }, {
                default: l(() => [...r[13] || (r[13] = [
                  h("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", V0, [
                r[14] || (r[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: l(() => [
        b(pe, {
          variant: "secondary",
          onClick: r[1] || (r[1] = (m) => v.$emit("createBranch", t.commit))
        }, {
          default: l(() => [...r[15] || (r[15] = [
            h(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        b(pe, {
          variant: "primary",
          onClick: r[2] || (r[2] = (m) => v.$emit("checkout", t.commit))
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
}), G0 = /* @__PURE__ */ Z(W0, [["__scopeId", "data-v-d256ff6d"]]), j0 = { class: "base-textarea-wrapper" }, q0 = ["value", "rows", "placeholder", "disabled", "maxlength"], H0 = {
  key: 0,
  class: "base-textarea-count"
}, K0 = /* @__PURE__ */ Q({
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
    return (c, n) => (s(), o("div", j0, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeydown: [
          n[1] || (n[1] = ht(Le((i) => c.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = ht(Le((i) => c.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, q0),
      t.showCharCount && t.maxLength ? (s(), o("div", H0, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : d("", !0)
    ]));
  }
}), Is = /* @__PURE__ */ Z(K0, [["__scopeId", "data-v-5516e6fc"]]), J0 = ["checked", "disabled"], Y0 = { class: "base-checkbox-box" }, X0 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Q0 = {
  key: 0,
  class: "base-checkbox-label"
}, Z0 = /* @__PURE__ */ Q({
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
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked))
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
        Se(c.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Es = /* @__PURE__ */ Z(Z0, [["__scopeId", "data-v-bf17c831"]]), ew = { class: "popover-header" }, tw = { class: "popover-body" }, sw = {
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
}, Tw = { class: "error-header" }, Rw = { class: "error-title" }, zw = { class: "issues-list" }, Lw = { class: "message-section" }, Pw = { class: "popover-footer" }, Dw = /* @__PURE__ */ Q({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, i = c, { commit: p } = Ae(), g = $(""), u = $(!1), v = $(!1), r = $(null), m = D(() => {
      if (!n.status) return !1;
      const F = n.status.workflows;
      return F.new.length > 0 || F.modified.length > 0 || F.deleted.length > 0 || n.status.has_changes;
    }), y = D(() => {
      if (!n.status) return !1;
      const F = n.status.workflows, f = n.status.git_changes;
      return F.new.length > 0 || F.modified.length > 0 || F.deleted.length > 0 || f.nodes_added.length > 0 || f.nodes_removed.length > 0;
    }), w = D(() => {
      var F;
      return (F = n.status) != null && F.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (f) => f.has_issues && (f.sync_state === "new" || f.sync_state === "modified")
      ) : [];
    }), _ = D(() => w.value.length > 0), k = D(() => _.value && !v.value);
    async function R() {
      var F, f, C;
      if (!(_.value && !v.value) && !(!m.value || !g.value.trim() || u.value)) {
        u.value = !0, r.value = null;
        try {
          const L = await p(g.value.trim(), v.value);
          L.status === "success" ? (r.value = {
            type: "success",
            message: `Committed: ${((F = L.summary) == null ? void 0 : F.new) || 0} new, ${((f = L.summary) == null ? void 0 : f.modified) || 0} modified, ${((C = L.summary) == null ? void 0 : C.deleted) || 0} deleted`
          }, g.value = "", v.value = !1, setTimeout(() => i("committed"), 1e3)) : L.status === "no_changes" ? r.value = { type: "error", message: "No changes to commit" } : L.status === "blocked" ? r.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : r.value = { type: "error", message: L.message || "Commit failed" };
        } catch (L) {
          r.value = { type: "error", message: L instanceof Error ? L.message : "Commit failed" };
        } finally {
          u.value = !1;
        }
      }
    }
    return (F, f) => t.asModal ? (s(), I(We, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: f[5] || (f[5] = (C) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: f[4] || (f[4] = Le(() => {
          }, ["stop"]))
        }, [
          e("div", ew, [
            f[11] || (f[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: f[0] || (f[0] = (C) => i("close"))
            }, [...f[10] || (f[10] = [
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
            t.status && m.value ? (s(), o("div", sw, [
              t.status.workflows.new.length ? (s(), o("div", ow, [
                f[12] || (f[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : d("", !0),
              t.status.workflows.modified.length ? (s(), o("div", nw, [
                f[13] || (f[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : d("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", aw, [
                f[14] || (f[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", lw, [
                f[15] || (f[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", iw, [
                f[16] || (f[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : d("", !0),
              y.value ? d("", !0) : (s(), o("div", rw, [...f[17] || (f[17] = [
                e("span", { class: "change-icon modified" }, "~", -1),
                e("span", null, "Configuration updated", -1)
              ])]))
            ])) : t.status ? (s(), o("div", dw, " No changes to commit ")) : (s(), o("div", cw, " Loading... ")),
            _.value ? (s(), o("div", uw, [
              e("div", mw, [
                f[18] || (f[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", vw, a(w.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", fw, [
                (s(!0), o(V, null, te(w.value, (C) => (s(), o("div", {
                  key: C.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a(C.name), 1),
                  h(": " + a(C.issue_summary), 1)
                ]))), 128))
              ]),
              b(Es, {
                modelValue: v.value,
                "onUpdate:modelValue": f[1] || (f[1] = (C) => v.value = C),
                class: "allow-issues-toggle"
              }, {
                default: l(() => [...f[19] || (f[19] = [
                  h(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : d("", !0),
            e("div", gw, [
              b(Is, {
                modelValue: g.value,
                "onUpdate:modelValue": f[2] || (f[2] = (C) => g.value = C),
                placeholder: k.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
                disabled: !m.value || u.value || k.value,
                rows: 3,
                onCtrlEnter: R
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            r.value ? (s(), o("div", {
              key: 4,
              class: me(["result", r.value.type])
            }, a(r.value.message), 3)) : d("", !0)
          ]),
          e("div", pw, [
            b(pe, {
              variant: "secondary",
              onClick: f[3] || (f[3] = (C) => i("close"))
            }, {
              default: l(() => [...f[20] || (f[20] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(pe, {
              variant: v.value ? "danger" : "primary",
              disabled: !m.value || !g.value.trim() || u.value || k.value,
              loading: u.value,
              onClick: R
            }, {
              default: l(() => [
                h(a(u.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", hw, [
      e("div", yw, [
        f[22] || (f[22] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: f[6] || (f[6] = (C) => i("close"))
        }, [...f[21] || (f[21] = [
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
        t.status && m.value ? (s(), o("div", kw, [
          t.status.workflows.new.length ? (s(), o("div", bw, [
            f[23] || (f[23] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          t.status.workflows.modified.length ? (s(), o("div", _w, [
            f[24] || (f[24] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", $w, [
            f[25] || (f[25] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", Cw, [
            f[26] || (f[26] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", xw, [
            f[27] || (f[27] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0),
          y.value ? d("", !0) : (s(), o("div", Sw, [...f[28] || (f[28] = [
            e("span", { class: "change-icon modified" }, "~", -1),
            e("span", null, "Configuration updated", -1)
          ])]))
        ])) : t.status ? (s(), o("div", Iw, " No changes to commit ")) : (s(), o("div", Ew, " Loading... ")),
        _.value ? (s(), o("div", Mw, [
          e("div", Tw, [
            f[29] || (f[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", Rw, a(w.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", zw, [
            (s(!0), o(V, null, te(w.value, (C) => (s(), o("div", {
              key: C.name,
              class: "issue-item"
            }, [
              e("strong", null, a(C.name), 1),
              h(": " + a(C.issue_summary), 1)
            ]))), 128))
          ]),
          b(Es, {
            modelValue: v.value,
            "onUpdate:modelValue": f[7] || (f[7] = (C) => v.value = C),
            class: "allow-issues-toggle"
          }, {
            default: l(() => [...f[30] || (f[30] = [
              h(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : d("", !0),
        e("div", Lw, [
          b(Is, {
            modelValue: g.value,
            "onUpdate:modelValue": f[8] || (f[8] = (C) => g.value = C),
            placeholder: k.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || u.value || k.value,
            rows: 3,
            onCtrlEnter: R
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        r.value ? (s(), o("div", {
          key: 4,
          class: me(["result", r.value.type])
        }, a(r.value.message), 3)) : d("", !0)
      ]),
      e("div", Pw, [
        b(pe, {
          variant: "secondary",
          onClick: f[9] || (f[9] = (C) => i("close"))
        }, {
          default: l(() => [...f[31] || (f[31] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b(pe, {
          variant: v.value ? "danger" : "primary",
          disabled: !m.value || !g.value.trim() || u.value || k.value,
          loading: u.value,
          onClick: R
        }, {
          default: l(() => [
            h(a(u.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Hs = /* @__PURE__ */ Z(Dw, [["__scopeId", "data-v-aa2a9bdf"]]), Nw = { class: "modal-header" }, Uw = { class: "modal-body" }, Ow = { class: "switch-message" }, Bw = { class: "switch-details" }, Fw = { class: "modal-actions" }, Aw = /* @__PURE__ */ Q({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), I(We, { to: "body" }, [
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
          e("div", Nw, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Uw, [
            e("p", Ow, [
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
            e("p", Bw, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Fw, [
            b(se, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(se, {
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
}), Vw = /* @__PURE__ */ Z(Aw, [["__scopeId", "data-v-e9c5253e"]]), Ww = {
  key: 0,
  class: "modal-overlay"
}, Gw = { class: "modal-content" }, jw = { class: "modal-body" }, qw = { class: "progress-info" }, Hw = { class: "progress-percentage" }, Kw = { class: "progress-state" }, Jw = { class: "switch-steps" }, Yw = { class: "step-icon" }, Xw = { class: "step-label" }, Qw = /* @__PURE__ */ Q({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, n = D(() => {
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
    }), i = D(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), p = D(() => {
      const g = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], u = g.findIndex((v) => v.state === c.state);
      return g.map((v, r) => {
        let m = "pending", y = "○";
        return r < u ? (m = "completed", y = "✓") : r === u && (m = "active", y = "⟳"), {
          ...v,
          status: m,
          icon: y
        };
      });
    });
    return (g, u) => (s(), I(We, { to: "body" }, [
      t.show ? (s(), o("div", Ww, [
        e("div", Gw, [
          u[1] || (u[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", jw, [
            b(js, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", qw, [
              e("div", Hw, a(t.progress) + "%", 1),
              e("div", Kw, a(n.value), 1)
            ]),
            e("div", Jw, [
              (s(!0), o(V, null, te(p.value, (v) => (s(), o("div", {
                key: v.state,
                class: me(["switch-step", v.status])
              }, [
                e("span", Yw, a(v.icon), 1),
                e("span", Xw, a(v.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), Zw = /* @__PURE__ */ Z(Qw, [["__scopeId", "data-v-768a5078"]]), ek = { class: "modal-header" }, tk = { class: "modal-body" }, sk = {
  key: 0,
  class: "node-section"
}, ok = { class: "node-list" }, nk = {
  key: 1,
  class: "node-section"
}, ak = { class: "node-list" }, lk = { class: "modal-actions" }, ik = /* @__PURE__ */ Q({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), I(We, { to: "body" }, [
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
          e("div", ek, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", tk, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", sk, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", ok, [
                (s(!0), o(V, null, te(t.mismatchDetails.missing_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + a(i), 1))), 128))
              ])
            ])) : d("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", nk, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", ak, [
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
          e("div", lk, [
            b(se, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[10] || (n[10] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(se, {
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
}), rk = /* @__PURE__ */ Z(ik, [["__scopeId", "data-v-7cad7518"]]), dk = /* @__PURE__ */ Q({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = $(null);
    async function i() {
      var g;
      await ((g = n.value) == null ? void 0 : g.saveSettings());
    }
    function p() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (g, u) => (s(), I(Ye, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: u[1] || (u[1] = (v) => g.$emit("close"))
    }, {
      body: l(() => [
        b(As, {
          ref_key: "contentRef",
          ref: n,
          "workspace-path": t.workspacePath,
          onSaved: p
        }, null, 8, ["workspace-path"])
      ]),
      footer: l(() => {
        var v;
        return [
          b(pe, {
            variant: "primary",
            disabled: !((v = n.value) != null && v.hasChanges),
            onClick: i
          }, {
            default: l(() => [...u[2] || (u[2] = [
              h(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(pe, {
            variant: "secondary",
            onClick: u[0] || (u[0] = (r) => g.$emit("close"))
          }, {
            default: l(() => [...u[3] || (u[3] = [
              h(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), ck = /* @__PURE__ */ Z(dk, [["__scopeId", "data-v-fac00ae7"]]), uk = { class: "header-actions" }, mk = {
  key: 0,
  class: "wizard-step"
}, vk = { class: "form-field" }, fk = ["placeholder"], gk = {
  key: 0,
  class: "form-error"
}, pk = { class: "form-field form-field--checkbox" }, hk = { class: "form-checkbox" }, yk = {
  key: 0,
  class: "form-field"
}, wk = ["placeholder"], kk = {
  key: 0,
  class: "form-info"
}, bk = {
  key: 1,
  class: "form-suggestion"
}, _k = {
  key: 2,
  class: "form-error"
}, $k = {
  key: 3,
  class: "form-info"
}, Ck = {
  key: 1,
  class: "wizard-step"
}, xk = {
  key: 0,
  class: "cli-warning"
}, Sk = {
  key: 1,
  class: "env-landing"
}, Ik = { class: "env-list" }, Ek = ["value"], Mk = { class: "env-name" }, Tk = {
  key: 2,
  class: "env-create"
}, Rk = { class: "form-field" }, zk = { class: "form-field" }, Lk = ["value"], Pk = { class: "form-field" }, Dk = ["disabled"], Nk = ["value"], Uk = { class: "form-field" }, Ok = ["value"], Bk = { class: "form-field form-field--checkbox" }, Fk = { class: "form-checkbox" }, Ak = {
  key: 0,
  class: "form-error"
}, Vk = {
  key: 1,
  class: "env-creating"
}, Wk = { class: "creating-intro" }, Gk = {
  key: 3,
  class: "env-import"
}, Et = 10, jk = 600 * 1e3, Ms = 1800 * 1e3, qk = /* @__PURE__ */ Q({
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
      initializeWorkspace: p,
      getInitializeProgress: g,
      validatePath: u,
      createEnvironment: v,
      getCreateProgress: r,
      getImportProgress: m,
      getComfyUIReleases: y
    } = Ae(), w = $(n.initialStep || 1), _ = $(null), k = $("landing"), R = $(!1), F = $(!1), f = $(!1), C = $(null), L = $(n.defaultPath), M = $(!!n.detectedModelsDir), x = $(n.detectedModelsDir || ""), j = $(null), B = $(null), G = $(null), T = $(null), E = $("my-new-env"), N = $(Ws), le = $("latest"), ee = $(Gs), Y = $(!0), re = $(null), H = $(null), U = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), P = $(!1), S = $(!1), oe = $(!1), ne = $({ progress: 0, message: "" }), Te = $({ progress: 0, message: "" }), _e = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], Pe = $(0), Re = $(null), de = $(0), ge = $(null), fe = D(() => {
      var ce, K;
      const ve = (ce = L.value) == null ? void 0 : ce.trim(), J = !j.value, $e = !M.value || !B.value && ((K = x.value) == null ? void 0 : K.trim());
      return ve && J && $e;
    }), ie = D(() => {
      var ve;
      return (ve = E.value) == null ? void 0 : ve.trim();
    }), ae = D(() => !!(w.value === 2 || H.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), ze = D(() => H.value || n.workspacePath || null);
    async function Ee() {
      var ve;
      if (j.value = null, !!((ve = L.value) != null && ve.trim()))
        try {
          const J = await u({ path: L.value, type: "workspace" });
          J.valid || (j.value = J.error || "Invalid path");
        } catch (J) {
          j.value = J instanceof Error ? J.message : "Validation failed";
        }
    }
    async function ot() {
      var ve;
      if (B.value = null, G.value = null, T.value = null, !!((ve = x.value) != null && ve.trim()))
        try {
          const J = await u({ path: x.value, type: "models" });
          if (J.valid)
            T.value = J.model_count ?? null;
          else if (B.value = J.error || "Invalid path", J.suggestion) {
            G.value = J.suggestion, x.value = J.suggestion, B.value = null;
            const $e = await u({ path: J.suggestion, type: "models" });
            $e.valid && (T.value = $e.model_count ?? null);
          }
        } catch (J) {
          B.value = J instanceof Error ? J.message : "Validation failed";
        }
    }
    async function dt() {
      var ve, J, $e, ce, K;
      if (j.value = null, B.value = null, await Ee(), (ve = j.value) != null && ve.includes("already exists")) {
        j.value = null, H.value = ((J = L.value) == null ? void 0 : J.trim()) || n.defaultPath, w.value = 2, Ce();
        return;
      }
      if (!j.value && !(M.value && (($e = x.value) != null && $e.trim()) && (await ot(), B.value))) {
        S.value = !0;
        try {
          await p({
            workspace_path: ((ce = L.value) == null ? void 0 : ce.trim()) || n.defaultPath,
            models_directory: M.value && ((K = x.value) == null ? void 0 : K.trim()) || null
          }), Pe.value = 0, Re.value = Date.now();
          const O = setInterval(async () => {
            var A;
            if (Re.value && Date.now() - Re.value > jk) {
              clearInterval(O), S.value = !1, j.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const X = await g();
              if (Pe.value = 0, X.state === "idle" && S.value) {
                clearInterval(O), S.value = !1, j.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              ne.value = { progress: X.progress, message: X.message }, X.state === "complete" ? (clearInterval(O), S.value = !1, H.value = ((A = L.value) == null ? void 0 : A.trim()) || n.defaultPath, w.value = 2, Ce()) : X.state === "error" && (clearInterval(O), S.value = !1, j.value = X.error || "Workspace creation failed");
            } catch (X) {
              Pe.value++, console.warn(`Polling failure ${Pe.value}/${Et}:`, X), Pe.value >= Et && (clearInterval(O), S.value = !1, j.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (O) {
          S.value = !1, j.value = O instanceof Error ? O.message : "Failed to create workspace";
        }
      }
    }
    async function vt() {
      oe.value = !0, re.value = null;
      try {
        const ve = {
          name: E.value.trim() || "my-new-env",
          python_version: N.value,
          comfyui_version: le.value,
          torch_backend: ee.value,
          switch_after: Y.value,
          workspace_path: H.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await v(ve)).status === "started") {
          de.value = 0, ge.value = Date.now();
          const $e = setInterval(async () => {
            if (ge.value && Date.now() - ge.value > Ms) {
              clearInterval($e), oe.value = !1, re.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const ce = await r();
              if (de.value = 0, ce.state === "idle" && oe.value) {
                clearInterval($e), oe.value = !1, re.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Te.value = {
                progress: ce.progress ?? 0,
                message: ce.message,
                phase: ce.phase
              }, ce.state === "complete") {
                clearInterval($e), oe.value = !1;
                const K = ce.environment_name || ve.name;
                Y.value ? i("complete", K, H.value) : (k.value = "landing", i("environment-created-no-switch", K));
              } else ce.state === "error" && (clearInterval($e), oe.value = !1, re.value = ce.error || "Environment creation failed");
            } catch (ce) {
              de.value++, console.warn(`Polling failure ${de.value}/${Et}:`, ce), de.value >= Et && (clearInterval($e), oe.value = !1, re.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ve) {
        oe.value = !1, re.value = ve instanceof Error ? ve.message : "Unknown error";
      }
    }
    async function Ce() {
      P.value = !0;
      try {
        U.value = await y();
      } catch (ve) {
        console.error("Failed to load ComfyUI releases:", ve);
      } finally {
        P.value = !1;
      }
    }
    function et() {
      _.value && i("switch-environment", _.value, H.value);
    }
    function Xe() {
      k.value === "create" || k.value === "import" ? k.value = "landing" : w.value === 2 && n.setupState === "no_workspace" && (w.value = 1);
    }
    function je(ve, J) {
      F.value = !1, J ? i("complete", ve, H.value) : (i("environment-created-no-switch", ve), k.value = "landing");
    }
    function ft() {
    }
    Oe(async () => {
      n.detectedModelsDir && (x.value = n.detectedModelsDir), n.workspacePath && (H.value = n.workspacePath), w.value === 2 && (Ce(), await ke());
    });
    async function ke() {
      try {
        const ve = await r();
        if (console.log("[ComfyGit] Create progress check:", ve.state, ve), ve.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ve.environment_name), k.value = "create", oe.value = !0, E.value = ve.environment_name || "my-new-env", Te.value = {
            progress: ve.progress ?? 0,
            message: ve.message,
            phase: ve.phase
          }, Ve();
          return;
        }
      } catch (ve) {
        console.log("[ComfyGit] Create progress check failed:", ve);
      }
      try {
        const ve = await m();
        console.log("[ComfyGit] Import progress check:", ve.state, ve), ve.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ve.environment_name), C.value = {
          message: ve.message || "Importing...",
          phase: ve.phase || "",
          progress: ve.progress ?? 0
        }, f.value = !0, k.value = "import", F.value = !0);
      } catch (ve) {
        console.log("[ComfyGit] Import progress check failed:", ve);
      }
    }
    async function Ve() {
      de.value = 0, ge.value = Date.now();
      let ve = null;
      const J = async () => {
        if (ge.value && Date.now() - ge.value > Ms)
          return ve && clearInterval(ve), oe.value = !1, re.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const ce = await r();
          if (de.value = 0, ce.state === "idle" && oe.value)
            return ve && clearInterval(ve), oe.value = !1, re.value = "Environment creation was interrupted. Please try again.", !1;
          if (Te.value = {
            progress: ce.progress ?? 0,
            message: ce.message,
            phase: ce.phase
          }, ce.state === "complete") {
            ve && clearInterval(ve), oe.value = !1;
            const K = ce.environment_name || E.value;
            return i("complete", K, H.value), !1;
          } else if (ce.state === "error")
            return ve && clearInterval(ve), oe.value = !1, re.value = ce.error || "Environment creation failed", !1;
          return !0;
        } catch (ce) {
          return de.value++, console.warn(`Polling failure ${de.value}/${Et}:`, ce), de.value >= Et ? (ve && clearInterval(ve), oe.value = !1, re.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await J() && (ve = setInterval(async () => {
        !await J() && ve && clearInterval(ve);
      }, 2e3));
    }
    return (ve, J) => (s(), o(V, null, [
      b(Ye, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: J[14] || (J[14] = ($e) => ve.$emit("close"))
      }, {
        header: l(() => [
          J[18] || (J[18] = e("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          e("div", uk, [
            ae.value ? (s(), o("button", {
              key: 0,
              class: "settings-btn",
              title: "Workspace Settings",
              onClick: J[0] || (J[0] = ($e) => R.value = !0)
            }, [...J[16] || (J[16] = [
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
              class: "base-modal-close",
              onClick: J[1] || (J[1] = ($e) => ve.$emit("close"))
            }, [...J[17] || (J[17] = [
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
          var $e;
          return [
            w.value === 1 ? (s(), o("div", mk, [
              J[22] || (J[22] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              e("div", vk, [
                J[19] || (J[19] = e("label", { class: "form-label" }, "Workspace Path", -1)),
                Be(e("input", {
                  "onUpdate:modelValue": J[2] || (J[2] = (ce) => L.value = ce),
                  type: "text",
                  class: "form-input",
                  placeholder: t.defaultPath
                }, null, 8, fk), [
                  [Tt, L.value]
                ]),
                j.value ? (s(), o("p", gk, a(j.value), 1)) : d("", !0)
              ]),
              e("div", pk, [
                e("label", hk, [
                  Be(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": J[3] || (J[3] = (ce) => M.value = ce)
                  }, null, 512), [
                    [Xt, M.value]
                  ]),
                  J[20] || (J[20] = e("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              M.value ? (s(), o("div", yk, [
                J[21] || (J[21] = e("label", { class: "form-label" }, "Models Directory", -1)),
                Be(e("input", {
                  "onUpdate:modelValue": J[4] || (J[4] = (ce) => x.value = ce),
                  type: "text",
                  class: "form-input",
                  placeholder: t.detectedModelsDir || "/path/to/models"
                }, null, 8, wk), [
                  [Tt, x.value]
                ]),
                t.detectedModelsDir && !x.value ? (s(), o("p", kk, " Detected: " + a(t.detectedModelsDir), 1)) : d("", !0),
                G.value ? (s(), o("p", bk, " Did you mean: " + a(G.value), 1)) : d("", !0),
                B.value ? (s(), o("p", _k, a(B.value), 1)) : d("", !0),
                T.value !== null && !B.value ? (s(), o("p", $k, " Found " + a(T.value) + " model files ", 1)) : d("", !0)
              ])) : d("", !0),
              S.value ? (s(), I(es, {
                key: 1,
                progress: ne.value.progress,
                message: ne.value.message
              }, null, 8, ["progress", "message"])) : d("", !0)
            ])) : d("", !0),
            w.value === 2 ? (s(), o("div", Ck, [
              n.cliInstalled ? d("", !0) : (s(), o("div", xk, [...J[23] || (J[23] = [
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
              k.value === "landing" ? (s(), o("div", Sk, [
                J[27] || (J[27] = e("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                e("button", {
                  class: "landing-option",
                  onClick: J[5] || (J[5] = (ce) => k.value = "create")
                }, [...J[24] || (J[24] = [
                  e("span", { class: "option-icon" }, "➕", -1),
                  e("div", { class: "option-content" }, [
                    e("span", { class: "option-title" }, "Create New Environment"),
                    e("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                  ], -1),
                  e("span", { class: "option-arrow" }, "▸", -1)
                ])]),
                e("button", {
                  class: "landing-option",
                  onClick: J[6] || (J[6] = (ce) => {
                    f.value = !1, k.value = "import";
                  })
                }, [...J[25] || (J[25] = [
                  e("span", { class: "option-icon" }, "📦", -1),
                  e("div", { class: "option-content" }, [
                    e("span", { class: "option-title" }, "Import Environment"),
                    e("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                  ], -1),
                  e("span", { class: "option-arrow" }, "▸", -1)
                ])]),
                ($e = n.existingEnvironments) != null && $e.length ? (s(), o(V, { key: 0 }, [
                  J[26] || (J[26] = e("div", { class: "landing-divider" }, [
                    e("span", null, "or switch to existing")
                  ], -1)),
                  e("div", Ik, [
                    (s(!0), o(V, null, te(n.existingEnvironments, (ce) => (s(), o("label", {
                      key: ce,
                      class: me(["env-option", { selected: _.value === ce }])
                    }, [
                      Be(e("input", {
                        type: "radio",
                        name: "env-select",
                        value: ce,
                        "onUpdate:modelValue": J[7] || (J[7] = (K) => _.value = K)
                      }, null, 8, Ek), [
                        [Kt, _.value]
                      ]),
                      e("span", Mk, a(ce), 1)
                    ], 2))), 128))
                  ]),
                  _.value ? (s(), I(pe, {
                    key: 0,
                    variant: "primary",
                    onClick: et
                  }, {
                    default: l(() => [
                      h(" Switch to " + a(_.value), 1)
                    ]),
                    _: 1
                  })) : d("", !0)
                ], 64)) : d("", !0)
              ])) : k.value === "create" ? (s(), o("div", Tk, [
                oe.value ? (s(), o("div", Vk, [
                  e("p", Wk, [
                    J[34] || (J[34] = h(" Creating environment ", -1)),
                    e("strong", null, a(E.value), 1),
                    J[35] || (J[35] = h("... ", -1))
                  ]),
                  b(es, {
                    progress: Te.value.progress,
                    message: Te.value.message,
                    "current-phase": Te.value.phase,
                    "show-steps": !0,
                    steps: _e
                  }, null, 8, ["progress", "message", "current-phase"]),
                  J[36] || (J[36] = e("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                ])) : (s(), o(V, { key: 0 }, [
                  J[33] || (J[33] = e("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                  e("div", Rk, [
                    J[28] || (J[28] = e("label", { class: "form-label" }, "Environment Name", -1)),
                    Be(e("input", {
                      "onUpdate:modelValue": J[8] || (J[8] = (ce) => E.value = ce),
                      type: "text",
                      class: "form-input",
                      placeholder: "my-new-env"
                    }, null, 512), [
                      [Tt, E.value]
                    ])
                  ]),
                  e("div", zk, [
                    J[29] || (J[29] = e("label", { class: "form-label" }, "Python Version", -1)),
                    Be(e("select", {
                      "onUpdate:modelValue": J[9] || (J[9] = (ce) => N.value = ce),
                      class: "form-select"
                    }, [
                      (s(!0), o(V, null, te(xe(Vs), (ce) => (s(), o("option", {
                        key: ce,
                        value: ce
                      }, a(ce), 9, Lk))), 128))
                    ], 512), [
                      [Rt, N.value]
                    ])
                  ]),
                  e("div", Pk, [
                    J[30] || (J[30] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                    Be(e("select", {
                      "onUpdate:modelValue": J[10] || (J[10] = (ce) => le.value = ce),
                      class: "form-select",
                      disabled: P.value
                    }, [
                      (s(!0), o(V, null, te(U.value, (ce) => (s(), o("option", {
                        key: ce.tag_name,
                        value: ce.tag_name
                      }, a(ce.name), 9, Nk))), 128))
                    ], 8, Dk), [
                      [Rt, le.value]
                    ])
                  ]),
                  e("div", Uk, [
                    J[31] || (J[31] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                    Be(e("select", {
                      "onUpdate:modelValue": J[11] || (J[11] = (ce) => ee.value = ce),
                      class: "form-select"
                    }, [
                      (s(!0), o(V, null, te(xe(fs), (ce) => (s(), o("option", {
                        key: ce,
                        value: ce
                      }, a(ce) + a(ce === "auto" ? " (detect GPU)" : ""), 9, Ok))), 128))
                    ], 512), [
                      [Rt, ee.value]
                    ])
                  ]),
                  e("div", Bk, [
                    e("label", Fk, [
                      Be(e("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": J[12] || (J[12] = (ce) => Y.value = ce)
                      }, null, 512), [
                        [Xt, Y.value]
                      ]),
                      J[32] || (J[32] = e("span", null, "Switch to this environment after creation", -1))
                    ])
                  ]),
                  re.value ? (s(), o("div", Ak, a(re.value), 1)) : d("", !0)
                ], 64))
              ])) : k.value === "import" ? (s(), o("div", Gk, [
                b(qs, {
                  "workspace-path": H.value,
                  "resume-import": f.value,
                  "initial-progress": C.value ?? void 0,
                  onImportComplete: je,
                  onImportStarted: J[13] || (J[13] = (ce) => F.value = !0),
                  onSourceCleared: ft
                }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
              ])) : d("", !0)
            ])) : d("", !0)
          ];
        }),
        footer: l(() => [
          w.value === 1 ? (s(), I(pe, {
            key: 0,
            variant: "primary",
            disabled: !fe.value || S.value,
            onClick: dt
          }, {
            default: l(() => [
              h(a(S.value ? "Creating..." : "Next"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : w.value === 2 ? (s(), o(V, { key: 1 }, [
            !oe.value && !F.value && (k.value !== "landing" || n.setupState === "no_workspace" && !H.value) ? (s(), I(pe, {
              key: 0,
              variant: "secondary",
              onClick: Xe
            }, {
              default: l(() => [...J[37] || (J[37] = [
                h(" Back ", -1)
              ])]),
              _: 1
            })) : d("", !0),
            k.value === "create" ? (s(), I(pe, {
              key: 1,
              variant: "primary",
              disabled: !ie.value || oe.value,
              onClick: vt
            }, {
              default: l(() => [
                h(a(oe.value ? "Creating..." : Y.value ? "Create & Switch" : "Create Environment"), 1)
              ]),
              _: 1
            }, 8, ["disabled"])) : d("", !0)
          ], 64)) : d("", !0)
        ]),
        _: 1
      }),
      R.value ? (s(), I(ck, {
        key: 0,
        "workspace-path": ze.value,
        onClose: J[15] || (J[15] = ($e) => R.value = !1)
      }, null, 8, ["workspace-path"])) : d("", !0)
    ], 64));
  }
}), Hk = /* @__PURE__ */ Z(qk, [["__scopeId", "data-v-b300b9ab"]]), Kk = { class: "comfygit-panel" }, Jk = { class: "panel-header" }, Yk = { class: "header-left" }, Xk = {
  key: 0,
  class: "header-info"
}, Qk = { class: "header-actions" }, Zk = { class: "env-switcher" }, eb = {
  key: 0,
  class: "header-info"
}, tb = { class: "branch-name" }, sb = { class: "panel-main" }, ob = { class: "sidebar" }, nb = { class: "sidebar-content" }, ab = { class: "sidebar-section" }, lb = { class: "sidebar-section" }, ib = { class: "sidebar-section" }, rb = { class: "content-area" }, db = {
  key: 0,
  class: "error-message"
}, cb = {
  key: 1,
  class: "loading"
}, ub = { class: "dialog-content env-selector-dialog" }, mb = { class: "dialog-header" }, vb = { class: "dialog-body" }, fb = { class: "env-list" }, gb = { class: "env-info" }, pb = { class: "env-name-row" }, hb = { class: "env-indicator" }, yb = { class: "env-name" }, wb = {
  key: 0,
  class: "env-branch"
}, kb = {
  key: 1,
  class: "current-label"
}, bb = { class: "env-stats" }, _b = ["onClick"], $b = { class: "toast-container" }, Cb = { class: "toast-message" }, xb = /* @__PURE__ */ Q({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const n = t, i = c, {
      getStatus: p,
      getHistory: g,
      getBranches: u,
      checkout: v,
      createBranch: r,
      switchBranch: m,
      deleteBranch: y,
      getEnvironments: w,
      switchEnvironment: _,
      getSwitchProgress: k,
      deleteEnvironment: R,
      syncEnvironmentManually: F,
      repairWorkflowModels: f,
      getSetupStatus: C
    } = Ae(), L = Ds();
    function M(W) {
      window.open(W, "_blank", "noopener,noreferrer");
    }
    const x = $(null), j = $([]), B = $([]), G = $([]), T = D(() => G.value.find((W) => W.is_current)), E = $(null), N = $(!1), le = $(1), ee = D(() => {
      var W;
      return ((W = E.value) == null ? void 0 : W.state) || "managed";
    }), Y = $(!1), re = $(null), H = $(null), U = $(!1), P = $(null), S = $(null), oe = $(null), ne = $(!1), Te = $(!1), _e = $(""), Pe = $(null), Re = $({ state: "idle", progress: 0, message: "" });
    let de = null, ge = null;
    const fe = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, ie = n.initialView ? fe[n.initialView] : null, ae = $((ie == null ? void 0 : ie.view) ?? "status"), ze = $((ie == null ? void 0 : ie.section) ?? "this-env");
    function Ee(W, z) {
      ae.value = W, ze.value = z;
    }
    function ot(W) {
      const he = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[W];
      he && Ee(he.view, he.section);
    }
    function dt() {
      Ee("branches", "this-env");
    }
    function vt() {
      i("close"), setTimeout(() => {
        var z;
        const W = document.querySelectorAll("button.comfyui-button");
        for (const he of W)
          if (((z = he.textContent) == null ? void 0 : z.trim()) === "Manager") {
            he.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const Ce = $(null), et = $(!1), Xe = $(!1), je = $([]);
    let ft = 0;
    function ke(W, z = "info", he = 3e3) {
      const Ie = ++ft;
      return je.value.push({ id: Ie, message: W, type: z }), he > 0 && setTimeout(() => {
        je.value = je.value.filter((Ne) => Ne.id !== Ie);
      }, he), Ie;
    }
    function Ve(W) {
      je.value = je.value.filter((z) => z.id !== W);
    }
    function ve(W, z) {
      ke(W, z);
    }
    const J = D(() => {
      if (!x.value) return "neutral";
      const W = x.value.workflows, z = W.new.length > 0 || W.modified.length > 0 || W.deleted.length > 0 || x.value.has_changes;
      return x.value.comparison.is_synced ? z ? "warning" : "success" : "error";
    });
    D(() => x.value ? J.value === "success" ? "All synced" : J.value === "warning" ? "Uncommitted changes" : J.value === "error" ? "Not synced" : "" : "");
    async function $e() {
      Y.value = !0, re.value = null;
      try {
        const [W, z, he, Ie] = await Promise.all([
          p(!0),
          g(),
          u(),
          w()
        ]);
        x.value = W, j.value = z.commits, B.value = he.branches, G.value = Ie, i("statusUpdate", W), P.value && await P.value.loadWorkflows(!0);
      } catch (W) {
        re.value = W instanceof Error ? W.message : "Failed to load status", x.value = null, j.value = [], B.value = [];
      } finally {
        Y.value = !1;
      }
    }
    function ce(W) {
      H.value = W;
    }
    async function K(W) {
      var he;
      H.value = null;
      const z = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      Ce.value = {
        title: z ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: z ? "You have uncommitted changes that will be lost." : `Checkout commit ${W.short_hash || ((he = W.hash) == null ? void 0 : he.slice(0, 7))}?`,
        details: z ? ws() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: z ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: z,
        onConfirm: async () => {
          var Ge;
          Ce.value = null, Qe();
          const Ie = ke(`Checking out ${W.short_hash || ((Ge = W.hash) == null ? void 0 : Ge.slice(0, 7))}...`, "info", 0), Ne = await v(W.hash, z);
          Ve(Ie), Ne.status === "success" ? ke("Restarting ComfyUI...", "success") : ke(Ne.message || "Checkout failed", "error");
        }
      };
    }
    async function O(W) {
      const z = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      Ce.value = {
        title: z ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: z ? "You have uncommitted changes." : `Switch to branch "${W}"?`,
        details: z ? ws() : void 0,
        warning: z ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: z ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Ce.value = null, Qe();
          const he = ke(`Switching to ${W}...`, "info", 0), Ie = await m(W, z);
          Ve(he), Ie.status === "success" ? ke("Restarting ComfyUI...", "success") : ke(Ie.message || "Branch switch failed", "error");
        }
      };
    }
    async function A(W) {
      const z = ke(`Creating branch ${W}...`, "info", 0), he = await r(W);
      Ve(z), he.status === "success" ? (ke(`Branch "${W}" created`, "success"), await $e()) : ke(he.message || "Failed to create branch", "error");
    }
    async function X(W, z = !1) {
      const he = async (Ie) => {
        var Ge;
        const Ne = ke(`Deleting branch ${W}...`, "info", 0);
        try {
          const pt = await y(W, Ie);
          Ve(Ne), pt.status === "success" ? (ke(`Branch "${W}" deleted`, "success"), await $e()) : (Ge = pt.message) != null && Ge.includes("not fully merged") ? Ce.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${W}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Ce.value = null, await he(!0);
            }
          } : ke(pt.message || "Failed to delete branch", "error");
        } catch (pt) {
          Ve(Ne);
          const Pt = pt instanceof Error ? pt.message : "Failed to delete branch";
          Pt.includes("not fully merged") ? Ce.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${W}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Ce.value = null, await he(!0);
            }
          } : ke(Pt, "error");
        }
      };
      Ce.value = {
        title: "Delete Branch",
        message: `Delete branch "${W}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Ce.value = null, await he(z);
        }
      };
    }
    async function be(W) {
      H.value = null;
      const z = prompt("Enter branch name:");
      if (z) {
        const he = ke(`Creating branch ${z}...`, "info", 0), Ie = await r(z, W.hash);
        Ve(he), Ie.status === "success" ? (ke(`Branch "${z}" created from ${W.short_hash}`, "success"), await $e()) : ke(Ie.message || "Failed to create branch", "error");
      }
    }
    function Qe() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function gt() {
      Ce.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var W;
          Ce.value = null, Qe(), ke("Restarting environment...", "info");
          try {
            (W = window.app) != null && W.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Ct() {
      Ce.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var W;
          Ce.value = null, ke("Stopping environment...", "info");
          try {
            (W = window.app) != null && W.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function nt(W, z) {
      U.value = !1, _e.value = W, Pe.value = z || null, ne.value = !0;
    }
    async function xt() {
      ne.value = !1, Te.value = !0, Qe(), Re.value = {
        progress: 10,
        state: St(10),
        message: q(10)
      };
      try {
        await _(_e.value, Pe.value || void 0), ue(), De();
      } catch (W) {
        ye(), Te.value = !1, ke(`Failed to initiate switch: ${W instanceof Error ? W.message : "Unknown error"}`, "error"), Re.value = { state: "idle", progress: 0, message: "" }, Pe.value = null;
      }
    }
    function St(W) {
      return W >= 100 ? "complete" : W >= 80 ? "validating" : W >= 60 ? "starting" : W >= 30 ? "syncing" : "preparing";
    }
    function q(W) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[St(W)] || "";
    }
    function ue() {
      if (ge) return;
      let W = 10;
      const z = 60, he = 5e3, Ie = 100, Ne = (z - W) / (he / Ie);
      ge = window.setInterval(() => {
        if (W += Ne, W >= z && (W = z, ye()), Re.value.progress < z) {
          const Ge = Math.floor(W);
          Re.value = {
            progress: Ge,
            state: St(Ge),
            message: q(Ge)
          };
        }
      }, Ie);
    }
    function ye() {
      ge && (clearInterval(ge), ge = null);
    }
    function De() {
      de || (de = window.setInterval(async () => {
        try {
          let W = await L.getStatus();
          if ((!W || W.state === "idle") && (W = await k()), !W)
            return;
          const z = W.progress || 0;
          z >= 60 && ye();
          const he = Math.max(z, Re.value.progress), Ie = W.state && W.state !== "idle" && W.state !== "unknown", Ne = Ie ? W.state : St(he), Ge = Ie && W.message || q(he);
          Re.value = {
            state: Ne,
            progress: he,
            message: Ge
          }, W.state === "complete" ? (ye(), qe(), Te.value = !1, ke(`✓ Switched to ${_e.value}`, "success"), await $e(), _e.value = "") : W.state === "rolled_back" ? (ye(), qe(), Te.value = !1, ke("Switch failed, restored previous environment", "warning"), _e.value = "") : W.state === "critical_failure" && (ye(), qe(), Te.value = !1, ke(`Critical error during switch: ${W.message}`, "error"), _e.value = "");
        } catch (W) {
          console.error("Failed to poll switch progress:", W);
        }
      }, 1e3));
    }
    function qe() {
      ye(), de && (clearInterval(de), de = null);
    }
    function It() {
      var W;
      ne.value = !1, _e.value = "", (W = E.value) != null && W.state && E.value.state !== "managed" && (le.value = E.value.state === "no_workspace" ? 1 : 2, N.value = !0);
    }
    async function qt() {
      et.value = !1, await $e(), ke("✓ Changes committed", "success");
    }
    async function Ht() {
      Xe.value = !1;
      const W = ke("Syncing environment...", "info", 0);
      try {
        const z = await F("skip", !0);
        if (Ve(W), z.status === "success") {
          const he = [];
          z.nodes_installed.length && he.push(`${z.nodes_installed.length} installed`), z.nodes_removed.length && he.push(`${z.nodes_removed.length} removed`);
          const Ie = he.length ? `: ${he.join(", ")}` : "";
          ke(`✓ Environment synced${Ie}`, "success"), await $e();
        } else {
          const he = z.errors.length ? z.errors.join("; ") : z.message;
          ke(`Sync failed: ${he}`, "error");
        }
      } catch (z) {
        Ve(W), ke(`Sync error: ${z instanceof Error ? z.message : "Unknown error"}`, "error");
      }
    }
    async function Zs(W) {
      var z;
      try {
        const he = await f(W);
        he.failed.length === 0 ? ke(`✓ Repaired ${he.success} workflow${he.success === 1 ? "" : "s"}`, "success") : ke(`Repaired ${he.success}, failed: ${he.failed.length}`, "warning"), await $e();
      } catch (he) {
        ke(`Repair failed: ${he instanceof Error ? he.message : "Unknown error"}`, "error");
      } finally {
        (z = oe.value) == null || z.resetRepairingState();
      }
    }
    async function ys() {
      var z, he;
      const W = ke("Repairing environment...", "info", 0);
      try {
        const Ie = await F("skip", !0);
        if (Ve(W), Ie.status === "success") {
          const Ne = [];
          Ie.nodes_installed.length && Ne.push(`${Ie.nodes_installed.length} installed`), Ie.nodes_removed.length && Ne.push(`${Ie.nodes_removed.length} removed`);
          const Ge = Ne.length ? `: ${Ne.join(", ")}` : "";
          ke(`✓ Environment repaired${Ge}`, "success"), (z = oe.value) == null || z.closeDetailModal(), await $e();
        } else {
          const Ne = Ie.errors.length ? Ie.errors.join(", ") : Ie.message || "Unknown error";
          ke(`Repair failed: ${Ne}`, "error");
        }
      } catch (Ie) {
        Ve(W), ke(`Repair error: ${Ie instanceof Error ? Ie.message : "Unknown error"}`, "error");
      } finally {
        (he = oe.value) == null || he.resetRepairingEnvironmentState();
      }
    }
    async function eo(W, z) {
      ke(`Environment '${W}' created`, "success"), await $e(), S.value && await S.value.loadEnvironments(), z && await nt(W);
    }
    async function to(W) {
      var z;
      if (((z = T.value) == null ? void 0 : z.name) === W) {
        ke("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      Ce.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${W}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          Ce.value = null;
          try {
            const he = await R(W);
            he.status === "success" ? (ke(`Environment "${W}" deleted`, "success"), await $e(), S.value && await S.value.loadEnvironments()) : ke(he.message || "Failed to delete environment", "error");
          } catch (he) {
            ke(`Error deleting environment: ${he instanceof Error ? he.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function so(W, z) {
      N.value = !1;
      try {
        E.value = await C();
      } catch {
      }
      await nt(W, z);
    }
    function oo() {
      N.value = !1, i("close");
    }
    async function no(W, z) {
      await nt(W, z);
    }
    async function ao(W) {
      await $e(), await nt(W);
    }
    async function lo(W) {
      E.value = await C(), console.log(`Environment '${W}' created. Available for switching.`);
    }
    function io() {
      Ee("environments", "all-envs"), setTimeout(() => {
        var W;
        (W = S.value) == null || W.openCreateModal();
      }, 100);
    }
    function ws() {
      if (!x.value) return [];
      const W = [], z = x.value.workflows;
      return z.new.length && W.push(`${z.new.length} new workflow(s)`), z.modified.length && W.push(`${z.modified.length} modified workflow(s)`), z.deleted.length && W.push(`${z.deleted.length} deleted workflow(s)`), W;
    }
    return Oe(async () => {
      try {
        if (E.value = await C(), E.value.state === "no_workspace") {
          N.value = !0, le.value = 1;
          return;
        }
        if (E.value.state === "empty_workspace") {
          N.value = !0, le.value = 2;
          return;
        }
        if (E.value.state === "unmanaged") {
          N.value = !0, le.value = 2;
          return;
        }
      } catch (W) {
        console.warn("Setup status check failed, proceeding normally:", W);
      }
      await $e();
    }), (W, z) => {
      var he, Ie, Ne, Ge, pt, Pt, ks, bs, _s, $s, Cs, xs;
      return s(), o("div", Kk, [
        e("div", Jk, [
          e("div", Yk, [
            z[35] || (z[35] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            x.value ? (s(), o("div", Xk)) : d("", !0)
          ]),
          e("div", Qk, [
            e("button", {
              class: "sponsor-btn",
              onClick: z[0] || (z[0] = (we) => M("https://github.com/sponsors/comfyhub-org")),
              title: "Sponsor ComfyHub",
              "aria-label": "Sponsor ComfyHub on GitHub"
            }, [...z[36] || (z[36] = [
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
              onClick: z[1] || (z[1] = (we) => M("https://discord.gg/2h5rSTeh6Y")),
              title: "Join Discord",
              "aria-label": "Join ComfyHub Discord"
            }, [...z[37] || (z[37] = [
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
              onClick: z[2] || (z[2] = (we) => M("https://x.com/akatz_ai")),
              title: "Follow on X",
              "aria-label": "Follow on X"
            }, [...z[38] || (z[38] = [
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
              onClick: z[3] || (z[3] = (we) => M("https://github.com/comfyhub-org/comfygit")),
              title: "View on GitHub",
              "aria-label": "View ComfyGit on GitHub"
            }, [...z[39] || (z[39] = [
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
              onClick: z[4] || (z[4] = (we) => M("https://docs.comfyhub.org/comfygit/")),
              title: "Documentation",
              "aria-label": "View ComfyGit Documentation"
            }, [...z[40] || (z[40] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" })
              ], -1)
            ])]),
            z[43] || (z[43] = e("span", { class: "header-divider" }, null, -1)),
            e("button", {
              class: me(["icon-btn", { spinning: Y.value }]),
              onClick: $e,
              title: "Refresh"
            }, [...z[41] || (z[41] = [
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
              onClick: z[5] || (z[5] = (we) => i("close")),
              title: "Close"
            }, [...z[42] || (z[42] = [
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
        e("div", Zk, [
          e("div", { class: "env-switcher-header" }, [
            z[44] || (z[44] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: gt
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
            onClick: z[6] || (z[6] = (we) => Ee("environments", "all-envs"))
          }, [
            x.value ? (s(), o("div", eb, [
              e("span", null, a(((he = T.value) == null ? void 0 : he.name) || ((Ie = x.value) == null ? void 0 : Ie.environment) || "Loading..."), 1),
              e("span", tb, "(" + a(x.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            z[45] || (z[45] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", sb, [
          e("div", ob, [
            e("div", nb, [
              e("div", ab, [
                z[46] || (z[46] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                e("button", {
                  class: me(["sidebar-item", { active: ae.value === "status" && ze.value === "this-env" }]),
                  onClick: z[7] || (z[7] = (we) => Ee("status", "this-env"))
                }, " STATUS ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: ae.value === "workflows" }]),
                  onClick: z[8] || (z[8] = (we) => Ee("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: ae.value === "models-env" }]),
                  onClick: z[9] || (z[9] = (we) => Ee("models-env", "this-env"))
                }, " MODELS ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: ae.value === "branches" }]),
                  onClick: z[10] || (z[10] = (we) => Ee("branches", "this-env"))
                }, " BRANCHES ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: ae.value === "history" }]),
                  onClick: z[11] || (z[11] = (we) => Ee("history", "this-env"))
                }, " HISTORY ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: ae.value === "nodes" }]),
                  onClick: z[12] || (z[12] = (we) => Ee("nodes", "this-env"))
                }, " NODES ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: ae.value === "debug-env" }]),
                  onClick: z[13] || (z[13] = (we) => Ee("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              z[49] || (z[49] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", lb, [
                z[47] || (z[47] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                e("button", {
                  class: me(["sidebar-item", { active: ae.value === "environments" }]),
                  onClick: z[14] || (z[14] = (we) => Ee("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: ae.value === "model-index" }]),
                  onClick: z[15] || (z[15] = (we) => Ee("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: ae.value === "settings" }]),
                  onClick: z[16] || (z[16] = (we) => Ee("settings", "all-envs"))
                }, " SETTINGS ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: ae.value === "debug-workspace" }]),
                  onClick: z[17] || (z[17] = (we) => Ee("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              z[50] || (z[50] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", ib, [
                z[48] || (z[48] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                e("button", {
                  class: me(["sidebar-item", { active: ae.value === "export" }]),
                  onClick: z[18] || (z[18] = (we) => Ee("export", "sharing"))
                }, " EXPORT ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: ae.value === "import" }]),
                  onClick: z[19] || (z[19] = (we) => Ee("import", "sharing"))
                }, " IMPORT ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: ae.value === "remotes" }]),
                  onClick: z[20] || (z[20] = (we) => Ee("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            z[51] || (z[51] = mo('<div class="sidebar-footer" data-v-1340da17><span class="version" data-v-1340da17>v0.0.1</span><span class="made-by" data-v-1340da17>made with <svg class="heart-icon" width="10" height="10" viewBox="0 0 16 16" fill="currentColor" data-v-1340da17><path d="M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" data-v-1340da17></path></svg> by Akatz</span></div>', 1))
          ]),
          e("div", rb, [
            re.value ? (s(), o("div", db, a(re.value), 1)) : !x.value && ae.value === "status" ? (s(), o("div", cb, " Loading status... ")) : (s(), o(V, { key: 2 }, [
              ae.value === "status" ? (s(), I(Ga, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: oe,
                status: x.value,
                "setup-state": ee.value,
                onSwitchBranch: dt,
                onCommitChanges: z[21] || (z[21] = (we) => et.value = !0),
                onSyncEnvironment: z[22] || (z[22] = (we) => Xe.value = !0),
                onViewWorkflows: z[23] || (z[23] = (we) => Ee("workflows", "this-env")),
                onViewHistory: z[24] || (z[24] = (we) => Ee("history", "this-env")),
                onViewDebug: z[25] || (z[25] = (we) => Ee("debug-env", "this-env")),
                onViewNodes: z[26] || (z[26] = (we) => Ee("nodes", "this-env")),
                onRepairMissingModels: Zs,
                onRepairEnvironment: ys,
                onStartSetup: z[27] || (z[27] = (we) => N.value = !0),
                onViewEnvironments: z[28] || (z[28] = (we) => Ee("environments", "all-envs")),
                onCreateEnvironment: io
              }, null, 8, ["status", "setup-state"])) : ae.value === "workflows" ? (s(), I(mm, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: P,
                onRefresh: $e
              }, null, 512)) : ae.value === "models-env" ? (s(), I(Km, {
                key: 2,
                onNavigate: ot
              })) : ae.value === "branches" ? (s(), I(al, {
                key: 3,
                branches: B.value,
                current: ((Ne = x.value) == null ? void 0 : Ne.branch) || null,
                onSwitch: O,
                onCreate: A,
                onDelete: X
              }, null, 8, ["branches", "current"])) : ae.value === "history" ? (s(), I(pl, {
                key: 4,
                commits: j.value,
                onSelect: ce,
                onCheckout: K
              }, null, 8, ["commits"])) : ae.value === "nodes" ? (s(), I(Gv, {
                key: 5,
                "version-mismatches": ((pt = (Ge = x.value) == null ? void 0 : Ge.comparison) == null ? void 0 : pt.version_mismatches) || [],
                onOpenNodeManager: vt,
                onRepairEnvironment: ys,
                onToast: ve
              }, null, 8, ["version-mismatches"])) : ae.value === "debug-env" ? (s(), I(Qp, { key: 6 })) : ae.value === "environments" ? (s(), I(t1, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: S,
                onSwitch: nt,
                onCreated: eo,
                onDelete: to
              }, null, 512)) : ae.value === "model-index" ? (s(), I(fv, {
                key: 8,
                onRefresh: $e
              })) : ae.value === "settings" ? (s(), I(Kp, { key: 9 })) : ae.value === "debug-workspace" ? (s(), I(Yp, { key: 10 })) : ae.value === "export" ? (s(), I(L1, { key: 11 })) : ae.value === "import" ? (s(), I(S0, {
                key: 12,
                onImportCompleteSwitch: ao
              })) : ae.value === "remotes" ? (s(), I(Ip, {
                key: 13,
                onToast: ve
              })) : d("", !0)
            ], 64))
          ])
        ]),
        H.value ? (s(), I(G0, {
          key: 0,
          commit: H.value,
          onClose: z[29] || (z[29] = (we) => H.value = null),
          onCheckout: K,
          onCreateBranch: be
        }, null, 8, ["commit"])) : d("", !0),
        Ce.value ? (s(), I(Bs, {
          key: 1,
          title: Ce.value.title,
          message: Ce.value.message,
          details: Ce.value.details,
          warning: Ce.value.warning,
          confirmLabel: Ce.value.confirmLabel,
          cancelLabel: Ce.value.cancelLabel,
          secondaryLabel: Ce.value.secondaryLabel,
          secondaryAction: Ce.value.secondaryAction,
          destructive: Ce.value.destructive,
          onConfirm: Ce.value.onConfirm,
          onCancel: z[30] || (z[30] = (we) => Ce.value = null),
          onSecondary: Ce.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        b(Vw, {
          show: ne.value,
          "from-environment": ((Pt = T.value) == null ? void 0 : Pt.name) || "unknown",
          "to-environment": _e.value,
          onConfirm: xt,
          onClose: It
        }, null, 8, ["show", "from-environment", "to-environment"]),
        et.value && x.value ? (s(), I(Hs, {
          key: 2,
          status: x.value,
          "as-modal": !0,
          onClose: z[31] || (z[31] = (we) => et.value = !1),
          onCommitted: qt
        }, null, 8, ["status"])) : d("", !0),
        Xe.value && x.value ? (s(), I(rk, {
          key: 3,
          show: Xe.value,
          "mismatch-details": {
            missing_nodes: x.value.comparison.missing_nodes,
            extra_nodes: x.value.comparison.extra_nodes
          },
          onConfirm: Ht,
          onClose: z[32] || (z[32] = (we) => Xe.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : d("", !0),
        b(Zw, {
          show: Te.value,
          state: Re.value.state,
          progress: Re.value.progress,
          message: Re.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        U.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: z[34] || (z[34] = Le((we) => U.value = !1, ["self"]))
        }, [
          e("div", ub, [
            e("div", mb, [
              z[53] || (z[53] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: z[33] || (z[33] = (we) => U.value = !1)
              }, [...z[52] || (z[52] = [
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
            e("div", vb, [
              z[54] || (z[54] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", fb, [
                (s(!0), o(V, null, te(G.value, (we) => (s(), o("div", {
                  key: we.name,
                  class: me(["env-item", { current: we.is_current }])
                }, [
                  e("div", gb, [
                    e("div", pb, [
                      e("span", hb, a(we.is_current ? "●" : "○"), 1),
                      e("span", yb, a(we.name), 1),
                      we.current_branch ? (s(), o("span", wb, "(" + a(we.current_branch) + ")", 1)) : d("", !0),
                      we.is_current ? (s(), o("span", kb, "CURRENT")) : d("", !0)
                    ]),
                    e("div", bb, a(we.workflow_count) + " workflows • " + a(we.node_count) + " nodes ", 1)
                  ]),
                  we.is_current ? d("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (z2) => nt(we.name)
                  }, " SWITCH ", 8, _b))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        N.value ? (s(), I(Hk, {
          key: 5,
          "default-path": ((ks = E.value) == null ? void 0 : ks.default_path) || "~/comfygit",
          "detected-models-dir": ((bs = E.value) == null ? void 0 : bs.detected_models_dir) || null,
          "initial-step": le.value,
          "existing-environments": ((_s = E.value) == null ? void 0 : _s.environments) || [],
          "cli-installed": (($s = E.value) == null ? void 0 : $s.cli_installed) ?? !0,
          "setup-state": ((Cs = E.value) == null ? void 0 : Cs.state) || "no_workspace",
          "workspace-path": ((xs = E.value) == null ? void 0 : xs.workspace_path) || null,
          onComplete: so,
          onClose: oo,
          onSwitchEnvironment: no,
          onEnvironmentCreatedNoSwitch: lo
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : d("", !0),
        e("div", $b, [
          b(vo, { name: "toast" }, {
            default: l(() => [
              (s(!0), o(V, null, te(je.value, (we) => (s(), o("div", {
                key: we.id,
                class: me(["toast", we.type])
              }, [
                e("span", Cb, a(we.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Sb = /* @__PURE__ */ Z(xb, [["__scopeId", "data-v-1340da17"]]), Ib = { class: "item-header" }, Eb = { class: "item-info" }, Mb = { class: "filename" }, Tb = { class: "metadata" }, Rb = { class: "size" }, zb = {
  key: 0,
  class: "type"
}, Lb = { class: "item-actions" }, Pb = {
  key: 0,
  class: "progress-section"
}, Db = { class: "progress-bar" }, Nb = { class: "progress-stats" }, Ub = { class: "downloaded" }, Ob = { class: "speed" }, Bb = {
  key: 0,
  class: "eta"
}, Fb = {
  key: 1,
  class: "status-msg paused"
}, Ab = {
  key: 2,
  class: "status-msg queued"
}, Vb = {
  key: 3,
  class: "status-msg completed"
}, Wb = {
  key: 4,
  class: "status-msg failed"
}, Gb = {
  key: 0,
  class: "retries"
}, jb = /* @__PURE__ */ Q({
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
    function p(u) {
      return u === 0 ? "-" : `${(u / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function g(u) {
      if (u < 60) return `${Math.round(u)}s`;
      const v = Math.floor(u / 60);
      return v < 60 ? `${v}m` : `${Math.floor(v / 60)}h ${v % 60}m`;
    }
    return (u, v) => (s(), o("div", {
      class: me(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Ib, [
        e("div", Eb, [
          e("div", Mb, a(t.item.filename), 1),
          e("div", Tb, [
            e("span", Rb, a(i(t.item.size)), 1),
            t.item.type ? (s(), o("span", zb, a(t.item.type), 1)) : d("", !0)
          ])
        ]),
        e("div", Lb, [
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
      t.item.status === "downloading" ? (s(), o("div", Pb, [
        e("div", Db, [
          e("div", {
            class: "progress-fill",
            style: yt({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Nb, [
          e("span", Ub, a(i(t.item.downloaded)) + " / " + a(i(t.item.size)), 1),
          e("span", Ob, a(p(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", Bb, a(g(t.item.eta)), 1)) : d("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", Fb, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", Ab, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", Vb, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", Wb, [
        h(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", Gb, "(" + a(t.item.retries) + " retries)", 1)) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ut = /* @__PURE__ */ Z(jb, [["__scopeId", "data-v-2110df65"]]), qb = { class: "queue-title" }, Hb = { class: "count" }, Kb = { class: "queue-actions" }, Jb = { class: "action-label" }, Yb = {
  key: 0,
  class: "overall-progress"
}, Xb = { class: "progress-bar" }, Qb = {
  key: 0,
  class: "current-mini"
}, Zb = { class: "filename" }, e2 = { class: "speed" }, t2 = {
  key: 1,
  class: "queue-content"
}, s2 = {
  key: 0,
  class: "section"
}, o2 = {
  key: 1,
  class: "section"
}, n2 = { class: "section-header" }, a2 = { class: "section-label paused" }, l2 = { class: "items-list" }, i2 = {
  key: 2,
  class: "section"
}, r2 = { class: "section-header" }, d2 = { class: "section-label" }, c2 = { class: "items-list" }, u2 = {
  key: 3,
  class: "section"
}, m2 = { class: "section-header" }, v2 = { class: "section-label" }, f2 = { class: "items-list" }, g2 = {
  key: 4,
  class: "section"
}, p2 = { class: "section-header" }, h2 = { class: "section-label failed" }, y2 = { class: "items-list" }, w2 = /* @__PURE__ */ Q({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: n,
      queuedItems: i,
      completedItems: p,
      failedItems: g,
      pausedItems: u,
      hasItems: v,
      activeCount: r,
      cancelDownload: m,
      retryDownload: y,
      resumeDownload: w,
      resumeAllPaused: _,
      removeItem: k,
      clearCompleted: R
    } = Gt(), F = $(!1);
    let f = null;
    _t(
      () => ({
        active: r.value,
        failed: g.value.length,
        paused: u.value.length,
        completed: p.value.length
      }),
      (x, j) => {
        f && (clearTimeout(f), f = null);
        const B = x.active === 0 && x.failed === 0 && x.paused === 0 && x.completed > 0, G = j && (j.active > 0 || j.paused > 0);
        B && G && (f = setTimeout(() => {
          R(), f = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = D(() => {
      var B;
      if (c.items.length === 0) return 0;
      const x = p.value.length, j = ((B = n.value) == null ? void 0 : B.progress) || 0;
      return Math.round((x + j / 100) / c.items.length * 100);
    });
    function L(x) {
      m(x);
    }
    function M(x) {
      return x === 0 ? "" : `${(x / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (x, j) => (s(), I(We, { to: "body" }, [
      xe(v) ? (s(), o("div", {
        key: 0,
        class: me(["model-download-queue", { minimized: !F.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: j[0] || (j[0] = (B) => F.value = !F.value)
        }, [
          e("div", qb, [
            j[4] || (j[4] = e("span", { class: "icon" }, "↓", -1)),
            j[5] || (j[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", Hb, "(" + a(xe(r)) + "/" + a(xe(c).items.length) + ")", 1)
          ]),
          e("div", Kb, [
            e("span", Jb, a(F.value ? "minimize" : "expand"), 1)
          ])
        ]),
        F.value ? (s(), o("div", t2, [
          xe(n) ? (s(), o("div", s2, [
            j[6] || (j[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            b(Ut, {
              item: xe(n),
              onCancel: j[1] || (j[1] = (B) => L(xe(n).id))
            }, null, 8, ["item"])
          ])) : d("", !0),
          xe(u).length > 0 ? (s(), o("div", o2, [
            e("div", n2, [
              e("span", a2, "Paused (" + a(xe(u).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: j[2] || (j[2] = //@ts-ignore
                (...B) => xe(_) && xe(_)(...B))
              }, "Resume All")
            ]),
            e("div", l2, [
              (s(!0), o(V, null, te(xe(u), (B) => (s(), I(Ut, {
                key: B.id,
                item: B,
                onResume: (G) => xe(w)(B.id),
                onRemove: (G) => xe(k)(B.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          xe(i).length > 0 ? (s(), o("div", i2, [
            e("div", r2, [
              e("span", d2, "Queued (" + a(xe(i).length) + ")", 1)
            ]),
            e("div", c2, [
              (s(!0), o(V, null, te(xe(i), (B) => (s(), I(Ut, {
                key: B.id,
                item: B,
                onCancel: (G) => L(B.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : d("", !0),
          xe(p).length > 0 ? (s(), o("div", u2, [
            e("div", m2, [
              e("span", v2, "Completed (" + a(xe(p).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: j[3] || (j[3] = //@ts-ignore
                (...B) => xe(R) && xe(R)(...B))
              }, "Clear")
            ]),
            e("div", f2, [
              (s(!0), o(V, null, te(xe(p).slice(0, 3), (B) => (s(), I(Ut, {
                key: B.id,
                item: B,
                onRemove: (G) => xe(k)(B.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          xe(g).length > 0 ? (s(), o("div", g2, [
            e("div", p2, [
              e("span", h2, "Failed (" + a(xe(g).length) + ")", 1)
            ]),
            e("div", y2, [
              (s(!0), o(V, null, te(xe(g), (B) => (s(), I(Ut, {
                key: B.id,
                item: B,
                onRetry: (G) => xe(y)(B.id),
                onRemove: (G) => xe(k)(B.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : d("", !0)
        ])) : (s(), o("div", Yb, [
          e("div", Xb, [
            e("div", {
              class: "progress-fill",
              style: yt({ width: `${C.value}%` })
            }, null, 4)
          ]),
          xe(n) ? (s(), o("div", Qb, [
            e("span", Zb, a(xe(n).filename), 1),
            e("span", e2, a(M(xe(n).speed)), 1)
          ])) : d("", !0)
        ]))
      ], 2)) : d("", !0)
    ]));
  }
}), k2 = /* @__PURE__ */ Z(w2, [["__scopeId", "data-v-60751cfa"]]), b2 = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', _2 = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', $2 = {
  comfy: b2,
  phosphor: _2
}, gs = "comfy", Ks = "comfygit-theme";
let $t = null, Js = gs;
function C2() {
  try {
    const t = localStorage.getItem(Ks);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return gs;
}
function Ys(t = gs) {
  $t && $t.remove(), $t = document.createElement("style"), $t.id = "comfygit-theme-styles", $t.setAttribute("data-theme", t), $t.textContent = $2[t], document.head.appendChild($t), document.body.setAttribute("data-comfygit-theme", t), Js = t;
  try {
    localStorage.setItem(Ks, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function x2() {
  return Js;
}
function S2(t) {
  Ys(t);
}
function I2(t) {
  var g;
  const { ui_id: c, state: n } = t || {}, i = (n == null ? void 0 : n.history) || {};
  if (!c)
    return null;
  const p = i[c];
  return p && p.result === "error" && ((g = p.status) == null ? void 0 : g.status_str) === "error" ? (p.status.messages || [])[0] || "Unknown error" : null;
}
const ps = document.createElement("link");
ps.rel = "stylesheet";
ps.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(ps);
const E2 = C2();
Ys(E2);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), S2(t);
  },
  getTheme: () => {
    const t = x2();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let lt = null, Ze = null, At = null, Ot = null, Ts = null;
const zt = $(null);
let hs = "managed", Xs = !1;
async function Yt() {
  var t;
  if (!((t = bt) != null && t.api)) return null;
  try {
    const c = await bt.api.fetchApi("/v2/comfygit/status");
    c.ok && (zt.value = await c.json());
  } catch {
  }
}
async function is() {
  var t;
  if ((t = bt) != null && t.api)
    try {
      const c = await bt.api.fetchApi("/v2/setup/status");
      if (c.ok) {
        const n = await c.json();
        hs = n.state, Xs = n.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function rs() {
  var c;
  if (hs === "managed" || !Xs) return;
  const t = document.querySelectorAll("button.comfyui-button");
  for (const n of t)
    if (((c = n.textContent) == null ? void 0 : c.trim()) === "Manager" && !n.querySelector("svg, i, img")) {
      n.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function M2() {
  if (!zt.value) return !1;
  const t = zt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || zt.value.has_changes;
}
function Rs(t) {
  lt && lt.remove(), lt = document.createElement("div"), lt.className = "comfygit-panel-overlay";
  const c = document.createElement("div");
  c.className = "comfygit-panel-container", lt.appendChild(c), lt.addEventListener("click", (p) => {
    p.target === lt && as();
  });
  const n = (p) => {
    p.key === "Escape" && (as(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), us({
    render: () => ms(Sb, {
      initialView: t,
      onClose: as,
      onStatusUpdate: async (p) => {
        zt.value = p, Vt(), await is(), ds(), rs();
      }
    })
  }).mount(c), document.body.appendChild(lt);
}
function as() {
  lt && (lt.remove(), lt = null);
}
function T2(t) {
  Bt(), Ze = document.createElement("div"), Ze.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  Ze.style.position = "fixed", Ze.style.top = `${c.bottom + 8}px`, Ze.style.right = `${window.innerWidth - c.right}px`, Ze.style.zIndex = "10001";
  const n = (p) => {
    Ze && !Ze.contains(p.target) && p.target !== t && (Bt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const i = (p) => {
    p.key === "Escape" && (Bt(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), At = us({
    render: () => ms(Hs, {
      status: zt.value,
      onClose: Bt,
      onCommitted: () => {
        Bt(), Yt().then(Vt);
      }
    })
  }), At.mount(Ze), document.body.appendChild(Ze);
}
function Bt() {
  At && (At.unmount(), At = null), Ze && (Ze.remove(), Ze = null);
}
function R2() {
  Ot || (Ot = document.createElement("div"), Ot.className = "comfygit-download-queue-root", Ts = us({
    render: () => ms(k2)
  }), Ts.mount(Ot), document.body.appendChild(Ot), console.log("[ComfyGit] Model download queue mounted"));
}
let tt = null;
function Vt() {
  if (!tt) return;
  const t = tt.querySelector(".commit-indicator");
  t && (t.style.display = M2() ? "block" : "none");
}
function ds() {
  if (!tt) return;
  const t = hs !== "managed";
  tt.disabled = t, tt.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Qs = document.createElement("style");
Qs.textContent = `
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
document.head.appendChild(Qs);
bt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var p, g;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = Rs, tt = document.createElement("button"), tt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", tt.innerHTML = 'Commit <span class="commit-indicator"></span>', tt.title = "Quick Commit", tt.onclick = () => T2(tt), t.appendChild(c), t.appendChild(tt), (g = (p = bt.menu) == null ? void 0 : p.settingsGroup) != null && g.element && (bt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), R2();
    const { loadPendingDownloads: n } = Gt();
    n(), await Promise.all([Yt(), is()]), Vt(), ds(), rs(), setTimeout(rs, 100), setInterval(async () => {
      await Promise.all([Yt(), is()]), Vt(), ds();
    }, 3e4);
    const i = bt.api;
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
        const w = document.createElement("span");
        w.textContent = "Workflows updated - refresh required", y.appendChild(w);
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
        const k = document.createElement("button");
        k.textContent = "×", k.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, k.onmouseover = () => k.style.opacity = "1", k.onmouseout = () => k.style.opacity = "0.6", k.onclick = () => y.remove(), y.appendChild(k), document.body.appendChild(y), console.log("[ComfyGit] Refresh notification displayed");
      }, r = function(y) {
        const w = document.getElementById("comfygit-error-toast");
        w && w.remove();
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
        const k = document.createElement("span");
        k.textContent = "⚠️", k.style.fontSize = "20px", _.appendChild(k);
        const R = document.createElement("div");
        R.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const F = document.createElement("div");
        F.textContent = "Node installation failed", F.style.cssText = "font-weight: 600; color: #e53935;", R.appendChild(F);
        const f = document.createElement("div");
        f.textContent = "Dependency conflict detected", f.style.cssText = "font-size: 12px; opacity: 0.8;", R.appendChild(f), _.appendChild(R);
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
          _.remove(), Rs("debug-env");
        }, _.appendChild(C);
        const L = document.createElement("button");
        L.textContent = "×", L.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, L.onmouseover = () => L.style.opacity = "1", L.onmouseout = () => L.style.opacity = "0.6", L.onclick = () => _.remove(), _.appendChild(L), document.body.appendChild(_), console.log("[ComfyGit] Manager error toast displayed:", y), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && _.remove();
        }, 1e4);
      };
      i.addEventListener("comfygit:workflow-changed", async (y) => {
        const { change_type: w, workflow_name: _ } = y.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${_}`), await Yt(), Vt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let m = !1;
      i.addEventListener("status", async (y) => {
        const w = y.detail != null;
        w && !m && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), u()) : v()), m = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), i.addEventListener("cm-task-completed", (y) => {
        const w = I2(y.detail);
        w && r(w);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
