import { app as mt } from "../../scripts/app.js";
import { defineComponent as q, createElementBlock as s, openBlock as o, createCommentVNode as c, createElementVNode as e, renderSlot as ue, createBlock as S, resolveDynamicComponent as Vt, normalizeClass as oe, withCtx as i, toDisplayString as l, createVNode as g, createTextVNode as y, computed as B, Fragment as V, renderList as Z, normalizeStyle as qe, ref as $, onMounted as Ce, watch as Wt, Teleport as ze, withModifiers as _e, Transition as $o, createSlots as Tt, withKeys as Ze, onUnmounted as Co, reactive as to, readonly as xo, unref as fe, withDirectives as dt, vModelText as oo, nextTick as So, vModelSelect as Ot, vModelCheckbox as Io, TransitionGroup as Eo, createApp as Gt, h as jt } from "vue";
const Mo = { class: "panel-layout" }, zo = {
  key: 0,
  class: "panel-layout-header"
}, Lo = {
  key: 1,
  class: "panel-layout-search"
}, To = { class: "panel-layout-content" }, Ro = {
  key: 2,
  class: "panel-layout-footer"
}, No = /* @__PURE__ */ q({
  __name: "PanelLayout",
  setup(t) {
    return (u, n) => (o(), s("div", Mo, [
      u.$slots.header ? (o(), s("div", zo, [
        ue(u.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      u.$slots.search ? (o(), s("div", Lo, [
        ue(u.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      e("div", To, [
        ue(u.$slots, "content", {}, void 0, !0)
      ]),
      u.$slots.footer ? (o(), s("div", Ro, [
        ue(u.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), J = (t, u) => {
  const n = t.__vccOpts || t;
  for (const [r, p] of u)
    n[r] = p;
  return n;
}, Re = /* @__PURE__ */ J(No, [["__scopeId", "data-v-21565df9"]]), Do = {
  key: 0,
  class: "panel-title-prefix"
}, Oo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Uo = /* @__PURE__ */ q({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (u, n) => (o(), S(Vt(`h${t.level}`), {
      class: oe(["panel-title", t.variant])
    }, {
      default: i(() => [
        t.showPrefix ? (o(), s("span", Do, l(t.prefix), 1)) : (o(), s("span", Oo)),
        ue(u.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Po = /* @__PURE__ */ J(Uo, [["__scopeId", "data-v-c3875efc"]]), Bo = ["title"], Fo = ["width", "height"], Ao = /* @__PURE__ */ q({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (u, n) => (o(), s("button", {
      class: "info-button",
      title: t.title,
      onClick: n[0] || (n[0] = (r) => u.$emit("click"))
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
      ])], 8, Fo))
    ], 8, Bo));
  }
}), so = /* @__PURE__ */ J(Ao, [["__scopeId", "data-v-6fc7f16d"]]), Vo = { class: "header-left" }, Wo = {
  key: 0,
  class: "header-actions"
}, Go = /* @__PURE__ */ q({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (u, n) => (o(), s("div", {
      class: oe(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Vo, [
        g(Po, { "show-prefix": t.showPrefix }, {
          default: i(() => [
            y(l(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), S(so, {
          key: 0,
          onClick: n[0] || (n[0] = (r) => u.$emit("info-click"))
        })) : c("", !0)
      ]),
      u.$slots.actions ? (o(), s("div", Wo, [
        ue(u.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ne = /* @__PURE__ */ J(Go, [["__scopeId", "data-v-55a62cd6"]]), jo = {
  key: 0,
  class: "section-title-count"
}, Ho = {
  key: 1,
  class: "section-title-icon"
}, Ko = /* @__PURE__ */ q({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (u, n) => (o(), S(Vt(`h${t.level}`), {
      class: oe(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && u.$emit("click"))
    }, {
      default: i(() => [
        ue(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", jo, "(" + l(t.count) + ")", 1)) : c("", !0),
        t.clickable ? (o(), s("span", Ho, l(t.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Oe = /* @__PURE__ */ J(Ko, [["__scopeId", "data-v-559361eb"]]), qo = { class: "status-grid" }, Jo = { class: "status-grid__columns" }, Yo = { class: "status-grid__column" }, Qo = { class: "status-grid__title" }, Xo = { class: "status-grid__column status-grid__column--right" }, Zo = { class: "status-grid__title" }, es = {
  key: 0,
  class: "status-grid__footer"
}, ts = /* @__PURE__ */ q({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (u, n) => (o(), s("div", qo, [
      e("div", Jo, [
        e("div", Yo, [
          e("h4", Qo, l(t.leftTitle), 1),
          ue(u.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Xo, [
          e("h4", Zo, l(t.rightTitle), 1),
          ue(u.$slots, "right", {}, void 0, !0)
        ])
      ]),
      u.$slots.footer ? (o(), s("div", es, [
        ue(u.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), os = /* @__PURE__ */ J(ts, [["__scopeId", "data-v-73b7ba3f"]]), ss = {
  key: 0,
  class: "status-item__icon"
}, ns = {
  key: 1,
  class: "status-item__count"
}, as = { class: "status-item__label" }, ls = /* @__PURE__ */ q({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const u = t, n = B(() => `status-item--${u.variant}`);
    return (r, p) => (o(), s("div", {
      class: oe(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), s("span", ss, l(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (o(), s("span", ns, l(t.count), 1)) : c("", !0),
      e("span", as, l(t.label), 1)
    ], 2));
  }
}), Ve = /* @__PURE__ */ J(ls, [["__scopeId", "data-v-6f929183"]]), is = { class: "issue-card__header" }, rs = { class: "issue-card__icon" }, ds = { class: "issue-card__title" }, cs = {
  key: 0,
  class: "issue-card__content"
}, us = {
  key: 0,
  class: "issue-card__description"
}, ms = {
  key: 1,
  class: "issue-card__items"
}, vs = {
  key: 2,
  class: "issue-card__actions"
}, fs = /* @__PURE__ */ q({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const u = t, n = B(() => `issue-card--${u.severity}`);
    return (r, p) => (o(), s("div", {
      class: oe(["issue-card", n.value])
    }, [
      e("div", is, [
        e("span", rs, l(t.icon), 1),
        e("h4", ds, l(t.title), 1)
      ]),
      r.$slots.default || t.description ? (o(), s("div", cs, [
        t.description ? (o(), s("p", us, l(t.description), 1)) : c("", !0),
        ue(r.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      t.items && t.items.length ? (o(), s("div", ms, [
        (o(!0), s(V, null, Z(t.items, (f, h) => (o(), s("div", {
          key: h,
          class: "issue-card__item"
        }, [
          p[0] || (p[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, l(f), 1)
        ]))), 128))
      ])) : c("", !0),
      r.$slots.actions ? (o(), s("div", vs, [
        ue(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ct = /* @__PURE__ */ J(fs, [["__scopeId", "data-v-df6aa348"]]), gs = ["type", "disabled"], ps = {
  key: 0,
  class: "spinner"
}, hs = /* @__PURE__ */ q({
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
    return (u, n) => (o(), s("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: oe(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => u.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", ps)) : c("", !0),
      t.loading ? c("", !0) : ue(u.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, gs));
  }
}), Q = /* @__PURE__ */ J(hs, [["__scopeId", "data-v-772abe47"]]), ys = { class: "empty-state" }, ws = {
  key: 0,
  class: "empty-icon"
}, ks = { class: "empty-message" }, bs = /* @__PURE__ */ q({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (u, n) => (o(), s("div", ys, [
      t.icon ? (o(), s("div", ws, l(t.icon), 1)) : c("", !0),
      e("p", ks, l(t.message), 1),
      t.actionLabel ? (o(), S(Q, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => u.$emit("action"))
      }, {
        default: i(() => [
          y(l(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), Fe = /* @__PURE__ */ J(bs, [["__scopeId", "data-v-4466284f"]]), _s = /* @__PURE__ */ q({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (u, n) => (o(), s("span", {
      class: oe(["detail-label"]),
      style: qe({ minWidth: t.minWidth })
    }, [
      ue(u.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Ft = /* @__PURE__ */ J(_s, [["__scopeId", "data-v-75e9eeb8"]]), $s = /* @__PURE__ */ q({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (o(), s("span", {
      class: oe(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      ue(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), At = /* @__PURE__ */ J($s, [["__scopeId", "data-v-2f186e4c"]]), Cs = { class: "detail-row" }, xs = /* @__PURE__ */ q({
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
    return (u, n) => (o(), s("div", Cs, [
      g(Ft, { "min-width": t.labelMinWidth }, {
        default: i(() => [
          y(l(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), S(At, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: i(() => [
          y(l(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ue(u.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), we = /* @__PURE__ */ J(xs, [["__scopeId", "data-v-ef15664a"]]), Ss = { class: "modal-header" }, Is = { class: "modal-body" }, Es = { class: "status-section" }, Ms = {
  key: 0,
  class: "status-section"
}, zs = { class: "section-header-row" }, Ls = {
  key: 0,
  class: "workflow-group"
}, Ts = { class: "workflow-group-header" }, Rs = { class: "workflow-group-title" }, Ns = { class: "workflow-list" }, Ds = { class: "workflow-name" }, Os = { class: "workflow-issue" }, Us = {
  key: 1,
  class: "workflow-group"
}, Ps = { class: "workflow-group-header" }, Bs = { class: "workflow-group-title" }, Fs = { class: "workflow-list" }, As = { class: "workflow-name" }, Vs = { class: "workflow-issue" }, Ws = {
  key: 2,
  class: "workflow-group"
}, Gs = { class: "workflow-group-header" }, js = { class: "workflow-group-title" }, Hs = { class: "workflow-list" }, Ks = { class: "workflow-name" }, qs = {
  key: 3,
  class: "workflow-group"
}, Js = { class: "workflow-group-header" }, Ys = { class: "workflow-group-title" }, Qs = { class: "workflow-list" }, Xs = { class: "workflow-name" }, Zs = {
  key: 4,
  class: "workflow-group"
}, en = { class: "workflow-group-header" }, tn = { class: "workflow-group-title" }, on = { class: "workflow-list" }, sn = { class: "workflow-name" }, nn = {
  key: 5,
  class: "workflow-group"
}, an = { class: "workflow-group-title" }, ln = { class: "expand-icon" }, rn = {
  key: 0,
  class: "workflow-list"
}, dn = { class: "workflow-name" }, cn = {
  key: 1,
  class: "status-section"
}, un = {
  key: 0,
  class: "change-group"
}, mn = { class: "change-group-header" }, vn = { class: "change-group-title" }, fn = { class: "change-list" }, gn = { class: "node-name" }, pn = {
  key: 0,
  class: "dev-badge"
}, hn = {
  key: 1,
  class: "change-group"
}, yn = { class: "change-group-header" }, wn = { class: "change-group-title" }, kn = { class: "change-list" }, bn = { class: "node-name" }, _n = {
  key: 0,
  class: "dev-badge"
}, $n = {
  key: 2,
  class: "change-group"
}, Cn = { class: "change-list" }, xn = { class: "change-item" }, Sn = { class: "node-name" }, In = {
  key: 3,
  class: "change-group"
}, En = {
  key: 2,
  class: "status-section"
}, Mn = { class: "section-header-row" }, zn = {
  key: 0,
  class: "drift-item"
}, Ln = { class: "drift-list" }, Tn = {
  key: 0,
  class: "drift-list-more"
}, Rn = {
  key: 1,
  class: "drift-item"
}, Nn = { class: "drift-list" }, Dn = {
  key: 0,
  class: "drift-list-more"
}, On = {
  key: 2,
  class: "drift-item"
}, Un = {
  key: 3,
  class: "drift-item"
}, Pn = {
  key: 3,
  class: "status-section"
}, Bn = { class: "info-box" }, Fn = { class: "drift-list" }, An = {
  key: 0,
  class: "drift-list-more"
}, Vn = {
  key: 4,
  class: "status-section"
}, Wn = { class: "warning-box" }, Gn = {
  key: 5,
  class: "empty-state-inline"
}, jn = { class: "modal-actions" }, Hn = /* @__PURE__ */ q({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const u = t, n = $(!1);
    Ce(() => {
      console.log("StatusDetailModal mounted, initial show value:", u.show);
    }), Wt(() => u.show, (I, C) => {
      console.log("StatusDetailModal show prop changed from", C, "to", I);
    }, { immediate: !0 });
    const r = B(() => {
      var I, C, L;
      return ((L = (C = (I = u.status) == null ? void 0 : I.workflows) == null ? void 0 : C.analyzed) == null ? void 0 : L.filter(
        (w) => w.status === "broken" && w.sync_state === "synced"
      )) || [];
    }), p = B(() => {
      var I, C, L;
      return ((L = (C = (I = u.status) == null ? void 0 : I.workflows) == null ? void 0 : C.analyzed) == null ? void 0 : L.filter(
        (w) => w.status === "broken" && w.sync_state !== "synced"
      )) || [];
    }), f = B(() => {
      var I, C, L;
      return ((L = (C = (I = u.status) == null ? void 0 : I.workflows) == null ? void 0 : C.synced) == null ? void 0 : L.filter((w) => {
        var N, U, R;
        const k = (R = (U = (N = u.status) == null ? void 0 : N.workflows) == null ? void 0 : U.analyzed) == null ? void 0 : R.find((D) => D.name === w);
        return !k || k.status !== "broken";
      })) || [];
    }), h = B(() => {
      var I, C, L, w, k;
      return (I = u.status) != null && I.workflows ? (((C = u.status.workflows.new) == null ? void 0 : C.length) ?? 0) > 0 || (((L = u.status.workflows.modified) == null ? void 0 : L.length) ?? 0) > 0 || (((w = u.status.workflows.deleted) == null ? void 0 : w.length) ?? 0) > 0 || (((k = u.status.workflows.synced) == null ? void 0 : k.length) ?? 0) > 0 : !1;
    }), m = B(() => {
      var C, L, w;
      const I = (C = u.status) == null ? void 0 : C.git_changes;
      return I ? (((L = I.nodes_added) == null ? void 0 : L.length) ?? 0) > 0 || (((w = I.nodes_removed) == null ? void 0 : w.length) ?? 0) > 0 || I.workflow_changes || I.has_other_changes : !1;
    }), a = B(() => {
      var I, C, L, w, k, N;
      return !h.value && !m.value && ((C = (I = u.status) == null ? void 0 : I.comparison) == null ? void 0 : C.is_synced) && (((L = u.status) == null ? void 0 : L.missing_models_count) ?? 0) === 0 && (((N = (k = (w = u.status) == null ? void 0 : w.comparison) == null ? void 0 : k.disabled_nodes) == null ? void 0 : N.length) ?? 0) === 0;
    }), v = B(() => {
      var C, L;
      const I = (L = (C = u.status) == null ? void 0 : C.git_changes) == null ? void 0 : L.workflow_changes;
      return I ? typeof I == "number" ? I : Object.keys(I).length : 0;
    });
    function b(I) {
      return typeof I == "string" ? I : I.name;
    }
    function d(I) {
      return typeof I == "object" && I.is_development === !0;
    }
    return (I, C) => {
      var L, w, k, N, U, R, D, W, z, x, M, T, F, se, X, te, ne, H, Y, O, _, ae;
      return o(), S(ze, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[6] || (C[6] = (ee) => I.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: C[5] || (C[5] = _e(() => {
            }, ["stop"]))
          }, [
            e("div", Ss, [
              C[7] || (C[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (ee) => I.$emit("close"))
              }, "✕")
            ]),
            e("div", Is, [
              e("div", Es, [
                g(Oe, { level: "4" }, {
                  default: i(() => [...C[8] || (C[8] = [
                    y("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                g(we, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              h.value ? (o(), s("div", Ms, [
                e("div", zs, [
                  g(Oe, { level: "4" }, {
                    default: i(() => [...C[9] || (C[9] = [
                      y("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: C[1] || (C[1] = (ee) => I.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                r.value.length ? (o(), s("div", Ls, [
                  e("div", Ts, [
                    C[10] || (C[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Rs, "BROKEN (COMMITTED) (" + l(r.value.length) + ")", 1)
                  ]),
                  e("div", Ns, [
                    (o(!0), s(V, null, Z(r.value, (ee) => (o(), s("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", Ds, l(ee.name), 1),
                      e("span", Os, l(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                p.value.length ? (o(), s("div", Us, [
                  e("div", Ps, [
                    C[11] || (C[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Bs, "BROKEN (UNCOMMITTED) (" + l(p.value.length) + ")", 1)
                  ]),
                  e("div", Fs, [
                    (o(!0), s(V, null, Z(p.value, (ee) => (o(), s("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", As, l(ee.name), 1),
                      e("span", Vs, l(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (w = (L = t.status.workflows) == null ? void 0 : L.new) != null && w.length ? (o(), s("div", Ws, [
                  e("div", Gs, [
                    C[12] || (C[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", js, "NEW (" + l(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Hs, [
                    (o(!0), s(V, null, Z(t.status.workflows.new, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Ks, l(ee), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (N = (k = t.status.workflows) == null ? void 0 : k.modified) != null && N.length ? (o(), s("div", qs, [
                  e("div", Js, [
                    C[13] || (C[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Ys, "MODIFIED (" + l(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Qs, [
                    (o(!0), s(V, null, Z(t.status.workflows.modified, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Xs, l(ee), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (R = (U = t.status.workflows) == null ? void 0 : U.deleted) != null && R.length ? (o(), s("div", Zs, [
                  e("div", en, [
                    C[14] || (C[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", tn, "DELETED (" + l(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", on, [
                    (o(!0), s(V, null, Z(t.status.workflows.deleted, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", sn, l(ee), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                f.value.length ? (o(), s("div", nn, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: C[2] || (C[2] = (ee) => n.value = !n.value)
                  }, [
                    C[15] || (C[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", an, "SYNCED (" + l(f.value.length) + ")", 1),
                    e("span", ln, l(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (o(), s("div", rn, [
                    (o(!0), s(V, null, Z(f.value, (ee) => (o(), s("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", dn, l(ee), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              m.value ? (o(), s("div", cn, [
                g(Oe, { level: "4" }, {
                  default: i(() => [...C[16] || (C[16] = [
                    y("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (W = (D = t.status.git_changes) == null ? void 0 : D.nodes_added) != null && W.length ? (o(), s("div", un, [
                  e("div", mn, [
                    C[17] || (C[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", vn, "NODES ADDED (" + l(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", fn, [
                    (o(!0), s(V, null, Z(t.status.git_changes.nodes_added, (ee) => (o(), s("div", {
                      key: b(ee),
                      class: "change-item"
                    }, [
                      e("span", gn, l(b(ee)), 1),
                      d(ee) ? (o(), s("span", pn, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (x = (z = t.status.git_changes) == null ? void 0 : z.nodes_removed) != null && x.length ? (o(), s("div", hn, [
                  e("div", yn, [
                    C[18] || (C[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", wn, "NODES REMOVED (" + l(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", kn, [
                    (o(!0), s(V, null, Z(t.status.git_changes.nodes_removed, (ee) => (o(), s("div", {
                      key: b(ee),
                      class: "change-item"
                    }, [
                      e("span", bn, l(b(ee)), 1),
                      d(ee) ? (o(), s("span", _n, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (M = t.status.git_changes) != null && M.workflow_changes ? (o(), s("div", $n, [
                  C[19] || (C[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Cn, [
                    e("div", xn, [
                      e("span", Sn, l(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (T = t.status.git_changes) != null && T.has_other_changes ? (o(), s("div", In, [...C[20] || (C[20] = [
                  e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  e("div", { class: "change-list" }, [
                    e("div", { class: "change-item" }, [
                      e("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : c("", !0)
              ])) : c("", !0),
              (F = t.status.comparison) != null && F.is_synced ? c("", !0) : (o(), s("div", En, [
                e("div", Mn, [
                  g(Oe, { level: "4" }, {
                    default: i(() => [...C[21] || (C[21] = [
                      y("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: C[3] || (C[3] = (ee) => I.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                C[22] || (C[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (X = (se = t.status.comparison) == null ? void 0 : se.missing_nodes) != null && X.length ? (o(), s("div", zn, [
                  g(we, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Ln, [
                    (o(!0), s(V, null, Z(t.status.comparison.missing_nodes.slice(0, 10), (ee) => (o(), s("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + l(ee), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), s("div", Tn, " ... and " + l(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (ne = (te = t.status.comparison) == null ? void 0 : te.extra_nodes) != null && ne.length ? (o(), s("div", Rn, [
                  g(we, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Nn, [
                    (o(!0), s(V, null, Z(t.status.comparison.extra_nodes.slice(0, 10), (ee) => (o(), s("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + l(ee), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), s("div", Dn, " ... and " + l(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (Y = (H = t.status.comparison) == null ? void 0 : H.version_mismatches) != null && Y.length ? (o(), s("div", On, [
                  g(we, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (O = t.status.comparison) != null && O.packages_in_sync ? c("", !0) : (o(), s("div", Un, [
                  g(we, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ae = (_ = t.status.comparison) == null ? void 0 : _.disabled_nodes) != null && ae.length ? (o(), s("div", Pn, [
                g(Oe, { level: "4" }, {
                  default: i(() => [...C[23] || (C[23] = [
                    y("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Bn, [
                  C[24] || (C[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, l(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Fn, [
                  (o(!0), s(V, null, Z(t.status.comparison.disabled_nodes.slice(0, 10), (ee) => (o(), s("div", {
                    key: ee,
                    class: "drift-list-item"
                  }, " • " + l(ee), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), s("div", An, " ... and " + l(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), s("div", Vn, [
                g(Oe, { level: "4" }, {
                  default: i(() => [...C[25] || (C[25] = [
                    y("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Wn, [
                  C[26] || (C[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, l(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                C[27] || (C[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              a.value ? (o(), s("div", Gn, [...C[28] || (C[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", jn, [
              g(Q, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (ee) => I.$emit("close"))
              }, {
                default: i(() => [...C[29] || (C[29] = [
                  y(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : c("", !0)
      ]);
    };
  }
}), Kn = /* @__PURE__ */ J(Hn, [["__scopeId", "data-v-c67eed17"]]), qn = { class: "health-section-header" }, Jn = { class: "suggestions-content" }, Yn = { class: "suggestions-text" }, Qn = {
  key: 1,
  style: { "margin-top": "var(--cg-space-3)" }
}, Xn = /* @__PURE__ */ q({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes"],
  setup(t, { emit: u }) {
    const n = t, r = $(!1), p = $(!1);
    function f() {
      r.value = !0;
    }
    function h() {
      r.value = !1, a("view-workflows");
    }
    function m() {
      r.value = !1, a("view-nodes");
    }
    const a = u, v = B(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), b = B(() => n.status.has_changes), d = B(() => {
      const z = n.status.git_changes;
      return z.nodes_added.length > 0 || z.nodes_removed.length > 0 || z.workflow_changes;
    }), I = B(() => n.status.has_changes || v.value), C = B(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), L = B(() => n.status.git_changes.has_other_changes), w = B(() => {
      var z;
      return ((z = n.status.workflows.analyzed) == null ? void 0 : z.filter((x) => x.status === "broken")) || [];
    }), k = B(() => {
      var z;
      return ((z = n.status.workflows.analyzed) == null ? void 0 : z.filter(
        (x) => x.has_path_sync_issues && !x.has_issues
      )) || [];
    }), N = B(() => w.value.length > 0), U = B(() => N.value || k.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced), R = B(() => {
      const z = [];
      return n.status.workflows.new.length > 0 && z.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && z.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && z.push(`${n.status.workflows.deleted.length} deleted`), z.length > 0 ? `${z.join(", ")} workflow${z.length === 1 && !z[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), D = B(() => {
      var M, T;
      const z = [], x = n.status.comparison;
      return (M = x.missing_nodes) != null && M.length && z.push(`${x.missing_nodes.length} missing node${x.missing_nodes.length === 1 ? "" : "s"}`), (T = x.extra_nodes) != null && T.length && z.push(`${x.extra_nodes.length} untracked node${x.extra_nodes.length === 1 ? "" : "s"}`), z.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${z.join(" and ")}.`;
    }), W = B(() => {
      var M, T;
      const z = [], x = n.status.comparison;
      return (M = x.extra_nodes) != null && M.length && (x.extra_nodes.slice(0, 3).forEach((F) => {
        z.push(`Untracked: ${F}`);
      }), x.extra_nodes.length > 3 && z.push(`...and ${x.extra_nodes.length - 3} more untracked`)), (T = x.missing_nodes) != null && T.length && (x.missing_nodes.slice(0, 3).forEach((F) => {
        z.push(`Missing: ${F}`);
      }), x.missing_nodes.length > 3 && z.push(`...and ${x.missing_nodes.length - 3} more missing`)), z;
    });
    return (z, x) => (o(), s(V, null, [
      g(Re, null, {
        header: i(() => [
          g(Ne, { title: "STATUS" })
        ]),
        content: i(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: x[1] || (x[1] = (M) => p.value = !0),
            onMouseleave: x[2] || (x[2] = (M) => p.value = !1)
          }, [
            e("div", qn, [
              g(Oe, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: i(() => [...x[9] || (x[9] = [
                  y(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              g($o, { name: "fade" }, {
                default: i(() => [
                  p.value ? (o(), S(Q, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: f
                  }, {
                    default: i(() => [...x[10] || (x[10] = [
                      y(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : c("", !0)
                ]),
                _: 1
              })
            ]),
            g(os, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Tt({
              left: i(() => [
                t.status.workflows.new.length ? (o(), S(Ve, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (o(), S(Ve, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (o(), S(Ve, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : c("", !0),
                g(Ve, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: v.value
                }, null, 8, ["count", "separator"])
              ]),
              right: i(() => [
                t.status.git_changes.nodes_added.length ? (o(), S(Ve, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), S(Ve, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (o(), S(Ve, {
                  key: 2,
                  icon: "●",
                  count: C.value,
                  label: C.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                L.value ? (o(), S(Ve, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                b.value && !d.value && !L.value ? (o(), S(Ve, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : c("", !0),
                b.value ? c("", !0) : (o(), S(Ve, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              I.value ? {
                name: "footer",
                fn: i(() => [
                  x[12] || (x[12] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Jn, [
                    e("span", Yn, l(R.value), 1),
                    g(Q, {
                      variant: "primary",
                      size: "sm",
                      onClick: x[0] || (x[0] = (M) => z.$emit("commit-changes"))
                    }, {
                      default: i(() => [...x[11] || (x[11] = [
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
          t.status.is_detached_head ? (o(), S(ct, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: i(() => [
              g(Q, {
                variant: "primary",
                size: "sm",
                onClick: x[3] || (x[3] = (M) => z.$emit("create-branch"))
              }, {
                default: i(() => [...x[13] || (x[13] = [
                  y(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          U.value ? (o(), s("div", Qn, [
            g(Oe, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...x[14] || (x[14] = [
                y(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            w.value.length > 0 ? (o(), S(ct, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${w.value.length} workflow${w.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows have missing dependencies that must be resolved before they can run.",
              items: w.value.map((M) => `${M.name} — ${M.issue_summary}`)
            }, {
              actions: i(() => [
                g(Q, {
                  variant: "primary",
                  size: "sm",
                  onClick: x[4] || (x[4] = (M) => z.$emit("view-workflows"))
                }, {
                  default: i(() => [...x[15] || (x[15] = [
                    y(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            k.value.length > 0 ? (o(), S(ct, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${k.value.length} workflow${k.value.length === 1 ? "" : "s"} with path issues`,
              description: "These workflows can run but have model paths that should be synced.",
              items: k.value.map((M) => `${M.name} — ${M.models_needing_path_sync_count} model path${M.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
            }, {
              actions: i(() => [
                g(Q, {
                  variant: "primary",
                  size: "sm",
                  onClick: x[5] || (x[5] = (M) => z.$emit("view-workflows"))
                }, {
                  default: i(() => [...x[16] || (x[16] = [
                    y(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : c("", !0),
            t.status.missing_models_count > 0 && !N.value ? (o(), S(ct, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: i(() => [
                g(Q, {
                  variant: "primary",
                  size: "sm",
                  onClick: x[6] || (x[6] = (M) => z.$emit("view-workflows"))
                }, {
                  default: i(() => [...x[17] || (x[17] = [
                    y(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : c("", !0),
            t.status.comparison.is_synced ? c("", !0) : (o(), S(ct, {
              key: 3,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: D.value,
              items: W.value
            }, {
              actions: i(() => [
                g(Q, {
                  variant: "secondary",
                  size: "sm",
                  onClick: f
                }, {
                  default: i(() => [...x[18] || (x[18] = [
                    y(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                g(Q, {
                  variant: "primary",
                  size: "sm",
                  onClick: x[7] || (x[7] = (M) => z.$emit("view-nodes"))
                }, {
                  default: i(() => [...x[19] || (x[19] = [
                    y(" See Nodes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description", "items"]))
          ])) : c("", !0),
          !U.value && !I.value ? (o(), S(Fe, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : c("", !0)
        ]),
        _: 1
      }),
      g(Kn, {
        show: r.value,
        status: t.status,
        onClose: x[8] || (x[8] = (M) => r.value = !1),
        onNavigateWorkflows: h,
        onNavigateNodes: m
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), Zn = /* @__PURE__ */ J(Xn, [["__scopeId", "data-v-698b3f43"]]), ea = ["type", "value", "placeholder", "disabled"], ta = /* @__PURE__ */ q({
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
  setup(t, { expose: u, emit: n }) {
    const r = t, p = n, f = $(null);
    function h(m) {
      const a = m.target.value;
      p("update:modelValue", a);
    }
    return Ce(() => {
      r.autoFocus && f.value && f.value.focus();
    }), u({
      focus: () => {
        var m;
        return (m = f.value) == null ? void 0 : m.focus();
      },
      blur: () => {
        var m;
        return (m = f.value) == null ? void 0 : m.blur();
      }
    }), (m, a) => (o(), s("input", {
      ref_key: "inputRef",
      ref: f,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: oe(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: h,
      onKeyup: [
        a[0] || (a[0] = Ze((v) => m.$emit("enter"), ["enter"])),
        a[1] || (a[1] = Ze((v) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: a[2] || (a[2] = (v) => m.$emit("focus")),
      onBlur: a[3] || (a[3] = (v) => m.$emit("blur"))
    }, null, 42, ea));
  }
}), Lt = /* @__PURE__ */ J(ta, [["__scopeId", "data-v-0380d08f"]]), oa = { class: "branch-create-form" }, sa = { class: "form-actions" }, na = /* @__PURE__ */ q({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: u }) {
    const n = u, r = $(""), p = B(() => {
      const m = r.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function f() {
      p.value && (n("create", r.value.trim()), r.value = "");
    }
    function h() {
      r.value = "", n("cancel");
    }
    return (m, a) => (o(), s("div", oa, [
      g(Lt, {
        modelValue: r.value,
        "onUpdate:modelValue": a[0] || (a[0] = (v) => r.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: f,
        onEscape: h
      }, null, 8, ["modelValue"]),
      e("div", sa, [
        g(Q, {
          variant: "primary",
          size: "sm",
          disabled: !p.value,
          onClick: f
        }, {
          default: i(() => [...a[1] || (a[1] = [
            y(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        g(Q, {
          variant: "secondary",
          size: "sm",
          onClick: h
        }, {
          default: i(() => [...a[2] || (a[2] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), aa = /* @__PURE__ */ J(na, [["__scopeId", "data-v-7c500394"]]), la = { class: "branch-list-item__indicator" }, ia = { class: "branch-list-item__name" }, ra = {
  key: 0,
  class: "branch-list-item__actions"
}, da = {
  key: 0,
  class: "branch-list-item__current-label"
}, ca = /* @__PURE__ */ q({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (u, n) => (o(), s("div", {
      class: oe(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && u.$emit("click"))
    }, [
      e("span", la, l(t.isCurrent ? "●" : "○"), 1),
      e("span", ia, l(t.branchName), 1),
      u.$slots.actions || t.showCurrentLabel ? (o(), s("div", ra, [
        ue(u.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), s("span", da, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), ua = /* @__PURE__ */ J(ca, [["__scopeId", "data-v-c6581a24"]]), ma = {
  key: 2,
  class: "branch-list"
}, va = /* @__PURE__ */ q({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: u }) {
    const n = u, r = $(!1);
    function p(h) {
      n("create", h), f();
    }
    function f() {
      r.value = !1;
    }
    return (h, m) => (o(), S(Re, null, {
      header: i(() => [
        g(Ne, { title: "BRANCHES" }, {
          actions: i(() => [
            r.value ? c("", !0) : (o(), S(Q, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: m[0] || (m[0] = (a) => r.value = !0)
            }, {
              default: i(() => [...m[1] || (m[1] = [
                y(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        r.value ? (o(), S(aa, {
          key: 0,
          onCreate: p,
          onCancel: f
        })) : c("", !0),
        t.branches.length === 0 ? (o(), S(Fe, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), s("div", ma, [
          (o(!0), s(V, null, Z(t.branches, (a) => (o(), S(ua, {
            key: a.name,
            "branch-name": a.name,
            "is-current": a.is_current
          }, {
            actions: i(() => [
              a.is_current ? c("", !0) : (o(), S(Q, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (v) => h.$emit("delete", a.name)
              }, {
                default: i(() => [...m[2] || (m[2] = [
                  y(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              a.is_current ? c("", !0) : (o(), S(Q, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (v) => h.$emit("switch", a.name)
              }, {
                default: i(() => [...m[3] || (m[3] = [
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
}), fa = /* @__PURE__ */ J(va, [["__scopeId", "data-v-86784ddd"]]), ga = { class: "commit-list" }, pa = /* @__PURE__ */ q({
  __name: "CommitList",
  setup(t) {
    return (u, n) => (o(), s("div", ga, [
      ue(u.$slots, "default", {}, void 0, !0)
    ]));
  }
}), ha = /* @__PURE__ */ J(pa, [["__scopeId", "data-v-8c5ee761"]]), ya = { class: "commit-hash" }, wa = /* @__PURE__ */ q({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const u = t, n = B(() => u.hash.slice(0, u.length));
    return (r, p) => (o(), s("span", ya, l(n.value), 1));
  }
}), no = /* @__PURE__ */ J(wa, [["__scopeId", "data-v-7c333cc6"]]), ka = { class: "commit-message" }, ba = { class: "commit-date" }, _a = /* @__PURE__ */ q({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: u }) {
    const n = t, r = u;
    function p() {
      n.clickable && r("click");
    }
    return (f, h) => (o(), s("div", {
      class: oe(["commit-item", { clickable: t.clickable }]),
      onClick: p
    }, [
      g(no, { hash: t.hash }, null, 8, ["hash"]),
      e("span", ka, l(t.message), 1),
      e("span", ba, l(t.relativeDate), 1),
      f.$slots.actions ? (o(), s("div", {
        key: 0,
        class: "commit-actions",
        onClick: h[0] || (h[0] = _e(() => {
        }, ["stop"]))
      }, [
        ue(f.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), $a = /* @__PURE__ */ J(_a, [["__scopeId", "data-v-dd7c621b"]]), Ca = /* @__PURE__ */ q({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (u, n) => (o(), S(Re, null, {
      header: i(() => [
        g(Ne, { title: "HISTORY" })
      ]),
      content: i(() => [
        t.commits.length === 0 ? (o(), S(Fe, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), S(ha, { key: 1 }, {
          default: i(() => [
            (o(!0), s(V, null, Z(t.commits, (r) => (o(), S($a, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (p) => u.$emit("select", r)
            }, {
              actions: i(() => [
                g(Q, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (p) => u.$emit("checkout", r),
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
}), xa = /* @__PURE__ */ J(Ca, [["__scopeId", "data-v-981c3c64"]]), Ly = [
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
  ...Array(12).fill(null).map((t, u) => ({
    name: `synced-workflow-${u + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + u,
    model_count: 1 + u % 3,
    sync_state: "synced"
  }))
], Ty = {
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
}, Sa = [
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
], Ry = [
  ...Sa,
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
function kt() {
  return !1;
}
function Se() {
  const t = $(!1), u = $(null);
  async function n(j, de) {
    var Ie;
    if (!((Ie = window.app) != null && Ie.api))
      throw new Error("ComfyUI API not available");
    const me = await window.app.api.fetchApi(j, de);
    if (!me.ok) {
      const tt = await me.json().catch(() => ({}));
      throw new Error(tt.error || tt.message || `Request failed: ${me.status}`);
    }
    return me.json();
  }
  async function r(j = !1) {
    return n(j ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function p(j, de = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: j, allow_issues: de })
    });
  }
  async function f(j = 10, de = 0) {
    return n(`/v2/comfygit/log?limit=${j}&offset=${de}`);
  }
  async function h(j) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: j })
    });
  }
  async function m() {
    return n("/v2/comfygit/branches");
  }
  async function a(j) {
    return n(`/v2/comfygit/commit/${j}`);
  }
  async function v(j, de = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: j, force: de })
    });
  }
  async function b(j, de = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: j, start_point: de })
    });
  }
  async function d(j, de = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: j, force: de })
    });
  }
  async function I(j, de = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(j)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: de })
    });
  }
  async function C() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const j = await r();
        return [{
          name: j.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + j.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: j.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: j.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function L(j) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: j })
    });
  }
  async function w() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function k(j) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(j)
    });
  }
  async function N() {
    return n("/v2/workspace/environments/create_status");
  }
  async function U(j = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${j}`);
  }
  async function R(j) {
    return n(`/v2/workspace/environments/${j}`, {
      method: "DELETE"
    });
  }
  async function D(j = !1) {
    try {
      return n(j ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const de = await r(j), me = [];
      return de.workflows.new.forEach((Ie) => {
        me.push({ name: Ie, status: "new", missing_nodes: 0, missing_models: 0, path: Ie });
      }), de.workflows.modified.forEach((Ie) => {
        me.push({ name: Ie, status: "modified", missing_nodes: 0, missing_models: 0, path: Ie });
      }), de.workflows.synced.forEach((Ie) => {
        me.push({ name: Ie, status: "synced", missing_nodes: 0, missing_models: 0, path: Ie });
      }), me;
    }
  }
  async function W(j) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(j)}/details`);
  }
  async function z(j) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(j)}/resolve`, {
      method: "POST"
    });
  }
  async function x(j, de, me) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(j)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: de, install_models: me })
    });
  }
  async function M(j, de, me) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(j)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: de, importance: me })
    });
  }
  async function T() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function F() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function se(j) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(j)}`);
  }
  async function X(j) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: j })
    });
  }
  async function te(j, de) {
    return n(`/v2/workspace/models/${j}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: de })
    });
  }
  async function ne(j, de) {
    return n(`/v2/workspace/models/${j}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: de })
    });
  }
  async function H(j) {
    return n(`/v2/workspace/models/${j}`, {
      method: "DELETE"
    });
  }
  async function Y(j) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(j)
    });
  }
  async function O() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function _() {
    return n("/v2/workspace/models/directory");
  }
  async function ae(j) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: j })
    });
  }
  async function ee() {
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
  async function xe(j) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(j)
    });
  }
  async function ye(j, de) {
    try {
      const me = new URLSearchParams();
      return j && me.append("level", j), de && me.append("lines", de.toString()), n(`/v2/comfygit/debug/logs?${me}`);
    } catch {
      return [];
    }
  }
  async function ge(j, de) {
    try {
      const me = new URLSearchParams();
      return j && me.append("level", j), de && me.append("lines", de.toString()), n(`/v2/workspace/debug/logs?${me}`);
    } catch {
      return [];
    }
  }
  async function rt() {
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
  async function be(j) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(j)}/track-dev`, {
      method: "POST"
    });
  }
  async function pt(j) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(j)}/install`, {
      method: "POST"
    });
  }
  async function ht(j) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(j)}/update`, {
      method: "POST"
    });
  }
  async function yt(j) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(j)}`, {
      method: "DELETE"
    });
  }
  async function he() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Xe(j, de) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: j, url: de })
    });
  }
  async function Ge(j) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(j)}`, {
      method: "DELETE"
    });
  }
  async function Ae(j, de, me) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(j)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: de, push_url: me })
    });
  }
  async function wt(j) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(j)}/fetch`, {
      method: "POST"
    });
  }
  async function ce(j) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(j)}/status`);
    } catch {
      return null;
    }
  }
  async function Ue(j = "skip", de = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: j,
        remove_extra_nodes: de
      })
    });
  }
  return {
    isLoading: t,
    error: u,
    getStatus: r,
    commit: p,
    getHistory: f,
    exportEnv: h,
    // Git Operations
    getBranches: m,
    getCommitDetail: a,
    checkout: v,
    createBranch: b,
    switchBranch: d,
    deleteBranch: I,
    // Environment Management
    getEnvironments: C,
    switchEnvironment: L,
    getSwitchProgress: w,
    createEnvironment: k,
    getCreateProgress: N,
    getComfyUIReleases: U,
    deleteEnvironment: R,
    // Workflow Management
    getWorkflows: D,
    getWorkflowDetails: W,
    resolveWorkflow: z,
    installWorkflowDeps: x,
    setModelImportance: M,
    // Model Management
    getEnvironmentModels: T,
    getWorkspaceModels: F,
    getModelDetails: se,
    openFileLocation: X,
    addModelSource: te,
    removeModelSource: ne,
    deleteModel: H,
    downloadModel: Y,
    scanWorkspaceModels: O,
    getModelsDirectory: _,
    setModelsDirectory: ae,
    // Settings
    getConfig: ee,
    updateConfig: xe,
    // Debug/Logs
    getEnvironmentLogs: ye,
    getWorkspaceLogs: ge,
    // Node Management
    getNodes: rt,
    trackNodeAsDev: be,
    installNode: pt,
    updateNode: ht,
    uninstallNode: yt,
    // Git Remotes
    getRemotes: he,
    addRemote: Xe,
    removeRemote: Ge,
    updateRemoteUrl: Ae,
    fetchRemote: wt,
    getRemoteSyncStatus: ce,
    // Environment Sync
    syncEnvironmentManually: Ue
  };
}
async function bt(t, u = {}, n = 5e3) {
  const r = new AbortController(), p = setTimeout(() => r.abort(), n);
  try {
    const f = await fetch(t, {
      ...u,
      signal: r.signal
    });
    return clearTimeout(p), f;
  } catch (f) {
    throw clearTimeout(p), f.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : f;
  }
}
function ao() {
  const t = $(null);
  async function u() {
    try {
      const h = await bt(
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
    if (t.value || (t.value = await u()), !t.value)
      return null;
    try {
      const h = await bt(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!h.ok) throw new Error("Health check failed");
      return await h.json();
    } catch {
      return t.value = await u(), null;
    }
  }
  async function r() {
    if (t.value || (t.value = await u()), !t.value)
      return null;
    try {
      const h = await bt(
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
    if (t.value || (t.value = await u()), !t.value)
      throw new Error("Control port not available");
    if (!(await bt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function f() {
    if (t.value || (t.value = await u()), !t.value)
      throw new Error("Control port not available");
    if (!(await bt(
      `http://127.0.0.1:${t.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: t,
    discoverControlPort: u,
    checkHealth: n,
    getStatus: r,
    restart: p,
    kill: f
  };
}
const Ia = { class: "base-modal-header" }, Ea = {
  key: 0,
  class: "base-modal-title"
}, Ma = { class: "base-modal-body" }, za = {
  key: 0,
  class: "base-modal-loading"
}, La = {
  key: 1,
  class: "base-modal-error"
}, Ta = {
  key: 0,
  class: "base-modal-footer"
}, Ra = /* @__PURE__ */ q({
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
  setup(t, { emit: u }) {
    const n = t, r = u;
    function p() {
      n.closeOnOverlayClick && r("close");
    }
    function f(h) {
      h.key === "Escape" && r("close");
    }
    return Ce(() => {
      document.addEventListener("keydown", f), document.body.style.overflow = "hidden";
    }), Co(() => {
      document.removeEventListener("keydown", f), document.body.style.overflow = "";
    }), (h, m) => (o(), S(ze, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: p
      }, [
        e("div", {
          class: oe(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = _e(() => {
          }, ["stop"]))
        }, [
          e("div", Ia, [
            ue(h.$slots, "header", {}, () => [
              t.title ? (o(), s("h3", Ea, l(t.title), 1)) : c("", !0)
            ], !0),
            t.showCloseButton ? (o(), s("button", {
              key: 0,
              class: "base-modal-close",
              onClick: m[0] || (m[0] = (a) => h.$emit("close"))
            }, [...m[2] || (m[2] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : c("", !0)
          ]),
          e("div", Ma, [
            t.loading ? (o(), s("div", za, "Loading...")) : t.error ? (o(), s("div", La, l(t.error), 1)) : ue(h.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          h.$slots.footer ? (o(), s("div", Ta, [
            ue(h.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), et = /* @__PURE__ */ J(Ra, [["__scopeId", "data-v-2125a0e6"]]), Na = ["type", "disabled"], Da = {
  key: 0,
  class: "spinner"
}, Oa = /* @__PURE__ */ q({
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
    return (u, n) => (o(), s("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: oe(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => u.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", Da)) : c("", !0),
      ue(u.$slots, "default", {}, void 0, !0)
    ], 10, Na));
  }
}), re = /* @__PURE__ */ J(Oa, [["__scopeId", "data-v-f3452606"]]), Ua = {
  key: 0,
  class: "base-title-count"
}, Pa = /* @__PURE__ */ q({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (u, n) => (o(), S(Vt(`h${t.level}`), {
      class: oe(["base-title", t.variant])
    }, {
      default: i(() => [
        ue(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Ua, "(" + l(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), xt = /* @__PURE__ */ J(Pa, [["__scopeId", "data-v-5a01561d"]]), Ba = ["value", "disabled"], Fa = {
  key: 0,
  value: "",
  disabled: ""
}, Aa = ["value"], Va = {
  key: 0,
  class: "base-select-error"
}, Wa = /* @__PURE__ */ q({
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
    function u(r) {
      return typeof r == "string" ? r : r.value;
    }
    function n(r) {
      return typeof r == "string" ? r : r.label;
    }
    return (r, p) => (o(), s("div", {
      class: oe(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: oe(["base-select", { error: !!t.error }]),
        onChange: p[0] || (p[0] = (f) => r.$emit("update:modelValue", f.target.value))
      }, [
        t.placeholder ? (o(), s("option", Fa, l(t.placeholder), 1)) : c("", !0),
        (o(!0), s(V, null, Z(t.options, (f) => (o(), s("option", {
          key: u(f),
          value: u(f)
        }, l(n(f)), 9, Aa))), 128))
      ], 42, Ba),
      t.error ? (o(), s("span", Va, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Ga = /* @__PURE__ */ J(Wa, [["__scopeId", "data-v-7436d745"]]), ja = { class: "popover-header" }, Ha = { class: "popover-title" }, Ka = { class: "popover-content" }, qa = {
  key: 0,
  class: "popover-actions"
}, Ja = /* @__PURE__ */ q({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (u, n) => (o(), S(ze, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (r) => u.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: qe({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = _e(() => {
          }, ["stop"]))
        }, [
          e("div", ja, [
            e("h4", Ha, l(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", Ka, [
            ue(u.$slots, "content", {}, void 0, !0)
          ]),
          u.$slots.actions ? (o(), s("div", qa, [
            ue(u.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), Je = /* @__PURE__ */ J(Ja, [["__scopeId", "data-v-42815ace"]]), Ya = { class: "detail-section" }, Qa = {
  key: 0,
  class: "empty-message"
}, Xa = { class: "model-header" }, Za = { class: "model-name" }, el = { class: "model-details" }, tl = { class: "model-row" }, ol = { class: "model-row" }, sl = { class: "label" }, nl = {
  key: 0,
  class: "model-row model-row-nodes"
}, al = { class: "node-list" }, ll = ["onClick"], il = {
  key: 1,
  class: "model-row"
}, rl = { class: "value" }, dl = {
  key: 0,
  class: "model-actions"
}, cl = { class: "detail-section" }, ul = {
  key: 0,
  class: "empty-message"
}, ml = { class: "node-name" }, vl = {
  key: 0,
  class: "node-version"
}, fl = /* @__PURE__ */ q({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: u }) {
    const n = t, r = u, { getWorkflowDetails: p, setModelImportance: f } = Se(), h = $(null), m = $(!1), a = $(null), v = $(!1), b = $({}), d = $(!1), I = $(/* @__PURE__ */ new Set()), C = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function L(z) {
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
    function w(z) {
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
    function k(z) {
      if (!z.loaded_by || z.loaded_by.length === 0) return [];
      const x = z.hash || z.filename;
      return I.value.has(x) ? z.loaded_by : z.loaded_by.slice(0, 3);
    }
    function N(z) {
      return I.value.has(z);
    }
    function U(z) {
      I.value.has(z) ? I.value.delete(z) : I.value.add(z), I.value = new Set(I.value);
    }
    async function R() {
      m.value = !0, a.value = null;
      try {
        h.value = await p(n.workflowName);
      } catch (z) {
        a.value = z instanceof Error ? z.message : "Failed to load workflow details";
      } finally {
        m.value = !1;
      }
    }
    function D(z, x) {
      b.value[z] = x, v.value = !0;
    }
    async function W() {
      if (!v.value) {
        r("close");
        return;
      }
      m.value = !0, a.value = null;
      try {
        for (const [z, x] of Object.entries(b.value))
          await f(n.workflowName, z, x);
        r("refresh"), r("close");
      } catch (z) {
        a.value = z instanceof Error ? z.message : "Failed to save changes";
      } finally {
        m.value = !1;
      }
    }
    return Ce(R), (z, x) => (o(), s(V, null, [
      g(et, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: m.value,
        error: a.value || void 0,
        onClose: x[5] || (x[5] = (M) => r("close"))
      }, {
        body: i(() => [
          h.value ? (o(), s(V, { key: 0 }, [
            e("section", Ya, [
              g(xt, { variant: "section" }, {
                default: i(() => [
                  y("MODELS USED (" + l(h.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              h.value.models.length === 0 ? (o(), s("div", Qa, " No models used in this workflow ")) : c("", !0),
              (o(!0), s(V, null, Z(h.value.models, (M) => (o(), s("div", {
                key: M.hash || M.filename,
                class: "model-card"
              }, [
                e("div", Xa, [
                  x[7] || (x[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Za, l(M.filename), 1)
                ]),
                e("div", el, [
                  e("div", tl, [
                    x[8] || (x[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: oe(["value", L(M.status)])
                    }, l(w(M.status)), 3)
                  ]),
                  e("div", ol, [
                    e("span", sl, [
                      x[9] || (x[9] = y(" Importance: ", -1)),
                      g(so, {
                        size: 14,
                        title: "About importance levels",
                        onClick: x[0] || (x[0] = (T) => d.value = !0)
                      })
                    ]),
                    g(Ga, {
                      "model-value": b.value[M.filename] || M.importance,
                      options: C,
                      "onUpdate:modelValue": (T) => D(M.filename, T)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  M.loaded_by && M.loaded_by.length > 0 ? (o(), s("div", nl, [
                    x[10] || (x[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", al, [
                      (o(!0), s(V, null, Z(k(M), (T, F) => (o(), s("div", {
                        key: `${T.node_id}-${F}`,
                        class: "node-reference"
                      }, l(T.node_type) + " (Node #" + l(T.node_id) + ") ", 1))), 128)),
                      M.loaded_by.length > 3 ? (o(), s("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (T) => U(M.hash || M.filename)
                      }, l(N(M.hash || M.filename) ? "▼ Show less" : `▶ View all (${M.loaded_by.length})`), 9, ll)) : c("", !0)
                    ])
                  ])) : c("", !0),
                  M.size_mb ? (o(), s("div", il, [
                    x[11] || (x[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", rl, l(M.size_mb) + " MB", 1)
                  ])) : c("", !0)
                ]),
                M.status !== "available" ? (o(), s("div", dl, [
                  M.status === "downloadable" ? (o(), S(re, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: x[1] || (x[1] = (T) => r("resolve"))
                  }, {
                    default: i(() => [...x[12] || (x[12] = [
                      y(" Download ", -1)
                    ])]),
                    _: 1
                  })) : M.status === "path_mismatch" ? (o(), S(re, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: x[2] || (x[2] = (T) => r("resolve"))
                  }, {
                    default: i(() => [...x[13] || (x[13] = [
                      y(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), S(re, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: x[3] || (x[3] = (T) => r("resolve"))
                  }, {
                    default: i(() => [...x[14] || (x[14] = [
                      y(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : c("", !0)
              ]))), 128))
            ]),
            e("section", cl, [
              g(xt, { variant: "section" }, {
                default: i(() => [
                  y("NODES USED (" + l(h.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              h.value.nodes.length === 0 ? (o(), s("div", ul, " No custom nodes used in this workflow ")) : c("", !0),
              (o(!0), s(V, null, Z(h.value.nodes, (M) => (o(), s("div", {
                key: M.name,
                class: "node-item"
              }, [
                e("span", {
                  class: oe(["node-status", M.status === "installed" ? "installed" : "missing"])
                }, l(M.status === "installed" ? "✓" : "✕"), 3),
                e("span", ml, l(M.name), 1),
                M.version ? (o(), s("span", vl, "v" + l(M.version), 1)) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: i(() => [
          g(re, {
            variant: "secondary",
            onClick: x[4] || (x[4] = (M) => r("close"))
          }, {
            default: i(() => [...x[15] || (x[15] = [
              y(" Close ", -1)
            ])]),
            _: 1
          }),
          v.value ? (o(), S(re, {
            key: 0,
            variant: "primary",
            onClick: W
          }, {
            default: i(() => [...x[16] || (x[16] = [
              y(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      g(Je, {
        show: d.value,
        title: "Model Importance Levels",
        onClose: x[6] || (x[6] = (M) => d.value = !1)
      }, {
        content: i(() => [...x[17] || (x[17] = [
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
}), gl = /* @__PURE__ */ J(fl, [["__scopeId", "data-v-eabcf820"]]), pe = to({
  items: [],
  status: "idle"
});
let We = null;
function lo() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Ut(t) {
  return pe.items.find((u) => u.id === t);
}
async function ut() {
  if (pe.status === "downloading") return;
  const t = pe.items.find((u) => u.status === "queued");
  if (!t) {
    pe.status = "idle";
    return;
  }
  pe.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await pl(t), t.status = "completed", t.progress = 100;
  } catch (u) {
    t.status = "failed", t.error = u instanceof Error ? u.message : "Download failed", t.retries++;
  } finally {
    pe.status = "idle", ut();
  }
}
async function pl(t) {
  return new Promise((u, n) => {
    We && (We.close(), We = null);
    const r = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), p = new EventSource(`/v2/comfygit/models/download-stream?${r}`);
    We = p;
    let f = Date.now(), h = 0, m = !1;
    p.onmessage = (a) => {
      try {
        const v = JSON.parse(a.data);
        switch (v.type) {
          case "progress":
            t.downloaded = v.downloaded || 0, t.size = v.total || t.size;
            const b = Date.now(), d = (b - f) / 1e3;
            if (d > 0.5) {
              const I = t.downloaded - h;
              if (t.speed = I / d, f = b, h = t.downloaded, t.speed > 0 && t.size > 0) {
                const C = t.size - t.downloaded;
                t.eta = C / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, p.close(), We = null, u();
            break;
          case "error":
            m = !0, p.close(), We = null, n(new Error(v.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, p.onerror = () => {
      p.close(), We = null, m || n(new Error("Connection lost"));
    };
  });
}
async function hl() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const u = await t.json();
    if (!u.pending_downloads || u.pending_downloads.length === 0) return;
    for (const n of u.pending_downloads) {
      if (pe.items.some((p) => p.url === n.url && p.filename === n.filename))
        continue;
      const r = {
        id: lo(),
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
      pe.items.push(r);
    }
    console.log(`[ComfyGit] Loaded ${u.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Et() {
  function t(k) {
    for (const N of k) {
      if (pe.items.some(
        (D) => D.url === N.url && D.targetPath === N.targetPath && ["queued", "downloading", "paused", "completed"].includes(D.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${N.filename}`);
        continue;
      }
      const R = {
        id: lo(),
        workflow: N.workflow,
        filename: N.filename,
        url: N.url,
        targetPath: N.targetPath,
        size: N.size || 0,
        type: N.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      pe.items.push(R);
    }
    pe.status === "idle" && ut();
  }
  async function u(k) {
    const N = Ut(k);
    if (N) {
      if (N.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(N.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        We && (We.close(), We = null), N.status = "failed", N.error = "Cancelled by user", pe.status = "idle", ut();
      } else if (N.status === "queued") {
        const U = pe.items.findIndex((R) => R.id === k);
        U >= 0 && pe.items.splice(U, 1);
      }
    }
  }
  function n(k) {
    const N = Ut(k);
    !N || N.status !== "failed" || (N.status = "queued", N.error = void 0, N.progress = 0, N.downloaded = 0, pe.status === "idle" && ut());
  }
  function r(k) {
    const N = Ut(k);
    !N || N.status !== "paused" || (N.status = "queued", pe.status === "idle" && ut());
  }
  function p() {
    const k = pe.items.filter((N) => N.status === "paused");
    for (const N of k)
      N.status = "queued";
    pe.status === "idle" && ut();
  }
  function f(k) {
    const N = pe.items.findIndex((U) => U.id === k);
    N >= 0 && ["completed", "failed", "paused"].includes(pe.items[N].status) && pe.items.splice(N, 1);
  }
  function h() {
    pe.items = pe.items.filter((k) => k.status !== "completed");
  }
  function m() {
    pe.items = pe.items.filter((k) => k.status !== "failed");
  }
  const a = B(
    () => pe.items.find((k) => k.status === "downloading")
  ), v = B(
    () => pe.items.filter((k) => k.status === "queued")
  ), b = B(
    () => pe.items.filter((k) => k.status === "completed")
  ), d = B(
    () => pe.items.filter((k) => k.status === "failed")
  ), I = B(
    () => pe.items.filter((k) => k.status === "paused")
  ), C = B(() => pe.items.length > 0), L = B(
    () => pe.items.filter((k) => k.status === "queued" || k.status === "downloading").length
  ), w = B(
    () => pe.items.some((k) => k.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: xo(pe),
    // Computed
    currentDownload: a,
    queuedItems: v,
    completedItems: b,
    failedItems: d,
    pausedItems: I,
    hasItems: C,
    activeCount: L,
    hasPaused: w,
    // Actions
    addToQueue: t,
    cancelDownload: u,
    retryDownload: n,
    resumeDownload: r,
    resumeAllPaused: p,
    removeItem: f,
    clearCompleted: h,
    clearFailed: m,
    loadPendingDownloads: hl
  };
}
function yl() {
  const t = $(null), u = $(null), n = $([]), r = $([]), p = $(!1), f = $(null);
  async function h(U, R) {
    var W;
    if (!((W = window.app) != null && W.api))
      throw new Error("ComfyUI API not available");
    const D = await window.app.api.fetchApi(U, R);
    if (!D.ok) {
      const z = await D.json().catch(() => ({})), x = z.error || z.message || `Request failed: ${D.status}`;
      throw new Error(x);
    }
    return D.json();
  }
  async function m(U) {
    p.value = !0, f.value = null;
    try {
      let R;
      return kt() || (R = await h(
        `/v2/comfygit/workflow/${U}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = R, R;
    } catch (R) {
      const D = R instanceof Error ? R.message : "Unknown error occurred";
      throw f.value = D, R;
    } finally {
      p.value = !1;
    }
  }
  async function a(U, R, D, W) {
    p.value = !0, f.value = null;
    try {
      let z;
      if (!kt()) {
        const x = Object.fromEntries(R), M = Object.fromEntries(D), T = W ? Array.from(W) : [];
        z = await h(
          `/v2/comfygit/workflow/${U}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: x,
              model_choices: M,
              skipped_packages: T
            })
          }
        );
      }
      return u.value = z, z;
    } catch (z) {
      const x = z instanceof Error ? z.message : "Unknown error occurred";
      throw f.value = x, z;
    } finally {
      p.value = !1;
    }
  }
  async function v(U, R = 10) {
    p.value = !0, f.value = null;
    try {
      let D;
      return kt() || (D = await h(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: U, limit: R })
        }
      )), n.value = D.results, D.results;
    } catch (D) {
      const W = D instanceof Error ? D.message : "Unknown error occurred";
      throw f.value = W, D;
    } finally {
      p.value = !1;
    }
  }
  async function b(U, R = 10) {
    p.value = !0, f.value = null;
    try {
      let D;
      return kt() || (D = await h(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: U, limit: R })
        }
      )), r.value = D.results, D.results;
    } catch (D) {
      const W = D instanceof Error ? D.message : "Unknown error occurred";
      throw f.value = W, D;
    } finally {
      p.value = !1;
    }
  }
  const d = to({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function I() {
    d.phase = "idle", d.currentFile = void 0, d.currentFileIndex = void 0, d.totalFiles = void 0, d.bytesDownloaded = void 0, d.bytesTotal = void 0, d.completedFiles = [], d.nodesToInstall = [], d.nodesInstalled = [], d.installError = void 0, d.needsRestart = void 0, d.error = void 0, d.nodeInstallProgress = void 0;
  }
  async function C(U) {
    d.phase = "installing", d.nodesInstalled = [], d.installError = void 0, d.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return kt(), await L(U);
    } catch (R) {
      const D = R instanceof Error ? R.message : "Failed to install nodes";
      throw d.installError = D, R;
    }
  }
  async function L(U) {
    var D;
    const R = await h(
      `/v2/comfygit/workflow/${U}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: d.nodesToInstall
        })
      }
    );
    if (d.nodeInstallProgress) {
      d.nodeInstallProgress.totalNodes = d.nodesToInstall.length;
      const W = new Map(((D = R.failed) == null ? void 0 : D.map((z) => [z.node_id, z.error])) || []);
      for (let z = 0; z < d.nodesToInstall.length; z++) {
        const x = d.nodesToInstall[z], M = W.get(x);
        d.nodeInstallProgress.completedNodes.push({
          node_id: x,
          success: !M,
          error: M
        });
      }
    }
    return d.nodesInstalled = R.nodes_installed, d.needsRestart = R.nodes_installed.length > 0, R.failed && R.failed.length > 0 && (d.installError = `${R.failed.length} package(s) failed to install`), R;
  }
  async function w(U, R, D) {
    I(), d.phase = "resolving", f.value = null;
    const W = Object.fromEntries(R), z = Object.fromEntries(D);
    try {
      const x = await fetch(`/v2/comfygit/workflow/${U}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: W,
          model_choices: z
        })
      });
      if (!x.ok)
        throw new Error(`Request failed: ${x.status}`);
      if (!x.body)
        throw new Error("No response body");
      const M = x.body.getReader(), T = new TextDecoder();
      let F = "";
      for (; ; ) {
        const { done: se, value: X } = await M.read();
        if (se) break;
        F += T.decode(X, { stream: !0 });
        const te = F.split(`

`);
        F = te.pop() || "";
        for (const ne of te) {
          if (!ne.trim()) continue;
          const H = ne.split(`
`);
          let Y = "", O = "";
          for (const _ of H)
            _.startsWith("event: ") ? Y = _.slice(7) : _.startsWith("data: ") && (O = _.slice(6));
          if (O)
            try {
              const _ = JSON.parse(O);
              k(Y, _);
            } catch (_) {
              console.warn("Failed to parse SSE event:", _);
            }
        }
      }
    } catch (x) {
      const M = x instanceof Error ? x.message : "Unknown error occurred";
      throw f.value = M, d.error = M, d.phase = "error", x;
    }
  }
  function k(U, R) {
    switch (U) {
      case "batch_start":
        d.phase = "downloading", d.totalFiles = R.total;
        break;
      case "file_start":
        d.currentFile = R.filename, d.currentFileIndex = R.index, d.bytesDownloaded = 0, d.bytesTotal = void 0;
        break;
      case "file_progress":
        d.bytesDownloaded = R.downloaded, d.bytesTotal = R.total;
        break;
      case "file_complete":
        d.completedFiles.push({
          filename: R.filename,
          success: R.success,
          error: R.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        d.nodesToInstall = R.nodes_to_install || [], R.download_results && (d.completedFiles = R.download_results), d.phase = "complete";
        break;
      case "error":
        d.error = R.message, d.phase = "error", f.value = R.message;
        break;
    }
  }
  function N(U, R) {
    const { addToQueue: D } = Et(), W = R.filter((z) => z.url && z.target_path).map((z) => ({
      workflow: U,
      filename: z.filename,
      url: z.url,
      targetPath: z.target_path,
      size: z.size || 0,
      type: "model"
    }));
    return W.length > 0 && D(W), W.length;
  }
  return {
    // State
    result: t,
    appliedResult: u,
    searchResults: n,
    modelSearchResults: r,
    isLoading: p,
    error: f,
    progress: d,
    // Methods
    analyzeWorkflow: m,
    applyResolution: a,
    applyResolutionWithProgress: w,
    installNodes: C,
    searchNodes: v,
    searchModels: b,
    resetProgress: I,
    queueModelDownloads: N
  };
}
const wl = { class: "resolution-stepper" }, kl = { class: "stepper-header" }, bl = ["onClick"], _l = {
  key: 0,
  class: "step-icon"
}, $l = {
  key: 1,
  class: "step-number"
}, Cl = { class: "step-label" }, xl = {
  key: 0,
  class: "step-connector"
}, Sl = { class: "stepper-content" }, Il = /* @__PURE__ */ q({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: u }) {
    const n = t, r = u;
    function p(v) {
      var b;
      if ((b = n.stepStats) != null && b[v]) {
        const d = n.stepStats[v];
        return d.total > 0 && d.resolved === d.total;
      }
      return n.completedSteps.includes(v);
    }
    function f(v) {
      var b;
      if ((b = n.stepStats) != null && b[v]) {
        const d = n.stepStats[v];
        return d.resolved > 0 && d.resolved < d.total;
      }
      return !1;
    }
    function h(v) {
      return p(v) ? "state-complete" : f(v) ? "state-partial" : "state-pending";
    }
    function m(v) {
      return !1;
    }
    function a(v) {
      r("step-change", v);
    }
    return (v, b) => (o(), s("div", wl, [
      e("div", kl, [
        (o(!0), s(V, null, Z(t.steps, (d, I) => (o(), s("div", {
          key: d.id,
          class: oe(["step", {
            active: t.currentStep === d.id,
            completed: p(d.id),
            "in-progress": f(d.id),
            disabled: m(d.id)
          }]),
          onClick: (C) => a(d.id)
        }, [
          e("div", {
            class: oe(["step-indicator", h(d.id)])
          }, [
            p(d.id) ? (o(), s("span", _l, "✓")) : (o(), s("span", $l, l(I + 1), 1))
          ], 2),
          e("div", Cl, l(d.label), 1),
          I < t.steps.length - 1 ? (o(), s("div", xl)) : c("", !0)
        ], 10, bl))), 128))
      ]),
      e("div", Sl, [
        ue(v.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), El = /* @__PURE__ */ J(Il, [["__scopeId", "data-v-2a7b3af8"]]), Ml = /* @__PURE__ */ q({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const u = t, n = B(() => u.confidence >= 0.9 ? "high" : u.confidence >= 0.7 ? "medium" : "low"), r = B(() => `confidence-${n.value}`), p = B(() => u.showPercentage ? `${Math.round(u.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (f, h) => (o(), s("span", {
      class: oe(["confidence-badge", r.value, t.size])
    }, l(p.value), 3));
  }
}), Ht = /* @__PURE__ */ J(Ml, [["__scopeId", "data-v-17ec4b80"]]), zl = { class: "node-info" }, Ll = { class: "node-info-text" }, Tl = { class: "item-body" }, Rl = {
  key: 0,
  class: "resolved-state"
}, Nl = {
  key: 1,
  class: "multiple-options"
}, Dl = { class: "options-list" }, Ol = ["onClick"], Ul = ["name", "value", "checked", "onChange"], Pl = { class: "option-content" }, Bl = { class: "option-header" }, Fl = { class: "option-package-id" }, Al = {
  key: 0,
  class: "option-title"
}, Vl = { class: "option-meta" }, Wl = {
  key: 0,
  class: "installed-badge"
}, Gl = { class: "action-buttons" }, jl = {
  key: 2,
  class: "unresolved"
}, Hl = { class: "action-buttons" }, Kl = /* @__PURE__ */ q({
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
  setup(t, { emit: u }) {
    const n = t, r = u, p = B(() => !!n.choice);
    B(() => {
      var m;
      return (m = n.choice) == null ? void 0 : m.action;
    }), B(() => {
      var m;
      return (m = n.choice) == null ? void 0 : m.package_id;
    });
    const f = B(() => {
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
    function h(m) {
      r("option-selected", m);
    }
    return (m, a) => (o(), s("div", {
      class: oe(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: p.value }])
    }, [
      e("div", zl, [
        e("span", Ll, [
          a[7] || (a[7] = y("Node type: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: oe(["status-badge", f.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", Tl, [
        p.value ? (o(), s("div", Rl, [
          g(re, {
            variant: "ghost",
            size: "sm",
            onClick: a[0] || (a[0] = (v) => r("clear-choice"))
          }, {
            default: i(() => [...a[8] || (a[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", Nl, [
          a[12] || (a[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Dl, [
            (o(!0), s(V, null, Z(t.options, (v, b) => (o(), s("label", {
              key: v.package_id,
              class: oe(["option-card", { selected: t.selectedOptionIndex === b }]),
              onClick: (d) => h(b)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: b,
                checked: t.selectedOptionIndex === b,
                onChange: (d) => h(b)
              }, null, 40, Ul),
              e("div", Pl, [
                e("div", Bl, [
                  e("span", Fl, l(v.package_id), 1),
                  g(Ht, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (o(), s("div", Al, l(v.title), 1)) : c("", !0),
                e("div", Vl, [
                  v.is_installed ? (o(), s("span", Wl, "Already Installed")) : c("", !0)
                ])
              ])
            ], 10, Ol))), 128))
          ]),
          e("div", Gl, [
            g(re, {
              variant: "ghost",
              size: "sm",
              onClick: a[1] || (a[1] = (v) => r("search"))
            }, {
              default: i(() => [...a[9] || (a[9] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "ghost",
              size: "sm",
              onClick: a[2] || (a[2] = (v) => r("manual-entry"))
            }, {
              default: i(() => [...a[10] || (a[10] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: a[3] || (a[3] = (v) => r("mark-optional"))
            }, {
              default: i(() => [...a[11] || (a[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", jl, [
          a[16] || (a[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", Hl, [
            g(re, {
              variant: "primary",
              size: "sm",
              onClick: a[4] || (a[4] = (v) => r("search"))
            }, {
              default: i(() => [...a[13] || (a[13] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: a[5] || (a[5] = (v) => r("manual-entry"))
            }, {
              default: i(() => [...a[14] || (a[14] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: a[6] || (a[6] = (v) => r("mark-optional"))
            }, {
              default: i(() => [...a[15] || (a[15] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), ql = /* @__PURE__ */ J(Kl, [["__scopeId", "data-v-e02629e7"]]), Jl = { class: "item-navigator" }, Yl = { class: "nav-item-info" }, Ql = ["title"], Xl = { class: "nav-controls" }, Zl = { class: "nav-arrows" }, ei = ["disabled"], ti = ["disabled"], oi = { class: "nav-position" }, si = /* @__PURE__ */ q({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: u }) {
    const n = u;
    return (r, p) => (o(), s("div", Jl, [
      e("div", Yl, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, l(t.itemName), 9, Ql)
      ]),
      e("div", Xl, [
        e("div", Zl, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: p[0] || (p[0] = (f) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, ei),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: p[1] || (p[1] = (f) => n("next")),
            title: "Next item"
          }, " → ", 8, ti)
        ]),
        e("span", oi, l(t.currentIndex + 1) + "/" + l(t.totalItems), 1)
      ])
    ]));
  }
}), io = /* @__PURE__ */ J(si, [["__scopeId", "data-v-74af7920"]]), ni = ["type", "value", "placeholder", "disabled"], ai = {
  key: 0,
  class: "base-input-error"
}, li = /* @__PURE__ */ q({
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
    return (u, n) => (o(), s("div", {
      class: oe(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: oe(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          n[1] || (n[1] = Ze((r) => u.$emit("enter"), ["enter"])),
          n[2] || (n[2] = Ze((r) => u.$emit("escape"), ["escape"]))
        ]
      }, null, 42, ni),
      t.error ? (o(), s("span", ai, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Be = /* @__PURE__ */ J(li, [["__scopeId", "data-v-9ba02cdc"]]), ii = { class: "node-resolution-step" }, ri = {
  key: 0,
  class: "auto-resolved-section"
}, di = { class: "section-header" }, ci = { class: "stat-badge" }, ui = { class: "resolved-packages-list" }, mi = { class: "package-info" }, vi = { class: "package-id" }, fi = { class: "node-count" }, gi = { class: "package-actions" }, pi = {
  key: 0,
  class: "status-badge install"
}, hi = {
  key: 1,
  class: "status-badge skip"
}, yi = ["onClick"], wi = {
  key: 1,
  class: "section-divider"
}, ki = { class: "step-header" }, bi = { class: "stat-badge" }, _i = {
  key: 1,
  class: "step-body"
}, $i = {
  key: 3,
  class: "empty-state"
}, Ci = { class: "node-search-modal" }, xi = { class: "node-modal-body" }, Si = {
  key: 0,
  class: "node-search-results"
}, Ii = ["onClick"], Ei = { class: "node-result-header" }, Mi = { class: "node-result-package-id" }, zi = {
  key: 0,
  class: "node-result-description"
}, Li = {
  key: 1,
  class: "node-no-results"
}, Ti = {
  key: 2,
  class: "node-searching"
}, Ri = { class: "node-manual-entry-modal" }, Ni = { class: "node-modal-body" }, Di = { class: "node-modal-actions" }, Oi = /* @__PURE__ */ q({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: u }) {
    const n = t, r = u, p = $(0), f = $(!1), h = $(!1), m = $(""), a = $(""), v = $([]), b = $(!1), d = B(() => n.nodes[p.value]), I = B(() => n.nodes.filter((ne) => n.nodeChoices.has(ne.node_type)).length), C = B(() => n.autoResolvedPackages.filter((ne) => !n.skippedPackages.has(ne.package_id)).length);
    function L(ne) {
      return n.skippedPackages.has(ne);
    }
    function w(ne) {
      r("package-skip", ne);
    }
    const k = B(() => {
      var H;
      if (!d.value) return "not-found";
      const ne = n.nodeChoices.get(d.value.node_type);
      if (ne)
        switch (ne.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (H = d.value.options) != null && H.length ? "ambiguous" : "not-found";
    }), N = B(() => {
      var H;
      if (!d.value) return;
      const ne = n.nodeChoices.get(d.value.node_type);
      if (ne)
        switch (ne.action) {
          case "install":
            return ne.package_id ? `→ ${ne.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (H = d.value.options) != null && H.length ? `${d.value.options.length} matches` : "Not Found";
    });
    function U(ne) {
      ne >= 0 && ne < n.nodes.length && (p.value = ne);
    }
    function R() {
      d.value && r("mark-optional", d.value.node_type);
    }
    function D() {
      d.value && r("skip", d.value.node_type);
    }
    function W(ne) {
      d.value && r("option-selected", d.value.node_type, ne);
    }
    function z() {
      d.value && r("clear-choice", d.value.node_type);
    }
    function x() {
      d.value && (m.value = d.value.node_type, f.value = !0);
    }
    function M() {
      a.value = "", h.value = !0;
    }
    function T() {
      f.value = !1, m.value = "", v.value = [];
    }
    function F() {
      h.value = !1, a.value = "";
    }
    function se() {
      b.value = !0, setTimeout(() => {
        b.value = !1;
      }, 300);
    }
    function X(ne) {
      d.value && (r("manual-entry", d.value.node_type, ne.package_id), T());
    }
    function te() {
      !d.value || !a.value.trim() || (r("manual-entry", d.value.node_type, a.value.trim()), F());
    }
    return (ne, H) => {
      var Y, O;
      return o(), s("div", ii, [
        t.autoResolvedPackages.length > 0 ? (o(), s("div", ri, [
          e("div", di, [
            H[4] || (H[4] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", ci, l(C.value) + "/" + l(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", ui, [
            (o(!0), s(V, null, Z(t.autoResolvedPackages, (_) => (o(), s("div", {
              key: _.package_id,
              class: "resolved-package-item"
            }, [
              e("div", mi, [
                e("code", vi, l(_.package_id), 1),
                e("span", fi, l(_.node_types_count) + " node type" + l(_.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", gi, [
                L(_.package_id) ? (o(), s("span", hi, " SKIPPED ")) : (o(), s("span", pi, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (ae) => w(_.package_id)
                }, l(L(_.package_id) ? "Include" : "Skip"), 9, yi)
              ])
            ]))), 128))
          ])
        ])) : c("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (o(), s("div", wi)) : c("", !0),
        t.nodes.length > 0 ? (o(), s(V, { key: 2 }, [
          e("div", ki, [
            H[5] || (H[5] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", bi, l(I.value) + "/" + l(t.nodes.length) + " resolved", 1)
          ]),
          d.value ? (o(), S(io, {
            key: 0,
            "item-name": d.value.node_type,
            "current-index": p.value,
            "total-items": t.nodes.length,
            onPrev: H[0] || (H[0] = (_) => U(p.value - 1)),
            onNext: H[1] || (H[1] = (_) => U(p.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
          d.value ? (o(), s("div", _i, [
            g(ql, {
              "node-type": d.value.node_type,
              "has-multiple-options": !!((Y = d.value.options) != null && Y.length),
              options: d.value.options,
              choice: (O = t.nodeChoices) == null ? void 0 : O.get(d.value.node_type),
              status: k.value,
              "status-label": N.value,
              onMarkOptional: R,
              onSkip: D,
              onManualEntry: M,
              onSearch: x,
              onOptionSelected: W,
              onClearChoice: z
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
          ])) : c("", !0)
        ], 64)) : c("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (o(), s("div", $i, [...H[6] || (H[6] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : c("", !0),
        (o(), S(ze, { to: "body" }, [
          f.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: _e(T, ["self"])
          }, [
            e("div", Ci, [
              e("div", { class: "node-modal-header" }, [
                H[7] || (H[7] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: T
                }, "✕")
              ]),
              e("div", xi, [
                g(Be, {
                  modelValue: m.value,
                  "onUpdate:modelValue": H[2] || (H[2] = (_) => m.value = _),
                  placeholder: "Search by node type, package name...",
                  onInput: se
                }, null, 8, ["modelValue"]),
                v.value.length > 0 ? (o(), s("div", Si, [
                  (o(!0), s(V, null, Z(v.value, (_) => (o(), s("div", {
                    key: _.package_id,
                    class: "node-search-result-item",
                    onClick: (ae) => X(_)
                  }, [
                    e("div", Ei, [
                      e("code", Mi, l(_.package_id), 1),
                      _.match_confidence ? (o(), S(Ht, {
                        key: 0,
                        confidence: _.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : c("", !0)
                    ]),
                    _.description ? (o(), s("div", zi, l(_.description), 1)) : c("", !0)
                  ], 8, Ii))), 128))
                ])) : m.value && !b.value ? (o(), s("div", Li, ' No packages found matching "' + l(m.value) + '" ', 1)) : c("", !0),
                b.value ? (o(), s("div", Ti, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), S(ze, { to: "body" }, [
          h.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: _e(F, ["self"])
          }, [
            e("div", Ri, [
              e("div", { class: "node-modal-header" }, [
                H[8] || (H[8] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: F
                }, "✕")
              ]),
              e("div", Ni, [
                g(Be, {
                  modelValue: a.value,
                  "onUpdate:modelValue": H[3] || (H[3] = (_) => a.value = _),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Di, [
                  g(re, {
                    variant: "secondary",
                    onClick: F
                  }, {
                    default: i(() => [...H[9] || (H[9] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  g(re, {
                    variant: "primary",
                    disabled: !a.value.trim(),
                    onClick: te
                  }, {
                    default: i(() => [...H[10] || (H[10] = [
                      y(" Add Package ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : c("", !0)
        ]))
      ]);
    };
  }
}), Ui = /* @__PURE__ */ J(Oi, [["__scopeId", "data-v-6474069a"]]), Pi = { class: "node-info" }, Bi = { class: "node-info-text" }, Fi = { class: "item-body" }, Ai = {
  key: 0,
  class: "resolved-state"
}, Vi = {
  key: 1,
  class: "multiple-options"
}, Wi = { class: "options-list" }, Gi = ["onClick"], ji = ["name", "value", "checked", "onChange"], Hi = { class: "option-content" }, Ki = { class: "option-header" }, qi = { class: "option-filename" }, Ji = { class: "option-meta" }, Yi = { class: "option-size" }, Qi = { class: "option-category" }, Xi = { class: "option-path" }, Zi = { class: "action-buttons" }, er = {
  key: 2,
  class: "unresolved"
}, tr = { class: "action-buttons" }, or = /* @__PURE__ */ q({
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
  setup(t, { emit: u }) {
    const n = t, r = u, p = B(() => !!n.choice);
    B(() => {
      var a;
      return (a = n.choice) == null ? void 0 : a.action;
    }), B(() => {
      var a, v;
      return ((v = (a = n.choice) == null ? void 0 : a.selected_model) == null ? void 0 : v.filename) || "selected";
    });
    const f = B(() => {
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
    function h(a) {
      r("option-selected", a);
    }
    function m(a) {
      if (!a) return "Unknown";
      const v = a / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(a / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (a, v) => (o(), s("div", {
      class: oe(["model-resolution-item", { resolved: p.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", Pi, [
        e("span", Bi, [
          v[7] || (v[7] = y("Used by: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: oe(["status-badge", f.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", Fi, [
        p.value ? (o(), s("div", Ai, [
          g(re, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (b) => r("clear-choice"))
          }, {
            default: i(() => [...v[8] || (v[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", Vi, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Wi, [
            (o(!0), s(V, null, Z(t.options, (b, d) => (o(), s("label", {
              key: b.model.hash,
              class: oe(["option-card", { selected: t.selectedOptionIndex === d }]),
              onClick: (I) => h(d)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: d,
                checked: t.selectedOptionIndex === d,
                onChange: (I) => h(d)
              }, null, 40, ji),
              e("div", Hi, [
                e("div", Ki, [
                  e("span", qi, l(b.model.filename), 1),
                  g(Ht, {
                    confidence: b.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Ji, [
                  e("span", Yi, l(m(b.model.size)), 1),
                  e("span", Qi, l(b.model.category), 1)
                ]),
                e("div", Xi, l(b.model.relative_path), 1)
              ])
            ], 10, Gi))), 128))
          ]),
          e("div", Zi, [
            g(re, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (b) => r("search"))
            }, {
              default: i(() => [...v[9] || (v[9] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (b) => r("download-url"))
            }, {
              default: i(() => [...v[10] || (v[10] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (b) => r("mark-optional"))
            }, {
              default: i(() => [...v[11] || (v[11] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", er, [
          v[16] || (v[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", tr, [
            g(re, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (b) => r("search"))
            }, {
              default: i(() => [...v[13] || (v[13] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (b) => r("download-url"))
            }, {
              default: i(() => [...v[14] || (v[14] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (b) => r("mark-optional"))
            }, {
              default: i(() => [...v[15] || (v[15] = [
                y(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), sr = /* @__PURE__ */ J(or, [["__scopeId", "data-v-8a82fefa"]]), nr = { class: "model-resolution-step" }, ar = { class: "step-header" }, lr = { class: "step-info" }, ir = { class: "step-title" }, rr = { class: "step-description" }, dr = { class: "stat-badge" }, cr = {
  key: 1,
  class: "step-body"
}, ur = {
  key: 2,
  class: "empty-state"
}, mr = { class: "model-search-modal" }, vr = { class: "model-modal-body" }, fr = {
  key: 0,
  class: "model-search-results"
}, gr = ["onClick"], pr = { class: "model-result-header" }, hr = { class: "model-result-filename" }, yr = { class: "model-result-meta" }, wr = { class: "model-result-category" }, kr = { class: "model-result-size" }, br = {
  key: 0,
  class: "model-result-path"
}, _r = {
  key: 1,
  class: "model-no-results"
}, $r = {
  key: 2,
  class: "model-searching"
}, Cr = { class: "model-download-url-modal" }, xr = { class: "model-modal-body" }, Sr = { class: "model-input-group" }, Ir = { class: "model-input-group" }, Er = { class: "model-modal-actions" }, Mr = /* @__PURE__ */ q({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(t, { emit: u }) {
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
    function r(O) {
      var _;
      return O && ((_ = n[O]) == null ? void 0 : _[0]) || null;
    }
    const p = t, f = u, h = $(0), m = $(!1), a = $(!1), v = $(""), b = $(""), d = $(""), I = $([]), C = $(!1), L = B(() => p.models[h.value]), w = B(() => p.models.some((O) => O.is_download_intent)), k = B(() => p.models.filter(
      (O) => p.modelChoices.has(O.filename) || O.is_download_intent
    ).length), N = B(() => {
      var _;
      if (!L.value) return "";
      const O = r((_ = L.value.reference) == null ? void 0 : _.node_type);
      return O ? `${O}/${L.value.filename}` : "";
    }), U = B(() => {
      var _;
      if (!L.value) return "not-found";
      const O = p.modelChoices.get(L.value.filename);
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
      return L.value.is_download_intent ? "download" : (_ = L.value.options) != null && _.length ? "ambiguous" : "not-found";
    }), R = B(() => {
      var _, ae;
      if (!L.value) return;
      const O = p.modelChoices.get(L.value.filename);
      if (O)
        switch (O.action) {
          case "select":
            return (_ = O.selected_model) != null && _.filename ? `→ ${O.selected_model.filename}` : "Selected";
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
    function D(O) {
      O >= 0 && O < p.models.length && (h.value = O);
    }
    function W() {
      L.value && f("mark-optional", L.value.filename);
    }
    function z() {
      L.value && f("skip", L.value.filename);
    }
    function x(O) {
      L.value && f("option-selected", L.value.filename, O);
    }
    function M() {
      L.value && f("clear-choice", L.value.filename);
    }
    function T() {
      L.value && (v.value = L.value.filename, m.value = !0);
    }
    function F() {
      L.value && (b.value = L.value.download_source || "", d.value = L.value.target_path || N.value, a.value = !0);
    }
    function se() {
      m.value = !1, v.value = "", I.value = [];
    }
    function X() {
      a.value = !1, b.value = "", d.value = "";
    }
    function te() {
      C.value = !0, setTimeout(() => {
        C.value = !1;
      }, 300);
    }
    function ne(O) {
      L.value && se();
    }
    function H() {
      !L.value || !b.value.trim() || (f("download-url", L.value.filename, b.value.trim(), d.value.trim() || void 0), X());
    }
    function Y(O) {
      if (!O) return "Unknown";
      const _ = O / (1024 * 1024 * 1024);
      return _ >= 1 ? `${_.toFixed(2)} GB` : `${(O / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (O, _) => {
      var ae, ee, xe;
      return o(), s("div", nr, [
        e("div", ar, [
          e("div", lr, [
            e("h3", ir, l(w.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", rr, l(w.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", dr, l(k.value) + "/" + l(t.models.length) + " resolved", 1)
        ]),
        L.value ? (o(), S(io, {
          key: 0,
          "item-name": L.value.filename,
          "current-index": h.value,
          "total-items": t.models.length,
          onPrev: _[0] || (_[0] = (ye) => D(h.value - 1)),
          onNext: _[1] || (_[1] = (ye) => D(h.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        L.value ? (o(), s("div", cr, [
          g(sr, {
            filename: L.value.filename,
            "node-type": ((ae = L.value.reference) == null ? void 0 : ae.node_type) || "Unknown",
            "has-multiple-options": !!((ee = L.value.options) != null && ee.length),
            options: L.value.options,
            choice: (xe = t.modelChoices) == null ? void 0 : xe.get(L.value.filename),
            status: U.value,
            "status-label": R.value,
            onMarkOptional: W,
            onSkip: z,
            onDownloadUrl: F,
            onSearch: T,
            onOptionSelected: x,
            onClearChoice: M
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), s("div", ur, [..._[5] || (_[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), S(ze, { to: "body" }, [
          m.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: _e(se, ["self"])
          }, [
            e("div", mr, [
              e("div", { class: "model-modal-header" }, [
                _[6] || (_[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: se
                }, "✕")
              ]),
              e("div", vr, [
                g(Be, {
                  modelValue: v.value,
                  "onUpdate:modelValue": _[2] || (_[2] = (ye) => v.value = ye),
                  placeholder: "Search by filename, category...",
                  onInput: te
                }, null, 8, ["modelValue"]),
                I.value.length > 0 ? (o(), s("div", fr, [
                  (o(!0), s(V, null, Z(I.value, (ye) => (o(), s("div", {
                    key: ye.hash,
                    class: "model-search-result-item",
                    onClick: (ge) => ne()
                  }, [
                    e("div", pr, [
                      e("code", hr, l(ye.filename), 1)
                    ]),
                    e("div", yr, [
                      e("span", wr, l(ye.category), 1),
                      e("span", kr, l(Y(ye.size)), 1)
                    ]),
                    ye.relative_path ? (o(), s("div", br, l(ye.relative_path), 1)) : c("", !0)
                  ], 8, gr))), 128))
                ])) : v.value && !C.value ? (o(), s("div", _r, ' No models found matching "' + l(v.value) + '" ', 1)) : c("", !0),
                C.value ? (o(), s("div", $r, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), S(ze, { to: "body" }, [
          a.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: _e(X, ["self"])
          }, [
            e("div", Cr, [
              e("div", { class: "model-modal-header" }, [
                _[7] || (_[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: X
                }, "✕")
              ]),
              e("div", xr, [
                e("div", Sr, [
                  _[8] || (_[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  g(Be, {
                    modelValue: b.value,
                    "onUpdate:modelValue": _[3] || (_[3] = (ye) => b.value = ye),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Ir, [
                  _[9] || (_[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  g(Be, {
                    modelValue: d.value,
                    "onUpdate:modelValue": _[4] || (_[4] = (ye) => d.value = ye),
                    placeholder: N.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", Er, [
                  g(re, {
                    variant: "secondary",
                    onClick: X
                  }, {
                    default: i(() => [..._[10] || (_[10] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  g(re, {
                    variant: "primary",
                    disabled: !b.value.trim() || !d.value.trim(),
                    onClick: H
                  }, {
                    default: i(() => [..._[11] || (_[11] = [
                      y(" Queue Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : c("", !0)
        ]))
      ]);
    };
  }
}), zr = /* @__PURE__ */ J(Mr, [["__scopeId", "data-v-c6acbada"]]), Lr = { class: "applying-step" }, Tr = {
  key: 0,
  class: "phase-content"
}, Rr = {
  key: 1,
  class: "phase-content"
}, Nr = { class: "phase-description" }, Dr = { class: "overall-progress" }, Or = { class: "progress-bar" }, Ur = { class: "progress-label" }, Pr = { class: "install-list" }, Br = { class: "install-icon" }, Fr = { key: 0 }, Ar = {
  key: 1,
  class: "spinner"
}, Vr = { key: 2 }, Wr = { key: 3 }, Gr = {
  key: 0,
  class: "install-error"
}, jr = {
  key: 2,
  class: "phase-content"
}, Hr = { class: "phase-header" }, Kr = { class: "phase-title" }, qr = { class: "completion-summary" }, Jr = {
  key: 0,
  class: "summary-item success"
}, Yr = { class: "summary-text" }, Qr = {
  key: 1,
  class: "summary-item error"
}, Xr = { class: "summary-text" }, Zr = {
  key: 2,
  class: "failed-list"
}, ed = { class: "failed-node-id" }, td = { class: "failed-error" }, od = {
  key: 4,
  class: "summary-item success"
}, sd = {
  key: 5,
  class: "restart-prompt"
}, nd = {
  key: 3,
  class: "phase-content error"
}, ad = { class: "error-message" }, ld = /* @__PURE__ */ q({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const u = t, n = B(() => {
      var v, b;
      const m = ((v = u.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || u.progress.nodesToInstall.length;
      if (!m) return 0;
      const a = ((b = u.progress.nodeInstallProgress) == null ? void 0 : b.completedNodes.length) ?? 0;
      return Math.round(a / m * 100);
    }), r = B(() => {
      var m;
      return ((m = u.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.filter((a) => !a.success)) || [];
    }), p = B(() => r.value.length > 0);
    function f(m, a) {
      var b, d;
      const v = (b = u.progress.nodeInstallProgress) == null ? void 0 : b.completedNodes.find((I) => I.node_id === m);
      return v ? v.success ? "complete" : "failed" : ((d = u.progress.nodeInstallProgress) == null ? void 0 : d.currentIndex) === a ? "installing" : "pending";
    }
    function h(m) {
      var a, v;
      return (v = (a = u.progress.nodeInstallProgress) == null ? void 0 : a.completedNodes.find((b) => b.node_id === m)) == null ? void 0 : v.error;
    }
    return (m, a) => {
      var v, b, d, I;
      return o(), s("div", Lr, [
        t.progress.phase === "resolving" ? (o(), s("div", Tr, [...a[2] || (a[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (o(), s("div", Rr, [
          a[3] || (a[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", Nr, " Installing " + l((((v = t.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + l(((b = t.progress.nodeInstallProgress) == null ? void 0 : b.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Dr, [
            e("div", Or, [
              e("div", {
                class: "progress-fill",
                style: qe({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Ur, l(((d = t.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.length) ?? 0) + " / " + l(((I = t.progress.nodeInstallProgress) == null ? void 0 : I.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Pr, [
            (o(!0), s(V, null, Z(t.progress.nodesToInstall, (C, L) => (o(), s("div", {
              key: C,
              class: oe(["install-item", f(C, L)])
            }, [
              e("span", Br, [
                f(C, L) === "pending" ? (o(), s("span", Fr, "○")) : f(C, L) === "installing" ? (o(), s("span", Ar, "◌")) : f(C, L) === "complete" ? (o(), s("span", Vr, "✓")) : f(C, L) === "failed" ? (o(), s("span", Wr, "✗")) : c("", !0)
              ]),
              e("code", null, l(C), 1),
              h(C) ? (o(), s("span", Gr, l(h(C)), 1)) : c("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (o(), s("div", jr, [
          e("div", Hr, [
            e("span", {
              class: oe(["phase-icon", p.value ? "warning" : "success"])
            }, l(p.value ? "⚠" : "✓"), 3),
            e("h3", Kr, l(p.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", qr, [
            t.progress.nodesInstalled.length > 0 ? (o(), s("div", Jr, [
              a[4] || (a[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", Yr, l(t.progress.nodesInstalled.length) + " node package" + l(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : c("", !0),
            r.value.length > 0 ? (o(), s("div", Qr, [
              a[5] || (a[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", Xr, l(r.value.length) + " package" + l(r.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : c("", !0),
            r.value.length > 0 ? (o(), s("div", Zr, [
              (o(!0), s(V, null, Z(r.value, (C) => (o(), s("div", {
                key: C.node_id,
                class: "failed-item"
              }, [
                e("code", ed, l(C.node_id), 1),
                e("span", td, l(C.error), 1)
              ]))), 128))
            ])) : c("", !0),
            r.value.length > 0 ? (o(), s("button", {
              key: 3,
              class: "retry-button",
              onClick: a[0] || (a[0] = (C) => m.$emit("retry-failed"))
            }, " Retry Failed (" + l(r.value.length) + ") ", 1)) : c("", !0),
            p.value ? c("", !0) : (o(), s("div", od, [...a[6] || (a[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            a[8] || (a[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (o(), s("div", sd, [
              a[7] || (a[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: a[1] || (a[1] = (C) => m.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : c("", !0)
          ])
        ])) : t.progress.phase === "error" ? (o(), s("div", nd, [
          a[9] || (a[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", ad, l(t.progress.error), 1)
        ])) : c("", !0)
      ]);
    };
  }
}), id = /* @__PURE__ */ J(ld, [["__scopeId", "data-v-5efaae58"]]), rd = {
  key: 0,
  class: "loading-state"
}, dd = {
  key: 1,
  class: "wizard-content"
}, cd = {
  key: 0,
  class: "step-content"
}, ud = { class: "analysis-summary" }, md = { class: "analysis-header" }, vd = { class: "summary-description" }, fd = { class: "stats-grid" }, gd = { class: "stat-card" }, pd = { class: "stat-items" }, hd = {
  key: 0,
  class: "stat-item success"
}, yd = { class: "stat-count" }, wd = {
  key: 1,
  class: "stat-item info"
}, kd = { class: "stat-count" }, bd = {
  key: 2,
  class: "stat-item warning"
}, _d = { class: "stat-count" }, $d = {
  key: 3,
  class: "stat-item error"
}, Cd = { class: "stat-count" }, xd = { class: "stat-card" }, Sd = { class: "stat-items" }, Id = { class: "stat-item success" }, Ed = { class: "stat-count" }, Md = {
  key: 0,
  class: "stat-item info"
}, zd = { class: "stat-count" }, Ld = {
  key: 1,
  class: "stat-item warning"
}, Td = { class: "stat-count" }, Rd = {
  key: 2,
  class: "stat-item error"
}, Nd = { class: "stat-count" }, Dd = {
  key: 0,
  class: "status-message warning"
}, Od = { class: "status-text" }, Ud = {
  key: 1,
  class: "status-message info"
}, Pd = { class: "status-text" }, Bd = {
  key: 2,
  class: "status-message info"
}, Fd = { class: "status-text" }, Ad = {
  key: 3,
  class: "status-message success"
}, Vd = {
  key: 3,
  class: "step-content"
}, Wd = { class: "review-summary" }, Gd = { class: "review-stats" }, jd = { class: "review-stat" }, Hd = { class: "stat-value" }, Kd = { class: "review-stat" }, qd = { class: "stat-value" }, Jd = { class: "review-stat" }, Yd = { class: "stat-value" }, Qd = { class: "review-stat" }, Xd = { class: "stat-value" }, Zd = {
  key: 0,
  class: "review-section"
}, ec = { class: "section-title" }, tc = { class: "review-items" }, oc = { class: "item-name" }, sc = { class: "item-choice" }, nc = {
  key: 0,
  class: "choice-badge install"
}, ac = {
  key: 1,
  class: "choice-badge skip"
}, lc = {
  key: 1,
  class: "review-section"
}, ic = { class: "section-title" }, rc = { class: "review-items" }, dc = { class: "item-name" }, cc = { class: "item-choice" }, uc = {
  key: 0,
  class: "choice-badge install"
}, mc = {
  key: 1,
  class: "choice-badge optional"
}, vc = {
  key: 2,
  class: "choice-badge skip"
}, fc = {
  key: 1,
  class: "choice-badge pending"
}, gc = {
  key: 2,
  class: "review-section"
}, pc = { class: "section-title" }, hc = { class: "review-items" }, yc = { class: "item-name" }, wc = { class: "item-choice" }, kc = {
  key: 0,
  class: "choice-badge install"
}, bc = {
  key: 1,
  class: "choice-badge download"
}, _c = {
  key: 2,
  class: "choice-badge optional"
}, $c = {
  key: 3,
  class: "choice-badge skip"
}, Cc = {
  key: 4,
  class: "choice-badge skip"
}, xc = {
  key: 1,
  class: "choice-badge download"
}, Sc = {
  key: 2,
  class: "choice-badge pending"
}, Ic = {
  key: 3,
  class: "no-choices"
}, Ec = /* @__PURE__ */ q({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: u }) {
    const n = t, r = u, { analyzeWorkflow: p, applyResolution: f, installNodes: h, queueModelDownloads: m, progress: a, resetProgress: v } = yl(), { loadPendingDownloads: b } = Et(), d = $(null), I = $(!1), C = $(!1), L = $(null), w = $("analysis"), k = $([]), N = $(/* @__PURE__ */ new Map()), U = $(/* @__PURE__ */ new Map()), R = $(/* @__PURE__ */ new Set()), D = B(() => {
      const G = [
        { id: "analysis", label: "Analysis" }
      ];
      return (z.value || T.value) && G.push({ id: "nodes", label: "Nodes" }), (x.value || M.value) && G.push({ id: "models", label: "Models" }), G.push({ id: "review", label: "Review" }), w.value === "applying" && G.push({ id: "applying", label: "Applying" }), G;
    }), W = B(() => d.value ? d.value.stats.needs_user_input : !1), z = B(() => d.value ? d.value.nodes.unresolved.length > 0 || d.value.nodes.ambiguous.length > 0 : !1), x = B(() => d.value ? d.value.models.unresolved.length > 0 || d.value.models.ambiguous.length > 0 : !1), M = B(() => d.value ? d.value.stats.download_intents > 0 : !1), T = B(() => d.value ? d.value.stats.nodes_needing_installation > 0 : !1), F = B(() => d.value ? d.value.nodes.resolved.length : 0), se = B(() => {
      if (!d.value) return [];
      const G = d.value.nodes.resolved.filter((K) => !K.is_installed), P = /* @__PURE__ */ new Set();
      return G.filter((K) => P.has(K.package.package_id) ? !1 : (P.add(K.package.package_id), !0));
    }), X = B(() => {
      if (!d.value) return [];
      const G = d.value.nodes.resolved.filter((K) => !K.is_installed), P = /* @__PURE__ */ new Map();
      for (const K of G) {
        const ve = P.get(K.package.package_id);
        ve ? ve.node_types_count++ : P.set(K.package.package_id, {
          package_id: K.package.package_id,
          title: K.package.title,
          node_types_count: 1
        });
      }
      return Array.from(P.values());
    }), te = B(() => se.value.filter((G) => !R.value.has(G.package.package_id))), ne = B(() => d.value ? d.value.models.resolved.filter((G) => G.match_type === "download_intent").map((G) => ({
      filename: G.reference.widget_value,
      reference: G.reference,
      is_download_intent: !0,
      resolved_model: G.model,
      download_source: G.download_source,
      target_path: G.target_path
    })) : []), H = B(() => {
      if (!d.value) return [];
      const G = d.value.nodes.unresolved.map((K) => ({
        node_type: K.reference.node_type,
        reason: K.reason,
        is_unresolved: !0,
        options: void 0
      })), P = d.value.nodes.ambiguous.map((K) => ({
        node_type: K.reference.node_type,
        has_multiple_options: !0,
        options: K.options.map((ve) => ({
          package_id: ve.package.package_id,
          title: ve.package.title,
          match_confidence: ve.match_confidence,
          match_type: ve.match_type,
          is_installed: ve.is_installed
        }))
      }));
      return [...G, ...P];
    }), Y = B(() => {
      if (!d.value) return [];
      const G = d.value.models.unresolved.map((K) => ({
        filename: K.reference.widget_value,
        reference: K.reference,
        reason: K.reason,
        is_unresolved: !0,
        options: void 0
      })), P = d.value.models.ambiguous.map((K) => ({
        filename: K.reference.widget_value,
        reference: K.reference,
        has_multiple_options: !0,
        options: K.options.map((ve) => ({
          model: ve.model,
          match_confidence: ve.match_confidence,
          match_type: ve.match_type,
          has_download_source: ve.has_download_source
        }))
      }));
      return [...G, ...P];
    }), O = B(() => {
      const G = Y.value, P = ne.value.map((K) => ({
        filename: K.filename,
        reference: K.reference,
        is_download_intent: !0,
        resolved_model: K.resolved_model,
        download_source: K.download_source,
        target_path: K.target_path,
        options: void 0
      }));
      return [...G, ...P];
    }), _ = B(() => {
      let G = te.value.length;
      for (const P of N.value.values())
        P.action === "install" && G++;
      for (const P of U.value.values())
        P.action === "select" && G++;
      return G;
    }), ae = B(() => {
      let G = 0;
      for (const P of U.value.values())
        P.action === "download" && G++;
      return G;
    }), ee = B(() => {
      let G = 0;
      for (const P of N.value.values())
        P.action === "optional" && G++;
      for (const P of U.value.values())
        P.action === "optional" && G++;
      return G;
    }), xe = B(() => {
      let G = R.value.size;
      for (const P of N.value.values())
        P.action === "skip" && G++;
      for (const P of U.value.values())
        P.action === "skip" && G++;
      for (const P of H.value)
        N.value.has(P.node_type) || G++;
      for (const P of Y.value)
        U.value.has(P.filename) || G++;
      return G;
    }), ye = B(() => {
      const G = {};
      if (G.analysis = { resolved: 1, total: 1 }, z.value) {
        const P = H.value.length, K = H.value.filter(
          (ve) => N.value.has(ve.node_type)
        ).length;
        G.nodes = { resolved: K, total: P };
      }
      if (x.value || M.value) {
        const P = O.value.length, K = O.value.filter(
          (ve) => U.value.has(ve.filename) || ve.is_download_intent
        ).length;
        G.models = { resolved: K, total: P };
      }
      if (G.review = { resolved: 1, total: 1 }, w.value === "applying") {
        const P = a.totalFiles || 1, K = a.completedFiles.length;
        G.applying = { resolved: K, total: P };
      }
      return G;
    });
    function ge(G) {
      w.value = G;
    }
    function rt() {
      const G = D.value.findIndex((P) => P.id === w.value);
      G > 0 && (w.value = D.value[G - 1].id);
    }
    function be() {
      const G = D.value.findIndex((P) => P.id === w.value);
      G < D.value.length - 1 && (w.value = D.value[G + 1].id);
    }
    async function pt() {
      I.value = !0, L.value = null;
      try {
        d.value = await p(n.workflowName);
      } catch (G) {
        L.value = G instanceof Error ? G.message : "Failed to analyze workflow";
      } finally {
        I.value = !1;
      }
    }
    function ht() {
      k.value.includes("analysis") || k.value.push("analysis"), z.value || T.value ? w.value = "nodes" : x.value || M.value ? w.value = "models" : w.value = "review";
    }
    function yt(G) {
      N.value.set(G, { action: "optional" });
    }
    function he(G) {
      N.value.set(G, { action: "skip" });
    }
    function Xe(G, P) {
      var ve;
      const K = H.value.find((Ee) => Ee.node_type === G);
      (ve = K == null ? void 0 : K.options) != null && ve[P] && N.value.set(G, {
        action: "install",
        package_id: K.options[P].package_id
      });
    }
    function Ge(G, P) {
      N.value.set(G, {
        action: "install",
        package_id: P
      });
    }
    function Ae(G) {
      N.value.delete(G);
    }
    function wt(G) {
      R.value.has(G) ? R.value.delete(G) : R.value.add(G);
    }
    function ce(G) {
      U.value.set(G, { action: "optional" });
    }
    function Ue(G) {
      U.value.set(G, { action: "skip" });
    }
    function j(G, P) {
      var ve;
      const K = Y.value.find((Ee) => Ee.filename === G);
      (ve = K == null ? void 0 : K.options) != null && ve[P] && U.value.set(G, {
        action: "select",
        selected_model: K.options[P].model
      });
    }
    function de(G, P, K) {
      U.value.set(G, {
        action: "download",
        url: P,
        target_path: K
      });
    }
    function me(G) {
      U.value.delete(G);
    }
    async function Ie() {
      var G;
      C.value = !0, L.value = null, v(), a.phase = "resolving", w.value = "applying";
      try {
        const P = await f(n.workflowName, N.value, U.value, R.value);
        P.models_to_download && P.models_to_download.length > 0 && m(n.workflowName, P.models_to_download);
        const K = [
          ...P.nodes_to_install || [],
          ...te.value.map((Ee) => Ee.package.package_id)
        ];
        a.nodesToInstall = [...new Set(K)], a.nodesToInstall.length > 0 && await h(n.workflowName), a.phase = "complete", await b();
        const ve = a.installError || ((G = a.nodeInstallProgress) == null ? void 0 : G.completedNodes.some((Ee) => !Ee.success));
        !a.needsRestart && !ve && setTimeout(() => {
          r("refresh"), r("install"), r("close");
        }, 1500);
      } catch (P) {
        L.value = P instanceof Error ? P.message : "Failed to apply resolution", a.error = L.value, a.phase = "error";
      } finally {
        C.value = !1;
      }
    }
    function tt() {
      r("refresh"), r("restart"), r("close");
    }
    async function Rt() {
      var P;
      const G = ((P = a.nodeInstallProgress) == null ? void 0 : P.completedNodes.filter((K) => !K.success).map((K) => K.node_id)) || [];
      if (G.length !== 0) {
        a.phase = "installing", a.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: G.length
        }, a.nodesToInstall = G, a.nodesInstalled = [], a.installError = void 0;
        try {
          await h(n.workflowName), a.phase = "complete";
        } catch (K) {
          a.error = K instanceof Error ? K.message : "Retry failed", a.phase = "error";
        }
      }
    }
    return Ce(pt), (G, P) => (o(), S(et, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: I.value,
      error: L.value || void 0,
      "fixed-height": !0,
      onClose: P[1] || (P[1] = (K) => r("close"))
    }, {
      body: i(() => [
        I.value && !d.value ? (o(), s("div", rd, [...P[2] || (P[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : d.value ? (o(), s("div", dd, [
          g(El, {
            steps: D.value,
            "current-step": w.value,
            "completed-steps": k.value,
            "step-stats": ye.value,
            onStepChange: ge
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          w.value === "analysis" ? (o(), s("div", cd, [
            e("div", ud, [
              e("div", md, [
                P[3] || (P[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", vd, " Found " + l(d.value.stats.total_nodes) + " nodes and " + l(d.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", fd, [
                e("div", gd, [
                  P[12] || (P[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", pd, [
                    F.value > 0 ? (o(), s("div", hd, [
                      P[4] || (P[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", yd, l(F.value), 1),
                      P[5] || (P[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : c("", !0),
                    d.value.stats.packages_needing_installation > 0 ? (o(), s("div", wd, [
                      P[6] || (P[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", kd, l(d.value.stats.packages_needing_installation), 1),
                      P[7] || (P[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : c("", !0),
                    d.value.nodes.ambiguous.length > 0 ? (o(), s("div", bd, [
                      P[8] || (P[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", _d, l(d.value.nodes.ambiguous.length), 1),
                      P[9] || (P[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    d.value.nodes.unresolved.length > 0 ? (o(), s("div", $d, [
                      P[10] || (P[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Cd, l(d.value.nodes.unresolved.length), 1),
                      P[11] || (P[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", xd, [
                  P[21] || (P[21] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Sd, [
                    e("div", Id, [
                      P[13] || (P[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Ed, l(d.value.models.resolved.length - d.value.stats.download_intents), 1),
                      P[14] || (P[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    d.value.stats.download_intents > 0 ? (o(), s("div", Md, [
                      P[15] || (P[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", zd, l(d.value.stats.download_intents), 1),
                      P[16] || (P[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    d.value.models.ambiguous.length > 0 ? (o(), s("div", Ld, [
                      P[17] || (P[17] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Td, l(d.value.models.ambiguous.length), 1),
                      P[18] || (P[18] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    d.value.models.unresolved.length > 0 ? (o(), s("div", Rd, [
                      P[19] || (P[19] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Nd, l(d.value.models.unresolved.length), 1),
                      P[20] || (P[20] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              W.value ? (o(), s("div", Dd, [
                P[22] || (P[22] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Od, l(H.value.length + Y.value.length) + " items need your input", 1)
              ])) : T.value ? (o(), s("div", Ud, [
                P[23] || (P[23] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Pd, l(d.value.stats.packages_needing_installation) + " package" + l(d.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + l(d.value.stats.nodes_needing_installation) + " node type" + l(d.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + l(M.value ? `, ${d.value.stats.download_intents} model${d.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : M.value ? (o(), s("div", Bd, [
                P[24] || (P[24] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Fd, l(d.value.stats.download_intents) + " model" + l(d.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), s("div", Ad, [...P[25] || (P[25] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : c("", !0),
          w.value === "nodes" ? (o(), S(Ui, {
            key: 1,
            nodes: H.value,
            "node-choices": N.value,
            "auto-resolved-packages": X.value,
            "skipped-packages": R.value,
            onMarkOptional: yt,
            onSkip: he,
            onOptionSelected: Xe,
            onManualEntry: Ge,
            onClearChoice: Ae,
            onPackageSkip: wt
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : c("", !0),
          w.value === "models" ? (o(), S(zr, {
            key: 2,
            models: O.value,
            "model-choices": U.value,
            onMarkOptional: ce,
            onSkip: Ue,
            onOptionSelected: j,
            onDownloadUrl: de,
            onClearChoice: me
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          w.value === "review" ? (o(), s("div", Vd, [
            e("div", Wd, [
              P[30] || (P[30] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Gd, [
                e("div", jd, [
                  e("span", Hd, l(_.value), 1),
                  P[26] || (P[26] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Kd, [
                  e("span", qd, l(ae.value), 1),
                  P[27] || (P[27] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Jd, [
                  e("span", Yd, l(ee.value), 1),
                  P[28] || (P[28] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", Qd, [
                  e("span", Xd, l(xe.value), 1),
                  P[29] || (P[29] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              X.value.length > 0 ? (o(), s("div", Zd, [
                e("h4", ec, "Node Packages (" + l(X.value.length) + ")", 1),
                e("div", tc, [
                  (o(!0), s(V, null, Z(X.value, (K) => (o(), s("div", {
                    key: K.package_id,
                    class: "review-item"
                  }, [
                    e("code", oc, l(K.package_id), 1),
                    e("div", sc, [
                      R.value.has(K.package_id) ? (o(), s("span", ac, "Skipped")) : (o(), s("span", nc, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : c("", !0),
              H.value.length > 0 ? (o(), s("div", lc, [
                e("h4", ic, "Node Choices (" + l(H.value.length) + ")", 1),
                e("div", rc, [
                  (o(!0), s(V, null, Z(H.value, (K) => {
                    var ve, Ee, ot, je;
                    return o(), s("div", {
                      key: K.node_type,
                      class: "review-item"
                    }, [
                      e("code", dc, l(K.node_type), 1),
                      e("div", cc, [
                        N.value.has(K.node_type) ? (o(), s(V, { key: 0 }, [
                          ((ve = N.value.get(K.node_type)) == null ? void 0 : ve.action) === "install" ? (o(), s("span", uc, l((Ee = N.value.get(K.node_type)) == null ? void 0 : Ee.package_id), 1)) : ((ot = N.value.get(K.node_type)) == null ? void 0 : ot.action) === "optional" ? (o(), s("span", mc, " Optional ")) : ((je = N.value.get(K.node_type)) == null ? void 0 : je.action) === "skip" ? (o(), s("span", vc, " Skip ")) : c("", !0)
                        ], 64)) : (o(), s("span", fc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              O.value.length > 0 ? (o(), s("div", gc, [
                e("h4", pc, "Models (" + l(O.value.length) + ")", 1),
                e("div", hc, [
                  (o(!0), s(V, null, Z(O.value, (K) => {
                    var ve, Ee, ot, je, Mt, st, nt;
                    return o(), s("div", {
                      key: K.filename,
                      class: "review-item"
                    }, [
                      e("code", yc, l(K.filename), 1),
                      e("div", wc, [
                        U.value.has(K.filename) ? (o(), s(V, { key: 0 }, [
                          ((ve = U.value.get(K.filename)) == null ? void 0 : ve.action) === "select" ? (o(), s("span", kc, l((ot = (Ee = U.value.get(K.filename)) == null ? void 0 : Ee.selected_model) == null ? void 0 : ot.filename), 1)) : ((je = U.value.get(K.filename)) == null ? void 0 : je.action) === "download" ? (o(), s("span", bc, " Download ")) : ((Mt = U.value.get(K.filename)) == null ? void 0 : Mt.action) === "optional" ? (o(), s("span", _c, " Optional ")) : ((st = U.value.get(K.filename)) == null ? void 0 : st.action) === "skip" ? (o(), s("span", $c, " Skip ")) : ((nt = U.value.get(K.filename)) == null ? void 0 : nt.action) === "cancel_download" ? (o(), s("span", Cc, " Cancel Download ")) : c("", !0)
                        ], 64)) : K.is_download_intent ? (o(), s("span", xc, " Pending Download ")) : (o(), s("span", Sc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              se.value.length === 0 && H.value.length === 0 && O.value.length === 0 ? (o(), s("div", Ic, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          w.value === "applying" ? (o(), S(id, {
            key: 4,
            progress: fe(a),
            onRestart: tt,
            onRetryFailed: Rt
          }, null, 8, ["progress"])) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        w.value !== "analysis" && w.value !== "applying" ? (o(), S(re, {
          key: 0,
          variant: "secondary",
          disabled: C.value,
          onClick: rt
        }, {
          default: i(() => [...P[31] || (P[31] = [
            y(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        P[35] || (P[35] = e("div", { class: "footer-spacer" }, null, -1)),
        w.value !== "applying" || fe(a).phase === "complete" || fe(a).phase === "error" ? (o(), S(re, {
          key: 1,
          variant: "secondary",
          onClick: P[0] || (P[0] = (K) => r("close"))
        }, {
          default: i(() => [
            y(l(fe(a).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        w.value === "analysis" ? (o(), S(re, {
          key: 2,
          variant: "primary",
          disabled: I.value,
          onClick: ht
        }, {
          default: i(() => [...P[32] || (P[32] = [
            y(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        w.value === "nodes" ? (o(), S(re, {
          key: 3,
          variant: "primary",
          onClick: be
        }, {
          default: i(() => [
            y(l(x.value || M.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        w.value === "models" ? (o(), S(re, {
          key: 4,
          variant: "primary",
          onClick: be
        }, {
          default: i(() => [...P[33] || (P[33] = [
            y(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        w.value === "review" ? (o(), S(re, {
          key: 5,
          variant: "primary",
          disabled: C.value,
          loading: C.value,
          onClick: Ie
        }, {
          default: i(() => [...P[34] || (P[34] = [
            y(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Mc = /* @__PURE__ */ J(Ec, [["__scopeId", "data-v-0d3f93e6"]]), zc = { class: "search-input-wrapper" }, Lc = ["value", "placeholder"], Tc = /* @__PURE__ */ q({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t, { emit: u }) {
    const n = t, r = u, p = $(null);
    let f;
    function h(a) {
      const v = a.target.value;
      n.debounce > 0 ? (clearTimeout(f), f = window.setTimeout(() => {
        r("update:modelValue", v);
      }, n.debounce)) : r("update:modelValue", v);
    }
    function m() {
      var a;
      r("update:modelValue", ""), r("clear"), (a = p.value) == null || a.focus();
    }
    return Ce(() => {
      n.autoFocus && p.value && p.value.focus();
    }), (a, v) => (o(), s("div", zc, [
      e("input", {
        ref_key: "inputRef",
        ref: p,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: h,
        onKeyup: Ze(m, ["escape"])
      }, null, 40, Lc),
      t.clearable && t.modelValue ? (o(), s("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), Rc = /* @__PURE__ */ J(Tc, [["__scopeId", "data-v-266f857a"]]), Nc = { class: "search-bar" }, Dc = /* @__PURE__ */ q({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (u, n) => (o(), s("div", Nc, [
      g(Rc, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => u.$emit("update:modelValue", r)),
        onClear: n[1] || (n[1] = (r) => u.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), ft = /* @__PURE__ */ J(Dc, [["__scopeId", "data-v-3d51bbfd"]]), Oc = { class: "section-group" }, Uc = {
  key: 0,
  class: "section-content"
}, Pc = /* @__PURE__ */ q({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: u }) {
    const n = t, r = u, p = $(n.initiallyExpanded);
    function f() {
      n.collapsible && (p.value = !p.value, r("toggle", p.value));
    }
    return (h, m) => (o(), s("section", Oc, [
      g(Oe, {
        count: t.count,
        clickable: t.collapsible,
        expanded: p.value,
        onClick: f
      }, {
        default: i(() => [
          y(l(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || p.value ? (o(), s("div", Uc, [
        ue(h.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), $e = /* @__PURE__ */ J(Pc, [["__scopeId", "data-v-c48e33ed"]]), Bc = { class: "item-header" }, Fc = {
  key: 0,
  class: "item-icon"
}, Ac = { class: "item-info" }, Vc = {
  key: 0,
  class: "item-title"
}, Wc = {
  key: 1,
  class: "item-subtitle"
}, Gc = {
  key: 0,
  class: "item-details"
}, jc = {
  key: 1,
  class: "item-actions"
}, Hc = /* @__PURE__ */ q({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: u }) {
    const n = t, r = B(() => n.status ? `status-${n.status}` : "");
    return (p, f) => (o(), s("div", {
      class: oe(["item-card", { clickable: t.clickable, compact: t.compact }, r.value]),
      onClick: f[0] || (f[0] = (h) => t.clickable && p.$emit("click"))
    }, [
      e("div", Bc, [
        p.$slots.icon ? (o(), s("span", Fc, [
          ue(p.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", Ac, [
          p.$slots.title ? (o(), s("div", Vc, [
            ue(p.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          p.$slots.subtitle ? (o(), s("div", Wc, [
            ue(p.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      p.$slots.details ? (o(), s("div", Gc, [
        ue(p.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      p.$slots.actions ? (o(), s("div", jc, [
        ue(p.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Me = /* @__PURE__ */ J(Hc, [["__scopeId", "data-v-cc435e0e"]]), Kc = { class: "loading-state" }, qc = { class: "loading-message" }, Jc = /* @__PURE__ */ q({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (u, n) => (o(), s("div", Kc, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", qc, l(t.message), 1)
    ]));
  }
}), Ye = /* @__PURE__ */ J(Jc, [["__scopeId", "data-v-ad8436c9"]]), Yc = { class: "error-state" }, Qc = { class: "error-message" }, Xc = /* @__PURE__ */ q({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (u, n) => (o(), s("div", Yc, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Qc, l(t.message), 1),
      t.retry ? (o(), S(Q, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => u.$emit("retry"))
      }, {
        default: i(() => [...n[1] || (n[1] = [
          y(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), Qe = /* @__PURE__ */ J(Xc, [["__scopeId", "data-v-5397be48"]]), Zc = /* @__PURE__ */ q({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: u, emit: n }) {
    const r = n, { getWorkflows: p } = Se();
    ao();
    const f = $([]), h = $(!1), m = $(null), a = $(""), v = $(!0), b = $(!1), d = $(!1), I = $(!1), C = $(null), L = B(
      () => f.value.filter((Y) => Y.status === "broken")
    ), w = B(
      () => f.value.filter((Y) => Y.status === "new")
    ), k = B(
      () => f.value.filter((Y) => Y.status === "modified")
    ), N = B(
      () => f.value.filter((Y) => Y.status === "synced")
    ), U = B(() => {
      if (!a.value.trim()) return f.value;
      const Y = a.value.toLowerCase();
      return f.value.filter((O) => O.name.toLowerCase().includes(Y));
    }), R = B(
      () => L.value.filter(
        (Y) => !a.value.trim() || Y.name.toLowerCase().includes(a.value.toLowerCase())
      )
    ), D = B(
      () => w.value.filter(
        (Y) => !a.value.trim() || Y.name.toLowerCase().includes(a.value.toLowerCase())
      )
    ), W = B(
      () => k.value.filter(
        (Y) => !a.value.trim() || Y.name.toLowerCase().includes(a.value.toLowerCase())
      )
    ), z = B(
      () => N.value.filter(
        (Y) => !a.value.trim() || Y.name.toLowerCase().includes(a.value.toLowerCase())
      )
    ), x = B(
      () => b.value ? z.value : z.value.slice(0, 5)
    );
    async function M(Y = !1) {
      h.value = !0, m.value = null;
      try {
        f.value = await p(Y);
      } catch (O) {
        m.value = O instanceof Error ? O.message : "Failed to load workflows";
      } finally {
        h.value = !1;
      }
    }
    u({ loadWorkflows: M });
    function T(Y) {
      C.value = Y, d.value = !0;
    }
    function F(Y) {
      C.value = Y, I.value = !0;
    }
    function se() {
      alert("Bulk resolution not yet implemented");
    }
    function X() {
      r("refresh");
    }
    async function te() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ne(Y) {
      const O = [];
      return Y.missing_nodes > 0 && O.push(`${Y.missing_nodes} missing node${Y.missing_nodes > 1 ? "s" : ""}`), Y.missing_models > 0 && O.push(`${Y.missing_models} missing model${Y.missing_models > 1 ? "s" : ""}`), Y.pending_downloads && Y.pending_downloads > 0 && O.push(`${Y.pending_downloads} pending download${Y.pending_downloads > 1 ? "s" : ""}`), O.length > 0 ? O.join(", ") : "Has issues";
    }
    function H(Y) {
      const O = Y.sync_state === "new" ? "New" : Y.sync_state === "modified" ? "Modified" : Y.sync_state === "synced" ? "Synced" : Y.sync_state;
      return Y.has_path_sync_issues && Y.models_needing_path_sync && Y.models_needing_path_sync > 0 ? `${Y.models_needing_path_sync} model path${Y.models_needing_path_sync > 1 ? "s" : ""} need${Y.models_needing_path_sync === 1 ? "s" : ""} sync` : O || "Unknown";
    }
    return Ce(M), (Y, O) => (o(), s(V, null, [
      g(Re, null, {
        header: i(() => [
          g(Ne, { title: "WORKFLOWS" }, {
            actions: i(() => [
              L.value.length > 0 ? (o(), S(Q, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: se
              }, {
                default: i(() => [...O[8] || (O[8] = [
                  y(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          g(ft, {
            modelValue: a.value,
            "onUpdate:modelValue": O[0] || (O[0] = (_) => a.value = _),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          h.value ? (o(), S(Ye, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (o(), S(Qe, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: M
          }, null, 8, ["message"])) : (o(), s(V, { key: 2 }, [
            R.value.length ? (o(), S($e, {
              key: 0,
              title: "BROKEN",
              count: R.value.length
            }, {
              default: i(() => [
                (o(!0), s(V, null, Z(R.value, (_) => (o(), S(Me, {
                  key: _.name,
                  status: "broken"
                }, {
                  icon: i(() => [...O[9] || (O[9] = [
                    y("⚠", -1)
                  ])]),
                  title: i(() => [
                    y(l(_.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(l(ne(_)), 1)
                  ]),
                  actions: i(() => [
                    g(Q, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ae) => F(_.name)
                    }, {
                      default: i(() => [...O[10] || (O[10] = [
                        y(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => T(_.name)
                    }, {
                      default: i(() => [...O[11] || (O[11] = [
                        y(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            D.value.length ? (o(), S($e, {
              key: 1,
              title: "NEW",
              count: D.value.length
            }, {
              default: i(() => [
                (o(!0), s(V, null, Z(D.value, (_) => (o(), S(Me, {
                  key: _.name,
                  status: _.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: i(() => [
                    y(l(_.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: i(() => [
                    y(l(_.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(l(H(_)), 1)
                  ]),
                  actions: i(() => [
                    g(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => T(_.name)
                    }, {
                      default: i(() => [...O[12] || (O[12] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            W.value.length ? (o(), S($e, {
              key: 2,
              title: "MODIFIED",
              count: W.value.length
            }, {
              default: i(() => [
                (o(!0), s(V, null, Z(W.value, (_) => (o(), S(Me, {
                  key: _.name,
                  status: _.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: i(() => [...O[13] || (O[13] = [
                    y("⚡", -1)
                  ])]),
                  title: i(() => [
                    y(l(_.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(l(H(_)), 1)
                  ]),
                  actions: i(() => [
                    g(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => T(_.name)
                    }, {
                      default: i(() => [...O[14] || (O[14] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            z.value.length ? (o(), S($e, {
              key: 3,
              title: "SYNCED",
              count: z.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: O[2] || (O[2] = (_) => v.value = _)
            }, {
              default: i(() => [
                (o(!0), s(V, null, Z(x.value, (_) => (o(), S(Me, {
                  key: _.name,
                  status: _.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: i(() => [
                    y(l(_.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: i(() => [
                    y(l(_.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(l(H(_)), 1)
                  ]),
                  actions: i(() => [
                    g(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => T(_.name)
                    }, {
                      default: i(() => [...O[15] || (O[15] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !b.value && z.value.length > 5 ? (o(), S(Q, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: O[1] || (O[1] = (_) => b.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: i(() => [
                    y(" View all " + l(z.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            U.value.length ? c("", !0) : (o(), S(Fe, {
              key: 4,
              icon: "📭",
              message: a.value ? `No workflows match '${a.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      d.value && C.value ? (o(), S(gl, {
        key: 0,
        "workflow-name": C.value,
        onClose: O[3] || (O[3] = (_) => d.value = !1),
        onResolve: O[4] || (O[4] = (_) => F(C.value)),
        onRefresh: O[5] || (O[5] = (_) => r("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0),
      I.value && C.value ? (o(), S(Mc, {
        key: 1,
        "workflow-name": C.value,
        onClose: O[6] || (O[6] = (_) => I.value = !1),
        onInstall: X,
        onRefresh: O[7] || (O[7] = (_) => r("refresh")),
        onRestart: te
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), eu = /* @__PURE__ */ J(Zc, [["__scopeId", "data-v-b7939cb4"]]), tu = /* @__PURE__ */ q({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (u, n) => (o(), s("div", {
      class: oe(["summary-bar", t.variant])
    }, [
      ue(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), gt = /* @__PURE__ */ J(tu, [["__scopeId", "data-v-ccb7816e"]]), ou = {
  key: 0,
  class: "model-details"
}, su = { class: "detail-section" }, nu = { class: "detail-row" }, au = { class: "detail-value mono" }, lu = { class: "detail-row" }, iu = { class: "detail-value mono" }, ru = { class: "detail-row" }, du = { class: "detail-value mono" }, cu = { class: "detail-row" }, uu = { class: "detail-value" }, mu = { class: "detail-row" }, vu = { class: "detail-value" }, fu = { class: "detail-row" }, gu = { class: "detail-value" }, pu = { class: "detail-section" }, hu = { class: "section-header" }, yu = {
  key: 0,
  class: "locations-list"
}, wu = { class: "location-path mono" }, ku = {
  key: 0,
  class: "location-modified"
}, bu = ["onClick"], _u = {
  key: 1,
  class: "empty-state"
}, $u = { class: "detail-section" }, Cu = { class: "section-header" }, xu = {
  key: 0,
  class: "sources-list"
}, Su = { class: "source-type" }, Iu = ["href"], Eu = ["disabled", "onClick"], Mu = {
  key: 1,
  class: "empty-state"
}, zu = { class: "add-source-form" }, Lu = ["disabled"], Tu = {
  key: 2,
  class: "source-error"
}, Ru = {
  key: 3,
  class: "source-success"
}, Nu = /* @__PURE__ */ q({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, { getModelDetails: r, addModelSource: p, removeModelSource: f, openFileLocation: h } = Se(), m = $(null), a = $(!0), v = $(null), b = $(""), d = $(!1), I = $(null), C = $(null), L = $(null), w = $(null);
    let k = null;
    function N(M, T = "success", F = 2e3) {
      k && clearTimeout(k), w.value = { message: M, type: T }, k = setTimeout(() => {
        w.value = null;
      }, F);
    }
    function U(M) {
      if (!M) return "Unknown";
      const T = 1024 * 1024 * 1024, F = 1024 * 1024;
      return M >= T ? `${(M / T).toFixed(1)} GB` : M >= F ? `${(M / F).toFixed(0)} MB` : `${(M / 1024).toFixed(0)} KB`;
    }
    function R(M) {
      navigator.clipboard.writeText(M), N("Copied to clipboard!");
    }
    async function D(M) {
      try {
        await h(M), N("Opening file location...");
      } catch {
        N("Failed to open location", "error");
      }
    }
    async function W() {
      if (!(!b.value.trim() || !m.value)) {
        d.value = !0, C.value = null, L.value = null;
        try {
          await p(m.value.hash, b.value.trim()), L.value = "Source added successfully!", b.value = "", await x();
        } catch (M) {
          C.value = M instanceof Error ? M.message : "Failed to add source";
        } finally {
          d.value = !1;
        }
      }
    }
    async function z(M) {
      if (m.value) {
        I.value = M, C.value = null, L.value = null;
        try {
          await f(m.value.hash, M), N("Source removed"), await x();
        } catch (T) {
          C.value = T instanceof Error ? T.message : "Failed to remove source";
        } finally {
          I.value = null;
        }
      }
    }
    async function x() {
      a.value = !0, v.value = null;
      try {
        m.value = await r(n.identifier);
      } catch (M) {
        v.value = M instanceof Error ? M.message : "Failed to load model details";
      } finally {
        a.value = !1;
      }
    }
    return Ce(x), (M, T) => {
      var F;
      return o(), s(V, null, [
        g(et, {
          title: `Model Details: ${((F = m.value) == null ? void 0 : F.filename) || "Loading..."}`,
          size: "lg",
          loading: a.value,
          error: v.value,
          onClose: T[5] || (T[5] = (se) => M.$emit("close"))
        }, {
          body: i(() => {
            var se, X, te, ne;
            return [
              m.value ? (o(), s("div", ou, [
                e("section", su, [
                  e("div", nu, [
                    T[6] || (T[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", au, l(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[0] || (T[0] = (H) => R(m.value.hash))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", lu, [
                    T[7] || (T[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", iu, l(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[1] || (T[1] = (H) => R(m.value.blake3))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", ru, [
                    T[8] || (T[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", du, l(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[2] || (T[2] = (H) => R(m.value.sha256))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", cu, [
                    T[9] || (T[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", uu, l(U(m.value.size)), 1)
                  ]),
                  e("div", mu, [
                    T[10] || (T[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", vu, l(m.value.category), 1)
                  ]),
                  e("div", fu, [
                    T[11] || (T[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", gu, l(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", pu, [
                  e("h4", hu, "Locations (" + l(((se = m.value.locations) == null ? void 0 : se.length) || 0) + ")", 1),
                  (X = m.value.locations) != null && X.length ? (o(), s("div", yu, [
                    (o(!0), s(V, null, Z(m.value.locations, (H, Y) => (o(), s("div", {
                      key: Y,
                      class: "location-item"
                    }, [
                      e("span", wu, l(H.path), 1),
                      H.modified ? (o(), s("span", ku, "Modified: " + l(H.modified), 1)) : c("", !0),
                      H.path ? (o(), s("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (O) => D(H.path)
                      }, " Open File Location ", 8, bu)) : c("", !0)
                    ]))), 128))
                  ])) : (o(), s("div", _u, "No locations found"))
                ]),
                e("section", $u, [
                  e("h4", Cu, "Download Sources (" + l(((te = m.value.sources) == null ? void 0 : te.length) || 0) + ")", 1),
                  (ne = m.value.sources) != null && ne.length ? (o(), s("div", xu, [
                    (o(!0), s(V, null, Z(m.value.sources, (H, Y) => (o(), s("div", {
                      key: Y,
                      class: "source-item"
                    }, [
                      e("span", Su, l(H.type) + ":", 1),
                      e("a", {
                        href: H.url,
                        target: "_blank",
                        class: "source-url"
                      }, l(H.url), 9, Iu),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: I.value === H.url,
                        onClick: (O) => z(H.url)
                      }, l(I.value === H.url ? "..." : "×"), 9, Eu)
                    ]))), 128))
                  ])) : (o(), s("div", Mu, " No download sources configured ")),
                  e("div", zu, [
                    dt(e("input", {
                      "onUpdate:modelValue": T[3] || (T[3] = (H) => b.value = H),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [oo, b.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !b.value.trim() || d.value,
                      onClick: W
                    }, l(d.value ? "Adding..." : "Add Source"), 9, Lu)
                  ]),
                  C.value ? (o(), s("p", Tu, l(C.value), 1)) : c("", !0),
                  L.value ? (o(), s("p", Ru, l(L.value), 1)) : c("", !0)
                ])
              ])) : c("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: T[4] || (T[4] = (se) => M.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (o(), S(ze, { to: "body" }, [
          w.value ? (o(), s("div", {
            key: 0,
            class: oe(["toast", w.value.type])
          }, l(w.value.message), 3)) : c("", !0)
        ]))
      ], 64);
    };
  }
}), ro = /* @__PURE__ */ J(Nu, [["__scopeId", "data-v-f15cbb56"]]), Du = /* @__PURE__ */ q({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: u }) {
    const n = u, { getEnvironmentModels: r, getStatus: p } = Se(), f = $([]), h = $([]), m = $("production"), a = $(!1), v = $(null), b = $(""), d = $(!1), I = $(null);
    function C() {
      d.value = !1, n("navigate", "model-index");
    }
    const L = B(
      () => f.value.reduce((x, M) => x + (M.size || 0), 0)
    ), w = B(() => {
      if (!b.value.trim()) return f.value;
      const x = b.value.toLowerCase();
      return f.value.filter((M) => M.filename.toLowerCase().includes(x));
    }), k = B(() => {
      if (!b.value.trim()) return h.value;
      const x = b.value.toLowerCase();
      return h.value.filter((M) => M.filename.toLowerCase().includes(x));
    }), N = B(() => {
      const x = {};
      for (const T of w.value) {
        const F = T.type || "other";
        x[F] || (x[F] = []), x[F].push(T);
      }
      const M = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(x).sort(([T], [F]) => {
        const se = M.indexOf(T), X = M.indexOf(F);
        return se >= 0 && X >= 0 ? se - X : se >= 0 ? -1 : X >= 0 ? 1 : T.localeCompare(F);
      }).map(([T, F]) => ({ type: T, models: F }));
    });
    function U(x) {
      if (!x) return "Unknown";
      const M = x / (1024 * 1024);
      return M >= 1024 ? `${(M / 1024).toFixed(1)} GB` : `${M.toFixed(0)} MB`;
    }
    function R(x) {
      I.value = x.hash || x.filename;
    }
    function D(x) {
      n("navigate", "model-index");
    }
    function W(x) {
      alert(`Download functionality not yet implemented for ${x}`);
    }
    async function z() {
      a.value = !0, v.value = null;
      try {
        const x = await r();
        f.value = x, h.value = [];
        const M = await p();
        m.value = M.environment || "production";
      } catch (x) {
        v.value = x instanceof Error ? x.message : "Failed to load models";
      } finally {
        a.value = !1;
      }
    }
    return Ce(z), (x, M) => (o(), s(V, null, [
      g(Re, null, {
        header: i(() => [
          g(Ne, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (T) => d.value = !0)
          })
        ]),
        search: i(() => [
          g(ft, {
            modelValue: b.value,
            "onUpdate:modelValue": M[1] || (M[1] = (T) => b.value = T),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          a.value ? (o(), S(Ye, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (o(), S(Qe, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (o(), s(V, { key: 2 }, [
            f.value.length ? (o(), S(gt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + l(f.value.length) + " models • " + l(U(L.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            (o(!0), s(V, null, Z(N.value, (T) => (o(), S($e, {
              key: T.type,
              title: T.type.toUpperCase(),
              count: T.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(V, null, Z(T.models, (F) => (o(), S(Me, {
                  key: F.hash || F.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...M[4] || (M[4] = [
                    y("📦", -1)
                  ])]),
                  title: i(() => [
                    y(l(F.filename), 1)
                  ]),
                  subtitle: i(() => [
                    y(l(U(F.size)), 1)
                  ]),
                  details: i(() => [
                    g(we, {
                      label: "Used by:",
                      value: (F.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    g(we, {
                      label: "Path:",
                      value: F.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (se) => R(F)
                    }, {
                      default: i(() => [...M[5] || (M[5] = [
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
            k.value.length ? (o(), S($e, {
              key: 1,
              title: "MISSING",
              count: k.value.length
            }, {
              default: i(() => [
                (o(!0), s(V, null, Z(k.value, (T) => (o(), S(Me, {
                  key: T.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...M[6] || (M[6] = [
                    y("⚠", -1)
                  ])]),
                  title: i(() => [
                    y(l(T.filename), 1)
                  ]),
                  subtitle: i(() => [...M[7] || (M[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: i(() => {
                    var F;
                    return [
                      g(we, {
                        label: "Required by:",
                        value: ((F = T.workflow_names) == null ? void 0 : F.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: i(() => [
                    g(Q, {
                      variant: "primary",
                      size: "sm",
                      onClick: (F) => W(T.filename)
                    }, {
                      default: i(() => [...M[8] || (M[8] = [
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (F) => D(T.filename)
                    }, {
                      default: i(() => [...M[9] || (M[9] = [
                        y(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !w.value.length && !k.value.length ? (o(), S(Fe, {
              key: 2,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      g(Je, {
        show: d.value,
        title: "About Environment Models",
        onClose: M[2] || (M[2] = (T) => d.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            M[10] || (M[10] = y(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + l(m.value) + '"', 1),
            M[11] || (M[11] = y(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: i(() => [
          g(Q, {
            variant: "primary",
            onClick: C
          }, {
            default: i(() => [...M[12] || (M[12] = [
              y(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      I.value ? (o(), S(ro, {
        key: 0,
        identifier: I.value,
        onClose: M[3] || (M[3] = (T) => I.value = null)
      }, null, 8, ["identifier"])) : c("", !0)
    ], 64));
  }
}), Ou = /* @__PURE__ */ J(Du, [["__scopeId", "data-v-cb4f12b3"]]), Uu = {
  key: 0,
  class: "indexing-progress"
}, Pu = { class: "progress-info" }, Bu = { class: "progress-label" }, Fu = { class: "progress-count" }, Au = { class: "progress-bar" }, Vu = { class: "modal-content" }, Wu = { class: "modal-header" }, Gu = { class: "modal-body" }, ju = { class: "input-group" }, Hu = { class: "current-path" }, Ku = { class: "input-group" }, qu = { class: "modal-footer" }, Ju = { class: "modal-content" }, Yu = { class: "modal-header" }, Qu = { class: "modal-body" }, Xu = { class: "input-group" }, Zu = { class: "input-group" }, em = { class: "modal-footer" }, tm = /* @__PURE__ */ q({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: u }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: r,
      getModelsDirectory: p,
      setModelsDirectory: f
    } = Se(), { addToQueue: h } = Et(), m = u, a = $([]), v = $(!1), b = $(!1), d = $(null), I = $(""), C = $(!1), L = $(null), w = $(!1), k = $(null), N = $(""), U = $(!1), R = $(!1), D = $(""), W = $(""), z = $(null), x = B(
      () => a.value.reduce((O, _) => O + (_.size || 0), 0)
    ), M = B(() => {
      if (!I.value.trim()) return a.value;
      const O = I.value.toLowerCase();
      return a.value.filter((_) => {
        const ae = _, ee = _.sha256 || ae.sha256_hash || "";
        return _.filename.toLowerCase().includes(O) || ee.toLowerCase().includes(O);
      });
    }), T = B(() => {
      const O = {};
      for (const ae of M.value) {
        const ee = ae.type || "other";
        O[ee] || (O[ee] = []), O[ee].push(ae);
      }
      const _ = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(O).sort(([ae], [ee]) => {
        const xe = _.indexOf(ae), ye = _.indexOf(ee);
        return xe >= 0 && ye >= 0 ? xe - ye : xe >= 0 ? -1 : ye >= 0 ? 1 : ae.localeCompare(ee);
      }).map(([ae, ee]) => ({ type: ae, models: ee }));
    });
    function F(O) {
      if (!O) return "Unknown";
      const _ = 1024 * 1024 * 1024, ae = 1024 * 1024;
      return O >= _ ? `${(O / _).toFixed(1)} GB` : O >= ae ? `${(O / ae).toFixed(0)} MB` : `${(O / 1024).toFixed(0)} KB`;
    }
    function se(O) {
      L.value = O.hash || O.filename;
    }
    async function X() {
      b.value = !0, d.value = null;
      try {
        const O = await r();
        await H(), O.changes > 0 && console.log(`Scan complete: ${O.changes} changes detected`);
      } catch (O) {
        d.value = O instanceof Error ? O.message : "Failed to scan models";
      } finally {
        b.value = !1;
      }
    }
    async function te() {
      if (N.value.trim()) {
        U.value = !0, d.value = null;
        try {
          const O = await f(N.value.trim());
          k.value = O.path, w.value = !1, N.value = "", await H(), console.log(`Directory changed: ${O.models_indexed} models indexed`), m("refresh");
        } catch (O) {
          d.value = O instanceof Error ? O.message : "Failed to change directory";
        } finally {
          U.value = !1;
        }
      }
    }
    function ne() {
      if (!D.value.trim() || !W.value.trim()) return;
      const O = W.value.split("/").pop() || "model.safetensors";
      h([{
        workflow: "__manual__",
        filename: O,
        url: D.value.trim(),
        targetPath: W.value.trim()
      }]), D.value = "", W.value = "", R.value = !1;
    }
    async function H() {
      v.value = !0, d.value = null;
      try {
        a.value = await n();
      } catch (O) {
        d.value = O instanceof Error ? O.message : "Failed to load workspace models";
      } finally {
        v.value = !1;
      }
    }
    async function Y() {
      try {
        const O = await p();
        k.value = O.path;
      } catch {
      }
    }
    return Ce(() => {
      H(), Y();
    }), (O, _) => (o(), s(V, null, [
      g(Re, null, {
        header: i(() => [
          g(Ne, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: _[2] || (_[2] = (ae) => C.value = !0)
          }, {
            actions: i(() => [
              g(Q, {
                variant: "primary",
                size: "sm",
                disabled: b.value,
                onClick: X
              }, {
                default: i(() => [
                  y(l(b.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              g(Q, {
                variant: "primary",
                size: "sm",
                onClick: _[0] || (_[0] = (ae) => w.value = !0)
              }, {
                default: i(() => [..._[15] || (_[15] = [
                  y(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              g(Q, {
                variant: "primary",
                size: "sm",
                onClick: _[1] || (_[1] = (ae) => R.value = !0)
              }, {
                default: i(() => [..._[16] || (_[16] = [
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
        search: i(() => [
          z.value ? (o(), s("div", Uu, [
            e("div", Pu, [
              e("span", Bu, l(z.value.message), 1),
              e("span", Fu, l(z.value.current) + "/" + l(z.value.total), 1)
            ]),
            e("div", Au, [
              e("div", {
                class: "progress-fill",
                style: qe({ width: `${z.value.current / z.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : c("", !0),
          g(ft, {
            modelValue: I.value,
            "onUpdate:modelValue": _[3] || (_[3] = (ae) => I.value = ae),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          v.value || z.value ? (o(), S(Ye, {
            key: 0,
            message: z.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : d.value ? (o(), S(Qe, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: H
          }, null, 8, ["message"])) : (o(), s(V, { key: 2 }, [
            a.value.length ? (o(), S(gt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + l(a.value.length) + " models • " + l(F(x.value)), 1)
              ]),
              _: 1
            })) : c("", !0),
            (o(!0), s(V, null, Z(T.value, (ae) => (o(), S($e, {
              key: ae.type,
              title: ae.type.toUpperCase(),
              count: ae.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (o(!0), s(V, null, Z(ae.models, (ee) => (o(), S(Me, {
                  key: ee.sha256 || ee.filename,
                  status: "synced"
                }, {
                  icon: i(() => [..._[17] || (_[17] = [
                    y("📦", -1)
                  ])]),
                  title: i(() => [
                    y(l(ee.filename), 1)
                  ]),
                  subtitle: i(() => [
                    y(l(F(ee.size)), 1)
                  ]),
                  details: i(() => [
                    g(we, {
                      label: "Hash:",
                      value: ee.hash ? ee.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (xe) => se(ee)
                    }, {
                      default: i(() => [..._[18] || (_[18] = [
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
            M.value.length ? c("", !0) : (o(), S(Fe, {
              key: 1,
              icon: "📭",
              message: I.value ? `No models match '${I.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g(Je, {
        show: C.value,
        title: "About Workspace Model Index",
        onClose: _[4] || (_[4] = (ae) => C.value = !1)
      }, {
        content: i(() => [..._[19] || (_[19] = [
          e("p", null, [
            y(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            y(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      L.value ? (o(), S(ro, {
        key: 0,
        identifier: L.value,
        onClose: _[5] || (_[5] = (ae) => L.value = null)
      }, null, 8, ["identifier"])) : c("", !0),
      (o(), S(ze, { to: "body" }, [
        w.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: _[9] || (_[9] = _e((ae) => w.value = !1, ["self"]))
        }, [
          e("div", Vu, [
            e("div", Wu, [
              _[20] || (_[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: _[6] || (_[6] = (ae) => w.value = !1)
              }, "✕")
            ]),
            e("div", Gu, [
              e("div", ju, [
                _[21] || (_[21] = e("label", null, "Current Directory", -1)),
                e("code", Hu, l(k.value || "Not set"), 1)
              ]),
              e("div", Ku, [
                _[22] || (_[22] = e("label", null, "New Directory Path", -1)),
                g(Be, {
                  modelValue: N.value,
                  "onUpdate:modelValue": _[7] || (_[7] = (ae) => N.value = ae),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              _[23] || (_[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", qu, [
              g(re, {
                variant: "secondary",
                onClick: _[8] || (_[8] = (ae) => w.value = !1)
              }, {
                default: i(() => [..._[24] || (_[24] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              g(re, {
                variant: "primary",
                disabled: !N.value.trim() || U.value,
                loading: U.value,
                onClick: te
              }, {
                default: i(() => [
                  y(l(U.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : c("", !0)
      ])),
      (o(), S(ze, { to: "body" }, [
        R.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: _[14] || (_[14] = _e((ae) => R.value = !1, ["self"]))
        }, [
          e("div", Ju, [
            e("div", Yu, [
              _[25] || (_[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: _[10] || (_[10] = (ae) => R.value = !1)
              }, "✕")
            ]),
            e("div", Qu, [
              e("div", Xu, [
                _[26] || (_[26] = e("label", null, "Download URL", -1)),
                g(Be, {
                  modelValue: D.value,
                  "onUpdate:modelValue": _[11] || (_[11] = (ae) => D.value = ae),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", Zu, [
                _[27] || (_[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                g(Be, {
                  modelValue: W.value,
                  "onUpdate:modelValue": _[12] || (_[12] = (ae) => W.value = ae),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              _[28] || (_[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", em, [
              g(re, {
                variant: "secondary",
                onClick: _[13] || (_[13] = (ae) => R.value = !1)
              }, {
                default: i(() => [..._[29] || (_[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              g(re, {
                variant: "primary",
                disabled: !D.value.trim() || !W.value.trim(),
                onClick: ne
              }, {
                default: i(() => [..._[30] || (_[30] = [
                  y(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : c("", !0)
      ]))
    ], 64));
  }
}), om = /* @__PURE__ */ J(tm, [["__scopeId", "data-v-73b78d84"]]), sm = { class: "node-details" }, nm = { class: "status-row" }, am = {
  key: 0,
  class: "detail-row"
}, lm = { class: "value" }, im = { class: "detail-row" }, rm = { class: "value" }, dm = {
  key: 1,
  class: "detail-row"
}, cm = { class: "value mono" }, um = {
  key: 2,
  class: "detail-row"
}, mm = ["href"], vm = {
  key: 3,
  class: "detail-row"
}, fm = { class: "value mono small" }, gm = { class: "detail-row" }, pm = {
  key: 0,
  class: "value"
}, hm = {
  key: 1,
  class: "workflow-list"
}, ym = /* @__PURE__ */ q({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, r = u, p = B(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), f = B(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), h = B(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (m, a) => (o(), S(et, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: a[1] || (a[1] = (v) => r("close"))
    }, {
      body: i(() => [
        e("div", sm, [
          e("div", nm, [
            a[2] || (a[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: oe(["status-badge", p.value])
            }, l(f.value), 3)
          ]),
          t.node.version ? (o(), s("div", am, [
            a[3] || (a[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", lm, l(t.node.source === "development" ? "" : "v") + l(t.node.version), 1)
          ])) : c("", !0),
          e("div", im, [
            a[4] || (a[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", rm, l(h.value), 1)
          ]),
          t.node.registry_id ? (o(), s("div", dm, [
            a[5] || (a[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", cm, l(t.node.registry_id), 1)
          ])) : c("", !0),
          t.node.repository ? (o(), s("div", um, [
            a[7] || (a[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              y(l(t.node.repository) + " ", 1),
              a[6] || (a[6] = e("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                e("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, mm)
          ])) : c("", !0),
          t.node.download_url ? (o(), s("div", vm, [
            a[8] || (a[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", fm, l(t.node.download_url), 1)
          ])) : c("", !0),
          a[10] || (a[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", gm, [
            a[9] || (a[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (o(), s("span", pm, " Not used in any workflows ")) : (o(), s("div", hm, [
              (o(!0), s(V, null, Z(t.node.used_in_workflows, (v) => (o(), s("span", {
                key: v,
                class: "workflow-tag"
              }, l(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: i(() => [
        g(re, {
          variant: "secondary",
          onClick: a[0] || (a[0] = (v) => r("close"))
        }, {
          default: i(() => [...a[11] || (a[11] = [
            y(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), wm = /* @__PURE__ */ J(ym, [["__scopeId", "data-v-b342f626"]]), km = { key: 0 }, bm = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, _m = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, $m = /* @__PURE__ */ q({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: u }) {
    const n = u, { getNodes: r, trackNodeAsDev: p, installNode: f, uninstallNode: h } = Se(), m = $({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), a = $(!1), v = $(null), b = $(""), d = $(!1), I = $(null), C = B(() => {
      if (!b.value.trim()) return m.value.nodes;
      const T = b.value.toLowerCase();
      return m.value.nodes.filter(
        (F) => {
          var se, X;
          return F.name.toLowerCase().includes(T) || ((se = F.description) == null ? void 0 : se.toLowerCase().includes(T)) || ((X = F.repository) == null ? void 0 : X.toLowerCase().includes(T));
        }
      );
    }), L = B(
      () => C.value.filter((T) => T.installed && T.tracked)
    ), w = B(
      () => C.value.filter((T) => !T.installed && T.tracked)
    ), k = B(
      () => C.value.filter((T) => T.installed && !T.tracked)
    );
    function N(T) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[T] || T;
    }
    function U(T) {
      return !T.used_in_workflows || T.used_in_workflows.length === 0 ? "Not used in any workflows" : T.used_in_workflows.length === 1 ? T.used_in_workflows[0] : `${T.used_in_workflows.length} workflows`;
    }
    function R(T) {
      I.value = T;
    }
    function D() {
      n("open-node-manager");
    }
    async function W(T) {
      if (confirm(`Track "${T}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          a.value = !0;
          const F = await p(T);
          F.status === "success" ? (alert(`Node "${T}" is now tracked as development!`), await M()) : alert(`Failed to track node: ${F.message || "Unknown error"}`);
        } catch (F) {
          alert(`Error tracking node: ${F instanceof Error ? F.message : "Unknown error"}`);
        } finally {
          a.value = !1;
        }
    }
    async function z(T) {
      if (confirm(`Remove untracked node "${T}"?

This will delete the node directory from custom_nodes/.`))
        try {
          a.value = !0;
          const F = await h(T);
          F.status === "success" ? (alert(`Node "${T}" removed!`), await M()) : alert(`Failed to remove node: ${F.message || "Unknown error"}`);
        } catch (F) {
          alert(`Error removing node: ${F instanceof Error ? F.message : "Unknown error"}`);
        } finally {
          a.value = !1;
        }
    }
    async function x(T) {
      if (confirm(`Install node "${T}"?

This will download and install the node.`))
        try {
          a.value = !0;
          const F = await f(T);
          F.status === "success" ? (alert(`Node "${T}" installed successfully!`), await M()) : alert(`Failed to install node: ${F.message || "Unknown error"}`);
        } catch (F) {
          alert(`Error installing node: ${F instanceof Error ? F.message : "Unknown error"}`);
        } finally {
          a.value = !1;
        }
    }
    async function M() {
      a.value = !0, v.value = null;
      try {
        m.value = await r();
      } catch (T) {
        v.value = T instanceof Error ? T.message : "Failed to load nodes";
      } finally {
        a.value = !1;
      }
    }
    return Ce(M), (T, F) => (o(), s(V, null, [
      g(Re, null, {
        header: i(() => [
          g(Ne, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: F[0] || (F[0] = (se) => d.value = !0)
          }, {
            actions: i(() => [
              g(Q, {
                variant: "primary",
                size: "sm",
                onClick: D
              }, {
                default: i(() => [...F[5] || (F[5] = [
                  y(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          g(ft, {
            modelValue: b.value,
            "onUpdate:modelValue": F[1] || (F[1] = (se) => b.value = se),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          a.value ? (o(), S(Ye, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (o(), S(Qe, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: M
          }, null, 8, ["message"])) : (o(), s(V, { key: 2 }, [
            m.value.total_count ? (o(), S(gt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(l(m.value.installed_count) + " installed ", 1),
                m.value.missing_count ? (o(), s(V, { key: 0 }, [
                  y(" • " + l(m.value.missing_count) + " missing", 1)
                ], 64)) : c("", !0),
                m.value.untracked_count ? (o(), s(V, { key: 1 }, [
                  y(" • " + l(m.value.untracked_count) + " untracked", 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            k.value.length ? (o(), S($e, {
              key: 1,
              title: "UNTRACKED",
              count: k.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(V, null, Z(k.value, (se) => (o(), S(Me, {
                  key: se.name,
                  status: "warning"
                }, {
                  icon: i(() => [...F[6] || (F[6] = [
                    y("?", -1)
                  ])]),
                  title: i(() => [
                    y(l(se.name), 1)
                  ]),
                  subtitle: i(() => [...F[7] || (F[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: i(() => [
                    g(we, {
                      label: "Used by:",
                      value: U(se)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => R(se)
                    }, {
                      default: i(() => [...F[8] || (F[8] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Q, {
                      variant: "primary",
                      size: "sm",
                      onClick: (X) => W(se.name)
                    }, {
                      default: i(() => [...F[9] || (F[9] = [
                        y(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Q, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (X) => z(se.name)
                    }, {
                      default: i(() => [...F[10] || (F[10] = [
                        y(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            L.value.length ? (o(), S($e, {
              key: 2,
              title: "INSTALLED",
              count: L.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(V, null, Z(L.value, (se) => (o(), S(Me, {
                  key: se.name,
                  status: "synced"
                }, {
                  icon: i(() => [
                    y(l(se.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: i(() => [
                    y(l(se.name), 1)
                  ]),
                  subtitle: i(() => [
                    se.version ? (o(), s("span", km, l(se.source === "development" ? "" : "v") + l(se.version), 1)) : (o(), s("span", bm, "version unknown")),
                    e("span", _m, " • " + l(N(se.source)), 1)
                  ]),
                  details: i(() => [
                    g(we, {
                      label: "Used by:",
                      value: U(se)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => R(se)
                    }, {
                      default: i(() => [...F[11] || (F[11] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: D
                    }, {
                      default: i(() => [...F[12] || (F[12] = [
                        y(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            w.value.length ? (o(), S($e, {
              key: 3,
              title: "MISSING",
              count: w.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(V, null, Z(w.value, (se) => (o(), S(Me, {
                  key: se.name,
                  status: "missing"
                }, {
                  icon: i(() => [...F[13] || (F[13] = [
                    y("!", -1)
                  ])]),
                  title: i(() => [
                    y(l(se.name), 1)
                  ]),
                  subtitle: i(() => [...F[14] || (F[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: i(() => [
                    g(we, {
                      label: "Required by:",
                      value: U(se)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(Q, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => R(se)
                    }, {
                      default: i(() => [...F[15] || (F[15] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Q, {
                      variant: "primary",
                      size: "sm",
                      onClick: (X) => x(se.name)
                    }, {
                      default: i(() => [...F[16] || (F[16] = [
                        y(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !L.value.length && !w.value.length && !k.value.length ? (o(), S(Fe, {
              key: 4,
              icon: "📭",
              message: b.value ? `No nodes match '${b.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      g(Je, {
        show: d.value,
        title: "About Custom Nodes",
        onClose: F[3] || (F[3] = (se) => d.value = !1)
      }, {
        content: i(() => [...F[17] || (F[17] = [
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
        actions: i(() => [
          g(Q, {
            variant: "primary",
            onClick: F[2] || (F[2] = (se) => d.value = !1)
          }, {
            default: i(() => [...F[18] || (F[18] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      I.value ? (o(), S(wm, {
        key: 0,
        node: I.value,
        onClose: F[4] || (F[4] = (se) => I.value = null)
      }, null, 8, ["node"])) : c("", !0)
    ], 64));
  }
}), Cm = /* @__PURE__ */ J($m, [["__scopeId", "data-v-4ac1465a"]]), xm = { class: "remote-url-display" }, Sm = ["title"], Im = ["title"], Em = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Mm = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, zm = /* @__PURE__ */ q({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const u = t, n = $(!1), r = B(() => {
      if (u.url.length <= u.maxLength)
        return u.url;
      const f = u.url.slice(0, Math.floor(u.maxLength * 0.6)), h = u.url.slice(-Math.floor(u.maxLength * 0.3));
      return `${f}...${h}`;
    });
    async function p() {
      try {
        await navigator.clipboard.writeText(u.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (f) {
        console.error("Failed to copy URL:", f);
      }
    }
    return (f, h) => (o(), s("div", xm, [
      e("span", {
        class: "url-text",
        title: t.url
      }, l(r.value), 9, Sm),
      e("button", {
        class: oe(["copy-btn", { copied: n.value }]),
        onClick: p,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (o(), s("svg", Mm, [...h[1] || (h[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), s("svg", Em, [...h[0] || (h[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Im)
    ]));
  }
}), Qt = /* @__PURE__ */ J(zm, [["__scopeId", "data-v-7768a58d"]]), Lm = { class: "remote-title" }, Tm = {
  key: 0,
  class: "default-badge"
}, Rm = {
  key: 1,
  class: "sync-badge"
}, Nm = {
  key: 0,
  class: "ahead"
}, Dm = {
  key: 1,
  class: "behind"
}, Om = {
  key: 0,
  class: "tracking-info"
}, Um = /* @__PURE__ */ q({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: u }) {
    const n = t, r = B(() => n.fetchingRemote === n.remote.name), p = B(() => n.remote.is_default), f = B(() => !!n.trackingBranch);
    function h(m) {
      const a = new Date(m), b = (/* @__PURE__ */ new Date()).getTime() - a.getTime(), d = Math.floor(b / 6e4);
      if (d < 1) return "Just now";
      if (d < 60) return `${d}m ago`;
      const I = Math.floor(d / 60);
      if (I < 24) return `${I}h ago`;
      const C = Math.floor(I / 24);
      return C < 7 ? `${C}d ago` : a.toLocaleDateString();
    }
    return (m, a) => (o(), S(Me, {
      status: p.value ? "synced" : void 0
    }, {
      icon: i(() => [
        y(l(p.value ? "🔗" : "🌐"), 1)
      ]),
      title: i(() => [
        e("div", Lm, [
          e("span", null, l(t.remote.name), 1),
          p.value ? (o(), s("span", Tm, "DEFAULT")) : c("", !0),
          t.syncStatus ? (o(), s("span", Rm, [
            t.syncStatus.ahead > 0 ? (o(), s("span", Nm, "↑" + l(t.syncStatus.ahead), 1)) : c("", !0),
            t.syncStatus.behind > 0 ? (o(), s("span", Dm, "↓" + l(t.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        f.value ? (o(), s("span", Om, " Tracking: " + l(t.trackingBranch), 1)) : c("", !0)
      ]),
      details: i(() => {
        var v;
        return [
          g(we, { label: "Fetch:" }, {
            default: i(() => [
              g(Qt, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), S(we, {
            key: 0,
            label: "Push:"
          }, {
            default: i(() => [
              g(Qt, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0),
          (v = t.syncStatus) != null && v.last_fetch ? (o(), S(we, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: i(() => [
              e("span", null, l(h(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : c("", !0)
        ];
      }),
      actions: i(() => [
        g(Q, {
          variant: "primary",
          size: "xs",
          loading: r.value,
          onClick: a[0] || (a[0] = (v) => m.$emit("fetch", t.remote.name))
        }, {
          default: i(() => [...a[3] || (a[3] = [
            y(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        g(Q, {
          variant: "secondary",
          size: "xs",
          onClick: a[1] || (a[1] = (v) => m.$emit("edit", t.remote.name))
        }, {
          default: i(() => [...a[4] || (a[4] = [
            y(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        p.value ? c("", !0) : (o(), S(Q, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: a[2] || (a[2] = (v) => m.$emit("remove", t.remote.name))
        }, {
          default: i(() => [...a[5] || (a[5] = [
            y(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), Pm = /* @__PURE__ */ J(Um, [["__scopeId", "data-v-17362e45"]]), Bm = ["for"], Fm = {
  key: 0,
  class: "base-form-field-required"
}, Am = { class: "base-form-field-input" }, Vm = {
  key: 1,
  class: "base-form-field-error"
}, Wm = {
  key: 2,
  class: "base-form-field-hint"
}, Gm = /* @__PURE__ */ q({
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
    const u = t, n = B(() => u.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, p) => (o(), s("div", {
      class: oe(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), s("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        y(l(t.label) + " ", 1),
        t.required ? (o(), s("span", Fm, "*")) : c("", !0)
      ], 8, Bm)) : c("", !0),
      e("div", Am, [
        ue(r.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), s("span", Vm, l(t.error), 1)) : t.hint ? (o(), s("span", Wm, l(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), Pt = /* @__PURE__ */ J(Gm, [["__scopeId", "data-v-9a1cf296"]]), jm = { class: "remote-form" }, Hm = { class: "form-header" }, Km = { class: "form-body" }, qm = {
  key: 0,
  class: "form-error"
}, Jm = { class: "form-actions" }, Ym = /* @__PURE__ */ q({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: u }) {
    const n = t, r = u, p = $({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), f = $(!1), h = $(null);
    Wt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      p.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const m = B(() => p.value.name.trim() !== "" && p.value.fetchUrl.trim() !== "");
    async function a() {
      if (!(!m.value || f.value)) {
        h.value = null, f.value = !0;
        try {
          r("submit", p.value);
        } catch (v) {
          h.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          f.value = !1;
        }
      }
    }
    return (v, b) => (o(), s("div", jm, [
      e("div", Hm, [
        g(Oe, null, {
          default: i(() => [
            y(l(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Km, [
        g(Pt, {
          label: "Remote Name",
          required: ""
        }, {
          default: i(() => [
            g(Be, {
              modelValue: p.value.name,
              "onUpdate:modelValue": b[0] || (b[0] = (d) => p.value.name = d),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        g(Pt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: i(() => [
            g(Be, {
              modelValue: p.value.fetchUrl,
              "onUpdate:modelValue": b[1] || (b[1] = (d) => p.value.fetchUrl = d),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        g(Pt, { label: "Push URL (optional)" }, {
          default: i(() => [
            g(Be, {
              modelValue: p.value.pushUrl,
              "onUpdate:modelValue": b[2] || (b[2] = (d) => p.value.pushUrl = d),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        h.value ? (o(), s("div", qm, l(h.value), 1)) : c("", !0)
      ]),
      e("div", Jm, [
        g(Q, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: f.value,
          onClick: a
        }, {
          default: i(() => [
            y(l(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        g(Q, {
          variant: "ghost",
          size: "md",
          onClick: b[3] || (b[3] = (d) => v.$emit("cancel"))
        }, {
          default: i(() => [...b[4] || (b[4] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Qm = /* @__PURE__ */ J(Ym, [["__scopeId", "data-v-56021b18"]]), Xm = { key: 0 }, Zm = /* @__PURE__ */ q({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: u,
      addRemote: n,
      removeRemote: r,
      updateRemoteUrl: p,
      fetchRemote: f,
      getRemoteSyncStatus: h
    } = Se(), m = $([]), a = $(null), v = $({}), b = $(!1), d = $(null), I = $(""), C = $(!1), L = $(null), w = $(!1), k = $("add"), N = $({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), U = B(() => {
      if (!I.value.trim()) return m.value;
      const X = I.value.toLowerCase();
      return m.value.filter(
        (te) => te.name.toLowerCase().includes(X) || te.fetch_url.toLowerCase().includes(X) || te.push_url.toLowerCase().includes(X)
      );
    });
    function R(X) {
      var te;
      return ((te = a.value) == null ? void 0 : te.remote) === X;
    }
    async function D() {
      b.value = !0, d.value = null;
      try {
        const X = await u();
        m.value = X.remotes, a.value = X.current_branch_tracking || null, await Promise.all(
          X.remotes.map(async (te) => {
            const ne = await h(te.name);
            ne && (v.value[te.name] = ne);
          })
        );
      } catch (X) {
        d.value = X instanceof Error ? X.message : "Failed to load remotes";
      } finally {
        b.value = !1;
      }
    }
    function W() {
      k.value = "add", N.value = { name: "", fetchUrl: "", pushUrl: "" }, w.value = !0;
    }
    function z(X) {
      const te = m.value.find((ne) => ne.name === X);
      te && (k.value = "edit", N.value = {
        name: te.name,
        fetchUrl: te.fetch_url,
        pushUrl: te.push_url
      }, w.value = !0);
    }
    async function x(X) {
      try {
        k.value === "add" ? await n(X.name, X.fetchUrl) : await p(X.name, X.fetchUrl, X.pushUrl || void 0), w.value = !1, await D();
      } catch (te) {
        d.value = te instanceof Error ? te.message : "Operation failed";
      }
    }
    function M() {
      w.value = !1, N.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function T(X) {
      L.value = X;
      try {
        await f(X);
        const te = await h(X);
        te && (v.value[X] = te);
      } catch (te) {
        d.value = te instanceof Error ? te.message : "Fetch failed";
      } finally {
        L.value = null;
      }
    }
    async function F(X) {
      if (confirm(`Remove remote "${X}"?`))
        try {
          await r(X), await D();
        } catch (te) {
          d.value = te instanceof Error ? te.message : "Failed to remove remote";
        }
    }
    function se() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return Ce(D), (X, te) => (o(), s(V, null, [
      g(Re, null, {
        header: i(() => [
          g(Ne, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: te[0] || (te[0] = (ne) => C.value = !0)
          }, {
            actions: i(() => [
              w.value ? c("", !0) : (o(), S(Q, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: W
              }, {
                default: i(() => [...te[3] || (te[3] = [
                  y(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          w.value ? c("", !0) : (o(), S(ft, {
            key: 0,
            modelValue: I.value,
            "onUpdate:modelValue": te[1] || (te[1] = (ne) => I.value = ne),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: i(() => [
          b.value ? (o(), S(Ye, {
            key: 0,
            message: "Loading remotes..."
          })) : d.value ? (o(), S(Qe, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (o(), s(V, { key: 2 }, [
            w.value ? (o(), S(Qm, {
              key: 0,
              mode: k.value,
              "remote-name": N.value.name,
              "fetch-url": N.value.fetchUrl,
              "push-url": N.value.pushUrl,
              onSubmit: x,
              onCancel: M
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            m.value.length && !w.value ? (o(), S(gt, {
              key: 1,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + l(m.value.length) + " remote" + l(m.value.length !== 1 ? "s" : "") + " ", 1),
                a.value ? (o(), s("span", Xm, " • Tracking: " + l(a.value.remote) + "/" + l(a.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            U.value.length && !w.value ? (o(), S($e, {
              key: 2,
              title: "REMOTES",
              count: U.value.length
            }, {
              default: i(() => [
                (o(!0), s(V, null, Z(U.value, (ne) => {
                  var H;
                  return o(), S(Pm, {
                    key: ne.name,
                    remote: ne,
                    "sync-status": v.value[ne.name],
                    "tracking-branch": R(ne.name) ? (H = a.value) == null ? void 0 : H.branch : void 0,
                    "fetching-remote": L.value,
                    onFetch: T,
                    onEdit: z,
                    onRemove: F
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !U.value.length && !w.value ? (o(), S(Fe, {
              key: 3,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: i(() => [
                g(Q, {
                  variant: "primary",
                  onClick: W
                }, {
                  default: i(() => [...te[4] || (te[4] = [
                    y(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      g(Je, {
        show: C.value,
        title: "About Git Remotes",
        onClose: te[2] || (te[2] = (ne) => C.value = !1)
      }, {
        content: i(() => [...te[5] || (te[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            y(" The "),
            e("strong", null, '"origin"'),
            y(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: i(() => [
          g(Q, {
            variant: "link",
            onClick: se
          }, {
            default: i(() => [...te[6] || (te[6] = [
              y(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), ev = /* @__PURE__ */ J(Zm, [["__scopeId", "data-v-a75719bb"]]), tv = { class: "setting-info" }, ov = { class: "setting-label" }, sv = {
  key: 0,
  class: "required-marker"
}, nv = {
  key: 0,
  class: "setting-description"
}, av = { class: "setting-control" }, lv = /* @__PURE__ */ q({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (o(), s("div", {
      class: oe(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", tv, [
        e("div", ov, [
          y(l(t.label) + " ", 1),
          t.required ? (o(), s("span", sv, "*")) : c("", !0)
        ]),
        t.description ? (o(), s("div", nv, l(t.description), 1)) : c("", !0)
      ]),
      e("div", av, [
        ue(u.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Ke = /* @__PURE__ */ J(lv, [["__scopeId", "data-v-cb5d236c"]]), iv = { class: "toggle" }, rv = ["checked", "disabled"], dv = /* @__PURE__ */ q({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (o(), s("label", iv, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, rv),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), it = /* @__PURE__ */ J(dv, [["__scopeId", "data-v-71c0f550"]]), cv = { class: "settings-section" }, uv = { class: "path-setting" }, mv = { class: "path-value" }, vv = { class: "path-setting" }, fv = { class: "path-value" }, gv = { class: "settings-section" }, pv = { class: "settings-section" }, hv = { class: "settings-section" }, yv = /* @__PURE__ */ q({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: u, updateConfig: n } = Se(), r = $(!1), p = $(null), f = $(null), h = $(null), m = $(null), a = $(""), v = $(""), b = $(!0), d = $(!0), I = $(!1), C = B(() => m.value ? a.value !== (m.value.civitai_api_key || "") : !1);
    async function L() {
      r.value = !0, p.value = null;
      try {
        h.value = await u(), m.value = { ...h.value }, a.value = h.value.civitai_api_key || "", v.value = h.value.huggingface_token || "", b.value = h.value.auto_sync_models, d.value = h.value.confirm_destructive;
        const U = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        I.value = U === "true";
      } catch (U) {
        p.value = U instanceof Error ? U.message : "Failed to load settings";
      } finally {
        r.value = !1;
      }
    }
    async function w() {
      var U;
      f.value = null;
      try {
        const R = {};
        a.value !== (((U = m.value) == null ? void 0 : U.civitai_api_key) || "") && (R.civitai_api_key = a.value || null), await n(R), await L(), f.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          f.value = null;
        }, 3e3);
      } catch (R) {
        f.value = {
          type: "error",
          message: R instanceof Error ? R.message : "Failed to save settings"
        };
      }
    }
    function k() {
      m.value && (a.value = m.value.civitai_api_key || "", v.value = m.value.huggingface_token || "", b.value = m.value.auto_sync_models, d.value = m.value.confirm_destructive, f.value = null);
    }
    function N(U) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(U)), console.log("[ComfyGit] Auto-refresh setting saved:", U);
    }
    return Ce(L), (U, R) => (o(), S(Re, null, {
      header: i(() => [
        g(Ne, { title: "WORKSPACE SETTINGS" }, {
          actions: i(() => [
            g(Q, {
              variant: "primary",
              size: "sm",
              disabled: !C.value,
              onClick: w
            }, {
              default: i(() => [...R[5] || (R[5] = [
                y(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            C.value ? (o(), S(Q, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: k
            }, {
              default: i(() => [...R[6] || (R[6] = [
                y(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        r.value ? (o(), S(Ye, {
          key: 0,
          message: "Loading workspace settings..."
        })) : p.value ? (o(), S(Qe, {
          key: 1,
          message: p.value,
          retry: !0,
          onRetry: L
        }, null, 8, ["message"])) : (o(), s(V, { key: 2 }, [
          g($e, { title: "WORKSPACE PATHS" }, {
            default: i(() => {
              var D, W;
              return [
                e("div", cv, [
                  e("div", uv, [
                    R[7] || (R[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    R[8] || (R[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", mv, l(((D = h.value) == null ? void 0 : D.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", vv, [
                    R[9] || (R[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    R[10] || (R[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", fv, l(((W = h.value) == null ? void 0 : W.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          g($e, { title: "API CREDENTIALS" }, {
            default: i(() => [
              e("div", gv, [
                g(Ke, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: i(() => [
                    g(Lt, {
                      modelValue: a.value,
                      "onUpdate:modelValue": R[0] || (R[0] = (D) => a.value = D),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                g(Ke, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    g(Lt, {
                      modelValue: v.value,
                      "onUpdate:modelValue": R[1] || (R[1] = (D) => v.value = D),
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
          g($e, { title: "UI SETTINGS" }, {
            default: i(() => [
              e("div", pv, [
                g(Ke, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: i(() => [
                    g(it, {
                      modelValue: I.value,
                      "onUpdate:modelValue": [
                        R[2] || (R[2] = (D) => I.value = D),
                        N
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          g($e, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: i(() => [
              e("div", hv, [
                g(Ke, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    g(it, {
                      modelValue: b.value,
                      "onUpdate:modelValue": R[3] || (R[3] = (D) => b.value = D),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                g(Ke, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    g(it, {
                      modelValue: d.value,
                      "onUpdate:modelValue": R[4] || (R[4] = (D) => d.value = D),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          f.value ? (o(), S(gt, {
            key: 0,
            variant: (f.value.type === "success", "compact")
          }, {
            default: i(() => [
              e("span", {
                style: qe({ color: f.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, l(f.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), wv = /* @__PURE__ */ J(yv, [["__scopeId", "data-v-7861bd35"]]), kv = /* @__PURE__ */ q({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: u } = Se(), n = $([]), r = $(!1), p = $(null), f = $(!1), h = $(null), m = B(() => n.value.length === 0 ? [] : n.value.map((v) => ({
      text: `${v.timestamp} - ${v.name} - ${v.level} - ${v.func}:${v.line} - ${v.message}`,
      level: v.level
    })));
    async function a() {
      r.value = !0, p.value = null;
      try {
        n.value = await u(void 0, 500);
      } catch (v) {
        p.value = v instanceof Error ? v.message : "Failed to load workspace logs";
      } finally {
        r.value = !1, setTimeout(() => {
          var v;
          (v = h.value) != null && v.parentElement && (h.value.parentElement.scrollTop = h.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Ce(a), (v, b) => (o(), s(V, null, [
      g(Re, null, {
        header: i(() => [
          g(Ne, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (d) => f.value = !0)
          }, {
            actions: i(() => [
              g(Q, {
                variant: "secondary",
                size: "sm",
                onClick: a,
                disabled: r.value
              }, {
                default: i(() => [
                  y(l(r.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          r.value ? (o(), S(Ye, {
            key: 0,
            message: "Loading workspace logs..."
          })) : p.value ? (o(), S(Qe, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: a
          }, null, 8, ["message"])) : (o(), s(V, { key: 2 }, [
            n.value.length === 0 ? (o(), S(Fe, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: h,
              class: "log-output"
            }, [
              (o(!0), s(V, null, Z(m.value, (d, I) => (o(), s("div", {
                key: I,
                class: oe(`log-line log-level-${d.level.toLowerCase()}`)
              }, l(d.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      g(Je, {
        show: f.value,
        title: "About Workspace Logs",
        onClose: b[2] || (b[2] = (d) => f.value = !1)
      }, {
        content: i(() => [...b[3] || (b[3] = [
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
        actions: i(() => [
          g(Q, {
            variant: "primary",
            onClick: b[1] || (b[1] = (d) => f.value = !1)
          }, {
            default: i(() => [...b[4] || (b[4] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), bv = /* @__PURE__ */ J(kv, [["__scopeId", "data-v-39f6a756"]]), _v = /* @__PURE__ */ q({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: u, getStatus: n } = Se(), r = $([]), p = $(!1), f = $(null), h = $(!1), m = $("production"), a = $(null), v = B(() => r.value.length === 0 ? [] : r.value.map((d) => ({
      text: `${d.timestamp} - ${d.name} - ${d.level} - ${d.func}:${d.line} - ${d.message}`,
      level: d.level
    })));
    async function b() {
      p.value = !0, f.value = null;
      try {
        r.value = await u(void 0, 500);
        try {
          const d = await n();
          m.value = d.environment || "production";
        } catch {
        }
      } catch (d) {
        f.value = d instanceof Error ? d.message : "Failed to load environment logs";
      } finally {
        p.value = !1, setTimeout(() => {
          var d;
          (d = a.value) != null && d.parentElement && (a.value.parentElement.scrollTop = a.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Ce(b), (d, I) => (o(), s(V, null, [
      g(Re, null, {
        header: i(() => [
          g(Ne, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (C) => h.value = !0)
          }, {
            actions: i(() => [
              g(Q, {
                variant: "secondary",
                size: "sm",
                onClick: b,
                disabled: p.value
              }, {
                default: i(() => [
                  y(l(p.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          p.value ? (o(), S(Ye, {
            key: 0,
            message: "Loading environment logs..."
          })) : f.value ? (o(), S(Qe, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (o(), s(V, { key: 2 }, [
            r.value.length === 0 ? (o(), S(Fe, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: a,
              class: "log-output"
            }, [
              (o(!0), s(V, null, Z(v.value, (C, L) => (o(), s("div", {
                key: L,
                class: oe(`log-line log-level-${C.level.toLowerCase()}`)
              }, l(C.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      g(Je, {
        show: h.value,
        title: "About Environment Logs",
        onClose: I[2] || (I[2] = (C) => h.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            I[3] || (I[3] = y(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, l(m.value), 1),
            I[4] || (I[4] = y(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          I[5] || (I[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          I[6] || (I[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: i(() => [
          g(Q, {
            variant: "primary",
            onClick: I[1] || (I[1] = (C) => h.value = !1)
          }, {
            default: i(() => [...I[7] || (I[7] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), $v = /* @__PURE__ */ J(_v, [["__scopeId", "data-v-4f1e6f72"]]), Cv = { class: "env-title" }, xv = {
  key: 0,
  class: "current-badge"
}, Sv = {
  key: 0,
  class: "branch-info"
}, Iv = /* @__PURE__ */ q({
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
    return (u, n) => (o(), S(Me, {
      status: t.isCurrent ? "synced" : void 0
    }, Tt({
      icon: i(() => [
        y(l(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: i(() => [
        e("div", Cv, [
          e("span", null, l(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), s("span", xv, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        t.currentBranch ? (o(), s("span", Sv, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          y(" " + l(t.currentBranch), 1)
        ])) : c("", !0)
      ]),
      actions: i(() => [
        ue(u.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: i(() => [
          g(we, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          g(we, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          g(we, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (o(), S(we, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : c("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Ev = /* @__PURE__ */ J(Iv, [["__scopeId", "data-v-9231917a"]]), Mv = { class: "env-details" }, zv = { class: "status-row" }, Lv = {
  key: 0,
  class: "detail-row"
}, Tv = { class: "value mono" }, Rv = {
  key: 1,
  class: "detail-row"
}, Nv = { class: "value mono small" }, Dv = { class: "detail-row" }, Ov = { class: "value" }, Uv = { class: "detail-row" }, Pv = { class: "value" }, Bv = { class: "detail-row" }, Fv = { class: "value" }, Av = {
  key: 2,
  class: "section-divider"
}, Vv = {
  key: 3,
  class: "detail-row"
}, Wv = { class: "value" }, Gv = {
  key: 4,
  class: "detail-row"
}, jv = { class: "value" }, Hv = { class: "footer-actions" }, Kv = /* @__PURE__ */ q({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: u }) {
    const n = u;
    function r(p) {
      if (!p) return "Unknown";
      try {
        const f = new Date(p), m = (/* @__PURE__ */ new Date()).getTime() - f.getTime(), a = Math.floor(m / 6e4), v = Math.floor(m / 36e5), b = Math.floor(m / 864e5);
        return a < 1 ? "just now" : a < 60 ? `${a} ${a === 1 ? "minute" : "minutes"} ago` : v < 24 ? `${v} ${v === 1 ? "hour" : "hours"} ago` : b < 30 ? `${b} ${b === 1 ? "day" : "days"} ago` : f.toLocaleDateString();
      } catch {
        return p;
      }
    }
    return (p, f) => (o(), S(et, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: f[2] || (f[2] = (h) => n("close"))
    }, {
      body: i(() => [
        e("div", Mv, [
          e("div", zv, [
            f[3] || (f[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: oe(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, l(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (o(), s("div", Lv, [
            f[4] || (f[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", Tv, l(t.environment.current_branch), 1)
          ])) : c("", !0),
          t.environment.path ? (o(), s("div", Rv, [
            f[5] || (f[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", Nv, l(t.environment.path), 1)
          ])) : c("", !0),
          f[11] || (f[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Dv, [
            f[6] || (f[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", Ov, l(t.environment.workflow_count), 1)
          ]),
          e("div", Uv, [
            f[7] || (f[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Pv, l(t.environment.node_count), 1)
          ]),
          e("div", Bv, [
            f[8] || (f[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Fv, l(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (o(), s("div", Av)) : c("", !0),
          t.environment.created_at ? (o(), s("div", Vv, [
            f[9] || (f[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", Wv, l(r(t.environment.created_at)), 1)
          ])) : c("", !0),
          t.environment.last_used ? (o(), s("div", Gv, [
            f[10] || (f[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", jv, l(r(t.environment.last_used)), 1)
          ])) : c("", !0)
        ])
      ]),
      footer: i(() => [
        e("div", Hv, [
          t.canDelete ? (o(), S(re, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: f[0] || (f[0] = (h) => n("delete", t.environment.name))
          }, {
            default: i(() => [...f[12] || (f[12] = [
              y(" Delete ", -1)
            ])]),
            _: 1
          })) : c("", !0),
          f[14] || (f[14] = e("div", { class: "footer-spacer" }, null, -1)),
          g(re, {
            variant: "secondary",
            size: "sm",
            onClick: f[1] || (f[1] = (h) => n("close"))
          }, {
            default: i(() => [...f[13] || (f[13] = [
              y(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), qv = /* @__PURE__ */ J(Kv, [["__scopeId", "data-v-59855453"]]), Jv = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Yv = "3.12", Qv = [
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
], Xv = "auto", Zv = { class: "create-env-form" }, ef = { class: "form-field" }, tf = { class: "form-field" }, of = ["value"], sf = { class: "form-field" }, nf = ["disabled"], af = ["value"], lf = { class: "form-field" }, rf = ["value"], df = { class: "form-field form-field--checkbox" }, cf = { class: "form-checkbox" }, uf = /* @__PURE__ */ q({
  __name: "CreateEnvironmentModal",
  emits: ["close", "create"],
  setup(t, { emit: u }) {
    const n = u, { getComfyUIReleases: r } = Se(), p = $(""), f = $(Yv), h = $("latest"), m = $(Xv), a = $(!1), v = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), b = $(!1), d = $(null);
    function I() {
      const L = p.value.trim();
      if (!L) return;
      const w = {
        name: L,
        python_version: f.value,
        comfyui_version: h.value,
        torch_backend: m.value,
        switch_after: a.value
      };
      n("create", w);
    }
    async function C() {
      b.value = !0;
      try {
        v.value = await r();
      } catch (L) {
        console.error("Failed to load ComfyUI releases:", L);
      } finally {
        b.value = !1;
      }
    }
    return Ce(async () => {
      var L;
      await So(), (L = d.value) == null || L.focus(), C();
    }), (L, w) => (o(), S(et, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      onClose: w[6] || (w[6] = (k) => n("close"))
    }, {
      body: i(() => [
        e("div", Zv, [
          e("div", ef, [
            w[7] || (w[7] = e("label", { class: "form-label" }, "Name", -1)),
            dt(e("input", {
              ref_key: "nameInput",
              ref: d,
              "onUpdate:modelValue": w[0] || (w[0] = (k) => p.value = k),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: Ze(I, ["enter"])
            }, null, 544), [
              [oo, p.value]
            ])
          ]),
          e("div", tf, [
            w[8] || (w[8] = e("label", { class: "form-label" }, "Python Version", -1)),
            dt(e("select", {
              "onUpdate:modelValue": w[1] || (w[1] = (k) => f.value = k),
              class: "form-select"
            }, [
              (o(!0), s(V, null, Z(fe(Jv), (k) => (o(), s("option", {
                key: k,
                value: k
              }, l(k), 9, of))), 128))
            ], 512), [
              [Ot, f.value]
            ])
          ]),
          e("div", sf, [
            w[9] || (w[9] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            dt(e("select", {
              "onUpdate:modelValue": w[2] || (w[2] = (k) => h.value = k),
              class: "form-select",
              disabled: b.value
            }, [
              (o(!0), s(V, null, Z(v.value, (k) => (o(), s("option", {
                key: k.tag_name,
                value: k.tag_name
              }, l(k.name), 9, af))), 128))
            ], 8, nf), [
              [Ot, h.value]
            ])
          ]),
          e("div", lf, [
            w[10] || (w[10] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            dt(e("select", {
              "onUpdate:modelValue": w[3] || (w[3] = (k) => m.value = k),
              class: "form-select"
            }, [
              (o(!0), s(V, null, Z(fe(Qv), (k) => (o(), s("option", {
                key: k,
                value: k
              }, l(k) + l(k === "auto" ? " (detect GPU)" : ""), 9, rf))), 128))
            ], 512), [
              [Ot, m.value]
            ])
          ]),
          e("div", df, [
            e("label", cf, [
              dt(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": w[4] || (w[4] = (k) => a.value = k)
              }, null, 512), [
                [Io, a.value]
              ]),
              w[11] || (w[11] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ])
      ]),
      footer: i(() => [
        g(re, {
          variant: "primary",
          disabled: !p.value.trim(),
          onClick: I
        }, {
          default: i(() => [...w[12] || (w[12] = [
            y(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        g(re, {
          variant: "secondary",
          onClick: w[5] || (w[5] = (k) => n("close"))
        }, {
          default: i(() => [...w[13] || (w[13] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), mf = /* @__PURE__ */ J(uf, [["__scopeId", "data-v-a2f13447"]]), vf = /* @__PURE__ */ q({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete"],
  setup(t, { expose: u, emit: n }) {
    const r = n, { getEnvironments: p } = Se(), f = $([]), h = $(!1), m = $(null), a = $(""), v = $(!1), b = $(!1), d = $(null), I = B(
      () => f.value.find((R) => R.is_current)
    ), C = B(() => {
      if (!a.value.trim()) return f.value;
      const R = a.value.toLowerCase();
      return f.value.filter(
        (D) => {
          var W;
          return D.name.toLowerCase().includes(R) || ((W = D.current_branch) == null ? void 0 : W.toLowerCase().includes(R));
        }
      );
    });
    function L(R) {
      r("create", R), b.value = !1;
    }
    function w() {
      b.value = !0;
    }
    function k(R) {
      d.value = R;
    }
    function N(R) {
      d.value = null, r("delete", R);
    }
    async function U() {
      h.value = !0, m.value = null;
      try {
        f.value = await p();
      } catch (R) {
        m.value = R instanceof Error ? R.message : "Failed to load environments";
      } finally {
        h.value = !1;
      }
    }
    return Ce(U), u({
      loadEnvironments: U
    }), (R, D) => (o(), s(V, null, [
      g(Re, null, {
        header: i(() => [
          g(Ne, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: D[0] || (D[0] = (W) => v.value = !0)
          }, {
            actions: i(() => [
              g(Q, {
                variant: "primary",
                size: "sm",
                onClick: w
              }, {
                default: i(() => [...D[6] || (D[6] = [
                  y(" Create ", -1)
                ])]),
                _: 1
              }),
              g(Q, {
                variant: "secondary",
                size: "sm",
                onClick: U
              }, {
                default: i(() => [...D[7] || (D[7] = [
                  y(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          g(ft, {
            modelValue: a.value,
            "onUpdate:modelValue": D[1] || (D[1] = (W) => a.value = W),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          h.value ? (o(), S(Ye, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (o(), S(Qe, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: U
          }, null, 8, ["message"])) : (o(), s(V, { key: 2 }, [
            f.value.length ? (o(), S(gt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + l(f.value.length) + " " + l(f.value.length === 1 ? "environment" : "environments") + " ", 1),
                I.value ? (o(), s(V, { key: 0 }, [
                  D[8] || (D[8] = y(" • Current: ", -1)),
                  e("strong", null, l(I.value.name), 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            C.value.length ? (o(), S($e, {
              key: 1,
              title: "ENVIRONMENTS",
              count: C.value.length
            }, {
              default: i(() => [
                (o(!0), s(V, null, Z(C.value, (W) => (o(), S(Ev, {
                  key: W.name,
                  "environment-name": W.name,
                  "is-current": W.is_current,
                  "current-branch": W.current_branch,
                  "show-last-used": !1
                }, {
                  actions: i(() => [
                    W.is_current ? c("", !0) : (o(), S(Q, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (z) => R.$emit("switch", W.name)
                    }, {
                      default: i(() => [...D[9] || (D[9] = [
                        y(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    g(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (z) => k(W)
                    }, {
                      default: i(() => [...D[10] || (D[10] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            C.value.length ? c("", !0) : (o(), S(Fe, {
              key: 2,
              icon: "🌍",
              message: a.value ? `No environments match '${a.value}'` : "No environments found. Create one to get started!"
            }, Tt({ _: 2 }, [
              a.value ? void 0 : {
                name: "actions",
                fn: i(() => [
                  g(Q, {
                    variant: "primary",
                    onClick: w
                  }, {
                    default: i(() => [...D[11] || (D[11] = [
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
      g(Je, {
        show: v.value,
        title: "About Environments",
        onClose: D[3] || (D[3] = (W) => v.value = !1)
      }, {
        content: i(() => [...D[12] || (D[12] = [
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
        actions: i(() => [
          g(Q, {
            variant: "secondary",
            onClick: D[2] || (D[2] = (W) => v.value = !1)
          }, {
            default: i(() => [...D[13] || (D[13] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      d.value ? (o(), S(qv, {
        key: 0,
        environment: d.value,
        "can-delete": f.value.length > 1,
        onClose: D[4] || (D[4] = (W) => d.value = null),
        onDelete: N
      }, null, 8, ["environment", "can-delete"])) : c("", !0),
      b.value ? (o(), S(mf, {
        key: 1,
        onClose: D[5] || (D[5] = (W) => b.value = !1),
        onCreate: L
      })) : c("", !0)
    ], 64));
  }
}), ff = /* @__PURE__ */ J(vf, [["__scopeId", "data-v-307d9926"]]), gf = { class: "file-path" }, pf = { class: "file-path-text" }, hf = ["title"], yf = /* @__PURE__ */ q({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const u = t, n = $(!1);
    async function r() {
      try {
        await navigator.clipboard.writeText(u.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (p) {
        console.error("Failed to copy:", p);
      }
    }
    return (p, f) => (o(), s("div", gf, [
      f[0] || (f[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", pf, l(t.path), 1),
      t.copyable ? (o(), s("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: r
      }, l(n.value ? "✓" : "📋"), 9, hf)) : c("", !0)
    ]));
  }
}), wf = /* @__PURE__ */ J(yf, [["__scopeId", "data-v-f0982173"]]), kf = { class: "output-path-input" }, bf = { class: "export-actions" }, _f = {
  key: 1,
  class: "export-warning"
}, $f = /* @__PURE__ */ q({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: u } = Se(), n = $(""), r = $(!1), p = $(null), f = $(!1);
    async function h() {
      r.value = !0, p.value = null;
      try {
        const a = await u(n.value || void 0);
        p.value = a;
      } catch (a) {
        p.value = {
          status: "error",
          message: a instanceof Error ? a.message : "Unknown error occurred"
        };
      } finally {
        r.value = !1;
      }
    }
    async function m() {
      var a;
      if ((a = p.value) != null && a.path)
        try {
          await navigator.clipboard.writeText(p.value.path);
        } catch (v) {
          console.error("Failed to copy path:", v);
        }
    }
    return (a, v) => (o(), s(V, null, [
      g(Re, null, {
        header: i(() => [
          g(Ne, { title: "EXPORT ENVIRONMENT" }, {
            actions: i(() => [
              g(Q, {
                variant: "ghost",
                size: "sm",
                onClick: v[0] || (v[0] = (b) => f.value = !0),
                title: "About exporting"
              }, {
                default: i(() => [...v[5] || (v[5] = [
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
        content: i(() => [
          g($e, { title: "WHAT WILL BE EXPORTED" }, {
            default: i(() => [
              g(Me, { status: "synced" }, {
                icon: i(() => [...v[6] || (v[6] = [
                  y("📦", -1)
                ])]),
                title: i(() => [...v[7] || (v[7] = [
                  y("Environment Snapshot", -1)
                ])]),
                subtitle: i(() => [...v[8] || (v[8] = [
                  y(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: i(() => [
                  g(we, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  g(we, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  g(we, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  g(we, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          g($e, { title: "EXPORT OPTIONS" }, {
            default: i(() => [
              g(Me, { status: "synced" }, {
                icon: i(() => [...v[9] || (v[9] = [
                  y("📁", -1)
                ])]),
                title: i(() => [...v[10] || (v[10] = [
                  y("Output Destination", -1)
                ])]),
                subtitle: i(() => [...v[11] || (v[11] = [
                  y(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: i(() => [
                  e("div", kf, [
                    g(Lt, {
                      modelValue: n.value,
                      "onUpdate:modelValue": v[1] || (v[1] = (b) => n.value = b),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          g($e, { title: "EXPORT" }, {
            default: i(() => [
              e("div", bf, [
                g(Q, {
                  variant: "primary",
                  size: "md",
                  loading: r.value,
                  disabled: r.value,
                  onClick: h
                }, {
                  default: i(() => [
                    v[12] || (v[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    y(" " + l(r.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                n.value ? (o(), S(Q, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: r.value,
                  onClick: v[2] || (v[2] = (b) => n.value = "")
                }, {
                  default: i(() => [...v[13] || (v[13] = [
                    y(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : c("", !0)
              ])
            ]),
            _: 1
          }),
          p.value ? (o(), S($e, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: i(() => [
              g(Me, {
                status: p.value.status === "success" ? "synced" : "broken"
              }, Tt({
                icon: i(() => [
                  y(l(p.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: i(() => [
                  y(l(p.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: i(() => [
                  y(l(p.value.status === "success" ? "Your environment has been exported" : p.value.message), 1)
                ]),
                _: 2
              }, [
                p.value.status === "success" ? {
                  name: "details",
                  fn: i(() => [
                    g(we, { label: "Saved to:" }, {
                      default: i(() => [
                        g(wf, {
                          path: p.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    p.value.models_without_sources !== void 0 ? (o(), S(we, {
                      key: 0,
                      label: "Models without sources:",
                      value: p.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    p.value.models_without_sources && p.value.models_without_sources > 0 ? (o(), s("div", _f, [...v[14] || (v[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                p.value.status === "success" ? {
                  name: "actions",
                  fn: i(() => [
                    g(Q, {
                      variant: "secondary",
                      size: "sm",
                      onClick: m
                    }, {
                      default: i(() => [...v[15] || (v[15] = [
                        y(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    g(Q, {
                      variant: "ghost",
                      size: "sm",
                      onClick: v[3] || (v[3] = (b) => p.value = null)
                    }, {
                      default: i(() => [...v[16] || (v[16] = [
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
          })) : c("", !0)
        ]),
        _: 1
      }),
      g(Je, {
        show: f.value,
        title: "About Environment Export",
        onClose: v[4] || (v[4] = (b) => f.value = !1)
      }, {
        content: i(() => [...v[17] || (v[17] = [
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
}), Cf = /* @__PURE__ */ J($f, [["__scopeId", "data-v-1777a9d5"]]), xf = { class: "file-input-wrapper" }, Sf = ["accept", "multiple", "disabled"], If = /* @__PURE__ */ q({
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
  setup(t, { expose: u, emit: n }) {
    const r = n, p = $(null);
    function f() {
      var m;
      (m = p.value) == null || m.click();
    }
    function h(m) {
      const a = m.target;
      a.files && a.files.length > 0 && (r("change", a.files), a.value = "");
    }
    return u({
      triggerInput: f
    }), (m, a) => (o(), s("div", xf, [
      e("input", {
        ref_key: "fileInputRef",
        ref: p,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: h
      }, null, 40, Sf),
      g(Q, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: f
      }, {
        default: i(() => [
          ue(m.$slots, "default", {}, () => [
            a[0] || (a[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            y(" " + l(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Ef = /* @__PURE__ */ J(If, [["__scopeId", "data-v-cd192091"]]), Mf = {
  key: 0,
  class: "drop-zone-empty"
}, zf = { class: "drop-zone-text" }, Lf = { class: "drop-zone-primary" }, Tf = { class: "drop-zone-secondary" }, Rf = { class: "drop-zone-actions" }, Nf = {
  key: 1,
  class: "drop-zone-file"
}, Df = { class: "file-info" }, Of = { class: "file-details" }, Uf = { class: "file-name" }, Pf = { class: "file-size" }, Bf = /* @__PURE__ */ q({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(t, { emit: u }) {
    const n = u, r = $(!1), p = $(null), f = $(0), h = B(() => p.value !== null), m = B(() => {
      var k;
      return ((k = p.value) == null ? void 0 : k.name) || "";
    }), a = B(() => {
      if (!p.value) return "";
      const k = p.value.size;
      return k < 1024 ? `${k} B` : k < 1024 * 1024 ? `${(k / 1024).toFixed(1)} KB` : k < 1024 * 1024 * 1024 ? `${(k / (1024 * 1024)).toFixed(1)} MB` : `${(k / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v(k) {
      var N;
      f.value++, (N = k.dataTransfer) != null && N.types.includes("Files") && (r.value = !0);
    }
    function b(k) {
      k.dataTransfer && (k.dataTransfer.dropEffect = "copy");
    }
    function d() {
      f.value--, f.value === 0 && (r.value = !1);
    }
    function I(k) {
      var U;
      f.value = 0, r.value = !1;
      const N = (U = k.dataTransfer) == null ? void 0 : U.files;
      N && N.length > 0 && L(N[0]);
    }
    function C(k) {
      k.length > 0 && L(k[0]);
    }
    function L(k) {
      p.value = k, n("fileSelected", k);
    }
    function w() {
      p.value = null, n("clear");
    }
    return (k, N) => (o(), s("div", {
      class: oe(["file-drop-zone", { "drop-active": r.value, "has-file": h.value }]),
      onDragenter: _e(v, ["prevent"]),
      onDragover: _e(b, ["prevent"]),
      onDragleave: _e(d, ["prevent"]),
      onDrop: _e(I, ["prevent"])
    }, [
      h.value ? (o(), s("div", Nf, [
        e("div", Df, [
          N[1] || (N[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Of, [
            e("div", Uf, l(m.value), 1),
            e("div", Pf, l(a.value), 1)
          ])
        ]),
        g(Q, {
          variant: "ghost",
          size: "xs",
          onClick: w,
          title: "Remove file"
        }, {
          default: i(() => [...N[2] || (N[2] = [
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
      ])) : (o(), s("div", Mf, [
        N[0] || (N[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", zf, [
          e("p", Lf, l(t.primaryText), 1),
          e("p", Tf, l(t.secondaryText), 1)
        ]),
        e("div", Rf, [
          g(Ef, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: C
          }, {
            default: i(() => [
              y(l(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Ff = /* @__PURE__ */ J(Bf, [["__scopeId", "data-v-e00abbca"]]), Af = { class: "import-preview" }, Vf = { class: "preview-header" }, Wf = {
  key: 0,
  class: "source-env"
}, Gf = { class: "preview-content" }, jf = { class: "preview-section" }, Hf = { class: "section-header" }, Kf = { class: "section-info" }, qf = { class: "section-count" }, Jf = {
  key: 0,
  class: "item-list"
}, Yf = { class: "item-name" }, Qf = {
  key: 0,
  class: "item-more"
}, Xf = { class: "preview-section" }, Zf = { class: "section-header" }, eg = { class: "section-info" }, tg = { class: "section-count" }, og = {
  key: 0,
  class: "item-list"
}, sg = { class: "item-details" }, ng = { class: "item-name" }, ag = { class: "item-meta" }, lg = {
  key: 0,
  class: "item-more"
}, ig = { class: "preview-section" }, rg = { class: "section-header" }, dg = { class: "section-info" }, cg = { class: "section-count" }, ug = {
  key: 0,
  class: "item-list"
}, mg = { class: "item-name" }, vg = {
  key: 0,
  class: "item-more"
}, fg = {
  key: 0,
  class: "preview-section"
}, gg = { class: "git-info" }, pg = /* @__PURE__ */ q({
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
    const u = t, n = B(() => u.workflows.length), r = B(() => u.models.length), p = B(() => u.nodes.length);
    function f(h) {
      return h < 1024 ? `${h} B` : h < 1024 * 1024 ? `${(h / 1024).toFixed(1)} KB` : h < 1024 * 1024 * 1024 ? `${(h / (1024 * 1024)).toFixed(1)} MB` : `${(h / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (h, m) => (o(), s("div", Af, [
      e("div", Vf, [
        g(Oe, null, {
          default: i(() => [...m[0] || (m[0] = [
            y("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), s("span", Wf, [
          m[1] || (m[1] = y(" From: ", -1)),
          g(At, null, {
            default: i(() => [
              y(l(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", Gf, [
        e("div", jf, [
          e("div", Hf, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", Kf, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", qf, l(n.value) + " file" + l(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), s("div", Jf, [
            (o(!0), s(V, null, Z(t.workflows.slice(0, t.maxPreviewItems), (a) => (o(), s("div", {
              key: a,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Yf, l(a), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), s("div", Qf, " +" + l(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", Xf, [
          e("div", Zf, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", eg, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", tg, l(r.value) + " file" + l(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), s("div", og, [
            (o(!0), s(V, null, Z(t.models.slice(0, t.maxPreviewItems), (a) => (o(), s("div", {
              key: a.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", sg, [
                e("span", ng, l(a.filename), 1),
                e("span", ag, l(f(a.size)) + " • " + l(a.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), s("div", lg, " +" + l(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", ig, [
          e("div", rg, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", dg, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", cg, l(p.value) + " node" + l(p.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), s("div", ug, [
            (o(!0), s(V, null, Z(t.nodes.slice(0, t.maxPreviewItems), (a) => (o(), s("div", {
              key: a,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", mg, l(a), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), s("div", vg, " +" + l(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), s("div", fg, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", gg, [
            t.gitBranch ? (o(), S(we, {
              key: 0,
              label: "Branch"
            }, {
              default: i(() => [
                g(At, null, {
                  default: i(() => [
                    y(l(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : c("", !0),
            t.gitCommit ? (o(), S(we, {
              key: 1,
              label: "Commit"
            }, {
              default: i(() => [
                g(no, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : c("", !0)
          ])
        ])) : c("", !0)
      ])
    ]));
  }
}), hg = /* @__PURE__ */ J(pg, [["__scopeId", "data-v-182fe113"]]), yg = { class: "import-options" }, wg = { class: "options-container" }, kg = { class: "option-section" }, bg = { class: "conflict-options" }, _g = ["value", "checked", "onChange"], $g = { class: "conflict-content" }, Cg = { class: "conflict-label" }, xg = { class: "conflict-description" }, Sg = { class: "option-section" }, Ig = { class: "component-toggles" }, Eg = /* @__PURE__ */ q({
  __name: "ImportOptions",
  props: {
    conflictMode: {},
    includeWorkflows: { type: Boolean },
    includeModels: { type: Boolean },
    includeNodes: { type: Boolean },
    includeGitHistory: { type: Boolean }
  },
  emits: ["update:conflictMode", "update:includeWorkflows", "update:includeModels", "update:includeNodes", "update:includeGitHistory"],
  setup(t, { emit: u }) {
    const n = u, r = [
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
    return (p, f) => (o(), s("div", yg, [
      g(Oe, null, {
        default: i(() => [...f[4] || (f[4] = [
          y("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", wg, [
        e("div", kg, [
          g(Ft, null, {
            default: i(() => [...f[5] || (f[5] = [
              y("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", bg, [
            (o(), s(V, null, Z(r, (h) => e("label", {
              key: h.value,
              class: oe(["conflict-option", { active: t.conflictMode === h.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: h.value,
                checked: t.conflictMode === h.value,
                onChange: (m) => n("update:conflictMode", h.value)
              }, null, 40, _g),
              e("div", $g, [
                e("span", Cg, l(h.label), 1),
                e("span", xg, l(h.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Sg, [
          g(Ft, null, {
            default: i(() => [...f[6] || (f[6] = [
              y("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Ig, [
            g(Ke, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: i(() => [
                g(it, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": f[0] || (f[0] = (h) => n("update:includeWorkflows", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(Ke, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: i(() => [
                g(it, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": f[1] || (f[1] = (h) => n("update:includeModels", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(Ke, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: i(() => [
                g(it, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": f[2] || (f[2] = (h) => n("update:includeNodes", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            g(Ke, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: i(() => [
                g(it, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": f[3] || (f[3] = (h) => n("update:includeGitHistory", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Mg = /* @__PURE__ */ J(Eg, [["__scopeId", "data-v-0ec212b0"]]), zg = {
  key: 0,
  class: "import-empty"
}, Lg = { class: "import-help" }, Tg = {
  key: 1,
  class: "import-configure"
}, Rg = { class: "selected-file-bar" }, Ng = { class: "file-bar-content" }, Dg = { class: "file-bar-info" }, Og = { class: "file-bar-name" }, Ug = { class: "file-bar-size" }, Pg = { class: "import-actions" }, Bg = {
  key: 2,
  class: "import-progress"
}, Fg = { class: "progress-content" }, Ag = { class: "progress-info" }, Vg = { class: "progress-title" }, Wg = { class: "progress-detail" }, Gg = { class: "progress-bar" }, jg = { class: "progress-status" }, Hg = {
  key: 3,
  class: "import-complete"
}, Kg = { class: "complete-message" }, qg = { class: "complete-title" }, Jg = { class: "complete-details" }, Yg = { class: "complete-actions" }, Qg = /* @__PURE__ */ q({
  __name: "ImportSection",
  setup(t) {
    const u = $(null), n = $(!1), r = $(!1), p = $(!1), f = $(""), h = $({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), m = $({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), a = $({
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
    }), v = B(() => h.value.includeWorkflows || h.value.includeModels || h.value.includeNodes || h.value.includeGitHistory);
    function b(w) {
      u.value = w;
    }
    function d() {
      u.value = null, r.value = !1, p.value = !1, f.value = "";
    }
    function I() {
      d(), n.value = !1, m.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function C() {
      if (u.value) {
        n.value = !0, r.value = !1;
        try {
          const w = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${a.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${a.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${a.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const k of w)
            m.value = k, await new Promise((N) => setTimeout(N, 800));
          m.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((k) => setTimeout(k, 500)), p.value = !0, f.value = `Successfully imported ${a.value.workflows.length} workflows, ${a.value.models.length} models, and ${a.value.nodes.length} custom nodes.`;
        } catch (w) {
          p.value = !1, f.value = w instanceof Error ? w.message : "Unknown error occurred during import";
        } finally {
          n.value = !1, r.value = !0;
        }
      }
    }
    function L(w) {
      return w < 1024 ? `${w} B` : w < 1024 * 1024 ? `${(w / 1024).toFixed(1)} KB` : w < 1024 * 1024 * 1024 ? `${(w / (1024 * 1024)).toFixed(1)} MB` : `${(w / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (w, k) => (o(), S(Re, null, {
      header: i(() => [
        g(Ne, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: i(() => [
        !u.value && !n.value ? (o(), s("div", zg, [
          g(Ff, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: b
          }),
          e("div", Lg, [
            g(Oe, null, {
              default: i(() => [...k[5] || (k[5] = [
                y("How to Import", -1)
              ])]),
              _: 1
            }),
            k[6] || (k[6] = e("div", { class: "help-content" }, [
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
        ])) : u.value && !n.value && !r.value ? (o(), s("div", Tg, [
          e("div", Rg, [
            e("div", Ng, [
              k[7] || (k[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Dg, [
                e("div", Og, l(u.value.name), 1),
                e("div", Ug, l(L(u.value.size)), 1)
              ])
            ]),
            g(Q, {
              variant: "ghost",
              size: "sm",
              onClick: d
            }, {
              default: i(() => [...k[8] || (k[8] = [
                y(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          g(hg, {
            "source-environment": a.value.sourceEnvironment,
            workflows: a.value.workflows,
            models: a.value.models,
            nodes: a.value.nodes,
            "git-branch": a.value.gitBranch,
            "git-commit": a.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          g(Mg, {
            "conflict-mode": h.value.conflictMode,
            "onUpdate:conflictMode": k[0] || (k[0] = (N) => h.value.conflictMode = N),
            "include-workflows": h.value.includeWorkflows,
            "onUpdate:includeWorkflows": k[1] || (k[1] = (N) => h.value.includeWorkflows = N),
            "include-models": h.value.includeModels,
            "onUpdate:includeModels": k[2] || (k[2] = (N) => h.value.includeModels = N),
            "include-nodes": h.value.includeNodes,
            "onUpdate:includeNodes": k[3] || (k[3] = (N) => h.value.includeNodes = N),
            "include-git-history": h.value.includeGitHistory,
            "onUpdate:includeGitHistory": k[4] || (k[4] = (N) => h.value.includeGitHistory = N)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !h.value.includeModels && a.value.models.length > 0 ? (o(), S(ct, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${a.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", Pg, [
            g(Q, {
              variant: "primary",
              size: "md",
              disabled: !v.value,
              onClick: C
            }, {
              default: i(() => [...k[9] || (k[9] = [
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
            g(Q, {
              variant: "secondary",
              size: "md",
              onClick: d
            }, {
              default: i(() => [...k[10] || (k[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : n.value ? (o(), s("div", Bg, [
          e("div", Fg, [
            k[11] || (k[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Ag, [
              e("div", Vg, l(m.value.message), 1),
              e("div", Wg, l(m.value.detail), 1)
            ])
          ]),
          e("div", Gg, [
            e("div", {
              class: "progress-bar-fill",
              style: qe({ width: `${m.value.percent}%` })
            }, null, 4)
          ]),
          e("div", jg, l(m.value.percent) + "% complete ", 1)
        ])) : r.value ? (o(), s("div", Hg, [
          e("div", {
            class: oe(["complete-icon", p.value ? "success" : "error"])
          }, l(p.value ? "✓" : "✕"), 3),
          e("div", Kg, [
            e("div", qg, l(p.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Jg, l(f.value), 1)
          ]),
          e("div", Yg, [
            g(Q, {
              variant: "primary",
              size: "md",
              onClick: I
            }, {
              default: i(() => [...k[12] || (k[12] = [
                y(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : c("", !0)
      ]),
      _: 1
    }));
  }
}), Xg = /* @__PURE__ */ J(Qg, [["__scopeId", "data-v-18e18eb5"]]), Zg = { class: "header-info" }, ep = { class: "commit-hash" }, tp = {
  key: 0,
  class: "commit-refs"
}, op = { class: "commit-message" }, sp = { class: "commit-date" }, np = {
  key: 0,
  class: "loading"
}, ap = {
  key: 1,
  class: "changes-section"
}, lp = { class: "stats-row" }, ip = { class: "stat" }, rp = { class: "stat insertions" }, dp = { class: "stat deletions" }, cp = {
  key: 0,
  class: "change-group"
}, up = {
  key: 1,
  class: "change-group"
}, mp = {
  key: 0,
  class: "version"
}, vp = {
  key: 2,
  class: "change-group"
}, fp = { class: "change-item" }, gp = /* @__PURE__ */ q({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const u = t, { getCommitDetail: n } = Se(), r = $(null), p = $(!0), f = B(() => {
      if (!r.value) return !1;
      const m = r.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), h = B(() => {
      if (!r.value) return !1;
      const m = r.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return Ce(async () => {
      try {
        r.value = await n(u.commit.hash);
      } finally {
        p.value = !1;
      }
    }), (m, a) => (o(), S(et, {
      size: "md",
      "show-close-button": !1,
      onClose: a[3] || (a[3] = (v) => m.$emit("close"))
    }, {
      header: i(() => {
        var v, b, d, I;
        return [
          e("div", Zg, [
            a[4] || (a[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", ep, l(((v = r.value) == null ? void 0 : v.short_hash) || t.commit.short_hash || ((b = t.commit.hash) == null ? void 0 : b.slice(0, 7))), 1),
            (I = (d = r.value) == null ? void 0 : d.refs) != null && I.length ? (o(), s("span", tp, [
              (o(!0), s(V, null, Z(r.value.refs, (C) => (o(), s("span", {
                key: C,
                class: "ref-badge"
              }, l(C), 1))), 128))
            ])) : c("", !0)
          ]),
          g(re, {
            variant: "ghost",
            size: "sm",
            onClick: a[0] || (a[0] = (C) => m.$emit("close"))
          }, {
            default: i(() => [...a[5] || (a[5] = [
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
        var v, b;
        return [
          e("div", op, l(((v = r.value) == null ? void 0 : v.message) || t.commit.message), 1),
          e("div", sp, l(((b = r.value) == null ? void 0 : b.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          p.value ? (o(), s("div", np, "Loading details...")) : r.value ? (o(), s("div", ap, [
            e("div", lp, [
              e("span", ip, l(r.value.stats.files_changed) + " files", 1),
              e("span", rp, "+" + l(r.value.stats.insertions), 1),
              e("span", dp, "-" + l(r.value.stats.deletions), 1)
            ]),
            f.value ? (o(), s("div", cp, [
              g(xt, { variant: "section" }, {
                default: i(() => [...a[6] || (a[6] = [
                  y("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(V, null, Z(r.value.changes.workflows.added, (d) => (o(), s("div", {
                key: "add-" + d,
                class: "change-item added"
              }, [
                a[7] || (a[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(d), 1)
              ]))), 128)),
              (o(!0), s(V, null, Z(r.value.changes.workflows.modified, (d) => (o(), s("div", {
                key: "mod-" + d,
                class: "change-item modified"
              }, [
                a[8] || (a[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, l(d), 1)
              ]))), 128)),
              (o(!0), s(V, null, Z(r.value.changes.workflows.deleted, (d) => (o(), s("div", {
                key: "del-" + d,
                class: "change-item deleted"
              }, [
                a[9] || (a[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(d), 1)
              ]))), 128))
            ])) : c("", !0),
            h.value ? (o(), s("div", up, [
              g(xt, { variant: "section" }, {
                default: i(() => [...a[10] || (a[10] = [
                  y("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(V, null, Z(r.value.changes.nodes.added, (d) => (o(), s("div", {
                key: "add-" + d.name,
                class: "change-item added"
              }, [
                a[11] || (a[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(d.name), 1),
                d.version ? (o(), s("span", mp, "(" + l(d.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (o(!0), s(V, null, Z(r.value.changes.nodes.removed, (d) => (o(), s("div", {
                key: "rem-" + d.name,
                class: "change-item deleted"
              }, [
                a[12] || (a[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(d.name), 1)
              ]))), 128))
            ])) : c("", !0),
            r.value.changes.models.resolved > 0 ? (o(), s("div", vp, [
              g(xt, { variant: "section" }, {
                default: i(() => [...a[13] || (a[13] = [
                  y("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", fp, [
                a[14] || (a[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, l(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: i(() => [
        g(re, {
          variant: "secondary",
          onClick: a[1] || (a[1] = (v) => m.$emit("createBranch", t.commit))
        }, {
          default: i(() => [...a[15] || (a[15] = [
            y(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        g(re, {
          variant: "primary",
          onClick: a[2] || (a[2] = (v) => m.$emit("checkout", t.commit))
        }, {
          default: i(() => [...a[16] || (a[16] = [
            y(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), pp = /* @__PURE__ */ J(gp, [["__scopeId", "data-v-d256ff6d"]]), hp = { class: "dialog-message" }, yp = {
  key: 0,
  class: "dialog-details"
}, wp = {
  key: 1,
  class: "dialog-warning"
}, kp = /* @__PURE__ */ q({
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
    return (u, n) => (o(), S(et, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (r) => u.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", hp, l(t.message), 1),
        t.details && t.details.length ? (o(), s("div", yp, [
          (o(!0), s(V, null, Z(t.details, (r, p) => (o(), s("div", {
            key: p,
            class: "detail-item"
          }, " • " + l(r), 1))), 128))
        ])) : c("", !0),
        t.warning ? (o(), s("p", wp, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          y(" " + l(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        g(re, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (r) => u.$emit("cancel"))
        }, {
          default: i(() => [
            y(l(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), S(re, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (r) => u.$emit("secondary"))
        }, {
          default: i(() => [
            y(l(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        g(re, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (r) => u.$emit("confirm"))
        }, {
          default: i(() => [
            y(l(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), bp = /* @__PURE__ */ J(kp, [["__scopeId", "data-v-3670b9f5"]]), _p = { class: "base-textarea-wrapper" }, $p = ["value", "rows", "placeholder", "disabled", "maxlength"], Cp = {
  key: 0,
  class: "base-textarea-count"
}, xp = /* @__PURE__ */ q({
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
    return (u, n) => (o(), s("div", _p, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          n[1] || (n[1] = Ze(_e((r) => u.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = Ze(_e((r) => u.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, $p),
      t.showCharCount && t.maxLength ? (o(), s("div", Cp, l(t.modelValue.length) + " / " + l(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), Xt = /* @__PURE__ */ J(xp, [["__scopeId", "data-v-5516e6fc"]]), Sp = ["checked", "disabled"], Ip = { class: "base-checkbox-box" }, Ep = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Mp = {
  key: 0,
  class: "base-checkbox-label"
}, zp = /* @__PURE__ */ q({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (o(), s("label", {
      class: oe(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.checked))
      }, null, 40, Sp),
      e("span", Ip, [
        t.modelValue ? (o(), s("svg", Ep, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      u.$slots.default ? (o(), s("span", Mp, [
        ue(u.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Zt = /* @__PURE__ */ J(zp, [["__scopeId", "data-v-bf17c831"]]), Lp = { class: "popover-header" }, Tp = { class: "popover-body" }, Rp = {
  key: 0,
  class: "changes-summary"
}, Np = {
  key: 0,
  class: "change-item"
}, Dp = {
  key: 1,
  class: "change-item"
}, Op = {
  key: 2,
  class: "change-item"
}, Up = {
  key: 3,
  class: "change-item"
}, Pp = {
  key: 4,
  class: "change-item"
}, Bp = {
  key: 1,
  class: "no-changes"
}, Fp = {
  key: 2,
  class: "loading"
}, Ap = {
  key: 3,
  class: "issues-error"
}, Vp = { class: "error-header" }, Wp = { class: "error-title" }, Gp = { class: "issues-list" }, jp = { class: "message-section" }, Hp = { class: "popover-footer" }, Kp = {
  key: 1,
  class: "commit-popover"
}, qp = { class: "popover-header" }, Jp = { class: "popover-body" }, Yp = {
  key: 0,
  class: "changes-summary"
}, Qp = {
  key: 0,
  class: "change-item"
}, Xp = {
  key: 1,
  class: "change-item"
}, Zp = {
  key: 2,
  class: "change-item"
}, eh = {
  key: 3,
  class: "change-item"
}, th = {
  key: 4,
  class: "change-item"
}, oh = {
  key: 1,
  class: "no-changes"
}, sh = {
  key: 2,
  class: "loading"
}, nh = {
  key: 3,
  class: "issues-error"
}, ah = { class: "error-header" }, lh = { class: "error-title" }, ih = { class: "issues-list" }, rh = { class: "message-section" }, dh = { class: "popover-footer" }, ch = /* @__PURE__ */ q({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: u }) {
    const n = t, r = u, { commit: p } = Se(), f = $(""), h = $(!1), m = $(!1), a = $(null), v = B(() => {
      if (!n.status) return !1;
      const L = n.status.workflows;
      return L.new.length > 0 || L.modified.length > 0 || L.deleted.length > 0 || n.status.has_changes;
    }), b = B(() => {
      var L;
      return (L = n.status) != null && L.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (w) => w.has_issues && (w.sync_state === "new" || w.sync_state === "modified")
      ) : [];
    }), d = B(() => b.value.length > 0), I = B(() => d.value && !m.value);
    async function C() {
      var L, w, k;
      if (!(d.value && !m.value) && !(!v.value || !f.value.trim() || h.value)) {
        h.value = !0, a.value = null;
        try {
          const N = await p(f.value.trim(), m.value);
          N.status === "success" ? (a.value = {
            type: "success",
            message: `Committed: ${((L = N.summary) == null ? void 0 : L.new) || 0} new, ${((w = N.summary) == null ? void 0 : w.modified) || 0} modified, ${((k = N.summary) == null ? void 0 : k.deleted) || 0} deleted`
          }, f.value = "", m.value = !1, setTimeout(() => r("committed"), 1e3)) : N.status === "no_changes" ? a.value = { type: "error", message: "No changes to commit" } : N.status === "blocked" ? a.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : a.value = { type: "error", message: N.message || "Commit failed" };
        } catch (N) {
          a.value = { type: "error", message: N instanceof Error ? N.message : "Commit failed" };
        } finally {
          h.value = !1;
        }
      }
    }
    return (L, w) => t.asModal ? (o(), S(ze, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: w[5] || (w[5] = (k) => r("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: w[4] || (w[4] = _e(() => {
          }, ["stop"]))
        }, [
          e("div", Lp, [
            w[11] || (w[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: w[0] || (w[0] = (k) => r("close"))
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
          e("div", Tp, [
            t.status && v.value ? (o(), s("div", Rp, [
              t.status.workflows.new.length ? (o(), s("div", Np, [
                w[12] || (w[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (o(), s("div", Dp, [
                w[13] || (w[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (o(), s("div", Op, [
                w[14] || (w[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (o(), s("div", Up, [
                w[15] || (w[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), s("div", Pp, [
                w[16] || (w[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (o(), s("div", Bp, " No changes to commit ")) : (o(), s("div", Fp, " Loading... ")),
            d.value ? (o(), s("div", Ap, [
              e("div", Vp, [
                w[17] || (w[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Wp, l(b.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", Gp, [
                (o(!0), s(V, null, Z(b.value, (k) => (o(), s("div", {
                  key: k.name,
                  class: "issue-item"
                }, [
                  e("strong", null, l(k.name), 1),
                  y(": " + l(k.issue_summary), 1)
                ]))), 128))
              ]),
              g(Zt, {
                modelValue: m.value,
                "onUpdate:modelValue": w[1] || (w[1] = (k) => m.value = k),
                class: "allow-issues-toggle"
              }, {
                default: i(() => [...w[18] || (w[18] = [
                  y(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : c("", !0),
            e("div", jp, [
              g(Xt, {
                modelValue: f.value,
                "onUpdate:modelValue": w[2] || (w[2] = (k) => f.value = k),
                placeholder: I.value ? "Enable 'Allow issues' to commit" : v.value ? "Describe your changes..." : "No changes",
                disabled: !v.value || h.value || I.value,
                rows: 3,
                onCtrlEnter: C
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            a.value ? (o(), s("div", {
              key: 4,
              class: oe(["result", a.value.type])
            }, l(a.value.message), 3)) : c("", !0)
          ]),
          e("div", Hp, [
            g(re, {
              variant: "secondary",
              onClick: w[3] || (w[3] = (k) => r("close"))
            }, {
              default: i(() => [...w[19] || (w[19] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(re, {
              variant: m.value ? "danger" : "primary",
              disabled: !v.value || !f.value.trim() || h.value || I.value,
              loading: h.value,
              onClick: C
            }, {
              default: i(() => [
                y(l(h.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), s("div", Kp, [
      e("div", qp, [
        w[21] || (w[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: w[6] || (w[6] = (k) => r("close"))
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
      e("div", Jp, [
        t.status && v.value ? (o(), s("div", Yp, [
          t.status.workflows.new.length ? (o(), s("div", Qp, [
            w[22] || (w[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (o(), s("div", Xp, [
            w[23] || (w[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (o(), s("div", Zp, [
            w[24] || (w[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (o(), s("div", eh, [
            w[25] || (w[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), s("div", th, [
            w[26] || (w[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (o(), s("div", oh, " No changes to commit ")) : (o(), s("div", sh, " Loading... ")),
        d.value ? (o(), s("div", nh, [
          e("div", ah, [
            w[27] || (w[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", lh, l(b.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", ih, [
            (o(!0), s(V, null, Z(b.value, (k) => (o(), s("div", {
              key: k.name,
              class: "issue-item"
            }, [
              e("strong", null, l(k.name), 1),
              y(": " + l(k.issue_summary), 1)
            ]))), 128))
          ]),
          g(Zt, {
            modelValue: m.value,
            "onUpdate:modelValue": w[7] || (w[7] = (k) => m.value = k),
            class: "allow-issues-toggle"
          }, {
            default: i(() => [...w[28] || (w[28] = [
              y(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : c("", !0),
        e("div", rh, [
          g(Xt, {
            modelValue: f.value,
            "onUpdate:modelValue": w[8] || (w[8] = (k) => f.value = k),
            placeholder: I.value ? "Enable 'Allow issues' to commit" : v.value ? "Describe your changes..." : "No changes",
            disabled: !v.value || h.value || I.value,
            rows: 3,
            onCtrlEnter: C
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        a.value ? (o(), s("div", {
          key: 4,
          class: oe(["result", a.value.type])
        }, l(a.value.message), 3)) : c("", !0)
      ]),
      e("div", dh, [
        g(re, {
          variant: "secondary",
          onClick: w[9] || (w[9] = (k) => r("close"))
        }, {
          default: i(() => [...w[29] || (w[29] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g(re, {
          variant: m.value ? "danger" : "primary",
          disabled: !v.value || !f.value.trim() || h.value || I.value,
          loading: h.value,
          onClick: C
        }, {
          default: i(() => [
            y(l(h.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), co = /* @__PURE__ */ J(ch, [["__scopeId", "data-v-d92153de"]]), uh = { class: "modal-header" }, mh = { class: "modal-body" }, vh = { class: "switch-message" }, fh = { class: "switch-details" }, gh = { class: "modal-actions" }, ph = /* @__PURE__ */ q({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (u, n) => (o(), S(ze, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => u.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = _e(() => {
          }, ["stop"]))
        }, [
          e("div", uh, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", mh, [
            e("p", vh, [
              n[6] || (n[6] = y(" Switch from ", -1)),
              e("strong", null, l(t.fromEnvironment), 1),
              n[7] || (n[7] = y(" to ", -1)),
              e("strong", null, l(t.toEnvironment), 1),
              n[8] || (n[8] = y("? ", -1))
            ]),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", fh, ' Your current work will be preserved. You can switch back to "' + l(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", gh, [
            g(Q, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => u.$emit("close"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(Q, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => u.$emit("confirm"))
            }, {
              default: i(() => [...n[12] || (n[12] = [
                y(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), hh = /* @__PURE__ */ J(ph, [["__scopeId", "data-v-e9c5253e"]]), yh = { class: "progress-bar" }, wh = /* @__PURE__ */ q({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const u = t, n = B(() => `${Math.max(0, Math.min(100, u.progress))}%`);
    return (r, p) => (o(), s("div", yh, [
      e("div", {
        class: oe(["progress-fill", t.variant]),
        style: qe({ width: n.value })
      }, null, 6)
    ]));
  }
}), kh = /* @__PURE__ */ J(wh, [["__scopeId", "data-v-1beb0512"]]), bh = {
  key: 0,
  class: "modal-overlay"
}, _h = { class: "modal-content" }, $h = { class: "modal-body" }, Ch = { class: "progress-info" }, xh = { class: "progress-percentage" }, Sh = { class: "progress-state" }, Ih = { class: "switch-steps" }, Eh = { class: "step-icon" }, Mh = { class: "step-label" }, zh = /* @__PURE__ */ q({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const u = t, n = B(() => {
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
      return u.message || f[u.state] || u.state;
    }), r = B(() => u.state === "complete" ? "success" : u.state === "critical_failure" || u.state === "rolled_back" ? "error" : "default"), p = B(() => {
      const f = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], h = f.findIndex((m) => m.state === u.state);
      return f.map((m, a) => {
        let v = "pending", b = "○";
        return a < h ? (v = "completed", b = "✓") : a === h && (v = "active", b = "⟳"), {
          ...m,
          status: v,
          icon: b
        };
      });
    });
    return (f, h) => (o(), S(ze, { to: "body" }, [
      t.show ? (o(), s("div", bh, [
        e("div", _h, [
          h[1] || (h[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", $h, [
            g(kh, {
              progress: t.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            e("div", Ch, [
              e("div", xh, l(t.progress) + "%", 1),
              e("div", Sh, l(n.value), 1)
            ]),
            e("div", Ih, [
              (o(!0), s(V, null, Z(p.value, (m) => (o(), s("div", {
                key: m.state,
                class: oe(["switch-step", m.status])
              }, [
                e("span", Eh, l(m.icon), 1),
                e("span", Mh, l(m.label), 1)
              ], 2))), 128))
            ]),
            h[0] || (h[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Lh = /* @__PURE__ */ J(zh, [["__scopeId", "data-v-768a5078"]]), Th = { class: "modal-header" }, Rh = { class: "modal-body" }, Nh = {
  key: 0,
  class: "node-section"
}, Dh = { class: "node-list" }, Oh = {
  key: 1,
  class: "node-section"
}, Uh = { class: "node-list" }, Ph = { class: "modal-actions" }, Bh = /* @__PURE__ */ q({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (u, n) => (o(), S(ze, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => u.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = _e(() => {
          }, ["stop"]))
        }, [
          e("div", Th, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", Rh, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), s("div", Nh, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Dh, [
                (o(!0), s(V, null, Z(t.mismatchDetails.missing_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item add"
                }, " + " + l(r), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), s("div", Oh, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Uh, [
                (o(!0), s(V, null, Z(t.mismatchDetails.extra_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item remove"
                }, " - " + l(r), 1))), 128))
              ])
            ])) : c("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", Ph, [
            g(Q, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => u.$emit("close"))
            }, {
              default: i(() => [...n[10] || (n[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(Q, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => u.$emit("confirm"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                y(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Fh = /* @__PURE__ */ J(Bh, [["__scopeId", "data-v-7cad7518"]]), Ah = { class: "comfygit-panel" }, Vh = { class: "panel-header" }, Wh = { class: "header-left" }, Gh = {
  key: 0,
  class: "header-info"
}, jh = { class: "header-actions" }, Hh = { class: "env-switcher" }, Kh = {
  key: 0,
  class: "header-info"
}, qh = { class: "branch-name" }, Jh = { class: "panel-main" }, Yh = { class: "sidebar" }, Qh = { class: "sidebar-section" }, Xh = { class: "sidebar-section" }, Zh = { class: "sidebar-section" }, e1 = { class: "content-area" }, t1 = {
  key: 0,
  class: "error-message"
}, o1 = {
  key: 1,
  class: "loading"
}, s1 = {
  key: 4,
  class: "dialog-overlay"
}, n1 = { class: "dialog-content create-progress-dialog" }, a1 = { class: "dialog-body create-progress-body" }, l1 = { class: "create-progress-message" }, i1 = { class: "dialog-content env-selector-dialog" }, r1 = { class: "dialog-header" }, d1 = { class: "dialog-body" }, c1 = { class: "env-list" }, u1 = { class: "env-info" }, m1 = { class: "env-name-row" }, v1 = { class: "env-indicator" }, f1 = { class: "env-name" }, g1 = {
  key: 0,
  class: "env-branch"
}, p1 = {
  key: 1,
  class: "current-label"
}, h1 = { class: "env-stats" }, y1 = ["onClick"], w1 = { class: "toast-container" }, k1 = { class: "toast-icon" }, b1 = { class: "toast-message" }, _1 = /* @__PURE__ */ q({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: u }) {
    const n = u, {
      getStatus: r,
      getHistory: p,
      getBranches: f,
      checkout: h,
      createBranch: m,
      switchBranch: a,
      deleteBranch: v,
      getEnvironments: b,
      switchEnvironment: d,
      getSwitchProgress: I,
      createEnvironment: C,
      getCreateProgress: L,
      deleteEnvironment: w,
      syncEnvironmentManually: k
    } = Se(), N = ao(), U = $(null), R = $([]), D = $([]), W = $([]), z = B(() => W.value.find((A) => A.is_current)), x = $(!1), M = $(null), T = $(null), F = $(!1), se = $(null), X = $(null), te = $(!1), ne = $(!1), H = $(""), Y = $({ state: "idle", progress: 0, message: "" });
    let O = null, _ = null;
    const ae = $(!1), ee = $({ state: "idle", message: "" }), xe = $(null);
    let ye = null;
    const ge = $("status"), rt = $("this-env");
    function be(A, E) {
      ge.value = A, rt.value = E;
    }
    function pt(A) {
      const ie = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[A];
      ie && be(ie.view, ie.section);
    }
    function ht() {
      be("branches", "this-env");
    }
    function yt() {
      n("close"), setTimeout(() => {
        var E;
        const A = document.querySelectorAll("button.comfyui-button");
        for (const ie of A)
          if (((E = ie.textContent) == null ? void 0 : E.trim()) === "Manager") {
            ie.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const he = $(null), Xe = $(!1), Ge = $(!1), Ae = $([]);
    let wt = 0;
    function ce(A, E = "info", ie = 3e3) {
      const ke = ++wt;
      return Ae.value.push({ id: ke, message: A, type: E }), ie > 0 && setTimeout(() => {
        Ae.value = Ae.value.filter((Le) => Le.id !== ke);
      }, ie), ke;
    }
    function Ue(A) {
      Ae.value = Ae.value.filter((E) => E.id !== A);
    }
    function j(A) {
      switch (A) {
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
      if (!U.value) return "neutral";
      const A = U.value.workflows, E = A.new.length > 0 || A.modified.length > 0 || A.deleted.length > 0 || U.value.has_changes;
      return U.value.comparison.is_synced ? E ? "warning" : "success" : "error";
    });
    B(() => U.value ? de.value === "success" ? "All synced" : de.value === "warning" ? "Uncommitted changes" : de.value === "error" ? "Not synced" : "" : "");
    async function me() {
      x.value = !0, M.value = null;
      try {
        const [A, E, ie, ke] = await Promise.all([
          r(!0),
          p(),
          f(),
          b()
        ]);
        U.value = A, R.value = E.commits, D.value = ie.branches, W.value = ke, n("statusUpdate", A), se.value && await se.value.loadWorkflows(!0);
      } catch (A) {
        M.value = A instanceof Error ? A.message : "Failed to load status", U.value = null, R.value = [], D.value = [];
      } finally {
        x.value = !1;
      }
    }
    function Ie(A) {
      T.value = A;
    }
    async function tt(A) {
      var ie;
      T.value = null;
      const E = U.value && (U.value.workflows.new.length > 0 || U.value.workflows.modified.length > 0 || U.value.workflows.deleted.length > 0 || U.value.has_changes);
      he.value = {
        title: E ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: E ? "You have uncommitted changes that will be lost." : `Checkout commit ${A.short_hash || ((ie = A.hash) == null ? void 0 : ie.slice(0, 7))}?`,
        details: E ? Yt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: E ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: E,
        onConfirm: async () => {
          var Te;
          he.value = null, ve();
          const ke = ce(`Checking out ${A.short_hash || ((Te = A.hash) == null ? void 0 : Te.slice(0, 7))}...`, "info", 0), Le = await h(A.hash, E);
          Ue(ke), Le.status === "success" ? ce("Restarting ComfyUI...", "success") : ce(Le.message || "Checkout failed", "error");
        }
      };
    }
    async function Rt(A) {
      const E = U.value && (U.value.workflows.new.length > 0 || U.value.workflows.modified.length > 0 || U.value.workflows.deleted.length > 0 || U.value.has_changes);
      he.value = {
        title: E ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: E ? "You have uncommitted changes." : `Switch to branch "${A}"?`,
        details: E ? Yt() : void 0,
        warning: E ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: E ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          he.value = null, ve();
          const ie = ce(`Switching to ${A}...`, "info", 0), ke = await a(A, E);
          Ue(ie), ke.status === "success" ? ce("Restarting ComfyUI...", "success") : ce(ke.message || "Branch switch failed", "error");
        }
      };
    }
    async function G(A) {
      const E = ce(`Creating branch ${A}...`, "info", 0), ie = await m(A);
      Ue(E), ie.status === "success" ? (ce(`Branch "${A}" created`, "success"), await me()) : ce(ie.message || "Failed to create branch", "error");
    }
    async function P(A, E = !1) {
      const ie = async (ke) => {
        var Te;
        const Le = ce(`Deleting branch ${A}...`, "info", 0);
        try {
          const le = await v(A, ke);
          Ue(Le), le.status === "success" ? (ce(`Branch "${A}" deleted`, "success"), await me()) : (Te = le.message) != null && Te.includes("not fully merged") ? he.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${A}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              he.value = null, await ie(!0);
            }
          } : ce(le.message || "Failed to delete branch", "error");
        } catch (le) {
          Ue(Le);
          const Dt = le instanceof Error ? le.message : "Failed to delete branch";
          Dt.includes("not fully merged") ? he.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${A}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              he.value = null, await ie(!0);
            }
          } : ce(Dt, "error");
        }
      };
      he.value = {
        title: "Delete Branch",
        message: `Delete branch "${A}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          he.value = null, await ie(E);
        }
      };
    }
    async function K(A) {
      T.value = null;
      const E = prompt("Enter branch name:");
      if (E) {
        const ie = ce(`Creating branch ${E}...`, "info", 0), ke = await m(E, A.hash);
        Ue(ie), ke.status === "success" ? (ce(`Branch "${E}" created from ${A.short_hash}`, "success"), await me()) : ce(ke.message || "Failed to create branch", "error");
      }
    }
    function ve() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Ee() {
      he.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var A;
          he.value = null, ve(), ce("Restarting environment...", "info");
          try {
            (A = window.app) != null && A.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function ot() {
      he.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var A;
          he.value = null, ce("Stopping environment...", "info");
          try {
            (A = window.app) != null && A.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function je(A) {
      F.value = !1, H.value = A, te.value = !0;
    }
    async function Mt() {
      te.value = !1, ne.value = !0, ve(), Y.value = {
        progress: 10,
        state: st(10),
        message: nt(10)
      };
      try {
        await d(H.value), go(), po();
      } catch (A) {
        at(), ne.value = !1, ce(`Failed to initiate switch: ${A instanceof Error ? A.message : "Unknown error"}`, "error"), Y.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function st(A) {
      return A >= 100 ? "complete" : A >= 80 ? "validating" : A >= 60 ? "starting" : A >= 30 ? "syncing" : "preparing";
    }
    function nt(A) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[st(A)] || "";
    }
    function go() {
      if (_) return;
      let A = 10;
      const E = 60, ie = 5e3, ke = 100, Le = (E - A) / (ie / ke);
      _ = window.setInterval(() => {
        if (A += Le, A >= E && (A = E, at()), Y.value.progress < E) {
          const Te = Math.floor(A);
          Y.value = {
            progress: Te,
            state: st(Te),
            message: nt(Te)
          };
        }
      }, ke);
    }
    function at() {
      _ && (clearInterval(_), _ = null);
    }
    function po() {
      O || (O = window.setInterval(async () => {
        try {
          let A = await N.getStatus();
          if ((!A || A.state === "idle") && (A = await I()), !A)
            return;
          const E = A.progress || 0;
          E >= 60 && at();
          const ie = Math.max(E, Y.value.progress), ke = A.state && A.state !== "idle" && A.state !== "unknown", Le = ke ? A.state : st(ie), Te = ke && A.message || nt(ie);
          Y.value = {
            state: Le,
            progress: ie,
            message: Te
          }, A.state === "complete" ? (at(), Nt(), ne.value = !1, ce(`✓ Switched to ${H.value}`, "success"), await me(), H.value = "") : A.state === "rolled_back" ? (at(), Nt(), ne.value = !1, ce("Switch failed, restored previous environment", "warning"), H.value = "") : A.state === "critical_failure" && (at(), Nt(), ne.value = !1, ce(`Critical error during switch: ${A.message}`, "error"), H.value = "");
        } catch (A) {
          console.error("Failed to poll switch progress:", A);
        }
      }, 1e3));
    }
    function Nt() {
      at(), O && (clearInterval(O), O = null);
    }
    function ho() {
      te.value = !1, H.value = "";
    }
    async function yo() {
      Xe.value = !1, await me(), ce("✓ Changes committed", "success");
    }
    async function wo() {
      Ge.value = !1;
      const A = ce("Syncing environment...", "info", 0);
      try {
        const E = await k("skip", !0);
        if (Ue(A), E.status === "success") {
          const ie = [];
          E.nodes_installed.length && ie.push(`${E.nodes_installed.length} installed`), E.nodes_removed.length && ie.push(`${E.nodes_removed.length} removed`);
          const ke = ie.length ? `: ${ie.join(", ")}` : "";
          ce(`✓ Environment synced${ke}`, "success"), await me();
        } else {
          const ie = E.errors.length ? E.errors.join("; ") : E.message;
          ce(`Sync failed: ${ie}`, "error");
        }
      } catch (E) {
        Ue(A), ce(`Sync error: ${E instanceof Error ? E.message : "Unknown error"}`, "error");
      }
    }
    async function ko(A) {
      xe.value = A, ae.value = !0, ee.value = { state: "creating", message: `Creating environment '${A.name}'...` };
      try {
        const E = await C(A);
        E.status === "started" ? bo() : E.status === "error" && (ae.value = !1, ce(`Failed to create environment: ${E.message}. Check debug logs for details.`, "error"), xe.value = null);
      } catch (E) {
        ae.value = !1, ce(`Error creating environment: ${E instanceof Error ? E.message : "Unknown error"}. Check debug logs.`, "error"), xe.value = null;
      }
    }
    function bo() {
      ye || (ye = window.setInterval(async () => {
        var A;
        try {
          const E = await L();
          ee.value = { state: E.state, message: E.message }, E.state === "complete" ? (Jt(), ae.value = !1, ce(`✓ Environment '${E.environment_name}' created`, "success"), await me(), X.value && await X.value.loadEnvironments(), (A = xe.value) != null && A.switch_after && E.environment_name && await je(E.environment_name), xe.value = null) : E.state === "error" && (Jt(), ae.value = !1, ce(`Failed to create environment: ${E.error || E.message}. Check debug logs.`, "error"), xe.value = null);
        } catch (E) {
          console.error("Failed to poll create progress:", E);
        }
      }, 2e3));
    }
    function Jt() {
      ye && (clearInterval(ye), ye = null);
    }
    async function _o(A) {
      var E;
      if (((E = z.value) == null ? void 0 : E.name) === A) {
        ce("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      he.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${A}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          he.value = null;
          try {
            const ie = await w(A);
            ie.status === "success" ? (ce(`Environment "${A}" deleted`, "success"), await me(), X.value && await X.value.loadEnvironments()) : ce(ie.message || "Failed to delete environment", "error");
          } catch (ie) {
            ce(`Error deleting environment: ${ie instanceof Error ? ie.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    function Yt() {
      if (!U.value) return [];
      const A = [], E = U.value.workflows;
      return E.new.length && A.push(`${E.new.length} new workflow(s)`), E.modified.length && A.push(`${E.modified.length} modified workflow(s)`), E.deleted.length && A.push(`${E.deleted.length} deleted workflow(s)`), A;
    }
    return Ce(me), (A, E) => {
      var ie, ke, Le, Te;
      return o(), s("div", Ah, [
        e("div", Vh, [
          e("div", Wh, [
            E[27] || (E[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            U.value ? (o(), s("div", Gh)) : c("", !0)
          ]),
          e("div", jh, [
            e("button", {
              class: oe(["icon-btn", { spinning: x.value }]),
              onClick: me,
              title: "Refresh"
            }, [...E[28] || (E[28] = [
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
              onClick: E[0] || (E[0] = (le) => n("close")),
              title: "Close"
            }, [...E[29] || (E[29] = [
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
        e("div", Hh, [
          e("div", { class: "env-switcher-header" }, [
            E[30] || (E[30] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Ee
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: ot
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: E[1] || (E[1] = (le) => be("environments", "all-envs"))
          }, [
            U.value ? (o(), s("div", Kh, [
              e("span", null, l(((ie = z.value) == null ? void 0 : ie.name) || ((ke = U.value) == null ? void 0 : ke.environment) || "Loading..."), 1),
              e("span", qh, "(" + l(U.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            E[31] || (E[31] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Jh, [
          e("div", Yh, [
            e("div", Qh, [
              E[32] || (E[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: oe(["sidebar-item", { active: ge.value === "status" && rt.value === "this-env" }]),
                onClick: E[2] || (E[2] = (le) => be("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ge.value === "workflows" }]),
                onClick: E[3] || (E[3] = (le) => be("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ge.value === "models-env" }]),
                onClick: E[4] || (E[4] = (le) => be("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ge.value === "branches" }]),
                onClick: E[5] || (E[5] = (le) => be("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ge.value === "history" }]),
                onClick: E[6] || (E[6] = (le) => be("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ge.value === "nodes" }]),
                onClick: E[7] || (E[7] = (le) => be("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ge.value === "debug-env" }]),
                onClick: E[8] || (E[8] = (le) => be("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            E[35] || (E[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Xh, [
              E[33] || (E[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: oe(["sidebar-item", { active: ge.value === "environments" }]),
                onClick: E[9] || (E[9] = (le) => be("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ge.value === "model-index" }]),
                onClick: E[10] || (E[10] = (le) => be("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ge.value === "settings" }]),
                onClick: E[11] || (E[11] = (le) => be("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ge.value === "debug-workspace" }]),
                onClick: E[12] || (E[12] = (le) => be("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            E[36] || (E[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Zh, [
              E[34] || (E[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: oe(["sidebar-item", { active: ge.value === "export" }]),
                onClick: E[13] || (E[13] = (le) => be("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ge.value === "import" }]),
                onClick: E[14] || (E[14] = (le) => be("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: oe(["sidebar-item", { active: ge.value === "remotes" }]),
                onClick: E[15] || (E[15] = (le) => be("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", e1, [
            M.value ? (o(), s("div", t1, l(M.value), 1)) : !U.value && ge.value === "status" ? (o(), s("div", o1, " Loading status... ")) : (o(), s(V, { key: 2 }, [
              ge.value === "status" ? (o(), S(Zn, {
                key: 0,
                status: U.value,
                onSwitchBranch: ht,
                onCommitChanges: E[16] || (E[16] = (le) => Xe.value = !0),
                onSyncEnvironment: E[17] || (E[17] = (le) => Ge.value = !0),
                onViewWorkflows: E[18] || (E[18] = (le) => be("workflows", "this-env")),
                onViewHistory: E[19] || (E[19] = (le) => be("history", "this-env")),
                onViewDebug: E[20] || (E[20] = (le) => be("debug-env", "this-env"))
              }, null, 8, ["status"])) : ge.value === "workflows" ? (o(), S(eu, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: se,
                onRefresh: me
              }, null, 512)) : ge.value === "models-env" ? (o(), S(Ou, {
                key: 2,
                onNavigate: pt
              })) : ge.value === "branches" ? (o(), S(fa, {
                key: 3,
                branches: D.value,
                current: ((Le = U.value) == null ? void 0 : Le.branch) || null,
                onSwitch: Rt,
                onCreate: G,
                onDelete: P
              }, null, 8, ["branches", "current"])) : ge.value === "history" ? (o(), S(xa, {
                key: 4,
                commits: R.value,
                onSelect: Ie,
                onCheckout: tt
              }, null, 8, ["commits"])) : ge.value === "nodes" ? (o(), S(Cm, {
                key: 5,
                onOpenNodeManager: yt
              })) : ge.value === "debug-env" ? (o(), S($v, { key: 6 })) : ge.value === "environments" ? (o(), S(ff, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: X,
                onSwitch: je,
                onCreate: ko,
                onDelete: _o
              }, null, 512)) : ge.value === "model-index" ? (o(), S(om, {
                key: 8,
                onRefresh: me
              })) : ge.value === "settings" ? (o(), S(wv, { key: 9 })) : ge.value === "debug-workspace" ? (o(), S(bv, { key: 10 })) : ge.value === "export" ? (o(), S(Cf, { key: 11 })) : ge.value === "import" ? (o(), S(Xg, { key: 12 })) : ge.value === "remotes" ? (o(), S(ev, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        T.value ? (o(), S(pp, {
          key: 0,
          commit: T.value,
          onClose: E[21] || (E[21] = (le) => T.value = null),
          onCheckout: tt,
          onCreateBranch: K
        }, null, 8, ["commit"])) : c("", !0),
        he.value ? (o(), S(bp, {
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
          onCancel: E[22] || (E[22] = (le) => he.value = null),
          onSecondary: he.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        g(hh, {
          show: te.value,
          "from-environment": ((Te = z.value) == null ? void 0 : Te.name) || "unknown",
          "to-environment": H.value,
          onConfirm: Mt,
          onClose: ho
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Xe.value && U.value ? (o(), S(co, {
          key: 2,
          status: U.value,
          "as-modal": !0,
          onClose: E[23] || (E[23] = (le) => Xe.value = !1),
          onCommitted: yo
        }, null, 8, ["status"])) : c("", !0),
        Ge.value && U.value ? (o(), S(Fh, {
          key: 3,
          show: Ge.value,
          "mismatch-details": {
            missing_nodes: U.value.comparison.missing_nodes,
            extra_nodes: U.value.comparison.extra_nodes
          },
          onConfirm: wo,
          onClose: E[24] || (E[24] = (le) => Ge.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        g(Lh, {
          show: ne.value,
          state: Y.value.state,
          progress: Y.value.progress,
          message: Y.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        ae.value ? (o(), s("div", s1, [
          e("div", n1, [
            E[39] || (E[39] = e("div", { class: "dialog-header" }, [
              e("h3", { class: "dialog-title" }, "CREATING ENVIRONMENT")
            ], -1)),
            e("div", a1, [
              E[37] || (E[37] = e("div", { class: "create-progress-spinner" }, null, -1)),
              e("p", l1, l(ee.value.message), 1),
              E[38] || (E[38] = e("p", { class: "create-progress-hint" }, "This may take several minutes...", -1))
            ])
          ])
        ])) : c("", !0),
        F.value ? (o(), s("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: E[26] || (E[26] = _e((le) => F.value = !1, ["self"]))
        }, [
          e("div", i1, [
            e("div", r1, [
              E[41] || (E[41] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: E[25] || (E[25] = (le) => F.value = !1)
              }, [...E[40] || (E[40] = [
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
            e("div", d1, [
              E[42] || (E[42] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", c1, [
                (o(!0), s(V, null, Z(W.value, (le) => (o(), s("div", {
                  key: le.name,
                  class: oe(["env-item", { current: le.is_current }])
                }, [
                  e("div", u1, [
                    e("div", m1, [
                      e("span", v1, l(le.is_current ? "●" : "○"), 1),
                      e("span", f1, l(le.name), 1),
                      le.current_branch ? (o(), s("span", g1, "(" + l(le.current_branch) + ")", 1)) : c("", !0),
                      le.is_current ? (o(), s("span", p1, "CURRENT")) : c("", !0)
                    ]),
                    e("div", h1, l(le.workflow_count) + " workflows • " + l(le.node_count) + " nodes ", 1)
                  ]),
                  le.is_current ? c("", !0) : (o(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Dt) => je(le.name)
                  }, " SWITCH ", 8, y1))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        e("div", w1, [
          g(Eo, { name: "toast" }, {
            default: i(() => [
              (o(!0), s(V, null, Z(Ae.value, (le) => (o(), s("div", {
                key: le.id,
                class: oe(["toast", le.type])
              }, [
                e("span", k1, l(j(le.type)), 1),
                e("span", b1, l(le.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), $1 = /* @__PURE__ */ J(_1, [["__scopeId", "data-v-97ffaacd"]]), C1 = { class: "item-header" }, x1 = { class: "item-info" }, S1 = { class: "filename" }, I1 = { class: "metadata" }, E1 = { class: "size" }, M1 = {
  key: 0,
  class: "type"
}, z1 = { class: "item-actions" }, L1 = {
  key: 0,
  class: "progress-section"
}, T1 = { class: "progress-bar" }, R1 = { class: "progress-stats" }, N1 = { class: "downloaded" }, D1 = { class: "speed" }, O1 = {
  key: 0,
  class: "eta"
}, U1 = {
  key: 1,
  class: "status-msg paused"
}, P1 = {
  key: 2,
  class: "status-msg queued"
}, B1 = {
  key: 3,
  class: "status-msg completed"
}, F1 = {
  key: 4,
  class: "status-msg failed"
}, A1 = {
  key: 0,
  class: "retries"
}, V1 = /* @__PURE__ */ q({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: u }) {
    const n = u;
    function r(h) {
      if (h === 0) return "?";
      const m = h / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(h / (1024 * 1024)).toFixed(1)} MB`;
    }
    function p(h) {
      return h === 0 ? "-" : `${(h / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function f(h) {
      if (h < 60) return `${Math.round(h)}s`;
      const m = Math.floor(h / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (h, m) => (o(), s("div", {
      class: oe(["download-item", `status-${t.item.status}`])
    }, [
      e("div", C1, [
        e("div", x1, [
          e("div", S1, l(t.item.filename), 1),
          e("div", I1, [
            e("span", E1, l(r(t.item.size)), 1),
            t.item.type ? (o(), s("span", M1, l(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", z1, [
          t.item.status === "queued" || t.item.status === "downloading" ? (o(), s("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: m[0] || (m[0] = (a) => n("cancel")),
            title: "Cancel"
          }, " × ")) : c("", !0),
          t.item.status === "paused" ? (o(), s("button", {
            key: 1,
            class: "action-icon resume",
            onClick: m[1] || (m[1] = (a) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : c("", !0),
          t.item.status === "failed" ? (o(), s("button", {
            key: 2,
            class: "action-icon retry",
            onClick: m[2] || (m[2] = (a) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : c("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (o(), s("button", {
            key: 3,
            class: "action-icon remove",
            onClick: m[3] || (m[3] = (a) => n("remove")),
            title: "Remove"
          }, " × ")) : c("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (o(), s("div", L1, [
        e("div", T1, [
          e("div", {
            class: "progress-fill",
            style: qe({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", R1, [
          e("span", N1, l(r(t.item.downloaded)) + " / " + l(r(t.item.size)), 1),
          e("span", D1, l(p(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), s("span", O1, l(f(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), s("div", U1, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), s("div", P1, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), s("div", B1, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), s("div", F1, [
        y(" ✗ " + l(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), s("span", A1, "(" + l(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), _t = /* @__PURE__ */ J(V1, [["__scopeId", "data-v-2110df65"]]), W1 = { class: "queue-title" }, G1 = { class: "count" }, j1 = { class: "queue-actions" }, H1 = { class: "action-label" }, K1 = {
  key: 0,
  class: "overall-progress"
}, q1 = { class: "progress-bar" }, J1 = {
  key: 0,
  class: "current-mini"
}, Y1 = { class: "filename" }, Q1 = { class: "speed" }, X1 = {
  key: 1,
  class: "queue-content"
}, Z1 = {
  key: 0,
  class: "section"
}, ey = {
  key: 1,
  class: "section"
}, ty = { class: "section-header" }, oy = { class: "section-label paused" }, sy = { class: "items-list" }, ny = {
  key: 2,
  class: "section"
}, ay = { class: "section-header" }, ly = { class: "section-label" }, iy = { class: "items-list" }, ry = {
  key: 3,
  class: "section"
}, dy = { class: "section-header" }, cy = { class: "section-label" }, uy = { class: "items-list" }, my = {
  key: 4,
  class: "section"
}, vy = { class: "section-header" }, fy = { class: "section-label failed" }, gy = { class: "items-list" }, py = /* @__PURE__ */ q({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: u,
      currentDownload: n,
      queuedItems: r,
      completedItems: p,
      failedItems: f,
      pausedItems: h,
      hasItems: m,
      activeCount: a,
      cancelDownload: v,
      retryDownload: b,
      resumeDownload: d,
      resumeAllPaused: I,
      removeItem: C,
      clearCompleted: L
    } = Et(), w = $(!1);
    let k = null;
    Wt(
      () => ({
        active: a.value,
        failed: f.value.length,
        paused: h.value.length,
        completed: p.value.length
      }),
      (D, W) => {
        k && (clearTimeout(k), k = null);
        const z = D.active === 0 && D.failed === 0 && D.paused === 0 && D.completed > 0, x = W && (W.active > 0 || W.paused > 0);
        z && x && (k = setTimeout(() => {
          L(), k = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const N = B(() => {
      var z;
      if (u.items.length === 0) return 0;
      const D = p.value.length, W = ((z = n.value) == null ? void 0 : z.progress) || 0;
      return Math.round((D + W / 100) / u.items.length * 100);
    });
    function U(D) {
      v(D);
    }
    function R(D) {
      return D === 0 ? "" : `${(D / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (D, W) => (o(), S(ze, { to: "body" }, [
      fe(m) ? (o(), s("div", {
        key: 0,
        class: oe(["model-download-queue", { minimized: !w.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: W[0] || (W[0] = (z) => w.value = !w.value)
        }, [
          e("div", W1, [
            W[4] || (W[4] = e("span", { class: "icon" }, "↓", -1)),
            W[5] || (W[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", G1, "(" + l(fe(a)) + "/" + l(fe(u).items.length) + ")", 1)
          ]),
          e("div", j1, [
            e("span", H1, l(w.value ? "minimize" : "expand"), 1)
          ])
        ]),
        w.value ? (o(), s("div", X1, [
          fe(n) ? (o(), s("div", Z1, [
            W[6] || (W[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            g(_t, {
              item: fe(n),
              onCancel: W[1] || (W[1] = (z) => U(fe(n).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          fe(h).length > 0 ? (o(), s("div", ey, [
            e("div", ty, [
              e("span", oy, "Paused (" + l(fe(h).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: W[2] || (W[2] = //@ts-ignore
                (...z) => fe(I) && fe(I)(...z))
              }, "Resume All")
            ]),
            e("div", sy, [
              (o(!0), s(V, null, Z(fe(h), (z) => (o(), S(_t, {
                key: z.id,
                item: z,
                onResume: (x) => fe(d)(z.id),
                onRemove: (x) => fe(C)(z.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          fe(r).length > 0 ? (o(), s("div", ny, [
            e("div", ay, [
              e("span", ly, "Queued (" + l(fe(r).length) + ")", 1)
            ]),
            e("div", iy, [
              (o(!0), s(V, null, Z(fe(r), (z) => (o(), S(_t, {
                key: z.id,
                item: z,
                onCancel: (x) => U(z.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          fe(p).length > 0 ? (o(), s("div", ry, [
            e("div", dy, [
              e("span", cy, "Completed (" + l(fe(p).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: W[3] || (W[3] = //@ts-ignore
                (...z) => fe(L) && fe(L)(...z))
              }, "Clear")
            ]),
            e("div", uy, [
              (o(!0), s(V, null, Z(fe(p).slice(0, 3), (z) => (o(), S(_t, {
                key: z.id,
                item: z,
                onRemove: (x) => fe(C)(z.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          fe(f).length > 0 ? (o(), s("div", my, [
            e("div", vy, [
              e("span", fy, "Failed (" + l(fe(f).length) + ")", 1)
            ]),
            e("div", gy, [
              (o(!0), s(V, null, Z(fe(f), (z) => (o(), S(_t, {
                key: z.id,
                item: z,
                onRetry: (x) => fe(b)(z.id),
                onRemove: (x) => fe(C)(z.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (o(), s("div", K1, [
          e("div", q1, [
            e("div", {
              class: "progress-fill",
              style: qe({ width: `${N.value}%` })
            }, null, 4)
          ]),
          fe(n) ? (o(), s("div", J1, [
            e("span", Y1, l(fe(n).filename), 1),
            e("span", Q1, l(R(fe(n).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), hy = /* @__PURE__ */ J(py, [["__scopeId", "data-v-60751cfa"]]), yy = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', wy = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', ky = {
  comfy: yy,
  phosphor: wy
}, Kt = "comfy", uo = "comfygit-theme";
let lt = null, mo = Kt;
function by() {
  try {
    const t = localStorage.getItem(uo);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Kt;
}
function vo(t = Kt) {
  lt && lt.remove(), lt = document.createElement("style"), lt.id = "comfygit-theme-styles", lt.setAttribute("data-theme", t), lt.textContent = ky[t], document.head.appendChild(lt), document.body.setAttribute("data-comfygit-theme", t), mo = t;
  try {
    localStorage.setItem(uo, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function _y() {
  return mo;
}
function $y(t) {
  vo(t);
}
const qt = document.createElement("link");
qt.rel = "stylesheet";
qt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(qt);
const Cy = by();
vo(Cy);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), $y(t);
  },
  getTheme: () => {
    const t = _y();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Pe = null, De = null, St = null, $t = null, eo = null;
const vt = $(null);
async function zt() {
  var t;
  if (!((t = mt) != null && t.api)) return null;
  try {
    const u = await mt.api.fetchApi("/v2/comfygit/status");
    u.ok && (vt.value = await u.json());
  } catch {
  }
}
function xy() {
  if (!vt.value) return !1;
  const t = vt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || vt.value.has_changes;
}
function Sy() {
  Pe && Pe.remove(), Pe = document.createElement("div"), Pe.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Pe.appendChild(t), Pe.addEventListener("click", (r) => {
    r.target === Pe && Bt();
  });
  const u = (r) => {
    r.key === "Escape" && (Bt(), document.removeEventListener("keydown", u));
  };
  document.addEventListener("keydown", u), Gt({
    render: () => jt($1, {
      onClose: Bt,
      onStatusUpdate: (r) => {
        vt.value = r, It();
      }
    })
  }).mount(t), document.body.appendChild(Pe);
}
function Bt() {
  Pe && (Pe.remove(), Pe = null);
}
function Iy(t) {
  Ct(), De = document.createElement("div"), De.className = "comfygit-commit-popover-container";
  const u = t.getBoundingClientRect();
  De.style.position = "fixed", De.style.top = `${u.bottom + 8}px`, De.style.right = `${window.innerWidth - u.right}px`, De.style.zIndex = "10001";
  const n = (p) => {
    De && !De.contains(p.target) && p.target !== t && (Ct(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const r = (p) => {
    p.key === "Escape" && (Ct(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), St = Gt({
    render: () => jt(co, {
      status: vt.value,
      onClose: Ct,
      onCommitted: () => {
        Ct(), zt().then(It);
      }
    })
  }), St.mount(De), document.body.appendChild(De);
}
function Ct() {
  St && (St.unmount(), St = null), De && (De.remove(), De = null);
}
function Ey() {
  $t || ($t = document.createElement("div"), $t.className = "comfygit-download-queue-root", eo = Gt({
    render: () => jt(hy)
  }), eo.mount($t), document.body.appendChild($t), console.log("[ComfyGit] Model download queue mounted"));
}
let He = null;
function It() {
  if (!He) return;
  const t = He.querySelector(".commit-indicator");
  t && (t.style.display = xy() ? "block" : "none");
}
const fo = document.createElement("style");
fo.textContent = `
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
document.head.appendChild(fo);
mt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var p, f;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const u = document.createElement("button");
    u.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", u.textContent = "ComfyGit", u.title = "ComfyGit Control Panel", u.onclick = Sy, He = document.createElement("button"), He.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", He.innerHTML = 'Commit <span class="commit-indicator"></span>', He.title = "Quick Commit", He.onclick = () => Iy(He), t.appendChild(u), t.appendChild(He), (f = (p = mt.menu) == null ? void 0 : p.settingsGroup) != null && f.element && (mt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), Ey();
    const { loadPendingDownloads: n } = Et();
    n(), await zt(), It(), setInterval(async () => {
      await zt(), It();
    }, 3e4);
    const r = mt.api;
    if (r) {
      let h = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((v) => {
          (v.startsWith("workflow:") || v.startsWith("Comfy.OpenWorkflowsPaths:") || v.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(v);
        }), window.location.reload();
      }, m = function() {
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
        const b = document.createElement("span");
        b.textContent = "Workflows updated - refresh required", v.appendChild(b);
        const d = document.createElement("button");
        d.textContent = "Refresh", d.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, d.onmouseover = () => d.style.background = "var(--comfy-input-bg)", d.onmouseout = () => d.style.background = "var(--comfy-menu-bg)", d.onclick = () => h(), v.appendChild(d);
        const I = document.createElement("button");
        I.textContent = "×", I.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, I.onmouseover = () => I.style.opacity = "1", I.onmouseout = () => I.style.opacity = "0.6", I.onclick = () => v.remove(), v.appendChild(I), document.body.appendChild(v), console.log("[ComfyGit] Refresh notification displayed");
      };
      r.addEventListener("comfygit:workflow-changed", async (v) => {
        const { change_type: b, workflow_name: d } = v.detail;
        console.log(`[ComfyGit] Workflow ${b}: ${d}`), await zt(), It();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let a = !1;
      r.addEventListener("status", async (v) => {
        const b = v.detail != null;
        b && !a && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), h()) : m()), a = b;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
