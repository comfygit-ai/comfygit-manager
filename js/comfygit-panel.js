import { app as _t } from "../../scripts/app.js";
import { defineComponent as Z, createElementBlock as o, openBlock as s, createCommentVNode as d, createElementVNode as e, renderSlot as $e, createBlock as E, resolveDynamicComponent as cs, normalizeClass as me, withCtx as i, toDisplayString as a, createVNode as b, createTextVNode as h, computed as D, Fragment as W, renderList as oe, normalizeStyle as wt, ref as $, onMounted as Ue, watch as $t, Teleport as Ve, withModifiers as Pe, Transition as co, createSlots as Wt, withKeys as yt, reactive as ts, onUnmounted as Ls, readonly as uo, unref as _e, withDirectives as Oe, vModelText as Tt, vModelRadio as Kt, vModelCheckbox as Xt, nextTick as mo, vModelSelect as Rt, TransitionGroup as vo, createApp as us, h as ms } from "vue";
const fo = { class: "panel-layout" }, go = {
  key: 0,
  class: "panel-layout-header"
}, po = {
  key: 1,
  class: "panel-layout-search"
}, ho = { class: "panel-layout-content" }, yo = {
  key: 2,
  class: "panel-layout-footer"
}, wo = /* @__PURE__ */ Z({
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
}), ee = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [l, g] of c)
    n[l] = g;
  return n;
}, qe = /* @__PURE__ */ ee(wo, [["__scopeId", "data-v-21565df9"]]), ko = {
  key: 0,
  class: "panel-title-prefix"
}, bo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, _o = /* @__PURE__ */ Z({
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
        $e(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), $o = /* @__PURE__ */ ee(_o, [["__scopeId", "data-v-c3875efc"]]), Co = ["title"], xo = ["width", "height"], So = /* @__PURE__ */ Z({
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
}), Ps = /* @__PURE__ */ ee(So, [["__scopeId", "data-v-6fc7f16d"]]), Io = { class: "header-left" }, Eo = {
  key: 0,
  class: "header-actions"
}, Mo = /* @__PURE__ */ Z({
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
        t.showInfo ? (s(), E(Ps, {
          key: 0,
          onClick: n[0] || (n[0] = (l) => c.$emit("info-click"))
        })) : d("", !0)
      ]),
      c.$slots.actions ? (s(), o("div", Eo, [
        $e(c.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ke = /* @__PURE__ */ ee(Mo, [["__scopeId", "data-v-55a62cd6"]]), To = {
  key: 0,
  class: "section-title-count"
}, Ro = {
  key: 1,
  class: "section-title-icon"
}, Lo = /* @__PURE__ */ Z({
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
        $e(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", To, "(" + a(t.count) + ")", 1)) : d("", !0),
        t.clickable ? (s(), o("span", Ro, a(t.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), et = /* @__PURE__ */ ee(Lo, [["__scopeId", "data-v-559361eb"]]), Po = { class: "status-grid" }, zo = { class: "status-grid__columns" }, Do = { class: "status-grid__column" }, No = { class: "status-grid__title" }, Uo = { class: "status-grid__column status-grid__column--right" }, Oo = { class: "status-grid__title" }, Bo = {
  key: 0,
  class: "status-grid__footer"
}, Fo = /* @__PURE__ */ Z({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", Po, [
      e("div", zo, [
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
}), Ao = /* @__PURE__ */ ee(Fo, [["__scopeId", "data-v-73b7ba3f"]]), Vo = {
  key: 0,
  class: "status-item__icon"
}, Wo = {
  key: 1,
  class: "status-item__count"
}, Go = { class: "status-item__label" }, jo = /* @__PURE__ */ Z({
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
    return (l, g) => (s(), o("div", {
      class: me(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", Vo, a(t.icon), 1)) : d("", !0),
      t.count !== void 0 ? (s(), o("span", Wo, a(t.count), 1)) : d("", !0),
      e("span", Go, a(t.label), 1)
    ], 2));
  }
}), ut = /* @__PURE__ */ ee(jo, [["__scopeId", "data-v-6f929183"]]), Ho = { class: "issue-card__header" }, qo = { class: "issue-card__icon" }, Ko = { class: "issue-card__title" }, Jo = {
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
}, Zo = /* @__PURE__ */ Z({
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
    return (l, g) => (s(), o("div", {
      class: me(["issue-card", n.value])
    }, [
      e("div", Ho, [
        e("span", qo, a(t.icon), 1),
        e("h4", Ko, a(t.title), 1)
      ]),
      l.$slots.default || t.description ? (s(), o("div", Jo, [
        t.description ? (s(), o("p", Yo, a(t.description), 1)) : d("", !0),
        $e(l.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      t.items && t.items.length ? (s(), o("div", Xo, [
        (s(!0), o(W, null, oe(t.items, (p, u) => (s(), o("div", {
          key: u,
          class: "issue-card__item"
        }, [
          g[0] || (g[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(p), 1)
        ]))), 128))
      ])) : d("", !0),
      l.$slots.actions ? (s(), o("div", Qo, [
        $e(l.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), nt = /* @__PURE__ */ ee(Zo, [["__scopeId", "data-v-df6aa348"]]), en = ["type", "disabled"], tn = {
  key: 0,
  class: "spinner"
}, sn = /* @__PURE__ */ Z({
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
}), ae = /* @__PURE__ */ ee(sn, [["__scopeId", "data-v-772abe47"]]), on = { class: "empty-state" }, nn = {
  key: 0,
  class: "empty-icon"
}, an = { class: "empty-message" }, ln = /* @__PURE__ */ Z({
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
      t.actionLabel ? (s(), E(ae, {
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
}), it = /* @__PURE__ */ ee(ln, [["__scopeId", "data-v-4466284f"]]), rn = /* @__PURE__ */ Z({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: me(["detail-label"]),
      style: wt({ minWidth: t.minWidth })
    }, [
      $e(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Jt = /* @__PURE__ */ ee(rn, [["__scopeId", "data-v-75e9eeb8"]]), dn = /* @__PURE__ */ Z({
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
}), ls = /* @__PURE__ */ ee(dn, [["__scopeId", "data-v-2f186e4c"]]), cn = { class: "detail-row" }, un = /* @__PURE__ */ Z({
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
      }, 8, ["mono", "variant", "truncate"])) : $e(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Ne = /* @__PURE__ */ ee(un, [["__scopeId", "data-v-ef15664a"]]), mn = { class: "modal-header" }, vn = { class: "modal-body" }, fn = { class: "status-section" }, gn = {
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
}, Tn = { class: "workflow-group-header" }, Rn = { class: "workflow-group-title" }, Ln = { class: "workflow-list" }, Pn = { class: "workflow-name" }, zn = {
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
}, Pa = { class: "warning-box" }, za = {
  key: 5,
  class: "empty-state-inline"
}, Da = { class: "modal-actions" }, Na = /* @__PURE__ */ Z({
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
    }), $t(() => c.show, (_, k) => {
      console.log("StatusDetailModal show prop changed from", k, "to", _);
    }, { immediate: !0 });
    const l = D(() => {
      var _, k, T;
      return ((T = (k = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : k.analyzed) == null ? void 0 : T.filter(
        (A) => A.status === "broken" && A.sync_state === "synced"
      )) || [];
    }), g = D(() => {
      var _, k, T;
      return ((T = (k = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : k.analyzed) == null ? void 0 : T.filter(
        (A) => A.status === "broken" && A.sync_state !== "synced"
      )) || [];
    }), p = D(() => {
      var _, k, T;
      return ((T = (k = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : k.synced) == null ? void 0 : T.filter((A) => {
        var C, z, x;
        const f = (x = (z = (C = c.status) == null ? void 0 : C.workflows) == null ? void 0 : z.analyzed) == null ? void 0 : x.find((M) => M.name === A);
        return !f || f.status !== "broken";
      })) || [];
    }), u = D(() => {
      var _, k, T, A, f;
      return (_ = c.status) != null && _.workflows ? (((k = c.status.workflows.new) == null ? void 0 : k.length) ?? 0) > 0 || (((T = c.status.workflows.modified) == null ? void 0 : T.length) ?? 0) > 0 || (((A = c.status.workflows.deleted) == null ? void 0 : A.length) ?? 0) > 0 || (((f = c.status.workflows.synced) == null ? void 0 : f.length) ?? 0) > 0 : !1;
    }), v = D(() => {
      var k, T, A;
      const _ = (k = c.status) == null ? void 0 : k.git_changes;
      return _ ? (((T = _.nodes_added) == null ? void 0 : T.length) ?? 0) > 0 || (((A = _.nodes_removed) == null ? void 0 : A.length) ?? 0) > 0 || _.workflow_changes || _.has_other_changes : !1;
    }), r = D(() => {
      var _, k, T, A, f, C;
      return !u.value && !v.value && ((k = (_ = c.status) == null ? void 0 : _.comparison) == null ? void 0 : k.is_synced) && (((T = c.status) == null ? void 0 : T.missing_models_count) ?? 0) === 0 && (((C = (f = (A = c.status) == null ? void 0 : A.comparison) == null ? void 0 : f.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
    }), m = D(() => {
      var k, T;
      const _ = (T = (k = c.status) == null ? void 0 : k.git_changes) == null ? void 0 : T.workflow_changes;
      return _ ? typeof _ == "number" ? _ : Object.keys(_).length : 0;
    });
    function y(_) {
      return typeof _ == "string" ? _ : _.name;
    }
    function w(_) {
      return typeof _ == "object" && _.is_development === !0;
    }
    return (_, k) => {
      var T, A, f, C, z, x, M, K, F, G, I, R, N, re, te, Y, ce, q, L, P, S, ie;
      return s(), E(Ve, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: k[7] || (k[7] = (X) => _.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: k[6] || (k[6] = Pe(() => {
            }, ["stop"]))
          }, [
            e("div", mn, [
              k[8] || (k[8] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: k[0] || (k[0] = (X) => _.$emit("close"))
              }, "✕")
            ]),
            e("div", vn, [
              e("div", fn, [
                b(et, { level: "4" }, {
                  default: i(() => [...k[9] || (k[9] = [
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
                  b(et, { level: "4" }, {
                    default: i(() => [...k[10] || (k[10] = [
                      h("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: k[1] || (k[1] = (X) => _.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                l.value.length ? (s(), o("div", hn, [
                  e("div", yn, [
                    k[11] || (k[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", wn, "BROKEN (COMMITTED) (" + a(l.value.length) + ")", 1)
                  ]),
                  e("div", kn, [
                    (s(!0), o(W, null, oe(l.value, (X) => (s(), o("div", {
                      key: X.name,
                      class: "workflow-item"
                    }, [
                      e("span", bn, a(X.name), 1),
                      e("span", _n, a(X.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                g.value.length ? (s(), o("div", $n, [
                  e("div", Cn, [
                    k[12] || (k[12] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", xn, "BROKEN (UNCOMMITTED) (" + a(g.value.length) + ")", 1)
                  ]),
                  e("div", Sn, [
                    (s(!0), o(W, null, oe(g.value, (X) => (s(), o("div", {
                      key: X.name,
                      class: "workflow-item"
                    }, [
                      e("span", In, a(X.name), 1),
                      e("span", En, a(X.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (A = (T = t.status.workflows) == null ? void 0 : T.new) != null && A.length ? (s(), o("div", Mn, [
                  e("div", Tn, [
                    k[13] || (k[13] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Rn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Ln, [
                    (s(!0), o(W, null, oe(t.status.workflows.new, (X) => (s(), o("div", {
                      key: X,
                      class: "workflow-item"
                    }, [
                      e("span", Pn, a(X), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (C = (f = t.status.workflows) == null ? void 0 : f.modified) != null && C.length ? (s(), o("div", zn, [
                  e("div", Dn, [
                    k[14] || (k[14] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Nn, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Un, [
                    (s(!0), o(W, null, oe(t.status.workflows.modified, (X) => (s(), o("div", {
                      key: X,
                      class: "workflow-item"
                    }, [
                      e("span", On, a(X), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (x = (z = t.status.workflows) == null ? void 0 : z.deleted) != null && x.length ? (s(), o("div", Bn, [
                  e("div", Fn, [
                    k[15] || (k[15] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", An, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Vn, [
                    (s(!0), o(W, null, oe(t.status.workflows.deleted, (X) => (s(), o("div", {
                      key: X,
                      class: "workflow-item"
                    }, [
                      e("span", Wn, a(X), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                p.value.length ? (s(), o("div", Gn, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: k[2] || (k[2] = (X) => n.value = !n.value)
                  }, [
                    k[16] || (k[16] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", jn, "SYNCED (" + a(p.value.length) + ")", 1),
                    e("span", Hn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", qn, [
                    (s(!0), o(W, null, oe(p.value, (X) => (s(), o("div", {
                      key: X,
                      class: "workflow-item"
                    }, [
                      e("span", Kn, a(X), 1)
                    ]))), 128))
                  ])) : d("", !0)
                ])) : d("", !0)
              ])) : d("", !0),
              v.value ? (s(), o("div", Jn, [
                b(et, { level: "4" }, {
                  default: i(() => [...k[17] || (k[17] = [
                    h("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (K = (M = t.status.git_changes) == null ? void 0 : M.nodes_added) != null && K.length ? (s(), o("div", Yn, [
                  e("div", Xn, [
                    k[18] || (k[18] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Qn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Zn, [
                    (s(!0), o(W, null, oe(t.status.git_changes.nodes_added, (X) => (s(), o("div", {
                      key: y(X),
                      class: "change-item"
                    }, [
                      e("span", ea, a(y(X)), 1),
                      w(X) ? (s(), o("span", ta, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (G = (F = t.status.git_changes) == null ? void 0 : F.nodes_removed) != null && G.length ? (s(), o("div", sa, [
                  e("div", oa, [
                    k[19] || (k[19] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", na, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", aa, [
                    (s(!0), o(W, null, oe(t.status.git_changes.nodes_removed, (X) => (s(), o("div", {
                      key: y(X),
                      class: "change-item"
                    }, [
                      e("span", la, a(y(X)), 1),
                      w(X) ? (s(), o("span", ia, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (I = t.status.git_changes) != null && I.workflow_changes ? (s(), o("div", ra, [
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
                (R = t.status.git_changes) != null && R.has_other_changes ? (s(), o("div", ma, [...k[21] || (k[21] = [
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
                  b(et, { level: "4" }, {
                    default: i(() => [...k[22] || (k[22] = [
                      h("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: k[3] || (k[3] = (X) => _.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                k[26] || (k[26] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (te = (re = t.status.comparison) == null ? void 0 : re.missing_nodes) != null && te.length ? (s(), o("div", ga, [
                  b(Ne, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", pa, [
                    (s(!0), o(W, null, oe(t.status.comparison.missing_nodes.slice(0, 10), (X) => (s(), o("div", {
                      key: X,
                      class: "drift-list-item"
                    }, " - " + a(X), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", ha, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (ce = (Y = t.status.comparison) == null ? void 0 : Y.extra_nodes) != null && ce.length ? (s(), o("div", ya, [
                  b(Ne, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", wa, [
                    (s(!0), o(W, null, oe(t.status.comparison.extra_nodes.slice(0, 10), (X) => (s(), o("div", {
                      key: X,
                      class: "drift-list-item"
                    }, " - " + a(X), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", ka, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (L = (q = t.status.comparison) == null ? void 0 : q.version_mismatches) != null && L.length ? (s(), o("div", ba, [
                  b(Ne, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  e("div", _a, [
                    (s(!0), o(W, null, oe(t.status.comparison.version_mismatches.slice(0, 10), (X) => (s(), o("div", {
                      key: X.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      h(a(X.name) + ": ", 1),
                      e("span", $a, a(X.actual), 1),
                      k[23] || (k[23] = h(" → ", -1)),
                      e("span", Ca, a(X.expected), 1)
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
                  b(ae, {
                    variant: "warning",
                    loading: t.isRepairing,
                    onClick: k[4] || (k[4] = (X) => _.$emit("repair"))
                  }, {
                    default: i(() => [...k[24] || (k[24] = [
                      h(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  k[25] || (k[25] = e("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ie = (S = t.status.comparison) == null ? void 0 : S.disabled_nodes) != null && ie.length ? (s(), o("div", Ea, [
                b(et, { level: "4" }, {
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
                  (s(!0), o(W, null, oe(t.status.comparison.disabled_nodes.slice(0, 10), (X) => (s(), o("div", {
                    key: X,
                    class: "drift-list-item"
                  }, " • " + a(X), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", Ra, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : d("", !0)
                ])
              ])) : d("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", La, [
                b(et, { level: "4" }, {
                  default: i(() => [...k[29] || (k[29] = [
                    h("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Pa, [
                  k[30] || (k[30] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                k[31] || (k[31] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : d("", !0),
              r.value ? (s(), o("div", za, [...k[32] || (k[32] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : d("", !0)
            ]),
            e("div", Da, [
              b(ae, {
                variant: "secondary",
                onClick: k[5] || (k[5] = (X) => _.$emit("close"))
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
}), Ua = /* @__PURE__ */ ee(Na, [["__scopeId", "data-v-e2b37122"]]), Oa = { class: "health-section-header" }, Ba = { class: "suggestions-content" }, Fa = { class: "suggestions-text" }, Aa = { style: { "margin-top": "var(--cg-space-3)" } }, Va = {
  key: 1,
  class: "no-issues-text"
}, Wa = /* @__PURE__ */ Z({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(t, { expose: c, emit: n }) {
    const l = t, g = $(!1), p = $(!1);
    function u() {
      g.value = !0;
    }
    function v() {
      g.value = !1, m("view-workflows");
    }
    function r() {
      g.value = !1, m("view-nodes");
    }
    const m = n, y = $(!1), w = $(!1);
    function _() {
      w.value = !0, m("repair-environment");
    }
    function k() {
      w.value = !1;
    }
    function T() {
      g.value = !1;
    }
    const A = D(() => {
      const q = l.status.workflows.analyzed || [], L = q.filter(
        (P) => P.unresolved_models_count > 0 || P.ambiguous_models_count > 0
      );
      return L.length === 0 && l.status.missing_models_count > 0 ? q.filter((P) => P.sync_state === "synced") : L;
    });
    function f() {
      const q = A.value;
      q.length !== 0 && (y.value = !0, m("repair-missing-models", q.map((L) => L.name)));
    }
    function C() {
      y.value = !1;
    }
    c({ resetRepairingState: C, resetRepairingEnvironmentState: k, closeDetailModal: T });
    const z = D(() => l.status.workflows.new.length > 0 || l.status.workflows.modified.length > 0 || l.status.workflows.deleted.length > 0), x = D(() => l.status.has_changes), M = D(() => {
      const q = l.status.git_changes;
      return q.nodes_added.length > 0 || q.nodes_removed.length > 0 || q.workflow_changes;
    }), K = D(() => l.status.has_changes || z.value), F = D(() => Object.keys(l.status.git_changes.workflow_changes_detail).length), G = D(() => l.status.git_changes.has_other_changes), I = D(() => {
      var q;
      return ((q = l.status.workflows.analyzed) == null ? void 0 : q.filter((L) => L.status === "broken")) || [];
    }), R = D(() => {
      var q;
      return ((q = l.status.workflows.analyzed) == null ? void 0 : q.filter(
        (L) => L.has_path_sync_issues && !L.has_issues
      )) || [];
    }), N = D(() => I.value.length > 0), re = D(() => N.value || R.value.length > 0 || l.status.missing_models_count > 0 || !l.status.comparison.is_synced || l.status.has_legacy_manager), te = D(() => {
      const q = [];
      return l.status.workflows.new.length > 0 && q.push(`${l.status.workflows.new.length} new`), l.status.workflows.modified.length > 0 && q.push(`${l.status.workflows.modified.length} modified`), l.status.workflows.deleted.length > 0 && q.push(`${l.status.workflows.deleted.length} deleted`), q.length > 0 ? `${q.join(", ")} workflow${q.length === 1 && !q[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Y = D(() => {
      var P, S;
      const q = [], L = l.status.comparison;
      return (P = L.missing_nodes) != null && P.length && q.push(`${L.missing_nodes.length} missing node${L.missing_nodes.length === 1 ? "" : "s"}`), (S = L.extra_nodes) != null && S.length && q.push(`${L.extra_nodes.length} untracked node${L.extra_nodes.length === 1 ? "" : "s"}`), q.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${q.join(" and ")}.`;
    }), ce = D(() => {
      var P, S;
      const q = [], L = l.status.comparison;
      return (P = L.extra_nodes) != null && P.length && (L.extra_nodes.slice(0, 3).forEach((ie) => {
        q.push(`Untracked: ${ie}`);
      }), L.extra_nodes.length > 3 && q.push(`...and ${L.extra_nodes.length - 3} more untracked`)), (S = L.missing_nodes) != null && S.length && (L.missing_nodes.slice(0, 3).forEach((ie) => {
        q.push(`Missing: ${ie}`);
      }), L.missing_nodes.length > 3 && q.push(`...and ${L.missing_nodes.length - 3} more missing`)), q;
    });
    return (q, L) => (s(), o(W, null, [
      b(qe, null, {
        header: i(() => [
          b(Ke, { title: "STATUS" })
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
              b(ae, {
                variant: "primary",
                size: "sm",
                onClick: L[0] || (L[0] = (P) => q.$emit("start-setup"))
              }, {
                default: i(() => [...L[13] || (L[13] = [
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
              b(ae, {
                variant: "primary",
                size: "sm",
                onClick: L[1] || (L[1] = (P) => q.$emit("view-environments"))
              }, {
                default: i(() => [...L[14] || (L[14] = [
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
              b(ae, {
                variant: "primary",
                size: "sm",
                onClick: L[2] || (L[2] = (P) => q.$emit("create-environment"))
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
            onMouseenter: L[4] || (L[4] = (P) => p.value = !0),
            onMouseleave: L[5] || (L[5] = (P) => p.value = !1)
          }, [
            e("div", Oa, [
              b(et, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: i(() => [...L[16] || (L[16] = [
                  h(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              b(co, { name: "fade" }, {
                default: i(() => [
                  p.value ? (s(), E(ae, {
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
                t.status.workflows.new.length ? (s(), E(ut, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.modified.length ? (s(), E(ut, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.deleted.length ? (s(), E(ut, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : d("", !0),
                b(ut, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: z.value
                }, null, 8, ["count", "separator"])
              ]),
              right: i(() => [
                t.status.git_changes.nodes_added.length ? (s(), E(ut, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), E(ut, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.workflow_changes ? (s(), E(ut, {
                  key: 2,
                  icon: "●",
                  count: F.value,
                  label: F.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : d("", !0),
                G.value ? (s(), E(ut, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : d("", !0),
                x.value && !M.value && !G.value ? (s(), E(ut, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : d("", !0),
                x.value ? d("", !0) : (s(), E(ut, {
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
                  L[19] || (L[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Ba, [
                    e("span", Fa, a(te.value), 1),
                    b(ae, {
                      variant: "primary",
                      size: "sm",
                      onClick: L[3] || (L[3] = (P) => q.$emit("commit-changes"))
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
          t.status.is_detached_head ? (s(), E(nt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: i(() => [
              b(ae, {
                variant: "primary",
                size: "sm",
                onClick: L[6] || (L[6] = (P) => q.$emit("create-branch"))
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
            b(et, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...L[21] || (L[21] = [
                h(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            re.value ? (s(), o(W, { key: 0 }, [
              I.value.length > 0 ? (s(), E(nt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${I.value.length} workflow${I.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: I.value.map((P) => `${P.name} — ${P.issue_summary}`)
              }, {
                actions: i(() => [
                  b(ae, {
                    variant: "primary",
                    size: "sm",
                    onClick: L[7] || (L[7] = (P) => q.$emit("view-workflows"))
                  }, {
                    default: i(() => [...L[22] || (L[22] = [
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
                  b(ae, {
                    variant: "primary",
                    size: "sm",
                    onClick: L[8] || (L[8] = (P) => q.$emit("view-workflows"))
                  }, {
                    default: i(() => [...L[23] || (L[23] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              t.status.missing_models_count > 0 && !N.value ? (s(), E(nt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: i(() => [
                  b(ae, {
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
                  b(ae, {
                    variant: "secondary",
                    size: "sm",
                    onClick: L[9] || (L[9] = (P) => q.$emit("view-workflows"))
                  }, {
                    default: i(() => [...L[24] || (L[24] = [
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
                description: Y.value,
                items: ce.value
              }, {
                actions: i(() => [
                  b(ae, {
                    variant: "secondary",
                    size: "sm",
                    onClick: u
                  }, {
                    default: i(() => [...L[25] || (L[25] = [
                      h(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  b(ae, {
                    variant: "primary",
                    size: "sm",
                    onClick: L[10] || (L[10] = (P) => q.$emit("view-nodes"))
                  }, {
                    default: i(() => [...L[26] || (L[26] = [
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
                  b(ae, {
                    variant: "primary",
                    size: "sm",
                    onClick: L[11] || (L[11] = (P) => q.$emit("view-nodes"))
                  }, {
                    default: i(() => [...L[27] || (L[27] = [
                      h(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : d("", !0)
            ], 64)) : K.value ? (s(), o("span", Va, "No issues")) : (s(), E(it, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      b(Ua, {
        show: g.value,
        status: t.status,
        "is-repairing": w.value,
        onClose: L[12] || (L[12] = (P) => g.value = !1),
        onNavigateWorkflows: v,
        onNavigateNodes: r,
        onRepair: _
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), Ga = /* @__PURE__ */ ee(Wa, [["__scopeId", "data-v-55fcd77f"]]), ja = ["type", "value", "placeholder", "disabled"], Ha = /* @__PURE__ */ Z({
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
    const l = t, g = n, p = $(null);
    function u(v) {
      const r = v.target.value;
      g("update:modelValue", r);
    }
    return Ue(() => {
      l.autoFocus && p.value && p.value.focus();
    }), c({
      focus: () => {
        var v;
        return (v = p.value) == null ? void 0 : v.focus();
      },
      blur: () => {
        var v;
        return (v = p.value) == null ? void 0 : v.blur();
      }
    }), (v, r) => (s(), o("input", {
      ref_key: "inputRef",
      ref: p,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: me(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: u,
      onKeyup: [
        r[0] || (r[0] = yt((m) => v.$emit("enter"), ["enter"])),
        r[1] || (r[1] = yt((m) => v.$emit("escape"), ["escape"]))
      ],
      onFocus: r[2] || (r[2] = (m) => v.$emit("focus")),
      onBlur: r[3] || (r[3] = (m) => v.$emit("blur"))
    }, null, 42, ja));
  }
}), Qt = /* @__PURE__ */ ee(Ha, [["__scopeId", "data-v-0380d08f"]]), qa = { class: "branch-create-form" }, Ka = { class: "form-actions" }, Ja = /* @__PURE__ */ Z({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, l = $(""), g = D(() => {
      const v = l.value.trim();
      return v.length > 0 && !v.startsWith("-") && !v.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(v);
    });
    function p() {
      g.value && (n("create", l.value.trim()), l.value = "");
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
        onEnter: p,
        onEscape: u
      }, null, 8, ["modelValue"]),
      e("div", Ka, [
        b(ae, {
          variant: "primary",
          size: "sm",
          disabled: !g.value,
          onClick: p
        }, {
          default: i(() => [...r[1] || (r[1] = [
            h(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        b(ae, {
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
}), Ya = /* @__PURE__ */ ee(Ja, [["__scopeId", "data-v-7c500394"]]), Xa = { class: "branch-list-item__indicator" }, Qa = { class: "branch-list-item__name" }, Za = {
  key: 0,
  class: "branch-list-item__actions"
}, el = {
  key: 0,
  class: "branch-list-item__current-label"
}, tl = /* @__PURE__ */ Z({
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
}), sl = /* @__PURE__ */ ee(tl, [["__scopeId", "data-v-c6581a24"]]), ol = {
  key: 2,
  class: "branch-list"
}, nl = /* @__PURE__ */ Z({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: c }) {
    const n = c, l = $(!1);
    function g(u) {
      n("create", u), p();
    }
    function p() {
      l.value = !1;
    }
    return (u, v) => (s(), E(qe, null, {
      header: i(() => [
        b(Ke, { title: "BRANCHES" }, {
          actions: i(() => [
            l.value ? d("", !0) : (s(), E(ae, {
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
          onCreate: g,
          onCancel: p
        })) : d("", !0),
        t.branches.length === 0 ? (s(), E(it, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", ol, [
          (s(!0), o(W, null, oe(t.branches, (r) => (s(), E(sl, {
            key: r.name,
            "branch-name": r.name,
            "is-current": r.is_current
          }, {
            actions: i(() => [
              r.is_current ? d("", !0) : (s(), E(ae, {
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
              r.is_current ? d("", !0) : (s(), E(ae, {
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
}), al = /* @__PURE__ */ ee(nl, [["__scopeId", "data-v-86784ddd"]]), ll = { class: "commit-list" }, il = /* @__PURE__ */ Z({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (s(), o("div", ll, [
      $e(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), rl = /* @__PURE__ */ ee(il, [["__scopeId", "data-v-8c5ee761"]]), dl = { class: "commit-hash" }, cl = /* @__PURE__ */ Z({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = D(() => c.hash.slice(0, c.length));
    return (l, g) => (s(), o("span", dl, a(n.value), 1));
  }
}), zs = /* @__PURE__ */ ee(cl, [["__scopeId", "data-v-7c333cc6"]]), ul = { class: "commit-message" }, ml = { class: "commit-date" }, vl = /* @__PURE__ */ Z({
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
    function g() {
      n.clickable && l("click");
    }
    return (p, u) => (s(), o("div", {
      class: me(["commit-item", { clickable: t.clickable }]),
      onClick: g
    }, [
      b(zs, { hash: t.hash }, null, 8, ["hash"]),
      e("span", ul, a(t.message), 1),
      e("span", ml, a(t.relativeDate), 1),
      p.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = Pe(() => {
        }, ["stop"]))
      }, [
        $e(p.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), fl = /* @__PURE__ */ ee(vl, [["__scopeId", "data-v-dd7c621b"]]), gl = /* @__PURE__ */ Z({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (s(), E(qe, null, {
      header: i(() => [
        b(Ke, { title: "HISTORY" })
      ]),
      content: i(() => [
        t.commits.length === 0 ? (s(), E(it, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), E(rl, { key: 1 }, {
          default: i(() => [
            (s(!0), o(W, null, oe(t.commits, (l) => (s(), E(fl, {
              key: l.hash,
              hash: l.short_hash || l.hash,
              message: l.message,
              "relative-date": l.date_relative || l.relative_date,
              onClick: (g) => c.$emit("select", l)
            }, {
              actions: i(() => [
                b(ae, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (g) => c.$emit("checkout", l),
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
}), pl = /* @__PURE__ */ ee(gl, [["__scopeId", "data-v-981c3c64"]]), e2 = ts({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const t2 = [
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
], s2 = {
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
], o2 = [
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
  async function n(H, de) {
    var Re;
    if (!((Re = window.app) != null && Re.api))
      throw new Error("ComfyUI API not available");
    const we = await window.app.api.fetchApi(H, de);
    if (!we.ok) {
      const Qe = await we.json().catch(() => ({}));
      throw new Error(Qe.error || Qe.message || `Request failed: ${we.status}`);
    }
    return we.json();
  }
  async function l(H = !1) {
    return n(H ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function g(H, de = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: H, allow_issues: de })
    });
  }
  async function p(H = 10, de = 0) {
    return n(`/v2/comfygit/log?limit=${H}&offset=${de}`);
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
  async function w(H, de = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: H, force: de })
    });
  }
  async function _(H, de = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, start_point: de })
    });
  }
  async function k(H, de = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: H, force: de })
    });
  }
  async function T(H, de = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(H)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: de })
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
  async function f(H, de) {
    const we = { target_env: H };
    return de && (we.workspace_path = de), n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(we)
    });
  }
  async function C() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function z(H) {
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
  async function K(H) {
    return n(`/v2/workspace/environments/${H}`, {
      method: "DELETE"
    });
  }
  async function F(H = !1) {
    try {
      return n(H ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const de = await l(H), we = [];
      return de.workflows.new.forEach((Re) => {
        we.push({ name: Re, status: "new", missing_nodes: 0, missing_models: 0, path: Re });
      }), de.workflows.modified.forEach((Re) => {
        we.push({ name: Re, status: "modified", missing_nodes: 0, missing_models: 0, path: Re });
      }), de.workflows.synced.forEach((Re) => {
        we.push({ name: Re, status: "synced", missing_nodes: 0, missing_models: 0, path: Re });
      }), we;
    }
  }
  async function G(H) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/details`);
  }
  async function I(H) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/resolve`, {
      method: "POST"
    });
  }
  async function R(H, de, we) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: de, install_models: we })
    });
  }
  async function N(H, de, we) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: de, importance: we })
    });
  }
  async function re() {
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
  async function ce(H) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function q(H, de) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: de })
    });
  }
  async function L(H, de) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: de })
    });
  }
  async function P(H) {
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
  async function ie() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function X() {
    return n("/v2/workspace/models/directory");
  }
  async function Ie(H) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function be(H) {
    try {
      const de = H ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(H)}` : "/v2/comfygit/config";
      return n(de);
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
  async function Te(H, de) {
    const we = de ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(de)}` : "/v2/comfygit/config";
    return n(we, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function Le(H, de) {
    try {
      const we = new URLSearchParams();
      return H && we.append("level", H), de && we.append("lines", de.toString()), n(`/v2/comfygit/debug/logs?${we}`);
    } catch {
      return [];
    }
  }
  async function ue(H, de) {
    try {
      const we = new URLSearchParams();
      return H && we.append("level", H), de && we.append("lines", de.toString()), n(`/v2/workspace/debug/logs?${we}`);
    } catch {
      return [];
    }
  }
  async function ve() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function Ee() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function Q(H) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
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
  async function he(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/track-dev`, {
      method: "POST"
    });
  }
  async function ze(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/install`, {
      method: "POST"
    });
  }
  async function tt(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/update`, {
      method: "POST"
    });
  }
  async function rt(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function xe() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Xe(H, de) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, url: de })
    });
  }
  async function Ge(H) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function je(H, de, we) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: de, push_url: we })
    });
  }
  async function ft(H) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/fetch`, {
      method: "POST"
    });
  }
  async function ye(H) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/status`);
    } catch {
      return null;
    }
  }
  async function Ae(H = "skip", de = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: H,
        remove_extra_nodes: de
      })
    });
  }
  async function dt(H, de) {
    const we = de ? `/v2/comfygit/remotes/${encodeURIComponent(H)}/pull-preview?branch=${encodeURIComponent(de)}` : `/v2/comfygit/remotes/${encodeURIComponent(H)}/pull-preview`;
    return n(we);
  }
  async function st(H, de = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: de.modelStrategy || "skip",
        force: de.force || !1,
        resolutions: de.resolutions
      })
    });
  }
  async function le(H, de) {
    const we = de ? `/v2/comfygit/remotes/${encodeURIComponent(H)}/push-preview?branch=${encodeURIComponent(de)}` : `/v2/comfygit/remotes/${encodeURIComponent(H)}/push-preview`;
    return n(we);
  }
  async function J(H, de = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: de.force || !1 })
    });
  }
  async function Me(H, de) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: de })
    });
  }
  async function O(H) {
    const de = {
      success: 0,
      failed: []
    };
    for (const we of H)
      try {
        await I(we), de.success++;
      } catch (Re) {
        de.failed.push({
          name: we,
          error: Re instanceof Error ? Re.message : "Unknown error"
        });
      }
    return de;
  }
  async function B(H) {
    var Re;
    const de = new FormData();
    if (de.append("file", H), !((Re = window.app) != null && Re.api))
      throw new Error("ComfyUI API not available");
    const we = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: de
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!we.ok) {
      const Qe = await we.json().catch(() => ({}));
      throw new Error(Qe.error || `Preview failed: ${we.status}`);
    }
    return we.json();
  }
  async function V(H) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(H)}`
    );
  }
  async function se(H, de, we, Re) {
    var Ht;
    const Qe = new FormData();
    if (Qe.append("file", H), Qe.append("name", de), Qe.append("model_strategy", we), Qe.append("torch_backend", Re), !((Ht = window.app) != null && Ht.api))
      throw new Error("ComfyUI API not available");
    const It = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Qe
    });
    if (!It.ok) {
      const qt = await It.json().catch(() => ({}));
      throw new Error(qt.message || qt.error || `Import failed: ${It.status}`);
    }
    return It.json();
  }
  async function pe() {
    return n("/v2/workspace/import/status");
  }
  async function ct(H) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: H })
    });
  }
  async function gt(H, de, we, Re) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: H,
        name: de,
        model_strategy: we,
        torch_backend: Re
      })
    });
  }
  async function ot() {
    return n("/v2/setup/status");
  }
  async function xt(H) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function pt() {
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
    commit: g,
    getHistory: p,
    exportEnv: u,
    validateExport: v,
    exportEnvWithForce: r,
    // Git Operations
    getBranches: m,
    getCommitDetail: y,
    checkout: w,
    createBranch: _,
    switchBranch: k,
    deleteBranch: T,
    // Environment Management
    getEnvironments: A,
    switchEnvironment: f,
    getSwitchProgress: C,
    createEnvironment: z,
    getCreateProgress: x,
    getComfyUIReleases: M,
    deleteEnvironment: K,
    // Workflow Management
    getWorkflows: F,
    getWorkflowDetails: G,
    resolveWorkflow: I,
    installWorkflowDeps: R,
    setModelImportance: N,
    // Model Management
    getEnvironmentModels: re,
    getWorkspaceModels: te,
    getModelDetails: Y,
    openFileLocation: ce,
    addModelSource: q,
    removeModelSource: L,
    deleteModel: P,
    downloadModel: S,
    scanWorkspaceModels: ie,
    getModelsDirectory: X,
    setModelsDirectory: Ie,
    // Settings
    getConfig: be,
    updateConfig: Te,
    // Debug/Logs
    getEnvironmentLogs: Le,
    getWorkspaceLogs: ue,
    getEnvironmentLogPath: ve,
    getWorkspaceLogPath: Ee,
    openFile: Q,
    // Node Management
    getNodes: ne,
    trackNodeAsDev: he,
    installNode: ze,
    updateNode: tt,
    uninstallNode: rt,
    // Git Remotes
    getRemotes: xe,
    addRemote: Xe,
    removeRemote: Ge,
    updateRemoteUrl: je,
    fetchRemote: ft,
    getRemoteSyncStatus: ye,
    // Push/Pull
    getPullPreview: dt,
    pullFromRemote: st,
    getPushPreview: le,
    pushToRemote: J,
    validateMerge: Me,
    // Environment Sync
    syncEnvironmentManually: Ae,
    // Workflow Repair
    repairWorkflowModels: O,
    // Import Operations
    previewTarballImport: B,
    previewGitImport: ct,
    validateEnvironmentName: V,
    executeImport: se,
    executeGitImport: gt,
    getImportProgress: pe,
    // First-Time Setup
    getSetupStatus: ot,
    initializeWorkspace: xt,
    getInitializeProgress: pt,
    validatePath: St
  };
}
async function Nt(t, c = {}, n = 5e3) {
  const l = new AbortController(), g = setTimeout(() => l.abort(), n);
  try {
    const p = await fetch(t, {
      ...c,
      signal: l.signal
    });
    return clearTimeout(g), p;
  } catch (p) {
    throw clearTimeout(g), p.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : p;
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
  async function g() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await Nt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function p() {
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
    restart: g,
    kill: p
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
}, Cl = /* @__PURE__ */ Z({
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
    function g() {
      n.closeOnOverlayClick && l("close");
    }
    function p(u) {
      u.key === "Escape" && n.showCloseButton && l("close");
    }
    return Ue(() => {
      document.addEventListener("keydown", p), document.body.style.overflow = "hidden";
    }), Ls(() => {
      document.removeEventListener("keydown", p), document.body.style.overflow = "";
    }), (u, v) => (s(), E(Ve, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: g
      }, [
        e("div", {
          class: me(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: v[1] || (v[1] = Pe(() => {
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
}), Je = /* @__PURE__ */ ee(Cl, [["__scopeId", "data-v-8dab1081"]]), xl = ["type", "disabled"], Sl = {
  key: 0,
  class: "spinner"
}, Il = /* @__PURE__ */ Z({
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
}), fe = /* @__PURE__ */ ee(Il, [["__scopeId", "data-v-f3452606"]]), El = {
  key: 0,
  class: "base-title-count"
}, Ml = /* @__PURE__ */ Z({
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
        $e(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", El, "(" + a(t.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ft = /* @__PURE__ */ ee(Ml, [["__scopeId", "data-v-5a01561d"]]), Tl = ["value", "disabled"], Rl = {
  key: 0,
  value: "",
  disabled: ""
}, Ll = ["value"], Pl = {
  key: 0,
  class: "base-select-error"
}, zl = /* @__PURE__ */ Z({
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
    return (l, g) => (s(), o("div", {
      class: me(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: me(["base-select", { error: !!t.error }]),
        onChange: g[0] || (g[0] = (p) => l.$emit("update:modelValue", p.target.value))
      }, [
        t.placeholder ? (s(), o("option", Rl, a(t.placeholder), 1)) : d("", !0),
        (s(!0), o(W, null, oe(t.options, (p) => (s(), o("option", {
          key: c(p),
          value: c(p)
        }, a(n(p)), 9, Ll))), 128))
      ], 42, Tl),
      t.error ? (s(), o("span", Pl, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), Dl = /* @__PURE__ */ ee(zl, [["__scopeId", "data-v-7436d745"]]), Nl = { class: "popover-header" }, Ul = { class: "popover-title" }, Ol = { class: "popover-content" }, Bl = {
  key: 0,
  class: "popover-actions"
}, Fl = /* @__PURE__ */ Z({
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
          style: wt({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = Pe(() => {
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
}), vt = /* @__PURE__ */ ee(Fl, [["__scopeId", "data-v-42815ace"]]), Al = { class: "detail-section" }, Vl = {
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
}, ii = /* @__PURE__ */ Z({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, l = c, { getWorkflowDetails: g, setModelImportance: p, openFileLocation: u } = Fe(), v = $(null), r = $(!1), m = $(null), y = $(!1), w = $({}), _ = $(!1), k = $(/* @__PURE__ */ new Set()), T = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function A(I) {
      switch (I) {
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
    function f(I) {
      switch (I) {
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
    function C(I) {
      if (!I.loaded_by || I.loaded_by.length === 0) return [];
      const R = I.hash || I.filename;
      return k.value.has(R) ? I.loaded_by : I.loaded_by.slice(0, 3);
    }
    function z(I) {
      return k.value.has(I);
    }
    function x(I) {
      k.value.has(I) ? k.value.delete(I) : k.value.add(I), k.value = new Set(k.value);
    }
    async function M() {
      r.value = !0, m.value = null;
      try {
        v.value = await g(n.workflowName);
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to load workflow details";
      } finally {
        r.value = !1;
      }
    }
    function K(I, R) {
      w.value[I] = R, y.value = !0;
    }
    async function F(I) {
      try {
        await u(I);
      } catch (R) {
        m.value = R instanceof Error ? R.message : "Failed to open file location";
      }
    }
    async function G() {
      if (!y.value) {
        l("close");
        return;
      }
      r.value = !0, m.value = null;
      try {
        for (const [I, R] of Object.entries(w.value))
          await p(n.workflowName, I, R);
        l("refresh"), l("close");
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to save changes";
      } finally {
        r.value = !1;
      }
    }
    return Ue(M), (I, R) => (s(), o(W, null, [
      b(Je, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: r.value,
        error: m.value || void 0,
        onClose: R[4] || (R[4] = (N) => l("close"))
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
              (s(!0), o(W, null, oe(v.value.models, (N) => {
                var re;
                return s(), o("div", {
                  key: N.hash || N.filename,
                  class: "model-card"
                }, [
                  e("div", Wl, [
                    R[6] || (R[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", Gl, a(N.filename), 1)
                  ]),
                  e("div", jl, [
                    e("div", Hl, [
                      R[7] || (R[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: me(["value", A(N.status)])
                      }, a(f(N.status)), 3)
                    ]),
                    e("div", ql, [
                      e("span", Kl, [
                        R[8] || (R[8] = h(" Importance: ", -1)),
                        b(Ps, {
                          size: 14,
                          title: "About importance levels",
                          onClick: R[0] || (R[0] = (te) => _.value = !0)
                        })
                      ]),
                      b(Dl, {
                        "model-value": w.value[N.filename] || N.importance,
                        options: T,
                        "onUpdate:modelValue": (te) => K(N.filename, te)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    N.loaded_by && N.loaded_by.length > 0 ? (s(), o("div", Jl, [
                      R[9] || (R[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", Yl, [
                        (s(!0), o(W, null, oe(C(N), (te, Y) => (s(), o("div", {
                          key: `${te.node_id}-${Y}`,
                          class: "node-reference"
                        }, a(te.node_type) + " (Node #" + a(te.node_id) + ") ", 1))), 128)),
                        N.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (te) => x(N.hash || N.filename)
                        }, a(z(N.hash || N.filename) ? "▼ Show less" : `▶ View all (${N.loaded_by.length})`), 9, Xl)) : d("", !0)
                      ])
                    ])) : d("", !0),
                    N.size_mb ? (s(), o("div", Ql, [
                      R[10] || (R[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", Zl, a(N.size_mb) + " MB", 1)
                    ])) : d("", !0),
                    N.has_category_mismatch ? (s(), o("div", ei, [
                      R[13] || (R[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", ti, [
                        R[11] || (R[11] = h(" In ", -1)),
                        e("code", null, a(N.actual_category) + "/", 1),
                        R[12] || (R[12] = h(" but loader needs ", -1)),
                        e("code", null, a((re = N.expected_categories) == null ? void 0 : re[0]) + "/", 1)
                      ])
                    ])) : d("", !0)
                  ]),
                  N.status !== "available" ? (s(), o("div", si, [
                    N.status === "downloadable" ? (s(), E(fe, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: R[1] || (R[1] = (te) => l("resolve"))
                    }, {
                      default: i(() => [...R[14] || (R[14] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    })) : N.status === "category_mismatch" && N.file_path ? (s(), E(fe, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => F(N.file_path)
                    }, {
                      default: i(() => [...R[15] || (R[15] = [
                        h(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : N.status !== "path_mismatch" ? (s(), E(fe, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: R[2] || (R[2] = (te) => l("resolve"))
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
              b(Ft, { variant: "section" }, {
                default: i(() => [
                  h("NODES USED (" + a(v.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.nodes.length === 0 ? (s(), o("div", ni, " No custom nodes used in this workflow ")) : d("", !0),
              (s(!0), o(W, null, oe(v.value.nodes, (N) => (s(), o("div", {
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
        footer: i(() => [
          b(fe, {
            variant: "secondary",
            onClick: R[3] || (R[3] = (N) => l("close"))
          }, {
            default: i(() => [...R[17] || (R[17] = [
              h(" Close ", -1)
            ])]),
            _: 1
          }),
          y.value ? (s(), E(fe, {
            key: 0,
            variant: "primary",
            onClick: G
          }, {
            default: i(() => [...R[18] || (R[18] = [
              h(" Save Changes ", -1)
            ])]),
            _: 1
          })) : d("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      b(vt, {
        show: _.value,
        title: "Model Importance Levels",
        onClose: R[5] || (R[5] = (N) => _.value = !1)
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
}), ri = /* @__PURE__ */ ee(ii, [["__scopeId", "data-v-668728e6"]]), Se = ts({
  items: [],
  status: "idle"
});
let mt = null;
function Ns() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function ss(t) {
  return Se.items.find((c) => c.id === t);
}
async function Mt() {
  if (Se.status === "downloading") return;
  const t = Se.items.find((c) => c.status === "queued");
  if (!t) {
    Se.status = "idle";
    return;
  }
  Se.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await di(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    Se.status = "idle", Mt();
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
    }), g = new EventSource(`/v2/comfygit/models/download-stream?${l}`);
    mt = g;
    let p = Date.now(), u = 0, v = !1;
    g.onmessage = (r) => {
      try {
        const m = JSON.parse(r.data);
        switch (m.type) {
          case "progress":
            t.downloaded = m.downloaded || 0, t.size = m.total || t.size;
            const y = Date.now(), w = (y - p) / 1e3;
            if (w > 0.5) {
              const _ = t.downloaded - u;
              if (t.speed = _ / w, p = y, u = t.downloaded, t.speed > 0 && t.size > 0) {
                const k = t.size - t.downloaded;
                t.eta = k / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            v = !0, g.close(), mt = null, c();
            break;
          case "error":
            v = !0, g.close(), mt = null, n(new Error(m.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, g.onerror = () => {
      g.close(), mt = null, v || n(new Error("Connection lost"));
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
      if (Se.items.some((g) => g.url === n.url && g.filename === n.filename))
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
      Se.items.push(l);
    }
    console.log(`[ComfyGit] Loaded ${c.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Gt() {
  function t(f) {
    for (const C of f) {
      if (Se.items.some(
        (M) => M.url === C.url && M.targetPath === C.targetPath && ["queued", "downloading", "paused", "completed"].includes(M.status)
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
      Se.items.push(x);
    }
    Se.status === "idle" && Mt();
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
        mt && (mt.close(), mt = null), C.status = "failed", C.error = "Cancelled by user", Se.status = "idle", Mt();
      } else if (C.status === "queued") {
        const z = Se.items.findIndex((x) => x.id === f);
        z >= 0 && Se.items.splice(z, 1);
      }
    }
  }
  function n(f) {
    const C = ss(f);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, Se.status === "idle" && Mt());
  }
  function l(f) {
    const C = ss(f);
    !C || C.status !== "paused" || (C.status = "queued", Se.status === "idle" && Mt());
  }
  function g() {
    const f = Se.items.filter((C) => C.status === "paused");
    for (const C of f)
      C.status = "queued";
    Se.status === "idle" && Mt();
  }
  function p(f) {
    const C = Se.items.findIndex((z) => z.id === f);
    C >= 0 && ["completed", "failed", "paused"].includes(Se.items[C].status) && Se.items.splice(C, 1);
  }
  function u() {
    Se.items = Se.items.filter((f) => f.status !== "completed");
  }
  function v() {
    Se.items = Se.items.filter((f) => f.status !== "failed");
  }
  const r = D(
    () => Se.items.find((f) => f.status === "downloading")
  ), m = D(
    () => Se.items.filter((f) => f.status === "queued")
  ), y = D(
    () => Se.items.filter((f) => f.status === "completed")
  ), w = D(
    () => Se.items.filter((f) => f.status === "failed")
  ), _ = D(
    () => Se.items.filter((f) => f.status === "paused")
  ), k = D(() => Se.items.length > 0), T = D(
    () => Se.items.filter((f) => f.status === "queued" || f.status === "downloading").length
  ), A = D(
    () => Se.items.some((f) => f.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: uo(Se),
    // Computed
    currentDownload: r,
    queuedItems: m,
    completedItems: y,
    failedItems: w,
    pausedItems: _,
    hasItems: k,
    activeCount: T,
    hasPaused: A,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: l,
    resumeAllPaused: g,
    removeItem: p,
    clearCompleted: u,
    clearFailed: v,
    loadPendingDownloads: ci
  };
}
function Us() {
  const t = $(null), c = $(null), n = $([]), l = $([]), g = $(!1), p = $(null);
  async function u(z, x) {
    var K;
    if (!((K = window.app) != null && K.api))
      throw new Error("ComfyUI API not available");
    const M = await window.app.api.fetchApi(z, x);
    if (!M.ok) {
      const F = await M.json().catch(() => ({})), G = F.error || F.message || `Request failed: ${M.status}`;
      throw new Error(G);
    }
    return M.json();
  }
  async function v(z) {
    g.value = !0, p.value = null;
    try {
      let x;
      return Dt() || (x = await u(
        `/v2/comfygit/workflow/${z}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = x, x;
    } catch (x) {
      const M = x instanceof Error ? x.message : "Unknown error occurred";
      throw p.value = M, x;
    } finally {
      g.value = !1;
    }
  }
  async function r(z, x, M, K) {
    g.value = !0, p.value = null;
    try {
      let F;
      if (!Dt()) {
        const G = Object.fromEntries(x), I = Object.fromEntries(M), R = K ? Array.from(K) : [];
        F = await u(
          `/v2/comfygit/workflow/${z}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: G,
              model_choices: I,
              skipped_packages: R
            })
          }
        );
      }
      return c.value = F, F;
    } catch (F) {
      const G = F instanceof Error ? F.message : "Unknown error occurred";
      throw p.value = G, F;
    } finally {
      g.value = !1;
    }
  }
  async function m(z, x = 10) {
    g.value = !0, p.value = null;
    try {
      let M;
      return Dt() || (M = await u(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: z, limit: x })
        }
      )), n.value = M.results, M.results;
    } catch (M) {
      const K = M instanceof Error ? M.message : "Unknown error occurred";
      throw p.value = K, M;
    } finally {
      g.value = !1;
    }
  }
  async function y(z, x = 10) {
    g.value = !0, p.value = null;
    try {
      let M;
      return Dt() || (M = await u(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: z, limit: x })
        }
      )), l.value = M.results, M.results;
    } catch (M) {
      const K = M instanceof Error ? M.message : "Unknown error occurred";
      throw p.value = K, M;
    } finally {
      g.value = !1;
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
  async function k(z) {
    w.phase = "installing", w.nodesInstalled = [], w.installError = void 0, w.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Dt(), await T(z);
    } catch (x) {
      const M = x instanceof Error ? x.message : "Failed to install nodes";
      throw w.installError = M, x;
    }
  }
  async function T(z) {
    var M;
    const x = await u(
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
      const K = new Map(((M = x.failed) == null ? void 0 : M.map((F) => [F.node_id, F.error])) || []);
      for (let F = 0; F < w.nodesToInstall.length; F++) {
        const G = w.nodesToInstall[F], I = K.get(G);
        w.nodeInstallProgress.completedNodes.push({
          node_id: G,
          success: !I,
          error: I
        });
      }
    }
    return w.nodesInstalled = x.nodes_installed, w.needsRestart = x.nodes_installed.length > 0, x.failed && x.failed.length > 0 && (w.installError = `${x.failed.length} package(s) failed to install`), x;
  }
  async function A(z, x, M) {
    _(), w.phase = "resolving", p.value = null;
    const K = Object.fromEntries(x), F = Object.fromEntries(M);
    try {
      const G = await fetch(`/v2/comfygit/workflow/${z}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: K,
          model_choices: F
        })
      });
      if (!G.ok)
        throw new Error(`Request failed: ${G.status}`);
      if (!G.body)
        throw new Error("No response body");
      const I = G.body.getReader(), R = new TextDecoder();
      let N = "";
      for (; ; ) {
        const { done: re, value: te } = await I.read();
        if (re) break;
        N += R.decode(te, { stream: !0 });
        const Y = N.split(`

`);
        N = Y.pop() || "";
        for (const ce of Y) {
          if (!ce.trim()) continue;
          const q = ce.split(`
`);
          let L = "", P = "";
          for (const S of q)
            S.startsWith("event: ") ? L = S.slice(7) : S.startsWith("data: ") && (P = S.slice(6));
          if (P)
            try {
              const S = JSON.parse(P);
              f(L, S);
            } catch (S) {
              console.warn("Failed to parse SSE event:", S);
            }
        }
      }
    } catch (G) {
      const I = G instanceof Error ? G.message : "Unknown error occurred";
      throw p.value = I, w.error = I, w.phase = "error", G;
    }
  }
  function f(z, x) {
    switch (z) {
      case "batch_start":
        w.phase = "downloading", w.totalFiles = x.total;
        break;
      case "file_start":
        w.currentFile = x.filename, w.currentFileIndex = x.index, w.bytesDownloaded = 0, w.bytesTotal = void 0;
        break;
      case "file_progress":
        w.bytesDownloaded = x.downloaded, w.bytesTotal = x.total;
        break;
      case "file_complete":
        w.completedFiles.push({
          filename: x.filename,
          success: x.success,
          error: x.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        w.nodesToInstall = x.nodes_to_install || [], x.download_results && (w.completedFiles = x.download_results), w.phase = "complete";
        break;
      case "error":
        w.error = x.message, w.phase = "error", p.value = x.message;
        break;
    }
  }
  function C(z, x) {
    const { addToQueue: M } = Gt(), K = x.filter((F) => F.url && F.target_path).map((F) => ({
      workflow: z,
      filename: F.filename,
      url: F.url,
      targetPath: F.target_path,
      size: F.size || 0,
      type: "model"
    }));
    return K.length > 0 && M(K), K.length;
  }
  return {
    // State
    result: t,
    appliedResult: c,
    searchResults: n,
    modelSearchResults: l,
    isLoading: g,
    error: p,
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
}, yi = { class: "stepper-content" }, wi = /* @__PURE__ */ Z({
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
    function g(m) {
      var y;
      if ((y = n.stepStats) != null && y[m]) {
        const w = n.stepStats[m];
        return w.total > 0 && w.resolved === w.total;
      }
      return n.completedSteps.includes(m);
    }
    function p(m) {
      var y;
      if ((y = n.stepStats) != null && y[m]) {
        const w = n.stepStats[m];
        return w.resolved > 0 && w.resolved < w.total;
      }
      return !1;
    }
    function u(m) {
      return g(m) ? "state-complete" : p(m) ? "state-partial" : "state-pending";
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
            completed: g(w.id),
            "in-progress": p(w.id),
            disabled: v(w.id)
          }]),
          onClick: (k) => r(w.id)
        }, [
          e("div", {
            class: me(["step-indicator", u(w.id)])
          }, [
            g(w.id) ? (s(), o("span", fi, "✓")) : (s(), o("span", gi, a(_ + 1), 1))
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
}), ki = /* @__PURE__ */ ee(wi, [["__scopeId", "data-v-2a7b3af8"]]), bi = /* @__PURE__ */ Z({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = D(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), l = D(() => `confidence-${n.value}`), g = D(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (p, u) => (s(), o("span", {
      class: me(["confidence-badge", l.value, t.size])
    }, a(g.value), 3));
  }
}), Zt = /* @__PURE__ */ ee(bi, [["__scopeId", "data-v-17ec4b80"]]), _i = { class: "node-info" }, $i = { class: "node-info-text" }, Ci = { class: "item-body" }, xi = {
  key: 0,
  class: "resolved-state"
}, Si = {
  key: 1,
  class: "multiple-options"
}, Ii = { class: "options-list" }, Ei = ["onClick"], Mi = ["name", "value", "checked", "onChange"], Ti = { class: "option-content" }, Ri = { class: "option-header" }, Li = { class: "option-package-id" }, Pi = {
  key: 0,
  class: "option-title"
}, zi = { class: "option-meta" }, Di = {
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
}, Ji = { class: "action-buttons" }, Yi = /* @__PURE__ */ Z({
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
    function g(r, m = 80) {
      return r.length <= m ? r : r.slice(0, m - 3) + "...";
    }
    const p = D(() => !!n.choice);
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
      l("option-selected", r);
    }
    return (r, m) => (s(), o("div", {
      class: me(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: p.value }])
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
        p.value ? (s(), o("div", xi, [
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
                  e("span", Li, a(y.package_id), 1),
                  b(Zt, {
                    confidence: y.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                y.title && y.title !== y.package_id ? (s(), o("div", Pi, a(y.title), 1)) : d("", !0),
                e("div", zi, [
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
                  y.description ? (s(), o("div", ji, a(g(y.description)), 1)) : d("", !0),
                  e("div", Hi, [
                    y.is_installed ? (s(), o("span", qi, "Already Installed")) : d("", !0)
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
}), Xi = /* @__PURE__ */ ee(Yi, [["__scopeId", "data-v-c2997d1d"]]), Qi = { class: "item-navigator" }, Zi = { class: "nav-item-info" }, er = ["title"], tr = { class: "nav-controls" }, sr = { class: "nav-arrows" }, or = ["disabled"], nr = ["disabled"], ar = { class: "nav-position" }, lr = /* @__PURE__ */ Z({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const n = c;
    return (l, g) => (s(), o("div", Qi, [
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
            onClick: g[0] || (g[0] = (p) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, or),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: g[1] || (g[1] = (p) => n("next")),
            title: "Next item"
          }, " → ", 8, nr)
        ]),
        e("span", ar, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), Os = /* @__PURE__ */ ee(lr, [["__scopeId", "data-v-74af7920"]]), ir = ["type", "value", "placeholder", "disabled"], rr = {
  key: 0,
  class: "base-input-error"
}, dr = /* @__PURE__ */ Z({
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
          n[1] || (n[1] = yt((l) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = yt((l) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, ir),
      t.error ? (s(), o("span", rr, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), lt = /* @__PURE__ */ ee(dr, [["__scopeId", "data-v-9ba02cdc"]]), cr = { class: "node-resolution-step" }, ur = {
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
}, Tr = ["onClick"], Rr = { class: "node-result-header" }, Lr = { class: "node-result-package-id" }, Pr = {
  key: 0,
  class: "node-result-description"
}, zr = {
  key: 1,
  class: "node-empty-state"
}, Dr = {
  key: 2,
  class: "node-empty-state"
}, Nr = {
  key: 3,
  class: "node-empty-state"
}, Ur = { class: "node-manual-entry-modal" }, Or = { class: "node-modal-body" }, Br = { class: "node-modal-actions" }, Fr = /* @__PURE__ */ Z({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: c }) {
    const n = t, l = c, { searchNodes: g } = Us(), p = $(0), u = $(!1), v = $(!1), r = $(""), m = $(""), y = $([]), w = $(!1), _ = $(/* @__PURE__ */ new Map()), k = $(/* @__PURE__ */ new Set()), T = $(!1);
    function A() {
      T.value && P(), T.value = !1;
    }
    const f = D(() => n.nodes[p.value]), C = D(() => n.nodes.filter((ue) => n.nodeChoices.has(ue.node_type)).length), z = D(() => f.value ? _.value.get(f.value.node_type) || [] : []), x = D(() => f.value ? k.value.has(f.value.node_type) : !1);
    $t(f, async (ue) => {
      var ve;
      ue && ((ve = ue.options) != null && ve.length || _.value.has(ue.node_type) || k.value.has(ue.node_type) || n.nodeChoices.has(ue.node_type) || await M(ue.node_type));
    }, { immediate: !0 });
    async function M(ue) {
      k.value.add(ue);
      try {
        const ve = await g(ue, 5);
        _.value.set(ue, ve);
      } catch {
        _.value.set(ue, []);
      } finally {
        k.value.delete(ue);
      }
    }
    const K = D(() => n.autoResolvedPackages.filter((ue) => !n.skippedPackages.has(ue.package_id)).length);
    function F(ue) {
      return n.skippedPackages.has(ue);
    }
    function G(ue) {
      l("package-skip", ue);
    }
    const I = D(() => {
      var ve;
      if (!f.value) return "not-found";
      const ue = n.nodeChoices.get(f.value.node_type);
      if (ue)
        switch (ue.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (ve = f.value.options) != null && ve.length ? "ambiguous" : "not-found";
    }), R = D(() => {
      var ve;
      if (!f.value) return;
      const ue = n.nodeChoices.get(f.value.node_type);
      if (ue)
        switch (ue.action) {
          case "install":
            return ue.package_id ? `→ ${ue.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (ve = f.value.options) != null && ve.length ? `${f.value.options.length} matches` : "Not Found";
    });
    function N(ue) {
      ue >= 0 && ue < n.nodes.length && (p.value = ue);
    }
    function re() {
      f.value && l("mark-optional", f.value.node_type);
    }
    function te() {
      f.value && l("skip", f.value.node_type);
    }
    function Y(ue) {
      f.value && l("option-selected", f.value.node_type, ue);
    }
    function ce() {
      f.value && l("clear-choice", f.value.node_type);
    }
    function q() {
      f.value && (r.value = f.value.node_type, y.value = z.value, u.value = !0, Ie(r.value));
    }
    function L() {
      m.value = "", v.value = !0;
    }
    function P() {
      u.value = !1, r.value = "", y.value = [];
    }
    function S() {
      v.value = !1, m.value = "";
    }
    let ie = null;
    function X() {
      ie && clearTimeout(ie), ie = setTimeout(() => {
        Ie(r.value);
      }, 300);
    }
    async function Ie(ue) {
      if (!ue.trim()) {
        y.value = [];
        return;
      }
      w.value = !0;
      try {
        y.value = await g(ue, 10);
      } catch {
        y.value = [];
      } finally {
        w.value = !1;
      }
    }
    function be(ue) {
      f.value && (l("manual-entry", f.value.node_type, ue.package_id), P());
    }
    function Te(ue) {
      f.value && l("manual-entry", f.value.node_type, ue.package_id);
    }
    function Le() {
      !f.value || !m.value.trim() || (l("manual-entry", f.value.node_type, m.value.trim()), S());
    }
    return (ue, ve) => {
      var Ee, Q;
      return s(), o("div", cr, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", ur, [
          e("div", mr, [
            ve[6] || (ve[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", vr, a(K.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", fr, [
            (s(!0), o(W, null, oe(t.autoResolvedPackages, (ne) => (s(), o("div", {
              key: ne.package_id,
              class: "resolved-package-item"
            }, [
              e("div", gr, [
                e("code", pr, a(ne.package_id), 1),
                e("span", hr, a(ne.node_types_count) + " node type" + a(ne.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", yr, [
                F(ne.package_id) ? (s(), o("span", kr, " SKIPPED ")) : (s(), o("span", wr, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (he) => G(ne.package_id)
                }, a(F(ne.package_id) ? "Include" : "Skip"), 9, br)
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
          f.value ? (s(), E(Os, {
            key: 0,
            "item-name": f.value.node_type,
            "current-index": p.value,
            "total-items": t.nodes.length,
            onPrev: ve[0] || (ve[0] = (ne) => N(p.value - 1)),
            onNext: ve[1] || (ve[1] = (ne) => N(p.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
          f.value ? (s(), o("div", xr, [
            b(Xi, {
              "node-type": f.value.node_type,
              "has-multiple-options": !!((Ee = f.value.options) != null && Ee.length),
              options: f.value.options,
              choice: (Q = t.nodeChoices) == null ? void 0 : Q.get(f.value.node_type),
              status: I.value,
              "status-label": R.value,
              "search-results": z.value,
              "is-searching": x.value,
              onMarkOptional: re,
              onSkip: te,
              onManualEntry: L,
              onSearch: q,
              onOptionSelected: Y,
              onClearChoice: ce,
              onSearchResultSelected: Te
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : d("", !0)
        ], 64)) : d("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", Sr, [...ve[8] || (ve[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : d("", !0),
        (s(), E(Ve, { to: "body" }, [
          u.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ve[4] || (ve[4] = Pe((ne) => T.value = !0, ["self"])),
            onMouseup: Pe(A, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: ve[3] || (ve[3] = (ne) => T.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                ve[9] || (ve[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: P
                }, "✕")
              ]),
              e("div", Ir, [
                b(lt, {
                  modelValue: r.value,
                  "onUpdate:modelValue": ve[2] || (ve[2] = (ne) => r.value = ne),
                  placeholder: "Search by node type, package name...",
                  onInput: X
                }, null, 8, ["modelValue"]),
                e("div", Er, [
                  y.value.length > 0 ? (s(), o("div", Mr, [
                    (s(!0), o(W, null, oe(y.value, (ne) => (s(), o("div", {
                      key: ne.package_id,
                      class: "node-search-result-item",
                      onClick: (he) => be(ne)
                    }, [
                      e("div", Rr, [
                        e("code", Lr, a(ne.package_id), 1),
                        ne.match_confidence ? (s(), E(Zt, {
                          key: 0,
                          confidence: ne.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : d("", !0)
                      ]),
                      ne.description ? (s(), o("div", Pr, a(ne.description), 1)) : d("", !0)
                    ], 8, Tr))), 128))
                  ])) : w.value ? (s(), o("div", zr, "Searching...")) : r.value ? (s(), o("div", Dr, 'No packages found matching "' + a(r.value) + '"', 1)) : (s(), o("div", Nr, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : d("", !0)
        ])),
        (s(), E(Ve, { to: "body" }, [
          v.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Pe(S, ["self"])
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
                  "onUpdate:modelValue": ve[5] || (ve[5] = (ne) => m.value = ne),
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
                    onClick: Le
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
}), Ar = /* @__PURE__ */ ee(Fr, [["__scopeId", "data-v-281581bc"]]), Vr = { class: "node-info" }, Wr = { class: "node-info-text" }, Gr = { class: "item-body" }, jr = {
  key: 0,
  class: "resolved-state"
}, Hr = {
  key: 1,
  class: "multiple-options"
}, qr = { class: "options-list" }, Kr = ["onClick"], Jr = ["name", "value", "checked", "onChange"], Yr = { class: "option-content" }, Xr = { class: "option-header" }, Qr = { class: "option-filename" }, Zr = { class: "option-meta" }, ed = { class: "option-size" }, td = { class: "option-category" }, sd = { class: "option-path" }, od = { class: "action-buttons" }, nd = {
  key: 2,
  class: "unresolved"
}, ad = { class: "action-buttons" }, ld = /* @__PURE__ */ Z({
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
    const n = t, l = c, g = D(() => !!n.choice);
    D(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.action;
    }), D(() => {
      var r, m;
      return ((m = (r = n.choice) == null ? void 0 : r.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const p = D(() => {
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
      class: me(["model-resolution-item", { resolved: g.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", Vr, [
        e("span", Wr, [
          m[7] || (m[7] = h("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: me(["status-badge", p.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", Gr, [
        g.value ? (s(), o("div", jr, [
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
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Hr, [
          m[12] || (m[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", qr, [
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
}), id = /* @__PURE__ */ ee(ld, [["__scopeId", "data-v-8a82fefa"]]), rd = { class: "model-resolution-step" }, dd = { class: "step-header" }, cd = { class: "step-info" }, ud = { class: "step-title" }, md = { class: "step-description" }, vd = { class: "stat-badge" }, fd = {
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
}, Ed = { class: "model-download-url-modal" }, Md = { class: "model-modal-body" }, Td = { class: "model-input-group" }, Rd = { class: "model-input-group" }, Ld = { class: "model-modal-actions" }, Pd = /* @__PURE__ */ Z({
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
    const g = t, p = c, u = $(0), v = $(!1), r = $(!1), m = $(""), y = $(""), w = $(""), _ = $([]), k = $(!1), T = D(() => g.models[u.value]), A = D(() => g.models.some((P) => P.is_download_intent)), f = D(() => g.models.filter(
      (P) => g.modelChoices.has(P.filename) || P.is_download_intent
    ).length), C = D(() => {
      var S;
      if (!T.value) return "";
      const P = l((S = T.value.reference) == null ? void 0 : S.node_type);
      return P ? `${P}/${T.value.filename}` : "";
    }), z = D(() => {
      var S;
      if (!T.value) return "not-found";
      const P = g.modelChoices.get(T.value.filename);
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
      return T.value.is_download_intent ? "download" : (S = T.value.options) != null && S.length ? "ambiguous" : "not-found";
    }), x = D(() => {
      var S, ie;
      if (!T.value) return;
      const P = g.modelChoices.get(T.value.filename);
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
      return T.value.is_download_intent ? "Pending Download" : (ie = T.value.options) != null && ie.length ? `${T.value.options.length} matches` : "Not Found";
    });
    function M(P) {
      P >= 0 && P < g.models.length && (u.value = P);
    }
    function K() {
      T.value && p("mark-optional", T.value.filename);
    }
    function F() {
      T.value && p("skip", T.value.filename);
    }
    function G(P) {
      T.value && p("option-selected", T.value.filename, P);
    }
    function I() {
      T.value && p("clear-choice", T.value.filename);
    }
    function R() {
      T.value && (m.value = T.value.filename, v.value = !0);
    }
    function N() {
      T.value && (y.value = T.value.download_source || "", w.value = T.value.target_path || C.value, r.value = !0);
    }
    function re() {
      v.value = !1, m.value = "", _.value = [];
    }
    function te() {
      r.value = !1, y.value = "", w.value = "";
    }
    function Y() {
      k.value = !0, setTimeout(() => {
        k.value = !1;
      }, 300);
    }
    function ce(P) {
      T.value && re();
    }
    function q() {
      !T.value || !y.value.trim() || (p("download-url", T.value.filename, y.value.trim(), w.value.trim() || void 0), te());
    }
    function L(P) {
      if (!P) return "Unknown";
      const S = P / (1024 * 1024 * 1024);
      return S >= 1 ? `${S.toFixed(2)} GB` : `${(P / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (P, S) => {
      var ie, X, Ie;
      return s(), o("div", rd, [
        e("div", dd, [
          e("div", cd, [
            e("h3", ud, a(A.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", md, a(A.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", vd, a(f.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        T.value ? (s(), E(Os, {
          key: 0,
          "item-name": T.value.filename,
          "current-index": u.value,
          "total-items": t.models.length,
          onPrev: S[0] || (S[0] = (be) => M(u.value - 1)),
          onNext: S[1] || (S[1] = (be) => M(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
        T.value ? (s(), o("div", fd, [
          b(id, {
            filename: T.value.filename,
            "node-type": ((ie = T.value.reference) == null ? void 0 : ie.node_type) || "Unknown",
            "has-multiple-options": !!((X = T.value.options) != null && X.length),
            options: T.value.options,
            choice: (Ie = t.modelChoices) == null ? void 0 : Ie.get(T.value.filename),
            status: z.value,
            "status-label": x.value,
            onMarkOptional: K,
            onSkip: F,
            onDownloadUrl: N,
            onSearch: R,
            onOptionSelected: G,
            onClearChoice: I
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", gd, [...S[5] || (S[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), E(Ve, { to: "body" }, [
          v.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Pe(re, ["self"])
          }, [
            e("div", pd, [
              e("div", { class: "model-modal-header" }, [
                S[6] || (S[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: re
                }, "✕")
              ]),
              e("div", hd, [
                b(lt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": S[2] || (S[2] = (be) => m.value = be),
                  placeholder: "Search by filename, category...",
                  onInput: Y
                }, null, 8, ["modelValue"]),
                _.value.length > 0 ? (s(), o("div", yd, [
                  (s(!0), o(W, null, oe(_.value, (be) => (s(), o("div", {
                    key: be.hash,
                    class: "model-search-result-item",
                    onClick: (Te) => ce()
                  }, [
                    e("div", kd, [
                      e("code", bd, a(be.filename), 1)
                    ]),
                    e("div", _d, [
                      e("span", $d, a(be.category), 1),
                      e("span", Cd, a(L(be.size)), 1)
                    ]),
                    be.relative_path ? (s(), o("div", xd, a(be.relative_path), 1)) : d("", !0)
                  ], 8, wd))), 128))
                ])) : m.value && !k.value ? (s(), o("div", Sd, ' No models found matching "' + a(m.value) + '" ', 1)) : d("", !0),
                k.value ? (s(), o("div", Id, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (s(), E(Ve, { to: "body" }, [
          r.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Pe(te, ["self"])
          }, [
            e("div", Ed, [
              e("div", { class: "model-modal-header" }, [
                S[7] || (S[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: te
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
                e("div", Ld, [
                  b(fe, {
                    variant: "secondary",
                    onClick: te
                  }, {
                    default: i(() => [...S[10] || (S[10] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(fe, {
                    variant: "primary",
                    disabled: !y.value.trim() || !w.value.trim(),
                    onClick: q
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
}), zd = /* @__PURE__ */ ee(Pd, [["__scopeId", "data-v-c6acbada"]]), Dd = { class: "applying-step" }, Nd = {
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
}, dc = { class: "error-message" }, cc = /* @__PURE__ */ Z({
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
    }), l = D(() => {
      var v;
      return ((v = c.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.filter((r) => !r.success)) || [];
    }), g = D(() => l.value.length > 0);
    function p(v, r) {
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
                style: wt({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Ad, a(((w = t.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.length) ?? 0) + " / " + a(((_ = t.progress.nodeInstallProgress) == null ? void 0 : _.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Vd, [
            (s(!0), o(W, null, oe(t.progress.nodesToInstall, (k, T) => (s(), o("div", {
              key: k,
              class: me(["install-item", p(k, T)])
            }, [
              e("span", Wd, [
                p(k, T) === "pending" ? (s(), o("span", Gd, "○")) : p(k, T) === "installing" ? (s(), o("span", jd, "◌")) : p(k, T) === "complete" ? (s(), o("span", Hd, "✓")) : p(k, T) === "failed" ? (s(), o("span", qd, "✗")) : d("", !0)
              ]),
              e("code", null, a(k), 1),
              u(k) ? (s(), o("span", Kd, a(u(k)), 1)) : d("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", Jd, [
          e("div", Yd, [
            e("span", {
              class: me(["phase-icon", g.value ? "warning" : "success"])
            }, a(g.value ? "⚠" : "✓"), 3),
            e("h3", Xd, a(g.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
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
            g.value ? d("", !0) : (s(), o("div", lc, [...r[6] || (r[6] = [
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
}), uc = /* @__PURE__ */ ee(cc, [["__scopeId", "data-v-5efaae58"]]), mc = {
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
}, Ec = { class: "stat-count" }, Mc = { class: "stat-card" }, Tc = { class: "stat-items" }, Rc = { class: "stat-item success" }, Lc = { class: "stat-count" }, Pc = {
  key: 0,
  class: "stat-item info"
}, zc = { class: "stat-count" }, Dc = {
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
}, Pu = {
  key: 1,
  class: "choice-badge download"
}, zu = {
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
}, Fu = /* @__PURE__ */ Z({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, l = c, { analyzeWorkflow: g, applyResolution: p, installNodes: u, queueModelDownloads: v, progress: r, resetProgress: m } = Us(), { loadPendingDownloads: y } = Gt(), { openFileLocation: w } = Fe(), _ = $(null), k = $(!1), T = $(!1), A = $(null), f = $("analysis"), C = $([]), z = $(/* @__PURE__ */ new Map()), x = $(/* @__PURE__ */ new Map()), M = $(/* @__PURE__ */ new Set()), K = D(() => {
      const O = [
        { id: "analysis", label: "Analysis" }
      ];
      return (G.value || N.value) && O.push({ id: "nodes", label: "Nodes" }), (I.value || R.value) && O.push({ id: "models", label: "Models" }), O.push({ id: "review", label: "Review" }), f.value === "applying" && O.push({ id: "applying", label: "Applying" }), O;
    }), F = D(() => _.value ? _.value.stats.needs_user_input : !1), G = D(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), I = D(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), R = D(() => _.value ? _.value.stats.download_intents > 0 : !1), N = D(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), re = D(() => _.value ? _.value.nodes.resolved.length : 0), te = D(() => _.value ? _.value.models.resolved.filter((O) => O.has_category_mismatch) : []), Y = D(() => te.value.length > 0), ce = D(() => {
      if (!_.value) return [];
      const O = _.value.nodes.resolved.filter((V) => !V.is_installed), B = /* @__PURE__ */ new Set();
      return O.filter((V) => B.has(V.package.package_id) ? !1 : (B.add(V.package.package_id), !0));
    }), q = D(() => {
      if (!_.value) return [];
      const O = _.value.nodes.resolved.filter((V) => !V.is_installed), B = /* @__PURE__ */ new Map();
      for (const V of O) {
        const se = B.get(V.package.package_id);
        se ? se.node_types_count++ : B.set(V.package.package_id, {
          package_id: V.package.package_id,
          title: V.package.title,
          node_types_count: 1
        });
      }
      return Array.from(B.values());
    }), L = D(() => ce.value.filter((O) => !M.value.has(O.package.package_id))), P = D(() => _.value ? _.value.models.resolved.filter((O) => O.match_type === "download_intent").map((O) => ({
      filename: O.reference.widget_value,
      reference: O.reference,
      is_download_intent: !0,
      resolved_model: O.model,
      download_source: O.download_source,
      target_path: O.target_path
    })) : []), S = D(() => {
      if (!_.value) return [];
      const O = _.value.nodes.unresolved.map((V) => ({
        node_type: V.reference.node_type,
        reason: V.reason,
        is_unresolved: !0,
        options: void 0
      })), B = _.value.nodes.ambiguous.map((V) => ({
        node_type: V.reference.node_type,
        has_multiple_options: !0,
        options: V.options.map((se) => ({
          package_id: se.package.package_id,
          title: se.package.title,
          match_confidence: se.match_confidence,
          match_type: se.match_type,
          is_installed: se.is_installed
        }))
      }));
      return [...O, ...B];
    }), ie = D(() => {
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
        options: V.options.map((se) => ({
          model: se.model,
          match_confidence: se.match_confidence,
          match_type: se.match_type,
          has_download_source: se.has_download_source
        }))
      }));
      return [...O, ...B];
    }), X = D(() => {
      const O = ie.value, B = P.value.map((V) => ({
        filename: V.filename,
        reference: V.reference,
        is_download_intent: !0,
        resolved_model: V.resolved_model,
        download_source: V.download_source,
        target_path: V.target_path,
        options: void 0
      }));
      return [...O, ...B];
    }), Ie = D(() => {
      let O = L.value.length;
      for (const B of z.value.values())
        B.action === "install" && O++;
      for (const B of x.value.values())
        B.action === "select" && O++;
      return O;
    }), be = D(() => {
      let O = 0;
      for (const B of x.value.values())
        B.action === "download" && O++;
      return O;
    }), Te = D(() => {
      let O = 0;
      for (const B of z.value.values())
        B.action === "optional" && O++;
      for (const B of x.value.values())
        B.action === "optional" && O++;
      return O;
    }), Le = D(() => {
      let O = M.value.size;
      for (const B of z.value.values())
        B.action === "skip" && O++;
      for (const B of x.value.values())
        B.action === "skip" && O++;
      for (const B of S.value)
        z.value.has(B.node_type) || O++;
      for (const B of ie.value)
        x.value.has(B.filename) || O++;
      return O;
    }), ue = D(() => {
      const O = {};
      if (O.analysis = { resolved: 1, total: 1 }, G.value) {
        const B = S.value.length, V = S.value.filter(
          (se) => z.value.has(se.node_type)
        ).length;
        O.nodes = { resolved: V, total: B };
      }
      if (I.value || R.value) {
        const B = X.value.length, V = X.value.filter(
          (se) => x.value.has(se.filename) || se.is_download_intent
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
    function Ee() {
      const O = K.value.findIndex((B) => B.id === f.value);
      O > 0 && (f.value = K.value[O - 1].id);
    }
    function Q() {
      const O = K.value.findIndex((B) => B.id === f.value);
      O < K.value.length - 1 && (f.value = K.value[O + 1].id);
    }
    async function ne() {
      k.value = !0, A.value = null;
      try {
        _.value = await g(n.workflowName);
      } catch (O) {
        A.value = O instanceof Error ? O.message : "Failed to analyze workflow";
      } finally {
        k.value = !1;
      }
    }
    function he() {
      C.value.includes("analysis") || C.value.push("analysis"), G.value || N.value ? f.value = "nodes" : I.value || R.value ? f.value = "models" : f.value = "review";
    }
    function ze(O) {
      z.value.set(O, { action: "optional" });
    }
    function tt(O) {
      z.value.set(O, { action: "skip" });
    }
    function rt(O, B) {
      var se;
      const V = S.value.find((pe) => pe.node_type === O);
      (se = V == null ? void 0 : V.options) != null && se[B] && z.value.set(O, {
        action: "install",
        package_id: V.options[B].package_id
      });
    }
    function xe(O, B) {
      z.value.set(O, {
        action: "install",
        package_id: B
      });
    }
    function Xe(O) {
      z.value.delete(O);
    }
    function Ge(O) {
      M.value.has(O) ? M.value.delete(O) : M.value.add(O);
    }
    function je(O) {
      x.value.set(O, { action: "optional" });
    }
    function ft(O) {
      x.value.set(O, { action: "skip" });
    }
    function ye(O, B) {
      var se;
      const V = ie.value.find((pe) => pe.filename === O);
      (se = V == null ? void 0 : V.options) != null && se[B] && x.value.set(O, {
        action: "select",
        selected_model: V.options[B].model
      });
    }
    function Ae(O, B, V) {
      x.value.set(O, {
        action: "download",
        url: B,
        target_path: V
      });
    }
    function dt(O) {
      x.value.delete(O);
    }
    async function st(O) {
      try {
        await w(O);
      } catch (B) {
        A.value = B instanceof Error ? B.message : "Failed to open file location";
      }
    }
    async function le() {
      var O;
      T.value = !0, A.value = null, m(), r.phase = "resolving", f.value = "applying";
      try {
        const B = await p(n.workflowName, z.value, x.value, M.value);
        B.models_to_download && B.models_to_download.length > 0 && v(n.workflowName, B.models_to_download);
        const V = [
          ...B.nodes_to_install || [],
          ...L.value.map((pe) => pe.package.package_id)
        ];
        r.nodesToInstall = [...new Set(V)], r.nodesToInstall.length > 0 && await u(n.workflowName), r.phase = "complete", await y();
        const se = r.installError || ((O = r.nodeInstallProgress) == null ? void 0 : O.completedNodes.some((pe) => !pe.success));
        !r.needsRestart && !se && setTimeout(() => {
          l("refresh"), l("install"), l("close");
        }, 1500);
      } catch (B) {
        A.value = B instanceof Error ? B.message : "Failed to apply resolution", r.error = A.value, r.phase = "error";
      } finally {
        T.value = !1;
      }
    }
    function J() {
      l("refresh"), l("restart"), l("close");
    }
    async function Me() {
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
    return Ue(ne), (O, B) => (s(), E(Je, {
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
            steps: K.value,
            "current-step": f.value,
            "completed-steps": C.value,
            "step-stats": ue.value,
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
                    re.value > 0 ? (s(), o("div", bc, [
                      B[4] || (B[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", _c, a(re.value), 1),
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
                      e("span", Lc, a(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      B[14] || (B[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (s(), o("div", Pc, [
                      B[15] || (B[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", zc, a(_.value.stats.download_intents), 1),
                      B[16] || (B[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : d("", !0),
                    Y.value ? (s(), o("div", Dc, [
                      B[17] || (B[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", Nc, a(te.value.length), 1),
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
                e("span", Vc, a(S.value.length + ie.value.length) + " items need your input", 1)
              ])) : N.value ? (s(), o("div", Wc, [
                B[25] || (B[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Gc, a(_.value.stats.packages_needing_installation) + " package" + a(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(_.value.stats.nodes_needing_installation) + " node type" + a(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(R.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : R.value ? (s(), o("div", jc, [
                B[26] || (B[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Hc, a(_.value.stats.download_intents) + " model" + a(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : Y.value ? (s(), o("div", qc, [
                B[27] || (B[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Kc, a(te.value.length) + " model" + a(te.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", Jc, [...B[28] || (B[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              Y.value ? (s(), o("div", Yc, [
                B[31] || (B[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", Xc, [
                  (s(!0), o(W, null, oe(te.value, (V) => {
                    var se, pe;
                    return s(), o("div", {
                      key: V.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", Qc, a(V.actual_category) + "/" + a((se = V.model) == null ? void 0 : se.filename), 1),
                      B[30] || (B[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", Zc, a((pe = V.expected_categories) == null ? void 0 : pe[0]) + "/", 1),
                      V.file_path ? (s(), E(fe, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (ct) => st(V.file_path)
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
          f.value === "nodes" ? (s(), E(Ar, {
            key: 1,
            nodes: S.value,
            "node-choices": z.value,
            "auto-resolved-packages": q.value,
            "skipped-packages": M.value,
            onMarkOptional: ze,
            onSkip: tt,
            onOptionSelected: rt,
            onManualEntry: xe,
            onClearChoice: Xe,
            onPackageSkip: Ge
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : d("", !0),
          f.value === "models" ? (s(), E(zd, {
            key: 2,
            models: X.value,
            "model-choices": x.value,
            onMarkOptional: je,
            onSkip: ft,
            onOptionSelected: ye,
            onDownloadUrl: Ae,
            onClearChoice: dt
          }, null, 8, ["models", "model-choices"])) : d("", !0),
          f.value === "review" ? (s(), o("div", eu, [
            e("div", tu, [
              B[36] || (B[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", su, [
                e("div", ou, [
                  e("span", nu, a(Ie.value), 1),
                  B[32] || (B[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", au, [
                  e("span", lu, a(be.value), 1),
                  B[33] || (B[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", iu, [
                  e("span", ru, a(Te.value), 1),
                  B[34] || (B[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", du, [
                  e("span", cu, a(Le.value), 1),
                  B[35] || (B[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              q.value.length > 0 ? (s(), o("div", uu, [
                e("h4", mu, "Node Packages (" + a(q.value.length) + ")", 1),
                e("div", vu, [
                  (s(!0), o(W, null, oe(q.value, (V) => (s(), o("div", {
                    key: V.package_id,
                    class: "review-item"
                  }, [
                    e("code", fu, a(V.package_id), 1),
                    e("div", gu, [
                      M.value.has(V.package_id) ? (s(), o("span", hu, "Skipped")) : (s(), o("span", pu, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : d("", !0),
              S.value.length > 0 ? (s(), o("div", yu, [
                e("h4", wu, "Node Choices (" + a(S.value.length) + ")", 1),
                e("div", ku, [
                  (s(!0), o(W, null, oe(S.value, (V) => {
                    var se, pe, ct, gt;
                    return s(), o("div", {
                      key: V.node_type,
                      class: "review-item"
                    }, [
                      e("code", bu, a(V.node_type), 1),
                      e("div", _u, [
                        z.value.has(V.node_type) ? (s(), o(W, { key: 0 }, [
                          ((se = z.value.get(V.node_type)) == null ? void 0 : se.action) === "install" ? (s(), o("span", $u, a((pe = z.value.get(V.node_type)) == null ? void 0 : pe.package_id), 1)) : ((ct = z.value.get(V.node_type)) == null ? void 0 : ct.action) === "optional" ? (s(), o("span", Cu, " Optional ")) : ((gt = z.value.get(V.node_type)) == null ? void 0 : gt.action) === "skip" ? (s(), o("span", xu, " Skip ")) : d("", !0)
                        ], 64)) : (s(), o("span", Su, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              X.value.length > 0 ? (s(), o("div", Iu, [
                e("h4", Eu, "Models (" + a(X.value.length) + ")", 1),
                e("div", Mu, [
                  (s(!0), o(W, null, oe(X.value, (V) => {
                    var se, pe, ct, gt, ot, xt, pt;
                    return s(), o("div", {
                      key: V.filename,
                      class: "review-item"
                    }, [
                      e("code", Tu, a(V.filename), 1),
                      e("div", Ru, [
                        x.value.has(V.filename) ? (s(), o(W, { key: 0 }, [
                          ((se = x.value.get(V.filename)) == null ? void 0 : se.action) === "select" ? (s(), o("span", Lu, a((ct = (pe = x.value.get(V.filename)) == null ? void 0 : pe.selected_model) == null ? void 0 : ct.filename), 1)) : ((gt = x.value.get(V.filename)) == null ? void 0 : gt.action) === "download" ? (s(), o("span", Pu, " Download ")) : ((ot = x.value.get(V.filename)) == null ? void 0 : ot.action) === "optional" ? (s(), o("span", zu, " Optional ")) : ((xt = x.value.get(V.filename)) == null ? void 0 : xt.action) === "skip" ? (s(), o("span", Du, " Skip ")) : ((pt = x.value.get(V.filename)) == null ? void 0 : pt.action) === "cancel_download" ? (s(), o("span", Nu, " Cancel Download ")) : d("", !0)
                        ], 64)) : V.is_download_intent ? (s(), o("span", Uu, " Pending Download ")) : (s(), o("span", Ou, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              ce.value.length === 0 && S.value.length === 0 && X.value.length === 0 ? (s(), o("div", Bu, " No dependencies need resolution. ")) : d("", !0)
            ])
          ])) : d("", !0),
          f.value === "applying" ? (s(), E(uc, {
            key: 4,
            progress: _e(r),
            onRestart: J,
            onRetryFailed: Me
          }, null, 8, ["progress"])) : d("", !0)
        ])) : d("", !0)
      ]),
      footer: i(() => [
        f.value !== "analysis" && f.value !== "applying" ? (s(), E(fe, {
          key: 0,
          variant: "secondary",
          disabled: T.value,
          onClick: Ee
        }, {
          default: i(() => [...B[37] || (B[37] = [
            h(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        B[41] || (B[41] = e("div", { class: "footer-spacer" }, null, -1)),
        f.value !== "applying" || _e(r).phase === "complete" || _e(r).phase === "error" ? (s(), E(fe, {
          key: 1,
          variant: "secondary",
          onClick: B[0] || (B[0] = (V) => l("close"))
        }, {
          default: i(() => [
            h(a(_e(r).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : d("", !0),
        f.value === "analysis" ? (s(), E(fe, {
          key: 2,
          variant: "primary",
          disabled: k.value,
          onClick: he
        }, {
          default: i(() => [...B[38] || (B[38] = [
            h(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        f.value === "nodes" ? (s(), E(fe, {
          key: 3,
          variant: "primary",
          onClick: Q
        }, {
          default: i(() => [
            h(a(I.value || R.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : d("", !0),
        f.value === "models" ? (s(), E(fe, {
          key: 4,
          variant: "primary",
          onClick: Q
        }, {
          default: i(() => [...B[39] || (B[39] = [
            h(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : d("", !0),
        f.value === "review" ? (s(), E(fe, {
          key: 5,
          variant: "primary",
          disabled: T.value,
          loading: T.value,
          onClick: le
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
}), Au = /* @__PURE__ */ ee(Fu, [["__scopeId", "data-v-6276cf1d"]]), Vu = { class: "search-input-wrapper" }, Wu = ["value", "placeholder"], Gu = /* @__PURE__ */ Z({
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
    const n = t, l = c, g = $(null);
    let p;
    function u(r) {
      const m = r.target.value;
      n.debounce > 0 ? (clearTimeout(p), p = window.setTimeout(() => {
        l("update:modelValue", m);
      }, n.debounce)) : l("update:modelValue", m);
    }
    function v() {
      var r;
      l("update:modelValue", ""), l("clear"), (r = g.value) == null || r.focus();
    }
    return Ue(() => {
      n.autoFocus && g.value && g.value.focus();
    }), (r, m) => (s(), o("div", Vu, [
      e("input", {
        ref_key: "inputRef",
        ref: g,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: yt(v, ["escape"])
      }, null, 40, Wu),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: v,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), ju = /* @__PURE__ */ ee(Gu, [["__scopeId", "data-v-266f857a"]]), Hu = { class: "search-bar" }, qu = /* @__PURE__ */ Z({
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
}), Pt = /* @__PURE__ */ ee(qu, [["__scopeId", "data-v-3d51bbfd"]]), Ku = { class: "section-group" }, Ju = {
  key: 0,
  class: "section-content"
}, Yu = /* @__PURE__ */ Z({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const n = t, l = c, g = $(n.initiallyExpanded);
    function p() {
      n.collapsible && (g.value = !g.value, l("toggle", g.value));
    }
    return (u, v) => (s(), o("section", Ku, [
      b(et, {
        count: t.count,
        clickable: t.collapsible,
        expanded: g.value,
        onClick: p
      }, {
        default: i(() => [
          h(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || g.value ? (s(), o("div", Ju, [
        $e(u.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Be = /* @__PURE__ */ ee(Yu, [["__scopeId", "data-v-c48e33ed"]]), Xu = { class: "item-header" }, Qu = {
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
}, nm = /* @__PURE__ */ Z({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, l = D(() => n.status ? `status-${n.status}` : "");
    return (g, p) => (s(), o("div", {
      class: me(["item-card", { clickable: t.clickable, compact: t.compact }, l.value]),
      onClick: p[0] || (p[0] = (u) => t.clickable && g.$emit("click"))
    }, [
      e("div", Xu, [
        g.$slots.icon ? (s(), o("span", Qu, [
          $e(g.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        e("div", Zu, [
          g.$slots.title ? (s(), o("div", em, [
            $e(g.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          g.$slots.subtitle ? (s(), o("div", tm, [
            $e(g.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      g.$slots.details ? (s(), o("div", sm, [
        $e(g.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      g.$slots.actions ? (s(), o("div", om, [
        $e(g.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), He = /* @__PURE__ */ ee(nm, [["__scopeId", "data-v-cc435e0e"]]), am = { class: "loading-state" }, lm = { class: "loading-message" }, im = /* @__PURE__ */ Z({
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
}), kt = /* @__PURE__ */ ee(im, [["__scopeId", "data-v-ad8436c9"]]), rm = { class: "error-state" }, dm = { class: "error-message" }, cm = /* @__PURE__ */ Z({
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
      t.retry ? (s(), E(ae, {
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
}), bt = /* @__PURE__ */ ee(cm, [["__scopeId", "data-v-5397be48"]]), um = /* @__PURE__ */ Z({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const l = n, { getWorkflows: g } = Fe();
    Ds();
    const p = $([]), u = $(!1), v = $(null), r = $(""), m = $(!0), y = $(!1), w = $(!1), _ = $(!1), k = $(null), T = D(
      () => p.value.filter((L) => L.status === "broken")
    ), A = D(
      () => p.value.filter((L) => L.status === "new")
    ), f = D(
      () => p.value.filter((L) => L.status === "modified")
    ), C = D(
      () => p.value.filter((L) => L.status === "synced")
    ), z = D(() => {
      if (!r.value.trim()) return p.value;
      const L = r.value.toLowerCase();
      return p.value.filter((P) => P.name.toLowerCase().includes(L));
    }), x = D(
      () => T.value.filter(
        (L) => !r.value.trim() || L.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), M = D(
      () => A.value.filter(
        (L) => !r.value.trim() || L.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), K = D(
      () => f.value.filter(
        (L) => !r.value.trim() || L.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), F = D(
      () => C.value.filter(
        (L) => !r.value.trim() || L.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), G = D(
      () => y.value ? F.value : F.value.slice(0, 5)
    );
    async function I(L = !1) {
      u.value = !0, v.value = null;
      try {
        p.value = await g(L);
      } catch (P) {
        v.value = P instanceof Error ? P.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    c({ loadWorkflows: I });
    function R(L) {
      k.value = L, w.value = !0;
    }
    function N(L) {
      k.value = L, _.value = !0;
    }
    function re() {
      l("refresh");
    }
    async function te() {
      _.value = !1, await I(!0);
    }
    async function Y() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ce(L) {
      const P = [];
      return L.missing_nodes > 0 && P.push(`${L.missing_nodes} missing node${L.missing_nodes > 1 ? "s" : ""}`), L.missing_models > 0 && P.push(`${L.missing_models} missing model${L.missing_models > 1 ? "s" : ""}`), L.models_with_category_mismatch && L.models_with_category_mismatch > 0 && P.push(`${L.models_with_category_mismatch} model${L.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), L.pending_downloads && L.pending_downloads > 0 && P.push(`${L.pending_downloads} pending download${L.pending_downloads > 1 ? "s" : ""}`), P.length > 0 ? P.join(", ") : "Has issues";
    }
    function q(L) {
      const P = L.sync_state === "new" ? "New" : L.sync_state === "modified" ? "Modified" : L.sync_state === "synced" ? "Synced" : L.sync_state;
      return L.has_path_sync_issues && L.models_needing_path_sync && L.models_needing_path_sync > 0 ? `${L.models_needing_path_sync} model path${L.models_needing_path_sync > 1 ? "s" : ""} need${L.models_needing_path_sync === 1 ? "s" : ""} sync` : P || "Unknown";
    }
    return Ue(I), (L, P) => (s(), o(W, null, [
      b(qe, null, {
        header: i(() => [
          b(Ke, { title: "WORKFLOWS" })
        ]),
        search: i(() => [
          b(Pt, {
            modelValue: r.value,
            "onUpdate:modelValue": P[0] || (P[0] = (S) => r.value = S),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          u.value ? (s(), E(kt, {
            key: 0,
            message: "Loading workflows..."
          })) : v.value ? (s(), E(bt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            x.value.length ? (s(), E(Be, {
              key: 0,
              title: "BROKEN",
              count: x.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, oe(x.value, (S) => (s(), E(He, {
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
                    b(ae, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ie) => N(S.name)
                    }, {
                      default: i(() => [...P[8] || (P[8] = [
                        h(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(ae, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => R(S.name)
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
            M.value.length ? (s(), E(Be, {
              key: 1,
              title: "NEW",
              count: M.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, oe(M.value, (S) => (s(), E(He, {
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
                    h(a(q(S)), 1)
                  ]),
                  actions: i(() => [
                    b(ae, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => R(S.name)
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
            K.value.length ? (s(), E(Be, {
              key: 2,
              title: "MODIFIED",
              count: K.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, oe(K.value, (S) => (s(), E(He, {
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
                    h(a(q(S)), 1)
                  ]),
                  actions: i(() => [
                    b(ae, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => R(S.name)
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
            F.value.length ? (s(), E(Be, {
              key: 3,
              title: "SYNCED",
              count: F.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: P[2] || (P[2] = (S) => m.value = S)
            }, {
              default: i(() => [
                (s(!0), o(W, null, oe(G.value, (S) => (s(), E(He, {
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
                    h(a(q(S)), 1)
                  ]),
                  actions: i(() => [
                    b(ae, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => R(S.name)
                    }, {
                      default: i(() => [...P[13] || (P[13] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !y.value && F.value.length > 5 ? (s(), E(ae, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: P[1] || (P[1] = (S) => y.value = !0),
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
            z.value.length ? d("", !0) : (s(), E(it, {
              key: 4,
              icon: "📭",
              message: r.value ? `No workflows match '${r.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      w.value && k.value ? (s(), E(ri, {
        key: 0,
        "workflow-name": k.value,
        onClose: P[3] || (P[3] = (S) => w.value = !1),
        onResolve: P[4] || (P[4] = (S) => N(k.value)),
        onRefresh: P[5] || (P[5] = (S) => l("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0),
      _.value && k.value ? (s(), E(Au, {
        key: 1,
        "workflow-name": k.value,
        onClose: te,
        onInstall: re,
        onRefresh: P[6] || (P[6] = (S) => l("refresh")),
        onRestart: Y
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), mm = /* @__PURE__ */ ee(um, [["__scopeId", "data-v-fa3f076e"]]), vm = /* @__PURE__ */ Z({
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
}), jt = /* @__PURE__ */ ee(vm, [["__scopeId", "data-v-ccb7816e"]]), fm = {
  key: 0,
  class: "model-details"
}, gm = { class: "detail-section" }, pm = { class: "detail-row" }, hm = { class: "detail-value mono" }, ym = { class: "detail-row" }, wm = { class: "detail-value mono" }, km = { class: "detail-row" }, bm = { class: "detail-value mono" }, _m = { class: "detail-row" }, $m = { class: "detail-value" }, Cm = { class: "detail-row" }, xm = { class: "detail-value" }, Sm = { class: "detail-row" }, Im = { class: "detail-value" }, Em = { class: "detail-section" }, Mm = { class: "section-header" }, Tm = {
  key: 0,
  class: "locations-list"
}, Rm = { class: "location-path mono" }, Lm = {
  key: 0,
  class: "location-modified"
}, Pm = ["onClick"], zm = {
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
}, Hm = /* @__PURE__ */ Z({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: l, addModelSource: g, removeModelSource: p, openFileLocation: u } = Fe(), v = $(null), r = $(!0), m = $(null), y = $(""), w = $(!1), _ = $(null), k = $(null), T = $(null), A = $(null);
    let f = null;
    function C(I, R = "success", N = 2e3) {
      f && clearTimeout(f), A.value = { message: I, type: R }, f = setTimeout(() => {
        A.value = null;
      }, N);
    }
    function z(I) {
      if (!I) return "Unknown";
      const R = 1024 * 1024 * 1024, N = 1024 * 1024;
      return I >= R ? `${(I / R).toFixed(1)} GB` : I >= N ? `${(I / N).toFixed(0)} MB` : `${(I / 1024).toFixed(0)} KB`;
    }
    function x(I) {
      navigator.clipboard.writeText(I), C("Copied to clipboard!");
    }
    async function M(I) {
      try {
        await u(I), C("Opening file location...");
      } catch {
        C("Failed to open location", "error");
      }
    }
    async function K() {
      if (!(!y.value.trim() || !v.value)) {
        w.value = !0, k.value = null, T.value = null;
        try {
          await g(v.value.hash, y.value.trim()), T.value = "Source added successfully!", y.value = "", await G();
        } catch (I) {
          k.value = I instanceof Error ? I.message : "Failed to add source";
        } finally {
          w.value = !1;
        }
      }
    }
    async function F(I) {
      if (v.value) {
        _.value = I, k.value = null, T.value = null;
        try {
          await p(v.value.hash, I), C("Source removed"), await G();
        } catch (R) {
          k.value = R instanceof Error ? R.message : "Failed to remove source";
        } finally {
          _.value = null;
        }
      }
    }
    async function G() {
      r.value = !0, m.value = null;
      try {
        v.value = await l(n.identifier);
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to load model details";
      } finally {
        r.value = !1;
      }
    }
    return Ue(G), (I, R) => {
      var N;
      return s(), o(W, null, [
        b(Je, {
          title: `Model Details: ${((N = v.value) == null ? void 0 : N.filename) || "Loading..."}`,
          size: "lg",
          loading: r.value,
          error: m.value,
          onClose: R[5] || (R[5] = (re) => I.$emit("close"))
        }, {
          body: i(() => {
            var re, te, Y, ce;
            return [
              v.value ? (s(), o("div", fm, [
                e("section", gm, [
                  e("div", pm, [
                    R[6] || (R[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", hm, a(v.value.hash || "Not computed"), 1),
                    v.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: R[0] || (R[0] = (q) => x(v.value.hash))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", ym, [
                    R[7] || (R[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", wm, a(v.value.blake3 || "Not computed"), 1),
                    v.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: R[1] || (R[1] = (q) => x(v.value.blake3))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", km, [
                    R[8] || (R[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", bm, a(v.value.sha256 || "Not computed"), 1),
                    v.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: R[2] || (R[2] = (q) => x(v.value.sha256))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", _m, [
                    R[9] || (R[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", $m, a(z(v.value.size)), 1)
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
                  e("h4", Mm, "Locations (" + a(((re = v.value.locations) == null ? void 0 : re.length) || 0) + ")", 1),
                  (te = v.value.locations) != null && te.length ? (s(), o("div", Tm, [
                    (s(!0), o(W, null, oe(v.value.locations, (q, L) => (s(), o("div", {
                      key: L,
                      class: "location-item"
                    }, [
                      e("span", Rm, a(q.path), 1),
                      q.modified ? (s(), o("span", Lm, "Modified: " + a(q.modified), 1)) : d("", !0),
                      q.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (P) => M(q.path)
                      }, " Open File Location ", 8, Pm)) : d("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", zm, "No locations found"))
                ]),
                e("section", Dm, [
                  e("h4", Nm, "Download Sources (" + a(((Y = v.value.sources) == null ? void 0 : Y.length) || 0) + ")", 1),
                  (ce = v.value.sources) != null && ce.length ? (s(), o("div", Um, [
                    (s(!0), o(W, null, oe(v.value.sources, (q, L) => (s(), o("div", {
                      key: L,
                      class: "source-item"
                    }, [
                      e("span", Om, a(q.type) + ":", 1),
                      e("a", {
                        href: q.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(q.url), 9, Bm),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: _.value === q.url,
                        onClick: (P) => F(q.url)
                      }, a(_.value === q.url ? "..." : "×"), 9, Fm)
                    ]))), 128))
                  ])) : (s(), o("div", Am, " No download sources configured ")),
                  e("div", Vm, [
                    Oe(e("input", {
                      "onUpdate:modelValue": R[3] || (R[3] = (q) => y.value = q),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Tt, y.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !y.value.trim() || w.value,
                      onClick: K
                    }, a(w.value ? "Adding..." : "Add Source"), 9, Wm)
                  ]),
                  k.value ? (s(), o("p", Gm, a(k.value), 1)) : d("", !0),
                  T.value ? (s(), o("p", jm, a(T.value), 1)) : d("", !0)
                ])
              ])) : d("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: R[4] || (R[4] = (re) => I.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), E(Ve, { to: "body" }, [
          A.value ? (s(), o("div", {
            key: 0,
            class: me(["toast", A.value.type])
          }, a(A.value.message), 3)) : d("", !0)
        ]))
      ], 64);
    };
  }
}), vs = /* @__PURE__ */ ee(Hm, [["__scopeId", "data-v-f15cbb56"]]), qm = /* @__PURE__ */ Z({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: l, getStatus: g } = Fe(), p = $([]), u = $([]), v = $("production"), r = $(!1), m = $(null), y = $(""), w = $(!1), _ = $(null);
    function k() {
      w.value = !1, n("navigate", "model-index");
    }
    const T = D(
      () => p.value.reduce((G, I) => G + (I.size || 0), 0)
    ), A = D(() => {
      if (!y.value.trim()) return p.value;
      const G = y.value.toLowerCase();
      return p.value.filter((I) => I.filename.toLowerCase().includes(G));
    }), f = D(() => {
      if (!y.value.trim()) return u.value;
      const G = y.value.toLowerCase();
      return u.value.filter((I) => I.filename.toLowerCase().includes(G));
    }), C = D(() => {
      const G = {};
      for (const R of A.value) {
        const N = R.type || "other";
        G[N] || (G[N] = []), G[N].push(R);
      }
      const I = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(G).sort(([R], [N]) => {
        const re = I.indexOf(R), te = I.indexOf(N);
        return re >= 0 && te >= 0 ? re - te : re >= 0 ? -1 : te >= 0 ? 1 : R.localeCompare(N);
      }).map(([R, N]) => ({ type: R, models: N }));
    });
    function z(G) {
      if (!G) return "Unknown";
      const I = G / (1024 * 1024);
      return I >= 1024 ? `${(I / 1024).toFixed(1)} GB` : `${I.toFixed(0)} MB`;
    }
    function x(G) {
      _.value = G.hash || G.filename;
    }
    function M(G) {
      n("navigate", "model-index");
    }
    function K(G) {
      alert(`Download functionality not yet implemented for ${G}`);
    }
    async function F() {
      r.value = !0, m.value = null;
      try {
        const G = await l();
        p.value = G, u.value = [];
        const I = await g();
        v.value = I.environment || "production";
      } catch (G) {
        m.value = G instanceof Error ? G.message : "Failed to load models";
      } finally {
        r.value = !1;
      }
    }
    return Ue(F), (G, I) => (s(), o(W, null, [
      b(qe, null, {
        header: i(() => [
          b(Ke, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (R) => w.value = !0)
          })
        ]),
        search: i(() => [
          b(Pt, {
            modelValue: y.value,
            "onUpdate:modelValue": I[1] || (I[1] = (R) => y.value = R),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          r.value ? (s(), E(kt, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (s(), E(bt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            p.value.length ? (s(), E(jt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                h(" Total: " + a(p.value.length) + " models • " + a(z(T.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(W, null, oe(C.value, (R) => (s(), E(Be, {
              key: R.type,
              title: R.type.toUpperCase(),
              count: R.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(W, null, oe(R.models, (N) => (s(), E(He, {
                  key: N.hash || N.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...I[4] || (I[4] = [
                    h("📦", -1)
                  ])]),
                  title: i(() => [
                    h(a(N.filename), 1)
                  ]),
                  subtitle: i(() => [
                    h(a(z(N.size)), 1)
                  ]),
                  details: i(() => [
                    b(Ne, {
                      label: "Used by:",
                      value: (N.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    b(Ne, {
                      label: "Path:",
                      value: N.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    b(ae, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (re) => x(N)
                    }, {
                      default: i(() => [...I[5] || (I[5] = [
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
                (s(!0), o(W, null, oe(f.value, (R) => (s(), E(He, {
                  key: R.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...I[6] || (I[6] = [
                    h("⚠", -1)
                  ])]),
                  title: i(() => [
                    h(a(R.filename), 1)
                  ]),
                  subtitle: i(() => [...I[7] || (I[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: i(() => {
                    var N;
                    return [
                      b(Ne, {
                        label: "Required by:",
                        value: ((N = R.workflow_names) == null ? void 0 : N.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: i(() => [
                    b(ae, {
                      variant: "primary",
                      size: "sm",
                      onClick: (N) => K(R.filename)
                    }, {
                      default: i(() => [...I[8] || (I[8] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(ae, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (N) => M(R.filename)
                    }, {
                      default: i(() => [...I[9] || (I[9] = [
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
            !A.value.length && !f.value.length ? (s(), E(it, {
              key: 2,
              icon: "📭",
              message: y.value ? `No models match '${y.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(vt, {
        show: w.value,
        title: "About Environment Models",
        onClose: I[2] || (I[2] = (R) => w.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            I[10] || (I[10] = h(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(v.value) + '"', 1),
            I[11] || (I[11] = h(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: i(() => [
          b(ae, {
            variant: "primary",
            onClick: k
          }, {
            default: i(() => [...I[12] || (I[12] = [
              h(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (s(), E(vs, {
        key: 0,
        identifier: _.value,
        onClose: I[3] || (I[3] = (R) => _.value = null)
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), Km = /* @__PURE__ */ ee(qm, [["__scopeId", "data-v-cb4f12b3"]]), Jm = {
  key: 0,
  class: "indexing-progress"
}, Ym = { class: "progress-info" }, Xm = { class: "progress-label" }, Qm = { class: "progress-count" }, Zm = { class: "progress-bar" }, ev = { class: "modal-content" }, tv = { class: "modal-header" }, sv = { class: "modal-body" }, ov = { class: "input-group" }, nv = { class: "current-path" }, av = { class: "input-group" }, lv = { class: "modal-footer" }, iv = { class: "modal-content" }, rv = { class: "modal-header" }, dv = { class: "modal-body" }, cv = { class: "input-group" }, uv = { class: "input-group" }, mv = { class: "modal-footer" }, vv = /* @__PURE__ */ Z({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: l,
      getModelsDirectory: g,
      setModelsDirectory: p
    } = Fe(), { addToQueue: u } = Gt(), v = c, r = $([]), m = $(!1), y = $(!1), w = $(null), _ = $(""), k = $(!1), T = $(null), A = $(!1), f = $(null), C = $(""), z = $(!1), x = $(!1), M = $(""), K = $(""), F = $(null), G = D(
      () => r.value.reduce((P, S) => P + (S.size || 0), 0)
    ), I = D(() => {
      if (!_.value.trim()) return r.value;
      const P = _.value.toLowerCase();
      return r.value.filter((S) => {
        const ie = S, X = S.sha256 || ie.sha256_hash || "";
        return S.filename.toLowerCase().includes(P) || X.toLowerCase().includes(P);
      });
    }), R = D(() => {
      const P = {};
      for (const ie of I.value) {
        const X = ie.type || "other";
        P[X] || (P[X] = []), P[X].push(ie);
      }
      const S = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(P).sort(([ie], [X]) => {
        const Ie = S.indexOf(ie), be = S.indexOf(X);
        return Ie >= 0 && be >= 0 ? Ie - be : Ie >= 0 ? -1 : be >= 0 ? 1 : ie.localeCompare(X);
      }).map(([ie, X]) => ({ type: ie, models: X }));
    });
    function N(P) {
      if (!P) return "Unknown";
      const S = 1024 * 1024 * 1024, ie = 1024 * 1024;
      return P >= S ? `${(P / S).toFixed(1)} GB` : P >= ie ? `${(P / ie).toFixed(0)} MB` : `${(P / 1024).toFixed(0)} KB`;
    }
    function re(P) {
      T.value = P.hash || P.filename;
    }
    async function te() {
      y.value = !0, w.value = null;
      try {
        const P = await l();
        await q(), P.changes > 0 && console.log(`Scan complete: ${P.changes} changes detected`);
      } catch (P) {
        w.value = P instanceof Error ? P.message : "Failed to scan models";
      } finally {
        y.value = !1;
      }
    }
    async function Y() {
      if (C.value.trim()) {
        z.value = !0, w.value = null;
        try {
          const P = await p(C.value.trim());
          f.value = P.path, A.value = !1, C.value = "", await q(), console.log(`Directory changed: ${P.models_indexed} models indexed`), v("refresh");
        } catch (P) {
          w.value = P instanceof Error ? P.message : "Failed to change directory";
        } finally {
          z.value = !1;
        }
      }
    }
    function ce() {
      if (!M.value.trim() || !K.value.trim()) return;
      const P = K.value.split("/").pop() || "model.safetensors";
      u([{
        workflow: "__manual__",
        filename: P,
        url: M.value.trim(),
        targetPath: K.value.trim()
      }]), M.value = "", K.value = "", x.value = !1;
    }
    async function q() {
      m.value = !0, w.value = null;
      try {
        r.value = await n();
      } catch (P) {
        w.value = P instanceof Error ? P.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function L() {
      try {
        const P = await g();
        f.value = P.path;
      } catch {
      }
    }
    return Ue(() => {
      q(), L();
    }), (P, S) => (s(), o(W, null, [
      b(qe, null, {
        header: i(() => [
          b(Ke, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: S[2] || (S[2] = (ie) => k.value = !0)
          }, {
            actions: i(() => [
              b(ae, {
                variant: "primary",
                size: "sm",
                disabled: y.value,
                onClick: te
              }, {
                default: i(() => [
                  h(a(y.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(ae, {
                variant: "primary",
                size: "sm",
                onClick: S[0] || (S[0] = (ie) => A.value = !0)
              }, {
                default: i(() => [...S[15] || (S[15] = [
                  h(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              b(ae, {
                variant: "primary",
                size: "sm",
                onClick: S[1] || (S[1] = (ie) => x.value = !0)
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
                style: wt({ width: `${F.value.current / F.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : d("", !0),
          b(Pt, {
            modelValue: _.value,
            "onUpdate:modelValue": S[3] || (S[3] = (ie) => _.value = ie),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          m.value || F.value ? (s(), E(kt, {
            key: 0,
            message: F.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : w.value ? (s(), E(bt, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: q
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            r.value.length ? (s(), E(jt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                h(" Total: " + a(r.value.length) + " models • " + a(N(G.value)), 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(W, null, oe(R.value, (ie) => (s(), E(Be, {
              key: ie.type,
              title: ie.type.toUpperCase(),
              count: ie.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (s(!0), o(W, null, oe(ie.models, (X) => (s(), E(He, {
                  key: X.sha256 || X.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...S[17] || (S[17] = [
                    h("📦", -1)
                  ])]),
                  title: i(() => [
                    h(a(X.filename), 1)
                  ]),
                  subtitle: i(() => [
                    h(a(N(X.size)), 1)
                  ]),
                  details: i(() => [
                    b(Ne, {
                      label: "Hash:",
                      value: X.hash ? X.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    b(ae, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ie) => re(X)
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
            I.value.length ? d("", !0) : (s(), E(it, {
              key: 1,
              icon: "📭",
              message: _.value ? `No models match '${_.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      b(vt, {
        show: k.value,
        title: "About Workspace Model Index",
        onClose: S[4] || (S[4] = (ie) => k.value = !1)
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
      T.value ? (s(), E(vs, {
        key: 0,
        identifier: T.value,
        onClose: S[5] || (S[5] = (ie) => T.value = null)
      }, null, 8, ["identifier"])) : d("", !0),
      (s(), E(Ve, { to: "body" }, [
        A.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[9] || (S[9] = Pe((ie) => A.value = !1, ["self"]))
        }, [
          e("div", ev, [
            e("div", tv, [
              S[20] || (S[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: S[6] || (S[6] = (ie) => A.value = !1)
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
                  "onUpdate:modelValue": S[7] || (S[7] = (ie) => C.value = ie),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              S[23] || (S[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", lv, [
              b(fe, {
                variant: "secondary",
                onClick: S[8] || (S[8] = (ie) => A.value = !1)
              }, {
                default: i(() => [...S[24] || (S[24] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              b(fe, {
                variant: "primary",
                disabled: !C.value.trim() || z.value,
                loading: z.value,
                onClick: Y
              }, {
                default: i(() => [
                  h(a(z.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : d("", !0)
      ])),
      (s(), E(Ve, { to: "body" }, [
        x.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[14] || (S[14] = Pe((ie) => x.value = !1, ["self"]))
        }, [
          e("div", iv, [
            e("div", rv, [
              S[25] || (S[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: S[10] || (S[10] = (ie) => x.value = !1)
              }, "✕")
            ]),
            e("div", dv, [
              e("div", cv, [
                S[26] || (S[26] = e("label", null, "Download URL", -1)),
                b(lt, {
                  modelValue: M.value,
                  "onUpdate:modelValue": S[11] || (S[11] = (ie) => M.value = ie),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", uv, [
                S[27] || (S[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                b(lt, {
                  modelValue: K.value,
                  "onUpdate:modelValue": S[12] || (S[12] = (ie) => K.value = ie),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              S[28] || (S[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", mv, [
              b(fe, {
                variant: "secondary",
                onClick: S[13] || (S[13] = (ie) => x.value = !1)
              }, {
                default: i(() => [...S[29] || (S[29] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              b(fe, {
                variant: "primary",
                disabled: !M.value.trim() || !K.value.trim(),
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
}), fv = /* @__PURE__ */ ee(vv, [["__scopeId", "data-v-73b78d84"]]), gv = { class: "node-details" }, pv = { class: "status-row" }, hv = {
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
}, Tv = /* @__PURE__ */ Z({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, l = c, g = D(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), p = D(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), u = D(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (v, r) => (s(), E(Je, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: r[1] || (r[1] = (m) => l("close"))
    }, {
      body: i(() => [
        e("div", gv, [
          e("div", pv, [
            r[2] || (r[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: me(["status-badge", g.value])
            }, a(p.value), 3)
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
}), Rv = /* @__PURE__ */ ee(Tv, [["__scopeId", "data-v-b342f626"]]), Lv = { class: "dialog-message" }, Pv = {
  key: 0,
  class: "dialog-details"
}, zv = {
  key: 1,
  class: "dialog-warning"
}, Dv = /* @__PURE__ */ Z({
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
    return (c, n) => (s(), E(Je, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (l) => c.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", Lv, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", Pv, [
          (s(!0), o(W, null, oe(t.details, (l, g) => (s(), o("div", {
            key: g,
            class: "detail-item"
          }, " • " + a(l), 1))), 128))
        ])) : d("", !0),
        t.warning ? (s(), o("p", zv, [
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
        t.secondaryAction ? (s(), E(fe, {
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
}), Bs = /* @__PURE__ */ ee(Dv, [["__scopeId", "data-v-3670b9f5"]]), Nv = { class: "mismatch-warning" }, Uv = { class: "version-mismatch" }, Ov = { class: "version-actual" }, Bv = { class: "version-expected" }, Fv = { key: 0 }, Av = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Vv = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Wv = /* @__PURE__ */ Z({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(t, { emit: c }) {
    const n = t, l = c, { getNodes: g, trackNodeAsDev: p, installNode: u, uninstallNode: v } = Fe(), r = $({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), m = $(!1), y = $(null), w = $(""), _ = $(!1), k = $(null), T = $(null), A = D(() => {
      if (!w.value.trim()) return r.value.nodes;
      const te = w.value.toLowerCase();
      return r.value.nodes.filter(
        (Y) => {
          var ce, q;
          return Y.name.toLowerCase().includes(te) || ((ce = Y.description) == null ? void 0 : ce.toLowerCase().includes(te)) || ((q = Y.repository) == null ? void 0 : q.toLowerCase().includes(te));
        }
      );
    }), f = D(
      () => A.value.filter((te) => te.installed && te.tracked)
    ), C = D(
      () => A.value.filter((te) => !te.installed && te.tracked)
    ), z = D(
      () => A.value.filter((te) => te.installed && !te.tracked)
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
    const M = D(() => n.versionMismatches.length > 0);
    function K(te) {
      return !te.used_in_workflows || te.used_in_workflows.length === 0 ? "Not used in any workflows" : te.used_in_workflows.length === 1 ? te.used_in_workflows[0] : `${te.used_in_workflows.length} workflows`;
    }
    function F(te) {
      k.value = te;
    }
    function G() {
      l("open-node-manager");
    }
    function I(te) {
      T.value = {
        title: "Track as Development Node",
        message: `Track "${te}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            m.value = !0;
            const Y = await p(te);
            Y.status === "success" ? (l("toast", `✓ Node "${te}" tracked as development`, "success"), await re()) : l("toast", `Failed to track node: ${Y.message || "Unknown error"}`, "error");
          } catch (Y) {
            l("toast", `Error tracking node: ${Y instanceof Error ? Y.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function R(te) {
      T.value = {
        title: "Remove Untracked Node",
        message: `Remove "${te}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          T.value = null;
          try {
            m.value = !0;
            const Y = await v(te);
            Y.status === "success" ? (l("toast", `✓ Node "${te}" removed`, "success"), await re()) : l("toast", `Failed to remove node: ${Y.message || "Unknown error"}`, "error");
          } catch (Y) {
            l("toast", `Error removing node: ${Y instanceof Error ? Y.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function N(te) {
      T.value = {
        title: "Install Missing Node",
        message: `Install "${te}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            m.value = !0;
            const Y = await u(te);
            Y.status === "success" ? (l("toast", `✓ Node "${te}" installed`, "success"), await re()) : l("toast", `Failed to install node: ${Y.message || "Unknown error"}`, "error");
          } catch (Y) {
            l("toast", `Error installing node: ${Y instanceof Error ? Y.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    async function re() {
      m.value = !0, y.value = null;
      try {
        r.value = await g();
      } catch (te) {
        y.value = te instanceof Error ? te.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return Ue(re), (te, Y) => (s(), o(W, null, [
      b(qe, null, {
        header: i(() => [
          b(Ke, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: Y[0] || (Y[0] = (ce) => _.value = !0)
          }, {
            actions: i(() => [
              b(ae, {
                variant: "primary",
                size: "sm",
                onClick: G
              }, {
                default: i(() => [...Y[7] || (Y[7] = [
                  h(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          b(Pt, {
            modelValue: w.value,
            "onUpdate:modelValue": Y[1] || (Y[1] = (ce) => w.value = ce),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          m.value ? (s(), E(kt, {
            key: 0,
            message: "Loading nodes..."
          })) : y.value ? (s(), E(bt, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: re
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            r.value.total_count ? (s(), E(jt, {
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
            M.value ? (s(), E(Be, {
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
                (s(!0), o(W, null, oe(t.versionMismatches, (ce) => (s(), E(He, {
                  key: ce.name,
                  status: "warning"
                }, {
                  icon: i(() => [...Y[9] || (Y[9] = [
                    h("⚠", -1)
                  ])]),
                  title: i(() => [
                    h(a(ce.name), 1)
                  ]),
                  subtitle: i(() => [
                    e("span", Uv, [
                      e("span", Ov, a(ce.actual), 1),
                      Y[10] || (Y[10] = e("span", { class: "version-arrow" }, "→", -1)),
                      e("span", Bv, a(ce.expected), 1)
                    ])
                  ]),
                  actions: i(() => [
                    b(ae, {
                      variant: "warning",
                      size: "sm",
                      onClick: Y[2] || (Y[2] = (q) => l("repair-environment"))
                    }, {
                      default: i(() => [...Y[11] || (Y[11] = [
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
              default: i(() => [
                (s(!0), o(W, null, oe(z.value, (ce) => (s(), E(He, {
                  key: ce.name,
                  status: "warning"
                }, {
                  icon: i(() => [...Y[12] || (Y[12] = [
                    h("?", -1)
                  ])]),
                  title: i(() => [
                    h(a(ce.name), 1)
                  ]),
                  subtitle: i(() => [...Y[13] || (Y[13] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: i(() => [
                    b(Ne, {
                      label: "Used by:",
                      value: K(ce)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    b(ae, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (q) => F(ce)
                    }, {
                      default: i(() => [...Y[14] || (Y[14] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(ae, {
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => I(ce.name)
                    }, {
                      default: i(() => [...Y[15] || (Y[15] = [
                        h(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(ae, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (q) => R(ce.name)
                    }, {
                      default: i(() => [...Y[16] || (Y[16] = [
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
                (s(!0), o(W, null, oe(f.value, (ce) => (s(), E(He, {
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
                    ce.version ? (s(), o("span", Fv, a(ce.source === "development" ? "" : "v") + a(ce.version), 1)) : (s(), o("span", Av, "version unknown")),
                    e("span", Vv, " • " + a(x(ce.source)), 1)
                  ]),
                  details: i(() => [
                    b(Ne, {
                      label: "Used by:",
                      value: K(ce)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    b(ae, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (q) => F(ce)
                    }, {
                      default: i(() => [...Y[17] || (Y[17] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(ae, {
                      variant: "secondary",
                      size: "xs",
                      onClick: G
                    }, {
                      default: i(() => [...Y[18] || (Y[18] = [
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
                (s(!0), o(W, null, oe(C.value, (ce) => (s(), E(He, {
                  key: ce.name,
                  status: "missing"
                }, {
                  icon: i(() => [...Y[19] || (Y[19] = [
                    h("!", -1)
                  ])]),
                  title: i(() => [
                    h(a(ce.name), 1)
                  ]),
                  subtitle: i(() => [...Y[20] || (Y[20] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: i(() => [
                    b(Ne, {
                      label: "Required by:",
                      value: K(ce)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    b(ae, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (q) => F(ce)
                    }, {
                      default: i(() => [...Y[21] || (Y[21] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(ae, {
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => N(ce.name)
                    }, {
                      default: i(() => [...Y[22] || (Y[22] = [
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
            !f.value.length && !C.value.length && !z.value.length ? (s(), E(it, {
              key: 5,
              icon: "📭",
              message: w.value ? `No nodes match '${w.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(vt, {
        show: _.value,
        title: "About Custom Nodes",
        onClose: Y[4] || (Y[4] = (ce) => _.value = !1)
      }, {
        content: i(() => [...Y[23] || (Y[23] = [
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
          b(ae, {
            variant: "primary",
            onClick: Y[3] || (Y[3] = (ce) => _.value = !1)
          }, {
            default: i(() => [...Y[24] || (Y[24] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), E(Rv, {
        key: 0,
        node: k.value,
        onClose: Y[5] || (Y[5] = (ce) => k.value = null)
      }, null, 8, ["node"])) : d("", !0),
      T.value ? (s(), E(Bs, {
        key: 1,
        title: T.value.title,
        message: T.value.message,
        warning: T.value.warning,
        "confirm-label": T.value.confirmLabel,
        destructive: T.value.destructive,
        onConfirm: T.value.onConfirm,
        onCancel: Y[6] || (Y[6] = (ce) => T.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : d("", !0)
    ], 64));
  }
}), Gv = /* @__PURE__ */ ee(Wv, [["__scopeId", "data-v-1555a802"]]);
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
}, Yv = /* @__PURE__ */ Z({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = $(!1), l = D(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const p = c.url.slice(0, Math.floor(c.maxLength * 0.6)), u = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${p}...${u}`;
    });
    async function g() {
      try {
        await navigator.clipboard.writeText(c.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (p) {
        console.error("Failed to copy URL:", p);
      }
    }
    return (p, u) => (s(), o("div", jv, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(l.value), 9, Hv),
      e("button", {
        class: me(["copy-btn", { copied: n.value }]),
        onClick: g,
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
}), Xv = /* @__PURE__ */ ee(Yv, [["__scopeId", "data-v-7768a58d"]]), Qv = { class: "remote-title" }, Zv = {
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
}, lf = /* @__PURE__ */ Z({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const c = t, n = D(() => c.fetchingRemote === c.remote.name), l = D(() => c.remote.is_default), g = D(() => c.syncStatus && c.syncStatus.behind > 0), p = D(() => c.syncStatus && c.syncStatus.ahead > 0), u = D(() => c.remote.push_url !== c.remote.fetch_url), v = D(() => {
      const m = c.remote.fetch_url, y = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return y ? `https://${y[1]}/${y[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), r = D(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, y) => (s(), E(He, {
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
          onClick: y[0] || (y[0] = Pe(() => {
          }, ["stop"]))
        }, a(r.value), 9, nf)) : (s(), o("span", af, a(r.value), 1))
      ]),
      actions: i(() => [
        b(ae, {
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
        b(ae, {
          variant: g.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: y[2] || (y[2] = (w) => m.$emit("pull", t.remote.name))
        }, {
          default: i(() => [
            h(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(ae, {
          variant: p.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: y[3] || (y[3] = (w) => m.$emit("push", t.remote.name))
        }, {
          default: i(() => [
            h(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(ae, {
          variant: "secondary",
          size: "xs",
          onClick: y[4] || (y[4] = (w) => m.$emit("edit", t.remote.name))
        }, {
          default: i(() => [...y[7] || (y[7] = [
            h(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        l.value ? d("", !0) : (s(), E(ae, {
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
}), rf = /* @__PURE__ */ ee(lf, [["__scopeId", "data-v-8310f3a8"]]), df = ["for"], cf = {
  key: 0,
  class: "base-form-field-required"
}, uf = { class: "base-form-field-input" }, mf = {
  key: 1,
  class: "base-form-field-error"
}, vf = {
  key: 2,
  class: "base-form-field-hint"
}, ff = /* @__PURE__ */ Z({
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
    return (l, g) => (s(), o("div", {
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
}), os = /* @__PURE__ */ ee(ff, [["__scopeId", "data-v-9a1cf296"]]), gf = { class: "remote-form" }, pf = { class: "form-header" }, hf = { class: "form-body" }, yf = {
  key: 0,
  class: "form-error"
}, wf = { class: "form-actions" }, kf = /* @__PURE__ */ Z({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const n = t, l = c, g = $({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), p = $(!1), u = $(null);
    $t(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      g.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const v = D(() => g.value.name.trim() !== "" && g.value.fetchUrl.trim() !== "");
    async function r() {
      if (!(!v.value || p.value)) {
        u.value = null, p.value = !0;
        try {
          l("submit", g.value);
        } catch (m) {
          u.value = m instanceof Error ? m.message : "Failed to submit form";
        } finally {
          p.value = !1;
        }
      }
    }
    return (m, y) => (s(), o("div", gf, [
      e("div", pf, [
        b(et, null, {
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
              modelValue: g.value.name,
              "onUpdate:modelValue": y[0] || (y[0] = (w) => g.value.name = w),
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
              modelValue: g.value.fetchUrl,
              "onUpdate:modelValue": y[1] || (y[1] = (w) => g.value.fetchUrl = w),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        b(os, { label: "Push URL (optional)" }, {
          default: i(() => [
            b(lt, {
              modelValue: g.value.pushUrl,
              "onUpdate:modelValue": y[2] || (y[2] = (w) => g.value.pushUrl = w),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (s(), o("div", yf, a(u.value), 1)) : d("", !0)
      ]),
      e("div", wf, [
        b(ae, {
          variant: "primary",
          size: "md",
          disabled: !v.value,
          loading: p.value,
          onClick: r
        }, {
          default: i(() => [
            h(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        b(ae, {
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
}), bf = /* @__PURE__ */ ee(kf, [["__scopeId", "data-v-56021b18"]]), _f = { class: "conflict-summary-box" }, $f = { class: "summary-header" }, Cf = { class: "summary-text" }, xf = { key: 0 }, Sf = {
  key: 1,
  class: "all-resolved"
}, If = { class: "summary-progress" }, Ef = { class: "progress-bar" }, Mf = { class: "progress-text" }, Tf = /* @__PURE__ */ Z({
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
    return (l, g) => (s(), o("div", _f, [
      e("div", $f, [
        g[0] || (g[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
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
}), Rf = /* @__PURE__ */ ee(Tf, [["__scopeId", "data-v-4e9e6cc9"]]), Lf = { class: "modal-header" }, Pf = { class: "modal-title" }, zf = { class: "modal-body" }, Df = {
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
}, sg = { class: "modal-actions" }, Ss = "comfygit.pullModelStrategy", og = /* @__PURE__ */ Z({
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
    const n = t, l = c, g = $(localStorage.getItem(Ss) || "skip");
    $t(g, (f) => {
      localStorage.setItem(Ss, f);
    });
    const p = D(() => {
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
    function T(f) {
      if (!m.value) return !1;
      const C = f.replace(/\.json$/, "");
      return m.value.workflow_conflicts.some((z) => z.name === C);
    }
    function A(f) {
      const C = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      l("pull", { modelStrategy: g.value, force: f, resolutions: C });
    }
    return (f, C) => {
      var z, x;
      return s(), E(Ve, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[11] || (C[11] = (M) => f.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: C[10] || (C[10] = Pe(() => {
            }, ["stop"]))
          }, [
            e("div", Lf, [
              e("h3", Pf, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (M) => f.$emit("close"))
              }, "✕")
            ]),
            e("div", zf, [
              t.error ? (s(), o("div", Df, [
                C[13] || (C[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  C[12] || (C[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  p.value ? (s(), o("p", Nf, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : d("", !0)
                ])
              ])) : t.loading ? (s(), o("div", Uf, [...C[14] || (C[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                h(" Loading preview... ", -1)
              ])])) : (z = t.preview) != null && z.has_uncommitted_changes ? (s(), o(W, { key: 2 }, [
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
                      (s(!0), o(W, null, oe(t.preview.changes.workflows.added, (M) => (s(), o("div", {
                        key: "a-" + M,
                        class: "change-item add"
                      }, " + " + a(M), 1))), 128)),
                      (s(!0), o(W, null, oe(t.preview.changes.workflows.modified, (M) => (s(), o("div", {
                        key: "m-" + M,
                        class: "change-item modify"
                      }, [
                        h(" ~ " + a(M) + " ", 1),
                        T(M) ? (s(), o("span", Wf, "CONFLICT")) : d("", !0)
                      ]))), 128)),
                      (s(!0), o(W, null, oe(t.preview.changes.workflows.deleted, (M) => (s(), o("div", {
                        key: "d-" + M,
                        class: "change-item delete"
                      }, " - " + a(M), 1))), 128))
                    ])
                  ])) : d("", !0),
                  v.value > 0 ? (s(), o("details", Gf, [
                    e("summary", null, [
                      C[19] || (C[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", jf, a(v.value) + " to install", 1)
                    ]),
                    e("div", Hf, [
                      (s(!0), o(W, null, oe(t.preview.changes.nodes.to_install, (M) => (s(), o("div", {
                        key: M,
                        class: "change-item add"
                      }, " + " + a(M), 1))), 128))
                    ])
                  ])) : d("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", qf, [
                    e("summary", null, [
                      C[20] || (C[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", Kf, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", Jf, [
                      (s(!0), o(W, null, oe(t.preview.changes.models.referenced, (M) => (s(), o("div", {
                        key: M,
                        class: "change-item"
                      }, a(M), 1))), 128))
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
                        "onUpdate:modelValue": C[1] || (C[1] = (M) => g.value = M),
                        value: "all"
                      }, null, 512), [
                        [Kt, g.value]
                      ]),
                      C[22] || (C[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", Zf, [
                      Oe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[2] || (C[2] = (M) => g.value = M),
                        value: "required"
                      }, null, 512), [
                        [Kt, g.value]
                      ]),
                      C[23] || (C[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", eg, [
                      Oe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[3] || (C[3] = (M) => g.value = M),
                        value: "skip"
                      }, null, 512), [
                        [Kt, g.value]
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
              b(ae, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (M) => f.$emit("close"))
              }, {
                default: i(() => [...C[29] || (C[29] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(W, { key: 0 }, [
                b(ae, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: C[5] || (C[5] = (M) => A(!1))
                }, {
                  default: i(() => [...C[30] || (C[30] = [
                    h(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                b(ae, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: C[6] || (C[6] = (M) => A(!0))
                }, {
                  default: i(() => [...C[31] || (C[31] = [
                    h(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (x = t.preview) != null && x.has_uncommitted_changes ? (s(), E(ae, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: C[7] || (C[7] = (M) => A(!0))
              }, {
                default: i(() => [...C[32] || (C[32] = [
                  h(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(W, { key: 2 }, [
                m.value && !_.value ? (s(), E(ae, {
                  key: 0,
                  variant: "primary",
                  onClick: C[8] || (C[8] = (M) => l("openConflictResolution"))
                }, {
                  default: i(() => [
                    h(" Resolve Conflicts (" + a(w.value) + "/" + a(y.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), E(ae, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !k.value,
                  onClick: C[9] || (C[9] = (M) => A(!1))
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
}), ng = /* @__PURE__ */ ee(og, [["__scopeId", "data-v-300c7b2f"]]), ag = { class: "modal-header" }, lg = { class: "modal-title" }, ig = { class: "modal-body" }, rg = {
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
}, Cg = { class: "modal-actions" }, xg = /* @__PURE__ */ Z({
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
    function g(p) {
      n("push", { force: p });
    }
    return (p, u) => {
      var v, r, m;
      return s(), E(Ve, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: u[7] || (u[7] = (y) => p.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: u[6] || (u[6] = Pe(() => {
            }, ["stop"]))
          }, [
            e("div", ag, [
              e("h3", lg, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: u[0] || (u[0] = (y) => p.$emit("close"))
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
              b(ae, {
                variant: "secondary",
                onClick: u[2] || (u[2] = (y) => p.$emit("close"))
              }, {
                default: i(() => [...u[17] || (u[17] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = t.preview) != null && m.remote_has_new_commits ? (s(), o(W, { key: 0 }, [
                b(ae, {
                  variant: "secondary",
                  onClick: u[3] || (u[3] = (y) => p.$emit("pull-first"))
                }, {
                  default: i(() => [...u[18] || (u[18] = [
                    h(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                b(ae, {
                  variant: "destructive",
                  disabled: !l.value,
                  loading: t.pushing,
                  onClick: u[4] || (u[4] = (y) => g(!0))
                }, {
                  default: i(() => [...u[19] || (u[19] = [
                    h(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), E(ae, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: u[5] || (u[5] = (y) => g(!1))
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
}), Sg = /* @__PURE__ */ ee(xg, [["__scopeId", "data-v-bc6ded53"]]), Ig = { class: "resolution-choice-group" }, Eg = ["disabled"], Mg = ["disabled"], Tg = /* @__PURE__ */ Z({
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
}), Rg = /* @__PURE__ */ ee(Tg, [["__scopeId", "data-v-985715ed"]]), Lg = { class: "conflict-header" }, Pg = { class: "conflict-info" }, zg = { class: "workflow-name" }, Dg = { class: "conflict-description" }, Ng = {
  key: 0,
  class: "resolved-badge"
}, Ug = { class: "resolved-text" }, Og = { class: "conflict-hashes" }, Bg = { class: "hash-item" }, Fg = { class: "hash-item" }, Ag = { class: "conflict-actions" }, Vg = /* @__PURE__ */ Z({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: c }) {
    const n = t, l = c, g = $(n.resolution);
    $t(() => n.resolution, (r) => {
      g.value = r;
    }), $t(g, (r) => {
      r && l("resolve", r);
    });
    const p = D(() => g.value !== null), u = D(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), v = D(() => {
      switch (g.value) {
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
        class: me(["conflict-item", { resolved: p.value }])
      }, [
        e("div", Lg, [
          m[2] || (m[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", Pg, [
            e("code", zg, a(t.conflict.name) + ".json", 1),
            e("div", Dg, a(u.value), 1)
          ]),
          p.value ? (s(), o("div", Ng, [
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
            modelValue: g.value,
            "onUpdate:modelValue": m[0] || (m[0] = (_) => g.value = _),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), Wg = /* @__PURE__ */ ee(Vg, [["__scopeId", "data-v-506d3bbf"]]), Gg = { class: "resolution-content" }, jg = {
  key: 0,
  class: "error-box"
}, Hg = { class: "resolution-header" }, qg = { class: "header-stats" }, Kg = { class: "stat" }, Jg = { class: "stat-value" }, Yg = { class: "stat resolved" }, Xg = { class: "stat-value" }, Qg = {
  key: 0,
  class: "stat pending"
}, Zg = { class: "stat-value" }, ep = { class: "conflicts-list" }, tp = {
  key: 1,
  class: "all-resolved-message"
}, sp = /* @__PURE__ */ Z({
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
    const n = t, l = c, g = D(() => n.resolutions.size), p = D(() => n.workflowConflicts.length - g.value), u = D(() => g.value === n.workflowConflicts.length), v = D(
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
    return (_, k) => (s(), E(Je, {
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
          e("div", Hg, [
            e("div", qg, [
              e("div", Kg, [
                e("span", Jg, a(t.workflowConflicts.length), 1),
                k[2] || (k[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", Yg, [
                e("span", Xg, a(g.value), 1),
                k[3] || (k[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              p.value > 0 ? (s(), o("div", Qg, [
                e("span", Zg, a(p.value), 1),
                k[4] || (k[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : d("", !0)
            ]),
            k[5] || (k[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", ep, [
            (s(!0), o(W, null, oe(t.workflowConflicts, (T) => (s(), E(Wg, {
              key: T.name,
              conflict: T,
              resolution: r(T.name),
              onResolve: (A) => m(T.name, A)
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
}), op = /* @__PURE__ */ ee(sp, [["__scopeId", "data-v-c58d150d"]]), np = { class: "node-conflict-item" }, ap = { class: "node-header" }, lp = { class: "node-name" }, ip = { class: "node-id" }, rp = { class: "version-comparison" }, dp = { class: "version yours" }, cp = { class: "version theirs" }, up = { class: "chosen-version" }, mp = { class: "chosen" }, vp = { class: "chosen-reason" }, fp = { class: "affected-workflows" }, gp = { class: "wf-source" }, pp = { class: "wf-version" }, hp = /* @__PURE__ */ Z({
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
}), yp = /* @__PURE__ */ ee(hp, [["__scopeId", "data-v-8b626725"]]), wp = { class: "validation-content" }, kp = {
  key: 0,
  class: "compatible-message"
}, bp = { class: "conflicts-list" }, _p = {
  key: 2,
  class: "warnings-section"
}, $p = /* @__PURE__ */ Z({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: c }) {
    const n = t, l = c, g = D(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (p, u) => (s(), E(Je, {
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
              (s(!0), o(W, null, oe(t.validation.node_conflicts, (v) => (s(), E(yp, {
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
            h(a(g.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), Cp = /* @__PURE__ */ ee($p, [["__scopeId", "data-v-fefd26ed"]]), xp = { key: 0 }, Sp = /* @__PURE__ */ Z({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: c }) {
    const n = c, {
      getRemotes: l,
      addRemote: g,
      removeRemote: p,
      updateRemoteUrl: u,
      fetchRemote: v,
      getRemoteSyncStatus: r,
      getPullPreview: m,
      pullFromRemote: y,
      getPushPreview: w,
      pushToRemote: _,
      validateMerge: k
    } = Fe(), T = $([]), A = $(null), f = $({}), C = $(!1), z = $(null), x = $(""), M = $(!1), K = $(null), F = $(!1), G = $("add"), I = $({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), R = D(() => {
      if (!x.value.trim()) return T.value;
      const V = x.value.toLowerCase();
      return T.value.filter(
        (se) => se.name.toLowerCase().includes(V) || se.fetch_url.toLowerCase().includes(V) || se.push_url.toLowerCase().includes(V)
      );
    });
    async function N() {
      C.value = !0, z.value = null;
      try {
        const V = await l();
        T.value = V.remotes, A.value = V.current_branch_tracking || null, await Promise.all(
          V.remotes.map(async (se) => {
            const pe = await r(se.name);
            pe && (f.value[se.name] = pe);
          })
        );
      } catch (V) {
        z.value = V instanceof Error ? V.message : "Failed to load remotes";
      } finally {
        C.value = !1;
      }
    }
    function re() {
      G.value = "add", I.value = { name: "", fetchUrl: "", pushUrl: "" }, F.value = !0;
    }
    function te(V) {
      const se = T.value.find((pe) => pe.name === V);
      se && (G.value = "edit", I.value = {
        name: se.name,
        fetchUrl: se.fetch_url,
        pushUrl: se.push_url
      }, F.value = !0);
    }
    async function Y(V) {
      try {
        G.value === "add" ? await g(V.name, V.fetchUrl) : await u(V.name, V.fetchUrl, V.pushUrl || void 0), F.value = !1, await N();
      } catch (se) {
        z.value = se instanceof Error ? se.message : "Operation failed";
      }
    }
    function ce() {
      F.value = !1, I.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function q(V) {
      K.value = V;
      try {
        await v(V);
        const se = await r(V);
        se && (f.value[V] = se), n("toast", `✓ Fetched from ${V}`, "success");
      } catch (se) {
        n("toast", se instanceof Error ? se.message : "Fetch failed", "error");
      } finally {
        K.value = null;
      }
    }
    async function L(V) {
      if (confirm(`Remove remote "${V}"?`))
        try {
          await p(V), await N();
        } catch (se) {
          z.value = se instanceof Error ? se.message : "Failed to remove remote";
        }
    }
    function P() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const S = $("idle"), ie = D(() => S.value === "pull_preview"), X = D(
      () => S.value === "resolving" || S.value === "validating"
    ), Ie = D(
      () => S.value === "validation_review" || S.value === "executing"
    ), be = $(!1), Te = $(null), Le = $(!1), ue = $(null), ve = $(!1), Ee = $(null), Q = $(null), ne = $(/* @__PURE__ */ new Map()), he = $(null), ze = $(null), tt = D(() => Ee.value && Fs(Ee.value) ? Ee.value : null);
    async function rt(V) {
      ue.value = V, S.value = "pull_preview", ve.value = !0, Ee.value = null, Q.value = null;
      try {
        Ee.value = await m(V);
      } catch (se) {
        Q.value = se instanceof Error ? se.message : "Failed to load pull preview";
      } finally {
        ve.value = !1;
      }
    }
    function xe() {
      S.value = "idle", Ee.value = null, Q.value = null, ue.value = null;
    }
    async function Xe(V) {
      if (!ue.value) return;
      S.value = "executing", Q.value = null;
      const se = ue.value;
      try {
        const pe = await y(se, V);
        if (pe.rolled_back) {
          Q.value = `Pull failed and was rolled back: ${pe.error || "Unknown error"}`, S.value = "pull_preview";
          return;
        }
        le(), S.value = "idle", n("toast", `✓ Pulled from ${se}`, "success"), await N();
      } catch (pe) {
        Q.value = pe instanceof Error ? pe.message : "Pull failed", S.value = "pull_preview";
      }
    }
    function Ge() {
      tt.value && (S.value = "resolving", ze.value = null);
    }
    function je(V, se) {
      ne.value.set(V, { name: V, resolution: se });
    }
    function ft() {
      S.value = "pull_preview";
    }
    async function ye() {
      S.value = "validating", ze.value = null;
      try {
        const V = Array.from(ne.value.values());
        he.value = await k(ue.value, V), S.value = "validation_review";
      } catch (V) {
        ze.value = V instanceof Error ? V.message : "Validation failed", S.value = "resolving";
      }
    }
    async function Ae() {
      S.value = "executing";
      const V = ue.value;
      try {
        const se = Array.from(ne.value.values()), pe = await y(V, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: se
        });
        if (pe.rolled_back) {
          Q.value = `Pull failed and was rolled back: ${pe.error || "Unknown error"}`, S.value = "pull_preview";
          return;
        }
        le(), S.value = "idle", n("toast", `✓ Pulled from ${V}`, "success"), await N();
      } catch (se) {
        Q.value = se instanceof Error ? se.message : "Pull failed", S.value = "validation_review";
      }
    }
    function dt() {
      S.value = "resolving";
    }
    function st() {
      le(), S.value = "idle";
    }
    function le() {
      ne.value.clear(), he.value = null, ze.value = null, Q.value = null, Ee.value = null, ue.value = null;
    }
    async function J(V) {
      ue.value = V, be.value = !0, ve.value = !0, Te.value = null;
      try {
        Te.value = await w(V);
      } catch (se) {
        z.value = se instanceof Error ? se.message : "Failed to load push preview";
      } finally {
        ve.value = !1;
      }
    }
    function Me() {
      be.value = !1, Te.value = null, ue.value = null;
    }
    async function O(V) {
      if (!ue.value) return;
      Le.value = !0;
      const se = ue.value;
      try {
        await _(se, V), Me(), n("toast", `✓ Pushed to ${se}`, "success"), await N();
      } catch (pe) {
        n("toast", pe instanceof Error ? pe.message : "Push failed", "error");
      } finally {
        Le.value = !1;
      }
    }
    function B() {
      const V = ue.value;
      Me(), V && rt(V);
    }
    return Ue(N), (V, se) => (s(), o(W, null, [
      b(qe, null, {
        header: i(() => [
          b(Ke, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: se[0] || (se[0] = (pe) => M.value = !0)
          }, {
            actions: i(() => [
              F.value ? d("", !0) : (s(), E(ae, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: re
              }, {
                default: i(() => [...se[3] || (se[3] = [
                  h(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          F.value ? d("", !0) : (s(), E(Pt, {
            key: 0,
            modelValue: x.value,
            "onUpdate:modelValue": se[1] || (se[1] = (pe) => x.value = pe),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: i(() => [
          C.value ? (s(), E(kt, {
            key: 0,
            message: "Loading remotes..."
          })) : z.value ? (s(), E(bt, {
            key: 1,
            message: z.value,
            retry: !0,
            onRetry: N
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            F.value ? (s(), E(bf, {
              key: 0,
              mode: G.value,
              "remote-name": I.value.name,
              "fetch-url": I.value.fetchUrl,
              "push-url": I.value.pushUrl,
              onSubmit: Y,
              onCancel: ce
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            T.value.length && !F.value ? (s(), E(jt, {
              key: 1,
              variant: "compact"
            }, {
              default: i(() => [
                h(" Total: " + a(T.value.length) + " remote" + a(T.value.length !== 1 ? "s" : "") + " ", 1),
                A.value ? (s(), o("span", xp, " • Tracking: " + a(A.value.remote) + "/" + a(A.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            R.value.length && !F.value ? (s(), E(Be, {
              key: 2,
              title: "REMOTES",
              count: R.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, oe(R.value, (pe) => (s(), E(rf, {
                  key: pe.name,
                  remote: pe,
                  "sync-status": f.value[pe.name],
                  "fetching-remote": K.value,
                  onFetch: q,
                  onEdit: te,
                  onRemove: L,
                  onPull: rt,
                  onPush: J
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !R.value.length && !F.value ? (s(), E(it, {
              key: 3,
              icon: "🌐",
              message: x.value ? `No remotes match '${x.value}'` : "No remotes configured."
            }, {
              actions: i(() => [
                b(ae, {
                  variant: "primary",
                  onClick: re
                }, {
                  default: i(() => [...se[4] || (se[4] = [
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
      b(vt, {
        show: M.value,
        title: "About Git Remotes",
        onClose: se[2] || (se[2] = (pe) => M.value = !1)
      }, {
        content: i(() => [...se[5] || (se[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            h(" The "),
            e("strong", null, '"origin"'),
            h(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: i(() => [
          b(ae, {
            variant: "link",
            onClick: P
          }, {
            default: i(() => [...se[6] || (se[6] = [
              h(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b(ng, {
        show: ie.value,
        "remote-name": ue.value || "",
        preview: Ee.value,
        loading: ve.value,
        pulling: S.value === "executing",
        error: Q.value,
        "conflict-resolutions": ne.value,
        onClose: xe,
        onPull: Xe,
        onOpenConflictResolution: Ge
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      b(Sg, {
        show: be.value,
        "remote-name": ue.value || "",
        preview: Te.value,
        loading: ve.value,
        pushing: Le.value,
        onClose: Me,
        onPush: O,
        onPullFirst: B
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      X.value && tt.value ? (s(), E(op, {
        key: 0,
        "workflow-conflicts": tt.value.workflow_conflicts,
        resolutions: ne.value,
        "operation-type": "pull",
        validating: S.value === "validating",
        error: ze.value,
        onClose: ft,
        onResolve: je,
        onApply: ye
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : d("", !0),
      Ie.value && he.value ? (s(), E(Cp, {
        key: 1,
        validation: he.value,
        "operation-type": "pull",
        executing: S.value === "executing",
        onProceed: Ae,
        onGoBack: dt,
        onCancel: st
      }, null, 8, ["validation", "executing"])) : d("", !0)
    ], 64));
  }
}), Ip = /* @__PURE__ */ ee(Sp, [["__scopeId", "data-v-9ae3b76d"]]), Ep = { class: "setting-info" }, Mp = { class: "setting-label" }, Tp = {
  key: 0,
  class: "required-marker"
}, Rp = {
  key: 0,
  class: "setting-description"
}, Lp = { class: "setting-control" }, Pp = /* @__PURE__ */ Z({
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
      e("div", Lp, [
        $e(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), ns = /* @__PURE__ */ ee(Pp, [["__scopeId", "data-v-cb5d236c"]]), zp = { class: "toggle" }, Dp = ["checked", "disabled"], Np = /* @__PURE__ */ Z({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", zp, [
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
}), Up = /* @__PURE__ */ ee(Np, [["__scopeId", "data-v-71c0f550"]]), Op = { class: "workspace-settings-content" }, Bp = { class: "settings-section" }, Fp = { class: "path-setting" }, Ap = { class: "path-value" }, Vp = { class: "path-setting" }, Wp = { class: "path-value" }, Gp = { class: "settings-section" }, jp = { class: "settings-section" }, Hp = { class: "settings-section" }, qp = /* @__PURE__ */ Z({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(t, { expose: c, emit: n }) {
    const l = t, g = n, { getConfig: p, updateConfig: u } = Fe(), v = $(!1), r = $(null), m = $(null), y = $(null), w = $(null), _ = $(""), k = $(""), T = $(!1);
    function A(F) {
      return F.join(" ");
    }
    function f(F) {
      return F.trim() ? F.trim().split(/\s+/) : [];
    }
    const C = D(() => {
      if (!w.value) return !1;
      const F = _.value !== (w.value.civitai_api_key || ""), G = k.value !== A(w.value.comfyui_extra_args || []);
      return F || G;
    });
    async function z() {
      v.value = !0, r.value = null;
      try {
        y.value = await p(l.workspacePath || void 0), w.value = { ...y.value }, _.value = y.value.civitai_api_key || "", k.value = A(y.value.comfyui_extra_args || []);
        const F = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        T.value = F === "true";
      } catch (F) {
        r.value = F instanceof Error ? F.message : "Failed to load settings";
      } finally {
        v.value = !1;
      }
    }
    async function x() {
      var F, G;
      m.value = null;
      try {
        const I = {};
        _.value !== (((F = w.value) == null ? void 0 : F.civitai_api_key) || "") && (I.civitai_api_key = _.value || null), k.value !== A(((G = w.value) == null ? void 0 : G.comfyui_extra_args) || []) && (I.comfyui_extra_args = f(k.value)), await u(I, l.workspacePath || void 0), await z(), m.value = { type: "success", message: "Settings saved successfully" }, g("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (I) {
        const R = I instanceof Error ? I.message : "Failed to save settings";
        m.value = { type: "error", message: R }, g("error", R);
      }
    }
    function M() {
      w.value && (_.value = w.value.civitai_api_key || "", k.value = A(w.value.comfyui_extra_args || []), m.value = null);
    }
    function K(F) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(F)), console.log("[ComfyGit] Auto-refresh setting saved:", F);
    }
    return c({
      saveSettings: x,
      resetSettings: M,
      hasChanges: C,
      loadSettings: z
    }), Ue(z), (F, G) => (s(), o("div", Op, [
      v.value ? (s(), E(kt, {
        key: 0,
        message: "Loading workspace settings..."
      })) : r.value ? (s(), E(bt, {
        key: 1,
        message: r.value,
        retry: !0,
        onRetry: z
      }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
        b(Be, { title: "WORKSPACE PATHS" }, {
          default: i(() => {
            var I, R;
            return [
              e("div", Bp, [
                e("div", Fp, [
                  G[3] || (G[3] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                  G[4] || (G[4] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  e("div", Ap, a(((I = y.value) == null ? void 0 : I.workspace_path) || "Loading..."), 1)
                ]),
                e("div", Vp, [
                  G[5] || (G[5] = e("div", { class: "path-label" }, "Models Directory", -1)),
                  G[6] || (G[6] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
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
                    modelValue: _.value,
                    "onUpdate:modelValue": G[0] || (G[0] = (I) => _.value = I),
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
                    "onUpdate:modelValue": G[1] || (G[1] = (I) => k.value = I),
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
            e("div", Hp, [
              b(ns, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: i(() => [
                  b(Up, {
                    modelValue: T.value,
                    "onUpdate:modelValue": [
                      G[2] || (G[2] = (I) => T.value = I),
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
        m.value ? (s(), E(jt, {
          key: 0,
          variant: (m.value.type === "success", "compact")
        }, {
          default: i(() => [
            e("span", {
              style: wt({ color: m.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, a(m.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : d("", !0)
      ], 64))
    ]));
  }
}), As = /* @__PURE__ */ ee(qp, [["__scopeId", "data-v-9f44552d"]]), Kp = /* @__PURE__ */ Z({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const c = $(null);
    function n() {
      console.log("[ComfyGit] Settings saved");
    }
    return (l, g) => (s(), E(qe, null, {
      header: i(() => [
        b(Ke, { title: "WORKSPACE SETTINGS" }, {
          actions: i(() => {
            var p, u;
            return [
              b(ae, {
                variant: "primary",
                size: "sm",
                disabled: !((p = c.value) != null && p.hasChanges),
                onClick: g[0] || (g[0] = (v) => {
                  var r;
                  return (r = c.value) == null ? void 0 : r.saveSettings();
                })
              }, {
                default: i(() => [...g[2] || (g[2] = [
                  h(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (u = c.value) != null && u.hasChanges ? (s(), E(ae, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: g[1] || (g[1] = (v) => {
                  var r;
                  return (r = c.value) == null ? void 0 : r.resetSettings();
                })
              }, {
                default: i(() => [...g[3] || (g[3] = [
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
}), Jp = /* @__PURE__ */ Z({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c, getWorkspaceLogPath: n, openFile: l } = Fe(), g = $([]), p = $(!1), u = $(null), v = $(!1), r = $(null), m = $(null), y = $(!1), w = D(() => g.value.length === 0 ? [] : g.value.map((A) => ({
      text: `${A.timestamp} - ${A.name} - ${A.level} - ${A.func}:${A.line} - ${A.message}`,
      level: A.level
    })));
    async function _() {
      p.value = !0, u.value = null;
      try {
        g.value = await c(void 0, 500);
      } catch (A) {
        u.value = A instanceof Error ? A.message : "Failed to load workspace logs";
      } finally {
        p.value = !1, setTimeout(() => {
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
    async function T() {
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
    return Ue(() => {
      _(), k();
    }), (A, f) => (s(), o(W, null, [
      b(qe, null, {
        header: i(() => [
          b(Ke, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: f[0] || (f[0] = (C) => v.value = !0)
          }, {
            actions: i(() => [
              b(ae, {
                variant: "secondary",
                size: "sm",
                onClick: T,
                disabled: !m.value || y.value,
                title: "Open log file in default editor"
              }, {
                default: i(() => [
                  h(a(y.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(ae, {
                variant: "secondary",
                size: "sm",
                onClick: _,
                disabled: p.value
              }, {
                default: i(() => [
                  h(a(p.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          p.value ? (s(), E(kt, {
            key: 0,
            message: "Loading workspace logs..."
          })) : u.value ? (s(), E(bt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            g.value.length === 0 ? (s(), E(it, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: r,
              class: "log-output"
            }, [
              (s(!0), o(W, null, oe(w.value, (C, z) => (s(), o("div", {
                key: z,
                class: me(`log-line log-level-${C.level.toLowerCase()}`)
              }, a(C.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      b(vt, {
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
          b(ae, {
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
}), Yp = /* @__PURE__ */ ee(Jp, [["__scopeId", "data-v-7f05352a"]]), Xp = /* @__PURE__ */ Z({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n, getEnvironmentLogPath: l, openFile: g } = Fe(), p = $([]), u = $(!1), v = $(null), r = $(!1), m = $("production"), y = $(null), w = $(null), _ = $(!1), k = D(() => p.value.length === 0 ? [] : p.value.map((C) => ({
      text: `${C.timestamp} - ${C.name} - ${C.level} - ${C.func}:${C.line} - ${C.message}`,
      level: C.level
    })));
    async function T() {
      u.value = !0, v.value = null;
      try {
        p.value = await c(void 0, 500);
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
          await g(w.value);
        } catch (C) {
          console.error("Failed to open log file:", C);
        } finally {
          _.value = !1;
        }
      }
    }
    return Ue(() => {
      T(), A();
    }), (C, z) => (s(), o(W, null, [
      b(qe, null, {
        header: i(() => [
          b(Ke, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (x) => r.value = !0)
          }, {
            actions: i(() => [
              b(ae, {
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
              b(ae, {
                variant: "secondary",
                size: "sm",
                onClick: T,
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
          u.value ? (s(), E(kt, {
            key: 0,
            message: "Loading environment logs..."
          })) : v.value ? (s(), E(bt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            p.value.length === 0 ? (s(), E(it, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: y,
              class: "log-output"
            }, [
              (s(!0), o(W, null, oe(k.value, (x, M) => (s(), o("div", {
                key: M,
                class: me(`log-line log-level-${x.level.toLowerCase()}`)
              }, a(x.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      b(vt, {
        show: r.value,
        title: "About Environment Logs",
        onClose: z[2] || (z[2] = (x) => r.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            z[3] || (z[3] = h(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(m.value), 1),
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
        actions: i(() => [
          b(ae, {
            variant: "primary",
            onClick: z[1] || (z[1] = (x) => r.value = !1)
          }, {
            default: i(() => [...z[7] || (z[7] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Qp = /* @__PURE__ */ ee(Xp, [["__scopeId", "data-v-6f8db7ce"]]), Zp = { class: "env-title" }, eh = {
  key: 0,
  class: "current-badge"
}, th = {
  key: 0,
  class: "branch-info"
}, sh = /* @__PURE__ */ Z({
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
    return (c, n) => (s(), E(He, {
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
}), oh = /* @__PURE__ */ ee(sh, [["__scopeId", "data-v-9231917a"]]), nh = { class: "env-details" }, ah = { class: "status-row" }, lh = {
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
}, kh = { class: "value" }, bh = { class: "footer-actions" }, _h = /* @__PURE__ */ Z({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: c }) {
    const n = c;
    function l(g) {
      if (!g) return "Unknown";
      try {
        const p = new Date(g), v = (/* @__PURE__ */ new Date()).getTime() - p.getTime(), r = Math.floor(v / 6e4), m = Math.floor(v / 36e5), y = Math.floor(v / 864e5);
        return r < 1 ? "just now" : r < 60 ? `${r} ${r === 1 ? "minute" : "minutes"} ago` : m < 24 ? `${m} ${m === 1 ? "hour" : "hours"} ago` : y < 30 ? `${y} ${y === 1 ? "day" : "days"} ago` : p.toLocaleDateString();
      } catch {
        return g;
      }
    }
    return (g, p) => (s(), E(Je, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: p[2] || (p[2] = (u) => n("close"))
    }, {
      body: i(() => [
        e("div", nh, [
          e("div", ah, [
            p[3] || (p[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: me(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", lh, [
            p[4] || (p[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", ih, a(t.environment.current_branch), 1)
          ])) : d("", !0),
          t.environment.path ? (s(), o("div", rh, [
            p[5] || (p[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", dh, a(t.environment.path), 1)
          ])) : d("", !0),
          p[11] || (p[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", ch, [
            p[6] || (p[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", uh, a(t.environment.workflow_count), 1)
          ]),
          e("div", mh, [
            p[7] || (p[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", vh, a(t.environment.node_count), 1)
          ]),
          e("div", fh, [
            p[8] || (p[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", gh, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", ph)) : d("", !0),
          t.environment.created_at ? (s(), o("div", hh, [
            p[9] || (p[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", yh, a(l(t.environment.created_at)), 1)
          ])) : d("", !0),
          t.environment.last_used ? (s(), o("div", wh, [
            p[10] || (p[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", kh, a(l(t.environment.last_used)), 1)
          ])) : d("", !0)
        ])
      ]),
      footer: i(() => [
        e("div", bh, [
          t.canDelete ? (s(), E(fe, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: p[0] || (p[0] = (u) => n("delete", t.environment.name))
          }, {
            default: i(() => [...p[12] || (p[12] = [
              h(" Delete ", -1)
            ])]),
            _: 1
          })) : d("", !0),
          p[14] || (p[14] = e("div", { class: "footer-spacer" }, null, -1)),
          b(fe, {
            variant: "secondary",
            size: "sm",
            onClick: p[1] || (p[1] = (u) => n("close"))
          }, {
            default: i(() => [...p[13] || (p[13] = [
              h(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), $h = /* @__PURE__ */ ee(_h, [["__scopeId", "data-v-59855453"]]), Vs = [
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
], Gs = "auto", Ch = { class: "progress-bar" }, xh = /* @__PURE__ */ Z({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, n = D(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (l, g) => (s(), o("div", Ch, [
      e("div", {
        class: me(["progress-fill", t.variant]),
        style: wt({ width: n.value })
      }, null, 6)
    ]));
  }
}), js = /* @__PURE__ */ ee(xh, [["__scopeId", "data-v-1beb0512"]]), Sh = { class: "task-progress" }, Ih = { class: "progress-info" }, Eh = { class: "progress-percentage" }, Mh = { class: "progress-message" }, Th = {
  key: 0,
  class: "progress-steps"
}, Rh = { class: "step-icon" }, Lh = { class: "step-label" }, Ph = /* @__PURE__ */ Z({
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
    function n(g) {
      const p = c.steps.find((u) => u.id === g);
      return p ? c.progress >= p.progressThreshold ? "completed" : c.currentPhase === g ? "active" : "pending" : "pending";
    }
    function l(g) {
      const p = n(g);
      return p === "completed" ? "✓" : p === "active" ? "⟳" : "○";
    }
    return (g, p) => (s(), o("div", Sh, [
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
          e("span", Lh, a(u.label), 1)
        ], 2))), 128))
      ])) : d("", !0)
    ]));
  }
}), es = /* @__PURE__ */ ee(Ph, [["__scopeId", "data-v-9d1de66c"]]), zh = {
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
}, Xh = 10, Qh = /* @__PURE__ */ Z({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: c }) {
    const n = c, { getComfyUIReleases: l, createEnvironment: g, getCreateProgress: p } = Fe(), u = $(""), v = $(Ws), r = $("latest"), m = $(Gs), y = $(!1), w = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), _ = $(!1), k = $(!1), T = $({
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
    ], z = $(null);
    function x() {
      k.value || n("close");
    }
    async function M() {
      const R = u.value.trim();
      if (R) {
        k.value = !0, T.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const N = {
            name: R,
            python_version: v.value,
            comfyui_version: r.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, re = await g(N);
          re.status === "started" ? K() : re.status === "error" && (T.value = {
            progress: 0,
            message: re.message || "Failed to start creation",
            error: re.message
          });
        } catch (N) {
          T.value = {
            progress: 0,
            message: N instanceof Error ? N.message : "Unknown error",
            error: N instanceof Error ? N.message : "Unknown error"
          };
        }
      }
    }
    function K() {
      A || (f = 0, A = window.setInterval(async () => {
        try {
          const R = await p();
          f = 0, T.value = {
            progress: R.progress ?? 0,
            message: R.message,
            phase: R.phase,
            error: R.error
          }, R.state === "complete" ? (F(), n("created", R.environment_name || u.value.trim(), y.value)) : R.state === "error" ? (F(), T.value.error = R.error || R.message) : R.state === "idle" && k.value && (F(), T.value.error = "Creation was interrupted. Please try again.");
        } catch {
          f++, f >= Xh && (F(), T.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function F() {
      A && (clearInterval(A), A = null);
    }
    function G() {
      k.value = !1, T.value = { progress: 0, message: "" }, n("close");
    }
    async function I() {
      _.value = !0;
      try {
        w.value = await l();
      } catch (R) {
        console.error("Failed to load ComfyUI releases:", R);
      } finally {
        _.value = !1;
      }
    }
    return Ue(async () => {
      var R;
      await mo(), (R = z.value) == null || R.focus(), I();
    }), Ls(() => {
      F();
    }), (R, N) => (s(), E(Je, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !k.value,
      onClose: x
    }, {
      body: i(() => [
        k.value ? (s(), o("div", jh, [
          e("p", Hh, [
            N[11] || (N[11] = h(" Creating environment ", -1)),
            e("strong", null, a(u.value), 1),
            N[12] || (N[12] = h("... ", -1))
          ]),
          b(es, {
            progress: T.value.progress,
            message: T.value.message,
            "current-phase": T.value.phase,
            variant: T.value.error ? "error" : "default",
            "show-steps": !0,
            steps: C
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          T.value.error ? d("", !0) : (s(), o("p", qh, " This may take several minutes. Please wait... ")),
          T.value.error ? (s(), o("div", Kh, [
            e("p", Jh, a(T.value.error), 1)
          ])) : d("", !0)
        ])) : (s(), o("div", zh, [
          e("div", Dh, [
            N[6] || (N[6] = e("label", { class: "form-label" }, "Name", -1)),
            Oe(e("input", {
              ref_key: "nameInput",
              ref: z,
              "onUpdate:modelValue": N[0] || (N[0] = (re) => u.value = re),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: yt(M, ["enter"])
            }, null, 544), [
              [Tt, u.value]
            ])
          ]),
          e("div", Nh, [
            N[7] || (N[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Oe(e("select", {
              "onUpdate:modelValue": N[1] || (N[1] = (re) => v.value = re),
              class: "form-select"
            }, [
              (s(!0), o(W, null, oe(_e(Vs), (re) => (s(), o("option", {
                key: re,
                value: re
              }, a(re), 9, Uh))), 128))
            ], 512), [
              [Rt, v.value]
            ])
          ]),
          e("div", Oh, [
            N[8] || (N[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Oe(e("select", {
              "onUpdate:modelValue": N[2] || (N[2] = (re) => r.value = re),
              class: "form-select",
              disabled: _.value
            }, [
              (s(!0), o(W, null, oe(w.value, (re) => (s(), o("option", {
                key: re.tag_name,
                value: re.tag_name
              }, a(re.name), 9, Fh))), 128))
            ], 8, Bh), [
              [Rt, r.value]
            ])
          ]),
          e("div", Ah, [
            N[9] || (N[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Oe(e("select", {
              "onUpdate:modelValue": N[3] || (N[3] = (re) => m.value = re),
              class: "form-select"
            }, [
              (s(!0), o(W, null, oe(_e(fs), (re) => (s(), o("option", {
                key: re,
                value: re
              }, a(re) + a(re === "auto" ? " (detect GPU)" : ""), 9, Vh))), 128))
            ], 512), [
              [Rt, m.value]
            ])
          ]),
          e("div", Wh, [
            e("label", Gh, [
              Oe(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": N[4] || (N[4] = (re) => y.value = re)
              }, null, 512), [
                [Xt, y.value]
              ]),
              N[10] || (N[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: i(() => [
        k.value ? (s(), o(W, { key: 1 }, [
          T.value.error ? (s(), E(fe, {
            key: 0,
            variant: "secondary",
            onClick: G
          }, {
            default: i(() => [...N[15] || (N[15] = [
              h(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", Yh, " Creating environment... "))
        ], 64)) : (s(), o(W, { key: 0 }, [
          b(fe, {
            variant: "primary",
            disabled: !u.value.trim(),
            onClick: M
          }, {
            default: i(() => [...N[13] || (N[13] = [
              h(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(fe, {
            variant: "secondary",
            onClick: N[5] || (N[5] = (re) => n("close"))
          }, {
            default: i(() => [...N[14] || (N[14] = [
              h(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), Zh = /* @__PURE__ */ ee(Qh, [["__scopeId", "data-v-f37eaa42"]]), e1 = /* @__PURE__ */ Z({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: c, emit: n }) {
    const l = n, { getEnvironments: g } = Fe(), p = $([]), u = $(!1), v = $(null), r = $(""), m = $(!1), y = $(!1), w = $(null), _ = D(() => {
      if (!r.value.trim()) return p.value;
      const z = r.value.toLowerCase();
      return p.value.filter(
        (x) => {
          var M;
          return x.name.toLowerCase().includes(z) || ((M = x.current_branch) == null ? void 0 : M.toLowerCase().includes(z));
        }
      );
    });
    function k(z, x) {
      y.value = !1, l("created", z, x);
    }
    function T() {
      y.value = !0;
    }
    function A(z) {
      w.value = z;
    }
    function f(z) {
      w.value = null, l("delete", z);
    }
    async function C() {
      u.value = !0, v.value = null;
      try {
        p.value = await g();
      } catch (z) {
        v.value = z instanceof Error ? z.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return Ue(C), c({
      loadEnvironments: C,
      openCreateModal: T
    }), (z, x) => (s(), o(W, null, [
      b(qe, null, {
        header: i(() => [
          b(Ke, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (M) => m.value = !0)
          }, {
            actions: i(() => [
              b(ae, {
                variant: "primary",
                size: "sm",
                onClick: T
              }, {
                default: i(() => [...x[6] || (x[6] = [
                  h(" Create ", -1)
                ])]),
                _: 1
              }),
              b(ae, {
                variant: "secondary",
                size: "sm",
                onClick: C
              }, {
                default: i(() => [...x[7] || (x[7] = [
                  h(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          b(Pt, {
            modelValue: r.value,
            "onUpdate:modelValue": x[1] || (x[1] = (M) => r.value = M),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          u.value ? (s(), E(kt, {
            key: 0,
            message: "Loading environments..."
          })) : v.value ? (s(), E(bt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            _.value.length ? (s(), E(Be, {
              key: 0,
              title: "ENVIRONMENTS",
              count: _.value.length
            }, {
              default: i(() => [
                (s(!0), o(W, null, oe(_.value, (M) => (s(), E(oh, {
                  key: M.name,
                  "environment-name": M.name,
                  "is-current": M.is_current,
                  "current-branch": M.current_branch,
                  "show-last-used": !1
                }, {
                  actions: i(() => [
                    M.is_current ? d("", !0) : (s(), E(ae, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => z.$emit("switch", M.name)
                    }, {
                      default: i(() => [...x[8] || (x[8] = [
                        h(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    b(ae, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => A(M)
                    }, {
                      default: i(() => [...x[9] || (x[9] = [
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
            _.value.length ? d("", !0) : (s(), E(it, {
              key: 1,
              icon: "🌍",
              message: r.value ? `No environments match '${r.value}'` : "No environments found. Create one to get started!"
            }, Wt({ _: 2 }, [
              r.value ? void 0 : {
                name: "actions",
                fn: i(() => [
                  b(ae, {
                    variant: "primary",
                    onClick: T
                  }, {
                    default: i(() => [...x[10] || (x[10] = [
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
      b(vt, {
        show: m.value,
        title: "About Environments",
        onClose: x[3] || (x[3] = (M) => m.value = !1)
      }, {
        content: i(() => [...x[11] || (x[11] = [
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
          b(ae, {
            variant: "secondary",
            onClick: x[2] || (x[2] = (M) => m.value = !1)
          }, {
            default: i(() => [...x[12] || (x[12] = [
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
        "can-delete": p.value.length > 1,
        onClose: x[4] || (x[4] = (M) => w.value = null),
        onDelete: f
      }, null, 8, ["environment", "can-delete"])) : d("", !0),
      y.value ? (s(), E(Zh, {
        key: 1,
        onClose: x[5] || (x[5] = (M) => y.value = !1),
        onCreated: k
      })) : d("", !0)
    ], 64));
  }
}), t1 = /* @__PURE__ */ ee(e1, [["__scopeId", "data-v-f95999f4"]]), s1 = { class: "file-path" }, o1 = { class: "file-path-text" }, n1 = ["title"], a1 = /* @__PURE__ */ Z({
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
      } catch (g) {
        console.error("Failed to copy:", g);
      }
    }
    return (g, p) => (s(), o("div", s1, [
      p[0] || (p[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", o1, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: l
      }, a(n.value ? "✓" : "📋"), 9, n1)) : d("", !0)
    ]));
  }
}), l1 = /* @__PURE__ */ ee(a1, [["__scopeId", "data-v-f0982173"]]), i1 = { class: "export-blocked" }, r1 = { class: "issues-list" }, d1 = { class: "issue-message" }, c1 = {
  key: 0,
  class: "issue-details"
}, u1 = ["onClick"], m1 = { class: "issue-fix" }, v1 = /* @__PURE__ */ Z({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(t) {
    const c = t, n = ts({});
    function l(g) {
      const p = c.issues[g];
      return n[g] || p.details.length <= 3 ? p.details : p.details.slice(0, 3);
    }
    return (g, p) => (s(), E(Je, {
      title: "Cannot Export",
      size: "md",
      onClose: p[1] || (p[1] = (u) => g.$emit("close"))
    }, {
      body: i(() => [
        e("div", i1, [
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
          onClick: p[0] || (p[0] = (u) => g.$emit("close"))
        }, {
          default: i(() => [...p[3] || (p[3] = [
            h(" Understood ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), f1 = /* @__PURE__ */ ee(v1, [["__scopeId", "data-v-b52f5e32"]]), g1 = { class: "export-warnings" }, p1 = {
  key: 0,
  class: "success-header"
}, h1 = { class: "warning-header" }, y1 = { class: "warning-summary" }, w1 = { class: "warning-title" }, k1 = { class: "models-section" }, b1 = { class: "models-list" }, _1 = { class: "model-info" }, $1 = { class: "model-filename" }, C1 = { class: "model-workflows" }, x1 = ["onClick"], S1 = /* @__PURE__ */ Z({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(t, { emit: c }) {
    const n = t, l = c, g = $(!1), p = $(null), u = D(() => g.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function v() {
      p.value = null, l("revalidate");
    }
    return (r, m) => (s(), o(W, null, [
      b(Je, {
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
                      onClick: (w) => p.value = y.hash
                    }, " Add Source ", 8, x1)
                  ]))), 128))
                ]),
                t.models.length > 3 && !g.value ? (s(), o("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: m[0] || (m[0] = (y) => g.value = !0)
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
      p.value ? (s(), E(vs, {
        key: 0,
        identifier: p.value,
        onClose: v
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), I1 = /* @__PURE__ */ ee(S1, [["__scopeId", "data-v-b698d882"]]), E1 = { class: "export-card" }, M1 = { class: "export-path-row" }, T1 = { class: "export-actions" }, R1 = {
  key: 1,
  class: "export-warning"
}, L1 = /* @__PURE__ */ Z({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: c, exportEnvWithForce: n } = Fe(), l = $(""), g = $(!1), p = $(!1), u = $(!1), v = $(null), r = $(!1), m = $(null), y = $(!1), w = $(!1), _ = D(() => g.value ? "Validating..." : p.value ? "Exporting..." : "Export Environment");
    async function k() {
      g.value = !0, v.value = null;
      try {
        const x = await c();
        m.value = x, x.can_export ? x.warnings.models_without_sources.length > 0 ? w.value = !0 : await f() : y.value = !0;
      } catch (x) {
        v.value = {
          status: "error",
          message: x instanceof Error ? x.message : "Validation failed"
        };
      } finally {
        g.value = !1;
      }
    }
    async function T() {
      w.value = !1, await f();
    }
    async function A() {
      try {
        const x = await c();
        m.value = x;
      } catch (x) {
        console.error("Re-validation failed:", x);
      }
    }
    async function f() {
      p.value = !0;
      try {
        const x = await n(l.value || void 0);
        v.value = x;
      } catch (x) {
        v.value = {
          status: "error",
          message: x instanceof Error ? x.message : "Export failed"
        };
      } finally {
        p.value = !1;
      }
    }
    async function C() {
      var x;
      if ((x = v.value) != null && x.path)
        try {
          await navigator.clipboard.writeText(v.value.path);
        } catch (M) {
          console.error("Failed to copy path:", M);
        }
    }
    async function z() {
      var x;
      if ((x = v.value) != null && x.path) {
        u.value = !0;
        try {
          const M = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(v.value.path)}`);
          if (!M.ok)
            throw new Error(`Download failed: ${M.statusText}`);
          const K = await M.blob(), F = URL.createObjectURL(K), G = v.value.path.split("/").pop() || "environment-export.tar.gz", I = document.createElement("a");
          I.href = F, I.download = G, document.body.appendChild(I), I.click(), document.body.removeChild(I), URL.revokeObjectURL(F);
        } catch (M) {
          console.error("Failed to download:", M), alert(`Download failed: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
      }
    }
    return (x, M) => (s(), o(W, null, [
      b(qe, null, {
        header: i(() => [
          b(Ke, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (K) => r.value = !0)
          })
        ]),
        content: i(() => [
          b(Be, { title: "EXPORT OPTIONS" }, {
            default: i(() => [
              e("div", E1, [
                M[7] || (M[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", M1, [
                  b(Qt, {
                    modelValue: l.value,
                    "onUpdate:modelValue": M[1] || (M[1] = (K) => l.value = K),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", T1, [
                  b(ae, {
                    variant: "primary",
                    size: "md",
                    loading: g.value || p.value,
                    disabled: g.value || p.value,
                    onClick: k
                  }, {
                    default: i(() => [
                      M[6] || (M[6] = e("svg", {
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
          v.value ? (s(), E(Be, {
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
                    v.value.models_without_sources && v.value.models_without_sources > 0 ? (s(), o("div", R1, [...M[8] || (M[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : d("", !0)
                  ]),
                  key: "0"
                } : void 0,
                v.value.status === "success" ? {
                  name: "actions",
                  fn: i(() => [
                    b(ae, {
                      variant: "primary",
                      size: "sm",
                      loading: u.value,
                      onClick: z
                    }, {
                      default: i(() => [...M[9] || (M[9] = [
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
                    b(ae, {
                      variant: "secondary",
                      size: "sm",
                      onClick: C
                    }, {
                      default: i(() => [...M[10] || (M[10] = [
                        h(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    b(ae, {
                      variant: "ghost",
                      size: "sm",
                      onClick: M[2] || (M[2] = (K) => v.value = null)
                    }, {
                      default: i(() => [...M[11] || (M[11] = [
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
      b(vt, {
        show: r.value,
        title: "What Gets Exported",
        onClose: M[3] || (M[3] = (K) => r.value = !1)
      }, {
        content: i(() => [...M[12] || (M[12] = [
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
        onClose: M[4] || (M[4] = (K) => y.value = !1)
      }, null, 8, ["issues"])) : d("", !0),
      w.value && m.value ? (s(), E(I1, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: T,
        onCancel: M[5] || (M[5] = (K) => w.value = !1),
        onRevalidate: A
      }, null, 8, ["models"])) : d("", !0)
    ], 64));
  }
}), P1 = /* @__PURE__ */ ee(L1, [["__scopeId", "data-v-f4d120f2"]]), z1 = { class: "file-input-wrapper" }, D1 = ["accept", "multiple", "disabled"], N1 = /* @__PURE__ */ Z({
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
    const l = n, g = $(null);
    function p() {
      var v;
      (v = g.value) == null || v.click();
    }
    function u(v) {
      const r = v.target;
      r.files && r.files.length > 0 && (l("change", r.files), r.value = "");
    }
    return c({
      triggerInput: p
    }), (v, r) => (s(), o("div", z1, [
      e("input", {
        ref_key: "fileInputRef",
        ref: g,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, D1),
      b(ae, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: p
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
}), U1 = /* @__PURE__ */ ee(N1, [["__scopeId", "data-v-cd192091"]]), O1 = {
  key: 0,
  class: "drop-zone-empty"
}, B1 = { class: "drop-zone-text" }, F1 = { class: "drop-zone-primary" }, A1 = { class: "drop-zone-secondary" }, V1 = { class: "drop-zone-actions" }, W1 = {
  key: 1,
  class: "drop-zone-file"
}, G1 = { class: "file-info" }, j1 = { class: "file-details" }, H1 = { class: "file-name" }, q1 = { class: "file-size" }, K1 = /* @__PURE__ */ Z({
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
    const n = c, l = $(!1), g = $(null), p = $(0), u = D(() => g.value !== null), v = D(() => {
      var f;
      return ((f = g.value) == null ? void 0 : f.name) || "";
    }), r = D(() => {
      if (!g.value) return "";
      const f = g.value.size;
      return f < 1024 ? `${f} B` : f < 1024 * 1024 ? `${(f / 1024).toFixed(1)} KB` : f < 1024 * 1024 * 1024 ? `${(f / (1024 * 1024)).toFixed(1)} MB` : `${(f / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m(f) {
      var C;
      f.stopPropagation(), p.value++, (C = f.dataTransfer) != null && C.types.includes("Files") && (l.value = !0);
    }
    function y(f) {
      f.stopPropagation(), f.dataTransfer && (f.dataTransfer.dropEffect = "copy");
    }
    function w(f) {
      f.stopPropagation(), p.value--, p.value === 0 && (l.value = !1);
    }
    function _(f) {
      var z;
      f.stopPropagation(), p.value = 0, l.value = !1;
      const C = (z = f.dataTransfer) == null ? void 0 : z.files;
      C && C.length > 0 && T(C[0]);
    }
    function k(f) {
      f.length > 0 && T(f[0]);
    }
    function T(f) {
      g.value = f, n("fileSelected", f);
    }
    function A() {
      g.value = null, n("clear");
    }
    return (f, C) => (s(), o("div", {
      class: me(["file-drop-zone", { "drop-active": l.value, "has-file": u.value }]),
      onDragenter: Pe(m, ["prevent"]),
      onDragover: Pe(y, ["prevent"]),
      onDragleave: Pe(w, ["prevent"]),
      onDrop: Pe(_, ["prevent"])
    }, [
      u.value ? (s(), o("div", W1, [
        e("div", G1, [
          C[1] || (C[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", j1, [
            e("div", H1, a(v.value), 1),
            e("div", q1, a(r.value), 1)
          ])
        ]),
        b(ae, {
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
}), J1 = /* @__PURE__ */ ee(K1, [["__scopeId", "data-v-0f79cb86"]]), Y1 = { class: "import-preview" }, X1 = { class: "preview-header" }, Q1 = {
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
}, Cy = { class: "git-info" }, xy = /* @__PURE__ */ Z({
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
    const c = t, n = D(() => c.workflows.length), l = D(() => c.models.length), g = D(() => c.nodes.length);
    function p(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, v) => (s(), o("div", Y1, [
      e("div", X1, [
        b(et, null, {
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
                e("span", fy, a(p(r.size)) + " • " + a(r.type), 1)
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
              e("div", wy, a(g.value) + " node" + a(g.value !== 1 ? "s" : ""), 1)
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
                b(zs, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : d("", !0)
          ])
        ])) : d("", !0)
      ])
    ]));
  }
}), Sy = /* @__PURE__ */ ee(xy, [["__scopeId", "data-v-182fe113"]]), Iy = { class: "import-config" }, Ey = { class: "config-container" }, My = { class: "config-field" }, Ty = { class: "input-wrapper" }, Ry = ["value"], Ly = {
  key: 0,
  class: "validating-indicator"
}, Py = {
  key: 1,
  class: "valid-indicator"
}, zy = {
  key: 0,
  class: "field-error"
}, Dy = { class: "config-field" }, Ny = { class: "strategy-options" }, Uy = ["value", "checked", "onChange"], Oy = { class: "strategy-content" }, By = { class: "strategy-label" }, Fy = { class: "strategy-description" }, Ay = { class: "config-field switch-field" }, Vy = { class: "switch-label" }, Wy = ["checked"], Gy = { class: "advanced-section" }, jy = { class: "advanced-content" }, Hy = { class: "config-field" }, qy = ["value"], Ky = ["value"], Jy = /* @__PURE__ */ Z({
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
    const n = t, l = c, g = $(!1), p = $(!1);
    $t(() => n.nameError, (y) => {
      g.value = !1, p.value = !y && n.name.length > 0;
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
      l("update:name", w), p.value = !1, v && clearTimeout(v), w.length > 0 ? (g.value = !0, v = setTimeout(() => {
        l("validate-name", w);
      }, 400)) : g.value = !1;
    }
    function m() {
      n.name.length > 0 && l("validate-name", n.name);
    }
    return (y, w) => (s(), o("div", Iy, [
      b(et, null, {
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
              class: me(["name-input", { error: t.nameError || t.name.length === 0, valid: p.value }]),
              value: t.name,
              placeholder: "my-imported-env",
              onInput: r,
              onBlur: m
            }, null, 42, Ry),
            g.value ? (s(), o("span", Ly, "...")) : p.value ? (s(), o("span", Py, "✓")) : d("", !0)
          ]),
          t.nameError ? (s(), o("div", zy, a(t.nameError), 1)) : d("", !0),
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
                onChange: w[1] || (w[1] = (_) => l("update:torchBackend", _.target.value))
              }, [
                (s(!0), o(W, null, oe(_e(fs), (_) => (s(), o("option", {
                  key: _,
                  value: _
                }, a(_) + a(_ === "auto" ? " (detect GPU)" : ""), 9, Ky))), 128))
              ], 40, qy)
            ])
          ])
        ])
      ])
    ]));
  }
}), Yy = /* @__PURE__ */ ee(Jy, [["__scopeId", "data-v-89ea06a1"]]), Xy = { class: "import-flow" }, Qy = {
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
}, k0 = { class: "complete-message" }, b0 = { class: "complete-title" }, _0 = { class: "complete-details" }, $0 = { class: "complete-actions" }, C0 = /* @__PURE__ */ Z({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(t, { expose: c, emit: n }) {
    var Le, ue, ve, Ee;
    const l = t, g = n, { previewTarballImport: p, previewGitImport: u, validateEnvironmentName: v, executeImport: r, executeGitImport: m, getImportProgress: y } = Fe();
    let w = null;
    const _ = $(null), k = $(l.resumeImport ?? !1), T = $(!1), A = $(!1), f = $(""), C = $(!1), z = $(null), x = $(""), M = $(null), K = $(!1), F = $(null), G = $(null), I = $({
      name: ((Le = l.initialProgress) == null ? void 0 : Le.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), R = $(null), N = $({
      message: ((ue = l.initialProgress) == null ? void 0 : ue.message) ?? "Preparing import...",
      phase: ((ve = l.initialProgress) == null ? void 0 : ve.phase) ?? "",
      progress: ((Ee = l.initialProgress) == null ? void 0 : Ee.progress) ?? 0,
      error: null
    }), re = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], te = D(() => {
      if (!G.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const Q = G.value;
      return {
        sourceEnvironment: Q.comfyui_version ? `ComfyUI ${Q.comfyui_version}` : "Unknown",
        workflows: Q.workflows.map((ne) => ne.name),
        models: Q.models.map((ne) => ({
          filename: ne.filename,
          size: 0,
          type: ne.relative_path.split("/")[0] || "model"
        })),
        nodes: Q.nodes.map((ne) => ne.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), Y = D(() => !C.value && !z.value && G.value && I.value.name.length > 0 && !R.value && (_.value || M.value));
    async function ce(Q) {
      _.value = Q, C.value = !0, z.value = null, G.value = null;
      try {
        const ne = await p(Q);
        G.value = ne;
      } catch (ne) {
        z.value = ne instanceof Error ? ne.message : "Failed to analyze file", console.error("Preview error:", ne);
      } finally {
        C.value = !1;
      }
    }
    function q() {
      _.value = null, M.value = null, x.value = "", F.value = null, T.value = !1, A.value = !1, f.value = "", G.value = null, z.value = null, I.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, R.value = null, g("source-cleared");
    }
    function L() {
      be(), q(), k.value = !1, C.value = !1, K.value = !1, N.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function P() {
      if (x.value.trim()) {
        K.value = !0, F.value = null;
        try {
          const Q = await u(x.value.trim());
          M.value = x.value.trim(), G.value = Q;
        } catch (Q) {
          F.value = Q instanceof Error ? Q.message : "Failed to analyze repository";
        } finally {
          K.value = !1;
        }
      }
    }
    function S(Q) {
      try {
        const ne = new URL(Q);
        return ne.host + ne.pathname.replace(/\.git$/, "");
      } catch {
        return Q;
      }
    }
    async function ie(Q) {
      if (!Q) {
        R.value = "Environment name is required";
        return;
      }
      try {
        const ne = await v(Q);
        R.value = ne.valid ? null : ne.error || "Invalid name";
      } catch {
        R.value = "Failed to validate name";
      }
    }
    async function X() {
      if (I.value.name && !(!_.value && !M.value)) {
        k.value = !0, T.value = !1, N.value = { message: `Creating environment '${I.value.name}'...`, phase: "", progress: 0, error: null }, g("import-started");
        try {
          let Q;
          if (_.value)
            Q = await r(
              _.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else if (M.value)
            Q = await m(
              M.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          Q.status === "started" ? Ie() : (A.value = !1, f.value = Q.message, k.value = !1, T.value = !0);
        } catch (Q) {
          A.value = !1, f.value = Q instanceof Error ? Q.message : "Unknown error occurred during import", k.value = !1, T.value = !0;
        }
      }
    }
    async function Ie() {
      if (w) return;
      const Q = async () => {
        try {
          const he = await y();
          return N.value = {
            message: he.message,
            phase: he.phase || "",
            progress: he.progress ?? (he.state === "importing" ? 50 : 0),
            error: he.error || null
          }, he.state === "complete" ? (be(), A.value = !0, f.value = `Environment '${he.environment_name}' created successfully`, k.value = !1, T.value = !0, he.environment_name && g("import-complete", he.environment_name, I.value.switchAfterImport), !1) : he.state === "error" ? (be(), A.value = !1, f.value = he.error || he.message, k.value = !1, T.value = !0, !1) : !0;
        } catch (he) {
          return console.error("Failed to poll import progress:", he), !0;
        }
      };
      await Q() && (w = setInterval(async () => {
        await Q() || be();
      }, 2e3));
    }
    function be() {
      w && (clearInterval(w), w = null);
    }
    function Te(Q) {
      return Q < 1024 ? `${Q} B` : Q < 1024 * 1024 ? `${(Q / 1024).toFixed(1)} KB` : Q < 1024 * 1024 * 1024 ? `${(Q / (1024 * 1024)).toFixed(1)} MB` : `${(Q / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Ue(async () => {
      try {
        const Q = await y();
        console.log("[ComfyGit ImportFlow] Import progress check:", Q.state, Q), Q.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", Q.environment_name), k.value = !0, I.value.name = Q.environment_name || I.value.name || "", N.value = {
          progress: Q.progress ?? 0,
          message: Q.message || "Importing...",
          phase: Q.phase || "",
          error: null
        }, Ie());
      } catch (Q) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", Q);
      }
    }), c({
      handleReset: L,
      isImporting: k,
      canImport: Y
    }), (Q, ne) => {
      var he;
      return s(), o("div", Xy, [
        !_.value && !M.value && !k.value ? (s(), o("div", Qy, [
          b(J1, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: ce
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
                onKeyup: yt(P, ["enter"]),
                disabled: K.value
              }, null, 40, t0), [
                [Tt, x.value]
              ]),
              b(ae, {
                variant: "primary",
                size: "sm",
                disabled: !x.value.trim() || K.value,
                onClick: P
              }, {
                default: i(() => [
                  h(a(K.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            F.value ? (s(), o("div", s0, a(F.value), 1)) : d("", !0),
            ne[6] || (ne[6] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (_.value || M.value) && !k.value && !T.value ? (s(), o("div", o0, [
          e("div", n0, [
            _.value ? (s(), o("div", a0, [
              ne[8] || (ne[8] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", l0, [
                e("div", i0, a(_.value.name), 1),
                e("div", r0, a(Te(_.value.size)), 1)
              ])
            ])) : M.value ? (s(), o("div", d0, [
              ne[10] || (ne[10] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
              e("div", c0, [
                e("div", u0, a(S(M.value)), 1),
                ne[9] || (ne[9] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : d("", !0),
            b(ae, {
              variant: "ghost",
              size: "sm",
              onClick: q
            }, {
              default: i(() => [...ne[11] || (ne[11] = [
                h(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          C.value ? (s(), o("div", m0, [...ne[12] || (ne[12] = [
            e("div", { class: "loading-spinner" }, null, -1),
            e("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : z.value ? (s(), E(nt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [z.value]
          }, null, 8, ["details"])) : G.value ? (s(), E(Sy, {
            key: 2,
            "source-environment": te.value.sourceEnvironment,
            workflows: te.value.workflows,
            models: te.value.models,
            nodes: te.value.nodes,
            "git-branch": te.value.gitBranch,
            "git-commit": te.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : d("", !0),
          G.value ? (s(), E(Yy, {
            key: 3,
            name: I.value.name,
            "onUpdate:name": ne[1] || (ne[1] = (ze) => I.value.name = ze),
            "model-strategy": I.value.modelStrategy,
            "onUpdate:modelStrategy": ne[2] || (ne[2] = (ze) => I.value.modelStrategy = ze),
            "torch-backend": I.value.torchBackend,
            "onUpdate:torchBackend": ne[3] || (ne[3] = (ze) => I.value.torchBackend = ze),
            "switch-after-import": I.value.switchAfterImport,
            "onUpdate:switchAfterImport": ne[4] || (ne[4] = (ze) => I.value.switchAfterImport = ze),
            "name-error": R.value,
            onValidateName: ie
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : d("", !0),
          I.value.modelStrategy === "skip" && ((he = G.value) != null && he.models_needing_download) ? (s(), E(nt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${G.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : d("", !0),
          e("div", v0, [
            b(ae, {
              variant: "secondary",
              size: "md",
              onClick: q
            }, {
              default: i(() => [...ne[13] || (ne[13] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(ae, {
              variant: "primary",
              size: "md",
              disabled: !Y.value,
              onClick: X
            }, {
              default: i(() => [...ne[14] || (ne[14] = [
                h(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : k.value ? (s(), o("div", f0, [
          e("p", g0, [
            ne[15] || (ne[15] = h(" Importing environment ", -1)),
            e("strong", null, a(I.value.name), 1),
            ne[16] || (ne[16] = h("... ", -1))
          ]),
          b(es, {
            progress: N.value.progress,
            message: N.value.message,
            "current-phase": N.value.phase,
            variant: N.value.error ? "error" : "default",
            "show-steps": !0,
            steps: re
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          N.value.error ? d("", !0) : (s(), o("p", p0, " This may take several minutes. Please wait... ")),
          N.value.error ? (s(), o("div", h0, [
            e("p", y0, a(N.value.error), 1)
          ])) : d("", !0)
        ])) : T.value ? (s(), o("div", w0, [
          e("div", {
            class: me(["complete-icon", A.value ? "success" : "error"])
          }, a(A.value ? "✓" : "✕"), 3),
          e("div", k0, [
            e("div", b0, a(A.value ? "Import Successful" : "Import Failed"), 1),
            e("div", _0, a(f.value), 1)
          ]),
          e("div", $0, [
            b(ae, {
              variant: "primary",
              size: "md",
              onClick: L
            }, {
              default: i(() => [...ne[17] || (ne[17] = [
                h(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), Hs = /* @__PURE__ */ ee(C0, [["__scopeId", "data-v-72cbc04e"]]), x0 = /* @__PURE__ */ Z({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(t, { emit: c }) {
    const n = c, l = $(!1);
    function g(p, u) {
      u && n("import-complete-switch", p);
    }
    return (p, u) => (s(), o(W, null, [
      b(qe, null, {
        header: i(() => [
          b(Ke, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: u[0] || (u[0] = (v) => l.value = !0)
          })
        ]),
        content: i(() => [
          b(Hs, { onImportComplete: g })
        ]),
        _: 1
      }),
      b(vt, {
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
}), S0 = /* @__PURE__ */ ee(x0, [["__scopeId", "data-v-e13bfe76"]]), I0 = { class: "header-info" }, E0 = { class: "commit-hash" }, M0 = {
  key: 0,
  class: "commit-refs"
}, T0 = { class: "commit-message" }, R0 = { class: "commit-date" }, L0 = {
  key: 0,
  class: "loading"
}, P0 = {
  key: 1,
  class: "changes-section"
}, z0 = { class: "stats-row" }, D0 = { class: "stat" }, N0 = { class: "stat insertions" }, U0 = { class: "stat deletions" }, O0 = {
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
}, V0 = { class: "change-item" }, W0 = /* @__PURE__ */ Z({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = Fe(), l = $(null), g = $(!0), p = D(() => {
      if (!l.value) return !1;
      const v = l.value.changes.workflows;
      return v.added.length > 0 || v.modified.length > 0 || v.deleted.length > 0;
    }), u = D(() => {
      if (!l.value) return !1;
      const v = l.value.changes.nodes;
      return v.added.length > 0 || v.removed.length > 0;
    });
    return Ue(async () => {
      try {
        l.value = await n(c.commit.hash);
      } finally {
        g.value = !1;
      }
    }), (v, r) => (s(), E(Je, {
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
          g.value ? (s(), o("div", L0, "Loading details...")) : l.value ? (s(), o("div", P0, [
            e("div", z0, [
              e("span", D0, a(l.value.stats.files_changed) + " files", 1),
              e("span", N0, "+" + a(l.value.stats.insertions), 1),
              e("span", U0, "-" + a(l.value.stats.deletions), 1)
            ]),
            p.value ? (s(), o("div", O0, [
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
}), G0 = /* @__PURE__ */ ee(W0, [["__scopeId", "data-v-d256ff6d"]]), j0 = { class: "base-textarea-wrapper" }, H0 = ["value", "rows", "placeholder", "disabled", "maxlength"], q0 = {
  key: 0,
  class: "base-textarea-count"
}, K0 = /* @__PURE__ */ Z({
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
          n[1] || (n[1] = yt(Pe((l) => c.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = yt(Pe((l) => c.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, H0),
      t.showCharCount && t.maxLength ? (s(), o("div", q0, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : d("", !0)
    ]));
  }
}), Is = /* @__PURE__ */ ee(K0, [["__scopeId", "data-v-5516e6fc"]]), J0 = ["checked", "disabled"], Y0 = { class: "base-checkbox-box" }, X0 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Q0 = {
  key: 0,
  class: "base-checkbox-label"
}, Z0 = /* @__PURE__ */ Z({
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
}), Es = /* @__PURE__ */ ee(Z0, [["__scopeId", "data-v-bf17c831"]]), ew = { class: "popover-header" }, tw = { class: "popover-body" }, sw = {
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
}, Tw = { class: "error-header" }, Rw = { class: "error-title" }, Lw = { class: "issues-list" }, Pw = { class: "message-section" }, zw = { class: "popover-footer" }, Dw = /* @__PURE__ */ Z({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, l = c, { commit: g } = Fe(), p = $(""), u = $(!1), v = $(!1), r = $(null), m = D(() => {
      if (!n.status) return !1;
      const A = n.status.workflows;
      return A.new.length > 0 || A.modified.length > 0 || A.deleted.length > 0 || n.status.has_changes;
    }), y = D(() => {
      if (!n.status) return !1;
      const A = n.status.workflows, f = n.status.git_changes;
      return A.new.length > 0 || A.modified.length > 0 || A.deleted.length > 0 || f.nodes_added.length > 0 || f.nodes_removed.length > 0;
    }), w = D(() => {
      var A;
      return (A = n.status) != null && A.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (f) => f.has_issues && (f.sync_state === "new" || f.sync_state === "modified")
      ) : [];
    }), _ = D(() => w.value.length > 0), k = D(() => _.value && !v.value);
    async function T() {
      var A, f, C;
      if (!(_.value && !v.value) && !(!m.value || !p.value.trim() || u.value)) {
        u.value = !0, r.value = null;
        try {
          const z = await g(p.value.trim(), v.value);
          z.status === "success" ? (r.value = {
            type: "success",
            message: `Committed: ${((A = z.summary) == null ? void 0 : A.new) || 0} new, ${((f = z.summary) == null ? void 0 : f.modified) || 0} modified, ${((C = z.summary) == null ? void 0 : C.deleted) || 0} deleted`
          }, p.value = "", v.value = !1, setTimeout(() => l("committed"), 1e3)) : z.status === "no_changes" ? r.value = { type: "error", message: "No changes to commit" } : z.status === "blocked" ? r.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : r.value = { type: "error", message: z.message || "Commit failed" };
        } catch (z) {
          r.value = { type: "error", message: z instanceof Error ? z.message : "Commit failed" };
        } finally {
          u.value = !1;
        }
      }
    }
    return (A, f) => t.asModal ? (s(), E(Ve, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: f[5] || (f[5] = (C) => l("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: f[4] || (f[4] = Pe(() => {
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
                modelValue: p.value,
                "onUpdate:modelValue": f[2] || (f[2] = (C) => p.value = C),
                placeholder: k.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
                disabled: !m.value || u.value || k.value,
                rows: 3,
                onCtrlEnter: T
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
              disabled: !m.value || !p.value.trim() || u.value || k.value,
              loading: u.value,
              onClick: T
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
          e("div", Lw, [
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
        e("div", Pw, [
          b(Is, {
            modelValue: p.value,
            "onUpdate:modelValue": f[8] || (f[8] = (C) => p.value = C),
            placeholder: k.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || u.value || k.value,
            rows: 3,
            onCtrlEnter: T
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        r.value ? (s(), o("div", {
          key: 4,
          class: me(["result", r.value.type])
        }, a(r.value.message), 3)) : d("", !0)
      ]),
      e("div", zw, [
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
          disabled: !m.value || !p.value.trim() || u.value || k.value,
          loading: u.value,
          onClick: T
        }, {
          default: i(() => [
            h(a(u.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), qs = /* @__PURE__ */ ee(Dw, [["__scopeId", "data-v-aa2a9bdf"]]), Nw = { class: "modal-header" }, Uw = { class: "modal-body" }, Ow = { class: "switch-message" }, Bw = { class: "switch-details" }, Fw = { class: "modal-actions" }, Aw = /* @__PURE__ */ Z({
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
          onClick: n[3] || (n[3] = Pe(() => {
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
            b(ae, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (l) => c.$emit("close"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(ae, {
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
}), Vw = /* @__PURE__ */ ee(Aw, [["__scopeId", "data-v-e9c5253e"]]), Ww = {
  key: 0,
  class: "modal-overlay"
}, Gw = { class: "modal-content" }, jw = { class: "modal-body" }, Hw = { class: "progress-info" }, qw = { class: "progress-percentage" }, Kw = { class: "progress-state" }, Jw = { class: "switch-steps" }, Yw = { class: "step-icon" }, Xw = { class: "step-label" }, Qw = /* @__PURE__ */ Z({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, n = D(() => {
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
    }), l = D(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), g = D(() => {
      const p = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], u = p.findIndex((v) => v.state === c.state);
      return p.map((v, r) => {
        let m = "pending", y = "○";
        return r < u ? (m = "completed", y = "✓") : r === u && (m = "active", y = "⟳"), {
          ...v,
          status: m,
          icon: y
        };
      });
    });
    return (p, u) => (s(), E(Ve, { to: "body" }, [
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
              (s(!0), o(W, null, oe(g.value, (v) => (s(), o("div", {
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
}), Zw = /* @__PURE__ */ ee(Qw, [["__scopeId", "data-v-768a5078"]]), ek = { class: "modal-header" }, tk = { class: "modal-body" }, sk = {
  key: 0,
  class: "node-section"
}, ok = { class: "node-list" }, nk = {
  key: 1,
  class: "node-section"
}, ak = { class: "node-list" }, lk = { class: "modal-actions" }, ik = /* @__PURE__ */ Z({
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
          onClick: n[3] || (n[3] = Pe(() => {
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
            b(ae, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (l) => c.$emit("close"))
            }, {
              default: i(() => [...n[10] || (n[10] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(ae, {
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
}), rk = /* @__PURE__ */ ee(ik, [["__scopeId", "data-v-7cad7518"]]), dk = [
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
}, yk = ["d"], wk = /* @__PURE__ */ Z({
  __name: "SocialButtons",
  setup(t) {
    function c(n) {
      window.open(n, "_blank", "noopener,noreferrer");
    }
    return (n, l) => (s(), o("div", mk, [
      (s(!0), o(W, null, oe(_e(dk), (g) => (s(), o(W, {
        key: g.id
      }, [
        g.label ? (s(), o("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: g.title,
          "aria-label": g.ariaLabel,
          onClick: (p) => c(g.url)
        }, [
          h(a(g.label) + " ", 1),
          (s(), o("svg", fk, [
            e("path", {
              d: g.iconPath
            }, null, 8, gk)
          ]))
        ], 8, vk)) : (s(), o("button", {
          key: 1,
          class: "icon-btn social-link",
          title: g.title,
          "aria-label": g.ariaLabel,
          onClick: (p) => c(g.url)
        }, [
          (s(), o("svg", hk, [
            e("path", {
              d: g.iconPath
            }, null, 8, yk)
          ]))
        ], 8, pk))
      ], 64))), 128))
    ]));
  }
}), Ks = /* @__PURE__ */ ee(wk, [["__scopeId", "data-v-4f846342"]]), kk = { class: "footer-info" }, bk = { class: "version" }, _k = { class: "made-by" }, $k = /* @__PURE__ */ Z({
  __name: "FooterInfo",
  setup(t) {
    return (c, n) => (s(), o("div", kk, [
      e("span", bk, a(_e(ck)), 1),
      e("span", _k, [
        n[0] || (n[0] = h(" made with ", -1)),
        n[1] || (n[1] = e("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          e("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        h(" by " + a(_e(uk)), 1)
      ])
    ]));
  }
}), Js = /* @__PURE__ */ ee($k, [["__scopeId", "data-v-8bc3db0a"]]), Ck = /* @__PURE__ */ Z({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = $(null);
    async function l() {
      var p;
      await ((p = n.value) == null ? void 0 : p.saveSettings());
    }
    function g() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (p, u) => (s(), E(Je, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: u[1] || (u[1] = (v) => p.$emit("close"))
    }, {
      body: i(() => [
        b(As, {
          ref_key: "contentRef",
          ref: n,
          "workspace-path": t.workspacePath,
          onSaved: g
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
            onClick: u[0] || (u[0] = (r) => p.$emit("close"))
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
}), xk = /* @__PURE__ */ ee(Ck, [["__scopeId", "data-v-fac00ae7"]]), Sk = { class: "header-actions" }, Ik = {
  key: 0,
  class: "wizard-step"
}, Ek = { class: "form-field" }, Mk = ["placeholder"], Tk = {
  key: 0,
  class: "form-error"
}, Rk = { class: "form-field form-field--checkbox" }, Lk = { class: "form-checkbox" }, Pk = {
  key: 0,
  class: "form-field"
}, zk = ["placeholder"], Dk = {
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
}, Vk = {
  key: 1,
  class: "env-landing"
}, Wk = { class: "env-list" }, Gk = ["value"], jk = { class: "env-name" }, Hk = {
  key: 2,
  class: "env-create"
}, qk = { class: "form-field" }, Kk = { class: "form-field" }, Jk = ["value"], Yk = { class: "form-field" }, Xk = ["disabled"], Qk = ["value"], Zk = { class: "form-field" }, eb = ["value"], tb = { class: "form-field form-field--checkbox" }, sb = { class: "form-checkbox" }, ob = {
  key: 0,
  class: "form-error"
}, nb = {
  key: 1,
  class: "env-creating"
}, ab = { class: "creating-intro" }, lb = {
  key: 3,
  class: "env-import"
}, ib = { class: "wizard-footer" }, rb = { class: "wizard-footer-actions" }, Et = 10, db = 600 * 1e3, Ms = 1800 * 1e3, cb = /* @__PURE__ */ Z({
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
      initializeWorkspace: g,
      getInitializeProgress: p,
      validatePath: u,
      createEnvironment: v,
      getCreateProgress: r,
      getImportProgress: m,
      getComfyUIReleases: y
    } = Fe(), w = $(n.initialStep || 1), _ = $(null), k = $("landing"), T = $(!1), A = $(!1), f = $(!1), C = $(null), z = $(n.initialStep === 2), x = $(n.defaultPath), M = $(!!n.detectedModelsDir), K = $(n.detectedModelsDir || ""), F = $(null), G = $(null), I = $(null), R = $(null), N = $("my-new-env"), re = $(Ws), te = $("latest"), Y = $(Gs), ce = $(!0), q = $(null), L = $(null), P = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), S = $(!1), ie = $(!1), X = $(!1), Ie = $({ progress: 0, message: "" }), be = $({ progress: 0, message: "" }), Te = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], Le = $(0), ue = $(null), ve = $(0), Ee = $(null), Q = D(() => {
      var O, B;
      const le = (O = x.value) == null ? void 0 : O.trim(), J = !F.value, Me = !M.value || !G.value && ((B = K.value) == null ? void 0 : B.trim());
      return le && J && Me;
    }), ne = D(() => {
      var le;
      return (le = N.value) == null ? void 0 : le.trim();
    }), he = D(() => !!(w.value === 2 || L.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), ze = D(() => L.value || n.workspacePath || null);
    async function tt() {
      var le;
      if (F.value = null, !!((le = x.value) != null && le.trim()))
        try {
          const J = await u({ path: x.value, type: "workspace" });
          J.valid || (F.value = J.error || "Invalid path");
        } catch (J) {
          F.value = J instanceof Error ? J.message : "Validation failed";
        }
    }
    async function rt() {
      var le;
      if (G.value = null, I.value = null, R.value = null, !!((le = K.value) != null && le.trim()))
        try {
          const J = await u({ path: K.value, type: "models" });
          if (J.valid)
            R.value = J.model_count ?? null;
          else if (G.value = J.error || "Invalid path", J.suggestion) {
            I.value = J.suggestion, K.value = J.suggestion, G.value = null;
            const Me = await u({ path: J.suggestion, type: "models" });
            Me.valid && (R.value = Me.model_count ?? null);
          }
        } catch (J) {
          G.value = J instanceof Error ? J.message : "Validation failed";
        }
    }
    async function xe() {
      var le, J, Me, O, B;
      if (F.value = null, G.value = null, await tt(), (le = F.value) != null && le.includes("already exists")) {
        F.value = null, L.value = ((J = x.value) == null ? void 0 : J.trim()) || n.defaultPath, w.value = 2, Ge();
        return;
      }
      if (!F.value && !(M.value && ((Me = K.value) != null && Me.trim()) && (await rt(), G.value))) {
        ie.value = !0;
        try {
          await g({
            workspace_path: ((O = x.value) == null ? void 0 : O.trim()) || n.defaultPath,
            models_directory: M.value && ((B = K.value) == null ? void 0 : B.trim()) || null
          }), Le.value = 0, ue.value = Date.now();
          const V = setInterval(async () => {
            var se;
            if (ue.value && Date.now() - ue.value > db) {
              clearInterval(V), ie.value = !1, F.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const pe = await p();
              if (Le.value = 0, pe.state === "idle" && ie.value) {
                clearInterval(V), ie.value = !1, F.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Ie.value = { progress: pe.progress, message: pe.message }, pe.state === "complete" ? (clearInterval(V), ie.value = !1, L.value = ((se = x.value) == null ? void 0 : se.trim()) || n.defaultPath, w.value = 2, Ge()) : pe.state === "error" && (clearInterval(V), ie.value = !1, F.value = pe.error || "Workspace creation failed");
            } catch (pe) {
              Le.value++, console.warn(`Polling failure ${Le.value}/${Et}:`, pe), Le.value >= Et && (clearInterval(V), ie.value = !1, F.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (V) {
          ie.value = !1, F.value = V instanceof Error ? V.message : "Failed to create workspace";
        }
      }
    }
    async function Xe() {
      X.value = !0, q.value = null;
      try {
        const le = {
          name: N.value.trim() || "my-new-env",
          python_version: re.value,
          comfyui_version: te.value,
          torch_backend: Y.value,
          switch_after: ce.value,
          workspace_path: L.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await v(le)).status === "started") {
          ve.value = 0, Ee.value = Date.now();
          const Me = setInterval(async () => {
            if (Ee.value && Date.now() - Ee.value > Ms) {
              clearInterval(Me), X.value = !1, q.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const O = await r();
              if (ve.value = 0, O.state === "idle" && X.value) {
                clearInterval(Me), X.value = !1, q.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (be.value = {
                progress: O.progress ?? 0,
                message: O.message,
                phase: O.phase
              }, O.state === "complete") {
                clearInterval(Me), X.value = !1;
                const B = O.environment_name || le.name;
                ce.value ? l("complete", B, L.value) : (k.value = "landing", l("environment-created-no-switch", B));
              } else O.state === "error" && (clearInterval(Me), X.value = !1, q.value = O.error || "Environment creation failed");
            } catch (O) {
              ve.value++, console.warn(`Polling failure ${ve.value}/${Et}:`, O), ve.value >= Et && (clearInterval(Me), X.value = !1, q.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (le) {
        X.value = !1, q.value = le instanceof Error ? le.message : "Unknown error";
      }
    }
    async function Ge() {
      S.value = !0;
      try {
        P.value = await y();
      } catch (le) {
        console.error("Failed to load ComfyUI releases:", le);
      } finally {
        S.value = !1;
      }
    }
    function je() {
      _.value && l("switch-environment", _.value, L.value);
    }
    function ft() {
      k.value === "create" || k.value === "import" ? k.value = "landing" : w.value === 2 && n.setupState === "no_workspace" && (w.value = 1);
    }
    function ye(le, J) {
      A.value = !1, J ? l("complete", le, L.value) : (l("environment-created-no-switch", le), k.value = "landing");
    }
    function Ae() {
    }
    Ue(async () => {
      if (n.detectedModelsDir && (K.value = n.detectedModelsDir), n.workspacePath && (L.value = n.workspacePath), w.value === 2) {
        Ge();
        const le = setTimeout(() => {
          z.value = !1;
        }, 3e3);
        await dt(), clearTimeout(le), z.value = !1;
      }
    });
    async function dt() {
      try {
        const le = await r();
        if (console.log("[ComfyGit] Create progress check:", le.state, le), le.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", le.environment_name), k.value = "create", X.value = !0, N.value = le.environment_name || "my-new-env", be.value = {
            progress: le.progress ?? 0,
            message: le.message,
            phase: le.phase
          }, st();
          return;
        }
      } catch (le) {
        console.log("[ComfyGit] Create progress check failed:", le);
      }
      try {
        const le = await m();
        console.log("[ComfyGit] Import progress check:", le.state, le), le.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", le.environment_name), C.value = {
          message: le.message || "Importing...",
          phase: le.phase || "",
          progress: le.progress ?? 0,
          environmentName: le.environment_name || ""
        }, f.value = !0, k.value = "import", A.value = !0);
      } catch (le) {
        console.log("[ComfyGit] Import progress check failed:", le);
      }
    }
    async function st() {
      ve.value = 0, Ee.value = Date.now();
      let le = null;
      const J = async () => {
        if (Ee.value && Date.now() - Ee.value > Ms)
          return le && clearInterval(le), X.value = !1, q.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const O = await r();
          if (ve.value = 0, O.state === "idle" && X.value)
            return le && clearInterval(le), X.value = !1, q.value = "Environment creation was interrupted. Please try again.", !1;
          if (be.value = {
            progress: O.progress ?? 0,
            message: O.message,
            phase: O.phase
          }, O.state === "complete") {
            le && clearInterval(le), X.value = !1;
            const B = O.environment_name || N.value;
            return l("complete", B, L.value), !1;
          } else if (O.state === "error")
            return le && clearInterval(le), X.value = !1, q.value = O.error || "Environment creation failed", !1;
          return !0;
        } catch (O) {
          return ve.value++, console.warn(`Polling failure ${ve.value}/${Et}:`, O), ve.value >= Et ? (le && clearInterval(le), X.value = !1, q.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await J() && (le = setInterval(async () => {
        !await J() && le && clearInterval(le);
      }, 2e3));
    }
    return (le, J) => (s(), o(W, null, [
      b(Je, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: J[14] || (J[14] = (Me) => le.$emit("close"))
      }, {
        header: i(() => [
          J[19] || (J[19] = e("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          e("div", Sk, [
            b(Ks),
            J[18] || (J[18] = e("span", { class: "header-divider" }, null, -1)),
            he.value ? (s(), o("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: J[0] || (J[0] = (Me) => T.value = !0)
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
              class: "icon-btn",
              onClick: J[1] || (J[1] = (Me) => le.$emit("close")),
              title: "Close"
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
        body: i(() => {
          var Me;
          return [
            w.value === 1 ? (s(), o("div", Ik, [
              J[23] || (J[23] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              e("div", Ek, [
                J[20] || (J[20] = e("label", { class: "form-label" }, "Workspace Path", -1)),
                Oe(e("input", {
                  "onUpdate:modelValue": J[2] || (J[2] = (O) => x.value = O),
                  type: "text",
                  class: "form-input",
                  placeholder: t.defaultPath
                }, null, 8, Mk), [
                  [Tt, x.value]
                ]),
                F.value ? (s(), o("p", Tk, a(F.value), 1)) : d("", !0)
              ]),
              e("div", Rk, [
                e("label", Lk, [
                  Oe(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": J[3] || (J[3] = (O) => M.value = O)
                  }, null, 512), [
                    [Xt, M.value]
                  ]),
                  J[21] || (J[21] = e("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              M.value ? (s(), o("div", Pk, [
                J[22] || (J[22] = e("label", { class: "form-label" }, "Models Directory", -1)),
                Oe(e("input", {
                  "onUpdate:modelValue": J[4] || (J[4] = (O) => K.value = O),
                  type: "text",
                  class: "form-input",
                  placeholder: t.detectedModelsDir || "/path/to/models"
                }, null, 8, zk), [
                  [Tt, K.value]
                ]),
                t.detectedModelsDir && !K.value ? (s(), o("p", Dk, " Detected: " + a(t.detectedModelsDir), 1)) : d("", !0),
                I.value ? (s(), o("p", Nk, " Did you mean: " + a(I.value), 1)) : d("", !0),
                G.value ? (s(), o("p", Uk, a(G.value), 1)) : d("", !0),
                R.value !== null && !G.value ? (s(), o("p", Ok, " Found " + a(R.value) + " model files ", 1)) : d("", !0)
              ])) : d("", !0),
              ie.value ? (s(), E(es, {
                key: 1,
                progress: Ie.value.progress,
                message: Ie.value.message
              }, null, 8, ["progress", "message"])) : d("", !0)
            ])) : d("", !0),
            w.value === 2 ? (s(), o("div", Bk, [
              z.value ? (s(), o("div", Fk, [...J[24] || (J[24] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (s(), o(W, { key: 1 }, [
                n.cliInstalled ? d("", !0) : (s(), o("div", Ak, [...J[25] || (J[25] = [
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
                k.value === "landing" ? (s(), o("div", Vk, [
                  J[29] || (J[29] = e("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  e("button", {
                    class: "landing-option",
                    onClick: J[5] || (J[5] = (O) => k.value = "create")
                  }, [...J[26] || (J[26] = [
                    e("span", { class: "option-icon" }, "➕", -1),
                    e("div", { class: "option-content" }, [
                      e("span", { class: "option-title" }, "Create New Environment"),
                      e("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    e("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  e("button", {
                    class: "landing-option",
                    onClick: J[6] || (J[6] = (O) => {
                      f.value = !1, k.value = "import";
                    })
                  }, [...J[27] || (J[27] = [
                    e("span", { class: "option-icon" }, "📦", -1),
                    e("div", { class: "option-content" }, [
                      e("span", { class: "option-title" }, "Import Environment"),
                      e("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    e("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Me = n.existingEnvironments) != null && Me.length ? (s(), o(W, { key: 0 }, [
                    J[28] || (J[28] = e("div", { class: "landing-divider" }, [
                      e("span", null, "or switch to existing")
                    ], -1)),
                    e("div", Wk, [
                      (s(!0), o(W, null, oe(n.existingEnvironments, (O) => (s(), o("label", {
                        key: O,
                        class: me(["env-option", { selected: _.value === O }])
                      }, [
                        Oe(e("input", {
                          type: "radio",
                          name: "env-select",
                          value: O,
                          "onUpdate:modelValue": J[7] || (J[7] = (B) => _.value = B)
                        }, null, 8, Gk), [
                          [Kt, _.value]
                        ]),
                        e("span", jk, a(O), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : d("", !0)
                ])) : k.value === "create" ? (s(), o("div", Hk, [
                  X.value ? (s(), o("div", nb, [
                    e("p", ab, [
                      J[36] || (J[36] = h(" Creating environment ", -1)),
                      e("strong", null, a(N.value), 1),
                      J[37] || (J[37] = h("... ", -1))
                    ]),
                    b(es, {
                      progress: be.value.progress,
                      message: be.value.message,
                      "current-phase": be.value.phase,
                      "show-steps": !0,
                      steps: Te
                    }, null, 8, ["progress", "message", "current-phase"]),
                    J[38] || (J[38] = e("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (s(), o(W, { key: 0 }, [
                    J[35] || (J[35] = e("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    e("div", qk, [
                      J[30] || (J[30] = e("label", { class: "form-label" }, "Environment Name", -1)),
                      Oe(e("input", {
                        "onUpdate:modelValue": J[8] || (J[8] = (O) => N.value = O),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Tt, N.value]
                      ])
                    ]),
                    e("div", Kk, [
                      J[31] || (J[31] = e("label", { class: "form-label" }, "Python Version", -1)),
                      Oe(e("select", {
                        "onUpdate:modelValue": J[9] || (J[9] = (O) => re.value = O),
                        class: "form-select"
                      }, [
                        (s(!0), o(W, null, oe(_e(Vs), (O) => (s(), o("option", {
                          key: O,
                          value: O
                        }, a(O), 9, Jk))), 128))
                      ], 512), [
                        [Rt, re.value]
                      ])
                    ]),
                    e("div", Yk, [
                      J[32] || (J[32] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Oe(e("select", {
                        "onUpdate:modelValue": J[10] || (J[10] = (O) => te.value = O),
                        class: "form-select",
                        disabled: S.value
                      }, [
                        (s(!0), o(W, null, oe(P.value, (O) => (s(), o("option", {
                          key: O.tag_name,
                          value: O.tag_name
                        }, a(O.name), 9, Qk))), 128))
                      ], 8, Xk), [
                        [Rt, te.value]
                      ])
                    ]),
                    e("div", Zk, [
                      J[33] || (J[33] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Oe(e("select", {
                        "onUpdate:modelValue": J[11] || (J[11] = (O) => Y.value = O),
                        class: "form-select"
                      }, [
                        (s(!0), o(W, null, oe(_e(fs), (O) => (s(), o("option", {
                          key: O,
                          value: O
                        }, a(O) + a(O === "auto" ? " (detect GPU)" : ""), 9, eb))), 128))
                      ], 512), [
                        [Rt, Y.value]
                      ])
                    ]),
                    e("div", tb, [
                      e("label", sb, [
                        Oe(e("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": J[12] || (J[12] = (O) => ce.value = O)
                        }, null, 512), [
                          [Xt, ce.value]
                        ]),
                        J[34] || (J[34] = e("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    q.value ? (s(), o("div", ob, a(q.value), 1)) : d("", !0)
                  ], 64))
                ])) : k.value === "import" ? (s(), o("div", lb, [
                  b(Hs, {
                    "workspace-path": L.value,
                    "resume-import": f.value,
                    "initial-progress": C.value ?? void 0,
                    onImportComplete: ye,
                    onImportStarted: J[13] || (J[13] = (O) => A.value = !0),
                    onSourceCleared: Ae
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : d("", !0)
              ], 64))
            ])) : d("", !0)
          ];
        }),
        footer: i(() => [
          e("div", ib, [
            b(Js),
            e("div", rb, [
              w.value === 1 ? (s(), E(fe, {
                key: 0,
                variant: "primary",
                disabled: !Q.value || ie.value,
                onClick: xe
              }, {
                default: i(() => [
                  h(a(ie.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : w.value === 2 ? (s(), o(W, { key: 1 }, [
                !X.value && !A.value && (k.value !== "landing" || n.setupState === "no_workspace" && !L.value) ? (s(), E(fe, {
                  key: 0,
                  variant: "secondary",
                  onClick: ft
                }, {
                  default: i(() => [...J[39] || (J[39] = [
                    h(" Back ", -1)
                  ])]),
                  _: 1
                })) : d("", !0),
                k.value === "create" ? (s(), E(fe, {
                  key: 1,
                  variant: "primary",
                  disabled: !ne.value || X.value,
                  onClick: Xe
                }, {
                  default: i(() => [
                    h(a(X.value ? "Creating..." : ce.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : d("", !0),
                k.value === "landing" && _.value ? (s(), E(fe, {
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
      T.value ? (s(), E(xk, {
        key: 0,
        "workspace-path": ze.value,
        onClose: J[15] || (J[15] = (Me) => T.value = !1)
      }, null, 8, ["workspace-path"])) : d("", !0)
    ], 64));
  }
}), ub = /* @__PURE__ */ ee(cb, [["__scopeId", "data-v-e3a2209a"]]), mb = { class: "comfygit-panel" }, vb = { class: "panel-header" }, fb = { class: "header-left" }, gb = {
  key: 0,
  class: "header-info"
}, pb = { class: "header-actions" }, hb = { class: "env-switcher" }, yb = {
  key: 0,
  class: "header-info"
}, wb = { class: "branch-name" }, kb = { class: "panel-main" }, bb = { class: "sidebar" }, _b = { class: "sidebar-content" }, $b = { class: "sidebar-section" }, Cb = { class: "sidebar-section" }, xb = { class: "sidebar-section" }, Sb = { class: "sidebar-footer" }, Ib = { class: "content-area" }, Eb = {
  key: 0,
  class: "error-message"
}, Mb = {
  key: 1,
  class: "loading"
}, Tb = { class: "dialog-content env-selector-dialog" }, Rb = { class: "dialog-header" }, Lb = { class: "dialog-body" }, Pb = { class: "env-list" }, zb = { class: "env-info" }, Db = { class: "env-name-row" }, Nb = { class: "env-indicator" }, Ub = { class: "env-name" }, Ob = {
  key: 0,
  class: "env-branch"
}, Bb = {
  key: 1,
  class: "current-label"
}, Fb = { class: "env-stats" }, Ab = ["onClick"], Vb = { class: "toast-container" }, Wb = { class: "toast-message" }, Gb = /* @__PURE__ */ Z({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const n = t, l = c, {
      getStatus: g,
      getHistory: p,
      getBranches: u,
      checkout: v,
      createBranch: r,
      switchBranch: m,
      deleteBranch: y,
      getEnvironments: w,
      switchEnvironment: _,
      getSwitchProgress: k,
      deleteEnvironment: T,
      syncEnvironmentManually: A,
      repairWorkflowModels: f,
      getSetupStatus: C
    } = Fe(), z = Ds(), x = $(null), M = $([]), K = $([]), F = $([]), G = D(() => F.value.find((j) => j.is_current)), I = $(null), R = $(!1), N = $(1), re = D(() => {
      var j;
      return ((j = I.value) == null ? void 0 : j.state) || "managed";
    }), te = $(!1), Y = $(null), ce = $(null), q = $(!1), L = $(null), P = $(null), S = $(null), ie = $(!1), X = $(!1), Ie = $(""), be = $(null), Te = $({ state: "idle", progress: 0, message: "" });
    let Le = null, ue = null;
    const ve = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, Ee = n.initialView ? ve[n.initialView] : null, Q = $((Ee == null ? void 0 : Ee.view) ?? "status"), ne = $((Ee == null ? void 0 : Ee.section) ?? "this-env");
    function he(j, U) {
      Q.value = j, ne.value = U;
    }
    function ze(j) {
      const ge = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[j];
      ge && he(ge.view, ge.section);
    }
    function tt() {
      he("branches", "this-env");
    }
    function rt() {
      l("close"), setTimeout(() => {
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
    const xe = $(null), Xe = $(!1), Ge = $(!1), je = $([]);
    let ft = 0;
    function ye(j, U = "info", ge = 3e3) {
      const Ce = ++ft;
      return je.value.push({ id: Ce, message: j, type: U }), ge > 0 && setTimeout(() => {
        je.value = je.value.filter((De) => De.id !== Ce);
      }, ge), Ce;
    }
    function Ae(j) {
      je.value = je.value.filter((U) => U.id !== j);
    }
    function dt(j, U) {
      ye(j, U);
    }
    const st = D(() => {
      if (!x.value) return "neutral";
      const j = x.value.workflows, U = j.new.length > 0 || j.modified.length > 0 || j.deleted.length > 0 || x.value.has_changes;
      return x.value.comparison.is_synced ? U ? "warning" : "success" : "error";
    });
    D(() => x.value ? st.value === "success" ? "All synced" : st.value === "warning" ? "Uncommitted changes" : st.value === "error" ? "Not synced" : "" : "");
    async function le() {
      te.value = !0, Y.value = null;
      try {
        const [j, U, ge, Ce] = await Promise.all([
          g(!0),
          p(),
          u(),
          w()
        ]);
        x.value = j, M.value = U.commits, K.value = ge.branches, F.value = Ce, l("statusUpdate", j), L.value && await L.value.loadWorkflows(!0);
      } catch (j) {
        Y.value = j instanceof Error ? j.message : "Failed to load status", x.value = null, M.value = [], K.value = [];
      } finally {
        te.value = !1;
      }
    }
    function J(j) {
      ce.value = j;
    }
    async function Me(j) {
      var ge;
      ce.value = null;
      const U = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      xe.value = {
        title: U ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: U ? "You have uncommitted changes that will be lost." : `Checkout commit ${j.short_hash || ((ge = j.hash) == null ? void 0 : ge.slice(0, 7))}?`,
        details: U ? ws() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: U ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: U,
        onConfirm: async () => {
          var We;
          xe.value = null, pe();
          const Ce = ye(`Checking out ${j.short_hash || ((We = j.hash) == null ? void 0 : We.slice(0, 7))}...`, "info", 0), De = await v(j.hash, U);
          Ae(Ce), De.status === "success" ? ye("Restarting ComfyUI...", "success") : ye(De.message || "Checkout failed", "error");
        }
      };
    }
    async function O(j) {
      const U = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      xe.value = {
        title: U ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: U ? "You have uncommitted changes." : `Switch to branch "${j}"?`,
        details: U ? ws() : void 0,
        warning: U ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: U ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          xe.value = null, pe();
          const ge = ye(`Switching to ${j}...`, "info", 0), Ce = await m(j, U);
          Ae(ge), Ce.status === "success" ? ye("Restarting ComfyUI...", "success") : ye(Ce.message || "Branch switch failed", "error");
        }
      };
    }
    async function B(j) {
      const U = ye(`Creating branch ${j}...`, "info", 0), ge = await r(j);
      Ae(U), ge.status === "success" ? (ye(`Branch "${j}" created`, "success"), await le()) : ye(ge.message || "Failed to create branch", "error");
    }
    async function V(j, U = !1) {
      const ge = async (Ce) => {
        var We;
        const De = ye(`Deleting branch ${j}...`, "info", 0);
        try {
          const ht = await y(j, Ce);
          Ae(De), ht.status === "success" ? (ye(`Branch "${j}" deleted`, "success"), await le()) : (We = ht.message) != null && We.includes("not fully merged") ? xe.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${j}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              xe.value = null, await ge(!0);
            }
          } : ye(ht.message || "Failed to delete branch", "error");
        } catch (ht) {
          Ae(De);
          const zt = ht instanceof Error ? ht.message : "Failed to delete branch";
          zt.includes("not fully merged") ? xe.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${j}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              xe.value = null, await ge(!0);
            }
          } : ye(zt, "error");
        }
      };
      xe.value = {
        title: "Delete Branch",
        message: `Delete branch "${j}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          xe.value = null, await ge(U);
        }
      };
    }
    async function se(j) {
      ce.value = null;
      const U = prompt("Enter branch name:");
      if (U) {
        const ge = ye(`Creating branch ${U}...`, "info", 0), Ce = await r(U, j.hash);
        Ae(ge), Ce.status === "success" ? (ye(`Branch "${U}" created from ${j.short_hash}`, "success"), await le()) : ye(Ce.message || "Failed to create branch", "error");
      }
    }
    function pe() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function ct() {
      xe.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var j;
          xe.value = null, pe(), ye("Restarting environment...", "info");
          try {
            (j = window.app) != null && j.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function gt() {
      xe.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var j;
          xe.value = null, ye("Stopping environment...", "info");
          try {
            (j = window.app) != null && j.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function ot(j, U) {
      q.value = !1, Ie.value = j, be.value = U || null, ie.value = !0;
    }
    async function xt() {
      ie.value = !1, X.value = !0, pe(), Te.value = {
        progress: 10,
        state: pt(10),
        message: St(10)
      };
      try {
        await _(Ie.value, be.value || void 0), H(), we();
      } catch (j) {
        de(), X.value = !1, ye(`Failed to initiate switch: ${j instanceof Error ? j.message : "Unknown error"}`, "error"), Te.value = { state: "idle", progress: 0, message: "" }, be.value = null;
      }
    }
    function pt(j) {
      return j >= 100 ? "complete" : j >= 80 ? "validating" : j >= 60 ? "starting" : j >= 30 ? "syncing" : "preparing";
    }
    function St(j) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[pt(j)] || "";
    }
    function H() {
      if (ue) return;
      let j = 10;
      const U = 60, ge = 5e3, Ce = 100, De = (U - j) / (ge / Ce);
      ue = window.setInterval(() => {
        if (j += De, j >= U && (j = U, de()), Te.value.progress < U) {
          const We = Math.floor(j);
          Te.value = {
            progress: We,
            state: pt(We),
            message: St(We)
          };
        }
      }, Ce);
    }
    function de() {
      ue && (clearInterval(ue), ue = null);
    }
    function we() {
      Le || (Le = window.setInterval(async () => {
        try {
          let j = await z.getStatus();
          if ((!j || j.state === "idle") && (j = await k()), !j)
            return;
          const U = j.progress || 0;
          U >= 60 && de();
          const ge = Math.max(U, Te.value.progress), Ce = j.state && j.state !== "idle" && j.state !== "unknown", De = Ce ? j.state : pt(ge), We = Ce && j.message || St(ge);
          Te.value = {
            state: De,
            progress: ge,
            message: We
          }, j.state === "complete" ? (de(), Re(), X.value = !1, ye(`✓ Switched to ${Ie.value}`, "success"), await le(), Ie.value = "") : j.state === "rolled_back" ? (de(), Re(), X.value = !1, ye("Switch failed, restored previous environment", "warning"), Ie.value = "") : j.state === "critical_failure" && (de(), Re(), X.value = !1, ye(`Critical error during switch: ${j.message}`, "error"), Ie.value = "");
        } catch (j) {
          console.error("Failed to poll switch progress:", j);
        }
      }, 1e3));
    }
    function Re() {
      de(), Le && (clearInterval(Le), Le = null);
    }
    function Qe() {
      var j;
      ie.value = !1, Ie.value = "", (j = I.value) != null && j.state && I.value.state !== "managed" && (N.value = I.value.state === "no_workspace" ? 1 : 2, R.value = !0);
    }
    async function It() {
      Xe.value = !1, await le(), ye("✓ Changes committed", "success");
    }
    async function Ht() {
      Ge.value = !1;
      const j = ye("Syncing environment...", "info", 0);
      try {
        const U = await A("skip", !0);
        if (Ae(j), U.status === "success") {
          const ge = [];
          U.nodes_installed.length && ge.push(`${U.nodes_installed.length} installed`), U.nodes_removed.length && ge.push(`${U.nodes_removed.length} removed`);
          const Ce = ge.length ? `: ${ge.join(", ")}` : "";
          ye(`✓ Environment synced${Ce}`, "success"), await le();
        } else {
          const ge = U.errors.length ? U.errors.join("; ") : U.message;
          ye(`Sync failed: ${ge}`, "error");
        }
      } catch (U) {
        Ae(j), ye(`Sync error: ${U instanceof Error ? U.message : "Unknown error"}`, "error");
      }
    }
    async function qt(j) {
      var U;
      try {
        const ge = await f(j);
        ge.failed.length === 0 ? ye(`✓ Repaired ${ge.success} workflow${ge.success === 1 ? "" : "s"}`, "success") : ye(`Repaired ${ge.success}, failed: ${ge.failed.length}`, "warning"), await le();
      } catch (ge) {
        ye(`Repair failed: ${ge instanceof Error ? ge.message : "Unknown error"}`, "error");
      } finally {
        (U = S.value) == null || U.resetRepairingState();
      }
    }
    async function ys() {
      var U, ge;
      const j = ye("Repairing environment...", "info", 0);
      try {
        const Ce = await A("skip", !0);
        if (Ae(j), Ce.status === "success") {
          const De = [];
          Ce.nodes_installed.length && De.push(`${Ce.nodes_installed.length} installed`), Ce.nodes_removed.length && De.push(`${Ce.nodes_removed.length} removed`);
          const We = De.length ? `: ${De.join(", ")}` : "";
          ye(`✓ Environment repaired${We}`, "success"), (U = S.value) == null || U.closeDetailModal(), await le();
        } else {
          const De = Ce.errors.length ? Ce.errors.join(", ") : Ce.message || "Unknown error";
          ye(`Repair failed: ${De}`, "error");
        }
      } catch (Ce) {
        Ae(j), ye(`Repair error: ${Ce instanceof Error ? Ce.message : "Unknown error"}`, "error");
      } finally {
        (ge = S.value) == null || ge.resetRepairingEnvironmentState();
      }
    }
    async function to(j, U) {
      ye(`Environment '${j}' created`, "success"), await le(), P.value && await P.value.loadEnvironments(), U && await ot(j);
    }
    async function so(j) {
      var U;
      if (((U = G.value) == null ? void 0 : U.name) === j) {
        ye("Cannot delete the currently active environment. Switch to another environment first.", "error");
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
            const ge = await T(j);
            ge.status === "success" ? (ye(`Environment "${j}" deleted`, "success"), await le(), P.value && await P.value.loadEnvironments()) : ye(ge.message || "Failed to delete environment", "error");
          } catch (ge) {
            ye(`Error deleting environment: ${ge instanceof Error ? ge.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function oo(j, U) {
      R.value = !1;
      try {
        I.value = await C();
      } catch {
      }
      await ot(j, U);
    }
    function no() {
      R.value = !1, l("close");
    }
    async function ao(j, U) {
      await ot(j, U);
    }
    async function lo(j) {
      await le(), await ot(j);
    }
    async function io(j) {
      I.value = await C(), console.log(`Environment '${j}' created. Available for switching.`);
    }
    function ro() {
      he("environments", "all-envs"), setTimeout(() => {
        var j;
        (j = P.value) == null || j.openCreateModal();
      }, 100);
    }
    function ws() {
      if (!x.value) return [];
      const j = [], U = x.value.workflows;
      return U.new.length && j.push(`${U.new.length} new workflow(s)`), U.modified.length && j.push(`${U.modified.length} modified workflow(s)`), U.deleted.length && j.push(`${U.deleted.length} deleted workflow(s)`), j;
    }
    return Ue(async () => {
      try {
        if (I.value = await C(), I.value.state === "no_workspace") {
          R.value = !0, N.value = 1;
          return;
        }
        if (I.value.state === "empty_workspace") {
          R.value = !0, N.value = 2;
          return;
        }
        if (I.value.state === "unmanaged") {
          R.value = !0, N.value = 2;
          return;
        }
      } catch (j) {
        console.warn("Setup status check failed, proceeding normally:", j);
      }
      await le();
    }), (j, U) => {
      var ge, Ce, De, We, ht, zt, ks, bs, _s, $s, Cs, xs;
      return s(), o("div", mb, [
        e("div", vb, [
          e("div", fb, [
            U[30] || (U[30] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            x.value ? (s(), o("div", gb)) : d("", !0)
          ]),
          e("div", pb, [
            b(Ks),
            U[33] || (U[33] = e("span", { class: "header-divider" }, null, -1)),
            e("button", {
              class: me(["icon-btn", { spinning: te.value }]),
              onClick: le,
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
              onClick: U[0] || (U[0] = (ke) => l("close")),
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
        e("div", hb, [
          e("div", { class: "env-switcher-header" }, [
            U[34] || (U[34] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: ct
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: gt
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: U[1] || (U[1] = (ke) => he("environments", "all-envs"))
          }, [
            x.value ? (s(), o("div", yb, [
              e("span", null, a(((ge = G.value) == null ? void 0 : ge.name) || ((Ce = x.value) == null ? void 0 : Ce.environment) || "Loading..."), 1),
              e("span", wb, "(" + a(x.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            U[35] || (U[35] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", kb, [
          e("div", bb, [
            e("div", _b, [
              e("div", $b, [
                U[36] || (U[36] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                e("button", {
                  class: me(["sidebar-item", { active: Q.value === "status" && ne.value === "this-env" }]),
                  onClick: U[2] || (U[2] = (ke) => he("status", "this-env"))
                }, " STATUS ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: Q.value === "workflows" }]),
                  onClick: U[3] || (U[3] = (ke) => he("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: Q.value === "models-env" }]),
                  onClick: U[4] || (U[4] = (ke) => he("models-env", "this-env"))
                }, " MODELS ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: Q.value === "branches" }]),
                  onClick: U[5] || (U[5] = (ke) => he("branches", "this-env"))
                }, " BRANCHES ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: Q.value === "history" }]),
                  onClick: U[6] || (U[6] = (ke) => he("history", "this-env"))
                }, " HISTORY ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: Q.value === "nodes" }]),
                  onClick: U[7] || (U[7] = (ke) => he("nodes", "this-env"))
                }, " NODES ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: Q.value === "debug-env" }]),
                  onClick: U[8] || (U[8] = (ke) => he("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              U[39] || (U[39] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", Cb, [
                U[37] || (U[37] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                e("button", {
                  class: me(["sidebar-item", { active: Q.value === "environments" }]),
                  onClick: U[9] || (U[9] = (ke) => he("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: Q.value === "model-index" }]),
                  onClick: U[10] || (U[10] = (ke) => he("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: Q.value === "settings" }]),
                  onClick: U[11] || (U[11] = (ke) => he("settings", "all-envs"))
                }, " SETTINGS ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: Q.value === "debug-workspace" }]),
                  onClick: U[12] || (U[12] = (ke) => he("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              U[40] || (U[40] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", xb, [
                U[38] || (U[38] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                e("button", {
                  class: me(["sidebar-item", { active: Q.value === "export" }]),
                  onClick: U[13] || (U[13] = (ke) => he("export", "sharing"))
                }, " EXPORT ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: Q.value === "import" }]),
                  onClick: U[14] || (U[14] = (ke) => he("import", "sharing"))
                }, " IMPORT ", 2),
                e("button", {
                  class: me(["sidebar-item", { active: Q.value === "remotes" }]),
                  onClick: U[15] || (U[15] = (ke) => he("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            e("div", Sb, [
              b(Js)
            ])
          ]),
          e("div", Ib, [
            Y.value ? (s(), o("div", Eb, a(Y.value), 1)) : !x.value && Q.value === "status" ? (s(), o("div", Mb, " Loading status... ")) : (s(), o(W, { key: 2 }, [
              Q.value === "status" ? (s(), E(Ga, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: S,
                status: x.value,
                "setup-state": re.value,
                onSwitchBranch: tt,
                onCommitChanges: U[16] || (U[16] = (ke) => Xe.value = !0),
                onSyncEnvironment: U[17] || (U[17] = (ke) => Ge.value = !0),
                onViewWorkflows: U[18] || (U[18] = (ke) => he("workflows", "this-env")),
                onViewHistory: U[19] || (U[19] = (ke) => he("history", "this-env")),
                onViewDebug: U[20] || (U[20] = (ke) => he("debug-env", "this-env")),
                onViewNodes: U[21] || (U[21] = (ke) => he("nodes", "this-env")),
                onRepairMissingModels: qt,
                onRepairEnvironment: ys,
                onStartSetup: U[22] || (U[22] = (ke) => R.value = !0),
                onViewEnvironments: U[23] || (U[23] = (ke) => he("environments", "all-envs")),
                onCreateEnvironment: ro
              }, null, 8, ["status", "setup-state"])) : Q.value === "workflows" ? (s(), E(mm, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: L,
                onRefresh: le
              }, null, 512)) : Q.value === "models-env" ? (s(), E(Km, {
                key: 2,
                onNavigate: ze
              })) : Q.value === "branches" ? (s(), E(al, {
                key: 3,
                branches: K.value,
                current: ((De = x.value) == null ? void 0 : De.branch) || null,
                onSwitch: O,
                onCreate: B,
                onDelete: V
              }, null, 8, ["branches", "current"])) : Q.value === "history" ? (s(), E(pl, {
                key: 4,
                commits: M.value,
                onSelect: J,
                onCheckout: Me
              }, null, 8, ["commits"])) : Q.value === "nodes" ? (s(), E(Gv, {
                key: 5,
                "version-mismatches": ((ht = (We = x.value) == null ? void 0 : We.comparison) == null ? void 0 : ht.version_mismatches) || [],
                onOpenNodeManager: rt,
                onRepairEnvironment: ys,
                onToast: dt
              }, null, 8, ["version-mismatches"])) : Q.value === "debug-env" ? (s(), E(Qp, { key: 6 })) : Q.value === "environments" ? (s(), E(t1, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: P,
                onSwitch: ot,
                onCreated: to,
                onDelete: so
              }, null, 512)) : Q.value === "model-index" ? (s(), E(fv, {
                key: 8,
                onRefresh: le
              })) : Q.value === "settings" ? (s(), E(Kp, { key: 9 })) : Q.value === "debug-workspace" ? (s(), E(Yp, { key: 10 })) : Q.value === "export" ? (s(), E(P1, { key: 11 })) : Q.value === "import" ? (s(), E(S0, {
                key: 12,
                onImportCompleteSwitch: lo
              })) : Q.value === "remotes" ? (s(), E(Ip, {
                key: 13,
                onToast: dt
              })) : d("", !0)
            ], 64))
          ])
        ]),
        ce.value ? (s(), E(G0, {
          key: 0,
          commit: ce.value,
          onClose: U[24] || (U[24] = (ke) => ce.value = null),
          onCheckout: Me,
          onCreateBranch: se
        }, null, 8, ["commit"])) : d("", !0),
        xe.value ? (s(), E(Bs, {
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
          onCancel: U[25] || (U[25] = (ke) => xe.value = null),
          onSecondary: xe.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        b(Vw, {
          show: ie.value,
          "from-environment": ((zt = G.value) == null ? void 0 : zt.name) || "unknown",
          "to-environment": Ie.value,
          onConfirm: xt,
          onClose: Qe
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Xe.value && x.value ? (s(), E(qs, {
          key: 2,
          status: x.value,
          "as-modal": !0,
          onClose: U[26] || (U[26] = (ke) => Xe.value = !1),
          onCommitted: It
        }, null, 8, ["status"])) : d("", !0),
        Ge.value && x.value ? (s(), E(rk, {
          key: 3,
          show: Ge.value,
          "mismatch-details": {
            missing_nodes: x.value.comparison.missing_nodes,
            extra_nodes: x.value.comparison.extra_nodes
          },
          onConfirm: Ht,
          onClose: U[27] || (U[27] = (ke) => Ge.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : d("", !0),
        b(Zw, {
          show: X.value,
          state: Te.value.state,
          progress: Te.value.progress,
          message: Te.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        q.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: U[29] || (U[29] = Pe((ke) => q.value = !1, ["self"]))
        }, [
          e("div", Tb, [
            e("div", Rb, [
              U[42] || (U[42] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: U[28] || (U[28] = (ke) => q.value = !1)
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
            e("div", Lb, [
              U[43] || (U[43] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", Pb, [
                (s(!0), o(W, null, oe(F.value, (ke) => (s(), o("div", {
                  key: ke.name,
                  class: me(["env-item", { current: ke.is_current }])
                }, [
                  e("div", zb, [
                    e("div", Db, [
                      e("span", Nb, a(ke.is_current ? "●" : "○"), 1),
                      e("span", Ub, a(ke.name), 1),
                      ke.current_branch ? (s(), o("span", Ob, "(" + a(ke.current_branch) + ")", 1)) : d("", !0),
                      ke.is_current ? (s(), o("span", Bb, "CURRENT")) : d("", !0)
                    ]),
                    e("div", Fb, a(ke.workflow_count) + " workflows • " + a(ke.node_count) + " nodes ", 1)
                  ]),
                  ke.is_current ? d("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (X_) => ot(ke.name)
                  }, " SWITCH ", 8, Ab))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        R.value ? (s(), E(ub, {
          key: 5,
          "default-path": ((ks = I.value) == null ? void 0 : ks.default_path) || "~/comfygit",
          "detected-models-dir": ((bs = I.value) == null ? void 0 : bs.detected_models_dir) || null,
          "initial-step": N.value,
          "existing-environments": ((_s = I.value) == null ? void 0 : _s.environments) || [],
          "cli-installed": (($s = I.value) == null ? void 0 : $s.cli_installed) ?? !0,
          "setup-state": ((Cs = I.value) == null ? void 0 : Cs.state) || "no_workspace",
          "workspace-path": ((xs = I.value) == null ? void 0 : xs.workspace_path) || null,
          onComplete: oo,
          onClose: no,
          onSwitchEnvironment: ao,
          onEnvironmentCreatedNoSwitch: io
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : d("", !0),
        e("div", Vb, [
          b(vo, { name: "toast" }, {
            default: i(() => [
              (s(!0), o(W, null, oe(je.value, (ke) => (s(), o("div", {
                key: ke.id,
                class: me(["toast", ke.type])
              }, [
                e("span", Wb, a(ke.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), jb = /* @__PURE__ */ ee(Gb, [["__scopeId", "data-v-fd4bf3bb"]]), Hb = { class: "item-header" }, qb = { class: "item-info" }, Kb = { class: "filename" }, Jb = { class: "metadata" }, Yb = { class: "size" }, Xb = {
  key: 0,
  class: "type"
}, Qb = { class: "item-actions" }, Zb = {
  key: 0,
  class: "progress-section"
}, e_ = { class: "progress-bar" }, t_ = { class: "progress-stats" }, s_ = { class: "downloaded" }, o_ = { class: "speed" }, n_ = {
  key: 0,
  class: "eta"
}, a_ = {
  key: 1,
  class: "status-msg paused"
}, l_ = {
  key: 2,
  class: "status-msg queued"
}, i_ = {
  key: 3,
  class: "status-msg completed"
}, r_ = {
  key: 4,
  class: "status-msg failed"
}, d_ = {
  key: 0,
  class: "retries"
}, c_ = /* @__PURE__ */ Z({
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
    function g(u) {
      return u === 0 ? "-" : `${(u / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function p(u) {
      if (u < 60) return `${Math.round(u)}s`;
      const v = Math.floor(u / 60);
      return v < 60 ? `${v}m` : `${Math.floor(v / 60)}h ${v % 60}m`;
    }
    return (u, v) => (s(), o("div", {
      class: me(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Hb, [
        e("div", qb, [
          e("div", Kb, a(t.item.filename), 1),
          e("div", Jb, [
            e("span", Yb, a(l(t.item.size)), 1),
            t.item.type ? (s(), o("span", Xb, a(t.item.type), 1)) : d("", !0)
          ])
        ]),
        e("div", Qb, [
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
      t.item.status === "downloading" ? (s(), o("div", Zb, [
        e("div", e_, [
          e("div", {
            class: "progress-fill",
            style: wt({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", t_, [
          e("span", s_, a(l(t.item.downloaded)) + " / " + a(l(t.item.size)), 1),
          e("span", o_, a(g(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", n_, a(p(t.item.eta)), 1)) : d("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", a_, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", l_, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", i_, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", r_, [
        h(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", d_, "(" + a(t.item.retries) + " retries)", 1)) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ut = /* @__PURE__ */ ee(c_, [["__scopeId", "data-v-2110df65"]]), u_ = { class: "queue-title" }, m_ = { class: "count" }, v_ = { class: "queue-actions" }, f_ = { class: "action-label" }, g_ = {
  key: 0,
  class: "overall-progress"
}, p_ = { class: "progress-bar" }, h_ = {
  key: 0,
  class: "current-mini"
}, y_ = { class: "filename" }, w_ = { class: "speed" }, k_ = {
  key: 1,
  class: "queue-content"
}, b_ = {
  key: 0,
  class: "section"
}, __ = {
  key: 1,
  class: "section"
}, $_ = { class: "section-header" }, C_ = { class: "section-label paused" }, x_ = { class: "items-list" }, S_ = {
  key: 2,
  class: "section"
}, I_ = { class: "section-header" }, E_ = { class: "section-label" }, M_ = { class: "items-list" }, T_ = {
  key: 3,
  class: "section"
}, R_ = { class: "section-header" }, L_ = { class: "section-label" }, P_ = { class: "items-list" }, z_ = {
  key: 4,
  class: "section"
}, D_ = { class: "section-header" }, N_ = { class: "section-label failed" }, U_ = { class: "items-list" }, O_ = /* @__PURE__ */ Z({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: n,
      queuedItems: l,
      completedItems: g,
      failedItems: p,
      pausedItems: u,
      hasItems: v,
      activeCount: r,
      cancelDownload: m,
      retryDownload: y,
      resumeDownload: w,
      resumeAllPaused: _,
      removeItem: k,
      clearCompleted: T
    } = Gt(), A = $(!1);
    let f = null;
    $t(
      () => ({
        active: r.value,
        failed: p.value.length,
        paused: u.value.length,
        completed: g.value.length
      }),
      (M, K) => {
        f && (clearTimeout(f), f = null);
        const F = M.active === 0 && M.failed === 0 && M.paused === 0 && M.completed > 0, G = K && (K.active > 0 || K.paused > 0);
        F && G && (f = setTimeout(() => {
          T(), f = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = D(() => {
      var F;
      if (c.items.length === 0) return 0;
      const M = g.value.length, K = ((F = n.value) == null ? void 0 : F.progress) || 0;
      return Math.round((M + K / 100) / c.items.length * 100);
    });
    function z(M) {
      m(M);
    }
    function x(M) {
      return M === 0 ? "" : `${(M / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (M, K) => (s(), E(Ve, { to: "body" }, [
      _e(v) ? (s(), o("div", {
        key: 0,
        class: me(["model-download-queue", { minimized: !A.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: K[0] || (K[0] = (F) => A.value = !A.value)
        }, [
          e("div", u_, [
            K[4] || (K[4] = e("span", { class: "icon" }, "↓", -1)),
            K[5] || (K[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", m_, "(" + a(_e(r)) + "/" + a(_e(c).items.length) + ")", 1)
          ]),
          e("div", v_, [
            e("span", f_, a(A.value ? "minimize" : "expand"), 1)
          ])
        ]),
        A.value ? (s(), o("div", k_, [
          _e(n) ? (s(), o("div", b_, [
            K[6] || (K[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            b(Ut, {
              item: _e(n),
              onCancel: K[1] || (K[1] = (F) => z(_e(n).id))
            }, null, 8, ["item"])
          ])) : d("", !0),
          _e(u).length > 0 ? (s(), o("div", __, [
            e("div", $_, [
              e("span", C_, "Paused (" + a(_e(u).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: K[2] || (K[2] = //@ts-ignore
                (...F) => _e(_) && _e(_)(...F))
              }, "Resume All")
            ]),
            e("div", x_, [
              (s(!0), o(W, null, oe(_e(u), (F) => (s(), E(Ut, {
                key: F.id,
                item: F,
                onResume: (G) => _e(w)(F.id),
                onRemove: (G) => _e(k)(F.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          _e(l).length > 0 ? (s(), o("div", S_, [
            e("div", I_, [
              e("span", E_, "Queued (" + a(_e(l).length) + ")", 1)
            ]),
            e("div", M_, [
              (s(!0), o(W, null, oe(_e(l), (F) => (s(), E(Ut, {
                key: F.id,
                item: F,
                onCancel: (G) => z(F.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : d("", !0),
          _e(g).length > 0 ? (s(), o("div", T_, [
            e("div", R_, [
              e("span", L_, "Completed (" + a(_e(g).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: K[3] || (K[3] = //@ts-ignore
                (...F) => _e(T) && _e(T)(...F))
              }, "Clear")
            ]),
            e("div", P_, [
              (s(!0), o(W, null, oe(_e(g).slice(0, 3), (F) => (s(), E(Ut, {
                key: F.id,
                item: F,
                onRemove: (G) => _e(k)(F.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          _e(p).length > 0 ? (s(), o("div", z_, [
            e("div", D_, [
              e("span", N_, "Failed (" + a(_e(p).length) + ")", 1)
            ]),
            e("div", U_, [
              (s(!0), o(W, null, oe(_e(p), (F) => (s(), E(Ut, {
                key: F.id,
                item: F,
                onRetry: (G) => _e(y)(F.id),
                onRemove: (G) => _e(k)(F.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : d("", !0)
        ])) : (s(), o("div", g_, [
          e("div", p_, [
            e("div", {
              class: "progress-fill",
              style: wt({ width: `${C.value}%` })
            }, null, 4)
          ]),
          _e(n) ? (s(), o("div", h_, [
            e("span", y_, a(_e(n).filename), 1),
            e("span", w_, a(x(_e(n).speed)), 1)
          ])) : d("", !0)
        ]))
      ], 2)) : d("", !0)
    ]));
  }
}), B_ = /* @__PURE__ */ ee(O_, [["__scopeId", "data-v-60751cfa"]]), F_ = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', A_ = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', V_ = {
  comfy: F_,
  phosphor: A_
}, gs = "comfy", Ys = "comfygit-theme";
let Ct = null, Xs = gs;
function W_() {
  try {
    const t = localStorage.getItem(Ys);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return gs;
}
function Qs(t = gs) {
  Ct && Ct.remove(), Ct = document.createElement("style"), Ct.id = "comfygit-theme-styles", Ct.setAttribute("data-theme", t), Ct.textContent = V_[t], document.head.appendChild(Ct), document.body.setAttribute("data-comfygit-theme", t), Xs = t;
  try {
    localStorage.setItem(Ys, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function G_() {
  return Xs;
}
function j_(t) {
  Qs(t);
}
function H_(t) {
  var p;
  const { ui_id: c, state: n } = t || {}, l = (n == null ? void 0 : n.history) || {};
  if (!c)
    return null;
  const g = l[c];
  return g && g.result === "error" && ((p = g.status) == null ? void 0 : p.status_str) === "error" ? (g.status.messages || [])[0] || "Unknown error" : null;
}
const ps = document.createElement("link");
ps.rel = "stylesheet";
ps.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(ps);
const q_ = W_();
Qs(q_);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), j_(t);
  },
  getTheme: () => {
    const t = G_();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let at = null, Ye = null, At = null, Ot = null, Ts = null;
const Lt = $(null);
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
function K_() {
  if (!Lt.value) return !1;
  const t = Lt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Lt.value.has_changes;
}
function Rs(t) {
  at && at.remove(), at = document.createElement("div"), at.className = "comfygit-panel-overlay";
  const c = document.createElement("div");
  c.className = "comfygit-panel-container", at.appendChild(c), at.addEventListener("click", (g) => {
    g.target === at && as();
  });
  const n = (g) => {
    g.key === "Escape" && (as(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), us({
    render: () => ms(jb, {
      initialView: t,
      onClose: as,
      onStatusUpdate: async (g) => {
        Lt.value = g, Vt(), await is(), ds(), rs();
      }
    })
  }).mount(c), document.body.appendChild(at);
}
function as() {
  at && (at.remove(), at = null);
}
function J_(t) {
  Bt(), Ye = document.createElement("div"), Ye.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  Ye.style.position = "fixed", Ye.style.top = `${c.bottom + 8}px`, Ye.style.right = `${window.innerWidth - c.right}px`, Ye.style.zIndex = "10001";
  const n = (g) => {
    Ye && !Ye.contains(g.target) && g.target !== t && (Bt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const l = (g) => {
    g.key === "Escape" && (Bt(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), At = us({
    render: () => ms(qs, {
      status: Lt.value,
      onClose: Bt,
      onCommitted: () => {
        Bt(), Yt().then(Vt);
      }
    })
  }), At.mount(Ye), document.body.appendChild(Ye);
}
function Bt() {
  At && (At.unmount(), At = null), Ye && (Ye.remove(), Ye = null);
}
function Y_() {
  Ot || (Ot = document.createElement("div"), Ot.className = "comfygit-download-queue-root", Ts = us({
    render: () => ms(B_)
  }), Ts.mount(Ot), document.body.appendChild(Ot), console.log("[ComfyGit] Model download queue mounted"));
}
let Ze = null;
function Vt() {
  if (!Ze) return;
  const t = Ze.querySelector(".commit-indicator");
  t && (t.style.display = K_() ? "block" : "none");
}
function ds() {
  if (!Ze) return;
  const t = hs !== "managed";
  Ze.disabled = t, Ze.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
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
    var g, p;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = Rs, Ze = document.createElement("button"), Ze.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Ze.innerHTML = 'Commit <span class="commit-indicator"></span>', Ze.title = "Quick Commit", Ze.onclick = () => J_(Ze), t.appendChild(c), t.appendChild(Ze), (p = (g = _t.menu) == null ? void 0 : g.settingsGroup) != null && p.element && (_t.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), Y_();
    const { loadPendingDownloads: n } = Gt();
    n(), await Promise.all([Yt(), is()]), Vt(), ds(), rs(), setTimeout(rs, 100), setInterval(async () => {
      await Promise.all([Yt(), is()]), Vt(), ds();
    }, 3e4);
    const l = _t.api;
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
        const T = document.createElement("div");
        T.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const A = document.createElement("div");
        A.textContent = "Node installation failed", A.style.cssText = "font-weight: 600; color: #e53935;", T.appendChild(A);
        const f = document.createElement("div");
        f.textContent = "Dependency conflict detected", f.style.cssText = "font-size: 12px; opacity: 0.8;", T.appendChild(f), _.appendChild(T);
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
        `, z.onmouseover = () => z.style.opacity = "1", z.onmouseout = () => z.style.opacity = "0.6", z.onclick = () => _.remove(), _.appendChild(z), document.body.appendChild(_), console.log("[ComfyGit] Manager error toast displayed:", y), setTimeout(() => {
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
        const w = H_(y.detail);
        w && r(w);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
