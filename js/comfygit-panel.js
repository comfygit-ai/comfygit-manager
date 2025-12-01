import { app as bt } from "../../scripts/app.js";
import { defineComponent as ee, createElementBlock as o, openBlock as s, createCommentVNode as d, createElementVNode as e, renderSlot as Ce, createBlock as E, resolveDynamicComponent as cs, normalizeClass as me, withCtx as i, toDisplayString as a, createVNode as b, createTextVNode as h, computed as U, Fragment as V, renderList as oe, normalizeStyle as yt, ref as $, onMounted as Ue, watch as _t, Teleport as Ve, withModifiers as ze, Transition as ro, createSlots as Wt, withKeys as ht, reactive as ts, onUnmounted as zs, readonly as co, unref as $e, withDirectives as Oe, vModelText as Tt, vModelRadio as Kt, vModelCheckbox as Xt, nextTick as uo, vModelSelect as Rt, createStaticVNode as mo, TransitionGroup as vo, createApp as us, h as ms } from "vue";
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
  for (const [l, p] of c)
    n[l] = p;
  return n;
}, Ke = /* @__PURE__ */ te(wo, [["__scopeId", "data-v-21565df9"]]), ko = {
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
    return (c, n) => (s(), E(cs(`h${t.level}`), {
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
}), Ls = /* @__PURE__ */ te(So, [["__scopeId", "data-v-6fc7f16d"]]), Io = { class: "header-left" }, Eo = {
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
        b($o, { "show-prefix": t.showPrefix }, {
          default: i(() => [
            h(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), E(Ls, {
          key: 0,
          onClick: n[0] || (n[0] = (l) => c.$emit("info-click"))
        })) : d("", !0)
      ]),
      c.$slots.actions ? (s(), o("div", Eo, [
        Ce(c.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Je = /* @__PURE__ */ te(Mo, [["__scopeId", "data-v-55a62cd6"]]), To = {
  key: 0,
  class: "section-title-count"
}, Ro = {
  key: 1,
  class: "section-title-icon"
}, zo = /* @__PURE__ */ ee({
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
}), tt = /* @__PURE__ */ te(zo, [["__scopeId", "data-v-559361eb"]]), Lo = { class: "status-grid" }, Po = { class: "status-grid__columns" }, Do = { class: "status-grid__column" }, No = { class: "status-grid__title" }, Uo = { class: "status-grid__column status-grid__column--right" }, Oo = { class: "status-grid__title" }, Bo = {
  key: 0,
  class: "status-grid__footer"
}, Ao = /* @__PURE__ */ ee({
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
}), Fo = /* @__PURE__ */ te(Ao, [["__scopeId", "data-v-73b7ba3f"]]), Vo = {
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
    const c = t, n = U(() => `status-item--${c.variant}`);
    return (l, p) => (s(), o("div", {
      class: me(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", Vo, a(t.icon), 1)) : d("", !0),
      t.count !== void 0 ? (s(), o("span", Wo, a(t.count), 1)) : d("", !0),
      e("span", Go, a(t.label), 1)
    ], 2));
  }
}), ct = /* @__PURE__ */ te(jo, [["__scopeId", "data-v-6f929183"]]), Ho = { class: "issue-card__header" }, qo = { class: "issue-card__icon" }, Ko = { class: "issue-card__title" }, Jo = {
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
    const c = t, n = U(() => `issue-card--${c.severity}`);
    return (l, p) => (s(), o("div", {
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
          p[0] || (p[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(g), 1)
        ]))), 128))
      ])) : d("", !0),
      l.$slots.actions ? (s(), o("div", Qo, [
        Ce(l.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), nt = /* @__PURE__ */ te(Zo, [["__scopeId", "data-v-df6aa348"]]), en = ["type", "disabled"], tn = {
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
}), ne = /* @__PURE__ */ te(sn, [["__scopeId", "data-v-772abe47"]]), on = { class: "empty-state" }, nn = {
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
      t.actionLabel ? (s(), E(ne, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (l) => c.$emit("action"))
      }, {
        default: i(() => [
          h(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : d("", !0)
    ]));
  }
}), it = /* @__PURE__ */ te(ln, [["__scopeId", "data-v-4466284f"]]), rn = /* @__PURE__ */ ee({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: me(["detail-label"]),
      style: yt({ minWidth: t.minWidth })
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
      b(Jt, { "min-width": t.labelMinWidth }, {
        default: i(() => [
          h(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), E(ls, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: i(() => [
          h(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Ce(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Ne = /* @__PURE__ */ te(un, [["__scopeId", "data-v-ef15664a"]]), mn = { class: "modal-header" }, vn = { class: "modal-body" }, fn = { class: "status-section" }, gn = {
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
}, An = { class: "workflow-group-header" }, Fn = { class: "workflow-group-title" }, Vn = { class: "workflow-list" }, Wn = { class: "workflow-name" }, Gn = {
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
}, za = {
  key: 4,
  class: "status-section"
}, La = { class: "warning-box" }, Pa = {
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
    const c = t, n = $(!1);
    Ue(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), _t(() => c.show, (k, _) => {
      console.log("StatusDetailModal show prop changed from", _, "to", k);
    }, { immediate: !0 });
    const l = U(() => {
      var k, _, M;
      return ((M = (_ = (k = c.status) == null ? void 0 : k.workflows) == null ? void 0 : _.analyzed) == null ? void 0 : M.filter(
        (F) => F.status === "broken" && F.sync_state === "synced"
      )) || [];
    }), p = U(() => {
      var k, _, M;
      return ((M = (_ = (k = c.status) == null ? void 0 : k.workflows) == null ? void 0 : _.analyzed) == null ? void 0 : M.filter(
        (F) => F.status === "broken" && F.sync_state !== "synced"
      )) || [];
    }), g = U(() => {
      var k, _, M;
      return ((M = (_ = (k = c.status) == null ? void 0 : k.workflows) == null ? void 0 : _.synced) == null ? void 0 : M.filter((F) => {
        var C, N, z;
        const f = (z = (N = (C = c.status) == null ? void 0 : C.workflows) == null ? void 0 : N.analyzed) == null ? void 0 : z.find((x) => x.name === F);
        return !f || f.status !== "broken";
      })) || [];
    }), u = U(() => {
      var k, _, M, F, f;
      return (k = c.status) != null && k.workflows ? (((_ = c.status.workflows.new) == null ? void 0 : _.length) ?? 0) > 0 || (((M = c.status.workflows.modified) == null ? void 0 : M.length) ?? 0) > 0 || (((F = c.status.workflows.deleted) == null ? void 0 : F.length) ?? 0) > 0 || (((f = c.status.workflows.synced) == null ? void 0 : f.length) ?? 0) > 0 : !1;
    }), v = U(() => {
      var _, M, F;
      const k = (_ = c.status) == null ? void 0 : _.git_changes;
      return k ? (((M = k.nodes_added) == null ? void 0 : M.length) ?? 0) > 0 || (((F = k.nodes_removed) == null ? void 0 : F.length) ?? 0) > 0 || k.workflow_changes || k.has_other_changes : !1;
    }), r = U(() => {
      var k, _, M, F, f, C;
      return !u.value && !v.value && ((_ = (k = c.status) == null ? void 0 : k.comparison) == null ? void 0 : _.is_synced) && (((M = c.status) == null ? void 0 : M.missing_models_count) ?? 0) === 0 && (((C = (f = (F = c.status) == null ? void 0 : F.comparison) == null ? void 0 : f.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
    }), m = U(() => {
      var _, M;
      const k = (M = (_ = c.status) == null ? void 0 : _.git_changes) == null ? void 0 : M.workflow_changes;
      return k ? typeof k == "number" ? k : Object.keys(k).length : 0;
    });
    function y(k) {
      return typeof k == "string" ? k : k.name;
    }
    function w(k) {
      return typeof k == "object" && k.is_development === !0;
    }
    return (k, _) => {
      var M, F, f, C, N, z, x, J, A, W, T, R, O, le, se, X, ce, Y, D, P, S, re;
      return s(), E(Ve, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: _[7] || (_[7] = (Z) => k.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: _[6] || (_[6] = ze(() => {
            }, ["stop"]))
          }, [
            e("div", mn, [
              _[8] || (_[8] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: _[0] || (_[0] = (Z) => k.$emit("close"))
              }, "✕")
            ]),
            e("div", vn, [
              e("div", fn, [
                b(tt, { level: "4" }, {
                  default: i(() => [..._[9] || (_[9] = [
                    h("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                b(Ne, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (s(), o("div", gn, [
                e("div", pn, [
                  b(tt, { level: "4" }, {
                    default: i(() => [..._[10] || (_[10] = [
                      h("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: _[1] || (_[1] = (Z) => k.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                l.value.length ? (s(), o("div", hn, [
                  e("div", yn, [
                    _[11] || (_[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
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
                p.value.length ? (s(), o("div", $n, [
                  e("div", Cn, [
                    _[12] || (_[12] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", xn, "BROKEN (UNCOMMITTED) (" + a(p.value.length) + ")", 1)
                  ]),
                  e("div", Sn, [
                    (s(!0), o(V, null, oe(p.value, (Z) => (s(), o("div", {
                      key: Z.name,
                      class: "workflow-item"
                    }, [
                      e("span", In, a(Z.name), 1),
                      e("span", En, a(Z.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (F = (M = t.status.workflows) == null ? void 0 : M.new) != null && F.length ? (s(), o("div", Mn, [
                  e("div", Tn, [
                    _[13] || (_[13] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Rn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", zn, [
                    (s(!0), o(V, null, oe(t.status.workflows.new, (Z) => (s(), o("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      e("span", Ln, a(Z), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (C = (f = t.status.workflows) == null ? void 0 : f.modified) != null && C.length ? (s(), o("div", Pn, [
                  e("div", Dn, [
                    _[14] || (_[14] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
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
                (z = (N = t.status.workflows) == null ? void 0 : N.deleted) != null && z.length ? (s(), o("div", Bn, [
                  e("div", An, [
                    _[15] || (_[15] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Fn, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
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
                    onClick: _[2] || (_[2] = (Z) => n.value = !n.value)
                  }, [
                    _[16] || (_[16] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
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
              v.value ? (s(), o("div", Jn, [
                b(tt, { level: "4" }, {
                  default: i(() => [..._[17] || (_[17] = [
                    h("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (J = (x = t.status.git_changes) == null ? void 0 : x.nodes_added) != null && J.length ? (s(), o("div", Yn, [
                  e("div", Xn, [
                    _[18] || (_[18] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Qn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Zn, [
                    (s(!0), o(V, null, oe(t.status.git_changes.nodes_added, (Z) => (s(), o("div", {
                      key: y(Z),
                      class: "change-item"
                    }, [
                      e("span", ea, a(y(Z)), 1),
                      w(Z) ? (s(), o("span", ta, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (W = (A = t.status.git_changes) == null ? void 0 : A.nodes_removed) != null && W.length ? (s(), o("div", sa, [
                  e("div", oa, [
                    _[19] || (_[19] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", na, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", aa, [
                    (s(!0), o(V, null, oe(t.status.git_changes.nodes_removed, (Z) => (s(), o("div", {
                      key: y(Z),
                      class: "change-item"
                    }, [
                      e("span", la, a(y(Z)), 1),
                      w(Z) ? (s(), o("span", ia, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (T = t.status.git_changes) != null && T.workflow_changes ? (s(), o("div", ra, [
                  _[20] || (_[20] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", da, [
                    e("div", ca, [
                      e("span", ua, a(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : d("", !0),
                (R = t.status.git_changes) != null && R.has_other_changes ? (s(), o("div", ma, [..._[21] || (_[21] = [
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
                  b(tt, { level: "4" }, {
                    default: i(() => [..._[22] || (_[22] = [
                      h("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: _[3] || (_[3] = (Z) => k.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                _[26] || (_[26] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (se = (le = t.status.comparison) == null ? void 0 : le.missing_nodes) != null && se.length ? (s(), o("div", ga, [
                  b(Ne, {
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
                (ce = (X = t.status.comparison) == null ? void 0 : X.extra_nodes) != null && ce.length ? (s(), o("div", ya, [
                  b(Ne, {
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
                (D = (Y = t.status.comparison) == null ? void 0 : Y.version_mismatches) != null && D.length ? (s(), o("div", ba, [
                  b(Ne, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  e("div", _a, [
                    (s(!0), o(V, null, oe(t.status.comparison.version_mismatches.slice(0, 10), (Z) => (s(), o("div", {
                      key: Z.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      h(a(Z.name) + ": ", 1),
                      e("span", $a, a(Z.actual), 1),
                      _[23] || (_[23] = h(" → ", -1)),
                      e("span", Ca, a(Z.expected), 1)
                    ]))), 128)),
                    t.status.comparison.version_mismatches.length > 10 ? (s(), o("div", xa, " ... and " + a(t.status.comparison.version_mismatches.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                ((P = t.status.comparison) == null ? void 0 : P.packages_in_sync) === !1 ? (s(), o("div", Sa, [
                  b(Ne, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : d("", !0),
                e("div", Ia, [
                  b(ne, {
                    variant: "warning",
                    loading: t.isRepairing,
                    onClick: _[4] || (_[4] = (Z) => k.$emit("repair"))
                  }, {
                    default: i(() => [..._[24] || (_[24] = [
                      h(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  _[25] || (_[25] = e("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (re = (S = t.status.comparison) == null ? void 0 : S.disabled_nodes) != null && re.length ? (s(), o("div", Ea, [
                b(tt, { level: "4" }, {
                  default: i(() => [..._[27] || (_[27] = [
                    h("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Ma, [
                  _[28] || (_[28] = e("span", { class: "info-icon" }, "ℹ", -1)),
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
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", za, [
                b(tt, { level: "4" }, {
                  default: i(() => [..._[29] || (_[29] = [
                    h("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", La, [
                  _[30] || (_[30] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                _[31] || (_[31] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : d("", !0),
              r.value ? (s(), o("div", Pa, [..._[32] || (_[32] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : d("", !0)
            ]),
            e("div", Da, [
              b(ne, {
                variant: "secondary",
                onClick: _[5] || (_[5] = (Z) => k.$emit("close"))
              }, {
                default: i(() => [..._[33] || (_[33] = [
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
}), Ua = /* @__PURE__ */ te(Na, [["__scopeId", "data-v-e2b37122"]]), Oa = { class: "health-section-header" }, Ba = { class: "suggestions-content" }, Aa = { class: "suggestions-text" }, Fa = { style: { "margin-top": "var(--cg-space-3)" } }, Va = {
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
    const l = t, p = $(!1), g = $(!1);
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
    function k() {
      w.value = !0, m("repair-environment");
    }
    function _() {
      w.value = !1;
    }
    function M() {
      p.value = !1;
    }
    const F = U(() => {
      const Y = l.status.workflows.analyzed || [], D = Y.filter(
        (P) => P.unresolved_models_count > 0 || P.ambiguous_models_count > 0
      );
      return D.length === 0 && l.status.missing_models_count > 0 ? Y.filter((P) => P.sync_state === "synced") : D;
    });
    function f() {
      const Y = F.value;
      Y.length !== 0 && (y.value = !0, m("repair-missing-models", Y.map((D) => D.name)));
    }
    function C() {
      y.value = !1;
    }
    c({ resetRepairingState: C, resetRepairingEnvironmentState: _, closeDetailModal: M });
    const N = U(() => l.status.workflows.new.length > 0 || l.status.workflows.modified.length > 0 || l.status.workflows.deleted.length > 0), z = U(() => l.status.has_changes), x = U(() => {
      const Y = l.status.git_changes;
      return Y.nodes_added.length > 0 || Y.nodes_removed.length > 0 || Y.workflow_changes;
    }), J = U(() => l.status.has_changes || N.value), A = U(() => Object.keys(l.status.git_changes.workflow_changes_detail).length), W = U(() => l.status.git_changes.has_other_changes), T = U(() => {
      var Y;
      return ((Y = l.status.workflows.analyzed) == null ? void 0 : Y.filter((D) => D.status === "broken")) || [];
    }), R = U(() => {
      var Y;
      return ((Y = l.status.workflows.analyzed) == null ? void 0 : Y.filter(
        (D) => D.has_path_sync_issues && !D.has_issues
      )) || [];
    }), O = U(() => T.value.length > 0), le = U(() => O.value || R.value.length > 0 || l.status.missing_models_count > 0 || !l.status.comparison.is_synced || l.status.has_legacy_manager), se = U(() => {
      const Y = [];
      return l.status.workflows.new.length > 0 && Y.push(`${l.status.workflows.new.length} new`), l.status.workflows.modified.length > 0 && Y.push(`${l.status.workflows.modified.length} modified`), l.status.workflows.deleted.length > 0 && Y.push(`${l.status.workflows.deleted.length} deleted`), Y.length > 0 ? `${Y.join(", ")} workflow${Y.length === 1 && !Y[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), X = U(() => {
      var P, S;
      const Y = [], D = l.status.comparison;
      return (P = D.missing_nodes) != null && P.length && Y.push(`${D.missing_nodes.length} missing node${D.missing_nodes.length === 1 ? "" : "s"}`), (S = D.extra_nodes) != null && S.length && Y.push(`${D.extra_nodes.length} untracked node${D.extra_nodes.length === 1 ? "" : "s"}`), Y.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${Y.join(" and ")}.`;
    }), ce = U(() => {
      var P, S;
      const Y = [], D = l.status.comparison;
      return (P = D.extra_nodes) != null && P.length && (D.extra_nodes.slice(0, 3).forEach((re) => {
        Y.push(`Untracked: ${re}`);
      }), D.extra_nodes.length > 3 && Y.push(`...and ${D.extra_nodes.length - 3} more untracked`)), (S = D.missing_nodes) != null && S.length && (D.missing_nodes.slice(0, 3).forEach((re) => {
        Y.push(`Missing: ${re}`);
      }), D.missing_nodes.length > 3 && Y.push(`...and ${D.missing_nodes.length - 3} more missing`)), Y;
    });
    return (Y, D) => (s(), o(V, null, [
      b(Ke, null, {
        header: i(() => [
          b(Je, { title: "STATUS" })
        ]),
        content: i(() => [
          l.setupState === "no_workspace" ? (s(), E(nt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: i(() => [
              b(ne, {
                variant: "primary",
                size: "sm",
                onClick: D[0] || (D[0] = (P) => Y.$emit("start-setup"))
              }, {
                default: i(() => [...D[13] || (D[13] = [
                  h(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : l.setupState === "unmanaged" ? (s(), E(nt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: i(() => [
              b(ne, {
                variant: "primary",
                size: "sm",
                onClick: D[1] || (D[1] = (P) => Y.$emit("view-environments"))
              }, {
                default: i(() => [...D[14] || (D[14] = [
                  h(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : l.setupState === "empty_workspace" ? (s(), E(nt, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: i(() => [
              b(ne, {
                variant: "primary",
                size: "sm",
                onClick: D[2] || (D[2] = (P) => Y.$emit("create-environment"))
              }, {
                default: i(() => [...D[15] || (D[15] = [
                  h(" Create Environment ", -1)
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
              b(tt, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: i(() => [...D[16] || (D[16] = [
                  h(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              b(ro, { name: "fade" }, {
                default: i(() => [
                  g.value ? (s(), E(ne, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: u
                  }, {
                    default: i(() => [...D[17] || (D[17] = [
                      h(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : d("", !0)
                ]),
                _: 1
              })
            ]),
            b(Fo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Wt({
              left: i(() => [
                t.status.workflows.new.length ? (s(), E(ct, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.modified.length ? (s(), E(ct, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.deleted.length ? (s(), E(ct, {
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
                  separator: N.value
                }, null, 8, ["count", "separator"])
              ]),
              right: i(() => [
                t.status.git_changes.nodes_added.length ? (s(), E(ct, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), E(ct, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.workflow_changes ? (s(), E(ct, {
                  key: 2,
                  icon: "●",
                  count: A.value,
                  label: A.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : d("", !0),
                W.value ? (s(), E(ct, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : d("", !0),
                z.value && !x.value && !W.value ? (s(), E(ct, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : d("", !0),
                z.value ? d("", !0) : (s(), E(ct, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              J.value ? {
                name: "footer",
                fn: i(() => [
                  D[19] || (D[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Ba, [
                    e("span", Aa, a(se.value), 1),
                    b(ne, {
                      variant: "primary",
                      size: "sm",
                      onClick: D[3] || (D[3] = (P) => Y.$emit("commit-changes"))
                    }, {
                      default: i(() => [...D[18] || (D[18] = [
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
          t.status.is_detached_head ? (s(), E(nt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: i(() => [
              b(ne, {
                variant: "primary",
                size: "sm",
                onClick: D[6] || (D[6] = (P) => Y.$emit("create-branch"))
              }, {
                default: i(() => [...D[20] || (D[20] = [
                  h(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", Fa, [
            b(tt, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...D[21] || (D[21] = [
                h(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            le.value ? (s(), o(V, { key: 0 }, [
              T.value.length > 0 ? (s(), E(nt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${T.value.length} workflow${T.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: T.value.map((P) => `${P.name} — ${P.issue_summary}`)
              }, {
                actions: i(() => [
                  b(ne, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[7] || (D[7] = (P) => Y.$emit("view-workflows"))
                  }, {
                    default: i(() => [...D[22] || (D[22] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              R.value.length > 0 ? (s(), E(nt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${R.value.length} workflow${R.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: R.value.map((P) => `${P.name} — ${P.models_needing_path_sync_count} model path${P.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: i(() => [
                  b(ne, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[8] || (D[8] = (P) => Y.$emit("view-workflows"))
                  }, {
                    default: i(() => [...D[23] || (D[23] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              t.status.missing_models_count > 0 && !O.value ? (s(), E(nt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: i(() => [
                  b(ne, {
                    variant: "primary",
                    size: "sm",
                    disabled: y.value,
                    onClick: f
                  }, {
                    default: i(() => [
                      h(a(y.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  b(ne, {
                    variant: "secondary",
                    size: "sm",
                    onClick: D[9] || (D[9] = (P) => Y.$emit("view-workflows"))
                  }, {
                    default: i(() => [...D[24] || (D[24] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : d("", !0),
              t.status.comparison.is_synced ? d("", !0) : (s(), E(nt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: X.value,
                items: ce.value
              }, {
                actions: i(() => [
                  b(ne, {
                    variant: "secondary",
                    size: "sm",
                    onClick: u
                  }, {
                    default: i(() => [...D[25] || (D[25] = [
                      h(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  b(ne, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[10] || (D[10] = (P) => Y.$emit("view-nodes"))
                  }, {
                    default: i(() => [...D[26] || (D[26] = [
                      h(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), E(nt, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: i(() => [
                  b(ne, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[11] || (D[11] = (P) => Y.$emit("view-nodes"))
                  }, {
                    default: i(() => [...D[27] || (D[27] = [
                      h(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : d("", !0)
            ], 64)) : J.value ? (s(), o("span", Va, "No issues")) : (s(), E(it, {
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
        onClose: D[12] || (D[12] = (P) => p.value = !1),
        onNavigateWorkflows: v,
        onNavigateNodes: r,
        onRepair: k
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
    const l = t, p = n, g = $(null);
    function u(v) {
      const r = v.target.value;
      p("update:modelValue", r);
    }
    return Ue(() => {
      l.autoFocus && g.value && g.value.focus();
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
}), Qt = /* @__PURE__ */ te(Ha, [["__scopeId", "data-v-0380d08f"]]), qa = { class: "branch-create-form" }, Ka = { class: "form-actions" }, Ja = /* @__PURE__ */ ee({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, l = $(""), p = U(() => {
      const v = l.value.trim();
      return v.length > 0 && !v.startsWith("-") && !v.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(v);
    });
    function g() {
      p.value && (n("create", l.value.trim()), l.value = "");
    }
    function u() {
      l.value = "", n("cancel");
    }
    return (v, r) => (s(), o("div", qa, [
      b(Qt, {
        modelValue: l.value,
        "onUpdate:modelValue": r[0] || (r[0] = (m) => l.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: g,
        onEscape: u
      }, null, 8, ["modelValue"]),
      e("div", Ka, [
        b(ne, {
          variant: "primary",
          size: "sm",
          disabled: !p.value,
          onClick: g
        }, {
          default: i(() => [...r[1] || (r[1] = [
            h(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        b(ne, {
          variant: "secondary",
          size: "sm",
          onClick: u
        }, {
          default: i(() => [...r[2] || (r[2] = [
            h(" Cancel ", -1)
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
    const n = c, l = $(!1);
    function p(u) {
      n("create", u), g();
    }
    function g() {
      l.value = !1;
    }
    return (u, v) => (s(), E(Ke, null, {
      header: i(() => [
        b(Je, { title: "BRANCHES" }, {
          actions: i(() => [
            l.value ? d("", !0) : (s(), E(ne, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: v[0] || (v[0] = (r) => l.value = !0)
            }, {
              default: i(() => [...v[1] || (v[1] = [
                h(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        l.value ? (s(), E(Ya, {
          key: 0,
          onCreate: p,
          onCancel: g
        })) : d("", !0),
        t.branches.length === 0 ? (s(), E(it, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", ol, [
          (s(!0), o(V, null, oe(t.branches, (r) => (s(), E(sl, {
            key: r.name,
            "branch-name": r.name,
            "is-current": r.is_current
          }, {
            actions: i(() => [
              r.is_current ? d("", !0) : (s(), E(ne, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (m) => u.$emit("delete", r.name)
              }, {
                default: i(() => [...v[2] || (v[2] = [
                  h(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              r.is_current ? d("", !0) : (s(), E(ne, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (m) => u.$emit("switch", r.name)
              }, {
                default: i(() => [...v[3] || (v[3] = [
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
    const c = t, n = U(() => c.hash.slice(0, c.length));
    return (l, p) => (s(), o("span", dl, a(n.value), 1));
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
    function p() {
      n.clickable && l("click");
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
        onClick: u[0] || (u[0] = ze(() => {
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
    return (c, n) => (s(), E(Ke, null, {
      header: i(() => [
        b(Je, { title: "HISTORY" })
      ]),
      content: i(() => [
        t.commits.length === 0 ? (s(), E(it, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), E(rl, { key: 1 }, {
          default: i(() => [
            (s(!0), o(V, null, oe(t.commits, (l) => (s(), E(fl, {
              key: l.hash,
              hash: l.short_hash || l.hash,
              message: l.message,
              "relative-date": l.date_relative || l.relative_date,
              onClick: (p) => c.$emit("select", l)
            }, {
              actions: i(() => [
                b(ne, {
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
}), pl = /* @__PURE__ */ te(gl, [["__scopeId", "data-v-981c3c64"]]), O2 = ts({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const B2 = [
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
], A2 = {
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
], F2 = [
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
    var Le;
    if (!((Le = window.app) != null && Le.api))
      throw new Error("ComfyUI API not available");
    const pe = await window.app.api.fetchApi(q, ue);
    if (!pe.ok) {
      const He = await pe.json().catch(() => ({}));
      throw new Error(He.error || He.message || `Request failed: ${pe.status}`);
    }
    return pe.json();
  }
  async function l(q = !1) {
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
  async function k(q, ue = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, start_point: ue })
    });
  }
  async function _(q, ue = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: q, force: ue })
    });
  }
  async function M(q, ue = !1) {
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
  async function f(q, ue) {
    const pe = { target_env: q };
    return ue && (pe.workspace_path = ue), n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pe)
    });
  }
  async function C() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function N(q) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function z() {
    return n("/v2/workspace/environments/create_status");
  }
  async function x(q = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${q}`);
  }
  async function J(q) {
    return n(`/v2/workspace/environments/${q}`, {
      method: "DELETE"
    });
  }
  async function A(q = !1) {
    try {
      return n(q ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ue = await l(q), pe = [];
      return ue.workflows.new.forEach((Le) => {
        pe.push({ name: Le, status: "new", missing_nodes: 0, missing_models: 0, path: Le });
      }), ue.workflows.modified.forEach((Le) => {
        pe.push({ name: Le, status: "modified", missing_nodes: 0, missing_models: 0, path: Le });
      }), ue.workflows.synced.forEach((Le) => {
        pe.push({ name: Le, status: "synced", missing_nodes: 0, missing_models: 0, path: Le });
      }), pe;
    }
  }
  async function W(q) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/details`);
  }
  async function T(q) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/resolve`, {
      method: "POST"
    });
  }
  async function R(q, ue, pe) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ue, install_models: pe })
    });
  }
  async function O(q, ue, pe) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(q)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ue, importance: pe })
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
  async function X(q) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(q)}`);
  }
  async function ce(q) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function Y(q, ue) {
    return n(`/v2/workspace/models/${q}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ue })
    });
  }
  async function D(q, ue) {
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
  async function re() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function Z() {
    return n("/v2/workspace/models/directory");
  }
  async function ke(q) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function be(q) {
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
  async function Te(q, ue) {
    const pe = ue ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(ue)}` : "/v2/comfygit/config";
    return n(pe, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function Re(q, ue) {
    try {
      const pe = new URLSearchParams();
      return q && pe.append("level", q), ue && pe.append("lines", ue.toString()), n(`/v2/comfygit/debug/logs?${pe}`);
    } catch {
      return [];
    }
  }
  async function de(q, ue) {
    try {
      const pe = new URLSearchParams();
      return q && pe.append("level", q), ue && pe.append("lines", ue.toString()), n(`/v2/workspace/debug/logs?${pe}`);
    } catch {
      return [];
    }
  }
  async function fe() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function Me() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function ie(q) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function K() {
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
  async function Ie(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}/track-dev`, {
      method: "POST"
    });
  }
  async function _e(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}/install`, {
      method: "POST"
    });
  }
  async function st(q) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(q)}/update`, {
      method: "POST"
    });
  }
  async function rt(q) {
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
  async function Se(q, ue) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, url: ue })
    });
  }
  async function Ze(q) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}`, {
      method: "DELETE"
    });
  }
  async function Ge(q, ue, pe) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ue, push_url: pe })
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
  async function ye(q = "skip", ue = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: q,
        remove_extra_nodes: ue
      })
    });
  }
  async function Fe(q, ue) {
    const pe = ue ? `/v2/comfygit/remotes/${encodeURIComponent(q)}/pull-preview?branch=${encodeURIComponent(ue)}` : `/v2/comfygit/remotes/${encodeURIComponent(q)}/pull-preview`;
    return n(pe);
  }
  async function dt(q, ue = {}) {
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
  async function Xe(q, ue) {
    const pe = ue ? `/v2/comfygit/remotes/${encodeURIComponent(q)}/push-preview?branch=${encodeURIComponent(ue)}` : `/v2/comfygit/remotes/${encodeURIComponent(q)}/push-preview`;
    return n(pe);
  }
  async function ae(q, ue = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ue.force || !1 })
    });
  }
  async function G(q, ue) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(q)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: ue })
    });
  }
  async function H(q) {
    const ue = {
      success: 0,
      failed: []
    };
    for (const pe of q)
      try {
        await T(pe), ue.success++;
      } catch (Le) {
        ue.failed.push({
          name: pe,
          error: Le instanceof Error ? Le.message : "Unknown error"
        });
      }
    return ue;
  }
  async function I(q) {
    var Le;
    const ue = new FormData();
    if (ue.append("file", q), !((Le = window.app) != null && Le.api))
      throw new Error("ComfyUI API not available");
    const pe = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: ue
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!pe.ok) {
      const He = await pe.json().catch(() => ({}));
      throw new Error(He.error || `Preview failed: ${pe.status}`);
    }
    return pe.json();
  }
  async function B(q) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(q)}`
    );
  }
  async function Q(q, ue, pe, Le) {
    var Ht;
    const He = new FormData();
    if (He.append("file", q), He.append("name", ue), He.append("model_strategy", pe), He.append("torch_backend", Le), !((Ht = window.app) != null && Ht.api))
      throw new Error("ComfyUI API not available");
    const It = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: He
    });
    if (!It.ok) {
      const qt = await It.json().catch(() => ({}));
      throw new Error(qt.message || qt.error || `Import failed: ${It.status}`);
    }
    return It.json();
  }
  async function we() {
    return n("/v2/workspace/import/status");
  }
  async function Pe(q) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: q })
    });
  }
  async function gt(q, ue, pe, Le) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: q,
        name: ue,
        model_strategy: pe,
        torch_backend: Le
      })
    });
  }
  async function Ct() {
    return n("/v2/setup/status");
  }
  async function ot(q) {
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
    getStatus: l,
    commit: p,
    getHistory: g,
    exportEnv: u,
    validateExport: v,
    exportEnvWithForce: r,
    // Git Operations
    getBranches: m,
    getCommitDetail: y,
    checkout: w,
    createBranch: k,
    switchBranch: _,
    deleteBranch: M,
    // Environment Management
    getEnvironments: F,
    switchEnvironment: f,
    getSwitchProgress: C,
    createEnvironment: N,
    getCreateProgress: z,
    getComfyUIReleases: x,
    deleteEnvironment: J,
    // Workflow Management
    getWorkflows: A,
    getWorkflowDetails: W,
    resolveWorkflow: T,
    installWorkflowDeps: R,
    setModelImportance: O,
    // Model Management
    getEnvironmentModels: le,
    getWorkspaceModels: se,
    getModelDetails: X,
    openFileLocation: ce,
    addModelSource: Y,
    removeModelSource: D,
    deleteModel: P,
    downloadModel: S,
    scanWorkspaceModels: re,
    getModelsDirectory: Z,
    setModelsDirectory: ke,
    // Settings
    getConfig: be,
    updateConfig: Te,
    // Debug/Logs
    getEnvironmentLogs: Re,
    getWorkspaceLogs: de,
    getEnvironmentLogPath: fe,
    getWorkspaceLogPath: Me,
    openFile: ie,
    // Node Management
    getNodes: K,
    trackNodeAsDev: Ie,
    installNode: _e,
    updateNode: st,
    uninstallNode: rt,
    // Git Remotes
    getRemotes: vt,
    addRemote: Se,
    removeRemote: Ze,
    updateRemoteUrl: Ge,
    fetchRemote: je,
    getRemoteSyncStatus: ft,
    // Push/Pull
    getPullPreview: Fe,
    pullFromRemote: dt,
    getPushPreview: Xe,
    pushToRemote: ae,
    validateMerge: G,
    // Environment Sync
    syncEnvironmentManually: ye,
    // Workflow Repair
    repairWorkflowModels: H,
    // Import Operations
    previewTarballImport: I,
    previewGitImport: Pe,
    validateEnvironmentName: B,
    executeImport: Q,
    executeGitImport: gt,
    getImportProgress: we,
    // First-Time Setup
    getSetupStatus: Ct,
    initializeWorkspace: ot,
    getInitializeProgress: xt,
    validatePath: St
  };
}
async function Nt(t, c = {}, n = 5e3) {
  const l = new AbortController(), p = setTimeout(() => l.abort(), n);
  try {
    const g = await fetch(t, {
      ...c,
      signal: l.signal
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
    getStatus: l,
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
    function p() {
      n.closeOnOverlayClick && l("close");
    }
    function g(u) {
      u.key === "Escape" && n.showCloseButton && l("close");
    }
    return Ue(() => {
      document.addEventListener("keydown", g), document.body.style.overflow = "hidden";
    }), zs(() => {
      document.removeEventListener("keydown", g), document.body.style.overflow = "";
    }), (u, v) => (s(), E(Ve, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: p
      }, [
        e("div", {
          class: me(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: v[1] || (v[1] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", yl, [
            Ce(u.$slots, "header", {}, () => [
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
            t.loading ? (s(), o("div", bl, "Loading...")) : t.error ? (s(), o("div", _l, a(t.error), 1)) : Ce(u.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          u.$slots.footer ? (s(), o("div", $l, [
            Ce(u.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), Ye = /* @__PURE__ */ te(Cl, [["__scopeId", "data-v-8dab1081"]]), xl = ["type", "disabled"], Sl = {
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
    return (c, n) => (s(), E(cs(`h${t.level}`), {
      class: me(["base-title", t.variant])
    }, {
      default: i(() => [
        Ce(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", El, "(" + a(t.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), At = /* @__PURE__ */ te(Ml, [["__scopeId", "data-v-5a01561d"]]), Tl = ["value", "disabled"], Rl = {
  key: 0,
  value: "",
  disabled: ""
}, zl = ["value"], Ll = {
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
    return (l, p) => (s(), o("div", {
      class: me(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: me(["base-select", { error: !!t.error }]),
        onChange: p[0] || (p[0] = (g) => l.$emit("update:modelValue", g.target.value))
      }, [
        t.placeholder ? (s(), o("option", Rl, a(t.placeholder), 1)) : d("", !0),
        (s(!0), o(V, null, oe(t.options, (g) => (s(), o("option", {
          key: c(g),
          value: c(g)
        }, a(n(g)), 9, zl))), 128))
      ], 42, Tl),
      t.error ? (s(), o("span", Ll, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), Dl = /* @__PURE__ */ te(Pl, [["__scopeId", "data-v-7436d745"]]), Nl = { class: "popover-header" }, Ul = { class: "popover-title" }, Ol = { class: "popover-content" }, Bl = {
  key: 0,
  class: "popover-actions"
}, Al = /* @__PURE__ */ ee({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (s(), E(Ve, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (l) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: yt({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = ze(() => {
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
}), mt = /* @__PURE__ */ te(Al, [["__scopeId", "data-v-42815ace"]]), Fl = { class: "detail-section" }, Vl = {
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
    const n = t, l = c, { getWorkflowDetails: p, setModelImportance: g, openFileLocation: u } = Ae(), v = $(null), r = $(!1), m = $(null), y = $(!1), w = $({}), k = $(!1), _ = $(/* @__PURE__ */ new Set()), M = [
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
      const R = T.hash || T.filename;
      return _.value.has(R) ? T.loaded_by : T.loaded_by.slice(0, 3);
    }
    function N(T) {
      return _.value.has(T);
    }
    function z(T) {
      _.value.has(T) ? _.value.delete(T) : _.value.add(T), _.value = new Set(_.value);
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
    function J(T, R) {
      w.value[T] = R, y.value = !0;
    }
    async function A(T) {
      try {
        await u(T);
      } catch (R) {
        m.value = R instanceof Error ? R.message : "Failed to open file location";
      }
    }
    async function W() {
      if (!y.value) {
        l("close");
        return;
      }
      r.value = !0, m.value = null;
      try {
        for (const [T, R] of Object.entries(w.value))
          await g(n.workflowName, T, R);
        l("refresh"), l("close");
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to save changes";
      } finally {
        r.value = !1;
      }
    }
    return Ue(x), (T, R) => (s(), o(V, null, [
      b(Ye, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: r.value,
        error: m.value || void 0,
        onClose: R[4] || (R[4] = (O) => l("close"))
      }, {
        body: i(() => [
          v.value ? (s(), o(V, { key: 0 }, [
            e("section", Fl, [
              b(At, { variant: "section" }, {
                default: i(() => [
                  h("MODELS USED (" + a(v.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.models.length === 0 ? (s(), o("div", Vl, " No models used in this workflow ")) : d("", !0),
              (s(!0), o(V, null, oe(v.value.models, (O) => {
                var le;
                return s(), o("div", {
                  key: O.hash || O.filename,
                  class: "model-card"
                }, [
                  e("div", Wl, [
                    R[6] || (R[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", Gl, a(O.filename), 1)
                  ]),
                  e("div", jl, [
                    e("div", Hl, [
                      R[7] || (R[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: me(["value", F(O.status)])
                      }, a(f(O.status)), 3)
                    ]),
                    e("div", ql, [
                      e("span", Kl, [
                        R[8] || (R[8] = h(" Importance: ", -1)),
                        b(Ls, {
                          size: 14,
                          title: "About importance levels",
                          onClick: R[0] || (R[0] = (se) => k.value = !0)
                        })
                      ]),
                      b(Dl, {
                        "model-value": w.value[O.filename] || O.importance,
                        options: M,
                        "onUpdate:modelValue": (se) => J(O.filename, se)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    O.loaded_by && O.loaded_by.length > 0 ? (s(), o("div", Jl, [
                      R[9] || (R[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", Yl, [
                        (s(!0), o(V, null, oe(C(O), (se, X) => (s(), o("div", {
                          key: `${se.node_id}-${X}`,
                          class: "node-reference"
                        }, a(se.node_type) + " (Node #" + a(se.node_id) + ") ", 1))), 128)),
                        O.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (se) => z(O.hash || O.filename)
                        }, a(N(O.hash || O.filename) ? "▼ Show less" : `▶ View all (${O.loaded_by.length})`), 9, Xl)) : d("", !0)
                      ])
                    ])) : d("", !0),
                    O.size_mb ? (s(), o("div", Ql, [
                      R[10] || (R[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", Zl, a(O.size_mb) + " MB", 1)
                    ])) : d("", !0),
                    O.has_category_mismatch ? (s(), o("div", ei, [
                      R[13] || (R[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", ti, [
                        R[11] || (R[11] = h(" In ", -1)),
                        e("code", null, a(O.actual_category) + "/", 1),
                        R[12] || (R[12] = h(" but loader needs ", -1)),
                        e("code", null, a((le = O.expected_categories) == null ? void 0 : le[0]) + "/", 1)
                      ])
                    ])) : d("", !0)
                  ]),
                  O.status !== "available" ? (s(), o("div", si, [
                    O.status === "downloadable" ? (s(), E(ve, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: R[1] || (R[1] = (se) => l("resolve"))
                    }, {
                      default: i(() => [...R[14] || (R[14] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    })) : O.status === "category_mismatch" && O.file_path ? (s(), E(ve, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => A(O.file_path)
                    }, {
                      default: i(() => [...R[15] || (R[15] = [
                        h(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : O.status !== "path_mismatch" ? (s(), E(ve, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: R[2] || (R[2] = (se) => l("resolve"))
                    }, {
                      default: i(() => [...R[16] || (R[16] = [
                        h(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : d("", !0)
                  ])) : d("", !0)
                ]);
              }), 128))
            ]),
            e("section", oi, [
              b(At, { variant: "section" }, {
                default: i(() => [
                  h("NODES USED (" + a(v.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.nodes.length === 0 ? (s(), o("div", ni, " No custom nodes used in this workflow ")) : d("", !0),
              (s(!0), o(V, null, oe(v.value.nodes, (O) => (s(), o("div", {
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
          b(ve, {
            variant: "secondary",
            onClick: R[3] || (R[3] = (O) => l("close"))
          }, {
            default: i(() => [...R[17] || (R[17] = [
              h(" Close ", -1)
            ])]),
            _: 1
          }),
          y.value ? (s(), E(ve, {
            key: 0,
            variant: "primary",
            onClick: W
          }, {
            default: i(() => [...R[18] || (R[18] = [
              h(" Save Changes ", -1)
            ])]),
            _: 1
          })) : d("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      b(mt, {
        show: k.value,
        title: "Model Importance Levels",
        onClose: R[5] || (R[5] = (O) => k.value = !1)
      }, {
        content: i(() => [...R[19] || (R[19] = [
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
}), ri = /* @__PURE__ */ te(ii, [["__scopeId", "data-v-668728e6"]]), Ee = ts({
  items: [],
  status: "idle"
});
let ut = null;
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
    ut && (ut.close(), ut = null);
    const l = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), p = new EventSource(`/v2/comfygit/models/download-stream?${l}`);
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
              const k = t.downloaded - u;
              if (t.speed = k / w, g = y, u = t.downloaded, t.speed > 0 && t.size > 0) {
                const _ = t.size - t.downloaded;
                t.eta = _ / t.speed;
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
      if (Ee.items.some((p) => p.url === n.url && p.filename === n.filename))
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
  function t(f) {
    for (const C of f) {
      if (Ee.items.some(
        (x) => x.url === C.url && x.targetPath === C.targetPath && ["queued", "downloading", "paused", "completed"].includes(x.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${C.filename}`);
        continue;
      }
      const z = {
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
      Ee.items.push(z);
    }
    Ee.status === "idle" && Mt();
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
        ut && (ut.close(), ut = null), C.status = "failed", C.error = "Cancelled by user", Ee.status = "idle", Mt();
      } else if (C.status === "queued") {
        const N = Ee.items.findIndex((z) => z.id === f);
        N >= 0 && Ee.items.splice(N, 1);
      }
    }
  }
  function n(f) {
    const C = ss(f);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, Ee.status === "idle" && Mt());
  }
  function l(f) {
    const C = ss(f);
    !C || C.status !== "paused" || (C.status = "queued", Ee.status === "idle" && Mt());
  }
  function p() {
    const f = Ee.items.filter((C) => C.status === "paused");
    for (const C of f)
      C.status = "queued";
    Ee.status === "idle" && Mt();
  }
  function g(f) {
    const C = Ee.items.findIndex((N) => N.id === f);
    C >= 0 && ["completed", "failed", "paused"].includes(Ee.items[C].status) && Ee.items.splice(C, 1);
  }
  function u() {
    Ee.items = Ee.items.filter((f) => f.status !== "completed");
  }
  function v() {
    Ee.items = Ee.items.filter((f) => f.status !== "failed");
  }
  const r = U(
    () => Ee.items.find((f) => f.status === "downloading")
  ), m = U(
    () => Ee.items.filter((f) => f.status === "queued")
  ), y = U(
    () => Ee.items.filter((f) => f.status === "completed")
  ), w = U(
    () => Ee.items.filter((f) => f.status === "failed")
  ), k = U(
    () => Ee.items.filter((f) => f.status === "paused")
  ), _ = U(() => Ee.items.length > 0), M = U(
    () => Ee.items.filter((f) => f.status === "queued" || f.status === "downloading").length
  ), F = U(
    () => Ee.items.some((f) => f.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: co(Ee),
    // Computed
    currentDownload: r,
    queuedItems: m,
    completedItems: y,
    failedItems: w,
    pausedItems: k,
    hasItems: _,
    activeCount: M,
    hasPaused: F,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: l,
    resumeAllPaused: p,
    removeItem: g,
    clearCompleted: u,
    clearFailed: v,
    loadPendingDownloads: ci
  };
}
function Us() {
  const t = $(null), c = $(null), n = $([]), l = $([]), p = $(!1), g = $(null);
  async function u(N, z) {
    var J;
    if (!((J = window.app) != null && J.api))
      throw new Error("ComfyUI API not available");
    const x = await window.app.api.fetchApi(N, z);
    if (!x.ok) {
      const A = await x.json().catch(() => ({})), W = A.error || A.message || `Request failed: ${x.status}`;
      throw new Error(W);
    }
    return x.json();
  }
  async function v(N) {
    p.value = !0, g.value = null;
    try {
      let z;
      return Dt() || (z = await u(
        `/v2/comfygit/workflow/${N}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = z, z;
    } catch (z) {
      const x = z instanceof Error ? z.message : "Unknown error occurred";
      throw g.value = x, z;
    } finally {
      p.value = !1;
    }
  }
  async function r(N, z, x, J) {
    p.value = !0, g.value = null;
    try {
      let A;
      if (!Dt()) {
        const W = Object.fromEntries(z), T = Object.fromEntries(x), R = J ? Array.from(J) : [];
        A = await u(
          `/v2/comfygit/workflow/${N}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: W,
              model_choices: T,
              skipped_packages: R
            })
          }
        );
      }
      return c.value = A, A;
    } catch (A) {
      const W = A instanceof Error ? A.message : "Unknown error occurred";
      throw g.value = W, A;
    } finally {
      p.value = !1;
    }
  }
  async function m(N, z = 10) {
    p.value = !0, g.value = null;
    try {
      let x;
      return Dt() || (x = await u(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: N, limit: z })
        }
      )), n.value = x.results, x.results;
    } catch (x) {
      const J = x instanceof Error ? x.message : "Unknown error occurred";
      throw g.value = J, x;
    } finally {
      p.value = !1;
    }
  }
  async function y(N, z = 10) {
    p.value = !0, g.value = null;
    try {
      let x;
      return Dt() || (x = await u(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: N, limit: z })
        }
      )), l.value = x.results, x.results;
    } catch (x) {
      const J = x instanceof Error ? x.message : "Unknown error occurred";
      throw g.value = J, x;
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
  function k() {
    w.phase = "idle", w.currentFile = void 0, w.currentFileIndex = void 0, w.totalFiles = void 0, w.bytesDownloaded = void 0, w.bytesTotal = void 0, w.completedFiles = [], w.nodesToInstall = [], w.nodesInstalled = [], w.installError = void 0, w.needsRestart = void 0, w.error = void 0, w.nodeInstallProgress = void 0;
  }
  async function _(N) {
    w.phase = "installing", w.nodesInstalled = [], w.installError = void 0, w.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Dt(), await M(N);
    } catch (z) {
      const x = z instanceof Error ? z.message : "Failed to install nodes";
      throw w.installError = x, z;
    }
  }
  async function M(N) {
    var x;
    const z = await u(
      `/v2/comfygit/workflow/${N}/install`,
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
      const J = new Map(((x = z.failed) == null ? void 0 : x.map((A) => [A.node_id, A.error])) || []);
      for (let A = 0; A < w.nodesToInstall.length; A++) {
        const W = w.nodesToInstall[A], T = J.get(W);
        w.nodeInstallProgress.completedNodes.push({
          node_id: W,
          success: !T,
          error: T
        });
      }
    }
    return w.nodesInstalled = z.nodes_installed, w.needsRestart = z.nodes_installed.length > 0, z.failed && z.failed.length > 0 && (w.installError = `${z.failed.length} package(s) failed to install`), z;
  }
  async function F(N, z, x) {
    k(), w.phase = "resolving", g.value = null;
    const J = Object.fromEntries(z), A = Object.fromEntries(x);
    try {
      const W = await fetch(`/v2/comfygit/workflow/${N}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: J,
          model_choices: A
        })
      });
      if (!W.ok)
        throw new Error(`Request failed: ${W.status}`);
      if (!W.body)
        throw new Error("No response body");
      const T = W.body.getReader(), R = new TextDecoder();
      let O = "";
      for (; ; ) {
        const { done: le, value: se } = await T.read();
        if (le) break;
        O += R.decode(se, { stream: !0 });
        const X = O.split(`

`);
        O = X.pop() || "";
        for (const ce of X) {
          if (!ce.trim()) continue;
          const Y = ce.split(`
`);
          let D = "", P = "";
          for (const S of Y)
            S.startsWith("event: ") ? D = S.slice(7) : S.startsWith("data: ") && (P = S.slice(6));
          if (P)
            try {
              const S = JSON.parse(P);
              f(D, S);
            } catch (S) {
              console.warn("Failed to parse SSE event:", S);
            }
        }
      }
    } catch (W) {
      const T = W instanceof Error ? W.message : "Unknown error occurred";
      throw g.value = T, w.error = T, w.phase = "error", W;
    }
  }
  function f(N, z) {
    switch (N) {
      case "batch_start":
        w.phase = "downloading", w.totalFiles = z.total;
        break;
      case "file_start":
        w.currentFile = z.filename, w.currentFileIndex = z.index, w.bytesDownloaded = 0, w.bytesTotal = void 0;
        break;
      case "file_progress":
        w.bytesDownloaded = z.downloaded, w.bytesTotal = z.total;
        break;
      case "file_complete":
        w.completedFiles.push({
          filename: z.filename,
          success: z.success,
          error: z.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        w.nodesToInstall = z.nodes_to_install || [], z.download_results && (w.completedFiles = z.download_results), w.phase = "complete";
        break;
      case "error":
        w.error = z.message, w.phase = "error", g.value = z.message;
        break;
    }
  }
  function C(N, z) {
    const { addToQueue: x } = Gt(), J = z.filter((A) => A.url && A.target_path).map((A) => ({
      workflow: N,
      filename: A.filename,
      url: A.url,
      targetPath: A.target_path,
      size: A.size || 0,
      type: "model"
    }));
    return J.length > 0 && x(J), J.length;
  }
  return {
    // State
    result: t,
    appliedResult: c,
    searchResults: n,
    modelSearchResults: l,
    isLoading: p,
    error: g,
    progress: w,
    // Methods
    analyzeWorkflow: v,
    applyResolution: r,
    applyResolutionWithProgress: F,
    installNodes: _,
    searchNodes: m,
    searchModels: y,
    resetProgress: k,
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
      l("step-change", m);
    }
    return (m, y) => (s(), o("div", ui, [
      e("div", mi, [
        (s(!0), o(V, null, oe(t.steps, (w, k) => (s(), o("div", {
          key: w.id,
          class: me(["step", {
            active: t.currentStep === w.id,
            completed: p(w.id),
            "in-progress": g(w.id),
            disabled: v(w.id)
          }]),
          onClick: (_) => r(w.id)
        }, [
          e("div", {
            class: me(["step-indicator", u(w.id)])
          }, [
            p(w.id) ? (s(), o("span", fi, "✓")) : (s(), o("span", gi, a(k + 1), 1))
          ], 2),
          e("div", pi, a(w.label), 1),
          k < t.steps.length - 1 ? (s(), o("div", hi)) : d("", !0)
        ], 10, vi))), 128))
      ]),
      e("div", yi, [
        Ce(m.$slots, "default", {}, void 0, !0)
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
    const c = t, n = U(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), l = U(() => `confidence-${n.value}`), p = U(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (g, u) => (s(), o("span", {
      class: me(["confidence-badge", l.value, t.size])
    }, a(p.value), 3));
  }
}), Zt = /* @__PURE__ */ te(bi, [["__scopeId", "data-v-17ec4b80"]]), _i = { class: "node-info" }, $i = { class: "node-info-text" }, Ci = { class: "item-body" }, xi = {
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
}, Bi = { class: "options-list" }, Ai = ["onClick"], Fi = ["name", "value"], Vi = { class: "option-content" }, Wi = { class: "option-header" }, Gi = { class: "option-package-id" }, ji = {
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
    function p(r, m = 80) {
      return r.length <= m ? r : r.slice(0, m - 3) + "...";
    }
    const g = U(() => !!n.choice);
    U(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.action;
    }), U(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.package_id;
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
    function v(r) {
      l("option-selected", r);
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
          b(ve, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (y) => l("clear-choice"))
          }, {
            default: i(() => [...m[8] || (m[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Si, [
          m[12] || (m[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Ii, [
            (s(!0), o(V, null, oe(t.options, (y, w) => (s(), o("label", {
              key: y.package_id,
              class: me(["option-card", { selected: t.selectedOptionIndex === w }]),
              onClick: (k) => v(w)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: w,
                checked: t.selectedOptionIndex === w,
                onChange: (k) => v(w)
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
            b(ve, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (y) => l("search"))
            }, {
              default: i(() => [...m[9] || (m[9] = [
                h(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            b(ve, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (y) => l("manual-entry"))
            }, {
              default: i(() => [...m[10] || (m[10] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(ve, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (y) => l("mark-optional"))
            }, {
              default: i(() => [...m[11] || (m[11] = [
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
              (s(!0), o(V, null, oe(t.searchResults.slice(0, 5), (y, w) => (s(), o("label", {
                key: y.package_id,
                class: "option-card",
                onClick: (k) => l("search-result-selected", y)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: w
                }, null, 8, Fi),
                e("div", Vi, [
                  e("div", Wi, [
                    e("span", Gi, a(y.package_id), 1),
                    b(Zt, {
                      confidence: y.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  y.description ? (s(), o("div", ji, a(p(y.description)), 1)) : d("", !0),
                  e("div", Hi, [
                    y.is_installed ? (s(), o("span", qi, "Already Installed")) : d("", !0)
                  ])
                ])
              ], 8, Ai))), 128))
            ])
          ], 64)) : (s(), o("div", Ki, [...m[15] || (m[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", Ji, [
            b(ve, {
              variant: "secondary",
              size: "sm",
              onClick: m[4] || (m[4] = (y) => l("search"))
            }, {
              default: i(() => {
                var y;
                return [
                  h(a((y = t.searchResults) != null && y.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            b(ve, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (y) => l("manual-entry"))
            }, {
              default: i(() => [...m[16] || (m[16] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(ve, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (y) => l("mark-optional"))
            }, {
              default: i(() => [...m[17] || (m[17] = [
                h(" Mark Optional ", -1)
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
    return (l, p) => (s(), o("div", Qi, [
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
          n[1] || (n[1] = ht((l) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = ht((l) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, ir),
      t.error ? (s(), o("span", rr, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), lt = /* @__PURE__ */ te(dr, [["__scopeId", "data-v-9ba02cdc"]]), cr = { class: "node-resolution-step" }, ur = {
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
}, Ur = { class: "node-manual-entry-modal" }, Or = { class: "node-modal-body" }, Br = { class: "node-modal-actions" }, Ar = /* @__PURE__ */ ee({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: c }) {
    const n = t, l = c, { searchNodes: p } = Us(), g = $(0), u = $(!1), v = $(!1), r = $(""), m = $(""), y = $([]), w = $(!1), k = $(/* @__PURE__ */ new Map()), _ = $(/* @__PURE__ */ new Set()), M = $(!1);
    function F() {
      M.value && P(), M.value = !1;
    }
    const f = U(() => n.nodes[g.value]), C = U(() => n.nodes.filter((de) => n.nodeChoices.has(de.node_type)).length), N = U(() => f.value ? k.value.get(f.value.node_type) || [] : []), z = U(() => f.value ? _.value.has(f.value.node_type) : !1);
    _t(f, async (de) => {
      var fe;
      de && ((fe = de.options) != null && fe.length || k.value.has(de.node_type) || _.value.has(de.node_type) || n.nodeChoices.has(de.node_type) || await x(de.node_type));
    }, { immediate: !0 });
    async function x(de) {
      _.value.add(de);
      try {
        const fe = await p(de, 5);
        k.value.set(de, fe);
      } catch {
        k.value.set(de, []);
      } finally {
        _.value.delete(de);
      }
    }
    const J = U(() => n.autoResolvedPackages.filter((de) => !n.skippedPackages.has(de.package_id)).length);
    function A(de) {
      return n.skippedPackages.has(de);
    }
    function W(de) {
      l("package-skip", de);
    }
    const T = U(() => {
      var fe;
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
      return (fe = f.value.options) != null && fe.length ? "ambiguous" : "not-found";
    }), R = U(() => {
      var fe;
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
      return (fe = f.value.options) != null && fe.length ? `${f.value.options.length} matches` : "Not Found";
    });
    function O(de) {
      de >= 0 && de < n.nodes.length && (g.value = de);
    }
    function le() {
      f.value && l("mark-optional", f.value.node_type);
    }
    function se() {
      f.value && l("skip", f.value.node_type);
    }
    function X(de) {
      f.value && l("option-selected", f.value.node_type, de);
    }
    function ce() {
      f.value && l("clear-choice", f.value.node_type);
    }
    function Y() {
      f.value && (r.value = f.value.node_type, y.value = N.value, u.value = !0, ke(r.value));
    }
    function D() {
      m.value = "", v.value = !0;
    }
    function P() {
      u.value = !1, r.value = "", y.value = [];
    }
    function S() {
      v.value = !1, m.value = "";
    }
    let re = null;
    function Z() {
      re && clearTimeout(re), re = setTimeout(() => {
        ke(r.value);
      }, 300);
    }
    async function ke(de) {
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
    function be(de) {
      f.value && (l("manual-entry", f.value.node_type, de.package_id), P());
    }
    function Te(de) {
      f.value && l("manual-entry", f.value.node_type, de.package_id);
    }
    function Re() {
      !f.value || !m.value.trim() || (l("manual-entry", f.value.node_type, m.value.trim()), S());
    }
    return (de, fe) => {
      var Me, ie;
      return s(), o("div", cr, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", ur, [
          e("div", mr, [
            fe[6] || (fe[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", vr, a(J.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", fr, [
            (s(!0), o(V, null, oe(t.autoResolvedPackages, (K) => (s(), o("div", {
              key: K.package_id,
              class: "resolved-package-item"
            }, [
              e("div", gr, [
                e("code", pr, a(K.package_id), 1),
                e("span", hr, a(K.node_types_count) + " node type" + a(K.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", yr, [
                A(K.package_id) ? (s(), o("span", kr, " SKIPPED ")) : (s(), o("span", wr, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (Ie) => W(K.package_id)
                }, a(A(K.package_id) ? "Include" : "Skip"), 9, br)
              ])
            ]))), 128))
          ])
        ])) : d("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", _r)) : d("", !0),
        t.nodes.length > 0 ? (s(), o(V, { key: 2 }, [
          e("div", $r, [
            fe[7] || (fe[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", Cr, a(C.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          f.value ? (s(), E(Os, {
            key: 0,
            "item-name": f.value.node_type,
            "current-index": g.value,
            "total-items": t.nodes.length,
            onPrev: fe[0] || (fe[0] = (K) => O(g.value - 1)),
            onNext: fe[1] || (fe[1] = (K) => O(g.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
          f.value ? (s(), o("div", xr, [
            b(Xi, {
              "node-type": f.value.node_type,
              "has-multiple-options": !!((Me = f.value.options) != null && Me.length),
              options: f.value.options,
              choice: (ie = t.nodeChoices) == null ? void 0 : ie.get(f.value.node_type),
              status: T.value,
              "status-label": R.value,
              "search-results": N.value,
              "is-searching": z.value,
              onMarkOptional: le,
              onSkip: se,
              onManualEntry: D,
              onSearch: Y,
              onOptionSelected: X,
              onClearChoice: ce,
              onSearchResultSelected: Te
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : d("", !0)
        ], 64)) : d("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", Sr, [...fe[8] || (fe[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : d("", !0),
        (s(), E(Ve, { to: "body" }, [
          u.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: fe[4] || (fe[4] = ze((K) => M.value = !0, ["self"])),
            onMouseup: ze(F, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: fe[3] || (fe[3] = (K) => M.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                fe[9] || (fe[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: P
                }, "✕")
              ]),
              e("div", Ir, [
                b(lt, {
                  modelValue: r.value,
                  "onUpdate:modelValue": fe[2] || (fe[2] = (K) => r.value = K),
                  placeholder: "Search by node type, package name...",
                  onInput: Z
                }, null, 8, ["modelValue"]),
                e("div", Er, [
                  y.value.length > 0 ? (s(), o("div", Mr, [
                    (s(!0), o(V, null, oe(y.value, (K) => (s(), o("div", {
                      key: K.package_id,
                      class: "node-search-result-item",
                      onClick: (Ie) => be(K)
                    }, [
                      e("div", Rr, [
                        e("code", zr, a(K.package_id), 1),
                        K.match_confidence ? (s(), E(Zt, {
                          key: 0,
                          confidence: K.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : d("", !0)
                      ]),
                      K.description ? (s(), o("div", Lr, a(K.description), 1)) : d("", !0)
                    ], 8, Tr))), 128))
                  ])) : w.value ? (s(), o("div", Pr, "Searching...")) : r.value ? (s(), o("div", Dr, 'No packages found matching "' + a(r.value) + '"', 1)) : (s(), o("div", Nr, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : d("", !0)
        ])),
        (s(), E(Ve, { to: "body" }, [
          v.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ze(S, ["self"])
          }, [
            e("div", Ur, [
              e("div", { class: "node-modal-header" }, [
                fe[10] || (fe[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: S
                }, "✕")
              ]),
              e("div", Or, [
                b(lt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": fe[5] || (fe[5] = (K) => m.value = K),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Br, [
                  b(ve, {
                    variant: "secondary",
                    onClick: S
                  }, {
                    default: i(() => [...fe[11] || (fe[11] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(ve, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: Re
                  }, {
                    default: i(() => [...fe[12] || (fe[12] = [
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
}), Fr = /* @__PURE__ */ te(Ar, [["__scopeId", "data-v-281581bc"]]), Vr = { class: "node-info" }, Wr = { class: "node-info-text" }, Gr = { class: "item-body" }, jr = {
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
    const n = t, l = c, p = U(() => !!n.choice);
    U(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.action;
    }), U(() => {
      var r, m;
      return ((m = (r = n.choice) == null ? void 0 : r.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const g = U(() => {
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
          b(ve, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (y) => l("clear-choice"))
          }, {
            default: i(() => [...m[8] || (m[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Hr, [
          m[12] || (m[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", qr, [
            (s(!0), o(V, null, oe(t.options, (y, w) => (s(), o("label", {
              key: y.model.hash,
              class: me(["option-card", { selected: t.selectedOptionIndex === w }]),
              onClick: (k) => u(w)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: w,
                checked: t.selectedOptionIndex === w,
                onChange: (k) => u(w)
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
            b(ve, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (y) => l("search"))
            }, {
              default: i(() => [...m[9] || (m[9] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(ve, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (y) => l("download-url"))
            }, {
              default: i(() => [...m[10] || (m[10] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(ve, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (y) => l("mark-optional"))
            }, {
              default: i(() => [...m[11] || (m[11] = [
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
            b(ve, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (y) => l("search"))
            }, {
              default: i(() => [...m[13] || (m[13] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(ve, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (y) => l("download-url"))
            }, {
              default: i(() => [...m[14] || (m[14] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(ve, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (y) => l("mark-optional"))
            }, {
              default: i(() => [...m[15] || (m[15] = [
                h(" Mark Optional ", -1)
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
}, Ed = { class: "model-download-url-modal" }, Md = { class: "model-modal-body" }, Td = { class: "model-input-group" }, Rd = { class: "model-input-group" }, zd = { class: "model-modal-actions" }, Ld = /* @__PURE__ */ ee({
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
      var S;
      return P && ((S = n[P]) == null ? void 0 : S[0]) || null;
    }
    const p = t, g = c, u = $(0), v = $(!1), r = $(!1), m = $(""), y = $(""), w = $(""), k = $([]), _ = $(!1), M = U(() => p.models[u.value]), F = U(() => p.models.some((P) => P.is_download_intent)), f = U(() => p.models.filter(
      (P) => p.modelChoices.has(P.filename) || P.is_download_intent
    ).length), C = U(() => {
      var S;
      if (!M.value) return "";
      const P = l((S = M.value.reference) == null ? void 0 : S.node_type);
      return P ? `${P}/${M.value.filename}` : "";
    }), N = U(() => {
      var S;
      if (!M.value) return "not-found";
      const P = p.modelChoices.get(M.value.filename);
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
      return M.value.is_download_intent ? "download" : (S = M.value.options) != null && S.length ? "ambiguous" : "not-found";
    }), z = U(() => {
      var S, re;
      if (!M.value) return;
      const P = p.modelChoices.get(M.value.filename);
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
      return M.value.is_download_intent ? "Pending Download" : (re = M.value.options) != null && re.length ? `${M.value.options.length} matches` : "Not Found";
    });
    function x(P) {
      P >= 0 && P < p.models.length && (u.value = P);
    }
    function J() {
      M.value && g("mark-optional", M.value.filename);
    }
    function A() {
      M.value && g("skip", M.value.filename);
    }
    function W(P) {
      M.value && g("option-selected", M.value.filename, P);
    }
    function T() {
      M.value && g("clear-choice", M.value.filename);
    }
    function R() {
      M.value && (m.value = M.value.filename, v.value = !0);
    }
    function O() {
      M.value && (y.value = M.value.download_source || "", w.value = M.value.target_path || C.value, r.value = !0);
    }
    function le() {
      v.value = !1, m.value = "", k.value = [];
    }
    function se() {
      r.value = !1, y.value = "", w.value = "";
    }
    function X() {
      _.value = !0, setTimeout(() => {
        _.value = !1;
      }, 300);
    }
    function ce(P) {
      M.value && le();
    }
    function Y() {
      !M.value || !y.value.trim() || (g("download-url", M.value.filename, y.value.trim(), w.value.trim() || void 0), se());
    }
    function D(P) {
      if (!P) return "Unknown";
      const S = P / (1024 * 1024 * 1024);
      return S >= 1 ? `${S.toFixed(2)} GB` : `${(P / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (P, S) => {
      var re, Z, ke;
      return s(), o("div", rd, [
        e("div", dd, [
          e("div", cd, [
            e("h3", ud, a(F.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", md, a(F.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", vd, a(f.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        M.value ? (s(), E(Os, {
          key: 0,
          "item-name": M.value.filename,
          "current-index": u.value,
          "total-items": t.models.length,
          onPrev: S[0] || (S[0] = (be) => x(u.value - 1)),
          onNext: S[1] || (S[1] = (be) => x(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
        M.value ? (s(), o("div", fd, [
          b(id, {
            filename: M.value.filename,
            "node-type": ((re = M.value.reference) == null ? void 0 : re.node_type) || "Unknown",
            "has-multiple-options": !!((Z = M.value.options) != null && Z.length),
            options: M.value.options,
            choice: (ke = t.modelChoices) == null ? void 0 : ke.get(M.value.filename),
            status: N.value,
            "status-label": z.value,
            onMarkOptional: J,
            onSkip: A,
            onDownloadUrl: O,
            onSearch: R,
            onOptionSelected: W,
            onClearChoice: T
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", gd, [...S[5] || (S[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), E(Ve, { to: "body" }, [
          v.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ze(le, ["self"])
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
                b(lt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": S[2] || (S[2] = (be) => m.value = be),
                  placeholder: "Search by filename, category...",
                  onInput: X
                }, null, 8, ["modelValue"]),
                k.value.length > 0 ? (s(), o("div", yd, [
                  (s(!0), o(V, null, oe(k.value, (be) => (s(), o("div", {
                    key: be.hash,
                    class: "model-search-result-item",
                    onClick: (Te) => ce()
                  }, [
                    e("div", kd, [
                      e("code", bd, a(be.filename), 1)
                    ]),
                    e("div", _d, [
                      e("span", $d, a(be.category), 1),
                      e("span", Cd, a(D(be.size)), 1)
                    ]),
                    be.relative_path ? (s(), o("div", xd, a(be.relative_path), 1)) : d("", !0)
                  ], 8, wd))), 128))
                ])) : m.value && !_.value ? (s(), o("div", Sd, ' No models found matching "' + a(m.value) + '" ', 1)) : d("", !0),
                _.value ? (s(), o("div", Id, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (s(), E(Ve, { to: "body" }, [
          r.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ze(se, ["self"])
          }, [
            e("div", Ed, [
              e("div", { class: "model-modal-header" }, [
                S[7] || (S[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: se
                }, "✕")
              ]),
              e("div", Md, [
                e("div", Td, [
                  S[8] || (S[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  b(lt, {
                    modelValue: y.value,
                    "onUpdate:modelValue": S[3] || (S[3] = (be) => y.value = be),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Rd, [
                  S[9] || (S[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  b(lt, {
                    modelValue: w.value,
                    "onUpdate:modelValue": S[4] || (S[4] = (be) => w.value = be),
                    placeholder: C.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", zd, [
                  b(ve, {
                    variant: "secondary",
                    onClick: se
                  }, {
                    default: i(() => [...S[10] || (S[10] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(ve, {
                    variant: "primary",
                    disabled: !y.value.trim() || !w.value.trim(),
                    onClick: Y
                  }, {
                    default: i(() => [...S[11] || (S[11] = [
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
}), Pd = /* @__PURE__ */ te(Ld, [["__scopeId", "data-v-c6acbada"]]), Dd = { class: "applying-step" }, Nd = {
  key: 0,
  class: "phase-content"
}, Ud = {
  key: 1,
  class: "phase-content"
}, Od = { class: "phase-description" }, Bd = { class: "overall-progress" }, Ad = { class: "progress-bar" }, Fd = { class: "progress-label" }, Vd = { class: "install-list" }, Wd = { class: "install-icon" }, Gd = { key: 0 }, jd = {
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
    const c = t, n = U(() => {
      var m, y;
      const v = ((m = c.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || c.progress.nodesToInstall.length;
      if (!v) return 0;
      const r = ((y = c.progress.nodeInstallProgress) == null ? void 0 : y.completedNodes.length) ?? 0;
      return Math.round(r / v * 100);
    }), l = U(() => {
      var v;
      return ((v = c.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.filter((r) => !r.success)) || [];
    }), p = U(() => l.value.length > 0);
    function g(v, r) {
      var y, w;
      const m = (y = c.progress.nodeInstallProgress) == null ? void 0 : y.completedNodes.find((k) => k.node_id === v);
      return m ? m.success ? "complete" : "failed" : ((w = c.progress.nodeInstallProgress) == null ? void 0 : w.currentIndex) === r ? "installing" : "pending";
    }
    function u(v) {
      var r, m;
      return (m = (r = c.progress.nodeInstallProgress) == null ? void 0 : r.completedNodes.find((y) => y.node_id === v)) == null ? void 0 : m.error;
    }
    return (v, r) => {
      var m, y, w, k;
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
            e("div", Ad, [
              e("div", {
                class: "progress-fill",
                style: yt({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Fd, a(((w = t.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.length) ?? 0) + " / " + a(((k = t.progress.nodeInstallProgress) == null ? void 0 : k.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Vd, [
            (s(!0), o(V, null, oe(t.progress.nodesToInstall, (_, M) => (s(), o("div", {
              key: _,
              class: me(["install-item", g(_, M)])
            }, [
              e("span", Wd, [
                g(_, M) === "pending" ? (s(), o("span", Gd, "○")) : g(_, M) === "installing" ? (s(), o("span", jd, "◌")) : g(_, M) === "complete" ? (s(), o("span", Hd, "✓")) : g(_, M) === "failed" ? (s(), o("span", qd, "✗")) : d("", !0)
              ]),
              e("code", null, a(_), 1),
              u(_) ? (s(), o("span", Kd, a(u(_)), 1)) : d("", !0)
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
            l.value.length > 0 ? (s(), o("div", tc, [
              r[5] || (r[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", sc, a(l.value.length) + " package" + a(l.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : d("", !0),
            l.value.length > 0 ? (s(), o("div", oc, [
              (s(!0), o(V, null, oe(l.value, (_) => (s(), o("div", {
                key: _.node_id,
                class: "failed-item"
              }, [
                e("code", nc, a(_.node_id), 1),
                e("span", ac, a(_.error), 1)
              ]))), 128))
            ])) : d("", !0),
            l.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: r[0] || (r[0] = (_) => v.$emit("retry-failed"))
            }, " Retry Failed (" + a(l.value.length) + ") ", 1)) : d("", !0),
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
                onClick: r[1] || (r[1] = (_) => v.$emit("restart"))
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
}, Ac = { class: "stat-count" }, Fc = {
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
}, Au = /* @__PURE__ */ ee({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, l = c, { analyzeWorkflow: p, applyResolution: g, installNodes: u, queueModelDownloads: v, progress: r, resetProgress: m } = Us(), { loadPendingDownloads: y } = Gt(), { openFileLocation: w } = Ae(), k = $(null), _ = $(!1), M = $(!1), F = $(null), f = $("analysis"), C = $([]), N = $(/* @__PURE__ */ new Map()), z = $(/* @__PURE__ */ new Map()), x = $(/* @__PURE__ */ new Set()), J = U(() => {
      const H = [
        { id: "analysis", label: "Analysis" }
      ];
      return (W.value || O.value) && H.push({ id: "nodes", label: "Nodes" }), (T.value || R.value) && H.push({ id: "models", label: "Models" }), H.push({ id: "review", label: "Review" }), f.value === "applying" && H.push({ id: "applying", label: "Applying" }), H;
    }), A = U(() => k.value ? k.value.stats.needs_user_input : !1), W = U(() => k.value ? k.value.nodes.unresolved.length > 0 || k.value.nodes.ambiguous.length > 0 : !1), T = U(() => k.value ? k.value.models.unresolved.length > 0 || k.value.models.ambiguous.length > 0 : !1), R = U(() => k.value ? k.value.stats.download_intents > 0 : !1), O = U(() => k.value ? k.value.stats.nodes_needing_installation > 0 : !1), le = U(() => k.value ? k.value.nodes.resolved.length : 0), se = U(() => k.value ? k.value.models.resolved.filter((H) => H.has_category_mismatch) : []), X = U(() => se.value.length > 0), ce = U(() => {
      if (!k.value) return [];
      const H = k.value.nodes.resolved.filter((B) => !B.is_installed), I = /* @__PURE__ */ new Set();
      return H.filter((B) => I.has(B.package.package_id) ? !1 : (I.add(B.package.package_id), !0));
    }), Y = U(() => {
      if (!k.value) return [];
      const H = k.value.nodes.resolved.filter((B) => !B.is_installed), I = /* @__PURE__ */ new Map();
      for (const B of H) {
        const Q = I.get(B.package.package_id);
        Q ? Q.node_types_count++ : I.set(B.package.package_id, {
          package_id: B.package.package_id,
          title: B.package.title,
          node_types_count: 1
        });
      }
      return Array.from(I.values());
    }), D = U(() => ce.value.filter((H) => !x.value.has(H.package.package_id))), P = U(() => k.value ? k.value.models.resolved.filter((H) => H.match_type === "download_intent").map((H) => ({
      filename: H.reference.widget_value,
      reference: H.reference,
      is_download_intent: !0,
      resolved_model: H.model,
      download_source: H.download_source,
      target_path: H.target_path
    })) : []), S = U(() => {
      if (!k.value) return [];
      const H = k.value.nodes.unresolved.map((B) => ({
        node_type: B.reference.node_type,
        reason: B.reason,
        is_unresolved: !0,
        options: void 0
      })), I = k.value.nodes.ambiguous.map((B) => ({
        node_type: B.reference.node_type,
        has_multiple_options: !0,
        options: B.options.map((Q) => ({
          package_id: Q.package.package_id,
          title: Q.package.title,
          match_confidence: Q.match_confidence,
          match_type: Q.match_type,
          is_installed: Q.is_installed
        }))
      }));
      return [...H, ...I];
    }), re = U(() => {
      if (!k.value) return [];
      const H = k.value.models.unresolved.map((B) => ({
        filename: B.reference.widget_value,
        reference: B.reference,
        reason: B.reason,
        is_unresolved: !0,
        options: void 0
      })), I = k.value.models.ambiguous.map((B) => ({
        filename: B.reference.widget_value,
        reference: B.reference,
        has_multiple_options: !0,
        options: B.options.map((Q) => ({
          model: Q.model,
          match_confidence: Q.match_confidence,
          match_type: Q.match_type,
          has_download_source: Q.has_download_source
        }))
      }));
      return [...H, ...I];
    }), Z = U(() => {
      const H = re.value, I = P.value.map((B) => ({
        filename: B.filename,
        reference: B.reference,
        is_download_intent: !0,
        resolved_model: B.resolved_model,
        download_source: B.download_source,
        target_path: B.target_path,
        options: void 0
      }));
      return [...H, ...I];
    }), ke = U(() => {
      let H = D.value.length;
      for (const I of N.value.values())
        I.action === "install" && H++;
      for (const I of z.value.values())
        I.action === "select" && H++;
      return H;
    }), be = U(() => {
      let H = 0;
      for (const I of z.value.values())
        I.action === "download" && H++;
      return H;
    }), Te = U(() => {
      let H = 0;
      for (const I of N.value.values())
        I.action === "optional" && H++;
      for (const I of z.value.values())
        I.action === "optional" && H++;
      return H;
    }), Re = U(() => {
      let H = x.value.size;
      for (const I of N.value.values())
        I.action === "skip" && H++;
      for (const I of z.value.values())
        I.action === "skip" && H++;
      for (const I of S.value)
        N.value.has(I.node_type) || H++;
      for (const I of re.value)
        z.value.has(I.filename) || H++;
      return H;
    }), de = U(() => {
      const H = {};
      if (H.analysis = { resolved: 1, total: 1 }, W.value) {
        const I = S.value.length, B = S.value.filter(
          (Q) => N.value.has(Q.node_type)
        ).length;
        H.nodes = { resolved: B, total: I };
      }
      if (T.value || R.value) {
        const I = Z.value.length, B = Z.value.filter(
          (Q) => z.value.has(Q.filename) || Q.is_download_intent
        ).length;
        H.models = { resolved: B, total: I };
      }
      if (H.review = { resolved: 1, total: 1 }, f.value === "applying") {
        const I = r.totalFiles || 1, B = r.completedFiles.length;
        H.applying = { resolved: B, total: I };
      }
      return H;
    });
    function fe(H) {
      f.value = H;
    }
    function Me() {
      const H = J.value.findIndex((I) => I.id === f.value);
      H > 0 && (f.value = J.value[H - 1].id);
    }
    function ie() {
      const H = J.value.findIndex((I) => I.id === f.value);
      H < J.value.length - 1 && (f.value = J.value[H + 1].id);
    }
    async function K() {
      _.value = !0, F.value = null;
      try {
        k.value = await p(n.workflowName);
      } catch (H) {
        F.value = H instanceof Error ? H.message : "Failed to analyze workflow";
      } finally {
        _.value = !1;
      }
    }
    function Ie() {
      C.value.includes("analysis") || C.value.push("analysis"), W.value || O.value ? f.value = "nodes" : T.value || R.value ? f.value = "models" : f.value = "review";
    }
    function _e(H) {
      N.value.set(H, { action: "optional" });
    }
    function st(H) {
      N.value.set(H, { action: "skip" });
    }
    function rt(H, I) {
      var Q;
      const B = S.value.find((we) => we.node_type === H);
      (Q = B == null ? void 0 : B.options) != null && Q[I] && N.value.set(H, {
        action: "install",
        package_id: B.options[I].package_id
      });
    }
    function vt(H, I) {
      N.value.set(H, {
        action: "install",
        package_id: I
      });
    }
    function Se(H) {
      N.value.delete(H);
    }
    function Ze(H) {
      x.value.has(H) ? x.value.delete(H) : x.value.add(H);
    }
    function Ge(H) {
      z.value.set(H, { action: "optional" });
    }
    function je(H) {
      z.value.set(H, { action: "skip" });
    }
    function ft(H, I) {
      var Q;
      const B = re.value.find((we) => we.filename === H);
      (Q = B == null ? void 0 : B.options) != null && Q[I] && z.value.set(H, {
        action: "select",
        selected_model: B.options[I].model
      });
    }
    function ye(H, I, B) {
      z.value.set(H, {
        action: "download",
        url: I,
        target_path: B
      });
    }
    function Fe(H) {
      z.value.delete(H);
    }
    async function dt(H) {
      try {
        await w(H);
      } catch (I) {
        F.value = I instanceof Error ? I.message : "Failed to open file location";
      }
    }
    async function Xe() {
      var H;
      M.value = !0, F.value = null, m(), r.phase = "resolving", f.value = "applying";
      try {
        const I = await g(n.workflowName, N.value, z.value, x.value);
        I.models_to_download && I.models_to_download.length > 0 && v(n.workflowName, I.models_to_download);
        const B = [
          ...I.nodes_to_install || [],
          ...D.value.map((we) => we.package.package_id)
        ];
        r.nodesToInstall = [...new Set(B)], r.nodesToInstall.length > 0 && await u(n.workflowName), r.phase = "complete", await y();
        const Q = r.installError || ((H = r.nodeInstallProgress) == null ? void 0 : H.completedNodes.some((we) => !we.success));
        !r.needsRestart && !Q && setTimeout(() => {
          l("refresh"), l("install"), l("close");
        }, 1500);
      } catch (I) {
        F.value = I instanceof Error ? I.message : "Failed to apply resolution", r.error = F.value, r.phase = "error";
      } finally {
        M.value = !1;
      }
    }
    function ae() {
      l("refresh"), l("restart"), l("close");
    }
    async function G() {
      var I;
      const H = ((I = r.nodeInstallProgress) == null ? void 0 : I.completedNodes.filter((B) => !B.success).map((B) => B.node_id)) || [];
      if (H.length !== 0) {
        r.phase = "installing", r.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: H.length
        }, r.nodesToInstall = H, r.nodesInstalled = [], r.installError = void 0;
        try {
          await u(n.workflowName), r.phase = "complete";
        } catch (B) {
          r.error = B instanceof Error ? B.message : "Retry failed", r.phase = "error";
        }
      }
    }
    return Ue(K), (H, I) => (s(), E(Ye, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: _.value,
      error: F.value || void 0,
      "fixed-height": !0,
      onClose: I[1] || (I[1] = (B) => l("close"))
    }, {
      body: i(() => [
        _.value && !k.value ? (s(), o("div", mc, [...I[2] || (I[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : k.value ? (s(), o("div", vc, [
          b(ki, {
            steps: J.value,
            "current-step": f.value,
            "completed-steps": C.value,
            "step-stats": de.value,
            onStepChange: fe
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          f.value === "analysis" ? (s(), o("div", fc, [
            e("div", gc, [
              e("div", pc, [
                I[3] || (I[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", hc, " Found " + a(k.value.stats.total_nodes) + " nodes and " + a(k.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", yc, [
                e("div", wc, [
                  I[12] || (I[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", kc, [
                    le.value > 0 ? (s(), o("div", bc, [
                      I[4] || (I[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", _c, a(le.value), 1),
                      I[5] || (I[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : d("", !0),
                    k.value.stats.packages_needing_installation > 0 ? (s(), o("div", $c, [
                      I[6] || (I[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Cc, a(k.value.stats.packages_needing_installation), 1),
                      I[7] || (I[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : d("", !0),
                    k.value.nodes.ambiguous.length > 0 ? (s(), o("div", xc, [
                      I[8] || (I[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Sc, a(k.value.nodes.ambiguous.length), 1),
                      I[9] || (I[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    k.value.nodes.unresolved.length > 0 ? (s(), o("div", Ic, [
                      I[10] || (I[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Ec, a(k.value.nodes.unresolved.length), 1),
                      I[11] || (I[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ]),
                e("div", Mc, [
                  I[23] || (I[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Tc, [
                    e("div", Rc, [
                      I[13] || (I[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", zc, a(k.value.models.resolved.length - k.value.stats.download_intents - k.value.stats.models_with_category_mismatch), 1),
                      I[14] || (I[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    k.value.stats.download_intents > 0 ? (s(), o("div", Lc, [
                      I[15] || (I[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Pc, a(k.value.stats.download_intents), 1),
                      I[16] || (I[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : d("", !0),
                    X.value ? (s(), o("div", Dc, [
                      I[17] || (I[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", Nc, a(se.value.length), 1),
                      I[18] || (I[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : d("", !0),
                    k.value.models.ambiguous.length > 0 ? (s(), o("div", Uc, [
                      I[19] || (I[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Oc, a(k.value.models.ambiguous.length), 1),
                      I[20] || (I[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    k.value.models.unresolved.length > 0 ? (s(), o("div", Bc, [
                      I[21] || (I[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Ac, a(k.value.models.unresolved.length), 1),
                      I[22] || (I[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ])
              ]),
              A.value ? (s(), o("div", Fc, [
                I[24] || (I[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Vc, a(S.value.length + re.value.length) + " items need your input", 1)
              ])) : O.value ? (s(), o("div", Wc, [
                I[25] || (I[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Gc, a(k.value.stats.packages_needing_installation) + " package" + a(k.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(k.value.stats.nodes_needing_installation) + " node type" + a(k.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(R.value ? `, ${k.value.stats.download_intents} model${k.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : R.value ? (s(), o("div", jc, [
                I[26] || (I[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Hc, a(k.value.stats.download_intents) + " model" + a(k.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : X.value ? (s(), o("div", qc, [
                I[27] || (I[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Kc, a(se.value.length) + " model" + a(se.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", Jc, [...I[28] || (I[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              X.value ? (s(), o("div", Yc, [
                I[31] || (I[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", Xc, [
                  (s(!0), o(V, null, oe(se.value, (B) => {
                    var Q, we;
                    return s(), o("div", {
                      key: B.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", Qc, a(B.actual_category) + "/" + a((Q = B.model) == null ? void 0 : Q.filename), 1),
                      I[30] || (I[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", Zc, a((we = B.expected_categories) == null ? void 0 : we[0]) + "/", 1),
                      B.file_path ? (s(), E(ve, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Pe) => dt(B.file_path)
                      }, {
                        default: i(() => [...I[29] || (I[29] = [
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
          f.value === "nodes" ? (s(), E(Fr, {
            key: 1,
            nodes: S.value,
            "node-choices": N.value,
            "auto-resolved-packages": Y.value,
            "skipped-packages": x.value,
            onMarkOptional: _e,
            onSkip: st,
            onOptionSelected: rt,
            onManualEntry: vt,
            onClearChoice: Se,
            onPackageSkip: Ze
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : d("", !0),
          f.value === "models" ? (s(), E(Pd, {
            key: 2,
            models: Z.value,
            "model-choices": z.value,
            onMarkOptional: Ge,
            onSkip: je,
            onOptionSelected: ft,
            onDownloadUrl: ye,
            onClearChoice: Fe
          }, null, 8, ["models", "model-choices"])) : d("", !0),
          f.value === "review" ? (s(), o("div", eu, [
            e("div", tu, [
              I[36] || (I[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", su, [
                e("div", ou, [
                  e("span", nu, a(ke.value), 1),
                  I[32] || (I[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", au, [
                  e("span", lu, a(be.value), 1),
                  I[33] || (I[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", iu, [
                  e("span", ru, a(Te.value), 1),
                  I[34] || (I[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", du, [
                  e("span", cu, a(Re.value), 1),
                  I[35] || (I[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              Y.value.length > 0 ? (s(), o("div", uu, [
                e("h4", mu, "Node Packages (" + a(Y.value.length) + ")", 1),
                e("div", vu, [
                  (s(!0), o(V, null, oe(Y.value, (B) => (s(), o("div", {
                    key: B.package_id,
                    class: "review-item"
                  }, [
                    e("code", fu, a(B.package_id), 1),
                    e("div", gu, [
                      x.value.has(B.package_id) ? (s(), o("span", hu, "Skipped")) : (s(), o("span", pu, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : d("", !0),
              S.value.length > 0 ? (s(), o("div", yu, [
                e("h4", wu, "Node Choices (" + a(S.value.length) + ")", 1),
                e("div", ku, [
                  (s(!0), o(V, null, oe(S.value, (B) => {
                    var Q, we, Pe, gt;
                    return s(), o("div", {
                      key: B.node_type,
                      class: "review-item"
                    }, [
                      e("code", bu, a(B.node_type), 1),
                      e("div", _u, [
                        N.value.has(B.node_type) ? (s(), o(V, { key: 0 }, [
                          ((Q = N.value.get(B.node_type)) == null ? void 0 : Q.action) === "install" ? (s(), o("span", $u, a((we = N.value.get(B.node_type)) == null ? void 0 : we.package_id), 1)) : ((Pe = N.value.get(B.node_type)) == null ? void 0 : Pe.action) === "optional" ? (s(), o("span", Cu, " Optional ")) : ((gt = N.value.get(B.node_type)) == null ? void 0 : gt.action) === "skip" ? (s(), o("span", xu, " Skip ")) : d("", !0)
                        ], 64)) : (s(), o("span", Su, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              Z.value.length > 0 ? (s(), o("div", Iu, [
                e("h4", Eu, "Models (" + a(Z.value.length) + ")", 1),
                e("div", Mu, [
                  (s(!0), o(V, null, oe(Z.value, (B) => {
                    var Q, we, Pe, gt, Ct, ot, xt;
                    return s(), o("div", {
                      key: B.filename,
                      class: "review-item"
                    }, [
                      e("code", Tu, a(B.filename), 1),
                      e("div", Ru, [
                        z.value.has(B.filename) ? (s(), o(V, { key: 0 }, [
                          ((Q = z.value.get(B.filename)) == null ? void 0 : Q.action) === "select" ? (s(), o("span", zu, a((Pe = (we = z.value.get(B.filename)) == null ? void 0 : we.selected_model) == null ? void 0 : Pe.filename), 1)) : ((gt = z.value.get(B.filename)) == null ? void 0 : gt.action) === "download" ? (s(), o("span", Lu, " Download ")) : ((Ct = z.value.get(B.filename)) == null ? void 0 : Ct.action) === "optional" ? (s(), o("span", Pu, " Optional ")) : ((ot = z.value.get(B.filename)) == null ? void 0 : ot.action) === "skip" ? (s(), o("span", Du, " Skip ")) : ((xt = z.value.get(B.filename)) == null ? void 0 : xt.action) === "cancel_download" ? (s(), o("span", Nu, " Cancel Download ")) : d("", !0)
                        ], 64)) : B.is_download_intent ? (s(), o("span", Uu, " Pending Download ")) : (s(), o("span", Ou, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              ce.value.length === 0 && S.value.length === 0 && Z.value.length === 0 ? (s(), o("div", Bu, " No dependencies need resolution. ")) : d("", !0)
            ])
          ])) : d("", !0),
          f.value === "applying" ? (s(), E(uc, {
            key: 4,
            progress: $e(r),
            onRestart: ae,
            onRetryFailed: G
          }, null, 8, ["progress"])) : d("", !0)
        ])) : d("", !0)
      ]),
      footer: i(() => [
        f.value !== "analysis" && f.value !== "applying" ? (s(), E(ve, {
          key: 0,
          variant: "secondary",
          disabled: M.value,
          onClick: Me
        }, {
          default: i(() => [...I[37] || (I[37] = [
            h(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        I[41] || (I[41] = e("div", { class: "footer-spacer" }, null, -1)),
        f.value !== "applying" || $e(r).phase === "complete" || $e(r).phase === "error" ? (s(), E(ve, {
          key: 1,
          variant: "secondary",
          onClick: I[0] || (I[0] = (B) => l("close"))
        }, {
          default: i(() => [
            h(a($e(r).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : d("", !0),
        f.value === "analysis" ? (s(), E(ve, {
          key: 2,
          variant: "primary",
          disabled: _.value,
          onClick: Ie
        }, {
          default: i(() => [...I[38] || (I[38] = [
            h(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        f.value === "nodes" ? (s(), E(ve, {
          key: 3,
          variant: "primary",
          onClick: ie
        }, {
          default: i(() => [
            h(a(T.value || R.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : d("", !0),
        f.value === "models" ? (s(), E(ve, {
          key: 4,
          variant: "primary",
          onClick: ie
        }, {
          default: i(() => [...I[39] || (I[39] = [
            h(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : d("", !0),
        f.value === "review" ? (s(), E(ve, {
          key: 5,
          variant: "primary",
          disabled: M.value,
          loading: M.value,
          onClick: Xe
        }, {
          default: i(() => [...I[40] || (I[40] = [
            h(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Fu = /* @__PURE__ */ te(Au, [["__scopeId", "data-v-6276cf1d"]]), Vu = { class: "search-input-wrapper" }, Wu = ["value", "placeholder"], Gu = /* @__PURE__ */ ee({
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
    const n = t, l = c, p = $(null);
    let g;
    function u(r) {
      const m = r.target.value;
      n.debounce > 0 ? (clearTimeout(g), g = window.setTimeout(() => {
        l("update:modelValue", m);
      }, n.debounce)) : l("update:modelValue", m);
    }
    function v() {
      var r;
      l("update:modelValue", ""), l("clear"), (r = p.value) == null || r.focus();
    }
    return Ue(() => {
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
      b(ju, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (l) => c.$emit("update:modelValue", l)),
        onClear: n[1] || (n[1] = (l) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Lt = /* @__PURE__ */ te(qu, [["__scopeId", "data-v-3d51bbfd"]]), Ku = { class: "section-group" }, Ju = {
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
    const n = t, l = c, p = $(n.initiallyExpanded);
    function g() {
      n.collapsible && (p.value = !p.value, l("toggle", p.value));
    }
    return (u, v) => (s(), o("section", Ku, [
      b(tt, {
        count: t.count,
        clickable: t.collapsible,
        expanded: p.value,
        onClick: g
      }, {
        default: i(() => [
          h(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || p.value ? (s(), o("div", Ju, [
        Ce(u.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Be = /* @__PURE__ */ te(Yu, [["__scopeId", "data-v-c48e33ed"]]), Xu = { class: "item-header" }, Qu = {
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
    const n = t, l = U(() => n.status ? `status-${n.status}` : "");
    return (p, g) => (s(), o("div", {
      class: me(["item-card", { clickable: t.clickable, compact: t.compact }, l.value]),
      onClick: g[0] || (g[0] = (u) => t.clickable && p.$emit("click"))
    }, [
      e("div", Xu, [
        p.$slots.icon ? (s(), o("span", Qu, [
          Ce(p.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        e("div", Zu, [
          p.$slots.title ? (s(), o("div", em, [
            Ce(p.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          p.$slots.subtitle ? (s(), o("div", tm, [
            Ce(p.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      p.$slots.details ? (s(), o("div", sm, [
        Ce(p.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      p.$slots.actions ? (s(), o("div", om, [
        Ce(p.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), qe = /* @__PURE__ */ te(nm, [["__scopeId", "data-v-cc435e0e"]]), am = { class: "loading-state" }, lm = { class: "loading-message" }, im = /* @__PURE__ */ ee({
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
}), wt = /* @__PURE__ */ te(im, [["__scopeId", "data-v-ad8436c9"]]), rm = { class: "error-state" }, dm = { class: "error-message" }, cm = /* @__PURE__ */ ee({
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
      t.retry ? (s(), E(ne, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (l) => c.$emit("retry"))
      }, {
        default: i(() => [...n[1] || (n[1] = [
          h(" Retry ", -1)
        ])]),
        _: 1
      })) : d("", !0)
    ]));
  }
}), kt = /* @__PURE__ */ te(cm, [["__scopeId", "data-v-5397be48"]]), um = /* @__PURE__ */ ee({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const l = n, { getWorkflows: p } = Ae();
    Ds();
    const g = $([]), u = $(!1), v = $(null), r = $(""), m = $(!0), y = $(!1), w = $(!1), k = $(!1), _ = $(null), M = U(
      () => g.value.filter((D) => D.status === "broken")
    ), F = U(
      () => g.value.filter((D) => D.status === "new")
    ), f = U(
      () => g.value.filter((D) => D.status === "modified")
    ), C = U(
      () => g.value.filter((D) => D.status === "synced")
    ), N = U(() => {
      if (!r.value.trim()) return g.value;
      const D = r.value.toLowerCase();
      return g.value.filter((P) => P.name.toLowerCase().includes(D));
    }), z = U(
      () => M.value.filter(
        (D) => !r.value.trim() || D.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), x = U(
      () => F.value.filter(
        (D) => !r.value.trim() || D.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), J = U(
      () => f.value.filter(
        (D) => !r.value.trim() || D.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), A = U(
      () => C.value.filter(
        (D) => !r.value.trim() || D.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), W = U(
      () => y.value ? A.value : A.value.slice(0, 5)
    );
    async function T(D = !1) {
      u.value = !0, v.value = null;
      try {
        g.value = await p(D);
      } catch (P) {
        v.value = P instanceof Error ? P.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    c({ loadWorkflows: T });
    function R(D) {
      _.value = D, w.value = !0;
    }
    function O(D) {
      _.value = D, k.value = !0;
    }
    function le() {
      l("refresh");
    }
    async function se() {
      k.value = !1, await T(!0);
    }
    async function X() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ce(D) {
      const P = [];
      return D.missing_nodes > 0 && P.push(`${D.missing_nodes} missing node${D.missing_nodes > 1 ? "s" : ""}`), D.missing_models > 0 && P.push(`${D.missing_models} missing model${D.missing_models > 1 ? "s" : ""}`), D.models_with_category_mismatch && D.models_with_category_mismatch > 0 && P.push(`${D.models_with_category_mismatch} model${D.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), D.pending_downloads && D.pending_downloads > 0 && P.push(`${D.pending_downloads} pending download${D.pending_downloads > 1 ? "s" : ""}`), P.length > 0 ? P.join(", ") : "Has issues";
    }
    function Y(D) {
      const P = D.sync_state === "new" ? "New" : D.sync_state === "modified" ? "Modified" : D.sync_state === "synced" ? "Synced" : D.sync_state;
      return D.has_path_sync_issues && D.models_needing_path_sync && D.models_needing_path_sync > 0 ? `${D.models_needing_path_sync} model path${D.models_needing_path_sync > 1 ? "s" : ""} need${D.models_needing_path_sync === 1 ? "s" : ""} sync` : P || "Unknown";
    }
    return Ue(T), (D, P) => (s(), o(V, null, [
      b(Ke, null, {
        header: i(() => [
          b(Je, { title: "WORKFLOWS" })
        ]),
        search: i(() => [
          b(Lt, {
            modelValue: r.value,
            "onUpdate:modelValue": P[0] || (P[0] = (S) => r.value = S),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          u.value ? (s(), E(wt, {
            key: 0,
            message: "Loading workflows..."
          })) : v.value ? (s(), E(kt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            z.value.length ? (s(), E(Be, {
              key: 0,
              title: "BROKEN",
              count: z.value.length
            }, {
              default: i(() => [
                (s(!0), o(V, null, oe(z.value, (S) => (s(), E(qe, {
                  key: S.name,
                  status: "broken"
                }, {
                  icon: i(() => [...P[7] || (P[7] = [
                    h("⚠", -1)
                  ])]),
                  title: i(() => [
                    h(a(S.name), 1)
                  ]),
                  subtitle: i(() => [
                    h(a(ce(S)), 1)
                  ]),
                  actions: i(() => [
                    b(ne, {
                      variant: "primary",
                      size: "sm",
                      onClick: (re) => O(S.name)
                    }, {
                      default: i(() => [...P[8] || (P[8] = [
                        h(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(ne, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (re) => R(S.name)
                    }, {
                      default: i(() => [...P[9] || (P[9] = [
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
              default: i(() => [
                (s(!0), o(V, null, oe(x.value, (S) => (s(), E(qe, {
                  key: S.name,
                  status: S.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: i(() => [
                    h(a(S.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: i(() => [
                    h(a(S.name), 1)
                  ]),
                  subtitle: i(() => [
                    h(a(Y(S)), 1)
                  ]),
                  actions: i(() => [
                    b(ne, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (re) => R(S.name)
                    }, {
                      default: i(() => [...P[10] || (P[10] = [
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
            J.value.length ? (s(), E(Be, {
              key: 2,
              title: "MODIFIED",
              count: J.value.length
            }, {
              default: i(() => [
                (s(!0), o(V, null, oe(J.value, (S) => (s(), E(qe, {
                  key: S.name,
                  status: S.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: i(() => [...P[11] || (P[11] = [
                    h("⚡", -1)
                  ])]),
                  title: i(() => [
                    h(a(S.name), 1)
                  ]),
                  subtitle: i(() => [
                    h(a(Y(S)), 1)
                  ]),
                  actions: i(() => [
                    b(ne, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (re) => R(S.name)
                    }, {
                      default: i(() => [...P[12] || (P[12] = [
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
            A.value.length ? (s(), E(Be, {
              key: 3,
              title: "SYNCED",
              count: A.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: P[2] || (P[2] = (S) => m.value = S)
            }, {
              default: i(() => [
                (s(!0), o(V, null, oe(W.value, (S) => (s(), E(qe, {
                  key: S.name,
                  status: S.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: i(() => [
                    h(a(S.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: i(() => [
                    h(a(S.name), 1)
                  ]),
                  subtitle: i(() => [
                    h(a(Y(S)), 1)
                  ]),
                  actions: i(() => [
                    b(ne, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (re) => R(S.name)
                    }, {
                      default: i(() => [...P[13] || (P[13] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !y.value && A.value.length > 5 ? (s(), E(ne, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: P[1] || (P[1] = (S) => y.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: i(() => [
                    h(" View all " + a(A.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            N.value.length ? d("", !0) : (s(), E(it, {
              key: 4,
              icon: "📭",
              message: r.value ? `No workflows match '${r.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      w.value && _.value ? (s(), E(ri, {
        key: 0,
        "workflow-name": _.value,
        onClose: P[3] || (P[3] = (S) => w.value = !1),
        onResolve: P[4] || (P[4] = (S) => O(_.value)),
        onRefresh: P[5] || (P[5] = (S) => l("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0),
      k.value && _.value ? (s(), E(Fu, {
        key: 1,
        "workflow-name": _.value,
        onClose: se,
        onInstall: le,
        onRefresh: P[6] || (P[6] = (S) => l("refresh")),
        onRestart: X
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
}, Rm = { class: "location-path mono" }, zm = {
  key: 0,
  class: "location-modified"
}, Lm = ["onClick"], Pm = {
  key: 1,
  class: "empty-state"
}, Dm = { class: "detail-section" }, Nm = { class: "section-header" }, Um = {
  key: 0,
  class: "sources-list"
}, Om = { class: "source-type" }, Bm = ["href"], Am = ["disabled", "onClick"], Fm = {
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
    const n = t, { getModelDetails: l, addModelSource: p, removeModelSource: g, openFileLocation: u } = Ae(), v = $(null), r = $(!0), m = $(null), y = $(""), w = $(!1), k = $(null), _ = $(null), M = $(null), F = $(null);
    let f = null;
    function C(T, R = "success", O = 2e3) {
      f && clearTimeout(f), F.value = { message: T, type: R }, f = setTimeout(() => {
        F.value = null;
      }, O);
    }
    function N(T) {
      if (!T) return "Unknown";
      const R = 1024 * 1024 * 1024, O = 1024 * 1024;
      return T >= R ? `${(T / R).toFixed(1)} GB` : T >= O ? `${(T / O).toFixed(0)} MB` : `${(T / 1024).toFixed(0)} KB`;
    }
    function z(T) {
      navigator.clipboard.writeText(T), C("Copied to clipboard!");
    }
    async function x(T) {
      try {
        await u(T), C("Opening file location...");
      } catch {
        C("Failed to open location", "error");
      }
    }
    async function J() {
      if (!(!y.value.trim() || !v.value)) {
        w.value = !0, _.value = null, M.value = null;
        try {
          await p(v.value.hash, y.value.trim()), M.value = "Source added successfully!", y.value = "", await W();
        } catch (T) {
          _.value = T instanceof Error ? T.message : "Failed to add source";
        } finally {
          w.value = !1;
        }
      }
    }
    async function A(T) {
      if (v.value) {
        k.value = T, _.value = null, M.value = null;
        try {
          await g(v.value.hash, T), C("Source removed"), await W();
        } catch (R) {
          _.value = R instanceof Error ? R.message : "Failed to remove source";
        } finally {
          k.value = null;
        }
      }
    }
    async function W() {
      r.value = !0, m.value = null;
      try {
        v.value = await l(n.identifier);
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to load model details";
      } finally {
        r.value = !1;
      }
    }
    return Ue(W), (T, R) => {
      var O;
      return s(), o(V, null, [
        b(Ye, {
          title: `Model Details: ${((O = v.value) == null ? void 0 : O.filename) || "Loading..."}`,
          size: "lg",
          loading: r.value,
          error: m.value,
          onClose: R[5] || (R[5] = (le) => T.$emit("close"))
        }, {
          body: i(() => {
            var le, se, X, ce;
            return [
              v.value ? (s(), o("div", fm, [
                e("section", gm, [
                  e("div", pm, [
                    R[6] || (R[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", hm, a(v.value.hash || "Not computed"), 1),
                    v.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: R[0] || (R[0] = (Y) => z(v.value.hash))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", ym, [
                    R[7] || (R[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", wm, a(v.value.blake3 || "Not computed"), 1),
                    v.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: R[1] || (R[1] = (Y) => z(v.value.blake3))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", km, [
                    R[8] || (R[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", bm, a(v.value.sha256 || "Not computed"), 1),
                    v.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: R[2] || (R[2] = (Y) => z(v.value.sha256))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", _m, [
                    R[9] || (R[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", $m, a(N(v.value.size)), 1)
                  ]),
                  e("div", Cm, [
                    R[10] || (R[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", xm, a(v.value.category), 1)
                  ]),
                  e("div", Sm, [
                    R[11] || (R[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Im, a(v.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Em, [
                  e("h4", Mm, "Locations (" + a(((le = v.value.locations) == null ? void 0 : le.length) || 0) + ")", 1),
                  (se = v.value.locations) != null && se.length ? (s(), o("div", Tm, [
                    (s(!0), o(V, null, oe(v.value.locations, (Y, D) => (s(), o("div", {
                      key: D,
                      class: "location-item"
                    }, [
                      e("span", Rm, a(Y.path), 1),
                      Y.modified ? (s(), o("span", zm, "Modified: " + a(Y.modified), 1)) : d("", !0),
                      Y.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (P) => x(Y.path)
                      }, " Open File Location ", 8, Lm)) : d("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", Pm, "No locations found"))
                ]),
                e("section", Dm, [
                  e("h4", Nm, "Download Sources (" + a(((X = v.value.sources) == null ? void 0 : X.length) || 0) + ")", 1),
                  (ce = v.value.sources) != null && ce.length ? (s(), o("div", Um, [
                    (s(!0), o(V, null, oe(v.value.sources, (Y, D) => (s(), o("div", {
                      key: D,
                      class: "source-item"
                    }, [
                      e("span", Om, a(Y.type) + ":", 1),
                      e("a", {
                        href: Y.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(Y.url), 9, Bm),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: k.value === Y.url,
                        onClick: (P) => A(Y.url)
                      }, a(k.value === Y.url ? "..." : "×"), 9, Am)
                    ]))), 128))
                  ])) : (s(), o("div", Fm, " No download sources configured ")),
                  e("div", Vm, [
                    Oe(e("input", {
                      "onUpdate:modelValue": R[3] || (R[3] = (Y) => y.value = Y),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Tt, y.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !y.value.trim() || w.value,
                      onClick: J
                    }, a(w.value ? "Adding..." : "Add Source"), 9, Wm)
                  ]),
                  _.value ? (s(), o("p", Gm, a(_.value), 1)) : d("", !0),
                  M.value ? (s(), o("p", jm, a(M.value), 1)) : d("", !0)
                ])
              ])) : d("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: R[4] || (R[4] = (le) => T.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), E(Ve, { to: "body" }, [
          F.value ? (s(), o("div", {
            key: 0,
            class: me(["toast", F.value.type])
          }, a(F.value.message), 3)) : d("", !0)
        ]))
      ], 64);
    };
  }
}), vs = /* @__PURE__ */ te(Hm, [["__scopeId", "data-v-f15cbb56"]]), qm = /* @__PURE__ */ ee({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: l, getStatus: p } = Ae(), g = $([]), u = $([]), v = $("production"), r = $(!1), m = $(null), y = $(""), w = $(!1), k = $(null);
    function _() {
      w.value = !1, n("navigate", "model-index");
    }
    const M = U(
      () => g.value.reduce((W, T) => W + (T.size || 0), 0)
    ), F = U(() => {
      if (!y.value.trim()) return g.value;
      const W = y.value.toLowerCase();
      return g.value.filter((T) => T.filename.toLowerCase().includes(W));
    }), f = U(() => {
      if (!y.value.trim()) return u.value;
      const W = y.value.toLowerCase();
      return u.value.filter((T) => T.filename.toLowerCase().includes(W));
    }), C = U(() => {
      const W = {};
      for (const R of F.value) {
        const O = R.type || "other";
        W[O] || (W[O] = []), W[O].push(R);
      }
      const T = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(W).sort(([R], [O]) => {
        const le = T.indexOf(R), se = T.indexOf(O);
        return le >= 0 && se >= 0 ? le - se : le >= 0 ? -1 : se >= 0 ? 1 : R.localeCompare(O);
      }).map(([R, O]) => ({ type: R, models: O }));
    });
    function N(W) {
      if (!W) return "Unknown";
      const T = W / (1024 * 1024);
      return T >= 1024 ? `${(T / 1024).toFixed(1)} GB` : `${T.toFixed(0)} MB`;
    }
    function z(W) {
      k.value = W.hash || W.filename;
    }
    function x(W) {
      n("navigate", "model-index");
    }
    function J(W) {
      alert(`Download functionality not yet implemented for ${W}`);
    }
    async function A() {
      r.value = !0, m.value = null;
      try {
        const W = await l();
        g.value = W, u.value = [];
        const T = await p();
        v.value = T.environment || "production";
      } catch (W) {
        m.value = W instanceof Error ? W.message : "Failed to load models";
      } finally {
        r.value = !1;
      }
    }
    return Ue(A), (W, T) => (s(), o(V, null, [
      b(Ke, null, {
        header: i(() => [
          b(Je, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (R) => w.value = !0)
          })
        ]),
        search: i(() => [
          b(Lt, {
            modelValue: y.value,
            "onUpdate:modelValue": T[1] || (T[1] = (R) => y.value = R),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          r.value ? (s(), E(wt, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (s(), E(kt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: A
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            g.value.length ? (s(), E(jt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                h(" Total: " + a(g.value.length) + " models • " + a(N(M.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(V, null, oe(C.value, (R) => (s(), E(Be, {
              key: R.type,
              title: R.type.toUpperCase(),
              count: R.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(V, null, oe(R.models, (O) => (s(), E(qe, {
                  key: O.hash || O.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...T[4] || (T[4] = [
                    h("📦", -1)
                  ])]),
                  title: i(() => [
                    h(a(O.filename), 1)
                  ]),
                  subtitle: i(() => [
                    h(a(N(O.size)), 1)
                  ]),
                  details: i(() => [
                    b(Ne, {
                      label: "Used by:",
                      value: (O.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    b(Ne, {
                      label: "Path:",
                      value: O.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    b(ne, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (le) => z(O)
                    }, {
                      default: i(() => [...T[5] || (T[5] = [
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
            f.value.length ? (s(), E(Be, {
              key: 1,
              title: "MISSING",
              count: f.value.length
            }, {
              default: i(() => [
                (s(!0), o(V, null, oe(f.value, (R) => (s(), E(qe, {
                  key: R.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...T[6] || (T[6] = [
                    h("⚠", -1)
                  ])]),
                  title: i(() => [
                    h(a(R.filename), 1)
                  ]),
                  subtitle: i(() => [...T[7] || (T[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: i(() => {
                    var O;
                    return [
                      b(Ne, {
                        label: "Required by:",
                        value: ((O = R.workflow_names) == null ? void 0 : O.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: i(() => [
                    b(ne, {
                      variant: "primary",
                      size: "sm",
                      onClick: (O) => J(R.filename)
                    }, {
                      default: i(() => [...T[8] || (T[8] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(ne, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => x(R.filename)
                    }, {
                      default: i(() => [...T[9] || (T[9] = [
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
            !F.value.length && !f.value.length ? (s(), E(it, {
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
        onClose: T[2] || (T[2] = (R) => w.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            T[10] || (T[10] = h(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(v.value) + '"', 1),
            T[11] || (T[11] = h(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: i(() => [
          b(ne, {
            variant: "primary",
            onClick: _
          }, {
            default: i(() => [...T[12] || (T[12] = [
              h(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), E(vs, {
        key: 0,
        identifier: k.value,
        onClose: T[3] || (T[3] = (R) => k.value = null)
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
      getModelsDirectory: p,
      setModelsDirectory: g
    } = Ae(), { addToQueue: u } = Gt(), v = c, r = $([]), m = $(!1), y = $(!1), w = $(null), k = $(""), _ = $(!1), M = $(null), F = $(!1), f = $(null), C = $(""), N = $(!1), z = $(!1), x = $(""), J = $(""), A = $(null), W = U(
      () => r.value.reduce((P, S) => P + (S.size || 0), 0)
    ), T = U(() => {
      if (!k.value.trim()) return r.value;
      const P = k.value.toLowerCase();
      return r.value.filter((S) => {
        const re = S, Z = S.sha256 || re.sha256_hash || "";
        return S.filename.toLowerCase().includes(P) || Z.toLowerCase().includes(P);
      });
    }), R = U(() => {
      const P = {};
      for (const re of T.value) {
        const Z = re.type || "other";
        P[Z] || (P[Z] = []), P[Z].push(re);
      }
      const S = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(P).sort(([re], [Z]) => {
        const ke = S.indexOf(re), be = S.indexOf(Z);
        return ke >= 0 && be >= 0 ? ke - be : ke >= 0 ? -1 : be >= 0 ? 1 : re.localeCompare(Z);
      }).map(([re, Z]) => ({ type: re, models: Z }));
    });
    function O(P) {
      if (!P) return "Unknown";
      const S = 1024 * 1024 * 1024, re = 1024 * 1024;
      return P >= S ? `${(P / S).toFixed(1)} GB` : P >= re ? `${(P / re).toFixed(0)} MB` : `${(P / 1024).toFixed(0)} KB`;
    }
    function le(P) {
      M.value = P.hash || P.filename;
    }
    async function se() {
      y.value = !0, w.value = null;
      try {
        const P = await l();
        await Y(), P.changes > 0 && console.log(`Scan complete: ${P.changes} changes detected`);
      } catch (P) {
        w.value = P instanceof Error ? P.message : "Failed to scan models";
      } finally {
        y.value = !1;
      }
    }
    async function X() {
      if (C.value.trim()) {
        N.value = !0, w.value = null;
        try {
          const P = await g(C.value.trim());
          f.value = P.path, F.value = !1, C.value = "", await Y(), console.log(`Directory changed: ${P.models_indexed} models indexed`), v("refresh");
        } catch (P) {
          w.value = P instanceof Error ? P.message : "Failed to change directory";
        } finally {
          N.value = !1;
        }
      }
    }
    function ce() {
      if (!x.value.trim() || !J.value.trim()) return;
      const P = J.value.split("/").pop() || "model.safetensors";
      u([{
        workflow: "__manual__",
        filename: P,
        url: x.value.trim(),
        targetPath: J.value.trim()
      }]), x.value = "", J.value = "", z.value = !1;
    }
    async function Y() {
      m.value = !0, w.value = null;
      try {
        r.value = await n();
      } catch (P) {
        w.value = P instanceof Error ? P.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function D() {
      try {
        const P = await p();
        f.value = P.path;
      } catch {
      }
    }
    return Ue(() => {
      Y(), D();
    }), (P, S) => (s(), o(V, null, [
      b(Ke, null, {
        header: i(() => [
          b(Je, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: S[2] || (S[2] = (re) => _.value = !0)
          }, {
            actions: i(() => [
              b(ne, {
                variant: "primary",
                size: "sm",
                disabled: y.value,
                onClick: se
              }, {
                default: i(() => [
                  h(a(y.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(ne, {
                variant: "primary",
                size: "sm",
                onClick: S[0] || (S[0] = (re) => F.value = !0)
              }, {
                default: i(() => [...S[15] || (S[15] = [
                  h(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              b(ne, {
                variant: "primary",
                size: "sm",
                onClick: S[1] || (S[1] = (re) => z.value = !0)
              }, {
                default: i(() => [...S[16] || (S[16] = [
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
        search: i(() => [
          A.value ? (s(), o("div", Jm, [
            e("div", Ym, [
              e("span", Xm, a(A.value.message), 1),
              e("span", Qm, a(A.value.current) + "/" + a(A.value.total), 1)
            ]),
            e("div", Zm, [
              e("div", {
                class: "progress-fill",
                style: yt({ width: `${A.value.current / A.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : d("", !0),
          b(Lt, {
            modelValue: k.value,
            "onUpdate:modelValue": S[3] || (S[3] = (re) => k.value = re),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          m.value || A.value ? (s(), E(wt, {
            key: 0,
            message: A.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : w.value ? (s(), E(kt, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: Y
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            r.value.length ? (s(), E(jt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                h(" Total: " + a(r.value.length) + " models • " + a(O(W.value)), 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(V, null, oe(R.value, (re) => (s(), E(Be, {
              key: re.type,
              title: re.type.toUpperCase(),
              count: re.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (s(!0), o(V, null, oe(re.models, (Z) => (s(), E(qe, {
                  key: Z.sha256 || Z.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...S[17] || (S[17] = [
                    h("📦", -1)
                  ])]),
                  title: i(() => [
                    h(a(Z.filename), 1)
                  ]),
                  subtitle: i(() => [
                    h(a(O(Z.size)), 1)
                  ]),
                  details: i(() => [
                    b(Ne, {
                      label: "Hash:",
                      value: Z.hash ? Z.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    b(ne, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ke) => le(Z)
                    }, {
                      default: i(() => [...S[18] || (S[18] = [
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
            T.value.length ? d("", !0) : (s(), E(it, {
              key: 1,
              icon: "📭",
              message: k.value ? `No models match '${k.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      b(mt, {
        show: _.value,
        title: "About Workspace Model Index",
        onClose: S[4] || (S[4] = (re) => _.value = !1)
      }, {
        content: i(() => [...S[19] || (S[19] = [
          e("p", null, [
            h(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            h(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      M.value ? (s(), E(vs, {
        key: 0,
        identifier: M.value,
        onClose: S[5] || (S[5] = (re) => M.value = null)
      }, null, 8, ["identifier"])) : d("", !0),
      (s(), E(Ve, { to: "body" }, [
        F.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[9] || (S[9] = ze((re) => F.value = !1, ["self"]))
        }, [
          e("div", ev, [
            e("div", tv, [
              S[20] || (S[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: S[6] || (S[6] = (re) => F.value = !1)
              }, "✕")
            ]),
            e("div", sv, [
              e("div", ov, [
                S[21] || (S[21] = e("label", null, "Current Directory", -1)),
                e("code", nv, a(f.value || "Not set"), 1)
              ]),
              e("div", av, [
                S[22] || (S[22] = e("label", null, "New Directory Path", -1)),
                b(lt, {
                  modelValue: C.value,
                  "onUpdate:modelValue": S[7] || (S[7] = (re) => C.value = re),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              S[23] || (S[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", lv, [
              b(ve, {
                variant: "secondary",
                onClick: S[8] || (S[8] = (re) => F.value = !1)
              }, {
                default: i(() => [...S[24] || (S[24] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              b(ve, {
                variant: "primary",
                disabled: !C.value.trim() || N.value,
                loading: N.value,
                onClick: X
              }, {
                default: i(() => [
                  h(a(N.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : d("", !0)
      ])),
      (s(), E(Ve, { to: "body" }, [
        z.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[14] || (S[14] = ze((re) => z.value = !1, ["self"]))
        }, [
          e("div", iv, [
            e("div", rv, [
              S[25] || (S[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: S[10] || (S[10] = (re) => z.value = !1)
              }, "✕")
            ]),
            e("div", dv, [
              e("div", cv, [
                S[26] || (S[26] = e("label", null, "Download URL", -1)),
                b(lt, {
                  modelValue: x.value,
                  "onUpdate:modelValue": S[11] || (S[11] = (re) => x.value = re),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", uv, [
                S[27] || (S[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                b(lt, {
                  modelValue: J.value,
                  "onUpdate:modelValue": S[12] || (S[12] = (re) => J.value = re),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              S[28] || (S[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", mv, [
              b(ve, {
                variant: "secondary",
                onClick: S[13] || (S[13] = (re) => z.value = !1)
              }, {
                default: i(() => [...S[29] || (S[29] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              b(ve, {
                variant: "primary",
                disabled: !x.value.trim() || !J.value.trim(),
                onClick: ce
              }, {
                default: i(() => [...S[30] || (S[30] = [
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
    const n = t, l = c, p = U(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), g = U(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), u = U(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (v, r) => (s(), E(Ye, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: r[1] || (r[1] = (m) => l("close"))
    }, {
      body: i(() => [
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
              (s(!0), o(V, null, oe(t.node.used_in_workflows, (m) => (s(), o("span", {
                key: m,
                class: "workflow-tag"
              }, a(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: i(() => [
        b(ve, {
          variant: "secondary",
          onClick: r[0] || (r[0] = (m) => l("close"))
        }, {
          default: i(() => [...r[11] || (r[11] = [
            h(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Rv = /* @__PURE__ */ te(Tv, [["__scopeId", "data-v-b342f626"]]), zv = { class: "dialog-message" }, Lv = {
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
    return (c, n) => (s(), E(Ye, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (l) => c.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", zv, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", Lv, [
          (s(!0), o(V, null, oe(t.details, (l, p) => (s(), o("div", {
            key: p,
            class: "detail-item"
          }, " • " + a(l), 1))), 128))
        ])) : d("", !0),
        t.warning ? (s(), o("p", Pv, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          h(" " + a(t.warning), 1)
        ])) : d("", !0)
      ]),
      footer: i(() => [
        b(ve, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (l) => c.$emit("cancel"))
        }, {
          default: i(() => [
            h(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), E(ve, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (l) => c.$emit("secondary"))
        }, {
          default: i(() => [
            h(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        b(ve, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (l) => c.$emit("confirm"))
        }, {
          default: i(() => [
            h(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Bs = /* @__PURE__ */ te(Dv, [["__scopeId", "data-v-3670b9f5"]]), Nv = { class: "mismatch-warning" }, Uv = { class: "version-mismatch" }, Ov = { class: "version-actual" }, Bv = { class: "version-expected" }, Av = { key: 0 }, Fv = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Vv = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Wv = /* @__PURE__ */ ee({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(t, { emit: c }) {
    const n = t, l = c, { getNodes: p, trackNodeAsDev: g, installNode: u, uninstallNode: v } = Ae(), r = $({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), m = $(!1), y = $(null), w = $(""), k = $(!1), _ = $(null), M = $(null), F = U(() => {
      if (!w.value.trim()) return r.value.nodes;
      const se = w.value.toLowerCase();
      return r.value.nodes.filter(
        (X) => {
          var ce, Y;
          return X.name.toLowerCase().includes(se) || ((ce = X.description) == null ? void 0 : ce.toLowerCase().includes(se)) || ((Y = X.repository) == null ? void 0 : Y.toLowerCase().includes(se));
        }
      );
    }), f = U(
      () => F.value.filter((se) => se.installed && se.tracked)
    ), C = U(
      () => F.value.filter((se) => !se.installed && se.tracked)
    ), N = U(
      () => F.value.filter((se) => se.installed && !se.tracked)
    );
    function z(se) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[se] || se;
    }
    const x = U(() => n.versionMismatches.length > 0);
    function J(se) {
      return !se.used_in_workflows || se.used_in_workflows.length === 0 ? "Not used in any workflows" : se.used_in_workflows.length === 1 ? se.used_in_workflows[0] : `${se.used_in_workflows.length} workflows`;
    }
    function A(se) {
      _.value = se;
    }
    function W() {
      l("open-node-manager");
    }
    function T(se) {
      M.value = {
        title: "Track as Development Node",
        message: `Track "${se}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          M.value = null;
          try {
            m.value = !0;
            const X = await g(se);
            X.status === "success" ? (l("toast", `✓ Node "${se}" tracked as development`, "success"), await le()) : l("toast", `Failed to track node: ${X.message || "Unknown error"}`, "error");
          } catch (X) {
            l("toast", `Error tracking node: ${X instanceof Error ? X.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function R(se) {
      M.value = {
        title: "Remove Untracked Node",
        message: `Remove "${se}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          M.value = null;
          try {
            m.value = !0;
            const X = await v(se);
            X.status === "success" ? (l("toast", `✓ Node "${se}" removed`, "success"), await le()) : l("toast", `Failed to remove node: ${X.message || "Unknown error"}`, "error");
          } catch (X) {
            l("toast", `Error removing node: ${X instanceof Error ? X.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function O(se) {
      M.value = {
        title: "Install Missing Node",
        message: `Install "${se}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          M.value = null;
          try {
            m.value = !0;
            const X = await u(se);
            X.status === "success" ? (l("toast", `✓ Node "${se}" installed`, "success"), await le()) : l("toast", `Failed to install node: ${X.message || "Unknown error"}`, "error");
          } catch (X) {
            l("toast", `Error installing node: ${X instanceof Error ? X.message : "Unknown error"}`, "error");
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
      } catch (se) {
        y.value = se instanceof Error ? se.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return Ue(le), (se, X) => (s(), o(V, null, [
      b(Ke, null, {
        header: i(() => [
          b(Je, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: X[0] || (X[0] = (ce) => k.value = !0)
          }, {
            actions: i(() => [
              b(ne, {
                variant: "primary",
                size: "sm",
                onClick: W
              }, {
                default: i(() => [...X[7] || (X[7] = [
                  h(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          b(Lt, {
            modelValue: w.value,
            "onUpdate:modelValue": X[1] || (X[1] = (ce) => w.value = ce),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          m.value ? (s(), E(wt, {
            key: 0,
            message: "Loading nodes..."
          })) : y.value ? (s(), E(kt, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: le
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            r.value.total_count ? (s(), E(jt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
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
            x.value ? (s(), E(Be, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: t.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                e("div", Nv, [
                  X[8] || (X[8] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (s(!0), o(V, null, oe(t.versionMismatches, (ce) => (s(), E(qe, {
                  key: ce.name,
                  status: "warning"
                }, {
                  icon: i(() => [...X[9] || (X[9] = [
                    h("⚠", -1)
                  ])]),
                  title: i(() => [
                    h(a(ce.name), 1)
                  ]),
                  subtitle: i(() => [
                    e("span", Uv, [
                      e("span", Ov, a(ce.actual), 1),
                      X[10] || (X[10] = e("span", { class: "version-arrow" }, "→", -1)),
                      e("span", Bv, a(ce.expected), 1)
                    ])
                  ]),
                  actions: i(() => [
                    b(ne, {
                      variant: "warning",
                      size: "sm",
                      onClick: X[2] || (X[2] = (Y) => l("repair-environment"))
                    }, {
                      default: i(() => [...X[11] || (X[11] = [
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
            N.value.length ? (s(), E(Be, {
              key: 2,
              title: "UNTRACKED",
              count: N.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(V, null, oe(N.value, (ce) => (s(), E(qe, {
                  key: ce.name,
                  status: "warning"
                }, {
                  icon: i(() => [...X[12] || (X[12] = [
                    h("?", -1)
                  ])]),
                  title: i(() => [
                    h(a(ce.name), 1)
                  ]),
                  subtitle: i(() => [...X[13] || (X[13] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: i(() => [
                    b(Ne, {
                      label: "Used by:",
                      value: J(ce)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    b(ne, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => A(ce)
                    }, {
                      default: i(() => [...X[14] || (X[14] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(ne, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Y) => T(ce.name)
                    }, {
                      default: i(() => [...X[15] || (X[15] = [
                        h(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(ne, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Y) => R(ce.name)
                    }, {
                      default: i(() => [...X[16] || (X[16] = [
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
            f.value.length ? (s(), E(Be, {
              key: 3,
              title: "INSTALLED",
              count: f.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(V, null, oe(f.value, (ce) => (s(), E(qe, {
                  key: ce.name,
                  status: "synced"
                }, {
                  icon: i(() => [
                    h(a(ce.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: i(() => [
                    h(a(ce.name), 1)
                  ]),
                  subtitle: i(() => [
                    ce.version ? (s(), o("span", Av, a(ce.source === "development" ? "" : "v") + a(ce.version), 1)) : (s(), o("span", Fv, "version unknown")),
                    e("span", Vv, " • " + a(z(ce.source)), 1)
                  ]),
                  details: i(() => [
                    b(Ne, {
                      label: "Used by:",
                      value: J(ce)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    b(ne, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => A(ce)
                    }, {
                      default: i(() => [...X[17] || (X[17] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(ne, {
                      variant: "secondary",
                      size: "xs",
                      onClick: W
                    }, {
                      default: i(() => [...X[18] || (X[18] = [
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
            C.value.length ? (s(), E(Be, {
              key: 4,
              title: "MISSING",
              count: C.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(V, null, oe(C.value, (ce) => (s(), E(qe, {
                  key: ce.name,
                  status: "missing"
                }, {
                  icon: i(() => [...X[19] || (X[19] = [
                    h("!", -1)
                  ])]),
                  title: i(() => [
                    h(a(ce.name), 1)
                  ]),
                  subtitle: i(() => [...X[20] || (X[20] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: i(() => [
                    b(Ne, {
                      label: "Required by:",
                      value: J(ce)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    b(ne, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => A(ce)
                    }, {
                      default: i(() => [...X[21] || (X[21] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(ne, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Y) => O(ce.name)
                    }, {
                      default: i(() => [...X[22] || (X[22] = [
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
            !f.value.length && !C.value.length && !N.value.length ? (s(), E(it, {
              key: 5,
              icon: "📭",
              message: w.value ? `No nodes match '${w.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(mt, {
        show: k.value,
        title: "About Custom Nodes",
        onClose: X[4] || (X[4] = (ce) => k.value = !1)
      }, {
        content: i(() => [...X[23] || (X[23] = [
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
        actions: i(() => [
          b(ne, {
            variant: "primary",
            onClick: X[3] || (X[3] = (ce) => k.value = !1)
          }, {
            default: i(() => [...X[24] || (X[24] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (s(), E(Rv, {
        key: 0,
        node: _.value,
        onClose: X[5] || (X[5] = (ce) => _.value = null)
      }, null, 8, ["node"])) : d("", !0),
      M.value ? (s(), E(Bs, {
        key: 1,
        title: M.value.title,
        message: M.value.message,
        warning: M.value.warning,
        "confirm-label": M.value.confirmLabel,
        destructive: M.value.destructive,
        onConfirm: M.value.onConfirm,
        onCancel: X[6] || (X[6] = (ce) => M.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : d("", !0)
    ], 64));
  }
}), Gv = /* @__PURE__ */ te(Wv, [["__scopeId", "data-v-1555a802"]]);
function As(t) {
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
    const c = t, n = $(!1), l = U(() => {
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
      }, a(l.value), 9, Hv),
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
    const c = t, n = U(() => c.fetchingRemote === c.remote.name), l = U(() => c.remote.is_default), p = U(() => c.syncStatus && c.syncStatus.behind > 0), g = U(() => c.syncStatus && c.syncStatus.ahead > 0), u = U(() => c.remote.push_url !== c.remote.fetch_url), v = U(() => {
      const m = c.remote.fetch_url, y = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return y ? `https://${y[1]}/${y[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), r = U(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, y) => (s(), E(qe, {
      status: l.value ? "synced" : void 0
    }, Wt({
      icon: i(() => [
        h(a(l.value ? "🔗" : "🌐"), 1)
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
        v.value ? (s(), o("a", {
          key: 0,
          href: v.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: y[0] || (y[0] = ze(() => {
          }, ["stop"]))
        }, a(r.value), 9, nf)) : (s(), o("span", af, a(r.value), 1))
      ]),
      actions: i(() => [
        b(ne, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: y[1] || (y[1] = (w) => m.$emit("fetch", t.remote.name))
        }, {
          default: i(() => [...y[6] || (y[6] = [
            h(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        b(ne, {
          variant: p.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: y[2] || (y[2] = (w) => m.$emit("pull", t.remote.name))
        }, {
          default: i(() => [
            h(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(ne, {
          variant: g.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: y[3] || (y[3] = (w) => m.$emit("push", t.remote.name))
        }, {
          default: i(() => [
            h(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(ne, {
          variant: "secondary",
          size: "xs",
          onClick: y[4] || (y[4] = (w) => m.$emit("edit", t.remote.name))
        }, {
          default: i(() => [...y[7] || (y[7] = [
            h(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        l.value ? d("", !0) : (s(), E(ne, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: y[5] || (y[5] = (w) => m.$emit("remove", t.remote.name))
        }, {
          default: i(() => [...y[8] || (y[8] = [
            h(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      u.value ? {
        name: "details",
        fn: i(() => [
          t.remote.push_url !== t.remote.fetch_url ? (s(), E(Ne, {
            key: 0,
            label: "Push URL:"
          }, {
            default: i(() => [
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
    const c = t, n = U(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (l, p) => (s(), o("div", {
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
    const n = t, l = c, p = $({
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
    const v = U(() => p.value.name.trim() !== "" && p.value.fetchUrl.trim() !== "");
    async function r() {
      if (!(!v.value || g.value)) {
        u.value = null, g.value = !0;
        try {
          l("submit", p.value);
        } catch (m) {
          u.value = m instanceof Error ? m.message : "Failed to submit form";
        } finally {
          g.value = !1;
        }
      }
    }
    return (m, y) => (s(), o("div", gf, [
      e("div", pf, [
        b(tt, null, {
          default: i(() => [
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
          default: i(() => [
            b(lt, {
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
          default: i(() => [
            b(lt, {
              modelValue: p.value.fetchUrl,
              "onUpdate:modelValue": y[1] || (y[1] = (w) => p.value.fetchUrl = w),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        b(os, { label: "Push URL (optional)" }, {
          default: i(() => [
            b(lt, {
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
        b(ne, {
          variant: "primary",
          size: "md",
          disabled: !v.value,
          loading: g.value,
          onClick: r
        }, {
          default: i(() => [
            h(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        b(ne, {
          variant: "ghost",
          size: "md",
          onClick: y[3] || (y[3] = (w) => m.$emit("cancel"))
        }, {
          default: i(() => [...y[4] || (y[4] = [
            h(" Cancel ", -1)
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
    const c = t, n = U(
      () => c.conflictCount > 0 ? c.resolvedCount / c.conflictCount * 100 : 0
    );
    return (l, p) => (s(), o("div", _f, [
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
}), Rf = /* @__PURE__ */ te(Tf, [["__scopeId", "data-v-4e9e6cc9"]]), zf = { class: "modal-header" }, Lf = { class: "modal-title" }, Pf = { class: "modal-body" }, Df = {
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
}, Af = {
  key: 0,
  class: "change-group",
  open: ""
}, Ff = { class: "change-count" }, Vf = { class: "change-list" }, Wf = {
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
    const n = t, l = c, p = $(localStorage.getItem(Ss) || "skip");
    _t(p, (f) => {
      localStorage.setItem(Ss, f);
    });
    const g = U(() => {
      var f;
      return ((f = n.error) == null ? void 0 : f.toLowerCase().includes("unrelated histories")) ?? !1;
    }), u = U(() => {
      if (!n.preview) return 0;
      const f = n.preview.changes.workflows;
      return f.added.length + f.modified.length + f.deleted.length;
    }), v = U(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), r = U(() => {
      var f;
      return u.value > 0 || v.value > 0 || (((f = n.preview) == null ? void 0 : f.changes.models.count) || 0) > 0;
    }), m = U(() => n.preview && As(n.preview) ? n.preview : null), y = U(() => {
      var f;
      return ((f = m.value) == null ? void 0 : f.workflow_conflicts.length) ?? 0;
    }), w = U(() => {
      var f;
      return ((f = n.conflictResolutions) == null ? void 0 : f.size) ?? 0;
    }), k = U(
      () => y.value > 0 && w.value === y.value
    ), _ = U(() => !(!n.preview || n.preview.has_uncommitted_changes || m.value && !k.value));
    function M(f) {
      if (!m.value) return !1;
      const C = f.replace(/\.json$/, "");
      return m.value.workflow_conflicts.some((N) => N.name === C);
    }
    function F(f) {
      const C = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      l("pull", { modelStrategy: p.value, force: f, resolutions: C });
    }
    return (f, C) => {
      var N, z;
      return s(), E(Ve, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[11] || (C[11] = (x) => f.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: C[10] || (C[10] = ze(() => {
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
              ])])) : (N = t.preview) != null && N.has_uncommitted_changes ? (s(), o(V, { key: 2 }, [
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
                  u.value > 0 ? (s(), o("details", Af, [
                    e("summary", null, [
                      C[18] || (C[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", Ff, a(u.value) + " changes", 1)
                    ]),
                    e("div", Vf, [
                      (s(!0), o(V, null, oe(t.preview.changes.workflows.added, (x) => (s(), o("div", {
                        key: "a-" + x,
                        class: "change-item add"
                      }, " + " + a(x), 1))), 128)),
                      (s(!0), o(V, null, oe(t.preview.changes.workflows.modified, (x) => (s(), o("div", {
                        key: "m-" + x,
                        class: "change-item modify"
                      }, [
                        h(" ~ " + a(x) + " ", 1),
                        M(x) ? (s(), o("span", Wf, "CONFLICT")) : d("", !0)
                      ]))), 128)),
                      (s(!0), o(V, null, oe(t.preview.changes.workflows.deleted, (x) => (s(), o("div", {
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
                    e("div", Hf, [
                      (s(!0), o(V, null, oe(t.preview.changes.nodes.to_install, (x) => (s(), o("div", {
                        key: x,
                        class: "change-item add"
                      }, " + " + a(x), 1))), 128))
                    ])
                  ])) : d("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", qf, [
                    e("summary", null, [
                      C[20] || (C[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", Kf, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", Jf, [
                      (s(!0), o(V, null, oe(t.preview.changes.models.referenced, (x) => (s(), o("div", {
                        key: x,
                        class: "change-item"
                      }, a(x), 1))), 128))
                    ])
                  ])) : d("", !0)
                ])) : d("", !0),
                m.value ? (s(), E(Rf, {
                  key: 1,
                  "conflict-count": y.value,
                  "resolved-count": w.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : d("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", Yf, [
                  C[26] || (C[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", Xf, [
                    e("label", Qf, [
                      Oe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[1] || (C[1] = (x) => p.value = x),
                        value: "all"
                      }, null, 512), [
                        [Kt, p.value]
                      ]),
                      C[22] || (C[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", Zf, [
                      Oe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[2] || (C[2] = (x) => p.value = x),
                        value: "required"
                      }, null, 512), [
                        [Kt, p.value]
                      ]),
                      C[23] || (C[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", eg, [
                      Oe(e("input", {
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
              b(ne, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (x) => f.$emit("close"))
              }, {
                default: i(() => [...C[29] || (C[29] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(V, { key: 0 }, [
                b(ne, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: C[5] || (C[5] = (x) => F(!1))
                }, {
                  default: i(() => [...C[30] || (C[30] = [
                    h(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                b(ne, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: C[6] || (C[6] = (x) => F(!0))
                }, {
                  default: i(() => [...C[31] || (C[31] = [
                    h(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (z = t.preview) != null && z.has_uncommitted_changes ? (s(), E(ne, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: C[7] || (C[7] = (x) => F(!0))
              }, {
                default: i(() => [...C[32] || (C[32] = [
                  h(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(V, { key: 2 }, [
                m.value && !k.value ? (s(), E(ne, {
                  key: 0,
                  variant: "primary",
                  onClick: C[8] || (C[8] = (x) => l("openConflictResolution"))
                }, {
                  default: i(() => [
                    h(" Resolve Conflicts (" + a(w.value) + "/" + a(y.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), E(ne, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !_.value,
                  onClick: C[9] || (C[9] = (x) => F(!1))
                }, {
                  default: i(() => [...C[33] || (C[33] = [
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
    const n = c, l = $(!1);
    function p(g) {
      n("push", { force: g });
    }
    return (g, u) => {
      var v, r, m;
      return s(), E(Ve, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: u[7] || (u[7] = (y) => g.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: u[6] || (u[6] = ze(() => {
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
                    (s(!0), o(V, null, oe(t.preview.commits, (y) => (s(), o("div", {
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
                    Oe(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": u[1] || (u[1] = (y) => l.value = y)
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
                  h(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", yg, [
                  u[15] || (u[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", wg, [
                    (s(!0), o(V, null, oe(t.preview.commits, (y) => (s(), o("div", {
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
              b(ne, {
                variant: "secondary",
                onClick: u[2] || (u[2] = (y) => g.$emit("close"))
              }, {
                default: i(() => [...u[17] || (u[17] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = t.preview) != null && m.remote_has_new_commits ? (s(), o(V, { key: 0 }, [
                b(ne, {
                  variant: "secondary",
                  onClick: u[3] || (u[3] = (y) => g.$emit("pull-first"))
                }, {
                  default: i(() => [...u[18] || (u[18] = [
                    h(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                b(ne, {
                  variant: "destructive",
                  disabled: !l.value,
                  loading: t.pushing,
                  onClick: u[4] || (u[4] = (y) => p(!0))
                }, {
                  default: i(() => [...u[19] || (u[19] = [
                    h(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), E(ne, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: u[5] || (u[5] = (y) => p(!1))
              }, {
                default: i(() => [...u[20] || (u[20] = [
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
}), Rg = /* @__PURE__ */ te(Tg, [["__scopeId", "data-v-985715ed"]]), zg = { class: "conflict-header" }, Lg = { class: "conflict-info" }, Pg = { class: "workflow-name" }, Dg = { class: "conflict-description" }, Ng = {
  key: 0,
  class: "resolved-badge"
}, Ug = { class: "resolved-text" }, Og = { class: "conflict-hashes" }, Bg = { class: "hash-item" }, Ag = { class: "hash-item" }, Fg = { class: "conflict-actions" }, Vg = /* @__PURE__ */ ee({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: c }) {
    const n = t, l = c, p = $(n.resolution);
    _t(() => n.resolution, (r) => {
      p.value = r;
    }), _t(p, (r) => {
      r && l("resolve", r);
    });
    const g = U(() => p.value !== null), u = U(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), v = U(() => {
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
          e("span", Ag, [
            m[4] || (m[4] = h("Theirs: ", -1)),
            e("code", null, a(((w = t.conflict.target_hash) == null ? void 0 : w.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", Fg, [
          b(Rg, {
            modelValue: p.value,
            "onUpdate:modelValue": m[0] || (m[0] = (k) => p.value = k),
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
    const n = t, l = c, p = U(() => n.resolutions.size), g = U(() => n.workflowConflicts.length - p.value), u = U(() => p.value === n.workflowConflicts.length), v = U(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function r(k) {
      const _ = n.resolutions.get(k);
      return (_ == null ? void 0 : _.resolution) ?? null;
    }
    function m(k, _) {
      l("resolve", k, _);
    }
    function y() {
      l("close");
    }
    function w() {
      l("apply");
    }
    return (k, _) => (s(), E(Ye, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: y
    }, {
      body: i(() => [
        e("div", Gg, [
          t.error ? (s(), o("div", jg, [
            _[1] || (_[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              _[0] || (_[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : d("", !0),
          e("div", Hg, [
            e("div", qg, [
              e("div", Kg, [
                e("span", Jg, a(t.workflowConflicts.length), 1),
                _[2] || (_[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", Yg, [
                e("span", Xg, a(p.value), 1),
                _[3] || (_[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              g.value > 0 ? (s(), o("div", Qg, [
                e("span", Zg, a(g.value), 1),
                _[4] || (_[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : d("", !0)
            ]),
            _[5] || (_[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", ep, [
            (s(!0), o(V, null, oe(t.workflowConflicts, (M) => (s(), E(Wg, {
              key: M.name,
              conflict: M,
              resolution: r(M.name),
              onResolve: (F) => m(M.name, F)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          u.value ? (s(), o("div", tp, [
            _[6] || (_[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(v.value) + '" to continue.', 1)
          ])) : d("", !0)
        ])
      ]),
      footer: i(() => [
        b(ve, {
          variant: "secondary",
          onClick: y
        }, {
          default: i(() => [..._[7] || (_[7] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        _[8] || (_[8] = e("div", { class: "footer-spacer" }, null, -1)),
        b(ve, {
          variant: "primary",
          disabled: !u.value || t.validating,
          loading: t.validating,
          onClick: w
        }, {
          default: i(() => [
            h(a(v.value), 1)
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
    const n = t, l = c, p = U(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (g, u) => (s(), E(Ye, {
      title: "Compatibility Check",
      size: "lg",
      onClose: u[3] || (u[3] = (v) => l("cancel"))
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
              (s(!0), o(V, null, oe(t.validation.node_conflicts, (v) => (s(), E(yp, {
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
              (s(!0), o(V, null, oe(t.validation.warnings, (v, r) => (s(), o("li", { key: r }, a(v), 1))), 128))
            ])
          ])) : d("", !0)
        ])
      ]),
      footer: i(() => [
        b(ve, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (v) => l("cancel"))
        }, {
          default: i(() => [...u[9] || (u[9] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u[11] || (u[11] = e("div", { class: "footer-spacer" }, null, -1)),
        b(ve, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (v) => l("goBack"))
        }, {
          default: i(() => [...u[10] || (u[10] = [
            h(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        b(ve, {
          variant: "primary",
          loading: t.executing,
          onClick: u[2] || (u[2] = (v) => l("proceed"))
        }, {
          default: i(() => [
            h(a(p.value), 1)
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
      addRemote: p,
      removeRemote: g,
      updateRemoteUrl: u,
      fetchRemote: v,
      getRemoteSyncStatus: r,
      getPullPreview: m,
      pullFromRemote: y,
      getPushPreview: w,
      pushToRemote: k,
      validateMerge: _
    } = Ae(), M = $([]), F = $(null), f = $({}), C = $(!1), N = $(null), z = $(""), x = $(!1), J = $(null), A = $(!1), W = $("add"), T = $({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), R = U(() => {
      if (!z.value.trim()) return M.value;
      const B = z.value.toLowerCase();
      return M.value.filter(
        (Q) => Q.name.toLowerCase().includes(B) || Q.fetch_url.toLowerCase().includes(B) || Q.push_url.toLowerCase().includes(B)
      );
    });
    async function O() {
      C.value = !0, N.value = null;
      try {
        const B = await l();
        M.value = B.remotes, F.value = B.current_branch_tracking || null, await Promise.all(
          B.remotes.map(async (Q) => {
            const we = await r(Q.name);
            we && (f.value[Q.name] = we);
          })
        );
      } catch (B) {
        N.value = B instanceof Error ? B.message : "Failed to load remotes";
      } finally {
        C.value = !1;
      }
    }
    function le() {
      W.value = "add", T.value = { name: "", fetchUrl: "", pushUrl: "" }, A.value = !0;
    }
    function se(B) {
      const Q = M.value.find((we) => we.name === B);
      Q && (W.value = "edit", T.value = {
        name: Q.name,
        fetchUrl: Q.fetch_url,
        pushUrl: Q.push_url
      }, A.value = !0);
    }
    async function X(B) {
      try {
        W.value === "add" ? await p(B.name, B.fetchUrl) : await u(B.name, B.fetchUrl, B.pushUrl || void 0), A.value = !1, await O();
      } catch (Q) {
        N.value = Q instanceof Error ? Q.message : "Operation failed";
      }
    }
    function ce() {
      A.value = !1, T.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function Y(B) {
      J.value = B;
      try {
        await v(B);
        const Q = await r(B);
        Q && (f.value[B] = Q), n("toast", `✓ Fetched from ${B}`, "success");
      } catch (Q) {
        n("toast", Q instanceof Error ? Q.message : "Fetch failed", "error");
      } finally {
        J.value = null;
      }
    }
    async function D(B) {
      if (confirm(`Remove remote "${B}"?`))
        try {
          await g(B), await O();
        } catch (Q) {
          N.value = Q instanceof Error ? Q.message : "Failed to remove remote";
        }
    }
    function P() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const S = $("idle"), re = U(() => S.value === "pull_preview"), Z = U(
      () => S.value === "resolving" || S.value === "validating"
    ), ke = U(
      () => S.value === "validation_review" || S.value === "executing"
    ), be = $(!1), Te = $(null), Re = $(!1), de = $(null), fe = $(!1), Me = $(null), ie = $(null), K = $(/* @__PURE__ */ new Map()), Ie = $(null), _e = $(null), st = U(() => Me.value && As(Me.value) ? Me.value : null);
    async function rt(B) {
      de.value = B, S.value = "pull_preview", fe.value = !0, Me.value = null, ie.value = null;
      try {
        Me.value = await m(B);
      } catch (Q) {
        ie.value = Q instanceof Error ? Q.message : "Failed to load pull preview";
      } finally {
        fe.value = !1;
      }
    }
    function vt() {
      S.value = "idle", Me.value = null, ie.value = null, de.value = null;
    }
    async function Se(B) {
      if (!de.value) return;
      S.value = "executing", ie.value = null;
      const Q = de.value;
      try {
        const we = await y(Q, B);
        if (we.rolled_back) {
          ie.value = `Pull failed and was rolled back: ${we.error || "Unknown error"}`, S.value = "pull_preview";
          return;
        }
        Xe(), S.value = "idle", n("toast", `✓ Pulled from ${Q}`, "success"), await O();
      } catch (we) {
        ie.value = we instanceof Error ? we.message : "Pull failed", S.value = "pull_preview";
      }
    }
    function Ze() {
      st.value && (S.value = "resolving", _e.value = null);
    }
    function Ge(B, Q) {
      K.value.set(B, { name: B, resolution: Q });
    }
    function je() {
      S.value = "pull_preview";
    }
    async function ft() {
      S.value = "validating", _e.value = null;
      try {
        const B = Array.from(K.value.values());
        Ie.value = await _(de.value, B), S.value = "validation_review";
      } catch (B) {
        _e.value = B instanceof Error ? B.message : "Validation failed", S.value = "resolving";
      }
    }
    async function ye() {
      S.value = "executing";
      const B = de.value;
      try {
        const Q = Array.from(K.value.values()), we = await y(B, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Q
        });
        if (we.rolled_back) {
          ie.value = `Pull failed and was rolled back: ${we.error || "Unknown error"}`, S.value = "pull_preview";
          return;
        }
        Xe(), S.value = "idle", n("toast", `✓ Pulled from ${B}`, "success"), await O();
      } catch (Q) {
        ie.value = Q instanceof Error ? Q.message : "Pull failed", S.value = "validation_review";
      }
    }
    function Fe() {
      S.value = "resolving";
    }
    function dt() {
      Xe(), S.value = "idle";
    }
    function Xe() {
      K.value.clear(), Ie.value = null, _e.value = null, ie.value = null, Me.value = null, de.value = null;
    }
    async function ae(B) {
      de.value = B, be.value = !0, fe.value = !0, Te.value = null;
      try {
        Te.value = await w(B);
      } catch (Q) {
        N.value = Q instanceof Error ? Q.message : "Failed to load push preview";
      } finally {
        fe.value = !1;
      }
    }
    function G() {
      be.value = !1, Te.value = null, de.value = null;
    }
    async function H(B) {
      if (!de.value) return;
      Re.value = !0;
      const Q = de.value;
      try {
        await k(Q, B), G(), n("toast", `✓ Pushed to ${Q}`, "success"), await O();
      } catch (we) {
        n("toast", we instanceof Error ? we.message : "Push failed", "error");
      } finally {
        Re.value = !1;
      }
    }
    function I() {
      const B = de.value;
      G(), B && rt(B);
    }
    return Ue(O), (B, Q) => (s(), o(V, null, [
      b(Ke, null, {
        header: i(() => [
          b(Je, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: Q[0] || (Q[0] = (we) => x.value = !0)
          }, {
            actions: i(() => [
              A.value ? d("", !0) : (s(), E(ne, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: le
              }, {
                default: i(() => [...Q[3] || (Q[3] = [
                  h(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          A.value ? d("", !0) : (s(), E(Lt, {
            key: 0,
            modelValue: z.value,
            "onUpdate:modelValue": Q[1] || (Q[1] = (we) => z.value = we),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: i(() => [
          C.value ? (s(), E(wt, {
            key: 0,
            message: "Loading remotes..."
          })) : N.value ? (s(), E(kt, {
            key: 1,
            message: N.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            A.value ? (s(), E(bf, {
              key: 0,
              mode: W.value,
              "remote-name": T.value.name,
              "fetch-url": T.value.fetchUrl,
              "push-url": T.value.pushUrl,
              onSubmit: X,
              onCancel: ce
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            M.value.length && !A.value ? (s(), E(jt, {
              key: 1,
              variant: "compact"
            }, {
              default: i(() => [
                h(" Total: " + a(M.value.length) + " remote" + a(M.value.length !== 1 ? "s" : "") + " ", 1),
                F.value ? (s(), o("span", xp, " • Tracking: " + a(F.value.remote) + "/" + a(F.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            R.value.length && !A.value ? (s(), E(Be, {
              key: 2,
              title: "REMOTES",
              count: R.value.length
            }, {
              default: i(() => [
                (s(!0), o(V, null, oe(R.value, (we) => (s(), E(rf, {
                  key: we.name,
                  remote: we,
                  "sync-status": f.value[we.name],
                  "fetching-remote": J.value,
                  onFetch: Y,
                  onEdit: se,
                  onRemove: D,
                  onPull: rt,
                  onPush: ae
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !R.value.length && !A.value ? (s(), E(it, {
              key: 3,
              icon: "🌐",
              message: z.value ? `No remotes match '${z.value}'` : "No remotes configured."
            }, {
              actions: i(() => [
                b(ne, {
                  variant: "primary",
                  onClick: le
                }, {
                  default: i(() => [...Q[4] || (Q[4] = [
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
        onClose: Q[2] || (Q[2] = (we) => x.value = !1)
      }, {
        content: i(() => [...Q[5] || (Q[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            h(" The "),
            e("strong", null, '"origin"'),
            h(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: i(() => [
          b(ne, {
            variant: "link",
            onClick: P
          }, {
            default: i(() => [...Q[6] || (Q[6] = [
              h(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b(ng, {
        show: re.value,
        "remote-name": de.value || "",
        preview: Me.value,
        loading: fe.value,
        pulling: S.value === "executing",
        error: ie.value,
        "conflict-resolutions": K.value,
        onClose: vt,
        onPull: Se,
        onOpenConflictResolution: Ze
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      b(Sg, {
        show: be.value,
        "remote-name": de.value || "",
        preview: Te.value,
        loading: fe.value,
        pushing: Re.value,
        onClose: G,
        onPush: H,
        onPullFirst: I
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      Z.value && st.value ? (s(), E(op, {
        key: 0,
        "workflow-conflicts": st.value.workflow_conflicts,
        resolutions: K.value,
        "operation-type": "pull",
        validating: S.value === "validating",
        error: _e.value,
        onClose: je,
        onResolve: Ge,
        onApply: ft
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : d("", !0),
      ke.value && Ie.value ? (s(), E(Cp, {
        key: 1,
        validation: Ie.value,
        "operation-type": "pull",
        executing: S.value === "executing",
        onProceed: ye,
        onGoBack: Fe,
        onCancel: dt
      }, null, 8, ["validation", "executing"])) : d("", !0)
    ], 64));
  }
}), Ip = /* @__PURE__ */ te(Sp, [["__scopeId", "data-v-9ae3b76d"]]), Ep = { class: "setting-info" }, Mp = { class: "setting-label" }, Tp = {
  key: 0,
  class: "required-marker"
}, Rp = {
  key: 0,
  class: "setting-description"
}, zp = { class: "setting-control" }, Lp = /* @__PURE__ */ ee({
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
        Ce(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), ns = /* @__PURE__ */ te(Lp, [["__scopeId", "data-v-cb5d236c"]]), Pp = { class: "toggle" }, Dp = ["checked", "disabled"], Np = /* @__PURE__ */ ee({
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
}), Up = /* @__PURE__ */ te(Np, [["__scopeId", "data-v-71c0f550"]]), Op = { class: "workspace-settings-content" }, Bp = { class: "settings-section" }, Ap = { class: "path-setting" }, Fp = { class: "path-value" }, Vp = { class: "path-setting" }, Wp = { class: "path-value" }, Gp = { class: "settings-section" }, jp = { class: "settings-section" }, Hp = { class: "settings-section" }, qp = /* @__PURE__ */ ee({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(t, { expose: c, emit: n }) {
    const l = t, p = n, { getConfig: g, updateConfig: u } = Ae(), v = $(!1), r = $(null), m = $(null), y = $(null), w = $(null), k = $(""), _ = $(""), M = $(!1);
    function F(A) {
      return A.join(" ");
    }
    function f(A) {
      return A.trim() ? A.trim().split(/\s+/) : [];
    }
    const C = U(() => {
      if (!w.value) return !1;
      const A = k.value !== (w.value.civitai_api_key || ""), W = _.value !== F(w.value.comfyui_extra_args || []);
      return A || W;
    });
    async function N() {
      v.value = !0, r.value = null;
      try {
        y.value = await g(l.workspacePath || void 0), w.value = { ...y.value }, k.value = y.value.civitai_api_key || "", _.value = F(y.value.comfyui_extra_args || []);
        const A = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        M.value = A === "true";
      } catch (A) {
        r.value = A instanceof Error ? A.message : "Failed to load settings";
      } finally {
        v.value = !1;
      }
    }
    async function z() {
      var A, W;
      m.value = null;
      try {
        const T = {};
        k.value !== (((A = w.value) == null ? void 0 : A.civitai_api_key) || "") && (T.civitai_api_key = k.value || null), _.value !== F(((W = w.value) == null ? void 0 : W.comfyui_extra_args) || []) && (T.comfyui_extra_args = f(_.value)), await u(T, l.workspacePath || void 0), await N(), m.value = { type: "success", message: "Settings saved successfully" }, p("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (T) {
        const R = T instanceof Error ? T.message : "Failed to save settings";
        m.value = { type: "error", message: R }, p("error", R);
      }
    }
    function x() {
      w.value && (k.value = w.value.civitai_api_key || "", _.value = F(w.value.comfyui_extra_args || []), m.value = null);
    }
    function J(A) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(A)), console.log("[ComfyGit] Auto-refresh setting saved:", A);
    }
    return c({
      saveSettings: z,
      resetSettings: x,
      hasChanges: C,
      loadSettings: N
    }), Ue(N), (A, W) => (s(), o("div", Op, [
      v.value ? (s(), E(wt, {
        key: 0,
        message: "Loading workspace settings..."
      })) : r.value ? (s(), E(kt, {
        key: 1,
        message: r.value,
        retry: !0,
        onRetry: N
      }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
        b(Be, { title: "WORKSPACE PATHS" }, {
          default: i(() => {
            var T, R;
            return [
              e("div", Bp, [
                e("div", Ap, [
                  W[3] || (W[3] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                  W[4] || (W[4] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  e("div", Fp, a(((T = y.value) == null ? void 0 : T.workspace_path) || "Loading..."), 1)
                ]),
                e("div", Vp, [
                  W[5] || (W[5] = e("div", { class: "path-label" }, "Models Directory", -1)),
                  W[6] || (W[6] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  e("div", Wp, a(((R = y.value) == null ? void 0 : R.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        b(Be, { title: "API CREDENTIALS" }, {
          default: i(() => [
            e("div", Gp, [
              b(ns, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: i(() => [
                  b(Qt, {
                    modelValue: k.value,
                    "onUpdate:modelValue": W[0] || (W[0] = (T) => k.value = T),
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
        b(Be, { title: "COMFYUI SETTINGS" }, {
          default: i(() => [
            e("div", jp, [
              b(ns, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: i(() => [
                  b(Qt, {
                    modelValue: _.value,
                    "onUpdate:modelValue": W[1] || (W[1] = (T) => _.value = T),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              W[7] || (W[7] = e("div", { class: "setting-hint" }, [
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
        b(Be, { title: "UI SETTINGS" }, {
          default: i(() => [
            e("div", Hp, [
              b(ns, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: i(() => [
                  b(Up, {
                    modelValue: M.value,
                    "onUpdate:modelValue": [
                      W[2] || (W[2] = (T) => M.value = T),
                      J
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        m.value ? (s(), E(jt, {
          key: 0,
          variant: (m.value.type === "success", "compact")
        }, {
          default: i(() => [
            e("span", {
              style: yt({ color: m.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, a(m.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : d("", !0)
      ], 64))
    ]));
  }
}), Fs = /* @__PURE__ */ te(qp, [["__scopeId", "data-v-9f44552d"]]), Kp = /* @__PURE__ */ ee({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const c = $(null);
    function n() {
      console.log("[ComfyGit] Settings saved");
    }
    return (l, p) => (s(), E(Ke, null, {
      header: i(() => [
        b(Je, { title: "WORKSPACE SETTINGS" }, {
          actions: i(() => {
            var g, u;
            return [
              b(ne, {
                variant: "primary",
                size: "sm",
                disabled: !((g = c.value) != null && g.hasChanges),
                onClick: p[0] || (p[0] = (v) => {
                  var r;
                  return (r = c.value) == null ? void 0 : r.saveSettings();
                })
              }, {
                default: i(() => [...p[2] || (p[2] = [
                  h(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (u = c.value) != null && u.hasChanges ? (s(), E(ne, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: p[1] || (p[1] = (v) => {
                  var r;
                  return (r = c.value) == null ? void 0 : r.resetSettings();
                })
              }, {
                default: i(() => [...p[3] || (p[3] = [
                  h(" Reset ", -1)
                ])]),
                _: 1
              })) : d("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: i(() => [
        b(Fs, {
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
    const { getWorkspaceLogs: c, getWorkspaceLogPath: n, openFile: l } = Ae(), p = $([]), g = $(!1), u = $(null), v = $(!1), r = $(null), m = $(null), y = $(!1), w = U(() => p.value.length === 0 ? [] : p.value.map((F) => ({
      text: `${F.timestamp} - ${F.name} - ${F.level} - ${F.func}:${F.line} - ${F.message}`,
      level: F.level
    })));
    async function k() {
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
    async function _() {
      try {
        const F = await n();
        F.exists && (m.value = F.path);
      } catch {
      }
    }
    async function M() {
      if (m.value) {
        y.value = !0;
        try {
          await l(m.value);
        } catch (F) {
          console.error("Failed to open log file:", F);
        } finally {
          y.value = !1;
        }
      }
    }
    return Ue(() => {
      k(), _();
    }), (F, f) => (s(), o(V, null, [
      b(Ke, null, {
        header: i(() => [
          b(Je, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: f[0] || (f[0] = (C) => v.value = !0)
          }, {
            actions: i(() => [
              b(ne, {
                variant: "secondary",
                size: "sm",
                onClick: M,
                disabled: !m.value || y.value,
                title: "Open log file in default editor"
              }, {
                default: i(() => [
                  h(a(y.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(ne, {
                variant: "secondary",
                size: "sm",
                onClick: k,
                disabled: g.value
              }, {
                default: i(() => [
                  h(a(g.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          g.value ? (s(), E(wt, {
            key: 0,
            message: "Loading workspace logs..."
          })) : u.value ? (s(), E(kt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: k
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            p.value.length === 0 ? (s(), E(it, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: r,
              class: "log-output"
            }, [
              (s(!0), o(V, null, oe(w.value, (C, N) => (s(), o("div", {
                key: N,
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
        content: i(() => [...f[3] || (f[3] = [
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
        actions: i(() => [
          b(ne, {
            variant: "primary",
            onClick: f[1] || (f[1] = (C) => v.value = !1)
          }, {
            default: i(() => [...f[4] || (f[4] = [
              h(" Got it ", -1)
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
    const { getEnvironmentLogs: c, getStatus: n, getEnvironmentLogPath: l, openFile: p } = Ae(), g = $([]), u = $(!1), v = $(null), r = $(!1), m = $("production"), y = $(null), w = $(null), k = $(!1), _ = U(() => g.value.length === 0 ? [] : g.value.map((C) => ({
      text: `${C.timestamp} - ${C.name} - ${C.level} - ${C.func}:${C.line} - ${C.message}`,
      level: C.level
    })));
    async function M() {
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
        const C = await l();
        C.exists && (w.value = C.path);
      } catch {
      }
    }
    async function f() {
      if (w.value) {
        k.value = !0;
        try {
          await p(w.value);
        } catch (C) {
          console.error("Failed to open log file:", C);
        } finally {
          k.value = !1;
        }
      }
    }
    return Ue(() => {
      M(), F();
    }), (C, N) => (s(), o(V, null, [
      b(Ke, null, {
        header: i(() => [
          b(Je, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: N[0] || (N[0] = (z) => r.value = !0)
          }, {
            actions: i(() => [
              b(ne, {
                variant: "secondary",
                size: "sm",
                onClick: f,
                disabled: !w.value || k.value,
                title: "Open log file in default editor"
              }, {
                default: i(() => [
                  h(a(k.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(ne, {
                variant: "secondary",
                size: "sm",
                onClick: M,
                disabled: u.value
              }, {
                default: i(() => [
                  h(a(u.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          u.value ? (s(), E(wt, {
            key: 0,
            message: "Loading environment logs..."
          })) : v.value ? (s(), E(kt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: M
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            g.value.length === 0 ? (s(), E(it, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: y,
              class: "log-output"
            }, [
              (s(!0), o(V, null, oe(_.value, (z, x) => (s(), o("div", {
                key: x,
                class: me(`log-line log-level-${z.level.toLowerCase()}`)
              }, a(z.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      b(mt, {
        show: r.value,
        title: "About Environment Logs",
        onClose: N[2] || (N[2] = (z) => r.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            N[3] || (N[3] = h(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(m.value), 1),
            N[4] || (N[4] = h(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          N[5] || (N[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          N[6] || (N[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: i(() => [
          b(ne, {
            variant: "primary",
            onClick: N[1] || (N[1] = (z) => r.value = !1)
          }, {
            default: i(() => [...N[7] || (N[7] = [
              h(" Got it ", -1)
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
    return (c, n) => (s(), E(qe, {
      status: t.isCurrent ? "synced" : void 0
    }, Wt({
      icon: i(() => [
        h(a(t.isCurrent ? "🌍" : "○"), 1)
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
          h(" " + a(t.currentBranch), 1)
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
          b(Ne, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          b(Ne, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          b(Ne, {
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
    function l(p) {
      if (!p) return "Unknown";
      try {
        const g = new Date(p), v = (/* @__PURE__ */ new Date()).getTime() - g.getTime(), r = Math.floor(v / 6e4), m = Math.floor(v / 36e5), y = Math.floor(v / 864e5);
        return r < 1 ? "just now" : r < 60 ? `${r} ${r === 1 ? "minute" : "minutes"} ago` : m < 24 ? `${m} ${m === 1 ? "hour" : "hours"} ago` : y < 30 ? `${y} ${y === 1 ? "day" : "days"} ago` : g.toLocaleDateString();
      } catch {
        return p;
      }
    }
    return (p, g) => (s(), E(Ye, {
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
          t.canDelete ? (s(), E(ve, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: g[0] || (g[0] = (u) => n("delete", t.environment.name))
          }, {
            default: i(() => [...g[12] || (g[12] = [
              h(" Delete ", -1)
            ])]),
            _: 1
          })) : d("", !0),
          g[14] || (g[14] = e("div", { class: "footer-spacer" }, null, -1)),
          b(ve, {
            variant: "secondary",
            size: "sm",
            onClick: g[1] || (g[1] = (u) => n("close"))
          }, {
            default: i(() => [...g[13] || (g[13] = [
              h(" Close ", -1)
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
    const c = t, n = U(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (l, p) => (s(), o("div", Ch, [
      e("div", {
        class: me(["progress-fill", t.variant]),
        style: yt({ width: n.value })
      }, null, 6)
    ]));
  }
}), js = /* @__PURE__ */ te(xh, [["__scopeId", "data-v-1beb0512"]]), Sh = { class: "task-progress" }, Ih = { class: "progress-info" }, Eh = { class: "progress-percentage" }, Mh = { class: "progress-message" }, Th = {
  key: 0,
  class: "progress-steps"
}, Rh = { class: "step-icon" }, zh = { class: "step-label" }, Lh = /* @__PURE__ */ ee({
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
    function l(p) {
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
        (s(!0), o(V, null, oe(t.steps, (u) => (s(), o("div", {
          key: u.id,
          class: me(["step", n(u.id)])
        }, [
          e("span", Rh, a(l(u.id)), 1),
          e("span", zh, a(u.label), 1)
        ], 2))), 128))
      ])) : d("", !0)
    ]));
  }
}), es = /* @__PURE__ */ te(Lh, [["__scopeId", "data-v-9d1de66c"]]), Ph = {
  key: 0,
  class: "create-env-form"
}, Dh = { class: "form-field" }, Nh = { class: "form-field" }, Uh = ["value"], Oh = { class: "form-field" }, Bh = ["disabled"], Ah = ["value"], Fh = { class: "form-field" }, Vh = ["value"], Wh = { class: "form-field form-field--checkbox" }, Gh = { class: "form-checkbox" }, jh = {
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
    const n = c, { getComfyUIReleases: l, createEnvironment: p, getCreateProgress: g } = Ae(), u = $(""), v = $(Ws), r = $("latest"), m = $(Gs), y = $(!1), w = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), k = $(!1), _ = $(!1), M = $({
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
    ], N = $(null);
    function z() {
      _.value || n("close");
    }
    async function x() {
      const R = u.value.trim();
      if (R) {
        _.value = !0, M.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const O = {
            name: R,
            python_version: v.value,
            comfyui_version: r.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, le = await p(O);
          le.status === "started" ? J() : le.status === "error" && (M.value = {
            progress: 0,
            message: le.message || "Failed to start creation",
            error: le.message
          });
        } catch (O) {
          M.value = {
            progress: 0,
            message: O instanceof Error ? O.message : "Unknown error",
            error: O instanceof Error ? O.message : "Unknown error"
          };
        }
      }
    }
    function J() {
      F || (f = 0, F = window.setInterval(async () => {
        try {
          const R = await g();
          f = 0, M.value = {
            progress: R.progress ?? 0,
            message: R.message,
            phase: R.phase,
            error: R.error
          }, R.state === "complete" ? (A(), n("created", R.environment_name || u.value.trim(), y.value)) : R.state === "error" ? (A(), M.value.error = R.error || R.message) : R.state === "idle" && _.value && (A(), M.value.error = "Creation was interrupted. Please try again.");
        } catch {
          f++, f >= Xh && (A(), M.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function A() {
      F && (clearInterval(F), F = null);
    }
    function W() {
      _.value = !1, M.value = { progress: 0, message: "" }, n("close");
    }
    async function T() {
      k.value = !0;
      try {
        w.value = await l();
      } catch (R) {
        console.error("Failed to load ComfyUI releases:", R);
      } finally {
        k.value = !1;
      }
    }
    return Ue(async () => {
      var R;
      await uo(), (R = N.value) == null || R.focus(), T();
    }), zs(() => {
      A();
    }), (R, O) => (s(), E(Ye, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !_.value,
      onClose: z
    }, {
      body: i(() => [
        _.value ? (s(), o("div", jh, [
          e("p", Hh, [
            O[11] || (O[11] = h(" Creating environment ", -1)),
            e("strong", null, a(u.value), 1),
            O[12] || (O[12] = h("... ", -1))
          ]),
          b(es, {
            progress: M.value.progress,
            message: M.value.message,
            "current-phase": M.value.phase,
            variant: M.value.error ? "error" : "default",
            "show-steps": !0,
            steps: C
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          M.value.error ? d("", !0) : (s(), o("p", qh, " This may take several minutes. Please wait... ")),
          M.value.error ? (s(), o("div", Kh, [
            e("p", Jh, a(M.value.error), 1)
          ])) : d("", !0)
        ])) : (s(), o("div", Ph, [
          e("div", Dh, [
            O[6] || (O[6] = e("label", { class: "form-label" }, "Name", -1)),
            Oe(e("input", {
              ref_key: "nameInput",
              ref: N,
              "onUpdate:modelValue": O[0] || (O[0] = (le) => u.value = le),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: ht(x, ["enter"])
            }, null, 544), [
              [Tt, u.value]
            ])
          ]),
          e("div", Nh, [
            O[7] || (O[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Oe(e("select", {
              "onUpdate:modelValue": O[1] || (O[1] = (le) => v.value = le),
              class: "form-select"
            }, [
              (s(!0), o(V, null, oe($e(Vs), (le) => (s(), o("option", {
                key: le,
                value: le
              }, a(le), 9, Uh))), 128))
            ], 512), [
              [Rt, v.value]
            ])
          ]),
          e("div", Oh, [
            O[8] || (O[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Oe(e("select", {
              "onUpdate:modelValue": O[2] || (O[2] = (le) => r.value = le),
              class: "form-select",
              disabled: k.value
            }, [
              (s(!0), o(V, null, oe(w.value, (le) => (s(), o("option", {
                key: le.tag_name,
                value: le.tag_name
              }, a(le.name), 9, Ah))), 128))
            ], 8, Bh), [
              [Rt, r.value]
            ])
          ]),
          e("div", Fh, [
            O[9] || (O[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Oe(e("select", {
              "onUpdate:modelValue": O[3] || (O[3] = (le) => m.value = le),
              class: "form-select"
            }, [
              (s(!0), o(V, null, oe($e(fs), (le) => (s(), o("option", {
                key: le,
                value: le
              }, a(le) + a(le === "auto" ? " (detect GPU)" : ""), 9, Vh))), 128))
            ], 512), [
              [Rt, m.value]
            ])
          ]),
          e("div", Wh, [
            e("label", Gh, [
              Oe(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": O[4] || (O[4] = (le) => y.value = le)
              }, null, 512), [
                [Xt, y.value]
              ]),
              O[10] || (O[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: i(() => [
        _.value ? (s(), o(V, { key: 1 }, [
          M.value.error ? (s(), E(ve, {
            key: 0,
            variant: "secondary",
            onClick: W
          }, {
            default: i(() => [...O[15] || (O[15] = [
              h(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", Yh, " Creating environment... "))
        ], 64)) : (s(), o(V, { key: 0 }, [
          b(ve, {
            variant: "primary",
            disabled: !u.value.trim(),
            onClick: x
          }, {
            default: i(() => [...O[13] || (O[13] = [
              h(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(ve, {
            variant: "secondary",
            onClick: O[5] || (O[5] = (le) => n("close"))
          }, {
            default: i(() => [...O[14] || (O[14] = [
              h(" Cancel ", -1)
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
    const l = n, { getEnvironments: p } = Ae(), g = $([]), u = $(!1), v = $(null), r = $(""), m = $(!1), y = $(!1), w = $(null), k = U(() => {
      if (!r.value.trim()) return g.value;
      const N = r.value.toLowerCase();
      return g.value.filter(
        (z) => {
          var x;
          return z.name.toLowerCase().includes(N) || ((x = z.current_branch) == null ? void 0 : x.toLowerCase().includes(N));
        }
      );
    });
    function _(N, z) {
      y.value = !1, l("created", N, z);
    }
    function M() {
      y.value = !0;
    }
    function F(N) {
      w.value = N;
    }
    function f(N) {
      w.value = null, l("delete", N);
    }
    async function C() {
      u.value = !0, v.value = null;
      try {
        g.value = await p();
      } catch (N) {
        v.value = N instanceof Error ? N.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return Ue(C), c({
      loadEnvironments: C,
      openCreateModal: M
    }), (N, z) => (s(), o(V, null, [
      b(Ke, null, {
        header: i(() => [
          b(Je, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (x) => m.value = !0)
          }, {
            actions: i(() => [
              b(ne, {
                variant: "primary",
                size: "sm",
                onClick: M
              }, {
                default: i(() => [...z[6] || (z[6] = [
                  h(" Create ", -1)
                ])]),
                _: 1
              }),
              b(ne, {
                variant: "secondary",
                size: "sm",
                onClick: C
              }, {
                default: i(() => [...z[7] || (z[7] = [
                  h(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          b(Lt, {
            modelValue: r.value,
            "onUpdate:modelValue": z[1] || (z[1] = (x) => r.value = x),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          u.value ? (s(), E(wt, {
            key: 0,
            message: "Loading environments..."
          })) : v.value ? (s(), E(kt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            k.value.length ? (s(), E(Be, {
              key: 0,
              title: "ENVIRONMENTS",
              count: k.value.length
            }, {
              default: i(() => [
                (s(!0), o(V, null, oe(k.value, (x) => (s(), E(oh, {
                  key: x.name,
                  "environment-name": x.name,
                  "is-current": x.is_current,
                  "current-branch": x.current_branch,
                  "show-last-used": !1
                }, {
                  actions: i(() => [
                    x.is_current ? d("", !0) : (s(), E(ne, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (J) => N.$emit("switch", x.name)
                    }, {
                      default: i(() => [...z[8] || (z[8] = [
                        h(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    b(ne, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (J) => F(x)
                    }, {
                      default: i(() => [...z[9] || (z[9] = [
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
            k.value.length ? d("", !0) : (s(), E(it, {
              key: 1,
              icon: "🌍",
              message: r.value ? `No environments match '${r.value}'` : "No environments found. Create one to get started!"
            }, Wt({ _: 2 }, [
              r.value ? void 0 : {
                name: "actions",
                fn: i(() => [
                  b(ne, {
                    variant: "primary",
                    onClick: M
                  }, {
                    default: i(() => [...z[10] || (z[10] = [
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
        onClose: z[3] || (z[3] = (x) => m.value = !1)
      }, {
        content: i(() => [...z[11] || (z[11] = [
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
        actions: i(() => [
          b(ne, {
            variant: "secondary",
            onClick: z[2] || (z[2] = (x) => m.value = !1)
          }, {
            default: i(() => [...z[12] || (z[12] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (s(), E($h, {
        key: 0,
        environment: w.value,
        "can-delete": g.value.length > 1,
        onClose: z[4] || (z[4] = (x) => w.value = null),
        onDelete: f
      }, null, 8, ["environment", "can-delete"])) : d("", !0),
      y.value ? (s(), E(Zh, {
        key: 1,
        onClose: z[5] || (z[5] = (x) => y.value = !1),
        onCreated: _
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
    const c = t, n = $(!1);
    async function l() {
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
    function l(p) {
      const g = c.issues[p];
      return n[p] || g.details.length <= 3 ? g.details : g.details.slice(0, 3);
    }
    return (p, g) => (s(), E(Ye, {
      title: "Cannot Export",
      size: "md",
      onClose: g[1] || (g[1] = (u) => p.$emit("close"))
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
            (s(!0), o(V, null, oe(t.issues, (u, v) => (s(), o("div", {
              key: v,
              class: "issue-item"
            }, [
              e("div", d1, a(u.message), 1),
              u.details.length ? (s(), o("div", c1, [
                (s(!0), o(V, null, oe(l(v), (r, m) => (s(), o("div", {
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
      footer: i(() => [
        b(ve, {
          variant: "primary",
          onClick: g[0] || (g[0] = (u) => p.$emit("close"))
        }, {
          default: i(() => [...g[3] || (g[3] = [
            h(" Understood ", -1)
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
    const n = t, l = c, p = $(!1), g = $(null), u = U(() => p.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function v() {
      g.value = null, l("revalidate");
    }
    return (r, m) => (s(), o(V, null, [
      b(Ye, {
        title: "Export Warnings",
        size: "md",
        onClose: m[3] || (m[3] = (y) => r.$emit("cancel"))
      }, {
        body: i(() => [
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
                  (s(!0), o(V, null, oe(u.value, (y) => (s(), o("div", {
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
        footer: i(() => [
          b(ve, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (y) => r.$emit("cancel"))
          }, {
            default: i(() => [...m[7] || (m[7] = [
              h(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          b(ve, {
            variant: "primary",
            onClick: m[2] || (m[2] = (y) => r.$emit("confirm"))
          }, {
            default: i(() => [
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
}), I1 = /* @__PURE__ */ te(S1, [["__scopeId", "data-v-b698d882"]]), E1 = { class: "export-card" }, M1 = { class: "export-path-row" }, T1 = { class: "export-actions" }, R1 = {
  key: 1,
  class: "export-warning"
}, z1 = /* @__PURE__ */ ee({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: c, exportEnvWithForce: n } = Ae(), l = $(""), p = $(!1), g = $(!1), u = $(!1), v = $(null), r = $(!1), m = $(null), y = $(!1), w = $(!1), k = U(() => p.value ? "Validating..." : g.value ? "Exporting..." : "Export Environment");
    async function _() {
      p.value = !0, v.value = null;
      try {
        const z = await c();
        m.value = z, z.can_export ? z.warnings.models_without_sources.length > 0 ? w.value = !0 : await f() : y.value = !0;
      } catch (z) {
        v.value = {
          status: "error",
          message: z instanceof Error ? z.message : "Validation failed"
        };
      } finally {
        p.value = !1;
      }
    }
    async function M() {
      w.value = !1, await f();
    }
    async function F() {
      try {
        const z = await c();
        m.value = z;
      } catch (z) {
        console.error("Re-validation failed:", z);
      }
    }
    async function f() {
      g.value = !0;
      try {
        const z = await n(l.value || void 0);
        v.value = z;
      } catch (z) {
        v.value = {
          status: "error",
          message: z instanceof Error ? z.message : "Export failed"
        };
      } finally {
        g.value = !1;
      }
    }
    async function C() {
      var z;
      if ((z = v.value) != null && z.path)
        try {
          await navigator.clipboard.writeText(v.value.path);
        } catch (x) {
          console.error("Failed to copy path:", x);
        }
    }
    async function N() {
      var z;
      if ((z = v.value) != null && z.path) {
        u.value = !0;
        try {
          const x = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(v.value.path)}`);
          if (!x.ok)
            throw new Error(`Download failed: ${x.statusText}`);
          const J = await x.blob(), A = URL.createObjectURL(J), W = v.value.path.split("/").pop() || "environment-export.tar.gz", T = document.createElement("a");
          T.href = A, T.download = W, document.body.appendChild(T), T.click(), document.body.removeChild(T), URL.revokeObjectURL(A);
        } catch (x) {
          console.error("Failed to download:", x), alert(`Download failed: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
      }
    }
    return (z, x) => (s(), o(V, null, [
      b(Ke, null, {
        header: i(() => [
          b(Je, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (J) => r.value = !0)
          })
        ]),
        content: i(() => [
          b(Be, { title: "EXPORT OPTIONS" }, {
            default: i(() => [
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
                    modelValue: l.value,
                    "onUpdate:modelValue": x[1] || (x[1] = (J) => l.value = J),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", T1, [
                  b(ne, {
                    variant: "primary",
                    size: "md",
                    loading: p.value || g.value,
                    disabled: p.value || g.value,
                    onClick: _
                  }, {
                    default: i(() => [
                      x[6] || (x[6] = e("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        e("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        e("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      h(" " + a(k.value), 1)
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
            default: i(() => [
              b(qe, {
                status: v.value.status === "success" ? "synced" : "broken"
              }, Wt({
                icon: i(() => [
                  h(a(v.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: i(() => [
                  h(a(v.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: i(() => [
                  h(a(v.value.status === "success" ? "Your environment has been exported" : v.value.message), 1)
                ]),
                _: 2
              }, [
                v.value.status === "success" ? {
                  name: "details",
                  fn: i(() => [
                    b(Ne, { label: "Saved to:" }, {
                      default: i(() => [
                        b(l1, {
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
                    v.value.models_without_sources && v.value.models_without_sources > 0 ? (s(), o("div", R1, [...x[8] || (x[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : d("", !0)
                  ]),
                  key: "0"
                } : void 0,
                v.value.status === "success" ? {
                  name: "actions",
                  fn: i(() => [
                    b(ne, {
                      variant: "primary",
                      size: "sm",
                      loading: u.value,
                      onClick: N
                    }, {
                      default: i(() => [...x[9] || (x[9] = [
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
                    b(ne, {
                      variant: "secondary",
                      size: "sm",
                      onClick: C
                    }, {
                      default: i(() => [...x[10] || (x[10] = [
                        h(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    b(ne, {
                      variant: "ghost",
                      size: "sm",
                      onClick: x[2] || (x[2] = (J) => v.value = null)
                    }, {
                      default: i(() => [...x[11] || (x[11] = [
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
        onClose: x[3] || (x[3] = (J) => r.value = !1)
      }, {
        content: i(() => [...x[12] || (x[12] = [
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
      y.value && m.value ? (s(), E(f1, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: x[4] || (x[4] = (J) => y.value = !1)
      }, null, 8, ["issues"])) : d("", !0),
      w.value && m.value ? (s(), E(I1, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: M,
        onCancel: x[5] || (x[5] = (J) => w.value = !1),
        onRevalidate: F
      }, null, 8, ["models"])) : d("", !0)
    ], 64));
  }
}), L1 = /* @__PURE__ */ te(z1, [["__scopeId", "data-v-f4d120f2"]]), P1 = { class: "file-input-wrapper" }, D1 = ["accept", "multiple", "disabled"], N1 = /* @__PURE__ */ ee({
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
    const l = n, p = $(null);
    function g() {
      var v;
      (v = p.value) == null || v.click();
    }
    function u(v) {
      const r = v.target;
      r.files && r.files.length > 0 && (l("change", r.files), r.value = "");
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
      b(ne, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: g
      }, {
        default: i(() => [
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
}), U1 = /* @__PURE__ */ te(N1, [["__scopeId", "data-v-cd192091"]]), O1 = {
  key: 0,
  class: "drop-zone-empty"
}, B1 = { class: "drop-zone-text" }, A1 = { class: "drop-zone-primary" }, F1 = { class: "drop-zone-secondary" }, V1 = { class: "drop-zone-actions" }, W1 = {
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
    const n = c, l = $(!1), p = $(null), g = $(0), u = U(() => p.value !== null), v = U(() => {
      var f;
      return ((f = p.value) == null ? void 0 : f.name) || "";
    }), r = U(() => {
      if (!p.value) return "";
      const f = p.value.size;
      return f < 1024 ? `${f} B` : f < 1024 * 1024 ? `${(f / 1024).toFixed(1)} KB` : f < 1024 * 1024 * 1024 ? `${(f / (1024 * 1024)).toFixed(1)} MB` : `${(f / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m(f) {
      var C;
      f.stopPropagation(), g.value++, (C = f.dataTransfer) != null && C.types.includes("Files") && (l.value = !0);
    }
    function y(f) {
      f.stopPropagation(), f.dataTransfer && (f.dataTransfer.dropEffect = "copy");
    }
    function w(f) {
      f.stopPropagation(), g.value--, g.value === 0 && (l.value = !1);
    }
    function k(f) {
      var N;
      f.stopPropagation(), g.value = 0, l.value = !1;
      const C = (N = f.dataTransfer) == null ? void 0 : N.files;
      C && C.length > 0 && M(C[0]);
    }
    function _(f) {
      f.length > 0 && M(f[0]);
    }
    function M(f) {
      p.value = f, n("fileSelected", f);
    }
    function F() {
      p.value = null, n("clear");
    }
    return (f, C) => (s(), o("div", {
      class: me(["file-drop-zone", { "drop-active": l.value, "has-file": u.value }]),
      onDragenter: ze(m, ["prevent"]),
      onDragover: ze(y, ["prevent"]),
      onDragleave: ze(w, ["prevent"]),
      onDrop: ze(k, ["prevent"])
    }, [
      u.value ? (s(), o("div", W1, [
        e("div", G1, [
          C[1] || (C[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", j1, [
            e("div", H1, a(v.value), 1),
            e("div", q1, a(r.value), 1)
          ])
        ]),
        b(ne, {
          variant: "ghost",
          size: "xs",
          onClick: F,
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
          e("p", A1, a(t.primaryText), 1),
          e("p", F1, a(t.secondaryText), 1)
        ]),
        e("div", V1, [
          b(U1, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "sm",
            onChange: _
          }, {
            default: i(() => [
              h(a(t.buttonText), 1)
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
    const c = t, n = U(() => c.workflows.length), l = U(() => c.models.length), p = U(() => c.nodes.length);
    function g(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, v) => (s(), o("div", Y1, [
      e("div", X1, [
        b(tt, null, {
          default: i(() => [...v[0] || (v[0] = [
            h("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", Q1, [
          v[1] || (v[1] = h(" From: ", -1)),
          b(ls, null, {
            default: i(() => [
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
            (s(!0), o(V, null, oe(t.workflows.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
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
              e("div", cy, a(l.value) + " file" + a(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", uy, [
            (s(!0), o(V, null, oe(t.models.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
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
            (s(!0), o(V, null, oe(t.nodes.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
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
            t.gitBranch ? (s(), E(Ne, {
              key: 0,
              label: "Branch"
            }, {
              default: i(() => [
                b(ls, null, {
                  default: i(() => [
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
              default: i(() => [
                b(Ps, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : d("", !0)
          ])
        ])) : d("", !0)
      ])
    ]));
  }
}), Sy = /* @__PURE__ */ te(xy, [["__scopeId", "data-v-182fe113"]]), Iy = { class: "import-config" }, Ey = { class: "config-container" }, My = { class: "config-field" }, Ty = { class: "input-wrapper" }, Ry = ["value"], zy = {
  key: 0,
  class: "validating-indicator"
}, Ly = {
  key: 1,
  class: "valid-indicator"
}, Py = {
  key: 0,
  class: "field-error"
}, Dy = { class: "config-field" }, Ny = { class: "strategy-options" }, Uy = ["value", "checked", "onChange"], Oy = { class: "strategy-content" }, By = { class: "strategy-label" }, Ay = { class: "strategy-description" }, Fy = { class: "config-field switch-field" }, Vy = { class: "switch-label" }, Wy = ["checked"], Gy = { class: "advanced-section" }, jy = { class: "advanced-content" }, Hy = { class: "config-field" }, qy = ["value"], Ky = ["value"], Jy = /* @__PURE__ */ ee({
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
    const n = t, l = c, p = $(!1), g = $(!1);
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
      l("update:name", w), g.value = !1, v && clearTimeout(v), w.length > 0 ? (p.value = !0, v = setTimeout(() => {
        l("validate-name", w);
      }, 400)) : p.value = !1;
    }
    function m() {
      n.name.length > 0 && l("validate-name", n.name);
    }
    return (y, w) => (s(), o("div", Iy, [
      b(tt, null, {
        default: i(() => [...w[2] || (w[2] = [
          h("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", Ey, [
        e("div", My, [
          b(Jt, { required: "" }, {
            default: i(() => [...w[3] || (w[3] = [
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
            default: i(() => [...w[5] || (w[5] = [
              h("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", Ny, [
            (s(), o(V, null, oe(u, (k) => e("label", {
              key: k.value,
              class: me(["strategy-option", { active: t.modelStrategy === k.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: k.value,
                checked: t.modelStrategy === k.value,
                onChange: (_) => l("update:modelStrategy", k.value)
              }, null, 40, Uy),
              e("div", Oy, [
                e("span", By, a(k.label), 1),
                e("span", Ay, a(k.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Fy, [
          e("label", Vy, [
            e("input", {
              type: "checkbox",
              checked: t.switchAfterImport,
              onChange: w[0] || (w[0] = (k) => l("update:switchAfterImport", k.target.checked))
            }, null, 40, Wy),
            w[6] || (w[6] = e("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        e("details", Gy, [
          w[8] || (w[8] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", jy, [
            e("div", Hy, [
              b(Jt, null, {
                default: i(() => [...w[7] || (w[7] = [
                  h("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              e("select", {
                class: "backend-select",
                value: t.torchBackend,
                onChange: w[1] || (w[1] = (k) => l("update:torchBackend", k.target.value))
              }, [
                (s(!0), o(V, null, oe($e(fs), (k) => (s(), o("option", {
                  key: k,
                  value: k
                }, a(k) + a(k === "auto" ? " (detect GPU)" : ""), 9, Ky))), 128))
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
    var Re, de, fe, Me;
    const l = t, p = n, { previewTarballImport: g, previewGitImport: u, validateEnvironmentName: v, executeImport: r, executeGitImport: m, getImportProgress: y } = Ae();
    let w = null;
    const k = $(null), _ = $(l.resumeImport ?? !1), M = $(!1), F = $(!1), f = $(""), C = $(!1), N = $(null), z = $(""), x = $(null), J = $(!1), A = $(null), W = $(null), T = $({
      name: ((Re = l.initialProgress) == null ? void 0 : Re.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), R = $(null), O = $({
      message: ((de = l.initialProgress) == null ? void 0 : de.message) ?? "Preparing import...",
      phase: ((fe = l.initialProgress) == null ? void 0 : fe.phase) ?? "",
      progress: ((Me = l.initialProgress) == null ? void 0 : Me.progress) ?? 0,
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
    ], se = U(() => {
      if (!W.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const ie = W.value;
      return {
        sourceEnvironment: ie.comfyui_version ? `ComfyUI ${ie.comfyui_version}` : "Unknown",
        workflows: ie.workflows.map((K) => K.name),
        models: ie.models.map((K) => ({
          filename: K.filename,
          size: 0,
          type: K.relative_path.split("/")[0] || "model"
        })),
        nodes: ie.nodes.map((K) => K.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), X = U(() => !C.value && !N.value && W.value && T.value.name.length > 0 && !R.value && (k.value || x.value));
    async function ce(ie) {
      k.value = ie, C.value = !0, N.value = null, W.value = null;
      try {
        const K = await g(ie);
        W.value = K;
      } catch (K) {
        N.value = K instanceof Error ? K.message : "Failed to analyze file", console.error("Preview error:", K);
      } finally {
        C.value = !1;
      }
    }
    function Y() {
      k.value = null, x.value = null, z.value = "", A.value = null, M.value = !1, F.value = !1, f.value = "", W.value = null, N.value = null, T.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, R.value = null, p("source-cleared");
    }
    function D() {
      be(), Y(), _.value = !1, C.value = !1, J.value = !1, O.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function P() {
      if (z.value.trim()) {
        J.value = !0, A.value = null;
        try {
          const ie = await u(z.value.trim());
          x.value = z.value.trim(), W.value = ie;
        } catch (ie) {
          A.value = ie instanceof Error ? ie.message : "Failed to analyze repository";
        } finally {
          J.value = !1;
        }
      }
    }
    function S(ie) {
      try {
        const K = new URL(ie);
        return K.host + K.pathname.replace(/\.git$/, "");
      } catch {
        return ie;
      }
    }
    async function re(ie) {
      if (!ie) {
        R.value = "Environment name is required";
        return;
      }
      try {
        const K = await v(ie);
        R.value = K.valid ? null : K.error || "Invalid name";
      } catch {
        R.value = "Failed to validate name";
      }
    }
    async function Z() {
      if (T.value.name && !(!k.value && !x.value)) {
        _.value = !0, M.value = !1, O.value = { message: `Creating environment '${T.value.name}'...`, phase: "", progress: 0, error: null }, p("import-started");
        try {
          let ie;
          if (k.value)
            ie = await r(
              k.value,
              T.value.name,
              T.value.modelStrategy,
              T.value.torchBackend
            );
          else if (x.value)
            ie = await m(
              x.value,
              T.value.name,
              T.value.modelStrategy,
              T.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          ie.status === "started" ? ke() : (F.value = !1, f.value = ie.message, _.value = !1, M.value = !0);
        } catch (ie) {
          F.value = !1, f.value = ie instanceof Error ? ie.message : "Unknown error occurred during import", _.value = !1, M.value = !0;
        }
      }
    }
    async function ke() {
      if (w) return;
      const ie = async () => {
        try {
          const Ie = await y();
          return O.value = {
            message: Ie.message,
            phase: Ie.phase || "",
            progress: Ie.progress ?? (Ie.state === "importing" ? 50 : 0),
            error: Ie.error || null
          }, Ie.state === "complete" ? (be(), F.value = !0, f.value = `Environment '${Ie.environment_name}' created successfully`, _.value = !1, M.value = !0, Ie.environment_name && p("import-complete", Ie.environment_name, T.value.switchAfterImport), !1) : Ie.state === "error" ? (be(), F.value = !1, f.value = Ie.error || Ie.message, _.value = !1, M.value = !0, !1) : !0;
        } catch (Ie) {
          return console.error("Failed to poll import progress:", Ie), !0;
        }
      };
      await ie() && (w = setInterval(async () => {
        await ie() || be();
      }, 2e3));
    }
    function be() {
      w && (clearInterval(w), w = null);
    }
    function Te(ie) {
      return ie < 1024 ? `${ie} B` : ie < 1024 * 1024 ? `${(ie / 1024).toFixed(1)} KB` : ie < 1024 * 1024 * 1024 ? `${(ie / (1024 * 1024)).toFixed(1)} MB` : `${(ie / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Ue(async () => {
      try {
        const ie = await y();
        console.log("[ComfyGit ImportFlow] Import progress check:", ie.state, ie), ie.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", ie.environment_name), _.value = !0, T.value.name = ie.environment_name || T.value.name || "", O.value = {
          progress: ie.progress ?? 0,
          message: ie.message || "Importing...",
          phase: ie.phase || "",
          error: null
        }, ke());
      } catch (ie) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", ie);
      }
    }), c({
      handleReset: D,
      isImporting: _,
      canImport: X
    }), (ie, K) => {
      var Ie;
      return s(), o("div", Xy, [
        !k.value && !x.value && !_.value ? (s(), o("div", Qy, [
          b(J1, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: ce
          }),
          K[7] || (K[7] = e("div", { class: "import-divider" }, [
            e("span", null, "or")
          ], -1)),
          e("div", Zy, [
            K[5] || (K[5] = e("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            e("div", e0, [
              Oe(e("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": K[0] || (K[0] = (_e) => z.value = _e),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: ht(P, ["enter"]),
                disabled: J.value
              }, null, 40, t0), [
                [Tt, z.value]
              ]),
              b(ne, {
                variant: "primary",
                size: "sm",
                disabled: !z.value.trim() || J.value,
                onClick: P
              }, {
                default: i(() => [
                  h(a(J.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            A.value ? (s(), o("div", s0, a(A.value), 1)) : d("", !0),
            K[6] || (K[6] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (k.value || x.value) && !_.value && !M.value ? (s(), o("div", o0, [
          e("div", n0, [
            k.value ? (s(), o("div", a0, [
              K[8] || (K[8] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", l0, [
                e("div", i0, a(k.value.name), 1),
                e("div", r0, a(Te(k.value.size)), 1)
              ])
            ])) : x.value ? (s(), o("div", d0, [
              K[10] || (K[10] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
              e("div", c0, [
                e("div", u0, a(S(x.value)), 1),
                K[9] || (K[9] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : d("", !0),
            b(ne, {
              variant: "ghost",
              size: "sm",
              onClick: Y
            }, {
              default: i(() => [...K[11] || (K[11] = [
                h(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          C.value ? (s(), o("div", m0, [...K[12] || (K[12] = [
            e("div", { class: "loading-spinner" }, null, -1),
            e("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : N.value ? (s(), E(nt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [N.value]
          }, null, 8, ["details"])) : W.value ? (s(), E(Sy, {
            key: 2,
            "source-environment": se.value.sourceEnvironment,
            workflows: se.value.workflows,
            models: se.value.models,
            nodes: se.value.nodes,
            "git-branch": se.value.gitBranch,
            "git-commit": se.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : d("", !0),
          W.value ? (s(), E(Yy, {
            key: 3,
            name: T.value.name,
            "onUpdate:name": K[1] || (K[1] = (_e) => T.value.name = _e),
            "model-strategy": T.value.modelStrategy,
            "onUpdate:modelStrategy": K[2] || (K[2] = (_e) => T.value.modelStrategy = _e),
            "torch-backend": T.value.torchBackend,
            "onUpdate:torchBackend": K[3] || (K[3] = (_e) => T.value.torchBackend = _e),
            "switch-after-import": T.value.switchAfterImport,
            "onUpdate:switchAfterImport": K[4] || (K[4] = (_e) => T.value.switchAfterImport = _e),
            "name-error": R.value,
            onValidateName: re
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : d("", !0),
          T.value.modelStrategy === "skip" && ((Ie = W.value) != null && Ie.models_needing_download) ? (s(), E(nt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${W.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : d("", !0),
          e("div", v0, [
            b(ne, {
              variant: "secondary",
              size: "md",
              onClick: Y
            }, {
              default: i(() => [...K[13] || (K[13] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(ne, {
              variant: "primary",
              size: "md",
              disabled: !X.value,
              onClick: Z
            }, {
              default: i(() => [...K[14] || (K[14] = [
                h(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : _.value ? (s(), o("div", f0, [
          e("p", g0, [
            K[15] || (K[15] = h(" Importing environment ", -1)),
            e("strong", null, a(T.value.name), 1),
            K[16] || (K[16] = h("... ", -1))
          ]),
          b(es, {
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
        ])) : M.value ? (s(), o("div", w0, [
          e("div", {
            class: me(["complete-icon", F.value ? "success" : "error"])
          }, a(F.value ? "✓" : "✕"), 3),
          e("div", k0, [
            e("div", b0, a(F.value ? "Import Successful" : "Import Failed"), 1),
            e("div", _0, a(f.value), 1)
          ]),
          e("div", $0, [
            b(ne, {
              variant: "primary",
              size: "md",
              onClick: D
            }, {
              default: i(() => [...K[17] || (K[17] = [
                h(" Import Another ", -1)
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
    const n = c, l = $(!1);
    function p(g, u) {
      u && n("import-complete-switch", g);
    }
    return (g, u) => (s(), o(V, null, [
      b(Ke, null, {
        header: i(() => [
          b(Je, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: u[0] || (u[0] = (v) => l.value = !0)
          })
        ]),
        content: i(() => [
          b(Hs, { onImportComplete: p })
        ]),
        _: 1
      }),
      b(mt, {
        show: l.value,
        title: "How Import Works",
        onClose: u[1] || (u[1] = (v) => l.value = !1)
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
}, A0 = {
  key: 0,
  class: "version"
}, F0 = {
  key: 2,
  class: "change-group"
}, V0 = { class: "change-item" }, W0 = /* @__PURE__ */ ee({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = Ae(), l = $(null), p = $(!0), g = U(() => {
      if (!l.value) return !1;
      const v = l.value.changes.workflows;
      return v.added.length > 0 || v.modified.length > 0 || v.deleted.length > 0;
    }), u = U(() => {
      if (!l.value) return !1;
      const v = l.value.changes.nodes;
      return v.added.length > 0 || v.removed.length > 0;
    });
    return Ue(async () => {
      try {
        l.value = await n(c.commit.hash);
      } finally {
        p.value = !1;
      }
    }), (v, r) => (s(), E(Ye, {
      size: "md",
      "show-close-button": !1,
      onClose: r[3] || (r[3] = (m) => v.$emit("close"))
    }, {
      header: i(() => {
        var m, y, w, k;
        return [
          e("div", I0, [
            r[4] || (r[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", E0, a(((m = l.value) == null ? void 0 : m.short_hash) || t.commit.short_hash || ((y = t.commit.hash) == null ? void 0 : y.slice(0, 7))), 1),
            (k = (w = l.value) == null ? void 0 : w.refs) != null && k.length ? (s(), o("span", M0, [
              (s(!0), o(V, null, oe(l.value.refs, (_) => (s(), o("span", {
                key: _,
                class: "ref-badge"
              }, a(_), 1))), 128))
            ])) : d("", !0)
          ]),
          b(ve, {
            variant: "ghost",
            size: "sm",
            onClick: r[0] || (r[0] = (_) => v.$emit("close"))
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
        var m, y;
        return [
          e("div", T0, a(((m = l.value) == null ? void 0 : m.message) || t.commit.message), 1),
          e("div", R0, a(((y = l.value) == null ? void 0 : y.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          p.value ? (s(), o("div", z0, "Loading details...")) : l.value ? (s(), o("div", L0, [
            e("div", P0, [
              e("span", D0, a(l.value.stats.files_changed) + " files", 1),
              e("span", N0, "+" + a(l.value.stats.insertions), 1),
              e("span", U0, "-" + a(l.value.stats.deletions), 1)
            ]),
            g.value ? (s(), o("div", O0, [
              b(At, { variant: "section" }, {
                default: i(() => [...r[6] || (r[6] = [
                  h("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(V, null, oe(l.value.changes.workflows.added, (w) => (s(), o("div", {
                key: "add-" + w,
                class: "change-item added"
              }, [
                r[7] || (r[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(w), 1)
              ]))), 128)),
              (s(!0), o(V, null, oe(l.value.changes.workflows.modified, (w) => (s(), o("div", {
                key: "mod-" + w,
                class: "change-item modified"
              }, [
                r[8] || (r[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(w), 1)
              ]))), 128)),
              (s(!0), o(V, null, oe(l.value.changes.workflows.deleted, (w) => (s(), o("div", {
                key: "del-" + w,
                class: "change-item deleted"
              }, [
                r[9] || (r[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(w), 1)
              ]))), 128))
            ])) : d("", !0),
            u.value ? (s(), o("div", B0, [
              b(At, { variant: "section" }, {
                default: i(() => [...r[10] || (r[10] = [
                  h("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(V, null, oe(l.value.changes.nodes.added, (w) => (s(), o("div", {
                key: "add-" + w.name,
                class: "change-item added"
              }, [
                r[11] || (r[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(w.name), 1),
                w.version ? (s(), o("span", A0, "(" + a(w.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (s(!0), o(V, null, oe(l.value.changes.nodes.removed, (w) => (s(), o("div", {
                key: "rem-" + w.name,
                class: "change-item deleted"
              }, [
                r[12] || (r[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(w.name), 1)
              ]))), 128))
            ])) : d("", !0),
            l.value.changes.models.resolved > 0 ? (s(), o("div", F0, [
              b(At, { variant: "section" }, {
                default: i(() => [...r[13] || (r[13] = [
                  h("MODELS", -1)
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
        b(ve, {
          variant: "secondary",
          onClick: r[1] || (r[1] = (m) => v.$emit("createBranch", t.commit))
        }, {
          default: i(() => [...r[15] || (r[15] = [
            h(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        b(ve, {
          variant: "primary",
          onClick: r[2] || (r[2] = (m) => v.$emit("checkout", t.commit))
        }, {
          default: i(() => [...r[16] || (r[16] = [
            h(" Checkout ", -1)
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
        onInput: n[0] || (n[0] = (l) => c.$emit("update:modelValue", l.target.value)),
        onKeydown: [
          n[1] || (n[1] = ht(ze((l) => c.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = ht(ze((l) => c.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, H0),
      t.showCharCount && t.maxLength ? (s(), o("div", q0, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : d("", !0)
    ]));
  }
}), Is = /* @__PURE__ */ te(K0, [["__scopeId", "data-v-5516e6fc"]]), J0 = ["checked", "disabled"], Y0 = { class: "base-checkbox-box" }, X0 = {
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
}, Tw = { class: "error-header" }, Rw = { class: "error-title" }, zw = { class: "issues-list" }, Lw = { class: "message-section" }, Pw = { class: "popover-footer" }, Dw = /* @__PURE__ */ ee({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, l = c, { commit: p } = Ae(), g = $(""), u = $(!1), v = $(!1), r = $(null), m = U(() => {
      if (!n.status) return !1;
      const F = n.status.workflows;
      return F.new.length > 0 || F.modified.length > 0 || F.deleted.length > 0 || n.status.has_changes;
    }), y = U(() => {
      if (!n.status) return !1;
      const F = n.status.workflows, f = n.status.git_changes;
      return F.new.length > 0 || F.modified.length > 0 || F.deleted.length > 0 || f.nodes_added.length > 0 || f.nodes_removed.length > 0;
    }), w = U(() => {
      var F;
      return (F = n.status) != null && F.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (f) => f.has_issues && (f.sync_state === "new" || f.sync_state === "modified")
      ) : [];
    }), k = U(() => w.value.length > 0), _ = U(() => k.value && !v.value);
    async function M() {
      var F, f, C;
      if (!(k.value && !v.value) && !(!m.value || !g.value.trim() || u.value)) {
        u.value = !0, r.value = null;
        try {
          const N = await p(g.value.trim(), v.value);
          N.status === "success" ? (r.value = {
            type: "success",
            message: `Committed: ${((F = N.summary) == null ? void 0 : F.new) || 0} new, ${((f = N.summary) == null ? void 0 : f.modified) || 0} modified, ${((C = N.summary) == null ? void 0 : C.deleted) || 0} deleted`
          }, g.value = "", v.value = !1, setTimeout(() => l("committed"), 1e3)) : N.status === "no_changes" ? r.value = { type: "error", message: "No changes to commit" } : N.status === "blocked" ? r.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : r.value = { type: "error", message: N.message || "Commit failed" };
        } catch (N) {
          r.value = { type: "error", message: N instanceof Error ? N.message : "Commit failed" };
        } finally {
          u.value = !1;
        }
      }
    }
    return (F, f) => t.asModal ? (s(), E(Ve, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: f[5] || (f[5] = (C) => l("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: f[4] || (f[4] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", ew, [
            f[11] || (f[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: f[0] || (f[0] = (C) => l("close"))
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
            k.value ? (s(), o("div", uw, [
              e("div", mw, [
                f[18] || (f[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", vw, a(w.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", fw, [
                (s(!0), o(V, null, oe(w.value, (C) => (s(), o("div", {
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
                default: i(() => [...f[19] || (f[19] = [
                  h(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : d("", !0),
            e("div", gw, [
              b(Is, {
                modelValue: g.value,
                "onUpdate:modelValue": f[2] || (f[2] = (C) => g.value = C),
                placeholder: _.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
                disabled: !m.value || u.value || _.value,
                rows: 3,
                onCtrlEnter: M
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            r.value ? (s(), o("div", {
              key: 4,
              class: me(["result", r.value.type])
            }, a(r.value.message), 3)) : d("", !0)
          ]),
          e("div", pw, [
            b(ve, {
              variant: "secondary",
              onClick: f[3] || (f[3] = (C) => l("close"))
            }, {
              default: i(() => [...f[20] || (f[20] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(ve, {
              variant: v.value ? "danger" : "primary",
              disabled: !m.value || !g.value.trim() || u.value || _.value,
              loading: u.value,
              onClick: M
            }, {
              default: i(() => [
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
          onClick: f[6] || (f[6] = (C) => l("close"))
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
        k.value ? (s(), o("div", Mw, [
          e("div", Tw, [
            f[29] || (f[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", Rw, a(w.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", zw, [
            (s(!0), o(V, null, oe(w.value, (C) => (s(), o("div", {
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
            default: i(() => [...f[30] || (f[30] = [
              h(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : d("", !0),
        e("div", Lw, [
          b(Is, {
            modelValue: g.value,
            "onUpdate:modelValue": f[8] || (f[8] = (C) => g.value = C),
            placeholder: _.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || u.value || _.value,
            rows: 3,
            onCtrlEnter: M
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        r.value ? (s(), o("div", {
          key: 4,
          class: me(["result", r.value.type])
        }, a(r.value.message), 3)) : d("", !0)
      ]),
      e("div", Pw, [
        b(ve, {
          variant: "secondary",
          onClick: f[9] || (f[9] = (C) => l("close"))
        }, {
          default: i(() => [...f[31] || (f[31] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b(ve, {
          variant: v.value ? "danger" : "primary",
          disabled: !m.value || !g.value.trim() || u.value || _.value,
          loading: u.value,
          onClick: M
        }, {
          default: i(() => [
            h(a(u.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), qs = /* @__PURE__ */ te(Dw, [["__scopeId", "data-v-aa2a9bdf"]]), Nw = { class: "modal-header" }, Uw = { class: "modal-body" }, Ow = { class: "switch-message" }, Bw = { class: "switch-details" }, Aw = { class: "modal-actions" }, Fw = /* @__PURE__ */ ee({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), E(Ve, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (l) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = ze(() => {
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
          e("div", Aw, [
            b(ne, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (l) => c.$emit("close"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(ne, {
              variant: "primary",
              onClick: n[2] || (n[2] = (l) => c.$emit("confirm"))
            }, {
              default: i(() => [...n[12] || (n[12] = [
                h(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), Vw = /* @__PURE__ */ te(Fw, [["__scopeId", "data-v-e9c5253e"]]), Ww = {
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
    const c = t, n = U(() => {
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
    }), l = U(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), p = U(() => {
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
    return (g, u) => (s(), E(Ve, { to: "body" }, [
      t.show ? (s(), o("div", Ww, [
        e("div", Gw, [
          u[1] || (u[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", jw, [
            b(js, {
              progress: t.progress,
              variant: l.value
            }, null, 8, ["progress", "variant"]),
            e("div", Hw, [
              e("div", qw, a(t.progress) + "%", 1),
              e("div", Kw, a(n.value), 1)
            ]),
            e("div", Jw, [
              (s(!0), o(V, null, oe(p.value, (v) => (s(), o("div", {
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
    return (c, n) => (s(), E(Ve, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (l) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = ze(() => {
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
            b(ne, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (l) => c.$emit("close"))
            }, {
              default: i(() => [...n[10] || (n[10] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(ne, {
              variant: "primary",
              onClick: n[2] || (n[2] = (l) => c.$emit("confirm"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                h(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), rk = /* @__PURE__ */ te(ik, [["__scopeId", "data-v-7cad7518"]]), dk = /* @__PURE__ */ ee({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = $(null);
    async function l() {
      var g;
      await ((g = n.value) == null ? void 0 : g.saveSettings());
    }
    function p() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (g, u) => (s(), E(Ye, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: u[1] || (u[1] = (v) => g.$emit("close"))
    }, {
      body: i(() => [
        b(Fs, {
          ref_key: "contentRef",
          ref: n,
          "workspace-path": t.workspacePath,
          onSaved: p
        }, null, 8, ["workspace-path"])
      ]),
      footer: i(() => {
        var v;
        return [
          b(ve, {
            variant: "primary",
            disabled: !((v = n.value) != null && v.hasChanges),
            onClick: l
          }, {
            default: i(() => [...u[2] || (u[2] = [
              h(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(ve, {
            variant: "secondary",
            onClick: u[0] || (u[0] = (r) => g.$emit("close"))
          }, {
            default: i(() => [...u[3] || (u[3] = [
              h(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), ck = /* @__PURE__ */ te(dk, [["__scopeId", "data-v-fac00ae7"]]), uk = { class: "header-actions" }, mk = {
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
  class: "progress-check-loading"
}, Sk = {
  key: 0,
  class: "cli-warning"
}, Ik = {
  key: 1,
  class: "env-landing"
}, Ek = { class: "env-list" }, Mk = ["value"], Tk = { class: "env-name" }, Rk = {
  key: 2,
  class: "env-create"
}, zk = { class: "form-field" }, Lk = { class: "form-field" }, Pk = ["value"], Dk = { class: "form-field" }, Nk = ["disabled"], Uk = ["value"], Ok = { class: "form-field" }, Bk = ["value"], Ak = { class: "form-field form-field--checkbox" }, Fk = { class: "form-checkbox" }, Vk = {
  key: 0,
  class: "form-error"
}, Wk = {
  key: 1,
  class: "env-creating"
}, Gk = { class: "creating-intro" }, jk = {
  key: 3,
  class: "env-import"
}, Hk = { class: "wizard-footer" }, qk = { class: "wizard-footer-actions" }, Et = 10, Kk = 600 * 1e3, Ms = 1800 * 1e3, Jk = /* @__PURE__ */ ee({
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
      getInitializeProgress: g,
      validatePath: u,
      createEnvironment: v,
      getCreateProgress: r,
      getImportProgress: m,
      getComfyUIReleases: y
    } = Ae();
    function w(ae) {
      window.open(ae, "_blank", "noopener,noreferrer");
    }
    const k = $(n.initialStep || 1), _ = $(null), M = $("landing"), F = $(!1), f = $(!1), C = $(!1), N = $(null), z = $(n.initialStep === 2), x = $(n.defaultPath), J = $(!!n.detectedModelsDir), A = $(n.detectedModelsDir || ""), W = $(null), T = $(null), R = $(null), O = $(null), le = $("my-new-env"), se = $(Ws), X = $("latest"), ce = $(Gs), Y = $(!0), D = $(null), P = $(null), S = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), re = $(!1), Z = $(!1), ke = $(!1), be = $({ progress: 0, message: "" }), Te = $({ progress: 0, message: "" }), Re = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], de = $(0), fe = $(null), Me = $(0), ie = $(null), K = U(() => {
      var I, B;
      const ae = (I = x.value) == null ? void 0 : I.trim(), G = !W.value, H = !J.value || !T.value && ((B = A.value) == null ? void 0 : B.trim());
      return ae && G && H;
    }), Ie = U(() => {
      var ae;
      return (ae = le.value) == null ? void 0 : ae.trim();
    }), _e = U(() => !!(k.value === 2 || P.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), st = U(() => P.value || n.workspacePath || null);
    async function rt() {
      var ae;
      if (W.value = null, !!((ae = x.value) != null && ae.trim()))
        try {
          const G = await u({ path: x.value, type: "workspace" });
          G.valid || (W.value = G.error || "Invalid path");
        } catch (G) {
          W.value = G instanceof Error ? G.message : "Validation failed";
        }
    }
    async function vt() {
      var ae;
      if (T.value = null, R.value = null, O.value = null, !!((ae = A.value) != null && ae.trim()))
        try {
          const G = await u({ path: A.value, type: "models" });
          if (G.valid)
            O.value = G.model_count ?? null;
          else if (T.value = G.error || "Invalid path", G.suggestion) {
            R.value = G.suggestion, A.value = G.suggestion, T.value = null;
            const H = await u({ path: G.suggestion, type: "models" });
            H.valid && (O.value = H.model_count ?? null);
          }
        } catch (G) {
          T.value = G instanceof Error ? G.message : "Validation failed";
        }
    }
    async function Se() {
      var ae, G, H, I, B;
      if (W.value = null, T.value = null, await rt(), (ae = W.value) != null && ae.includes("already exists")) {
        W.value = null, P.value = ((G = x.value) == null ? void 0 : G.trim()) || n.defaultPath, k.value = 2, Ge();
        return;
      }
      if (!W.value && !(J.value && ((H = A.value) != null && H.trim()) && (await vt(), T.value))) {
        Z.value = !0;
        try {
          await p({
            workspace_path: ((I = x.value) == null ? void 0 : I.trim()) || n.defaultPath,
            models_directory: J.value && ((B = A.value) == null ? void 0 : B.trim()) || null
          }), de.value = 0, fe.value = Date.now();
          const Q = setInterval(async () => {
            var we;
            if (fe.value && Date.now() - fe.value > Kk) {
              clearInterval(Q), Z.value = !1, W.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Pe = await g();
              if (de.value = 0, Pe.state === "idle" && Z.value) {
                clearInterval(Q), Z.value = !1, W.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              be.value = { progress: Pe.progress, message: Pe.message }, Pe.state === "complete" ? (clearInterval(Q), Z.value = !1, P.value = ((we = x.value) == null ? void 0 : we.trim()) || n.defaultPath, k.value = 2, Ge()) : Pe.state === "error" && (clearInterval(Q), Z.value = !1, W.value = Pe.error || "Workspace creation failed");
            } catch (Pe) {
              de.value++, console.warn(`Polling failure ${de.value}/${Et}:`, Pe), de.value >= Et && (clearInterval(Q), Z.value = !1, W.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Q) {
          Z.value = !1, W.value = Q instanceof Error ? Q.message : "Failed to create workspace";
        }
      }
    }
    async function Ze() {
      ke.value = !0, D.value = null;
      try {
        const ae = {
          name: le.value.trim() || "my-new-env",
          python_version: se.value,
          comfyui_version: X.value,
          torch_backend: ce.value,
          switch_after: Y.value,
          workspace_path: P.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await v(ae)).status === "started") {
          Me.value = 0, ie.value = Date.now();
          const H = setInterval(async () => {
            if (ie.value && Date.now() - ie.value > Ms) {
              clearInterval(H), ke.value = !1, D.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const I = await r();
              if (Me.value = 0, I.state === "idle" && ke.value) {
                clearInterval(H), ke.value = !1, D.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Te.value = {
                progress: I.progress ?? 0,
                message: I.message,
                phase: I.phase
              }, I.state === "complete") {
                clearInterval(H), ke.value = !1;
                const B = I.environment_name || ae.name;
                Y.value ? l("complete", B, P.value) : (M.value = "landing", l("environment-created-no-switch", B));
              } else I.state === "error" && (clearInterval(H), ke.value = !1, D.value = I.error || "Environment creation failed");
            } catch (I) {
              Me.value++, console.warn(`Polling failure ${Me.value}/${Et}:`, I), Me.value >= Et && (clearInterval(H), ke.value = !1, D.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ae) {
        ke.value = !1, D.value = ae instanceof Error ? ae.message : "Unknown error";
      }
    }
    async function Ge() {
      re.value = !0;
      try {
        S.value = await y();
      } catch (ae) {
        console.error("Failed to load ComfyUI releases:", ae);
      } finally {
        re.value = !1;
      }
    }
    function je() {
      _.value && l("switch-environment", _.value, P.value);
    }
    function ft() {
      M.value === "create" || M.value === "import" ? M.value = "landing" : k.value === 2 && n.setupState === "no_workspace" && (k.value = 1);
    }
    function ye(ae, G) {
      f.value = !1, G ? l("complete", ae, P.value) : (l("environment-created-no-switch", ae), M.value = "landing");
    }
    function Fe() {
    }
    Ue(async () => {
      if (n.detectedModelsDir && (A.value = n.detectedModelsDir), n.workspacePath && (P.value = n.workspacePath), k.value === 2) {
        Ge();
        const ae = setTimeout(() => {
          z.value = !1;
        }, 3e3);
        await dt(), clearTimeout(ae), z.value = !1;
      }
    });
    async function dt() {
      try {
        const ae = await r();
        if (console.log("[ComfyGit] Create progress check:", ae.state, ae), ae.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ae.environment_name), M.value = "create", ke.value = !0, le.value = ae.environment_name || "my-new-env", Te.value = {
            progress: ae.progress ?? 0,
            message: ae.message,
            phase: ae.phase
          }, Xe();
          return;
        }
      } catch (ae) {
        console.log("[ComfyGit] Create progress check failed:", ae);
      }
      try {
        const ae = await m();
        console.log("[ComfyGit] Import progress check:", ae.state, ae), ae.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ae.environment_name), N.value = {
          message: ae.message || "Importing...",
          phase: ae.phase || "",
          progress: ae.progress ?? 0,
          environmentName: ae.environment_name || ""
        }, C.value = !0, M.value = "import", f.value = !0);
      } catch (ae) {
        console.log("[ComfyGit] Import progress check failed:", ae);
      }
    }
    async function Xe() {
      Me.value = 0, ie.value = Date.now();
      let ae = null;
      const G = async () => {
        if (ie.value && Date.now() - ie.value > Ms)
          return ae && clearInterval(ae), ke.value = !1, D.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const I = await r();
          if (Me.value = 0, I.state === "idle" && ke.value)
            return ae && clearInterval(ae), ke.value = !1, D.value = "Environment creation was interrupted. Please try again.", !1;
          if (Te.value = {
            progress: I.progress ?? 0,
            message: I.message,
            phase: I.phase
          }, I.state === "complete") {
            ae && clearInterval(ae), ke.value = !1;
            const B = I.environment_name || le.value;
            return l("complete", B, P.value), !1;
          } else if (I.state === "error")
            return ae && clearInterval(ae), ke.value = !1, D.value = I.error || "Environment creation failed", !1;
          return !0;
        } catch (I) {
          return Me.value++, console.warn(`Polling failure ${Me.value}/${Et}:`, I), Me.value >= Et ? (ae && clearInterval(ae), ke.value = !1, D.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await G() && (ae = setInterval(async () => {
        !await G() && ae && clearInterval(ae);
      }, 2e3));
    }
    return (ae, G) => (s(), o(V, null, [
      b(Ye, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: G[19] || (G[19] = (H) => ae.$emit("close"))
      }, {
        header: i(() => [
          G[29] || (G[29] = e("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          e("div", uk, [
            e("button", {
              class: "icon-btn sponsor-btn",
              onClick: G[0] || (G[0] = (H) => w("https://github.com/sponsors/comfyhub-org")),
              title: "Sponsor ComfyHub",
              "aria-label": "Sponsor ComfyHub on GitHub"
            }, [...G[21] || (G[21] = [
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
              onClick: G[1] || (G[1] = (H) => w("https://discord.gg/2h5rSTeh6Y")),
              title: "Join Discord",
              "aria-label": "Join ComfyHub Discord"
            }, [...G[22] || (G[22] = [
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
              onClick: G[2] || (G[2] = (H) => w("https://x.com/akatz_ai")),
              title: "Follow on X",
              "aria-label": "Follow on X"
            }, [...G[23] || (G[23] = [
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
              onClick: G[3] || (G[3] = (H) => w("https://github.com/comfyhub-org/comfygit")),
              title: "View on GitHub",
              "aria-label": "View ComfyGit on GitHub"
            }, [...G[24] || (G[24] = [
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
              onClick: G[4] || (G[4] = (H) => w("https://docs.comfyhub.org/comfygit/")),
              title: "Documentation",
              "aria-label": "View ComfyGit Documentation"
            }, [...G[25] || (G[25] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" })
              ], -1)
            ])]),
            G[28] || (G[28] = e("span", { class: "header-divider" }, null, -1)),
            _e.value ? (s(), o("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: G[5] || (G[5] = (H) => F.value = !0)
            }, [...G[26] || (G[26] = [
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
              onClick: G[6] || (G[6] = (H) => ae.$emit("close")),
              title: "Close"
            }, [...G[27] || (G[27] = [
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
            k.value === 1 ? (s(), o("div", mk, [
              G[33] || (G[33] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              e("div", vk, [
                G[30] || (G[30] = e("label", { class: "form-label" }, "Workspace Path", -1)),
                Oe(e("input", {
                  "onUpdate:modelValue": G[7] || (G[7] = (I) => x.value = I),
                  type: "text",
                  class: "form-input",
                  placeholder: t.defaultPath
                }, null, 8, fk), [
                  [Tt, x.value]
                ]),
                W.value ? (s(), o("p", gk, a(W.value), 1)) : d("", !0)
              ]),
              e("div", pk, [
                e("label", hk, [
                  Oe(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": G[8] || (G[8] = (I) => J.value = I)
                  }, null, 512), [
                    [Xt, J.value]
                  ]),
                  G[31] || (G[31] = e("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              J.value ? (s(), o("div", yk, [
                G[32] || (G[32] = e("label", { class: "form-label" }, "Models Directory", -1)),
                Oe(e("input", {
                  "onUpdate:modelValue": G[9] || (G[9] = (I) => A.value = I),
                  type: "text",
                  class: "form-input",
                  placeholder: t.detectedModelsDir || "/path/to/models"
                }, null, 8, wk), [
                  [Tt, A.value]
                ]),
                t.detectedModelsDir && !A.value ? (s(), o("p", kk, " Detected: " + a(t.detectedModelsDir), 1)) : d("", !0),
                R.value ? (s(), o("p", bk, " Did you mean: " + a(R.value), 1)) : d("", !0),
                T.value ? (s(), o("p", _k, a(T.value), 1)) : d("", !0),
                O.value !== null && !T.value ? (s(), o("p", $k, " Found " + a(O.value) + " model files ", 1)) : d("", !0)
              ])) : d("", !0),
              Z.value ? (s(), E(es, {
                key: 1,
                progress: be.value.progress,
                message: be.value.message
              }, null, 8, ["progress", "message"])) : d("", !0)
            ])) : d("", !0),
            k.value === 2 ? (s(), o("div", Ck, [
              z.value ? (s(), o("div", xk, [...G[34] || (G[34] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (s(), o(V, { key: 1 }, [
                n.cliInstalled ? d("", !0) : (s(), o("div", Sk, [...G[35] || (G[35] = [
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
                M.value === "landing" ? (s(), o("div", Ik, [
                  G[39] || (G[39] = e("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  e("button", {
                    class: "landing-option",
                    onClick: G[10] || (G[10] = (I) => M.value = "create")
                  }, [...G[36] || (G[36] = [
                    e("span", { class: "option-icon" }, "➕", -1),
                    e("div", { class: "option-content" }, [
                      e("span", { class: "option-title" }, "Create New Environment"),
                      e("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    e("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  e("button", {
                    class: "landing-option",
                    onClick: G[11] || (G[11] = (I) => {
                      C.value = !1, M.value = "import";
                    })
                  }, [...G[37] || (G[37] = [
                    e("span", { class: "option-icon" }, "📦", -1),
                    e("div", { class: "option-content" }, [
                      e("span", { class: "option-title" }, "Import Environment"),
                      e("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    e("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (H = n.existingEnvironments) != null && H.length ? (s(), o(V, { key: 0 }, [
                    G[38] || (G[38] = e("div", { class: "landing-divider" }, [
                      e("span", null, "or switch to existing")
                    ], -1)),
                    e("div", Ek, [
                      (s(!0), o(V, null, oe(n.existingEnvironments, (I) => (s(), o("label", {
                        key: I,
                        class: me(["env-option", { selected: _.value === I }])
                      }, [
                        Oe(e("input", {
                          type: "radio",
                          name: "env-select",
                          value: I,
                          "onUpdate:modelValue": G[12] || (G[12] = (B) => _.value = B)
                        }, null, 8, Mk), [
                          [Kt, _.value]
                        ]),
                        e("span", Tk, a(I), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : d("", !0)
                ])) : M.value === "create" ? (s(), o("div", Rk, [
                  ke.value ? (s(), o("div", Wk, [
                    e("p", Gk, [
                      G[46] || (G[46] = h(" Creating environment ", -1)),
                      e("strong", null, a(le.value), 1),
                      G[47] || (G[47] = h("... ", -1))
                    ]),
                    b(es, {
                      progress: Te.value.progress,
                      message: Te.value.message,
                      "current-phase": Te.value.phase,
                      "show-steps": !0,
                      steps: Re
                    }, null, 8, ["progress", "message", "current-phase"]),
                    G[48] || (G[48] = e("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (s(), o(V, { key: 0 }, [
                    G[45] || (G[45] = e("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    e("div", zk, [
                      G[40] || (G[40] = e("label", { class: "form-label" }, "Environment Name", -1)),
                      Oe(e("input", {
                        "onUpdate:modelValue": G[13] || (G[13] = (I) => le.value = I),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Tt, le.value]
                      ])
                    ]),
                    e("div", Lk, [
                      G[41] || (G[41] = e("label", { class: "form-label" }, "Python Version", -1)),
                      Oe(e("select", {
                        "onUpdate:modelValue": G[14] || (G[14] = (I) => se.value = I),
                        class: "form-select"
                      }, [
                        (s(!0), o(V, null, oe($e(Vs), (I) => (s(), o("option", {
                          key: I,
                          value: I
                        }, a(I), 9, Pk))), 128))
                      ], 512), [
                        [Rt, se.value]
                      ])
                    ]),
                    e("div", Dk, [
                      G[42] || (G[42] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Oe(e("select", {
                        "onUpdate:modelValue": G[15] || (G[15] = (I) => X.value = I),
                        class: "form-select",
                        disabled: re.value
                      }, [
                        (s(!0), o(V, null, oe(S.value, (I) => (s(), o("option", {
                          key: I.tag_name,
                          value: I.tag_name
                        }, a(I.name), 9, Uk))), 128))
                      ], 8, Nk), [
                        [Rt, X.value]
                      ])
                    ]),
                    e("div", Ok, [
                      G[43] || (G[43] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Oe(e("select", {
                        "onUpdate:modelValue": G[16] || (G[16] = (I) => ce.value = I),
                        class: "form-select"
                      }, [
                        (s(!0), o(V, null, oe($e(fs), (I) => (s(), o("option", {
                          key: I,
                          value: I
                        }, a(I) + a(I === "auto" ? " (detect GPU)" : ""), 9, Bk))), 128))
                      ], 512), [
                        [Rt, ce.value]
                      ])
                    ]),
                    e("div", Ak, [
                      e("label", Fk, [
                        Oe(e("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": G[17] || (G[17] = (I) => Y.value = I)
                        }, null, 512), [
                          [Xt, Y.value]
                        ]),
                        G[44] || (G[44] = e("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    D.value ? (s(), o("div", Vk, a(D.value), 1)) : d("", !0)
                  ], 64))
                ])) : M.value === "import" ? (s(), o("div", jk, [
                  b(Hs, {
                    "workspace-path": P.value,
                    "resume-import": C.value,
                    "initial-progress": N.value ?? void 0,
                    onImportComplete: ye,
                    onImportStarted: G[18] || (G[18] = (I) => f.value = !0),
                    onSourceCleared: Fe
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : d("", !0)
              ], 64))
            ])) : d("", !0)
          ];
        }),
        footer: i(() => [
          e("div", Hk, [
            G[50] || (G[50] = e("div", { class: "wizard-footer-info" }, [
              e("span", { class: "version" }, "v0.0.1"),
              e("span", { class: "made-by" }, [
                h("made with "),
                e("svg", {
                  class: "heart-icon",
                  width: "10",
                  height: "10",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
                ]),
                h(" by Akatz")
              ])
            ], -1)),
            e("div", qk, [
              k.value === 1 ? (s(), E(ve, {
                key: 0,
                variant: "primary",
                disabled: !K.value || Z.value,
                onClick: Se
              }, {
                default: i(() => [
                  h(a(Z.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : k.value === 2 ? (s(), o(V, { key: 1 }, [
                !ke.value && !f.value && (M.value !== "landing" || n.setupState === "no_workspace" && !P.value) ? (s(), E(ve, {
                  key: 0,
                  variant: "secondary",
                  onClick: ft
                }, {
                  default: i(() => [...G[49] || (G[49] = [
                    h(" Back ", -1)
                  ])]),
                  _: 1
                })) : d("", !0),
                M.value === "create" ? (s(), E(ve, {
                  key: 1,
                  variant: "primary",
                  disabled: !Ie.value || ke.value,
                  onClick: Ze
                }, {
                  default: i(() => [
                    h(a(ke.value ? "Creating..." : Y.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : d("", !0),
                M.value === "landing" && _.value ? (s(), E(ve, {
                  key: 2,
                  variant: "primary",
                  onClick: je
                }, {
                  default: i(() => [
                    h(" Switch to " + a(_.value), 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ], 64)) : d("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      F.value ? (s(), E(ck, {
        key: 0,
        "workspace-path": st.value,
        onClose: G[20] || (G[20] = (H) => F.value = !1)
      }, null, 8, ["workspace-path"])) : d("", !0)
    ], 64));
  }
}), Yk = /* @__PURE__ */ te(Jk, [["__scopeId", "data-v-a6a07e9a"]]), Xk = { class: "comfygit-panel" }, Qk = { class: "panel-header" }, Zk = { class: "header-left" }, eb = {
  key: 0,
  class: "header-info"
}, tb = { class: "header-actions" }, sb = { class: "env-switcher" }, ob = {
  key: 0,
  class: "header-info"
}, nb = { class: "branch-name" }, ab = { class: "panel-main" }, lb = { class: "sidebar" }, ib = { class: "sidebar-content" }, rb = { class: "sidebar-section" }, db = { class: "sidebar-section" }, cb = { class: "sidebar-section" }, ub = { class: "content-area" }, mb = {
  key: 0,
  class: "error-message"
}, vb = {
  key: 1,
  class: "loading"
}, fb = { class: "dialog-content env-selector-dialog" }, gb = { class: "dialog-header" }, pb = { class: "dialog-body" }, hb = { class: "env-list" }, yb = { class: "env-info" }, wb = { class: "env-name-row" }, kb = { class: "env-indicator" }, bb = { class: "env-name" }, _b = {
  key: 0,
  class: "env-branch"
}, $b = {
  key: 1,
  class: "current-label"
}, Cb = { class: "env-stats" }, xb = ["onClick"], Sb = { class: "toast-container" }, Ib = { class: "toast-message" }, Eb = /* @__PURE__ */ ee({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const n = t, l = c, {
      getStatus: p,
      getHistory: g,
      getBranches: u,
      checkout: v,
      createBranch: r,
      switchBranch: m,
      deleteBranch: y,
      getEnvironments: w,
      switchEnvironment: k,
      getSwitchProgress: _,
      deleteEnvironment: M,
      syncEnvironmentManually: F,
      repairWorkflowModels: f,
      getSetupStatus: C
    } = Ae(), N = Ds();
    function z(j) {
      window.open(j, "_blank", "noopener,noreferrer");
    }
    const x = $(null), J = $([]), A = $([]), W = $([]), T = U(() => W.value.find((j) => j.is_current)), R = $(null), O = $(!1), le = $(1), se = U(() => {
      var j;
      return ((j = R.value) == null ? void 0 : j.state) || "managed";
    }), X = $(!1), ce = $(null), Y = $(null), D = $(!1), P = $(null), S = $(null), re = $(null), Z = $(!1), ke = $(!1), be = $(""), Te = $(null), Re = $({ state: "idle", progress: 0, message: "" });
    let de = null, fe = null;
    const Me = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, ie = n.initialView ? Me[n.initialView] : null, K = $((ie == null ? void 0 : ie.view) ?? "status"), Ie = $((ie == null ? void 0 : ie.section) ?? "this-env");
    function _e(j, L) {
      K.value = j, Ie.value = L;
    }
    function st(j) {
      const ge = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[j];
      ge && _e(ge.view, ge.section);
    }
    function rt() {
      _e("branches", "this-env");
    }
    function vt() {
      l("close"), setTimeout(() => {
        var L;
        const j = document.querySelectorAll("button.comfyui-button");
        for (const ge of j)
          if (((L = ge.textContent) == null ? void 0 : L.trim()) === "Manager") {
            ge.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const Se = $(null), Ze = $(!1), Ge = $(!1), je = $([]);
    let ft = 0;
    function ye(j, L = "info", ge = 3e3) {
      const xe = ++ft;
      return je.value.push({ id: xe, message: j, type: L }), ge > 0 && setTimeout(() => {
        je.value = je.value.filter((De) => De.id !== xe);
      }, ge), xe;
    }
    function Fe(j) {
      je.value = je.value.filter((L) => L.id !== j);
    }
    function dt(j, L) {
      ye(j, L);
    }
    const Xe = U(() => {
      if (!x.value) return "neutral";
      const j = x.value.workflows, L = j.new.length > 0 || j.modified.length > 0 || j.deleted.length > 0 || x.value.has_changes;
      return x.value.comparison.is_synced ? L ? "warning" : "success" : "error";
    });
    U(() => x.value ? Xe.value === "success" ? "All synced" : Xe.value === "warning" ? "Uncommitted changes" : Xe.value === "error" ? "Not synced" : "" : "");
    async function ae() {
      X.value = !0, ce.value = null;
      try {
        const [j, L, ge, xe] = await Promise.all([
          p(!0),
          g(),
          u(),
          w()
        ]);
        x.value = j, J.value = L.commits, A.value = ge.branches, W.value = xe, l("statusUpdate", j), P.value && await P.value.loadWorkflows(!0);
      } catch (j) {
        ce.value = j instanceof Error ? j.message : "Failed to load status", x.value = null, J.value = [], A.value = [];
      } finally {
        X.value = !1;
      }
    }
    function G(j) {
      Y.value = j;
    }
    async function H(j) {
      var ge;
      Y.value = null;
      const L = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      Se.value = {
        title: L ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: L ? "You have uncommitted changes that will be lost." : `Checkout commit ${j.short_hash || ((ge = j.hash) == null ? void 0 : ge.slice(0, 7))}?`,
        details: L ? ws() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: L ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: L,
        onConfirm: async () => {
          var We;
          Se.value = null, Pe();
          const xe = ye(`Checking out ${j.short_hash || ((We = j.hash) == null ? void 0 : We.slice(0, 7))}...`, "info", 0), De = await v(j.hash, L);
          Fe(xe), De.status === "success" ? ye("Restarting ComfyUI...", "success") : ye(De.message || "Checkout failed", "error");
        }
      };
    }
    async function I(j) {
      const L = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      Se.value = {
        title: L ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: L ? "You have uncommitted changes." : `Switch to branch "${j}"?`,
        details: L ? ws() : void 0,
        warning: L ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: L ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Se.value = null, Pe();
          const ge = ye(`Switching to ${j}...`, "info", 0), xe = await m(j, L);
          Fe(ge), xe.status === "success" ? ye("Restarting ComfyUI...", "success") : ye(xe.message || "Branch switch failed", "error");
        }
      };
    }
    async function B(j) {
      const L = ye(`Creating branch ${j}...`, "info", 0), ge = await r(j);
      Fe(L), ge.status === "success" ? (ye(`Branch "${j}" created`, "success"), await ae()) : ye(ge.message || "Failed to create branch", "error");
    }
    async function Q(j, L = !1) {
      const ge = async (xe) => {
        var We;
        const De = ye(`Deleting branch ${j}...`, "info", 0);
        try {
          const pt = await y(j, xe);
          Fe(De), pt.status === "success" ? (ye(`Branch "${j}" deleted`, "success"), await ae()) : (We = pt.message) != null && We.includes("not fully merged") ? Se.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${j}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Se.value = null, await ge(!0);
            }
          } : ye(pt.message || "Failed to delete branch", "error");
        } catch (pt) {
          Fe(De);
          const Pt = pt instanceof Error ? pt.message : "Failed to delete branch";
          Pt.includes("not fully merged") ? Se.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${j}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Se.value = null, await ge(!0);
            }
          } : ye(Pt, "error");
        }
      };
      Se.value = {
        title: "Delete Branch",
        message: `Delete branch "${j}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Se.value = null, await ge(L);
        }
      };
    }
    async function we(j) {
      Y.value = null;
      const L = prompt("Enter branch name:");
      if (L) {
        const ge = ye(`Creating branch ${L}...`, "info", 0), xe = await r(L, j.hash);
        Fe(ge), xe.status === "success" ? (ye(`Branch "${L}" created from ${j.short_hash}`, "success"), await ae()) : ye(xe.message || "Failed to create branch", "error");
      }
    }
    function Pe() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function gt() {
      Se.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var j;
          Se.value = null, Pe(), ye("Restarting environment...", "info");
          try {
            (j = window.app) != null && j.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Ct() {
      Se.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var j;
          Se.value = null, ye("Stopping environment...", "info");
          try {
            (j = window.app) != null && j.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function ot(j, L) {
      D.value = !1, be.value = j, Te.value = L || null, Z.value = !0;
    }
    async function xt() {
      Z.value = !1, ke.value = !0, Pe(), Re.value = {
        progress: 10,
        state: St(10),
        message: q(10)
      };
      try {
        await k(be.value, Te.value || void 0), ue(), Le();
      } catch (j) {
        pe(), ke.value = !1, ye(`Failed to initiate switch: ${j instanceof Error ? j.message : "Unknown error"}`, "error"), Re.value = { state: "idle", progress: 0, message: "" }, Te.value = null;
      }
    }
    function St(j) {
      return j >= 100 ? "complete" : j >= 80 ? "validating" : j >= 60 ? "starting" : j >= 30 ? "syncing" : "preparing";
    }
    function q(j) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[St(j)] || "";
    }
    function ue() {
      if (fe) return;
      let j = 10;
      const L = 60, ge = 5e3, xe = 100, De = (L - j) / (ge / xe);
      fe = window.setInterval(() => {
        if (j += De, j >= L && (j = L, pe()), Re.value.progress < L) {
          const We = Math.floor(j);
          Re.value = {
            progress: We,
            state: St(We),
            message: q(We)
          };
        }
      }, xe);
    }
    function pe() {
      fe && (clearInterval(fe), fe = null);
    }
    function Le() {
      de || (de = window.setInterval(async () => {
        try {
          let j = await N.getStatus();
          if ((!j || j.state === "idle") && (j = await _()), !j)
            return;
          const L = j.progress || 0;
          L >= 60 && pe();
          const ge = Math.max(L, Re.value.progress), xe = j.state && j.state !== "idle" && j.state !== "unknown", De = xe ? j.state : St(ge), We = xe && j.message || q(ge);
          Re.value = {
            state: De,
            progress: ge,
            message: We
          }, j.state === "complete" ? (pe(), He(), ke.value = !1, ye(`✓ Switched to ${be.value}`, "success"), await ae(), be.value = "") : j.state === "rolled_back" ? (pe(), He(), ke.value = !1, ye("Switch failed, restored previous environment", "warning"), be.value = "") : j.state === "critical_failure" && (pe(), He(), ke.value = !1, ye(`Critical error during switch: ${j.message}`, "error"), be.value = "");
        } catch (j) {
          console.error("Failed to poll switch progress:", j);
        }
      }, 1e3));
    }
    function He() {
      pe(), de && (clearInterval(de), de = null);
    }
    function It() {
      var j;
      Z.value = !1, be.value = "", (j = R.value) != null && j.state && R.value.state !== "managed" && (le.value = R.value.state === "no_workspace" ? 1 : 2, O.value = !0);
    }
    async function Ht() {
      Ze.value = !1, await ae(), ye("✓ Changes committed", "success");
    }
    async function qt() {
      Ge.value = !1;
      const j = ye("Syncing environment...", "info", 0);
      try {
        const L = await F("skip", !0);
        if (Fe(j), L.status === "success") {
          const ge = [];
          L.nodes_installed.length && ge.push(`${L.nodes_installed.length} installed`), L.nodes_removed.length && ge.push(`${L.nodes_removed.length} removed`);
          const xe = ge.length ? `: ${ge.join(", ")}` : "";
          ye(`✓ Environment synced${xe}`, "success"), await ae();
        } else {
          const ge = L.errors.length ? L.errors.join("; ") : L.message;
          ye(`Sync failed: ${ge}`, "error");
        }
      } catch (L) {
        Fe(j), ye(`Sync error: ${L instanceof Error ? L.message : "Unknown error"}`, "error");
      }
    }
    async function Zs(j) {
      var L;
      try {
        const ge = await f(j);
        ge.failed.length === 0 ? ye(`✓ Repaired ${ge.success} workflow${ge.success === 1 ? "" : "s"}`, "success") : ye(`Repaired ${ge.success}, failed: ${ge.failed.length}`, "warning"), await ae();
      } catch (ge) {
        ye(`Repair failed: ${ge instanceof Error ? ge.message : "Unknown error"}`, "error");
      } finally {
        (L = re.value) == null || L.resetRepairingState();
      }
    }
    async function ys() {
      var L, ge;
      const j = ye("Repairing environment...", "info", 0);
      try {
        const xe = await F("skip", !0);
        if (Fe(j), xe.status === "success") {
          const De = [];
          xe.nodes_installed.length && De.push(`${xe.nodes_installed.length} installed`), xe.nodes_removed.length && De.push(`${xe.nodes_removed.length} removed`);
          const We = De.length ? `: ${De.join(", ")}` : "";
          ye(`✓ Environment repaired${We}`, "success"), (L = re.value) == null || L.closeDetailModal(), await ae();
        } else {
          const De = xe.errors.length ? xe.errors.join(", ") : xe.message || "Unknown error";
          ye(`Repair failed: ${De}`, "error");
        }
      } catch (xe) {
        Fe(j), ye(`Repair error: ${xe instanceof Error ? xe.message : "Unknown error"}`, "error");
      } finally {
        (ge = re.value) == null || ge.resetRepairingEnvironmentState();
      }
    }
    async function eo(j, L) {
      ye(`Environment '${j}' created`, "success"), await ae(), S.value && await S.value.loadEnvironments(), L && await ot(j);
    }
    async function to(j) {
      var L;
      if (((L = T.value) == null ? void 0 : L.name) === j) {
        ye("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      Se.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${j}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          Se.value = null;
          try {
            const ge = await M(j);
            ge.status === "success" ? (ye(`Environment "${j}" deleted`, "success"), await ae(), S.value && await S.value.loadEnvironments()) : ye(ge.message || "Failed to delete environment", "error");
          } catch (ge) {
            ye(`Error deleting environment: ${ge instanceof Error ? ge.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function so(j, L) {
      O.value = !1;
      try {
        R.value = await C();
      } catch {
      }
      await ot(j, L);
    }
    function oo() {
      O.value = !1, l("close");
    }
    async function no(j, L) {
      await ot(j, L);
    }
    async function ao(j) {
      await ae(), await ot(j);
    }
    async function lo(j) {
      R.value = await C(), console.log(`Environment '${j}' created. Available for switching.`);
    }
    function io() {
      _e("environments", "all-envs"), setTimeout(() => {
        var j;
        (j = S.value) == null || j.openCreateModal();
      }, 100);
    }
    function ws() {
      if (!x.value) return [];
      const j = [], L = x.value.workflows;
      return L.new.length && j.push(`${L.new.length} new workflow(s)`), L.modified.length && j.push(`${L.modified.length} modified workflow(s)`), L.deleted.length && j.push(`${L.deleted.length} deleted workflow(s)`), j;
    }
    return Ue(async () => {
      try {
        if (R.value = await C(), R.value.state === "no_workspace") {
          O.value = !0, le.value = 1;
          return;
        }
        if (R.value.state === "empty_workspace") {
          O.value = !0, le.value = 2;
          return;
        }
        if (R.value.state === "unmanaged") {
          O.value = !0, le.value = 2;
          return;
        }
      } catch (j) {
        console.warn("Setup status check failed, proceeding normally:", j);
      }
      await ae();
    }), (j, L) => {
      var ge, xe, De, We, pt, Pt, ks, bs, _s, $s, Cs, xs;
      return s(), o("div", Xk, [
        e("div", Qk, [
          e("div", Zk, [
            L[35] || (L[35] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            x.value ? (s(), o("div", eb)) : d("", !0)
          ]),
          e("div", tb, [
            e("button", {
              class: "sponsor-btn",
              onClick: L[0] || (L[0] = (he) => z("https://github.com/sponsors/comfyhub-org")),
              title: "Sponsor ComfyHub",
              "aria-label": "Sponsor ComfyHub on GitHub"
            }, [...L[36] || (L[36] = [
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
              onClick: L[1] || (L[1] = (he) => z("https://discord.gg/2h5rSTeh6Y")),
              title: "Join Discord",
              "aria-label": "Join ComfyHub Discord"
            }, [...L[37] || (L[37] = [
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
              onClick: L[2] || (L[2] = (he) => z("https://x.com/akatz_ai")),
              title: "Follow on X",
              "aria-label": "Follow on X"
            }, [...L[38] || (L[38] = [
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
              onClick: L[3] || (L[3] = (he) => z("https://github.com/comfyhub-org/comfygit")),
              title: "View on GitHub",
              "aria-label": "View ComfyGit on GitHub"
            }, [...L[39] || (L[39] = [
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
              onClick: L[4] || (L[4] = (he) => z("https://docs.comfyhub.org/comfygit/")),
              title: "Documentation",
              "aria-label": "View ComfyGit Documentation"
            }, [...L[40] || (L[40] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" })
              ], -1)
            ])]),
            L[43] || (L[43] = e("span", { class: "header-divider" }, null, -1)),
            e("button", {
              class: me(["icon-btn", { spinning: X.value }]),
              onClick: ae,
              title: "Refresh"
            }, [...L[41] || (L[41] = [
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
              onClick: L[5] || (L[5] = (he) => l("close")),
              title: "Close"
            }, [...L[42] || (L[42] = [
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
        e("div", sb, [
          e("div", { class: "env-switcher-header" }, [
            L[44] || (L[44] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
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
            onClick: L[6] || (L[6] = (he) => _e("environments", "all-envs"))
          }, [
            x.value ? (s(), o("div", ob, [
              e("span", null, a(((ge = T.value) == null ? void 0 : ge.name) || ((xe = x.value) == null ? void 0 : xe.environment) || "Loading..."), 1),
              e("span", nb, "(" + a(x.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            L[45] || (L[45] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", ab, [
          e("div", lb, [
            e("div", ib, [
              e("div", rb, [
                L[46] || (L[46] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                e("button", {
                  class: me(["sidebar-item", { active: K.value === "status" && Ie.value === "this-env" }]),
                  onClick: L[7] || (L[7] = (he) => _e("status", "this-env"))
                }, " STATUS ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: K.value === "workflows" }]),
                  onClick: L[8] || (L[8] = (he) => _e("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: K.value === "models-env" }]),
                  onClick: L[9] || (L[9] = (he) => _e("models-env", "this-env"))
                }, " MODELS ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: K.value === "branches" }]),
                  onClick: L[10] || (L[10] = (he) => _e("branches", "this-env"))
                }, " BRANCHES ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: K.value === "history" }]),
                  onClick: L[11] || (L[11] = (he) => _e("history", "this-env"))
                }, " HISTORY ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: K.value === "nodes" }]),
                  onClick: L[12] || (L[12] = (he) => _e("nodes", "this-env"))
                }, " NODES ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: K.value === "debug-env" }]),
                  onClick: L[13] || (L[13] = (he) => _e("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              L[49] || (L[49] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", db, [
                L[47] || (L[47] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                e("button", {
                  class: me(["sidebar-item", { active: K.value === "environments" }]),
                  onClick: L[14] || (L[14] = (he) => _e("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: K.value === "model-index" }]),
                  onClick: L[15] || (L[15] = (he) => _e("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: K.value === "settings" }]),
                  onClick: L[16] || (L[16] = (he) => _e("settings", "all-envs"))
                }, " SETTINGS ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: K.value === "debug-workspace" }]),
                  onClick: L[17] || (L[17] = (he) => _e("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              L[50] || (L[50] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", cb, [
                L[48] || (L[48] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                e("button", {
                  class: me(["sidebar-item", { active: K.value === "export" }]),
                  onClick: L[18] || (L[18] = (he) => _e("export", "sharing"))
                }, " EXPORT ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: K.value === "import" }]),
                  onClick: L[19] || (L[19] = (he) => _e("import", "sharing"))
                }, " IMPORT ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: K.value === "remotes" }]),
                  onClick: L[20] || (L[20] = (he) => _e("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            L[51] || (L[51] = mo('<div class="sidebar-footer" data-v-1340da17><span class="version" data-v-1340da17>v0.0.1</span><span class="made-by" data-v-1340da17>made with <svg class="heart-icon" width="10" height="10" viewBox="0 0 16 16" fill="currentColor" data-v-1340da17><path d="M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" data-v-1340da17></path></svg> by Akatz</span></div>', 1))
          ]),
          e("div", ub, [
            ce.value ? (s(), o("div", mb, a(ce.value), 1)) : !x.value && K.value === "status" ? (s(), o("div", vb, " Loading status... ")) : (s(), o(V, { key: 2 }, [
              K.value === "status" ? (s(), E(Ga, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: re,
                status: x.value,
                "setup-state": se.value,
                onSwitchBranch: rt,
                onCommitChanges: L[21] || (L[21] = (he) => Ze.value = !0),
                onSyncEnvironment: L[22] || (L[22] = (he) => Ge.value = !0),
                onViewWorkflows: L[23] || (L[23] = (he) => _e("workflows", "this-env")),
                onViewHistory: L[24] || (L[24] = (he) => _e("history", "this-env")),
                onViewDebug: L[25] || (L[25] = (he) => _e("debug-env", "this-env")),
                onViewNodes: L[26] || (L[26] = (he) => _e("nodes", "this-env")),
                onRepairMissingModels: Zs,
                onRepairEnvironment: ys,
                onStartSetup: L[27] || (L[27] = (he) => O.value = !0),
                onViewEnvironments: L[28] || (L[28] = (he) => _e("environments", "all-envs")),
                onCreateEnvironment: io
              }, null, 8, ["status", "setup-state"])) : K.value === "workflows" ? (s(), E(mm, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: P,
                onRefresh: ae
              }, null, 512)) : K.value === "models-env" ? (s(), E(Km, {
                key: 2,
                onNavigate: st
              })) : K.value === "branches" ? (s(), E(al, {
                key: 3,
                branches: A.value,
                current: ((De = x.value) == null ? void 0 : De.branch) || null,
                onSwitch: I,
                onCreate: B,
                onDelete: Q
              }, null, 8, ["branches", "current"])) : K.value === "history" ? (s(), E(pl, {
                key: 4,
                commits: J.value,
                onSelect: G,
                onCheckout: H
              }, null, 8, ["commits"])) : K.value === "nodes" ? (s(), E(Gv, {
                key: 5,
                "version-mismatches": ((pt = (We = x.value) == null ? void 0 : We.comparison) == null ? void 0 : pt.version_mismatches) || [],
                onOpenNodeManager: vt,
                onRepairEnvironment: ys,
                onToast: dt
              }, null, 8, ["version-mismatches"])) : K.value === "debug-env" ? (s(), E(Qp, { key: 6 })) : K.value === "environments" ? (s(), E(t1, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: S,
                onSwitch: ot,
                onCreated: eo,
                onDelete: to
              }, null, 512)) : K.value === "model-index" ? (s(), E(fv, {
                key: 8,
                onRefresh: ae
              })) : K.value === "settings" ? (s(), E(Kp, { key: 9 })) : K.value === "debug-workspace" ? (s(), E(Yp, { key: 10 })) : K.value === "export" ? (s(), E(L1, { key: 11 })) : K.value === "import" ? (s(), E(S0, {
                key: 12,
                onImportCompleteSwitch: ao
              })) : K.value === "remotes" ? (s(), E(Ip, {
                key: 13,
                onToast: dt
              })) : d("", !0)
            ], 64))
          ])
        ]),
        Y.value ? (s(), E(G0, {
          key: 0,
          commit: Y.value,
          onClose: L[29] || (L[29] = (he) => Y.value = null),
          onCheckout: H,
          onCreateBranch: we
        }, null, 8, ["commit"])) : d("", !0),
        Se.value ? (s(), E(Bs, {
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
          onCancel: L[30] || (L[30] = (he) => Se.value = null),
          onSecondary: Se.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        b(Vw, {
          show: Z.value,
          "from-environment": ((Pt = T.value) == null ? void 0 : Pt.name) || "unknown",
          "to-environment": be.value,
          onConfirm: xt,
          onClose: It
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Ze.value && x.value ? (s(), E(qs, {
          key: 2,
          status: x.value,
          "as-modal": !0,
          onClose: L[31] || (L[31] = (he) => Ze.value = !1),
          onCommitted: Ht
        }, null, 8, ["status"])) : d("", !0),
        Ge.value && x.value ? (s(), E(rk, {
          key: 3,
          show: Ge.value,
          "mismatch-details": {
            missing_nodes: x.value.comparison.missing_nodes,
            extra_nodes: x.value.comparison.extra_nodes
          },
          onConfirm: qt,
          onClose: L[32] || (L[32] = (he) => Ge.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : d("", !0),
        b(Zw, {
          show: ke.value,
          state: Re.value.state,
          progress: Re.value.progress,
          message: Re.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        D.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: L[34] || (L[34] = ze((he) => D.value = !1, ["self"]))
        }, [
          e("div", fb, [
            e("div", gb, [
              L[53] || (L[53] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: L[33] || (L[33] = (he) => D.value = !1)
              }, [...L[52] || (L[52] = [
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
            e("div", pb, [
              L[54] || (L[54] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", hb, [
                (s(!0), o(V, null, oe(W.value, (he) => (s(), o("div", {
                  key: he.name,
                  class: me(["env-item", { current: he.is_current }])
                }, [
                  e("div", yb, [
                    e("div", wb, [
                      e("span", kb, a(he.is_current ? "●" : "○"), 1),
                      e("span", bb, a(he.name), 1),
                      he.current_branch ? (s(), o("span", _b, "(" + a(he.current_branch) + ")", 1)) : d("", !0),
                      he.is_current ? (s(), o("span", $b, "CURRENT")) : d("", !0)
                    ]),
                    e("div", Cb, a(he.workflow_count) + " workflows • " + a(he.node_count) + " nodes ", 1)
                  ]),
                  he.is_current ? d("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (D2) => ot(he.name)
                  }, " SWITCH ", 8, xb))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        O.value ? (s(), E(Yk, {
          key: 5,
          "default-path": ((ks = R.value) == null ? void 0 : ks.default_path) || "~/comfygit",
          "detected-models-dir": ((bs = R.value) == null ? void 0 : bs.detected_models_dir) || null,
          "initial-step": le.value,
          "existing-environments": ((_s = R.value) == null ? void 0 : _s.environments) || [],
          "cli-installed": (($s = R.value) == null ? void 0 : $s.cli_installed) ?? !0,
          "setup-state": ((Cs = R.value) == null ? void 0 : Cs.state) || "no_workspace",
          "workspace-path": ((xs = R.value) == null ? void 0 : xs.workspace_path) || null,
          onComplete: so,
          onClose: oo,
          onSwitchEnvironment: no,
          onEnvironmentCreatedNoSwitch: lo
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : d("", !0),
        e("div", Sb, [
          b(vo, { name: "toast" }, {
            default: i(() => [
              (s(!0), o(V, null, oe(je.value, (he) => (s(), o("div", {
                key: he.id,
                class: me(["toast", he.type])
              }, [
                e("span", Ib, a(he.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Mb = /* @__PURE__ */ te(Eb, [["__scopeId", "data-v-1340da17"]]), Tb = { class: "item-header" }, Rb = { class: "item-info" }, zb = { class: "filename" }, Lb = { class: "metadata" }, Pb = { class: "size" }, Db = {
  key: 0,
  class: "type"
}, Nb = { class: "item-actions" }, Ub = {
  key: 0,
  class: "progress-section"
}, Ob = { class: "progress-bar" }, Bb = { class: "progress-stats" }, Ab = { class: "downloaded" }, Fb = { class: "speed" }, Vb = {
  key: 0,
  class: "eta"
}, Wb = {
  key: 1,
  class: "status-msg paused"
}, Gb = {
  key: 2,
  class: "status-msg queued"
}, jb = {
  key: 3,
  class: "status-msg completed"
}, Hb = {
  key: 4,
  class: "status-msg failed"
}, qb = {
  key: 0,
  class: "retries"
}, Kb = /* @__PURE__ */ ee({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: c }) {
    const n = c;
    function l(u) {
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
      e("div", Tb, [
        e("div", Rb, [
          e("div", zb, a(t.item.filename), 1),
          e("div", Lb, [
            e("span", Pb, a(l(t.item.size)), 1),
            t.item.type ? (s(), o("span", Db, a(t.item.type), 1)) : d("", !0)
          ])
        ]),
        e("div", Nb, [
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
      t.item.status === "downloading" ? (s(), o("div", Ub, [
        e("div", Ob, [
          e("div", {
            class: "progress-fill",
            style: yt({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Bb, [
          e("span", Ab, a(l(t.item.downloaded)) + " / " + a(l(t.item.size)), 1),
          e("span", Fb, a(p(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", Vb, a(g(t.item.eta)), 1)) : d("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", Wb, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", Gb, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", jb, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", Hb, [
        h(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", qb, "(" + a(t.item.retries) + " retries)", 1)) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ut = /* @__PURE__ */ te(Kb, [["__scopeId", "data-v-2110df65"]]), Jb = { class: "queue-title" }, Yb = { class: "count" }, Xb = { class: "queue-actions" }, Qb = { class: "action-label" }, Zb = {
  key: 0,
  class: "overall-progress"
}, e2 = { class: "progress-bar" }, t2 = {
  key: 0,
  class: "current-mini"
}, s2 = { class: "filename" }, o2 = { class: "speed" }, n2 = {
  key: 1,
  class: "queue-content"
}, a2 = {
  key: 0,
  class: "section"
}, l2 = {
  key: 1,
  class: "section"
}, i2 = { class: "section-header" }, r2 = { class: "section-label paused" }, d2 = { class: "items-list" }, c2 = {
  key: 2,
  class: "section"
}, u2 = { class: "section-header" }, m2 = { class: "section-label" }, v2 = { class: "items-list" }, f2 = {
  key: 3,
  class: "section"
}, g2 = { class: "section-header" }, p2 = { class: "section-label" }, h2 = { class: "items-list" }, y2 = {
  key: 4,
  class: "section"
}, w2 = { class: "section-header" }, k2 = { class: "section-label failed" }, b2 = { class: "items-list" }, _2 = /* @__PURE__ */ ee({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: n,
      queuedItems: l,
      completedItems: p,
      failedItems: g,
      pausedItems: u,
      hasItems: v,
      activeCount: r,
      cancelDownload: m,
      retryDownload: y,
      resumeDownload: w,
      resumeAllPaused: k,
      removeItem: _,
      clearCompleted: M
    } = Gt(), F = $(!1);
    let f = null;
    _t(
      () => ({
        active: r.value,
        failed: g.value.length,
        paused: u.value.length,
        completed: p.value.length
      }),
      (x, J) => {
        f && (clearTimeout(f), f = null);
        const A = x.active === 0 && x.failed === 0 && x.paused === 0 && x.completed > 0, W = J && (J.active > 0 || J.paused > 0);
        A && W && (f = setTimeout(() => {
          M(), f = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = U(() => {
      var A;
      if (c.items.length === 0) return 0;
      const x = p.value.length, J = ((A = n.value) == null ? void 0 : A.progress) || 0;
      return Math.round((x + J / 100) / c.items.length * 100);
    });
    function N(x) {
      m(x);
    }
    function z(x) {
      return x === 0 ? "" : `${(x / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (x, J) => (s(), E(Ve, { to: "body" }, [
      $e(v) ? (s(), o("div", {
        key: 0,
        class: me(["model-download-queue", { minimized: !F.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: J[0] || (J[0] = (A) => F.value = !F.value)
        }, [
          e("div", Jb, [
            J[4] || (J[4] = e("span", { class: "icon" }, "↓", -1)),
            J[5] || (J[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", Yb, "(" + a($e(r)) + "/" + a($e(c).items.length) + ")", 1)
          ]),
          e("div", Xb, [
            e("span", Qb, a(F.value ? "minimize" : "expand"), 1)
          ])
        ]),
        F.value ? (s(), o("div", n2, [
          $e(n) ? (s(), o("div", a2, [
            J[6] || (J[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            b(Ut, {
              item: $e(n),
              onCancel: J[1] || (J[1] = (A) => N($e(n).id))
            }, null, 8, ["item"])
          ])) : d("", !0),
          $e(u).length > 0 ? (s(), o("div", l2, [
            e("div", i2, [
              e("span", r2, "Paused (" + a($e(u).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: J[2] || (J[2] = //@ts-ignore
                (...A) => $e(k) && $e(k)(...A))
              }, "Resume All")
            ]),
            e("div", d2, [
              (s(!0), o(V, null, oe($e(u), (A) => (s(), E(Ut, {
                key: A.id,
                item: A,
                onResume: (W) => $e(w)(A.id),
                onRemove: (W) => $e(_)(A.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          $e(l).length > 0 ? (s(), o("div", c2, [
            e("div", u2, [
              e("span", m2, "Queued (" + a($e(l).length) + ")", 1)
            ]),
            e("div", v2, [
              (s(!0), o(V, null, oe($e(l), (A) => (s(), E(Ut, {
                key: A.id,
                item: A,
                onCancel: (W) => N(A.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : d("", !0),
          $e(p).length > 0 ? (s(), o("div", f2, [
            e("div", g2, [
              e("span", p2, "Completed (" + a($e(p).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: J[3] || (J[3] = //@ts-ignore
                (...A) => $e(M) && $e(M)(...A))
              }, "Clear")
            ]),
            e("div", h2, [
              (s(!0), o(V, null, oe($e(p).slice(0, 3), (A) => (s(), E(Ut, {
                key: A.id,
                item: A,
                onRemove: (W) => $e(_)(A.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          $e(g).length > 0 ? (s(), o("div", y2, [
            e("div", w2, [
              e("span", k2, "Failed (" + a($e(g).length) + ")", 1)
            ]),
            e("div", b2, [
              (s(!0), o(V, null, oe($e(g), (A) => (s(), E(Ut, {
                key: A.id,
                item: A,
                onRetry: (W) => $e(y)(A.id),
                onRemove: (W) => $e(_)(A.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : d("", !0)
        ])) : (s(), o("div", Zb, [
          e("div", e2, [
            e("div", {
              class: "progress-fill",
              style: yt({ width: `${C.value}%` })
            }, null, 4)
          ]),
          $e(n) ? (s(), o("div", t2, [
            e("span", s2, a($e(n).filename), 1),
            e("span", o2, a(z($e(n).speed)), 1)
          ])) : d("", !0)
        ]))
      ], 2)) : d("", !0)
    ]));
  }
}), $2 = /* @__PURE__ */ te(_2, [["__scopeId", "data-v-60751cfa"]]), C2 = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', x2 = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', S2 = {
  comfy: C2,
  phosphor: x2
}, gs = "comfy", Ks = "comfygit-theme";
let $t = null, Js = gs;
function I2() {
  try {
    const t = localStorage.getItem(Ks);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return gs;
}
function Ys(t = gs) {
  $t && $t.remove(), $t = document.createElement("style"), $t.id = "comfygit-theme-styles", $t.setAttribute("data-theme", t), $t.textContent = S2[t], document.head.appendChild($t), document.body.setAttribute("data-comfygit-theme", t), Js = t;
  try {
    localStorage.setItem(Ks, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function E2() {
  return Js;
}
function M2(t) {
  Ys(t);
}
function T2(t) {
  var g;
  const { ui_id: c, state: n } = t || {}, l = (n == null ? void 0 : n.history) || {};
  if (!c)
    return null;
  const p = l[c];
  return p && p.result === "error" && ((g = p.status) == null ? void 0 : g.status_str) === "error" ? (p.status.messages || [])[0] || "Unknown error" : null;
}
const ps = document.createElement("link");
ps.rel = "stylesheet";
ps.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(ps);
const R2 = I2();
Ys(R2);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), M2(t);
  },
  getTheme: () => {
    const t = E2();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let at = null, Qe = null, Ft = null, Ot = null, Ts = null;
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
function z2() {
  if (!zt.value) return !1;
  const t = zt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || zt.value.has_changes;
}
function Rs(t) {
  at && at.remove(), at = document.createElement("div"), at.className = "comfygit-panel-overlay";
  const c = document.createElement("div");
  c.className = "comfygit-panel-container", at.appendChild(c), at.addEventListener("click", (p) => {
    p.target === at && as();
  });
  const n = (p) => {
    p.key === "Escape" && (as(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), us({
    render: () => ms(Mb, {
      initialView: t,
      onClose: as,
      onStatusUpdate: async (p) => {
        zt.value = p, Vt(), await is(), ds(), rs();
      }
    })
  }).mount(c), document.body.appendChild(at);
}
function as() {
  at && (at.remove(), at = null);
}
function L2(t) {
  Bt(), Qe = document.createElement("div"), Qe.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  Qe.style.position = "fixed", Qe.style.top = `${c.bottom + 8}px`, Qe.style.right = `${window.innerWidth - c.right}px`, Qe.style.zIndex = "10001";
  const n = (p) => {
    Qe && !Qe.contains(p.target) && p.target !== t && (Bt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const l = (p) => {
    p.key === "Escape" && (Bt(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), Ft = us({
    render: () => ms(qs, {
      status: zt.value,
      onClose: Bt,
      onCommitted: () => {
        Bt(), Yt().then(Vt);
      }
    })
  }), Ft.mount(Qe), document.body.appendChild(Qe);
}
function Bt() {
  Ft && (Ft.unmount(), Ft = null), Qe && (Qe.remove(), Qe = null);
}
function P2() {
  Ot || (Ot = document.createElement("div"), Ot.className = "comfygit-download-queue-root", Ts = us({
    render: () => ms($2)
  }), Ts.mount(Ot), document.body.appendChild(Ot), console.log("[ComfyGit] Model download queue mounted"));
}
let et = null;
function Vt() {
  if (!et) return;
  const t = et.querySelector(".commit-indicator");
  t && (t.style.display = z2() ? "block" : "none");
}
function ds() {
  if (!et) return;
  const t = hs !== "managed";
  et.disabled = t, et.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
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
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = Rs, et = document.createElement("button"), et.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", et.innerHTML = 'Commit <span class="commit-indicator"></span>', et.title = "Quick Commit", et.onclick = () => L2(et), t.appendChild(c), t.appendChild(et), (g = (p = bt.menu) == null ? void 0 : p.settingsGroup) != null && g.element && (bt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), P2();
    const { loadPendingDownloads: n } = Gt();
    n(), await Promise.all([Yt(), is()]), Vt(), ds(), rs(), setTimeout(rs, 100), setInterval(async () => {
      await Promise.all([Yt(), is()]), Vt(), ds();
    }, 3e4);
    const l = bt.api;
    if (l) {
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
        `, _.onmouseover = () => _.style.opacity = "1", _.onmouseout = () => _.style.opacity = "0.6", _.onclick = () => y.remove(), y.appendChild(_), document.body.appendChild(y), console.log("[ComfyGit] Refresh notification displayed");
      }, r = function(y) {
        const w = document.getElementById("comfygit-error-toast");
        w && w.remove();
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
        const _ = document.createElement("span");
        _.textContent = "⚠️", _.style.fontSize = "20px", k.appendChild(_);
        const M = document.createElement("div");
        M.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const F = document.createElement("div");
        F.textContent = "Node installation failed", F.style.cssText = "font-weight: 600; color: #e53935;", M.appendChild(F);
        const f = document.createElement("div");
        f.textContent = "Dependency conflict detected", f.style.cssText = "font-size: 12px; opacity: 0.8;", M.appendChild(f), k.appendChild(M);
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
          k.remove(), Rs("debug-env");
        }, k.appendChild(C);
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
        `, N.onmouseover = () => N.style.opacity = "1", N.onmouseout = () => N.style.opacity = "0.6", N.onclick = () => k.remove(), k.appendChild(N), document.body.appendChild(k), console.log("[ComfyGit] Manager error toast displayed:", y), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && k.remove();
        }, 1e4);
      };
      l.addEventListener("comfygit:workflow-changed", async (y) => {
        const { change_type: w, workflow_name: k } = y.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${k}`), await Yt(), Vt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let m = !1;
      l.addEventListener("status", async (y) => {
        const w = y.detail != null;
        w && !m && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), u()) : v()), m = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), l.addEventListener("cm-task-completed", (y) => {
        const w = T2(y.detail);
        w && r(w);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
