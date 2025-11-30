import { app as kt } from "../../scripts/app.js";
import { defineComponent as Y, createElementBlock as o, openBlock as s, createCommentVNode as m, createElementVNode as e, renderSlot as pe, createBlock as E, resolveDynamicComponent as Qt, normalizeClass as ne, withCtx as d, toDisplayString as a, createVNode as w, createTextVNode as y, computed as D, Fragment as F, renderList as J, normalizeStyle as nt, ref as $, onMounted as Ee, watch as yt, Teleport as Re, withModifiers as $e, Transition as Ps, createSlots as Tt, withKeys as ut, onUnmounted as Us, reactive as Xt, readonly as Bs, unref as ye, withDirectives as ot, vModelText as ms, vModelRadio as Wt, vModelCheckbox as vs, nextTick as Os, vModelSelect as Gt, TransitionGroup as As, createApp as Zt, h as Jt } from "vue";
const Fs = { class: "panel-layout" }, Vs = {
  key: 0,
  class: "panel-layout-header"
}, Ws = {
  key: 1,
  class: "panel-layout-search"
}, Gs = { class: "panel-layout-content" }, js = {
  key: 2,
  class: "panel-layout-footer"
}, qs = /* @__PURE__ */ Y({
  __name: "PanelLayout",
  setup(t) {
    return (r, n) => (s(), o("div", Fs, [
      r.$slots.header ? (s(), o("div", Vs, [
        pe(r.$slots, "header", {}, void 0, !0)
      ])) : m("", !0),
      r.$slots.search ? (s(), o("div", Ws, [
        pe(r.$slots, "search", {}, void 0, !0)
      ])) : m("", !0),
      e("div", Gs, [
        pe(r.$slots, "content", {}, void 0, !0)
      ]),
      r.$slots.footer ? (s(), o("div", js, [
        pe(r.$slots, "footer", {}, void 0, !0)
      ])) : m("", !0)
    ]));
  }
}), Q = (t, r) => {
  const n = t.__vccOpts || t;
  for (const [i, h] of r)
    n[i] = h;
  return n;
}, Be = /* @__PURE__ */ Q(qs, [["__scopeId", "data-v-21565df9"]]), Hs = {
  key: 0,
  class: "panel-title-prefix"
}, Ks = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Ys = /* @__PURE__ */ Y({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (r, n) => (s(), E(Qt(`h${t.level}`), {
      class: ne(["panel-title", t.variant])
    }, {
      default: d(() => [
        t.showPrefix ? (s(), o("span", Hs, a(t.prefix), 1)) : (s(), o("span", Ks)),
        pe(r.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Qs = /* @__PURE__ */ Q(Ys, [["__scopeId", "data-v-c3875efc"]]), Xs = ["title"], Zs = ["width", "height"], Js = /* @__PURE__ */ Y({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (r, n) => (s(), o("button", {
      class: "info-button",
      title: t.title,
      onClick: n[0] || (n[0] = (i) => r.$emit("click"))
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
      ])], 8, Zs))
    ], 8, Xs));
  }
}), fs = /* @__PURE__ */ Q(Js, [["__scopeId", "data-v-6fc7f16d"]]), eo = { class: "header-left" }, to = {
  key: 0,
  class: "header-actions"
}, so = /* @__PURE__ */ Y({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (r, n) => (s(), o("div", {
      class: ne(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", eo, [
        w(Qs, { "show-prefix": t.showPrefix }, {
          default: d(() => [
            y(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), E(fs, {
          key: 0,
          onClick: n[0] || (n[0] = (i) => r.$emit("info-click"))
        })) : m("", !0)
      ]),
      r.$slots.actions ? (s(), o("div", to, [
        pe(r.$slots, "actions", {}, void 0, !0)
      ])) : m("", !0)
    ], 2));
  }
}), Oe = /* @__PURE__ */ Q(so, [["__scopeId", "data-v-55a62cd6"]]), oo = {
  key: 0,
  class: "section-title-count"
}, no = {
  key: 1,
  class: "section-title-icon"
}, ao = /* @__PURE__ */ Y({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (r, n) => (s(), E(Qt(`h${t.level}`), {
      class: ne(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && r.$emit("click"))
    }, {
      default: d(() => [
        pe(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", oo, "(" + a(t.count) + ")", 1)) : m("", !0),
        t.clickable ? (s(), o("span", no, a(t.expanded ? "▼" : "▸"), 1)) : m("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ke = /* @__PURE__ */ Q(ao, [["__scopeId", "data-v-559361eb"]]), lo = { class: "status-grid" }, io = { class: "status-grid__columns" }, ro = { class: "status-grid__column" }, co = { class: "status-grid__title" }, uo = { class: "status-grid__column status-grid__column--right" }, mo = { class: "status-grid__title" }, vo = {
  key: 0,
  class: "status-grid__footer"
}, fo = /* @__PURE__ */ Y({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (r, n) => (s(), o("div", lo, [
      e("div", io, [
        e("div", ro, [
          e("h4", co, a(t.leftTitle), 1),
          pe(r.$slots, "left", {}, void 0, !0)
        ]),
        e("div", uo, [
          e("h4", mo, a(t.rightTitle), 1),
          pe(r.$slots, "right", {}, void 0, !0)
        ])
      ]),
      r.$slots.footer ? (s(), o("div", vo, [
        pe(r.$slots, "footer", {}, void 0, !0)
      ])) : m("", !0)
    ]));
  }
}), go = /* @__PURE__ */ Q(fo, [["__scopeId", "data-v-73b7ba3f"]]), ho = {
  key: 0,
  class: "status-item__icon"
}, po = {
  key: 1,
  class: "status-item__count"
}, yo = { class: "status-item__label" }, wo = /* @__PURE__ */ Y({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const r = t, n = D(() => `status-item--${r.variant}`);
    return (i, h) => (s(), o("div", {
      class: ne(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", ho, a(t.icon), 1)) : m("", !0),
      t.count !== void 0 ? (s(), o("span", po, a(t.count), 1)) : m("", !0),
      e("span", yo, a(t.label), 1)
    ], 2));
  }
}), tt = /* @__PURE__ */ Q(wo, [["__scopeId", "data-v-6f929183"]]), ko = { class: "issue-card__header" }, bo = { class: "issue-card__icon" }, _o = { class: "issue-card__title" }, $o = {
  key: 0,
  class: "issue-card__content"
}, Co = {
  key: 0,
  class: "issue-card__description"
}, xo = {
  key: 1,
  class: "issue-card__items"
}, So = {
  key: 2,
  class: "issue-card__actions"
}, Io = /* @__PURE__ */ Y({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const r = t, n = D(() => `issue-card--${r.severity}`);
    return (i, h) => (s(), o("div", {
      class: ne(["issue-card", n.value])
    }, [
      e("div", ko, [
        e("span", bo, a(t.icon), 1),
        e("h4", _o, a(t.title), 1)
      ]),
      i.$slots.default || t.description ? (s(), o("div", $o, [
        t.description ? (s(), o("p", Co, a(t.description), 1)) : m("", !0),
        pe(i.$slots, "default", {}, void 0, !0)
      ])) : m("", !0),
      t.items && t.items.length ? (s(), o("div", xo, [
        (s(!0), o(F, null, J(t.items, (f, g) => (s(), o("div", {
          key: g,
          class: "issue-card__item"
        }, [
          h[0] || (h[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(f), 1)
        ]))), 128))
      ])) : m("", !0),
      i.$slots.actions ? (s(), o("div", So, [
        pe(i.$slots, "actions", {}, void 0, !0)
      ])) : m("", !0)
    ], 2));
  }
}), pt = /* @__PURE__ */ Q(Io, [["__scopeId", "data-v-df6aa348"]]), Eo = ["type", "disabled"], Mo = {
  key: 0,
  class: "spinner"
}, Ro = /* @__PURE__ */ Y({
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
    return (r, n) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: ne(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => r.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", Mo)) : m("", !0),
      t.loading ? m("", !0) : pe(r.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Eo));
  }
}), ee = /* @__PURE__ */ Q(Ro, [["__scopeId", "data-v-772abe47"]]), zo = { class: "empty-state" }, Lo = {
  key: 0,
  class: "empty-icon"
}, To = { class: "empty-message" }, Do = /* @__PURE__ */ Y({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (r, n) => (s(), o("div", zo, [
      t.icon ? (s(), o("div", Lo, a(t.icon), 1)) : m("", !0),
      e("p", To, a(t.message), 1),
      t.actionLabel ? (s(), E(ee, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => r.$emit("action"))
      }, {
        default: d(() => [
          y(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : m("", !0)
    ]));
  }
}), Je = /* @__PURE__ */ Q(Do, [["__scopeId", "data-v-4466284f"]]), No = /* @__PURE__ */ Y({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (r, n) => (s(), o("span", {
      class: ne(["detail-label"]),
      style: nt({ minWidth: t.minWidth })
    }, [
      pe(r.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Bt = /* @__PURE__ */ Q(No, [["__scopeId", "data-v-75e9eeb8"]]), Po = /* @__PURE__ */ Y({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, n) => (s(), o("span", {
      class: ne(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      pe(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Yt = /* @__PURE__ */ Q(Po, [["__scopeId", "data-v-2f186e4c"]]), Uo = { class: "detail-row" }, Bo = /* @__PURE__ */ Y({
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
    return (r, n) => (s(), o("div", Uo, [
      w(Bt, { "min-width": t.labelMinWidth }, {
        default: d(() => [
          y(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), E(Yt, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: d(() => [
          y(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : pe(r.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Ce = /* @__PURE__ */ Q(Bo, [["__scopeId", "data-v-ef15664a"]]), Oo = { class: "modal-header" }, Ao = { class: "modal-body" }, Fo = { class: "status-section" }, Vo = {
  key: 0,
  class: "status-section"
}, Wo = { class: "section-header-row" }, Go = {
  key: 0,
  class: "workflow-group"
}, jo = { class: "workflow-group-header" }, qo = { class: "workflow-group-title" }, Ho = { class: "workflow-list" }, Ko = { class: "workflow-name" }, Yo = { class: "workflow-issue" }, Qo = {
  key: 1,
  class: "workflow-group"
}, Xo = { class: "workflow-group-header" }, Zo = { class: "workflow-group-title" }, Jo = { class: "workflow-list" }, en = { class: "workflow-name" }, tn = { class: "workflow-issue" }, sn = {
  key: 2,
  class: "workflow-group"
}, on = { class: "workflow-group-header" }, nn = { class: "workflow-group-title" }, an = { class: "workflow-list" }, ln = { class: "workflow-name" }, rn = {
  key: 3,
  class: "workflow-group"
}, dn = { class: "workflow-group-header" }, cn = { class: "workflow-group-title" }, un = { class: "workflow-list" }, mn = { class: "workflow-name" }, vn = {
  key: 4,
  class: "workflow-group"
}, fn = { class: "workflow-group-header" }, gn = { class: "workflow-group-title" }, hn = { class: "workflow-list" }, pn = { class: "workflow-name" }, yn = {
  key: 5,
  class: "workflow-group"
}, wn = { class: "workflow-group-title" }, kn = { class: "expand-icon" }, bn = {
  key: 0,
  class: "workflow-list"
}, _n = { class: "workflow-name" }, $n = {
  key: 1,
  class: "status-section"
}, Cn = {
  key: 0,
  class: "change-group"
}, xn = { class: "change-group-header" }, Sn = { class: "change-group-title" }, In = { class: "change-list" }, En = { class: "node-name" }, Mn = {
  key: 0,
  class: "dev-badge"
}, Rn = {
  key: 1,
  class: "change-group"
}, zn = { class: "change-group-header" }, Ln = { class: "change-group-title" }, Tn = { class: "change-list" }, Dn = { class: "node-name" }, Nn = {
  key: 0,
  class: "dev-badge"
}, Pn = {
  key: 2,
  class: "change-group"
}, Un = { class: "change-list" }, Bn = { class: "change-item" }, On = { class: "node-name" }, An = {
  key: 3,
  class: "change-group"
}, Fn = {
  key: 2,
  class: "status-section"
}, Vn = { class: "section-header-row" }, Wn = {
  key: 0,
  class: "drift-item"
}, Gn = { class: "drift-list" }, jn = {
  key: 0,
  class: "drift-list-more"
}, qn = {
  key: 1,
  class: "drift-item"
}, Hn = { class: "drift-list" }, Kn = {
  key: 0,
  class: "drift-list-more"
}, Yn = {
  key: 2,
  class: "drift-item"
}, Qn = {
  key: 3,
  class: "drift-item"
}, Xn = {
  key: 3,
  class: "status-section"
}, Zn = { class: "info-box" }, Jn = { class: "drift-list" }, ea = {
  key: 0,
  class: "drift-list-more"
}, ta = {
  key: 4,
  class: "status-section"
}, sa = { class: "warning-box" }, oa = {
  key: 5,
  class: "empty-state-inline"
}, na = { class: "modal-actions" }, aa = /* @__PURE__ */ Y({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const r = t, n = $(!1);
    Ee(() => {
      console.log("StatusDetailModal mounted, initial show value:", r.show);
    }), yt(() => r.show, (M, _) => {
      console.log("StatusDetailModal show prop changed from", _, "to", M);
    }, { immediate: !0 });
    const i = D(() => {
      var M, _, z;
      return ((z = (_ = (M = r.status) == null ? void 0 : M.workflows) == null ? void 0 : _.analyzed) == null ? void 0 : z.filter(
        (b) => b.status === "broken" && b.sync_state === "synced"
      )) || [];
    }), h = D(() => {
      var M, _, z;
      return ((z = (_ = (M = r.status) == null ? void 0 : M.workflows) == null ? void 0 : _.analyzed) == null ? void 0 : z.filter(
        (b) => b.status === "broken" && b.sync_state !== "synced"
      )) || [];
    }), f = D(() => {
      var M, _, z;
      return ((z = (_ = (M = r.status) == null ? void 0 : M.workflows) == null ? void 0 : _.synced) == null ? void 0 : z.filter((b) => {
        var k, B, S;
        const x = (S = (B = (k = r.status) == null ? void 0 : k.workflows) == null ? void 0 : B.analyzed) == null ? void 0 : S.find((I) => I.name === b);
        return !x || x.status !== "broken";
      })) || [];
    }), g = D(() => {
      var M, _, z, b, x;
      return (M = r.status) != null && M.workflows ? (((_ = r.status.workflows.new) == null ? void 0 : _.length) ?? 0) > 0 || (((z = r.status.workflows.modified) == null ? void 0 : z.length) ?? 0) > 0 || (((b = r.status.workflows.deleted) == null ? void 0 : b.length) ?? 0) > 0 || (((x = r.status.workflows.synced) == null ? void 0 : x.length) ?? 0) > 0 : !1;
    }), u = D(() => {
      var _, z, b;
      const M = (_ = r.status) == null ? void 0 : _.git_changes;
      return M ? (((z = M.nodes_added) == null ? void 0 : z.length) ?? 0) > 0 || (((b = M.nodes_removed) == null ? void 0 : b.length) ?? 0) > 0 || M.workflow_changes || M.has_other_changes : !1;
    }), l = D(() => {
      var M, _, z, b, x, k;
      return !g.value && !u.value && ((_ = (M = r.status) == null ? void 0 : M.comparison) == null ? void 0 : _.is_synced) && (((z = r.status) == null ? void 0 : z.missing_models_count) ?? 0) === 0 && (((k = (x = (b = r.status) == null ? void 0 : b.comparison) == null ? void 0 : x.disabled_nodes) == null ? void 0 : k.length) ?? 0) === 0;
    }), v = D(() => {
      var _, z;
      const M = (z = (_ = r.status) == null ? void 0 : _.git_changes) == null ? void 0 : z.workflow_changes;
      return M ? typeof M == "number" ? M : Object.keys(M).length : 0;
    });
    function p(M) {
      return typeof M == "string" ? M : M.name;
    }
    function c(M) {
      return typeof M == "object" && M.is_development === !0;
    }
    return (M, _) => {
      var z, b, x, k, B, S, I, V, H, te, W, T, R, U, N, K, re, X, se, O, C, ae;
      return s(), E(Re, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: _[6] || (_[6] = (oe) => M.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: _[5] || (_[5] = $e(() => {
            }, ["stop"]))
          }, [
            e("div", Oo, [
              _[7] || (_[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: _[0] || (_[0] = (oe) => M.$emit("close"))
              }, "✕")
            ]),
            e("div", Ao, [
              e("div", Fo, [
                w(Ke, { level: "4" }, {
                  default: d(() => [..._[8] || (_[8] = [
                    y("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                w(Ce, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              g.value ? (s(), o("div", Vo, [
                e("div", Wo, [
                  w(Ke, { level: "4" }, {
                    default: d(() => [..._[9] || (_[9] = [
                      y("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: _[1] || (_[1] = (oe) => M.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (s(), o("div", Go, [
                  e("div", jo, [
                    _[10] || (_[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", qo, "BROKEN (COMMITTED) (" + a(i.value.length) + ")", 1)
                  ]),
                  e("div", Ho, [
                    (s(!0), o(F, null, J(i.value, (oe) => (s(), o("div", {
                      key: oe.name,
                      class: "workflow-item"
                    }, [
                      e("span", Ko, a(oe.name), 1),
                      e("span", Yo, a(oe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : m("", !0),
                h.value.length ? (s(), o("div", Qo, [
                  e("div", Xo, [
                    _[11] || (_[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Zo, "BROKEN (UNCOMMITTED) (" + a(h.value.length) + ")", 1)
                  ]),
                  e("div", Jo, [
                    (s(!0), o(F, null, J(h.value, (oe) => (s(), o("div", {
                      key: oe.name,
                      class: "workflow-item"
                    }, [
                      e("span", en, a(oe.name), 1),
                      e("span", tn, a(oe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : m("", !0),
                (b = (z = t.status.workflows) == null ? void 0 : z.new) != null && b.length ? (s(), o("div", sn, [
                  e("div", on, [
                    _[12] || (_[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", nn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", an, [
                    (s(!0), o(F, null, J(t.status.workflows.new, (oe) => (s(), o("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", ln, a(oe), 1)
                    ]))), 128))
                  ])
                ])) : m("", !0),
                (k = (x = t.status.workflows) == null ? void 0 : x.modified) != null && k.length ? (s(), o("div", rn, [
                  e("div", dn, [
                    _[13] || (_[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", cn, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", un, [
                    (s(!0), o(F, null, J(t.status.workflows.modified, (oe) => (s(), o("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", mn, a(oe), 1)
                    ]))), 128))
                  ])
                ])) : m("", !0),
                (S = (B = t.status.workflows) == null ? void 0 : B.deleted) != null && S.length ? (s(), o("div", vn, [
                  e("div", fn, [
                    _[14] || (_[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", gn, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", hn, [
                    (s(!0), o(F, null, J(t.status.workflows.deleted, (oe) => (s(), o("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", pn, a(oe), 1)
                    ]))), 128))
                  ])
                ])) : m("", !0),
                f.value.length ? (s(), o("div", yn, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: _[2] || (_[2] = (oe) => n.value = !n.value)
                  }, [
                    _[15] || (_[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", wn, "SYNCED (" + a(f.value.length) + ")", 1),
                    e("span", kn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", bn, [
                    (s(!0), o(F, null, J(f.value, (oe) => (s(), o("div", {
                      key: oe,
                      class: "workflow-item"
                    }, [
                      e("span", _n, a(oe), 1)
                    ]))), 128))
                  ])) : m("", !0)
                ])) : m("", !0)
              ])) : m("", !0),
              u.value ? (s(), o("div", $n, [
                w(Ke, { level: "4" }, {
                  default: d(() => [..._[16] || (_[16] = [
                    y("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (V = (I = t.status.git_changes) == null ? void 0 : I.nodes_added) != null && V.length ? (s(), o("div", Cn, [
                  e("div", xn, [
                    _[17] || (_[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Sn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", In, [
                    (s(!0), o(F, null, J(t.status.git_changes.nodes_added, (oe) => (s(), o("div", {
                      key: p(oe),
                      class: "change-item"
                    }, [
                      e("span", En, a(p(oe)), 1),
                      c(oe) ? (s(), o("span", Mn, "dev")) : m("", !0)
                    ]))), 128))
                  ])
                ])) : m("", !0),
                (te = (H = t.status.git_changes) == null ? void 0 : H.nodes_removed) != null && te.length ? (s(), o("div", Rn, [
                  e("div", zn, [
                    _[18] || (_[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", Ln, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", Tn, [
                    (s(!0), o(F, null, J(t.status.git_changes.nodes_removed, (oe) => (s(), o("div", {
                      key: p(oe),
                      class: "change-item"
                    }, [
                      e("span", Dn, a(p(oe)), 1),
                      c(oe) ? (s(), o("span", Nn, "dev")) : m("", !0)
                    ]))), 128))
                  ])
                ])) : m("", !0),
                (W = t.status.git_changes) != null && W.workflow_changes ? (s(), o("div", Pn, [
                  _[19] || (_[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Un, [
                    e("div", Bn, [
                      e("span", On, a(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : m("", !0),
                (T = t.status.git_changes) != null && T.has_other_changes ? (s(), o("div", An, [..._[20] || (_[20] = [
                  e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  e("div", { class: "change-list" }, [
                    e("div", { class: "change-item" }, [
                      e("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : m("", !0)
              ])) : m("", !0),
              (R = t.status.comparison) != null && R.is_synced ? m("", !0) : (s(), o("div", Fn, [
                e("div", Vn, [
                  w(Ke, { level: "4" }, {
                    default: d(() => [..._[21] || (_[21] = [
                      y("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: _[3] || (_[3] = (oe) => M.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                _[22] || (_[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (N = (U = t.status.comparison) == null ? void 0 : U.missing_nodes) != null && N.length ? (s(), o("div", Wn, [
                  w(Ce, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Gn, [
                    (s(!0), o(F, null, J(t.status.comparison.missing_nodes.slice(0, 10), (oe) => (s(), o("div", {
                      key: oe,
                      class: "drift-list-item"
                    }, " - " + a(oe), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", jn, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : m("", !0)
                  ])
                ])) : m("", !0),
                (re = (K = t.status.comparison) == null ? void 0 : K.extra_nodes) != null && re.length ? (s(), o("div", qn, [
                  w(Ce, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Hn, [
                    (s(!0), o(F, null, J(t.status.comparison.extra_nodes.slice(0, 10), (oe) => (s(), o("div", {
                      key: oe,
                      class: "drift-list-item"
                    }, " - " + a(oe), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", Kn, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : m("", !0)
                  ])
                ])) : m("", !0),
                (se = (X = t.status.comparison) == null ? void 0 : X.version_mismatches) != null && se.length ? (s(), o("div", Yn, [
                  w(Ce, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : m("", !0),
                (O = t.status.comparison) != null && O.packages_in_sync ? m("", !0) : (s(), o("div", Qn, [
                  w(Ce, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ae = (C = t.status.comparison) == null ? void 0 : C.disabled_nodes) != null && ae.length ? (s(), o("div", Xn, [
                w(Ke, { level: "4" }, {
                  default: d(() => [..._[23] || (_[23] = [
                    y("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Zn, [
                  _[24] || (_[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Jn, [
                  (s(!0), o(F, null, J(t.status.comparison.disabled_nodes.slice(0, 10), (oe) => (s(), o("div", {
                    key: oe,
                    class: "drift-list-item"
                  }, " • " + a(oe), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", ea, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : m("", !0)
                ])
              ])) : m("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", ta, [
                w(Ke, { level: "4" }, {
                  default: d(() => [..._[25] || (_[25] = [
                    y("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", sa, [
                  _[26] || (_[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                _[27] || (_[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : m("", !0),
              l.value ? (s(), o("div", oa, [..._[28] || (_[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : m("", !0)
            ]),
            e("div", na, [
              w(ee, {
                variant: "secondary",
                onClick: _[4] || (_[4] = (oe) => M.$emit("close"))
              }, {
                default: d(() => [..._[29] || (_[29] = [
                  y(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : m("", !0)
      ]);
    };
  }
}), la = /* @__PURE__ */ Q(aa, [["__scopeId", "data-v-c67eed17"]]), ia = { class: "health-section-header" }, ra = { class: "suggestions-content" }, da = { class: "suggestions-text" }, ca = { style: { "margin-top": "var(--cg-space-3)" } }, ua = {
  key: 1,
  class: "no-issues-text"
}, ma = /* @__PURE__ */ Y({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models"],
  setup(t, { expose: r, emit: n }) {
    const i = t, h = $(!1), f = $(!1);
    function g() {
      h.value = !0;
    }
    function u() {
      h.value = !1, v("view-workflows");
    }
    function l() {
      h.value = !1, v("view-nodes");
    }
    const v = n, p = $(!1), c = D(() => {
      const U = i.status.workflows.analyzed || [], N = U.filter(
        (K) => K.unresolved_models_count > 0 || K.ambiguous_models_count > 0
      );
      return N.length === 0 && i.status.missing_models_count > 0 ? U.filter((K) => K.sync_state === "synced") : N;
    });
    function M() {
      const U = c.value;
      U.length !== 0 && (p.value = !0, v("repair-missing-models", U.map((N) => N.name)));
    }
    function _() {
      p.value = !1;
    }
    r({ resetRepairingState: _ });
    const z = D(() => i.status.workflows.new.length > 0 || i.status.workflows.modified.length > 0 || i.status.workflows.deleted.length > 0), b = D(() => i.status.has_changes), x = D(() => {
      const U = i.status.git_changes;
      return U.nodes_added.length > 0 || U.nodes_removed.length > 0 || U.workflow_changes;
    }), k = D(() => i.status.has_changes || z.value), B = D(() => Object.keys(i.status.git_changes.workflow_changes_detail).length), S = D(() => i.status.git_changes.has_other_changes), I = D(() => {
      var U;
      return ((U = i.status.workflows.analyzed) == null ? void 0 : U.filter((N) => N.status === "broken")) || [];
    }), V = D(() => {
      var U;
      return ((U = i.status.workflows.analyzed) == null ? void 0 : U.filter(
        (N) => N.has_path_sync_issues && !N.has_issues
      )) || [];
    }), H = D(() => I.value.length > 0), te = D(() => H.value || V.value.length > 0 || i.status.missing_models_count > 0 || !i.status.comparison.is_synced), W = D(() => {
      const U = [];
      return i.status.workflows.new.length > 0 && U.push(`${i.status.workflows.new.length} new`), i.status.workflows.modified.length > 0 && U.push(`${i.status.workflows.modified.length} modified`), i.status.workflows.deleted.length > 0 && U.push(`${i.status.workflows.deleted.length} deleted`), U.length > 0 ? `${U.join(", ")} workflow${U.length === 1 && !U[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), T = D(() => {
      var K, re;
      const U = [], N = i.status.comparison;
      return (K = N.missing_nodes) != null && K.length && U.push(`${N.missing_nodes.length} missing node${N.missing_nodes.length === 1 ? "" : "s"}`), (re = N.extra_nodes) != null && re.length && U.push(`${N.extra_nodes.length} untracked node${N.extra_nodes.length === 1 ? "" : "s"}`), U.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${U.join(" and ")}.`;
    }), R = D(() => {
      var K, re;
      const U = [], N = i.status.comparison;
      return (K = N.extra_nodes) != null && K.length && (N.extra_nodes.slice(0, 3).forEach((X) => {
        U.push(`Untracked: ${X}`);
      }), N.extra_nodes.length > 3 && U.push(`...and ${N.extra_nodes.length - 3} more untracked`)), (re = N.missing_nodes) != null && re.length && (N.missing_nodes.slice(0, 3).forEach((X) => {
        U.push(`Missing: ${X}`);
      }), N.missing_nodes.length > 3 && U.push(`...and ${N.missing_nodes.length - 3} more missing`)), U;
    });
    return (U, N) => (s(), o(F, null, [
      w(Be, null, {
        header: d(() => [
          w(Oe, { title: "STATUS" })
        ]),
        content: d(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: N[1] || (N[1] = (K) => f.value = !0),
            onMouseleave: N[2] || (N[2] = (K) => f.value = !1)
          }, [
            e("div", ia, [
              w(Ke, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: d(() => [...N[9] || (N[9] = [
                  y(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              w(Ps, { name: "fade" }, {
                default: d(() => [
                  f.value ? (s(), E(ee, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: g
                  }, {
                    default: d(() => [...N[10] || (N[10] = [
                      y(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : m("", !0)
                ]),
                _: 1
              })
            ]),
            w(go, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Tt({
              left: d(() => [
                t.status.workflows.new.length ? (s(), E(tt, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : m("", !0),
                t.status.workflows.modified.length ? (s(), E(tt, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : m("", !0),
                t.status.workflows.deleted.length ? (s(), E(tt, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : m("", !0),
                w(tt, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: z.value
                }, null, 8, ["count", "separator"])
              ]),
              right: d(() => [
                t.status.git_changes.nodes_added.length ? (s(), E(tt, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : m("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), E(tt, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : m("", !0),
                t.status.git_changes.workflow_changes ? (s(), E(tt, {
                  key: 2,
                  icon: "●",
                  count: B.value,
                  label: B.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : m("", !0),
                S.value ? (s(), E(tt, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : m("", !0),
                b.value && !x.value && !S.value ? (s(), E(tt, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : m("", !0),
                b.value ? m("", !0) : (s(), E(tt, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              k.value ? {
                name: "footer",
                fn: d(() => [
                  N[12] || (N[12] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", ra, [
                    e("span", da, a(W.value), 1),
                    w(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: N[0] || (N[0] = (K) => U.$emit("commit-changes"))
                    }, {
                      default: d(() => [...N[11] || (N[11] = [
                        y(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          t.status.is_detached_head ? (s(), E(pt, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: d(() => [
              w(ee, {
                variant: "primary",
                size: "sm",
                onClick: N[3] || (N[3] = (K) => U.$emit("create-branch"))
              }, {
                default: d(() => [...N[13] || (N[13] = [
                  y(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : m("", !0),
          e("div", ca, [
            w(Ke, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: d(() => [...N[14] || (N[14] = [
                y(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            te.value ? (s(), o(F, { key: 0 }, [
              I.value.length > 0 ? (s(), E(pt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${I.value.length} workflow${I.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: I.value.map((K) => `${K.name} — ${K.issue_summary}`)
              }, {
                actions: d(() => [
                  w(ee, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[4] || (N[4] = (K) => U.$emit("view-workflows"))
                  }, {
                    default: d(() => [...N[15] || (N[15] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : m("", !0),
              V.value.length > 0 ? (s(), E(pt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${V.value.length} workflow${V.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: V.value.map((K) => `${K.name} — ${K.models_needing_path_sync_count} model path${K.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: d(() => [
                  w(ee, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[5] || (N[5] = (K) => U.$emit("view-workflows"))
                  }, {
                    default: d(() => [...N[16] || (N[16] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : m("", !0),
              t.status.missing_models_count > 0 && !H.value ? (s(), E(pt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: d(() => [
                  w(ee, {
                    variant: "primary",
                    size: "sm",
                    disabled: p.value,
                    onClick: M
                  }, {
                    default: d(() => [
                      y(a(p.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  w(ee, {
                    variant: "secondary",
                    size: "sm",
                    onClick: N[6] || (N[6] = (K) => U.$emit("view-workflows"))
                  }, {
                    default: d(() => [...N[17] || (N[17] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : m("", !0),
              t.status.comparison.is_synced ? m("", !0) : (s(), E(pt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: T.value,
                items: R.value
              }, {
                actions: d(() => [
                  w(ee, {
                    variant: "secondary",
                    size: "sm",
                    onClick: g
                  }, {
                    default: d(() => [...N[18] || (N[18] = [
                      y(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  w(ee, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[7] || (N[7] = (K) => U.$emit("view-nodes"))
                  }, {
                    default: d(() => [...N[19] || (N[19] = [
                      y(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"]))
            ], 64)) : k.value ? (s(), o("span", ua, "No issues")) : (s(), E(Je, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      w(la, {
        show: h.value,
        status: t.status,
        onClose: N[8] || (N[8] = (K) => h.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: l
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), va = /* @__PURE__ */ Q(ma, [["__scopeId", "data-v-5f863725"]]), fa = ["type", "value", "placeholder", "disabled"], ga = /* @__PURE__ */ Y({
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
  setup(t, { expose: r, emit: n }) {
    const i = t, h = n, f = $(null);
    function g(u) {
      const l = u.target.value;
      h("update:modelValue", l);
    }
    return Ee(() => {
      i.autoFocus && f.value && f.value.focus();
    }), r({
      focus: () => {
        var u;
        return (u = f.value) == null ? void 0 : u.focus();
      },
      blur: () => {
        var u;
        return (u = f.value) == null ? void 0 : u.blur();
      }
    }), (u, l) => (s(), o("input", {
      ref_key: "inputRef",
      ref: f,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: ne(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: g,
      onKeyup: [
        l[0] || (l[0] = ut((v) => u.$emit("enter"), ["enter"])),
        l[1] || (l[1] = ut((v) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: l[2] || (l[2] = (v) => u.$emit("focus")),
      onBlur: l[3] || (l[3] = (v) => u.$emit("blur"))
    }, null, 42, fa));
  }
}), At = /* @__PURE__ */ Q(ga, [["__scopeId", "data-v-0380d08f"]]), ha = { class: "branch-create-form" }, pa = { class: "form-actions" }, ya = /* @__PURE__ */ Y({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: r }) {
    const n = r, i = $(""), h = D(() => {
      const u = i.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function f() {
      h.value && (n("create", i.value.trim()), i.value = "");
    }
    function g() {
      i.value = "", n("cancel");
    }
    return (u, l) => (s(), o("div", ha, [
      w(At, {
        modelValue: i.value,
        "onUpdate:modelValue": l[0] || (l[0] = (v) => i.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: f,
        onEscape: g
      }, null, 8, ["modelValue"]),
      e("div", pa, [
        w(ee, {
          variant: "primary",
          size: "sm",
          disabled: !h.value,
          onClick: f
        }, {
          default: d(() => [...l[1] || (l[1] = [
            y(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        w(ee, {
          variant: "secondary",
          size: "sm",
          onClick: g
        }, {
          default: d(() => [...l[2] || (l[2] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), wa = /* @__PURE__ */ Q(ya, [["__scopeId", "data-v-7c500394"]]), ka = { class: "branch-list-item__indicator" }, ba = { class: "branch-list-item__name" }, _a = {
  key: 0,
  class: "branch-list-item__actions"
}, $a = {
  key: 0,
  class: "branch-list-item__current-label"
}, Ca = /* @__PURE__ */ Y({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (r, n) => (s(), o("div", {
      class: ne(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && r.$emit("click"))
    }, [
      e("span", ka, a(t.isCurrent ? "●" : "○"), 1),
      e("span", ba, a(t.branchName), 1),
      r.$slots.actions || t.showCurrentLabel ? (s(), o("div", _a, [
        pe(r.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", $a, " current ")) : m("", !0)
      ])) : m("", !0)
    ], 2));
  }
}), xa = /* @__PURE__ */ Q(Ca, [["__scopeId", "data-v-c6581a24"]]), Sa = {
  key: 2,
  class: "branch-list"
}, Ia = /* @__PURE__ */ Y({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: r }) {
    const n = r, i = $(!1);
    function h(g) {
      n("create", g), f();
    }
    function f() {
      i.value = !1;
    }
    return (g, u) => (s(), E(Be, null, {
      header: d(() => [
        w(Oe, { title: "BRANCHES" }, {
          actions: d(() => [
            i.value ? m("", !0) : (s(), E(ee, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: u[0] || (u[0] = (l) => i.value = !0)
            }, {
              default: d(() => [...u[1] || (u[1] = [
                y(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: d(() => [
        i.value ? (s(), E(wa, {
          key: 0,
          onCreate: h,
          onCancel: f
        })) : m("", !0),
        t.branches.length === 0 ? (s(), E(Je, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", Sa, [
          (s(!0), o(F, null, J(t.branches, (l) => (s(), E(xa, {
            key: l.name,
            "branch-name": l.name,
            "is-current": l.is_current
          }, {
            actions: d(() => [
              l.is_current ? m("", !0) : (s(), E(ee, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (v) => g.$emit("delete", l.name)
              }, {
                default: d(() => [...u[2] || (u[2] = [
                  y(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              l.is_current ? m("", !0) : (s(), E(ee, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (v) => g.$emit("switch", l.name)
              }, {
                default: d(() => [...u[3] || (u[3] = [
                  y(" Switch ", -1)
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
}), Ea = /* @__PURE__ */ Q(Ia, [["__scopeId", "data-v-86784ddd"]]), Ma = { class: "commit-list" }, Ra = /* @__PURE__ */ Y({
  __name: "CommitList",
  setup(t) {
    return (r, n) => (s(), o("div", Ma, [
      pe(r.$slots, "default", {}, void 0, !0)
    ]));
  }
}), za = /* @__PURE__ */ Q(Ra, [["__scopeId", "data-v-8c5ee761"]]), La = { class: "commit-hash" }, Ta = /* @__PURE__ */ Y({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const r = t, n = D(() => r.hash.slice(0, r.length));
    return (i, h) => (s(), o("span", La, a(n.value), 1));
  }
}), gs = /* @__PURE__ */ Q(Ta, [["__scopeId", "data-v-7c333cc6"]]), Da = { class: "commit-message" }, Na = { class: "commit-date" }, Pa = /* @__PURE__ */ Y({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const n = t, i = r;
    function h() {
      n.clickable && i("click");
    }
    return (f, g) => (s(), o("div", {
      class: ne(["commit-item", { clickable: t.clickable }]),
      onClick: h
    }, [
      w(gs, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Da, a(t.message), 1),
      e("span", Na, a(t.relativeDate), 1),
      f.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: g[0] || (g[0] = $e(() => {
        }, ["stop"]))
      }, [
        pe(f.$slots, "actions", {}, void 0, !0)
      ])) : m("", !0)
    ], 2));
  }
}), Ua = /* @__PURE__ */ Q(Pa, [["__scopeId", "data-v-dd7c621b"]]), Ba = /* @__PURE__ */ Y({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (r, n) => (s(), E(Be, null, {
      header: d(() => [
        w(Oe, { title: "HISTORY" })
      ]),
      content: d(() => [
        t.commits.length === 0 ? (s(), E(Je, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), E(za, { key: 1 }, {
          default: d(() => [
            (s(!0), o(F, null, J(t.commits, (i) => (s(), E(Ua, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (h) => r.$emit("select", i)
            }, {
              actions: d(() => [
                w(ee, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (h) => r.$emit("checkout", i),
                  title: "Checkout this commit"
                }, {
                  default: d(() => [...n[0] || (n[0] = [
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
}), Oa = /* @__PURE__ */ Q(Ba, [["__scopeId", "data-v-981c3c64"]]), ls = /* @__PURE__ */ new Set(), is = [
  // BROKEN workflows (3) - Missing dependencies
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
  ...Array(12).fill(null).map((t, r) => ({
    name: `synced-workflow-${r + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + r,
    model_count: 1 + r % 3,
    sync_state: "synced"
  }))
], Aa = {
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
  }
}, hs = [
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
], Fa = [
  ...hs,
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
], Pt = [
  {
    name: "ComfyUI-Manager",
    installed: !0,
    registry_id: "comfyui-manager",
    repository: "https://github.com/ltdrdata/ComfyUI-Manager",
    version: "2.8.5",
    source: "registry",
    download_url: null,
    description: "ComfyUI extension for managing custom nodes",
    used_in_workflows: ["flux-dev-img2img.json", "sdxl-lightning.json", "flux-schnell.json"]
  },
  {
    name: "comfyui_flux",
    installed: !0,
    registry_id: "comfyui_flux",
    repository: "https://github.com/black-forest-labs/flux",
    version: "1.2.0",
    source: "registry",
    download_url: null,
    description: "FLUX.1 model support for ComfyUI",
    used_in_workflows: ["flux-dev-img2img.json", "flux-schnell.json"]
  },
  {
    name: "comfyui-controlnet-aux",
    installed: !0,
    registry_id: "comfyui-controlnet-aux",
    repository: "https://github.com/Fannovel16/comfyui_controlnet_aux",
    version: "1.0.3",
    source: "registry",
    download_url: null,
    description: "ControlNet auxiliary preprocessors",
    used_in_workflows: ["controlnet-pose.json"]
  },
  {
    name: "rgthree-comfy",
    installed: !1,
    registry_id: "rgthree-comfy",
    repository: "https://github.com/rgthree/rgthree-comfy",
    version: null,
    source: "registry",
    download_url: "https://github.com/rgthree/rgthree-comfy/archive/refs/heads/main.zip",
    description: "Power user nodes for ComfyUI workflows",
    used_in_workflows: ["flux-dev-img2img.json"]
  },
  {
    name: "comfyui-image-saver",
    installed: !1,
    registry_id: "comfyui-image-saver",
    repository: "https://github.com/girish946/ComfyUI-Image-Saver",
    version: null,
    source: "registry",
    download_url: "https://github.com/girish946/ComfyUI-Image-Saver/archive/refs/heads/main.zip",
    description: "Advanced image saving options",
    used_in_workflows: ["flux-dev-img2img.json"]
  },
  {
    name: "comfyui-impact-pack",
    installed: !0,
    registry_id: "comfyui-impact-pack",
    repository: "https://github.com/ltdrdata/ComfyUI-Impact-Pack",
    version: "4.12.1",
    source: "registry",
    download_url: null,
    description: "Custom nodes for ComfyUI impact pack",
    used_in_workflows: ["sd15-upscale.json"]
  },
  {
    name: "ComfyUI-KJNodes",
    installed: !0,
    registry_id: "comfyui-kjnodes",
    repository: "https://github.com/kijai/ComfyUI-KJNodes",
    version: "1.1.2",
    source: "registry",
    download_url: null,
    description: "KJ utility nodes collection",
    used_in_workflows: []
  },
  {
    name: "custom-dev-nodes",
    installed: !0,
    registry_id: void 0,
    repository: void 0,
    version: "0.1.0-dev",
    source: "development",
    download_url: null,
    description: "Local development nodes",
    used_in_workflows: []
  },
  {
    name: "comfyui-easy-use",
    installed: !1,
    registry_id: "comfyui-easy-use",
    repository: "https://github.com/yolain/ComfyUI-Easy-Use",
    version: null,
    source: "registry",
    download_url: "https://github.com/yolain/ComfyUI-Easy-Use/archive/refs/heads/main.zip",
    description: "Simplified workflow nodes",
    used_in_workflows: ["sd15-upscale.json"]
  }
], Va = [
  {
    hash: "e719c9c",
    message: "refactor: Improve UI consistency and fix display issues",
    author: "Alex Katz",
    date: "2024-01-15T10:30:00Z",
    date_relative: "5 days ago"
  },
  {
    hash: "781a023",
    message: "refactor: Remove multi-theme system, commit to Phosphor Terminal aesthetic",
    author: "Alex Katz",
    date: "2024-01-14T15:20:00Z",
    date_relative: "6 days ago"
  },
  {
    hash: "19f7898",
    message: "Merge branch 'design/phosphor' into feature/comfygit-ui",
    author: "Alex Katz",
    date: "2024-01-13T09:15:00Z",
    date_relative: "1 week ago"
  },
  {
    hash: "426fe3c",
    message: "Merge branch 'feature/comfygit-ui' into main",
    author: "Alex Katz",
    date: "2024-01-12T14:45:00Z",
    date_relative: "1 week ago"
  },
  {
    hash: "8c21deb",
    message: "Add initial agpl 3 license",
    author: "Alex Katz",
    date: "2024-01-10T11:00:00Z",
    date_relative: "2 weeks ago"
  }
], Ut = [
  {
    timestamp: "2025-11-23 13:07:40,285",
    name: "comfygit_core.core.environment",
    level: "INFO",
    func: "sync",
    line: "306",
    message: "Restored workflows from .cec/"
  },
  {
    timestamp: "2025-11-23 13:07:40,285",
    name: "comfygit_core.managers.workflow_manager",
    level: "INFO",
    func: "restore_from_cec",
    line: "554",
    message: "Restored workflow 'default' to ComfyUI"
  },
  {
    timestamp: "2025-11-23 13:07:40,286",
    name: "comfygit_core.core.environment",
    level: "DEBUG",
    func: "sync",
    line: "399",
    message: "User content symlinks configured"
  },
  {
    timestamp: "2025-11-23 13:07:42,130",
    name: "comfygit_core.managers.workflow_manager",
    level: "DEBUG",
    func: "resolve_workflow",
    line: "884",
    message: "Resolved node: ResolvedNodePackage(package='comfyui-basic-math', node='FloatInput', match=exact, confidence=1.00, 3 version(s), rank=1)"
  },
  {
    timestamp: "2025-11-23 13:07:42,157",
    name: "comfygit.command",
    level: "INFO",
    func: "log_command",
    line: "180",
    message: "Command 'env status' completed successfully"
  }
], fe = {
  // Environment Management
  getEnvironments: async () => (await ve(300), [
    {
      name: "production",
      is_current: !0,
      path: "~/comfygit/environments/production",
      workflow_count: 18,
      node_count: 45,
      model_count: 3,
      current_branch: "main",
      created_at: "2024-01-01T00:00:00Z",
      last_used: (/* @__PURE__ */ new Date()).toISOString(),
      last_commit: "e719c9c",
      last_commit_date: "2024-01-15T10:30:00Z"
    },
    {
      name: "testing",
      is_current: !1,
      path: "~/comfygit/environments/testing",
      workflow_count: 12,
      node_count: 32,
      model_count: 2,
      current_branch: "develop",
      created_at: "2024-01-05T00:00:00Z",
      last_used: new Date(Date.now() - 864e5 * 2).toISOString(),
      // 2 days ago
      last_commit: "426fe3c",
      last_commit_date: "2024-01-12T14:45:00Z"
    },
    {
      name: "experimental",
      is_current: !1,
      path: "~/comfygit/environments/experimental",
      workflow_count: 5,
      node_count: 18,
      model_count: 1,
      current_branch: "feature/new-nodes",
      created_at: "2024-01-10T00:00:00Z",
      last_used: new Date(Date.now() - 864e5).toISOString(),
      // 1 day ago
      last_commit: "781a023",
      last_commit_date: "2024-01-14T15:20:00Z"
    }
  ]),
  switchEnvironment: async (t) => {
    await ve(500), console.log(`[MOCK] Switching to environment: ${t}`);
  },
  createEnvironment: async (t, r, n) => {
    await ve(1e3), console.log(`[MOCK] Creating environment: ${t} with backend ${r}`, n ? `cloned from ${n}` : "");
  },
  deleteEnvironment: async (t) => {
    await ve(500), console.log(`[MOCK] Deleting environment: ${t}`);
  },
  // Workflow Management
  getWorkflows: async () => (await ve(400), is),
  getWorkflowDetails: async (t) => (await ve(300), Aa[t] || {
    name: t,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (t) => (await ve(800), {
    workflow_name: t,
    // Nodes resolved with confidence scores
    nodes_resolved: [
      {
        node_type: "ComfyUI-Flux",
        match_type: "exact",
        package_id: "comfyui_flux",
        match_confidence: 1,
        is_optional: !1,
        rank: 5,
        // Registry popularity
        versions: ["1.2.0", "1.1.0", "1.0.0"]
      }
    ],
    // Nodes that need installation
    nodes_unresolved: [
      {
        node_type: "RgthreeNodeSet",
        possible_matches: [
          {
            package_id: "rgthree-comfy",
            match_type: "fuzzy",
            match_confidence: 0.85,
            rank: 12
          }
        ]
      },
      {
        node_type: "ImageSaver",
        possible_matches: [
          {
            package_id: "comfyui-image-saver",
            match_type: "type_only",
            match_confidence: 0.7,
            rank: 45
          }
        ]
      }
    ],
    nodes_ambiguous: [],
    // Multiple equally-matched candidates
    // Models resolved
    models_resolved: [
      {
        workflow: t,
        filename: "flux1-dev-fp8.safetensors",
        resolved_model: {
          hash: "a11e2e7b",
          sha256_hash: "a11e2e7b89c4d5e6f7890abcdef12345678901234567890abcdef1234567890ab"
        },
        match_type: "exact",
        match_confidence: 1,
        is_optional: !1,
        needs_path_sync: !1
      },
      {
        workflow: t,
        filename: "clip_l.safetensors",
        resolved_model: {
          hash: "3e9f12a7",
          sha256_hash: "3e9f12a7c8d9e0f1234567890abcdef1234567890abcdef1234567890abcdef1"
        },
        match_type: "exact",
        match_confidence: 1,
        is_optional: !1,
        needs_path_sync: !1
      }
    ],
    // Models that need downloading
    models_unresolved: [
      {
        workflow: t,
        filename: "flux_vae.safetensors",
        node_type: "VAELoader",
        node_id: "10",
        expected_category: "vae"
      }
    ],
    models_ambiguous: [],
    // Multiple models match same name
    // Download intents (models queued for download)
    download_results: [
      {
        model: "flux_vae.safetensors",
        status: "pending",
        source_url: null,
        // No source configured
        can_download: !1,
        estimated_size_mb: 335
      }
    ],
    // Summary fields
    has_issues: !0,
    // Has unresolved nodes and models
    has_download_intents: !0,
    summary: "Missing: 2 nodes, 1 model",
    // Installation plan preview
    nodes_to_install: ["rgthree-comfy", "comfyui-image-saver"],
    models_to_download: ["flux_vae.safetensors"],
    estimated_size_mb: 335,
    estimated_time_seconds: 120
  }),
  installWorkflowDeps: async (t, r, n) => {
    await ve(2e3), console.log(`[MOCK] Installing deps for ${t}: nodes=${r}, models=${n}`);
  },
  setModelImportance: async (t, r, n) => {
    await ve(200), console.log(`[MOCK] Setting ${r} importance to ${n} in ${t}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await ve(350), hs),
  getWorkspaceModels: async () => (await ve(400), Fa),
  getModelDetails: async (t) => (await ve(200), {
    filename: t,
    hash: "762871a9ab79bfa2",
    blake3: null,
    sha256: null,
    size: 173e8,
    category: "checkpoints",
    relative_path: `checkpoints/${t}`,
    last_seen: "2025-11-11 23:34:23",
    locations: [
      { path: `/workspace/models/checkpoints/${t}`, modified: "2024-08-03 13:16:22" }
    ],
    sources: []
  }),
  updateModelSource: async (t, r) => {
    await ve(300), ls.add(t), console.log(`[MOCK] Added source for ${t}: ${r}`);
  },
  deleteModel: async (t) => {
    await ve(500), console.log(`[MOCK] Deleting model: ${t}`);
  },
  downloadModel: async (t) => {
    await ve(3e3), console.log("[MOCK] Downloading model:", t);
  },
  // Node Management
  getNodes: async () => {
    await ve(350);
    const t = Pt.filter((n) => n.installed), r = Pt.filter((n) => !n.installed);
    return {
      nodes: Pt,
      total_count: Pt.length,
      installed_count: t.length,
      missing_count: r.length
    };
  },
  installNode: async (t) => {
    await ve(2500), console.log(`[MOCK] Installing node: ${t}`);
  },
  updateNode: async (t) => {
    await ve(2e3), console.log(`[MOCK] Updating node: ${t}`);
  },
  uninstallNode: async (t) => {
    await ve(1e3), console.log(`[MOCK] Uninstalling node: ${t}`);
  },
  // Settings & Debug
  getConfig: async () => (await ve(200), {
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0
  }),
  updateConfig: async (t) => {
    await ve(300), console.log("[MOCK] Updating config:", t);
  },
  getEnvironmentLogs: async (t, r) => (await ve(250), (t ? Ut.filter((i) => i.level === t) : Ut).slice(0, r || 100)),
  getWorkspaceLogs: async (t, r) => {
    await ve(300);
    const n = [...Ut, ...Ut.map((h) => ({
      ...h,
      name: "comfygit.workspace"
    }))];
    return (t ? n.filter((h) => h.level === t) : n).slice(0, r || 100);
  },
  // Existing endpoints (from original implementation)
  /**
   * Get Environment Status - Matching ComfyGitStatus type
   * See frontend/src/types/comfygit.ts lines 22-32
   *
   * To test detached HEAD warning:
   * - Set branch: null
   * - Set is_detached_head: true
   */
  getStatus: async () => (await ve(400), {
    environment: "production",
    branch: "main",
    // Set to null to test detached HEAD
    is_detached_head: !1,
    // Set to true to test detached HEAD warning
    is_synced: !1,
    has_changes: !1,
    workflows: {
      new: ["img2img-basic.json", "controlnet-pose.json"],
      modified: ["flux-schnell.json"],
      deleted: [],
      synced: is.filter((t) => t.status === "synced").map((t) => t.name),
      total: 18,
      analyzed: [
        {
          name: "img2img-basic.json",
          sync_state: "new",
          status: "new",
          has_issues: !1,
          uninstalled_nodes: 0,
          unresolved_nodes_count: 0,
          unresolved_models_count: 0,
          ambiguous_models_count: 0,
          ambiguous_nodes_count: 0,
          issue_summary: "No issues",
          node_count: 8,
          model_count: 2
        },
        {
          name: "controlnet-pose.json",
          sync_state: "new",
          status: "broken",
          has_issues: !0,
          uninstalled_nodes: 1,
          unresolved_nodes_count: 1,
          unresolved_models_count: 0,
          ambiguous_models_count: 0,
          ambiguous_nodes_count: 0,
          issue_summary: "1 unresolved node",
          node_count: 12,
          model_count: 3
        },
        {
          name: "flux-schnell.json",
          sync_state: "modified",
          status: "modified",
          has_issues: !1,
          uninstalled_nodes: 0,
          unresolved_nodes_count: 0,
          unresolved_models_count: 0,
          ambiguous_models_count: 0,
          ambiguous_nodes_count: 0,
          issue_summary: "No issues",
          node_count: 15,
          model_count: 4
        },
        {
          name: "sdxl-lightning.json",
          sync_state: "synced",
          status: "broken",
          has_issues: !0,
          uninstalled_nodes: 0,
          unresolved_nodes_count: 2,
          unresolved_models_count: 1,
          ambiguous_models_count: 0,
          ambiguous_nodes_count: 0,
          issue_summary: "2 unresolved nodes, 1 missing model",
          node_count: 20,
          model_count: 5
        },
        {
          name: "flux-dev-img2img.json",
          sync_state: "synced",
          status: "synced",
          has_issues: !1,
          uninstalled_nodes: 0,
          unresolved_nodes_count: 0,
          unresolved_models_count: 0,
          ambiguous_models_count: 0,
          ambiguous_nodes_count: 0,
          issue_summary: "No issues",
          node_count: 18,
          model_count: 3
        }
      ]
    },
    git_changes: {
      nodes_added: [],
      nodes_removed: [],
      workflow_changes: !1,
      has_other_changes: !1
    },
    comparison: {
      is_synced: !1,
      missing_nodes: ["rgthree-comfy", "comfyui-image-saver"],
      extra_nodes: []
    },
    missing_models_count: 1
  }),
  getCommitHistory: async (t = 10) => (await ve(300), Va.slice(0, t)),
  getBranches: async () => (await ve(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  }),
  deleteBranch: async (t) => {
    await ve(300), console.log(`[MOCK] Deleting branch: ${t}`);
  },
  // Git Remotes Management
  getRemotes: async () => (await ve(300), {
    remotes: [
      {
        name: "origin",
        fetch_url: "https://github.com/comfyhub/comfygit-demo.git",
        push_url: "https://github.com/comfyhub/comfygit-demo.git",
        is_default: !0
      },
      {
        name: "upstream",
        fetch_url: "https://github.com/comfyhub/comfygit.git",
        push_url: "https://github.com/comfyhub/comfygit.git",
        is_default: !1
      }
    ],
    current_branch_tracking: {
      remote: "origin",
      branch: "main"
    }
  }),
  addRemote: async (t, r) => {
    await ve(400), console.log(`[MOCK] Adding remote: ${t} -> ${r}`);
  },
  removeRemote: async (t) => {
    await ve(350), console.log(`[MOCK] Removing remote: ${t}`);
  },
  updateRemoteUrl: async (t, r, n) => {
    await ve(400), console.log(`[MOCK] Updating remote ${t}: ${r}${n ? ` (push: ${n})` : ""}`);
  },
  fetchRemote: async (t) => {
    await ve(1500), console.log(`[MOCK] Fetching from remote: ${t}`);
  },
  getRemoteSyncStatus: async (t) => (await ve(300), {
    remote: t,
    branch: "main",
    ahead: 2,
    behind: 1,
    last_fetch: new Date(Date.now() - 36e5).toISOString()
  }),
  /**
   * Get Pull Preview - Returns preview with optional workflow conflicts (V2)
   * GET /v2/comfygit/remotes/{name}/pull-preview
   *
   * Test scenarios by remote name:
   * - "origin" - Returns preview WITH workflow conflicts (default for testing)
   * - "upstream" - Returns preview WITHOUT conflicts (clean pull)
   * - Any other - Returns preview with workflow conflicts
   */
  getPullPreview: async (t) => {
    await ve(500);
    const r = {
      remote: t,
      branch: "main",
      commits_behind: 3,
      commits: [
        { hash: "abc1234", short_hash: "abc1234", message: "Add new workflow features", date: "2024-01-15T10:30:00Z", date_relative: "2 hours ago" },
        { hash: "def5678", short_hash: "def5678", message: "Update node dependencies", date: "2024-01-15T09:15:00Z", date_relative: "3 hours ago" },
        { hash: "ghi9012", short_hash: "ghi9012", message: "Fix model path handling", date: "2024-01-15T08:00:00Z", date_relative: "4 hours ago" }
      ],
      changes: {
        workflows: {
          added: ["new-workflow.json"],
          modified: ["flux-schnell.json", "sdxl-turbo.json"],
          deleted: []
        },
        nodes: {
          to_install: ["comfyui-animatediff", "comfyui-controlnet-aux"],
          to_remove: []
        },
        models: {
          referenced: ["flux1-dev.safetensors", "sdxl_base.safetensors"],
          count: 2
        }
      },
      has_uncommitted_changes: !1,
      can_pull: !0,
      block_reason: null
    };
    return t !== "upstream" ? {
      ...r,
      has_conflicts: !0,
      workflow_conflicts: [
        {
          name: "flux-schnell",
          conflict_type: "both_modified",
          base_hash: "abc12345",
          target_hash: "def67890"
        },
        {
          name: "sdxl-turbo",
          conflict_type: "both_modified",
          base_hash: "11111111",
          target_hash: "22222222"
        }
      ]
    } : {
      ...r,
      has_conflicts: !1,
      workflow_conflicts: []
    };
  },
  /**
   * Validate Merge - Check node version compatibility after workflow resolutions (V2)
   * POST /v2/comfygit/remotes/{name}/validate-merge
   */
  validateMerge: async (t, r) => {
    await ve(400);
    const n = r.some((f) => f.resolution === "take_base"), i = r.some((f) => f.resolution === "take_target");
    return n && i ? {
      is_compatible: !1,
      node_conflicts: [
        {
          node_id: "rgthree-comfy",
          node_name: "rgthree's ComfyUI Nodes",
          base_version: "2.0.0",
          target_version: "1.5.0",
          chosen_version: "1.5.0",
          chosen_reason: "Required by sdxl-turbo (theirs)",
          affected_workflows: [
            { name: "flux-schnell", source: "base", required_version: "2.0.0" },
            { name: "sdxl-turbo", source: "target", required_version: "1.5.0" }
          ]
        }
      ],
      warnings: []
    } : {
      is_compatible: !0,
      node_conflicts: [],
      warnings: i ? ["Model 'flux-dev.safetensors' has no download source"] : []
    };
  },
  /**
   * Pull from Remote - Execute pull with optional conflict resolutions (V2)
   * POST /v2/comfygit/remotes/{name}/pull
   */
  pullFromRemote: async (t, r) => (await ve(1500), console.log(`[MOCK] Pulling from ${t} with options:`, r), r.resolutions && Math.random() < 0.1 ? {
    status: "error",
    pull_output: "",
    sync_result: { nodes_installed: [], nodes_removed: [], models_queued: 0, errors: [] },
    rolled_back: !0,
    error: "Simulated sync failure - merge rolled back"
  } : {
    status: "success",
    pull_output: "Already up to date.",
    sync_result: {
      nodes_installed: r.resolutions ? ["comfyui-animatediff"] : [],
      nodes_removed: [],
      models_queued: 0,
      errors: []
    },
    rolled_back: !1,
    message: "Pull completed successfully"
  }),
  /**
   * Get Push Preview
   * GET /v2/comfygit/remotes/{name}/push-preview
   */
  getPushPreview: async (t) => (await ve(400), {
    remote: t,
    branch: "main",
    commits_ahead: 2,
    commits: [
      { hash: "xyz1234", short_hash: "xyz1234", message: "Local workflow changes", date: "2024-01-15T11:00:00Z", date_relative: "1 hour ago" },
      { hash: "uvw5678", short_hash: "uvw5678", message: "Add new node configuration", date: "2024-01-15T10:45:00Z", date_relative: "1.5 hours ago" }
    ],
    has_uncommitted_changes: !1,
    remote_has_new_commits: !1,
    can_push: !0,
    needs_force: !1,
    block_reason: null
  }),
  /**
   * Push to Remote
   * POST /v2/comfygit/remotes/{name}/push
   */
  pushToRemote: async (t, r) => (await ve(1e3), console.log(`[MOCK] Pushing to ${t} with options:`, r), {
    status: "success",
    push_output: "Everything up-to-date",
    commits_pushed: 2,
    message: "Push completed successfully"
  }),
  // =============================================================================
  // NEW: Interactive Workflow Resolution Endpoints
  // =============================================================================
  /**
   * Analyze Workflow - Returns full resolution analysis
   * POST /v2/comfygit/workflow/{name}/analyze
   *
   * Test scenarios by using different workflow names:
   * - "test-unresolved-nodes.json" - Only unresolved nodes
   * - "test-unresolved-models.json" - Only unresolved models
   * - "test-ambiguous-nodes.json" - Multiple node options to choose from
   * - "test-ambiguous-models.json" - Multiple model options to choose from
   * - "test-mixed-complex.json" - Complex scenario with all types
   * - "test-all-resolved.json" - Everything perfect, no user input needed
   * - Default: Returns a realistic mixed scenario
   */
  analyzeWorkflow: async (t) => (await ve(600), {
    // Scenario 1: Only unresolved nodes (no matching packages found)
    "test-unresolved-nodes.json": {
      workflow: t,
      nodes: {
        resolved: [
          {
            reference: { node_type: "KSampler", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [
          {
            reference: { node_type: "CustomUpscaler", workflow: t, node_id: "node1" },
            reason: "not_found_in_registry"
          },
          {
            reference: { node_type: "MagicNode", workflow: t, node_id: "node2" },
            reason: "not_found_in_registry"
          }
        ],
        ambiguous: []
      },
      models: {
        resolved: [
          {
            reference: { workflow: t, node_id: "4", node_type: "CheckpointLoader", widget_name: "model", widget_value: "flux1-dev.safetensors" },
            model: { filename: "flux1-dev.safetensors", hash: "abc123", size: 11725e6, category: "checkpoints", relative_path: "checkpoints/flux1-dev.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      stats: {
        total_nodes: 3,
        total_models: 1,
        nodes_resolved: 1,
        nodes_unresolved: 2,
        nodes_ambiguous: 0,
        models_resolved: 1,
        models_unresolved: 0,
        models_ambiguous: 0,
        needs_user_input: !0
      }
    },
    // Scenario 2: Only unresolved models (not found in index)
    "test-unresolved-models.json": {
      workflow: t,
      nodes: {
        resolved: [
          {
            reference: { node_type: "LoadCheckpoint", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      models: {
        resolved: [],
        unresolved: [
          {
            reference: {
              workflow: t,
              node_id: "node3",
              node_type: "CheckpointLoader",
              widget_name: "model",
              widget_value: "super_rare_model.safetensors"
            },
            reason: "not_found_in_index"
          },
          {
            reference: {
              workflow: t,
              node_id: "node4",
              node_type: "VAELoader",
              widget_name: "vae",
              widget_value: "custom_vae.safetensors"
            },
            reason: "not_found_in_index"
          }
        ],
        ambiguous: []
      },
      stats: {
        total_nodes: 1,
        total_models: 2,
        nodes_resolved: 1,
        nodes_unresolved: 0,
        nodes_ambiguous: 0,
        models_resolved: 0,
        models_unresolved: 2,
        models_ambiguous: 0,
        needs_user_input: !0
      }
    },
    // Scenario 3: Ambiguous nodes (multiple matching packages)
    "test-ambiguous-nodes.json": {
      workflow: t,
      nodes: {
        resolved: [],
        unresolved: [],
        ambiguous: [
          {
            reference: { node_type: "FluxLoader", workflow: t, node_id: "node1" },
            options: [
              {
                package: { package_id: "comfyui-flux-official", title: "FLUX Official Nodes" },
                match_confidence: 0.95,
                match_type: "fuzzy",
                is_installed: !1
              },
              {
                package: { package_id: "flux-community-nodes", title: "FLUX Community Pack" },
                match_confidence: 0.9,
                match_type: "fuzzy",
                is_installed: !1
              },
              {
                package: { package_id: "advanced-flux-toolkit", title: "Advanced FLUX Toolkit" },
                match_confidence: 0.85,
                match_type: "fuzzy",
                is_installed: !1
              }
            ]
          },
          {
            reference: { node_type: "ImageEnhancer", workflow: t, node_id: "node2" },
            options: [
              {
                package: { package_id: "comfyui-image-enhance", title: "Image Enhancement Suite" },
                match_confidence: 0.88,
                match_type: "fuzzy",
                is_installed: !1
              },
              {
                package: { package_id: "ultimate-image-toolkit", title: "Ultimate Image Toolkit" },
                match_confidence: 0.82,
                match_type: "fuzzy",
                is_installed: !1
              }
            ]
          }
        ]
      },
      models: {
        resolved: [
          {
            reference: { workflow: t, node_id: "5", node_type: "CheckpointLoader", widget_name: "model", widget_value: "sdxl_base.safetensors" },
            model: { filename: "sdxl_base.safetensors", hash: "def456", size: 65e8, category: "checkpoints", relative_path: "checkpoints/sdxl_base.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      stats: {
        total_nodes: 2,
        total_models: 1,
        nodes_resolved: 0,
        nodes_unresolved: 0,
        nodes_ambiguous: 2,
        models_resolved: 1,
        models_unresolved: 0,
        models_ambiguous: 0,
        needs_user_input: !0
      }
    },
    // Scenario 4: Ambiguous models (multiple files match the name)
    "test-ambiguous-models.json": {
      workflow: t,
      nodes: {
        resolved: [
          {
            reference: { node_type: "CheckpointLoader", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      models: {
        resolved: [],
        unresolved: [],
        ambiguous: [
          {
            reference: {
              workflow: t,
              node_id: "node3",
              node_type: "CheckpointLoader",
              widget_name: "model",
              widget_value: "sdxl_model.safetensors"
            },
            options: [
              {
                model: {
                  filename: "sdxl_base_1.0.safetensors",
                  hash: "aaa111",
                  size: 65e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_base_1.0.safetensors"
                },
                match_confidence: 0.95,
                match_type: "fuzzy",
                has_download_source: !0
              },
              {
                model: {
                  filename: "sdxl_refiner_1.0.safetensors",
                  hash: "bbb222",
                  size: 61e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_refiner_1.0.safetensors"
                },
                match_confidence: 0.85,
                match_type: "fuzzy",
                has_download_source: !0
              },
              {
                model: {
                  filename: "sdxl_turbo.safetensors",
                  hash: "ccc333",
                  size: 67e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_turbo.safetensors"
                },
                match_confidence: 0.75,
                match_type: "fuzzy",
                has_download_source: !1
              }
            ]
          }
        ]
      },
      stats: {
        total_nodes: 1,
        total_models: 1,
        nodes_resolved: 1,
        nodes_unresolved: 0,
        nodes_ambiguous: 0,
        models_resolved: 0,
        models_unresolved: 0,
        models_ambiguous: 1,
        needs_user_input: !0
      }
    },
    // Scenario 5: Complex mixed scenario (everything)
    "test-mixed-complex.json": {
      workflow: t,
      nodes: {
        resolved: [
          {
            reference: { node_type: "KSampler", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [
          {
            reference: { node_type: "UltraUpscaler", workflow: t, node_id: "node1" },
            reason: "not_found_in_registry"
          }
        ],
        ambiguous: [
          {
            reference: { node_type: "FluxSampler", workflow: t, node_id: "node2" },
            options: [
              {
                package: { package_id: "flux-samplers-pro", title: "FLUX Samplers Pro" },
                match_confidence: 0.92,
                match_type: "fuzzy",
                is_installed: !1
              },
              {
                package: { package_id: "flux-toolkit", title: "FLUX Toolkit" },
                match_confidence: 0.87,
                match_type: "fuzzy",
                is_installed: !1
              }
            ]
          }
        ]
      },
      models: {
        resolved: [
          {
            reference: { workflow: t, node_id: "4", node_type: "CheckpointLoader", widget_name: "model", widget_value: "flux1-dev.safetensors" },
            model: { filename: "flux1-dev.safetensors", hash: "abc123", size: 11725e6, category: "checkpoints", relative_path: "checkpoints/flux1-dev.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          }
        ],
        unresolved: [
          {
            reference: {
              workflow: t,
              node_id: "node5",
              node_type: "VAELoader",
              widget_name: "vae",
              widget_value: "flux_vae.safetensors"
            },
            reason: "not_found_in_index"
          }
        ],
        ambiguous: [
          {
            reference: {
              workflow: t,
              node_id: "node6",
              node_type: "CheckpointLoader",
              widget_name: "model",
              widget_value: "sdxl.safetensors"
            },
            options: [
              {
                model: {
                  filename: "sdxl_base_1.0.safetensors",
                  hash: "ddd444",
                  size: 65e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_base_1.0.safetensors"
                },
                match_confidence: 0.9,
                match_type: "fuzzy",
                has_download_source: !0
              },
              {
                model: {
                  filename: "sdxl_refiner_1.0.safetensors",
                  hash: "eee555",
                  size: 61e8,
                  category: "checkpoints",
                  relative_path: "checkpoints/sdxl_refiner_1.0.safetensors"
                },
                match_confidence: 0.8,
                match_type: "fuzzy",
                has_download_source: !0
              }
            ]
          }
        ]
      },
      stats: {
        total_nodes: 3,
        total_models: 3,
        nodes_resolved: 1,
        nodes_unresolved: 1,
        nodes_ambiguous: 1,
        models_resolved: 1,
        models_unresolved: 1,
        models_ambiguous: 1,
        needs_user_input: !0
      }
    },
    // Scenario 6: All resolved (perfect workflow, no user input needed)
    "test-all-resolved.json": {
      workflow: t,
      nodes: {
        resolved: [
          {
            reference: { node_type: "KSampler", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          },
          {
            reference: { node_type: "CLIPTextEncode", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          },
          {
            reference: { node_type: "VAEDecode", workflow: t },
            package: { package_id: "comfyui-core", title: "ComfyUI Core" },
            match_confidence: 1,
            match_type: "builtin",
            is_installed: !0
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      models: {
        resolved: [
          {
            reference: { workflow: t, node_id: "1", node_type: "CheckpointLoader", widget_name: "model", widget_value: "sdxl_base.safetensors" },
            model: { filename: "sdxl_base.safetensors", hash: "fff666", size: 65e8, category: "checkpoints", relative_path: "checkpoints/sdxl_base.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          },
          {
            reference: { workflow: t, node_id: "2", node_type: "VAELoader", widget_name: "vae", widget_value: "sdxl_vae.safetensors" },
            model: { filename: "sdxl_vae.safetensors", hash: "ggg777", size: 335e6, category: "vae", relative_path: "vae/sdxl_vae.safetensors" },
            match_confidence: 1,
            match_type: "exact"
          }
        ],
        unresolved: [],
        ambiguous: []
      },
      stats: {
        total_nodes: 3,
        total_models: 2,
        nodes_resolved: 3,
        nodes_unresolved: 0,
        nodes_ambiguous: 0,
        models_resolved: 2,
        models_unresolved: 0,
        models_ambiguous: 0,
        needs_user_input: !1
      }
    }
  }[t] || {
    workflow: t,
    nodes: {
      resolved: [
        {
          reference: { node_type: "KSampler", workflow: t },
          package: { package_id: "comfyui-core", title: "ComfyUI Core" },
          match_confidence: 1,
          match_type: "builtin",
          is_installed: !0
        }
      ],
      unresolved: [
        {
          reference: { node_type: "CustomNode1", workflow: t, node_id: "node1" },
          reason: "not_found_in_registry"
        }
      ],
      ambiguous: [
        {
          reference: { node_type: "FluxNode", workflow: t, node_id: "node2" },
          options: [
            {
              package: { package_id: "flux-package-a", title: "FLUX Package A" },
              match_confidence: 0.92,
              match_type: "fuzzy",
              is_installed: !1
            },
            {
              package: { package_id: "flux-package-b", title: "FLUX Package B" },
              match_confidence: 0.85,
              match_type: "fuzzy",
              is_installed: !1
            }
          ]
        }
      ]
    },
    models: {
      resolved: [],
      unresolved: [
        {
          reference: {
            workflow: t,
            node_id: "node3",
            node_type: "CheckpointLoader",
            widget_name: "model",
            widget_value: "test_model.safetensors"
          },
          reason: "not_found_in_index"
        }
      ],
      ambiguous: []
    },
    stats: {
      total_nodes: 3,
      total_models: 1,
      nodes_resolved: 1,
      nodes_unresolved: 1,
      nodes_ambiguous: 1,
      models_resolved: 0,
      models_unresolved: 1,
      models_ambiguous: 0,
      needs_user_input: !0
    }
  }),
  /**
   * Apply Resolution - Apply user choices and return installation plan
   * POST /v2/comfygit/workflow/{name}/apply-resolution
   */
  applyResolution: async (t, r, n) => {
    await ve(800);
    const i = [], h = [];
    return r.forEach((f, g) => {
      f.action === "install" && f.package_id && i.push(f.package_id);
    }), n.forEach((f, g) => {
      f.action === "download" && f.url ? h.push({
        filename: g,
        url: f.url,
        size: 65e8,
        target_path: f.target_path || `models/${g}`
      }) : f.action === "select" && f.selected_model && console.log(`[MOCK] Selected existing model: ${f.selected_model.filename}`);
    }), {
      status: "success",
      nodes_to_install: i,
      models_to_download: h,
      estimated_time_seconds: i.length * 30 + h.length * 120
    };
  },
  /**
   * Search Nodes - Search registry for node packages
   * POST /v2/comfygit/workflow/search-nodes
   */
  searchNodes: async (t, r = 10) => {
    await ve(400);
    const n = [
      {
        package_id: "comfyui-flux-official",
        match_confidence: 0.95,
        match_type: "fuzzy",
        description: "Official FLUX model support for ComfyUI with optimized samplers",
        repository: "https://github.com/black-forest-labs/flux-comfy",
        is_installed: !1
      },
      {
        package_id: "flux-advanced-toolkit",
        match_confidence: 0.88,
        match_type: "fuzzy",
        description: "Advanced FLUX tools including custom schedulers and samplers",
        repository: "https://github.com/community/flux-toolkit",
        is_installed: !1
      },
      {
        package_id: "comfyui-upscaler-pack",
        match_confidence: 0.82,
        match_type: "fuzzy",
        description: "Collection of upscaling nodes with various models",
        repository: "https://github.com/upscaler/comfyui-pack",
        is_installed: !1
      },
      {
        package_id: "ultimate-image-tools",
        match_confidence: 0.75,
        match_type: "partial",
        description: "Ultimate image processing toolkit for ComfyUI",
        repository: "https://github.com/tools/ultimate-image",
        is_installed: !0
      },
      {
        package_id: "comfyui-controlnet-aux",
        match_confidence: 0.7,
        match_type: "partial",
        description: "Auxiliary ControlNet preprocessors",
        repository: "https://github.com/fannovel16/controlnet-aux",
        is_installed: !0
      }
    ];
    return {
      results: n.slice(0, r),
      total: n.length
    };
  },
  /**
   * Search Models - Search workspace models
   * POST /v2/comfygit/workflow/search-models
   */
  searchModels: async (t, r = 10) => {
    await ve(400);
    const n = [
      {
        filename: "flux1-dev-fp8.safetensors",
        hash: "abc123def456",
        size: 11725e6,
        category: "checkpoints",
        has_download_source: !0,
        relative_path: "checkpoints/flux1-dev-fp8.safetensors",
        match_confidence: 0.95
      },
      {
        filename: "sdxl_base_1.0.safetensors",
        hash: "def456abc789",
        size: 65e8,
        category: "checkpoints",
        has_download_source: !0,
        relative_path: "checkpoints/sdxl_base_1.0.safetensors",
        match_confidence: 0.9
      },
      {
        filename: "sdxl_refiner_1.0.safetensors",
        hash: "ghi789jkl012",
        size: 61e8,
        category: "checkpoints",
        has_download_source: !0,
        relative_path: "checkpoints/sdxl_refiner_1.0.safetensors",
        match_confidence: 0.85
      },
      {
        filename: "flux_vae.safetensors",
        hash: "mno345pqr678",
        size: 335e6,
        category: "vae",
        has_download_source: !1,
        relative_path: "vae/flux_vae.safetensors",
        match_confidence: 0.8
      },
      {
        filename: "controlnet_openpose.safetensors",
        hash: "stu901vwx234",
        size: 145e7,
        category: "controlnet",
        has_download_source: !0,
        relative_path: "controlnet/controlnet_openpose.safetensors",
        match_confidence: 0.75
      }
    ];
    return {
      results: n.slice(0, r),
      total: n.length
    };
  },
  // Export Validation - shows warnings for models without sources
  validateExport: async () => {
    await ve(400);
    const r = [
      {
        filename: "sd_xl_base_1.0.safetensors",
        hash: "abc123def456",
        workflows: ["flux-dev-img2img.json", "sdxl-lightning.json"]
      },
      {
        filename: "controlnet_openpose.safetensors",
        hash: "xyz789ghi012",
        workflows: ["pose-to-image.json"]
      },
      {
        filename: "custom_lora_v2.safetensors",
        hash: "lmn345opq678",
        workflows: ["flux-dev-img2img.json"]
      },
      {
        filename: "vae_ft_mse.pt",
        hash: "rst901uvw234",
        workflows: ["sdxl-lightning.json", "pose-to-image.json", "upscale-workflow.json"]
      }
    ].filter(
      (n) => !ls.has(n.hash)
    );
    return {
      can_export: !0,
      blocking_issues: [],
      warnings: {
        models_without_sources: r
      }
    };
  },
  // Mock for blocked export (call this variant to test blocked UI)
  validateExportBlocked: async () => (await ve(400), {
    can_export: !1,
    blocking_issues: [
      {
        type: "uncommitted_workflows",
        message: "Cannot export with uncommitted workflow changes",
        details: ["new-workflow.json", "modified-portrait.json", "another-change.json"]
      },
      {
        type: "unresolved_issues",
        message: "Cannot export - workflows have unresolved issues",
        details: []
      }
    ],
    warnings: {
      models_without_sources: []
    }
  }),
  exportEnvWithForce: async (t) => {
    await ve(800);
    const r = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, 19);
    return {
      status: "success",
      path: t || `/home/user/exports/production_export_${r}.tar.gz`,
      models_without_sources: 4
    };
  }
};
function ve(t) {
  return new Promise((r) => setTimeout(r, t));
}
function Ct() {
  return !0;
}
function ze() {
  const t = $(!1), r = $(null);
  async function n(P, j) {
    var Qe;
    if (!((Qe = window.app) != null && Qe.api))
      throw new Error("ComfyUI API not available");
    const de = await window.app.api.fetchApi(P, j);
    if (!de.ok) {
      const it = await de.json().catch(() => ({}));
      throw new Error(it.error || it.message || `Request failed: ${de.status}`);
    }
    return de.json();
  }
  async function i(P = !1) {
    return fe.getStatus();
  }
  async function h(P, j = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: P, allow_issues: j })
    });
  }
  async function f(P = 10, j = 0) {
    {
      const de = await fe.getCommitHistory(P);
      return {
        commits: de,
        total: de.length,
        offset: j
      };
    }
  }
  async function g(P) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: P })
    });
  }
  async function u() {
    return fe.validateExport();
  }
  async function l(P) {
    return fe.exportEnvWithForce(P);
  }
  async function v() {
    return fe.getBranches();
  }
  async function p(P) {
    return n(`/v2/comfygit/commit/${P}`);
  }
  async function c(P, j = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: P, force: j })
    });
  }
  async function M(P, j = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: P, start_point: j })
    });
  }
  async function _(P, j = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: P, force: j })
    });
  }
  async function z(P, j = !1) {
    return await fe.deleteBranch(P), { status: "success" };
  }
  async function b() {
    return fe.getEnvironments();
  }
  async function x(P) {
    return fe.switchEnvironment(P);
  }
  async function k() {
    return null;
  }
  async function B(P) {
    return await fe.createEnvironment(P.name, P.torch_backend || "auto"), { status: "started", task_id: "mock-task-id", message: "Creating environment..." };
  }
  async function S() {
    return { state: "idle", message: "No creation in progress" };
  }
  async function I(P = 20) {
    return [
      { tag_name: "latest", name: "Latest", published_at: (/* @__PURE__ */ new Date()).toISOString() },
      { tag_name: "v0.3.69", name: "v0.3.69", published_at: "2025-01-15T00:00:00Z" },
      { tag_name: "v0.3.68", name: "v0.3.68", published_at: "2025-01-10T00:00:00Z" }
    ];
  }
  async function V(P) {
    return await fe.deleteEnvironment(P), { status: "success" };
  }
  async function H(P = !1) {
    return fe.getWorkflows();
  }
  async function te(P) {
    return fe.getWorkflowDetails(P);
  }
  async function W(P) {
    return fe.resolveWorkflow(P);
  }
  async function T(P, j, de) {
    return await fe.installWorkflowDeps(P, j, de), { status: "success" };
  }
  async function R(P, j, de) {
    return fe.setModelImportance(P, j, de);
  }
  async function U() {
    return fe.getEnvironmentModels();
  }
  async function N() {
    return fe.getWorkspaceModels();
  }
  async function K(P) {
    return fe.getModelDetails(P);
  }
  async function re(P) {
    return console.log(`[MOCK] Opening file location: ${P}`), { status: "success" };
  }
  async function X(P, j) {
    return await fe.updateModelSource(P, j), { status: "success", source_type: "custom" };
  }
  async function se(P, j) {
    return { status: "success" };
  }
  async function O(P) {
    return fe.deleteModel(P);
  }
  async function C(P) {
    return await fe.downloadModel(P), { status: "success" };
  }
  async function ae() {
    return { status: "success", changes: 0 };
  }
  async function oe() {
    return { path: "~/comfygit/models" };
  }
  async function xe(P) {
    return { status: "success", path: P, models_indexed: 10 };
  }
  async function be() {
    return fe.getConfig();
  }
  async function Le(P) {
    return fe.updateConfig(P);
  }
  async function Ae(P, j) {
    return fe.getEnvironmentLogs(P, j);
  }
  async function ce(P, j) {
    return fe.getWorkspaceLogs(P, j);
  }
  async function Fe() {
    return fe.getNodes();
  }
  async function ke(P) {
    return { status: "success", message: `Node '${P}' tracked as development` };
  }
  async function Te(P) {
    return await fe.installNode(P), { status: "success" };
  }
  async function Ge(P) {
    return await fe.updateNode(P), { status: "success" };
  }
  async function et(P) {
    return await fe.uninstallNode(P), { status: "success" };
  }
  async function he() {
    return fe.getRemotes();
  }
  async function je(P, j) {
    return await fe.addRemote(P, j), { status: "success", remote_name: P };
  }
  async function qe(P) {
    return await fe.removeRemote(P), { status: "success", remote_name: P };
  }
  async function He(P, j, de) {
    return await fe.updateRemoteUrl(P, j, de), { status: "success", remote_name: P };
  }
  async function mt(P) {
    return await fe.fetchRemote(P), { status: "success", remote_name: P };
  }
  async function me(P) {
    return fe.getRemoteSyncStatus(P);
  }
  async function De(P = "skip", j = !0) {
    return await new Promise((de) => setTimeout(de, 1500)), {
      status: "success",
      nodes_installed: ["example-node"],
      nodes_removed: [],
      errors: [],
      message: "Sync completed"
    };
  }
  async function vt(P, j) {
    return fe.getPullPreview(P);
  }
  async function lt(P, j = {}) {
    return fe.pullFromRemote(P, j);
  }
  async function Se(P, j) {
    return fe.getPushPreview(P);
  }
  async function ft(P, j = {}) {
    return fe.pushToRemote(P, j);
  }
  async function q(P, j) {
    return fe.validateMerge(P, j);
  }
  async function A(P) {
    const j = {
      success: 0,
      failed: []
    };
    for (const de of P)
      try {
        await W(de), j.success++;
      } catch (Qe) {
        j.failed.push({
          name: de,
          error: Qe instanceof Error ? Qe.message : "Unknown error"
        });
      }
    return j;
  }
  async function Z(P) {
    return await new Promise((j) => setTimeout(j, 500)), {
      comfyui_version: "v0.3.8",
      comfyui_version_type: "release",
      total_models: 3,
      models_locally_available: 1,
      models_needing_download: 1,
      models_without_sources: 1,
      models: [],
      total_nodes: 5,
      registry_nodes: 4,
      dev_nodes: 1,
      git_nodes: 0,
      nodes: [],
      total_workflows: 2,
      workflows: [],
      needs_model_downloads: !0,
      needs_node_installs: !0,
      download_strategy_recommendation: "required"
    };
  }
  async function ge(P) {
    return await new Promise((j) => setTimeout(j, 200)), P === "existing-env" ? { valid: !1, error: "Environment 'existing-env' already exists" } : P.includes("/") || P.includes(" ") ? { valid: !1, error: "Name contains invalid characters" } : { valid: !0, name: P };
  }
  async function Ie(P, j, de, Qe) {
    return await new Promise((it) => setTimeout(it, 300)), { status: "started", message: `Importing environment '${j}'...` };
  }
  async function Ne() {
    return { state: "idle", message: "No import in progress" };
  }
  return {
    isLoading: t,
    error: r,
    getStatus: i,
    commit: h,
    getHistory: f,
    exportEnv: g,
    validateExport: u,
    exportEnvWithForce: l,
    // Git Operations
    getBranches: v,
    getCommitDetail: p,
    checkout: c,
    createBranch: M,
    switchBranch: _,
    deleteBranch: z,
    // Environment Management
    getEnvironments: b,
    switchEnvironment: x,
    getSwitchProgress: k,
    createEnvironment: B,
    getCreateProgress: S,
    getComfyUIReleases: I,
    deleteEnvironment: V,
    // Workflow Management
    getWorkflows: H,
    getWorkflowDetails: te,
    resolveWorkflow: W,
    installWorkflowDeps: T,
    setModelImportance: R,
    // Model Management
    getEnvironmentModels: U,
    getWorkspaceModels: N,
    getModelDetails: K,
    openFileLocation: re,
    addModelSource: X,
    removeModelSource: se,
    deleteModel: O,
    downloadModel: C,
    scanWorkspaceModels: ae,
    getModelsDirectory: oe,
    setModelsDirectory: xe,
    // Settings
    getConfig: be,
    updateConfig: Le,
    // Debug/Logs
    getEnvironmentLogs: Ae,
    getWorkspaceLogs: ce,
    // Node Management
    getNodes: Fe,
    trackNodeAsDev: ke,
    installNode: Te,
    updateNode: Ge,
    uninstallNode: et,
    // Git Remotes
    getRemotes: he,
    addRemote: je,
    removeRemote: qe,
    updateRemoteUrl: He,
    fetchRemote: mt,
    getRemoteSyncStatus: me,
    // Push/Pull
    getPullPreview: vt,
    pullFromRemote: lt,
    getPushPreview: Se,
    pushToRemote: ft,
    validateMerge: q,
    // Environment Sync
    syncEnvironmentManually: De,
    // Workflow Repair
    repairWorkflowModels: A,
    // Import Operations
    previewTarballImport: Z,
    validateEnvironmentName: ge,
    executeImport: Ie,
    getImportProgress: Ne
  };
}
async function xt(t, r = {}, n = 5e3) {
  const i = new AbortController(), h = setTimeout(() => i.abort(), n);
  try {
    const f = await fetch(t, {
      ...r,
      signal: i.signal
    });
    return clearTimeout(h), f;
  } catch (f) {
    throw clearTimeout(h), f.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : f;
  }
}
function ps() {
  const t = $(null);
  async function r() {
    try {
      const g = await xt(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (g.ok)
        return (await g.json()).port;
    } catch {
    }
    return 8189;
  }
  async function n() {
    if (t.value || (t.value = await r()), !t.value)
      return null;
    try {
      const g = await xt(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!g.ok) throw new Error("Health check failed");
      return await g.json();
    } catch {
      return t.value = await r(), null;
    }
  }
  async function i() {
    if (t.value || (t.value = await r()), !t.value)
      return null;
    try {
      const g = await xt(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!g.ok) throw new Error("Failed to get status");
      return await g.json();
    } catch {
      return null;
    }
  }
  async function h() {
    if (t.value || (t.value = await r()), !t.value)
      throw new Error("Control port not available");
    if (!(await xt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function f() {
    if (t.value || (t.value = await r()), !t.value)
      throw new Error("Control port not available");
    if (!(await xt(
      `http://127.0.0.1:${t.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: t,
    discoverControlPort: r,
    checkHealth: n,
    getStatus: i,
    restart: h,
    kill: f
  };
}
const Wa = { class: "base-modal-header" }, Ga = {
  key: 0,
  class: "base-modal-title"
}, ja = { class: "base-modal-body" }, qa = {
  key: 0,
  class: "base-modal-loading"
}, Ha = {
  key: 1,
  class: "base-modal-error"
}, Ka = {
  key: 0,
  class: "base-modal-footer"
}, Ya = /* @__PURE__ */ Y({
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
  setup(t, { emit: r }) {
    const n = t, i = r;
    function h() {
      n.closeOnOverlayClick && i("close");
    }
    function f(g) {
      g.key === "Escape" && i("close");
    }
    return Ee(() => {
      document.addEventListener("keydown", f), document.body.style.overflow = "hidden";
    }), Us(() => {
      document.removeEventListener("keydown", f), document.body.style.overflow = "";
    }), (g, u) => (s(), E(Re, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: h
      }, [
        e("div", {
          class: ne(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: u[1] || (u[1] = $e(() => {
          }, ["stop"]))
        }, [
          e("div", Wa, [
            pe(g.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", Ga, a(t.title), 1)) : m("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: u[0] || (u[0] = (l) => g.$emit("close"))
            }, [...u[2] || (u[2] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : m("", !0)
          ]),
          e("div", ja, [
            t.loading ? (s(), o("div", qa, "Loading...")) : t.error ? (s(), o("div", Ha, a(t.error), 1)) : pe(g.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          g.$slots.footer ? (s(), o("div", Ka, [
            pe(g.$slots, "footer", {}, void 0, !0)
          ])) : m("", !0)
        ], 2)
      ])
    ]));
  }
}), Ye = /* @__PURE__ */ Q(Ya, [["__scopeId", "data-v-2125a0e6"]]), Qa = ["type", "disabled"], Xa = {
  key: 0,
  class: "spinner"
}, Za = /* @__PURE__ */ Y({
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
    return (r, n) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: ne(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => r.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", Xa)) : m("", !0),
      pe(r.$slots, "default", {}, void 0, !0)
    ], 10, Qa));
  }
}), ie = /* @__PURE__ */ Q(Za, [["__scopeId", "data-v-f3452606"]]), Ja = {
  key: 0,
  class: "base-title-count"
}, el = /* @__PURE__ */ Y({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (r, n) => (s(), E(Qt(`h${t.level}`), {
      class: ne(["base-title", t.variant])
    }, {
      default: d(() => [
        pe(r.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Ja, "(" + a(t.count) + ")", 1)) : m("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Rt = /* @__PURE__ */ Q(el, [["__scopeId", "data-v-5a01561d"]]), tl = ["value", "disabled"], sl = {
  key: 0,
  value: "",
  disabled: ""
}, ol = ["value"], nl = {
  key: 0,
  class: "base-select-error"
}, al = /* @__PURE__ */ Y({
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
    function r(i) {
      return typeof i == "string" ? i : i.value;
    }
    function n(i) {
      return typeof i == "string" ? i : i.label;
    }
    return (i, h) => (s(), o("div", {
      class: ne(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: ne(["base-select", { error: !!t.error }]),
        onChange: h[0] || (h[0] = (f) => i.$emit("update:modelValue", f.target.value))
      }, [
        t.placeholder ? (s(), o("option", sl, a(t.placeholder), 1)) : m("", !0),
        (s(!0), o(F, null, J(t.options, (f) => (s(), o("option", {
          key: r(f),
          value: r(f)
        }, a(n(f)), 9, ol))), 128))
      ], 42, tl),
      t.error ? (s(), o("span", nl, a(t.error), 1)) : m("", !0)
    ], 2));
  }
}), ll = /* @__PURE__ */ Q(al, [["__scopeId", "data-v-7436d745"]]), il = { class: "popover-header" }, rl = { class: "popover-title" }, dl = { class: "popover-content" }, cl = {
  key: 0,
  class: "popover-actions"
}, ul = /* @__PURE__ */ Y({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (r, n) => (s(), E(Re, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (i) => r.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: nt({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = $e(() => {
          }, ["stop"]))
        }, [
          e("div", il, [
            e("h4", rl, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (i) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", dl, [
            pe(r.$slots, "content", {}, void 0, !0)
          ]),
          r.$slots.actions ? (s(), o("div", cl, [
            pe(r.$slots, "actions", {}, void 0, !0)
          ])) : m("", !0)
        ], 4)
      ])) : m("", !0)
    ]));
  }
}), at = /* @__PURE__ */ Q(ul, [["__scopeId", "data-v-42815ace"]]), ml = { class: "detail-section" }, vl = {
  key: 0,
  class: "empty-message"
}, fl = { class: "model-header" }, gl = { class: "model-name" }, hl = { class: "model-details" }, pl = { class: "model-row" }, yl = { class: "model-row" }, wl = { class: "label" }, kl = {
  key: 0,
  class: "model-row model-row-nodes"
}, bl = { class: "node-list" }, _l = ["onClick"], $l = {
  key: 1,
  class: "model-row"
}, Cl = { class: "value" }, xl = {
  key: 0,
  class: "model-actions"
}, Sl = { class: "detail-section" }, Il = {
  key: 0,
  class: "empty-message"
}, El = { class: "node-name" }, Ml = {
  key: 0,
  class: "node-version"
}, Rl = /* @__PURE__ */ Y({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: r }) {
    const n = t, i = r, { getWorkflowDetails: h, setModelImportance: f, installWorkflowDeps: g } = ze(), u = $(null), l = $(!1), v = $(null), p = $(!1), c = $({}), M = $({}), _ = $(!1), z = $(/* @__PURE__ */ new Set()), b = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function x(T) {
      switch (T) {
        case "available":
          return "success";
        case "path_mismatch":
          return "warning";
        case "downloadable":
          return "info";
        case "missing":
        default:
          return "error";
      }
    }
    function k(T) {
      switch (T) {
        case "available":
          return "✓ Available";
        case "path_mismatch":
          return "⚠ Path Mismatch";
        case "downloadable":
          return "⬇ Downloadable";
        case "missing":
        default:
          return "✗ Missing";
      }
    }
    function B(T) {
      if (!T.loaded_by || T.loaded_by.length === 0) return [];
      const R = T.hash || T.filename;
      return z.value.has(R) ? T.loaded_by : T.loaded_by.slice(0, 3);
    }
    function S(T) {
      return z.value.has(T);
    }
    function I(T) {
      z.value.has(T) ? z.value.delete(T) : z.value.add(T), z.value = new Set(z.value);
    }
    async function V() {
      l.value = !0, v.value = null;
      try {
        u.value = await h(n.workflowName);
      } catch (T) {
        v.value = T instanceof Error ? T.message : "Failed to load workflow details";
      } finally {
        l.value = !1;
      }
    }
    function H(T, R) {
      c.value[T] = R, p.value = !0;
    }
    async function te() {
      if (!p.value) {
        i("close");
        return;
      }
      l.value = !0, v.value = null;
      try {
        for (const [T, R] of Object.entries(c.value))
          await f(n.workflowName, T, R);
        i("refresh"), i("close");
      } catch (T) {
        v.value = T instanceof Error ? T.message : "Failed to save changes";
      } finally {
        l.value = !1;
      }
    }
    async function W(T) {
      M.value[T] = !0, v.value = null;
      try {
        await g(n.workflowName, !0, !1), await V();
      } catch (R) {
        v.value = R instanceof Error ? R.message : "Failed to install node";
      } finally {
        M.value[T] = !1;
      }
    }
    return Ee(V), (T, R) => (s(), o(F, null, [
      w(Ye, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: l.value,
        error: v.value || void 0,
        onClose: R[5] || (R[5] = (U) => i("close"))
      }, {
        body: d(() => [
          u.value ? (s(), o(F, { key: 0 }, [
            e("section", ml, [
              w(Rt, { variant: "section" }, {
                default: d(() => [
                  y("MODELS USED (" + a(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (s(), o("div", vl, " No models used in this workflow ")) : m("", !0),
              (s(!0), o(F, null, J(u.value.models, (U) => (s(), o("div", {
                key: U.hash || U.filename,
                class: "model-card"
              }, [
                e("div", fl, [
                  R[7] || (R[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", gl, a(U.filename), 1)
                ]),
                e("div", hl, [
                  e("div", pl, [
                    R[8] || (R[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: ne(["value", x(U.status)])
                    }, a(k(U.status)), 3)
                  ]),
                  e("div", yl, [
                    e("span", wl, [
                      R[9] || (R[9] = y(" Importance: ", -1)),
                      w(fs, {
                        size: 14,
                        title: "About importance levels",
                        onClick: R[0] || (R[0] = (N) => _.value = !0)
                      })
                    ]),
                    w(ll, {
                      "model-value": c.value[U.filename] || U.importance,
                      options: b,
                      "onUpdate:modelValue": (N) => H(U.filename, N)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  U.loaded_by && U.loaded_by.length > 0 ? (s(), o("div", kl, [
                    R[10] || (R[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", bl, [
                      (s(!0), o(F, null, J(B(U), (N, K) => (s(), o("div", {
                        key: `${N.node_id}-${K}`,
                        class: "node-reference"
                      }, a(N.node_type) + " (Node #" + a(N.node_id) + ") ", 1))), 128)),
                      U.loaded_by.length > 3 ? (s(), o("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (N) => I(U.hash || U.filename)
                      }, a(S(U.hash || U.filename) ? "▼ Show less" : `▶ View all (${U.loaded_by.length})`), 9, _l)) : m("", !0)
                    ])
                  ])) : m("", !0),
                  U.size_mb ? (s(), o("div", $l, [
                    R[11] || (R[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", Cl, a(U.size_mb) + " MB", 1)
                  ])) : m("", !0)
                ]),
                U.status !== "available" ? (s(), o("div", xl, [
                  U.status === "downloadable" ? (s(), E(ie, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: R[1] || (R[1] = (N) => i("resolve"))
                  }, {
                    default: d(() => [...R[12] || (R[12] = [
                      y(" Download ", -1)
                    ])]),
                    _: 1
                  })) : U.status === "path_mismatch" ? (s(), E(ie, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: R[2] || (R[2] = (N) => i("resolve"))
                  }, {
                    default: d(() => [...R[13] || (R[13] = [
                      y(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (s(), E(ie, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: R[3] || (R[3] = (N) => i("resolve"))
                  }, {
                    default: d(() => [...R[14] || (R[14] = [
                      y(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : m("", !0)
              ]))), 128))
            ]),
            e("section", Sl, [
              w(Rt, { variant: "section" }, {
                default: d(() => [
                  y("NODES USED (" + a(u.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.nodes.length === 0 ? (s(), o("div", Il, " No custom nodes used in this workflow ")) : m("", !0),
              (s(!0), o(F, null, J(u.value.nodes, (U) => (s(), o("div", {
                key: U.name,
                class: "node-item"
              }, [
                e("span", {
                  class: ne(["node-status", U.status === "installed" ? "installed" : "missing"])
                }, a(U.status === "installed" ? "✓" : "✕"), 3),
                e("span", El, a(U.name), 1),
                U.version ? (s(), o("span", Ml, "v" + a(U.version), 1)) : m("", !0),
                U.status === "missing" ? (s(), E(ie, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: M.value[U.name],
                  onClick: (N) => W(U.name),
                  class: "node-install-btn"
                }, {
                  default: d(() => [...R[15] || (R[15] = [
                    y(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : m("", !0)
              ]))), 128))
            ])
          ], 64)) : m("", !0)
        ]),
        footer: d(() => [
          w(ie, {
            variant: "secondary",
            onClick: R[4] || (R[4] = (U) => i("close"))
          }, {
            default: d(() => [...R[16] || (R[16] = [
              y(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (s(), E(ie, {
            key: 0,
            variant: "primary",
            onClick: te
          }, {
            default: d(() => [...R[17] || (R[17] = [
              y(" Save Changes ", -1)
            ])]),
            _: 1
          })) : m("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      w(at, {
        show: _.value,
        title: "Model Importance Levels",
        onClose: R[6] || (R[6] = (U) => _.value = !1)
      }, {
        content: d(() => [...R[18] || (R[18] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              y(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              y(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              y(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), zl = /* @__PURE__ */ Q(Rl, [["__scopeId", "data-v-0b14d32e"]]), we = Xt({
  items: [],
  status: "idle"
});
let st = null;
function ys() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function jt(t) {
  return we.items.find((r) => r.id === t);
}
async function wt() {
  if (we.status === "downloading") return;
  const t = we.items.find((r) => r.status === "queued");
  if (!t) {
    we.status = "idle";
    return;
  }
  we.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await Ll(t), t.status = "completed", t.progress = 100;
  } catch (r) {
    t.status = "failed", t.error = r instanceof Error ? r.message : "Download failed", t.retries++;
  } finally {
    we.status = "idle", wt();
  }
}
async function Ll(t) {
  return new Promise((r, n) => {
    st && (st.close(), st = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), h = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    st = h;
    let f = Date.now(), g = 0, u = !1;
    h.onmessage = (l) => {
      try {
        const v = JSON.parse(l.data);
        switch (v.type) {
          case "progress":
            t.downloaded = v.downloaded || 0, t.size = v.total || t.size;
            const p = Date.now(), c = (p - f) / 1e3;
            if (c > 0.5) {
              const M = t.downloaded - g;
              if (t.speed = M / c, f = p, g = t.downloaded, t.speed > 0 && t.size > 0) {
                const _ = t.size - t.downloaded;
                t.eta = _ / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            u = !0, h.close(), st = null, r();
            break;
          case "error":
            u = !0, h.close(), st = null, n(new Error(v.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, h.onerror = () => {
      h.close(), st = null, u || n(new Error("Connection lost"));
    };
  });
}
async function Tl() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const r = await t.json();
    if (!r.pending_downloads || r.pending_downloads.length === 0) return;
    for (const n of r.pending_downloads) {
      if (we.items.some((h) => h.url === n.url && h.filename === n.filename))
        continue;
      const i = {
        id: ys(),
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
      we.items.push(i);
    }
    console.log(`[ComfyGit] Loaded ${r.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Dt() {
  function t(x) {
    for (const k of x) {
      if (we.items.some(
        (I) => I.url === k.url && I.targetPath === k.targetPath && ["queued", "downloading", "paused", "completed"].includes(I.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${k.filename}`);
        continue;
      }
      const S = {
        id: ys(),
        workflow: k.workflow,
        filename: k.filename,
        url: k.url,
        targetPath: k.targetPath,
        size: k.size || 0,
        type: k.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      we.items.push(S);
    }
    we.status === "idle" && wt();
  }
  async function r(x) {
    const k = jt(x);
    if (k) {
      if (k.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(k.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        st && (st.close(), st = null), k.status = "failed", k.error = "Cancelled by user", we.status = "idle", wt();
      } else if (k.status === "queued") {
        const B = we.items.findIndex((S) => S.id === x);
        B >= 0 && we.items.splice(B, 1);
      }
    }
  }
  function n(x) {
    const k = jt(x);
    !k || k.status !== "failed" || (k.status = "queued", k.error = void 0, k.progress = 0, k.downloaded = 0, we.status === "idle" && wt());
  }
  function i(x) {
    const k = jt(x);
    !k || k.status !== "paused" || (k.status = "queued", we.status === "idle" && wt());
  }
  function h() {
    const x = we.items.filter((k) => k.status === "paused");
    for (const k of x)
      k.status = "queued";
    we.status === "idle" && wt();
  }
  function f(x) {
    const k = we.items.findIndex((B) => B.id === x);
    k >= 0 && ["completed", "failed", "paused"].includes(we.items[k].status) && we.items.splice(k, 1);
  }
  function g() {
    we.items = we.items.filter((x) => x.status !== "completed");
  }
  function u() {
    we.items = we.items.filter((x) => x.status !== "failed");
  }
  const l = D(
    () => we.items.find((x) => x.status === "downloading")
  ), v = D(
    () => we.items.filter((x) => x.status === "queued")
  ), p = D(
    () => we.items.filter((x) => x.status === "completed")
  ), c = D(
    () => we.items.filter((x) => x.status === "failed")
  ), M = D(
    () => we.items.filter((x) => x.status === "paused")
  ), _ = D(() => we.items.length > 0), z = D(
    () => we.items.filter((x) => x.status === "queued" || x.status === "downloading").length
  ), b = D(
    () => we.items.some((x) => x.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Bs(we),
    // Computed
    currentDownload: l,
    queuedItems: v,
    completedItems: p,
    failedItems: c,
    pausedItems: M,
    hasItems: _,
    activeCount: z,
    hasPaused: b,
    // Actions
    addToQueue: t,
    cancelDownload: r,
    retryDownload: n,
    resumeDownload: i,
    resumeAllPaused: h,
    removeItem: f,
    clearCompleted: g,
    clearFailed: u,
    loadPendingDownloads: Tl
  };
}
function Dl() {
  const t = $(null), r = $(null), n = $([]), i = $([]), h = $(!1), f = $(null);
  async function g(k, B) {
    var I;
    if (!((I = window.app) != null && I.api))
      throw new Error("ComfyUI API not available");
    const S = await window.app.api.fetchApi(k, B);
    if (!S.ok) {
      const V = await S.json().catch(() => ({})), H = V.error || V.message || `Request failed: ${S.status}`;
      throw new Error(H);
    }
    return S.json();
  }
  async function u(k) {
    h.value = !0, f.value = null;
    try {
      let B;
      return Ct() && (B = await fe.analyzeWorkflow(k)), t.value = B, B;
    } catch (B) {
      const S = B instanceof Error ? B.message : "Unknown error occurred";
      throw f.value = S, B;
    } finally {
      h.value = !1;
    }
  }
  async function l(k, B, S, I) {
    h.value = !0, f.value = null;
    try {
      let V;
      return Ct() && (V = await fe.applyResolution(k, B, S)), r.value = V, V;
    } catch (V) {
      const H = V instanceof Error ? V.message : "Unknown error occurred";
      throw f.value = H, V;
    } finally {
      h.value = !1;
    }
  }
  async function v(k, B = 10) {
    h.value = !0, f.value = null;
    try {
      let S;
      return Ct() && (S = await fe.searchNodes(k, B)), n.value = S.results, S.results;
    } catch (S) {
      const I = S instanceof Error ? S.message : "Unknown error occurred";
      throw f.value = I, S;
    } finally {
      h.value = !1;
    }
  }
  async function p(k, B = 10) {
    h.value = !0, f.value = null;
    try {
      let S;
      return Ct() && (S = await fe.searchModels(k, B)), i.value = S.results, S.results;
    } catch (S) {
      const I = S instanceof Error ? S.message : "Unknown error occurred";
      throw f.value = I, S;
    } finally {
      h.value = !1;
    }
  }
  const c = Xt({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function M() {
    c.phase = "idle", c.currentFile = void 0, c.currentFileIndex = void 0, c.totalFiles = void 0, c.bytesDownloaded = void 0, c.bytesTotal = void 0, c.completedFiles = [], c.nodesToInstall = [], c.nodesInstalled = [], c.installError = void 0, c.needsRestart = void 0, c.error = void 0, c.nodeInstallProgress = void 0;
  }
  async function _(k) {
    c.phase = "installing", c.nodesInstalled = [], c.installError = void 0, c.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      if (Ct()) {
        c.nodeInstallProgress.totalNodes = c.nodesToInstall.length;
        for (let B = 0; B < c.nodesToInstall.length; B++)
          c.nodeInstallProgress.currentNode = c.nodesToInstall[B], c.nodeInstallProgress.currentIndex = B, await new Promise((S) => setTimeout(S, 500)), c.nodeInstallProgress.completedNodes.push({
            node_id: c.nodesToInstall[B],
            success: !0
          });
        return c.nodesInstalled = c.nodesToInstall, c.needsRestart = c.nodesToInstall.length > 0, {
          status: "success",
          nodes_installed: c.nodesToInstall,
          message: "Nodes installed successfully"
        };
      }
      return await z(k);
    } catch (B) {
      const S = B instanceof Error ? B.message : "Failed to install nodes";
      throw c.installError = S, B;
    }
  }
  async function z(k) {
    var S;
    const B = await g(
      `/v2/comfygit/workflow/${k}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: c.nodesToInstall
        })
      }
    );
    if (c.nodeInstallProgress) {
      c.nodeInstallProgress.totalNodes = c.nodesToInstall.length;
      const I = new Map(((S = B.failed) == null ? void 0 : S.map((V) => [V.node_id, V.error])) || []);
      for (let V = 0; V < c.nodesToInstall.length; V++) {
        const H = c.nodesToInstall[V], te = I.get(H);
        c.nodeInstallProgress.completedNodes.push({
          node_id: H,
          success: !te,
          error: te
        });
      }
    }
    return c.nodesInstalled = B.nodes_installed, c.needsRestart = B.nodes_installed.length > 0, B.failed && B.failed.length > 0 && (c.installError = `${B.failed.length} package(s) failed to install`), B;
  }
  async function b(k, B, S) {
    M(), c.phase = "resolving", f.value = null;
    {
      const I = await fe.applyResolution(k, B, S);
      r.value = I, c.nodesToInstall = I.nodes_to_install, c.phase = "complete";
      return;
    }
  }
  function x(k, B) {
    const { addToQueue: S } = Dt(), I = B.filter((V) => V.url && V.target_path).map((V) => ({
      workflow: k,
      filename: V.filename,
      url: V.url,
      targetPath: V.target_path,
      size: V.size || 0,
      type: "model"
    }));
    return I.length > 0 && S(I), I.length;
  }
  return {
    // State
    result: t,
    appliedResult: r,
    searchResults: n,
    modelSearchResults: i,
    isLoading: h,
    error: f,
    progress: c,
    // Methods
    analyzeWorkflow: u,
    applyResolution: l,
    applyResolutionWithProgress: b,
    installNodes: _,
    searchNodes: v,
    searchModels: p,
    resetProgress: M,
    queueModelDownloads: x
  };
}
const Nl = { class: "resolution-stepper" }, Pl = { class: "stepper-header" }, Ul = ["onClick"], Bl = {
  key: 0,
  class: "step-icon"
}, Ol = {
  key: 1,
  class: "step-number"
}, Al = { class: "step-label" }, Fl = {
  key: 0,
  class: "step-connector"
}, Vl = { class: "stepper-content" }, Wl = /* @__PURE__ */ Y({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: r }) {
    const n = t, i = r;
    function h(v) {
      var p;
      if ((p = n.stepStats) != null && p[v]) {
        const c = n.stepStats[v];
        return c.total > 0 && c.resolved === c.total;
      }
      return n.completedSteps.includes(v);
    }
    function f(v) {
      var p;
      if ((p = n.stepStats) != null && p[v]) {
        const c = n.stepStats[v];
        return c.resolved > 0 && c.resolved < c.total;
      }
      return !1;
    }
    function g(v) {
      return h(v) ? "state-complete" : f(v) ? "state-partial" : "state-pending";
    }
    function u(v) {
      return !1;
    }
    function l(v) {
      i("step-change", v);
    }
    return (v, p) => (s(), o("div", Nl, [
      e("div", Pl, [
        (s(!0), o(F, null, J(t.steps, (c, M) => (s(), o("div", {
          key: c.id,
          class: ne(["step", {
            active: t.currentStep === c.id,
            completed: h(c.id),
            "in-progress": f(c.id),
            disabled: u(c.id)
          }]),
          onClick: (_) => l(c.id)
        }, [
          e("div", {
            class: ne(["step-indicator", g(c.id)])
          }, [
            h(c.id) ? (s(), o("span", Bl, "✓")) : (s(), o("span", Ol, a(M + 1), 1))
          ], 2),
          e("div", Al, a(c.label), 1),
          M < t.steps.length - 1 ? (s(), o("div", Fl)) : m("", !0)
        ], 10, Ul))), 128))
      ]),
      e("div", Vl, [
        pe(v.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Gl = /* @__PURE__ */ Q(Wl, [["__scopeId", "data-v-2a7b3af8"]]), jl = /* @__PURE__ */ Y({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const r = t, n = D(() => r.confidence >= 0.9 ? "high" : r.confidence >= 0.7 ? "medium" : "low"), i = D(() => `confidence-${n.value}`), h = D(() => r.showPercentage ? `${Math.round(r.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (f, g) => (s(), o("span", {
      class: ne(["confidence-badge", i.value, t.size])
    }, a(h.value), 3));
  }
}), es = /* @__PURE__ */ Q(jl, [["__scopeId", "data-v-17ec4b80"]]), ql = { class: "node-info" }, Hl = { class: "node-info-text" }, Kl = { class: "item-body" }, Yl = {
  key: 0,
  class: "resolved-state"
}, Ql = {
  key: 1,
  class: "multiple-options"
}, Xl = { class: "options-list" }, Zl = ["onClick"], Jl = ["name", "value", "checked", "onChange"], ei = { class: "option-content" }, ti = { class: "option-header" }, si = { class: "option-package-id" }, oi = {
  key: 0,
  class: "option-title"
}, ni = { class: "option-meta" }, ai = {
  key: 0,
  class: "installed-badge"
}, li = { class: "action-buttons" }, ii = {
  key: 2,
  class: "unresolved"
}, ri = { class: "action-buttons" }, di = /* @__PURE__ */ Y({
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
    statusLabel: {}
  },
  emits: ["mark-optional", "skip", "manual-entry", "search", "option-selected", "clear-choice"],
  setup(t, { emit: r }) {
    const n = t, i = r, h = D(() => !!n.choice);
    D(() => {
      var u;
      return (u = n.choice) == null ? void 0 : u.action;
    }), D(() => {
      var u;
      return (u = n.choice) == null ? void 0 : u.package_id;
    });
    const f = D(() => {
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
    function g(u) {
      i("option-selected", u);
    }
    return (u, l) => (s(), o("div", {
      class: ne(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: h.value }])
    }, [
      e("div", ql, [
        e("span", Hl, [
          l[7] || (l[7] = y("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: ne(["status-badge", f.value])
        }, a(t.statusLabel), 3)) : m("", !0)
      ]),
      e("div", Kl, [
        h.value ? (s(), o("div", Yl, [
          w(ie, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = (v) => i("clear-choice"))
          }, {
            default: d(() => [...l[8] || (l[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Ql, [
          l[12] || (l[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Xl, [
            (s(!0), o(F, null, J(t.options, (v, p) => (s(), o("label", {
              key: v.package_id,
              class: ne(["option-card", { selected: t.selectedOptionIndex === p }]),
              onClick: (c) => g(p)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: p,
                checked: t.selectedOptionIndex === p,
                onChange: (c) => g(p)
              }, null, 40, Jl),
              e("div", ei, [
                e("div", ti, [
                  e("span", si, a(v.package_id), 1),
                  w(es, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (s(), o("div", oi, a(v.title), 1)) : m("", !0),
                e("div", ni, [
                  v.is_installed ? (s(), o("span", ai, "Already Installed")) : m("", !0)
                ])
              ])
            ], 10, Zl))), 128))
          ]),
          e("div", li, [
            w(ie, {
              variant: "ghost",
              size: "sm",
              onClick: l[1] || (l[1] = (v) => i("search"))
            }, {
              default: d(() => [...l[9] || (l[9] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            w(ie, {
              variant: "ghost",
              size: "sm",
              onClick: l[2] || (l[2] = (v) => i("manual-entry"))
            }, {
              default: d(() => [...l[10] || (l[10] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            w(ie, {
              variant: "secondary",
              size: "sm",
              onClick: l[3] || (l[3] = (v) => i("mark-optional"))
            }, {
              default: d(() => [...l[11] || (l[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", ii, [
          l[16] || (l[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", ri, [
            w(ie, {
              variant: "primary",
              size: "sm",
              onClick: l[4] || (l[4] = (v) => i("search"))
            }, {
              default: d(() => [...l[13] || (l[13] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            w(ie, {
              variant: "secondary",
              size: "sm",
              onClick: l[5] || (l[5] = (v) => i("manual-entry"))
            }, {
              default: d(() => [...l[14] || (l[14] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            w(ie, {
              variant: "secondary",
              size: "sm",
              onClick: l[6] || (l[6] = (v) => i("mark-optional"))
            }, {
              default: d(() => [...l[15] || (l[15] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), ci = /* @__PURE__ */ Q(di, [["__scopeId", "data-v-e02629e7"]]), ui = { class: "item-navigator" }, mi = { class: "nav-item-info" }, vi = ["title"], fi = { class: "nav-controls" }, gi = { class: "nav-arrows" }, hi = ["disabled"], pi = ["disabled"], yi = { class: "nav-position" }, wi = /* @__PURE__ */ Y({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: r }) {
    const n = r;
    return (i, h) => (s(), o("div", ui, [
      e("div", mi, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, vi)
      ]),
      e("div", fi, [
        e("div", gi, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: h[0] || (h[0] = (f) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, hi),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: h[1] || (h[1] = (f) => n("next")),
            title: "Next item"
          }, " → ", 8, pi)
        ]),
        e("span", yi, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), ws = /* @__PURE__ */ Q(wi, [["__scopeId", "data-v-74af7920"]]), ki = ["type", "value", "placeholder", "disabled"], bi = {
  key: 0,
  class: "base-input-error"
}, _i = /* @__PURE__ */ Y({
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
    return (r, n) => (s(), o("div", {
      class: ne(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: ne(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (i) => r.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          n[1] || (n[1] = ut((i) => r.$emit("enter"), ["enter"])),
          n[2] || (n[2] = ut((i) => r.$emit("escape"), ["escape"]))
        ]
      }, null, 42, ki),
      t.error ? (s(), o("span", bi, a(t.error), 1)) : m("", !0)
    ], 2));
  }
}), Ze = /* @__PURE__ */ Q(_i, [["__scopeId", "data-v-9ba02cdc"]]), $i = { class: "node-resolution-step" }, Ci = {
  key: 0,
  class: "auto-resolved-section"
}, xi = { class: "section-header" }, Si = { class: "stat-badge" }, Ii = { class: "resolved-packages-list" }, Ei = { class: "package-info" }, Mi = { class: "package-id" }, Ri = { class: "node-count" }, zi = { class: "package-actions" }, Li = {
  key: 0,
  class: "status-badge install"
}, Ti = {
  key: 1,
  class: "status-badge skip"
}, Di = ["onClick"], Ni = {
  key: 1,
  class: "section-divider"
}, Pi = { class: "step-header" }, Ui = { class: "stat-badge" }, Bi = {
  key: 1,
  class: "step-body"
}, Oi = {
  key: 3,
  class: "empty-state"
}, Ai = { class: "node-search-modal" }, Fi = { class: "node-modal-body" }, Vi = {
  key: 0,
  class: "node-search-results"
}, Wi = ["onClick"], Gi = { class: "node-result-header" }, ji = { class: "node-result-package-id" }, qi = {
  key: 0,
  class: "node-result-description"
}, Hi = {
  key: 1,
  class: "node-no-results"
}, Ki = {
  key: 2,
  class: "node-searching"
}, Yi = { class: "node-manual-entry-modal" }, Qi = { class: "node-modal-body" }, Xi = { class: "node-modal-actions" }, Zi = /* @__PURE__ */ Y({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: r }) {
    const n = t, i = r, h = $(0), f = $(!1), g = $(!1), u = $(""), l = $(""), v = $([]), p = $(!1), c = D(() => n.nodes[h.value]), M = D(() => n.nodes.filter((re) => n.nodeChoices.has(re.node_type)).length), _ = D(() => n.autoResolvedPackages.filter((re) => !n.skippedPackages.has(re.package_id)).length);
    function z(re) {
      return n.skippedPackages.has(re);
    }
    function b(re) {
      i("package-skip", re);
    }
    const x = D(() => {
      var X;
      if (!c.value) return "not-found";
      const re = n.nodeChoices.get(c.value.node_type);
      if (re)
        switch (re.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (X = c.value.options) != null && X.length ? "ambiguous" : "not-found";
    }), k = D(() => {
      var X;
      if (!c.value) return;
      const re = n.nodeChoices.get(c.value.node_type);
      if (re)
        switch (re.action) {
          case "install":
            return re.package_id ? `→ ${re.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (X = c.value.options) != null && X.length ? `${c.value.options.length} matches` : "Not Found";
    });
    function B(re) {
      re >= 0 && re < n.nodes.length && (h.value = re);
    }
    function S() {
      c.value && i("mark-optional", c.value.node_type);
    }
    function I() {
      c.value && i("skip", c.value.node_type);
    }
    function V(re) {
      c.value && i("option-selected", c.value.node_type, re);
    }
    function H() {
      c.value && i("clear-choice", c.value.node_type);
    }
    function te() {
      c.value && (u.value = c.value.node_type, f.value = !0);
    }
    function W() {
      l.value = "", g.value = !0;
    }
    function T() {
      f.value = !1, u.value = "", v.value = [];
    }
    function R() {
      g.value = !1, l.value = "";
    }
    function U() {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 300);
    }
    function N(re) {
      c.value && (i("manual-entry", c.value.node_type, re.package_id), T());
    }
    function K() {
      !c.value || !l.value.trim() || (i("manual-entry", c.value.node_type, l.value.trim()), R());
    }
    return (re, X) => {
      var se, O;
      return s(), o("div", $i, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", Ci, [
          e("div", xi, [
            X[4] || (X[4] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", Si, a(_.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", Ii, [
            (s(!0), o(F, null, J(t.autoResolvedPackages, (C) => (s(), o("div", {
              key: C.package_id,
              class: "resolved-package-item"
            }, [
              e("div", Ei, [
                e("code", Mi, a(C.package_id), 1),
                e("span", Ri, a(C.node_types_count) + " node type" + a(C.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", zi, [
                z(C.package_id) ? (s(), o("span", Ti, " SKIPPED ")) : (s(), o("span", Li, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (ae) => b(C.package_id)
                }, a(z(C.package_id) ? "Include" : "Skip"), 9, Di)
              ])
            ]))), 128))
          ])
        ])) : m("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", Ni)) : m("", !0),
        t.nodes.length > 0 ? (s(), o(F, { key: 2 }, [
          e("div", Pi, [
            X[5] || (X[5] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", Ui, a(M.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          c.value ? (s(), E(ws, {
            key: 0,
            "item-name": c.value.node_type,
            "current-index": h.value,
            "total-items": t.nodes.length,
            onPrev: X[0] || (X[0] = (C) => B(h.value - 1)),
            onNext: X[1] || (X[1] = (C) => B(h.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : m("", !0),
          c.value ? (s(), o("div", Bi, [
            w(ci, {
              "node-type": c.value.node_type,
              "has-multiple-options": !!((se = c.value.options) != null && se.length),
              options: c.value.options,
              choice: (O = t.nodeChoices) == null ? void 0 : O.get(c.value.node_type),
              status: x.value,
              "status-label": k.value,
              onMarkOptional: S,
              onSkip: I,
              onManualEntry: W,
              onSearch: te,
              onOptionSelected: V,
              onClearChoice: H
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
          ])) : m("", !0)
        ], 64)) : m("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", Oi, [...X[6] || (X[6] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : m("", !0),
        (s(), E(Re, { to: "body" }, [
          f.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: $e(T, ["self"])
          }, [
            e("div", Ai, [
              e("div", { class: "node-modal-header" }, [
                X[7] || (X[7] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: T
                }, "✕")
              ]),
              e("div", Fi, [
                w(Ze, {
                  modelValue: u.value,
                  "onUpdate:modelValue": X[2] || (X[2] = (C) => u.value = C),
                  placeholder: "Search by node type, package name...",
                  onInput: U
                }, null, 8, ["modelValue"]),
                v.value.length > 0 ? (s(), o("div", Vi, [
                  (s(!0), o(F, null, J(v.value, (C) => (s(), o("div", {
                    key: C.package_id,
                    class: "node-search-result-item",
                    onClick: (ae) => N(C)
                  }, [
                    e("div", Gi, [
                      e("code", ji, a(C.package_id), 1),
                      C.match_confidence ? (s(), E(es, {
                        key: 0,
                        confidence: C.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : m("", !0)
                    ]),
                    C.description ? (s(), o("div", qi, a(C.description), 1)) : m("", !0)
                  ], 8, Wi))), 128))
                ])) : u.value && !p.value ? (s(), o("div", Hi, ' No packages found matching "' + a(u.value) + '" ', 1)) : m("", !0),
                p.value ? (s(), o("div", Ki, "Searching...")) : m("", !0)
              ])
            ])
          ])) : m("", !0)
        ])),
        (s(), E(Re, { to: "body" }, [
          g.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: $e(R, ["self"])
          }, [
            e("div", Yi, [
              e("div", { class: "node-modal-header" }, [
                X[8] || (X[8] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: R
                }, "✕")
              ]),
              e("div", Qi, [
                w(Ze, {
                  modelValue: l.value,
                  "onUpdate:modelValue": X[3] || (X[3] = (C) => l.value = C),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Xi, [
                  w(ie, {
                    variant: "secondary",
                    onClick: R
                  }, {
                    default: d(() => [...X[9] || (X[9] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  w(ie, {
                    variant: "primary",
                    disabled: !l.value.trim(),
                    onClick: K
                  }, {
                    default: d(() => [...X[10] || (X[10] = [
                      y(" Add Package ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : m("", !0)
        ]))
      ]);
    };
  }
}), Ji = /* @__PURE__ */ Q(Zi, [["__scopeId", "data-v-6474069a"]]), er = { class: "node-info" }, tr = { class: "node-info-text" }, sr = { class: "item-body" }, or = {
  key: 0,
  class: "resolved-state"
}, nr = {
  key: 1,
  class: "multiple-options"
}, ar = { class: "options-list" }, lr = ["onClick"], ir = ["name", "value", "checked", "onChange"], rr = { class: "option-content" }, dr = { class: "option-header" }, cr = { class: "option-filename" }, ur = { class: "option-meta" }, mr = { class: "option-size" }, vr = { class: "option-category" }, fr = { class: "option-path" }, gr = { class: "action-buttons" }, hr = {
  key: 2,
  class: "unresolved"
}, pr = { class: "action-buttons" }, yr = /* @__PURE__ */ Y({
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
  setup(t, { emit: r }) {
    const n = t, i = r, h = D(() => !!n.choice);
    D(() => {
      var l;
      return (l = n.choice) == null ? void 0 : l.action;
    }), D(() => {
      var l, v;
      return ((v = (l = n.choice) == null ? void 0 : l.selected_model) == null ? void 0 : v.filename) || "selected";
    });
    const f = D(() => {
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
    function g(l) {
      i("option-selected", l);
    }
    function u(l) {
      if (!l) return "Unknown";
      const v = l / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(l / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (l, v) => (s(), o("div", {
      class: ne(["model-resolution-item", { resolved: h.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", er, [
        e("span", tr, [
          v[7] || (v[7] = y("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: ne(["status-badge", f.value])
        }, a(t.statusLabel), 3)) : m("", !0)
      ]),
      e("div", sr, [
        h.value ? (s(), o("div", or, [
          w(ie, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (p) => i("clear-choice"))
          }, {
            default: d(() => [...v[8] || (v[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", nr, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", ar, [
            (s(!0), o(F, null, J(t.options, (p, c) => (s(), o("label", {
              key: p.model.hash,
              class: ne(["option-card", { selected: t.selectedOptionIndex === c }]),
              onClick: (M) => g(c)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: c,
                checked: t.selectedOptionIndex === c,
                onChange: (M) => g(c)
              }, null, 40, ir),
              e("div", rr, [
                e("div", dr, [
                  e("span", cr, a(p.model.filename), 1),
                  w(es, {
                    confidence: p.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", ur, [
                  e("span", mr, a(u(p.model.size)), 1),
                  e("span", vr, a(p.model.category), 1)
                ]),
                e("div", fr, a(p.model.relative_path), 1)
              ])
            ], 10, lr))), 128))
          ]),
          e("div", gr, [
            w(ie, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (p) => i("search"))
            }, {
              default: d(() => [...v[9] || (v[9] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            w(ie, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (p) => i("download-url"))
            }, {
              default: d(() => [...v[10] || (v[10] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            w(ie, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (p) => i("mark-optional"))
            }, {
              default: d(() => [...v[11] || (v[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", hr, [
          v[16] || (v[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", pr, [
            w(ie, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (p) => i("search"))
            }, {
              default: d(() => [...v[13] || (v[13] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            w(ie, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (p) => i("download-url"))
            }, {
              default: d(() => [...v[14] || (v[14] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            w(ie, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (p) => i("mark-optional"))
            }, {
              default: d(() => [...v[15] || (v[15] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), wr = /* @__PURE__ */ Q(yr, [["__scopeId", "data-v-8a82fefa"]]), kr = { class: "model-resolution-step" }, br = { class: "step-header" }, _r = { class: "step-info" }, $r = { class: "step-title" }, Cr = { class: "step-description" }, xr = { class: "stat-badge" }, Sr = {
  key: 1,
  class: "step-body"
}, Ir = {
  key: 2,
  class: "empty-state"
}, Er = { class: "model-search-modal" }, Mr = { class: "model-modal-body" }, Rr = {
  key: 0,
  class: "model-search-results"
}, zr = ["onClick"], Lr = { class: "model-result-header" }, Tr = { class: "model-result-filename" }, Dr = { class: "model-result-meta" }, Nr = { class: "model-result-category" }, Pr = { class: "model-result-size" }, Ur = {
  key: 0,
  class: "model-result-path"
}, Br = {
  key: 1,
  class: "model-no-results"
}, Or = {
  key: 2,
  class: "model-searching"
}, Ar = { class: "model-download-url-modal" }, Fr = { class: "model-modal-body" }, Vr = { class: "model-input-group" }, Wr = { class: "model-input-group" }, Gr = { class: "model-modal-actions" }, jr = /* @__PURE__ */ Y({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(t, { emit: r }) {
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
    function i(O) {
      var C;
      return O && ((C = n[O]) == null ? void 0 : C[0]) || null;
    }
    const h = t, f = r, g = $(0), u = $(!1), l = $(!1), v = $(""), p = $(""), c = $(""), M = $([]), _ = $(!1), z = D(() => h.models[g.value]), b = D(() => h.models.some((O) => O.is_download_intent)), x = D(() => h.models.filter(
      (O) => h.modelChoices.has(O.filename) || O.is_download_intent
    ).length), k = D(() => {
      var C;
      if (!z.value) return "";
      const O = i((C = z.value.reference) == null ? void 0 : C.node_type);
      return O ? `${O}/${z.value.filename}` : "";
    }), B = D(() => {
      var C;
      if (!z.value) return "not-found";
      const O = h.modelChoices.get(z.value.filename);
      if (O)
        switch (O.action) {
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
      return z.value.is_download_intent ? "download" : (C = z.value.options) != null && C.length ? "ambiguous" : "not-found";
    }), S = D(() => {
      var C, ae;
      if (!z.value) return;
      const O = h.modelChoices.get(z.value.filename);
      if (O)
        switch (O.action) {
          case "select":
            return (C = O.selected_model) != null && C.filename ? `→ ${O.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return z.value.is_download_intent ? "Pending Download" : (ae = z.value.options) != null && ae.length ? `${z.value.options.length} matches` : "Not Found";
    });
    function I(O) {
      O >= 0 && O < h.models.length && (g.value = O);
    }
    function V() {
      z.value && f("mark-optional", z.value.filename);
    }
    function H() {
      z.value && f("skip", z.value.filename);
    }
    function te(O) {
      z.value && f("option-selected", z.value.filename, O);
    }
    function W() {
      z.value && f("clear-choice", z.value.filename);
    }
    function T() {
      z.value && (v.value = z.value.filename, u.value = !0);
    }
    function R() {
      z.value && (p.value = z.value.download_source || "", c.value = z.value.target_path || k.value, l.value = !0);
    }
    function U() {
      u.value = !1, v.value = "", M.value = [];
    }
    function N() {
      l.value = !1, p.value = "", c.value = "";
    }
    function K() {
      _.value = !0, setTimeout(() => {
        _.value = !1;
      }, 300);
    }
    function re(O) {
      z.value && U();
    }
    function X() {
      !z.value || !p.value.trim() || (f("download-url", z.value.filename, p.value.trim(), c.value.trim() || void 0), N());
    }
    function se(O) {
      if (!O) return "Unknown";
      const C = O / (1024 * 1024 * 1024);
      return C >= 1 ? `${C.toFixed(2)} GB` : `${(O / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (O, C) => {
      var ae, oe, xe;
      return s(), o("div", kr, [
        e("div", br, [
          e("div", _r, [
            e("h3", $r, a(b.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Cr, a(b.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", xr, a(x.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        z.value ? (s(), E(ws, {
          key: 0,
          "item-name": z.value.filename,
          "current-index": g.value,
          "total-items": t.models.length,
          onPrev: C[0] || (C[0] = (be) => I(g.value - 1)),
          onNext: C[1] || (C[1] = (be) => I(g.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : m("", !0),
        z.value ? (s(), o("div", Sr, [
          w(wr, {
            filename: z.value.filename,
            "node-type": ((ae = z.value.reference) == null ? void 0 : ae.node_type) || "Unknown",
            "has-multiple-options": !!((oe = z.value.options) != null && oe.length),
            options: z.value.options,
            choice: (xe = t.modelChoices) == null ? void 0 : xe.get(z.value.filename),
            status: B.value,
            "status-label": S.value,
            onMarkOptional: V,
            onSkip: H,
            onDownloadUrl: R,
            onSearch: T,
            onOptionSelected: te,
            onClearChoice: W
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", Ir, [...C[5] || (C[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), E(Re, { to: "body" }, [
          u.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: $e(U, ["self"])
          }, [
            e("div", Er, [
              e("div", { class: "model-modal-header" }, [
                C[6] || (C[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: U
                }, "✕")
              ]),
              e("div", Mr, [
                w(Ze, {
                  modelValue: v.value,
                  "onUpdate:modelValue": C[2] || (C[2] = (be) => v.value = be),
                  placeholder: "Search by filename, category...",
                  onInput: K
                }, null, 8, ["modelValue"]),
                M.value.length > 0 ? (s(), o("div", Rr, [
                  (s(!0), o(F, null, J(M.value, (be) => (s(), o("div", {
                    key: be.hash,
                    class: "model-search-result-item",
                    onClick: (Le) => re()
                  }, [
                    e("div", Lr, [
                      e("code", Tr, a(be.filename), 1)
                    ]),
                    e("div", Dr, [
                      e("span", Nr, a(be.category), 1),
                      e("span", Pr, a(se(be.size)), 1)
                    ]),
                    be.relative_path ? (s(), o("div", Ur, a(be.relative_path), 1)) : m("", !0)
                  ], 8, zr))), 128))
                ])) : v.value && !_.value ? (s(), o("div", Br, ' No models found matching "' + a(v.value) + '" ', 1)) : m("", !0),
                _.value ? (s(), o("div", Or, "Searching...")) : m("", !0)
              ])
            ])
          ])) : m("", !0)
        ])),
        (s(), E(Re, { to: "body" }, [
          l.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: $e(N, ["self"])
          }, [
            e("div", Ar, [
              e("div", { class: "model-modal-header" }, [
                C[7] || (C[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: N
                }, "✕")
              ]),
              e("div", Fr, [
                e("div", Vr, [
                  C[8] || (C[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  w(Ze, {
                    modelValue: p.value,
                    "onUpdate:modelValue": C[3] || (C[3] = (be) => p.value = be),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Wr, [
                  C[9] || (C[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  w(Ze, {
                    modelValue: c.value,
                    "onUpdate:modelValue": C[4] || (C[4] = (be) => c.value = be),
                    placeholder: k.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", Gr, [
                  w(ie, {
                    variant: "secondary",
                    onClick: N
                  }, {
                    default: d(() => [...C[10] || (C[10] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  w(ie, {
                    variant: "primary",
                    disabled: !p.value.trim() || !c.value.trim(),
                    onClick: X
                  }, {
                    default: d(() => [...C[11] || (C[11] = [
                      y(" Queue Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : m("", !0)
        ]))
      ]);
    };
  }
}), qr = /* @__PURE__ */ Q(jr, [["__scopeId", "data-v-c6acbada"]]), Hr = { class: "applying-step" }, Kr = {
  key: 0,
  class: "phase-content"
}, Yr = {
  key: 1,
  class: "phase-content"
}, Qr = { class: "phase-description" }, Xr = { class: "overall-progress" }, Zr = { class: "progress-bar" }, Jr = { class: "progress-label" }, ed = { class: "install-list" }, td = { class: "install-icon" }, sd = { key: 0 }, od = {
  key: 1,
  class: "spinner"
}, nd = { key: 2 }, ad = { key: 3 }, ld = {
  key: 0,
  class: "install-error"
}, id = {
  key: 2,
  class: "phase-content"
}, rd = { class: "phase-header" }, dd = { class: "phase-title" }, cd = { class: "completion-summary" }, ud = {
  key: 0,
  class: "summary-item success"
}, md = { class: "summary-text" }, vd = {
  key: 1,
  class: "summary-item error"
}, fd = { class: "summary-text" }, gd = {
  key: 2,
  class: "failed-list"
}, hd = { class: "failed-node-id" }, pd = { class: "failed-error" }, yd = {
  key: 4,
  class: "summary-item success"
}, wd = {
  key: 5,
  class: "restart-prompt"
}, kd = {
  key: 3,
  class: "phase-content error"
}, bd = { class: "error-message" }, _d = /* @__PURE__ */ Y({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const r = t, n = D(() => {
      var v, p;
      const u = ((v = r.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || r.progress.nodesToInstall.length;
      if (!u) return 0;
      const l = ((p = r.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0;
      return Math.round(l / u * 100);
    }), i = D(() => {
      var u;
      return ((u = r.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((l) => !l.success)) || [];
    }), h = D(() => i.value.length > 0);
    function f(u, l) {
      var p, c;
      const v = (p = r.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.find((M) => M.node_id === u);
      return v ? v.success ? "complete" : "failed" : ((c = r.progress.nodeInstallProgress) == null ? void 0 : c.currentIndex) === l ? "installing" : "pending";
    }
    function g(u) {
      var l, v;
      return (v = (l = r.progress.nodeInstallProgress) == null ? void 0 : l.completedNodes.find((p) => p.node_id === u)) == null ? void 0 : v.error;
    }
    return (u, l) => {
      var v, p, c, M;
      return s(), o("div", Hr, [
        t.progress.phase === "resolving" ? (s(), o("div", Kr, [...l[2] || (l[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", Yr, [
          l[3] || (l[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", Qr, " Installing " + a((((v = t.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + a(((p = t.progress.nodeInstallProgress) == null ? void 0 : p.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Xr, [
            e("div", Zr, [
              e("div", {
                class: "progress-fill",
                style: nt({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Jr, a(((c = t.progress.nodeInstallProgress) == null ? void 0 : c.completedNodes.length) ?? 0) + " / " + a(((M = t.progress.nodeInstallProgress) == null ? void 0 : M.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", ed, [
            (s(!0), o(F, null, J(t.progress.nodesToInstall, (_, z) => (s(), o("div", {
              key: _,
              class: ne(["install-item", f(_, z)])
            }, [
              e("span", td, [
                f(_, z) === "pending" ? (s(), o("span", sd, "○")) : f(_, z) === "installing" ? (s(), o("span", od, "◌")) : f(_, z) === "complete" ? (s(), o("span", nd, "✓")) : f(_, z) === "failed" ? (s(), o("span", ad, "✗")) : m("", !0)
              ]),
              e("code", null, a(_), 1),
              g(_) ? (s(), o("span", ld, a(g(_)), 1)) : m("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", id, [
          e("div", rd, [
            e("span", {
              class: ne(["phase-icon", h.value ? "warning" : "success"])
            }, a(h.value ? "⚠" : "✓"), 3),
            e("h3", dd, a(h.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", cd, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", ud, [
              l[4] || (l[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", md, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : m("", !0),
            i.value.length > 0 ? (s(), o("div", vd, [
              l[5] || (l[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", fd, a(i.value.length) + " package" + a(i.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : m("", !0),
            i.value.length > 0 ? (s(), o("div", gd, [
              (s(!0), o(F, null, J(i.value, (_) => (s(), o("div", {
                key: _.node_id,
                class: "failed-item"
              }, [
                e("code", hd, a(_.node_id), 1),
                e("span", pd, a(_.error), 1)
              ]))), 128))
            ])) : m("", !0),
            i.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: l[0] || (l[0] = (_) => u.$emit("retry-failed"))
            }, " Retry Failed (" + a(i.value.length) + ") ", 1)) : m("", !0),
            h.value ? m("", !0) : (s(), o("div", yd, [...l[6] || (l[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            l[8] || (l[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", wd, [
              l[7] || (l[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: l[1] || (l[1] = (_) => u.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : m("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", kd, [
          l[9] || (l[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", bd, a(t.progress.error), 1)
        ])) : m("", !0)
      ]);
    };
  }
}), $d = /* @__PURE__ */ Q(_d, [["__scopeId", "data-v-5efaae58"]]), Cd = {
  key: 0,
  class: "loading-state"
}, xd = {
  key: 1,
  class: "wizard-content"
}, Sd = {
  key: 0,
  class: "step-content"
}, Id = { class: "analysis-summary" }, Ed = { class: "analysis-header" }, Md = { class: "summary-description" }, Rd = { class: "stats-grid" }, zd = { class: "stat-card" }, Ld = { class: "stat-items" }, Td = {
  key: 0,
  class: "stat-item success"
}, Dd = { class: "stat-count" }, Nd = {
  key: 1,
  class: "stat-item info"
}, Pd = { class: "stat-count" }, Ud = {
  key: 2,
  class: "stat-item warning"
}, Bd = { class: "stat-count" }, Od = {
  key: 3,
  class: "stat-item error"
}, Ad = { class: "stat-count" }, Fd = { class: "stat-card" }, Vd = { class: "stat-items" }, Wd = { class: "stat-item success" }, Gd = { class: "stat-count" }, jd = {
  key: 0,
  class: "stat-item info"
}, qd = { class: "stat-count" }, Hd = {
  key: 1,
  class: "stat-item warning"
}, Kd = { class: "stat-count" }, Yd = {
  key: 2,
  class: "stat-item error"
}, Qd = { class: "stat-count" }, Xd = {
  key: 0,
  class: "status-message warning"
}, Zd = { class: "status-text" }, Jd = {
  key: 1,
  class: "status-message info"
}, ec = { class: "status-text" }, tc = {
  key: 2,
  class: "status-message info"
}, sc = { class: "status-text" }, oc = {
  key: 3,
  class: "status-message success"
}, nc = {
  key: 3,
  class: "step-content"
}, ac = { class: "review-summary" }, lc = { class: "review-stats" }, ic = { class: "review-stat" }, rc = { class: "stat-value" }, dc = { class: "review-stat" }, cc = { class: "stat-value" }, uc = { class: "review-stat" }, mc = { class: "stat-value" }, vc = { class: "review-stat" }, fc = { class: "stat-value" }, gc = {
  key: 0,
  class: "review-section"
}, hc = { class: "section-title" }, pc = { class: "review-items" }, yc = { class: "item-name" }, wc = { class: "item-choice" }, kc = {
  key: 0,
  class: "choice-badge install"
}, bc = {
  key: 1,
  class: "choice-badge skip"
}, _c = {
  key: 1,
  class: "review-section"
}, $c = { class: "section-title" }, Cc = { class: "review-items" }, xc = { class: "item-name" }, Sc = { class: "item-choice" }, Ic = {
  key: 0,
  class: "choice-badge install"
}, Ec = {
  key: 1,
  class: "choice-badge optional"
}, Mc = {
  key: 2,
  class: "choice-badge skip"
}, Rc = {
  key: 1,
  class: "choice-badge pending"
}, zc = {
  key: 2,
  class: "review-section"
}, Lc = { class: "section-title" }, Tc = { class: "review-items" }, Dc = { class: "item-name" }, Nc = { class: "item-choice" }, Pc = {
  key: 0,
  class: "choice-badge install"
}, Uc = {
  key: 1,
  class: "choice-badge download"
}, Bc = {
  key: 2,
  class: "choice-badge optional"
}, Oc = {
  key: 3,
  class: "choice-badge skip"
}, Ac = {
  key: 4,
  class: "choice-badge skip"
}, Fc = {
  key: 1,
  class: "choice-badge download"
}, Vc = {
  key: 2,
  class: "choice-badge pending"
}, Wc = {
  key: 3,
  class: "no-choices"
}, Gc = /* @__PURE__ */ Y({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: r }) {
    const n = t, i = r, { analyzeWorkflow: h, applyResolution: f, installNodes: g, queueModelDownloads: u, progress: l, resetProgress: v } = Dl(), { loadPendingDownloads: p } = Dt(), c = $(null), M = $(!1), _ = $(!1), z = $(null), b = $("analysis"), x = $([]), k = $(/* @__PURE__ */ new Map()), B = $(/* @__PURE__ */ new Map()), S = $(/* @__PURE__ */ new Set()), I = D(() => {
      const q = [
        { id: "analysis", label: "Analysis" }
      ];
      return (H.value || T.value) && q.push({ id: "nodes", label: "Nodes" }), (te.value || W.value) && q.push({ id: "models", label: "Models" }), q.push({ id: "review", label: "Review" }), b.value === "applying" && q.push({ id: "applying", label: "Applying" }), q;
    }), V = D(() => c.value ? c.value.stats.needs_user_input : !1), H = D(() => c.value ? c.value.nodes.unresolved.length > 0 || c.value.nodes.ambiguous.length > 0 : !1), te = D(() => c.value ? c.value.models.unresolved.length > 0 || c.value.models.ambiguous.length > 0 : !1), W = D(() => c.value ? c.value.stats.download_intents > 0 : !1), T = D(() => c.value ? c.value.stats.nodes_needing_installation > 0 : !1), R = D(() => c.value ? c.value.nodes.resolved.length : 0), U = D(() => {
      if (!c.value) return [];
      const q = c.value.nodes.resolved.filter((Z) => !Z.is_installed), A = /* @__PURE__ */ new Set();
      return q.filter((Z) => A.has(Z.package.package_id) ? !1 : (A.add(Z.package.package_id), !0));
    }), N = D(() => {
      if (!c.value) return [];
      const q = c.value.nodes.resolved.filter((Z) => !Z.is_installed), A = /* @__PURE__ */ new Map();
      for (const Z of q) {
        const ge = A.get(Z.package.package_id);
        ge ? ge.node_types_count++ : A.set(Z.package.package_id, {
          package_id: Z.package.package_id,
          title: Z.package.title,
          node_types_count: 1
        });
      }
      return Array.from(A.values());
    }), K = D(() => U.value.filter((q) => !S.value.has(q.package.package_id))), re = D(() => c.value ? c.value.models.resolved.filter((q) => q.match_type === "download_intent").map((q) => ({
      filename: q.reference.widget_value,
      reference: q.reference,
      is_download_intent: !0,
      resolved_model: q.model,
      download_source: q.download_source,
      target_path: q.target_path
    })) : []), X = D(() => {
      if (!c.value) return [];
      const q = c.value.nodes.unresolved.map((Z) => ({
        node_type: Z.reference.node_type,
        reason: Z.reason,
        is_unresolved: !0,
        options: void 0
      })), A = c.value.nodes.ambiguous.map((Z) => ({
        node_type: Z.reference.node_type,
        has_multiple_options: !0,
        options: Z.options.map((ge) => ({
          package_id: ge.package.package_id,
          title: ge.package.title,
          match_confidence: ge.match_confidence,
          match_type: ge.match_type,
          is_installed: ge.is_installed
        }))
      }));
      return [...q, ...A];
    }), se = D(() => {
      if (!c.value) return [];
      const q = c.value.models.unresolved.map((Z) => ({
        filename: Z.reference.widget_value,
        reference: Z.reference,
        reason: Z.reason,
        is_unresolved: !0,
        options: void 0
      })), A = c.value.models.ambiguous.map((Z) => ({
        filename: Z.reference.widget_value,
        reference: Z.reference,
        has_multiple_options: !0,
        options: Z.options.map((ge) => ({
          model: ge.model,
          match_confidence: ge.match_confidence,
          match_type: ge.match_type,
          has_download_source: ge.has_download_source
        }))
      }));
      return [...q, ...A];
    }), O = D(() => {
      const q = se.value, A = re.value.map((Z) => ({
        filename: Z.filename,
        reference: Z.reference,
        is_download_intent: !0,
        resolved_model: Z.resolved_model,
        download_source: Z.download_source,
        target_path: Z.target_path,
        options: void 0
      }));
      return [...q, ...A];
    }), C = D(() => {
      let q = K.value.length;
      for (const A of k.value.values())
        A.action === "install" && q++;
      for (const A of B.value.values())
        A.action === "select" && q++;
      return q;
    }), ae = D(() => {
      let q = 0;
      for (const A of B.value.values())
        A.action === "download" && q++;
      return q;
    }), oe = D(() => {
      let q = 0;
      for (const A of k.value.values())
        A.action === "optional" && q++;
      for (const A of B.value.values())
        A.action === "optional" && q++;
      return q;
    }), xe = D(() => {
      let q = S.value.size;
      for (const A of k.value.values())
        A.action === "skip" && q++;
      for (const A of B.value.values())
        A.action === "skip" && q++;
      for (const A of X.value)
        k.value.has(A.node_type) || q++;
      for (const A of se.value)
        B.value.has(A.filename) || q++;
      return q;
    }), be = D(() => {
      const q = {};
      if (q.analysis = { resolved: 1, total: 1 }, H.value) {
        const A = X.value.length, Z = X.value.filter(
          (ge) => k.value.has(ge.node_type)
        ).length;
        q.nodes = { resolved: Z, total: A };
      }
      if (te.value || W.value) {
        const A = O.value.length, Z = O.value.filter(
          (ge) => B.value.has(ge.filename) || ge.is_download_intent
        ).length;
        q.models = { resolved: Z, total: A };
      }
      if (q.review = { resolved: 1, total: 1 }, b.value === "applying") {
        const A = l.totalFiles || 1, Z = l.completedFiles.length;
        q.applying = { resolved: Z, total: A };
      }
      return q;
    });
    function Le(q) {
      b.value = q;
    }
    function Ae() {
      const q = I.value.findIndex((A) => A.id === b.value);
      q > 0 && (b.value = I.value[q - 1].id);
    }
    function ce() {
      const q = I.value.findIndex((A) => A.id === b.value);
      q < I.value.length - 1 && (b.value = I.value[q + 1].id);
    }
    async function Fe() {
      M.value = !0, z.value = null;
      try {
        c.value = await h(n.workflowName);
      } catch (q) {
        z.value = q instanceof Error ? q.message : "Failed to analyze workflow";
      } finally {
        M.value = !1;
      }
    }
    function ke() {
      x.value.includes("analysis") || x.value.push("analysis"), H.value || T.value ? b.value = "nodes" : te.value || W.value ? b.value = "models" : b.value = "review";
    }
    function Te(q) {
      k.value.set(q, { action: "optional" });
    }
    function Ge(q) {
      k.value.set(q, { action: "skip" });
    }
    function et(q, A) {
      var ge;
      const Z = X.value.find((Ie) => Ie.node_type === q);
      (ge = Z == null ? void 0 : Z.options) != null && ge[A] && k.value.set(q, {
        action: "install",
        package_id: Z.options[A].package_id
      });
    }
    function he(q, A) {
      k.value.set(q, {
        action: "install",
        package_id: A
      });
    }
    function je(q) {
      k.value.delete(q);
    }
    function qe(q) {
      S.value.has(q) ? S.value.delete(q) : S.value.add(q);
    }
    function He(q) {
      B.value.set(q, { action: "optional" });
    }
    function mt(q) {
      B.value.set(q, { action: "skip" });
    }
    function me(q, A) {
      var ge;
      const Z = se.value.find((Ie) => Ie.filename === q);
      (ge = Z == null ? void 0 : Z.options) != null && ge[A] && B.value.set(q, {
        action: "select",
        selected_model: Z.options[A].model
      });
    }
    function De(q, A, Z) {
      B.value.set(q, {
        action: "download",
        url: A,
        target_path: Z
      });
    }
    function vt(q) {
      B.value.delete(q);
    }
    async function lt() {
      var q;
      _.value = !0, z.value = null, v(), l.phase = "resolving", b.value = "applying";
      try {
        const A = await f(n.workflowName, k.value, B.value, S.value);
        A.models_to_download && A.models_to_download.length > 0 && u(n.workflowName, A.models_to_download);
        const Z = [
          ...A.nodes_to_install || [],
          ...K.value.map((Ie) => Ie.package.package_id)
        ];
        l.nodesToInstall = [...new Set(Z)], l.nodesToInstall.length > 0 && await g(n.workflowName), l.phase = "complete", await p();
        const ge = l.installError || ((q = l.nodeInstallProgress) == null ? void 0 : q.completedNodes.some((Ie) => !Ie.success));
        !l.needsRestart && !ge && setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1500);
      } catch (A) {
        z.value = A instanceof Error ? A.message : "Failed to apply resolution", l.error = z.value, l.phase = "error";
      } finally {
        _.value = !1;
      }
    }
    function Se() {
      i("refresh"), i("restart"), i("close");
    }
    async function ft() {
      var A;
      const q = ((A = l.nodeInstallProgress) == null ? void 0 : A.completedNodes.filter((Z) => !Z.success).map((Z) => Z.node_id)) || [];
      if (q.length !== 0) {
        l.phase = "installing", l.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: q.length
        }, l.nodesToInstall = q, l.nodesInstalled = [], l.installError = void 0;
        try {
          await g(n.workflowName), l.phase = "complete";
        } catch (Z) {
          l.error = Z instanceof Error ? Z.message : "Retry failed", l.phase = "error";
        }
      }
    }
    return Ee(Fe), (q, A) => (s(), E(Ye, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: M.value,
      error: z.value || void 0,
      "fixed-height": !0,
      onClose: A[1] || (A[1] = (Z) => i("close"))
    }, {
      body: d(() => [
        M.value && !c.value ? (s(), o("div", Cd, [...A[2] || (A[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : c.value ? (s(), o("div", xd, [
          w(Gl, {
            steps: I.value,
            "current-step": b.value,
            "completed-steps": x.value,
            "step-stats": be.value,
            onStepChange: Le
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          b.value === "analysis" ? (s(), o("div", Sd, [
            e("div", Id, [
              e("div", Ed, [
                A[3] || (A[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", Md, " Found " + a(c.value.stats.total_nodes) + " nodes and " + a(c.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Rd, [
                e("div", zd, [
                  A[12] || (A[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Ld, [
                    R.value > 0 ? (s(), o("div", Td, [
                      A[4] || (A[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Dd, a(R.value), 1),
                      A[5] || (A[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : m("", !0),
                    c.value.stats.packages_needing_installation > 0 ? (s(), o("div", Nd, [
                      A[6] || (A[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Pd, a(c.value.stats.packages_needing_installation), 1),
                      A[7] || (A[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : m("", !0),
                    c.value.nodes.ambiguous.length > 0 ? (s(), o("div", Ud, [
                      A[8] || (A[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Bd, a(c.value.nodes.ambiguous.length), 1),
                      A[9] || (A[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : m("", !0),
                    c.value.nodes.unresolved.length > 0 ? (s(), o("div", Od, [
                      A[10] || (A[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Ad, a(c.value.nodes.unresolved.length), 1),
                      A[11] || (A[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : m("", !0)
                  ])
                ]),
                e("div", Fd, [
                  A[21] || (A[21] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Vd, [
                    e("div", Wd, [
                      A[13] || (A[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Gd, a(c.value.models.resolved.length - c.value.stats.download_intents), 1),
                      A[14] || (A[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    c.value.stats.download_intents > 0 ? (s(), o("div", jd, [
                      A[15] || (A[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", qd, a(c.value.stats.download_intents), 1),
                      A[16] || (A[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : m("", !0),
                    c.value.models.ambiguous.length > 0 ? (s(), o("div", Hd, [
                      A[17] || (A[17] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Kd, a(c.value.models.ambiguous.length), 1),
                      A[18] || (A[18] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : m("", !0),
                    c.value.models.unresolved.length > 0 ? (s(), o("div", Yd, [
                      A[19] || (A[19] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Qd, a(c.value.models.unresolved.length), 1),
                      A[20] || (A[20] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : m("", !0)
                  ])
                ])
              ]),
              V.value ? (s(), o("div", Xd, [
                A[22] || (A[22] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Zd, a(X.value.length + se.value.length) + " items need your input", 1)
              ])) : T.value ? (s(), o("div", Jd, [
                A[23] || (A[23] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", ec, a(c.value.stats.packages_needing_installation) + " package" + a(c.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(c.value.stats.nodes_needing_installation) + " node type" + a(c.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(W.value ? `, ${c.value.stats.download_intents} model${c.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : W.value ? (s(), o("div", tc, [
                A[24] || (A[24] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", sc, a(c.value.stats.download_intents) + " model" + a(c.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (s(), o("div", oc, [...A[25] || (A[25] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : m("", !0),
          b.value === "nodes" ? (s(), E(Ji, {
            key: 1,
            nodes: X.value,
            "node-choices": k.value,
            "auto-resolved-packages": N.value,
            "skipped-packages": S.value,
            onMarkOptional: Te,
            onSkip: Ge,
            onOptionSelected: et,
            onManualEntry: he,
            onClearChoice: je,
            onPackageSkip: qe
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : m("", !0),
          b.value === "models" ? (s(), E(qr, {
            key: 2,
            models: O.value,
            "model-choices": B.value,
            onMarkOptional: He,
            onSkip: mt,
            onOptionSelected: me,
            onDownloadUrl: De,
            onClearChoice: vt
          }, null, 8, ["models", "model-choices"])) : m("", !0),
          b.value === "review" ? (s(), o("div", nc, [
            e("div", ac, [
              A[30] || (A[30] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", lc, [
                e("div", ic, [
                  e("span", rc, a(C.value), 1),
                  A[26] || (A[26] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", dc, [
                  e("span", cc, a(ae.value), 1),
                  A[27] || (A[27] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", uc, [
                  e("span", mc, a(oe.value), 1),
                  A[28] || (A[28] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", vc, [
                  e("span", fc, a(xe.value), 1),
                  A[29] || (A[29] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              N.value.length > 0 ? (s(), o("div", gc, [
                e("h4", hc, "Node Packages (" + a(N.value.length) + ")", 1),
                e("div", pc, [
                  (s(!0), o(F, null, J(N.value, (Z) => (s(), o("div", {
                    key: Z.package_id,
                    class: "review-item"
                  }, [
                    e("code", yc, a(Z.package_id), 1),
                    e("div", wc, [
                      S.value.has(Z.package_id) ? (s(), o("span", bc, "Skipped")) : (s(), o("span", kc, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : m("", !0),
              X.value.length > 0 ? (s(), o("div", _c, [
                e("h4", $c, "Node Choices (" + a(X.value.length) + ")", 1),
                e("div", Cc, [
                  (s(!0), o(F, null, J(X.value, (Z) => {
                    var ge, Ie, Ne, P;
                    return s(), o("div", {
                      key: Z.node_type,
                      class: "review-item"
                    }, [
                      e("code", xc, a(Z.node_type), 1),
                      e("div", Sc, [
                        k.value.has(Z.node_type) ? (s(), o(F, { key: 0 }, [
                          ((ge = k.value.get(Z.node_type)) == null ? void 0 : ge.action) === "install" ? (s(), o("span", Ic, a((Ie = k.value.get(Z.node_type)) == null ? void 0 : Ie.package_id), 1)) : ((Ne = k.value.get(Z.node_type)) == null ? void 0 : Ne.action) === "optional" ? (s(), o("span", Ec, " Optional ")) : ((P = k.value.get(Z.node_type)) == null ? void 0 : P.action) === "skip" ? (s(), o("span", Mc, " Skip ")) : m("", !0)
                        ], 64)) : (s(), o("span", Rc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : m("", !0),
              O.value.length > 0 ? (s(), o("div", zc, [
                e("h4", Lc, "Models (" + a(O.value.length) + ")", 1),
                e("div", Tc, [
                  (s(!0), o(F, null, J(O.value, (Z) => {
                    var ge, Ie, Ne, P, j, de, Qe;
                    return s(), o("div", {
                      key: Z.filename,
                      class: "review-item"
                    }, [
                      e("code", Dc, a(Z.filename), 1),
                      e("div", Nc, [
                        B.value.has(Z.filename) ? (s(), o(F, { key: 0 }, [
                          ((ge = B.value.get(Z.filename)) == null ? void 0 : ge.action) === "select" ? (s(), o("span", Pc, a((Ne = (Ie = B.value.get(Z.filename)) == null ? void 0 : Ie.selected_model) == null ? void 0 : Ne.filename), 1)) : ((P = B.value.get(Z.filename)) == null ? void 0 : P.action) === "download" ? (s(), o("span", Uc, " Download ")) : ((j = B.value.get(Z.filename)) == null ? void 0 : j.action) === "optional" ? (s(), o("span", Bc, " Optional ")) : ((de = B.value.get(Z.filename)) == null ? void 0 : de.action) === "skip" ? (s(), o("span", Oc, " Skip ")) : ((Qe = B.value.get(Z.filename)) == null ? void 0 : Qe.action) === "cancel_download" ? (s(), o("span", Ac, " Cancel Download ")) : m("", !0)
                        ], 64)) : Z.is_download_intent ? (s(), o("span", Fc, " Pending Download ")) : (s(), o("span", Vc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : m("", !0),
              U.value.length === 0 && X.value.length === 0 && O.value.length === 0 ? (s(), o("div", Wc, " No dependencies need resolution. ")) : m("", !0)
            ])
          ])) : m("", !0),
          b.value === "applying" ? (s(), E($d, {
            key: 4,
            progress: ye(l),
            onRestart: Se,
            onRetryFailed: ft
          }, null, 8, ["progress"])) : m("", !0)
        ])) : m("", !0)
      ]),
      footer: d(() => [
        b.value !== "analysis" && b.value !== "applying" ? (s(), E(ie, {
          key: 0,
          variant: "secondary",
          disabled: _.value,
          onClick: Ae
        }, {
          default: d(() => [...A[31] || (A[31] = [
            y(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : m("", !0),
        A[35] || (A[35] = e("div", { class: "footer-spacer" }, null, -1)),
        b.value !== "applying" || ye(l).phase === "complete" || ye(l).phase === "error" ? (s(), E(ie, {
          key: 1,
          variant: "secondary",
          onClick: A[0] || (A[0] = (Z) => i("close"))
        }, {
          default: d(() => [
            y(a(ye(l).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : m("", !0),
        b.value === "analysis" ? (s(), E(ie, {
          key: 2,
          variant: "primary",
          disabled: M.value,
          onClick: ke
        }, {
          default: d(() => [...A[32] || (A[32] = [
            y(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : m("", !0),
        b.value === "nodes" ? (s(), E(ie, {
          key: 3,
          variant: "primary",
          onClick: ce
        }, {
          default: d(() => [
            y(a(te.value || W.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : m("", !0),
        b.value === "models" ? (s(), E(ie, {
          key: 4,
          variant: "primary",
          onClick: ce
        }, {
          default: d(() => [...A[33] || (A[33] = [
            y(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : m("", !0),
        b.value === "review" ? (s(), E(ie, {
          key: 5,
          variant: "primary",
          disabled: _.value,
          loading: _.value,
          onClick: lt
        }, {
          default: d(() => [...A[34] || (A[34] = [
            y(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : m("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), jc = /* @__PURE__ */ Q(Gc, [["__scopeId", "data-v-0d3f93e6"]]), qc = { class: "search-input-wrapper" }, Hc = ["value", "placeholder"], Kc = /* @__PURE__ */ Y({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t, { emit: r }) {
    const n = t, i = r, h = $(null);
    let f;
    function g(l) {
      const v = l.target.value;
      n.debounce > 0 ? (clearTimeout(f), f = window.setTimeout(() => {
        i("update:modelValue", v);
      }, n.debounce)) : i("update:modelValue", v);
    }
    function u() {
      var l;
      i("update:modelValue", ""), i("clear"), (l = h.value) == null || l.focus();
    }
    return Ee(() => {
      n.autoFocus && h.value && h.value.focus();
    }), (l, v) => (s(), o("div", qc, [
      e("input", {
        ref_key: "inputRef",
        ref: h,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: g,
        onKeyup: ut(u, ["escape"])
      }, null, 40, Hc),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : m("", !0)
    ]));
  }
}), Yc = /* @__PURE__ */ Q(Kc, [["__scopeId", "data-v-266f857a"]]), Qc = { class: "search-bar" }, Xc = /* @__PURE__ */ Y({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (r, n) => (s(), o("div", Qc, [
      w(Yc, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => r.$emit("update:modelValue", i)),
        onClear: n[1] || (n[1] = (i) => r.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), _t = /* @__PURE__ */ Q(Xc, [["__scopeId", "data-v-3d51bbfd"]]), Zc = { class: "section-group" }, Jc = {
  key: 0,
  class: "section-content"
}, eu = /* @__PURE__ */ Y({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: r }) {
    const n = t, i = r, h = $(n.initiallyExpanded);
    function f() {
      n.collapsible && (h.value = !h.value, i("toggle", h.value));
    }
    return (g, u) => (s(), o("section", Zc, [
      w(Ke, {
        count: t.count,
        clickable: t.collapsible,
        expanded: h.value,
        onClick: f
      }, {
        default: d(() => [
          y(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || h.value ? (s(), o("div", Jc, [
        pe(g.$slots, "default", {}, void 0, !0)
      ])) : m("", !0)
    ]));
  }
}), Me = /* @__PURE__ */ Q(eu, [["__scopeId", "data-v-c48e33ed"]]), tu = { class: "item-header" }, su = {
  key: 0,
  class: "item-icon"
}, ou = { class: "item-info" }, nu = {
  key: 0,
  class: "item-title"
}, au = {
  key: 1,
  class: "item-subtitle"
}, lu = {
  key: 0,
  class: "item-details"
}, iu = {
  key: 1,
  class: "item-actions"
}, ru = /* @__PURE__ */ Y({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const n = t, i = D(() => n.status ? `status-${n.status}` : "");
    return (h, f) => (s(), o("div", {
      class: ne(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: f[0] || (f[0] = (g) => t.clickable && h.$emit("click"))
    }, [
      e("div", tu, [
        h.$slots.icon ? (s(), o("span", su, [
          pe(h.$slots, "icon", {}, void 0, !0)
        ])) : m("", !0),
        e("div", ou, [
          h.$slots.title ? (s(), o("div", nu, [
            pe(h.$slots, "title", {}, void 0, !0)
          ])) : m("", !0),
          h.$slots.subtitle ? (s(), o("div", au, [
            pe(h.$slots, "subtitle", {}, void 0, !0)
          ])) : m("", !0)
        ])
      ]),
      h.$slots.details ? (s(), o("div", lu, [
        pe(h.$slots, "details", {}, void 0, !0)
      ])) : m("", !0),
      h.$slots.actions ? (s(), o("div", iu, [
        pe(h.$slots, "actions", {}, void 0, !0)
      ])) : m("", !0)
    ], 2));
  }
}), We = /* @__PURE__ */ Q(ru, [["__scopeId", "data-v-cc435e0e"]]), du = { class: "loading-state" }, cu = { class: "loading-message" }, uu = /* @__PURE__ */ Y({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (r, n) => (s(), o("div", du, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", cu, a(t.message), 1)
    ]));
  }
}), dt = /* @__PURE__ */ Q(uu, [["__scopeId", "data-v-ad8436c9"]]), mu = { class: "error-state" }, vu = { class: "error-message" }, fu = /* @__PURE__ */ Y({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (r, n) => (s(), o("div", mu, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", vu, a(t.message), 1),
      t.retry ? (s(), E(ee, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => r.$emit("retry"))
      }, {
        default: d(() => [...n[1] || (n[1] = [
          y(" Retry ", -1)
        ])]),
        _: 1
      })) : m("", !0)
    ]));
  }
}), ct = /* @__PURE__ */ Q(fu, [["__scopeId", "data-v-5397be48"]]), gu = /* @__PURE__ */ Y({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: r, emit: n }) {
    const i = n, { getWorkflows: h } = ze();
    ps();
    const f = $([]), g = $(!1), u = $(null), l = $(""), v = $(!0), p = $(!1), c = $(!1), M = $(!1), _ = $(null), z = D(
      () => f.value.filter((se) => se.status === "broken")
    ), b = D(
      () => f.value.filter((se) => se.status === "new")
    ), x = D(
      () => f.value.filter((se) => se.status === "modified")
    ), k = D(
      () => f.value.filter((se) => se.status === "synced")
    ), B = D(() => {
      if (!l.value.trim()) return f.value;
      const se = l.value.toLowerCase();
      return f.value.filter((O) => O.name.toLowerCase().includes(se));
    }), S = D(
      () => z.value.filter(
        (se) => !l.value.trim() || se.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), I = D(
      () => b.value.filter(
        (se) => !l.value.trim() || se.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), V = D(
      () => x.value.filter(
        (se) => !l.value.trim() || se.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), H = D(
      () => k.value.filter(
        (se) => !l.value.trim() || se.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), te = D(
      () => p.value ? H.value : H.value.slice(0, 5)
    );
    async function W(se = !1) {
      g.value = !0, u.value = null;
      try {
        f.value = await h(se);
      } catch (O) {
        u.value = O instanceof Error ? O.message : "Failed to load workflows";
      } finally {
        g.value = !1;
      }
    }
    r({ loadWorkflows: W });
    function T(se) {
      _.value = se, c.value = !0;
    }
    function R(se) {
      _.value = se, M.value = !0;
    }
    function U() {
      alert("Bulk resolution not yet implemented");
    }
    function N() {
      i("refresh");
    }
    async function K() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function re(se) {
      const O = [];
      return se.missing_nodes > 0 && O.push(`${se.missing_nodes} missing node${se.missing_nodes > 1 ? "s" : ""}`), se.missing_models > 0 && O.push(`${se.missing_models} missing model${se.missing_models > 1 ? "s" : ""}`), se.pending_downloads && se.pending_downloads > 0 && O.push(`${se.pending_downloads} pending download${se.pending_downloads > 1 ? "s" : ""}`), O.length > 0 ? O.join(", ") : "Has issues";
    }
    function X(se) {
      const O = se.sync_state === "new" ? "New" : se.sync_state === "modified" ? "Modified" : se.sync_state === "synced" ? "Synced" : se.sync_state;
      return se.has_path_sync_issues && se.models_needing_path_sync && se.models_needing_path_sync > 0 ? `${se.models_needing_path_sync} model path${se.models_needing_path_sync > 1 ? "s" : ""} need${se.models_needing_path_sync === 1 ? "s" : ""} sync` : O || "Unknown";
    }
    return Ee(W), (se, O) => (s(), o(F, null, [
      w(Be, null, {
        header: d(() => [
          w(Oe, { title: "WORKFLOWS" }, {
            actions: d(() => [
              z.value.length > 0 ? (s(), E(ee, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: U
              }, {
                default: d(() => [...O[8] || (O[8] = [
                  y(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : m("", !0)
            ]),
            _: 1
          })
        ]),
        search: d(() => [
          w(_t, {
            modelValue: l.value,
            "onUpdate:modelValue": O[0] || (O[0] = (C) => l.value = C),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: d(() => [
          g.value ? (s(), E(dt, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (s(), E(ct, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: W
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            S.value.length ? (s(), E(Me, {
              key: 0,
              title: "BROKEN",
              count: S.value.length
            }, {
              default: d(() => [
                (s(!0), o(F, null, J(S.value, (C) => (s(), E(We, {
                  key: C.name,
                  status: "broken"
                }, {
                  icon: d(() => [...O[9] || (O[9] = [
                    y("⚠", -1)
                  ])]),
                  title: d(() => [
                    y(a(C.name), 1)
                  ]),
                  subtitle: d(() => [
                    y(a(re(C)), 1)
                  ]),
                  actions: d(() => [
                    w(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ae) => R(C.name)
                    }, {
                      default: d(() => [...O[10] || (O[10] = [
                        y(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => T(C.name)
                    }, {
                      default: d(() => [...O[11] || (O[11] = [
                        y(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            I.value.length ? (s(), E(Me, {
              key: 1,
              title: "NEW",
              count: I.value.length
            }, {
              default: d(() => [
                (s(!0), o(F, null, J(I.value, (C) => (s(), E(We, {
                  key: C.name,
                  status: C.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: d(() => [
                    y(a(C.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: d(() => [
                    y(a(C.name), 1)
                  ]),
                  subtitle: d(() => [
                    y(a(X(C)), 1)
                  ]),
                  actions: d(() => [
                    w(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => T(C.name)
                    }, {
                      default: d(() => [...O[12] || (O[12] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            V.value.length ? (s(), E(Me, {
              key: 2,
              title: "MODIFIED",
              count: V.value.length
            }, {
              default: d(() => [
                (s(!0), o(F, null, J(V.value, (C) => (s(), E(We, {
                  key: C.name,
                  status: C.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: d(() => [...O[13] || (O[13] = [
                    y("⚡", -1)
                  ])]),
                  title: d(() => [
                    y(a(C.name), 1)
                  ]),
                  subtitle: d(() => [
                    y(a(X(C)), 1)
                  ]),
                  actions: d(() => [
                    w(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => T(C.name)
                    }, {
                      default: d(() => [...O[14] || (O[14] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            H.value.length ? (s(), E(Me, {
              key: 3,
              title: "SYNCED",
              count: H.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: O[2] || (O[2] = (C) => v.value = C)
            }, {
              default: d(() => [
                (s(!0), o(F, null, J(te.value, (C) => (s(), E(We, {
                  key: C.name,
                  status: C.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: d(() => [
                    y(a(C.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: d(() => [
                    y(a(C.name), 1)
                  ]),
                  subtitle: d(() => [
                    y(a(X(C)), 1)
                  ]),
                  actions: d(() => [
                    w(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => T(C.name)
                    }, {
                      default: d(() => [...O[15] || (O[15] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !p.value && H.value.length > 5 ? (s(), E(ee, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: O[1] || (O[1] = (C) => p.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: d(() => [
                    y(" View all " + a(H.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : m("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : m("", !0),
            B.value.length ? m("", !0) : (s(), E(Je, {
              key: 4,
              icon: "📭",
              message: l.value ? `No workflows match '${l.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      c.value && _.value ? (s(), E(zl, {
        key: 0,
        "workflow-name": _.value,
        onClose: O[3] || (O[3] = (C) => c.value = !1),
        onResolve: O[4] || (O[4] = (C) => R(_.value)),
        onRefresh: O[5] || (O[5] = (C) => i("refresh"))
      }, null, 8, ["workflow-name"])) : m("", !0),
      M.value && _.value ? (s(), E(jc, {
        key: 1,
        "workflow-name": _.value,
        onClose: O[6] || (O[6] = (C) => M.value = !1),
        onInstall: N,
        onRefresh: O[7] || (O[7] = (C) => i("refresh")),
        onRestart: K
      }, null, 8, ["workflow-name"])) : m("", !0)
    ], 64));
  }
}), hu = /* @__PURE__ */ Q(gu, [["__scopeId", "data-v-b7939cb4"]]), pu = /* @__PURE__ */ Y({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (r, n) => (s(), o("div", {
      class: ne(["summary-bar", t.variant])
    }, [
      pe(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), $t = /* @__PURE__ */ Q(pu, [["__scopeId", "data-v-ccb7816e"]]), yu = {
  key: 0,
  class: "model-details"
}, wu = { class: "detail-section" }, ku = { class: "detail-row" }, bu = { class: "detail-value mono" }, _u = { class: "detail-row" }, $u = { class: "detail-value mono" }, Cu = { class: "detail-row" }, xu = { class: "detail-value mono" }, Su = { class: "detail-row" }, Iu = { class: "detail-value" }, Eu = { class: "detail-row" }, Mu = { class: "detail-value" }, Ru = { class: "detail-row" }, zu = { class: "detail-value" }, Lu = { class: "detail-section" }, Tu = { class: "section-header" }, Du = {
  key: 0,
  class: "locations-list"
}, Nu = { class: "location-path mono" }, Pu = {
  key: 0,
  class: "location-modified"
}, Uu = ["onClick"], Bu = {
  key: 1,
  class: "empty-state"
}, Ou = { class: "detail-section" }, Au = { class: "section-header" }, Fu = {
  key: 0,
  class: "sources-list"
}, Vu = { class: "source-type" }, Wu = ["href"], Gu = ["disabled", "onClick"], ju = {
  key: 1,
  class: "empty-state"
}, qu = { class: "add-source-form" }, Hu = ["disabled"], Ku = {
  key: 2,
  class: "source-error"
}, Yu = {
  key: 3,
  class: "source-success"
}, Qu = /* @__PURE__ */ Y({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: r }) {
    const n = t, { getModelDetails: i, addModelSource: h, removeModelSource: f, openFileLocation: g } = ze(), u = $(null), l = $(!0), v = $(null), p = $(""), c = $(!1), M = $(null), _ = $(null), z = $(null), b = $(null);
    let x = null;
    function k(W, T = "success", R = 2e3) {
      x && clearTimeout(x), b.value = { message: W, type: T }, x = setTimeout(() => {
        b.value = null;
      }, R);
    }
    function B(W) {
      if (!W) return "Unknown";
      const T = 1024 * 1024 * 1024, R = 1024 * 1024;
      return W >= T ? `${(W / T).toFixed(1)} GB` : W >= R ? `${(W / R).toFixed(0)} MB` : `${(W / 1024).toFixed(0)} KB`;
    }
    function S(W) {
      navigator.clipboard.writeText(W), k("Copied to clipboard!");
    }
    async function I(W) {
      try {
        await g(W), k("Opening file location...");
      } catch {
        k("Failed to open location", "error");
      }
    }
    async function V() {
      if (!(!p.value.trim() || !u.value)) {
        c.value = !0, _.value = null, z.value = null;
        try {
          await h(u.value.hash, p.value.trim()), z.value = "Source added successfully!", p.value = "", await te();
        } catch (W) {
          _.value = W instanceof Error ? W.message : "Failed to add source";
        } finally {
          c.value = !1;
        }
      }
    }
    async function H(W) {
      if (u.value) {
        M.value = W, _.value = null, z.value = null;
        try {
          await f(u.value.hash, W), k("Source removed"), await te();
        } catch (T) {
          _.value = T instanceof Error ? T.message : "Failed to remove source";
        } finally {
          M.value = null;
        }
      }
    }
    async function te() {
      l.value = !0, v.value = null;
      try {
        u.value = await i(n.identifier);
      } catch (W) {
        v.value = W instanceof Error ? W.message : "Failed to load model details";
      } finally {
        l.value = !1;
      }
    }
    return Ee(te), (W, T) => {
      var R;
      return s(), o(F, null, [
        w(Ye, {
          title: `Model Details: ${((R = u.value) == null ? void 0 : R.filename) || "Loading..."}`,
          size: "lg",
          loading: l.value,
          error: v.value,
          onClose: T[5] || (T[5] = (U) => W.$emit("close"))
        }, {
          body: d(() => {
            var U, N, K, re;
            return [
              u.value ? (s(), o("div", yu, [
                e("section", wu, [
                  e("div", ku, [
                    T[6] || (T[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", bu, a(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[0] || (T[0] = (X) => S(u.value.hash))
                    }, "Copy")) : m("", !0)
                  ]),
                  e("div", _u, [
                    T[7] || (T[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", $u, a(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[1] || (T[1] = (X) => S(u.value.blake3))
                    }, "Copy")) : m("", !0)
                  ]),
                  e("div", Cu, [
                    T[8] || (T[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", xu, a(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[2] || (T[2] = (X) => S(u.value.sha256))
                    }, "Copy")) : m("", !0)
                  ]),
                  e("div", Su, [
                    T[9] || (T[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Iu, a(B(u.value.size)), 1)
                  ]),
                  e("div", Eu, [
                    T[10] || (T[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Mu, a(u.value.category), 1)
                  ]),
                  e("div", Ru, [
                    T[11] || (T[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", zu, a(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Lu, [
                  e("h4", Tu, "Locations (" + a(((U = u.value.locations) == null ? void 0 : U.length) || 0) + ")", 1),
                  (N = u.value.locations) != null && N.length ? (s(), o("div", Du, [
                    (s(!0), o(F, null, J(u.value.locations, (X, se) => (s(), o("div", {
                      key: se,
                      class: "location-item"
                    }, [
                      e("span", Nu, a(X.path), 1),
                      X.modified ? (s(), o("span", Pu, "Modified: " + a(X.modified), 1)) : m("", !0),
                      X.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (O) => I(X.path)
                      }, " Open File Location ", 8, Uu)) : m("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", Bu, "No locations found"))
                ]),
                e("section", Ou, [
                  e("h4", Au, "Download Sources (" + a(((K = u.value.sources) == null ? void 0 : K.length) || 0) + ")", 1),
                  (re = u.value.sources) != null && re.length ? (s(), o("div", Fu, [
                    (s(!0), o(F, null, J(u.value.sources, (X, se) => (s(), o("div", {
                      key: se,
                      class: "source-item"
                    }, [
                      e("span", Vu, a(X.type) + ":", 1),
                      e("a", {
                        href: X.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(X.url), 9, Wu),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: M.value === X.url,
                        onClick: (O) => H(X.url)
                      }, a(M.value === X.url ? "..." : "×"), 9, Gu)
                    ]))), 128))
                  ])) : (s(), o("div", ju, " No download sources configured ")),
                  e("div", qu, [
                    ot(e("input", {
                      "onUpdate:modelValue": T[3] || (T[3] = (X) => p.value = X),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [ms, p.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !p.value.trim() || c.value,
                      onClick: V
                    }, a(c.value ? "Adding..." : "Add Source"), 9, Hu)
                  ]),
                  _.value ? (s(), o("p", Ku, a(_.value), 1)) : m("", !0),
                  z.value ? (s(), o("p", Yu, a(z.value), 1)) : m("", !0)
                ])
              ])) : m("", !0)
            ];
          }),
          footer: d(() => [
            e("button", {
              class: "btn-secondary",
              onClick: T[4] || (T[4] = (U) => W.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), E(Re, { to: "body" }, [
          b.value ? (s(), o("div", {
            key: 0,
            class: ne(["toast", b.value.type])
          }, a(b.value.message), 3)) : m("", !0)
        ]))
      ], 64);
    };
  }
}), ts = /* @__PURE__ */ Q(Qu, [["__scopeId", "data-v-f15cbb56"]]), Xu = /* @__PURE__ */ Y({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: r }) {
    const n = r, { getEnvironmentModels: i, getStatus: h } = ze(), f = $([]), g = $([]), u = $("production"), l = $(!1), v = $(null), p = $(""), c = $(!1), M = $(null);
    function _() {
      c.value = !1, n("navigate", "model-index");
    }
    const z = D(
      () => f.value.reduce((te, W) => te + (W.size || 0), 0)
    ), b = D(() => {
      if (!p.value.trim()) return f.value;
      const te = p.value.toLowerCase();
      return f.value.filter((W) => W.filename.toLowerCase().includes(te));
    }), x = D(() => {
      if (!p.value.trim()) return g.value;
      const te = p.value.toLowerCase();
      return g.value.filter((W) => W.filename.toLowerCase().includes(te));
    }), k = D(() => {
      const te = {};
      for (const T of b.value) {
        const R = T.type || "other";
        te[R] || (te[R] = []), te[R].push(T);
      }
      const W = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(te).sort(([T], [R]) => {
        const U = W.indexOf(T), N = W.indexOf(R);
        return U >= 0 && N >= 0 ? U - N : U >= 0 ? -1 : N >= 0 ? 1 : T.localeCompare(R);
      }).map(([T, R]) => ({ type: T, models: R }));
    });
    function B(te) {
      if (!te) return "Unknown";
      const W = te / (1024 * 1024);
      return W >= 1024 ? `${(W / 1024).toFixed(1)} GB` : `${W.toFixed(0)} MB`;
    }
    function S(te) {
      M.value = te.hash || te.filename;
    }
    function I(te) {
      n("navigate", "model-index");
    }
    function V(te) {
      alert(`Download functionality not yet implemented for ${te}`);
    }
    async function H() {
      l.value = !0, v.value = null;
      try {
        const te = await i();
        f.value = te, g.value = [];
        const W = await h();
        u.value = W.environment || "production";
      } catch (te) {
        v.value = te instanceof Error ? te.message : "Failed to load models";
      } finally {
        l.value = !1;
      }
    }
    return Ee(H), (te, W) => (s(), o(F, null, [
      w(Be, null, {
        header: d(() => [
          w(Oe, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: W[0] || (W[0] = (T) => c.value = !0)
          })
        ]),
        search: d(() => [
          w(_t, {
            modelValue: p.value,
            "onUpdate:modelValue": W[1] || (W[1] = (T) => p.value = T),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: d(() => [
          l.value ? (s(), E(dt, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (s(), E(ct, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: H
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            f.value.length ? (s(), E($t, {
              key: 0,
              variant: "compact"
            }, {
              default: d(() => [
                y(" Total: " + a(f.value.length) + " models • " + a(B(z.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : m("", !0),
            (s(!0), o(F, null, J(k.value, (T) => (s(), E(Me, {
              key: T.type,
              title: T.type.toUpperCase(),
              count: T.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: d(() => [
                (s(!0), o(F, null, J(T.models, (R) => (s(), E(We, {
                  key: R.hash || R.filename,
                  status: "synced"
                }, {
                  icon: d(() => [...W[4] || (W[4] = [
                    y("📦", -1)
                  ])]),
                  title: d(() => [
                    y(a(R.filename), 1)
                  ]),
                  subtitle: d(() => [
                    y(a(B(R.size)), 1)
                  ]),
                  details: d(() => [
                    w(Ce, {
                      label: "Used by:",
                      value: (R.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    w(Ce, {
                      label: "Path:",
                      value: R.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: d(() => [
                    w(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => S(R)
                    }, {
                      default: d(() => [...W[5] || (W[5] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            x.value.length ? (s(), E(Me, {
              key: 1,
              title: "MISSING",
              count: x.value.length
            }, {
              default: d(() => [
                (s(!0), o(F, null, J(x.value, (T) => (s(), E(We, {
                  key: T.filename,
                  status: "broken"
                }, {
                  icon: d(() => [...W[6] || (W[6] = [
                    y("⚠", -1)
                  ])]),
                  title: d(() => [
                    y(a(T.filename), 1)
                  ]),
                  subtitle: d(() => [...W[7] || (W[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: d(() => {
                    var R;
                    return [
                      w(Ce, {
                        label: "Required by:",
                        value: ((R = T.workflow_names) == null ? void 0 : R.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: d(() => [
                    w(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (R) => V(T.filename)
                    }, {
                      default: d(() => [...W[8] || (W[8] = [
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (R) => I(T.filename)
                    }, {
                      default: d(() => [...W[9] || (W[9] = [
                        y(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            !b.value.length && !x.value.length ? (s(), E(Je, {
              key: 2,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : m("", !0)
          ], 64))
        ]),
        _: 1
      }),
      w(at, {
        show: c.value,
        title: "About Environment Models",
        onClose: W[2] || (W[2] = (T) => c.value = !1)
      }, {
        content: d(() => [
          e("p", null, [
            W[10] || (W[10] = y(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(u.value) + '"', 1),
            W[11] || (W[11] = y(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: d(() => [
          w(ee, {
            variant: "primary",
            onClick: _
          }, {
            default: d(() => [...W[12] || (W[12] = [
              y(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      M.value ? (s(), E(ts, {
        key: 0,
        identifier: M.value,
        onClose: W[3] || (W[3] = (T) => M.value = null)
      }, null, 8, ["identifier"])) : m("", !0)
    ], 64));
  }
}), Zu = /* @__PURE__ */ Q(Xu, [["__scopeId", "data-v-cb4f12b3"]]), Ju = {
  key: 0,
  class: "indexing-progress"
}, em = { class: "progress-info" }, tm = { class: "progress-label" }, sm = { class: "progress-count" }, om = { class: "progress-bar" }, nm = { class: "modal-content" }, am = { class: "modal-header" }, lm = { class: "modal-body" }, im = { class: "input-group" }, rm = { class: "current-path" }, dm = { class: "input-group" }, cm = { class: "modal-footer" }, um = { class: "modal-content" }, mm = { class: "modal-header" }, vm = { class: "modal-body" }, fm = { class: "input-group" }, gm = { class: "input-group" }, hm = { class: "modal-footer" }, pm = /* @__PURE__ */ Y({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: r }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: i,
      getModelsDirectory: h,
      setModelsDirectory: f
    } = ze(), { addToQueue: g } = Dt(), u = r, l = $([]), v = $(!1), p = $(!1), c = $(null), M = $(""), _ = $(!1), z = $(null), b = $(!1), x = $(null), k = $(""), B = $(!1), S = $(!1), I = $(""), V = $(""), H = $(null), te = D(
      () => l.value.reduce((O, C) => O + (C.size || 0), 0)
    ), W = D(() => {
      if (!M.value.trim()) return l.value;
      const O = M.value.toLowerCase();
      return l.value.filter((C) => {
        const ae = C, oe = C.sha256 || ae.sha256_hash || "";
        return C.filename.toLowerCase().includes(O) || oe.toLowerCase().includes(O);
      });
    }), T = D(() => {
      const O = {};
      for (const ae of W.value) {
        const oe = ae.type || "other";
        O[oe] || (O[oe] = []), O[oe].push(ae);
      }
      const C = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(O).sort(([ae], [oe]) => {
        const xe = C.indexOf(ae), be = C.indexOf(oe);
        return xe >= 0 && be >= 0 ? xe - be : xe >= 0 ? -1 : be >= 0 ? 1 : ae.localeCompare(oe);
      }).map(([ae, oe]) => ({ type: ae, models: oe }));
    });
    function R(O) {
      if (!O) return "Unknown";
      const C = 1024 * 1024 * 1024, ae = 1024 * 1024;
      return O >= C ? `${(O / C).toFixed(1)} GB` : O >= ae ? `${(O / ae).toFixed(0)} MB` : `${(O / 1024).toFixed(0)} KB`;
    }
    function U(O) {
      z.value = O.hash || O.filename;
    }
    async function N() {
      p.value = !0, c.value = null;
      try {
        const O = await i();
        await X(), O.changes > 0 && console.log(`Scan complete: ${O.changes} changes detected`);
      } catch (O) {
        c.value = O instanceof Error ? O.message : "Failed to scan models";
      } finally {
        p.value = !1;
      }
    }
    async function K() {
      if (k.value.trim()) {
        B.value = !0, c.value = null;
        try {
          const O = await f(k.value.trim());
          x.value = O.path, b.value = !1, k.value = "", await X(), console.log(`Directory changed: ${O.models_indexed} models indexed`), u("refresh");
        } catch (O) {
          c.value = O instanceof Error ? O.message : "Failed to change directory";
        } finally {
          B.value = !1;
        }
      }
    }
    function re() {
      if (!I.value.trim() || !V.value.trim()) return;
      const O = V.value.split("/").pop() || "model.safetensors";
      g([{
        workflow: "__manual__",
        filename: O,
        url: I.value.trim(),
        targetPath: V.value.trim()
      }]), I.value = "", V.value = "", S.value = !1;
    }
    async function X() {
      v.value = !0, c.value = null;
      try {
        l.value = await n();
      } catch (O) {
        c.value = O instanceof Error ? O.message : "Failed to load workspace models";
      } finally {
        v.value = !1;
      }
    }
    async function se() {
      try {
        const O = await h();
        x.value = O.path;
      } catch {
      }
    }
    return Ee(() => {
      X(), se();
    }), (O, C) => (s(), o(F, null, [
      w(Be, null, {
        header: d(() => [
          w(Oe, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: C[2] || (C[2] = (ae) => _.value = !0)
          }, {
            actions: d(() => [
              w(ee, {
                variant: "primary",
                size: "sm",
                disabled: p.value,
                onClick: N
              }, {
                default: d(() => [
                  y(a(p.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              w(ee, {
                variant: "primary",
                size: "sm",
                onClick: C[0] || (C[0] = (ae) => b.value = !0)
              }, {
                default: d(() => [...C[15] || (C[15] = [
                  y(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              w(ee, {
                variant: "primary",
                size: "sm",
                onClick: C[1] || (C[1] = (ae) => S.value = !0)
              }, {
                default: d(() => [...C[16] || (C[16] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  y(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: d(() => [
          H.value ? (s(), o("div", Ju, [
            e("div", em, [
              e("span", tm, a(H.value.message), 1),
              e("span", sm, a(H.value.current) + "/" + a(H.value.total), 1)
            ]),
            e("div", om, [
              e("div", {
                class: "progress-fill",
                style: nt({ width: `${H.value.current / H.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : m("", !0),
          w(_t, {
            modelValue: M.value,
            "onUpdate:modelValue": C[3] || (C[3] = (ae) => M.value = ae),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: d(() => [
          v.value || H.value ? (s(), E(dt, {
            key: 0,
            message: H.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : c.value ? (s(), E(ct, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: X
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            l.value.length ? (s(), E($t, {
              key: 0,
              variant: "compact"
            }, {
              default: d(() => [
                y(" Total: " + a(l.value.length) + " models • " + a(R(te.value)), 1)
              ]),
              _: 1
            })) : m("", !0),
            (s(!0), o(F, null, J(T.value, (ae) => (s(), E(Me, {
              key: ae.type,
              title: ae.type.toUpperCase(),
              count: ae.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: d(() => [
                (s(!0), o(F, null, J(ae.models, (oe) => (s(), E(We, {
                  key: oe.sha256 || oe.filename,
                  status: "synced"
                }, {
                  icon: d(() => [...C[17] || (C[17] = [
                    y("📦", -1)
                  ])]),
                  title: d(() => [
                    y(a(oe.filename), 1)
                  ]),
                  subtitle: d(() => [
                    y(a(R(oe.size)), 1)
                  ]),
                  details: d(() => [
                    w(Ce, {
                      label: "Hash:",
                      value: oe.hash ? oe.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: d(() => [
                    w(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (xe) => U(oe)
                    }, {
                      default: d(() => [...C[18] || (C[18] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            W.value.length ? m("", !0) : (s(), E(Je, {
              key: 1,
              icon: "📭",
              message: M.value ? `No models match '${M.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      w(at, {
        show: _.value,
        title: "About Workspace Model Index",
        onClose: C[4] || (C[4] = (ae) => _.value = !1)
      }, {
        content: d(() => [...C[19] || (C[19] = [
          e("p", null, [
            y(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            y(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      z.value ? (s(), E(ts, {
        key: 0,
        identifier: z.value,
        onClose: C[5] || (C[5] = (ae) => z.value = null)
      }, null, 8, ["identifier"])) : m("", !0),
      (s(), E(Re, { to: "body" }, [
        b.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[9] || (C[9] = $e((ae) => b.value = !1, ["self"]))
        }, [
          e("div", nm, [
            e("div", am, [
              C[20] || (C[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: C[6] || (C[6] = (ae) => b.value = !1)
              }, "✕")
            ]),
            e("div", lm, [
              e("div", im, [
                C[21] || (C[21] = e("label", null, "Current Directory", -1)),
                e("code", rm, a(x.value || "Not set"), 1)
              ]),
              e("div", dm, [
                C[22] || (C[22] = e("label", null, "New Directory Path", -1)),
                w(Ze, {
                  modelValue: k.value,
                  "onUpdate:modelValue": C[7] || (C[7] = (ae) => k.value = ae),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              C[23] || (C[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", cm, [
              w(ie, {
                variant: "secondary",
                onClick: C[8] || (C[8] = (ae) => b.value = !1)
              }, {
                default: d(() => [...C[24] || (C[24] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              w(ie, {
                variant: "primary",
                disabled: !k.value.trim() || B.value,
                loading: B.value,
                onClick: K
              }, {
                default: d(() => [
                  y(a(B.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : m("", !0)
      ])),
      (s(), E(Re, { to: "body" }, [
        S.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[14] || (C[14] = $e((ae) => S.value = !1, ["self"]))
        }, [
          e("div", um, [
            e("div", mm, [
              C[25] || (C[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: C[10] || (C[10] = (ae) => S.value = !1)
              }, "✕")
            ]),
            e("div", vm, [
              e("div", fm, [
                C[26] || (C[26] = e("label", null, "Download URL", -1)),
                w(Ze, {
                  modelValue: I.value,
                  "onUpdate:modelValue": C[11] || (C[11] = (ae) => I.value = ae),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", gm, [
                C[27] || (C[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                w(Ze, {
                  modelValue: V.value,
                  "onUpdate:modelValue": C[12] || (C[12] = (ae) => V.value = ae),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              C[28] || (C[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", hm, [
              w(ie, {
                variant: "secondary",
                onClick: C[13] || (C[13] = (ae) => S.value = !1)
              }, {
                default: d(() => [...C[29] || (C[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              w(ie, {
                variant: "primary",
                disabled: !I.value.trim() || !V.value.trim(),
                onClick: re
              }, {
                default: d(() => [...C[30] || (C[30] = [
                  y(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : m("", !0)
      ]))
    ], 64));
  }
}), ym = /* @__PURE__ */ Q(pm, [["__scopeId", "data-v-73b78d84"]]), wm = { class: "node-details" }, km = { class: "status-row" }, bm = {
  key: 0,
  class: "detail-row"
}, _m = { class: "value" }, $m = { class: "detail-row" }, Cm = { class: "value" }, xm = {
  key: 1,
  class: "detail-row"
}, Sm = { class: "value mono" }, Im = {
  key: 2,
  class: "detail-row"
}, Em = ["href"], Mm = {
  key: 3,
  class: "detail-row"
}, Rm = { class: "value mono small" }, zm = { class: "detail-row" }, Lm = {
  key: 0,
  class: "value"
}, Tm = {
  key: 1,
  class: "workflow-list"
}, Dm = /* @__PURE__ */ Y({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: r }) {
    const n = t, i = r, h = D(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), f = D(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), g = D(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (u, l) => (s(), E(Ye, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: l[1] || (l[1] = (v) => i("close"))
    }, {
      body: d(() => [
        e("div", wm, [
          e("div", km, [
            l[2] || (l[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: ne(["status-badge", h.value])
            }, a(f.value), 3)
          ]),
          t.node.version ? (s(), o("div", bm, [
            l[3] || (l[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", _m, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : m("", !0),
          e("div", $m, [
            l[4] || (l[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", Cm, a(g.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", xm, [
            l[5] || (l[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", Sm, a(t.node.registry_id), 1)
          ])) : m("", !0),
          t.node.repository ? (s(), o("div", Im, [
            l[7] || (l[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              y(a(t.node.repository) + " ", 1),
              l[6] || (l[6] = e("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                e("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, Em)
          ])) : m("", !0),
          t.node.download_url ? (s(), o("div", Mm, [
            l[8] || (l[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", Rm, a(t.node.download_url), 1)
          ])) : m("", !0),
          l[10] || (l[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", zm, [
            l[9] || (l[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", Lm, " Not used in any workflows ")) : (s(), o("div", Tm, [
              (s(!0), o(F, null, J(t.node.used_in_workflows, (v) => (s(), o("span", {
                key: v,
                class: "workflow-tag"
              }, a(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: d(() => [
        w(ie, {
          variant: "secondary",
          onClick: l[0] || (l[0] = (v) => i("close"))
        }, {
          default: d(() => [...l[11] || (l[11] = [
            y(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Nm = /* @__PURE__ */ Q(Dm, [["__scopeId", "data-v-b342f626"]]), Pm = { key: 0 }, Um = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Bm = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Om = /* @__PURE__ */ Y({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: r }) {
    const n = r, { getNodes: i, trackNodeAsDev: h, installNode: f, uninstallNode: g } = ze(), u = $({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), l = $(!1), v = $(null), p = $(""), c = $(!1), M = $(null), _ = D(() => {
      if (!p.value.trim()) return u.value.nodes;
      const T = p.value.toLowerCase();
      return u.value.nodes.filter(
        (R) => {
          var U, N;
          return R.name.toLowerCase().includes(T) || ((U = R.description) == null ? void 0 : U.toLowerCase().includes(T)) || ((N = R.repository) == null ? void 0 : N.toLowerCase().includes(T));
        }
      );
    }), z = D(
      () => _.value.filter((T) => T.installed && T.tracked)
    ), b = D(
      () => _.value.filter((T) => !T.installed && T.tracked)
    ), x = D(
      () => _.value.filter((T) => T.installed && !T.tracked)
    );
    function k(T) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[T] || T;
    }
    function B(T) {
      return !T.used_in_workflows || T.used_in_workflows.length === 0 ? "Not used in any workflows" : T.used_in_workflows.length === 1 ? T.used_in_workflows[0] : `${T.used_in_workflows.length} workflows`;
    }
    function S(T) {
      M.value = T;
    }
    function I() {
      n("open-node-manager");
    }
    async function V(T) {
      if (confirm(`Track "${T}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          l.value = !0;
          const R = await h(T);
          R.status === "success" ? (alert(`Node "${T}" is now tracked as development!`), await W()) : alert(`Failed to track node: ${R.message || "Unknown error"}`);
        } catch (R) {
          alert(`Error tracking node: ${R instanceof Error ? R.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function H(T) {
      if (confirm(`Remove untracked node "${T}"?

This will delete the node directory from custom_nodes/.`))
        try {
          l.value = !0;
          const R = await g(T);
          R.status === "success" ? (alert(`Node "${T}" removed!`), await W()) : alert(`Failed to remove node: ${R.message || "Unknown error"}`);
        } catch (R) {
          alert(`Error removing node: ${R instanceof Error ? R.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function te(T) {
      if (confirm(`Install node "${T}"?

This will download and install the node.`))
        try {
          l.value = !0;
          const R = await f(T);
          R.status === "success" ? (alert(`Node "${T}" installed successfully!`), await W()) : alert(`Failed to install node: ${R.message || "Unknown error"}`);
        } catch (R) {
          alert(`Error installing node: ${R instanceof Error ? R.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function W() {
      l.value = !0, v.value = null;
      try {
        u.value = await i();
      } catch (T) {
        v.value = T instanceof Error ? T.message : "Failed to load nodes";
      } finally {
        l.value = !1;
      }
    }
    return Ee(W), (T, R) => (s(), o(F, null, [
      w(Be, null, {
        header: d(() => [
          w(Oe, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (U) => c.value = !0)
          }, {
            actions: d(() => [
              w(ee, {
                variant: "primary",
                size: "sm",
                onClick: I
              }, {
                default: d(() => [...R[5] || (R[5] = [
                  y(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: d(() => [
          w(_t, {
            modelValue: p.value,
            "onUpdate:modelValue": R[1] || (R[1] = (U) => p.value = U),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: d(() => [
          l.value ? (s(), E(dt, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (s(), E(ct, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: W
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            u.value.total_count ? (s(), E($t, {
              key: 0,
              variant: "compact"
            }, {
              default: d(() => [
                y(a(u.value.installed_count) + " installed ", 1),
                u.value.missing_count ? (s(), o(F, { key: 0 }, [
                  y(" • " + a(u.value.missing_count) + " missing", 1)
                ], 64)) : m("", !0),
                u.value.untracked_count ? (s(), o(F, { key: 1 }, [
                  y(" • " + a(u.value.untracked_count) + " untracked", 1)
                ], 64)) : m("", !0)
              ]),
              _: 1
            })) : m("", !0),
            x.value.length ? (s(), E(Me, {
              key: 1,
              title: "UNTRACKED",
              count: x.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: d(() => [
                (s(!0), o(F, null, J(x.value, (U) => (s(), E(We, {
                  key: U.name,
                  status: "warning"
                }, {
                  icon: d(() => [...R[6] || (R[6] = [
                    y("?", -1)
                  ])]),
                  title: d(() => [
                    y(a(U.name), 1)
                  ]),
                  subtitle: d(() => [...R[7] || (R[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: d(() => [
                    w(Ce, {
                      label: "Used by:",
                      value: B(U)
                    }, null, 8, ["value"])
                  ]),
                  actions: d(() => [
                    w(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => S(U)
                    }, {
                      default: d(() => [...R[8] || (R[8] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (N) => V(U.name)
                    }, {
                      default: d(() => [...R[9] || (R[9] = [
                        y(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(ee, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (N) => H(U.name)
                    }, {
                      default: d(() => [...R[10] || (R[10] = [
                        y(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            z.value.length ? (s(), E(Me, {
              key: 2,
              title: "INSTALLED",
              count: z.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: d(() => [
                (s(!0), o(F, null, J(z.value, (U) => (s(), E(We, {
                  key: U.name,
                  status: "synced"
                }, {
                  icon: d(() => [
                    y(a(U.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: d(() => [
                    y(a(U.name), 1)
                  ]),
                  subtitle: d(() => [
                    U.version ? (s(), o("span", Pm, a(U.source === "development" ? "" : "v") + a(U.version), 1)) : (s(), o("span", Um, "version unknown")),
                    e("span", Bm, " • " + a(k(U.source)), 1)
                  ]),
                  details: d(() => [
                    w(Ce, {
                      label: "Used by:",
                      value: B(U)
                    }, null, 8, ["value"])
                  ]),
                  actions: d(() => [
                    w(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => S(U)
                    }, {
                      default: d(() => [...R[11] || (R[11] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: I
                    }, {
                      default: d(() => [...R[12] || (R[12] = [
                        y(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            b.value.length ? (s(), E(Me, {
              key: 3,
              title: "MISSING",
              count: b.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: d(() => [
                (s(!0), o(F, null, J(b.value, (U) => (s(), E(We, {
                  key: U.name,
                  status: "missing"
                }, {
                  icon: d(() => [...R[13] || (R[13] = [
                    y("!", -1)
                  ])]),
                  title: d(() => [
                    y(a(U.name), 1)
                  ]),
                  subtitle: d(() => [...R[14] || (R[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: d(() => [
                    w(Ce, {
                      label: "Required by:",
                      value: B(U)
                    }, null, 8, ["value"])
                  ]),
                  actions: d(() => [
                    w(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => S(U)
                    }, {
                      default: d(() => [...R[15] || (R[15] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (N) => te(U.name)
                    }, {
                      default: d(() => [...R[16] || (R[16] = [
                        y(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            !z.value.length && !b.value.length && !x.value.length ? (s(), E(Je, {
              key: 4,
              icon: "📭",
              message: p.value ? `No nodes match '${p.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : m("", !0)
          ], 64))
        ]),
        _: 1
      }),
      w(at, {
        show: c.value,
        title: "About Custom Nodes",
        onClose: R[3] || (R[3] = (U) => c.value = !1)
      }, {
        content: d(() => [...R[17] || (R[17] = [
          e("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            y(" Tracked nodes available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            y(" Tracked nodes that need to be installed"),
            e("br"),
            e("strong", null, "Untracked:"),
            y(" Nodes on filesystem but not in manifest ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: d(() => [
          w(ee, {
            variant: "primary",
            onClick: R[2] || (R[2] = (U) => c.value = !1)
          }, {
            default: d(() => [...R[18] || (R[18] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      M.value ? (s(), E(Nm, {
        key: 0,
        node: M.value,
        onClose: R[4] || (R[4] = (U) => M.value = null)
      }, null, 8, ["node"])) : m("", !0)
    ], 64));
  }
}), Am = /* @__PURE__ */ Q(Om, [["__scopeId", "data-v-4ac1465a"]]);
function ks(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const Fm = { class: "remote-url-display" }, Vm = ["title"], Wm = ["title"], Gm = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, jm = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, qm = /* @__PURE__ */ Y({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const r = t, n = $(!1), i = D(() => {
      if (r.url.length <= r.maxLength)
        return r.url;
      const f = r.url.slice(0, Math.floor(r.maxLength * 0.6)), g = r.url.slice(-Math.floor(r.maxLength * 0.3));
      return `${f}...${g}`;
    });
    async function h() {
      try {
        await navigator.clipboard.writeText(r.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (f) {
        console.error("Failed to copy URL:", f);
      }
    }
    return (f, g) => (s(), o("div", Fm, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(i.value), 9, Vm),
      e("button", {
        class: ne(["copy-btn", { copied: n.value }]),
        onClick: h,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", jm, [...g[1] || (g[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", Gm, [...g[0] || (g[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Wm)
    ]));
  }
}), Hm = /* @__PURE__ */ Q(qm, [["__scopeId", "data-v-7768a58d"]]), Km = { class: "remote-title" }, Ym = {
  key: 0,
  class: "default-badge"
}, Qm = {
  key: 1,
  class: "sync-badge"
}, Xm = {
  key: 0,
  class: "ahead"
}, Zm = {
  key: 1,
  class: "behind"
}, Jm = {
  key: 1,
  class: "synced"
}, ev = ["href"], tv = {
  key: 1,
  class: "remote-url-text"
}, sv = /* @__PURE__ */ Y({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const r = t, n = D(() => r.fetchingRemote === r.remote.name), i = D(() => r.remote.is_default), h = D(() => r.syncStatus && r.syncStatus.behind > 0), f = D(() => r.syncStatus && r.syncStatus.ahead > 0), g = D(() => r.remote.push_url !== r.remote.fetch_url), u = D(() => {
      const v = r.remote.fetch_url, p = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return p ? `https://${p[1]}/${p[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), l = D(() => r.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, p) => (s(), E(We, {
      status: i.value ? "synced" : void 0
    }, Tt({
      icon: d(() => [
        y(a(i.value ? "🔗" : "🌐"), 1)
      ]),
      title: d(() => [
        e("div", Km, [
          e("span", null, a(t.remote.name), 1),
          i.value ? (s(), o("span", Ym, "DEFAULT")) : m("", !0),
          t.syncStatus ? (s(), o("span", Qm, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(F, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", Xm, "↑" + a(t.syncStatus.ahead), 1)) : m("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", Zm, "↓" + a(t.syncStatus.behind), 1)) : m("", !0)
            ], 64)) : (s(), o("span", Jm, "✓ synced"))
          ])) : m("", !0)
        ])
      ]),
      subtitle: d(() => [
        u.value ? (s(), o("a", {
          key: 0,
          href: u.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: p[0] || (p[0] = $e(() => {
          }, ["stop"]))
        }, a(l.value), 9, ev)) : (s(), o("span", tv, a(l.value), 1))
      ]),
      actions: d(() => [
        w(ee, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: p[1] || (p[1] = (c) => v.$emit("fetch", t.remote.name))
        }, {
          default: d(() => [...p[6] || (p[6] = [
            y(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        w(ee, {
          variant: h.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: p[2] || (p[2] = (c) => v.$emit("pull", t.remote.name))
        }, {
          default: d(() => [
            y(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        w(ee, {
          variant: f.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: p[3] || (p[3] = (c) => v.$emit("push", t.remote.name))
        }, {
          default: d(() => [
            y(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        w(ee, {
          variant: "secondary",
          size: "xs",
          onClick: p[4] || (p[4] = (c) => v.$emit("edit", t.remote.name))
        }, {
          default: d(() => [...p[7] || (p[7] = [
            y(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        i.value ? m("", !0) : (s(), E(ee, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: p[5] || (p[5] = (c) => v.$emit("remove", t.remote.name))
        }, {
          default: d(() => [...p[8] || (p[8] = [
            y(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      g.value ? {
        name: "details",
        fn: d(() => [
          t.remote.push_url !== t.remote.fetch_url ? (s(), E(Ce, {
            key: 0,
            label: "Push URL:"
          }, {
            default: d(() => [
              w(Hm, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : m("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), ov = /* @__PURE__ */ Q(sv, [["__scopeId", "data-v-8310f3a8"]]), nv = ["for"], av = {
  key: 0,
  class: "base-form-field-required"
}, lv = { class: "base-form-field-input" }, iv = {
  key: 1,
  class: "base-form-field-error"
}, rv = {
  key: 2,
  class: "base-form-field-hint"
}, dv = /* @__PURE__ */ Y({
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
    const r = t, n = D(() => r.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, h) => (s(), o("div", {
      class: ne(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        y(a(t.label) + " ", 1),
        t.required ? (s(), o("span", av, "*")) : m("", !0)
      ], 8, nv)) : m("", !0),
      e("div", lv, [
        pe(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", iv, a(t.error), 1)) : t.hint ? (s(), o("span", rv, a(t.hint), 1)) : m("", !0)
    ], 2));
  }
}), qt = /* @__PURE__ */ Q(dv, [["__scopeId", "data-v-9a1cf296"]]), cv = { class: "remote-form" }, uv = { class: "form-header" }, mv = { class: "form-body" }, vv = {
  key: 0,
  class: "form-error"
}, fv = { class: "form-actions" }, gv = /* @__PURE__ */ Y({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: r }) {
    const n = t, i = r, h = $({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), f = $(!1), g = $(null);
    yt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      h.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const u = D(() => h.value.name.trim() !== "" && h.value.fetchUrl.trim() !== "");
    async function l() {
      if (!(!u.value || f.value)) {
        g.value = null, f.value = !0;
        try {
          i("submit", h.value);
        } catch (v) {
          g.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          f.value = !1;
        }
      }
    }
    return (v, p) => (s(), o("div", cv, [
      e("div", uv, [
        w(Ke, null, {
          default: d(() => [
            y(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", mv, [
        w(qt, {
          label: "Remote Name",
          required: ""
        }, {
          default: d(() => [
            w(Ze, {
              modelValue: h.value.name,
              "onUpdate:modelValue": p[0] || (p[0] = (c) => h.value.name = c),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        w(qt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: d(() => [
            w(Ze, {
              modelValue: h.value.fetchUrl,
              "onUpdate:modelValue": p[1] || (p[1] = (c) => h.value.fetchUrl = c),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        w(qt, { label: "Push URL (optional)" }, {
          default: d(() => [
            w(Ze, {
              modelValue: h.value.pushUrl,
              "onUpdate:modelValue": p[2] || (p[2] = (c) => h.value.pushUrl = c),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        g.value ? (s(), o("div", vv, a(g.value), 1)) : m("", !0)
      ]),
      e("div", fv, [
        w(ee, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: f.value,
          onClick: l
        }, {
          default: d(() => [
            y(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        w(ee, {
          variant: "ghost",
          size: "md",
          onClick: p[3] || (p[3] = (c) => v.$emit("cancel"))
        }, {
          default: d(() => [...p[4] || (p[4] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), hv = /* @__PURE__ */ Q(gv, [["__scopeId", "data-v-56021b18"]]), pv = { class: "conflict-summary-box" }, yv = { class: "summary-header" }, wv = { class: "summary-text" }, kv = { key: 0 }, bv = {
  key: 1,
  class: "all-resolved"
}, _v = { class: "summary-progress" }, $v = { class: "progress-bar" }, Cv = { class: "progress-text" }, xv = /* @__PURE__ */ Y({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const r = t, n = D(
      () => r.conflictCount > 0 ? r.resolvedCount / r.conflictCount * 100 : 0
    );
    return (i, h) => (s(), o("div", pv, [
      e("div", yv, [
        h[0] || (h[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", wv, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (s(), o("p", kv, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (s(), o("p", bv, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", _v, [
        e("div", $v, [
          e("div", {
            class: "progress-fill",
            style: nt({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", Cv, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), Sv = /* @__PURE__ */ Q(xv, [["__scopeId", "data-v-4e9e6cc9"]]), Iv = { class: "modal-header" }, Ev = { class: "modal-title" }, Mv = { class: "modal-body" }, Rv = {
  key: 0,
  class: "error-box"
}, zv = {
  key: 0,
  class: "error-hint"
}, Lv = {
  key: 1,
  class: "loading-state"
}, Tv = { class: "commit-summary" }, Dv = {
  key: 0,
  class: "changes-section"
}, Nv = {
  key: 0,
  class: "change-group",
  open: ""
}, Pv = { class: "change-count" }, Uv = { class: "change-list" }, Bv = {
  key: 0,
  class: "conflict-badge"
}, Ov = {
  key: 1,
  class: "change-group"
}, Av = { class: "change-count" }, Fv = { class: "change-list" }, Vv = {
  key: 2,
  class: "change-group"
}, Wv = { class: "change-count" }, Gv = { class: "change-list" }, jv = {
  key: 2,
  class: "strategy-section"
}, qv = { class: "radio-group" }, Hv = { class: "radio-option" }, Kv = { class: "radio-option" }, Yv = { class: "radio-option" }, Qv = {
  key: 3,
  class: "up-to-date"
}, Xv = { class: "modal-actions" }, rs = "comfygit.pullModelStrategy", Zv = /* @__PURE__ */ Y({
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
  setup(t, { emit: r }) {
    const n = t, i = r, h = $(localStorage.getItem(rs) || "skip");
    yt(h, (x) => {
      localStorage.setItem(rs, x);
    });
    const f = D(() => {
      var x;
      return ((x = n.error) == null ? void 0 : x.toLowerCase().includes("unrelated histories")) ?? !1;
    }), g = D(() => {
      if (!n.preview) return 0;
      const x = n.preview.changes.workflows;
      return x.added.length + x.modified.length + x.deleted.length;
    }), u = D(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), l = D(() => {
      var x;
      return g.value > 0 || u.value > 0 || (((x = n.preview) == null ? void 0 : x.changes.models.count) || 0) > 0;
    }), v = D(() => n.preview && ks(n.preview) ? n.preview : null), p = D(() => {
      var x;
      return ((x = v.value) == null ? void 0 : x.workflow_conflicts.length) ?? 0;
    }), c = D(() => {
      var x;
      return ((x = n.conflictResolutions) == null ? void 0 : x.size) ?? 0;
    }), M = D(
      () => p.value > 0 && c.value === p.value
    ), _ = D(() => !(!n.preview || n.preview.has_uncommitted_changes || v.value && !M.value));
    function z(x) {
      if (!v.value) return !1;
      const k = x.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((B) => B.name === k);
    }
    function b(x) {
      const k = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      i("pull", { modelStrategy: h.value, force: x, resolutions: k });
    }
    return (x, k) => {
      var B, S;
      return s(), E(Re, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: k[11] || (k[11] = (I) => x.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: k[10] || (k[10] = $e(() => {
            }, ["stop"]))
          }, [
            e("div", Iv, [
              e("h3", Ev, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: k[0] || (k[0] = (I) => x.$emit("close"))
              }, "✕")
            ]),
            e("div", Mv, [
              t.error ? (s(), o("div", Rv, [
                k[13] || (k[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  k[12] || (k[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  f.value ? (s(), o("p", zv, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : m("", !0)
                ])
              ])) : t.loading ? (s(), o("div", Lv, [...k[14] || (k[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                y(" Loading preview... ", -1)
              ])])) : (B = t.preview) != null && B.has_uncommitted_changes ? (s(), o(F, { key: 2 }, [
                k[15] || (k[15] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "UNCOMMITTED CHANGES"),
                    e("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                k[16] || (k[16] = e("div", { class: "options-section" }, [
                  e("p", null, [
                    e("strong", null, "Options:")
                  ]),
                  e("ul", null, [
                    e("li", null, "Commit your changes first (recommended)"),
                    e("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : t.preview ? (s(), o(F, { key: 3 }, [
                e("div", Tv, [
                  k[17] || (k[17] = e("span", { class: "icon" }, "📥", -1)),
                  y(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                l.value ? (s(), o("div", Dv, [
                  k[21] || (k[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  g.value > 0 ? (s(), o("details", Nv, [
                    e("summary", null, [
                      k[18] || (k[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", Pv, a(g.value) + " changes", 1)
                    ]),
                    e("div", Uv, [
                      (s(!0), o(F, null, J(t.preview.changes.workflows.added, (I) => (s(), o("div", {
                        key: "a-" + I,
                        class: "change-item add"
                      }, " + " + a(I), 1))), 128)),
                      (s(!0), o(F, null, J(t.preview.changes.workflows.modified, (I) => (s(), o("div", {
                        key: "m-" + I,
                        class: "change-item modify"
                      }, [
                        y(" ~ " + a(I) + " ", 1),
                        z(I) ? (s(), o("span", Bv, "CONFLICT")) : m("", !0)
                      ]))), 128)),
                      (s(!0), o(F, null, J(t.preview.changes.workflows.deleted, (I) => (s(), o("div", {
                        key: "d-" + I,
                        class: "change-item delete"
                      }, " - " + a(I), 1))), 128))
                    ])
                  ])) : m("", !0),
                  u.value > 0 ? (s(), o("details", Ov, [
                    e("summary", null, [
                      k[19] || (k[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", Av, a(u.value) + " to install", 1)
                    ]),
                    e("div", Fv, [
                      (s(!0), o(F, null, J(t.preview.changes.nodes.to_install, (I) => (s(), o("div", {
                        key: I,
                        class: "change-item add"
                      }, " + " + a(I), 1))), 128))
                    ])
                  ])) : m("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", Vv, [
                    e("summary", null, [
                      k[20] || (k[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", Wv, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", Gv, [
                      (s(!0), o(F, null, J(t.preview.changes.models.referenced, (I) => (s(), o("div", {
                        key: I,
                        class: "change-item"
                      }, a(I), 1))), 128))
                    ])
                  ])) : m("", !0)
                ])) : m("", !0),
                v.value ? (s(), E(Sv, {
                  key: 1,
                  "conflict-count": p.value,
                  "resolved-count": c.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : m("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", jv, [
                  k[26] || (k[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", qv, [
                    e("label", Hv, [
                      ot(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": k[1] || (k[1] = (I) => h.value = I),
                        value: "all"
                      }, null, 512), [
                        [Wt, h.value]
                      ]),
                      k[22] || (k[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", Kv, [
                      ot(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": k[2] || (k[2] = (I) => h.value = I),
                        value: "required"
                      }, null, 512), [
                        [Wt, h.value]
                      ]),
                      k[23] || (k[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", Yv, [
                      ot(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": k[3] || (k[3] = (I) => h.value = I),
                        value: "skip"
                      }, null, 512), [
                        [Wt, h.value]
                      ]),
                      k[24] || (k[24] = e("span", null, "Skip model downloads", -1)),
                      k[25] || (k[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  k[27] || (k[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : m("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", Qv, [
                  k[28] || (k[28] = e("span", { class: "icon" }, "✓", -1)),
                  y(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : m("", !0)
              ], 64)) : m("", !0)
            ]),
            e("div", Xv, [
              w(ee, {
                variant: "secondary",
                onClick: k[4] || (k[4] = (I) => x.$emit("close"))
              }, {
                default: d(() => [...k[29] || (k[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(F, { key: 0 }, [
                w(ee, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: k[5] || (k[5] = (I) => b(!1))
                }, {
                  default: d(() => [...k[30] || (k[30] = [
                    y(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                w(ee, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: k[6] || (k[6] = (I) => b(!0))
                }, {
                  default: d(() => [...k[31] || (k[31] = [
                    y(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (S = t.preview) != null && S.has_uncommitted_changes ? (s(), E(ee, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: k[7] || (k[7] = (I) => b(!0))
              }, {
                default: d(() => [...k[32] || (k[32] = [
                  y(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(F, { key: 2 }, [
                v.value && !M.value ? (s(), E(ee, {
                  key: 0,
                  variant: "primary",
                  onClick: k[8] || (k[8] = (I) => i("openConflictResolution"))
                }, {
                  default: d(() => [
                    y(" Resolve Conflicts (" + a(c.value) + "/" + a(p.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), E(ee, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !_.value,
                  onClick: k[9] || (k[9] = (I) => b(!1))
                }, {
                  default: d(() => [...k[33] || (k[33] = [
                    y(" Pull Changes ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "disabled"]))
              ], 64)) : m("", !0)
            ])
          ])
        ])) : m("", !0)
      ]);
    };
  }
}), Jv = /* @__PURE__ */ Q(Zv, [["__scopeId", "data-v-300c7b2f"]]), ef = { class: "modal-header" }, tf = { class: "modal-title" }, sf = { class: "modal-body" }, of = {
  key: 0,
  class: "loading-state"
}, nf = {
  key: 1,
  class: "warning-box"
}, af = {
  key: 0,
  class: "commits-section"
}, lf = { class: "commit-list" }, rf = { class: "commit-hash" }, df = { class: "commit-message" }, cf = { class: "commit-date" }, uf = { class: "force-option" }, mf = { class: "checkbox-option" }, vf = { class: "commit-summary" }, ff = {
  key: 0,
  class: "commits-section"
}, gf = { class: "commit-list" }, hf = { class: "commit-hash" }, pf = { class: "commit-message" }, yf = { class: "commit-date" }, wf = {
  key: 1,
  class: "up-to-date"
}, kf = { class: "modal-actions" }, bf = /* @__PURE__ */ Y({
  __name: "PushModal",
  props: {
    show: { type: Boolean },
    remoteName: {},
    preview: {},
    loading: { type: Boolean },
    pushing: { type: Boolean }
  },
  emits: ["close", "push", "pull-first"],
  setup(t, { emit: r }) {
    const n = r, i = $(!1);
    function h(f) {
      n("push", { force: f });
    }
    return (f, g) => {
      var u, l, v;
      return s(), E(Re, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: g[7] || (g[7] = (p) => f.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: g[6] || (g[6] = $e(() => {
            }, ["stop"]))
          }, [
            e("div", ef, [
              e("h3", tf, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: g[0] || (g[0] = (p) => f.$emit("close"))
              }, "✕")
            ]),
            e("div", sf, [
              t.loading ? (s(), o("div", of, [...g[8] || (g[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                y(" Loading preview... ", -1)
              ])])) : (u = t.preview) != null && u.has_uncommitted_changes ? (s(), o("div", nf, [...g[9] || (g[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (l = t.preview) != null && l.remote_has_new_commits ? (s(), o(F, { key: 2 }, [
                g[13] || (g[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (s(), o("div", af, [
                  g[10] || (g[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", lf, [
                    (s(!0), o(F, null, J(t.preview.commits, (p) => (s(), o("div", {
                      key: p.hash,
                      class: "commit-item"
                    }, [
                      e("span", rf, a(p.short_hash || p.hash.slice(0, 7)), 1),
                      e("span", df, a(p.message), 1),
                      e("span", cf, a(p.date_relative || p.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : m("", !0),
                e("div", uf, [
                  e("label", mf, [
                    ot(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": g[1] || (g[1] = (p) => i.value = p)
                    }, null, 512), [
                      [vs, i.value]
                    ]),
                    g[11] || (g[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  g[12] || (g[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(F, { key: 3 }, [
                e("div", vf, [
                  g[14] || (g[14] = e("span", { class: "icon" }, "📤", -1)),
                  y(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", ff, [
                  g[15] || (g[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", gf, [
                    (s(!0), o(F, null, J(t.preview.commits, (p) => (s(), o("div", {
                      key: p.hash,
                      class: "commit-item"
                    }, [
                      e("span", hf, a(p.short_hash || p.hash.slice(0, 7)), 1),
                      e("span", pf, a(p.message), 1),
                      e("span", yf, a(p.date_relative || p.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", wf, [
                  g[16] || (g[16] = e("span", { class: "icon" }, "✓", -1)),
                  y(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : m("", !0)
            ]),
            e("div", kf, [
              w(ee, {
                variant: "secondary",
                onClick: g[2] || (g[2] = (p) => f.$emit("close"))
              }, {
                default: d(() => [...g[17] || (g[17] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (v = t.preview) != null && v.remote_has_new_commits ? (s(), o(F, { key: 0 }, [
                w(ee, {
                  variant: "secondary",
                  onClick: g[3] || (g[3] = (p) => f.$emit("pull-first"))
                }, {
                  default: d(() => [...g[18] || (g[18] = [
                    y(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                w(ee, {
                  variant: "destructive",
                  disabled: !i.value,
                  loading: t.pushing,
                  onClick: g[4] || (g[4] = (p) => h(!0))
                }, {
                  default: d(() => [...g[19] || (g[19] = [
                    y(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), E(ee, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: g[5] || (g[5] = (p) => h(!1))
              }, {
                default: d(() => [...g[20] || (g[20] = [
                  y(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : m("", !0)
            ])
          ])
        ])) : m("", !0)
      ]);
    };
  }
}), _f = /* @__PURE__ */ Q(bf, [["__scopeId", "data-v-bc6ded53"]]), $f = { class: "resolution-choice-group" }, Cf = ["disabled"], xf = ["disabled"], Sf = /* @__PURE__ */ Y({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, n) => (s(), o("div", $f, [
      e("button", {
        class: ne(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (i) => r.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, Cf),
      e("button", {
        class: ne(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (i) => r.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, xf)
    ]));
  }
}), If = /* @__PURE__ */ Q(Sf, [["__scopeId", "data-v-985715ed"]]), Ef = { class: "conflict-header" }, Mf = { class: "conflict-info" }, Rf = { class: "workflow-name" }, zf = { class: "conflict-description" }, Lf = {
  key: 0,
  class: "resolved-badge"
}, Tf = { class: "resolved-text" }, Df = { class: "conflict-hashes" }, Nf = { class: "hash-item" }, Pf = { class: "hash-item" }, Uf = { class: "conflict-actions" }, Bf = /* @__PURE__ */ Y({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: r }) {
    const n = t, i = r, h = $(n.resolution);
    yt(() => n.resolution, (l) => {
      h.value = l;
    }), yt(h, (l) => {
      l && i("resolve", l);
    });
    const f = D(() => h.value !== null), g = D(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = D(() => {
      switch (h.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (l, v) => {
      var p, c;
      return s(), o("div", {
        class: ne(["conflict-item", { resolved: f.value }])
      }, [
        e("div", Ef, [
          v[2] || (v[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", Mf, [
            e("code", Rf, a(t.conflict.name) + ".json", 1),
            e("div", zf, a(g.value), 1)
          ]),
          f.value ? (s(), o("div", Lf, [
            v[1] || (v[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", Tf, a(u.value), 1)
          ])) : m("", !0)
        ]),
        e("div", Df, [
          e("span", Nf, [
            v[3] || (v[3] = y("Your: ", -1)),
            e("code", null, a(((p = t.conflict.base_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", Pf, [
            v[4] || (v[4] = y("Theirs: ", -1)),
            e("code", null, a(((c = t.conflict.target_hash) == null ? void 0 : c.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", Uf, [
          w(If, {
            modelValue: h.value,
            "onUpdate:modelValue": v[0] || (v[0] = (M) => h.value = M),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), Of = /* @__PURE__ */ Q(Bf, [["__scopeId", "data-v-506d3bbf"]]), Af = { class: "resolution-content" }, Ff = {
  key: 0,
  class: "error-box"
}, Vf = { class: "resolution-header" }, Wf = { class: "header-stats" }, Gf = { class: "stat" }, jf = { class: "stat-value" }, qf = { class: "stat resolved" }, Hf = { class: "stat-value" }, Kf = {
  key: 0,
  class: "stat pending"
}, Yf = { class: "stat-value" }, Qf = { class: "conflicts-list" }, Xf = {
  key: 1,
  class: "all-resolved-message"
}, Zf = /* @__PURE__ */ Y({
  __name: "WorkflowResolutionModal",
  props: {
    workflowConflicts: {},
    resolutions: {},
    operationType: {},
    validating: { type: Boolean },
    error: {}
  },
  emits: ["close", "resolve", "apply"],
  setup(t, { emit: r }) {
    const n = t, i = r, h = D(() => n.resolutions.size), f = D(() => n.workflowConflicts.length - h.value), g = D(() => h.value === n.workflowConflicts.length), u = D(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function l(M) {
      const _ = n.resolutions.get(M);
      return (_ == null ? void 0 : _.resolution) ?? null;
    }
    function v(M, _) {
      i("resolve", M, _);
    }
    function p() {
      i("close");
    }
    function c() {
      i("apply");
    }
    return (M, _) => (s(), E(Ye, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: p
    }, {
      body: d(() => [
        e("div", Af, [
          t.error ? (s(), o("div", Ff, [
            _[1] || (_[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              _[0] || (_[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : m("", !0),
          e("div", Vf, [
            e("div", Wf, [
              e("div", Gf, [
                e("span", jf, a(t.workflowConflicts.length), 1),
                _[2] || (_[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", qf, [
                e("span", Hf, a(h.value), 1),
                _[3] || (_[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              f.value > 0 ? (s(), o("div", Kf, [
                e("span", Yf, a(f.value), 1),
                _[4] || (_[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : m("", !0)
            ]),
            _[5] || (_[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", Qf, [
            (s(!0), o(F, null, J(t.workflowConflicts, (z) => (s(), E(Of, {
              key: z.name,
              conflict: z,
              resolution: l(z.name),
              onResolve: (b) => v(z.name, b)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          g.value ? (s(), o("div", Xf, [
            _[6] || (_[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(u.value) + '" to continue.', 1)
          ])) : m("", !0)
        ])
      ]),
      footer: d(() => [
        w(ie, {
          variant: "secondary",
          onClick: p
        }, {
          default: d(() => [..._[7] || (_[7] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        _[8] || (_[8] = e("div", { class: "footer-spacer" }, null, -1)),
        w(ie, {
          variant: "primary",
          disabled: !g.value || t.validating,
          loading: t.validating,
          onClick: c
        }, {
          default: d(() => [
            y(a(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Jf = /* @__PURE__ */ Q(Zf, [["__scopeId", "data-v-c58d150d"]]), eg = { class: "node-conflict-item" }, tg = { class: "node-header" }, sg = { class: "node-name" }, og = { class: "node-id" }, ng = { class: "version-comparison" }, ag = { class: "version yours" }, lg = { class: "version theirs" }, ig = { class: "chosen-version" }, rg = { class: "chosen" }, dg = { class: "chosen-reason" }, cg = { class: "affected-workflows" }, ug = { class: "wf-source" }, mg = { class: "wf-version" }, vg = /* @__PURE__ */ Y({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (r, n) => (s(), o("div", eg, [
      e("div", tg, [
        e("code", sg, a(t.conflict.node_name), 1),
        e("span", og, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", ng, [
        e("div", ag, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", lg, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", ig, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", rg, a(t.conflict.chosen_version), 1),
        e("span", dg, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", cg, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (s(!0), o(F, null, J(t.conflict.affected_workflows, (i) => (s(), o("li", {
            key: i.name
          }, [
            e("code", null, a(i.name), 1),
            e("span", ug, "(" + a(i.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", mg, "needs v" + a(i.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), fg = /* @__PURE__ */ Q(vg, [["__scopeId", "data-v-8b626725"]]), gg = { class: "validation-content" }, hg = {
  key: 0,
  class: "compatible-message"
}, pg = { class: "conflicts-list" }, yg = {
  key: 2,
  class: "warnings-section"
}, wg = /* @__PURE__ */ Y({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: r }) {
    const n = t, i = r, h = D(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (f, g) => (s(), E(Ye, {
      title: "Compatibility Check",
      size: "lg",
      onClose: g[3] || (g[3] = (u) => i("cancel"))
    }, {
      body: d(() => [
        e("div", gg, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (s(), o("div", hg, [
            g[5] || (g[5] = e("span", { class: "icon" }, "✓", -1)),
            e("div", null, [
              g[4] || (g[4] = e("strong", null, "All clear!", -1)),
              e("p", null, "Your workflow choices are compatible. Ready to " + a(t.operationType) + ".", 1)
            ])
          ])) : t.validation.node_conflicts.length > 0 ? (s(), o(F, { key: 1 }, [
            g[6] || (g[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", pg, [
              (s(!0), o(F, null, J(t.validation.node_conflicts, (u) => (s(), E(fg, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            g[7] || (g[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : m("", !0),
          t.validation.warnings.length > 0 ? (s(), o("div", yg, [
            g[8] || (g[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (s(!0), o(F, null, J(t.validation.warnings, (u, l) => (s(), o("li", { key: l }, a(u), 1))), 128))
            ])
          ])) : m("", !0)
        ])
      ]),
      footer: d(() => [
        w(ie, {
          variant: "secondary",
          onClick: g[0] || (g[0] = (u) => i("cancel"))
        }, {
          default: d(() => [...g[9] || (g[9] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g[11] || (g[11] = e("div", { class: "footer-spacer" }, null, -1)),
        w(ie, {
          variant: "secondary",
          onClick: g[1] || (g[1] = (u) => i("goBack"))
        }, {
          default: d(() => [...g[10] || (g[10] = [
            y(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        w(ie, {
          variant: "primary",
          loading: t.executing,
          onClick: g[2] || (g[2] = (u) => i("proceed"))
        }, {
          default: d(() => [
            y(a(h.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), kg = /* @__PURE__ */ Q(wg, [["__scopeId", "data-v-fefd26ed"]]), bg = { key: 0 }, _g = /* @__PURE__ */ Y({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: r }) {
    const n = r, {
      getRemotes: i,
      addRemote: h,
      removeRemote: f,
      updateRemoteUrl: g,
      fetchRemote: u,
      getRemoteSyncStatus: l,
      getPullPreview: v,
      pullFromRemote: p,
      getPushPreview: c,
      pushToRemote: M,
      validateMerge: _
    } = ze(), z = $([]), b = $(null), x = $({}), k = $(!1), B = $(null), S = $(""), I = $(!1), V = $(null), H = $(!1), te = $("add"), W = $({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), T = D(() => {
      if (!S.value.trim()) return z.value;
      const P = S.value.toLowerCase();
      return z.value.filter(
        (j) => j.name.toLowerCase().includes(P) || j.fetch_url.toLowerCase().includes(P) || j.push_url.toLowerCase().includes(P)
      );
    });
    async function R() {
      k.value = !0, B.value = null;
      try {
        const P = await i();
        z.value = P.remotes, b.value = P.current_branch_tracking || null, await Promise.all(
          P.remotes.map(async (j) => {
            const de = await l(j.name);
            de && (x.value[j.name] = de);
          })
        );
      } catch (P) {
        B.value = P instanceof Error ? P.message : "Failed to load remotes";
      } finally {
        k.value = !1;
      }
    }
    function U() {
      te.value = "add", W.value = { name: "", fetchUrl: "", pushUrl: "" }, H.value = !0;
    }
    function N(P) {
      const j = z.value.find((de) => de.name === P);
      j && (te.value = "edit", W.value = {
        name: j.name,
        fetchUrl: j.fetch_url,
        pushUrl: j.push_url
      }, H.value = !0);
    }
    async function K(P) {
      try {
        te.value === "add" ? await h(P.name, P.fetchUrl) : await g(P.name, P.fetchUrl, P.pushUrl || void 0), H.value = !1, await R();
      } catch (j) {
        B.value = j instanceof Error ? j.message : "Operation failed";
      }
    }
    function re() {
      H.value = !1, W.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function X(P) {
      V.value = P;
      try {
        await u(P);
        const j = await l(P);
        j && (x.value[P] = j), n("toast", `✓ Fetched from ${P}`, "success");
      } catch (j) {
        n("toast", j instanceof Error ? j.message : "Fetch failed", "error");
      } finally {
        V.value = null;
      }
    }
    async function se(P) {
      if (confirm(`Remove remote "${P}"?`))
        try {
          await f(P), await R();
        } catch (j) {
          B.value = j instanceof Error ? j.message : "Failed to remove remote";
        }
    }
    function O() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const C = $("idle"), ae = D(() => C.value === "pull_preview"), oe = D(
      () => C.value === "resolving" || C.value === "validating"
    ), xe = D(
      () => C.value === "validation_review" || C.value === "executing"
    ), be = $(!1), Le = $(null), Ae = $(!1), ce = $(null), Fe = $(!1), ke = $(null), Te = $(null), Ge = $(/* @__PURE__ */ new Map()), et = $(null), he = $(null), je = D(() => ke.value && ks(ke.value) ? ke.value : null);
    async function qe(P) {
      ce.value = P, C.value = "pull_preview", Fe.value = !0, ke.value = null, Te.value = null;
      try {
        ke.value = await v(P);
      } catch (j) {
        Te.value = j instanceof Error ? j.message : "Failed to load pull preview";
      } finally {
        Fe.value = !1;
      }
    }
    function He() {
      C.value = "idle", ke.value = null, Te.value = null, ce.value = null;
    }
    async function mt(P) {
      if (!ce.value) return;
      C.value = "executing", Te.value = null;
      const j = ce.value;
      try {
        const de = await p(j, P);
        if (de.rolled_back) {
          Te.value = `Pull failed and was rolled back: ${de.error || "Unknown error"}`, C.value = "pull_preview";
          return;
        }
        A(), C.value = "idle", n("toast", `✓ Pulled from ${j}`, "success"), await R();
      } catch (de) {
        Te.value = de instanceof Error ? de.message : "Pull failed", C.value = "pull_preview";
      }
    }
    function me() {
      je.value && (C.value = "resolving", he.value = null);
    }
    function De(P, j) {
      Ge.value.set(P, { name: P, resolution: j });
    }
    function vt() {
      C.value = "pull_preview";
    }
    async function lt() {
      C.value = "validating", he.value = null;
      try {
        const P = Array.from(Ge.value.values());
        et.value = await _(ce.value, P), C.value = "validation_review";
      } catch (P) {
        he.value = P instanceof Error ? P.message : "Validation failed", C.value = "resolving";
      }
    }
    async function Se() {
      C.value = "executing";
      const P = ce.value;
      try {
        const j = Array.from(Ge.value.values()), de = await p(P, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: j
        });
        if (de.rolled_back) {
          Te.value = `Pull failed and was rolled back: ${de.error || "Unknown error"}`, C.value = "pull_preview";
          return;
        }
        A(), C.value = "idle", n("toast", `✓ Pulled from ${P}`, "success"), await R();
      } catch (j) {
        Te.value = j instanceof Error ? j.message : "Pull failed", C.value = "validation_review";
      }
    }
    function ft() {
      C.value = "resolving";
    }
    function q() {
      A(), C.value = "idle";
    }
    function A() {
      Ge.value.clear(), et.value = null, he.value = null, Te.value = null, ke.value = null, ce.value = null;
    }
    async function Z(P) {
      ce.value = P, be.value = !0, Fe.value = !0, Le.value = null;
      try {
        Le.value = await c(P);
      } catch (j) {
        B.value = j instanceof Error ? j.message : "Failed to load push preview";
      } finally {
        Fe.value = !1;
      }
    }
    function ge() {
      be.value = !1, Le.value = null, ce.value = null;
    }
    async function Ie(P) {
      if (!ce.value) return;
      Ae.value = !0;
      const j = ce.value;
      try {
        await M(j, P), ge(), n("toast", `✓ Pushed to ${j}`, "success"), await R();
      } catch (de) {
        n("toast", de instanceof Error ? de.message : "Push failed", "error");
      } finally {
        Ae.value = !1;
      }
    }
    function Ne() {
      const P = ce.value;
      ge(), P && qe(P);
    }
    return Ee(R), (P, j) => (s(), o(F, null, [
      w(Be, null, {
        header: d(() => [
          w(Oe, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: j[0] || (j[0] = (de) => I.value = !0)
          }, {
            actions: d(() => [
              H.value ? m("", !0) : (s(), E(ee, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: U
              }, {
                default: d(() => [...j[3] || (j[3] = [
                  y(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: d(() => [
          H.value ? m("", !0) : (s(), E(_t, {
            key: 0,
            modelValue: S.value,
            "onUpdate:modelValue": j[1] || (j[1] = (de) => S.value = de),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: d(() => [
          k.value ? (s(), E(dt, {
            key: 0,
            message: "Loading remotes..."
          })) : B.value ? (s(), E(ct, {
            key: 1,
            message: B.value,
            retry: !0,
            onRetry: R
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            H.value ? (s(), E(hv, {
              key: 0,
              mode: te.value,
              "remote-name": W.value.name,
              "fetch-url": W.value.fetchUrl,
              "push-url": W.value.pushUrl,
              onSubmit: K,
              onCancel: re
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : m("", !0),
            z.value.length && !H.value ? (s(), E($t, {
              key: 1,
              variant: "compact"
            }, {
              default: d(() => [
                y(" Total: " + a(z.value.length) + " remote" + a(z.value.length !== 1 ? "s" : "") + " ", 1),
                b.value ? (s(), o("span", bg, " • Tracking: " + a(b.value.remote) + "/" + a(b.value.branch), 1)) : m("", !0)
              ]),
              _: 1
            })) : m("", !0),
            T.value.length && !H.value ? (s(), E(Me, {
              key: 2,
              title: "REMOTES",
              count: T.value.length
            }, {
              default: d(() => [
                (s(!0), o(F, null, J(T.value, (de) => (s(), E(ov, {
                  key: de.name,
                  remote: de,
                  "sync-status": x.value[de.name],
                  "fetching-remote": V.value,
                  onFetch: X,
                  onEdit: N,
                  onRemove: se,
                  onPull: qe,
                  onPush: Z
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            !T.value.length && !H.value ? (s(), E(Je, {
              key: 3,
              icon: "🌐",
              message: S.value ? `No remotes match '${S.value}'` : "No remotes configured."
            }, {
              actions: d(() => [
                w(ee, {
                  variant: "primary",
                  onClick: U
                }, {
                  default: d(() => [...j[4] || (j[4] = [
                    y(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : m("", !0)
          ], 64))
        ]),
        _: 1
      }),
      w(at, {
        show: I.value,
        title: "About Git Remotes",
        onClose: j[2] || (j[2] = (de) => I.value = !1)
      }, {
        content: d(() => [...j[5] || (j[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            y(" The "),
            e("strong", null, '"origin"'),
            y(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: d(() => [
          w(ee, {
            variant: "link",
            onClick: O
          }, {
            default: d(() => [...j[6] || (j[6] = [
              y(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w(Jv, {
        show: ae.value,
        "remote-name": ce.value || "",
        preview: ke.value,
        loading: Fe.value,
        pulling: C.value === "executing",
        error: Te.value,
        "conflict-resolutions": Ge.value,
        onClose: He,
        onPull: mt,
        onOpenConflictResolution: me
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      w(_f, {
        show: be.value,
        "remote-name": ce.value || "",
        preview: Le.value,
        loading: Fe.value,
        pushing: Ae.value,
        onClose: ge,
        onPush: Ie,
        onPullFirst: Ne
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      oe.value && je.value ? (s(), E(Jf, {
        key: 0,
        "workflow-conflicts": je.value.workflow_conflicts,
        resolutions: Ge.value,
        "operation-type": "pull",
        validating: C.value === "validating",
        error: he.value,
        onClose: vt,
        onResolve: De,
        onApply: lt
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : m("", !0),
      xe.value && et.value ? (s(), E(kg, {
        key: 1,
        validation: et.value,
        "operation-type": "pull",
        executing: C.value === "executing",
        onProceed: Se,
        onGoBack: ft,
        onCancel: q
      }, null, 8, ["validation", "executing"])) : m("", !0)
    ], 64));
  }
}), $g = /* @__PURE__ */ Q(_g, [["__scopeId", "data-v-9ae3b76d"]]), Cg = { class: "setting-info" }, xg = { class: "setting-label" }, Sg = {
  key: 0,
  class: "required-marker"
}, Ig = {
  key: 0,
  class: "setting-description"
}, Eg = { class: "setting-control" }, Mg = /* @__PURE__ */ Y({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, n) => (s(), o("div", {
      class: ne(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Cg, [
        e("div", xg, [
          y(a(t.label) + " ", 1),
          t.required ? (s(), o("span", Sg, "*")) : m("", !0)
        ]),
        t.description ? (s(), o("div", Ig, a(t.description), 1)) : m("", !0)
      ]),
      e("div", Eg, [
        pe(r.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), St = /* @__PURE__ */ Q(Mg, [["__scopeId", "data-v-cb5d236c"]]), Rg = { class: "toggle" }, zg = ["checked", "disabled"], Lg = /* @__PURE__ */ Y({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, n) => (s(), o("label", Rg, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (i) => r.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, zg),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Ht = /* @__PURE__ */ Q(Lg, [["__scopeId", "data-v-71c0f550"]]), Tg = { class: "settings-section" }, Dg = { class: "path-setting" }, Ng = { class: "path-value" }, Pg = { class: "path-setting" }, Ug = { class: "path-value" }, Bg = { class: "settings-section" }, Og = { class: "settings-section" }, Ag = { class: "settings-section" }, Fg = /* @__PURE__ */ Y({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: r, updateConfig: n } = ze(), i = $(!1), h = $(null), f = $(null), g = $(null), u = $(null), l = $(""), v = $(""), p = $(!0), c = $(!0), M = $(!1), _ = D(() => u.value ? l.value !== (u.value.civitai_api_key || "") : !1);
    async function z() {
      i.value = !0, h.value = null;
      try {
        g.value = await r(), u.value = { ...g.value }, l.value = g.value.civitai_api_key || "", v.value = g.value.huggingface_token || "", p.value = g.value.auto_sync_models, c.value = g.value.confirm_destructive;
        const B = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        M.value = B === "true";
      } catch (B) {
        h.value = B instanceof Error ? B.message : "Failed to load settings";
      } finally {
        i.value = !1;
      }
    }
    async function b() {
      var B;
      f.value = null;
      try {
        const S = {};
        l.value !== (((B = u.value) == null ? void 0 : B.civitai_api_key) || "") && (S.civitai_api_key = l.value || null), await n(S), await z(), f.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          f.value = null;
        }, 3e3);
      } catch (S) {
        f.value = {
          type: "error",
          message: S instanceof Error ? S.message : "Failed to save settings"
        };
      }
    }
    function x() {
      u.value && (l.value = u.value.civitai_api_key || "", v.value = u.value.huggingface_token || "", p.value = u.value.auto_sync_models, c.value = u.value.confirm_destructive, f.value = null);
    }
    function k(B) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(B)), console.log("[ComfyGit] Auto-refresh setting saved:", B);
    }
    return Ee(z), (B, S) => (s(), E(Be, null, {
      header: d(() => [
        w(Oe, { title: "WORKSPACE SETTINGS" }, {
          actions: d(() => [
            w(ee, {
              variant: "primary",
              size: "sm",
              disabled: !_.value,
              onClick: b
            }, {
              default: d(() => [...S[5] || (S[5] = [
                y(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            _.value ? (s(), E(ee, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: x
            }, {
              default: d(() => [...S[6] || (S[6] = [
                y(" Reset ", -1)
              ])]),
              _: 1
            })) : m("", !0)
          ]),
          _: 1
        })
      ]),
      content: d(() => [
        i.value ? (s(), E(dt, {
          key: 0,
          message: "Loading workspace settings..."
        })) : h.value ? (s(), E(ct, {
          key: 1,
          message: h.value,
          retry: !0,
          onRetry: z
        }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
          w(Me, { title: "WORKSPACE PATHS" }, {
            default: d(() => {
              var I, V;
              return [
                e("div", Tg, [
                  e("div", Dg, [
                    S[7] || (S[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    S[8] || (S[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Ng, a(((I = g.value) == null ? void 0 : I.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Pg, [
                    S[9] || (S[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    S[10] || (S[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Ug, a(((V = g.value) == null ? void 0 : V.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          w(Me, { title: "API CREDENTIALS" }, {
            default: d(() => [
              e("div", Bg, [
                w(St, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: d(() => [
                    w(At, {
                      modelValue: l.value,
                      "onUpdate:modelValue": S[0] || (S[0] = (I) => l.value = I),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                w(St, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: d(() => [
                    w(At, {
                      modelValue: v.value,
                      "onUpdate:modelValue": S[1] || (S[1] = (I) => v.value = I),
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
          w(Me, { title: "UI SETTINGS" }, {
            default: d(() => [
              e("div", Og, [
                w(St, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: d(() => [
                    w(Ht, {
                      modelValue: M.value,
                      "onUpdate:modelValue": [
                        S[2] || (S[2] = (I) => M.value = I),
                        k
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          w(Me, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: d(() => [
              e("div", Ag, [
                w(St, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: d(() => [
                    w(Ht, {
                      modelValue: p.value,
                      "onUpdate:modelValue": S[3] || (S[3] = (I) => p.value = I),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                w(St, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: d(() => [
                    w(Ht, {
                      modelValue: c.value,
                      "onUpdate:modelValue": S[4] || (S[4] = (I) => c.value = I),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          f.value ? (s(), E($t, {
            key: 0,
            variant: (f.value.type === "success", "compact")
          }, {
            default: d(() => [
              e("span", {
                style: nt({ color: f.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, a(f.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : m("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Vg = /* @__PURE__ */ Q(Fg, [["__scopeId", "data-v-7861bd35"]]), Wg = /* @__PURE__ */ Y({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: r } = ze(), n = $([]), i = $(!1), h = $(null), f = $(!1), g = $(null), u = D(() => n.value.length === 0 ? [] : n.value.map((v) => ({
      text: `${v.timestamp} - ${v.name} - ${v.level} - ${v.func}:${v.line} - ${v.message}`,
      level: v.level
    })));
    async function l() {
      i.value = !0, h.value = null;
      try {
        n.value = await r(void 0, 500);
      } catch (v) {
        h.value = v instanceof Error ? v.message : "Failed to load workspace logs";
      } finally {
        i.value = !1, setTimeout(() => {
          var v;
          (v = g.value) != null && v.parentElement && (g.value.parentElement.scrollTop = g.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Ee(l), (v, p) => (s(), o(F, null, [
      w(Be, null, {
        header: d(() => [
          w(Oe, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: p[0] || (p[0] = (c) => f.value = !0)
          }, {
            actions: d(() => [
              w(ee, {
                variant: "secondary",
                size: "sm",
                onClick: l,
                disabled: i.value
              }, {
                default: d(() => [
                  y(a(i.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: d(() => [
          i.value ? (s(), E(dt, {
            key: 0,
            message: "Loading workspace logs..."
          })) : h.value ? (s(), E(ct, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: l
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            n.value.length === 0 ? (s(), E(Je, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: g,
              class: "log-output"
            }, [
              (s(!0), o(F, null, J(u.value, (c, M) => (s(), o("div", {
                key: M,
                class: ne(`log-line log-level-${c.level.toLowerCase()}`)
              }, a(c.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      w(at, {
        show: f.value,
        title: "About Workspace Logs",
        onClose: p[2] || (p[2] = (c) => f.value = !1)
      }, {
        content: d(() => [...p[3] || (p[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            y(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            y(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            y(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            y(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: d(() => [
          w(ee, {
            variant: "primary",
            onClick: p[1] || (p[1] = (c) => f.value = !1)
          }, {
            default: d(() => [...p[4] || (p[4] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Gg = /* @__PURE__ */ Q(Wg, [["__scopeId", "data-v-39f6a756"]]), jg = /* @__PURE__ */ Y({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: r, getStatus: n } = ze(), i = $([]), h = $(!1), f = $(null), g = $(!1), u = $("production"), l = $(null), v = D(() => i.value.length === 0 ? [] : i.value.map((c) => ({
      text: `${c.timestamp} - ${c.name} - ${c.level} - ${c.func}:${c.line} - ${c.message}`,
      level: c.level
    })));
    async function p() {
      h.value = !0, f.value = null;
      try {
        i.value = await r(void 0, 500);
        try {
          const c = await n();
          u.value = c.environment || "production";
        } catch {
        }
      } catch (c) {
        f.value = c instanceof Error ? c.message : "Failed to load environment logs";
      } finally {
        h.value = !1, setTimeout(() => {
          var c;
          (c = l.value) != null && c.parentElement && (l.value.parentElement.scrollTop = l.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Ee(p), (c, M) => (s(), o(F, null, [
      w(Be, null, {
        header: d(() => [
          w(Oe, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (_) => g.value = !0)
          }, {
            actions: d(() => [
              w(ee, {
                variant: "secondary",
                size: "sm",
                onClick: p,
                disabled: h.value
              }, {
                default: d(() => [
                  y(a(h.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: d(() => [
          h.value ? (s(), E(dt, {
            key: 0,
            message: "Loading environment logs..."
          })) : f.value ? (s(), E(ct, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: p
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            i.value.length === 0 ? (s(), E(Je, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: l,
              class: "log-output"
            }, [
              (s(!0), o(F, null, J(v.value, (_, z) => (s(), o("div", {
                key: z,
                class: ne(`log-line log-level-${_.level.toLowerCase()}`)
              }, a(_.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      w(at, {
        show: g.value,
        title: "About Environment Logs",
        onClose: M[2] || (M[2] = (_) => g.value = !1)
      }, {
        content: d(() => [
          e("p", null, [
            M[3] || (M[3] = y(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(u.value), 1),
            M[4] || (M[4] = y(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          M[5] || (M[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            y(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            y(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            y(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            y(" Detailed debugging information ")
          ], -1)),
          M[6] || (M[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: d(() => [
          w(ee, {
            variant: "primary",
            onClick: M[1] || (M[1] = (_) => g.value = !1)
          }, {
            default: d(() => [...M[7] || (M[7] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), qg = /* @__PURE__ */ Q(jg, [["__scopeId", "data-v-4f1e6f72"]]), Hg = { class: "env-title" }, Kg = {
  key: 0,
  class: "current-badge"
}, Yg = {
  key: 0,
  class: "branch-info"
}, Qg = /* @__PURE__ */ Y({
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
    return (r, n) => (s(), E(We, {
      status: t.isCurrent ? "synced" : void 0
    }, Tt({
      icon: d(() => [
        y(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: d(() => [
        e("div", Hg, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", Kg, "CURRENT")) : m("", !0)
        ])
      ]),
      subtitle: d(() => [
        t.currentBranch ? (s(), o("span", Yg, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          y(" " + a(t.currentBranch), 1)
        ])) : m("", !0)
      ]),
      actions: d(() => [
        pe(r.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: d(() => [
          w(Ce, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          w(Ce, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          w(Ce, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), E(Ce, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : m("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Xg = /* @__PURE__ */ Q(Qg, [["__scopeId", "data-v-9231917a"]]), Zg = { class: "env-details" }, Jg = { class: "status-row" }, eh = {
  key: 0,
  class: "detail-row"
}, th = { class: "value mono" }, sh = {
  key: 1,
  class: "detail-row"
}, oh = { class: "value mono small" }, nh = { class: "detail-row" }, ah = { class: "value" }, lh = { class: "detail-row" }, ih = { class: "value" }, rh = { class: "detail-row" }, dh = { class: "value" }, ch = {
  key: 2,
  class: "section-divider"
}, uh = {
  key: 3,
  class: "detail-row"
}, mh = { class: "value" }, vh = {
  key: 4,
  class: "detail-row"
}, fh = { class: "value" }, gh = { class: "footer-actions" }, hh = /* @__PURE__ */ Y({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: r }) {
    const n = r;
    function i(h) {
      if (!h) return "Unknown";
      try {
        const f = new Date(h), u = (/* @__PURE__ */ new Date()).getTime() - f.getTime(), l = Math.floor(u / 6e4), v = Math.floor(u / 36e5), p = Math.floor(u / 864e5);
        return l < 1 ? "just now" : l < 60 ? `${l} ${l === 1 ? "minute" : "minutes"} ago` : v < 24 ? `${v} ${v === 1 ? "hour" : "hours"} ago` : p < 30 ? `${p} ${p === 1 ? "day" : "days"} ago` : f.toLocaleDateString();
      } catch {
        return h;
      }
    }
    return (h, f) => (s(), E(Ye, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: f[2] || (f[2] = (g) => n("close"))
    }, {
      body: d(() => [
        e("div", Zg, [
          e("div", Jg, [
            f[3] || (f[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: ne(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", eh, [
            f[4] || (f[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", th, a(t.environment.current_branch), 1)
          ])) : m("", !0),
          t.environment.path ? (s(), o("div", sh, [
            f[5] || (f[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", oh, a(t.environment.path), 1)
          ])) : m("", !0),
          f[11] || (f[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", nh, [
            f[6] || (f[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", ah, a(t.environment.workflow_count), 1)
          ]),
          e("div", lh, [
            f[7] || (f[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", ih, a(t.environment.node_count), 1)
          ]),
          e("div", rh, [
            f[8] || (f[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", dh, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", ch)) : m("", !0),
          t.environment.created_at ? (s(), o("div", uh, [
            f[9] || (f[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", mh, a(i(t.environment.created_at)), 1)
          ])) : m("", !0),
          t.environment.last_used ? (s(), o("div", vh, [
            f[10] || (f[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", fh, a(i(t.environment.last_used)), 1)
          ])) : m("", !0)
        ])
      ]),
      footer: d(() => [
        e("div", gh, [
          t.canDelete ? (s(), E(ie, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: f[0] || (f[0] = (g) => n("delete", t.environment.name))
          }, {
            default: d(() => [...f[12] || (f[12] = [
              y(" Delete ", -1)
            ])]),
            _: 1
          })) : m("", !0),
          f[14] || (f[14] = e("div", { class: "footer-spacer" }, null, -1)),
          w(ie, {
            variant: "secondary",
            size: "sm",
            onClick: f[1] || (f[1] = (g) => n("close"))
          }, {
            default: d(() => [...f[13] || (f[13] = [
              y(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), ph = /* @__PURE__ */ Q(hh, [["__scopeId", "data-v-59855453"]]), yh = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], wh = "3.12", bs = [
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
], kh = "auto", bh = { class: "create-env-form" }, _h = { class: "form-field" }, $h = { class: "form-field" }, Ch = ["value"], xh = { class: "form-field" }, Sh = ["disabled"], Ih = ["value"], Eh = { class: "form-field" }, Mh = ["value"], Rh = { class: "form-field form-field--checkbox" }, zh = { class: "form-checkbox" }, Lh = /* @__PURE__ */ Y({
  __name: "CreateEnvironmentModal",
  emits: ["close", "create"],
  setup(t, { emit: r }) {
    const n = r, { getComfyUIReleases: i } = ze(), h = $(""), f = $(wh), g = $("latest"), u = $(kh), l = $(!1), v = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), p = $(!1), c = $(null);
    function M() {
      const z = h.value.trim();
      if (!z) return;
      const b = {
        name: z,
        python_version: f.value,
        comfyui_version: g.value,
        torch_backend: u.value,
        switch_after: l.value
      };
      n("create", b);
    }
    async function _() {
      p.value = !0;
      try {
        v.value = await i();
      } catch (z) {
        console.error("Failed to load ComfyUI releases:", z);
      } finally {
        p.value = !1;
      }
    }
    return Ee(async () => {
      var z;
      await Os(), (z = c.value) == null || z.focus(), _();
    }), (z, b) => (s(), E(Ye, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      onClose: b[6] || (b[6] = (x) => n("close"))
    }, {
      body: d(() => [
        e("div", bh, [
          e("div", _h, [
            b[7] || (b[7] = e("label", { class: "form-label" }, "Name", -1)),
            ot(e("input", {
              ref_key: "nameInput",
              ref: c,
              "onUpdate:modelValue": b[0] || (b[0] = (x) => h.value = x),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: ut(M, ["enter"])
            }, null, 544), [
              [ms, h.value]
            ])
          ]),
          e("div", $h, [
            b[8] || (b[8] = e("label", { class: "form-label" }, "Python Version", -1)),
            ot(e("select", {
              "onUpdate:modelValue": b[1] || (b[1] = (x) => f.value = x),
              class: "form-select"
            }, [
              (s(!0), o(F, null, J(ye(yh), (x) => (s(), o("option", {
                key: x,
                value: x
              }, a(x), 9, Ch))), 128))
            ], 512), [
              [Gt, f.value]
            ])
          ]),
          e("div", xh, [
            b[9] || (b[9] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            ot(e("select", {
              "onUpdate:modelValue": b[2] || (b[2] = (x) => g.value = x),
              class: "form-select",
              disabled: p.value
            }, [
              (s(!0), o(F, null, J(v.value, (x) => (s(), o("option", {
                key: x.tag_name,
                value: x.tag_name
              }, a(x.name), 9, Ih))), 128))
            ], 8, Sh), [
              [Gt, g.value]
            ])
          ]),
          e("div", Eh, [
            b[10] || (b[10] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            ot(e("select", {
              "onUpdate:modelValue": b[3] || (b[3] = (x) => u.value = x),
              class: "form-select"
            }, [
              (s(!0), o(F, null, J(ye(bs), (x) => (s(), o("option", {
                key: x,
                value: x
              }, a(x) + a(x === "auto" ? " (detect GPU)" : ""), 9, Mh))), 128))
            ], 512), [
              [Gt, u.value]
            ])
          ]),
          e("div", Rh, [
            e("label", zh, [
              ot(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": b[4] || (b[4] = (x) => l.value = x)
              }, null, 512), [
                [vs, l.value]
              ]),
              b[11] || (b[11] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ])
      ]),
      footer: d(() => [
        w(ie, {
          variant: "primary",
          disabled: !h.value.trim(),
          onClick: M
        }, {
          default: d(() => [...b[12] || (b[12] = [
            y(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        w(ie, {
          variant: "secondary",
          onClick: b[5] || (b[5] = (x) => n("close"))
        }, {
          default: d(() => [...b[13] || (b[13] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Th = /* @__PURE__ */ Q(Lh, [["__scopeId", "data-v-a2f13447"]]), Dh = /* @__PURE__ */ Y({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete"],
  setup(t, { expose: r, emit: n }) {
    const i = n, { getEnvironments: h } = ze(), f = $([]), g = $(!1), u = $(null), l = $(""), v = $(!1), p = $(!1), c = $(null), M = D(
      () => f.value.find((S) => S.is_current)
    ), _ = D(() => {
      if (!l.value.trim()) return f.value;
      const S = l.value.toLowerCase();
      return f.value.filter(
        (I) => {
          var V;
          return I.name.toLowerCase().includes(S) || ((V = I.current_branch) == null ? void 0 : V.toLowerCase().includes(S));
        }
      );
    });
    function z(S) {
      i("create", S), p.value = !1;
    }
    function b() {
      p.value = !0;
    }
    function x(S) {
      c.value = S;
    }
    function k(S) {
      c.value = null, i("delete", S);
    }
    async function B() {
      g.value = !0, u.value = null;
      try {
        f.value = await h();
      } catch (S) {
        u.value = S instanceof Error ? S.message : "Failed to load environments";
      } finally {
        g.value = !1;
      }
    }
    return Ee(B), r({
      loadEnvironments: B
    }), (S, I) => (s(), o(F, null, [
      w(Be, null, {
        header: d(() => [
          w(Oe, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (V) => v.value = !0)
          }, {
            actions: d(() => [
              w(ee, {
                variant: "primary",
                size: "sm",
                onClick: b
              }, {
                default: d(() => [...I[6] || (I[6] = [
                  y(" Create ", -1)
                ])]),
                _: 1
              }),
              w(ee, {
                variant: "secondary",
                size: "sm",
                onClick: B
              }, {
                default: d(() => [...I[7] || (I[7] = [
                  y(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: d(() => [
          w(_t, {
            modelValue: l.value,
            "onUpdate:modelValue": I[1] || (I[1] = (V) => l.value = V),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: d(() => [
          g.value ? (s(), E(dt, {
            key: 0,
            message: "Loading environments..."
          })) : u.value ? (s(), E(ct, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (s(), o(F, { key: 2 }, [
            f.value.length ? (s(), E($t, {
              key: 0,
              variant: "compact"
            }, {
              default: d(() => [
                y(" Total: " + a(f.value.length) + " " + a(f.value.length === 1 ? "environment" : "environments") + " ", 1),
                M.value ? (s(), o(F, { key: 0 }, [
                  I[8] || (I[8] = y(" • Current: ", -1)),
                  e("strong", null, a(M.value.name), 1)
                ], 64)) : m("", !0)
              ]),
              _: 1
            })) : m("", !0),
            _.value.length ? (s(), E(Me, {
              key: 1,
              title: "ENVIRONMENTS",
              count: _.value.length
            }, {
              default: d(() => [
                (s(!0), o(F, null, J(_.value, (V) => (s(), E(Xg, {
                  key: V.name,
                  "environment-name": V.name,
                  "is-current": V.is_current,
                  "current-branch": V.current_branch,
                  "show-last-used": !1
                }, {
                  actions: d(() => [
                    V.is_current ? m("", !0) : (s(), E(ee, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (H) => S.$emit("switch", V.name)
                    }, {
                      default: d(() => [...I[9] || (I[9] = [
                        y(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    w(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (H) => x(V)
                    }, {
                      default: d(() => [...I[10] || (I[10] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : m("", !0),
            _.value.length ? m("", !0) : (s(), E(Je, {
              key: 2,
              icon: "🌍",
              message: l.value ? `No environments match '${l.value}'` : "No environments found. Create one to get started!"
            }, Tt({ _: 2 }, [
              l.value ? void 0 : {
                name: "actions",
                fn: d(() => [
                  w(ee, {
                    variant: "primary",
                    onClick: b
                  }, {
                    default: d(() => [...I[11] || (I[11] = [
                      y(" Create Environment ", -1)
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
      w(at, {
        show: v.value,
        title: "About Environments",
        onClose: I[3] || (I[3] = (V) => v.value = !1)
      }, {
        content: d(() => [...I[12] || (I[12] = [
          e("p", null, [
            e("strong", null, "Environments"),
            y(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
        actions: d(() => [
          w(ee, {
            variant: "secondary",
            onClick: I[2] || (I[2] = (V) => v.value = !1)
          }, {
            default: d(() => [...I[13] || (I[13] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      c.value ? (s(), E(ph, {
        key: 0,
        environment: c.value,
        "can-delete": f.value.length > 1,
        onClose: I[4] || (I[4] = (V) => c.value = null),
        onDelete: k
      }, null, 8, ["environment", "can-delete"])) : m("", !0),
      p.value ? (s(), E(Th, {
        key: 1,
        onClose: I[5] || (I[5] = (V) => p.value = !1),
        onCreate: z
      })) : m("", !0)
    ], 64));
  }
}), Nh = /* @__PURE__ */ Q(Dh, [["__scopeId", "data-v-307d9926"]]), Ph = { class: "file-path" }, Uh = { class: "file-path-text" }, Bh = ["title"], Oh = /* @__PURE__ */ Y({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const r = t, n = $(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(r.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (h) {
        console.error("Failed to copy:", h);
      }
    }
    return (h, f) => (s(), o("div", Ph, [
      f[0] || (f[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Uh, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: i
      }, a(n.value ? "✓" : "📋"), 9, Bh)) : m("", !0)
    ]));
  }
}), Ah = /* @__PURE__ */ Q(Oh, [["__scopeId", "data-v-f0982173"]]), Fh = { class: "export-blocked" }, Vh = { class: "issues-list" }, Wh = { class: "issue-message" }, Gh = {
  key: 0,
  class: "issue-details"
}, jh = ["onClick"], qh = { class: "issue-fix" }, Hh = /* @__PURE__ */ Y({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(t) {
    const r = t, n = Xt({});
    function i(h) {
      const f = r.issues[h];
      return n[h] || f.details.length <= 3 ? f.details : f.details.slice(0, 3);
    }
    return (h, f) => (s(), E(Ye, {
      title: "Cannot Export",
      size: "md",
      onClose: f[1] || (f[1] = (g) => h.$emit("close"))
    }, {
      body: d(() => [
        e("div", Fh, [
          f[2] || (f[2] = e("div", { class: "error-header" }, [
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
          e("div", Vh, [
            (s(!0), o(F, null, J(t.issues, (g, u) => (s(), o("div", {
              key: u,
              class: "issue-item"
            }, [
              e("div", Wh, a(g.message), 1),
              g.details.length ? (s(), o("div", Gh, [
                (s(!0), o(F, null, J(i(u), (l, v) => (s(), o("div", {
                  key: v,
                  class: "issue-detail"
                }, a(l), 1))), 128)),
                g.details.length > 3 && !n[u] ? (s(), o("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (l) => n[u] = !0
                }, " +" + a(g.details.length - 3) + " more ", 9, jh)) : m("", !0)
              ])) : m("", !0),
              e("div", qh, [
                g.type === "uncommitted_workflows" ? (s(), o(F, { key: 0 }, [
                  y(" Commit your workflow changes before exporting. ")
                ], 64)) : g.type === "uncommitted_git_changes" ? (s(), o(F, { key: 1 }, [
                  y(" Commit your changes before exporting. ")
                ], 64)) : g.type === "unresolved_issues" ? (s(), o(F, { key: 2 }, [
                  y(" Resolve all workflow issues before exporting. ")
                ], 64)) : m("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: d(() => [
        w(ie, {
          variant: "primary",
          onClick: f[0] || (f[0] = (g) => h.$emit("close"))
        }, {
          default: d(() => [...f[3] || (f[3] = [
            y(" Understood ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Kh = /* @__PURE__ */ Q(Hh, [["__scopeId", "data-v-b52f5e32"]]), Yh = { class: "export-warnings" }, Qh = {
  key: 0,
  class: "success-header"
}, Xh = { class: "warning-header" }, Zh = { class: "warning-summary" }, Jh = { class: "warning-title" }, ep = { class: "models-section" }, tp = { class: "models-list" }, sp = { class: "model-info" }, op = { class: "model-filename" }, np = { class: "model-workflows" }, ap = ["onClick"], lp = /* @__PURE__ */ Y({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(t, { emit: r }) {
    const n = t, i = r, h = $(!1), f = $(null), g = D(() => h.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function u() {
      f.value = null, i("revalidate");
    }
    return (l, v) => (s(), o(F, null, [
      w(Ye, {
        title: "Export Warnings",
        size: "md",
        onClose: v[3] || (v[3] = (p) => l.$emit("cancel"))
      }, {
        body: d(() => [
          e("div", Yh, [
            t.models.length === 0 ? (s(), o("div", Qh, [...v[4] || (v[4] = [
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
            ])])) : (s(), o(F, { key: 1 }, [
              e("div", Xh, [
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
                e("div", Zh, [
                  e("h3", Jh, a(t.models.length) + " model" + a(t.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  v[5] || (v[5] = e("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              e("div", ep, [
                e("div", tp, [
                  (s(!0), o(F, null, J(g.value, (p) => (s(), o("div", {
                    key: p.hash,
                    class: "model-item"
                  }, [
                    e("div", sp, [
                      e("div", op, a(p.filename), 1),
                      e("div", np, " Used by: " + a(p.workflows.join(", ")), 1)
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      onClick: (c) => f.value = p.hash
                    }, " Add Source ", 8, ap)
                  ]))), 128))
                ]),
                t.models.length > 3 && !h.value ? (s(), o("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: v[0] || (v[0] = (p) => h.value = !0)
                }, " Show " + a(t.models.length - 3) + " more model" + a(t.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : m("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: d(() => [
          w(ie, {
            variant: "secondary",
            onClick: v[1] || (v[1] = (p) => l.$emit("cancel"))
          }, {
            default: d(() => [...v[7] || (v[7] = [
              y(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          w(ie, {
            variant: "primary",
            onClick: v[2] || (v[2] = (p) => l.$emit("confirm"))
          }, {
            default: d(() => [
              y(a(t.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      f.value ? (s(), E(ts, {
        key: 0,
        identifier: f.value,
        onClose: u
      }, null, 8, ["identifier"])) : m("", !0)
    ], 64));
  }
}), ip = /* @__PURE__ */ Q(lp, [["__scopeId", "data-v-b698d882"]]), rp = { class: "export-card" }, dp = { class: "export-path-row" }, cp = { class: "export-actions" }, up = {
  key: 1,
  class: "export-warning"
}, mp = /* @__PURE__ */ Y({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: r, exportEnvWithForce: n } = ze(), i = $(""), h = $(!1), f = $(!1), g = $(!1), u = $(null), l = $(!1), v = $(null), p = $(!1), c = $(!1), M = D(() => h.value ? "Validating..." : f.value ? "Exporting..." : "Export Environment");
    async function _() {
      h.value = !0, u.value = null;
      try {
        const S = await r();
        v.value = S, S.can_export ? S.warnings.models_without_sources.length > 0 ? c.value = !0 : await x() : p.value = !0;
      } catch (S) {
        u.value = {
          status: "error",
          message: S instanceof Error ? S.message : "Validation failed"
        };
      } finally {
        h.value = !1;
      }
    }
    async function z() {
      c.value = !1, await x();
    }
    async function b() {
      try {
        const S = await r();
        v.value = S;
      } catch (S) {
        console.error("Re-validation failed:", S);
      }
    }
    async function x() {
      f.value = !0;
      try {
        const S = await n(i.value || void 0);
        u.value = S;
      } catch (S) {
        u.value = {
          status: "error",
          message: S instanceof Error ? S.message : "Export failed"
        };
      } finally {
        f.value = !1;
      }
    }
    async function k() {
      var S;
      if ((S = u.value) != null && S.path)
        try {
          await navigator.clipboard.writeText(u.value.path);
        } catch (I) {
          console.error("Failed to copy path:", I);
        }
    }
    async function B() {
      var S;
      if ((S = u.value) != null && S.path) {
        g.value = !0;
        try {
          const I = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(u.value.path)}`);
          if (!I.ok)
            throw new Error(`Download failed: ${I.statusText}`);
          const V = await I.blob(), H = URL.createObjectURL(V), te = u.value.path.split("/").pop() || "environment-export.tar.gz", W = document.createElement("a");
          W.href = H, W.download = te, document.body.appendChild(W), W.click(), document.body.removeChild(W), URL.revokeObjectURL(H);
        } catch (I) {
          console.error("Failed to download:", I), alert(`Download failed: ${I instanceof Error ? I.message : "Unknown error"}`);
        } finally {
          g.value = !1;
        }
      }
    }
    return (S, I) => (s(), o(F, null, [
      w(Be, null, {
        header: d(() => [
          w(Oe, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (V) => l.value = !0)
          })
        ]),
        content: d(() => [
          w(Me, { title: "EXPORT OPTIONS" }, {
            default: d(() => [
              e("div", rp, [
                I[7] || (I[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", dp, [
                  w(At, {
                    modelValue: i.value,
                    "onUpdate:modelValue": I[1] || (I[1] = (V) => i.value = V),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", cp, [
                  w(ee, {
                    variant: "primary",
                    size: "md",
                    loading: h.value || f.value,
                    disabled: h.value || f.value,
                    onClick: _
                  }, {
                    default: d(() => [
                      I[6] || (I[6] = e("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        e("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        e("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      y(" " + a(M.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          u.value ? (s(), E(Me, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: d(() => [
              w(We, {
                status: u.value.status === "success" ? "synced" : "broken"
              }, Tt({
                icon: d(() => [
                  y(a(u.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: d(() => [
                  y(a(u.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: d(() => [
                  y(a(u.value.status === "success" ? "Your environment has been exported" : u.value.message), 1)
                ]),
                _: 2
              }, [
                u.value.status === "success" ? {
                  name: "details",
                  fn: d(() => [
                    w(Ce, { label: "Saved to:" }, {
                      default: d(() => [
                        w(Ah, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (s(), E(Ce, {
                      key: 0,
                      label: "Models without sources:",
                      value: u.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : m("", !0),
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (s(), o("div", up, [...I[8] || (I[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : m("", !0)
                  ]),
                  key: "0"
                } : void 0,
                u.value.status === "success" ? {
                  name: "actions",
                  fn: d(() => [
                    w(ee, {
                      variant: "primary",
                      size: "sm",
                      loading: g.value,
                      onClick: B
                    }, {
                      default: d(() => [...I[9] || (I[9] = [
                        e("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          e("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    w(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: k
                    }, {
                      default: d(() => [...I[10] || (I[10] = [
                        y(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    w(ee, {
                      variant: "ghost",
                      size: "sm",
                      onClick: I[2] || (I[2] = (V) => u.value = null)
                    }, {
                      default: d(() => [...I[11] || (I[11] = [
                        y(" Dismiss ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : m("", !0)
        ]),
        _: 1
      }),
      w(at, {
        show: l.value,
        title: "What Gets Exported",
        onClose: I[3] || (I[3] = (V) => l.value = !1)
      }, {
        content: d(() => [...I[12] || (I[12] = [
          e("div", { class: "export-info" }, [
            e("div", { class: "info-section" }, [
              e("strong", null, "Included in Export:"),
              e("ul", null, [
                e("li", null, [
                  e("strong", null, "Workflows"),
                  y(" — All workflows in this environment")
                ]),
                e("li", null, [
                  e("strong", null, "Custom Nodes"),
                  y(" — Node definitions and dependencies")
                ]),
                e("li", null, [
                  e("strong", null, "Models"),
                  y(" — References and source URLs (not the files)")
                ]),
                e("li", null, [
                  e("strong", null, "Configuration"),
                  y(" — Environment settings and metadata")
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
              y(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      p.value && v.value ? (s(), E(Kh, {
        key: 0,
        issues: v.value.blocking_issues,
        onClose: I[4] || (I[4] = (V) => p.value = !1)
      }, null, 8, ["issues"])) : m("", !0),
      c.value && v.value ? (s(), E(ip, {
        key: 1,
        models: v.value.warnings.models_without_sources,
        onConfirm: z,
        onCancel: I[5] || (I[5] = (V) => c.value = !1),
        onRevalidate: b
      }, null, 8, ["models"])) : m("", !0)
    ], 64));
  }
}), vp = /* @__PURE__ */ Q(mp, [["__scopeId", "data-v-f4d120f2"]]), fp = { class: "file-input-wrapper" }, gp = ["accept", "multiple", "disabled"], hp = /* @__PURE__ */ Y({
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
  setup(t, { expose: r, emit: n }) {
    const i = n, h = $(null);
    function f() {
      var u;
      (u = h.value) == null || u.click();
    }
    function g(u) {
      const l = u.target;
      l.files && l.files.length > 0 && (i("change", l.files), l.value = "");
    }
    return r({
      triggerInput: f
    }), (u, l) => (s(), o("div", fp, [
      e("input", {
        ref_key: "fileInputRef",
        ref: h,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: g
      }, null, 40, gp),
      w(ee, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: f
      }, {
        default: d(() => [
          pe(u.$slots, "default", {}, () => [
            l[0] || (l[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            y(" " + a(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), pp = /* @__PURE__ */ Q(hp, [["__scopeId", "data-v-cd192091"]]), yp = {
  key: 0,
  class: "drop-zone-empty"
}, wp = { class: "drop-zone-text" }, kp = { class: "drop-zone-primary" }, bp = { class: "drop-zone-secondary" }, _p = { class: "drop-zone-actions" }, $p = {
  key: 1,
  class: "drop-zone-file"
}, Cp = { class: "file-info" }, xp = { class: "file-details" }, Sp = { class: "file-name" }, Ip = { class: "file-size" }, Ep = /* @__PURE__ */ Y({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(t, { emit: r }) {
    const n = r, i = $(!1), h = $(null), f = $(0), g = D(() => h.value !== null), u = D(() => {
      var x;
      return ((x = h.value) == null ? void 0 : x.name) || "";
    }), l = D(() => {
      if (!h.value) return "";
      const x = h.value.size;
      return x < 1024 ? `${x} B` : x < 1024 * 1024 ? `${(x / 1024).toFixed(1)} KB` : x < 1024 * 1024 * 1024 ? `${(x / (1024 * 1024)).toFixed(1)} MB` : `${(x / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v(x) {
      var k;
      x.stopPropagation(), f.value++, (k = x.dataTransfer) != null && k.types.includes("Files") && (i.value = !0);
    }
    function p(x) {
      x.stopPropagation(), x.dataTransfer && (x.dataTransfer.dropEffect = "copy");
    }
    function c(x) {
      x.stopPropagation(), f.value--, f.value === 0 && (i.value = !1);
    }
    function M(x) {
      var B;
      x.stopPropagation(), f.value = 0, i.value = !1;
      const k = (B = x.dataTransfer) == null ? void 0 : B.files;
      k && k.length > 0 && z(k[0]);
    }
    function _(x) {
      x.length > 0 && z(x[0]);
    }
    function z(x) {
      h.value = x, n("fileSelected", x);
    }
    function b() {
      h.value = null, n("clear");
    }
    return (x, k) => (s(), o("div", {
      class: ne(["file-drop-zone", { "drop-active": i.value, "has-file": g.value }]),
      onDragenter: $e(v, ["prevent"]),
      onDragover: $e(p, ["prevent"]),
      onDragleave: $e(c, ["prevent"]),
      onDrop: $e(M, ["prevent"])
    }, [
      g.value ? (s(), o("div", $p, [
        e("div", Cp, [
          k[1] || (k[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", xp, [
            e("div", Sp, a(u.value), 1),
            e("div", Ip, a(l.value), 1)
          ])
        ]),
        w(ee, {
          variant: "ghost",
          size: "xs",
          onClick: b,
          title: "Remove file"
        }, {
          default: d(() => [...k[2] || (k[2] = [
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
      ])) : (s(), o("div", yp, [
        k[0] || (k[0] = e("div", { class: "drop-zone-icon" }, [
          e("svg", {
            width: "48",
            height: "48",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
            e("path", { d: "M2 14h12v-2H2v2z" })
          ])
        ], -1)),
        e("div", wp, [
          e("p", kp, a(t.primaryText), 1),
          e("p", bp, a(t.secondaryText), 1)
        ]),
        e("div", _p, [
          w(pp, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: _
          }, {
            default: d(() => [
              y(a(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Mp = /* @__PURE__ */ Q(Ep, [["__scopeId", "data-v-b774d3bb"]]), Rp = { class: "import-preview" }, zp = { class: "preview-header" }, Lp = {
  key: 0,
  class: "source-env"
}, Tp = { class: "preview-content" }, Dp = { class: "preview-section" }, Np = { class: "section-header" }, Pp = { class: "section-info" }, Up = { class: "section-count" }, Bp = {
  key: 0,
  class: "item-list"
}, Op = { class: "item-name" }, Ap = {
  key: 0,
  class: "item-more"
}, Fp = { class: "preview-section" }, Vp = { class: "section-header" }, Wp = { class: "section-info" }, Gp = { class: "section-count" }, jp = {
  key: 0,
  class: "item-list"
}, qp = { class: "item-details" }, Hp = { class: "item-name" }, Kp = { class: "item-meta" }, Yp = {
  key: 0,
  class: "item-more"
}, Qp = { class: "preview-section" }, Xp = { class: "section-header" }, Zp = { class: "section-info" }, Jp = { class: "section-count" }, e1 = {
  key: 0,
  class: "item-list"
}, t1 = { class: "item-name" }, s1 = {
  key: 0,
  class: "item-more"
}, o1 = {
  key: 0,
  class: "preview-section"
}, n1 = { class: "git-info" }, a1 = /* @__PURE__ */ Y({
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
    const r = t, n = D(() => r.workflows.length), i = D(() => r.models.length), h = D(() => r.nodes.length);
    function f(g) {
      return g < 1024 ? `${g} B` : g < 1024 * 1024 ? `${(g / 1024).toFixed(1)} KB` : g < 1024 * 1024 * 1024 ? `${(g / (1024 * 1024)).toFixed(1)} MB` : `${(g / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (g, u) => (s(), o("div", Rp, [
      e("div", zp, [
        w(Ke, null, {
          default: d(() => [...u[0] || (u[0] = [
            y("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", Lp, [
          u[1] || (u[1] = y(" From: ", -1)),
          w(Yt, null, {
            default: d(() => [
              y(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : m("", !0)
      ]),
      e("div", Tp, [
        e("div", Dp, [
          e("div", Np, [
            u[3] || (u[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Pp, [
              u[2] || (u[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Up, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", Bp, [
            (s(!0), o(F, null, J(t.workflows.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l,
              class: "preview-item"
            }, [
              u[4] || (u[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Op, a(l), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", Ap, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : m("", !0)
          ])) : m("", !0)
        ]),
        e("div", Fp, [
          e("div", Vp, [
            u[6] || (u[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Wp, [
              u[5] || (u[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", Gp, a(i.value) + " file" + a(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", jp, [
            (s(!0), o(F, null, J(t.models.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", qp, [
                e("span", Hp, a(l.filename), 1),
                e("span", Kp, a(f(l.size)) + " • " + a(l.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", Yp, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : m("", !0)
          ])) : m("", !0)
        ]),
        e("div", Qp, [
          e("div", Xp, [
            u[9] || (u[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", Zp, [
              u[8] || (u[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", Jp, a(h.value) + " node" + a(h.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", e1, [
            (s(!0), o(F, null, J(t.nodes.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l,
              class: "preview-item"
            }, [
              u[10] || (u[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", t1, a(l), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", s1, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : m("", !0)
          ])) : m("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", o1, [
          u[11] || (u[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", n1, [
            t.gitBranch ? (s(), E(Ce, {
              key: 0,
              label: "Branch"
            }, {
              default: d(() => [
                w(Yt, null, {
                  default: d(() => [
                    y(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : m("", !0),
            t.gitCommit ? (s(), E(Ce, {
              key: 1,
              label: "Commit"
            }, {
              default: d(() => [
                w(gs, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : m("", !0)
          ])
        ])) : m("", !0)
      ])
    ]));
  }
}), l1 = /* @__PURE__ */ Q(a1, [["__scopeId", "data-v-182fe113"]]), i1 = { class: "import-config" }, r1 = { class: "config-container" }, d1 = { class: "config-field" }, c1 = { class: "input-wrapper" }, u1 = ["value"], m1 = {
  key: 0,
  class: "validating-indicator"
}, v1 = {
  key: 1,
  class: "valid-indicator"
}, f1 = {
  key: 0,
  class: "field-error"
}, g1 = { class: "config-field" }, h1 = { class: "strategy-options" }, p1 = ["value", "checked", "onChange"], y1 = { class: "strategy-content" }, w1 = { class: "strategy-label" }, k1 = { class: "strategy-description" }, b1 = { class: "advanced-section" }, _1 = { class: "advanced-content" }, $1 = { class: "config-field" }, C1 = ["value"], x1 = ["value"], S1 = /* @__PURE__ */ Y({
  __name: "ImportConfigForm",
  props: {
    name: {},
    modelStrategy: {},
    torchBackend: {},
    nameError: {}
  },
  emits: ["update:name", "update:modelStrategy", "update:torchBackend", "validate-name"],
  setup(t, { emit: r }) {
    const n = t, i = r, h = $(!1), f = $(!1);
    yt(() => n.nameError, (p) => {
      h.value = !1, f.value = !p && n.name.length > 0;
    });
    const g = [
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
    function l(p) {
      const c = p.target.value;
      i("update:name", c), f.value = !1, u && clearTimeout(u), c.length > 0 ? (h.value = !0, u = setTimeout(() => {
        i("validate-name", c);
      }, 400)) : h.value = !1;
    }
    function v() {
      n.name.length > 0 && i("validate-name", n.name);
    }
    return (p, c) => (s(), o("div", i1, [
      w(Ke, null, {
        default: d(() => [...c[1] || (c[1] = [
          y("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", r1, [
        e("div", d1, [
          w(Bt, { required: "" }, {
            default: d(() => [...c[2] || (c[2] = [
              y("Environment Name", -1)
            ])]),
            _: 1
          }),
          e("div", c1, [
            e("input", {
              type: "text",
              class: ne(["name-input", { error: t.nameError, valid: f.value }]),
              value: t.name,
              placeholder: "my-imported-env",
              onInput: l,
              onBlur: v
            }, null, 42, u1),
            h.value ? (s(), o("span", m1, "...")) : f.value ? (s(), o("span", v1, "✓")) : m("", !0)
          ]),
          t.nameError ? (s(), o("div", f1, a(t.nameError), 1)) : m("", !0),
          c[3] || (c[3] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", g1, [
          w(Bt, null, {
            default: d(() => [...c[4] || (c[4] = [
              y("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", h1, [
            (s(), o(F, null, J(g, (M) => e("label", {
              key: M.value,
              class: ne(["strategy-option", { active: t.modelStrategy === M.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: M.value,
                checked: t.modelStrategy === M.value,
                onChange: (_) => i("update:modelStrategy", M.value)
              }, null, 40, p1),
              e("div", y1, [
                e("span", w1, a(M.label), 1),
                e("span", k1, a(M.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("details", b1, [
          c[6] || (c[6] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", _1, [
            e("div", $1, [
              w(Bt, null, {
                default: d(() => [...c[5] || (c[5] = [
                  y("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              e("select", {
                class: "backend-select",
                value: t.torchBackend,
                onChange: c[0] || (c[0] = (M) => i("update:torchBackend", M.target.value))
              }, [
                (s(!0), o(F, null, J(ye(bs), (M) => (s(), o("option", {
                  key: M,
                  value: M
                }, a(M) + a(M === "auto" ? " (detect GPU)" : ""), 9, x1))), 128))
              ], 40, C1)
            ])
          ])
        ])
      ])
    ]));
  }
}), I1 = /* @__PURE__ */ Q(S1, [["__scopeId", "data-v-ea63af76"]]), E1 = {
  key: 0,
  class: "import-empty"
}, M1 = {
  key: 1,
  class: "import-configure"
}, R1 = { class: "selected-file-bar" }, z1 = { class: "file-bar-content" }, L1 = { class: "file-bar-info" }, T1 = { class: "file-bar-name" }, D1 = { class: "file-bar-size" }, N1 = {
  key: 0,
  class: "preview-loading"
}, P1 = { class: "import-actions" }, U1 = {
  key: 2,
  class: "import-progress"
}, B1 = { class: "progress-content" }, O1 = { class: "progress-info" }, A1 = { class: "progress-title" }, F1 = { class: "progress-detail" }, V1 = { class: "progress-bar" }, W1 = { class: "progress-status" }, G1 = {
  key: 3,
  class: "import-complete"
}, j1 = { class: "complete-message" }, q1 = { class: "complete-title" }, H1 = { class: "complete-details" }, K1 = { class: "complete-actions" }, Y1 = /* @__PURE__ */ Y({
  __name: "ImportSection",
  setup(t) {
    const { previewTarballImport: r, validateEnvironmentName: n, executeImport: i, getImportProgress: h } = ze();
    let f = null;
    const g = $(!1), u = $(null), l = $(!1), v = $(!1), p = $(!1), c = $(""), M = $(!1), _ = $(null), z = $(null), b = $({
      name: "",
      modelStrategy: "required",
      torchBackend: "auto"
    }), x = $(null), k = $({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), B = D(() => {
      if (!z.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const N = z.value;
      return {
        sourceEnvironment: N.comfyui_version ? `ComfyUI ${N.comfyui_version}` : "Unknown",
        workflows: N.workflows.map((K) => K.name),
        models: N.models.map((K) => ({
          filename: K.filename,
          size: 0,
          type: K.relative_path.split("/")[0] || "model"
        })),
        nodes: N.nodes.map((K) => K.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), S = D(() => !M.value && !_.value && z.value && b.value.name.length > 0 && !x.value);
    async function I(N) {
      u.value = N, M.value = !0, _.value = null, z.value = null;
      try {
        const K = await r(N);
        z.value = K;
      } catch (K) {
        _.value = K instanceof Error ? K.message : "Failed to analyze file", console.error("Preview error:", K);
      } finally {
        M.value = !1;
      }
    }
    function V() {
      u.value = null, v.value = !1, p.value = !1, c.value = "", z.value = null, _.value = null, b.value = { name: "", modelStrategy: "required", torchBackend: "auto" }, x.value = null;
    }
    function H() {
      R(), V(), l.value = !1, M.value = !1, k.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function te(N) {
      if (!N) {
        x.value = "Environment name is required";
        return;
      }
      try {
        const K = await n(N);
        x.value = K.valid ? null : K.error || "Invalid name";
      } catch {
        x.value = "Failed to validate name";
      }
    }
    async function W() {
      if (!(!u.value || !b.value.name)) {
        l.value = !0, v.value = !1, k.value = { message: `Creating environment '${b.value.name}'...`, detail: "", percent: 0 };
        try {
          const N = await i(
            u.value,
            b.value.name,
            b.value.modelStrategy,
            b.value.torchBackend
          );
          N.status === "started" ? T() : (p.value = !1, c.value = N.message, l.value = !1, v.value = !0);
        } catch (N) {
          p.value = !1, c.value = N instanceof Error ? N.message : "Unknown error occurred during import", l.value = !1, v.value = !0;
        }
      }
    }
    function T() {
      f || (f = setInterval(async () => {
        try {
          const N = await h();
          k.value = {
            message: N.message,
            detail: "",
            percent: N.state === "importing" ? 50 : N.state === "complete" ? 100 : 0
          }, N.state === "complete" ? (R(), p.value = !0, c.value = `Environment '${N.environment_name}' created successfully`, l.value = !1, v.value = !0) : N.state === "error" && (R(), p.value = !1, c.value = N.error || N.message, l.value = !1, v.value = !0);
        } catch (N) {
          console.error("Failed to poll import progress:", N);
        }
      }, 2e3));
    }
    function R() {
      f && (clearInterval(f), f = null);
    }
    function U(N) {
      return N < 1024 ? `${N} B` : N < 1024 * 1024 ? `${(N / 1024).toFixed(1)} KB` : N < 1024 * 1024 * 1024 ? `${(N / (1024 * 1024)).toFixed(1)} MB` : `${(N / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (N, K) => (s(), o(F, null, [
      w(Be, null, {
        header: d(() => [
          w(Oe, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: K[0] || (K[0] = (re) => g.value = !0)
          })
        ]),
        content: d(() => {
          var re;
          return [
            !u.value && !l.value ? (s(), o("div", E1, [
              w(Mp, {
                accept: ".tar.gz,.tgz,.zip",
                "primary-text": "Drag & drop environment export here",
                "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
                "button-text": "Select Export File",
                onFileSelected: I
              })
            ])) : u.value && !l.value && !v.value ? (s(), o("div", M1, [
              e("div", R1, [
                e("div", z1, [
                  K[5] || (K[5] = e("div", { class: "file-bar-icon" }, "📦", -1)),
                  e("div", L1, [
                    e("div", T1, a(u.value.name), 1),
                    e("div", D1, a(U(u.value.size)), 1)
                  ])
                ]),
                w(ee, {
                  variant: "ghost",
                  size: "sm",
                  onClick: V
                }, {
                  default: d(() => [...K[6] || (K[6] = [
                    y(" Change File ", -1)
                  ])]),
                  _: 1
                })
              ]),
              M.value ? (s(), o("div", N1, [...K[7] || (K[7] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Analyzing import file...", -1)
              ])])) : _.value ? (s(), E(pt, {
                key: 1,
                type: "error",
                title: "Failed to Analyze File",
                details: [_.value]
              }, null, 8, ["details"])) : z.value ? (s(), E(l1, {
                key: 2,
                "source-environment": B.value.sourceEnvironment,
                workflows: B.value.workflows,
                models: B.value.models,
                nodes: B.value.nodes,
                "git-branch": B.value.gitBranch,
                "git-commit": B.value.gitCommit
              }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : m("", !0),
              z.value ? (s(), E(I1, {
                key: 3,
                name: b.value.name,
                "onUpdate:name": K[1] || (K[1] = (X) => b.value.name = X),
                "model-strategy": b.value.modelStrategy,
                "onUpdate:modelStrategy": K[2] || (K[2] = (X) => b.value.modelStrategy = X),
                "torch-backend": b.value.torchBackend,
                "onUpdate:torchBackend": K[3] || (K[3] = (X) => b.value.torchBackend = X),
                "name-error": x.value,
                onValidateName: te
              }, null, 8, ["name", "model-strategy", "torch-backend", "name-error"])) : m("", !0),
              b.value.modelStrategy === "skip" && ((re = z.value) != null && re.models_needing_download) ? (s(), E(pt, {
                key: 4,
                type: "warning",
                title: "Models Will Not Be Downloaded",
                details: [
                  `${z.value.models_needing_download} model(s) will need to be downloaded later`,
                  "You can resolve missing models from the STATUS page after import"
                ]
              }, null, 8, ["details"])) : m("", !0),
              e("div", P1, [
                w(ee, {
                  variant: "primary",
                  size: "md",
                  disabled: !S.value,
                  onClick: W
                }, {
                  default: d(() => [...K[8] || (K[8] = [
                    e("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 1a7 7 0 100 14A7 7 0 008 1zm0 12.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11zM8 4v4h3l-4 4-4-4h3V4h2z" })
                    ], -1),
                    y(" Create Environment ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"]),
                w(ee, {
                  variant: "secondary",
                  size: "md",
                  onClick: V
                }, {
                  default: d(() => [...K[9] || (K[9] = [
                    y(" Cancel ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])) : l.value ? (s(), o("div", U1, [
              e("div", B1, [
                K[10] || (K[10] = e("div", { class: "progress-icon" }, [
                  e("div", { class: "spinner" })
                ], -1)),
                e("div", O1, [
                  e("div", A1, a(k.value.message), 1),
                  e("div", F1, a(k.value.detail), 1)
                ])
              ]),
              e("div", V1, [
                e("div", {
                  class: "progress-bar-fill",
                  style: nt({ width: `${k.value.percent}%` })
                }, null, 4)
              ]),
              e("div", W1, a(k.value.percent) + "% complete ", 1)
            ])) : v.value ? (s(), o("div", G1, [
              e("div", {
                class: ne(["complete-icon", p.value ? "success" : "error"])
              }, a(p.value ? "✓" : "✕"), 3),
              e("div", j1, [
                e("div", q1, a(p.value ? "Import Successful" : "Import Failed"), 1),
                e("div", H1, a(c.value), 1)
              ]),
              e("div", K1, [
                w(ee, {
                  variant: "primary",
                  size: "md",
                  onClick: H
                }, {
                  default: d(() => [...K[11] || (K[11] = [
                    y(" Import Another ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])) : m("", !0)
          ];
        }),
        _: 1
      }),
      w(at, {
        show: g.value,
        title: "How Import Works",
        onClose: K[4] || (K[4] = (re) => g.value = !1)
      }, {
        content: d(() => [...K[12] || (K[12] = [
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
}), Q1 = /* @__PURE__ */ Q(Y1, [["__scopeId", "data-v-f9c61799"]]), X1 = { class: "header-info" }, Z1 = { class: "commit-hash" }, J1 = {
  key: 0,
  class: "commit-refs"
}, ey = { class: "commit-message" }, ty = { class: "commit-date" }, sy = {
  key: 0,
  class: "loading"
}, oy = {
  key: 1,
  class: "changes-section"
}, ny = { class: "stats-row" }, ay = { class: "stat" }, ly = { class: "stat insertions" }, iy = { class: "stat deletions" }, ry = {
  key: 0,
  class: "change-group"
}, dy = {
  key: 1,
  class: "change-group"
}, cy = {
  key: 0,
  class: "version"
}, uy = {
  key: 2,
  class: "change-group"
}, my = { class: "change-item" }, vy = /* @__PURE__ */ Y({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const r = t, { getCommitDetail: n } = ze(), i = $(null), h = $(!0), f = D(() => {
      if (!i.value) return !1;
      const u = i.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), g = D(() => {
      if (!i.value) return !1;
      const u = i.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return Ee(async () => {
      try {
        i.value = await n(r.commit.hash);
      } finally {
        h.value = !1;
      }
    }), (u, l) => (s(), E(Ye, {
      size: "md",
      "show-close-button": !1,
      onClose: l[3] || (l[3] = (v) => u.$emit("close"))
    }, {
      header: d(() => {
        var v, p, c, M;
        return [
          e("div", X1, [
            l[4] || (l[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Z1, a(((v = i.value) == null ? void 0 : v.short_hash) || t.commit.short_hash || ((p = t.commit.hash) == null ? void 0 : p.slice(0, 7))), 1),
            (M = (c = i.value) == null ? void 0 : c.refs) != null && M.length ? (s(), o("span", J1, [
              (s(!0), o(F, null, J(i.value.refs, (_) => (s(), o("span", {
                key: _,
                class: "ref-badge"
              }, a(_), 1))), 128))
            ])) : m("", !0)
          ]),
          w(ie, {
            variant: "ghost",
            size: "sm",
            onClick: l[0] || (l[0] = (_) => u.$emit("close"))
          }, {
            default: d(() => [...l[5] || (l[5] = [
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
      body: d(() => {
        var v, p;
        return [
          e("div", ey, a(((v = i.value) == null ? void 0 : v.message) || t.commit.message), 1),
          e("div", ty, a(((p = i.value) == null ? void 0 : p.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          h.value ? (s(), o("div", sy, "Loading details...")) : i.value ? (s(), o("div", oy, [
            e("div", ny, [
              e("span", ay, a(i.value.stats.files_changed) + " files", 1),
              e("span", ly, "+" + a(i.value.stats.insertions), 1),
              e("span", iy, "-" + a(i.value.stats.deletions), 1)
            ]),
            f.value ? (s(), o("div", ry, [
              w(Rt, { variant: "section" }, {
                default: d(() => [...l[6] || (l[6] = [
                  y("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(F, null, J(i.value.changes.workflows.added, (c) => (s(), o("div", {
                key: "add-" + c,
                class: "change-item added"
              }, [
                l[7] || (l[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(c), 1)
              ]))), 128)),
              (s(!0), o(F, null, J(i.value.changes.workflows.modified, (c) => (s(), o("div", {
                key: "mod-" + c,
                class: "change-item modified"
              }, [
                l[8] || (l[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(c), 1)
              ]))), 128)),
              (s(!0), o(F, null, J(i.value.changes.workflows.deleted, (c) => (s(), o("div", {
                key: "del-" + c,
                class: "change-item deleted"
              }, [
                l[9] || (l[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(c), 1)
              ]))), 128))
            ])) : m("", !0),
            g.value ? (s(), o("div", dy, [
              w(Rt, { variant: "section" }, {
                default: d(() => [...l[10] || (l[10] = [
                  y("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(F, null, J(i.value.changes.nodes.added, (c) => (s(), o("div", {
                key: "add-" + c.name,
                class: "change-item added"
              }, [
                l[11] || (l[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(c.name), 1),
                c.version ? (s(), o("span", cy, "(" + a(c.version) + ")", 1)) : m("", !0)
              ]))), 128)),
              (s(!0), o(F, null, J(i.value.changes.nodes.removed, (c) => (s(), o("div", {
                key: "rem-" + c.name,
                class: "change-item deleted"
              }, [
                l[12] || (l[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(c.name), 1)
              ]))), 128))
            ])) : m("", !0),
            i.value.changes.models.resolved > 0 ? (s(), o("div", uy, [
              w(Rt, { variant: "section" }, {
                default: d(() => [...l[13] || (l[13] = [
                  y("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", my, [
                l[14] || (l[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : m("", !0)
          ])) : m("", !0)
        ];
      }),
      footer: d(() => [
        w(ie, {
          variant: "secondary",
          onClick: l[1] || (l[1] = (v) => u.$emit("createBranch", t.commit))
        }, {
          default: d(() => [...l[15] || (l[15] = [
            y(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        w(ie, {
          variant: "primary",
          onClick: l[2] || (l[2] = (v) => u.$emit("checkout", t.commit))
        }, {
          default: d(() => [...l[16] || (l[16] = [
            y(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), fy = /* @__PURE__ */ Q(vy, [["__scopeId", "data-v-d256ff6d"]]), gy = { class: "dialog-message" }, hy = {
  key: 0,
  class: "dialog-details"
}, py = {
  key: 1,
  class: "dialog-warning"
}, yy = /* @__PURE__ */ Y({
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
    return (r, n) => (s(), E(Ye, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (i) => r.$emit("cancel"))
    }, {
      body: d(() => [
        e("p", gy, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", hy, [
          (s(!0), o(F, null, J(t.details, (i, h) => (s(), o("div", {
            key: h,
            class: "detail-item"
          }, " • " + a(i), 1))), 128))
        ])) : m("", !0),
        t.warning ? (s(), o("p", py, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          y(" " + a(t.warning), 1)
        ])) : m("", !0)
      ]),
      footer: d(() => [
        w(ie, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (i) => r.$emit("cancel"))
        }, {
          default: d(() => [
            y(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), E(ie, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (i) => r.$emit("secondary"))
        }, {
          default: d(() => [
            y(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : m("", !0),
        w(ie, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (i) => r.$emit("confirm"))
        }, {
          default: d(() => [
            y(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), wy = /* @__PURE__ */ Q(yy, [["__scopeId", "data-v-3670b9f5"]]), ky = { class: "base-textarea-wrapper" }, by = ["value", "rows", "placeholder", "disabled", "maxlength"], _y = {
  key: 0,
  class: "base-textarea-count"
}, $y = /* @__PURE__ */ Y({
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
    return (r, n) => (s(), o("div", ky, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (i) => r.$emit("update:modelValue", i.target.value)),
        onKeydown: [
          n[1] || (n[1] = ut($e((i) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = ut($e((i) => r.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, by),
      t.showCharCount && t.maxLength ? (s(), o("div", _y, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : m("", !0)
    ]));
  }
}), ds = /* @__PURE__ */ Q($y, [["__scopeId", "data-v-5516e6fc"]]), Cy = ["checked", "disabled"], xy = { class: "base-checkbox-box" }, Sy = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Iy = {
  key: 0,
  class: "base-checkbox-label"
}, Ey = /* @__PURE__ */ Y({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (r, n) => (s(), o("label", {
      class: ne(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (i) => r.$emit("update:modelValue", i.target.checked))
      }, null, 40, Cy),
      e("span", xy, [
        t.modelValue ? (s(), o("svg", Sy, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : m("", !0)
      ]),
      r.$slots.default ? (s(), o("span", Iy, [
        pe(r.$slots, "default", {}, void 0, !0)
      ])) : m("", !0)
    ], 2));
  }
}), cs = /* @__PURE__ */ Q(Ey, [["__scopeId", "data-v-bf17c831"]]), My = { class: "popover-header" }, Ry = { class: "popover-body" }, zy = {
  key: 0,
  class: "changes-summary"
}, Ly = {
  key: 0,
  class: "change-item"
}, Ty = {
  key: 1,
  class: "change-item"
}, Dy = {
  key: 2,
  class: "change-item"
}, Ny = {
  key: 3,
  class: "change-item"
}, Py = {
  key: 4,
  class: "change-item"
}, Uy = {
  key: 1,
  class: "no-changes"
}, By = {
  key: 2,
  class: "loading"
}, Oy = {
  key: 3,
  class: "issues-error"
}, Ay = { class: "error-header" }, Fy = { class: "error-title" }, Vy = { class: "issues-list" }, Wy = { class: "message-section" }, Gy = { class: "popover-footer" }, jy = {
  key: 1,
  class: "commit-popover"
}, qy = { class: "popover-header" }, Hy = { class: "popover-body" }, Ky = {
  key: 0,
  class: "changes-summary"
}, Yy = {
  key: 0,
  class: "change-item"
}, Qy = {
  key: 1,
  class: "change-item"
}, Xy = {
  key: 2,
  class: "change-item"
}, Zy = {
  key: 3,
  class: "change-item"
}, Jy = {
  key: 4,
  class: "change-item"
}, ew = {
  key: 1,
  class: "no-changes"
}, tw = {
  key: 2,
  class: "loading"
}, sw = {
  key: 3,
  class: "issues-error"
}, ow = { class: "error-header" }, nw = { class: "error-title" }, aw = { class: "issues-list" }, lw = { class: "message-section" }, iw = { class: "popover-footer" }, rw = /* @__PURE__ */ Y({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: r }) {
    const n = t, i = r, { commit: h } = ze(), f = $(""), g = $(!1), u = $(!1), l = $(null), v = D(() => {
      if (!n.status) return !1;
      const z = n.status.workflows;
      return z.new.length > 0 || z.modified.length > 0 || z.deleted.length > 0 || n.status.has_changes;
    }), p = D(() => {
      var z;
      return (z = n.status) != null && z.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (b) => b.has_issues && (b.sync_state === "new" || b.sync_state === "modified")
      ) : [];
    }), c = D(() => p.value.length > 0), M = D(() => c.value && !u.value);
    async function _() {
      var z, b, x;
      if (!(c.value && !u.value) && !(!v.value || !f.value.trim() || g.value)) {
        g.value = !0, l.value = null;
        try {
          const k = await h(f.value.trim(), u.value);
          k.status === "success" ? (l.value = {
            type: "success",
            message: `Committed: ${((z = k.summary) == null ? void 0 : z.new) || 0} new, ${((b = k.summary) == null ? void 0 : b.modified) || 0} modified, ${((x = k.summary) == null ? void 0 : x.deleted) || 0} deleted`
          }, f.value = "", u.value = !1, setTimeout(() => i("committed"), 1e3)) : k.status === "no_changes" ? l.value = { type: "error", message: "No changes to commit" } : k.status === "blocked" ? l.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : l.value = { type: "error", message: k.message || "Commit failed" };
        } catch (k) {
          l.value = { type: "error", message: k instanceof Error ? k.message : "Commit failed" };
        } finally {
          g.value = !1;
        }
      }
    }
    return (z, b) => t.asModal ? (s(), E(Re, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: b[5] || (b[5] = (x) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: b[4] || (b[4] = $e(() => {
          }, ["stop"]))
        }, [
          e("div", My, [
            b[11] || (b[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: b[0] || (b[0] = (x) => i("close"))
            }, [...b[10] || (b[10] = [
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
          e("div", Ry, [
            t.status && v.value ? (s(), o("div", zy, [
              t.status.workflows.new.length ? (s(), o("div", Ly, [
                b[12] || (b[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : m("", !0),
              t.status.workflows.modified.length ? (s(), o("div", Ty, [
                b[13] || (b[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : m("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", Dy, [
                b[14] || (b[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : m("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", Ny, [
                b[15] || (b[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : m("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", Py, [
                b[16] || (b[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : m("", !0)
            ])) : t.status ? (s(), o("div", Uy, " No changes to commit ")) : (s(), o("div", By, " Loading... ")),
            c.value ? (s(), o("div", Oy, [
              e("div", Ay, [
                b[17] || (b[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Fy, a(p.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", Vy, [
                (s(!0), o(F, null, J(p.value, (x) => (s(), o("div", {
                  key: x.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a(x.name), 1),
                  y(": " + a(x.issue_summary), 1)
                ]))), 128))
              ]),
              w(cs, {
                modelValue: u.value,
                "onUpdate:modelValue": b[1] || (b[1] = (x) => u.value = x),
                class: "allow-issues-toggle"
              }, {
                default: d(() => [...b[18] || (b[18] = [
                  y(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : m("", !0),
            e("div", Wy, [
              w(ds, {
                modelValue: f.value,
                "onUpdate:modelValue": b[2] || (b[2] = (x) => f.value = x),
                placeholder: M.value ? "Enable 'Allow issues' to commit" : v.value ? "Describe your changes..." : "No changes",
                disabled: !v.value || g.value || M.value,
                rows: 3,
                onCtrlEnter: _
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            l.value ? (s(), o("div", {
              key: 4,
              class: ne(["result", l.value.type])
            }, a(l.value.message), 3)) : m("", !0)
          ]),
          e("div", Gy, [
            w(ie, {
              variant: "secondary",
              onClick: b[3] || (b[3] = (x) => i("close"))
            }, {
              default: d(() => [...b[19] || (b[19] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(ie, {
              variant: u.value ? "danger" : "primary",
              disabled: !v.value || !f.value.trim() || g.value || M.value,
              loading: g.value,
              onClick: _
            }, {
              default: d(() => [
                y(a(g.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", jy, [
      e("div", qy, [
        b[21] || (b[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: b[6] || (b[6] = (x) => i("close"))
        }, [...b[20] || (b[20] = [
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
      e("div", Hy, [
        t.status && v.value ? (s(), o("div", Ky, [
          t.status.workflows.new.length ? (s(), o("div", Yy, [
            b[22] || (b[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : m("", !0),
          t.status.workflows.modified.length ? (s(), o("div", Qy, [
            b[23] || (b[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : m("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", Xy, [
            b[24] || (b[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : m("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", Zy, [
            b[25] || (b[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : m("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", Jy, [
            b[26] || (b[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : m("", !0)
        ])) : t.status ? (s(), o("div", ew, " No changes to commit ")) : (s(), o("div", tw, " Loading... ")),
        c.value ? (s(), o("div", sw, [
          e("div", ow, [
            b[27] || (b[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", nw, a(p.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", aw, [
            (s(!0), o(F, null, J(p.value, (x) => (s(), o("div", {
              key: x.name,
              class: "issue-item"
            }, [
              e("strong", null, a(x.name), 1),
              y(": " + a(x.issue_summary), 1)
            ]))), 128))
          ]),
          w(cs, {
            modelValue: u.value,
            "onUpdate:modelValue": b[7] || (b[7] = (x) => u.value = x),
            class: "allow-issues-toggle"
          }, {
            default: d(() => [...b[28] || (b[28] = [
              y(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : m("", !0),
        e("div", lw, [
          w(ds, {
            modelValue: f.value,
            "onUpdate:modelValue": b[8] || (b[8] = (x) => f.value = x),
            placeholder: M.value ? "Enable 'Allow issues' to commit" : v.value ? "Describe your changes..." : "No changes",
            disabled: !v.value || g.value || M.value,
            rows: 3,
            onCtrlEnter: _
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        l.value ? (s(), o("div", {
          key: 4,
          class: ne(["result", l.value.type])
        }, a(l.value.message), 3)) : m("", !0)
      ]),
      e("div", iw, [
        w(ie, {
          variant: "secondary",
          onClick: b[9] || (b[9] = (x) => i("close"))
        }, {
          default: d(() => [...b[29] || (b[29] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        w(ie, {
          variant: u.value ? "danger" : "primary",
          disabled: !v.value || !f.value.trim() || g.value || M.value,
          loading: g.value,
          onClick: _
        }, {
          default: d(() => [
            y(a(g.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), _s = /* @__PURE__ */ Q(rw, [["__scopeId", "data-v-d92153de"]]), dw = { class: "modal-header" }, cw = { class: "modal-body" }, uw = { class: "switch-message" }, mw = { class: "switch-details" }, vw = { class: "modal-actions" }, fw = /* @__PURE__ */ Y({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, n) => (s(), E(Re, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = $e(() => {
          }, ["stop"]))
        }, [
          e("div", dw, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", cw, [
            e("p", uw, [
              n[6] || (n[6] = y(" Switch from ", -1)),
              e("strong", null, a(t.fromEnvironment), 1),
              n[7] || (n[7] = y(" to ", -1)),
              e("strong", null, a(t.toEnvironment), 1),
              n[8] || (n[8] = y("? ", -1))
            ]),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", mw, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", vw, [
            w(ee, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => r.$emit("close"))
            }, {
              default: d(() => [...n[11] || (n[11] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(ee, {
              variant: "primary",
              onClick: n[2] || (n[2] = (i) => r.$emit("confirm"))
            }, {
              default: d(() => [...n[12] || (n[12] = [
                y(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : m("", !0)
    ]));
  }
}), gw = /* @__PURE__ */ Q(fw, [["__scopeId", "data-v-e9c5253e"]]), hw = { class: "progress-bar" }, pw = /* @__PURE__ */ Y({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const r = t, n = D(() => `${Math.max(0, Math.min(100, r.progress))}%`);
    return (i, h) => (s(), o("div", hw, [
      e("div", {
        class: ne(["progress-fill", t.variant]),
        style: nt({ width: n.value })
      }, null, 6)
    ]));
  }
}), yw = /* @__PURE__ */ Q(pw, [["__scopeId", "data-v-1beb0512"]]), ww = {
  key: 0,
  class: "modal-overlay"
}, kw = { class: "modal-content" }, bw = { class: "modal-body" }, _w = { class: "progress-info" }, $w = { class: "progress-percentage" }, Cw = { class: "progress-state" }, xw = { class: "switch-steps" }, Sw = { class: "step-icon" }, Iw = { class: "step-label" }, Ew = /* @__PURE__ */ Y({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const r = t, n = D(() => {
      const f = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return r.message || f[r.state] || r.state;
    }), i = D(() => r.state === "complete" ? "success" : r.state === "critical_failure" || r.state === "rolled_back" ? "error" : "default"), h = D(() => {
      const f = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], g = f.findIndex((u) => u.state === r.state);
      return f.map((u, l) => {
        let v = "pending", p = "○";
        return l < g ? (v = "completed", p = "✓") : l === g && (v = "active", p = "⟳"), {
          ...u,
          status: v,
          icon: p
        };
      });
    });
    return (f, g) => (s(), E(Re, { to: "body" }, [
      t.show ? (s(), o("div", ww, [
        e("div", kw, [
          g[1] || (g[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", bw, [
            w(yw, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", _w, [
              e("div", $w, a(t.progress) + "%", 1),
              e("div", Cw, a(n.value), 1)
            ]),
            e("div", xw, [
              (s(!0), o(F, null, J(h.value, (u) => (s(), o("div", {
                key: u.state,
                class: ne(["switch-step", u.status])
              }, [
                e("span", Sw, a(u.icon), 1),
                e("span", Iw, a(u.label), 1)
              ], 2))), 128))
            ]),
            g[0] || (g[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : m("", !0)
    ]));
  }
}), Mw = /* @__PURE__ */ Q(Ew, [["__scopeId", "data-v-768a5078"]]), Rw = { class: "modal-header" }, zw = { class: "modal-body" }, Lw = {
  key: 0,
  class: "node-section"
}, Tw = { class: "node-list" }, Dw = {
  key: 1,
  class: "node-section"
}, Nw = { class: "node-list" }, Pw = { class: "modal-actions" }, Uw = /* @__PURE__ */ Y({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (r, n) => (s(), E(Re, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => r.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = $e(() => {
          }, ["stop"]))
        }, [
          e("div", Rw, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => r.$emit("close"))
            }, "✕")
          ]),
          e("div", zw, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", Lw, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Tw, [
                (s(!0), o(F, null, J(t.mismatchDetails.missing_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + a(i), 1))), 128))
              ])
            ])) : m("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", Dw, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Nw, [
                (s(!0), o(F, null, J(t.mismatchDetails.extra_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item remove"
                }, " - " + a(i), 1))), 128))
              ])
            ])) : m("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", Pw, [
            w(ee, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => r.$emit("close"))
            }, {
              default: d(() => [...n[10] || (n[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(ee, {
              variant: "primary",
              onClick: n[2] || (n[2] = (i) => r.$emit("confirm"))
            }, {
              default: d(() => [...n[11] || (n[11] = [
                y(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : m("", !0)
    ]));
  }
}), Bw = /* @__PURE__ */ Q(Uw, [["__scopeId", "data-v-7cad7518"]]), Ow = { class: "comfygit-panel" }, Aw = { class: "panel-header" }, Fw = { class: "header-left" }, Vw = {
  key: 0,
  class: "header-info"
}, Ww = { class: "header-actions" }, Gw = { class: "env-switcher" }, jw = {
  key: 0,
  class: "header-info"
}, qw = { class: "branch-name" }, Hw = { class: "panel-main" }, Kw = { class: "sidebar" }, Yw = { class: "sidebar-section" }, Qw = { class: "sidebar-section" }, Xw = { class: "sidebar-section" }, Zw = { class: "content-area" }, Jw = {
  key: 0,
  class: "error-message"
}, e0 = {
  key: 1,
  class: "loading"
}, t0 = {
  key: 4,
  class: "dialog-overlay"
}, s0 = { class: "dialog-content create-progress-dialog" }, o0 = { class: "dialog-body create-progress-body" }, n0 = { class: "create-progress-message" }, a0 = { class: "dialog-content env-selector-dialog" }, l0 = { class: "dialog-header" }, i0 = { class: "dialog-body" }, r0 = { class: "env-list" }, d0 = { class: "env-info" }, c0 = { class: "env-name-row" }, u0 = { class: "env-indicator" }, m0 = { class: "env-name" }, v0 = {
  key: 0,
  class: "env-branch"
}, f0 = {
  key: 1,
  class: "current-label"
}, g0 = { class: "env-stats" }, h0 = ["onClick"], p0 = { class: "toast-container" }, y0 = { class: "toast-message" }, w0 = /* @__PURE__ */ Y({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: r }) {
    const n = r, {
      getStatus: i,
      getHistory: h,
      getBranches: f,
      checkout: g,
      createBranch: u,
      switchBranch: l,
      deleteBranch: v,
      getEnvironments: p,
      switchEnvironment: c,
      getSwitchProgress: M,
      createEnvironment: _,
      getCreateProgress: z,
      deleteEnvironment: b,
      syncEnvironmentManually: x,
      repairWorkflowModels: k
    } = ze(), B = ps(), S = $(null), I = $([]), V = $([]), H = $([]), te = D(() => H.value.find((G) => G.is_current)), W = $(!1), T = $(null), R = $(null), U = $(!1), N = $(null), K = $(null), re = $(null), X = $(!1), se = $(!1), O = $(""), C = $({ state: "idle", progress: 0, message: "" });
    let ae = null, oe = null;
    const xe = $(!1), be = $({ state: "idle", message: "" }), Le = $(null);
    let Ae = null;
    const ce = $("status"), Fe = $("this-env");
    function ke(G, L) {
      ce.value = G, Fe.value = L;
    }
    function Te(G) {
      const le = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[G];
      le && ke(le.view, le.section);
    }
    function Ge() {
      ke("branches", "this-env");
    }
    function et() {
      n("close"), setTimeout(() => {
        var L;
        const G = document.querySelectorAll("button.comfyui-button");
        for (const le of G)
          if (((L = le.textContent) == null ? void 0 : L.trim()) === "Manager") {
            le.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const he = $(null), je = $(!1), qe = $(!1), He = $([]);
    let mt = 0;
    function me(G, L = "info", le = 3e3) {
      const _e = ++mt;
      return He.value.push({ id: _e, message: G, type: L }), le > 0 && setTimeout(() => {
        He.value = He.value.filter((Pe) => Pe.id !== _e);
      }, le), _e;
    }
    function De(G) {
      He.value = He.value.filter((L) => L.id !== G);
    }
    function vt(G, L) {
      me(G, L);
    }
    const lt = D(() => {
      if (!S.value) return "neutral";
      const G = S.value.workflows, L = G.new.length > 0 || G.modified.length > 0 || G.deleted.length > 0 || S.value.has_changes;
      return S.value.comparison.is_synced ? L ? "warning" : "success" : "error";
    });
    D(() => S.value ? lt.value === "success" ? "All synced" : lt.value === "warning" ? "Uncommitted changes" : lt.value === "error" ? "Not synced" : "" : "");
    async function Se() {
      W.value = !0, T.value = null;
      try {
        const [G, L, le, _e] = await Promise.all([
          i(!0),
          h(),
          f(),
          p()
        ]);
        S.value = G, I.value = L.commits, V.value = le.branches, H.value = _e, n("statusUpdate", G), N.value && await N.value.loadWorkflows(!0);
      } catch (G) {
        T.value = G instanceof Error ? G.message : "Failed to load status", S.value = null, I.value = [], V.value = [];
      } finally {
        W.value = !1;
      }
    }
    function ft(G) {
      R.value = G;
    }
    async function q(G) {
      var le;
      R.value = null;
      const L = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      he.value = {
        title: L ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: L ? "You have uncommitted changes that will be lost." : `Checkout commit ${G.short_hash || ((le = G.hash) == null ? void 0 : le.slice(0, 7))}?`,
        details: L ? as() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: L ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: L,
        onConfirm: async () => {
          var Ue;
          he.value = null, Ne();
          const _e = me(`Checking out ${G.short_hash || ((Ue = G.hash) == null ? void 0 : Ue.slice(0, 7))}...`, "info", 0), Pe = await g(G.hash, L);
          De(_e), Pe.status === "success" ? me("Restarting ComfyUI...", "success") : me(Pe.message || "Checkout failed", "error");
        }
      };
    }
    async function A(G) {
      const L = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      he.value = {
        title: L ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: L ? "You have uncommitted changes." : `Switch to branch "${G}"?`,
        details: L ? as() : void 0,
        warning: L ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: L ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          he.value = null, Ne();
          const le = me(`Switching to ${G}...`, "info", 0), _e = await l(G, L);
          De(le), _e.status === "success" ? me("Restarting ComfyUI...", "success") : me(_e.message || "Branch switch failed", "error");
        }
      };
    }
    async function Z(G) {
      const L = me(`Creating branch ${G}...`, "info", 0), le = await u(G);
      De(L), le.status === "success" ? (me(`Branch "${G}" created`, "success"), await Se()) : me(le.message || "Failed to create branch", "error");
    }
    async function ge(G, L = !1) {
      const le = async (_e) => {
        var Ue;
        const Pe = me(`Deleting branch ${G}...`, "info", 0);
        try {
          const ue = await v(G, _e);
          De(Pe), ue.status === "success" ? (me(`Branch "${G}" deleted`, "success"), await Se()) : (Ue = ue.message) != null && Ue.includes("not fully merged") ? he.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${G}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              he.value = null, await le(!0);
            }
          } : me(ue.message || "Failed to delete branch", "error");
        } catch (ue) {
          De(Pe);
          const Vt = ue instanceof Error ? ue.message : "Failed to delete branch";
          Vt.includes("not fully merged") ? he.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${G}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              he.value = null, await le(!0);
            }
          } : me(Vt, "error");
        }
      };
      he.value = {
        title: "Delete Branch",
        message: `Delete branch "${G}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          he.value = null, await le(L);
        }
      };
    }
    async function Ie(G) {
      R.value = null;
      const L = prompt("Enter branch name:");
      if (L) {
        const le = me(`Creating branch ${L}...`, "info", 0), _e = await u(L, G.hash);
        De(le), _e.status === "success" ? (me(`Branch "${L}" created from ${G.short_hash}`, "success"), await Se()) : me(_e.message || "Failed to create branch", "error");
      }
    }
    function Ne() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function P() {
      he.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var G;
          he.value = null, Ne(), me("Restarting environment...", "info");
          try {
            (G = window.app) != null && G.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function j() {
      he.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var G;
          he.value = null, me("Stopping environment...", "info");
          try {
            (G = window.app) != null && G.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function de(G) {
      U.value = !1, O.value = G, X.value = !0;
    }
    async function Qe() {
      X.value = !1, se.value = !0, Ne(), C.value = {
        progress: 10,
        state: it(10),
        message: Nt(10)
      };
      try {
        await c(O.value), Is(), Es();
      } catch (G) {
        gt(), se.value = !1, me(`Failed to initiate switch: ${G instanceof Error ? G.message : "Unknown error"}`, "error"), C.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function it(G) {
      return G >= 100 ? "complete" : G >= 80 ? "validating" : G >= 60 ? "starting" : G >= 30 ? "syncing" : "preparing";
    }
    function Nt(G) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[it(G)] || "";
    }
    function Is() {
      if (oe) return;
      let G = 10;
      const L = 60, le = 5e3, _e = 100, Pe = (L - G) / (le / _e);
      oe = window.setInterval(() => {
        if (G += Pe, G >= L && (G = L, gt()), C.value.progress < L) {
          const Ue = Math.floor(G);
          C.value = {
            progress: Ue,
            state: it(Ue),
            message: Nt(Ue)
          };
        }
      }, _e);
    }
    function gt() {
      oe && (clearInterval(oe), oe = null);
    }
    function Es() {
      ae || (ae = window.setInterval(async () => {
        try {
          let G = await B.getStatus();
          if ((!G || G.state === "idle") && (G = await M()), !G)
            return;
          const L = G.progress || 0;
          L >= 60 && gt();
          const le = Math.max(L, C.value.progress), _e = G.state && G.state !== "idle" && G.state !== "unknown", Pe = _e ? G.state : it(le), Ue = _e && G.message || Nt(le);
          C.value = {
            state: Pe,
            progress: le,
            message: Ue
          }, G.state === "complete" ? (gt(), Ft(), se.value = !1, me(`✓ Switched to ${O.value}`, "success"), await Se(), O.value = "") : G.state === "rolled_back" ? (gt(), Ft(), se.value = !1, me("Switch failed, restored previous environment", "warning"), O.value = "") : G.state === "critical_failure" && (gt(), Ft(), se.value = !1, me(`Critical error during switch: ${G.message}`, "error"), O.value = "");
        } catch (G) {
          console.error("Failed to poll switch progress:", G);
        }
      }, 1e3));
    }
    function Ft() {
      gt(), ae && (clearInterval(ae), ae = null);
    }
    function Ms() {
      X.value = !1, O.value = "";
    }
    async function Rs() {
      je.value = !1, await Se(), me("✓ Changes committed", "success");
    }
    async function zs() {
      qe.value = !1;
      const G = me("Syncing environment...", "info", 0);
      try {
        const L = await x("skip", !0);
        if (De(G), L.status === "success") {
          const le = [];
          L.nodes_installed.length && le.push(`${L.nodes_installed.length} installed`), L.nodes_removed.length && le.push(`${L.nodes_removed.length} removed`);
          const _e = le.length ? `: ${le.join(", ")}` : "";
          me(`✓ Environment synced${_e}`, "success"), await Se();
        } else {
          const le = L.errors.length ? L.errors.join("; ") : L.message;
          me(`Sync failed: ${le}`, "error");
        }
      } catch (L) {
        De(G), me(`Sync error: ${L instanceof Error ? L.message : "Unknown error"}`, "error");
      }
    }
    async function Ls(G) {
      var L;
      try {
        const le = await k(G);
        le.failed.length === 0 ? me(`✓ Repaired ${le.success} workflow${le.success === 1 ? "" : "s"}`, "success") : me(`Repaired ${le.success}, failed: ${le.failed.length}`, "warning"), await Se();
      } catch (le) {
        me(`Repair failed: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
      } finally {
        (L = re.value) == null || L.resetRepairingState();
      }
    }
    async function Ts(G) {
      Le.value = G, xe.value = !0, be.value = { state: "creating", message: `Creating environment '${G.name}'...` };
      try {
        const L = await _(G);
        L.status === "started" ? Ds() : L.status === "error" && (xe.value = !1, me(`Failed to create environment: ${L.message}. Check debug logs for details.`, "error"), Le.value = null);
      } catch (L) {
        xe.value = !1, me(`Error creating environment: ${L instanceof Error ? L.message : "Unknown error"}. Check debug logs.`, "error"), Le.value = null;
      }
    }
    function Ds() {
      Ae || (Ae = window.setInterval(async () => {
        var G;
        try {
          const L = await z();
          be.value = { state: L.state, message: L.message }, L.state === "complete" ? (ns(), xe.value = !1, me(`✓ Environment '${L.environment_name}' created`, "success"), await Se(), K.value && await K.value.loadEnvironments(), (G = Le.value) != null && G.switch_after && L.environment_name && await de(L.environment_name), Le.value = null) : L.state === "error" && (ns(), xe.value = !1, me(`Failed to create environment: ${L.error || L.message}. Check debug logs.`, "error"), Le.value = null);
        } catch (L) {
          console.error("Failed to poll create progress:", L);
        }
      }, 2e3));
    }
    function ns() {
      Ae && (clearInterval(Ae), Ae = null);
    }
    async function Ns(G) {
      var L;
      if (((L = te.value) == null ? void 0 : L.name) === G) {
        me("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      he.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${G}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          he.value = null;
          try {
            const le = await b(G);
            le.status === "success" ? (me(`Environment "${G}" deleted`, "success"), await Se(), K.value && await K.value.loadEnvironments()) : me(le.message || "Failed to delete environment", "error");
          } catch (le) {
            me(`Error deleting environment: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    function as() {
      if (!S.value) return [];
      const G = [], L = S.value.workflows;
      return L.new.length && G.push(`${L.new.length} new workflow(s)`), L.modified.length && G.push(`${L.modified.length} modified workflow(s)`), L.deleted.length && G.push(`${L.deleted.length} deleted workflow(s)`), G;
    }
    return Ee(Se), (G, L) => {
      var le, _e, Pe, Ue;
      return s(), o("div", Ow, [
        e("div", Aw, [
          e("div", Fw, [
            L[27] || (L[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            S.value ? (s(), o("div", Vw)) : m("", !0)
          ]),
          e("div", Ww, [
            e("button", {
              class: ne(["icon-btn", { spinning: W.value }]),
              onClick: Se,
              title: "Refresh"
            }, [...L[28] || (L[28] = [
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
              onClick: L[0] || (L[0] = (ue) => n("close")),
              title: "Close"
            }, [...L[29] || (L[29] = [
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
        e("div", Gw, [
          e("div", { class: "env-switcher-header" }, [
            L[30] || (L[30] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: P
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: j
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: L[1] || (L[1] = (ue) => ke("environments", "all-envs"))
          }, [
            S.value ? (s(), o("div", jw, [
              e("span", null, a(((le = te.value) == null ? void 0 : le.name) || ((_e = S.value) == null ? void 0 : _e.environment) || "Loading..."), 1),
              e("span", qw, "(" + a(S.value.branch || "detached") + ")", 1)
            ])) : m("", !0),
            L[31] || (L[31] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Hw, [
          e("div", Kw, [
            e("div", Yw, [
              L[32] || (L[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "status" && Fe.value === "this-env" }]),
                onClick: L[2] || (L[2] = (ue) => ke("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "workflows" }]),
                onClick: L[3] || (L[3] = (ue) => ke("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "models-env" }]),
                onClick: L[4] || (L[4] = (ue) => ke("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "branches" }]),
                onClick: L[5] || (L[5] = (ue) => ke("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "history" }]),
                onClick: L[6] || (L[6] = (ue) => ke("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "nodes" }]),
                onClick: L[7] || (L[7] = (ue) => ke("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "debug-env" }]),
                onClick: L[8] || (L[8] = (ue) => ke("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            L[35] || (L[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Qw, [
              L[33] || (L[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "environments" }]),
                onClick: L[9] || (L[9] = (ue) => ke("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "model-index" }]),
                onClick: L[10] || (L[10] = (ue) => ke("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "settings" }]),
                onClick: L[11] || (L[11] = (ue) => ke("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "debug-workspace" }]),
                onClick: L[12] || (L[12] = (ue) => ke("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            L[36] || (L[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Xw, [
              L[34] || (L[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "export" }]),
                onClick: L[13] || (L[13] = (ue) => ke("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "import" }]),
                onClick: L[14] || (L[14] = (ue) => ke("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: ce.value === "remotes" }]),
                onClick: L[15] || (L[15] = (ue) => ke("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", Zw, [
            T.value ? (s(), o("div", Jw, a(T.value), 1)) : !S.value && ce.value === "status" ? (s(), o("div", e0, " Loading status... ")) : (s(), o(F, { key: 2 }, [
              ce.value === "status" ? (s(), E(va, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: re,
                status: S.value,
                onSwitchBranch: Ge,
                onCommitChanges: L[16] || (L[16] = (ue) => je.value = !0),
                onSyncEnvironment: L[17] || (L[17] = (ue) => qe.value = !0),
                onViewWorkflows: L[18] || (L[18] = (ue) => ke("workflows", "this-env")),
                onViewHistory: L[19] || (L[19] = (ue) => ke("history", "this-env")),
                onViewDebug: L[20] || (L[20] = (ue) => ke("debug-env", "this-env")),
                onRepairMissingModels: Ls
              }, null, 8, ["status"])) : ce.value === "workflows" ? (s(), E(hu, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: N,
                onRefresh: Se
              }, null, 512)) : ce.value === "models-env" ? (s(), E(Zu, {
                key: 2,
                onNavigate: Te
              })) : ce.value === "branches" ? (s(), E(Ea, {
                key: 3,
                branches: V.value,
                current: ((Pe = S.value) == null ? void 0 : Pe.branch) || null,
                onSwitch: A,
                onCreate: Z,
                onDelete: ge
              }, null, 8, ["branches", "current"])) : ce.value === "history" ? (s(), E(Oa, {
                key: 4,
                commits: I.value,
                onSelect: ft,
                onCheckout: q
              }, null, 8, ["commits"])) : ce.value === "nodes" ? (s(), E(Am, {
                key: 5,
                onOpenNodeManager: et
              })) : ce.value === "debug-env" ? (s(), E(qg, { key: 6 })) : ce.value === "environments" ? (s(), E(Nh, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: K,
                onSwitch: de,
                onCreate: Ts,
                onDelete: Ns
              }, null, 512)) : ce.value === "model-index" ? (s(), E(ym, {
                key: 8,
                onRefresh: Se
              })) : ce.value === "settings" ? (s(), E(Vg, { key: 9 })) : ce.value === "debug-workspace" ? (s(), E(Gg, { key: 10 })) : ce.value === "export" ? (s(), E(vp, { key: 11 })) : ce.value === "import" ? (s(), E(Q1, { key: 12 })) : ce.value === "remotes" ? (s(), E($g, {
                key: 13,
                onToast: vt
              })) : m("", !0)
            ], 64))
          ])
        ]),
        R.value ? (s(), E(fy, {
          key: 0,
          commit: R.value,
          onClose: L[21] || (L[21] = (ue) => R.value = null),
          onCheckout: q,
          onCreateBranch: Ie
        }, null, 8, ["commit"])) : m("", !0),
        he.value ? (s(), E(wy, {
          key: 1,
          title: he.value.title,
          message: he.value.message,
          details: he.value.details,
          warning: he.value.warning,
          confirmLabel: he.value.confirmLabel,
          cancelLabel: he.value.cancelLabel,
          secondaryLabel: he.value.secondaryLabel,
          secondaryAction: he.value.secondaryAction,
          destructive: he.value.destructive,
          onConfirm: he.value.onConfirm,
          onCancel: L[22] || (L[22] = (ue) => he.value = null),
          onSecondary: he.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : m("", !0),
        w(gw, {
          show: X.value,
          "from-environment": ((Ue = te.value) == null ? void 0 : Ue.name) || "unknown",
          "to-environment": O.value,
          onConfirm: Qe,
          onClose: Ms
        }, null, 8, ["show", "from-environment", "to-environment"]),
        je.value && S.value ? (s(), E(_s, {
          key: 2,
          status: S.value,
          "as-modal": !0,
          onClose: L[23] || (L[23] = (ue) => je.value = !1),
          onCommitted: Rs
        }, null, 8, ["status"])) : m("", !0),
        qe.value && S.value ? (s(), E(Bw, {
          key: 3,
          show: qe.value,
          "mismatch-details": {
            missing_nodes: S.value.comparison.missing_nodes,
            extra_nodes: S.value.comparison.extra_nodes
          },
          onConfirm: zs,
          onClose: L[24] || (L[24] = (ue) => qe.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : m("", !0),
        w(Mw, {
          show: se.value,
          state: C.value.state,
          progress: C.value.progress,
          message: C.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        xe.value ? (s(), o("div", t0, [
          e("div", s0, [
            L[39] || (L[39] = e("div", { class: "dialog-header" }, [
              e("h3", { class: "dialog-title" }, "CREATING ENVIRONMENT")
            ], -1)),
            e("div", o0, [
              L[37] || (L[37] = e("div", { class: "create-progress-spinner" }, null, -1)),
              e("p", n0, a(be.value.message), 1),
              L[38] || (L[38] = e("p", { class: "create-progress-hint" }, "This may take several minutes...", -1))
            ])
          ])
        ])) : m("", !0),
        U.value ? (s(), o("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: L[26] || (L[26] = $e((ue) => U.value = !1, ["self"]))
        }, [
          e("div", a0, [
            e("div", l0, [
              L[41] || (L[41] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: L[25] || (L[25] = (ue) => U.value = !1)
              }, [...L[40] || (L[40] = [
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
            e("div", i0, [
              L[42] || (L[42] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", r0, [
                (s(!0), o(F, null, J(H.value, (ue) => (s(), o("div", {
                  key: ue.name,
                  class: ne(["env-item", { current: ue.is_current }])
                }, [
                  e("div", d0, [
                    e("div", c0, [
                      e("span", u0, a(ue.is_current ? "●" : "○"), 1),
                      e("span", m0, a(ue.name), 1),
                      ue.current_branch ? (s(), o("span", v0, "(" + a(ue.current_branch) + ")", 1)) : m("", !0),
                      ue.is_current ? (s(), o("span", f0, "CURRENT")) : m("", !0)
                    ]),
                    e("div", g0, a(ue.workflow_count) + " workflows • " + a(ue.node_count) + " nodes ", 1)
                  ]),
                  ue.is_current ? m("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Vt) => de(ue.name)
                  }, " SWITCH ", 8, h0))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : m("", !0),
        e("div", p0, [
          w(As, { name: "toast" }, {
            default: d(() => [
              (s(!0), o(F, null, J(He.value, (ue) => (s(), o("div", {
                key: ue.id,
                class: ne(["toast", ue.type])
              }, [
                e("span", y0, a(ue.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), k0 = /* @__PURE__ */ Q(w0, [["__scopeId", "data-v-44184278"]]), b0 = { class: "item-header" }, _0 = { class: "item-info" }, $0 = { class: "filename" }, C0 = { class: "metadata" }, x0 = { class: "size" }, S0 = {
  key: 0,
  class: "type"
}, I0 = { class: "item-actions" }, E0 = {
  key: 0,
  class: "progress-section"
}, M0 = { class: "progress-bar" }, R0 = { class: "progress-stats" }, z0 = { class: "downloaded" }, L0 = { class: "speed" }, T0 = {
  key: 0,
  class: "eta"
}, D0 = {
  key: 1,
  class: "status-msg paused"
}, N0 = {
  key: 2,
  class: "status-msg queued"
}, P0 = {
  key: 3,
  class: "status-msg completed"
}, U0 = {
  key: 4,
  class: "status-msg failed"
}, B0 = {
  key: 0,
  class: "retries"
}, O0 = /* @__PURE__ */ Y({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: r }) {
    const n = r;
    function i(g) {
      if (g === 0) return "?";
      const u = g / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(g / (1024 * 1024)).toFixed(1)} MB`;
    }
    function h(g) {
      return g === 0 ? "-" : `${(g / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function f(g) {
      if (g < 60) return `${Math.round(g)}s`;
      const u = Math.floor(g / 60);
      return u < 60 ? `${u}m` : `${Math.floor(u / 60)}h ${u % 60}m`;
    }
    return (g, u) => (s(), o("div", {
      class: ne(["download-item", `status-${t.item.status}`])
    }, [
      e("div", b0, [
        e("div", _0, [
          e("div", $0, a(t.item.filename), 1),
          e("div", C0, [
            e("span", x0, a(i(t.item.size)), 1),
            t.item.type ? (s(), o("span", S0, a(t.item.type), 1)) : m("", !0)
          ])
        ]),
        e("div", I0, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: u[0] || (u[0] = (l) => n("cancel")),
            title: "Cancel"
          }, " × ")) : m("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: u[1] || (u[1] = (l) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : m("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: u[2] || (u[2] = (l) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : m("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: u[3] || (u[3] = (l) => n("remove")),
            title: "Remove"
          }, " × ")) : m("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", E0, [
        e("div", M0, [
          e("div", {
            class: "progress-fill",
            style: nt({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", R0, [
          e("span", z0, a(i(t.item.downloaded)) + " / " + a(i(t.item.size)), 1),
          e("span", L0, a(h(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", T0, a(f(t.item.eta)), 1)) : m("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", D0, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", N0, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", P0, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", U0, [
        y(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", B0, "(" + a(t.item.retries) + " retries)", 1)) : m("", !0)
      ])) : m("", !0)
    ], 2));
  }
}), It = /* @__PURE__ */ Q(O0, [["__scopeId", "data-v-2110df65"]]), A0 = { class: "queue-title" }, F0 = { class: "count" }, V0 = { class: "queue-actions" }, W0 = { class: "action-label" }, G0 = {
  key: 0,
  class: "overall-progress"
}, j0 = { class: "progress-bar" }, q0 = {
  key: 0,
  class: "current-mini"
}, H0 = { class: "filename" }, K0 = { class: "speed" }, Y0 = {
  key: 1,
  class: "queue-content"
}, Q0 = {
  key: 0,
  class: "section"
}, X0 = {
  key: 1,
  class: "section"
}, Z0 = { class: "section-header" }, J0 = { class: "section-label paused" }, ek = { class: "items-list" }, tk = {
  key: 2,
  class: "section"
}, sk = { class: "section-header" }, ok = { class: "section-label" }, nk = { class: "items-list" }, ak = {
  key: 3,
  class: "section"
}, lk = { class: "section-header" }, ik = { class: "section-label" }, rk = { class: "items-list" }, dk = {
  key: 4,
  class: "section"
}, ck = { class: "section-header" }, uk = { class: "section-label failed" }, mk = { class: "items-list" }, vk = /* @__PURE__ */ Y({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: r,
      currentDownload: n,
      queuedItems: i,
      completedItems: h,
      failedItems: f,
      pausedItems: g,
      hasItems: u,
      activeCount: l,
      cancelDownload: v,
      retryDownload: p,
      resumeDownload: c,
      resumeAllPaused: M,
      removeItem: _,
      clearCompleted: z
    } = Dt(), b = $(!1);
    let x = null;
    yt(
      () => ({
        active: l.value,
        failed: f.value.length,
        paused: g.value.length,
        completed: h.value.length
      }),
      (I, V) => {
        x && (clearTimeout(x), x = null);
        const H = I.active === 0 && I.failed === 0 && I.paused === 0 && I.completed > 0, te = V && (V.active > 0 || V.paused > 0);
        H && te && (x = setTimeout(() => {
          z(), x = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const k = D(() => {
      var H;
      if (r.items.length === 0) return 0;
      const I = h.value.length, V = ((H = n.value) == null ? void 0 : H.progress) || 0;
      return Math.round((I + V / 100) / r.items.length * 100);
    });
    function B(I) {
      v(I);
    }
    function S(I) {
      return I === 0 ? "" : `${(I / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (I, V) => (s(), E(Re, { to: "body" }, [
      ye(u) ? (s(), o("div", {
        key: 0,
        class: ne(["model-download-queue", { minimized: !b.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: V[0] || (V[0] = (H) => b.value = !b.value)
        }, [
          e("div", A0, [
            V[4] || (V[4] = e("span", { class: "icon" }, "↓", -1)),
            V[5] || (V[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", F0, "(" + a(ye(l)) + "/" + a(ye(r).items.length) + ")", 1)
          ]),
          e("div", V0, [
            e("span", W0, a(b.value ? "minimize" : "expand"), 1)
          ])
        ]),
        b.value ? (s(), o("div", Y0, [
          ye(n) ? (s(), o("div", Q0, [
            V[6] || (V[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            w(It, {
              item: ye(n),
              onCancel: V[1] || (V[1] = (H) => B(ye(n).id))
            }, null, 8, ["item"])
          ])) : m("", !0),
          ye(g).length > 0 ? (s(), o("div", X0, [
            e("div", Z0, [
              e("span", J0, "Paused (" + a(ye(g).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: V[2] || (V[2] = //@ts-ignore
                (...H) => ye(M) && ye(M)(...H))
              }, "Resume All")
            ]),
            e("div", ek, [
              (s(!0), o(F, null, J(ye(g), (H) => (s(), E(It, {
                key: H.id,
                item: H,
                onResume: (te) => ye(c)(H.id),
                onRemove: (te) => ye(_)(H.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : m("", !0),
          ye(i).length > 0 ? (s(), o("div", tk, [
            e("div", sk, [
              e("span", ok, "Queued (" + a(ye(i).length) + ")", 1)
            ]),
            e("div", nk, [
              (s(!0), o(F, null, J(ye(i), (H) => (s(), E(It, {
                key: H.id,
                item: H,
                onCancel: (te) => B(H.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : m("", !0),
          ye(h).length > 0 ? (s(), o("div", ak, [
            e("div", lk, [
              e("span", ik, "Completed (" + a(ye(h).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: V[3] || (V[3] = //@ts-ignore
                (...H) => ye(z) && ye(z)(...H))
              }, "Clear")
            ]),
            e("div", rk, [
              (s(!0), o(F, null, J(ye(h).slice(0, 3), (H) => (s(), E(It, {
                key: H.id,
                item: H,
                onRemove: (te) => ye(_)(H.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : m("", !0),
          ye(f).length > 0 ? (s(), o("div", dk, [
            e("div", ck, [
              e("span", uk, "Failed (" + a(ye(f).length) + ")", 1)
            ]),
            e("div", mk, [
              (s(!0), o(F, null, J(ye(f), (H) => (s(), E(It, {
                key: H.id,
                item: H,
                onRetry: (te) => ye(p)(H.id),
                onRemove: (te) => ye(_)(H.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : m("", !0)
        ])) : (s(), o("div", G0, [
          e("div", j0, [
            e("div", {
              class: "progress-fill",
              style: nt({ width: `${k.value}%` })
            }, null, 4)
          ]),
          ye(n) ? (s(), o("div", q0, [
            e("span", H0, a(ye(n).filename), 1),
            e("span", K0, a(S(ye(n).speed)), 1)
          ])) : m("", !0)
        ]))
      ], 2)) : m("", !0)
    ]));
  }
}), fk = /* @__PURE__ */ Q(vk, [["__scopeId", "data-v-60751cfa"]]), gk = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', hk = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', pk = {
  comfy: gk,
  phosphor: hk
}, ss = "comfy", $s = "comfygit-theme";
let ht = null, Cs = ss;
function yk() {
  try {
    const t = localStorage.getItem($s);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return ss;
}
function xs(t = ss) {
  ht && ht.remove(), ht = document.createElement("style"), ht.id = "comfygit-theme-styles", ht.setAttribute("data-theme", t), ht.textContent = pk[t], document.head.appendChild(ht), document.body.setAttribute("data-comfygit-theme", t), Cs = t;
  try {
    localStorage.setItem($s, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function wk() {
  return Cs;
}
function kk(t) {
  xs(t);
}
const os = document.createElement("link");
os.rel = "stylesheet";
os.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(os);
const bk = yk();
xs(bk);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), kk(t);
  },
  getTheme: () => {
    const t = wk();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Xe = null, Ve = null, zt = null, Et = null, us = null;
const bt = $(null);
async function Ot() {
  var t;
  if (!((t = kt) != null && t.api)) return null;
  try {
    const r = await kt.api.fetchApi("/v2/comfygit/status");
    r.ok && (bt.value = await r.json());
  } catch {
  }
}
function _k() {
  if (!bt.value) return !1;
  const t = bt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || bt.value.has_changes;
}
function $k() {
  Xe && Xe.remove(), Xe = document.createElement("div"), Xe.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Xe.appendChild(t), Xe.addEventListener("click", (i) => {
    i.target === Xe && Kt();
  });
  const r = (i) => {
    i.key === "Escape" && (Kt(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Zt({
    render: () => Jt(k0, {
      onClose: Kt,
      onStatusUpdate: (i) => {
        bt.value = i, Lt();
      }
    })
  }).mount(t), document.body.appendChild(Xe);
}
function Kt() {
  Xe && (Xe.remove(), Xe = null);
}
function Ck(t) {
  Mt(), Ve = document.createElement("div"), Ve.className = "comfygit-commit-popover-container";
  const r = t.getBoundingClientRect();
  Ve.style.position = "fixed", Ve.style.top = `${r.bottom + 8}px`, Ve.style.right = `${window.innerWidth - r.right}px`, Ve.style.zIndex = "10001";
  const n = (h) => {
    Ve && !Ve.contains(h.target) && h.target !== t && (Mt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const i = (h) => {
    h.key === "Escape" && (Mt(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), zt = Zt({
    render: () => Jt(_s, {
      status: bt.value,
      onClose: Mt,
      onCommitted: () => {
        Mt(), Ot().then(Lt);
      }
    })
  }), zt.mount(Ve), document.body.appendChild(Ve);
}
function Mt() {
  zt && (zt.unmount(), zt = null), Ve && (Ve.remove(), Ve = null);
}
function xk() {
  Et || (Et = document.createElement("div"), Et.className = "comfygit-download-queue-root", us = Zt({
    render: () => Jt(fk)
  }), us.mount(Et), document.body.appendChild(Et), console.log("[ComfyGit] Model download queue mounted"));
}
let rt = null;
function Lt() {
  if (!rt) return;
  const t = rt.querySelector(".commit-indicator");
  t && (t.style.display = _k() ? "block" : "none");
}
const Ss = document.createElement("style");
Ss.textContent = `
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

  .comfygit-commit-btn:hover {
    background: linear-gradient(180deg, #404040 0%, #2e2e2e 100%) !important;
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
document.head.appendChild(Ss);
kt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var h, f;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const r = document.createElement("button");
    r.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", r.textContent = "ComfyGit", r.title = "ComfyGit Control Panel", r.onclick = $k, rt = document.createElement("button"), rt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", rt.innerHTML = 'Commit <span class="commit-indicator"></span>', rt.title = "Quick Commit", rt.onclick = () => Ck(rt), t.appendChild(r), t.appendChild(rt), (f = (h = kt.menu) == null ? void 0 : h.settingsGroup) != null && f.element && (kt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), xk();
    const { loadPendingDownloads: n } = Dt();
    n(), await Ot(), Lt(), setInterval(async () => {
      await Ot(), Lt();
    }, 3e4);
    const i = kt.api;
    if (i) {
      let g = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((v) => {
          (v.startsWith("workflow:") || v.startsWith("Comfy.OpenWorkflowsPaths:") || v.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(v);
        }), window.location.reload();
      }, u = function() {
        const v = document.createElement("div");
        v.style.cssText = `
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
        p.textContent = "Workflows updated - refresh required", v.appendChild(p);
        const c = document.createElement("button");
        c.textContent = "Refresh", c.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, c.onmouseover = () => c.style.background = "var(--comfy-input-bg)", c.onmouseout = () => c.style.background = "var(--comfy-menu-bg)", c.onclick = () => g(), v.appendChild(c);
        const M = document.createElement("button");
        M.textContent = "×", M.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, M.onmouseover = () => M.style.opacity = "1", M.onmouseout = () => M.style.opacity = "0.6", M.onclick = () => v.remove(), v.appendChild(M), document.body.appendChild(v), console.log("[ComfyGit] Refresh notification displayed");
      };
      i.addEventListener("comfygit:workflow-changed", async (v) => {
        const { change_type: p, workflow_name: c } = v.detail;
        console.log(`[ComfyGit] Workflow ${p}: ${c}`), await Ot(), Lt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let l = !1;
      i.addEventListener("status", async (v) => {
        const p = v.detail != null;
        p && !l && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), g()) : u()), l = p;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
