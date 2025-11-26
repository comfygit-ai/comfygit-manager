import { app as it } from "../../scripts/app.js";
import { defineComponent as Q, createElementBlock as s, openBlock as o, createCommentVNode as d, createElementVNode as e, renderSlot as ue, createBlock as x, resolveDynamicComponent as Ot, normalizeClass as ne, withCtx as l, toDisplayString as a, createVNode as f, createTextVNode as y, computed as B, Fragment as H, renderList as se, normalizeStyle as Qe, ref as b, onMounted as _e, watch as Bt, Teleport as xe, withModifiers as ke, Transition as yo, createSlots as Mt, withKeys as Je, onUnmounted as wo, reactive as Xt, readonly as ko, unref as me, withDirectives as kt, vModelText as bo, vModelSelect as Lt, vModelCheckbox as _o, TransitionGroup as $o, createApp as Pt, h as Vt } from "vue";
const Co = { class: "panel-layout" }, xo = {
  key: 0,
  class: "panel-layout-header"
}, So = {
  key: 1,
  class: "panel-layout-search"
}, Io = { class: "panel-layout-content" }, Eo = {
  key: 2,
  class: "panel-layout-footer"
}, Mo = /* @__PURE__ */ Q({
  __name: "PanelLayout",
  setup(t) {
    return (c, n) => (o(), s("div", Co, [
      c.$slots.header ? (o(), s("div", xo, [
        ue(c.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      c.$slots.search ? (o(), s("div", So, [
        ue(c.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      e("div", Io, [
        ue(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (o(), s("div", Eo, [
        ue(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Y = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [r, p] of c)
    n[r] = p;
  return n;
}, Ie = /* @__PURE__ */ Y(Mo, [["__scopeId", "data-v-21565df9"]]), zo = {
  key: 0,
  class: "panel-title-prefix"
}, Lo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, To = /* @__PURE__ */ Q({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, n) => (o(), x(Ot(`h${t.level}`), {
      class: ne(["panel-title", t.variant])
    }, {
      default: l(() => [
        t.showPrefix ? (o(), s("span", zo, a(t.prefix), 1)) : (o(), s("span", Lo)),
        ue(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Do = /* @__PURE__ */ Y(To, [["__scopeId", "data-v-c3875efc"]]), Ro = ["title"], No = ["width", "height"], Uo = /* @__PURE__ */ Q({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (o(), s("button", {
      class: "info-button",
      title: t.title,
      onClick: n[0] || (n[0] = (r) => c.$emit("click"))
    }, [
      (o(), s("svg", {
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
      ])], 8, No))
    ], 8, Ro));
  }
}), Zt = /* @__PURE__ */ Y(Uo, [["__scopeId", "data-v-6fc7f16d"]]), Oo = { class: "header-left" }, Bo = {
  key: 0,
  class: "header-actions"
}, Po = /* @__PURE__ */ Q({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (c, n) => (o(), s("div", {
      class: ne(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Oo, [
        f(Do, { "show-prefix": t.showPrefix }, {
          default: l(() => [
            y(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), x(Zt, {
          key: 0,
          onClick: n[0] || (n[0] = (r) => c.$emit("info-click"))
        })) : d("", !0)
      ]),
      c.$slots.actions ? (o(), s("div", Bo, [
        ue(c.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ee = /* @__PURE__ */ Y(Po, [["__scopeId", "data-v-55a62cd6"]]), Vo = {
  key: 0,
  class: "section-title-count"
}, Fo = {
  key: 1,
  class: "section-title-icon"
}, Ao = /* @__PURE__ */ Q({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (o(), x(Ot(`h${t.level}`), {
      class: ne(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && c.$emit("click"))
    }, {
      default: l(() => [
        ue(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Vo, "(" + a(t.count) + ")", 1)) : d("", !0),
        t.clickable ? (o(), s("span", Fo, a(t.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ze = /* @__PURE__ */ Y(Ao, [["__scopeId", "data-v-559361eb"]]), Wo = { class: "status-grid" }, Go = { class: "status-grid__columns" }, jo = { class: "status-grid__column" }, Ho = { class: "status-grid__title" }, qo = { class: "status-grid__column status-grid__column--right" }, Ko = { class: "status-grid__title" }, Jo = {
  key: 0,
  class: "status-grid__footer"
}, Qo = /* @__PURE__ */ Q({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (o(), s("div", Wo, [
      e("div", Go, [
        e("div", jo, [
          e("h4", Ho, a(t.leftTitle), 1),
          ue(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", qo, [
          e("h4", Ko, a(t.rightTitle), 1),
          ue(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (o(), s("div", Jo, [
        ue(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Yo = /* @__PURE__ */ Y(Qo, [["__scopeId", "data-v-73b7ba3f"]]), Xo = {
  key: 0,
  class: "status-item__icon"
}, Zo = {
  key: 1,
  class: "status-item__count"
}, es = { class: "status-item__label" }, ts = /* @__PURE__ */ Q({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const c = t, n = B(() => `status-item--${c.variant}`);
    return (r, p) => (o(), s("div", {
      class: ne(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), s("span", Xo, a(t.icon), 1)) : d("", !0),
      t.count !== void 0 ? (o(), s("span", Zo, a(t.count), 1)) : d("", !0),
      e("span", es, a(t.label), 1)
    ], 2));
  }
}), Pe = /* @__PURE__ */ Y(ts, [["__scopeId", "data-v-6f929183"]]), os = { class: "issue-card__header" }, ss = { class: "issue-card__icon" }, ns = { class: "issue-card__title" }, as = {
  key: 0,
  class: "issue-card__content"
}, ls = {
  key: 0,
  class: "issue-card__description"
}, is = {
  key: 1,
  class: "issue-card__items"
}, rs = {
  key: 2,
  class: "issue-card__actions"
}, ds = /* @__PURE__ */ Q({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const c = t, n = B(() => `issue-card--${c.severity}`);
    return (r, p) => (o(), s("div", {
      class: ne(["issue-card", n.value])
    }, [
      e("div", os, [
        e("span", ss, a(t.icon), 1),
        e("h4", ns, a(t.title), 1)
      ]),
      r.$slots.default || t.description ? (o(), s("div", as, [
        t.description ? (o(), s("p", ls, a(t.description), 1)) : d("", !0),
        ue(r.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      t.items && t.items.length ? (o(), s("div", is, [
        (o(!0), s(H, null, se(t.items, (g, h) => (o(), s("div", {
          key: h,
          class: "issue-card__item"
        }, [
          p[0] || (p[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(g), 1)
        ]))), 128))
      ])) : d("", !0),
      r.$slots.actions ? (o(), s("div", rs, [
        ue(r.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), at = /* @__PURE__ */ Y(ds, [["__scopeId", "data-v-df6aa348"]]), cs = ["type", "disabled"], us = {
  key: 0,
  class: "spinner"
}, ms = /* @__PURE__ */ Q({
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
    return (c, n) => (o(), s("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: ne(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => c.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", us)) : d("", !0),
      t.loading ? d("", !0) : ue(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, cs));
  }
}), Z = /* @__PURE__ */ Y(ms, [["__scopeId", "data-v-772abe47"]]), vs = { class: "empty-state" }, fs = {
  key: 0,
  class: "empty-icon"
}, gs = { class: "empty-message" }, ps = /* @__PURE__ */ Q({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, n) => (o(), s("div", vs, [
      t.icon ? (o(), s("div", fs, a(t.icon), 1)) : d("", !0),
      e("p", gs, a(t.message), 1),
      t.actionLabel ? (o(), x(Z, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => c.$emit("action"))
      }, {
        default: l(() => [
          y(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : d("", !0)
    ]));
  }
}), Ue = /* @__PURE__ */ Y(ps, [["__scopeId", "data-v-4466284f"]]), hs = /* @__PURE__ */ Q({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (o(), s("span", {
      class: ne(["detail-label"]),
      style: Qe({ minWidth: t.minWidth })
    }, [
      ue(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Nt = /* @__PURE__ */ Y(hs, [["__scopeId", "data-v-75e9eeb8"]]), ys = /* @__PURE__ */ Q({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (o(), s("span", {
      class: ne(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      ue(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ut = /* @__PURE__ */ Y(ys, [["__scopeId", "data-v-2f186e4c"]]), ws = { class: "detail-row" }, ks = /* @__PURE__ */ Q({
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
    return (c, n) => (o(), s("div", ws, [
      f(Nt, { "min-width": t.labelMinWidth }, {
        default: l(() => [
          y(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), x(Ut, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: l(() => [
          y(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ue(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), pe = /* @__PURE__ */ Y(ks, [["__scopeId", "data-v-ef15664a"]]), bs = { class: "modal-header" }, _s = { class: "modal-body" }, $s = { class: "status-section" }, Cs = {
  key: 0,
  class: "status-section"
}, xs = { class: "section-header-row" }, Ss = {
  key: 0,
  class: "workflow-group"
}, Is = { class: "workflow-group-header" }, Es = { class: "workflow-group-title" }, Ms = { class: "workflow-list" }, zs = { class: "workflow-name" }, Ls = { class: "workflow-issue" }, Ts = {
  key: 1,
  class: "workflow-group"
}, Ds = { class: "workflow-group-header" }, Rs = { class: "workflow-group-title" }, Ns = { class: "workflow-list" }, Us = { class: "workflow-name" }, Os = { class: "workflow-issue" }, Bs = {
  key: 2,
  class: "workflow-group"
}, Ps = { class: "workflow-group-header" }, Vs = { class: "workflow-group-title" }, Fs = { class: "workflow-list" }, As = { class: "workflow-name" }, Ws = {
  key: 3,
  class: "workflow-group"
}, Gs = { class: "workflow-group-header" }, js = { class: "workflow-group-title" }, Hs = { class: "workflow-list" }, qs = { class: "workflow-name" }, Ks = {
  key: 4,
  class: "workflow-group"
}, Js = { class: "workflow-group-header" }, Qs = { class: "workflow-group-title" }, Ys = { class: "workflow-list" }, Xs = { class: "workflow-name" }, Zs = {
  key: 5,
  class: "workflow-group"
}, en = { class: "workflow-group-title" }, tn = { class: "expand-icon" }, on = {
  key: 0,
  class: "workflow-list"
}, sn = { class: "workflow-name" }, nn = {
  key: 1,
  class: "status-section"
}, an = {
  key: 0,
  class: "change-group"
}, ln = { class: "change-group-header" }, rn = { class: "change-group-title" }, dn = { class: "change-list" }, cn = { class: "node-name" }, un = {
  key: 0,
  class: "dev-badge"
}, mn = {
  key: 1,
  class: "change-group"
}, vn = { class: "change-group-header" }, fn = { class: "change-group-title" }, gn = { class: "change-list" }, pn = { class: "node-name" }, hn = {
  key: 0,
  class: "dev-badge"
}, yn = {
  key: 2,
  class: "change-group"
}, wn = { class: "change-list" }, kn = { class: "change-item" }, bn = { class: "node-name" }, _n = {
  key: 3,
  class: "change-group"
}, $n = {
  key: 2,
  class: "status-section"
}, Cn = { class: "section-header-row" }, xn = {
  key: 0,
  class: "drift-item"
}, Sn = { class: "drift-list" }, In = {
  key: 0,
  class: "drift-list-more"
}, En = {
  key: 1,
  class: "drift-item"
}, Mn = { class: "drift-list" }, zn = {
  key: 0,
  class: "drift-list-more"
}, Ln = {
  key: 2,
  class: "drift-item"
}, Tn = {
  key: 3,
  class: "drift-item"
}, Dn = {
  key: 3,
  class: "status-section"
}, Rn = { class: "info-box" }, Nn = { class: "drift-list" }, Un = {
  key: 0,
  class: "drift-list-more"
}, On = {
  key: 4,
  class: "status-section"
}, Bn = { class: "warning-box" }, Pn = {
  key: 5,
  class: "empty-state-inline"
}, Vn = { class: "modal-actions" }, Fn = /* @__PURE__ */ Q({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const c = t, n = b(!1);
    _e(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), Bt(() => c.show, (M, C) => {
      console.log("StatusDetailModal show prop changed from", C, "to", M);
    }, { immediate: !0 });
    const r = B(() => {
      var M, C, L;
      return ((L = (C = (M = c.status) == null ? void 0 : M.workflows) == null ? void 0 : C.analyzed) == null ? void 0 : L.filter(
        (w) => w.status === "broken" && w.sync_state === "synced"
      )) || [];
    }), p = B(() => {
      var M, C, L;
      return ((L = (C = (M = c.status) == null ? void 0 : M.workflows) == null ? void 0 : C.analyzed) == null ? void 0 : L.filter(
        (w) => w.status === "broken" && w.sync_state !== "synced"
      )) || [];
    }), g = B(() => {
      var M, C, L;
      return ((L = (C = (M = c.status) == null ? void 0 : M.workflows) == null ? void 0 : C.synced) == null ? void 0 : L.filter((w) => {
        var k, R, A;
        const _ = (A = (R = (k = c.status) == null ? void 0 : k.workflows) == null ? void 0 : R.analyzed) == null ? void 0 : A.find((j) => j.name === w);
        return !_ || _.status !== "broken";
      })) || [];
    }), h = B(() => {
      var M, C, L, w, _;
      return (M = c.status) != null && M.workflows ? (((C = c.status.workflows.new) == null ? void 0 : C.length) ?? 0) > 0 || (((L = c.status.workflows.modified) == null ? void 0 : L.length) ?? 0) > 0 || (((w = c.status.workflows.deleted) == null ? void 0 : w.length) ?? 0) > 0 || (((_ = c.status.workflows.synced) == null ? void 0 : _.length) ?? 0) > 0 : !1;
    }), v = B(() => {
      var C, L, w;
      const M = (C = c.status) == null ? void 0 : C.git_changes;
      return M ? (((L = M.nodes_added) == null ? void 0 : L.length) ?? 0) > 0 || (((w = M.nodes_removed) == null ? void 0 : w.length) ?? 0) > 0 || M.workflow_changes || M.has_other_changes : !1;
    }), i = B(() => {
      var M, C, L, w, _, k;
      return !h.value && !v.value && ((C = (M = c.status) == null ? void 0 : M.comparison) == null ? void 0 : C.is_synced) && (((L = c.status) == null ? void 0 : L.missing_models_count) ?? 0) === 0 && (((k = (_ = (w = c.status) == null ? void 0 : w.comparison) == null ? void 0 : _.disabled_nodes) == null ? void 0 : k.length) ?? 0) === 0;
    }), m = B(() => {
      var C, L;
      const M = (L = (C = c.status) == null ? void 0 : C.git_changes) == null ? void 0 : L.workflow_changes;
      return M ? typeof M == "number" ? M : Object.keys(M).length : 0;
    });
    function $(M) {
      return typeof M == "string" ? M : M.name;
    }
    function u(M) {
      return typeof M == "object" && M.is_development === !0;
    }
    return (M, C) => {
      var L, w, _, k, R, A, j, K, P, T, O, z, S, V, W, X, oe, E, G, N, U, ae;
      return o(), x(xe, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[6] || (C[6] = (ee) => M.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: C[5] || (C[5] = ke(() => {
            }, ["stop"]))
          }, [
            e("div", bs, [
              C[7] || (C[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (ee) => M.$emit("close"))
              }, "✕")
            ]),
            e("div", _s, [
              e("div", $s, [
                f(ze, { level: "4" }, {
                  default: l(() => [...C[8] || (C[8] = [
                    y("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                f(pe, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              h.value ? (o(), s("div", Cs, [
                e("div", xs, [
                  f(ze, { level: "4" }, {
                    default: l(() => [...C[9] || (C[9] = [
                      y("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: C[1] || (C[1] = (ee) => M.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                r.value.length ? (o(), s("div", Ss, [
                  e("div", Is, [
                    C[10] || (C[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Es, "BROKEN (COMMITTED) (" + a(r.value.length) + ")", 1)
                  ]),
                  e("div", Ms, [
                    (o(!0), s(H, null, se(r.value, (ee) => (o(), s("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", zs, a(ee.name), 1),
                      e("span", Ls, a(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                p.value.length ? (o(), s("div", Ts, [
                  e("div", Ds, [
                    C[11] || (C[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Rs, "BROKEN (UNCOMMITTED) (" + a(p.value.length) + ")", 1)
                  ]),
                  e("div", Ns, [
                    (o(!0), s(H, null, se(p.value, (ee) => (o(), s("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", Us, a(ee.name), 1),
                      e("span", Os, a(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (w = (L = t.status.workflows) == null ? void 0 : L.new) != null && w.length ? (o(), s("div", Bs, [
                  e("div", Ps, [
                    C[12] || (C[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Vs, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Fs, [
                    (o(!0), s(H, null, se(t.status.workflows.new, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", As, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (k = (_ = t.status.workflows) == null ? void 0 : _.modified) != null && k.length ? (o(), s("div", Ws, [
                  e("div", Gs, [
                    C[13] || (C[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", js, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Hs, [
                    (o(!0), s(H, null, se(t.status.workflows.modified, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", qs, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (A = (R = t.status.workflows) == null ? void 0 : R.deleted) != null && A.length ? (o(), s("div", Ks, [
                  e("div", Js, [
                    C[14] || (C[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Qs, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Ys, [
                    (o(!0), s(H, null, se(t.status.workflows.deleted, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Xs, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                g.value.length ? (o(), s("div", Zs, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: C[2] || (C[2] = (ee) => n.value = !n.value)
                  }, [
                    C[15] || (C[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", en, "SYNCED (" + a(g.value.length) + ")", 1),
                    e("span", tn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (o(), s("div", on, [
                    (o(!0), s(H, null, se(g.value, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", sn, a(ee), 1)
                    ]))), 128))
                  ])) : d("", !0)
                ])) : d("", !0)
              ])) : d("", !0),
              v.value ? (o(), s("div", nn, [
                f(ze, { level: "4" }, {
                  default: l(() => [...C[16] || (C[16] = [
                    y("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (K = (j = t.status.git_changes) == null ? void 0 : j.nodes_added) != null && K.length ? (o(), s("div", an, [
                  e("div", ln, [
                    C[17] || (C[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", rn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", dn, [
                    (o(!0), s(H, null, se(t.status.git_changes.nodes_added, (ee) => (o(), s("div", {
                      key: $(ee),
                      class: "change-item"
                    }, [
                      e("span", cn, a($(ee)), 1),
                      u(ee) ? (o(), s("span", un, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (T = (P = t.status.git_changes) == null ? void 0 : P.nodes_removed) != null && T.length ? (o(), s("div", mn, [
                  e("div", vn, [
                    C[18] || (C[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", fn, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", gn, [
                    (o(!0), s(H, null, se(t.status.git_changes.nodes_removed, (ee) => (o(), s("div", {
                      key: $(ee),
                      class: "change-item"
                    }, [
                      e("span", pn, a($(ee)), 1),
                      u(ee) ? (o(), s("span", hn, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (O = t.status.git_changes) != null && O.workflow_changes ? (o(), s("div", yn, [
                  C[19] || (C[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", wn, [
                    e("div", kn, [
                      e("span", bn, a(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : d("", !0),
                (z = t.status.git_changes) != null && z.has_other_changes ? (o(), s("div", _n, [...C[20] || (C[20] = [
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
              (S = t.status.comparison) != null && S.is_synced ? d("", !0) : (o(), s("div", $n, [
                e("div", Cn, [
                  f(ze, { level: "4" }, {
                    default: l(() => [...C[21] || (C[21] = [
                      y("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: C[3] || (C[3] = (ee) => M.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                C[22] || (C[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (W = (V = t.status.comparison) == null ? void 0 : V.missing_nodes) != null && W.length ? (o(), s("div", xn, [
                  f(pe, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Sn, [
                    (o(!0), s(H, null, se(t.status.comparison.missing_nodes.slice(0, 10), (ee) => (o(), s("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + a(ee), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), s("div", In, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (oe = (X = t.status.comparison) == null ? void 0 : X.extra_nodes) != null && oe.length ? (o(), s("div", En, [
                  f(pe, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Mn, [
                    (o(!0), s(H, null, se(t.status.comparison.extra_nodes.slice(0, 10), (ee) => (o(), s("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + a(ee), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), s("div", zn, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (G = (E = t.status.comparison) == null ? void 0 : E.version_mismatches) != null && G.length ? (o(), s("div", Ln, [
                  f(pe, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : d("", !0),
                (N = t.status.comparison) != null && N.packages_in_sync ? d("", !0) : (o(), s("div", Tn, [
                  f(pe, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ae = (U = t.status.comparison) == null ? void 0 : U.disabled_nodes) != null && ae.length ? (o(), s("div", Dn, [
                f(ze, { level: "4" }, {
                  default: l(() => [...C[23] || (C[23] = [
                    y("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Rn, [
                  C[24] || (C[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Nn, [
                  (o(!0), s(H, null, se(t.status.comparison.disabled_nodes.slice(0, 10), (ee) => (o(), s("div", {
                    key: ee,
                    class: "drift-list-item"
                  }, " • " + a(ee), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), s("div", Un, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : d("", !0)
                ])
              ])) : d("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), s("div", On, [
                f(ze, { level: "4" }, {
                  default: l(() => [...C[25] || (C[25] = [
                    y("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Bn, [
                  C[26] || (C[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                C[27] || (C[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : d("", !0),
              i.value ? (o(), s("div", Pn, [...C[28] || (C[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : d("", !0)
            ]),
            e("div", Vn, [
              f(Z, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (ee) => M.$emit("close"))
              }, {
                default: l(() => [...C[29] || (C[29] = [
                  y(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), An = /* @__PURE__ */ Y(Fn, [["__scopeId", "data-v-c67eed17"]]), Wn = { class: "health-section-header" }, Gn = { class: "suggestions-content" }, jn = { class: "suggestions-text" }, Hn = {
  key: 1,
  style: { "margin-top": "var(--cg-space-3)" }
}, qn = /* @__PURE__ */ Q({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes"],
  setup(t, { emit: c }) {
    const n = t, r = b(!1), p = b(!1);
    function g() {
      r.value = !0;
    }
    function h() {
      r.value = !1, i("view-workflows");
    }
    function v() {
      r.value = !1, i("view-nodes");
    }
    const i = c, m = B(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), $ = B(() => n.status.has_changes), u = B(() => {
      const P = n.status.git_changes;
      return P.nodes_added.length > 0 || P.nodes_removed.length > 0 || P.workflow_changes;
    }), M = B(() => n.status.has_changes || m.value), C = B(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), L = B(() => n.status.git_changes.has_other_changes), w = B(() => {
      var P;
      return ((P = n.status.workflows.analyzed) == null ? void 0 : P.filter((T) => T.status === "broken")) || [];
    }), _ = B(() => {
      var P;
      return ((P = n.status.workflows.analyzed) == null ? void 0 : P.filter(
        (T) => T.has_path_sync_issues && !T.has_issues
      )) || [];
    }), k = B(() => w.value.length > 0), R = B(() => k.value || _.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced), A = B(() => {
      const P = [];
      return n.status.workflows.new.length > 0 && P.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && P.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && P.push(`${n.status.workflows.deleted.length} deleted`), P.length > 0 ? `${P.join(", ")} workflow${P.length === 1 && !P[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), j = B(() => {
      var O, z;
      const P = [], T = n.status.comparison;
      return (O = T.missing_nodes) != null && O.length && P.push(`${T.missing_nodes.length} missing node${T.missing_nodes.length === 1 ? "" : "s"}`), (z = T.extra_nodes) != null && z.length && P.push(`${T.extra_nodes.length} untracked node${T.extra_nodes.length === 1 ? "" : "s"}`), P.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${P.join(" and ")}.`;
    }), K = B(() => {
      var O, z;
      const P = [], T = n.status.comparison;
      return (O = T.extra_nodes) != null && O.length && (T.extra_nodes.slice(0, 3).forEach((S) => {
        P.push(`Untracked: ${S}`);
      }), T.extra_nodes.length > 3 && P.push(`...and ${T.extra_nodes.length - 3} more untracked`)), (z = T.missing_nodes) != null && z.length && (T.missing_nodes.slice(0, 3).forEach((S) => {
        P.push(`Missing: ${S}`);
      }), T.missing_nodes.length > 3 && P.push(`...and ${T.missing_nodes.length - 3} more missing`)), P;
    });
    return (P, T) => (o(), s(H, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, { title: "STATUS" })
        ]),
        content: l(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: T[1] || (T[1] = (O) => p.value = !0),
            onMouseleave: T[2] || (T[2] = (O) => p.value = !1)
          }, [
            e("div", Wn, [
              f(ze, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: l(() => [...T[9] || (T[9] = [
                  y(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              f(yo, { name: "fade" }, {
                default: l(() => [
                  p.value ? (o(), x(Z, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: g
                  }, {
                    default: l(() => [...T[10] || (T[10] = [
                      y(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : d("", !0)
                ]),
                _: 1
              })
            ]),
            f(Yo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Mt({
              left: l(() => [
                t.status.workflows.new.length ? (o(), x(Pe, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.modified.length ? (o(), x(Pe, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.deleted.length ? (o(), x(Pe, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : d("", !0),
                f(Pe, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: m.value
                }, null, 8, ["count", "separator"])
              ]),
              right: l(() => [
                t.status.git_changes.nodes_added.length ? (o(), x(Pe, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), x(Pe, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.workflow_changes ? (o(), x(Pe, {
                  key: 2,
                  icon: "●",
                  count: C.value,
                  label: C.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : d("", !0),
                L.value ? (o(), x(Pe, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : d("", !0),
                $.value && !u.value && !L.value ? (o(), x(Pe, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : d("", !0),
                $.value ? d("", !0) : (o(), x(Pe, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              M.value ? {
                name: "footer",
                fn: l(() => [
                  T[12] || (T[12] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Gn, [
                    e("span", jn, a(A.value), 1),
                    f(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: T[0] || (T[0] = (O) => P.$emit("commit-changes"))
                    }, {
                      default: l(() => [...T[11] || (T[11] = [
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
          t.status.is_detached_head ? (o(), x(at, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: l(() => [
              f(Z, {
                variant: "primary",
                size: "sm",
                onClick: T[3] || (T[3] = (O) => P.$emit("create-branch"))
              }, {
                default: l(() => [...T[13] || (T[13] = [
                  y(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          R.value ? (o(), s("div", Hn, [
            f(ze, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: l(() => [...T[14] || (T[14] = [
                y(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            w.value.length > 0 ? (o(), x(at, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${w.value.length} workflow${w.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows have missing dependencies that must be resolved before they can run.",
              items: w.value.map((O) => `${O.name} — ${O.issue_summary}`)
            }, {
              actions: l(() => [
                f(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[4] || (T[4] = (O) => P.$emit("view-workflows"))
                }, {
                  default: l(() => [...T[15] || (T[15] = [
                    y(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : d("", !0),
            _.value.length > 0 ? (o(), x(at, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${_.value.length} workflow${_.value.length === 1 ? "" : "s"} with path issues`,
              description: "These workflows can run but have model paths that should be synced.",
              items: _.value.map((O) => `${O.name} — ${O.models_needing_path_sync_count} model path${O.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
            }, {
              actions: l(() => [
                f(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[5] || (T[5] = (O) => P.$emit("view-workflows"))
                }, {
                  default: l(() => [...T[16] || (T[16] = [
                    y(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : d("", !0),
            t.status.missing_models_count > 0 && !k.value ? (o(), x(at, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: l(() => [
                f(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[6] || (T[6] = (O) => P.$emit("view-workflows"))
                }, {
                  default: l(() => [...T[17] || (T[17] = [
                    y(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : d("", !0),
            t.status.comparison.is_synced ? d("", !0) : (o(), x(at, {
              key: 3,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: j.value,
              items: K.value
            }, {
              actions: l(() => [
                f(Z, {
                  variant: "secondary",
                  size: "sm",
                  onClick: g
                }, {
                  default: l(() => [...T[18] || (T[18] = [
                    y(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                f(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[7] || (T[7] = (O) => P.$emit("view-nodes"))
                }, {
                  default: l(() => [...T[19] || (T[19] = [
                    y(" See Nodes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description", "items"]))
          ])) : d("", !0),
          !R.value && !M.value ? (o(), x(Ue, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : d("", !0)
        ]),
        _: 1
      }),
      f(An, {
        show: r.value,
        status: t.status,
        onClose: T[8] || (T[8] = (O) => r.value = !1),
        onNavigateWorkflows: h,
        onNavigateNodes: v
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), Kn = /* @__PURE__ */ Y(qn, [["__scopeId", "data-v-698b3f43"]]), Jn = ["type", "value", "placeholder", "disabled"], Qn = /* @__PURE__ */ Q({
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
    const r = t, p = n, g = b(null);
    function h(v) {
      const i = v.target.value;
      p("update:modelValue", i);
    }
    return _e(() => {
      r.autoFocus && g.value && g.value.focus();
    }), c({
      focus: () => {
        var v;
        return (v = g.value) == null ? void 0 : v.focus();
      },
      blur: () => {
        var v;
        return (v = g.value) == null ? void 0 : v.blur();
      }
    }), (v, i) => (o(), s("input", {
      ref_key: "inputRef",
      ref: g,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: ne(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: h,
      onKeyup: [
        i[0] || (i[0] = Je((m) => v.$emit("enter"), ["enter"])),
        i[1] || (i[1] = Je((m) => v.$emit("escape"), ["escape"]))
      ],
      onFocus: i[2] || (i[2] = (m) => v.$emit("focus")),
      onBlur: i[3] || (i[3] = (m) => v.$emit("blur"))
    }, null, 42, Jn));
  }
}), Ct = /* @__PURE__ */ Y(Qn, [["__scopeId", "data-v-0380d08f"]]), Yn = { class: "branch-create-form" }, Xn = { class: "form-actions" }, Zn = /* @__PURE__ */ Q({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, r = b(""), p = B(() => {
      const v = r.value.trim();
      return v.length > 0 && !v.startsWith("-") && !v.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(v);
    });
    function g() {
      p.value && (n("create", r.value.trim()), r.value = "");
    }
    function h() {
      r.value = "", n("cancel");
    }
    return (v, i) => (o(), s("div", Yn, [
      f(Ct, {
        modelValue: r.value,
        "onUpdate:modelValue": i[0] || (i[0] = (m) => r.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: g,
        onEscape: h
      }, null, 8, ["modelValue"]),
      e("div", Xn, [
        f(Z, {
          variant: "primary",
          size: "sm",
          disabled: !p.value,
          onClick: g
        }, {
          default: l(() => [...i[1] || (i[1] = [
            y(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        f(Z, {
          variant: "secondary",
          size: "sm",
          onClick: h
        }, {
          default: l(() => [...i[2] || (i[2] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), ea = /* @__PURE__ */ Y(Zn, [["__scopeId", "data-v-7c500394"]]), ta = { class: "branch-list-item__indicator" }, oa = { class: "branch-list-item__name" }, sa = {
  key: 0,
  class: "branch-list-item__actions"
}, na = {
  key: 0,
  class: "branch-list-item__current-label"
}, aa = /* @__PURE__ */ Q({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (o(), s("div", {
      class: ne(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && c.$emit("click"))
    }, [
      e("span", ta, a(t.isCurrent ? "●" : "○"), 1),
      e("span", oa, a(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (o(), s("div", sa, [
        ue(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), s("span", na, " current ")) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), la = /* @__PURE__ */ Y(aa, [["__scopeId", "data-v-c6581a24"]]), ia = {
  key: 2,
  class: "branch-list"
}, ra = /* @__PURE__ */ Q({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: c }) {
    const n = c, r = b(!1);
    function p(h) {
      n("create", h), g();
    }
    function g() {
      r.value = !1;
    }
    return (h, v) => (o(), x(Ie, null, {
      header: l(() => [
        f(Ee, { title: "BRANCHES" }, {
          actions: l(() => [
            f(Z, {
              variant: "ghost",
              size: "sm",
              onClick: v[0] || (v[0] = (i) => r.value = !0),
              title: "Create new branch"
            }, {
              default: l(() => [...v[1] || (v[1] = [
                e("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", {
                    d: "M8 2v12M2 8h12",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    fill: "none"
                  })
                ], -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      content: l(() => [
        r.value ? (o(), x(ea, {
          key: 0,
          onCreate: p,
          onCancel: g
        })) : d("", !0),
        t.branches.length === 0 ? (o(), x(Ue, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), s("div", ia, [
          (o(!0), s(H, null, se(t.branches, (i) => (o(), x(la, {
            key: i.name,
            "branch-name": i.name,
            "is-current": i.is_current
          }, {
            actions: l(() => [
              i.is_current ? d("", !0) : (o(), x(Z, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (m) => h.$emit("switch", i.name)
              }, {
                default: l(() => [...v[2] || (v[2] = [
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
}), da = /* @__PURE__ */ Y(ra, [["__scopeId", "data-v-763d6ec4"]]), ca = { class: "commit-list" }, ua = /* @__PURE__ */ Q({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (o(), s("div", ca, [
      ue(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), ma = /* @__PURE__ */ Y(ua, [["__scopeId", "data-v-8c5ee761"]]), va = { class: "commit-hash" }, fa = /* @__PURE__ */ Q({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = B(() => c.hash.slice(0, c.length));
    return (r, p) => (o(), s("span", va, a(n.value), 1));
  }
}), eo = /* @__PURE__ */ Y(fa, [["__scopeId", "data-v-7c333cc6"]]), ga = { class: "commit-message" }, pa = { class: "commit-date" }, ha = /* @__PURE__ */ Q({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, r = c;
    function p() {
      n.clickable && r("click");
    }
    return (g, h) => (o(), s("div", {
      class: ne(["commit-item", { clickable: t.clickable }]),
      onClick: p
    }, [
      f(eo, { hash: t.hash }, null, 8, ["hash"]),
      e("span", ga, a(t.message), 1),
      e("span", pa, a(t.relativeDate), 1),
      g.$slots.actions ? (o(), s("div", {
        key: 0,
        class: "commit-actions",
        onClick: h[0] || (h[0] = ke(() => {
        }, ["stop"]))
      }, [
        ue(g.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), ya = /* @__PURE__ */ Y(ha, [["__scopeId", "data-v-dd7c621b"]]), wa = /* @__PURE__ */ Q({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (o(), x(Ie, null, {
      header: l(() => [
        f(Ee, { title: "HISTORY" })
      ]),
      content: l(() => [
        t.commits.length === 0 ? (o(), x(Ue, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), x(ma, { key: 1 }, {
          default: l(() => [
            (o(!0), s(H, null, se(t.commits, (r) => (o(), x(ya, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (p) => c.$emit("select", r)
            }, {
              actions: l(() => [
                f(Z, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (p) => c.$emit("checkout", r),
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
}), ka = /* @__PURE__ */ Y(wa, [["__scopeId", "data-v-981c3c64"]]), Q1 = [
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
  ...Array(12).fill(null).map((t, c) => ({
    name: `synced-workflow-${c + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + c,
    model_count: 1 + c % 3,
    sync_state: "synced"
  }))
], Y1 = {
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
}, ba = [
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
], X1 = [
  ...ba,
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
function gt() {
  return !1;
}
function Se() {
  const t = b(!1), c = b(null);
  async function n(J, de) {
    var D;
    if (!((D = window.app) != null && D.api))
      throw new Error("ComfyUI API not available");
    const F = await window.app.api.fetchApi(J, de);
    if (!F.ok) {
      const te = await F.json().catch(() => ({}));
      throw new Error(te.error || te.message || `Request failed: ${F.status}`);
    }
    return F.json();
  }
  async function r(J = !1) {
    return n(J ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function p(J, de = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: J, allow_issues: de })
    });
  }
  async function g(J = 10, de = 0) {
    return n(`/v2/comfygit/log?limit=${J}&offset=${de}`);
  }
  async function h(J) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: J })
    });
  }
  async function v() {
    return n("/v2/comfygit/branches");
  }
  async function i(J) {
    return n(`/v2/comfygit/commit/${J}`);
  }
  async function m(J, de = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: J, force: de })
    });
  }
  async function $(J, de = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: J, start_point: de })
    });
  }
  async function u(J, de = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: J, force: de })
    });
  }
  async function M() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const J = await r();
        return [{
          name: J.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + J.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: J.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: J.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function C(J) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: J })
    });
  }
  async function L() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function w(J) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function _() {
    return n("/v2/workspace/environments/create_status");
  }
  async function k(J = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${J}`);
  }
  async function R(J) {
    return n(`/v2/workspace/environments/${J}`, {
      method: "DELETE"
    });
  }
  async function A(J = !1) {
    try {
      return n(J ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const de = await r(J), F = [];
      return de.workflows.new.forEach((D) => {
        F.push({ name: D, status: "new", missing_nodes: 0, missing_models: 0, path: D });
      }), de.workflows.modified.forEach((D) => {
        F.push({ name: D, status: "modified", missing_nodes: 0, missing_models: 0, path: D });
      }), de.workflows.synced.forEach((D) => {
        F.push({ name: D, status: "synced", missing_nodes: 0, missing_models: 0, path: D });
      }), F;
    }
  }
  async function j(J) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(J)}/details`);
  }
  async function K(J) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(J)}/resolve`, {
      method: "POST"
    });
  }
  async function P(J, de, F) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(J)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: de, install_models: F })
    });
  }
  async function T(J, de, F) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(J)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: de, importance: F })
    });
  }
  async function O() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function z() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function S(J) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(J)}`);
  }
  async function V(J) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: J })
    });
  }
  async function W(J, de) {
    return n(`/v2/workspace/models/${J}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: de })
    });
  }
  async function X(J, de) {
    return n(`/v2/workspace/models/${J}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: de })
    });
  }
  async function oe(J) {
    return n(`/v2/workspace/models/${J}`, {
      method: "DELETE"
    });
  }
  async function E(J) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function G() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function N() {
    return n("/v2/workspace/models/directory");
  }
  async function U(J) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: J })
    });
  }
  async function ae() {
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
  async function ee(J) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function $e(J, de) {
    try {
      const F = new URLSearchParams();
      return J && F.append("level", J), de && F.append("lines", de.toString()), n(`/v2/comfygit/debug/logs?${F}`);
    } catch {
      return [];
    }
  }
  async function le(J, de) {
    try {
      const F = new URLSearchParams();
      return J && F.append("level", J), de && F.append("lines", de.toString()), n(`/v2/workspace/debug/logs?${F}`);
    } catch {
      return [];
    }
  }
  async function Ye() {
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
  async function he(J) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(J)}/track-dev`, {
      method: "POST"
    });
  }
  async function ut(J) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(J)}/install`, {
      method: "POST"
    });
  }
  async function mt(J) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(J)}/update`, {
      method: "POST"
    });
  }
  async function vt(J) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function we() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Ke(J, de) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: J, url: de })
    });
  }
  async function Fe(J) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function Oe(J, de, F) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(J)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: de, push_url: F })
    });
  }
  async function ft(J) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(J)}/fetch`, {
      method: "POST"
    });
  }
  async function fe(J) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(J)}/status`);
    } catch {
      return null;
    }
  }
  async function Be(J = "skip", de = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: J,
        remove_extra_nodes: de
      })
    });
  }
  return {
    isLoading: t,
    error: c,
    getStatus: r,
    commit: p,
    getHistory: g,
    exportEnv: h,
    // Git Operations
    getBranches: v,
    getCommitDetail: i,
    checkout: m,
    createBranch: $,
    switchBranch: u,
    // Environment Management
    getEnvironments: M,
    switchEnvironment: C,
    getSwitchProgress: L,
    createEnvironment: w,
    getCreateProgress: _,
    getComfyUIReleases: k,
    deleteEnvironment: R,
    // Workflow Management
    getWorkflows: A,
    getWorkflowDetails: j,
    resolveWorkflow: K,
    installWorkflowDeps: P,
    setModelImportance: T,
    // Model Management
    getEnvironmentModels: O,
    getWorkspaceModels: z,
    getModelDetails: S,
    openFileLocation: V,
    addModelSource: W,
    removeModelSource: X,
    deleteModel: oe,
    downloadModel: E,
    scanWorkspaceModels: G,
    getModelsDirectory: N,
    setModelsDirectory: U,
    // Settings
    getConfig: ae,
    updateConfig: ee,
    // Debug/Logs
    getEnvironmentLogs: $e,
    getWorkspaceLogs: le,
    // Node Management
    getNodes: Ye,
    trackNodeAsDev: he,
    installNode: ut,
    updateNode: mt,
    uninstallNode: vt,
    // Git Remotes
    getRemotes: we,
    addRemote: Ke,
    removeRemote: Fe,
    updateRemoteUrl: Oe,
    fetchRemote: ft,
    getRemoteSyncStatus: fe,
    // Environment Sync
    syncEnvironmentManually: Be
  };
}
const _a = { class: "base-modal-header" }, $a = {
  key: 0,
  class: "base-modal-title"
}, Ca = { class: "base-modal-body" }, xa = {
  key: 0,
  class: "base-modal-loading"
}, Sa = {
  key: 1,
  class: "base-modal-error"
}, Ia = {
  key: 0,
  class: "base-modal-footer"
}, Ea = /* @__PURE__ */ Q({
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
    const n = t, r = c;
    function p() {
      n.closeOnOverlayClick && r("close");
    }
    function g(h) {
      h.key === "Escape" && r("close");
    }
    return _e(() => {
      document.addEventListener("keydown", g), document.body.style.overflow = "hidden";
    }), wo(() => {
      document.removeEventListener("keydown", g), document.body.style.overflow = "";
    }), (h, v) => (o(), x(xe, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: p
      }, [
        e("div", {
          class: ne(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: v[1] || (v[1] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", _a, [
            ue(h.$slots, "header", {}, () => [
              t.title ? (o(), s("h3", $a, a(t.title), 1)) : d("", !0)
            ], !0),
            t.showCloseButton ? (o(), s("button", {
              key: 0,
              class: "base-modal-close",
              onClick: v[0] || (v[0] = (i) => h.$emit("close"))
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
          e("div", Ca, [
            t.loading ? (o(), s("div", xa, "Loading...")) : t.error ? (o(), s("div", Sa, a(t.error), 1)) : ue(h.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          h.$slots.footer ? (o(), s("div", Ia, [
            ue(h.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), st = /* @__PURE__ */ Y(Ea, [["__scopeId", "data-v-2125a0e6"]]), Ma = ["type", "disabled"], za = {
  key: 0,
  class: "spinner"
}, La = /* @__PURE__ */ Q({
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
    return (c, n) => (o(), s("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: ne(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => c.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", za)) : d("", !0),
      ue(c.$slots, "default", {}, void 0, !0)
    ], 10, Ma));
  }
}), ie = /* @__PURE__ */ Y(La, [["__scopeId", "data-v-f3452606"]]), Ta = {
  key: 0,
  class: "base-title-count"
}, Da = /* @__PURE__ */ Q({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, n) => (o(), x(Ot(`h${t.level}`), {
      class: ne(["base-title", t.variant])
    }, {
      default: l(() => [
        ue(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Ta, "(" + a(t.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), bt = /* @__PURE__ */ Y(Da, [["__scopeId", "data-v-5a01561d"]]), Ra = ["value", "disabled"], Na = {
  key: 0,
  value: "",
  disabled: ""
}, Ua = ["value"], Oa = {
  key: 0,
  class: "base-select-error"
}, Ba = /* @__PURE__ */ Q({
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
    function c(r) {
      return typeof r == "string" ? r : r.value;
    }
    function n(r) {
      return typeof r == "string" ? r : r.label;
    }
    return (r, p) => (o(), s("div", {
      class: ne(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: ne(["base-select", { error: !!t.error }]),
        onChange: p[0] || (p[0] = (g) => r.$emit("update:modelValue", g.target.value))
      }, [
        t.placeholder ? (o(), s("option", Na, a(t.placeholder), 1)) : d("", !0),
        (o(!0), s(H, null, se(t.options, (g) => (o(), s("option", {
          key: c(g),
          value: c(g)
        }, a(n(g)), 9, Ua))), 128))
      ], 42, Ra),
      t.error ? (o(), s("span", Oa, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), Pa = /* @__PURE__ */ Y(Ba, [["__scopeId", "data-v-7436d745"]]), Va = { class: "popover-header" }, Fa = { class: "popover-title" }, Aa = { class: "popover-content" }, Wa = {
  key: 0,
  class: "popover-actions"
}, Ga = /* @__PURE__ */ Q({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (o(), x(xe, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (r) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Qe({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", Va, [
            e("h4", Fa, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Aa, [
            ue(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (o(), s("div", Wa, [
            ue(c.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), je = /* @__PURE__ */ Y(Ga, [["__scopeId", "data-v-42815ace"]]), ja = { class: "detail-section" }, Ha = {
  key: 0,
  class: "empty-message"
}, qa = { class: "model-header" }, Ka = { class: "model-name" }, Ja = { class: "model-details" }, Qa = { class: "model-row" }, Ya = { class: "model-row" }, Xa = { class: "label" }, Za = {
  key: 0,
  class: "model-row model-row-nodes"
}, el = { class: "node-list" }, tl = ["onClick"], ol = {
  key: 1,
  class: "model-row"
}, sl = { class: "value" }, nl = {
  key: 0,
  class: "model-actions"
}, al = { class: "detail-section" }, ll = {
  key: 0,
  class: "empty-message"
}, il = { class: "node-name" }, rl = {
  key: 0,
  class: "node-version"
}, dl = /* @__PURE__ */ Q({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, r = c, { getWorkflowDetails: p, setModelImportance: g, installWorkflowDeps: h } = Se(), v = b(null), i = b(!1), m = b(null), $ = b(!1), u = b({}), M = b({}), C = b(!1), L = b(/* @__PURE__ */ new Set()), w = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function _(z) {
      switch (z) {
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
    function k(z) {
      switch (z) {
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
    function R(z) {
      if (!z.loaded_by || z.loaded_by.length === 0) return [];
      const S = z.hash || z.filename;
      return L.value.has(S) ? z.loaded_by : z.loaded_by.slice(0, 3);
    }
    function A(z) {
      return L.value.has(z);
    }
    function j(z) {
      L.value.has(z) ? L.value.delete(z) : L.value.add(z), L.value = new Set(L.value);
    }
    async function K() {
      i.value = !0, m.value = null;
      try {
        v.value = await p(n.workflowName);
      } catch (z) {
        m.value = z instanceof Error ? z.message : "Failed to load workflow details";
      } finally {
        i.value = !1;
      }
    }
    function P(z, S) {
      u.value[z] = S, $.value = !0;
    }
    async function T() {
      if (!$.value) {
        r("close");
        return;
      }
      i.value = !0, m.value = null;
      try {
        for (const [z, S] of Object.entries(u.value))
          await g(n.workflowName, z, S);
        r("refresh"), r("close");
      } catch (z) {
        m.value = z instanceof Error ? z.message : "Failed to save changes";
      } finally {
        i.value = !1;
      }
    }
    async function O(z) {
      M.value[z] = !0, m.value = null;
      try {
        await h(n.workflowName, !0, !1), await K();
      } catch (S) {
        m.value = S instanceof Error ? S.message : "Failed to install node";
      } finally {
        M.value[z] = !1;
      }
    }
    return _e(K), (z, S) => (o(), s(H, null, [
      f(st, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: i.value,
        error: m.value || void 0,
        onClose: S[5] || (S[5] = (V) => r("close"))
      }, {
        body: l(() => [
          v.value ? (o(), s(H, { key: 0 }, [
            e("section", ja, [
              f(bt, { variant: "section" }, {
                default: l(() => [
                  y("MODELS USED (" + a(v.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.models.length === 0 ? (o(), s("div", Ha, " No models used in this workflow ")) : d("", !0),
              (o(!0), s(H, null, se(v.value.models, (V) => (o(), s("div", {
                key: V.hash || V.filename,
                class: "model-card"
              }, [
                e("div", qa, [
                  S[7] || (S[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Ka, a(V.filename), 1)
                ]),
                e("div", Ja, [
                  e("div", Qa, [
                    S[8] || (S[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: ne(["value", _(V.status)])
                    }, a(k(V.status)), 3)
                  ]),
                  e("div", Ya, [
                    e("span", Xa, [
                      S[9] || (S[9] = y(" Importance: ", -1)),
                      f(Zt, {
                        size: 14,
                        title: "About importance levels",
                        onClick: S[0] || (S[0] = (W) => C.value = !0)
                      })
                    ]),
                    f(Pa, {
                      "model-value": u.value[V.filename] || V.importance,
                      options: w,
                      "onUpdate:modelValue": (W) => P(V.filename, W)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  V.loaded_by && V.loaded_by.length > 0 ? (o(), s("div", Za, [
                    S[10] || (S[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", el, [
                      (o(!0), s(H, null, se(R(V), (W, X) => (o(), s("div", {
                        key: `${W.node_id}-${X}`,
                        class: "node-reference"
                      }, a(W.node_type) + " (Node #" + a(W.node_id) + ") ", 1))), 128)),
                      V.loaded_by.length > 3 ? (o(), s("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (W) => j(V.hash || V.filename)
                      }, a(A(V.hash || V.filename) ? "▼ Show less" : `▶ View all (${V.loaded_by.length})`), 9, tl)) : d("", !0)
                    ])
                  ])) : d("", !0),
                  V.size_mb ? (o(), s("div", ol, [
                    S[11] || (S[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", sl, a(V.size_mb) + " MB", 1)
                  ])) : d("", !0)
                ]),
                V.status !== "available" ? (o(), s("div", nl, [
                  V.status === "downloadable" ? (o(), x(ie, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: S[1] || (S[1] = (W) => r("resolve"))
                  }, {
                    default: l(() => [...S[12] || (S[12] = [
                      y(" Download ", -1)
                    ])]),
                    _: 1
                  })) : V.status === "path_mismatch" ? (o(), x(ie, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: S[2] || (S[2] = (W) => r("resolve"))
                  }, {
                    default: l(() => [...S[13] || (S[13] = [
                      y(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), x(ie, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: S[3] || (S[3] = (W) => r("resolve"))
                  }, {
                    default: l(() => [...S[14] || (S[14] = [
                      y(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : d("", !0)
              ]))), 128))
            ]),
            e("section", al, [
              f(bt, { variant: "section" }, {
                default: l(() => [
                  y("NODES USED (" + a(v.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.nodes.length === 0 ? (o(), s("div", ll, " No custom nodes used in this workflow ")) : d("", !0),
              (o(!0), s(H, null, se(v.value.nodes, (V) => (o(), s("div", {
                key: V.name,
                class: "node-item"
              }, [
                e("span", {
                  class: ne(["node-status", V.status === "installed" ? "installed" : "missing"])
                }, a(V.status === "installed" ? "✓" : "✕"), 3),
                e("span", il, a(V.name), 1),
                V.version ? (o(), s("span", rl, "v" + a(V.version), 1)) : d("", !0),
                V.status === "missing" ? (o(), x(ie, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: M.value[V.name],
                  onClick: (W) => O(V.name),
                  class: "node-install-btn"
                }, {
                  default: l(() => [...S[15] || (S[15] = [
                    y(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : d("", !0)
              ]))), 128))
            ])
          ], 64)) : d("", !0)
        ]),
        footer: l(() => [
          f(ie, {
            variant: "secondary",
            onClick: S[4] || (S[4] = (V) => r("close"))
          }, {
            default: l(() => [...S[16] || (S[16] = [
              y(" Close ", -1)
            ])]),
            _: 1
          }),
          $.value ? (o(), x(ie, {
            key: 0,
            variant: "primary",
            onClick: T
          }, {
            default: l(() => [...S[17] || (S[17] = [
              y(" Save Changes ", -1)
            ])]),
            _: 1
          })) : d("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      f(je, {
        show: C.value,
        title: "Model Importance Levels",
        onClose: S[6] || (S[6] = (V) => C.value = !1)
      }, {
        content: l(() => [...S[18] || (S[18] = [
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
}), cl = /* @__PURE__ */ Y(dl, [["__scopeId", "data-v-0b14d32e"]]), ve = Xt({
  items: [],
  status: "idle"
});
let Ve = null;
function to() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Tt(t) {
  return ve.items.find((c) => c.id === t);
}
async function lt() {
  if (ve.status === "downloading") return;
  const t = ve.items.find((c) => c.status === "queued");
  if (!t) {
    ve.status = "idle";
    return;
  }
  ve.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await ul(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    ve.status = "idle", lt();
  }
}
async function ul(t) {
  return new Promise((c, n) => {
    Ve && (Ve.close(), Ve = null);
    const r = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), p = new EventSource(`/v2/comfygit/models/download-stream?${r}`);
    Ve = p;
    let g = Date.now(), h = 0, v = !1;
    p.onmessage = (i) => {
      try {
        const m = JSON.parse(i.data);
        switch (m.type) {
          case "progress":
            t.downloaded = m.downloaded || 0, t.size = m.total || t.size;
            const $ = Date.now(), u = ($ - g) / 1e3;
            if (u > 0.5) {
              const M = t.downloaded - h;
              if (t.speed = M / u, g = $, h = t.downloaded, t.speed > 0 && t.size > 0) {
                const C = t.size - t.downloaded;
                t.eta = C / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            v = !0, p.close(), Ve = null, c();
            break;
          case "error":
            v = !0, p.close(), Ve = null, n(new Error(m.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, p.onerror = () => {
      p.close(), Ve = null, v || n(new Error("Connection lost"));
    };
  });
}
async function ml() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const c = await t.json();
    if (!c.pending_downloads || c.pending_downloads.length === 0) return;
    for (const n of c.pending_downloads) {
      if (ve.items.some((p) => p.url === n.url && p.filename === n.filename))
        continue;
      const r = {
        id: to(),
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
      ve.items.push(r);
    }
    console.log(`[ComfyGit] Loaded ${c.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function xt() {
  function t(_) {
    for (const k of _) {
      if (ve.items.some(
        (j) => j.url === k.url && j.targetPath === k.targetPath && ["queued", "downloading", "paused", "completed"].includes(j.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${k.filename}`);
        continue;
      }
      const A = {
        id: to(),
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
      ve.items.push(A);
    }
    ve.status === "idle" && lt();
  }
  async function c(_) {
    const k = Tt(_);
    if (k) {
      if (k.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(k.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Ve && (Ve.close(), Ve = null), k.status = "failed", k.error = "Cancelled by user", ve.status = "idle", lt();
      } else if (k.status === "queued") {
        const R = ve.items.findIndex((A) => A.id === _);
        R >= 0 && ve.items.splice(R, 1);
      }
    }
  }
  function n(_) {
    const k = Tt(_);
    !k || k.status !== "failed" || (k.status = "queued", k.error = void 0, k.progress = 0, k.downloaded = 0, ve.status === "idle" && lt());
  }
  function r(_) {
    const k = Tt(_);
    !k || k.status !== "paused" || (k.status = "queued", ve.status === "idle" && lt());
  }
  function p() {
    const _ = ve.items.filter((k) => k.status === "paused");
    for (const k of _)
      k.status = "queued";
    ve.status === "idle" && lt();
  }
  function g(_) {
    const k = ve.items.findIndex((R) => R.id === _);
    k >= 0 && ["completed", "failed", "paused"].includes(ve.items[k].status) && ve.items.splice(k, 1);
  }
  function h() {
    ve.items = ve.items.filter((_) => _.status !== "completed");
  }
  function v() {
    ve.items = ve.items.filter((_) => _.status !== "failed");
  }
  const i = B(
    () => ve.items.find((_) => _.status === "downloading")
  ), m = B(
    () => ve.items.filter((_) => _.status === "queued")
  ), $ = B(
    () => ve.items.filter((_) => _.status === "completed")
  ), u = B(
    () => ve.items.filter((_) => _.status === "failed")
  ), M = B(
    () => ve.items.filter((_) => _.status === "paused")
  ), C = B(() => ve.items.length > 0), L = B(
    () => ve.items.filter((_) => _.status === "queued" || _.status === "downloading").length
  ), w = B(
    () => ve.items.some((_) => _.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: ko(ve),
    // Computed
    currentDownload: i,
    queuedItems: m,
    completedItems: $,
    failedItems: u,
    pausedItems: M,
    hasItems: C,
    activeCount: L,
    hasPaused: w,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: r,
    resumeAllPaused: p,
    removeItem: g,
    clearCompleted: h,
    clearFailed: v,
    loadPendingDownloads: ml
  };
}
function vl() {
  const t = b(null), c = b(null), n = b([]), r = b([]), p = b(!1), g = b(null);
  async function h(k, R) {
    var j;
    if (!((j = window.app) != null && j.api))
      throw new Error("ComfyUI API not available");
    const A = await window.app.api.fetchApi(k, R);
    if (!A.ok) {
      const K = await A.json().catch(() => ({})), P = K.error || K.message || `Request failed: ${A.status}`;
      throw new Error(P);
    }
    return A.json();
  }
  async function v(k) {
    p.value = !0, g.value = null;
    try {
      let R;
      return gt() || (R = await h(
        `/v2/comfygit/workflow/${k}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = R, R;
    } catch (R) {
      const A = R instanceof Error ? R.message : "Unknown error occurred";
      throw g.value = A, R;
    } finally {
      p.value = !1;
    }
  }
  async function i(k, R, A) {
    p.value = !0, g.value = null;
    try {
      let j;
      if (!gt()) {
        const K = Object.fromEntries(R), P = Object.fromEntries(A);
        j = await h(
          `/v2/comfygit/workflow/${k}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: K,
              model_choices: P
            })
          }
        );
      }
      return c.value = j, j;
    } catch (j) {
      const K = j instanceof Error ? j.message : "Unknown error occurred";
      throw g.value = K, j;
    } finally {
      p.value = !1;
    }
  }
  async function m(k, R = 10) {
    p.value = !0, g.value = null;
    try {
      let A;
      return gt() || (A = await h(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: k, limit: R })
        }
      )), n.value = A.results, A.results;
    } catch (A) {
      const j = A instanceof Error ? A.message : "Unknown error occurred";
      throw g.value = j, A;
    } finally {
      p.value = !1;
    }
  }
  async function $(k, R = 10) {
    p.value = !0, g.value = null;
    try {
      let A;
      return gt() || (A = await h(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: k, limit: R })
        }
      )), r.value = A.results, A.results;
    } catch (A) {
      const j = A instanceof Error ? A.message : "Unknown error occurred";
      throw g.value = j, A;
    } finally {
      p.value = !1;
    }
  }
  const u = Xt({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function M() {
    u.phase = "idle", u.currentFile = void 0, u.currentFileIndex = void 0, u.totalFiles = void 0, u.bytesDownloaded = void 0, u.bytesTotal = void 0, u.completedFiles = [], u.nodesToInstall = [], u.nodesInstalled = [], u.installError = void 0, u.needsRestart = void 0, u.error = void 0;
  }
  async function C(k) {
    u.phase = "installing", u.nodesInstalled = [], u.installError = void 0;
    try {
      let R;
      return gt() || (R = await h(
        `/v2/comfygit/workflow/${k}/install`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), u.nodesInstalled = R.nodes_installed, u.needsRestart = R.nodes_installed.length > 0, R;
    } catch (R) {
      const A = R instanceof Error ? R.message : "Failed to install nodes";
      throw u.installError = A, R;
    }
  }
  async function L(k, R, A) {
    M(), u.phase = "resolving", g.value = null;
    const j = Object.fromEntries(R), K = Object.fromEntries(A);
    try {
      const P = await fetch(`/v2/comfygit/workflow/${k}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: j,
          model_choices: K
        })
      });
      if (!P.ok)
        throw new Error(`Request failed: ${P.status}`);
      if (!P.body)
        throw new Error("No response body");
      const T = P.body.getReader(), O = new TextDecoder();
      let z = "";
      for (; ; ) {
        const { done: S, value: V } = await T.read();
        if (S) break;
        z += O.decode(V, { stream: !0 });
        const W = z.split(`

`);
        z = W.pop() || "";
        for (const X of W) {
          if (!X.trim()) continue;
          const oe = X.split(`
`);
          let E = "", G = "";
          for (const N of oe)
            N.startsWith("event: ") ? E = N.slice(7) : N.startsWith("data: ") && (G = N.slice(6));
          if (G)
            try {
              const N = JSON.parse(G);
              w(E, N);
            } catch (N) {
              console.warn("Failed to parse SSE event:", N);
            }
        }
      }
    } catch (P) {
      const T = P instanceof Error ? P.message : "Unknown error occurred";
      throw g.value = T, u.error = T, u.phase = "error", P;
    }
  }
  function w(k, R) {
    switch (k) {
      case "batch_start":
        u.phase = "downloading", u.totalFiles = R.total;
        break;
      case "file_start":
        u.currentFile = R.filename, u.currentFileIndex = R.index, u.bytesDownloaded = 0, u.bytesTotal = void 0;
        break;
      case "file_progress":
        u.bytesDownloaded = R.downloaded, u.bytesTotal = R.total;
        break;
      case "file_complete":
        u.completedFiles.push({
          filename: R.filename,
          success: R.success,
          error: R.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        u.nodesToInstall = R.nodes_to_install || [], R.download_results && (u.completedFiles = R.download_results), u.phase = "complete";
        break;
      case "error":
        u.error = R.message, u.phase = "error", g.value = R.message;
        break;
    }
  }
  function _(k, R) {
    const { addToQueue: A } = xt(), j = R.filter((K) => K.url && K.target_path).map((K) => ({
      workflow: k,
      filename: K.filename,
      url: K.url,
      targetPath: K.target_path,
      size: K.size || 0,
      type: "model"
    }));
    return j.length > 0 && A(j), j.length;
  }
  return {
    // State
    result: t,
    appliedResult: c,
    searchResults: n,
    modelSearchResults: r,
    isLoading: p,
    error: g,
    progress: u,
    // Methods
    analyzeWorkflow: v,
    applyResolution: i,
    applyResolutionWithProgress: L,
    installNodes: C,
    searchNodes: m,
    searchModels: $,
    resetProgress: M,
    queueModelDownloads: _
  };
}
const fl = { class: "resolution-stepper" }, gl = { class: "stepper-header" }, pl = ["onClick"], hl = {
  key: 0,
  class: "step-icon"
}, yl = {
  key: 1,
  class: "step-number"
}, wl = { class: "step-label" }, kl = {
  key: 0,
  class: "step-connector"
}, bl = { class: "stepper-content" }, _l = /* @__PURE__ */ Q({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: c }) {
    const n = t, r = c;
    function p(m) {
      var $;
      if (($ = n.stepStats) != null && $[m]) {
        const u = n.stepStats[m];
        return u.total > 0 && u.resolved === u.total;
      }
      return n.completedSteps.includes(m);
    }
    function g(m) {
      var $;
      if (($ = n.stepStats) != null && $[m]) {
        const u = n.stepStats[m];
        return u.resolved > 0 && u.resolved < u.total;
      }
      return !1;
    }
    function h(m) {
      return p(m) ? "state-complete" : g(m) ? "state-partial" : "state-pending";
    }
    function v(m) {
      return !1;
    }
    function i(m) {
      r("step-change", m);
    }
    return (m, $) => (o(), s("div", fl, [
      e("div", gl, [
        (o(!0), s(H, null, se(t.steps, (u, M) => (o(), s("div", {
          key: u.id,
          class: ne(["step", {
            active: t.currentStep === u.id,
            completed: p(u.id),
            "in-progress": g(u.id),
            disabled: v(u.id)
          }]),
          onClick: (C) => i(u.id)
        }, [
          e("div", {
            class: ne(["step-indicator", h(u.id)])
          }, [
            p(u.id) ? (o(), s("span", hl, "✓")) : (o(), s("span", yl, a(M + 1), 1))
          ], 2),
          e("div", wl, a(u.label), 1),
          M < t.steps.length - 1 ? (o(), s("div", kl)) : d("", !0)
        ], 10, pl))), 128))
      ]),
      e("div", bl, [
        ue(m.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), $l = /* @__PURE__ */ Y(_l, [["__scopeId", "data-v-2a7b3af8"]]), Cl = /* @__PURE__ */ Q({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = B(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), r = B(() => `confidence-${n.value}`), p = B(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (g, h) => (o(), s("span", {
      class: ne(["confidence-badge", r.value, t.size])
    }, a(p.value), 3));
  }
}), Ft = /* @__PURE__ */ Y(Cl, [["__scopeId", "data-v-17ec4b80"]]), xl = { class: "node-info" }, Sl = { class: "node-info-text" }, Il = { class: "item-body" }, El = {
  key: 0,
  class: "resolved-state"
}, Ml = {
  key: 1,
  class: "multiple-options"
}, zl = { class: "options-list" }, Ll = ["onClick"], Tl = ["name", "value", "checked", "onChange"], Dl = { class: "option-content" }, Rl = { class: "option-header" }, Nl = { class: "option-package-id" }, Ul = {
  key: 0,
  class: "option-title"
}, Ol = { class: "option-meta" }, Bl = {
  key: 0,
  class: "installed-badge"
}, Pl = { class: "action-buttons" }, Vl = {
  key: 2,
  class: "unresolved"
}, Fl = { class: "action-buttons" }, Al = /* @__PURE__ */ Q({
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
  setup(t, { emit: c }) {
    const n = t, r = c, p = B(() => !!n.choice);
    B(() => {
      var v;
      return (v = n.choice) == null ? void 0 : v.action;
    }), B(() => {
      var v;
      return (v = n.choice) == null ? void 0 : v.package_id;
    });
    const g = B(() => {
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
    function h(v) {
      r("option-selected", v);
    }
    return (v, i) => (o(), s("div", {
      class: ne(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: p.value }])
    }, [
      e("div", xl, [
        e("span", Sl, [
          i[7] || (i[7] = y("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: ne(["status-badge", g.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", Il, [
        p.value ? (o(), s("div", El, [
          f(ie, {
            variant: "ghost",
            size: "sm",
            onClick: i[0] || (i[0] = (m) => r("clear-choice"))
          }, {
            default: l(() => [...i[8] || (i[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", Ml, [
          i[12] || (i[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", zl, [
            (o(!0), s(H, null, se(t.options, (m, $) => (o(), s("label", {
              key: m.package_id,
              class: ne(["option-card", { selected: t.selectedOptionIndex === $ }]),
              onClick: (u) => h($)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: $,
                checked: t.selectedOptionIndex === $,
                onChange: (u) => h($)
              }, null, 40, Tl),
              e("div", Dl, [
                e("div", Rl, [
                  e("span", Nl, a(m.package_id), 1),
                  f(Ft, {
                    confidence: m.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                m.title && m.title !== m.package_id ? (o(), s("div", Ul, a(m.title), 1)) : d("", !0),
                e("div", Ol, [
                  m.is_installed ? (o(), s("span", Bl, "Already Installed")) : d("", !0)
                ])
              ])
            ], 10, Ll))), 128))
          ]),
          e("div", Pl, [
            f(ie, {
              variant: "ghost",
              size: "sm",
              onClick: i[1] || (i[1] = (m) => r("search"))
            }, {
              default: l(() => [...i[9] || (i[9] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "ghost",
              size: "sm",
              onClick: i[2] || (i[2] = (m) => r("manual-entry"))
            }, {
              default: l(() => [...i[10] || (i[10] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "secondary",
              size: "sm",
              onClick: i[3] || (i[3] = (m) => r("mark-optional"))
            }, {
              default: l(() => [...i[11] || (i[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", Vl, [
          i[16] || (i[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", Fl, [
            f(ie, {
              variant: "primary",
              size: "sm",
              onClick: i[4] || (i[4] = (m) => r("search"))
            }, {
              default: l(() => [...i[13] || (i[13] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "secondary",
              size: "sm",
              onClick: i[5] || (i[5] = (m) => r("manual-entry"))
            }, {
              default: l(() => [...i[14] || (i[14] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "secondary",
              size: "sm",
              onClick: i[6] || (i[6] = (m) => r("mark-optional"))
            }, {
              default: l(() => [...i[15] || (i[15] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Wl = /* @__PURE__ */ Y(Al, [["__scopeId", "data-v-e02629e7"]]), Gl = { class: "item-navigator" }, jl = { class: "nav-item-info" }, Hl = ["title"], ql = { class: "nav-controls" }, Kl = { class: "nav-arrows" }, Jl = ["disabled"], Ql = ["disabled"], Yl = { class: "nav-position" }, Xl = /* @__PURE__ */ Q({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const n = c;
    return (r, p) => (o(), s("div", Gl, [
      e("div", jl, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, Hl)
      ]),
      e("div", ql, [
        e("div", Kl, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: p[0] || (p[0] = (g) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, Jl),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: p[1] || (p[1] = (g) => n("next")),
            title: "Next item"
          }, " → ", 8, Ql)
        ]),
        e("span", Yl, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), oo = /* @__PURE__ */ Y(Xl, [["__scopeId", "data-v-74af7920"]]), Zl = ["type", "value", "placeholder", "disabled"], ei = {
  key: 0,
  class: "base-input-error"
}, ti = /* @__PURE__ */ Q({
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
    return (c, n) => (o(), s("div", {
      class: ne(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: ne(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          n[1] || (n[1] = Je((r) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = Je((r) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Zl),
      t.error ? (o(), s("span", ei, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), Ne = /* @__PURE__ */ Y(ti, [["__scopeId", "data-v-9ba02cdc"]]), oi = { class: "node-resolution-step" }, si = { class: "step-header" }, ni = { class: "stat-badge" }, ai = {
  key: 1,
  class: "step-body"
}, li = {
  key: 2,
  class: "empty-state"
}, ii = { class: "node-search-modal" }, ri = { class: "node-modal-body" }, di = {
  key: 0,
  class: "node-search-results"
}, ci = ["onClick"], ui = { class: "node-result-header" }, mi = { class: "node-result-package-id" }, vi = {
  key: 0,
  class: "node-result-description"
}, fi = {
  key: 1,
  class: "node-no-results"
}, gi = {
  key: 2,
  class: "node-searching"
}, pi = { class: "node-manual-entry-modal" }, hi = { class: "node-modal-body" }, yi = { class: "node-modal-actions" }, wi = /* @__PURE__ */ Q({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice"],
  setup(t, { emit: c }) {
    const n = t, r = c, p = b(0), g = b(!1), h = b(!1), v = b(""), i = b(""), m = b([]), $ = b(!1), u = B(() => n.nodes[p.value]), M = B(() => n.nodes.filter((V) => n.nodeChoices.has(V.node_type)).length), C = B(() => {
      var W;
      if (!u.value) return "not-found";
      const V = n.nodeChoices.get(u.value.node_type);
      if (V)
        switch (V.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (W = u.value.options) != null && W.length ? "ambiguous" : "not-found";
    }), L = B(() => {
      var W;
      if (!u.value) return;
      const V = n.nodeChoices.get(u.value.node_type);
      if (V)
        switch (V.action) {
          case "install":
            return V.package_id ? `→ ${V.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (W = u.value.options) != null && W.length ? `${u.value.options.length} matches` : "Not Found";
    });
    function w(V) {
      V >= 0 && V < n.nodes.length && (p.value = V);
    }
    function _() {
      u.value && r("mark-optional", u.value.node_type);
    }
    function k() {
      u.value && r("skip", u.value.node_type);
    }
    function R(V) {
      u.value && r("option-selected", u.value.node_type, V);
    }
    function A() {
      u.value && r("clear-choice", u.value.node_type);
    }
    function j() {
      u.value && (v.value = u.value.node_type, g.value = !0);
    }
    function K() {
      i.value = "", h.value = !0;
    }
    function P() {
      g.value = !1, v.value = "", m.value = [];
    }
    function T() {
      h.value = !1, i.value = "";
    }
    function O() {
      $.value = !0, setTimeout(() => {
        $.value = !1;
      }, 300);
    }
    function z(V) {
      u.value && (r("manual-entry", u.value.node_type, V.package_id), P());
    }
    function S() {
      !u.value || !i.value.trim() || (r("manual-entry", u.value.node_type, i.value.trim()), T());
    }
    return (V, W) => {
      var X, oe;
      return o(), s("div", oi, [
        e("div", si, [
          W[4] || (W[4] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
            e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
          ], -1)),
          e("span", ni, a(M.value) + "/" + a(t.nodes.length) + " resolved", 1)
        ]),
        u.value ? (o(), x(oo, {
          key: 0,
          "item-name": u.value.node_type,
          "current-index": p.value,
          "total-items": t.nodes.length,
          onPrev: W[0] || (W[0] = (E) => w(p.value - 1)),
          onNext: W[1] || (W[1] = (E) => w(p.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
        u.value ? (o(), s("div", ai, [
          f(Wl, {
            "node-type": u.value.node_type,
            "has-multiple-options": !!((X = u.value.options) != null && X.length),
            options: u.value.options,
            choice: (oe = t.nodeChoices) == null ? void 0 : oe.get(u.value.node_type),
            status: C.value,
            "status-label": L.value,
            onMarkOptional: _,
            onSkip: k,
            onManualEntry: K,
            onSearch: j,
            onOptionSelected: R,
            onClearChoice: A
          }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), s("div", li, [...W[5] || (W[5] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])),
        (o(), x(xe, { to: "body" }, [
          g.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ke(P, ["self"])
          }, [
            e("div", ii, [
              e("div", { class: "node-modal-header" }, [
                W[6] || (W[6] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: P
                }, "✕")
              ]),
              e("div", ri, [
                f(Ne, {
                  modelValue: v.value,
                  "onUpdate:modelValue": W[2] || (W[2] = (E) => v.value = E),
                  placeholder: "Search by node type, package name...",
                  onInput: O
                }, null, 8, ["modelValue"]),
                m.value.length > 0 ? (o(), s("div", di, [
                  (o(!0), s(H, null, se(m.value, (E) => (o(), s("div", {
                    key: E.package_id,
                    class: "node-search-result-item",
                    onClick: (G) => z(E)
                  }, [
                    e("div", ui, [
                      e("code", mi, a(E.package_id), 1),
                      E.match_confidence ? (o(), x(Ft, {
                        key: 0,
                        confidence: E.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : d("", !0)
                    ]),
                    E.description ? (o(), s("div", vi, a(E.description), 1)) : d("", !0)
                  ], 8, ci))), 128))
                ])) : v.value && !$.value ? (o(), s("div", fi, ' No packages found matching "' + a(v.value) + '" ', 1)) : d("", !0),
                $.value ? (o(), s("div", gi, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (o(), x(xe, { to: "body" }, [
          h.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ke(T, ["self"])
          }, [
            e("div", pi, [
              e("div", { class: "node-modal-header" }, [
                W[7] || (W[7] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: T
                }, "✕")
              ]),
              e("div", hi, [
                f(Ne, {
                  modelValue: i.value,
                  "onUpdate:modelValue": W[3] || (W[3] = (E) => i.value = E),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", yi, [
                  f(ie, {
                    variant: "secondary",
                    onClick: T
                  }, {
                    default: l(() => [...W[8] || (W[8] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  f(ie, {
                    variant: "primary",
                    disabled: !i.value.trim(),
                    onClick: S
                  }, {
                    default: l(() => [...W[9] || (W[9] = [
                      y(" Add Package ", -1)
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
}), ki = /* @__PURE__ */ Y(wi, [["__scopeId", "data-v-4fb196b1"]]), bi = { class: "node-info" }, _i = { class: "node-info-text" }, $i = { class: "item-body" }, Ci = {
  key: 0,
  class: "resolved-state"
}, xi = {
  key: 1,
  class: "multiple-options"
}, Si = { class: "options-list" }, Ii = ["onClick"], Ei = ["name", "value", "checked", "onChange"], Mi = { class: "option-content" }, zi = { class: "option-header" }, Li = { class: "option-filename" }, Ti = { class: "option-meta" }, Di = { class: "option-size" }, Ri = { class: "option-category" }, Ni = { class: "option-path" }, Ui = { class: "action-buttons" }, Oi = {
  key: 2,
  class: "unresolved"
}, Bi = { class: "action-buttons" }, Pi = /* @__PURE__ */ Q({
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
    const n = t, r = c, p = B(() => !!n.choice);
    B(() => {
      var i;
      return (i = n.choice) == null ? void 0 : i.action;
    }), B(() => {
      var i, m;
      return ((m = (i = n.choice) == null ? void 0 : i.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const g = B(() => {
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
    function h(i) {
      r("option-selected", i);
    }
    function v(i) {
      if (!i) return "Unknown";
      const m = i / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(i / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (i, m) => (o(), s("div", {
      class: ne(["model-resolution-item", { resolved: p.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", bi, [
        e("span", _i, [
          m[7] || (m[7] = y("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: ne(["status-badge", g.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", $i, [
        p.value ? (o(), s("div", Ci, [
          f(ie, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = ($) => r("clear-choice"))
          }, {
            default: l(() => [...m[8] || (m[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", xi, [
          m[12] || (m[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Si, [
            (o(!0), s(H, null, se(t.options, ($, u) => (o(), s("label", {
              key: $.model.hash,
              class: ne(["option-card", { selected: t.selectedOptionIndex === u }]),
              onClick: (M) => h(u)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: u,
                checked: t.selectedOptionIndex === u,
                onChange: (M) => h(u)
              }, null, 40, Ei),
              e("div", Mi, [
                e("div", zi, [
                  e("span", Li, a($.model.filename), 1),
                  f(Ft, {
                    confidence: $.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Ti, [
                  e("span", Di, a(v($.model.size)), 1),
                  e("span", Ri, a($.model.category), 1)
                ]),
                e("div", Ni, a($.model.relative_path), 1)
              ])
            ], 10, Ii))), 128))
          ]),
          e("div", Ui, [
            f(ie, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = ($) => r("search"))
            }, {
              default: l(() => [...m[9] || (m[9] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = ($) => r("download-url"))
            }, {
              default: l(() => [...m[10] || (m[10] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = ($) => r("mark-optional"))
            }, {
              default: l(() => [...m[11] || (m[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", Oi, [
          m[16] || (m[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Bi, [
            f(ie, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = ($) => r("search"))
            }, {
              default: l(() => [...m[13] || (m[13] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = ($) => r("download-url"))
            }, {
              default: l(() => [...m[14] || (m[14] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = ($) => r("mark-optional"))
            }, {
              default: l(() => [...m[15] || (m[15] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Vi = /* @__PURE__ */ Y(Pi, [["__scopeId", "data-v-8a82fefa"]]), Fi = { class: "model-resolution-step" }, Ai = { class: "step-header" }, Wi = { class: "step-info" }, Gi = { class: "step-title" }, ji = { class: "step-description" }, Hi = { class: "stat-badge" }, qi = {
  key: 1,
  class: "step-body"
}, Ki = {
  key: 2,
  class: "empty-state"
}, Ji = { class: "model-search-modal" }, Qi = { class: "model-modal-body" }, Yi = {
  key: 0,
  class: "model-search-results"
}, Xi = ["onClick"], Zi = { class: "model-result-header" }, er = { class: "model-result-filename" }, tr = { class: "model-result-meta" }, or = { class: "model-result-category" }, sr = { class: "model-result-size" }, nr = {
  key: 0,
  class: "model-result-path"
}, ar = {
  key: 1,
  class: "model-no-results"
}, lr = {
  key: 2,
  class: "model-searching"
}, ir = { class: "model-download-url-modal" }, rr = { class: "model-modal-body" }, dr = { class: "model-input-group" }, cr = { class: "model-input-group" }, ur = { class: "model-modal-actions" }, mr = /* @__PURE__ */ Q({
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
    function r(N) {
      var U;
      return N && ((U = n[N]) == null ? void 0 : U[0]) || null;
    }
    const p = t, g = c, h = b(0), v = b(!1), i = b(!1), m = b(""), $ = b(""), u = b(""), M = b([]), C = b(!1), L = B(() => p.models[h.value]), w = B(() => p.models.some((N) => N.is_download_intent)), _ = B(() => p.models.filter(
      (N) => p.modelChoices.has(N.filename) || N.is_download_intent
    ).length), k = B(() => {
      var U;
      if (!L.value) return "";
      const N = r((U = L.value.reference) == null ? void 0 : U.node_type);
      return N ? `${N}/${L.value.filename}` : "";
    }), R = B(() => {
      var U;
      if (!L.value) return "not-found";
      const N = p.modelChoices.get(L.value.filename);
      if (N)
        switch (N.action) {
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
      return L.value.is_download_intent ? "download" : (U = L.value.options) != null && U.length ? "ambiguous" : "not-found";
    }), A = B(() => {
      var U, ae;
      if (!L.value) return;
      const N = p.modelChoices.get(L.value.filename);
      if (N)
        switch (N.action) {
          case "select":
            return (U = N.selected_model) != null && U.filename ? `→ ${N.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return L.value.is_download_intent ? "Pending Download" : (ae = L.value.options) != null && ae.length ? `${L.value.options.length} matches` : "Not Found";
    });
    function j(N) {
      N >= 0 && N < p.models.length && (h.value = N);
    }
    function K() {
      L.value && g("mark-optional", L.value.filename);
    }
    function P() {
      L.value && g("skip", L.value.filename);
    }
    function T(N) {
      L.value && g("option-selected", L.value.filename, N);
    }
    function O() {
      L.value && g("clear-choice", L.value.filename);
    }
    function z() {
      L.value && (m.value = L.value.filename, v.value = !0);
    }
    function S() {
      L.value && ($.value = L.value.download_source || "", u.value = L.value.target_path || k.value, i.value = !0);
    }
    function V() {
      v.value = !1, m.value = "", M.value = [];
    }
    function W() {
      i.value = !1, $.value = "", u.value = "";
    }
    function X() {
      C.value = !0, setTimeout(() => {
        C.value = !1;
      }, 300);
    }
    function oe(N) {
      L.value && V();
    }
    function E() {
      !L.value || !$.value.trim() || (g("download-url", L.value.filename, $.value.trim(), u.value.trim() || void 0), W());
    }
    function G(N) {
      if (!N) return "Unknown";
      const U = N / (1024 * 1024 * 1024);
      return U >= 1 ? `${U.toFixed(2)} GB` : `${(N / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (N, U) => {
      var ae, ee, $e;
      return o(), s("div", Fi, [
        e("div", Ai, [
          e("div", Wi, [
            e("h3", Gi, a(w.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", ji, a(w.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Hi, a(_.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        L.value ? (o(), x(oo, {
          key: 0,
          "item-name": L.value.filename,
          "current-index": h.value,
          "total-items": t.models.length,
          onPrev: U[0] || (U[0] = (le) => j(h.value - 1)),
          onNext: U[1] || (U[1] = (le) => j(h.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
        L.value ? (o(), s("div", qi, [
          f(Vi, {
            filename: L.value.filename,
            "node-type": ((ae = L.value.reference) == null ? void 0 : ae.node_type) || "Unknown",
            "has-multiple-options": !!((ee = L.value.options) != null && ee.length),
            options: L.value.options,
            choice: ($e = t.modelChoices) == null ? void 0 : $e.get(L.value.filename),
            status: R.value,
            "status-label": A.value,
            onMarkOptional: K,
            onSkip: P,
            onDownloadUrl: S,
            onSearch: z,
            onOptionSelected: T,
            onClearChoice: O
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), s("div", Ki, [...U[5] || (U[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), x(xe, { to: "body" }, [
          v.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ke(V, ["self"])
          }, [
            e("div", Ji, [
              e("div", { class: "model-modal-header" }, [
                U[6] || (U[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: V
                }, "✕")
              ]),
              e("div", Qi, [
                f(Ne, {
                  modelValue: m.value,
                  "onUpdate:modelValue": U[2] || (U[2] = (le) => m.value = le),
                  placeholder: "Search by filename, category...",
                  onInput: X
                }, null, 8, ["modelValue"]),
                M.value.length > 0 ? (o(), s("div", Yi, [
                  (o(!0), s(H, null, se(M.value, (le) => (o(), s("div", {
                    key: le.hash,
                    class: "model-search-result-item",
                    onClick: (Ye) => oe()
                  }, [
                    e("div", Zi, [
                      e("code", er, a(le.filename), 1)
                    ]),
                    e("div", tr, [
                      e("span", or, a(le.category), 1),
                      e("span", sr, a(G(le.size)), 1)
                    ]),
                    le.relative_path ? (o(), s("div", nr, a(le.relative_path), 1)) : d("", !0)
                  ], 8, Xi))), 128))
                ])) : m.value && !C.value ? (o(), s("div", ar, ' No models found matching "' + a(m.value) + '" ', 1)) : d("", !0),
                C.value ? (o(), s("div", lr, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (o(), x(xe, { to: "body" }, [
          i.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ke(W, ["self"])
          }, [
            e("div", ir, [
              e("div", { class: "model-modal-header" }, [
                U[7] || (U[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: W
                }, "✕")
              ]),
              e("div", rr, [
                e("div", dr, [
                  U[8] || (U[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  f(Ne, {
                    modelValue: $.value,
                    "onUpdate:modelValue": U[3] || (U[3] = (le) => $.value = le),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", cr, [
                  U[9] || (U[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  f(Ne, {
                    modelValue: u.value,
                    "onUpdate:modelValue": U[4] || (U[4] = (le) => u.value = le),
                    placeholder: k.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", ur, [
                  f(ie, {
                    variant: "secondary",
                    onClick: W
                  }, {
                    default: l(() => [...U[10] || (U[10] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  f(ie, {
                    variant: "primary",
                    disabled: !$.value.trim() || !u.value.trim(),
                    onClick: E
                  }, {
                    default: l(() => [...U[11] || (U[11] = [
                      y(" Queue Download ", -1)
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
}), vr = /* @__PURE__ */ Y(mr, [["__scopeId", "data-v-c6acbada"]]), fr = { class: "applying-step" }, gr = {
  key: 0,
  class: "phase-content"
}, pr = {
  key: 1,
  class: "phase-content"
}, hr = { class: "phase-description" }, yr = { class: "install-list" }, wr = {
  key: 2,
  class: "phase-content"
}, kr = { class: "completion-summary" }, br = {
  key: 0,
  class: "summary-item success"
}, _r = { class: "summary-text" }, $r = {
  key: 1,
  class: "summary-item error"
}, Cr = { class: "summary-text" }, xr = {
  key: 2,
  class: "restart-prompt"
}, Sr = {
  key: 3,
  class: "phase-content error"
}, Ir = { class: "error-message" }, Er = /* @__PURE__ */ Q({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart"],
  setup(t) {
    return (c, n) => (o(), s("div", fr, [
      t.progress.phase === "resolving" ? (o(), s("div", gr, [...n[1] || (n[1] = [
        e("div", { class: "phase-header" }, [
          e("div", { class: "loading-spinner" }),
          e("h3", { class: "phase-title" }, "Applying Resolution")
        ], -1),
        e("p", { class: "phase-description" }, "Processing your choices...", -1)
      ])])) : t.progress.phase === "installing" ? (o(), s("div", pr, [
        n[3] || (n[3] = e("div", { class: "phase-header" }, [
          e("div", { class: "loading-spinner" }),
          e("h3", { class: "phase-title" }, "Installing Node Packages")
        ], -1)),
        e("p", hr, "Installing " + a(t.progress.nodesToInstall.length) + " package" + a(t.progress.nodesToInstall.length > 1 ? "s" : "") + "...", 1),
        e("div", yr, [
          (o(!0), s(H, null, se(t.progress.nodesToInstall, (r) => (o(), s("div", {
            key: r,
            class: "install-item"
          }, [
            n[2] || (n[2] = e("span", { class: "install-icon" }, "⬇", -1)),
            e("code", null, a(r), 1)
          ]))), 128))
        ])
      ])) : t.progress.phase === "complete" ? (o(), s("div", wr, [
        n[9] || (n[9] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon success" }, "✓"),
          e("h3", { class: "phase-title" }, "Resolution Complete")
        ], -1)),
        e("div", kr, [
          t.progress.nodesInstalled.length > 0 ? (o(), s("div", br, [
            n[4] || (n[4] = e("span", { class: "summary-icon" }, "✓", -1)),
            e("span", _r, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
          ])) : d("", !0),
          t.progress.installError ? (o(), s("div", $r, [
            n[5] || (n[5] = e("span", { class: "summary-icon" }, "✗", -1)),
            e("span", Cr, "Installation error: " + a(t.progress.installError), 1)
          ])) : d("", !0),
          n[7] || (n[7] = e("div", { class: "summary-item success" }, [
            e("span", { class: "summary-icon" }, "✓"),
            e("span", { class: "summary-text" }, "Workflow dependencies resolved")
          ], -1)),
          n[8] || (n[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
          t.progress.needsRestart ? (o(), s("div", xr, [
            n[6] || (n[6] = e("div", { class: "restart-warning" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("div", { class: "warning-content" }, [
                e("strong", null, "Restart Required"),
                e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
              ])
            ], -1)),
            e("button", {
              class: "restart-button",
              onClick: n[0] || (n[0] = (r) => c.$emit("restart"))
            }, " Restart ComfyUI ")
          ])) : d("", !0)
        ])
      ])) : t.progress.phase === "error" ? (o(), s("div", Sr, [
        n[10] || (n[10] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon error" }, "✗"),
          e("h3", { class: "phase-title" }, "Resolution Failed")
        ], -1)),
        e("p", Ir, a(t.progress.error), 1)
      ])) : d("", !0)
    ]));
  }
}), Mr = /* @__PURE__ */ Y(Er, [["__scopeId", "data-v-eb46c564"]]), zr = {
  key: 0,
  class: "loading-state"
}, Lr = {
  key: 1,
  class: "wizard-content"
}, Tr = {
  key: 0,
  class: "step-content"
}, Dr = { class: "analysis-summary" }, Rr = { class: "analysis-header" }, Nr = { class: "summary-description" }, Ur = { class: "stats-grid" }, Or = { class: "stat-card" }, Br = { class: "stat-items" }, Pr = {
  key: 0,
  class: "stat-item success"
}, Vr = { class: "stat-count" }, Fr = {
  key: 1,
  class: "stat-item info"
}, Ar = { class: "stat-count" }, Wr = {
  key: 2,
  class: "stat-item warning"
}, Gr = { class: "stat-count" }, jr = {
  key: 3,
  class: "stat-item error"
}, Hr = { class: "stat-count" }, qr = { class: "stat-card" }, Kr = { class: "stat-items" }, Jr = { class: "stat-item success" }, Qr = { class: "stat-count" }, Yr = {
  key: 0,
  class: "stat-item info"
}, Xr = { class: "stat-count" }, Zr = {
  key: 1,
  class: "stat-item warning"
}, ed = { class: "stat-count" }, td = {
  key: 2,
  class: "stat-item error"
}, od = { class: "stat-count" }, sd = {
  key: 0,
  class: "status-message warning"
}, nd = { class: "status-text" }, ad = {
  key: 1,
  class: "status-message info"
}, ld = { class: "status-text" }, id = {
  key: 2,
  class: "status-message info"
}, rd = { class: "status-text" }, dd = {
  key: 3,
  class: "status-message success"
}, cd = {
  key: 3,
  class: "step-content"
}, ud = { class: "review-summary" }, md = { class: "review-stats" }, vd = { class: "review-stat" }, fd = { class: "stat-value" }, gd = { class: "review-stat" }, pd = { class: "stat-value" }, hd = { class: "review-stat" }, yd = { class: "stat-value" }, wd = { class: "review-stat" }, kd = { class: "stat-value" }, bd = {
  key: 0,
  class: "review-section"
}, _d = { class: "section-title" }, $d = { class: "review-items" }, Cd = { class: "item-name" }, xd = {
  key: 1,
  class: "review-section"
}, Sd = { class: "section-title" }, Id = { class: "review-items" }, Ed = { class: "item-name" }, Md = { class: "item-choice" }, zd = {
  key: 0,
  class: "choice-badge install"
}, Ld = {
  key: 1,
  class: "choice-badge optional"
}, Td = {
  key: 2,
  class: "choice-badge skip"
}, Dd = {
  key: 1,
  class: "choice-badge pending"
}, Rd = {
  key: 2,
  class: "review-section"
}, Nd = { class: "section-title" }, Ud = { class: "review-items" }, Od = { class: "item-name" }, Bd = { class: "item-choice" }, Pd = {
  key: 0,
  class: "choice-badge install"
}, Vd = {
  key: 1,
  class: "choice-badge download"
}, Fd = {
  key: 2,
  class: "choice-badge optional"
}, Ad = {
  key: 3,
  class: "choice-badge skip"
}, Wd = {
  key: 4,
  class: "choice-badge skip"
}, Gd = {
  key: 1,
  class: "choice-badge download"
}, jd = {
  key: 2,
  class: "choice-badge pending"
}, Hd = {
  key: 3,
  class: "no-choices"
}, qd = /* @__PURE__ */ Q({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, r = c, { analyzeWorkflow: p, applyResolution: g, installNodes: h, queueModelDownloads: v, progress: i, resetProgress: m } = vl(), { loadPendingDownloads: $ } = xt(), u = b(null), M = b(!1), C = b(!1), L = b(null), w = b("analysis"), _ = b([]), k = b(/* @__PURE__ */ new Map()), R = b(/* @__PURE__ */ new Map()), A = B(() => {
      const F = [
        { id: "analysis", label: "Analysis" }
      ];
      return K.value && F.push({ id: "nodes", label: "Nodes" }), (P.value || T.value) && F.push({ id: "models", label: "Models" }), F.push({ id: "review", label: "Review" }), w.value === "applying" && F.push({ id: "applying", label: "Applying" }), F;
    }), j = B(() => u.value ? u.value.stats.needs_user_input : !1), K = B(() => u.value ? u.value.nodes.unresolved.length > 0 || u.value.nodes.ambiguous.length > 0 : !1), P = B(() => u.value ? u.value.models.unresolved.length > 0 || u.value.models.ambiguous.length > 0 : !1), T = B(() => u.value ? u.value.stats.download_intents > 0 : !1), O = B(() => u.value ? u.value.stats.nodes_needing_installation > 0 : !1), z = B(() => u.value ? u.value.nodes.resolved.length - u.value.stats.nodes_needing_installation : 0), S = B(() => {
      if (!u.value) return [];
      const F = u.value.nodes.resolved.filter((te) => !te.is_installed), D = /* @__PURE__ */ new Set();
      return F.filter((te) => D.has(te.package.package_id) ? !1 : (D.add(te.package.package_id), !0));
    }), V = B(() => u.value ? u.value.models.resolved.filter((F) => F.match_type === "download_intent").map((F) => ({
      filename: F.reference.widget_value,
      reference: F.reference,
      is_download_intent: !0,
      resolved_model: F.model,
      download_source: F.download_source,
      target_path: F.target_path
    })) : []), W = B(() => {
      if (!u.value) return [];
      const F = u.value.nodes.unresolved.map((te) => ({
        node_type: te.reference.node_type,
        reason: te.reason,
        is_unresolved: !0,
        options: void 0
      })), D = u.value.nodes.ambiguous.map((te) => ({
        node_type: te.reference.node_type,
        has_multiple_options: !0,
        options: te.options.map((ge) => ({
          package_id: ge.package.package_id,
          title: ge.package.title,
          match_confidence: ge.match_confidence,
          match_type: ge.match_type,
          is_installed: ge.is_installed
        }))
      }));
      return [...F, ...D];
    }), X = B(() => {
      if (!u.value) return [];
      const F = u.value.models.unresolved.map((te) => ({
        filename: te.reference.widget_value,
        reference: te.reference,
        reason: te.reason,
        is_unresolved: !0,
        options: void 0
      })), D = u.value.models.ambiguous.map((te) => ({
        filename: te.reference.widget_value,
        reference: te.reference,
        has_multiple_options: !0,
        options: te.options.map((ge) => ({
          model: ge.model,
          match_confidence: ge.match_confidence,
          match_type: ge.match_type,
          has_download_source: ge.has_download_source
        }))
      }));
      return [...F, ...D];
    }), oe = B(() => {
      const F = X.value, D = V.value.map((te) => ({
        filename: te.filename,
        reference: te.reference,
        is_download_intent: !0,
        resolved_model: te.resolved_model,
        download_source: te.download_source,
        target_path: te.target_path,
        options: void 0
      }));
      return [...F, ...D];
    }), E = B(() => {
      let F = S.value.length;
      for (const D of k.value.values())
        D.action === "install" && F++;
      for (const D of R.value.values())
        D.action === "select" && F++;
      return F;
    }), G = B(() => {
      let F = 0;
      for (const D of R.value.values())
        D.action === "download" && F++;
      return F;
    }), N = B(() => {
      let F = 0;
      for (const D of k.value.values())
        D.action === "optional" && F++;
      for (const D of R.value.values())
        D.action === "optional" && F++;
      return F;
    }), U = B(() => {
      let F = 0;
      for (const D of k.value.values())
        D.action === "skip" && F++;
      for (const D of R.value.values())
        D.action === "skip" && F++;
      for (const D of W.value)
        k.value.has(D.node_type) || F++;
      for (const D of X.value)
        R.value.has(D.filename) || F++;
      return F;
    }), ae = B(() => {
      const F = {};
      if (F.analysis = { resolved: 1, total: 1 }, K.value) {
        const D = W.value.length, te = W.value.filter(
          (ge) => k.value.has(ge.node_type)
        ).length;
        F.nodes = { resolved: te, total: D };
      }
      if (P.value || T.value) {
        const D = oe.value.length, te = oe.value.filter(
          (ge) => R.value.has(ge.filename) || ge.is_download_intent
        ).length;
        F.models = { resolved: te, total: D };
      }
      if (F.review = { resolved: 1, total: 1 }, w.value === "applying") {
        const D = i.totalFiles || 1, te = i.completedFiles.length;
        F.applying = { resolved: te, total: D };
      }
      return F;
    });
    function ee(F) {
      w.value = F;
    }
    function $e() {
      const F = A.value.findIndex((D) => D.id === w.value);
      F > 0 && (w.value = A.value[F - 1].id);
    }
    function le() {
      const F = A.value.findIndex((D) => D.id === w.value);
      F < A.value.length - 1 && (w.value = A.value[F + 1].id);
    }
    async function Ye() {
      M.value = !0, L.value = null;
      try {
        u.value = await p(n.workflowName);
      } catch (F) {
        L.value = F instanceof Error ? F.message : "Failed to analyze workflow";
      } finally {
        M.value = !1;
      }
    }
    function he() {
      _.value.includes("analysis") || _.value.push("analysis"), K.value ? w.value = "nodes" : P.value || T.value ? w.value = "models" : w.value = "review";
    }
    function ut(F) {
      k.value.set(F, { action: "optional" });
    }
    function mt(F) {
      k.value.set(F, { action: "skip" });
    }
    function vt(F, D) {
      var ge;
      const te = W.value.find((Le) => Le.node_type === F);
      (ge = te == null ? void 0 : te.options) != null && ge[D] && k.value.set(F, {
        action: "install",
        package_id: te.options[D].package_id
      });
    }
    function we(F, D) {
      k.value.set(F, {
        action: "install",
        package_id: D
      });
    }
    function Ke(F) {
      k.value.delete(F);
    }
    function Fe(F) {
      R.value.set(F, { action: "optional" });
    }
    function Oe(F) {
      R.value.set(F, { action: "skip" });
    }
    function ft(F, D) {
      var ge;
      const te = X.value.find((Le) => Le.filename === F);
      (ge = te == null ? void 0 : te.options) != null && ge[D] && R.value.set(F, {
        action: "select",
        selected_model: te.options[D].model
      });
    }
    function fe(F, D, te) {
      R.value.set(F, {
        action: "download",
        url: D,
        target_path: te
      });
    }
    function Be(F) {
      R.value.delete(F);
    }
    async function J() {
      C.value = !0, L.value = null, m(), i.phase = "resolving", w.value = "applying";
      try {
        const F = await g(n.workflowName, k.value, R.value);
        F.models_to_download && F.models_to_download.length > 0 && v(n.workflowName, F.models_to_download);
        const D = [
          ...F.nodes_to_install || [],
          ...S.value.map((te) => te.package.package_id)
        ];
        i.nodesToInstall = [...new Set(D)], i.nodesToInstall.length > 0 && await h(n.workflowName), i.phase = "complete", await $(), i.needsRestart || setTimeout(() => {
          r("refresh"), r("install"), r("close");
        }, 1e3);
      } catch (F) {
        L.value = F instanceof Error ? F.message : "Failed to apply resolution", i.error = L.value, i.phase = "error";
      } finally {
        C.value = !1;
      }
    }
    function de() {
      r("refresh"), r("restart"), r("close");
    }
    return _e(Ye), (F, D) => (o(), x(st, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: M.value,
      error: L.value || void 0,
      "fixed-height": !0,
      onClose: D[1] || (D[1] = (te) => r("close"))
    }, {
      body: l(() => [
        M.value && !u.value ? (o(), s("div", zr, [...D[2] || (D[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : u.value ? (o(), s("div", Lr, [
          f($l, {
            steps: A.value,
            "current-step": w.value,
            "completed-steps": _.value,
            "step-stats": ae.value,
            onStepChange: ee
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          w.value === "analysis" ? (o(), s("div", Tr, [
            e("div", Dr, [
              e("div", Rr, [
                D[3] || (D[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", Nr, " Found " + a(u.value.stats.total_nodes) + " nodes and " + a(u.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Ur, [
                e("div", Or, [
                  D[12] || (D[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Br, [
                    z.value > 0 ? (o(), s("div", Pr, [
                      D[4] || (D[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Vr, a(z.value), 1),
                      D[5] || (D[5] = e("span", { class: "stat-label" }, "installed", -1))
                    ])) : d("", !0),
                    u.value.stats.nodes_needing_installation > 0 ? (o(), s("div", Fr, [
                      D[6] || (D[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Ar, a(u.value.stats.nodes_needing_installation), 1),
                      D[7] || (D[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : d("", !0),
                    u.value.nodes.ambiguous.length > 0 ? (o(), s("div", Wr, [
                      D[8] || (D[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Gr, a(u.value.nodes.ambiguous.length), 1),
                      D[9] || (D[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    u.value.nodes.unresolved.length > 0 ? (o(), s("div", jr, [
                      D[10] || (D[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Hr, a(u.value.nodes.unresolved.length), 1),
                      D[11] || (D[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ]),
                e("div", qr, [
                  D[21] || (D[21] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Kr, [
                    e("div", Jr, [
                      D[13] || (D[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Qr, a(u.value.models.resolved.length - u.value.stats.download_intents), 1),
                      D[14] || (D[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    u.value.stats.download_intents > 0 ? (o(), s("div", Yr, [
                      D[15] || (D[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Xr, a(u.value.stats.download_intents), 1),
                      D[16] || (D[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : d("", !0),
                    u.value.models.ambiguous.length > 0 ? (o(), s("div", Zr, [
                      D[17] || (D[17] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", ed, a(u.value.models.ambiguous.length), 1),
                      D[18] || (D[18] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    u.value.models.unresolved.length > 0 ? (o(), s("div", td, [
                      D[19] || (D[19] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", od, a(u.value.models.unresolved.length), 1),
                      D[20] || (D[20] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ])
              ]),
              j.value ? (o(), s("div", sd, [
                D[22] || (D[22] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", nd, a(W.value.length + X.value.length) + " items need your input", 1)
              ])) : O.value ? (o(), s("div", ad, [
                D[23] || (D[23] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", ld, a(u.value.stats.packages_needing_installation) + " package" + a(u.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(u.value.stats.nodes_needing_installation) + " node type" + a(u.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(T.value ? `, ${u.value.stats.download_intents} model${u.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : T.value ? (o(), s("div", id, [
                D[24] || (D[24] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", rd, a(u.value.stats.download_intents) + " model" + a(u.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), s("div", dd, [...D[25] || (D[25] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : d("", !0),
          w.value === "nodes" ? (o(), x(ki, {
            key: 1,
            nodes: W.value,
            "node-choices": k.value,
            onMarkOptional: ut,
            onSkip: mt,
            onOptionSelected: vt,
            onManualEntry: we,
            onClearChoice: Ke
          }, null, 8, ["nodes", "node-choices"])) : d("", !0),
          w.value === "models" ? (o(), x(vr, {
            key: 2,
            models: oe.value,
            "model-choices": R.value,
            onMarkOptional: Fe,
            onSkip: Oe,
            onOptionSelected: ft,
            onDownloadUrl: fe,
            onClearChoice: Be
          }, null, 8, ["models", "model-choices"])) : d("", !0),
          w.value === "review" ? (o(), s("div", cd, [
            e("div", ud, [
              D[31] || (D[31] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", md, [
                e("div", vd, [
                  e("span", fd, a(E.value), 1),
                  D[26] || (D[26] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", gd, [
                  e("span", pd, a(G.value), 1),
                  D[27] || (D[27] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", hd, [
                  e("span", yd, a(N.value), 1),
                  D[28] || (D[28] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", wd, [
                  e("span", kd, a(U.value), 1),
                  D[29] || (D[29] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              S.value.length > 0 ? (o(), s("div", bd, [
                e("h4", _d, "Node Packages to Install (" + a(S.value.length) + ")", 1),
                e("div", $d, [
                  (o(!0), s(H, null, se(S.value, (te) => (o(), s("div", {
                    key: te.package.package_id,
                    class: "review-item"
                  }, [
                    e("code", Cd, a(te.package.package_id), 1),
                    D[30] || (D[30] = e("div", { class: "item-choice" }, [
                      e("span", { class: "choice-badge install" }, "Will Install")
                    ], -1))
                  ]))), 128))
                ])
              ])) : d("", !0),
              W.value.length > 0 ? (o(), s("div", xd, [
                e("h4", Sd, "Node Choices (" + a(W.value.length) + ")", 1),
                e("div", Id, [
                  (o(!0), s(H, null, se(W.value, (te) => {
                    var ge, Le, Xe, Ae;
                    return o(), s("div", {
                      key: te.node_type,
                      class: "review-item"
                    }, [
                      e("code", Ed, a(te.node_type), 1),
                      e("div", Md, [
                        k.value.has(te.node_type) ? (o(), s(H, { key: 0 }, [
                          ((ge = k.value.get(te.node_type)) == null ? void 0 : ge.action) === "install" ? (o(), s("span", zd, a((Le = k.value.get(te.node_type)) == null ? void 0 : Le.package_id), 1)) : ((Xe = k.value.get(te.node_type)) == null ? void 0 : Xe.action) === "optional" ? (o(), s("span", Ld, " Optional ")) : ((Ae = k.value.get(te.node_type)) == null ? void 0 : Ae.action) === "skip" ? (o(), s("span", Td, " Skip ")) : d("", !0)
                        ], 64)) : (o(), s("span", Dd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              oe.value.length > 0 ? (o(), s("div", Rd, [
                e("h4", Nd, "Models (" + a(oe.value.length) + ")", 1),
                e("div", Ud, [
                  (o(!0), s(H, null, se(oe.value, (te) => {
                    var ge, Le, Xe, Ae, nt, St, Ze;
                    return o(), s("div", {
                      key: te.filename,
                      class: "review-item"
                    }, [
                      e("code", Od, a(te.filename), 1),
                      e("div", Bd, [
                        R.value.has(te.filename) ? (o(), s(H, { key: 0 }, [
                          ((ge = R.value.get(te.filename)) == null ? void 0 : ge.action) === "select" ? (o(), s("span", Pd, a((Xe = (Le = R.value.get(te.filename)) == null ? void 0 : Le.selected_model) == null ? void 0 : Xe.filename), 1)) : ((Ae = R.value.get(te.filename)) == null ? void 0 : Ae.action) === "download" ? (o(), s("span", Vd, " Download ")) : ((nt = R.value.get(te.filename)) == null ? void 0 : nt.action) === "optional" ? (o(), s("span", Fd, " Optional ")) : ((St = R.value.get(te.filename)) == null ? void 0 : St.action) === "skip" ? (o(), s("span", Ad, " Skip ")) : ((Ze = R.value.get(te.filename)) == null ? void 0 : Ze.action) === "cancel_download" ? (o(), s("span", Wd, " Cancel Download ")) : d("", !0)
                        ], 64)) : te.is_download_intent ? (o(), s("span", Gd, " Pending Download ")) : (o(), s("span", jd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              S.value.length === 0 && W.value.length === 0 && oe.value.length === 0 ? (o(), s("div", Hd, " No dependencies need resolution. ")) : d("", !0)
            ])
          ])) : d("", !0),
          w.value === "applying" ? (o(), x(Mr, {
            key: 4,
            progress: me(i),
            onRestart: de
          }, null, 8, ["progress"])) : d("", !0)
        ])) : d("", !0)
      ]),
      footer: l(() => [
        w.value !== "analysis" && w.value !== "applying" ? (o(), x(ie, {
          key: 0,
          variant: "secondary",
          disabled: C.value,
          onClick: $e
        }, {
          default: l(() => [...D[32] || (D[32] = [
            y(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        D[35] || (D[35] = e("div", { class: "footer-spacer" }, null, -1)),
        w.value !== "applying" || me(i).phase === "complete" || me(i).phase === "error" ? (o(), x(ie, {
          key: 1,
          variant: "secondary",
          onClick: D[0] || (D[0] = (te) => r("close"))
        }, {
          default: l(() => [
            y(a(me(i).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : d("", !0),
        w.value === "analysis" ? (o(), x(ie, {
          key: 2,
          variant: "primary",
          disabled: M.value,
          onClick: he
        }, {
          default: l(() => [
            y(a(j.value || T.value ? "Continue" : "Apply"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        w.value === "nodes" ? (o(), x(ie, {
          key: 3,
          variant: "primary",
          onClick: le
        }, {
          default: l(() => [
            y(a(P.value || T.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : d("", !0),
        w.value === "models" ? (o(), x(ie, {
          key: 4,
          variant: "primary",
          onClick: le
        }, {
          default: l(() => [...D[33] || (D[33] = [
            y(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : d("", !0),
        w.value === "review" ? (o(), x(ie, {
          key: 5,
          variant: "primary",
          disabled: C.value,
          loading: C.value,
          onClick: J
        }, {
          default: l(() => [...D[34] || (D[34] = [
            y(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Kd = /* @__PURE__ */ Y(qd, [["__scopeId", "data-v-85146f4c"]]), Jd = { class: "search-input-wrapper" }, Qd = ["value", "placeholder"], Yd = /* @__PURE__ */ Q({
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
    const n = t, r = c, p = b(null);
    let g;
    function h(i) {
      const m = i.target.value;
      n.debounce > 0 ? (clearTimeout(g), g = window.setTimeout(() => {
        r("update:modelValue", m);
      }, n.debounce)) : r("update:modelValue", m);
    }
    function v() {
      var i;
      r("update:modelValue", ""), r("clear"), (i = p.value) == null || i.focus();
    }
    return _e(() => {
      n.autoFocus && p.value && p.value.focus();
    }), (i, m) => (o(), s("div", Jd, [
      e("input", {
        ref_key: "inputRef",
        ref: p,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: h,
        onKeyup: Je(v, ["escape"])
      }, null, 40, Qd),
      t.clearable && t.modelValue ? (o(), s("button", {
        key: 0,
        class: "clear-button",
        onClick: v,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), Xd = /* @__PURE__ */ Y(Yd, [["__scopeId", "data-v-266f857a"]]), Zd = { class: "search-bar" }, ec = /* @__PURE__ */ Q({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, n) => (o(), s("div", Zd, [
      f(Xd, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => c.$emit("update:modelValue", r)),
        onClear: n[1] || (n[1] = (r) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), dt = /* @__PURE__ */ Y(ec, [["__scopeId", "data-v-3d51bbfd"]]), tc = { class: "section-group" }, oc = {
  key: 0,
  class: "section-content"
}, sc = /* @__PURE__ */ Q({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const n = t, r = c, p = b(n.initiallyExpanded);
    function g() {
      n.collapsible && (p.value = !p.value, r("toggle", p.value));
    }
    return (h, v) => (o(), s("section", tc, [
      f(ze, {
        count: t.count,
        clickable: t.collapsible,
        expanded: p.value,
        onClick: g
      }, {
        default: l(() => [
          y(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || p.value ? (o(), s("div", oc, [
        ue(h.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), be = /* @__PURE__ */ Y(sc, [["__scopeId", "data-v-c48e33ed"]]), nc = { class: "item-header" }, ac = {
  key: 0,
  class: "item-icon"
}, lc = { class: "item-info" }, ic = {
  key: 0,
  class: "item-title"
}, rc = {
  key: 1,
  class: "item-subtitle"
}, dc = {
  key: 0,
  class: "item-details"
}, cc = {
  key: 1,
  class: "item-actions"
}, uc = /* @__PURE__ */ Q({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, r = B(() => n.status ? `status-${n.status}` : "");
    return (p, g) => (o(), s("div", {
      class: ne(["item-card", { clickable: t.clickable, compact: t.compact }, r.value]),
      onClick: g[0] || (g[0] = (h) => t.clickable && p.$emit("click"))
    }, [
      e("div", nc, [
        p.$slots.icon ? (o(), s("span", ac, [
          ue(p.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        e("div", lc, [
          p.$slots.title ? (o(), s("div", ic, [
            ue(p.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          p.$slots.subtitle ? (o(), s("div", rc, [
            ue(p.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      p.$slots.details ? (o(), s("div", dc, [
        ue(p.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      p.$slots.actions ? (o(), s("div", cc, [
        ue(p.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ce = /* @__PURE__ */ Y(uc, [["__scopeId", "data-v-cc435e0e"]]), mc = { class: "loading-state" }, vc = { class: "loading-message" }, fc = /* @__PURE__ */ Q({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, n) => (o(), s("div", mc, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", vc, a(t.message), 1)
    ]));
  }
}), He = /* @__PURE__ */ Y(fc, [["__scopeId", "data-v-ad8436c9"]]), gc = { class: "error-state" }, pc = { class: "error-message" }, hc = /* @__PURE__ */ Q({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, n) => (o(), s("div", gc, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", pc, a(t.message), 1),
      t.retry ? (o(), x(Z, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => c.$emit("retry"))
      }, {
        default: l(() => [...n[1] || (n[1] = [
          y(" Retry ", -1)
        ])]),
        _: 1
      })) : d("", !0)
    ]));
  }
}), qe = /* @__PURE__ */ Y(hc, [["__scopeId", "data-v-5397be48"]]), yc = /* @__PURE__ */ Q({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const r = n, { getWorkflows: p } = Se(), g = b([]), h = b(!1), v = b(null), i = b(""), m = b(!0), $ = b(!1), u = b(!1), M = b(!1), C = b(null), L = B(
      () => g.value.filter((E) => E.status === "broken")
    ), w = B(
      () => g.value.filter((E) => E.status === "new")
    ), _ = B(
      () => g.value.filter((E) => E.status === "modified")
    ), k = B(
      () => g.value.filter((E) => E.status === "synced")
    ), R = B(() => {
      if (!i.value.trim()) return g.value;
      const E = i.value.toLowerCase();
      return g.value.filter((G) => G.name.toLowerCase().includes(E));
    }), A = B(
      () => L.value.filter(
        (E) => !i.value.trim() || E.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), j = B(
      () => w.value.filter(
        (E) => !i.value.trim() || E.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), K = B(
      () => _.value.filter(
        (E) => !i.value.trim() || E.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), P = B(
      () => k.value.filter(
        (E) => !i.value.trim() || E.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), T = B(
      () => $.value ? P.value : P.value.slice(0, 5)
    );
    async function O(E = !1) {
      h.value = !0, v.value = null;
      try {
        g.value = await p(E);
      } catch (G) {
        v.value = G instanceof Error ? G.message : "Failed to load workflows";
      } finally {
        h.value = !1;
      }
    }
    c({ loadWorkflows: O });
    function z(E) {
      C.value = E, u.value = !0;
    }
    function S(E) {
      C.value = E, M.value = !0;
    }
    function V() {
      alert("Bulk resolution not yet implemented");
    }
    function W() {
      r("refresh");
    }
    function X(E) {
      const G = [];
      return E.missing_nodes > 0 && G.push(`${E.missing_nodes} missing node${E.missing_nodes > 1 ? "s" : ""}`), E.missing_models > 0 && G.push(`${E.missing_models} missing model${E.missing_models > 1 ? "s" : ""}`), E.pending_downloads && E.pending_downloads > 0 && G.push(`${E.pending_downloads} pending download${E.pending_downloads > 1 ? "s" : ""}`), G.length > 0 ? G.join(", ") : "Has issues";
    }
    function oe(E) {
      const G = E.sync_state === "new" ? "New" : E.sync_state === "modified" ? "Modified" : E.sync_state === "synced" ? "Synced" : E.sync_state;
      return E.has_path_sync_issues && E.models_needing_path_sync && E.models_needing_path_sync > 0 ? `${E.models_needing_path_sync} model path${E.models_needing_path_sync > 1 ? "s" : ""} need${E.models_needing_path_sync === 1 ? "s" : ""} sync` : G || "Unknown";
    }
    return _e(O), (E, G) => (o(), s(H, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, { title: "WORKFLOWS" }, {
            actions: l(() => [
              L.value.length > 0 ? (o(), x(Z, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: V
              }, {
                default: l(() => [...G[8] || (G[8] = [
                  y(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : d("", !0)
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          f(dt, {
            modelValue: i.value,
            "onUpdate:modelValue": G[0] || (G[0] = (N) => i.value = N),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          h.value ? (o(), x(He, {
            key: 0,
            message: "Loading workflows..."
          })) : v.value ? (o(), x(qe, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            A.value.length ? (o(), x(be, {
              key: 0,
              title: "BROKEN",
              count: A.value.length
            }, {
              default: l(() => [
                (o(!0), s(H, null, se(A.value, (N) => (o(), x(Ce, {
                  key: N.name,
                  status: "broken"
                }, {
                  icon: l(() => [...G[9] || (G[9] = [
                    y("⚠", -1)
                  ])]),
                  title: l(() => [
                    y(a(N.name), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(X(N)), 1)
                  ]),
                  actions: l(() => [
                    f(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (U) => S(N.name)
                    }, {
                      default: l(() => [...G[10] || (G[10] = [
                        y(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (U) => z(N.name)
                    }, {
                      default: l(() => [...G[11] || (G[11] = [
                        y(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            j.value.length ? (o(), x(be, {
              key: 1,
              title: "NEW",
              count: j.value.length
            }, {
              default: l(() => [
                (o(!0), s(H, null, se(j.value, (N) => (o(), x(Ce, {
                  key: N.name,
                  status: N.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: l(() => [
                    y(a(N.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: l(() => [
                    y(a(N.name), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(oe(N)), 1)
                  ]),
                  actions: l(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (U) => z(N.name)
                    }, {
                      default: l(() => [...G[12] || (G[12] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            K.value.length ? (o(), x(be, {
              key: 2,
              title: "MODIFIED",
              count: K.value.length
            }, {
              default: l(() => [
                (o(!0), s(H, null, se(K.value, (N) => (o(), x(Ce, {
                  key: N.name,
                  status: N.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: l(() => [...G[13] || (G[13] = [
                    y("⚡", -1)
                  ])]),
                  title: l(() => [
                    y(a(N.name), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(oe(N)), 1)
                  ]),
                  actions: l(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (U) => z(N.name)
                    }, {
                      default: l(() => [...G[14] || (G[14] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            P.value.length ? (o(), x(be, {
              key: 3,
              title: "SYNCED",
              count: P.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: G[2] || (G[2] = (N) => m.value = N)
            }, {
              default: l(() => [
                (o(!0), s(H, null, se(T.value, (N) => (o(), x(Ce, {
                  key: N.name,
                  status: N.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: l(() => [
                    y(a(N.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: l(() => [
                    y(a(N.name), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(oe(N)), 1)
                  ]),
                  actions: l(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (U) => z(N.name)
                    }, {
                      default: l(() => [...G[15] || (G[15] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !$.value && P.value.length > 5 ? (o(), x(Z, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: G[1] || (G[1] = (N) => $.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: l(() => [
                    y(" View all " + a(P.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            R.value.length ? d("", !0) : (o(), x(Ue, {
              key: 4,
              icon: "📭",
              message: i.value ? `No workflows match '${i.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      u.value && C.value ? (o(), x(cl, {
        key: 0,
        "workflow-name": C.value,
        onClose: G[3] || (G[3] = (N) => u.value = !1),
        onResolve: G[4] || (G[4] = (N) => S(C.value)),
        onRefresh: G[5] || (G[5] = (N) => r("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0),
      M.value && C.value ? (o(), x(Kd, {
        key: 1,
        "workflow-name": C.value,
        onClose: G[6] || (G[6] = (N) => M.value = !1),
        onInstall: W,
        onRefresh: G[7] || (G[7] = (N) => r("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), wc = /* @__PURE__ */ Y(yc, [["__scopeId", "data-v-080576c0"]]), kc = /* @__PURE__ */ Q({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, n) => (o(), s("div", {
      class: ne(["summary-bar", t.variant])
    }, [
      ue(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ct = /* @__PURE__ */ Y(kc, [["__scopeId", "data-v-ccb7816e"]]), bc = {
  key: 0,
  class: "model-details"
}, _c = { class: "detail-section" }, $c = { class: "detail-row" }, Cc = { class: "detail-value mono" }, xc = { class: "detail-row" }, Sc = { class: "detail-value mono" }, Ic = { class: "detail-row" }, Ec = { class: "detail-value mono" }, Mc = { class: "detail-row" }, zc = { class: "detail-value" }, Lc = { class: "detail-row" }, Tc = { class: "detail-value" }, Dc = { class: "detail-row" }, Rc = { class: "detail-value" }, Nc = { class: "detail-section" }, Uc = { class: "section-header" }, Oc = {
  key: 0,
  class: "locations-list"
}, Bc = { class: "location-path mono" }, Pc = {
  key: 0,
  class: "location-modified"
}, Vc = ["onClick"], Fc = {
  key: 1,
  class: "empty-state"
}, Ac = { class: "detail-section" }, Wc = { class: "section-header" }, Gc = {
  key: 0,
  class: "sources-list"
}, jc = { class: "source-type" }, Hc = ["href"], qc = ["disabled", "onClick"], Kc = {
  key: 1,
  class: "empty-state"
}, Jc = { class: "add-source-form" }, Qc = ["disabled"], Yc = {
  key: 2,
  class: "source-error"
}, Xc = {
  key: 3,
  class: "source-success"
}, Zc = /* @__PURE__ */ Q({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: r, addModelSource: p, removeModelSource: g, openFileLocation: h } = Se(), v = b(null), i = b(!0), m = b(null), $ = b(""), u = b(!1), M = b(null), C = b(null), L = b(null), w = b(null);
    let _ = null;
    function k(O, z = "success", S = 2e3) {
      _ && clearTimeout(_), w.value = { message: O, type: z }, _ = setTimeout(() => {
        w.value = null;
      }, S);
    }
    function R(O) {
      if (!O) return "Unknown";
      const z = 1024 * 1024 * 1024, S = 1024 * 1024;
      return O >= z ? `${(O / z).toFixed(1)} GB` : O >= S ? `${(O / S).toFixed(0)} MB` : `${(O / 1024).toFixed(0)} KB`;
    }
    function A(O) {
      navigator.clipboard.writeText(O), k("Copied to clipboard!");
    }
    async function j(O) {
      try {
        await h(O), k("Opening file location...");
      } catch {
        k("Failed to open location", "error");
      }
    }
    async function K() {
      if (!(!$.value.trim() || !v.value)) {
        u.value = !0, C.value = null, L.value = null;
        try {
          await p(v.value.hash, $.value.trim()), L.value = "Source added successfully!", $.value = "", await T();
        } catch (O) {
          C.value = O instanceof Error ? O.message : "Failed to add source";
        } finally {
          u.value = !1;
        }
      }
    }
    async function P(O) {
      if (v.value) {
        M.value = O, C.value = null, L.value = null;
        try {
          await g(v.value.hash, O), k("Source removed"), await T();
        } catch (z) {
          C.value = z instanceof Error ? z.message : "Failed to remove source";
        } finally {
          M.value = null;
        }
      }
    }
    async function T() {
      i.value = !0, m.value = null;
      try {
        v.value = await r(n.identifier);
      } catch (O) {
        m.value = O instanceof Error ? O.message : "Failed to load model details";
      } finally {
        i.value = !1;
      }
    }
    return _e(T), (O, z) => {
      var S;
      return o(), s(H, null, [
        f(st, {
          title: `Model Details: ${((S = v.value) == null ? void 0 : S.filename) || "Loading..."}`,
          size: "lg",
          loading: i.value,
          error: m.value,
          onClose: z[5] || (z[5] = (V) => O.$emit("close"))
        }, {
          body: l(() => {
            var V, W, X, oe;
            return [
              v.value ? (o(), s("div", bc, [
                e("section", _c, [
                  e("div", $c, [
                    z[6] || (z[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", Cc, a(v.value.hash || "Not computed"), 1),
                    v.value.hash ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: z[0] || (z[0] = (E) => A(v.value.hash))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", xc, [
                    z[7] || (z[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", Sc, a(v.value.blake3 || "Not computed"), 1),
                    v.value.blake3 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: z[1] || (z[1] = (E) => A(v.value.blake3))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", Ic, [
                    z[8] || (z[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", Ec, a(v.value.sha256 || "Not computed"), 1),
                    v.value.sha256 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: z[2] || (z[2] = (E) => A(v.value.sha256))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", Mc, [
                    z[9] || (z[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", zc, a(R(v.value.size)), 1)
                  ]),
                  e("div", Lc, [
                    z[10] || (z[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Tc, a(v.value.category), 1)
                  ]),
                  e("div", Dc, [
                    z[11] || (z[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Rc, a(v.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Nc, [
                  e("h4", Uc, "Locations (" + a(((V = v.value.locations) == null ? void 0 : V.length) || 0) + ")", 1),
                  (W = v.value.locations) != null && W.length ? (o(), s("div", Oc, [
                    (o(!0), s(H, null, se(v.value.locations, (E, G) => (o(), s("div", {
                      key: G,
                      class: "location-item"
                    }, [
                      e("span", Bc, a(E.path), 1),
                      E.modified ? (o(), s("span", Pc, "Modified: " + a(E.modified), 1)) : d("", !0),
                      E.path ? (o(), s("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (N) => j(E.path)
                      }, " Open File Location ", 8, Vc)) : d("", !0)
                    ]))), 128))
                  ])) : (o(), s("div", Fc, "No locations found"))
                ]),
                e("section", Ac, [
                  e("h4", Wc, "Download Sources (" + a(((X = v.value.sources) == null ? void 0 : X.length) || 0) + ")", 1),
                  (oe = v.value.sources) != null && oe.length ? (o(), s("div", Gc, [
                    (o(!0), s(H, null, se(v.value.sources, (E, G) => (o(), s("div", {
                      key: G,
                      class: "source-item"
                    }, [
                      e("span", jc, a(E.type) + ":", 1),
                      e("a", {
                        href: E.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(E.url), 9, Hc),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: M.value === E.url,
                        onClick: (N) => P(E.url)
                      }, a(M.value === E.url ? "..." : "×"), 9, qc)
                    ]))), 128))
                  ])) : (o(), s("div", Kc, " No download sources configured ")),
                  e("div", Jc, [
                    kt(e("input", {
                      "onUpdate:modelValue": z[3] || (z[3] = (E) => $.value = E),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [bo, $.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !$.value.trim() || u.value,
                      onClick: K
                    }, a(u.value ? "Adding..." : "Add Source"), 9, Qc)
                  ]),
                  C.value ? (o(), s("p", Yc, a(C.value), 1)) : d("", !0),
                  L.value ? (o(), s("p", Xc, a(L.value), 1)) : d("", !0)
                ])
              ])) : d("", !0)
            ];
          }),
          footer: l(() => [
            e("button", {
              class: "btn-secondary",
              onClick: z[4] || (z[4] = (V) => O.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (o(), x(xe, { to: "body" }, [
          w.value ? (o(), s("div", {
            key: 0,
            class: ne(["toast", w.value.type])
          }, a(w.value.message), 3)) : d("", !0)
        ]))
      ], 64);
    };
  }
}), so = /* @__PURE__ */ Y(Zc, [["__scopeId", "data-v-f15cbb56"]]), eu = /* @__PURE__ */ Q({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: r, getStatus: p } = Se(), g = b([]), h = b([]), v = b("production"), i = b(!1), m = b(null), $ = b(""), u = b(!1), M = b(null);
    function C() {
      u.value = !1, n("navigate", "model-index");
    }
    const L = B(
      () => g.value.reduce((T, O) => T + (O.size || 0), 0)
    ), w = B(() => {
      if (!$.value.trim()) return g.value;
      const T = $.value.toLowerCase();
      return g.value.filter((O) => O.filename.toLowerCase().includes(T));
    }), _ = B(() => {
      if (!$.value.trim()) return h.value;
      const T = $.value.toLowerCase();
      return h.value.filter((O) => O.filename.toLowerCase().includes(T));
    }), k = B(() => {
      const T = {};
      for (const z of w.value) {
        const S = z.type || "other";
        T[S] || (T[S] = []), T[S].push(z);
      }
      const O = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(T).sort(([z], [S]) => {
        const V = O.indexOf(z), W = O.indexOf(S);
        return V >= 0 && W >= 0 ? V - W : V >= 0 ? -1 : W >= 0 ? 1 : z.localeCompare(S);
      }).map(([z, S]) => ({ type: z, models: S }));
    });
    function R(T) {
      if (!T) return "Unknown";
      const O = T / (1024 * 1024);
      return O >= 1024 ? `${(O / 1024).toFixed(1)} GB` : `${O.toFixed(0)} MB`;
    }
    function A(T) {
      M.value = T.hash || T.filename;
    }
    function j(T) {
      n("navigate", "model-index");
    }
    function K(T) {
      alert(`Download functionality not yet implemented for ${T}`);
    }
    async function P() {
      i.value = !0, m.value = null;
      try {
        const T = await r();
        g.value = T, h.value = [];
        const O = await p();
        v.value = O.environment || "production";
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to load models";
      } finally {
        i.value = !1;
      }
    }
    return _e(P), (T, O) => (o(), s(H, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: O[0] || (O[0] = (z) => u.value = !0)
          })
        ]),
        search: l(() => [
          f(dt, {
            modelValue: $.value,
            "onUpdate:modelValue": O[1] || (O[1] = (z) => $.value = z),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          i.value ? (o(), x(He, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (o(), x(qe, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            g.value.length ? (o(), x(ct, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                y(" Total: " + a(g.value.length) + " models • " + a(R(L.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            (o(!0), s(H, null, se(k.value, (z) => (o(), x(be, {
              key: z.type,
              title: z.type.toUpperCase(),
              count: z.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: l(() => [
                (o(!0), s(H, null, se(z.models, (S) => (o(), x(Ce, {
                  key: S.hash || S.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...O[4] || (O[4] = [
                    y("📦", -1)
                  ])]),
                  title: l(() => [
                    y(a(S.filename), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(R(S.size)), 1)
                  ]),
                  details: l(() => [
                    f(pe, {
                      label: "Used by:",
                      value: (S.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    f(pe, {
                      label: "Path:",
                      value: S.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => A(S)
                    }, {
                      default: l(() => [...O[5] || (O[5] = [
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
            _.value.length ? (o(), x(be, {
              key: 1,
              title: "MISSING",
              count: _.value.length
            }, {
              default: l(() => [
                (o(!0), s(H, null, se(_.value, (z) => (o(), x(Ce, {
                  key: z.filename,
                  status: "broken"
                }, {
                  icon: l(() => [...O[6] || (O[6] = [
                    y("⚠", -1)
                  ])]),
                  title: l(() => [
                    y(a(z.filename), 1)
                  ]),
                  subtitle: l(() => [...O[7] || (O[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: l(() => {
                    var S;
                    return [
                      f(pe, {
                        label: "Required by:",
                        value: ((S = z.workflow_names) == null ? void 0 : S.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: l(() => [
                    f(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (S) => K(z.filename)
                    }, {
                      default: l(() => [...O[8] || (O[8] = [
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (S) => j(z.filename)
                    }, {
                      default: l(() => [...O[9] || (O[9] = [
                        y(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !w.value.length && !_.value.length ? (o(), x(Ue, {
              key: 2,
              icon: "📭",
              message: $.value ? `No models match '${$.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      f(je, {
        show: u.value,
        title: "About Environment Models",
        onClose: O[2] || (O[2] = (z) => u.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            O[10] || (O[10] = y(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(v.value) + '"', 1),
            O[11] || (O[11] = y(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: l(() => [
          f(Z, {
            variant: "primary",
            onClick: C
          }, {
            default: l(() => [...O[12] || (O[12] = [
              y(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      M.value ? (o(), x(so, {
        key: 0,
        identifier: M.value,
        onClose: O[3] || (O[3] = (z) => M.value = null)
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), tu = /* @__PURE__ */ Y(eu, [["__scopeId", "data-v-cb4f12b3"]]), ou = {
  key: 0,
  class: "indexing-progress"
}, su = { class: "progress-info" }, nu = { class: "progress-label" }, au = { class: "progress-count" }, lu = { class: "progress-bar" }, iu = { class: "modal-content" }, ru = { class: "modal-header" }, du = { class: "modal-body" }, cu = { class: "input-group" }, uu = { class: "current-path" }, mu = { class: "input-group" }, vu = { class: "modal-footer" }, fu = { class: "modal-content" }, gu = { class: "modal-header" }, pu = { class: "modal-body" }, hu = { class: "input-group" }, yu = { class: "input-group" }, wu = { class: "modal-footer" }, ku = /* @__PURE__ */ Q({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: r,
      getModelsDirectory: p,
      setModelsDirectory: g
    } = Se(), { addToQueue: h } = xt(), v = c, i = b([]), m = b(!1), $ = b(!1), u = b(null), M = b(""), C = b(!1), L = b(null), w = b(!1), _ = b(null), k = b(""), R = b(!1), A = b(!1), j = b(""), K = b(""), P = b(null), T = B(
      () => i.value.reduce((N, U) => N + (U.size || 0), 0)
    ), O = B(() => {
      if (!M.value.trim()) return i.value;
      const N = M.value.toLowerCase();
      return i.value.filter((U) => {
        const ae = U, ee = U.sha256 || ae.sha256_hash || "";
        return U.filename.toLowerCase().includes(N) || ee.toLowerCase().includes(N);
      });
    }), z = B(() => {
      const N = {};
      for (const ae of O.value) {
        const ee = ae.type || "other";
        N[ee] || (N[ee] = []), N[ee].push(ae);
      }
      const U = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(N).sort(([ae], [ee]) => {
        const $e = U.indexOf(ae), le = U.indexOf(ee);
        return $e >= 0 && le >= 0 ? $e - le : $e >= 0 ? -1 : le >= 0 ? 1 : ae.localeCompare(ee);
      }).map(([ae, ee]) => ({ type: ae, models: ee }));
    });
    function S(N) {
      if (!N) return "Unknown";
      const U = 1024 * 1024 * 1024, ae = 1024 * 1024;
      return N >= U ? `${(N / U).toFixed(1)} GB` : N >= ae ? `${(N / ae).toFixed(0)} MB` : `${(N / 1024).toFixed(0)} KB`;
    }
    function V(N) {
      L.value = N.hash || N.filename;
    }
    async function W() {
      $.value = !0, u.value = null;
      try {
        const N = await r();
        await E(), N.changes > 0 && console.log(`Scan complete: ${N.changes} changes detected`);
      } catch (N) {
        u.value = N instanceof Error ? N.message : "Failed to scan models";
      } finally {
        $.value = !1;
      }
    }
    async function X() {
      if (k.value.trim()) {
        R.value = !0, u.value = null;
        try {
          const N = await g(k.value.trim());
          _.value = N.path, w.value = !1, k.value = "", await E(), console.log(`Directory changed: ${N.models_indexed} models indexed`), v("refresh");
        } catch (N) {
          u.value = N instanceof Error ? N.message : "Failed to change directory";
        } finally {
          R.value = !1;
        }
      }
    }
    function oe() {
      if (!j.value.trim() || !K.value.trim()) return;
      const N = K.value.split("/").pop() || "model.safetensors";
      h([{
        workflow: "__manual__",
        filename: N,
        url: j.value.trim(),
        targetPath: K.value.trim()
      }]), j.value = "", K.value = "", A.value = !1;
    }
    async function E() {
      m.value = !0, u.value = null;
      try {
        i.value = await n();
      } catch (N) {
        u.value = N instanceof Error ? N.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function G() {
      try {
        const N = await p();
        _.value = N.path;
      } catch {
      }
    }
    return _e(() => {
      E(), G();
    }), (N, U) => (o(), s(H, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: U[2] || (U[2] = (ae) => C.value = !0)
          }, {
            actions: l(() => [
              f(Z, {
                variant: "primary",
                size: "sm",
                disabled: $.value,
                onClick: W
              }, {
                default: l(() => [
                  y(a($.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              f(Z, {
                variant: "primary",
                size: "sm",
                onClick: U[0] || (U[0] = (ae) => w.value = !0)
              }, {
                default: l(() => [...U[15] || (U[15] = [
                  y(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              f(Z, {
                variant: "primary",
                size: "sm",
                onClick: U[1] || (U[1] = (ae) => A.value = !0)
              }, {
                default: l(() => [...U[16] || (U[16] = [
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
        search: l(() => [
          P.value ? (o(), s("div", ou, [
            e("div", su, [
              e("span", nu, a(P.value.message), 1),
              e("span", au, a(P.value.current) + "/" + a(P.value.total), 1)
            ]),
            e("div", lu, [
              e("div", {
                class: "progress-fill",
                style: Qe({ width: `${P.value.current / P.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : d("", !0),
          f(dt, {
            modelValue: M.value,
            "onUpdate:modelValue": U[3] || (U[3] = (ae) => M.value = ae),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          m.value || P.value ? (o(), x(He, {
            key: 0,
            message: P.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : u.value ? (o(), x(qe, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            i.value.length ? (o(), x(ct, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                y(" Total: " + a(i.value.length) + " models • " + a(S(T.value)), 1)
              ]),
              _: 1
            })) : d("", !0),
            (o(!0), s(H, null, se(z.value, (ae) => (o(), x(be, {
              key: ae.type,
              title: ae.type.toUpperCase(),
              count: ae.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: l(() => [
                (o(!0), s(H, null, se(ae.models, (ee) => (o(), x(Ce, {
                  key: ee.sha256 || ee.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...U[17] || (U[17] = [
                    y("📦", -1)
                  ])]),
                  title: l(() => [
                    y(a(ee.filename), 1)
                  ]),
                  subtitle: l(() => [
                    y(a(S(ee.size)), 1)
                  ]),
                  details: l(() => [
                    f(pe, {
                      label: "Hash:",
                      value: ee.hash ? ee.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: ($e) => V(ee)
                    }, {
                      default: l(() => [...U[18] || (U[18] = [
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
            O.value.length ? d("", !0) : (o(), x(Ue, {
              key: 1,
              icon: "📭",
              message: M.value ? `No models match '${M.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      f(je, {
        show: C.value,
        title: "About Workspace Model Index",
        onClose: U[4] || (U[4] = (ae) => C.value = !1)
      }, {
        content: l(() => [...U[19] || (U[19] = [
          e("p", null, [
            y(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            y(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      L.value ? (o(), x(so, {
        key: 0,
        identifier: L.value,
        onClose: U[5] || (U[5] = (ae) => L.value = null)
      }, null, 8, ["identifier"])) : d("", !0),
      (o(), x(xe, { to: "body" }, [
        w.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: U[9] || (U[9] = ke((ae) => w.value = !1, ["self"]))
        }, [
          e("div", iu, [
            e("div", ru, [
              U[20] || (U[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: U[6] || (U[6] = (ae) => w.value = !1)
              }, "✕")
            ]),
            e("div", du, [
              e("div", cu, [
                U[21] || (U[21] = e("label", null, "Current Directory", -1)),
                e("code", uu, a(_.value || "Not set"), 1)
              ]),
              e("div", mu, [
                U[22] || (U[22] = e("label", null, "New Directory Path", -1)),
                f(Ne, {
                  modelValue: k.value,
                  "onUpdate:modelValue": U[7] || (U[7] = (ae) => k.value = ae),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              U[23] || (U[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", vu, [
              f(ie, {
                variant: "secondary",
                onClick: U[8] || (U[8] = (ae) => w.value = !1)
              }, {
                default: l(() => [...U[24] || (U[24] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              f(ie, {
                variant: "primary",
                disabled: !k.value.trim() || R.value,
                loading: R.value,
                onClick: X
              }, {
                default: l(() => [
                  y(a(R.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : d("", !0)
      ])),
      (o(), x(xe, { to: "body" }, [
        A.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: U[14] || (U[14] = ke((ae) => A.value = !1, ["self"]))
        }, [
          e("div", fu, [
            e("div", gu, [
              U[25] || (U[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: U[10] || (U[10] = (ae) => A.value = !1)
              }, "✕")
            ]),
            e("div", pu, [
              e("div", hu, [
                U[26] || (U[26] = e("label", null, "Download URL", -1)),
                f(Ne, {
                  modelValue: j.value,
                  "onUpdate:modelValue": U[11] || (U[11] = (ae) => j.value = ae),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", yu, [
                U[27] || (U[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                f(Ne, {
                  modelValue: K.value,
                  "onUpdate:modelValue": U[12] || (U[12] = (ae) => K.value = ae),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              U[28] || (U[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", wu, [
              f(ie, {
                variant: "secondary",
                onClick: U[13] || (U[13] = (ae) => A.value = !1)
              }, {
                default: l(() => [...U[29] || (U[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              f(ie, {
                variant: "primary",
                disabled: !j.value.trim() || !K.value.trim(),
                onClick: oe
              }, {
                default: l(() => [...U[30] || (U[30] = [
                  y(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : d("", !0)
      ]))
    ], 64));
  }
}), bu = /* @__PURE__ */ Y(ku, [["__scopeId", "data-v-73b78d84"]]), _u = { class: "node-details" }, $u = { class: "status-row" }, Cu = {
  key: 0,
  class: "detail-row"
}, xu = { class: "value" }, Su = { class: "detail-row" }, Iu = { class: "value" }, Eu = {
  key: 1,
  class: "detail-row"
}, Mu = { class: "value mono" }, zu = {
  key: 2,
  class: "detail-row"
}, Lu = ["href"], Tu = {
  key: 3,
  class: "detail-row"
}, Du = { class: "value mono small" }, Ru = { class: "detail-row" }, Nu = {
  key: 0,
  class: "value"
}, Uu = {
  key: 1,
  class: "workflow-list"
}, Ou = /* @__PURE__ */ Q({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, r = c, p = B(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), g = B(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), h = B(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (v, i) => (o(), x(st, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: i[1] || (i[1] = (m) => r("close"))
    }, {
      body: l(() => [
        e("div", _u, [
          e("div", $u, [
            i[2] || (i[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: ne(["status-badge", p.value])
            }, a(g.value), 3)
          ]),
          t.node.version ? (o(), s("div", Cu, [
            i[3] || (i[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", xu, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : d("", !0),
          e("div", Su, [
            i[4] || (i[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", Iu, a(h.value), 1)
          ]),
          t.node.registry_id ? (o(), s("div", Eu, [
            i[5] || (i[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", Mu, a(t.node.registry_id), 1)
          ])) : d("", !0),
          t.node.repository ? (o(), s("div", zu, [
            i[7] || (i[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              y(a(t.node.repository) + " ", 1),
              i[6] || (i[6] = e("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                e("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, Lu)
          ])) : d("", !0),
          t.node.download_url ? (o(), s("div", Tu, [
            i[8] || (i[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", Du, a(t.node.download_url), 1)
          ])) : d("", !0),
          i[10] || (i[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Ru, [
            i[9] || (i[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (o(), s("span", Nu, " Not used in any workflows ")) : (o(), s("div", Uu, [
              (o(!0), s(H, null, se(t.node.used_in_workflows, (m) => (o(), s("span", {
                key: m,
                class: "workflow-tag"
              }, a(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: l(() => [
        f(ie, {
          variant: "secondary",
          onClick: i[0] || (i[0] = (m) => r("close"))
        }, {
          default: l(() => [...i[11] || (i[11] = [
            y(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Bu = /* @__PURE__ */ Y(Ou, [["__scopeId", "data-v-b342f626"]]), Pu = { key: 0 }, Vu = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Fu = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Au = /* @__PURE__ */ Q({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: c }) {
    const n = c, { getNodes: r, trackNodeAsDev: p, installNode: g, uninstallNode: h } = Se(), v = b({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), i = b(!1), m = b(null), $ = b(""), u = b(!1), M = b(null), C = B(() => {
      if (!$.value.trim()) return v.value.nodes;
      const z = $.value.toLowerCase();
      return v.value.nodes.filter(
        (S) => {
          var V, W;
          return S.name.toLowerCase().includes(z) || ((V = S.description) == null ? void 0 : V.toLowerCase().includes(z)) || ((W = S.repository) == null ? void 0 : W.toLowerCase().includes(z));
        }
      );
    }), L = B(
      () => C.value.filter((z) => z.installed && z.tracked)
    ), w = B(
      () => C.value.filter((z) => !z.installed && z.tracked)
    ), _ = B(
      () => C.value.filter((z) => z.installed && !z.tracked)
    );
    function k(z) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[z] || z;
    }
    function R(z) {
      return !z.used_in_workflows || z.used_in_workflows.length === 0 ? "Not used in any workflows" : z.used_in_workflows.length === 1 ? z.used_in_workflows[0] : `${z.used_in_workflows.length} workflows`;
    }
    function A(z) {
      M.value = z;
    }
    function j() {
      n("open-node-manager");
    }
    async function K(z) {
      if (confirm(`Track "${z}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          i.value = !0;
          const S = await p(z);
          S.status === "success" ? (alert(`Node "${z}" is now tracked as development!`), await O()) : alert(`Failed to track node: ${S.message || "Unknown error"}`);
        } catch (S) {
          alert(`Error tracking node: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          i.value = !1;
        }
    }
    async function P(z) {
      if (confirm(`Remove untracked node "${z}"?

This will delete the node directory from custom_nodes/.`))
        try {
          i.value = !0;
          const S = await h(z);
          S.status === "success" ? (alert(`Node "${z}" removed!`), await O()) : alert(`Failed to remove node: ${S.message || "Unknown error"}`);
        } catch (S) {
          alert(`Error removing node: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          i.value = !1;
        }
    }
    async function T(z) {
      if (confirm(`Install node "${z}"?

This will download and install the node.`))
        try {
          i.value = !0;
          const S = await g(z);
          S.status === "success" ? (alert(`Node "${z}" installed successfully!`), await O()) : alert(`Failed to install node: ${S.message || "Unknown error"}`);
        } catch (S) {
          alert(`Error installing node: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          i.value = !1;
        }
    }
    async function O() {
      i.value = !0, m.value = null;
      try {
        v.value = await r();
      } catch (z) {
        m.value = z instanceof Error ? z.message : "Failed to load nodes";
      } finally {
        i.value = !1;
      }
    }
    return _e(O), (z, S) => (o(), s(H, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (V) => u.value = !0)
          }, {
            actions: l(() => [
              f(Z, {
                variant: "primary",
                size: "sm",
                onClick: j
              }, {
                default: l(() => [...S[5] || (S[5] = [
                  y(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          f(dt, {
            modelValue: $.value,
            "onUpdate:modelValue": S[1] || (S[1] = (V) => $.value = V),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          i.value ? (o(), x(He, {
            key: 0,
            message: "Loading nodes..."
          })) : m.value ? (o(), x(qe, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            v.value.total_count ? (o(), x(ct, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                y(a(v.value.installed_count) + " installed ", 1),
                v.value.missing_count ? (o(), s(H, { key: 0 }, [
                  y(" • " + a(v.value.missing_count) + " missing", 1)
                ], 64)) : d("", !0),
                v.value.untracked_count ? (o(), s(H, { key: 1 }, [
                  y(" • " + a(v.value.untracked_count) + " untracked", 1)
                ], 64)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            _.value.length ? (o(), x(be, {
              key: 1,
              title: "UNTRACKED",
              count: _.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (o(!0), s(H, null, se(_.value, (V) => (o(), x(Ce, {
                  key: V.name,
                  status: "warning"
                }, {
                  icon: l(() => [...S[6] || (S[6] = [
                    y("?", -1)
                  ])]),
                  title: l(() => [
                    y(a(V.name), 1)
                  ]),
                  subtitle: l(() => [...S[7] || (S[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: l(() => [
                    f(pe, {
                      label: "Used by:",
                      value: R(V)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (W) => A(V)
                    }, {
                      default: l(() => [...S[8] || (S[8] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (W) => K(V.name)
                    }, {
                      default: l(() => [...S[9] || (S[9] = [
                        y(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Z, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (W) => P(V.name)
                    }, {
                      default: l(() => [...S[10] || (S[10] = [
                        y(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            L.value.length ? (o(), x(be, {
              key: 2,
              title: "INSTALLED",
              count: L.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (o(!0), s(H, null, se(L.value, (V) => (o(), x(Ce, {
                  key: V.name,
                  status: "synced"
                }, {
                  icon: l(() => [
                    y(a(V.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: l(() => [
                    y(a(V.name), 1)
                  ]),
                  subtitle: l(() => [
                    V.version ? (o(), s("span", Pu, a(V.source === "development" ? "" : "v") + a(V.version), 1)) : (o(), s("span", Vu, "version unknown")),
                    e("span", Fu, " • " + a(k(V.source)), 1)
                  ]),
                  details: l(() => [
                    f(pe, {
                      label: "Used by:",
                      value: R(V)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (W) => A(V)
                    }, {
                      default: l(() => [...S[11] || (S[11] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: j
                    }, {
                      default: l(() => [...S[12] || (S[12] = [
                        y(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            w.value.length ? (o(), x(be, {
              key: 3,
              title: "MISSING",
              count: w.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (o(!0), s(H, null, se(w.value, (V) => (o(), x(Ce, {
                  key: V.name,
                  status: "missing"
                }, {
                  icon: l(() => [...S[13] || (S[13] = [
                    y("!", -1)
                  ])]),
                  title: l(() => [
                    y(a(V.name), 1)
                  ]),
                  subtitle: l(() => [...S[14] || (S[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: l(() => [
                    f(pe, {
                      label: "Required by:",
                      value: R(V)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (W) => A(V)
                    }, {
                      default: l(() => [...S[15] || (S[15] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (W) => T(V.name)
                    }, {
                      default: l(() => [...S[16] || (S[16] = [
                        y(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !L.value.length && !w.value.length && !_.value.length ? (o(), x(Ue, {
              key: 4,
              icon: "📭",
              message: $.value ? `No nodes match '${$.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      f(je, {
        show: u.value,
        title: "About Custom Nodes",
        onClose: S[3] || (S[3] = (V) => u.value = !1)
      }, {
        content: l(() => [...S[17] || (S[17] = [
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
        actions: l(() => [
          f(Z, {
            variant: "primary",
            onClick: S[2] || (S[2] = (V) => u.value = !1)
          }, {
            default: l(() => [...S[18] || (S[18] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      M.value ? (o(), x(Bu, {
        key: 0,
        node: M.value,
        onClose: S[4] || (S[4] = (V) => M.value = null)
      }, null, 8, ["node"])) : d("", !0)
    ], 64));
  }
}), Wu = /* @__PURE__ */ Y(Au, [["__scopeId", "data-v-4ac1465a"]]), Gu = { class: "remote-url-display" }, ju = ["title"], Hu = ["title"], qu = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Ku = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Ju = /* @__PURE__ */ Q({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = b(!1), r = B(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const g = c.url.slice(0, Math.floor(c.maxLength * 0.6)), h = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${g}...${h}`;
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
    return (g, h) => (o(), s("div", Gu, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(r.value), 9, ju),
      e("button", {
        class: ne(["copy-btn", { copied: n.value }]),
        onClick: p,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (o(), s("svg", Ku, [...h[1] || (h[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), s("svg", qu, [...h[0] || (h[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Hu)
    ]));
  }
}), Ht = /* @__PURE__ */ Y(Ju, [["__scopeId", "data-v-7768a58d"]]), Qu = { class: "remote-title" }, Yu = {
  key: 0,
  class: "default-badge"
}, Xu = {
  key: 1,
  class: "sync-badge"
}, Zu = {
  key: 0,
  class: "ahead"
}, em = {
  key: 1,
  class: "behind"
}, tm = {
  key: 0,
  class: "tracking-info"
}, om = /* @__PURE__ */ Q({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: c }) {
    const n = t, r = B(() => n.fetchingRemote === n.remote.name), p = B(() => n.remote.is_default), g = B(() => !!n.trackingBranch);
    function h(v) {
      const i = new Date(v), $ = (/* @__PURE__ */ new Date()).getTime() - i.getTime(), u = Math.floor($ / 6e4);
      if (u < 1) return "Just now";
      if (u < 60) return `${u}m ago`;
      const M = Math.floor(u / 60);
      if (M < 24) return `${M}h ago`;
      const C = Math.floor(M / 24);
      return C < 7 ? `${C}d ago` : i.toLocaleDateString();
    }
    return (v, i) => (o(), x(Ce, {
      status: p.value ? "synced" : void 0
    }, {
      icon: l(() => [
        y(a(p.value ? "🔗" : "🌐"), 1)
      ]),
      title: l(() => [
        e("div", Qu, [
          e("span", null, a(t.remote.name), 1),
          p.value ? (o(), s("span", Yu, "DEFAULT")) : d("", !0),
          t.syncStatus ? (o(), s("span", Xu, [
            t.syncStatus.ahead > 0 ? (o(), s("span", Zu, "↑" + a(t.syncStatus.ahead), 1)) : d("", !0),
            t.syncStatus.behind > 0 ? (o(), s("span", em, "↓" + a(t.syncStatus.behind), 1)) : d("", !0)
          ])) : d("", !0)
        ])
      ]),
      subtitle: l(() => [
        g.value ? (o(), s("span", tm, " Tracking: " + a(t.trackingBranch), 1)) : d("", !0)
      ]),
      details: l(() => {
        var m;
        return [
          f(pe, { label: "Fetch:" }, {
            default: l(() => [
              f(Ht, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), x(pe, {
            key: 0,
            label: "Push:"
          }, {
            default: l(() => [
              f(Ht, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : d("", !0),
          (m = t.syncStatus) != null && m.last_fetch ? (o(), x(pe, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: l(() => [
              e("span", null, a(h(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : d("", !0)
        ];
      }),
      actions: l(() => [
        f(Z, {
          variant: "primary",
          size: "xs",
          loading: r.value,
          onClick: i[0] || (i[0] = (m) => v.$emit("fetch", t.remote.name))
        }, {
          default: l(() => [...i[3] || (i[3] = [
            y(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        f(Z, {
          variant: "secondary",
          size: "xs",
          onClick: i[1] || (i[1] = (m) => v.$emit("edit", t.remote.name))
        }, {
          default: l(() => [...i[4] || (i[4] = [
            y(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        p.value ? d("", !0) : (o(), x(Z, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: i[2] || (i[2] = (m) => v.$emit("remove", t.remote.name))
        }, {
          default: l(() => [...i[5] || (i[5] = [
            y(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), sm = /* @__PURE__ */ Y(om, [["__scopeId", "data-v-17362e45"]]), nm = ["for"], am = {
  key: 0,
  class: "base-form-field-required"
}, lm = { class: "base-form-field-input" }, im = {
  key: 1,
  class: "base-form-field-error"
}, rm = {
  key: 2,
  class: "base-form-field-hint"
}, dm = /* @__PURE__ */ Q({
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
    const c = t, n = B(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, p) => (o(), s("div", {
      class: ne(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), s("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        y(a(t.label) + " ", 1),
        t.required ? (o(), s("span", am, "*")) : d("", !0)
      ], 8, nm)) : d("", !0),
      e("div", lm, [
        ue(r.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), s("span", im, a(t.error), 1)) : t.hint ? (o(), s("span", rm, a(t.hint), 1)) : d("", !0)
    ], 2));
  }
}), Dt = /* @__PURE__ */ Y(dm, [["__scopeId", "data-v-9a1cf296"]]), cm = { class: "remote-form" }, um = { class: "form-header" }, mm = { class: "form-body" }, vm = {
  key: 0,
  class: "form-error"
}, fm = { class: "form-actions" }, gm = /* @__PURE__ */ Q({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const n = t, r = c, p = b({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), g = b(!1), h = b(null);
    Bt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      p.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const v = B(() => p.value.name.trim() !== "" && p.value.fetchUrl.trim() !== "");
    async function i() {
      if (!(!v.value || g.value)) {
        h.value = null, g.value = !0;
        try {
          r("submit", p.value);
        } catch (m) {
          h.value = m instanceof Error ? m.message : "Failed to submit form";
        } finally {
          g.value = !1;
        }
      }
    }
    return (m, $) => (o(), s("div", cm, [
      e("div", um, [
        f(ze, null, {
          default: l(() => [
            y(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", mm, [
        f(Dt, {
          label: "Remote Name",
          required: ""
        }, {
          default: l(() => [
            f(Ne, {
              modelValue: p.value.name,
              "onUpdate:modelValue": $[0] || ($[0] = (u) => p.value.name = u),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        f(Dt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: l(() => [
            f(Ne, {
              modelValue: p.value.fetchUrl,
              "onUpdate:modelValue": $[1] || ($[1] = (u) => p.value.fetchUrl = u),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        f(Dt, { label: "Push URL (optional)" }, {
          default: l(() => [
            f(Ne, {
              modelValue: p.value.pushUrl,
              "onUpdate:modelValue": $[2] || ($[2] = (u) => p.value.pushUrl = u),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        h.value ? (o(), s("div", vm, a(h.value), 1)) : d("", !0)
      ]),
      e("div", fm, [
        f(Z, {
          variant: "primary",
          size: "md",
          disabled: !v.value,
          loading: g.value,
          onClick: i
        }, {
          default: l(() => [
            y(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        f(Z, {
          variant: "ghost",
          size: "md",
          onClick: $[3] || ($[3] = (u) => m.$emit("cancel"))
        }, {
          default: l(() => [...$[4] || ($[4] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), pm = /* @__PURE__ */ Y(gm, [["__scopeId", "data-v-56021b18"]]), hm = { key: 0 }, ym = /* @__PURE__ */ Q({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: c,
      addRemote: n,
      removeRemote: r,
      updateRemoteUrl: p,
      fetchRemote: g,
      getRemoteSyncStatus: h
    } = Se(), v = b([]), i = b(null), m = b({}), $ = b(!1), u = b(null), M = b(""), C = b(!1), L = b(null), w = b(!1), _ = b("add"), k = b({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), R = B(() => {
      if (!M.value.trim()) return v.value;
      const W = M.value.toLowerCase();
      return v.value.filter(
        (X) => X.name.toLowerCase().includes(W) || X.fetch_url.toLowerCase().includes(W) || X.push_url.toLowerCase().includes(W)
      );
    });
    function A(W) {
      var X;
      return ((X = i.value) == null ? void 0 : X.remote) === W;
    }
    async function j() {
      $.value = !0, u.value = null;
      try {
        const W = await c();
        v.value = W.remotes, i.value = W.current_branch_tracking || null, await Promise.all(
          W.remotes.map(async (X) => {
            const oe = await h(X.name);
            oe && (m.value[X.name] = oe);
          })
        );
      } catch (W) {
        u.value = W instanceof Error ? W.message : "Failed to load remotes";
      } finally {
        $.value = !1;
      }
    }
    function K() {
      _.value = "add", k.value = { name: "", fetchUrl: "", pushUrl: "" }, w.value = !0;
    }
    function P(W) {
      const X = v.value.find((oe) => oe.name === W);
      X && (_.value = "edit", k.value = {
        name: X.name,
        fetchUrl: X.fetch_url,
        pushUrl: X.push_url
      }, w.value = !0);
    }
    async function T(W) {
      try {
        _.value === "add" ? await n(W.name, W.fetchUrl) : await p(W.name, W.fetchUrl, W.pushUrl || void 0), w.value = !1, await j();
      } catch (X) {
        u.value = X instanceof Error ? X.message : "Operation failed";
      }
    }
    function O() {
      w.value = !1, k.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function z(W) {
      L.value = W;
      try {
        await g(W);
        const X = await h(W);
        X && (m.value[W] = X);
      } catch (X) {
        u.value = X instanceof Error ? X.message : "Fetch failed";
      } finally {
        L.value = null;
      }
    }
    async function S(W) {
      if (confirm(`Remove remote "${W}"?`))
        try {
          await r(W), await j();
        } catch (X) {
          u.value = X instanceof Error ? X.message : "Failed to remove remote";
        }
    }
    function V() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return _e(j), (W, X) => (o(), s(H, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: X[0] || (X[0] = (oe) => C.value = !0)
          }, {
            actions: l(() => [
              w.value ? d("", !0) : (o(), x(Z, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: K
              }, {
                default: l(() => [...X[3] || (X[3] = [
                  y(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          w.value ? d("", !0) : (o(), x(dt, {
            key: 0,
            modelValue: M.value,
            "onUpdate:modelValue": X[1] || (X[1] = (oe) => M.value = oe),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: l(() => [
          $.value ? (o(), x(He, {
            key: 0,
            message: "Loading remotes..."
          })) : u.value ? (o(), x(qe, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: j
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            w.value ? (o(), x(pm, {
              key: 0,
              mode: _.value,
              "remote-name": k.value.name,
              "fetch-url": k.value.fetchUrl,
              "push-url": k.value.pushUrl,
              onSubmit: T,
              onCancel: O
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            v.value.length && !w.value ? (o(), x(ct, {
              key: 1,
              variant: "compact"
            }, {
              default: l(() => [
                y(" Total: " + a(v.value.length) + " remote" + a(v.value.length !== 1 ? "s" : "") + " ", 1),
                i.value ? (o(), s("span", hm, " • Tracking: " + a(i.value.remote) + "/" + a(i.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            R.value.length && !w.value ? (o(), x(be, {
              key: 2,
              title: "REMOTES",
              count: R.value.length
            }, {
              default: l(() => [
                (o(!0), s(H, null, se(R.value, (oe) => {
                  var E;
                  return o(), x(sm, {
                    key: oe.name,
                    remote: oe,
                    "sync-status": m.value[oe.name],
                    "tracking-branch": A(oe.name) ? (E = i.value) == null ? void 0 : E.branch : void 0,
                    "fetching-remote": L.value,
                    onFetch: z,
                    onEdit: P,
                    onRemove: S
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !R.value.length && !w.value ? (o(), x(Ue, {
              key: 3,
              icon: "🌐",
              message: M.value ? `No remotes match '${M.value}'` : "No remotes configured."
            }, {
              actions: l(() => [
                f(Z, {
                  variant: "primary",
                  onClick: K
                }, {
                  default: l(() => [...X[4] || (X[4] = [
                    y(" Add Your First Remote ", -1)
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
      f(je, {
        show: C.value,
        title: "About Git Remotes",
        onClose: X[2] || (X[2] = (oe) => C.value = !1)
      }, {
        content: l(() => [...X[5] || (X[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            y(" The "),
            e("strong", null, '"origin"'),
            y(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: l(() => [
          f(Z, {
            variant: "link",
            onClick: V
          }, {
            default: l(() => [...X[6] || (X[6] = [
              y(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), wm = /* @__PURE__ */ Y(ym, [["__scopeId", "data-v-a75719bb"]]), km = { class: "setting-info" }, bm = { class: "setting-label" }, _m = {
  key: 0,
  class: "required-marker"
}, $m = {
  key: 0,
  class: "setting-description"
}, Cm = { class: "setting-control" }, xm = /* @__PURE__ */ Q({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (o(), s("div", {
      class: ne(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", km, [
        e("div", bm, [
          y(a(t.label) + " ", 1),
          t.required ? (o(), s("span", _m, "*")) : d("", !0)
        ]),
        t.description ? (o(), s("div", $m, a(t.description), 1)) : d("", !0)
      ]),
      e("div", Cm, [
        ue(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Ge = /* @__PURE__ */ Y(xm, [["__scopeId", "data-v-cb5d236c"]]), Sm = { class: "toggle" }, Im = ["checked", "disabled"], Em = /* @__PURE__ */ Q({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (o(), s("label", Sm, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, Im),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ot = /* @__PURE__ */ Y(Em, [["__scopeId", "data-v-71c0f550"]]), Mm = { class: "settings-section" }, zm = { class: "path-setting" }, Lm = { class: "path-value" }, Tm = { class: "path-setting" }, Dm = { class: "path-value" }, Rm = { class: "settings-section" }, Nm = { class: "settings-section" }, Um = { class: "settings-section" }, Om = /* @__PURE__ */ Q({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: c, updateConfig: n } = Se(), r = b(!1), p = b(null), g = b(null), h = b(null), v = b(null), i = b(""), m = b(""), $ = b(!0), u = b(!0), M = b(!1), C = B(() => v.value ? i.value !== (v.value.civitai_api_key || "") : !1);
    async function L() {
      r.value = !0, p.value = null;
      try {
        h.value = await c(), v.value = { ...h.value }, i.value = h.value.civitai_api_key || "", m.value = h.value.huggingface_token || "", $.value = h.value.auto_sync_models, u.value = h.value.confirm_destructive;
        const R = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        M.value = R === "true";
      } catch (R) {
        p.value = R instanceof Error ? R.message : "Failed to load settings";
      } finally {
        r.value = !1;
      }
    }
    async function w() {
      var R;
      g.value = null;
      try {
        const A = {};
        i.value !== (((R = v.value) == null ? void 0 : R.civitai_api_key) || "") && (A.civitai_api_key = i.value || null), await n(A), await L(), g.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          g.value = null;
        }, 3e3);
      } catch (A) {
        g.value = {
          type: "error",
          message: A instanceof Error ? A.message : "Failed to save settings"
        };
      }
    }
    function _() {
      v.value && (i.value = v.value.civitai_api_key || "", m.value = v.value.huggingface_token || "", $.value = v.value.auto_sync_models, u.value = v.value.confirm_destructive, g.value = null);
    }
    function k(R) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(R)), console.log("[ComfyGit] Auto-refresh setting saved:", R);
    }
    return _e(L), (R, A) => (o(), x(Ie, null, {
      header: l(() => [
        f(Ee, { title: "WORKSPACE SETTINGS" }, {
          actions: l(() => [
            f(Z, {
              variant: "primary",
              size: "sm",
              disabled: !C.value,
              onClick: w
            }, {
              default: l(() => [...A[5] || (A[5] = [
                y(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            C.value ? (o(), x(Z, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: _
            }, {
              default: l(() => [...A[6] || (A[6] = [
                y(" Reset ", -1)
              ])]),
              _: 1
            })) : d("", !0)
          ]),
          _: 1
        })
      ]),
      content: l(() => [
        r.value ? (o(), x(He, {
          key: 0,
          message: "Loading workspace settings..."
        })) : p.value ? (o(), x(qe, {
          key: 1,
          message: p.value,
          retry: !0,
          onRetry: L
        }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
          f(be, { title: "WORKSPACE PATHS" }, {
            default: l(() => {
              var j, K;
              return [
                e("div", Mm, [
                  e("div", zm, [
                    A[7] || (A[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    A[8] || (A[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Lm, a(((j = h.value) == null ? void 0 : j.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Tm, [
                    A[9] || (A[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    A[10] || (A[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Dm, a(((K = h.value) == null ? void 0 : K.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          f(be, { title: "API CREDENTIALS" }, {
            default: l(() => [
              e("div", Rm, [
                f(Ge, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: l(() => [
                    f(Ct, {
                      modelValue: i.value,
                      "onUpdate:modelValue": A[0] || (A[0] = (j) => i.value = j),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                f(Ge, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: l(() => [
                    f(Ct, {
                      modelValue: m.value,
                      "onUpdate:modelValue": A[1] || (A[1] = (j) => m.value = j),
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
          f(be, { title: "UI SETTINGS" }, {
            default: l(() => [
              e("div", Nm, [
                f(Ge, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: l(() => [
                    f(ot, {
                      modelValue: M.value,
                      "onUpdate:modelValue": [
                        A[2] || (A[2] = (j) => M.value = j),
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
          f(be, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: l(() => [
              e("div", Um, [
                f(Ge, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: l(() => [
                    f(ot, {
                      modelValue: $.value,
                      "onUpdate:modelValue": A[3] || (A[3] = (j) => $.value = j),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                f(Ge, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: l(() => [
                    f(ot, {
                      modelValue: u.value,
                      "onUpdate:modelValue": A[4] || (A[4] = (j) => u.value = j),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          g.value ? (o(), x(ct, {
            key: 0,
            variant: (g.value.type === "success", "compact")
          }, {
            default: l(() => [
              e("span", {
                style: Qe({ color: g.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, a(g.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : d("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Bm = /* @__PURE__ */ Y(Om, [["__scopeId", "data-v-7861bd35"]]), Pm = /* @__PURE__ */ Q({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c } = Se(), n = b([]), r = b(!1), p = b(null), g = b(!1), h = b(null), v = B(() => n.value.length === 0 ? [] : n.value.map((m) => ({
      text: `${m.timestamp} - ${m.name} - ${m.level} - ${m.func}:${m.line} - ${m.message}`,
      level: m.level
    })));
    async function i() {
      r.value = !0, p.value = null;
      try {
        n.value = await c(void 0, 500);
      } catch (m) {
        p.value = m instanceof Error ? m.message : "Failed to load workspace logs";
      } finally {
        r.value = !1, setTimeout(() => {
          var m;
          (m = h.value) != null && m.parentElement && (h.value.parentElement.scrollTop = h.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return _e(i), (m, $) => (o(), s(H, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (u) => g.value = !0)
          }, {
            actions: l(() => [
              f(Z, {
                variant: "secondary",
                size: "sm",
                onClick: i,
                disabled: r.value
              }, {
                default: l(() => [
                  y(a(r.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          r.value ? (o(), x(He, {
            key: 0,
            message: "Loading workspace logs..."
          })) : p.value ? (o(), x(qe, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: i
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            n.value.length === 0 ? (o(), x(Ue, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: h,
              class: "log-output"
            }, [
              (o(!0), s(H, null, se(v.value, (u, M) => (o(), s("div", {
                key: M,
                class: ne(`log-line log-level-${u.level.toLowerCase()}`)
              }, a(u.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      f(je, {
        show: g.value,
        title: "About Workspace Logs",
        onClose: $[2] || ($[2] = (u) => g.value = !1)
      }, {
        content: l(() => [...$[3] || ($[3] = [
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
        actions: l(() => [
          f(Z, {
            variant: "primary",
            onClick: $[1] || ($[1] = (u) => g.value = !1)
          }, {
            default: l(() => [...$[4] || ($[4] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Vm = /* @__PURE__ */ Y(Pm, [["__scopeId", "data-v-39f6a756"]]), Fm = /* @__PURE__ */ Q({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n } = Se(), r = b([]), p = b(!1), g = b(null), h = b(!1), v = b("production"), i = b(null), m = B(() => r.value.length === 0 ? [] : r.value.map((u) => ({
      text: `${u.timestamp} - ${u.name} - ${u.level} - ${u.func}:${u.line} - ${u.message}`,
      level: u.level
    })));
    async function $() {
      p.value = !0, g.value = null;
      try {
        r.value = await c(void 0, 500);
        try {
          const u = await n();
          v.value = u.environment || "production";
        } catch {
        }
      } catch (u) {
        g.value = u instanceof Error ? u.message : "Failed to load environment logs";
      } finally {
        p.value = !1, setTimeout(() => {
          var u;
          (u = i.value) != null && u.parentElement && (i.value.parentElement.scrollTop = i.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return _e($), (u, M) => (o(), s(H, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (C) => h.value = !0)
          }, {
            actions: l(() => [
              f(Z, {
                variant: "secondary",
                size: "sm",
                onClick: $,
                disabled: p.value
              }, {
                default: l(() => [
                  y(a(p.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          p.value ? (o(), x(He, {
            key: 0,
            message: "Loading environment logs..."
          })) : g.value ? (o(), x(qe, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: $
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            r.value.length === 0 ? (o(), x(Ue, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: i,
              class: "log-output"
            }, [
              (o(!0), s(H, null, se(m.value, (C, L) => (o(), s("div", {
                key: L,
                class: ne(`log-line log-level-${C.level.toLowerCase()}`)
              }, a(C.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      f(je, {
        show: h.value,
        title: "About Environment Logs",
        onClose: M[2] || (M[2] = (C) => h.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            M[3] || (M[3] = y(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(v.value), 1),
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
        actions: l(() => [
          f(Z, {
            variant: "primary",
            onClick: M[1] || (M[1] = (C) => h.value = !1)
          }, {
            default: l(() => [...M[7] || (M[7] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Am = /* @__PURE__ */ Y(Fm, [["__scopeId", "data-v-4f1e6f72"]]), Wm = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], qt = "3.12", Gm = [
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
], Kt = "auto", jm = { class: "env-title" }, Hm = {
  key: 0,
  class: "current-badge"
}, qm = {
  key: 0,
  class: "branch-info"
}, Km = /* @__PURE__ */ Q({
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
    return (c, n) => (o(), x(Ce, {
      status: t.isCurrent ? "synced" : void 0
    }, Mt({
      icon: l(() => [
        y(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: l(() => [
        e("div", jm, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), s("span", Hm, "CURRENT")) : d("", !0)
        ])
      ]),
      subtitle: l(() => [
        t.currentBranch ? (o(), s("span", qm, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          y(" " + a(t.currentBranch), 1)
        ])) : d("", !0)
      ]),
      actions: l(() => [
        ue(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: l(() => [
          f(pe, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          f(pe, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          f(pe, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (o(), x(pe, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : d("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Jm = /* @__PURE__ */ Y(Km, [["__scopeId", "data-v-79a079cc"]]), Qm = { class: "env-details" }, Ym = { class: "status-row" }, Xm = {
  key: 0,
  class: "detail-row"
}, Zm = { class: "value mono" }, ev = {
  key: 1,
  class: "detail-row"
}, tv = { class: "value mono small" }, ov = { class: "detail-row" }, sv = { class: "value" }, nv = { class: "detail-row" }, av = { class: "value" }, lv = { class: "detail-row" }, iv = { class: "value" }, rv = {
  key: 2,
  class: "section-divider"
}, dv = {
  key: 3,
  class: "detail-row"
}, cv = { class: "value" }, uv = {
  key: 4,
  class: "detail-row"
}, mv = { class: "value" }, vv = /* @__PURE__ */ Q({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {}
  },
  emits: ["close", "switch"],
  setup(t, { emit: c }) {
    const n = c;
    function r(p) {
      if (!p) return "Unknown";
      try {
        const g = new Date(p), v = (/* @__PURE__ */ new Date()).getTime() - g.getTime(), i = Math.floor(v / 6e4), m = Math.floor(v / 36e5), $ = Math.floor(v / 864e5);
        return i < 1 ? "just now" : i < 60 ? `${i} ${i === 1 ? "minute" : "minutes"} ago` : m < 24 ? `${m} ${m === 1 ? "hour" : "hours"} ago` : $ < 30 ? `${$} ${$ === 1 ? "day" : "days"} ago` : g.toLocaleDateString();
      } catch {
        return p;
      }
    }
    return (p, g) => (o(), x(st, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: g[2] || (g[2] = (h) => n("close"))
    }, {
      body: l(() => [
        e("div", Qm, [
          e("div", Ym, [
            g[3] || (g[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: ne(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (o(), s("div", Xm, [
            g[4] || (g[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", Zm, a(t.environment.current_branch), 1)
          ])) : d("", !0),
          t.environment.path ? (o(), s("div", ev, [
            g[5] || (g[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", tv, a(t.environment.path), 1)
          ])) : d("", !0),
          g[11] || (g[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", ov, [
            g[6] || (g[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", sv, a(t.environment.workflow_count), 1)
          ]),
          e("div", nv, [
            g[7] || (g[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", av, a(t.environment.node_count), 1)
          ]),
          e("div", lv, [
            g[8] || (g[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", iv, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (o(), s("div", rv)) : d("", !0),
          t.environment.created_at ? (o(), s("div", dv, [
            g[9] || (g[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", cv, a(r(t.environment.created_at)), 1)
          ])) : d("", !0),
          t.environment.last_used ? (o(), s("div", uv, [
            g[10] || (g[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", mv, a(r(t.environment.last_used)), 1)
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        t.environment.is_current ? d("", !0) : (o(), x(ie, {
          key: 0,
          variant: "primary",
          onClick: g[0] || (g[0] = (h) => n("switch", t.environment.name))
        }, {
          default: l(() => [...g[12] || (g[12] = [
            y(" Switch to Environment ", -1)
          ])]),
          _: 1
        })),
        f(ie, {
          variant: "secondary",
          onClick: g[1] || (g[1] = (h) => n("close"))
        }, {
          default: l(() => [...g[13] || (g[13] = [
            y(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), fv = /* @__PURE__ */ Y(vv, [["__scopeId", "data-v-8c6965c4"]]), gv = {
  key: 0,
  class: "create-form"
}, pv = { class: "create-form__header" }, hv = { class: "create-form__body" }, yv = { class: "form-field" }, wv = { class: "form-field" }, kv = ["value"], bv = { class: "form-field" }, _v = ["disabled"], $v = ["value"], Cv = { class: "form-field" }, xv = ["value"], Sv = { class: "form-field form-field--checkbox" }, Iv = { class: "form-checkbox" }, Ev = { class: "create-form__actions" }, Mv = /* @__PURE__ */ Q({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete"],
  setup(t, { expose: c, emit: n }) {
    const r = n, { getEnvironments: p, getComfyUIReleases: g } = Se(), h = b([]), v = b(!1), i = b(null), m = b(""), $ = b(!1), u = b(!1), M = b(null), C = b(""), L = b(qt), w = b("latest"), _ = b(Kt), k = b(!1), R = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), A = b(!1), j = B(
      () => h.value.find((oe) => oe.is_current)
    ), K = B(() => {
      if (!m.value.trim()) return h.value;
      const oe = m.value.toLowerCase();
      return h.value.filter(
        (E) => {
          var G;
          return E.name.toLowerCase().includes(oe) || ((G = E.current_branch) == null ? void 0 : G.toLowerCase().includes(oe));
        }
      );
    });
    function P() {
      const oe = C.value.trim();
      if (!oe) return;
      const E = {
        name: oe,
        python_version: L.value,
        comfyui_version: w.value,
        torch_backend: _.value,
        switch_after: k.value
      };
      r("create", E), O();
    }
    function T() {
      O();
    }
    function O() {
      C.value = "", L.value = qt, w.value = "latest", _.value = Kt, k.value = !1, u.value = !1;
    }
    async function z() {
      if (u.value = !0, R.value.length <= 1) {
        A.value = !0;
        try {
          R.value = await g();
        } catch (oe) {
          console.error("Failed to load ComfyUI releases:", oe);
        } finally {
          A.value = !1;
        }
      }
    }
    function S(oe) {
      M.value = oe;
    }
    function V(oe) {
      M.value = null, r("switch", oe);
    }
    function W(oe) {
      r("delete", oe);
    }
    async function X() {
      v.value = !0, i.value = null;
      try {
        h.value = await p();
      } catch (oe) {
        i.value = oe instanceof Error ? oe.message : "Failed to load environments";
      } finally {
        v.value = !1;
      }
    }
    return _e(X), c({
      loadEnvironments: X
    }), (oe, E) => (o(), s(H, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (G) => $.value = !0)
          }, {
            actions: l(() => [
              f(Z, {
                variant: "primary",
                size: "sm",
                onClick: z
              }, {
                default: l(() => [...E[10] || (E[10] = [
                  y(" Create ", -1)
                ])]),
                _: 1
              }),
              f(Z, {
                variant: "secondary",
                size: "sm",
                onClick: X
              }, {
                default: l(() => [...E[11] || (E[11] = [
                  y(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          f(dt, {
            modelValue: m.value,
            "onUpdate:modelValue": E[1] || (E[1] = (G) => m.value = G),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          v.value ? (o(), x(He, {
            key: 0,
            message: "Loading environments..."
          })) : i.value ? (o(), x(qe, {
            key: 1,
            message: i.value,
            retry: !0,
            onRetry: X
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            u.value ? (o(), s("div", gv, [
              e("div", pv, [
                E[13] || (E[13] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                f(Z, {
                  variant: "ghost",
                  size: "xs",
                  onClick: T
                }, {
                  default: l(() => [...E[12] || (E[12] = [
                    y(" ✕ ", -1)
                  ])]),
                  _: 1
                })
              ]),
              e("div", hv, [
                e("div", yv, [
                  E[14] || (E[14] = e("label", { class: "form-label" }, "Name", -1)),
                  f(Ct, {
                    modelValue: C.value,
                    "onUpdate:modelValue": E[2] || (E[2] = (G) => C.value = G),
                    placeholder: "my-environment",
                    onKeyup: Je(T, ["esc"])
                  }, null, 8, ["modelValue"])
                ]),
                e("div", wv, [
                  E[15] || (E[15] = e("label", { class: "form-label" }, "Python Version", -1)),
                  kt(e("select", {
                    "onUpdate:modelValue": E[3] || (E[3] = (G) => L.value = G),
                    class: "form-select"
                  }, [
                    (o(!0), s(H, null, se(me(Wm), (G) => (o(), s("option", {
                      key: G,
                      value: G
                    }, a(G), 9, kv))), 128))
                  ], 512), [
                    [Lt, L.value]
                  ])
                ]),
                e("div", bv, [
                  E[16] || (E[16] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                  kt(e("select", {
                    "onUpdate:modelValue": E[4] || (E[4] = (G) => w.value = G),
                    class: "form-select",
                    disabled: A.value
                  }, [
                    (o(!0), s(H, null, se(R.value, (G) => (o(), s("option", {
                      key: G.tag_name,
                      value: G.tag_name
                    }, a(G.name), 9, $v))), 128))
                  ], 8, _v), [
                    [Lt, w.value]
                  ])
                ]),
                e("div", Cv, [
                  E[17] || (E[17] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                  kt(e("select", {
                    "onUpdate:modelValue": E[5] || (E[5] = (G) => _.value = G),
                    class: "form-select"
                  }, [
                    (o(!0), s(H, null, se(me(Gm), (G) => (o(), s("option", {
                      key: G,
                      value: G
                    }, a(G) + a(G === "auto" ? " (detect GPU)" : ""), 9, xv))), 128))
                  ], 512), [
                    [Lt, _.value]
                  ])
                ]),
                e("div", Sv, [
                  e("label", Iv, [
                    kt(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": E[6] || (E[6] = (G) => k.value = G)
                    }, null, 512), [
                      [_o, k.value]
                    ]),
                    E[18] || (E[18] = e("span", null, "Switch to this environment after creation", -1))
                  ])
                ]),
                e("div", Ev, [
                  f(Z, {
                    variant: "primary",
                    size: "sm",
                    onClick: P,
                    disabled: !C.value.trim()
                  }, {
                    default: l(() => [...E[19] || (E[19] = [
                      y(" Create ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"]),
                  f(Z, {
                    variant: "secondary",
                    size: "sm",
                    onClick: T
                  }, {
                    default: l(() => [...E[20] || (E[20] = [
                      y(" Cancel ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ])
            ])) : d("", !0),
            h.value.length ? (o(), x(ct, {
              key: 1,
              variant: "compact"
            }, {
              default: l(() => [
                y(" Total: " + a(h.value.length) + " " + a(h.value.length === 1 ? "environment" : "environments") + " ", 1),
                j.value ? (o(), s(H, { key: 0 }, [
                  E[21] || (E[21] = y(" • Current: ", -1)),
                  e("strong", null, a(j.value.name), 1)
                ], 64)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            K.value.length ? (o(), x(be, {
              key: 2,
              title: "ENVIRONMENTS",
              count: K.value.length
            }, {
              default: l(() => [
                (o(!0), s(H, null, se(K.value, (G) => (o(), x(Jm, {
                  key: G.name,
                  "environment-name": G.name,
                  "is-current": G.is_current,
                  "current-branch": G.current_branch,
                  "show-last-used": !1
                }, {
                  actions: l(() => [
                    G.is_current ? d("", !0) : (o(), x(Z, {
                      key: 0,
                      variant: "secondary",
                      size: "sm",
                      onClick: (N) => oe.$emit("switch", G.name)
                    }, {
                      default: l(() => [...E[22] || (E[22] = [
                        y(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    f(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (N) => S(G)
                    }, {
                      default: l(() => [...E[23] || (E[23] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    !G.is_current && h.value.length > 1 ? (o(), x(Z, {
                      key: 1,
                      variant: "destructive",
                      size: "sm",
                      onClick: (N) => W(G.name)
                    }, {
                      default: l(() => [...E[24] || (E[24] = [
                        y(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0)
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            K.value.length ? d("", !0) : (o(), x(Ue, {
              key: 3,
              icon: "🌍",
              message: m.value ? `No environments match '${m.value}'` : "No environments found. Create one to get started!"
            }, Mt({ _: 2 }, [
              m.value ? void 0 : {
                name: "actions",
                fn: l(() => [
                  f(Z, {
                    variant: "primary",
                    onClick: z
                  }, {
                    default: l(() => [...E[25] || (E[25] = [
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
      f(je, {
        show: $.value,
        title: "About Environments",
        onClose: E[8] || (E[8] = (G) => $.value = !1)
      }, {
        content: l(() => [...E[26] || (E[26] = [
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
        actions: l(() => [
          f(Z, {
            variant: "secondary",
            onClick: E[7] || (E[7] = (G) => $.value = !1)
          }, {
            default: l(() => [...E[27] || (E[27] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      M.value ? (o(), x(fv, {
        key: 0,
        environment: M.value,
        onClose: E[9] || (E[9] = (G) => M.value = null),
        onSwitch: V
      }, null, 8, ["environment"])) : d("", !0)
    ], 64));
  }
}), zv = /* @__PURE__ */ Y(Mv, [["__scopeId", "data-v-96fd2395"]]), Lv = { class: "file-path" }, Tv = { class: "file-path-text" }, Dv = ["title"], Rv = /* @__PURE__ */ Q({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = b(!1);
    async function r() {
      try {
        await navigator.clipboard.writeText(c.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (p) {
        console.error("Failed to copy:", p);
      }
    }
    return (p, g) => (o(), s("div", Lv, [
      g[0] || (g[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Tv, a(t.path), 1),
      t.copyable ? (o(), s("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: r
      }, a(n.value ? "✓" : "📋"), 9, Dv)) : d("", !0)
    ]));
  }
}), Nv = /* @__PURE__ */ Y(Rv, [["__scopeId", "data-v-f0982173"]]), Uv = { class: "output-path-input" }, Ov = { class: "export-actions" }, Bv = {
  key: 1,
  class: "export-warning"
}, Pv = /* @__PURE__ */ Q({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: c } = Se(), n = b(""), r = b(!1), p = b(null), g = b(!1);
    async function h() {
      r.value = !0, p.value = null;
      try {
        const i = await c(n.value || void 0);
        p.value = i;
      } catch (i) {
        p.value = {
          status: "error",
          message: i instanceof Error ? i.message : "Unknown error occurred"
        };
      } finally {
        r.value = !1;
      }
    }
    async function v() {
      var i;
      if ((i = p.value) != null && i.path)
        try {
          await navigator.clipboard.writeText(p.value.path);
        } catch (m) {
          console.error("Failed to copy path:", m);
        }
    }
    return (i, m) => (o(), s(H, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, { title: "EXPORT ENVIRONMENT" }, {
            actions: l(() => [
              f(Z, {
                variant: "ghost",
                size: "sm",
                onClick: m[0] || (m[0] = ($) => g.value = !0),
                title: "About exporting"
              }, {
                default: l(() => [...m[5] || (m[5] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }),
                    e("path", { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" })
                  ], -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          f(be, { title: "WHAT WILL BE EXPORTED" }, {
            default: l(() => [
              f(Ce, { status: "synced" }, {
                icon: l(() => [...m[6] || (m[6] = [
                  y("📦", -1)
                ])]),
                title: l(() => [...m[7] || (m[7] = [
                  y("Environment Snapshot", -1)
                ])]),
                subtitle: l(() => [...m[8] || (m[8] = [
                  y(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: l(() => [
                  f(pe, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  f(pe, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  f(pe, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  f(pe, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          f(be, { title: "EXPORT OPTIONS" }, {
            default: l(() => [
              f(Ce, { status: "synced" }, {
                icon: l(() => [...m[9] || (m[9] = [
                  y("📁", -1)
                ])]),
                title: l(() => [...m[10] || (m[10] = [
                  y("Output Destination", -1)
                ])]),
                subtitle: l(() => [...m[11] || (m[11] = [
                  y(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: l(() => [
                  e("div", Uv, [
                    f(Ct, {
                      modelValue: n.value,
                      "onUpdate:modelValue": m[1] || (m[1] = ($) => n.value = $),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          f(be, { title: "EXPORT" }, {
            default: l(() => [
              e("div", Ov, [
                f(Z, {
                  variant: "primary",
                  size: "md",
                  loading: r.value,
                  disabled: r.value,
                  onClick: h
                }, {
                  default: l(() => [
                    m[12] || (m[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    y(" " + a(r.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                n.value ? (o(), x(Z, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: r.value,
                  onClick: m[2] || (m[2] = ($) => n.value = "")
                }, {
                  default: l(() => [...m[13] || (m[13] = [
                    y(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : d("", !0)
              ])
            ]),
            _: 1
          }),
          p.value ? (o(), x(be, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: l(() => [
              f(Ce, {
                status: p.value.status === "success" ? "synced" : "broken"
              }, Mt({
                icon: l(() => [
                  y(a(p.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: l(() => [
                  y(a(p.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: l(() => [
                  y(a(p.value.status === "success" ? "Your environment has been exported" : p.value.message), 1)
                ]),
                _: 2
              }, [
                p.value.status === "success" ? {
                  name: "details",
                  fn: l(() => [
                    f(pe, { label: "Saved to:" }, {
                      default: l(() => [
                        f(Nv, {
                          path: p.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    p.value.models_without_sources !== void 0 ? (o(), x(pe, {
                      key: 0,
                      label: "Models without sources:",
                      value: p.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : d("", !0),
                    p.value.models_without_sources && p.value.models_without_sources > 0 ? (o(), s("div", Bv, [...m[14] || (m[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : d("", !0)
                  ]),
                  key: "0"
                } : void 0,
                p.value.status === "success" ? {
                  name: "actions",
                  fn: l(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: v
                    }, {
                      default: l(() => [...m[15] || (m[15] = [
                        y(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    f(Z, {
                      variant: "ghost",
                      size: "sm",
                      onClick: m[3] || (m[3] = ($) => p.value = null)
                    }, {
                      default: l(() => [...m[16] || (m[16] = [
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
          })) : d("", !0)
        ]),
        _: 1
      }),
      f(je, {
        show: g.value,
        title: "About Environment Export",
        onClose: m[4] || (m[4] = ($) => g.value = !1)
      }, {
        content: l(() => [...m[17] || (m[17] = [
          e("p", null, " Exporting creates a portable bundle of your environment that can be: ", -1),
          e("ul", null, [
            e("li", null, "Shared with collaborators"),
            e("li", null, "Backed up for safekeeping"),
            e("li", null, "Imported into other ComfyGit workspaces"),
            e("li", null, "Version controlled separately")
          ], -1),
          e("p", null, [
            e("strong", null, "Note:"),
            y(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Vv = /* @__PURE__ */ Y(Pv, [["__scopeId", "data-v-1777a9d5"]]), Fv = { class: "file-input-wrapper" }, Av = ["accept", "multiple", "disabled"], Wv = /* @__PURE__ */ Q({
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
    const r = n, p = b(null);
    function g() {
      var v;
      (v = p.value) == null || v.click();
    }
    function h(v) {
      const i = v.target;
      i.files && i.files.length > 0 && (r("change", i.files), i.value = "");
    }
    return c({
      triggerInput: g
    }), (v, i) => (o(), s("div", Fv, [
      e("input", {
        ref_key: "fileInputRef",
        ref: p,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: h
      }, null, 40, Av),
      f(Z, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: g
      }, {
        default: l(() => [
          ue(v.$slots, "default", {}, () => [
            i[0] || (i[0] = e("svg", {
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
}), Gv = /* @__PURE__ */ Y(Wv, [["__scopeId", "data-v-cd192091"]]), jv = {
  key: 0,
  class: "drop-zone-empty"
}, Hv = { class: "drop-zone-text" }, qv = { class: "drop-zone-primary" }, Kv = { class: "drop-zone-secondary" }, Jv = { class: "drop-zone-actions" }, Qv = {
  key: 1,
  class: "drop-zone-file"
}, Yv = { class: "file-info" }, Xv = { class: "file-details" }, Zv = { class: "file-name" }, ef = { class: "file-size" }, tf = /* @__PURE__ */ Q({
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
    const n = c, r = b(!1), p = b(null), g = b(0), h = B(() => p.value !== null), v = B(() => {
      var _;
      return ((_ = p.value) == null ? void 0 : _.name) || "";
    }), i = B(() => {
      if (!p.value) return "";
      const _ = p.value.size;
      return _ < 1024 ? `${_} B` : _ < 1024 * 1024 ? `${(_ / 1024).toFixed(1)} KB` : _ < 1024 * 1024 * 1024 ? `${(_ / (1024 * 1024)).toFixed(1)} MB` : `${(_ / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m(_) {
      var k;
      g.value++, (k = _.dataTransfer) != null && k.types.includes("Files") && (r.value = !0);
    }
    function $(_) {
      _.dataTransfer && (_.dataTransfer.dropEffect = "copy");
    }
    function u() {
      g.value--, g.value === 0 && (r.value = !1);
    }
    function M(_) {
      var R;
      g.value = 0, r.value = !1;
      const k = (R = _.dataTransfer) == null ? void 0 : R.files;
      k && k.length > 0 && L(k[0]);
    }
    function C(_) {
      _.length > 0 && L(_[0]);
    }
    function L(_) {
      p.value = _, n("fileSelected", _);
    }
    function w() {
      p.value = null, n("clear");
    }
    return (_, k) => (o(), s("div", {
      class: ne(["file-drop-zone", { "drop-active": r.value, "has-file": h.value }]),
      onDragenter: ke(m, ["prevent"]),
      onDragover: ke($, ["prevent"]),
      onDragleave: ke(u, ["prevent"]),
      onDrop: ke(M, ["prevent"])
    }, [
      h.value ? (o(), s("div", Qv, [
        e("div", Yv, [
          k[1] || (k[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Xv, [
            e("div", Zv, a(v.value), 1),
            e("div", ef, a(i.value), 1)
          ])
        ]),
        f(Z, {
          variant: "ghost",
          size: "xs",
          onClick: w,
          title: "Remove file"
        }, {
          default: l(() => [...k[2] || (k[2] = [
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
      ])) : (o(), s("div", jv, [
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
        e("div", Hv, [
          e("p", qv, a(t.primaryText), 1),
          e("p", Kv, a(t.secondaryText), 1)
        ]),
        e("div", Jv, [
          f(Gv, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: C
          }, {
            default: l(() => [
              y(a(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), of = /* @__PURE__ */ Y(tf, [["__scopeId", "data-v-e00abbca"]]), sf = { class: "import-preview" }, nf = { class: "preview-header" }, af = {
  key: 0,
  class: "source-env"
}, lf = { class: "preview-content" }, rf = { class: "preview-section" }, df = { class: "section-header" }, cf = { class: "section-info" }, uf = { class: "section-count" }, mf = {
  key: 0,
  class: "item-list"
}, vf = { class: "item-name" }, ff = {
  key: 0,
  class: "item-more"
}, gf = { class: "preview-section" }, pf = { class: "section-header" }, hf = { class: "section-info" }, yf = { class: "section-count" }, wf = {
  key: 0,
  class: "item-list"
}, kf = { class: "item-details" }, bf = { class: "item-name" }, _f = { class: "item-meta" }, $f = {
  key: 0,
  class: "item-more"
}, Cf = { class: "preview-section" }, xf = { class: "section-header" }, Sf = { class: "section-info" }, If = { class: "section-count" }, Ef = {
  key: 0,
  class: "item-list"
}, Mf = { class: "item-name" }, zf = {
  key: 0,
  class: "item-more"
}, Lf = {
  key: 0,
  class: "preview-section"
}, Tf = { class: "git-info" }, Df = /* @__PURE__ */ Q({
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
    const c = t, n = B(() => c.workflows.length), r = B(() => c.models.length), p = B(() => c.nodes.length);
    function g(h) {
      return h < 1024 ? `${h} B` : h < 1024 * 1024 ? `${(h / 1024).toFixed(1)} KB` : h < 1024 * 1024 * 1024 ? `${(h / (1024 * 1024)).toFixed(1)} MB` : `${(h / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (h, v) => (o(), s("div", sf, [
      e("div", nf, [
        f(ze, null, {
          default: l(() => [...v[0] || (v[0] = [
            y("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), s("span", af, [
          v[1] || (v[1] = y(" From: ", -1)),
          f(Ut, null, {
            default: l(() => [
              y(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : d("", !0)
      ]),
      e("div", lf, [
        e("div", rf, [
          e("div", df, [
            v[3] || (v[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", cf, [
              v[2] || (v[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", uf, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), s("div", mf, [
            (o(!0), s(H, null, se(t.workflows.slice(0, t.maxPreviewItems), (i) => (o(), s("div", {
              key: i,
              class: "preview-item"
            }, [
              v[4] || (v[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", vf, a(i), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), s("div", ff, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", gf, [
          e("div", pf, [
            v[6] || (v[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", hf, [
              v[5] || (v[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", yf, a(r.value) + " file" + a(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), s("div", wf, [
            (o(!0), s(H, null, se(t.models.slice(0, t.maxPreviewItems), (i) => (o(), s("div", {
              key: i.filename,
              class: "preview-item"
            }, [
              v[7] || (v[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", kf, [
                e("span", bf, a(i.filename), 1),
                e("span", _f, a(g(i.size)) + " • " + a(i.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), s("div", $f, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", Cf, [
          e("div", xf, [
            v[9] || (v[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", Sf, [
              v[8] || (v[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", If, a(p.value) + " node" + a(p.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), s("div", Ef, [
            (o(!0), s(H, null, se(t.nodes.slice(0, t.maxPreviewItems), (i) => (o(), s("div", {
              key: i,
              class: "preview-item"
            }, [
              v[10] || (v[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Mf, a(i), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), s("div", zf, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), s("div", Lf, [
          v[11] || (v[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", Tf, [
            t.gitBranch ? (o(), x(pe, {
              key: 0,
              label: "Branch"
            }, {
              default: l(() => [
                f(Ut, null, {
                  default: l(() => [
                    y(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : d("", !0),
            t.gitCommit ? (o(), x(pe, {
              key: 1,
              label: "Commit"
            }, {
              default: l(() => [
                f(eo, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : d("", !0)
          ])
        ])) : d("", !0)
      ])
    ]));
  }
}), Rf = /* @__PURE__ */ Y(Df, [["__scopeId", "data-v-182fe113"]]), Nf = { class: "import-options" }, Uf = { class: "options-container" }, Of = { class: "option-section" }, Bf = { class: "conflict-options" }, Pf = ["value", "checked", "onChange"], Vf = { class: "conflict-content" }, Ff = { class: "conflict-label" }, Af = { class: "conflict-description" }, Wf = { class: "option-section" }, Gf = { class: "component-toggles" }, jf = /* @__PURE__ */ Q({
  __name: "ImportOptions",
  props: {
    conflictMode: {},
    includeWorkflows: { type: Boolean },
    includeModels: { type: Boolean },
    includeNodes: { type: Boolean },
    includeGitHistory: { type: Boolean }
  },
  emits: ["update:conflictMode", "update:includeWorkflows", "update:includeModels", "update:includeNodes", "update:includeGitHistory"],
  setup(t, { emit: c }) {
    const n = c, r = [
      {
        value: "overwrite",
        label: "Overwrite Existing",
        description: "Replace existing workflows and models"
      },
      {
        value: "keep",
        label: "Keep Existing",
        description: "Skip files that already exist"
      },
      {
        value: "rename",
        label: "Rename New",
        description: "Add suffix to imported files"
      }
    ];
    return (p, g) => (o(), s("div", Nf, [
      f(ze, null, {
        default: l(() => [...g[4] || (g[4] = [
          y("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", Uf, [
        e("div", Of, [
          f(Nt, null, {
            default: l(() => [...g[5] || (g[5] = [
              y("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", Bf, [
            (o(), s(H, null, se(r, (h) => e("label", {
              key: h.value,
              class: ne(["conflict-option", { active: t.conflictMode === h.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: h.value,
                checked: t.conflictMode === h.value,
                onChange: (v) => n("update:conflictMode", h.value)
              }, null, 40, Pf),
              e("div", Vf, [
                e("span", Ff, a(h.label), 1),
                e("span", Af, a(h.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Wf, [
          f(Nt, null, {
            default: l(() => [...g[6] || (g[6] = [
              y("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Gf, [
            f(Ge, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: l(() => [
                f(ot, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": g[0] || (g[0] = (h) => n("update:includeWorkflows", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(Ge, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: l(() => [
                f(ot, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": g[1] || (g[1] = (h) => n("update:includeModels", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(Ge, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: l(() => [
                f(ot, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": g[2] || (g[2] = (h) => n("update:includeNodes", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(Ge, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: l(() => [
                f(ot, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": g[3] || (g[3] = (h) => n("update:includeGitHistory", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Hf = /* @__PURE__ */ Y(jf, [["__scopeId", "data-v-0ec212b0"]]), qf = {
  key: 0,
  class: "import-empty"
}, Kf = { class: "import-help" }, Jf = {
  key: 1,
  class: "import-configure"
}, Qf = { class: "selected-file-bar" }, Yf = { class: "file-bar-content" }, Xf = { class: "file-bar-info" }, Zf = { class: "file-bar-name" }, eg = { class: "file-bar-size" }, tg = { class: "import-actions" }, og = {
  key: 2,
  class: "import-progress"
}, sg = { class: "progress-content" }, ng = { class: "progress-info" }, ag = { class: "progress-title" }, lg = { class: "progress-detail" }, ig = { class: "progress-bar" }, rg = { class: "progress-status" }, dg = {
  key: 3,
  class: "import-complete"
}, cg = { class: "complete-message" }, ug = { class: "complete-title" }, mg = { class: "complete-details" }, vg = { class: "complete-actions" }, fg = /* @__PURE__ */ Q({
  __name: "ImportSection",
  setup(t) {
    const c = b(null), n = b(!1), r = b(!1), p = b(!1), g = b(""), h = b({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), v = b({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), i = b({
      sourceEnvironment: "production-env",
      workflows: [
        "workflow-1.json",
        "workflow-2.json",
        "complex-workflow.json"
      ],
      models: [
        { filename: "sd_xl_base_1.0.safetensors", size: 6938025472, type: "Stable-diffusion" },
        { filename: "controlnet_canny.safetensors", size: 1445075712, type: "ControlNet" },
        { filename: "vae.safetensors", size: 334643200, type: "VAE" }
      ],
      nodes: [
        "comfyui-impact-pack",
        "comfyui-controlnet-aux",
        "comfyui-custom-scripts"
      ],
      gitBranch: "main",
      gitCommit: "a1b2c3d"
    }), m = B(() => h.value.includeWorkflows || h.value.includeModels || h.value.includeNodes || h.value.includeGitHistory);
    function $(w) {
      c.value = w;
    }
    function u() {
      c.value = null, r.value = !1, p.value = !1, g.value = "";
    }
    function M() {
      u(), n.value = !1, v.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function C() {
      if (c.value) {
        n.value = !0, r.value = !1;
        try {
          const w = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${i.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${i.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${i.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const _ of w)
            v.value = _, await new Promise((k) => setTimeout(k, 800));
          v.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((_) => setTimeout(_, 500)), p.value = !0, g.value = `Successfully imported ${i.value.workflows.length} workflows, ${i.value.models.length} models, and ${i.value.nodes.length} custom nodes.`;
        } catch (w) {
          p.value = !1, g.value = w instanceof Error ? w.message : "Unknown error occurred during import";
        } finally {
          n.value = !1, r.value = !0;
        }
      }
    }
    function L(w) {
      return w < 1024 ? `${w} B` : w < 1024 * 1024 ? `${(w / 1024).toFixed(1)} KB` : w < 1024 * 1024 * 1024 ? `${(w / (1024 * 1024)).toFixed(1)} MB` : `${(w / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (w, _) => (o(), x(Ie, null, {
      header: l(() => [
        f(Ee, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: l(() => [
        !c.value && !n.value ? (o(), s("div", qf, [
          f(of, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: $
          }),
          e("div", Kf, [
            f(ze, null, {
              default: l(() => [..._[5] || (_[5] = [
                y("How to Import", -1)
              ])]),
              _: 1
            }),
            _[6] || (_[6] = e("div", { class: "help-content" }, [
              e("div", { class: "help-item" }, [
                e("span", { class: "help-number" }, "1"),
                e("div", { class: "help-text" }, [
                  e("div", { class: "help-title" }, "Select Export File"),
                  e("div", { class: "help-description" }, " Choose a ComfyGit environment export file created with the EXPORT feature ")
                ])
              ]),
              e("div", { class: "help-item" }, [
                e("span", { class: "help-number" }, "2"),
                e("div", { class: "help-text" }, [
                  e("div", { class: "help-title" }, "Review Preview"),
                  e("div", { class: "help-description" }, " Check what workflows, models, and nodes will be imported ")
                ])
              ]),
              e("div", { class: "help-item" }, [
                e("span", { class: "help-number" }, "3"),
                e("div", { class: "help-text" }, [
                  e("div", { class: "help-title" }, "Configure Options"),
                  e("div", { class: "help-description" }, " Choose how to handle conflicts and which components to import ")
                ])
              ]),
              e("div", { class: "help-item" }, [
                e("span", { class: "help-number" }, "4"),
                e("div", { class: "help-text" }, [
                  e("div", { class: "help-title" }, "Import"),
                  e("div", { class: "help-description" }, " Start the import process and wait for completion ")
                ])
              ])
            ], -1))
          ])
        ])) : c.value && !n.value && !r.value ? (o(), s("div", Jf, [
          e("div", Qf, [
            e("div", Yf, [
              _[7] || (_[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Xf, [
                e("div", Zf, a(c.value.name), 1),
                e("div", eg, a(L(c.value.size)), 1)
              ])
            ]),
            f(Z, {
              variant: "ghost",
              size: "sm",
              onClick: u
            }, {
              default: l(() => [..._[8] || (_[8] = [
                y(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          f(Rf, {
            "source-environment": i.value.sourceEnvironment,
            workflows: i.value.workflows,
            models: i.value.models,
            nodes: i.value.nodes,
            "git-branch": i.value.gitBranch,
            "git-commit": i.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          f(Hf, {
            "conflict-mode": h.value.conflictMode,
            "onUpdate:conflictMode": _[0] || (_[0] = (k) => h.value.conflictMode = k),
            "include-workflows": h.value.includeWorkflows,
            "onUpdate:includeWorkflows": _[1] || (_[1] = (k) => h.value.includeWorkflows = k),
            "include-models": h.value.includeModels,
            "onUpdate:includeModels": _[2] || (_[2] = (k) => h.value.includeModels = k),
            "include-nodes": h.value.includeNodes,
            "onUpdate:includeNodes": _[3] || (_[3] = (k) => h.value.includeNodes = k),
            "include-git-history": h.value.includeGitHistory,
            "onUpdate:includeGitHistory": _[4] || (_[4] = (k) => h.value.includeGitHistory = k)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !h.value.includeModels && i.value.models.length > 0 ? (o(), x(at, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${i.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : d("", !0),
          e("div", tg, [
            f(Z, {
              variant: "primary",
              size: "md",
              disabled: !m.value,
              onClick: C
            }, {
              default: l(() => [..._[9] || (_[9] = [
                e("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M8 12L4 8h3V4h2v4h3L8 12z" }),
                  e("path", { d: "M2 14h12v-2H2v2z" })
                ], -1),
                y(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            f(Z, {
              variant: "secondary",
              size: "md",
              onClick: u
            }, {
              default: l(() => [..._[10] || (_[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : n.value ? (o(), s("div", og, [
          e("div", sg, [
            _[11] || (_[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", ng, [
              e("div", ag, a(v.value.message), 1),
              e("div", lg, a(v.value.detail), 1)
            ])
          ]),
          e("div", ig, [
            e("div", {
              class: "progress-bar-fill",
              style: Qe({ width: `${v.value.percent}%` })
            }, null, 4)
          ]),
          e("div", rg, a(v.value.percent) + "% complete ", 1)
        ])) : r.value ? (o(), s("div", dg, [
          e("div", {
            class: ne(["complete-icon", p.value ? "success" : "error"])
          }, a(p.value ? "✓" : "✕"), 3),
          e("div", cg, [
            e("div", ug, a(p.value ? "Import Successful" : "Import Failed"), 1),
            e("div", mg, a(g.value), 1)
          ]),
          e("div", vg, [
            f(Z, {
              variant: "primary",
              size: "md",
              onClick: M
            }, {
              default: l(() => [..._[12] || (_[12] = [
                y(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : d("", !0)
      ]),
      _: 1
    }));
  }
}), gg = /* @__PURE__ */ Y(fg, [["__scopeId", "data-v-18e18eb5"]]), pg = { class: "header-info" }, hg = { class: "commit-hash" }, yg = {
  key: 0,
  class: "commit-refs"
}, wg = { class: "commit-message" }, kg = { class: "commit-date" }, bg = {
  key: 0,
  class: "loading"
}, _g = {
  key: 1,
  class: "changes-section"
}, $g = { class: "stats-row" }, Cg = { class: "stat" }, xg = { class: "stat insertions" }, Sg = { class: "stat deletions" }, Ig = {
  key: 0,
  class: "change-group"
}, Eg = {
  key: 1,
  class: "change-group"
}, Mg = {
  key: 0,
  class: "version"
}, zg = {
  key: 2,
  class: "change-group"
}, Lg = { class: "change-item" }, Tg = /* @__PURE__ */ Q({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = Se(), r = b(null), p = b(!0), g = B(() => {
      if (!r.value) return !1;
      const v = r.value.changes.workflows;
      return v.added.length > 0 || v.modified.length > 0 || v.deleted.length > 0;
    }), h = B(() => {
      if (!r.value) return !1;
      const v = r.value.changes.nodes;
      return v.added.length > 0 || v.removed.length > 0;
    });
    return _e(async () => {
      try {
        r.value = await n(c.commit.hash);
      } finally {
        p.value = !1;
      }
    }), (v, i) => (o(), x(st, {
      size: "md",
      "show-close-button": !1,
      onClose: i[3] || (i[3] = (m) => v.$emit("close"))
    }, {
      header: l(() => {
        var m, $, u, M;
        return [
          e("div", pg, [
            i[4] || (i[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", hg, a(((m = r.value) == null ? void 0 : m.short_hash) || t.commit.short_hash || (($ = t.commit.hash) == null ? void 0 : $.slice(0, 7))), 1),
            (M = (u = r.value) == null ? void 0 : u.refs) != null && M.length ? (o(), s("span", yg, [
              (o(!0), s(H, null, se(r.value.refs, (C) => (o(), s("span", {
                key: C,
                class: "ref-badge"
              }, a(C), 1))), 128))
            ])) : d("", !0)
          ]),
          f(ie, {
            variant: "ghost",
            size: "sm",
            onClick: i[0] || (i[0] = (C) => v.$emit("close"))
          }, {
            default: l(() => [...i[5] || (i[5] = [
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
        var m, $;
        return [
          e("div", wg, a(((m = r.value) == null ? void 0 : m.message) || t.commit.message), 1),
          e("div", kg, a((($ = r.value) == null ? void 0 : $.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          p.value ? (o(), s("div", bg, "Loading details...")) : r.value ? (o(), s("div", _g, [
            e("div", $g, [
              e("span", Cg, a(r.value.stats.files_changed) + " files", 1),
              e("span", xg, "+" + a(r.value.stats.insertions), 1),
              e("span", Sg, "-" + a(r.value.stats.deletions), 1)
            ]),
            g.value ? (o(), s("div", Ig, [
              f(bt, { variant: "section" }, {
                default: l(() => [...i[6] || (i[6] = [
                  y("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(H, null, se(r.value.changes.workflows.added, (u) => (o(), s("div", {
                key: "add-" + u,
                class: "change-item added"
              }, [
                i[7] || (i[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(u), 1)
              ]))), 128)),
              (o(!0), s(H, null, se(r.value.changes.workflows.modified, (u) => (o(), s("div", {
                key: "mod-" + u,
                class: "change-item modified"
              }, [
                i[8] || (i[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(u), 1)
              ]))), 128)),
              (o(!0), s(H, null, se(r.value.changes.workflows.deleted, (u) => (o(), s("div", {
                key: "del-" + u,
                class: "change-item deleted"
              }, [
                i[9] || (i[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(u), 1)
              ]))), 128))
            ])) : d("", !0),
            h.value ? (o(), s("div", Eg, [
              f(bt, { variant: "section" }, {
                default: l(() => [...i[10] || (i[10] = [
                  y("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(H, null, se(r.value.changes.nodes.added, (u) => (o(), s("div", {
                key: "add-" + u.name,
                class: "change-item added"
              }, [
                i[11] || (i[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(u.name), 1),
                u.version ? (o(), s("span", Mg, "(" + a(u.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (o(!0), s(H, null, se(r.value.changes.nodes.removed, (u) => (o(), s("div", {
                key: "rem-" + u.name,
                class: "change-item deleted"
              }, [
                i[12] || (i[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(u.name), 1)
              ]))), 128))
            ])) : d("", !0),
            r.value.changes.models.resolved > 0 ? (o(), s("div", zg, [
              f(bt, { variant: "section" }, {
                default: l(() => [...i[13] || (i[13] = [
                  y("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", Lg, [
                i[14] || (i[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: l(() => [
        f(ie, {
          variant: "secondary",
          onClick: i[1] || (i[1] = (m) => v.$emit("createBranch", t.commit))
        }, {
          default: l(() => [...i[15] || (i[15] = [
            y(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        f(ie, {
          variant: "primary",
          onClick: i[2] || (i[2] = (m) => v.$emit("checkout", t.commit))
        }, {
          default: l(() => [...i[16] || (i[16] = [
            y(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Dg = /* @__PURE__ */ Y(Tg, [["__scopeId", "data-v-d256ff6d"]]), Rg = { class: "dialog-message" }, Ng = {
  key: 0,
  class: "dialog-details"
}, Ug = {
  key: 1,
  class: "dialog-warning"
}, Og = /* @__PURE__ */ Q({
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
    return (c, n) => (o(), x(st, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (r) => c.$emit("cancel"))
    }, {
      body: l(() => [
        e("p", Rg, a(t.message), 1),
        t.details && t.details.length ? (o(), s("div", Ng, [
          (o(!0), s(H, null, se(t.details, (r, p) => (o(), s("div", {
            key: p,
            class: "detail-item"
          }, " • " + a(r), 1))), 128))
        ])) : d("", !0),
        t.warning ? (o(), s("p", Ug, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          y(" " + a(t.warning), 1)
        ])) : d("", !0)
      ]),
      footer: l(() => [
        f(ie, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (r) => c.$emit("cancel"))
        }, {
          default: l(() => [
            y(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), x(ie, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (r) => c.$emit("secondary"))
        }, {
          default: l(() => [
            y(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        f(ie, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (r) => c.$emit("confirm"))
        }, {
          default: l(() => [
            y(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Bg = /* @__PURE__ */ Y(Og, [["__scopeId", "data-v-3670b9f5"]]), Pg = { class: "base-textarea-wrapper" }, Vg = ["value", "rows", "placeholder", "disabled", "maxlength"], Fg = {
  key: 0,
  class: "base-textarea-count"
}, Ag = /* @__PURE__ */ Q({
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
    return (c, n) => (o(), s("div", Pg, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          n[1] || (n[1] = Je(ke((r) => c.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = Je(ke((r) => c.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Vg),
      t.showCharCount && t.maxLength ? (o(), s("div", Fg, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : d("", !0)
    ]));
  }
}), Jt = /* @__PURE__ */ Y(Ag, [["__scopeId", "data-v-5516e6fc"]]), Wg = ["checked", "disabled"], Gg = { class: "base-checkbox-box" }, jg = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Hg = {
  key: 0,
  class: "base-checkbox-label"
}, qg = /* @__PURE__ */ Q({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (o(), s("label", {
      class: ne(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.checked))
      }, null, 40, Wg),
      e("span", Gg, [
        t.modelValue ? (o(), s("svg", jg, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : d("", !0)
      ]),
      c.$slots.default ? (o(), s("span", Hg, [
        ue(c.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Qt = /* @__PURE__ */ Y(qg, [["__scopeId", "data-v-bf17c831"]]), Kg = { class: "popover-header" }, Jg = { class: "popover-body" }, Qg = {
  key: 0,
  class: "changes-summary"
}, Yg = {
  key: 0,
  class: "change-item"
}, Xg = {
  key: 1,
  class: "change-item"
}, Zg = {
  key: 2,
  class: "change-item"
}, ep = {
  key: 3,
  class: "change-item"
}, tp = {
  key: 4,
  class: "change-item"
}, op = {
  key: 1,
  class: "no-changes"
}, sp = {
  key: 2,
  class: "loading"
}, np = {
  key: 3,
  class: "issues-error"
}, ap = { class: "error-header" }, lp = { class: "error-title" }, ip = { class: "issues-list" }, rp = { class: "message-section" }, dp = { class: "popover-footer" }, cp = {
  key: 1,
  class: "commit-popover"
}, up = { class: "popover-header" }, mp = { class: "popover-body" }, vp = {
  key: 0,
  class: "changes-summary"
}, fp = {
  key: 0,
  class: "change-item"
}, gp = {
  key: 1,
  class: "change-item"
}, pp = {
  key: 2,
  class: "change-item"
}, hp = {
  key: 3,
  class: "change-item"
}, yp = {
  key: 4,
  class: "change-item"
}, wp = {
  key: 1,
  class: "no-changes"
}, kp = {
  key: 2,
  class: "loading"
}, bp = {
  key: 3,
  class: "issues-error"
}, _p = { class: "error-header" }, $p = { class: "error-title" }, Cp = { class: "issues-list" }, xp = { class: "message-section" }, Sp = { class: "popover-footer" }, Ip = /* @__PURE__ */ Q({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, r = c, { commit: p } = Se(), g = b(""), h = b(!1), v = b(!1), i = b(null), m = B(() => {
      if (!n.status) return !1;
      const L = n.status.workflows;
      return L.new.length > 0 || L.modified.length > 0 || L.deleted.length > 0 || n.status.has_changes;
    }), $ = B(() => {
      var L;
      return (L = n.status) != null && L.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (w) => w.has_issues && (w.sync_state === "new" || w.sync_state === "modified")
      ) : [];
    }), u = B(() => $.value.length > 0), M = B(() => u.value && !v.value);
    async function C() {
      var L, w, _;
      if (!(u.value && !v.value) && !(!m.value || !g.value.trim() || h.value)) {
        h.value = !0, i.value = null;
        try {
          const k = await p(g.value.trim(), v.value);
          k.status === "success" ? (i.value = {
            type: "success",
            message: `Committed: ${((L = k.summary) == null ? void 0 : L.new) || 0} new, ${((w = k.summary) == null ? void 0 : w.modified) || 0} modified, ${((_ = k.summary) == null ? void 0 : _.deleted) || 0} deleted`
          }, g.value = "", v.value = !1, setTimeout(() => r("committed"), 1e3)) : k.status === "no_changes" ? i.value = { type: "error", message: "No changes to commit" } : k.status === "blocked" ? i.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : i.value = { type: "error", message: k.message || "Commit failed" };
        } catch (k) {
          i.value = { type: "error", message: k instanceof Error ? k.message : "Commit failed" };
        } finally {
          h.value = !1;
        }
      }
    }
    return (L, w) => t.asModal ? (o(), x(xe, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: w[5] || (w[5] = (_) => r("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: w[4] || (w[4] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", Kg, [
            w[11] || (w[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: w[0] || (w[0] = (_) => r("close"))
            }, [...w[10] || (w[10] = [
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
          e("div", Jg, [
            t.status && m.value ? (o(), s("div", Qg, [
              t.status.workflows.new.length ? (o(), s("div", Yg, [
                w[12] || (w[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : d("", !0),
              t.status.workflows.modified.length ? (o(), s("div", Xg, [
                w[13] || (w[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : d("", !0),
              t.status.workflows.deleted.length ? (o(), s("div", Zg, [
                w[14] || (w[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_added.length ? (o(), s("div", ep, [
                w[15] || (w[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), s("div", tp, [
                w[16] || (w[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : d("", !0)
            ])) : t.status ? (o(), s("div", op, " No changes to commit ")) : (o(), s("div", sp, " Loading... ")),
            u.value ? (o(), s("div", np, [
              e("div", ap, [
                w[17] || (w[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", lp, a($.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", ip, [
                (o(!0), s(H, null, se($.value, (_) => (o(), s("div", {
                  key: _.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a(_.name), 1),
                  y(": " + a(_.issue_summary), 1)
                ]))), 128))
              ]),
              f(Qt, {
                modelValue: v.value,
                "onUpdate:modelValue": w[1] || (w[1] = (_) => v.value = _),
                class: "allow-issues-toggle"
              }, {
                default: l(() => [...w[18] || (w[18] = [
                  y(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : d("", !0),
            e("div", rp, [
              f(Jt, {
                modelValue: g.value,
                "onUpdate:modelValue": w[2] || (w[2] = (_) => g.value = _),
                placeholder: M.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
                disabled: !m.value || h.value || M.value,
                rows: 3,
                onCtrlEnter: C
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            i.value ? (o(), s("div", {
              key: 4,
              class: ne(["result", i.value.type])
            }, a(i.value.message), 3)) : d("", !0)
          ]),
          e("div", dp, [
            f(ie, {
              variant: "secondary",
              onClick: w[3] || (w[3] = (_) => r("close"))
            }, {
              default: l(() => [...w[19] || (w[19] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: v.value ? "danger" : "primary",
              disabled: !m.value || !g.value.trim() || h.value || M.value,
              loading: h.value,
              onClick: C
            }, {
              default: l(() => [
                y(a(h.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), s("div", cp, [
      e("div", up, [
        w[21] || (w[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: w[6] || (w[6] = (_) => r("close"))
        }, [...w[20] || (w[20] = [
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
      e("div", mp, [
        t.status && m.value ? (o(), s("div", vp, [
          t.status.workflows.new.length ? (o(), s("div", fp, [
            w[22] || (w[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          t.status.workflows.modified.length ? (o(), s("div", gp, [
            w[23] || (w[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          t.status.workflows.deleted.length ? (o(), s("div", pp, [
            w[24] || (w[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_added.length ? (o(), s("div", hp, [
            w[25] || (w[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), s("div", yp, [
            w[26] || (w[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0)
        ])) : t.status ? (o(), s("div", wp, " No changes to commit ")) : (o(), s("div", kp, " Loading... ")),
        u.value ? (o(), s("div", bp, [
          e("div", _p, [
            w[27] || (w[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", $p, a($.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", Cp, [
            (o(!0), s(H, null, se($.value, (_) => (o(), s("div", {
              key: _.name,
              class: "issue-item"
            }, [
              e("strong", null, a(_.name), 1),
              y(": " + a(_.issue_summary), 1)
            ]))), 128))
          ]),
          f(Qt, {
            modelValue: v.value,
            "onUpdate:modelValue": w[7] || (w[7] = (_) => v.value = _),
            class: "allow-issues-toggle"
          }, {
            default: l(() => [...w[28] || (w[28] = [
              y(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : d("", !0),
        e("div", xp, [
          f(Jt, {
            modelValue: g.value,
            "onUpdate:modelValue": w[8] || (w[8] = (_) => g.value = _),
            placeholder: M.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || h.value || M.value,
            rows: 3,
            onCtrlEnter: C
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        i.value ? (o(), s("div", {
          key: 4,
          class: ne(["result", i.value.type])
        }, a(i.value.message), 3)) : d("", !0)
      ]),
      e("div", Sp, [
        f(ie, {
          variant: "secondary",
          onClick: w[9] || (w[9] = (_) => r("close"))
        }, {
          default: l(() => [...w[29] || (w[29] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        f(ie, {
          variant: v.value ? "danger" : "primary",
          disabled: !m.value || !g.value.trim() || h.value || M.value,
          loading: h.value,
          onClick: C
        }, {
          default: l(() => [
            y(a(h.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), no = /* @__PURE__ */ Y(Ip, [["__scopeId", "data-v-d92153de"]]), Ep = { class: "modal-header" }, Mp = { class: "modal-body" }, zp = { class: "switch-message" }, Lp = { class: "switch-details" }, Tp = { class: "modal-actions" }, Dp = /* @__PURE__ */ Q({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (o(), x(xe, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", Ep, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Mp, [
            e("p", zp, [
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
            e("p", Lp, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Tp, [
            f(Z, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => c.$emit("close"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(Z, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => c.$emit("confirm"))
            }, {
              default: l(() => [...n[12] || (n[12] = [
                y(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), Rp = /* @__PURE__ */ Y(Dp, [["__scopeId", "data-v-e9c5253e"]]), Np = { class: "progress-bar" }, Up = /* @__PURE__ */ Q({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, n = B(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (r, p) => (o(), s("div", Np, [
      e("div", {
        class: ne(["progress-fill", t.variant]),
        style: Qe({ width: n.value })
      }, null, 6)
    ]));
  }
}), Op = /* @__PURE__ */ Y(Up, [["__scopeId", "data-v-1beb0512"]]), Bp = {
  key: 0,
  class: "modal-overlay"
}, Pp = { class: "modal-content" }, Vp = { class: "modal-body" }, Fp = { class: "progress-info" }, Ap = { class: "progress-percentage" }, Wp = { class: "progress-state" }, Gp = { class: "switch-steps" }, jp = { class: "step-icon" }, Hp = { class: "step-label" }, qp = /* @__PURE__ */ Q({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, n = B(() => {
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
    }), r = B(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), p = B(() => {
      const g = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], h = g.findIndex((v) => v.state === c.state);
      return g.map((v, i) => {
        let m = "pending", $ = "○";
        return i < h ? (m = "completed", $ = "✓") : i === h && (m = "active", $ = "⟳"), {
          ...v,
          status: m,
          icon: $
        };
      });
    });
    return (g, h) => (o(), x(xe, { to: "body" }, [
      t.show ? (o(), s("div", Bp, [
        e("div", Pp, [
          h[1] || (h[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Vp, [
            f(Op, {
              progress: t.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            e("div", Fp, [
              e("div", Ap, a(t.progress) + "%", 1),
              e("div", Wp, a(n.value), 1)
            ]),
            e("div", Gp, [
              (o(!0), s(H, null, se(p.value, (v) => (o(), s("div", {
                key: v.state,
                class: ne(["switch-step", v.status])
              }, [
                e("span", jp, a(v.icon), 1),
                e("span", Hp, a(v.label), 1)
              ], 2))), 128))
            ]),
            h[0] || (h[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), Kp = /* @__PURE__ */ Y(qp, [["__scopeId", "data-v-768a5078"]]), Jp = { class: "modal-header" }, Qp = { class: "modal-body" }, Yp = {
  key: 0,
  class: "node-section"
}, Xp = { class: "node-list" }, Zp = {
  key: 1,
  class: "node-section"
}, eh = { class: "node-list" }, th = { class: "modal-actions" }, oh = /* @__PURE__ */ Q({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (o(), x(xe, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = ke(() => {
          }, ["stop"]))
        }, [
          e("div", Jp, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Qp, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), s("div", Yp, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Xp, [
                (o(!0), s(H, null, se(t.mismatchDetails.missing_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item add"
                }, " + " + a(r), 1))), 128))
              ])
            ])) : d("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), s("div", Zp, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", eh, [
                (o(!0), s(H, null, se(t.mismatchDetails.extra_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item remove"
                }, " - " + a(r), 1))), 128))
              ])
            ])) : d("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", th, [
            f(Z, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => c.$emit("close"))
            }, {
              default: l(() => [...n[10] || (n[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(Z, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => c.$emit("confirm"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                y(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), sh = /* @__PURE__ */ Y(oh, [["__scopeId", "data-v-7cad7518"]]);
async function pt(t, c = {}, n = 5e3) {
  const r = new AbortController(), p = setTimeout(() => r.abort(), n);
  try {
    const g = await fetch(t, {
      ...c,
      signal: r.signal
    });
    return clearTimeout(p), g;
  } catch (g) {
    throw clearTimeout(p), g.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : g;
  }
}
function nh() {
  const t = b(null);
  async function c() {
    try {
      const h = await pt(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (h.ok)
        return (await h.json()).port;
    } catch {
    }
    return 8189;
  }
  async function n() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const h = await pt(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!h.ok) throw new Error("Health check failed");
      return await h.json();
    } catch {
      return t.value = await c(), null;
    }
  }
  async function r() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const h = await pt(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!h.ok) throw new Error("Failed to get status");
      return await h.json();
    } catch {
      return null;
    }
  }
  async function p() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await pt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function g() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await pt(
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
    getStatus: r,
    restart: p,
    kill: g
  };
}
const ah = { class: "comfygit-panel" }, lh = { class: "panel-header" }, ih = { class: "header-left" }, rh = {
  key: 0,
  class: "header-info"
}, dh = { class: "header-actions" }, ch = { class: "env-switcher" }, uh = {
  key: 0,
  class: "header-info"
}, mh = { class: "branch-name" }, vh = { class: "panel-main" }, fh = { class: "sidebar" }, gh = { class: "sidebar-section" }, ph = { class: "sidebar-section" }, hh = { class: "sidebar-section" }, yh = { class: "content-area" }, wh = {
  key: 0,
  class: "error-message"
}, kh = {
  key: 1,
  class: "loading"
}, bh = {
  key: 4,
  class: "dialog-overlay"
}, _h = { class: "dialog-content create-progress-dialog" }, $h = { class: "dialog-body create-progress-body" }, Ch = { class: "create-progress-message" }, xh = { class: "dialog-content env-selector-dialog" }, Sh = { class: "dialog-header" }, Ih = { class: "dialog-body" }, Eh = { class: "env-list" }, Mh = { class: "env-info" }, zh = { class: "env-name-row" }, Lh = { class: "env-indicator" }, Th = { class: "env-name" }, Dh = {
  key: 0,
  class: "env-branch"
}, Rh = {
  key: 1,
  class: "current-label"
}, Nh = { class: "env-stats" }, Uh = ["onClick"], Oh = { class: "toast-container" }, Bh = { class: "toast-icon" }, Ph = { class: "toast-message" }, Vh = /* @__PURE__ */ Q({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const n = c, {
      getStatus: r,
      getHistory: p,
      getBranches: g,
      checkout: h,
      createBranch: v,
      switchBranch: i,
      getEnvironments: m,
      switchEnvironment: $,
      getSwitchProgress: u,
      createEnvironment: M,
      getCreateProgress: C,
      deleteEnvironment: L,
      syncEnvironmentManually: w
    } = Se(), _ = nh(), k = b(null), R = b([]), A = b([]), j = b([]), K = B(() => j.value.find((q) => q.is_current)), P = b(!1), T = b(null), O = b(null), z = b(!1), S = b(null), V = b(null), W = b(!1), X = b(!1), oe = b(""), E = b({ state: "idle", progress: 0, message: "" });
    let G = null, N = null;
    const U = b(!1), ae = b({ state: "idle", message: "" }), ee = b(null);
    let $e = null;
    const le = b("status"), Ye = b("this-env");
    function he(q, I) {
      le.value = q, Ye.value = I;
    }
    function ut(q) {
      const re = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[q];
      re && he(re.view, re.section);
    }
    function mt() {
      he("branches", "this-env");
    }
    function vt() {
      n("close"), setTimeout(() => {
        var I;
        const q = document.querySelectorAll("button.comfyui-button");
        for (const re of q)
          if (((I = re.textContent) == null ? void 0 : I.trim()) === "Manager") {
            re.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const we = b(null), Ke = b(!1), Fe = b(!1), Oe = b([]);
    let ft = 0;
    function fe(q, I = "info", re = 3e3) {
      const ye = ++ft;
      return Oe.value.push({ id: ye, message: q, type: I }), re > 0 && setTimeout(() => {
        Oe.value = Oe.value.filter((Te) => Te.id !== ye);
      }, re), ye;
    }
    function Be(q) {
      Oe.value = Oe.value.filter((I) => I.id !== q);
    }
    function J(q) {
      switch (q) {
        case "success":
          return "✓";
        case "warning":
          return "!";
        case "error":
          return "✕";
        default:
          return "→";
      }
    }
    const de = B(() => {
      if (!k.value) return "neutral";
      const q = k.value.workflows, I = q.new.length > 0 || q.modified.length > 0 || q.deleted.length > 0 || k.value.has_changes;
      return k.value.comparison.is_synced ? I ? "warning" : "success" : "error";
    });
    B(() => k.value ? de.value === "success" ? "All synced" : de.value === "warning" ? "Uncommitted changes" : de.value === "error" ? "Not synced" : "" : "");
    async function F() {
      P.value = !0, T.value = null;
      try {
        const [q, I, re, ye] = await Promise.all([
          r(!0),
          p(),
          g(),
          m()
        ]);
        k.value = q, R.value = I.commits, A.value = re.branches, j.value = ye, n("statusUpdate", q), S.value && await S.value.loadWorkflows(!0);
      } catch (q) {
        T.value = q instanceof Error ? q.message : "Failed to load status", k.value = null, R.value = [], A.value = [];
      } finally {
        P.value = !1;
      }
    }
    function D(q) {
      O.value = q;
    }
    async function te(q) {
      var re;
      O.value = null;
      const I = k.value && (k.value.workflows.new.length > 0 || k.value.workflows.modified.length > 0 || k.value.workflows.deleted.length > 0 || k.value.has_changes);
      we.value = {
        title: I ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: I ? "You have uncommitted changes that will be lost." : `Checkout commit ${q.short_hash || ((re = q.hash) == null ? void 0 : re.slice(0, 7))}?`,
        details: I ? jt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: I ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: I,
        onConfirm: async () => {
          var De;
          we.value = null, Ae();
          const ye = fe(`Checking out ${q.short_hash || ((De = q.hash) == null ? void 0 : De.slice(0, 7))}...`, "info", 0), Te = await h(q.hash, I);
          Be(ye), Te.status === "success" ? fe("Restarting ComfyUI...", "success") : fe(Te.message || "Checkout failed", "error");
        }
      };
    }
    async function ge(q) {
      const I = k.value && (k.value.workflows.new.length > 0 || k.value.workflows.modified.length > 0 || k.value.workflows.deleted.length > 0 || k.value.has_changes);
      we.value = {
        title: I ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: I ? "You have uncommitted changes." : `Switch to branch "${q}"?`,
        details: I ? jt() : void 0,
        warning: I ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: I ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          we.value = null, Ae();
          const re = fe(`Switching to ${q}...`, "info", 0), ye = await i(q, I);
          Be(re), ye.status === "success" ? fe("Restarting ComfyUI...", "success") : fe(ye.message || "Branch switch failed", "error");
        }
      };
    }
    async function Le(q) {
      const I = fe(`Creating branch ${q}...`, "info", 0), re = await v(q);
      Be(I), re.status === "success" ? (fe(`Branch "${q}" created`, "success"), await F()) : fe(re.message || "Failed to create branch", "error");
    }
    async function Xe(q) {
      O.value = null;
      const I = prompt("Enter branch name:");
      if (I) {
        const re = fe(`Creating branch ${I}...`, "info", 0), ye = await v(I, q.hash);
        Be(re), ye.status === "success" ? (fe(`Branch "${I}" created from ${q.short_hash}`, "success"), await F()) : fe(ye.message || "Failed to create branch", "error");
      }
    }
    function Ae() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function nt(q) {
      z.value = !1, oe.value = q, W.value = !0;
    }
    async function St() {
      W.value = !1, X.value = !0, Ae(), E.value = {
        progress: 10,
        state: Ze(10),
        message: It(10)
      };
      try {
        await $(oe.value), co(), uo();
      } catch (q) {
        et(), X.value = !1, fe(`Failed to initiate switch: ${q instanceof Error ? q.message : "Unknown error"}`, "error"), E.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Ze(q) {
      return q >= 100 ? "complete" : q >= 80 ? "validating" : q >= 60 ? "starting" : q >= 30 ? "syncing" : "preparing";
    }
    function It(q) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Ze(q)] || "";
    }
    function co() {
      if (N) return;
      let q = 10;
      const I = 60, re = 5e3, ye = 100, Te = (I - q) / (re / ye);
      N = window.setInterval(() => {
        if (q += Te, q >= I && (q = I, et()), E.value.progress < I) {
          const De = Math.floor(q);
          E.value = {
            progress: De,
            state: Ze(De),
            message: It(De)
          };
        }
      }, ye);
    }
    function et() {
      N && (clearInterval(N), N = null);
    }
    function uo() {
      G || (G = window.setInterval(async () => {
        try {
          let q = await _.getStatus();
          if ((!q || q.state === "idle") && (q = await u()), !q)
            return;
          const I = q.progress || 0;
          I >= 60 && et();
          const re = Math.max(I, E.value.progress), ye = q.state && q.state !== "idle" && q.state !== "unknown", Te = ye ? q.state : Ze(re), De = ye && q.message || It(re);
          E.value = {
            state: Te,
            progress: re,
            message: De
          }, q.state === "complete" ? (et(), zt(), X.value = !1, fe(`✓ Switched to ${oe.value}`, "success"), await F(), oe.value = "") : q.state === "rolled_back" ? (et(), zt(), X.value = !1, fe("Switch failed, restored previous environment", "warning"), oe.value = "") : q.state === "critical_failure" && (et(), zt(), X.value = !1, fe(`Critical error during switch: ${q.message}`, "error"), oe.value = "");
        } catch (q) {
          console.error("Failed to poll switch progress:", q);
        }
      }, 1e3));
    }
    function zt() {
      et(), G && (clearInterval(G), G = null);
    }
    function mo() {
      W.value = !1, oe.value = "";
    }
    async function vo() {
      Ke.value = !1, await F(), fe("✓ Changes committed", "success");
    }
    async function fo() {
      Fe.value = !1;
      const q = fe("Syncing environment...", "info", 0);
      try {
        const I = await w("skip", !0);
        if (Be(q), I.status === "success") {
          const re = [];
          I.nodes_installed.length && re.push(`${I.nodes_installed.length} installed`), I.nodes_removed.length && re.push(`${I.nodes_removed.length} removed`);
          const ye = re.length ? `: ${re.join(", ")}` : "";
          fe(`✓ Environment synced${ye}`, "success"), await F();
        } else {
          const re = I.errors.length ? I.errors.join("; ") : I.message;
          fe(`Sync failed: ${re}`, "error");
        }
      } catch (I) {
        Be(q), fe(`Sync error: ${I instanceof Error ? I.message : "Unknown error"}`, "error");
      }
    }
    async function go(q) {
      ee.value = q, U.value = !0, ae.value = { state: "creating", message: `Creating environment '${q.name}'...` };
      try {
        const I = await M(q);
        I.status === "started" ? po() : I.status === "error" && (U.value = !1, fe(`Failed to create environment: ${I.message}. Check debug logs for details.`, "error"), ee.value = null);
      } catch (I) {
        U.value = !1, fe(`Error creating environment: ${I instanceof Error ? I.message : "Unknown error"}. Check debug logs.`, "error"), ee.value = null;
      }
    }
    function po() {
      $e || ($e = window.setInterval(async () => {
        var q;
        try {
          const I = await C();
          ae.value = { state: I.state, message: I.message }, I.state === "complete" ? (Gt(), U.value = !1, fe(`✓ Environment '${I.environment_name}' created`, "success"), await F(), V.value && await V.value.loadEnvironments(), (q = ee.value) != null && q.switch_after && I.environment_name && await nt(I.environment_name), ee.value = null) : I.state === "error" && (Gt(), U.value = !1, fe(`Failed to create environment: ${I.error || I.message}. Check debug logs.`, "error"), ee.value = null);
        } catch (I) {
          console.error("Failed to poll create progress:", I);
        }
      }, 2e3));
    }
    function Gt() {
      $e && (clearInterval($e), $e = null);
    }
    async function ho(q) {
      var I;
      if (((I = K.value) == null ? void 0 : I.name) === q) {
        fe("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      we.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${q}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          we.value = null;
          try {
            const re = await L(q);
            re.status === "success" ? (fe(`Environment "${q}" deleted`, "success"), await F(), V.value && await V.value.loadEnvironments()) : fe(re.message || "Failed to delete environment", "error");
          } catch (re) {
            fe(`Error deleting environment: ${re instanceof Error ? re.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    function jt() {
      if (!k.value) return [];
      const q = [], I = k.value.workflows;
      return I.new.length && q.push(`${I.new.length} new workflow(s)`), I.modified.length && q.push(`${I.modified.length} modified workflow(s)`), I.deleted.length && q.push(`${I.deleted.length} deleted workflow(s)`), q;
    }
    return _e(F), (q, I) => {
      var re, ye, Te, De;
      return o(), s("div", ah, [
        e("div", lh, [
          e("div", ih, [
            I[27] || (I[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            k.value ? (o(), s("div", rh)) : d("", !0)
          ]),
          e("div", dh, [
            e("button", {
              class: ne(["icon-btn", { spinning: P.value }]),
              onClick: F,
              title: "Refresh"
            }, [...I[28] || (I[28] = [
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
              onClick: I[0] || (I[0] = (ce) => n("close")),
              title: "Close"
            }, [...I[29] || (I[29] = [
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
        e("div", ch, [
          I[31] || (I[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: I[1] || (I[1] = (ce) => he("environments", "all-envs"))
          }, [
            k.value ? (o(), s("div", uh, [
              e("span", null, a(((re = K.value) == null ? void 0 : re.name) || ((ye = k.value) == null ? void 0 : ye.environment) || "Loading..."), 1),
              e("span", mh, "(" + a(k.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            I[30] || (I[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", vh, [
          e("div", fh, [
            e("div", gh, [
              I[32] || (I[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "status" && Ye.value === "this-env" }]),
                onClick: I[2] || (I[2] = (ce) => he("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "workflows" }]),
                onClick: I[3] || (I[3] = (ce) => he("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "models-env" }]),
                onClick: I[4] || (I[4] = (ce) => he("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "branches" }]),
                onClick: I[5] || (I[5] = (ce) => he("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "history" }]),
                onClick: I[6] || (I[6] = (ce) => he("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "nodes" }]),
                onClick: I[7] || (I[7] = (ce) => he("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "debug-env" }]),
                onClick: I[8] || (I[8] = (ce) => he("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            I[35] || (I[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", ph, [
              I[33] || (I[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "environments" }]),
                onClick: I[9] || (I[9] = (ce) => he("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "model-index" }]),
                onClick: I[10] || (I[10] = (ce) => he("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "settings" }]),
                onClick: I[11] || (I[11] = (ce) => he("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "debug-workspace" }]),
                onClick: I[12] || (I[12] = (ce) => he("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            I[36] || (I[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", hh, [
              I[34] || (I[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "export" }]),
                onClick: I[13] || (I[13] = (ce) => he("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "import" }]),
                onClick: I[14] || (I[14] = (ce) => he("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "remotes" }]),
                onClick: I[15] || (I[15] = (ce) => he("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", yh, [
            T.value ? (o(), s("div", wh, a(T.value), 1)) : !k.value && le.value === "status" ? (o(), s("div", kh, " Loading status... ")) : (o(), s(H, { key: 2 }, [
              le.value === "status" ? (o(), x(Kn, {
                key: 0,
                status: k.value,
                onSwitchBranch: mt,
                onCommitChanges: I[16] || (I[16] = (ce) => Ke.value = !0),
                onSyncEnvironment: I[17] || (I[17] = (ce) => Fe.value = !0),
                onViewWorkflows: I[18] || (I[18] = (ce) => he("workflows", "this-env")),
                onViewHistory: I[19] || (I[19] = (ce) => he("history", "this-env")),
                onViewDebug: I[20] || (I[20] = (ce) => he("debug-env", "this-env"))
              }, null, 8, ["status"])) : le.value === "workflows" ? (o(), x(wc, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: S,
                onRefresh: F
              }, null, 512)) : le.value === "models-env" ? (o(), x(tu, {
                key: 2,
                onNavigate: ut
              })) : le.value === "branches" ? (o(), x(da, {
                key: 3,
                branches: A.value,
                current: ((Te = k.value) == null ? void 0 : Te.branch) || null,
                onSwitch: ge,
                onCreate: Le
              }, null, 8, ["branches", "current"])) : le.value === "history" ? (o(), x(ka, {
                key: 4,
                commits: R.value,
                onSelect: D,
                onCheckout: te
              }, null, 8, ["commits"])) : le.value === "nodes" ? (o(), x(Wu, {
                key: 5,
                onOpenNodeManager: vt
              })) : le.value === "debug-env" ? (o(), x(Am, { key: 6 })) : le.value === "environments" ? (o(), x(zv, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: V,
                onSwitch: nt,
                onCreate: go,
                onDelete: ho
              }, null, 512)) : le.value === "model-index" ? (o(), x(bu, {
                key: 8,
                onRefresh: F
              })) : le.value === "settings" ? (o(), x(Bm, { key: 9 })) : le.value === "debug-workspace" ? (o(), x(Vm, { key: 10 })) : le.value === "export" ? (o(), x(Vv, { key: 11 })) : le.value === "import" ? (o(), x(gg, { key: 12 })) : le.value === "remotes" ? (o(), x(wm, { key: 13 })) : d("", !0)
            ], 64))
          ])
        ]),
        O.value ? (o(), x(Dg, {
          key: 0,
          commit: O.value,
          onClose: I[21] || (I[21] = (ce) => O.value = null),
          onCheckout: te,
          onCreateBranch: Xe
        }, null, 8, ["commit"])) : d("", !0),
        we.value ? (o(), x(Bg, {
          key: 1,
          title: we.value.title,
          message: we.value.message,
          details: we.value.details,
          warning: we.value.warning,
          confirmLabel: we.value.confirmLabel,
          cancelLabel: we.value.cancelLabel,
          secondaryLabel: we.value.secondaryLabel,
          secondaryAction: we.value.secondaryAction,
          destructive: we.value.destructive,
          onConfirm: we.value.onConfirm,
          onCancel: I[22] || (I[22] = (ce) => we.value = null),
          onSecondary: we.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        f(Rp, {
          show: W.value,
          "from-environment": ((De = K.value) == null ? void 0 : De.name) || "unknown",
          "to-environment": oe.value,
          onConfirm: St,
          onClose: mo
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Ke.value && k.value ? (o(), x(no, {
          key: 2,
          status: k.value,
          "as-modal": !0,
          onClose: I[23] || (I[23] = (ce) => Ke.value = !1),
          onCommitted: vo
        }, null, 8, ["status"])) : d("", !0),
        Fe.value && k.value ? (o(), x(sh, {
          key: 3,
          show: Fe.value,
          "mismatch-details": {
            missing_nodes: k.value.comparison.missing_nodes,
            extra_nodes: k.value.comparison.extra_nodes
          },
          onConfirm: fo,
          onClose: I[24] || (I[24] = (ce) => Fe.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : d("", !0),
        f(Kp, {
          show: X.value,
          state: E.value.state,
          progress: E.value.progress,
          message: E.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        U.value ? (o(), s("div", bh, [
          e("div", _h, [
            I[39] || (I[39] = e("div", { class: "dialog-header" }, [
              e("h3", { class: "dialog-title" }, "CREATING ENVIRONMENT")
            ], -1)),
            e("div", $h, [
              I[37] || (I[37] = e("div", { class: "create-progress-spinner" }, null, -1)),
              e("p", Ch, a(ae.value.message), 1),
              I[38] || (I[38] = e("p", { class: "create-progress-hint" }, "This may take several minutes...", -1))
            ])
          ])
        ])) : d("", !0),
        z.value ? (o(), s("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: I[26] || (I[26] = ke((ce) => z.value = !1, ["self"]))
        }, [
          e("div", xh, [
            e("div", Sh, [
              I[41] || (I[41] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: I[25] || (I[25] = (ce) => z.value = !1)
              }, [...I[40] || (I[40] = [
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
            e("div", Ih, [
              I[42] || (I[42] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", Eh, [
                (o(!0), s(H, null, se(j.value, (ce) => (o(), s("div", {
                  key: ce.name,
                  class: ne(["env-item", { current: ce.is_current }])
                }, [
                  e("div", Mh, [
                    e("div", zh, [
                      e("span", Lh, a(ce.is_current ? "●" : "○"), 1),
                      e("span", Th, a(ce.name), 1),
                      ce.current_branch ? (o(), s("span", Dh, "(" + a(ce.current_branch) + ")", 1)) : d("", !0),
                      ce.is_current ? (o(), s("span", Rh, "CURRENT")) : d("", !0)
                    ]),
                    e("div", Nh, a(ce.workflow_count) + " workflows • " + a(ce.node_count) + " nodes ", 1)
                  ]),
                  ce.is_current ? d("", !0) : (o(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (q1) => nt(ce.name)
                  }, " SWITCH ", 8, Uh))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        e("div", Oh, [
          f($o, { name: "toast" }, {
            default: l(() => [
              (o(!0), s(H, null, se(Oe.value, (ce) => (o(), s("div", {
                key: ce.id,
                class: ne(["toast", ce.type])
              }, [
                e("span", Bh, a(J(ce.type)), 1),
                e("span", Ph, a(ce.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Fh = /* @__PURE__ */ Y(Vh, [["__scopeId", "data-v-0bfd7634"]]), Ah = { class: "item-header" }, Wh = { class: "item-info" }, Gh = { class: "filename" }, jh = { class: "metadata" }, Hh = { class: "size" }, qh = {
  key: 0,
  class: "type"
}, Kh = { class: "item-actions" }, Jh = {
  key: 0,
  class: "progress-section"
}, Qh = { class: "progress-bar" }, Yh = { class: "progress-stats" }, Xh = { class: "downloaded" }, Zh = { class: "speed" }, e1 = {
  key: 0,
  class: "eta"
}, t1 = {
  key: 1,
  class: "status-msg paused"
}, o1 = {
  key: 2,
  class: "status-msg queued"
}, s1 = {
  key: 3,
  class: "status-msg completed"
}, n1 = {
  key: 4,
  class: "status-msg failed"
}, a1 = {
  key: 0,
  class: "retries"
}, l1 = /* @__PURE__ */ Q({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: c }) {
    const n = c;
    function r(h) {
      if (h === 0) return "?";
      const v = h / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(h / (1024 * 1024)).toFixed(1)} MB`;
    }
    function p(h) {
      return h === 0 ? "-" : `${(h / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function g(h) {
      if (h < 60) return `${Math.round(h)}s`;
      const v = Math.floor(h / 60);
      return v < 60 ? `${v}m` : `${Math.floor(v / 60)}h ${v % 60}m`;
    }
    return (h, v) => (o(), s("div", {
      class: ne(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Ah, [
        e("div", Wh, [
          e("div", Gh, a(t.item.filename), 1),
          e("div", jh, [
            e("span", Hh, a(r(t.item.size)), 1),
            t.item.type ? (o(), s("span", qh, a(t.item.type), 1)) : d("", !0)
          ])
        ]),
        e("div", Kh, [
          t.item.status === "queued" || t.item.status === "downloading" ? (o(), s("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: v[0] || (v[0] = (i) => n("cancel")),
            title: "Cancel"
          }, " × ")) : d("", !0),
          t.item.status === "paused" ? (o(), s("button", {
            key: 1,
            class: "action-icon resume",
            onClick: v[1] || (v[1] = (i) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : d("", !0),
          t.item.status === "failed" ? (o(), s("button", {
            key: 2,
            class: "action-icon retry",
            onClick: v[2] || (v[2] = (i) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : d("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (o(), s("button", {
            key: 3,
            class: "action-icon remove",
            onClick: v[3] || (v[3] = (i) => n("remove")),
            title: "Remove"
          }, " × ")) : d("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (o(), s("div", Jh, [
        e("div", Qh, [
          e("div", {
            class: "progress-fill",
            style: Qe({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Yh, [
          e("span", Xh, a(r(t.item.downloaded)) + " / " + a(r(t.item.size)), 1),
          e("span", Zh, a(p(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), s("span", e1, a(g(t.item.eta)), 1)) : d("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), s("div", t1, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), s("div", o1, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), s("div", s1, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), s("div", n1, [
        y(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), s("span", a1, "(" + a(t.item.retries) + " retries)", 1)) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), ht = /* @__PURE__ */ Y(l1, [["__scopeId", "data-v-2110df65"]]), i1 = { class: "queue-title" }, r1 = { class: "count" }, d1 = { class: "queue-actions" }, c1 = { class: "action-label" }, u1 = {
  key: 0,
  class: "overall-progress"
}, m1 = { class: "progress-bar" }, v1 = {
  key: 0,
  class: "current-mini"
}, f1 = { class: "filename" }, g1 = { class: "speed" }, p1 = {
  key: 1,
  class: "queue-content"
}, h1 = {
  key: 0,
  class: "section"
}, y1 = {
  key: 1,
  class: "section"
}, w1 = { class: "section-header" }, k1 = { class: "section-label paused" }, b1 = { class: "items-list" }, _1 = {
  key: 2,
  class: "section"
}, $1 = { class: "section-header" }, C1 = { class: "section-label" }, x1 = { class: "items-list" }, S1 = {
  key: 3,
  class: "section"
}, I1 = { class: "section-header" }, E1 = { class: "section-label" }, M1 = { class: "items-list" }, z1 = {
  key: 4,
  class: "section"
}, L1 = { class: "section-header" }, T1 = { class: "section-label failed" }, D1 = { class: "items-list" }, R1 = /* @__PURE__ */ Q({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: n,
      queuedItems: r,
      completedItems: p,
      failedItems: g,
      pausedItems: h,
      hasItems: v,
      activeCount: i,
      cancelDownload: m,
      retryDownload: $,
      resumeDownload: u,
      resumeAllPaused: M,
      removeItem: C,
      clearCompleted: L
    } = xt(), w = b(!1);
    let _ = null;
    Bt(
      () => ({
        active: i.value,
        failed: g.value.length,
        paused: h.value.length,
        completed: p.value.length
      }),
      (j, K) => {
        _ && (clearTimeout(_), _ = null);
        const P = j.active === 0 && j.failed === 0 && j.paused === 0 && j.completed > 0, T = K && (K.active > 0 || K.paused > 0);
        P && T && (_ = setTimeout(() => {
          L(), _ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const k = B(() => {
      var P;
      if (c.items.length === 0) return 0;
      const j = p.value.length, K = ((P = n.value) == null ? void 0 : P.progress) || 0;
      return Math.round((j + K / 100) / c.items.length * 100);
    });
    function R(j) {
      m(j);
    }
    function A(j) {
      return j === 0 ? "" : `${(j / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (j, K) => (o(), x(xe, { to: "body" }, [
      me(v) ? (o(), s("div", {
        key: 0,
        class: ne(["model-download-queue", { minimized: !w.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: K[0] || (K[0] = (P) => w.value = !w.value)
        }, [
          e("div", i1, [
            K[4] || (K[4] = e("span", { class: "icon" }, "↓", -1)),
            K[5] || (K[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", r1, "(" + a(me(i)) + "/" + a(me(c).items.length) + ")", 1)
          ]),
          e("div", d1, [
            e("span", c1, a(w.value ? "minimize" : "expand"), 1)
          ])
        ]),
        w.value ? (o(), s("div", p1, [
          me(n) ? (o(), s("div", h1, [
            K[6] || (K[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            f(ht, {
              item: me(n),
              onCancel: K[1] || (K[1] = (P) => R(me(n).id))
            }, null, 8, ["item"])
          ])) : d("", !0),
          me(h).length > 0 ? (o(), s("div", y1, [
            e("div", w1, [
              e("span", k1, "Paused (" + a(me(h).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: K[2] || (K[2] = //@ts-ignore
                (...P) => me(M) && me(M)(...P))
              }, "Resume All")
            ]),
            e("div", b1, [
              (o(!0), s(H, null, se(me(h), (P) => (o(), x(ht, {
                key: P.id,
                item: P,
                onResume: (T) => me(u)(P.id),
                onRemove: (T) => me(C)(P.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          me(r).length > 0 ? (o(), s("div", _1, [
            e("div", $1, [
              e("span", C1, "Queued (" + a(me(r).length) + ")", 1)
            ]),
            e("div", x1, [
              (o(!0), s(H, null, se(me(r), (P) => (o(), x(ht, {
                key: P.id,
                item: P,
                onCancel: (T) => R(P.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : d("", !0),
          me(p).length > 0 ? (o(), s("div", S1, [
            e("div", I1, [
              e("span", E1, "Completed (" + a(me(p).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: K[3] || (K[3] = //@ts-ignore
                (...P) => me(L) && me(L)(...P))
              }, "Clear")
            ]),
            e("div", M1, [
              (o(!0), s(H, null, se(me(p).slice(0, 3), (P) => (o(), x(ht, {
                key: P.id,
                item: P,
                onRemove: (T) => me(C)(P.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          me(g).length > 0 ? (o(), s("div", z1, [
            e("div", L1, [
              e("span", T1, "Failed (" + a(me(g).length) + ")", 1)
            ]),
            e("div", D1, [
              (o(!0), s(H, null, se(me(g), (P) => (o(), x(ht, {
                key: P.id,
                item: P,
                onRetry: (T) => me($)(P.id),
                onRemove: (T) => me(C)(P.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : d("", !0)
        ])) : (o(), s("div", u1, [
          e("div", m1, [
            e("div", {
              class: "progress-fill",
              style: Qe({ width: `${k.value}%` })
            }, null, 4)
          ]),
          me(n) ? (o(), s("div", v1, [
            e("span", f1, a(me(n).filename), 1),
            e("span", g1, a(A(me(n).speed)), 1)
          ])) : d("", !0)
        ]))
      ], 2)) : d("", !0)
    ]));
  }
}), N1 = /* @__PURE__ */ Y(R1, [["__scopeId", "data-v-60751cfa"]]), U1 = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', O1 = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', B1 = {
  comfy: U1,
  phosphor: O1
}, At = "comfy", ao = "comfygit-theme";
let tt = null, lo = At;
function P1() {
  try {
    const t = localStorage.getItem(ao);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return At;
}
function io(t = At) {
  tt && tt.remove(), tt = document.createElement("style"), tt.id = "comfygit-theme-styles", tt.setAttribute("data-theme", t), tt.textContent = B1[t], document.head.appendChild(tt), document.body.setAttribute("data-comfygit-theme", t), lo = t;
  try {
    localStorage.setItem(ao, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function V1() {
  return lo;
}
function F1(t) {
  io(t);
}
const Wt = document.createElement("link");
Wt.rel = "stylesheet";
Wt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Wt);
const A1 = P1();
io(A1);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), F1(t);
  },
  getTheme: () => {
    const t = V1();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Re = null, Me = null, _t = null, yt = null, Yt = null;
const rt = b(null);
async function Et() {
  var t;
  if (!((t = it) != null && t.api)) return null;
  try {
    const c = await it.api.fetchApi("/v2/comfygit/status");
    c.ok && (rt.value = await c.json());
  } catch {
  }
}
function W1() {
  if (!rt.value) return !1;
  const t = rt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || rt.value.has_changes;
}
function G1() {
  Re && Re.remove(), Re = document.createElement("div"), Re.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Re.appendChild(t), Re.addEventListener("click", (r) => {
    r.target === Re && Rt();
  });
  const c = (r) => {
    r.key === "Escape" && (Rt(), document.removeEventListener("keydown", c));
  };
  document.addEventListener("keydown", c), Pt({
    render: () => Vt(Fh, {
      onClose: Rt,
      onStatusUpdate: (r) => {
        rt.value = r, $t();
      }
    })
  }).mount(t), document.body.appendChild(Re);
}
function Rt() {
  Re && (Re.remove(), Re = null);
}
function j1(t) {
  wt(), Me = document.createElement("div"), Me.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  Me.style.position = "fixed", Me.style.top = `${c.bottom + 8}px`, Me.style.right = `${window.innerWidth - c.right}px`, Me.style.zIndex = "10001";
  const n = (p) => {
    Me && !Me.contains(p.target) && p.target !== t && (wt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const r = (p) => {
    p.key === "Escape" && (wt(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), _t = Pt({
    render: () => Vt(no, {
      status: rt.value,
      onClose: wt,
      onCommitted: () => {
        wt(), Et().then($t);
      }
    })
  }), _t.mount(Me), document.body.appendChild(Me);
}
function wt() {
  _t && (_t.unmount(), _t = null), Me && (Me.remove(), Me = null);
}
function H1() {
  yt || (yt = document.createElement("div"), yt.className = "comfygit-download-queue-root", Yt = Pt({
    render: () => Vt(N1)
  }), Yt.mount(yt), document.body.appendChild(yt), console.log("[ComfyGit] Model download queue mounted"));
}
let We = null;
function $t() {
  if (!We) return;
  const t = We.querySelector(".commit-indicator");
  t && (t.style.display = W1() ? "block" : "none");
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
document.head.appendChild(ro);
it.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var p, g;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = G1, We = document.createElement("button"), We.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", We.innerHTML = 'Commit <span class="commit-indicator"></span>', We.title = "Quick Commit", We.onclick = () => j1(We), t.appendChild(c), t.appendChild(We), (g = (p = it.menu) == null ? void 0 : p.settingsGroup) != null && g.element && (it.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), H1();
    const { loadPendingDownloads: n } = xt();
    n(), await Et(), $t(), setInterval(async () => {
      await Et(), $t();
    }, 3e4);
    const r = it.api;
    if (r) {
      let h = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((m) => {
          (m.startsWith("workflow:") || m.startsWith("Comfy.OpenWorkflowsPaths:") || m.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(m);
        }), window.location.reload();
      }, v = function() {
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
        const $ = document.createElement("span");
        $.textContent = "Workflows updated - refresh required", m.appendChild($);
        const u = document.createElement("button");
        u.textContent = "Refresh", u.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, u.onmouseover = () => u.style.background = "var(--comfy-input-bg)", u.onmouseout = () => u.style.background = "var(--comfy-menu-bg)", u.onclick = () => h(), m.appendChild(u);
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
        `, M.onmouseover = () => M.style.opacity = "1", M.onmouseout = () => M.style.opacity = "0.6", M.onclick = () => m.remove(), m.appendChild(M), document.body.appendChild(m), console.log("[ComfyGit] Refresh notification displayed");
      };
      r.addEventListener("comfygit:workflow-changed", async (m) => {
        const { change_type: $, workflow_name: u } = m.detail;
        console.log(`[ComfyGit] Workflow ${$}: ${u}`), await Et(), $t();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let i = !1;
      r.addEventListener("status", async (m) => {
        const $ = m.detail != null;
        $ && !i && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), h()) : v()), i = $;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
