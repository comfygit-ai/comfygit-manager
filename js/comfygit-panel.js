import { app as bt } from "../../scripts/app.js";
import { defineComponent as ee, createElementBlock as o, openBlock as s, createCommentVNode as d, createElementVNode as e, renderSlot as $e, createBlock as I, resolveDynamicComponent as cs, normalizeClass as me, withCtx as i, toDisplayString as a, createVNode as b, createTextVNode as h, computed as N, Fragment as W, renderList as oe, normalizeStyle as yt, ref as $, onMounted as Ne, watch as _t, Teleport as Ve, withModifiers as ze, Transition as ro, createSlots as Wt, withKeys as ht, reactive as ts, onUnmounted as zs, readonly as co, unref as _e, withDirectives as Ue, vModelText as Tt, vModelRadio as Kt, vModelCheckbox as Xt, nextTick as uo, vModelSelect as Rt, createStaticVNode as mo, TransitionGroup as vo, createApp as us, h as ms } from "vue";
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
        $e(c.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      c.$slots.search ? (s(), o("div", po, [
        $e(c.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      e("div", ho, [
        $e(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (s(), o("div", yo, [
        $e(c.$slots, "footer", {}, void 0, !0)
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
    return (c, n) => (s(), I(cs(`h${t.level}`), {
      class: me(["panel-title", t.variant])
    }, {
      default: i(() => [
        t.showPrefix ? (s(), o("span", ko, a(t.prefix), 1)) : (s(), o("span", bo)),
        $e(c.$slots, "default", {}, void 0, !0)
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
        t.showInfo ? (s(), I(Ls, {
          key: 0,
          onClick: n[0] || (n[0] = (l) => c.$emit("info-click"))
        })) : d("", !0)
      ]),
      c.$slots.actions ? (s(), o("div", Eo, [
        $e(c.$slots, "actions", {}, void 0, !0)
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
    return (c, n) => (s(), I(cs(`h${t.level}`), {
      class: me(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (l) => t.clickable && c.$emit("click"))
    }, {
      default: i(() => [
        $e(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", To, "(" + a(t.count) + ")", 1)) : d("", !0),
        t.clickable ? (s(), o("span", Ro, a(t.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), tt = /* @__PURE__ */ te(zo, [["__scopeId", "data-v-559361eb"]]), Lo = { class: "status-grid" }, Po = { class: "status-grid__columns" }, Do = { class: "status-grid__column" }, No = { class: "status-grid__title" }, Uo = { class: "status-grid__column status-grid__column--right" }, Oo = { class: "status-grid__title" }, Bo = {
  key: 0,
  class: "status-grid__footer"
}, Fo = /* @__PURE__ */ ee({
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
          $e(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Uo, [
          e("h4", Oo, a(t.rightTitle), 1),
          $e(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (s(), o("div", Bo, [
        $e(c.$slots, "footer", {}, void 0, !0)
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
    return (l, p) => (s(), o("div", {
      class: me(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", Vo, a(t.icon), 1)) : d("", !0),
      t.count !== void 0 ? (s(), o("span", Wo, a(t.count), 1)) : d("", !0),
      e("span", Go, a(t.label), 1)
    ], 2));
  }
}), ct = /* @__PURE__ */ te(jo, [["__scopeId", "data-v-6f929183"]]), qo = { class: "issue-card__header" }, Ho = { class: "issue-card__icon" }, Ko = { class: "issue-card__title" }, Jo = {
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
    return (l, p) => (s(), o("div", {
      class: me(["issue-card", n.value])
    }, [
      e("div", qo, [
        e("span", Ho, a(t.icon), 1),
        e("h4", Ko, a(t.title), 1)
      ]),
      l.$slots.default || t.description ? (s(), o("div", Jo, [
        t.description ? (s(), o("p", Yo, a(t.description), 1)) : d("", !0),
        $e(l.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      t.items && t.items.length ? (s(), o("div", Xo, [
        (s(!0), o(W, null, oe(t.items, (g, u) => (s(), o("div", {
          key: u,
          class: "issue-card__item"
        }, [
          p[0] || (p[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(g), 1)
        ]))), 128))
      ])) : d("", !0),
      l.$slots.actions ? (s(), o("div", Qo, [
        $e(l.$slots, "actions", {}, void 0, !0)
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
      t.loading ? d("", !0) : $e(c.$slots, "default", { key: 1 }, void 0, !0)
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
      t.actionLabel ? (s(), I(ne, {
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
      $e(c.$slots, "default", {}, void 0, !0)
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
      $e(c.$slots, "default", {}, void 0, !0)
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
      t.value ? (s(), I(ls, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: i(() => [
          h(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : $e(c.$slots, "value", { key: 1 }, void 0, !0)
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
    Ne(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), _t(() => c.show, (_, k) => {
      console.log("StatusDetailModal show prop changed from", k, "to", _);
    }, { immediate: !0 });
    const l = N(() => {
      var _, k, R;
      return ((R = (k = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : k.analyzed) == null ? void 0 : R.filter(
        (A) => A.status === "broken" && A.sync_state === "synced"
      )) || [];
    }), p = N(() => {
      var _, k, R;
      return ((R = (k = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : k.analyzed) == null ? void 0 : R.filter(
        (A) => A.status === "broken" && A.sync_state !== "synced"
      )) || [];
    }), g = N(() => {
      var _, k, R;
      return ((R = (k = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : k.synced) == null ? void 0 : R.filter((A) => {
        var C, P, E;
        const f = (E = (P = (C = c.status) == null ? void 0 : C.workflows) == null ? void 0 : P.analyzed) == null ? void 0 : E.find((x) => x.name === A);
        return !f || f.status !== "broken";
      })) || [];
    }), u = N(() => {
      var _, k, R, A, f;
      return (_ = c.status) != null && _.workflows ? (((k = c.status.workflows.new) == null ? void 0 : k.length) ?? 0) > 0 || (((R = c.status.workflows.modified) == null ? void 0 : R.length) ?? 0) > 0 || (((A = c.status.workflows.deleted) == null ? void 0 : A.length) ?? 0) > 0 || (((f = c.status.workflows.synced) == null ? void 0 : f.length) ?? 0) > 0 : !1;
    }), v = N(() => {
      var k, R, A;
      const _ = (k = c.status) == null ? void 0 : k.git_changes;
      return _ ? (((R = _.nodes_added) == null ? void 0 : R.length) ?? 0) > 0 || (((A = _.nodes_removed) == null ? void 0 : A.length) ?? 0) > 0 || _.workflow_changes || _.has_other_changes : !1;
    }), r = N(() => {
      var _, k, R, A, f, C;
      return !u.value && !v.value && ((k = (_ = c.status) == null ? void 0 : _.comparison) == null ? void 0 : k.is_synced) && (((R = c.status) == null ? void 0 : R.missing_models_count) ?? 0) === 0 && (((C = (f = (A = c.status) == null ? void 0 : A.comparison) == null ? void 0 : f.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
    }), m = N(() => {
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
      var R, A, f, C, P, E, x, Y, F, G, T, M, D, le, se, X, de, K, L, U, S, ae;
      return s(), I(Ve, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: k[7] || (k[7] = (Q) => _.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: k[6] || (k[6] = ze(() => {
            }, ["stop"]))
          }, [
            e("div", mn, [
              k[8] || (k[8] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: k[0] || (k[0] = (Q) => _.$emit("close"))
              }, "✕")
            ]),
            e("div", vn, [
              e("div", fn, [
                b(tt, { level: "4" }, {
                  default: i(() => [...k[9] || (k[9] = [
                    h("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                b(De, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (s(), o("div", gn, [
                e("div", pn, [
                  b(tt, { level: "4" }, {
                    default: i(() => [...k[10] || (k[10] = [
                      h("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: k[1] || (k[1] = (Q) => _.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                l.value.length ? (s(), o("div", hn, [
                  e("div", yn, [
                    k[11] || (k[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", wn, "BROKEN (COMMITTED) (" + a(l.value.length) + ")", 1)
                  ]),
                  e("div", kn, [
                    (s(!0), o(W, null, oe(l.value, (Q) => (s(), o("div", {
                      key: Q.name,
                      class: "workflow-item"
                    }, [
                      e("span", bn, a(Q.name), 1),
                      e("span", _n, a(Q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                p.value.length ? (s(), o("div", $n, [
                  e("div", Cn, [
                    k[12] || (k[12] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", xn, "BROKEN (UNCOMMITTED) (" + a(p.value.length) + ")", 1)
                  ]),
                  e("div", Sn, [
                    (s(!0), o(W, null, oe(p.value, (Q) => (s(), o("div", {
                      key: Q.name,
                      class: "workflow-item"
                    }, [
                      e("span", In, a(Q.name), 1),
                      e("span", En, a(Q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (A = (R = t.status.workflows) == null ? void 0 : R.new) != null && A.length ? (s(), o("div", Mn, [
                  e("div", Tn, [
                    k[13] || (k[13] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Rn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", zn, [
                    (s(!0), o(W, null, oe(t.status.workflows.new, (Q) => (s(), o("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Ln, a(Q), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (C = (f = t.status.workflows) == null ? void 0 : f.modified) != null && C.length ? (s(), o("div", Pn, [
                  e("div", Dn, [
                    k[14] || (k[14] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Nn, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Un, [
                    (s(!0), o(W, null, oe(t.status.workflows.modified, (Q) => (s(), o("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", On, a(Q), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (E = (P = t.status.workflows) == null ? void 0 : P.deleted) != null && E.length ? (s(), o("div", Bn, [
                  e("div", Fn, [
                    k[15] || (k[15] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", An, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Vn, [
                    (s(!0), o(W, null, oe(t.status.workflows.deleted, (Q) => (s(), o("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Wn, a(Q), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                g.value.length ? (s(), o("div", Gn, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: k[2] || (k[2] = (Q) => n.value = !n.value)
                  }, [
                    k[16] || (k[16] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", jn, "SYNCED (" + a(g.value.length) + ")", 1),
                    e("span", qn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", Hn, [
                    (s(!0), o(W, null, oe(g.value, (Q) => (s(), o("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Kn, a(Q), 1)
                    ]))), 128))
                  ])) : d("", !0)
                ])) : d("", !0)
              ])) : d("", !0),
              v.value ? (s(), o("div", Jn, [
                b(tt, { level: "4" }, {
                  default: i(() => [...k[17] || (k[17] = [
                    h("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (Y = (x = t.status.git_changes) == null ? void 0 : x.nodes_added) != null && Y.length ? (s(), o("div", Yn, [
                  e("div", Xn, [
                    k[18] || (k[18] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Qn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Zn, [
                    (s(!0), o(W, null, oe(t.status.git_changes.nodes_added, (Q) => (s(), o("div", {
                      key: y(Q),
                      class: "change-item"
                    }, [
                      e("span", ea, a(y(Q)), 1),
                      w(Q) ? (s(), o("span", ta, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (G = (F = t.status.git_changes) == null ? void 0 : F.nodes_removed) != null && G.length ? (s(), o("div", sa, [
                  e("div", oa, [
                    k[19] || (k[19] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", na, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", aa, [
                    (s(!0), o(W, null, oe(t.status.git_changes.nodes_removed, (Q) => (s(), o("div", {
                      key: y(Q),
                      class: "change-item"
                    }, [
                      e("span", la, a(y(Q)), 1),
                      w(Q) ? (s(), o("span", ia, "dev")) : d("", !0)
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
                (M = t.status.git_changes) != null && M.has_other_changes ? (s(), o("div", ma, [...k[21] || (k[21] = [
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
              (D = t.status.comparison) != null && D.is_synced ? d("", !0) : (s(), o("div", va, [
                e("div", fa, [
                  b(tt, { level: "4" }, {
                    default: i(() => [...k[22] || (k[22] = [
                      h("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: k[3] || (k[3] = (Q) => _.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                k[26] || (k[26] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (se = (le = t.status.comparison) == null ? void 0 : le.missing_nodes) != null && se.length ? (s(), o("div", ga, [
                  b(De, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", pa, [
                    (s(!0), o(W, null, oe(t.status.comparison.missing_nodes.slice(0, 10), (Q) => (s(), o("div", {
                      key: Q,
                      class: "drift-list-item"
                    }, " - " + a(Q), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", ha, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (de = (X = t.status.comparison) == null ? void 0 : X.extra_nodes) != null && de.length ? (s(), o("div", ya, [
                  b(De, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", wa, [
                    (s(!0), o(W, null, oe(t.status.comparison.extra_nodes.slice(0, 10), (Q) => (s(), o("div", {
                      key: Q,
                      class: "drift-list-item"
                    }, " - " + a(Q), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", ka, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (L = (K = t.status.comparison) == null ? void 0 : K.version_mismatches) != null && L.length ? (s(), o("div", ba, [
                  b(De, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  e("div", _a, [
                    (s(!0), o(W, null, oe(t.status.comparison.version_mismatches.slice(0, 10), (Q) => (s(), o("div", {
                      key: Q.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      h(a(Q.name) + ": ", 1),
                      e("span", $a, a(Q.actual), 1),
                      k[23] || (k[23] = h(" → ", -1)),
                      e("span", Ca, a(Q.expected), 1)
                    ]))), 128)),
                    t.status.comparison.version_mismatches.length > 10 ? (s(), o("div", xa, " ... and " + a(t.status.comparison.version_mismatches.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                ((U = t.status.comparison) == null ? void 0 : U.packages_in_sync) === !1 ? (s(), o("div", Sa, [
                  b(De, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : d("", !0),
                e("div", Ia, [
                  b(ne, {
                    variant: "warning",
                    loading: t.isRepairing,
                    onClick: k[4] || (k[4] = (Q) => _.$emit("repair"))
                  }, {
                    default: i(() => [...k[24] || (k[24] = [
                      h(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  k[25] || (k[25] = e("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ae = (S = t.status.comparison) == null ? void 0 : S.disabled_nodes) != null && ae.length ? (s(), o("div", Ea, [
                b(tt, { level: "4" }, {
                  default: i(() => [...k[27] || (k[27] = [
                    h("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Ma, [
                  k[28] || (k[28] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Ta, [
                  (s(!0), o(W, null, oe(t.status.comparison.disabled_nodes.slice(0, 10), (Q) => (s(), o("div", {
                    key: Q,
                    class: "drift-list-item"
                  }, " • " + a(Q), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", Ra, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : d("", !0)
                ])
              ])) : d("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", za, [
                b(tt, { level: "4" }, {
                  default: i(() => [...k[29] || (k[29] = [
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
              b(ne, {
                variant: "secondary",
                onClick: k[5] || (k[5] = (Q) => _.$emit("close"))
              }, {
                default: i(() => [...k[33] || (k[33] = [
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
    function _() {
      w.value = !0, m("repair-environment");
    }
    function k() {
      w.value = !1;
    }
    function R() {
      p.value = !1;
    }
    const A = N(() => {
      const K = l.status.workflows.analyzed || [], L = K.filter(
        (U) => U.unresolved_models_count > 0 || U.ambiguous_models_count > 0
      );
      return L.length === 0 && l.status.missing_models_count > 0 ? K.filter((U) => U.sync_state === "synced") : L;
    });
    function f() {
      const K = A.value;
      K.length !== 0 && (y.value = !0, m("repair-missing-models", K.map((L) => L.name)));
    }
    function C() {
      y.value = !1;
    }
    c({ resetRepairingState: C, resetRepairingEnvironmentState: k, closeDetailModal: R });
    const P = N(() => l.status.workflows.new.length > 0 || l.status.workflows.modified.length > 0 || l.status.workflows.deleted.length > 0), E = N(() => l.status.has_changes), x = N(() => {
      const K = l.status.git_changes;
      return K.nodes_added.length > 0 || K.nodes_removed.length > 0 || K.workflow_changes;
    }), Y = N(() => l.status.has_changes || P.value), F = N(() => Object.keys(l.status.git_changes.workflow_changes_detail).length), G = N(() => l.status.git_changes.has_other_changes), T = N(() => {
      var K;
      return ((K = l.status.workflows.analyzed) == null ? void 0 : K.filter((L) => L.status === "broken")) || [];
    }), M = N(() => {
      var K;
      return ((K = l.status.workflows.analyzed) == null ? void 0 : K.filter(
        (L) => L.has_path_sync_issues && !L.has_issues
      )) || [];
    }), D = N(() => T.value.length > 0), le = N(() => D.value || M.value.length > 0 || l.status.missing_models_count > 0 || !l.status.comparison.is_synced || l.status.has_legacy_manager), se = N(() => {
      const K = [];
      return l.status.workflows.new.length > 0 && K.push(`${l.status.workflows.new.length} new`), l.status.workflows.modified.length > 0 && K.push(`${l.status.workflows.modified.length} modified`), l.status.workflows.deleted.length > 0 && K.push(`${l.status.workflows.deleted.length} deleted`), K.length > 0 ? `${K.join(", ")} workflow${K.length === 1 && !K[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), X = N(() => {
      var U, S;
      const K = [], L = l.status.comparison;
      return (U = L.missing_nodes) != null && U.length && K.push(`${L.missing_nodes.length} missing node${L.missing_nodes.length === 1 ? "" : "s"}`), (S = L.extra_nodes) != null && S.length && K.push(`${L.extra_nodes.length} untracked node${L.extra_nodes.length === 1 ? "" : "s"}`), K.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${K.join(" and ")}.`;
    }), de = N(() => {
      var U, S;
      const K = [], L = l.status.comparison;
      return (U = L.extra_nodes) != null && U.length && (L.extra_nodes.slice(0, 3).forEach((ae) => {
        K.push(`Untracked: ${ae}`);
      }), L.extra_nodes.length > 3 && K.push(`...and ${L.extra_nodes.length - 3} more untracked`)), (S = L.missing_nodes) != null && S.length && (L.missing_nodes.slice(0, 3).forEach((ae) => {
        K.push(`Missing: ${ae}`);
      }), L.missing_nodes.length > 3 && K.push(`...and ${L.missing_nodes.length - 3} more missing`)), K;
    });
    return (K, L) => (s(), o(W, null, [
      b(Ke, null, {
        header: i(() => [
          b(Je, { title: "STATUS" })
        ]),
        content: i(() => [
          l.setupState === "no_workspace" ? (s(), I(nt, {
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
                onClick: L[0] || (L[0] = (U) => K.$emit("start-setup"))
              }, {
                default: i(() => [...L[13] || (L[13] = [
                  h(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : l.setupState === "unmanaged" ? (s(), I(nt, {
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
                onClick: L[1] || (L[1] = (U) => K.$emit("view-environments"))
              }, {
                default: i(() => [...L[14] || (L[14] = [
                  h(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : l.setupState === "empty_workspace" ? (s(), I(nt, {
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
                onClick: L[2] || (L[2] = (U) => K.$emit("create-environment"))
              }, {
                default: i(() => [...L[15] || (L[15] = [
                  h(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: L[4] || (L[4] = (U) => g.value = !0),
            onMouseleave: L[5] || (L[5] = (U) => g.value = !1)
          }, [
            e("div", Oa, [
              b(tt, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: i(() => [...L[16] || (L[16] = [
                  h(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              b(ro, { name: "fade" }, {
                default: i(() => [
                  g.value ? (s(), I(ne, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: u
                  }, {
                    default: i(() => [...L[17] || (L[17] = [
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
              left: i(() => [
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
                  separator: P.value
                }, null, 8, ["count", "separator"])
              ]),
              right: i(() => [
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
                  count: F.value,
                  label: F.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : d("", !0),
                G.value ? (s(), I(ct, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : d("", !0),
                E.value && !x.value && !G.value ? (s(), I(ct, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : d("", !0),
                E.value ? d("", !0) : (s(), I(ct, {
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
                  L[19] || (L[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Ba, [
                    e("span", Fa, a(se.value), 1),
                    b(ne, {
                      variant: "primary",
                      size: "sm",
                      onClick: L[3] || (L[3] = (U) => K.$emit("commit-changes"))
                    }, {
                      default: i(() => [...L[18] || (L[18] = [
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
          t.status.is_detached_head ? (s(), I(nt, {
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
                onClick: L[6] || (L[6] = (U) => K.$emit("create-branch"))
              }, {
                default: i(() => [...L[20] || (L[20] = [
                  h(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", Aa, [
            b(tt, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...L[21] || (L[21] = [
                h(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            le.value ? (s(), o(W, { key: 0 }, [
              T.value.length > 0 ? (s(), I(nt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${T.value.length} workflow${T.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: T.value.map((U) => `${U.name} — ${U.issue_summary}`)
              }, {
                actions: i(() => [
                  b(ne, {
                    variant: "primary",
                    size: "sm",
                    onClick: L[7] || (L[7] = (U) => K.$emit("view-workflows"))
                  }, {
                    default: i(() => [...L[22] || (L[22] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              M.value.length > 0 ? (s(), I(nt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${M.value.length} workflow${M.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: M.value.map((U) => `${U.name} — ${U.models_needing_path_sync_count} model path${U.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: i(() => [
                  b(ne, {
                    variant: "primary",
                    size: "sm",
                    onClick: L[8] || (L[8] = (U) => K.$emit("view-workflows"))
                  }, {
                    default: i(() => [...L[23] || (L[23] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              t.status.missing_models_count > 0 && !D.value ? (s(), I(nt, {
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
                    onClick: L[9] || (L[9] = (U) => K.$emit("view-workflows"))
                  }, {
                    default: i(() => [...L[24] || (L[24] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : d("", !0),
              t.status.comparison.is_synced ? d("", !0) : (s(), I(nt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: X.value,
                items: de.value
              }, {
                actions: i(() => [
                  b(ne, {
                    variant: "secondary",
                    size: "sm",
                    onClick: u
                  }, {
                    default: i(() => [...L[25] || (L[25] = [
                      h(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  b(ne, {
                    variant: "primary",
                    size: "sm",
                    onClick: L[10] || (L[10] = (U) => K.$emit("view-nodes"))
                  }, {
                    default: i(() => [...L[26] || (L[26] = [
                      h(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), I(nt, {
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
                    onClick: L[11] || (L[11] = (U) => K.$emit("view-nodes"))
                  }, {
                    default: i(() => [...L[27] || (L[27] = [
                      h(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : d("", !0)
            ], 64)) : Y.value ? (s(), o("span", Va, "No issues")) : (s(), I(it, {
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
        onClose: L[12] || (L[12] = (U) => p.value = !1),
        onNavigateWorkflows: v,
        onNavigateNodes: r,
        onRepair: _
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), Ga = /* @__PURE__ */ te(Wa, [["__scopeId", "data-v-55fcd77f"]]), ja = ["type", "value", "placeholder", "disabled"], qa = /* @__PURE__ */ ee({
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
    return Ne(() => {
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
}), Qt = /* @__PURE__ */ te(qa, [["__scopeId", "data-v-0380d08f"]]), Ha = { class: "branch-create-form" }, Ka = { class: "form-actions" }, Ja = /* @__PURE__ */ ee({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, l = $(""), p = N(() => {
      const v = l.value.trim();
      return v.length > 0 && !v.startsWith("-") && !v.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(v);
    });
    function g() {
      p.value && (n("create", l.value.trim()), l.value = "");
    }
    function u() {
      l.value = "", n("cancel");
    }
    return (v, r) => (s(), o("div", Ha, [
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
        $e(c.$slots, "actions", {}, void 0, !0),
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
    return (u, v) => (s(), I(Ke, null, {
      header: i(() => [
        b(Je, { title: "BRANCHES" }, {
          actions: i(() => [
            l.value ? d("", !0) : (s(), I(ne, {
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
        l.value ? (s(), I(Ya, {
          key: 0,
          onCreate: p,
          onCancel: g
        })) : d("", !0),
        t.branches.length === 0 ? (s(), I(it, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", ol, [
          (s(!0), o(W, null, oe(t.branches, (r) => (s(), I(sl, {
            key: r.name,
            "branch-name": r.name,
            "is-current": r.is_current
          }, {
            actions: i(() => [
              r.is_current ? d("", !0) : (s(), I(ne, {
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
              r.is_current ? d("", !0) : (s(), I(ne, {
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
      $e(c.$slots, "default", {}, void 0, !0)
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
        $e(g.$slots, "actions", {}, void 0, !0)
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
    return (c, n) => (s(), I(Ke, null, {
      header: i(() => [
        b(Je, { title: "HISTORY" })
      ]),
      content: i(() => [
        t.commits.length === 0 ? (s(), I(it, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), I(rl, { key: 1 }, {
          default: i(() => [
            (s(!0), o(W, null, oe(t.commits, (l) => (s(), I(fl, {
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
}), pl = /* @__PURE__ */ te(gl, [["__scopeId", "data-v-981c3c64"]]), N2 = ts({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const U2 = [
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
], O2 = {
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
], B2 = [
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
function Fe() {
  const t = $(!1), c = $(null);
  async function n(H, ue) {
    var Le;
    if (!((Le = window.app) != null && Le.api))
      throw new Error("ComfyUI API not available");
    const he = await window.app.api.fetchApi(H, ue);
    if (!he.ok) {
      const qe = await he.json().catch(() => ({}));
      throw new Error(qe.error || qe.message || `Request failed: ${he.status}`);
    }
    return he.json();
  }
  async function l(H = !1) {
    return n(H ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function p(H, ue = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: H, allow_issues: ue })
    });
  }
  async function g(H = 10, ue = 0) {
    return n(`/v2/comfygit/log?limit=${H}&offset=${ue}`);
  }
  async function u(H) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: H })
    });
  }
  async function v() {
    return n("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function r(H) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: H, force: !0 })
    });
  }
  async function m() {
    return n("/v2/comfygit/branches");
  }
  async function y(H) {
    return n(`/v2/comfygit/commit/${H}`);
  }
  async function w(H, ue = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: H, force: ue })
    });
  }
  async function _(H, ue = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, start_point: ue })
    });
  }
  async function k(H, ue = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: H, force: ue })
    });
  }
  async function R(H, ue = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(H)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ue })
    });
  }
  async function A() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const H = await l();
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
  async function f(H, ue) {
    const he = { target_env: H };
    return ue && (he.workspace_path = ue), n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(he)
    });
  }
  async function C() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function P(H) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function E() {
    return n("/v2/workspace/environments/create_status");
  }
  async function x(H = 20) {
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
      const ue = await l(H), he = [];
      return ue.workflows.new.forEach((Le) => {
        he.push({ name: Le, status: "new", missing_nodes: 0, missing_models: 0, path: Le });
      }), ue.workflows.modified.forEach((Le) => {
        he.push({ name: Le, status: "modified", missing_nodes: 0, missing_models: 0, path: Le });
      }), ue.workflows.synced.forEach((Le) => {
        he.push({ name: Le, status: "synced", missing_nodes: 0, missing_models: 0, path: Le });
      }), he;
    }
  }
  async function G(H) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/details`);
  }
  async function T(H) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/resolve`, {
      method: "POST"
    });
  }
  async function M(H, ue, he) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ue, install_models: he })
    });
  }
  async function D(H, ue, he) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ue, importance: he })
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
  async function X(H) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(H)}`);
  }
  async function de(H) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function K(H, ue) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ue })
    });
  }
  async function L(H, ue) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ue })
    });
  }
  async function U(H) {
    return n(`/v2/workspace/models/${H}`, {
      method: "DELETE"
    });
  }
  async function S(H) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function ae() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function Q() {
    return n("/v2/workspace/models/directory");
  }
  async function Me(H) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function we(H) {
    try {
      const ue = H ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(H)}` : "/v2/comfygit/config";
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
  async function Oe(H, ue) {
    const he = ue ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(ue)}` : "/v2/comfygit/config";
    return n(he, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function Te(H, ue) {
    try {
      const he = new URLSearchParams();
      return H && he.append("level", H), ue && he.append("lines", ue.toString()), n(`/v2/comfygit/debug/logs?${he}`);
    } catch {
      return [];
    }
  }
  async function ce(H, ue) {
    try {
      const he = new URLSearchParams();
      return H && he.append("level", H), ue && he.append("lines", ue.toString()), n(`/v2/workspace/debug/logs?${he}`);
    } catch {
      return [];
    }
  }
  async function ve() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function Re() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function ie(H) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function J() {
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
  async function Se(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/track-dev`, {
      method: "POST"
    });
  }
  async function be(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/install`, {
      method: "POST"
    });
  }
  async function st(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/update`, {
      method: "POST"
    });
  }
  async function rt(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}`, {
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
  async function xe(H, ue) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, url: ue })
    });
  }
  async function Ge(H) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function Xe(H, ue, he) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ue, push_url: he })
    });
  }
  async function je(H) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/fetch`, {
      method: "POST"
    });
  }
  async function ft(H) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/status`);
    } catch {
      return null;
    }
  }
  async function ke(H = "skip", ue = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: H,
        remove_extra_nodes: ue
      })
    });
  }
  async function Ae(H, ue) {
    const he = ue ? `/v2/comfygit/remotes/${encodeURIComponent(H)}/pull-preview?branch=${encodeURIComponent(ue)}` : `/v2/comfygit/remotes/${encodeURIComponent(H)}/pull-preview`;
    return n(he);
  }
  async function dt(H, ue = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: ue.modelStrategy || "skip",
        force: ue.force || !1,
        resolutions: ue.resolutions
      })
    });
  }
  async function re(H, ue) {
    const he = ue ? `/v2/comfygit/remotes/${encodeURIComponent(H)}/push-preview?branch=${encodeURIComponent(ue)}` : `/v2/comfygit/remotes/${encodeURIComponent(H)}/push-preview`;
    return n(he);
  }
  async function q(H, ue = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ue.force || !1 })
    });
  }
  async function Ee(H, ue) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: ue })
    });
  }
  async function O(H) {
    const ue = {
      success: 0,
      failed: []
    };
    for (const he of H)
      try {
        await T(he), ue.success++;
      } catch (Le) {
        ue.failed.push({
          name: he,
          error: Le instanceof Error ? Le.message : "Unknown error"
        });
      }
    return ue;
  }
  async function B(H) {
    var Le;
    const ue = new FormData();
    if (ue.append("file", H), !((Le = window.app) != null && Le.api))
      throw new Error("ComfyUI API not available");
    const he = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: ue
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!he.ok) {
      const qe = await he.json().catch(() => ({}));
      throw new Error(qe.error || `Preview failed: ${he.status}`);
    }
    return he.json();
  }
  async function V(H) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(H)}`
    );
  }
  async function Z(H, ue, he, Le) {
    var qt;
    const qe = new FormData();
    if (qe.append("file", H), qe.append("name", ue), qe.append("model_strategy", he), qe.append("torch_backend", Le), !((qt = window.app) != null && qt.api))
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
  async function pe() {
    return n("/v2/workspace/import/status");
  }
  async function Qe(H) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: H })
    });
  }
  async function gt(H, ue, he, Le) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: H,
        name: ue,
        model_strategy: he,
        torch_backend: Le
      })
    });
  }
  async function Ct() {
    return n("/v2/setup/status");
  }
  async function ot(H) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function xt() {
    return n("/v2/setup/initialize_status");
  }
  async function St(H) {
    return n("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
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
    createBranch: _,
    switchBranch: k,
    deleteBranch: R,
    // Environment Management
    getEnvironments: A,
    switchEnvironment: f,
    getSwitchProgress: C,
    createEnvironment: P,
    getCreateProgress: E,
    getComfyUIReleases: x,
    deleteEnvironment: Y,
    // Workflow Management
    getWorkflows: F,
    getWorkflowDetails: G,
    resolveWorkflow: T,
    installWorkflowDeps: M,
    setModelImportance: D,
    // Model Management
    getEnvironmentModels: le,
    getWorkspaceModels: se,
    getModelDetails: X,
    openFileLocation: de,
    addModelSource: K,
    removeModelSource: L,
    deleteModel: U,
    downloadModel: S,
    scanWorkspaceModels: ae,
    getModelsDirectory: Q,
    setModelsDirectory: Me,
    // Settings
    getConfig: we,
    updateConfig: Oe,
    // Debug/Logs
    getEnvironmentLogs: Te,
    getWorkspaceLogs: ce,
    getEnvironmentLogPath: ve,
    getWorkspaceLogPath: Re,
    openFile: ie,
    // Node Management
    getNodes: J,
    trackNodeAsDev: Se,
    installNode: be,
    updateNode: st,
    uninstallNode: rt,
    // Git Remotes
    getRemotes: vt,
    addRemote: xe,
    removeRemote: Ge,
    updateRemoteUrl: Xe,
    fetchRemote: je,
    getRemoteSyncStatus: ft,
    // Push/Pull
    getPullPreview: Ae,
    pullFromRemote: dt,
    getPushPreview: re,
    pushToRemote: q,
    validateMerge: Ee,
    // Environment Sync
    syncEnvironmentManually: ke,
    // Workflow Repair
    repairWorkflowModels: O,
    // Import Operations
    previewTarballImport: B,
    previewGitImport: Qe,
    validateEnvironmentName: V,
    executeImport: Z,
    executeGitImport: gt,
    getImportProgress: pe,
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
    return Ne(() => {
      document.addEventListener("keydown", g), document.body.style.overflow = "hidden";
    }), zs(() => {
      document.removeEventListener("keydown", g), document.body.style.overflow = "";
    }), (u, v) => (s(), I(Ve, { to: "body" }, [
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
            $e(u.$slots, "header", {}, () => [
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
            t.loading ? (s(), o("div", bl, "Loading...")) : t.error ? (s(), o("div", _l, a(t.error), 1)) : $e(u.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          u.$slots.footer ? (s(), o("div", $l, [
            $e(u.$slots, "footer", {}, void 0, !0)
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
      $e(c.$slots, "default", {}, void 0, !0)
    ], 10, xl));
  }
}), fe = /* @__PURE__ */ te(Il, [["__scopeId", "data-v-f3452606"]]), El = {
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
    return (c, n) => (s(), I(cs(`h${t.level}`), {
      class: me(["base-title", t.variant])
    }, {
      default: i(() => [
        $e(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", El, "(" + a(t.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ft = /* @__PURE__ */ te(Ml, [["__scopeId", "data-v-5a01561d"]]), Tl = ["value", "disabled"], Rl = {
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
        (s(!0), o(W, null, oe(t.options, (g) => (s(), o("option", {
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
}, Fl = /* @__PURE__ */ ee({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (s(), I(Ve, { to: "body" }, [
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
            $e(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (s(), o("div", Bl, [
            $e(c.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), mt = /* @__PURE__ */ te(Fl, [["__scopeId", "data-v-42815ace"]]), Al = { class: "detail-section" }, Vl = {
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
}, ii = /* @__PURE__ */ ee({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, l = c, { getWorkflowDetails: p, setModelImportance: g, openFileLocation: u } = Fe(), v = $(null), r = $(!1), m = $(null), y = $(!1), w = $({}), _ = $(!1), k = $(/* @__PURE__ */ new Set()), R = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function A(T) {
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
      const M = T.hash || T.filename;
      return k.value.has(M) ? T.loaded_by : T.loaded_by.slice(0, 3);
    }
    function P(T) {
      return k.value.has(T);
    }
    function E(T) {
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
    function Y(T, M) {
      w.value[T] = M, y.value = !0;
    }
    async function F(T) {
      try {
        await u(T);
      } catch (M) {
        m.value = M instanceof Error ? M.message : "Failed to open file location";
      }
    }
    async function G() {
      if (!y.value) {
        l("close");
        return;
      }
      r.value = !0, m.value = null;
      try {
        for (const [T, M] of Object.entries(w.value))
          await g(n.workflowName, T, M);
        l("refresh"), l("close");
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to save changes";
      } finally {
        r.value = !1;
      }
    }
    return Ne(x), (T, M) => (s(), o(W, null, [
      b(Ye, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: r.value,
        error: m.value || void 0,
        onClose: M[4] || (M[4] = (D) => l("close"))
      }, {
        body: i(() => [
          v.value ? (s(), o(W, { key: 0 }, [
            e("section", Al, [
              b(Ft, { variant: "section" }, {
                default: i(() => [
                  h("MODELS USED (" + a(v.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.models.length === 0 ? (s(), o("div", Vl, " No models used in this workflow ")) : d("", !0),
              (s(!0), o(W, null, oe(v.value.models, (D) => {
                var le;
                return s(), o("div", {
                  key: D.hash || D.filename,
                  class: "model-card"
                }, [
                  e("div", Wl, [
                    M[6] || (M[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", Gl, a(D.filename), 1)
                  ]),
                  e("div", jl, [
                    e("div", ql, [
                      M[7] || (M[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: me(["value", A(D.status)])
                      }, a(f(D.status)), 3)
                    ]),
                    e("div", Hl, [
                      e("span", Kl, [
                        M[8] || (M[8] = h(" Importance: ", -1)),
                        b(Ls, {
                          size: 14,
                          title: "About importance levels",
                          onClick: M[0] || (M[0] = (se) => _.value = !0)
                        })
                      ]),
                      b(Dl, {
                        "model-value": w.value[D.filename] || D.importance,
                        options: R,
                        "onUpdate:modelValue": (se) => Y(D.filename, se)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    D.loaded_by && D.loaded_by.length > 0 ? (s(), o("div", Jl, [
                      M[9] || (M[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", Yl, [
                        (s(!0), o(W, null, oe(C(D), (se, X) => (s(), o("div", {
                          key: `${se.node_id}-${X}`,
                          class: "node-reference"
                        }, a(se.node_type) + " (Node #" + a(se.node_id) + ") ", 1))), 128)),
                        D.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (se) => E(D.hash || D.filename)
                        }, a(P(D.hash || D.filename) ? "▼ Show less" : `▶ View all (${D.loaded_by.length})`), 9, Xl)) : d("", !0)
                      ])
                    ])) : d("", !0),
                    D.size_mb ? (s(), o("div", Ql, [
                      M[10] || (M[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", Zl, a(D.size_mb) + " MB", 1)
                    ])) : d("", !0),
                    D.has_category_mismatch ? (s(), o("div", ei, [
                      M[13] || (M[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", ti, [
                        M[11] || (M[11] = h(" In ", -1)),
                        e("code", null, a(D.actual_category) + "/", 1),
                        M[12] || (M[12] = h(" but loader needs ", -1)),
                        e("code", null, a((le = D.expected_categories) == null ? void 0 : le[0]) + "/", 1)
                      ])
                    ])) : d("", !0)
                  ]),
                  D.status !== "available" ? (s(), o("div", si, [
                    D.status === "downloadable" ? (s(), I(fe, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: M[1] || (M[1] = (se) => l("resolve"))
                    }, {
                      default: i(() => [...M[14] || (M[14] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    })) : D.status === "category_mismatch" && D.file_path ? (s(), I(fe, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => F(D.file_path)
                    }, {
                      default: i(() => [...M[15] || (M[15] = [
                        h(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : D.status !== "path_mismatch" ? (s(), I(fe, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: M[2] || (M[2] = (se) => l("resolve"))
                    }, {
                      default: i(() => [...M[16] || (M[16] = [
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
                default: i(() => [
                  h("NODES USED (" + a(v.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.nodes.length === 0 ? (s(), o("div", ni, " No custom nodes used in this workflow ")) : d("", !0),
              (s(!0), o(W, null, oe(v.value.nodes, (D) => (s(), o("div", {
                key: D.name,
                class: "node-item"
              }, [
                e("span", {
                  class: me(["node-status", D.status === "installed" ? "installed" : "missing"])
                }, a(D.status === "installed" ? "✓" : "✕"), 3),
                e("span", ai, a(D.name), 1),
                D.version ? (s(), o("span", li, "v" + a(D.version), 1)) : d("", !0)
              ]))), 128))
            ])
          ], 64)) : d("", !0)
        ]),
        footer: i(() => [
          b(fe, {
            variant: "secondary",
            onClick: M[3] || (M[3] = (D) => l("close"))
          }, {
            default: i(() => [...M[17] || (M[17] = [
              h(" Close ", -1)
            ])]),
            _: 1
          }),
          y.value ? (s(), I(fe, {
            key: 0,
            variant: "primary",
            onClick: G
          }, {
            default: i(() => [...M[18] || (M[18] = [
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
        onClose: M[5] || (M[5] = (D) => _.value = !1)
      }, {
        content: i(() => [...M[19] || (M[19] = [
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
}), ri = /* @__PURE__ */ te(ii, [["__scopeId", "data-v-668728e6"]]), Ie = ts({
  items: [],
  status: "idle"
});
let ut = null;
function Ns() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function ss(t) {
  return Ie.items.find((c) => c.id === t);
}
async function Mt() {
  if (Ie.status === "downloading") return;
  const t = Ie.items.find((c) => c.status === "queued");
  if (!t) {
    Ie.status = "idle";
    return;
  }
  Ie.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await di(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    Ie.status = "idle", Mt();
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
      if (Ie.items.some((p) => p.url === n.url && p.filename === n.filename))
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
      Ie.items.push(l);
    }
    console.log(`[ComfyGit] Loaded ${c.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Gt() {
  function t(f) {
    for (const C of f) {
      if (Ie.items.some(
        (x) => x.url === C.url && x.targetPath === C.targetPath && ["queued", "downloading", "paused", "completed"].includes(x.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${C.filename}`);
        continue;
      }
      const E = {
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
      Ie.items.push(E);
    }
    Ie.status === "idle" && Mt();
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
        ut && (ut.close(), ut = null), C.status = "failed", C.error = "Cancelled by user", Ie.status = "idle", Mt();
      } else if (C.status === "queued") {
        const P = Ie.items.findIndex((E) => E.id === f);
        P >= 0 && Ie.items.splice(P, 1);
      }
    }
  }
  function n(f) {
    const C = ss(f);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, Ie.status === "idle" && Mt());
  }
  function l(f) {
    const C = ss(f);
    !C || C.status !== "paused" || (C.status = "queued", Ie.status === "idle" && Mt());
  }
  function p() {
    const f = Ie.items.filter((C) => C.status === "paused");
    for (const C of f)
      C.status = "queued";
    Ie.status === "idle" && Mt();
  }
  function g(f) {
    const C = Ie.items.findIndex((P) => P.id === f);
    C >= 0 && ["completed", "failed", "paused"].includes(Ie.items[C].status) && Ie.items.splice(C, 1);
  }
  function u() {
    Ie.items = Ie.items.filter((f) => f.status !== "completed");
  }
  function v() {
    Ie.items = Ie.items.filter((f) => f.status !== "failed");
  }
  const r = N(
    () => Ie.items.find((f) => f.status === "downloading")
  ), m = N(
    () => Ie.items.filter((f) => f.status === "queued")
  ), y = N(
    () => Ie.items.filter((f) => f.status === "completed")
  ), w = N(
    () => Ie.items.filter((f) => f.status === "failed")
  ), _ = N(
    () => Ie.items.filter((f) => f.status === "paused")
  ), k = N(() => Ie.items.length > 0), R = N(
    () => Ie.items.filter((f) => f.status === "queued" || f.status === "downloading").length
  ), A = N(
    () => Ie.items.some((f) => f.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: co(Ie),
    // Computed
    currentDownload: r,
    queuedItems: m,
    completedItems: y,
    failedItems: w,
    pausedItems: _,
    hasItems: k,
    activeCount: R,
    hasPaused: A,
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
  async function u(P, E) {
    var Y;
    if (!((Y = window.app) != null && Y.api))
      throw new Error("ComfyUI API not available");
    const x = await window.app.api.fetchApi(P, E);
    if (!x.ok) {
      const F = await x.json().catch(() => ({})), G = F.error || F.message || `Request failed: ${x.status}`;
      throw new Error(G);
    }
    return x.json();
  }
  async function v(P) {
    p.value = !0, g.value = null;
    try {
      let E;
      return Dt() || (E = await u(
        `/v2/comfygit/workflow/${P}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = E, E;
    } catch (E) {
      const x = E instanceof Error ? E.message : "Unknown error occurred";
      throw g.value = x, E;
    } finally {
      p.value = !1;
    }
  }
  async function r(P, E, x, Y) {
    p.value = !0, g.value = null;
    try {
      let F;
      if (!Dt()) {
        const G = Object.fromEntries(E), T = Object.fromEntries(x), M = Y ? Array.from(Y) : [];
        F = await u(
          `/v2/comfygit/workflow/${P}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: G,
              model_choices: T,
              skipped_packages: M
            })
          }
        );
      }
      return c.value = F, F;
    } catch (F) {
      const G = F instanceof Error ? F.message : "Unknown error occurred";
      throw g.value = G, F;
    } finally {
      p.value = !1;
    }
  }
  async function m(P, E = 10) {
    p.value = !0, g.value = null;
    try {
      let x;
      return Dt() || (x = await u(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: P, limit: E })
        }
      )), n.value = x.results, x.results;
    } catch (x) {
      const Y = x instanceof Error ? x.message : "Unknown error occurred";
      throw g.value = Y, x;
    } finally {
      p.value = !1;
    }
  }
  async function y(P, E = 10) {
    p.value = !0, g.value = null;
    try {
      let x;
      return Dt() || (x = await u(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: P, limit: E })
        }
      )), l.value = x.results, x.results;
    } catch (x) {
      const Y = x instanceof Error ? x.message : "Unknown error occurred";
      throw g.value = Y, x;
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
  async function k(P) {
    w.phase = "installing", w.nodesInstalled = [], w.installError = void 0, w.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Dt(), await R(P);
    } catch (E) {
      const x = E instanceof Error ? E.message : "Failed to install nodes";
      throw w.installError = x, E;
    }
  }
  async function R(P) {
    var x;
    const E = await u(
      `/v2/comfygit/workflow/${P}/install`,
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
      const Y = new Map(((x = E.failed) == null ? void 0 : x.map((F) => [F.node_id, F.error])) || []);
      for (let F = 0; F < w.nodesToInstall.length; F++) {
        const G = w.nodesToInstall[F], T = Y.get(G);
        w.nodeInstallProgress.completedNodes.push({
          node_id: G,
          success: !T,
          error: T
        });
      }
    }
    return w.nodesInstalled = E.nodes_installed, w.needsRestart = E.nodes_installed.length > 0, E.failed && E.failed.length > 0 && (w.installError = `${E.failed.length} package(s) failed to install`), E;
  }
  async function A(P, E, x) {
    _(), w.phase = "resolving", g.value = null;
    const Y = Object.fromEntries(E), F = Object.fromEntries(x);
    try {
      const G = await fetch(`/v2/comfygit/workflow/${P}/apply-resolution-stream`, {
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
      const T = G.body.getReader(), M = new TextDecoder();
      let D = "";
      for (; ; ) {
        const { done: le, value: se } = await T.read();
        if (le) break;
        D += M.decode(se, { stream: !0 });
        const X = D.split(`

`);
        D = X.pop() || "";
        for (const de of X) {
          if (!de.trim()) continue;
          const K = de.split(`
`);
          let L = "", U = "";
          for (const S of K)
            S.startsWith("event: ") ? L = S.slice(7) : S.startsWith("data: ") && (U = S.slice(6));
          if (U)
            try {
              const S = JSON.parse(U);
              f(L, S);
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
  function f(P, E) {
    switch (P) {
      case "batch_start":
        w.phase = "downloading", w.totalFiles = E.total;
        break;
      case "file_start":
        w.currentFile = E.filename, w.currentFileIndex = E.index, w.bytesDownloaded = 0, w.bytesTotal = void 0;
        break;
      case "file_progress":
        w.bytesDownloaded = E.downloaded, w.bytesTotal = E.total;
        break;
      case "file_complete":
        w.completedFiles.push({
          filename: E.filename,
          success: E.success,
          error: E.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        w.nodesToInstall = E.nodes_to_install || [], E.download_results && (w.completedFiles = E.download_results), w.phase = "complete";
        break;
      case "error":
        w.error = E.message, w.phase = "error", g.value = E.message;
        break;
    }
  }
  function C(P, E) {
    const { addToQueue: x } = Gt(), Y = E.filter((F) => F.url && F.target_path).map((F) => ({
      workflow: P,
      filename: F.filename,
      url: F.url,
      targetPath: F.target_path,
      size: F.size || 0,
      type: "model"
    }));
    return Y.length > 0 && x(Y), Y.length;
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
    applyResolutionWithProgress: A,
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
        (s(!0), o(W, null, oe(t.steps, (w, _) => (s(), o("div", {
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
        $e(m.$slots, "default", {}, void 0, !0)
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
    const c = t, n = N(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), l = N(() => `confidence-${n.value}`), p = N(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
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
}, Bi = { class: "options-list" }, Fi = ["onClick"], Ai = ["name", "value"], Vi = { class: "option-content" }, Wi = { class: "option-header" }, Gi = { class: "option-package-id" }, ji = {
  key: 0,
  class: "option-description"
}, qi = { class: "option-meta" }, Hi = {
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
          b(fe, {
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
            (s(!0), o(W, null, oe(t.options, (y, w) => (s(), o("label", {
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
            b(fe, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (y) => l("search"))
            }, {
              default: i(() => [...m[9] || (m[9] = [
                h(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            b(fe, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (y) => l("manual-entry"))
            }, {
              default: i(() => [...m[10] || (m[10] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(fe, {
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
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(W, { key: 1 }, [
            m[14] || (m[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", Bi, [
              (s(!0), o(W, null, oe(t.searchResults.slice(0, 5), (y, w) => (s(), o("label", {
                key: y.package_id,
                class: "option-card",
                onClick: (_) => l("search-result-selected", y)
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
            b(fe, {
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
            b(fe, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (y) => l("manual-entry"))
            }, {
              default: i(() => [...m[16] || (m[16] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(fe, {
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
    const n = t, l = c, { searchNodes: p } = Us(), g = $(0), u = $(!1), v = $(!1), r = $(""), m = $(""), y = $([]), w = $(!1), _ = $(/* @__PURE__ */ new Map()), k = $(/* @__PURE__ */ new Set()), R = $(!1);
    function A() {
      R.value && U(), R.value = !1;
    }
    const f = N(() => n.nodes[g.value]), C = N(() => n.nodes.filter((ce) => n.nodeChoices.has(ce.node_type)).length), P = N(() => f.value ? _.value.get(f.value.node_type) || [] : []), E = N(() => f.value ? k.value.has(f.value.node_type) : !1);
    _t(f, async (ce) => {
      var ve;
      ce && ((ve = ce.options) != null && ve.length || _.value.has(ce.node_type) || k.value.has(ce.node_type) || n.nodeChoices.has(ce.node_type) || await x(ce.node_type));
    }, { immediate: !0 });
    async function x(ce) {
      k.value.add(ce);
      try {
        const ve = await p(ce, 5);
        _.value.set(ce, ve);
      } catch {
        _.value.set(ce, []);
      } finally {
        k.value.delete(ce);
      }
    }
    const Y = N(() => n.autoResolvedPackages.filter((ce) => !n.skippedPackages.has(ce.package_id)).length);
    function F(ce) {
      return n.skippedPackages.has(ce);
    }
    function G(ce) {
      l("package-skip", ce);
    }
    const T = N(() => {
      var ve;
      if (!f.value) return "not-found";
      const ce = n.nodeChoices.get(f.value.node_type);
      if (ce)
        switch (ce.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (ve = f.value.options) != null && ve.length ? "ambiguous" : "not-found";
    }), M = N(() => {
      var ve;
      if (!f.value) return;
      const ce = n.nodeChoices.get(f.value.node_type);
      if (ce)
        switch (ce.action) {
          case "install":
            return ce.package_id ? `→ ${ce.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (ve = f.value.options) != null && ve.length ? `${f.value.options.length} matches` : "Not Found";
    });
    function D(ce) {
      ce >= 0 && ce < n.nodes.length && (g.value = ce);
    }
    function le() {
      f.value && l("mark-optional", f.value.node_type);
    }
    function se() {
      f.value && l("skip", f.value.node_type);
    }
    function X(ce) {
      f.value && l("option-selected", f.value.node_type, ce);
    }
    function de() {
      f.value && l("clear-choice", f.value.node_type);
    }
    function K() {
      f.value && (r.value = f.value.node_type, y.value = P.value, u.value = !0, Me(r.value));
    }
    function L() {
      m.value = "", v.value = !0;
    }
    function U() {
      u.value = !1, r.value = "", y.value = [];
    }
    function S() {
      v.value = !1, m.value = "";
    }
    let ae = null;
    function Q() {
      ae && clearTimeout(ae), ae = setTimeout(() => {
        Me(r.value);
      }, 300);
    }
    async function Me(ce) {
      if (!ce.trim()) {
        y.value = [];
        return;
      }
      w.value = !0;
      try {
        y.value = await p(ce, 10);
      } catch {
        y.value = [];
      } finally {
        w.value = !1;
      }
    }
    function we(ce) {
      f.value && (l("manual-entry", f.value.node_type, ce.package_id), U());
    }
    function Oe(ce) {
      f.value && l("manual-entry", f.value.node_type, ce.package_id);
    }
    function Te() {
      !f.value || !m.value.trim() || (l("manual-entry", f.value.node_type, m.value.trim()), S());
    }
    return (ce, ve) => {
      var Re, ie;
      return s(), o("div", cr, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", ur, [
          e("div", mr, [
            ve[6] || (ve[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", vr, a(Y.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", fr, [
            (s(!0), o(W, null, oe(t.autoResolvedPackages, (J) => (s(), o("div", {
              key: J.package_id,
              class: "resolved-package-item"
            }, [
              e("div", gr, [
                e("code", pr, a(J.package_id), 1),
                e("span", hr, a(J.node_types_count) + " node type" + a(J.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", yr, [
                F(J.package_id) ? (s(), o("span", kr, " SKIPPED ")) : (s(), o("span", wr, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (Se) => G(J.package_id)
                }, a(F(J.package_id) ? "Include" : "Skip"), 9, br)
              ])
            ]))), 128))
          ])
        ])) : d("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", _r)) : d("", !0),
        t.nodes.length > 0 ? (s(), o(W, { key: 2 }, [
          e("div", $r, [
            ve[7] || (ve[7] = e("div", { class: "step-info" }, [
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
            onPrev: ve[0] || (ve[0] = (J) => D(g.value - 1)),
            onNext: ve[1] || (ve[1] = (J) => D(g.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
          f.value ? (s(), o("div", xr, [
            b(Xi, {
              "node-type": f.value.node_type,
              "has-multiple-options": !!((Re = f.value.options) != null && Re.length),
              options: f.value.options,
              choice: (ie = t.nodeChoices) == null ? void 0 : ie.get(f.value.node_type),
              status: T.value,
              "status-label": M.value,
              "search-results": P.value,
              "is-searching": E.value,
              onMarkOptional: le,
              onSkip: se,
              onManualEntry: L,
              onSearch: K,
              onOptionSelected: X,
              onClearChoice: de,
              onSearchResultSelected: Oe
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : d("", !0)
        ], 64)) : d("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", Sr, [...ve[8] || (ve[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : d("", !0),
        (s(), I(Ve, { to: "body" }, [
          u.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ve[4] || (ve[4] = ze((J) => R.value = !0, ["self"])),
            onMouseup: ze(A, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: ve[3] || (ve[3] = (J) => R.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                ve[9] || (ve[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: U
                }, "✕")
              ]),
              e("div", Ir, [
                b(lt, {
                  modelValue: r.value,
                  "onUpdate:modelValue": ve[2] || (ve[2] = (J) => r.value = J),
                  placeholder: "Search by node type, package name...",
                  onInput: Q
                }, null, 8, ["modelValue"]),
                e("div", Er, [
                  y.value.length > 0 ? (s(), o("div", Mr, [
                    (s(!0), o(W, null, oe(y.value, (J) => (s(), o("div", {
                      key: J.package_id,
                      class: "node-search-result-item",
                      onClick: (Se) => we(J)
                    }, [
                      e("div", Rr, [
                        e("code", zr, a(J.package_id), 1),
                        J.match_confidence ? (s(), I(Zt, {
                          key: 0,
                          confidence: J.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : d("", !0)
                      ]),
                      J.description ? (s(), o("div", Lr, a(J.description), 1)) : d("", !0)
                    ], 8, Tr))), 128))
                  ])) : w.value ? (s(), o("div", Pr, "Searching...")) : r.value ? (s(), o("div", Dr, 'No packages found matching "' + a(r.value) + '"', 1)) : (s(), o("div", Nr, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : d("", !0)
        ])),
        (s(), I(Ve, { to: "body" }, [
          v.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ze(S, ["self"])
          }, [
            e("div", Ur, [
              e("div", { class: "node-modal-header" }, [
                ve[10] || (ve[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: S
                }, "✕")
              ]),
              e("div", Or, [
                b(lt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": ve[5] || (ve[5] = (J) => m.value = J),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Br, [
                  b(fe, {
                    variant: "secondary",
                    onClick: S
                  }, {
                    default: i(() => [...ve[11] || (ve[11] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(fe, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: Te
                  }, {
                    default: i(() => [...ve[12] || (ve[12] = [
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
}), Ar = /* @__PURE__ */ te(Fr, [["__scopeId", "data-v-281581bc"]]), Vr = { class: "node-info" }, Wr = { class: "node-info-text" }, Gr = { class: "item-body" }, jr = {
  key: 0,
  class: "resolved-state"
}, qr = {
  key: 1,
  class: "multiple-options"
}, Hr = { class: "options-list" }, Kr = ["onClick"], Jr = ["name", "value", "checked", "onChange"], Yr = { class: "option-content" }, Xr = { class: "option-header" }, Qr = { class: "option-filename" }, Zr = { class: "option-meta" }, ed = { class: "option-size" }, td = { class: "option-category" }, sd = { class: "option-path" }, od = { class: "action-buttons" }, nd = {
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
    const n = t, l = c, p = N(() => !!n.choice);
    N(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.action;
    }), N(() => {
      var r, m;
      return ((m = (r = n.choice) == null ? void 0 : r.selected_model) == null ? void 0 : m.filename) || "selected";
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
          b(fe, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (y) => l("clear-choice"))
          }, {
            default: i(() => [...m[8] || (m[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", qr, [
          m[12] || (m[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Hr, [
            (s(!0), o(W, null, oe(t.options, (y, w) => (s(), o("label", {
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
            b(fe, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (y) => l("search"))
            }, {
              default: i(() => [...m[9] || (m[9] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(fe, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (y) => l("download-url"))
            }, {
              default: i(() => [...m[10] || (m[10] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(fe, {
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
            b(fe, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (y) => l("search"))
            }, {
              default: i(() => [...m[13] || (m[13] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(fe, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (y) => l("download-url"))
            }, {
              default: i(() => [...m[14] || (m[14] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(fe, {
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
    function l(U) {
      var S;
      return U && ((S = n[U]) == null ? void 0 : S[0]) || null;
    }
    const p = t, g = c, u = $(0), v = $(!1), r = $(!1), m = $(""), y = $(""), w = $(""), _ = $([]), k = $(!1), R = N(() => p.models[u.value]), A = N(() => p.models.some((U) => U.is_download_intent)), f = N(() => p.models.filter(
      (U) => p.modelChoices.has(U.filename) || U.is_download_intent
    ).length), C = N(() => {
      var S;
      if (!R.value) return "";
      const U = l((S = R.value.reference) == null ? void 0 : S.node_type);
      return U ? `${U}/${R.value.filename}` : "";
    }), P = N(() => {
      var S;
      if (!R.value) return "not-found";
      const U = p.modelChoices.get(R.value.filename);
      if (U)
        switch (U.action) {
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
    }), E = N(() => {
      var S, ae;
      if (!R.value) return;
      const U = p.modelChoices.get(R.value.filename);
      if (U)
        switch (U.action) {
          case "select":
            return (S = U.selected_model) != null && S.filename ? `→ ${U.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return R.value.is_download_intent ? "Pending Download" : (ae = R.value.options) != null && ae.length ? `${R.value.options.length} matches` : "Not Found";
    });
    function x(U) {
      U >= 0 && U < p.models.length && (u.value = U);
    }
    function Y() {
      R.value && g("mark-optional", R.value.filename);
    }
    function F() {
      R.value && g("skip", R.value.filename);
    }
    function G(U) {
      R.value && g("option-selected", R.value.filename, U);
    }
    function T() {
      R.value && g("clear-choice", R.value.filename);
    }
    function M() {
      R.value && (m.value = R.value.filename, v.value = !0);
    }
    function D() {
      R.value && (y.value = R.value.download_source || "", w.value = R.value.target_path || C.value, r.value = !0);
    }
    function le() {
      v.value = !1, m.value = "", _.value = [];
    }
    function se() {
      r.value = !1, y.value = "", w.value = "";
    }
    function X() {
      k.value = !0, setTimeout(() => {
        k.value = !1;
      }, 300);
    }
    function de(U) {
      R.value && le();
    }
    function K() {
      !R.value || !y.value.trim() || (g("download-url", R.value.filename, y.value.trim(), w.value.trim() || void 0), se());
    }
    function L(U) {
      if (!U) return "Unknown";
      const S = U / (1024 * 1024 * 1024);
      return S >= 1 ? `${S.toFixed(2)} GB` : `${(U / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (U, S) => {
      var ae, Q, Me;
      return s(), o("div", rd, [
        e("div", dd, [
          e("div", cd, [
            e("h3", ud, a(A.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", md, a(A.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", vd, a(f.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        R.value ? (s(), I(Os, {
          key: 0,
          "item-name": R.value.filename,
          "current-index": u.value,
          "total-items": t.models.length,
          onPrev: S[0] || (S[0] = (we) => x(u.value - 1)),
          onNext: S[1] || (S[1] = (we) => x(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
        R.value ? (s(), o("div", fd, [
          b(id, {
            filename: R.value.filename,
            "node-type": ((ae = R.value.reference) == null ? void 0 : ae.node_type) || "Unknown",
            "has-multiple-options": !!((Q = R.value.options) != null && Q.length),
            options: R.value.options,
            choice: (Me = t.modelChoices) == null ? void 0 : Me.get(R.value.filename),
            status: P.value,
            "status-label": E.value,
            onMarkOptional: Y,
            onSkip: F,
            onDownloadUrl: D,
            onSearch: M,
            onOptionSelected: G,
            onClearChoice: T
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", gd, [...S[5] || (S[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), I(Ve, { to: "body" }, [
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
                  "onUpdate:modelValue": S[2] || (S[2] = (we) => m.value = we),
                  placeholder: "Search by filename, category...",
                  onInput: X
                }, null, 8, ["modelValue"]),
                _.value.length > 0 ? (s(), o("div", yd, [
                  (s(!0), o(W, null, oe(_.value, (we) => (s(), o("div", {
                    key: we.hash,
                    class: "model-search-result-item",
                    onClick: (Oe) => de()
                  }, [
                    e("div", kd, [
                      e("code", bd, a(we.filename), 1)
                    ]),
                    e("div", _d, [
                      e("span", $d, a(we.category), 1),
                      e("span", Cd, a(L(we.size)), 1)
                    ]),
                    we.relative_path ? (s(), o("div", xd, a(we.relative_path), 1)) : d("", !0)
                  ], 8, wd))), 128))
                ])) : m.value && !k.value ? (s(), o("div", Sd, ' No models found matching "' + a(m.value) + '" ', 1)) : d("", !0),
                k.value ? (s(), o("div", Id, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (s(), I(Ve, { to: "body" }, [
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
                    "onUpdate:modelValue": S[3] || (S[3] = (we) => y.value = we),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Rd, [
                  S[9] || (S[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  b(lt, {
                    modelValue: w.value,
                    "onUpdate:modelValue": S[4] || (S[4] = (we) => w.value = we),
                    placeholder: C.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", zd, [
                  b(fe, {
                    variant: "secondary",
                    onClick: se
                  }, {
                    default: i(() => [...S[10] || (S[10] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(fe, {
                    variant: "primary",
                    disabled: !y.value.trim() || !w.value.trim(),
                    onClick: K
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
}, dc = { class: "error-message" }, cc = /* @__PURE__ */ ee({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const c = t, n = N(() => {
      var m, y;
      const v = ((m = c.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || c.progress.nodesToInstall.length;
      if (!v) return 0;
      const r = ((y = c.progress.nodeInstallProgress) == null ? void 0 : y.completedNodes.length) ?? 0;
      return Math.round(r / v * 100);
    }), l = N(() => {
      var v;
      return ((v = c.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.filter((r) => !r.success)) || [];
    }), p = N(() => l.value.length > 0);
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
            (s(!0), o(W, null, oe(t.progress.nodesToInstall, (k, R) => (s(), o("div", {
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
            l.value.length > 0 ? (s(), o("div", tc, [
              r[5] || (r[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", sc, a(l.value.length) + " package" + a(l.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : d("", !0),
            l.value.length > 0 ? (s(), o("div", oc, [
              (s(!0), o(W, null, oe(l.value, (k) => (s(), o("div", {
                key: k.node_id,
                class: "failed-item"
              }, [
                e("code", nc, a(k.node_id), 1),
                e("span", ac, a(k.error), 1)
              ]))), 128))
            ])) : d("", !0),
            l.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: r[0] || (r[0] = (k) => v.$emit("retry-failed"))
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
}, Fu = /* @__PURE__ */ ee({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, l = c, { analyzeWorkflow: p, applyResolution: g, installNodes: u, queueModelDownloads: v, progress: r, resetProgress: m } = Us(), { loadPendingDownloads: y } = Gt(), { openFileLocation: w } = Fe(), _ = $(null), k = $(!1), R = $(!1), A = $(null), f = $("analysis"), C = $([]), P = $(/* @__PURE__ */ new Map()), E = $(/* @__PURE__ */ new Map()), x = $(/* @__PURE__ */ new Set()), Y = N(() => {
      const O = [
        { id: "analysis", label: "Analysis" }
      ];
      return (G.value || D.value) && O.push({ id: "nodes", label: "Nodes" }), (T.value || M.value) && O.push({ id: "models", label: "Models" }), O.push({ id: "review", label: "Review" }), f.value === "applying" && O.push({ id: "applying", label: "Applying" }), O;
    }), F = N(() => _.value ? _.value.stats.needs_user_input : !1), G = N(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), T = N(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), M = N(() => _.value ? _.value.stats.download_intents > 0 : !1), D = N(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), le = N(() => _.value ? _.value.nodes.resolved.length : 0), se = N(() => _.value ? _.value.models.resolved.filter((O) => O.has_category_mismatch) : []), X = N(() => se.value.length > 0), de = N(() => {
      if (!_.value) return [];
      const O = _.value.nodes.resolved.filter((V) => !V.is_installed), B = /* @__PURE__ */ new Set();
      return O.filter((V) => B.has(V.package.package_id) ? !1 : (B.add(V.package.package_id), !0));
    }), K = N(() => {
      if (!_.value) return [];
      const O = _.value.nodes.resolved.filter((V) => !V.is_installed), B = /* @__PURE__ */ new Map();
      for (const V of O) {
        const Z = B.get(V.package.package_id);
        Z ? Z.node_types_count++ : B.set(V.package.package_id, {
          package_id: V.package.package_id,
          title: V.package.title,
          node_types_count: 1
        });
      }
      return Array.from(B.values());
    }), L = N(() => de.value.filter((O) => !x.value.has(O.package.package_id))), U = N(() => _.value ? _.value.models.resolved.filter((O) => O.match_type === "download_intent").map((O) => ({
      filename: O.reference.widget_value,
      reference: O.reference,
      is_download_intent: !0,
      resolved_model: O.model,
      download_source: O.download_source,
      target_path: O.target_path
    })) : []), S = N(() => {
      if (!_.value) return [];
      const O = _.value.nodes.unresolved.map((V) => ({
        node_type: V.reference.node_type,
        reason: V.reason,
        is_unresolved: !0,
        options: void 0
      })), B = _.value.nodes.ambiguous.map((V) => ({
        node_type: V.reference.node_type,
        has_multiple_options: !0,
        options: V.options.map((Z) => ({
          package_id: Z.package.package_id,
          title: Z.package.title,
          match_confidence: Z.match_confidence,
          match_type: Z.match_type,
          is_installed: Z.is_installed
        }))
      }));
      return [...O, ...B];
    }), ae = N(() => {
      if (!_.value) return [];
      const O = _.value.models.unresolved.map((V) => ({
        filename: V.reference.widget_value,
        reference: V.reference,
        reason: V.reason,
        is_unresolved: !0,
        options: void 0
      })), B = _.value.models.ambiguous.map((V) => ({
        filename: V.reference.widget_value,
        reference: V.reference,
        has_multiple_options: !0,
        options: V.options.map((Z) => ({
          model: Z.model,
          match_confidence: Z.match_confidence,
          match_type: Z.match_type,
          has_download_source: Z.has_download_source
        }))
      }));
      return [...O, ...B];
    }), Q = N(() => {
      const O = ae.value, B = U.value.map((V) => ({
        filename: V.filename,
        reference: V.reference,
        is_download_intent: !0,
        resolved_model: V.resolved_model,
        download_source: V.download_source,
        target_path: V.target_path,
        options: void 0
      }));
      return [...O, ...B];
    }), Me = N(() => {
      let O = L.value.length;
      for (const B of P.value.values())
        B.action === "install" && O++;
      for (const B of E.value.values())
        B.action === "select" && O++;
      return O;
    }), we = N(() => {
      let O = 0;
      for (const B of E.value.values())
        B.action === "download" && O++;
      return O;
    }), Oe = N(() => {
      let O = 0;
      for (const B of P.value.values())
        B.action === "optional" && O++;
      for (const B of E.value.values())
        B.action === "optional" && O++;
      return O;
    }), Te = N(() => {
      let O = x.value.size;
      for (const B of P.value.values())
        B.action === "skip" && O++;
      for (const B of E.value.values())
        B.action === "skip" && O++;
      for (const B of S.value)
        P.value.has(B.node_type) || O++;
      for (const B of ae.value)
        E.value.has(B.filename) || O++;
      return O;
    }), ce = N(() => {
      const O = {};
      if (O.analysis = { resolved: 1, total: 1 }, G.value) {
        const B = S.value.length, V = S.value.filter(
          (Z) => P.value.has(Z.node_type)
        ).length;
        O.nodes = { resolved: V, total: B };
      }
      if (T.value || M.value) {
        const B = Q.value.length, V = Q.value.filter(
          (Z) => E.value.has(Z.filename) || Z.is_download_intent
        ).length;
        O.models = { resolved: V, total: B };
      }
      if (O.review = { resolved: 1, total: 1 }, f.value === "applying") {
        const B = r.totalFiles || 1, V = r.completedFiles.length;
        O.applying = { resolved: V, total: B };
      }
      return O;
    });
    function ve(O) {
      f.value = O;
    }
    function Re() {
      const O = Y.value.findIndex((B) => B.id === f.value);
      O > 0 && (f.value = Y.value[O - 1].id);
    }
    function ie() {
      const O = Y.value.findIndex((B) => B.id === f.value);
      O < Y.value.length - 1 && (f.value = Y.value[O + 1].id);
    }
    async function J() {
      k.value = !0, A.value = null;
      try {
        _.value = await p(n.workflowName);
      } catch (O) {
        A.value = O instanceof Error ? O.message : "Failed to analyze workflow";
      } finally {
        k.value = !1;
      }
    }
    function Se() {
      C.value.includes("analysis") || C.value.push("analysis"), G.value || D.value ? f.value = "nodes" : T.value || M.value ? f.value = "models" : f.value = "review";
    }
    function be(O) {
      P.value.set(O, { action: "optional" });
    }
    function st(O) {
      P.value.set(O, { action: "skip" });
    }
    function rt(O, B) {
      var Z;
      const V = S.value.find((pe) => pe.node_type === O);
      (Z = V == null ? void 0 : V.options) != null && Z[B] && P.value.set(O, {
        action: "install",
        package_id: V.options[B].package_id
      });
    }
    function vt(O, B) {
      P.value.set(O, {
        action: "install",
        package_id: B
      });
    }
    function xe(O) {
      P.value.delete(O);
    }
    function Ge(O) {
      x.value.has(O) ? x.value.delete(O) : x.value.add(O);
    }
    function Xe(O) {
      E.value.set(O, { action: "optional" });
    }
    function je(O) {
      E.value.set(O, { action: "skip" });
    }
    function ft(O, B) {
      var Z;
      const V = ae.value.find((pe) => pe.filename === O);
      (Z = V == null ? void 0 : V.options) != null && Z[B] && E.value.set(O, {
        action: "select",
        selected_model: V.options[B].model
      });
    }
    function ke(O, B, V) {
      E.value.set(O, {
        action: "download",
        url: B,
        target_path: V
      });
    }
    function Ae(O) {
      E.value.delete(O);
    }
    async function dt(O) {
      try {
        await w(O);
      } catch (B) {
        A.value = B instanceof Error ? B.message : "Failed to open file location";
      }
    }
    async function re() {
      var O;
      R.value = !0, A.value = null, m(), r.phase = "resolving", f.value = "applying";
      try {
        const B = await g(n.workflowName, P.value, E.value, x.value);
        B.models_to_download && B.models_to_download.length > 0 && v(n.workflowName, B.models_to_download);
        const V = [
          ...B.nodes_to_install || [],
          ...L.value.map((pe) => pe.package.package_id)
        ];
        r.nodesToInstall = [...new Set(V)], r.nodesToInstall.length > 0 && await u(n.workflowName), r.phase = "complete", await y();
        const Z = r.installError || ((O = r.nodeInstallProgress) == null ? void 0 : O.completedNodes.some((pe) => !pe.success));
        !r.needsRestart && !Z && setTimeout(() => {
          l("refresh"), l("install"), l("close");
        }, 1500);
      } catch (B) {
        A.value = B instanceof Error ? B.message : "Failed to apply resolution", r.error = A.value, r.phase = "error";
      } finally {
        R.value = !1;
      }
    }
    function q() {
      l("refresh"), l("restart"), l("close");
    }
    async function Ee() {
      var B;
      const O = ((B = r.nodeInstallProgress) == null ? void 0 : B.completedNodes.filter((V) => !V.success).map((V) => V.node_id)) || [];
      if (O.length !== 0) {
        r.phase = "installing", r.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: O.length
        }, r.nodesToInstall = O, r.nodesInstalled = [], r.installError = void 0;
        try {
          await u(n.workflowName), r.phase = "complete";
        } catch (V) {
          r.error = V instanceof Error ? V.message : "Retry failed", r.phase = "error";
        }
      }
    }
    return Ne(J), (O, B) => (s(), I(Ye, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: k.value,
      error: A.value || void 0,
      "fixed-height": !0,
      onClose: B[1] || (B[1] = (V) => l("close"))
    }, {
      body: i(() => [
        k.value && !_.value ? (s(), o("div", mc, [...B[2] || (B[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (s(), o("div", vc, [
          b(ki, {
            steps: Y.value,
            "current-step": f.value,
            "completed-steps": C.value,
            "step-stats": ce.value,
            onStepChange: ve
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          f.value === "analysis" ? (s(), o("div", fc, [
            e("div", gc, [
              e("div", pc, [
                B[3] || (B[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", hc, " Found " + a(_.value.stats.total_nodes) + " nodes and " + a(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", yc, [
                e("div", wc, [
                  B[12] || (B[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", kc, [
                    le.value > 0 ? (s(), o("div", bc, [
                      B[4] || (B[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", _c, a(le.value), 1),
                      B[5] || (B[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : d("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (s(), o("div", $c, [
                      B[6] || (B[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Cc, a(_.value.stats.packages_needing_installation), 1),
                      B[7] || (B[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : d("", !0),
                    _.value.nodes.ambiguous.length > 0 ? (s(), o("div", xc, [
                      B[8] || (B[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Sc, a(_.value.nodes.ambiguous.length), 1),
                      B[9] || (B[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    _.value.nodes.unresolved.length > 0 ? (s(), o("div", Ic, [
                      B[10] || (B[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Ec, a(_.value.nodes.unresolved.length), 1),
                      B[11] || (B[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ]),
                e("div", Mc, [
                  B[23] || (B[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Tc, [
                    e("div", Rc, [
                      B[13] || (B[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", zc, a(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      B[14] || (B[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (s(), o("div", Lc, [
                      B[15] || (B[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Pc, a(_.value.stats.download_intents), 1),
                      B[16] || (B[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : d("", !0),
                    X.value ? (s(), o("div", Dc, [
                      B[17] || (B[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", Nc, a(se.value.length), 1),
                      B[18] || (B[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : d("", !0),
                    _.value.models.ambiguous.length > 0 ? (s(), o("div", Uc, [
                      B[19] || (B[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Oc, a(_.value.models.ambiguous.length), 1),
                      B[20] || (B[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    _.value.models.unresolved.length > 0 ? (s(), o("div", Bc, [
                      B[21] || (B[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Fc, a(_.value.models.unresolved.length), 1),
                      B[22] || (B[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ])
              ]),
              F.value ? (s(), o("div", Ac, [
                B[24] || (B[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Vc, a(S.value.length + ae.value.length) + " items need your input", 1)
              ])) : D.value ? (s(), o("div", Wc, [
                B[25] || (B[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Gc, a(_.value.stats.packages_needing_installation) + " package" + a(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(_.value.stats.nodes_needing_installation) + " node type" + a(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(M.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : M.value ? (s(), o("div", jc, [
                B[26] || (B[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", qc, a(_.value.stats.download_intents) + " model" + a(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : X.value ? (s(), o("div", Hc, [
                B[27] || (B[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Kc, a(se.value.length) + " model" + a(se.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", Jc, [...B[28] || (B[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              X.value ? (s(), o("div", Yc, [
                B[31] || (B[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", Xc, [
                  (s(!0), o(W, null, oe(se.value, (V) => {
                    var Z, pe;
                    return s(), o("div", {
                      key: V.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", Qc, a(V.actual_category) + "/" + a((Z = V.model) == null ? void 0 : Z.filename), 1),
                      B[30] || (B[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", Zc, a((pe = V.expected_categories) == null ? void 0 : pe[0]) + "/", 1),
                      V.file_path ? (s(), I(fe, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Qe) => dt(V.file_path)
                      }, {
                        default: i(() => [...B[29] || (B[29] = [
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
            "node-choices": P.value,
            "auto-resolved-packages": K.value,
            "skipped-packages": x.value,
            onMarkOptional: be,
            onSkip: st,
            onOptionSelected: rt,
            onManualEntry: vt,
            onClearChoice: xe,
            onPackageSkip: Ge
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : d("", !0),
          f.value === "models" ? (s(), I(Pd, {
            key: 2,
            models: Q.value,
            "model-choices": E.value,
            onMarkOptional: Xe,
            onSkip: je,
            onOptionSelected: ft,
            onDownloadUrl: ke,
            onClearChoice: Ae
          }, null, 8, ["models", "model-choices"])) : d("", !0),
          f.value === "review" ? (s(), o("div", eu, [
            e("div", tu, [
              B[36] || (B[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", su, [
                e("div", ou, [
                  e("span", nu, a(Me.value), 1),
                  B[32] || (B[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", au, [
                  e("span", lu, a(we.value), 1),
                  B[33] || (B[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", iu, [
                  e("span", ru, a(Oe.value), 1),
                  B[34] || (B[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", du, [
                  e("span", cu, a(Te.value), 1),
                  B[35] || (B[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              K.value.length > 0 ? (s(), o("div", uu, [
                e("h4", mu, "Node Packages (" + a(K.value.length) + ")", 1),
                e("div", vu, [
                  (s(!0), o(W, null, oe(K.value, (V) => (s(), o("div", {
                    key: V.package_id,
                    class: "review-item"
                  }, [
                    e("code", fu, a(V.package_id), 1),
                    e("div", gu, [
                      x.value.has(V.package_id) ? (s(), o("span", hu, "Skipped")) : (s(), o("span", pu, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : d("", !0),
              S.value.length > 0 ? (s(), o("div", yu, [
                e("h4", wu, "Node Choices (" + a(S.value.length) + ")", 1),
                e("div", ku, [
                  (s(!0), o(W, null, oe(S.value, (V) => {
                    var Z, pe, Qe, gt;
                    return s(), o("div", {
                      key: V.node_type,
                      class: "review-item"
                    }, [
                      e("code", bu, a(V.node_type), 1),
                      e("div", _u, [
                        P.value.has(V.node_type) ? (s(), o(W, { key: 0 }, [
                          ((Z = P.value.get(V.node_type)) == null ? void 0 : Z.action) === "install" ? (s(), o("span", $u, a((pe = P.value.get(V.node_type)) == null ? void 0 : pe.package_id), 1)) : ((Qe = P.value.get(V.node_type)) == null ? void 0 : Qe.action) === "optional" ? (s(), o("span", Cu, " Optional ")) : ((gt = P.value.get(V.node_type)) == null ? void 0 : gt.action) === "skip" ? (s(), o("span", xu, " Skip ")) : d("", !0)
                        ], 64)) : (s(), o("span", Su, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              Q.value.length > 0 ? (s(), o("div", Iu, [
                e("h4", Eu, "Models (" + a(Q.value.length) + ")", 1),
                e("div", Mu, [
                  (s(!0), o(W, null, oe(Q.value, (V) => {
                    var Z, pe, Qe, gt, Ct, ot, xt;
                    return s(), o("div", {
                      key: V.filename,
                      class: "review-item"
                    }, [
                      e("code", Tu, a(V.filename), 1),
                      e("div", Ru, [
                        E.value.has(V.filename) ? (s(), o(W, { key: 0 }, [
                          ((Z = E.value.get(V.filename)) == null ? void 0 : Z.action) === "select" ? (s(), o("span", zu, a((Qe = (pe = E.value.get(V.filename)) == null ? void 0 : pe.selected_model) == null ? void 0 : Qe.filename), 1)) : ((gt = E.value.get(V.filename)) == null ? void 0 : gt.action) === "download" ? (s(), o("span", Lu, " Download ")) : ((Ct = E.value.get(V.filename)) == null ? void 0 : Ct.action) === "optional" ? (s(), o("span", Pu, " Optional ")) : ((ot = E.value.get(V.filename)) == null ? void 0 : ot.action) === "skip" ? (s(), o("span", Du, " Skip ")) : ((xt = E.value.get(V.filename)) == null ? void 0 : xt.action) === "cancel_download" ? (s(), o("span", Nu, " Cancel Download ")) : d("", !0)
                        ], 64)) : V.is_download_intent ? (s(), o("span", Uu, " Pending Download ")) : (s(), o("span", Ou, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              de.value.length === 0 && S.value.length === 0 && Q.value.length === 0 ? (s(), o("div", Bu, " No dependencies need resolution. ")) : d("", !0)
            ])
          ])) : d("", !0),
          f.value === "applying" ? (s(), I(uc, {
            key: 4,
            progress: _e(r),
            onRestart: q,
            onRetryFailed: Ee
          }, null, 8, ["progress"])) : d("", !0)
        ])) : d("", !0)
      ]),
      footer: i(() => [
        f.value !== "analysis" && f.value !== "applying" ? (s(), I(fe, {
          key: 0,
          variant: "secondary",
          disabled: R.value,
          onClick: Re
        }, {
          default: i(() => [...B[37] || (B[37] = [
            h(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        B[41] || (B[41] = e("div", { class: "footer-spacer" }, null, -1)),
        f.value !== "applying" || _e(r).phase === "complete" || _e(r).phase === "error" ? (s(), I(fe, {
          key: 1,
          variant: "secondary",
          onClick: B[0] || (B[0] = (V) => l("close"))
        }, {
          default: i(() => [
            h(a(_e(r).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : d("", !0),
        f.value === "analysis" ? (s(), I(fe, {
          key: 2,
          variant: "primary",
          disabled: k.value,
          onClick: Se
        }, {
          default: i(() => [...B[38] || (B[38] = [
            h(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        f.value === "nodes" ? (s(), I(fe, {
          key: 3,
          variant: "primary",
          onClick: ie
        }, {
          default: i(() => [
            h(a(T.value || M.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : d("", !0),
        f.value === "models" ? (s(), I(fe, {
          key: 4,
          variant: "primary",
          onClick: ie
        }, {
          default: i(() => [...B[39] || (B[39] = [
            h(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : d("", !0),
        f.value === "review" ? (s(), I(fe, {
          key: 5,
          variant: "primary",
          disabled: R.value,
          loading: R.value,
          onClick: re
        }, {
          default: i(() => [...B[40] || (B[40] = [
            h(" Apply Resolution ", -1)
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
    return Ne(() => {
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
}), ju = /* @__PURE__ */ te(Gu, [["__scopeId", "data-v-266f857a"]]), qu = { class: "search-bar" }, Hu = /* @__PURE__ */ ee({
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
        "onUpdate:modelValue": n[0] || (n[0] = (l) => c.$emit("update:modelValue", l)),
        onClear: n[1] || (n[1] = (l) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Lt = /* @__PURE__ */ te(Hu, [["__scopeId", "data-v-3d51bbfd"]]), Ku = { class: "section-group" }, Ju = {
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
        $e(u.$slots, "default", {}, void 0, !0)
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
    const n = t, l = N(() => n.status ? `status-${n.status}` : "");
    return (p, g) => (s(), o("div", {
      class: me(["item-card", { clickable: t.clickable, compact: t.compact }, l.value]),
      onClick: g[0] || (g[0] = (u) => t.clickable && p.$emit("click"))
    }, [
      e("div", Xu, [
        p.$slots.icon ? (s(), o("span", Qu, [
          $e(p.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        e("div", Zu, [
          p.$slots.title ? (s(), o("div", em, [
            $e(p.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          p.$slots.subtitle ? (s(), o("div", tm, [
            $e(p.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      p.$slots.details ? (s(), o("div", sm, [
        $e(p.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      p.$slots.actions ? (s(), o("div", om, [
        $e(p.$slots, "actions", {}, void 0, !0)
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
      t.retry ? (s(), I(ne, {
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
    const l = n, { getWorkflows: p } = Fe();
    Ds();
    const g = $([]), u = $(!1), v = $(null), r = $(""), m = $(!0), y = $(!1), w = $(!1), _ = $(!1), k = $(null), R = N(
      () => g.value.filter((L) => L.status === "broken")
    ), A = N(
      () => g.value.filter((L) => L.status === "new")
    ), f = N(
      () => g.value.filter((L) => L.status === "modified")
    ), C = N(
      () => g.value.filter((L) => L.status === "synced")
    ), P = N(() => {
      if (!r.value.trim()) return g.value;
      const L = r.value.toLowerCase();
      return g.value.filter((U) => U.name.toLowerCase().includes(L));
    }), E = N(
      () => R.value.filter(
        (L) => !r.value.trim() || L.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), x = N(
      () => A.value.filter(
        (L) => !r.value.trim() || L.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), Y = N(
      () => f.value.filter(
        (L) => !r.value.trim() || L.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), F = N(
      () => C.value.filter(
        (L) => !r.value.trim() || L.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), G = N(
      () => y.value ? F.value : F.value.slice(0, 5)
    );
    async function T(L = !1) {
      u.value = !0, v.value = null;
      try {
        g.value = await p(L);
      } catch (U) {
        v.value = U instanceof Error ? U.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    c({ loadWorkflows: T });
    function M(L) {
      k.value = L, w.value = !0;
    }
    function D(L) {
      k.value = L, _.value = !0;
    }
    function le() {
      l("refresh");
    }
    async function se() {
      _.value = !1, await T(!0);
    }
    async function X() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function de(L) {
      const U = [];
      return L.missing_nodes > 0 && U.push(`${L.missing_nodes} missing node${L.missing_nodes > 1 ? "s" : ""}`), L.missing_models > 0 && U.push(`${L.missing_models} missing model${L.missing_models > 1 ? "s" : ""}`), L.models_with_category_mismatch && L.models_with_category_mismatch > 0 && U.push(`${L.models_with_category_mismatch} model${L.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), L.pending_downloads && L.pending_downloads > 0 && U.push(`${L.pending_downloads} pending download${L.pending_downloads > 1 ? "s" : ""}`), U.length > 0 ? U.join(", ") : "Has issues";
    }
    function K(L) {
      const U = L.sync_state === "new" ? "New" : L.sync_state === "modified" ? "Modified" : L.sync_state === "synced" ? "Synced" : L.sync_state;
      return L.has_path_sync_issues && L.models_needing_path_sync && L.models_needing_path_sync > 0 ? `${L.models_needing_path_sync} model path${L.models_needing_path_sync > 1 ? "s" : ""} need${L.models_needing_path_sync === 1 ? "s" : ""} sync` : U || "Unknown";
    }
    return Ne(T), (L, U) => (s(), o(W, null, [
      b(Ke, null, {
        header: i(() => [
          b(Je, { title: "WORKFLOWS" })
        ]),
        search: i(() => [
          b(Lt, {
            modelValue: r.value,
            "onUpdate:modelValue": U[0] || (U[0] = (S) => r.value = S),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          u.value ? (s(), I(wt, {
            key: 0,
            message: "Loading workflows..."
          })) : v.value ? (s(), I(kt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            E.value.length ? (s(), I(Be, {
              key: 0,
              title: "BROKEN",
              count: E.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, oe(E.value, (S) => (s(), I(He, {
                  key: S.name,
                  status: "broken"
                }, {
                  icon: i(() => [...U[7] || (U[7] = [
                    h("⚠", -1)
                  ])]),
                  title: i(() => [
                    h(a(S.name), 1)
                  ]),
                  subtitle: i(() => [
                    h(a(de(S)), 1)
                  ]),
                  actions: i(() => [
                    b(ne, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ae) => D(S.name)
                    }, {
                      default: i(() => [...U[8] || (U[8] = [
                        h(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(ne, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => M(S.name)
                    }, {
                      default: i(() => [...U[9] || (U[9] = [
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
            x.value.length ? (s(), I(Be, {
              key: 1,
              title: "NEW",
              count: x.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, oe(x.value, (S) => (s(), I(He, {
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
                    h(a(K(S)), 1)
                  ]),
                  actions: i(() => [
                    b(ne, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => M(S.name)
                    }, {
                      default: i(() => [...U[10] || (U[10] = [
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
            Y.value.length ? (s(), I(Be, {
              key: 2,
              title: "MODIFIED",
              count: Y.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, oe(Y.value, (S) => (s(), I(He, {
                  key: S.name,
                  status: S.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: i(() => [...U[11] || (U[11] = [
                    h("⚡", -1)
                  ])]),
                  title: i(() => [
                    h(a(S.name), 1)
                  ]),
                  subtitle: i(() => [
                    h(a(K(S)), 1)
                  ]),
                  actions: i(() => [
                    b(ne, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => M(S.name)
                    }, {
                      default: i(() => [...U[12] || (U[12] = [
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
            F.value.length ? (s(), I(Be, {
              key: 3,
              title: "SYNCED",
              count: F.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: U[2] || (U[2] = (S) => m.value = S)
            }, {
              default: i(() => [
                (s(!0), o(W, null, oe(G.value, (S) => (s(), I(He, {
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
                    h(a(K(S)), 1)
                  ]),
                  actions: i(() => [
                    b(ne, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => M(S.name)
                    }, {
                      default: i(() => [...U[13] || (U[13] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !y.value && F.value.length > 5 ? (s(), I(ne, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: U[1] || (U[1] = (S) => y.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: i(() => [
                    h(" View all " + a(F.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            P.value.length ? d("", !0) : (s(), I(it, {
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
        onClose: U[3] || (U[3] = (S) => w.value = !1),
        onResolve: U[4] || (U[4] = (S) => D(k.value)),
        onRefresh: U[5] || (U[5] = (S) => l("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0),
      _.value && k.value ? (s(), I(Au, {
        key: 1,
        "workflow-name": k.value,
        onClose: se,
        onInstall: le,
        onRefresh: U[6] || (U[6] = (S) => l("refresh")),
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
      $e(c.$slots, "default", {}, void 0, !0)
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
}, Om = { class: "source-type" }, Bm = ["href"], Fm = ["disabled", "onClick"], Am = {
  key: 1,
  class: "empty-state"
}, Vm = { class: "add-source-form" }, Wm = ["disabled"], Gm = {
  key: 2,
  class: "source-error"
}, jm = {
  key: 3,
  class: "source-success"
}, qm = /* @__PURE__ */ ee({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: l, addModelSource: p, removeModelSource: g, openFileLocation: u } = Fe(), v = $(null), r = $(!0), m = $(null), y = $(""), w = $(!1), _ = $(null), k = $(null), R = $(null), A = $(null);
    let f = null;
    function C(T, M = "success", D = 2e3) {
      f && clearTimeout(f), A.value = { message: T, type: M }, f = setTimeout(() => {
        A.value = null;
      }, D);
    }
    function P(T) {
      if (!T) return "Unknown";
      const M = 1024 * 1024 * 1024, D = 1024 * 1024;
      return T >= M ? `${(T / M).toFixed(1)} GB` : T >= D ? `${(T / D).toFixed(0)} MB` : `${(T / 1024).toFixed(0)} KB`;
    }
    function E(T) {
      navigator.clipboard.writeText(T), C("Copied to clipboard!");
    }
    async function x(T) {
      try {
        await u(T), C("Opening file location...");
      } catch {
        C("Failed to open location", "error");
      }
    }
    async function Y() {
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
    async function F(T) {
      if (v.value) {
        _.value = T, k.value = null, R.value = null;
        try {
          await g(v.value.hash, T), C("Source removed"), await G();
        } catch (M) {
          k.value = M instanceof Error ? M.message : "Failed to remove source";
        } finally {
          _.value = null;
        }
      }
    }
    async function G() {
      r.value = !0, m.value = null;
      try {
        v.value = await l(n.identifier);
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to load model details";
      } finally {
        r.value = !1;
      }
    }
    return Ne(G), (T, M) => {
      var D;
      return s(), o(W, null, [
        b(Ye, {
          title: `Model Details: ${((D = v.value) == null ? void 0 : D.filename) || "Loading..."}`,
          size: "lg",
          loading: r.value,
          error: m.value,
          onClose: M[5] || (M[5] = (le) => T.$emit("close"))
        }, {
          body: i(() => {
            var le, se, X, de;
            return [
              v.value ? (s(), o("div", fm, [
                e("section", gm, [
                  e("div", pm, [
                    M[6] || (M[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", hm, a(v.value.hash || "Not computed"), 1),
                    v.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[0] || (M[0] = (K) => E(v.value.hash))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", ym, [
                    M[7] || (M[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", wm, a(v.value.blake3 || "Not computed"), 1),
                    v.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[1] || (M[1] = (K) => E(v.value.blake3))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", km, [
                    M[8] || (M[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", bm, a(v.value.sha256 || "Not computed"), 1),
                    v.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[2] || (M[2] = (K) => E(v.value.sha256))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", _m, [
                    M[9] || (M[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", $m, a(P(v.value.size)), 1)
                  ]),
                  e("div", Cm, [
                    M[10] || (M[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", xm, a(v.value.category), 1)
                  ]),
                  e("div", Sm, [
                    M[11] || (M[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Im, a(v.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Em, [
                  e("h4", Mm, "Locations (" + a(((le = v.value.locations) == null ? void 0 : le.length) || 0) + ")", 1),
                  (se = v.value.locations) != null && se.length ? (s(), o("div", Tm, [
                    (s(!0), o(W, null, oe(v.value.locations, (K, L) => (s(), o("div", {
                      key: L,
                      class: "location-item"
                    }, [
                      e("span", Rm, a(K.path), 1),
                      K.modified ? (s(), o("span", zm, "Modified: " + a(K.modified), 1)) : d("", !0),
                      K.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (U) => x(K.path)
                      }, " Open File Location ", 8, Lm)) : d("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", Pm, "No locations found"))
                ]),
                e("section", Dm, [
                  e("h4", Nm, "Download Sources (" + a(((X = v.value.sources) == null ? void 0 : X.length) || 0) + ")", 1),
                  (de = v.value.sources) != null && de.length ? (s(), o("div", Um, [
                    (s(!0), o(W, null, oe(v.value.sources, (K, L) => (s(), o("div", {
                      key: L,
                      class: "source-item"
                    }, [
                      e("span", Om, a(K.type) + ":", 1),
                      e("a", {
                        href: K.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(K.url), 9, Bm),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: _.value === K.url,
                        onClick: (U) => F(K.url)
                      }, a(_.value === K.url ? "..." : "×"), 9, Fm)
                    ]))), 128))
                  ])) : (s(), o("div", Am, " No download sources configured ")),
                  e("div", Vm, [
                    Ue(e("input", {
                      "onUpdate:modelValue": M[3] || (M[3] = (K) => y.value = K),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Tt, y.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !y.value.trim() || w.value,
                      onClick: Y
                    }, a(w.value ? "Adding..." : "Add Source"), 9, Wm)
                  ]),
                  k.value ? (s(), o("p", Gm, a(k.value), 1)) : d("", !0),
                  R.value ? (s(), o("p", jm, a(R.value), 1)) : d("", !0)
                ])
              ])) : d("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: M[4] || (M[4] = (le) => T.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), I(Ve, { to: "body" }, [
          A.value ? (s(), o("div", {
            key: 0,
            class: me(["toast", A.value.type])
          }, a(A.value.message), 3)) : d("", !0)
        ]))
      ], 64);
    };
  }
}), vs = /* @__PURE__ */ te(qm, [["__scopeId", "data-v-f15cbb56"]]), Hm = /* @__PURE__ */ ee({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: l, getStatus: p } = Fe(), g = $([]), u = $([]), v = $("production"), r = $(!1), m = $(null), y = $(""), w = $(!1), _ = $(null);
    function k() {
      w.value = !1, n("navigate", "model-index");
    }
    const R = N(
      () => g.value.reduce((G, T) => G + (T.size || 0), 0)
    ), A = N(() => {
      if (!y.value.trim()) return g.value;
      const G = y.value.toLowerCase();
      return g.value.filter((T) => T.filename.toLowerCase().includes(G));
    }), f = N(() => {
      if (!y.value.trim()) return u.value;
      const G = y.value.toLowerCase();
      return u.value.filter((T) => T.filename.toLowerCase().includes(G));
    }), C = N(() => {
      const G = {};
      for (const M of A.value) {
        const D = M.type || "other";
        G[D] || (G[D] = []), G[D].push(M);
      }
      const T = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(G).sort(([M], [D]) => {
        const le = T.indexOf(M), se = T.indexOf(D);
        return le >= 0 && se >= 0 ? le - se : le >= 0 ? -1 : se >= 0 ? 1 : M.localeCompare(D);
      }).map(([M, D]) => ({ type: M, models: D }));
    });
    function P(G) {
      if (!G) return "Unknown";
      const T = G / (1024 * 1024);
      return T >= 1024 ? `${(T / 1024).toFixed(1)} GB` : `${T.toFixed(0)} MB`;
    }
    function E(G) {
      _.value = G.hash || G.filename;
    }
    function x(G) {
      n("navigate", "model-index");
    }
    function Y(G) {
      alert(`Download functionality not yet implemented for ${G}`);
    }
    async function F() {
      r.value = !0, m.value = null;
      try {
        const G = await l();
        g.value = G, u.value = [];
        const T = await p();
        v.value = T.environment || "production";
      } catch (G) {
        m.value = G instanceof Error ? G.message : "Failed to load models";
      } finally {
        r.value = !1;
      }
    }
    return Ne(F), (G, T) => (s(), o(W, null, [
      b(Ke, null, {
        header: i(() => [
          b(Je, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (M) => w.value = !0)
          })
        ]),
        search: i(() => [
          b(Lt, {
            modelValue: y.value,
            "onUpdate:modelValue": T[1] || (T[1] = (M) => y.value = M),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          r.value ? (s(), I(wt, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (s(), I(kt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            g.value.length ? (s(), I(jt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                h(" Total: " + a(g.value.length) + " models • " + a(P(R.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(W, null, oe(C.value, (M) => (s(), I(Be, {
              key: M.type,
              title: M.type.toUpperCase(),
              count: M.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(W, null, oe(M.models, (D) => (s(), I(He, {
                  key: D.hash || D.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...T[4] || (T[4] = [
                    h("📦", -1)
                  ])]),
                  title: i(() => [
                    h(a(D.filename), 1)
                  ]),
                  subtitle: i(() => [
                    h(a(P(D.size)), 1)
                  ]),
                  details: i(() => [
                    b(De, {
                      label: "Used by:",
                      value: (D.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    b(De, {
                      label: "Path:",
                      value: D.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    b(ne, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (le) => E(D)
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
            f.value.length ? (s(), I(Be, {
              key: 1,
              title: "MISSING",
              count: f.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, oe(f.value, (M) => (s(), I(He, {
                  key: M.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...T[6] || (T[6] = [
                    h("⚠", -1)
                  ])]),
                  title: i(() => [
                    h(a(M.filename), 1)
                  ]),
                  subtitle: i(() => [...T[7] || (T[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: i(() => {
                    var D;
                    return [
                      b(De, {
                        label: "Required by:",
                        value: ((D = M.workflow_names) == null ? void 0 : D.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: i(() => [
                    b(ne, {
                      variant: "primary",
                      size: "sm",
                      onClick: (D) => Y(M.filename)
                    }, {
                      default: i(() => [...T[8] || (T[8] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(ne, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (D) => x(M.filename)
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
            !A.value.length && !f.value.length ? (s(), I(it, {
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
        onClose: T[2] || (T[2] = (M) => w.value = !1)
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
            onClick: k
          }, {
            default: i(() => [...T[12] || (T[12] = [
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
        onClose: T[3] || (T[3] = (M) => _.value = null)
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), Km = /* @__PURE__ */ te(Hm, [["__scopeId", "data-v-cb4f12b3"]]), Jm = {
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
    } = Fe(), { addToQueue: u } = Gt(), v = c, r = $([]), m = $(!1), y = $(!1), w = $(null), _ = $(""), k = $(!1), R = $(null), A = $(!1), f = $(null), C = $(""), P = $(!1), E = $(!1), x = $(""), Y = $(""), F = $(null), G = N(
      () => r.value.reduce((U, S) => U + (S.size || 0), 0)
    ), T = N(() => {
      if (!_.value.trim()) return r.value;
      const U = _.value.toLowerCase();
      return r.value.filter((S) => {
        const ae = S, Q = S.sha256 || ae.sha256_hash || "";
        return S.filename.toLowerCase().includes(U) || Q.toLowerCase().includes(U);
      });
    }), M = N(() => {
      const U = {};
      for (const ae of T.value) {
        const Q = ae.type || "other";
        U[Q] || (U[Q] = []), U[Q].push(ae);
      }
      const S = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(U).sort(([ae], [Q]) => {
        const Me = S.indexOf(ae), we = S.indexOf(Q);
        return Me >= 0 && we >= 0 ? Me - we : Me >= 0 ? -1 : we >= 0 ? 1 : ae.localeCompare(Q);
      }).map(([ae, Q]) => ({ type: ae, models: Q }));
    });
    function D(U) {
      if (!U) return "Unknown";
      const S = 1024 * 1024 * 1024, ae = 1024 * 1024;
      return U >= S ? `${(U / S).toFixed(1)} GB` : U >= ae ? `${(U / ae).toFixed(0)} MB` : `${(U / 1024).toFixed(0)} KB`;
    }
    function le(U) {
      R.value = U.hash || U.filename;
    }
    async function se() {
      y.value = !0, w.value = null;
      try {
        const U = await l();
        await K(), U.changes > 0 && console.log(`Scan complete: ${U.changes} changes detected`);
      } catch (U) {
        w.value = U instanceof Error ? U.message : "Failed to scan models";
      } finally {
        y.value = !1;
      }
    }
    async function X() {
      if (C.value.trim()) {
        P.value = !0, w.value = null;
        try {
          const U = await g(C.value.trim());
          f.value = U.path, A.value = !1, C.value = "", await K(), console.log(`Directory changed: ${U.models_indexed} models indexed`), v("refresh");
        } catch (U) {
          w.value = U instanceof Error ? U.message : "Failed to change directory";
        } finally {
          P.value = !1;
        }
      }
    }
    function de() {
      if (!x.value.trim() || !Y.value.trim()) return;
      const U = Y.value.split("/").pop() || "model.safetensors";
      u([{
        workflow: "__manual__",
        filename: U,
        url: x.value.trim(),
        targetPath: Y.value.trim()
      }]), x.value = "", Y.value = "", E.value = !1;
    }
    async function K() {
      m.value = !0, w.value = null;
      try {
        r.value = await n();
      } catch (U) {
        w.value = U instanceof Error ? U.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function L() {
      try {
        const U = await p();
        f.value = U.path;
      } catch {
      }
    }
    return Ne(() => {
      K(), L();
    }), (U, S) => (s(), o(W, null, [
      b(Ke, null, {
        header: i(() => [
          b(Je, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: S[2] || (S[2] = (ae) => k.value = !0)
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
                onClick: S[0] || (S[0] = (ae) => A.value = !0)
              }, {
                default: i(() => [...S[15] || (S[15] = [
                  h(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              b(ne, {
                variant: "primary",
                size: "sm",
                onClick: S[1] || (S[1] = (ae) => E.value = !0)
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
          F.value ? (s(), o("div", Jm, [
            e("div", Ym, [
              e("span", Xm, a(F.value.message), 1),
              e("span", Qm, a(F.value.current) + "/" + a(F.value.total), 1)
            ]),
            e("div", Zm, [
              e("div", {
                class: "progress-fill",
                style: yt({ width: `${F.value.current / F.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : d("", !0),
          b(Lt, {
            modelValue: _.value,
            "onUpdate:modelValue": S[3] || (S[3] = (ae) => _.value = ae),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          m.value || F.value ? (s(), I(wt, {
            key: 0,
            message: F.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : w.value ? (s(), I(kt, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: K
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            r.value.length ? (s(), I(jt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                h(" Total: " + a(r.value.length) + " models • " + a(D(G.value)), 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(W, null, oe(M.value, (ae) => (s(), I(Be, {
              key: ae.type,
              title: ae.type.toUpperCase(),
              count: ae.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (s(!0), o(W, null, oe(ae.models, (Q) => (s(), I(He, {
                  key: Q.sha256 || Q.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...S[17] || (S[17] = [
                    h("📦", -1)
                  ])]),
                  title: i(() => [
                    h(a(Q.filename), 1)
                  ]),
                  subtitle: i(() => [
                    h(a(D(Q.size)), 1)
                  ]),
                  details: i(() => [
                    b(De, {
                      label: "Hash:",
                      value: Q.hash ? Q.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    b(ne, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Me) => le(Q)
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
            T.value.length ? d("", !0) : (s(), I(it, {
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
        onClose: S[4] || (S[4] = (ae) => k.value = !1)
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
      R.value ? (s(), I(vs, {
        key: 0,
        identifier: R.value,
        onClose: S[5] || (S[5] = (ae) => R.value = null)
      }, null, 8, ["identifier"])) : d("", !0),
      (s(), I(Ve, { to: "body" }, [
        A.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[9] || (S[9] = ze((ae) => A.value = !1, ["self"]))
        }, [
          e("div", ev, [
            e("div", tv, [
              S[20] || (S[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: S[6] || (S[6] = (ae) => A.value = !1)
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
                  "onUpdate:modelValue": S[7] || (S[7] = (ae) => C.value = ae),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              S[23] || (S[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", lv, [
              b(fe, {
                variant: "secondary",
                onClick: S[8] || (S[8] = (ae) => A.value = !1)
              }, {
                default: i(() => [...S[24] || (S[24] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              b(fe, {
                variant: "primary",
                disabled: !C.value.trim() || P.value,
                loading: P.value,
                onClick: X
              }, {
                default: i(() => [
                  h(a(P.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : d("", !0)
      ])),
      (s(), I(Ve, { to: "body" }, [
        E.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[14] || (S[14] = ze((ae) => E.value = !1, ["self"]))
        }, [
          e("div", iv, [
            e("div", rv, [
              S[25] || (S[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: S[10] || (S[10] = (ae) => E.value = !1)
              }, "✕")
            ]),
            e("div", dv, [
              e("div", cv, [
                S[26] || (S[26] = e("label", null, "Download URL", -1)),
                b(lt, {
                  modelValue: x.value,
                  "onUpdate:modelValue": S[11] || (S[11] = (ae) => x.value = ae),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", uv, [
                S[27] || (S[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                b(lt, {
                  modelValue: Y.value,
                  "onUpdate:modelValue": S[12] || (S[12] = (ae) => Y.value = ae),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              S[28] || (S[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", mv, [
              b(fe, {
                variant: "secondary",
                onClick: S[13] || (S[13] = (ae) => E.value = !1)
              }, {
                default: i(() => [...S[29] || (S[29] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              b(fe, {
                variant: "primary",
                disabled: !x.value.trim() || !Y.value.trim(),
                onClick: de
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
    const n = t, l = c, p = N(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), g = N(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), u = N(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (v, r) => (s(), I(Ye, {
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
              (s(!0), o(W, null, oe(t.node.used_in_workflows, (m) => (s(), o("span", {
                key: m,
                class: "workflow-tag"
              }, a(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: i(() => [
        b(fe, {
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
    return (c, n) => (s(), I(Ye, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (l) => c.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", zv, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", Lv, [
          (s(!0), o(W, null, oe(t.details, (l, p) => (s(), o("div", {
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
        b(fe, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (l) => c.$emit("cancel"))
        }, {
          default: i(() => [
            h(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), I(fe, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (l) => c.$emit("secondary"))
        }, {
          default: i(() => [
            h(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        b(fe, {
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
    const n = t, l = c, { getNodes: p, trackNodeAsDev: g, installNode: u, uninstallNode: v } = Fe(), r = $({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), m = $(!1), y = $(null), w = $(""), _ = $(!1), k = $(null), R = $(null), A = N(() => {
      if (!w.value.trim()) return r.value.nodes;
      const se = w.value.toLowerCase();
      return r.value.nodes.filter(
        (X) => {
          var de, K;
          return X.name.toLowerCase().includes(se) || ((de = X.description) == null ? void 0 : de.toLowerCase().includes(se)) || ((K = X.repository) == null ? void 0 : K.toLowerCase().includes(se));
        }
      );
    }), f = N(
      () => A.value.filter((se) => se.installed && se.tracked)
    ), C = N(
      () => A.value.filter((se) => !se.installed && se.tracked)
    ), P = N(
      () => A.value.filter((se) => se.installed && !se.tracked)
    );
    function E(se) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[se] || se;
    }
    const x = N(() => n.versionMismatches.length > 0);
    function Y(se) {
      return !se.used_in_workflows || se.used_in_workflows.length === 0 ? "Not used in any workflows" : se.used_in_workflows.length === 1 ? se.used_in_workflows[0] : `${se.used_in_workflows.length} workflows`;
    }
    function F(se) {
      k.value = se;
    }
    function G() {
      l("open-node-manager");
    }
    function T(se) {
      R.value = {
        title: "Track as Development Node",
        message: `Track "${se}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          R.value = null;
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
    function M(se) {
      R.value = {
        title: "Remove Untracked Node",
        message: `Remove "${se}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          R.value = null;
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
    function D(se) {
      R.value = {
        title: "Install Missing Node",
        message: `Install "${se}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          R.value = null;
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
    return Ne(le), (se, X) => (s(), o(W, null, [
      b(Ke, null, {
        header: i(() => [
          b(Je, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: X[0] || (X[0] = (de) => _.value = !0)
          }, {
            actions: i(() => [
              b(ne, {
                variant: "primary",
                size: "sm",
                onClick: G
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
            "onUpdate:modelValue": X[1] || (X[1] = (de) => w.value = de),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          m.value ? (s(), I(wt, {
            key: 0,
            message: "Loading nodes..."
          })) : y.value ? (s(), I(kt, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: le
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            r.value.total_count ? (s(), I(jt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                h(a(r.value.installed_count) + " installed ", 1),
                r.value.missing_count ? (s(), o(W, { key: 0 }, [
                  h(" • " + a(r.value.missing_count) + " missing", 1)
                ], 64)) : d("", !0),
                r.value.untracked_count ? (s(), o(W, { key: 1 }, [
                  h(" • " + a(r.value.untracked_count) + " untracked", 1)
                ], 64)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            x.value ? (s(), I(Be, {
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
                (s(!0), o(W, null, oe(t.versionMismatches, (de) => (s(), I(He, {
                  key: de.name,
                  status: "warning"
                }, {
                  icon: i(() => [...X[9] || (X[9] = [
                    h("⚠", -1)
                  ])]),
                  title: i(() => [
                    h(a(de.name), 1)
                  ]),
                  subtitle: i(() => [
                    e("span", Uv, [
                      e("span", Ov, a(de.actual), 1),
                      X[10] || (X[10] = e("span", { class: "version-arrow" }, "→", -1)),
                      e("span", Bv, a(de.expected), 1)
                    ])
                  ]),
                  actions: i(() => [
                    b(ne, {
                      variant: "warning",
                      size: "sm",
                      onClick: X[2] || (X[2] = (K) => l("repair-environment"))
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
            P.value.length ? (s(), I(Be, {
              key: 2,
              title: "UNTRACKED",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(W, null, oe(P.value, (de) => (s(), I(He, {
                  key: de.name,
                  status: "warning"
                }, {
                  icon: i(() => [...X[12] || (X[12] = [
                    h("?", -1)
                  ])]),
                  title: i(() => [
                    h(a(de.name), 1)
                  ]),
                  subtitle: i(() => [...X[13] || (X[13] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: i(() => [
                    b(De, {
                      label: "Used by:",
                      value: Y(de)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    b(ne, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => F(de)
                    }, {
                      default: i(() => [...X[14] || (X[14] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(ne, {
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => T(de.name)
                    }, {
                      default: i(() => [...X[15] || (X[15] = [
                        h(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(ne, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (K) => M(de.name)
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
            f.value.length ? (s(), I(Be, {
              key: 3,
              title: "INSTALLED",
              count: f.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(W, null, oe(f.value, (de) => (s(), I(He, {
                  key: de.name,
                  status: "synced"
                }, {
                  icon: i(() => [
                    h(a(de.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: i(() => [
                    h(a(de.name), 1)
                  ]),
                  subtitle: i(() => [
                    de.version ? (s(), o("span", Fv, a(de.source === "development" ? "" : "v") + a(de.version), 1)) : (s(), o("span", Av, "version unknown")),
                    e("span", Vv, " • " + a(E(de.source)), 1)
                  ]),
                  details: i(() => [
                    b(De, {
                      label: "Used by:",
                      value: Y(de)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    b(ne, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => F(de)
                    }, {
                      default: i(() => [...X[17] || (X[17] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(ne, {
                      variant: "secondary",
                      size: "xs",
                      onClick: G
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
            C.value.length ? (s(), I(Be, {
              key: 4,
              title: "MISSING",
              count: C.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(W, null, oe(C.value, (de) => (s(), I(He, {
                  key: de.name,
                  status: "missing"
                }, {
                  icon: i(() => [...X[19] || (X[19] = [
                    h("!", -1)
                  ])]),
                  title: i(() => [
                    h(a(de.name), 1)
                  ]),
                  subtitle: i(() => [...X[20] || (X[20] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: i(() => [
                    b(De, {
                      label: "Required by:",
                      value: Y(de)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    b(ne, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => F(de)
                    }, {
                      default: i(() => [...X[21] || (X[21] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(ne, {
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => D(de.name)
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
            !f.value.length && !C.value.length && !P.value.length ? (s(), I(it, {
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
        onClose: X[4] || (X[4] = (de) => _.value = !1)
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
            onClick: X[3] || (X[3] = (de) => _.value = !1)
          }, {
            default: i(() => [...X[24] || (X[24] = [
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
        onClose: X[5] || (X[5] = (de) => k.value = null)
      }, null, 8, ["node"])) : d("", !0),
      R.value ? (s(), I(Bs, {
        key: 1,
        title: R.value.title,
        message: R.value.message,
        warning: R.value.warning,
        "confirm-label": R.value.confirmLabel,
        destructive: R.value.destructive,
        onConfirm: R.value.onConfirm,
        onCancel: X[6] || (X[6] = (de) => R.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : d("", !0)
    ], 64));
  }
}), Gv = /* @__PURE__ */ te(Wv, [["__scopeId", "data-v-1555a802"]]);
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
}, Yv = /* @__PURE__ */ ee({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = $(!1), l = N(() => {
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
      }, a(l.value), 9, qv),
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
    const c = t, n = N(() => c.fetchingRemote === c.remote.name), l = N(() => c.remote.is_default), p = N(() => c.syncStatus && c.syncStatus.behind > 0), g = N(() => c.syncStatus && c.syncStatus.ahead > 0), u = N(() => c.remote.push_url !== c.remote.fetch_url), v = N(() => {
      const m = c.remote.fetch_url, y = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return y ? `https://${y[1]}/${y[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), r = N(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, y) => (s(), I(He, {
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
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(W, { key: 0 }, [
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
        l.value ? d("", !0) : (s(), I(ne, {
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
          t.remote.push_url !== t.remote.fetch_url ? (s(), I(De, {
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
    const c = t, n = N(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
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
        $e(l.$slots, "default", {}, void 0, !0)
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
    const v = N(() => p.value.name.trim() !== "" && p.value.fetchUrl.trim() !== "");
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
    const c = t, n = N(
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
    const g = N(() => {
      var f;
      return ((f = n.error) == null ? void 0 : f.toLowerCase().includes("unrelated histories")) ?? !1;
    }), u = N(() => {
      if (!n.preview) return 0;
      const f = n.preview.changes.workflows;
      return f.added.length + f.modified.length + f.deleted.length;
    }), v = N(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), r = N(() => {
      var f;
      return u.value > 0 || v.value > 0 || (((f = n.preview) == null ? void 0 : f.changes.models.count) || 0) > 0;
    }), m = N(() => n.preview && Fs(n.preview) ? n.preview : null), y = N(() => {
      var f;
      return ((f = m.value) == null ? void 0 : f.workflow_conflicts.length) ?? 0;
    }), w = N(() => {
      var f;
      return ((f = n.conflictResolutions) == null ? void 0 : f.size) ?? 0;
    }), _ = N(
      () => y.value > 0 && w.value === y.value
    ), k = N(() => !(!n.preview || n.preview.has_uncommitted_changes || m.value && !_.value));
    function R(f) {
      if (!m.value) return !1;
      const C = f.replace(/\.json$/, "");
      return m.value.workflow_conflicts.some((P) => P.name === C);
    }
    function A(f) {
      const C = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      l("pull", { modelStrategy: p.value, force: f, resolutions: C });
    }
    return (f, C) => {
      var P, E;
      return s(), I(Ve, { to: "body" }, [
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
              ])])) : (P = t.preview) != null && P.has_uncommitted_changes ? (s(), o(W, { key: 2 }, [
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
                      (s(!0), o(W, null, oe(t.preview.changes.workflows.added, (x) => (s(), o("div", {
                        key: "a-" + x,
                        class: "change-item add"
                      }, " + " + a(x), 1))), 128)),
                      (s(!0), o(W, null, oe(t.preview.changes.workflows.modified, (x) => (s(), o("div", {
                        key: "m-" + x,
                        class: "change-item modify"
                      }, [
                        h(" ~ " + a(x) + " ", 1),
                        R(x) ? (s(), o("span", Wf, "CONFLICT")) : d("", !0)
                      ]))), 128)),
                      (s(!0), o(W, null, oe(t.preview.changes.workflows.deleted, (x) => (s(), o("div", {
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
                      (s(!0), o(W, null, oe(t.preview.changes.nodes.to_install, (x) => (s(), o("div", {
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
                      (s(!0), o(W, null, oe(t.preview.changes.models.referenced, (x) => (s(), o("div", {
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
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[1] || (C[1] = (x) => p.value = x),
                        value: "all"
                      }, null, 512), [
                        [Kt, p.value]
                      ]),
                      C[22] || (C[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", Zf, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[2] || (C[2] = (x) => p.value = x),
                        value: "required"
                      }, null, 512), [
                        [Kt, p.value]
                      ]),
                      C[23] || (C[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", eg, [
                      Ue(e("input", {
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
              t.error ? (s(), o(W, { key: 0 }, [
                b(ne, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: C[5] || (C[5] = (x) => A(!1))
                }, {
                  default: i(() => [...C[30] || (C[30] = [
                    h(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                b(ne, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: C[6] || (C[6] = (x) => A(!0))
                }, {
                  default: i(() => [...C[31] || (C[31] = [
                    h(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (E = t.preview) != null && E.has_uncommitted_changes ? (s(), I(ne, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: C[7] || (C[7] = (x) => A(!0))
              }, {
                default: i(() => [...C[32] || (C[32] = [
                  h(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(W, { key: 2 }, [
                m.value && !_.value ? (s(), I(ne, {
                  key: 0,
                  variant: "primary",
                  onClick: C[8] || (C[8] = (x) => l("openConflictResolution"))
                }, {
                  default: i(() => [
                    h(" Resolve Conflicts (" + a(w.value) + "/" + a(y.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), I(ne, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !k.value,
                  onClick: C[9] || (C[9] = (x) => A(!1))
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
      return s(), I(Ve, { to: "body" }, [
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
              ])])) : (r = t.preview) != null && r.remote_has_new_commits ? (s(), o(W, { key: 2 }, [
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
                    (s(!0), o(W, null, oe(t.preview.commits, (y) => (s(), o("div", {
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
                    Ue(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": u[1] || (u[1] = (y) => l.value = y)
                    }, null, 512), [
                      [Xt, l.value]
                    ]),
                    u[11] || (u[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  u[12] || (u[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(W, { key: 3 }, [
                e("div", hg, [
                  u[14] || (u[14] = e("span", { class: "icon" }, "📤", -1)),
                  h(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", yg, [
                  u[15] || (u[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", wg, [
                    (s(!0), o(W, null, oe(t.preview.commits, (y) => (s(), o("div", {
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
              (m = t.preview) != null && m.remote_has_new_commits ? (s(), o(W, { key: 0 }, [
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
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), I(ne, {
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
}, Ug = { class: "resolved-text" }, Og = { class: "conflict-hashes" }, Bg = { class: "hash-item" }, Fg = { class: "hash-item" }, Ag = { class: "conflict-actions" }, Vg = /* @__PURE__ */ ee({
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
    const g = N(() => p.value !== null), u = N(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), v = N(() => {
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
}), Wg = /* @__PURE__ */ te(Vg, [["__scopeId", "data-v-506d3bbf"]]), Gg = { class: "resolution-content" }, jg = {
  key: 0,
  class: "error-box"
}, qg = { class: "resolution-header" }, Hg = { class: "header-stats" }, Kg = { class: "stat" }, Jg = { class: "stat-value" }, Yg = { class: "stat resolved" }, Xg = { class: "stat-value" }, Qg = {
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
    const n = t, l = c, p = N(() => n.resolutions.size), g = N(() => n.workflowConflicts.length - p.value), u = N(() => p.value === n.workflowConflicts.length), v = N(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function r(_) {
      const k = n.resolutions.get(_);
      return (k == null ? void 0 : k.resolution) ?? null;
    }
    function m(_, k) {
      l("resolve", _, k);
    }
    function y() {
      l("close");
    }
    function w() {
      l("apply");
    }
    return (_, k) => (s(), I(Ye, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: y
    }, {
      body: i(() => [
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
            (s(!0), o(W, null, oe(t.workflowConflicts, (R) => (s(), I(Wg, {
              key: R.name,
              conflict: R,
              resolution: r(R.name),
              onResolve: (A) => m(R.name, A)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          u.value ? (s(), o("div", tp, [
            k[6] || (k[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(v.value) + '" to continue.', 1)
          ])) : d("", !0)
        ])
      ]),
      footer: i(() => [
        b(fe, {
          variant: "secondary",
          onClick: y
        }, {
          default: i(() => [...k[7] || (k[7] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        k[8] || (k[8] = e("div", { class: "footer-spacer" }, null, -1)),
        b(fe, {
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
          (s(!0), o(W, null, oe(t.conflict.affected_workflows, (l) => (s(), o("li", {
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
    const n = t, l = c, p = N(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (g, u) => (s(), I(Ye, {
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
          ])) : t.validation.node_conflicts.length > 0 ? (s(), o(W, { key: 1 }, [
            u[6] || (u[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", bp, [
              (s(!0), o(W, null, oe(t.validation.node_conflicts, (v) => (s(), I(yp, {
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
              (s(!0), o(W, null, oe(t.validation.warnings, (v, r) => (s(), o("li", { key: r }, a(v), 1))), 128))
            ])
          ])) : d("", !0)
        ])
      ]),
      footer: i(() => [
        b(fe, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (v) => l("cancel"))
        }, {
          default: i(() => [...u[9] || (u[9] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u[11] || (u[11] = e("div", { class: "footer-spacer" }, null, -1)),
        b(fe, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (v) => l("goBack"))
        }, {
          default: i(() => [...u[10] || (u[10] = [
            h(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        b(fe, {
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
      pushToRemote: _,
      validateMerge: k
    } = Fe(), R = $([]), A = $(null), f = $({}), C = $(!1), P = $(null), E = $(""), x = $(!1), Y = $(null), F = $(!1), G = $("add"), T = $({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), M = N(() => {
      if (!E.value.trim()) return R.value;
      const V = E.value.toLowerCase();
      return R.value.filter(
        (Z) => Z.name.toLowerCase().includes(V) || Z.fetch_url.toLowerCase().includes(V) || Z.push_url.toLowerCase().includes(V)
      );
    });
    async function D() {
      C.value = !0, P.value = null;
      try {
        const V = await l();
        R.value = V.remotes, A.value = V.current_branch_tracking || null, await Promise.all(
          V.remotes.map(async (Z) => {
            const pe = await r(Z.name);
            pe && (f.value[Z.name] = pe);
          })
        );
      } catch (V) {
        P.value = V instanceof Error ? V.message : "Failed to load remotes";
      } finally {
        C.value = !1;
      }
    }
    function le() {
      G.value = "add", T.value = { name: "", fetchUrl: "", pushUrl: "" }, F.value = !0;
    }
    function se(V) {
      const Z = R.value.find((pe) => pe.name === V);
      Z && (G.value = "edit", T.value = {
        name: Z.name,
        fetchUrl: Z.fetch_url,
        pushUrl: Z.push_url
      }, F.value = !0);
    }
    async function X(V) {
      try {
        G.value === "add" ? await p(V.name, V.fetchUrl) : await u(V.name, V.fetchUrl, V.pushUrl || void 0), F.value = !1, await D();
      } catch (Z) {
        P.value = Z instanceof Error ? Z.message : "Operation failed";
      }
    }
    function de() {
      F.value = !1, T.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function K(V) {
      Y.value = V;
      try {
        await v(V);
        const Z = await r(V);
        Z && (f.value[V] = Z), n("toast", `✓ Fetched from ${V}`, "success");
      } catch (Z) {
        n("toast", Z instanceof Error ? Z.message : "Fetch failed", "error");
      } finally {
        Y.value = null;
      }
    }
    async function L(V) {
      if (confirm(`Remove remote "${V}"?`))
        try {
          await g(V), await D();
        } catch (Z) {
          P.value = Z instanceof Error ? Z.message : "Failed to remove remote";
        }
    }
    function U() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const S = $("idle"), ae = N(() => S.value === "pull_preview"), Q = N(
      () => S.value === "resolving" || S.value === "validating"
    ), Me = N(
      () => S.value === "validation_review" || S.value === "executing"
    ), we = $(!1), Oe = $(null), Te = $(!1), ce = $(null), ve = $(!1), Re = $(null), ie = $(null), J = $(/* @__PURE__ */ new Map()), Se = $(null), be = $(null), st = N(() => Re.value && Fs(Re.value) ? Re.value : null);
    async function rt(V) {
      ce.value = V, S.value = "pull_preview", ve.value = !0, Re.value = null, ie.value = null;
      try {
        Re.value = await m(V);
      } catch (Z) {
        ie.value = Z instanceof Error ? Z.message : "Failed to load pull preview";
      } finally {
        ve.value = !1;
      }
    }
    function vt() {
      S.value = "idle", Re.value = null, ie.value = null, ce.value = null;
    }
    async function xe(V) {
      if (!ce.value) return;
      S.value = "executing", ie.value = null;
      const Z = ce.value;
      try {
        const pe = await y(Z, V);
        if (pe.rolled_back) {
          ie.value = `Pull failed and was rolled back: ${pe.error || "Unknown error"}`, S.value = "pull_preview";
          return;
        }
        re(), S.value = "idle", n("toast", `✓ Pulled from ${Z}`, "success"), await D();
      } catch (pe) {
        ie.value = pe instanceof Error ? pe.message : "Pull failed", S.value = "pull_preview";
      }
    }
    function Ge() {
      st.value && (S.value = "resolving", be.value = null);
    }
    function Xe(V, Z) {
      J.value.set(V, { name: V, resolution: Z });
    }
    function je() {
      S.value = "pull_preview";
    }
    async function ft() {
      S.value = "validating", be.value = null;
      try {
        const V = Array.from(J.value.values());
        Se.value = await k(ce.value, V), S.value = "validation_review";
      } catch (V) {
        be.value = V instanceof Error ? V.message : "Validation failed", S.value = "resolving";
      }
    }
    async function ke() {
      S.value = "executing";
      const V = ce.value;
      try {
        const Z = Array.from(J.value.values()), pe = await y(V, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Z
        });
        if (pe.rolled_back) {
          ie.value = `Pull failed and was rolled back: ${pe.error || "Unknown error"}`, S.value = "pull_preview";
          return;
        }
        re(), S.value = "idle", n("toast", `✓ Pulled from ${V}`, "success"), await D();
      } catch (Z) {
        ie.value = Z instanceof Error ? Z.message : "Pull failed", S.value = "validation_review";
      }
    }
    function Ae() {
      S.value = "resolving";
    }
    function dt() {
      re(), S.value = "idle";
    }
    function re() {
      J.value.clear(), Se.value = null, be.value = null, ie.value = null, Re.value = null, ce.value = null;
    }
    async function q(V) {
      ce.value = V, we.value = !0, ve.value = !0, Oe.value = null;
      try {
        Oe.value = await w(V);
      } catch (Z) {
        P.value = Z instanceof Error ? Z.message : "Failed to load push preview";
      } finally {
        ve.value = !1;
      }
    }
    function Ee() {
      we.value = !1, Oe.value = null, ce.value = null;
    }
    async function O(V) {
      if (!ce.value) return;
      Te.value = !0;
      const Z = ce.value;
      try {
        await _(Z, V), Ee(), n("toast", `✓ Pushed to ${Z}`, "success"), await D();
      } catch (pe) {
        n("toast", pe instanceof Error ? pe.message : "Push failed", "error");
      } finally {
        Te.value = !1;
      }
    }
    function B() {
      const V = ce.value;
      Ee(), V && rt(V);
    }
    return Ne(D), (V, Z) => (s(), o(W, null, [
      b(Ke, null, {
        header: i(() => [
          b(Je, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: Z[0] || (Z[0] = (pe) => x.value = !0)
          }, {
            actions: i(() => [
              F.value ? d("", !0) : (s(), I(ne, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: le
              }, {
                default: i(() => [...Z[3] || (Z[3] = [
                  h(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          F.value ? d("", !0) : (s(), I(Lt, {
            key: 0,
            modelValue: E.value,
            "onUpdate:modelValue": Z[1] || (Z[1] = (pe) => E.value = pe),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: i(() => [
          C.value ? (s(), I(wt, {
            key: 0,
            message: "Loading remotes..."
          })) : P.value ? (s(), I(kt, {
            key: 1,
            message: P.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            F.value ? (s(), I(bf, {
              key: 0,
              mode: G.value,
              "remote-name": T.value.name,
              "fetch-url": T.value.fetchUrl,
              "push-url": T.value.pushUrl,
              onSubmit: X,
              onCancel: de
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            R.value.length && !F.value ? (s(), I(jt, {
              key: 1,
              variant: "compact"
            }, {
              default: i(() => [
                h(" Total: " + a(R.value.length) + " remote" + a(R.value.length !== 1 ? "s" : "") + " ", 1),
                A.value ? (s(), o("span", xp, " • Tracking: " + a(A.value.remote) + "/" + a(A.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            M.value.length && !F.value ? (s(), I(Be, {
              key: 2,
              title: "REMOTES",
              count: M.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, oe(M.value, (pe) => (s(), I(rf, {
                  key: pe.name,
                  remote: pe,
                  "sync-status": f.value[pe.name],
                  "fetching-remote": Y.value,
                  onFetch: K,
                  onEdit: se,
                  onRemove: L,
                  onPull: rt,
                  onPush: q
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !M.value.length && !F.value ? (s(), I(it, {
              key: 3,
              icon: "🌐",
              message: E.value ? `No remotes match '${E.value}'` : "No remotes configured."
            }, {
              actions: i(() => [
                b(ne, {
                  variant: "primary",
                  onClick: le
                }, {
                  default: i(() => [...Z[4] || (Z[4] = [
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
        onClose: Z[2] || (Z[2] = (pe) => x.value = !1)
      }, {
        content: i(() => [...Z[5] || (Z[5] = [
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
            onClick: U
          }, {
            default: i(() => [...Z[6] || (Z[6] = [
              h(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b(ng, {
        show: ae.value,
        "remote-name": ce.value || "",
        preview: Re.value,
        loading: ve.value,
        pulling: S.value === "executing",
        error: ie.value,
        "conflict-resolutions": J.value,
        onClose: vt,
        onPull: xe,
        onOpenConflictResolution: Ge
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      b(Sg, {
        show: we.value,
        "remote-name": ce.value || "",
        preview: Oe.value,
        loading: ve.value,
        pushing: Te.value,
        onClose: Ee,
        onPush: O,
        onPullFirst: B
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      Q.value && st.value ? (s(), I(op, {
        key: 0,
        "workflow-conflicts": st.value.workflow_conflicts,
        resolutions: J.value,
        "operation-type": "pull",
        validating: S.value === "validating",
        error: be.value,
        onClose: je,
        onResolve: Xe,
        onApply: ft
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : d("", !0),
      Me.value && Se.value ? (s(), I(Cp, {
        key: 1,
        validation: Se.value,
        "operation-type": "pull",
        executing: S.value === "executing",
        onProceed: ke,
        onGoBack: Ae,
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
        $e(c.$slots, "default", {}, void 0, !0)
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
}), Up = /* @__PURE__ */ te(Np, [["__scopeId", "data-v-71c0f550"]]), Op = { class: "workspace-settings-content" }, Bp = { class: "settings-section" }, Fp = { class: "path-setting" }, Ap = { class: "path-value" }, Vp = { class: "path-setting" }, Wp = { class: "path-value" }, Gp = { class: "settings-section" }, jp = { class: "settings-section" }, qp = { class: "settings-section" }, Hp = /* @__PURE__ */ ee({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(t, { expose: c, emit: n }) {
    const l = t, p = n, { getConfig: g, updateConfig: u } = Fe(), v = $(!1), r = $(null), m = $(null), y = $(null), w = $(null), _ = $(""), k = $(""), R = $(!1);
    function A(F) {
      return F.join(" ");
    }
    function f(F) {
      return F.trim() ? F.trim().split(/\s+/) : [];
    }
    const C = N(() => {
      if (!w.value) return !1;
      const F = _.value !== (w.value.civitai_api_key || ""), G = k.value !== A(w.value.comfyui_extra_args || []);
      return F || G;
    });
    async function P() {
      v.value = !0, r.value = null;
      try {
        y.value = await g(l.workspacePath || void 0), w.value = { ...y.value }, _.value = y.value.civitai_api_key || "", k.value = A(y.value.comfyui_extra_args || []);
        const F = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        R.value = F === "true";
      } catch (F) {
        r.value = F instanceof Error ? F.message : "Failed to load settings";
      } finally {
        v.value = !1;
      }
    }
    async function E() {
      var F, G;
      m.value = null;
      try {
        const T = {};
        _.value !== (((F = w.value) == null ? void 0 : F.civitai_api_key) || "") && (T.civitai_api_key = _.value || null), k.value !== A(((G = w.value) == null ? void 0 : G.comfyui_extra_args) || []) && (T.comfyui_extra_args = f(k.value)), await u(T, l.workspacePath || void 0), await P(), m.value = { type: "success", message: "Settings saved successfully" }, p("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (T) {
        const M = T instanceof Error ? T.message : "Failed to save settings";
        m.value = { type: "error", message: M }, p("error", M);
      }
    }
    function x() {
      w.value && (_.value = w.value.civitai_api_key || "", k.value = A(w.value.comfyui_extra_args || []), m.value = null);
    }
    function Y(F) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(F)), console.log("[ComfyGit] Auto-refresh setting saved:", F);
    }
    return c({
      saveSettings: E,
      resetSettings: x,
      hasChanges: C,
      loadSettings: P
    }), Ne(P), (F, G) => (s(), o("div", Op, [
      v.value ? (s(), I(wt, {
        key: 0,
        message: "Loading workspace settings..."
      })) : r.value ? (s(), I(kt, {
        key: 1,
        message: r.value,
        retry: !0,
        onRetry: P
      }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
        b(Be, { title: "WORKSPACE PATHS" }, {
          default: i(() => {
            var T, M;
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
                  e("div", Wp, a(((M = y.value) == null ? void 0 : M.models_path) || "Not configured"), 1)
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
        b(Be, { title: "COMFYUI SETTINGS" }, {
          default: i(() => [
            e("div", jp, [
              b(ns, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: i(() => [
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
        b(Be, { title: "UI SETTINGS" }, {
          default: i(() => [
            e("div", qp, [
              b(ns, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: i(() => [
                  b(Up, {
                    modelValue: R.value,
                    "onUpdate:modelValue": [
                      G[2] || (G[2] = (T) => R.value = T),
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
        m.value ? (s(), I(jt, {
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
}), As = /* @__PURE__ */ te(Hp, [["__scopeId", "data-v-9f44552d"]]), Kp = /* @__PURE__ */ ee({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const c = $(null);
    function n() {
      console.log("[ComfyGit] Settings saved");
    }
    return (l, p) => (s(), I(Ke, null, {
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
              (u = c.value) != null && u.hasChanges ? (s(), I(ne, {
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
        b(As, {
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
    const { getWorkspaceLogs: c, getWorkspaceLogPath: n, openFile: l } = Fe(), p = $([]), g = $(!1), u = $(null), v = $(!1), r = $(null), m = $(null), y = $(!1), w = N(() => p.value.length === 0 ? [] : p.value.map((A) => ({
      text: `${A.timestamp} - ${A.name} - ${A.level} - ${A.func}:${A.line} - ${A.message}`,
      level: A.level
    })));
    async function _() {
      g.value = !0, u.value = null;
      try {
        p.value = await c(void 0, 500);
      } catch (A) {
        u.value = A instanceof Error ? A.message : "Failed to load workspace logs";
      } finally {
        g.value = !1, setTimeout(() => {
          var A;
          (A = r.value) != null && A.parentElement && (r.value.parentElement.scrollTop = r.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function k() {
      try {
        const A = await n();
        A.exists && (m.value = A.path);
      } catch {
      }
    }
    async function R() {
      if (m.value) {
        y.value = !0;
        try {
          await l(m.value);
        } catch (A) {
          console.error("Failed to open log file:", A);
        } finally {
          y.value = !1;
        }
      }
    }
    return Ne(() => {
      _(), k();
    }), (A, f) => (s(), o(W, null, [
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
                onClick: R,
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
                onClick: _,
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
          g.value ? (s(), I(wt, {
            key: 0,
            message: "Loading workspace logs..."
          })) : u.value ? (s(), I(kt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            p.value.length === 0 ? (s(), I(it, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: r,
              class: "log-output"
            }, [
              (s(!0), o(W, null, oe(w.value, (C, P) => (s(), o("div", {
                key: P,
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
    const { getEnvironmentLogs: c, getStatus: n, getEnvironmentLogPath: l, openFile: p } = Fe(), g = $([]), u = $(!1), v = $(null), r = $(!1), m = $("production"), y = $(null), w = $(null), _ = $(!1), k = N(() => g.value.length === 0 ? [] : g.value.map((C) => ({
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
    async function A() {
      try {
        const C = await l();
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
    return Ne(() => {
      R(), A();
    }), (C, P) => (s(), o(W, null, [
      b(Ke, null, {
        header: i(() => [
          b(Je, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: P[0] || (P[0] = (E) => r.value = !0)
          }, {
            actions: i(() => [
              b(ne, {
                variant: "secondary",
                size: "sm",
                onClick: f,
                disabled: !w.value || _.value,
                title: "Open log file in default editor"
              }, {
                default: i(() => [
                  h(a(_.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(ne, {
                variant: "secondary",
                size: "sm",
                onClick: R,
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
          u.value ? (s(), I(wt, {
            key: 0,
            message: "Loading environment logs..."
          })) : v.value ? (s(), I(kt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: R
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            g.value.length === 0 ? (s(), I(it, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: y,
              class: "log-output"
            }, [
              (s(!0), o(W, null, oe(k.value, (E, x) => (s(), o("div", {
                key: x,
                class: me(`log-line log-level-${E.level.toLowerCase()}`)
              }, a(E.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      b(mt, {
        show: r.value,
        title: "About Environment Logs",
        onClose: P[2] || (P[2] = (E) => r.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            P[3] || (P[3] = h(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(m.value), 1),
            P[4] || (P[4] = h(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          P[5] || (P[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          P[6] || (P[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: i(() => [
          b(ne, {
            variant: "primary",
            onClick: P[1] || (P[1] = (E) => r.value = !1)
          }, {
            default: i(() => [...P[7] || (P[7] = [
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
    return (c, n) => (s(), I(He, {
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
        $e(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: i(() => [
          b(De, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          b(De, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          b(De, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), I(De, {
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
    return (p, g) => (s(), I(Ye, {
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
          t.canDelete ? (s(), I(fe, {
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
          b(fe, {
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
    const c = t, n = N(() => `${Math.max(0, Math.min(100, c.progress))}%`);
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
        (s(!0), o(W, null, oe(t.steps, (u) => (s(), o("div", {
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
}, Xh = 10, Qh = /* @__PURE__ */ ee({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: c }) {
    const n = c, { getComfyUIReleases: l, createEnvironment: p, getCreateProgress: g } = Fe(), u = $(""), v = $(Ws), r = $("latest"), m = $(Gs), y = $(!1), w = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), _ = $(!1), k = $(!1), R = $({
      progress: 0,
      message: ""
    });
    let A = null, f = 0;
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
    ], P = $(null);
    function E() {
      k.value || n("close");
    }
    async function x() {
      const M = u.value.trim();
      if (M) {
        k.value = !0, R.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const D = {
            name: M,
            python_version: v.value,
            comfyui_version: r.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, le = await p(D);
          le.status === "started" ? Y() : le.status === "error" && (R.value = {
            progress: 0,
            message: le.message || "Failed to start creation",
            error: le.message
          });
        } catch (D) {
          R.value = {
            progress: 0,
            message: D instanceof Error ? D.message : "Unknown error",
            error: D instanceof Error ? D.message : "Unknown error"
          };
        }
      }
    }
    function Y() {
      A || (f = 0, A = window.setInterval(async () => {
        try {
          const M = await g();
          f = 0, R.value = {
            progress: M.progress ?? 0,
            message: M.message,
            phase: M.phase,
            error: M.error
          }, M.state === "complete" ? (F(), n("created", M.environment_name || u.value.trim(), y.value)) : M.state === "error" ? (F(), R.value.error = M.error || M.message) : M.state === "idle" && k.value && (F(), R.value.error = "Creation was interrupted. Please try again.");
        } catch {
          f++, f >= Xh && (F(), R.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function F() {
      A && (clearInterval(A), A = null);
    }
    function G() {
      k.value = !1, R.value = { progress: 0, message: "" }, n("close");
    }
    async function T() {
      _.value = !0;
      try {
        w.value = await l();
      } catch (M) {
        console.error("Failed to load ComfyUI releases:", M);
      } finally {
        _.value = !1;
      }
    }
    return Ne(async () => {
      var M;
      await uo(), (M = P.value) == null || M.focus(), T();
    }), zs(() => {
      F();
    }), (M, D) => (s(), I(Ye, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !k.value,
      onClose: E
    }, {
      body: i(() => [
        k.value ? (s(), o("div", jh, [
          e("p", qh, [
            D[11] || (D[11] = h(" Creating environment ", -1)),
            e("strong", null, a(u.value), 1),
            D[12] || (D[12] = h("... ", -1))
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
            D[6] || (D[6] = e("label", { class: "form-label" }, "Name", -1)),
            Ue(e("input", {
              ref_key: "nameInput",
              ref: P,
              "onUpdate:modelValue": D[0] || (D[0] = (le) => u.value = le),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: ht(x, ["enter"])
            }, null, 544), [
              [Tt, u.value]
            ])
          ]),
          e("div", Nh, [
            D[7] || (D[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": D[1] || (D[1] = (le) => v.value = le),
              class: "form-select"
            }, [
              (s(!0), o(W, null, oe(_e(Vs), (le) => (s(), o("option", {
                key: le,
                value: le
              }, a(le), 9, Uh))), 128))
            ], 512), [
              [Rt, v.value]
            ])
          ]),
          e("div", Oh, [
            D[8] || (D[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": D[2] || (D[2] = (le) => r.value = le),
              class: "form-select",
              disabled: _.value
            }, [
              (s(!0), o(W, null, oe(w.value, (le) => (s(), o("option", {
                key: le.tag_name,
                value: le.tag_name
              }, a(le.name), 9, Fh))), 128))
            ], 8, Bh), [
              [Rt, r.value]
            ])
          ]),
          e("div", Ah, [
            D[9] || (D[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": D[3] || (D[3] = (le) => m.value = le),
              class: "form-select"
            }, [
              (s(!0), o(W, null, oe(_e(fs), (le) => (s(), o("option", {
                key: le,
                value: le
              }, a(le) + a(le === "auto" ? " (detect GPU)" : ""), 9, Vh))), 128))
            ], 512), [
              [Rt, m.value]
            ])
          ]),
          e("div", Wh, [
            e("label", Gh, [
              Ue(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": D[4] || (D[4] = (le) => y.value = le)
              }, null, 512), [
                [Xt, y.value]
              ]),
              D[10] || (D[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: i(() => [
        k.value ? (s(), o(W, { key: 1 }, [
          R.value.error ? (s(), I(fe, {
            key: 0,
            variant: "secondary",
            onClick: G
          }, {
            default: i(() => [...D[15] || (D[15] = [
              h(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", Yh, " Creating environment... "))
        ], 64)) : (s(), o(W, { key: 0 }, [
          b(fe, {
            variant: "primary",
            disabled: !u.value.trim(),
            onClick: x
          }, {
            default: i(() => [...D[13] || (D[13] = [
              h(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(fe, {
            variant: "secondary",
            onClick: D[5] || (D[5] = (le) => n("close"))
          }, {
            default: i(() => [...D[14] || (D[14] = [
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
    const l = n, { getEnvironments: p } = Fe(), g = $([]), u = $(!1), v = $(null), r = $(""), m = $(!1), y = $(!1), w = $(null), _ = N(() => {
      if (!r.value.trim()) return g.value;
      const P = r.value.toLowerCase();
      return g.value.filter(
        (E) => {
          var x;
          return E.name.toLowerCase().includes(P) || ((x = E.current_branch) == null ? void 0 : x.toLowerCase().includes(P));
        }
      );
    });
    function k(P, E) {
      y.value = !1, l("created", P, E);
    }
    function R() {
      y.value = !0;
    }
    function A(P) {
      w.value = P;
    }
    function f(P) {
      w.value = null, l("delete", P);
    }
    async function C() {
      u.value = !0, v.value = null;
      try {
        g.value = await p();
      } catch (P) {
        v.value = P instanceof Error ? P.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return Ne(C), c({
      loadEnvironments: C,
      openCreateModal: R
    }), (P, E) => (s(), o(W, null, [
      b(Ke, null, {
        header: i(() => [
          b(Je, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (x) => m.value = !0)
          }, {
            actions: i(() => [
              b(ne, {
                variant: "primary",
                size: "sm",
                onClick: R
              }, {
                default: i(() => [...E[6] || (E[6] = [
                  h(" Create ", -1)
                ])]),
                _: 1
              }),
              b(ne, {
                variant: "secondary",
                size: "sm",
                onClick: C
              }, {
                default: i(() => [...E[7] || (E[7] = [
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
            "onUpdate:modelValue": E[1] || (E[1] = (x) => r.value = x),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          u.value ? (s(), I(wt, {
            key: 0,
            message: "Loading environments..."
          })) : v.value ? (s(), I(kt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            _.value.length ? (s(), I(Be, {
              key: 0,
              title: "ENVIRONMENTS",
              count: _.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, oe(_.value, (x) => (s(), I(oh, {
                  key: x.name,
                  "environment-name": x.name,
                  "is-current": x.is_current,
                  "current-branch": x.current_branch,
                  "show-last-used": !1
                }, {
                  actions: i(() => [
                    x.is_current ? d("", !0) : (s(), I(ne, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (Y) => P.$emit("switch", x.name)
                    }, {
                      default: i(() => [...E[8] || (E[8] = [
                        h(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    b(ne, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Y) => A(x)
                    }, {
                      default: i(() => [...E[9] || (E[9] = [
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
            _.value.length ? d("", !0) : (s(), I(it, {
              key: 1,
              icon: "🌍",
              message: r.value ? `No environments match '${r.value}'` : "No environments found. Create one to get started!"
            }, Wt({ _: 2 }, [
              r.value ? void 0 : {
                name: "actions",
                fn: i(() => [
                  b(ne, {
                    variant: "primary",
                    onClick: R
                  }, {
                    default: i(() => [...E[10] || (E[10] = [
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
        onClose: E[3] || (E[3] = (x) => m.value = !1)
      }, {
        content: i(() => [...E[11] || (E[11] = [
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
            onClick: E[2] || (E[2] = (x) => m.value = !1)
          }, {
            default: i(() => [...E[12] || (E[12] = [
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
        onClose: E[4] || (E[4] = (x) => w.value = null),
        onDelete: f
      }, null, 8, ["environment", "can-delete"])) : d("", !0),
      y.value ? (s(), I(Zh, {
        key: 1,
        onClose: E[5] || (E[5] = (x) => y.value = !1),
        onCreated: k
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
    return (p, g) => (s(), I(Ye, {
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
            (s(!0), o(W, null, oe(t.issues, (u, v) => (s(), o("div", {
              key: v,
              class: "issue-item"
            }, [
              e("div", d1, a(u.message), 1),
              u.details.length ? (s(), o("div", c1, [
                (s(!0), o(W, null, oe(l(v), (r, m) => (s(), o("div", {
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
                u.type === "uncommitted_workflows" ? (s(), o(W, { key: 0 }, [
                  h(" Commit your workflow changes before exporting. ")
                ], 64)) : u.type === "uncommitted_git_changes" ? (s(), o(W, { key: 1 }, [
                  h(" Commit your changes before exporting. ")
                ], 64)) : u.type === "unresolved_issues" ? (s(), o(W, { key: 2 }, [
                  h(" Resolve all workflow issues before exporting. ")
                ], 64)) : d("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: i(() => [
        b(fe, {
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
    const n = t, l = c, p = $(!1), g = $(null), u = N(() => p.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function v() {
      g.value = null, l("revalidate");
    }
    return (r, m) => (s(), o(W, null, [
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
            ])])) : (s(), o(W, { key: 1 }, [
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
                  (s(!0), o(W, null, oe(u.value, (y) => (s(), o("div", {
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
          b(fe, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (y) => r.$emit("cancel"))
          }, {
            default: i(() => [...m[7] || (m[7] = [
              h(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          b(fe, {
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
      g.value ? (s(), I(vs, {
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
    const { validateExport: c, exportEnvWithForce: n } = Fe(), l = $(""), p = $(!1), g = $(!1), u = $(!1), v = $(null), r = $(!1), m = $(null), y = $(!1), w = $(!1), _ = N(() => p.value ? "Validating..." : g.value ? "Exporting..." : "Export Environment");
    async function k() {
      p.value = !0, v.value = null;
      try {
        const E = await c();
        m.value = E, E.can_export ? E.warnings.models_without_sources.length > 0 ? w.value = !0 : await f() : y.value = !0;
      } catch (E) {
        v.value = {
          status: "error",
          message: E instanceof Error ? E.message : "Validation failed"
        };
      } finally {
        p.value = !1;
      }
    }
    async function R() {
      w.value = !1, await f();
    }
    async function A() {
      try {
        const E = await c();
        m.value = E;
      } catch (E) {
        console.error("Re-validation failed:", E);
      }
    }
    async function f() {
      g.value = !0;
      try {
        const E = await n(l.value || void 0);
        v.value = E;
      } catch (E) {
        v.value = {
          status: "error",
          message: E instanceof Error ? E.message : "Export failed"
        };
      } finally {
        g.value = !1;
      }
    }
    async function C() {
      var E;
      if ((E = v.value) != null && E.path)
        try {
          await navigator.clipboard.writeText(v.value.path);
        } catch (x) {
          console.error("Failed to copy path:", x);
        }
    }
    async function P() {
      var E;
      if ((E = v.value) != null && E.path) {
        u.value = !0;
        try {
          const x = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(v.value.path)}`);
          if (!x.ok)
            throw new Error(`Download failed: ${x.statusText}`);
          const Y = await x.blob(), F = URL.createObjectURL(Y), G = v.value.path.split("/").pop() || "environment-export.tar.gz", T = document.createElement("a");
          T.href = F, T.download = G, document.body.appendChild(T), T.click(), document.body.removeChild(T), URL.revokeObjectURL(F);
        } catch (x) {
          console.error("Failed to download:", x), alert(`Download failed: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
      }
    }
    return (E, x) => (s(), o(W, null, [
      b(Ke, null, {
        header: i(() => [
          b(Je, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (Y) => r.value = !0)
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
                    "onUpdate:modelValue": x[1] || (x[1] = (Y) => l.value = Y),
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
                    onClick: k
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
                      h(" " + a(_.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          v.value ? (s(), I(Be, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: i(() => [
              b(He, {
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
                    b(De, { label: "Saved to:" }, {
                      default: i(() => [
                        b(l1, {
                          path: v.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    v.value.models_without_sources !== void 0 ? (s(), I(De, {
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
                      onClick: P
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
                      onClick: x[2] || (x[2] = (Y) => v.value = null)
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
        onClose: x[3] || (x[3] = (Y) => r.value = !1)
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
      y.value && m.value ? (s(), I(f1, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: x[4] || (x[4] = (Y) => y.value = !1)
      }, null, 8, ["issues"])) : d("", !0),
      w.value && m.value ? (s(), I(I1, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: R,
        onCancel: x[5] || (x[5] = (Y) => w.value = !1),
        onRevalidate: A
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
          $e(v.$slots, "default", {}, () => [
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
}, B1 = { class: "drop-zone-text" }, F1 = { class: "drop-zone-primary" }, A1 = { class: "drop-zone-secondary" }, V1 = { class: "drop-zone-actions" }, W1 = {
  key: 1,
  class: "drop-zone-file"
}, G1 = { class: "file-info" }, j1 = { class: "file-details" }, q1 = { class: "file-name" }, H1 = { class: "file-size" }, K1 = /* @__PURE__ */ ee({
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
    const n = c, l = $(!1), p = $(null), g = $(0), u = N(() => p.value !== null), v = N(() => {
      var f;
      return ((f = p.value) == null ? void 0 : f.name) || "";
    }), r = N(() => {
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
    function _(f) {
      var P;
      f.stopPropagation(), g.value = 0, l.value = !1;
      const C = (P = f.dataTransfer) == null ? void 0 : P.files;
      C && C.length > 0 && R(C[0]);
    }
    function k(f) {
      f.length > 0 && R(f[0]);
    }
    function R(f) {
      p.value = f, n("fileSelected", f);
    }
    function A() {
      p.value = null, n("clear");
    }
    return (f, C) => (s(), o("div", {
      class: me(["file-drop-zone", { "drop-active": l.value, "has-file": u.value }]),
      onDragenter: ze(m, ["prevent"]),
      onDragover: ze(y, ["prevent"]),
      onDragleave: ze(w, ["prevent"]),
      onDrop: ze(_, ["prevent"])
    }, [
      u.value ? (s(), o("div", W1, [
        e("div", G1, [
          C[1] || (C[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", j1, [
            e("div", q1, a(v.value), 1),
            e("div", H1, a(r.value), 1)
          ])
        ]),
        b(ne, {
          variant: "ghost",
          size: "xs",
          onClick: A,
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
          b(U1, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "sm",
            onChange: k
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
    const c = t, n = N(() => c.workflows.length), l = N(() => c.models.length), p = N(() => c.nodes.length);
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
            (s(!0), o(W, null, oe(t.workflows.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
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
            (s(!0), o(W, null, oe(t.models.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
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
            (s(!0), o(W, null, oe(t.nodes.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
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
            t.gitBranch ? (s(), I(De, {
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
            t.gitCommit ? (s(), I(De, {
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
}, Dy = { class: "config-field" }, Ny = { class: "strategy-options" }, Uy = ["value", "checked", "onChange"], Oy = { class: "strategy-content" }, By = { class: "strategy-label" }, Fy = { class: "strategy-description" }, Ay = { class: "config-field switch-field" }, Vy = { class: "switch-label" }, Wy = ["checked"], Gy = { class: "advanced-section" }, jy = { class: "advanced-content" }, qy = { class: "config-field" }, Hy = ["value"], Ky = ["value"], Jy = /* @__PURE__ */ ee({
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
            (s(), o(W, null, oe(u, (_) => e("label", {
              key: _.value,
              class: me(["strategy-option", { active: t.modelStrategy === _.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: _.value,
                checked: t.modelStrategy === _.value,
                onChange: (k) => l("update:modelStrategy", _.value)
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
              onChange: w[0] || (w[0] = (_) => l("update:switchAfterImport", _.target.checked))
            }, null, 40, Wy),
            w[6] || (w[6] = e("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        e("details", Gy, [
          w[8] || (w[8] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", jy, [
            e("div", qy, [
              b(Jt, null, {
                default: i(() => [...w[7] || (w[7] = [
                  h("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              e("select", {
                class: "backend-select",
                value: t.torchBackend,
                onChange: w[1] || (w[1] = (_) => l("update:torchBackend", _.target.value))
              }, [
                (s(!0), o(W, null, oe(_e(fs), (_) => (s(), o("option", {
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
    var Te, ce, ve, Re;
    const l = t, p = n, { previewTarballImport: g, previewGitImport: u, validateEnvironmentName: v, executeImport: r, executeGitImport: m, getImportProgress: y } = Fe();
    let w = null;
    const _ = $(null), k = $(l.resumeImport ?? !1), R = $(!1), A = $(!1), f = $(""), C = $(!1), P = $(null), E = $(""), x = $(null), Y = $(!1), F = $(null), G = $(null), T = $({
      name: ((Te = l.initialProgress) == null ? void 0 : Te.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), M = $(null), D = $({
      message: ((ce = l.initialProgress) == null ? void 0 : ce.message) ?? "Preparing import...",
      phase: ((ve = l.initialProgress) == null ? void 0 : ve.phase) ?? "",
      progress: ((Re = l.initialProgress) == null ? void 0 : Re.progress) ?? 0,
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
      if (!G.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const ie = G.value;
      return {
        sourceEnvironment: ie.comfyui_version ? `ComfyUI ${ie.comfyui_version}` : "Unknown",
        workflows: ie.workflows.map((J) => J.name),
        models: ie.models.map((J) => ({
          filename: J.filename,
          size: 0,
          type: J.relative_path.split("/")[0] || "model"
        })),
        nodes: ie.nodes.map((J) => J.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), X = N(() => !C.value && !P.value && G.value && T.value.name.length > 0 && !M.value && (_.value || x.value));
    async function de(ie) {
      _.value = ie, C.value = !0, P.value = null, G.value = null;
      try {
        const J = await g(ie);
        G.value = J;
      } catch (J) {
        P.value = J instanceof Error ? J.message : "Failed to analyze file", console.error("Preview error:", J);
      } finally {
        C.value = !1;
      }
    }
    function K() {
      _.value = null, x.value = null, E.value = "", F.value = null, R.value = !1, A.value = !1, f.value = "", G.value = null, P.value = null, T.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, M.value = null, p("source-cleared");
    }
    function L() {
      we(), K(), k.value = !1, C.value = !1, Y.value = !1, D.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function U() {
      if (E.value.trim()) {
        Y.value = !0, F.value = null;
        try {
          const ie = await u(E.value.trim());
          x.value = E.value.trim(), G.value = ie;
        } catch (ie) {
          F.value = ie instanceof Error ? ie.message : "Failed to analyze repository";
        } finally {
          Y.value = !1;
        }
      }
    }
    function S(ie) {
      try {
        const J = new URL(ie);
        return J.host + J.pathname.replace(/\.git$/, "");
      } catch {
        return ie;
      }
    }
    async function ae(ie) {
      if (!ie) {
        M.value = "Environment name is required";
        return;
      }
      try {
        const J = await v(ie);
        M.value = J.valid ? null : J.error || "Invalid name";
      } catch {
        M.value = "Failed to validate name";
      }
    }
    async function Q() {
      if (T.value.name && !(!_.value && !x.value)) {
        k.value = !0, R.value = !1, D.value = { message: `Creating environment '${T.value.name}'...`, phase: "", progress: 0, error: null }, p("import-started");
        try {
          let ie;
          if (_.value)
            ie = await r(
              _.value,
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
          ie.status === "started" ? Me() : (A.value = !1, f.value = ie.message, k.value = !1, R.value = !0);
        } catch (ie) {
          A.value = !1, f.value = ie instanceof Error ? ie.message : "Unknown error occurred during import", k.value = !1, R.value = !0;
        }
      }
    }
    async function Me() {
      if (w) return;
      const ie = async () => {
        try {
          const Se = await y();
          return D.value = {
            message: Se.message,
            phase: Se.phase || "",
            progress: Se.progress ?? (Se.state === "importing" ? 50 : 0),
            error: Se.error || null
          }, Se.state === "complete" ? (we(), A.value = !0, f.value = `Environment '${Se.environment_name}' created successfully`, k.value = !1, R.value = !0, Se.environment_name && p("import-complete", Se.environment_name, T.value.switchAfterImport), !1) : Se.state === "error" ? (we(), A.value = !1, f.value = Se.error || Se.message, k.value = !1, R.value = !0, !1) : !0;
        } catch (Se) {
          return console.error("Failed to poll import progress:", Se), !0;
        }
      };
      await ie() && (w = setInterval(async () => {
        await ie() || we();
      }, 2e3));
    }
    function we() {
      w && (clearInterval(w), w = null);
    }
    function Oe(ie) {
      return ie < 1024 ? `${ie} B` : ie < 1024 * 1024 ? `${(ie / 1024).toFixed(1)} KB` : ie < 1024 * 1024 * 1024 ? `${(ie / (1024 * 1024)).toFixed(1)} MB` : `${(ie / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Ne(async () => {
      try {
        const ie = await y();
        console.log("[ComfyGit ImportFlow] Import progress check:", ie.state, ie), ie.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", ie.environment_name), k.value = !0, T.value.name = ie.environment_name || T.value.name || "", D.value = {
          progress: ie.progress ?? 0,
          message: ie.message || "Importing...",
          phase: ie.phase || "",
          error: null
        }, Me());
      } catch (ie) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", ie);
      }
    }), c({
      handleReset: L,
      isImporting: k,
      canImport: X
    }), (ie, J) => {
      var Se;
      return s(), o("div", Xy, [
        !_.value && !x.value && !k.value ? (s(), o("div", Qy, [
          b(J1, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: de
          }),
          J[7] || (J[7] = e("div", { class: "import-divider" }, [
            e("span", null, "or")
          ], -1)),
          e("div", Zy, [
            J[5] || (J[5] = e("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            e("div", e0, [
              Ue(e("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": J[0] || (J[0] = (be) => E.value = be),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: ht(U, ["enter"]),
                disabled: Y.value
              }, null, 40, t0), [
                [Tt, E.value]
              ]),
              b(ne, {
                variant: "primary",
                size: "sm",
                disabled: !E.value.trim() || Y.value,
                onClick: U
              }, {
                default: i(() => [
                  h(a(Y.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            F.value ? (s(), o("div", s0, a(F.value), 1)) : d("", !0),
            J[6] || (J[6] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (_.value || x.value) && !k.value && !R.value ? (s(), o("div", o0, [
          e("div", n0, [
            _.value ? (s(), o("div", a0, [
              J[8] || (J[8] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", l0, [
                e("div", i0, a(_.value.name), 1),
                e("div", r0, a(Oe(_.value.size)), 1)
              ])
            ])) : x.value ? (s(), o("div", d0, [
              J[10] || (J[10] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
              e("div", c0, [
                e("div", u0, a(S(x.value)), 1),
                J[9] || (J[9] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : d("", !0),
            b(ne, {
              variant: "ghost",
              size: "sm",
              onClick: K
            }, {
              default: i(() => [...J[11] || (J[11] = [
                h(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          C.value ? (s(), o("div", m0, [...J[12] || (J[12] = [
            e("div", { class: "loading-spinner" }, null, -1),
            e("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : P.value ? (s(), I(nt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [P.value]
          }, null, 8, ["details"])) : G.value ? (s(), I(Sy, {
            key: 2,
            "source-environment": se.value.sourceEnvironment,
            workflows: se.value.workflows,
            models: se.value.models,
            nodes: se.value.nodes,
            "git-branch": se.value.gitBranch,
            "git-commit": se.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : d("", !0),
          G.value ? (s(), I(Yy, {
            key: 3,
            name: T.value.name,
            "onUpdate:name": J[1] || (J[1] = (be) => T.value.name = be),
            "model-strategy": T.value.modelStrategy,
            "onUpdate:modelStrategy": J[2] || (J[2] = (be) => T.value.modelStrategy = be),
            "torch-backend": T.value.torchBackend,
            "onUpdate:torchBackend": J[3] || (J[3] = (be) => T.value.torchBackend = be),
            "switch-after-import": T.value.switchAfterImport,
            "onUpdate:switchAfterImport": J[4] || (J[4] = (be) => T.value.switchAfterImport = be),
            "name-error": M.value,
            onValidateName: ae
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : d("", !0),
          T.value.modelStrategy === "skip" && ((Se = G.value) != null && Se.models_needing_download) ? (s(), I(nt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${G.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : d("", !0),
          e("div", v0, [
            b(ne, {
              variant: "secondary",
              size: "md",
              onClick: K
            }, {
              default: i(() => [...J[13] || (J[13] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(ne, {
              variant: "primary",
              size: "md",
              disabled: !X.value,
              onClick: Q
            }, {
              default: i(() => [...J[14] || (J[14] = [
                h(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : k.value ? (s(), o("div", f0, [
          e("p", g0, [
            J[15] || (J[15] = h(" Importing environment ", -1)),
            e("strong", null, a(T.value.name), 1),
            J[16] || (J[16] = h("... ", -1))
          ]),
          b(es, {
            progress: D.value.progress,
            message: D.value.message,
            "current-phase": D.value.phase,
            variant: D.value.error ? "error" : "default",
            "show-steps": !0,
            steps: le
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          D.value.error ? d("", !0) : (s(), o("p", p0, " This may take several minutes. Please wait... ")),
          D.value.error ? (s(), o("div", h0, [
            e("p", y0, a(D.value.error), 1)
          ])) : d("", !0)
        ])) : R.value ? (s(), o("div", w0, [
          e("div", {
            class: me(["complete-icon", A.value ? "success" : "error"])
          }, a(A.value ? "✓" : "✕"), 3),
          e("div", k0, [
            e("div", b0, a(A.value ? "Import Successful" : "Import Failed"), 1),
            e("div", _0, a(f.value), 1)
          ]),
          e("div", $0, [
            b(ne, {
              variant: "primary",
              size: "md",
              onClick: L
            }, {
              default: i(() => [...J[17] || (J[17] = [
                h(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), qs = /* @__PURE__ */ te(C0, [["__scopeId", "data-v-72cbc04e"]]), x0 = /* @__PURE__ */ ee({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(t, { emit: c }) {
    const n = c, l = $(!1);
    function p(g, u) {
      u && n("import-complete-switch", g);
    }
    return (g, u) => (s(), o(W, null, [
      b(Ke, null, {
        header: i(() => [
          b(Je, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: u[0] || (u[0] = (v) => l.value = !0)
          })
        ]),
        content: i(() => [
          b(qs, { onImportComplete: p })
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
    const c = t, { getCommitDetail: n } = Fe(), l = $(null), p = $(!0), g = N(() => {
      if (!l.value) return !1;
      const v = l.value.changes.workflows;
      return v.added.length > 0 || v.modified.length > 0 || v.deleted.length > 0;
    }), u = N(() => {
      if (!l.value) return !1;
      const v = l.value.changes.nodes;
      return v.added.length > 0 || v.removed.length > 0;
    });
    return Ne(async () => {
      try {
        l.value = await n(c.commit.hash);
      } finally {
        p.value = !1;
      }
    }), (v, r) => (s(), I(Ye, {
      size: "md",
      "show-close-button": !1,
      onClose: r[3] || (r[3] = (m) => v.$emit("close"))
    }, {
      header: i(() => {
        var m, y, w, _;
        return [
          e("div", I0, [
            r[4] || (r[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", E0, a(((m = l.value) == null ? void 0 : m.short_hash) || t.commit.short_hash || ((y = t.commit.hash) == null ? void 0 : y.slice(0, 7))), 1),
            (_ = (w = l.value) == null ? void 0 : w.refs) != null && _.length ? (s(), o("span", M0, [
              (s(!0), o(W, null, oe(l.value.refs, (k) => (s(), o("span", {
                key: k,
                class: "ref-badge"
              }, a(k), 1))), 128))
            ])) : d("", !0)
          ]),
          b(fe, {
            variant: "ghost",
            size: "sm",
            onClick: r[0] || (r[0] = (k) => v.$emit("close"))
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
              b(Ft, { variant: "section" }, {
                default: i(() => [...r[6] || (r[6] = [
                  h("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(W, null, oe(l.value.changes.workflows.added, (w) => (s(), o("div", {
                key: "add-" + w,
                class: "change-item added"
              }, [
                r[7] || (r[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(w), 1)
              ]))), 128)),
              (s(!0), o(W, null, oe(l.value.changes.workflows.modified, (w) => (s(), o("div", {
                key: "mod-" + w,
                class: "change-item modified"
              }, [
                r[8] || (r[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(w), 1)
              ]))), 128)),
              (s(!0), o(W, null, oe(l.value.changes.workflows.deleted, (w) => (s(), o("div", {
                key: "del-" + w,
                class: "change-item deleted"
              }, [
                r[9] || (r[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(w), 1)
              ]))), 128))
            ])) : d("", !0),
            u.value ? (s(), o("div", B0, [
              b(Ft, { variant: "section" }, {
                default: i(() => [...r[10] || (r[10] = [
                  h("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(W, null, oe(l.value.changes.nodes.added, (w) => (s(), o("div", {
                key: "add-" + w.name,
                class: "change-item added"
              }, [
                r[11] || (r[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(w.name), 1),
                w.version ? (s(), o("span", F0, "(" + a(w.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (s(!0), o(W, null, oe(l.value.changes.nodes.removed, (w) => (s(), o("div", {
                key: "rem-" + w.name,
                class: "change-item deleted"
              }, [
                r[12] || (r[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(w.name), 1)
              ]))), 128))
            ])) : d("", !0),
            l.value.changes.models.resolved > 0 ? (s(), o("div", A0, [
              b(Ft, { variant: "section" }, {
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
        b(fe, {
          variant: "secondary",
          onClick: r[1] || (r[1] = (m) => v.$emit("createBranch", t.commit))
        }, {
          default: i(() => [...r[15] || (r[15] = [
            h(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        b(fe, {
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
}), G0 = /* @__PURE__ */ te(W0, [["__scopeId", "data-v-d256ff6d"]]), j0 = { class: "base-textarea-wrapper" }, q0 = ["value", "rows", "placeholder", "disabled", "maxlength"], H0 = {
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
      }, null, 40, q0),
      t.showCharCount && t.maxLength ? (s(), o("div", H0, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : d("", !0)
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
        $e(c.$slots, "default", {}, void 0, !0)
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
    const n = t, l = c, { commit: p } = Fe(), g = $(""), u = $(!1), v = $(!1), r = $(null), m = N(() => {
      if (!n.status) return !1;
      const A = n.status.workflows;
      return A.new.length > 0 || A.modified.length > 0 || A.deleted.length > 0 || n.status.has_changes;
    }), y = N(() => {
      if (!n.status) return !1;
      const A = n.status.workflows, f = n.status.git_changes;
      return A.new.length > 0 || A.modified.length > 0 || A.deleted.length > 0 || f.nodes_added.length > 0 || f.nodes_removed.length > 0;
    }), w = N(() => {
      var A;
      return (A = n.status) != null && A.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (f) => f.has_issues && (f.sync_state === "new" || f.sync_state === "modified")
      ) : [];
    }), _ = N(() => w.value.length > 0), k = N(() => _.value && !v.value);
    async function R() {
      var A, f, C;
      if (!(_.value && !v.value) && !(!m.value || !g.value.trim() || u.value)) {
        u.value = !0, r.value = null;
        try {
          const P = await p(g.value.trim(), v.value);
          P.status === "success" ? (r.value = {
            type: "success",
            message: `Committed: ${((A = P.summary) == null ? void 0 : A.new) || 0} new, ${((f = P.summary) == null ? void 0 : f.modified) || 0} modified, ${((C = P.summary) == null ? void 0 : C.deleted) || 0} deleted`
          }, g.value = "", v.value = !1, setTimeout(() => l("committed"), 1e3)) : P.status === "no_changes" ? r.value = { type: "error", message: "No changes to commit" } : P.status === "blocked" ? r.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : r.value = { type: "error", message: P.message || "Commit failed" };
        } catch (P) {
          r.value = { type: "error", message: P instanceof Error ? P.message : "Commit failed" };
        } finally {
          u.value = !1;
        }
      }
    }
    return (A, f) => t.asModal ? (s(), I(Ve, {
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
            _.value ? (s(), o("div", uw, [
              e("div", mw, [
                f[18] || (f[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", vw, a(w.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", fw, [
                (s(!0), o(W, null, oe(w.value, (C) => (s(), o("div", {
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
            b(fe, {
              variant: "secondary",
              onClick: f[3] || (f[3] = (C) => l("close"))
            }, {
              default: i(() => [...f[20] || (f[20] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(fe, {
              variant: v.value ? "danger" : "primary",
              disabled: !m.value || !g.value.trim() || u.value || k.value,
              loading: u.value,
              onClick: R
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
        _.value ? (s(), o("div", Mw, [
          e("div", Tw, [
            f[29] || (f[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", Rw, a(w.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", zw, [
            (s(!0), o(W, null, oe(w.value, (C) => (s(), o("div", {
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
        b(fe, {
          variant: "secondary",
          onClick: f[9] || (f[9] = (C) => l("close"))
        }, {
          default: i(() => [...f[31] || (f[31] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b(fe, {
          variant: v.value ? "danger" : "primary",
          disabled: !m.value || !g.value.trim() || u.value || k.value,
          loading: u.value,
          onClick: R
        }, {
          default: i(() => [
            h(a(u.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Hs = /* @__PURE__ */ te(Dw, [["__scopeId", "data-v-aa2a9bdf"]]), Nw = { class: "modal-header" }, Uw = { class: "modal-body" }, Ow = { class: "switch-message" }, Bw = { class: "switch-details" }, Fw = { class: "modal-actions" }, Aw = /* @__PURE__ */ ee({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), I(Ve, { to: "body" }, [
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
          e("div", Fw, [
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
}), Vw = /* @__PURE__ */ te(Aw, [["__scopeId", "data-v-e9c5253e"]]), Ww = {
  key: 0,
  class: "modal-overlay"
}, Gw = { class: "modal-content" }, jw = { class: "modal-body" }, qw = { class: "progress-info" }, Hw = { class: "progress-percentage" }, Kw = { class: "progress-state" }, Jw = { class: "switch-steps" }, Yw = { class: "step-icon" }, Xw = { class: "step-label" }, Qw = /* @__PURE__ */ ee({
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
    }), l = N(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), p = N(() => {
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
    return (g, u) => (s(), I(Ve, { to: "body" }, [
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
            e("div", qw, [
              e("div", Hw, a(t.progress) + "%", 1),
              e("div", Kw, a(n.value), 1)
            ]),
            e("div", Jw, [
              (s(!0), o(W, null, oe(p.value, (v) => (s(), o("div", {
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
    return (c, n) => (s(), I(Ve, { to: "body" }, [
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
                (s(!0), o(W, null, oe(t.mismatchDetails.missing_nodes, (l) => (s(), o("div", {
                  key: l,
                  class: "node-item add"
                }, " + " + a(l), 1))), 128))
              ])
            ])) : d("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", nk, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", ak, [
                (s(!0), o(W, null, oe(t.mismatchDetails.extra_nodes, (l) => (s(), o("div", {
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
    return (g, u) => (s(), I(Ye, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: u[1] || (u[1] = (v) => g.$emit("close"))
    }, {
      body: i(() => [
        b(As, {
          ref_key: "contentRef",
          ref: n,
          "workspace-path": t.workspacePath,
          onSaved: p
        }, null, 8, ["workspace-path"])
      ]),
      footer: i(() => {
        var v;
        return [
          b(fe, {
            variant: "primary",
            disabled: !((v = n.value) != null && v.hasChanges),
            onClick: l
          }, {
            default: i(() => [...u[2] || (u[2] = [
              h(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(fe, {
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
}, zk = { class: "form-field" }, Lk = { class: "form-field" }, Pk = ["value"], Dk = { class: "form-field" }, Nk = ["disabled"], Uk = ["value"], Ok = { class: "form-field" }, Bk = ["value"], Fk = { class: "form-field form-field--checkbox" }, Ak = { class: "form-checkbox" }, Vk = {
  key: 0,
  class: "form-error"
}, Wk = {
  key: 1,
  class: "env-creating"
}, Gk = { class: "creating-intro" }, jk = {
  key: 3,
  class: "env-import"
}, Et = 10, qk = 600 * 1e3, Ms = 1800 * 1e3, Hk = /* @__PURE__ */ ee({
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
    } = Fe(), w = $(n.initialStep || 1), _ = $(null), k = $("landing"), R = $(!1), A = $(!1), f = $(!1), C = $(null), P = $(n.initialStep === 2), E = $(n.defaultPath), x = $(!!n.detectedModelsDir), Y = $(n.detectedModelsDir || ""), F = $(null), G = $(null), T = $(null), M = $(null), D = $("my-new-env"), le = $(Ws), se = $("latest"), X = $(Gs), de = $(!0), K = $(null), L = $(null), U = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), S = $(!1), ae = $(!1), Q = $(!1), Me = $({ progress: 0, message: "" }), we = $({ progress: 0, message: "" }), Oe = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], Te = $(0), ce = $(null), ve = $(0), Re = $(null), ie = N(() => {
      var O, B;
      const re = (O = E.value) == null ? void 0 : O.trim(), q = !F.value, Ee = !x.value || !G.value && ((B = Y.value) == null ? void 0 : B.trim());
      return re && q && Ee;
    }), J = N(() => {
      var re;
      return (re = D.value) == null ? void 0 : re.trim();
    }), Se = N(() => !!(w.value === 2 || L.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), be = N(() => L.value || n.workspacePath || null);
    async function st() {
      var re;
      if (F.value = null, !!((re = E.value) != null && re.trim()))
        try {
          const q = await u({ path: E.value, type: "workspace" });
          q.valid || (F.value = q.error || "Invalid path");
        } catch (q) {
          F.value = q instanceof Error ? q.message : "Validation failed";
        }
    }
    async function rt() {
      var re;
      if (G.value = null, T.value = null, M.value = null, !!((re = Y.value) != null && re.trim()))
        try {
          const q = await u({ path: Y.value, type: "models" });
          if (q.valid)
            M.value = q.model_count ?? null;
          else if (G.value = q.error || "Invalid path", q.suggestion) {
            T.value = q.suggestion, Y.value = q.suggestion, G.value = null;
            const Ee = await u({ path: q.suggestion, type: "models" });
            Ee.valid && (M.value = Ee.model_count ?? null);
          }
        } catch (q) {
          G.value = q instanceof Error ? q.message : "Validation failed";
        }
    }
    async function vt() {
      var re, q, Ee, O, B;
      if (F.value = null, G.value = null, await st(), (re = F.value) != null && re.includes("already exists")) {
        F.value = null, L.value = ((q = E.value) == null ? void 0 : q.trim()) || n.defaultPath, w.value = 2, Ge();
        return;
      }
      if (!F.value && !(x.value && ((Ee = Y.value) != null && Ee.trim()) && (await rt(), G.value))) {
        ae.value = !0;
        try {
          await p({
            workspace_path: ((O = E.value) == null ? void 0 : O.trim()) || n.defaultPath,
            models_directory: x.value && ((B = Y.value) == null ? void 0 : B.trim()) || null
          }), Te.value = 0, ce.value = Date.now();
          const V = setInterval(async () => {
            var Z;
            if (ce.value && Date.now() - ce.value > qk) {
              clearInterval(V), ae.value = !1, F.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const pe = await g();
              if (Te.value = 0, pe.state === "idle" && ae.value) {
                clearInterval(V), ae.value = !1, F.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Me.value = { progress: pe.progress, message: pe.message }, pe.state === "complete" ? (clearInterval(V), ae.value = !1, L.value = ((Z = E.value) == null ? void 0 : Z.trim()) || n.defaultPath, w.value = 2, Ge()) : pe.state === "error" && (clearInterval(V), ae.value = !1, F.value = pe.error || "Workspace creation failed");
            } catch (pe) {
              Te.value++, console.warn(`Polling failure ${Te.value}/${Et}:`, pe), Te.value >= Et && (clearInterval(V), ae.value = !1, F.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (V) {
          ae.value = !1, F.value = V instanceof Error ? V.message : "Failed to create workspace";
        }
      }
    }
    async function xe() {
      Q.value = !0, K.value = null;
      try {
        const re = {
          name: D.value.trim() || "my-new-env",
          python_version: le.value,
          comfyui_version: se.value,
          torch_backend: X.value,
          switch_after: de.value,
          workspace_path: L.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await v(re)).status === "started") {
          ve.value = 0, Re.value = Date.now();
          const Ee = setInterval(async () => {
            if (Re.value && Date.now() - Re.value > Ms) {
              clearInterval(Ee), Q.value = !1, K.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const O = await r();
              if (ve.value = 0, O.state === "idle" && Q.value) {
                clearInterval(Ee), Q.value = !1, K.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (we.value = {
                progress: O.progress ?? 0,
                message: O.message,
                phase: O.phase
              }, O.state === "complete") {
                clearInterval(Ee), Q.value = !1;
                const B = O.environment_name || re.name;
                de.value ? l("complete", B, L.value) : (k.value = "landing", l("environment-created-no-switch", B));
              } else O.state === "error" && (clearInterval(Ee), Q.value = !1, K.value = O.error || "Environment creation failed");
            } catch (O) {
              ve.value++, console.warn(`Polling failure ${ve.value}/${Et}:`, O), ve.value >= Et && (clearInterval(Ee), Q.value = !1, K.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (re) {
        Q.value = !1, K.value = re instanceof Error ? re.message : "Unknown error";
      }
    }
    async function Ge() {
      S.value = !0;
      try {
        U.value = await y();
      } catch (re) {
        console.error("Failed to load ComfyUI releases:", re);
      } finally {
        S.value = !1;
      }
    }
    function Xe() {
      _.value && l("switch-environment", _.value, L.value);
    }
    function je() {
      k.value === "create" || k.value === "import" ? k.value = "landing" : w.value === 2 && n.setupState === "no_workspace" && (w.value = 1);
    }
    function ft(re, q) {
      A.value = !1, q ? l("complete", re, L.value) : (l("environment-created-no-switch", re), k.value = "landing");
    }
    function ke() {
    }
    Ne(async () => {
      if (n.detectedModelsDir && (Y.value = n.detectedModelsDir), n.workspacePath && (L.value = n.workspacePath), w.value === 2) {
        Ge();
        const re = setTimeout(() => {
          P.value = !1;
        }, 3e3);
        await Ae(), clearTimeout(re), P.value = !1;
      }
    });
    async function Ae() {
      try {
        const re = await r();
        if (console.log("[ComfyGit] Create progress check:", re.state, re), re.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", re.environment_name), k.value = "create", Q.value = !0, D.value = re.environment_name || "my-new-env", we.value = {
            progress: re.progress ?? 0,
            message: re.message,
            phase: re.phase
          }, dt();
          return;
        }
      } catch (re) {
        console.log("[ComfyGit] Create progress check failed:", re);
      }
      try {
        const re = await m();
        console.log("[ComfyGit] Import progress check:", re.state, re), re.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", re.environment_name), C.value = {
          message: re.message || "Importing...",
          phase: re.phase || "",
          progress: re.progress ?? 0,
          environmentName: re.environment_name || ""
        }, f.value = !0, k.value = "import", A.value = !0);
      } catch (re) {
        console.log("[ComfyGit] Import progress check failed:", re);
      }
    }
    async function dt() {
      ve.value = 0, Re.value = Date.now();
      let re = null;
      const q = async () => {
        if (Re.value && Date.now() - Re.value > Ms)
          return re && clearInterval(re), Q.value = !1, K.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const O = await r();
          if (ve.value = 0, O.state === "idle" && Q.value)
            return re && clearInterval(re), Q.value = !1, K.value = "Environment creation was interrupted. Please try again.", !1;
          if (we.value = {
            progress: O.progress ?? 0,
            message: O.message,
            phase: O.phase
          }, O.state === "complete") {
            re && clearInterval(re), Q.value = !1;
            const B = O.environment_name || D.value;
            return l("complete", B, L.value), !1;
          } else if (O.state === "error")
            return re && clearInterval(re), Q.value = !1, K.value = O.error || "Environment creation failed", !1;
          return !0;
        } catch (O) {
          return ve.value++, console.warn(`Polling failure ${ve.value}/${Et}:`, O), ve.value >= Et ? (re && clearInterval(re), Q.value = !1, K.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await q() && (re = setInterval(async () => {
        !await q() && re && clearInterval(re);
      }, 2e3));
    }
    return (re, q) => (s(), o(W, null, [
      b(Ye, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: q[14] || (q[14] = (Ee) => re.$emit("close"))
      }, {
        header: i(() => [
          q[18] || (q[18] = e("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          e("div", uk, [
            Se.value ? (s(), o("button", {
              key: 0,
              class: "settings-btn",
              title: "Workspace Settings",
              onClick: q[0] || (q[0] = (Ee) => R.value = !0)
            }, [...q[16] || (q[16] = [
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
              onClick: q[1] || (q[1] = (Ee) => re.$emit("close"))
            }, [...q[17] || (q[17] = [
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
          var Ee;
          return [
            w.value === 1 ? (s(), o("div", mk, [
              q[22] || (q[22] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              e("div", vk, [
                q[19] || (q[19] = e("label", { class: "form-label" }, "Workspace Path", -1)),
                Ue(e("input", {
                  "onUpdate:modelValue": q[2] || (q[2] = (O) => E.value = O),
                  type: "text",
                  class: "form-input",
                  placeholder: t.defaultPath
                }, null, 8, fk), [
                  [Tt, E.value]
                ]),
                F.value ? (s(), o("p", gk, a(F.value), 1)) : d("", !0)
              ]),
              e("div", pk, [
                e("label", hk, [
                  Ue(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": q[3] || (q[3] = (O) => x.value = O)
                  }, null, 512), [
                    [Xt, x.value]
                  ]),
                  q[20] || (q[20] = e("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              x.value ? (s(), o("div", yk, [
                q[21] || (q[21] = e("label", { class: "form-label" }, "Models Directory", -1)),
                Ue(e("input", {
                  "onUpdate:modelValue": q[4] || (q[4] = (O) => Y.value = O),
                  type: "text",
                  class: "form-input",
                  placeholder: t.detectedModelsDir || "/path/to/models"
                }, null, 8, wk), [
                  [Tt, Y.value]
                ]),
                t.detectedModelsDir && !Y.value ? (s(), o("p", kk, " Detected: " + a(t.detectedModelsDir), 1)) : d("", !0),
                T.value ? (s(), o("p", bk, " Did you mean: " + a(T.value), 1)) : d("", !0),
                G.value ? (s(), o("p", _k, a(G.value), 1)) : d("", !0),
                M.value !== null && !G.value ? (s(), o("p", $k, " Found " + a(M.value) + " model files ", 1)) : d("", !0)
              ])) : d("", !0),
              ae.value ? (s(), I(es, {
                key: 1,
                progress: Me.value.progress,
                message: Me.value.message
              }, null, 8, ["progress", "message"])) : d("", !0)
            ])) : d("", !0),
            w.value === 2 ? (s(), o("div", Ck, [
              P.value ? (s(), o("div", xk, [...q[23] || (q[23] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (s(), o(W, { key: 1 }, [
                n.cliInstalled ? d("", !0) : (s(), o("div", Sk, [...q[24] || (q[24] = [
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
                k.value === "landing" ? (s(), o("div", Ik, [
                  q[28] || (q[28] = e("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  e("button", {
                    class: "landing-option",
                    onClick: q[5] || (q[5] = (O) => k.value = "create")
                  }, [...q[25] || (q[25] = [
                    e("span", { class: "option-icon" }, "➕", -1),
                    e("div", { class: "option-content" }, [
                      e("span", { class: "option-title" }, "Create New Environment"),
                      e("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    e("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  e("button", {
                    class: "landing-option",
                    onClick: q[6] || (q[6] = (O) => {
                      f.value = !1, k.value = "import";
                    })
                  }, [...q[26] || (q[26] = [
                    e("span", { class: "option-icon" }, "📦", -1),
                    e("div", { class: "option-content" }, [
                      e("span", { class: "option-title" }, "Import Environment"),
                      e("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    e("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Ee = n.existingEnvironments) != null && Ee.length ? (s(), o(W, { key: 0 }, [
                    q[27] || (q[27] = e("div", { class: "landing-divider" }, [
                      e("span", null, "or switch to existing")
                    ], -1)),
                    e("div", Ek, [
                      (s(!0), o(W, null, oe(n.existingEnvironments, (O) => (s(), o("label", {
                        key: O,
                        class: me(["env-option", { selected: _.value === O }])
                      }, [
                        Ue(e("input", {
                          type: "radio",
                          name: "env-select",
                          value: O,
                          "onUpdate:modelValue": q[7] || (q[7] = (B) => _.value = B)
                        }, null, 8, Mk), [
                          [Kt, _.value]
                        ]),
                        e("span", Tk, a(O), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : d("", !0)
                ])) : k.value === "create" ? (s(), o("div", Rk, [
                  Q.value ? (s(), o("div", Wk, [
                    e("p", Gk, [
                      q[35] || (q[35] = h(" Creating environment ", -1)),
                      e("strong", null, a(D.value), 1),
                      q[36] || (q[36] = h("... ", -1))
                    ]),
                    b(es, {
                      progress: we.value.progress,
                      message: we.value.message,
                      "current-phase": we.value.phase,
                      "show-steps": !0,
                      steps: Oe
                    }, null, 8, ["progress", "message", "current-phase"]),
                    q[37] || (q[37] = e("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (s(), o(W, { key: 0 }, [
                    q[34] || (q[34] = e("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    e("div", zk, [
                      q[29] || (q[29] = e("label", { class: "form-label" }, "Environment Name", -1)),
                      Ue(e("input", {
                        "onUpdate:modelValue": q[8] || (q[8] = (O) => D.value = O),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Tt, D.value]
                      ])
                    ]),
                    e("div", Lk, [
                      q[30] || (q[30] = e("label", { class: "form-label" }, "Python Version", -1)),
                      Ue(e("select", {
                        "onUpdate:modelValue": q[9] || (q[9] = (O) => le.value = O),
                        class: "form-select"
                      }, [
                        (s(!0), o(W, null, oe(_e(Vs), (O) => (s(), o("option", {
                          key: O,
                          value: O
                        }, a(O), 9, Pk))), 128))
                      ], 512), [
                        [Rt, le.value]
                      ])
                    ]),
                    e("div", Dk, [
                      q[31] || (q[31] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Ue(e("select", {
                        "onUpdate:modelValue": q[10] || (q[10] = (O) => se.value = O),
                        class: "form-select",
                        disabled: S.value
                      }, [
                        (s(!0), o(W, null, oe(U.value, (O) => (s(), o("option", {
                          key: O.tag_name,
                          value: O.tag_name
                        }, a(O.name), 9, Uk))), 128))
                      ], 8, Nk), [
                        [Rt, se.value]
                      ])
                    ]),
                    e("div", Ok, [
                      q[32] || (q[32] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Ue(e("select", {
                        "onUpdate:modelValue": q[11] || (q[11] = (O) => X.value = O),
                        class: "form-select"
                      }, [
                        (s(!0), o(W, null, oe(_e(fs), (O) => (s(), o("option", {
                          key: O,
                          value: O
                        }, a(O) + a(O === "auto" ? " (detect GPU)" : ""), 9, Bk))), 128))
                      ], 512), [
                        [Rt, X.value]
                      ])
                    ]),
                    e("div", Fk, [
                      e("label", Ak, [
                        Ue(e("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": q[12] || (q[12] = (O) => de.value = O)
                        }, null, 512), [
                          [Xt, de.value]
                        ]),
                        q[33] || (q[33] = e("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    K.value ? (s(), o("div", Vk, a(K.value), 1)) : d("", !0)
                  ], 64))
                ])) : k.value === "import" ? (s(), o("div", jk, [
                  b(qs, {
                    "workspace-path": L.value,
                    "resume-import": f.value,
                    "initial-progress": C.value ?? void 0,
                    onImportComplete: ft,
                    onImportStarted: q[13] || (q[13] = (O) => A.value = !0),
                    onSourceCleared: ke
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : d("", !0)
              ], 64))
            ])) : d("", !0)
          ];
        }),
        footer: i(() => [
          w.value === 1 ? (s(), I(fe, {
            key: 0,
            variant: "primary",
            disabled: !ie.value || ae.value,
            onClick: vt
          }, {
            default: i(() => [
              h(a(ae.value ? "Creating..." : "Next"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : w.value === 2 ? (s(), o(W, { key: 1 }, [
            !Q.value && !A.value && (k.value !== "landing" || n.setupState === "no_workspace" && !L.value) ? (s(), I(fe, {
              key: 0,
              variant: "secondary",
              onClick: je
            }, {
              default: i(() => [...q[38] || (q[38] = [
                h(" Back ", -1)
              ])]),
              _: 1
            })) : d("", !0),
            k.value === "create" ? (s(), I(fe, {
              key: 1,
              variant: "primary",
              disabled: !J.value || Q.value,
              onClick: xe
            }, {
              default: i(() => [
                h(a(Q.value ? "Creating..." : de.value ? "Create & Switch" : "Create Environment"), 1)
              ]),
              _: 1
            }, 8, ["disabled"])) : d("", !0),
            k.value === "landing" && _.value ? (s(), I(fe, {
              key: 2,
              variant: "primary",
              onClick: Xe
            }, {
              default: i(() => [
                h(" Switch to " + a(_.value), 1)
              ]),
              _: 1
            })) : d("", !0)
          ], 64)) : d("", !0)
        ]),
        _: 1
      }),
      R.value ? (s(), I(ck, {
        key: 0,
        "workspace-path": be.value,
        onClose: q[15] || (q[15] = (Ee) => R.value = !1)
      }, null, 8, ["workspace-path"])) : d("", !0)
    ], 64));
  }
}), Kk = /* @__PURE__ */ te(Hk, [["__scopeId", "data-v-42e708ad"]]), Jk = { class: "comfygit-panel" }, Yk = { class: "panel-header" }, Xk = { class: "header-left" }, Qk = {
  key: 0,
  class: "header-info"
}, Zk = { class: "header-actions" }, eb = { class: "env-switcher" }, tb = {
  key: 0,
  class: "header-info"
}, sb = { class: "branch-name" }, ob = { class: "panel-main" }, nb = { class: "sidebar" }, ab = { class: "sidebar-content" }, lb = { class: "sidebar-section" }, ib = { class: "sidebar-section" }, rb = { class: "sidebar-section" }, db = { class: "content-area" }, cb = {
  key: 0,
  class: "error-message"
}, ub = {
  key: 1,
  class: "loading"
}, mb = { class: "dialog-content env-selector-dialog" }, vb = { class: "dialog-header" }, fb = { class: "dialog-body" }, gb = { class: "env-list" }, pb = { class: "env-info" }, hb = { class: "env-name-row" }, yb = { class: "env-indicator" }, wb = { class: "env-name" }, kb = {
  key: 0,
  class: "env-branch"
}, bb = {
  key: 1,
  class: "current-label"
}, _b = { class: "env-stats" }, $b = ["onClick"], Cb = { class: "toast-container" }, xb = { class: "toast-message" }, Sb = /* @__PURE__ */ ee({
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
      switchEnvironment: _,
      getSwitchProgress: k,
      deleteEnvironment: R,
      syncEnvironmentManually: A,
      repairWorkflowModels: f,
      getSetupStatus: C
    } = Fe(), P = Ds();
    function E(j) {
      window.open(j, "_blank", "noopener,noreferrer");
    }
    const x = $(null), Y = $([]), F = $([]), G = $([]), T = N(() => G.value.find((j) => j.is_current)), M = $(null), D = $(!1), le = $(1), se = N(() => {
      var j;
      return ((j = M.value) == null ? void 0 : j.state) || "managed";
    }), X = $(!1), de = $(null), K = $(null), L = $(!1), U = $(null), S = $(null), ae = $(null), Q = $(!1), Me = $(!1), we = $(""), Oe = $(null), Te = $({ state: "idle", progress: 0, message: "" });
    let ce = null, ve = null;
    const Re = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, ie = n.initialView ? Re[n.initialView] : null, J = $((ie == null ? void 0 : ie.view) ?? "status"), Se = $((ie == null ? void 0 : ie.section) ?? "this-env");
    function be(j, z) {
      J.value = j, Se.value = z;
    }
    function st(j) {
      const ge = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[j];
      ge && be(ge.view, ge.section);
    }
    function rt() {
      be("branches", "this-env");
    }
    function vt() {
      l("close"), setTimeout(() => {
        var z;
        const j = document.querySelectorAll("button.comfyui-button");
        for (const ge of j)
          if (((z = ge.textContent) == null ? void 0 : z.trim()) === "Manager") {
            ge.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const xe = $(null), Ge = $(!1), Xe = $(!1), je = $([]);
    let ft = 0;
    function ke(j, z = "info", ge = 3e3) {
      const Ce = ++ft;
      return je.value.push({ id: Ce, message: j, type: z }), ge > 0 && setTimeout(() => {
        je.value = je.value.filter((Pe) => Pe.id !== Ce);
      }, ge), Ce;
    }
    function Ae(j) {
      je.value = je.value.filter((z) => z.id !== j);
    }
    function dt(j, z) {
      ke(j, z);
    }
    const re = N(() => {
      if (!x.value) return "neutral";
      const j = x.value.workflows, z = j.new.length > 0 || j.modified.length > 0 || j.deleted.length > 0 || x.value.has_changes;
      return x.value.comparison.is_synced ? z ? "warning" : "success" : "error";
    });
    N(() => x.value ? re.value === "success" ? "All synced" : re.value === "warning" ? "Uncommitted changes" : re.value === "error" ? "Not synced" : "" : "");
    async function q() {
      X.value = !0, de.value = null;
      try {
        const [j, z, ge, Ce] = await Promise.all([
          p(!0),
          g(),
          u(),
          w()
        ]);
        x.value = j, Y.value = z.commits, F.value = ge.branches, G.value = Ce, l("statusUpdate", j), U.value && await U.value.loadWorkflows(!0);
      } catch (j) {
        de.value = j instanceof Error ? j.message : "Failed to load status", x.value = null, Y.value = [], F.value = [];
      } finally {
        X.value = !1;
      }
    }
    function Ee(j) {
      K.value = j;
    }
    async function O(j) {
      var ge;
      K.value = null;
      const z = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      xe.value = {
        title: z ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: z ? "You have uncommitted changes that will be lost." : `Checkout commit ${j.short_hash || ((ge = j.hash) == null ? void 0 : ge.slice(0, 7))}?`,
        details: z ? ws() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: z ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: z,
        onConfirm: async () => {
          var We;
          xe.value = null, Qe();
          const Ce = ke(`Checking out ${j.short_hash || ((We = j.hash) == null ? void 0 : We.slice(0, 7))}...`, "info", 0), Pe = await v(j.hash, z);
          Ae(Ce), Pe.status === "success" ? ke("Restarting ComfyUI...", "success") : ke(Pe.message || "Checkout failed", "error");
        }
      };
    }
    async function B(j) {
      const z = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      xe.value = {
        title: z ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: z ? "You have uncommitted changes." : `Switch to branch "${j}"?`,
        details: z ? ws() : void 0,
        warning: z ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: z ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          xe.value = null, Qe();
          const ge = ke(`Switching to ${j}...`, "info", 0), Ce = await m(j, z);
          Ae(ge), Ce.status === "success" ? ke("Restarting ComfyUI...", "success") : ke(Ce.message || "Branch switch failed", "error");
        }
      };
    }
    async function V(j) {
      const z = ke(`Creating branch ${j}...`, "info", 0), ge = await r(j);
      Ae(z), ge.status === "success" ? (ke(`Branch "${j}" created`, "success"), await q()) : ke(ge.message || "Failed to create branch", "error");
    }
    async function Z(j, z = !1) {
      const ge = async (Ce) => {
        var We;
        const Pe = ke(`Deleting branch ${j}...`, "info", 0);
        try {
          const pt = await y(j, Ce);
          Ae(Pe), pt.status === "success" ? (ke(`Branch "${j}" deleted`, "success"), await q()) : (We = pt.message) != null && We.includes("not fully merged") ? xe.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${j}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              xe.value = null, await ge(!0);
            }
          } : ke(pt.message || "Failed to delete branch", "error");
        } catch (pt) {
          Ae(Pe);
          const Pt = pt instanceof Error ? pt.message : "Failed to delete branch";
          Pt.includes("not fully merged") ? xe.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${j}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              xe.value = null, await ge(!0);
            }
          } : ke(Pt, "error");
        }
      };
      xe.value = {
        title: "Delete Branch",
        message: `Delete branch "${j}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          xe.value = null, await ge(z);
        }
      };
    }
    async function pe(j) {
      K.value = null;
      const z = prompt("Enter branch name:");
      if (z) {
        const ge = ke(`Creating branch ${z}...`, "info", 0), Ce = await r(z, j.hash);
        Ae(ge), Ce.status === "success" ? (ke(`Branch "${z}" created from ${j.short_hash}`, "success"), await q()) : ke(Ce.message || "Failed to create branch", "error");
      }
    }
    function Qe() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function gt() {
      xe.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var j;
          xe.value = null, Qe(), ke("Restarting environment...", "info");
          try {
            (j = window.app) != null && j.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Ct() {
      xe.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var j;
          xe.value = null, ke("Stopping environment...", "info");
          try {
            (j = window.app) != null && j.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function ot(j, z) {
      L.value = !1, we.value = j, Oe.value = z || null, Q.value = !0;
    }
    async function xt() {
      Q.value = !1, Me.value = !0, Qe(), Te.value = {
        progress: 10,
        state: St(10),
        message: H(10)
      };
      try {
        await _(we.value, Oe.value || void 0), ue(), Le();
      } catch (j) {
        he(), Me.value = !1, ke(`Failed to initiate switch: ${j instanceof Error ? j.message : "Unknown error"}`, "error"), Te.value = { state: "idle", progress: 0, message: "" }, Oe.value = null;
      }
    }
    function St(j) {
      return j >= 100 ? "complete" : j >= 80 ? "validating" : j >= 60 ? "starting" : j >= 30 ? "syncing" : "preparing";
    }
    function H(j) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[St(j)] || "";
    }
    function ue() {
      if (ve) return;
      let j = 10;
      const z = 60, ge = 5e3, Ce = 100, Pe = (z - j) / (ge / Ce);
      ve = window.setInterval(() => {
        if (j += Pe, j >= z && (j = z, he()), Te.value.progress < z) {
          const We = Math.floor(j);
          Te.value = {
            progress: We,
            state: St(We),
            message: H(We)
          };
        }
      }, Ce);
    }
    function he() {
      ve && (clearInterval(ve), ve = null);
    }
    function Le() {
      ce || (ce = window.setInterval(async () => {
        try {
          let j = await P.getStatus();
          if ((!j || j.state === "idle") && (j = await k()), !j)
            return;
          const z = j.progress || 0;
          z >= 60 && he();
          const ge = Math.max(z, Te.value.progress), Ce = j.state && j.state !== "idle" && j.state !== "unknown", Pe = Ce ? j.state : St(ge), We = Ce && j.message || H(ge);
          Te.value = {
            state: Pe,
            progress: ge,
            message: We
          }, j.state === "complete" ? (he(), qe(), Me.value = !1, ke(`✓ Switched to ${we.value}`, "success"), await q(), we.value = "") : j.state === "rolled_back" ? (he(), qe(), Me.value = !1, ke("Switch failed, restored previous environment", "warning"), we.value = "") : j.state === "critical_failure" && (he(), qe(), Me.value = !1, ke(`Critical error during switch: ${j.message}`, "error"), we.value = "");
        } catch (j) {
          console.error("Failed to poll switch progress:", j);
        }
      }, 1e3));
    }
    function qe() {
      he(), ce && (clearInterval(ce), ce = null);
    }
    function It() {
      var j;
      Q.value = !1, we.value = "", (j = M.value) != null && j.state && M.value.state !== "managed" && (le.value = M.value.state === "no_workspace" ? 1 : 2, D.value = !0);
    }
    async function qt() {
      Ge.value = !1, await q(), ke("✓ Changes committed", "success");
    }
    async function Ht() {
      Xe.value = !1;
      const j = ke("Syncing environment...", "info", 0);
      try {
        const z = await A("skip", !0);
        if (Ae(j), z.status === "success") {
          const ge = [];
          z.nodes_installed.length && ge.push(`${z.nodes_installed.length} installed`), z.nodes_removed.length && ge.push(`${z.nodes_removed.length} removed`);
          const Ce = ge.length ? `: ${ge.join(", ")}` : "";
          ke(`✓ Environment synced${Ce}`, "success"), await q();
        } else {
          const ge = z.errors.length ? z.errors.join("; ") : z.message;
          ke(`Sync failed: ${ge}`, "error");
        }
      } catch (z) {
        Ae(j), ke(`Sync error: ${z instanceof Error ? z.message : "Unknown error"}`, "error");
      }
    }
    async function Zs(j) {
      var z;
      try {
        const ge = await f(j);
        ge.failed.length === 0 ? ke(`✓ Repaired ${ge.success} workflow${ge.success === 1 ? "" : "s"}`, "success") : ke(`Repaired ${ge.success}, failed: ${ge.failed.length}`, "warning"), await q();
      } catch (ge) {
        ke(`Repair failed: ${ge instanceof Error ? ge.message : "Unknown error"}`, "error");
      } finally {
        (z = ae.value) == null || z.resetRepairingState();
      }
    }
    async function ys() {
      var z, ge;
      const j = ke("Repairing environment...", "info", 0);
      try {
        const Ce = await A("skip", !0);
        if (Ae(j), Ce.status === "success") {
          const Pe = [];
          Ce.nodes_installed.length && Pe.push(`${Ce.nodes_installed.length} installed`), Ce.nodes_removed.length && Pe.push(`${Ce.nodes_removed.length} removed`);
          const We = Pe.length ? `: ${Pe.join(", ")}` : "";
          ke(`✓ Environment repaired${We}`, "success"), (z = ae.value) == null || z.closeDetailModal(), await q();
        } else {
          const Pe = Ce.errors.length ? Ce.errors.join(", ") : Ce.message || "Unknown error";
          ke(`Repair failed: ${Pe}`, "error");
        }
      } catch (Ce) {
        Ae(j), ke(`Repair error: ${Ce instanceof Error ? Ce.message : "Unknown error"}`, "error");
      } finally {
        (ge = ae.value) == null || ge.resetRepairingEnvironmentState();
      }
    }
    async function eo(j, z) {
      ke(`Environment '${j}' created`, "success"), await q(), S.value && await S.value.loadEnvironments(), z && await ot(j);
    }
    async function to(j) {
      var z;
      if (((z = T.value) == null ? void 0 : z.name) === j) {
        ke("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      xe.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${j}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          xe.value = null;
          try {
            const ge = await R(j);
            ge.status === "success" ? (ke(`Environment "${j}" deleted`, "success"), await q(), S.value && await S.value.loadEnvironments()) : ke(ge.message || "Failed to delete environment", "error");
          } catch (ge) {
            ke(`Error deleting environment: ${ge instanceof Error ? ge.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function so(j, z) {
      D.value = !1;
      try {
        M.value = await C();
      } catch {
      }
      await ot(j, z);
    }
    function oo() {
      D.value = !1, l("close");
    }
    async function no(j, z) {
      await ot(j, z);
    }
    async function ao(j) {
      await q(), await ot(j);
    }
    async function lo(j) {
      M.value = await C(), console.log(`Environment '${j}' created. Available for switching.`);
    }
    function io() {
      be("environments", "all-envs"), setTimeout(() => {
        var j;
        (j = S.value) == null || j.openCreateModal();
      }, 100);
    }
    function ws() {
      if (!x.value) return [];
      const j = [], z = x.value.workflows;
      return z.new.length && j.push(`${z.new.length} new workflow(s)`), z.modified.length && j.push(`${z.modified.length} modified workflow(s)`), z.deleted.length && j.push(`${z.deleted.length} deleted workflow(s)`), j;
    }
    return Ne(async () => {
      try {
        if (M.value = await C(), M.value.state === "no_workspace") {
          D.value = !0, le.value = 1;
          return;
        }
        if (M.value.state === "empty_workspace") {
          D.value = !0, le.value = 2;
          return;
        }
        if (M.value.state === "unmanaged") {
          D.value = !0, le.value = 2;
          return;
        }
      } catch (j) {
        console.warn("Setup status check failed, proceeding normally:", j);
      }
      await q();
    }), (j, z) => {
      var ge, Ce, Pe, We, pt, Pt, ks, bs, _s, $s, Cs, xs;
      return s(), o("div", Jk, [
        e("div", Yk, [
          e("div", Xk, [
            z[35] || (z[35] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            x.value ? (s(), o("div", Qk)) : d("", !0)
          ]),
          e("div", Zk, [
            e("button", {
              class: "sponsor-btn",
              onClick: z[0] || (z[0] = (ye) => E("https://github.com/sponsors/comfyhub-org")),
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
              onClick: z[1] || (z[1] = (ye) => E("https://discord.gg/2h5rSTeh6Y")),
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
              onClick: z[2] || (z[2] = (ye) => E("https://x.com/akatz_ai")),
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
              onClick: z[3] || (z[3] = (ye) => E("https://github.com/comfyhub-org/comfygit")),
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
              onClick: z[4] || (z[4] = (ye) => E("https://docs.comfyhub.org/comfygit/")),
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
              class: me(["icon-btn", { spinning: X.value }]),
              onClick: q,
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
              onClick: z[5] || (z[5] = (ye) => l("close")),
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
        e("div", eb, [
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
            onClick: z[6] || (z[6] = (ye) => be("environments", "all-envs"))
          }, [
            x.value ? (s(), o("div", tb, [
              e("span", null, a(((ge = T.value) == null ? void 0 : ge.name) || ((Ce = x.value) == null ? void 0 : Ce.environment) || "Loading..."), 1),
              e("span", sb, "(" + a(x.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            z[45] || (z[45] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", ob, [
          e("div", nb, [
            e("div", ab, [
              e("div", lb, [
                z[46] || (z[46] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                e("button", {
                  class: me(["sidebar-item", { active: J.value === "status" && Se.value === "this-env" }]),
                  onClick: z[7] || (z[7] = (ye) => be("status", "this-env"))
                }, " STATUS ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: J.value === "workflows" }]),
                  onClick: z[8] || (z[8] = (ye) => be("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: J.value === "models-env" }]),
                  onClick: z[9] || (z[9] = (ye) => be("models-env", "this-env"))
                }, " MODELS ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: J.value === "branches" }]),
                  onClick: z[10] || (z[10] = (ye) => be("branches", "this-env"))
                }, " BRANCHES ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: J.value === "history" }]),
                  onClick: z[11] || (z[11] = (ye) => be("history", "this-env"))
                }, " HISTORY ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: J.value === "nodes" }]),
                  onClick: z[12] || (z[12] = (ye) => be("nodes", "this-env"))
                }, " NODES ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: J.value === "debug-env" }]),
                  onClick: z[13] || (z[13] = (ye) => be("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              z[49] || (z[49] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", ib, [
                z[47] || (z[47] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                e("button", {
                  class: me(["sidebar-item", { active: J.value === "environments" }]),
                  onClick: z[14] || (z[14] = (ye) => be("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: J.value === "model-index" }]),
                  onClick: z[15] || (z[15] = (ye) => be("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: J.value === "settings" }]),
                  onClick: z[16] || (z[16] = (ye) => be("settings", "all-envs"))
                }, " SETTINGS ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: J.value === "debug-workspace" }]),
                  onClick: z[17] || (z[17] = (ye) => be("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              z[50] || (z[50] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", rb, [
                z[48] || (z[48] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                e("button", {
                  class: me(["sidebar-item", { active: J.value === "export" }]),
                  onClick: z[18] || (z[18] = (ye) => be("export", "sharing"))
                }, " EXPORT ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: J.value === "import" }]),
                  onClick: z[19] || (z[19] = (ye) => be("import", "sharing"))
                }, " IMPORT ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: J.value === "remotes" }]),
                  onClick: z[20] || (z[20] = (ye) => be("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            z[51] || (z[51] = mo('<div class="sidebar-footer" data-v-1340da17><span class="version" data-v-1340da17>v0.0.1</span><span class="made-by" data-v-1340da17>made with <svg class="heart-icon" width="10" height="10" viewBox="0 0 16 16" fill="currentColor" data-v-1340da17><path d="M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" data-v-1340da17></path></svg> by Akatz</span></div>', 1))
          ]),
          e("div", db, [
            de.value ? (s(), o("div", cb, a(de.value), 1)) : !x.value && J.value === "status" ? (s(), o("div", ub, " Loading status... ")) : (s(), o(W, { key: 2 }, [
              J.value === "status" ? (s(), I(Ga, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: ae,
                status: x.value,
                "setup-state": se.value,
                onSwitchBranch: rt,
                onCommitChanges: z[21] || (z[21] = (ye) => Ge.value = !0),
                onSyncEnvironment: z[22] || (z[22] = (ye) => Xe.value = !0),
                onViewWorkflows: z[23] || (z[23] = (ye) => be("workflows", "this-env")),
                onViewHistory: z[24] || (z[24] = (ye) => be("history", "this-env")),
                onViewDebug: z[25] || (z[25] = (ye) => be("debug-env", "this-env")),
                onViewNodes: z[26] || (z[26] = (ye) => be("nodes", "this-env")),
                onRepairMissingModels: Zs,
                onRepairEnvironment: ys,
                onStartSetup: z[27] || (z[27] = (ye) => D.value = !0),
                onViewEnvironments: z[28] || (z[28] = (ye) => be("environments", "all-envs")),
                onCreateEnvironment: io
              }, null, 8, ["status", "setup-state"])) : J.value === "workflows" ? (s(), I(mm, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: U,
                onRefresh: q
              }, null, 512)) : J.value === "models-env" ? (s(), I(Km, {
                key: 2,
                onNavigate: st
              })) : J.value === "branches" ? (s(), I(al, {
                key: 3,
                branches: F.value,
                current: ((Pe = x.value) == null ? void 0 : Pe.branch) || null,
                onSwitch: B,
                onCreate: V,
                onDelete: Z
              }, null, 8, ["branches", "current"])) : J.value === "history" ? (s(), I(pl, {
                key: 4,
                commits: Y.value,
                onSelect: Ee,
                onCheckout: O
              }, null, 8, ["commits"])) : J.value === "nodes" ? (s(), I(Gv, {
                key: 5,
                "version-mismatches": ((pt = (We = x.value) == null ? void 0 : We.comparison) == null ? void 0 : pt.version_mismatches) || [],
                onOpenNodeManager: vt,
                onRepairEnvironment: ys,
                onToast: dt
              }, null, 8, ["version-mismatches"])) : J.value === "debug-env" ? (s(), I(Qp, { key: 6 })) : J.value === "environments" ? (s(), I(t1, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: S,
                onSwitch: ot,
                onCreated: eo,
                onDelete: to
              }, null, 512)) : J.value === "model-index" ? (s(), I(fv, {
                key: 8,
                onRefresh: q
              })) : J.value === "settings" ? (s(), I(Kp, { key: 9 })) : J.value === "debug-workspace" ? (s(), I(Yp, { key: 10 })) : J.value === "export" ? (s(), I(L1, { key: 11 })) : J.value === "import" ? (s(), I(S0, {
                key: 12,
                onImportCompleteSwitch: ao
              })) : J.value === "remotes" ? (s(), I(Ip, {
                key: 13,
                onToast: dt
              })) : d("", !0)
            ], 64))
          ])
        ]),
        K.value ? (s(), I(G0, {
          key: 0,
          commit: K.value,
          onClose: z[29] || (z[29] = (ye) => K.value = null),
          onCheckout: O,
          onCreateBranch: pe
        }, null, 8, ["commit"])) : d("", !0),
        xe.value ? (s(), I(Bs, {
          key: 1,
          title: xe.value.title,
          message: xe.value.message,
          details: xe.value.details,
          warning: xe.value.warning,
          confirmLabel: xe.value.confirmLabel,
          cancelLabel: xe.value.cancelLabel,
          secondaryLabel: xe.value.secondaryLabel,
          secondaryAction: xe.value.secondaryAction,
          destructive: xe.value.destructive,
          onConfirm: xe.value.onConfirm,
          onCancel: z[30] || (z[30] = (ye) => xe.value = null),
          onSecondary: xe.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        b(Vw, {
          show: Q.value,
          "from-environment": ((Pt = T.value) == null ? void 0 : Pt.name) || "unknown",
          "to-environment": we.value,
          onConfirm: xt,
          onClose: It
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Ge.value && x.value ? (s(), I(Hs, {
          key: 2,
          status: x.value,
          "as-modal": !0,
          onClose: z[31] || (z[31] = (ye) => Ge.value = !1),
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
          onClose: z[32] || (z[32] = (ye) => Xe.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : d("", !0),
        b(Zw, {
          show: Me.value,
          state: Te.value.state,
          progress: Te.value.progress,
          message: Te.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        L.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: z[34] || (z[34] = ze((ye) => L.value = !1, ["self"]))
        }, [
          e("div", mb, [
            e("div", vb, [
              z[53] || (z[53] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: z[33] || (z[33] = (ye) => L.value = !1)
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
            e("div", fb, [
              z[54] || (z[54] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", gb, [
                (s(!0), o(W, null, oe(G.value, (ye) => (s(), o("div", {
                  key: ye.name,
                  class: me(["env-item", { current: ye.is_current }])
                }, [
                  e("div", pb, [
                    e("div", hb, [
                      e("span", yb, a(ye.is_current ? "●" : "○"), 1),
                      e("span", wb, a(ye.name), 1),
                      ye.current_branch ? (s(), o("span", kb, "(" + a(ye.current_branch) + ")", 1)) : d("", !0),
                      ye.is_current ? (s(), o("span", bb, "CURRENT")) : d("", !0)
                    ]),
                    e("div", _b, a(ye.workflow_count) + " workflows • " + a(ye.node_count) + " nodes ", 1)
                  ]),
                  ye.is_current ? d("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (L2) => ot(ye.name)
                  }, " SWITCH ", 8, $b))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        D.value ? (s(), I(Kk, {
          key: 5,
          "default-path": ((ks = M.value) == null ? void 0 : ks.default_path) || "~/comfygit",
          "detected-models-dir": ((bs = M.value) == null ? void 0 : bs.detected_models_dir) || null,
          "initial-step": le.value,
          "existing-environments": ((_s = M.value) == null ? void 0 : _s.environments) || [],
          "cli-installed": (($s = M.value) == null ? void 0 : $s.cli_installed) ?? !0,
          "setup-state": ((Cs = M.value) == null ? void 0 : Cs.state) || "no_workspace",
          "workspace-path": ((xs = M.value) == null ? void 0 : xs.workspace_path) || null,
          onComplete: so,
          onClose: oo,
          onSwitchEnvironment: no,
          onEnvironmentCreatedNoSwitch: lo
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : d("", !0),
        e("div", Cb, [
          b(vo, { name: "toast" }, {
            default: i(() => [
              (s(!0), o(W, null, oe(je.value, (ye) => (s(), o("div", {
                key: ye.id,
                class: me(["toast", ye.type])
              }, [
                e("span", xb, a(ye.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Ib = /* @__PURE__ */ te(Sb, [["__scopeId", "data-v-1340da17"]]), Eb = { class: "item-header" }, Mb = { class: "item-info" }, Tb = { class: "filename" }, Rb = { class: "metadata" }, zb = { class: "size" }, Lb = {
  key: 0,
  class: "type"
}, Pb = { class: "item-actions" }, Db = {
  key: 0,
  class: "progress-section"
}, Nb = { class: "progress-bar" }, Ub = { class: "progress-stats" }, Ob = { class: "downloaded" }, Bb = { class: "speed" }, Fb = {
  key: 0,
  class: "eta"
}, Ab = {
  key: 1,
  class: "status-msg paused"
}, Vb = {
  key: 2,
  class: "status-msg queued"
}, Wb = {
  key: 3,
  class: "status-msg completed"
}, Gb = {
  key: 4,
  class: "status-msg failed"
}, jb = {
  key: 0,
  class: "retries"
}, qb = /* @__PURE__ */ ee({
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
      e("div", Eb, [
        e("div", Mb, [
          e("div", Tb, a(t.item.filename), 1),
          e("div", Rb, [
            e("span", zb, a(l(t.item.size)), 1),
            t.item.type ? (s(), o("span", Lb, a(t.item.type), 1)) : d("", !0)
          ])
        ]),
        e("div", Pb, [
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
      t.item.status === "downloading" ? (s(), o("div", Db, [
        e("div", Nb, [
          e("div", {
            class: "progress-fill",
            style: yt({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Ub, [
          e("span", Ob, a(l(t.item.downloaded)) + " / " + a(l(t.item.size)), 1),
          e("span", Bb, a(p(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", Fb, a(g(t.item.eta)), 1)) : d("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", Ab, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", Vb, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", Wb, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", Gb, [
        h(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", jb, "(" + a(t.item.retries) + " retries)", 1)) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ut = /* @__PURE__ */ te(qb, [["__scopeId", "data-v-2110df65"]]), Hb = { class: "queue-title" }, Kb = { class: "count" }, Jb = { class: "queue-actions" }, Yb = { class: "action-label" }, Xb = {
  key: 0,
  class: "overall-progress"
}, Qb = { class: "progress-bar" }, Zb = {
  key: 0,
  class: "current-mini"
}, e2 = { class: "filename" }, t2 = { class: "speed" }, s2 = {
  key: 1,
  class: "queue-content"
}, o2 = {
  key: 0,
  class: "section"
}, n2 = {
  key: 1,
  class: "section"
}, a2 = { class: "section-header" }, l2 = { class: "section-label paused" }, i2 = { class: "items-list" }, r2 = {
  key: 2,
  class: "section"
}, d2 = { class: "section-header" }, c2 = { class: "section-label" }, u2 = { class: "items-list" }, m2 = {
  key: 3,
  class: "section"
}, v2 = { class: "section-header" }, f2 = { class: "section-label" }, g2 = { class: "items-list" }, p2 = {
  key: 4,
  class: "section"
}, h2 = { class: "section-header" }, y2 = { class: "section-label failed" }, w2 = { class: "items-list" }, k2 = /* @__PURE__ */ ee({
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
      resumeAllPaused: _,
      removeItem: k,
      clearCompleted: R
    } = Gt(), A = $(!1);
    let f = null;
    _t(
      () => ({
        active: r.value,
        failed: g.value.length,
        paused: u.value.length,
        completed: p.value.length
      }),
      (x, Y) => {
        f && (clearTimeout(f), f = null);
        const F = x.active === 0 && x.failed === 0 && x.paused === 0 && x.completed > 0, G = Y && (Y.active > 0 || Y.paused > 0);
        F && G && (f = setTimeout(() => {
          R(), f = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = N(() => {
      var F;
      if (c.items.length === 0) return 0;
      const x = p.value.length, Y = ((F = n.value) == null ? void 0 : F.progress) || 0;
      return Math.round((x + Y / 100) / c.items.length * 100);
    });
    function P(x) {
      m(x);
    }
    function E(x) {
      return x === 0 ? "" : `${(x / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (x, Y) => (s(), I(Ve, { to: "body" }, [
      _e(v) ? (s(), o("div", {
        key: 0,
        class: me(["model-download-queue", { minimized: !A.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: Y[0] || (Y[0] = (F) => A.value = !A.value)
        }, [
          e("div", Hb, [
            Y[4] || (Y[4] = e("span", { class: "icon" }, "↓", -1)),
            Y[5] || (Y[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", Kb, "(" + a(_e(r)) + "/" + a(_e(c).items.length) + ")", 1)
          ]),
          e("div", Jb, [
            e("span", Yb, a(A.value ? "minimize" : "expand"), 1)
          ])
        ]),
        A.value ? (s(), o("div", s2, [
          _e(n) ? (s(), o("div", o2, [
            Y[6] || (Y[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            b(Ut, {
              item: _e(n),
              onCancel: Y[1] || (Y[1] = (F) => P(_e(n).id))
            }, null, 8, ["item"])
          ])) : d("", !0),
          _e(u).length > 0 ? (s(), o("div", n2, [
            e("div", a2, [
              e("span", l2, "Paused (" + a(_e(u).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: Y[2] || (Y[2] = //@ts-ignore
                (...F) => _e(_) && _e(_)(...F))
              }, "Resume All")
            ]),
            e("div", i2, [
              (s(!0), o(W, null, oe(_e(u), (F) => (s(), I(Ut, {
                key: F.id,
                item: F,
                onResume: (G) => _e(w)(F.id),
                onRemove: (G) => _e(k)(F.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          _e(l).length > 0 ? (s(), o("div", r2, [
            e("div", d2, [
              e("span", c2, "Queued (" + a(_e(l).length) + ")", 1)
            ]),
            e("div", u2, [
              (s(!0), o(W, null, oe(_e(l), (F) => (s(), I(Ut, {
                key: F.id,
                item: F,
                onCancel: (G) => P(F.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : d("", !0),
          _e(p).length > 0 ? (s(), o("div", m2, [
            e("div", v2, [
              e("span", f2, "Completed (" + a(_e(p).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: Y[3] || (Y[3] = //@ts-ignore
                (...F) => _e(R) && _e(R)(...F))
              }, "Clear")
            ]),
            e("div", g2, [
              (s(!0), o(W, null, oe(_e(p).slice(0, 3), (F) => (s(), I(Ut, {
                key: F.id,
                item: F,
                onRemove: (G) => _e(k)(F.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          _e(g).length > 0 ? (s(), o("div", p2, [
            e("div", h2, [
              e("span", y2, "Failed (" + a(_e(g).length) + ")", 1)
            ]),
            e("div", w2, [
              (s(!0), o(W, null, oe(_e(g), (F) => (s(), I(Ut, {
                key: F.id,
                item: F,
                onRetry: (G) => _e(y)(F.id),
                onRemove: (G) => _e(k)(F.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : d("", !0)
        ])) : (s(), o("div", Xb, [
          e("div", Qb, [
            e("div", {
              class: "progress-fill",
              style: yt({ width: `${C.value}%` })
            }, null, 4)
          ]),
          _e(n) ? (s(), o("div", Zb, [
            e("span", e2, a(_e(n).filename), 1),
            e("span", t2, a(E(_e(n).speed)), 1)
          ])) : d("", !0)
        ]))
      ], 2)) : d("", !0)
    ]));
  }
}), b2 = /* @__PURE__ */ te(k2, [["__scopeId", "data-v-60751cfa"]]), _2 = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', $2 = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', C2 = {
  comfy: _2,
  phosphor: $2
}, gs = "comfy", Ks = "comfygit-theme";
let $t = null, Js = gs;
function x2() {
  try {
    const t = localStorage.getItem(Ks);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return gs;
}
function Ys(t = gs) {
  $t && $t.remove(), $t = document.createElement("style"), $t.id = "comfygit-theme-styles", $t.setAttribute("data-theme", t), $t.textContent = C2[t], document.head.appendChild($t), document.body.setAttribute("data-comfygit-theme", t), Js = t;
  try {
    localStorage.setItem(Ks, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function S2() {
  return Js;
}
function I2(t) {
  Ys(t);
}
function E2(t) {
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
const M2 = x2();
Ys(M2);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), I2(t);
  },
  getTheme: () => {
    const t = S2();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let at = null, Ze = null, At = null, Ot = null, Ts = null;
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
function T2() {
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
    render: () => ms(Ib, {
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
function R2(t) {
  Bt(), Ze = document.createElement("div"), Ze.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  Ze.style.position = "fixed", Ze.style.top = `${c.bottom + 8}px`, Ze.style.right = `${window.innerWidth - c.right}px`, Ze.style.zIndex = "10001";
  const n = (p) => {
    Ze && !Ze.contains(p.target) && p.target !== t && (Bt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const l = (p) => {
    p.key === "Escape" && (Bt(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), At = us({
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
function z2() {
  Ot || (Ot = document.createElement("div"), Ot.className = "comfygit-download-queue-root", Ts = us({
    render: () => ms(b2)
  }), Ts.mount(Ot), document.body.appendChild(Ot), console.log("[ComfyGit] Model download queue mounted"));
}
let et = null;
function Vt() {
  if (!et) return;
  const t = et.querySelector(".commit-indicator");
  t && (t.style.display = T2() ? "block" : "none");
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
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = Rs, et = document.createElement("button"), et.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", et.innerHTML = 'Commit <span class="commit-indicator"></span>', et.title = "Quick Commit", et.onclick = () => R2(et), t.appendChild(c), t.appendChild(et), (g = (p = bt.menu) == null ? void 0 : p.settingsGroup) != null && g.element && (bt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), z2();
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
        const A = document.createElement("div");
        A.textContent = "Node installation failed", A.style.cssText = "font-weight: 600; color: #e53935;", R.appendChild(A);
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
        const P = document.createElement("button");
        P.textContent = "×", P.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, P.onmouseover = () => P.style.opacity = "1", P.onmouseout = () => P.style.opacity = "0.6", P.onclick = () => _.remove(), _.appendChild(P), document.body.appendChild(_), console.log("[ComfyGit] Manager error toast displayed:", y), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && _.remove();
        }, 1e4);
      };
      l.addEventListener("comfygit:workflow-changed", async (y) => {
        const { change_type: w, workflow_name: _ } = y.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${_}`), await Yt(), Vt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let m = !1;
      l.addEventListener("status", async (y) => {
        const w = y.detail != null;
        w && !m && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), u()) : v()), m = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), l.addEventListener("cm-task-completed", (y) => {
        const w = E2(y.detail);
        w && r(w);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
