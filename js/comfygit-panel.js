import { app as mt } from "../../scripts/app.js";
import { defineComponent as Y, createElementBlock as s, openBlock as o, createCommentVNode as c, createElementVNode as e, renderSlot as ue, createBlock as x, resolveDynamicComponent as Vt, normalizeClass as se, withCtx as i, toDisplayString as l, createVNode as g, createTextVNode as y, computed as F, Fragment as W, renderList as ee, normalizeStyle as qe, ref as $, onMounted as Ce, watch as Wt, Teleport as ze, withModifiers as _e, Transition as $o, createSlots as Tt, withKeys as Ze, onUnmounted as Co, reactive as to, readonly as xo, unref as fe, withDirectives as dt, vModelText as oo, nextTick as So, vModelSelect as Ot, vModelCheckbox as Io, TransitionGroup as Eo, createApp as Gt, h as jt } from "vue";
const Mo = { class: "panel-layout" }, zo = {
  key: 0,
  class: "panel-layout-header"
}, Lo = {
  key: 1,
  class: "panel-layout-search"
}, To = { class: "panel-layout-content" }, Ro = {
  key: 2,
  class: "panel-layout-footer"
}, No = /* @__PURE__ */ Y({
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
}), Q = (t, u) => {
  const n = t.__vccOpts || t;
  for (const [r, p] of u)
    n[r] = p;
  return n;
}, Re = /* @__PURE__ */ Q(No, [["__scopeId", "data-v-21565df9"]]), Do = {
  key: 0,
  class: "panel-title-prefix"
}, Oo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Uo = /* @__PURE__ */ Y({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (u, n) => (o(), x(Vt(`h${t.level}`), {
      class: se(["panel-title", t.variant])
    }, {
      default: i(() => [
        t.showPrefix ? (o(), s("span", Do, l(t.prefix), 1)) : (o(), s("span", Oo)),
        ue(u.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Po = /* @__PURE__ */ Q(Uo, [["__scopeId", "data-v-c3875efc"]]), Bo = ["title"], Fo = ["width", "height"], Ao = /* @__PURE__ */ Y({
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
}), so = /* @__PURE__ */ Q(Ao, [["__scopeId", "data-v-6fc7f16d"]]), Vo = { class: "header-left" }, Wo = {
  key: 0,
  class: "header-actions"
}, Go = /* @__PURE__ */ Y({
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
      class: se(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Vo, [
        g(Po, { "show-prefix": t.showPrefix }, {
          default: i(() => [
            y(l(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), x(so, {
          key: 0,
          onClick: n[0] || (n[0] = (r) => u.$emit("info-click"))
        })) : c("", !0)
      ]),
      u.$slots.actions ? (o(), s("div", Wo, [
        ue(u.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Ne = /* @__PURE__ */ Q(Go, [["__scopeId", "data-v-55a62cd6"]]), jo = {
  key: 0,
  class: "section-title-count"
}, Ho = {
  key: 1,
  class: "section-title-icon"
}, Ko = /* @__PURE__ */ Y({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (u, n) => (o(), x(Vt(`h${t.level}`), {
      class: se(["section-title", { clickable: t.clickable }]),
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
}), Oe = /* @__PURE__ */ Q(Ko, [["__scopeId", "data-v-559361eb"]]), qo = { class: "status-grid" }, Jo = { class: "status-grid__columns" }, Yo = { class: "status-grid__column" }, Qo = { class: "status-grid__title" }, Xo = { class: "status-grid__column status-grid__column--right" }, Zo = { class: "status-grid__title" }, es = {
  key: 0,
  class: "status-grid__footer"
}, ts = /* @__PURE__ */ Y({
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
}), os = /* @__PURE__ */ Q(ts, [["__scopeId", "data-v-73b7ba3f"]]), ss = {
  key: 0,
  class: "status-item__icon"
}, ns = {
  key: 1,
  class: "status-item__count"
}, as = { class: "status-item__label" }, ls = /* @__PURE__ */ Y({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const u = t, n = F(() => `status-item--${u.variant}`);
    return (r, p) => (o(), s("div", {
      class: se(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), s("span", ss, l(t.icon), 1)) : c("", !0),
      t.count !== void 0 ? (o(), s("span", ns, l(t.count), 1)) : c("", !0),
      e("span", as, l(t.label), 1)
    ], 2));
  }
}), Ve = /* @__PURE__ */ Q(ls, [["__scopeId", "data-v-6f929183"]]), is = { class: "issue-card__header" }, rs = { class: "issue-card__icon" }, ds = { class: "issue-card__title" }, cs = {
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
}, fs = /* @__PURE__ */ Y({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const u = t, n = F(() => `issue-card--${u.severity}`);
    return (r, p) => (o(), s("div", {
      class: se(["issue-card", n.value])
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
        (o(!0), s(W, null, ee(t.items, (f, h) => (o(), s("div", {
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
}), ct = /* @__PURE__ */ Q(fs, [["__scopeId", "data-v-df6aa348"]]), gs = ["type", "disabled"], ps = {
  key: 0,
  class: "spinner"
}, hs = /* @__PURE__ */ Y({
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
      class: se(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => u.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", ps)) : c("", !0),
      t.loading ? c("", !0) : ue(u.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, gs));
  }
}), Z = /* @__PURE__ */ Q(hs, [["__scopeId", "data-v-772abe47"]]), ys = { class: "empty-state" }, ws = {
  key: 0,
  class: "empty-icon"
}, ks = { class: "empty-message" }, bs = /* @__PURE__ */ Y({
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
      t.actionLabel ? (o(), x(Z, {
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
}), Fe = /* @__PURE__ */ Q(bs, [["__scopeId", "data-v-4466284f"]]), _s = /* @__PURE__ */ Y({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (u, n) => (o(), s("span", {
      class: se(["detail-label"]),
      style: qe({ minWidth: t.minWidth })
    }, [
      ue(u.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Ft = /* @__PURE__ */ Q(_s, [["__scopeId", "data-v-75e9eeb8"]]), $s = /* @__PURE__ */ Y({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (o(), s("span", {
      class: se(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      ue(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), At = /* @__PURE__ */ Q($s, [["__scopeId", "data-v-2f186e4c"]]), Cs = { class: "detail-row" }, xs = /* @__PURE__ */ Y({
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
      t.value ? (o(), x(At, {
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
}), we = /* @__PURE__ */ Q(xs, [["__scopeId", "data-v-ef15664a"]]), Ss = { class: "modal-header" }, Is = { class: "modal-body" }, Es = { class: "status-section" }, Ms = {
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
}, jn = { class: "modal-actions" }, Hn = /* @__PURE__ */ Y({
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
    }), Wt(() => u.show, (I, _) => {
      console.log("StatusDetailModal show prop changed from", _, "to", I);
    }, { immediate: !0 });
    const r = F(() => {
      var I, _, z;
      return ((z = (_ = (I = u.status) == null ? void 0 : I.workflows) == null ? void 0 : _.analyzed) == null ? void 0 : z.filter(
        (w) => w.status === "broken" && w.sync_state === "synced"
      )) || [];
    }), p = F(() => {
      var I, _, z;
      return ((z = (_ = (I = u.status) == null ? void 0 : I.workflows) == null ? void 0 : _.analyzed) == null ? void 0 : z.filter(
        (w) => w.status === "broken" && w.sync_state !== "synced"
      )) || [];
    }), f = F(() => {
      var I, _, z;
      return ((z = (_ = (I = u.status) == null ? void 0 : I.workflows) == null ? void 0 : _.synced) == null ? void 0 : z.filter((w) => {
        var T, O, L;
        const k = (L = (O = (T = u.status) == null ? void 0 : T.workflows) == null ? void 0 : O.analyzed) == null ? void 0 : L.find((R) => R.name === w);
        return !k || k.status !== "broken";
      })) || [];
    }), h = F(() => {
      var I, _, z, w, k;
      return (I = u.status) != null && I.workflows ? (((_ = u.status.workflows.new) == null ? void 0 : _.length) ?? 0) > 0 || (((z = u.status.workflows.modified) == null ? void 0 : z.length) ?? 0) > 0 || (((w = u.status.workflows.deleted) == null ? void 0 : w.length) ?? 0) > 0 || (((k = u.status.workflows.synced) == null ? void 0 : k.length) ?? 0) > 0 : !1;
    }), m = F(() => {
      var _, z, w;
      const I = (_ = u.status) == null ? void 0 : _.git_changes;
      return I ? (((z = I.nodes_added) == null ? void 0 : z.length) ?? 0) > 0 || (((w = I.nodes_removed) == null ? void 0 : w.length) ?? 0) > 0 || I.workflow_changes || I.has_other_changes : !1;
    }), a = F(() => {
      var I, _, z, w, k, T;
      return !h.value && !m.value && ((_ = (I = u.status) == null ? void 0 : I.comparison) == null ? void 0 : _.is_synced) && (((z = u.status) == null ? void 0 : z.missing_models_count) ?? 0) === 0 && (((T = (k = (w = u.status) == null ? void 0 : w.comparison) == null ? void 0 : k.disabled_nodes) == null ? void 0 : T.length) ?? 0) === 0;
    }), v = F(() => {
      var _, z;
      const I = (z = (_ = u.status) == null ? void 0 : _.git_changes) == null ? void 0 : z.workflow_changes;
      return I ? typeof I == "number" ? I : Object.keys(I).length : 0;
    });
    function b(I) {
      return typeof I == "string" ? I : I.name;
    }
    function d(I) {
      return typeof I == "object" && I.is_development === !0;
    }
    return (I, _) => {
      var z, w, k, T, O, L, R, G, U, N, P, M, S, V, q, oe, ne, K, X, D, C, ae;
      return o(), x(ze, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: _[6] || (_[6] = (te) => I.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: _[5] || (_[5] = _e(() => {
            }, ["stop"]))
          }, [
            e("div", Ss, [
              _[7] || (_[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: _[0] || (_[0] = (te) => I.$emit("close"))
              }, "✕")
            ]),
            e("div", Is, [
              e("div", Es, [
                g(Oe, { level: "4" }, {
                  default: i(() => [..._[8] || (_[8] = [
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
                    default: i(() => [..._[9] || (_[9] = [
                      y("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: _[1] || (_[1] = (te) => I.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                r.value.length ? (o(), s("div", Ls, [
                  e("div", Ts, [
                    _[10] || (_[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Rs, "BROKEN (COMMITTED) (" + l(r.value.length) + ")", 1)
                  ]),
                  e("div", Ns, [
                    (o(!0), s(W, null, ee(r.value, (te) => (o(), s("div", {
                      key: te.name,
                      class: "workflow-item"
                    }, [
                      e("span", Ds, l(te.name), 1),
                      e("span", Os, l(te.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                p.value.length ? (o(), s("div", Us, [
                  e("div", Ps, [
                    _[11] || (_[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Bs, "BROKEN (UNCOMMITTED) (" + l(p.value.length) + ")", 1)
                  ]),
                  e("div", Fs, [
                    (o(!0), s(W, null, ee(p.value, (te) => (o(), s("div", {
                      key: te.name,
                      class: "workflow-item"
                    }, [
                      e("span", As, l(te.name), 1),
                      e("span", Vs, l(te.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (w = (z = t.status.workflows) == null ? void 0 : z.new) != null && w.length ? (o(), s("div", Ws, [
                  e("div", Gs, [
                    _[12] || (_[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", js, "NEW (" + l(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Hs, [
                    (o(!0), s(W, null, ee(t.status.workflows.new, (te) => (o(), s("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Ks, l(te), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (T = (k = t.status.workflows) == null ? void 0 : k.modified) != null && T.length ? (o(), s("div", qs, [
                  e("div", Js, [
                    _[13] || (_[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Ys, "MODIFIED (" + l(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Qs, [
                    (o(!0), s(W, null, ee(t.status.workflows.modified, (te) => (o(), s("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Xs, l(te), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (L = (O = t.status.workflows) == null ? void 0 : O.deleted) != null && L.length ? (o(), s("div", Zs, [
                  e("div", en, [
                    _[14] || (_[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", tn, "DELETED (" + l(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", on, [
                    (o(!0), s(W, null, ee(t.status.workflows.deleted, (te) => (o(), s("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", sn, l(te), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                f.value.length ? (o(), s("div", nn, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: _[2] || (_[2] = (te) => n.value = !n.value)
                  }, [
                    _[15] || (_[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", an, "SYNCED (" + l(f.value.length) + ")", 1),
                    e("span", ln, l(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (o(), s("div", rn, [
                    (o(!0), s(W, null, ee(f.value, (te) => (o(), s("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", dn, l(te), 1)
                    ]))), 128))
                  ])) : c("", !0)
                ])) : c("", !0)
              ])) : c("", !0),
              m.value ? (o(), s("div", cn, [
                g(Oe, { level: "4" }, {
                  default: i(() => [..._[16] || (_[16] = [
                    y("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (G = (R = t.status.git_changes) == null ? void 0 : R.nodes_added) != null && G.length ? (o(), s("div", un, [
                  e("div", mn, [
                    _[17] || (_[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", vn, "NODES ADDED (" + l(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", fn, [
                    (o(!0), s(W, null, ee(t.status.git_changes.nodes_added, (te) => (o(), s("div", {
                      key: b(te),
                      class: "change-item"
                    }, [
                      e("span", gn, l(b(te)), 1),
                      d(te) ? (o(), s("span", pn, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (N = (U = t.status.git_changes) == null ? void 0 : U.nodes_removed) != null && N.length ? (o(), s("div", hn, [
                  e("div", yn, [
                    _[18] || (_[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", wn, "NODES REMOVED (" + l(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", kn, [
                    (o(!0), s(W, null, ee(t.status.git_changes.nodes_removed, (te) => (o(), s("div", {
                      key: b(te),
                      class: "change-item"
                    }, [
                      e("span", bn, l(b(te)), 1),
                      d(te) ? (o(), s("span", _n, "dev")) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                (P = t.status.git_changes) != null && P.workflow_changes ? (o(), s("div", $n, [
                  _[19] || (_[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", Cn, [
                    e("div", xn, [
                      e("span", Sn, l(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : c("", !0),
                (M = t.status.git_changes) != null && M.has_other_changes ? (o(), s("div", In, [..._[20] || (_[20] = [
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
              (S = t.status.comparison) != null && S.is_synced ? c("", !0) : (o(), s("div", En, [
                e("div", Mn, [
                  g(Oe, { level: "4" }, {
                    default: i(() => [..._[21] || (_[21] = [
                      y("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: _[3] || (_[3] = (te) => I.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                _[22] || (_[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (q = (V = t.status.comparison) == null ? void 0 : V.missing_nodes) != null && q.length ? (o(), s("div", zn, [
                  g(we, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Ln, [
                    (o(!0), s(W, null, ee(t.status.comparison.missing_nodes.slice(0, 10), (te) => (o(), s("div", {
                      key: te,
                      class: "drift-list-item"
                    }, " - " + l(te), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), s("div", Tn, " ... and " + l(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (ne = (oe = t.status.comparison) == null ? void 0 : oe.extra_nodes) != null && ne.length ? (o(), s("div", Rn, [
                  g(we, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Nn, [
                    (o(!0), s(W, null, ee(t.status.comparison.extra_nodes.slice(0, 10), (te) => (o(), s("div", {
                      key: te,
                      class: "drift-list-item"
                    }, " - " + l(te), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), s("div", Dn, " ... and " + l(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : c("", !0)
                  ])
                ])) : c("", !0),
                (X = (K = t.status.comparison) == null ? void 0 : K.version_mismatches) != null && X.length ? (o(), s("div", On, [
                  g(we, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : c("", !0),
                (D = t.status.comparison) != null && D.packages_in_sync ? c("", !0) : (o(), s("div", Un, [
                  g(we, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ae = (C = t.status.comparison) == null ? void 0 : C.disabled_nodes) != null && ae.length ? (o(), s("div", Pn, [
                g(Oe, { level: "4" }, {
                  default: i(() => [..._[23] || (_[23] = [
                    y("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Bn, [
                  _[24] || (_[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, l(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Fn, [
                  (o(!0), s(W, null, ee(t.status.comparison.disabled_nodes.slice(0, 10), (te) => (o(), s("div", {
                    key: te,
                    class: "drift-list-item"
                  }, " • " + l(te), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), s("div", An, " ... and " + l(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : c("", !0)
                ])
              ])) : c("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), s("div", Vn, [
                g(Oe, { level: "4" }, {
                  default: i(() => [..._[25] || (_[25] = [
                    y("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Wn, [
                  _[26] || (_[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, l(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                _[27] || (_[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : c("", !0),
              a.value ? (o(), s("div", Gn, [..._[28] || (_[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : c("", !0)
            ]),
            e("div", jn, [
              g(Z, {
                variant: "secondary",
                onClick: _[4] || (_[4] = (te) => I.$emit("close"))
              }, {
                default: i(() => [..._[29] || (_[29] = [
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
}), Kn = /* @__PURE__ */ Q(Hn, [["__scopeId", "data-v-c67eed17"]]), qn = { class: "health-section-header" }, Jn = { class: "suggestions-content" }, Yn = { class: "suggestions-text" }, Qn = { style: { "margin-top": "var(--cg-space-3)" } }, Xn = {
  key: 1,
  class: "no-issues-text"
}, Zn = /* @__PURE__ */ Y({
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
    const a = u, v = F(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), b = F(() => n.status.has_changes), d = F(() => {
      const U = n.status.git_changes;
      return U.nodes_added.length > 0 || U.nodes_removed.length > 0 || U.workflow_changes;
    }), I = F(() => n.status.has_changes || v.value), _ = F(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), z = F(() => n.status.git_changes.has_other_changes), w = F(() => {
      var U;
      return ((U = n.status.workflows.analyzed) == null ? void 0 : U.filter((N) => N.status === "broken")) || [];
    }), k = F(() => {
      var U;
      return ((U = n.status.workflows.analyzed) == null ? void 0 : U.filter(
        (N) => N.has_path_sync_issues && !N.has_issues
      )) || [];
    }), T = F(() => w.value.length > 0), O = F(() => T.value || k.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced), L = F(() => {
      const U = [];
      return n.status.workflows.new.length > 0 && U.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && U.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && U.push(`${n.status.workflows.deleted.length} deleted`), U.length > 0 ? `${U.join(", ")} workflow${U.length === 1 && !U[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), R = F(() => {
      var P, M;
      const U = [], N = n.status.comparison;
      return (P = N.missing_nodes) != null && P.length && U.push(`${N.missing_nodes.length} missing node${N.missing_nodes.length === 1 ? "" : "s"}`), (M = N.extra_nodes) != null && M.length && U.push(`${N.extra_nodes.length} untracked node${N.extra_nodes.length === 1 ? "" : "s"}`), U.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${U.join(" and ")}.`;
    }), G = F(() => {
      var P, M;
      const U = [], N = n.status.comparison;
      return (P = N.extra_nodes) != null && P.length && (N.extra_nodes.slice(0, 3).forEach((S) => {
        U.push(`Untracked: ${S}`);
      }), N.extra_nodes.length > 3 && U.push(`...and ${N.extra_nodes.length - 3} more untracked`)), (M = N.missing_nodes) != null && M.length && (N.missing_nodes.slice(0, 3).forEach((S) => {
        U.push(`Missing: ${S}`);
      }), N.missing_nodes.length > 3 && U.push(`...and ${N.missing_nodes.length - 3} more missing`)), U;
    });
    return (U, N) => (o(), s(W, null, [
      g(Re, null, {
        header: i(() => [
          g(Ne, { title: "STATUS" })
        ]),
        content: i(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: N[1] || (N[1] = (P) => p.value = !0),
            onMouseleave: N[2] || (N[2] = (P) => p.value = !1)
          }, [
            e("div", qn, [
              g(Oe, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: i(() => [...N[9] || (N[9] = [
                  y(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              g($o, { name: "fade" }, {
                default: i(() => [
                  p.value ? (o(), x(Z, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: f
                  }, {
                    default: i(() => [...N[10] || (N[10] = [
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
                t.status.workflows.new.length ? (o(), x(Ve, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.modified.length ? (o(), x(Ve, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : c("", !0),
                t.status.workflows.deleted.length ? (o(), x(Ve, {
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
                t.status.git_changes.nodes_added.length ? (o(), x(Ve, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), x(Ve, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : c("", !0),
                t.status.git_changes.workflow_changes ? (o(), x(Ve, {
                  key: 2,
                  icon: "●",
                  count: _.value,
                  label: _.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : c("", !0),
                z.value ? (o(), x(Ve, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : c("", !0),
                b.value && !d.value && !z.value ? (o(), x(Ve, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : c("", !0),
                b.value ? c("", !0) : (o(), x(Ve, {
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
                  N[12] || (N[12] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Jn, [
                    e("span", Yn, l(L.value), 1),
                    g(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: N[0] || (N[0] = (P) => U.$emit("commit-changes"))
                    }, {
                      default: i(() => [...N[11] || (N[11] = [
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
          t.status.is_detached_head ? (o(), x(ct, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: i(() => [
              g(Z, {
                variant: "primary",
                size: "sm",
                onClick: N[3] || (N[3] = (P) => U.$emit("create-branch"))
              }, {
                default: i(() => [...N[13] || (N[13] = [
                  y(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : c("", !0),
          e("div", Qn, [
            g(Oe, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...N[14] || (N[14] = [
                y(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            O.value ? (o(), s(W, { key: 0 }, [
              w.value.length > 0 ? (o(), x(ct, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${w.value.length} workflow${w.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: w.value.map((P) => `${P.name} — ${P.issue_summary}`)
              }, {
                actions: i(() => [
                  g(Z, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[4] || (N[4] = (P) => U.$emit("view-workflows"))
                  }, {
                    default: i(() => [...N[15] || (N[15] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : c("", !0),
              k.value.length > 0 ? (o(), x(ct, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${k.value.length} workflow${k.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: k.value.map((P) => `${P.name} — ${P.models_needing_path_sync_count} model path${P.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: i(() => [
                  g(Z, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[5] || (N[5] = (P) => U.$emit("view-workflows"))
                  }, {
                    default: i(() => [...N[16] || (N[16] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : c("", !0),
              t.status.missing_models_count > 0 && !T.value ? (o(), x(ct, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index."
              }, {
                actions: i(() => [
                  g(Z, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[6] || (N[6] = (P) => U.$emit("view-workflows"))
                  }, {
                    default: i(() => [...N[17] || (N[17] = [
                      y(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : c("", !0),
              t.status.comparison.is_synced ? c("", !0) : (o(), x(ct, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: R.value,
                items: G.value
              }, {
                actions: i(() => [
                  g(Z, {
                    variant: "secondary",
                    size: "sm",
                    onClick: f
                  }, {
                    default: i(() => [...N[18] || (N[18] = [
                      y(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  g(Z, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[7] || (N[7] = (P) => U.$emit("view-nodes"))
                  }, {
                    default: i(() => [...N[19] || (N[19] = [
                      y(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"]))
            ], 64)) : I.value ? (o(), s("span", Xn, "No issues")) : (o(), x(Fe, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      g(Kn, {
        show: r.value,
        status: t.status,
        onClose: N[8] || (N[8] = (P) => r.value = !1),
        onNavigateWorkflows: h,
        onNavigateNodes: m
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), ea = /* @__PURE__ */ Q(Zn, [["__scopeId", "data-v-bd67edd1"]]), ta = ["type", "value", "placeholder", "disabled"], oa = /* @__PURE__ */ Y({
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
      class: se(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: h,
      onKeyup: [
        a[0] || (a[0] = Ze((v) => m.$emit("enter"), ["enter"])),
        a[1] || (a[1] = Ze((v) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: a[2] || (a[2] = (v) => m.$emit("focus")),
      onBlur: a[3] || (a[3] = (v) => m.$emit("blur"))
    }, null, 42, ta));
  }
}), Lt = /* @__PURE__ */ Q(oa, [["__scopeId", "data-v-0380d08f"]]), sa = { class: "branch-create-form" }, na = { class: "form-actions" }, aa = /* @__PURE__ */ Y({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: u }) {
    const n = u, r = $(""), p = F(() => {
      const m = r.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function f() {
      p.value && (n("create", r.value.trim()), r.value = "");
    }
    function h() {
      r.value = "", n("cancel");
    }
    return (m, a) => (o(), s("div", sa, [
      g(Lt, {
        modelValue: r.value,
        "onUpdate:modelValue": a[0] || (a[0] = (v) => r.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: f,
        onEscape: h
      }, null, 8, ["modelValue"]),
      e("div", na, [
        g(Z, {
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
        g(Z, {
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
}), la = /* @__PURE__ */ Q(aa, [["__scopeId", "data-v-7c500394"]]), ia = { class: "branch-list-item__indicator" }, ra = { class: "branch-list-item__name" }, da = {
  key: 0,
  class: "branch-list-item__actions"
}, ca = {
  key: 0,
  class: "branch-list-item__current-label"
}, ua = /* @__PURE__ */ Y({
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
      class: se(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && u.$emit("click"))
    }, [
      e("span", ia, l(t.isCurrent ? "●" : "○"), 1),
      e("span", ra, l(t.branchName), 1),
      u.$slots.actions || t.showCurrentLabel ? (o(), s("div", da, [
        ue(u.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), s("span", ca, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), ma = /* @__PURE__ */ Q(ua, [["__scopeId", "data-v-c6581a24"]]), va = {
  key: 2,
  class: "branch-list"
}, fa = /* @__PURE__ */ Y({
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
    return (h, m) => (o(), x(Re, null, {
      header: i(() => [
        g(Ne, { title: "BRANCHES" }, {
          actions: i(() => [
            r.value ? c("", !0) : (o(), x(Z, {
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
        r.value ? (o(), x(la, {
          key: 0,
          onCreate: p,
          onCancel: f
        })) : c("", !0),
        t.branches.length === 0 ? (o(), x(Fe, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), s("div", va, [
          (o(!0), s(W, null, ee(t.branches, (a) => (o(), x(ma, {
            key: a.name,
            "branch-name": a.name,
            "is-current": a.is_current
          }, {
            actions: i(() => [
              a.is_current ? c("", !0) : (o(), x(Z, {
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
              a.is_current ? c("", !0) : (o(), x(Z, {
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
}), ga = /* @__PURE__ */ Q(fa, [["__scopeId", "data-v-86784ddd"]]), pa = { class: "commit-list" }, ha = /* @__PURE__ */ Y({
  __name: "CommitList",
  setup(t) {
    return (u, n) => (o(), s("div", pa, [
      ue(u.$slots, "default", {}, void 0, !0)
    ]));
  }
}), ya = /* @__PURE__ */ Q(ha, [["__scopeId", "data-v-8c5ee761"]]), wa = { class: "commit-hash" }, ka = /* @__PURE__ */ Y({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const u = t, n = F(() => u.hash.slice(0, u.length));
    return (r, p) => (o(), s("span", wa, l(n.value), 1));
  }
}), no = /* @__PURE__ */ Q(ka, [["__scopeId", "data-v-7c333cc6"]]), ba = { class: "commit-message" }, _a = { class: "commit-date" }, $a = /* @__PURE__ */ Y({
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
      class: se(["commit-item", { clickable: t.clickable }]),
      onClick: p
    }, [
      g(no, { hash: t.hash }, null, 8, ["hash"]),
      e("span", ba, l(t.message), 1),
      e("span", _a, l(t.relativeDate), 1),
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
}), Ca = /* @__PURE__ */ Q($a, [["__scopeId", "data-v-dd7c621b"]]), xa = /* @__PURE__ */ Y({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (u, n) => (o(), x(Re, null, {
      header: i(() => [
        g(Ne, { title: "HISTORY" })
      ]),
      content: i(() => [
        t.commits.length === 0 ? (o(), x(Fe, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), x(ya, { key: 1 }, {
          default: i(() => [
            (o(!0), s(W, null, ee(t.commits, (r) => (o(), x(Ca, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (p) => u.$emit("select", r)
            }, {
              actions: i(() => [
                g(Z, {
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
}), Sa = /* @__PURE__ */ Q(xa, [["__scopeId", "data-v-981c3c64"]]), Ty = [
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
], Ry = {
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
}, Ia = [
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
], Ny = [
  ...Ia,
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
  async function n(H, de) {
    var Ie;
    if (!((Ie = window.app) != null && Ie.api))
      throw new Error("ComfyUI API not available");
    const me = await window.app.api.fetchApi(H, de);
    if (!me.ok) {
      const tt = await me.json().catch(() => ({}));
      throw new Error(tt.error || tt.message || `Request failed: ${me.status}`);
    }
    return me.json();
  }
  async function r(H = !1) {
    return n(H ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function p(H, de = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: H, allow_issues: de })
    });
  }
  async function f(H = 10, de = 0) {
    return n(`/v2/comfygit/log?limit=${H}&offset=${de}`);
  }
  async function h(H) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: H })
    });
  }
  async function m() {
    return n("/v2/comfygit/branches");
  }
  async function a(H) {
    return n(`/v2/comfygit/commit/${H}`);
  }
  async function v(H, de = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: H, force: de })
    });
  }
  async function b(H, de = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, start_point: de })
    });
  }
  async function d(H, de = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: H, force: de })
    });
  }
  async function I(H, de = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(H)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: de })
    });
  }
  async function _() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const H = await r();
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
  async function z(H) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: H })
    });
  }
  async function w() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function k(H) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function T() {
    return n("/v2/workspace/environments/create_status");
  }
  async function O(H = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${H}`);
  }
  async function L(H) {
    return n(`/v2/workspace/environments/${H}`, {
      method: "DELETE"
    });
  }
  async function R(H = !1) {
    try {
      return n(H ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const de = await r(H), me = [];
      return de.workflows.new.forEach((Ie) => {
        me.push({ name: Ie, status: "new", missing_nodes: 0, missing_models: 0, path: Ie });
      }), de.workflows.modified.forEach((Ie) => {
        me.push({ name: Ie, status: "modified", missing_nodes: 0, missing_models: 0, path: Ie });
      }), de.workflows.synced.forEach((Ie) => {
        me.push({ name: Ie, status: "synced", missing_nodes: 0, missing_models: 0, path: Ie });
      }), me;
    }
  }
  async function G(H) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/details`);
  }
  async function U(H) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/resolve`, {
      method: "POST"
    });
  }
  async function N(H, de, me) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: de, install_models: me })
    });
  }
  async function P(H, de, me) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: de, importance: me })
    });
  }
  async function M() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function S() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function V(H) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(H)}`);
  }
  async function q(H) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function oe(H, de) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: de })
    });
  }
  async function ne(H, de) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: de })
    });
  }
  async function K(H) {
    return n(`/v2/workspace/models/${H}`, {
      method: "DELETE"
    });
  }
  async function X(H) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function D() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function C() {
    return n("/v2/workspace/models/directory");
  }
  async function ae(H) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function te() {
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
  async function xe(H) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function ye(H, de) {
    try {
      const me = new URLSearchParams();
      return H && me.append("level", H), de && me.append("lines", de.toString()), n(`/v2/comfygit/debug/logs?${me}`);
    } catch {
      return [];
    }
  }
  async function ge(H, de) {
    try {
      const me = new URLSearchParams();
      return H && me.append("level", H), de && me.append("lines", de.toString()), n(`/v2/workspace/debug/logs?${me}`);
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
  async function be(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/track-dev`, {
      method: "POST"
    });
  }
  async function pt(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/install`, {
      method: "POST"
    });
  }
  async function ht(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/update`, {
      method: "POST"
    });
  }
  async function yt(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}`, {
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
  async function Ae(H, de, me) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: de, push_url: me })
    });
  }
  async function wt(H) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/fetch`, {
      method: "POST"
    });
  }
  async function ce(H) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/status`);
    } catch {
      return null;
    }
  }
  async function Ue(H = "skip", de = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: H,
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
    getEnvironments: _,
    switchEnvironment: z,
    getSwitchProgress: w,
    createEnvironment: k,
    getCreateProgress: T,
    getComfyUIReleases: O,
    deleteEnvironment: L,
    // Workflow Management
    getWorkflows: R,
    getWorkflowDetails: G,
    resolveWorkflow: U,
    installWorkflowDeps: N,
    setModelImportance: P,
    // Model Management
    getEnvironmentModels: M,
    getWorkspaceModels: S,
    getModelDetails: V,
    openFileLocation: q,
    addModelSource: oe,
    removeModelSource: ne,
    deleteModel: K,
    downloadModel: X,
    scanWorkspaceModels: D,
    getModelsDirectory: C,
    setModelsDirectory: ae,
    // Settings
    getConfig: te,
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
const Ea = { class: "base-modal-header" }, Ma = {
  key: 0,
  class: "base-modal-title"
}, za = { class: "base-modal-body" }, La = {
  key: 0,
  class: "base-modal-loading"
}, Ta = {
  key: 1,
  class: "base-modal-error"
}, Ra = {
  key: 0,
  class: "base-modal-footer"
}, Na = /* @__PURE__ */ Y({
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
    }), (h, m) => (o(), x(ze, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: p
      }, [
        e("div", {
          class: se(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = _e(() => {
          }, ["stop"]))
        }, [
          e("div", Ea, [
            ue(h.$slots, "header", {}, () => [
              t.title ? (o(), s("h3", Ma, l(t.title), 1)) : c("", !0)
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
          e("div", za, [
            t.loading ? (o(), s("div", La, "Loading...")) : t.error ? (o(), s("div", Ta, l(t.error), 1)) : ue(h.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          h.$slots.footer ? (o(), s("div", Ra, [
            ue(h.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), et = /* @__PURE__ */ Q(Na, [["__scopeId", "data-v-2125a0e6"]]), Da = ["type", "disabled"], Oa = {
  key: 0,
  class: "spinner"
}, Ua = /* @__PURE__ */ Y({
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
      class: se(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => u.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", Oa)) : c("", !0),
      ue(u.$slots, "default", {}, void 0, !0)
    ], 10, Da));
  }
}), ie = /* @__PURE__ */ Q(Ua, [["__scopeId", "data-v-f3452606"]]), Pa = {
  key: 0,
  class: "base-title-count"
}, Ba = /* @__PURE__ */ Y({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (u, n) => (o(), x(Vt(`h${t.level}`), {
      class: se(["base-title", t.variant])
    }, {
      default: i(() => [
        ue(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Pa, "(" + l(t.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), xt = /* @__PURE__ */ Q(Ba, [["__scopeId", "data-v-5a01561d"]]), Fa = ["value", "disabled"], Aa = {
  key: 0,
  value: "",
  disabled: ""
}, Va = ["value"], Wa = {
  key: 0,
  class: "base-select-error"
}, Ga = /* @__PURE__ */ Y({
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
      class: se(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: se(["base-select", { error: !!t.error }]),
        onChange: p[0] || (p[0] = (f) => r.$emit("update:modelValue", f.target.value))
      }, [
        t.placeholder ? (o(), s("option", Aa, l(t.placeholder), 1)) : c("", !0),
        (o(!0), s(W, null, ee(t.options, (f) => (o(), s("option", {
          key: u(f),
          value: u(f)
        }, l(n(f)), 9, Va))), 128))
      ], 42, Fa),
      t.error ? (o(), s("span", Wa, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), ja = /* @__PURE__ */ Q(Ga, [["__scopeId", "data-v-7436d745"]]), Ha = { class: "popover-header" }, Ka = { class: "popover-title" }, qa = { class: "popover-content" }, Ja = {
  key: 0,
  class: "popover-actions"
}, Ya = /* @__PURE__ */ Y({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (u, n) => (o(), x(ze, { to: "body" }, [
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
          e("div", Ha, [
            e("h4", Ka, l(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", qa, [
            ue(u.$slots, "content", {}, void 0, !0)
          ]),
          u.$slots.actions ? (o(), s("div", Ja, [
            ue(u.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), Je = /* @__PURE__ */ Q(Ya, [["__scopeId", "data-v-42815ace"]]), Qa = { class: "detail-section" }, Xa = {
  key: 0,
  class: "empty-message"
}, Za = { class: "model-header" }, el = { class: "model-name" }, tl = { class: "model-details" }, ol = { class: "model-row" }, sl = { class: "model-row" }, nl = { class: "label" }, al = {
  key: 0,
  class: "model-row model-row-nodes"
}, ll = { class: "node-list" }, il = ["onClick"], rl = {
  key: 1,
  class: "model-row"
}, dl = { class: "value" }, cl = {
  key: 0,
  class: "model-actions"
}, ul = { class: "detail-section" }, ml = {
  key: 0,
  class: "empty-message"
}, vl = { class: "node-name" }, fl = {
  key: 0,
  class: "node-version"
}, gl = /* @__PURE__ */ Y({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: u }) {
    const n = t, r = u, { getWorkflowDetails: p, setModelImportance: f, installWorkflowDeps: h } = Se(), m = $(null), a = $(!1), v = $(null), b = $(!1), d = $({}), I = $({}), _ = $(!1), z = $(/* @__PURE__ */ new Set()), w = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function k(M) {
      switch (M) {
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
    function T(M) {
      switch (M) {
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
    function O(M) {
      if (!M.loaded_by || M.loaded_by.length === 0) return [];
      const S = M.hash || M.filename;
      return z.value.has(S) ? M.loaded_by : M.loaded_by.slice(0, 3);
    }
    function L(M) {
      return z.value.has(M);
    }
    function R(M) {
      z.value.has(M) ? z.value.delete(M) : z.value.add(M), z.value = new Set(z.value);
    }
    async function G() {
      a.value = !0, v.value = null;
      try {
        m.value = await p(n.workflowName);
      } catch (M) {
        v.value = M instanceof Error ? M.message : "Failed to load workflow details";
      } finally {
        a.value = !1;
      }
    }
    function U(M, S) {
      d.value[M] = S, b.value = !0;
    }
    async function N() {
      if (!b.value) {
        r("close");
        return;
      }
      a.value = !0, v.value = null;
      try {
        for (const [M, S] of Object.entries(d.value))
          await f(n.workflowName, M, S);
        r("refresh"), r("close");
      } catch (M) {
        v.value = M instanceof Error ? M.message : "Failed to save changes";
      } finally {
        a.value = !1;
      }
    }
    async function P(M) {
      I.value[M] = !0, v.value = null;
      try {
        await h(n.workflowName, !0, !1), await G();
      } catch (S) {
        v.value = S instanceof Error ? S.message : "Failed to install node";
      } finally {
        I.value[M] = !1;
      }
    }
    return Ce(G), (M, S) => (o(), s(W, null, [
      g(et, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: a.value,
        error: v.value || void 0,
        onClose: S[5] || (S[5] = (V) => r("close"))
      }, {
        body: i(() => [
          m.value ? (o(), s(W, { key: 0 }, [
            e("section", Qa, [
              g(xt, { variant: "section" }, {
                default: i(() => [
                  y("MODELS USED (" + l(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (o(), s("div", Xa, " No models used in this workflow ")) : c("", !0),
              (o(!0), s(W, null, ee(m.value.models, (V) => (o(), s("div", {
                key: V.hash || V.filename,
                class: "model-card"
              }, [
                e("div", Za, [
                  S[7] || (S[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", el, l(V.filename), 1)
                ]),
                e("div", tl, [
                  e("div", ol, [
                    S[8] || (S[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: se(["value", k(V.status)])
                    }, l(T(V.status)), 3)
                  ]),
                  e("div", sl, [
                    e("span", nl, [
                      S[9] || (S[9] = y(" Importance: ", -1)),
                      g(so, {
                        size: 14,
                        title: "About importance levels",
                        onClick: S[0] || (S[0] = (q) => _.value = !0)
                      })
                    ]),
                    g(ja, {
                      "model-value": d.value[V.filename] || V.importance,
                      options: w,
                      "onUpdate:modelValue": (q) => U(V.filename, q)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  V.loaded_by && V.loaded_by.length > 0 ? (o(), s("div", al, [
                    S[10] || (S[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", ll, [
                      (o(!0), s(W, null, ee(O(V), (q, oe) => (o(), s("div", {
                        key: `${q.node_id}-${oe}`,
                        class: "node-reference"
                      }, l(q.node_type) + " (Node #" + l(q.node_id) + ") ", 1))), 128)),
                      V.loaded_by.length > 3 ? (o(), s("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (q) => R(V.hash || V.filename)
                      }, l(L(V.hash || V.filename) ? "▼ Show less" : `▶ View all (${V.loaded_by.length})`), 9, il)) : c("", !0)
                    ])
                  ])) : c("", !0),
                  V.size_mb ? (o(), s("div", rl, [
                    S[11] || (S[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", dl, l(V.size_mb) + " MB", 1)
                  ])) : c("", !0)
                ]),
                V.status !== "available" ? (o(), s("div", cl, [
                  V.status === "downloadable" ? (o(), x(ie, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: S[1] || (S[1] = (q) => r("resolve"))
                  }, {
                    default: i(() => [...S[12] || (S[12] = [
                      y(" Download ", -1)
                    ])]),
                    _: 1
                  })) : V.status === "path_mismatch" ? (o(), x(ie, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: S[2] || (S[2] = (q) => r("resolve"))
                  }, {
                    default: i(() => [...S[13] || (S[13] = [
                      y(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), x(ie, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: S[3] || (S[3] = (q) => r("resolve"))
                  }, {
                    default: i(() => [...S[14] || (S[14] = [
                      y(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : c("", !0)
              ]))), 128))
            ]),
            e("section", ul, [
              g(xt, { variant: "section" }, {
                default: i(() => [
                  y("NODES USED (" + l(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (o(), s("div", ml, " No custom nodes used in this workflow ")) : c("", !0),
              (o(!0), s(W, null, ee(m.value.nodes, (V) => (o(), s("div", {
                key: V.name,
                class: "node-item"
              }, [
                e("span", {
                  class: se(["node-status", V.status === "installed" ? "installed" : "missing"])
                }, l(V.status === "installed" ? "✓" : "✕"), 3),
                e("span", vl, l(V.name), 1),
                V.version ? (o(), s("span", fl, "v" + l(V.version), 1)) : c("", !0),
                V.status === "missing" ? (o(), x(ie, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: I.value[V.name],
                  onClick: (q) => P(V.name),
                  class: "node-install-btn"
                }, {
                  default: i(() => [...S[15] || (S[15] = [
                    y(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : c("", !0)
              ]))), 128))
            ])
          ], 64)) : c("", !0)
        ]),
        footer: i(() => [
          g(ie, {
            variant: "secondary",
            onClick: S[4] || (S[4] = (V) => r("close"))
          }, {
            default: i(() => [...S[16] || (S[16] = [
              y(" Close ", -1)
            ])]),
            _: 1
          }),
          b.value ? (o(), x(ie, {
            key: 0,
            variant: "primary",
            onClick: N
          }, {
            default: i(() => [...S[17] || (S[17] = [
              y(" Save Changes ", -1)
            ])]),
            _: 1
          })) : c("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      g(Je, {
        show: _.value,
        title: "Model Importance Levels",
        onClose: S[6] || (S[6] = (V) => _.value = !1)
      }, {
        content: i(() => [...S[18] || (S[18] = [
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
}), pl = /* @__PURE__ */ Q(gl, [["__scopeId", "data-v-0b14d32e"]]), pe = to({
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
    await hl(t), t.status = "completed", t.progress = 100;
  } catch (u) {
    t.status = "failed", t.error = u instanceof Error ? u.message : "Download failed", t.retries++;
  } finally {
    pe.status = "idle", ut();
  }
}
async function hl(t) {
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
                const _ = t.size - t.downloaded;
                t.eta = _ / t.speed;
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
async function yl() {
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
    for (const T of k) {
      if (pe.items.some(
        (R) => R.url === T.url && R.targetPath === T.targetPath && ["queued", "downloading", "paused", "completed"].includes(R.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${T.filename}`);
        continue;
      }
      const L = {
        id: lo(),
        workflow: T.workflow,
        filename: T.filename,
        url: T.url,
        targetPath: T.targetPath,
        size: T.size || 0,
        type: T.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      pe.items.push(L);
    }
    pe.status === "idle" && ut();
  }
  async function u(k) {
    const T = Ut(k);
    if (T) {
      if (T.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(T.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        We && (We.close(), We = null), T.status = "failed", T.error = "Cancelled by user", pe.status = "idle", ut();
      } else if (T.status === "queued") {
        const O = pe.items.findIndex((L) => L.id === k);
        O >= 0 && pe.items.splice(O, 1);
      }
    }
  }
  function n(k) {
    const T = Ut(k);
    !T || T.status !== "failed" || (T.status = "queued", T.error = void 0, T.progress = 0, T.downloaded = 0, pe.status === "idle" && ut());
  }
  function r(k) {
    const T = Ut(k);
    !T || T.status !== "paused" || (T.status = "queued", pe.status === "idle" && ut());
  }
  function p() {
    const k = pe.items.filter((T) => T.status === "paused");
    for (const T of k)
      T.status = "queued";
    pe.status === "idle" && ut();
  }
  function f(k) {
    const T = pe.items.findIndex((O) => O.id === k);
    T >= 0 && ["completed", "failed", "paused"].includes(pe.items[T].status) && pe.items.splice(T, 1);
  }
  function h() {
    pe.items = pe.items.filter((k) => k.status !== "completed");
  }
  function m() {
    pe.items = pe.items.filter((k) => k.status !== "failed");
  }
  const a = F(
    () => pe.items.find((k) => k.status === "downloading")
  ), v = F(
    () => pe.items.filter((k) => k.status === "queued")
  ), b = F(
    () => pe.items.filter((k) => k.status === "completed")
  ), d = F(
    () => pe.items.filter((k) => k.status === "failed")
  ), I = F(
    () => pe.items.filter((k) => k.status === "paused")
  ), _ = F(() => pe.items.length > 0), z = F(
    () => pe.items.filter((k) => k.status === "queued" || k.status === "downloading").length
  ), w = F(
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
    hasItems: _,
    activeCount: z,
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
    loadPendingDownloads: yl
  };
}
function wl() {
  const t = $(null), u = $(null), n = $([]), r = $([]), p = $(!1), f = $(null);
  async function h(O, L) {
    var G;
    if (!((G = window.app) != null && G.api))
      throw new Error("ComfyUI API not available");
    const R = await window.app.api.fetchApi(O, L);
    if (!R.ok) {
      const U = await R.json().catch(() => ({})), N = U.error || U.message || `Request failed: ${R.status}`;
      throw new Error(N);
    }
    return R.json();
  }
  async function m(O) {
    p.value = !0, f.value = null;
    try {
      let L;
      return kt() || (L = await h(
        `/v2/comfygit/workflow/${O}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = L, L;
    } catch (L) {
      const R = L instanceof Error ? L.message : "Unknown error occurred";
      throw f.value = R, L;
    } finally {
      p.value = !1;
    }
  }
  async function a(O, L, R, G) {
    p.value = !0, f.value = null;
    try {
      let U;
      if (!kt()) {
        const N = Object.fromEntries(L), P = Object.fromEntries(R), M = G ? Array.from(G) : [];
        U = await h(
          `/v2/comfygit/workflow/${O}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: N,
              model_choices: P,
              skipped_packages: M
            })
          }
        );
      }
      return u.value = U, U;
    } catch (U) {
      const N = U instanceof Error ? U.message : "Unknown error occurred";
      throw f.value = N, U;
    } finally {
      p.value = !1;
    }
  }
  async function v(O, L = 10) {
    p.value = !0, f.value = null;
    try {
      let R;
      return kt() || (R = await h(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: O, limit: L })
        }
      )), n.value = R.results, R.results;
    } catch (R) {
      const G = R instanceof Error ? R.message : "Unknown error occurred";
      throw f.value = G, R;
    } finally {
      p.value = !1;
    }
  }
  async function b(O, L = 10) {
    p.value = !0, f.value = null;
    try {
      let R;
      return kt() || (R = await h(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: O, limit: L })
        }
      )), r.value = R.results, R.results;
    } catch (R) {
      const G = R instanceof Error ? R.message : "Unknown error occurred";
      throw f.value = G, R;
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
  async function _(O) {
    d.phase = "installing", d.nodesInstalled = [], d.installError = void 0, d.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return kt(), await z(O);
    } catch (L) {
      const R = L instanceof Error ? L.message : "Failed to install nodes";
      throw d.installError = R, L;
    }
  }
  async function z(O) {
    var R;
    const L = await h(
      `/v2/comfygit/workflow/${O}/install`,
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
      const G = new Map(((R = L.failed) == null ? void 0 : R.map((U) => [U.node_id, U.error])) || []);
      for (let U = 0; U < d.nodesToInstall.length; U++) {
        const N = d.nodesToInstall[U], P = G.get(N);
        d.nodeInstallProgress.completedNodes.push({
          node_id: N,
          success: !P,
          error: P
        });
      }
    }
    return d.nodesInstalled = L.nodes_installed, d.needsRestart = L.nodes_installed.length > 0, L.failed && L.failed.length > 0 && (d.installError = `${L.failed.length} package(s) failed to install`), L;
  }
  async function w(O, L, R) {
    I(), d.phase = "resolving", f.value = null;
    const G = Object.fromEntries(L), U = Object.fromEntries(R);
    try {
      const N = await fetch(`/v2/comfygit/workflow/${O}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: G,
          model_choices: U
        })
      });
      if (!N.ok)
        throw new Error(`Request failed: ${N.status}`);
      if (!N.body)
        throw new Error("No response body");
      const P = N.body.getReader(), M = new TextDecoder();
      let S = "";
      for (; ; ) {
        const { done: V, value: q } = await P.read();
        if (V) break;
        S += M.decode(q, { stream: !0 });
        const oe = S.split(`

`);
        S = oe.pop() || "";
        for (const ne of oe) {
          if (!ne.trim()) continue;
          const K = ne.split(`
`);
          let X = "", D = "";
          for (const C of K)
            C.startsWith("event: ") ? X = C.slice(7) : C.startsWith("data: ") && (D = C.slice(6));
          if (D)
            try {
              const C = JSON.parse(D);
              k(X, C);
            } catch (C) {
              console.warn("Failed to parse SSE event:", C);
            }
        }
      }
    } catch (N) {
      const P = N instanceof Error ? N.message : "Unknown error occurred";
      throw f.value = P, d.error = P, d.phase = "error", N;
    }
  }
  function k(O, L) {
    switch (O) {
      case "batch_start":
        d.phase = "downloading", d.totalFiles = L.total;
        break;
      case "file_start":
        d.currentFile = L.filename, d.currentFileIndex = L.index, d.bytesDownloaded = 0, d.bytesTotal = void 0;
        break;
      case "file_progress":
        d.bytesDownloaded = L.downloaded, d.bytesTotal = L.total;
        break;
      case "file_complete":
        d.completedFiles.push({
          filename: L.filename,
          success: L.success,
          error: L.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        d.nodesToInstall = L.nodes_to_install || [], L.download_results && (d.completedFiles = L.download_results), d.phase = "complete";
        break;
      case "error":
        d.error = L.message, d.phase = "error", f.value = L.message;
        break;
    }
  }
  function T(O, L) {
    const { addToQueue: R } = Et(), G = L.filter((U) => U.url && U.target_path).map((U) => ({
      workflow: O,
      filename: U.filename,
      url: U.url,
      targetPath: U.target_path,
      size: U.size || 0,
      type: "model"
    }));
    return G.length > 0 && R(G), G.length;
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
    installNodes: _,
    searchNodes: v,
    searchModels: b,
    resetProgress: I,
    queueModelDownloads: T
  };
}
const kl = { class: "resolution-stepper" }, bl = { class: "stepper-header" }, _l = ["onClick"], $l = {
  key: 0,
  class: "step-icon"
}, Cl = {
  key: 1,
  class: "step-number"
}, xl = { class: "step-label" }, Sl = {
  key: 0,
  class: "step-connector"
}, Il = { class: "stepper-content" }, El = /* @__PURE__ */ Y({
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
    return (v, b) => (o(), s("div", kl, [
      e("div", bl, [
        (o(!0), s(W, null, ee(t.steps, (d, I) => (o(), s("div", {
          key: d.id,
          class: se(["step", {
            active: t.currentStep === d.id,
            completed: p(d.id),
            "in-progress": f(d.id),
            disabled: m(d.id)
          }]),
          onClick: (_) => a(d.id)
        }, [
          e("div", {
            class: se(["step-indicator", h(d.id)])
          }, [
            p(d.id) ? (o(), s("span", $l, "✓")) : (o(), s("span", Cl, l(I + 1), 1))
          ], 2),
          e("div", xl, l(d.label), 1),
          I < t.steps.length - 1 ? (o(), s("div", Sl)) : c("", !0)
        ], 10, _l))), 128))
      ]),
      e("div", Il, [
        ue(v.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Ml = /* @__PURE__ */ Q(El, [["__scopeId", "data-v-2a7b3af8"]]), zl = /* @__PURE__ */ Y({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const u = t, n = F(() => u.confidence >= 0.9 ? "high" : u.confidence >= 0.7 ? "medium" : "low"), r = F(() => `confidence-${n.value}`), p = F(() => u.showPercentage ? `${Math.round(u.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (f, h) => (o(), s("span", {
      class: se(["confidence-badge", r.value, t.size])
    }, l(p.value), 3));
  }
}), Ht = /* @__PURE__ */ Q(zl, [["__scopeId", "data-v-17ec4b80"]]), Ll = { class: "node-info" }, Tl = { class: "node-info-text" }, Rl = { class: "item-body" }, Nl = {
  key: 0,
  class: "resolved-state"
}, Dl = {
  key: 1,
  class: "multiple-options"
}, Ol = { class: "options-list" }, Ul = ["onClick"], Pl = ["name", "value", "checked", "onChange"], Bl = { class: "option-content" }, Fl = { class: "option-header" }, Al = { class: "option-package-id" }, Vl = {
  key: 0,
  class: "option-title"
}, Wl = { class: "option-meta" }, Gl = {
  key: 0,
  class: "installed-badge"
}, jl = { class: "action-buttons" }, Hl = {
  key: 2,
  class: "unresolved"
}, Kl = { class: "action-buttons" }, ql = /* @__PURE__ */ Y({
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
    const n = t, r = u, p = F(() => !!n.choice);
    F(() => {
      var m;
      return (m = n.choice) == null ? void 0 : m.action;
    }), F(() => {
      var m;
      return (m = n.choice) == null ? void 0 : m.package_id;
    });
    const f = F(() => {
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
      class: se(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: p.value }])
    }, [
      e("div", Ll, [
        e("span", Tl, [
          a[7] || (a[7] = y("Node type: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: se(["status-badge", f.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", Rl, [
        p.value ? (o(), s("div", Nl, [
          g(ie, {
            variant: "ghost",
            size: "sm",
            onClick: a[0] || (a[0] = (v) => r("clear-choice"))
          }, {
            default: i(() => [...a[8] || (a[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", Dl, [
          a[12] || (a[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Ol, [
            (o(!0), s(W, null, ee(t.options, (v, b) => (o(), s("label", {
              key: v.package_id,
              class: se(["option-card", { selected: t.selectedOptionIndex === b }]),
              onClick: (d) => h(b)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: b,
                checked: t.selectedOptionIndex === b,
                onChange: (d) => h(b)
              }, null, 40, Pl),
              e("div", Bl, [
                e("div", Fl, [
                  e("span", Al, l(v.package_id), 1),
                  g(Ht, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (o(), s("div", Vl, l(v.title), 1)) : c("", !0),
                e("div", Wl, [
                  v.is_installed ? (o(), s("span", Gl, "Already Installed")) : c("", !0)
                ])
              ])
            ], 10, Ul))), 128))
          ]),
          e("div", jl, [
            g(ie, {
              variant: "ghost",
              size: "sm",
              onClick: a[1] || (a[1] = (v) => r("search"))
            }, {
              default: i(() => [...a[9] || (a[9] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "ghost",
              size: "sm",
              onClick: a[2] || (a[2] = (v) => r("manual-entry"))
            }, {
              default: i(() => [...a[10] || (a[10] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
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
        ])) : (o(), s("div", Hl, [
          a[16] || (a[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", Kl, [
            g(ie, {
              variant: "primary",
              size: "sm",
              onClick: a[4] || (a[4] = (v) => r("search"))
            }, {
              default: i(() => [...a[13] || (a[13] = [
                y(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: a[5] || (a[5] = (v) => r("manual-entry"))
            }, {
              default: i(() => [...a[14] || (a[14] = [
                y(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
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
}), Jl = /* @__PURE__ */ Q(ql, [["__scopeId", "data-v-e02629e7"]]), Yl = { class: "item-navigator" }, Ql = { class: "nav-item-info" }, Xl = ["title"], Zl = { class: "nav-controls" }, ei = { class: "nav-arrows" }, ti = ["disabled"], oi = ["disabled"], si = { class: "nav-position" }, ni = /* @__PURE__ */ Y({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: u }) {
    const n = u;
    return (r, p) => (o(), s("div", Yl, [
      e("div", Ql, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, l(t.itemName), 9, Xl)
      ]),
      e("div", Zl, [
        e("div", ei, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: p[0] || (p[0] = (f) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, ti),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: p[1] || (p[1] = (f) => n("next")),
            title: "Next item"
          }, " → ", 8, oi)
        ]),
        e("span", si, l(t.currentIndex + 1) + "/" + l(t.totalItems), 1)
      ])
    ]));
  }
}), io = /* @__PURE__ */ Q(ni, [["__scopeId", "data-v-74af7920"]]), ai = ["type", "value", "placeholder", "disabled"], li = {
  key: 0,
  class: "base-input-error"
}, ii = /* @__PURE__ */ Y({
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
      class: se(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: se(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          n[1] || (n[1] = Ze((r) => u.$emit("enter"), ["enter"])),
          n[2] || (n[2] = Ze((r) => u.$emit("escape"), ["escape"]))
        ]
      }, null, 42, ai),
      t.error ? (o(), s("span", li, l(t.error), 1)) : c("", !0)
    ], 2));
  }
}), Be = /* @__PURE__ */ Q(ii, [["__scopeId", "data-v-9ba02cdc"]]), ri = { class: "node-resolution-step" }, di = {
  key: 0,
  class: "auto-resolved-section"
}, ci = { class: "section-header" }, ui = { class: "stat-badge" }, mi = { class: "resolved-packages-list" }, vi = { class: "package-info" }, fi = { class: "package-id" }, gi = { class: "node-count" }, pi = { class: "package-actions" }, hi = {
  key: 0,
  class: "status-badge install"
}, yi = {
  key: 1,
  class: "status-badge skip"
}, wi = ["onClick"], ki = {
  key: 1,
  class: "section-divider"
}, bi = { class: "step-header" }, _i = { class: "stat-badge" }, $i = {
  key: 1,
  class: "step-body"
}, Ci = {
  key: 3,
  class: "empty-state"
}, xi = { class: "node-search-modal" }, Si = { class: "node-modal-body" }, Ii = {
  key: 0,
  class: "node-search-results"
}, Ei = ["onClick"], Mi = { class: "node-result-header" }, zi = { class: "node-result-package-id" }, Li = {
  key: 0,
  class: "node-result-description"
}, Ti = {
  key: 1,
  class: "node-no-results"
}, Ri = {
  key: 2,
  class: "node-searching"
}, Ni = { class: "node-manual-entry-modal" }, Di = { class: "node-modal-body" }, Oi = { class: "node-modal-actions" }, Ui = /* @__PURE__ */ Y({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: u }) {
    const n = t, r = u, p = $(0), f = $(!1), h = $(!1), m = $(""), a = $(""), v = $([]), b = $(!1), d = F(() => n.nodes[p.value]), I = F(() => n.nodes.filter((ne) => n.nodeChoices.has(ne.node_type)).length), _ = F(() => n.autoResolvedPackages.filter((ne) => !n.skippedPackages.has(ne.package_id)).length);
    function z(ne) {
      return n.skippedPackages.has(ne);
    }
    function w(ne) {
      r("package-skip", ne);
    }
    const k = F(() => {
      var K;
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
      return (K = d.value.options) != null && K.length ? "ambiguous" : "not-found";
    }), T = F(() => {
      var K;
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
      return (K = d.value.options) != null && K.length ? `${d.value.options.length} matches` : "Not Found";
    });
    function O(ne) {
      ne >= 0 && ne < n.nodes.length && (p.value = ne);
    }
    function L() {
      d.value && r("mark-optional", d.value.node_type);
    }
    function R() {
      d.value && r("skip", d.value.node_type);
    }
    function G(ne) {
      d.value && r("option-selected", d.value.node_type, ne);
    }
    function U() {
      d.value && r("clear-choice", d.value.node_type);
    }
    function N() {
      d.value && (m.value = d.value.node_type, f.value = !0);
    }
    function P() {
      a.value = "", h.value = !0;
    }
    function M() {
      f.value = !1, m.value = "", v.value = [];
    }
    function S() {
      h.value = !1, a.value = "";
    }
    function V() {
      b.value = !0, setTimeout(() => {
        b.value = !1;
      }, 300);
    }
    function q(ne) {
      d.value && (r("manual-entry", d.value.node_type, ne.package_id), M());
    }
    function oe() {
      !d.value || !a.value.trim() || (r("manual-entry", d.value.node_type, a.value.trim()), S());
    }
    return (ne, K) => {
      var X, D;
      return o(), s("div", ri, [
        t.autoResolvedPackages.length > 0 ? (o(), s("div", di, [
          e("div", ci, [
            K[4] || (K[4] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", ui, l(_.value) + "/" + l(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", mi, [
            (o(!0), s(W, null, ee(t.autoResolvedPackages, (C) => (o(), s("div", {
              key: C.package_id,
              class: "resolved-package-item"
            }, [
              e("div", vi, [
                e("code", fi, l(C.package_id), 1),
                e("span", gi, l(C.node_types_count) + " node type" + l(C.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", pi, [
                z(C.package_id) ? (o(), s("span", yi, " SKIPPED ")) : (o(), s("span", hi, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (ae) => w(C.package_id)
                }, l(z(C.package_id) ? "Include" : "Skip"), 9, wi)
              ])
            ]))), 128))
          ])
        ])) : c("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (o(), s("div", ki)) : c("", !0),
        t.nodes.length > 0 ? (o(), s(W, { key: 2 }, [
          e("div", bi, [
            K[5] || (K[5] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", _i, l(I.value) + "/" + l(t.nodes.length) + " resolved", 1)
          ]),
          d.value ? (o(), x(io, {
            key: 0,
            "item-name": d.value.node_type,
            "current-index": p.value,
            "total-items": t.nodes.length,
            onPrev: K[0] || (K[0] = (C) => O(p.value - 1)),
            onNext: K[1] || (K[1] = (C) => O(p.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
          d.value ? (o(), s("div", $i, [
            g(Jl, {
              "node-type": d.value.node_type,
              "has-multiple-options": !!((X = d.value.options) != null && X.length),
              options: d.value.options,
              choice: (D = t.nodeChoices) == null ? void 0 : D.get(d.value.node_type),
              status: k.value,
              "status-label": T.value,
              onMarkOptional: L,
              onSkip: R,
              onManualEntry: P,
              onSearch: N,
              onOptionSelected: G,
              onClearChoice: U
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
          ])) : c("", !0)
        ], 64)) : c("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (o(), s("div", Ci, [...K[6] || (K[6] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : c("", !0),
        (o(), x(ze, { to: "body" }, [
          f.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: _e(M, ["self"])
          }, [
            e("div", xi, [
              e("div", { class: "node-modal-header" }, [
                K[7] || (K[7] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: M
                }, "✕")
              ]),
              e("div", Si, [
                g(Be, {
                  modelValue: m.value,
                  "onUpdate:modelValue": K[2] || (K[2] = (C) => m.value = C),
                  placeholder: "Search by node type, package name...",
                  onInput: V
                }, null, 8, ["modelValue"]),
                v.value.length > 0 ? (o(), s("div", Ii, [
                  (o(!0), s(W, null, ee(v.value, (C) => (o(), s("div", {
                    key: C.package_id,
                    class: "node-search-result-item",
                    onClick: (ae) => q(C)
                  }, [
                    e("div", Mi, [
                      e("code", zi, l(C.package_id), 1),
                      C.match_confidence ? (o(), x(Ht, {
                        key: 0,
                        confidence: C.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : c("", !0)
                    ]),
                    C.description ? (o(), s("div", Li, l(C.description), 1)) : c("", !0)
                  ], 8, Ei))), 128))
                ])) : m.value && !b.value ? (o(), s("div", Ti, ' No packages found matching "' + l(m.value) + '" ', 1)) : c("", !0),
                b.value ? (o(), s("div", Ri, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), x(ze, { to: "body" }, [
          h.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: _e(S, ["self"])
          }, [
            e("div", Ni, [
              e("div", { class: "node-modal-header" }, [
                K[8] || (K[8] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: S
                }, "✕")
              ]),
              e("div", Di, [
                g(Be, {
                  modelValue: a.value,
                  "onUpdate:modelValue": K[3] || (K[3] = (C) => a.value = C),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Oi, [
                  g(ie, {
                    variant: "secondary",
                    onClick: S
                  }, {
                    default: i(() => [...K[9] || (K[9] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  g(ie, {
                    variant: "primary",
                    disabled: !a.value.trim(),
                    onClick: oe
                  }, {
                    default: i(() => [...K[10] || (K[10] = [
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
}), Pi = /* @__PURE__ */ Q(Ui, [["__scopeId", "data-v-6474069a"]]), Bi = { class: "node-info" }, Fi = { class: "node-info-text" }, Ai = { class: "item-body" }, Vi = {
  key: 0,
  class: "resolved-state"
}, Wi = {
  key: 1,
  class: "multiple-options"
}, Gi = { class: "options-list" }, ji = ["onClick"], Hi = ["name", "value", "checked", "onChange"], Ki = { class: "option-content" }, qi = { class: "option-header" }, Ji = { class: "option-filename" }, Yi = { class: "option-meta" }, Qi = { class: "option-size" }, Xi = { class: "option-category" }, Zi = { class: "option-path" }, er = { class: "action-buttons" }, tr = {
  key: 2,
  class: "unresolved"
}, or = { class: "action-buttons" }, sr = /* @__PURE__ */ Y({
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
    const n = t, r = u, p = F(() => !!n.choice);
    F(() => {
      var a;
      return (a = n.choice) == null ? void 0 : a.action;
    }), F(() => {
      var a, v;
      return ((v = (a = n.choice) == null ? void 0 : a.selected_model) == null ? void 0 : v.filename) || "selected";
    });
    const f = F(() => {
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
      class: se(["model-resolution-item", { resolved: p.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", Bi, [
        e("span", Fi, [
          v[7] || (v[7] = y("Used by: ", -1)),
          e("code", null, l(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: se(["status-badge", f.value])
        }, l(t.statusLabel), 3)) : c("", !0)
      ]),
      e("div", Ai, [
        p.value ? (o(), s("div", Vi, [
          g(ie, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (b) => r("clear-choice"))
          }, {
            default: i(() => [...v[8] || (v[8] = [
              y(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", Wi, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Gi, [
            (o(!0), s(W, null, ee(t.options, (b, d) => (o(), s("label", {
              key: b.model.hash,
              class: se(["option-card", { selected: t.selectedOptionIndex === d }]),
              onClick: (I) => h(d)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: d,
                checked: t.selectedOptionIndex === d,
                onChange: (I) => h(d)
              }, null, 40, Hi),
              e("div", Ki, [
                e("div", qi, [
                  e("span", Ji, l(b.model.filename), 1),
                  g(Ht, {
                    confidence: b.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Yi, [
                  e("span", Qi, l(m(b.model.size)), 1),
                  e("span", Xi, l(b.model.category), 1)
                ]),
                e("div", Zi, l(b.model.relative_path), 1)
              ])
            ], 10, ji))), 128))
          ]),
          e("div", er, [
            g(ie, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (b) => r("search"))
            }, {
              default: i(() => [...v[9] || (v[9] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (b) => r("download-url"))
            }, {
              default: i(() => [...v[10] || (v[10] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
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
        ])) : (o(), s("div", tr, [
          v[16] || (v[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", or, [
            g(ie, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (b) => r("search"))
            }, {
              default: i(() => [...v[13] || (v[13] = [
                y(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (b) => r("download-url"))
            }, {
              default: i(() => [...v[14] || (v[14] = [
                y(" Download URL ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
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
}), nr = /* @__PURE__ */ Q(sr, [["__scopeId", "data-v-8a82fefa"]]), ar = { class: "model-resolution-step" }, lr = { class: "step-header" }, ir = { class: "step-info" }, rr = { class: "step-title" }, dr = { class: "step-description" }, cr = { class: "stat-badge" }, ur = {
  key: 1,
  class: "step-body"
}, mr = {
  key: 2,
  class: "empty-state"
}, vr = { class: "model-search-modal" }, fr = { class: "model-modal-body" }, gr = {
  key: 0,
  class: "model-search-results"
}, pr = ["onClick"], hr = { class: "model-result-header" }, yr = { class: "model-result-filename" }, wr = { class: "model-result-meta" }, kr = { class: "model-result-category" }, br = { class: "model-result-size" }, _r = {
  key: 0,
  class: "model-result-path"
}, $r = {
  key: 1,
  class: "model-no-results"
}, Cr = {
  key: 2,
  class: "model-searching"
}, xr = { class: "model-download-url-modal" }, Sr = { class: "model-modal-body" }, Ir = { class: "model-input-group" }, Er = { class: "model-input-group" }, Mr = { class: "model-modal-actions" }, zr = /* @__PURE__ */ Y({
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
    function r(D) {
      var C;
      return D && ((C = n[D]) == null ? void 0 : C[0]) || null;
    }
    const p = t, f = u, h = $(0), m = $(!1), a = $(!1), v = $(""), b = $(""), d = $(""), I = $([]), _ = $(!1), z = F(() => p.models[h.value]), w = F(() => p.models.some((D) => D.is_download_intent)), k = F(() => p.models.filter(
      (D) => p.modelChoices.has(D.filename) || D.is_download_intent
    ).length), T = F(() => {
      var C;
      if (!z.value) return "";
      const D = r((C = z.value.reference) == null ? void 0 : C.node_type);
      return D ? `${D}/${z.value.filename}` : "";
    }), O = F(() => {
      var C;
      if (!z.value) return "not-found";
      const D = p.modelChoices.get(z.value.filename);
      if (D)
        switch (D.action) {
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
    }), L = F(() => {
      var C, ae;
      if (!z.value) return;
      const D = p.modelChoices.get(z.value.filename);
      if (D)
        switch (D.action) {
          case "select":
            return (C = D.selected_model) != null && C.filename ? `→ ${D.selected_model.filename}` : "Selected";
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
    function R(D) {
      D >= 0 && D < p.models.length && (h.value = D);
    }
    function G() {
      z.value && f("mark-optional", z.value.filename);
    }
    function U() {
      z.value && f("skip", z.value.filename);
    }
    function N(D) {
      z.value && f("option-selected", z.value.filename, D);
    }
    function P() {
      z.value && f("clear-choice", z.value.filename);
    }
    function M() {
      z.value && (v.value = z.value.filename, m.value = !0);
    }
    function S() {
      z.value && (b.value = z.value.download_source || "", d.value = z.value.target_path || T.value, a.value = !0);
    }
    function V() {
      m.value = !1, v.value = "", I.value = [];
    }
    function q() {
      a.value = !1, b.value = "", d.value = "";
    }
    function oe() {
      _.value = !0, setTimeout(() => {
        _.value = !1;
      }, 300);
    }
    function ne(D) {
      z.value && V();
    }
    function K() {
      !z.value || !b.value.trim() || (f("download-url", z.value.filename, b.value.trim(), d.value.trim() || void 0), q());
    }
    function X(D) {
      if (!D) return "Unknown";
      const C = D / (1024 * 1024 * 1024);
      return C >= 1 ? `${C.toFixed(2)} GB` : `${(D / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (D, C) => {
      var ae, te, xe;
      return o(), s("div", ar, [
        e("div", lr, [
          e("div", ir, [
            e("h3", rr, l(w.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", dr, l(w.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", cr, l(k.value) + "/" + l(t.models.length) + " resolved", 1)
        ]),
        z.value ? (o(), x(io, {
          key: 0,
          "item-name": z.value.filename,
          "current-index": h.value,
          "total-items": t.models.length,
          onPrev: C[0] || (C[0] = (ye) => R(h.value - 1)),
          onNext: C[1] || (C[1] = (ye) => R(h.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : c("", !0),
        z.value ? (o(), s("div", ur, [
          g(nr, {
            filename: z.value.filename,
            "node-type": ((ae = z.value.reference) == null ? void 0 : ae.node_type) || "Unknown",
            "has-multiple-options": !!((te = z.value.options) != null && te.length),
            options: z.value.options,
            choice: (xe = t.modelChoices) == null ? void 0 : xe.get(z.value.filename),
            status: O.value,
            "status-label": L.value,
            onMarkOptional: G,
            onSkip: U,
            onDownloadUrl: S,
            onSearch: M,
            onOptionSelected: N,
            onClearChoice: P
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), s("div", mr, [...C[5] || (C[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), x(ze, { to: "body" }, [
          m.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: _e(V, ["self"])
          }, [
            e("div", vr, [
              e("div", { class: "model-modal-header" }, [
                C[6] || (C[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: V
                }, "✕")
              ]),
              e("div", fr, [
                g(Be, {
                  modelValue: v.value,
                  "onUpdate:modelValue": C[2] || (C[2] = (ye) => v.value = ye),
                  placeholder: "Search by filename, category...",
                  onInput: oe
                }, null, 8, ["modelValue"]),
                I.value.length > 0 ? (o(), s("div", gr, [
                  (o(!0), s(W, null, ee(I.value, (ye) => (o(), s("div", {
                    key: ye.hash,
                    class: "model-search-result-item",
                    onClick: (ge) => ne()
                  }, [
                    e("div", hr, [
                      e("code", yr, l(ye.filename), 1)
                    ]),
                    e("div", wr, [
                      e("span", kr, l(ye.category), 1),
                      e("span", br, l(X(ye.size)), 1)
                    ]),
                    ye.relative_path ? (o(), s("div", _r, l(ye.relative_path), 1)) : c("", !0)
                  ], 8, pr))), 128))
                ])) : v.value && !_.value ? (o(), s("div", $r, ' No models found matching "' + l(v.value) + '" ', 1)) : c("", !0),
                _.value ? (o(), s("div", Cr, "Searching...")) : c("", !0)
              ])
            ])
          ])) : c("", !0)
        ])),
        (o(), x(ze, { to: "body" }, [
          a.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: _e(q, ["self"])
          }, [
            e("div", xr, [
              e("div", { class: "model-modal-header" }, [
                C[7] || (C[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: q
                }, "✕")
              ]),
              e("div", Sr, [
                e("div", Ir, [
                  C[8] || (C[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  g(Be, {
                    modelValue: b.value,
                    "onUpdate:modelValue": C[3] || (C[3] = (ye) => b.value = ye),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Er, [
                  C[9] || (C[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  g(Be, {
                    modelValue: d.value,
                    "onUpdate:modelValue": C[4] || (C[4] = (ye) => d.value = ye),
                    placeholder: T.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", Mr, [
                  g(ie, {
                    variant: "secondary",
                    onClick: q
                  }, {
                    default: i(() => [...C[10] || (C[10] = [
                      y("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  g(ie, {
                    variant: "primary",
                    disabled: !b.value.trim() || !d.value.trim(),
                    onClick: K
                  }, {
                    default: i(() => [...C[11] || (C[11] = [
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
}), Lr = /* @__PURE__ */ Q(zr, [["__scopeId", "data-v-c6acbada"]]), Tr = { class: "applying-step" }, Rr = {
  key: 0,
  class: "phase-content"
}, Nr = {
  key: 1,
  class: "phase-content"
}, Dr = { class: "phase-description" }, Or = { class: "overall-progress" }, Ur = { class: "progress-bar" }, Pr = { class: "progress-label" }, Br = { class: "install-list" }, Fr = { class: "install-icon" }, Ar = { key: 0 }, Vr = {
  key: 1,
  class: "spinner"
}, Wr = { key: 2 }, Gr = { key: 3 }, jr = {
  key: 0,
  class: "install-error"
}, Hr = {
  key: 2,
  class: "phase-content"
}, Kr = { class: "phase-header" }, qr = { class: "phase-title" }, Jr = { class: "completion-summary" }, Yr = {
  key: 0,
  class: "summary-item success"
}, Qr = { class: "summary-text" }, Xr = {
  key: 1,
  class: "summary-item error"
}, Zr = { class: "summary-text" }, ed = {
  key: 2,
  class: "failed-list"
}, td = { class: "failed-node-id" }, od = { class: "failed-error" }, sd = {
  key: 4,
  class: "summary-item success"
}, nd = {
  key: 5,
  class: "restart-prompt"
}, ad = {
  key: 3,
  class: "phase-content error"
}, ld = { class: "error-message" }, id = /* @__PURE__ */ Y({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const u = t, n = F(() => {
      var v, b;
      const m = ((v = u.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || u.progress.nodesToInstall.length;
      if (!m) return 0;
      const a = ((b = u.progress.nodeInstallProgress) == null ? void 0 : b.completedNodes.length) ?? 0;
      return Math.round(a / m * 100);
    }), r = F(() => {
      var m;
      return ((m = u.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.filter((a) => !a.success)) || [];
    }), p = F(() => r.value.length > 0);
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
      return o(), s("div", Tr, [
        t.progress.phase === "resolving" ? (o(), s("div", Rr, [...a[2] || (a[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (o(), s("div", Nr, [
          a[3] || (a[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", Dr, " Installing " + l((((v = t.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + l(((b = t.progress.nodeInstallProgress) == null ? void 0 : b.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Or, [
            e("div", Ur, [
              e("div", {
                class: "progress-fill",
                style: qe({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Pr, l(((d = t.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.length) ?? 0) + " / " + l(((I = t.progress.nodeInstallProgress) == null ? void 0 : I.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Br, [
            (o(!0), s(W, null, ee(t.progress.nodesToInstall, (_, z) => (o(), s("div", {
              key: _,
              class: se(["install-item", f(_, z)])
            }, [
              e("span", Fr, [
                f(_, z) === "pending" ? (o(), s("span", Ar, "○")) : f(_, z) === "installing" ? (o(), s("span", Vr, "◌")) : f(_, z) === "complete" ? (o(), s("span", Wr, "✓")) : f(_, z) === "failed" ? (o(), s("span", Gr, "✗")) : c("", !0)
              ]),
              e("code", null, l(_), 1),
              h(_) ? (o(), s("span", jr, l(h(_)), 1)) : c("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (o(), s("div", Hr, [
          e("div", Kr, [
            e("span", {
              class: se(["phase-icon", p.value ? "warning" : "success"])
            }, l(p.value ? "⚠" : "✓"), 3),
            e("h3", qr, l(p.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", Jr, [
            t.progress.nodesInstalled.length > 0 ? (o(), s("div", Yr, [
              a[4] || (a[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", Qr, l(t.progress.nodesInstalled.length) + " node package" + l(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : c("", !0),
            r.value.length > 0 ? (o(), s("div", Xr, [
              a[5] || (a[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", Zr, l(r.value.length) + " package" + l(r.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : c("", !0),
            r.value.length > 0 ? (o(), s("div", ed, [
              (o(!0), s(W, null, ee(r.value, (_) => (o(), s("div", {
                key: _.node_id,
                class: "failed-item"
              }, [
                e("code", td, l(_.node_id), 1),
                e("span", od, l(_.error), 1)
              ]))), 128))
            ])) : c("", !0),
            r.value.length > 0 ? (o(), s("button", {
              key: 3,
              class: "retry-button",
              onClick: a[0] || (a[0] = (_) => m.$emit("retry-failed"))
            }, " Retry Failed (" + l(r.value.length) + ") ", 1)) : c("", !0),
            p.value ? c("", !0) : (o(), s("div", sd, [...a[6] || (a[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            a[8] || (a[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (o(), s("div", nd, [
              a[7] || (a[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: a[1] || (a[1] = (_) => m.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : c("", !0)
          ])
        ])) : t.progress.phase === "error" ? (o(), s("div", ad, [
          a[9] || (a[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", ld, l(t.progress.error), 1)
        ])) : c("", !0)
      ]);
    };
  }
}), rd = /* @__PURE__ */ Q(id, [["__scopeId", "data-v-5efaae58"]]), dd = {
  key: 0,
  class: "loading-state"
}, cd = {
  key: 1,
  class: "wizard-content"
}, ud = {
  key: 0,
  class: "step-content"
}, md = { class: "analysis-summary" }, vd = { class: "analysis-header" }, fd = { class: "summary-description" }, gd = { class: "stats-grid" }, pd = { class: "stat-card" }, hd = { class: "stat-items" }, yd = {
  key: 0,
  class: "stat-item success"
}, wd = { class: "stat-count" }, kd = {
  key: 1,
  class: "stat-item info"
}, bd = { class: "stat-count" }, _d = {
  key: 2,
  class: "stat-item warning"
}, $d = { class: "stat-count" }, Cd = {
  key: 3,
  class: "stat-item error"
}, xd = { class: "stat-count" }, Sd = { class: "stat-card" }, Id = { class: "stat-items" }, Ed = { class: "stat-item success" }, Md = { class: "stat-count" }, zd = {
  key: 0,
  class: "stat-item info"
}, Ld = { class: "stat-count" }, Td = {
  key: 1,
  class: "stat-item warning"
}, Rd = { class: "stat-count" }, Nd = {
  key: 2,
  class: "stat-item error"
}, Dd = { class: "stat-count" }, Od = {
  key: 0,
  class: "status-message warning"
}, Ud = { class: "status-text" }, Pd = {
  key: 1,
  class: "status-message info"
}, Bd = { class: "status-text" }, Fd = {
  key: 2,
  class: "status-message info"
}, Ad = { class: "status-text" }, Vd = {
  key: 3,
  class: "status-message success"
}, Wd = {
  key: 3,
  class: "step-content"
}, Gd = { class: "review-summary" }, jd = { class: "review-stats" }, Hd = { class: "review-stat" }, Kd = { class: "stat-value" }, qd = { class: "review-stat" }, Jd = { class: "stat-value" }, Yd = { class: "review-stat" }, Qd = { class: "stat-value" }, Xd = { class: "review-stat" }, Zd = { class: "stat-value" }, ec = {
  key: 0,
  class: "review-section"
}, tc = { class: "section-title" }, oc = { class: "review-items" }, sc = { class: "item-name" }, nc = { class: "item-choice" }, ac = {
  key: 0,
  class: "choice-badge install"
}, lc = {
  key: 1,
  class: "choice-badge skip"
}, ic = {
  key: 1,
  class: "review-section"
}, rc = { class: "section-title" }, dc = { class: "review-items" }, cc = { class: "item-name" }, uc = { class: "item-choice" }, mc = {
  key: 0,
  class: "choice-badge install"
}, vc = {
  key: 1,
  class: "choice-badge optional"
}, fc = {
  key: 2,
  class: "choice-badge skip"
}, gc = {
  key: 1,
  class: "choice-badge pending"
}, pc = {
  key: 2,
  class: "review-section"
}, hc = { class: "section-title" }, yc = { class: "review-items" }, wc = { class: "item-name" }, kc = { class: "item-choice" }, bc = {
  key: 0,
  class: "choice-badge install"
}, _c = {
  key: 1,
  class: "choice-badge download"
}, $c = {
  key: 2,
  class: "choice-badge optional"
}, Cc = {
  key: 3,
  class: "choice-badge skip"
}, xc = {
  key: 4,
  class: "choice-badge skip"
}, Sc = {
  key: 1,
  class: "choice-badge download"
}, Ic = {
  key: 2,
  class: "choice-badge pending"
}, Ec = {
  key: 3,
  class: "no-choices"
}, Mc = /* @__PURE__ */ Y({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: u }) {
    const n = t, r = u, { analyzeWorkflow: p, applyResolution: f, installNodes: h, queueModelDownloads: m, progress: a, resetProgress: v } = wl(), { loadPendingDownloads: b } = Et(), d = $(null), I = $(!1), _ = $(!1), z = $(null), w = $("analysis"), k = $([]), T = $(/* @__PURE__ */ new Map()), O = $(/* @__PURE__ */ new Map()), L = $(/* @__PURE__ */ new Set()), R = F(() => {
      const j = [
        { id: "analysis", label: "Analysis" }
      ];
      return (U.value || M.value) && j.push({ id: "nodes", label: "Nodes" }), (N.value || P.value) && j.push({ id: "models", label: "Models" }), j.push({ id: "review", label: "Review" }), w.value === "applying" && j.push({ id: "applying", label: "Applying" }), j;
    }), G = F(() => d.value ? d.value.stats.needs_user_input : !1), U = F(() => d.value ? d.value.nodes.unresolved.length > 0 || d.value.nodes.ambiguous.length > 0 : !1), N = F(() => d.value ? d.value.models.unresolved.length > 0 || d.value.models.ambiguous.length > 0 : !1), P = F(() => d.value ? d.value.stats.download_intents > 0 : !1), M = F(() => d.value ? d.value.stats.nodes_needing_installation > 0 : !1), S = F(() => d.value ? d.value.nodes.resolved.length : 0), V = F(() => {
      if (!d.value) return [];
      const j = d.value.nodes.resolved.filter((J) => !J.is_installed), B = /* @__PURE__ */ new Set();
      return j.filter((J) => B.has(J.package.package_id) ? !1 : (B.add(J.package.package_id), !0));
    }), q = F(() => {
      if (!d.value) return [];
      const j = d.value.nodes.resolved.filter((J) => !J.is_installed), B = /* @__PURE__ */ new Map();
      for (const J of j) {
        const ve = B.get(J.package.package_id);
        ve ? ve.node_types_count++ : B.set(J.package.package_id, {
          package_id: J.package.package_id,
          title: J.package.title,
          node_types_count: 1
        });
      }
      return Array.from(B.values());
    }), oe = F(() => V.value.filter((j) => !L.value.has(j.package.package_id))), ne = F(() => d.value ? d.value.models.resolved.filter((j) => j.match_type === "download_intent").map((j) => ({
      filename: j.reference.widget_value,
      reference: j.reference,
      is_download_intent: !0,
      resolved_model: j.model,
      download_source: j.download_source,
      target_path: j.target_path
    })) : []), K = F(() => {
      if (!d.value) return [];
      const j = d.value.nodes.unresolved.map((J) => ({
        node_type: J.reference.node_type,
        reason: J.reason,
        is_unresolved: !0,
        options: void 0
      })), B = d.value.nodes.ambiguous.map((J) => ({
        node_type: J.reference.node_type,
        has_multiple_options: !0,
        options: J.options.map((ve) => ({
          package_id: ve.package.package_id,
          title: ve.package.title,
          match_confidence: ve.match_confidence,
          match_type: ve.match_type,
          is_installed: ve.is_installed
        }))
      }));
      return [...j, ...B];
    }), X = F(() => {
      if (!d.value) return [];
      const j = d.value.models.unresolved.map((J) => ({
        filename: J.reference.widget_value,
        reference: J.reference,
        reason: J.reason,
        is_unresolved: !0,
        options: void 0
      })), B = d.value.models.ambiguous.map((J) => ({
        filename: J.reference.widget_value,
        reference: J.reference,
        has_multiple_options: !0,
        options: J.options.map((ve) => ({
          model: ve.model,
          match_confidence: ve.match_confidence,
          match_type: ve.match_type,
          has_download_source: ve.has_download_source
        }))
      }));
      return [...j, ...B];
    }), D = F(() => {
      const j = X.value, B = ne.value.map((J) => ({
        filename: J.filename,
        reference: J.reference,
        is_download_intent: !0,
        resolved_model: J.resolved_model,
        download_source: J.download_source,
        target_path: J.target_path,
        options: void 0
      }));
      return [...j, ...B];
    }), C = F(() => {
      let j = oe.value.length;
      for (const B of T.value.values())
        B.action === "install" && j++;
      for (const B of O.value.values())
        B.action === "select" && j++;
      return j;
    }), ae = F(() => {
      let j = 0;
      for (const B of O.value.values())
        B.action === "download" && j++;
      return j;
    }), te = F(() => {
      let j = 0;
      for (const B of T.value.values())
        B.action === "optional" && j++;
      for (const B of O.value.values())
        B.action === "optional" && j++;
      return j;
    }), xe = F(() => {
      let j = L.value.size;
      for (const B of T.value.values())
        B.action === "skip" && j++;
      for (const B of O.value.values())
        B.action === "skip" && j++;
      for (const B of K.value)
        T.value.has(B.node_type) || j++;
      for (const B of X.value)
        O.value.has(B.filename) || j++;
      return j;
    }), ye = F(() => {
      const j = {};
      if (j.analysis = { resolved: 1, total: 1 }, U.value) {
        const B = K.value.length, J = K.value.filter(
          (ve) => T.value.has(ve.node_type)
        ).length;
        j.nodes = { resolved: J, total: B };
      }
      if (N.value || P.value) {
        const B = D.value.length, J = D.value.filter(
          (ve) => O.value.has(ve.filename) || ve.is_download_intent
        ).length;
        j.models = { resolved: J, total: B };
      }
      if (j.review = { resolved: 1, total: 1 }, w.value === "applying") {
        const B = a.totalFiles || 1, J = a.completedFiles.length;
        j.applying = { resolved: J, total: B };
      }
      return j;
    });
    function ge(j) {
      w.value = j;
    }
    function rt() {
      const j = R.value.findIndex((B) => B.id === w.value);
      j > 0 && (w.value = R.value[j - 1].id);
    }
    function be() {
      const j = R.value.findIndex((B) => B.id === w.value);
      j < R.value.length - 1 && (w.value = R.value[j + 1].id);
    }
    async function pt() {
      I.value = !0, z.value = null;
      try {
        d.value = await p(n.workflowName);
      } catch (j) {
        z.value = j instanceof Error ? j.message : "Failed to analyze workflow";
      } finally {
        I.value = !1;
      }
    }
    function ht() {
      k.value.includes("analysis") || k.value.push("analysis"), U.value || M.value ? w.value = "nodes" : N.value || P.value ? w.value = "models" : w.value = "review";
    }
    function yt(j) {
      T.value.set(j, { action: "optional" });
    }
    function he(j) {
      T.value.set(j, { action: "skip" });
    }
    function Xe(j, B) {
      var ve;
      const J = K.value.find((Ee) => Ee.node_type === j);
      (ve = J == null ? void 0 : J.options) != null && ve[B] && T.value.set(j, {
        action: "install",
        package_id: J.options[B].package_id
      });
    }
    function Ge(j, B) {
      T.value.set(j, {
        action: "install",
        package_id: B
      });
    }
    function Ae(j) {
      T.value.delete(j);
    }
    function wt(j) {
      L.value.has(j) ? L.value.delete(j) : L.value.add(j);
    }
    function ce(j) {
      O.value.set(j, { action: "optional" });
    }
    function Ue(j) {
      O.value.set(j, { action: "skip" });
    }
    function H(j, B) {
      var ve;
      const J = X.value.find((Ee) => Ee.filename === j);
      (ve = J == null ? void 0 : J.options) != null && ve[B] && O.value.set(j, {
        action: "select",
        selected_model: J.options[B].model
      });
    }
    function de(j, B, J) {
      O.value.set(j, {
        action: "download",
        url: B,
        target_path: J
      });
    }
    function me(j) {
      O.value.delete(j);
    }
    async function Ie() {
      var j;
      _.value = !0, z.value = null, v(), a.phase = "resolving", w.value = "applying";
      try {
        const B = await f(n.workflowName, T.value, O.value, L.value);
        B.models_to_download && B.models_to_download.length > 0 && m(n.workflowName, B.models_to_download);
        const J = [
          ...B.nodes_to_install || [],
          ...oe.value.map((Ee) => Ee.package.package_id)
        ];
        a.nodesToInstall = [...new Set(J)], a.nodesToInstall.length > 0 && await h(n.workflowName), a.phase = "complete", await b();
        const ve = a.installError || ((j = a.nodeInstallProgress) == null ? void 0 : j.completedNodes.some((Ee) => !Ee.success));
        !a.needsRestart && !ve && setTimeout(() => {
          r("refresh"), r("install"), r("close");
        }, 1500);
      } catch (B) {
        z.value = B instanceof Error ? B.message : "Failed to apply resolution", a.error = z.value, a.phase = "error";
      } finally {
        _.value = !1;
      }
    }
    function tt() {
      r("refresh"), r("restart"), r("close");
    }
    async function Rt() {
      var B;
      const j = ((B = a.nodeInstallProgress) == null ? void 0 : B.completedNodes.filter((J) => !J.success).map((J) => J.node_id)) || [];
      if (j.length !== 0) {
        a.phase = "installing", a.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: j.length
        }, a.nodesToInstall = j, a.nodesInstalled = [], a.installError = void 0;
        try {
          await h(n.workflowName), a.phase = "complete";
        } catch (J) {
          a.error = J instanceof Error ? J.message : "Retry failed", a.phase = "error";
        }
      }
    }
    return Ce(pt), (j, B) => (o(), x(et, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: I.value,
      error: z.value || void 0,
      "fixed-height": !0,
      onClose: B[1] || (B[1] = (J) => r("close"))
    }, {
      body: i(() => [
        I.value && !d.value ? (o(), s("div", dd, [...B[2] || (B[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : d.value ? (o(), s("div", cd, [
          g(Ml, {
            steps: R.value,
            "current-step": w.value,
            "completed-steps": k.value,
            "step-stats": ye.value,
            onStepChange: ge
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          w.value === "analysis" ? (o(), s("div", ud, [
            e("div", md, [
              e("div", vd, [
                B[3] || (B[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", fd, " Found " + l(d.value.stats.total_nodes) + " nodes and " + l(d.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", gd, [
                e("div", pd, [
                  B[12] || (B[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", hd, [
                    S.value > 0 ? (o(), s("div", yd, [
                      B[4] || (B[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", wd, l(S.value), 1),
                      B[5] || (B[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : c("", !0),
                    d.value.stats.packages_needing_installation > 0 ? (o(), s("div", kd, [
                      B[6] || (B[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", bd, l(d.value.stats.packages_needing_installation), 1),
                      B[7] || (B[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : c("", !0),
                    d.value.nodes.ambiguous.length > 0 ? (o(), s("div", _d, [
                      B[8] || (B[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", $d, l(d.value.nodes.ambiguous.length), 1),
                      B[9] || (B[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    d.value.nodes.unresolved.length > 0 ? (o(), s("div", Cd, [
                      B[10] || (B[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", xd, l(d.value.nodes.unresolved.length), 1),
                      B[11] || (B[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", Sd, [
                  B[21] || (B[21] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Id, [
                    e("div", Ed, [
                      B[13] || (B[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Md, l(d.value.models.resolved.length - d.value.stats.download_intents), 1),
                      B[14] || (B[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    d.value.stats.download_intents > 0 ? (o(), s("div", zd, [
                      B[15] || (B[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Ld, l(d.value.stats.download_intents), 1),
                      B[16] || (B[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : c("", !0),
                    d.value.models.ambiguous.length > 0 ? (o(), s("div", Td, [
                      B[17] || (B[17] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Rd, l(d.value.models.ambiguous.length), 1),
                      B[18] || (B[18] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : c("", !0),
                    d.value.models.unresolved.length > 0 ? (o(), s("div", Nd, [
                      B[19] || (B[19] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Dd, l(d.value.models.unresolved.length), 1),
                      B[20] || (B[20] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : c("", !0)
                  ])
                ])
              ]),
              G.value ? (o(), s("div", Od, [
                B[22] || (B[22] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Ud, l(K.value.length + X.value.length) + " items need your input", 1)
              ])) : M.value ? (o(), s("div", Pd, [
                B[23] || (B[23] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Bd, l(d.value.stats.packages_needing_installation) + " package" + l(d.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + l(d.value.stats.nodes_needing_installation) + " node type" + l(d.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + l(P.value ? `, ${d.value.stats.download_intents} model${d.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : P.value ? (o(), s("div", Fd, [
                B[24] || (B[24] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Ad, l(d.value.stats.download_intents) + " model" + l(d.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), s("div", Vd, [...B[25] || (B[25] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : c("", !0),
          w.value === "nodes" ? (o(), x(Pi, {
            key: 1,
            nodes: K.value,
            "node-choices": T.value,
            "auto-resolved-packages": q.value,
            "skipped-packages": L.value,
            onMarkOptional: yt,
            onSkip: he,
            onOptionSelected: Xe,
            onManualEntry: Ge,
            onClearChoice: Ae,
            onPackageSkip: wt
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : c("", !0),
          w.value === "models" ? (o(), x(Lr, {
            key: 2,
            models: D.value,
            "model-choices": O.value,
            onMarkOptional: ce,
            onSkip: Ue,
            onOptionSelected: H,
            onDownloadUrl: de,
            onClearChoice: me
          }, null, 8, ["models", "model-choices"])) : c("", !0),
          w.value === "review" ? (o(), s("div", Wd, [
            e("div", Gd, [
              B[30] || (B[30] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", jd, [
                e("div", Hd, [
                  e("span", Kd, l(C.value), 1),
                  B[26] || (B[26] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", qd, [
                  e("span", Jd, l(ae.value), 1),
                  B[27] || (B[27] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Yd, [
                  e("span", Qd, l(te.value), 1),
                  B[28] || (B[28] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", Xd, [
                  e("span", Zd, l(xe.value), 1),
                  B[29] || (B[29] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              q.value.length > 0 ? (o(), s("div", ec, [
                e("h4", tc, "Node Packages (" + l(q.value.length) + ")", 1),
                e("div", oc, [
                  (o(!0), s(W, null, ee(q.value, (J) => (o(), s("div", {
                    key: J.package_id,
                    class: "review-item"
                  }, [
                    e("code", sc, l(J.package_id), 1),
                    e("div", nc, [
                      L.value.has(J.package_id) ? (o(), s("span", lc, "Skipped")) : (o(), s("span", ac, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : c("", !0),
              K.value.length > 0 ? (o(), s("div", ic, [
                e("h4", rc, "Node Choices (" + l(K.value.length) + ")", 1),
                e("div", dc, [
                  (o(!0), s(W, null, ee(K.value, (J) => {
                    var ve, Ee, ot, je;
                    return o(), s("div", {
                      key: J.node_type,
                      class: "review-item"
                    }, [
                      e("code", cc, l(J.node_type), 1),
                      e("div", uc, [
                        T.value.has(J.node_type) ? (o(), s(W, { key: 0 }, [
                          ((ve = T.value.get(J.node_type)) == null ? void 0 : ve.action) === "install" ? (o(), s("span", mc, l((Ee = T.value.get(J.node_type)) == null ? void 0 : Ee.package_id), 1)) : ((ot = T.value.get(J.node_type)) == null ? void 0 : ot.action) === "optional" ? (o(), s("span", vc, " Optional ")) : ((je = T.value.get(J.node_type)) == null ? void 0 : je.action) === "skip" ? (o(), s("span", fc, " Skip ")) : c("", !0)
                        ], 64)) : (o(), s("span", gc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              D.value.length > 0 ? (o(), s("div", pc, [
                e("h4", hc, "Models (" + l(D.value.length) + ")", 1),
                e("div", yc, [
                  (o(!0), s(W, null, ee(D.value, (J) => {
                    var ve, Ee, ot, je, Mt, st, nt;
                    return o(), s("div", {
                      key: J.filename,
                      class: "review-item"
                    }, [
                      e("code", wc, l(J.filename), 1),
                      e("div", kc, [
                        O.value.has(J.filename) ? (o(), s(W, { key: 0 }, [
                          ((ve = O.value.get(J.filename)) == null ? void 0 : ve.action) === "select" ? (o(), s("span", bc, l((ot = (Ee = O.value.get(J.filename)) == null ? void 0 : Ee.selected_model) == null ? void 0 : ot.filename), 1)) : ((je = O.value.get(J.filename)) == null ? void 0 : je.action) === "download" ? (o(), s("span", _c, " Download ")) : ((Mt = O.value.get(J.filename)) == null ? void 0 : Mt.action) === "optional" ? (o(), s("span", $c, " Optional ")) : ((st = O.value.get(J.filename)) == null ? void 0 : st.action) === "skip" ? (o(), s("span", Cc, " Skip ")) : ((nt = O.value.get(J.filename)) == null ? void 0 : nt.action) === "cancel_download" ? (o(), s("span", xc, " Cancel Download ")) : c("", !0)
                        ], 64)) : J.is_download_intent ? (o(), s("span", Sc, " Pending Download ")) : (o(), s("span", Ic, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : c("", !0),
              V.value.length === 0 && K.value.length === 0 && D.value.length === 0 ? (o(), s("div", Ec, " No dependencies need resolution. ")) : c("", !0)
            ])
          ])) : c("", !0),
          w.value === "applying" ? (o(), x(rd, {
            key: 4,
            progress: fe(a),
            onRestart: tt,
            onRetryFailed: Rt
          }, null, 8, ["progress"])) : c("", !0)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        w.value !== "analysis" && w.value !== "applying" ? (o(), x(ie, {
          key: 0,
          variant: "secondary",
          disabled: _.value,
          onClick: rt
        }, {
          default: i(() => [...B[31] || (B[31] = [
            y(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        B[35] || (B[35] = e("div", { class: "footer-spacer" }, null, -1)),
        w.value !== "applying" || fe(a).phase === "complete" || fe(a).phase === "error" ? (o(), x(ie, {
          key: 1,
          variant: "secondary",
          onClick: B[0] || (B[0] = (J) => r("close"))
        }, {
          default: i(() => [
            y(l(fe(a).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : c("", !0),
        w.value === "analysis" ? (o(), x(ie, {
          key: 2,
          variant: "primary",
          disabled: I.value,
          onClick: ht
        }, {
          default: i(() => [...B[32] || (B[32] = [
            y(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : c("", !0),
        w.value === "nodes" ? (o(), x(ie, {
          key: 3,
          variant: "primary",
          onClick: be
        }, {
          default: i(() => [
            y(l(N.value || P.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : c("", !0),
        w.value === "models" ? (o(), x(ie, {
          key: 4,
          variant: "primary",
          onClick: be
        }, {
          default: i(() => [...B[33] || (B[33] = [
            y(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : c("", !0),
        w.value === "review" ? (o(), x(ie, {
          key: 5,
          variant: "primary",
          disabled: _.value,
          loading: _.value,
          onClick: Ie
        }, {
          default: i(() => [...B[34] || (B[34] = [
            y(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), zc = /* @__PURE__ */ Q(Mc, [["__scopeId", "data-v-0d3f93e6"]]), Lc = { class: "search-input-wrapper" }, Tc = ["value", "placeholder"], Rc = /* @__PURE__ */ Y({
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
    }), (a, v) => (o(), s("div", Lc, [
      e("input", {
        ref_key: "inputRef",
        ref: p,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: h,
        onKeyup: Ze(m, ["escape"])
      }, null, 40, Tc),
      t.clearable && t.modelValue ? (o(), s("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), Nc = /* @__PURE__ */ Q(Rc, [["__scopeId", "data-v-266f857a"]]), Dc = { class: "search-bar" }, Oc = /* @__PURE__ */ Y({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (u, n) => (o(), s("div", Dc, [
      g(Nc, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => u.$emit("update:modelValue", r)),
        onClear: n[1] || (n[1] = (r) => u.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), ft = /* @__PURE__ */ Q(Oc, [["__scopeId", "data-v-3d51bbfd"]]), Uc = { class: "section-group" }, Pc = {
  key: 0,
  class: "section-content"
}, Bc = /* @__PURE__ */ Y({
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
    return (h, m) => (o(), s("section", Uc, [
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
      !t.collapsible || p.value ? (o(), s("div", Pc, [
        ue(h.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), $e = /* @__PURE__ */ Q(Bc, [["__scopeId", "data-v-c48e33ed"]]), Fc = { class: "item-header" }, Ac = {
  key: 0,
  class: "item-icon"
}, Vc = { class: "item-info" }, Wc = {
  key: 0,
  class: "item-title"
}, Gc = {
  key: 1,
  class: "item-subtitle"
}, jc = {
  key: 0,
  class: "item-details"
}, Hc = {
  key: 1,
  class: "item-actions"
}, Kc = /* @__PURE__ */ Y({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: u }) {
    const n = t, r = F(() => n.status ? `status-${n.status}` : "");
    return (p, f) => (o(), s("div", {
      class: se(["item-card", { clickable: t.clickable, compact: t.compact }, r.value]),
      onClick: f[0] || (f[0] = (h) => t.clickable && p.$emit("click"))
    }, [
      e("div", Fc, [
        p.$slots.icon ? (o(), s("span", Ac, [
          ue(p.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        e("div", Vc, [
          p.$slots.title ? (o(), s("div", Wc, [
            ue(p.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          p.$slots.subtitle ? (o(), s("div", Gc, [
            ue(p.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      p.$slots.details ? (o(), s("div", jc, [
        ue(p.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      p.$slots.actions ? (o(), s("div", Hc, [
        ue(p.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Me = /* @__PURE__ */ Q(Kc, [["__scopeId", "data-v-cc435e0e"]]), qc = { class: "loading-state" }, Jc = { class: "loading-message" }, Yc = /* @__PURE__ */ Y({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (u, n) => (o(), s("div", qc, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Jc, l(t.message), 1)
    ]));
  }
}), Ye = /* @__PURE__ */ Q(Yc, [["__scopeId", "data-v-ad8436c9"]]), Qc = { class: "error-state" }, Xc = { class: "error-message" }, Zc = /* @__PURE__ */ Y({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (u, n) => (o(), s("div", Qc, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Xc, l(t.message), 1),
      t.retry ? (o(), x(Z, {
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
}), Qe = /* @__PURE__ */ Q(Zc, [["__scopeId", "data-v-5397be48"]]), eu = /* @__PURE__ */ Y({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: u, emit: n }) {
    const r = n, { getWorkflows: p } = Se();
    ao();
    const f = $([]), h = $(!1), m = $(null), a = $(""), v = $(!0), b = $(!1), d = $(!1), I = $(!1), _ = $(null), z = F(
      () => f.value.filter((X) => X.status === "broken")
    ), w = F(
      () => f.value.filter((X) => X.status === "new")
    ), k = F(
      () => f.value.filter((X) => X.status === "modified")
    ), T = F(
      () => f.value.filter((X) => X.status === "synced")
    ), O = F(() => {
      if (!a.value.trim()) return f.value;
      const X = a.value.toLowerCase();
      return f.value.filter((D) => D.name.toLowerCase().includes(X));
    }), L = F(
      () => z.value.filter(
        (X) => !a.value.trim() || X.name.toLowerCase().includes(a.value.toLowerCase())
      )
    ), R = F(
      () => w.value.filter(
        (X) => !a.value.trim() || X.name.toLowerCase().includes(a.value.toLowerCase())
      )
    ), G = F(
      () => k.value.filter(
        (X) => !a.value.trim() || X.name.toLowerCase().includes(a.value.toLowerCase())
      )
    ), U = F(
      () => T.value.filter(
        (X) => !a.value.trim() || X.name.toLowerCase().includes(a.value.toLowerCase())
      )
    ), N = F(
      () => b.value ? U.value : U.value.slice(0, 5)
    );
    async function P(X = !1) {
      h.value = !0, m.value = null;
      try {
        f.value = await p(X);
      } catch (D) {
        m.value = D instanceof Error ? D.message : "Failed to load workflows";
      } finally {
        h.value = !1;
      }
    }
    u({ loadWorkflows: P });
    function M(X) {
      _.value = X, d.value = !0;
    }
    function S(X) {
      _.value = X, I.value = !0;
    }
    function V() {
      alert("Bulk resolution not yet implemented");
    }
    function q() {
      r("refresh");
    }
    async function oe() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ne(X) {
      const D = [];
      return X.missing_nodes > 0 && D.push(`${X.missing_nodes} missing node${X.missing_nodes > 1 ? "s" : ""}`), X.missing_models > 0 && D.push(`${X.missing_models} missing model${X.missing_models > 1 ? "s" : ""}`), X.pending_downloads && X.pending_downloads > 0 && D.push(`${X.pending_downloads} pending download${X.pending_downloads > 1 ? "s" : ""}`), D.length > 0 ? D.join(", ") : "Has issues";
    }
    function K(X) {
      const D = X.sync_state === "new" ? "New" : X.sync_state === "modified" ? "Modified" : X.sync_state === "synced" ? "Synced" : X.sync_state;
      return X.has_path_sync_issues && X.models_needing_path_sync && X.models_needing_path_sync > 0 ? `${X.models_needing_path_sync} model path${X.models_needing_path_sync > 1 ? "s" : ""} need${X.models_needing_path_sync === 1 ? "s" : ""} sync` : D || "Unknown";
    }
    return Ce(P), (X, D) => (o(), s(W, null, [
      g(Re, null, {
        header: i(() => [
          g(Ne, { title: "WORKFLOWS" }, {
            actions: i(() => [
              z.value.length > 0 ? (o(), x(Z, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: V
              }, {
                default: i(() => [...D[8] || (D[8] = [
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
            "onUpdate:modelValue": D[0] || (D[0] = (C) => a.value = C),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          h.value ? (o(), x(Ye, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (o(), x(Qe, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (o(), s(W, { key: 2 }, [
            L.value.length ? (o(), x($e, {
              key: 0,
              title: "BROKEN",
              count: L.value.length
            }, {
              default: i(() => [
                (o(!0), s(W, null, ee(L.value, (C) => (o(), x(Me, {
                  key: C.name,
                  status: "broken"
                }, {
                  icon: i(() => [...D[9] || (D[9] = [
                    y("⚠", -1)
                  ])]),
                  title: i(() => [
                    y(l(C.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(l(ne(C)), 1)
                  ]),
                  actions: i(() => [
                    g(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ae) => S(C.name)
                    }, {
                      default: i(() => [...D[10] || (D[10] = [
                        y(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => M(C.name)
                    }, {
                      default: i(() => [...D[11] || (D[11] = [
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
            R.value.length ? (o(), x($e, {
              key: 1,
              title: "NEW",
              count: R.value.length
            }, {
              default: i(() => [
                (o(!0), s(W, null, ee(R.value, (C) => (o(), x(Me, {
                  key: C.name,
                  status: C.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: i(() => [
                    y(l(C.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: i(() => [
                    y(l(C.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(l(K(C)), 1)
                  ]),
                  actions: i(() => [
                    g(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => M(C.name)
                    }, {
                      default: i(() => [...D[12] || (D[12] = [
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
            G.value.length ? (o(), x($e, {
              key: 2,
              title: "MODIFIED",
              count: G.value.length
            }, {
              default: i(() => [
                (o(!0), s(W, null, ee(G.value, (C) => (o(), x(Me, {
                  key: C.name,
                  status: C.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: i(() => [...D[13] || (D[13] = [
                    y("⚡", -1)
                  ])]),
                  title: i(() => [
                    y(l(C.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(l(K(C)), 1)
                  ]),
                  actions: i(() => [
                    g(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => M(C.name)
                    }, {
                      default: i(() => [...D[14] || (D[14] = [
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
            U.value.length ? (o(), x($e, {
              key: 3,
              title: "SYNCED",
              count: U.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: D[2] || (D[2] = (C) => v.value = C)
            }, {
              default: i(() => [
                (o(!0), s(W, null, ee(N.value, (C) => (o(), x(Me, {
                  key: C.name,
                  status: C.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: i(() => [
                    y(l(C.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: i(() => [
                    y(l(C.name), 1)
                  ]),
                  subtitle: i(() => [
                    y(l(K(C)), 1)
                  ]),
                  actions: i(() => [
                    g(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => M(C.name)
                    }, {
                      default: i(() => [...D[15] || (D[15] = [
                        y(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !b.value && U.value.length > 5 ? (o(), x(Z, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: D[1] || (D[1] = (C) => b.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: i(() => [
                    y(" View all " + l(U.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            O.value.length ? c("", !0) : (o(), x(Fe, {
              key: 4,
              icon: "📭",
              message: a.value ? `No workflows match '${a.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      d.value && _.value ? (o(), x(pl, {
        key: 0,
        "workflow-name": _.value,
        onClose: D[3] || (D[3] = (C) => d.value = !1),
        onResolve: D[4] || (D[4] = (C) => S(_.value)),
        onRefresh: D[5] || (D[5] = (C) => r("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0),
      I.value && _.value ? (o(), x(zc, {
        key: 1,
        "workflow-name": _.value,
        onClose: D[6] || (D[6] = (C) => I.value = !1),
        onInstall: q,
        onRefresh: D[7] || (D[7] = (C) => r("refresh")),
        onRestart: oe
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), tu = /* @__PURE__ */ Q(eu, [["__scopeId", "data-v-b7939cb4"]]), ou = /* @__PURE__ */ Y({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (u, n) => (o(), s("div", {
      class: se(["summary-bar", t.variant])
    }, [
      ue(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), gt = /* @__PURE__ */ Q(ou, [["__scopeId", "data-v-ccb7816e"]]), su = {
  key: 0,
  class: "model-details"
}, nu = { class: "detail-section" }, au = { class: "detail-row" }, lu = { class: "detail-value mono" }, iu = { class: "detail-row" }, ru = { class: "detail-value mono" }, du = { class: "detail-row" }, cu = { class: "detail-value mono" }, uu = { class: "detail-row" }, mu = { class: "detail-value" }, vu = { class: "detail-row" }, fu = { class: "detail-value" }, gu = { class: "detail-row" }, pu = { class: "detail-value" }, hu = { class: "detail-section" }, yu = { class: "section-header" }, wu = {
  key: 0,
  class: "locations-list"
}, ku = { class: "location-path mono" }, bu = {
  key: 0,
  class: "location-modified"
}, _u = ["onClick"], $u = {
  key: 1,
  class: "empty-state"
}, Cu = { class: "detail-section" }, xu = { class: "section-header" }, Su = {
  key: 0,
  class: "sources-list"
}, Iu = { class: "source-type" }, Eu = ["href"], Mu = ["disabled", "onClick"], zu = {
  key: 1,
  class: "empty-state"
}, Lu = { class: "add-source-form" }, Tu = ["disabled"], Ru = {
  key: 2,
  class: "source-error"
}, Nu = {
  key: 3,
  class: "source-success"
}, Du = /* @__PURE__ */ Y({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, { getModelDetails: r, addModelSource: p, removeModelSource: f, openFileLocation: h } = Se(), m = $(null), a = $(!0), v = $(null), b = $(""), d = $(!1), I = $(null), _ = $(null), z = $(null), w = $(null);
    let k = null;
    function T(P, M = "success", S = 2e3) {
      k && clearTimeout(k), w.value = { message: P, type: M }, k = setTimeout(() => {
        w.value = null;
      }, S);
    }
    function O(P) {
      if (!P) return "Unknown";
      const M = 1024 * 1024 * 1024, S = 1024 * 1024;
      return P >= M ? `${(P / M).toFixed(1)} GB` : P >= S ? `${(P / S).toFixed(0)} MB` : `${(P / 1024).toFixed(0)} KB`;
    }
    function L(P) {
      navigator.clipboard.writeText(P), T("Copied to clipboard!");
    }
    async function R(P) {
      try {
        await h(P), T("Opening file location...");
      } catch {
        T("Failed to open location", "error");
      }
    }
    async function G() {
      if (!(!b.value.trim() || !m.value)) {
        d.value = !0, _.value = null, z.value = null;
        try {
          await p(m.value.hash, b.value.trim()), z.value = "Source added successfully!", b.value = "", await N();
        } catch (P) {
          _.value = P instanceof Error ? P.message : "Failed to add source";
        } finally {
          d.value = !1;
        }
      }
    }
    async function U(P) {
      if (m.value) {
        I.value = P, _.value = null, z.value = null;
        try {
          await f(m.value.hash, P), T("Source removed"), await N();
        } catch (M) {
          _.value = M instanceof Error ? M.message : "Failed to remove source";
        } finally {
          I.value = null;
        }
      }
    }
    async function N() {
      a.value = !0, v.value = null;
      try {
        m.value = await r(n.identifier);
      } catch (P) {
        v.value = P instanceof Error ? P.message : "Failed to load model details";
      } finally {
        a.value = !1;
      }
    }
    return Ce(N), (P, M) => {
      var S;
      return o(), s(W, null, [
        g(et, {
          title: `Model Details: ${((S = m.value) == null ? void 0 : S.filename) || "Loading..."}`,
          size: "lg",
          loading: a.value,
          error: v.value,
          onClose: M[5] || (M[5] = (V) => P.$emit("close"))
        }, {
          body: i(() => {
            var V, q, oe, ne;
            return [
              m.value ? (o(), s("div", su, [
                e("section", nu, [
                  e("div", au, [
                    M[6] || (M[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", lu, l(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[0] || (M[0] = (K) => L(m.value.hash))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", iu, [
                    M[7] || (M[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", ru, l(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[1] || (M[1] = (K) => L(m.value.blake3))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", du, [
                    M[8] || (M[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", cu, l(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[2] || (M[2] = (K) => L(m.value.sha256))
                    }, "Copy")) : c("", !0)
                  ]),
                  e("div", uu, [
                    M[9] || (M[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", mu, l(O(m.value.size)), 1)
                  ]),
                  e("div", vu, [
                    M[10] || (M[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", fu, l(m.value.category), 1)
                  ]),
                  e("div", gu, [
                    M[11] || (M[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", pu, l(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", hu, [
                  e("h4", yu, "Locations (" + l(((V = m.value.locations) == null ? void 0 : V.length) || 0) + ")", 1),
                  (q = m.value.locations) != null && q.length ? (o(), s("div", wu, [
                    (o(!0), s(W, null, ee(m.value.locations, (K, X) => (o(), s("div", {
                      key: X,
                      class: "location-item"
                    }, [
                      e("span", ku, l(K.path), 1),
                      K.modified ? (o(), s("span", bu, "Modified: " + l(K.modified), 1)) : c("", !0),
                      K.path ? (o(), s("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (D) => R(K.path)
                      }, " Open File Location ", 8, _u)) : c("", !0)
                    ]))), 128))
                  ])) : (o(), s("div", $u, "No locations found"))
                ]),
                e("section", Cu, [
                  e("h4", xu, "Download Sources (" + l(((oe = m.value.sources) == null ? void 0 : oe.length) || 0) + ")", 1),
                  (ne = m.value.sources) != null && ne.length ? (o(), s("div", Su, [
                    (o(!0), s(W, null, ee(m.value.sources, (K, X) => (o(), s("div", {
                      key: X,
                      class: "source-item"
                    }, [
                      e("span", Iu, l(K.type) + ":", 1),
                      e("a", {
                        href: K.url,
                        target: "_blank",
                        class: "source-url"
                      }, l(K.url), 9, Eu),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: I.value === K.url,
                        onClick: (D) => U(K.url)
                      }, l(I.value === K.url ? "..." : "×"), 9, Mu)
                    ]))), 128))
                  ])) : (o(), s("div", zu, " No download sources configured ")),
                  e("div", Lu, [
                    dt(e("input", {
                      "onUpdate:modelValue": M[3] || (M[3] = (K) => b.value = K),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [oo, b.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !b.value.trim() || d.value,
                      onClick: G
                    }, l(d.value ? "Adding..." : "Add Source"), 9, Tu)
                  ]),
                  _.value ? (o(), s("p", Ru, l(_.value), 1)) : c("", !0),
                  z.value ? (o(), s("p", Nu, l(z.value), 1)) : c("", !0)
                ])
              ])) : c("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: M[4] || (M[4] = (V) => P.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (o(), x(ze, { to: "body" }, [
          w.value ? (o(), s("div", {
            key: 0,
            class: se(["toast", w.value.type])
          }, l(w.value.message), 3)) : c("", !0)
        ]))
      ], 64);
    };
  }
}), ro = /* @__PURE__ */ Q(Du, [["__scopeId", "data-v-f15cbb56"]]), Ou = /* @__PURE__ */ Y({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: u }) {
    const n = u, { getEnvironmentModels: r, getStatus: p } = Se(), f = $([]), h = $([]), m = $("production"), a = $(!1), v = $(null), b = $(""), d = $(!1), I = $(null);
    function _() {
      d.value = !1, n("navigate", "model-index");
    }
    const z = F(
      () => f.value.reduce((N, P) => N + (P.size || 0), 0)
    ), w = F(() => {
      if (!b.value.trim()) return f.value;
      const N = b.value.toLowerCase();
      return f.value.filter((P) => P.filename.toLowerCase().includes(N));
    }), k = F(() => {
      if (!b.value.trim()) return h.value;
      const N = b.value.toLowerCase();
      return h.value.filter((P) => P.filename.toLowerCase().includes(N));
    }), T = F(() => {
      const N = {};
      for (const M of w.value) {
        const S = M.type || "other";
        N[S] || (N[S] = []), N[S].push(M);
      }
      const P = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(N).sort(([M], [S]) => {
        const V = P.indexOf(M), q = P.indexOf(S);
        return V >= 0 && q >= 0 ? V - q : V >= 0 ? -1 : q >= 0 ? 1 : M.localeCompare(S);
      }).map(([M, S]) => ({ type: M, models: S }));
    });
    function O(N) {
      if (!N) return "Unknown";
      const P = N / (1024 * 1024);
      return P >= 1024 ? `${(P / 1024).toFixed(1)} GB` : `${P.toFixed(0)} MB`;
    }
    function L(N) {
      I.value = N.hash || N.filename;
    }
    function R(N) {
      n("navigate", "model-index");
    }
    function G(N) {
      alert(`Download functionality not yet implemented for ${N}`);
    }
    async function U() {
      a.value = !0, v.value = null;
      try {
        const N = await r();
        f.value = N, h.value = [];
        const P = await p();
        m.value = P.environment || "production";
      } catch (N) {
        v.value = N instanceof Error ? N.message : "Failed to load models";
      } finally {
        a.value = !1;
      }
    }
    return Ce(U), (N, P) => (o(), s(W, null, [
      g(Re, null, {
        header: i(() => [
          g(Ne, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: P[0] || (P[0] = (M) => d.value = !0)
          })
        ]),
        search: i(() => [
          g(ft, {
            modelValue: b.value,
            "onUpdate:modelValue": P[1] || (P[1] = (M) => b.value = M),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          a.value ? (o(), x(Ye, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (o(), x(Qe, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: U
          }, null, 8, ["message"])) : (o(), s(W, { key: 2 }, [
            f.value.length ? (o(), x(gt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + l(f.value.length) + " models • " + l(O(z.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            (o(!0), s(W, null, ee(T.value, (M) => (o(), x($e, {
              key: M.type,
              title: M.type.toUpperCase(),
              count: M.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(W, null, ee(M.models, (S) => (o(), x(Me, {
                  key: S.hash || S.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...P[4] || (P[4] = [
                    y("📦", -1)
                  ])]),
                  title: i(() => [
                    y(l(S.filename), 1)
                  ]),
                  subtitle: i(() => [
                    y(l(O(S.size)), 1)
                  ]),
                  details: i(() => [
                    g(we, {
                      label: "Used by:",
                      value: (S.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    g(we, {
                      label: "Path:",
                      value: S.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => L(S)
                    }, {
                      default: i(() => [...P[5] || (P[5] = [
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
            k.value.length ? (o(), x($e, {
              key: 1,
              title: "MISSING",
              count: k.value.length
            }, {
              default: i(() => [
                (o(!0), s(W, null, ee(k.value, (M) => (o(), x(Me, {
                  key: M.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...P[6] || (P[6] = [
                    y("⚠", -1)
                  ])]),
                  title: i(() => [
                    y(l(M.filename), 1)
                  ]),
                  subtitle: i(() => [...P[7] || (P[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: i(() => {
                    var S;
                    return [
                      g(we, {
                        label: "Required by:",
                        value: ((S = M.workflow_names) == null ? void 0 : S.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: i(() => [
                    g(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (S) => G(M.filename)
                    }, {
                      default: i(() => [...P[8] || (P[8] = [
                        y(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (S) => R(M.filename)
                    }, {
                      default: i(() => [...P[9] || (P[9] = [
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
            !w.value.length && !k.value.length ? (o(), x(Fe, {
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
        onClose: P[2] || (P[2] = (M) => d.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            P[10] || (P[10] = y(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + l(m.value) + '"', 1),
            P[11] || (P[11] = y(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: i(() => [
          g(Z, {
            variant: "primary",
            onClick: _
          }, {
            default: i(() => [...P[12] || (P[12] = [
              y(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      I.value ? (o(), x(ro, {
        key: 0,
        identifier: I.value,
        onClose: P[3] || (P[3] = (M) => I.value = null)
      }, null, 8, ["identifier"])) : c("", !0)
    ], 64));
  }
}), Uu = /* @__PURE__ */ Q(Ou, [["__scopeId", "data-v-cb4f12b3"]]), Pu = {
  key: 0,
  class: "indexing-progress"
}, Bu = { class: "progress-info" }, Fu = { class: "progress-label" }, Au = { class: "progress-count" }, Vu = { class: "progress-bar" }, Wu = { class: "modal-content" }, Gu = { class: "modal-header" }, ju = { class: "modal-body" }, Hu = { class: "input-group" }, Ku = { class: "current-path" }, qu = { class: "input-group" }, Ju = { class: "modal-footer" }, Yu = { class: "modal-content" }, Qu = { class: "modal-header" }, Xu = { class: "modal-body" }, Zu = { class: "input-group" }, em = { class: "input-group" }, tm = { class: "modal-footer" }, om = /* @__PURE__ */ Y({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: u }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: r,
      getModelsDirectory: p,
      setModelsDirectory: f
    } = Se(), { addToQueue: h } = Et(), m = u, a = $([]), v = $(!1), b = $(!1), d = $(null), I = $(""), _ = $(!1), z = $(null), w = $(!1), k = $(null), T = $(""), O = $(!1), L = $(!1), R = $(""), G = $(""), U = $(null), N = F(
      () => a.value.reduce((D, C) => D + (C.size || 0), 0)
    ), P = F(() => {
      if (!I.value.trim()) return a.value;
      const D = I.value.toLowerCase();
      return a.value.filter((C) => {
        const ae = C, te = C.sha256 || ae.sha256_hash || "";
        return C.filename.toLowerCase().includes(D) || te.toLowerCase().includes(D);
      });
    }), M = F(() => {
      const D = {};
      for (const ae of P.value) {
        const te = ae.type || "other";
        D[te] || (D[te] = []), D[te].push(ae);
      }
      const C = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(D).sort(([ae], [te]) => {
        const xe = C.indexOf(ae), ye = C.indexOf(te);
        return xe >= 0 && ye >= 0 ? xe - ye : xe >= 0 ? -1 : ye >= 0 ? 1 : ae.localeCompare(te);
      }).map(([ae, te]) => ({ type: ae, models: te }));
    });
    function S(D) {
      if (!D) return "Unknown";
      const C = 1024 * 1024 * 1024, ae = 1024 * 1024;
      return D >= C ? `${(D / C).toFixed(1)} GB` : D >= ae ? `${(D / ae).toFixed(0)} MB` : `${(D / 1024).toFixed(0)} KB`;
    }
    function V(D) {
      z.value = D.hash || D.filename;
    }
    async function q() {
      b.value = !0, d.value = null;
      try {
        const D = await r();
        await K(), D.changes > 0 && console.log(`Scan complete: ${D.changes} changes detected`);
      } catch (D) {
        d.value = D instanceof Error ? D.message : "Failed to scan models";
      } finally {
        b.value = !1;
      }
    }
    async function oe() {
      if (T.value.trim()) {
        O.value = !0, d.value = null;
        try {
          const D = await f(T.value.trim());
          k.value = D.path, w.value = !1, T.value = "", await K(), console.log(`Directory changed: ${D.models_indexed} models indexed`), m("refresh");
        } catch (D) {
          d.value = D instanceof Error ? D.message : "Failed to change directory";
        } finally {
          O.value = !1;
        }
      }
    }
    function ne() {
      if (!R.value.trim() || !G.value.trim()) return;
      const D = G.value.split("/").pop() || "model.safetensors";
      h([{
        workflow: "__manual__",
        filename: D,
        url: R.value.trim(),
        targetPath: G.value.trim()
      }]), R.value = "", G.value = "", L.value = !1;
    }
    async function K() {
      v.value = !0, d.value = null;
      try {
        a.value = await n();
      } catch (D) {
        d.value = D instanceof Error ? D.message : "Failed to load workspace models";
      } finally {
        v.value = !1;
      }
    }
    async function X() {
      try {
        const D = await p();
        k.value = D.path;
      } catch {
      }
    }
    return Ce(() => {
      K(), X();
    }), (D, C) => (o(), s(W, null, [
      g(Re, null, {
        header: i(() => [
          g(Ne, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: C[2] || (C[2] = (ae) => _.value = !0)
          }, {
            actions: i(() => [
              g(Z, {
                variant: "primary",
                size: "sm",
                disabled: b.value,
                onClick: q
              }, {
                default: i(() => [
                  y(l(b.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              g(Z, {
                variant: "primary",
                size: "sm",
                onClick: C[0] || (C[0] = (ae) => w.value = !0)
              }, {
                default: i(() => [...C[15] || (C[15] = [
                  y(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              g(Z, {
                variant: "primary",
                size: "sm",
                onClick: C[1] || (C[1] = (ae) => L.value = !0)
              }, {
                default: i(() => [...C[16] || (C[16] = [
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
          U.value ? (o(), s("div", Pu, [
            e("div", Bu, [
              e("span", Fu, l(U.value.message), 1),
              e("span", Au, l(U.value.current) + "/" + l(U.value.total), 1)
            ]),
            e("div", Vu, [
              e("div", {
                class: "progress-fill",
                style: qe({ width: `${U.value.current / U.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : c("", !0),
          g(ft, {
            modelValue: I.value,
            "onUpdate:modelValue": C[3] || (C[3] = (ae) => I.value = ae),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          v.value || U.value ? (o(), x(Ye, {
            key: 0,
            message: U.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : d.value ? (o(), x(Qe, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: K
          }, null, 8, ["message"])) : (o(), s(W, { key: 2 }, [
            a.value.length ? (o(), x(gt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + l(a.value.length) + " models • " + l(S(N.value)), 1)
              ]),
              _: 1
            })) : c("", !0),
            (o(!0), s(W, null, ee(M.value, (ae) => (o(), x($e, {
              key: ae.type,
              title: ae.type.toUpperCase(),
              count: ae.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (o(!0), s(W, null, ee(ae.models, (te) => (o(), x(Me, {
                  key: te.sha256 || te.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...C[17] || (C[17] = [
                    y("📦", -1)
                  ])]),
                  title: i(() => [
                    y(l(te.filename), 1)
                  ]),
                  subtitle: i(() => [
                    y(l(S(te.size)), 1)
                  ]),
                  details: i(() => [
                    g(we, {
                      label: "Hash:",
                      value: te.hash ? te.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (xe) => V(te)
                    }, {
                      default: i(() => [...C[18] || (C[18] = [
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
            P.value.length ? c("", !0) : (o(), x(Fe, {
              key: 1,
              icon: "📭",
              message: I.value ? `No models match '${I.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g(Je, {
        show: _.value,
        title: "About Workspace Model Index",
        onClose: C[4] || (C[4] = (ae) => _.value = !1)
      }, {
        content: i(() => [...C[19] || (C[19] = [
          e("p", null, [
            y(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            y(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      z.value ? (o(), x(ro, {
        key: 0,
        identifier: z.value,
        onClose: C[5] || (C[5] = (ae) => z.value = null)
      }, null, 8, ["identifier"])) : c("", !0),
      (o(), x(ze, { to: "body" }, [
        w.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[9] || (C[9] = _e((ae) => w.value = !1, ["self"]))
        }, [
          e("div", Wu, [
            e("div", Gu, [
              C[20] || (C[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: C[6] || (C[6] = (ae) => w.value = !1)
              }, "✕")
            ]),
            e("div", ju, [
              e("div", Hu, [
                C[21] || (C[21] = e("label", null, "Current Directory", -1)),
                e("code", Ku, l(k.value || "Not set"), 1)
              ]),
              e("div", qu, [
                C[22] || (C[22] = e("label", null, "New Directory Path", -1)),
                g(Be, {
                  modelValue: T.value,
                  "onUpdate:modelValue": C[7] || (C[7] = (ae) => T.value = ae),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              C[23] || (C[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", Ju, [
              g(ie, {
                variant: "secondary",
                onClick: C[8] || (C[8] = (ae) => w.value = !1)
              }, {
                default: i(() => [...C[24] || (C[24] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              g(ie, {
                variant: "primary",
                disabled: !T.value.trim() || O.value,
                loading: O.value,
                onClick: oe
              }, {
                default: i(() => [
                  y(l(O.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : c("", !0)
      ])),
      (o(), x(ze, { to: "body" }, [
        L.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[14] || (C[14] = _e((ae) => L.value = !1, ["self"]))
        }, [
          e("div", Yu, [
            e("div", Qu, [
              C[25] || (C[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: C[10] || (C[10] = (ae) => L.value = !1)
              }, "✕")
            ]),
            e("div", Xu, [
              e("div", Zu, [
                C[26] || (C[26] = e("label", null, "Download URL", -1)),
                g(Be, {
                  modelValue: R.value,
                  "onUpdate:modelValue": C[11] || (C[11] = (ae) => R.value = ae),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", em, [
                C[27] || (C[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                g(Be, {
                  modelValue: G.value,
                  "onUpdate:modelValue": C[12] || (C[12] = (ae) => G.value = ae),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              C[28] || (C[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", tm, [
              g(ie, {
                variant: "secondary",
                onClick: C[13] || (C[13] = (ae) => L.value = !1)
              }, {
                default: i(() => [...C[29] || (C[29] = [
                  y(" Cancel ", -1)
                ])]),
                _: 1
              }),
              g(ie, {
                variant: "primary",
                disabled: !R.value.trim() || !G.value.trim(),
                onClick: ne
              }, {
                default: i(() => [...C[30] || (C[30] = [
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
}), sm = /* @__PURE__ */ Q(om, [["__scopeId", "data-v-73b78d84"]]), nm = { class: "node-details" }, am = { class: "status-row" }, lm = {
  key: 0,
  class: "detail-row"
}, im = { class: "value" }, rm = { class: "detail-row" }, dm = { class: "value" }, cm = {
  key: 1,
  class: "detail-row"
}, um = { class: "value mono" }, mm = {
  key: 2,
  class: "detail-row"
}, vm = ["href"], fm = {
  key: 3,
  class: "detail-row"
}, gm = { class: "value mono small" }, pm = { class: "detail-row" }, hm = {
  key: 0,
  class: "value"
}, ym = {
  key: 1,
  class: "workflow-list"
}, wm = /* @__PURE__ */ Y({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, r = u, p = F(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), f = F(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), h = F(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (m, a) => (o(), x(et, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: a[1] || (a[1] = (v) => r("close"))
    }, {
      body: i(() => [
        e("div", nm, [
          e("div", am, [
            a[2] || (a[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: se(["status-badge", p.value])
            }, l(f.value), 3)
          ]),
          t.node.version ? (o(), s("div", lm, [
            a[3] || (a[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", im, l(t.node.source === "development" ? "" : "v") + l(t.node.version), 1)
          ])) : c("", !0),
          e("div", rm, [
            a[4] || (a[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", dm, l(h.value), 1)
          ]),
          t.node.registry_id ? (o(), s("div", cm, [
            a[5] || (a[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", um, l(t.node.registry_id), 1)
          ])) : c("", !0),
          t.node.repository ? (o(), s("div", mm, [
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
            ], 8, vm)
          ])) : c("", !0),
          t.node.download_url ? (o(), s("div", fm, [
            a[8] || (a[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", gm, l(t.node.download_url), 1)
          ])) : c("", !0),
          a[10] || (a[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", pm, [
            a[9] || (a[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (o(), s("span", hm, " Not used in any workflows ")) : (o(), s("div", ym, [
              (o(!0), s(W, null, ee(t.node.used_in_workflows, (v) => (o(), s("span", {
                key: v,
                class: "workflow-tag"
              }, l(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: i(() => [
        g(ie, {
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
}), km = /* @__PURE__ */ Q(wm, [["__scopeId", "data-v-b342f626"]]), bm = { key: 0 }, _m = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, $m = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Cm = /* @__PURE__ */ Y({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: u }) {
    const n = u, { getNodes: r, trackNodeAsDev: p, installNode: f, uninstallNode: h } = Se(), m = $({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), a = $(!1), v = $(null), b = $(""), d = $(!1), I = $(null), _ = F(() => {
      if (!b.value.trim()) return m.value.nodes;
      const M = b.value.toLowerCase();
      return m.value.nodes.filter(
        (S) => {
          var V, q;
          return S.name.toLowerCase().includes(M) || ((V = S.description) == null ? void 0 : V.toLowerCase().includes(M)) || ((q = S.repository) == null ? void 0 : q.toLowerCase().includes(M));
        }
      );
    }), z = F(
      () => _.value.filter((M) => M.installed && M.tracked)
    ), w = F(
      () => _.value.filter((M) => !M.installed && M.tracked)
    ), k = F(
      () => _.value.filter((M) => M.installed && !M.tracked)
    );
    function T(M) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[M] || M;
    }
    function O(M) {
      return !M.used_in_workflows || M.used_in_workflows.length === 0 ? "Not used in any workflows" : M.used_in_workflows.length === 1 ? M.used_in_workflows[0] : `${M.used_in_workflows.length} workflows`;
    }
    function L(M) {
      I.value = M;
    }
    function R() {
      n("open-node-manager");
    }
    async function G(M) {
      if (confirm(`Track "${M}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          a.value = !0;
          const S = await p(M);
          S.status === "success" ? (alert(`Node "${M}" is now tracked as development!`), await P()) : alert(`Failed to track node: ${S.message || "Unknown error"}`);
        } catch (S) {
          alert(`Error tracking node: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          a.value = !1;
        }
    }
    async function U(M) {
      if (confirm(`Remove untracked node "${M}"?

This will delete the node directory from custom_nodes/.`))
        try {
          a.value = !0;
          const S = await h(M);
          S.status === "success" ? (alert(`Node "${M}" removed!`), await P()) : alert(`Failed to remove node: ${S.message || "Unknown error"}`);
        } catch (S) {
          alert(`Error removing node: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          a.value = !1;
        }
    }
    async function N(M) {
      if (confirm(`Install node "${M}"?

This will download and install the node.`))
        try {
          a.value = !0;
          const S = await f(M);
          S.status === "success" ? (alert(`Node "${M}" installed successfully!`), await P()) : alert(`Failed to install node: ${S.message || "Unknown error"}`);
        } catch (S) {
          alert(`Error installing node: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          a.value = !1;
        }
    }
    async function P() {
      a.value = !0, v.value = null;
      try {
        m.value = await r();
      } catch (M) {
        v.value = M instanceof Error ? M.message : "Failed to load nodes";
      } finally {
        a.value = !1;
      }
    }
    return Ce(P), (M, S) => (o(), s(W, null, [
      g(Re, null, {
        header: i(() => [
          g(Ne, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (V) => d.value = !0)
          }, {
            actions: i(() => [
              g(Z, {
                variant: "primary",
                size: "sm",
                onClick: R
              }, {
                default: i(() => [...S[5] || (S[5] = [
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
            "onUpdate:modelValue": S[1] || (S[1] = (V) => b.value = V),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          a.value ? (o(), x(Ye, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (o(), x(Qe, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (o(), s(W, { key: 2 }, [
            m.value.total_count ? (o(), x(gt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(l(m.value.installed_count) + " installed ", 1),
                m.value.missing_count ? (o(), s(W, { key: 0 }, [
                  y(" • " + l(m.value.missing_count) + " missing", 1)
                ], 64)) : c("", !0),
                m.value.untracked_count ? (o(), s(W, { key: 1 }, [
                  y(" • " + l(m.value.untracked_count) + " untracked", 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            k.value.length ? (o(), x($e, {
              key: 1,
              title: "UNTRACKED",
              count: k.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(W, null, ee(k.value, (V) => (o(), x(Me, {
                  key: V.name,
                  status: "warning"
                }, {
                  icon: i(() => [...S[6] || (S[6] = [
                    y("?", -1)
                  ])]),
                  title: i(() => [
                    y(l(V.name), 1)
                  ]),
                  subtitle: i(() => [...S[7] || (S[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: i(() => [
                    g(we, {
                      label: "Used by:",
                      value: O(V)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (q) => L(V)
                    }, {
                      default: i(() => [...S[8] || (S[8] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => G(V.name)
                    }, {
                      default: i(() => [...S[9] || (S[9] = [
                        y(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Z, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (q) => U(V.name)
                    }, {
                      default: i(() => [...S[10] || (S[10] = [
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
            z.value.length ? (o(), x($e, {
              key: 2,
              title: "INSTALLED",
              count: z.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(W, null, ee(z.value, (V) => (o(), x(Me, {
                  key: V.name,
                  status: "synced"
                }, {
                  icon: i(() => [
                    y(l(V.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: i(() => [
                    y(l(V.name), 1)
                  ]),
                  subtitle: i(() => [
                    V.version ? (o(), s("span", bm, l(V.source === "development" ? "" : "v") + l(V.version), 1)) : (o(), s("span", _m, "version unknown")),
                    e("span", $m, " • " + l(T(V.source)), 1)
                  ]),
                  details: i(() => [
                    g(we, {
                      label: "Used by:",
                      value: O(V)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (q) => L(V)
                    }, {
                      default: i(() => [...S[11] || (S[11] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: R
                    }, {
                      default: i(() => [...S[12] || (S[12] = [
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
            w.value.length ? (o(), x($e, {
              key: 3,
              title: "MISSING",
              count: w.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (o(!0), s(W, null, ee(w.value, (V) => (o(), x(Me, {
                  key: V.name,
                  status: "missing"
                }, {
                  icon: i(() => [...S[13] || (S[13] = [
                    y("!", -1)
                  ])]),
                  title: i(() => [
                    y(l(V.name), 1)
                  ]),
                  subtitle: i(() => [...S[14] || (S[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: i(() => [
                    g(we, {
                      label: "Required by:",
                      value: O(V)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    g(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (q) => L(V)
                    }, {
                      default: i(() => [...S[15] || (S[15] = [
                        y(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    g(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => N(V.name)
                    }, {
                      default: i(() => [...S[16] || (S[16] = [
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
            !z.value.length && !w.value.length && !k.value.length ? (o(), x(Fe, {
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
        onClose: S[3] || (S[3] = (V) => d.value = !1)
      }, {
        content: i(() => [...S[17] || (S[17] = [
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
          g(Z, {
            variant: "primary",
            onClick: S[2] || (S[2] = (V) => d.value = !1)
          }, {
            default: i(() => [...S[18] || (S[18] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      I.value ? (o(), x(km, {
        key: 0,
        node: I.value,
        onClose: S[4] || (S[4] = (V) => I.value = null)
      }, null, 8, ["node"])) : c("", !0)
    ], 64));
  }
}), xm = /* @__PURE__ */ Q(Cm, [["__scopeId", "data-v-4ac1465a"]]), Sm = { class: "remote-url-display" }, Im = ["title"], Em = ["title"], Mm = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, zm = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Lm = /* @__PURE__ */ Y({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const u = t, n = $(!1), r = F(() => {
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
    return (f, h) => (o(), s("div", Sm, [
      e("span", {
        class: "url-text",
        title: t.url
      }, l(r.value), 9, Im),
      e("button", {
        class: se(["copy-btn", { copied: n.value }]),
        onClick: p,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (o(), s("svg", zm, [...h[1] || (h[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), s("svg", Mm, [...h[0] || (h[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Em)
    ]));
  }
}), Qt = /* @__PURE__ */ Q(Lm, [["__scopeId", "data-v-7768a58d"]]), Tm = { class: "remote-title" }, Rm = {
  key: 0,
  class: "default-badge"
}, Nm = {
  key: 1,
  class: "sync-badge"
}, Dm = {
  key: 0,
  class: "ahead"
}, Om = {
  key: 1,
  class: "behind"
}, Um = {
  key: 0,
  class: "tracking-info"
}, Pm = /* @__PURE__ */ Y({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: u }) {
    const n = t, r = F(() => n.fetchingRemote === n.remote.name), p = F(() => n.remote.is_default), f = F(() => !!n.trackingBranch);
    function h(m) {
      const a = new Date(m), b = (/* @__PURE__ */ new Date()).getTime() - a.getTime(), d = Math.floor(b / 6e4);
      if (d < 1) return "Just now";
      if (d < 60) return `${d}m ago`;
      const I = Math.floor(d / 60);
      if (I < 24) return `${I}h ago`;
      const _ = Math.floor(I / 24);
      return _ < 7 ? `${_}d ago` : a.toLocaleDateString();
    }
    return (m, a) => (o(), x(Me, {
      status: p.value ? "synced" : void 0
    }, {
      icon: i(() => [
        y(l(p.value ? "🔗" : "🌐"), 1)
      ]),
      title: i(() => [
        e("div", Tm, [
          e("span", null, l(t.remote.name), 1),
          p.value ? (o(), s("span", Rm, "DEFAULT")) : c("", !0),
          t.syncStatus ? (o(), s("span", Nm, [
            t.syncStatus.ahead > 0 ? (o(), s("span", Dm, "↑" + l(t.syncStatus.ahead), 1)) : c("", !0),
            t.syncStatus.behind > 0 ? (o(), s("span", Om, "↓" + l(t.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        f.value ? (o(), s("span", Um, " Tracking: " + l(t.trackingBranch), 1)) : c("", !0)
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
          t.remote.push_url !== t.remote.fetch_url ? (o(), x(we, {
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
          (v = t.syncStatus) != null && v.last_fetch ? (o(), x(we, {
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
        g(Z, {
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
        g(Z, {
          variant: "secondary",
          size: "xs",
          onClick: a[1] || (a[1] = (v) => m.$emit("edit", t.remote.name))
        }, {
          default: i(() => [...a[4] || (a[4] = [
            y(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        p.value ? c("", !0) : (o(), x(Z, {
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
}), Bm = /* @__PURE__ */ Q(Pm, [["__scopeId", "data-v-17362e45"]]), Fm = ["for"], Am = {
  key: 0,
  class: "base-form-field-required"
}, Vm = { class: "base-form-field-input" }, Wm = {
  key: 1,
  class: "base-form-field-error"
}, Gm = {
  key: 2,
  class: "base-form-field-hint"
}, jm = /* @__PURE__ */ Y({
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
    const u = t, n = F(() => u.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, p) => (o(), s("div", {
      class: se(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), s("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        y(l(t.label) + " ", 1),
        t.required ? (o(), s("span", Am, "*")) : c("", !0)
      ], 8, Fm)) : c("", !0),
      e("div", Vm, [
        ue(r.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), s("span", Wm, l(t.error), 1)) : t.hint ? (o(), s("span", Gm, l(t.hint), 1)) : c("", !0)
    ], 2));
  }
}), Pt = /* @__PURE__ */ Q(jm, [["__scopeId", "data-v-9a1cf296"]]), Hm = { class: "remote-form" }, Km = { class: "form-header" }, qm = { class: "form-body" }, Jm = {
  key: 0,
  class: "form-error"
}, Ym = { class: "form-actions" }, Qm = /* @__PURE__ */ Y({
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
    const m = F(() => p.value.name.trim() !== "" && p.value.fetchUrl.trim() !== "");
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
    return (v, b) => (o(), s("div", Hm, [
      e("div", Km, [
        g(Oe, null, {
          default: i(() => [
            y(l(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", qm, [
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
        h.value ? (o(), s("div", Jm, l(h.value), 1)) : c("", !0)
      ]),
      e("div", Ym, [
        g(Z, {
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
        g(Z, {
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
}), Xm = /* @__PURE__ */ Q(Qm, [["__scopeId", "data-v-56021b18"]]), Zm = { key: 0 }, ev = /* @__PURE__ */ Y({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: u,
      addRemote: n,
      removeRemote: r,
      updateRemoteUrl: p,
      fetchRemote: f,
      getRemoteSyncStatus: h
    } = Se(), m = $([]), a = $(null), v = $({}), b = $(!1), d = $(null), I = $(""), _ = $(!1), z = $(null), w = $(!1), k = $("add"), T = $({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), O = F(() => {
      if (!I.value.trim()) return m.value;
      const q = I.value.toLowerCase();
      return m.value.filter(
        (oe) => oe.name.toLowerCase().includes(q) || oe.fetch_url.toLowerCase().includes(q) || oe.push_url.toLowerCase().includes(q)
      );
    });
    function L(q) {
      var oe;
      return ((oe = a.value) == null ? void 0 : oe.remote) === q;
    }
    async function R() {
      b.value = !0, d.value = null;
      try {
        const q = await u();
        m.value = q.remotes, a.value = q.current_branch_tracking || null, await Promise.all(
          q.remotes.map(async (oe) => {
            const ne = await h(oe.name);
            ne && (v.value[oe.name] = ne);
          })
        );
      } catch (q) {
        d.value = q instanceof Error ? q.message : "Failed to load remotes";
      } finally {
        b.value = !1;
      }
    }
    function G() {
      k.value = "add", T.value = { name: "", fetchUrl: "", pushUrl: "" }, w.value = !0;
    }
    function U(q) {
      const oe = m.value.find((ne) => ne.name === q);
      oe && (k.value = "edit", T.value = {
        name: oe.name,
        fetchUrl: oe.fetch_url,
        pushUrl: oe.push_url
      }, w.value = !0);
    }
    async function N(q) {
      try {
        k.value === "add" ? await n(q.name, q.fetchUrl) : await p(q.name, q.fetchUrl, q.pushUrl || void 0), w.value = !1, await R();
      } catch (oe) {
        d.value = oe instanceof Error ? oe.message : "Operation failed";
      }
    }
    function P() {
      w.value = !1, T.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function M(q) {
      z.value = q;
      try {
        await f(q);
        const oe = await h(q);
        oe && (v.value[q] = oe);
      } catch (oe) {
        d.value = oe instanceof Error ? oe.message : "Fetch failed";
      } finally {
        z.value = null;
      }
    }
    async function S(q) {
      if (confirm(`Remove remote "${q}"?`))
        try {
          await r(q), await R();
        } catch (oe) {
          d.value = oe instanceof Error ? oe.message : "Failed to remove remote";
        }
    }
    function V() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return Ce(R), (q, oe) => (o(), s(W, null, [
      g(Re, null, {
        header: i(() => [
          g(Ne, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: oe[0] || (oe[0] = (ne) => _.value = !0)
          }, {
            actions: i(() => [
              w.value ? c("", !0) : (o(), x(Z, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: G
              }, {
                default: i(() => [...oe[3] || (oe[3] = [
                  y(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          w.value ? c("", !0) : (o(), x(ft, {
            key: 0,
            modelValue: I.value,
            "onUpdate:modelValue": oe[1] || (oe[1] = (ne) => I.value = ne),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: i(() => [
          b.value ? (o(), x(Ye, {
            key: 0,
            message: "Loading remotes..."
          })) : d.value ? (o(), x(Qe, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: R
          }, null, 8, ["message"])) : (o(), s(W, { key: 2 }, [
            w.value ? (o(), x(Xm, {
              key: 0,
              mode: k.value,
              "remote-name": T.value.name,
              "fetch-url": T.value.fetchUrl,
              "push-url": T.value.pushUrl,
              onSubmit: N,
              onCancel: P
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            m.value.length && !w.value ? (o(), x(gt, {
              key: 1,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + l(m.value.length) + " remote" + l(m.value.length !== 1 ? "s" : "") + " ", 1),
                a.value ? (o(), s("span", Zm, " • Tracking: " + l(a.value.remote) + "/" + l(a.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            O.value.length && !w.value ? (o(), x($e, {
              key: 2,
              title: "REMOTES",
              count: O.value.length
            }, {
              default: i(() => [
                (o(!0), s(W, null, ee(O.value, (ne) => {
                  var K;
                  return o(), x(Bm, {
                    key: ne.name,
                    remote: ne,
                    "sync-status": v.value[ne.name],
                    "tracking-branch": L(ne.name) ? (K = a.value) == null ? void 0 : K.branch : void 0,
                    "fetching-remote": z.value,
                    onFetch: M,
                    onEdit: U,
                    onRemove: S
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !O.value.length && !w.value ? (o(), x(Fe, {
              key: 3,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: i(() => [
                g(Z, {
                  variant: "primary",
                  onClick: G
                }, {
                  default: i(() => [...oe[4] || (oe[4] = [
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
        show: _.value,
        title: "About Git Remotes",
        onClose: oe[2] || (oe[2] = (ne) => _.value = !1)
      }, {
        content: i(() => [...oe[5] || (oe[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            y(" The "),
            e("strong", null, '"origin"'),
            y(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: i(() => [
          g(Z, {
            variant: "link",
            onClick: V
          }, {
            default: i(() => [...oe[6] || (oe[6] = [
              y(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), tv = /* @__PURE__ */ Q(ev, [["__scopeId", "data-v-a75719bb"]]), ov = { class: "setting-info" }, sv = { class: "setting-label" }, nv = {
  key: 0,
  class: "required-marker"
}, av = {
  key: 0,
  class: "setting-description"
}, lv = { class: "setting-control" }, iv = /* @__PURE__ */ Y({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (o(), s("div", {
      class: se(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", ov, [
        e("div", sv, [
          y(l(t.label) + " ", 1),
          t.required ? (o(), s("span", nv, "*")) : c("", !0)
        ]),
        t.description ? (o(), s("div", av, l(t.description), 1)) : c("", !0)
      ]),
      e("div", lv, [
        ue(u.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Ke = /* @__PURE__ */ Q(iv, [["__scopeId", "data-v-cb5d236c"]]), rv = { class: "toggle" }, dv = ["checked", "disabled"], cv = /* @__PURE__ */ Y({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (o(), s("label", rv, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, dv),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), it = /* @__PURE__ */ Q(cv, [["__scopeId", "data-v-71c0f550"]]), uv = { class: "settings-section" }, mv = { class: "path-setting" }, vv = { class: "path-value" }, fv = { class: "path-setting" }, gv = { class: "path-value" }, pv = { class: "settings-section" }, hv = { class: "settings-section" }, yv = { class: "settings-section" }, wv = /* @__PURE__ */ Y({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: u, updateConfig: n } = Se(), r = $(!1), p = $(null), f = $(null), h = $(null), m = $(null), a = $(""), v = $(""), b = $(!0), d = $(!0), I = $(!1), _ = F(() => m.value ? a.value !== (m.value.civitai_api_key || "") : !1);
    async function z() {
      r.value = !0, p.value = null;
      try {
        h.value = await u(), m.value = { ...h.value }, a.value = h.value.civitai_api_key || "", v.value = h.value.huggingface_token || "", b.value = h.value.auto_sync_models, d.value = h.value.confirm_destructive;
        const O = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        I.value = O === "true";
      } catch (O) {
        p.value = O instanceof Error ? O.message : "Failed to load settings";
      } finally {
        r.value = !1;
      }
    }
    async function w() {
      var O;
      f.value = null;
      try {
        const L = {};
        a.value !== (((O = m.value) == null ? void 0 : O.civitai_api_key) || "") && (L.civitai_api_key = a.value || null), await n(L), await z(), f.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          f.value = null;
        }, 3e3);
      } catch (L) {
        f.value = {
          type: "error",
          message: L instanceof Error ? L.message : "Failed to save settings"
        };
      }
    }
    function k() {
      m.value && (a.value = m.value.civitai_api_key || "", v.value = m.value.huggingface_token || "", b.value = m.value.auto_sync_models, d.value = m.value.confirm_destructive, f.value = null);
    }
    function T(O) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(O)), console.log("[ComfyGit] Auto-refresh setting saved:", O);
    }
    return Ce(z), (O, L) => (o(), x(Re, null, {
      header: i(() => [
        g(Ne, { title: "WORKSPACE SETTINGS" }, {
          actions: i(() => [
            g(Z, {
              variant: "primary",
              size: "sm",
              disabled: !_.value,
              onClick: w
            }, {
              default: i(() => [...L[5] || (L[5] = [
                y(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            _.value ? (o(), x(Z, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: k
            }, {
              default: i(() => [...L[6] || (L[6] = [
                y(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        r.value ? (o(), x(Ye, {
          key: 0,
          message: "Loading workspace settings..."
        })) : p.value ? (o(), x(Qe, {
          key: 1,
          message: p.value,
          retry: !0,
          onRetry: z
        }, null, 8, ["message"])) : (o(), s(W, { key: 2 }, [
          g($e, { title: "WORKSPACE PATHS" }, {
            default: i(() => {
              var R, G;
              return [
                e("div", uv, [
                  e("div", mv, [
                    L[7] || (L[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    L[8] || (L[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", vv, l(((R = h.value) == null ? void 0 : R.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", fv, [
                    L[9] || (L[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    L[10] || (L[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", gv, l(((G = h.value) == null ? void 0 : G.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          g($e, { title: "API CREDENTIALS" }, {
            default: i(() => [
              e("div", pv, [
                g(Ke, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: i(() => [
                    g(Lt, {
                      modelValue: a.value,
                      "onUpdate:modelValue": L[0] || (L[0] = (R) => a.value = R),
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
                      "onUpdate:modelValue": L[1] || (L[1] = (R) => v.value = R),
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
              e("div", hv, [
                g(Ke, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: i(() => [
                    g(it, {
                      modelValue: I.value,
                      "onUpdate:modelValue": [
                        L[2] || (L[2] = (R) => I.value = R),
                        T
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
              e("div", yv, [
                g(Ke, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    g(it, {
                      modelValue: b.value,
                      "onUpdate:modelValue": L[3] || (L[3] = (R) => b.value = R),
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
                      "onUpdate:modelValue": L[4] || (L[4] = (R) => d.value = R),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          f.value ? (o(), x(gt, {
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
}), kv = /* @__PURE__ */ Q(wv, [["__scopeId", "data-v-7861bd35"]]), bv = /* @__PURE__ */ Y({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: u } = Se(), n = $([]), r = $(!1), p = $(null), f = $(!1), h = $(null), m = F(() => n.value.length === 0 ? [] : n.value.map((v) => ({
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
    return Ce(a), (v, b) => (o(), s(W, null, [
      g(Re, null, {
        header: i(() => [
          g(Ne, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (d) => f.value = !0)
          }, {
            actions: i(() => [
              g(Z, {
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
          r.value ? (o(), x(Ye, {
            key: 0,
            message: "Loading workspace logs..."
          })) : p.value ? (o(), x(Qe, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: a
          }, null, 8, ["message"])) : (o(), s(W, { key: 2 }, [
            n.value.length === 0 ? (o(), x(Fe, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: h,
              class: "log-output"
            }, [
              (o(!0), s(W, null, ee(m.value, (d, I) => (o(), s("div", {
                key: I,
                class: se(`log-line log-level-${d.level.toLowerCase()}`)
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
          g(Z, {
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
}), _v = /* @__PURE__ */ Q(bv, [["__scopeId", "data-v-39f6a756"]]), $v = /* @__PURE__ */ Y({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: u, getStatus: n } = Se(), r = $([]), p = $(!1), f = $(null), h = $(!1), m = $("production"), a = $(null), v = F(() => r.value.length === 0 ? [] : r.value.map((d) => ({
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
    return Ce(b), (d, I) => (o(), s(W, null, [
      g(Re, null, {
        header: i(() => [
          g(Ne, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (_) => h.value = !0)
          }, {
            actions: i(() => [
              g(Z, {
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
          p.value ? (o(), x(Ye, {
            key: 0,
            message: "Loading environment logs..."
          })) : f.value ? (o(), x(Qe, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (o(), s(W, { key: 2 }, [
            r.value.length === 0 ? (o(), x(Fe, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: a,
              class: "log-output"
            }, [
              (o(!0), s(W, null, ee(v.value, (_, z) => (o(), s("div", {
                key: z,
                class: se(`log-line log-level-${_.level.toLowerCase()}`)
              }, l(_.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      g(Je, {
        show: h.value,
        title: "About Environment Logs",
        onClose: I[2] || (I[2] = (_) => h.value = !1)
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
          g(Z, {
            variant: "primary",
            onClick: I[1] || (I[1] = (_) => h.value = !1)
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
}), Cv = /* @__PURE__ */ Q($v, [["__scopeId", "data-v-4f1e6f72"]]), xv = { class: "env-title" }, Sv = {
  key: 0,
  class: "current-badge"
}, Iv = {
  key: 0,
  class: "branch-info"
}, Ev = /* @__PURE__ */ Y({
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
    return (u, n) => (o(), x(Me, {
      status: t.isCurrent ? "synced" : void 0
    }, Tt({
      icon: i(() => [
        y(l(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: i(() => [
        e("div", xv, [
          e("span", null, l(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), s("span", Sv, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: i(() => [
        t.currentBranch ? (o(), s("span", Iv, [
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
          t.lastUsed && t.showLastUsed ? (o(), x(we, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : c("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Mv = /* @__PURE__ */ Q(Ev, [["__scopeId", "data-v-9231917a"]]), zv = { class: "env-details" }, Lv = { class: "status-row" }, Tv = {
  key: 0,
  class: "detail-row"
}, Rv = { class: "value mono" }, Nv = {
  key: 1,
  class: "detail-row"
}, Dv = { class: "value mono small" }, Ov = { class: "detail-row" }, Uv = { class: "value" }, Pv = { class: "detail-row" }, Bv = { class: "value" }, Fv = { class: "detail-row" }, Av = { class: "value" }, Vv = {
  key: 2,
  class: "section-divider"
}, Wv = {
  key: 3,
  class: "detail-row"
}, Gv = { class: "value" }, jv = {
  key: 4,
  class: "detail-row"
}, Hv = { class: "value" }, Kv = { class: "footer-actions" }, qv = /* @__PURE__ */ Y({
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
    return (p, f) => (o(), x(et, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: f[2] || (f[2] = (h) => n("close"))
    }, {
      body: i(() => [
        e("div", zv, [
          e("div", Lv, [
            f[3] || (f[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: se(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, l(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (o(), s("div", Tv, [
            f[4] || (f[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", Rv, l(t.environment.current_branch), 1)
          ])) : c("", !0),
          t.environment.path ? (o(), s("div", Nv, [
            f[5] || (f[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", Dv, l(t.environment.path), 1)
          ])) : c("", !0),
          f[11] || (f[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Ov, [
            f[6] || (f[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", Uv, l(t.environment.workflow_count), 1)
          ]),
          e("div", Pv, [
            f[7] || (f[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Bv, l(t.environment.node_count), 1)
          ]),
          e("div", Fv, [
            f[8] || (f[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Av, l(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (o(), s("div", Vv)) : c("", !0),
          t.environment.created_at ? (o(), s("div", Wv, [
            f[9] || (f[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", Gv, l(r(t.environment.created_at)), 1)
          ])) : c("", !0),
          t.environment.last_used ? (o(), s("div", jv, [
            f[10] || (f[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", Hv, l(r(t.environment.last_used)), 1)
          ])) : c("", !0)
        ])
      ]),
      footer: i(() => [
        e("div", Kv, [
          t.canDelete ? (o(), x(ie, {
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
          g(ie, {
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
}), Jv = /* @__PURE__ */ Q(qv, [["__scopeId", "data-v-59855453"]]), Yv = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Qv = "3.12", Xv = [
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
], Zv = "auto", ef = { class: "create-env-form" }, tf = { class: "form-field" }, of = { class: "form-field" }, sf = ["value"], nf = { class: "form-field" }, af = ["disabled"], lf = ["value"], rf = { class: "form-field" }, df = ["value"], cf = { class: "form-field form-field--checkbox" }, uf = { class: "form-checkbox" }, mf = /* @__PURE__ */ Y({
  __name: "CreateEnvironmentModal",
  emits: ["close", "create"],
  setup(t, { emit: u }) {
    const n = u, { getComfyUIReleases: r } = Se(), p = $(""), f = $(Qv), h = $("latest"), m = $(Zv), a = $(!1), v = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), b = $(!1), d = $(null);
    function I() {
      const z = p.value.trim();
      if (!z) return;
      const w = {
        name: z,
        python_version: f.value,
        comfyui_version: h.value,
        torch_backend: m.value,
        switch_after: a.value
      };
      n("create", w);
    }
    async function _() {
      b.value = !0;
      try {
        v.value = await r();
      } catch (z) {
        console.error("Failed to load ComfyUI releases:", z);
      } finally {
        b.value = !1;
      }
    }
    return Ce(async () => {
      var z;
      await So(), (z = d.value) == null || z.focus(), _();
    }), (z, w) => (o(), x(et, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      onClose: w[6] || (w[6] = (k) => n("close"))
    }, {
      body: i(() => [
        e("div", ef, [
          e("div", tf, [
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
          e("div", of, [
            w[8] || (w[8] = e("label", { class: "form-label" }, "Python Version", -1)),
            dt(e("select", {
              "onUpdate:modelValue": w[1] || (w[1] = (k) => f.value = k),
              class: "form-select"
            }, [
              (o(!0), s(W, null, ee(fe(Yv), (k) => (o(), s("option", {
                key: k,
                value: k
              }, l(k), 9, sf))), 128))
            ], 512), [
              [Ot, f.value]
            ])
          ]),
          e("div", nf, [
            w[9] || (w[9] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            dt(e("select", {
              "onUpdate:modelValue": w[2] || (w[2] = (k) => h.value = k),
              class: "form-select",
              disabled: b.value
            }, [
              (o(!0), s(W, null, ee(v.value, (k) => (o(), s("option", {
                key: k.tag_name,
                value: k.tag_name
              }, l(k.name), 9, lf))), 128))
            ], 8, af), [
              [Ot, h.value]
            ])
          ]),
          e("div", rf, [
            w[10] || (w[10] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            dt(e("select", {
              "onUpdate:modelValue": w[3] || (w[3] = (k) => m.value = k),
              class: "form-select"
            }, [
              (o(!0), s(W, null, ee(fe(Xv), (k) => (o(), s("option", {
                key: k,
                value: k
              }, l(k) + l(k === "auto" ? " (detect GPU)" : ""), 9, df))), 128))
            ], 512), [
              [Ot, m.value]
            ])
          ]),
          e("div", cf, [
            e("label", uf, [
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
        g(ie, {
          variant: "primary",
          disabled: !p.value.trim(),
          onClick: I
        }, {
          default: i(() => [...w[12] || (w[12] = [
            y(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        g(ie, {
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
}), vf = /* @__PURE__ */ Q(mf, [["__scopeId", "data-v-a2f13447"]]), ff = /* @__PURE__ */ Y({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete"],
  setup(t, { expose: u, emit: n }) {
    const r = n, { getEnvironments: p } = Se(), f = $([]), h = $(!1), m = $(null), a = $(""), v = $(!1), b = $(!1), d = $(null), I = F(
      () => f.value.find((L) => L.is_current)
    ), _ = F(() => {
      if (!a.value.trim()) return f.value;
      const L = a.value.toLowerCase();
      return f.value.filter(
        (R) => {
          var G;
          return R.name.toLowerCase().includes(L) || ((G = R.current_branch) == null ? void 0 : G.toLowerCase().includes(L));
        }
      );
    });
    function z(L) {
      r("create", L), b.value = !1;
    }
    function w() {
      b.value = !0;
    }
    function k(L) {
      d.value = L;
    }
    function T(L) {
      d.value = null, r("delete", L);
    }
    async function O() {
      h.value = !0, m.value = null;
      try {
        f.value = await p();
      } catch (L) {
        m.value = L instanceof Error ? L.message : "Failed to load environments";
      } finally {
        h.value = !1;
      }
    }
    return Ce(O), u({
      loadEnvironments: O
    }), (L, R) => (o(), s(W, null, [
      g(Re, null, {
        header: i(() => [
          g(Ne, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (G) => v.value = !0)
          }, {
            actions: i(() => [
              g(Z, {
                variant: "primary",
                size: "sm",
                onClick: w
              }, {
                default: i(() => [...R[6] || (R[6] = [
                  y(" Create ", -1)
                ])]),
                _: 1
              }),
              g(Z, {
                variant: "secondary",
                size: "sm",
                onClick: O
              }, {
                default: i(() => [...R[7] || (R[7] = [
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
            "onUpdate:modelValue": R[1] || (R[1] = (G) => a.value = G),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          h.value ? (o(), x(Ye, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (o(), x(Qe, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (o(), s(W, { key: 2 }, [
            f.value.length ? (o(), x(gt, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                y(" Total: " + l(f.value.length) + " " + l(f.value.length === 1 ? "environment" : "environments") + " ", 1),
                I.value ? (o(), s(W, { key: 0 }, [
                  R[8] || (R[8] = y(" • Current: ", -1)),
                  e("strong", null, l(I.value.name), 1)
                ], 64)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            _.value.length ? (o(), x($e, {
              key: 1,
              title: "ENVIRONMENTS",
              count: _.value.length
            }, {
              default: i(() => [
                (o(!0), s(W, null, ee(_.value, (G) => (o(), x(Mv, {
                  key: G.name,
                  "environment-name": G.name,
                  "is-current": G.is_current,
                  "current-branch": G.current_branch,
                  "show-last-used": !1
                }, {
                  actions: i(() => [
                    G.is_current ? c("", !0) : (o(), x(Z, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (U) => L.$emit("switch", G.name)
                    }, {
                      default: i(() => [...R[9] || (R[9] = [
                        y(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    g(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (U) => k(G)
                    }, {
                      default: i(() => [...R[10] || (R[10] = [
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
            _.value.length ? c("", !0) : (o(), x(Fe, {
              key: 2,
              icon: "🌍",
              message: a.value ? `No environments match '${a.value}'` : "No environments found. Create one to get started!"
            }, Tt({ _: 2 }, [
              a.value ? void 0 : {
                name: "actions",
                fn: i(() => [
                  g(Z, {
                    variant: "primary",
                    onClick: w
                  }, {
                    default: i(() => [...R[11] || (R[11] = [
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
        onClose: R[3] || (R[3] = (G) => v.value = !1)
      }, {
        content: i(() => [...R[12] || (R[12] = [
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
          g(Z, {
            variant: "secondary",
            onClick: R[2] || (R[2] = (G) => v.value = !1)
          }, {
            default: i(() => [...R[13] || (R[13] = [
              y(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      d.value ? (o(), x(Jv, {
        key: 0,
        environment: d.value,
        "can-delete": f.value.length > 1,
        onClose: R[4] || (R[4] = (G) => d.value = null),
        onDelete: T
      }, null, 8, ["environment", "can-delete"])) : c("", !0),
      b.value ? (o(), x(vf, {
        key: 1,
        onClose: R[5] || (R[5] = (G) => b.value = !1),
        onCreate: z
      })) : c("", !0)
    ], 64));
  }
}), gf = /* @__PURE__ */ Q(ff, [["__scopeId", "data-v-307d9926"]]), pf = { class: "file-path" }, hf = { class: "file-path-text" }, yf = ["title"], wf = /* @__PURE__ */ Y({
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
    return (p, f) => (o(), s("div", pf, [
      f[0] || (f[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", hf, l(t.path), 1),
      t.copyable ? (o(), s("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: r
      }, l(n.value ? "✓" : "📋"), 9, yf)) : c("", !0)
    ]));
  }
}), kf = /* @__PURE__ */ Q(wf, [["__scopeId", "data-v-f0982173"]]), bf = { class: "output-path-input" }, _f = { class: "export-actions" }, $f = {
  key: 1,
  class: "export-warning"
}, Cf = /* @__PURE__ */ Y({
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
    return (a, v) => (o(), s(W, null, [
      g(Re, null, {
        header: i(() => [
          g(Ne, { title: "EXPORT ENVIRONMENT" }, {
            actions: i(() => [
              g(Z, {
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
                  e("div", bf, [
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
              e("div", _f, [
                g(Z, {
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
                n.value ? (o(), x(Z, {
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
          p.value ? (o(), x($e, {
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
                        g(kf, {
                          path: p.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    p.value.models_without_sources !== void 0 ? (o(), x(we, {
                      key: 0,
                      label: "Models without sources:",
                      value: p.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : c("", !0),
                    p.value.models_without_sources && p.value.models_without_sources > 0 ? (o(), s("div", $f, [...v[14] || (v[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : c("", !0)
                  ]),
                  key: "0"
                } : void 0,
                p.value.status === "success" ? {
                  name: "actions",
                  fn: i(() => [
                    g(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: m
                    }, {
                      default: i(() => [...v[15] || (v[15] = [
                        y(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    g(Z, {
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
}), xf = /* @__PURE__ */ Q(Cf, [["__scopeId", "data-v-1777a9d5"]]), Sf = { class: "file-input-wrapper" }, If = ["accept", "multiple", "disabled"], Ef = /* @__PURE__ */ Y({
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
    }), (m, a) => (o(), s("div", Sf, [
      e("input", {
        ref_key: "fileInputRef",
        ref: p,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: h
      }, null, 40, If),
      g(Z, {
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
}), Mf = /* @__PURE__ */ Q(Ef, [["__scopeId", "data-v-cd192091"]]), zf = {
  key: 0,
  class: "drop-zone-empty"
}, Lf = { class: "drop-zone-text" }, Tf = { class: "drop-zone-primary" }, Rf = { class: "drop-zone-secondary" }, Nf = { class: "drop-zone-actions" }, Df = {
  key: 1,
  class: "drop-zone-file"
}, Of = { class: "file-info" }, Uf = { class: "file-details" }, Pf = { class: "file-name" }, Bf = { class: "file-size" }, Ff = /* @__PURE__ */ Y({
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
    const n = u, r = $(!1), p = $(null), f = $(0), h = F(() => p.value !== null), m = F(() => {
      var k;
      return ((k = p.value) == null ? void 0 : k.name) || "";
    }), a = F(() => {
      if (!p.value) return "";
      const k = p.value.size;
      return k < 1024 ? `${k} B` : k < 1024 * 1024 ? `${(k / 1024).toFixed(1)} KB` : k < 1024 * 1024 * 1024 ? `${(k / (1024 * 1024)).toFixed(1)} MB` : `${(k / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v(k) {
      var T;
      f.value++, (T = k.dataTransfer) != null && T.types.includes("Files") && (r.value = !0);
    }
    function b(k) {
      k.dataTransfer && (k.dataTransfer.dropEffect = "copy");
    }
    function d() {
      f.value--, f.value === 0 && (r.value = !1);
    }
    function I(k) {
      var O;
      f.value = 0, r.value = !1;
      const T = (O = k.dataTransfer) == null ? void 0 : O.files;
      T && T.length > 0 && z(T[0]);
    }
    function _(k) {
      k.length > 0 && z(k[0]);
    }
    function z(k) {
      p.value = k, n("fileSelected", k);
    }
    function w() {
      p.value = null, n("clear");
    }
    return (k, T) => (o(), s("div", {
      class: se(["file-drop-zone", { "drop-active": r.value, "has-file": h.value }]),
      onDragenter: _e(v, ["prevent"]),
      onDragover: _e(b, ["prevent"]),
      onDragleave: _e(d, ["prevent"]),
      onDrop: _e(I, ["prevent"])
    }, [
      h.value ? (o(), s("div", Df, [
        e("div", Of, [
          T[1] || (T[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Uf, [
            e("div", Pf, l(m.value), 1),
            e("div", Bf, l(a.value), 1)
          ])
        ]),
        g(Z, {
          variant: "ghost",
          size: "xs",
          onClick: w,
          title: "Remove file"
        }, {
          default: i(() => [...T[2] || (T[2] = [
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
      ])) : (o(), s("div", zf, [
        T[0] || (T[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", Lf, [
          e("p", Tf, l(t.primaryText), 1),
          e("p", Rf, l(t.secondaryText), 1)
        ]),
        e("div", Nf, [
          g(Mf, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: _
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
}), Af = /* @__PURE__ */ Q(Ff, [["__scopeId", "data-v-e00abbca"]]), Vf = { class: "import-preview" }, Wf = { class: "preview-header" }, Gf = {
  key: 0,
  class: "source-env"
}, jf = { class: "preview-content" }, Hf = { class: "preview-section" }, Kf = { class: "section-header" }, qf = { class: "section-info" }, Jf = { class: "section-count" }, Yf = {
  key: 0,
  class: "item-list"
}, Qf = { class: "item-name" }, Xf = {
  key: 0,
  class: "item-more"
}, Zf = { class: "preview-section" }, eg = { class: "section-header" }, tg = { class: "section-info" }, og = { class: "section-count" }, sg = {
  key: 0,
  class: "item-list"
}, ng = { class: "item-details" }, ag = { class: "item-name" }, lg = { class: "item-meta" }, ig = {
  key: 0,
  class: "item-more"
}, rg = { class: "preview-section" }, dg = { class: "section-header" }, cg = { class: "section-info" }, ug = { class: "section-count" }, mg = {
  key: 0,
  class: "item-list"
}, vg = { class: "item-name" }, fg = {
  key: 0,
  class: "item-more"
}, gg = {
  key: 0,
  class: "preview-section"
}, pg = { class: "git-info" }, hg = /* @__PURE__ */ Y({
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
    const u = t, n = F(() => u.workflows.length), r = F(() => u.models.length), p = F(() => u.nodes.length);
    function f(h) {
      return h < 1024 ? `${h} B` : h < 1024 * 1024 ? `${(h / 1024).toFixed(1)} KB` : h < 1024 * 1024 * 1024 ? `${(h / (1024 * 1024)).toFixed(1)} MB` : `${(h / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (h, m) => (o(), s("div", Vf, [
      e("div", Wf, [
        g(Oe, null, {
          default: i(() => [...m[0] || (m[0] = [
            y("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), s("span", Gf, [
          m[1] || (m[1] = y(" From: ", -1)),
          g(At, null, {
            default: i(() => [
              y(l(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      e("div", jf, [
        e("div", Hf, [
          e("div", Kf, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", qf, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Jf, l(n.value) + " file" + l(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), s("div", Yf, [
            (o(!0), s(W, null, ee(t.workflows.slice(0, t.maxPreviewItems), (a) => (o(), s("div", {
              key: a,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Qf, l(a), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), s("div", Xf, " +" + l(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", Zf, [
          e("div", eg, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", tg, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", og, l(r.value) + " file" + l(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), s("div", sg, [
            (o(!0), s(W, null, ee(t.models.slice(0, t.maxPreviewItems), (a) => (o(), s("div", {
              key: a.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", ng, [
                e("span", ag, l(a.filename), 1),
                e("span", lg, l(f(a.size)) + " • " + l(a.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), s("div", ig, " +" + l(t.models.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        e("div", rg, [
          e("div", dg, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", cg, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", ug, l(p.value) + " node" + l(p.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), s("div", mg, [
            (o(!0), s(W, null, ee(t.nodes.slice(0, t.maxPreviewItems), (a) => (o(), s("div", {
              key: a,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", vg, l(a), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), s("div", fg, " +" + l(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : c("", !0)
          ])) : c("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), s("div", gg, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", pg, [
            t.gitBranch ? (o(), x(we, {
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
            t.gitCommit ? (o(), x(we, {
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
}), yg = /* @__PURE__ */ Q(hg, [["__scopeId", "data-v-182fe113"]]), wg = { class: "import-options" }, kg = { class: "options-container" }, bg = { class: "option-section" }, _g = { class: "conflict-options" }, $g = ["value", "checked", "onChange"], Cg = { class: "conflict-content" }, xg = { class: "conflict-label" }, Sg = { class: "conflict-description" }, Ig = { class: "option-section" }, Eg = { class: "component-toggles" }, Mg = /* @__PURE__ */ Y({
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
    return (p, f) => (o(), s("div", wg, [
      g(Oe, null, {
        default: i(() => [...f[4] || (f[4] = [
          y("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", kg, [
        e("div", bg, [
          g(Ft, null, {
            default: i(() => [...f[5] || (f[5] = [
              y("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", _g, [
            (o(), s(W, null, ee(r, (h) => e("label", {
              key: h.value,
              class: se(["conflict-option", { active: t.conflictMode === h.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: h.value,
                checked: t.conflictMode === h.value,
                onChange: (m) => n("update:conflictMode", h.value)
              }, null, 40, $g),
              e("div", Cg, [
                e("span", xg, l(h.label), 1),
                e("span", Sg, l(h.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Ig, [
          g(Ft, null, {
            default: i(() => [...f[6] || (f[6] = [
              y("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Eg, [
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
}), zg = /* @__PURE__ */ Q(Mg, [["__scopeId", "data-v-0ec212b0"]]), Lg = {
  key: 0,
  class: "import-empty"
}, Tg = { class: "import-help" }, Rg = {
  key: 1,
  class: "import-configure"
}, Ng = { class: "selected-file-bar" }, Dg = { class: "file-bar-content" }, Og = { class: "file-bar-info" }, Ug = { class: "file-bar-name" }, Pg = { class: "file-bar-size" }, Bg = { class: "import-actions" }, Fg = {
  key: 2,
  class: "import-progress"
}, Ag = { class: "progress-content" }, Vg = { class: "progress-info" }, Wg = { class: "progress-title" }, Gg = { class: "progress-detail" }, jg = { class: "progress-bar" }, Hg = { class: "progress-status" }, Kg = {
  key: 3,
  class: "import-complete"
}, qg = { class: "complete-message" }, Jg = { class: "complete-title" }, Yg = { class: "complete-details" }, Qg = { class: "complete-actions" }, Xg = /* @__PURE__ */ Y({
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
    }), v = F(() => h.value.includeWorkflows || h.value.includeModels || h.value.includeNodes || h.value.includeGitHistory);
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
    async function _() {
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
            m.value = k, await new Promise((T) => setTimeout(T, 800));
          m.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((k) => setTimeout(k, 500)), p.value = !0, f.value = `Successfully imported ${a.value.workflows.length} workflows, ${a.value.models.length} models, and ${a.value.nodes.length} custom nodes.`;
        } catch (w) {
          p.value = !1, f.value = w instanceof Error ? w.message : "Unknown error occurred during import";
        } finally {
          n.value = !1, r.value = !0;
        }
      }
    }
    function z(w) {
      return w < 1024 ? `${w} B` : w < 1024 * 1024 ? `${(w / 1024).toFixed(1)} KB` : w < 1024 * 1024 * 1024 ? `${(w / (1024 * 1024)).toFixed(1)} MB` : `${(w / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (w, k) => (o(), x(Re, null, {
      header: i(() => [
        g(Ne, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: i(() => [
        !u.value && !n.value ? (o(), s("div", Lg, [
          g(Af, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: b
          }),
          e("div", Tg, [
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
        ])) : u.value && !n.value && !r.value ? (o(), s("div", Rg, [
          e("div", Ng, [
            e("div", Dg, [
              k[7] || (k[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Og, [
                e("div", Ug, l(u.value.name), 1),
                e("div", Pg, l(z(u.value.size)), 1)
              ])
            ]),
            g(Z, {
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
          g(yg, {
            "source-environment": a.value.sourceEnvironment,
            workflows: a.value.workflows,
            models: a.value.models,
            nodes: a.value.nodes,
            "git-branch": a.value.gitBranch,
            "git-commit": a.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          g(zg, {
            "conflict-mode": h.value.conflictMode,
            "onUpdate:conflictMode": k[0] || (k[0] = (T) => h.value.conflictMode = T),
            "include-workflows": h.value.includeWorkflows,
            "onUpdate:includeWorkflows": k[1] || (k[1] = (T) => h.value.includeWorkflows = T),
            "include-models": h.value.includeModels,
            "onUpdate:includeModels": k[2] || (k[2] = (T) => h.value.includeModels = T),
            "include-nodes": h.value.includeNodes,
            "onUpdate:includeNodes": k[3] || (k[3] = (T) => h.value.includeNodes = T),
            "include-git-history": h.value.includeGitHistory,
            "onUpdate:includeGitHistory": k[4] || (k[4] = (T) => h.value.includeGitHistory = T)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !h.value.includeModels && a.value.models.length > 0 ? (o(), x(ct, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${a.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : c("", !0),
          e("div", Bg, [
            g(Z, {
              variant: "primary",
              size: "md",
              disabled: !v.value,
              onClick: _
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
            g(Z, {
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
        ])) : n.value ? (o(), s("div", Fg, [
          e("div", Ag, [
            k[11] || (k[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Vg, [
              e("div", Wg, l(m.value.message), 1),
              e("div", Gg, l(m.value.detail), 1)
            ])
          ]),
          e("div", jg, [
            e("div", {
              class: "progress-bar-fill",
              style: qe({ width: `${m.value.percent}%` })
            }, null, 4)
          ]),
          e("div", Hg, l(m.value.percent) + "% complete ", 1)
        ])) : r.value ? (o(), s("div", Kg, [
          e("div", {
            class: se(["complete-icon", p.value ? "success" : "error"])
          }, l(p.value ? "✓" : "✕"), 3),
          e("div", qg, [
            e("div", Jg, l(p.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Yg, l(f.value), 1)
          ]),
          e("div", Qg, [
            g(Z, {
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
}), Zg = /* @__PURE__ */ Q(Xg, [["__scopeId", "data-v-18e18eb5"]]), ep = { class: "header-info" }, tp = { class: "commit-hash" }, op = {
  key: 0,
  class: "commit-refs"
}, sp = { class: "commit-message" }, np = { class: "commit-date" }, ap = {
  key: 0,
  class: "loading"
}, lp = {
  key: 1,
  class: "changes-section"
}, ip = { class: "stats-row" }, rp = { class: "stat" }, dp = { class: "stat insertions" }, cp = { class: "stat deletions" }, up = {
  key: 0,
  class: "change-group"
}, mp = {
  key: 1,
  class: "change-group"
}, vp = {
  key: 0,
  class: "version"
}, fp = {
  key: 2,
  class: "change-group"
}, gp = { class: "change-item" }, pp = /* @__PURE__ */ Y({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const u = t, { getCommitDetail: n } = Se(), r = $(null), p = $(!0), f = F(() => {
      if (!r.value) return !1;
      const m = r.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), h = F(() => {
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
    }), (m, a) => (o(), x(et, {
      size: "md",
      "show-close-button": !1,
      onClose: a[3] || (a[3] = (v) => m.$emit("close"))
    }, {
      header: i(() => {
        var v, b, d, I;
        return [
          e("div", ep, [
            a[4] || (a[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", tp, l(((v = r.value) == null ? void 0 : v.short_hash) || t.commit.short_hash || ((b = t.commit.hash) == null ? void 0 : b.slice(0, 7))), 1),
            (I = (d = r.value) == null ? void 0 : d.refs) != null && I.length ? (o(), s("span", op, [
              (o(!0), s(W, null, ee(r.value.refs, (_) => (o(), s("span", {
                key: _,
                class: "ref-badge"
              }, l(_), 1))), 128))
            ])) : c("", !0)
          ]),
          g(ie, {
            variant: "ghost",
            size: "sm",
            onClick: a[0] || (a[0] = (_) => m.$emit("close"))
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
          e("div", sp, l(((v = r.value) == null ? void 0 : v.message) || t.commit.message), 1),
          e("div", np, l(((b = r.value) == null ? void 0 : b.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          p.value ? (o(), s("div", ap, "Loading details...")) : r.value ? (o(), s("div", lp, [
            e("div", ip, [
              e("span", rp, l(r.value.stats.files_changed) + " files", 1),
              e("span", dp, "+" + l(r.value.stats.insertions), 1),
              e("span", cp, "-" + l(r.value.stats.deletions), 1)
            ]),
            f.value ? (o(), s("div", up, [
              g(xt, { variant: "section" }, {
                default: i(() => [...a[6] || (a[6] = [
                  y("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(W, null, ee(r.value.changes.workflows.added, (d) => (o(), s("div", {
                key: "add-" + d,
                class: "change-item added"
              }, [
                a[7] || (a[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(d), 1)
              ]))), 128)),
              (o(!0), s(W, null, ee(r.value.changes.workflows.modified, (d) => (o(), s("div", {
                key: "mod-" + d,
                class: "change-item modified"
              }, [
                a[8] || (a[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, l(d), 1)
              ]))), 128)),
              (o(!0), s(W, null, ee(r.value.changes.workflows.deleted, (d) => (o(), s("div", {
                key: "del-" + d,
                class: "change-item deleted"
              }, [
                a[9] || (a[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(d), 1)
              ]))), 128))
            ])) : c("", !0),
            h.value ? (o(), s("div", mp, [
              g(xt, { variant: "section" }, {
                default: i(() => [...a[10] || (a[10] = [
                  y("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(W, null, ee(r.value.changes.nodes.added, (d) => (o(), s("div", {
                key: "add-" + d.name,
                class: "change-item added"
              }, [
                a[11] || (a[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, l(d.name), 1),
                d.version ? (o(), s("span", vp, "(" + l(d.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (o(!0), s(W, null, ee(r.value.changes.nodes.removed, (d) => (o(), s("div", {
                key: "rem-" + d.name,
                class: "change-item deleted"
              }, [
                a[12] || (a[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, l(d.name), 1)
              ]))), 128))
            ])) : c("", !0),
            r.value.changes.models.resolved > 0 ? (o(), s("div", fp, [
              g(xt, { variant: "section" }, {
                default: i(() => [...a[13] || (a[13] = [
                  y("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", gp, [
                a[14] || (a[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, l(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: i(() => [
        g(ie, {
          variant: "secondary",
          onClick: a[1] || (a[1] = (v) => m.$emit("createBranch", t.commit))
        }, {
          default: i(() => [...a[15] || (a[15] = [
            y(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        g(ie, {
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
}), hp = /* @__PURE__ */ Q(pp, [["__scopeId", "data-v-d256ff6d"]]), yp = { class: "dialog-message" }, wp = {
  key: 0,
  class: "dialog-details"
}, kp = {
  key: 1,
  class: "dialog-warning"
}, bp = /* @__PURE__ */ Y({
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
    return (u, n) => (o(), x(et, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (r) => u.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", yp, l(t.message), 1),
        t.details && t.details.length ? (o(), s("div", wp, [
          (o(!0), s(W, null, ee(t.details, (r, p) => (o(), s("div", {
            key: p,
            class: "detail-item"
          }, " • " + l(r), 1))), 128))
        ])) : c("", !0),
        t.warning ? (o(), s("p", kp, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          y(" " + l(t.warning), 1)
        ])) : c("", !0)
      ]),
      footer: i(() => [
        g(ie, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (r) => u.$emit("cancel"))
        }, {
          default: i(() => [
            y(l(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), x(ie, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (r) => u.$emit("secondary"))
        }, {
          default: i(() => [
            y(l(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        g(ie, {
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
}), _p = /* @__PURE__ */ Q(bp, [["__scopeId", "data-v-3670b9f5"]]), $p = { class: "base-textarea-wrapper" }, Cp = ["value", "rows", "placeholder", "disabled", "maxlength"], xp = {
  key: 0,
  class: "base-textarea-count"
}, Sp = /* @__PURE__ */ Y({
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
    return (u, n) => (o(), s("div", $p, [
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
      }, null, 40, Cp),
      t.showCharCount && t.maxLength ? (o(), s("div", xp, l(t.modelValue.length) + " / " + l(t.maxLength), 1)) : c("", !0)
    ]));
  }
}), Xt = /* @__PURE__ */ Q(Sp, [["__scopeId", "data-v-5516e6fc"]]), Ip = ["checked", "disabled"], Ep = { class: "base-checkbox-box" }, Mp = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, zp = {
  key: 0,
  class: "base-checkbox-label"
}, Lp = /* @__PURE__ */ Y({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (o(), s("label", {
      class: se(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (r) => u.$emit("update:modelValue", r.target.checked))
      }, null, 40, Ip),
      e("span", Ep, [
        t.modelValue ? (o(), s("svg", Mp, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : c("", !0)
      ]),
      u.$slots.default ? (o(), s("span", zp, [
        ue(u.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Zt = /* @__PURE__ */ Q(Lp, [["__scopeId", "data-v-bf17c831"]]), Tp = { class: "popover-header" }, Rp = { class: "popover-body" }, Np = {
  key: 0,
  class: "changes-summary"
}, Dp = {
  key: 0,
  class: "change-item"
}, Op = {
  key: 1,
  class: "change-item"
}, Up = {
  key: 2,
  class: "change-item"
}, Pp = {
  key: 3,
  class: "change-item"
}, Bp = {
  key: 4,
  class: "change-item"
}, Fp = {
  key: 1,
  class: "no-changes"
}, Ap = {
  key: 2,
  class: "loading"
}, Vp = {
  key: 3,
  class: "issues-error"
}, Wp = { class: "error-header" }, Gp = { class: "error-title" }, jp = { class: "issues-list" }, Hp = { class: "message-section" }, Kp = { class: "popover-footer" }, qp = {
  key: 1,
  class: "commit-popover"
}, Jp = { class: "popover-header" }, Yp = { class: "popover-body" }, Qp = {
  key: 0,
  class: "changes-summary"
}, Xp = {
  key: 0,
  class: "change-item"
}, Zp = {
  key: 1,
  class: "change-item"
}, eh = {
  key: 2,
  class: "change-item"
}, th = {
  key: 3,
  class: "change-item"
}, oh = {
  key: 4,
  class: "change-item"
}, sh = {
  key: 1,
  class: "no-changes"
}, nh = {
  key: 2,
  class: "loading"
}, ah = {
  key: 3,
  class: "issues-error"
}, lh = { class: "error-header" }, ih = { class: "error-title" }, rh = { class: "issues-list" }, dh = { class: "message-section" }, ch = { class: "popover-footer" }, uh = /* @__PURE__ */ Y({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: u }) {
    const n = t, r = u, { commit: p } = Se(), f = $(""), h = $(!1), m = $(!1), a = $(null), v = F(() => {
      if (!n.status) return !1;
      const z = n.status.workflows;
      return z.new.length > 0 || z.modified.length > 0 || z.deleted.length > 0 || n.status.has_changes;
    }), b = F(() => {
      var z;
      return (z = n.status) != null && z.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (w) => w.has_issues && (w.sync_state === "new" || w.sync_state === "modified")
      ) : [];
    }), d = F(() => b.value.length > 0), I = F(() => d.value && !m.value);
    async function _() {
      var z, w, k;
      if (!(d.value && !m.value) && !(!v.value || !f.value.trim() || h.value)) {
        h.value = !0, a.value = null;
        try {
          const T = await p(f.value.trim(), m.value);
          T.status === "success" ? (a.value = {
            type: "success",
            message: `Committed: ${((z = T.summary) == null ? void 0 : z.new) || 0} new, ${((w = T.summary) == null ? void 0 : w.modified) || 0} modified, ${((k = T.summary) == null ? void 0 : k.deleted) || 0} deleted`
          }, f.value = "", m.value = !1, setTimeout(() => r("committed"), 1e3)) : T.status === "no_changes" ? a.value = { type: "error", message: "No changes to commit" } : T.status === "blocked" ? a.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : a.value = { type: "error", message: T.message || "Commit failed" };
        } catch (T) {
          a.value = { type: "error", message: T instanceof Error ? T.message : "Commit failed" };
        } finally {
          h.value = !1;
        }
      }
    }
    return (z, w) => t.asModal ? (o(), x(ze, {
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
          e("div", Tp, [
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
          e("div", Rp, [
            t.status && v.value ? (o(), s("div", Np, [
              t.status.workflows.new.length ? (o(), s("div", Dp, [
                w[12] || (w[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : c("", !0),
              t.status.workflows.modified.length ? (o(), s("div", Op, [
                w[13] || (w[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
              ])) : c("", !0),
              t.status.workflows.deleted.length ? (o(), s("div", Up, [
                w[14] || (w[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_added.length ? (o(), s("div", Pp, [
                w[15] || (w[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : c("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), s("div", Bp, [
                w[16] || (w[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : c("", !0)
            ])) : t.status ? (o(), s("div", Fp, " No changes to commit ")) : (o(), s("div", Ap, " Loading... ")),
            d.value ? (o(), s("div", Vp, [
              e("div", Wp, [
                w[17] || (w[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Gp, l(b.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", jp, [
                (o(!0), s(W, null, ee(b.value, (k) => (o(), s("div", {
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
            e("div", Hp, [
              g(Xt, {
                modelValue: f.value,
                "onUpdate:modelValue": w[2] || (w[2] = (k) => f.value = k),
                placeholder: I.value ? "Enable 'Allow issues' to commit" : v.value ? "Describe your changes..." : "No changes",
                disabled: !v.value || h.value || I.value,
                rows: 3,
                onCtrlEnter: _
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            a.value ? (o(), s("div", {
              key: 4,
              class: se(["result", a.value.type])
            }, l(a.value.message), 3)) : c("", !0)
          ]),
          e("div", Kp, [
            g(ie, {
              variant: "secondary",
              onClick: w[3] || (w[3] = (k) => r("close"))
            }, {
              default: i(() => [...w[19] || (w[19] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(ie, {
              variant: m.value ? "danger" : "primary",
              disabled: !v.value || !f.value.trim() || h.value || I.value,
              loading: h.value,
              onClick: _
            }, {
              default: i(() => [
                y(l(h.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), s("div", qp, [
      e("div", Jp, [
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
      e("div", Yp, [
        t.status && v.value ? (o(), s("div", Qp, [
          t.status.workflows.new.length ? (o(), s("div", Xp, [
            w[22] || (w[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          t.status.workflows.modified.length ? (o(), s("div", Zp, [
            w[23] || (w[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, l(t.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          t.status.workflows.deleted.length ? (o(), s("div", eh, [
            w[24] || (w[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_added.length ? (o(), s("div", th, [
            w[25] || (w[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, l(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), s("div", oh, [
            w[26] || (w[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, l(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : t.status ? (o(), s("div", sh, " No changes to commit ")) : (o(), s("div", nh, " Loading... ")),
        d.value ? (o(), s("div", ah, [
          e("div", lh, [
            w[27] || (w[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", ih, l(b.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", rh, [
            (o(!0), s(W, null, ee(b.value, (k) => (o(), s("div", {
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
        e("div", dh, [
          g(Xt, {
            modelValue: f.value,
            "onUpdate:modelValue": w[8] || (w[8] = (k) => f.value = k),
            placeholder: I.value ? "Enable 'Allow issues' to commit" : v.value ? "Describe your changes..." : "No changes",
            disabled: !v.value || h.value || I.value,
            rows: 3,
            onCtrlEnter: _
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        a.value ? (o(), s("div", {
          key: 4,
          class: se(["result", a.value.type])
        }, l(a.value.message), 3)) : c("", !0)
      ]),
      e("div", ch, [
        g(ie, {
          variant: "secondary",
          onClick: w[9] || (w[9] = (k) => r("close"))
        }, {
          default: i(() => [...w[29] || (w[29] = [
            y(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g(ie, {
          variant: m.value ? "danger" : "primary",
          disabled: !v.value || !f.value.trim() || h.value || I.value,
          loading: h.value,
          onClick: _
        }, {
          default: i(() => [
            y(l(h.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), co = /* @__PURE__ */ Q(uh, [["__scopeId", "data-v-d92153de"]]), mh = { class: "modal-header" }, vh = { class: "modal-body" }, fh = { class: "switch-message" }, gh = { class: "switch-details" }, ph = { class: "modal-actions" }, hh = /* @__PURE__ */ Y({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (u, n) => (o(), x(ze, { to: "body" }, [
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
          e("div", mh, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", vh, [
            e("p", fh, [
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
            e("p", gh, ' Your current work will be preserved. You can switch back to "' + l(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", ph, [
            g(Z, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => u.$emit("close"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(Z, {
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
}), yh = /* @__PURE__ */ Q(hh, [["__scopeId", "data-v-e9c5253e"]]), wh = { class: "progress-bar" }, kh = /* @__PURE__ */ Y({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const u = t, n = F(() => `${Math.max(0, Math.min(100, u.progress))}%`);
    return (r, p) => (o(), s("div", wh, [
      e("div", {
        class: se(["progress-fill", t.variant]),
        style: qe({ width: n.value })
      }, null, 6)
    ]));
  }
}), bh = /* @__PURE__ */ Q(kh, [["__scopeId", "data-v-1beb0512"]]), _h = {
  key: 0,
  class: "modal-overlay"
}, $h = { class: "modal-content" }, Ch = { class: "modal-body" }, xh = { class: "progress-info" }, Sh = { class: "progress-percentage" }, Ih = { class: "progress-state" }, Eh = { class: "switch-steps" }, Mh = { class: "step-icon" }, zh = { class: "step-label" }, Lh = /* @__PURE__ */ Y({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const u = t, n = F(() => {
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
    }), r = F(() => u.state === "complete" ? "success" : u.state === "critical_failure" || u.state === "rolled_back" ? "error" : "default"), p = F(() => {
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
    return (f, h) => (o(), x(ze, { to: "body" }, [
      t.show ? (o(), s("div", _h, [
        e("div", $h, [
          h[1] || (h[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Ch, [
            g(bh, {
              progress: t.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            e("div", xh, [
              e("div", Sh, l(t.progress) + "%", 1),
              e("div", Ih, l(n.value), 1)
            ]),
            e("div", Eh, [
              (o(!0), s(W, null, ee(p.value, (m) => (o(), s("div", {
                key: m.state,
                class: se(["switch-step", m.status])
              }, [
                e("span", Mh, l(m.icon), 1),
                e("span", zh, l(m.label), 1)
              ], 2))), 128))
            ]),
            h[0] || (h[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Th = /* @__PURE__ */ Q(Lh, [["__scopeId", "data-v-768a5078"]]), Rh = { class: "modal-header" }, Nh = { class: "modal-body" }, Dh = {
  key: 0,
  class: "node-section"
}, Oh = { class: "node-list" }, Uh = {
  key: 1,
  class: "node-section"
}, Ph = { class: "node-list" }, Bh = { class: "modal-actions" }, Fh = /* @__PURE__ */ Y({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (u, n) => (o(), x(ze, { to: "body" }, [
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
          e("div", Rh, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", Nh, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), s("div", Dh, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Oh, [
                (o(!0), s(W, null, ee(t.mismatchDetails.missing_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item add"
                }, " + " + l(r), 1))), 128))
              ])
            ])) : c("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), s("div", Uh, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Ph, [
                (o(!0), s(W, null, ee(t.mismatchDetails.extra_nodes, (r) => (o(), s("div", {
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
          e("div", Bh, [
            g(Z, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => u.$emit("close"))
            }, {
              default: i(() => [...n[10] || (n[10] = [
                y(" Cancel ", -1)
              ])]),
              _: 1
            }),
            g(Z, {
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
}), Ah = /* @__PURE__ */ Q(Fh, [["__scopeId", "data-v-7cad7518"]]), Vh = { class: "comfygit-panel" }, Wh = { class: "panel-header" }, Gh = { class: "header-left" }, jh = {
  key: 0,
  class: "header-info"
}, Hh = { class: "header-actions" }, Kh = { class: "env-switcher" }, qh = {
  key: 0,
  class: "header-info"
}, Jh = { class: "branch-name" }, Yh = { class: "panel-main" }, Qh = { class: "sidebar" }, Xh = { class: "sidebar-section" }, Zh = { class: "sidebar-section" }, e1 = { class: "sidebar-section" }, t1 = { class: "content-area" }, o1 = {
  key: 0,
  class: "error-message"
}, s1 = {
  key: 1,
  class: "loading"
}, n1 = {
  key: 4,
  class: "dialog-overlay"
}, a1 = { class: "dialog-content create-progress-dialog" }, l1 = { class: "dialog-body create-progress-body" }, i1 = { class: "create-progress-message" }, r1 = { class: "dialog-content env-selector-dialog" }, d1 = { class: "dialog-header" }, c1 = { class: "dialog-body" }, u1 = { class: "env-list" }, m1 = { class: "env-info" }, v1 = { class: "env-name-row" }, f1 = { class: "env-indicator" }, g1 = { class: "env-name" }, p1 = {
  key: 0,
  class: "env-branch"
}, h1 = {
  key: 1,
  class: "current-label"
}, y1 = { class: "env-stats" }, w1 = ["onClick"], k1 = { class: "toast-container" }, b1 = { class: "toast-icon" }, _1 = { class: "toast-message" }, $1 = /* @__PURE__ */ Y({
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
      createEnvironment: _,
      getCreateProgress: z,
      deleteEnvironment: w,
      syncEnvironmentManually: k
    } = Se(), T = ao(), O = $(null), L = $([]), R = $([]), G = $([]), U = F(() => G.value.find((A) => A.is_current)), N = $(!1), P = $(null), M = $(null), S = $(!1), V = $(null), q = $(null), oe = $(!1), ne = $(!1), K = $(""), X = $({ state: "idle", progress: 0, message: "" });
    let D = null, C = null;
    const ae = $(!1), te = $({ state: "idle", message: "" }), xe = $(null);
    let ye = null;
    const ge = $("status"), rt = $("this-env");
    function be(A, E) {
      ge.value = A, rt.value = E;
    }
    function pt(A) {
      const re = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[A];
      re && be(re.view, re.section);
    }
    function ht() {
      be("branches", "this-env");
    }
    function yt() {
      n("close"), setTimeout(() => {
        var E;
        const A = document.querySelectorAll("button.comfyui-button");
        for (const re of A)
          if (((E = re.textContent) == null ? void 0 : E.trim()) === "Manager") {
            re.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const he = $(null), Xe = $(!1), Ge = $(!1), Ae = $([]);
    let wt = 0;
    function ce(A, E = "info", re = 3e3) {
      const ke = ++wt;
      return Ae.value.push({ id: ke, message: A, type: E }), re > 0 && setTimeout(() => {
        Ae.value = Ae.value.filter((Le) => Le.id !== ke);
      }, re), ke;
    }
    function Ue(A) {
      Ae.value = Ae.value.filter((E) => E.id !== A);
    }
    function H(A) {
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
    const de = F(() => {
      if (!O.value) return "neutral";
      const A = O.value.workflows, E = A.new.length > 0 || A.modified.length > 0 || A.deleted.length > 0 || O.value.has_changes;
      return O.value.comparison.is_synced ? E ? "warning" : "success" : "error";
    });
    F(() => O.value ? de.value === "success" ? "All synced" : de.value === "warning" ? "Uncommitted changes" : de.value === "error" ? "Not synced" : "" : "");
    async function me() {
      N.value = !0, P.value = null;
      try {
        const [A, E, re, ke] = await Promise.all([
          r(!0),
          p(),
          f(),
          b()
        ]);
        O.value = A, L.value = E.commits, R.value = re.branches, G.value = ke, n("statusUpdate", A), V.value && await V.value.loadWorkflows(!0);
      } catch (A) {
        P.value = A instanceof Error ? A.message : "Failed to load status", O.value = null, L.value = [], R.value = [];
      } finally {
        N.value = !1;
      }
    }
    function Ie(A) {
      M.value = A;
    }
    async function tt(A) {
      var re;
      M.value = null;
      const E = O.value && (O.value.workflows.new.length > 0 || O.value.workflows.modified.length > 0 || O.value.workflows.deleted.length > 0 || O.value.has_changes);
      he.value = {
        title: E ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: E ? "You have uncommitted changes that will be lost." : `Checkout commit ${A.short_hash || ((re = A.hash) == null ? void 0 : re.slice(0, 7))}?`,
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
      const E = O.value && (O.value.workflows.new.length > 0 || O.value.workflows.modified.length > 0 || O.value.workflows.deleted.length > 0 || O.value.has_changes);
      he.value = {
        title: E ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: E ? "You have uncommitted changes." : `Switch to branch "${A}"?`,
        details: E ? Yt() : void 0,
        warning: E ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: E ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          he.value = null, ve();
          const re = ce(`Switching to ${A}...`, "info", 0), ke = await a(A, E);
          Ue(re), ke.status === "success" ? ce("Restarting ComfyUI...", "success") : ce(ke.message || "Branch switch failed", "error");
        }
      };
    }
    async function j(A) {
      const E = ce(`Creating branch ${A}...`, "info", 0), re = await m(A);
      Ue(E), re.status === "success" ? (ce(`Branch "${A}" created`, "success"), await me()) : ce(re.message || "Failed to create branch", "error");
    }
    async function B(A, E = !1) {
      const re = async (ke) => {
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
              he.value = null, await re(!0);
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
              he.value = null, await re(!0);
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
          he.value = null, await re(E);
        }
      };
    }
    async function J(A) {
      M.value = null;
      const E = prompt("Enter branch name:");
      if (E) {
        const re = ce(`Creating branch ${E}...`, "info", 0), ke = await m(E, A.hash);
        Ue(re), ke.status === "success" ? (ce(`Branch "${E}" created from ${A.short_hash}`, "success"), await me()) : ce(ke.message || "Failed to create branch", "error");
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
      S.value = !1, K.value = A, oe.value = !0;
    }
    async function Mt() {
      oe.value = !1, ne.value = !0, ve(), X.value = {
        progress: 10,
        state: st(10),
        message: nt(10)
      };
      try {
        await d(K.value), go(), po();
      } catch (A) {
        at(), ne.value = !1, ce(`Failed to initiate switch: ${A instanceof Error ? A.message : "Unknown error"}`, "error"), X.value = { state: "idle", progress: 0, message: "" };
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
      if (C) return;
      let A = 10;
      const E = 60, re = 5e3, ke = 100, Le = (E - A) / (re / ke);
      C = window.setInterval(() => {
        if (A += Le, A >= E && (A = E, at()), X.value.progress < E) {
          const Te = Math.floor(A);
          X.value = {
            progress: Te,
            state: st(Te),
            message: nt(Te)
          };
        }
      }, ke);
    }
    function at() {
      C && (clearInterval(C), C = null);
    }
    function po() {
      D || (D = window.setInterval(async () => {
        try {
          let A = await T.getStatus();
          if ((!A || A.state === "idle") && (A = await I()), !A)
            return;
          const E = A.progress || 0;
          E >= 60 && at();
          const re = Math.max(E, X.value.progress), ke = A.state && A.state !== "idle" && A.state !== "unknown", Le = ke ? A.state : st(re), Te = ke && A.message || nt(re);
          X.value = {
            state: Le,
            progress: re,
            message: Te
          }, A.state === "complete" ? (at(), Nt(), ne.value = !1, ce(`✓ Switched to ${K.value}`, "success"), await me(), K.value = "") : A.state === "rolled_back" ? (at(), Nt(), ne.value = !1, ce("Switch failed, restored previous environment", "warning"), K.value = "") : A.state === "critical_failure" && (at(), Nt(), ne.value = !1, ce(`Critical error during switch: ${A.message}`, "error"), K.value = "");
        } catch (A) {
          console.error("Failed to poll switch progress:", A);
        }
      }, 1e3));
    }
    function Nt() {
      at(), D && (clearInterval(D), D = null);
    }
    function ho() {
      oe.value = !1, K.value = "";
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
          const re = [];
          E.nodes_installed.length && re.push(`${E.nodes_installed.length} installed`), E.nodes_removed.length && re.push(`${E.nodes_removed.length} removed`);
          const ke = re.length ? `: ${re.join(", ")}` : "";
          ce(`✓ Environment synced${ke}`, "success"), await me();
        } else {
          const re = E.errors.length ? E.errors.join("; ") : E.message;
          ce(`Sync failed: ${re}`, "error");
        }
      } catch (E) {
        Ue(A), ce(`Sync error: ${E instanceof Error ? E.message : "Unknown error"}`, "error");
      }
    }
    async function ko(A) {
      xe.value = A, ae.value = !0, te.value = { state: "creating", message: `Creating environment '${A.name}'...` };
      try {
        const E = await _(A);
        E.status === "started" ? bo() : E.status === "error" && (ae.value = !1, ce(`Failed to create environment: ${E.message}. Check debug logs for details.`, "error"), xe.value = null);
      } catch (E) {
        ae.value = !1, ce(`Error creating environment: ${E instanceof Error ? E.message : "Unknown error"}. Check debug logs.`, "error"), xe.value = null;
      }
    }
    function bo() {
      ye || (ye = window.setInterval(async () => {
        var A;
        try {
          const E = await z();
          te.value = { state: E.state, message: E.message }, E.state === "complete" ? (Jt(), ae.value = !1, ce(`✓ Environment '${E.environment_name}' created`, "success"), await me(), q.value && await q.value.loadEnvironments(), (A = xe.value) != null && A.switch_after && E.environment_name && await je(E.environment_name), xe.value = null) : E.state === "error" && (Jt(), ae.value = !1, ce(`Failed to create environment: ${E.error || E.message}. Check debug logs.`, "error"), xe.value = null);
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
      if (((E = U.value) == null ? void 0 : E.name) === A) {
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
            const re = await w(A);
            re.status === "success" ? (ce(`Environment "${A}" deleted`, "success"), await me(), q.value && await q.value.loadEnvironments()) : ce(re.message || "Failed to delete environment", "error");
          } catch (re) {
            ce(`Error deleting environment: ${re instanceof Error ? re.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    function Yt() {
      if (!O.value) return [];
      const A = [], E = O.value.workflows;
      return E.new.length && A.push(`${E.new.length} new workflow(s)`), E.modified.length && A.push(`${E.modified.length} modified workflow(s)`), E.deleted.length && A.push(`${E.deleted.length} deleted workflow(s)`), A;
    }
    return Ce(me), (A, E) => {
      var re, ke, Le, Te;
      return o(), s("div", Vh, [
        e("div", Wh, [
          e("div", Gh, [
            E[27] || (E[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            O.value ? (o(), s("div", jh)) : c("", !0)
          ]),
          e("div", Hh, [
            e("button", {
              class: se(["icon-btn", { spinning: N.value }]),
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
        e("div", Kh, [
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
            O.value ? (o(), s("div", qh, [
              e("span", null, l(((re = U.value) == null ? void 0 : re.name) || ((ke = O.value) == null ? void 0 : ke.environment) || "Loading..."), 1),
              e("span", Jh, "(" + l(O.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            E[31] || (E[31] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Yh, [
          e("div", Qh, [
            e("div", Xh, [
              E[32] || (E[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: se(["sidebar-item", { active: ge.value === "status" && rt.value === "this-env" }]),
                onClick: E[2] || (E[2] = (le) => be("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: ge.value === "workflows" }]),
                onClick: E[3] || (E[3] = (le) => be("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: ge.value === "models-env" }]),
                onClick: E[4] || (E[4] = (le) => be("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: ge.value === "branches" }]),
                onClick: E[5] || (E[5] = (le) => be("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: se(["sidebar-item", { active: ge.value === "history" }]),
                onClick: E[6] || (E[6] = (le) => be("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: se(["sidebar-item", { active: ge.value === "nodes" }]),
                onClick: E[7] || (E[7] = (le) => be("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: se(["sidebar-item", { active: ge.value === "debug-env" }]),
                onClick: E[8] || (E[8] = (le) => be("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            E[35] || (E[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Zh, [
              E[33] || (E[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: se(["sidebar-item", { active: ge.value === "environments" }]),
                onClick: E[9] || (E[9] = (le) => be("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: ge.value === "model-index" }]),
                onClick: E[10] || (E[10] = (le) => be("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: se(["sidebar-item", { active: ge.value === "settings" }]),
                onClick: E[11] || (E[11] = (le) => be("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: se(["sidebar-item", { active: ge.value === "debug-workspace" }]),
                onClick: E[12] || (E[12] = (le) => be("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            E[36] || (E[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", e1, [
              E[34] || (E[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: se(["sidebar-item", { active: ge.value === "export" }]),
                onClick: E[13] || (E[13] = (le) => be("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: se(["sidebar-item", { active: ge.value === "import" }]),
                onClick: E[14] || (E[14] = (le) => be("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: se(["sidebar-item", { active: ge.value === "remotes" }]),
                onClick: E[15] || (E[15] = (le) => be("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", t1, [
            P.value ? (o(), s("div", o1, l(P.value), 1)) : !O.value && ge.value === "status" ? (o(), s("div", s1, " Loading status... ")) : (o(), s(W, { key: 2 }, [
              ge.value === "status" ? (o(), x(ea, {
                key: 0,
                status: O.value,
                onSwitchBranch: ht,
                onCommitChanges: E[16] || (E[16] = (le) => Xe.value = !0),
                onSyncEnvironment: E[17] || (E[17] = (le) => Ge.value = !0),
                onViewWorkflows: E[18] || (E[18] = (le) => be("workflows", "this-env")),
                onViewHistory: E[19] || (E[19] = (le) => be("history", "this-env")),
                onViewDebug: E[20] || (E[20] = (le) => be("debug-env", "this-env"))
              }, null, 8, ["status"])) : ge.value === "workflows" ? (o(), x(tu, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: V,
                onRefresh: me
              }, null, 512)) : ge.value === "models-env" ? (o(), x(Uu, {
                key: 2,
                onNavigate: pt
              })) : ge.value === "branches" ? (o(), x(ga, {
                key: 3,
                branches: R.value,
                current: ((Le = O.value) == null ? void 0 : Le.branch) || null,
                onSwitch: Rt,
                onCreate: j,
                onDelete: B
              }, null, 8, ["branches", "current"])) : ge.value === "history" ? (o(), x(Sa, {
                key: 4,
                commits: L.value,
                onSelect: Ie,
                onCheckout: tt
              }, null, 8, ["commits"])) : ge.value === "nodes" ? (o(), x(xm, {
                key: 5,
                onOpenNodeManager: yt
              })) : ge.value === "debug-env" ? (o(), x(Cv, { key: 6 })) : ge.value === "environments" ? (o(), x(gf, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: q,
                onSwitch: je,
                onCreate: ko,
                onDelete: _o
              }, null, 512)) : ge.value === "model-index" ? (o(), x(sm, {
                key: 8,
                onRefresh: me
              })) : ge.value === "settings" ? (o(), x(kv, { key: 9 })) : ge.value === "debug-workspace" ? (o(), x(_v, { key: 10 })) : ge.value === "export" ? (o(), x(xf, { key: 11 })) : ge.value === "import" ? (o(), x(Zg, { key: 12 })) : ge.value === "remotes" ? (o(), x(tv, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        M.value ? (o(), x(hp, {
          key: 0,
          commit: M.value,
          onClose: E[21] || (E[21] = (le) => M.value = null),
          onCheckout: tt,
          onCreateBranch: J
        }, null, 8, ["commit"])) : c("", !0),
        he.value ? (o(), x(_p, {
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
        g(yh, {
          show: oe.value,
          "from-environment": ((Te = U.value) == null ? void 0 : Te.name) || "unknown",
          "to-environment": K.value,
          onConfirm: Mt,
          onClose: ho
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Xe.value && O.value ? (o(), x(co, {
          key: 2,
          status: O.value,
          "as-modal": !0,
          onClose: E[23] || (E[23] = (le) => Xe.value = !1),
          onCommitted: yo
        }, null, 8, ["status"])) : c("", !0),
        Ge.value && O.value ? (o(), x(Ah, {
          key: 3,
          show: Ge.value,
          "mismatch-details": {
            missing_nodes: O.value.comparison.missing_nodes,
            extra_nodes: O.value.comparison.extra_nodes
          },
          onConfirm: wo,
          onClose: E[24] || (E[24] = (le) => Ge.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : c("", !0),
        g(Th, {
          show: ne.value,
          state: X.value.state,
          progress: X.value.progress,
          message: X.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        ae.value ? (o(), s("div", n1, [
          e("div", a1, [
            E[39] || (E[39] = e("div", { class: "dialog-header" }, [
              e("h3", { class: "dialog-title" }, "CREATING ENVIRONMENT")
            ], -1)),
            e("div", l1, [
              E[37] || (E[37] = e("div", { class: "create-progress-spinner" }, null, -1)),
              e("p", i1, l(te.value.message), 1),
              E[38] || (E[38] = e("p", { class: "create-progress-hint" }, "This may take several minutes...", -1))
            ])
          ])
        ])) : c("", !0),
        S.value ? (o(), s("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: E[26] || (E[26] = _e((le) => S.value = !1, ["self"]))
        }, [
          e("div", r1, [
            e("div", d1, [
              E[41] || (E[41] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: E[25] || (E[25] = (le) => S.value = !1)
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
            e("div", c1, [
              E[42] || (E[42] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", u1, [
                (o(!0), s(W, null, ee(G.value, (le) => (o(), s("div", {
                  key: le.name,
                  class: se(["env-item", { current: le.is_current }])
                }, [
                  e("div", m1, [
                    e("div", v1, [
                      e("span", f1, l(le.is_current ? "●" : "○"), 1),
                      e("span", g1, l(le.name), 1),
                      le.current_branch ? (o(), s("span", p1, "(" + l(le.current_branch) + ")", 1)) : c("", !0),
                      le.is_current ? (o(), s("span", h1, "CURRENT")) : c("", !0)
                    ]),
                    e("div", y1, l(le.workflow_count) + " workflows • " + l(le.node_count) + " nodes ", 1)
                  ]),
                  le.is_current ? c("", !0) : (o(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Dt) => je(le.name)
                  }, " SWITCH ", 8, w1))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        e("div", k1, [
          g(Eo, { name: "toast" }, {
            default: i(() => [
              (o(!0), s(W, null, ee(Ae.value, (le) => (o(), s("div", {
                key: le.id,
                class: se(["toast", le.type])
              }, [
                e("span", b1, l(H(le.type)), 1),
                e("span", _1, l(le.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), C1 = /* @__PURE__ */ Q($1, [["__scopeId", "data-v-97ffaacd"]]), x1 = { class: "item-header" }, S1 = { class: "item-info" }, I1 = { class: "filename" }, E1 = { class: "metadata" }, M1 = { class: "size" }, z1 = {
  key: 0,
  class: "type"
}, L1 = { class: "item-actions" }, T1 = {
  key: 0,
  class: "progress-section"
}, R1 = { class: "progress-bar" }, N1 = { class: "progress-stats" }, D1 = { class: "downloaded" }, O1 = { class: "speed" }, U1 = {
  key: 0,
  class: "eta"
}, P1 = {
  key: 1,
  class: "status-msg paused"
}, B1 = {
  key: 2,
  class: "status-msg queued"
}, F1 = {
  key: 3,
  class: "status-msg completed"
}, A1 = {
  key: 4,
  class: "status-msg failed"
}, V1 = {
  key: 0,
  class: "retries"
}, W1 = /* @__PURE__ */ Y({
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
      class: se(["download-item", `status-${t.item.status}`])
    }, [
      e("div", x1, [
        e("div", S1, [
          e("div", I1, l(t.item.filename), 1),
          e("div", E1, [
            e("span", M1, l(r(t.item.size)), 1),
            t.item.type ? (o(), s("span", z1, l(t.item.type), 1)) : c("", !0)
          ])
        ]),
        e("div", L1, [
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
      t.item.status === "downloading" ? (o(), s("div", T1, [
        e("div", R1, [
          e("div", {
            class: "progress-fill",
            style: qe({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", N1, [
          e("span", D1, l(r(t.item.downloaded)) + " / " + l(r(t.item.size)), 1),
          e("span", O1, l(p(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), s("span", U1, l(f(t.item.eta)), 1)) : c("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), s("div", P1, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), s("div", B1, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), s("div", F1, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), s("div", A1, [
        y(" ✗ " + l(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), s("span", V1, "(" + l(t.item.retries) + " retries)", 1)) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), _t = /* @__PURE__ */ Q(W1, [["__scopeId", "data-v-2110df65"]]), G1 = { class: "queue-title" }, j1 = { class: "count" }, H1 = { class: "queue-actions" }, K1 = { class: "action-label" }, q1 = {
  key: 0,
  class: "overall-progress"
}, J1 = { class: "progress-bar" }, Y1 = {
  key: 0,
  class: "current-mini"
}, Q1 = { class: "filename" }, X1 = { class: "speed" }, Z1 = {
  key: 1,
  class: "queue-content"
}, ey = {
  key: 0,
  class: "section"
}, ty = {
  key: 1,
  class: "section"
}, oy = { class: "section-header" }, sy = { class: "section-label paused" }, ny = { class: "items-list" }, ay = {
  key: 2,
  class: "section"
}, ly = { class: "section-header" }, iy = { class: "section-label" }, ry = { class: "items-list" }, dy = {
  key: 3,
  class: "section"
}, cy = { class: "section-header" }, uy = { class: "section-label" }, my = { class: "items-list" }, vy = {
  key: 4,
  class: "section"
}, fy = { class: "section-header" }, gy = { class: "section-label failed" }, py = { class: "items-list" }, hy = /* @__PURE__ */ Y({
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
      removeItem: _,
      clearCompleted: z
    } = Et(), w = $(!1);
    let k = null;
    Wt(
      () => ({
        active: a.value,
        failed: f.value.length,
        paused: h.value.length,
        completed: p.value.length
      }),
      (R, G) => {
        k && (clearTimeout(k), k = null);
        const U = R.active === 0 && R.failed === 0 && R.paused === 0 && R.completed > 0, N = G && (G.active > 0 || G.paused > 0);
        U && N && (k = setTimeout(() => {
          z(), k = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const T = F(() => {
      var U;
      if (u.items.length === 0) return 0;
      const R = p.value.length, G = ((U = n.value) == null ? void 0 : U.progress) || 0;
      return Math.round((R + G / 100) / u.items.length * 100);
    });
    function O(R) {
      v(R);
    }
    function L(R) {
      return R === 0 ? "" : `${(R / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (R, G) => (o(), x(ze, { to: "body" }, [
      fe(m) ? (o(), s("div", {
        key: 0,
        class: se(["model-download-queue", { minimized: !w.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: G[0] || (G[0] = (U) => w.value = !w.value)
        }, [
          e("div", G1, [
            G[4] || (G[4] = e("span", { class: "icon" }, "↓", -1)),
            G[5] || (G[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", j1, "(" + l(fe(a)) + "/" + l(fe(u).items.length) + ")", 1)
          ]),
          e("div", H1, [
            e("span", K1, l(w.value ? "minimize" : "expand"), 1)
          ])
        ]),
        w.value ? (o(), s("div", Z1, [
          fe(n) ? (o(), s("div", ey, [
            G[6] || (G[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            g(_t, {
              item: fe(n),
              onCancel: G[1] || (G[1] = (U) => O(fe(n).id))
            }, null, 8, ["item"])
          ])) : c("", !0),
          fe(h).length > 0 ? (o(), s("div", ty, [
            e("div", oy, [
              e("span", sy, "Paused (" + l(fe(h).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: G[2] || (G[2] = //@ts-ignore
                (...U) => fe(I) && fe(I)(...U))
              }, "Resume All")
            ]),
            e("div", ny, [
              (o(!0), s(W, null, ee(fe(h), (U) => (o(), x(_t, {
                key: U.id,
                item: U,
                onResume: (N) => fe(d)(U.id),
                onRemove: (N) => fe(_)(U.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          fe(r).length > 0 ? (o(), s("div", ay, [
            e("div", ly, [
              e("span", iy, "Queued (" + l(fe(r).length) + ")", 1)
            ]),
            e("div", ry, [
              (o(!0), s(W, null, ee(fe(r), (U) => (o(), x(_t, {
                key: U.id,
                item: U,
                onCancel: (N) => O(U.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : c("", !0),
          fe(p).length > 0 ? (o(), s("div", dy, [
            e("div", cy, [
              e("span", uy, "Completed (" + l(fe(p).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: G[3] || (G[3] = //@ts-ignore
                (...U) => fe(z) && fe(z)(...U))
              }, "Clear")
            ]),
            e("div", my, [
              (o(!0), s(W, null, ee(fe(p).slice(0, 3), (U) => (o(), x(_t, {
                key: U.id,
                item: U,
                onRemove: (N) => fe(_)(U.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : c("", !0),
          fe(f).length > 0 ? (o(), s("div", vy, [
            e("div", fy, [
              e("span", gy, "Failed (" + l(fe(f).length) + ")", 1)
            ]),
            e("div", py, [
              (o(!0), s(W, null, ee(fe(f), (U) => (o(), x(_t, {
                key: U.id,
                item: U,
                onRetry: (N) => fe(b)(U.id),
                onRemove: (N) => fe(_)(U.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : c("", !0)
        ])) : (o(), s("div", q1, [
          e("div", J1, [
            e("div", {
              class: "progress-fill",
              style: qe({ width: `${T.value}%` })
            }, null, 4)
          ]),
          fe(n) ? (o(), s("div", Y1, [
            e("span", Q1, l(fe(n).filename), 1),
            e("span", X1, l(L(fe(n).speed)), 1)
          ])) : c("", !0)
        ]))
      ], 2)) : c("", !0)
    ]));
  }
}), yy = /* @__PURE__ */ Q(hy, [["__scopeId", "data-v-60751cfa"]]), wy = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', ky = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', by = {
  comfy: wy,
  phosphor: ky
}, Kt = "comfy", uo = "comfygit-theme";
let lt = null, mo = Kt;
function _y() {
  try {
    const t = localStorage.getItem(uo);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Kt;
}
function vo(t = Kt) {
  lt && lt.remove(), lt = document.createElement("style"), lt.id = "comfygit-theme-styles", lt.setAttribute("data-theme", t), lt.textContent = by[t], document.head.appendChild(lt), document.body.setAttribute("data-comfygit-theme", t), mo = t;
  try {
    localStorage.setItem(uo, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function $y() {
  return mo;
}
function Cy(t) {
  vo(t);
}
const qt = document.createElement("link");
qt.rel = "stylesheet";
qt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(qt);
const xy = _y();
vo(xy);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), Cy(t);
  },
  getTheme: () => {
    const t = $y();
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
function Sy() {
  if (!vt.value) return !1;
  const t = vt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || vt.value.has_changes;
}
function Iy() {
  Pe && Pe.remove(), Pe = document.createElement("div"), Pe.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Pe.appendChild(t), Pe.addEventListener("click", (r) => {
    r.target === Pe && Bt();
  });
  const u = (r) => {
    r.key === "Escape" && (Bt(), document.removeEventListener("keydown", u));
  };
  document.addEventListener("keydown", u), Gt({
    render: () => jt(C1, {
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
function Ey(t) {
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
function My() {
  $t || ($t = document.createElement("div"), $t.className = "comfygit-download-queue-root", eo = Gt({
    render: () => jt(yy)
  }), eo.mount($t), document.body.appendChild($t), console.log("[ComfyGit] Model download queue mounted"));
}
let He = null;
function It() {
  if (!He) return;
  const t = He.querySelector(".commit-indicator");
  t && (t.style.display = Sy() ? "block" : "none");
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
    u.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", u.textContent = "ComfyGit", u.title = "ComfyGit Control Panel", u.onclick = Iy, He = document.createElement("button"), He.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", He.innerHTML = 'Commit <span class="commit-indicator"></span>', He.title = "Quick Commit", He.onclick = () => Ey(He), t.appendChild(u), t.appendChild(He), (f = (p = mt.menu) == null ? void 0 : p.settingsGroup) != null && f.element && (mt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), My();
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
